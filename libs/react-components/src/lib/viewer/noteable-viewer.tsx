import { useEffect, useId, useRef, useState } from 'react';
import { NotaAbleViewer as NAV } from '@noteable/noteable-core';
import { Tablature } from '@noteable/types';
import { CanvasHandlerModeParameters } from '@noteable/noteable-core';

type NoteableViewerProps = {
  tablature: Tablature;
} & CanvasHandlerModeParameters;

export const NoteableViewer = ({ tablature, mode }: NoteableViewerProps) => {
  const [NAVHandler, setNAVHandler] = useState<NAV | null>(null);

  const canvasId = useId();
  const playerId = useId();

  const playerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!NAVHandler) {
      const nvHandler = new NAV({
        canvasId,
        playerId,
        tablature,
        mode,
      });

      setNAVHandler(nvHandler);
    }
  }, []);

  useEffect(() => {
    if (NAVHandler && tablature) {
      NAVHandler.updateTablature(tablature);
    }
  }, [tablature]);

  return (
    <main>
      <div className={'w-100 mx-auto flex flex-col md:flex-row'}>
        <canvas
          id={canvasId}
          width={1600}
          height={900}
          style={{ backgroundColor: '#3E78B2' }}
          className="w-full md:w-2/3"
        />
        <div
          className={
            'flex items-center justify-center bg-black w-full md:w-1/3'
          }
          ref={playerContainerRef}
        >
          <div id={playerId} className="w-100"></div>
        </div>
      </div>
    </main>
  );
};
