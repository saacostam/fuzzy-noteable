import {DomHandler, DomHandlerParameters} from "./dom";
import {DataHandler, DataHandlerParameters} from "./data";
import {SourceHandler} from "./source";
import {CanvasHandler, CanvasHandlerModeParameters} from "./canvas";

export type NoteAbleViewerParameters = DomHandlerParameters & DataHandlerParameters & CanvasHandlerModeParameters;

export class NotaAbleViewer{
    domHandler: DomHandler;
    dataHandler: DataHandler;
    sourceHandler: SourceHandler;
    canvasHandler: CanvasHandler;

    constructor({canvasId, playerId, tablature, mode}: NoteAbleViewerParameters) {
        this.domHandler = new DomHandler({canvasId, playerId});
        this.dataHandler = new DataHandler({tablature});

        const source = this.dataHandler.source;
        const { youTubePlayer, playerElement } = this.domHandler.player;
        const ctx = this.domHandler.ctx;

        this.sourceHandler = new SourceHandler({source, youTubePlayer, playerElement});
        this.canvasHandler = new CanvasHandler({
            dataHandler: this.dataHandler,
            sourceHandler: this.sourceHandler,
            ctx: ctx,
            mode: mode,
        });
    }
}
