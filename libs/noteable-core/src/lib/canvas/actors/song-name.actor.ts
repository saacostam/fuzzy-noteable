import { Actor, ActorProperties } from '.';

export type SongNameActorProperties = ActorProperties & {
  name: string;
  artistsToString: string;
};

export class SongNameActor extends Actor {
  name: string;
  artistsToString: string;

  constructor(properties: SongNameActorProperties) {
    super(properties);

    this.name = properties.name;
    this.artistsToString = properties.artistsToString;
  }

  update() {}

  draw(ctx: CanvasRenderingContext2D) {
    const CANVAS_WIDTH = ctx.canvas.width;
    const ROUNDED_CORNER_RATIO = 0.00625;

    ctx.fillStyle = 'rgba(42,50,60,0.5)';
    ctx.beginPath();
    ctx.roundRect(
      this.x,
      this.y,
      this.width,
      this.height,
      CANVAS_WIDTH * ROUNDED_CORNER_RATIO
    );
    ctx.fill();

    ctx.font = `${Math.floor(0.5 * this.height)}px Fira Sans`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#FDFFFC';

    const NAME = `${this.name} - ${this.artistsToString}`;
    ctx.fillText(NAME, this.x + this.width / 2, this.y + this.height / 2);
  }
}
