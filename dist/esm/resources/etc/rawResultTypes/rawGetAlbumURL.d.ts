import type { Result, DisplayPriority } from './common.js';
export interface AlbumURLFullResult extends Result {
    responseContext: ResponseContext;
    trackingParams: string;
    contents: Contents;
    header: Header;
    microformat: Microformat;
}
export interface Contents {
    singleColumnBrowseResultsRenderer: SingleColumnBrowseResultsRenderer;
}
export interface SingleColumnBrowseResultsRenderer {
    tabs: Tab[];
}
export interface Tab {
    tabRenderer: TabRenderer;
}
export interface TabRenderer {
    content: TabRendererContent;
    trackingParams: string;
}
export interface TabRendererContent {
    sectionListRenderer: SectionListRenderer;
}
export interface SectionListRenderer {
    contents: SectionListRendererContent[];
    trackingParams: string;
}
export interface SectionListRendererContent {
    musicShelfRenderer: MusicShelfRenderer;
}
export interface MusicShelfRenderer {
    contents: MusicShelfRendererContent[];
    trackingParams: string;
    shelfDivider: ShelfDivider;
}
export interface MusicShelfRendererContent {
    musicResponsiveListItemRenderer: MusicResponsiveListItemRenderer;
}
export interface MusicResponsiveListItemRenderer {
    trackingParams: string;
    overlay: Overlay;
    flexColumns: FlexColumn[];
    fixedColumns: FixedColumn[];
    menu: MusicResponsiveListItemRendererMenu;
    playlistItemData: PlaylistItemData;
    itemHeight: ItemHeight;
    index: Description;
}
export interface FixedColumn {
    musicResponsiveListItemFixedColumnRenderer: MusicResponsiveListItemFixedColumnRenderer;
}
export interface MusicResponsiveListItemFixedColumnRenderer {
    text: Description;
    displayPriority: DisplayPriority;
    size: Size;
}
export declare enum Size {
    SMALL = "MUSIC_RESPONSIVE_LIST_ITEM_FIXED_COLUMN_SIZE_SMALL"
}
export interface Description {
    runs: DescriptionRun[];
}
export interface DescriptionRun {
    text: string;
}
export interface FlexColumn {
    musicResponsiveListItemFlexColumnRenderer: MusicResponsiveListItemFlexColumnRenderer;
}
export interface MusicResponsiveListItemFlexColumnRenderer {
    text: Text;
    displayPriority: DisplayPriority;
}
export interface Text {
    runs?: PurpleRun[];
}
export interface PurpleRun {
    text: string;
    navigationEndpoint: NavigationEndpoint;
}
export interface NavigationEndpoint {
    clickTrackingParams: string;
    watchEndpoint: WatchEndpoint;
}
export interface WatchEndpoint {
    videoId: string;
    playlistId: string;
    loggingContext: LoggingContext;
    watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs;
    params?: Params;
    playlistSetVideoId?: string;
}
export interface LoggingContext {
    vssLoggingContext: VssLoggingContext;
}
export interface VssLoggingContext {
    serializedContextData: string;
}
export declare enum Params {
    WAEB = "wAEB"
}
export interface WatchEndpointMusicSupportedConfigs {
    watchEndpointMusicConfig: WatchEndpointMusicConfig;
}
export interface WatchEndpointMusicConfig {
    musicVideoType: MusicVideoType;
}
export declare enum MusicVideoType {
    MusicVideoTypeAtv = "MUSIC_VIDEO_TYPE_ATV",
    MusicVideoTypeOmv = "MUSIC_VIDEO_TYPE_OMV"
}
export declare enum ItemHeight {
    MusicResponsiveListItemHeightMedium = "MUSIC_RESPONSIVE_LIST_ITEM_HEIGHT_MEDIUM"
}
export interface MusicResponsiveListItemRendererMenu {
    menuRenderer: PurpleMenuRenderer;
}
export interface PurpleMenuRenderer {
    items: ItemElement[];
    trackingParams: string;
    topLevelButtons: PurpleTopLevelButton[];
    accessibility: AccessibilityPauseDataClass;
}
export interface AccessibilityPauseDataClass {
    accessibilityData: AccessibilityAccessibilityData;
}
export interface AccessibilityAccessibilityData {
    label: string;
}
export interface ItemElement {
    menuNavigationItemRenderer?: MenuItemRenderer;
    menuServiceItemRenderer?: MenuItemRenderer;
}
export interface MenuItemRenderer {
    text: Description;
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
    watchPlaylistEndpoint?: PurpleWatchPlaylistEndpoint;
}
export interface BrowseEndpoint {
    browseId: BrowseId;
    browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs;
}
export interface BrowseEndpointContextSupportedConfigs {
    browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig;
}
export interface BrowseEndpointContextMusicConfig {
    pageType: PageType;
}
export declare enum PageType {
    MusicPageTypeArtist = "MUSIC_PAGE_TYPE_ARTIST"
}
export declare enum BrowseId {
    UCAq0PFGa2W9SjxOq0ZxKVIw = "UCAq0pFGa2w9SjxOq0ZxKVIw"
}
export interface ModalEndpoint {
    modal: Modal;
}
export interface Modal {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer;
}
export interface ModalWithTitleAndButtonRenderer {
    title: Description;
    content: Description;
    button: Button;
}
export interface Button {
    buttonRenderer: ButtonButtonRenderer;
}
export interface ButtonButtonRenderer {
    style: Style;
    isDisabled: boolean;
    text: Description;
    navigationEndpoint: PurpleNavigationEndpoint;
    trackingParams: string;
}
export interface PurpleNavigationEndpoint {
    clickTrackingParams: string;
    signInEndpoint: SignInEndpoint;
}
export interface SignInEndpoint {
    hack: boolean;
}
export declare enum Style {
    StyleBlueText = "STYLE_BLUE_TEXT"
}
export interface ShareEntityEndpoint {
    serializedShareEntity: string;
    sharePanelType: SharePanelType;
}
export declare enum SharePanelType {
    SharePanelTypeUnifiedSharePanel = "SHARE_PANEL_TYPE_UNIFIED_SHARE_PANEL"
}
export interface PurpleWatchPlaylistEndpoint {
    playlistId: string;
    params: string;
}
export interface ServiceEndpoint {
    clickTrackingParams: string;
    queueAddEndpoint: QueueAddEndpoint;
}
export interface QueueAddEndpoint {
    queueTarget: QueueTarget;
    queueInsertPosition: QueueInsertPosition;
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
    successResponseText: Description;
    trackingParams: string;
}
export declare enum QueueInsertPosition {
    InsertAfterCurrentVideo = "INSERT_AFTER_CURRENT_VIDEO",
    InsertAtEnd = "INSERT_AT_END"
}
export interface QueueTarget {
    videoId?: string;
    playlistId?: string;
}
export interface PurpleTopLevelButton {
    likeButtonRenderer: LikeButtonRenderer;
}
export interface LikeButtonRenderer {
    target: Target;
    likeStatus: LikeStatus;
    trackingParams: string;
    likesAllowed: boolean;
    dislikeNavigationEndpoint: DefaultNavigationEndpoint;
    likeCommand: DefaultNavigationEndpoint;
}
export interface DefaultNavigationEndpoint {
    clickTrackingParams: string;
    modalEndpoint: ModalEndpoint;
}
export declare enum LikeStatus {
    Indifferent = "INDIFFERENT"
}
export interface Target {
    videoId: string;
}
export interface Overlay {
    musicItemThumbnailOverlayRenderer: MusicItemThumbnailOverlayRenderer;
}
export interface MusicItemThumbnailOverlayRenderer {
    background: Background;
    content: MusicItemThumbnailOverlayRendererContent;
    contentPosition: ContentPosition;
    displayStyle: DisplayStyle;
}
export interface Background {
    verticalGradient: VerticalGradient;
}
export interface VerticalGradient {
    gradientLayerColors: string[];
}
export interface MusicItemThumbnailOverlayRendererContent {
    musicPlayButtonRenderer: MusicPlayButtonRenderer;
}
export interface MusicPlayButtonRenderer {
    playNavigationEndpoint: NavigationEndpoint;
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
    buttonSize: ButtonSize;
    rippleTarget: RippleTarget;
    accessibilityPlayData: AccessibilityPauseDataClass;
    accessibilityPauseData: AccessibilityPauseDataClass;
}
export declare enum ButtonSize {
    MusicPlayButtonSizeSmall = "MUSIC_PLAY_BUTTON_SIZE_SMALL"
}
export declare enum RippleTarget {
    MusicPlayButtonRippleTargetSelf = "MUSIC_PLAY_BUTTON_RIPPLE_TARGET_SELF"
}
export declare enum ContentPosition {
    MusicItemThumbnailOverlayContentPositionCentered = "MUSIC_ITEM_THUMBNAIL_OVERLAY_CONTENT_POSITION_CENTERED"
}
export declare enum DisplayStyle {
    MusicItemThumbnailOverlayDisplayStylePersistent = "MUSIC_ITEM_THUMBNAIL_OVERLAY_DISPLAY_STYLE_PERSISTENT"
}
export interface PlaylistItemData {
    playlistSetVideoId: string;
    videoId: string;
}
export interface ShelfDivider {
    musicShelfDividerRenderer: MusicShelfDividerRenderer;
}
export interface MusicShelfDividerRenderer {
    hidden: boolean;
}
export interface Header {
    musicDetailHeaderRenderer: MusicDetailHeaderRenderer;
}
export interface MusicDetailHeaderRenderer {
    title: Description;
    subtitle: Subtitle;
    menu: MusicDetailHeaderRendererMenu;
    thumbnail: MusicDetailHeaderRendererThumbnail;
    trackingParams: string;
    description: Description;
    moreButton: MoreButton;
    secondSubtitle: Description;
}
export interface MusicDetailHeaderRendererMenu {
    menuRenderer: FluffyMenuRenderer;
}
export interface FluffyMenuRenderer {
    items: ItemElement[];
    trackingParams: string;
    topLevelButtons: FluffyTopLevelButton[];
    accessibility: AccessibilityPauseDataClass;
}
export interface FluffyTopLevelButton {
    buttonRenderer?: TopLevelButtonButtonRenderer;
    toggleButtonRenderer?: TopLevelButtonToggleButtonRenderer;
}
export interface TopLevelButtonButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Description;
    icon: Icon;
    navigationEndpoint: FluffyNavigationEndpoint;
    accessibility: AccessibilityAccessibilityData;
    trackingParams: string;
    accessibilityData: AccessibilityPauseDataClass;
}
export interface FluffyNavigationEndpoint {
    clickTrackingParams: string;
    watchPlaylistEndpoint: FluffyWatchPlaylistEndpoint;
}
export interface FluffyWatchPlaylistEndpoint {
    playlistId: string;
}
export interface TopLevelButtonToggleButtonRenderer {
    isToggled: boolean;
    isDisabled: boolean;
    defaultIcon: Icon;
    defaultText: DefaultTextClass;
    toggledIcon: Icon;
    toggledText: DefaultTextClass;
    trackingParams: string;
    defaultNavigationEndpoint: DefaultNavigationEndpoint;
}
export interface DefaultTextClass {
    runs: DescriptionRun[];
    accessibility: AccessibilityPauseDataClass;
}
export interface MoreButton {
    toggleButtonRenderer: MoreButtonToggleButtonRenderer;
}
export interface MoreButtonToggleButtonRenderer {
    isToggled: boolean;
    isDisabled: boolean;
    defaultIcon: Icon;
    defaultText: Description;
    toggledIcon: Icon;
    toggledText: Description;
    trackingParams: string;
}
export interface Subtitle {
    runs: SubtitleRun[];
}
export interface SubtitleRun {
    text: string;
    navigationEndpoint?: TentacledNavigationEndpoint;
}
export interface TentacledNavigationEndpoint {
    clickTrackingParams: string;
    browseEndpoint: BrowseEndpoint;
}
export interface MusicDetailHeaderRendererThumbnail {
    croppedSquareThumbnailRenderer: CroppedSquareThumbnailRenderer;
}
export interface CroppedSquareThumbnailRenderer {
    thumbnail: CroppedSquareThumbnailRendererThumbnail;
    trackingParams: string;
}
export interface CroppedSquareThumbnailRendererThumbnail {
    thumbnails: ThumbnailElement[];
}
export interface ThumbnailElement {
    url: string;
    width: number;
    height: number;
}
export interface Microformat {
    microformatDataRenderer: MicroformatDataRenderer;
}
export interface MicroformatDataRenderer {
    urlCanonical: string;
}
export interface ResponseContext {
    serviceTrackingParams: ServiceTrackingParam[];
}
export interface ServiceTrackingParam {
    service: string;
    params: Param[];
}
export interface Param {
    key: string;
    value: string;
}
//# sourceMappingURL=rawGetAlbumURL.d.ts.map