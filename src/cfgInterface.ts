// To parse this data:
//
//   import { Convert, ytcfgInterface } from "./file";
//
//   const results = Convert.toResults(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ytcfgInterface {
    CLIENT_CANARY_STATE?:                     string;
    DEVICE?:                                  string;
    ELEMENT_POOL_DEFAULT_CAP?:                number;
    EVENT_ID?:                                string;
    EXPERIMENT_FLAGS?:                        ExperimentFlags;
    GAPI_HINT_PARAMS?:                        string;
    GAPI_HOST?:                               string;
    GAPI_LOCALE?:                             string;
    GL?:                                      string;
    HL?:                                      string;
    HTML_DIR?:                                string;
    HTML_LANG?:                               string;
    INNERTUBE_API_KEY?:                       string;
    INNERTUBE_API_VERSION?:                   string;
    INNERTUBE_CLIENT_NAME?:                   string;
    INNERTUBE_CLIENT_VERSION?:                string;
    INNERTUBE_CONTEXT?:                       InnertubeContext;
    INNERTUBE_CONTEXT_CLIENT_NAME?:           number;
    INNERTUBE_CONTEXT_CLIENT_VERSION?:        string;
    INNERTUBE_CONTEXT_GL?:                    string;
    INNERTUBE_CONTEXT_HL?:                    string;
    LATEST_ECATCHER_SERVICE_TRACKING_PARAMS?: LatestEcatcherServiceTrackingParams;
    LOGGED_IN?:                               boolean;
    PAGE_BUILD_LABEL?:                        string;
    PAGE_CL?:                                 number;
    SERVER_NAME?:                             string;
    SIGNIN_URL?:                              string;
    VISITOR_DATA?:                            string;
    WEB_PLAYER_CONTEXT_CONFIGS?:              WebPlayerContextConfigs;
    XSRF_FIELD_NAME?:                         string;
    XSRF_TOKEN?:                              string;
    YPC_MB_URL?:                              string;
    YTR_FAMILY_CREATION_URL?:                 string;
    SERVER_VERSION?:                          string;
    LOCALE?:                                  string;
    REUSE_COMPONENTS?:                        boolean;
    STAMPER_STABLE_LIST?:                     boolean;
    DATASYNC_ID?:                             string;
    SERIALIZED_CLIENT_CONFIG_DATA?:           string;
    CLIENT_PROTOCOL?:                         string;
    CLIENT_TRANSPORT?:                        string;
    USE_EMBEDDED_INNERTUBE_DATA?:             boolean;
    VISIBILITY_ROOT?:                         string;
    YTMUSIC_ICON_SRC?:                        string;
    YTMUSIC_LOGO_SRC?:                        string;
    UPLOAD_URL?:                              string;
    TRANSFER_PAGE_SIGNIN_URL?:                string;
    LOGOUT_URL?:                              string;
    IS_SUBSCRIBER?:                           boolean;
    IS_MOBILE_WEB?:                           boolean;
    INITIAL_ENDPOINT?:                        string;
    HOTKEY_DIALOG?:                           HotkeyDialog;
    DEFAULT_ALBUM_IMAGE_SRC?:                 string;
    AUDIO_QUALITY?:                           string;
    ADD_SCRAPER_ATTRIBUTES?:                  boolean;
    ACTIVE_ACCOUNT_IS_MADISON_ACCOUNT?:       boolean;
    YTMUSIC_WHITE_ICON_SRC?:                  string;
    YTMUSIC_WHITE_LOGO_SRC?:                  string;
}

