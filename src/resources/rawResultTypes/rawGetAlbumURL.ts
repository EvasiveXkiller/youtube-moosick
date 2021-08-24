import type { Result } from './common';

export interface AlbumURLFullResult extends Result {
	responseContext: ResponseContext;
	contents: Contents;
	header: Header;
	frameworkUpdates: FrameworkUpdates;
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
	contents: ContentElement[];
	trackingParams: string;
}

export interface ContentElement {
	musicDataBoundSectionRenderer: MusicDataBoundSectionRenderer;
}

export interface MusicDataBoundSectionRenderer {
	section: Section;
}

export interface Section {
	musicDataBoundAlbumReleaseTracksShelfRenderer: MusicDataBoundAlbumReleaseTracksShelfRenderer;
}

export interface MusicDataBoundAlbumReleaseTracksShelfRenderer {
	entityReference: EntityReference;
	shelfMold: ShelfMold;
	itemMold: ItemMold;
}

export interface EntityReference {
	musicAlbumReleaseEntity: MusicAlbumReleaseEntity;
}

export enum MusicAlbumReleaseEntity {
	Eg1IX1JFc01NcUJaalpCIBEoAQ3D3D = 'Eg1iX1JFc01NcUJaalpCIBEoAQ%3D%3D',
}

export interface ItemMold {
	musicListItemRenderer: MusicListItemRenderer;
}

export interface MusicListItemRenderer {
	listIndexStyle: string;
	thumbnailStyle: string;
	menu: Menu;
	hack: boolean;
	overlay: Overlay;
}

export interface Menu {
	musicDataBoundMenuRenderer: MenuMusicDataBoundMenuRenderer;
}

export interface MenuMusicDataBoundMenuRenderer {
	menuRendererMold: MenuRendererMold;
	dataBoundMenuItems: PurpleDataBoundMenuItem[];
	dataBoundTopLevelMenuButtons: PurpleDataBoundTopLevelMenuButton[];
}

export interface PurpleDataBoundMenuItem {
	menuItemRendererMold: MenuItemRendererMold;
	endpointMold: PurpleEndpointMold;
}

export interface PurpleEndpointMold {
	watchEndpoint?: WatchEndpoint;
	queueAddEndpoint?: QueueAddEndpoint;
	modalEndpoint?: ModalEndpoint;
	shareEntityEndpoint?: MusicDataBoundAlbumReleaseArtistRenderer;
}

export interface ModalEndpoint {
	modal: Modal;
}

export interface Modal {
	modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer;
}

export interface ModalWithTitleAndButtonRenderer {
	title: DefaultText;
	content: DefaultText;
	button: Button;
}

export interface Button {
	buttonRenderer: ButtonButtonRenderer;
}

export interface ButtonButtonRenderer {
	style: string;
	isDisabled: boolean;
	text: DefaultText;
	navigationEndpoint: NavigationEndpoint;
	trackingParams: string;
}

export interface NavigationEndpoint {
	clickTrackingParams: string;
	signInEndpoint: MusicDataBoundAlbumReleaseArtistRenderer;
}

export interface MusicDataBoundAlbumReleaseArtistRenderer {
	hack: boolean;
}

export interface DefaultText {
	runs: Run[];
}

export interface Run {
	text: string;
}

export interface QueueAddEndpoint {
	queueInsertPosition: string;
	commands: Command[];
}

export interface Command {
	clickTrackingParams: string;
	addToToastAction: AddToToastAction;
}

export interface AddToToastAction {
	item: Item;
}

export interface Item {
	notificationTextRenderer: NotificationTextRenderer;
}

export interface NotificationTextRenderer {
	successResponseText: DefaultText;
	trackingParams: string;
}

export interface WatchEndpoint {
	continuePlayback: boolean;
}

export interface MenuItemRendererMold {
	menuNavigationItemRenderer?: MenuItemRenderer;
	menuServiceItemRenderer?: MenuItemRenderer;
}

export interface MenuItemRenderer {
	text: DefaultText;
	icon: Icon;
	trackingParams: string;
}

export interface Icon {
	iconType: string;
}

export interface PurpleDataBoundTopLevelMenuButton {
	menuTopLevelItemRendererMold: PurpleMenuTopLevelItemRendererMold;
}

export interface PurpleMenuTopLevelItemRendererMold {
	likeButtonRenderer: LikeButtonRenderer;
}

export interface LikeButtonRenderer {
	trackingParams: string;
	dislikeNavigationEndpoint: DislikeNavigationEndpoint;
	likeCommand: DislikeNavigationEndpoint;
}

export interface DislikeNavigationEndpoint {
	clickTrackingParams: string;
	modalEndpoint: ModalEndpoint;
}

