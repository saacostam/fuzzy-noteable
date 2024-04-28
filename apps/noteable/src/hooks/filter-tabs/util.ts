export const removeDuplicates = <T>(values: T[]): T[] =>
  values.filter((val, index) => values.indexOf(val) === index);