export interface ExperimentFlags {
    enable_nwl_cleaning_logic?:                                        boolean;
    yt_img_shadow_trigger_show_on_visible?:                            boolean;
    music_web_enable_generic_attestation?:                             boolean;
    music_web_enable_wug_queue_add_endpoint?:                          boolean;
    pageid_as_header_web?:                                             boolean;
    drop_st_cookie_before_cb?:                                         boolean;
    disable_child_node_auto_formatted_strings?:                        boolean;
    use_undefined_csn_any_layer?:                                      boolean;
    enable_names_handles_account_switcher?:                            boolean;
    nwl_trigger_throttle_after_reset?:                                 boolean;
    music_web_enable_innertube_transport_service?:                     boolean;
    music_web_use_new_yt_sans?:                                        boolean;
    music_web_enable_drag_drop_upload?:                                boolean;
    web_api_url?:                                                      boolean;
    music_web_is_canary_control?:                                      boolean;
    log_web_endpoint_to_layer?:                                        boolean;
    music_web_ping_ad_start?:                                          boolean;
    music_enable_explore_tab_on_web?:                                  boolean;
    enable_client_streamz_web?:                                        boolean;
    web_dedupe_ve_grafting?:                                           boolean;
    enable_auto_play_param_fix_for_masthead_ad?:                       boolean;
    ytidb_is_supported_cache_success_result?:                          boolean;
    html5_enable_video_overlay_on_inplayer_slot_for_tv?:               boolean;
    music_web_enable_service_worker?:                                  boolean;
    enable_memberships_and_purchases?:                                 boolean;
    kevlar_use_vimio_behavior?:                                        boolean;
    polymer_verifiy_app_state?:                                        boolean;
    log_final_payload?:                                                boolean;
    flush_gel?:                                                        boolean;
    music_web_player_context_config?:                                  boolean;
    polymer_bad_build_labels?:                                         boolean;
    enable_modular_player_page_server?:                                boolean;
    music_web_enable_wug_fetch_data_browse?:                           boolean;
    music_enable_improve_your_recommendations_setting?:                boolean;
    vss_final_ping_send_and_write?:                                    boolean;
    music_web_is_canary?:                                              boolean;
    ytidb_analyze_is_supported?:                                       boolean;
    enable_share_panel_page_as_screen_layer?:                          boolean;
    music_web_mark_root_visible?:                                      boolean;
    web_playback_associated_ve?:                                       boolean;
    ytidb_stop_transaction_commit?:                                    boolean;
    enable_premium_voluntary_pause?:                                   boolean;
    is_mweb_wexit_main_launch?:                                        boolean;
    csi_on_gel?:                                                       boolean;
    html5_pacf_enable_dai?:                                            boolean;
    kevlar_attach_vimio_behavior?:                                     boolean;
    use_screen_manager_util?:                                          boolean;
    kevlar_dropdown_fix?:                                              boolean;
    music_web_enable_wug_search_endpoint?:                             boolean;
    enable_ypc_spinners?:                                              boolean;
    kevlar_enable_vimio_logging?:                                      boolean;
    music_web_enable_wug_playlist_edit_endpoint?:                      boolean;
    music_web_enable_wug_fetch_next?:                                  boolean;
    music_web_enable_wug_like_endpoint?:                               boolean;
    state_machine_dynamic_events_lifecycles?:                          boolean;
    networkless_logging?:                                              boolean;
    music_web_enable_player_bar_ve_logging_fixes?:                     boolean;
    web_lifecycles?:                                                   boolean;
    web_enable_ad_signals_in_it_context?:                              boolean;
    export_networkless_options?:                                       boolean;
    pes_migrate_association_data?:                                     boolean;
    screen_manager_log_servlet_ei?:                                    boolean;
    pes_enable_association_store?:                                     boolean;
    music_web_enable_client_side_playback_screens?:                    boolean;
    kevlar_gel_error_routing?:                                         boolean;
    music_web_enable_wug_yt_next_continuation_behavior?:               boolean;
    kevlar_import_vimio_behavior?:                                     boolean;
    music_enable_signed_out_account_menu?:                             boolean;
    enable_get_account_switcher_endpoint_on_webfe?:                    boolean;
    memberships_page_continuation_migrate?:                            boolean;
    disable_simple_mixed_direction_formatted_strings?:                 boolean;
    nwl_use_ytidb_partitioning?:                                       boolean;
    nwl_throttling_race_fix?:                                          boolean;
    enable_polymer_resin?:                                             boolean;
    use_document_lifecycles?:                                          boolean;
    enable_web_media_session_metadata_fix?:                            boolean;
    enable_mixed_direction_formatted_strings?:                         boolean;
    music_web_enable_wug_music_delete_privately_owned_entity_command?: boolean;
    kevlar_enable_vimio_callback?:                                     boolean;
    music_web_enable_wug_feedback_endpoint?:                           boolean;
    validate_network_status?:                                          boolean;
    allow_skip_networkless?:                                           boolean;
    music_web_enable_wug_channel_creation_form_endpoint?:              boolean;
    trigger_nsm_validation_checks_with_nwl?:                           boolean;
    disable_thumbnail_preloading?:                                     boolean;
    music_web_enable_wug_application_settings_endpoint?:               boolean;
    log_heartbeat_with_lifecycles?:                                    boolean;
    enable_web_upload_support?:                                        boolean;
    music_web_enable_wug_subscribe_endpoint?:                          boolean;
    web_gel_timeout_cap?:                                              boolean;
    music_web_enable_wug_fetch_get_search_suggestions?:                boolean;
    music_web_enable_wug_ypc_endpoints?:                               boolean;
    suppress_error_204_logging?:                                       boolean;
    ytidb_transaction_ended_event_rate_limit?:                         number;
    addto_ajax_log_warning_fraction?:                                  number;
    nwl_cleaning_rate?:                                                number;
    log_window_onerror_fraction?:                                      number;
    web_gel_debounce_ms?:                                              number;
    check_navigator_accuracy_timeout_ms?:                              number;
    leader_election_renewal_interval?:                                 number;
    music_web_delay_watch_next_ms?:                                    number;
    web_logging_max_batch?:                                            number;
    initial_gel_batch_timeout?:                                        number;
    ytidb_transaction_try_count?:                                      number;
    leader_election_lease_ttl?:                                        number;
    music_web_canary_stage?:                                           number;
    music_web_session_check_interval_millis?:                          number;
    html5_experiment_id_label?:                                        number;
    web_foreground_heartbeat_interval_ms?:                             number;
    botguard_async_snapshot_timeout_ms?:                               number;
    html5_experiment_id_label_live_infra?:                             number;
    music_web_list_continuation_prescan_height_px?:                    number;
    client_streamz_web_flush_interval_seconds?:                        number;
    client_streamz_web_flush_count?:                                   number;
    network_polling_interval?:                                         number;
    leader_election_check_interval?:                                   number;
    cb_v2_uxe?:                                                        string;
    music_web_body_line_height?:                                       string;
    music_web_title_line_height?:                                      string;
    web_client_version_override?:                                      string;
    debug_forced_promo_id?:                                            string;
    user_preference_collection_initial_browse_id?:                     string;
    web_op_signal_type_banlist?:                                       any[];
    kevlar_command_handler_command_banlist?:                           any[];
    web_op_endpoint_banlist?:                                          any[];
    web_op_continuation_type_banlist?:                                 any[];
}

export interface HotkeyDialog {
    title?:    Title;
    sections?: Section[];
}

export interface Section {
    hotkeyDialogSectionRenderer?: HotkeyDialogSectionRenderer;
}

