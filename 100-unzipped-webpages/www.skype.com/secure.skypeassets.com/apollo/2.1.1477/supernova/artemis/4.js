(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        358: function(t, e, n) {
            var a, i;
            a = [n(129), n(58), n(48), n(57), n(91), n(0), n(183), n(2), n(5), n(128), n(369), n(11), n(12), n(16)], void 0 === (i = function(o, r, s, E, c, u, d, _, l, C, S) {
                "use strict";

                function T(t) {
                    return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                a = [n(129), n(58), n(48), n(57), n(91), n(0), n(183), n(2), n(5), n(128), n(369)], void 0 === (i = function() {
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
                            Style: l.pluck(r, "swcChat", "style") || "outlook",
                            Locale: "en-US"
                        },
                        a = {
                            notStarted: "notStarted",
                            inProgress: "inProgress",
                            finished: "finished"
                        },
                        i = C.create({
                            lazyInitStatus: a.notStarted,
                            recentsInitStatus: a.notStarted
                        }),
                        p = function(t) {
                            swc.API.triggerEvent(t)
                        },
                        f = function() {
                            var t = u(e.SKYPE_RECENT_SELECTOR),
                                n = u(e.SKYPE_CHAT_SELECTOR);
                            "visible" === t.attr("data-status") && (t.attr("data-status", "invisible"), n.attr("data-bi-scn", "open"), p("recentsHidden"))
                        },
                        A = function(t, n, a) {
                            if (t.hasClass("hover") && (t.removeClass("hover"), n.attr("aria-expanded", "false")), "visible" === a.attr("data-status")) a.attr("data-status", "invisible"), p("recentsHidden");
                            else {
                                var i = u(e.UHF_EDGE_NOTIFICATION).height(),
                                    o = u(e.APP_BANNER).height(),
                                    r = u(e.UHF_COOKIE_ALERT).height();
                                a.css("margin-top", i + o + r), a.attr("data-status", "visible"), p("recentsShown")
                            }
                            u(e.SKYPE_CHAT_SELECTOR).attr("data-bi-scn", function(t) {
                                return "open" === t.attr("data-bi-scn") ? "close" : "open"
                            }(u(e.SKYPE_CHAT_SELECTOR)))
                        },
                        R = function(t) {
                            function n(t) {
                                var n = u(e.LOGIN_MENU_WRAPPER),
                                    o = u(e.LOGIN_MENU);
                                i.get("recentsInitStatus") === a.notStarted && (_.isNullOrUndefined(l.pluck(window, "swc", "module")) || (i.update({
                                    recentsInitStatus: a.inProgress
                                }), window.swc.module.create("recents", {}, document.querySelector(e.SKYPE_RECENT_SELECTOR)), i.update({
                                    recentsInitStatus: a.finished
                                }))), i.get("recentsInitStatus") === a.finished && A(n, o, t)
                            }! function(t) {
                                var n = document.getElementById(e.UHF_EDGE_NOTIFICATION_ID);
                                n && n.addEventListener("animationend", function() {
                                    var n = u(e.UHF_EDGE_NOTIFICATION).height();
                                    t.css("margin-top", n)
                                })
                            }(t), u(e.SKYPE_CHAT_SELECTOR).attr("href", null), u(e.SKYPE_CHAT_SELECTOR).on("click touchstart", function(e) {
                                e.stopImmediatePropagation(), n(t)
                            }), u(e.SKYPE_CHAT_SELECTOR).on("keydown", function(a) {
                                a.keyCode === E.TAB && (a.shiftKey ? u(e.UHF_MORE_NAV_ITEM).length > 0 && (a.preventDefault(), u(e.UHF_MORE_NAV_ITEM).focus()) : u(e.SWC_SEARCH_INPUT).length > 0 && "visible" === t.attr("data-status") && (a.preventDefault(), u(e.SWC_SEARCH_INPUT).focus())), a.keyCode === E.ENTER && (a.preventDefault(), n(t))
                            }), O(t)
                        },
                        O = function(t) {
                            window.addEventListener("keydown", function(n) {
                                n.stopPropagation(), n.keyCode === E.ESCAPE && "visible" === t.attr("data-status") && (t.attr("data-status", "invisible"), u(e.SKYPE_CHAT_SELECTOR).attr("data-bi-scn", "open")), n.keyCode === E.TAB && u(e.SWC_RECENT_CONTACTS_ITEMS).length > 0 && "visible" === t.attr("data-status") && (u(e.SWC_RECENT_CONTACTS_ITEMS).attr("tabindex", "0").attr("aria-label", "message"), "undefined" === T(u(e.SWC_FOOTER_MESSAGE).attr("tabindex")) && (u(e.SWC_FOOTER_MESSAGE).attr("tabindex", "0").attr("aria-label", "message"), function(t) {
                                    u(e.SWC_FOOTER_MESSAGE).on("keydown", function(n) {
                                        n.keyCode === E.TAB && (t.attr("data-status", "invisible"), u(e.SKYPE_CHAT_SELECTOR).attr("data-bi-scn", "open"), u(e.SKYPE_CHAT_SELECTOR).focus())
                                    })
                                }(t))), n.keyCode === E.TAB && u(e.SWC_RECENT_CONTACTS_ITEMS).length > 0 && "invisible" === t.attr("data-status") && ("0" === u(e.SWC_RECENT_CONTACTS_ITEMS).attr("tabindex") && u(e.SWC_RECENT_CONTACTS_ITEMS).removeAttr("tabindex").removeAttr("aria-label"), "0" === u(e.SWC_FOOTER_MESSAGE).attr("tabindex") && u(e.SWC_FOOTER_MESSAGE).removeAttr("tabindex").removeAttr("aria-label"))
                            })
                        };
                    var v = function() {
                        return window.swc.API.registerEvent("unreadConversationsUpdate", function(t) {
                            document.querySelector(e.UNREAD_COUNTER).innerText = t, document.querySelector(e.UNREAD_WRAPPER).style.display = t > 0 ? "block" : "none"
                        }), window.swc.module.create("chat", n, document.querySelector(e.CHAT_WRAPPER_PLACEHOLDER)), window.swc.API.registerEvent("proxy:keyboard:sendOnEscape", function(t) {
                            f(), u(e.SKYPE_CHAT_SELECTOR).focus()
                        }), Promise.resolve()
                    };
                    var b = function(n) {
                        if (n) {
                            var r = u(e.SKYPE_RECENT_SELECTOR);
                            ! function(t) {
                                c.on(c.RESIZE, function() {
                                    c.isMobile() && "visible" === t.attr("data-status") && !d.isV2() ? (t.attr("data-status", "invisible"), u(e.SKYPE_CHAT_SELECTOR).attr("data-bi-scn", "open")) : c.isMobileUHF() && "visible" === t.attr("data-status") && d.isV2() && (t.attr("data-status", "invisible"), u(e.SKYPE_CHAT_SELECTOR).attr("data-bi-scn", "open"))
                                })
                            }(r),
                            function(t) {
                                t.on("keydown", function(n) {
                                    n.keyCode === E.TAB && n.target === this && n.shiftKey && (n.preventDefault(), u(e.SKYPE_CHAT_SELECTOR).focus(), t.attr("data-status", "invisible"), u(e.SKYPE_CHAT_SELECTOR).attr("data-bi-scn", "open"))
                                })
                            }(r), R(r), u("html").on("click touchstart", function(t) {
                                var e, n, a = t.target,
                                    i = document.getElementById("main-recentlist"),
                                    o = document.getElementById("swc-recents-chats");
                                i && a && (e = i.contains(a)), o && a && (n = o.contains(a)), e ? n && f() : f()
                            });
                            var s = function(t) {
                                    return function(t) {
                                        return null === window.swc || void 0 === window.swc ? Promise.reject("SWC Chat is not loaded properly") : window.swc.init(null, {
                                            tokenProvider: t,
                                            toLoadUnreadConversationsCount: !0
                                        }).then(v)
                                    }(function() {
                                        return Promise.resolve(t)
                                    }).catch(function() {
                                        return Promise.reject()
                                    })
                                },
                                _ = function(t) {
                                    c.isMobile() && !d.isV2() || c.isMobileUHF() && d.isV2() ? c.on(c.RESIZE, function() {
                                        i.get("lazyInitStatus") === a.inProgress || i.get("lazyInitStatus") === a.finished || c.isMobile() || c.isMobileUHF() || function(t) {
                                            i.update({
                                                lazyInitStatus: a.inProgress
                                            }), s(t).then(function() {
                                                i.update({
                                                    lazyInitStatus: a.finished
                                                })
                                            })
                                        }(t)
                                    }) : s(t)
                                };
                            o.on(t.SWC_CORE_READY_EVENT, function() {
                                _(n)
                            })
                        }
                    };
                    return l.pluck(r, "swcChat", "chat") && function() {
                        var t = l.pluck(r, "swcChat", "sdkUrl"),
                            e = l.pluck(r, "swcChat", "environment");
                        s.on(s.EVENTS.READY, function(n) {
                            var a = n.skypetoken;
                            t && S.loadScriptTags([{
                                src: t,
                                data: {
                                    "data-manual-boot": !0,
                                    "data-environment": e
                                }
                            }], function() {
                                b(a)
                            })
                        })
                    }(), {
                        closeRecentChats: f,
                        CONSTS: t
                    }
                }.apply(e, a)) || (t.exports = i)
            }.apply(e, a)) || (t.exports = i)
        },
        369: function(t, e, n) {
            var a, i;
            a = [n(1), n(8), n(26)], void 0 === (i = function() {
                "use strict";
                a = [n(370)], void 0 === (i = function(t) {
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
                }.apply(e, a)) || (t.exports = i)
            }.apply(e, a)) || (t.exports = i)
        },
        370: function(t, e, n) {
            var a, i;
            a = [n(41), n(49)], void 0 === (i = function() {
                "use strict";
                void 0 === (i = function() {
                    var t = /^(%20|\s)*(javascript|data)/im,
                        e = /[^\x20-\x7E]/gim,
                        n = /^([^:]+):/gm,
                        a = [".", "/"];
                    return {
                        sanitizeUrl: function(i) {
                            var o, r, s = i.replace(e, "");
                            return function(t) {
                                return a.indexOf(t[0]) > -1
                            }(s) ? s : (r = s.match(n)) ? (o = r[0], t.test(o) ? "about:blank" : s) : "about:blank"
                        }
                    }
                }.call(e, n, e, t)) || (t.exports = i)
            }.apply(e, a)) || (t.exports = i)
        }
    }
]);