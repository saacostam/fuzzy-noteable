import {DomSetupError} from "@noteable/types";
import { DOM } from "../constant";
import YouTubePlayerFactory from 'youtube-player';
import { YouTubePlayer } from "youtube-player/dist/types";

export interface DomHandlerParameters{
    playerId?: string;
    canvasId?: string;
}

export class DomHandler{
    canvas: HTMLCanvasElement;
    playerElement: HTMLElement;
    youTubePlayer: YouTubePlayer;
    _ctx: CanvasRenderingContext2D;

    buildErrorMessageWhenFailingToFindElementBySelector = (element: string) => `No ${element} element was found for the given ID. Please check if the provided ID is correct or exclude it to create a(n) ${element} element from scratch.`

    constructor({canvasId, playerId}: DomHandlerParameters) {
        let maybeCanvas: HTMLCanvasElement | null = null;
        let maybePlayer: HTMLElement | null = null;

        if (canvasId){
            const element = document.getElementById(canvasId);
            if (!element || !(element instanceof HTMLCanvasElement)) throw new DomSetupError(this.buildErrorMessageWhenFailingToFindElementBySelector('canvas'));
            maybeCanvas = element;
        }

        if (playerId){
            const element = document.getElementById(playerId);
            if (!element) throw new DomSetupError(this.buildErrorMessageWhenFailingToFindElementBySelector('player'));
            maybePlayer = element;
        }

        this.canvas = maybeCanvas ? maybeCanvas : document.createElement('canvas');
        if (!maybeCanvas) {
            this.canvas.id = DOM.DEFAULT.CANVAS_ID;
            document.body.append(this.canvas);
        }

        this.playerElement = maybePlayer ? maybePlayer : document.createElement('div');
        if (!maybePlayer) {
            this.playerElement.id = DOM.DEFAULT.PLAYER_ELEMENT_ID;
            document.body.append(this.playerElement);
        }

        this.youTubePlayer = YouTubePlayerFactory(this.playerElement);

        const maybeContext = this.canvas.getContext('2d');
        if (!maybeContext) throw new DomSetupError('A canvas 2d rendering context could not be created!');
        this._ctx = maybeContext;
    }

    get player(){
        return {
            playerElement: this.playerElement,
            youTubePlayer: this.youTubePlayer,
        }
    }

    get ctx(){
        return this._ctx;
    }
}
