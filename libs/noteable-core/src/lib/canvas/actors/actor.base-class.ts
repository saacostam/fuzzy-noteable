import {CanvasHandler} from "../handler";
import {RuntimeError} from "@noteable/types";

export type ActorProperties = {
    xRatio: number;
    yRatio: number;
    widthRatio: number;
    heightRatio: number;
    handler?: CanvasHandler;
}

export class Actor{
    xRatio: number;
    yRatio: number;
    widthRatio: number;
    heightRatio: number;
    isKilled = false;
    handler?: CanvasHandler;

    update(canvasHandler: CanvasHandler, delta: number){
      // pass
    }
    draw(ctx: CanvasRenderingContext2D, delta: number ){
      // pass
    }

    kill(){ this.isKilled = true }

    constructor(actorProperties: ActorProperties) {
        this.xRatio = actorProperties.xRatio;
        this.yRatio = actorProperties.yRatio;
        this.widthRatio = actorProperties.widthRatio;
        this.heightRatio = actorProperties.heightRatio;
    }

    private noHandlerRuntimeError(){
        return new RuntimeError('Actor with no handler detected!');
    }

    get x(){
        if (!this.handler) throw this.noHandlerRuntimeError();
        return this.xRatio * this.handler.ctx.canvas.width;
    }

    get y(){
        if (!this.handler) throw this.noHandlerRuntimeError();
        return this.yRatio * this.handler.ctx.canvas.height;
    }

    get width(){
        if (!this.handler) throw this.noHandlerRuntimeError();
        return this.widthRatio * this.handler.ctx.canvas.width;
    }

    get height(){
        if (!this.handler) throw this.noHandlerRuntimeError();
        return this.heightRatio * this.handler.ctx.canvas.height;
    }

    drawLine(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number){
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number){
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
    }
}
