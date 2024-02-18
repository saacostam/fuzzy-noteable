import React from 'react';
import { isEmpty } from 'lodash';
import { GraphicEq } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { useAdminArtistById } from './hook';
import { LonelySong, Note, ScaleType, Decade, Genre } from '@noteable/types';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type CreateSongSectionProps = {
  doCreateSong: () => void;
  createSongIsLoading: boolean;
  registerCreateSongForm: UseFormRegister<FieldValues>;
  notes: Note[];
  scaleTypes: ScaleType[];
  allDecades: Decade[];
  allGenres: Genre[];
};

export function CreateSongSection({
  registerCreateSongForm,
  doCreateSong,
  createSongIsLoading,
  notes,
  scaleTypes,
  allDecades,
  allGenres,
}: CreateSongSectionProps) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant={'h5'} className={'text-center'} sx={{ mb: 2 }}>
        Admin: Create Song
      </Typography>
      <TextField
        size={'small'}
        label={'Song name'}
        {...registerCreateSongForm('name')}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        type={'number'}
        size={'small'}
        label={'BPM'}
        {...registerCreateSongForm('bpm')}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Stack direction={'row'} spacing={1} sx={{ mb: 2 }}>
        <Select
          size={'small'}
          label={'Key:Note'}
          {...registerCreateSongForm('keyNote')}
          fullWidth
        >
          {notes.map((note) => (
            <MenuItem value={note} key={note}>
              {note}
            </MenuItem>
          ))}
        </Select>

        <Select
          size={'small'}
          label={'Key:Scale Type'}
          {...registerCreateSongForm('keyScaleType')}
          fullWidth
        >
          {scaleTypes.map((scaleType) => (
            <MenuItem value={scaleType} key={scaleType}>
              {scaleType}
            </MenuItem>
          ))}
        </Select>
      </Stack>
      <Select
        size={'small'}
        label={'Decade'}
        {...registerCreateSongForm('decade')}
        fullWidth
        sx={{ mb: 2 }}
      >
        {allDecades.map((decade) => (
          <MenuItem value={decade} key={decade}>
            {decade}
          </MenuItem>
        ))}
      </Select>
      <Select
        size={'small'}
        label={'Genre'}
        {...registerCreateSongForm('genre')}
        fullWidth
        sx={{ mb: 2 }}
      >
        {allGenres.map((genre) => (
          <MenuItem value={genre} key={genre}>
            {genre}
          </MenuItem>
        ))}
      </Select>

      <Button
        variant={'contained'}
        onClick={doCreateSong}
        disabled={createSongIsLoading}
      >
        Create
      </Button>
    </Box>
  );
}

type ArtistSongsSectionProps = {
  isArtistSongsReady: boolean;
  artistName: string;
  artistSongs: LonelySong[];
};

function ArtistSongSection({
  isArtistSongsReady,
  artistName,
  artistSongs,
}: ArtistSongsSectionProps) {
  return isArtistSongsReady ? (
    <>
      <Typography variant={'h5'} className={'text-center'} sx={{ mb: 2 }}>
        Admin: {artistName}
      </Typography>
      {isEmpty(artistSongs) ? (
        <>
          <Typography variant={'h6'} color={'error'}>
            Empty Response
          </Typography>
          <Typography>
            The requested artist has no songs in the database. Please add a new
            song or check the database/query for possible errors.
          </Typography>
        </>
      ) : (
        <List dense={true}>
          {artistSongs?.map((song) => (
            <Link to={`/admin/song/${song.id}`} key={song.id}>
              <ListItemButton>
                <ListItemIcon>
                  <GraphicEq fontSize={'large'} color={'secondary'} />
                </ListItemIcon>
                <ListItemText primary={song.name} secondary={song.id} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      )}
    </>
  ) : (
    <Typography>Loading...</Typography>
  );
}

export function AdminArtistById() {
  const {
    getSongsByArtistsIsLoading,
    artistName,
    artistSongs,
    notes,
    scaleTypes,
    allDecades,
    allGenres,
    doCreateSong,
    createSongIsLoading,
    registerCreateSongForm,
  } = useAdminArtistById();
  const isArtistSongsReady = !!(
    !getSongsByArtistsIsLoading &&
    artistName &&
    artistSongs
  );

  return (
    <>
      <CreateSongSection
        doCreateSong={doCreateSong}
        createSongIsLoading={createSongIsLoading}
        registerCreateSongForm={registerCreateSongForm}
        notes={notes}
        scaleTypes={scaleTypes}
        allDecades={allDecades}
        allGenres={allGenres}
      />
      <Divider variant={'middle'} sx={{ mb: 2 }} />
      <ArtistSongSection
        isArtistSongsReady={isArtistSongsReady}
        artistName={artistName}
        artistSongs={artistSongs}
      />
    </>
  );
}
