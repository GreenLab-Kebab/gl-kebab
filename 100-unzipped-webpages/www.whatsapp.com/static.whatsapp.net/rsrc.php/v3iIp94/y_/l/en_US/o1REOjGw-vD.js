if (self.CavalryLogger) {
    CavalryLogger.start_js(["Qx\/wH"]);
}

__d("PixelRatioConst", [], (function(a, b, c, d, e, f) {
    e.exports = {
        cookieName: "dpr"
    }
}), null);
__d("DesktopHscrollUnitEventConstants", [], (function(a, b, c, d, e, f) {
    e.exports = {
        HSCROLL_ITEM_INSERTED_EVENT: "DesktopHScrollUnit/itemInserted",
        HSCROLL_ITEM_SHOWN_EVENT: "DesktopHScrollUnit/itemShown",
        HSCROLL_ITEM_HIDE_EVENT: "DesktopHScrollUnit/HideIndividualItem",
        HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT: "DesktopHScrollUnit/scrollItemBeforeXout",
        HSCROLL_ITEM_UNHIDE_EVENT: "DesktopHScrollUnit/unhideIndividualItem",
        HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN: "logLastAdXout",
        HSCROLL_PAGER_ITEM_HIDE_EVENT: "onXoutIndividualItem"
    }
}), null);
__d("PageHooks", ["Arbiter", "ErrorUtils", "InitialJSLoader", "PageEvents"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g;
    f = {
        DOMREADY_HOOK: "domreadyhooks",
        ONLOAD_HOOK: "onloadhooks"
    };

    function h() {
        var c = a.CavalryLogger;
        !window.domready && c && c.getInstance().setTimeStamp("t_prehooks");
        k(l.DOMREADY_HOOK);
        !window.domready && c && c.getInstance().setTimeStamp("t_hooks");
        window.domready = !0;
        b("Arbiter").inform("uipage_onload", !0, "state")
    }

    function i() {
        k(l.ONLOAD_HOOK), window.loaded = !0
    }

    function j(a, c) {
        return (g || (g = b("ErrorUtils"))).applyWithGuard(a, null, null, function(a) {
            a.event_type = c, a.category = "runhook"
        }, "PageHooks:" + c)
    }

    function k(a) {
        __p && __p();
        var b = a == "onbeforeleavehooks" || a == "onbeforeunloadhooks";
        do {
            var c = window[a];
            if (!c) break;
            b || (window[a] = null);
            for (var d = 0; d < c.length; d++) {
                var e = j(c[d], a);
                if (b && e) return e
            }
        } while (!b && window[a])
    }

    function c() {
        window.domready || (window.domready = !0, k("onloadhooks")), window.loaded || (window.loaded = !0, k("onafterloadhooks"))
    }

    function d() {
        var a, c;
        (a = b("Arbiter")).registerCallback(h, [(c = b("PageEvents")).BIGPIPE_DOMREADY, b("InitialJSLoader").INITIAL_JS_READY]);
        a.registerCallback(i, [c.BIGPIPE_DOMREADY, c.BIGPIPE_ONLOAD, b("InitialJSLoader").INITIAL_JS_READY]);
        a.subscribe(c.NATIVE_ONBEFOREUNLOAD, function(a, b) {
            b.warn = k("onbeforeleavehooks") || k("onbeforeunloadhooks"), b.warn || (window.domready = !1, window.loaded = !1)
        }, "new");
        a.subscribe(c.NATIVE_ONUNLOAD, function(a, b) {
            k("onunloadhooks"), k("onafterunloadhooks")
        }, "new")
    }
    var l = babelHelpers["extends"]({
        _domreadyHook: h,
        _onloadHook: i,
        runHook: j,
        runHooks: k,
        keepWindowSetAsLoaded: c
    }, f);
    d();
    a.PageHooks = e.exports = l
}), null);
__d("legacy:onload-action", ["PageHooks"], (function(a, b, c, d, e, f) {
    a._domreadyHook = (c = b("PageHooks"))._domreadyHook;
    a._onloadHook = c._onloadHook;
    a.runHook = c.runHook;
    a.runHooks = c.runHooks;
    a.keep_window_set_as_loaded = c.keepWindowSetAsLoaded
}), 3);
__d("FlipDirection", ["DOM", "Input", "Style"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = {
        setDirection: function(a, c, d) {
            __p && __p();
            c === void 0 && (c = 5);
            d === void 0 && (d = !1);
            var e = b("DOM").isNodeOfType(a, "input") && a.type == "text",
                f = b("DOM").isNodeOfType(a, "textarea");
            if (!(e || f) || a.getAttribute("data-prevent-auto-flip")) return;
            e = b("Input").getValue(a);
            f = a.style && a.style.direction;
            if (!f || d) {
                f = 0;
                d = !0;
                for (var g = 0; g < e.length; g++) {
                    var h = e.charCodeAt(g);
                    if (h >= 48) {
                        d && (d = !1, f++);
                        if (h >= 1470 && h <= 1920) {
                            b("Style").set(a, "direction", "rtl");
                            a.setAttribute("dir", "rtl");
                            return
                        }
                        if (f == c) {
                            b("Style").set(a, "direction", "ltr");
                            a.setAttribute("dir", "ltr");
                            return
                        }
                    } else d = !0
                }
            } else e.length === 0 && (b("Style").set(a, "direction", ""), a.removeAttribute("dir"))
        }
    };
    e.exports = a
}), null);
__d("FlipDirectionOnKeypress", ["Event", "FlipDirection"], (function(a, b, c, d, e, f) {
    a = function(a) {
        a = a.getTarget();
        b("FlipDirection").setDirection(a)
    };
    b("Event").listen(document.documentElement, {
        keyup: a,
        input: a
    })
}), null);
__d("LitestandMessages", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NEWSFEED_LOAD: "LitestandMessages/NewsFeedLoad",
        LEAVE_HOME: "LitestandMessages/LeaveHome",
        STORIES_REQUESTED: "LitestandMessages/StoriesRequested",
        STORIES_INSERTED: "LitestandMessages/StoriesInserted",
        NEWER_STORIES_REQUESTED: "LitestandMessages/NewerStoriesRequested",
        NEWER_STORIES_INSERTED: "LitestandMessages/NewerStoriesInserted",
        NEW_STORIES_CONTAINER_CREATED: "LitestandMessages/NewStoriesContainer",
        RHC_RELOADED: "LitestandMessages/RHCReloaded",
        STREAM_LOAD_ERROR: "LitestandMessages/StreamLoadError",
        DUPLICATE_CURSOR_ERROR: "LitestandMessages/DuplicateCursorError",
        STREAM_LOAD_RETRY: "LitestandMessages/StreamLoadRetry"
    });
    e.exports = a
}), null);
__d("Nectar", ["Env", "getContextualParent"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g;

    function h(a) {
        a.nctr || (a.nctr = {})
    }

    function i(a) {
        __p && __p();
        if ((g || (g = b("Env"))).module || !a) return (g || (g = b("Env"))).module;
        var c = {
                fbpage_fan_confirm: !0,
                photos_snowlift: !0
            },
            d;
        while (a && a.getAttribute) {
            var e = a.getAttribute("id");
            if (e != null && e.startsWith("pagelet_")) return e;
            !d && c[e] && (d = e);
            a = b("getContextualParent")(a)
        }
        return d
    }
    a = {
        addModuleData: function(a, b) {
            b = i(b);
            b && (h(a), a.nctr._mod = b)
        },
        addImpressionID: function(a) {
            (g || (g = b("Env"))).impid && (h(a), a.nctr._impid = (g || (g = b("Env"))).impid)
        }
    };
    e.exports = a
}), null);
__d("AsyncRequestNectarLogging", ["AsyncRequest", "Nectar"], (function(a, b, c, d, e, f) {
    Object.assign(b("AsyncRequest").prototype, {
        setNectarModuleData: function(a) {
            this.method == "POST" && b("Nectar").addModuleData(this.data, a)
        }
    })
}), null);
__d("DOMScroll", ["Arbiter", "Bootloader", "DOM", "DOMQuery", "Run", "Vector", "ViewportBounds", "emptyFunction", "ge", "ifRequired", "isAsyncScrollQuery", "nullthrows"], (function(a, b, c, d, e, f) {
    __p && __p();
    b("Run").onAfterLoad(function() {
        b("Bootloader").loadModules(["Animation"], b("emptyFunction"), "DOMScroll")
    });
    var g = {
        SCROLL: "dom-scroll",
        _scrolling: !1,
        _scrollingFinishedTimeout: null,
        getScrollState: function() {
            var a = b("Vector").getViewportDimensions(),
                c = b("Vector").getDocumentDimensions(),
                d = c.x > a.x;
            c = c.y > a.y;
            d += 0;
            c += 0;
            return new(b("Vector"))(d, c)
        },
        _scrollbarSize: null,
        _initScrollbarSize: function() {
            __p && __p();
            var a = b("DOM").create("p");
            a.style.width = "100%";
            a.style.height = "200px";
            var c = b("DOM").create("div");
            c.style.position = "absolute";
            c.style.top = "0px";
            c.style.left = "0px";
            c.style.visibility = "hidden";
            c.style.width = "200px";
            c.style.height = "150px";
            c.style.overflow = "hidden";
            c.appendChild(a);
            b("nullthrows")(document.body).appendChild(c);
            var d = a.offsetWidth;
            c.style.overflow = "scroll";
            a = a.offsetWidth;
            d == a && (a = c.clientWidth);
            b("nullthrows")(document.body).removeChild(c);
            g._scrollbarSize = d - a
        },
        getScrollbarSize: function() {
            g._scrollbarSize === null && g._initScrollbarSize();
            return b("nullthrows")(g._scrollbarSize)
        },
        scrollTo: function(a, c, d, e, f, h) {
            __p && __p();
            var i, j = 0;
            c == null || c === !0 ? j = 750 : typeof c === "number" ? j = c : parseInt(c, 10) && (j = parseInt(c, 10));
            b("isAsyncScrollQuery")() && (j = 0);
            var k;
            if (a instanceof b("Vector")) k = a;
            else {
                c = b("Vector").getScrollPosition().x;
                a = b("Vector").getElementPosition(b("ge")(a)).y;
                k = new(b("Vector"))(c, a, "document");
                e || (k.y -= b("ViewportBounds").getTop() / (d ? 2 : 1))
            }
            d ? k.y -= b("Vector").getViewportDimensions().y / 2 : e && (k.y -= b("Vector").getViewportDimensions().y, k.y += e);
            f && (k.y -= f);
            k = k.convertTo("document");
            if (j)
                if ("scrollBehavior" in b("nullthrows")(document.documentElement).style && j === 750 && !h) try {
                    window.scrollTo({
                        left: k.x,
                        top: k.y,
                        behavior: "smooth"
                    })
                } catch (a) {
                    window.scrollTo(k.x, k.y)
                } else {
                    var l = b("ifRequired")("Animation", function(a) {
                        g._setScrollingForDuration(j);
                        return new a(b("nullthrows")(document.body)).to("scrollTop", k.y).to("scrollLeft", k.x).ease(a.ease.end).duration(j).ondone(h).go()
                    }, function() {
                        window.scrollTo(k.x, k.y), h && h()
                    });
                    l && (i = function() {
                        l.stop()
                    })
                } else window.scrollTo(k.x, k.y), h && h();
            b("Arbiter").inform(g.SCROLL);
            return i || b("emptyFunction")
        },
        scrollToID: function(a) {
            g.scrollTo(a)
        },
        ensureVisible: function(a, c, d, e, f) {
            var h = b("Vector").getScrollPosition().x;
            a = this._getBounds(a, c, d);
            c = a[0];
            d = a[1];
            var i = a[2];
            a = a[3];
            i < c ? g.scrollTo(new(b("Vector"))(h, i, "document"), e, !1, 0, 0, f) : a > d ? i - (a - d) < c ? g.scrollTo(new(b("Vector"))(h, i, "document"), e, !1, 0, 0, f) : g.scrollTo(new(b("Vector"))(h, a, "document"), e, !1, 1, 0, f) : f && f()
        },
        isCurrentlyVisible: function(a, b, c) {
            a = this._getBounds(a, b, c);
            b = a[0];
            c = a[1];
            var d = a[2];
            a = a[3];
            return d >= b && a <= c
        },
        _getBounds: function(a, c, d) {
            __p && __p();
            d == null && (d = 10);
            a = b("ge")(a);
            c && (a = b("DOMQuery").find(a, c));
            c = b("Vector").getScrollPosition().y;
            var e = c + b("Vector").getViewportDimensions().y,
                f = b("Vector").getElementPosition(a).y;
            a = f + b("Vector").getElementDimensions(a).y;
            f -= b("ViewportBounds").getTop();
            f -= d;
            a += d;
            return [c, e, f, a]
        },
        scrollToTop: function(a) {
            var c = b("Vector").getScrollPosition();
            g.scrollTo(new(b("Vector"))(c.x, 0, "document"), a !== !1)
        },
        currentlyScrolling: function() {
            return g._scrolling
        },
        _setScrollingForDuration: function(a) {
            g._scrolling = !0, g._scrollingFinishedTimeout && (clearTimeout(g._scrollingFinishedTimeout), g._scrollingFinishedTimeout = null), g._scrollingFinishedTimeout = setTimeout(function() {
                g._scrolling = !1, g._scrollingFinishedTimeout = null
            }, a)
        }
    };
    e.exports = g
}), null);
__d("DOMTraverser", ["DOM"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        previousNode: function(a) {
            if (a.previousElementSibling) {
                var b = a.previousElementSibling;
                while (b.lastElementChild !== null) b = b.lastElementChild;
                return b
            }
            return a.parentElement
        },
        nextNode: function(a) {
            __p && __p();
            if (a.firstElementChild) return a.firstElementChild;
            if (a.nextElementSibling) return a.nextElementSibling;
            a = a.parentElement;
            while (a != null) {
                if (a.nextElementSibling) return a.nextElementSibling;
                a = a.parentElement
            }
            return null
        },
        previousFilteredNode: function(a, b, c) {
            __p && __p();
            if (b === a) return null;
            b = g.previousNode(b);
            while (b != null) {
                if (b instanceof HTMLElement && c(b)) return b;
                if (b === a) return null;
                b = g.previousNode(b)
            }
            return null
        },
        nextFilteredNode: function(a, c, d) {
            c = g.nextNode(c);
            while (c != null) {
                if (a && !b("DOM").contains(a, c)) return null;
                if (c instanceof HTMLElement && d(c)) return c;
                c = g.nextNode(c)
            }
            return null
        }
    };
    e.exports = g
}), null);
__d("XReferer", ["Base64", "Cookie", "FBJSON", "URI", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g, h = {
        update: function(a, c, d) {
            __p && __p();
            if (!d) {
                b("Cookie").set("x-referer", "");
                return
            }
            a != null && (a = h.truncatePath(a));
            c != null && (c = h.truncatePath(c));
            var e = window.location.pathname + window.location.search;
            d = (g || (g = b("URI"))).getRequestURI();
            var f = d.getSubdomain();
            c != null && h._setCookie(c, e, f);
            a != null && b("setTimeoutAcrossTransitions")(function() {
                a != null && h._setCookie(a, e, f)
            }, 0)
        },
        _setCookie: function(a, c, d) {
            a = {
                r: a,
                h: c,
                s: d
            };
            c = b("Base64").encode(b("FBJSON").stringify(a));
            b("Cookie").set("x-referer", c)
        },
        truncatePath: function(a) {
            var b = 1024;
            a && a.length > b && (a = a.substring(0, b) + "...");
            return a
        }
    };
    e.exports = h
}), null);
__d("HistoryManager", ["Env", "Event", "SprinkleConfig", "URI", "UserAgent_DEPRECATED", "XReferer", "emptyFunction", "gkx", "goOrReplace", "isInIframe", "setIntervalAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g, h, i = {
        history: null,
        current: 0,
        fragment: null,
        isInitialized: function() {
            return !!i._initialized
        },
        init: function() {
            __p && __p();
            if (!(g || (g = b("Env"))).ALLOW_TRANSITION_IN_IFRAME && b("isInIframe")()) return;
            if (i._initialized) return i;
            var a = new(h || (h = b("URI")))(window.location.href),
                c = a.getFragment() || "";
            c.charAt(0) === "!" && (c = c.substr(1), a.setFragment(c));
            Object.assign(i, {
                _initialized: !0,
                fragment: c,
                orig_fragment: c,
                history: [a],
                callbacks: [],
                lastChanged: Date.now(),
                canonical: new h("#"),
                user: 0,
                enabled: !0,
                debug: b("emptyFunction")
            });
            if (window.history && window.history.pushState) {
                this.lastURI = document.URL;
                if (b("gkx")("678676")) {
                    c = new(h || (h = b("URI")))(this.lastURI);
                    a = c.getQueryData();
                    a.__md__ = void 0;
                    a.__xts__ = void 0;
                    a.fb_dtsg_ag = void 0;
                    a[b("SprinkleConfig").param_name] = void 0;
                    this.lastURI = c.setQueryData(a).toString()
                }
                try {
                    window.history.state && b("gkx")("819236") ? window.history.replaceState(window.history.state, null, this.lastURI) : window.history.replaceState(this.lastURI, null, this.lastURI)
                } catch (a) {
                    if (!(a.number === -2147467259)) throw a
                }
                b("Event").listen(window, "popstate", function(a) {
                    var c = a && a.state && typeof a.state === "string";
                    c && i.lastURI != a.state && (i.lastURI = document.URL, i.lastChanged = Date.now(), i.notify(new(h || (h = b("URI")))(a.state).getUnqualifiedURI().toString()))
                }.bind(i));
                (b("UserAgent_DEPRECATED").webkit() < 534 || b("UserAgent_DEPRECATED").chrome() <= 13) && (b("setIntervalAcrossTransitions")(i.checkURI, 42), i._updateRefererURI(this.lastURI));
                return i
            }
            i._updateRefererURI(h.getRequestURI(!1));
            if (b("UserAgent_DEPRECATED").webkit() < 500 || b("UserAgent_DEPRECATED").firefox() < 2) {
                i.enabled = !1;
                return i
            }
            "onhashchange" in window ? b("Event").listen(window, "hashchange", function() {
                window.setTimeout(i.checkURI.bind(i), 0)
            }) : b("setIntervalAcrossTransitions")(i.checkURI, 42);
            return i
        },
        registerURIHandler: function(a) {
            i.callbacks.push(a);
            return i
        },
        setCanonicalLocation: function(a) {
            i.canonical = new(h || (h = b("URI")))(a);
            return i
        },
        notify: function(a) {
            a == i.orig_fragment && (a = i.canonical.getFragment());
            for (var b = 0; b < i.callbacks.length; b++) try {
                if (i.callbacks[b](a)) return !0
            } catch (a) {}
            return !1
        },
        checkURI: function() {
            __p && __p();
            if (Date.now() - i.lastChanged < 400) return;
            if (window.history && window.history.pushState) {
                var a = new(h || (h = b("URI")))(document.URL).removeQueryData("ref").toString(),
                    c = new h(i.lastURI).removeQueryData("ref").toString();
                a != c && (i.lastChanged = Date.now(), i.lastURI = a, b("UserAgent_DEPRECATED").webkit() < 534 && i._updateRefererURI(a), i.notify(new(h || (h = b("URI")))(a).getUnqualifiedURI().toString()));
                return
            }
            if (b("UserAgent_DEPRECATED").webkit() && window.history.length == 200) {
                i.warned || (i.warned = !0);
                return
            }
            c = new(h || (h = b("URI")))(window.location.href).getFragment();
            c.charAt(0) == "!" && (c = c.substr(1));
            c = c.replace(/%23/g, "#");
            if (c != i.fragment.replace(/%23/g, "#")) {
                i.debug([c, " vs ", i.fragment, "whl: ", window.history.length, "QHL: ", i.history.length].join(" "));
                for (var a = i.history.length - 1; a >= 0; --a)
                    if (i.history[a].getFragment().replace(/%23/g, "#") == c) break;
                ++i.user;
                a >= 0 ? i.go(a - i.current) : i.go("#" + c);
                --i.user
            }
        },
        _updateRefererURI: function(a) {
            a instanceof(h || (h = b("URI"))) && (a = a.toString()), b("XReferer").update(a, null, !0)
        },
        go: function(a, c, d) {
            __p && __p();
            if (window.history && window.history.pushState) {
                c || typeof a === "number";
                var e = new(h || (h = b("URI")))(a).removeQueryData(["ref", "messaging_source", "ajaxpipe_fetch_stream", "fb_dtsg_ag", b("SprinkleConfig").param_name]).toString();
                i.lastChanged = Date.now();
                this.lastURI = e;
                d ? window.history.replaceState(a, null, e) : window.history.pushState(a, null, e);
                b("UserAgent_DEPRECATED").webkit() < 534 && i._updateRefererURI(a);
                return !1
            }
            i.debug("go: " + a);
            c === void 0 && (c = !0);
            if (!i.enabled && !c) return !1;
            if (typeof a === "number") {
                if (!a) return !1;
                e = a + i.current;
                var f = Math.max(0, Math.min(i.history.length - 1, e));
                i.current = f;
                e = i.history[f].getFragment() || i.orig_fragment;
                e = new(h || (h = b("URI")))(e).removeQueryData("ref").getUnqualifiedURI().toString();
                i.fragment = e;
                i.lastChanged = Date.now();
                i.user || b("goOrReplace")(window.location, window.location.href.split("#")[0] + "#!" + e, d);
                c && i.notify(e);
                i._updateRefererURI(e);
                return !1
            }
            a = new(h || (h = b("URI")))(a);
            a.getDomain() == new(h || (h = b("URI")))(window.location.href).getDomain() && (a = new(h || (h = b("URI")))("#" + a.getUnqualifiedURI()));
            f = i.history[i.current].getFragment();
            e = a.getFragment();
            if (e == f || f == i.orig_fragment && e == i.canonical.getFragment()) {
                c && i.notify(e);
                i._updateRefererURI(e);
                return !1
            }
            d && i.current--;
            f = i.history.length - i.current - 1;
            i.history.splice(i.current + 1, f);
            i.history.push(new h(a));
            return i.go(1, c, d)
        },
        getCurrentFragment: function() {
            var a = (h || (h = b("URI"))).getRequestURI(!1).getFragment();
            return a == i.orig_fragment ? i.canonical.getFragment() : a
        }
    };
    e.exports = i
}), null);
__d("KeyboardShortcutToken", ["KeyEventController"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a, b, c) {
            this.$1 = !0, this.key = a, this.handler = b, this.filter = c.filter, this.persistOnTransition = c.persistOnTransition, this.shortcutInfo = c.shortcutInfo, this.register()
        }
        var c = a.prototype;
        c.register = function() {
            var a = this;
            if (!this.$1) return;
            this.token = b("KeyEventController").registerKey(this.key, this.handler, this.filter, !1, function() {
                return a.persistOnTransition
            })
        };
        c.remove = function() {
            this.token.remove(), this.$1 = !1
        };
        c.unregister = function() {
            this.token.remove()
        };
        c.isActive = function() {
            return this.$1
        };
        c.getKey = function() {
            return this.key
        };
        c.getShortcutInfo = function() {
            return this.shortcutInfo
        };
        return a
    }();
    e.exports = a
}), null);
__d("PageTransitions", ["requireCond", "cr:917439"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:917439")
}), null);
__d("translateKey", ["fbt", "invariant"], (function(a, b, c, d, e, f, g, h) {
    var i = {
        alt: g._("alt"),
        enter: g._("enter"),
        "delete": g._("delete"),
        shift: g._("shift"),
        opt: g._("opt"),
        ctrl: g._("ctrl"),
        cmd: g._("cmd"),
        esc: g._("esc"),
        tab: g._("tab"),
        up: g._("up"),
        down: g._("down"),
        right: g._("right"),
        left: g._("left"),
        page_up: g._("page up"),
        page_down: g._("page down"),
        home: g._("home"),
        end: g._("end")
    };

    function a(a) {
        if (Object.prototype.hasOwnProperty.call(i, a)) return i[a];
        a.length === 1 || h(0, 2507);
        return a
    }
    e.exports = a
}), null);
__d("KeyboardShortcuts", ["csx", "cx", "fbt", "Arbiter", "BasicFBNux", "CSS", "Dock", "KeyboardShortcutToken", "KeyEventController", "Layer", "ModalLayer", "NavigationMessage", "PageTransitions", "Run", "emptyFunction", "translateKey"], (function(a, b, c, d, e, f, g, h, i) {
    __p && __p();
    a = {
        _arbiter: null,
        _hasTriggeredShortcut: !1,
        _flyoutNub: null,
        _nubNux: null,
        _nubNuxID: null,
        _tokenLayers: [],
        showInfo: b("emptyFunction"),
        register: function(a, c, d) {
            __p && __p();
            var e = this,
                f = d ? d : {};
            d = function(a, b) {
                c.call(e, a, b), f.allowDefault || a.prevent(), e._hasTriggeredShortcut || e._handleFirstShortcutTriggered()
            };
            var g = f.baseFilters || [b("KeyEventController").defaultFilter],
                h = function(a, b) {
                    __p && __p();
                    for (var c = g, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var h;
                        if (d) {
                            if (e >= c.length) break;
                            h = c[e++]
                        } else {
                            e = c.next();
                            if (e.done) break;
                            h = e.value
                        }
                        h = h;
                        if (!h(a, b)) return !1
                    }
                    return !f.filter || f.filter(a, b)
                };
            a = new(b("KeyboardShortcutToken"))(a, d, {
                filter: h,
                persistOnTransition: f.persistOnTransition,
                shortcutInfo: f.shortcutInfo
            });
            this._tokenLayers.length || this._tokenLayers.push([]);
            this._tokenLayers[this._tokenLayers.length - 1].push(a);
            this.inform("token_added");
            return a
        },
        init: function() {
            __p && __p();
            var a = this;
            this._cleanup = this._cleanup.bind(this);
            b("Run").onLeave(this._cleanup);
            b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN, this._cleanup);
            b("Layer").subscribe("show", function(c, d) {
                d.hasBehavior(b("ModalLayer")) && a.pushLayer()
            });
            b("Layer").subscribe("hide", function(c, d) {
                d.hasBehavior(b("ModalLayer")) && a.popLayer()
            });
            this.register("SLASH", function() {
                var c = a._getFlyoutNub();
                c && b("Dock").toggle(c)
            }, {
                filter: function(a, b) {
                    return a.getModifiers().shift
                },
                persistOnTransition: !0,
                shortcutInfo: {
                    displayKeys: [b("translateKey")("?")],
                    description: i._("Show this help dialog")
                }
            })
        },
        _cleanup: function() {
            __p && __p();
            var a = this,
                c = [];
            this._tokenLayers.forEach(function(a) {
                var b = [];
                a.forEach(function(a) {
                    a.isActive() && b.push(a)
                });
                b.length && c.push(b)
            });
            this._tokenLayers = c;
            this.inform("cleanup");
            b("PageTransitions").registerCompletionCallback(function() {
                b("Run").onLeave(a._cleanup), b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN, a._cleanup)
            })
        },
        pushLayer: function() {
            var a = this._getTopLayer();
            a && a.forEach(function(a) {
                a.unregister()
            });
            this._tokenLayers.push([])
        },
        popLayer: function() {
            if (this._tokenLayers.length === 0) return;
            var a = this._tokenLayers.pop();
            a.forEach(function(a) {
                a.remove()
            });
            a = this._getTopLayer();
            a && a.forEach(function(a) {
                a.register()
            })
        },
        _getTopLayer: function() {
            return !this._tokenLayers.length ? null : this._tokenLayers[this._tokenLayers.length - 1]
        },
        _getBaseLayer: function() {
            return !this._tokenLayers.length ? null : this._tokenLayers[0]
        },
        getShortcutInfos: function() {
            var a = [],
                b = this._getBaseLayer();
            b && b.forEach(function(b) {
                var c = b.getShortcutInfo();
                b.isActive() && c != null && a.push(c)
            });
            return a
        },
        _getArbiterInstance: function() {
            this._arbiter || (this._arbiter = new(b("Arbiter"))());
            return this._arbiter
        },
        inform: function(a, b, c) {
            return this._getArbiterInstance().inform(a, b, c)
        },
        subscribe: function(a, b, c) {
            return this._getArbiterInstance().subscribe(a, b, c)
        },
        unsubscribe: function(a) {
            this._getArbiterInstance().unsubscribe(a)
        },
        _handleFirstShortcutTriggered: function() {
            this._hasTriggeredShortcut = !0;
            var a = this._getFlyoutNub();
            a && (b("CSS").removeClass(a, "_ur5"), this._nubNux && this._nubNuxID && (this._nubNux.show(), b("BasicFBNux").onView(this._nubNuxID), this._nubNux.subscribe("hide", b("BasicFBNux").onDismiss.bind(this, this._nubNuxID))))
        },
        _getFlyoutNub: function() {
            this._flyoutNub || (this._flyoutNub = document.querySelector("#pagelet_dock ._rz3"));
            return this._flyoutNub
        },
        showShortcutFlyout: function() {
            this._hasTriggeredShortcut || this._handleFirstShortcutTriggered();
            var a = this._getFlyoutNub();
            a && b("Dock").show(a)
        },
        hasFlyoutToShow: function() {
            return this._getFlyoutNub() != null && this.getShortcutInfos().length > 0
        },
        initNUXEvent: function(a, b) {
            this._nubNux = a, this._nubNuxID = b
        }
    };
    a.init();
    e.exports = a
}), null);
__d("escapeJSQuotes", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return typeof a === "undefined" || a == null || !a.valueOf() ? "" : a.toString().replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\"/g, "\\x22").replace(/\'/g, "\\'").replace(/</g, "\\x3c").replace(/>/g, "\\x3e").replace(/&/g, "\\x26")
    }
    e.exports = a
}), null);
__d("PageTransitionsBlue", ["fbt", "invariant", "Arbiter", "BlueCompatBroker", "BlueCompatRouter", "Bootloader", "DOMQuery", "DOMScroll", "Env", "ErrorUtils", "Event", "FbtResultBase", "HistoryManager", "JSLogger", "LayerHideOnEscape", "PageHooks", "PageNavigationStageLogger", "PageTransitionsConfig", "PageTransitionsRegistrar", "React", "ScriptPath", "URI", "Vector", "areEqual", "clickRefAction", "escapeJSQuotes", "ge", "goOrReplace", "isFacebookURI", "isInIframe", "setTimeout"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    var i, j, k, l, m = ["cquick", "ctarget", "cquick_token", "mh_", "killabyte", "tfc_", "tfi_"],
        n = {};

    function o(a, b) {
        a && (n[a.getUnqualifiedURI().toString()] = b)
    }

    function p(a) {
        return n[a.getUnqualifiedURI().toString()]
    }

    function q(a) {
        delete n[a.getUnqualifiedURI().toString()]
    }

    function r() {
        var a = {};
        window.location.search.slice(1).split("&").forEach(function(b) {
            b = b.split("=");
            var c = b[0];
            b = b[1];
            b = b === void 0 ? null : b;
            m.some(function(a) {
                return c.startsWith(a)
            }) && (a[c] = b)
        });
        return a
    }
    var s = null,
        t = !1,
        u = new(i || (i = b("URI")))(""),
        v = null,
        w = new i(),
        x = null,
        y = !1,
        z = !1,
        A = !1,
        B = {
            isInitialized: function() {
                return t
            },
            init: function() {
                B._init()
            },
            _init: function() {
                __p && __p();
                if (b("isInIframe")()) return !1;
                if (t) return !0;
                var a = b("PageTransitionsRegistrar").getMostRecentURI();
                s = a;
                u = a;
                v = null;
                w = a;
                var c = (j || (j = b("ErrorUtils"))).applyWithGuard(function(a) {
                    return new(i || (i = b("URI")))(a)
                }, null, [document.referrer]);
                x = document.referrer && c && b("isFacebookURI")(c) ? c : null;
                t = !0;
                c = (i || (i = b("URI"))).getRequestURI(!1);
                c.getFragment().startsWith("/") ? c = c.getFragment() : c = a.toString();
                b("HistoryManager").init().setCanonicalLocation("#" + c).registerURIHandler(B._historyManagerHandler);
                b("Event").listen(window, "scroll", function() {
                    y || o(s, b("Vector").getScrollPosition())
                });
                return !0
            },
            registerHandler: b("PageTransitionsRegistrar").registerHandler,
            removeHandler: b("PageTransitionsRegistrar").removeHandler,
            getCurrentURI: function(a) {
                a === void 0 && (a = !1);
                this._init();
                return !s && !a ? new(i || (i = b("URI")))(u) : new(i || (i = b("URI")))(s)
            },
            isTransitioning: function() {
                this._init();
                return !s
            },
            getNextURI: function() {
                this._init();
                return w
            },
            getNextReferrerURI: function() {
                this._init();
                return v
            },
            getReferrerURI: function() {
                this._init();
                return x
            },
            getMostRecentURI: function() {
                this._init();
                return new(i || (i = b("URI")))(u)
            },
            go: function(a, c) {
                c === void 0 && (c = !1);
                if (b("BlueCompatRouter").go(a)) return;
                this.goBase(a, c)
            },
            goBase: function(a, c) {
                c === void 0 && (c = !1);
                this._init();
                var d = r(),
                    e = new(i || (i = b("URI")))(a).removeQueryData("quickling").addQueryData(d).getQualifiedURI();
                b("JSLogger").create("pagetransition").debug("go", {
                    uri: e.toString()
                });
                q(e);
                c || b("clickRefAction")("uri", {
                    href: e.toString()
                }, null, "INDIRECT");
                B._loadPage(e, function(a) {
                    a ? b("HistoryManager").go(e.toString(), !1, c) : (b("PageNavigationStageLogger").setNote("pt_not_handled"), b("PageNavigationStageLogger").updateCookie(), b("goOrReplace")(window.location, e, c))
                })
            },
            _historyManagerHandler: function(a) {
                if (a.charAt(0) != "/") return !1;
                b("clickRefAction")("h", {
                    href: a
                });
                b("ScriptPath").getClickPointInfo() || b("ScriptPath").setClickPointInfo({
                    click: "back"
                });
                B._loadPage(new(i || (i = b("URI")))(a), function(c) {
                    c || (b("PageNavigationStageLogger").setNote("hist_manager_fallback"), b("goOrReplace")(window.location, a, !0))
                });
                return !0
            },
            _loadPage: function(a, c) {
                __p && __p();
                if (new(i || (i = b("URI")))(a).getFragment() && (k || (k = b("areEqual")))(new(i || (i = b("URI")))(a).setFragment(null).getQualifiedURI(), new(i || (i = b("URI")))(s).setFragment(null).getQualifiedURI())) {
                    b("Arbiter").inform("pre_page_fragment_transition", {
                        from: new(i || (i = b("URI")))(s).getFragment(),
                        to: new i(a).getFragment()
                    });
                    if (B.restoreScrollPosition(a)) {
                        s = u = a;
                        b("Arbiter").inform("page_fragment_transition", {
                            fragment: new(i || (i = b("URI")))(a).getFragment()
                        });
                        return
                    }
                }
                b("PageNavigationStageLogger").setCookieForNavigation(a);
                var d;
                s && (d = p(s));
                var e = function() {
                        d && s && o(s, d);
                        v = B.getMostRecentURI();
                        s = null;
                        w = a;
                        d && b("DOMScroll").scrollTo(d, !1);
                        y = !0;
                        var e = B._handleTransition(a);
                        c && (e === b("PageTransitionsRegistrar").DELAY_HISTORY ? b("setTimeout")(function() {
                            return c && c(e)
                        }, 0) : c(e))
                    },
                    f = w;
                w = a;
                var g = b("PageHooks").runHooks("onbeforeleavehooks");
                w = f;
                g ? B._warnBeforeLeaving(g, e) : e()
            },
            _handleTransition: function(c) {
                __p && __p();
                window.onbeforeleavehooks = void 0;
                if (z || !c.isSameOrigin()) {
                    b("PageNavigationStageLogger").setNote("pt_disabled");
                    return !1
                }
                var d = b("PageTransitionsConfig").reloadOnBootloadError && this._hasBootloadErrors();
                if (d) {
                    b("PageNavigationStageLogger").setNote("bl_err");
                    return !1
                }
                var e;
                d = a.AsyncRequest;
                d && (e = d.getLastID());
                b("Arbiter").inform("pre_page_transition", {
                    from: B.getMostRecentURI(),
                    to: c
                });
                d = b("PageTransitionsRegistrar")._getTransitionHandlers();
                for (var f = d.length - 1; f >= 0; --f) {
                    var g = d[f];
                    if (!g) continue;
                    for (var h = g.length - 1; h >= 0; --h) {
                        var i = g[h](c);
                        if (i === !0 || i === b("PageTransitionsRegistrar").DELAY_HISTORY) {
                            var j = {
                                sender: this,
                                uri: c,
                                id: e
                            };
                            try {
                                b("Arbiter").inform("page_transition", j)
                            } catch (a) {}
                            return i
                        } else g.splice(h, 1)
                    }
                }
                return !1
            },
            disableTransitions: function() {
                z = !0
            },
            disableScrollAnimation: function() {
                A = !0
            },
            _hasBootloadErrors: function() {
                return b("Bootloader").getErrorUrls().length > 0
            },
            unifyURI: function() {
                this._init(), s = u = w, x = v
            },
            transitionComplete: function(a) {
                a === void 0 && (a = !1);
                this._init();
                y = !1;
                B._executeCompletionCallbacks();
                B.unifyURI();
                a || s && B.restoreScrollPosition(s);
                try {
                    document.activeElement && document.activeElement.nodeName === "A" && document.activeElement.blur()
                } catch (a) {}
            },
            _executeCompletionCallbacks: function() {
                var a = b("PageTransitionsRegistrar")._getCompletionCallbacks();
                a.length > 0 && (b("PageTransitionsRegistrar")._resetCompletionCallbacks(), a.forEach(function(a) {
                    return a()
                }))
            },
            registerCompletionCallback: b("PageTransitionsRegistrar").registerCompletionCallback,
            rewriteCurrentURI: function(a, c) {
                __p && __p();
                this._init();
                var d = b("PageTransitionsRegistrar")._getTransitionHandlers(),
                    e = d.length || 1,
                    f = !1;
                b("PageTransitionsRegistrar").registerHandler(function() {
                    if (a && a.toString() == B.getMostRecentURI().getUnqualifiedURI().toString()) {
                        B.transitionComplete();
                        return !0
                    }
                    f = !0
                }, e);
                B.go(c, !0);
                d.length === e + 1 && d[e].length === (f ? 0 : 1) || h(0, 1302);
                d.length = e
            },
            _warnBeforeLeaving: function(a, c) {
                b("Bootloader").loadModules(["DialogX", "XUIDialogTitle.react", "XUIDialogBody.react", "XUIDialogButton.react", "XUIDialogFooter.react", "XUIGrayText.react"], function(d, e, f, h, i, j) {
                    var k = typeof a === "string" || a instanceof String || a instanceof b("FbtResultBase") ? {
                        body: a,
                        highlightStay: !1,
                        leaveButtonText: g._("Leave This Page"),
                        showCloseButton: !1,
                        stayButtonText: g._("Stay on This Page"),
                        title: g._("Leave Page?")
                    } : a;
                    e = b("React").jsx(e, {
                        showCloseButton: k.showCloseButton,
                        children: k.title
                    });
                    h = k.highlightStay ? [b("React").jsx(h, {
                        action: "confirm",
                        label: k.leaveButtonText
                    }, "confirm"), b("React").jsx(h, {
                        action: "cancel",
                        use: "confirm",
                        label: k.stayButtonText
                    }, "cancel")] : [b("React").jsx(h, {
                        action: "cancel",
                        label: k.stayButtonText
                    }, "cancel"), b("React").jsx(h, {
                        action: "confirm",
                        use: "confirm",
                        label: k.leaveButtonText
                    }, "confirm")];
                    var l = new d({
                        width: 450,
                        addedBehaviors: [b("LayerHideOnEscape")]
                    }, b("React").jsxs("div", {
                        children: [e, b("React").jsx(f, {
                            children: b("React").jsx(j, {
                                shade: "medium",
                                size: "medium",
                                children: k.body
                            })
                        }), b("React").jsx(i, {
                            children: h
                        })]
                    }));
                    l.subscribe("confirm", function() {
                        l.hide(), c()
                    });
                    l.show()
                }, "PageTransitionsBlue")
            },
            restoreScrollPosition: function(a) {
                __p && __p();
                var c = p(a);
                if (c) {
                    b("DOMScroll").scrollTo(c, !1);
                    return !0
                }

                function d(a) {
                    if (!a) return null;
                    var c = "a[name='" + b("escapeJSQuotes")(a) + "']";
                    return b("DOMQuery").scry(document.body, c)[0] || b("ge")(a)
                }
                c = d(new(i || (i = b("URI")))(a).getFragment());
                if (c) {
                    d = !A;
                    b("DOMScroll").scrollTo(c, d);
                    return !0
                }
                return !1
            }
        };
    (l || (l = b("Env"))).isCQuick && (b("BlueCompatBroker").init(), b("BlueCompatBroker").register("transitionpage", function(c) {
        c = b("BlueCompatBroker").getMessageEventString(c, "uri");
        if (window.location.href === c) return;
        var d = a.AsyncRequest;
        d && d.ignoreUpdate();
        B.goBase(c, !1)
    }));
    e.exports = B;
    a.PageTransitions = B
}), null);
__d("WebPixelRatio", ["SiteData"], (function(a, b, c, d, e, f) {
    a = {
        get: function() {
            return b("SiteData").pr != null && b("SiteData").pr > 0 ? b("SiteData").pr : window.devicePixelRatio || 1
        }
    };
    e.exports = a
}), null);
__d("WebPixelRatioDetector", ["Cookie", "DOMEventListener", "PixelRatioConst", "Run"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = b("PixelRatioConst").cookieName,
        h = !1,
        i = !1,
        j = !1;

    function k() {
        return window.devicePixelRatio || 1
    }

    function l() {
        b("Cookie").set(g, String(k()))
    }

    function m() {
        b("Cookie").clear(g)
    }

    function n() {
        if (i) return;
        i = !0;
        j && m();
        k() !== 1 ? l() : m()
    }
    a = {
        startDetecting: function(a) {
            a && (j = !0);
            if (h) return;
            h = !0;
            "onpagehide" in window && b("DOMEventListener").add(window, "pagehide", n);
            b("Run").onBeforeUnload(n, !1)
        }
    };
    e.exports = a
}), null);
__d("onEnclosingPageletDestroy", ["Arbiter", "DOMQuery"], (function(a, b, c, d, e, f) {
    function a(a, c) {
        var d = b("Arbiter").subscribe("pagelet/destroy", function(e, f) {
            b("DOMQuery").contains(f.root, a) && (d.unsubscribe(), c())
        });
        return d
    }
    e.exports = a
}), null);
__d("tidyEvent", ["Run"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = [];

    function h() {
        while (g.length) {
            var a = g.shift();
            a.remove ? a.remove() : a.unsubscribe && a.unsubscribe()
        }
    }

    function i(a) {
        __p && __p();
        var b, c = a;

        function d() {
            if (!b) return;
            b.apply(c, arguments);
            b = null;
            c = null
        }
        if (c && c.remove) b = c.remove, c.remove = d;
        else {
            b = (a = c) == null ? void 0 : a.unsubscribe;
            c.unsubscribe = d
        }
        return c
    }

    function a(a) {
        g.length || b("Run").onLeave(h);
        if (Array.isArray(a))
            for (var c = 0; c < a.length; c++) a[c] && g.push(i(a[c]));
        else a && g.push(i(a));
        return a
    }
    e.exports = a
}), null);
__d("ReactComposerEvents", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        CHANGE: "change",
        INSTANCE_MOUNTED: "composer/instanceMounted/",
        ACTIVATE_ATTACHMENT: "composer/activateAttachment/",
        MENTION_INPUT_FOCUS: "composer/mentionInputFocused/",
        TEXT_PREFILL_BEFORE_BOOTLOAD: "composer/textPrefillBeforeBootload/",
        RERENDER_MENTION_INPUT: "reactComposer/rerenderMentionInput/",
        OPTIMISTIC_POSTING_STARTED: "composer/optimisticPostingStarted/",
        POST_FINALLY: "composer/postFinally/",
        POST_STARTED: "composer/postStarted/",
        POST_SUCCEEDED: "composer/postSucceeded/",
        COMPOSER_RESET: "composer/reset/",
        COMPOSER_UNMOUNT: "composer/unmount/",
        SET_PREFILL_DATA: "reactComposer/setPrefillData/",
        RICH_TEXT_EDITOR_MOUNTED: "reactComposer/richTextEditorMounted/",
        SAVE_STARTED: "composer/saveStarted/",
        HIGHLIGHT_TOP_COMPOSER: "reactComposer/highlightTopComposer"
    });
    e.exports = a
}), null);
__d("ReactComposerConstants", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        ID_PREFIX: "rc.",
        GK_VIDEO_COPYRIGHT: "video_copyright_confirmation_dialog",
        GK_MULTILINGUAL_COMPOSER: "multilingual_composer_www",
        GK_PAGE_BREAKING_COMPOSER: "breaking_news_page"
    })
}), null);
__d("ReactComposerIDGenerator", ["ReactComposerConstants", "uniqueID"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getID: function() {
            return b("ReactComposerConstants").ID_PREFIX + b("uniqueID")()
        },
        isComposerID: function(a) {
            return !!a && a.startsWith(b("ReactComposerConstants").ID_PREFIX)
        }
    };
    e.exports = a
}), null);
__d("AbstractDockingElement", ["Arbiter", "Event", "FullScreen", "Run", "SubscriptionsHandler", "onEnclosingPageletDestroy", "queryThenMutateDOM", "removeFromArray"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = [],
        h = null;

    function i() {
        if (b("FullScreen").isFullScreen()) return;
        b("queryThenMutateDOM")(function() {
            return g.forEach(function(a) {
                return a.queryDOM()
            })
        }, function() {
            return g.forEach(function(a) {
                return a.updateWithCache()
            })
        }, "AbstractDockingElement")
    }

    function j() {
        h || (h = new(b("SubscriptionsHandler"))(), h.addSubscriptions(b("Event").listen(window, "scroll", i), b("Event").listen(window, "resize", i), b("Run").onLeave(function() {
            while (g.length) k(g[0])
        })), h = h);
        return h
    }

    function k(a) {
        __p && __p();
        try {
            a.onPageletDestroyed && b("Arbiter").unsubscribe(a.onPageletDestroyed)
        } catch (a) {} finally {
            a.onPageletDestroyed = null
        }
        if (!h || g.indexOf(a) === -1) return;
        b("removeFromArray")(g, a);
        if (g.length) return;
        h.release();
        h = null
    }
    e.exports = {
        register: function(c, d, e) {
            var a = j(),
                f = {
                    onPageletDestroyed: a.addSubscriptions(b("onEnclosingPageletDestroy")(c, function() {
                        k(f)
                    })),
                    queryDOM: d,
                    updateWithCache: e
                };
            g.push(f)
        }
    }
}), null);
__d("UITinyViewportAction", ["Arbiter", "ArbiterMixin", "CSS", "Event", "FullScreen", "getDocumentScrollElement", "queryThenMutateDOM", "throttle"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = document.documentElement,
        h, i, j, k, l = !1,
        m = !1,
        n = !1,
        o = {
            init: function(a) {
                __p && __p();
                a = b("throttle")(function() {
                    __p && __p();
                    if (b("FullScreen").isFullScreen()) return;
                    b("queryThenMutateDOM")(function() {
                        k = k || b("getDocumentScrollElement")(), i = g.clientWidth < k.scrollWidth - 1, j = g.clientHeight < 400, h = j || i
                    }, function() {
                        __p && __p();
                        if (h !== l || i !== m || j !== n) {
                            var a;
                            (a = b("CSS")).conditionClass(g, "tinyViewport", h);
                            a.conditionClass(g, "tinyWidth", i);
                            a.conditionClass(g, "tinyHeight", j);
                            a.conditionClass(g, "canHaveFixedElements", !h);
                            o.inform("change", h);
                            b("Arbiter").inform("tinyViewport/change", {
                                tiny: h,
                                tinyWidth: i,
                                tinyHeight: j
                            }, "state");
                            l = h;
                            m = i;
                            n = j
                        }
                    }, "TinyViewport")
                });
                a();
                b("Arbiter").subscribe("quickling/response", a);
                b("Event").listen(window, "resize", a);
                b("FullScreen").subscribe("changed", a)
            },
            isTiny: function() {
                return h
            },
            isTinyWidth: function() {
                return i
            },
            isTinyHeight: function() {
                return j
            }
        };
    Object.assign(o, b("ArbiterMixin"));
    e.exports = o
}), null);
__d("DirectionalDockingElement", ["cx", "AbstractDockingElement", "Arbiter", "CSS", "DOM", "Scroll", "Style", "UITinyViewportAction", "UserAgent", "ViewportBounds", "getElementPosition", "getStyleProperty", "queryThenMutateDOM"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = !0,
        i = !1,
        j = b("UserAgent").isBrowser("Safari < 10") || b("UserAgent").isBrowser("Mobile Safari < 10");
    a = function() {
        "use strict";
        __p && __p();

        function a(a) {
            this.$11 = null, this.$5 = 0, this.$2 = null, this.$7 = !1, this.$12 = a, this.$8 = 0, this.$11 = null, this.$13 = 0, this.register(), this.$14 = b("ViewportBounds").getTop(), b("Style").set(this.$12, "width", this.$12.getBoundingClientRect().width + "px"), this.$9 = b("DOM").create("div"), b("CSS").addClass(this.$9, "_lwx"), b("Style").set(this.$9, "position", "relative"), b("DOM").replace(this.$12, this.$9), b("DOM").appendContent(this.$9, this.$12), this.update()
        }
        var c = a.prototype;
        c.register = function() {
            b("AbstractDockingElement").register(this.getRoot(), this.__queryDOM.bind(this), this.__updateWithCache.bind(this))
        };
        c.subscribe = function(a, c, d) {
            this.$1 || (this.$1 = new(b("Arbiter"))());
            return this.$1.subscribe(a, c, d)
        };
        c.destroy = function() {
            b("DOM").replace(this.$9, this.$12)
        };
        c.__queryDOM = function() {
            __p && __p();
            var a = -b("getElementPosition")(this.$9).y;
            a !== this.$13 && (this.$15 = a > this.$13 ? i : h, this.$13 = a);
            this.$6 = this.$12.getBoundingClientRect();
            a = document;
            var c = a.body;
            a = a.documentElement;
            if (c && a) {
                var d = a.clientHeight;
                a = a.scrollHeight;
                this.$7 = b("Scroll").getTop(c) + d > Math.max(d, a)
            }
            if (j) {
                this.$11 = b("getElementPosition")(this.$9);
                c = parseInt(b("getStyleProperty")(this.$12, "left"), 10);
                this.$11 && !isNaN(c) && c !== this.$11.x && (this.$11 = babelHelpers["extends"]({}, this.$11, {
                    x: c
                }))
            }
            this.$12.style.position === "fixed" && (this.$5 = b("getElementPosition")(this.$12).y + this.$13)
        };
        c.$16 = function(a, c, d) {
            if (c === this.$4 && a === this.$3 && d === this.$2) return;
            var e = a !== this.$3,
                f = {};
            c !== this.$4 && (f.top = c + "px", this.$4 = c);
            a !== this.$3 && (f.position = a, this.$3 = a);
            j && (d !== this.$2 && (f.left = typeof d === "number" ? d + "px" : "auto", this.$2 = d));
            b("Style").apply(this.$12, f);
            e && this.$1 && this.$1.inform("changedposition")
        };
        c.$17 = function() {
            this.$16("fixed", this.$14, this.$11 ? this.$11.x : null)
        };
        c.$18 = function() {
            this.$16("fixed", this.$8, this.$11 ? this.$11.x : null)
        };
        c.$19 = function() {
            this.$16("absolute", this.$5, null)
        };
        c.unfixAndScrollBy = function(a) {
            this.$5 = Math.max(0, this.$5 - a), this.$19()
        };
        c.translateY = function(a) {
            var c = b("getElementPosition")(this.$12).y,
                d = b("getElementPosition")(this.$9).y;
            c = c - d;
            this.$5 = a + c;
            this.$19()
        };
        c.__updateWithCache = function() {
            __p && __p();
            var a = Math.round(this.$6.height);
            a !== this.$10 && (b("Style").set(this.$9, "height", a + "px"), this.$10 = a, this.$1 && this.$1.inform("changedheight"));
            if (this.$7) return;
            if (this.$13 + this.$14 < 0 || b("UITinyViewportAction").isTiny()) {
                this.$5 = 0;
                this.$19();
                b("Arbiter").inform("reflow");
                return
            }
            this.$15 === i && this.$13 + this.$8 >= this.$5 ? this.$18() : this.$15 === h && this.$13 + this.$14 <= this.$5 ? this.$17() : this.$19();
            b("Arbiter").inform("reflow")
        };
        c.update = function() {
            var a = this;
            b("queryThenMutateDOM")(function() {
                a.__queryDOM()
            }, function() {
                a.__updateWithCache()
            })
        };
        c.setOffset = function(a) {
            return this.setOffsetAndTop(a, this.$14)
        };
        c.setOffsetAndTop = function(a, c) {
            var d = this;
            b("queryThenMutateDOM")(function() {
                d.__queryDOM(), d.$8 = Math.round(a), d.$14 = c
            }, function() {
                d.__updateWithCache()
            });
            return this
        };
        c.setTop = function(a) {
            return this.setOffsetAndTop(this.$8, a)
        };
        c.getPlaceholder = function() {
            return this.$9
        };
        c.getRoot = function() {
            return this.$12
        };
        return a
    }();
    e.exports = a
}), null);
__d("DockingElement", ["cx", "AbstractDockingElement", "Arbiter", "CSS", "DOM", "DOMDimensions", "Style", "UIGridColumnsConfig", "UITinyViewportAction", "UserAgent", "getElementPosition"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = b("UserAgent").isBrowser("Safari") || b("UserAgent").isBrowser("Mobile Safari < 11");
    a = function() {
        "use strict";
        __p && __p();

        function a(a) {
            this.$12 = a, this.$9 = b("DOM").create("div"), b("CSS").addClass(this.$9, "_1pfm"), b("Style").set(this.$9, "position", "relative"), b("DOM").replace(this.$12, this.$9), b("DOM").appendContent(this.$9, this.$12), this.$8 = 0, this.$6 = !1, this.register(), this.update()
        }
        var c = a.prototype;
        c.register = function() {
            b("AbstractDockingElement").register(this.getRoot(), this.__queryDOM.bind(this), this.__updateWithCache.bind(this))
        };
        c.subscribe = function(a, c, d) {
            this.$1 || (this.$1 = new(b("Arbiter"))());
            return this.$1.subscribe(a, c, d)
        };
        c.__queryDOM = function() {
            var a = b("getElementPosition")(this.getPlaceholder()),
                c = b("DOMDimensions").getElementDimensions(this.$12);
            c.width > 0 && c.height > 0 ? (this.$11 = a, this.$5 = c) : this.$6 = !0
        };
        c.__updateWithCache = function() {
            __p && __p();
            if (this.$6 || this.$11 == null || this.$8 == null) {
                this.$6 = !1;
                return
            }
            var a = this.$8,
                c = this.getPlaceholder(),
                d = !b("UIGridColumnsConfig").responsive_rhc_when_narrow && b("UITinyViewportAction").isTiny();
            if (!d && this.$11 != null && this.$11.y <= a) {
                !this.$7 && this.$12.parentNode && (b("CSS").addClass(this.$12, "fixed_elem"), this.$7 = !0);
                var e;
                this.$4 !== a && (e = {}, e.top = a + "px", this.$4 = a);
                d = this.$5.width;
                d !== this.$3 && (e = e || {}, e.width = d + "px", this.$3 = d);
                if (h) {
                    a = this.$11.x;
                    a !== this.$2 && (e = e || {}, e.left = a + "px", this.$2 = a)
                }
                e && b("Style").apply(this.$12, e);
                d = this.$5.height;
                b("Style").set(c, "height", d + "px");
                (d + 1 < this.$10 || d - 1 > this.$10) && (this.$10 = d, this.$1 && this.$1.inform("changedheight"))
            } else this.$7 && (b("Style").set(c, "height", ""), b("Style").apply(this.$12, {
                left: "",
                top: "",
                width: ""
            }), b("CSS").removeClass(this.$12, "fixed_elem"), this.$7 = !1, this.$2 = null, this.$3 = null, this.$4 = null)
        };
        c.update = function() {
            this.__queryDOM(), this.__updateWithCache()
        };
        c.getPlaceholder = function() {
            return this.$9
        };
        c.getRoot = function() {
            return this.$12
        };
        c.setOffset = function(a) {
            this.$8 = a;
            this.update();
            return this
        };
        return a
    }();
    e.exports = a
}), null);
__d("FacebarPlaceholderShortcut", ["fbt", "KeyboardShortcuts", "translateKey"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a(a) {
            this._input = a, this._listener = null
        }
        var c = a.prototype;
        c.enable = function() {
            this._registerListener()
        };
        c._registerListener = function() {
            this._listener && this._listener.remove(), this._listener = b("KeyboardShortcuts").register("SLASH", this._handleKeydown.bind(this), {
                filter: function(a, b) {
                    return !a.getModifiers().shift
                },
                persistOnTransition: !0,
                shortcutInfo: {
                    displayKeys: [b("translateKey")("/")],
                    description: g._("Search")
                }
            })
        };
        c.disable = function() {
            this._listener && this._listener.remove(), this._listener = null
        };
        c._handleKeydown = function(a) {
            this._input.focus();
            return !1
        };
        return a
    }();
    e.exports = a
}), null);
__d("XFacebarBootloadController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/typeahead/search/facebar/bootload/", {
        placeholder_id: {
            type: "String"
        }
    })
}), null);
__d("FacebarBootloader", ["AsyncRequest", "BanzaiODS", "CSS", "Event", "FacebarPlaceholderShortcut", "Run", "SubscriptionsHandler", "XFacebarBootloadController", "getActiveElement"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = "facebar_bootloader",
        h = g + "_";
    a = {
        isRequested: !1,
        isFocused: !1,
        isInitialized: !1,
        init: function(a, c, d, e) {
            __p && __p();
            var f = this;
            this.reset();
            this.subscriptions = new(b("SubscriptionsHandler"))();
            this.placeholder = d;
            this.searchInput = a;
            this.shortcutHandler = new(b("FacebarPlaceholderShortcut"))(a);
            this.loadingIndicator = c;
            this.shortcutHandler.enable();
            this.subscriptions.addSubscriptions(b("Event").listen(a, "focus", function() {
                f.requestSearch(), f.showLoadingIndicator()
            }), b("Event").listen(d, "mouseover", this.requestSearch.bind(this)), b("Event").listen(a, "invalid", function(a) {
                return a.preventDefault()
            }));
            e && this.subscriptions.addSubscriptions(b("Event").listen(window, "load", this.requestSearch.bind(this)));
            b("Run").onUnload(this.reset.bind(this));
            this.isInitialized = !0;
            (a.value || b("getActiveElement")() == a) && (this.requestSearch(), this.showLoadingIndicator())
        },
        showLoadingIndicator: function() {
            this.loadingIndicator && b("CSS").show(this.loadingIndicator)
        },
        reset: function() {
            this.subscriptions && this.subscriptions.release(), this.shortcutHandler && this.shortcutHandler.disable(), this.searchInput = this.subscriptions = this.shortcutHandler = null, this.loadingIndicator = null, this.isRequested = !1, this.isFocused = !1, this.isInitialized = !1
        },
        requestSearch: function() {
            b("getActiveElement")() == this.searchInput && !this.isFocused && (this.isFocused = !0, this.focusTime = Date.now());
            if (this.isRequested || !this.isInitialized) return;
            this.isRequested = !0;
            var a = b("XFacebarBootloadController").getURIBuilder().setString("placeholder_id", this.placeholder.getAttribute("id")).getURI(),
                c = new(b("AsyncRequest"))();
            c.setURI(a).setMethod("GET").setReadOnly(!0).setAllowCrossPageTransition(!0).setErrorHandler(function(a) {
                b("BanzaiODS").bumpEntityKey(2966, g, h + "request_failed"), a && a.errorSummary ? b("BanzaiODS").bumpEntityKey(2966, g, h + "request_failed_" + a.errorSummary) : b("BanzaiODS").bumpEntityKey(2966, g, h + "request_failed_no_error_summary"), this.isRequested = !1
            }).send()
        },
        setFocus: function(a, c, d) {
            if (!this.searchInput) return;
            b("BanzaiODS").bumpEntityKey(2966, g, h + "response_arrived");
            (this.searchInput.value || this.isFocused) && (a.getCore().isFocused = !0, a.getCore().input.setValue(d.fromString(this.searchInput.value), !0), a.getCore().setStartTime(this.focusTime), c.focus(), c.setSelection({
                length: this.searchInput.selectionEnd - this.searchInput.selectionStart,
                offset: this.searchInput.selectionStart
            }), c.togglePlaceHolder && c.togglePlaceholder());
            this.reset()
        }
    };
    e.exports = a
}), null);
__d("QueryHistory", [], (function(a, b, c, d, e, f) {
    var g = {};
    a = {
        set: function(a, b) {
            g[this._key(a)] = b
        },
        get: function(a) {
            return g[this._key(a)]
        },
        _key: function(a) {
            return "uri-" + a.getQualifiedURI().toString()
        }
    };
    e.exports = a
}), null);
__d("SimpleSearchNavigation", ["Arbiter", "DOMQuery", "Input", "QueryHistory", "URI"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g, h = null,
        i = null;
    a = {
        registerInput: function(a, c) {
            var d = this;
            i = b("DOMQuery").scry(a, "input")[0];
            h && this._updateTitle(h, c);
            b("Arbiter").subscribe("page_transition", function(a, c) {
                d._updateTitle(b("QueryHistory").get(c.uri))
            })
        },
        _updateTitle: function(a, c) {
            i && (b("Input").setValue(i, a || ""), i.setAttribute("singlestate", a && c), i.blur())
        },
        setPageTitle: function(a, c) {
            b("QueryHistory").set((g || (g = b("URI"))).getNextURI(), a);
            i ? this._updateTitle(a, c) : h = a;
            c = {};
            b("Arbiter").inform("search/updateNullState", c, "state")
        },
        setPageQuery: function(a) {
            b("Arbiter").inform("search/updateNullState", a, "state")
        }
    };
    e.exports = a
}), null);
__d("FbFeedHighlight", ["cx", "CSS", "DOM", "DOMScroll", "JSXDOM"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = 1e3,
        i = 1e3,
        j = null;

    function k() {
        var a;
        return (a = b("JSXDOM")).div({
            className: "_1usz"
        }, a.div({
            className: "_1us-"
        }), a.div({
            className: "_1us_"
        }), a.div({
            className: "_1ut0"
        }), a.div({
            className: "_1ut1"
        }))
    }
    var l = {
        highlightAndScrollTo: function(a) {
            l.highlightAndScrollToWithTime(a, i, 0)
        },
        highlightAndScrollToWithTime: function(a, b, c) {
            l.highlightWithTime(a, b), l.scrollTo(a, c, 0)
        },
        highlightSingle: function(a) {
            l.highlightSingleWithTime(a, i)
        },
        highlightSingleWithTime: function(a, c) {
            var d = k();
            b("DOM").appendContent(a, d);
            setTimeout(function() {
                j && b("DOM").remove(j), j = d, b("CSS").addClass(a, "_1ut2")
            }, 0);
            setTimeout(function() {
                b("CSS").removeClass(a, "_1ut2"), setTimeout(function() {
                    b("DOM").remove(d), d == j && (j = null)
                }, h + c)
            }, h + c)
        },
        highlight: function(a) {
            l.highlightWithTime(a, i)
        },
        highlightWithTime: function(a, c) {
            var d = l.highlightPermanent(a);
            setTimeout(function() {
                b("CSS").removeClass(a, "_1ut2"), setTimeout(b("DOM").remove.bind(null, d), h + h)
            }, h + c)
        },
        highlightPermanent: function(a) {
            var c = k();
            b("DOM").appendContent(a, c);
            setTimeout(function() {
                b("CSS").addClass(a, "_1ut2")
            }, 0);
            return c
        },
        scrollTo: function(a, c, d) {
            setTimeout(function() {
                b("DOMScroll").scrollTo(a, 750, !1, 0, c)
            }, d)
        }
    };
    e.exports = l
}), null);
__d("VideoConfig", [], (function(a, b, c, d, e, f) {
    function a(a) {
        Object.assign(this, a)
    }
    e.exports = a
}), null);
__d("PagesEventObserver", ["Banzai"], (function(a, b, c, d, e, f) {
    var g = "pages_client_logging",
        h = {
            VITAL_WAIT: b("Banzai").VITAL_WAIT,
            logData_DEPRECATED: function(a, c) {
                c = {
                    delay: c || b("Banzai").VITAL_WAIT
                };
                b("Banzai").post(g, a, c)
            },
            notify: function(a, c, d, e, f) {
                d = babelHelpers["extends"]({}, d, {
                    event_name: a,
                    page_id: c,
                    dedupe: e !== !1
                });
                a = {
                    delay: f || b("Banzai").VITAL_WAIT
                };
                b("Banzai").post(g, d, a)
            },
            registerLogOnClick: function(a, b, c) {
                c === void 0 && (c = null), a.addEventListener("click", function() {
                    c && h.notify(c, b, null, null, null)
                })
            }
        };
    e.exports = h
}), null);
__d("BlobFactory", ["emptyFunction"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g;

    function h() {
        try {
            new a.Blob(), g = !0
        } catch (a) {
            g = !1
        }
    }
    var i = a.BlobBuilder || a.WebKitBlobBuilder || a.MozBlobBuilder || a.MSBlobBuilder;
    a.Blob ? c = {
        getBlob: function(b, c) {
            __p && __p();
            b = b || [];
            c = c || {};
            g === void 0 && h();
            if (g) return new a.Blob(b, c);
            else {
                var d = new i();
                for (var e = 0; e < b.length; e++) d.append(b[e]);
                return d.getBlob(c.type)
            }
        },
        isSupported: b("emptyFunction").thatReturnsTrue
    } : c = {
        getBlob: function() {},
        isSupported: b("emptyFunction").thatReturnsFalse
    };
    e.exports = c
}), null);
__d("VisualCompletionGating", ["requireCond", "cr:729414"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("cr:729414")
}), null);
__d("clamp", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        if (a < b) return b;
        return a > c ? c : a
    }
    e.exports = a
}), null);
__d("classWithMixins", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        var c = function() {
            a.apply(this, arguments)
        };
        c.prototype = Object.assign(Object.create(a.prototype), b.prototype);
        return c
    }
    e.exports = a
}), null);
__d("coalesce", [], (function(a, b, c, d, e, f) {
    function a() {
        for (var a = 0; a < arguments.length; ++a)
            if ((a < 0 || arguments.length <= a ? void 0 : arguments[a]) != null) return a < 0 || arguments.length <= a ? void 0 : arguments[a];
        return null
    }
    e.exports = a
}), null);
__d("keyMirrorRecursive", ["invariant", "isTruthy"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    a = function a(c, d) {
        __p && __p();
        var e = {};
        h(c) || g(0, 580);
        for (var f in c) {
            if (!Object.prototype.hasOwnProperty.call(c, f)) continue;
            var i = c[f],
                j = b("isTruthy")(d) ? d + "." + f : f;
            h(i) ? i = a(i, j) : i = j;
            e[f] = i
        }
        return e
    };

    function h(a) {
        return a instanceof Object && !Array.isArray(a)
    }
    e.exports = a
}), null);
__d("ImmutableRecordWithV4Types", ["immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("immutable").Record;
    e.exports = {
        Record: a
    }
}), null);
__d("RecaptchaV2Constants", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        RESIZE_IFRAME: null,
        CAPTCHA_SOLVED: null,
        GET_ORIGIN: null
    });
    e.exports = {
        RecaptchaV2IFrameMessageTypes: a
    }
}), null);