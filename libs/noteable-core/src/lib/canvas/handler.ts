import {DataHandler} from "../data";
import {SourceHandler} from "../source";
import {
  Actor,
  ChordPreviewActor,
  SongNameActor,
  StringsFrameActor,
  getCapoButtonActor, CapoActor
} from "./actors";
import {SyncMusicUnit} from "@noteable/types";
import {v4 as uuid} from 'uuid';

export type CanvasHandlerModeParameters = {
  mode: 'video' | 'interactive';
}

export type CanvasHandlerParameters = {
  dataHandler: DataHandler;
  sourceHandler: SourceHandler;
  ctx: CanvasRenderingContext2D;
} & CanvasHandlerModeParameters;

export class CanvasHandler{
    dataHandler: DataHandler;
    sourceHandler: SourceHandler;
    ctx: CanvasRenderingContext2D;

    width: number;
    height: number;

    actors: Actor[];

    lastLoop: number;

    clicking: boolean;
    clickPos: {
      x: number;
      y: number;
    }

    mode: 'video' | 'interactive'

    // TODO: Create a separate Preview Queue Handler
    previewQueueHandlerCurrentId: string;
    previewQueueHandlerCurrent?: SyncMusicUnit;
    previewQueueHandlerDone?: SyncMusicUnit;

    constructor({dataHandler, sourceHandler, ctx, mode }: CanvasHandlerParameters) {
        this.dataHandler = dataHandler;
        this.sourceHandler = sourceHandler;
        this.ctx = ctx;

        const canvas = this.ctx.canvas;
        this.width = canvas.width;
        this.height = canvas.height;

        this.actors = [];
        this.lastLoop = 0;

        this.clicking = false;
        this.clickPos = {x: 0, y: 0};

        this.mode = mode;

        this.previewQueueHandlerCurrentId = uuid();

        this.setupEventListeners();
        this.setup();
        this.loop();
    }

    add(actor: Actor){
        actor.handler = this;
        this.actors.push(actor);
    }

  private setupEventListeners(){
      const {canvas} = this.ctx;

      const clickHandler = (e: MouseEvent) => {
        this.clickPos.x = e.offsetX * canvas.width / canvas.offsetWidth;
        this.clickPos.y = e.offsetY * canvas.height / canvas.offsetHeight;

        this.clicking = true;
      }

      canvas.addEventListener('click', clickHandler.bind(this));
  }

    private setup(){
        this.add(new SongNameActor({
            xRatio: 0.13,
            yRatio: 0.0445,
            widthRatio: 0.7375,
            heightRatio: 0.07111111111,
            name: this.dataHandler.song.name,
            artistsToString: this.dataHandler.song.artists[0].name,
        }));

        this.add(new StringsFrameActor({
            xRatio: 0.02,
            yRatio: 0.7289,
            widthRatio: 0.95375,
            heightRatio: 0.196,
        }));

        if (this.mode === 'interactive'){
          this.add(getCapoButtonActor({
            back: true,
            xRatio: 0.0225,
            yRatio: 0.0575,
          }));

          this.add(new CapoActor({
            xRatio: 0.0425,
            yRatio: 0.0445,
            widthRatio: 0.04,
            heightRatio: 0.07112,
          }));

          this.add(getCapoButtonActor({
            back: false,
            xRatio: 0.0225 + 0.065,
            yRatio: 0.0575,
          }));
        }else{
          this.add(new CapoActor({
            xRatio: 0.0225,
            yRatio: 0.0445,
            widthRatio: 0.04,
            heightRatio: 0.07112,
          }));
        }
    }

    async loop(){
        const now = await this.sourceHandler.getCurrentTime()*1000;
        const delta = Math.max(now - this.lastLoop, 0);

        const {current, next} = this.dataHandler.getCurrentAndNext(now);
        this.handlePreview(current, next);

        // Remove killed actors
        this.actors = this.actors.filter( ACTOR => !ACTOR.isKilled);

        // Update
        this.actors.forEach( ACTOR => ACTOR.update(this, delta) );

        // Draw
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.actors.forEach( ACTOR => ACTOR.draw(this.ctx, delta));

        this.lastLoop = now;
        this.clicking = false;
        window.requestAnimationFrame(this.loop.bind(this));
    }

    private handlePreview(current?: SyncMusicUnit, next?: SyncMusicUnit){
        if (!this.previewQueueHandlerCurrentId){
            if (current) this.previewQueueHandlerCurrentId = current.id;
            this.previewQueueHandlerCurrent = current? current: undefined;
            this.previewQueueHandlerDone = undefined;
        }

        if (current && this.previewQueueHandlerCurrentId != current.id) {
            this.actors.forEach(ACTOR => {
                if (ACTOR instanceof ChordPreviewActor) ACTOR.kill();
            });

            this.previewQueueHandlerDone = this.previewQueueHandlerCurrent;
            this.previewQueueHandlerCurrent = current;
            this.previewQueueHandlerCurrentId = current?.id;

            let DURATION;
            if (this.previewQueueHandlerCurrent && next) DURATION = next.syncPoint.getTime() - this.previewQueueHandlerCurrent.syncPoint.getTime();

            if (this.previewQueueHandlerCurrent?.type === 'ch'){
                this.add(
                    new ChordPreviewActor({
                        xRatio: 0.35,
                        yRatio: 0.1422,
                        widthRatio: 0.3,
                        heightRatio: 0.533,
                        chord: this.previewQueueHandlerCurrent.self,
                        duration: DURATION
                    })
                )
            }

            if (next?.type === 'ch'){
                this.add(
                    new ChordPreviewActor({
                        xRatio: 0.6575,
                        yRatio: 0.24,
                        widthRatio: 0.21125,
                        heightRatio: 0.3733333333,
                        chord: next.self
                    })
                )
            }

            if (this.previewQueueHandlerDone && this.previewQueueHandlerDone?.type === 'ch'){
                const actor = new ChordPreviewActor({
                    xRatio: 0.13,
                    yRatio: 0.24,
                    widthRatio: 0.21125,
                    heightRatio: 0.3733333333,
                    chord: this.previewQueueHandlerDone.self,
                    checked: true,
                });
                this.add(actor);
            }
        }
    }
}
