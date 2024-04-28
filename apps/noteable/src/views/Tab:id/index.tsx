import { NoteableViewer } from '@noteable/react-components';
import { Skeleton } from '@mui/material';
import { LibraryMusicRounded } from '@mui/icons-material';
import { useHome } from './hook';

export function TabView() {
  const { tablature, isLoading, isSuccess, error } = useHome();

  return isLoading ? (
    <>
      <div className={'flex flex-row mb-4'}>
        <Skeleton
          variant={'rounded'}
          height={60}
          width={60}
          className={'mr-3'}
        />
        <div className={'flex flex-col flex-grow'}>
          <Skeleton variant={'text'} />
          <Skeleton variant={'text'} />
        </div>
      </div>
      <div className="flex flex-row">
        <Skeleton variant="rounded" className={'w-2/3 mr-4'} height={480} />
        <Skeleton variant="rounded" className={'w-1/3'} height={480} />
      </div>
    </>
  ) : isSuccess && tablature ? (
    <>
      <div className={'mb-4 flex flex-row'}>
        <div
          className={
            'bg-primary w-[60px] h-[60px] flex items-center justify-center rounded-lg mr-3'
          }
        >
          <LibraryMusicRounded className={'text-white'} />
        </div>
        <div className={'flex flex-col'}>
          <h3 className={'text-2xl text-white'}>{tablature.song.name}</h3>
          <a href={`/artist/${tablature.song.artists[0].id}`}>
            <h6 className={'text-sm text-primary font-semibold underline'}>
              {tablature.song.artists[0].name}
            </h6>
          </a>
        </div>
      </div>
      <NoteableViewer tablature={tablature} mode={'interactive'} />
    </>
  ) : (
    <span>{error?.toString()}</span>
  );
}
