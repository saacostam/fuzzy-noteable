import {Link} from "react-router-dom";
import {List, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {LibraryMusic} from "@mui/icons-material";

import { useAdminTabsView } from './hook';

type TabListItemProps = {
  tabId: string;
  songId: string;
  songName: string;
  artists: Array<{
    id: string;
    name: string;
  }>
}

function TabListItem(
  {
    tabId,
    songId,
    songName,
    artists,
  }: TabListItemProps
){
  return (
    <ListItemButton>
      <ListItemIcon>
        <LibraryMusic
          fontSize={'large'}
          color={"secondary"}
        />
      </ListItemIcon>
      <div
        className="flex flex-row w-full justify-between"
      >
        <Link
          to={`/tab/${tabId}`}
        >
          <ListItemText
            primary={songName}
            secondary={'Tablature'}
          />
        </Link>
        <Link
          to={`/admin/song/${songId}`}
        >
          <ListItemText
            primary={songName}
            secondary={'Song'}
          />
        </Link>
        {
          artists.map(artist => (
            <Link
              key={artist.id}
              to={`/admin/artist/${artist.id}`}
            >
              <ListItemText
                primary={artist.name}
                secondary={'Artist'}
              />
            </Link>
          ))
        }
      </div>
    </ListItemButton>
  )
}

export function AdminTabsView(){
  const {
    tablatures,
    isSuccess,
    isLoading,
  } = useAdminTabsView();

  return (
    <>
      <Typography variant={'h5'} className={'text-center'} sx={{mb:1}}>Admin: Tabs</Typography>
      {
        isLoading
          ? (
            <Typography>Loading...</Typography>
          )
          : isSuccess
          ? (
            <List
              dense
            >
              {
                tablatures.map(tab => (
                  <TabListItem
                    key={tab.id}
                    tabId={tab.id}
                    songId={tab.song.id}
                    songName={tab.song.name}
                    artists={tab.song.artists}
                  />
                ))
              }
            </List>
            )
          :  (
            <Typography>Something went wrong!</Typography>
          )
      }
    </>
  )
}
