import {YouTubePlayer} from "youtube-player/dist/types";
import {SourceSetupError} from "@noteable/types";

export interface SourceHandlerParameters{
    source: string;
    playerElement: HTMLElement;
    youTubePlayer: YouTubePlayer;
}

export class SourceHandler{
    source: string;
    playerElement: HTMLElement;
    youTubePlayer: YouTubePlayer;

    constructor({source, playerElement, youTubePlayer}: SourceHandlerParameters) {
        this.source = source;
        this.playerElement = playerElement;
        this.youTubePlayer = youTubePlayer;

        try {
            this.youTubePlayer.cueVideoById(this.source);
        }catch (e){
            throw new SourceSetupError('Can not initialize youtube web player! Data may be corrupted.');
        }

        this.init();
    }

    async init(){
        await this.youTubePlayer.cueVideoByUrl(this.source);
    }

    async getCurrentTime(): Promise<number> {
        return this.youTubePlayer.getCurrentTime();
    }
}
