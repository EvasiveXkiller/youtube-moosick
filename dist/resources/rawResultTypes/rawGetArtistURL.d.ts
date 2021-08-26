import type { FlexColumn, Result, Run } from './common.js';
export interface ArtistURLFullResult extends Result {
    responseContext: ResponseContext;
    contents: Contents;
    header: RawGetArtistURLHeader;
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
    musicShelfRenderer?: MusicShelfRenderer;
    musicCarouselShelfRenderer?: MusicCarouselShelfRenderer;
    musicDescriptionShelfRenderer?: MusicDescriptionShelfRenderer;
}
export interface MusicCarouselShelfRenderer {
    header: MusicCarouselShelfRendererHeader;
    contents: MusicCarouselShelfRendererContent[];
    trackingParams: string;
    itemSize: string;
}
export interface MusicCarouselShelfRendererContent {
    musicTwoRowItemRenderer: MusicTwoRowItemRenderer;
}
export interface MusicTwoRowItemRenderer {
    thumbnailRenderer: ThumbnailRendererClass;
    aspectRatio: AspectRatio;
    title: MusicTwoRowItemRendererTitle;
    subtitle: Subtitle;
    navigationEndpoint: MusicTwoRowItemRendererNavigationEndpoint;
    trackingParams: string;
    menu: MusicTwoRowItemRendererMenu;
    thumbnailOverlay?: ThumbnailOverlay;
}
export declare enum AspectRatio {
    MusicTwoRowItemThumbnailAspectRatioRectangle16_9 = "MUSIC_TWO_ROW_ITEM_THUMBNAIL_ASPECT_RATIO_RECTANGLE_16_9",
    MusicTwoRowItemThumbnailAspectRatioSquare = "MUSIC_TWO_ROW_ITEM_THUMBNAIL_ASPECT_RATIO_SQUARE"
}
export interface MusicTwoRowItemRendererMenu {
    menuRenderer: PurpleMenuRenderer;
}
export interface PurpleMenuRenderer {
    items: PurpleItem[];
    trackingParams: string;
    accessibility: SubscribeAccessibilityClass;
}
export interface SubscribeAccessibilityClass {
    accessibilityData: AccessibilityAccessibility;
}
export interface AccessibilityAccessibility {
    label: string;
}
export interface PurpleItem {
    menuNavigationItemRenderer?: MenuItemRenderer;
    menuServiceItemRenderer?: MenuItemRenderer;
    toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer;
}
export interface MenuItemRenderer {
    text: Description;
    icon: Icon;
    navigationEndpoint?: MenuNavigationItemRendererNavigationEndpoint;
    trackingParams: string;
    serviceEndpoint?: MenuNavigationItemRendererServiceEndpoint;
}
export interface Icon {
    iconType: IconType;
}
export declare enum IconType {
    AddToPlaylist = "ADD_TO_PLAYLIST",
    AddToRemoteQueue = "ADD_TO_REMOTE_QUEUE",
    Album = "ALBUM",
    Collapse = "COLLAPSE",
    Expand = "EXPAND",
    Favorite = "FAVORITE",
    LibraryAdd = "LIBRARY_ADD",
    LibraryRemove = "LIBRARY_REMOVE",
    Mix = "MIX",
    MusicShuffle = "MUSIC_SHUFFLE",
    Pause = "PAUSE",
    PlayArrow = "PLAY_ARROW",
    QueuePlayNext = "QUEUE_PLAY_NEXT",
    Share = "SHARE",
    Subscribe = "SUBSCRIBE",
    Unfavorite = "UNFAVORITE",
    VolumeUp = "VOLUME_UP"
}
export interface MenuNavigationItemRendererNavigationEndpoint {
    clickTrackingParams: string;
    watchPlaylistEndpoint?: WatchPlaylistEndpoint;
    modalEndpoint?: ModalEndpoint;
    shareEntityEndpoint?: ShareEntityEndpoint;
    watchEndpoint?: WatchEndpoint;
    browseEndpoint?: PurpleBrowseEndpoint;
}
export interface PurpleBrowseEndpoint {
    browseId: string;
    browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs;
}
export interface BrowseEndpointContextSupportedConfigs {
    browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig;
}
export interface BrowseEndpointContextMusicConfig {
    pageType: PageType;
}
export declare enum PageType {
    MusicPageTypeAlbum = "MUSIC_PAGE_TYPE_ALBUM",
    MusicPageTypeArtist = "MUSIC_PAGE_TYPE_ARTIST",
    MusicPageTypePlaylist = "MUSIC_PAGE_TYPE_PLAYLIST"
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
export interface Description {
    runs: DescriptionRun[];
}
export interface DescriptionRun {
    text: string;
}
export interface ShareEntityEndpoint {
    serializedShareEntity: string;
}
export interface WatchEndpoint {
    videoId: string;
    playlistId: string;
    params?: Params;
    loggingContext: LoggingContext;
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs;
}
export interface LoggingContext {
    vssLoggingContext: VssLoggingContext;
}
export interface VssLoggingContext {
    serializedContextData: string;
}
export declare enum Params {
    WAEB = "wAEB",
    WAEB8GECGAE3D = "wAEB8gECGAE%3D",
    WAEB8GECKAE3D = "wAEB8gECKAE%3D"
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
export interface WatchPlaylistEndpoint {
    playlistId: string;
    params?: Params;
}
export interface MenuNavigationItemRendererServiceEndpoint {
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
    playlistId?: string;
    videoId?: string;
}
export interface ToggleMenuServiceItemRenderer {
    defaultText: Description;
    defaultIcon: Icon;
    defaultServiceEndpoint: DefaultServiceEndpointClass;
    toggledText: Description;
    toggledIcon: Icon;
    toggledServiceEndpoint?: ToggledServiceEndpoint;
    trackingParams: string;
}
export interface DefaultServiceEndpointClass {
    clickTrackingParams: string;
    modalEndpoint: ModalEndpoint;
}
export interface ToggledServiceEndpoint {
    clickTrackingParams: string;
    likeEndpoint: LikeEndpoint;
}
export interface LikeEndpoint {
    status: Status;
    target: Target;
}
export declare enum Status {
    Indifferent = "INDIFFERENT"
}
export interface Target {
    playlistId: string;
}
export interface MusicTwoRowItemRendererNavigationEndpoint {
    clickTrackingParams: string;
    browseEndpoint: FluffyBrowseEndpoint;
    watchEndpoint?: WatchEndpoint;
}
export interface FluffyBrowseEndpoint {
    browseId: string;
    params?: string;
    browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs;
}
export interface Subtitle {
    runs: SubtitleRun[];
}
export interface SubtitleRun {
    text: string;
    navigationEndpoint?: FluffyNavigationEndpoint;
}
export interface FluffyNavigationEndpoint {
    clickTrackingParams: string;
    browseEndpoint: PurpleBrowseEndpoint;
}
export interface ThumbnailOverlay {
    musicItemThumbnailOverlayRenderer: ThumbnailOverlayMusicItemThumbnailOverlayRenderer;
}
export interface ThumbnailOverlayMusicItemThumbnailOverlayRenderer {
    background: Background;
    content: PurpleContent;
    contentPosition: ContentPosition;
    displayStyle: DisplayStyle;
}
export interface Background {
    verticalGradient: VerticalGradient;
}
export interface VerticalGradient {
    gradientLayerColors: string[];
}
export interface PurpleContent {
    musicPlayButtonRenderer: PurpleMusicPlayButtonRenderer;
}
export interface PurpleMusicPlayButtonRenderer {
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
    accessibilityPlayData: SubscribeAccessibilityClass;
    accessibilityPauseData: SubscribeAccessibilityClass;
}
export declare enum ButtonSize {
    MusicPlayButtonSizeHuge = "MUSIC_PLAY_BUTTON_SIZE_HUGE",
    MusicPlayButtonSizeMedium = "MUSIC_PLAY_BUTTON_SIZE_MEDIUM"
}
export interface PlayNavigationEndpoint {
    clickTrackingParams: string;
    watchPlaylistEndpoint?: WatchPlaylistEndpoint;
    watchEndpoint?: WatchEndpoint;
}
export declare enum RippleTarget {
    MusicPlayButtonRippleTargetAncestor = "MUSIC_PLAY_BUTTON_RIPPLE_TARGET_ANCESTOR",
    MusicPlayButtonRippleTargetSelf = "MUSIC_PLAY_BUTTON_RIPPLE_TARGET_SELF"
}
export declare enum ContentPosition {
    MusicItemThumbnailOverlayContentPositionBottomRight = "MUSIC_ITEM_THUMBNAIL_OVERLAY_CONTENT_POSITION_BOTTOM_RIGHT",
    MusicItemThumbnailOverlayContentPositionCentered = "MUSIC_ITEM_THUMBNAIL_OVERLAY_CONTENT_POSITION_CENTERED"
}
export declare enum DisplayStyle {
    MusicItemThumbnailOverlayDisplayStyleHover = "MUSIC_ITEM_THUMBNAIL_OVERLAY_DISPLAY_STYLE_HOVER",
    MusicItemThumbnailOverlayDisplayStylePersistent = "MUSIC_ITEM_THUMBNAIL_OVERLAY_DISPLAY_STYLE_PERSISTENT"
}
export interface ThumbnailRendererClass {
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
    MusicThumbnailCropCircle = "MUSIC_THUMBNAIL_CROP_CIRCLE",
    MusicThumbnailCropUnspecified = "MUSIC_THUMBNAIL_CROP_UNSPECIFIED"
}
export declare enum ThumbnailScale {
    MusicThumbnailScaleAspectFill = "MUSIC_THUMBNAIL_SCALE_ASPECT_FILL",
    MusicThumbnailScaleAspectFit = "MUSIC_THUMBNAIL_SCALE_ASPECT_FIT"
}
export interface MusicTwoRowItemRendererTitle {
    runs: Run[];
}
export interface TentacledNavigationEndpoint {
    clickTrackingParams: string;
    browseEndpoint: FluffyBrowseEndpoint;
}
export interface MusicCarouselShelfRendererHeader {
    musicCarouselShelfBasicHeaderRenderer: MusicCarouselShelfBasicHeaderRenderer;
}
export interface MusicCarouselShelfBasicHeaderRenderer {
    title: MusicCarouselShelfBasicHeaderRendererTitle;
    accessibilityData: SubscribeAccessibilityClass;
    headerStyle: string;
    moreContentButton?: MoreContentButtonClass;
    trackingParams: string;
}
export interface MoreContentButtonClass {
    buttonRenderer: MoreContentButtonButtonRenderer;
}
export interface MoreContentButtonButtonRenderer {
    style: string;
    text: Description;
    navigationEndpoint?: Endpoint;
    trackingParams: string;
    size?: string;
    serviceEndpoint?: ButtonRendererServiceEndpoint;
}
export interface Endpoint {
    clickTrackingParams: string;
    browseEndpoint: BottomEndpointBrowseEndpoint;
}
export interface BottomEndpointBrowseEndpoint {
    browseId: string;
    params: string;
}
export interface ButtonRendererServiceEndpoint {
    clickTrackingParams: string;
    unsubscribeEndpoint: UnsubscribeEndpoint;
}
export interface UnsubscribeEndpoint {
    channelIds: string[];
}
export interface MusicCarouselShelfBasicHeaderRendererTitle {
    runs: FluffyRun[];
}
export interface FluffyRun {
    text: string;
    navigationEndpoint?: Endpoint;
}
export interface MusicDescriptionShelfRenderer {
    header: Description;
    subheader: Description;
    description: Description;
    moreButton: MoreButton;
    trackingParams: string;
}
export interface MoreButton {
    toggleButtonRenderer: ToggleButtonRenderer;
}
export interface ToggleButtonRenderer {
    isToggled: boolean;
    isDisabled: boolean;
    defaultIcon: Icon;
    defaultText: Description;
    toggledIcon: Icon;
    toggledText: Description;
    trackingParams: string;
}
export interface MusicShelfRenderer {
    title: MusicCarouselShelfBasicHeaderRendererTitle;
    contents: MusicShelfRendererContent[];
    trackingParams: string;
    bottomText: Description;
    bottomEndpoint: Endpoint;
    shelfDivider: ShelfDivider;
}
export interface MusicShelfRendererContent {
    musicResponsiveListItemRenderer: MusicResponsiveListItemRenderer;
}
export interface MusicResponsiveListItemRenderer {
    trackingParams: string;
    thumbnail: ThumbnailRendererClass;
    overlay: Overlay;
    flexColumns: FlexColumn[];
    menu: MusicResponsiveListItemRendererMenu;
    playlistItemData: PlaylistItemData;
}
export interface StickyNavigationEndpoint {
    clickTrackingParams: string;
    watchEndpoint?: WatchEndpoint;
    browseEndpoint?: PurpleBrowseEndpoint;
}
export interface MusicResponsiveListItemRendererMenu {
    menuRenderer: FluffyMenuRenderer;
}
export interface FluffyMenuRenderer {
    items: FluffyItem[];
    trackingParams: string;
    topLevelButtons: TopLevelButton[];
    accessibility: SubscribeAccessibilityClass;
}
export interface FluffyItem {
    menuNavigationItemRenderer?: MenuItemRenderer;
    menuServiceItemRenderer?: MenuItemRenderer;
}
export interface TopLevelButton {
    likeButtonRenderer: LikeButtonRenderer;
}
export interface LikeButtonRenderer {
    target: PlaylistItemData;
    likeStatus: Status;
    trackingParams: string;
    likesAllowed: boolean;
    dislikeNavigationEndpoint: DefaultServiceEndpointClass;
    likeCommand: DefaultServiceEndpointClass;
}
export interface PlaylistItemData {
    videoId: string;
}
export interface Overlay {
    musicItemThumbnailOverlayRenderer: OverlayMusicItemThumbnailOverlayRenderer;
}
export interface OverlayMusicItemThumbnailOverlayRenderer {
    background: Background;
    content: FluffyContent;
    contentPosition: ContentPosition;
    displayStyle: DisplayStyle;
}
export interface FluffyContent {
    musicPlayButtonRenderer: FluffyMusicPlayButtonRenderer;
}
export interface FluffyMusicPlayButtonRenderer {
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
    buttonSize: string;
    rippleTarget: RippleTarget;
    accessibilityPlayData: SubscribeAccessibilityClass;
    accessibilityPauseData: SubscribeAccessibilityClass;
}
export interface NavigationEndpoint {
    clickTrackingParams: string;
    watchEndpoint: WatchEndpoint;
}
export interface ShelfDivider {
    musicShelfDividerRenderer: MusicShelfDividerRenderer;
}
export interface MusicShelfDividerRenderer {
    hidden: boolean;
}
export interface RawGetArtistURLHeader {
    musicImmersiveHeaderRenderer: MusicImmersiveHeaderRenderer;
}
export interface MusicImmersiveHeaderRenderer {
    title: Description;
    subscriptionButton: SubscriptionButton;
    description: Description;
    moreButton: MoreButton;
    menu: MusicImmersiveHeaderRendererMenu;
    thumbnail: ThumbnailRendererClass;
    trackingParams: string;
    playButton: PlayButton;
    startRadioButton: StartRadioButton;
    shareEndpoint: ShareEndpoint;
}
export interface MusicImmersiveHeaderRendererMenu {
    menuRenderer: TentacledMenuRenderer;
}
export interface TentacledMenuRenderer {
    items: TentacledItem[];
    trackingParams: string;
    accessibility: SubscribeAccessibilityClass;
}
export interface TentacledItem {
    menuNavigationItemRenderer: MenuItemRenderer;
}
export interface PlayButton {
    buttonRenderer: PlayButtonButtonRenderer;
}
export interface PlayButtonButtonRenderer {
    style: string;
    size: string;
    text: Description;
    icon: Icon;
    navigationEndpoint: NavigationEndpoint;
    accessibility: AccessibilityAccessibility;
    trackingParams: string;
    accessibilityData: SubscribeAccessibilityClass;
}
export interface ShareEndpoint {
    clickTrackingParams: string;
    shareEntityEndpoint: ShareEntityEndpoint;
}
export interface StartRadioButton {
    buttonRenderer: StartRadioButtonButtonRenderer;
}
export interface StartRadioButtonButtonRenderer {
    text: Description;
    icon: Icon;
    navigationEndpoint: IndigoNavigationEndpoint;
    accessibility: AccessibilityAccessibility;
    trackingParams: string;
}
export interface IndigoNavigationEndpoint {
    clickTrackingParams: string;
    watchPlaylistEndpoint: WatchPlaylistEndpoint;
}
export interface SubscriptionButton {
    subscribeButtonRenderer: SubscribeButtonRenderer;
}
export interface SubscribeButtonRenderer {
    subscriberCountText: Description;
    subscribed: boolean;
    enabled: boolean;
    type: string;
    channelId: string;
    showPreferences: boolean;
    subscriberCountWithSubscribeText: Description;
    subscribedButtonText: Description;
    unsubscribedButtonText: Description;
    trackingParams: string;
    unsubscribeButtonText: Description;
    serviceEndpoints: ServiceEndpointElement[];
    longSubscriberCountText: LongSubscriberCountText;
    shortSubscriberCountText: Description;
    subscribeAccessibility: SubscribeAccessibilityClass;
    unsubscribeAccessibility: SubscribeAccessibilityClass;
    signInEndpoint: DefaultServiceEndpointClass;
}
export interface LongSubscriberCountText {
    runs: DescriptionRun[];
    accessibility: SubscribeAccessibilityClass;
}
export interface ServiceEndpointElement {
    clickTrackingParams: string;
    subscribeEndpoint?: SubscribeEndpoint;
    signalServiceEndpoint?: SignalServiceEndpoint;
}
export interface SignalServiceEndpoint {
    signal: string;
    actions: Action[];
}
export interface Action {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction;
}
export interface OpenPopupAction {
    popup: Popup;
    popupType: string;
}
export interface Popup {
    confirmDialogRenderer: ConfirmDialogRenderer;
}
export interface ConfirmDialogRenderer {
    trackingParams: string;
    dialogMessages: Description[];
    confirmButton: MoreContentButtonClass;
    cancelButton: MoreContentButtonClass;
}
export interface SubscribeEndpoint {
    channelIds: string[];
    params: string;
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
