export interface ytcfgInterface {
    CLIENT_CANARY_STATE?: string;
    DEVICE?: string;
    ELEMENT_POOL_DEFAULT_CAP?: number;
    EVENT_ID?: string;
    EXPERIMENT_FLAGS?: ExperimentFlags;
    GAPI_HINT_PARAMS?: string;
    GAPI_HOST?: string;
    GAPI_LOCALE?: string;
    GL?: string;
    HL?: string;
    HTML_DIR?: string;
    HTML_LANG?: string;
    INNERTUBE_API_KEY?: string;
    INNERTUBE_API_VERSION?: string;
    INNERTUBE_CLIENT_NAME?: string;
    INNERTUBE_CLIENT_VERSION?: string;
    INNERTUBE_CONTEXT?: InnertubeContext;
    INNERTUBE_CONTEXT_CLIENT_NAME?: number;
    INNERTUBE_CONTEXT_CLIENT_VERSION?: string;
    INNERTUBE_CONTEXT_GL?: string;
    INNERTUBE_CONTEXT_HL?: string;
    LATEST_ECATCHER_SERVICE_TRACKING_PARAMS?: LatestEcatcherServiceTrackingParams;
    LOGGED_IN?: boolean;
    PAGE_BUILD_LABEL?: string;
    PAGE_CL?: number;
    SERVER_NAME?: string;
    SIGNIN_URL?: string;
    VISITOR_DATA?: string;
    WEB_PLAYER_CONTEXT_CONFIGS?: WebPlayerContextConfigs;
    XSRF_FIELD_NAME?: string;
    XSRF_TOKEN?: string;
    YPC_MB_URL?: string;
    YTR_FAMILY_CREATION_URL?: string;
    SERVER_VERSION?: string;
    LOCALE?: string;
    REUSE_COMPONENTS?: boolean;
    STAMPER_STABLE_LIST?: boolean;
    DATASYNC_ID?: string;
    SERIALIZED_CLIENT_CONFIG_DATA?: string;
    CLIENT_PROTOCOL?: string;
    CLIENT_TRANSPORT?: string;
    USE_EMBEDDED_INNERTUBE_DATA?: boolean;
    VISIBILITY_ROOT?: string;
    YTMUSIC_ICON_SRC?: string;
    YTMUSIC_LOGO_SRC?: string;
    UPLOAD_URL?: string;
    TRANSFER_PAGE_SIGNIN_URL?: string;
    LOGOUT_URL?: string;
    IS_SUBSCRIBER?: boolean;
    IS_MOBILE_WEB?: boolean;
    INITIAL_ENDPOINT?: string;
    HOTKEY_DIALOG?: HotkeyDialog;
    DEFAULT_ALBUM_IMAGE_SRC?: string;
    AUDIO_QUALITY?: string;
    ADD_SCRAPER_ATTRIBUTES?: boolean;
    ACTIVE_ACCOUNT_IS_MADISON_ACCOUNT?: boolean;
    YTMUSIC_WHITE_ICON_SRC?: string;
    YTMUSIC_WHITE_LOGO_SRC?: string;
}
export interface ExperimentFlags {
    enable_nwl_cleaning_logic?: boolean;
    yt_img_shadow_trigger_show_on_visible?: boolean;
    music_web_enable_generic_attestation?: boolean;
    music_web_enable_wug_queue_add_endpoint?: boolean;
    pageid_as_header_web?: boolean;
    drop_st_cookie_before_cb?: boolean;
    disable_child_node_auto_formatted_strings?: boolean;
    use_undefined_csn_any_layer?: boolean;
    enable_names_handles_account_switcher?: boolean;
    nwl_trigger_throttle_after_reset?: boolean;
    music_web_enable_innertube_transport_service?: boolean;
    music_web_use_new_yt_sans?: boolean;
    music_web_enable_drag_drop_upload?: boolean;
    web_api_url?: boolean;
    music_web_is_canary_control?: boolean;
    log_web_endpoint_to_layer?: boolean;
    music_web_ping_ad_start?: boolean;
    music_enable_explore_tab_on_web?: boolean;
    enable_client_streamz_web?: boolean;
    web_dedupe_ve_grafting?: boolean;
    enable_auto_play_param_fix_for_masthead_ad?: boolean;
    ytidb_is_supported_cache_success_result?: boolean;
    html5_enable_video_overlay_on_inplayer_slot_for_tv?: boolean;
    music_web_enable_service_worker?: boolean;
    enable_memberships_and_purchases?: boolean;
    kevlar_use_vimio_behavior?: boolean;
    polymer_verifiy_app_state?: boolean;
    log_final_payload?: boolean;
    flush_gel?: boolean;
    music_web_player_context_config?: boolean;
    polymer_bad_build_labels?: boolean;
    enable_modular_player_page_server?: boolean;
    music_web_enable_wug_fetch_data_browse?: boolean;
    music_enable_improve_your_recommendations_setting?: boolean;
    vss_final_ping_send_and_write?: boolean;
    music_web_is_canary?: boolean;
    ytidb_analyze_is_supported?: boolean;
    enable_share_panel_page_as_screen_layer?: boolean;
    music_web_mark_root_visible?: boolean;
    web_playback_associated_ve?: boolean;
    ytidb_stop_transaction_commit?: boolean;
    enable_premium_voluntary_pause?: boolean;
    is_mweb_wexit_main_launch?: boolean;
    csi_on_gel?: boolean;
    html5_pacf_enable_dai?: boolean;
    kevlar_attach_vimio_behavior?: boolean;
    use_screen_manager_util?: boolean;
    kevlar_dropdown_fix?: boolean;
    music_web_enable_wug_search_endpoint?: boolean;
    enable_ypc_spinners?: boolean;
    kevlar_enable_vimio_logging?: boolean;
    music_web_enable_wug_playlist_edit_endpoint?: boolean;
    music_web_enable_wug_fetch_next?: boolean;
    music_web_enable_wug_like_endpoint?: boolean;
    state_machine_dynamic_events_lifecycles?: boolean;
    networkless_logging?: boolean;
    music_web_enable_player_bar_ve_logging_fixes?: boolean;
    web_lifecycles?: boolean;
    web_enable_ad_signals_in_it_context?: boolean;
    export_networkless_options?: boolean;
    pes_migrate_association_data?: boolean;
    screen_manager_log_servlet_ei?: boolean;
    pes_enable_association_store?: boolean;
    music_web_enable_client_side_playback_screens?: boolean;
    kevlar_gel_error_routing?: boolean;
    music_web_enable_wug_yt_next_continuation_behavior?: boolean;
    kevlar_import_vimio_behavior?: boolean;
    music_enable_signed_out_account_menu?: boolean;
    enable_get_account_switcher_endpoint_on_webfe?: boolean;
    memberships_page_continuation_migrate?: boolean;
    disable_simple_mixed_direction_formatted_strings?: boolean;
    nwl_use_ytidb_partitioning?: boolean;
    nwl_throttling_race_fix?: boolean;
    enable_polymer_resin?: boolean;
    use_document_lifecycles?: boolean;
    enable_web_media_session_metadata_fix?: boolean;
    enable_mixed_direction_formatted_strings?: boolean;
    music_web_enable_wug_music_delete_privately_owned_entity_command?: boolean;
    kevlar_enable_vimio_callback?: boolean;
    music_web_enable_wug_feedback_endpoint?: boolean;
    validate_network_status?: boolean;
    allow_skip_networkless?: boolean;
    music_web_enable_wug_channel_creation_form_endpoint?: boolean;
    trigger_nsm_validation_checks_with_nwl?: boolean;
    disable_thumbnail_preloading?: boolean;
    music_web_enable_wug_application_settings_endpoint?: boolean;
    log_heartbeat_with_lifecycles?: boolean;
    enable_web_upload_support?: boolean;
    music_web_enable_wug_subscribe_endpoint?: boolean;
    web_gel_timeout_cap?: boolean;
    music_web_enable_wug_fetch_get_search_suggestions?: boolean;
    music_web_enable_wug_ypc_endpoints?: boolean;
    suppress_error_204_logging?: boolean;
    ytidb_transaction_ended_event_rate_limit?: number;
    addto_ajax_log_warning_fraction?: number;
    nwl_cleaning_rate?: number;
    log_window_onerror_fraction?: number;
    web_gel_debounce_ms?: number;
    check_navigator_accuracy_timeout_ms?: number;
    leader_election_renewal_interval?: number;
    music_web_delay_watch_next_ms?: number;
    web_logging_max_batch?: number;
    initial_gel_batch_timeout?: number;
    ytidb_transaction_try_count?: number;
    leader_election_lease_ttl?: number;
    music_web_canary_stage?: number;
    music_web_session_check_interval_millis?: number;
    html5_experiment_id_label?: number;
    web_foreground_heartbeat_interval_ms?: number;
    botguard_async_snapshot_timeout_ms?: number;
    html5_experiment_id_label_live_infra?: number;
    music_web_list_continuation_prescan_height_px?: number;
    client_streamz_web_flush_interval_seconds?: number;
    client_streamz_web_flush_count?: number;
    network_polling_interval?: number;
    leader_election_check_interval?: number;
    cb_v2_uxe?: string;
    music_web_body_line_height?: string;
    music_web_title_line_height?: string;
    web_client_version_override?: string;
    debug_forced_promo_id?: string;
    user_preference_collection_initial_browse_id?: string;
    web_op_signal_type_banlist?: any[];
    kevlar_command_handler_command_banlist?: any[];
    web_op_endpoint_banlist?: any[];
    web_op_continuation_type_banlist?: any[];
}
export interface HotkeyDialog {
    title?: Title;
    sections?: Section[];
}
export interface Section {
    hotkeyDialogSectionRenderer?: HotkeyDialogSectionRenderer;
}
export interface HotkeyDialogSectionRenderer {
    title?: Title;
    options?: Option[];
}
export interface Option {
    hotkeyDialogSectionOptionRenderer?: HotkeyDialogSectionOptionRenderer;
}
export interface HotkeyDialogSectionOptionRenderer {
    label?: Title;
    hotkey?: string;
}
export interface Title {
    runs?: Run[];
}
export interface Run {
    text?: string;
}
export interface InnertubeContext {
    client?: Client;
    user?: User;
    request?: Request;
    clickTracking?: ClickTracking;
}
export interface ClickTracking {
    clickTrackingParams?: string;
}
export interface Client {
    hl?: string;
    gl?: string;
    remoteHost?: string;
    deviceMake?: string;
    deviceModel?: string;
    visitorData?: string;
    userAgent?: string;
    clientName?: string;
    clientVersion?: string;
    osName?: string;
    osVersion?: string;
    originalUrl?: string;
    platform?: string;
    clientFormFactor?: string;
    browserName?: string;
    browserVersion?: string;
}
export interface Request {
    useSsl?: boolean;
}
export interface User {
    lockedSafetyMode?: boolean;
}
export interface LatestEcatcherServiceTrackingParams {
    'client.name'?: string;
}
export interface WebPlayerContextConfigs {
    WEB_PLAYER_CONTEXT_CONFIG_ID_MUSIC_WATCH?: WebPlayerContextConfigIDMusicWatch;
}
export interface WebPlayerContextConfigIDMusicWatch {
    rootElementId?: string;
    jsUrl?: string;
    cssUrl?: string;
    contextId?: string;
    eventLabel?: string;
    contentRegion?: string;
    hl?: string;
    hostLanguage?: string;
    innertubeApiKey?: string;
    innertubeApiVersion?: string;
    innertubeContextClientVersion?: string;
    controlsType?: number;
    disableKeyboardControls?: boolean;
    disableRelatedVideos?: boolean;
    annotationsLoadPolicy?: number;
    device?: Device;
    serializedExperimentIds?: string;
    serializedExperimentFlags?: string;
    disableSharing?: boolean;
    hideInfo?: boolean;
    disableWatchLater?: boolean;
    mobileIphoneSupportsInlinePlayback?: boolean;
    isMobileDevice?: boolean;
    cspNonce?: string;
    canaryState?: string;
    datasyncId?: string;
}
export interface Device {
    brand?: string;
    model?: string;
    browser?: string;
    browserVersion?: string;
    os?: string;
    osVersion?: string;
    platform?: string;
    interfaceName?: string;
    interfaceVersion?: string;
}
export declare class Convert {
    static toResults(json: string): ytcfgInterface;
    static resultsToJson(value: ytcfgInterface): string;
}
