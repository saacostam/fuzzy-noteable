import { NoteableViewer } from '@noteable/react-components';
import { useHome } from './hook';
import { MusicIcon } from '../../components';
import { Link } from 'react-router-dom';

export function TabView() {
  const { tablature, isLoading, isSuccess, error } = useHome();

  return isLoading ? (
    <>
      <div className={'flex flex-row mb-4'}>
        <div className={'skeleton w-mr-3 w-[60px] h-[60px]'} />
        <div className={'flex flex-col flex-grow'}>
          <div className={'skeleton w-full'} />
          <div className={'skeleton w-full'} />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="skeleton w-2/3 h-[480px] mr-4"></div>
        <div className="skeleton w-1/3 h-[480px]"></div>
      </div>
    </>
  ) : isSuccess && tablature ? (
    <>
      <div className={'mb-4 flex flex-row'}>
        <div
          className={
            'bg-secondary w-[60px] h-[60px] flex items-center justify-center rounded-lg mr-3 text-white'
          }
        >
          <MusicIcon />
        </div>
        <div className={'flex flex-col'}>
          <h3 className={'text-3xl text-white'}>{tablature.song.name}</h3>
          <Link to={`/?artists=${tablature.song.artists[0].name}`}>
            <h6 className={'text-md text-secondary font-semibold underline'}>
              {tablature.song.artists[0].name}
            </h6>
          </Link>
        </div>
      </div>
      <NoteableViewer tablature={tablature} mode={'interactive'} />
    </>
  ) : (
    <span>{error?.toString()}</span>
  );
}
