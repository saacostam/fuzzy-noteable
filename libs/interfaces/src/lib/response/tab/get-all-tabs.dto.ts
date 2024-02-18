class SongDto {
  id: string;
  name: string;
  artists: Array<ArtistDto>;
}

class ArtistDto {
  id: string;
  name: string;
}

class TabDto {
  id: string;
  song: SongDto;
}

export class GetAllTabsDto {
  tablatures: Array<TabDto>;
}
