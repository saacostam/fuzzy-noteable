import { Tablature } from '@noteable/types';
import { MOCK_DATA } from '../mock-data';

export async function getTabById(id: string) {
  const tab = MOCK_DATA.tablatures.find((tab) => tab.id === id);

  return tab as Tablature;
}
