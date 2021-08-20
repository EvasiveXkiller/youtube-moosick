import type { categoryType } from './enums';
import type { MusicResponsiveListItemFlexColumnRenderer } from './songresultRaw';
export declare class parsers {
    static parseSearchResult(context: any, searchType?: categoryType): any;
    private static artistParser;
    static albumParser(flexColumn: MusicResponsiveListItemFlexColumnRenderer[]): any;
}
