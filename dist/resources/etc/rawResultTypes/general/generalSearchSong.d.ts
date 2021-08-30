import type { BrowseEndpoint, FlexColumn, NextContinuationData, Text, WatchEndpoint } from '../common.js';
export interface GeneralSongFull {
    responseContext: ResponseContext;
    trackingParams: string;
    contents: Contents;
}
export interface Contents {
    tabbedSearchResultsRenderer: TabbedSearchResultsRenderer;
}
export interface TabbedSearchResultsRenderer {
    tabs: Tab[];
}
export interface Tab {
    tabRenderer: TabRenderer;
}
export interface TabRenderer {
    title: string;
    selected: boolean;
    content: TabRendererContent;
    tabIdentifier: string;
    trackingParams: string;
}
export interface TabRendererContent {
    sectionListRenderer: SectionListRenderer;
}
export interface SectionListRenderer {
    contents: SectionListRendererContent[];
    trackingParams: string;
    header: Header;
}
export interface SectionListRendererContent {
    musicShelfRenderer: MusicShelfRenderer;
}
export interface MusicShelfRenderer {
    title: Title;
    contents: MusicShelfRendererContent[];
    trackingParams: string;
    continuations: Continuation[];
    shelfDivider: ShelfDivider;
}
export interface MusicShelfRendererContent {
    musicResponsiveListItemRenderer: MusicResponsiveListItemRenderer;
}
export interface MusicResponsiveListItemRenderer {
    trackingParams: string;
    thumbnail: MusicResponsiveListItemRendererThumbnail;
    overlay: Overlay;
    flexColumns: FlexColumn[];
    menu: Menu;
    playlistItemData: PlaylistItemData;
    flexColumnDisplayStyle: string;
    itemHeight: ItemHeight;
    badges?: Badge[];
}
export interface Badge {
    musicInlineBadgeRenderer: MusicInlineBadgeRenderer;
}
export interface MusicInlineBadgeRenderer {
    trackingParams: string;
    icon: Icon;
    accessibilityData: Accessibility;
}
export interface Accessibility {
    accessibilityData: AccessibilityData;
}
export interface AccessibilityData {
    label: string;
}
export interface Icon {
    iconType: IconType;
}
export declare enum IconType {
    AddToPlaylist = "ADD_TO_PLAYLIST",
    AddToRemoteQueue = "ADD_TO_REMOTE_QUEUE",
    Album = "ALBUM",
    Artist = "ARTIST",
    Close = "CLOSE",
    Favorite = "FAVORITE",
    Mix = "MIX",
    MusicExplicitBadge = "MUSIC_EXPLICIT_BADGE",
    Pause = "PAUSE",
    PlayArrow = "PLAY_ARROW",
    QueuePlayNext = "QUEUE_PLAY_NEXT",
    Share = "SHARE",
    Unfavorite = "UNFAVORITE",
    VolumeUp = "VOLUME_UP"
}
export interface MusicResponsiveListItemFlexColumnRenderer {
    text: Text;
    displayPriority: DisplayPriority;
}
export declare enum DisplayPriority {
    MusicResponsiveListItemColumnDisplayPriorityHigh = "MUSIC_RESPONSIVE_LIST_ITEM_COLUMN_DISPLAY_PRIORITY_HIGH"
}
export interface RunNavigationEndpoint {
    clickTrackingParams: string;
    watchEndpoint?: WatchEndpoint;
    browseEndpoint?: BrowseEndpoint;
}
export declare enum ItemHeight {
    MusicResponsiveListItemHeightTall = "MUSIC_RESPONSIVE_LIST_ITEM_HEIGHT_TALL"
}
export interface Menu {
    menuRenderer: MenuRenderer;
}
export interface MenuRenderer {
    items: ItemElement[];
    trackingParams: string;
    accessibility: Accessibility;
}
export interface ItemElement {
    menuNavigationItemRenderer?: MenuItemRenderer;
    menuServiceItemRenderer?: MenuItemRenderer;
    toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer;
}
export interface MenuItemRenderer {
    text: Title;
    icon: Icon;
    navigationEndpoint?: MenuNavigationItemRendererNavigationEndpoint;
    trackingParams: string;
    serviceEndpoint?: ServiceEndpoint;
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
    title: Title;
    content: Title;
    button: Button;
}
export interface Button {
    buttonRenderer: ButtonRenderer;
}
export interface ButtonRenderer {
    style: StyleEnum;
    isDisabled: boolean;
    text: Title;
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
export declare enum StyleEnum {
    StyleBlueText = "STYLE_BLUE_TEXT"
}
export interface Title {
    runs: TitleRun[];
}
export interface TitleRun {
    text: string;
}
export interface ShareEntityEndpoint {
    serializedShareEntity: string;
    sharePanelType: SharePanelType;
}
export declare enum SharePanelType {
    SharePanelTypeUnifiedSharePanel = "SHARE_PANEL_TYPE_UNIFIED_SHARE_PANEL"
}
export interface ServiceEndpoint {
    clickTrackingParams: string;
    queueAddEndpoint: QueueAddEndpoint;
}
export interface QueueAddEndpoint {
    queueTarget: PlaylistItemData;
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
    successResponseText: Title;
    trackingParams: string;
}
export declare enum QueueInsertPosition {
    InsertAfterCurrentVideo = "INSERT_AFTER_CURRENT_VIDEO",
    InsertAtEnd = "INSERT_AT_END"
}
export interface PlaylistItemData {
    videoId: string;
}
export interface ToggleMenuServiceItemRenderer {
    defaultText: Title;
    defaultIcon: Icon;
    defaultServiceEndpoint: DefaultServiceEndpoint;
    toggledText: Title;
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
    buttonSize: ButtonSize;
    rippleTarget: RippleTarget;
    accessibilityPlayData: Accessibility;
    accessibilityPauseData: Accessibility;
}
export declare enum ButtonSize {
    MusicPlayButtonSizeSmall = "MUSIC_PLAY_BUTTON_SIZE_SMALL"
}
export interface PlayNavigationEndpoint {
    clickTrackingParams: string;
    watchEndpoint: WatchEndpoint;
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
export interface MusicResponsiveListItemRendererThumbnail {
    musicThumbnailRenderer: MusicThumbnailRenderer;
}
export interface MusicThumbnailRenderer {
    thumbnail: MusicThumbnailRendererThumbnail;
    thumbnailCrop: ThumbnailCrop;
    thumbnailScale: ThumbnailScale;
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
export declare enum ThumbnailCrop {
    MusicThumbnailCropUnspecified = "MUSIC_THUMBNAIL_CROP_UNSPECIFIED"
}
export declare enum ThumbnailScale {
    MusicThumbnailScaleAspectFit = "MUSIC_THUMBNAIL_SCALE_ASPECT_FIT"
}
export interface Continuation {
    nextContinuationData: NextContinuationData;
}
export interface ShelfDivider {
    musicShelfDividerRenderer: MusicShelfDividerRenderer;
}
export interface MusicShelfDividerRenderer {
    hidden: boolean;
}
export interface Header {
    chipCloudRenderer: ChipCloudRenderer;
}
export interface ChipCloudRenderer {
    chips: Chip[];
    collapsedRowCount: number;
    trackingParams: string;
    horizontalScrollable: boolean;
}
export interface Chip {
    chipCloudChipRenderer: ChipCloudChipRenderer;
}
export interface ChipCloudChipRenderer {
    style: StyleClass;
    navigationEndpoint: ChipCloudChipRendererNavigationEndpoint;
    trackingParams: string;
    icon?: Icon;
    accessibilityData: Accessibility;
    isSelected: boolean;
    text?: Title;
}
export interface ChipCloudChipRendererNavigationEndpoint {
    clickTrackingParams: string;
    searchEndpoint: SearchEndpoint;
}
export interface SearchEndpoint {
    query: string;
    params?: string;
}
export interface StyleClass {
    styleType: string;
}
export interface ResponseContext {
    maxAgeSeconds: number;
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
//# sourceMappingURL=generalSearchSong.d.ts.map