(window.webpackJsonp = window.webpackJsonp || []).push([
    [1, 4], {
        358: function(t, e, n) {
            var a, o;
            a = [n(129), n(58), n(48), n(57), n(91), n(0), n(183), n(2), n(5), n(128), n(369), n(11), n(12), n(16)], void 0 === (o = function(i, r, s, c, u, l, d, p, E, f, C) {
                "use strict";

                function v(t) {
                    return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                a = [n(129), n(58), n(48), n(57), n(91), n(0), n(183), n(2), n(5), n(128), n(369)], void 0 === (o = function() {
                    var t = {
                            SWC_CORE_READY_EVENT: "swc:core:ready"
                        },
                        e = {
                            SKYPE_RECENT_SELECTOR: ".skype-recents",
                            SWC_SEARCH_INPUT: ".skype-recents .searchContactsInput",
                            SWC_FOOTER_MESSAGE: ".skype-recents .footer .message",
                            CHAT_WRAPPER_PLACEHOLDER: ".chat-wrapper",
                            SKYPE_CHAT_SELECTOR: ".skypeChat",
                            SKYPE_CHAT_ICON_SELECTOR: "#skypeIcon",
                            SWC_RECENT_CONTACTS_ITEMS: "#swc-recents-contacts .item",
                            UHF_MORE_NAV_ITEM: "#uhfMore",
                            UNREAD_COUNTER: "#unreadCounter",
                            UNREAD_WRAPPER: "#unreadWrapper",
                            APP_BANNER: "#appBanner",
                            UHF_COOKIE_ALERT: "#uhfCookieAlert",
                            UHF_EDGE_NOTIFICATION: "#epb",
                            UHF_EDGE_NOTIFICATION_ID: "epb",
                            LOGIN_MENU_WRAPPER: "nav .signInDropdownWrapper",
                            LOGIN_MENU: "nav .signInDropdownWrapper [data-element-type='subMenu']"
                        },
                        n = {
                            ProviderId: "swc.chat",
                            IsVirtual: !0,
                            ParallelView: !0,
                            CanCollapse: !0,
                            Style: E.pluck(r, "swcChat", "style") || "outlook",
                            Locale: "en-US"
                        },
                        a = {
                            notStarted: "notStarted",
                            inProgress: "inProgress",
                            finished: "finished"
                        },
                        o = f.create({
                            lazyInitStatus: a.notStarted,
                            recentsInitStatus: a.notStarted
                        }),
                        S = function(t) {
                            swc.API.triggerEvent(t)
                        },
                        _ = function() {
                            var t = l(e.SKYPE_RECENT_SELECTOR),
                                n = l(e.SKYPE_CHAT_SELECTOR);
                            "visible" === t.attr("data-status") && (t.attr("data-status", "invisible"), n.attr("data-bi-scn", "open"), S("recentsHidden"))
                        },
                        h = function(t, n, a) {
                            if (t.hasClass("hover") && (t.removeClass("hover"), n.attr("aria-expanded", "false")), "visible" === a.attr("data-status")) a.attr("data-status", "invisible"), S("recentsHidden");
                            else {
                                var o = l(e.UHF_EDGE_NOTIFICATION).height(),
                                    i = l(e.APP_BANNER).height(),
                                    r = l(e.UHF_COOKIE_ALERT).height();
                                a.css("margin-top", o + i + r), a.attr("data-status", "visible"), S("recentsShown")
                            }
                            l(e.SKYPE_CHAT_SELECTOR).attr("data-bi-scn", function(t) {
                                return "open" === t.attr("data-bi-scn") ? "close" : "open"
                            }(l(e.SKYPE_CHAT_SELECTOR)))
                        },
                        m = function(t) {
                            function n(t) {
                                var n = l(e.LOGIN_MENU_WRAPPER),
                                    i = l(e.LOGIN_MENU);
                                o.get("recentsInitStatus") === a.notStarted && (p.isNullOrUndefined(E.pluck(window, "swc", "module")) || (o.update({
                                    recentsInitStatus: a.inProgress
                                }), window.swc.module.create("recents", {}, document.querySelector(e.SKYPE_RECENT_SELECTOR)), o.update({
                                    recentsInitStatus: a.finished
                                }))), o.get("recentsInitStatus") === a.finished && h(n, i, t)
                            }! function(t) {
                                var n = document.getElementById(e.UHF_EDGE_NOTIFICATION_ID);
                                n && n.addEventListener("animationend", function() {
                                    var n = l(e.UHF_EDGE_NOTIFICATION).height();
                                    t.css("margin-top", n)
                                })
                            }(t), l(e.SKYPE_CHAT_SELECTOR).attr("href", null), l(e.SKYPE_CHAT_SELECTOR).on("click touchstart", function(e) {
                                e.stopImmediatePropagation(), n(t)
                            }), l(e.SKYPE_CHAT_SELECTOR).on("keydown", function(a) {
                                a.keyCode === c.TAB && (a.shiftKey ? l(e.UHF_MORE_NAV_ITEM).length > 0 && (a.preventDefault(), l(e.UHF_MORE_NAV_ITEM).focus()) : l(e.SWC_SEARCH_INPUT).length > 0 && "visible" === t.attr("data-status") && (a.preventDefault(), l(e.SWC_SEARCH_INPUT).focus())), a.keyCode === c.ENTER && (a.preventDefault(), n(t))
                            }), y(t)
                        },
                        y = function(t) {
                            window.addEventListener("keydown", function(n) {
                                n.stopPropagation(), n.keyCode === c.ESCAPE && "visible" === t.attr("data-status") && (t.attr("data-status", "invisible"), l(e.SKYPE_CHAT_SELECTOR).attr("data-bi-scn", "open")), n.keyCode === c.TAB && l(e.SWC_RECENT_CONTACTS_ITEMS).length > 0 && "visible" === t.attr("data-status") && (l(e.SWC_RECENT_CONTACTS_ITEMS).attr("tabindex", "0").attr("aria-label", "message"), "undefined" === v(l(e.SWC_FOOTER_MESSAGE).attr("tabindex")) && (l(e.SWC_FOOTER_MESSAGE).attr("tabindex", "0").attr("aria-label", "message"), function(t) {
                                    l(e.SWC_FOOTER_MESSAGE).on("keydown", function(n) {
                                        n.keyCode === c.TAB && (t.attr("data-status", "invisible"), l(e.SKYPE_CHAT_SELECTOR).attr("data-bi-scn", "open"), l(e.SKYPE_CHAT_SELECTOR).focus())
                                    })
                                }(t))), n.keyCode === c.TAB && l(e.SWC_RECENT_CONTACTS_ITEMS).length > 0 && "invisible" === t.attr("data-status") && ("0" === l(e.SWC_RECENT_CONTACTS_ITEMS).attr("tabindex") && l(e.SWC_RECENT_CONTACTS_ITEMS).removeAttr("tabindex").removeAttr("aria-label"), "0" === l(e.SWC_FOOTER_MESSAGE).attr("tabindex") && l(e.SWC_FOOTER_MESSAGE).removeAttr("tabindex").removeAttr("aria-label"))
                            })
                        };
                    var T = function() {
                        return window.swc.API.registerEvent("unreadConversationsUpdate", function(t) {
                            document.querySelector(e.UNREAD_COUNTER).innerText = t, document.querySelector(e.UNREAD_WRAPPER).style.display = t > 0 ? "block" : "none"
                        }), window.swc.module.create("chat", n, document.querySelector(e.CHAT_WRAPPER_PLACEHOLDER)), window.swc.API.registerEvent("proxy:keyboard:sendOnEscape", function(t) {
                            _(), l(e.SKYPE_CHAT_SELECTOR).focus()
                        }), Promise.resolve()
                    };
                    var R = function(n) {
                        if (n) {
                            var r = l(e.SKYPE_RECENT_SELECTOR);
                            ! function(t) {
                                u.on(u.RESIZE, function() {
                                    u.isMobile() && "visible" === t.attr("data-status") && !d.isV2() ? (t.attr("data-status", "invisible"), l(e.SKYPE_CHAT_SELECTOR).attr("data-bi-scn", "open")) : u.isMobileUHF() && "visible" === t.attr("data-status") && d.isV2() && (t.attr("data-status", "invisible"), l(e.SKYPE_CHAT_SELECTOR).attr("data-bi-scn", "open"))
                                })
                            }(r),
                            function(t) {
                                t.on("keydown", function(n) {
                                    n.keyCode === c.TAB && n.target === this && n.shiftKey && (n.preventDefault(), l(e.SKYPE_CHAT_SELECTOR).focus(), t.attr("data-status", "invisible"), l(e.SKYPE_CHAT_SELECTOR).attr("data-bi-scn", "open"))
                                })
                            }(r), m(r), l("html").on("click touchstart", function(t) {
                                var e, n, a = t.target,
                                    o = document.getElementById("main-recentlist"),
                                    i = document.getElementById("swc-recents-chats");
                                o && a && (e = o.contains(a)), i && a && (n = i.contains(a)), e ? n && _() : _()
                            });
                            var s = function(t) {
                                    return function(t) {
                                        return null === window.swc || void 0 === window.swc ? Promise.reject("SWC Chat is not loaded properly") : window.swc.init(null, {
                                            tokenProvider: t,
                                            toLoadUnreadConversationsCount: !0
                                        }).then(T)
                                    }(function() {
                                        return Promise.resolve(t)
                                    }).catch(function() {
                                        return Promise.reject()
                                    })
                                },
                                p = function(t) {
                                    u.isMobile() && !d.isV2() || u.isMobileUHF() && d.isV2() ? u.on(u.RESIZE, function() {
                                        o.get("lazyInitStatus") === a.inProgress || o.get("lazyInitStatus") === a.finished || u.isMobile() || u.isMobileUHF() || function(t) {
                                            o.update({
                                                lazyInitStatus: a.inProgress
                                            }), s(t).then(function() {
                                                o.update({
                                                    lazyInitStatus: a.finished
                                                })
                                            })
                                        }(t)
                                    }) : s(t)
                                };
                            i.on(t.SWC_CORE_READY_EVENT, function() {
                                p(n)
                            })
                        }
                    };
                    return E.pluck(r, "swcChat", "chat") && function() {
                        var t = E.pluck(r, "swcChat", "sdkUrl"),
                            e = E.pluck(r, "swcChat", "environment");
                        s.on(s.EVENTS.READY, function(n) {
                            var a = n.skypetoken;
                            t && C.loadScriptTags([{
                                src: t,
                                data: {
                                    "data-manual-boot": !0,
                                    "data-environment": e
                                }
                            }], function() {
                                R(a)
                            })
                        })
                    }(), {
                        closeRecentChats: _,
                        CONSTS: t
                    }
                }.apply(e, a)) || (t.exports = o)
            }.apply(e, a)) || (t.exports = o)
        },
        361: function(t, e, n) {
            var a, o;
            a = [n(11), n(12), n(10), n(52), n(49), n(6), n(41)], void 0 === (o = function() {
                "use strict";

                function i(t) {
                    return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                a = [n(0), n(358), n(58), n(25), n(91), n(96), n(130), n(2), n(183), n(15)], void 0 === (o = function(t, e, n, a, o, r, s, c, u) {
                    var l = {
                            swcChatMenuItem: "#skypeStatus",
                            logoutSelectors: ["#uhfJoin", "[data-link-type=logout]"]
                        },
                        d = {
                            sticky: !1,
                            showLinks: !0,
                            showButtons: !1,
                            accountLink: "/",
                            logoutLink: "/"
                        },
                        p = {},
                        E = function() {
                            var e = a.getLocationHref(),
                                n = f.call(this),
                                o = !1;
                            return t.each(n, function(t, n) {
                                if (null !== e.match(n)) return o = !0, !1
                            }), o
                        },
                        f = function() {
                            var e = t(this).attr("href"),
                                n = t(this).data("urls"),
                                a = [C(e)];
                            return n && t.each(n.split(","), function(e, n) {
                                a.push(C(t.trim(n)))
                            }), a
                        },
                        C = function(t) {
                            if (!t) return t;
                            var e = t.replace(/^(https|http):\/\//, "").replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
                            return new RegExp(e, "ig")
                        };

                    function v() {
                        u.isV2() && u.uhfMoreRender()
                    }
                    var S = function() {
                            var a = t("#customMeControl"),
                                o = t("nav #skypeStatus"),
                                u = t("nav .signInDropdownWrapper [data-element-type='menuDropdownToggle']"),
                                d = u.find(".avatarReal"),
                                E = u.find(".avatarDummy"),
                                f = t("nav .signInDropdownWrapper [data-element-type='subMenu']"),
                                C = u.find("a.usernameBtn");
                            a.length > 0 && f.length > 0 && (t("html").on("click touchstart", function(e) {
                                t("nav").find(".hover").removeClass("hover"), f.attr("aria-expanded", !1), C.each(function() {
                                    t(this).attr("data-expanded", !1)
                                })
                            }), f.on("touchstart", function(t) {
                                t.stopPropagation()
                            }), u.click(function(n) {
                                n.stopPropagation(), a.toggleClass("hover");
                                var o = "false" === f.attr("aria-expanded");
                                f.attr("aria-expanded", o), C.each(function() {
                                    t(this).attr("data-expanded", o)
                                }), e.closeRecentChats()
                            }), d.on("load", function() {
                                d.addClass("ready")
                            }), r.initialize(), r.on(r.PROFILE_READY, function(e) {
                                e && (c.isNullOrUndefined(e.username) || l.logoutSelectors.map(function(e) {
                                    t(e).attr("href", p.header.logoutLink)
                                }), c.isNullOrUndefined(e.avatarUrl) || (e.avatarUrl == r.DEFAULT_AVATAR ? setTimeout(function() {
                                    E.addClass("ready")
                                }, 0) : d.attr("src", e.avatarUrl), "true" === n.swcChat.chat && function(t) {
                                    null !== t && void 0 !== t && "object" === i(t) && t.removeClass("hidden")
                                }(o), v()))
                            }), r.on(r.PROFILE_ERROR, function(t) {
                                var e = t.status || "";
                                u.addClass("noAvatar"), s.trackCustomImpressionEvent("nav", "profile_loading_failed_" + e)
                            }), _())
                        },
                        _ = function() {
                            o.on(o.RESIZE, v)
                        };
                    ! function() {
                        var e = d;
                        n.navigation && n.navigation.header && (e = t.extend(d, n.navigation.header)), p.header = e
                    }(), p.header.sticky && t("#nav-wrapper").addClass("stickyDesktop"), p.header.showLinks && t("nav").addClass("showLinks"), p.header.showButtons && t("nav").addClass("showButtons"), t("ul.navigationBar li.mainMenuItem a[data-urls]").each(function() {
                        if (!0 === E.call(this)) return t(this).parent("li.mainMenuItem").addClass("active"), !1
                    }), S()
                }.apply(e, a)) || (t.exports = o)
            }.apply(e, a)) || (t.exports = o)
        },
        362: function(t, e, n) {
            var a, o;
            void 0 === (o = function() {
                "use strict";
                a = [n(93), n(25), n(376), n(130), n(15)], void 0 === (o = function(t, e, n, a) {
                    var o = "skype-app-banner",
                        i = {
                            path: "/",
                            domain: "." + e.getDomainName(),
                            expiry: 864e5,
                            secure: !0
                        };

                    function r() {
                        a.trackElementImpression(n.jQElement)
                    }

                    function s(e) {
                        e.stopPropagation(), t.createSingleValue(o, 1).store(i)
                    }!t.exists(o) && n.jQElement.length > 0 && (n.on(n.OPEN, r), n.on(n.CLOSE, s), n.show())
                }.apply(e, a)) || (t.exports = o)
            }.apply(e, a = [])) || (t.exports = o)
        },
        363: function(t, e, n) {
            var a, o;
            void 0 === (o = function() {
                "use strict";
                a = [n(377), n(373), n(130), n(15)], void 0 === (o = function(t, e, n) {
                    var a = "cookiePolicy",
                        o = "skype-cookie-policy",
                        i = "at,be,bg,hr,cy,cz,dk,ee,fi,fr,de,gr,hu,ie,it,lv,lt,lu,mt,nl,pl,pt,ro,sk,si,es,se,gb,is,li,no",
                        r = 7776e6;
                    e.shouldBeDisplayed(a, o, r, i) && t.jQElement.length && (t.open(), n.trackElementImpression(t.jQElement), e.setCookie(o, r))
                }.apply(e, a)) || (t.exports = o)
            }.apply(e, a = [])) || (t.exports = o)
        },
        369: function(t, e, n) {
            var a, o;
            a = [n(1), n(8), n(26)], void 0 === (o = function() {
                "use strict";
                a = [n(370)], void 0 === (o = function(t) {
                    var e = t.sanitizeUrl;

                    function n(t, e) {
                        return Object.keys(e).map(function(n) {
                            t.setAttribute(n, e[n])
                        }), t
                    }
                    return {
                        loadScriptTags: function(t, a) {
                            t.map(function(t) {
                                var a = document.createElement("script");
                                a.className = "apolloLoader", a.src = e(t.src), a.async = !0, n(a, t.data), document.head.appendChild(a)
                            }), a && "function" == typeof a && a()
                        },
                        setAttr: n
                    }
                }.apply(e, a)) || (t.exports = o)
            }.apply(e, a)) || (t.exports = o)
        },
        370: function(t, e, n) {
            var a, o;
            a = [n(41), n(49)], void 0 === (o = function() {
                "use strict";
                void 0 === (o = function() {
                    var t = /^(%20|\s)*(javascript|data)/im,
                        e = /[^\x20-\x7E]/gim,
                        n = /^([^:]+):/gm,
                        a = [".", "/"];
                    return {
                        sanitizeUrl: function(o) {
                            var i, r, s = o.replace(e, "");
                            return function(t) {
                                return a.indexOf(t[0]) > -1
                            }(s) ? s : (r = s.match(n)) ? (i = r[0], t.test(i) ? "about:blank" : s) : "about:blank"
                        }
                    }
                }.call(e, n, e, t)) || (t.exports = o)
            }.apply(e, a)) || (t.exports = o)
        },
        373: function(t, e, n) {
            var a, o;
            a = [n(10)], void 0 === (o = function() {
                "use strict";
                a = [n(7), n(25), n(93), n(25), n(22), n(185), n(15)], void 0 === (o = function(t, e, n, a, o, i) {
                    var r = {
                            path: "/",
                            domain: "." + e.getDomainName(),
                            expiry: 7776e6
                        },
                        s = {};
                    return s.init = function(e) {
                        s.closeButtonJqElement = e.find(".closeButton"), e.length > 0 && (t.create(s), function(t) {
                            s.closeButtonJqElement.on("click", function(e) {
                                e.preventDefault(), s.close(t, e)
                            }), i.watchResponsivity(t)
                        }(e))
                    }, s.open = function(t, e) {
                        i.openBanner(t), t.trigger("open", e).removeClass("hiddenFocus")
                    }, s.close = function(t, e) {
                        i.closeBanner(t), t.trigger("close", e).addClass("hiddenFocus")
                    }, s.setCookie = function(t, e) {
                        var a = n.createSingleValue(t, 1),
                            o = function(t) {
                                var e = r;
                                return e.expiry = t, e.secure = !0, e
                            }(e);
                        a.store(o)
                    }, s.shouldBeDisplayed = function(t, a, i, r) {
                        return ! function(t, e, n) {
                            var a = !1;
                            return o.hasQuery(t) && (s.setCookie(e, n), a = !0), a
                        }(t, a, i) && !n.exists(a) && function(t) {
                            var n;
                            return void 0 === t || null === t || void 0 === (n = e.getRegion()) || 0 === n.length || t.indexOf(n.toLowerCase()) > -1
                        }(r)
                    }, s.INIT = "init", s.OPEN = "open", s.CLOSE = "close", s
                }.apply(e, a)) || (t.exports = o)
            }.apply(e, a)) || (t.exports = o)
        },
        376: function(t, e, n) {
            var a, o;
            a = [n(10)], void 0 === (o = function() {
                "use strict";
                a = [n(7), n(185), n(0), n(15)], void 0 === (o = function(t, e, n) {
                    var a = n("html"),
                        o = function() {
                            s.appBannerCloseButtonJQElement.on("click", function(t) {
                                t.preventDefault(), t.stopPropagation(), i(t)
                            })
                        },
                        i = function(t) {
                            e.closeBanner(s.jQElement), r("close", t)
                        },
                        r = function(t, e) {
                            s.jQElement.trigger(t, e)
                        },
                        s = {
                            OPEN: "open",
                            CLOSE: "close",
                            getCloseButton: function() {
                                return s.appBannerCloseButtonJQElement
                            },
                            show: function() {
                                a.addClass("app-banner"), e.openBanner(s.jQElement), r("open")
                            },
                            close: i
                        };
                    return s.jQElement = n("#appBanner"), s.appBannerCloseButtonJQElement = s.jQElement.find(".closeButton"), t.create(s), s.jQElement.length > 0 && o(), s
                }.apply(e, a)) || (t.exports = o)
            }.apply(e, a)) || (t.exports = o)
        },
        377: function(t, e, n) {
            var a, o;
            void 0 === (o = function() {
                "use strict";
                a = [n(373), n(0), n(15)], void 0 === (o = function(t, e) {
                    var n = {};
                    return n.open = function(e) {
                        t.open(n.jQElement, e)
                    }, n.jQElement = e("#cookiePolicy"), t.init(n.jQElement), n
                }.apply(e, a)) || (t.exports = o)
            }.apply(e, a = [])) || (t.exports = o)
        }
    }
]);