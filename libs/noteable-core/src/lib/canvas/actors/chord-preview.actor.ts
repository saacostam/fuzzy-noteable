import {Actor, ActorProperties} from ".";
import {Chord} from "@noteable/types";
import {CanvasHandler} from "../handler";

export type ChordPreviewActorProperties = ActorProperties & {
    chord: Chord
    size?: 'small' | 'large';
    checked?: boolean;
    duration?: number;
}

export class ChordPreviewActor extends Actor{
    chord: Chord;
    size: string;
    checked: boolean;
    duration?: number;
    deltaTime: number;

    static COLOR = {
        NOT_CHECKED: 'rgba(1,22,39,0.7)',
        CHECKED: 'rgb(142,220,105, 0.8)',
    }

    constructor(chordPreviewActorProperties: ChordPreviewActorProperties) {
        super(chordPreviewActorProperties);

        this.chord = chordPreviewActorProperties.chord;
        this.size = chordPreviewActorProperties.size || 'small';
        this.checked = chordPreviewActorProperties.checked || false;
        this.duration = chordPreviewActorProperties.duration;
        this.deltaTime = 0;
    }

    // @ts-ignore
    update(engine: CanvasHandler, deltaTime: number) {
        this.deltaTime += deltaTime;
    }

    draw(ctx: CanvasRenderingContext2D) {
        const CANVAS_WIDTH =  ctx.canvas.width;
        const ROUNDED_CORNER_RATIO = 0.00625;

        ctx.fillStyle = this.checked ? ChordPreviewActor.COLOR.CHECKED : ChordPreviewActor.COLOR.NOT_CHECKED;
        ctx.beginPath();
        ctx.roundRect(this.x, this.y, this.width, this.height, CANVAS_WIDTH * ROUNDED_CORNER_RATIO);
        ctx.fill();

        this.drawChord(ctx, this.chord);

        ctx.font = `bold ${Math.floor(0.15 * this.width)}px Verdana`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#FDFFFC';

        const CHORD = `${this.chord.name.note}${this.chord.name.suffix}`;

        ctx.fillText(CHORD, this.x + this.width/2, this.y + this.height * 0.15);

        this.drawProgress(ctx);
    }

    private drawChord(ctx: CanvasRenderingContext2D, chord: Chord){
        // Frame
        const FRAME_WIDTH = this.width * 0.45;
        const FRAME_HEIGHT = this.height * 0.55;
        const FRAME_X = this.x + (this.width - FRAME_WIDTH)/2;
        const FRAME_Y = this.y + this.height * 0.3;

        const DELTA_Y_AMOUNT = (0.1377 * this.height);
        const DELTA_X_AMOUNT = (0.09 * this.width);

        // Frame: Horizontal Lines
        ctx.strokeStyle = '#FDFFFC';
        ctx.lineCap = 'round';
        ctx.lineWidth = 0.01666666667 * this.height;
        this.drawLine(ctx, FRAME_X, FRAME_Y, FRAME_X + FRAME_WIDTH, FRAME_Y);

        ctx.lineWidth = 0.004166666667 * this.height;
        for (let delta = 1; delta <= 4; delta++){
            this.drawLine(ctx, FRAME_X, FRAME_Y + DELTA_Y_AMOUNT*delta, FRAME_X + FRAME_WIDTH, FRAME_Y + DELTA_Y_AMOUNT*delta);
        }

        // Frame: Vertical Lines
        ctx.lineWidth = 0.004166666667 * this.height;
        for (let delta = 0; delta < 6; delta++){
            this.drawLine(ctx, FRAME_X + DELTA_X_AMOUNT*delta, FRAME_Y, FRAME_X + DELTA_X_AMOUNT*delta, FRAME_Y + FRAME_HEIGHT);
        }

        const { fingerPositions , bar} = chord.definitions[0];
        const CHORD_BASE_Y = FRAME_Y + 0.0685*this.height;

        if (bar){
            ctx.lineWidth = 0.0685*this.height;
            ctx.lineCap = 'round';

            const EXTENSION = (0.05 * this.width);
            const BAR_X = FRAME_X - (EXTENSION/2);
            const BAR_WIDTH = FRAME_WIDTH + EXTENSION;
            this.drawLine(ctx, BAR_X, CHORD_BASE_Y + DELTA_Y_AMOUNT*(bar-1), BAR_X + BAR_WIDTH, CHORD_BASE_Y + DELTA_Y_AMOUNT*(bar-1));
        }

        fingerPositions.forEach(fretBoardNote => {
            ctx.lineCap = 'round';
            ctx.fillStyle = '#FDFFFC';

            const {string, fret} = fretBoardNote;
            const X = FRAME_X + FRAME_WIDTH - ((string-1)*DELTA_X_AMOUNT);
            const Y = CHORD_BASE_Y + (fret-1)*DELTA_Y_AMOUNT;
            const R = 0.03333333333 * this.width;

            this.drawCircle(ctx, X, Y, R);
        })
    }

    private drawProgress(ctx: CanvasRenderingContext2D){
        if (this.duration){
            const PROGRESS_PERCENTAGE = Math.min(this.deltaTime/this.duration + 0.05, 1);

            const PROGRESS_X = this.x + 0.045 * this.width;
            const PROGRESS_Y = this.y + 0.9333333333 * this.height;
            const PROGRESS_WIDTH = 0.9166666667 * this.width;

            ctx.lineWidth = 0.034 * this.height;
            ctx.strokeStyle = '#FDFFFC';
            this.drawLine(ctx, PROGRESS_X, PROGRESS_Y, PROGRESS_X + PROGRESS_WIDTH, PROGRESS_Y);

            ctx.strokeStyle = ChordPreviewActor.COLOR.CHECKED;
            this.drawLine(ctx, PROGRESS_X, PROGRESS_Y, PROGRESS_X + PROGRESS_WIDTH * PROGRESS_PERCENTAGE, PROGRESS_Y);
        }
    }
}