export interface MenuRendererMold {
	menuRenderer: MenuRenderer;
}

export interface MenuRenderer {
	trackingParams: string;
	openImmediately: boolean;
}

export interface Overlay {
	musicItemThumbnailOverlayRenderer: MusicItemThumbnailOverlayRenderer;
}

export interface MusicItemThumbnailOverlayRenderer {
	background: Background;
	content: MusicItemThumbnailOverlayRendererContent;
	contentPosition: string;
	displayStyle: string;
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
	accessibilityPlayData: AccessibilityPauseDataClass;
	accessibilityPauseData: AccessibilityPauseDataClass;
}

export interface AccessibilityPauseDataClass {
	accessibilityData: AccessibilityDataAccessibility;
}

export interface AccessibilityDataAccessibility {
	label: string;
}

export interface ShelfMold {
	musicShelfRenderer: MusicShelfRenderer;
}

export interface MusicShelfRenderer {
	trackingParams: string;
	isEmptyShelfVisible: boolean;
}

export interface FrameworkUpdates {
	entityBatchUpdate: EntityBatchUpdate;
}

export interface EntityBatchUpdate {
	mutations: Mutation[];
	timestamp: Timestamp;
}

export interface Mutation {
	entityKey: string;
	type: Type;
	payload: Payload;
}

export interface Payload {
	musicAlbumReleaseUserDetail?: MusicAlbumReleaseUserDetail;
	musicArtist?: MusicArtist;
	musicTrackUserDetail?: MusicTrackUserDetail;
	musicShare?: MusicShare;
	musicTrack?: MusicTrack;
	musicAlbumReleaseDetail?: MusicAlbumReleaseDetail;
	musicAlbumRelease?: MusicAlbumRelease;
}

export interface MusicAlbumRelease {
	id: MusicAlbumReleaseEntity;
	title: string;
	thumbnailDetails: ThumbnailDetails;
	primaryArtists: Id[];
	details: string;
	audioPlaylistId: string;
	userDetails: string;
	trackCount: string;
	artistDisplayName: ArtistDisplayName;
	durationMs: string;
	releaseDate: ReleaseDate;
	contentRating: ContentRating;
	likeTargetPlaylistId: string;
	releaseType: string;
	radioPlaylistMixPlaylistId: string;
	radioAutomixPlaylistId: string;
	share: string;
	loggingDirectives: LoggingDirectives;
}

export enum ArtistDisplayName {
	Twice = 'TWICE',
}

export interface ContentRating {
	explicitType: ExplicitType;
}

export enum ExplicitType {
	MusicEntityExplicitTypeNotExplicit = 'MUSIC_ENTITY_EXPLICIT_TYPE_NOT_EXPLICIT',
}

export interface LoggingDirectives {
	trackingParams: string;
}

export enum Id {
	EhhVQ0FxMHBGR2EydzlTanhPcTBaeEtWSXcgFCgB = 'EhhVQ0FxMHBGR2EydzlTanhPcTBaeEtWSXcgFCgB',
}

export interface ReleaseDate {
	year: number;
	month: number;
	day: number;
}

export interface ThumbnailDetails {
	thumbnails: Thumbnail[];
}

export interface Thumbnail {
	url: string;
	width: number;
	height: number;
}

export interface MusicAlbumReleaseDetail {
	id: string;
	description: string;
	tracks: string[];
}

export interface MusicAlbumReleaseUserDetail {
	id: string;
	inLibrary: boolean;
	albumRelease: MusicAlbumReleaseEntity;
}

export interface MusicArtist {
	id: Id;
	name: ArtistDisplayName;
	thumbnailDetails: ThumbnailDetails;
	externalChannelId: string;
}

export interface MusicShare {
	id: string;
	serializedShareEntity: string;
}

export interface MusicTrack {
	id: string;
	title: string;
	thumbnailDetails: ThumbnailDetails;
	artists: Id[];
	artistNames: ArtistDisplayName;
	videoId: string;
	videoModeVersion?: string;
	userDetails: string;
	albumRelease: MusicAlbumReleaseEntity;
	albumTrackIndex: string;
	lengthMs: string;
	contentRating: ContentRating;
	share: string;
	loggingDirectives: LoggingDirectives;
	audioModeVersion?: string;
}

export interface MusicTrackUserDetail {
	id: string;
	parentTrack: string;
	likeState: LikeState;
}

export enum LikeState {
	MusicEntityLikeStateUnknown = 'MUSIC_ENTITY_LIKE_STATE_UNKNOWN',
}

export enum Type {
	EntityMutationTypeReplace = 'ENTITY_MUTATION_TYPE_REPLACE',
}

