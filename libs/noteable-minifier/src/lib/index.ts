import {MinifiedTablature, Tablature} from "@noteable/types";

export const minifyTab = (tab: Tablature): MinifiedTablature => {
  const musicUnits = tab.musicUnits;

  musicUnits.forEach(
    musicUnit => {
      switch (musicUnit.type){
        case "chord":
          break;
        case "fret-note":
          break;
        case "key-note":
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
