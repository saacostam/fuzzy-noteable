import { Clickable, ClickableProperties } from './clickable.actor';
import { Actor } from './actor.base-class';

type CapoButtonProperties = Omit<
  ClickableProperties,
  'heightRatio' | 'widthRatio' | 'drawContent' | 'onClick'
> & {
  back?: boolean;
};

interface Point {
  x: number;
  y: number;
}

export function getCapoButtonActor(properties: CapoButtonProperties): Actor {
  return new Clickable({
    drawContent(ctx) {
      ctx.fillStyle = properties.back ? 'white' : 'white';
      const width = this.width / 3;
      const height = this.height / 3;

      const x = this.x + this.width / 2 - width / 2;
      const y = this.y + this.height / 2 - height / 2;

      const drawTriangle = (
        ctx: CanvasRenderingContext2D,
        point1: Point,
        point2: Point,
        point3: Point
      ): void => {
        ctx.beginPath();
        ctx.moveTo(point1.x, point1.y);
        ctx.lineTo(point2.x, point2.y);
        ctx.lineTo(point3.x, point3.y);
        ctx.closePath();
        ctx.fill();
      };

      if (properties.back) {
        drawTriangle(
          ctx,
          { x: x, y: y + height / 2 },
          { x: x + width, y: y },
          { x: x + width, y: y + height }
        );
      } else {
        drawTriangle(
          ctx,
          { x: x + width, y: y + height / 2 },
          { x: x, y: y },
          { x: x, y: y + height }
        );
      }
    },
    onClick: (canvasHandler) => {
      properties.back
        ? canvasHandler.dataHandler.transposeDown()
        : canvasHandler.dataHandler.transposeUp();
    },
    xRatio: properties.xRatio,
    yRatio: properties.yRatio,
    widthRatio: 0.015,
    heightRatio: 0.0445,
  });
}
