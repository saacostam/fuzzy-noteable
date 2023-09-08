import {DataError, Note} from "@noteable/types";

export function parseChord(chord: string) : {note: Note, suffix: string}{
  let state: 'init' | 'second'= 'init' as const;
  let j = 0;

  for (let i = 0; i < 2; i++){
    if (state === 'init'){
      switch (chord[j]){
        case 'A':
        case 'B':
        case 'C':
        case 'D':
        case 'E':
        case 'F':
        case 'G':
          state = 'second';
          j+=1;
          break;
        default:
          throw new DataError('Trying to parse a invalid chord!');
      }
    }else if (state === 'second'){
      switch (chord[j]){
        case '#':
          j+=1;
          break;
        default:
          break;
      }
    }
  }

  return {
    note: chord.substring(0, j) as Note,
    suffix: chord.substring(j),
  }
}
