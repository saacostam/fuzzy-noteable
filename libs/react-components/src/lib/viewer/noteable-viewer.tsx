import {useEffect, useId, useState} from "react";
import { NotaAbleViewer as NAV } from '@noteable/noteable-core';
import { Tablature } from "@noteable/types";
import {CanvasHandlerModeParameters} from "@noteable/noteable-core";

type NoteableViewerProps = {
  tablature: Tablature,
} & CanvasHandlerModeParameters;

export const NoteableViewer = ({ tablature, mode }: NoteableViewerProps) => {
  const [NAVHandler, setNAVHandler] = useState<NAV | null>(null)

  const canvasId = useId();
  const playerId = useId();

  useEffect(() => {
    if (!NAVHandler) {
      const nvHandler = new NAV({
        canvasId,
        playerId,
        tablature,
        mode,
      })

      setNAVHandler(nvHandler);
    }
  }, [])

  return (
    <main>
      <h2 className={"text-neutral-900 font-bold text-xl mb-4 text-center"}>Goodbye My Lover - James Blunt</h2>
      <div className={"w-100 mx-auto flex"}>
        <div className={'flex items-center bg-black w-1/3'}>
          <div id={playerId} className="w-100"></div>
        </div>
        <canvas id={canvasId} width={1600} height={900} style={{backgroundColor: '#3E78B2'}} className="w-2/3"/>
      </div>
    </main>
  )
}
