import {MinifiedTablature, Tablature} from "@noteable/types";

export const minifyTab = (tab: Tablature): MinifiedTablature => {
  const musicUnits = tab.musicUnits;

  musicUnits.forEach(
    musicUnit => {
      switch (musicUnit.type){
        case "ch":
          break;
        case "fret":
          break;
        case "key":
          break;
        default:
          throw new Error('Trying to minify a undefined music unit!');
      }
    }
  )

  return {
    ...tab,
    musicUnits: '',
  };
}
