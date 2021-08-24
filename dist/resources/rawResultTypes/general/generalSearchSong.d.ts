export interface GeneralSong {
    trackingParams: string;
    thumbnail: GeneralSongThumbnail;
    overlay: Overlay;
    flexColumns: FlexColumn[];
    menu: Menu;
    playlistItemData: PlaylistItemData;
    flexColumnDisplayStyle: string;
    itemHeight: string;
}
export interface FlexColumn {
    musicResponsiveListItemFlexColumnRenderer: MusicResponsiveListItemFlexColumnRenderer;
}
export interface MusicResponsiveListItemFlexColumnRenderer {
    text: MusicResponsiveListItemFlexColumnRendererText;
    displayPriority: string;
}
export interface MusicResponsiveListItemFlexColumnRendererText {
    runs: PurpleRun[];
}
export interface PurpleRun {
    text: string;
    navigationEndpoint?: RunNavigationEndpoint;
}
export interface RunNavigationEndpoint {
    clickTrackingParams: string;
    watchEndpoint?: WatchEndpoint;
    browseEndpoint?: BrowseEndpoint;
}
export interface BrowseEndpoint {
    browseId: string;
    browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs;
}
export interface BrowseEndpointContextSupportedConfigs {
    browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig;
}
export interface BrowseEndpointContextMusicConfig {
    pageType: string;
}
export interface WatchEndpoint {
    videoId: string;
    playlistId: string;
    loggingContext: LoggingContext;
    watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs;
    params?: string;
}
export interface LoggingContext {
    vssLoggingContext: VssLoggingContext;
}
export interface VssLoggingContext {
    serializedContextData: string;
}
export interface WatchEndpointMusicSupportedConfigs {
    watchEndpointMusicConfig: WatchEndpointMusicConfig;
}
export interface WatchEndpointMusicConfig {
    musicVideoType: string;
}
export interface Menu {
    menuRenderer: MenuRenderer;
}
export interface MenuRenderer {
    items: ItemElement[];
    trackingParams: string;
    accessibility: Accessibility;
}
export interface Accessibility {
    accessibilityData: AccessibilityData;
}
export interface AccessibilityData {
    label: string;
}
export interface ItemElement {
    menuNavigationItemRenderer?: MenuItemRenderer;
    menuServiceItemRenderer?: MenuItemRenderer;
    toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer;
}
export interface MenuItemRenderer {
    text: DefaultTextClass;
    icon: Icon;
    navigationEndpoint?: MenuNavigationItemRendererNavigationEndpoint;
    trackingParams: string;
    serviceEndpoint?: ServiceEndpoint;
}
export interface Icon {
    iconType: string;
}
export interface MenuNavigationItemRendererNavigationEndpoint {
    clickTrackingParams: string;
    watchEndpoint?: WatchEndpoint;
    modalEndpoint?: ModalEndpoint;
    browseEndpoint?: BrowseEndpoint;
    shareEntityEndpoint?: ShareEntityEndpoint;
}
export interface ModalEndpoint {
    modal: Modal;
}
export interface Modal {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer;
}
export interface ModalWithTitleAndButtonRenderer {
    title: DefaultTextClass;
    content: DefaultTextClass;
    button: Button;
}
export interface Button {
    buttonRenderer: ButtonRenderer;
}
export interface ButtonRenderer {
    style: string;
    isDisabled: boolean;
    text: DefaultTextClass;
    navigationEndpoint: ButtonRendererNavigationEndpoint;
    trackingParams: string;
}
export interface ButtonRendererNavigationEndpoint {
    clickTrackingParams: string;
    signInEndpoint: SignInEndpoint;
}
export interface SignInEndpoint {
    hack: boolean;
}
export interface DefaultTextClass {
    runs: DefaultTextRun[];
}
export interface DefaultTextRun {
    text: string;
}
export interface ShareEntityEndpoint {
    serializedShareEntity: string;
    sharePanelType: string;
}
export interface ServiceEndpoint {
    clickTrackingParams: string;
    queueAddEndpoint: QueueAddEndpoint;
}
export interface QueueAddEndpoint {
    queueTarget: PlaylistItemData;
    queueInsertPosition: string;
    commands: Command[];
}
export interface Command {
    clickTrackingParams: string;
    addToToastAction: AddToToastAction;
}
export interface AddToToastAction {
    item: AddToToastActionItem;
}
export interface AddToToastActionItem {
    notificationTextRenderer: NotificationTextRenderer;
}
export interface NotificationTextRenderer {
    successResponseText: DefaultTextClass;
    trackingParams: string;
}
export interface PlaylistItemData {
    videoId: string;
}
export interface ToggleMenuServiceItemRenderer {
    defaultText: DefaultTextClass;
    defaultIcon: Icon;
    defaultServiceEndpoint: DefaultServiceEndpoint;
    toggledText: DefaultTextClass;
    toggledIcon: Icon;
    trackingParams: string;
}
export interface DefaultServiceEndpoint {
    clickTrackingParams: string;
    modalEndpoint: ModalEndpoint;
}
export interface Overlay {
    musicItemThumbnailOverlayRenderer: MusicItemThumbnailOverlayRenderer;
}
export interface MusicItemThumbnailOverlayRenderer {
    background: Background;
    content: Content;
    contentPosition: string;
    displayStyle: string;
}
export interface Background {
    verticalGradient: VerticalGradient;
}
export interface VerticalGradient {
    gradientLayerColors: string[];
}
export interface Content {
    musicPlayButtonRenderer: MusicPlayButtonRenderer;
}
export interface MusicPlayButtonRenderer {
    playNavigationEndpoint: PlayNavigationEndpoint;
    trackingParams: string;
    playIcon: Icon;
    pauseIcon: Icon;
    iconColor: number;
    backgroundColor: number;
    activeBackgroundColor: number;
    loadingIndicatorColor: number;
    playingIcon: Icon;
    iconLoadingColor: number;
    activeScaleFactor: number;
    buttonSize: string;
    rippleTarget: string;
    accessibilityPlayData: Accessibility;
    accessibilityPauseData: Accessibility;
}
export interface PlayNavigationEndpoint {
    clickTrackingParams: string;
    watchEndpoint: WatchEndpoint;
}
export interface GeneralSongThumbnail {
    musicThumbnailRenderer: MusicThumbnailRenderer;
}
export interface MusicThumbnailRenderer {
    thumbnail: MusicThumbnailRendererThumbnail;
    thumbnailCrop: string;
    thumbnailScale: string;
    trackingParams: string;
}
export interface MusicThumbnailRendererThumbnail {
    thumbnails: ThumbnailElement[];
}
export interface ThumbnailElement {
    url: string;
    width: number;
    height: number;
}
