export interface Run {
    text: string;
}
export interface Text {
    runs: Run[];
}
export interface Icon {
    iconType: string;
}
export interface Thumbnail {
    url: string;
    width: number;
    height: number;
}
export interface RenderedThumbnail {
    thumbnails: Thumbnail[];
}
export interface RenderedMusicThumbnail {
    thumbnail: RenderedThumbnail;
    thumbnailCrop: string;
    thumbnailScale: string;
    trackingParams: string;
}
export interface SectionRenderedThumbnail {
    musicThumbnailRenderer: RenderedMusicThumbnail;
}
export interface VerticalGradient {
    gradientLayerColors: string[];
}
export interface Background {
    verticalGradient: VerticalGradient;
}
export interface VssLoggingContext {
    serializedContextData: string;
}
export interface LoggingContext {
    vssLoggingContext: VssLoggingContext;
}
export interface WatchEndpointMusicConfig {
    musicVideoType: string;
}
export interface WatchEndpointMusicSupportedConfigs {
    watchEndpointMusicConfig: WatchEndpointMusicConfig;
}
export interface WatchEndpoint {
    videoId: string;
    playlistId: string;
    params?: string;
    loggingContext: LoggingContext;
    watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs;
}
export interface PlayNavigationEndpoint {
    clickTrackingParams: string;
    watchEndpoint: WatchEndpoint;
}
export interface AccessibilityData {
    label: string;
}
export interface AccessibilityPlayData {
    accessibilityData: AccessibilityData;
}
export interface AccessibilityPauseData {
    accessibilityData: AccessibilityData;
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
    accessibilityPlayData: AccessibilityPlayData;
    accessibilityPauseData: AccessibilityPauseData;
}
export interface MusicItemThumbnailOverlayRendererContent {
    musicPlayButtonRenderer: MusicPlayButtonRenderer;
}
export interface MusicItemThumbnailOverlayRenderer {
    background: Background;
    content: MusicItemThumbnailOverlayRendererContent;
    contentPosition: string;
    displayStyle: string;
}
export interface Overlay {
    musicItemThumbnailOverlayRenderer: MusicItemThumbnailOverlayRenderer;
}
export interface VssLoggingContext {
    serializedContextData: string;
}
export interface LoggingContext {
    vssLoggingContext: VssLoggingContext;
}
export interface BrowseEndpointContextMusicConfig {
    pageType: string;
}
export interface BrowseEndpointContextSupportedConfigs {
    browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig;
}
export interface BrowseEndpoint {
    browseId: string;
    browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs;
}
export interface NavigationEndpoint {
    clickTrackingParams: string;
    watchEndpoint: WatchEndpoint;
    browseEndpoint: BrowseEndpoint;
}
export interface Run {
    text: string;
    navigationEndpoint: NavigationEndpoint;
}
export interface MusicResponsiveListItemFlexColumnRenderer {
    text: Text;
    displayPriority: string;
}
export interface FlexColumn {
    musicResponsiveListItemFlexColumnRenderer: MusicResponsiveListItemFlexColumnRenderer;
}
export interface VssLoggingContext {
    serializedContextData: string;
}
export interface LoggingContext {
    vssLoggingContext: VssLoggingContext;
}
export interface SignInEndpoint {
    hack: boolean;
}
export interface ButtonRenderer {
    style: string;
    isDisabled: boolean;
    text: Text;
    navigationEndpoint: NavigationEndpoint;
    trackingParams: string;
}
export interface Button {
    buttonRenderer: ButtonRenderer;
}
export interface ModalWithTitleAndButtonRenderer {
    title: Text;
    content: Text;
    button: Button;
}
export interface Modal {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer;
}
export interface ModalEndpoint {
    modal: Modal;
}
export interface ShareEntityEndpoint {
    serializedShareEntity: string;
}
export interface MenuNavigationItemRenderer {
    text: Text;
    icon: Icon;
    navigationEndpoint: NavigationEndpoint;
    trackingParams: string;
}
export interface QueueTarget {
    videoId: string;
}
export interface NotificationTextRenderer {
    successResponseText: Text;
    trackingParams: string;
}
export interface Item2 {
    notificationTextRenderer: NotificationTextRenderer;
}
export interface AddToToastAction {
    item: Item2;
}
export interface Command {
    clickTrackingParams: string;
    addToToastAction: AddToToastAction;
}
export interface QueueAddEndpoint {
    queueTarget: QueueTarget;
    queueInsertPosition: string;
    commands: Command[];
}
export interface ServiceEndpoint {
    clickTrackingParams: string;
    queueAddEndpoint: QueueAddEndpoint;
}
export interface MenuServiceItemRenderer {
    text: Text;
    icon: Icon;
    serviceEndpoint: ServiceEndpoint;
    trackingParams: string;
}
export interface SignInEndpoint2 {
    hack: boolean;
}
export interface NavigationEndpoint {
    clickTrackingParams: string;
    signInEndpoint: SignInEndpoint2;
}
export interface ButtonRenderer2 {
    style: string;
    isDisabled: boolean;
    text: Text;
    navigationEndpoint: NavigationEndpoint;
    trackingParams: string;
}
export interface DefaultServiceEndpoint {
    clickTrackingParams: string;
    modalEndpoint: ModalEndpoint;
}
export interface ToggleMenuServiceItemRenderer {
    defaultText: Text;
    defaultIcon: Icon;
    defaultServiceEndpoint: DefaultServiceEndpoint;
    toggledText: Text;
    toggledIcon: Icon;
    trackingParams: string;
}
export interface Item {
    menuNavigationItemRenderer: MenuNavigationItemRenderer;
    menuServiceItemRenderer: MenuServiceItemRenderer;
    toggleMenuServiceItemRenderer: ToggleMenuServiceItemRenderer;
}
export interface Accessibility {
    accessibilityData: AccessibilityData;
}
export interface MenuRenderer {
    items: Item[];
    trackingParams: string;
    accessibility: Accessibility;
}
export interface Menu {
    menuRenderer: MenuRenderer;
}
export interface PlaylistItemData {
    videoId: string;
}
export interface Section {
    trackingParams: string;
    thumbnail: SectionRenderedThumbnail;
    overlay: Overlay;
    flexColumns: FlexColumn[];
    menu: Menu;
    playlistItemData: PlaylistItemData;
    flexColumnDisplayStyle: string;
    itemHeight: string;
}
export declare type SectionList = Section[];
