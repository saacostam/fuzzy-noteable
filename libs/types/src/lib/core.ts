export type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type Note = 'C'| 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | 'B';
export const SortedNotes: Note[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] as Note[];

export type ScaleType = 'major' | 'minor';
export const SortedScaleTypes: ScaleType[] = ['major', 'minor'] as ScaleType[];

export type Decade = '1940' | '1950' | '1960' | '1970' | '1980' | '1990' | '2000' | '2010' | '2020';
export const SortedDecades: Decade[] = ['1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'] as Decade[];

export type Genre = 'Pop' | 'Rock' | 'Grunge' | 'Folk Rock' | 'R&B';
export const AllGenres: Genre[] = ['Pop', 'Rock', 'Grunge',  'Folk Rock', 'R&B'] as Genre[];

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export const AllDifficulties: Difficulty[] = ['beginner', 'intermediate', 'advanced'] as Difficulty[];

export type Tuning = string;

export type TablatureType = 'guitar';

export interface Artist{
  id: string;
  name: string;
}

export type LeanArtist = Omit<Artist, 'id'>;

export type Key = `${Note} ${ScaleType}`;

export interface Song{
  id: string;
  artists: Artist[];
  name: string;
  bpm?: number[];
  key?: Key;
  decade?: Decade;
  genre?: Genre;
}

export type LonelySong = Omit<Song, 'artists'>;
export type LeanSong = Omit<Song, 'artists' | 'id'>;

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

export type LeanTablature = Omit<Tablature, 'id' | 'song'>;
export type LonelyTablature = Omit<Tablature, 'song'>;

export type Transposition = IntRange<0, 24>;

export type MinifiedTablature = Omit<Tablature, 'musicUnits'> & { musicUnits: string }

export type SourceType = 'youtube';

export type MusicUnitBase = {
  dur: number;
  syncPnt?: string;
  bpm?: number;
  timeSig?: TimeSignature;
}

export type TimeSignature = {
  top: IntRange<1, 64>;
  bottom: IntRange<1, 64>;
}

export type MusicUnitFretBoardNote = MusicUnitBase & {
  type: 'fret';
  self: FretBoardNote
}

export type FretBoardNote = {
  string: IntRange<1, 24>;
  fret: IntRange<0, 24>;
}

export type MusicUnitKeyNote = MusicUnitBase & {
  type: 'key',
  self: KeyNote
}

export type KeyNote = {
  octave: IntRange<0, 12>;
  note: Note;
}

export type ChordSuffix = '' | 'm';
export const AllChordSuffixes: ChordSuffix[] = ['', 'm'] as ChordSuffix[];

export type ChordName = `${Note}${ChordSuffix}`;

interface IChordDefinition{
  usability: number;
}

export interface GuitarChordDefinition extends IChordDefinition{
  bar?: IntRange<1, 24>;
  initialFret?: IntRange<1, 24>;
  barHeight?: IntRange<1, 6>;
  mutedStrings?: IntRange<1, 7>[];
  fingerPositions: FretBoardNote[];
}

export type ChordDefinition = GuitarChordDefinition;

export type MusicUnitChord = MusicUnitBase & {
  type: 'ch';
  self: ChordName;
}

export type MusicUnitChordWithId = MusicUnitChord & {id: number};

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
