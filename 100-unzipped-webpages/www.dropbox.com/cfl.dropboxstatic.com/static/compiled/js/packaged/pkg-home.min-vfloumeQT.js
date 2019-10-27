define("modules/clean/react/home/actions", ["require", "exports", "tslib", "modules/constants/env", "modules/core/uri", "modules/core/i18n", "modules/core/notify", "modules/clean/react/home/post_tti/api", "modules/clean/react/home/actions_post_tti", "modules/clean/viewer"], function(e, t, n, r, i, o, a, s, c, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = (function() {
        function e() {}
        return e.setSectionVisibility = function(e, t, r) {
            return n.__awaiter(this, void 0, void 0, function() {
                var i, o = this;
                return n.__generator(this, function(a) {
                    return i = function() {
                        return n.__awaiter(o, void 0, void 0, function() {
                            var e;
                            return n.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, s.waitForHomeTTI()];
                                    case 1:
                                        return e = t.sent().setSectionVisibility, [2, e]
                                }
                            })
                        })
                    }, c.setSectionVisibilityHelper(e, t, r, i), [2]
                })
            })
        }, e.createPaperDocInNewTab = function(e) {
            return n.__awaiter(this, void 0, void 0, function() {
                var t, c, u, d, m, _, h, p, E;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            t = o._("Could not create paper document."), c = window.open("about:blank"), n.label = 1;
                        case 1:
                            return n.trys.push([1, 4, , 5]), [4, s.waitForHomeTTI()];
                        case 2:
                            return u = n.sent().createPaperDoc, [4, u(e)];
                        case 3:
                            return d = n.sent(), m = l.Viewer.get_viewer(), _ = m.get_user_by_id(e), h = m.is_paired ? {
                                role: _.role
                            } : {}, c && !c.closed ? (p = new i.URI({
                                scheme: "https",
                                authority: r.NOTES_WEBSERVER,
                                path: "/doc/" + d.doc_id,
                                query: h
                            }).toString(), c.location.replace(p)) : a.Notify.error(t), [3, 5];
                        case 4:
                            return E = n.sent(), a.Notify.error(t), c && !c.closed ? [2, c.close()] : [3, 5];
                        case 5:
                            return [2]
                    }
                })
            })
        }, e
    })();
    t.HomeActions = u
}), define("modules/clean/react/home/actions_post_tti", ["require", "exports", "tslib", "modules/clean/flux/dispatcher", "modules/clean/react/home/constants", "modules/core/notify", "modules/clean/react/home/api_post_tti", "modules/core/i18n"], function(e, t, n, r, i, o, a, s) {
    "use strict";
    var c = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setSectionVisibilityPostTTI = function(e, r, i) {
        t.setSectionVisibilityHelper(e, r, i, function() {
            return n.__awaiter(c, void 0, void 0, function() {
                return n.__generator(this, function(e) {
                    return [2, a.setSectionVisibility]
                })
            })
        })
    }, t.setSectionVisibilityHelper = function(e, t, a, l) {
        return n.__awaiter(c, void 0, void 0, function() {
            var c, u, d;
            return n.__generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        c = t[".tag"], r.Dispatcher.dispatch({
                            type: i.HomeActionTypes.SET_SECTION_VISIBILITY,
                            payload: {
                                section: c,
                                visible: a
                            }
                        }), n.label = 1;
                    case 1:
                        return n.trys.push([1, 4, , 5]), [4, l()];
                    case 2:
                        return [4, n.sent()(e, t, a)];
                    case 3:
                        return n.sent(), [3, 5];
                    case 4:
                        throw u = n.sent(), d = a ? s._("Unable to show section.") : s._("Unable to hide section."), o.Notify.error(d), r.Dispatcher.dispatch({
                            type: i.HomeActionTypes.SET_SECTION_VISIBILITY,
                            payload: {
                                section: c,
                                visible: !a
                            }
                        }), u;
                    case 5:
                        return [2]
                }
            })
        })
    }
}), define("modules/clean/react/home/api", ["require", "exports", "tslib", "modules/clean/ajax", "external/lodash", "modules/core/exception", "modules/clean/web_timing_logger"], function(e, t, n, r, i, o, a) {
    "use strict";

    function s(e) {
        return n.__awaiter(this, void 0, void 0, function() {
            var r, i;
            return n.__generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return r = u, u = t.now(), e || u - r < 40 ? (l++, i = ~~(90 * Math.random()) + 10, [4, new Promise(function(e) {
                            return setTimeout(e, i)
                        })]) : [3, 2];
                    case 1:
                        return n.sent(), l--, [2, i];
                    case 2:
                        return [2, 0]
                }
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = n.__importStar(i);
    t.now = function() {
        return Date.now()
    };
    var c = 0,
        l = 0,
        u = t.now();
    t.makeRequest = function(e, i) {
        var a = this,
            u = void 0 === i ? {} : i,
            d = u.delayRequest,
            m = u.isBackground;
        u.shouldAssertResponse;
        c++;
        var _ = new Promise(function(i, u) {
            return n.__awaiter(a, void 0, void 0, function() {
                var a, _, h;
                return n.__generator(this, function(p) {
                    switch (p.label) {
                        case 0:
                            return [4, s(!!d)];
                        case 1:
                            return a = p.sent(), _ = t.now(), h = m ? r.SilentBackgroundRequest : r.WebRequest, h(n.__assign({
                                dataType: "json",
                                success: i,
                                error: function(n, r, i) {
                                    if ("abort" !== r) {
                                        var s = e && e.url || "no url",
                                            h = i ? ": '" + i + "'" : "",
                                            p = "makeRequest to '" + s + "' failed - " + r + h;
                                        o.reportStack(p, {
                                            severity: o.SEVERITY.NONCRITICAL,
                                            exc_extra: {
                                                errorThrown: i,
                                                textStatus: r,
                                                requestParams: e,
                                                delayRequest: d,
                                                isBackground: m,
                                                requestDelay: a,
                                                openRequests: c,
                                                delayedRequests: l,
                                                requestDuration: t.now() - _,
                                                status: n.status,
                                                "exclog.exc_group": "homeapi:" + r + ":" + i + ":" + s
                                            }
                                        }), u(Error(i + " (" + s + ")"))
                                    }
                                }
                            }, e)), [2]
                    }
                })
            })
        });
        return _.finally(function() {
            return c--
        }), _
    };
    var d = {},
        m = i.throttle(function() {
            i.size(d) > 1 && o.reportStack("Multiple role activities", {
                severity: o.SEVERITY.NONCRITICAL,
                exc_extra: d
            }), Object.keys(d).forEach(function(e) {
                var n = d[e];
                t.makeRequest({
                    url: "/home_feed/log_activities",
                    type: "POST",
                    data: {
                        role: e,
                        activities_json: JSON.stringify(i.map(n, "json")),
                        send_ts: t.now(),
                        page_start_ts: window.performance && window.performance.timing ? window.performance.timing.navigationStart || window.performance.timing.fetchStart : void 0
                    }
                }, {
                    isBackground: !0,
                    delayRequest: !0,
                    shouldAssertResponse: !0
                }).then(function() {
                    return n.forEach(function(e) {
                        return e.resolve()
                    })
                }, function() {
                    return n.forEach(function(e) {
                        return e.reject()
                    })
                })
            }), d = {}
        }, 1e3, {
            leading: !0,
            trailing: !0
        });
    t.logHomeActivity = function(e) {
        var r = this,
            o = e.role,
            s = e.eventName,
            c = e.extra;
        return new Promise(function(e, l) {
            return n.__awaiter(r, void 0, void 0, function() {
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return d[o] = d[o] || [], d[o].push({
                                json: {
                                    event_name: s,
                                    event_time: t.now(),
                                    extra: i.mapValues(c || {}, function(e) {
                                        return String(e)
                                    })
                                },
                                resolve: e,
                                reject: l
                            }), [4, a.waitForTTI()];
                        case 1:
                            return n.sent(), m(), [2]
                    }
                })
            })
        })
    }
}), define("modules/clean/react/home/api_post_tti", ["require", "exports", "modules/clean/api_v2/user_client"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setSectionVisibility = function(e, t, r) {
        return (new n.UserApiV2Client).ns("home").rpc("set_section_visibility", {
            section: t,
            visible: r
        }, {
            subjectUserId: e
        })
    }, t.createPaperDoc = function(e) {
        return (new n.UserApiV2Client).ns("paper").upload("docs/create", {
            import_format: {
                ".tag": "plain_text"
            }
        }, "", {
            subjectUserId: e
        })
    }
}), define("modules/clean/react/home/constants", ["require", "exports", "modules/clean/search/types"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e[e.UNKNOWN = 0] = "UNKNOWN", e[e.DO_NOT_LOAD = 1] = "DO_NOT_LOAD", e[e.IMMEDIATE = 2] = "IMMEDIATE", e[e.POST_TTI = 3] = "POST_TTI"
    })(t.ConditionalSectionLoadingPreference || (t.ConditionalSectionLoadingPreference = {}));
    (function(e) {
        e[e.UNKNOWN = 0] = "UNKNOWN", e[e.SYNCHRONOUS = 1] = "SYNCHRONOUS", e[e.ASYNCHRONOUS_PRE_TTI = 2] = "ASYNCHRONOUS_PRE_TTI", e[e.POST_TTI = 3] = "POST_TTI"
    })(t.ConditionalSectionLoadingMode || (t.ConditionalSectionLoadingMode = {})), t.HomeActionTypes = {
        INITIALIZE_STORE: "HOME_INITIALIZE_STORE",
        SET_PRE_TTI_PROPS: "HOME_SET_PRE_TTI_PROPS",
        SET_SECTION_VISIBILITY: "HOME_SET_SECTION_VISIBILITY",
        LOADED_ASYNC_CONDITIONAL_SECTION: "HOME_STORE_LOADED_ASYNC_CONDITIONAL_SECTION",
        DECLARE_CONDITIONAL_SECTION: "HOME_STORE_DECLARE_CONDITIONAL_SECTION",
        HOME_PREFETCH_RECEIVED_DATA: "HOME_PREFETCH_RECEIVED_DATA",
        SET_TAB_ID: "HOME_SET_TAB_ID",
        OPEN_FILE_VIEWER: "HOME_OPEN_FILE_VIEWER",
        CLOSE_FILE_VIEWER: "HOME_CLOSE_FILE_VIEWER"
    };
    (function(e) {
        e.STARRED = "Starred", e.TASKS = "To-do"
    })(t.HomeTabId || (t.HomeTabId = {})), t.HomeResourceStoreActionTypes = {
        RECEIVED_RESOURCE_ID_TO_FILE: "HOME_RESOURCE_STORE_RECEIVED_RESOURCE_ID_TO_FILE",
        REQUEST_PREVIEW: "HOME_RESOURCE_STORE_REQUEST_PREVIEW"
    }, t.HomeSections = {
        UNREAD: "unread",
        STARRED: "starred",
        RECENTS: "recents",
        SUGGEST: "suggest"
    }, t.DEFAULT_PRE_TTI_PROPS = {
        activeVariants: {},
        enableRecentFilters: !1,
        expSearchSuccessBanner: !1,
        isPaperEnabledForUser: !1,
        shouldDemoteSuggestSection: !1,
        shouldMarkRecentsTtiIfOffScreen: !1,
        shouldShowTaskNotifications: !1,
        shouldHideUnreadEmptyState: !1,
        shouldShowTasksSection: !1,
        shouldRenderSectionsTogetherWithCss: !1,
        shouldRenderWhileConditionalJsIsLoading: !1,
        showDismissSuggestModal: !1,
        uploaderExperiments: {},
        expNewFileMenuPrimary: !1,
        expUniversalSinglePageSearch: !1,
        expSearchDetailsPaneVariants: n.DetailsPaneVariants.OFF
    }, t.ConditionalSections = {
        PAPER_RECENTS: "paper_recents"
    }, t.LoggingTypes = {
        CLICK_SHOW_ALL: "click_show_all",
        HOME_PAGE_SHOWN: "home_page_shown",
        UNREAD_SHOWN: "unread_shown",
        STARRED_SHOWN: "starred_shown",
        RECENTS_SHOWN: "recents_shown",
        HIDE_SECTION: "hide_section",
        UNHIDE_SECTION: "unhide_section",
        RECENTS_ITEM_ACTION: "recents_item_action",
        OPEN_FILTERS_MENU: "open_filters_menu",
        CLOSE_FILTERS_MENU: "close_filters_menu",
        RESET_FILTERS_MENU: "reset_filters_menu",
        SELECT_FILTERS_MENU_ITEM: "select_filters_menu_item",
        DESELECT_FILTERS_MENU_ITEM: "deselect_filters_menu_item",
        OPEN_UNREAD_ITEM: "open_unread_document",
        MARK_AS_READ: "mark_as_read",
        OPEN_STARRED_ITEM: "open_starred_item",
        UNSTAR_ITEM: "unstar_item",
        UNDO_UNSTAR_ITEM: "undo_unstar_item",
        CLICK_STAR_OVERFLOW_MENU: "click_star_overflow_menu",
        CLICK_STAR_OVERFLOW_SHARE: "click_star_overflow_share",
        CLICK_STAR_OVERFLOW_UPLOAD: "click_star_overflow_upload",
        SELECT_TASKS_TAB: "select_tasks_tab",
        SELECT_TASKS_FILTER: "select_tasks_filter",
        OPEN_DOC_FROM_TASK: "open_doc_from_tasks",
        CLICK_DOC_TASKS_OVERFLOW_MENU: "click_doc_tasks_overflow_menu",
        CLICK_DOC_TASKS_OVERFLOW_SHARE: "click_doc_tasks_overflow_share",
        CLICK_INCOMING_ACTION: "click_incoming_action",
        CLICK_RIGHT_NAV_ITEM: "click_right_nav_item",
        CLICK_INCOMING_SHOW_READ: "click_incoming_show_read",
        CLICK_RECENT_ITEMS: "click_recent_item",
        OPEN_INCOMING: "open_incoming",
        OPEN_INCOMING_DOCUMENT: "open_incoming_document",
        OPEN_STARRED_DOCUMENT: "open_starred_item",
        OPEN_DOCUMENT: "open_document",
        CLICK_UPLOAD_FILES: "upload_files",
        CLICK_CREATE_PAPER_DOC: "create_paper_doc",
        CLICK_NEW_SHARED_FOLDER: "new_shared_folder",
        VIEW_UPLOADED_FILES: "view_uploaded_files"
    }, t.HomePrefetchTypes = {
        RETRIEVE_STARRED: "retrieve_starred",
        RECENTS_JSON: "recents_json",
        RETRIEVE_PAPER_RECENTS: "retrieve_paper_recents",
        RETRIEVE_UNREAD: "retrieve_unread",
        GET_SUGGESTED: "get_suggested"
    }, t.LoadingStates = {
        LOADING: "LOADING",
        SUCCESS: "SUCCESS",
        FAILURE: "FAILURE"
    }, t.FILE_RESOURCE_TYPE = "FILE", t.FOLDER_RESOURCE_TYPE = "FOLDER", t.PAPER_DOCUMENT_RESOURCE_TYPE = "PAPER_DOCUMENT", t.PAPER_FOLDER_RESOURCE_TYPE = "PAPER_FOLDER", t.EXTERNAL_RESOURCE_TYPE = "EXTERNAL", t.DisplayTypeToResourceType = {
        DOC: t.FILE_RESOURCE_TYPE,
        MSDOC: t.FILE_RESOURCE_TYPE,
        PDF: t.FILE_RESOURCE_TYPE,
        SPREADSHEET: t.FILE_RESOURCE_TYPE,
        FILE: t.FILE_RESOURCE_TYPE,
        FOLDER: t.FOLDER_RESOURCE_TYPE,
        SHARED_FOLDER: t.FOLDER_RESOURCE_TYPE,
        TEAM_FOLDER: t.FOLDER_RESOURCE_TYPE,
        SHARED_FOLDER_READ_ONLY: t.FOLDER_RESOURCE_TYPE,
        CDM_TEAM_MEMBER_FOLDER: t.FOLDER_RESOURCE_TYPE,
        TEAM_READ_ONLY: t.FOLDER_RESOURCE_TYPE,
        PAPER_DOCUMENT: t.PAPER_DOCUMENT_RESOURCE_TYPE,
        PAPER_FOLDER: t.PAPER_FOLDER_RESOURCE_TYPE,
        PAPER_PUBLIC_FOLDER: t.PAPER_FOLDER_RESOURCE_TYPE,
        PAPER_PROJECT: t.PAPER_FOLDER_RESOURCE_TYPE,
        EXTERNAL: t.EXTERNAL_RESOURCE_TYPE
    }, t.ExceptionTags = {
        UNREAD: "home_unread"
    };
    var r;
    (function(e) {
        e.AGGREGATION = "AGGREGATION", e.DOC = "DOC", e.MSDOC = "DOC", e.MSDOC_DEPRECATED = "MSDOC", e.PDF = "PDF", e.SPREADSHEET = "SPREADSHEET", e.FILE = "FILE", e.FOLDER = "FOLDER", e.SHARED_FOLDER = "SHARED_FOLDER", e.TEAM_FOLDER = "TEAM_FOLDER", e.PAPER_DOCUMENT = "PAPER_DOCUMENT", e.PAPER_FOLDER = "PAPER_FOLDER", e.PAPER_PUBLIC_FOLDER = "PAPER_PUBLIC_FOLDER", e.PAPER_PROJECT = "PAPER_PROJECT", e.EXTERNAL = "EXTERNAL", e.CDM_TEAM_MEMBER_FOLDER = "CDM_TEAM_MEMBER_FOLDER", e.TEAM_READ_ONLY = "TEAM_READ_ONLY", e.SHARED_FOLDER_READ_ONLY = "SHARED_FOLDER_READ_ONLY", e.RESTRICTED_FOLDER = "RESTRICTED_FOLDER", e.CAMERA_UPLOADS = "CAMERA_UPLOADS"
    })(r = t.DisplayTypes || (t.DisplayTypes = {})), t.PreviewableDisplayTypes = [r.DOC, r.MSDOC_DEPRECATED, r.PDF, r.SPREADSHEET, r.FILE], t.DisplayTypeToIconName = {
        AGGREGATION: "image-small",
        FOLDER: "folder-small",
        SHARED_FOLDER: "folder_shared-small",
        TEAM_FOLDER: "folder_team-small",
        CDM_TEAM_MEMBER_FOLDER: "folder_team_member-small",
        PAPER_DOCUMENT: "paper-small",
        PAPER_FOLDER: "folder-small",
        PAPER_PUBLIC_FOLDER: "folder_team-small",
        PAPER_PROJECT: "folder_project-small",
        TEAM_READ_ONLY: "folder_team_read_only-small",
        SHARED_FOLDER_READ_ONLY: "folder_shared_read_only-small",
        RESTRICTED_FOLDER: "folder_confidential-small",
        CAMERA_UPLOADS: "folder_camera_upload-small"
    };
    (function(e) {
        e.FILE = "file", e.PAPER_DOCUMENT = "paper_document"
    })(t.SuggestItemTypes || (t.SuggestItemTypes = {})), t.SUGGEST_GRID_FEATURE = "home_suggest_grid", t.SUGGEST_GRID_MAX_TILE_WIDTH = 200, t.SUGGEST_GRID_MIN_TILE_WIDTH = 150, t.SUGGEST_GRID_TILE_PADDING = 16, t.SUGGEST_GRID_LABEL_HEIGHT = 72
}), define("modules/clean/react/home/content_suggestions/grid_layout", ["require", "exports", "modules/clean/react/home/constants"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n.SUGGEST_GRID_MAX_TILE_WIDTH + n.SUGGEST_GRID_TILE_PADDING;
    t.getLayout = function(e) {
        var t = e - 2 * n.SUGGEST_GRID_TILE_PADDING - 2;
        if (t < 2 * n.SUGGEST_GRID_MAX_TILE_WIDTH) return {
            itemsToShow: 2,
            tileWidth: (t - n.SUGGEST_GRID_TILE_PADDING) / 2
        };
        var i = Math.max(1, Math.floor(t / r)),
            o = n.SUGGEST_GRID_MAX_TILE_WIDTH;
        if (t % r > 1) {
            var a = t / (i + 1) - n.SUGGEST_GRID_TILE_PADDING;
            a >= n.SUGGEST_GRID_MIN_TILE_WIDTH && (i++, o = a)
        }
        return {
            itemsToShow: i,
            tileWidth: o
        }
    }
}), define("modules/clean/react/home/content_suggestions/home_suggest_frame", ["require", "exports", "tslib", "external/classnames", "react", "modules/core/i18n", "modules/clean/react/home/section_header", "modules/clean/react/title_bubble"], function(e, t, n, r, i, o, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), i = n.__importDefault(i), t.SuggestInfoIcon = function(e) {
        var t = e.isSectionDemoted;
        return i.default.createElement(s.TitleBubble, {
            position: s.TitleBubble.POSITIONS.RIGHT,
            content: t ? o._("Prioritized items from your recent activity") : o._("Quick access to files you’ve been working on.")
        }, i.default.createElement("div", {
            className: "info-icon-svg"
        }, i.default.createElement("svg", {
            width: "24",
            height: "24",
            xmlns: "http://www.w3.org/2000/svg"
        }, i.default.createElement("g", {
            fill: "none",
            fillRule: "evenodd"
        }, i.default.createElement("path", {
            d: "M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-1.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z",
            fill: "#B4BBC2"
        }), i.default.createElement("path", {
            stroke: "#B4BBC2",
            d: "M11.5 12h1v3.5h-1zM11.5 8.5h1v1h-1z"
        })))))
    }, t.SuggestHeader = function(e) {
        var n = e.isHiddenByUser,
            r = e.buttonAction;
        return i.default.createElement(a.SectionHeader, {
            title: o._("Suggested for you", {
                comment: "Home's suggested section"
            }),
            ueName: "suggest",
            buttonText: n ? o._("Show") : o._("Hide"),
            buttonAction: r,
            infoIcon: i.default.createElement(t.SuggestInfoIcon, null)
        })
    }, t.SuggestFrame = function(e) {
        var t = e.isHiddenByUser,
            n = e.children;
        return i.default.createElement("li", {
            className: r.default({
                "home-access-section": !0,
                "home-access-section-suggest-nonempty": !t
            })
        }, i.default.createElement("div", {
            className: "suggest"
        }, n))
    }
}), define("modules/clean/react/home/content_suggestions/loading", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/react/home/content_suggestions/grid_layout", "modules/clean/react/home/content_suggestions/home_suggest_frame"], function(e, t, n, r, i, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), i = n.__importDefault(i);
    var s = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.isHiddenByUser,
                r = e.isSectionDemoted;
            return i.default.createElement(a.SuggestFrame, {
                isHiddenByUser: t
            }, r ? null : i.default.createElement(a.SuggestHeader, {
                isHiddenByUser: t
            }), i.default.createElement(c, n.__assign({}, this.props)))
        }, t
    })(i.default.PureComponent);
    t.SuggestedLoading = s;
    var c = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.renderLoadingTile = function(e) {
            return i.default.createElement("div", {
                className: r.default(["tile", "home-suggest-preview-tile"])
            }, i.default.createElement("div", {
                className: "tile__loading-container",
                style: {
                    width: e + "px"
                }
            }, i.default.createElement("div", {
                className: "tile__loading-thumbnail",
                style: {
                    width: e + "px"
                }
            })), i.default.createElement("div", {
                className: "loading-tile-label"
            }, i.default.createElement("div", {
                className: "loading-tile-label__detail-text"
            }), i.default.createElement("div", {
                className: "loading-tile-label__detail-subheader"
            })))
        }, t.prototype.render = function() {
            for (var e = this.props, t = e.containerWidth, n = e.isHiddenByUser, a = o.getLayout(t), s = a.itemsToShow, c = a.tileWidth, l = {
                    "home-access-section__content": !0,
                    "home__suggest-items": !0
                }, u = [], d = 0; d < s; d++) u.push(this.renderLoadingTile(c));
            return n ? null : i.default.createElement("div", {
                className: r.default(l)
            }, i.default.createElement("div", {
                className: "home-tile__container"
            }, u))
        }, t
    })(i.default.PureComponent);
    t.SuggestedLoadingInner = c
}), define("modules/clean/react/home/post_tti/api", ["require", "exports", "tslib", "react", "modules/clean/web_timing_logger", "modules/clean/react/async/loadable"], function(e, t, n, r, i, o) {
    "use strict";

    function a() {
        return n.__awaiter(this, void 0, Promise, function() {
            return n.__generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, i.waitForTTI()];
                    case 1:
                        return t.sent(), [4, new Promise(function(t, n) {
                            e(["modules/clean/react/home/post_tti/interface"], t, n)
                        }).then(n.__importStar)];
                    case 2:
                        return [2, t.sent()]
                }
            })
        })
    }

    function s(e) {
        var t = this,
            r = e.getPostTTIRenderer,
            i = e.preTTIRenderer;
        return o.Loadable({
            loader: function() {
                return n.__awaiter(t, void 0, void 0, function() {
                    var e;
                    return n.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = r, [4, a()];
                            case 1:
                                return [2, e.apply(void 0, [t.sent()])]
                        }
                    })
                })
            },
            loading: i
        })
    }

    function c() {
        return n.__awaiter(this, void 0, void 0, function() {
            var e, t;
            return n.__generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, a()];
                    case 1:
                        return e = n.sent(), t = {
                            imports: e
                        }, [4, e.getPostTTIProps()];
                    case 2:
                        return [2, (t.props = n.sent(), t)]
                }
            })
        })
    }

    function l(e) {
        var t = this,
            i = e.getPostTTIRenderer,
            a = e.preTTIRenderer;
        return o.Loadable({
            loader: function() {
                return n.__awaiter(t, void 0, void 0, function() {
                    var e;
                    return n.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, c()];
                            case 1:
                                return e = t.sent(), [4, i(e)];
                            case 2:
                                return [2, t.sent() || function() {
                                    return r.default.createElement(u, null)
                                }]
                        }
                    })
                })
            },
            loading: a
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), t.waitForHomeTTI = a, t.PostHomeTTIComponent = s, t.waitForHomeTTIWithProps = c;
    var u = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.render = function() {
            return null
        }, t
    })(r.default.PureComponent);
    t.PostHomeTTIComponentWithProps = l
}), define("modules/clean/react/home/recents/actions/error_actions", ["require", "exports", "tslib", "external/lodash", "modules/clean/react/home/recents/recent_activity_constants", "modules/clean/react/home/recents/recent_activity_dispatcher", "modules/core/exception", "modules/core/i18n", "modules/core/notify"], function(e, t, n, r, i, o, a, s, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), a = n.__importStar(a);
    var l = (function() {
        function e(e) {
            var t = this;
            this._flushQueues = function() {
                t._rafId = null;
                var e = t._recentActivityQueue;
                t._recentActivityQueue = [], e.length && t._dispatcher.dispatch({
                    type: i.RAW_RECENT_ACTIVITY_PARSE_ERROR,
                    errors: e
                });
                var n = t._relatedActivityQueue;
                t._relatedActivityQueue = [], n.length && t._dispatcher.dispatch({
                    type: i.RAW_RELATED_ACTIVITY_PARSE_ERROR,
                    errors: n
                })
            }, this._notify = r.throttle(function() {
                var e = s._("Sorry, we were unable to show some recent items. The team has been notified");
                c.Notify.error(e)
            }, 500, {
                trailing: !1
            }), this._dispatcher = e, this._recentActivityQueue = [], this._relatedActivityQueue = [], this._rafId = null
        }
        return e.prototype.recentActivityParseError = function(e, t) {
            a.reportException({
                err: t
            }), this._notify(), this._enqueueError(this._recentActivityQueue, e, t)
        }, e.prototype.relatedActivityParseError = function(e, t) {
            a.reportException({
                err: t
            }), this._notify(), this._enqueueError(this._relatedActivityQueue, e, t)
        }, e.prototype._enqueueError = function(e, t, n) {
            e.push({
                activityKey: t,
                error: n
            }), this._rafId || (this._rafId = window.requestAnimationFrame(this._flushQueues))
        }, e
    })();
    t.ErrorActions = l, t.errorActions = new l(o.recentActivityDispatcher)
}), define("modules/clean/react/home/recents/actions/federated_recent_activity_actions", ["require", "exports", "tslib", "modules/core/i18n", "modules/core/browser", "modules/clean/react/modal", "modules/clean/react/home/recents/recent_activity_constants", "modules/clean/react/home/recents/recent_activity_dispatcher", "modules/clean/react/home/recents/recent_activity_federated_model", "modules/clean/react/home/recents/stores/recent_activity_store", "modules/core/exception", "modules/core/notify", "modules/clean/react/home/recents/utils/events", "modules/clean/react/home/post_tti/api"], function(e, t, n, r, i, o, a, s, c, l, u, d, m, _) {
    "use strict";

    function h(e, t, n) {
        e ? i.open_tab(e) : u.reportStack("Cannot open tab to preform the action " + t, {
            severity: u.SEVERITY.NONCRITICAL,
            exc_extra: {
                paperRecentItem: n.paperRecentItem
            }
        })
    }

    function p(e, t, n) {
        m.logFederatedItemEvent(e, n.cellView, t)
    }

    function E(e, t) {
        p(a.ActionType.PAPER_SHARE, e, t), h(c.getPaperShareUrl(e), a.ActionType.PAPER_SHARE, e)
    }

    function f(e, t) {
        p(a.ActionType.PAPER_OPEN, e, t), h(e.getUrl(), a.ActionType.PAPER_OPEN, e)
    }

    function T(e, t) {
        s.recentActivityDispatcher.dispatch({
            type: e,
            activityKey: t
        })
    }

    function I(e, t, i) {
        var s = this,
            u = e.getActivityKey();
        if (l.getRecentActivityStore().canArchiveActivityKey(u)) {
            var m = e.getActivityKey();
            o.SimpleModal.show({
                title_text: r._("Archive document?"),
                body_html: r._("Do you want to archive this document?"),
                confirm_text: r._("Archive"),
                cancel_text: r._("Cancel"),
                autoclose: !0,
                confirm_callback: function() {
                    return n.__awaiter(s, void 0, void 0, function() {
                        var o, s;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    p(a.ActionType.PAPER_ARCHIVE, e, i), T(a.ARCHIVE_PAPER_DOCUMENT_PENDING, m), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 4, , 5]), [4, _.waitForHomeTTI()];
                                case 2:
                                    return [4, n.sent().archivePaperResources(t, [e.paperRecentItem])];
                                case 3:
                                    return o = n.sent(), o.some(function(t) {
                                        return c.equalsPaperRecentItem(e, t)
                                    }) ? (T(a.ARCHIVE_PAPER_DOCUMENT_COMMIT, m), d.Notify.success(r._("The document was archived."))) : T(a.ARCHIVE_PAPER_DOCUMENT_ROLLBACK, m), [3, 5];
                                case 4:
                                    return s = n.sent(), T(a.ARCHIVE_PAPER_DOCUMENT_ROLLBACK, m), [3, 5];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }
            })
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = n.__importStar(i), t.shareItem = E, t.previewItem = f, t.promptAndArchiveItem = I
}), define("modules/clean/react/home/recents/actions/recent_activity_action_permissions", ["require", "exports", "modules/clean/react/home/recents/models/utils"], function(e, t, n) {
    "use strict";

    function r(e) {
        return {
            archive: !1,
            comment: !1,
            delete: !1,
            download: !1,
            open: e,
            share: !1,
            versions: !1
        }
    }

    function i(e, t) {
        if (e.federatedRecentItem) return {
            archive: e.federatedRecentItem.isArchiveable(),
            comment: !1,
            delete: !1,
            download: !1,
            open: !1,
            share: e.federatedRecentItem.isShareable(),
            versions: !1
        };
        var i = t[0],
            o = 1 === t.length;
        if (n.isShareRecentItem(e)) return r(!!e.scl);
        var a = o && !i.isDir,
            s = o && !i.isCloudDoc,
            c = o && i.isVersionable;
        return {
            archive: !1,
            comment: a && s,
            delete: t.every(function(e) {
                return !e.isReadOnly
            }),
            download: o && s,
            open: !(!o || !i.canOpen),
            share: o,
            versions: a && c
        }
    }

    function o(e) {
        for (var t in e)
            if ("share" !== t && e[t]) return !0;
        return !1
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getRecentActivityItemViewPermissions = i, t.shouldRenderActionsMenu = o
}), define("modules/clean/react/home/recents/actions/recent_activity_actions", ["require", "exports", "tslib", "external/lodash", "modules/clean/react/home/recents/recent_activity_constants", "modules/clean/react/home/recents/recent_activity_dispatcher", "modules/clean/react/home/recents/stores/recent_activity_store", "modules/clean/react/home/util/navigation", "modules/clean/react/home/post_tti/api", "modules/clean/react/home/recents/actions/federated_recent_activity_actions", "modules/core/exception"], function(e, t, n, r, i, o, a, s, c, l, u) {
    "use strict";

    function d(e, t, r, i) {
        return n.__awaiter(this, void 0, void 0, function() {
            return n.__generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return e.federatedRecentItem ? (l.shareItem(e.federatedRecentItem, r), [3, 4]) : [3, 1];
                    case 1:
                        return [4, c.waitForHomeTTI()];
                    case 2:
                        return [4, n.sent().shareFile(t[0].id, r, i)];
                    case 3:
                        n.sent(), n.label = 4;
                    case 4:
                        return [2]
                }
            })
        })
    }

    function m(e, t, n, r) {
        if (e.federatedRecentItem) l.previewItem(e.federatedRecentItem, n);
        else if (1 === e.attachmentIds.length) {
            var i = s.isMetaKeyPressed(t.event);
            c.waitForHomeTTI().then(function(r) {
                return (0, r.previewFileSyncRecentItem)(e, i, t, n)
            })
        } else {
            var o = t.index,
                a = t.shouldUseEntityUri;
            u.reportStack("To preview, file sync items must have 1 attachment id", {
                severity: u.SEVERITY.NONCRITICAL,
                exc_extra: {
                    recentItem: e,
                    index: o,
                    shouldUseEntityUri: a
                }
            })
        }
    }

    function _(e, t, r) {
        return n.__awaiter(this, void 0, void 0, function() {
            return n.__generator(this, function(n) {
                return c.waitForHomeTTIWithProps().then(function(n) {
                    var i = n.imports,
                        o = n.props;
                    i.deleteRecentItem(e, t, r, o)
                }), [2]
            })
        })
    }

    function h(e, t) {
        e.federatedRecentItem ? l.promptAndArchiveItem(e.federatedRecentItem, e.viewingUserId, t) : u.reportStack("Archiving is not supported", {
            severity: u.SEVERITY.NONCRITICAL,
            exc_extra: {
                recentItem: e
            }
        })
    }

    function p() {
        var e = a.getRecentActivityStore().getFileSyncCursor();
        return e && c.waitForHomeTTI().then(function(t) {
            return (0, t.loadRecentItems)(e)
        }), !!e
    }

    function E() {
        return !!a.getRecentActivityStore().getFileSyncCursor()
    }

    function f(e, t, i) {
        return void 0 === i && (i = r.noop), n.__awaiter(this, void 0, void 0, function() {
            return n.__generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, c.waitForHomeTTI()];
                    case 1:
                        return [4, n.sent().openFile(e, t)];
                    case 2:
                        return n.sent(), i(), [2]
                }
            })
        })
    }

    function T(e, t) {
        return n.__awaiter(this, void 0, void 0, function() {
            return n.__generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, c.waitForHomeTTI()];
                    case 1:
                        return n.sent().downloadFiles(e, t), [2]
                }
            })
        })
    }

    function I(e, t, r) {
        return n.__awaiter(this, void 0, void 0, function() {
            var i;
            return n.__generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return i = s.getNavigationMethod(t), [4, c.waitForHomeTTI()];
                    case 1:
                        return n.sent().openVersions(i, e, r), [2]
                }
            })
        })
    }

    function g() {
        return n.__awaiter(this, void 0, void 0, function() {
            var e, t, r;
            return n.__generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return a.getRecentActivityStore().didReceiveItemsFromAllStreams() ? (o.recentActivityDispatcher.dispatch({
                            type: i.REFRESH_RECENT_ACTIVITIES
                        }), [4, c.waitForHomeTTI()]) : [3, 3];
                    case 1:
                        return e = n.sent(), t = e.loadRecentItems, r = e.loadPaperRecentItems, [4, Promise.all([t(), r(!1)])];
                    case 2:
                        n.sent(), n.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), t.shareRecentItem = d, t.previewRecentItem = m, t.deleteRecentItem = _, t.archiveRecentItem = h, t.loadNextPage = p, t.hasCursor = E, t.openFile = f, t.downloadFiles = T, t.openVersions = I, t.refreshRecentItems = g
}), define("modules/clean/react/home/recents/components/pending_attachment_list_view", ["require", "exports", "tslib", "external/classnames", "react", "external/lodash"], function(e, t, n, r, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), i = n.__importDefault(i), o = n.__importStar(o);
    var a = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e = this.props.count,
                t = o.times(Math.min(e, 4), function() {
                    return i.default.createElement("li", {
                        className: "attachment-item attachment-item--placeholder"
                    })
                }),
                n = {
                    "attachment-list": !0,
                    "attachment-list--is-pending": !0,
                    "attachment-list--standalone": 1 === e
                };
            return i.default.createElement("div", {
                className: "recents-item__attachments"
            }, i.default.createElement("ul", {
                className: r.default(n)
            }, t))
        }, t
    })(i.default.Component);
    t.PendingAttachmentListView = a
}), define("modules/clean/react/home/recents/components/recent_activity_container", ["require", "exports", "tslib", "react", "react-dom", "external/classnames", "modules/core/i18n", "modules/clean/react/home/recents/actions/recent_activity_actions", "modules/clean/react/home/section_header", "modules/clean/react/home/util/show_hide_link", "modules/clean/react/home/recents/stores/recent_activity_store", "modules/clean/react/home/store", "modules/clean/react/home/util/logging/timing_component", "modules/clean/react/home/util/logging/timing_logger", "modules/clean/react/home/util/logging/activity_logger", "modules/clean/react/home/recents/components/recent_activity_item_container", "modules/clean/react/home/constants", "modules/clean/react/home/post_tti/api", "modules/clean/react/home/actions", "modules/clean/react/home/util/post_tti_components"], function(e, t, n, r, i, o, a, s, c, l, u, d, m, _, h, p, E, f, T, I) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), i = n.__importDefault(i), o = n.__importDefault(o);
    var g = (function(e) {
        function t(t) {
            var r = e.call(this, t) || this;
            return r.onShouldLoadMore = function() {
                var e = u.getRecentActivityStore();
                if (!r.state.isPending && r.state.showAll && !e.didTruncateRecentItems() && e.didReceiveItemsFromAllStreams()) {
                    var t = e.getRecentItemsAndFilterData(),
                        n = t.items,
                        i = t.availableFilters;
                    n.length > r.state.items.length ? r.setState({
                        items: n,
                        availableFilters: i
                    }) : s.loadNextPage() && r.setState({
                        isPending: !0
                    })
                }
            }, r.onChangeRecentsVisibility = function() {
                var e = !r.props.isHiddenByUser;
                T.HomeActions.setSectionVisibility(d.getUserId(), {
                    ".tag": "recents"
                }, !e), h.homeActivityLogger.logShowHideSection(E.HomeSections.RECENTS, e)
            }, r.handleVisibilityChange = function() {
                "visible" === document.visibilityState && s.refreshRecentItems()
            }, r.onStoreUpdate = function() {
                return r.setState(r.getStateFromStore())
            }, r.onShowAll = function() {
                r.setState({
                    showAll: !0
                });
                var e = i.default.findDOMNode(r.refs.lastUnhiddenActivity);
                if (e) {
                    var t = e.querySelector("a");
                    t && t.focus()
                }
            }, r.removeStoreListeners = u.getRecentActivityStore().addListener(r.onStoreUpdate), r.state = n.__assign({}, r.getStateFromStore(), {
                isUnityAvailable: !1,
                showAll: !1
            }), r
        }
        return n.__extends(t, e), t.prototype.componentDidMount = function() {
            var e = this;
            this.props.isHiddenByUser && _.homeTimingLogger.logSkippedSection(E.HomeSections.RECENTS), f.waitForHomeTTI().then(function(t) {
                return n.__awaiter(e, void 0, void 0, function() {
                    return n.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t.recentActivityContainerComponentDidMount(this.onShouldLoadMore), [4, t.getUnityFeatures()];
                            case 1:
                                return e.sent() && this.setState({
                                    isUnityAvailable: !0
                                }), [2]
                        }
                    })
                })
            }), !this.state.items.length && u.getRecentActivityStore().didReceiveItemsFromAllStreams() && this.setState({
                isPending: !1
            }), document.addEventListener("visibilitychange", this.handleVisibilityChange, !1)
        }, t.prototype.componentWillUnmount = function() {
            document.removeEventListener("visibilitychange", this.handleVisibilityChange), this.removeStoreListeners()
        }, t.prototype.getStateFromStore = function() {
            var e = u.getRecentActivityStore(),
                t = !e.didReceiveItemsFromAllStreams(),
                n = e.getRecentItemsAndFilterData(),
                r = n.items,
                i = n.availableFilters,
                o = n.activeFilters;
            if (!t) {
                if (_.homeTimingLogger.logTTData(E.HomeSections.RECENTS)) {
                    var a = r.length;
                    a && h.homeActivityLogger.logRecentsShown(a, !d.getHomeStore().getSectionVisibility()[E.HomeSections.RECENTS])
                }
            }
            return {
                isPending: t,
                items: r,
                availableFilters: i,
                activeFilters: o
            }
        }, t.prototype.renderLoadingView = function() {
            return r.default.createElement("div", {
                className: "recents-loading-view",
                key: "loading"
            }, r.default.createElement("div", {
                className: "maestro-loading-spinner recents-loading-indicator"
            }))
        }, t.prototype.renderItems = function() {
            var e = this.props.now,
                t = this.state,
                n = t.items,
                i = t.showAll,
                a = t.isPending,
                s = t.isUnityAvailable,
                c = {
                    isUnityAvailable: s,
                    now: e,
                    user: d.getUser()
                },
                l = i ? n : n.slice(0, 10);
            return r.default.createElement("ul", {
                className: "recents-view__sections",
                key: "sections"
            }, r.default.createElement("li", {
                className: "recents-section"
            }, r.default.createElement("ul", {
                className: o.default({
                    "recents-list": !0,
                    "recents-list--is-pending": a && 0 === l.length
                })
            }, l.map(function(e, t) {
                return r.default.createElement(p.RecentActivityItemContainer, {
                    key: e.id,
                    recentItem: e,
                    renderingInfo: c,
                    ref: 9 === t ? "lastUnhiddenActivity" : void 0
                })
            }))))
        }, t.prototype.renderShowMoreLink = function() {
            var e = this.state,
                t = e.items,
                n = e.showAll,
                i = Math.max(t.length - 10, 0);
            return n || !s.hasCursor() && i <= 0 ? null : r.default.createElement(l.ShowHideLink, {
                key: "show_more",
                onClick: this.onShowAll,
                isExpanded: !1,
                hiddenItemCount: i,
                canLoadMore: !0
            })
        }, t.prototype.renderContent = function() {
            var e = this.state,
                t = e.isPending;
            return e.items.length ? [this.renderItems(), t ? this.renderLoadingView() : null, this.renderShowMoreLink()] : t ? [this.renderLoadingView(), this.renderItems()] : r.default.createElement("div", {
                className: "recents-empty_state",
                key: "empty_state"
            }, r.default.createElement("div", {
                className: "recents-empty_state_heading"
            }, a._("Items you recently viewed show up here.") + " ", r.default.createElement("a", {
                href: "/help/desktop-web/recents-overview",
                target: "_blank",
                rel: "noopener noreferrer"
            }, a._("Learn more"))))
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.canRenderItems,
                n = e.isHiddenByUser,
                i = e.suggestSection;
            if (!t) return null;
            var s = this.state,
                l = s.isPending,
                u = s.items,
                m = s.availableFilters,
                _ = s.activeFilters,
                h = o.default({
                    "home-recents-section__container": !0,
                    "recents-view": !0,
                    "recents-view--is-pending": l && 0 === u.length
                }),
                p = a._("Recent"),
                E = p;
            return d.getHomeStore().getPreTTIProps().enableRecentFilters && (E = r.default.createElement(I.PostTTIRecentFiltersMenu, {
                title: p,
                availableFilters: m,
                activeFilters: _
            })), r.default.createElement("li", {
                className: "home-access-section"
            }, r.default.createElement("span", {
                className: "home-recents-section"
            }, r.default.createElement(c.SectionHeader, {
                title: E,
                ueName: "recents",
                buttonText: n ? a._("Show") : a._("Hide"),
                buttonAction: this.onChangeRecentsVisibility
            }), r.default.createElement("div", {
                className: "home-access-section__content"
            }, n ? r.default.createElement("div", {
                className: "home-access__recents-hidden-text"
            }, a._("Your recently viewed files are hidden"), " · ", r.default.createElement("button", {
                className: "button-as-link",
                onClick: this.onChangeRecentsVisibility
            }, a._("Show"))) : r.default.createElement("div", {
                className: h
            }, i, this.renderContent()))))
        }, t.displayName = "RecentActivityContainer", t
    })(r.default.PureComponent);
    t.RecentActivityContainerInner = g, t.RecentActivityContainer = m.timingComponent(g, E.HomeSections.RECENTS)
}), define("modules/clean/react/home/recents/components/recent_activity_item_actions_view", ["require", "exports", "tslib", "external/classnames", "react", "modules/core/i18n", "external/lodash", "modules/clean/react/home/recents/recent_activity_rendering_models", "modules/clean/react/home/recents/actions/recent_activity_action_permissions", "spectrum/overflow_button", "spectrum/popover"], function(e, t, n, r, i, o, a, s, c, l, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), i = n.__importDefault(i);
    var d = function(e) {
            e.stopPropagation(), e.preventDefault()
        },
        m = function(e, t) {
            e(t)
        },
        _ = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.onOpen = function(e) {
                    t.getHandler(e).handleOpen()
                }, t.onDelete = function(e) {
                    t.getHandler(e).handleDelete()
                }, t.onArchive = function(e) {
                    t.getHandler(e).handleArchive()
                }, t.onShare = function(e) {
                    t.getHandler(e).handleShare()
                }, t.onDownload = function(e) {
                    t.getHandler(e).handleDownload()
                }, t.onComment = function(e) {
                    t.getHandler(e).handleComment(e)
                }, t.onVersions = function(e) {
                    t.getHandler(e).handleVersions(e)
                }, t
            }
            return n.__extends(t, e), t.prototype.getHandler = function(e) {
                return e.preventDefault(), this.props.handler
            }, t.prototype.createMenuItem = function(e, t, n, r) {
                return e ? i.default.createElement(u.PopoverContentItem, {
                    className: "recents-actions-list__item recents-actions-list__item--" + t,
                    key: t,
                    value: r
                }, n) : null
            }, t.prototype.renderMoreActionsList = function() {
                var e = this.props,
                    t = e.permissions,
                    n = e.renderingInfo,
                    r = e.attachmentCount,
                    i = t.open,
                    s = t.share,
                    c = t.download,
                    l = t.comment,
                    u = t.archive,
                    d = t.versions,
                    m = n.isUnityAvailable;
                return a.compact([this.createMenuItem(i && m, "open", o._("Open"), this.onOpen), this.createMenuItem(s, "share", o._("Share"), this.onShare), this.createMenuItem(c, "download", o._("Download"), this.onDownload), this.createMenuItem(l, "comment", o._("Comment"), this.onComment), this.createMenuItem(t.delete, "delete", r > 1 ? o._("Delete all…") : o._("Delete…"), this.onDelete), this.createMenuItem(u, "archive", o._("Archive"), this.onArchive), this.createMenuItem(d, "versions", o._("Version history"), this.onVersions)])
            }, t.prototype.renderMoreActionsInnerButton = function() {
                var e = r.default({
                    "recents-item__actions-button": !0,
                    "button-secondary": !0,
                    disabled: this.props.disableActions
                });
                return i.default.createElement(l.OverflowButton, {
                    tagName: "span",
                    className: e,
                    "aria-label": o._("More Actions")
                })
            }, t.prototype.renderMoreActionsButton = function() {
                return this.props.disableActions ? this.renderMoreActionsInnerButton() : i.default.createElement("div", {
                    onClick: d
                }, i.default.createElement(u.Popover, {
                    onSelection: m
                }, i.default.createElement(u.PopoverTrigger, null, this.renderMoreActionsInnerButton()), i.default.createElement(u.PopoverContent, {
                    attachment: "right"
                }, this.renderMoreActionsList())))
            }, t.prototype.render = function() {
                var e, t = this.props.permissions;
                if (c.shouldRenderActionsMenu(t)) {
                    var n = this.props,
                        o = n.disableActions,
                        a = n.isShareItem,
                        s = r.default((e = {}, e["recents-item__more-actions"] = !0, e["recents-item__more-actions--disabled"] = o, e));
                    return a ? i.default.createElement("div", {
                        className: s
                    }) : i.default.createElement("div", {
                        className: s
                    }, i.default.createElement("div", {
                        className: "recents-item__more-actions-button recents-item__action-button",
                        tabIndex: -1
                    }, this.renderMoreActionsButton()))
                }
                return null
            }, t.defaultProps = {
                handler: s.getStubRecentActivityItemContainerHandler(),
                tooltipHandler: s.getStubRecentActivityTooltipHandler(),
                attachmentCount: 1,
                disableActions: !1
            }, t
        })(i.default.PureComponent);
    t.RecentActivityItemActionsView = _
}), define("modules/clean/react/home/recents/components/recent_activity_item_container", ["require", "exports", "tslib", "external/lodash", "react", "modules/core/exception", "modules/clean/react/home/recents/recent_activity_constants", "modules/clean/react/home/recents/actions/recent_activity_actions", "modules/clean/react/home/recents/components/recent_activity_item_view", "modules/clean/react/home/recents/utils/events", "modules/clean/react/home/recents/stores/attachment_store", "modules/clean/react/home/post_tti/api"], function(e, t, n, r, i, o, a, s, c, l, u, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), i = n.__importDefault(i);
    var m = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.onAttachmentStoreChange = function() {
                n.setState({
                    attachments: u.getAttachmentStore().getByIds(n.getRecentItem().attachmentIds)
                })
            }, n.handleArchive = function() {
                return s.archiveRecentItem(n.getRecentItem(), n.getLogData())
            }, n.handleComment = function(e) {
                var t = n.getSingleAttachment("handleComment only supports a single attachment"),
                    r = Math.max(0, n.state.attachments.indexOf(t));
                n.previewOrOpenFiles({
                    event: e,
                    index: r,
                    isCommentAction: !0
                })
            }, n.handleDelete = function() {
                s.deleteRecentItem(n.getRecentItem(), n.state.attachments, n.getLogData())
            }, n.handleDownload = function() {
                var e = n.getSingleAttachment("handleDownload only supports a single attachment");
                s.downloadFiles([e.id], n.getLogData())
            }, n.handleHeaderClick = function() {
                var e = n.state,
                    t = e.isCollapsed,
                    r = e.attachments;
                if (n.getRecentItem().uniqueFilterTypes.length > 1) {
                    var i = t ? a.ActionType.UNCOLLAPSE : a.ActionType.COLLAPSE;
                    l.logEvent(i, n, n.state.attachments, r.length)
                }
                n.setState({
                    isCollapsed: !t
                })
            }, n.handleOpen = function() {
                var e = n.getSingleAttachment("handleOpen only supports a single attachment");
                s.openFile(e.id, n.getLogData())
            }, n.handlePathClick = function(e) {
                e.preventDefault(), e.stopPropagation();
                var t = n.getAttachmentFqPaths(),
                    r = n.props.recentItem,
                    i = r.attachmentIds,
                    o = r.viewingUserId,
                    s = e.currentTarget.href;
                d.waitForHomeTTI().then(function(e) {
                    var r = e.logOpenPathUrl,
                        c = e.openUrl;
                    r(o, t, i.length, n), c(s, a.ActionType.OPEN_PATH, i, n.getLogData())
                })
            }, n.handlePreview = function(e) {
                n.previewOrOpenFiles({
                    event: e
                })
            }, n.handleShare = function(e) {
                s.shareRecentItem(n.getRecentItem(), n.state.attachments, n.getLogData(), e)
            }, n.handleVersions = function(e) {
                var t = n.getSingleAttachment("handleVersions only supports a single attachment");
                s.openVersions(t.id, e, n.getLogData())
            }, n.removeStoreListeners = null, n.state = {
                attachments: [],
                isCollapsed: !0
            }, n
        }
        return n.__extends(t, e), t.prototype.getRecentItem = function() {
            return this.props.recentItem
        }, t.prototype.getLogData = function() {
            return {
                totalCount: this.props.recentItem.attachmentIds.length,
                cellView: this
            }
        }, t.prototype.getAttachmentFqPaths = function() {
            return r.compact(r.map(this.state.attachments, "fqPath"))
        }, t.prototype.getSingleAttachment = function(e) {
            return e && o.assert(1 === this.state.attachments.length, e), this.state.attachments[0]
        }, t.prototype.previewOrOpenFiles = function(e) {
            var t = this.props.recentItem;
            s.previewRecentItem(t, n.__assign({}, e), this.getLogData())
        }, t.prototype.componentWillMount = function() {
            this.removeStoreListeners = u.getAttachmentStore().addListener(this.onAttachmentStoreChange), this.onAttachmentStoreChange()
        }, t.prototype.componentWillUnmount = function() {
            this.removeStoreListeners && this.removeStoreListeners()
        }, t.prototype.render = function() {
            return i.default.createElement(c.RecentActivityItemView, {
                recentItem: this.getRecentItem(),
                attachments: this.state.attachments,
                handler: this,
                isCollapsed: this.state.isCollapsed,
                renderingInfo: this.props.renderingInfo
            })
        }, t.displayName = "RecentActivityItemContainer", t
    })(i.default.PureComponent);
    t.RecentActivityItemContainer = m
}), define("modules/clean/react/home/recents/components/recent_activity_item_header_view", ["require", "exports", "tslib", "external/classnames", "react", "spectrum/icon_arrow", "modules/clean/accessibility/utils", "modules/clean/react/helpers", "modules/clean/react/home/constants", "modules/clean/react/home/util/resource_icon", "modules/core/i18n", "modules/clean/react/home/recents/recent_activity_view_helper"], function(e, t, n, r, i, o, a, s, c, l, u, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), i = n.__importDefault(i), s = n.__importStar(s);
    var m = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.onClick = function(e) {
                e.stopPropagation(), e.preventDefault(), t.props.handleClick(e)
            }, t
        }
        return n.__extends(t, e), t.prototype.getHeaderProps = function() {
            return this.props.header
        }, t.prototype.renderIcon = function() {
            var e = this.getHeaderProps(),
                t = e.isAggregation,
                n = e.displayType,
                r = e.fileName;
            return i.default.createElement("div", {
                className: "recents-item__icon"
            }, i.default.createElement("span", {
                className: "file-icon file-icon--sprite file-icon--spectrum"
            }, i.default.createElement(l.HomeResourceIcon, {
                className: "file-icon__img",
                displayType: t ? c.DisplayTypes.AGGREGATION : n || c.DisplayTypes.FILE,
                fileName: r || ""
            })))
        }, t.prototype.renderHeading = function() {
            var e = this.getHeaderProps(),
                t = e.fileName,
                r = e.heading,
                o = this.getHeaderProps().displayType;
            return i.default.createElement("a", n.__assign({
                ref: "heading",
                className: "recents-item__heading",
                "aria-label": r ? r.toString() : t || void 0
            }, a.accessibleTriggerProps(this.props.handleClick, o === c.DisplayTypes.SHARED_FOLDER ? "link" : "button")), r)
        }, t.prototype.renderSubheading = function() {
            var e = this.getHeaderProps().subheading;
            return e ? i.default.createElement("div", {
                ref: "subheading",
                className: "recents-item__subheading",
                tabIndex: -1
            }, e) : null
        }, t.prototype.renderDetails = function() {
            return i.default.createElement("div", {
                ref: "recentsItemDetails",
                className: "recents-item__details"
            }, i.default.createElement("div", {
                className: "recents-item__heading-group"
            }, this.renderHeading(), this.renderStar()), this.renderSubheading())
        }, t.prototype.renderStar = function() {
            var e = this.getHeaderProps(),
                t = e.disableStar,
                n = e.star;
            return t ? null : n ? i.default.createElement("div", {
                className: "recents-item__star"
            }, n) : null
        }, t.prototype.renderActions = function() {
            var e, t = this.props,
                n = t.children,
                o = t.isShareItem,
                a = t.tooltipShown;
            if (o || 0 === i.default.Children.count(n)) return null;
            var s = r.default((e = {}, e["recents-item__actions-inner"] = !0, e["recents-item__actions-inner--tooltip-shown"] = a, e));
            return i.default.createElement("div", {
                ref: "actions",
                className: "recents-item__actions"
            }, i.default.createElement("div", {
                className: s
            }, n))
        }, t.prototype.renderCarat = function() {
            var e = this.getHeaderProps(),
                t = e.isAggregation,
                s = e.isCollapsed;
            if (!t) return null;
            var c = r.default({
                    "recents-item__carat": !0,
                    "recents-item__carat--expanded": !s
                }),
                l = s ? u._("Expand") : u._("Collapse");
            return i.default.createElement("div", n.__assign({
                className: c,
                role: "button"
            }, a.accessibleTriggerProps(this.props.handleClick), {
                "aria-label": l
            }), i.default.createElement(o.IconArrow, {
                name: "right"
            }))
        }, t.prototype.shouldComponentUpdate = function(e, t) {
            return s.compareStateAndProps(e, t)
        }, t.prototype.render = function() {
            return i.default.createElement("div", {
                className: "recents-item__wrapper",
                onClick: d.ensureUserIntentToClick(this.onClick)
            }, this.renderCarat(), this.renderIcon(), this.renderDetails(), this.renderActions())
        }, t.defaultProps = {
            handleClick: function(e) {
                return null
            },
            tooltipShown: !1
        }, t
    })(i.default.Component);
    t.RecentActivityItemHeaderView = m
}), define("modules/clean/react/home/recents/components/recent_activity_item_view", ["require", "exports", "tslib", "external/classnames", "react", "external/lodash", "modules/core/exception", "modules/core/i18n", "modules/clean/em_string", "modules/clean/datetime", "modules/clean/react/helpers", "modules/clean/react/home/recents/actions/recent_activity_action_permissions", "modules/clean/react/home/recents/recent_activity_constants", "modules/clean/react/home/recents/models/utils", "modules/clean/react/home/recents/recent_activity_rendering_models", "modules/clean/react/home/recents/recent_activity_view_helper", "modules/clean/react/home/recents/recent_activity_text_helper", "modules/clean/react/home/recents/components/pending_attachment_list_view", "modules/clean/react/home/recents/components/recent_activity_item_header_view", "modules/clean/react/home/util/conditional_api", "modules/clean/react/title_bubble", "modules/clean/react/starred/constants", "modules/clean/react/home/recents/components/recent_activity_item_actions_view", "modules/clean/react/home/util/post_tti_components"], function(e, t, n, r, i, o, a, s, c, l, u, d, m, _, h, p, E, f, T, I, g, S, R, y) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), i = n.__importDefault(i), u = n.__importStar(u), E = n.__importStar(E);
    var v = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.handleMouseEnter = function() {
                n.setState({
                    isHovered: !0
                })
            }, n.handleMouseLeave = function() {
                n.setState({
                    isHovered: !1
                })
            }, n.onShare = function(e) {
                e.preventDefault(), n.props.handler.handleShare()
            }, n.onShowTooltip = function() {
                n.setState({
                    tooltipShown: !0
                })
            }, n.onHideTooltip = function() {
                n.setState({
                    tooltipShown: !1
                })
            }, n.state = {
                tooltipShown: !1,
                isHovered: !1
            }, n
        }
        return n.__extends(t, e), t.prototype.shouldDisableActions = function() {
            var e = this.props.recentItem.federatedRecentItem;
            return e ? !e.hasMenuActions() : !this.hasLoadedAttachments()
        }, t.prototype.isAggregation = function() {
            return this.props.recentItem.attachmentIds.length > 1
        }, t.prototype.shouldShowThumbnails = function() {
            var e = this.props.recentItem;
            return !_.isShareRecentItem(e) && _.shouldShowThumbnailsForRecentItem(e)
        }, t.prototype.getLoadedAttachmentsCount = function() {
            return this.props.attachments.filter(function(e) {
                return e.isLoaded
            }).length
        }, t.prototype.canRenderAttachmentView = function() {
            var e = this.getLoadedAttachmentsCount();
            return e === this.props.recentItem.attachmentIds.length || e >= m.MAX_INITIAL_THUMBNAIL_ATTACHMENTS
        }, t.prototype.hasLoadedAttachments = function() {
            return !(!this.props.attachments.length || !this.getLoadedAttachmentsCount())
        }, t.prototype.getHeading = function() {
            var e = this.props,
                t = e.attachments,
                n = e.recentItem;
            if (t.length < 2) return c.Emstring.em_snippet(n.displayName || "", 30);
            for (var r = n.attachmentIds.length, i = n.uniqueFilterTypes, o = [], a = 0, l = t; a < l.length; a++) {
                var u = l[a];
                u.isLoaded && u.displayName && o.push(u.displayName)
            }
            switch (i.length) {
                case 1:
                    switch (i[0]) {
                        case m.RECENT_EVENT_FILTER_TYPE.PHOTOS:
                            return s.ungettext("%(count)s image", "%(count)s images", r).format({
                                count: r
                            });
                        case m.RECENT_EVENT_FILTER_TYPE.VIDEOS:
                            return s.ungettext("%(count)s video", "%(count)s videos", r).format({
                                count: r
                            });
                        case m.RECENT_EVENT_FILTER_TYPE.VISUAL_NOTES:
                            return s.ungettext("%(count)s visual note", "%(count)s visual notes", r).format({
                                count: r
                            })
                    }
                    break;
                case 2:
                    if (i.indexOf(m.RECENT_EVENT_FILTER_TYPE.PHOTOS) >= 0 && i.indexOf(m.RECENT_EVENT_FILTER_TYPE.VIDEOS) >= 0) return s._("%(count)s images and videos").format({
                        count: r
                    })
            }
            return o.length ? E.snippetList(o, 30, {
                totalCount: r
            }) : s.ungettext("%(count)s file", "%(count)s files", r).format({
                count: r
            })
        }, t.prototype.getParentPathComponent = function() {
            var e = this.props.recentItem,
                t = e.type,
                n = e.paths;
            if (_.isShareRecentItem(e)) return t === m.RECENT_EVENT_TYPES.FILE_SHARED_ADD ? {
                name: s._("Your links"),
                url: "/links/your_links"
            } : null;
            if (n.length) {
                var r = o.last(n);
                if (r.url) return r
            }
            return null
        }, t.prototype.getSubheading = function() {
            var e = this.getParentPathComponent(),
                t = this.props,
                n = t.renderingInfo,
                r = t.recentItem,
                o = t.handler,
                a = new Date(r.when);
            return i.default.createElement("div", {
                className: "recents-item__subheading"
            }, _.getActionTypeLocalizedString(r) + " ", i.default.createElement(g.TitleBubble, {
                position: g.TitleBubble.POSITIONS.TOP,
                content: i.default.createElement("div", {
                    className: "recents-item__subheading-time-tooltip"
                }, l.format_date(a, "MMM d, yyyy") + "\n" + l.format_date(a, l.localized_time_format))
            }, i.default.createElement("div", {
                className: "recents-item__subheading-time"
            }, l.agoFromDate(a, n.now, !1, !0))), e ? " · " : "", e ? i.default.createElement("a", {
                "aria-label": e.name,
                className: "recents-item__subheading-parent",
                href: e.url,
                onClick: o.handlePathClick
            }, e.name) : null)
        }, t.prototype.renderShareButton = function() {
            var e = this.props.recentItem,
                t = e.federatedRecentItem;
            return (t ? t.isShareable() : this.hasLoadedAttachments()) ? i.default.createElement("a", {
                ref: "share",
                className: "button-secondary recents-item__share",
                href: "#share",
                onClick: this.onShare,
                role: "button"
            }, s._("Share")) : null
        }, t.prototype.renderAttachments = function() {
            var e = this.props,
                t = e.recentItem,
                n = e.attachments;
            if (this.shouldShowThumbnails()) {
                if (this.props.isCollapsed) return null;
                var r = t.attachmentIds.length;
                return this.canRenderAttachmentView() ? i.default.createElement(y.PostTTIRecentActivityImageAttachments, {
                    key: "pendingAttachments",
                    attachments: n,
                    count: r
                }) : i.default.createElement(f.PendingAttachmentListView, {
                    key: "attachments",
                    count: r
                })
            }
            return this.isAggregation() && a.reportStack("Tried to render non-photo aggregation but failed", {
                severity: a.SEVERITY.NONCRITICAL,
                exc_extra: {
                    recent_item: t,
                    attachments: n
                }
            }), null
        }, t.prototype.renderButton = function(e) {
            return e.share ? i.default.createElement("div", {
                className: "recents-item__sharing recents-item__action-button"
            }, this.renderShareButton()) : null
        }, t.prototype.renderStar = function() {
            var e = this.props,
                t = e.recentItem,
                n = e.renderingInfo;
            return I.waitForStarred(function(e) {
                var r = e.Star,
                    o = e.getIdTypePairFromRecentItem,
                    a = o(t);
                return a ? i.default.createElement(r, {
                    id: a.id,
                    idType: a.type,
                    user: n.user,
                    source: S.StarredSource.HOME_RECENTS
                }) : null
            }, !1)
        }, t.prototype.getHeaderProps = function() {
            var e = this.props,
                t = e.recentItem,
                n = e.isCollapsed,
                r = e.attachments,
                i = t.displayName,
                o = t.displayType;
            return {
                heading: this.getHeading(),
                subheading: this.getSubheading(),
                thumbnailUrl: 1 === r.length && r[0].thumbnailUrl || void 0,
                star: this.renderStar(),
                fileName: i,
                isAggregation: this.isAggregation(),
                displayType: o,
                isCollapsed: n,
                disableStar: !!t.scl
            }
        }, t.prototype.renderHeader = function() {
            var e = this.props,
                t = e.recentItem,
                n = e.attachments,
                r = e.handler,
                o = e.renderingInfo,
                a = d.getRecentActivityItemViewPermissions(t, n),
                s = _.isShareRecentItem(t);
            return i.default.createElement(T.RecentActivityItemHeaderView, {
                ref: "header",
                key: "header",
                header: this.getHeaderProps(),
                handleClick: this.isAggregation() ? r.handleHeaderClick : r.handlePreview,
                isShareItem: s,
                tooltipShown: this.state.tooltipShown
            }, this.renderButton(a), i.default.createElement(y.PostTTIRecentsActivityFileActions, {
                recentItem: this.props.recentItem,
                attachments: this.props.attachments
            }), i.default.createElement(R.RecentActivityItemActionsView, {
                ref: "recentsItemActionsView",
                handler: r,
                tooltipHandler: this,
                isShareItem: s,
                permissions: a,
                attachmentCount: t.attachmentIds.length,
                disableActions: this.shouldDisableActions(),
                rowIsHovered: this.state.isHovered,
                renderingInfo: o
            }))
        }, t.prototype.shouldComponentUpdate = function(e, t) {
            return u.compareStateAndProps(e, t)
        }, t.prototype.render = function() {
            var e, t = this.props,
                n = t.recentItem,
                o = t.handler,
                a = r.default((e = {}, e["recents-item"] = !0, e["recents-item--loaded"] = this.hasLoadedAttachments(), e)),
                s = this.isAggregation() ? void 0 : p.ensureUserIntentToClick(o.handlePreview);
            return i.default.createElement("li", {
                "data-item-id": n.id,
                "data-item-type": n.type,
                "data-item-date": n.when,
                className: a,
                onClick: s,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave
            }, i.default.createElement(y.PrototypePostTTICalendarRecentActivityDragHandler, {
                recentItem: n
            }, this.renderHeader(), this.renderAttachments()))
        }, t.displayName = "RecentActivityItemView", t.defaultProps = {
            handler: h.getStubRecentActivityItemContainerHandler(),
            isCollapsed: !0,
            attachments: []
        }, t
    })(i.default.Component);
    t.RecentActivityItemView = v
}), define("modules/clean/react/home/recents/models/attachment", ["require", "exports", "modules/core/exception"], function(e, t, n) {
    "use strict";

    function r(e) {
        var t = e.preview_jsinfo || null,
            r = null,
            i = null;
        if (t && (t.thumbnail_url_tmpl && (r = t.thumbnail_url_tmpl), t.thumbnail_dimensions)) {
            var o = t.thumbnail_dimensions,
                a = o[0];
            i = {
                height: o[1],
                width: a
            }
        }
        var s = e.comment || {},
            c = s.commenter_dict || {};
        return s.raw_comment_text && n.reportStack("Received a comment attachment", {
            severity: n.SEVERITY.NONCRITICAL,
            exc_extra: {
                activity: e
            }
        }), {
            id: e.activity_key,
            isLoaded: !0,
            viewingUserId: e.viewing_user.id,
            displayName: e.name || null,
            displayType: e.activity_data && e.activity_data.home_display_type || null,
            previewInfo: e.preview_jsinfo || null,
            fqPath: e.fq_path || null,
            nsPath: e.ns_path || null,
            nsId: e.ns_id || null,
            thumbnailUrl: r || null,
            thumbnailDimensions: i || null,
            canOpen: !1,
            inRootCollection: !1,
            isReadOnly: !!e.is_read_only,
            isDir: !!e.is_dir,
            isCloudDoc: !!e.is_cloud_doc,
            isVersionable: !!e.is_versionable,
            commentRawText: s.raw_comment_text || null,
            commenterId: c.id || null,
            commenterDisplayName: c.display_name || null,
            commenterPhotoUrl: c.photo_circle_url || null
        }
    }

    function i(e) {
        return (e.related_activity_keys || []).map(function(t) {
            return {
                id: t,
                viewingUserId: e.viewing_user.id,
                displayName: null,
                displayType: null,
                isLoaded: !1,
                canOpen: !1,
                inRootCollection: !1,
                isReadOnly: !1,
                isDir: !1,
                isCloudDoc: !1,
                isVersionable: !1,
                previewInfo: null,
                fqPath: null,
                nsPath: null,
                nsId: null,
                thumbnailUrl: null,
                thumbnailDimensions: null,
                commentRawText: null,
                commenterId: null,
                commenterDisplayName: null,
                commenterPhotoUrl: null
            }
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.convertFileActivityToAttachmentItem = r, t.createPartialAttachmentsFromRecentActivity = i
}), define("modules/clean/react/home/recents/models/federated_recent_item", ["require", "exports", "modules/clean/react/home/recents/recent_activity_constants", "modules/clean/react/home/recents/recent_activity_federated_model"], function(e, t, n, r) {
    "use strict";

    function i(e) {
        switch (e.action || n.PaperRecentItemAction.OPENED) {
            case n.PaperRecentItemAction.CREATED:
                return n.RECENT_EVENT_TYPES.PAPER_ADD;
            case n.PaperRecentItemAction.EDITED:
                return n.RECENT_EVENT_TYPES.PAPER_EDIT;
            default:
                return n.RECENT_EVENT_TYPES.PAPER_VIEW
        }
    }

    function o(e, t, o) {
        var a = new r.FederatedRecentItem(e),
            s = a.getActivityKey();
        return {
            federatedRecentItem: a,
            id: s,
            idType: e.id_type,
            resourceId: e.resource_id,
            type: i(e),
            icon: a.getIcon(),
            displayType: e.display_type,
            when: e.time,
            viewingUserId: t.id,
            displayName: e.name,
            accountDisplayName: t.display_name,
            contextDisplayName: a.getFolderPath() || t.display_name,
            attachmentIds: [s],
            paths: e.path,
            order: o,
            uniqueFilterTypes: [n.RECENT_EVENT_FILTER_TYPE.DOCUMENTS]
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createRecentItemFromPaperRecentItem = o
}), define("modules/clean/react/home/recents/models/recent_item", ["require", "exports", "tslib", "external/lodash", "modules/clean/react/home/recents/actions/error_actions", "modules/clean/react/home/recents/models/utils"], function(e, t, n, r, i, o) {
    "use strict";

    function a(e) {
        try {
            var t = e.skeleton_data;
            return {
                id: e.activity_key,
                type: e.recent_event_type || null,
                icon: t && t.icon || null,
                displayType: e.activity_data && e.activity_data.home_display_type || null,
                when: e.when_milli || null,
                viewingUserId: e.viewing_user.id,
                displayName: t && t.display_name || null,
                accountDisplayName: t && t.account_display_name || null,
                contextDisplayName: t && t.context_display_name || null,
                uniqueFilterTypes: t ? r.uniq(r.values(t.filter_types_by_key)) : [],
                attachmentIds: e.related_activity_keys || [],
                paths: o.getPathsByFqPath(t && t.context_display_path || "", e.viewing_user.id, !0),
                order: c(e.activity_key),
                idType: e.id_type,
                resourceId: e.resource_id,
                scl: e.scl
            }
        } catch (t) {
            return r.defer(function() {
                return i.errorActions.recentActivityParseError(e.activity_key, t)
            }), null
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r);
    var s = 0,
        c = r.memoize(function(e) {
            return s += 1
        });
    t.convertRecentActivityToRecentItem = a
}), define("modules/clean/react/home/recents/models/utils", ["require", "exports", "tslib", "external/lodash", "modules/clean/browse_uri_interface", "modules/clean/react/home/recents/recent_activity_constants", "modules/clean/viewer"], function(e, t, n, r, i, o, a) {
    "use strict";

    function s(e) {
        var t = r.values(e.filter_types_by_key);
        return l(t.length, r.uniq(t))
    }

    function c(e) {
        return l(e.attachmentIds.length, e.uniqueFilterTypes)
    }

    function l(e, t) {
        return !!(e > 1 && t.every(function(e) {
            return S.indexOf(e) >= 0
        }))
    }

    function u(e) {
        return r.map(e, "id")
    }

    function d(e) {
        return !!e.scl
    }

    function m(e, t, n) {
        void 0 === n && (n = !1);
        var o = a.Viewer.get_viewer().get_user_by_id(t);
        "/" === e && (e = "");
        var s = [],
            c = e.split("/");
        for (n || c.pop(); c.length;) {
            var l = r.last(c),
                u = c.join("/");
            1 === c.length && "" === l && (l = a.Viewer.get_root_name(o), u = "");
            var d = i.browse_uri_for_fq_path(o, u).toString();
            s.push({
                name: l || "",
                url: d
            }), c.pop()
        }
        return s.reverse()
    }

    function _(e, t) {
        return t.when - e.when || e.order - t.order || t.type - e.type
    }

    function h(e) {
        var t = e.split(".");
        return t.length < 2 ? "" : "." + t.slice(-1)[0].replace(/\n$/, "").toLowerCase()
    }

    function p(e) {
        switch (e.type) {
            case o.RECENT_EVENT_TYPES.FILE_PRIVATE_VIEW:
            case o.RECENT_EVENT_TYPES.FILE_SHARED_VIEW:
            case o.RECENT_EVENT_TYPES.PAPER_VIEW:
                return o.RecentItemActionType.OPENED;
            case o.RECENT_EVENT_TYPES.FILE_EDIT:
            case o.RECENT_EVENT_TYPES.PAPER_EDIT:
                return o.RecentItemActionType.EDITED;
            default:
                return o.RecentItemActionType.ADDED
        }
    }

    function E(e) {
        return R[p(e)]
    }
    var f;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r);
    var T = o.RECENT_EVENT_FILTER_TYPE.PHOTOS,
        I = o.RECENT_EVENT_FILTER_TYPE.VIDEOS,
        g = o.RECENT_EVENT_FILTER_TYPE.VISUAL_NOTES,
        S = [T, I, g];
    t.shouldShowThumbnailsForSkeletonData = s, t.shouldShowThumbnailsForRecentItem = c, t.extractAttachmentIds = u, t.isShareRecentItem = d, t.getPathsByFqPath = m, t.compareRecentItems = _, t.getExtension = h, t.getRecentItemActionType = p;
    var R = (f = {}, f[o.RecentItemActionType.OPENED] = o.I18N.OPENED, f[o.RecentItemActionType.EDITED] = o.I18N.EDITED, f[o.RecentItemActionType.ADDED] = o.I18N.ADDED, f);
    t.getActionTypeLocalizedString = E
}), define("modules/clean/react/home/recents/recent_activity_client_utils", ["require", "exports"], function(e, t) {
    "use strict";

    function n(e) {
        if ("ok" === e.status) return e.payload;
        throw new Error("Payload not okay: " + JSON.stringify(e))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getPayload = n
}), define("modules/clean/react/home/recents/recent_activity_constants", ["require", "exports", "tslib", "modules/constants/python", "modules/core/i18n"], function(e, t, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), t.RECENT_EVENT_TYPES = r.RECENT_EVENT_TYPES, t.RECENT_EVENT_FILTER_TYPE = r.RECENT_EVENT_FILTER_TYPE, t.ARCHIVE_PAPER_DOCUMENT_COMMIT = "ARCHIVE_PAPER_DOCUMENT_COMMIT", t.ARCHIVE_PAPER_DOCUMENT_PENDING = "ARCHIVE_PAPER_DOCUMENT_PENDING", t.ARCHIVE_PAPER_DOCUMENT_ROLLBACK = "ARCHIVE_PAPER_DOCUMENT_ROLLBACK", t.DELETE_FILES_COMMIT = "DELETE_FILES_COMMIT", t.DELETE_FILES_PENDING = "DELETE_FILES_PENDING", t.DELETE_FILES_ROLLBACK = "DELETE_FILES_ROLLBACK", t.RAW_RECENT_ACTIVITY_PARSE_ERROR = "RAW_RECENT_ACTIVITY_PARSE_ERROR", t.RAW_RELATED_ACTIVITY_PARSE_ERROR = "RAW_RELATED_ACTIVITY_PARSE_ERROR", t.RECEIVE_CAN_OPEN_INFO = "RECEIVE_CAN_OPEN_INFO", t.RECEIVE_FILE_IN_ROOT_COLLECTION_INFO = "RECEIVE_FILE_IN_ROOT_COLLECTION_INFO", t.RECEIVE_PAPER_RECENT_ITEMS = "RECEIVE_PAPER_RECENT_ITEMS", t.RECEIVE_RAW_RECENT_ACTIVITIES = "RECEIVE_RAW_RECENT_ACTIVITIES", t.RECEIVE_RAW_RELATED_ACTIVITIES_BY_KEY = "RECEIVE_RAW_RELATED_ACTIVITIES_BY_KEY", t.REFRESH_RECENT_ACTIVITIES = "REFRESH_RECENT_ACTIVITIES", t.ADD_PENDING_ACTIVITY_KEYS = "ADD_PENDING_ACTIVITY_KEYS", t.REMOVE_PENDING_ACTIVITY_KEYS = "REMOVE_PENDING_ACTIVITY_KEYS", t.SET_ACTIVE_FILTERS = "SET_ACTIVE_FILTERS", t.MAX_INITIAL_DOC_ATTACHMENTS = 3, t.SHOW_MORE_DOC_ATTACHMENT_INCREMENT = 10, t.MAX_INITIAL_THUMBNAIL_ATTACHMENTS = 8, t.SHOW_MORE_THUMBNAIL_ROW_INCREMENT = 4;
    (function(e) {
        e.CREATED = "CREATE", e.OPENED = "VIEW", e.EDITED = "EDIT"
    })(t.PaperRecentItemAction || (t.PaperRecentItemAction = {})), t.PaperRecentItemTypes = {
        DOCUMENT: "DOCUMENT",
        FOLDER: "FOLDER",
        PROJECT: "PROJECT"
    }, t.MAX_RECENT_ITEM_COUNT_ON_RECENTS_V2_PRE_TTI = 10, t.MAX_RECENT_ITEM_COUNT_ON_RECENTS_V2_POST_TTI = 100, t.MAX_ENSURE_ATTACHMENT_LOAD_ATTACHMENTS_ATTEMPTS = 1;
    (function(e) {
        e.OPENED = "OPENED", e.EDITED = "EDITED", e.ADDED = "ADDED"
    })(t.RecentItemActionType || (t.RecentItemActionType = {})), t.I18N = {
        OPENED: i._("Opened"),
        EDITED: i._("Edited"),
        ADDED: i._("Added")
    };
    (function(e) {
        e.VIEW_FILE = "view", e.OPEN = "open", e.SHARE = "share", e.SHARE_COLLECTION = "share_collection", e.DELETE = "delete", e.HIDE = "hide", e.UNITY_OPEN = "unity_open", e.OPEN_DIR = "open_dir", e.OPEN_PATH = "open_path", e.REPORT_JUNK = "report_junk", e.COMMENT = "comment", e.DOWNLOAD = "download", e.VERSIONS = "versions", e.VIEW_SHARED_LINK = "view_shared_link", e.PAPER_ARCHIVE = "paper_archive", e.PAPER_OPEN = "paper_open", e.PAPER_SHARE = "paper_share", e.COLLAPSE = "collapse", e.UNCOLLAPSE = "uncollapse", e.ONBOARDING_DISMISSED = "onboarding_dismissed", e.FULL_ONBOARDING_OPENED = "full_onboarding_opened", e.FULL_ONBOARDING_DISMISSED = "full_onboarding_dismissed"
    })(t.ActionType || (t.ActionType = {}));
    (function(e) {
        e.SINGLE = "single", e.SUBSET = "subset", e.AGGREGATION = "aggregation"
    })(t.ActionScope || (t.ActionScope = {}));
    (function(e) {
        e.RECENTS_JSON_CONTINUATION = "handleAndLogRecentsJson", e.SHARE_FILE = "shareFile", e.PREVIEW_RECENT_ITEM = "previewRecentItem", e.OPEN_FILE = "openFile", e.DOWNLOAD_FILES = "downloadFiles", e.OPEN_VERSIONS = "openVersions", e.PROMPT_AND_DELETE_ATTACHMENTS = "promptAndDeleteAttachments", e.LOAD_REMAINING_ATTACHMENTS = "loadRemainingAttachments"
    })(t.EnsureAttachmentsPurpose || (t.EnsureAttachmentsPurpose = {}));
    var o;
    (function(e) {
        e.EXPAND_AGGREGATIONS = "EXPAND_AGGREGATIONS", e.INCLUDE_OPEN_ACTIONS = "INCLUDE_OPEN_ACTIONS", e.INCLUDE_EDIT_ACTIONS = "INCLUDE_EDIT_ACTIONS", e.INCLUDE_ADD_ACTIONS = "INCLUDE_ADD_ACTIONS", e.INCLUDE_FILES = "INCLUDE_FILES", e.INCLUDE_FOLDERS = "INCLUDE_FOLDERS", e.INCLUDE_PAPER_DOCS = "INCLUDE_PAPER_DOCS"
    })(o = t.RecentItemsFilterType || (t.RecentItemsFilterType = {})), t.ALL_AVAILABLE_FILTER_TYPES = [o.EXPAND_AGGREGATIONS, o.INCLUDE_OPEN_ACTIONS, o.INCLUDE_EDIT_ACTIONS, o.INCLUDE_ADD_ACTIONS, o.INCLUDE_FILES, o.INCLUDE_FOLDERS, o.INCLUDE_PAPER_DOCS]
}), define("modules/clean/react/home/recents/recent_activity_dispatcher", ["require", "exports", "external/flux"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.recentActivityDispatcher = new n.Dispatcher
}), define("modules/clean/react/home/recents/recent_activity_federated_model", ["require", "exports", "modules/clean/react/home/recents/recent_activity_constants"], function(e, t, n) {
    "use strict";

    function r(e) {
        return e.paperRecentItem.type === n.PaperRecentItemTypes.DOCUMENT
    }

    function i(e) {
        return e.paperRecentItem.type === n.PaperRecentItemTypes.PROJECT
    }

    function o(e) {
        return r(e) ? e.paperRecentItem.shareUrl || "" : ""
    }

    function a(e, t) {
        return e.paperRecentItem.id === t.id && e.paperRecentItem.type === t.type
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isPaperDocument = r, t.isPaperProject = i, t.getPaperShareUrl = o, t.equalsPaperRecentItem = a;
    var s = (function() {
        function e(e) {
            this.paperRecentItem = e
        }
        return e.prototype.isShareable = function() {
            return r(this) && !!o(this)
        }, e.prototype.isArchiveable = function() {
            return r(this) && !!this.paperRecentItem.isEditable
        }, e.prototype.hasMenuActions = function() {
            return this.isArchiveable()
        }, e.prototype.getIdTypePair = function() {
            return {
                id: this.paperRecentItem.resource_id,
                type: this.paperRecentItem.id_type
            }
        }, e.prototype.getStarredStatus = function() {
            return {
                starred: this.paperRecentItem.isFavorite,
                idTypePair: this.getIdTypePair()
            }
        }, e.prototype.getIcon = function() {
            switch (this.paperRecentItem.display_type) {
                case "PAPER_DOCUMENT":
                    return "paper_doc";
                case "PAPER_FOLDER":
                    return "folder";
                case "PAPER_PUBLIC_FOLDER":
                    return "folder_team";
                case "PAPER_PROJECT":
                    return "paper_project";
                default:
                    return "file"
            }
        }, e.prototype.getDisplayType = function() {
            return this.paperRecentItem.display_type
        }, e.prototype.getIsDir = function() {
            return !1
        }, e.prototype.getFolderPath = function() {
            return [""].concat(this.paperRecentItem.path.map(function(e) {
                return e.name
            })).join("/")
        }, e.prototype.getFqPath = function() {
            return this.getFolderPath() + "/" + this.paperRecentItem.name
        }, e.prototype.getActivityKey = function() {
            return "paper_id_" + this.paperRecentItem.id
        }, e.prototype.getUrl = function() {
            return this.paperRecentItem.url
        }, e
    })();
    t.FederatedRecentItem = s
}), define("modules/clean/react/home/recents/recent_activity_logger_utils", ["require", "exports", "tslib", "modules/clean/web_timing_logger"], function(e, t, n, r) {
    "use strict";

    function i() {
        if (!l) {
            var e = r.start_time();
            if (e) return l = !0, {
                isFullPage: !0,
                startTime: e
            }
        }
        return {
            isFullPage: !1,
            startTime: Date.now()
        }
    }

    function o() {
        l = !1, c = !1
    }

    function a() {
        return !c
    }

    function s() {
        c = !0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r);
    var c = !1,
        l = !1;
    t.getRecentsLoggingData = i, t.reset = o, t.canLogFirstAction = a, t.onLogFirstAction = s
}), define("modules/clean/react/home/recents/recent_activity_rendering_models", ["require", "exports"], function(e, t) {
    "use strict";

    function n() {
        return {
            handleArchive: function() {},
            handleComment: function(e) {},
            handleDelete: function() {},
            handleDownload: function() {},
            handleHeaderClick: function() {},
            handleOpen: function() {},
            handlePathClick: function() {},
            handlePreview: function(e) {},
            handleShare: function() {},
            handleVersions: function(e) {}
        }
    }

    function r() {
        return {
            onShowTooltip: function() {},
            onHideTooltip: function() {}
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getStubRecentActivityItemContainerHandler = n, t.getStubRecentActivityTooltipHandler = r
}), define("modules/clean/react/home/recents/recent_activity_stream", ["require", "exports", "tslib", "external/lodash", "modules/clean/react/home/recents/models/utils"], function(e, t, n, r, i) {
    "use strict";

    function o(e) {
        var t, n = e.filter(Boolean),
            o = r.max(n.map(function(e) {
                return e.oldestTimeForOtherStream
            }));
        return (t = []).concat.apply(t, n.map(function(e) {
            return e.getItemsAfter(o)
        })).sort(i.compareRecentItems)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r);
    var a = (function() {
        function e(e, t) {
            var n = this;
            this.sortedRecentItems = e, this.hasMore = t, this.activityKeyToRecentItem = {}, e.forEach(function(e) {
                n.activityKeyToRecentItem[e.id] = e
            }), this.oldestTimeForOtherStream = this.getOldestItemTimeForOtherStreams()
        }
        return e.prototype.getOldestItemTimeForOtherStreams = function() {
            return this.hasMore && this.sortedRecentItems.length ? this.sortedRecentItems[this.sortedRecentItems.length - 1].when || 0 : 0
        }, e.prototype.getRecentItems = function() {
            return this.sortedRecentItems.slice()
        }, e.prototype.getRecentItemByActivityKey = function(e) {
            return this.activityKeyToRecentItem[e] || null
        }, e.prototype.getStreamWithoutActivityKey = function(t) {
            return new e(this.sortedRecentItems.filter(function(e) {
                return e.id !== t
            }), this.hasMore)
        }, e.prototype.getItemsAfter = function(e) {
            if (this.oldestTimeForOtherStream < e) {
                for (var t = [], n = 0, r = this.sortedRecentItems; n < r.length; n++) {
                    var i = r[n];
                    if (i.when < e) break;
                    t.push(i)
                }
                return t
            }
            return this.sortedRecentItems
        }, e
    })();
    t.RecentActivityStream = a, t.getMergedRecentItems = o
}), define("modules/clean/react/home/recents/recent_activity_text_helper", ["require", "exports", "modules/clean/em_string", "modules/core/i18n"], function(e, t, n, r) {
    "use strict";

    function i(e, t) {
        return r.ungettext("%(name)s and %(num)s other", "%(name)s and %(num)s others", t).format({
            name: e,
            num: t
        })
    }

    function o(e, t, o) {
        void 0 === o && (o = {});
        var a = Math.max(Math.floor(o.totalCount || 0), e.length);
        if (1 === a) return n.Emstring.em_snippet(e[0], t);
        var s = e[0],
            c = a - 1,
            l = i(s, c);
        if (new n.Emstring(l).length > t) {
            var u = Math.floor(t - new n.Emstring(i("", c)).length) - 1;
            l = u < 3 ? r.ungettext("%(num)s other", "%(num)s others", a).format({
                num: a
            }) : i(n.Emstring.em_snippet(s, u), c)
        }
        for (var d = "", m = 1; m < e.length && (m += 1, d = e.slice(0, m).join(", "), m < a && (d = i(d, a - m)), new n.Emstring(d).length < t);) l = d;
        return l
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.snippetList = o
}), define("modules/clean/react/home/recents/recent_activity_view_helper", ["require", "exports"], function(e, t) {
    "use strict";

    function n(e) {
        return function(t) {
            var n = window.getSelection();
            if (null === n || !n.toString()) {
                for (var r = t.target; r && r.parentNode && r !== t.currentTarget;) {
                    if (["a", "button"].indexOf(r.nodeName.toLowerCase()) >= 0) return;
                    r = r.parentNode
                }
                e.apply(this, arguments)
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ensureUserIntentToClick = n
}), define("modules/clean/react/home/recents/store_utils", ["require", "exports", "tslib", "modules/clean/react/home/store", "modules/clean/react/home/recents/recent_activity_dispatcher", "modules/clean/react/home/recents/recent_activity_logger_utils", "modules/clean/react/home/recents/recent_activity_constants", "modules/clean/react/home/recents/models/utils", "modules/clean/react/home/recents/recent_activity_client_utils"], function(e, t, n, r, i, o, a, s, c) {
    "use strict";

    function l(e, t, l) {
        var d = this;
        void 0 === l && (l = !0);
        try {
            var m = o.getRecentsLoggingData(),
                _ = c.getPayload(t),
                h = _.recent_activities,
                p = _.cursor,
                E = _.encrypted,
                f = r.getUserId();
            return i.recentActivityDispatcher.dispatch({
                type: a.RECEIVE_RAW_RECENT_ACTIVITIES,
                rawRecentActivities: h,
                cursor: p || "",
                encrypted: E || "",
                userId: f
            }), u(e, function() {
                return n.__awaiter(d, void 0, void 0, function() {
                    var t, r, i;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return t = [], h.forEach(function(e) {
                                    if (e.skeleton_data && e.related_activity_keys) {
                                        var n = s.shouldShowThumbnailsForSkeletonData(e.skeleton_data) ? a.MAX_INITIAL_THUMBNAIL_ATTACHMENTS : a.MAX_INITIAL_DOC_ATTACHMENTS;
                                        t = t.concat.apply(t, e.related_activity_keys.slice(0, n))
                                    }
                                }), [4, e()];
                            case 1:
                                return [4, n.sent().ensureAttachments(t, a.EnsureAttachmentsPurpose.RECENTS_JSON_CONTINUATION)];
                            case 2:
                                return n.sent(), r = !1, i = 0, h.forEach(function(e) {
                                    var t = e.skeleton_data;
                                    t && (i += t.num_related_activities || 0, (t.num_related_activities || 0) > 1 && (r = !0))
                                }), e().then(function(e) {
                                    return (0, e.logRecentsLoaded)(f, m, {
                                        is_paginated: !l,
                                        contains_aggregation: r,
                                        item_count: i
                                    })
                                }), [2]
                        }
                    })
                })
            })
        } catch (t) {
            throw e().then(function(e) {
                return (0, e.logRequestFailed)(r.getUserId(), t)
            }), t
        }
    }

    function u(e, t) {
        return n.__awaiter(this, void 0, Promise, function() {
            var i;
            return n.__generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 2, , 3]), [4, t()];
                    case 1:
                        return [2, n.sent()];
                    case 2:
                        throw i = n.sent(), e().then(function(e) {
                            return (0, e.logRequestFailed)(r.getUserId(), i)
                        }), i;
                    case 3:
                        return [2]
                }
            })
        })
    }

    function d(e, t, n) {
        void 0 === n && (n = !0);
        var o = r.getUserId(),
            s = c.getPayload(t),
            l = n && s.has_more;
        i.recentActivityDispatcher.dispatch({
            type: a.RECEIVE_PAPER_RECENT_ITEMS,
            items: s.items,
            hasMore: l,
            userId: o
        }), l && e().then(function(e) {
            return (0, e.loadPaperRecentItems)(!1)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.handleAndLogRecentsJsonPromise = l, t.logErrorAndRethrowAsync = u, t.handleRetrievePaperRecentsPromise = d
}), define("modules/clean/react/home/recents/stores/attachment_store", ["require", "exports", "tslib", "modules/clean/flux/dispatcher", "modules/clean/react/home/constants", "external/lodash", "modules/clean/flux/flux_store", "modules/clean/react/home/recents/actions/error_actions", "modules/clean/react/home/recents/stores/flux_utils", "modules/clean/react/home/recents/recent_activity_constants", "modules/clean/react/home/recents/recent_activity_dispatcher", "modules/clean/react/home/recents/models/attachment", "modules/core/exception"], function(e, t, n, r, i, o, a, s, c, l, u, d, m) {
    "use strict";

    function _() {
        return null === p && (p = new h(u.recentActivityDispatcher)), p
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o);
    var h = (function(e) {
        function t(t, n) {
            void 0 === n && (n = {});
            var r = e.call(this, t) || this;
            return r.onCommit = function(e) {
                delete r.transactionHistory[e.transactionId]
            }, r._onDeleteFilesPending = function(e) {
                for (var t = [], n = 0, i = e.attachmentIds; n < i.length; n++) {
                    var o = i[n];
                    o in r.attachmentIdToAttachment && (t.push(r.attachmentIdToAttachment[o]), delete r.attachmentIdToAttachment[o])
                }
                r.transactionHistory[e.transactionId] = {
                    deletedAttachments: t
                }, c.emitChangeIfNeeded(r, !!t.length)
            }, r._onDeleteFilesRollback = function(e) {
                var t = r.transactionHistory[e.transactionId];
                m.assert(!!t, "Unable to find data for transaction with id: " + e.transactionId), t.deletedAttachments.forEach(function(e) {
                    return r.attachmentIdToAttachment[e.id] = e
                }), c.emitChangeIfNeeded(r, !!t.deletedAttachments.length)
            }, r.pendingActivityKeys = [], r.attachmentIdToEncryptedToken = {}, r.attachmentIdToAttachment = {}, (n.attachments || []).forEach(function(e) {
                r.attachmentIdToAttachment[e.id] = e, n.encryptedToken && (r.attachmentIdToEncryptedToken[e.id] = n.encryptedToken)
            }), r.transactionHistory = {}, r
        }
        return n.__extends(t, e), t.prototype.areSomeActivityKeysPending = function(e) {
            return !!o.intersection(this.pendingActivityKeys, e).length
        }, t.prototype.getById = function(e) {
            return this.attachmentIdToAttachment[e] || null
        }, t.prototype.getByIds = function(e) {
            return o.values(o.pick(this.attachmentIdToAttachment, e))
        }, t.prototype.getByFqPath = function(e) {
            return this.getAll().find(function(t) {
                return t.fqPath === e
            }) || null
        }, t.prototype.getAll = function() {
            return o.values(this.attachmentIdToAttachment)
        }, t.prototype.groupIdsByEncryptedToken = function(e) {
            var t = this;
            return o.groupBy(e.filter(function(e) {
                return e in t.attachmentIdToEncryptedToken
            }), function(e) {
                return t.attachmentIdToEncryptedToken[e]
            })
        }, t.prototype.__onDispatch = function(e) {
            switch (e.type) {
                case l.ADD_PENDING_ACTIVITY_KEYS:
                    this.onAddPendingActivityKeys(e);
                    break;
                case l.REMOVE_PENDING_ACTIVITY_KEYS:
                    this.onRemovePendingActivityKeys(e);
                    break;
                case l.DELETE_FILES_COMMIT:
                    this.onCommit(e);
                    break;
                case l.DELETE_FILES_PENDING:
                    this._onDeleteFilesPending(e);
                    break;
                case l.DELETE_FILES_ROLLBACK:
                    this._onDeleteFilesRollback(e);
                    break;
                case l.RECEIVE_RAW_RECENT_ACTIVITIES:
                    this.onReceiveRawRecentActivities(e);
                    break;
                case l.RECEIVE_RAW_RELATED_ACTIVITIES_BY_KEY:
                    this.onReceiveRawRelatedActivitiesByKey(e);
                    break;
                case l.RECEIVE_CAN_OPEN_INFO:
                    this.onReceiveCanOpenInfo(e);
                    break;
                case l.RECEIVE_FILE_IN_ROOT_COLLECTION_INFO:
                    this._onReceiveFileInRootCollectionInfo(e)
            }
        }, t.prototype.mutateAttachmentInNsIdPath = function(e, t) {
            if (e && e.indexOf(":") >= 0) {
                var n = e.split(":"),
                    r = n[0],
                    i = n[1],
                    o = this.getAll().find(function(e) {
                        return e.nsId === Number(r) && e.nsPath === i
                    }) || null;
                if (o) {
                    var a = c.getMutatedOrOriginal(o, t);
                    if (a !== o) return this.attachmentIdToAttachment[o.id] = a, !0
                }
            }
            return !1
        }, t.prototype.updatePendingActivityKeys = function(e, t) {
            var n, r = this.pendingActivityKeys.length;
            if (t) {
                var i = (n = this.pendingActivityKeys).concat.apply(n, e);
                this.pendingActivityKeys = o.uniq(i)
            } else this.pendingActivityKeys = o.without.apply(o, [this.pendingActivityKeys].concat(e));
            c.emitChangeIfNeeded(this, r !== this.pendingActivityKeys.length)
        }, t.prototype.onAddPendingActivityKeys = function(e) {
            this.updatePendingActivityKeys(e.activityKeys, !0)
        }, t.prototype.onRemovePendingActivityKeys = function(e) {
            this.updatePendingActivityKeys(e.activityKeys, !1)
        }, t.prototype.onReceiveRawRecentActivities = function(e) {
            var t, n = this,
                r = e.rawRecentActivities.map(d.createPartialAttachmentsFromRecentActivity),
                i = (t = []).concat.apply(t, r).filter(function(e) {
                    var t = n.getById(e.id);
                    return !t || !t.isLoaded
                });
            i.forEach(function(t) {
                n.attachmentIdToAttachment[t.id] = t, n.attachmentIdToEncryptedToken[t.id] = e.encrypted
            }), c.emitChangeIfNeeded(this, !!i.length)
        }, t.prototype.onReceiveRawRelatedActivitiesByKey = function(e) {
            var t = this;
            if (e.rawRelatedActivitiesByKey) {
                var n = Object.keys(e.rawRelatedActivitiesByKey);
                this.updatePendingActivityKeys(n, !1);
                var a = {};
                c.iterateAndEmitChangesIfNeeded(this, e.rawRelatedActivitiesByKey, function(e, n) {
                    try {
                        var r = d.convertFileActivityToAttachmentItem(e);
                        return r.previewInfo && !r.previewInfo.is_dir && (a[r.id] = r.previewInfo), t.attachmentIdToAttachment[r.id] = r, !0
                    } catch (e) {
                        return o.defer(function() {
                            return s.errorActions.relatedActivityParseError(n, e)
                        }), !1
                    }
                }), setTimeout(function() {
                    return r.Dispatcher.dispatch({
                        type: i.HomeResourceStoreActionTypes.RECEIVED_RESOURCE_ID_TO_FILE,
                        resourceIdToFile: a
                    })
                })
            }
        }, t.prototype.onReceiveCanOpenInfo = function(e) {
            var t = this;
            c.iterateAndEmitChangesIfNeeded(this, e.canOpenInfo, function(e, n) {
                return t.mutateAttachmentInNsIdPath(n, {
                    canOpen: e.is_locally_available
                })
            })
        }, t.prototype._onReceiveFileInRootCollectionInfo = function(e) {
            var t = this;
            c.iterateAndEmitChangesIfNeeded(this, e.fileInRootCollectionInfo, function(e, n) {
                return t.mutateAttachmentInNsIdPath(n, {
                    inRootCollection: e
                })
            })
        }, t
    })(a.FluxStore);
    t.AttachmentStore = h;
    var p = null;
    t.getAttachmentStore = _
}), define("modules/clean/react/home/recents/stores/flux_utils", ["require", "exports", "tslib"], function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = !1;
        Object.keys(t).forEach(function(e) {
            n(t[e], e) && (r = !0)
        }), i(e, r)
    }

    function i(e, t) {
        t && e.__emitChange()
    }

    function o(e, t) {
        for (var r in t)
            if (t[r] !== e[r]) return n.__assign({}, e, t);
        return e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.iterateAndEmitChangesIfNeeded = r, t.emitChangeIfNeeded = i, t.getMutatedOrOriginal = o
}), define("modules/clean/react/home/recents/stores/recent_activity_store", ["require", "exports", "tslib", "external/lodash", "modules/clean/react/home/recents/recent_activity_constants", "modules/clean/react/home/recents/models/federated_recent_item", "modules/clean/react/home/recents/recent_activity_dispatcher", "modules/clean/react/home/recents/models/recent_item", "modules/clean/react/home/recents/models/utils", "modules/clean/react/home/recents/stores/flux_utils", "modules/clean/react/home/recents/stores/attachment_store", "modules/clean/react/home/store", "modules/core/exception", "modules/clean/react/home/recents/recent_activity_stream", "modules/clean/react/home/post_tti/api", "modules/clean/viewer", "modules/clean/react/home/constants", "modules/clean/react/home/util/logging/availability_logger", "modules/clean/react/home/recents/store_utils", "modules/clean/flux/flux_store"], function(e, t, n, r, i, o, a, s, c, l, u, d, m, _, h, p, E, f, T, I) {
    "use strict";

    function g() {
        return null === R && (R = new S(a.recentActivityDispatcher)), R
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r);
    var S = (function(e) {
        function t(t, n) {
            void 0 === n && (n = []);
            var r = e.call(this, t) || this;
            r.handlePaperRecentsPrefetch = function() {
                return f.getHomeAvailabilityLogger().handlePrefetch(E.HomePrefetchTypes.RETRIEVE_PAPER_RECENTS, function(e) {
                    return T.handleRetrievePaperRecentsPromise(h.waitForHomeTTI, e)
                })
            }, r.removeFileSyncItem = function(e) {
                r.fileSyncRecentItemIdToRecentItem.hasOwnProperty(e.id) && (delete r.fileSyncRecentItemIdToRecentItem[e.id], r.needsToRefreshFileSyncCache = !0)
            }, r.addFileSyncItem = function(e) {
                e !== r.fileSyncRecentItemIdToRecentItem[e.id] && (r.fileSyncRecentItemIdToRecentItem[e.id] = e, r.needsToRefreshFileSyncCache = !0)
            }, r.fileSyncRecentItemIdToRecentItem = {}, r.fileSyncCursor = null, r.fileSyncTransactionIdToRestoreData = {}, r.didReceiveRawRecentActivities = !!n.length, n.forEach(r.addFileSyncItem), r.fileSyncCache = {
                items: n
            }, r.needsToRefreshFileSyncCache = !1;
            var o = d.getHomeStore().getSectionLoadingPreference(E.ConditionalSections.PAPER_RECENTS) === E.ConditionalSectionLoadingPreference.POST_TTI;
            return r.paperStream = o ? new _.RecentActivityStream([], !1) : null, r.didRecievePaperItems = o, r.paperActivityKeyToPendingArchiving = {}, r.cachedFederatedRecentItems = [], r.cachedFederatedTruncatedRecentItems = [], r.federatedRecentItemsCountMax = i.MAX_RECENT_ITEM_COUNT_ON_RECENTS_V2_PRE_TTI, r.cachedProcessedRecentItems = null, r.cachedAvailableFilters = null, r.activeFilters = [], r.getProcessedRecentItems = function(e) {
                return e
            }, r.getAvailableFiltersFromSourceItems = function() {
                return []
            }, h.waitForHomeTTI().then(function(e) {
                var t = e.processRecentItems,
                    n = e.getAvailableFiltersFromRecentItems;
                r.getProcessedRecentItems = t, r.getAvailableFiltersFromSourceItems = n, r.federatedRecentItemsCountMax = i.MAX_RECENT_ITEM_COUNT_ON_RECENTS_V2_POST_TTI, r.didTruncateRecentItems() && (r.cacheTruncatedFederatedRecentItems(), r.cachedProcessedRecentItems = null, r.cachedAvailableFilters = null)
            }), u.getAttachmentStore(), f.getHomeAvailabilityLogger().handlePrefetch(E.HomePrefetchTypes.RECENTS_JSON, function(e) {
                return T.handleAndLogRecentsJsonPromise(h.waitForHomeTTI, e)
            }), o ? h.waitForHomeTTI().then(r.handlePaperRecentsPrefetch) : r.handlePaperRecentsPrefetch(), r
        }
        return n.__extends(t, e), t.prototype.getSortedFileSyncRecentItems = function() {
            return this.fileSyncCache.sortedItems || (this.fileSyncCache.sortedItems = this.fileSyncCache.items.slice().sort(c.compareRecentItems)), this.fileSyncCache.sortedItems
        }, t.prototype.__onDispatch = function(e) {
            this.fileSyncHandler(e) || this.paperHandler(e)
        }, t.prototype.fileSyncHandler = function(e) {
            switch (e.type) {
                case i.DELETE_FILES_COMMIT:
                    this.onDeleteCommit(e);
                    break;
                case i.DELETE_FILES_PENDING:
                    this.onDeleteFilesPending(e);
                    break;
                case i.DELETE_FILES_ROLLBACK:
                    this.onDeleteFilesRollback(e);
                    break;
                case i.RECEIVE_RAW_RECENT_ACTIVITIES:
                    this.onReceiveRawRecentActivities(e);
                    break;
                case i.RECEIVE_RAW_RELATED_ACTIVITIES_BY_KEY:
                    this.onReceiveRawRelatedActivitiesByKey(e);
                    break;
                case i.RAW_RELATED_ACTIVITY_PARSE_ERROR:
                    this.onRawRelatedActivityParseError(e);
                    break;
                case i.SET_ACTIVE_FILTERS:
                    this.onSetActiveFilters(e);
                    break;
                case i.REFRESH_RECENT_ACTIVITIES:
                    this.onRefreshRecentActivities();
                    break;
                default:
                    return !1
            }
            return this.updateFileSyncCache(!0), !0
        }, t.prototype.paperHandler = function(e) {
            switch (e.type) {
                case i.RECEIVE_PAPER_RECENT_ITEMS:
                    this.onReceivePaperRecentItems(e.items, e.hasMore, e.userId);
                    break;
                case i.ARCHIVE_PAPER_DOCUMENT_PENDING:
                    this.onArchivePaperDocumentPending(e.activityKey);
                    break;
                case i.ARCHIVE_PAPER_DOCUMENT_COMMIT:
                    this.onArchivePaperDocumentCommit(e.activityKey);
                    break;
                case i.ARCHIVE_PAPER_DOCUMENT_ROLLBACK:
                    this.onArchivePaperDocumentRollback(e.activityKey);
                    break;
                default:
                    return
            }
            this.__emitChange()
        }, t.prototype.updateFileSyncCache = function(e) {
            this.needsToRefreshFileSyncCache ? (this.fileSyncCache = {
                items: r.values(this.fileSyncRecentItemIdToRecentItem)
            }, this.clearFederatedCache(), this.needsToRefreshFileSyncCache = !1, l.emitChangeIfNeeded(this, e)) : l.emitChangeIfNeeded(this, !this.cachedProcessedRecentItems)
        }, t.prototype.onDeleteCommit = function(e) {
            delete this.fileSyncTransactionIdToRestoreData[e.transactionId]
        }, t.prototype.onReceiveRawRecentActivities = function(e) {
            var t = this;
            l.emitChangeIfNeeded(this, !this.didReceiveRawRecentActivities && !e.rawRecentActivities.length), this.didReceiveRawRecentActivities = !0;
            var n = !this.fileSyncCache.items.length,
                o = [],
                a = {};
            if (e.rawRecentActivities.forEach(function(c) {
                    if (c.viewing_user && c.viewing_user.id === e.userId) {
                        var l = s.convertRecentActivityToRecentItem(c);
                        if (l && (l.uniqueFilterTypes.indexOf(i.RECENT_EVENT_FILTER_TYPE.JUNK) < 0 || l.uniqueFilterTypes.indexOf(i.RECENT_EVENT_FILTER_TYPE.ALL) >= 0))
                            if (o.push(c), n) t.fileSyncRecentItemIdToRecentItem[l.id] = l;
                            else if (!a[l.id]) {
                            a[l.id] = l;
                            var u = t.fileSyncCache.items.find(function(e) {
                                return e.id !== l.id && e.contextDisplayName === l.contextDisplayName
                            });
                            if (u) {
                                var d = r.intersection(u.attachmentIds, l.attachmentIds);
                                d.length > 0 && (t.removeFileSyncItem(u), t.updateFileSyncCache(!1))
                            }
                            var m = t.fileSyncRecentItemIdToRecentItem[l.id];
                            t.updateFileSyncItem(l, {
                                fqPath: m && m.fqPath || void 0,
                                paths: m && m.paths || l.paths
                            })
                        }
                    }
                }), h.waitForHomeTTI().then(function(e) {
                    return e.fetchStarredStatus(o)
                }), this.updateFileSyncCache(!1), !n) {
                var c = {};
                this.getSortedFileSyncRecentItems().forEach(function(e) {
                    if (e.attachmentIds.length > 0) {
                        var n = Object.keys(c).length;
                        e.attachmentIds.forEach(function(e) {
                            return c[e] = !0
                        }), n === Object.keys(c).length && t.removeFileSyncItem(e)
                    }
                })
            }
            this.fileSyncCursor = e.cursor, this.needsToRefreshFileSyncCache = !0
        }, t.prototype.onReceiveRawRelatedActivitiesByKey = function(e) {
            var t = this;
            this.waitForAttachmentStoreDispatcher();
            var n = Object.keys(e.rawRelatedActivitiesByKey || {});
            n.length && this.clearFederatedCache(), this.getFileSyncRecentItemsByAttachmentIds(n).forEach(function(e) {
                var n = e.id,
                    r = t.fileSyncRecentItemIdToRecentItem[n];
                if (r) {
                    var i = r.attachmentIds;
                    if (i && i.length) {
                        var o = u.getAttachmentStore().getById(i[0]);
                        if (o && o.isLoaded) {
                            var a = o.fqPath || "";
                            i.slice(1).forEach(function(e) {
                                var t = u.getAttachmentStore().getById(e);
                                if (t.isLoaded) {
                                    var n = t.fqPath || "";
                                    n.split("/").length < a.split("/").length && (a = n)
                                }
                            });
                            var s = a.split("/"),
                                l = s[s.length - 2];
                            t.updateFileSyncItem(r, {
                                fqPath: a,
                                paths: c.getPathsByFqPath(a, r.viewingUserId),
                                contextDisplayName: l || r.contextDisplayName
                            }), o.displayType || (o.displayType = r.displayType)
                        }
                    }
                }
            })
        }, t.prototype.onRawRelatedActivityParseError = function(e) {
            this.getFileSyncRecentItemsByAttachmentIds(r.map(e.errors, "activityKey")).forEach(this.removeFileSyncItem)
        }, t.prototype.onDeleteFilesPending = function(e) {
            this.waitForAttachmentStoreDispatcher();
            var t = this.deleteAttachments(e.attachmentIds);
            t && (this.fileSyncTransactionIdToRestoreData[e.transactionId] = t)
        }, t.prototype.onDeleteFilesRollback = function(e) {
            this.waitForAttachmentStoreDispatcher();
            var t = this.fileSyncTransactionIdToRestoreData[e.transactionId];
            m.assert(!!t, "Unable to find data for transaction with id: " + e.transactionId), delete this.fileSyncTransactionIdToRestoreData[e.transactionId], this.rollbackDelete(t)
        }, t.prototype.onSetActiveFilters = function(e) {
            e.activeFilters !== this.activeFilters && (this.activeFilters = e.activeFilters, this.cachedProcessedRecentItems = null)
        }, t.prototype.onRefreshRecentActivities = function() {
            this.getUnprocessedRecentItems(), this.didReceiveRawRecentActivities = !1, this.didRecievePaperItems = !1
        }, t.prototype.deleteAttachments = function(e) {
            var t = null;
            if (e.length) {
                var n = this.getFileSyncRecentItemsByAttachmentIds([e[0]])[0];
                if (n) {
                    var i = r.difference(n.attachmentIds, e);
                    this.updateFileSyncItem(n, {
                        attachmentIds: i
                    }), t = {
                        deletedAttachmentIds: e,
                        item: n
                    }, 0 === i.length && this.removeFileSyncItem(n)
                }
            }
            return t
        }, t.prototype.rollbackDelete = function(e) {
            var t, n = this.fileSyncRecentItemIdToRecentItem[e.item.id];
            n ? t = n.attachmentIds : (n = e.item, t = []), this.updateFileSyncItem(n, {
                attachmentIds: r.uniq(t.concat.apply(t, e.deletedAttachmentIds))
            })
        }, t.prototype.getCachedAttachmentIdToIdToFileSyncItem = function() {
            var e = this;
            return this.fileSyncCache.attachmentIdToIdToItem || (this.fileSyncCache.attachmentIdToIdToItem = {}, this.fileSyncCache.items.forEach(function(t) {
                return t.attachmentIds.forEach(function(n) {
                    var r;
                    e.fileSyncCache.attachmentIdToIdToItem[n] ? e.fileSyncCache.attachmentIdToIdToItem[n][t.id] = t : e.fileSyncCache.attachmentIdToIdToItem[n] = (r = {}, r[t.id] = t, r)
                })
            })), this.fileSyncCache.attachmentIdToIdToItem
        }, t.prototype.getFileSyncRecentItemsByAttachmentIds = function(e) {
            var t = this.getCachedAttachmentIdToIdToFileSyncItem(),
                n = {};
            return e.forEach(function(e) {
                t.hasOwnProperty(e) && r.values(t[e]).forEach(function(e) {
                    return n[e.id] = e
                })
            }), r.values(n)
        }, t.prototype.waitForAttachmentStoreDispatcher = function() {
            this.getDispatcher().waitFor([u.getAttachmentStore().getDispatchToken()])
        }, t.prototype.updateFileSyncItem = function(e, t) {
            this.addFileSyncItem(l.getMutatedOrOriginal(e, t))
        }, t.prototype.onArchivePaperDocumentPending = function(e) {
            this.paperActivityKeyToPendingArchiving[e] = !0
        }, t.prototype.onArchivePaperDocumentCommit = function(e) {
            this.deletePendingArchive(e), this.paperStream = this.paperStream.getStreamWithoutActivityKey(e), this.clearFederatedCache()
        }, t.prototype.onArchivePaperDocumentRollback = function(e) {
            this.deletePendingArchive(e)
        }, t.prototype.deletePendingArchive = function(e) {
            this.paperActivityKeyToPendingArchiving[e] && delete this.paperActivityKeyToPendingArchiving[e]
        }, t.prototype.onReceivePaperRecentItems = function(e, t, n) {
            this.didRecievePaperItems = !0;
            var r = p.Viewer.get_viewer().get_user_by_id(n),
                i = e.map(function(e, t) {
                    return o.createRecentItemFromPaperRecentItem(e, r, t)
                });
            this.paperStream = new _.RecentActivityStream(i, t), h.waitForHomeTTI().then(function(t) {
                return t.setStarredStatusOfPaperRecentItems(e)
            }), this.clearFederatedCache()
        }, t.prototype.clearFederatedCache = function() {
            this.cachedFederatedRecentItems && this.didReceiveItemsFromAllStreams() && (this.__emitChange(), this.cachedFederatedRecentItems = null, this.cachedFederatedTruncatedRecentItems = null, this.cachedProcessedRecentItems = null, this.cachedAvailableFilters = null)
        }, t.prototype.cacheTruncatedFederatedRecentItems = function() {
            this.cachedFederatedRecentItems ? this.cachedFederatedTruncatedRecentItems = this.cachedFederatedRecentItems.slice(0, this.federatedRecentItemsCountMax) : this.getUnprocessedRecentItems()
        }, t.prototype.getUnprocessedRecentItems = function() {
            if (null === this.cachedFederatedRecentItems) {
                var e = [this.paperStream, new _.RecentActivityStream(this.getSortedFileSyncRecentItems(), !!this.fileSyncCursor)];
                this.cachedFederatedRecentItems = _.getMergedRecentItems(e), this.cacheTruncatedFederatedRecentItems()
            }
            return this.cachedFederatedTruncatedRecentItems
        }, t.prototype.getFileSyncCursor = function() {
            return this.fileSyncCursor
        }, t.prototype.canArchiveActivityKey = function(e) {
            if (this.paperStream && !this.paperActivityKeyToPendingArchiving[e]) {
                var t = this.paperStream.getRecentItemByActivityKey(e);
                return !(!t || !t.federatedRecentItem.isArchiveable())
            }
            return !1
        }, t.prototype.didReceiveItemsFromAllStreams = function() {
            return this.didRecievePaperItems && this.didReceiveRawRecentActivities
        }, t.prototype.getRecentItemsAndFilterData = function() {
            if (null === this.cachedProcessedRecentItems || null === this.cachedAvailableFilters) {
                var e = this.getUnprocessedRecentItems();
                null === this.cachedAvailableFilters && (this.cachedAvailableFilters = this.getAvailableFiltersFromSourceItems(e)), null === this.cachedProcessedRecentItems && (this.activeFilters = r.intersection(this.activeFilters, this.cachedAvailableFilters), this.cachedProcessedRecentItems = this.getProcessedRecentItems(e, this.activeFilters))
            }
            return {
                items: this.cachedProcessedRecentItems,
                availableFilters: this.cachedAvailableFilters,
                activeFilters: this.activeFilters
            }
        }, t.prototype.didTruncateRecentItems = function() {
            return !!(this.cachedFederatedRecentItems && this.cachedFederatedTruncatedRecentItems && this.cachedFederatedTruncatedRecentItems.length < this.cachedFederatedRecentItems.length)
        }, t
    })(I.FluxStore);
    t.RecentActivityStore = S;
    var R = null;
    t.getRecentActivityStore = g
}), define("modules/clean/react/home/recents/utils/events", ["require", "exports", "tslib", "external/lodash", "external/react-dom", "modules/clean/react/home/recents/recent_activity_constants", "modules/clean/react/home/util/logging/activity_logger", "modules/clean/react/home/resource_id_types"], function(e, t, n, r, i, o, a, s) {
    "use strict";

    function c(e, t, n, r, i) {
        var o = f(e, t, n, r, i);
        return a.homeActivityLogger.logRecentsAction(o.actionTaken, o.scope, o.itemNumber, o.sprite, o.fileDetails.displayType || "", !!o.fileDetails.isDir, o.subgroupPosition, o.fileDetails.idType, o.fileDetails.resourceId)
    }

    function l(e, t, n) {
        var r = i.findDOMNode(t),
            s = n.getIdTypePair();
        return a.homeActivityLogger.logRecentsAction(e, o.ActionScope.SINGLE, d(r), n.getIcon(), n.getDisplayType(), n.getIsDir(), _(o.ActionScope.SINGLE, 0, t, r), s.type, s.id)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), i = n.__importStar(i);
    var u = function(e, t) {
            return 1 === e ? o.ActionScope.SINGLE : t.length === e ? o.ActionScope.AGGREGATION : o.ActionScope.SUBSET
        },
        d = function(e) {
            return e ? Array.prototype.indexOf.call(e.parentNode.childNodes, e) : 0
        },
        m = function(e, t, n, r) {
            if (e === o.ActionScope.AGGREGATION || t === o.ActionType.COLLAPSE || t === o.ActionType.UNCOLLAPSE) return {};
            var i = n[r];
            if (!i) return {};
            for (var a = 0, c = ["PAPER", "EXTERNAL"]; a < c.length; a++) {
                var l = c[a];
                if (i.displayType && i.displayType.indexOf(l) >= 0) return {
                    idType: void 0,
                    resourceId: void 0
                }
            }
            return {
                idType: s.HOME_RESOURCE_ID_TYPE.FQ_PATH,
                resourceId: i.fqPath,
                displayType: i.displayType,
                isDir: i.isDir
            }
        },
        _ = function(e, t, n, r) {
            return e === o.ActionScope.AGGREGATION ? n.props.recentItem ? 0 : t + 1 : e === o.ActionScope.SUBSET ? r.classList.contains("recents-item") ? 0 : 1 : 0
        },
        h = function(e) {
            return r.filter(e, function(e) {
                return !!e.fqPath
            })
        },
        p = function(e) {
            return r.map(e, function(e) {
                return e.fqPath
            })
        },
        E = function(e, t) {
            var n = e[t];
            return n && n.previewInfo ? n.previewInfo.icon : ""
        },
        f = function(e, t, n, r, o) {
            var a = h(n),
                s = p(a),
                c = i.findDOMNode(t),
                l = u(r, s),
                f = E(n, o || 0);
            return {
                actionTaken: e,
                scope: l,
                itemNumber: d(c),
                fileDetails: m(l, e, a, o || 0),
                sprite: f,
                subgroupPosition: _(l, o || 0, t, c)
            }
        };
    t.logEvent = c, t.logFederatedItemEvent = l
}), define("modules/clean/react/home/resource/store", ["require", "exports", "tslib", "modules/clean/flux/dispatcher", "modules/clean/react/home/constants", "modules/clean/react/starred/constants", "modules/clean/react/starred/id_type_pair", "modules/clean/flux/flux_store"], function(e, t, n, r, i, o, a, s) {
    "use strict";

    function c() {
        return null === u && (u = new l), u
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = (function(e) {
        function t() {
            var t = e.call(this, r.Dispatcher) || this;
            return t.pendingPreviewResourceId = null, t.resourceIdToFile = {}, t.fileToPreview = null, t.resourceIdToEquivalentResourceId = {}, t
        }
        return n.__extends(t, e), t.prototype.getFileToPreview = function() {
            return this.fileToPreview
        }, t.prototype.emitIfPendingFileExists = function() {
            if (null !== this.pendingPreviewResourceId) {
                var e = this.resourceIdToEquivalentResourceId[this.pendingPreviewResourceId] || this.pendingPreviewResourceId;
                this.fileToPreview = this.resourceIdToFile[this.pendingPreviewResourceId] || this.resourceIdToFile[e] || null, null !== this.fileToPreview && (this.pendingPreviewResourceId = null, this.__emitChange())
            }
        }, t.prototype.onRequestPreview = function(e) {
            this.pendingPreviewResourceId = e, this.emitIfPendingFileExists()
        }, t.prototype.onReceivedResourceIdToFile = function(e) {
            this.resourceIdToFile = n.__assign({}, this.resourceIdToFile, e), this.emitIfPendingFileExists()
        }, t.prototype.onStarredSetStatus = function(e) {
            var t = this;
            e.forEach(function(e) {
                if (e.canonicalIdTypePair) {
                    var n = a.idTypePairToString(e.idTypePair),
                        r = a.idTypePairToString(e.canonicalIdTypePair);
                    n !== r && (t.resourceIdToEquivalentResourceId[r] = n, t.resourceIdToEquivalentResourceId[n] = r)
                }
            }), this.emitIfPendingFileExists()
        }, t.prototype.__onDispatch = function(e) {
            var t = e.action;
            switch (t.type) {
                case i.HomeResourceStoreActionTypes.REQUEST_PREVIEW:
                    this.onRequestPreview(t.resourceId);
                    break;
                case i.HomeResourceStoreActionTypes.RECEIVED_RESOURCE_ID_TO_FILE:
                    this.onReceivedResourceIdToFile(t.resourceIdToFile);
                    break;
                case o.StarredActionTypes.SET_STATUS:
                    this.onStarredSetStatus(t.starredStatuses)
            }
        }, t
    })(s.FluxStore);
    t.HomeResourceStore = l;
    var u = null;
    t.getHomeResourceStore = c
}), define("modules/clean/react/home/resource_id_types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.ENCODED_FILE_OBJ_ID = "ENCODED_FILE_OBJ_ID", e.FQ_PATH = "FQ_PATH", e.PAPER_DOCUMENT_ID = "PAPER_DOCUMENT_ID", e.PAPER_FOLDER_ID = "PAPER_FOLDER_ID", e.PAPER_DOCUMENT_ID_PATH = "PAPER_DOCUMENT_ID_PATH", e.PAPER_FOLDER_ID_PATH = "PAPER_FOLDER_ID_PATH", e.EXTERNAL_RESOURCE_ID = "EXTERNAL_RESOURCE_ID", e.UNKNOWN = "UNKNOWN"
    })(t.HOME_RESOURCE_ID_TYPE || (t.HOME_RESOURCE_ID_TYPE = {}))
}), define("modules/clean/react/home/roots/home_access_main", ["require", "exports", "tslib", "react", "external/classnames", "modules/clean/react/home/constants", "modules/clean/react/home/store", "modules/clean/react/home/util/conditional_components", "modules/clean/react/home/util/post_tti_components", "modules/clean/react/home/recents/components/recent_activity_container", "modules/clean/react/home/post_tti/api", "modules/clean/react/home/util/logging/availability_logger", "modules/clean/react/retrieval_success_banner/constants", "modules/clean/react/retrieval_success_banner/util"], function(e, t, n, r, i, o, a, s, c, l, u, d, m, _) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), i = n.__importDefault(i);
    var h = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.outerFrame = function(e) {
                n.element = e
            }, n.updateWidth = function() {
                n.setState({
                    containerWidth: n.getWidth()
                })
            }, n.onResize = function() {
                window.requestAnimationFrame ? window.requestAnimationFrame(n.updateWidth) : setTimeout(n.updateWidth, 250)
            }, n.onHomeStoreUpdate = function() {
                return n.setState(n.getStateFromStore())
            }, n.state = n.getStateFromStore(), n.removeStoreListeners = a.getHomeStore().addListener(n.onHomeStoreUpdate), n.getStateFromStore().expSearchSuccessBanner && _.setupSearchSuccessBannerForHome(), n
        }
        return n.__extends(t, e), t.prototype.componentWillMount = function() {
            u.waitForHomeTTIWithProps().then(function(e) {
                var t = e.props;
                return e.imports.initHomeOnboarding(t.onboardingData)
            })
        }, t.prototype.componentDidMount = function() {
            this.updateWidth(), window.addEventListener("resize", this.onResize)
        }, t.prototype.componentWillUnmount = function() {
            this.removeStoreListeners && this.removeStoreListeners()
        }, t.prototype.getStateFromStore = function() {
            var e = a.getHomeStore(),
                t = e.getPreTTIProps().expSearchSuccessBanner;
            return {
                sectionVisibility: e.getSectionVisibility(),
                canRenderAllHomeSections: e.canRenderAllHomeSections(),
                canRenderItems: e.canRenderItems(),
                containerWidth: this.getWidth(),
                expSearchSuccessBanner: t
            }
        }, t.prototype.getWidth = function() {
            var e = 1;
            return this.element && this.element.getBoundingClientRect && (e = this.element.getBoundingClientRect().width || 1), e
        }, t.prototype.render = function() {
            var e = this.state,
                t = e.canRenderAllHomeSections,
                n = e.sectionVisibility,
                u = e.canRenderItems,
                _ = this.props.now;
            if (t) {
                var h = a.getHomeStore().getPreTTIProps(),
                    p = h.shouldDemoteSuggestSection,
                    E = h.shouldRenderSectionsTogetherWithCss,
                    f = h.shouldMarkRecentsTtiIfOffScreen,
                    T = i.default({
                        "home-access-sections": !0,
                        "home-access-sections-hidden": E && !u
                    }),
                    I = u || E,
                    g = r.default.createElement(s.ConditionalSuggestView, {
                        isHiddenByUser: !n[o.HomeSections.SUGGEST],
                        isSectionDemoted: p,
                        containerWidth: this.state.containerWidth,
                        canRenderItems: I,
                        homeAvailabilityLogger: d.getHomeAvailabilityLogger()
                    });
                return r.default.createElement("div", {
                    className: "home",
                    ref: this.outerFrame
                }, r.default.createElement("main", {
                    className: "home-access",
                    role: "main"
                }, r.default.createElement("ul", {
                    className: T,
                    ref: "main"
                }, r.default.createElement(c.PostTTIRetrievalSuccessHomeBanner, {
                    user: a.getUser(),
                    displayContext: m.SearchSuccessDisplayContext.IN_EMBEDDED_APP,
                    expSearchSuccessBanner: this.getStateFromStore().expSearchSuccessBanner
                }), r.default.createElement(c.PostTTIChecklistBanner, {
                    user: a.getUser()
                }), r.default.createElement(c.PostTTITeamInsightsHomeBanner, null), r.default.createElement(c.PrototypePostTTICalendarSection, null), r.default.createElement(c.PostTTIHomeBannerManager, {
                    installDesktopClientBanner: r.default.createElement(c.PostTTIClientEligibleAdminsBanner, {
                        user: a.getUser()
                    }),
                    homeAccessBanner: r.default.createElement(c.PostTTIHomeAccessBanner, null)
                }), r.default.createElement(c.PostTTIMontanaIPAModal, {
                    user: a.getUser()
                }), r.default.createElement(c.PostTTIRecommendedMembers, null), p ? null : g, r.default.createElement(s.ConditionalHomeAccessUnread, {
                    now: _,
                    isHiddenByUser: !n[o.HomeSections.UNREAD],
                    canRenderItems: I
                }), r.default.createElement(s.ConditionalStarredView, {
                    isHiddenByUser: !n[o.HomeSections.STARRED],
                    canRenderItems: I
                }), r.default.createElement(l.RecentActivityContainer, {
                    now: _,
                    canRenderItems: I,
                    isHiddenByUser: !n[o.HomeSections.RECENTS],
                    shouldMarkTTIIfOffScreen: f,
                    suggestSection: p ? g : null
                }))))
            }
            return r.default.createElement("div", {
                ref: this.outerFrame
            })
        }, t.displayName = "HomeAccessMain", t.defaultProps = {
            showUnreadOnboarding: !1
        }, t
    })(r.default.PureComponent);
    t.HomeAccessMain = h
}), define("modules/clean/react/home/roots/home_access_web", ["require", "exports", "tslib", "react", "modules/clean/flux/dispatcher", "modules/clean/react/home/roots/home_access_main", "modules/clean/react/home/roots/sidebar", "modules/clean/react/home/resource/store", "modules/clean/react/home/store", "modules/clean/react/home/constants", "modules/clean/react/home/util/logging/timing_logger", "modules/clean/react/maestro/header", "modules/clean/react/maestro/search", "modules/clean/react/home/post_tti/api", "modules/clean/react/home/util/conditional_api", "modules/core/i18n", "modules/clean/web_timing_logger", "modules/clean/react/home/recents/stores/recent_activity_store"], function(e, t, n, r, i, o, a, s, c, l, u, d, m, _, h, p, E, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r);
    var T = (function(e) {
        function t(n) {
            var i = e.call(this, n) || this;
            i.intervalHandle = null, i.renderSidebar = function(e) {
                return r.default.createElement(a.HomeSidebar, {
                    isPostTTI: i.state.isPostTTI,
                    responsive: e
                })
            }, E.log_js_modules_application_code_start();
            var o = n.preTTIProps,
                s = n.initialRole,
                c = n.initialSectionVisibility,
                l = n.sectionToConditionalData;
            return t.initializeHomeStores(s, c, l, o), i.state = {
                now: new Date,
                isPostTTI: !1
            }, i
        }
        return n.__extends(t, e), t.initializeHomeStores = function(e, t, n, r) {
            u.homeTimingLogger.activate(), c.getHomeStore(), i.Dispatcher.dispatch({
                type: l.HomeActionTypes.INITIALIZE_STORE,
                payload: {
                    role: e,
                    sectionVisibility: t,
                    preTTIProps: r,
                    sectionToConditionalData: n
                }
            }), s.getHomeResourceStore(), f.getRecentActivityStore(), h.waitForStarred(function(e) {
                return e.getStarredResourceStore()
            })
        }, t.prototype.componentDidMount = function() {
            var e = this;
            _.waitForHomeTTIWithProps().then(function(t) {
                var n = t.imports,
                    r = t.props;
                e.setState({
                    searchBarExperiments: r.searchBarExperiments,
                    isPostTTI: !0
                }), e.intervalHandle = setInterval(function() {
                    return e.setState({
                        now: new Date
                    })
                }, 6e4), n.homeAccessWebComponentDidMount(r.renderSnapEngage, r.maybeRenderTeamAdminModals)
            })
        }, t.prototype.componentWillUnmount = function() {
            null != this.intervalHandle && clearInterval(this.intervalHandle)
        }, t.prototype.render = function() {
            var e = this.state,
                t = e.searchBarExperiments,
                n = e.now,
                i = t && !!t.expSearchDetailsPaneVariants && "OFF" !== t.expSearchDetailsPaneVariants;
            return r.default.createElement(m.SearchChrome, {
                user: c.getUser(),
                embeddedAppRegion: r.default.createElement(o.HomeAccessMain, {
                    now: n
                }),
                titleRegion: r.default.createElement(d.MaestroHeaderTitle, null, p._("Home")),
                actionSidebarRegion: this.renderSidebar,
                searchBarProps: {
                    searchBarExperiments: t,
                    expUniversalSinglePageSearch: !0
                },
                wideSecondarySidebar: i
            })
        }, t.displayName = "HomeAccessWeb", t
    })(r.default.PureComponent);
    t.HomeAccessWeb = T, t.RootComponent = function(e) {
        return r.default.createElement(T, n.__assign({}, e))
    }
}), define("modules/clean/react/home/roots/sidebar", ["require", "exports", "tslib", "modules/core/browser_detection", "react", "modules/core/i18n", "external/lodash", "modules/clean/css", "modules/clean/react/app_actions_view", "modules/clean/react/file_uploader/file_uploader", "modules/clean/react/home/actions", "modules/clean/react/home/post_tti/api", "modules/clean/react/home/constants", "modules/clean/react/home/util/logging/activity_logger", "modules/clean/react/home/recents/actions/recent_activity_actions", "modules/clean/sharing/wizard/async_wizard_modals", "modules/clean/react/home/store", "modules/clean/web_user_action_events"], function(e, t, n, r, i, o, a, s, c, l, u, d, m, _, h, p, E, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = n.__importDefault(i), a = n.__importStar(a);
    var T = (function(t) {
        function T(e) {
            var r = t.call(this, e) || this;
            r.onHomeStoreUpdate = function() {
                r.setState({
                    isFileViewerOpen: E.getHomeStore().getIsFileViewerOpen()
                })
            }, r.handleUploadFiles = function() {
                l.FileUploaderController.handleUploadButtonClick(!1), _.homeActivityLogger.logClickRightMenu(m.LoggingTypes.CLICK_UPLOAD_FILES)
            }, r.handleUploadFolder = function() {
                l.FileUploaderController.handleUploadButtonClick(!0)
            }, r.handleCreateSharedFolder = function() {
                return n.__awaiter(r, void 0, void 0, function() {
                    return n.__generator(this, function(e) {
                        return p.asyncShowShareAFolderWizardModal(E.getUser(), function(e) {
                            _.homeActivityLogger.logClickRightMenu(m.LoggingTypes.CLICK_NEW_SHARED_FOLDER, e)
                        }), [2]
                    })
                })
            }, r.handleCreatePaperDoc = function() {
                u.HomeActions.createPaperDocInNewTab(E.getUserId()), _.homeActivityLogger.logClickRightMenu(m.LoggingTypes.CLICK_CREATE_PAPER_DOC)
            }, r.onFileUploadComplete = a.throttle(h.refreshRecentItems, 3500, {
                leading: !1,
                trailing: !0
            });
            var i = E.getHomeStore().getPreTTIProps(),
                o = i.uploaderExperiments,
                s = i.expNewFileMenuPrimary;
            return r.state = {
                uploaderExperiments: o,
                newFileMenuPostTTI: void 0,
                expNewFileMenuPrimary: s,
                showLegacyCreatePaperButton: !1,
                isFileViewerOpen: E.getHomeStore().getIsFileViewerOpen()
            }, r.removeStoreListeners = E.getHomeStore().addListener(r.onHomeStoreUpdate), r
        }
        return n.__extends(T, t), T.prototype.componentDidMount = function() {
            var e = this;
            l.FileUploaderController.setUser(E.getUser()), d.waitForHomeTTIWithProps().then(function(t) {
                var r = t.props,
                    i = t.imports;
                return n.__awaiter(e, void 0, void 0, function() {
                    var e, t, o;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return l.FileUploaderController.loadCoreComponent(), s.require_css("/static/css/upload-vflLVLSa5.css"), e = r.uploaderPostTTIExperiments, t = r.showLegacyCreatePaperButton, [4, i.getNewFileMenu(r)];
                            case 1:
                                return o = n.sent(), this.setState({
                                    uploaderPostTTIExperiments: e,
                                    newFileMenuPostTTI: o,
                                    showLegacyCreatePaperButton: t
                                }), [2]
                        }
                    })
                })
            })
        }, T.prototype.componentWillUnmount = function() {
            this.removeStoreListeners && this.removeStoreListeners()
        }, T.prototype.getPath = function() {
            var e = E.getUser(),
                t = e.is_cdm_member,
                n = e.cdm_tmf_path;
            return t ? n : "/"
        }, T.prototype.render = function() {
            var t, a = {
                    displayName: o._("Create new file"),
                    className: "action-create-file-primary-pretti",
                    handleClick: function() {},
                    subItems: void 0
                },
                s = {
                    displayName: o._("Create new file"),
                    iconName: "create",
                    className: "action-create-file-pretti",
                    handleClick: function() {}
                },
                u = {
                    displayName: o._("New shared folder"),
                    iconName: "new-shared-folder",
                    className: "action-new-shared-folder",
                    handleClick: this.handleCreateSharedFolder
                },
                d = {
                    displayName: o._("Upload files"),
                    popoverMenuName: o._("Files"),
                    handleClick: this.handleUploadFiles,
                    className: "action-upload-files",
                    iconName: "upload-file"
                },
                m = {
                    displayName: o._("Upload folder"),
                    popoverMenuName: o._("Folder"),
                    handleClick: this.handleUploadFolder,
                    className: "action-upload-folder",
                    iconName: "upload-folder"
                },
                _ = {
                    displayName: o._("Create Paper doc"),
                    iconName: "new-paper-doc",
                    className: "action-new-paper-doc",
                    handleClick: this.handleCreatePaperDoc
                },
                h = [];
            if (this.state.expNewFileMenuPrimary) t = this.state.newFileMenuPostTTI ? this.state.newFileMenuPostTTI : a, h.push(d), h.push(m), h.push(u), this.state.showLegacyCreatePaperButton && h.push(_);
            else {
                var p = r.is_input_webkitdirectory_supported() ? {
                    displayName: o._("Upload"),
                    handleClick: function() {
                        new Promise(function(t, n) {
                            e(["modules/clean/react/file_uploader/action_logger"], t, n)
                        }).then(n.__importStar).then(function(e) {
                            return e.logUploadAction(E.getUser().id, f.WebUserActionLogEvent.UPLOAD_CLICK)
                        })
                    },
                    subItems: [d, m]
                } : {
                    displayName: o._("Upload files"),
                    handleClick: this.handleUploadFiles,
                    subItems: void 0
                };
                t = {
                    displayName: p.displayName,
                    handleClick: p.handleClick,
                    className: "action-upload",
                    iconName: "upload",
                    subItems: p.subItems
                }, h.push(u), this.state.showLegacyCreatePaperButton && h.push(_), this.state.newFileMenuPostTTI ? h.push(this.state.newFileMenuPostTTI) : h.push(s)
            }
            return i.default.createElement("div", {
                className: "home-access-sidebar"
            }, !this.state.isFileViewerOpen && i.default.createElement(l.FileUploaderController, {
                loadOnRender: this.props.isPostTTI,
                needToSetStoreValues: !0,
                chooseDestination: !0,
                dragAndDropEnabled: !0,
                initialPermission: !0,
                initialPath: this.getPath(),
                onFileUploadComplete: this.onFileUploadComplete,
                uploaderExperiments: this.state.uploaderExperiments,
                uploaderPostTTIExperiments: this.state.uploaderPostTTIExperiments
            }), i.default.createElement(c.AppActionsView, {
                responsive: this.props.responsive,
                primaryMenuItems: [t],
                secondaryMenuItems: h,
                popoverTriggerLabel: o._("Actions")
            }))
        }, T
    })(i.default.PureComponent);
    t.HomeSidebar = T
}), define("modules/clean/react/home/section_header", ["require", "exports", "tslib", "react", "modules/clean/user_education/react/user_education_effect", "spectrum/button"], function(e, t, n, r, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), t.SectionHeaderTitle = function(e) {
        var t = e.title,
            n = e.ueName;
        return r.default.createElement(i.UserEducationEffect, {
            containerName: "home-section-header",
            name: n
        }, t)
    }, t.SectionShowHideButton = function(e) {
        var t = e.buttonText,
            n = e.buttonAction;
        return n && t ? r.default.createElement(o.Button, {
            variant: "styleless",
            className: "button-as-link show-hide-section-button",
            onClick: n
        }, t) : null
    }, t.SectionHeader = function(e) {
        var n = e.title,
            i = e.ueName,
            o = e.buttonText,
            a = e.buttonAction,
            s = e.infoIcon;
        return r.default.createElement("h2", {
            className: "home-access-section__header"
        }, r.default.createElement("div", {
            className: "home-access-section__title"
        }, r.default.createElement("div", {
            className: "home-access-section__title-text"
        }, r.default.createElement(t.SectionHeaderTitle, {
            title: n,
            ueName: i
        })), s ? r.default.createElement("span", {
            className: "info-icon"
        }, s) : null), r.default.createElement("div", {
            className: "home-section-header__button"
        }, r.default.createElement(t.SectionShowHideButton, {
            buttonAction: a,
            buttonText: o
        })))
    }
}), define("modules/clean/react/home/starred/starred_and_tasks_empty_layout", ["require", "exports", "tslib", "react", "modules/clean/react/home/starred/starred_empty_state", "modules/clean/react/home/starred/starred_and_tasks_layout"], function(e, t, n, r, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), t.StarredAndTasksEmptyLayout = function(e) {
        var t = e.isHiddenByUser;
        return r.default.createElement(o.StarredAndTasksLayout, {
            starredComponent: i.StarredEmptyState,
            isHiddenByUser: t,
            itemModels: [],
            canShowSpinner: !1,
            hasMore: !1,
            hasLoadedInitial: !1
        })
    }
}), define("modules/clean/react/home/starred/starred_and_tasks_layout", ["require", "exports", "tslib", "react", "modules/core/i18n", "spectrum/tabbed_header", "modules/clean/react/home/section_header", "modules/clean/react/home/store", "modules/clean/react/home/util/post_tti_components", "modules/clean/react/home/tasks/tab", "modules/clean/react/home/constants", "modules/clean/flux/dispatcher", "modules/clean/react/home/actions", "modules/clean/react/home/util/logging/activity_logger"], function(e, t, n, r, i, o, a, s, c, l, u, d, m, _) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), t.STARRED_HEADER_TITLE = i._("Starred", {
        comment: "Home's starred section"
    });
    var h = (function(e) {
        function h(t) {
            var r = e.call(this, t) || this;
            return r.updateStateFromStore = function() {
                return r.setState(r.getStateFromStore())
            }, r.getStateFromStore = function() {
                return {
                    activeTabId: s.getHomeStore().getActiveTabId()
                }
            }, r.selectTab = function(e) {
                return n.__awaiter(r, void 0, void 0, function() {
                    return n.__generator(this, function(t) {
                        return [2, d.Dispatcher.dispatch({
                            type: u.HomeActionTypes.SET_TAB_ID,
                            payload: {
                                activeTabId: e
                            }
                        })]
                    })
                })
            }, r.onChangeVisibility = function() {
                var e = r.props.isHiddenByUser;
                m.HomeActions.setSectionVisibility(s.getUserId(), {
                    ".tag": "starred"
                }, e), _.homeActivityLogger.logShowHideSection(u.HomeSections.STARRED, !e)
            }, r.state = r.getStateFromStore(), r.removeListener = s.getHomeStore().addListener(r.updateStateFromStore), r
        }
        return n.__extends(h, e), h.prototype.componentWillUnmount = function() {
            this.removeListener()
        }, h.prototype.render = function() {
            var e = this.props,
                d = e.isHiddenByUser,
                m = e.starredComponent,
                _ = n.__rest(e, ["isHiddenByUser", "starredComponent"]),
                h = this.state.activeTabId,
                p = m,
                E = d ? i._("Show") : i._("Hide"),
                f = h === u.HomeTabId.STARRED;
            return s.getHomeStore().getPreTTIProps().shouldShowTasksSection ? r.default.createElement("li", {
                className: "home-access-section"
            }, r.default.createElement("div", {
                className: "home-access-section__header tabbed-header"
            }, r.default.createElement(o.TabbedHeader, {
                onSelection: this.selectTab,
                activeTabId: h,
                className: "tabbed-header__content"
            }, r.default.createElement(o.Tab, {
                active: f,
                id: u.HomeTabId.STARRED
            }, r.default.createElement(a.SectionHeaderTitle, {
                title: t.STARRED_HEADER_TITLE,
                ueName: "starred"
            })), r.default.createElement(o.Tab, {
                active: !f,
                id: u.HomeTabId.TASKS
            }, r.default.createElement(l.TasksTab, {
                isHiddenByUser: d
            }))), r.default.createElement(a.SectionShowHideButton, {
                buttonText: E,
                buttonAction: this.onChangeVisibility
            })), d ? null : r.default.createElement("div", {
                className: "tabbed-content"
            }, f ? r.default.createElement(p, n.__assign({}, _)) : r.default.createElement(c.PostTTISHomeTasksSection, null))) : r.default.createElement("li", {
                className: "home-access-section"
            }, r.default.createElement(a.SectionHeader, {
                title: t.STARRED_HEADER_TITLE,
                ueName: "starred",
                buttonText: E,
                buttonAction: this.onChangeVisibility
            }), d ? null : r.default.createElement(p, n.__assign({}, _)))
        }, h.displayName = "StarredAndTasksLayout", h
    })(r.default.PureComponent);
    t.StarredAndTasksLayout = h
}), define("modules/clean/react/home/starred/starred_empty_state", ["require", "exports", "tslib", "react", "modules/core/i18n"], function(e, t, n, r, i) {
    "use strict";

    function o() {
        return r.default.createElement("div", {
            className: "home-access__empty-text starred--empty"
        }, i._("When you star items, they’ll show up here for easy access.") + " ", r.default.createElement("a", {
            href: "/help/desktop-web/star-doc-file-folder",
            target: "_blank",
            rel: "noopener noreferrer"
        }, i._("Learn more")))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), t.StarredEmptyState = o
}), define("modules/clean/react/home/store", ["require", "exports", "tslib", "modules/clean/flux/dispatcher", "external/lodash", "modules/clean/flux/flux_store", "modules/clean/photos/thumb_loading/generic_thumb_store", "modules/clean/react/home/constants", "modules/clean/viewer", "modules/core/exception", "modules/clean/react/home/util/logging/availability_logger_common"], function(e, t, n, r, i, o, a, s, c, l, u) {
    "use strict";

    function d() {
        return null === I && (I = new T), I
    }

    function m() {
        return d().getUser()
    }

    function _() {
        return m().id
    }

    function h() {
        return m().role
    }

    function p(e) {
        var t = {};
        for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
        return t
    }

    function E(e) {
        return !!g[e]
    }

    function f(e) {
        return E(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = n.__importStar(i);
    var T = (function(e) {
        function t() {
            var t = e.call(this, r.Dispatcher) || this;
            return t.handledPrefetches = [], t.activeTabId = s.HomeTabId.STARRED, t.canRenderItems = function() {
                return !!t.pendingPreTTIPrefetches && !t.pendingPreTTIPrefetches.length
            }, t.thumbStore = new a.GenericThumbStore, t.sectionToDidLoadSynchronously = {}, t.sectionToPendingCallbacks = {}, t.preTTIProps = s.DEFAULT_PRE_TTI_PROPS, t
        }
        return n.__extends(t, e), t.prototype.getRole = function() {
            return this.role
        }, t.prototype.getUser = function() {
            return this.user
        }, t.prototype.getThumbStore = function() {
            return this.thumbStore
        }, t.prototype.getSectionVisibility = function() {
            return this.sectionVisibility
        }, t.prototype.getPreTTIProps = function() {
            return this.preTTIProps
        }, t.prototype.getActiveTabId = function() {
            return this.activeTabId
        }, t.prototype.getActiveVariants = function() {
            return this.preTTIProps.activeVariants
        }, t.prototype.getActiveVariant = function(e) {
            return this.getActiveVariants()[e]
        }, t.prototype.executeWhenSectionIsReady = function(e, t, n) {
            var r = this.getSectionLoadingPreference(e);
            return r === s.ConditionalSectionLoadingPreference.DO_NOT_LOAD ? null : r === s.ConditionalSectionLoadingPreference.IMMEDIATE || this.getSectionLoadingMode(e) !== s.ConditionalSectionLoadingMode.UNKNOWN ? n(!0) : (t && (this.sectionToPendingCallbacks[e] ? this.sectionToPendingCallbacks[e].push(n) : this.sectionToPendingCallbacks[e] = [n]), null)
        }, t.prototype.getSectionLoadingPreference = function(e) {
            if (this.sectionToExtendedConditionalData) {
                var t = this.sectionToExtendedConditionalData[e];
                return t ? t.isPostTTI ? s.ConditionalSectionLoadingPreference.POST_TTI : s.ConditionalSectionLoadingPreference.IMMEDIATE : s.ConditionalSectionLoadingPreference.DO_NOT_LOAD
            }
            return s.ConditionalSectionLoadingPreference.UNKNOWN
        }, t.prototype.getSectionLoadingMode = function(e) {
            return this.sectionToExtendedConditionalData && this.sectionToExtendedConditionalData[e] ? this.sectionToExtendedConditionalData[e].loadingMode : s.ConditionalSectionLoadingMode.UNKNOWN
        }, t.prototype.getIsFileViewerOpen = function() {
            return this.isFileViewerOpen
        }, t.prototype.canRenderAllHomeSections = function() {
            return !!this.preTTIProps.shouldRenderWhileConditionalJsIsLoading || (this.sectionToExtendedConditionalData ? i.values(this.sectionToExtendedConditionalData).every(function(e) {
                return !e.isBlocking || (!!e.isPostTTI || e.loadingMode !== s.ConditionalSectionLoadingMode.UNKNOWN)
            }) : (this.role || l.reportStack("Called canRenderAllHomeSections before initialization", {
                severity: l.SEVERITY.NONCRITICAL
            }), !0))
        }, t.prototype.setSectionVisibility = function(e) {
            var t, r = e.section,
                i = e.visible;
            this.sectionVisibility[r] !== i && (this.sectionVisibility = n.__assign({}, this.sectionVisibility, (t = {}, t[r] = i, t)))
        }, t.prototype.setSectionLoadingMode = function(e, t) {
            var r = this.getExtendedConditionalData(e);
            r && (this.sectionToExtendedConditionalData[e] = n.__assign({}, r, {
                loadingMode: t
            }))
        }, t.prototype.getExtendedConditionalData = function(e) {
            return this.sectionToExtendedConditionalData && this.sectionToExtendedConditionalData[e]
        }, t.prototype.onPrefetchReceivedData = function(e) {
            var t = e.homePrefetchType;
            this.handledPrefetches.push(t), this.pendingPreTTIPrefetches && (this.pendingPreTTIPrefetches = i.without(this.pendingPreTTIPrefetches, t), this.pendingPreTTIPrefetches.length || this.__emitChange())
        }, t.prototype.onInitializeStore = function(e) {
            var t = this,
                r = e.role,
                o = e.sectionVisibility,
                a = e.preTTIProps,
                d = e.sectionToConditionalData;
            this.role = r, this.sectionVisibility = o, this.user = c.Viewer.get_viewer().get_user_by_role(r), l.assert(!!this.user, "Could not find user for role " + r), this.preTTIProps = a || this.preTTIProps, this.pendingPreTTIPrefetches = i.without.apply(i, [
                [s.HomePrefetchTypes.RECENTS_JSON].concat(i.compact(i.map(u.HOME_PREFETCH_TYPE_TO_INFO, function(e, t) {
                    var n = e.section;
                    if (d) {
                        var r = d[n];
                        if (r && !r.isPostTTI) return t
                    }
                    return null
                })))
            ].concat(this.handledPrefetches)), this.sectionToExtendedConditionalData = i.mapValues(d, function(e, t) {
                return n.__assign({}, e, {
                    loadingMode: s.ConditionalSectionLoadingMode.UNKNOWN,
                    isBlocking: f(t)
                })
            }), Object.keys(this.sectionToDidLoadSynchronously).forEach(function(e) {
                (0, t.sectionToDidLoadSynchronously[e])(t.getSectionLoadingPreference(e)) && t.setSectionLoadingMode(e, s.ConditionalSectionLoadingMode.SYNCHRONOUS)
            }), this.sectionToDidLoadSynchronously = {}
        }, t.prototype.onDeclareConditionalSection = function(e) {
            var t = e.section,
                n = e.didInitializeSynchronously;
            this.sectionToExtendedConditionalData ? l.reportStack("declared conditional section too late", {
                severity: l.SEVERITY.CRITICAL,
                exc_extra: {
                    section: t
                }
            }) : this.sectionToDidLoadSynchronously[t] ? l.reportStack("Re-declared a conditional section", {
                severity: l.SEVERITY.CRITICAL,
                exc_extra: {
                    section: t
                }
            }) : this.sectionToDidLoadSynchronously[t] = n
        }, t.prototype.onLoadedAsyncConditionalSection = function(e) {
            var t = e.section,
                n = this.getExtendedConditionalData(t);
            n && this.setSectionLoadingMode(t, n.isPostTTI ? s.ConditionalSectionLoadingMode.POST_TTI : s.ConditionalSectionLoadingMode.ASYNCHRONOUS_PRE_TTI), (this.sectionToPendingCallbacks[t] || []).forEach(function(e) {
                return e(!1)
            }), this.sectionToPendingCallbacks[t] = []
        }, t.prototype.onSetTabId = function(e) {
            var t = e.activeTabId;
            this.activeTabId = t
        }, t.prototype.__onDispatch = function(e) {
            var t = e.action;
            switch (t.type) {
                case s.HomeActionTypes.INITIALIZE_STORE:
                    this.onInitializeStore(t.payload), this.__emitChange();
                    break;
                case s.HomeActionTypes.SET_TAB_ID:
                    this.onSetTabId(t.payload), this.__emitChange();
                    break;
                case s.HomeActionTypes.HOME_PREFETCH_RECEIVED_DATA:
                    this.onPrefetchReceivedData(t.payload);
                    break;
                case s.HomeActionTypes.SET_SECTION_VISIBILITY:
                    this.setSectionVisibility(t.payload), this.__emitChange();
                    break;
                case s.HomeActionTypes.DECLARE_CONDITIONAL_SECTION:
                    this.onDeclareConditionalSection(t.payload), this.__emitChange();
                    break;
                case s.HomeActionTypes.LOADED_ASYNC_CONDITIONAL_SECTION:
                    this.onLoadedAsyncConditionalSection(t.payload), this.__emitChange();
                    break;
                case s.HomeActionTypes.OPEN_FILE_VIEWER:
                    this.isFileViewerOpen = !0, this.__emitChange();
                    break;
                case s.HomeActionTypes.CLOSE_FILE_VIEWER:
                    this.isFileViewerOpen = !1, this.__emitChange()
            }
        }, t
    })(o.FluxStore);
    t.PrivateHomeStoreClass = T;
    var I = null;
    t.getHomeStore = d, t.getUser = m, t.getUserId = _, t.getRole = h;
    var g = p(s.HomeSections);
    t.isHomeSection = E, t.isBlockingSection = f
}), define("modules/clean/react/home/tasks/model", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n;
    (function(e) {
        e.FOR_ME = "forMe", e.FOR_OTHERS = "forOthers", e.COMPLETED = "completed"
    })(n = t.TasksFilter || (t.TasksFilter = {}));
    (function(e) {
        e.SET_TASKS_FILTER = "HOME_TASKS_SET_TASKS_FILTER", e.SET_HOME_TASKS_PAYLOAD = "HOME_TASKS_SET_TASKS"
    })(t.HomeTasksActionTypes || (t.HomeTasksActionTypes = {})), t.DEFAULT_TASKS_FILTER = n.FOR_ME
}), define("modules/clean/react/home/tasks/tab", ["require", "exports", "tslib", "react", "external/lodash", "external/classnames", "modules/core/i18n", "spectrum/popover", "modules/clean/react/home/util/section_header_menu_title", "modules/clean/react/home/post_tti/api", "modules/clean/react/home/tasks/model", "modules/clean/react/home/tasks/model"], function(e, t, n, r, i, o, a, s, c, l, u, d) {
    "use strict";
    var m;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), o = n.__importDefault(o);
    var _ = (m = {}, m[u.TasksFilter.FOR_ME] = a._("For Me"), m[u.TasksFilter.FOR_OTHERS] = a._("For Others"), m[u.TasksFilter.COMPLETED] = a._("Completed"), m),
        h = (function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.selectFilter = function(e) {
                    return n.__awaiter(r, void 0, void 0, function() {
                        var t, r, i, o, a = this;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return t = function() {
                                        return a.setState({
                                            filter: e
                                        })
                                    }, t(), [4, l.waitForHomeTTIWithProps()];
                                case 1:
                                    return r = n.sent(), i = r.imports, o = r.props, i.selectTaskFilter({
                                        homeTasksPayload: o.tasks,
                                        filter: e
                                    }, t), [2]
                            }
                        })
                    })
                }, r.state = {
                    filter: d.DEFAULT_TASKS_FILTER
                }, r
            }
            return n.__extends(t, e), t.prototype.render = function() {
                var e = this.props.isHiddenByUser,
                    t = this.state.filter,
                    n = o.default({
                        "tasks-filter-menu--hidden": e
                    });
                return r.default.createElement(c.SectionHeaderMenuTitle, {
                    title: a._("To-do", {
                        comment: "Home's to-do section"
                    }),
                    shouldHideCaret: !0
                }, r.default.createElement(s.Popover, {
                    onSelection: this.selectFilter
                }, r.default.createElement(s.PopoverTrigger, {
                    className: "tasks-filter-menu__trigger"
                }, r.default.createElement(c.CaretDownIcon, null)), r.default.createElement(s.PopoverContent, {
                    className: n
                }, r.default.createElement(s.PopoverItemGroup, null, r.default.createElement(s.PopoverItemGroupTitle, null, a._("Filter")), i.map(u.TasksFilter, function(e) {
                    return r.default.createElement(s.PopoverSelectableItem, {
                        key: e,
                        className: "more-actions-popover-item",
                        value: e,
                        selected: t === e
                    }, _[e])
                })))))
            }, t.displayName = "TasksTab", t
        })(r.default.PureComponent);
    t.TasksTab = h
}), define("modules/clean/react/home/unread/unread_empty_state", ["require", "exports", "tslib", "react", "external/lodash", "modules/core/i18n", "modules/clean/react/home/section_header", "modules/clean/react/home/store"], function(e, t, n, r, i, o, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), t.UnreadHeader = function(e) {
        var t = e.isHiddenByUser ? o._("Show") : o._("Hide");
        return r.default.createElement(a.SectionHeader, {
            title: o._("Unread", {
                comment: "Home's unread section"
            }),
            ueName: "unread",
            buttonText: t,
            buttonAction: e.buttonAction
        })
    }, t.UnreadEmptyState = function() {
        return r.default.createElement("div", {
            className: "home-access__empty-text unread--empty"
        }, o._("When you have unread notifications, they show up here.") + " ", r.default.createElement("a", {
            href: "/help/files-folders/notified-changes",
            target: "_blank",
            rel: "noopener noreferrer"
        }, o._("Learn more")))
    }, t.UnreadEmptyStateWithHeader = function(e) {
        return s.getHomeStore().getPreTTIProps().shouldHideUnreadEmptyState ? r.default.createElement("div", null) : r.default.createElement("li", {
            className: "home-access-section"
        }, r.default.createElement("div", {
            className: "unread"
        }, r.default.createElement(t.UnreadHeader, {
            isHiddenByUser: e.isHiddenByUser,
            buttonAction: i.noop
        }), e.isHiddenByUser ? null : r.default.createElement(t.UnreadEmptyState, null)))
    }
}), define("modules/clean/react/home/util/conditional", ["require", "exports", "tslib", "react", "modules/clean/react/async/loadable", "modules/clean/react/home/post_tti/api", "modules/clean/react/home/store", "modules/clean/react/home/constants", "modules/clean/react/home/util/logging/timing_logger", "modules/core/exception", "modules/clean/flux/dispatcher"], function(e, t, n, r, i, o, a, s, c, l, u) {
    "use strict";

    function d(e) {
        return e ? (e.initPrefetch(), e.componentClass) : null
    }

    function m(e) {
        var m = this,
            _ = e.section,
            h = e.syncLoader,
            p = e.asyncLoader,
            E = e.loading,
            f = null,
            T = s.ConditionalSectionLoadingPreference.UNKNOWN,
            I = function(e) {
                if (T = e, e === s.ConditionalSectionLoadingPreference.UNKNOWN) return !1;
                if (e === s.ConditionalSectionLoadingPreference.DO_NOT_LOAD) return a.isHomeSection(_) && c.homeTimingLogger.logSkippedSection(_), !1;
                var t = e === s.ConditionalSectionLoadingPreference.POST_TTI;
                if (t) a.isHomeSection(_) && c.homeTimingLogger.logSkippedSection(_);
                else {
                    try {
                        f = d(h())
                    } catch (e) {}
                    if (f) return !0
                }
                var l = !t && a.isBlockingSection(_),
                    I = function() {
                        return n.__awaiter(m, void 0, void 0, function() {
                            var e, r;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return t ? [4, o.waitForHomeTTI()] : [3, 2];
                                    case 1:
                                        n.sent(), n.label = 2;
                                    case 2:
                                        return r = d, [4, p()];
                                    case 3:
                                        return e = r.apply(void 0, [n.sent()]), l && (f = e), u.Dispatcher.dispatch({
                                            type: s.HomeActionTypes.LOADED_ASYNC_CONDITIONAL_SECTION,
                                            payload: {
                                                section: _
                                            }
                                        }), [2, e]
                                }
                            })
                        })
                    };
                if (l) I();
                else {
                    var g = E;
                    f = i.Loadable({
                        loader: I,
                        loading: g ? function(e) {
                            return e.canRenderItems ? "function" == typeof g ? r.default.createElement(g, n.__assign({}, e)) : g : null
                        } : void 0
                    })
                }
                return !1
            };
        return a.getHomeStore(), u.Dispatcher.dispatch({
                type: s.HomeActionTypes.DECLARE_CONDITIONAL_SECTION,
                payload: {
                    section: _,
                    didInitializeSynchronously: I
                }
            }),
            function(e) {
                return (T === s.ConditionalSectionLoadingPreference.UNKNOWN || !f && T === s.ConditionalSectionLoadingPreference.IMMEDIATE && a.isBlockingSection(_) && t.IS_PROD && !a.getHomeStore().getPreTTIProps().shouldRenderWhileConditionalJsIsLoading) && l.reportStack("Premature render", {
                    severity: l.SEVERITY.CRITICAL,
                    exc_extra: {
                        section: _,
                        loadingPreference: T,
                        isBlockingSection: a.isBlockingSection(_)
                    }
                }), f ? r.default.createElement(f, n.__assign({}, e)) : null
            }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), t.IS_PROD = !0, t.homeConditionalSection = m
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t
};
define("modules/clean/react/home/util/conditional_api", ["require", "exports", "modules/clean/react/home/store", "modules/clean/react/home/constants"], function(e, t, n, r) {
    "use strict";

    function i(e, r, i, o, a) {
        return void 0 === r && (r = !0), t.sectionToConditionalInterface[i] ? e(t.sectionToConditionalInterface[i]) : n.getHomeStore().executeWhenSectionIsReady(i, r, function(n) {
            if (n && !t.sectionToConditionalInterface[i]) try {
                t.sectionToConditionalInterface[i] = o()
            } catch (e) {}
            return t.sectionToConditionalInterface[i] ? e(t.sectionToConditionalInterface[i]) : (r && a().then(function(n) {
                t.sectionToConditionalInterface[i] = n, e(n)
            }), null)
        })
    }

    function o(t, n) {
        return void 0 === n && (n = !0), i(t, n, r.HomeSections.STARRED, function() {
            return e("modules/clean/react/home/starred/conditional_interface")
        }, function() {
            return new Promise(function(t, n) {
                e(["modules/clean/react/home/starred/conditional_interface"], t, n)
            }).then(__importStar)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.sectionToConditionalInterface = {}, t.waitForSection = i, t.waitForStarred = o
}), define("modules/clean/react/home/util/conditional_components", ["require", "exports", "tslib", "react", "modules/clean/react/home/constants", "modules/clean/react/home/util/conditional", "modules/clean/react/home/starred/starred_and_tasks_empty_layout", "modules/clean/react/home/unread/unread_empty_state", "modules/clean/react/home/content_suggestions/loading", "modules/clean/react/home/post_tti/api"], function(e, t, n, r, i, o, a, s, c, l) {
    "use strict";

    function u(e) {
        return e && {
            componentClass: e.HomeAccessUnread,
            initPrefetch: e.initPrefetch
        }
    }

    function d(e) {
        return e && {
            componentClass: e.StarredView,
            initPrefetch: e.getStarredResourceStore
        }
    }
    var m = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), t.ConditionalHomeAccessUnread = o.homeConditionalSection({
        section: i.HomeSections.UNREAD,
        syncLoader: function() {
            return u(e("modules/clean/react/home/unread/home_access_unread"))
        },
        asyncLoader: function() {
            return new Promise(function(t, n) {
                e(["modules/clean/react/home/unread/home_access_unread"], t, n)
            }).then(n.__importStar).then(function(e) {
                return u(e)
            })
        },
        loading: function(e) {
            return r.default.createElement(s.UnreadEmptyStateWithHeader, n.__assign({}, e))
        }
    }), t.ConditionalStarredView = o.homeConditionalSection({
        section: i.HomeSections.STARRED,
        syncLoader: function() {
            return d(e("modules/clean/react/home/starred/conditional_interface"))
        },
        asyncLoader: function() {
            return new Promise(function(t, n) {
                e(["modules/clean/react/home/starred/conditional_interface"], t, n)
            }).then(n.__importStar).then(function(e) {
                return d(e)
            })
        },
        loading: function(e) {
            return r.default.createElement(a.StarredAndTasksEmptyLayout, n.__assign({}, e))
        }
    }), t.ConditionalSuggestView = o.homeConditionalSection({
        section: i.HomeSections.SUGGEST,
        syncLoader: function() {
            return null
        },
        asyncLoader: function() {
            return n.__awaiter(m, void 0, void 0, function() {
                var e, t, r;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, l.waitForHomeTTI()];
                        case 1:
                            return e = n.sent(), t = e.initPrefetch, r = e.HomeSuggest, [2, {
                                componentClass: r,
                                initPrefetch: t
                            }]
                    }
                })
            })
        },
        loading: function(e) {
            return r.default.createElement(c.SuggestedLoading, n.__assign({}, e))
        }
    })
}), define("modules/clean/react/home/util/logging/activity_logger", ["require", "exports", "modules/clean/react/home/api", "modules/clean/react/home/store", "modules/clean/react/home/constants"], function(e, t, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = (function() {
        function e() {}
        return e.prototype.logClickShowAll = function(e, t) {
            return n.logHomeActivity({
                eventName: i.LoggingTypes.CLICK_SHOW_ALL,
                role: r.getHomeStore().getRole(),
                extra: {
                    component_name: e,
                    should_show_all: t
                }
            })
        }, e.prototype.logHomePageShown = function() {
            return n.logHomeActivity({
                eventName: i.LoggingTypes.HOME_PAGE_SHOWN,
                role: r.getHomeStore().getRole(),
                extra: {}
            })
        }, e.prototype.logStarredShown = function(e, t, o) {
            return n.logHomeActivity({
                eventName: i.LoggingTypes.STARRED_SHOWN,
                role: r.getHomeStore().getRole(),
                extra: {
                    num_items: e,
                    is_hidden: !1,
                    has_hidden_rows: t,
                    has_more: o
                }
            })
        }, e.prototype.logRecentsShown = function(e, t) {
            return n.logHomeActivity({
                eventName: i.LoggingTypes.RECENTS_SHOWN,
                role: r.getHomeStore().getRole(),
                extra: {
                    num_items: e,
                    is_hidden: t
                }
            })
        }, e.prototype.logShowHideSection = function(e, t) {
            return n.logHomeActivity({
                eventName: t ? i.LoggingTypes.HIDE_SECTION : i.LoggingTypes.UNHIDE_SECTION,
                role: r.getHomeStore().getRole(),
                extra: {
                    section_name: e
                }
            })
        }, e.prototype.logRecentsAction = function(e, t, o, a, s, c, l, u, d) {
            var m = {
                action_taken: e,
                scope: t,
                display_type: s,
                is_dir: c,
                item_number: o,
                sprite: a,
                subgroup_position: l
            };
            return u && d && (m.id_type = u, m.resource_id = d), n.logHomeActivity({
                eventName: i.LoggingTypes.RECENTS_ITEM_ACTION,
                role: r.getHomeStore().getRole(),
                extra: m
            })
        }, e.prototype.logClickRecentFiltersMenu = function(e) {
            return n.logHomeActivity({
                eventName: e ? i.LoggingTypes.OPEN_FILTERS_MENU : i.LoggingTypes.CLOSE_FILTERS_MENU,
                role: r.getHomeStore().getRole(),
                extra: {}
            })
        }, e.prototype.logClickResetRecentFiltersMenu = function() {
            return n.logHomeActivity({
                eventName: i.LoggingTypes.RESET_FILTERS_MENU,
                role: r.getHomeStore().getRole(),
                extra: {}
            })
        }, e.prototype.logClickRecentFiltersMenuItem = function(e, t) {
            return n.logHomeActivity({
                eventName: t ? i.LoggingTypes.SELECT_FILTERS_MENU_ITEM : i.LoggingTypes.DESELECT_FILTERS_MENU_ITEM,
                role: r.getHomeStore().getRole(),
                extra: {
                    filter_type: e
                }
            })
        }, e.prototype.logOpenStarredItem = function(e, t, o) {
            return n.logHomeActivity({
                eventName: i.LoggingTypes.OPEN_STARRED_ITEM,
                role: r.getHomeStore().getRole(),
                extra: {
                    resource_id: e,
                    resource_type: t,
                    position: o
                }
            })
        }, e.prototype.logUndoUnstarItem = function(e, t, o) {
            return n.logHomeActivity({
                eventName: i.LoggingTypes.UNDO_UNSTAR_ITEM,
                role: r.getHomeStore().getRole(),
                extra: {
                    resource_id: e,
                    resource_type: t,
                    position: o
                }
            })
        }, e.prototype.logClickStarOverflowMenu = function(e, t, o) {
            return n.logHomeActivity({
                eventName: i.LoggingTypes.CLICK_STAR_OVERFLOW_MENU,
                role: r.getHomeStore().getRole(),
                extra: {
                    resource_id: e,
                    resource_type: t,
                    position: o
                }
            })
        }, e.prototype.logClickStarOverflowShare = function(e, t, o) {
            return n.logHomeActivity({
                eventName: i.LoggingTypes.CLICK_STAR_OVERFLOW_SHARE,
                role: r.getHomeStore().getRole(),
                extra: {
                    resource_id: e,
                    resource_type: t,
                    position: o
                }
            })
        }, e.prototype.logClickRightMenu = function(e, t) {
            var i = t ? {
                modalSessionId: t
            } : {};
            return n.logHomeActivity({
                eventName: e,
                role: r.getHomeStore().getRole(),
                extra: i
            })
        }, e.prototype.logViewUploadedFiles = function(e, t) {
            return n.logHomeActivity({
                eventName: i.LoggingTypes.VIEW_UPLOADED_FILES,
                role: r.getHomeStore().getRole(),
                extra: {
                    num_items: e,
                    num_selected_items: t
                }
            })
        }, e
    })();
    t.HomeActivityLogger = o, t.homeActivityLogger = new o
}), define("modules/clean/react/home/util/logging/availability_logger", ["require", "exports", "tslib", "external/lodash", "modules/clean/flux/dispatcher", "modules/clean/react/home/constants", "modules/clean/web_timing_logger", "modules/clean/react/home/store", "modules/core/exception", "modules/clean/react/home/util/prefetch_handler", "modules/clean/react/home/util/logging/availability_logger_common", "modules/clean/react/home/post_tti/api"], function(e, t, n, r, i, o, a, s, c, l, u, d) {
    "use strict";

    function m() {
        return h = h || new _
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r);
    var _ = (function() {
        function e() {
            this.didLog = !1, this.sectionToTTData = {}, this.sectionToTTI = {}, this.sectionToIsSkipped = {}, this.typeToExecutionData = r.mapValues(u.HOME_PREFETCH_TYPE_TO_INFO, function(e) {
                return {
                    info: e,
                    homeTiming: {}
                }
            })
        }
        return e.prototype.logPrefetch = function(e, t) {
            var n = this.typeToExecutionData[e];
            if (void 0 === n.success) {
                var r = {
                    type: o.HomeActionTypes.HOME_PREFETCH_RECEIVED_DATA,
                    payload: {
                        homePrefetchType: e
                    }
                };
                n.homeTiming.asynchronous ? i.Dispatcher.dispatch(r) : s.getHomeStore().__onDispatch({
                    action: r
                }), n.success = t, this.pendingPrefetchesCount && this.pendingPrefetchesCount--, this.logIfPossible()
            }
        }, e.prototype.logIfPossible = function() {
            var e = this;
            !this.didLog && void 0 !== this.pendingPrefetchesCount && this.pendingPrefetchesCount <= 0 && (d.waitForHomeTTI().then(function(t) {
                return (0, t.logHomeAvailability)({
                    typeToExecutionData: e.typeToExecutionData,
                    sectionToTTData: e.sectionToTTData,
                    sectionToTTI: e.sectionToTTI,
                    sectionToIsSkipped: e.sectionToIsSkipped
                })
            }), this.didLog = !0)
        }, e.prototype.logTTData = function(e) {
            this.sectionToTTData.hasOwnProperty(e) || (this.sectionToTTData[e] = a.time_since_start(), this.logIfPossible())
        }, e.prototype.logTTI = function(e, t, n) {
            var i = this;
            if (!this.sectionToTTI.hasOwnProperty(e) && (this.sectionToTTI[e] = a.time_since_start(), this.sectionToIsSkipped[e] = Number(t), n)) {
                this.pendingPrefetchesCount = 0;
                var o = s.getHomeStore();
                r.map(this.typeToExecutionData, function(e) {
                    u.isPendingPrefetch(o, e) && i.pendingPrefetchesCount++
                }), this.logIfPossible()
            }
        }, e.prototype.handlePrefetch = function(e, t) {
            var n = this,
                r = u.HOME_PREFETCH_TYPE_TO_INFO[e],
                i = r.handle,
                a = r.conditionalSection,
                c = function() {
                    return n.handlePrefetchImpl(e, i, t)
                };
            s.getHomeStore().getSectionLoadingPreference(a) === o.ConditionalSectionLoadingPreference.POST_TTI ? d.waitForHomeTTI().then(c) : c()
        }, e.prototype.handlePrefetchImpl = function(e, t, n) {
            var i = this,
                o = l.getPrefetchHandler(t),
                s = this.typeToExecutionData[e],
                u = s.homeTiming,
                d = s.didInvoke,
                m = function(t) {
                    c.reportStack("prefetch for " + e + " failed", {
                        severity: c.SEVERITY.CRITICAL,
                        exc_extra: {
                            error: t,
                            type: e
                        }
                    }), i.logPrefetch(e, !1)
                };
            if (o) {
                if (!d) {
                    s.didInvoke = !0, u.register_prefetch_callback = a.time_since_start();
                    var _ = function(t) {
                        try {
                            u.json_parse_start = a.time_since_start();
                            var o = JSON.parse(t);
                            u.json_parse_end = a.time_since_start(), u.json_string_size = 16 * t.length, r.isEqual(o, {}) ? m("payload is {}") : (i.logPrefetch(e, !0), u.payload_processing_start = a.time_since_start(), n(o), u.payload_processing_end = a.time_since_start())
                        } catch (e) {
                            m(e)
                        }
                    };
                    u.asynchronous = l.handlePrefetch(o, _, m) ? 0 : 1
                }
            } else m("no prefetch handler")
        }, e
    })();
    t.HomeAvailabilityLogger = _;
    var h = null;
    t.getHomeAvailabilityLogger = m
}), define("modules/clean/react/home/util/logging/availability_logger_common", ["require", "exports", "modules/clean/react/home/constants"], function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = t.success,
            r = t.info;
        return void 0 === n && (!r.isOptional || a.indexOf(e.getSectionLoadingPreference(r.conditionalSection)) >= 0)
    }

    function i(e) {
        return "home_" + e
    }
    var o;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = [n.ConditionalSectionLoadingPreference.IMMEDIATE, n.ConditionalSectionLoadingPreference.POST_TTI];
    t.HOME_PREFETCH_TYPE_TO_INFO = (o = {}, o[n.HomePrefetchTypes.RETRIEVE_STARRED] = {
        fragment: "retrieve_starred",
        handle: "__REGISTER_RETRIEVE_STARRED_PRELOAD_HANDLER",
        section: n.HomeSections.STARRED,
        conditionalSection: n.HomeSections.STARRED
    }, o[n.HomePrefetchTypes.RECENTS_JSON] = {
        fragment: "recents/json",
        handle: "__REGISTER_RECENTS_PRELOAD_HANDLER",
        section: n.HomeSections.RECENTS,
        conditionalSection: n.HomeSections.RECENTS
    }, o[n.HomePrefetchTypes.RETRIEVE_PAPER_RECENTS] = {
        fragment: "retrieve_paper_recents",
        handle: "__REGISTER_PAPER_RECENTS_PRELOAD_HANDLER",
        section: n.HomeSections.RECENTS,
        conditionalSection: n.ConditionalSections.PAPER_RECENTS
    }, o[n.HomePrefetchTypes.RETRIEVE_UNREAD] = {
        fragment: "retrieve_unread",
        handle: "__REGISTER_UNREAD_PREFETCH_HANDLER",
        section: n.HomeSections.UNREAD,
        conditionalSection: n.HomeSections.UNREAD
    }, o[n.HomePrefetchTypes.GET_SUGGESTED] = {
        fragment: "get_suggested",
        handle: "__REGISTER_SUGGEST_GRID_PRELOAD_HANDLER",
        section: n.HomeSections.SUGGEST,
        conditionalSection: n.HomeSections.SUGGEST,
        isOptional: !0
    }, o), t.isPendingPrefetch = r, t.withHomePrefix = i
}), define("modules/clean/react/home/util/logging/timing_component", ["require", "exports", "tslib", "react", "external/react-dom", "modules/clean/react/home/util/logging/timing_logger"], function(e, t, n, r, i, o) {
    "use strict";

    function a(e, t) {
        return (function(a) {
            function s() {
                return null !== a && a.apply(this, arguments) || this
            }
            return n.__extends(s, a), s.prototype.isWrappedComponentBelowViewport = function() {
                var e = this.refs.wrapped;
                if (e) {
                    var t = i.findDOMNode(e);
                    return t && document.documentElement.scrollTop + window.innerHeight > t.getBoundingClientRect().top
                }
                return !1
            }, s.prototype.logTTIIfCanRenderItems = function() {
                return this.props.canRenderItems && o.homeTimingLogger.logTTI(t)
            }, s.prototype.componentDidMount = function() {
                var e = this;
                !this.logTTIIfCanRenderItems() && this.props.shouldMarkTTIIfOffScreen && this.isWrappedComponentBelowViewport() && o.homeTimingLogger.logSkippedSection(t);
                var n = this.refs.wrapped,
                    r = n.componentDidUpdate;
                n.componentDidUpdate = function() {
                    e.logTTIIfCanRenderItems(), r && r.call(n)
                }
            }, s.prototype.render = function() {
                return r.default.createElement(e, n.__assign({
                    ref: "wrapped"
                }, this.props))
            }, s
        })(r.default.PureComponent)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), t.timingComponent = a
}), define("modules/clean/react/home/util/logging/timing_logger", ["require", "exports", "tslib", "modules/clean/js_client_stopwatch", "external/lodash", "modules/clean/web_timing_logger", "modules/clean/react/home/util/logging/timing_state", "modules/clean/react/home/util/logging/activity_logger", "modules/core/exception", "modules/clean/react/home/util/logging/availability_logger", "modules/clean/react/home/util/logging/availability_logger_common"], function(e, t, n, r, i, o, a, s, c, l, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = n.__importStar(i), o = n.__importStar(o);
    var d = i.once(s.homeActivityLogger.logHomePageShown),
        m = (function() {
            function e() {
                this.timingStates = new a.HomeTimingStates, this.activate = i.once(function() {
                    return r.JSStopwatch.create_stopwatch_if_not_exist("home_access_tti")
                })
            }
            return e.prototype.validateActivated = function(e, t) {
                return !!r.JSStopwatch.stopwatch_exists("home_access_tti") || (c.reportStack("Did not activate when " + e + " before logging " + t, {
                    severity: c.SEVERITY.NONCRITICAL
                }), !1)
            }, e.prototype.logTTData = function(e) {
                if (this.validateActivated(e, a.HomeTimingState.TTDATA)) {
                    if (this.timingStates.progressState(e, a.HomeTimingState.TTDATA)) return this.timingStates.haveAllSectionsReachedState(a.HomeTimingState.TTDATA) && o.log_js_modules_fetched_data_required_for_tti(), l.getHomeAvailabilityLogger().logTTData(e), !0
                }
                return !1
            }, e.prototype.logSkippedSection = function(e) {
                this.activate(), this.logTTData(e), this.logTTI(e, !0)
            }, e.prototype.logTTI = function(e, t) {
                if (void 0 === t && (t = !1), this.validateActivated(e, a.HomeTimingState.TTI)) {
                    if (this.timingStates.progressState(e, a.HomeTimingState.TTI)) {
                        d(), r.JSStopwatch.recordTrace(u.withHomePrefix(e), {
                            stopwatchName: "home_access_tti"
                        });
                        var n = this.timingStates.haveAllSectionsReachedState(a.HomeTimingState.TTI);
                        return n && (o.mark_time_to_interactive(), r.JSStopwatch.flush_current_data()), l.getHomeAvailabilityLogger().logTTI(e, t, n), !0
                    }
                }
                return !1
            }, e
        })();
    t._HomeTimingLogger = m, t.homeTimingLogger = new m
}), define("modules/clean/react/home/util/logging/timing_state", ["require", "exports", "tslib", "external/lodash", "modules/clean/react/home/constants"], function(e, t, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r);
    var o;
    (function(e) {
        e[e.INIT = 0] = "INIT", e[e.TTDATA = 1] = "TTDATA", e[e.TTI = 2] = "TTI"
    })(o = t.HomeTimingState || (t.HomeTimingState = {}));
    var a = (function() {
        function e() {
            var e = this;
            this.homeSectionToState = {}, r.values(i.HomeSections).forEach(function(t) {
                return e.homeSectionToState[t] = o.INIT
            })
        }
        return e.prototype.progressState = function(e, t) {
            return this.homeSectionToState[e] + 1 === t && (this.homeSectionToState[e] = t, !0)
        }, e.prototype.haveAllSectionsReachedState = function(e) {
            return r.every(this.homeSectionToState, function(t) {
                return t >= e
            })
        }, e
    })();
    t.HomeTimingStates = a
}), define("modules/clean/react/home/util/navigation", ["require", "exports", "modules/core/browser"], function(e, t, n) {
    "use strict";

    function r(e) {
        return e.metaKey || e.ctrlKey
    }

    function i(e) {
        return r(e) ? a.NEW_TAB : a.REDIRECT
    }

    function o(e, t, r) {
        switch (void 0 === r && (r = a.NEW_TAB), r) {
            case a.REDIRECT:
                return void(t ? t().then(function() {
                    return n.redirect(e)
                }) : n.redirect(e));
            case a.NEW_TAB:
                n.open_tab(e);
                break;
            case a.UNSAFE_NEW_TAB:
                n.unsafe_open_tab(e)
        }
        t && t()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a;
    (function(e) {
        e[e.REDIRECT = 1] = "REDIRECT", e[e.NEW_TAB = 2] = "NEW_TAB", e[e.UNSAFE_NEW_TAB = 3] = "UNSAFE_NEW_TAB"
    })(a = t.NavigationMethod || (t.NavigationMethod = {})), t.isMetaKeyPressed = r, t.getNavigationMethod = i, t.logAndNavigate = o
}), define("modules/clean/react/home/util/post_tti_components", ["require", "exports", "tslib", "react", "modules/clean/react/home/post_tti/api", "modules/clean/react/home/recents/components/pending_attachment_list_view", "modules/clean/react/home/util/section_header_menu_title", "modules/clean/react/home/util/spinner"], function(e, t, n, r, i, o, a, s) {
    "use strict";

    function c(e) {
        return e.props.calendarProtoData.shouldShow
    }

    function l() {
        return new Promise(function(t, n) {
            e(["modules/clean/react/home/experiments/calendar/drag_handler"], t, n)
        }).then(n.__importStar)
    }
    var u = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), t.PostTTIRecentActivityImageAttachments = i.PostHomeTTIComponent({
        preTTIRenderer: function(e) {
            var t = e.count;
            return r.createElement(o.PendingAttachmentListView, {
                count: t
            })
        },
        getPostTTIRenderer: function(e) {
            var t = e.AttachmentListView;
            return function(e) {
                var n = e.attachments;
                return r.createElement(t, {
                    attachments: n
                })
            }
        }
    }), t.PostTTISHomeTasksSection = i.PostHomeTTIComponentWithProps({
        preTTIRenderer: s.HomeSpinner,
        getPostTTIRenderer: function(e) {
            var t = e.props,
                i = e.imports;
            return n.__awaiter(u, void 0, void 0, function() {
                var e, o;
                return n.__generator(this, function(n) {
                    return e = i.HomeTasksSection, o = t.tasks, [2, function() {
                        return r.createElement(e, {
                            homeTasksPayload: o
                        })
                    }]
                })
            })
        }
    }), t.PrototypePostTTICalendarSection = i.PostHomeTTIComponentWithProps({
        getPostTTIRenderer: function(t) {
            var i = t.props;
            return n.__awaiter(u, void 0, void 0, function() {
                var t, o;
                return n.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return t = i.calendarProtoData, t.shouldShow ? [4, new Promise(function(t, n) {
                                e(["modules/clean/react/home/experiments/calendar/home_access_calendar"], t, n)
                            }).then(n.__importStar)] : [3, 2];
                        case 1:
                            return o = a.sent().HomeCalendarSection, [2, function() {
                                return r.createElement("li", {
                                    className: "home-access-section"
                                }, r.createElement(o, n.__assign({}, i.calendarProtoData)))
                            }];
                        case 2:
                            return [2, null]
                    }
                })
            })
        }
    });
    var d = function(e) {
        var t = e.children;
        return r.createElement("div", null, t)
    };
    t.PrototypePostTTICalendarRecentActivityDragHandler = i.PostHomeTTIComponentWithProps({
        getPostTTIRenderer: function(e) {
            return n.__awaiter(u, void 0, void 0, function() {
                var t;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return c(e) ? [4, l()] : [3, 2];
                        case 1:
                            return t = n.sent().RecentActivityItemViewDragHandler, [2, t];
                        case 2:
                            return [2, d]
                    }
                })
            })
        },
        preTTIRenderer: d
    }), t.PostTTIHomeAccessBanner = i.PostHomeTTIComponentWithProps({
        getPostTTIRenderer: function(t) {
            var i = t.props;
            return n.__awaiter(u, void 0, void 0, function() {
                var t, o;
                return n.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return t = i.expEngageLicenseAcceptEligibleAdmins, "V1" !== t ? [3, 2] : [4, new Promise(function(t, n) {
                                e(["modules/clean/react/home/banner/pending_invites_banner_post_tti"], t, n)
                            }).then(n.__importStar)];
                        case 1:
                            return o = a.sent().PendingInvitesBanner, [2, function() {
                                return r.createElement(o, null)
                            }];
                        case 2:
                            return [2, null]
                    }
                })
            })
        }
    }), t.PostTTIClientEligibleAdminsBanner = i.PostHomeTTIComponentWithProps({
        getPostTTIRenderer: function(t) {
            var i = t.props;
            return n.__awaiter(u, void 0, void 0, function() {
                var t, o;
                return n.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return t = i.expEngageClientEligibleAdminsData, t ? [4, new Promise(function(t, n) {
                                e(["modules/clean/react/home/experiments/install_desktop_client_banner/install_desktop_client_banner"], t, n)
                            }).then(n.__importStar)] : [3, 2];
                        case 1:
                            return o = a.sent().InstallDesktopClientBanner, [2, function(e) {
                                var n = e.user;
                                return r.createElement(o, {
                                    eligibleEmails: t.eligibleEmails,
                                    user: n,
                                    variant: t.variant
                                })
                            }];
                        case 2:
                            return [2, null]
                    }
                })
            })
        }
    }), t.PostTTIRecentFiltersMenu = i.PostHomeTTIComponent({
        preTTIRenderer: function(e) {
            var t = e.title;
            return r.createElement(a.SectionHeaderMenuTitle, {
                title: t
            })
        },
        getPostTTIRenderer: function(e) {
            var t = e.RecentFiltersMenu;
            return function(e) {
                return r.createElement(t, n.__assign({}, e))
            }
        }
    }), t.PostTTIRecommendedMembers = i.PostHomeTTIComponentWithProps({
        getPostTTIRenderer: function(t) {
            var i = t.props;
            return n.__awaiter(u, void 0, void 0, function() {
                var t, o;
                return n.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return t = i.homeGrowthExperiments, t.recommendedMembers.length ? [4, new Promise(function(t, n) {
                                e(["modules/clean/react/home/home_access/growth/recommended_members/recommended_members_post_tti"], t, n)
                            }).then(n.__importStar)] : [3, 2];
                        case 1:
                            return o = a.sent().RecommendedMembers, [2, function() {
                                return r.createElement("li", {
                                    className: "home-access-section"
                                }, r.createElement(o, n.__assign({}, t)))
                            }];
                        case 2:
                            return [2, null]
                    }
                })
            })
        }
    }), t.PostTTIRecentsActivityFileActions = i.PostHomeTTIComponent({
        getPostTTIRenderer: function(e) {
            var t = e.RecentActivityFileActionPost;
            return function(e) {
                var n = e.recentItem,
                    i = e.attachments;
                return r.createElement(t, {
                    recentItem: n,
                    attachments: i
                })
            }
        }
    }), t.PostTTIStarredItemFileActions = i.PostHomeTTIComponent({
        getPostTTIRenderer: function(e) {
            var t = e.StarredItemFileActionPost;
            return function(e) {
                var n = e.starredItem,
                    i = e.user;
                return r.createElement(t, {
                    starredItem: n,
                    user: i
                })
            }
        }
    }), t.PostTTIRetrievalSuccessHomeBanner = i.PostHomeTTIComponent({
        getPostTTIRenderer: function(e) {
            var t = e.RetrievalSuccessHomeBanner;
            return function(e) {
                var n = e.user,
                    i = e.displayContext,
                    o = e.expSearchSuccessBanner;
                return r.createElement(t, {
                    user: n,
                    displayContext: i,
                    expSearchSuccessBanner: o
                })
            }
        }
    }), t.PostTTITeamInsightsHomeBanner = i.PostHomeTTIComponentWithProps({
        getPostTTIRenderer: function(t) {
            var i = t.props;
            return n.__awaiter(u, void 0, void 0, function() {
                var t, o;
                return n.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return t = i.teamInsights, !t || "V1" !== t.variant || t.homeBannerHidden ? [3, 2] : [4, new Promise(function(t, n) {
                                e(["modules/clean/react/teams/team_insights/team_insights_home_banner"], t, n)
                            }).then(n.__importStar)];
                        case 1:
                            return o = a.sent().TeamInsightsHomeBanner, [2, function() {
                                return r.createElement("li", {
                                    className: "home-access-section"
                                }, r.createElement(o, n.__assign({}, t)))
                            }];
                        case 2:
                            return [2, null]
                    }
                })
            })
        }
    }), t.PostTTIChecklistBanner = i.PostHomeTTIComponentWithProps({
        getPostTTIRenderer: function(t) {
            var i = t.props;
            return n.__awaiter(u, void 0, void 0, function() {
                var t, o;
                return n.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return t = i.homeGrowthExperiments.expGrowthTcBizChecklistUiRevampEnabled, t ? [4, new Promise(function(t, n) {
                                e(["modules/clean/react/growth/connected_checklist_banner"], t, n)
                            }).then(n.__importStar)] : [3, 2];
                        case 1:
                            return o = a.sent().OnboardingChecklistBanner, [2, function(e) {
                                var t = e.user;
                                return r.createElement(o, {
                                    user: t
                                })
                            }];
                        case 2:
                            return [2, null]
                    }
                })
            })
        }
    }), t.PostTTIHomeBannerManager = i.PostHomeTTIComponentWithProps({
        getPostTTIRenderer: function(e) {
            var t = e.props;
            return n.__awaiter(u, void 0, void 0, function() {
                var e, r;
                return n.__generator(this, function(n) {
                    return e = function() {
                        var e = t.expEngageClientEligibleAdminsData;
                        return Boolean(e)
                    }, r = function() {
                        return "V1" === t.expEngageLicenseAcceptEligibleAdmins
                    }, [2, function(t) {
                        var n = t.installDesktopClientBanner,
                            i = t.homeAccessBanner;
                        return e() ? n : r() ? i : null
                    }]
                })
            })
        }
    }), t.PostTTIMontanaIPAModal = i.PostHomeTTIComponentWithProps({
        getPostTTIRenderer: function(t) {
            var i = t.props;
            return n.__awaiter(u, void 0, void 0, function() {
                var t, o, a;
                return n.__generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return [4, new Promise(function(t, n) {
                                e(["modules/core/browser_detection"], t, n)
                            }).then(n.__importStar)];
                        case 1:
                            return t = s.sent().is_supported_mobile_browser, o = i.montanaModalProps, t() || !o ? [2, function() {
                                return null
                            }] : [4, new Promise(function(t, n) {
                                e(["modules/clean/react/montana/in_product_modal/in_product_modal_post_tti_renderer"], t, n)
                            }).then(n.__importStar)];
                        case 2:
                            return a = s.sent().PostTTIMontanaIPAModalRenderer, [2, function(e) {
                                var t = e.user;
                                return r.createElement(a, {
                                    montanaModalProps: o,
                                    user: t
                                })
                            }]
                    }
                })
            })
        }
    })
}), define("modules/clean/react/home/util/prefetch_handler", ["require", "exports"], function(e, t) {
    "use strict";

    function n(e) {
        return window[e]
    }

    function r(e, t, n) {
        var r = e.getDataIfAvailable();
        if (r) {
            var i = r.error,
                o = r.payload;
            i ? n(i) : t(o)
        } else e(t, n);
        return Boolean(r)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getPrefetchHandler = n, t.handlePrefetch = r
}), define("modules/clean/react/home/util/resource_icon", ["require", "exports", "tslib", "react", "spectrum/icon_content", "spectrum/file_icon", "modules/clean/react/home/constants"], function(e, t, n, r, i, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r);
    var s = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.renderIcon = function() {
            var e = this.props.displayType;
            if (a.DisplayTypeToResourceType[e] === a.FILE_RESOURCE_TYPE) return r.default.createElement(o.FileIcon, {
                path: this.props.fileName,
                variant: "small"
            });
            var t = a.DisplayTypeToIconName[e] || a.DisplayTypeToIconName.FOLDER;
            return r.default.createElement(i.IconContent, {
                name: t
            })
        }, t.prototype.render = function() {
            return r.default.createElement("span", {
                className: this.props.className,
                tabIndex: 0
            }, this.renderIcon())
        }, t.displayName = "HomeResourceIcon", t
    })(r.default.PureComponent);
    t.HomeResourceIcon = s
}), define("modules/clean/react/home/util/section_header_menu_title", ["require", "exports", "tslib", "react"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), t.CaretDownIcon = function() {
        return r.default.createElement("span", {
            className: "menu-icon"
        }, r.default.createElement("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            className: "menu-icon__icon"
        }, r.default.createElement("g", {
            fill: "none",
            "fill-rule": "evenodd"
        }, r.default.createElement("path", {
            d: "M6 8L3 4h6z",
            fill: "#637282"
        }))))
    }, t.SectionHeaderMenuTitle = function(e) {
        var n = e.title,
            i = e.shouldHideCaret,
            o = e.children;
        return r.default.createElement("span", {
            className: "section-header-trigger__title"
        }, n, o, i ? null : r.default.createElement(t.CaretDownIcon, null))
    }
}), define("modules/clean/react/home/util/show_hide_link", ["require", "exports", "tslib", "external/classnames", "react", "spectrum/icon_arrow", "modules/core/i18n"], function(e, t, n, r, i, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), i = n.__importDefault(i);
    var s = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.getLinkText = function() {
            return this.props.isExpanded ? a._("Collapse section") : this.props.hiddenItemCount <= 0 ? a._("Show more") : this.props.canLoadMore ? a._("Show %(number)s+ more").format({
                number: this.props.hiddenItemCount
            }) : a._("Show %(number)s more").format({
                number: this.props.hiddenItemCount
            })
        }, t.prototype.getLinkClass = function() {
            return r.default({
                "button-as-link": !0,
                "show-hide-link": !0,
                "show-hide-link--expanded": this.props.isExpanded
            })
        }, t.prototype.render = function() {
            return i.default.createElement("div", {
                className: "show-hide-link__container"
            }, i.default.createElement("button", {
                onClick: this.props.onClick,
                className: this.getLinkClass()
            }, i.default.createElement("div", {
                className: "show-hide-link__arrow"
            }, i.default.createElement(o.IconArrow, {
                name: "right"
            })), this.getLinkText()))
        }, t.displayName = "ShowHideLink", t
    })(i.default.PureComponent);
    t.ShowHideLink = s
}), define("modules/clean/react/home/util/spinner", ["require", "exports", "tslib", "react"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), t.HomeSpinner = function() {
        return r.default.createElement("div", {
            className: "home-access__loading-indicator home--loading-indicator"
        }, r.default.createElement("div", {
            className: "maestro-loading-spinner"
        }))
    }
}), define("modules/clean/react/starred/constants", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.StarredLoadingState = {
        LOADING: "LOADING",
        LOAD_SUCCESS: "LOAD_SUCCESS",
        LOAD_FAILED: "LOAD_FAILED"
    }, t.StarredActionTypes = {
        LOADING: "STARRED_LOADING",
        SET_STATUS: "STARRED_SET_STATUS",
        LOAD_FAILURE: "STARRED_LOAD_FAILURE",
        RENAME_EXTERNAL_RESOURCE: "STARRED_RENAME_EXTERNAL_RESOURCE"
    }, t.IdTypes = {
        ENCODED_FILE_OBJ_ID: "ENCODED_FILE_OBJ_ID",
        EXTERNAL_RESOURCE_ID: "EXTERNAL_RESOURCE_ID",
        PAPER_ID_PATH: "PAPER_ID_PATH",
        FQ_PATH: "FQ_PATH"
    };
    (function(e) {
        e.HOME_STARRED = "HOME_STARRED", e.HOME_RECENTS = "HOME_RECENTS", e.BROWSE = "BROWSE", e.FILE_VIEWER = "FILE_VIEWER", e.SUGGESTED_STARS = "SUGGESTED_STARS", e.HOME_TASKS = "HOME_TASKS"
    })(t.StarredSource || (t.StarredSource = {})), t.StarExtensionId_DEV = "bkoifdjjfabbedgjlkmkcabdpajmmlhd", t.StarExtensionId_PROD = "hjdobpfegefofikebjlabkpjlndkfefg"
}), define("modules/clean/react/starred/id_type_pair", ["require", "exports", "modules/clean/react/home/resource_id_types"], function(e, t, n) {
    "use strict";

    function r(e) {
        return e.type + ":" + e.id
    }

    function i(e) {
        return !!e.file_id
    }

    function o(e) {
        return !!e.pad_id
    }

    function a(e) {
        return !!e.folder_id
    }

    function s(e) {
        return !!e.fq_path
    }

    function c(e) {
        return i(e) ? {
            id: e.file_id,
            type: n.HOME_RESOURCE_ID_TYPE.ENCODED_FILE_OBJ_ID
        } : o(e) ? {
            id: e.pad_id,
            type: n.HOME_RESOURCE_ID_TYPE.PAPER_DOCUMENT_ID
        } : a(e) ? {
            id: e.folder_id,
            type: n.HOME_RESOURCE_ID_TYPE.PAPER_FOLDER_ID
        } : s(e) ? {
            id: e.fq_path,
            type: n.HOME_RESOURCE_ID_TYPE.FQ_PATH
        } : e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.idTypePairToString = r, t.idTypePairFromStarrableItem = c
});
//# sourceMappingURL=pkg-home.min.js-vflq4a1CJ.map