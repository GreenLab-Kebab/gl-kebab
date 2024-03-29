/* prebid.js v2.10.0
Updated : 2019-04-11 */
!(function(u) {
    var s = window.pbjsChunk;
    window.pbjsChunk = function(e, t, n) {
        for (var r, i, o, a = 0, c = []; a < e.length; a++) i = e[a], d[i] && c.push(d[i][0]), d[i] = 0;
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
        for (s && s(e, t, n); c.length;) c.shift()();
        if (n)
            for (a = 0; a < n.length; a++) o = f(f.s = n[a]);
        return o
    };
    var n = {},
        d = {
            225: 0
        };

    function f(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return u[e].call(t.exports, t, t.exports, f), t.l = !0, t.exports
    }
    f.m = u, f.c = n, f.d = function(e, t, n) {
        f.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, f.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return f.d(t, "a", t), t
    }, f.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, f.p = "", f.oe = function(e) {
        throw console.error(e), e
    }, f(f.s = 582)
})({
    0: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "internal", (function() {
            return C
        })), n.d(t, "bind", (function() {
            return B
        })), t.replaceTokenInString = function(i, e, o) {
            return ne(e, (function(e, t) {
                e = void 0 === e ? "" : e;
                var n = o + t.toUpperCase() + o,
                    r = new RegExp(n, "g");
                i = i.replace(r, e)
            })), i
        }, t.getUniqueIdentifierStr = D, t.generateUUID = function e(t) {
            return t ? (t ^ N() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
        }, t.getBidIdParameter = function(e, t) {
            if (t && t[e]) return t[e];
            return ""
        }, t.tryAppendQueryString = function(e, t, n) {
            if (n) return e += t + "=" + encodeURIComponent(n) + "&";
            return e
        }, t.parseQueryStringParameters = function(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return t
        }, t.transformAdServerTargetingObj = function(t) {
            return t && 0 < Object.getOwnPropertyNames(t).length ? le(t).map((function(e) {
                return "".concat(e, "=").concat(encodeURIComponent(ge(t, e)))
            })).join("&") : ""
        }, t.getAdUnitSizes = function(e) {
            if (!e) return;
            var t = [];
            if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                var n = e.mediaTypes.banner.sizes;
                Array.isArray(n[0]) ? t = n : t.push(n)
            } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
            return t
        }, t.parseSizesInput = function(e) {
            var t = [];
            if ("string" == typeof e) {
                var n = e.split(","),
                    r = /^(\d)+x(\d)+$/i;
                if (n)
                    for (var i in n) ie(n, i) && n[i].match(r) && t.push(n[i])
            } else if ("object" === g(e)) {
                var o = e.length;
                if (0 < o)
                    if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(k(e));
                    else
                        for (var a = 0; a < o; a++) t.push(k(e[a]))
            }
            return t
        }, t.parseGPTSingleSizeArray = k, t.getTopWindowLocation = x, t.getTopFrameReferrer = P, t.getAncestorOrigins = M, t.getWindowTop = q, t.getWindowSelf = G, t.getWindowLocation = W, t.getTopWindowUrl = function() {
            var t;
            try {
                t = C.getTopWindowLocation().href
            } catch (e) {
                t = ""
            }
            return t
        }, t.getTopWindowReferrer = function() {
            try {
                return window.top.document.referrer
            } catch (e) {
                return document.referrer
            }
        }, t.logMessage = L, t.logInfo = z, t.logWarn = F, t.logError = H, t.hasConsoleLogger = function() {
            return O
        }, t.debugTurnedOn = K, t.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = D(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
        }, t.getParameterByName = J, t.hasValidBidRequest = function(e, n, t) {
            var r = !1;

            function i(e, t) {
                t === n[o] && (r = !0)
            }
            for (var o = 0; o < n.length; o++)
                if (r = !1, ne(e, i), !r) return H("Params are missing for bid request. One of these required paramaters are missing: " + n, t), !1;
            return !0
        }, t.addEventHandler = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n)
        }, t.isA = Y, t.isFn = Q, t.isStr = X, t.isArray = $, t.isNumber = Z, t.isPlainObject = ee, t.isBoolean = function(e) {
            return Y(e, A)
        }, t.isEmpty = te, t.isEmptyStr = function(e) {
            return X(e) && (!e || 0 === e.length)
        }, t._each = ne, t.contains = function(e, t) {
            if (te(e)) return !1;
            if (Q(e.indexOf)) return -1 !== e.indexOf(t);
            var n = e.length;
            for (; n--;)
                if (e[n] === t) return !0;
            return !1
        }, n.d(t, "indexOf", (function() {
            return re
        })), t._map = function(n, r) {
            if (te(n)) return [];
            if (Q(n.map)) return n.map(r);
            var i = [];
            return ne(n, (function(e, t) {
                i.push(r(e, t, n))
            })), i
        }, t.insertElement = oe, t.triggerPixel = ae, t.callBurl = function(e) {
            var t = e.source,
                n = e.burl;
            t === p.S2S.SRC && n && C.triggerPixel(n)
        }, t.insertHtmlIntoIframe = function(e) {
            if (!e) return;
            var t = document.createElement("iframe");
            t.id = D(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", C.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close()
        }, t.insertUserSyncIframe = ce, t.createTrackPixelHtml = function(e) {
            if (!e) return "";
            var t = encodeURI(e),
                n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return n += '<img src="' + t + '"></div>'
        }, t.createTrackPixelIframeHtml = ue, t.getIframeDocument = function(e) {
            if (!e) return;
            var t;
            try {
                t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
            } catch (e) {
                C.logError("Cannot get iframe document", e)
            }
            return t
        }, t.getValueString = se, t.uniques = de, t.flatten = fe, t.getBidRequest = function(n, e) {
            return n ? (e.some((function(e) {
                var t = c()(e.bids, (function(t) {
                    return ["bidId", "adId", "bid_id"].some((function(e) {
                        return t[e] === n
                    }))
                }));
                return t && (r = t), t
            })), r) : void 0;
            var r
        }, t.getKeys = le, t.getValue = ge, t.getKeyByValue = function(e, t) {
            for (var n in e)
                if (e.hasOwnProperty(n) && e[n] === t) return n
        }, t.getBidderCodes = function() {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map((function(e) {
                return e.bids.map((function(e) {
                    return e.bidder
                })).reduce(fe, [])
            })).reduce(fe).filter(de)
        }, t.isGptPubadsDefined = function() {
            if (window.googletag && Q(window.googletag.pubads) && Q(window.googletag.pubads().getSlots)) return !0
        }, n.d(t, "getHighestCpm", (function() {
            return pe
        })), n.d(t, "getOldestHighestCpmBid", (function() {
            return be
        })), n.d(t, "getLatestHighestCpmBid", (function() {
            return ve
        })), t.shuffle = function(e) {
            var t = e.length;
            for (; 0 < t;) {
                var n = Math.floor(Math.random() * t),
                    r = e[--t];
                e[t] = e[n], e[n] = r
            }
            return e
        }, t.adUnitsFilter = function(e, t) {
            return s()(e, t && t.adUnitCode)
        }, t.isSrcdocSupported = function(e) {
            return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
        }, t.deepClone = he, t.inIframe = me, t.isSafariBrowser = function() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        }, t.replaceAuctionPrice = function(e, t) {
            if (!e) return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t)
        }, t.timestamp = function() {
            return (new Date).getTime()
        }, t.checkCookieSupport = Se, t.cookiesAreEnabled = function() {
            if (C.checkCookieSupport()) return !0;
            return window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest")
        }, t.getCookie = function(e) {
            var t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
            return t ? decodeURIComponent(t[2]) : null
        }, t.setCookie = function(e, t, n) {
            document.cookie = "".concat(e, "=").concat(encodeURIComponent(t)).concat("" !== n ? "; expires=".concat(n) : "", "; path=/")
        }, t.localStorageIsEnabled = function() {
            try {
                return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest")
            } catch (e) {
                return !1
            }
        }, t.delayExecution = function(e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
            var n = 0;
            return function() {
                ++n === t && e.apply(null, arguments)
            }
        }, t.groupBy = function(e, n) {
            return e.reduce((function(e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t), e
            }), {})
        }, t.deepAccess = function(e, t) {
            if (!e) return;
            t = String(t).split(".");
            for (var n = 0; n < t.length; n++)
                if (void 0 === (e = e[t[n]])) return;
            return e
        }, t.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
            return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="'.concat(e, '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>') : ""
        }, t.getDefinedParams = function(n, e) {
            return e.filter((function(e) {
                return n[e]
            })).reduce((function(e, t) {
                return l(e, (function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    return e
                })({}, t, n[t]))
            }), {})
        }, t.isValidMediaTypes = function(e) {
            var t = ["banner", "native", "video"];
            if (!Object.keys(e).every((function(e) {
                    return s()(t, e)
                }))) return !1;
            if (e.video && e.video.context) return s()(["instream", "outstream", "adpod"], e.video.context);
            return !0
        }, t.getBidderRequest = function(e, t, n) {
            return c()(e, (function(e) {
                return 0 < e.bids.filter((function(e) {
                    return e.bidder === t && e.adUnitCode === n
                })).length
            })) || {
                start: null,
                auctionId: null
            }
        }, t.getUserConfiguredParams = function(e, t, n) {
            return e.filter((function(e) {
                return e.code === t
            })).map((function(e) {
                return e.bids
            })).reduce(fe, []).filter((function(e) {
                return e.bidder === n
            })).map((function(e) {
                return e.params || {}
            }))
        }, t.getOrigin = function() {
            return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
        }, t.getDNT = function() {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
        }, t.isAdUnitCodeMatchingSlot = function(t) {
            return function(e) {
                return Ae(t, e)
            }
        }, t.isSlotMatchingAdUnitCode = function(t) {
            return function(e) {
                return Ae(e, t)
            }
        }, t.unsupportedBidderMessage = function(e, t) {
            var n = Object.keys(e.mediaTypes || {
                banner: "banner"
            }).join(", ");
            return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ")
        }, t.deletePropertyFromObject = function(e, t) {
            var n = l({}, e);
            return delete n[t], n
        }, t.isInteger = Ee, t.convertCamelToUnderscore = function(e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, (function(e, t) {
                return "_" + t.toLowerCase()
            })).replace(/^_/, "")
        }, t.transformBidderParamKeywords = function(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
                i = [];
            return ne(e, (function(e, t) {
                if ($(e)) {
                    var n = [];
                    ne(e, (function(e) {
                        ((e = se(r + "." + t, e)) || "" === e) && n.push(e)
                    })), e = n
                } else {
                    if (!X(e = se(r + "." + t, e))) return;
                    e = [e]
                }
                i.push({
                    key: t,
                    value: e
                })
            })), i
        }, t.convertTypes = function(t, n) {
            return Object.keys(t).forEach((function(e) {
                n[e] && (Q(t[e]) ? n[e] = t[e](n[e]) : n[e] = (function(e, t) {
                    return "string" === e ? t && t.toString() : "number" === e ? Number(t) : t
                })(t[e], n[e]), isNaN(n[e]) && delete n.key)
            })), n
        }, t.setDataInLocalStorage = function(e, t) {
            Te() && window.localStorage.setItem(e, t)
        }, t.getDataFromLocalStorage = function(e) {
            if (Te()) return window.localStorage.getItem(e)
        }, t.hasLocalStorage = Te, t.isArrayOfNums = function(e, t) {
            return $(e) && (!t || e.length === t) && e.every((function(e) {
                return Ee(e)
            }))
        }, t.fill = function(e, t) {
            for (var n = [], r = 0; r < t; r++) {
                var i = ee(e) ? he(e) : e;
                n.push(i)
            }
            return n
        }, t.chunk = function(e, t) {
            for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
                var i = r * t,
                    o = i + t;
                n.push(e.slice(i, o))
            }
            return n
        }, t.getMinValueFromArray = function(e) {
            return Math.min.apply(Math, f(e))
        }, t.getMaxValueFromArray = function(e) {
            return Math.max.apply(Math, f(e))
        }, t.compareOn = function(n) {
            return function(e, t) {
                return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0
            }
        };
        var r = n(3),
            i = n(90),
            o = n.n(i),
            a = n(10),
            c = n.n(a),
            u = n(8),
            s = n.n(u),
            d = n(11);

        function f(e) {
            return (function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            })(e) || (function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            })(e) || (function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            })()
        }

        function l() {
            return (l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var p = n(4),
            b = !1,
            v = "Array",
            y = "String",
            h = "Function",
            m = "Number",
            S = "Object",
            A = "Boolean",
            E = Object.prototype.toString,
            T = Boolean(window.console),
            O = Boolean(T && window.console.log),
            I = Boolean(T && window.console.info),
            w = Boolean(T && window.console.warn),
            _ = Boolean(T && window.console.error),
            C = {
                checkCookieSupport: Se,
                createTrackPixelIframeHtml: ue,
                getWindowSelf: G,
                getWindowTop: q,
                getAncestorOrigins: M,
                getTopFrameReferrer: P,
                getWindowLocation: W,
                getTopWindowLocation: x,
                insertUserSyncIframe: ce,
                insertElement: oe,
                isFn: Q,
                triggerPixel: ae,
                logError: H,
                logWarn: F,
                logMessage: L,
                logInfo: z
            },
            j = {},
            B = function(e, t) {
                return t
            }.bind(null, 1, j)() === j ? Function.prototype.bind : function(e) {
                var t = this,
                    n = Array.prototype.slice.call(arguments, 1);
                return function() {
                    return t.apply(e, n.concat(Array.prototype.slice.call(arguments)))
                }
            };
        var U, R = (U = 0, function() {
            return ++U
        });

        function D() {
            return R() + Math.random().toString(16).substr(2)
        }

        function N() {
            return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()
        }

        function k(e) {
            if ($(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])) return e[0] + "x" + e[1]
        }

        function x() {
            if (me()) {
                var e;
                try {
                    e = C.getAncestorOrigins() || C.getTopFrameReferrer()
                } catch (e) {
                    z("could not obtain top window location", e)
                }
                if (e) return Object(d.c)(e, {
                    decodeSearchAsString: !0
                })
            }
            return C.getWindowLocation()
        }

        function P() {
            try {
                window.top.location.toString();
                for (var e, t = "";
                    (e = e ? e.parent : window).document && e.document.referrer && (t = e.document.referrer), e !== window.top;);
                return t
            } catch (e) {
                return window.document.referrer
            }
        }

        function M() {
            if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length) return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1]
        }

        function q() {
            return window.top
        }

        function G() {
            return window.self
        }

        function W() {
            return window.location
        }

        function L() {
            K() && O && console.log.apply(console, V(arguments, "MESSAGE:"))
        }

        function z() {
            K() && I && console.info.apply(console, V(arguments, "INFO:"))
        }

        function F() {
            K() && w && console.warn.apply(console, V(arguments, "WARNING:"))
        }

        function H() {
            K() && _ && console.error.apply(console, V(arguments, "ERROR:"))
        }

        function V(e, t) {
            return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e
        }

        function K() {
            if (!1 === r.config.getConfig("debug") && !1 === b) {
                var e = "TRUE" === J(p.DEBUG_MODE).toUpperCase();
                r.config.setConfig({
                    debug: e
                }), b = !0
            }
            return !!r.config.getConfig("debug")
        }

        function J(e) {
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
            return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
        }

        function Y(e, t) {
            return E.call(e) === "[object " + t + "]"
        }

        function Q(e) {
            return Y(e, h)
        }

        function X(e) {
            return Y(e, y)
        }

        function $(e) {
            return Y(e, v)
        }

        function Z(e) {
            return Y(e, m)
        }

        function ee(e) {
            return Y(e, S)
        }

        function te(e) {
            if (!e) return !0;
            if ($(e) || X(e)) return !(0 < e.length);
            for (var t in e)
                if (hasOwnProperty.call(e, t)) return !1;
            return !0
        }

        function ne(e, t) {
            if (!te(e)) {
                if (Q(e.forEach)) return e.forEach(t, this);
                var n = 0,
                    r = e.length;
                if (0 < r)
                    for (; n < r; n++) t(e[n], n, e);
                else
                    for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
            }
        }
        var re = (function() {
            if (Array.prototype.indexOf) return Array.prototype.indexOf
        })();
        var ie = function(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
        };

        function oe(e, t, n, r) {
            var i;
            t = t || document, i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
            try {
                if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
                    i = i[0];
                    var o = r ? null : i.firstChild;
                    return i.insertBefore(e, o)
                }
            } catch (e) {}
        }

        function ae(e, t) {
            var n = new Image;
            t && C.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), n.src = e
        }

        function ce(e, t) {
            var n = C.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                r = document.createElement("div");
            r.innerHTML = n;
            var i = r.firstChild;
            t && C.isFn(t) && (i.addEventListener("load", t), i.addEventListener("error", t)), C.insertElement(i, document, "html", !0)
        }

        function ue(e) {
            var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? (t && (e = encodeURI(e)), n && (n = 'sandbox="'.concat(n, '"')), "<iframe ".concat(n, ' id="').concat(D(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : ""
        }

        function se(e, t, n) {
            return null == t ? n : X(t) ? t : Z(t) ? t.toString() : void C.logWarn("Unsuported type for param: " + e + " required type: String")
        }

        function de(e, t, n) {
            return n.indexOf(e) === t
        }

        function fe(e, t) {
            return e.concat(t)
        }

        function le(e) {
            return Object.keys(e)
        }

        function ge(e, t) {
            return e[t]
        }
        var pe = ye("timeToRespond", (function(e, t) {
                return t < e
            })),
            be = ye("responseTimestamp", (function(e, t) {
                return t < e
            })),
            ve = ye("responseTimestamp", (function(e, t) {
                return e < t
            }));

        function ye(n, r) {
            return function(e, t) {
                return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e
            }
        }

        function he(e) {
            return o()(e)
        }

        function me() {
            try {
                return C.getWindowSelf() !== C.getWindowTop()
            } catch (e) {
                return !0
            }
        }

        function Se() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0
        }
        var Ae = function(e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t
        };

        function Ee(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }

        function Te() {
            try {
                return !!window.localStorage
            } catch (e) {
                H("Local storage api disabled")
            }
        }
    },
    1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.registerBidder = function(t) {
            var n = Array.isArray(t.supportedMediaTypes) ? {
                supportedMediaTypes: t.supportedMediaTypes
            } : void 0;

            function r(e) {
                var t = I(e);
                a.default.registerBidAdapter(t, e.code, n)
            }
            r(t), Array.isArray(t.aliases) && t.aliases.forEach((function(e) {
                a.default.aliasRegistry[e] = t.code, r(E({}, t, {
                    code: e
                }))
            }))
        }, t.newBidder = I, t.preloadBidderMappingFile = w, t.getIabSubCategory = function(t, e) {
            var n = a.default.getBidAdapter(t);
            if (n.getSpec().getMappingFileInfo) {
                var r = n.getSpec().getMappingFileInfo(),
                    i = r.localStorageKey ? r.localStorageKey : n.getBidderCode(),
                    o = Object(h.getDataFromLocalStorage)(i);
                if (o) {
                    try {
                        o = JSON.parse(o)
                    } catch (e) {
                        Object(h.logError)("Failed to parse ".concat(t, " mapping data stored in local storage"))
                    }
                    return o.mapping[e] ? o.mapping[e] : null
                }
            }
        }, t.isValid = _;
        var r = n(45),
            a = n(7),
            i = n(3),
            b = n(22),
            o = n(24),
            c = n(27),
            u = n(46),
            s = n(4),
            v = n.n(s),
            d = n(9),
            y = n.n(d),
            f = n(8),
            l = n.n(f),
            g = n(5),
            h = n(0),
            p = n(2),
            m = n(17);

        function S(e, t) {
            return (function(e) {
                if (Array.isArray(e)) return e
            })(e) || (function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            })(e, t) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }

        function A(e) {
            return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function E() {
            return (E = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var T = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"],
            O = 1;

        function I(l) {
            return E(new r.a(l.code), {
                getSpec: function() {
                    return Object.freeze(l)
                },
                registerSyncs: g,
                callBids: function(o, a, e, n, c) {
                    if (Array.isArray(o.bids)) {
                        var u = {},
                            s = [],
                            t = o.bids.filter(p);
                        if (0 !== t.length) {
                            var d = {};
                            t.forEach((function(e) {
                                (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                            }));
                            var r = l.buildRequests(t, o);
                            if (r && 0 !== r.length) {
                                Array.isArray(r) || (r = [r]);
                                var f = Object(h.delayExecution)(i, r.length);
                                r.forEach((function(i) {
                                    switch (i.method) {
                                        case "GET":
                                            n("".concat(i.url).concat(function(e) {
                                                if (e) return "?".concat("object" === A(e) ? Object(h.parseQueryStringParameters)(e) : e);
                                                return ""
                                            }(i.data)), {
                                                success: e,
                                                error: t
                                            }, void 0, E({
                                                method: "GET",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        case "POST":
                                            n(i.url, {
                                                success: e,
                                                error: t
                                            }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), E({
                                                method: "POST",
                                                contentType: "text/plain",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        default:
                                            Object(h.logWarn)("Skipping invalid request from ".concat(l.code, ". Request type ").concat(i.type, " must be GET or POST")), f()
                                    }

                                    function e(e, t) {
                                        c(l.code);
                                        try {
                                            e = JSON.parse(e)
                                        } catch (e) {}
                                        var n;
                                        e = {
                                            body: e,
                                            headers: {
                                                get: t.getResponseHeader.bind(t)
                                            }
                                        }, s.push(e);
                                        try {
                                            n = l.interpretResponse(e, i)
                                        } catch (e) {
                                            return Object(h.logError)("Bidder ".concat(l.code, " failed to interpret the server's response. Continuing without bids"), null, e), void f()
                                        }

                                        function r(e) {
                                            var t = d[e.requestId];
                                            if (t) {
                                                var n = E(Object(b.a)(v.a.STATUS.GOOD, t), e);
                                                !(function(e, t) {
                                                    u[e] = !0, _(e, t, [o]) && a(e, t)
                                                })(t.adUnitCode, n)
                                            } else Object(h.logWarn)("Bidder ".concat(l.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."))
                                        }
                                        n && (n.forEach ? n.forEach(r) : r(n)), f(n)
                                    }

                                    function t(e) {
                                        c(l.code), Object(h.logError)("Server call for ".concat(l.code, " failed: ").concat(e, ". Continuing without bids.")), f()
                                    }
                                }))
                            } else i()
                        } else i()
                    }

                    function i() {
                        e(), y.a.emit(v.a.EVENTS.BIDDER_DONE, o), g(s, o.gdprConsent)
                    }
                }
            });

            function g(e, t) {
                if (l.getUserSyncs) {
                    var n = i.config.getConfig("userSync.filterSettings"),
                        r = l.getUserSyncs({
                            iframeEnabled: !!(i.config.getConfig("userSync.iframeEnabled") || n && (n.iframe || n.all)),
                            pixelEnabled: !!(i.config.getConfig("userSync.pixelEnabled") || n && (n.image || n.all))
                        }, e, t);
                    r && (Array.isArray(r) || (r = [r]), r.forEach((function(e) {
                        o.a.registerSync(e.type, l.code, e.url)
                    })))
                }
            }

            function p(e) {
                return !!l.isBidRequestValid(e) || (Object(h.logWarn)("Invalid bid sent to bidder ".concat(l.code, ": ").concat(JSON.stringify(e))), !1)
            }
        }

        function w(e, t) {
            if (!i.config.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
            t.filter((function(e) {
                return Object(h.deepAccess)(e, "mediaTypes.video.context") === p.a
            })).map((function(e) {
                return e.bids.map((function(e) {
                    return e.bidder
                }))
            })).reduce(h.flatten, []).filter(h.uniques).forEach((function(n) {
                var e = a.default.getBidAdapter(n);
                if (e.getSpec().getMappingFileInfo) {
                    var t = e.getSpec().getMappingFileInfo(),
                        r = t.refreshInDays ? t.refreshInDays : O,
                        i = t.localStorageKey ? t.localStorageKey : e.getSpec().code,
                        o = Object(h.getDataFromLocalStorage)(i);
                    (!o || Object(h.timestamp)() < o.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(g.a)(t.url, {
                        success: function(e) {
                            try {
                                e = JSON.parse(e);
                                var t = {
                                    lastUpdated: Object(h.timestamp)(),
                                    mapping: e.mapping
                                };
                                Object(h.setDataInLocalStorage)(i, JSON.stringify(t))
                            } catch (e) {
                                Object(h.logError)("Failed to parse ".concat(n, " bidder translation mapping file"))
                            }
                        },
                        error: function() {
                            Object(h.logError)("Failed to load ".concat(n, " bidder translation file"))
                        }
                    })
                }
            })), e.call(this, t)
        }

        function _(e, t, n) {
            function r(e) {
                return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e)
            }
            return e ? t ? (i = Object.keys(t), T.every((function(e) {
                return l()(i, e) && !l()([void 0, null], t[e])
            })) ? "native" !== t.mediaType || Object(c.f)(t, n) ? "video" !== t.mediaType || Object(u.c)(t, n) ? !("banner" === t.mediaType && !(function(e, t, n) {
                if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), !0;
                var r = Object(h.getBidderRequest)(n, t.bidderCode, e),
                    i = r && r.bids && r.bids[0] && r.bids[0].sizes,
                    o = Object(h.parseSizesInput)(i);
                if (1 !== o.length) return !1;
                var a = S(o[0].split("x"), 2),
                    c = a[0],
                    u = a[1];
                return t.width = parseInt(c, 10), t.height = parseInt(u, 10), !0
            })(e, t, n)) || (Object(h.logError)(r("Banner bids require a width and height")), !1) : (Object(h.logError)(r("Video bid does not have required vastUrl or renderer property")), !1) : (Object(h.logError)(r("Native bid missing some required properties.")), !1) : (Object(h.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1)) : (Object(h.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : (Object(h.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i
        }
        Object(m.a)("checkAdUnitSetup").before(w)
    },
    10: function(e, t, n) {
        n(82), e.exports = n(14).Array.find
    },
    11: function(e, t, n) {
        "use strict";

        function r(e) {
            return Object.keys(e).map((function(t) {
                return Array.isArray(e[t]) ? e[t].map((function(e) {
                    return "".concat(t, "[]=").concat(e)
                })).join("&") : "".concat(t, "=").concat(e[t])
            })).join("&")
        }
        t.b = r, t.c = function(e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
                href: n.href,
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: r ? n.search : (function(e) {
                    return e ? e.replace(/^\?/, "").split("&").reduce((function(e, t) {
                        var n = t.split("="),
                            r = (function(e, t) {
                                return (function(e) {
                                    if (Array.isArray(e)) return e
                                })(e) || (function(e, t) {
                                    var n = [],
                                        r = !0,
                                        i = !1,
                                        o = void 0;
                                    try {
                                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                                    } catch (e) {
                                        i = !0, o = e
                                    } finally {
                                        try {
                                            r || null == c.return || c.return()
                                        } finally {
                                            if (i) throw o
                                        }
                                    }
                                    return n
                                })(e, t) || (function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                })()
                            })(n, 2),
                            i = r[0],
                            o = r[1];
                        return /\[\]$/.test(i) ? (i = i.replace("[]", ""), e[i] = e[i] || [], e[i].push(o)) : e[i] = o || "", e
                    }), {}) : {}
                })(n.search || ""),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            }
        }, t.a = function(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(r(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
        }
    },
    12: function(e, t, n) {
        "use strict";
        t.a = i, t.c = function(e) {
            return !(!e || !e.url)
        }, t.b = function(e, t) {
            e.render(t)
        };
        var u = n(47),
            s = n(0),
            r = n(10),
            d = n.n(r);

        function i(e) {
            var t = this,
                n = e.url,
                r = e.config,
                i = e.id,
                o = e.callback,
                a = e.loaded,
                c = e.adUnitCode;
            this.url = n, this.config = r, this.handlers = {}, this.id = i, this.loaded = a, this.cmd = [], this.push = function(e) {
                "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : s.logError("Commands given to Renderer.push must be wrapped in a function")
            }, this.callback = o || function() {
                t.loaded = !0, t.process()
            }, !(function(t) {
                var e = pbjs.adUnits,
                    n = d()(e, (function(e) {
                        return e.code === t
                    }));
                return !!(n && n.renderer && n.renderer.url && n.renderer.render)
            })(c) ? Object(u.b)(n, this.callback, !0) : s.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(c))
        }
        i.install = function(e) {
            return new i({
                url: e.url,
                config: e.config,
                id: e.id,
                callback: e.callback,
                loaded: e.loaded,
                adUnitCode: e.adUnitCode
            })
        }, i.prototype.getConfig = function() {
            return this.config
        }, i.prototype.setRender = function(e) {
            this.render = e
        }, i.prototype.setEventHandlers = function(e) {
            this.handlers = e
        }, i.prototype.handleVideoEvent = function(e) {
            var t = e.id,
                n = e.eventName;
            "function" == typeof this.handlers[n] && this.handlers[n](), s.logMessage("Prebid Renderer event for id ".concat(t, " type ").concat(n))
        }, i.prototype.process = function() {
            for (; 0 < this.cmd.length;) try {
                this.cmd.shift().call()
            } catch (e) {
                s.logError("Error processing Renderer command: ", e)
            }
        }
    },
    129: function(e, t, n) {
        "use strict";
        var r = n(13),
            i = n(40)(6),
            o = "findIndex",
            a = !0;
        o in [] && Array(1)[o]((function() {
            a = !1
        })), r(r.P + r.F * a, "Array", {
            findIndex: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n(34)(o)
    },
    13: function(e, t, n) {
        var b = n(18),
            v = n(14),
            y = n(23),
            h = n(20),
            m = n(26),
            S = "prototype",
            A = function(e, t, n) {
                var r, i, o, a = e & A.F,
                    c = e & A.G,
                    u = e & A.S,
                    s = e & A.P,
                    d = e & A.B,
                    f = e & A.W,
                    l = c ? v : v[t] || (v[t] = {}),
                    g = l[S],
                    p = c ? b : u ? b[t] : (b[t] || {})[S];
                for (r in c && (n = t), n)(i = !a && p && void 0 !== p[r]) && m(l, r) || (o = i ? p[r] : n[r], l[r] = c && "function" != typeof p[r] ? n[r] : d && i ? y(o, b) : f && p[r] == o ? (function(r) {
                    var e = function(e, t, n) {
                        if (this instanceof r) {
                            switch (arguments.length) {
                                case 0:
                                    return new r;
                                case 1:
                                    return new r(e);
                                case 2:
                                    return new r(e, t)
                            }
                            return new r(e, t, n)
                        }
                        return r.apply(this, arguments)
                    };
                    return e[S] = r[S], e
                })(o) : s && "function" == typeof o ? y(Function.call, o) : o, s && ((l.virtual || (l.virtual = {}))[r] = o, e & A.R && g && !g[r] && h(g, r, o)))
            };
        A.F = 1, A.G = 2, A.S = 4, A.P = 8, A.B = 16, A.W = 32, A.U = 64, A.R = 128, e.exports = A
    },
    131: function(e, t, n) {
        "use strict";
        t.a = function() {
            addEventListener("message", g, !1)
        };
        var r = n(9),
            o = n.n(r),
            a = n(27),
            i = n(4),
            d = (n.n(i), n(0)),
            c = n(37),
            u = n(10),
            f = n.n(u),
            l = n(12),
            s = i.EVENTS.BID_WON;

        function g(e) {
            var t = e.message ? "message" : "data",
                n = {};
            try {
                n = JSON.parse(e[t])
            } catch (e) {
                return
            }
            if (n && n.adId) {
                var r = f()(c.a.getBidsReceived(), (function(e) {
                    return e.adId === n.adId
                }));
                if ("Prebid Request" === n.message && (function(e, t, n) {
                        var r = e.adId,
                            i = e.ad,
                            o = e.adUrl,
                            a = e.width,
                            c = e.height,
                            u = e.renderer,
                            s = e.cpm;
                        Object(l.c)(u) ? Object(l.b)(u, e) : r && (function(e) {
                            var r = e.adUnitCode,
                                i = e.width,
                                o = e.height;

                            function a(e) {
                                var t = (function(e) {
                                        return window.googletag ? (function(e) {
                                            return f()(window.googletag.pubads().getSlots().filter(Object(d.isSlotMatchingAdUnitCode)(e)), (function(e) {
                                                return e
                                            })).getSlotElementId()
                                        })(e) : window.apntag ? (function(e) {
                                            var t = window.apntag.getTag(e);
                                            return t && t.targetId
                                        })(e) : e
                                    })(r),
                                    n = document.getElementById(t);
                                return n && n.querySelector(e)
                            }["div", "iframe"].forEach((function(e) {
                                var t = a(e);
                                if (t) {
                                    var n = t.style;
                                    n.width = i + "px", n.height = o + "px"
                                } else Object(d.logWarn)("Unable to locate matching page element for adUnitCode ".concat(r, ".  Can't resize it to ad's dimensions.  Please review setup."))
                            }))
                        }(e), n.postMessage(JSON.stringify({
                            message: "Prebid Response",
                            ad: Object(d.replaceAuctionPrice)(i, s),
                            adUrl: Object(d.replaceAuctionPrice)(o, s),
                            adId: r,
                            width: a,
                            height: c
                        }), t))
                    }(r, n.adServerDomain, e.source), c.a.addWinningBid(r), o.a.emit(s, r)), "Prebid Native" === n.message) {
                    if ("assetRequest" === n.action) {
                        var i = Object(a.c)(n, r);
                        return void e.source.postMessage(JSON.stringify(i), e.origin)
                    }
                    if ("click" === Object(a.b)(n, r)) return;
                    c.a.addWinningBid(r), o.a.emit(s, r)
                }
            }
        }
    },
    132: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t;
            try {
                e = e || window.sessionStorage, t = JSON.parse(e.getItem(u))
            } catch (e) {}
            t && f(t, !0)
        };
        var r = n(3),
            o = n(0),
            i = n(36);

        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var c, u = "pbjs:debugging";

        function s(e) {
            Object(o.logMessage)("DEBUG: " + e)
        }

        function d() {
            i.c.getHooks({
                hook: c
            }).remove()
        }

        function f(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            r.config.setConfig({
                debug: !0
            }), s("bidder overrides enabled".concat(t ? " from session" : "")), d(), c = function(e, r, i) {
                if (Array.isArray(this.bidders) && -1 === this.bidders.indexOf(i.bidderCode)) return void(function(e) {
                    Object(o.logWarn)("DEBUG: " + e)
                })("bidder '".concat(i.bidderCode, "' excluded from auction by bidder overrides"));
                Array.isArray(this.bids) && this.bids.forEach((function(n) {
                    n.bidder && n.bidder !== i.bidderCode || n.adUnitCode && n.adUnitCode !== r || (i = a({}, i), Object.keys(n).filter((function(e) {
                        return -1 === ["bidder", "adUnitCode"].indexOf(e)
                    })).forEach((function(e) {
                        var t = n[e];
                        s("bidder overrides changed '".concat(r, "/").concat(i.bidderCode, "' bid.").concat(e, " from '").concat(i[e], "' to '").concat(t, "'")), i[e] = t
                    })))
                }));
                e(r, i)
            }.bind(e), i.c.before(c, 5)
        }

        function l(e) {
            if (e.enabled) {
                try {
                    window.sessionStorage.setItem(u, JSON.stringify(e))
                } catch (e) {}
                f(e)
            } else {
                d(), s("bidder overrides disabled");
                try {
                    window.sessionStorage.removeItem(u)
                } catch (e) {}
            }
        }
        r.config.getConfig("debugging", (function(e) {
            return l(e.debugging)
        }))
    },
    133: function(e, t, n) {
        n(134), n(67), n(143), n(145), n(149), n(152), n(154), e.exports = n(14).Set
    },
    134: function(e, t) {},
    135: function(e, t, n) {
        var u = n(42),
            s = n(32);
        e.exports = function(c) {
            return function(e, t) {
                var n, r, i = String(s(e)),
                    o = u(t),
                    a = i.length;
                return o < 0 || a <= o ? c ? "" : void 0 : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r ? c ? i.charAt(o) : n : c ? i.slice(o, o + 2) : r - 56320 + (n - 55296 << 10) + 65536
            }
        }
    },
    136: function(e, t, n) {
        e.exports = n(20)
    },
    137: function(e, t, n) {
        "use strict";
        var r = n(68),
            i = n(39),
            o = n(50),
            a = {};
        n(20)(a, n(15)("iterator"), (function() {
            return this
        })), e.exports = function(e, t, n) {
            e.prototype = r(a, {
                next: i(1, n)
            }), o(e, t + " Iterator")
        }
    },
    138: function(e, t, n) {
        var a = n(19),
            c = n(25),
            u = n(139);
        e.exports = n(21) ? Object.defineProperties : function(e, t) {
            c(e);
            for (var n, r = u(t), i = r.length, o = 0; o < i;) a.f(e, n = r[o++], t[n]);
            return e
        }
    },
    139: function(e, t, n) {
        var r = n(140),
            i = n(69);
        e.exports = Object.keys || function(e) {
            return r(e, i)
        }
    },
    14: function(e, t) {
        var n = e.exports = {
            version: "2.6.5"
        };
        "number" == typeof __e && (__e = n)
    },
    140: function(e, t, n) {
        var a = n(26),
            c = n(44),
            u = n(58)(!1),
            s = n(49)("IE_PROTO");
        e.exports = function(e, t) {
            var n, r = c(e),
                i = 0,
                o = [];
            for (n in r) n != s && a(r, n) && o.push(n);
            for (; t.length > i;) a(r, n = t[i++]) && (~u(o, n) || o.push(n));
            return o
        }
    },
    141: function(e, t, n) {
        var r = n(18).document;
        e.exports = r && r.documentElement
    },
    142: function(e, t, n) {
        var r = n(26),
            i = n(41),
            o = n(49)("IE_PROTO"),
            a = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    },
    143: function(e, t, n) {
        n(144);
        for (var r = n(18), i = n(20), o = n(28), a = n(15)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < c.length; u++) {
            var s = c[u],
                d = r[s],
                f = d && d.prototype;
            f && !f[a] && i(f, a, s), o[s] = o.Array
        }
    },
    144: function(e, t, n) {
        "use strict";
        var r = n(34),
            i = n(70),
            o = n(28),
            a = n(44);
        e.exports = n(48)(Array, "Array", (function(e, t) {
            this._t = a(e), this._i = 0, this._k = t
        }), (function() {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }), "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
    },
    145: function(e, t, n) {
        "use strict";
        var r = n(146),
            i = n(78);
        e.exports = n(148)("Set", (function(e) {
            return function() {
                return e(this, 0 < arguments.length ? arguments[0] : void 0)
            }
        }), {
            add: function(e) {
                return r.def(i(this, "Set"), e = 0 === e ? 0 : e, e)
            }
        }, r)
    },
    146: function(e, t, n) {
        "use strict";
        var a = n(19).f,
            c = n(68),
            u = n(71),
            s = n(23),
            d = n(72),
            f = n(38),
            r = n(48),
            i = n(70),
            o = n(147),
            l = n(21),
            g = n(77).fastKey,
            p = n(78),
            b = l ? "_s" : "size",
            v = function(e, t) {
                var n, r = g(t);
                if ("F" !== r) return e._i[r];
                for (n = e._f; n; n = n.n)
                    if (n.k == t) return n
            };
        e.exports = {
            getConstructor: function(e, o, n, r) {
                var i = e((function(e, t) {
                    d(e, i, o, "_i"), e._t = o, e._i = c(null), e._f = void 0, e._l = void 0, e[b] = 0, null != t && f(t, n, e[r], e)
                }));
                return u(i.prototype, {
                    clear: function() {
                        for (var e = p(this, o), t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
                        e._f = e._l = void 0, e[b] = 0
                    },
                    delete: function(e) {
                        var t = p(this, o),
                            n = v(t, e);
                        if (n) {
                            var r = n.n,
                                i = n.p;
                            delete t._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), t._f == n && (t._f = r), t._l == n && (t._l = i), t[b]--
                        }
                        return !!n
                    },
                    forEach: function(e) {
                        p(this, o);
                        for (var t, n = s(e, 1 < arguments.length ? arguments[1] : void 0, 3); t = t ? t.n : this._f;)
                            for (n(t.v, t.k, this); t && t.r;) t = t.p
                    },
                    has: function(e) {
                        return !!v(p(this, o), e)
                    }
                }), l && a(i.prototype, "size", {
                    get: function() {
                        return p(this, o)[b]
                    }
                }), i
            },
            def: function(e, t, n) {
                var r, i, o = v(e, t);
                return o ? o.v = n : (e._l = o = {
                    i: i = g(t, !0),
                    k: t,
                    v: n,
                    p: r = e._l,
                    n: void 0,
                    r: !1
                }, e._f || (e._f = o), r && (r.n = o), e[b]++, "F" !== i && (e._i[i] = o)), e
            },
            getEntry: v,
            setStrong: function(e, n, t) {
                r(e, n, (function(e, t) {
                    this._t = p(e, n), this._k = t, this._l = void 0
                }), (function() {
                    for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
                    return e._t && (e._l = n = n ? n.n : e._t._f) ? i(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : (e._t = void 0, i(1))
                }), t ? "entries" : "values", !t, !0), o(n)
            }
        }
    },
    147: function(e, t, n) {
        "use strict";
        var r = n(18),
            i = n(14),
            o = n(19),
            a = n(21),
            c = n(15)("species");
        e.exports = function(e) {
            var t = "function" == typeof i[e] ? i[e] : r[e];
            a && t && !t[c] && o.f(t, c, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    },
    148: function(e, t, n) {
        "use strict";
        var f = n(18),
            l = n(13),
            g = n(77),
            p = n(30),
            b = n(20),
            v = n(71),
            y = n(38),
            h = n(72),
            m = n(16),
            S = n(50),
            A = n(19).f,
            E = n(40)(0),
            T = n(21);
        e.exports = function(n, e, t, r, i, o) {
            var a = f[n],
                c = a,
                u = i ? "set" : "add",
                s = c && c.prototype,
                d = {};
            return T && "function" == typeof c && (o || s.forEach && !p((function() {
                (new c).entries().next()
            }))) ? (c = e((function(e, t) {
                h(e, c, n, "_c"), e._c = new a, null != t && y(t, i, e[u], e)
            })), E("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), (function(r) {
                var i = "add" == r || "set" == r;
                r in s && (!o || "clear" != r) && b(c.prototype, r, (function(e, t) {
                    if (h(this, c, r), !i && o && !m(e)) return "get" == r && void 0;
                    var n = this._c[r](0 === e ? 0 : e, t);
                    return i ? this : n
                }))
            })), o || A(c.prototype, "size", {
                get: function() {
                    return this._c.size
                }
            })) : (c = r.getConstructor(e, n, i, u), v(c.prototype, t), g.NEED = !0), S(c, n), d[n] = c, l(l.G + l.W + l.F, d), o || r.setStrong(c, n, i), c
        }
    },
    149: function(e, t, n) {
        var r = n(13);
        r(r.P + r.R, "Set", {
            toJSON: n(150)("Set")
        })
    },
    15: function(e, t, n) {
        var r = n(56)("wks"),
            i = n(43),
            o = n(18).Symbol,
            a = "function" == typeof o;
        (e.exports = function(e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
        }).store = r
    },
    150: function(e, t, n) {
        var r = n(76),
            i = n(151);
        e.exports = function(e) {
            return function() {
                if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
                return i(this)
            }
        }
    },
    151: function(e, t, n) {
        var r = n(38);
        e.exports = function(e, t) {
            var n = [];
            return r(e, !1, n.push, n, t), n
        }
    },
    152: function(e, t, n) {
        n(153)("Set")
    },
    153: function(e, t, n) {
        "use strict";
        var r = n(13);
        e.exports = function(e) {
            r(r.S, e, { of: function() {
                    for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
                    return new this(t)
                }
            })
        }
    },
    154: function(e, t, n) {
        n(155)("Set")
    },
    155: function(e, t, n) {
        "use strict";
        var r = n(13),
            a = n(52),
            c = n(23),
            u = n(38);
        e.exports = function(e) {
            r(r.S, e, {
                from: function(e) {
                    var t, n, r, i, o = arguments[1];
                    return a(this), (t = void 0 !== o) && a(o), null == e ? new this : (n = [], t ? (r = 0, i = c(o, arguments[2], 2), u(e, !1, (function(e) {
                        n.push(i(e, r++))
                    }))) : u(e, !1, n.push, n), new this(n))
                }
            })
        }
    },
    156: function(e, t, n) {
        n(67), n(157), e.exports = n(14).Array.from
    },
    157: function(e, t, n) {
        "use strict";
        var l = n(23),
            r = n(13),
            g = n(41),
            p = n(73),
            b = n(74),
            v = n(33),
            y = n(158),
            h = n(75);
        r(r.S + r.F * !n(159)((function(e) {
            Array.from(e)
        })), "Array", {
            from: function(e) {
                var t, n, r, i, o = g(e),
                    a = "function" == typeof this ? this : Array,
                    c = arguments.length,
                    u = 1 < c ? arguments[1] : void 0,
                    s = void 0 !== u,
                    d = 0,
                    f = h(o);
                if (s && (u = l(u, 2 < c ? arguments[2] : void 0, 2)), null == f || a == Array && b(f))
                    for (n = new a(t = v(o.length)); d < t; d++) y(n, d, s ? u(o[d], d) : o[d]);
                else
                    for (i = f.call(o), n = new a; !(r = i.next()).done; d++) y(n, d, s ? p(i, u, [r.value, d], !0) : r.value);
                return n.length = d, n
            }
        })
    },
    158: function(e, t, n) {
        "use strict";
        var r = n(19),
            i = n(39);
        e.exports = function(e, t, n) {
            t in e ? r.f(e, t, i(0, n)) : e[t] = n
        }
    },
    159: function(e, t, n) {
        var o = n(15)("iterator"),
            a = !1;
        try {
            var r = [7][o]();
            r.return = function() {
                a = !0
            }, Array.from(r, (function() {
                throw 2
            }))
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !a) return !1;
            var n = !1;
            try {
                var r = [7],
                    i = r[o]();
                i.next = function() {
                    return {
                        done: n = !0
                    }
                }, r[o] = function() {
                    return i
                }, e(r)
            } catch (e) {}
            return n
        }
    },
    16: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    17: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return o
        })), n.d(t, "a", (function() {
            return a
        })), t.c = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
            0 === e.getHooks({
                hook: t
            }).length && e.before(t, n)
        };
        var r = n(89),
            i = n.n(r),
            o = i()({
                ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
            }),
            a = o.get
    },
    18: function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    19: function(e, t, n) {
        var r = n(25),
            i = n(83),
            o = n(84),
            a = Object.defineProperty;
        t.f = n(21) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return a(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    },
    2: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return r
        })), n.d(t, "d", (function() {
            return i
        })), n.d(t, "b", (function() {
            return o
        })), n.d(t, "a", (function() {
            return a
        }));
        var r = "native",
            i = "video",
            o = "banner",
            a = "adpod"
    },
    20: function(e, t, n) {
        var r = n(19),
            i = n(39);
        e.exports = n(21) ? function(e, t, n) {
            return r.f(e, t, i(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    },
    21: function(e, t, n) {
        e.exports = !n(30)((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    22: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            return new r(e, t)
        };
        var i = n(0);

        function r(e, t) {
            var n = t && t.src || "client",
                r = e || 0;
            this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = (function() {
                switch (r) {
                    case 0:
                        return "Pending";
                    case 1:
                        return "Bid available";
                    case 2:
                        return "Bid returned empty or error response";
                    case 3:
                        return "Bid timed out"
                }
            })(), this.adId = i.getUniqueIdentifierStr(), this.requestId = t && t.bidId, this.mediaType = "banner", this.source = n, this.getStatusCode = function() {
                return r
            }, this.getSize = function() {
                return this.width + "x" + this.height
            }
        }
    },
    23: function(e, t, n) {
        var o = n(52);
        e.exports = function(r, i, e) {
            if (o(r), void 0 === i) return r;
            switch (e) {
                case 1:
                    return function(e) {
                        return r.call(i, e)
                    };
                case 2:
                    return function(e, t) {
                        return r.call(i, e, t)
                    };
                case 3:
                    return function(e, t, n) {
                        return r.call(i, e, t, n)
                    }
            }
            return function() {
                return r.apply(i, arguments)
            }
        }
    },
    24: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }));
        var s = n(0),
            d = n(3),
            r = n(8),
            f = n.n(r);

        function l(e, t) {
            return (function(e) {
                if (Array.isArray(e)) return e
            })(e) || (function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            })(e, t) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }

        function g() {
            return (g = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        d.config.setDefaults({
            userSync: {
                syncEnabled: !0,
                pixelEnabled: !0,
                syncsPerBidder: 5,
                syncDelay: 3e3
            }
        });
        var i = !s.isSafariBrowser() && s.cookiesAreEnabled(),
            o = (function(e) {
                var r = {},
                    i = {
                        image: [],
                        iframe: []
                    },
                    t = !1,
                    o = {},
                    a = {
                        image: !1,
                        iframe: !1
                    },
                    c = e.config;

                function n() {
                    if (c.syncEnabled && e.browserSupportsCookies && (c.enableOverride || !t)) {
                        try {
                            (c.pixelEnabled || a.image) && s.shuffle(i.image).forEach((function(e) {
                                var t = l(e, 2),
                                    n = t[0],
                                    r = t[1];
                                s.logMessage("Invoking image pixel user sync for bidder: ".concat(n)), s.triggerPixel(r)
                            })), (c.iframeEnabled || a.iframe) && s.shuffle(i.iframe).forEach((function(e) {
                                var t = l(e, 2),
                                    n = t[0],
                                    r = t[1];
                                s.logMessage("Invoking iframe user sync for bidder: ".concat(n)), s.insertUserSyncIframe(r)
                            }))
                        } catch (e) {
                            return s.logError("Error firing user syncs", e)
                        }
                        i = {
                            image: [],
                            iframe: []
                        }, t = !0
                    }
                }

                function u(e, t) {
                    var n = c.filterSettings;
                    if (function(e, t) {
                            if (e.all && e[t]) return s.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
                            var n = e.all ? e.all : e[t],
                                r = e.all ? "all" : t;
                            if (!n) return !1;
                            var i = n.filter,
                                o = n.bidders;
                            return i && "include" !== i && "exclude" !== i ? (s.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(i, "' is not a valid option; use either 'include' or 'exclude'.")), !1) : !!("*" === o || Array.isArray(o) && 0 < o.length && o.every((function(e) {
                                return s.isStr(e) && "*" !== e
                            }))) || (s.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1)
                        }(n, e)) {
                        a[e] = !0;
                        var r = n.all ? n.all : n[e],
                            i = "*" === r.bidders ? [t] : r.bidders;
                        return {
                            include: function(e, t) {
                                return !f()(e, t)
                            },
                            exclude: function(e, t) {
                                return f()(e, t)
                            }
                        }[r.filter || "include"](i, t)
                    }
                    return !1
                }
                return d.config.getConfig("userSync", (function(e) {
                    c = g(c, e.userSync)
                })), r.registerSync = function(e, t, n) {
                    return c.syncEnabled && s.isArray(i[e]) ? t ? 0 !== c.syncsPerBidder && Number(o[t]) >= c.syncsPerBidder ? s.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : r.canBidderRegisterSync(e, t) ? (i[e].push([t, n]), void(o = (function(e, t) {
                        return e[t] ? e[t] += 1 : e[t] = 1, e
                    })(o, t))) : s.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : s.logWarn("Bidder is required for registering sync") : s.logWarn('User sync type "'.concat(e, '" not supported'))
                }, r.syncUsers = function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (e) return setTimeout(n, Number(e));
                    n()
                }, r.triggerUserSyncs = function() {
                    c.enableOverride && r.syncUsers()
                }, r.canBidderRegisterSync = function(e, t) {
                    if (c.filterSettings) {
                        if (u(e, t)) return !1
                    } else {
                        if (c.enabledBidders && c.enabledBidders.length && c.enabledBidders.indexOf(t) < 0) return !1;
                        if ("iframe" === e && !c.iframeEnabled && !a.iframe) return !1;
                        if ("image" === e && !c.pixelEnabled && !a.image) return !1
                    }
                    return !0
                }, r
            })({
                config: d.config.getConfig("userSync"),
                browserSupportsCookies: i
            })
    },
    25: function(e, t, n) {
        var r = n(16);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    26: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    },
    27: function(e, t, n) {
        "use strict";
        n.d(t, "e", (function() {
            return o
        })), n.d(t, "a", (function() {
            return s
        })), t.g = function(e) {
            if (e && e.type && (function(e) {
                    return !(!e || !c()(Object.keys(d), e)) || (Object(a.logError)("".concat(e, " nativeParam is not supported")), !1)
                })(e.type)) return d[e.type];
            return e
        }, t.f = function(t, e) {
            var n = Object(a.getBidRequest)(t.requestId, e);
            if (!n) return !1;
            if (!Object(a.deepAccess)(t, "native.clickUrl")) return !1;
            if (Object(a.deepAccess)(t, "native.image") && (!Object(a.deepAccess)(t, "native.image.height") || !Object(a.deepAccess)(t, "native.image.width"))) return !1;
            if (Object(a.deepAccess)(t, "native.icon") && (!Object(a.deepAccess)(t, "native.icon.height") || !Object(a.deepAccess)(t, "native.icon.width"))) return !1;
            var r = n.nativeParams;
            if (!r) return !0;
            var i = Object.keys(r).filter((function(e) {
                    return r[e].required
                })),
                o = Object.keys(t.native).filter((function(e) {
                    return t.native[e]
                }));
            return i.every((function(e) {
                return c()(o, e)
            }))
        }, t.b = function(e, t) {
            var n;
            "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && Object(a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
            return (n || []).forEach(a.triggerPixel), e.action
        }, t.d = function(r, i) {
            var o = {};
            return Object.keys(r.native).forEach((function(e) {
                var t = u.NATIVE_KEYS[e],
                    n = f(r.native[e]);
                Object(a.deepAccess)(i, "mediaTypes.native.".concat(e, ".sendId")) && (n = "".concat(t, ":").concat(r.adId)), t && n && (o[t] = n)
            })), o
        }, t.c = function(e, r) {
            var i = {
                message: "assetResponse",
                adId: e.adId,
                assets: []
            };
            return e.assets.forEach((function(e) {
                var t = Object(a.getKeyByValue)(u.NATIVE_KEYS, e),
                    n = f(r.native[t]);
                i.assets.push({
                    key: t,
                    value: n
                })
            })), i
        };
        var a = n(0),
            r = n(8),
            c = n.n(r);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var u = n(4),
            o = [],
            s = Object.keys(u.NATIVE_KEYS).map((function(e) {
                return u.NATIVE_KEYS[e]
            })),
            d = {
                image: {
                    image: {
                        required: !0
                    },
                    title: {
                        required: !0
                    },
                    sponsoredBy: {
                        required: !0
                    },
                    clickUrl: {
                        required: !0
                    },
                    body: {
                        required: !1
                    },
                    icon: {
                        required: !1
                    }
                }
            };

        function f(e) {
            return "object" === i(e) && e.url ? e.url : e
        }
    },
    28: function(e, t) {
        e.exports = {}
    },
    29: function(qy, ry) {
        var sy;
        sy = (function() {
            return this
        })();
        try {
            sy = sy || Function("return this")() || eval("this")
        } catch (e) {
            "object" == typeof window && (sy = window)
        }
        qy.exports = sy
    },
    3: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "RANDOM", (function() {
            return a
        })), t.newConfig = c, n.d(t, "config", (function() {
            return u
        }));
        var s = n(51),
            r = n(10),
            d = n.n(r),
            i = n(8),
            o = n.n(i),
            f = n(17);

        function l() {
            return (l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var p = n(0),
            b = !1,
            v = 3e3,
            y = window.location.origin,
            h = !0,
            m = !1,
            S = !1,
            A = 400,
            a = "random",
            E = {};
        E[a] = !0, E.fixed = !0;
        var T = a,
            O = {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            I = "*";

        function c() {
            var a, c, r = [];

            function e() {
                a = {};
                var n = {
                    _debug: b,
                    get debug() {
                        return this._debug
                    },
                    set debug(e) {
                        this._debug = e
                    },
                    _bidderTimeout: v,
                    get bidderTimeout() {
                        return this._bidderTimeout
                    },
                    set bidderTimeout(e) {
                        this._bidderTimeout = e
                    },
                    _publisherDomain: y,
                    get publisherDomain() {
                        return this._publisherDomain
                    },
                    set publisherDomain(e) {
                        this._publisherDomain = e
                    },
                    _priceGranularity: O.MEDIUM,
                    set priceGranularity(e) {
                        o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : O.MEDIUM : "object" === g(e) && (this._customPriceBucket = e, this._priceGranularity = O.CUSTOM, p.logMessage("Using custom price granularity")))
                    },
                    get priceGranularity() {
                        return this._priceGranularity
                    },
                    _customPriceBucket: {},
                    get customPriceBucket() {
                        return this._customPriceBucket
                    },
                    _mediaTypePriceGranularity: {},
                    get mediaTypePriceGranularity() {
                        return this._mediaTypePriceGranularity
                    },
                    set mediaTypePriceGranularity(n) {
                        var r = this;
                        this._mediaTypePriceGranularity = Object.keys(n).reduce((function(e, t) {
                            return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : "object" === g(n) && (e[t] = n[t], p.logMessage("Using custom price granularity for ".concat(t))) : p.logWarn("Invalid price granularity for media type: ".concat(t)), e
                        }), {})
                    },
                    _sendAllBids: h,
                    get enableSendAllBids() {
                        return this._sendAllBids
                    },
                    set enableSendAllBids(e) {
                        this._sendAllBids = e
                    },
                    _useBidCache: S,
                    get useBidCache() {
                        return this._useBidCache
                    },
                    set useBidCache(e) {
                        this._useBidCache = e
                    },
                    _bidderSequence: T,
                    get bidderSequence() {
                        return this._bidderSequence
                    },
                    set bidderSequence(e) {
                        E[e] ? this._bidderSequence = e : p.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."))
                    },
                    _timeoutBuffer: A,
                    get timeoutBuffer() {
                        return this._timeoutBuffer
                    },
                    set timeoutBuffer(e) {
                        this._timeoutBuffer = e
                    },
                    _disableAjaxTimeout: m,
                    get disableAjaxTimeout() {
                        return this._disableAjaxTimeout
                    },
                    set disableAjaxTimeout(e) {
                        this._disableAjaxTimeout = e
                    }
                };

                function i(t) {
                    return d()(Object.keys(O), (function(e) {
                        return t === O[e]
                    }))
                }

                function o(e) {
                    if (!e) return p.logError("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                    if ("string" == typeof e) i(e) || p.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                    else if ("object" === g(e) && !Object(s.b)(e)) return p.logError("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                    return !0
                }
                c && u(Object.keys(c).reduce((function(e, t) {
                    return c[t] !== n[t] && (e[t] = n[t] || {}), e
                }), {})), c = n
            }
            var t = Object(f.b)("async", (function(n) {
                if ("object" === g(n)) {
                    var e = Object.keys(n),
                        r = {};
                    e.forEach((function(e) {
                        var t = n[e];
                        "object" === g(a[e]) && "object" === g(t) && (t = l({}, a[e], t)), r[e] = c[e] = t
                    })), u(r)
                } else p.logError("setConfig options must be an object")
            }));

            function u(t) {
                var n = Object.keys(t);
                r.filter((function(e) {
                    return o()(n, e.topic)
                })).forEach((function(e) {
                    e.callback(function(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }({}, e.topic, t[e.topic]))
                })), r.filter((function(e) {
                    return e.topic === I
                })).forEach((function(e) {
                    return e.callback(t)
                }))
            }
            return e(), {
                getConfig: function() {
                    if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                        var e = arguments.length <= 0 ? void 0 : arguments[0];
                        return e ? p.deepAccess(c, e) : c
                    }
                    return function(e, t) {
                        var n = t;
                        return "string" != typeof e && (n = e, e = I), "function" == typeof n ? (r.push({
                            topic: e,
                            callback: n
                        }), function() {
                            r.splice(r.indexOf(t), 1)
                        }) : void p.logError("listener must be a function")
                    }.apply(void 0, arguments)
                },
                setConfig: t,
                setDefaults: function(e) {
                    "object" === g(a) ? (l(a, e), l(c, e)) : p.logError("defaults must be an object")
                },
                resetConfig: e
            }
        }
        var u = c()
    },
    30: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    31: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    },
    32: function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    },
    33: function(e, t, n) {
        var r = n(42),
            i = Math.min;
        e.exports = function(e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0
        }
    },
    34: function(e, t) {
        e.exports = function() {}
    },
    35: function(e, t, n) {
        n(129), e.exports = n(14).Array.findIndex
    },
    36: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return N
        })), n.d(t, "a", (function() {
            return k
        })), t.h = function(e) {
            var t, a, u, s, c = e.adUnits,
                n = e.adUnitCodes,
                r = e.callback,
                i = e.cbTimeout,
                o = e.labels,
                d = e.auctionId,
                f = c,
                l = o,
                g = n,
                p = [],
                b = [],
                v = [],
                y = d || j.generateUUID(),
                h = r,
                m = i,
                S = [],
                A = new Set;

            function E() {
                return {
                    auctionId: y,
                    timestamp: t,
                    auctionEnd: a,
                    auctionStatus: u,
                    adUnits: f,
                    adUnitCodes: g,
                    labels: l,
                    bidderRequests: p,
                    noBids: v,
                    bidsReceived: b,
                    winningBids: S,
                    timeout: m
                }
            }

            function T(e, t) {
                if (t && clearTimeout(s), null != h) {
                    var n = [];
                    e && (j.logMessage("Auction ".concat(y, " timedOut")), (n = (function(e, t) {
                        return e.map((function(e) {
                            return (e.bids || []).filter((function(e) {
                                return !t.has(e.bidder)
                            }))
                        })).reduce(w.flatten, []).map((function(e) {
                            return {
                                bidId: e.bidId,
                                bidder: e.bidder,
                                adUnitCode: e.adUnitCode,
                                auctionId: e.auctionId
                            }
                        }))
                    })(p, A)).length && U.emit(R.EVENTS.BID_TIMEOUT, n));
                    try {
                        u = k, a = Date.now(), U.emit(R.EVENTS.AUCTION_END, E());
                        var r = g,
                            i = b.filter(j.bind.call(w.adUnitsFilter, this, r)).reduce(L, {});
                        h.apply(pbjs, [i, e])
                    } catch (e) {
                        j.logError("Error executing bidsBackHandler", null, e)
                    } finally {
                        n.length && B.callTimedOutBidders(c, n, m);
                        var o = _.config.getConfig("userSync") || {};
                        o.enableOverride || C(o.syncDelay)
                    }
                    h = null
                }
            }

            function O() {
                j.logInfo("Bids Received for Auction with id: ".concat(y), b), u = k, T(!1, !0)
            }

            function I(e) {
                A.add(e)
            }
            return {
                addBidReceived: function(e) {
                    b = b.concat(e)
                },
                addNoBid: function(e) {
                    v = v.concat(e)
                },
                executeCallback: T,
                callBids: function() {
                    var n = this;
                    u = D, t = Date.now();
                    var i = B.makeBidRequests(f, t, y, m, l);
                    j.logInfo("Bids Requested for Auction with id: ".concat(y), i), i.forEach((function(e) {
                        var t;
                        t = e, p = p.concat(t)
                    }));
                    var o = {};
                    if (i.length < 1) j.logWarn("No valid bid requests returned for auction"), O();
                    else {
                        var e = {
                            bidRequests: i,
                            run: function() {
                                var e, t;
                                e = T.bind(null, !0), t = setTimeout(e, m), s = t, u = N, U.emit(R.EVENTS.AUCTION_INIT, E());
                                var r = W(O, n);
                                B.callBids(f, i, (function() {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    G.apply({
                                        dispatch: r.addBidResponse,
                                        bidderRequest: this
                                    }, t)
                                }), r.adapterDone, {
                                    request: function(e, t) {
                                        c(P, t), c(o, e), M[e] || (M[e] = {
                                            SRA: !0,
                                            origin: t
                                        }), 1 < o[e] && (M[e].SRA = !1)
                                    },
                                    done: function(e) {
                                        P[e]--, q[0] && a(q[0]) && q.shift()
                                    }
                                }, m, I)
                            }
                        };
                        a(e) || (j.logWarn("queueing auction due to limited endpoint capacity"), q.push(e))
                    }

                    function a(e) {
                        var r = !0,
                            i = _.config.getConfig("maxRequestsPerOrigin") || x;
                        return e.bidRequests.some((function(e) {
                            var t = 1,
                                n = void 0 !== e.src && e.src === R.S2S.SRC ? "s2s" : e.bidderCode;
                            return M[n] && (!1 === M[n].SRA && (t = Math.min(e.bids.length, i)), P[M[n].origin] + t > i && (r = !1)), !r
                        })), r && e.run(), r
                    }

                    function c(e, t) {
                        void 0 === e[t] ? e[t] = 1 : e[t]++
                    }
                },
                addWinningBid: function(e) {
                    S = S.concat(e), B.callBidWonBidder(e.bidder, e, c)
                },
                setBidTargeting: function(e) {
                    B.callSetTargetingBidder(e.bidder, e)
                },
                getWinningBids: function() {
                    return S
                },
                getTimeout: function() {
                    return m
                },
                getAuctionId: function() {
                    return y
                },
                getAuctionStatus: function() {
                    return u
                },
                getAdUnits: function() {
                    return f
                },
                getAdUnitCodes: function() {
                    return g
                },
                getBidRequests: function() {
                    return p
                },
                getBidsReceived: function() {
                    return b
                },
                getNoBids: function() {
                    return v
                }
            }
        }, n.d(t, "c", (function() {
            return G
        })), t.f = d, t.d = v, n.d(t, "e", (function() {
            return h
        })), t.g = S;
        var w = n(0),
            s = n(11),
            f = n(51),
            a = n(27),
            o = n(63),
            l = n(12),
            _ = n(3),
            r = n(24),
            i = n(17),
            c = n(10),
            g = n.n(c),
            u = n(46);

        function p(e) {
            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function b() {
            return (b = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var C = r.a.syncUsers,
            j = n(0),
            B = n(7).default,
            U = n(9),
            R = n(4),
            D = "started",
            N = "inProgress",
            k = "completed";
        U.on(R.EVENTS.BID_ADJUSTMENT, (function(e) {
            !(function(e) {
                var t, n = e.bidderCode,
                    r = e.cpm;
                if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[R.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[R.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[R.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t)) try {
                    r = t(e.cpm, b({}, e))
                } catch (e) {
                    j.logError("Error during bid adjustment", "bidmanager.js", e)
                }
                0 <= r && (e.cpm = r)
            })(e)
        }));
        var x = 4,
            P = {},
            M = {},
            q = [];
        var G = Object(i.b)("async", (function(e, t) {
            this.dispatch.call(this.bidderRequest, e, t)
        }), "addBidResponse");

        function W(t, o) {
            var a = 0,
                n = false,
                r = new Set,
                c = {};

            function u() {
                a--;
                if (n && a === 0) {
                    t()
                }
            }

            function e(e, t) {
                var n = this;
                c[t.requestId] = true, a++;
                var r = o.getAuctionId(),
                    i = m({
                        adUnitCode: e,
                        bid: t,
                        bidderRequest: n,
                        auctionId: r
                    });
                if (i.mediaType === "video") {
                    y(o, i, n, u)
                } else {
                    v(o, i);
                    u()
                }
            }

            function i() {
                var e = this;
                if (r.add(this), n = o.getBidRequests().every((function(e) {
                        return r.has(e)
                    })), this.bids.forEach((function(e) {
                        c[e.bidId] || (o.addNoBid(e), U.emit(R.EVENTS.NO_BID, e))
                    })), n && 0 === a) {
                    t()
                }
            }
            return {
                addBidResponse: e,
                adapterDone: i
            }
        }

        function d(e, t) {
            t.timeToRespond > e.getTimeout() + _.config.getConfig("timeoutBuffer") && e.executeCallback(!0)
        }

        function v(e, t) {
            var n = e.getBidRequests(),
                r = g()(n, (function(e) {
                    return e.bidderCode === t.bidderCode
                }));
            !(function(t, e) {
                var n;
                if (t.bidderCode && (0 < t.cpm || t.dealId)) {
                    var r = g()(e.bids, (function(e) {
                        return e.adUnitCode === t.adUnitCode
                    }));
                    n = (function(e, t, n) {
                        if (!t) return {};
                        var r = {},
                            i = pbjs.bidderSettings;
                        if (i) {
                            var o = S(t.mediaType, e);
                            A(r, o, t), e && i[e] && i[e][R.JSON_MAPPING.ADSERVER_TARGETING] && (A(r, i[e], t), t.sendStandardTargeting = i[e].sendStandardTargeting)
                        }
                        t.native && (r = b({}, r, Object(a.d)(t, n)));
                        return r
                    })(t.bidderCode, t, r)
                }
                t.adserverTargeting = b(t.adserverTargeting || {}, n)
            })(t, r), U.emit(R.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), d(e, t)
        }

        function y(e, t, n, r) {
            var i = true,
                o = Object(w["getBidRequest"])(t.requestId, [n]),
                a = o && Object(w["deepAccess"])(o, "mediaTypes.video"),
                c = a && Object(w["deepAccess"])(a, "context");
            if (_["config"].getConfig("cache.url") && c !== u["a"]) {
                if (!t.videoCacheKey) {
                    i = false;
                    h(e, t, r, o)
                } else if (!t.vastUrl) {
                    j.logError("videoCacheKey specified but not required vastUrl for video bid");
                    i = false
                }
            }
            if (i) {
                v(e, t);
                r()
            }
        }
        var h = Object(i.b)("async", (function(n, r, i, e) {
            Object(o.b)([r], (function(e, t) {
                e ? (j.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), d(n, r)) : "" === t[0].uuid ? (j.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), d(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), v(n, r), i())
            }))
        }), "callPrebidCache");

        function m(e) {
            var t = e.adUnitCode,
                n = e.bid,
                r = e.bidderRequest,
                i = e.auctionId,
                o = r.start,
                a = b({}, n, {
                    auctionId: i,
                    responseTimestamp: Object(w["timestamp"])(),
                    requestTimestamp: o,
                    cpm: parseFloat(n.cpm) || 0,
                    bidder: n.bidderCode,
                    adUnitCode: t
                });
            a.timeToRespond = a.responseTimestamp - a.requestTimestamp, U.emit(R.EVENTS.BID_ADJUSTMENT, a);
            var c = r.bids && g()(r.bids, (function(e) {
                    return e.adUnitCode == t
                })),
                u = c && c.renderer;
            if (u && u.url) {
                a.renderer = l["a"].install({
                    url: u.url
                });
                a.renderer.setRender(u.render)
            }
            var s = _["config"].getConfig("mediaTypePriceGranularity.".concat(n.mediaType)),
                d = Object(f["a"])(a.cpm, p(s) === "object" ? s : _["config"].getConfig("customPriceBucket"), _["config"].getConfig("currency.granularityMultiplier"));
            return a.pbLg = d.low, a.pbMg = d.med, a.pbHg = d.high, a.pbAg = d.auto, a.pbDg = d.dense, a.pbCg = d.custom, a
        }

        function S(e, t) {
            function n(e, t) {
                return {
                    key: e,
                    val: "function" == typeof t ? function(e) {
                        return t(e)
                    } : function(e) {
                        return Object(w.getValue)(e, t)
                    }
                }
            }
            var r = R.TARGETING_KEYS,
                i = _.config.getConfig("mediaTypePriceGranularity.".concat(e)),
                o = "string" == typeof e && i ? "string" == typeof i ? i : "custom" : _.config.getConfig("priceGranularity"),
                a = pbjs.bidderSettings;
            if (a[R.JSON_MAPPING.BD_SETTING_STANDARD] || (a[R.JSON_MAPPING.BD_SETTING_STANDARD] = {}), a[R.JSON_MAPPING.BD_SETTING_STANDARD][R.JSON_MAPPING.ADSERVER_TARGETING] || (a[R.JSON_MAPPING.BD_SETTING_STANDARD][R.JSON_MAPPING.ADSERVER_TARGETING] = [n(r.BIDDER, "bidderCode"), n(r.AD_ID, "adId"), n(r.PRICE_BUCKET, (function(e) {
                    return o === R.GRANULARITY_OPTIONS.AUTO ? e.pbAg : o === R.GRANULARITY_OPTIONS.DENSE ? e.pbDg : o === R.GRANULARITY_OPTIONS.LOW ? e.pbLg : o === R.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : o === R.GRANULARITY_OPTIONS.HIGH ? e.pbHg : o === R.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                })), n(r.SIZE, "size"), n(r.DEAL, "dealId"), n(r.SOURCE, "source"), n(r.FORMAT, "mediaType")]), "video" === e) {
                var c = a[R.JSON_MAPPING.BD_SETTING_STANDARD][R.JSON_MAPPING.ADSERVER_TARGETING];
                if ([r.UUID, r.CACHE_ID].forEach((function(t) {
                        void 0 === g()(c, (function(e) {
                            return e.key === t
                        })) && c.push(n(t, "videoCacheKey"))
                    })), _.config.getConfig("cache.url") && (!t || !1 !== j.deepAccess(a, "".concat(t, ".sendStandardTargeting")))) {
                    var u = Object(s.c)(_.config.getConfig("cache.url"));
                    void 0 === g()(c, (function(e) {
                        return e.key === r.CACHE_HOST
                    })) && c.push(n(r.CACHE_HOST, (function(e) {
                        return j.deepAccess(e, "adserverTargeting.".concat(r.CACHE_HOST)) ? e.adserverTargeting[r.CACHE_HOST] : u.hostname
                    })))
                }
            }
            return a[R.JSON_MAPPING.BD_SETTING_STANDARD]
        }

        function A(r, i, o) {
            var e = i[R.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), j._each(e, (function(e) {
                var t = e.key,
                    n = e.val;
                if (r[t] && j.logWarn("The key: " + t + " is getting ovewritten"), j.isFn(n)) try {
                    n = n(o)
                } catch (e) {
                    j.logError("bidmanager", "ERROR", e)
                }(void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== R.TARGETING_KEYS.DEAL || !j.isEmptyStr(n) && null != n ? r[t] = n : j.logInfo("suppressing empty key '" + t + "' from adserver targeting")
            })), r
        }

        function L(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e
        }
    },
    37: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }));
        var r = n(0),
            u = n(36),
            i = n(10),
            o = n.n(i),
            a = n(4);
        var s, c, d = (s = [], (c = {}).addWinningBid = function(t) {
            var e = o()(s, (function(e) {
                return e.getAuctionId() === t.auctionId
            }));
            e ? e.addWinningBid(t) : utils.logWarn("Auction not found when adding winning bid")
        }, c.getAllWinningBids = function() {
            return s.map((function(e) {
                return e.getWinningBids()
            })).reduce(r.flatten, [])
        }, c.getBidsRequested = function() {
            return s.map((function(e) {
                return e.getBidRequests()
            })).reduce(r.flatten, [])
        }, c.getNoBids = function() {
            return s.map((function(e) {
                return e.getNoBids()
            })).reduce(r.flatten, [])
        }, c.getBidsReceived = function() {
            return s.map((function(e) {
                if (e.getAuctionStatus() === u.a) return e.getBidsReceived()
            })).reduce(r.flatten, []).filter((function(e) {
                return e
            }))
        }, c.getAdUnits = function() {
            return s.map((function(e) {
                return e.getAdUnits()
            })).reduce(r.flatten, [])
        }, c.getAdUnitCodes = function() {
            return s.map((function(e) {
                return e.getAdUnitCodes()
            })).reduce(r.flatten, []).filter(r.uniques)
        }, c.createAuction = function(e) {
            var t = e.adUnits,
                n = e.adUnitCodes,
                r = e.callback,
                i = e.cbTimeout,
                o = e.labels,
                a = e.auctionId,
                c = Object(u.h)({
                    adUnits: t,
                    adUnitCodes: n,
                    callback: r,
                    cbTimeout: i,
                    labels: o,
                    auctionId: a
                });
            return (function(e) {
                s.push(e)
            })(c), c
        }, c.findBidByAdId = function(t) {
            return o()(s.map((function(e) {
                return e.getBidsReceived()
            })).reduce(r.flatten, []), (function(e) {
                return e.adId === t
            }))
        }, c.getStandardBidderAdServerTargeting = function() {
            return Object(u.g)()[a.JSON_MAPPING.ADSERVER_TARGETING]
        }, c.setStatusForBids = function(e, t) {
            var n = c.findBidByAdId(e);
            if (n && (n.status = t), n && t === a.BID_STATUS.BID_TARGETING_SET) {
                var r = o()(s, (function(e) {
                    return e.getAuctionId() === n.auctionId
                }));
                r && r.setBidTargeting(n)
            }
        }, c.getLastAuctionId = function() {
            return s.length && s[s.length - 1].getAuctionId()
        }, c)
    },
    38: function(e, t, n) {
        var l = n(23),
            g = n(73),
            p = n(74),
            b = n(25),
            v = n(33),
            y = n(75),
            h = {},
            m = {};
        (t = e.exports = function(e, t, n, r, i) {
            var o, a, c, u, s = i ? function() {
                    return e
                } : y(e),
                d = l(n, r, t ? 2 : 1),
                f = 0;
            if ("function" != typeof s) throw TypeError(e + " is not iterable!");
            if (p(s)) {
                for (o = v(e.length); f < o; f++)
                    if ((u = t ? d(b(a = e[f])[0], a[1]) : d(e[f])) === h || u === m) return u
            } else
                for (c = s.call(e); !(a = c.next()).done;)
                    if ((u = g(c, d, a.value, t)) === h || u === m) return u
        }).BREAK = h, t.RETURN = m
    },
    39: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    4: function(e, t) {
        e.exports = {
            JSON_MAPPING: {
                PL_CODE: "code",
                PL_SIZE: "sizes",
                PL_BIDS: "bids",
                BD_BIDDER: "bidder",
                BD_ID: "paramsd",
                BD_PL_ID: "placementId",
                ADSERVER_TARGETING: "adserverTargeting",
                BD_SETTING_STANDARD: "standard"
            },
            DEBUG_MODE: "pbjs_debug",
            STATUS: {
                GOOD: 1,
                NO_BID: 2
            },
            CB: {
                TYPE: {
                    ALL_BIDS_BACK: "allRequestedBidsBack",
                    AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                    BID_WON: "bidWon",
                    REQUEST_BIDS: "requestBids"
                }
            },
            EVENTS: {
                AUCTION_INIT: "auctionInit",
                AUCTION_END: "auctionEnd",
                BID_ADJUSTMENT: "bidAdjustment",
                BID_TIMEOUT: "bidTimeout",
                BID_REQUESTED: "bidRequested",
                BID_RESPONSE: "bidResponse",
                NO_BID: "noBid",
                BID_WON: "bidWon",
                BIDDER_DONE: "bidderDone",
                SET_TARGETING: "setTargeting",
                REQUEST_BIDS: "requestBids",
                ADD_AD_UNITS: "addAdUnits",
                AD_RENDER_FAILED: "adRenderFailed"
            },
            AD_RENDER_FAILED_REASON: {
                PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
                NO_AD: "noAd",
                EXCEPTION: "exception",
                CANNOT_FIND_AD: "cannotFindAd",
                MISSING_DOC_OR_ADID: "missingDocOrAdid"
            },
            EVENT_ID_PATHS: {
                bidWon: "adUnitCode"
            },
            GRANULARITY_OPTIONS: {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            TARGETING_KEYS: {
                BIDDER: "hb_bidder",
                AD_ID: "hb_adid",
                PRICE_BUCKET: "hb_pb",
                SIZE: "hb_size",
                DEAL: "hb_deal",
                SOURCE: "hb_source",
                FORMAT: "hb_format",
                UUID: "hb_uuid",
                CACHE_ID: "hb_cache_id",
                CACHE_HOST: "hb_cache_host"
            },
            NATIVE_KEYS: {
                title: "hb_native_title",
                body: "hb_native_body",
                body2: "hb_native_body2",
                privacyLink: "hb_native_privacy",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                displayUrl: "hb_native_displayurl",
                cta: "hb_native_cta",
                rating: "hb_native_rating",
                address: "hb_native_address",
                downloads: "hb_native_downloads",
                likes: "hb_native_likes",
                phone: "hb_native_phone",
                price: "hb_native_price",
                salePrice: "hb_native_saleprice"
            },
            S2S: {
                SRC: "s2s",
                DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                SYNCED_BIDDERS_KEY: "pbjsSyncs"
            },
            BID_STATUS: {
                BID_TARGETING_SET: "targetingSet",
                RENDERED: "rendered"
            }
        }
    },
    40: function(e, t, n) {
        var m = n(23),
            S = n(54),
            A = n(41),
            E = n(33),
            r = n(85);
        e.exports = function(f, e) {
            var l = 1 == f,
                g = 2 == f,
                p = 3 == f,
                b = 4 == f,
                v = 6 == f,
                y = 5 == f || v,
                h = e || r;
            return function(e, t, n) {
                for (var r, i, o = A(e), a = S(o), c = m(t, n, 3), u = E(a.length), s = 0, d = l ? h(e, u) : g ? h(e, 0) : void 0; s < u; s++)
                    if ((y || s in a) && (i = c(r = a[s], s, o), f))
                        if (l) d[s] = i;
                        else if (i) switch (f) {
                    case 3:
                        return !0;
                    case 5:
                        return r;
                    case 6:
                        return s;
                    case 2:
                        d.push(r)
                } else if (b) return !1;
                return v ? -1 : p || b ? b : d
            }
        }
    },
    41: function(e, t, n) {
        var r = n(32);
        e.exports = function(e) {
            return Object(r(e))
        }
    },
    42: function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
        }
    },
    43: function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    },
    44: function(e, t, n) {
        var r = n(54),
            i = n(32);
        e.exports = function(e) {
            return r(i(e))
        }
    },
    45: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = e;
            return {
                callBids: function() {},
                setBidderCode: function(e) {
                    t = e
                },
                getBidderCode: function() {
                    return t
                }
            }
        }
    },
    46: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        })), t.c = function(e, t) {
            var n = Object(o.getBidRequest)(e.requestId, t),
                r = n && Object(o.deepAccess)(n, "mediaTypes.video"),
                i = r && Object(o.deepAccess)(r, "context");
            return u(e, n, r, i)
        }, n.d(t, "b", (function() {
            return u
        }));
        n(7);
        var o = n(0),
            i = n(3),
            r = n(8),
            a = (n.n(r), n(17)),
            c = "outstream";
        var u = Object(a.b)("sync", (function(e, t, n, r) {
            return !t || n && r !== c ? i.config.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : r !== c || !(!e.renderer && !t.renderer)
        }), "checkVideoBidSetup")
    },
    47: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (!t || !e) return void o.logError("cannot load external script without url and moduleCode");
            if (!i()(c, t)) return void o.logError("".concat(t, " not whitelisted for loading external JavaScript"));
            if (a[e]) return;
            o.logWarn("module ".concat(t, " is loading external JavaScript"));
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, n.src = e, o.insertElement(n), a[e] = !0
        }, t.b = function(t, e, n) {
            if (!t) return void o.logError("Error attempting to request empty URL", "adloader.js:loadScript");
            n ? a[t] ? e && "function" == typeof e && (a[t].loaded ? e() : a[t].callbacks.push(e)) : (a[t] = {
                loaded: !1,
                callbacks: []
            }, e && "function" == typeof e && a[t].callbacks.push(e), u(t, (function() {
                a[t].loaded = !0;
                try {
                    for (var e = 0; e < a[t].callbacks.length; e++) a[t].callbacks[e]()
                } catch (e) {
                    o.logError("Error executing callback", "adloader.js:loadScript", e)
                }
            }))) : u(t, e)
        };
        var r = n(8),
            i = n.n(r),
            o = n(0),
            a = {},
            c = ["criteo"];

        function u(e, t) {
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, t && "function" == typeof t && (n.readyState ? n.onreadystatechange = function() {
                "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t())
            } : n.onload = function() {
                t()
            }), n.src = e;
            var r = document.getElementsByTagName("head");
            (r = r.length ? r : document.getElementsByTagName("body")).length && (r = r[0]).insertBefore(n, r.firstChild)
        }
    },
    48: function(e, t, n) {
        "use strict";
        var m = n(57),
            S = n(13),
            A = n(136),
            E = n(20),
            T = n(28),
            O = n(137),
            I = n(50),
            w = n(142),
            _ = n(15)("iterator"),
            C = !([].keys && "next" in [].keys()),
            j = "values",
            B = function() {
                return this
            };
        e.exports = function(e, t, n, r, i, o, a) {
            O(n, t, r);
            var c, u, s, d = function(e) {
                    if (!C && e in p) return p[e];
                    switch (e) {
                        case "keys":
                        case j:
                            return function() {
                                return new n(this, e)
                            }
                    }
                    return function() {
                        return new n(this, e)
                    }
                },
                f = t + " Iterator",
                l = i == j,
                g = !1,
                p = e.prototype,
                b = p[_] || p["@@iterator"] || i && p[i],
                v = b || d(i),
                y = i ? l ? d("entries") : v : void 0,
                h = "Array" == t && p.entries || b;
            if (h && (s = w(h.call(new e))) !== Object.prototype && s.next && (I(s, f, !0), m || "function" == typeof s[_] || E(s, _, B)), l && b && b.name !== j && (g = !0, v = function() {
                    return b.call(this)
                }), m && !a || !C && !g && p[_] || E(p, _, v), T[t] = v, T[f] = B, i)
                if (c = {
                        values: l ? v : d(j),
                        keys: o ? v : d("keys"),
                        entries: y
                    }, a)
                    for (u in c) u in p || A(p, u, c[u]);
                else S(S.P + S.F * (C || g), t, c);
            return c
        }
    },
    49: function(e, t, n) {
        var r = n(56)("keys"),
            i = n(43);
        e.exports = function(e) {
            return r[e] || (r[e] = i(e))
        }
    },
    5: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        })), t.b = i;
        var l = n(11),
            g = n(3);

        function p() {
            return (p = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var v = n(0),
            y = 4,
            r = i();

        function i() {
            var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                d = e.request,
                f = e.done;
            return function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var i, o = r.method || (n ? "POST" : "GET"),
                        a = document.createElement("a");
                    a.href = e;
                    var c = "object" === b(t) && null !== t ? t : {
                        success: function() {
                            v.logMessage("xhr success")
                        },
                        error: function(e) {
                            v.logError("xhr error", null, e)
                        }
                    };
                    if ("function" == typeof t && (c.success = t), (i = new window.XMLHttpRequest).onreadystatechange = function() {
                            if (i.readyState === y) {
                                "function" == typeof f && f(a.origin);
                                var e = i.status;
                                200 <= e && e < 300 || 304 === e ? c.success(i.responseText, i) : c.error(i.statusText, i)
                            }
                        }, g.config.getConfig("disableAjaxTimeout") || (i.ontimeout = function() {
                            v.logError("  xhr timeout after ", i.timeout, "ms")
                        }), "GET" === o && n) {
                        var u = Object(l.c)(e, r);
                        p(u.search, n), e = Object(l.a)(u)
                    }
                    i.open(o, e, !0), g.config.getConfig("disableAjaxTimeout") || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), v._each(r.customHeaders, (function(e, t) {
                        i.setRequestHeader(t, e)
                    })), r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType || "text/plain"), "function" == typeof d && d(a.origin), "POST" === o && n ? i.send(n) : i.send()
                } catch (e) {
                    v.logError("xhr construction", e)
                }
            }
        }
    },
    50: function(e, t, n) {
        var r = n(19).f,
            i = n(26),
            o = n(15)("toStringTag");
        e.exports = function(e, t, n) {
            e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                configurable: !0,
                value: t
            })
        }
    },
    51: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return l
        })), n.d(t, "b", (function() {
            return p
        }));
        var r = n(10),
            a = n.n(r),
            i = n(0),
            s = 2,
            o = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .5
                }]
            },
            c = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .1
                }]
            },
            u = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .01
                }]
            },
            d = {
                buckets: [{
                    min: 0,
                    max: 3,
                    increment: .01
                }, {
                    min: 3,
                    max: 8,
                    increment: .05
                }, {
                    min: 8,
                    max: 20,
                    increment: .5
                }]
            },
            f = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .05
                }, {
                    min: 5,
                    max: 10,
                    increment: .1
                }, {
                    min: 10,
                    max: 20,
                    increment: .5
                }]
            };

        function l(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                r = parseFloat(e);
            return isNaN(r) && (r = ""), {
                low: "" === r ? "" : g(e, o, n),
                med: "" === r ? "" : g(e, c, n),
                high: "" === r ? "" : g(e, u, n),
                auto: "" === r ? "" : g(e, f, n),
                dense: "" === r ? "" : g(e, d, n),
                custom: "" === r ? "" : g(e, t, n)
            }
        }

        function g(n, e, r) {
            var i = "";
            if (!p(e)) return i;
            var o = e.buckets.reduce((function(e, t) {
                    return e.max > t.max ? e : t
                }), {
                    max: 0
                }),
                t = a()(e.buckets, (function(e) {
                    if (n > o.max * r) {
                        var t = e.precision;
                        void 0 === t && (t = s), i = (e.max * r).toFixed(t)
                    } else if (n <= e.max * r && n >= e.min * r) return e
                }));
            return t && (i = (function(e, t, n) {
                var r = void 0 !== t.precision ? t.precision : s,
                    i = t.increment * n,
                    o = t.min * n,
                    a = Math.pow(10, r + 2),
                    c = (e * a - o * a) / (i * a),
                    u = Math.floor(c) * i + o;
                return (u = Number(u.toFixed(10))).toFixed(r)
            })(n, t, r)), i
        }

        function p(e) {
            if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach((function(e) {
                void 0 !== e.min && e.max && e.increment || (t = !1)
            })), t
        }
    },
    52: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    },
    53: function(e, t, n) {
        var r = n(16),
            i = n(18).document,
            o = r(i) && r(i.createElement);
        e.exports = function(e) {
            return o ? i.createElement(e) : {}
        }
    },
    54: function(e, t, n) {
        var r = n(31);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    },
    55: function(e, t, n) {
        var r = n(31);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    },
    56: function(e, t, n) {
        var r = n(14),
            i = n(18),
            o = "__core-js_shared__",
            a = i[o] || (i[o] = {});
        (e.exports = function(e, t) {
            return a[e] || (a[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: n(57) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    57: function(e, t) {
        e.exports = !0
    },
    58: function(e, t, n) {
        var u = n(44),
            s = n(33),
            d = n(88);
        e.exports = function(c) {
            return function(e, t, n) {
                var r, i = u(e),
                    o = s(i.length),
                    a = d(n, o);
                if (c && t != t) {
                    for (; a < o;)
                        if ((r = i[a++]) != r) return !0
                } else
                    for (; a < o; a++)
                        if ((c || a in i) && i[a] === t) return c || a || 0;
                return !c && -1
            }
        }
    },
    582: function(e, t, n) {
        e.exports = n(64)
    },
    59: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (e.labelAll) return {
                labelAll: !0,
                labels: e.labelAll,
                activeLabels: t
            };
            return {
                labelAll: !1,
                labels: e.labelAny,
                activeLabels: t
            }
        }, t.c = function(e) {
            var t = v(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b);
            return !t.shouldFilter || !!t.sizesSupported[e]
        }, t.b = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.labels,
                n = void 0 === t ? [] : t,
                r = e.labelAll,
                i = void 0 !== r && r,
                o = e.activeLabels,
                a = void 0 === o ? [] : o,
                c = 1 < arguments.length ? arguments[1] : void 0,
                u = 2 < arguments.length ? arguments[2] : void 0,
                s = v(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : b);
            c = Object(g.isPlainObject)(c) ? Object(g.deepClone)(c) : u ? {
                banner: {
                    sizes: u
                }
            } : {};
            var d = Object(g.deepAccess)(c, "banner.sizes");
            s.shouldFilter && d && (c.banner.sizes = d.filter((function(e) {
                return s.sizesSupported[e]
            })));
            var f = Object.keys(c),
                l = {
                    active: 1 < f.length || 1 === f.length && "banner" !== f[0] || "banner" === f[0] && 0 < Object(g.deepAccess)(c, "banner.sizes.length") && (0 === n.length || !i && (n.some((function(e) {
                        return s.labels[e]
                    })) || n.some((function(e) {
                        return p()(a, e)
                    }))) || i && n.reduce((function(e, t) {
                        return e ? s.labels[t] || p()(a, t) : e
                    }), !0)),
                    mediaTypes: c
                };
            d && d.length !== c.banner.sizes.length && (l.filterResults = {
                before: d,
                after: c.banner.sizes
            });
            return l
        };
        var r = n(3),
            g = n(0),
            i = n(8),
            p = n.n(i);

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var b = [];

        function v(e) {
            return e.reduce((function(n, r) {
                if ("object" === o(r) && "string" == typeof r.mediaQuery) {
                    var t = !1;
                    try {
                        t = Object(g.getWindowTop)().matchMedia(r.mediaQuery).matches
                    } catch (e) {
                        Object(g.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), t = matchMedia(r.mediaQuery).matches
                    }
                    t && (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0), ["labels", "sizesSupported"].forEach((function(t) {
                        return (r[t] || []).forEach((function(e) {
                            return n[t][e] = !0
                        }))
                    })))
                } else Object(g.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                return n
            }), {
                labels: {},
                sizesSupported: {},
                shouldFilter: !1
            })
        }
        r.config.getConfig("sizeConfig", (function(e) {
            return (function(e) {
                b = e
            })(e.sizeConfig)
        }))
    },
    60: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }));
        var r = n(0),
            i = {};
        var o = {
            incrementCounter: function(e) {
                return i[e] = i[e] || {}, i[e].counter = Object(r.deepAccess)(i, "".concat(e, ".counter")) + 1 || 1, i[e].counter
            },
            getCounter: function(e) {
                return Object(r.deepAccess)(i, "".concat(e, ".counter")) || 0
            }
        }
    },
    61: function(e, t, n) {
        "use strict";
        t.a = r, n.d(t, "b", (function() {
            return i
        }));
        var c = n(0);

        function u() {
            return (u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function r(i) {
            function o() {
                var e = (function() {
                        var t, n = [];
                        do {
                            try {
                                t = t ? t.parent : i;
                                try {
                                    var e = t == i.top,
                                        r = {
                                            referrer: t.document.referrer || null,
                                            location: t.location.href || null,
                                            isTop: e
                                        };
                                    e && (r = u(r, {
                                        canonicalUrl: a(t.document)
                                    })), n.push(r)
                                } catch (e) {
                                    n.push({
                                        referrer: null,
                                        location: null,
                                        isTop: t == i.top
                                    }), Object(c.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location")
                                }
                            } catch (e) {
                                return n.push({
                                    referrer: null,
                                    location: null,
                                    isTop: !1
                                }), n
                            }
                        } while (t != i.top);
                        return n
                    })(),
                    t = (function() {
                        try {
                            if (!i.location.ancestorOrigins) return;
                            return i.location.ancestorOrigins
                        } catch (e) {}
                    })();
                if (t)
                    for (var n = 0, r = t.length; n < r; n++) e[n].ancestor = t[n];
                return e
            }

            function a(e) {
                try {
                    var t = e.querySelector("link[rel='canonical']");
                    if (null !== t) return t.href
                } catch (e) {}
                return null
            }
            return function() {
                try {
                    var e, t = o(),
                        n = t.length - 1,
                        r = null !== t[n].location || 0 < n && null !== t[n - 1].referrer,
                        i = (function(e) {
                            var t, n = [],
                                r = null,
                                i = null,
                                o = null,
                                a = null,
                                c = null;
                            for (t = e.length - 1; 0 <= t; t--) {
                                try {
                                    r = e[t].location
                                } catch (e) {}
                                if (r) n.push(r), c || (c = r);
                                else if (0 !== t) {
                                    i = e[t - 1];
                                    try {
                                        o = i.referrer, a = i.ancestor
                                    } catch (e) {}
                                    o ? (n.push(o), c || (c = o)) : a ? (n.push(a), c || (c = a)) : n.push(null)
                                } else n.push(null)
                            }
                            return {
                                stack: n,
                                detectedRefererUrl: c
                            }
                        })(t);
                    return t[t.length - 1].canonicalUrl && (e = t[t.length - 1].canonicalUrl), {
                        referer: i.detectedRefererUrl,
                        reachedTop: r,
                        numIframes: n,
                        stack: i.stack,
                        canonicalUrl: e
                    }
                } catch (e) {}
            }
        }
        var i = r(window)
    },
    62: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "TARGETING_KEY_PB_CAT_DUR", (function() {
            return y
        })), n.d(t, "TARGETING_KEY_CACHE_ID", (function() {
            return h
        })), t.callPrebidCacheHook = T, t.checkAdUnitSetupHook = O, t.checkVideoBidSetupHook = I, t.adpodSetConfig = w, t.initAdpodHooks = function() {
            Object(o.c)(d.e, T), Object(o.c)(r.checkAdUnitSetup, O), Object(o.c)(i.b, I)
        }, t.callPrebidCacheAfterAuction = function(i, o) {
            Object(f.b)(i, (function(e, t) {
                if (e) o(e, null);
                else {
                    for (var n = [], r = 0; r < t.length; r++) "" !== t[r] && n.push(i[r]);
                    o(null, n)
                }
            }))
        }, t.sortByPricePerSecond = function(e, t) {
            if (e.cpm / e.video.durationBucket < t.cpm / t.video.durationBucket) return 1;
            if (e.cpm / e.video.durationBucket > t.cpm / t.video.durationBucket) return -1;
            return 0
        };
        var s = n(0),
            d = n(36),
            r = n(64),
            i = n(46),
            o = n(17),
            f = n(63),
            c = n(3),
            u = n(2),
            a = n(133),
            l = n.n(a),
            g = n(10),
            p = n.n(g);

        function b(e) {
            return (function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            })(e) || (function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            })(e) || (function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            })()
        }
        var v = n(156),
            y = "hb_pb_cat_dur",
            h = "hb_cache_id",
            m = 50,
            S = 5,
            A = (function() {
                var t = {};

                function n(e) {
                    t[e] = {}, t[e].bidStorage = new l.a, t[e].queueDispatcher = (function(a) {
                        var c, u = 1;
                        return function(e, t, n, r) {
                            var i = this,
                                o = function() {
                                    (function(i, o, a) {
                                        (function(e) {
                                            for (var t = 0; t < e.length; t++) A.removeBid(e[t])
                                        })(o), Object(f.b)(o, (function(e, t) {
                                            if (e) {
                                                s.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid(s) must be discarded."));
                                                for (var n = 0; n < o.length; n++) Object(d.f)(i, o[n])
                                            } else
                                                for (var r = 0; r < t.length; r++) "" !== t[r].uuid ? Object(d.d)(i, o[r]) : s.logInfo("Detected a bid was not cached because the custom key was already registered.  Attempted to use key: ".concat(o[r].customCacheKey, ". Bid was: "), o[r]), a()
                                        }))
                                    }).call(i, e, t, n)
                                };
                            clearTimeout(c), r ? u = 1 : u === S ? (u = 1, o()) : (u++, c = setTimeout(o, a))
                        }
                    })(m), t[e].initialCacheKey = s.generateUUID()
                }
                return {
                    addBid: function(e) {
                        t[e.auctionId] || n(e.auctionId), t[e.auctionId].bidStorage.add(e)
                    },
                    removeBid: function(e) {
                        t[e.auctionId].bidStorage.delete(e)
                    },
                    getBids: function(e) {
                        return t[e.auctionId] && t[e.auctionId].bidStorage.values()
                    },
                    getQueueDispatcher: function(e) {
                        return t[e.auctionId] && t[e.auctionId].queueDispatcher
                    },
                    setupInitialCacheKey: function(e) {
                        t[e.auctionId] || (t[e.auctionId] = {}, t[e.auctionId].initialCacheKey = s.generateUUID())
                    },
                    getInitialCacheKey: function(e) {
                        return t[e.auctionId] && t[e.auctionId].initialCacheKey
                    }
                }
            })();

        function E(e, t) {
            var n, r = A.getInitialCacheKey(e),
                i = s.deepAccess(e, "video.durationBucket"),
                o = e.cpm.toFixed(2);
            if (t) {
                var a = s.deepAccess(e, "meta.adServerCatId");
                n = "".concat(o, "_").concat(a, "_").concat(i, "s")
            } else n = "".concat(o, "_").concat(i, "s");
            e.adserverTargeting || (e.adserverTargeting = {}), e.adserverTargeting[y] = n, e.adserverTargeting[h] = r, e.videoCacheKey = r, e.customCacheKey = "".concat(n, "_").concat(r)
        }

        function T(e, t, n, r, i) {
            var o = s.deepAccess(i, "mediaTypes.video");
            if (o && o.context === u.a) {
                var a = c.config.getConfig("adpod.brandCategoryExclusion");
                !s.deepAccess(n, "meta.adServerCatId") && a && (s.logWarn("Detected a bid without meta.adServerCatId while setConfig({adpod.brandCategoryExclusion}) was enabled.  This bid has been rejected:", n), r()), !1 === c.config.getConfig("adpod.deferCaching") ? (A.addBid(n), E(n, a), (function(e, t, n) {
                    var r = A.getBids(t);
                    if (r) {
                        var i = v(r),
                            o = A.getQueueDispatcher(t),
                            a = !(e.getAuctionStatus() === d.b);
                        o(e, i, n, a)
                    } else s.logWarn("Attempted to cache a bid from an unknown auction. Bid:", t)
                })(t, n, r)) : (A.setupInitialCacheKey(n), E(n, a), Object(d.d)(t, n), r())
            } else e.call(this, t, n, r, i)
        }

        function O(e, t) {
            t = t.filter((function(e) {
                var t = s.deepAccess(e, "mediaTypes"),
                    n = s.deepAccess(t, "video");
                if (n && n.context === u.a) {
                    if (1 < Object.keys(t).length) return s.logWarn("Detected more than one mediaType in adUnitCode: ".concat(e.code, " while attempting to define an 'adpod' video adUnit.  'adpod' adUnits cannot be mixed with other mediaTypes.  This adUnit will be removed from the auction.")), !1;
                    var r = "Detected missing or incorrectly setup fields for an adpod adUnit.  Please review the following fields of adUnitCode: ".concat(e.code, ".  This adUnit will be removed from the auction."),
                        i = !(!n.playerSize || !s.isArrayOfNums(n.playerSize)),
                        o = !!(n.adPodDurationSec && s.isNumber(n.adPodDurationSec) && 0 < n.adPodDurationSec),
                        a = !!(n.durationRangeSec && s.isArrayOfNums(n.durationRangeSec) && n.durationRangeSec.every((function(e) {
                            return 0 < e
                        })));
                    if (!i || !o || !a) return r += i ? "" : "\nmediaTypes.video.playerSize", r += o ? "" : "\nmediaTypes.video.adPodDurationSec", r += a ? "" : "\nmediaTypes.video.durationRangeSec", s.logWarn(r), !1
                }
                return !0
            })), e.call(this, t)
        }

        function I(e, t, n, r, i) {
            if (i === u.a) {
                var o = !0;
                if (c.config.getConfig("adpod.brandCategoryExclusion") && !s.deepAccess(t, "meta.iabSubCatId") && (o = !1), s.deepAccess(t, "video"))
                    if (s.deepAccess(t, "video.context") && t.video.context === u.a || (o = !1), !s.deepAccess(t, "video.durationSeconds") || t.video.durationSeconds <= 0) o = !1;
                    else(function(e, t) {
                        var n = s.deepAccess(t, "video.durationSeconds"),
                            r = s.deepAccess(e, "mediaTypes.video"),
                            i = r.durationRangeSec;
                        if (i.sort((function(e, t) {
                                return e - t
                            })), r.requireExactDuration) {
                            if (!p()(i, (function(e) {
                                    return e === n
                                }))) return s.logWarn("Detected a bid with a duration value not part of the list of accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Exact match durations must be used for this adUnit. Rejecting bid: ", t), !1;
                            t.video.durationBucket = n
                        } else {
                            var o = Math.max.apply(Math, b(i));
                            if (!(n <= o + 2)) return s.logWarn("Detected a bid with a duration value outside the accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Rejecting bid: ", t), !1;
                            var a = p()(i, (function(e) {
                                return n <= e + 2
                            }));
                            t.video.durationBucket = a
                        }
                        return !0
                    })(n, t) || (o = !1);
                c.config.getConfig("cache.url") || !t.vastXml || t.vastUrl || (s.logError('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), o = !1), e.bail(o)
            } else e.call(this, t, n, r, i)
        }

        function w(e) {
            void 0 !== e.bidQueueTimeDelay && ("number" == typeof e.bidQueueTimeDelay && 0 < e.bidQueueTimeDelay ? m = e.bidQueueTimeDelay : s.logWarn("Detected invalid value for adpod.bidQueueTimeDelay in setConfig; must be a positive number.  Using default: ".concat(m))), void 0 !== e.bidQueueSizeLimit && ("number" == typeof e.bidQueueSizeLimit && 0 < e.bidQueueSizeLimit ? S = e.bidQueueSizeLimit : s.logWarn("Detected invalid value for adpod.bidQueueSizeLimit in setConfig; must be a positive number.  Using default: ".concat(S)))
        }
        c.config.getConfig("adpod", (function(e) {
            return w(e.adpod)
        }))
    },
    63: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = {
                puts: e.map(o)
            };
            Object(r.a)(i.config.getConfig("cache.url"), (function(n) {
                return {
                    success: function(e) {
                        var t;
                        try {
                            t = JSON.parse(e).responses
                        } catch (e) {
                            return void n(e, [])
                        }
                        t ? n(null, t) : n(new Error("The cache server didn't respond with a responses property."), [])
                    },
                    error: function(e, t) {
                        n(new Error("Error storing video ad in the cache: ".concat(e, ": ").concat(JSON.stringify(t))), [])
                    }
                }
            })(t), JSON.stringify(n), {
                contentType: "text/plain",
                withCredentials: !0
            })
        }, t.a = function(e) {
            return "".concat(i.config.getConfig("cache.url"), "?uuid=").concat(e)
        };
        var r = n(5),
            i = n(3);

        function o(e) {
            var t = {
                type: "xml",
                value: e.vastXml ? e.vastXml : (function(e, t) {
                    var n = t ? "<![CDATA[".concat(t, "]]>") : "";
                    return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(e, "]]></VASTAdTagURI>\n        <Impression>").concat(n, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")
                })(e.vastUrl, e.vastImpUrl),
                ttlseconds: Number(e.ttl)
            };
            return "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (t.key = e.customCacheKey), t
        }
    },
    64: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "checkAdUnitSetup", (function() {
            return G
        }));
        var r = n(65),
            c = n(0),
            i = n(131),
            o = n(24),
            a = n(47),
            d = n(3),
            v = n(37),
            f = n(66),
            u = n(17),
            s = n(132),
            l = n(8),
            g = n.n(l),
            p = n(60),
            y = n(12),
            b = n(22);

        function h(e) {
            return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function m() {
            return (m = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var S = Object(r.a)(),
            A = n(4),
            E = n(0),
            T = n(7).default,
            O = n(9),
            I = o.a.triggerUserSyncs,
            w = A.EVENTS,
            _ = w.ADD_AD_UNITS,
            C = w.BID_WON,
            j = w.REQUEST_BIDS,
            B = w.SET_TARGETING,
            U = w.AD_RENDER_FAILED,
            R = A.AD_RENDER_FAILED_REASON,
            D = R.PREVENT_WRITING_ON_MAIN_DOCUMENT,
            N = R.NO_AD,
            k = R.EXCEPTION,
            x = R.CANNOT_FIND_AD,
            P = R.MISSING_DOC_OR_ADID,
            M = {
                bidWon: function(e) {
                    var t = v.a.getBidsRequested().map((function(e) {
                        return e.bids.map((function(e) {
                            return e.adUnitCode
                        }))
                    })).reduce(c.flatten).filter(c.uniques);
                    return !!E.contains(t, e) || void E.logError('The "' + e + '" placement is not defined.')
                }
            };

        function q(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n)
        }
        Object(s.a)(), S.bidderSettings = S.bidderSettings || {}, S.libLoaded = !0, S.version = "v2.10.0", E.logInfo("Prebid.js v2.10.0 loaded"), S.adUnits = S.adUnits || [], S.triggerUserSyncs = I;
        var G = Object(u.b)("sync", (function(e) {
            return e.forEach((function(e) {
                var t = e.mediaTypes,
                    n = E.getAdUnitSizes(e);
                if (t && t.banner) {
                    var r = t.banner;
                    r.sizes ? (r.sizes = n, e.sizes = n) : (E.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."), delete e.mediaTypes.banner)
                } else e.sizes && (E.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."), e.sizes = n);
                if (t && t.video) {
                    var i = t.video;
                    if (i.playerSize)
                        if (Array.isArray(i.playerSize) && 1 === i.playerSize.length && i.playerSize.every((function(e) {
                                return Object(c.isArrayOfNums)(e, 2)
                            }))) e.sizes = i.playerSize;
                        else if (Object(c.isArrayOfNums)(i.playerSize, 2)) {
                        var o = [];
                        o.push(i.playerSize), E.logInfo("Transforming video.playerSize from [".concat(i.playerSize, "] to [[").concat(o, "]] so it's in the proper format.")), e.sizes = i.playerSize = o
                    } else E.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete e.mediaTypes.video.playerSize
                }
                if (t && t.native) {
                    var a = t.native;
                    a.image && a.image.sizes && !Array.isArray(a.image.sizes) && (E.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete e.mediaTypes.native.image.sizes), a.image && a.image.aspect_ratios && !Array.isArray(a.image.aspect_ratios) && (E.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete e.mediaTypes.native.image.aspect_ratios), a.icon && a.icon.sizes && !Array.isArray(a.icon.sizes) && (E.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete e.mediaTypes.native.icon.sizes)
                }
            })), e
        }), "checkAdUnitSetup");

        function W(e) {
            var n = v.a[e]().filter(E.bind.call(c.adUnitsFilter, this, v.a.getAdUnitCodes())),
                r = v.a.getLastAuctionId();
            return n.map((function(e) {
                return e.adUnitCode
            })).filter(c.uniques).map((function(t) {
                return n.filter((function(e) {
                    return e.auctionId === r && e.adUnitCode === t
                }))
            })).filter((function(e) {
                return e && e[0] && e[0].adUnitCode
            })).map((function(e) {
                return (function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                })({}, e[0].adUnitCode, {
                    bids: e
                })
            })).reduce((function(e, t) {
                return m(e, t)
            }), {})
        }

        function L(e, t, n) {
            var r = {};
            r.reason = e, r.message = t, n && (r.bid = n), E.logError(t), O.emit(U, r)
        }

        function z(e) {
            e.forEach((function(e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0
                } catch (e) {
                    E.logError("Error processing command :", "prebid.js", e)
                }
            }))
        }
        S.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (E.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                var t = S.getAdserverTargetingForAdUnitCode(e);
                return E.transformAdServerTargetingObj(t)
            }
            E.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }, S.getAdserverTargetingForAdUnitCode = function(e) {
            return S.getAdserverTargeting(e)[e]
        }, S.getAdserverTargeting = function(e) {
            return E.logInfo("Invoking pbjs.getAdserverTargeting", arguments), f.b.getAllTargeting(e)
        }, S.getNoBids = function() {
            return E.logInfo("Invoking pbjs.getNoBids", arguments), W("getNoBids")
        }, S.getBidResponses = function() {
            return E.logInfo("Invoking pbjs.getBidResponses", arguments), W("getBidsReceived")
        }, S.getBidResponsesForAdUnitCode = function(t) {
            return {
                bids: v.a.getBidsReceived().filter((function(e) {
                    return e.adUnitCode === t
                }))
            }
        }, S.setTargetingForGPTAsync = function(e, t) {
            if (E.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(c.isGptPubadsDefined)()) {
                var n = f.b.getAllTargeting(e);
                f.b.resetPresetTargeting(e), f.b.setTargetingForGPT(n, t), Object.keys(n).forEach((function(t) {
                    Object.keys(n[t]).forEach((function(e) {
                        "hb_adid" === e && v.a.setStatusForBids(n[t][e], A.BID_STATUS.BID_TARGETING_SET)
                    }))
                })), O.emit(B, n)
            } else E.logError("window.googletag is not defined on the page")
        }, S.setTargetingForAst = function() {
            E.logInfo("Invoking pbjs.setTargetingForAn", arguments), f.b.isApntagDefined() ? (f.b.setTargetingForAst(), O.emit(B, f.b.getAllTargeting())) : E.logError("window.apntag is not defined on the page")
        }, S.renderAd = function(e, t) {
            if (E.logInfo("Invoking pbjs.renderAd", arguments), E.logMessage("Calling renderAd with adId :" + t), e && t) try {
                var n = v.a.findBidByAdId(t);
                if (n) {
                    n.status = A.BID_STATUS.RENDERED, n.ad = E.replaceAuctionPrice(n.ad, n.cpm), n.adUrl = E.replaceAuctionPrice(n.adUrl, n.cpm), v.a.addWinningBid(n), O.emit(C, n);
                    var r = n.height,
                        i = n.width,
                        o = n.ad,
                        a = n.mediaType,
                        c = n.adUrl,
                        u = n.renderer,
                        s = document.createComment("Creative ".concat(n.creativeId, " served by ").concat(n.bidder, " Prebid.js Header Bidding"));
                    if (E.insertElement(s, e, "body"), Object(y.c)(u)) Object(y.b)(u, n);
                    else if (e === document && !E.inIframe() || "video" === a) {
                        var d = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document.");
                        L(D, d, n)
                    } else if (o) e.open("text/html", "replace"), e.write(o), e.close(), q(e, i, r), E.callBurl(n);
                    else if (c) {
                        var f = E.createInvisibleIframe();
                        f.height = r, f.width = i, f.style.display = "inline", f.style.overflow = "hidden", f.src = c, E.insertElement(f, e, "body"), q(e, i, r), E.callBurl(n)
                    } else {
                        var l = "Error trying to write ad. No ad for bid response id: ".concat(t);
                        L(N, l, n)
                    }
                } else {
                    var g = "Error trying to write ad. Cannot find ad by given id : ".concat(t);
                    L(x, g)
                }
            } catch (e) {
                var p = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                L(k, p)
            } else {
                var b = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                L(P, b)
            }
        }, S.removeAdUnit = function(e) {
            (E.logInfo("Invoking pbjs.removeAdUnit", arguments), e) ? (E.isArray(e) ? e : [e]).forEach((function(e) {
                for (var t = 0; t < S.adUnits.length; t++) S.adUnits[t].code === e && S.adUnits.splice(t, 1)
            })): S.adUnits = []
        }, S.requestBids = Object(u.b)("async", (function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.bidsBackHandler,
                n = e.timeout,
                r = e.adUnits,
                i = e.adUnitCodes,
                o = e.labels,
                a = e.auctionId;
            O.emit(j);
            var c = n || d.config.getConfig("bidderTimeout");
            if (r = r || S.adUnits, E.logInfo("Invoking pbjs.requestBids", arguments), i && i.length ? r = r.filter((function(e) {
                    return g()(i, e.code)
                })) : i = r && r.map((function(e) {
                    return e.code
                })), (r = G(r)).forEach((function(i) {
                    var o = Object.keys(i.mediaTypes || {
                            banner: "banner"
                        }),
                        e = i.bids.map((function(e) {
                            return e.bidder
                        })),
                        a = T.bidderRegistry,
                        t = d.config.getConfig("s2sConfig"),
                        n = t && t.bidders,
                        r = n ? e.filter((function(e) {
                            return !g()(n, e)
                        })) : e;
                    i.transactionId = E.generateUUID(), r.forEach((function(t) {
                        var e = a[t],
                            n = e && e.getSpec && e.getSpec(),
                            r = n && n.supportedMediaTypes || ["banner"];
                        o.some((function(e) {
                            return g()(r, e)
                        })) || (E.logWarn(E.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter((function(e) {
                            return e.bidder !== t
                        })))
                    })), p.a.incrementCounter(i.code)
                })), r && 0 !== r.length) {
                var u = v.a.createAuction({
                        adUnits: r,
                        adUnitCodes: i,
                        callback: t,
                        cbTimeout: c,
                        labels: o,
                        auctionId: a
                    }),
                    s = r.length;
                return 15 < s && E.logInfo("Current auction ".concat(u.getAuctionId(), " contains ").concat(s, " adUnits."), r), i.forEach((function(e) {
                    return f.b.setLatestAuctionForAdUnit(e, u.getAuctionId())
                })), u.callBids(), u
            }
            if (E.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t()
            } catch (e) {
                E.logError("Error executing bidsBackHandler", null, e)
            }
        })), S.addAdUnits = function(e) {
            E.logInfo("Invoking pbjs.addAdUnits", arguments), E.isArray(e) ? S.adUnits.push.apply(S.adUnits, e) : "object" === h(e) && S.adUnits.push(e), O.emit(_)
        }, S.onEvent = function(e, t, n) {
            E.logInfo("Invoking pbjs.onEvent", arguments), E.isFn(t) ? !n || M[e].call(null, n) ? O.on(e, t, n) : E.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : E.logError('The event handler provided is not a function and was not set on event "' + e + '".')
        }, S.offEvent = function(e, t, n) {
            E.logInfo("Invoking pbjs.offEvent", arguments), n && !M[e].call(null, n) || O.off(e, t, n)
        }, S.registerBidAdapter = function(e, t) {
            E.logInfo("Invoking pbjs.registerBidAdapter", arguments);
            try {
                T.registerBidAdapter(e(), t)
            } catch (e) {
                E.logError("Error registering bidder adapter : " + e.message)
            }
        }, S.registerAnalyticsAdapter = function(e) {
            E.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                T.registerAnalyticsAdapter(e)
            } catch (e) {
                E.logError("Error registering analytics adapter : " + e.message)
            }
        }, S.createBid = function(e) {
            return E.logInfo("Invoking pbjs.createBid", arguments), Object(b.a)(e)
        }, S.loadScript = function(e, t, n) {
            E.logInfo("Invoking pbjs.loadScript", arguments), Object(a.b)(e, t, n)
        }, S.enableAnalytics = function(e) {
            e && !E.isEmpty(e) ? (E.logInfo("Invoking pbjs.enableAnalytics for: ", e), T.enableAnalytics(e)) : E.logError("pbjs.enableAnalytics should be called with option {}")
        }, S.aliasBidder = function(e, t) {
            E.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? T.aliasBidAdapter(e, t) : E.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
        }, S.getAllWinningBids = function() {
            return v.a.getAllWinningBids()
        }, S.getAllPrebidWinningBids = function() {
            return v.a.getBidsReceived().filter((function(e) {
                return e.status === A.BID_STATUS.BID_TARGETING_SET
            }))
        }, S.getHighestCpmBids = function(e) {
            var t = Object(f.a)(v.a.getBidsReceived(), c.getLatestHighestCpmBid);
            return f.b.getWinningBids(e, t)
        }, S.markWinningBidAsUsed = function(t) {
            var e = [];
            t.adUnitCode && t.adId ? e = v.a.getBidsReceived().filter((function(e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode
            })) : t.adUnitCode ? e = f.b.getWinningBids(t.adUnitCode) : t.adId ? e = v.a.getBidsReceived().filter((function(e) {
                return e.adId === t.adId
            })) : E.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 0 < e.length && (e[0].status = A.BID_STATUS.RENDERED)
        }, S.getConfig = d.config.getConfig, S.setConfig = d.config.setConfig, S.que.push((function() {
            return Object(i.a)()
        })), S.cmd.push = function(e) {
            if ("function" == typeof e) try {
                e.call()
            } catch (e) {
                E.logError("Error processing command :", e.message, e.stack)
            } else E.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
        }, S.que.push = S.cmd.push, S.processQueue = function() {
            u.b.ready(), z(S.que), z(S.cmd)
        }, t.default = S
    },
    65: function(e, t, n) {
        "use strict";
        t.a = function() {
            return window.pbjs
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || []
    },
    66: function(e, t, n) {
        "use strict";
        t.a = w, n.d(t, "b", (function() {
            return o
        }));
        var f = n(0),
            l = n(3),
            g = n(27),
            r = n(37),
            p = n(59),
            b = n(2),
            i = n(8),
            v = n.n(i);

        function y(e) {
            return (function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            })(e) || (function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            })(e) || (function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            })()
        }

        function h() {
            return (h = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function m(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var S = n(0),
            A = n(4),
            E = [],
            T = Object.keys(A.TARGETING_KEYS).map((function(e) {
                return A.TARGETING_KEYS[e]
            })),
            O = function(e) {
                return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(f.timestamp)()
            },
            I = function(e) {
                return e && (e.status && !v()([A.BID_STATUS.BID_TARGETING_SET, A.BID_STATUS.RENDERED], e.status) || !e.status)
            };

        function w(e, n) {
            var r = [],
                i = Object(f.groupBy)(e, "adUnitCode");
            return Object.keys(i).forEach((function(e) {
                var t = Object(f.groupBy)(i[e], "bidderCode");
                Object.keys(t).forEach((function(e) {
                    return r.push(t[e].reduce(n))
                }))
            })), r
        }
        var o = (function(n) {
            var i = {},
                r = {};

            function o(e) {
                return "string" == typeof e ? [e] : S.isArray(e) ? e : n.getAdUnitCodes() || []
            }

            function a() {
                var e = n.getBidsReceived();
                return l.config.getConfig("useBidCache") || (e = e.filter((function(e) {
                    return r[e.adUnitCode] === e.auctionId
                }))), w(e = e.filter((function(e) {
                    return Object(f.deepAccess)(e, "video.context") !== b.a
                })).filter((function(e) {
                    return "banner" !== e.mediaType || Object(p.c)([e.width, e.height])
                })).filter(I).filter(O), f.getOldestHighestCpmBid)
            }

            function c() {
                return n.getStandardBidderAdServerTargeting().map((function(e) {
                    return e.key
                })).concat(T).filter(f.uniques)
            }

            function u(t, n, e, r) {
                return Object.keys(n.adserverTargeting).filter(s()).forEach((function(e) {
                    t.length && t.filter(function(t) {
                        return function(e) {
                            return e.adUnitCode === n.adUnitCode && e.adserverTargeting[t]
                        }
                    }(e)).forEach(function(t) {
                        return function(e) {
                            S.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(n.adserverTargeting[t]).filter(f.uniques), delete n.adserverTargeting[t]
                        }
                    }(e))
                })), t.push(n), t
            }

            function s() {
                var t = c();
                return function(e) {
                    return -1 === t.indexOf(e)
                }
            }

            function d(t) {
                return m({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(s()).map((function(e) {
                    return m({}, e.substring(0, 20), [t.adserverTargeting[e]])
                })))
            }
            return i.setLatestAuctionForAdUnit = function(e, t) {
                r[e] = t
            }, i.resetPresetTargeting = function(e) {
                if (Object(f.isGptPubadsDefined)()) {
                    var t = o(e),
                        r = n.getAdUnits().filter((function(e) {
                            return v()(t, e.code)
                        }));
                    window.googletag.pubads().getSlots().forEach((function(n) {
                        E.forEach((function(t) {
                            r.forEach((function(e) {
                                e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId() || n.setTargeting(t, null)
                            }))
                        }))
                    }))
                }
            }, i.resetPresetTargetingAST = function(e) {
                o(e).forEach((function(e) {
                    var t = window.apntag.getTag(e);
                    if (t && t.keywords) {
                        var n = Object.keys(t.keywords),
                            r = {};
                        n.forEach((function(e) {
                            v()(E, e.toLowerCase()) || (r[e] = t.keywords[e])
                        })), window.apntag.modifyTag(e, {
                            keywords: r
                        })
                    }
                }))
            }, i.getAllTargeting = function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : a(),
                    n = o(e),
                    r = (function(e, t) {
                        var n = i.getWinningBids(e, t),
                            r = c();
                        return n = n.map((function(o) {
                            return m({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter((function(e) {
                                return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === r.indexOf(e)
                            })).reduce((function(e, t) {
                                var n = [o.adserverTargeting[t]],
                                    r = m({}, t.substring(0, 20), n);
                                if (t !== A.TARGETING_KEYS.DEAL) return [].concat(y(e), [r]);
                                var i = m({}, "".concat(t, "_").concat(o.bidderCode).substring(0, 20), n);
                                return [].concat(y(e), [r, i])
                            }), []))
                        }))
                    })(n, t).concat(function(t, e) {
                        return e.filter((function(e) {
                            return v()(t, e.adUnitCode)
                        })).map((function(e) {
                            return h({}, e)
                        })).reduce(u, []).map(d).filter((function(e) {
                            return e
                        }))
                    }(n, t)).concat(l.config.getConfig("enableSendAllBids") ? (function(e, t) {
                        var n = T.concat(g.a);
                        return w(t, f.getHighestCpm).map((function(t) {
                            if (t.adserverTargeting && e && (S.isArray(e) && v()(e, t.adUnitCode) || "string" == typeof e && t.adUnitCode === e)) return m({}, t.adUnitCode, (function(t, e) {
                                return e.map((function(e) {
                                    return m({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]])
                                }))
                            })(t, n.filter((function(e) {
                                return void 0 !== t.adserverTargeting[e]
                            }))))
                        })).filter((function(e) {
                            return e
                        }))
                    })(n, t) : []);
                return r.map((function(t) {
                    Object.keys(t).map((function(e) {
                        t[e].map((function(e) {
                            -1 === E.indexOf(Object.keys(e)[0]) && (E = Object.keys(e).concat(E))
                        }))
                    }))
                })), r = (function(e) {
                    return e.map((function(e) {
                        return m({}, Object.keys(e)[0], e[Object.keys(e)[0]].map((function(e) {
                            return m({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                        })).reduce((function(e, t) {
                            return h(t, e)
                        }), {}))
                    })).reduce((function(e, t) {
                        var n = Object.keys(t)[0];
                        return e[n] = h({}, e[n], t[n]), e
                    }), {})
                })(r), n.forEach((function(e) {
                    r[e] || (r[e] = {})
                })), r
            }, i.setTargetingForGPT = function(i, e) {
                window.googletag.pubads().getSlots().forEach((function(r) {
                    Object.keys(i).filter(e ? e(r) : Object(f.isAdUnitCodeMatchingSlot)(r)).forEach((function(n) {
                        return Object.keys(i[n]).forEach((function(t) {
                            var e = i[n][t].split(",");
                            (e = 1 < e.length ? [e] : e).map((function(e) {
                                return S.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), e
                            })).forEach((function(e) {
                                r.setTargeting(t, e)
                            }))
                        }))
                    }))
                }))
            }, i.getWinningBids = function(e) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : a(),
                    t = o(e);
                return n.filter((function(e) {
                    return v()(t, e.adUnitCode)
                })).filter((function(e) {
                    return 0 < e.cpm
                })).map((function(e) {
                    return e.adUnitCode
                })).filter(f.uniques).map((function(t) {
                    return n.filter((function(e) {
                        return e.adUnitCode === t ? e : null
                    })).reduce(f.getHighestCpm)
                }))
            }, i.setTargetingForAst = function() {
                var r = i.getAllTargeting();
                try {
                    i.resetPresetTargetingAST()
                } catch (e) {
                    S.logError("unable to reset targeting for AST" + e)
                }
                Object.keys(r).forEach((function(n) {
                    return Object.keys(r[n]).forEach((function(e) {
                        if (S.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])), S.isStr(r[n][e]) || S.isArray(r[n][e])) {
                            var t = {};
                            e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t, {
                                overrideKeyValue: !0
                            })
                        }
                    }))
                }))
            }, i.isApntagDefined = function() {
                if (window.apntag && S.isFn(window.apntag.setKeywords)) return !0
            }, i
        })(r.a)
    },
    67: function(e, t, n) {
        "use strict";
        var r = n(135)(!0);
        n(48)(String, "String", (function(e) {
            this._t = String(e), this._i = 0
        }), (function() {
            var e, t = this._t,
                n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n), this._i += e.length, {
                value: e,
                done: !1
            })
        }))
    },
    68: function(e, t, r) {
        var i = r(25),
            o = r(138),
            a = r(69),
            c = r(49)("IE_PROTO"),
            u = function() {},
            s = "prototype",
            d = function() {
                var e, t = r(53)("iframe"),
                    n = a.length;
                for (t.style.display = "none", r(141).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), d = e.F; n--;) delete d[s][a[n]];
                return d()
            };
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (u[s] = i(e), n = new u, u[s] = null, n[c] = e) : n = d(), void 0 === t ? n : o(n, t)
        }
    },
    69: function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    7: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "gdprDataHandler", (function() {
            return U
        })), t.setS2STestingModule = function(e) {
            O = e
        };
        var h = n(0),
            g = n(59),
            p = n(27),
            u = n(1),
            m = n(5),
            b = n(3),
            r = n(8),
            S = n.n(r),
            i = n(10),
            v = n.n(i),
            y = n(60),
            A = n(61);

        function E(e, t) {
            return (function(e) {
                if (Array.isArray(e)) return e
            })(e) || (function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            })(e, t) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }

        function T() {
            return (T = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var O, I = n(0),
            w = n(4),
            _ = n(9),
            s = {},
            C = s.bidderRegistry = {},
            d = s.aliasRegistry = {},
            j = {};
        b.config.getConfig("s2sConfig", (function(e) {
            j = e.s2sConfig
        }));
        var o = {};

        function B(e) {
            var i = e.bidderCode,
                s = e.auctionId,
                d = e.bidderRequestId,
                t = e.adUnits,
                f = e.labels,
                l = e.src;
            return t.reduce((function(e, c) {
                var t = Object(g.b)(Object(g.a)(c, f), c.mediaTypes, c.sizes),
                    n = t.active,
                    u = t.mediaTypes,
                    r = t.filterResults;
                return n ? r && I.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : I.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), n && e.push(c.bids.filter((function(e) {
                    return e.bidder === i
                })).reduce((function(e, t) {
                    var n = c.nativeParams || I.deepAccess(c, "mediaTypes.native");
                    n && (t = T({}, t, {
                        nativeParams: Object(p.g)(n)
                    })), t = T({}, t, Object(h.getDefinedParams)(c, ["mediaType", "renderer"]));
                    var r = Object(g.b)(Object(g.a)(t, f), u),
                        i = r.active,
                        o = r.mediaTypes,
                        a = r.filterResults;
                    return i ? a && I.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after) : I.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), I.isValidMediaTypes(o) ? t = T({}, t, {
                        mediaTypes: o
                    }) : I.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)), i && e.push(T({}, t, {
                        adUnitCode: c.code,
                        transactionId: c.transactionId,
                        sizes: I.deepAccess(o, "banner.sizes") || I.deepAccess(o, "video.playerSize") || [],
                        bidId: t.bid_id || I.getUniqueIdentifierStr(),
                        bidderRequestId: d,
                        auctionId: s,
                        src: l,
                        bidRequestsCount: y.a.getCounter(c.code)
                    })), e
                }), [])), e
            }), []).reduce(h.flatten, []).filter((function(e) {
                return "" !== e
            }))
        }
        var U = {
            consentData: null,
            setConsentData: function(e) {
                U.consentData = e
            },
            getConsentData: function() {
                return U.consentData
            }
        };

        function R() {
            return j && j.enabled && j.testing && O
        }

        function a(t, n, e) {
            try {
                var r = C[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (I.logInfo("Invoking ".concat(t, ".").concat(n)), r[n](e))
            } catch (e) {
                I.logWarn("Error calling ".concat(n, " of ").concat(t))
            }
        }
        s.makeBidRequests = function(e, i, o, a, c) {
            var u = [],
                t = Object(h.getBidderCodes)(e);
            b.config.getConfig("bidderSequence") === b.RANDOM && (t = Object(h.shuffle)(t));
            var s = Object(A.b)(),
                n = t,
                r = [];
            if (j.enabled) {
                R() && (r = O.getSourceBidderMap(e)[O.CLIENT]);
                var d = j.bidders;
                n = t.filter((function(e) {
                    return !S()(d, e) || S()(r, e)
                }));
                var f = (function(e) {
                        var t = j.bidders,
                            n = I.deepClone(e);
                        return n.forEach((function(e) {
                            e.bids = e.bids.filter((function(e) {
                                return S()(t, e.bidder) && (!R() || e.finalSource !== O.CLIENT)
                            })).map((function(e) {
                                return e.bid_id = I.getUniqueIdentifierStr(), e
                            }))
                        })), n = n.filter((function(e) {
                            return 0 !== e.bids.length
                        }))
                    })(e),
                    l = I.generateUUID();
                d.forEach((function(e) {
                    var t = I.getUniqueIdentifierStr(),
                        n = {
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            tid: l,
                            bids: B({
                                bidderCode: e,
                                auctionId: o,
                                bidderRequestId: t,
                                adUnits: I.deepClone(f),
                                labels: c,
                                src: w.S2S.SRC
                            }),
                            auctionStart: i,
                            timeout: j.timeout,
                            src: w.S2S.SRC,
                            refererInfo: s
                        };
                    0 !== n.bids.length && u.push(n)
                })), f.forEach((function(e) {
                    var t = e.bids.filter((function(t) {
                        return v()(u, (function(e) {
                            return v()(e.bids, (function(e) {
                                return e.bidId === t.bid_id
                            }))
                        }))
                    }));
                    e.bids = t
                })), u.forEach((function(e) {
                    e.adUnitsS2SCopy = f.filter((function(e) {
                        return 0 < e.bids.length
                    }))
                }))
            }
            var g = (function(e) {
                var t = I.deepClone(e);
                return t.forEach((function(e) {
                    e.bids = e.bids.filter((function(e) {
                        return !R() || e.finalSource !== O.SERVER
                    }))
                })), t = t.filter((function(e) {
                    return 0 !== e.bids.length
                }))
            })(e);
            return n.forEach((function(e) {
                var t = I.getUniqueIdentifierStr(),
                    n = {
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        bids: B({
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            adUnits: I.deepClone(g),
                            labels: c,
                            src: "client"
                        }),
                        auctionStart: i,
                        timeout: a,
                        refererInfo: s
                    },
                    r = C[e];
                r || I.logError("Trying to make a request for bidder that does not exist: ".concat(e)), r && n.bids && 0 !== n.bids.length && u.push(n)
            })), U.getConsentData() && u.forEach((function(e) {
                e.gdprConsent = U.getConsentData()
            })), u
        }, s.callBids = function(e, t, r, i, o, a, c) {
            if (t.length) {
                var n = E(t.reduce((function(e, t) {
                        return e[Number(void 0 !== t.src && t.src === w.S2S.SRC)].push(t), e
                    }), [
                        [],
                        []
                    ]), 2),
                    u = n[0],
                    s = n[1];
                if (s.length) {
                    var d = Object(m.b)(a, o ? {
                            request: o.request.bind(null, "s2s"),
                            done: o.done
                        } : void 0),
                        f = j.bidders,
                        l = C[j.adapter],
                        g = s[0].tid,
                        p = s[0].adUnitsS2SCopy;
                    if (l) {
                        var b = {
                            tid: g,
                            ad_units: p
                        };
                        if (b.ad_units.length) {
                            var v = s.map((function(e) {
                                    return e.start = Object(h.timestamp)(), i.bind(e)
                                })),
                                y = b.ad_units.reduce((function(e, t) {
                                    return e.concat((t.bids || []).reduce((function(e, t) {
                                        return e.concat(t.bidder)
                                    }), []))
                                }), []);
                            I.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(f.filter((function(e) {
                                return S()(y, e)
                            })).join(","))), s.forEach((function(e) {
                                _.emit(w.EVENTS.BID_REQUESTED, e)
                            })), l.callBids(b, s, (function(e, t) {
                                var n = Object(h.getBidderRequest)(s, t.bidderCode, e);
                                n && r.call(n, e, t)
                            }), (function() {
                                return v.forEach((function(e) {
                                    return e()
                                }))
                            }), d)
                        }
                    }
                }
                u.forEach((function(e) {
                    e.start = Object(h.timestamp)();
                    var t = C[e.bidderCode];
                    I.logMessage("CALLING BIDDER ======= ".concat(e.bidderCode)), _.emit(w.EVENTS.BID_REQUESTED, e);
                    var n = Object(m.b)(a, o ? {
                        request: o.request.bind(null, e.bidderCode),
                        done: o.done
                    } : void 0);
                    t.callBids(e, r.bind(e), i.bind(e), n, c)
                }))
            } else I.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
        }, s.videoAdapters = [], s.registerBidAdapter = function(e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                r = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (C[t] = e, S()(r, "video") && s.videoAdapters.push(t), S()(r, "native") && p.e.push(t)) : I.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : I.logError("bidAdaptor or bidderCode not specified")
        }, s.aliasBidAdapter = function(t, e) {
            if (void 0 === C[e]) {
                var n = C[t];
                if (void 0 === n) {
                    var r = b.config.getConfig("s2sConfig"),
                        i = r && r.bidders;
                    i && S()(i, e) ? d[e] = t : I.logError('bidderCode "' + t + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                } else try {
                    var o, a = (function(e) {
                        var t = [];
                        return S()(s.videoAdapters, e) && t.push("video"), S()(p.e, e) && t.push("native"), t
                    })(t);
                    if (n.constructor.prototype != Object.prototype)(o = new n.constructor).setBidderCode(e);
                    else {
                        var c = n.getSpec();
                        o = Object(u.newBidder)(T({}, c, {
                            code: e
                        })), d[e] = t
                    }
                    s.registerBidAdapter(o, e, {
                        supportedMediaTypes: a
                    })
                } catch (e) {
                    I.logError(t + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                }
            } else I.logMessage('alias name "' + e + '" has been already specified.')
        }, s.registerAnalyticsAdapter = function(e) {
            var t = e.adapter,
                n = e.code;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, o[n] = t) : I.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : I.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
        }, s.enableAnalytics = function(e) {
            I.isArray(e) || (e = [e]), I._each(e, (function(e) {
                var t = o[e.provider];
                t ? t.enableAnalytics(e) : I.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."))
            }))
        }, s.getBidAdapter = function(e) {
            return C[e]
        }, s.callTimedOutBidders = function(t, n, r) {
            n = n.map((function(e) {
                return e.params = I.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, e
            })), n = I.groupBy(n, "bidder"), Object.keys(n).forEach((function(e) {
                a(e, "onTimeout", n[e])
            }))
        }, s.callBidWonBidder = function(e, t, n) {
            t.params = I.getUserConfiguredParams(n, t.adUnitCode, t.bidder), a(e, "onBidWon", t)
        }, s.callSetTargetingBidder = function(e, t) {
            a(e, "onSetTargeting", t)
        }, t.default = s
    },
    70: function(e, t) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    },
    71: function(e, t, n) {
        var i = n(20);
        e.exports = function(e, t, n) {
            for (var r in t) n && e[r] ? e[r] = t[r] : i(e, r, t[r]);
            return e
        }
    },
    72: function(e, t) {
        e.exports = function(e, t, n, r) {
            if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
            return e
        }
    },
    73: function(e, t, n) {
        var o = n(25);
        e.exports = function(t, e, n, r) {
            try {
                return r ? e(o(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && o(i.call(t)), e
            }
        }
    },
    74: function(e, t, n) {
        var r = n(28),
            i = n(15)("iterator"),
            o = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (r.Array === e || o[i] === e)
        }
    },
    75: function(e, t, n) {
        var r = n(76),
            i = n(15)("iterator"),
            o = n(28);
        e.exports = n(14).getIteratorMethod = function(e) {
            if (null != e) return e[i] || e["@@iterator"] || o[r(e)]
        }
    },
    76: function(e, t, n) {
        var i = n(31),
            o = n(15)("toStringTag"),
            a = "Arguments" == i(function() {
                return arguments
            }());
        e.exports = function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = (function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            })(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
        }
    },
    77: function(e, t, n) {
        var r = n(43)("meta"),
            i = n(16),
            o = n(26),
            a = n(19).f,
            c = 0,
            u = Object.isExtensible || function() {
                return !0
            },
            s = !n(30)((function() {
                return u(Object.preventExtensions({}))
            })),
            d = function(e) {
                a(e, r, {
                    value: {
                        i: "O" + ++c,
                        w: {}
                    }
                })
            },
            f = e.exports = {
                KEY: r,
                NEED: !1,
                fastKey: function(e, t) {
                    if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!o(e, r)) {
                        if (!u(e)) return "F";
                        if (!t) return "E";
                        d(e)
                    }
                    return e[r].i
                },
                getWeak: function(e, t) {
                    if (!o(e, r)) {
                        if (!u(e)) return !0;
                        if (!t) return !1;
                        d(e)
                    }
                    return e[r].w
                },
                onFreeze: function(e) {
                    return s && f.NEED && u(e) && !o(e, r) && d(e), e
                }
            }
    },
    78: function(e, t, n) {
        var r = n(16);
        e.exports = function(e, t) {
            if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
            return e
        }
    },
    79: function(e, t, n) {
        "use strict";
        t.a = function(t, n) {
            o.adServers = o.adServers || {}, o.adServers[t] = o.adServers[t] || {}, Object.keys(n).forEach((function(e) {
                o.adServers[t][e] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : o.adServers[t][e] = n[e]
            }))
        };
        var r = n(65),
            i = n(0),
            o = Object(r.a)()
    },
    8: function(e, t, n) {
        n(87), e.exports = n(14).Array.includes
    },
    82: function(e, t, n) {
        "use strict";
        var r = n(13),
            i = n(40)(5),
            o = "find",
            a = !0;
        o in [] && Array(1)[o]((function() {
            a = !1
        })), r(r.P + r.F * a, "Array", {
            find: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n(34)(o)
    },
    83: function(e, t, n) {
        e.exports = !n(21) && !n(30)((function() {
            return 7 != Object.defineProperty(n(53)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    84: function(e, t, n) {
        var i = n(16);
        e.exports = function(e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    85: function(e, t, n) {
        var r = n(86);
        e.exports = function(e, t) {
            return new(r(e))(t)
        }
    },
    86: function(e, t, n) {
        var r = n(16),
            i = n(55),
            o = n(15)("species");
        e.exports = function(e) {
            var t;
            return i(e) && ("function" != typeof(t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
        }
    },
    87: function(e, t, n) {
        "use strict";
        var r = n(13),
            i = n(58)(!0);
        r(r.P, "Array", {
            includes: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n(34)("includes")
    },
    88: function(e, t, n) {
        var r = n(42),
            i = Math.max,
            o = Math.min;
        e.exports = function(e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
        }
    },
    89: function(e, t) {
        y.SYNC = 1, y.ASYNC = 2, y.QUEUE = 4;
        var g = "fun-hooks",
            n = "function" == typeof Proxy,
            r = Object.freeze({
                useProxy: n,
                ready: 0
            }),
            i = Object.getPrototypeOf({}),
            c = "2,1,0" === [1].reduce((function(e, t, n) {
                return [e, t, n]
            }), 2).toString() ? Array.prototype.reduce : function(e, t) {
                var n, r = Object(this),
                    i = r.length >>> 0,
                    o = 0;
                if (t) n = t;
                else {
                    for (; o < i && !(o in r);) o++;
                    n = r[o++]
                }
                for (; o < i;) o in r && (n = e(n, r[o], o, r)), o++;
                return n
            },
            p = 4 === function(e, t) {
                return t
            }.bind(null, 1, 4)() ? Function.prototype.bind : function(e) {
                var t = this,
                    n = v(arguments, 1);
                return function() {
                    return t.apply(e, n.concat(v(arguments)))
                }
            };

        function b(e) {
            return c.call(v(arguments, 1), (function(t, n) {
                return n && Object.keys(n).forEach((function(e) {
                    t[e] = n[e]
                })), t
            }), e)
        }

        function v(e, t) {
            return Array.prototype.slice.call(e, t)
        }

        function y(o) {
            var s, e = {},
                d = [];

            function t(e, t) {
                return "function" == typeof e ? u.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? u.apply(null, arguments) : "object" == typeof e ? function(o, e, a) {
                    var t = !0;
                    void 0 === e && (e = Object.getOwnPropertyNames(o), t = !1);
                    var c = {},
                        n = ["constructor"];
                    for (;
                        (e = e.filter((function(e) {
                            return !("function" != typeof o[e] || -1 !== n.indexOf(e) || e.match(/^_/))
                        }))).forEach((function(e) {
                            var t = e.split(":"),
                                n = t[0],
                                r = t[1] || "sync";
                            if (!c[n]) {
                                var i = o[n];
                                c[n] = o[n] = u(r, i, a ? [a, n] : void 0)
                            }
                        })), o = Object.getPrototypeOf(o), t && o !== i;);
                    return c
                }.apply(null, arguments) : void 0
            }

            function f(o) {
                var a = Array.isArray(o) ? o : o.split(".");
                return c.call(a, (function(t, n, e) {
                    var r = t[n],
                        i = !1;
                    return r || (e === a.length - 1 ? (s || d.push((function() {
                        i || console.warn(g + ": referenced '" + o + "' but it was never created")
                    })), t[n] = l((function(e) {
                        t[n] = e, i = !0
                    }))) : t[n] = {})
                }), e)
            }

            function l(r) {
                var o = [],
                    a = [],
                    c = function() {};
                return {
                    __funHook: {
                        install: function(e, t, n) {
                            this.type = e, this.fn = t, (c = n)(o, a), r && r(t)
                        }
                    },
                    before: function(e, t) {
                        return n.call(this, o, "before", e, t)
                    },
                    after: function(e, t) {
                        return n.call(this, a, "after", e, t)
                    },
                    getHooks: function(n) {
                        var e = o.concat(a);
                        return "object" == typeof n && (e = e.filter((function(t) {
                            return Object.keys(n).every((function(e) {
                                return t[e] === n[e]
                            }))
                        }))), b(e, {
                            remove: function() {
                                return e.forEach((function(e) {
                                    e.remove()
                                })), this
                            }
                        })
                    },
                    removeAll: function() {
                        return this.getHooks().remove()
                    }
                };

                function n(t, e, n, r) {
                    var i = {
                        hook: n,
                        type: e,
                        priority: r || 10,
                        remove: function() {
                            var e = t.indexOf(i); - 1 !== e && (t.splice(e, 1), c(o, a))
                        }
                    };
                    return t.push(i), t.sort((function(e, t) {
                        return t.priority - e.priority
                    })), c(o, a), this
                }
            }

            function u(a, e, t) {
                if (e.__funHook) {
                    if (e.__funHook.type !== a) throw g + ": recreated hookable with different type";
                    return e.__funHook.fn
                }
                var c, n, r = t ? f(t) : l(),
                    i = {
                        get: function(e, t) {
                            return r[t] || Reflect.get.apply(Reflect, arguments)
                        }
                    };
                return s || d.push(u), o.useProxy ? n = new Proxy(e, i) : b(n = function() {
                    return i.apply ? i.apply(e, this, v(arguments)) : e.apply(this, arguments)
                }, r), r.__funHook.install(a, n, (function(e, t) {
                    if (e.length || t.length) {
                        var n;
                        if ("sync" === a) {
                            var r, i = "r=t.apply(h," + (e.length ? "arguments" : "g") + ")";
                            t.length && (r = o(t, "a", "n(function extract(s){r=s},e)")), e.length && (i = o(e, "b", "n(function extract(){" + i + ";" + r + "},e)"), r = ""), n = ["var r,e={bail:function(a){r=a}}", i, r, "return r"].join(";")
                        } else "async" === a && (n = "t.apply(h," + (e.length ? "Array.prototype.slice.call(arguments)" : "g") + ".concat(" + o(t, "a", "z?n(z,e):[]") + "))", e.length && (n = "n(function partial(){" + n + "},e)"), n = ["var z", 'typeof g[g.length-1]==="function"&&(z=i.call(g.pop(),null))', "var e={bail:z}", o(e, "b", n)].join(";"));
                        c = p.call(new Function("i,b,a,n,t,h,g", n), null, p, e, t, Object.assign || b)
                    } else c = void 0;

                    function o(e, t, n) {
                        for (var r = e.length; 0 < r--;) 0 !== r || "async" === a && "a" === t ? (n = "i.call(" + t + "[" + r + "].hook, h," + n + ")", "async" === a && "a" === t && 0 === r || (n = "n(" + n + ",e)")) : n = t + "[" + r + "].hook.apply(h,[" + n + ("b" === t ? "].concat(g))" : ",r])");
                        return n
                    }
                    u()
                })), n;

                function u() {
                    !s && ("sync" !== a || o.ready & y.SYNC) && ("async" !== a || o.ready & y.ASYNC) ? "sync" !== a && o.ready & y.QUEUE ? i.apply = function() {
                        var e = arguments;
                        d.push((function() {
                            n.apply(e[1], e[2])
                        }))
                    } : i.apply = function() {
                        throw g + ": hooked function not ready"
                    } : i.apply = c
                }
            }
            return (o = b({}, r, o)).ready ? t.ready = function() {
                s = !0, (function(e) {
                    for (var t; t = e.shift();) t()
                })(d)
            } : s = !0, t.get = f, t
        }
        e.exports = y
    },
    9: function(e, t, n) {
        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var c, i, u = n(0),
            o = n(4),
            a = Array.prototype.slice,
            s = Array.prototype.push,
            d = u._map(o.EVENTS, (function(e) {
                return e
            })),
            f = o.EVENT_ID_PATHS,
            l = [];
        e.exports = (c = {}, (i = {}).on = function(e, t, n) {
            if (function(e) {
                    return u.contains(d, e)
                }(e)) {
                var r = c[e] || {
                    que: []
                };
                n ? (r[n] = r[n] || {
                    que: []
                }, r[n].que.push(t)) : r.que.push(t), c[e] = r
            } else u.logError("Wrong event name : " + e + " Valid event names :" + d)
        }, i.emit = function(e) {
            !(function(e, t) {
                u.logMessage("Emitting event for: " + e);
                var n = t[0] || {},
                    r = n[f[e]],
                    i = c[e] || {
                        que: []
                    },
                    o = u._map(i, (function(e, t) {
                        return t
                    })),
                    a = [];
                l.push({
                    eventType: e,
                    args: n,
                    id: r
                }), r && u.contains(o, r) && s.apply(a, i[r].que), s.apply(a, i.que), u._each(a, (function(e) {
                    if (e) try {
                        e.apply(null, t)
                    } catch (e) {
                        u.logError("Error executing handler:", "events.js", e)
                    }
                }))
            })(e, a.call(arguments, 1))
        }, i.off = function(e, n, r) {
            var i = c[e];
            u.isEmpty(i) || u.isEmpty(i.que) && u.isEmpty(i[r]) || r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que)) || (r ? u._each(i[r].que, (function(e) {
                var t = i[r].que;
                e === n && t.splice(u.indexOf.call(t, e), 1)
            })) : u._each(i.que, (function(e) {
                var t = i.que;
                e === n && t.splice(u.indexOf.call(t, e), 1)
            })), c[e] = i)
        }, i.get = function() {
            return c
        }, i.getEvents = function() {
            var n = [];
            return u._each(l, (function(e) {
                var t = r({}, e);
                n.push(t)
            })), n
        }, i)
    },
    90: function(e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i
            }
            return n
        }
    }
});
pbjsChunk([223], {
    80: function(t, e, n) {
        t.exports = n(81)
    },
    81: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n.d(e, "spec", (function() {
            return m
        }));
        var s = n(0);

        function c() {
            return (c = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }).apply(this, arguments)
        }
        var i = n(1).registerBidder,
            p = n(3).config,
            r = "33across",
            h = "https://ssc.33across.com/api/v1/hb",
            o = "https://de.tynt.com/deb/v2?m=xch&rt=html",
            d = {},
            l = "nm";

        function f(t) {
            return !(function() {
                try {
                    return s.getWindowSelf() !== s.getWindowTop()
                } catch (t) {
                    return !0
                }
            })() && null !== t
        }

        function g(t, e) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                i = n.w,
                r = n.h;
            return "visible" === s.getWindowTop().document.visibilityState ? (function(t, e) {
                var n, i, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    o = r.w,
                    d = r.h,
                    u = (function(t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.w,
                            i = e.h,
                            r = t.getBoundingClientRect(),
                            o = r.width,
                            d = r.height,
                            u = r.left,
                            a = r.top,
                            s = r.right,
                            c = r.bottom;
                        (0 === o || 0 === d) && n && i && (s = u + (o = n), c = a + (d = i));
                        return {
                            width: o,
                            height: d,
                            left: u,
                            top: a,
                            right: s,
                            bottom: c
                        }
                    })(t, {
                        w: o,
                        h: d
                    }),
                    a = (function(t) {
                        for (var e = {
                                left: t[0].left,
                                right: t[0].right,
                                top: t[0].top,
                                bottom: t[0].bottom
                            }, n = 1; n < t.length; ++n) {
                            if (e.left = Math.max(e.left, t[n].left), e.right = Math.min(e.right, t[n].right), e.left >= e.right) return null;
                            if (e.top = Math.max(e.top, t[n].top), e.bottom = Math.min(e.bottom, t[n].bottom), e.top >= e.bottom) return null
                        }
                        return e.width = e.right - e.left, e.height = e.bottom - e.top, e
                    })([{
                        left: 0,
                        top: 0,
                        right: e.innerWidth,
                        bottom: e.innerHeight
                    }, u]);
                return null === a ? 0 : (n = a.width * a.height, i = u.width * u.height, n / i * 100)
            })(t, e, {
                w: i,
                h: r
            }) : 0
        }

        function u(t, e) {
            var n = {},
                i = t.params,
                r = document.getElementById(t.adUnitCode),
                o = (function(t) {
                    return !s.isArray(t) || 2 !== t.length || s.isArray(t[0]) ? t.map(b) : [b(t)]
                })(t.sizes),
                d = (function(t) {
                    return t.reduce((function(t, e) {
                        return e.h * e.w < t.h * t.w ? e : t
                    }))
                })(o),
                u = (function(o) {
                    return function(t) {
                        var e = c({}, t),
                            n = e.imp = e.imp.map((function(t) {
                                return c({}, t)
                            })),
                            i = n[0].banner = c({}, n[0].banner),
                            r = i.ext = c({}, i.ext);
                        return (r.ttx = c({}, r.ttx)).viewability = {
                            amount: isNaN(o) ? o : Math.round(o)
                        }, e
                    }
                })(f(r) ? g(r, s.getWindowTop(), d) : l);
            null === r && s.logWarn("Unable to locate element with id: '".concat(t.adUnitCode, "'")), n.imp = [], n.imp[0] = {
                banner: {
                    format: o.map((function(t) {
                        return c(t, {
                            ext: {}
                        })
                    }))
                },
                ext: {
                    ttx: {
                        prod: i.productId
                    }
                }
            }, n.site = {
                id: i.siteId
            }, n.id = t.bidId, n.user = {
                ext: {
                    consent: e.consentString
                }
            }, n.regs = {
                ext: {
                    gdpr: !0 === e.gdprApplies ? 1 : 0
                }
            }, n.ext = {
                ttx: {
                    caller: [{
                        name: "prebidjs",
                        version: "2.10.0"
                    }]
                }
            }, 1 === i.test && (n.test = 1);
            var a = p.getConfig("ttxSettings");
            return {
                method: "POST",
                url: a && a.url || h,
                data: JSON.stringify(u(n)),
                options: {
                    contentType: "text/plain",
                    withCredentials: !0
                }
            }
        }

        function a(t) {
            var e = p.getConfig("ttxSettings"),
                n = e && e.syncUrl || o;
            return {
                type: "iframe",
                url: "".concat(n, "&id=").concat(t)
            }
        }

        function b(t) {
            return {
                w: parseInt(t[0], 10),
                h: parseInt(t[1], 10)
            }
        }
        var m = {
            NON_MEASURABLE: l,
            code: r,
            isBidRequestValid: function(t) {
                return t.bidder === r && void 0 !== t.params && void 0 !== t.params.siteId && void 0 !== t.params.productId
            },
            buildRequests: function(t, e) {
                var n = c({
                    consentString: void 0,
                    gdprApplies: !1
                }, e && e.gdprConsent);
                return d.uniqueSiteIds = t.map((function(t) {
                    return t.params.siteId
                })).filter(s.uniques), t.map((function(t) {
                    return u(t, n)
                }))
            },
            interpretResponse: function(t, e) {
                var n = [];
                return 0 < t.body.seatbid.length && 0 < t.body.seatbid[0].bid.length && n.push(function(t) {
                    return {
                        requestId: t.id,
                        bidderCode: r,
                        cpm: t.seatbid[0].bid[0].price,
                        width: t.seatbid[0].bid[0].w,
                        height: t.seatbid[0].bid[0].h,
                        ad: t.seatbid[0].bid[0].adm,
                        ttl: t.seatbid[0].bid[0].ttl || 60,
                        creativeId: t.seatbid[0].bid[0].crid,
                        currency: t.cur,
                        netRevenue: !0
                    }
                }(t.body)), n
            },
            getUserSyncs: function(t, e, n) {
                return n && !0 === n.gdprApplies ? [] : t.iframeEnabled ? d.uniqueSiteIds.map(a) : []
            }
        };
        i(m)
    }
}, [80]);
pbjsChunk([196], {
    182: function(e, n, t) {
        e.exports = t(183)
    },
    183: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), t.d(n, "spec", (function() {
            return c
        }));
        var i = t(0),
            a = t(2),
            r = t(1),
            o = t(10),
            u = t.n(o),
            c = {
                code: "andbeyond",
                aliases: ["headbidding"],
                supportedMediaTypes: [a.b],
                isBidRequestValid: function(e) {
                    return "params" in e && void 0 !== e.params.host && "zoneId" in e.params && !isNaN(Number(e.params.zoneId))
                },
                buildRequests: function(o) {
                    var u, r = o.map(d).reduce((function(e, n, t) {
                            var r = o[t],
                                a = r.params.zoneId,
                                i = r.params.host;
                            return e[i] = e[i] || {}, e[i][a] = e[i][a] || [], e[i][a].push(n), u = r.bidderRequestId, e
                        }), {}),
                        a = [];
                    return Object.keys(r).forEach((function(t) {
                        Object.keys(r[t]).forEach((function(e) {
                            var n = (function(e, n) {
                                var t = {
                                    id: n,
                                    imp: e,
                                    site: (function() {
                                        var e = i.getTopWindowLocation();
                                        return {
                                            domain: e.hostname,
                                            page: e.href.split("?")[0]
                                        }
                                    })(),
                                    at: 1,
                                    device: {
                                        ip: "caller",
                                        ua: "caller",
                                        js: 1,
                                        language: (function() {
                                            var e = navigator.language ? "language" : "userLanguage";
                                            return navigator[e].split("-")[0]
                                        })()
                                    },
                                    ext: {
                                        adk_usersync: 1
                                    }
                                };
                                i.getDNT() && (t.device.dnt = 1);
                                return t
                            })(r[t][e], u);
                            a.push({
                                method: "GET",
                                url: "".concat(window.location.protocol, "//").concat(t, "/rtbg"),
                                data: {
                                    zone: Number(e),
                                    ad_type: "rtb",
                                    v: "1.1",
                                    r: JSON.stringify(n)
                                }
                            })
                        }))
                    })), a
                },
                interpretResponse: function(e, n) {
                    var t = e.body;
                    if (!t.seatbid) return [];
                    var r = JSON.parse(n.data.r).imp;
                    return t.seatbid.map((function(e) {
                        return e.bid
                    })).reduce((function(e, n) {
                        return e.concat(n)
                    }), []).map((function(n) {
                        var e = u()(r, (function(e) {
                                return e.id === n.impid
                            })),
                            t = {
                                requestId: n.impid,
                                cpm: n.price,
                                creativeId: n.crid,
                                currency: "USD",
                                ttl: 360,
                                netRevenue: !0
                            };
                        return "banner" in e && (t.mediaType = a.b, t.width = n.w, t.height = n.h, t.ad = (function(e) {
                            var n = e.adm;
                            "nurl" in e && (n += i.createTrackPixelHtml("".concat(e.nurl, "&px=1")));
                            return "<!DOCTYPE html><html><head><title></title><body style='margin:0px;padding:0px;'>".concat(n, "</body></head>")
                        })(n)), t
                    }))
                },
                getUserSyncs: function(e, n) {
                    return e.iframeEnabled && n && 0 !== n.length ? n.filter((function(e) {
                        return e.body && e.body.ext && e.body.ext.adk_usersync
                    })).map((function(e) {
                        return e.body.ext.adk_usersync
                    })).reduce((function(e, n) {
                        return e.concat(n)
                    }), []).map((function(e) {
                        return {
                            type: "iframe",
                            url: e
                        }
                    })) : []
                }
            };

        function d(e) {
            var n = e.sizes,
                t = {
                    id: e.bidId,
                    tagid: e.placementCode
                };
            return t.banner = {
                format: n.map((function(e) {
                    return {
                        w: e[0],
                        h: e[1]
                    }
                })),
                topframe: 0
            }, "https:" === i.getTopWindowLocation().protocol && (t.secure = 1), t
        }
        Object(r.registerBidder)(c)
    }
}, [182]);
pbjsChunk([192], {
    192: function(e, r, a) {
        e.exports = a(193)
    },
    193: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", (function() {
            return o
        }));
        var c = a(12),
            b = a(0),
            v = a(3),
            m = a(1),
            l = a(2),
            n = a(10),
            h = a.n(n),
            t = a(8),
            _ = a.n(t);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function f() {
            return (f = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }).apply(this, arguments)
        }

        function k(e) {
            return (function(e) {
                if (Array.isArray(e)) {
                    for (var r = 0, a = new Array(e.length); r < e.length; r++) a[r] = e[r];
                    return a
                }
            })(e) || (function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            })(e) || (function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            })()
        }
        var I = "//ib.adnxs.com/ut/v3/prebid",
            s = ["id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks"],
            x = ["age", "external_uid", "segments", "gender", "dnt", "language"],
            T = ["geo", "device_id"],
            w = ["enabled", "dongle", "member_id", "debug_timeout"],
            d = {
                body: "description",
                body2: "desc2",
                cta: "ctatext",
                image: {
                    serverName: "main_image",
                    requiredParams: {
                        required: !0
                    },
                    minimumParams: {
                        sizes: [{}]
                    }
                },
                icon: {
                    serverName: "icon",
                    requiredParams: {
                        required: !0
                    },
                    minimumParams: {
                        sizes: [{}]
                    }
                },
                sponsoredBy: "sponsored_by",
                privacyLink: "privacy_link",
                salePrice: "saleprice",
                displayUrl: "displayurl"
            },
            o = {
                code: "appnexus",
                aliases: ["appnexusAst", "brealtime", "emxdigital", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm"],
                supportedMediaTypes: [l.b, l.d, l.c],
                isBidRequestValid: function(e) {
                    return !!(e.params.placementId || e.params.member && e.params.invCode)
                },
                buildRequests: function(e, r) {
                    var a, n = e.map(C),
                        t = h()(e, S);
                    t && (a = {}, Object.keys(t.params.user).filter((function(e) {
                        return _()(x, e)
                    })).forEach((function(e) {
                        return a[e] = t.params.user[e]
                    })));
                    var i, s = h()(e, A);
                    s && s.params && s.params.app && (i = {}, Object.keys(s.params.app).filter((function(e) {
                        return _()(T, e)
                    })).forEach((function(e) {
                        return i[e] = s.params.app[e]
                    })));
                    var o, d = h()(e, R);
                    d && d.params && s.params.app && s.params.app.id && (o = {
                        appid: d.params.app.id
                    });
                    var p = {},
                        u = {},
                        c = b.getCookie("apn_prebid_debug") || null;
                    if (c) try {
                        p = JSON.parse(c)
                    } catch (e) {
                        b.logError("AppNexus Debug Auction Cookie Error:\n\n" + e)
                    } else {
                        var m = h()(e, P);
                        m && m.debug && (p = m.debug)
                    }
                    p && p.enabled && Object.keys(p).filter((function(e) {
                        return _()(w, e)
                    })).forEach((function(e) {
                        u[e] = p[e]
                    }));
                    var l = h()(e, E),
                        f = l ? parseInt(l.params.member, 10) : 0,
                        y = {
                            tags: k(n),
                            user: a,
                            sdk: {
                                source: "pbjs",
                                version: "2.10.0"
                            }
                        };
                    if (0 < f && (y.member_id = f), s && (y.device = i), d && (y.app = o), v.config.getConfig("adpod.brandCategoryExclusion") && (y.brand_category_uniqueness = !0), u.enabled && (y.debug = u, b.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(u, null, 4))), r && r.gdprConsent && (y.gdpr_consent = {
                            consent_string: r.gdprConsent.consentString,
                            consent_required: r.gdprConsent.gdprApplies
                        }), r && r.refererInfo) {
                        var g = {
                            rd_ref: encodeURIComponent(r.refererInfo.referer),
                            rd_top: r.refererInfo.reachedTop,
                            rd_ifs: r.refererInfo.numIframes,
                            rd_stk: r.refererInfo.stack.map((function(e) {
                                return encodeURIComponent(e)
                            })).join(",")
                        };
                        y.referrer_detection = g
                    }
                    return h()(e, O) && e.filter(O).forEach((function(r) {
                        var e = (function(e, r) {
                                var a = r.mediaTypes.video,
                                    n = a.durationRangeSec,
                                    t = a.requireExactDuration,
                                    i = (function(e) {
                                        var r = e.adPodDurationSec,
                                            a = e.durationRangeSec,
                                            n = e.requireExactDuration,
                                            t = b.getMinValueFromArray(a),
                                            i = Math.floor(r / t);
                                        return n ? Math.max(i, a.length) : i
                                    })(r.mediaTypes.video),
                                    s = b.getMaxValueFromArray(n),
                                    o = e.filter((function(e) {
                                        return e.uuid === r.bidId
                                    })),
                                    d = b.fill.apply(b, k(o).concat([i]));
                                if (t) {
                                    var p = Math.ceil(i / n.length),
                                        u = b.chunk(d, p);
                                    n.forEach((function(r, e) {
                                        u[e].map((function(e) {
                                            j(e, "minduration", r), j(e, "maxduration", r)
                                        }))
                                    }))
                                } else d.map((function(e) {
                                    return j(e, "maxduration", s)
                                }));
                                return d
                            })(n, r),
                            a = y.tags.filter((function(e) {
                                return e.uuid !== r.bidId
                            }));
                        y.tags = [].concat(k(a), k(e))
                    })), (function(e, a) {
                        var n = [];
                        if (15 < e.tags.length) {
                            var t = b.deepClone(e);
                            b.chunk(e.tags, 15).forEach((function(e) {
                                t.tags = e;
                                var r = JSON.stringify(t);
                                n.push({
                                    method: "POST",
                                    url: I,
                                    data: r,
                                    bidderRequest: a
                                })
                            }))
                        } else {
                            var r = JSON.stringify(e);
                            n = {
                                method: "POST",
                                url: I,
                                data: r,
                                bidderRequest: a
                            }
                        }
                        return n
                    })(y, r)
                },
                interpretResponse: function(e, r) {
                    var n = this,
                        t = r.bidderRequest;
                    e = e.body;
                    var i = [];
                    if (!e || e.error) {
                        var a = "in response for ".concat(t.bidderCode, " adapter");
                        return e && e.error && (a += ": ".concat(e.error)), b.logError(a), i
                    }
                    if (e.tags && e.tags.forEach((function(e) {
                            var r = (function(e) {
                                return e && e.ads && e.ads.length && h()(e.ads, (function(e) {
                                    return e.rtb
                                }))
                            })(e);
                            if (r && 0 !== r.cpm && _()(n.supportedMediaTypes, r.ad_type)) {
                                var a = (function(e, r, a) {
                                    var n = b.getBidRequest(e.uuid, [a]),
                                        t = {
                                            requestId: e.uuid,
                                            cpm: r.cpm,
                                            creativeId: r.creative_id,
                                            dealId: r.deal_id,
                                            currency: "USD",
                                            netRevenue: !0,
                                            ttl: 300,
                                            adUnitCode: n.adUnitCode,
                                            appnexus: {
                                                buyerMemberId: r.buyer_member_id,
                                                dealPriority: r.deal_priority,
                                                dealCode: r.deal_code
                                            }
                                        };
                                    if (r.rtb.video) {
                                        f(t, {
                                            width: r.rtb.video.player_width,
                                            height: r.rtb.video.player_height,
                                            vastUrl: r.rtb.video.asset_url,
                                            vastImpUrl: r.notify_url,
                                            ttl: 3600
                                        });
                                        var i = b.deepAccess(n, "mediaTypes.video.context");
                                        if (i === l.a) {
                                            var s = Object(m.getIabSubCategory)(n.bidder, r.brand_category_id);
                                            t.meta = {
                                                iabSubCatId: s
                                            }, t.video = {
                                                context: l.a,
                                                durationSeconds: Math.floor(r.rtb.video.duration_ms / 1e3)
                                            }
                                        }
                                        if (r.renderer_url) {
                                            var o = b.deepAccess(a.bids[0], "renderer.options");
                                            f(t, {
                                                adResponse: e,
                                                renderer: (function(e, r) {
                                                    var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                                        n = c.a.install({
                                                            id: r.renderer_id,
                                                            url: r.renderer_url,
                                                            config: a,
                                                            loaded: !1,
                                                            adUnitCode: e
                                                        });
                                                    try {
                                                        n.setRender(g)
                                                    } catch (e) {
                                                        b.logWarn("Prebid Error calling setRender on renderer", e)
                                                    }
                                                    return n.setEventHandlers({
                                                        impression: function() {
                                                            return b.logMessage("AppNexus outstream video impression event")
                                                        },
                                                        loaded: function() {
                                                            return b.logMessage("AppNexus outstream video loaded event")
                                                        },
                                                        ended: function() {
                                                            b.logMessage("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none"
                                                        }
                                                    }), n
                                                })(t.adUnitCode, r, o)
                                            }), t.adResponse.ad = t.adResponse.ads[0], t.adResponse.ad.video = t.adResponse.ad.rtb.video
                                        }
                                    } else if (r.rtb[l.c]) {
                                        var d = r.rtb[l.c];
                                        t[l.c] = {
                                            title: d.title,
                                            body: d.desc,
                                            body2: d.desc2,
                                            cta: d.ctatext,
                                            rating: d.rating,
                                            sponsoredBy: d.sponsored,
                                            privacyLink: d.privacy_link,
                                            address: d.address,
                                            downloads: d.downloads,
                                            likes: d.likes,
                                            phone: d.phone,
                                            price: d.price,
                                            salePrice: d.saleprice,
                                            clickUrl: d.link.url,
                                            displayUrl: d.displayurl,
                                            clickTrackers: d.link.click_trackers,
                                            impressionTrackers: d.impression_trackers,
                                            javascriptTrackers: d.javascript_trackers
                                        }, d.main_img && (t.native.image = {
                                            url: d.main_img.url,
                                            height: d.main_img.height,
                                            width: d.main_img.width
                                        }), d.icon && (t.native.icon = {
                                            url: d.icon.url,
                                            height: d.icon.height,
                                            width: d.icon.width
                                        })
                                    } else {
                                        f(t, {
                                            width: r.rtb.banner.width,
                                            height: r.rtb.banner.height,
                                            ad: r.rtb.banner.content
                                        });
                                        try {
                                            var p = r.rtb.trackers[0].impression_urls[0],
                                                u = b.createTrackPixelHtml(p);
                                            t.ad += u
                                        } catch (e) {
                                            b.logError("Error appending tracking pixel", e)
                                        }
                                    }
                                    return t
                                })(e, r, t);
                                a.mediaType = (function(e) {
                                    var r = e.ad_type;
                                    return r === l.d ? l.d : r === l.c ? l.c : l.b
                                })(r), i.push(a)
                            }
                        })), e.debug && e.debug.debug_info) {
                        var s = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
                        s = s.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), b.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), b.logMessage(s)
                    }
                    return i
                },
                getMappingFileInfo: function() {
                    return {
                        url: "//acdn.adnxs.com/prebid/appnexus-mapping/mappings.json",
                        refreshInDays: 7
                    }
                },
                getUserSyncs: function(e) {
                    if (e.iframeEnabled) return [{
                        type: "iframe",
                        url: "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                    }]
                },
                transformBidParams: function(a, e) {
                    return a = b.convertTypes({
                        member: "string",
                        invCode: "string",
                        placementId: "number",
                        keywords: b.transformBidderParamKeywords
                    }, a), e && (a.use_pmt_rule = "boolean" == typeof a.usePaymentRule && a.usePaymentRule, a.usePaymentRule && delete a.usePaymentRule, p(a.keywords) && a.keywords.forEach(u), Object.keys(a).forEach((function(e) {
                        var r = b.convertCamelToUnderscore(e);
                        r !== e && (a[r] = a[e], delete a[e])
                    }))), a
                }
            };

        function p(e) {
            return !!(b.isArray(e) && 0 < e.length)
        }

        function u(e) {
            p(e.value) && "" === e.value[0] && delete e.value
        }

        function C(r) {
            var a = {};
            if (a.sizes = y(r.sizes), a.primary_size = a.sizes[0], a.ad_types = [], a.uuid = r.bidId, r.params.placementId ? a.id = parseInt(r.params.placementId, 10) : a.code = r.params.invCode, a.allow_smaller_sizes = r.params.allowSmallerSizes || !1, a.use_pmt_rule = r.params.usePaymentRule || !1, a.prebid = !0, a.disable_psa = !0, r.params.reserve && (a.reserve = r.params.reserve), r.params.position && (a.position = {
                    above: 1,
                    below: 2
                }[r.params.position] || 0), r.params.trafficSourceCode && (a.traffic_source_code = r.params.trafficSourceCode), r.params.privateSizes && (a.private_sizes = y(r.params.privateSizes)), r.params.supplyType && (a.supply_type = r.params.supplyType), r.params.pubClick && (a.pubclick = r.params.pubClick), r.params.extInvCode && (a.ext_inv_code = r.params.extInvCode), r.params.externalImpId && (a.external_imp_id = r.params.externalImpId), !b.isEmpty(r.params.keywords)) {
                var e = b.transformBidderParamKeywords(r.params.keywords);
                0 < e.length && e.forEach(u), a.keywords = e
            }
            if ((r.mediaType === l.c || b.deepAccess(r, "mediaTypes.".concat(l.c))) && (a.ad_types.push(l.c), 0 === a.sizes.length && (a.sizes = y([1, 1])), r.nativeParams)) {
                var n = (function(s) {
                    var o = {};
                    return Object.keys(s).forEach((function(e) {
                        var r = d[e] && d[e].serverName || d[e] || e,
                            a = d[e] && d[e].requiredParams;
                        o[r] = f({}, a, s[e]);
                        var n = d[e] && d[e].minimumParams;
                        if (a && n) {
                            var t = Object.keys(s[e]),
                                i = Object.keys(a);
                            0 === t.filter((function(e) {
                                return !_()(i, e)
                            })).length && (o[r] = f({}, o[r], n))
                        }
                    })), o
                })(r.nativeParams);
                a[l.c] = {
                    layouts: [n]
                }
            }
            var t = b.deepAccess(r, "mediaTypes.".concat(l.d)),
                i = b.deepAccess(r, "mediaTypes.video.context");
            return (r.mediaType === l.d || t) && a.ad_types.push(l.d), (r.mediaType === l.d || t && "outstream" !== i) && (a.require_asset_url = !0), r.params.video && (a.video = {}, Object.keys(r.params.video).filter((function(e) {
                return _()(s, e)
            })).forEach((function(e) {
                return a.video[e] = r.params.video[e]
            }))), (b.isEmpty(r.mediaType) && b.isEmpty(r.mediaTypes) || r.mediaType === l.b || r.mediaTypes && r.mediaTypes[l.b]) && a.ad_types.push(l.b), a
        }

        function y(e) {
            var r = [],
                a = {};
            if (b.isArray(e) && 2 === e.length && !b.isArray(e[0])) a.width = parseInt(e[0], 10), a.height = parseInt(e[1], 10), r.push(a);
            else if ("object" === i(e))
                for (var n = 0; n < e.length; n++) {
                    var t = e[n];
                    (a = {}).width = parseInt(t[0], 10), a.height = parseInt(t[1], 10), r.push(a)
                }
            return r
        }

        function S(e) {
            return !!e.params.user
        }

        function E(e) {
            return !!parseInt(e.params.member, 10)
        }

        function A(e) {
            if (e.params) return !!e.params.app
        }

        function R(e) {
            return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
        }

        function P(e) {
            return !!e.debug
        }

        function O(e) {
            return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === l.a
        }

        function j(e, r, a) {
            b.isEmpty(e.video) && (e.video = {}), e.video[r] = a
        }

        function g(e) {
            e.renderer.push((function() {
                window.ANOutstreamVideo.renderAd({
                    tagId: e.adResponse.tag_id,
                    sizes: [e.getSize().split("x")],
                    targetId: e.adUnitCode,
                    uuid: e.adResponse.uuid,
                    adResponse: e.adResponse,
                    rendererOptions: e.renderer.getConfig()
                }, function(e, r, a) {
                    e.renderer.handleVideoEvent({
                        id: r,
                        eventName: a
                    })
                }.bind(null, e))
            }))
        }
        Object(m.registerBidder)(o)
    }
}, [192]);
pbjsChunk([189], {
    198: function(t, n, e) {
        t.exports = e(199)
    },
    199: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), e.d(n, "spec", (function() {
            return s
        }));
        var r = e(1),
            v = e(11),
            y = e(0),
            o = e(35),
            b = e.n(o),
            a = e(8),
            i = e.n(a);

        function h(t, n) {
            return (function(t) {
                if (Array.isArray(t)) return t
            })(t) || (function(t, n) {
                var e = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var i, c = t[Symbol.iterator](); !(r = (i = c.next()).done) && (e.push(i.value), !n || e.length !== n); r = !0);
                } catch (t) {
                    o = !0, a = t
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return e
            })(t, n) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }

        function w(t) {
            return (function(t) {
                if (Array.isArray(t)) {
                    for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                    return e
                }
            })(t) || (function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            })(t) || (function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            })()
        }

        function c(t) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var g = function(t) {
                return Array.isArray(t) && 2 === t.length ? "".concat(t[0], "x").concat(t[1]) : t
            },
            A = function(t) {
                return t.split("x").map(Number)
            },
            j = function(t) {
                return i()(["300x250", "320x50"], t)
            },
            N = function(t) {
                return i()(["video", "native"], t)
            },
            x = function(t, n) {
                return "300x250" === n ? [n].concat(w(t)) : [].concat(w(t), [n])
            },
            S = function(t) {
                return "video" === t
            },
            I = function(t) {
                return "fullwidth" === t
            },
            T = function() {
                return encodeURIComponent(Object(y.getTopWindowUrl)())
            },
            s = {
                code: "audienceNetwork",
                supportedMediaTypes: ["banner", "video"],
                isBidRequestValid: function(t) {
                    return "object" === c(t.params) && "string" == typeof t.params.placementId && 0 < t.params.placementId.length && Array.isArray(t.sizes) && 0 < t.sizes.length && (!I(t.params.format) || t.sizes.map(g).some((function(t) {
                        return "300x250" === t
                    }))) && (N(t.params.format) || t.sizes.map(g).some(j))
                },
                buildRequests: function(t) {
                    var a = [],
                        i = [],
                        c = [],
                        s = [],
                        d = [],
                        u = [];
                    t.forEach((function(o) {
                        return o.sizes.map(g).filter((function(t) {
                            return (function(t, n) {
                                return I(n) && "300x250" === g(t) || N(n) || j(g(t))
                            })(t, o.params.format)
                        })).reduce(x, []).slice(0, 1).forEach((function(t) {
                            var n = h(function(t, n) {
                                    return I(n) ? ["300x250", null] : [t, n]
                                }(t, o.params.format), 2),
                                e = n[0],
                                r = n[1];
                            a.push(o.params.placementId), i.push(r || e), c.push(e), s.push(function(t) {
                                return S(t) ? "" : "6.0.web"
                            }(r)), d.push(o.params.platform), u.push(o.bidId)
                        }))
                    }));
                    var n = Boolean(window && window.location && "string" == typeof window.location.search && -1 !== window.location.search.indexOf("anhb_testmode")).toString(),
                        e = T(),
                        r = (function(t) {
                            return [].concat(w(t.filter(Boolean)), ["241394079772386"])[0]
                        })(d),
                        o = Object(y.generateUUID)(),
                        l = {
                            placementids: a,
                            adformats: i,
                            testmode: n,
                            pageurl: e,
                            sdk: s,
                            adapterver: "1.3.0",
                            platform: r,
                            platver: "2.10.0",
                            cb: o
                        },
                        p = b()(i, S);
                    if (-1 !== p) {
                        var f = h(A(c[p]), 2);
                        l.playerwidth = f[0], l.playerheight = f[1]
                    }
                    var m = Object(v.b)(l);
                    return [{
                        adformats: i,
                        data: m,
                        method: "GET",
                        requestIds: u,
                        sizes: c,
                        url: "https://an.facebook.com/v2/placementbid.json"
                    }]
                },
                interpretResponse: function(t, n) {
                    var e = t.body,
                        p = n.adformats,
                        f = n.requestIds,
                        m = n.sizes,
                        r = e.bids,
                        o = void 0 === r ? {} : r;
                    return Object.keys(o).map((function(t) {
                        return o[t]
                    })).reduce((function(t, n) {
                        return t.concat(n)
                    }), []).map((function(t, n) {
                        var e = t.bid_id,
                            r = t.placement_id,
                            o = t.bid_price_cents,
                            a = p[n],
                            i = h(A(g(m[n])), 2),
                            c = i[0],
                            s = i[1],
                            d = (function(t, n, e) {
                                var r = "native" === n ? '<div class="thirdPartyRoot"><a class="fbAdLink"><div class="fbAdMedia thirdPartyMediaClass"></div><div class="fbAdSubtitle thirdPartySubtitleClass"></div><div class="fbDefaultNativeAdWrapper"><div class="fbAdCallToAction thirdPartyCallToActionClass"></div><div class="fbAdTitle thirdPartyTitleClass"></div></div></a></div>' : "";
                                return "<html>\n  <head>".concat("native" === n ? '<script>window.onload=function(){if(parent){var o=document.getElementsByTagName("head")[0];var s=parent.document.getElementsByTagName("style");for(var i=0;i<s.length;i++)o.appendChild(s[i].cloneNode(true));}}<\/script>' : "", '</head>\n  <body>\n    <div style="display:none;position:relative;">\n      <script type="text/javascript" src="https://connect.facebook.net/en_US/fbadnw60-tag.js" async><\/script>\n      <script type="text/javascript">\n        window.ADNW = window.ADNW || {};\n        window.ADNW.v60 = window.ADNW.v60 || {};\n        window.ADNW.v60.slots = window.ADNW.v60.slots || [];\n        window.ADNW.v60.slots.push({\n          rootElement: document.currentScript.parentElement,\n          placementid: \'').concat(t, "',\n          format: '").concat(n, "',\n          bidid: '").concat(e, "',\n          testmode: false,\n          onAdLoaded: function(rootElement) {\n            console.log('Audience Network [").concat(t, "] ad loaded');\n            rootElement.style.display = 'block';\n          },\n          onAdError: function(errorCode, errorMessage) {\n            console.log('Audience Network [").concat(t, "] error (' + errorCode + ') ' + errorMessage);\n          }\n        });\n      <\/script>\n      ").concat(r, "\n    </div>\n  </body>\n</html>")
                            })(r, a, e),
                            u = {
                                requestId: f[n],
                                cpm: o / 100,
                                width: c,
                                height: s,
                                ad: d,
                                ttl: 600,
                                creativeId: r,
                                netRevenue: !0,
                                currency: "USD",
                                hb_bidder: "fan",
                                fb_bidid: e,
                                fb_format: a,
                                fb_placementid: r
                            };
                        if (S(a)) {
                            var l = T();
                            u.mediaType = "video", u.vastUrl = "https://an.facebook.com/v1/instream/vast.xml?placementid=".concat(r, "&pageurl=").concat(l, "&playerwidth=").concat(c, "&playerheight=").concat(s, "&bidid=").concat(e), u.ttl = 3600
                        }
                        return u
                    }))
                },
                transformBidParams: function(t, n) {
                    return Object(y.convertTypes)({
                        placementId: "string"
                    }, t)
                }
            };
        Object(r.registerBidder)(s)
    }
}, [198]);
pbjsChunk([2], {
    249: function(t, e, i) {
        t.exports = i(250)
    },
    250: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        }), __webpack_require__.d(__webpack_exports__, "FAST_BID_PUBKEY", (function() {
            return FAST_BID_PUBKEY
        })), __webpack_require__.d(__webpack_exports__, "spec", (function() {
            return spec
        })), __webpack_exports__.cryptoVerify = cryptoVerify;
        var __WEBPACK_IMPORTED_MODULE_0__src_adloader__ = __webpack_require__(47),
            __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__ = __webpack_require__(1),
            __WEBPACK_IMPORTED_MODULE_2__src_url__ = __webpack_require__(11),
            __WEBPACK_IMPORTED_MODULE_3__src_utils__ = __webpack_require__(0),
            __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find__ = __webpack_require__(10),
            __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find__),
            __WEBPACK_IMPORTED_MODULE_5_jsencrypt_bin_jsencrypt__ = __webpack_require__(251),
            __WEBPACK_IMPORTED_MODULE_5_jsencrypt_bin_jsencrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jsencrypt_bin_jsencrypt__),
            __WEBPACK_IMPORTED_MODULE_6_crypto_js_sha256__ = __webpack_require__(252),
            __WEBPACK_IMPORTED_MODULE_6_crypto_js_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_crypto_js_sha256__),
            ADAPTER_VERSION = 16,
            BIDDER_CODE = "criteo",
            CDB_ENDPOINT = "//bidder.criteo.com/cdb",
            CRITEO_VENDOR_ID = 91,
            INTEGRATION_MODES = {
                amp: 1
            },
            PROFILE_ID_INLINE = 207,
            PROFILE_ID_PUBLISHERTAG = 185,
            PUBLISHER_TAG_URL = "//static.criteo.net/js/ld/publishertag.prebid.js",
            FAST_BID_PUBKEY = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDO1BjAITkFTtP0IMzmF7qsqhpu\ny1dGaTPHnjMU9mRZsrnfR3C0sEN5pYEzEcFRPnkJjJuhH8Rnh5+CE+LcKg0Z8ZZ7\nOmOSj0/qnYTAYCu0cR5LiyWG79KlIgUyMbp92ulGg24gAyGrVn4+v/4c53WlOEUp\n4YWvb82G0CD5NcDNpQIDAQAB\n-----END PUBLIC KEY-----",
            spec = {
                code: BIDDER_CODE,
                isBidRequestValid: function(t) {
                    return !(!t || !t.params || !t.params.zoneId && !t.params.networkId)
                },
                buildRequests: function(t, e) {
                    var i, r;
                    if (publisherTagAvailable() || (window.Criteo = window.Criteo || {}, window.Criteo.usePrebidEvents = !1, tryGetCriteoFastBid(), setTimeout((function() {
                            Object(__WEBPACK_IMPORTED_MODULE_0__src_adloader__.a)(PUBLISHER_TAG_URL, BIDDER_CODE)
                        }), e.timeout)), publisherTagAvailable()) {
                        var n = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, t, e, "2.10.0");
                        i = n.buildCdbUrl(), r = n.buildCdbRequest()
                    } else {
                        var s = buildContext(t);
                        i = buildCdbUrl(s), r = buildCdbRequest(s, t, e)
                    }
                    if (r) return {
                        method: "POST",
                        url: i,
                        data: r,
                        bidRequests: t
                    }
                },
                interpretResponse: function(t, n) {
                    var e = t.body || t;
                    if (publisherTagAvailable()) {
                        var i = Criteo.PubTag.Adapters.Prebid.GetAdapter(n);
                        if (i) return i.interpretResponse(e, n)
                    }
                    var s = [];
                    return e && e.slots && __WEBPACK_IMPORTED_MODULE_3__src_utils__.isArray(e.slots) && e.slots.forEach((function(e) {
                        var t = __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find___default()(n.bidRequests, (function(t) {
                                return t.adUnitCode === e.impid && (!t.params.zoneId || parseInt(t.params.zoneId) === e.zoneid)
                            })),
                            i = t.bidId,
                            r = {
                                requestId: i,
                                adId: e.bidId || __WEBPACK_IMPORTED_MODULE_3__src_utils__.getUniqueIdentifierStr(),
                                cpm: e.cpm,
                                currency: e.currency,
                                netRevenue: !0,
                                ttl: e.ttl || 60,
                                creativeId: i,
                                width: e.width,
                                height: e.height
                            };
                        e.native ? r.ad = createNativeAd(i, e.native, t.params.nativeCallback) : r.ad = e.creative, s.push(r)
                    })), s
                },
                onTimeout: function(t) {
                    publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout()
                },
                onBidWon: function(t) {
                    publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidWon(t)
                },
                onSetTargeting: function(t) {
                    publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleSetTargeting(t)
                }
            };

        function publisherTagAvailable() {
            return "undefined" != typeof Criteo && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid
        }

        function buildContext(t) {
            var e = __WEBPACK_IMPORTED_MODULE_3__src_utils__.getTopWindowUrl(),
                i = Object(__WEBPACK_IMPORTED_MODULE_2__src_url__.c)(e).search,
                r = {
                    url: e,
                    debug: "1" === i.pbt_debug,
                    noLog: "1" === i.pbt_nolog,
                    integrationMode: void 0
                };
            return t.forEach((function(t) {
                t.params.integrationMode && (r.integrationMode = t.params.integrationMode)
            })), r
        }

        function buildCdbUrl(t) {
            var e = CDB_ENDPOINT;
            return e += "?profileId=" + PROFILE_ID_INLINE, e += "&av=" + String(ADAPTER_VERSION), e += "&wv=" + encodeURIComponent("2.10.0"), e += "&cb=" + String(Math.floor(99999999999 * Math.random())), t.integrationMode in INTEGRATION_MODES && (e += "&im=" + INTEGRATION_MODES[t.integrationMode]), t.debug && (e += "&debug=1"), t.noLog && (e += "&nolog=1"), e
        }

        function buildCdbRequest(t, e, i) {
            var r, n = {
                publisher: {
                    url: t.url
                },
                slots: e.map((function(t) {
                    r = t.params.networkId || r;
                    var e = {
                        impid: t.adUnitCode,
                        transactionid: t.transactionId,
                        auctionId: t.auctionId,
                        sizes: t.sizes.map((function(t) {
                            return t[0] + "x" + t[1]
                        }))
                    };
                    return t.params.zoneId && (e.zoneid = t.params.zoneId), t.params.publisherSubId && (e.publishersubid = t.params.publisherSubId), t.params.nativeCallback && (e.native = !0), e
                }))
            };
            return r && (n.publisher.networkid = r), i && i.gdprConsent && (n.gdprConsent = {}, void 0 !== i.gdprConsent.gdprApplies && (n.gdprConsent.gdprApplies = !!i.gdprConsent.gdprApplies), i.gdprConsent.vendorData && i.gdprConsent.vendorData.vendorConsents && void 0 !== i.gdprConsent.vendorData.vendorConsents[CRITEO_VENDOR_ID.toString(10)] && (n.gdprConsent.consentGiven = !!i.gdprConsent.vendorData.vendorConsents[CRITEO_VENDOR_ID.toString(10)]), void 0 !== i.gdprConsent.consentString && (n.gdprConsent.consentData = i.gdprConsent.consentString)), n
        }

        function createNativeAd(t, e, i) {
            return window.criteo_prebid_native_slots = window.criteo_prebid_native_slots || {}, window.criteo_prebid_native_slots[t] = {
                callback: i,
                payload: e
            }, '<script type="text/javascript">\n    var win = window;\n    for (var i = 0; i < 10; ++i) {\n      win = win.parent;\n      if (win.criteo_prebid_native_slots) {\n        var responseSlot = win.criteo_prebid_native_slots["'.concat(t, '"];\n        responseSlot.callback(responseSlot.payload);\n        break;\n      }\n    }\n  <\/script>')
        }

        function cryptoVerify(t, e, i) {
            var r = new __WEBPACK_IMPORTED_MODULE_5_jsencrypt_bin_jsencrypt___default.a;
            return r.setPublicKey(t), r.verify(i, e, __WEBPACK_IMPORTED_MODULE_6_crypto_js_sha256___default.a)
        }

        function validateFastBid(t) {
            var e = t.indexOf("\n"),
                i = t.substr(0, e).trim();
            if ("// Hash: " !== i.substr(0, 9)) return __WEBPACK_IMPORTED_MODULE_3__src_utils__.logWarn("No hash found in FastBid"), !1;
            var r = i.substr(9),
                n = t.substr(e + 1);
            try {
                return cryptoVerify(FAST_BID_PUBKEY, r, n)
            } catch (t) {
                return void __WEBPACK_IMPORTED_MODULE_3__src_utils__.logWarn("Failed to verify Criteo FastBid")
            }
        }

        function tryGetCriteoFastBid() {
            try {
                var fastBid = localStorage.getItem("criteo_fast_bid");
                null !== fastBid && (!1 === validateFastBid(fastBid) ? (__WEBPACK_IMPORTED_MODULE_3__src_utils__.logWarn("Invalid Criteo FastBid found"), localStorage.removeItem("criteo_fast_bid")) : (__WEBPACK_IMPORTED_MODULE_3__src_utils__.logInfo("Using Criteo FastBid"), eval(fastBid)))
            } catch (t) {}
        }
        Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__.registerBidder)(spec)
    },
    251: function(t, e, i) {
        (function(t) {
            "use strict";
            var e = "0123456789abcdefghijklmnopqrstuvwxyz";

            function h(t) {
                return e.charAt(t)
            }

            function i(t, e) {
                return t & e
            }

            function u(t, e) {
                return t | e
            }

            function r(t, e) {
                return t ^ e
            }

            function n(t, e) {
                return t & ~e
            }

            function s(t) {
                if (0 == t) return -1;
                var e = 0;
                return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, e
            }

            function o(t) {
                for (var e = 0; 0 != t;) t &= t - 1, ++e;
                return e
            }
            var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

            function c(t) {
                var e, i, r = "";
                for (e = 0; e + 3 <= t.length; e += 3) i = parseInt(t.substring(e, e + 3), 16), r += a.charAt(i >> 6) + a.charAt(63 & i);
                for (e + 1 == t.length ? (i = parseInt(t.substring(e, e + 1), 16), r += a.charAt(i << 2)) : e + 2 == t.length && (i = parseInt(t.substring(e, e + 2), 16), r += a.charAt(i >> 2) + a.charAt((3 & i) << 4)); 0 < (3 & r.length);) r += "=";
                return r
            }

            function f(t) {
                var e, i = "",
                    r = 0,
                    n = 0;
                for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
                    var s = a.indexOf(t.charAt(e));
                    s < 0 || (r = 0 == r ? (i += h(s >> 2), n = 3 & s, 1) : 1 == r ? (i += h(n << 2 | s >> 4), n = 15 & s, 2) : 2 == r ? (i += h(n), i += h(s >> 2), n = 3 & s, 3) : (i += h(n << 2 | s >> 4), i += h(15 & s), 0))
                }
                return 1 == r && (i += h(n << 2)), i
            }
            var l, p = function(t, e) {
                return (p = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            };
            var d, g = function(t) {
                    var e;
                    if (void 0 === l) {
                        var i = "0123456789ABCDEF",
                            r = " \f\n\r\t \u2028\u2029";
                        for (l = {}, e = 0; e < 16; ++e) l[i.charAt(e)] = e;
                        for (i = i.toLowerCase(), e = 10; e < 16; ++e) l[i.charAt(e)] = e;
                        for (e = 0; e < r.length; ++e) l[r.charAt(e)] = -1
                    }
                    var n = [],
                        s = 0,
                        o = 0;
                    for (e = 0; e < t.length; ++e) {
                        var a = t.charAt(e);
                        if ("=" == a) break;
                        if (-1 != (a = l[a])) {
                            if (void 0 === a) throw new Error("Illegal character at offset " + e);
                            s |= a, 2 <= ++o ? (n[n.length] = s, o = s = 0) : s <<= 4
                        }
                    }
                    if (o) throw new Error("Hex encoding incomplete: 4 bits missing");
                    return n
                },
                v = {
                    decode: function(t) {
                        var e;
                        if (void 0 === d) {
                            var i = "= \f\n\r\t \u2028\u2029";
                            for (d = Object.create(null), e = 0; e < 64; ++e) d["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)] = e;
                            for (e = 0; e < i.length; ++e) d[i.charAt(e)] = -1
                        }
                        var r = [],
                            n = 0,
                            s = 0;
                        for (e = 0; e < t.length; ++e) {
                            var o = t.charAt(e);
                            if ("=" == o) break;
                            if (-1 != (o = d[o])) {
                                if (void 0 === o) throw new Error("Illegal character at offset " + e);
                                n |= o, 4 <= ++s ? (r[r.length] = n >> 16, r[r.length] = n >> 8 & 255, r[r.length] = 255 & n, s = n = 0) : n <<= 6
                            }
                        }
                        switch (s) {
                            case 1:
                                throw new Error("Base64 encoding incomplete: at least 2 bits missing");
                            case 2:
                                r[r.length] = n >> 10;
                                break;
                            case 3:
                                r[r.length] = n >> 16, r[r.length] = n >> 8 & 255
                        }
                        return r
                    },
                    re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
                    unarmor: function(t) {
                        var e = v.re.exec(t);
                        if (e)
                            if (e[1]) t = e[1];
                            else {
                                if (!e[2]) throw new Error("RegExp out of sync");
                                t = e[2]
                            }
                        return v.decode(t)
                    }
                },
                _ = 1e13,
                y = (function() {
                    function t(t) {
                        this.buf = [+t || 0]
                    }
                    return t.prototype.mulAdd = function(t, e) {
                        var i, r, n = this.buf,
                            s = n.length;
                        for (i = 0; i < s; ++i)(r = n[i] * t + e) < _ ? e = 0 : r -= (e = 0 | r / _) * _, n[i] = r;
                        0 < e && (n[i] = e)
                    }, t.prototype.sub = function(t) {
                        var e, i, r = this.buf,
                            n = r.length;
                        for (e = 0; e < n; ++e) t = (i = r[e] - t) < 0 ? (i += _, 1) : 0, r[e] = i;
                        for (; 0 === r[r.length - 1];) r.pop()
                    }, t.prototype.toString = function(t) {
                        if (10 != (t || 10)) throw new Error("only base 10 is supported");
                        for (var e = this.buf, i = e[e.length - 1].toString(), r = e.length - 2; 0 <= r; --r) i += (_ + e[r]).toString().substring(1);
                        return i
                    }, t.prototype.valueOf = function() {
                        for (var t = this.buf, e = 0, i = t.length - 1; 0 <= i; --i) e = e * _ + t[i];
                        return e
                    }, t.prototype.simplify = function() {
                        var t = this.buf;
                        return 1 == t.length ? t[0] : this
                    }, t
                })(),
                m = "…",
                b = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
                E = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;

            function T(t, e) {
                return t.length > e && (t = t.substring(0, e) + m), t
            }
            var S, D = (function() {
                    function i(t, e) {
                        this.hexDigits = "0123456789ABCDEF", t instanceof i ? (this.enc = t.enc, this.pos = t.pos) : (this.enc = t, this.pos = e)
                    }
                    return i.prototype.get = function(t) {
                        if (void 0 === t && (t = this.pos++), t >= this.enc.length) throw new Error("Requesting byte offset " + t + " on a stream of length " + this.enc.length);
                        return "string" == typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t]
                    }, i.prototype.hexByte = function(t) {
                        return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
                    }, i.prototype.hexDump = function(t, e, i) {
                        for (var r = "", n = t; n < e; ++n)
                            if (r += this.hexByte(this.get(n)), !0 !== i) switch (15 & n) {
                                case 7:
                                    r += "  ";
                                    break;
                                case 15:
                                    r += "\n";
                                    break;
                                default:
                                    r += " "
                            }
                        return r
                    }, i.prototype.isASCII = function(t, e) {
                        for (var i = t; i < e; ++i) {
                            var r = this.get(i);
                            if (r < 32 || 176 < r) return !1
                        }
                        return !0
                    }, i.prototype.parseStringISO = function(t, e) {
                        for (var i = "", r = t; r < e; ++r) i += String.fromCharCode(this.get(r));
                        return i
                    }, i.prototype.parseStringUTF = function(t, e) {
                        for (var i = "", r = t; r < e;) {
                            var n = this.get(r++);
                            i += n < 128 ? String.fromCharCode(n) : 191 < n && n < 224 ? String.fromCharCode((31 & n) << 6 | 63 & this.get(r++)) : String.fromCharCode((15 & n) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++))
                        }
                        return i
                    }, i.prototype.parseStringBMP = function(t, e) {
                        for (var i, r, n = "", s = t; s < e;) i = this.get(s++), r = this.get(s++), n += String.fromCharCode(i << 8 | r);
                        return n
                    }, i.prototype.parseTime = function(t, e, i) {
                        var r = this.parseStringISO(t, e),
                            n = (i ? b : E).exec(r);
                        return n ? (i && (n[1] = +n[1], n[1] += +n[1] < 70 ? 2e3 : 1900), r = n[1] + "-" + n[2] + "-" + n[3] + " " + n[4], n[5] && (r += ":" + n[5], n[6] && (r += ":" + n[6], n[7] && (r += "." + n[7]))), n[8] && (r += " UTC", "Z" != n[8] && (r += n[8], n[9] && (r += ":" + n[9]))), r) : "Unrecognized time: " + r
                    }, i.prototype.parseInteger = function(t, e) {
                        for (var i, r = this.get(t), n = 127 < r, s = n ? 255 : 0, o = ""; r == s && ++t < e;) r = this.get(t);
                        if (0 === (i = e - t)) return n ? -1 : 0;
                        if (4 < i) {
                            for (o = r, i <<= 3; 0 == (128 & (+o ^ s));) o = +o << 1, --i;
                            o = "(" + i + " bit)\n"
                        }
                        n && (r -= 256);
                        for (var a = new y(r), h = t + 1; h < e; ++h) a.mulAdd(256, this.get(h));
                        return o + a.toString()
                    }, i.prototype.parseBitString = function(t, e, i) {
                        for (var r = this.get(t), n = "(" + ((e - t - 1 << 3) - r) + " bit)\n", s = "", o = t + 1; o < e; ++o) {
                            for (var a = this.get(o), h = o == e - 1 ? r : 0, u = 7; h <= u; --u) s += a >> u & 1 ? "1" : "0";
                            if (s.length > i) return n + T(s, i)
                        }
                        return n + s
                    }, i.prototype.parseOctetString = function(t, e, i) {
                        if (this.isASCII(t, e)) return T(this.parseStringISO(t, e), i);
                        var r = e - t,
                            n = "(" + r + " byte)\n";
                        (i /= 2) < r && (e = t + i);
                        for (var s = t; s < e; ++s) n += this.hexByte(this.get(s));
                        return i < r && (n += m), n
                    }, i.prototype.parseOID = function(t, e, i) {
                        for (var r = "", n = new y, s = 0, o = t; o < e; ++o) {
                            var a = this.get(o);
                            if (n.mulAdd(128, 127 & a), s += 7, !(128 & a)) {
                                if ("" === r)
                                    if ((n = n.simplify()) instanceof y) n.sub(80), r = "2." + n.toString();
                                    else {
                                        var h = n < 80 ? n < 40 ? 0 : 1 : 2;
                                        r = h + "." + (n - 40 * h)
                                    }
                                else r += "." + n.toString();
                                if (r.length > i) return T(r, i);
                                n = new y, s = 0
                            }
                        }
                        return 0 < s && (r += ".incomplete"), r
                    }, i
                })(),
                w = (function() {
                    function c(t, e, i, r, n) {
                        if (!(r instanceof B)) throw new Error("Invalid tag value.");
                        this.stream = t, this.header = e, this.length = i, this.tag = r, this.sub = n
                    }
                    return c.prototype.typeName = function() {
                        switch (this.tag.tagClass) {
                            case 0:
                                switch (this.tag.tagNumber) {
                                    case 0:
                                        return "EOC";
                                    case 1:
                                        return "BOOLEAN";
                                    case 2:
                                        return "INTEGER";
                                    case 3:
                                        return "BIT_STRING";
                                    case 4:
                                        return "OCTET_STRING";
                                    case 5:
                                        return "NULL";
                                    case 6:
                                        return "OBJECT_IDENTIFIER";
                                    case 7:
                                        return "ObjectDescriptor";
                                    case 8:
                                        return "EXTERNAL";
                                    case 9:
                                        return "REAL";
                                    case 10:
                                        return "ENUMERATED";
                                    case 11:
                                        return "EMBEDDED_PDV";
                                    case 12:
                                        return "UTF8String";
                                    case 16:
                                        return "SEQUENCE";
                                    case 17:
                                        return "SET";
                                    case 18:
                                        return "NumericString";
                                    case 19:
                                        return "PrintableString";
                                    case 20:
                                        return "TeletexString";
                                    case 21:
                                        return "VideotexString";
                                    case 22:
                                        return "IA5String";
                                    case 23:
                                        return "UTCTime";
                                    case 24:
                                        return "GeneralizedTime";
                                    case 25:
                                        return "GraphicString";
                                    case 26:
                                        return "VisibleString";
                                    case 27:
                                        return "GeneralString";
                                    case 28:
                                        return "UniversalString";
                                    case 30:
                                        return "BMPString"
                                }
                                return "Universal_" + this.tag.tagNumber.toString();
                            case 1:
                                return "Application_" + this.tag.tagNumber.toString();
                            case 2:
                                return "[" + this.tag.tagNumber.toString() + "]";
                            case 3:
                                return "Private_" + this.tag.tagNumber.toString()
                        }
                    }, c.prototype.content = function(t) {
                        if (void 0 === this.tag) return null;
                        void 0 === t && (t = 1 / 0);
                        var e = this.posContent(),
                            i = Math.abs(this.length);
                        if (!this.tag.isUniversal()) return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);
                        switch (this.tag.tagNumber) {
                            case 1:
                                return 0 === this.stream.get(e) ? "false" : "true";
                            case 2:
                                return this.stream.parseInteger(e, e + i);
                            case 3:
                                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + i, t);
                            case 4:
                                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);
                            case 6:
                                return this.stream.parseOID(e, e + i, t);
                            case 16:
                            case 17:
                                return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
                            case 12:
                                return T(this.stream.parseStringUTF(e, e + i), t);
                            case 18:
                            case 19:
                            case 20:
                            case 21:
                            case 22:
                            case 26:
                                return T(this.stream.parseStringISO(e, e + i), t);
                            case 30:
                                return T(this.stream.parseStringBMP(e, e + i), t);
                            case 23:
                            case 24:
                                return this.stream.parseTime(e, e + i, 23 == this.tag.tagNumber)
                        }
                        return null
                    }, c.prototype.toString = function() {
                        return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
                    }, c.prototype.toPrettyString = function(t) {
                        void 0 === t && (t = "");
                        var e = t + this.typeName() + " @" + this.stream.pos;
                        if (0 <= this.length && (e += "+"), e += this.length, this.tag.tagConstructed ? e += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e += " (encapsulates)"), e += "\n", null !== this.sub) {
                            t += "  ";
                            for (var i = 0, r = this.sub.length; i < r; ++i) e += this.sub[i].toPrettyString(t)
                        }
                        return e
                    }, c.prototype.posStart = function() {
                        return this.stream.pos
                    }, c.prototype.posContent = function() {
                        return this.stream.pos + this.header
                    }, c.prototype.posEnd = function() {
                        return this.stream.pos + this.header + Math.abs(this.length)
                    }, c.prototype.toHexString = function() {
                        return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
                    }, c.decodeLength = function(t) {
                        var e = t.get(),
                            i = 127 & e;
                        if (i == e) return i;
                        if (6 < i) throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
                        if (0 == i) return null;
                        for (var r = e = 0; r < i; ++r) e = 256 * e + t.get();
                        return e
                    }, c.prototype.getHexStringValue = function() {
                        var t = this.toHexString(),
                            e = 2 * this.header,
                            i = 2 * this.length;
                        return t.substr(e, i)
                    }, c.decode = function(t) {
                        var r;
                        r = t instanceof D ? t : new D(t, 0);
                        var e = new D(r),
                            i = new B(r),
                            n = c.decodeLength(r),
                            s = r.pos,
                            o = s - e.pos,
                            a = null,
                            h = function() {
                                var t = [];
                                if (null !== n) {
                                    for (var e = s + n; r.pos < e;) t[t.length] = c.decode(r);
                                    if (r.pos != e) throw new Error("Content size is not correct for container starting at offset " + s)
                                } else try {
                                    for (;;) {
                                        var i = c.decode(r);
                                        if (i.tag.isEOC()) break;
                                        t[t.length] = i
                                    }
                                    n = s - r.pos
                                } catch (t) {
                                    throw new Error("Exception while decoding undefined length content: " + t)
                                }
                                return t
                            };
                        if (i.tagConstructed) a = h();
                        else if (i.isUniversal() && (3 == i.tagNumber || 4 == i.tagNumber)) try {
                            if (3 == i.tagNumber && 0 != r.get()) throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                            a = h();
                            for (var u = 0; u < a.length; ++u)
                                if (a[u].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.")
                        } catch (t) {
                            a = null
                        }
                        if (null === a) {
                            if (null === n) throw new Error("We can't skip over an invalid tag with undefined length at offset " + s);
                            r.pos = s + Math.abs(n)
                        }
                        return new c(e, o, n, i, a)
                    }, c
                })(),
                B = (function() {
                    function t(t) {
                        var e = t.get();
                        if (this.tagClass = e >> 6, this.tagConstructed = 0 != (32 & e), this.tagNumber = 31 & e, 31 == this.tagNumber) {
                            for (var i = new y; e = t.get(), i.mulAdd(128, 127 & e), 128 & e;);
                            this.tagNumber = i.simplify()
                        }
                    }
                    return t.prototype.isUniversal = function() {
                        return 0 === this.tagClass
                    }, t.prototype.isEOC = function() {
                        return 0 === this.tagClass && 0 === this.tagNumber
                    }, t
                })(),
                R = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                O = (1 << 26) / R[R.length - 1],
                I = (function() {
                    function m(t, e, i) {
                        null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
                    }
                    return m.prototype.toString = function(t) {
                        if (this.s < 0) return "-" + this.negate().toString(t);
                        var e;
                        if (16 == t) e = 4;
                        else if (8 == t) e = 3;
                        else if (2 == t) e = 1;
                        else if (32 == t) e = 5;
                        else {
                            if (4 != t) return this.toRadix(t);
                            e = 2
                        }
                        var i, r = (1 << e) - 1,
                            n = !1,
                            s = "",
                            o = this.t,
                            a = this.DB - o * this.DB % e;
                        if (0 < o--)
                            for (a < this.DB && 0 < (i = this[o] >> a) && (n = !0, s = h(i)); 0 <= o;) a < e ? (i = (this[o] & (1 << a) - 1) << e - a, i |= this[--o] >> (a += this.DB - e)) : (i = this[o] >> (a -= e) & r, a <= 0 && (a += this.DB, --o)), 0 < i && (n = !0), n && (s += h(i));
                        return n ? s : "0"
                    }, m.prototype.negate = function() {
                        var t = C();
                        return m.ZERO.subTo(this, t), t
                    }, m.prototype.abs = function() {
                        return this.s < 0 ? this.negate() : this
                    }, m.prototype.compareTo = function(t) {
                        var e = this.s - t.s;
                        if (0 != e) return e;
                        var i = this.t;
                        if (0 != (e = i - t.t)) return this.s < 0 ? -e : e;
                        for (; 0 <= --i;)
                            if (0 != (e = this[i] - t[i])) return e;
                        return 0
                    }, m.prototype.bitLength = function() {
                        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + H(this[this.t - 1] ^ this.s & this.DM)
                    }, m.prototype.mod = function(t) {
                        var e = C();
                        return this.abs().divRemTo(t, null, e), this.s < 0 && 0 < e.compareTo(m.ZERO) && t.subTo(e, e), e
                    }, m.prototype.modPowInt = function(t, e) {
                        var i;
                        return i = t < 256 || e.isEven() ? new x(e) : new P(e), this.exp(t, i)
                    }, m.prototype.clone = function() {
                        var t = C();
                        return this.copyTo(t), t
                    }, m.prototype.intValue = function() {
                        if (this.s < 0) {
                            if (1 == this.t) return this[0] - this.DV;
                            if (0 == this.t) return -1
                        } else {
                            if (1 == this.t) return this[0];
                            if (0 == this.t) return 0
                        }
                        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
                    }, m.prototype.byteValue = function() {
                        return 0 == this.t ? this.s : this[0] << 24 >> 24
                    }, m.prototype.shortValue = function() {
                        return 0 == this.t ? this.s : this[0] << 16 >> 16
                    }, m.prototype.signum = function() {
                        return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
                    }, m.prototype.toByteArray = function() {
                        var t = this.t,
                            e = [];
                        e[0] = this.s;
                        var i, r = this.DB - t * this.DB % 8,
                            n = 0;
                        if (0 < t--)
                            for (r < this.DB && (i = this[t] >> r) != (this.s & this.DM) >> r && (e[n++] = i | this.s << this.DB - r); 0 <= t;) r < 8 ? (i = (this[t] & (1 << r) - 1) << 8 - r, i |= this[--t] >> (r += this.DB - 8)) : (i = this[t] >> (r -= 8) & 255, r <= 0 && (r += this.DB, --t)), 0 != (128 & i) && (i |= -256), 0 == n && (128 & this.s) != (128 & i) && ++n, (0 < n || i != this.s) && (e[n++] = i);
                        return e
                    }, m.prototype.equals = function(t) {
                        return 0 == this.compareTo(t)
                    }, m.prototype.min = function(t) {
                        return this.compareTo(t) < 0 ? this : t
                    }, m.prototype.max = function(t) {
                        return 0 < this.compareTo(t) ? this : t
                    }, m.prototype.and = function(t) {
                        var e = C();
                        return this.bitwiseTo(t, i, e), e
                    }, m.prototype.or = function(t) {
                        var e = C();
                        return this.bitwiseTo(t, u, e), e
                    }, m.prototype.xor = function(t) {
                        var e = C();
                        return this.bitwiseTo(t, r, e), e
                    }, m.prototype.andNot = function(t) {
                        var e = C();
                        return this.bitwiseTo(t, n, e), e
                    }, m.prototype.not = function() {
                        for (var t = C(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
                        return t.t = this.t, t.s = ~this.s, t
                    }, m.prototype.shiftLeft = function(t) {
                        var e = C();
                        return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e
                    }, m.prototype.shiftRight = function(t) {
                        var e = C();
                        return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e
                    }, m.prototype.getLowestSetBit = function() {
                        for (var t = 0; t < this.t; ++t)
                            if (0 != this[t]) return t * this.DB + s(this[t]);
                        return this.s < 0 ? this.t * this.DB : -1
                    }, m.prototype.bitCount = function() {
                        for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i) t += o(this[i] ^ e);
                        return t
                    }, m.prototype.testBit = function(t) {
                        var e = Math.floor(t / this.DB);
                        return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
                    }, m.prototype.setBit = function(t) {
                        return this.changeBit(t, u)
                    }, m.prototype.clearBit = function(t) {
                        return this.changeBit(t, n)
                    }, m.prototype.flipBit = function(t) {
                        return this.changeBit(t, r)
                    }, m.prototype.add = function(t) {
                        var e = C();
                        return this.addTo(t, e), e
                    }, m.prototype.subtract = function(t) {
                        var e = C();
                        return this.subTo(t, e), e
                    }, m.prototype.multiply = function(t) {
                        var e = C();
                        return this.multiplyTo(t, e), e
                    }, m.prototype.divide = function(t) {
                        var e = C();
                        return this.divRemTo(t, e, null), e
                    }, m.prototype.remainder = function(t) {
                        var e = C();
                        return this.divRemTo(t, null, e), e
                    }, m.prototype.divideAndRemainder = function(t) {
                        var e = C(),
                            i = C();
                        return this.divRemTo(t, e, i), [e, i]
                    }, m.prototype.modPow = function(t, e) {
                        var i, r, n = t.bitLength(),
                            s = U(1);
                        if (n <= 0) return s;
                        i = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6, r = n < 8 ? new x(e) : e.isEven() ? new M(e) : new P(e);
                        var o = [],
                            a = 3,
                            h = i - 1,
                            u = (1 << i) - 1;
                        if (o[1] = r.convert(this), 1 < i) {
                            var c = C();
                            for (r.sqrTo(o[1], c); a <= u;) o[a] = C(), r.mulTo(c, o[a - 2], o[a]), a += 2
                        }
                        var f, l, p = t.t - 1,
                            d = !0,
                            g = C();
                        for (n = H(t[p]) - 1; 0 <= p;) {
                            for (h <= n ? f = t[p] >> n - h & u : (f = (t[p] & (1 << n + 1) - 1) << h - n, 0 < p && (f |= t[p - 1] >> this.DB + n - h)), a = i; 0 == (1 & f);) f >>= 1, --a;
                            if ((n -= a) < 0 && (n += this.DB, --p), d) o[f].copyTo(s), d = !1;
                            else {
                                for (; 1 < a;) r.sqrTo(s, g), r.sqrTo(g, s), a -= 2;
                                0 < a ? r.sqrTo(s, g) : (l = s, s = g, g = l), r.mulTo(g, o[f], s)
                            }
                            for (; 0 <= p && 0 == (t[p] & 1 << n);) r.sqrTo(s, g), l = s, s = g, g = l, --n < 0 && (n = this.DB - 1, --p)
                        }
                        return r.revert(s)
                    }, m.prototype.modInverse = function(t) {
                        var e = t.isEven();
                        if (this.isEven() && e || 0 == t.signum()) return m.ZERO;
                        for (var i = t.clone(), r = this.clone(), n = U(1), s = U(0), o = U(0), a = U(1); 0 != i.signum();) {
                            for (; i.isEven();) i.rShiftTo(1, i), e ? (n.isEven() && s.isEven() || (n.addTo(this, n), s.subTo(t, s)), n.rShiftTo(1, n)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
                            for (; r.isEven();) r.rShiftTo(1, r), e ? (o.isEven() && a.isEven() || (o.addTo(this, o), a.subTo(t, a)), o.rShiftTo(1, o)) : a.isEven() || a.subTo(t, a), a.rShiftTo(1, a);
                            0 <= i.compareTo(r) ? (i.subTo(r, i), e && n.subTo(o, n), s.subTo(a, s)) : (r.subTo(i, r), e && o.subTo(n, o), a.subTo(s, a))
                        }
                        return 0 != r.compareTo(m.ONE) ? m.ZERO : 0 <= a.compareTo(t) ? a.subtract(t) : a.signum() < 0 ? (a.addTo(t, a), a.signum() < 0 ? a.add(t) : a) : a
                    }, m.prototype.pow = function(t) {
                        return this.exp(t, new A)
                    }, m.prototype.gcd = function(t) {
                        var e = this.s < 0 ? this.negate() : this.clone(),
                            i = t.s < 0 ? t.negate() : t.clone();
                        if (e.compareTo(i) < 0) {
                            var r = e;
                            e = i, i = r
                        }
                        var n = e.getLowestSetBit(),
                            s = i.getLowestSetBit();
                        if (s < 0) return e;
                        for (n < s && (s = n), 0 < s && (e.rShiftTo(s, e), i.rShiftTo(s, i)); 0 < e.signum();) 0 < (n = e.getLowestSetBit()) && e.rShiftTo(n, e), 0 < (n = i.getLowestSetBit()) && i.rShiftTo(n, i), 0 <= e.compareTo(i) ? (e.subTo(i, e), e.rShiftTo(1, e)) : (i.subTo(e, i), i.rShiftTo(1, i));
                        return 0 < s && i.lShiftTo(s, i), i
                    }, m.prototype.isProbablePrime = function(t) {
                        var e, i = this.abs();
                        if (1 == i.t && i[0] <= R[R.length - 1]) {
                            for (e = 0; e < R.length; ++e)
                                if (i[0] == R[e]) return !0;
                            return !1
                        }
                        if (i.isEven()) return !1;
                        for (e = 1; e < R.length;) {
                            for (var r = R[e], n = e + 1; n < R.length && r < O;) r *= R[n++];
                            for (r = i.modInt(r); e < n;)
                                if (r % R[e++] == 0) return !1
                        }
                        return i.millerRabin(t)
                    }, m.prototype.copyTo = function(t) {
                        for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
                        t.t = this.t, t.s = this.s
                    }, m.prototype.fromInt = function(t) {
                        this.t = 1, this.s = t < 0 ? -1 : 0, 0 < t ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
                    }, m.prototype.fromString = function(t, e) {
                        var i;
                        if (16 == e) i = 4;
                        else if (8 == e) i = 3;
                        else if (256 == e) i = 8;
                        else if (2 == e) i = 1;
                        else if (32 == e) i = 5;
                        else {
                            if (4 != e) return void this.fromRadix(t, e);
                            i = 2
                        }
                        this.t = 0, this.s = 0;
                        for (var r = t.length, n = !1, s = 0; 0 <= --r;) {
                            var o = 8 == i ? 255 & +t[r] : j(t, r);
                            o < 0 ? "-" == t.charAt(r) && (n = !0) : (n = !1, 0 == s ? this[this.t++] = o : s + i > this.DB ? (this[this.t - 1] |= (o & (1 << this.DB - s) - 1) << s, this[this.t++] = o >> this.DB - s) : this[this.t - 1] |= o << s, (s += i) >= this.DB && (s -= this.DB))
                        }
                        8 == i && 0 != (128 & +t[0]) && (this.s = -1, 0 < s && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), this.clamp(), n && m.ZERO.subTo(this, this)
                    }, m.prototype.clamp = function() {
                        for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t;) --this.t
                    }, m.prototype.dlShiftTo = function(t, e) {
                        var i;
                        for (i = this.t - 1; 0 <= i; --i) e[i + t] = this[i];
                        for (i = t - 1; 0 <= i; --i) e[i] = 0;
                        e.t = this.t + t, e.s = this.s
                    }, m.prototype.drShiftTo = function(t, e) {
                        for (var i = t; i < this.t; ++i) e[i - t] = this[i];
                        e.t = Math.max(this.t - t, 0), e.s = this.s
                    }, m.prototype.lShiftTo = function(t, e) {
                        for (var i = t % this.DB, r = this.DB - i, n = (1 << r) - 1, s = Math.floor(t / this.DB), o = this.s << i & this.DM, a = this.t - 1; 0 <= a; --a) e[a + s + 1] = this[a] >> r | o, o = (this[a] & n) << i;
                        for (a = s - 1; 0 <= a; --a) e[a] = 0;
                        e[s] = o, e.t = this.t + s + 1, e.s = this.s, e.clamp()
                    }, m.prototype.rShiftTo = function(t, e) {
                        e.s = this.s;
                        var i = Math.floor(t / this.DB);
                        if (i >= this.t) e.t = 0;
                        else {
                            var r = t % this.DB,
                                n = this.DB - r,
                                s = (1 << r) - 1;
                            e[0] = this[i] >> r;
                            for (var o = i + 1; o < this.t; ++o) e[o - i - 1] |= (this[o] & s) << n, e[o - i] = this[o] >> r;
                            0 < r && (e[this.t - i - 1] |= (this.s & s) << n), e.t = this.t - i, e.clamp()
                        }
                    }, m.prototype.subTo = function(t, e) {
                        for (var i = 0, r = 0, n = Math.min(t.t, this.t); i < n;) r += this[i] - t[i], e[i++] = r & this.DM, r >>= this.DB;
                        if (t.t < this.t) {
                            for (r -= t.s; i < this.t;) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                            r += this.s
                        } else {
                            for (r += this.s; i < t.t;) r -= t[i], e[i++] = r & this.DM, r >>= this.DB;
                            r -= t.s
                        }
                        e.s = r < 0 ? -1 : 0, r < -1 ? e[i++] = this.DV + r : 0 < r && (e[i++] = r), e.t = i, e.clamp()
                    }, m.prototype.multiplyTo = function(t, e) {
                        var i = this.abs(),
                            r = t.abs(),
                            n = i.t;
                        for (e.t = n + r.t; 0 <= --n;) e[n] = 0;
                        for (n = 0; n < r.t; ++n) e[n + i.t] = i.am(0, r[n], e, n, 0, i.t);
                        e.s = 0, e.clamp(), this.s != t.s && m.ZERO.subTo(e, e)
                    }, m.prototype.squareTo = function(t) {
                        for (var e = this.abs(), i = t.t = 2 * e.t; 0 <= --i;) t[i] = 0;
                        for (i = 0; i < e.t - 1; ++i) {
                            var r = e.am(i, e[i], t, 2 * i, 0, 1);
                            (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, r, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV, t[i + e.t + 1] = 1)
                        }
                        0 < t.t && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)), t.s = 0, t.clamp()
                    }, m.prototype.divRemTo = function(t, e, i) {
                        var r = t.abs();
                        if (!(r.t <= 0)) {
                            var n = this.abs();
                            if (n.t < r.t) return null != e && e.fromInt(0), void(null != i && this.copyTo(i));
                            null == i && (i = C());
                            var s = C(),
                                o = this.s,
                                a = t.s,
                                h = this.DB - H(r[r.t - 1]);
                            0 < h ? (r.lShiftTo(h, s), n.lShiftTo(h, i)) : (r.copyTo(s), n.copyTo(i));
                            var u = s.t,
                                c = s[u - 1];
                            if (0 != c) {
                                var f = c * (1 << this.F1) + (1 < u ? s[u - 2] >> this.F2 : 0),
                                    l = this.FV / f,
                                    p = (1 << this.F1) / f,
                                    d = 1 << this.F2,
                                    g = i.t,
                                    v = g - u,
                                    _ = null == e ? C() : e;
                                for (s.dlShiftTo(v, _), 0 <= i.compareTo(_) && (i[i.t++] = 1, i.subTo(_, i)), m.ONE.dlShiftTo(u, _), _.subTo(s, s); s.t < u;) s[s.t++] = 0;
                                for (; 0 <= --v;) {
                                    var y = i[--g] == c ? this.DM : Math.floor(i[g] * l + (i[g - 1] + d) * p);
                                    if ((i[g] += s.am(0, y, i, v, 0, u)) < y)
                                        for (s.dlShiftTo(v, _), i.subTo(_, i); i[g] < --y;) i.subTo(_, i)
                                }
                                null != e && (i.drShiftTo(u, e), o != a && m.ZERO.subTo(e, e)), i.t = u, i.clamp(), 0 < h && i.rShiftTo(h, i), o < 0 && m.ZERO.subTo(i, i)
                            }
                        }
                    }, m.prototype.invDigit = function() {
                        if (this.t < 1) return 0;
                        var t = this[0];
                        if (0 == (1 & t)) return 0;
                        var e = 3 & t;
                        return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e
                    }, m.prototype.isEven = function() {
                        return 0 == (0 < this.t ? 1 & this[0] : this.s)
                    }, m.prototype.exp = function(t, e) {
                        if (4294967295 < t || t < 1) return m.ONE;
                        var i = C(),
                            r = C(),
                            n = e.convert(this),
                            s = H(t) - 1;
                        for (n.copyTo(i); 0 <= --s;)
                            if (e.sqrTo(i, r), 0 < (t & 1 << s)) e.mulTo(r, n, i);
                            else {
                                var o = i;
                                i = r, r = o
                            }
                        return e.revert(i)
                    }, m.prototype.chunkSize = function(t) {
                        return Math.floor(Math.LN2 * this.DB / Math.log(t))
                    }, m.prototype.toRadix = function(t) {
                        if (null == t && (t = 10), 0 == this.signum() || t < 2 || 36 < t) return "0";
                        var e = this.chunkSize(t),
                            i = Math.pow(t, e),
                            r = U(i),
                            n = C(),
                            s = C(),
                            o = "";
                        for (this.divRemTo(r, n, s); 0 < n.signum();) o = (i + s.intValue()).toString(t).substr(1) + o, n.divRemTo(r, n, s);
                        return s.intValue().toString(t) + o
                    }, m.prototype.fromRadix = function(t, e) {
                        this.fromInt(0), null == e && (e = 10);
                        for (var i = this.chunkSize(e), r = Math.pow(e, i), n = !1, s = 0, o = 0, a = 0; a < t.length; ++a) {
                            var h = j(t, a);
                            h < 0 ? "-" == t.charAt(a) && 0 == this.signum() && (n = !0) : (o = e * o + h, ++s >= i && (this.dMultiply(r), this.dAddOffset(o, 0), o = s = 0))
                        }
                        0 < s && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(o, 0)), n && m.ZERO.subTo(this, this)
                    }, m.prototype.fromNumber = function(t, e, i) {
                        if ("number" == typeof e)
                            if (t < 2) this.fromInt(1);
                            else
                                for (this.fromNumber(t, i), this.testBit(t - 1) || this.bitwiseTo(m.ONE.shiftLeft(t - 1), u, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e);) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(m.ONE.shiftLeft(t - 1), this);
                        else {
                            var r = [],
                                n = 7 & t;
                            r.length = 1 + (t >> 3), e.nextBytes(r), 0 < n ? r[0] &= (1 << n) - 1 : r[0] = 0, this.fromString(r, 256)
                        }
                    }, m.prototype.bitwiseTo = function(t, e, i) {
                        var r, n, s = Math.min(t.t, this.t);
                        for (r = 0; r < s; ++r) i[r] = e(this[r], t[r]);
                        if (t.t < this.t) {
                            for (n = t.s & this.DM, r = s; r < this.t; ++r) i[r] = e(this[r], n);
                            i.t = this.t
                        } else {
                            for (n = this.s & this.DM, r = s; r < t.t; ++r) i[r] = e(n, t[r]);
                            i.t = t.t
                        }
                        i.s = e(this.s, t.s), i.clamp()
                    }, m.prototype.changeBit = function(t, e) {
                        var i = m.ONE.shiftLeft(t);
                        return this.bitwiseTo(i, e, i), i
                    }, m.prototype.addTo = function(t, e) {
                        for (var i = 0, r = 0, n = Math.min(t.t, this.t); i < n;) r += this[i] + t[i], e[i++] = r & this.DM, r >>= this.DB;
                        if (t.t < this.t) {
                            for (r += t.s; i < this.t;) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                            r += this.s
                        } else {
                            for (r += this.s; i < t.t;) r += t[i], e[i++] = r & this.DM, r >>= this.DB;
                            r += t.s
                        }
                        e.s = r < 0 ? -1 : 0, 0 < r ? e[i++] = r : r < -1 && (e[i++] = this.DV + r), e.t = i, e.clamp()
                    }, m.prototype.dMultiply = function(t) {
                        this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp()
                    }, m.prototype.dAddOffset = function(t, e) {
                        if (0 != t) {
                            for (; this.t <= e;) this[this.t++] = 0;
                            for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e]
                        }
                    }, m.prototype.multiplyLowerTo = function(t, e, i) {
                        var r = Math.min(this.t + t.t, e);
                        for (i.s = 0, i.t = r; 0 < r;) i[--r] = 0;
                        for (var n = i.t - this.t; r < n; ++r) i[r + this.t] = this.am(0, t[r], i, r, 0, this.t);
                        for (n = Math.min(t.t, e); r < n; ++r) this.am(0, t[r], i, r, 0, e - r);
                        i.clamp()
                    }, m.prototype.multiplyUpperTo = function(t, e, i) {
                        --e;
                        var r = i.t = this.t + t.t - e;
                        for (i.s = 0; 0 <= --r;) i[r] = 0;
                        for (r = Math.max(e - this.t, 0); r < t.t; ++r) i[this.t + r - e] = this.am(e - r, t[r], i, 0, 0, this.t + r - e);
                        i.clamp(), i.drShiftTo(1, i)
                    }, m.prototype.modInt = function(t) {
                        if (t <= 0) return 0;
                        var e = this.DV % t,
                            i = this.s < 0 ? t - 1 : 0;
                        if (0 < this.t)
                            if (0 == e) i = this[0] % t;
                            else
                                for (var r = this.t - 1; 0 <= r; --r) i = (e * i + this[r]) % t;
                        return i
                    }, m.prototype.millerRabin = function(t) {
                        var e = this.subtract(m.ONE),
                            i = e.getLowestSetBit();
                        if (i <= 0) return !1;
                        var r = e.shiftRight(i);
                        R.length < (t = t + 1 >> 1) && (t = R.length);
                        for (var n = C(), s = 0; s < t; ++s) {
                            n.fromInt(R[Math.floor(Math.random() * R.length)]);
                            var o = n.modPow(r, this);
                            if (0 != o.compareTo(m.ONE) && 0 != o.compareTo(e)) {
                                for (var a = 1; a++ < i && 0 != o.compareTo(e);)
                                    if (0 == (o = o.modPowInt(2, this)).compareTo(m.ONE)) return !1;
                                if (0 != o.compareTo(e)) return !1
                            }
                        }
                        return !0
                    }, m.prototype.square = function() {
                        var t = C();
                        return this.squareTo(t), t
                    }, m.prototype.gcda = function(t, e) {
                        var i = this.s < 0 ? this.negate() : this.clone(),
                            r = t.s < 0 ? t.negate() : t.clone();
                        if (i.compareTo(r) < 0) {
                            var n = i;
                            i = r, r = n
                        }
                        var s = i.getLowestSetBit(),
                            o = r.getLowestSetBit();
                        if (o < 0) e(i);
                        else {
                            s < o && (o = s), 0 < o && (i.rShiftTo(o, i), r.rShiftTo(o, r));
                            var a = function() {
                                0 < (s = i.getLowestSetBit()) && i.rShiftTo(s, i), 0 < (s = r.getLowestSetBit()) && r.rShiftTo(s, r), 0 <= i.compareTo(r) ? (i.subTo(r, i), i.rShiftTo(1, i)) : (r.subTo(i, r), r.rShiftTo(1, r)), 0 < i.signum() ? setTimeout(a, 0) : (0 < o && r.lShiftTo(o, r), setTimeout((function() {
                                    e(r)
                                }), 0))
                            };
                            setTimeout(a, 10)
                        }
                    }, m.prototype.fromNumberAsync = function(t, e, i, r) {
                        if ("number" == typeof e)
                            if (t < 2) this.fromInt(1);
                            else {
                                this.fromNumber(t, i), this.testBit(t - 1) || this.bitwiseTo(m.ONE.shiftLeft(t - 1), u, this), this.isEven() && this.dAddOffset(1, 0);
                                var n = this,
                                    s = function() {
                                        n.dAddOffset(2, 0), n.bitLength() > t && n.subTo(m.ONE.shiftLeft(t - 1), n), n.isProbablePrime(e) ? setTimeout((function() {
                                            r()
                                        }), 0) : setTimeout(s, 0)
                                    };
                                setTimeout(s, 0)
                            }
                        else {
                            var o = [],
                                a = 7 & t;
                            o.length = 1 + (t >> 3), e.nextBytes(o), 0 < a ? o[0] &= (1 << a) - 1 : o[0] = 0, this.fromString(o, 256)
                        }
                    }, m
                })(),
                A = (function() {
                    function t() {}
                    return t.prototype.convert = function(t) {
                        return t
                    }, t.prototype.revert = function(t) {
                        return t
                    }, t.prototype.mulTo = function(t, e, i) {
                        t.multiplyTo(e, i)
                    }, t.prototype.sqrTo = function(t, e) {
                        t.squareTo(e)
                    }, t
                })(),
                x = (function() {
                    function t(t) {
                        this.m = t
                    }
                    return t.prototype.convert = function(t) {
                        return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t
                    }, t.prototype.revert = function(t) {
                        return t
                    }, t.prototype.reduce = function(t) {
                        t.divRemTo(this.m, null, t)
                    }, t.prototype.mulTo = function(t, e, i) {
                        t.multiplyTo(e, i), this.reduce(i)
                    }, t.prototype.sqrTo = function(t, e) {
                        t.squareTo(e), this.reduce(e)
                    }, t
                })(),
                P = (function() {
                    function t(t) {
                        this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
                    }
                    return t.prototype.convert = function(t) {
                        var e = C();
                        return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && 0 < e.compareTo(I.ZERO) && this.m.subTo(e, e), e
                    }, t.prototype.revert = function(t) {
                        var e = C();
                        return t.copyTo(e), this.reduce(e), e
                    }, t.prototype.reduce = function(t) {
                        for (; t.t <= this.mt2;) t[t.t++] = 0;
                        for (var e = 0; e < this.m.t; ++e) {
                            var i = 32767 & t[e],
                                r = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                            for (t[i = e + this.m.t] += this.m.am(0, r, t, e, 0, this.m.t); t[i] >= t.DV;) t[i] -= t.DV, t[++i]++
                        }
                        t.clamp(), t.drShiftTo(this.m.t, t), 0 <= t.compareTo(this.m) && t.subTo(this.m, t)
                    }, t.prototype.mulTo = function(t, e, i) {
                        t.multiplyTo(e, i), this.reduce(i)
                    }, t.prototype.sqrTo = function(t, e) {
                        t.squareTo(e), this.reduce(e)
                    }, t
                })(),
                M = (function() {
                    function t(t) {
                        this.m = t, this.r2 = C(), this.q3 = C(), I.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t)
                    }
                    return t.prototype.convert = function(t) {
                        if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
                        if (t.compareTo(this.m) < 0) return t;
                        var e = C();
                        return t.copyTo(e), this.reduce(e), e
                    }, t.prototype.revert = function(t) {
                        return t
                    }, t.prototype.reduce = function(t) {
                        for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
                        for (t.subTo(this.r2, t); 0 <= t.compareTo(this.m);) t.subTo(this.m, t)
                    }, t.prototype.mulTo = function(t, e, i) {
                        t.multiplyTo(e, i), this.reduce(i)
                    }, t.prototype.sqrTo = function(t, e) {
                        t.squareTo(e), this.reduce(e)
                    }, t
                })();

            function C() {
                return new I(null)
            }

            function V(t, e) {
                return new I(t, e)
            }
            S = "Microsoft Internet Explorer" == navigator.appName ? (I.prototype.am = function(t, e, i, r, n, s) {
                for (var o = 32767 & e, a = e >> 15; 0 <= --s;) {
                    var h = 32767 & this[t],
                        u = this[t++] >> 15,
                        c = a * h + u * o;
                    n = ((h = o * h + ((32767 & c) << 15) + i[r] + (1073741823 & n)) >>> 30) + (c >>> 15) + a * u + (n >>> 30), i[r++] = 1073741823 & h
                }
                return n
            }, 30) : "Netscape" != navigator.appName ? (I.prototype.am = function(t, e, i, r, n, s) {
                for (; 0 <= --s;) {
                    var o = e * this[t++] + i[r] + n;
                    n = Math.floor(o / 67108864), i[r++] = 67108863 & o
                }
                return n
            }, 26) : (I.prototype.am = function(t, e, i, r, n, s) {
                for (var o = 16383 & e, a = e >> 14; 0 <= --s;) {
                    var h = 16383 & this[t],
                        u = this[t++] >> 14,
                        c = a * h + u * o;
                    n = ((h = o * h + ((16383 & c) << 14) + i[r] + n) >> 28) + (c >> 14) + a * u, i[r++] = 268435455 & h
                }
                return n
            }, 28), I.prototype.DB = S, I.prototype.DM = (1 << S) - 1, I.prototype.DV = 1 << S;
            I.prototype.FV = Math.pow(2, 52), I.prototype.F1 = 52 - S, I.prototype.F2 = 2 * S - 52;
            var N, L, q = [];
            for (N = "0".charCodeAt(0), L = 0; L <= 9; ++L) q[N++] = L;
            for (N = "a".charCodeAt(0), L = 10; L < 36; ++L) q[N++] = L;
            for (N = "A".charCodeAt(0), L = 10; L < 36; ++L) q[N++] = L;

            function j(t, e) {
                var i = q[t.charCodeAt(e)];
                return null == i ? -1 : i
            }

            function U(t) {
                var e = C();
                return e.fromInt(t), e
            }

            function H(t) {
                var e, i = 1;
                return 0 != (e = t >>> 16) && (t = e, i += 16), 0 != (e = t >> 8) && (t = e, i += 8), 0 != (e = t >> 4) && (t = e, i += 4), 0 != (e = t >> 2) && (t = e, i += 2), 0 != (e = t >> 1) && (t = e, i += 1), i
            }
            I.ZERO = U(0), I.ONE = U(1);
            var K = (function() {
                function t() {
                    this.i = 0, this.j = 0, this.S = []
                }
                return t.prototype.init = function(t) {
                    var e, i, r;
                    for (e = 0; e < 256; ++e) this.S[e] = e;
                    for (e = i = 0; e < 256; ++e) i = i + this.S[e] + t[e % t.length] & 255, r = this.S[e], this.S[e] = this.S[i], this.S[i] = r;
                    this.i = 0, this.j = 0
                }, t.prototype.next = function() {
                    var t;
                    return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255]
                }, t
            })();
            var F, k, z = 256,
                G = null;
            if (null == G) {
                G = [];
                var W = void(k = 0);
                if (window.crypto && window.crypto.getRandomValues) {
                    var Z = new Uint32Array(256);
                    for (window.crypto.getRandomValues(Z), W = 0; W < Z.length; ++W) G[k++] = 255 & Z[W]
                }
                var Y = function(t) {
                    if (this.count = this.count || 0, 256 <= this.count || z <= k) window.removeEventListener ? window.removeEventListener("mousemove", Y, !1) : window.detachEvent && window.detachEvent("onmousemove", Y);
                    else try {
                        var e = t.x + t.y;
                        G[k++] = 255 & e, this.count += 1
                    } catch (t) {}
                };
                window.addEventListener ? window.addEventListener("mousemove", Y, !1) : window.attachEvent && window.attachEvent("onmousemove", Y)
            }

            function $() {
                if (null == F) {
                    for (F = new K; k < z;) {
                        var t = Math.floor(65536 * Math.random());
                        G[k++] = 255 & t
                    }
                    for (F.init(G), k = 0; k < G.length; ++k) G[k] = 0;
                    k = 0
                }
                return F.next()
            }
            var Q = (function() {
                function t() {}
                return t.prototype.nextBytes = function(t) {
                    for (var e = 0; e < t.length; ++e) t[e] = $()
                }, t
            })();
            var J = (function() {
                function t() {
                    this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
                }
                return t.prototype.doPublic = function(t) {
                    return t.modPowInt(this.e, this.n)
                }, t.prototype.doPrivate = function(t) {
                    if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
                    for (var e = t.mod(this.p).modPow(this.dmp1, this.p), i = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(i) < 0;) e = e.add(this.p);
                    return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)
                }, t.prototype.setPublic = function(t, e) {
                    null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = V(t, 16), this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
                }, t.prototype.encrypt = function(t) {
                    var e = (function(t, e) {
                        if (e < t.length + 11) return console.error("Message too long for RSA"), null;
                        for (var i = [], r = t.length - 1; 0 <= r && 0 < e;) {
                            var n = t.charCodeAt(r--);
                            n < 128 ? i[--e] = n : 127 < n && n < 2048 ? (i[--e] = 63 & n | 128, i[--e] = n >> 6 | 192) : (i[--e] = 63 & n | 128, i[--e] = n >> 6 & 63 | 128, i[--e] = n >> 12 | 224)
                        }
                        i[--e] = 0;
                        for (var s = new Q, o = []; 2 < e;) {
                            for (o[0] = 0; 0 == o[0];) s.nextBytes(o);
                            i[--e] = o[0]
                        }
                        return i[--e] = 2, i[--e] = 0, new I(i)
                    })(t, this.n.bitLength() + 7 >> 3);
                    if (null == e) return null;
                    var i = this.doPublic(e);
                    if (null == i) return null;
                    var r = i.toString(16);
                    return 0 == (1 & r.length) ? r : "0" + r
                }, t.prototype.setPrivate = function(t, e, i) {
                    null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = V(t, 16), this.e = parseInt(e, 16), this.d = V(i, 16)) : console.error("Invalid RSA private key")
                }, t.prototype.setPrivateEx = function(t, e, i, r, n, s, o, a) {
                    null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = V(t, 16), this.e = parseInt(e, 16), this.d = V(i, 16), this.p = V(r, 16), this.q = V(n, 16), this.dmp1 = V(s, 16), this.dmq1 = V(o, 16), this.coeff = V(a, 16)) : console.error("Invalid RSA private key")
                }, t.prototype.generate = function(t, e) {
                    var i = new Q,
                        r = t >> 1;
                    this.e = parseInt(e, 16);
                    for (var n = new I(e, 16);;) {
                        for (; this.p = new I(t - r, 1, i), 0 != this.p.subtract(I.ONE).gcd(n).compareTo(I.ONE) || !this.p.isProbablePrime(10););
                        for (; this.q = new I(r, 1, i), 0 != this.q.subtract(I.ONE).gcd(n).compareTo(I.ONE) || !this.q.isProbablePrime(10););
                        if (this.p.compareTo(this.q) <= 0) {
                            var s = this.p;
                            this.p = this.q, this.q = s
                        }
                        var o = this.p.subtract(I.ONE),
                            a = this.q.subtract(I.ONE),
                            h = o.multiply(a);
                        if (0 == h.gcd(n).compareTo(I.ONE)) {
                            this.n = this.p.multiply(this.q), this.d = n.modInverse(h), this.dmp1 = this.d.mod(o), this.dmq1 = this.d.mod(a), this.coeff = this.q.modInverse(this.p);
                            break
                        }
                    }
                }, t.prototype.decrypt = function(t) {
                    var e = V(t, 16),
                        i = this.doPrivate(e);
                    return null == i ? null : (function(t, e) {
                        var i = t.toByteArray(),
                            r = 0;
                        for (; r < i.length && 0 == i[r];) ++r;
                        if (i.length - r != e - 1 || 2 != i[r]) return null;
                        ++r;
                        for (; 0 != i[r];)
                            if (++r >= i.length) return null;
                        var n = "";
                        for (; ++r < i.length;) {
                            var s = 255 & i[r];
                            s < 128 ? n += String.fromCharCode(s) : 191 < s && s < 224 ? (n += String.fromCharCode((31 & s) << 6 | 63 & i[r + 1]), ++r) : (n += String.fromCharCode((15 & s) << 12 | (63 & i[r + 1]) << 6 | 63 & i[r + 2]), r += 2)
                        }
                        return n
                    })(i, this.n.bitLength() + 7 >> 3)
                }, t.prototype.generateAsync = function(t, e, n) {
                    var s = new Q,
                        o = t >> 1;
                    this.e = parseInt(e, 16);
                    var a = new I(e, 16),
                        h = this,
                        u = function() {
                            var e = function() {
                                    if (h.p.compareTo(h.q) <= 0) {
                                        var t = h.p;
                                        h.p = h.q, h.q = t
                                    }
                                    var e = h.p.subtract(I.ONE),
                                        i = h.q.subtract(I.ONE),
                                        r = e.multiply(i);
                                    0 == r.gcd(a).compareTo(I.ONE) ? (h.n = h.p.multiply(h.q), h.d = a.modInverse(r), h.dmp1 = h.d.mod(e), h.dmq1 = h.d.mod(i), h.coeff = h.q.modInverse(h.p), setTimeout((function() {
                                        n()
                                    }), 0)) : setTimeout(u, 0)
                                },
                                i = function() {
                                    h.q = C(), h.q.fromNumberAsync(o, 1, s, (function() {
                                        h.q.subtract(I.ONE).gcda(a, (function(t) {
                                            0 == t.compareTo(I.ONE) && h.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(i, 0)
                                        }))
                                    }))
                                },
                                r = function() {
                                    h.p = C(), h.p.fromNumberAsync(t - o, 1, s, (function() {
                                        h.p.subtract(I.ONE).gcda(a, (function(t) {
                                            0 == t.compareTo(I.ONE) && h.p.isProbablePrime(10) ? setTimeout(i, 0) : setTimeout(r, 0)
                                        }))
                                    }))
                                };
                            setTimeout(r, 0)
                        };
                    setTimeout(u, 0)
                }, t.prototype.sign = function(t, e, i) {
                    var r = (function(t, e) {
                        if (e < t.length + 22) return console.error("Message too long for RSA"), null;
                        for (var i = e - t.length - 6, r = "", n = 0; n < i; n += 2) r += "ff";
                        return V("0001" + r + "00" + t, 16)
                    })(function(t) {
                        return X[t] || ""
                    }(i) + e(t).toString(), this.n.bitLength() / 4);
                    if (null == r) return null;
                    var n = this.doPrivate(r);
                    if (null == n) return null;
                    var s = n.toString(16);
                    return 0 == (1 & s.length) ? s : "0" + s
                }, t.prototype.verify = function(t, e, i) {
                    var r = V(e, 16),
                        n = this.doPublic(r);
                    return null == n ? null : (function(t) {
                        for (var e in X)
                            if (X.hasOwnProperty(e)) {
                                var i = X[e],
                                    r = i.length;
                                if (t.substr(0, r) == i) return t.substr(r)
                            }
                        return t
                    })(n.toString(16).replace(/^1f+00/, "")) == i(t).toString()
                }, t
            })();
            var X = {
                md2: "3020300c06082a864886f70d020205000410",
                md5: "3020300c06082a864886f70d020505000410",
                sha1: "3021300906052b0e03021a05000414",
                sha224: "302d300d06096086480165030402040500041c",
                sha256: "3031300d060960864801650304020105000420",
                sha384: "3041300d060960864801650304020205000430",
                sha512: "3051300d060960864801650304020305000440",
                ripemd160: "3021300906052b2403020105000414"
            };
            var tt = {};
            tt.lang = {
                extend: function(t, e, i) {
                    if (!e || !t) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
                    var r = function() {};
                    if (r.prototype = e.prototype, t.prototype = new r, (t.prototype.constructor = t).superclass = e.prototype, e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e), i) {
                        var n;
                        for (n in i) t.prototype[n] = i[n];
                        var s = function() {},
                            o = ["toString", "valueOf"];
                        try {
                            /MSIE/.test(navigator.userAgent) && (s = function(t, e) {
                                for (n = 0; n < o.length; n += 1) {
                                    var i = o[n],
                                        r = e[i];
                                    "function" == typeof r && r != Object.prototype[i] && (t[i] = r)
                                }
                            })
                        } catch (t) {}
                        s(t.prototype, i)
                    }
                }
            };
            var et = {};
            void 0 !== et.asn1 && et.asn1 || (et.asn1 = {}), et.asn1.ASN1Util = new function() {
                this.integerToByteHex = function(t) {
                    var e = t.toString(16);
                    return e.length % 2 == 1 && (e = "0" + e), e
                }, this.bigIntToMinTwosComplementsHex = function(t) {
                    var e = t.toString(16);
                    if ("-" != e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
                    else {
                        var i = e.substr(1).length;
                        i % 2 == 1 ? i += 1 : e.match(/^[0-7]/) || (i += 2);
                        for (var r = "", n = 0; n < i; n++) r += "f";
                        e = new I(r, 16).xor(t).add(I.ONE).toString(16).replace(/^-/, "")
                    }
                    return e
                }, this.getPEMStringFromHex = function(t, e) {
                    return hextopem(t, e)
                }, this.newObject = function(t) {
                    var e = et.asn1,
                        i = e.DERBoolean,
                        r = e.DERInteger,
                        n = e.DERBitString,
                        s = e.DEROctetString,
                        o = e.DERNull,
                        a = e.DERObjectIdentifier,
                        h = e.DEREnumerated,
                        u = e.DERUTF8String,
                        c = e.DERNumericString,
                        f = e.DERPrintableString,
                        l = e.DERTeletexString,
                        p = e.DERIA5String,
                        d = e.DERUTCTime,
                        g = e.DERGeneralizedTime,
                        v = e.DERSequence,
                        _ = e.DERSet,
                        y = e.DERTaggedObject,
                        m = e.ASN1Util.newObject,
                        b = Object.keys(t);
                    if (1 != b.length) throw "key of param shall be only one.";
                    var E = b[0];
                    if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + E + ":")) throw "undefined key: " + E;
                    if ("bool" == E) return new i(t[E]);
                    if ("int" == E) return new r(t[E]);
                    if ("bitstr" == E) return new n(t[E]);
                    if ("octstr" == E) return new s(t[E]);
                    if ("null" == E) return new o(t[E]);
                    if ("oid" == E) return new a(t[E]);
                    if ("enum" == E) return new h(t[E]);
                    if ("utf8str" == E) return new u(t[E]);
                    if ("numstr" == E) return new c(t[E]);
                    if ("prnstr" == E) return new f(t[E]);
                    if ("telstr" == E) return new l(t[E]);
                    if ("ia5str" == E) return new p(t[E]);
                    if ("utctime" == E) return new d(t[E]);
                    if ("gentime" == E) return new g(t[E]);
                    if ("seq" == E) {
                        for (var T = t[E], S = [], D = 0; D < T.length; D++) {
                            var w = m(T[D]);
                            S.push(w)
                        }
                        return new v({
                            array: S
                        })
                    }
                    if ("set" == E) {
                        for (T = t[E], S = [], D = 0; D < T.length; D++) {
                            w = m(T[D]);
                            S.push(w)
                        }
                        return new _({
                            array: S
                        })
                    }
                    if ("tag" == E) {
                        var B = t[E];
                        if ("[object Array]" === Object.prototype.toString.call(B) && 3 == B.length) {
                            var R = m(B[2]);
                            return new y({
                                tag: B[0],
                                explicit: B[1],
                                obj: R
                            })
                        }
                        var O = {};
                        if (void 0 !== B.explicit && (O.explicit = B.explicit), void 0 !== B.tag && (O.tag = B.tag), void 0 === B.obj) throw "obj shall be specified for 'tag'.";
                        return O.obj = m(B.obj), new y(O)
                    }
                }, this.jsonToASN1HEX = function(t) {
                    return this.newObject(t).getEncodedHex()
                }
            }, et.asn1.ASN1Util.oidHexToInt = function(t) {
                for (var e = "", i = parseInt(t.substr(0, 2), 16), r = (e = Math.floor(i / 40) + "." + i % 40, ""), n = 2; n < t.length; n += 2) {
                    var s = ("00000000" + parseInt(t.substr(n, 2), 16).toString(2)).slice(-8);
                    if (r += s.substr(1, 7), "0" == s.substr(0, 1)) e = e + "." + new I(r, 2).toString(10), r = ""
                }
                return e
            }, et.asn1.ASN1Util.oidIntToHex = function(t) {
                var a = function(t) {
                        var e = t.toString(16);
                        return 1 == e.length && (e = "0" + e), e
                    },
                    e = function(t) {
                        var e = "",
                            i = new I(t, 10).toString(2),
                            r = 7 - i.length % 7;
                        7 == r && (r = 0);
                        for (var n = "", s = 0; s < r; s++) n += "0";
                        i = n + i;
                        for (s = 0; s < i.length - 1; s += 7) {
                            var o = i.substr(s, 7);
                            s != i.length - 7 && (o = "1" + o), e += a(parseInt(o, 2))
                        }
                        return e
                    };
                if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                var i = "",
                    r = t.split("."),
                    n = 40 * parseInt(r[0]) + parseInt(r[1]);
                i += a(n), r.splice(0, 2);
                for (var s = 0; s < r.length; s++) i += e(r[s]);
                return i
            }, et.asn1.ASN1Object = function() {
                this.getLengthHexFromValue = function() {
                    if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
                    if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                    var t = this.hV.length / 2,
                        e = t.toString(16);
                    if (e.length % 2 == 1 && (e = "0" + e), t < 128) return e;
                    var i = e.length / 2;
                    if (15 < i) throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
                    return (128 + i).toString(16) + e
                }, this.getEncodedHex = function() {
                    return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV
                }, this.getValueHex = function() {
                    return this.getEncodedHex(), this.hV
                }, this.getFreshValueHex = function() {
                    return ""
                }
            }, et.asn1.DERAbstractString = function(t) {
                et.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() {
                    return this.s
                }, this.setString = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(this.s)
                }, this.setStringHex = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && ("string" == typeof t ? this.setString(t) : void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex))
            }, tt.lang.extend(et.asn1.DERAbstractString, et.asn1.ASN1Object), et.asn1.DERAbstractTime = function(t) {
                et.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(t) {
                    return utc = t.getTime() + 6e4 * t.getTimezoneOffset(), new Date(utc)
                }, this.formatDate = function(t, e, i) {
                    var r = this.zeroPadding,
                        n = this.localDateToUTC(t),
                        s = String(n.getFullYear());
                    "utc" == e && (s = s.substr(2, 2));
                    var o = s + r(String(n.getMonth() + 1), 2) + r(String(n.getDate()), 2) + r(String(n.getHours()), 2) + r(String(n.getMinutes()), 2) + r(String(n.getSeconds()), 2);
                    if (!0 === i) {
                        var a = n.getMilliseconds();
                        if (0 != a) {
                            var h = r(String(a), 3);
                            o = o + "." + (h = h.replace(/[0]+$/, ""))
                        }
                    }
                    return o + "Z"
                }, this.zeroPadding = function(t, e) {
                    return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
                }, this.getString = function() {
                    return this.s
                }, this.setString = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(t)
                }, this.setByDateValue = function(t, e, i, r, n, s) {
                    var o = new Date(Date.UTC(t, e - 1, i, r, n, s, 0));
                    this.setByDate(o)
                }, this.getFreshValueHex = function() {
                    return this.hV
                }
            }, tt.lang.extend(et.asn1.DERAbstractTime, et.asn1.ASN1Object), et.asn1.DERAbstractStructured = function(t) {
                et.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(t) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array = t
                }, this.appendASN1Object = function(t) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array.push(t)
                }, this.asn1Array = new Array, void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array)
            }, tt.lang.extend(et.asn1.DERAbstractStructured, et.asn1.ASN1Object), et.asn1.DERBoolean = function() {
                et.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff"
            }, tt.lang.extend(et.asn1.DERBoolean, et.asn1.ASN1Object), et.asn1.DERInteger = function(t) {
                et.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = et.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                }, this.setByInteger = function(t) {
                    var e = new I(String(t), 10);
                    this.setByBigInteger(e)
                }, this.setValueHex = function(t) {
                    this.hV = t
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
            }, tt.lang.extend(et.asn1.DERInteger, et.asn1.ASN1Object), et.asn1.DERBitString = function(t) {
                if (void 0 !== t && void 0 !== t.obj) {
                    var e = et.asn1.ASN1Util.newObject(t.obj);
                    t.hex = "00" + e.getEncodedHex()
                }
                et.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = t
                }, this.setUnusedBitsAndHexValue = function(t, e) {
                    if (t < 0 || 7 < t) throw "unused bits shall be from 0 to 7: u = " + t;
                    var i = "0" + t;
                    this.hTLV = null, this.isModified = !0, this.hV = i + e
                }, this.setByBinaryString = function(t) {
                    var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
                    8 == e && (e = 0);
                    for (var i = 0; i <= e; i++) t += "0";
                    var r = "";
                    for (i = 0; i < t.length - 1; i += 8) {
                        var n = t.substr(i, 8),
                            s = parseInt(n, 2).toString(16);
                        1 == s.length && (s = "0" + s), r += s
                    }
                    this.hTLV = null, this.isModified = !0, this.hV = "0" + e + r
                }, this.setByBooleanArray = function(t) {
                    for (var e = "", i = 0; i < t.length; i++) 1 == t[i] ? e += "1" : e += "0";
                    this.setByBinaryString(e)
                }, this.newFalseArray = function(t) {
                    for (var e = new Array(t), i = 0; i < t; i++) e[i] = !1;
                    return e
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array))
            }, tt.lang.extend(et.asn1.DERBitString, et.asn1.ASN1Object), et.asn1.DEROctetString = function(t) {
                if (void 0 !== t && void 0 !== t.obj) {
                    var e = et.asn1.ASN1Util.newObject(t.obj);
                    t.hex = e.getEncodedHex()
                }
                et.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04"
            }, tt.lang.extend(et.asn1.DEROctetString, et.asn1.DERAbstractString), et.asn1.DERNull = function() {
                et.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500"
            }, tt.lang.extend(et.asn1.DERNull, et.asn1.ASN1Object), et.asn1.DERObjectIdentifier = function(t) {
                var a = function(t) {
                        var e = t.toString(16);
                        return 1 == e.length && (e = "0" + e), e
                    },
                    s = function(t) {
                        var e = "",
                            i = new I(t, 10).toString(2),
                            r = 7 - i.length % 7;
                        7 == r && (r = 0);
                        for (var n = "", s = 0; s < r; s++) n += "0";
                        i = n + i;
                        for (s = 0; s < i.length - 1; s += 7) {
                            var o = i.substr(s, 7);
                            s != i.length - 7 && (o = "1" + o), e += a(parseInt(o, 2))
                        }
                        return e
                    };
                et.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
                }, this.setValueOidString = function(t) {
                    if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                    var e = "",
                        i = t.split("."),
                        r = 40 * parseInt(i[0]) + parseInt(i[1]);
                    e += a(r), i.splice(0, 2);
                    for (var n = 0; n < i.length; n++) e += s(i[n]);
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = e
                }, this.setValueName = function(t) {
                    var e = et.asn1.x509.OID.name2oid(t);
                    if ("" === e) throw "DERObjectIdentifier oidName undefined: " + t;
                    this.setValueOidString(e)
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name))
            }, tt.lang.extend(et.asn1.DERObjectIdentifier, et.asn1.ASN1Object), et.asn1.DEREnumerated = function(t) {
                et.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = et.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                }, this.setByInteger = function(t) {
                    var e = new I(String(t), 10);
                    this.setByBigInteger(e)
                }, this.setValueHex = function(t) {
                    this.hV = t
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && (void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
            }, tt.lang.extend(et.asn1.DEREnumerated, et.asn1.ASN1Object), et.asn1.DERUTF8String = function(t) {
                et.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c"
            }, tt.lang.extend(et.asn1.DERUTF8String, et.asn1.DERAbstractString), et.asn1.DERNumericString = function(t) {
                et.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12"
            }, tt.lang.extend(et.asn1.DERNumericString, et.asn1.DERAbstractString), et.asn1.DERPrintableString = function(t) {
                et.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13"
            }, tt.lang.extend(et.asn1.DERPrintableString, et.asn1.DERAbstractString), et.asn1.DERTeletexString = function(t) {
                et.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14"
            }, tt.lang.extend(et.asn1.DERTeletexString, et.asn1.DERAbstractString), et.asn1.DERIA5String = function(t) {
                et.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16"
            }, tt.lang.extend(et.asn1.DERIA5String, et.asn1.DERAbstractString), et.asn1.DERUTCTime = function(t) {
                et.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.setByDate = function(t) {
                    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)
                }, this.getFreshValueHex = function() {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)), this.hV
                }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
            }, tt.lang.extend(et.asn1.DERUTCTime, et.asn1.DERAbstractTime), et.asn1.DERGeneralizedTime = function(t) {
                et.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", this.withMillis = !1, this.setByDate = function(t) {
                    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)
                }, this.getFreshValueHex = function() {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)), this.hV
                }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date), !0 === t.millis && (this.withMillis = !0))
            }, tt.lang.extend(et.asn1.DERGeneralizedTime, et.asn1.DERAbstractTime), et.asn1.DERSequence = function(t) {
                et.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function() {
                    for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                        t += this.asn1Array[e].getEncodedHex()
                    }
                    return this.hV = t, this.hV
                }
            }, tt.lang.extend(et.asn1.DERSequence, et.asn1.DERAbstractStructured), et.asn1.DERSet = function(t) {
                et.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.sortFlag = !0, this.getFreshValueHex = function() {
                    for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                        var i = this.asn1Array[e];
                        t.push(i.getEncodedHex())
                    }
                    return 1 == this.sortFlag && t.sort(), this.hV = t.join(""), this.hV
                }, void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1)
            }, tt.lang.extend(et.asn1.DERSet, et.asn1.DERAbstractStructured), et.asn1.DERTaggedObject = function(t) {
                et.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(t, e, i) {
                    this.hT = e, this.isExplicit = t, this.asn1Object = i, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = i.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1)
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag), void 0 !== t.explicit && (this.isExplicit = t.explicit), void 0 !== t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
            }, tt.lang.extend(et.asn1.DERTaggedObject, et.asn1.ASN1Object);
            var it = (function(i) {
                    function r(t) {
                        var e = i.call(this) || this;
                        return t && ("string" == typeof t ? e.parseKey(t) : (r.hasPrivateKeyProperty(t) || r.hasPublicKeyProperty(t)) && e.parsePropertiesFrom(t)), e
                    }
                    return (function(t, e) {
                        function i() {
                            this.constructor = t
                        }
                        p(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                    })(r, i), r.prototype.parseKey = function(t) {
                        try {
                            var e = 0,
                                i = 0,
                                r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? g(t) : v.unarmor(t),
                                n = w.decode(r);
                            if (3 === n.sub.length && (n = n.sub[2].sub[0]), 9 === n.sub.length) {
                                e = n.sub[1].getHexStringValue(), this.n = V(e, 16), i = n.sub[2].getHexStringValue(), this.e = parseInt(i, 16);
                                var s = n.sub[3].getHexStringValue();
                                this.d = V(s, 16);
                                var o = n.sub[4].getHexStringValue();
                                this.p = V(o, 16);
                                var a = n.sub[5].getHexStringValue();
                                this.q = V(a, 16);
                                var h = n.sub[6].getHexStringValue();
                                this.dmp1 = V(h, 16);
                                var u = n.sub[7].getHexStringValue();
                                this.dmq1 = V(u, 16);
                                var c = n.sub[8].getHexStringValue();
                                this.coeff = V(c, 16)
                            } else {
                                if (2 !== n.sub.length) return !1;
                                var f = n.sub[1].sub[0];
                                e = f.sub[0].getHexStringValue(), this.n = V(e, 16), i = f.sub[1].getHexStringValue(), this.e = parseInt(i, 16)
                            }
                            return !0
                        } catch (t) {
                            return !1
                        }
                    }, r.prototype.getPrivateBaseKey = function() {
                        var t = {
                            array: [new et.asn1.DERInteger({
                                int: 0
                            }), new et.asn1.DERInteger({
                                bigint: this.n
                            }), new et.asn1.DERInteger({
                                int: this.e
                            }), new et.asn1.DERInteger({
                                bigint: this.d
                            }), new et.asn1.DERInteger({
                                bigint: this.p
                            }), new et.asn1.DERInteger({
                                bigint: this.q
                            }), new et.asn1.DERInteger({
                                bigint: this.dmp1
                            }), new et.asn1.DERInteger({
                                bigint: this.dmq1
                            }), new et.asn1.DERInteger({
                                bigint: this.coeff
                            })]
                        };
                        return new et.asn1.DERSequence(t).getEncodedHex()
                    }, r.prototype.getPrivateBaseKeyB64 = function() {
                        return c(this.getPrivateBaseKey())
                    }, r.prototype.getPublicBaseKey = function() {
                        var t = new et.asn1.DERSequence({
                                array: [new et.asn1.DERObjectIdentifier({
                                    oid: "1.2.840.113549.1.1.1"
                                }), new et.asn1.DERNull]
                            }),
                            e = new et.asn1.DERSequence({
                                array: [new et.asn1.DERInteger({
                                    bigint: this.n
                                }), new et.asn1.DERInteger({
                                    int: this.e
                                })]
                            }),
                            i = new et.asn1.DERBitString({
                                hex: "00" + e.getEncodedHex()
                            });
                        return new et.asn1.DERSequence({
                            array: [t, i]
                        }).getEncodedHex()
                    }, r.prototype.getPublicBaseKeyB64 = function() {
                        return c(this.getPublicBaseKey())
                    }, r.wordwrap = function(t, e) {
                        if (!t) return t;
                        var i = "(.{1," + (e = e || 64) + "})( +|$\n?)|(.{1," + e + "})";
                        return t.match(RegExp(i, "g")).join("\n")
                    }, r.prototype.getPrivateKey = function() {
                        var t = "-----BEGIN RSA PRIVATE KEY-----\n";
                        return t += r.wordwrap(this.getPrivateBaseKeyB64()) + "\n", t += "-----END RSA PRIVATE KEY-----"
                    }, r.prototype.getPublicKey = function() {
                        var t = "-----BEGIN PUBLIC KEY-----\n";
                        return t += r.wordwrap(this.getPublicBaseKeyB64()) + "\n", t += "-----END PUBLIC KEY-----"
                    }, r.hasPublicKeyProperty = function(t) {
                        return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e")
                    }, r.hasPrivateKeyProperty = function(t) {
                        return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
                    }, r.prototype.parsePropertiesFrom = function(t) {
                        this.n = t.n, this.e = t.e, t.hasOwnProperty("d") && (this.d = t.d, this.p = t.p, this.q = t.q, this.dmp1 = t.dmp1, this.dmq1 = t.dmq1, this.coeff = t.coeff)
                    }, r
                })(J),
                rt = (function() {
                    function t(t) {
                        t = t || {}, this.default_key_size = parseInt(t.default_key_size, 10) || 1024, this.default_public_exponent = t.default_public_exponent || "010001", this.log = t.log || !1, this.key = null
                    }
                    return t.prototype.setKey = function(t) {
                        this.log && this.key && console.warn("A key was already set, overriding existing."), this.key = new it(t)
                    }, t.prototype.setPrivateKey = function(t) {
                        this.setKey(t)
                    }, t.prototype.setPublicKey = function(t) {
                        this.setKey(t)
                    }, t.prototype.decrypt = function(t) {
                        try {
                            return this.getKey().decrypt(f(t))
                        } catch (t) {
                            return !1
                        }
                    }, t.prototype.encrypt = function(t) {
                        try {
                            return c(this.getKey().encrypt(t))
                        } catch (t) {
                            return !1
                        }
                    }, t.prototype.sign = function(t, e, i) {
                        try {
                            return c(this.getKey().sign(t, e, i))
                        } catch (t) {
                            return !1
                        }
                    }, t.prototype.verify = function(t, e, i) {
                        try {
                            return this.getKey().verify(t, f(e), i)
                        } catch (t) {
                            return !1
                        }
                    }, t.prototype.getKey = function(t) {
                        if (!this.key) {
                            if (this.key = new it, t && "[object Function]" === {}.toString.call(t)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                            this.key.generate(this.default_key_size, this.default_public_exponent)
                        }
                        return this.key
                    }, t.prototype.getPrivateKey = function() {
                        return this.getKey().getPrivateKey()
                    }, t.prototype.getPrivateKeyB64 = function() {
                        return this.getKey().getPrivateBaseKeyB64()
                    }, t.prototype.getPublicKey = function() {
                        return this.getKey().getPublicKey()
                    }, t.prototype.getPublicKeyB64 = function() {
                        return this.getKey().getPublicBaseKeyB64()
                    }, t.version = "3.0.0-rc.1", t
                })();
            window.JSEncrypt = rt, t.JSEncrypt = rt, t.default = rt, Object.defineProperty(t, "__esModule", {
                value: !0
            })
        })(e)
    },
    252: function(t, e, i) {
        var r;
        r = function(h) {
            return (function(n) {
                var t = h,
                    e = t.lib,
                    i = e.WordArray,
                    r = e.Hasher,
                    s = t.algo,
                    o = [],
                    m = [];
                !(function() {
                    function t(t) {
                        for (var e = n.sqrt(t), i = 2; i <= e; i++)
                            if (!(t % i)) return !1;
                        return !0
                    }

                    function e(t) {
                        return 4294967296 * (t - (0 | t)) | 0
                    }
                    for (var i = 2, r = 0; r < 64;) t(i) && (r < 8 && (o[r] = e(n.pow(i, .5))), m[r] = e(n.pow(i, 1 / 3)), r++), i++
                })();
                var b = [],
                    a = s.SHA256 = r.extend({
                        _doReset: function() {
                            this._hash = new i.init(o.slice(0))
                        },
                        _doProcessBlock: function(t, e) {
                            for (var i = this._hash.words, r = i[0], n = i[1], s = i[2], o = i[3], a = i[4], h = i[5], u = i[6], c = i[7], f = 0; f < 64; f++) {
                                if (f < 16) b[f] = 0 | t[e + f];
                                else {
                                    var l = b[f - 15],
                                        p = (l << 25 | l >>> 7) ^ (l << 14 | l >>> 18) ^ l >>> 3,
                                        d = b[f - 2],
                                        g = (d << 15 | d >>> 17) ^ (d << 13 | d >>> 19) ^ d >>> 10;
                                    b[f] = p + b[f - 7] + g + b[f - 16]
                                }
                                var v = r & n ^ r & s ^ n & s,
                                    _ = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                                    y = c + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & h ^ ~a & u) + m[f] + b[f];
                                c = u, u = h, h = a, a = o + y | 0, o = s, s = n, n = r, r = y + (_ + v) | 0
                            }
                            i[0] = i[0] + r | 0, i[1] = i[1] + n | 0, i[2] = i[2] + s | 0, i[3] = i[3] + o | 0, i[4] = i[4] + a | 0, i[5] = i[5] + h | 0, i[6] = i[6] + u | 0, i[7] = i[7] + c | 0
                        },
                        _doFinalize: function() {
                            var t = this._data,
                                e = t.words,
                                i = 8 * this._nDataBytes,
                                r = 8 * t.sigBytes;
                            return e[r >>> 5] |= 128 << 24 - r % 32, e[14 + (64 + r >>> 9 << 4)] = n.floor(i / 4294967296), e[15 + (64 + r >>> 9 << 4)] = i, t.sigBytes = 4 * e.length, this._process(), this._hash
                        },
                        clone: function() {
                            var t = r.clone.call(this);
                            return t._hash = this._hash.clone(), t
                        }
                    });
                t.SHA256 = r._createHelper(a), t.HmacSHA256 = r._createHmacHelper(a)
            })(Math), h.SHA256
        }, t.exports = r(i(253))
    },
    253: function(t, e, i) {
        var r;
        r = function() {
            var c, i, t, e, r, f, n, s, o, a, h, u, l = l || (c = Math, i = Object.create || (function() {
                function i() {}
                return function(t) {
                    var e;
                    return i.prototype = t, e = new i, i.prototype = null, e
                }
            })(), e = (t = {}).lib = {}, r = e.Base = {
                extend: function(t) {
                    var e = i(this);
                    return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
                        e.$super.init.apply(this, arguments)
                    }), (e.init.prototype = e).$super = this, e
                },
                create: function() {
                    var t = this.extend();
                    return t.init.apply(t, arguments), t
                },
                init: function() {},
                mixIn: function(t) {
                    for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                    t.hasOwnProperty("toString") && (this.toString = t.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            }, f = e.WordArray = r.extend({
                init: function(t, e) {
                    t = this.words = t || [], this.sigBytes = null != e ? e : 4 * t.length
                },
                toString: function(t) {
                    return (t || s).stringify(this)
                },
                concat: function(t) {
                    var e = this.words,
                        i = t.words,
                        r = this.sigBytes,
                        n = t.sigBytes;
                    if (this.clamp(), r % 4)
                        for (var s = 0; s < n; s++) {
                            var o = i[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                            e[r + s >>> 2] |= o << 24 - (r + s) % 4 * 8
                        } else
                            for (s = 0; s < n; s += 4) e[r + s >>> 2] = i[s >>> 2];
                    return this.sigBytes += n, this
                },
                clamp: function() {
                    var t = this.words,
                        e = this.sigBytes;
                    t[e >>> 2] &= 4294967295 << 32 - e % 4 * 8, t.length = c.ceil(e / 4)
                },
                clone: function() {
                    var t = r.clone.call(this);
                    return t.words = this.words.slice(0), t
                },
                random: function(t) {
                    for (var e, i = [], r = function(e) {
                            e = e;
                            var i = 987654321,
                                r = 4294967295;
                            return function() {
                                var t = ((i = 36969 * (65535 & i) + (i >> 16) & r) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & r) & r;
                                return t /= 4294967296, (t += .5) * (.5 < c.random() ? 1 : -1)
                            }
                        }, n = 0; n < t; n += 4) {
                        var s = r(4294967296 * (e || c.random()));
                        e = 987654071 * s(), i.push(4294967296 * s() | 0)
                    }
                    return new f.init(i, t)
                }
            }), n = t.enc = {}, s = n.Hex = {
                stringify: function(t) {
                    for (var e = t.words, i = t.sigBytes, r = [], n = 0; n < i; n++) {
                        var s = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                        r.push((s >>> 4).toString(16)), r.push((15 & s).toString(16))
                    }
                    return r.join("")
                },
                parse: function(t) {
                    for (var e = t.length, i = [], r = 0; r < e; r += 2) i[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
                    return new f.init(i, e / 2)
                }
            }, o = n.Latin1 = {
                stringify: function(t) {
                    for (var e = t.words, i = t.sigBytes, r = [], n = 0; n < i; n++) {
                        var s = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                        r.push(String.fromCharCode(s))
                    }
                    return r.join("")
                },
                parse: function(t) {
                    for (var e = t.length, i = [], r = 0; r < e; r++) i[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                    return new f.init(i, e)
                }
            }, a = n.Utf8 = {
                stringify: function(t) {
                    try {
                        return decodeURIComponent(escape(o.stringify(t)))
                    } catch (t) {
                        throw new Error("Malformed UTF-8 data")
                    }
                },
                parse: function(t) {
                    return o.parse(unescape(encodeURIComponent(t)))
                }
            }, h = e.BufferedBlockAlgorithm = r.extend({
                reset: function() {
                    this._data = new f.init, this._nDataBytes = 0
                },
                _append: function(t) {
                    "string" == typeof t && (t = a.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                },
                _process: function(t) {
                    var e = this._data,
                        i = e.words,
                        r = e.sigBytes,
                        n = this.blockSize,
                        s = r / (4 * n),
                        o = (s = t ? c.ceil(s) : c.max((0 | s) - this._minBufferSize, 0)) * n,
                        a = c.min(4 * o, r);
                    if (o) {
                        for (var h = 0; h < o; h += n) this._doProcessBlock(i, h);
                        var u = i.splice(0, o);
                        e.sigBytes -= a
                    }
                    return new f.init(u, a)
                },
                clone: function() {
                    var t = r.clone.call(this);
                    return t._data = this._data.clone(), t
                },
                _minBufferSize: 0
            }), e.Hasher = h.extend({
                cfg: r.extend(),
                init: function(t) {
                    this.cfg = this.cfg.extend(t), this.reset()
                },
                reset: function() {
                    h.reset.call(this), this._doReset()
                },
                update: function(t) {
                    return this._append(t), this._process(), this
                },
                finalize: function(t) {
                    return t && this._append(t), this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function(i) {
                    return function(t, e) {
                        return new i.init(e).finalize(t)
                    }
                },
                _createHmacHelper: function(i) {
                    return function(t, e) {
                        return new u.HMAC.init(i, e).finalize(t)
                    }
                }
            }), u = t.algo = {}, t);
            return l
        }, t.exports = r()
    }
}, [249]);
pbjsChunk([162], {
    264: function(e, t, r) {
        e.exports = r(265)
    },
    265: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r.d(t, "spec", (function() {
            return s
        })), t.matchRequest = o, t.checkDeepArray = a, t.defaultSize = c;
        var u = r(0),
            i = r(1),
            d = r(3);

        function n(e, t) {
            return (function(e) {
                if (Array.isArray(e)) return e
            })(e) || (function(e, t) {
                var r = [],
                    i = !0,
                    n = !1,
                    d = void 0;
                try {
                    for (var u, s = e[Symbol.iterator](); !(i = (u = s.next()).done) && (r.push(u.value), !t || r.length !== t); i = !0);
                } catch (e) {
                    n = !0, d = e
                } finally {
                    try {
                        i || null == s.return || s.return()
                    } finally {
                        if (n) throw d
                    }
                }
                return r
            })(e, t) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }
        var s = {
            code: "districtmDMX",
            supportedFormat: ["banner"],
            isBidRequestValid: function(e) {
                return !(!e.params.dmxid || !e.params.memberid)
            },
            interpretResponse: function(e, d) {
                return (e = e.body || {}).seatbid && u.isArray(e.seatbid) ? e.seatbid.reduce((function(e, t) {
                    var r = t.bid.reduce((function(e, t) {
                        if (e.price < t.price) {
                            var r = c(o(t.impid, d)),
                                i = r.width,
                                n = r.height;
                            return t.cpm = t.price, t.bidId = t.impid, t.requestId = t.impid, t.width = t.w || i, t.height = t.h || n, t.ad = t.adm, t.netRevenue = !0, t.creativeId = t.crid, t.currency = "USD", t.ttl = 60, t
                        }
                        return e.cpm = e.price, e
                    }), {
                        price: 0
                    });
                    return r.adm && e.push(r), e
                }), []).filter((function(e) {
                    return !!e.bidId
                })) : []
            },
            buildRequests: function(e, t) {
                var r = d.config.getConfig("bidderTimeout"),
                    i = {
                        id: u.generateUUID(),
                        cur: ["USD"],
                        tmax: r - 300,
                        test: this.test() || 0,
                        site: {
                            publisher: {
                                id: String(e[0].params.memberid) || null
                            }
                        }
                    };
                i.test || delete i.test, t.gdprConsent && (i.regs = {}, i.regs.ext = {}, i.regs.ext.gdpr = !0 === t.gdprConsent.gdprApplies ? 1 : 0, i.user = {}, i.user.ext = {}, i.user.ext.consent = t.gdprConsent.consentString);
                var n = e.map((function(e) {
                    var t = {};
                    return t.id = e.bidId, t.tagid = String(e.params.dmxid), t.secure = "https:" === window.location.protocol ? 1 : 0, t.banner = {
                        topframe: 1,
                        w: e.sizes[0][0] || 0,
                        h: e.sizes[0][1] || 0,
                        format: e.sizes.map((function(e) {
                            return {
                                w: e[0],
                                h: e[1]
                            }
                        })).filter((function(e) {
                            return "number" == typeof e.w && "number" == typeof e.h
                        }))
                    }, t
                }));
                return i.imp = n, {
                    method: "POST",
                    url: "https://dmx.districtm.io/b/v1",
                    data: JSON.stringify(i),
                    options: {
                        contentType: "application/json",
                        withCredentials: !0
                    },
                    bidderRequest: t
                }
            },
            test: function() {
                return -1 !== window.location.href.indexOf("dmTest=true") ? 1 : 0
            },
            getUserSyncs: function(e) {
                if (e.iframeEnabled) return [{
                    type: "iframe",
                    url: "https://cdn.districtm.io/ids/index.html"
                }]
            }
        };

        function o(t, e) {
            return n(e.bidderRequest.bids.filter((function(e) {
                return e.bidId === t
            })), 1)[0]
        }

        function a(e) {
            return Array.isArray(e) && Array.isArray(e[0]) ? e[0] : e
        }

        function c(e) {
            var t = e.sizes,
                r = {};
            return r.width = a(t)[0], r.height = a(t)[1], r
        }
        Object(i.registerBidder)(s)
    }
}, [264]);
pbjsChunk([142], {
    308: function(e, t, n) {
        e.exports = n(309)
    },
    309: function(e, r, i) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            function(d) {
                i.d(r, "spec", (function() {
                    return n
                }));
                var b = i(0),
                    s = i(3),
                    e = i(8),
                    w = i.n(e),
                    t = i(1);

                function y(e, t) {
                    return (function(e) {
                        if (Array.isArray(e)) return e
                    })(e) || (function(e, t) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                r || null == u.return || u.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    })(e, t) || (function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    })()
                }

                function S() {
                    return (S = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    }).apply(this, arguments)
                }
                var p = {
                        member: "YcXr87z2lpbB"
                    },
                    l = {},
                    I = null;
                var n = {
                    code: "gumgum",
                    aliases: ["gg"],
                    isBidRequestValid: function(e) {
                        var t = e.params,
                            n = e.adUnitCode;
                        switch (!0) {
                            case !!t.inScreen:
                            case !!t.inSlot:
                            case !!t.ICV:
                                break;
                            default:
                                return b.logWarn("[GumGum] No product selected for the placement ".concat(n, ", please check your implementation.")), !1
                        }
                        return !(t.bidfloor && ("number" != typeof t.bidfloor || !isFinite(t.bidfloor)) && (b.logWarn("[GumGum] bidfloor must be a Number"), 1))
                    },
                    buildRequests: function(e, t) {
                        var u = [],
                            c = S({
                                consentString: null,
                                gdprApplies: !0
                            }, t && t.gdprConsent);
                        return b._each(e, (function(e) {
                            var t = s.config.getConfig("bidderTimeout"),
                                n = e.bidId,
                                r = e.params,
                                i = void 0 === r ? {} : r,
                                o = e.transactionId,
                                a = {};
                            I && (a.pv = I), i.bidfloor && (a.fp = i.bidfloor), i.inScreen && (a.t = i.inScreen, a.pi = 2), i.inSlot && (a.si = parseInt(i.inSlot, 10), a.pi = 3), i.ICV && (a.ni = parseInt(i.ICV, 10), a.pi = 5), a.gdprApplies = c.gdprApplies, c.gdprApplies && (a.gdprConsent = c.consentString), u.push({
                                id: n,
                                tmax: t,
                                tId: o,
                                pi: a.pi,
                                selector: i.selector,
                                sizes: e.sizes,
                                url: "https://g2.gumgum.com/hbid/imp",
                                method: "GET",
                                data: S(a, (function() {
                                    var e, t, n, r, i, o, a, u;
                                    if (l.vw) return l;
                                    try {
                                        t = (e = d.top).screen, n = b.getTopWindowUrl()
                                    } catch (e) {
                                        return b.logError(e), l
                                    }
                                    return l = {
                                        vw: e.innerWidth,
                                        vh: e.innerHeight,
                                        sw: t.width,
                                        sh: t.height,
                                        pu: n,
                                        ce: b.cookiesAreEnabled(),
                                        dpr: e.devicePixelRatio || 1,
                                        jcsi: JSON.stringify({
                                            t: 0,
                                            rq: 8
                                        }),
                                        og_url: (o = (document && document.getElementsByTagName("head")[0]).querySelector("meta[property='og:url']"), o ? o.content : null)
                                    }, a = window.navigator && (window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection), (i = (u = a && (a.downlink || a.bandwidth)) ? Math.round(1024 * u) : null) && (l.ns = i), (r = (n.match(/#ggad=(\w+)$/) || [0, 0])[1]) && (l[isNaN(r) ? "eAdBuyId" : "adBuyId"] = r), l
                                })(), (function() {
                                    var e, t = (e = window.DigiTrust && window.DigiTrust.getUser ? window.DigiTrust.getUser(p) : {}) && e.success && e.identity || "";
                                    return !t || t.privacy && t.privacy.optout ? {} : {
                                        dt: t.id
                                    }
                                })())
                            })
                        })), u
                    },
                    interpretResponse: function(e, t) {
                        var n = [],
                            r = e.body,
                            i = S({
                                ad: {
                                    price: 0,
                                    id: 0,
                                    markup: ""
                                },
                                pag: {
                                    pvid: 0
                                }
                            }, r),
                            o = i.ad,
                            a = o.price,
                            u = o.id,
                            c = o.markup,
                            d = i.cw,
                            s = i.pag.pvid,
                            p = t.data || {},
                            l = p.pi,
                            g = 3 === l && 9 === p.si,
                            f = b.parseSizesInput(t.sizes),
                            m = y(f[0].split("x"), 2),
                            v = m[0],
                            h = m[1];
                        return 2 !== l && 5 !== l || !w()(f, "1x1") || (h = v = "1"), I = s, u && n.push({
                            ad: d ? (function(e, t) {
                                return e.replace("AD_JSON", window.btoa(JSON.stringify(t)))
                            })(d, S({}, r, {
                                bidRequest: t
                            })) : c,
                            cpm: g ? .1 : a,
                            creativeId: u,
                            currency: "USD",
                            height: h,
                            netRevenue: !0,
                            requestId: t.id,
                            ttl: 60,
                            width: v
                        }), n
                    },
                    getUserSyncs: function(e, t) {
                        return t.map((function(e) {
                            return e.body && e.body.pxs && e.body.pxs.scr || []
                        })).reduce((function(e, t) {
                            return e.concat(t)
                        }), []).map((function(e) {
                            return {
                                type: "f" === e.t ? "iframe" : "image",
                                url: e.u
                            }
                        }))
                    }
                };
                Object(t.registerBidder)(n)
            }.call(r, i(29))
    }
}, [308]);
pbjsChunk([0], {
    328: function(e, r, t) {
        e.exports = t(329)
    },
    329: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", (function() {
            return b
        }));
        var l = t(0),
            n = t(2),
            h = t(3),
            a = t(330),
            i = t.n(a),
            o = t(332),
            s = t.n(o),
            p = t(1);

        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var d = [n.b],
            c = 100,
            f = 35,
            m = !0,
            y = {
                JPY: 1
            };

        function u(e) {
            return i()(e) && 2 === e.length && s()(e[0]) && s()(e[1])
        }
        var b = {
            code: "ix",
            supportedMediaTypes: d,
            isBidRequestValid: function(e) {
                if (!u(e.params.size)) return !1;
                if (!(function(e, r) {
                        if (u(e)) return e[0] === r[0] && e[1] === r[1];
                        for (var t = 0; t < e.length; t++)
                            if (e[t][0] === r[0] && e[t][1] === r[1]) return !0;
                        return !1
                    })(e.sizes, e.params.size)) return !1;
                if (e.hasOwnProperty("mediaType") && "banner" !== e.mediaType) return !1;
                if (e.hasOwnProperty("mediaTypes") && !l.deepAccess(e, "mediaTypes.banner.sizes")) return !1;
                if ("string" != typeof e.params.siteId && "number" != typeof e.params.siteId) return !1;
                var r = e.params.hasOwnProperty("bidFloor"),
                    t = e.params.hasOwnProperty("bidFloorCur");
                return !r && !t || r && t && (function(e, r) {
                    return Boolean("number" == typeof e && "string" == typeof r && r.match(/^[A-Z]{3}$/))
                })(e.params.bidFloor, e.params.bidFloorCur)
            },
            buildRequests: function(e, r) {
                for (var t, n, a = [], i = null, o = null, s = "https://as-sec.casalemedia.com/cygnus", p = 0; p < e.length; p++) i = e[p], n = void 0, (n = {}).id = (t = i).bidId, n.banner = {}, n.banner.w = t.params.size[0], n.banner.h = t.params.size[1], n.banner.topframe = l.inIframe() ? 0 : 1, n.ext = {}, n.ext.siteID = t.params.siteId, !t.params.hasOwnProperty("id") || "string" != typeof t.params.id && "number" != typeof t.params.id ? n.ext.sid = "".concat(t.params.size[0], "x").concat(t.params.size[1]) : n.ext.sid = String(t.params.id), t.params.hasOwnProperty("bidFloor") && t.params.hasOwnProperty("bidFloorCur") && (n.bidfloor = t.params.bidFloor, n.bidfloorcur = t.params.bidFloorCur), o = n, a.push(o);
                var d = {};
                if (d.id = e[0].bidderRequestId, d.imp = a, d.site = {}, d.ext = {}, d.ext.source = "prebid", document.referrer && "" !== document.referrer && (d.site.ref = document.referrer), r) {
                    if (r.gdprConsent) {
                        var u = r.gdprConsent;
                        u.hasOwnProperty("gdprApplies") && (d.regs = {
                            ext: {
                                gdpr: u.gdprApplies ? 1 : 0
                            }
                        }), u.hasOwnProperty("consentString") && (d.user = {
                            ext: {
                                consent: u.consentString || ""
                            }
                        })
                    }
                    r.refererInfo && (d.site.page = r.refererInfo.referer, r.refererInfo.referer && 0 !== r.refererInfo.referer.indexOf("https") && (s = "http://as.casalemedia.com/cygnus"))
                }
                var c = {},
                    f = h.config.getConfig("ix");
                if (f) {
                    if ("object" === g(f.firstPartyData)) {
                        var m = f.firstPartyData,
                            y = "?";
                        for (var b in m) m.hasOwnProperty(b) && (y += "".concat(encodeURIComponent(b), "=").concat(encodeURIComponent(m[b]), "&"));
                        y = y.slice(0, -1), d.site.page += y
                    }
                    "number" == typeof f.timeout && (c.t = f.timeout)
                }
                return c.s = e[0].params.siteId, c.v = 7.2, c.r = JSON.stringify(d), c.ac = "j", c.sd = 1, {
                    method: "GET",
                    url: s,
                    data: c
                }
            },
            interpretResponse: function(e) {
                var r = [],
                    t = null;
                if (!e.hasOwnProperty("body") || !e.body.hasOwnProperty("seatbid")) return r;
                for (var n, a, i, o = e.body, s = o.seatbid, p = 0; p < s.length; p++)
                    if (s[p].hasOwnProperty("bid"))
                        for (var d = s[p].bid, u = 0; u < d.length; u++) n = d[u], a = o.cur, i = void 0, i = {}, y.hasOwnProperty(a) ? i.cpm = n.price / y[a] : i.cpm = n.price / c, i.requestId = n.impid, i.width = n.w, i.height = n.h, i.ad = n.adm, i.dealId = l.deepAccess(n, "ext.dealid"), i.ttl = f, i.netRevenue = m, i.currency = a, i.creativeId = n.hasOwnProperty("crid") ? n.crid : "-", i.meta = {}, i.meta.networkId = l.deepAccess(n, "ext.dspid"), i.meta.brandId = l.deepAccess(n, "ext.advbrandid"), i.meta.brandName = l.deepAccess(n, "ext.advbrand"), t = i, r.push(t);
                return r
            },
            transformBidParams: function(e, r) {
                return l.convertTypes({
                    siteID: "number"
                }, e)
            }
        };
        Object(p.registerBidder)(b)
    },
    330: function(e, r, t) {
        t(331), e.exports = t(14).Array.isArray
    },
    331: function(e, r, t) {
        var n = t(13);
        n(n.S, "Array", {
            isArray: t(55)
        })
    },
    332: function(e, r, t) {
        t(333), e.exports = t(14).Number.isInteger
    },
    333: function(e, r, t) {
        var n = t(13);
        n(n.S, "Number", {
            isInteger: t(334)
        })
    },
    334: function(e, r, t) {
        var n = t(16),
            a = Math.floor;
        e.exports = function(e) {
            return !n(e) && isFinite(e) && a(e) === e
        }
    }
}, [328]);
pbjsChunk([120], {
    367: function(t, e, n) {
        t.exports = n(368)
    },
    368: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n.d(e, "spec", (function() {
            return E
        }));
        var r = n(1),
            o = n(0),
            i = n(3),
            a = n(11),
            c = n(2);

        function d() {
            return (d = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            }).apply(this, arguments)
        }
        var u = "medianet",
            s = {
                NOT_DETERMINED: 0,
                ABOVE_THE_FOLD: 1,
                BELOW_THE_FOLD: 2
            },
            l = "client_timeout",
            p = "client_bid_won",
            f = {};

        function m(t) {
            return d({
                domain: (t = t || {}).domain || o.getTopWindowLocation().host,
                page: t.page || o.getTopWindowUrl(),
                ref: t.ref || o.getTopWindowReferrer()
            }, (function() {
                if (f.pageMeta) return f.pageMeta;
                var t = g('link[rel="canonical"]', "href"),
                    e = g('meta[property="og:url"]', "content"),
                    n = g('meta[name="twitter:url"]', "content");
                return f.pageMeta = d({}, t && {
                    canonical_url: t
                }, e && {
                    og_url: e
                }, n && {
                    twitter_url: n
                }), f.pageMeta
            })())
        }

        function g(t, e) {
            var n = (function(t, e) {
                try {
                    var n = o.getWindowTop().document,
                        r = n.querySelector(t);
                    if (null !== r && r[e]) return r[e]
                } catch (t) {}
            })(t, e);
            return n && (function(t) {
                var e = o.getWindowTop().document.createElement("a");
                return e.href = t, e.href
            })(n)
        }

        function b(t, e) {
            return t.filter((function(t) {
                return t.type === e
            }))
        }

        function y(t) {
            return {
                w: parseInt(t[0], 10),
                h: parseInt(t[1], 10)
            }
        }

        function h(t) {
            var e = {
                id: t.bidId,
                ext: {
                    dfp_id: t.adUnitCode,
                    display_count: t.bidRequestsCount
                },
                all: t.params
            };
            if (0 < t.sizes.length && (e.banner = (function(t) {
                    return o.isArray(t) && 2 === t.length && !o.isArray(t[0]) ? [y(t)] : t.map((function(t) {
                        return y(t)
                    }))
                })(t.sizes)), t.nativeParams) try {
                e.native = JSON.stringify(t.nativeParams)
            } catch (t) {
                o.logError("".concat(u, " : Incorrect JSON : bidRequest.nativeParams"))
            }
            t.params.crid && (e.tagid = t.params.crid.toString());
            var n = parseFloat(t.params.bidfloor);
            n && (e.bidfloor = n);
            var r = (function(t) {
                var e = document.getElementById(t);
                if (e && e.getBoundingClientRect) {
                    var n = e.getBoundingClientRect(),
                        r = {};
                    return r.top_left = {
                        y: n.top,
                        x: n.left
                    }, r.bottom_right = {
                        y: n.bottom,
                        x: n.right
                    }, r
                }
                return null
            })(t.adUnitCode);
            if (r && e.banner && 0 !== e.banner.length) {
                var i = (function(t) {
                    return {
                        top_left: {
                            x: t.top_left.x + window.pageXOffset,
                            y: t.top_left.y + window.pageYOffset
                        },
                        bottom_right: {
                            x: t.bottom_right.x + window.pageXOffset,
                            y: t.bottom_right.y + window.pageYOffset
                        }
                    }
                })(r);
                e.ext.coordinates = i, e.ext.viewability = _(r.top_left, v(e.banner)), .5 < _(i.top_left, v(e.banner)) ? e.ext.visibility = s.ABOVE_THE_FOLD : e.ext.visibility = s.BELOW_THE_FOLD
            } else e.ext.visibility = s.NOT_DETERMINED;
            return e
        }

        function v(t) {
            return t.reduce((function(t, e) {
                return e.h * e.w < t.h * t.w ? e : t
            }))
        }

        function _(t, e) {
            var n = e.w * e.h,
                r = E.getWindowSize(),
                i = {
                    x: t.x + e.w,
                    y: t.y + e.h
                };
            return 0 == n || -1 === r.w || -1 === r.h ? 0 : (function(t, e, n, r) {
                if (t.x > r.x || e.x < n.x || t.y > r.y || e.y < n.y) return 0;
                return (Math.min(e.x, r.x) - Math.max(t.x, n.x)) * (Math.min(e.y, r.y) - Math.max(t.y, n.y))
            })(t, i, {
                x: 0,
                y: 0
            }, {
                x: r.w,
                y: r.h
            }) / n
        }

        function w(t, e) {
            return {
                site: m(t[0].params.site),
                ext: (function(t, e) {
                    var n = {
                        customer_id: t.cid,
                        prebid_version: pbjs.version
                    };
                    n.gdpr_applies = !(!e || !e.gdprApplies), n.gdpr_applies && (n.gdpr_consent_string = e.consentString || "");
                    var r = E.getWindowSize();
                    return -1 !== r.w && -1 !== r.h && (n.screen = r), n
                })(t[0].params, e.gdprConsent),
                id: t[0].auctionId,
                imp: t.map((function(t) {
                    return h(t)
                })),
                tmax: e.timeout || i.config.getConfig("bidderTimeout")
            }
        }

        function x(t, e) {
            var n = {
                protocol: "https",
                hostname: "qsearch-a.akamaihd.net/log",
                search: (function(t, e) {
                    e = o.isArray(e) && e || [];
                    var n = {
                        logid: "kfk",
                        evtid: "projectevents",
                        project: "prebid"
                    };
                    return n.acid = o.deepAccess(e, "0.auctionId") || "", n.cid = pbjs.medianetGlobals.cid || "", n.crid = e.map((function(t) {
                        return o.deepAccess(t, "params.0.crid") || t.adUnitCode
                    })).join("|"), n.adunit_count = e.length || 0, n.dn = o.getTopWindowLocation().host || "", n.requrl = o.getTopWindowUrl() || "", n.event = t.name || "", n.value = t.value || "", n.rd = t.related_data || "", n
                })(t, e)
            };
            o.triggerPixel(a.a(n))
        }
        pbjs.medianetGlobals = {};
        var E = {
            code: u,
            supportedMediaTypes: [c.b, c.c],
            isBidRequestValid: function(t) {
                return t.params ? t.params.cid && o.isStr(t.params.cid) && !o.isEmptyStr(t.params.cid) ? (d(pbjs.medianetGlobals, !pbjs.medianetGlobals.cid && {
                    cid: t.params.cid
                }), !0) : (o.logError("".concat(u, " : cid should be a string")), !1) : (o.logError("".concat(u, " : Missing bid parameters")), !1)
            },
            buildRequests: function(t, e) {
                var n = w(t, e);
                return {
                    method: "POST",
                    url: "//prebid.media.net/rtb/prebid",
                    data: JSON.stringify(n)
                }
            },
            interpretResponse: function(t, e) {
                var n = [];
                if (!t || !t.body) return o.logInfo("".concat(u, " : response is empty")), n;
                var r = t.body.bidList;
                return o.isArray(r) && 0 !== r.length ? n = r.filter((function(t) {
                    return (function(t) {
                        return !1 === t.no_bid && 0 < parseFloat(t.cpm)
                    })(t)
                })) : (o.logInfo("".concat(u, " : no bids")), n)
            },
            getUserSyncs: function(t, e) {
                var n = (function(t) {
                    return !o.isEmpty(t) && t[0].body && t[0].body.ext && o.isArray(t[0].body.ext.csUrl) ? t[0].body.ext.csUrl : []
                })(e);
                return t.iframeEnabled ? b(n, "iframe") : t.pixelEnabled ? b(n, "image") : void 0
            },
            onTimeout: function(t) {
                try {
                    x({
                        name: l,
                        value: t.length,
                        related_data: t[0].timeout || i.config.getConfig("bidderTimeout")
                    }, t)
                } catch (t) {}
            },
            onBidWon: function(t) {
                try {
                    x({
                        name: p,
                        value: t.cpm
                    }, [t])
                } catch (t) {}
            },
            clearMnData: function() {
                f = {}
            },
            getWindowSize: function() {
                return {
                    w: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || -1,
                    h: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || -1
                }
            }
        };
        Object(r.registerBidder)(E)
    }
}, [367]);
pbjsChunk([107], {
    395: function(e, t, n) {
        e.exports = n(396)
    },
    396: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.resetBoPixel = function() {
            l = !0
        }, n.d(t, "spec", (function() {
            return h
        }));
        var c = n(3),
            r = n(1),
            d = n(0),
            u = n(24),
            p = n(2),
            m = n(11);

        function o(e, t) {
            return (function(e) {
                if (Array.isArray(e)) return e
            })(e) || (function(e, t) {
                var n = [],
                    r = !0,
                    a = !1,
                    i = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    a = !0, i = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (a) throw i
                    }
                }
                return n
            })(e, t) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }
        var a = [p.b, p.d],
            f = "openx",
            i = "hb_pb",
            s = "2.1.6",
            l = !0;
        var h = {
            code: f,
            supportedMediaTypes: a,
            isBidRequestValid: function(e) {
                var t = e.params.delDomain || e.params.platform;
                return d.deepAccess(e, "mediaTypes.banner") && t ? !!e.params.unit || 0 < d.deepAccess(e, "mediaTypes.banner.sizes.length") : !(!e.params.unit || !t)
            },
            buildRequests: function(e, t) {
                if (0 === e.length) return [];
                var n = [],
                    r = o(function(e) {
                        return e.reduce((function(e, t) {
                            return !(function(e) {
                                return d.deepAccess(e, "mediaTypes.video") || e.mediaType === p.d
                            })(t) ? e[1].push(t) : e[0].push(t), e
                        }), [
                            [],
                            []
                        ])
                    }(e), 2),
                    a = r[0],
                    i = r[1];
                return 0 < i.length && n.push(function(e, t) {
                    var r = [],
                        a = !1,
                        n = v(e, t),
                        i = d._map(e, (function(e) {
                            return e.params.unit
                        }));
                    n.aus = d._map(e, (function(e) {
                        return d.parseSizesInput(e.sizes).join(",")
                    })).join("|"), n.divIds = d._map(e, (function(e) {
                        return encodeURIComponent(e.adUnitCode)
                    })).join(","), i.some((function(e) {
                        return e
                    })) && (n.auid = i.join(","));
                    e.some((function(e) {
                        return e.params.doNotTrack
                    })) && (n.ns = 1);
                    e.some((function(e) {
                        return e.params.coppa
                    })) && (n.tfcd = 1);
                    e.forEach((function(t) {
                        if (t.params.customParams) {
                            var e = d._map(Object.keys(t.params.customParams), (function(e) {
                                    return (function(e, t) {
                                        var n = t[e];
                                        return d.isArray(n) && (n = n.join(",")), (e.toLowerCase() + "=" + n.toLowerCase()).replace("+", ".").replace("/", "_")
                                    })(e, t.params.customParams)
                                })),
                                n = window.btoa(e.join("&"));
                            a = !0, r.push(n)
                        } else r.push("")
                    })), a && (n.tps = r.join(","));
                    var o = [],
                        s = !1;
                    e.forEach((function(e) {
                        e.params.customFloor ? (o.push(Math.round(100 * e.params.customFloor) / 100 * 1e3), s = !0) : o.push(0)
                    })), s && (n.aumfs = o.join(","));
                    return {
                        method: "GET",
                        url: n.ph ? "//u.openx.net/w/1.0/arj" : "//".concat(e[0].params.delDomain, "/w/1.0/arj"),
                        data: n,
                        payload: {
                            bids: e,
                            startTime: new Date
                        }
                    }
                }(i, t)), 0 < a.length && a.forEach((function(e) {
                    n.push(function(e, t) {
                        var n = (function(e, t) {
                            var n, r, a = v([e], t),
                                i = d.deepAccess(e, "params.video") || {},
                                o = d.deepAccess(e, "mediaTypes.video.context"),
                                s = d.deepAccess(e, "mediaTypes.video.playerSize");
                            d.isArray(e.sizes) && 2 === e.sizes.length && !d.isArray(e.sizes[0]) ? (n = parseInt(e.sizes[0], 10), r = parseInt(e.sizes[1], 10)) : d.isArray(e.sizes) && d.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (n = parseInt(e.sizes[0][0], 10), r = parseInt(e.sizes[0][1], 10)) : d.isArray(s) && 2 === s.length && (n = parseInt(s[0], 10), r = parseInt(s[1], 10));
                            Object.keys(i).forEach((function(e) {
                                "openrtb" === e ? (i[e].w = n || i[e].w, i[e].v = r || i[e].v, a[e] = JSON.stringify(i[e])) : e in a || "url" === e || (a[e] = i[e])
                            })), a.auid = e.params.unit, a.vwd = n || i.vwd, a.vht = r || i.vht, "outstream" === o && (a.vos = "101");
                            i.mimes && (a.vmimes = i.mimes);
                            return a
                        })(e, t);
                        return {
                            method: "GET",
                            url: n.ph ? "//u.openx.net/v/1.0/avjp" : "//".concat(e.params.delDomain, "/v/1.0/avjp"),
                            data: n,
                            payload: {
                                bid: e,
                                startTime: new Date
                            }
                        }
                    }(e, t))
                })), n
            },
            interpretResponse: function(e, t) {
                var n = e.body;
                return (function(e) {
                    return /avjp$/.test(e.url) ? p.d : p.b
                })(t) === p.d ? (function(e, t) {
                    var n = t.bid,
                        r = t.startTime,
                        a = [];
                    if (void 0 !== e && "" !== e.vastUrl && "" !== e.pub_rev) {
                        var i = Object(m.c)(e.vastUrl).search || {},
                            o = {};
                        o.requestId = n.bidId, o.ttl = 300, o.netRevenue = !0, o.currency = e.currency, o.cpm = Number(e.pub_rev) / 1e3, o.width = e.width, o.height = e.height, o.creativeId = e.adid, o.vastUrl = e.vastUrl, o.mediaType = p.d, e.ph = i.ph, e.colo = i.colo, e.ts = i.ts, a.push(o), g(p.d, e, r)
                    }
                    return a
                })(n, t.payload) : (function(e, t) {
                    for (var n = t.bids, r = t.startTime, a = e.ads.ad, i = [], o = 0; o < a.length; o++) {
                        var s = a[o],
                            c = parseInt(s.idx, 10),
                            d = {};
                        if (d.requestId = n[c].bidId, s.pub_rev) {
                            d.cpm = Number(s.pub_rev) / 1e3;
                            var u = s.creative[0];
                            u && (d.width = u.width, d.height = u.height), d.creativeId = u.id, d.ad = s.html, s.deal_id && (d.dealId = s.deal_id), d.ttl = 300, d.netRevenue = !0, d.currency = s.currency, s.tbd && (d.tbd = s.tbd), d.ts = s.ts, d.meta = {}, s.brand_id && (d.meta.brandId = s.brand_id), i.push(d), g(p.b, s, r)
                        }
                    }
                    return i
                })(n, t.payload)
            },
            getUserSyncs: function(e, t) {
                if (e.iframeEnabled || e.pixelEnabled) return [{
                    type: e.iframeEnabled ? "iframe" : "image",
                    url: d.deepAccess(t, "0.body.ads.pixels") || d.deepAccess(t, "0.body.pixels") || "//u.openx.net/w/1.0/pd"
                }]
            },
            transformBidParams: function(e, t) {
                return d.convertTypes({
                    unit: "string",
                    customFloor: "number"
                }, e)
            }
        };

        function b(t) {
            for (var e in t) t.hasOwnProperty(e) && (t[e] || delete t[e]);
            return d._map(Object.keys(t), (function(e) {
                return "".concat(e, "=").concat(t[e])
            })).join("&")
        }

        function v(e, t) {
            var n, r = d.inIframe();
            if (n = {
                    ju: c.config.getConfig("pageUrl") || d.getTopWindowUrl(),
                    jr: d.getTopWindowReferrer(),
                    ch: document.charSet || document.characterSet,
                    res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
                    ifr: r,
                    tz: (new Date).getTimezoneOffset(),
                    tws: (function(e) {
                        var t, n, r, a = window,
                            i = document,
                            o = i.documentElement;
                        if (e) {
                            try {
                                a = window.top, i = window.top.document
                            } catch (e) {
                                return
                            }
                            o = i.documentElement, r = i.body, t = a.innerWidth || o.clientWidth || r.clientWidth, n = a.innerHeight || o.clientHeight || r.clientHeight
                        } else o = i.documentElement, t = a.innerWidth || o.clientWidth, n = a.innerHeight || o.clientHeight;
                        return "".concat(t, "x").concat(n)
                    })(r),
                    be: 1,
                    bc: e[0].params.bc || "".concat(i, "_").concat(s),
                    dddid: d._map(e, (function(e) {
                        return e.transactionId
                    })).join(","),
                    nocache: (new Date).getTime()
                }, e[0].params.platform && (n.ph = e[0].params.platform), d.deepAccess(t, "gdprConsent")) {
                var a = t.gdprConsent;
                void 0 !== a.consentString && (n.gdpr_consent = a.consentString), void 0 !== a.gdprApplies && (n.gdpr = a.gdprApplies ? 1 : 0), "iab" === c.config.getConfig("consentManagement.cmpApi") && (n.x_gdpr_f = 1)
            }
            return e[0].crumbs && e[0].crumbs.pubcid && (n.pubcid = e[0].crumbs.pubcid), n
        }

        function g(e, t, n) {
            if (l) {
                l = !1;
                var r, a = c.config.getConfig("bidderTimeout");
                window.PREBID_TIMEOUT && (a = Math.min(window.PREBID_TIMEOUT, a));
                var i = {
                    bd: +new Date - n,
                    bp: t.pub_rev,
                    br: "0",
                    bs: d.getTopWindowLocation().hostname,
                    bt: a,
                    ts: t.ts
                };
                if (i.br = i.bt < i.bd ? "t" : "p", e === p.d) {
                    var o = Object(m.c)(t.colo);
                    i.ph = t.ph, r = "//".concat(o.hostname, "/w/1.0/bo?").concat(b(i))
                } else {
                    var s = d.deepAccess(t, "creative.0.tracking.impression").match(/([^?]+\/)ri\?/);
                    s && 1 < s.length && (r = "".concat(s[1], "bo?").concat(b(i)))
                }
                r && u.a.registerSync("image", f, r)
            }
        }
        Object(r.registerBidder)(h)
    }
}, [395]);
pbjsChunk([91], {
    430: function(e, r, a) {
        e.exports = a(431)
    },
    431: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", (function() {
            return A
        }));
        var m = a(0),
            i = a(1),
            u = a(2),
            t = a(3);

        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var h = "PubMatic: ",
            f = "USD",
            s = "nFIn8aLzbd",
            y = void 0,
            E = {
                kadpageurl: "",
                gender: "",
                yob: "",
                lat: "",
                lon: "",
                wiid: "",
                profId: "",
                verId: ""
            },
            n = {
                NUMBER: "number",
                STRING: "string",
                BOOLEAN: "boolean",
                ARRAY: "array",
                OBJECT: "object"
            },
            o = {
                mimes: n.ARRAY,
                minduration: n.NUMBER,
                maxduration: n.NUMBER,
                startdelay: n.NUMBER,
                playbackmethod: n.ARRAY,
                api: n.ARRAY,
                protocols: n.ARRAY,
                w: n.NUMBER,
                h: n.NUMBER,
                battr: n.ARRAY,
                linearity: n.NUMBER,
                placement: n.NUMBER,
                minbitrate: n.NUMBER,
                maxbitrate: n.NUMBER
            },
            p = {
                TITLE: {
                    ID: 1,
                    KEY: "title",
                    TYPE: 0
                },
                IMAGE: {
                    ID: 2,
                    KEY: "image",
                    TYPE: 0
                },
                ICON: {
                    ID: 3,
                    KEY: "icon",
                    TYPE: 0
                },
                SPONSOREDBY: {
                    ID: 4,
                    KEY: "sponsoredBy",
                    TYPE: 1
                },
                BODY: {
                    ID: 5,
                    KEY: "body",
                    TYPE: 2
                },
                CLICKURL: {
                    ID: 6,
                    KEY: "clickUrl",
                    TYPE: 0
                },
                VIDEO: {
                    ID: 7,
                    KEY: "video",
                    TYPE: 0
                },
                EXT: {
                    ID: 8,
                    KEY: "ext",
                    TYPE: 0
                },
                DATA: {
                    ID: 9,
                    KEY: "data",
                    TYPE: 0
                },
                LOGO: {
                    ID: 10,
                    KEY: "logo",
                    TYPE: 0
                },
                SPONSORED: {
                    ID: 11,
                    KEY: "sponsored",
                    TYPE: 1
                },
                DESC: {
                    ID: 12,
                    KEY: "data",
                    TYPE: 2
                },
                RATING: {
                    ID: 13,
                    KEY: "rating",
                    TYPE: 3
                },
                LIKES: {
                    ID: 14,
                    KEY: "likes",
                    TYPE: 4
                },
                DOWNLOADS: {
                    ID: 15,
                    KEY: "downloads",
                    TYPE: 5
                },
                PRICE: {
                    ID: 16,
                    KEY: "price",
                    TYPE: 6
                },
                SALEPRICE: {
                    ID: 17,
                    KEY: "saleprice",
                    TYPE: 7
                },
                PHONE: {
                    ID: 18,
                    KEY: "phone",
                    TYPE: 8
                },
                ADDRESS: {
                    ID: 19,
                    KEY: "address",
                    TYPE: 9
                },
                DESC2: {
                    ID: 20,
                    KEY: "desc2",
                    TYPE: 10
                },
                DISPLAYURL: {
                    ID: 21,
                    KEY: "displayurl",
                    TYPE: 11
                },
                CTA: {
                    ID: 22,
                    KEY: "cta",
                    TYPE: 12
                }
            },
            c = {
                ICON: 1,
                LOGO: 2,
                IMAGE: 3
            },
            l = [{
                id: p.SPONSOREDBY.ID,
                required: !0,
                data: {
                    type: 1
                }
            }, {
                id: p.TITLE.ID,
                required: !0
            }, {
                id: p.IMAGE.ID,
                required: !0
            }],
            d = {
                1: "PMP",
                5: "PREF",
                6: "PMPG"
            },
            v = 0,
            I = !1,
            b = {},
            w = {};

        function T(e, r) {
            if (!m.isStr(r)) return r && m.logWarn(h + "Ignoring param key: " + e + ", expects string-value, found " + g(r)), y;
            switch (e) {
                case "pmzoneid":
                    return r.split(",").slice(0, 50).map((function(e) {
                        return e.trim()
                    })).join();
                case "kadfloor":
                case "lat":
                case "lon":
                    return parseFloat(r) || y;
                case "yob":
                    return parseInt(r) || y;
                default:
                    return r
            }
        }

        function O(e) {
            e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0, e.params.adSlot = (function(e) {
                return m.isStr(e) ? e.replace(/^\s+/g, "").replace(/\s+$/g, "") : ""
            })(e.params.adSlot);
            var r = e.params.adSlot,
                a = r.split(":");
            if (r = a[0], 2 == a.length && (e.params.adUnitIndex = a[1]), a = r.split("@"), e.params.adUnit = a[0], 1 < a.length) {
                if (2 != (a = a[1].split("x")).length) return void m.logWarn(h + "AdSlot Error: adSlot not in required format");
                e.params.width = parseInt(a[0]), e.params.height = parseInt(a[1])
            } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(u.b) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
                for (var i = 0, t = []; i < e.mediaTypes.banner.sizes.length; i++) 2 === e.mediaTypes.banner.sizes[i].length && t.push(e.mediaTypes.banner.sizes[i]);
                e.mediaTypes.banner.sizes = t, 1 <= e.mediaTypes.banner.sizes.length && (e.params.width = e.mediaTypes.banner.sizes[0][0], e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1))
            }
        }

        function S(e, r, a) {
            var i, t = "Ignoring param key: " + e + ", expects " + a + ", found " + g(r);
            switch (a) {
                case n.BOOLEAN:
                    i = m.isBoolean;
                    break;
                case n.NUMBER:
                    i = m.isNumber;
                    break;
                case n.STRING:
                    i = m.isStr;
                    break;
                case n.ARRAY:
                    i = m.isArray
            }
            return i(r) ? r : (m.logWarn(h + t), y)
        }

        function D(e) {
            var r, a, i, t = {
                assets: []
            };
            for (var s in e) {
                if (e.hasOwnProperty(s)) {
                    var n = {};
                    if (!(t.assets && 0 < t.assets.length && t.assets.hasOwnProperty(s))) switch (s) {
                        case p.TITLE.KEY:
                            e[s].len || e[s].length ? n = {
                                id: p.TITLE.ID,
                                required: e[s].required ? 1 : 0,
                                title: {
                                    len: e[s].len || e[s].length,
                                    ext: e[s].ext
                                }
                            } : m.logWarn(h + "Error: Title Length is required for native ad: " + JSON.stringify(e));
                            break;
                        case p.IMAGE.KEY:
                            e[s].sizes && 0 < e[s].sizes.length ? n = {
                                id: p.IMAGE.ID,
                                required: e[s].required ? 1 : 0,
                                img: {
                                    type: c.IMAGE,
                                    w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : y),
                                    h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : y),
                                    wmin: e[s].wmin || e[s].minimumWidth || (e[s].minsizes ? e[s].minsizes[0] : y),
                                    hmin: e[s].hmin || e[s].minimumHeight || (e[s].minsizes ? e[s].minsizes[1] : y),
                                    mimes: e[s].mimes,
                                    ext: e[s].ext
                                }
                            } : m.logWarn(h + "Error: Image sizes is required for native ad: " + JSON.stringify(e));
                            break;
                        case p.ICON.KEY:
                            e[s].sizes && 0 < e[s].sizes.length ? n = {
                                id: p.ICON.ID,
                                required: e[s].required ? 1 : 0,
                                img: {
                                    type: c.ICON,
                                    w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : y),
                                    h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : y)
                                }
                            } : m.logWarn(h + "Error: Icon sizes is required for native ad: " + JSON.stringify(e));
                            break;
                        case p.VIDEO.KEY:
                            n = {
                                id: p.VIDEO.ID,
                                required: e[s].required ? 1 : 0,
                                video: {
                                    minduration: e[s].minduration,
                                    maxduration: e[s].maxduration,
                                    protocols: e[s].protocols,
                                    mimes: e[s].mimes,
                                    ext: e[s].ext
                                }
                            };
                            break;
                        case p.EXT.KEY:
                            n = {
                                id: p.EXT.ID,
                                required: e[s].required ? 1 : 0
                            };
                            break;
                        case p.LOGO.KEY:
                            n = {
                                id: p.LOGO.ID,
                                required: e[s].required ? 1 : 0,
                                img: {
                                    type: c.LOGO,
                                    w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : y),
                                    h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : y)
                                }
                            };
                            break;
                        case p.SPONSOREDBY.KEY:
                        case p.BODY.KEY:
                        case p.RATING.KEY:
                        case p.LIKES.KEY:
                        case p.DOWNLOADS.KEY:
                        case p.PRICE.KEY:
                        case p.SALEPRICE.KEY:
                        case p.PHONE.KEY:
                        case p.ADDRESS.KEY:
                        case p.DESC2.KEY:
                        case p.DISPLAYURL.KEY:
                        case p.CTA.KEY:
                            r = w[s], a = e, void 0, i = r.KEY, n = {
                                id: r.ID,
                                required: a[i].required ? 1 : 0,
                                data: {
                                    type: r.TYPE,
                                    len: a[i].len,
                                    ext: a[i].ext
                                }
                            }
                    }
                }
                n && n.id && (t.assets[t.assets.length] = n)
            }
            var o = l.length,
                d = 0;
            return l.forEach((function(e) {
                for (var r = t.assets.length, a = 0; a < r; a++)
                    if (e.id == t.assets[a].id) {
                        d++;
                        break
                    }
            })), I = o != d, t
        }

        function Y(e) {
            var r, a = e.mediaTypes.banner.sizes,
                i = [];
            if (a !== y && m.isArray(a)) {
                if (r = {}, e.params.width || e.params.height) r.w = e.params.width, r.h = e.params.height;
                else {
                    if (0 === a.length) return r = y, m.logWarn(h + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r;
                    r.w = parseInt(a[0][0]), r.h = parseInt(a[0][1]), a = a.splice(1, a.length - 1)
                }
                0 < a.length && (i = [], a.forEach((function(e) {
                    1 < e.length && i.push({
                        w: e[0],
                        h: e[1]
                    })
                })), 0 < i.length && (r.format = i)), r.pos = 0, r.topframe = m.inIframe() ? 0 : 1
            } else m.logWarn(h + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r = y;
            return r
        }

        function P(e) {
            var r, a = e.params.video;
            if (a !== y) {
                for (var i in r = {}, o) a.hasOwnProperty(i) && (r[i] = S(i, a[i], o[i]));
                m.isArray(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0]), r.h = parseInt(e.mediaTypes.video.playerSize[0][1])) : m.isNumber(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0]), r.h = parseInt(e.mediaTypes.video.playerSize[1])), e.params.video.hasOwnProperty("skippable") && (r.ext = {
                    video_skippable: e.params.video.skippable ? 1 : 0
                })
            } else r = y, m.logWarn(h + "Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
            return r
        }

        function R(e) {
            var r = (function(e) {
                var r, a = (r = window.DigiTrust && (t.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                    member: e
                }))) && r.success && r.identity || null;
                return !a || a.privacy && a.privacy.optout ? null : a
            })(s);
            null !== r && e.push({
                source: "digitru.st",
                uids: [{
                    id: r.id || "",
                    atype: 1,
                    ext: {
                        keyv: parseInt(r.keyv) || 0
                    }
                }]
            })
        }

        function k(e) {
            var r = [];
            R(r), (function(e) {
                var r = t.config.getConfig("adsrvrOrgId");
                r && m.isStr(r.TDID) && e.push({
                    source: "adserver.org",
                    uids: [{
                        id: r.TDID,
                        atype: 1,
                        ext: {
                            rtiPartner: "TDID"
                        }
                    }]
                })
            })(r), 0 < r.length && (e.user.eids = r)
        }
        m._each(p, (function(e) {
            b[e.ID] = e.KEY
        })), m._each(p, (function(e) {
            w[e.KEY] = e
        }));
        var A = {
            code: "pubmatic",
            supportedMediaTypes: [u.b, u.d, u.c],
            isBidRequestValid: function(e) {
                return !(!e || !e.params) && (m.isStr(e.params.publisherId) ? m.isStr(e.params.adSlot) ? !!(!e.params.hasOwnProperty("video") || e.params.video.hasOwnProperty("mimes") && m.isArray(e.params.video.mimes) && 0 !== e.params.video.mimes.length) || (m.logWarn(h + "Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), !1) : (m.logWarn(h + "Error: adSlotId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), !1) : (m.logWarn(h + "Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), !1))
            },
            buildRequests: function(e, r) {
                var a;
                r && r.refererInfo && (a = r.refererInfo);
                var i, t, s = (function(e) {
                        var r = {};
                        return r.pageURL = m.getTopWindowUrl(), e && e.referer ? r.refURL = e.referer : r.refURL = "", r
                    })(a),
                    n = (function(e) {
                        return {
                            id: "" + (new Date).getTime(),
                            at: 1,
                            cur: [f],
                            imp: [],
                            site: {
                                page: e.pageURL,
                                ref: e.refURL,
                                publisher: {}
                            },
                            device: {
                                ua: navigator.userAgent,
                                js: 1,
                                dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                                h: screen.height,
                                w: screen.width,
                                language: navigator.language
                            },
                            user: {},
                            ext: {}
                        }
                    })(s),
                    o = "",
                    d = "",
                    p = [],
                    c = [];
                if (e.forEach((function(e) {
                        if (O(t = m.deepClone(e)), t.params.hasOwnProperty("video")) {
                            if (!(t.params.adSlot && t.params.adUnit && t.params.adUnitIndex)) return void m.logWarn(h + "Skipping the non-standard adslot: ", t.params.adSlot, JSON.stringify(t))
                        } else {
                            if (!(t.params.adSlot && t.params.adUnit && t.params.adUnitIndex)) return void m.logWarn(h + "Skipping the non-standard adslot: ", t.params.adSlot, JSON.stringify(t));
                            if (!(t.hasOwnProperty("mediaTypes") && t.mediaTypes.hasOwnProperty(u.c) || 0 !== t.params.width || 0 !== t.params.height)) return void m.logWarn(h + "Skipping the non-standard adslot: ", t.params.adSlot, JSON.stringify(t))
                        }
                        s.pubId = s.pubId || t.params.publisherId, (s = (function(e, r) {
                            var a, i, t;
                            for (a in r.kadpageurl || (r.kadpageurl = r.pageURL), E) E.hasOwnProperty(a) && (i = e[a]) && ("object" === g(t = E[a]) && (i = t.f(i, r)), m.isStr(i) ? r[a] = i : m.logWarn(h + "Ignoring param : " + a + " with value : " + E[a] + ", expects string-value, found " + g(i)));
                            return r
                        })(t.params, s)).transactionId = t.transactionId, "" === o ? o = t.params.currency || y : t.params.hasOwnProperty("currency") && o !== t.params.currency && m.logWarn(h + "Currency specifier ignored. Only one currency permitted."), t.params.currency = o, t.params.hasOwnProperty("dctr") && m.isStr(t.params.dctr) && p.push(t.params.dctr), t.params.hasOwnProperty("bcat") && m.isArray(t.params.bcat) && (c = c.concat(t.params.bcat));
                        var r = (function(e, r) {
                            var a, i, t = {},
                                s = {},
                                n = e.hasOwnProperty("sizes") ? e.sizes : [],
                                o = "",
                                d = [];
                            if (t = {
                                    id: e.bidId,
                                    tagid: e.params.adUnit,
                                    bidfloor: T("kadfloor", e.params.kadfloor),
                                    secure: "https:" === window.location.protocol ? 1 : 0,
                                    ext: {
                                        pmZoneId: T("pmzoneid", e.params.pmzoneid)
                                    },
                                    bidfloorcur: e.params.currency ? T("currency", e.params.currency) : f
                                }, e.hasOwnProperty("mediaTypes"))
                                for (o in e.mediaTypes) switch (o) {
                                    case u.b:
                                        (a = Y(e)) !== y && (t.banner = a);
                                        break;
                                    case u.c:
                                        s.request = JSON.stringify(D(e.nativeParams)), I ? m.logWarn(h + "Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : t.native = s;
                                        break;
                                    case u.d:
                                        (i = P(e)) !== y && (t.video = i)
                                } else a = {
                                    pos: 0,
                                    w: e.params.width,
                                    h: e.params.height,
                                    topframe: m.inIframe() ? 0 : 1
                                }, m.isArray(n) && 1 < n.length && ((n = n.splice(1, n.length - 1)).forEach((function(e) {
                                    d.push({
                                        w: e[0],
                                        h: e[1]
                                    })
                                })), a.format = d), t.banner = a;
                            return t.hasOwnProperty(u.b) || t.hasOwnProperty(u.c) || t.hasOwnProperty(u.d) ? t : y
                        })(t);
                        r && n.imp.push(r)
                    })), 0 != n.imp.length) {
                    if (n.site.publisher.id = s.pubId.trim(), v = s.pubId.trim(), n.ext.wrapper = {}, n.ext.wrapper.profile = parseInt(s.profId) || y, n.ext.wrapper.version = parseInt(s.verId) || y, n.ext.wrapper.wiid = s.wiid || y, n.ext.wrapper.wv = "prebid_prebid_2.10.0", n.ext.wrapper.transactionId = s.transactionId, n.ext.wrapper.wp = "pbjs", n.user.gender = s.gender ? s.gender.trim() : y, n.user.geo = {}, r && r.gdprConsent && (n.user.ext = {
                            consent: r.gdprConsent.consentString
                        }, n.regs = {
                            ext: {
                                gdpr: r.gdprConsent.gdprApplies ? 1 : 0
                            }
                        }), n.user.geo.lat = T("lat", s.lat), n.user.geo.lon = T("lon", s.lon), n.user.yob = T("yob", s.yob), n.device.geo = n.user.geo, n.site.page = s.kadpageurl.trim() || n.site.page.trim(), n.site.domain = (function(e) {
                            var r = document.createElement("a");
                            return r.href = e, r.hostname
                        })(n.site.page), 0 < p.length)
                        if (e[0].params.hasOwnProperty("dctr")) {
                            if (d = e[0].params.dctr, m.isStr(d) && 0 < d.length) {
                                var l = d.split("|");
                                d = "", l.forEach((function(e) {
                                    d += 0 < e.length ? e.trim() + "|" : ""
                                })), i = d.length, "|" === d.substring(i, i - 1) && (d = d.substring(0, i - 1)), n.site.ext = {
                                    key_val: d.trim()
                                }
                            } else m.logWarn(h + "Ignoring param : dctr with value : " + d + ", expects string-value, found empty or non-string value");
                            1 < p.length && m.logWarn(h + "dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits")
                        } else m.logWarn(h + "dctr value not found in 1st adunit, ignoring values from subsequent adunits");
                    return k(n), (function(e, r) {
                        0 < (r = r.filter((function(e) {
                            return "string" == typeof e || (m.logWarn(h + "bcat: Each category should be a string, ignoring category: " + e), !1)
                        })).map((function(e) {
                            return e.trim()
                        })).filter((function(e, r, a) {
                            if (3 < e.length) return a.indexOf(e) === r;
                            m.logWarn(h + "bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e)
                        }))).length && (m.logWarn(h + "bcat: Selected: ", r), e.bcat = r)
                    })(n, c), {
                        method: "POST",
                        url: "//hbopenbid.pubmatic.com/translator?source=prebid-client",
                        data: JSON.stringify(n)
                    }
                }
            },
            interpretResponse: function(e, i) {
                var t = [],
                    s = f;
                try {
                    e.body && e.body.seatbid && m.isArray(e.body.seatbid) && (s = e.body.cur || s, e.body.seatbid.forEach((function(e) {
                        e.bid && m.isArray(e.bid) && e.bid.forEach((function(r) {
                            var e = JSON.parse(i.data),
                                a = {
                                    requestId: r.impid,
                                    cpm: (parseFloat(r.price) || 0).toFixed(2),
                                    width: r.w,
                                    height: r.h,
                                    creativeId: r.crid || r.id,
                                    dealId: r.dealid,
                                    currency: s,
                                    netRevenue: !1,
                                    ttl: 300,
                                    referrer: e.site && e.site.ref ? e.site.ref : "",
                                    ad: r.adm
                                };
                            e.imp && 0 < e.imp.length && e.imp.forEach((function(e) {
                                if (r.impid === e.id) switch (function(r, e) {
                                    var a = "",
                                        i = new RegExp(/VAST\s+version/);
                                    if (0 <= r.indexOf('span class="PubAPIAd"')) e.mediaType = u.b;
                                    else if (i.test(r)) e.mediaType = u.d;
                                    else try {
                                        (a = JSON.parse(r.replace(/\\/g, ""))) && a.native && (e.mediaType = u.c)
                                    } catch (e) {
                                        m.logWarn(h + "Error: Cannot parse native reponse for ad response: " + r)
                                    }
                                }(r.adm, a), a.mediaType) {
                                    case u.b:
                                        break;
                                    case u.d:
                                        a.width = r.hasOwnProperty("w") ? r.w : e.video.w, a.height = r.hasOwnProperty("h") ? r.h : e.video.h, a.vastXml = r.adm;
                                        break;
                                    case u.c:
                                        !(function(e, r) {
                                            if (r.native = {}, e.hasOwnProperty("adm")) {
                                                var a = "";
                                                try {
                                                    a = JSON.parse(e.adm.replace(/\\/g, ""))
                                                } catch (e) {
                                                    return m.logWarn(h + "Error: Cannot parse native reponse for ad response: " + r.adm)
                                                }
                                                if (a && a.native && a.native.assets && 0 < a.native.assets.length) {
                                                    r.mediaType = u.c;
                                                    for (var i = 0, t = a.native.assets.length; i < t; i++) switch (a.native.assets[i].id) {
                                                        case p.TITLE.ID:
                                                            r.native.title = a.native.assets[i].title && a.native.assets[i].title.text;
                                                            break;
                                                        case p.IMAGE.ID:
                                                            r.native.image = {
                                                                url: a.native.assets[i].img && a.native.assets[i].img.url,
                                                                height: a.native.assets[i].img && a.native.assets[i].img.h,
                                                                width: a.native.assets[i].img && a.native.assets[i].img.w
                                                            };
                                                            break;
                                                        case p.ICON.ID:
                                                            r.native.icon = {
                                                                url: a.native.assets[i].img && a.native.assets[i].img.url,
                                                                height: a.native.assets[i].img && a.native.assets[i].img.h,
                                                                width: a.native.assets[i].img && a.native.assets[i].img.w
                                                            };
                                                            break;
                                                        case p.SPONSOREDBY.ID:
                                                        case p.BODY.ID:
                                                        case p.LIKES.ID:
                                                        case p.DOWNLOADS.ID:
                                                        case p.PRICE:
                                                        case p.SALEPRICE.ID:
                                                        case p.PHONE.ID:
                                                        case p.ADDRESS.ID:
                                                        case p.DESC2.ID:
                                                        case p.CTA.ID:
                                                        case p.RATING.ID:
                                                        case p.DISPLAYURL.ID:
                                                            r.native[b[a.native.assets[i].id]] = a.native.assets[i].data && a.native.assets[i].data.value
                                                    }
                                                    r.native.clickUrl = a.native.link && a.native.link.url, r.native.clickTrackers = a.native.link && a.native.link.clicktrackers || [], r.native.impressionTrackers = a.native.imptrackers || [], r.native.jstracker = a.native.jstracker || [], r.width || (r.width = 0), r.height || (r.height = 0)
                                                }
                                            }
                                        })(r, a)
                                }
                            })), r.ext && r.ext.deal_channel && (a.dealChannel = d[r.ext.deal_channel] || null), a.meta = {}, r.ext && r.ext.dspid && (a.meta.networkId = r.ext.dspid), r.ext && r.ext.advid && (a.meta.buyerId = r.ext.advid), r.adomain && 0 < r.adomain.length && (a.meta.clickUrl = r.adomain[0]), t.push(a)
                        }))
                    })))
                } catch (e) {
                    m.logError(e)
                }
                return t
            },
            getUserSyncs: function(e, r, a) {
                var i = "//ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + v;
                if (a && (i += "&gdpr=" + (a.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")), e.iframeEnabled) return [{
                    type: "iframe",
                    url: i
                }];
                m.logWarn(h + "Please enable iframe based user sync.")
            },
            transformBidParams: function(e, r) {
                return m.convertTypes({
                    publisherId: "string",
                    adSlot: "string"
                }, e)
            }
        };
        Object(i.registerBidder)(A)
    }
}, [430]);
pbjsChunk([76], {
    472: function(e, r, t) {
        e.exports = t(473)
    },
    473: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "FASTLANE_ENDPOINT", (function() {
            return s
        })), t.d(r, "VIDEO_ENDPOINT", (function() {
            return m
        })), t.d(r, "SYNC_ENDPOINT", (function() {
            return n
        })), t.d(r, "spec", (function() {
            return v
        })), r.hasVideoMediaType = h, r.masSizeOrdering = _, r.determineRubiconVideoSizeId = A, r.getPriceGranularity = T, r.hasValidVideoParams = I, r.resetUserSync = function() {
            j = !1
        };
        var c = t(0),
            i = t(1),
            d = t(3),
            u = t(2);

        function a() {
            return (a = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }).apply(this, arguments)
        }

        function p(e, r) {
            return (function(e) {
                if (Array.isArray(e)) return e
            })(e) || (function(e, r) {
                var t = [],
                    i = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (t.push(a.value), !r || t.length !== r); i = !0);
                } catch (e) {
                    n = !0, o = e
                } finally {
                    try {
                        i || null == s.return || s.return()
                    } finally {
                        if (n) throw o
                    }
                }
                return t
            })(e, r) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }

        function l(e) {
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function f() {
            return "https:" === location.protocol
        }
        var s = "//fastlane.rubiconproject.com/a/api/fastlane.json",
            m = "//prebid-server.rubiconproject.com/openrtb2/auction",
            n = "https://eus.rubiconproject.com/usync.html",
            g = {
                1: "468x60",
                2: "728x90",
                5: "120x90",
                8: "120x600",
                9: "160x600",
                10: "300x600",
                13: "200x200",
                14: "250x250",
                15: "300x250",
                16: "336x280",
                19: "300x100",
                31: "980x120",
                32: "250x360",
                33: "180x500",
                35: "980x150",
                37: "468x400",
                38: "930x180",
                39: "750x100",
                40: "750x200",
                41: "750x300",
                43: "320x50",
                44: "300x50",
                48: "300x300",
                53: "1024x768",
                54: "300x1050",
                55: "970x90",
                57: "970x250",
                58: "1000x90",
                59: "320x80",
                60: "320x150",
                61: "1000x1000",
                64: "580x500",
                65: "640x480",
                66: "930x600",
                67: "320x480",
                68: "1800x1000",
                72: "320x320",
                73: "320x160",
                78: "980x240",
                79: "980x300",
                80: "980x400",
                83: "480x300",
                94: "970x310",
                96: "970x210",
                101: "480x320",
                102: "768x1024",
                103: "480x280",
                105: "250x800",
                108: "320x240",
                113: "1000x300",
                117: "320x100",
                125: "800x250",
                126: "200x600",
                144: "980x600",
                145: "980x150",
                159: "320x250",
                179: "250x600",
                195: "600x300",
                198: "640x360",
                199: "640x200",
                213: "1030x590",
                214: "980x360",
                229: "320x180",
                232: "580x400",
                257: "400x600"
            };
        c._each(g, (function(e, r) {
            return g[e] = r
        }));
        var v = {
            code: "rubicon",
            supportedMediaTypes: [u.b, u.d],
            isBidRequestValid: function(e) {
                if ("object" !== l(e.params)) return !1;
                for (var r = 0, t = ["accountId", "siteId", "zoneId"]; r < t.length; r++)
                    if (e.params[t[r]] = parseInt(e.params[t[r]]), isNaN(e.params[t[r]])) return c.logError("Rubicon bid adapter Error: wrong format of accountId or siteId or zoneId."), !1;
                var i = x(e, !0);
                return !!i && ("video" !== i || I(e))
            },
            buildRequests: function(e, o) {
                var r = [],
                    t = e.filter((function(e) {
                        return "video" === x(e)
                    })).map((function(e) {
                        e.startTime = (new Date).getTime();
                        var r = {
                            id: e.transactionId,
                            test: d.config.getConfig("debug") ? 1 : 0,
                            cur: ["USD"],
                            source: {
                                tid: e.transactionId
                            },
                            tmax: d.config.getConfig("TTL") || 1e3,
                            imp: [{
                                exp: 300,
                                id: e.adUnitCode,
                                secure: f() || e.params.secure ? 1 : 0,
                                ext: {
                                    rubicon: e.params
                                },
                                video: c.deepAccess(e, "mediaTypes.video") || {}
                            }],
                            ext: {
                                prebid: {
                                    cache: {
                                        vastxml: {
                                            returnCreative: !1
                                        }
                                    },
                                    targeting: {
                                        includewinners: !0,
                                        includebidderkeys: !1,
                                        priceGranularity: T(d.config)
                                    }
                                }
                            }
                        };
                        r.imp[0].ext.rubicon.video.size_id = A(e), (function(r, t, e) {
                            if (!r) return;
                            "object" === l(d.config.getConfig("app")) ? r.app = d.config.getConfig("app") : r.site = {
                                page: y(t, e)
                            };
                            "object" === l(d.config.getConfig("device")) && (r.device = d.config.getConfig("device"));
                            t.params.video.language && ["site", "device"].forEach((function(e) {
                                r[e] && (r[e].content = a({
                                    language: t.params.video.language
                                }, r[e].content))
                            }))
                        })(r, e, o), (function(e, r) {
                            "object" === l(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip);
                            "object" === l(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay);
                            "object" === l(e.imp[0].video) && void 0 === e.imp[0].video.pos && (e.imp[0].video.pos = "atf" === r.params.position ? 1 : "btf" === r.params.position ? 3 : 0);
                            var t = b(r, "video");
                            e.imp[0].video.w = t[0], e.imp[0].video.h = t[1]
                        })(r, e);
                        var t = (function() {
                            var e = (function() {
                                var e = window.DigiTrust && (d.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                                    member: "T9QSFKPDN9"
                                }));
                                return e && e.success && e.identity || null
                            })();
                            if (!e || e.privacy && e.privacy.optout) return null;
                            return {
                                id: e.id,
                                keyv: e.keyv,
                                pref: 0
                            }
                        })();
                        if (t && (r.user = {
                                ext: {
                                    digitrust: t
                                }
                            }), o.gdprConsent) {
                            var i;
                            "boolean" == typeof o.gdprConsent.gdprApplies && (i = o.gdprConsent.gdprApplies ? 1 : 0), r.regs ? r.regs.ext ? r.regs.ext.gdpr = i : r.regs.ext = {
                                gdpr: i
                            } : r.regs = {
                                ext: {
                                    gdpr: i
                                }
                            };
                            var n = o.gdprConsent.consentString;
                            r.user ? r.user.ext ? r.user.ext.consent = n : r.user.ext = {
                                consent: n
                            } : r.user = {
                                ext: {
                                    consent: n
                                }
                            }
                        }
                        return {
                            method: "POST",
                            url: m,
                            data: r,
                            bidRequest: e
                        }
                    }));
                if (!0 !== d.config.getConfig("rubicon.singleRequest")) r = t.concat(e.filter((function(e) {
                    return "banner" === x(e)
                })).map((function(e) {
                    var i = v.createSlotParams(e, o);
                    return {
                        method: "GET",
                        url: s,
                        data: v.getOrderedParams(i).reduce((function(e, r) {
                            var t = i[r];
                            return c.isStr(t) && "" !== t || c.isNumber(t) ? "".concat(e).concat(r, "=").concat(encodeURIComponent(t), "&") : e
                        }), "") + "slots=1&rand=".concat(Math.random()),
                        bidRequest: e
                    }
                })));
                else {
                    var n = e.filter((function(e) {
                        return "banner" === x(e)
                    })).reduce((function(e, r) {
                        return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e
                    }), {});
                    r = t.concat(Object.keys(n).map((function(e) {
                        var r = n[e];
                        10 < r.length && (c.logWarn("Rubicon bid adapter Warning: single request mode has a limit of 10 bids: ".concat(r.length - 10, " bids were not sent")), r = r.slice(0, 10));
                        var i = v.combineSlotUrlParams(r.map((function(e) {
                            return v.createSlotParams(e, o)
                        })));
                        return {
                            method: "GET",
                            url: s,
                            data: v.getOrderedParams(i).reduce((function(e, r) {
                                var t = i[r];
                                return c.isStr(t) && "" !== t || c.isNumber(t) ? "".concat(e).concat(r, "=").concat(encodeURIComponent(t), "&") : e
                            }), "") + "slots=".concat(r.length, "&rand=").concat(Math.random()),
                            bidRequest: r
                        }
                    })))
                }
                return r
            },
            getOrderedParams: function(e) {
                var r = /^tg_v/,
                    t = /^tg_i/,
                    i = ["tpid_tdid", "account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "rf", "dt.id", "dt.keyv", "dt.pref", "p_geo.latitude", "p_geo.longitude", "kw"].concat(Object.keys(e).filter((function(e) {
                        return r.test(e)
                    }))).concat(Object.keys(e).filter((function(e) {
                        return t.test(e)
                    }))).concat(["tk_flint", "x_source.tid", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                return i.concat(Object.keys(e).filter((function(e) {
                    return -1 === i.indexOf(e)
                })))
            },
            combineSlotUrlParams: function(n) {
                if (1 === n.length) return n[0];
                var i = n.reduce((function(r, t, i) {
                        return Object.keys(t).forEach((function(e) {
                            r.hasOwnProperty(e) || (r[e] = new Array(n.length)), r[e].splice(i, 1, t[e])
                        })), r
                    }), {}),
                    o = new RegExp("^([^;]*)(;\\1)+$");
                return Object.keys(i).forEach((function(e) {
                    var r = i[e].join(";"),
                        t = r.match(o);
                    i[e] = t ? t[1] : r
                })), i
            },
            createSlotParams: function(e, r) {
                e.startTime = (new Date).getTime();
                var t = e.params,
                    i = b(e, "banner"),
                    n = p(t.latLong || [], 2),
                    o = n[0],
                    a = n[1],
                    s = {
                        account_id: t.accountId,
                        site_id: t.siteId,
                        zone_id: t.zoneId,
                        size_id: i[0],
                        alt_size_ids: i.slice(1).join(",") || void 0,
                        p_pos: "atf" === t.position || "btf" === t.position ? t.position : "unknown",
                        rp_floor: .01 < (t.floor = parseFloat(t.floor)) ? t.floor : .01,
                        rp_secure: f() ? "1" : "0",
                        tk_flint: "pbjs_lite_v2.10.0",
                        "x_source.tid": e.transactionId,
                        p_screen_res: [window.screen.width, window.screen.height].join("x"),
                        kw: Array.isArray(t.keywords) ? t.keywords.join(",") : "",
                        tk_user_key: t.userId,
                        "p_geo.latitude": isNaN(parseFloat(o)) ? void 0 : parseFloat(o).toFixed(4),
                        "p_geo.longitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                        "tg_fl.eid": e.code,
                        rf: y(e, r)
                    };
                (e.userId || {}).tdid && (s.tpid_tdid = e.userId.tdid), r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (s.gdpr = Number(r.gdprConsent.gdprApplies)), s.gdpr_consent = r.gdprConsent.consentString), null !== t.visitor && "object" === l(t.visitor) && Object.keys(t.visitor).forEach((function(e) {
                    null != t.visitor[e] && (s["tg_v.".concat(e)] = t.visitor[e].toString())
                })), null !== t.inventory && "object" === l(t.inventory) && Object.keys(t.inventory).forEach((function(e) {
                    null != t.inventory[e] && (s["tg_i.".concat(e)] = t.inventory[e].toString())
                }));
                var c = (function() {
                    var e = (function() {
                        var e = window.DigiTrust && (d.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                            member: "T9QSFKPDN9"
                        }));
                        return e && e.success && e.identity || null
                    })();
                    if (!e || e.privacy && e.privacy.optout) return [];
                    return {
                        "dt.id": e.id,
                        "dt.keyv": e.keyv,
                        "dt.pref": 0
                    }
                })();
                return Object.keys(c).forEach((function(e) {
                    s[e] = c[e]
                })), s
            },
            interpretResponse: function(a, e) {
                var s = e.bidRequest;
                if (!(a = a.body) || "object" !== l(a)) return [];
                if (a.seatbid) {
                    var r = c.deepAccess(a, "ext.errors.rubicon");
                    Array.isArray(r) && 0 < r.length && r.forEach((function(e) {
                        c.logError("Got error from PBS Java openRTB: " + e)
                    }));
                    var o = [];
                    return a.seatbid.forEach((function(n) {
                        (n.bid || []).forEach((function(e) {
                            var r = {
                                requestId: s.bidId,
                                currency: a.cur || "USD",
                                creativeId: e.crid,
                                cpm: e.price || 0,
                                bidderCode: n.seat,
                                ttl: 300,
                                netRevenue: d.config.getConfig("rubicon.netRevenue") || !1,
                                width: e.w || c.deepAccess(s, "mediaTypes.video.w") || c.deepAccess(s, "params.video.playerWidth"),
                                height: e.h || c.deepAccess(s, "mediaTypes.video.h") || c.deepAccess(s, "params.video.playerHeight")
                            };
                            e.dealid && (r.dealId = e.dealid);
                            var t = c.deepAccess(a, "ext.responsetimemillis.rubicon");
                            if (s && t && (s.serverResponseTimeMs = t), c.deepAccess(e, "ext.prebid.type") === u.d) {
                                r.mediaType = u.d;
                                var i = c.deepAccess(e, "ext.prebid.targeting");
                                i && "object" === l(i) && (r.adserverTargeting = i), e.ext.prebid.cache && "object" === l(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (r.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, r.vastUrl = e.ext.prebid.cache.vastXml.url) : i && i.hb_uuid && i.hb_cache_host && i.hb_cache_path && (r.videoCacheKey = i.hb_uuid, r.vastUrl = "https://".concat(i.hb_cache_host).concat(i.hb_cache_path, "?uuid=").concat(i.hb_uuid)), e.adm && (r.vastXml = e.adm), e.nurl && (r.vastUrl = e.nurl), !r.vastUrl && e.nurl && (r.vastUrl = e.nurl)
                            } else c.logError("Prebid Server Java openRTB returns response with media type other than video for video request.");
                            o.push(r)
                        }))
                    })), o
                }
                var t = a.ads;
                return "object" !== l(s) || Array.isArray(s) || "video" !== x(s) || "object" !== l(t) || (t = t[s.adUnitCode]), !Array.isArray(t) || t.length < 1 ? [] : t.reduce((function(e, r, t) {
                    if ("ok" !== r.status) return e;
                    var i = Array.isArray(s) ? s[t] : s;
                    if (i && "object" === l(i)) {
                        var n = {
                            requestId: i.bidId,
                            currency: "USD",
                            creativeId: r.creative_id || "".concat(r.network || "", "-").concat(r.advertiser || ""),
                            cpm: r.cpm || 0,
                            dealId: r.deal,
                            ttl: 300,
                            netRevenue: d.config.getConfig("rubicon.netRevenue") || !1,
                            rubicon: {
                                advertiserId: r.advertiser,
                                networkId: r.network
                            }
                        };
                        if (r.creative_type && (n.mediaType = r.creative_type), r.creative_type === u.d) n.width = i.params.video.playerWidth, n.height = i.params.video.playerHeight, n.vastUrl = r.creative_depot_url, n.impression_id = r.impression_id, n.videoCacheKey = r.impression_id;
                        else {
                            n.ad = (function(e, r) {
                                return "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(r, "'>\n<script type='text/javascript'>").concat(e, "<\/script>\n</div>\n</body>\n</html>")
                            })(r.script, r.impression_id);
                            var o = p(g[r.size_id].split("x").map((function(e) {
                                return Number(e)
                            })), 2);
                            n.width = o[0], n.height = o[1]
                        }
                        n.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce((function(e, r) {
                            return e[r.key] = r.values[0], e
                        }), {
                            rpfl_elemid: i.adUnitCode
                        }), e.push(n)
                    } else c.logError("Rubicon bid adapter Error: bidRequest undefined at index position:".concat(t), s, a);
                    return e
                }), []).sort((function(e, r) {
                    return (r.cpm || 0) - (e.cpm || 0)
                }))
            },
            getUserSyncs: function(e, r, t) {
                if (!j && e.iframeEnabled) {
                    var i = "";
                    return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? i += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString) : i += "?gdpr_consent=".concat(t.consentString)), j = !0, {
                        type: "iframe",
                        url: n + i
                    }
                }
            },
            transformBidParams: function(e, r) {
                return c.convertTypes({
                    accountId: "number",
                    siteId: "number",
                    zoneId: "number"
                }, e)
            }
        };

        function y(e, r) {
            var t = d.config.getConfig("pageUrl");
            return e.params.referrer ? t = e.params.referrer : t || (t = r.refererInfo.referer), e.params.secure ? t.replace(/^http:/i, "https:") : t
        }

        function b(e, r) {
            var t = e.params;
            if ("video" === r) {
                var i = [];
                return t.video && t.video.playerWidth && t.video.playerHeight ? i = [t.video.playerWidth, t.video.playerHeight] : Array.isArray(c.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? i = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (i = e.sizes[0]), i
            }
            var n = [];
            return Array.isArray(t.sizes) ? n = t.sizes : void 0 !== c.deepAccess(e, "mediaTypes.banner.sizes") ? n = o(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? n = o(e.sizes) : c.logWarn("Warning: no sizes are setup or found"), _(n)
        }

        function o(e) {
            return c.parseSizesInput(e).reduce((function(e, r) {
                var t = parseInt(g[r], 10);
                return t && e.push(t), e
            }), [])
        }

        function h(e) {
            return "object" === l(c.deepAccess(e, "params.video")) && void 0 !== c.deepAccess(e, "mediaTypes.".concat(u.d))
        }

        function x(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            return h(e) ? -1 === ["outstream", "instream"].indexOf(c.deepAccess(e, "mediaTypes.".concat(u.d, ".context"))) ? void(r && c.logError("Rubicon bid adapter requires mediaTypes.video.context to be one of outstream or instream")) : b(e, "video").length < 2 ? void(r && c.logError("Rubicon bid adapter could not determine the playerSize of the video\nplayerWidth and playerHeight are inferred from one of params.playerWidth/playerHeight or mediaTypes.video.playerSize or adUnit.sizes, in that order")) : (r && c.logMessage("Rubicon bid adapter making video request for adUnit", e.adUnitCode), "video") : 0 === b(e, "banner").length ? void(r && c.logError("Rubicon bid adapter could not determine the sizes for a banner request\nThey are inferred from one of params.sizes or mediaTypes.banner.sizes or adUnit.sizes, in that order")) : (r && c.logMessage("Rubicon bid adapter making banner request for adUnit", e.adUnitCode), "banner")
        }

        function _(e) {
            var n = [15, 2, 9];
            return e.sort((function(e, r) {
                var t = n.indexOf(e),
                    i = n.indexOf(r);
                return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r
            }))
        }

        function A(e) {
            var r = parseInt(c.deepAccess(e, "params.video.size_id"));
            return isNaN(r) ? "outstream" === c.deepAccess(e, "mediaTypes.".concat(u.d, ".context")) ? 203 : 201 : r
        }

        function T(e) {
            return {
                ranges: {
                    low: [{
                        max: 5,
                        increment: .5
                    }],
                    medium: [{
                        max: 20,
                        increment: .1
                    }],
                    high: [{
                        max: 20,
                        increment: .01
                    }],
                    auto: [{
                        max: 5,
                        increment: .05
                    }, {
                        min: 5,
                        max: 10,
                        increment: .1
                    }, {
                        min: 10,
                        max: 20,
                        increment: .5
                    }],
                    dense: [{
                        max: 3,
                        increment: .01
                    }, {
                        min: 3,
                        max: 8,
                        increment: .05
                    }, {
                        min: 8,
                        max: 20,
                        increment: .5
                    }],
                    custom: e.getConfig("customPriceBucket") && e.getConfig("customPriceBucket").buckets
                }[e.getConfig("priceGranularity")]
            }
        }

        function I(r) {
            var t = !0,
                e = Object.prototype.toString.call([]),
                i = Object.prototype.toString.call(0),
                n = {
                    mimes: e,
                    protocols: e,
                    maxduration: i,
                    linearity: i,
                    api: e
                };
            return Object.keys(n).forEach((function(e) {
                Object.prototype.toString.call(c.deepAccess(r, "mediaTypes.video." + e)) !== n[e] && (t = !1, c.logError("Rubicon Bid Adapter: mediaTypes.video." + e + " is required and must be of type: " + n[e]))
            })), t
        }
        var j = !1;
        Object(i.registerBidder)(v)
    }
}, [472]);
pbjsChunk([72], {
    480: function(e, r, t) {
        e.exports = t(481)
    },
    481: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", (function() {
            return n
        }));
        var p = t(0),
            i = t(1);

        function a() {
            return (a = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }).apply(this, arguments)
        }
        var s = {
                serverbid: {
                    BASE_URI: "https://e.serverbid.com/api/v2"
                },
                connectad: {
                    BASE_URI: "https://i.connectad.io/api/v2"
                },
                onefiftytwo: {
                    BASE_URI: "https://e.serverbid.com/api/v2"
                },
                insticator: {
                    BASE_URI: "https://e.serverbid.com/api/v2"
                },
                adsparc: {
                    BASE_URI: "https://e.serverbid.com/api/v2"
                },
                automatad: {
                    BASE_URI: "https://e.serverbid.com/api/v2"
                },
                archon: {
                    BASE_URI: "https://e.serverbid.com/api/v2"
                },
                buysellads: {
                    BASE_URI: "https://e.serverbid.com/api/v2"
                },
                answermedia: {
                    BASE_URI: "https://e.serverbid.com/api/v2"
                }
            },
            d = 0,
            c = "serverbid",
            n = {
                code: "serverbid",
                aliases: ["connectad", "onefiftytwo", "insticator", "adsparc", "automatad", "archon", "buysellads", "answermedia"],
                isBidRequestValid: function(e) {
                    return !(!e.params.networkId || !e.params.siteId)
                },
                buildRequests: function(e) {
                    var i, r = {
                        method: "POST",
                        url: "",
                        data: "",
                        bidRequest: []
                    };
                    if (e.length < 1) return r;
                    d = e[0].params.siteId, c = e[0].bidder;
                    var n = a({
                        placements: [],
                        time: Date.now(),
                        user: {},
                        url: p.getTopWindowUrl(),
                        referrer: document.referrer,
                        enableBotFiltering: !0,
                        includePricingData: !0,
                        parallel: !0
                    }, e[0].params);
                    return e.map((function(e) {
                        var r = s[e.bidder];
                        i = r.BASE_URI;
                        var t = a({
                            divName: e.bidId,
                            adTypes: e.adTypes || (function(e) {
                                var t = [];
                                return e.forEach((function(e) {
                                    var r = o.indexOf(e[0] + "x" + e[1]);
                                    0 <= r && t.push(r)
                                })), t
                            })(e.sizes)
                        }, e.params);
                        t.networkId && t.siteId && n.placements.push(t)
                    })), r.data = JSON.stringify(n), r.bidRequest = e, r.url = i, r
                },
                interpretResponse: function(e, r) {
                    var t, i, n, a, s = [];
                    i = r.bidRequest, e = (e || {}).body;
                    for (var d = 0; d < i.length; d++)
                        if (t = {}, n = i[d].bidId, e) {
                            var c = e.decisions && e.decisions[n],
                                o = c && c.pricing && c.pricing.clearPrice;
                            c && o && (t.requestId = n, t.cpm = o, t.width = c.width, t.height = c.height, t.ad = (a = c).contents && a.contents[0] && a.contents[0].body + p.createTrackPixelHtml(a.impressionUrl), t.currency = "USD", t.creativeId = c.adId, t.ttl = 360, t.netRevenue = !0, t.referrer = p.getTopWindowUrl(), s.push(t))
                        }
                    return s
                },
                getUserSyncs: function(e) {
                    if (e.iframeEnabled) return "connectad" === c ? [{
                        type: "iframe",
                        url: "//cdn.connectad.io/connectmyusers.php"
                    }] : [{
                        type: "iframe",
                        url: "//s.zkcdn.net/ss/" + d + ".html"
                    }];
                    p.logWarn(c + ": Please enable iframe based user syncing.")
                }
            },
            o = [null, "120x90", "120x90", "468x60", "728x90", "300x250", "160x600", "120x600", "300x100", "180x150", "336x280", "240x400", "234x60", "88x31", "120x60", "120x240", "125x125", "220x250", "250x250", "250x90", "0x0", "200x90", "300x50", "320x50", "320x480", "185x185", "620x45", "300x125", "800x250"];
        o[77] = "970x90", o[123] = "970x250", o[43] = "300x600", o[286] = "970x66", o[3230] = "970x280", o[429] = "486x60", o[374] = "700x500", o[934] = "300x1050", o[1578] = "320x100", o[331] = "320x250", o[3301] = "320x267", o[2730] = "728x250", Object(i.registerBidder)(n)
    }
}, [480]);
pbjsChunk([62], {
    506: function(r, e, t) {
        r.exports = t(507)
    },
    507: function(r, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), t.d(e, "spec", (function() {
            return d
        })), t.d(e, "LogError", (function() {
            return u
        }));
        var o = t(0),
            i = t(1),
            a = t(2);

        function n(r, e) {
            for (var t = 0; t < e.length; t++) {
                var i = e[t];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i)
            }
        }
        var s = [],
            d = {
                code: "sovrn",
                supportedMediaTypes: [a.b],
                isBidRequestValid: function(r) {
                    return !(!r.params.tagid || isNaN(parseFloat(r.params.tagid)) || !isFinite(r.params.tagid))
                },
                buildRequests: function(e, t) {
                    try {
                        var i, r = o.getTopWindowLocation(),
                            n = [];
                        o._each(e, (function(r) {
                            i = i || o.getBidIdParameter("iv", r.params), r.sizes = o.isArray(r.sizes) && o.isArray(r.sizes[0]) ? r.sizes : [r.sizes], r.sizes = r.sizes.filter((function(r) {
                                return o.isArray(r)
                            }));
                            var e = r.sizes.map((function(r) {
                                return {
                                    w: parseInt(r[0], 10),
                                    h: parseInt(r[1], 10)
                                }
                            }));
                            n.push({
                                id: r.bidId,
                                banner: {
                                    format: e,
                                    w: 1,
                                    h: 1
                                },
                                tagid: String(o.getBidIdParameter("tagid", r.params)),
                                bidfloor: o.getBidIdParameter("bidfloor", r.params)
                            })
                        }));
                        var a = {
                            id: o.getUniqueIdentifierStr(),
                            imp: n,
                            site: {
                                domain: r.host,
                                page: r.host + r.pathname + r.search + r.hash
                            }
                        };
                        t && t.gdprConsent && (a.regs = {
                            ext: {
                                gdpr: +t.gdprConsent.gdprApplies
                            }
                        }, a.user = {
                            ext: {
                                consent: t.gdprConsent.consentString
                            }
                        });
                        var s = "//ap.lijit.com/rtb/bid?src=prebid_prebid_2.10.0";
                        return i && (s += "&iv=".concat(i)), {
                            method: "POST",
                            url: s,
                            data: JSON.stringify(a),
                            options: {
                                contentType: "text/plain"
                            }
                        }
                    } catch (r) {
                        new u(r, {
                            bidReqs: e,
                            bidderRequest: t
                        }).append()
                    }
                },
                interpretResponse: function(r) {
                    var e = r.body,
                        t = e.id,
                        i = e.seatbid;
                    try {
                        var n = [];
                        return t && i && 0 < i.length && i[0].bid && 0 < i[0].bid.length && i[0].bid.map((function(r) {
                            n.push({
                                requestId: r.impid,
                                cpm: parseFloat(r.price),
                                width: parseInt(r.w),
                                height: parseInt(r.h),
                                creativeId: r.crid || r.id,
                                dealId: r.dealid || null,
                                currency: "USD",
                                netRevenue: !0,
                                mediaType: a.b,
                                ad: decodeURIComponent("".concat(r.adm, '<img src="').concat(r.nurl, '">')),
                                ttl: 60
                            })
                        })), n
                    } catch (r) {
                        new u(r, {
                            id: t,
                            seatbid: i
                        }).append()
                    }
                },
                getUserSyncs: function(e, r, t) {
                    try {
                        var i = [];
                        if (r && 0 !== r.length && e.iframeEnabled) {
                            var n = r.filter((function(r) {
                                    return r.body && r.body.ext && r.body.ext.iid
                                })).map((function(r) {
                                    return r.body.ext.iid
                                })),
                                a = "";
                            t && t.gdprApplies && "string" == typeof t.consentString && (a = t.consentString), n[0] && i.push({
                                type: "iframe",
                                url: "//ap.lijit.com/beacon?informer=" + n[0] + "&gdpr_consent=" + a
                            })
                        }
                        return s.length && e.pixelEnabled && (i = i.concat(s)), i
                    } catch (r) {
                        return e.pixelEnabled ? s : []
                    }
                }
            },
            u = (function() {
                function t(r, e) {
                    !(function(r, e) {
                        if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), o.logError(r), this.error = {}, this.error.t = o.timestamp(), this.error.m = r.message, this.error.s = r.stack, this.error.d = e, this.error.v = "prebid_prebid_2.10.0", this.error.u = o.getTopWindowLocation().href, this.error.ua = navigator.userAgent
                }
                return (function(r, e, t) {
                    e && n(r.prototype, e), t && n(r, t)
                })(t, [{
                    key: "buildErrorString",
                    value: function(r) {
                        return "https://pcb.aws.lijit.com/c?b=" + btoa(JSON.stringify(r))
                    }
                }, {
                    key: "append",
                    value: function() {
                        var r = this.buildErrorString(this.error);
                        2083 < r.length && (delete this.error.d, 2083 < (r = this.buildErrorString(this.error)).length && (delete this.error.s, 2083 < (r = this.buildErrorString(this.error)).length && (r = this.buildErrorString({
                            m: "unknown error message",
                            t: this.error.t,
                            u: this.error.u
                        }))));
                        var e = {
                            type: "image",
                            url: r
                        };
                        s.push(e)
                    }
                }], [{
                    key: "getErrPxls",
                    value: function() {
                        return s
                    }
                }]), t
            })();
        Object(i.registerBidder)(d)
    }
}, [506]);
pbjsChunk([59], {
    512: function(e, r, t) {
        e.exports = t(513)
    },
    513: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", (function() {
            return o
        }));
        var u = t(0),
            n = t(1),
            p = t(2);

        function l(e, r) {
            return (function(e) {
                if (Array.isArray(e)) return e
            })(e) || (function(e, r) {
                var t = [],
                    n = !0,
                    a = !1,
                    o = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(n = (i = c.next()).done) && (t.push(i.value), !r || t.length !== r); n = !0);
                } catch (e) {
                    a = !0, o = e
                } finally {
                    try {
                        n || null == c.return || c.return()
                    } finally {
                        if (a) throw o
                    }
                }
                return t
            })(e, r) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }

        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var o = {
            code: "synacormedia",
            supportedMediaTypes: [p.b],
            sizeMap: {},
            isBidRequestValid: function(e) {
                return !!(e && e.params && e.params.placementId && e.params.seatId)
            },
            buildRequests: function(e, r) {
                if (e && e.length && r) {
                    var t = r.refererInfo,
                        c = {
                            id: r.auctionId,
                            site: {
                                domain: location.hostname,
                                page: t.referer,
                                ref: document.referrer
                            },
                            device: {
                                ua: navigator.userAgent
                            },
                            imp: []
                        },
                        s = null;
                    return e.forEach((function(n, e) {
                        if (s && s !== n.params.seatId) Object(u.logWarn)("Synacormedia: there is an inconsistent seatId: ".concat(n.params.seatId, " but only sending bid requests for ").concat(s, ", you should double check your configuration"));
                        else {
                            s = n.params.seatId;
                            var a = n.params.placementId,
                                o = n.params.bidfloor ? parseFloat(n.params.bidfloor) : null;
                            isNaN(o) && Object(u.logWarn)("Synacormedia: there is an invalid bid floor: ".concat(n.params.bidfloor));
                            var i = parseInt(n.params.pos);
                            isNaN(i) && (Object(u.logWarn)("Synacormedia: there is an invalid POS: ".concat(n.params.pos)), i = 0), Object(u.getAdUnitSizes)(n).forEach((function(e, r) {
                                var t = {
                                    id: n.bidId + "~" + e[0] + "x" + e[1],
                                    tagid: a,
                                    banner: {
                                        w: e[0],
                                        h: e[1],
                                        pos: i
                                    }
                                };
                                null === o || isNaN(o) || (t.bidfloor = o), c.imp.push(t)
                            }))
                        }
                    })), c.imp.length && s ? {
                        method: "POST",
                        url: "".concat("//prebid.technoratimedia.com", "/openrtb/bids/").concat(s, "?src=prebid_prebid_2.10.0"),
                        data: c,
                        options: {
                            contentType: "application/json",
                            withCredentials: !0
                        }
                    } : void 0
                }
            },
            interpretResponse: function(e) {
                if (e.body && "object" == a(e.body)) {
                    var r = e.body,
                        s = r.id,
                        t = r.seatbid,
                        d = [];
                    return s && t && t.forEach((function(c) {
                        c.bid.forEach((function(t) {
                            var n = parseFloat(t.price),
                                e = t.adm.replace(/\${([^}]*)}/g, (function(e, r) {
                                    switch (r) {
                                        case "AUCTION_SEAT_ID":
                                            return c.seat;
                                        case "AUCTION_ID":
                                            return s;
                                        case "AUCTION_BID_ID":
                                            return t.id;
                                        case "AUCTION_IMP_ID":
                                            return t.impid;
                                        case "AUCTION_PRICE":
                                            return n;
                                        case "AUCTION_CURRENCY":
                                            return "USD"
                                    }
                                    return e
                                })),
                                r = l(t.impid.match(/^(.*)~(.*)x(.*)$/), 4),
                                a = r[1],
                                o = r[2],
                                i = r[3];
                            d.push({
                                requestId: a,
                                adId: t.id.replace(/~/g, "-"),
                                cpm: n,
                                width: parseInt(o, 10),
                                height: parseInt(i, 10),
                                creativeId: c.seat + "~" + t.crid,
                                currency: "USD",
                                netRevenue: !0,
                                mediaType: p.b,
                                ad: e,
                                ttl: 60
                            })
                        }))
                    })), d
                }
                Object(u.logWarn)("Synacormedia: server returned empty/non-json response: " + JSON.stringify(e.body))
            },
            getUserSyncs: function(e, r) {
                var t = [];
                return e.iframeEnabled ? t.push({
                    type: "iframe",
                    url: "".concat("//ad-cdn.technoratimedia.com", "/html/usersync.html?src=prebid_prebid_2.10.0")
                }) : Object(u.logWarn)("Synacormedia: Please enable iframe based user sync."), t
            }
        };
        Object(n.registerBidder)(o)
    }
}, [512]);
pbjsChunk([51], {
    528: function(e, r, t) {
        e.exports = t(529)
    },
    529: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "tripleliftAdapterSpec", (function() {
            return s
        }));
        var n = t(2),
            i = t(1),
            d = t(0),
            u = document.location.protocol + "//tlx.3lift.com/header/auction?",
            p = !0,
            o = null,
            s = {
                code: "triplelift",
                supportedMediaTypes: [n.b],
                isBidRequestValid: function(e) {
                    return void 0 !== e.params.inventoryCode
                },
                buildRequests: function(e, r) {
                    var t = u,
                        n = (function(e) {
                            var r = {};
                            return r.imp = e.map((function(e, r) {
                                return {
                                    id: r,
                                    tagid: e.params.inventoryCode,
                                    floor: e.params.floor,
                                    banner: {
                                        format: (function(e) {
                                            return e.filter(a).map((function(e) {
                                                return {
                                                    w: e[0],
                                                    h: e[1]
                                                }
                                            }))
                                        })(e.sizes)
                                    }
                                }
                            })), r
                        })(e);
                    if (t = d.tryAppendQueryString(t, "lib", "prebid"), t = d.tryAppendQueryString(t, "v", "2.10.0"), r && r.refererInfo) {
                        var i = r.refererInfo.referer;
                        t = d.tryAppendQueryString(t, "referrer", i)
                    }
                    return r && r.timeout && (t = d.tryAppendQueryString(t, "tmax", r.timeout)), r && r.gdprConsent && (void 0 !== r.gdprConsent.gdprApplies && (p = r.gdprConsent.gdprApplies, t = d.tryAppendQueryString(t, "gdpr", p.toString())), void 0 !== r.gdprConsent.consentString && (o = r.gdprConsent.consentString, t = d.tryAppendQueryString(t, "cmp_cs", o))), t.lastIndexOf("&") === t.length - 1 && (t = t.substring(0, t.length - 1)), d.logMessage("tlCall request built: " + t), {
                        method: "POST",
                        url: t,
                        data: n,
                        bidderRequest: r
                    }
                },
                interpretResponse: function(e, r) {
                    var t = r.bidderRequest;
                    return (e.body.bids || []).map((function(e) {
                        return (function(e, r) {
                            var t = {},
                                n = r.width || 1,
                                i = r.height || 1,
                                d = r.deal_id || "",
                                u = r.crid || "";
                            0 != r.cpm && r.ad && (t = {
                                requestId: e.bids[r.imp_id].bidId,
                                cpm: r.cpm,
                                width: n,
                                height: i,
                                netRevenue: !0,
                                ad: r.ad,
                                creativeId: u,
                                dealId: d,
                                currency: "USD",
                                ttl: 33
                            });
                            return t
                        })(t, e)
                    }))
                },
                getUserSyncs: function(e) {
                    var r = "//ib.3lift.com/sync?";
                    if (null !== o && (r = d.tryAppendQueryString(r, "gdpr", p), r = d.tryAppendQueryString(r, "cmp_cs", o)), e.iframeEnabled) return [{
                        type: "iframe",
                        url: r
                    }]
                }
            };

        function a(e) {
            return 2 === e.length && "number" == typeof e[0] && "number" == typeof e[1]
        }
        Object(i.registerBidder)(s)
    }
}, [528]);
pbjs.processQueue();