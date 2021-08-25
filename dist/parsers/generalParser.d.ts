import { CategoryURIBase64 } from '../enums.js';
import { Results } from '../resources/resultTypes/results.js';
import type { GeneralFull, MusicResponsiveListItemRenderer } from '../resources/rawResultTypes/general/generalFull.js';
export declare class GeneralParser {
    static parseSearchResult(context: GeneralFull, searchType?: CategoryURIBase64): Results;
    /**
     * Only works for video and song
     * @param musicResponsiveListItemRenderer
     */
    static musicResponsiveListItemRendererParser(musicResponsiveListItemRenderer: MusicResponsiveListItemRenderer): {
        name: string;
        url: string;
        videoId: string;
    };
}
