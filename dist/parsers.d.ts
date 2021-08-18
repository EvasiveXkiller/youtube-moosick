export declare const parseSearchResult: (context: any) => {
    content: never[];
};
export declare const parseSongSearchResult: (context: any) => {
    content: never[];
    continuation: any;
};
export declare const parseVideoSearchResult: (context: any) => {
    content: never[];
    contination: any;
};
export declare const parseAlbumSearchResult: (context: any) => {
    content: never[];
    contination: any;
};
export declare const parseArtistSearchResult: (context: any) => {
    content: never[];
    contination: any;
};
export declare const parsePlaylistSearchResult: (context: any) => {
    content: never[];
    contination: any;
};
export declare const parseArtistPage: (context: any) => {
    name: string;
    description: string;
    views: string;
    products: {};
    thumbnails: never[];
};
export declare const parsePlaylistPage: (context: any) => {
    title: string;
    owner: string;
    trackCount: number;
    dateYear: string;
    content: never[];
    thumbnails: never[];
    continuation: any;
};
export declare const parseAlbumPage: (context: any) => {
    title: string;
    description: string;
    trackCount: number;
    date: {
        year: number;
        month: number;
        day: number;
    };
    duration: number;
    artist: never[];
    tracks: never[];
    thumbnails: never[];
};
export declare const parseNextPanel: (context: any) => {
    title: string;
    playlistId: string;
    content: never[];
    currentIndex: number;
    contination: any;
};
