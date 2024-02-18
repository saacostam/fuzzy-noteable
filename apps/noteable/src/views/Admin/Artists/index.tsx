import { isEmpty } from 'lodash';
import { AccountCircle } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Artist } from '@noteable/types';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { useAdminArtists } from './hook';

type ArtistListItemProps = {
  artist: Artist;
};

export function ArtistListItem({ artist }: ArtistListItemProps) {
  const { id, name } = artist;

  return (
    <Link to={`/admin/artist/${id}`}>
      <ListItemButton>
        <ListItemIcon>
          <AccountCircle fontSize={'large'} color={'secondary'} />
        </ListItemIcon>
        <ListItemText primary={name} secondary={id} />
      </ListItemButton>
    </Link>
  );
}

type CreateArtistSectionProps = {
  doCreateArtist: () => void;
  createArtistIsLoading: boolean;
  registerCreateArtistForm: UseFormRegister<FieldValues>;
};

export function CreateArtistSection({
  registerCreateArtistForm,
  doCreateArtist,
  createArtistIsLoading,
}: CreateArtistSectionProps) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant={'h5'} className={'text-center'} sx={{ mb: 2 }}>
        Admin: Create Artist
      </Typography>
      <Stack direction={'row'} spacing={1}>
        <TextField
          size={'small'}
          label={'Artist'}
          {...registerCreateArtistForm('name')}
          fullWidth
        />
        <Button
          variant={'contained'}
          onClick={doCreateArtist}
          disabled={createArtistIsLoading}
        >
          Create
        </Button>
      </Stack>
    </Box>
  );
}

type ArtistsSectionProps = {
  artists: Artist[];
};

export function ArtistsSection({ artists }: ArtistsSectionProps) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant={'h5'} className={'text-center'} sx={{ mb: 1 }}>
        Admin: Artists
      </Typography>
      {isEmpty(artists) ? (
        <>
          <Typography variant={'h6'} color={'error'}>
            Empty Response
          </Typography>
          <Typography>
            There are no artists in the database. Please create new artists or
            check the db/query for possible errors.
          </Typography>
        </>
      ) : (
        <List dense={true}>
          {artists?.map((artist) => (
            <ArtistListItem key={artist.id} artist={artist} />
          ))}
        </List>
      )}
    </Box>
  );
}

export function AdminArtistsView() {
  const {
    artists,
    doCreateArtist,
    createArtistIsLoading,
    getArtistsIsLoading,
    registerCreateArtistForm,
  } = useAdminArtists();

  const artistSectionReady = !getArtistsIsLoading && artists;

  return artistSectionReady ? (
    <>
      <CreateArtistSection
        doCreateArtist={doCreateArtist}
        createArtistIsLoading={createArtistIsLoading}
        registerCreateArtistForm={registerCreateArtistForm}
      />
      <Divider variant="middle" />
      <ArtistsSection artists={artists} />
    </>
  ) : (
    <Typography>Loading...</Typography>
  );
}