export interface HotkeyDialogSectionRenderer {
    title?:   Title;
    options?: Option[];
}

export interface Option {
    hotkeyDialogSectionOptionRenderer?: HotkeyDialogSectionOptionRenderer;
}

export interface HotkeyDialogSectionOptionRenderer {
    label?:  Title;
    hotkey?: string;
}

export interface Title {
    runs?: Run[];
}

export interface Run {
    text?: string;
}

export interface InnertubeContext {
    client?:        Client;
    user?:          User;
    request?:       Request;
    clickTracking?: ClickTracking;
}

export interface ClickTracking {
    clickTrackingParams?: string;
}

export interface Client {
    hl?:               string;
    gl?:               string;
    remoteHost?:       string;
    deviceMake?:       string;
    deviceModel?:      string;
    visitorData?:      string;
    userAgent?:        string;
    clientName?:       string;
    clientVersion?:    string;
    osName?:           string;
    osVersion?:        string;
    originalUrl?:      string;
    platform?:         string;
    clientFormFactor?: string;
    browserName?:      string;
    browserVersion?:   string;
}

export interface Request {
    useSsl?: boolean;
}

export interface User {
    lockedSafetyMode?: boolean;
}

export interface LatestEcatcherServiceTrackingParams {
    "client.name"?: string;
}

export interface WebPlayerContextConfigs {
    WEB_PLAYER_CONTEXT_CONFIG_ID_MUSIC_WATCH?: WebPlayerContextConfigIDMusicWatch;
}

export interface WebPlayerContextConfigIDMusicWatch {
    rootElementId?:                      string;
    jsUrl?:                              string;
    cssUrl?:                             string;
    contextId?:                          string;
    eventLabel?:                         string;
    contentRegion?:                      string;
    hl?:                                 string;
    hostLanguage?:                       string;
    innertubeApiKey?:                    string;
    innertubeApiVersion?:                string;
    innertubeContextClientVersion?:      string;
    controlsType?:                       number;
    disableKeyboardControls?:            boolean;
    disableRelatedVideos?:               boolean;
    annotationsLoadPolicy?:              number;
    device?:                             Device;
    serializedExperimentIds?:            string;
    serializedExperimentFlags?:          string;
    disableSharing?:                     boolean;
    hideInfo?:                           boolean;
    disableWatchLater?:                  boolean;
    mobileIphoneSupportsInlinePlayback?: boolean;
    isMobileDevice?:                     boolean;
    cspNonce?:                           string;
    canaryState?:                        string;
    datasyncId?:                         string;
}

export interface Device {
    brand?:            string;
    model?:            string;
    browser?:          string;
    browserVersion?:   string;
    os?:               string;
    osVersion?:        string;
    platform?:         string;
    interfaceName?:    string;
    interfaceVersion?: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toResults(json: string): ytcfgInterface {
        return cast(JSON.parse(json), r("ytcfgInterface"));
    }

