import { Actor, ActorProperties } from '.';
import { COLOR } from '../colors';
import { CanvasHandler } from '../handler';

export type ClickableProperties = ActorProperties & {
  drawContent: (this: Clickable, ctx: CanvasRenderingContext2D) => void;
  onClick: (
    this: Clickable,
    canvasHandler: CanvasHandler,
    delta: number
  ) => void;
  backgroundColor?: string;
  color?: string;
};

export class Clickable extends Actor {
  drawContent: (this: Clickable, ctx: CanvasRenderingContext2D) => void;
  onClick: (
    this: Clickable,
    canvasHandler: CanvasHandler,
    delta: number
  ) => void;
  backgroundColor: string;
  color: string;

  constructor(properties: ClickableProperties) {
    super(properties);
    this.drawContent = properties.drawContent;
    this.onClick = properties.onClick;
    this.backgroundColor = properties.backgroundColor || COLOR.STD_GRAY;
    this.color = properties.color || '#ff71cf';
  }

  update(canvasHandler: CanvasHandler, delta: number) {
    super.update(canvasHandler, delta);

    const { clickPos, clicking } = canvasHandler;
    const { x, y } = clickPos;

    if (
      this.x <= x &&
      x <= this.x + this.width &&
      this.y <= y &&
      y <= this.y + this.height &&
      clicking
    ) {
      this.onClick(canvasHandler, delta);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    const CANVAS_WIDTH = ctx.canvas.width;
    const ROUNDED_CORNER_RATIO = 0.00625;

    ctx.fillStyle = this.backgroundColor;
    ctx.beginPath();
    ctx.roundRect(
      this.x,
      this.y,
      this.width,
      this.height,
      CANVAS_WIDTH * ROUNDED_CORNER_RATIO
    );
    ctx.fill();

    this.drawContent(ctx);
  }
}
