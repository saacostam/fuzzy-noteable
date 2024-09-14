import { Actor, ActorProperties } from '.';
import { SyncMusicUnit } from '@noteable/types';
import { CanvasHandler } from '../handler';
import { COLOR } from '../colors';

export type StringsFrameActorProperties = ActorProperties;

export class StringsFrameActor extends Actor {
  musicUnitQueue: SyncMusicUnit[];
  currentTime: number;

  static SYNC_DELTA_TIME = 8000;

  constructor(properties: StringsFrameActorProperties) {
    super(properties);
    this.musicUnitQueue = [];
    this.currentTime = 0;
  }

  async update(handler: CanvasHandler) {
    this.currentTime = await handler.sourceHandler.getCurrentTime();
    this.musicUnitQueue = handler.dataHandler.getRangeWithSlack(
      this.currentTime * 1000,
      StringsFrameActor.SYNC_DELTA_TIME
    );
  }

  draw(ctx: CanvasRenderingContext2D) {
    const CANVAS_HEIGHT = ctx.canvas.height;
    const CANVAS_WIDTH = ctx.canvas.width;
    const BASE_X = this.x + 0.025 * CANVAS_WIDTH;
    const CHORD_PREVIEW_SLACK = 0.03556 * CANVAS_HEIGHT;
    const CURRENT_TIME_INDICATOR_SLACK = 0.0445 * CANVAS_HEIGHT;

    ctx.lineWidth = 0.0112 * CANVAS_HEIGHT;
    ctx.strokeStyle = '#FDFFFC';
    ctx.lineCap = 'round';

    // Strings
    const DELTA_Y = 0.039 * CANVAS_HEIGHT;
    for (let string = 0; string < 6; string++)
      this.drawLine(
        ctx,
        this.x,
        this.y + DELTA_Y * string,
        this.x + this.width,
        this.y + DELTA_Y * string
      );

    // Chords
    this.drawChords(ctx, BASE_X, CHORD_PREVIEW_SLACK);

    // Fade-Out
    const fadeOutGrd = ctx.createLinearGradient(0, 0, 200, 0);
    fadeOutGrd.addColorStop(0, COLOR.BG_GRAY_RGB);
    fadeOutGrd.addColorStop(1, 'transparent');
    ctx.fillStyle = fadeOutGrd;
    ctx.fillRect(
      0,
      this.y - CHORD_PREVIEW_SLACK,
      BASE_X,
      this.height + 2 * CHORD_PREVIEW_SLACK
    );

    // Fade-In
    const fadeInGrd = ctx.createLinearGradient(0, 0, 200, 0);
    fadeInGrd.addColorStop(0, 'transparent');
    fadeInGrd.addColorStop(1, COLOR.BG_GRAY_RGB);
    ctx.fillStyle = fadeInGrd;
    ctx.fillRect(
      this.x + this.width,
      this.y - CHORD_PREVIEW_SLACK,
      CANVAS_WIDTH - (this.x + this.width),
      this.height + 2 * CHORD_PREVIEW_SLACK
    );

    // Current Time Indicator
    ctx.lineWidth = 0.0112 * CANVAS_HEIGHT;
    ctx.strokeStyle = COLOR.TIME_INDICATOR;
    ctx.lineCap = 'round';
    this.drawLine(
      ctx,
      BASE_X,
      this.y - CURRENT_TIME_INDICATOR_SLACK,
      BASE_X,
      this.y + this.height + CURRENT_TIME_INDICATOR_SLACK
    );
  }

  private drawChords(
    ctx: CanvasRenderingContext2D,
    BASE_X: number,
    CHORD_PREVIEW_SLACK: number
  ) {
    const CANVAS_WIDTH = ctx.canvas.width;
    const ROUNDED_CORNER_RATIO = 0.00625;

    for (let i = 0; i < this.musicUnitQueue.length; i++) {
      const leftTime = Math.max(0, this.musicUnitQueue[i].syncPoint.getTime());
      const rightTime = Math.min(
        i + 1 < this.musicUnitQueue.length
          ? this.musicUnitQueue[i + 1].syncPoint.getTime()
          : leftTime + StringsFrameActor.SYNC_DELTA_TIME,
        leftTime + StringsFrameActor.SYNC_DELTA_TIME
      );

      const X_PROPORTION =
        (leftTime - this.currentTime * 1000) /
        StringsFrameActor.SYNC_DELTA_TIME;
      const WIDTH_PROPORTION =
        (rightTime - leftTime) / StringsFrameActor.SYNC_DELTA_TIME;

      ctx.fillStyle = COLOR.TRANSPARENT_GRAY;

      ctx.beginPath();
      ctx.roundRect(
        BASE_X + X_PROPORTION * this.width,
        this.y - CHORD_PREVIEW_SLACK,
        WIDTH_PROPORTION * this.width - CHORD_PREVIEW_SLACK,
        this.height + 2 * CHORD_PREVIEW_SLACK,
        CANVAS_WIDTH * ROUNDED_CORNER_RATIO
      );
      ctx.fill();

      ctx.font = `bold ${0.045 * CANVAS_WIDTH}px Fira Sans, Verdana`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#FDFFFC';

      const currUnit = this.musicUnitQueue[i];
      if (currUnit.type === 'ch') {
        const CHORD = currUnit.self.name;
        ctx.fillText(
          CHORD,
          BASE_X +
            X_PROPORTION * this.width +
            (WIDTH_PROPORTION * this.width - 20) / 2,
          this.y + this.height / 2
        );
      }
    }
  }
}
