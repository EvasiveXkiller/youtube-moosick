import { CategoryURIBase64 } from '../enums';
import type { Song } from '../resources/generalTypes/song';
import type { GeneralFull, MusicResponsiveListItemRenderer } from '../resources/rawResultTypes/general/generalFull';
import { Results } from '../resources/resultTypes/results';
export declare class GeneralParser {
    static parseSearchResult(context: GeneralFull, searchType?: CategoryURIBase64): Results;
    /**
     * Only works for video and song
     * @param musicResponsiveListItemRenderer
     */
    static musicResponsiveListItemRendererParser(musicResponsiveListItemRenderer: MusicResponsiveListItemRenderer): Partial<Song>;
}