    public static resultsToJson(value: ytcfgInterface): string {
        return JSON.stringify(uncast(value, r("ytcfgInterface")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Results": o([
        { json: "CLIENT_CANARY_STATE", js: "CLIENT_CANARY_STATE", typ: u(undefined, "") },
        { json: "DEVICE", js: "DEVICE", typ: u(undefined, "") },
        { json: "ELEMENT_POOL_DEFAULT_CAP", js: "ELEMENT_POOL_DEFAULT_CAP", typ: u(undefined, 0) },
        { json: "EVENT_ID", js: "EVENT_ID", typ: u(undefined, "") },
        { json: "EXPERIMENT_FLAGS", js: "EXPERIMENT_FLAGS", typ: u(undefined, r("ExperimentFlags")) },
        { json: "GAPI_HINT_PARAMS", js: "GAPI_HINT_PARAMS", typ: u(undefined, "") },
        { json: "GAPI_HOST", js: "GAPI_HOST", typ: u(undefined, "") },
        { json: "GAPI_LOCALE", js: "GAPI_LOCALE", typ: u(undefined, "") },
        { json: "GL", js: "GL", typ: u(undefined, "") },
        { json: "HL", js: "HL", typ: u(undefined, "") },
        { json: "HTML_DIR", js: "HTML_DIR", typ: u(undefined, "") },
        { json: "HTML_LANG", js: "HTML_LANG", typ: u(undefined, "") },
        { json: "INNERTUBE_API_KEY", js: "INNERTUBE_API_KEY", typ: u(undefined, "") },
        { json: "INNERTUBE_API_VERSION", js: "INNERTUBE_API_VERSION", typ: u(undefined, "") },
        { json: "INNERTUBE_CLIENT_NAME", js: "INNERTUBE_CLIENT_NAME", typ: u(undefined, "") },
        { json: "INNERTUBE_CLIENT_VERSION", js: "INNERTUBE_CLIENT_VERSION", typ: u(undefined, "") },
        { json: "INNERTUBE_CONTEXT", js: "INNERTUBE_CONTEXT", typ: u(undefined, r("InnertubeContext")) },
        { json: "INNERTUBE_CONTEXT_CLIENT_NAME", js: "INNERTUBE_CONTEXT_CLIENT_NAME", typ: u(undefined, 0) },
        { json: "INNERTUBE_CONTEXT_CLIENT_VERSION", js: "INNERTUBE_CONTEXT_CLIENT_VERSION", typ: u(undefined, "") },
        { json: "INNERTUBE_CONTEXT_GL", js: "INNERTUBE_CONTEXT_GL", typ: u(undefined, "") },
        { json: "INNERTUBE_CONTEXT_HL", js: "INNERTUBE_CONTEXT_HL", typ: u(undefined, "") },
        { json: "LATEST_ECATCHER_SERVICE_TRACKING_PARAMS", js: "LATEST_ECATCHER_SERVICE_TRACKING_PARAMS", typ: u(undefined, r("LatestEcatcherServiceTrackingParams")) },
        { json: "LOGGED_IN", js: "LOGGED_IN", typ: u(undefined, true) },
        { json: "PAGE_BUILD_LABEL", js: "PAGE_BUILD_LABEL", typ: u(undefined, "") },
        { json: "PAGE_CL", js: "PAGE_CL", typ: u(undefined, 0) },
        { json: "SERVER_NAME", js: "SERVER_NAME", typ: u(undefined, "") },
        { json: "SIGNIN_URL", js: "SIGNIN_URL", typ: u(undefined, "") },
        { json: "VISITOR_DATA", js: "VISITOR_DATA", typ: u(undefined, "") },
        { json: "WEB_PLAYER_CONTEXT_CONFIGS", js: "WEB_PLAYER_CONTEXT_CONFIGS", typ: u(undefined, r("WebPlayerContextConfigs")) },
        { json: "XSRF_FIELD_NAME", js: "XSRF_FIELD_NAME", typ: u(undefined, "") },
        { json: "XSRF_TOKEN", js: "XSRF_TOKEN", typ: u(undefined, "") },
        { json: "YPC_MB_URL", js: "YPC_MB_URL", typ: u(undefined, "") },
        { json: "YTR_FAMILY_CREATION_URL", js: "YTR_FAMILY_CREATION_URL", typ: u(undefined, "") },
        { json: "SERVER_VERSION", js: "SERVER_VERSION", typ: u(undefined, "") },
        { json: "LOCALE", js: "LOCALE", typ: u(undefined, "") },
        { json: "REUSE_COMPONENTS", js: "REUSE_COMPONENTS", typ: u(undefined, true) },
        { json: "STAMPER_STABLE_LIST", js: "STAMPER_STABLE_LIST", typ: u(undefined, true) },
        { json: "DATASYNC_ID", js: "DATASYNC_ID", typ: u(undefined, "") },
        { json: "SERIALIZED_CLIENT_CONFIG_DATA", js: "SERIALIZED_CLIENT_CONFIG_DATA", typ: u(undefined, "") },
        { json: "CLIENT_PROTOCOL", js: "CLIENT_PROTOCOL", typ: u(undefined, "") },
        { json: "CLIENT_TRANSPORT", js: "CLIENT_TRANSPORT", typ: u(undefined, "") },
        { json: "USE_EMBEDDED_INNERTUBE_DATA", js: "USE_EMBEDDED_INNERTUBE_DATA", typ: u(undefined, true) },
        { json: "VISIBILITY_ROOT", js: "VISIBILITY_ROOT", typ: u(undefined, "") },
        { json: "YTMUSIC_ICON_SRC", js: "YTMUSIC_ICON_SRC", typ: u(undefined, "") },
        { json: "YTMUSIC_LOGO_SRC", js: "YTMUSIC_LOGO_SRC", typ: u(undefined, "") },
        { json: "UPLOAD_URL", js: "UPLOAD_URL", typ: u(undefined, "") },
        { json: "TRANSFER_PAGE_SIGNIN_URL", js: "TRANSFER_PAGE_SIGNIN_URL", typ: u(undefined, "") },
        { json: "LOGOUT_URL", js: "LOGOUT_URL", typ: u(undefined, "") },
        { json: "IS_SUBSCRIBER", js: "IS_SUBSCRIBER", typ: u(undefined, true) },
        { json: "IS_MOBILE_WEB", js: "IS_MOBILE_WEB", typ: u(undefined, true) },
        { json: "INITIAL_ENDPOINT", js: "INITIAL_ENDPOINT", typ: u(undefined, "") },
        { json: "HOTKEY_DIALOG", js: "HOTKEY_DIALOG", typ: u(undefined, r("HotkeyDialog")) },
        { json: "DEFAULT_ALBUM_IMAGE_SRC", js: "DEFAULT_ALBUM_IMAGE_SRC", typ: u(undefined, "") },
        { json: "AUDIO_QUALITY", js: "AUDIO_QUALITY", typ: u(undefined, "") },
        { json: "ADD_SCRAPER_ATTRIBUTES", js: "ADD_SCRAPER_ATTRIBUTES", typ: u(undefined, true) },
        { json: "ACTIVE_ACCOUNT_IS_MADISON_ACCOUNT", js: "ACTIVE_ACCOUNT_IS_MADISON_ACCOUNT", typ: u(undefined, true) },
        { json: "YTMUSIC_WHITE_ICON_SRC", js: "YTMUSIC_WHITE_ICON_SRC", typ: u(undefined, "") },
        { json: "YTMUSIC_WHITE_LOGO_SRC", js: "YTMUSIC_WHITE_LOGO_SRC", typ: u(undefined, "") },
    ], false),
    "ExperimentFlags": o([
        { json: "enable_nwl_cleaning_logic", js: "enable_nwl_cleaning_logic", typ: u(undefined, true) },
        { json: "yt_img_shadow_trigger_show_on_visible", js: "yt_img_shadow_trigger_show_on_visible", typ: u(undefined, true) },
        { json: "music_web_enable_generic_attestation", js: "music_web_enable_generic_attestation", typ: u(undefined, true) },
        { json: "music_web_enable_wug_queue_add_endpoint", js: "music_web_enable_wug_queue_add_endpoint", typ: u(undefined, true) },
        { json: "pageid_as_header_web", js: "pageid_as_header_web", typ: u(undefined, true) },
        { json: "drop_st_cookie_before_cb", js: "drop_st_cookie_before_cb", typ: u(undefined, true) },
        { json: "disable_child_node_auto_formatted_strings", js: "disable_child_node_auto_formatted_strings", typ: u(undefined, true) },
        { json: "use_undefined_csn_any_layer", js: "use_undefined_csn_any_layer", typ: u(undefined, true) },
        { json: "enable_names_handles_account_switcher", js: "enable_names_handles_account_switcher", typ: u(undefined, true) },
        { json: "nwl_trigger_throttle_after_reset", js: "nwl_trigger_throttle_after_reset", typ: u(undefined, true) },
        { json: "music_web_enable_innertube_transport_service", js: "music_web_enable_innertube_transport_service", typ: u(undefined, true) },
        { json: "music_web_use_new_yt_sans", js: "music_web_use_new_yt_sans", typ: u(undefined, true) },
        { json: "music_web_enable_drag_drop_upload", js: "music_web_enable_drag_drop_upload", typ: u(undefined, true) },
        { json: "web_api_url", js: "web_api_url", typ: u(undefined, true) },
        { json: "music_web_is_canary_control", js: "music_web_is_canary_control", typ: u(undefined, true) },
        { json: "log_web_endpoint_to_layer", js: "log_web_endpoint_to_layer", typ: u(undefined, true) },
        { json: "music_web_ping_ad_start", js: "music_web_ping_ad_start", typ: u(undefined, true) },
        { json: "music_enable_explore_tab_on_web", js: "music_enable_explore_tab_on_web", typ: u(undefined, true) },
        { json: "enable_client_streamz_web", js: "enable_client_streamz_web", typ: u(undefined, true) },
        { json: "web_dedupe_ve_grafting", js: "web_dedupe_ve_grafting", typ: u(undefined, true) },
        { json: "enable_auto_play_param_fix_for_masthead_ad", js: "enable_auto_play_param_fix_for_masthead_ad", typ: u(undefined, true) },
        { json: "ytidb_is_supported_cache_success_result", js: "ytidb_is_supported_cache_success_result", typ: u(undefined, true) },
        { json: "html5_enable_video_overlay_on_inplayer_slot_for_tv", js: "html5_enable_video_overlay_on_inplayer_slot_for_tv", typ: u(undefined, true) },
        { json: "music_web_enable_service_worker", js: "music_web_enable_service_worker", typ: u(undefined, true) },
        { json: "enable_memberships_and_purchases", js: "enable_memberships_and_purchases", typ: u(undefined, true) },
        { json: "kevlar_use_vimio_behavior", js: "kevlar_use_vimio_behavior", typ: u(undefined, true) },
        { json: "polymer_verifiy_app_state", js: "polymer_verifiy_app_state", typ: u(undefined, true) },
        { json: "log_final_payload", js: "log_final_payload", typ: u(undefined, true) },
        { json: "flush_gel", js: "flush_gel", typ: u(undefined, true) },
        { json: "music_web_player_context_config", js: "music_web_player_context_config", typ: u(undefined, true) },
        { json: "polymer_bad_build_labels", js: "polymer_bad_build_labels", typ: u(undefined, true) },
        { json: "enable_modular_player_page_server", js: "enable_modular_player_page_server", typ: u(undefined, true) },
        { json: "music_web_enable_wug_fetch_data_browse", js: "music_web_enable_wug_fetch_data_browse", typ: u(undefined, true) },
        { json: "music_enable_improve_your_recommendations_setting", js: "music_enable_improve_your_recommendations_setting", typ: u(undefined, true) },
        { json: "vss_final_ping_send_and_write", js: "vss_final_ping_send_and_write", typ: u(undefined, true) },
        { json: "music_web_is_canary", js: "music_web_is_canary", typ: u(undefined, true) },
        { json: "ytidb_analyze_is_supported", js: "ytidb_analyze_is_supported", typ: u(undefined, true) },
        { json: "enable_share_panel_page_as_screen_layer", js: "enable_share_panel_page_as_screen_layer", typ: u(undefined, true) },
        { json: "music_web_mark_root_visible", js: "music_web_mark_root_visible", typ: u(undefined, true) },
        { json: "web_playback_associated_ve", js: "web_playback_associated_ve", typ: u(undefined, true) },
        { json: "ytidb_stop_transaction_commit", js: "ytidb_stop_transaction_commit", typ: u(undefined, true) },
        { json: "enable_premium_voluntary_pause", js: "enable_premium_voluntary_pause", typ: u(undefined, true) },
        { json: "is_mweb_wexit_main_launch", js: "is_mweb_wexit_main_launch", typ: u(undefined, true) },
        { json: "csi_on_gel", js: "csi_on_gel", typ: u(undefined, true) },
        { json: "html5_pacf_enable_dai", js: "html5_pacf_enable_dai", typ: u(undefined, true) },
        { json: "kevlar_attach_vimio_behavior", js: "kevlar_attach_vimio_behavior", typ: u(undefined, true) },
        { json: "use_screen_manager_util", js: "use_screen_manager_util", typ: u(undefined, true) },
        { json: "kevlar_dropdown_fix", js: "kevlar_dropdown_fix", typ: u(undefined, true) },
        { json: "music_web_enable_wug_search_endpoint", js: "music_web_enable_wug_search_endpoint", typ: u(undefined, true) },
        { json: "enable_ypc_spinners", js: "enable_ypc_spinners", typ: u(undefined, true) },
        { json: "kevlar_enable_vimio_logging", js: "kevlar_enable_vimio_logging", typ: u(undefined, true) },
        { json: "music_web_enable_wug_playlist_edit_endpoint", js: "music_web_enable_wug_playlist_edit_endpoint", typ: u(undefined, true) },
        { json: "music_web_enable_wug_fetch_next", js: "music_web_enable_wug_fetch_next", typ: u(undefined, true) },
        { json: "music_web_enable_wug_like_endpoint", js: "music_web_enable_wug_like_endpoint", typ: u(undefined, true) },
        { json: "state_machine_dynamic_events_lifecycles", js: "state_machine_dynamic_events_lifecycles", typ: u(undefined, true) },
        { json: "networkless_logging", js: "networkless_logging", typ: u(undefined, true) },
        { json: "music_web_enable_player_bar_ve_logging_fixes", js: "music_web_enable_player_bar_ve_logging_fixes", typ: u(undefined, true) },
        { json: "web_lifecycles", js: "web_lifecycles", typ: u(undefined, true) },
        { json: "web_enable_ad_signals_in_it_context", js: "web_enable_ad_signals_in_it_context", typ: u(undefined, true) },
        { json: "export_networkless_options", js: "export_networkless_options", typ: u(undefined, true) },
        { json: "pes_migrate_association_data", js: "pes_migrate_association_data", typ: u(undefined, true) },
        { json: "screen_manager_log_servlet_ei", js: "screen_manager_log_servlet_ei", typ: u(undefined, true) },
        { json: "pes_enable_association_store", js: "pes_enable_association_store", typ: u(undefined, true) },
        { json: "music_web_enable_client_side_playback_screens", js: "music_web_enable_client_side_playback_screens", typ: u(undefined, true) },
        { json: "kevlar_gel_error_routing", js: "kevlar_gel_error_routing", typ: u(undefined, true) },
        { json: "music_web_enable_wug_yt_next_continuation_behavior", js: "music_web_enable_wug_yt_next_continuation_behavior", typ: u(undefined, true) },
        { json: "kevlar_import_vimio_behavior", js: "kevlar_import_vimio_behavior", typ: u(undefined, true) },
        { json: "music_enable_signed_out_account_menu", js: "music_enable_signed_out_account_menu", typ: u(undefined, true) },
        { json: "enable_get_account_switcher_endpoint_on_webfe", js: "enable_get_account_switcher_endpoint_on_webfe", typ: u(undefined, true) },
        { json: "memberships_page_continuation_migrate", js: "memberships_page_continuation_migrate", typ: u(undefined, true) },
        { json: "disable_simple_mixed_direction_formatted_strings", js: "disable_simple_mixed_direction_formatted_strings", typ: u(undefined, true) },
        { json: "nwl_use_ytidb_partitioning", js: "nwl_use_ytidb_partitioning", typ: u(undefined, true) },
        { json: "nwl_throttling_race_fix", js: "nwl_throttling_race_fix", typ: u(undefined, true) },
        { json: "enable_polymer_resin", js: "enable_polymer_resin", typ: u(undefined, true) },
        { json: "use_document_lifecycles", js: "use_document_lifecycles", typ: u(undefined, true) },
        { json: "enable_web_media_session_metadata_fix", js: "enable_web_media_session_metadata_fix", typ: u(undefined, true) },
        { json: "enable_mixed_direction_formatted_strings", js: "enable_mixed_direction_formatted_strings", typ: u(undefined, true) },
        { json: "music_web_enable_wug_music_delete_privately_owned_entity_command", js: "music_web_enable_wug_music_delete_privately_owned_entity_command", typ: u(undefined, true) },
        { json: "kevlar_enable_vimio_callback", js: "kevlar_enable_vimio_callback", typ: u(undefined, true) },
        { json: "music_web_enable_wug_feedback_endpoint", js: "music_web_enable_wug_feedback_endpoint", typ: u(undefined, true) },
        { json: "validate_network_status", js: "validate_network_status", typ: u(undefined, true) },
        { json: "allow_skip_networkless", js: "allow_skip_networkless", typ: u(undefined, true) },
        { json: "music_web_enable_wug_channel_creation_form_endpoint", js: "music_web_enable_wug_channel_creation_form_endpoint", typ: u(undefined, true) },
        { json: "trigger_nsm_validation_checks_with_nwl", js: "trigger_nsm_validation_checks_with_nwl", typ: u(undefined, true) },
        { json: "disable_thumbnail_preloading", js: "disable_thumbnail_preloading", typ: u(undefined, true) },
        { json: "music_web_enable_wug_application_settings_endpoint", js: "music_web_enable_wug_application_settings_endpoint", typ: u(undefined, true) },
        { json: "log_heartbeat_with_lifecycles", js: "log_heartbeat_with_lifecycles", typ: u(undefined, true) },
        { json: "enable_web_upload_support", js: "enable_web_upload_support", typ: u(undefined, true) },
        { json: "music_web_enable_wug_subscribe_endpoint", js: "music_web_enable_wug_subscribe_endpoint", typ: u(undefined, true) },
        { json: "web_gel_timeout_cap", js: "web_gel_timeout_cap", typ: u(undefined, true) },
        { json: "music_web_enable_wug_fetch_get_search_suggestions", js: "music_web_enable_wug_fetch_get_search_suggestions", typ: u(undefined, true) },
        { json: "music_web_enable_wug_ypc_endpoints", js: "music_web_enable_wug_ypc_endpoints", typ: u(undefined, true) },
        { json: "suppress_error_204_logging", js: "suppress_error_204_logging", typ: u(undefined, true) },
        { json: "ytidb_transaction_ended_event_rate_limit", js: "ytidb_transaction_ended_event_rate_limit", typ: u(undefined, 3.14) },
        { json: "addto_ajax_log_warning_fraction", js: "addto_ajax_log_warning_fraction", typ: u(undefined, 3.14) },
        { json: "nwl_cleaning_rate", js: "nwl_cleaning_rate", typ: u(undefined, 3.14) },
        { json: "log_window_onerror_fraction", js: "log_window_onerror_fraction", typ: u(undefined, 3.14) },
        { json: "web_gel_debounce_ms", js: "web_gel_debounce_ms", typ: u(undefined, 0) },
        { json: "check_navigator_accuracy_timeout_ms", js: "check_navigator_accuracy_timeout_ms", typ: u(undefined, 0) },
        { json: "leader_election_renewal_interval", js: "leader_election_renewal_interval", typ: u(undefined, 0) },
        { json: "music_web_delay_watch_next_ms", js: "music_web_delay_watch_next_ms", typ: u(undefined, 0) },
        { json: "web_logging_max_batch", js: "web_logging_max_batch", typ: u(undefined, 0) },
        { json: "initial_gel_batch_timeout", js: "initial_gel_batch_timeout", typ: u(undefined, 0) },
        { json: "ytidb_transaction_try_count", js: "ytidb_transaction_try_count", typ: u(undefined, 0) },
        { json: "leader_election_lease_ttl", js: "leader_election_lease_ttl", typ: u(undefined, 0) },
        { json: "music_web_canary_stage", js: "music_web_canary_stage", typ: u(undefined, 0) },
        { json: "music_web_session_check_interval_millis", js: "music_web_session_check_interval_millis", typ: u(undefined, 0) },
        { json: "html5_experiment_id_label", js: "html5_experiment_id_label", typ: u(undefined, 0) },
        { json: "web_foreground_heartbeat_interval_ms", js: "web_foreground_heartbeat_interval_ms", typ: u(undefined, 0) },
        { json: "botguard_async_snapshot_timeout_ms", js: "botguard_async_snapshot_timeout_ms", typ: u(undefined, 0) },
        { json: "html5_experiment_id_label_live_infra", js: "html5_experiment_id_label_live_infra", typ: u(undefined, 0) },
        { json: "music_web_list_continuation_prescan_height_px", js: "music_web_list_continuation_prescan_height_px", typ: u(undefined, 0) },
        { json: "client_streamz_web_flush_interval_seconds", js: "client_streamz_web_flush_interval_seconds", typ: u(undefined, 0) },
        { json: "client_streamz_web_flush_count", js: "client_streamz_web_flush_count", typ: u(undefined, 0) },
        { json: "network_polling_interval", js: "network_polling_interval", typ: u(undefined, 0) },
        { json: "leader_election_check_interval", js: "leader_election_check_interval", typ: u(undefined, 0) },
        { json: "cb_v2_uxe", js: "cb_v2_uxe", typ: u(undefined, "") },
        { json: "music_web_body_line_height", js: "music_web_body_line_height", typ: u(undefined, "") },
        { json: "music_web_title_line_height", js: "music_web_title_line_height", typ: u(undefined, "") },
        { json: "web_client_version_override", js: "web_client_version_override", typ: u(undefined, "") },
        { json: "debug_forced_promo_id", js: "debug_forced_promo_id", typ: u(undefined, "") },
        { json: "user_preference_collection_initial_browse_id", js: "user_preference_collection_initial_browse_id", typ: u(undefined, "") },
        { json: "web_op_signal_type_banlist", js: "web_op_signal_type_banlist", typ: u(undefined, a("any")) },
        { json: "kevlar_command_handler_command_banlist", js: "kevlar_command_handler_command_banlist", typ: u(undefined, a("any")) },
        { json: "web_op_endpoint_banlist", js: "web_op_endpoint_banlist", typ: u(undefined, a("any")) },
        { json: "web_op_continuation_type_banlist", js: "web_op_continuation_type_banlist", typ: u(undefined, a("any")) },
    ], false),
    "HotkeyDialog": o([
        { json: "title", js: "title", typ: u(undefined, r("Title")) },
        { json: "sections", js: "sections", typ: u(undefined, a(r("Section"))) },
    ], false),
    "Section": o([
        { json: "hotkeyDialogSectionRenderer", js: "hotkeyDialogSectionRenderer", typ: u(undefined, r("HotkeyDialogSectionRenderer")) },
    ], false),
    "HotkeyDialogSectionRenderer": o([
        { json: "title", js: "title", typ: u(undefined, r("Title")) },
        { json: "options", js: "options", typ: u(undefined, a(r("Option"))) },
    ], false),
    "Option": o([
        { json: "hotkeyDialogSectionOptionRenderer", js: "hotkeyDialogSectionOptionRenderer", typ: u(undefined, r("HotkeyDialogSectionOptionRenderer")) },
    ], false),
    "HotkeyDialogSectionOptionRenderer": o([
        { json: "label", js: "label", typ: u(undefined, r("Title")) },
        { json: "hotkey", js: "hotkey", typ: u(undefined, "") },
    ], false),
    "Title": o([
        { json: "runs", js: "runs", typ: u(undefined, a(r("Run"))) },
    ], false),
    "Run": o([
        { json: "text", js: "text", typ: u(undefined, "") },
    ], false),
    "InnertubeContext": o([
        { json: "client", js: "client", typ: u(undefined, r("Client")) },
        { json: "user", js: "user", typ: u(undefined, r("User")) },
        { json: "request", js: "request", typ: u(undefined, r("Request")) },
        { json: "clickTracking", js: "clickTracking", typ: u(undefined, r("ClickTracking")) },
    ], false),
    "ClickTracking": o([
        { json: "clickTrackingParams", js: "clickTrackingParams", typ: u(undefined, "") },
    ], false),
    "Client": o([
        { json: "hl", js: "hl", typ: u(undefined, "") },
        { json: "gl", js: "gl", typ: u(undefined, "") },
        { json: "remoteHost", js: "remoteHost", typ: u(undefined, "") },
        { json: "deviceMake", js: "deviceMake", typ: u(undefined, "") },
        { json: "deviceModel", js: "deviceModel", typ: u(undefined, "") },
        { json: "visitorData", js: "visitorData", typ: u(undefined, "") },
        { json: "userAgent", js: "userAgent", typ: u(undefined, "") },
        { json: "clientName", js: "clientName", typ: u(undefined, "") },
        { json: "clientVersion", js: "clientVersion", typ: u(undefined, "") },
        { json: "osName", js: "osName", typ: u(undefined, "") },
        { json: "osVersion", js: "osVersion", typ: u(undefined, "") },
        { json: "originalUrl", js: "originalUrl", typ: u(undefined, "") },
        { json: "platform", js: "platform", typ: u(undefined, "") },
        { json: "clientFormFactor", js: "clientFormFactor", typ: u(undefined, "") },
        { json: "browserName", js: "browserName", typ: u(undefined, "") },
        { json: "browserVersion", js: "browserVersion", typ: u(undefined, "") },
    ], false),
    "Request": o([
        { json: "useSsl", js: "useSsl", typ: u(undefined, true) },
    ], false),
    "User": o([
        { json: "lockedSafetyMode", js: "lockedSafetyMode", typ: u(undefined, true) },
    ], false),
    "LatestEcatcherServiceTrackingParams": o([
        { json: "client.name", js: "client.name", typ: u(undefined, "") },
    ], false),
    "WebPlayerContextConfigs": o([
        { json: "WEB_PLAYER_CONTEXT_CONFIG_ID_MUSIC_WATCH", js: "WEB_PLAYER_CONTEXT_CONFIG_ID_MUSIC_WATCH", typ: u(undefined, r("WebPlayerContextConfigIDMusicWatch")) },
    ], false),
    "WebPlayerContextConfigIDMusicWatch": o([
        { json: "rootElementId", js: "rootElementId", typ: u(undefined, "") },
        { json: "jsUrl", js: "jsUrl", typ: u(undefined, "") },
        { json: "cssUrl", js: "cssUrl", typ: u(undefined, "") },
        { json: "contextId", js: "contextId", typ: u(undefined, "") },
        { json: "eventLabel", js: "eventLabel", typ: u(undefined, "") },
        { json: "contentRegion", js: "contentRegion", typ: u(undefined, "") },
        { json: "hl", js: "hl", typ: u(undefined, "") },
        { json: "hostLanguage", js: "hostLanguage", typ: u(undefined, "") },
        { json: "innertubeApiKey", js: "innertubeApiKey", typ: u(undefined, "") },
        { json: "innertubeApiVersion", js: "innertubeApiVersion", typ: u(undefined, "") },
        { json: "innertubeContextClientVersion", js: "innertubeContextClientVersion", typ: u(undefined, "") },
        { json: "controlsType", js: "controlsType", typ: u(undefined, 0) },
        { json: "disableKeyboardControls", js: "disableKeyboardControls", typ: u(undefined, true) },
        { json: "disableRelatedVideos", js: "disableRelatedVideos", typ: u(undefined, true) },
        { json: "annotationsLoadPolicy", js: "annotationsLoadPolicy", typ: u(undefined, 0) },
        { json: "device", js: "device", typ: u(undefined, r("Device")) },
        { json: "serializedExperimentIds", js: "serializedExperimentIds", typ: u(undefined, "") },
        { json: "serializedExperimentFlags", js: "serializedExperimentFlags", typ: u(undefined, "") },
        { json: "disableSharing", js: "disableSharing", typ: u(undefined, true) },
        { json: "hideInfo", js: "hideInfo", typ: u(undefined, true) },
        { json: "disableWatchLater", js: "disableWatchLater", typ: u(undefined, true) },
        { json: "mobileIphoneSupportsInlinePlayback", js: "mobileIphoneSupportsInlinePlayback", typ: u(undefined, true) },
        { json: "isMobileDevice", js: "isMobileDevice", typ: u(undefined, true) },
        { json: "cspNonce", js: "cspNonce", typ: u(undefined, "") },
        { json: "canaryState", js: "canaryState", typ: u(undefined, "") },
        { json: "datasyncId", js: "datasyncId", typ: u(undefined, "") },
    ], false),
    "Device": o([
        { json: "brand", js: "brand", typ: u(undefined, "") },
        { json: "model", js: "model", typ: u(undefined, "") },
        { json: "browser", js: "browser", typ: u(undefined, "") },
        { json: "browserVersion", js: "browserVersion", typ: u(undefined, "") },
        { json: "os", js: "os", typ: u(undefined, "") },
        { json: "osVersion", js: "osVersion", typ: u(undefined, "") },
        { json: "platform", js: "platform", typ: u(undefined, "") },
        { json: "interfaceName", js: "interfaceName", typ: u(undefined, "") },
        { json: "interfaceVersion", js: "interfaceVersion", typ: u(undefined, "") },
    ], false),
};
