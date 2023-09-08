import {Clickable, ClickableProperties} from "./clickable.actor";
import {Actor} from "./actor.base-class";

type CapoButtonProperties = Omit<ClickableProperties, 'heightRatio' | 'widthRatio' | 'drawContent' | 'onClick'> & {
  back?: boolean;
}

export function getCapoButtonActor(properties: CapoButtonProperties): Actor{
  return new Clickable({
    drawContent(ctx){
      ctx.fillStyle = properties.back ? 'red' : 'green';
      const width = this.width/3;
      const height = this.height/3;
      ctx.fillRect(this.x + this.width/2 - width/2, this.y + this.height/2 - height/2, width, height);
    },
    onClick: (canvasHandler) => {
      properties.back ?
        canvasHandler.dataHandler.transposeDown():
        canvasHandler.dataHandler.transposeUp();
    },
    xRatio: properties.xRatio,
    yRatio: properties.yRatio,
    widthRatio: 0.015,
    heightRatio: 0.0445,
  });
}
