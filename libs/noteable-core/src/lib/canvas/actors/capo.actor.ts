import { Actor, ActorProperties } from '.';
import { COLOR } from '../colors';
import { CanvasHandler } from '../handler';

export type CapoActorProperties = ActorProperties;

export class CapoActor extends Actor {
  capo: number;

  constructor(properties: CapoActorProperties) {
    super(properties);
    this.capo = 0;
  }

  update(canvasHandler: CanvasHandler) {
    this.capo = canvasHandler.dataHandler.tablature.transposition;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const CANVAS_WIDTH = ctx.canvas.width;
    const ROUNDED_CORNER_RATIO = 0.00625;

    ctx.fillStyle = COLOR.STD_GRAY;
    ctx.beginPath();
    ctx.roundRect(
      this.x,
      this.y,
      this.width,
      this.height,
      CANVAS_WIDTH * ROUNDED_CORNER_RATIO
    );
    ctx.fill();

    ctx.font = `bold ${Math.floor(0.3125 * this.width)}px Fira Sans, Verdana`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'white';

    ctx.fillText('CAPO', this.x + this.width / 2, this.y + this.height / 3);
    ctx.font = `${Math.floor(0.3125 * this.width)}px Fira Sans, Verdana`;
    ctx.fillText(
      String(this.capo),
      this.x + this.width / 2,
      this.y + (this.height * 13) / 18
    );
  }
}