export interface Timestamp {
	seconds: string;
	nanos: number;
}

export interface Header {
	musicDataBoundHeaderRenderer: MusicDataBoundHeaderRenderer;
}

export interface MusicDataBoundHeaderRenderer {
	entityReference: EntityReference;
	albumReleaseArtistMold: AlbumReleaseArtistMold;
	descriptionMold: DescriptionMold;
	detailsBarMenuMold: DetailsBarMenuMold;
	moreButton: MoreButton;
}

export interface AlbumReleaseArtistMold {
	musicDataBoundAlbumReleaseArtistRenderer: MusicDataBoundAlbumReleaseArtistRenderer;
}

export interface DescriptionMold {
	musicDataBoundEntityDescriptionRenderer: MusicDataBoundEntityDescriptionRenderer;
}

export interface MusicDataBoundEntityDescriptionRenderer {
	descriptionShelfMold: ShelfMold;
}

export interface DetailsBarMenuMold {
	musicDataBoundMenuRenderer: DetailsBarMenuMoldMusicDataBoundMenuRenderer;
}

export interface DetailsBarMenuMoldMusicDataBoundMenuRenderer {
	menuRendererMold: MenuRendererMold;
	dataBoundMenuItems: FluffyDataBoundMenuItem[];
	dataBoundTopLevelMenuButtons: FluffyDataBoundTopLevelMenuButton[];
}

export interface FluffyDataBoundMenuItem {
	menuItemRendererMold: MenuItemRendererMold;
	endpointMold: FluffyEndpointMold;
}

export interface FluffyEndpointMold {
	watchPlaylistEndpoint?: WatchPlaylistEndpoint;
	watchEndpointRadio?: WatchEndpoint;
	queueAddEndpoint?: QueueAddEndpoint;
	modalEndpoint?: ModalEndpoint;
	shareEntityEndpoint?: MusicDataBoundAlbumReleaseArtistRenderer;
}

export interface WatchPlaylistEndpoint {
	params: string;
}

export interface FluffyDataBoundTopLevelMenuButton {
	menuTopLevelItemRendererMold: FluffyMenuTopLevelItemRendererMold;
	endpointMold: DataBoundTopLevelMenuButtonEndpointMold;
}

export interface DataBoundTopLevelMenuButtonEndpointMold {
	watchPlaylistEndpoint?: MusicDataBoundAlbumReleaseArtistRenderer;
	modalEndpoint?: ModalEndpoint;
}

export interface FluffyMenuTopLevelItemRendererMold {
	buttonRenderer?: MenuTopLevelItemRendererMoldButtonRenderer;
	musicTopLevelMenuItemConditionalRenderer?: MusicTopLevelMenuItemConditionalRenderer;
}

export interface MenuTopLevelItemRendererMoldButtonRenderer {
	size: string;
	isDisabled: boolean;
	text: DefaultText;
	icon: Icon;
	accessibility: AccessibilityDataAccessibility;
	trackingParams: string;
	accessibilityData: AccessibilityPauseDataClass;
}

export interface MusicTopLevelMenuItemConditionalRenderer {
	selectors: Selector[];
}

export interface Selector {
	condition: Condition;
	resultTemplateRenderer: ResultTemplateRenderer;
}

export interface Condition {
	albumReleaseCondition: AlbumReleaseCondition;
}

export interface AlbumReleaseCondition {
	albumReleaseIsLiked: string;
}

export interface ResultTemplateRenderer {
	buttonRenderer: ResultTemplateRendererButtonRenderer;
}

export interface ResultTemplateRendererButtonRenderer {
	text: Text;
	serviceEndpoint: ServiceEndpoint;
	icon: Icon;
	accessibility: AccessibilityDataAccessibility;
	trackingParams: string;
}

export interface ServiceEndpoint {
	clickTrackingParams: string;
	likeEndpoint: LikeEndpoint;
}

export interface LikeEndpoint {
	actions: Action[];
}

export interface Action {
	clickTrackingParams: string;
	musicLibraryStatusUpdateCommand: MusicLibraryStatusUpdateCommand;
}

export interface MusicLibraryStatusUpdateCommand {
	libraryStatus: string;
}

export interface Text {
	runs: Run[];
	accessibility: AccessibilityPauseDataClass;
}

export interface MoreButton {
	toggleButtonRenderer: ToggleButtonRenderer;
}

export interface ToggleButtonRenderer {
	isToggled: boolean;
	isDisabled: boolean;
	defaultIcon: Icon;
	defaultText: DefaultText;
	toggledIcon: Icon;
	toggledText: DefaultText;
	trackingParams: string;
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
