import { GetAllTabsDto } from '@noteable/interfaces';
import { MOCK_DATA } from '../mock-data';

export async function getAllTabs() {
  const allTabs = MOCK_DATA;
  return allTabs as GetAllTabsDto;
}
