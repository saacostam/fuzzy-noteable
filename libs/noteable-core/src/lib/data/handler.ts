import {Chord, DataError, SortedNotes, SyncMusicUnit, Tablature, Transposition, SILENCE_CHORD_NAME} from "@noteable/types";
import {CHORDS} from "@noteable/realistic-mock-data";
import {v4 as uuid} from 'uuid';

import {parseChord} from "../util";

export interface DataHandlerParameters{
    tablature: Tablature;
}

export class DataHandler{
    tablature: Tablature;
    schedule: SyncMusicUnit[];
    countUpdates = 0;

    constructor({tablature}: DataHandlerParameters) {
        this.updateTablature(tablature);
    }

    public updateTablature(tablature: Tablature){
      this.countUpdates = this.countUpdates+1;
      this.tablature = tablature;
      this.schedule = this.buildSchedule(this.tablature);
    }

    private undefinedChordError(chord?: Chord | string){
      return new DataError(`Trying to access a undefined chord! ${chord}`);
    }

    buildSchedule(tablature: Tablature): SyncMusicUnit[]{
        const syncedMusicUnits: SyncMusicUnit[] = [];

        const { musicUnits } = tablature;

        if (!musicUnits[0].bpm || !musicUnits[0].syncPnt || !musicUnits[0].timeSig) throw new DataError('The given tablature has incomplete initial data. Please check: bpm, time signtaure or initial sync point.');

        let bpm = musicUnits[0].bpm;
        let currentTime = new Date(musicUnits[0].syncPnt);

        // TODO: Consider time signature for scheduling. Default now is 4/4

        for (const mUnit of musicUnits){
            bpm = mUnit.bpm ? mUnit.bpm : bpm;
            currentTime = mUnit.syncPnt ? new Date(mUnit.syncPnt) : currentTime;

            if (mUnit.type === 'ch'){
              const chord =
                mUnit.self.includes(SILENCE_CHORD_NAME)
                  ? CHORDS.find(CH => CH.name.includes(SILENCE_CHORD_NAME))
                  : CHORDS.find(CH => CH.name === mUnit.self);

              if (!chord) throw this.undefinedChordError(mUnit.self);

              const newlySyncedUnit: SyncMusicUnit = {
                type: mUnit.type,
                dur: mUnit.dur,
                syncPoint: currentTime,
                bpm: bpm,
                id: uuid(),
                self: chord,
              }

              syncedMusicUnits.push(newlySyncedUnit);
            }

            currentTime = new Date( currentTime.getTime() + mUnit.dur*(60000/bpm) );
        }

        return syncedMusicUnits;
    }

    private binarySearch(currentTime: number){
        if (isNaN(currentTime)) return -1;

        let l = 0;
        let r: number = this.schedule.length - 1;

        while (l <= r) {
            const mid: number = l + Math.floor((r-l) / 2);
            const midTime = this.schedule[mid].syncPoint.getTime();

            if (midTime === currentTime) return mid;
            if (currentTime < midTime) r = mid - 1;
            else l = mid + 1;
        }

        return r;
    }

    getCurrent(currentTime: number){
        const index = this.binarySearch(currentTime);
        return this.schedule[index];
    }

    getCurrentAndNext(currentTime: number){
        const index = this.binarySearch(currentTime);
        return {
            current: this.schedule[index],
            next: index + 1 < this.schedule.length ? this.schedule[index+1] : undefined,
        }
    }

    getRangeWithSlack(currentTime: number, deltaTime: number){
        const l = this.binarySearch(currentTime) - 1;
        const r = this.binarySearch(currentTime + deltaTime) + 1;

        const range = [];
        for (let i = l; i <= r; i++) {
            if (0 <= i && i < this.schedule.length) range.push(this.schedule[i]);
        }

        return range;
    }

    get source(){
        return this.tablature.source;
    }

    get song(){
        return this.tablature.song;
    }

    transposeDown(){
      this.transpose(false);
    }

  transposeUp(){
    this.transpose(true);
  }

  private transpose(up?: boolean){
    const notesToTranspose = SortedNotes.slice(0, -1);
    console.log(notesToTranspose);
    this.tablature.transposition = (this.tablature.transposition + ( up ? 1 : -1) + notesToTranspose.length) % notesToTranspose.length as Transposition;
    this.schedule.forEach(
      SMU => {
        if (SMU.type === 'ch'){
          const { note, suffix } = parseChord(SMU.self.name);

          if (note === 'SILENCE') return;

          const newNoteIndex = (notesToTranspose.findIndex(val => val === note) + ( !up ? 1 : -1) + notesToTranspose.length) % notesToTranspose.length;
          const newNote = notesToTranspose[newNoteIndex];

          const newChord = CHORDS.find(CH => CH.name === `${newNote}${suffix}`);

          if (!newChord) throw this.undefinedChordError(newChord);
          SMU.self = newChord;
        }
      }
    )
  }

    get transposition(){
      return this.tablature.transposition;
    }
}
