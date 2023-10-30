import React from "react";
import {isEmpty} from "lodash";
import {GraphicEq} from "@mui/icons-material";
import {List, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {Link} from "react-router-dom";

import {useAdminArtistById} from "./hook";

export function AdminArtistById(){
  const { getSongsByArtistsIsLoading, artistName, artistSongs } = useAdminArtistById();
  const isArtistSongsReady = (!getSongsByArtistsIsLoading && artistName && artistSongs);

  return (
    isArtistSongsReady ? (
      <>
        <Typography variant={'h5'} className={'text-center'} sx={{mb:2}}>
          Admin: {artistName}
        </Typography>
        {
          isEmpty(artistSongs) ?
            (
              <>
                <Typography variant={'h6'} color={'error'}>Empty Response</Typography>
                <Typography>The requested artist has no songs in the database. Please add a new song or check the database/query for possible errors.</Typography>
              </>
            ):(
              <List
                dense={true}
              >
                {
                  artistSongs?.map(song => (
                    <Link to={`/admin/song/${song.id}`}>
                      <ListItemButton>
                        <ListItemIcon>
                          <GraphicEq
                            fontSize={'large'}
                            color={"secondary"}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={song.name}
                          secondary={song.id}
                        />
                      </ListItemButton>
                    </Link>
                  ))
                }
              </List>
            )
        }
      </>
    ):(
      <Typography>Loading...</Typography>
    )
  )
}
