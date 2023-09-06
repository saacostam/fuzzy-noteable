export type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type Note = 'C'| 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | 'B';
export type ScaleType = 'major' | 'minor';
export type Decade = '1940' | '1950' | '1960' | '1970' | '1980' | '1990' | '2000' | '2010' | '2020';
export type Genre = string;

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type GuitarTuning = Note[6];
export type Tuning = GuitarTuning;
export type Sign = 'positive' | 'negative';

export type TablatureType = 'guitar';

export interface Transposition{
  delta: IntRange<0, 11>;
  sign: Sign;
}

export interface Artist{
  id: string;
  name: string;
}

export interface Key{
  note: Note;
  type: ScaleType;
}

export interface Song{
  id: string;
  artists: Artist[];
  name: string;
  bpm?: number[];
  key?: Key;
  decade?: Decade;
  genre?: Genre;
}

export type Tablature = {
  id: string;
  song: Song;
  difficulty: Difficulty;
  tuning: Tuning;
  transposition: Transposition;
  source: string;
  // user
  type: TablatureType;
  musicUnits: (MusicUnitChord | MusicUnitKeyNote | MusicUnitFretBoardNote)[];
}

export type MinifiedTablature = Omit<Tablature, 'musicUnits'> & { musicUnits: string }

export type SourceType = 'youtube';

export interface MusicUnitBase{
  beatDuration: number;
  syncPoint?: Date;
  bpm?: number;
  timeSignature?: TimeSignature;
}

export interface TimeSignature{
  top: IntRange<1, 64>;
  bottom: IntRange<1, 64>;
}

export type MusicUnitFretBoardNote = MusicUnitBase & {
  type: 'fret-note';
  self: FretBoardNote
}

export type FretBoardNote = {
  string: IntRange<1, 24>;
  fret: IntRange<0, 24>;
}

export type MusicUnitKeyNote = MusicUnitBase & {
  type: 'key-note',
  self: KeyNote
}

export type KeyNote = {
  octave: IntRange<0, 12>;
  note: Note;
}

export type ChordSuffix = '' | 'm';
export type ChordName = `${Note}${ChordSuffix}`;

interface IChordDefinition{
  usability: number;
}

export interface GuitarChordDefinition extends IChordDefinition{
  bar?: IntRange<1, 24>;
  fingerPositions: FretBoardNote[];
}

export type ChordDefinition = GuitarChordDefinition;

export type MusicUnitChord = MusicUnitBase & {
  type: 'chord';
  self: ChordName;
}

export type Chord = {
  name: ChordName;
  definitions: ChordDefinition[];
}

export type SyncMusicUnit = (
    Omit<MusicUnitChord, 'self'> & {
      self: Chord,
    }
  | MusicUnitKeyNote
  | MusicUnitFretBoardNote
  ) & {
  syncPoint: Date;
  id: string;
};
