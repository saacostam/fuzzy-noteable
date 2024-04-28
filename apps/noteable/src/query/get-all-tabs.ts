import { Tablature } from '@noteable/types';
import { MOCK_DATA } from '../mock-data';

export async function getAllTabs() {
  const allTabs = MOCK_DATA;
  return allTabs.tablatures as Tablature[];
}
