/* prebid.js v2.22.0Updated : 2019-07-16 */ ! function(u) {
    var s = window.owpbjsChunk;
    window.owpbjsChunk = function(e, t, n) {
        for (var r, i, o, a = 0, c = []; a < e.length; a++) i = e[a], d[i] && c.push(d[i][0]), d[i] = 0;
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
        for (s && s(e, t, n); c.length;) c.shift()();
        if (n)
            for (a = 0; a < n.length; a++) o = f(f.s = n[a]);
        return o
    };
    var n = {},
        d = {
            248: 0
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
    }, f(f.s = 630)
}({
    0: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "internal", function() {
            return C
        }), n.d(t, "bind", function() {
            return U
        }), t.replaceTokenInString = function(i, e, o) {
            return ne(e, function(e, t) {
                e = void 0 === e ? "" : e;
                var n = o + t.toUpperCase() + o,
                    r = new RegExp(n, "g");
                i = i.replace(r, e)
            }), i
        }, t.getUniqueIdentifierStr = N, t.generateUUID = function e(t) {
            return t ? (t ^ x() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
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
            return t && 0 < Object.getOwnPropertyNames(t).length ? le(t).map(function(e) {
                return "".concat(e, "=").concat(encodeURIComponent(pe(t, e)))
            }).join("&") : ""
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
            } else if ("object" === p(e)) {
                var o = e.length;
                if (0 < o)
                    if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(D(e));
                    else
                        for (var a = 0; a < o; a++) t.push(D(e[a]))
            }
            return t
        }, t.parseGPTSingleSizeArray = D, t.getTopWindowLocation = k, t.getTopFrameReferrer = P, t.getAncestorOrigins = M, t.getWindowTop = q, t.getWindowSelf = G, t.getWindowLocation = W, t.getTopWindowUrl = function() {
            var t;
            try {
                t = C.getTopWindowLocation().href
            } catch (e) {
                t = ""
            }
            return t
        }, t.getTopWindowHostName = function() {
            var t;
            try {
                t = this.getTopWindowLocation().hostname
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
        }, t.logMessage = L, t.logInfo = F, t.logWarn = z, t.logError = V, t.hasConsoleLogger = function() {
            return w
        }, t.debugTurnedOn = K, t.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = N(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
        }, t.getParameterByName = J, t.hasValidBidRequest = function(e, n, t) {
            var r = !1;

            function i(e, t) {
                t === n[o] && (r = !0)
            }
            for (var o = 0; o < n.length; o++)
                if (r = !1, ne(e, i), !r) return V("Params are missing for bid request. One of these required paramaters are missing: " + n, t), !1;
            return !0
        }, t.addEventHandler = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n)
        }, t.isA = Y, t.isFn = Q, t.isStr = X, t.isArray = $, t.isNumber = Z, t.isPlainObject = ee, t.isBoolean = function(e) {
            return Y(e, E)
        }, t.isEmpty = te, t.isEmptyStr = function(e) {
            return X(e) && (!e || 0 === e.length)
        }, t._each = ne, t.contains = function(e, t) {
            if (te(e)) return !1;
            if (Q(e.indexOf)) return -1 !== e.indexOf(t);
            var n = e.length;
            for (; n--;)
                if (e[n] === t) return !0;
            return !1
        }, n.d(t, "indexOf", function() {
            return re
        }), t._map = function(n, r) {
            if (te(n)) return [];
            if (Q(n.map)) return n.map(r);
            var i = [];
            return ne(n, function(e, t) {
                i.push(r(e, t, n))
            }), i
        }, t.insertElement = oe, t.triggerPixel = ae, t.callBurl = function(e) {
            var t = e.source,
                n = e.burl;
            t === g.S2S.SRC && n && C.triggerPixel(n)
        }, t.insertHtmlIntoIframe = function(e) {
            if (!e) return;
            var t = document.createElement("iframe");
            t.id = N(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", C.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close()
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
            return n ? (e.some(function(e) {
                var t = c()(e.bids, function(t) {
                    return ["bidId", "adId", "bid_id"].some(function(e) {
                        return t[e] === n
                    })
                });
                return t && (r = t), t
            }), r) : void 0;
            var r
        }, t.getKeys = le, t.getValue = pe, t.getKeyByValue = function(e, t) {
            for (var n in e)
                if (e.hasOwnProperty(n) && e[n] === t) return n
        }, t.getBidderCodes = function() {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : owpbjs.adUnits).map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder
                }).reduce(fe, [])
            }).reduce(fe).filter(de)
        }, t.isGptPubadsDefined = function() {
            if (window.googletag && Q(window.googletag.pubads) && Q(window.googletag.pubads().getSlots)) return !0
        }, n.d(t, "getHighestCpm", function() {
            return ge
        }), n.d(t, "getOldestHighestCpmBid", function() {
            return be
        }), n.d(t, "getLatestHighestCpmBid", function() {
            return ye
        }), t.shuffle = function(e) {
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
            return e.reduce(function(e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t), e
            }, {})
        }, t.deepAccess = function(e, t) {
            if (!e) return;
            t = String(t).split(".");
            for (var n = 0; n < t.length; n++)
                if (void 0 === (e = e[t[n]])) return;
            return e
        }, t.deepSetValue = function(e, t, n) {
            var r;
            for (t = t.split("."), r = 0; r < t.length - 1; r++) r !== t.length - 1 && void 0 === e[t[r]] && (e[t[r]] = {}), e = e[t[r]];
            e[t[r]] = n
        }, t.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
            return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="'.concat(e, '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>') : ""
        }, t.getDefinedParams = function(n, e) {
            return e.filter(function(e) {
                return n[e]
            }).reduce(function(e, t) {
                return l(e, function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    return e
                }({}, t, n[t]))
            }, {})
        }, t.isValidMediaTypes = function(e) {
            var t = ["banner", "native", "video"];
            if (!Object.keys(e).every(function(e) {
                    return s()(t, e)
                })) return !1;
            if (e.video && e.video.context) return s()(["instream", "outstream", "adpod"], e.video.context);
            return !0
        }, t.getBidderRequest = function(e, t, n) {
            return c()(e, function(e) {
                return 0 < e.bids.filter(function(e) {
                    return e.bidder === t && e.adUnitCode === n
                }).length
            }) || {
                start: null,
                auctionId: null
            }
        }, t.getUserConfiguredParams = function(e, t, n) {
            return e.filter(function(e) {
                return e.code === t
            }).map(function(e) {
                return e.bids
            }).reduce(fe, []).filter(function(e) {
                return e.bidder === n
            }).map(function(e) {
                return e.params || {}
            })
        }, t.getOrigin = function() {
            return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
        }, t.getDNT = function() {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
        }, t.isAdUnitCodeMatchingSlot = function(t) {
            return function(e) {
                return Ee(t, e)
            }
        }, t.isSlotMatchingAdUnitCode = function(t) {
            return function(e) {
                return Ee(e, t)
            }
        }, t.unsupportedBidderMessage = function(e, t) {
            var n = Object.keys(e.mediaTypes || {
                banner: "banner"
            }).join(", ");
            return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ")
        }, t.deletePropertyFromObject = function(e, t) {
            var n = l({}, e);
            return delete n[t], n
        }, t.isInteger = Ae, t.convertCamelToUnderscore = function(e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, function(e, t) {
                return "_" + t.toLowerCase()
            }).replace(/^_/, "")
        }, t.transformBidderParamKeywords = function(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
                i = [];
            return ne(e, function(e, t) {
                if ($(e)) {
                    var n = [];
                    ne(e, function(e) {
                        !(e = se(r + "." + t, e)) && "" !== e || n.push(e)
                    }), e = n
                } else {
                    if (!X(e = se(r + "." + t, e))) return;
                    e = [e]
                }
                i.push({
                    key: t,
                    value: e
                })
            }), i
        }, t.convertTypes = function(t, n) {
            return Object.keys(t).forEach(function(e) {
                n[e] && (Q(t[e]) ? n[e] = t[e](n[e]) : n[e] = function(e, t) {
                    return "string" === e ? t && t.toString() : "number" === e ? Number(t) : t
                }(t[e], n[e]), isNaN(n[e]) && delete n.key)
            }), n
        }, t.setDataInLocalStorage = function(e, t) {
            Te() && window.localStorage.setItem(e, t)
        }, t.getDataFromLocalStorage = function(e) {
            if (Te()) return window.localStorage.getItem(e)
        }, t.hasLocalStorage = Te, t.isArrayOfNums = function(e, t) {
            return $(e) && (!t || e.length === t) && e.every(function(e) {
                return Ae(e)
            })
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
            i = n(89),
            o = n.n(i),
            a = n(11),
            c = n.n(a),
            u = n(9),
            s = n.n(u),
            d = n(10);

        function f(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
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

        function p(e) {
            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var g = n(4),
            b = !1,
            y = "Array",
            v = "String",
            h = "Function",
            m = "Number",
            S = "Object",
            E = "Boolean",
            A = Object.prototype.toString,
            T = Boolean(window.console),
            w = Boolean(T && window.console.log),
            O = Boolean(T && window.console.info),
            I = Boolean(T && window.console.warn),
            _ = Boolean(T && window.console.error),
            C = {
                checkCookieSupport: Se,
                createTrackPixelIframeHtml: ue,
                getWindowSelf: G,
                getWindowTop: q,
                getAncestorOrigins: M,
                getTopFrameReferrer: P,
                getWindowLocation: W,
                getTopWindowLocation: k,
                insertUserSyncIframe: ce,
                insertElement: oe,
                isFn: Q,
                triggerPixel: ae,
                logError: V,
                logWarn: z,
                logMessage: L,
                logInfo: F
            },
            j = {},
            U = function(e, t) {
                return t
            }.bind(null, 1, j)() === j ? Function.prototype.bind : function(e) {
                var t = this,
                    n = Array.prototype.slice.call(arguments, 1);
                return function() {
                    return t.apply(e, n.concat(Array.prototype.slice.call(arguments)))
                }
            };
        var B, R = (B = 0, function() {
            return ++B
        });

        function N() {
            return R() + Math.random().toString(16).substr(2)
        }

        function x() {
            return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()
        }

        function D(e) {
            if ($(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])) return e[0] + "x" + e[1]
        }

        function k() {
            if (me()) {
                var e;
                try {
                    e = C.getAncestorOrigins() || C.getTopFrameReferrer()
                } catch (e) {
                    F("could not obtain top window location", e)
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
            K() && w && console.log.apply(console, H(arguments, "MESSAGE:"))
        }

        function F() {
            K() && O && console.info.apply(console, H(arguments, "INFO:"))
        }

        function z() {
            K() && I && console.warn.apply(console, H(arguments, "WARNING:"))
        }

        function V() {
            K() && _ && console.error.apply(console, H(arguments, "ERROR:"))
        }

        function H(e, t) {
            return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e
        }

        function K() {
            if (!1 === r.b.getConfig("debug") && !1 === b) {
                var e = "TRUE" === J(g.DEBUG_MODE).toUpperCase();
                r.b.setConfig({
                    debug: e
                }), b = !0
            }
            return !!r.b.getConfig("debug")
        }

        function J(e) {
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
            return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
        }

        function Y(e, t) {
            return A.call(e) === "[object " + t + "]"
        }

        function Q(e) {
            return Y(e, h)
        }

        function X(e) {
            return Y(e, v)
        }

        function $(e) {
            return Y(e, y)
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
        var re = function() {
            if (Array.prototype.indexOf) return Array.prototype.indexOf
        }();
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
            var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), t = t && 'sandbox="'.concat(t, '"'), "<iframe ".concat(t, ' id="').concat(N(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : ""
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

        function pe(e, t) {
            return e[t]
        }
        var ge = ve("timeToRespond", function(e, t) {
                return t < e
            }),
            be = ve("responseTimestamp", function(e, t) {
                return t < e
            }),
            ye = ve("responseTimestamp", function(e, t) {
                return e < t
            });

        function ve(n, r) {
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
        var Ee = function(e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t
        };

        function Ae(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }

        function Te() {
            try {
                return !!window.localStorage
            } catch (e) {
                V("Local storage api disabled")
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
                var t = O(e);
                a.default.registerBidAdapter(t, e.code, n)
            }
            r(t), Array.isArray(t.aliases) && t.aliases.forEach(function(e) {
                a.default.aliasRegistry[e] = t.code, r(A({}, t, {
                    code: e
                }))
            })
        }, t.newBidder = O, t.preloadBidderMappingFile = I, t.getIabSubCategory = function(t, e) {
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
        var r = n(40),
            a = n(7),
            i = n(3),
            b = n(23),
            o = n(24),
            c = n(28),
            u = n(49),
            s = n(4),
            y = n.n(s),
            d = n(8),
            v = n.n(d),
            f = n(9),
            l = n.n(f),
            p = n(5),
            h = n(0),
            g = n(2),
            m = n(16);

        function S(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
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
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function E(e) {
            return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function A() {
            return (A = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var T = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"],
            w = 1;

        function O(l) {
            return A(new r.a(l.code), {
                getSpec: function() {
                    return Object.freeze(l)
                },
                registerSyncs: p,
                callBids: function(o, a, e, n, c) {
                    if (Array.isArray(o.bids)) {
                        var u = {},
                            s = [],
                            t = o.bids.filter(g);
                        if (0 !== t.length) {
                            var d = {};
                            t.forEach(function(e) {
                                (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                            });
                            var r = l.buildRequests(t, o);
                            if (r && 0 !== r.length) {
                                Array.isArray(r) || (r = [r]);
                                var f = Object(h.delayExecution)(i, r.length);
                                r.forEach(function(i) {
                                    switch (i.method) {
                                        case "GET":
                                            n("".concat(i.url).concat(function(e) {
                                                if (e) return "?".concat("object" === E(e) ? Object(h.parseQueryStringParameters)(e) : e);
                                                return ""
                                            }(i.data)), {
                                                success: e,
                                                error: t
                                            }, void 0, A({
                                                method: "GET",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        case "POST":
                                            n(i.url, {
                                                success: e,
                                                error: t
                                            }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), A({
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
                                                var n = A(Object(b.a)(y.a.STATUS.GOOD, t), e);
                                                ! function(e, t) {
                                                    u[e] = !0, _(e, t, [o]) && a(e, t)
                                                }(t.adUnitCode, n)
                                            } else Object(h.logWarn)("Bidder ".concat(l.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."))
                                        }
                                        n && (n.forEach ? n.forEach(r) : r(n)), f(n)
                                    }

                                    function t(e) {
                                        c(l.code), Object(h.logError)("Server call for ".concat(l.code, " failed: ").concat(e, ". Continuing without bids.")), f()
                                    }
                                })
                            } else i()
                        } else i()
                    }

                    function i() {
                        e(), v.a.emit(y.a.EVENTS.BIDDER_DONE, o), p(s, o.gdprConsent)
                    }
                }
            });

            function p(e, t) {
                if (l.getUserSyncs) {
                    var n = i.b.getConfig("userSync.filterSettings"),
                        r = l.getUserSyncs({
                            iframeEnabled: !!(i.b.getConfig("userSync.iframeEnabled") || n && (n.iframe || n.all)),
                            pixelEnabled: !!(i.b.getConfig("userSync.pixelEnabled") || n && (n.image || n.all))
                        }, e, t);
                    r && (Array.isArray(r) || (r = [r]), r.forEach(function(e) {
                        o.a.registerSync(e.type, l.code, e.url)
                    }))
                }
            }

            function g(e) {
                return !!l.isBidRequestValid(e) || (Object(h.logWarn)("Invalid bid sent to bidder ".concat(l.code, ": ").concat(JSON.stringify(e))), !1)
            }
        }

        function I(e, t) {
            if (!i.b.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
            t.filter(function(e) {
                return Object(h.deepAccess)(e, "mediaTypes.video.context") === g.a
            }).map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder
                })
            }).reduce(h.flatten, []).filter(h.uniques).forEach(function(n) {
                var e = a.default.getBidAdapter(n);
                if (e.getSpec().getMappingFileInfo) {
                    var t = e.getSpec().getMappingFileInfo(),
                        r = t.refreshInDays ? t.refreshInDays : w,
                        i = t.localStorageKey ? t.localStorageKey : e.getSpec().code,
                        o = Object(h.getDataFromLocalStorage)(i);
                    (!o || Object(h.timestamp)() < o.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(p.a)(t.url, {
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
            }), e.call(this, t)
        }

        function _(e, t, n) {
            function r(e) {
                return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e)
            }
            return e ? t ? (i = Object.keys(t), T.every(function(e) {
                return l()(i, e) && !l()([void 0, null], t[e])
            }) ? "native" !== t.mediaType || Object(c.f)(t, n) ? "video" !== t.mediaType || Object(u.c)(t, n) ? !("banner" === t.mediaType && ! function(e, t, n) {
                if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), !0;
                var r = Object(h.getBidderRequest)(n, t.bidderCode, e),
                    i = r && r.bids && r.bids[0] && r.bids[0].sizes,
                    o = Object(h.parseSizesInput)(i);
                if (1 !== o.length) return !1;
                var a = S(o[0].split("x"), 2),
                    c = a[0],
                    u = a[1];
                return t.width = parseInt(c, 10), t.height = parseInt(u, 10), !0
            }(e, t, n)) || (Object(h.logError)(r("Banner bids require a width and height")), !1) : (Object(h.logError)(r("Video bid does not have required vastUrl or renderer property")), !1) : (Object(h.logError)(r("Native bid missing some required properties.")), !1) : (Object(h.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1)) : (Object(h.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : (Object(h.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i
        }
        Object(m.a)("checkAdUnitSetup").before(I)
    },
    10: function(e, t, n) {
        "use strict";

        function r(e) {
            return Object.keys(e).map(function(t) {
                return Array.isArray(e[t]) ? e[t].map(function(e) {
                    return "".concat(t, "[]=").concat(e)
                }).join("&") : "".concat(t, "=").concat(e[t])
            }).join("&")
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
                search: r ? n.search : function(e) {
                    return e ? e.replace(/^\?/, "").split("&").reduce(function(e, t) {
                        var n = function(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e
                                }(e) || function(e, t) {
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
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                }()
                            }(t.split("="), 2),
                            r = n[0],
                            i = n[1];
                        return /\[\]$/.test(r) ? (e[r = r.replace("[]", "")] = e[r] || [], e[r].push(i)) : e[r] = i || "", e
                    }, {}) : {}
                }(n.search || ""),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            }
        }, t.a = function(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(r(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
        }
    },
    11: function(e, t, n) {
        n(81), e.exports = n(14).Array.find
    },
    12: function(e, t, n) {
        "use strict";
        t.a = i, t.c = function(e) {
            return !(!e || !e.url)
        }, t.b = function(e, t) {
            e.render(t)
        };
        var u = n(50),
            s = n(0),
            r = n(11),
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
            }, ! function(t) {
                var e = owpbjs.adUnits,
                    n = d()(e, function(e) {
                        return e.code === t
                    });
                return !!(n && n.renderer && n.renderer.url && n.renderer.render)
            }(c) ? Object(u.b)(n, this.callback, !0) : s.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(c))
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
    128: function(e, t, n) {
        "use strict";
        var r = n(13),
            i = n(43)(6),
            o = "findIndex",
            a = !0;
        o in [] && Array(1)[o](function() {
            a = !1
        }), r(r.P + r.F * a, "Array", {
            findIndex: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(34)(o)
    },
    13: function(e, t, n) {
        var b = n(19),
            y = n(14),
            v = n(25),
            h = n(21),
            m = n(27),
            S = "prototype",
            E = function(e, t, n) {
                var r, i, o, a = e & E.F,
                    c = e & E.G,
                    u = e & E.S,
                    s = e & E.P,
                    d = e & E.B,
                    f = e & E.W,
                    l = c ? y : y[t] || (y[t] = {}),
                    p = l[S],
                    g = c ? b : u ? b[t] : (b[t] || {})[S];
                for (r in c && (n = t), n)(i = !a && g && void 0 !== g[r]) && m(l, r) || (o = i ? g[r] : n[r], l[r] = c && "function" != typeof g[r] ? n[r] : d && i ? v(o, b) : f && g[r] == o ? function(r) {
                    function e(e, t, n) {
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
                    }
                    return e[S] = r[S], e
                }(o) : s && "function" == typeof o ? v(Function.call, o) : o, s && ((l.virtual || (l.virtual = {}))[r] = o, e & E.R && p && !p[r] && h(p, r, o)))
            };
        E.F = 1, E.G = 2, E.S = 4, E.P = 8, E.B = 16, E.W = 32, E.U = 64, E.R = 128, e.exports = E
    },
    131: function(e, t, n) {
        "use strict";
        t.a = function() {
            addEventListener("message", p, !1)
        };
        var r = n(8),
            o = n.n(r),
            a = n(28),
            i = n(4),
            d = (n.n(i), n(0)),
            c = n(38),
            u = n(11),
            f = n.n(u),
            l = n(12),
            s = i.EVENTS.BID_WON;

        function p(e) {
            var t = e.message ? "message" : "data",
                n = {};
            try {
                n = JSON.parse(e[t])
            } catch (e) {
                return
            }
            if (n && n.adId) {
                var r = f()(c.a.getBidsReceived(), function(e) {
                    return e.adId === n.adId
                });
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
                                var t = function(e) {
                                        return window.googletag ? function(e) {
                                            return f()(window.googletag.pubads().getSlots().filter(Object(d.isSlotMatchingAdUnitCode)(e)), function(e) {
                                                return e
                                            }).getSlotElementId()
                                        }(e) : window.apntag ? function(e) {
                                            var t = window.apntag.getTag(e);
                                            return t && t.targetId
                                        }(e) : e
                                    }(r),
                                    n = document.getElementById(t);
                                return n && n.querySelector(e)
                            }["div", "iframe"].forEach(function(e) {
                                var t = a(e);
                                if (t) {
                                    var n = t.style;
                                    n.width = i + "px", n.height = o + "px"
                                } else Object(d.logWarn)("Unable to locate matching page element for adUnitCode ".concat(r, ".  Can't resize it to ad's dimensions.  Please review setup."))
                            })
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
        var c, u = "owpbjs:debugging";

        function s(e) {
            Object(o.logMessage)("DEBUG: " + e)
        }

        function d() {
            i.c.getHooks({
                hook: c
            }).remove()
        }

        function f(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t;
            r.b.setConfig({
                debug: !0
            }), s("bidder overrides enabled".concat(n ? " from session" : "")), d(), c = function(e, r, i) {
                if (Array.isArray(this.bidders) && -1 === this.bidders.indexOf(i.bidderCode)) return void
                function(e) {
                    Object(o.logWarn)("DEBUG: " + e)
                }("bidder '".concat(i.bidderCode, "' excluded from auction by bidder overrides"));
                Array.isArray(this.bids) && this.bids.forEach(function(n) {
                    n.bidder && n.bidder !== i.bidderCode || n.adUnitCode && n.adUnitCode !== r || (i = a({}, i), Object.keys(n).filter(function(e) {
                        return -1 === ["bidder", "adUnitCode"].indexOf(e)
                    }).forEach(function(e) {
                        var t = n[e];
                        s("bidder overrides changed '".concat(r, "/").concat(i.bidderCode, "' bid.").concat(e, " from '").concat(i[e], "' to '").concat(t, "'")), i[e] = t
                    }))
                });
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
        r.b.getConfig("debugging", function(e) {
            return l(e.debugging)
        })
    },
    133: function(e, t, n) {
        n(134), n(66), n(143), n(145), n(149), n(152), n(154), e.exports = n(14).Set
    },
    134: function(e, t) {},
    135: function(e, t, n) {
        var u = n(45),
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
        e.exports = n(21)
    },
    137: function(e, t, n) {
        "use strict";
        var r = n(67),
            i = n(42),
            o = n(53),
            a = {};
        n(21)(a, n(15)("iterator"), function() {
            return this
        }), e.exports = function(e, t, n) {
            e.prototype = r(a, {
                next: i(1, n)
            }), o(e, t + " Iterator")
        }
    },
    138: function(e, t, n) {
        var a = n(20),
            c = n(26),
            u = n(139);
        e.exports = n(22) ? Object.defineProperties : function(e, t) {
            c(e);
            for (var n, r = u(t), i = r.length, o = 0; o < i;) a.f(e, n = r[o++], t[n]);
            return e
        }
    },
    139: function(e, t, n) {
        var r = n(140),
            i = n(68);
        e.exports = Object.keys || function(e) {
            return r(e, i)
        }
    },
    14: function(e, t) {
        var n = e.exports = {
            version: "2.6.9"
        };
        "number" == typeof __e && (__e = n)
    },
    140: function(e, t, n) {
        var a = n(27),
            c = n(47),
            u = n(60)(!1),
            s = n(52)("IE_PROTO");
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
        var r = n(19).document;
        e.exports = r && r.documentElement
    },
    142: function(e, t, n) {
        var r = n(27),
            i = n(44),
            o = n(52)("IE_PROTO"),
            a = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    },
    143: function(e, t, n) {
        n(144);
        for (var r = n(19), i = n(21), o = n(29), a = n(15)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < c.length; u++) {
            var s = c[u],
                d = r[s],
                f = d && d.prototype;
            f && !f[a] && i(f, a, s), o[s] = o.Array
        }
    },
    144: function(e, t, n) {
        "use strict";
        var r = n(34),
            i = n(69),
            o = n(29),
            a = n(47);
        e.exports = n(51)(Array, "Array", function(e, t) {
            this._t = a(e), this._i = 0, this._k = t
        }, function() {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
    },
    145: function(e, t, n) {
        "use strict";
        var r = n(146),
            i = n(77);
        e.exports = n(148)("Set", function(t) {
            return function(e) {
                return t(this, 0 < arguments.length ? e : void 0)
            }
        }, {
            add: function(e) {
                return r.def(i(this, "Set"), e = 0 === e ? 0 : e, e)
            }
        }, r)
    },
    146: function(e, t, n) {
        "use strict";

        function a(e, t) {
            var n, r = g(t);
            if ("F" !== r) return e._i[r];
            for (n = e._f; n; n = n.n)
                if (n.k == t) return n
        }
        var c = n(20).f,
            u = n(67),
            s = n(70),
            d = n(25),
            f = n(71),
            l = n(39),
            r = n(51),
            i = n(69),
            o = n(147),
            p = n(22),
            g = n(76).fastKey,
            b = n(77),
            y = p ? "_s" : "size";
        e.exports = {
            getConstructor: function(e, o, n, r) {
                var i = e(function(e, t) {
                    f(e, i, o, "_i"), e._t = o, e._i = u(null), e._f = void 0, e._l = void 0, e[y] = 0, null != t && l(t, n, e[r], e)
                });
                return s(i.prototype, {
                    clear: function() {
                        for (var e = b(this, o), t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
                        e._f = e._l = void 0, e[y] = 0
                    },
                    delete: function(e) {
                        var t = b(this, o),
                            n = a(t, e);
                        if (n) {
                            var r = n.n,
                                i = n.p;
                            delete t._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), t._f == n && (t._f = r), t._l == n && (t._l = i), t[y]--
                        }
                        return !!n
                    },
                    forEach: function(e, t) {
                        b(this, o);
                        for (var n, r = d(e, 1 < arguments.length ? t : void 0, 3); n = n ? n.n : this._f;)
                            for (r(n.v, n.k, this); n && n.r;) n = n.p
                    },
                    has: function(e) {
                        return !!a(b(this, o), e)
                    }
                }), p && c(i.prototype, "size", {
                    get: function() {
                        return b(this, o)[y]
                    }
                }), i
            },
            def: function(e, t, n) {
                var r, i, o = a(e, t);
                return o ? o.v = n : (e._l = o = {
                    i: i = g(t, !0),
                    k: t,
                    v: n,
                    p: r = e._l,
                    n: void 0,
                    r: !1
                }, e._f || (e._f = o), r && (r.n = o), e[y]++, "F" !== i && (e._i[i] = o)), e
            },
            getEntry: a,
            setStrong: function(e, n, t) {
                r(e, n, function(e, t) {
                    this._t = b(e, n), this._k = t, this._l = void 0
                }, function() {
                    for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
                    return e._t && (e._l = n = n ? n.n : e._t._f) ? i(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : (e._t = void 0, i(1))
                }, t ? "entries" : "values", !t, !0), o(n)
            }
        }
    },
    147: function(e, t, n) {
        "use strict";
        var r = n(19),
            i = n(14),
            o = n(20),
            a = n(22),
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
        var f = n(19),
            l = n(13),
            p = n(76),
            g = n(30),
            b = n(21),
            y = n(70),
            v = n(39),
            h = n(71),
            m = n(18),
            S = n(53),
            E = n(20).f,
            A = n(43)(0),
            T = n(22);
        e.exports = function(n, e, t, r, i, o) {
            var a = f[n],
                c = a,
                u = i ? "set" : "add",
                s = c && c.prototype,
                d = {};
            return T && "function" == typeof c && (o || s.forEach && !g(function() {
                (new c).entries().next()
            })) ? (c = e(function(e, t) {
                h(e, c, n, "_c"), e._c = new a, null != t && v(t, i, e[u], e)
            }), A("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(r) {
                var i = "add" == r || "set" == r;
                r in s && (!o || "clear" != r) && b(c.prototype, r, function(e, t) {
                    if (h(this, c, r), !i && o && !m(e)) return "get" == r && void 0;
                    var n = this._c[r](0 === e ? 0 : e, t);
                    return i ? this : n
                })
            }), o || E(c.prototype, "size", {
                get: function() {
                    return this._c.size
                }
            })) : (c = r.getConstructor(e, n, i, u), y(c.prototype, t), p.NEED = !0), S(c, n), d[n] = c, l(l.G + l.W + l.F, d), o || r.setStrong(c, n, i), c
        }
    },
    149: function(e, t, n) {
        var r = n(13);
        r(r.P + r.R, "Set", {
            toJSON: n(150)("Set")
        })
    },
    15: function(e, t, n) {
        var r = n(58)("wks"),
            i = n(46),
            o = n(19).Symbol,
            a = "function" == typeof o;
        (e.exports = function(e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
        }).store = r
    },
    150: function(e, t, n) {
        var r = n(75),
            i = n(151);
        e.exports = function(e) {
            return function() {
                if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
                return i(this)
            }
        }
    },
    151: function(e, t, n) {
        var r = n(39);
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
            u = n(54),
            s = n(25),
            d = n(39);
        e.exports = function(e) {
            r(r.S, e, {
                from: function(e, t, n) {
                    var r, i, o, a, c = t;
                    return u(this), (r = void 0 !== c) && u(c), null == e ? new this : (i = [], r ? (o = 0, a = s(c, n, 2), d(e, !1, function(e) {
                        i.push(a(e, o++))
                    })) : d(e, !1, i.push, i), new this(i))
                }
            })
        }
    },
    156: function(e, t, n) {
        n(66), n(157), e.exports = n(14).Array.from
    },
    157: function(e, t, n) {
        "use strict";
        var g = n(25),
            r = n(13),
            b = n(44),
            y = n(72),
            v = n(73),
            h = n(33),
            m = n(158),
            S = n(74);
        r(r.S + r.F * !n(159)(function(e) {
            Array.from(e)
        }), "Array", {
            from: function(e, t, n) {
                var r, i, o, a, c = b(e),
                    u = "function" == typeof this ? this : Array,
                    s = arguments.length,
                    d = 1 < s ? t : void 0,
                    f = void 0 !== d,
                    l = 0,
                    p = S(c);
                if (f && (d = g(d, 2 < s ? n : void 0, 2)), null == p || u == Array && v(p))
                    for (i = new u(r = h(c.length)); l < r; l++) m(i, l, f ? d(c[l], l) : c[l]);
                else
                    for (a = p.call(c), i = new u; !(o = a.next()).done; l++) m(i, l, f ? y(a, d, [o.value, l], !0) : o.value);
                return i.length = l, i
            }
        })
    },
    158: function(e, t, n) {
        "use strict";
        var r = n(20),
            i = n(42);
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
            }, Array.from(r, function() {
                throw 2
            })
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
    16: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return a
        }), t.d = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
            0 === e.getHooks({
                hook: t
            }).length && e.before(t, n)
        }, t.c = function(e, t) {
            o("async", function(e) {
                e.forEach(function(e) {
                    return t.apply(void 0, function(e) {
                        return function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                                return n
                            }
                        }(e) || function(e) {
                            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance")
                        }()
                    }(e))
                })
            }, e)([])
        }, t.e = function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            a(e).before(function(e, t) {
                t.push(n), e(t)
            })
        };
        var r = n(88),
            i = n.n(r);
        var o = i()({
                useProxy: !1,
                ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
            }),
            a = o.get
    },
    18: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    19: function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    2: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return r
        }), n.d(t, "d", function() {
            return i
        }), n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return a
        });
        var r = "native",
            i = "video",
            o = "banner",
            a = "adpod"
    },
    20: function(e, t, n) {
        var r = n(26),
            i = n(82),
            o = n(83),
            a = Object.defineProperty;
        t.f = n(22) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return a(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    },
    21: function(e, t, n) {
        var r = n(20),
            i = n(42);
        e.exports = n(22) ? function(e, t, n) {
            return r.f(e, t, i(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    },
    22: function(e, t, n) {
        e.exports = !n(30)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    23: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            return new r(e, t)
        };
        var i = n(0);

        function r(e, t) {
            var n = t && t.src || "client",
                r = e || 0;
            this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = function() {
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
            }(), this.adId = i.getUniqueIdentifierStr(), this.requestId = t && t.bidId, this.mediaType = "banner", this.source = n, this.getStatusCode = function() {
                return r
            }, this.getSize = function() {
                return this.width + "x" + this.height
            }
        }
    },
    24: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return v
        });
        var a = n(0),
            r = n(3),
            i = n(9),
            o = n.n(i);

        function c(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
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
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function u() {
            return (u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        r.b.setDefaults({
            userSync: {
                syncEnabled: !0,
                pixelEnabled: !0,
                syncsPerBidder: 5,
                syncDelay: 3e3
            }
        });
        var s, d, f, l, p, g, b, y = !a.isSafariBrowser() && a.cookiesAreEnabled(),
            v = (s = {
                config: r.b.getConfig("userSync"),
                browserSupportsCookies: y
            }, d = {}, g = {
                image: !(p = {}),
                iframe: l = !(f = {
                    image: [],
                    iframe: []
                })
            }, b = s.config, r.b.getConfig("userSync", function(e) {
                b = u(b, e.userSync)
            }), d.registerSync = function(e, t, n) {
                return b.syncEnabled && a.isArray(f[e]) ? t ? 0 !== b.syncsPerBidder && Number(p[t]) >= b.syncsPerBidder ? a.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : d.canBidderRegisterSync(e, t) ? (f[e].push([t, n]), void(p = function(e, t) {
                    return e[t] ? e[t] += 1 : e[t] = 1, e
                }(p, t))) : a.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : a.logWarn("Bidder is required for registering sync") : a.logWarn('User sync type "'.concat(e, '" not supported'))
            }, d.syncUsers = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                if (e) return setTimeout(h, Number(e));
                h()
            }, d.triggerUserSyncs = function() {
                b.enableOverride && d.syncUsers()
            }, d.canBidderRegisterSync = function(e, t) {
                if (b.filterSettings) {
                    if (m(e, t)) return !1
                } else {
                    if (b.enabledBidders && b.enabledBidders.length && b.enabledBidders.indexOf(t) < 0) return !1;
                    if ("iframe" === e && !b.iframeEnabled && !g.iframe) return !1;
                    if ("image" === e && !b.pixelEnabled && !g.image) return !1
                }
                return !0
            }, d);

        function h() {
            if (b.syncEnabled && s.browserSupportsCookies && (b.enableOverride || !l)) {
                try {
                    ! function() {
                        if (!b.pixelEnabled && !g.image) return;
                        a.shuffle(f.image).forEach(function(e) {
                            var t = c(e, 2),
                                n = t[0],
                                r = t[1];
                            a.logMessage("Invoking image pixel user sync for bidder: ".concat(n)), a.triggerPixel(r)
                        })
                    }(),
                    function() {
                        if (!b.iframeEnabled && !g.iframe) return;
                        a.shuffle(f.iframe).forEach(function(e) {
                            var t = c(e, 2),
                                n = t[0],
                                r = t[1];
                            a.logMessage("Invoking iframe user sync for bidder: ".concat(n)), a.insertUserSyncIframe(r)
                        })
                    }()
                } catch (e) {
                    return a.logError("Error firing user syncs", e)
                }
                f = {
                    image: [],
                    iframe: []
                }, l = !0
            }
        }

        function m(e, t) {
            var n = b.filterSettings;
            if (function(e, t) {
                    if (e.all && e[t]) return a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
                    var n = e.all ? e.all : e[t],
                        r = e.all ? "all" : t;
                    if (!n) return !1;
                    var i = n.filter,
                        o = n.bidders;
                    if (i && "include" !== i && "exclude" !== i) return a.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(i, "' is not a valid option; use either 'include' or 'exclude'.")), !1;
                    return !!("*" === o || Array.isArray(o) && 0 < o.length && o.every(function(e) {
                        return a.isStr(e) && "*" !== e
                    })) || (a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1)
                }(n, e)) {
                g[e] = !0;
                var r = n.all ? n.all : n[e],
                    i = "*" === r.bidders ? [t] : r.bidders;
                return {
                    include: function(e, t) {
                        return !o()(e, t)
                    },
                    exclude: function(e, t) {
                        return o()(e, t)
                    }
                }[r.filter || "include"](i, t)
            }
            return !1
        }
    },
    244: function(e, t, n) {
        n(245), e.exports = n(14).String.includes
    },
    245: function(e, t, n) {
        "use strict";
        var r = n(13),
            i = n(246),
            o = "includes";
        r(r.P + r.F * n(248)(o), "String", {
            includes: function(e, t) {
                return !!~i(this, e, o).indexOf(e, 1 < arguments.length ? t : void 0)
            }
        })
    },
    246: function(e, t, n) {
        var r = n(247),
            i = n(32);
        e.exports = function(e, t, n) {
            if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(i(e))
        }
    },
    247: function(e, t, n) {
        var r = n(18),
            i = n(31),
            o = n(15)("match");
        e.exports = function(e) {
            var t;
            return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
        }
    },
    248: function(e, t, n) {
        var r = n(15)("match");
        e.exports = function(t) {
            var n = /./;
            try {
                "/./" [t](n)
            } catch (e) {
                try {
                    return n[r] = !1, !"/./" [t](n)
                } catch (e) {}
            }
            return !0
        }
    },
    25: function(e, t, n) {
        var o = n(54);
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
    26: function(e, t, n) {
        var r = n(18);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    27: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    },
    28: function(e, t, n) {
        "use strict";
        n.d(t, "e", function() {
            return o
        }), n.d(t, "a", function() {
            return s
        }), t.g = function(e) {
            if (e && e.type && function(e) {
                    return !(!e || !c()(Object.keys(d), e)) || (Object(a.logError)("".concat(e, " nativeParam is not supported")), !1)
                }(e.type)) return d[e.type];
            return e
        }, t.f = function(t, e) {
            var n = Object(a.getBidRequest)(t.requestId, e);
            if (!n) return !1;
            if (!Object(a.deepAccess)(t, "native.clickUrl")) return !1;
            if (Object(a.deepAccess)(t, "native.image") && (!Object(a.deepAccess)(t, "native.image.height") || !Object(a.deepAccess)(t, "native.image.width"))) return !1;
            if (Object(a.deepAccess)(t, "native.icon") && (!Object(a.deepAccess)(t, "native.icon.height") || !Object(a.deepAccess)(t, "native.icon.width"))) return !1;
            var r = n.nativeParams;
            if (!r) return !0;
            var i = Object.keys(r).filter(function(e) {
                    return r[e].required
                }),
                o = Object.keys(t.native).filter(function(e) {
                    return t.native[e]
                });
            return i.every(function(e) {
                return c()(o, e)
            })
        }, t.b = function(e, t) {
            var n;
            "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && Object(a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
            return (n || []).forEach(a.triggerPixel), e.action
        }, t.d = function(r, i) {
            var o = {};
            return Object.keys(r.native).forEach(function(e) {
                var t = u.NATIVE_KEYS[e],
                    n = f(r.native[e]);
                Object(a.deepAccess)(i, "mediaTypes.native.".concat(e, ".sendId")) && (n = "".concat(t, ":").concat(r.adId));
                t && n && (o[t] = n)
            }), o
        }, t.c = function(e, r) {
            var i = {
                message: "assetResponse",
                adId: e.adId,
                assets: []
            };
            return e.assets.forEach(function(e) {
                var t = Object(a.getKeyByValue)(u.NATIVE_KEYS, e),
                    n = f(r.native[t]);
                i.assets.push({
                    key: t,
                    value: n
                })
            }), i
        };
        var a = n(0),
            r = n(9),
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
            s = Object.keys(u.NATIVE_KEYS).map(function(e) {
                return u.NATIVE_KEYS[e]
            }),
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
    29: function(e, t) {
        e.exports = {}
    },
    3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return p
        }), n.d(t, "b", function() {
            return E
        });
        var r = n(41),
            i = n(11),
            a = n.n(i),
            o = n(9),
            c = n.n(o),
            u = n(16);

        function s() {
            return (s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function d(e) {
            return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var f = n(0),
            l = window.location.origin,
            p = "random",
            g = {};
        g[p] = !0, g.fixed = !0;
        var b = p,
            y = {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            };
        var v, h, m, S, E = (m = [], S = Object(u.b)("async", function(n) {
            if ("object" === d(n)) {
                var e = Object.keys(n),
                    r = {};
                e.forEach(function(e) {
                    var t = n[e];
                    "object" === d(v[e]) && "object" === d(t) && (t = s({}, v[e], t)), r[e] = h[e] = t
                }), T(r)
            } else f.logError("setConfig options must be an object")
        }), A(), {
            getConfig: function() {
                if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                    var e = arguments.length <= 0 ? void 0 : arguments[0];
                    return e ? f.deepAccess(h, e) : h
                }
                return function(e, t) {
                    var n = t;
                    return "string" != typeof e && (n = e, e = "*"), "function" == typeof n ? (m.push({
                        topic: e,
                        callback: n
                    }), function() {
                        m.splice(m.indexOf(t), 1)
                    }) : void f.logError("listener must be a function")
                }.apply(void 0, arguments)
            },
            setConfig: S,
            setDefaults: function(e) {
                "object" === d(v) ? (s(v, e), s(h, e)) : f.logError("defaults must be an object")
            },
            resetConfig: A
        });

        function A() {
            var n = {
                _debug: !(v = {}),
                get debug() {
                    return this._debug
                },
                set debug(e) {
                    this._debug = e
                },
                _bidderTimeout: 3e3,
                get bidderTimeout() {
                    return this._bidderTimeout
                },
                set bidderTimeout(e) {
                    this._bidderTimeout = e
                },
                _publisherDomain: l,
                get publisherDomain() {
                    return this._publisherDomain
                },
                set publisherDomain(e) {
                    this._publisherDomain = e
                },
                _priceGranularity: y.MEDIUM,
                set priceGranularity(e) {
                    o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : y.MEDIUM : "object" === d(e) && (this._customPriceBucket = e, this._priceGranularity = y.CUSTOM, f.logMessage("Using custom price granularity")))
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
                    this._mediaTypePriceGranularity = Object.keys(n).reduce(function(e, t) {
                        return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : "object" === d(n) && (e[t] = n[t], f.logMessage("Using custom price granularity for ".concat(t))) : f.logWarn("Invalid price granularity for media type: ".concat(t)), e
                    }, {})
                },
                _sendAllBids: !0,
                get enableSendAllBids() {
                    return this._sendAllBids
                },
                set enableSendAllBids(e) {
                    this._sendAllBids = e
                },
                _useBidCache: !1,
                get useBidCache() {
                    return this._useBidCache
                },
                set useBidCache(e) {
                    this._useBidCache = e
                },
                _bidderSequence: b,
                get bidderSequence() {
                    return this._bidderSequence
                },
                set bidderSequence(e) {
                    g[e] ? this._bidderSequence = e : f.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."))
                },
                _timeoutBuffer: 400,
                get timeoutBuffer() {
                    return this._timeoutBuffer
                },
                set timeoutBuffer(e) {
                    this._timeoutBuffer = e
                },
                _disableAjaxTimeout: !1,
                get disableAjaxTimeout() {
                    return this._disableAjaxTimeout
                },
                set disableAjaxTimeout(e) {
                    this._disableAjaxTimeout = e
                }
            };

            function i(t) {
                return a()(Object.keys(y), function(e) {
                    return t === y[e]
                })
            }

            function o(e) {
                if (!e) return f.logError("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                if ("string" == typeof e) i(e) || f.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                else if ("object" === d(e) && !Object(r.b)(e)) return f.logError("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                return !0
            }
            h && T(Object.keys(h).reduce(function(e, t) {
                return h[t] !== n[t] && (e[t] = n[t] || {}), e
            }, {})), h = n
        }

        function T(t) {
            var n = Object.keys(t);
            m.filter(function(e) {
                return c()(n, e.topic)
            }).forEach(function(e) {
                e.callback(function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }({}, e.topic, t[e.topic]))
            }), m.filter(function(e) {
                return "*" === e.topic
            }).forEach(function(e) {
                return e.callback(t)
            })
        }
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
        var r = n(45),
            i = Math.min;
        e.exports = function(e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0
        }
    },
    34: function(e, t) {
        e.exports = function() {}
    },
    348: function(e, t, n) {
        n(349), e.exports = n(14).Array.isArray
    },
    349: function(e, t, n) {
        var r = n(13);
        r(r.S, "Array", {
            isArray: n(57)
        })
    },
    35: function(e, t, n) {
        n(128), e.exports = n(14).Array.findIndex
    },
    350: function(e, t, n) {
        n(351), e.exports = n(14).Number.isInteger
    },
    351: function(e, t, n) {
        var r = n(13);
        r(r.S, "Number", {
            isInteger: n(352)
        })
    },
    352: function(e, t, n) {
        var r = n(18),
            i = Math.floor;
        e.exports = function(e) {
            return !r(e) && isFinite(e) && i(e) === e
        }
    },
    36: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return G
        }), n.d(t, "a", function() {
            return W
        }), t.h = function(e) {
            var a, c, u, s, d = e.adUnits,
                t = e.adUnitCodes,
                n = e.callback,
                r = e.cbTimeout,
                i = e.labels,
                o = e.auctionId,
                f = d,
                l = i,
                p = t,
                g = [],
                b = [],
                y = [],
                v = o || D.generateUUID(),
                h = n,
                m = r,
                S = [],
                E = new Set;

            function A() {
                return {
                    auctionId: v,
                    timestamp: a,
                    auctionEnd: c,
                    auctionStatus: u,
                    adUnits: f,
                    adUnitCodes: p,
                    labels: l,
                    bidderRequests: g,
                    noBids: y,
                    bidsReceived: b,
                    winningBids: S,
                    timeout: m
                }
            }

            function T(e, t) {
                if (t && clearTimeout(s), void 0 === c) {
                    var n = [];
                    e && (D.logMessage("Auction ".concat(v, " timedOut")), (n = function(e, t) {
                        return e.map(function(e) {
                            return (e.bids || []).filter(function(e) {
                                return !t.has(e.bidder)
                            })
                        }).reduce(I.flatten, []).map(function(e) {
                            return {
                                bidId: e.bidId,
                                bidder: e.bidder,
                                adUnitCode: e.adUnitCode,
                                auctionId: e.auctionId
                            }
                        })
                    }(g, E)).length && P.emit(M.EVENTS.BID_TIMEOUT, n)), u = W, c = Date.now(), P.emit(M.EVENTS.AUCTION_END, A());
                    try {
                        if (null != h) {
                            var r = p,
                                i = b.filter(D.bind.call(I.adUnitsFilter, this, r)).reduce(Y, {});
                            h.apply(owpbjs, [i, e]), h = null
                        }
                    } catch (e) {
                        D.logError("Error executing bidsBackHandler", null, e)
                    } finally {
                        n.length && k.callTimedOutBidders(d, n, m);
                        var o = j.b.getConfig("userSync") || {};
                        o.enableOverride || x(o.syncDelay)
                    }
                }
            }

            function w() {
                D.logInfo("Bids Received for Auction with id: ".concat(v), b), u = W, T(!1, !0)
            }

            function O(e) {
                E.add(e)
            }
            return {
                addBidReceived: function(e) {
                    b = b.concat(e)
                },
                addNoBid: function(e) {
                    y = y.concat(e)
                },
                executeCallback: T,
                callBids: function() {
                    var e = this;
                    u = q, a = Date.now();
                    var t = k.makeBidRequests(f, a, v, m, l);
                    D.logInfo("Bids Requested for Auction with id: ".concat(v), t), t.forEach(function(e) {
                        ! function(e) {
                            g = g.concat(e)
                        }(e)
                    });
                    var n = {};
                    if (t.length < 1) D.logWarn("No valid bid requests returned for auction"), w();
                    else {
                        var r = {
                            bidRequests: t,
                            run: function() {
                                ! function() {
                                    var e = T.bind(null, !0),
                                        t = setTimeout(e, m);
                                    s = t
                                }(), u = G, P.emit(M.EVENTS.AUCTION_INIT, A());
                                var r = function(e, r) {
                                    var i = 0,
                                        t = !1,
                                        n = new Set,
                                        o = {};

                                    function a() {
                                        i--, t && 0 === i && e()
                                    }
                                    return {
                                        addBidResponse: function(e, t) {
                                            o[t.requestId] = !0, i++;
                                            var n = function(e) {
                                                var t = e.adUnitCode,
                                                    n = e.bid,
                                                    r = e.bidderRequest,
                                                    i = e.auctionId,
                                                    o = r.start,
                                                    a = N({}, n, {
                                                        auctionId: i,
                                                        responseTimestamp: Object(I.timestamp)(),
                                                        requestTimestamp: o,
                                                        cpm: parseFloat(n.cpm) || 0,
                                                        bidder: n.bidderCode,
                                                        adUnitCode: t
                                                    });
                                                a.timeToRespond = a.responseTimestamp - a.requestTimestamp, P.emit(M.EVENTS.BID_ADJUSTMENT, a);
                                                var c = r.bids && U()(r.bids, function(e) {
                                                        return e.adUnitCode == t
                                                    }),
                                                    u = c && c.renderer;
                                                u && u.url && (a.renderer = C.a.install({
                                                    url: u.url
                                                }), a.renderer.setRender(u.render));
                                                var s = j.b.getConfig("mediaTypePriceGranularity.".concat(n.mediaType)),
                                                    d = Object(_.a)(a.cpm, "object" === R(s) ? s : j.b.getConfig("customPriceBucket"), j.b.getConfig("currency.granularityMultiplier"));
                                                return a.pbLg = d.low, a.pbMg = d.med, a.pbHg = d.high, a.pbAg = d.auto, a.pbDg = d.dense, a.pbCg = d.custom, a
                                            }({
                                                adUnitCode: e,
                                                bid: t,
                                                bidderRequest: this,
                                                auctionId: r.getAuctionId()
                                            });
                                            "video" === n.mediaType ? function(e, t, n, r) {
                                                var i = !0,
                                                    o = Object(I.getBidRequest)(t.requestId, [n]),
                                                    a = o && Object(I.deepAccess)(o, "mediaTypes.video"),
                                                    c = a && Object(I.deepAccess)(a, "context");
                                                j.b.getConfig("cache.url") && c !== B.a && (t.videoCacheKey ? t.vastUrl || (D.logError("videoCacheKey specified but not required vastUrl for video bid"), i = !1) : (i = !1, J(e, t, r, o)));
                                                i && (K(e, t), r())
                                            }(r, n, this, a) : (K(r, n), a())
                                        },
                                        adapterDone: function() {
                                            n.add(this), t = r.getBidRequests().every(function(e) {
                                                return n.has(e)
                                            }), this.bids.forEach(function(e) {
                                                o[e.bidId] || (r.addNoBid(e), P.emit(M.EVENTS.NO_BID, e))
                                            }), t && 0 === i && e()
                                        }
                                    }
                                }(w, e);
                                k.callBids(f, t, function() {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    H.apply({
                                        dispatch: r.addBidResponse,
                                        bidderRequest: this
                                    }, t)
                                }, r.adapterDone, {
                                    request: function(e, t) {
                                        o(F, t), o(n, e), z[e] || (z[e] = {
                                            SRA: !0,
                                            origin: t
                                        }), 1 < n[e] && (z[e].SRA = !1)
                                    },
                                    done: function(e) {
                                        F[e]--, V[0] && i(V[0]) && V.shift()
                                    }
                                }, m, O)
                            }
                        };
                        i(r) || (D.logWarn("queueing auction due to limited endpoint capacity"), V.push(r))
                    }

                    function i(e) {
                        var r = !0,
                            i = j.b.getConfig("maxRequestsPerOrigin") || L;
                        return e.bidRequests.some(function(e) {
                            var t = 1,
                                n = void 0 !== e.src && e.src === M.S2S.SRC ? "s2s" : e.bidderCode;
                            return z[n] && (!1 === z[n].SRA && (t = Math.min(e.bids.length, i)), F[z[n].origin] + t > i && (r = !1)), !r
                        }), r && e.run(), r
                    }

                    function o(e, t) {
                        void 0 === e[t] ? e[t] = 1 : e[t]++
                    }
                },
                addWinningBid: function(e) {
                    S = S.concat(e), k.callBidWonBidder(e.bidder, e, d)
                },
                setBidTargeting: function(e) {
                    k.callSetTargetingBidder(e.bidder, e)
                },
                getWinningBids: function() {
                    return S
                },
                getTimeout: function() {
                    return m
                },
                getAuctionId: function() {
                    return v
                },
                getAuctionStatus: function() {
                    return u
                },
                getAdUnits: function() {
                    return f
                },
                getAdUnitCodes: function() {
                    return p
                },
                getBidRequests: function() {
                    return g
                },
                getBidsReceived: function() {
                    return b
                },
                getNoBids: function() {
                    return y
                }
            }
        }, n.d(t, "c", function() {
            return H
        }), t.f = u, t.d = K, n.d(t, "e", function() {
            return J
        }), t.g = d;
        var I = n(0),
            s = n(10),
            _ = n(41),
            a = n(28),
            o = n(63),
            C = n(12),
            j = n(3),
            r = n(24),
            i = n(16),
            c = n(11),
            U = n.n(c),
            B = n(49);

        function R(e) {
            return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function N() {
            return (N = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var x = r.a.syncUsers,
            D = n(0),
            k = n(7).default,
            P = n(8),
            M = n(4),
            q = "started",
            G = "inProgress",
            W = "completed";
        P.on(M.EVENTS.BID_ADJUSTMENT, function(e) {
            ! function(e) {
                var t, n = e.bidderCode,
                    r = e.cpm;
                if (owpbjs.bidderSettings && (n && owpbjs.bidderSettings[n] && "function" == typeof owpbjs.bidderSettings[n].bidCpmAdjustment ? t = owpbjs.bidderSettings[n].bidCpmAdjustment : owpbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof owpbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = owpbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t)) try {
                    r = t(e.cpm, N({}, e))
                } catch (e) {
                    D.logError("Error during bid adjustment", "bidmanager.js", e)
                }
                0 <= r && (e.cpm = r)
            }(e)
        });
        var L = 4,
            F = {},
            z = {},
            V = [];
        var H = Object(i.b)("async", function(e, t) {
            this.dispatch.call(this.bidderRequest, e, t)
        }, "addBidResponse");

        function u(e, t) {
            t.timeToRespond > e.getTimeout() + j.b.getConfig("timeoutBuffer") && e.executeCallback(!0)
        }

        function K(e, t) {
            var n = e.getBidRequests(),
                r = U()(n, function(e) {
                    return e.bidderCode === t.bidderCode
                });
            ! function(t, e) {
                var n;
                if (t.bidderCode && (0 < t.cpm || t.dealId)) {
                    var r = U()(e.bids, function(e) {
                        return e.adUnitCode === t.adUnitCode
                    });
                    n = function(e, t, n) {
                        if (!t) return {};
                        var r = {},
                            i = owpbjs.bidderSettings;
                        if (i) {
                            var o = d(t.mediaType, e);
                            f(r, o, t), e && i[e] && i[e][M.JSON_MAPPING.ADSERVER_TARGETING] && (f(r, i[e], t), t.sendStandardTargeting = i[e].sendStandardTargeting)
                        }
                        t.native && (r = N({}, r, Object(a.d)(t, n)));
                        return r
                    }(t.bidderCode, t, r)
                }
                t.adserverTargeting = N(t.adserverTargeting || {}, n)
            }(t, r), P.emit(M.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), u(e, t)
        }
        var J = Object(i.b)("async", function(n, r, i, e) {
            Object(o.b)([r], function(e, t) {
                e ? (D.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), u(n, r)) : "" === t[0].uuid ? (D.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), u(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), K(n, r), i())
            })
        }, "callPrebidCache");

        function d(e, t) {
            function n(e, t) {
                return {
                    key: e,
                    val: "function" == typeof t ? function(e) {
                        return t(e)
                    } : function(e) {
                        return Object(I.getValue)(e, t)
                    }
                }
            }
            var r = M.TARGETING_KEYS,
                i = j.b.getConfig("mediaTypePriceGranularity.".concat(e)),
                o = "string" == typeof e && i ? "string" == typeof i ? i : "custom" : j.b.getConfig("priceGranularity"),
                a = owpbjs.bidderSettings;
            if (a[M.JSON_MAPPING.BD_SETTING_STANDARD] || (a[M.JSON_MAPPING.BD_SETTING_STANDARD] = {}), a[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING] || (a[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING] = [n(r.BIDDER, "bidderCode"), n(r.AD_ID, "adId"), n(r.PRICE_BUCKET, function(e) {
                    return o === M.GRANULARITY_OPTIONS.AUTO ? e.pbAg : o === M.GRANULARITY_OPTIONS.DENSE ? e.pbDg : o === M.GRANULARITY_OPTIONS.LOW ? e.pbLg : o === M.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : o === M.GRANULARITY_OPTIONS.HIGH ? e.pbHg : o === M.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                }), n(r.SIZE, "size"), n(r.DEAL, "dealId"), n(r.SOURCE, "source"), n(r.FORMAT, "mediaType")]), "video" === e) {
                var c = a[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING];
                if ([r.UUID, r.CACHE_ID].forEach(function(t) {
                        void 0 === U()(c, function(e) {
                            return e.key === t
                        }) && c.push(n(t, "videoCacheKey"))
                    }), j.b.getConfig("cache.url") && (!t || !1 !== D.deepAccess(a, "".concat(t, ".sendStandardTargeting")))) {
                    var u = Object(s.c)(j.b.getConfig("cache.url"));
                    void 0 === U()(c, function(e) {
                        return e.key === r.CACHE_HOST
                    }) && c.push(n(r.CACHE_HOST, function(e) {
                        return D.deepAccess(e, "adserverTargeting.".concat(r.CACHE_HOST)) ? e.adserverTargeting[r.CACHE_HOST] : u.hostname
                    }))
                }
            }
            return a[M.JSON_MAPPING.BD_SETTING_STANDARD]
        }

        function f(r, i, o) {
            var e = i[M.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), D._each(e, function(e) {
                var t = e.key,
                    n = e.val;
                if (r[t] && D.logWarn("The key: " + t + " is getting ovewritten"), D.isFn(n)) try {
                    n = n(o)
                } catch (e) {
                    D.logError("bidmanager", "ERROR", e)
                }(void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== M.TARGETING_KEYS.DEAL || !D.isEmptyStr(n) && null != n ? r[t] = n : D.logInfo("suppressing empty key '" + t + "' from adserver targeting")
            }), r
        }

        function Y(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e
        }
    },
    37: function(e, t, n) {
        "use strict";
        t.a = function() {
            return window.owpbjs
        }, window.owpbjs = window.owpbjs || {}, window.owpbjs.cmd = window.owpbjs.cmd || [], window.owpbjs.que = window.owpbjs.que || []
    },
    38: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d
        });
        var r = n(0),
            u = n(36),
            i = n(11),
            o = n.n(i),
            a = n(4);
        var s, c, d = (s = [], (c = {}).addWinningBid = function(t) {
            var e = o()(s, function(e) {
                return e.getAuctionId() === t.auctionId
            });
            e ? e.addWinningBid(t) : utils.logWarn("Auction not found when adding winning bid")
        }, c.getAllWinningBids = function() {
            return s.map(function(e) {
                return e.getWinningBids()
            }).reduce(r.flatten, [])
        }, c.getBidsRequested = function() {
            return s.map(function(e) {
                return e.getBidRequests()
            }).reduce(r.flatten, [])
        }, c.getNoBids = function() {
            return s.map(function(e) {
                return e.getNoBids()
            }).reduce(r.flatten, [])
        }, c.getBidsReceived = function() {
            return s.map(function(e) {
                if (e.getAuctionStatus() === u.a) return e.getBidsReceived()
            }).reduce(r.flatten, []).filter(function(e) {
                return e
            })
        }, c.getAdUnits = function() {
            return s.map(function(e) {
                return e.getAdUnits()
            }).reduce(r.flatten, [])
        }, c.getAdUnitCodes = function() {
            return s.map(function(e) {
                return e.getAdUnitCodes()
            }).reduce(r.flatten, []).filter(r.uniques)
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
            return function(e) {
                s.push(e)
            }(c), c
        }, c.findBidByAdId = function(t) {
            return o()(s.map(function(e) {
                return e.getBidsReceived()
            }).reduce(r.flatten, []), function(e) {
                return e.adId === t
            })
        }, c.getStandardBidderAdServerTargeting = function() {
            return Object(u.g)()[a.JSON_MAPPING.ADSERVER_TARGETING]
        }, c.setStatusForBids = function(e, t) {
            var n = c.findBidByAdId(e);
            if (n && (n.status = t), n && t === a.BID_STATUS.BID_TARGETING_SET) {
                var r = o()(s, function(e) {
                    return e.getAuctionId() === n.auctionId
                });
                r && r.setBidTargeting(n)
            }
        }, c.getLastAuctionId = function() {
            return s.length && s[s.length - 1].getAuctionId()
        }, c)
    },
    39: function(e, t, n) {
        var l = n(25),
            p = n(72),
            g = n(73),
            b = n(26),
            y = n(33),
            v = n(74),
            h = {},
            m = {};
        (t = e.exports = function(e, t, n, r, i) {
            var o, a, c, u, s = i ? function() {
                    return e
                } : v(e),
                d = l(n, r, t ? 2 : 1),
                f = 0;
            if ("function" != typeof s) throw TypeError(e + " is not iterable!");
            if (g(s)) {
                for (o = y(e.length); f < o; f++)
                    if ((u = t ? d(b(a = e[f])[0], a[1]) : d(e[f])) === h || u === m) return u
            } else
                for (c = s.call(e); !(a = c.next()).done;)
                    if ((u = p(c, d, a.value, t)) === h || u === m) return u
        }).BREAK = h, t.RETURN = m
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
                title: "pwt_native_title",
                body: "pwt_native_body",
                body2: "pwt_native_body2",
                privacyLink: "pwt_native_privacy",
                sponsoredBy: "pwt_native_brand",
                image: "pwt_native_image",
                icon: "pwt_native_icon",
                clickUrl: "pwt_native_linkurl",
                displayUrl: "pwt_native_displayurl",
                cta: "pwt_native_cta",
                rating: "pwt_native_rating",
                address: "pwt_native_address",
                downloads: "pwt_native_downloads",
                likes: "pwt_native_likes",
                phone: "pwt_native_phone",
                price: "pwt_native_price",
                salePrice: "pwt_native_saleprice"
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
    41: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        }), n.d(t, "b", function() {
            return g
        });
        var r = n(11),
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
                low: "" === r ? "" : p(e, o, n),
                med: "" === r ? "" : p(e, c, n),
                high: "" === r ? "" : p(e, u, n),
                auto: "" === r ? "" : p(e, f, n),
                dense: "" === r ? "" : p(e, d, n),
                custom: "" === r ? "" : p(e, t, n)
            }
        }

        function p(n, e, r) {
            var i = "";
            if (!g(e)) return i;
            var o = e.buckets.reduce(function(e, t) {
                    return e.max > t.max ? e : t
                }, {
                    max: 0
                }),
                t = a()(e.buckets, function(e) {
                    if (n > o.max * r) {
                        var t = e.precision;
                        void 0 === t && (t = s), i = (e.max * r).toFixed(t)
                    } else if (n <= e.max * r && n >= e.min * r) return e
                });
            return t && (i = function(e, t, n) {
                var r = void 0 !== t.precision ? t.precision : s,
                    i = t.increment * n,
                    o = t.min * n,
                    a = Math.pow(10, r + 2),
                    c = (e * a - o * a) / (i * a),
                    u = Math.floor(c) * i + o;
                return (u = Number(u.toFixed(10))).toFixed(r)
            }(n, t, r)), i
        }

        function g(e) {
            if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach(function(e) {
                void 0 !== e.min && e.max && e.increment || (t = !1)
            }), t
        }
    },
    42: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    43: function(e, t, n) {
        var m = n(25),
            S = n(56),
            E = n(44),
            A = n(33),
            r = n(84);
        e.exports = function(f, e) {
            var l = 1 == f,
                p = 2 == f,
                g = 3 == f,
                b = 4 == f,
                y = 6 == f,
                v = 5 == f || y,
                h = e || r;
            return function(e, t, n) {
                for (var r, i, o = E(e), a = S(o), c = m(t, n, 3), u = A(a.length), s = 0, d = l ? h(e, u) : p ? h(e, 0) : void 0; s < u; s++)
                    if ((v || s in a) && (i = c(r = a[s], s, o), f))
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
                return y ? -1 : g || b ? b : d
            }
        }
    },
    44: function(e, t, n) {
        var r = n(32);
        e.exports = function(e) {
            return Object(r(e))
        }
    },
    45: function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
        }
    },
    46: function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    },
    47: function(e, t, n) {
        var r = n(56),
            i = n(32);
        e.exports = function(e) {
            return r(i(e))
        }
    },
    48: function(e, t, n) {
        "use strict";
        t.a = r, n.d(t, "b", function() {
            return i
        });
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
                var e = function() {
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
                    }(),
                    t = function() {
                        try {
                            if (!i.location.ancestorOrigins) return;
                            return i.location.ancestorOrigins
                        } catch (e) {}
                    }();
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
                        i = function(e) {
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
                                if (r) n.push(r), c = c || r;
                                else if (0 !== t) {
                                    i = e[t - 1];
                                    try {
                                        o = i.referrer, a = i.ancestor
                                    } catch (e) {}
                                    o ? (n.push(o), c = c || o) : a ? (n.push(a), c = c || a) : n.push(null)
                                } else n.push(null)
                            }
                            return {
                                stack: n,
                                detectedRefererUrl: c
                            }
                        }(t);
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
    49: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        }), t.c = function(e, t) {
            var n = Object(o.getBidRequest)(e.requestId, t),
                r = n && Object(o.deepAccess)(n, "mediaTypes.video"),
                i = r && Object(o.deepAccess)(r, "context");
            return u(e, n, r, i)
        }, n.d(t, "b", function() {
            return u
        });
        n(7);
        var o = n(0),
            i = n(3),
            r = n(9),
            a = (n.n(r), n(16)),
            c = "outstream";
        var u = Object(a.b)("sync", function(e, t, n, r) {
            return !t || n && r !== c ? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with owpbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : r !== c || !(!e.renderer && !t.renderer)
        }, "checkVideoBidSetup")
    },
    5: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), t.b = i;
        var l = n(10),
            p = n(3);

        function g() {
            return (g = Object.assign || function(e) {
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
        var y = n(0),
            v = 4,
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
                            y.logMessage("xhr success")
                        },
                        error: function(e) {
                            y.logError("xhr error", null, e)
                        }
                    };
                    if ("function" == typeof t && (c.success = t), (i = new window.XMLHttpRequest).onreadystatechange = function() {
                            if (i.readyState === v) {
                                "function" == typeof f && f(a.origin);
                                var e = i.status;
                                200 <= e && e < 300 || 304 === e ? c.success(i.responseText, i) : c.error(i.statusText, i)
                            }
                        }, p.b.getConfig("disableAjaxTimeout") || (i.ontimeout = function() {
                            y.logError("  xhr timeout after ", i.timeout, "ms")
                        }), "GET" === o && n) {
                        var u = Object(l.c)(e, r);
                        g(u.search, n), e = Object(l.a)(u)
                    }
                    i.open(o, e, !0), p.b.getConfig("disableAjaxTimeout") || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), y._each(r.customHeaders, function(e, t) {
                        i.setRequestHeader(t, e)
                    }), r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType || "text/plain"), "function" == typeof d && d(a.origin), "POST" === o && n ? i.send(n) : i.send()
                } catch (e) {
                    y.logError("xhr construction", e)
                }
            }
        }
    },
    50: function(e, t, n) {
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
            }, e && "function" == typeof e && a[t].callbacks.push(e), u(t, function() {
                a[t].loaded = !0;
                try {
                    for (var e = 0; e < a[t].callbacks.length; e++) a[t].callbacks[e]()
                } catch (e) {
                    o.logError("Error executing callback", "adloader.js:loadScript", e)
                }
            })) : u(t, e)
        };
        var r = n(9),
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
    51: function(e, t, n) {
        "use strict";

        function m() {
            return this
        }
        var S = n(59),
            E = n(13),
            A = n(136),
            T = n(21),
            w = n(29),
            O = n(137),
            I = n(53),
            _ = n(142),
            C = n(15)("iterator"),
            j = !([].keys && "next" in [].keys()),
            U = "values";
        e.exports = function(e, t, n, r, i, o, a) {
            O(n, t, r);

            function c(e) {
                if (!j && e in g) return g[e];
                switch (e) {
                    case "keys":
                    case U:
                        return function() {
                            return new n(this, e)
                        }
                }
                return function() {
                    return new n(this, e)
                }
            }
            var u, s, d, f = t + " Iterator",
                l = i == U,
                p = !1,
                g = e.prototype,
                b = g[C] || g["@@iterator"] || i && g[i],
                y = b || c(i),
                v = i ? l ? c("entries") : y : void 0,
                h = "Array" == t && g.entries || b;
            if (h && (d = _(h.call(new e))) !== Object.prototype && d.next && (I(d, f, !0), S || "function" == typeof d[C] || T(d, C, m)), l && b && b.name !== U && (p = !0, y = function() {
                    return b.call(this)
                }), S && !a || !j && !p && g[C] || T(g, C, y), w[t] = y, w[f] = m, i)
                if (u = {
                        values: l ? y : c(U),
                        keys: o ? y : c("keys"),
                        entries: v
                    }, a)
                    for (s in u) s in g || A(g, s, u[s]);
                else E(E.P + E.F * (j || p), t, u);
            return u
        }
    },
    52: function(e, t, n) {
        var r = n(58)("keys"),
            i = n(46);
        e.exports = function(e) {
            return r[e] || (r[e] = i(e))
        }
    },
    53: function(e, t, n) {
        var r = n(20).f,
            i = n(27),
            o = n(15)("toStringTag");
        e.exports = function(e, t, n) {
            e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                configurable: !0,
                value: t
            })
        }
    },
    54: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    },
    55: function(e, t, n) {
        var r = n(18),
            i = n(19).document,
            o = r(i) && r(i.createElement);
        e.exports = function(e) {
            return o ? i.createElement(e) : {}
        }
    },
    56: function(e, t, n) {
        var r = n(31);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    },
    57: function(e, t, n) {
        var r = n(31);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    },
    58: function(e, t, n) {
        var r = n(14),
            i = n(19),
            o = "__core-js_shared__",
            a = i[o] || (i[o] = {});
        (e.exports = function(e, t) {
            return a[e] || (a[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: n(59) ? "pure" : "global",
            copyright: "u00A9 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    59: function(e, t) {
        e.exports = !0
    },
    60: function(e, t, n) {
        var u = n(47),
            s = n(33),
            d = n(87);
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
    61: function(e, t, n) {
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
            var t = y(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b);
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
                s = y(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : b);
            c = Object(p.isPlainObject)(c) ? Object(p.deepClone)(c) : u ? {
                banner: {
                    sizes: u
                }
            } : {};
            var d = Object(p.deepAccess)(c, "banner.sizes");
            s.shouldFilter && d && (c.banner.sizes = d.filter(function(e) {
                return s.sizesSupported[e]
            }));
            var f = Object.keys(c),
                l = {
                    active: 1 < f.length || 1 === f.length && "banner" !== f[0] || "banner" === f[0] && 0 < Object(p.deepAccess)(c, "banner.sizes.length") && (0 === n.length || !i && (n.some(function(e) {
                        return s.labels[e]
                    }) || n.some(function(e) {
                        return g()(a, e)
                    })) || i && n.reduce(function(e, t) {
                        return e ? s.labels[t] || g()(a, t) : e
                    }, !0)),
                    mediaTypes: c
                };
            d && d.length !== c.banner.sizes.length && (l.filterResults = {
                before: d,
                after: c.banner.sizes
            });
            return l
        };
        var r = n(3),
            p = n(0),
            i = n(9),
            g = n.n(i);

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var b = [];

        function y(e) {
            return e.reduce(function(n, r) {
                if ("object" === o(r) && "string" == typeof r.mediaQuery) {
                    var t = !1;
                    try {
                        t = Object(p.getWindowTop)().matchMedia(r.mediaQuery).matches
                    } catch (e) {
                        Object(p.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), t = matchMedia(r.mediaQuery).matches
                    }
                    t && (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0), ["labels", "sizesSupported"].forEach(function(t) {
                        return (r[t] || []).forEach(function(e) {
                            return n[t][e] = !0
                        })
                    }))
                } else Object(p.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                return n
            }, {
                labels: {},
                sizesSupported: {},
                shouldFilter: !1
            })
        }
        r.b.getConfig("sizeConfig", function(e) {
            return function(e) {
                b = e
            }(e.sizeConfig)
        })
    },
    62: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
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
    63: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = {
                puts: e.map(o)
            };
            Object(r.a)(i.b.getConfig("cache.url"), function(n) {
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
            }(t), JSON.stringify(n), {
                contentType: "text/plain",
                withCredentials: !0
            })
        }, t.a = function(e) {
            return "".concat(i.b.getConfig("cache.url"), "?uuid=").concat(e)
        };
        var r = n(5),
            i = n(3);

        function o(e) {
            var t = {
                type: "xml",
                value: e.vastXml ? e.vastXml : function(e, t) {
                    var n = t ? "<![CDATA[".concat(t, "]]>") : "";
                    return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(e, "]]></VASTAdTagURI>\n        <Impression>").concat(n, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")
                }(e.vastUrl, e.vastImpUrl),
                ttlseconds: Number(e.ttl)
            };
            return "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (t.key = e.customCacheKey), t
        }
    },
    630: function(e, t, n) {
        e.exports = n(64)
    },
    64: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "checkAdUnitSetup", function() {
            return G
        });
        var r = n(37),
            c = n(0),
            i = n(131),
            o = n(24),
            a = n(50),
            d = n(3),
            y = n(38),
            f = n(65),
            u = n(16),
            s = n(132),
            l = n(9),
            p = n.n(l),
            g = n(62),
            v = n(12),
            b = n(23);

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
            E = n(4),
            A = n(0),
            T = n(7).default,
            w = n(8),
            O = o.a.triggerUserSyncs,
            I = E.EVENTS,
            _ = I.ADD_AD_UNITS,
            C = I.BID_WON,
            j = I.REQUEST_BIDS,
            U = I.SET_TARGETING,
            B = I.AD_RENDER_FAILED,
            R = E.AD_RENDER_FAILED_REASON,
            N = R.PREVENT_WRITING_ON_MAIN_DOCUMENT,
            x = R.NO_AD,
            D = R.EXCEPTION,
            k = R.CANNOT_FIND_AD,
            P = R.MISSING_DOC_OR_ADID,
            M = {
                bidWon: function(e) {
                    var t = y.a.getBidsRequested().map(function(e) {
                        return e.bids.map(function(e) {
                            return e.adUnitCode
                        })
                    }).reduce(c.flatten).filter(c.uniques);
                    return !!A.contains(t, e) || void A.logError('The "' + e + '" placement is not defined.')
                }
            };

        function q(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n)
        }
        Object(s.a)(), S.bidderSettings = S.bidderSettings || {}, S.libLoaded = !0, S.version = "v2.22.0", A.logInfo("Prebid.js v2.22.0 loaded"), S.adUnits = S.adUnits || [], S.triggerUserSyncs = O;
        var G = Object(u.b)("sync", function(e) {
            return e.forEach(function(e) {
                var t = e.mediaTypes,
                    n = A.getAdUnitSizes(e);
                if (t && t.banner) {
                    var r = t.banner;
                    r.sizes ? (r.sizes = n, e.sizes = n) : (A.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."), delete e.mediaTypes.banner)
                } else e.sizes && (A.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."), e.sizes = n);
                if (t && t.video) {
                    var i = t.video;
                    if (i.playerSize)
                        if (Array.isArray(i.playerSize) && 1 === i.playerSize.length && i.playerSize.every(function(e) {
                                return Object(c.isArrayOfNums)(e, 2)
                            })) e.sizes = i.playerSize;
                        else if (Object(c.isArrayOfNums)(i.playerSize, 2)) {
                        var o = [];
                        o.push(i.playerSize), A.logInfo("Transforming video.playerSize from [".concat(i.playerSize, "] to [[").concat(o, "]] so it's in the proper format.")), e.sizes = i.playerSize = o
                    } else A.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete e.mediaTypes.video.playerSize
                }
                if (t && t.native) {
                    var a = t.native;
                    a.image && a.image.sizes && !Array.isArray(a.image.sizes) && (A.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete e.mediaTypes.native.image.sizes), a.image && a.image.aspect_ratios && !Array.isArray(a.image.aspect_ratios) && (A.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete e.mediaTypes.native.image.aspect_ratios), a.icon && a.icon.sizes && !Array.isArray(a.icon.sizes) && (A.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete e.mediaTypes.native.icon.sizes)
                }
            }), e
        }, "checkAdUnitSetup");

        function W(e) {
            var n = y.a[e]().filter(A.bind.call(c.adUnitsFilter, this, y.a.getAdUnitCodes())),
                r = y.a.getLastAuctionId();
            return n.map(function(e) {
                return e.adUnitCode
            }).filter(c.uniques).map(function(t) {
                return n.filter(function(e) {
                    return e.auctionId === r && e.adUnitCode === t
                })
            }).filter(function(e) {
                return e && e[0] && e[0].adUnitCode
            }).map(function(e) {
                return function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }({}, e[0].adUnitCode, {
                    bids: e
                })
            }).reduce(function(e, t) {
                return m(e, t)
            }, {})
        }

        function L(e, t, n) {
            var r = {};
            r.reason = e, r.message = t, n && (r.bid = n), A.logError(t), w.emit(B, r)
        }

        function F(e) {
            e.forEach(function(e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0
                } catch (e) {
                    A.logError("Error processing command :", "prebid.js", e)
                }
            })
        }
        S.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (A.logInfo("Invoking owpbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                var t = S.getAdserverTargetingForAdUnitCode(e);
                return A.transformAdServerTargetingObj(t)
            }
            A.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }, S.getAdserverTargetingForAdUnitCode = function(e) {
            return S.getAdserverTargeting(e)[e]
        }, S.getAdserverTargeting = function(e) {
            return A.logInfo("Invoking owpbjs.getAdserverTargeting", arguments), f.b.getAllTargeting(e)
        }, S.getNoBids = function() {
            return A.logInfo("Invoking owpbjs.getNoBids", arguments), W("getNoBids")
        }, S.getBidResponses = function() {
            return A.logInfo("Invoking owpbjs.getBidResponses", arguments), W("getBidsReceived")
        }, S.getBidResponsesForAdUnitCode = function(t) {
            return {
                bids: y.a.getBidsReceived().filter(function(e) {
                    return e.adUnitCode === t
                })
            }
        }, S.setTargetingForGPTAsync = function(e, t) {
            if (A.logInfo("Invoking owpbjs.setTargetingForGPTAsync", arguments), Object(c.isGptPubadsDefined)()) {
                var n = f.b.getAllTargeting(e);
                f.b.resetPresetTargeting(e), f.b.setTargetingForGPT(n, t), Object.keys(n).forEach(function(t) {
                    Object.keys(n[t]).forEach(function(e) {
                        "hb_adid" === e && y.a.setStatusForBids(n[t][e], E.BID_STATUS.BID_TARGETING_SET)
                    })
                }), w.emit(U, n)
            } else A.logError("window.googletag is not defined on the page")
        }, S.setTargetingForAst = function(e) {
            A.logInfo("Invoking owpbjs.setTargetingForAn", arguments), f.b.isApntagDefined() ? (f.b.setTargetingForAst(e), w.emit(U, f.b.getAllTargeting())) : A.logError("window.apntag is not defined on the page")
        }, S.renderAd = function(e, t) {
            if (A.logInfo("Invoking owpbjs.renderAd", arguments), A.logMessage("Calling renderAd with adId :" + t), e && t) try {
                var n = y.a.findBidByAdId(t);
                if (n) {
                    n.status = E.BID_STATUS.RENDERED, n.ad = A.replaceAuctionPrice(n.ad, n.cpm), n.adUrl = A.replaceAuctionPrice(n.adUrl, n.cpm), y.a.addWinningBid(n), w.emit(C, n);
                    var r = n.height,
                        i = n.width,
                        o = n.ad,
                        a = n.mediaType,
                        c = n.adUrl,
                        u = n.renderer,
                        s = document.createComment("Creative ".concat(n.creativeId, " served by ").concat(n.bidder, " Prebid.js Header Bidding"));
                    if (A.insertElement(s, e, "body"), Object(v.c)(u)) Object(v.b)(u, n);
                    else if (e === document && !A.inIframe() || "video" === a) {
                        var d = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document.");
                        L(N, d, n)
                    } else if (o) e.open("text/html", "replace"), e.write(o), e.close(), q(e, i, r), A.callBurl(n);
                    else if (c) {
                        var f = A.createInvisibleIframe();
                        f.height = r, f.width = i, f.style.display = "inline", f.style.overflow = "hidden", f.src = c, A.insertElement(f, e, "body"), q(e, i, r), A.callBurl(n)
                    } else {
                        var l = "Error trying to write ad. No ad for bid response id: ".concat(t);
                        L(x, l, n)
                    }
                } else {
                    var p = "Error trying to write ad. Cannot find ad by given id : ".concat(t);
                    L(k, p)
                }
            } catch (e) {
                var g = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                L(D, g)
            } else {
                var b = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                L(P, b)
            }
        }, S.removeAdUnit = function(e) {
            (A.logInfo("Invoking owpbjs.removeAdUnit", arguments), e) ? (A.isArray(e) ? e : [e]).forEach(function(e) {
                for (var t = 0; t < S.adUnits.length; t++) S.adUnits[t].code === e && S.adUnits.splice(t, 1)
            }): S.adUnits = []
        }, S.requestBids = Object(u.b)("async", function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.bidsBackHandler,
                n = e.timeout,
                r = e.adUnits,
                i = e.adUnitCodes,
                o = e.labels,
                a = e.auctionId;
            w.emit(j);
            var c = n || d.b.getConfig("bidderTimeout");
            if (r = r || S.adUnits, A.logInfo("Invoking owpbjs.requestBids", arguments), i && i.length ? r = r.filter(function(e) {
                    return p()(i, e.code)
                }) : i = r && r.map(function(e) {
                    return e.code
                }), (r = G(r)).forEach(function(i) {
                    var o = Object.keys(i.mediaTypes || {
                            banner: "banner"
                        }),
                        e = i.bids.map(function(e) {
                            return e.bidder
                        }),
                        a = T.bidderRegistry,
                        t = d.b.getConfig("s2sConfig"),
                        n = t && t.bidders,
                        r = n ? e.filter(function(e) {
                            return !p()(n, e)
                        }) : e;
                    i.transactionId = A.generateUUID(), r.forEach(function(t) {
                        var e = a[t],
                            n = e && e.getSpec && e.getSpec(),
                            r = n && n.supportedMediaTypes || ["banner"];
                        o.some(function(e) {
                            return p()(r, e)
                        }) || (A.logWarn(A.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter(function(e) {
                            return e.bidder !== t
                        }))
                    }), g.a.incrementCounter(i.code)
                }), r && 0 !== r.length) {
                var u = y.a.createAuction({
                        adUnits: r,
                        adUnitCodes: i,
                        callback: t,
                        cbTimeout: c,
                        labels: o,
                        auctionId: a
                    }),
                    s = r.length;
                return 15 < s && A.logInfo("Current auction ".concat(u.getAuctionId(), " contains ").concat(s, " adUnits."), r), i.forEach(function(e) {
                    return f.b.setLatestAuctionForAdUnit(e, u.getAuctionId())
                }), u.callBids(), u
            }
            if (A.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t()
            } catch (e) {
                A.logError("Error executing bidsBackHandler", null, e)
            }
        }), S.addAdUnits = function(e) {
            A.logInfo("Invoking owpbjs.addAdUnits", arguments), A.isArray(e) ? S.adUnits.push.apply(S.adUnits, e) : "object" === h(e) && S.adUnits.push(e), w.emit(_)
        }, S.onEvent = function(e, t, n) {
            A.logInfo("Invoking owpbjs.onEvent", arguments), A.isFn(t) ? !n || M[e].call(null, n) ? w.on(e, t, n) : A.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : A.logError('The event handler provided is not a function and was not set on event "' + e + '".')
        }, S.offEvent = function(e, t, n) {
            A.logInfo("Invoking owpbjs.offEvent", arguments), n && !M[e].call(null, n) || w.off(e, t, n)
        }, S.registerBidAdapter = function(e, t) {
            A.logInfo("Invoking owpbjs.registerBidAdapter", arguments);
            try {
                T.registerBidAdapter(e(), t)
            } catch (e) {
                A.logError("Error registering bidder adapter : " + e.message)
            }
        }, S.registerAnalyticsAdapter = function(e) {
            A.logInfo("Invoking owpbjs.registerAnalyticsAdapter", arguments);
            try {
                T.registerAnalyticsAdapter(e)
            } catch (e) {
                A.logError("Error registering analytics adapter : " + e.message)
            }
        }, S.createBid = function(e) {
            return A.logInfo("Invoking owpbjs.createBid", arguments), Object(b.a)(e)
        }, S.loadScript = function(e, t, n) {
            A.logInfo("Invoking owpbjs.loadScript", arguments), Object(a.b)(e, t, n)
        }, S.enableAnalytics = function(e) {
            e && !A.isEmpty(e) ? (A.logInfo("Invoking owpbjs.enableAnalytics for: ", e), T.enableAnalytics(e)) : A.logError("owpbjs.enableAnalytics should be called with option {}")
        }, S.aliasBidder = function(e, t) {
            A.logInfo("Invoking owpbjs.aliasBidder", arguments), e && t ? T.aliasBidAdapter(e, t) : A.logError("bidderCode and alias must be passed as arguments", "owpbjs.aliasBidder")
        }, S.getAllWinningBids = function() {
            return y.a.getAllWinningBids()
        }, S.getAllPrebidWinningBids = function() {
            return y.a.getBidsReceived().filter(function(e) {
                return e.status === E.BID_STATUS.BID_TARGETING_SET
            })
        }, S.getHighestCpmBids = function(e) {
            var t = Object(f.a)(y.a.getBidsReceived(), c.getLatestHighestCpmBid);
            return f.b.getWinningBids(e, t)
        }, S.markWinningBidAsUsed = function(t) {
            var e = [];
            t.adUnitCode && t.adId ? e = y.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode
            }) : t.adUnitCode ? e = f.b.getWinningBids(t.adUnitCode) : t.adId ? e = y.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId
            }) : A.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 0 < e.length && (e[0].status = E.BID_STATUS.RENDERED)
        }, S.getConfig = d.b.getConfig, S.setConfig = d.b.setConfig, S.que.push(function() {
            return Object(i.a)()
        }), S.cmd.push = function(e) {
            if ("function" == typeof e) try {
                e.call()
            } catch (e) {
                A.logError("Error processing command :", e.message, e.stack)
            } else A.logError("Commands written into owpbjs.cmd.push must be wrapped in a function")
        }, S.que.push = S.cmd.push, S.processQueue = function() {
            u.b.ready(), F(S.que), F(S.cmd)
        }, t.default = S
    },
    65: function(e, t, n) {
        "use strict";
        t.a = S, n.d(t, "b", function() {
            return O
        });
        var s = n(0),
            o = n(3),
            a = n(28),
            r = n(38),
            i = n(61),
            c = n(2),
            u = n(9),
            d = n.n(u);

        function f(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
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

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var g = n(0),
            b = n(4),
            y = [],
            v = Object.keys(b.TARGETING_KEYS).map(function(e) {
                return b.TARGETING_KEYS[e]
            }),
            h = function(e) {
                return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(s.timestamp)()
            },
            m = function(e) {
                return e && (e.status && !d()([b.BID_STATUS.BID_TARGETING_SET, b.BID_STATUS.RENDERED], e.status) || !e.status)
            };

        function S(e, n) {
            var r = [],
                i = Object(s.groupBy)(e, "adUnitCode");
            return Object.keys(i).forEach(function(e) {
                var t = Object(s.groupBy)(i[e], "bidderCode");
                Object.keys(t).forEach(function(e) {
                    return r.push(t[e].reduce(n))
                })
            }), r
        }

        function E(e, t) {
            return void 0 !== e.adUnitTargeting.hb_deal && void 0 === t.adUnitTargeting.hb_deal ? -1 : void 0 === e.adUnitTargeting.hb_deal && void 0 !== t.adUnitTargeting.hb_deal ? 1 : t.adUnitTargeting.hb_pb - e.adUnitTargeting.hb_pb
        }
        var A, T, w, O = (A = r.a, w = {}, (T = {}).setLatestAuctionForAdUnit = function(e, t) {
            w[e] = t
        }, T.resetPresetTargeting = function(e) {
            if (Object(s.isGptPubadsDefined)()) {
                var t = I(e),
                    r = A.getAdUnits().filter(function(e) {
                        return d()(t, e.code)
                    });
                window.googletag.pubads().getSlots().forEach(function(n) {
                    y.forEach(function(t) {
                        r.forEach(function(e) {
                            e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId() || n.setTargeting(t, null)
                        })
                    })
                })
            }
        }, T.resetPresetTargetingAST = function(e) {
            I(e).forEach(function(e) {
                var t = window.apntag.getTag(e);
                if (t && t.keywords) {
                    var n = Object.keys(t.keywords),
                        r = {};
                    n.forEach(function(e) {
                        d()(y, e.toLowerCase()) || (r[e] = t.keywords[e])
                    }), window.apntag.modifyTag(e, {
                        keywords: r
                    })
                }
            })
        }, T.getAllTargeting = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : _(),
                n = I(e),
                r = function(e, t) {
                    var n = T.getWinningBids(e, t),
                        r = C();
                    return n = n.map(function(o) {
                        return p({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function(e) {
                            return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === r.indexOf(e)
                        }).reduce(function(e, t) {
                            var n = [o.adserverTargeting[t]],
                                r = p({}, t.substring(0, 20), n);
                            if (t !== b.TARGETING_KEYS.DEAL) return [].concat(f(e), [r]);
                            var i = p({}, "".concat(t, "_").concat(o.bidderCode).substring(0, 20), n);
                            return [].concat(f(e), [r, i])
                        }, []))
                    })
                }(n, t).concat(function(t, e) {
                    return e.filter(function(e) {
                        return d()(t, e.adUnitCode)
                    }).map(function(e) {
                        return l({}, e)
                    }).reduce(j, []).map(B).filter(function(e) {
                        return e
                    })
                }(n, t)).concat(o.b.getConfig("enableSendAllBids") ? function(e, t) {
                    var n = v.concat(a.a);
                    return S(t, s.getHighestCpm).map(function(t) {
                        if (t.adserverTargeting && e && (g.isArray(e) && d()(e, t.adUnitCode) || "string" == typeof e && t.adUnitCode === e)) return p({}, t.adUnitCode, function(t, e) {
                            return e.map(function(e) {
                                return p({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]])
                            })
                        }(t, n.filter(function(e) {
                            return void 0 !== t.adserverTargeting[e]
                        })))
                    }).filter(function(e) {
                        return e
                    })
                }(n, t) : []);
            r.map(function(t) {
                Object.keys(t).map(function(e) {
                    t[e].map(function(e) {
                        -1 === y.indexOf(Object.keys(e)[0]) && (y = Object.keys(e).concat(y))
                    })
                })
            }), r = function(e) {
                return e.map(function(e) {
                    return p({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function(e) {
                        return p({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                    }).reduce(function(e, t) {
                        return l(t, e)
                    }, {}))
                }).reduce(function(e, t) {
                    var n = Object.keys(t)[0];
                    return e[n] = l({}, e[n], t[n]), e
                }, {})
            }(r);
            var i = o.b.getConfig("targetingControls.auctionKeyMaxChars");
            return i && (Object(s.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(i, " characters.  Running checks on auction keys...")), r = function(e, c) {
                var u = Object(s.deepClone)(e);
                return Object.keys(u).map(function(e) {
                    return {
                        adUnitCode: e,
                        adUnitTargeting: u[e]
                    }
                }).sort(E).reduce(function(e, t, n, r) {
                    var i = function(n) {
                        return Object.keys(n).reduce(function(e, t) {
                            return e + "".concat(t, "%3d").concat(encodeURIComponent(n[t]), "%26")
                        }, "")
                    }(t.adUnitTargeting);
                    n + 1 === r.length && (i = i.slice(0, -3));
                    var o = t.adUnitCode,
                        a = i.length;
                    return a <= c ? (c -= a, Object(s.logInfo)("AdUnit '".concat(o, "' auction keys comprised of ").concat(a, " characters.  Deducted from running threshold; new limit is ").concat(c), u[o]), e[o] = u[o]) : Object(s.logWarn)("The following keys for adUnitCode '".concat(o, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(a, ", the current allotted amount was ").concat(c, ".\n"), u[o]), n + 1 === r.length && 0 === Object.keys(e).length && Object(s.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e
                }, {})
            }(r, i)), n.forEach(function(e) {
                r[e] || (r[e] = {})
            }), r
        }, T.setTargetingForGPT = function(i, e) {
            window.googletag.pubads().getSlots().forEach(function(r) {
                Object.keys(i).filter(e ? e(r) : Object(s.isAdUnitCodeMatchingSlot)(r)).forEach(function(n) {
                    return Object.keys(i[n]).forEach(function(t) {
                        var e = i[n][t].split(",");
                        (e = 1 < e.length ? [e] : e).map(function(e) {
                            return g.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), e
                        }).forEach(function(e) {
                            r.setTargeting(t, e)
                        })
                    })
                })
            })
        }, T.getWinningBids = function(e) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : _(),
                t = I(e);
            return n.filter(function(e) {
                return d()(t, e.adUnitCode)
            }).filter(function(e) {
                return 0 < e.cpm
            }).map(function(e) {
                return e.adUnitCode
            }).filter(s.uniques).map(function(t) {
                return n.filter(function(e) {
                    return e.adUnitCode === t ? e : null
                }).reduce(s.getHighestCpm)
            })
        }, T.setTargetingForAst = function(e) {
            var r = T.getAllTargeting(e);
            try {
                T.resetPresetTargetingAST(e)
            } catch (e) {
                g.logError("unable to reset targeting for AST" + e)
            }
            Object.keys(r).forEach(function(n) {
                return Object.keys(r[n]).forEach(function(e) {
                    if (g.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])), g.isStr(r[n][e]) || g.isArray(r[n][e])) {
                        var t = {};
                        e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t, {
                            overrideKeyValue: !0
                        })
                    }
                })
            })
        }, T.isApntagDefined = function() {
            if (window.apntag && g.isFn(window.apntag.setKeywords)) return !0
        }, T);

        function I(e) {
            return "string" == typeof e ? [e] : g.isArray(e) ? e : A.getAdUnitCodes() || []
        }

        function _() {
            var e = A.getBidsReceived();
            return o.b.getConfig("useBidCache") || (e = e.filter(function(e) {
                return w[e.adUnitCode] === e.auctionId
            })), S(e = e.filter(function(e) {
                return Object(s.deepAccess)(e, "video.context") !== c.a
            }).filter(function(e) {
                return "banner" !== e.mediaType || Object(i.c)([e.width, e.height])
            }).filter(m).filter(h), s.getOldestHighestCpmBid)
        }

        function C() {
            return A.getStandardBidderAdServerTargeting().map(function(e) {
                return e.key
            }).concat(v).filter(s.uniques)
        }

        function j(t, n, e, r) {
            return Object.keys(n.adserverTargeting).filter(U()).forEach(function(e) {
                t.length && t.filter(function(t) {
                    return function(e) {
                        return e.adUnitCode === n.adUnitCode && e.adserverTargeting[t]
                    }
                }(e)).forEach(function(t) {
                    return function(e) {
                        g.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(n.adserverTargeting[t]).filter(s.uniques), delete n.adserverTargeting[t]
                    }
                }(e))
            }), t.push(n), t
        }

        function U() {
            var t = C();
            return function(e) {
                return -1 === t.indexOf(e)
            }
        }

        function B(t) {
            return p({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(U()).map(function(e) {
                return p({}, e.substring(0, 20), [t.adserverTargeting[e]])
            }))
        }
    },
    66: function(e, t, n) {
        "use strict";
        var r = n(135)(!0);
        n(51)(String, "String", function(e) {
            this._t = String(e), this._i = 0
        }, function() {
            var e, t = this._t,
                n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n), this._i += e.length, {
                value: e,
                done: !1
            })
        })
    },
    67: function(e, t, r) {
        function i() {}
        var o = r(26),
            a = r(138),
            c = r(68),
            u = r(52)("IE_PROTO"),
            s = "prototype",
            d = function() {
                var e, t = r(55)("iframe"),
                    n = c.length;
                for (t.style.display = "none", r(141).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), d = e.F; n--;) delete d[s][c[n]];
                return d()
            };
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (i[s] = o(e), n = new i, i[s] = null, n[u] = e) : n = d(), void 0 === t ? n : a(n, t)
        }
    },
    68: function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    69: function(e, t) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    },
    7: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "gdprDataHandler", function() {
            return B
        }), t.setS2STestingModule = function(e) {
            w = e
        };
        var h = n(0),
            p = n(61),
            g = n(28),
            u = n(1),
            m = n(5),
            b = n(3),
            r = n(9),
            S = n.n(r),
            i = n(11),
            y = n.n(i),
            v = n(62),
            E = n(48);

        function A(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
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
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
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
        var w, O = n(0),
            I = n(4),
            _ = n(8),
            s = {},
            C = s.bidderRegistry = {},
            d = s.aliasRegistry = {},
            j = {};
        b.b.getConfig("s2sConfig", function(e) {
            j = e.s2sConfig
        });
        var o = {};

        function U(e) {
            var i = e.bidderCode,
                s = e.auctionId,
                d = e.bidderRequestId,
                t = e.adUnits,
                f = e.labels,
                l = e.src;
            return t.reduce(function(e, c) {
                var t = Object(p.b)(Object(p.a)(c, f), c.mediaTypes, c.sizes),
                    n = t.active,
                    u = t.mediaTypes,
                    r = t.filterResults;
                return n ? r && O.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : O.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), n && e.push(c.bids.filter(function(e) {
                    return e.bidder === i
                }).reduce(function(e, t) {
                    var n = c.nativeParams || O.deepAccess(c, "mediaTypes.native");
                    n && (t = T({}, t, {
                        nativeParams: Object(g.g)(n)
                    })), t = T({}, t, Object(h.getDefinedParams)(c, ["mediaType", "renderer"]));
                    var r = Object(p.b)(Object(p.a)(t, f), u),
                        i = r.active,
                        o = r.mediaTypes,
                        a = r.filterResults;
                    return i ? a && O.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after) : O.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), O.isValidMediaTypes(o) ? t = T({}, t, {
                        mediaTypes: o
                    }) : O.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)), i && e.push(T({}, t, {
                        adUnitCode: c.code,
                        transactionId: c.transactionId,
                        sizes: O.deepAccess(o, "banner.sizes") || O.deepAccess(o, "video.playerSize") || [],
                        bidId: t.bid_id || O.getUniqueIdentifierStr(),
                        bidderRequestId: d,
                        auctionId: s,
                        src: l,
                        bidRequestsCount: v.a.getCounter(c.code)
                    })), e
                }, [])), e
            }, []).reduce(h.flatten, []).filter(function(e) {
                return "" !== e
            })
        }
        var B = {
            consentData: null,
            setConsentData: function(e) {
                B.consentData = e
            },
            getConsentData: function() {
                return B.consentData
            }
        };

        function R() {
            return j && j.enabled && j.testing && w
        }

        function a(t, n, e) {
            try {
                var r = C[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (O.logInfo("Invoking ".concat(t, ".").concat(n)), r[n](e))
            } catch (e) {
                O.logWarn("Error calling ".concat(n, " of ").concat(t))
            }
        }
        s.makeBidRequests = function(e, i, o, a, c) {
            var u = [],
                t = Object(h.getBidderCodes)(e);
            b.b.getConfig("bidderSequence") === b.a && (t = Object(h.shuffle)(t));
            var s = Object(E.b)(),
                n = t,
                r = [];
            if (j.enabled) {
                R() && (r = w.getSourceBidderMap(e)[w.CLIENT]);
                var d = j.bidders;
                n = t.filter(function(e) {
                    return !S()(d, e) || S()(r, e)
                });
                var f = function(e) {
                        var t = j.bidders,
                            n = O.deepClone(e);
                        return n.forEach(function(e) {
                            e.bids = e.bids.filter(function(e) {
                                return S()(t, e.bidder) && (!R() || e.finalSource !== w.CLIENT)
                            }).map(function(e) {
                                return e.bid_id = O.getUniqueIdentifierStr(), e
                            })
                        }), n = n.filter(function(e) {
                            return 0 !== e.bids.length
                        })
                    }(e),
                    l = O.generateUUID();
                d.forEach(function(e) {
                    var t = O.getUniqueIdentifierStr(),
                        n = {
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            tid: l,
                            bids: U({
                                bidderCode: e,
                                auctionId: o,
                                bidderRequestId: t,
                                adUnits: O.deepClone(f),
                                labels: c,
                                src: I.S2S.SRC
                            }),
                            auctionStart: i,
                            timeout: j.timeout,
                            src: I.S2S.SRC,
                            refererInfo: s
                        };
                    0 !== n.bids.length && u.push(n)
                }), f.forEach(function(e) {
                    var t = e.bids.filter(function(t) {
                        return y()(u, function(e) {
                            return y()(e.bids, function(e) {
                                return e.bidId === t.bid_id
                            })
                        })
                    });
                    e.bids = t
                }), u.forEach(function(e) {
                    e.adUnitsS2SCopy = f.filter(function(e) {
                        return 0 < e.bids.length
                    })
                })
            }
            var p = function(e) {
                var t = O.deepClone(e);
                return t.forEach(function(e) {
                    e.bids = e.bids.filter(function(e) {
                        return !R() || e.finalSource !== w.SERVER
                    })
                }), t = t.filter(function(e) {
                    return 0 !== e.bids.length
                })
            }(e);
            return n.forEach(function(e) {
                var t = O.getUniqueIdentifierStr(),
                    n = {
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        bids: U({
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            adUnits: O.deepClone(p),
                            labels: c,
                            src: "client"
                        }),
                        auctionStart: i,
                        timeout: a,
                        refererInfo: s
                    },
                    r = C[e];
                r || O.logError("Trying to make a request for bidder that does not exist: ".concat(e)), r && n.bids && 0 !== n.bids.length && u.push(n)
            }), B.getConsentData() && u.forEach(function(e) {
                e.gdprConsent = B.getConsentData()
            }), u
        }, s.callBids = function(e, t, r, i, o, a, c) {
            if (t.length) {
                var n = A(t.reduce(function(e, t) {
                        return e[Number(void 0 !== t.src && t.src === I.S2S.SRC)].push(t), e
                    }, [
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
                        p = s[0].tid,
                        g = s[0].adUnitsS2SCopy;
                    if (l) {
                        var b = {
                            tid: p,
                            ad_units: g
                        };
                        if (b.ad_units.length) {
                            var y = s.map(function(e) {
                                    return e.start = Object(h.timestamp)(), i.bind(e)
                                }),
                                v = b.ad_units.reduce(function(e, t) {
                                    return e.concat((t.bids || []).reduce(function(e, t) {
                                        return e.concat(t.bidder)
                                    }, []))
                                }, []);
                            O.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(f.filter(function(e) {
                                return S()(v, e)
                            }).join(","))), s.forEach(function(e) {
                                _.emit(I.EVENTS.BID_REQUESTED, e)
                            }), l.callBids(b, s, function(e, t) {
                                var n = Object(h.getBidderRequest)(s, t.bidderCode, e);
                                n && r.call(n, e, t)
                            }, function() {
                                return y.forEach(function(e) {
                                    return e()
                                })
                            }, d)
                        }
                    }
                }
                u.forEach(function(e) {
                    e.start = Object(h.timestamp)();
                    var t = C[e.bidderCode];
                    O.logMessage("CALLING BIDDER ======= ".concat(e.bidderCode)), _.emit(I.EVENTS.BID_REQUESTED, e);
                    var n = Object(m.b)(a, o ? {
                        request: o.request.bind(null, e.bidderCode),
                        done: o.done
                    } : void 0);
                    t.callBids(e, r.bind(e), i.bind(e), n, c)
                })
            } else O.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
        }, s.videoAdapters = [], s.registerBidAdapter = function(e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                r = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (C[t] = e, S()(r, "video") && s.videoAdapters.push(t), S()(r, "native") && g.e.push(t)) : O.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : O.logError("bidAdaptor or bidderCode not specified")
        }, s.aliasBidAdapter = function(t, e) {
            if (void 0 === C[e]) {
                var n = C[t];
                if (void 0 === n) {
                    var r = b.b.getConfig("s2sConfig"),
                        i = r && r.bidders;
                    i && S()(i, e) ? d[e] = t : O.logError('bidderCode "' + t + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                } else try {
                    var o, a = function(e) {
                        var t = [];
                        return S()(s.videoAdapters, e) && t.push("video"), S()(g.e, e) && t.push("native"), t
                    }(t);
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
                    O.logError(t + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                }
            } else O.logMessage('alias name "' + e + '" has been already specified.')
        }, s.registerAnalyticsAdapter = function(e) {
            var t = e.adapter,
                n = e.code;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, o[n] = t) : O.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : O.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
        }, s.enableAnalytics = function(e) {
            O.isArray(e) || (e = [e]), O._each(e, function(e) {
                var t = o[e.provider];
                t ? t.enableAnalytics(e) : O.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."))
            })
        }, s.getBidAdapter = function(e) {
            return C[e]
        }, s.callTimedOutBidders = function(t, n, r) {
            n = n.map(function(e) {
                return e.params = O.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, e
            }), n = O.groupBy(n, "bidder"), Object.keys(n).forEach(function(e) {
                a(e, "onTimeout", n[e])
            })
        }, s.callBidWonBidder = function(e, t, n) {
            t.params = O.getUserConfiguredParams(n, t.adUnitCode, t.bidder), a(e, "onBidWon", t)
        }, s.callSetTargetingBidder = function(e, t) {
            a(e, "onSetTargeting", t)
        }, t.default = s
    },
    70: function(e, t, n) {
        var i = n(21);
        e.exports = function(e, t, n) {
            for (var r in t) n && e[r] ? e[r] = t[r] : i(e, r, t[r]);
            return e
        }
    },
    71: function(e, t) {
        e.exports = function(e, t, n, r) {
            if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
            return e
        }
    },
    72: function(e, t, n) {
        var o = n(26);
        e.exports = function(t, e, n, r) {
            try {
                return r ? e(o(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && o(i.call(t)), e
            }
        }
    },
    73: function(e, t, n) {
        var r = n(29),
            i = n(15)("iterator"),
            o = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (r.Array === e || o[i] === e)
        }
    },
    74: function(e, t, n) {
        var r = n(75),
            i = n(15)("iterator"),
            o = n(29);
        e.exports = n(14).getIteratorMethod = function(e) {
            if (null != e) return e[i] || e["@@iterator"] || o[r(e)]
        }
    },
    75: function(e, t, n) {
        var i = n(31),
            o = n(15)("toStringTag"),
            a = "Arguments" == i(function() {
                return arguments
            }());
        e.exports = function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
        }
    },
    76: function(e, t, n) {
        function r(e) {
            c(e, i, {
                value: {
                    i: "O" + ++u,
                    w: {}
                }
            })
        }
        var i = n(46)("meta"),
            o = n(18),
            a = n(27),
            c = n(20).f,
            u = 0,
            s = Object.isExtensible || function() {
                return !0
            },
            d = !n(30)(function() {
                return s(Object.preventExtensions({}))
            }),
            f = e.exports = {
                KEY: i,
                NEED: !1,
                fastKey: function(e, t) {
                    if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!a(e, i)) {
                        if (!s(e)) return "F";
                        if (!t) return "E";
                        r(e)
                    }
                    return e[i].i
                },
                getWeak: function(e, t) {
                    if (!a(e, i)) {
                        if (!s(e)) return !0;
                        if (!t) return !1;
                        r(e)
                    }
                    return e[i].w
                },
                onFreeze: function(e) {
                    return d && f.NEED && s(e) && !a(e, i) && r(e), e
                }
            }
    },
    77: function(e, t, n) {
        var r = n(18);
        e.exports = function(e, t) {
            if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
            return e
        }
    },
    78: function(e, t, n) {
        "use strict";
        t.a = function(t, n) {
            o.adServers = o.adServers || {}, o.adServers[t] = o.adServers[t] || {}, Object.keys(n).forEach(function(e) {
                o.adServers[t][e] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : o.adServers[t][e] = n[e]
            })
        };
        var r = n(37),
            i = n(0),
            o = Object(r.a)()
    },
    8: function(e, t, n) {
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
            d = u._map(o.EVENTS, function(e) {
                return e
            }),
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
            ! function(e, t) {
                u.logMessage("Emitting event for: " + e);
                var n = t[0] || {},
                    r = n[f[e]],
                    i = c[e] || {
                        que: []
                    },
                    o = u._map(i, function(e, t) {
                        return t
                    }),
                    a = [];
                l.push({
                    eventType: e,
                    args: n,
                    id: r
                }), r && u.contains(o, r) && s.apply(a, i[r].que), s.apply(a, i.que), u._each(a, function(e) {
                    if (e) try {
                        e.apply(null, t)
                    } catch (e) {
                        u.logError("Error executing handler:", "events.js", e)
                    }
                })
            }(e, a.call(arguments, 1))
        }, i.off = function(e, n, r) {
            var i = c[e];
            u.isEmpty(i) || u.isEmpty(i.que) && u.isEmpty(i[r]) || r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que)) || (r ? u._each(i[r].que, function(e) {
                var t = i[r].que;
                e === n && t.splice(u.indexOf.call(t, e), 1)
            }) : u._each(i.que, function(e) {
                var t = i.que;
                e === n && t.splice(u.indexOf.call(t, e), 1)
            }), c[e] = i)
        }, i.get = function() {
            return c
        }, i.getEvents = function() {
            var n = [];
            return u._each(l, function(e) {
                var t = r({}, e);
                n.push(t)
            }), n
        }, i)
    },
    81: function(e, t, n) {
        "use strict";
        var r = n(13),
            i = n(43)(5),
            o = "find",
            a = !0;
        o in [] && Array(1)[o](function() {
            a = !1
        }), r(r.P + r.F * a, "Array", {
            find: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(34)(o)
    },
    82: function(e, t, n) {
        e.exports = !n(22) && !n(30)(function() {
            return 7 != Object.defineProperty(n(55)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    83: function(e, t, n) {
        var i = n(18);
        e.exports = function(e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    84: function(e, t, n) {
        var r = n(85);
        e.exports = function(e, t) {
            return new(r(e))(t)
        }
    },
    85: function(e, t, n) {
        var r = n(18),
            i = n(57),
            o = n(15)("species");
        e.exports = function(e) {
            var t;
            return i(e) && ("function" != typeof(t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
        }
    },
    86: function(e, t, n) {
        "use strict";
        var r = n(13),
            i = n(60)(!0);
        r(r.P, "Array", {
            includes: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(34)("includes")
    },
    87: function(e, t, n) {
        var r = n(45),
            i = Math.max,
            o = Math.min;
        e.exports = function(e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
        }
    },
    88: function(e, t) {
        y.SYNC = 1, y.ASYNC = 2, y.QUEUE = 4;
        var p = "fun-hooks",
            n = "function" == typeof Proxy,
            r = Object.freeze({
                useProxy: n,
                ready: 0
            }),
            i = "2,1,0" === [1].reduce(function(e, t, n) {
                return [e, t, n]
            }, 2).toString() ? Array.prototype.reduce : function(e, t) {
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
            };

        function g(e, t) {
            return Array.prototype.slice.call(e, t)
        }
        var b = Object.assign || function(e) {
            return i.call(g(arguments, 1), function(t, n) {
                return n && Object.keys(n).forEach(function(e) {
                    t[e] = n[e]
                }), t
            }, e)
        };

        function y(c) {
            var u, e = {},
                s = [];

            function t(e, t) {
                return "function" == typeof e ? f.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? f.apply(null, arguments) : "object" == typeof e ? function(o, e, a) {
                    var t = !0;
                    void 0 === e && (e = Object.getOwnPropertyNames(o), t = !1);
                    var c = {},
                        n = ["constructor"];
                    for (;
                        (e = e.filter(function(e) {
                            return !("function" != typeof o[e] || -1 !== n.indexOf(e) || e.match(/^_/))
                        })).forEach(function(e) {
                            var t = e.split(":"),
                                n = t[0],
                                r = t[1] || "sync";
                            if (!c[n]) {
                                var i = o[n];
                                c[n] = o[n] = f(r, i, a ? [a, n] : void 0)
                            }
                        }), o = Object.getPrototypeOf(o), t && o;);
                    return c
                }.apply(null, arguments) : void 0
            }

            function d(o) {
                var a = Array.isArray(o) ? o : o.split(".");
                return i.call(a, function(t, n, e) {
                    var r = t[n],
                        i = !1;
                    return r || (e === a.length - 1 ? (u || s.push(function() {
                        i || console.warn(p + ": referenced '" + o + "' but it was never created")
                    }), t[n] = l(function(e) {
                        t[n] = e, i = !0
                    })) : t[n] = {})
                }, e)
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
                        return "object" == typeof n && (e = e.filter(function(t) {
                            return Object.keys(n).every(function(e) {
                                return t[e] === n[e]
                            })
                        })), b(e, {
                            remove: function() {
                                return e.forEach(function(e) {
                                    e.remove()
                                }), this
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
                    return t.push(i), t.sort(function(e, t) {
                        return t.priority - e.priority
                    }), c(o, a), this
                }
            }

            function f(f, e, t) {
                if (e.__funHook) {
                    if (e.__funHook.type !== f) throw p + ": recreated hookable with different type";
                    return e.__funHook.fn
                }
                var r, n, i = t ? d(t) : l(),
                    o = {
                        get: function(e, t) {
                            return i[t] || Reflect.get.apply(Reflect, arguments)
                        }
                    };
                return u || s.push(a), c.useProxy ? n = new Proxy(e, o) : b(n = function() {
                    return o.apply ? o.apply(e, this, g(arguments)) : e.apply(this, arguments)
                }, i), i.__funHook.install(f, n, function(e, t) {
                    var s, d = [];
                    r = e.length || t.length ? (e.forEach(n), s = d.push(void 0) - 1, t.forEach(n), function(n, r, e) {
                        var i, o = 0,
                            a = "async" === f && "function" == typeof e[e.length - 1] && e.pop();

                        function c(e) {
                            "sync" === f ? i = e : a && a.apply(null, arguments)
                        }

                        function u(e) {
                            if (d[o]) {
                                var t = g(arguments);
                                return u.bail = c, t.unshift(u), d[o++].apply(r, t)
                            }
                            "sync" === f ? i = e : a && a.apply(null, arguments)
                        }
                        return d[s] = function() {
                            var e = g(arguments, 1);
                            "async" === f && a && (delete u.bail, e.push(u));
                            var t = n.apply(r, e);
                            "sync" === f && u(t)
                        }, u.apply(null, e), i
                    }) : void 0;

                    function n(e) {
                        d.push(e.hook)
                    }
                    a()
                }), n;

                function a() {
                    !u && ("sync" !== f || c.ready & y.SYNC) && ("async" !== f || c.ready & y.ASYNC) ? "sync" !== f && c.ready & y.QUEUE ? o.apply = function() {
                        var e = arguments;
                        s.push(function() {
                            n.apply(e[1], e[2])
                        })
                    } : o.apply = function() {
                        throw p + ": hooked function not ready"
                    } : o.apply = r
                }
            }
            return (c = b({}, r, c)).ready ? t.ready = function() {
                u = !0,
                    function(e) {
                        for (var t; t = e.shift();) t()
                    }(s)
            } : u = !0, t.get = d, t
        }
        e.exports = y
    },
    89: function(e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i
            }
            return n
        }
    },
    9: function(e, t, n) {
        n(86), e.exports = n(14).Array.includes
    }
});
owpbjsChunk([218], {
    186: function(e, r, n) {
        e.exports = n(187)
    },
    187: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n.d(r, "spec", function() {
            return R
        });
        var s = n(0),
            t = n(1),
            i = n(2);

        function o() {
            return (o = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = arguments[r];
                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                }
                return e
            }).apply(this, arguments)
        }

        function a() {
            var e = d(["dcn=", "&pos=", "&cmd=bid", ""]);
            return a = function() {
                return e
            }, e
        }

        function c() {
            var e = d(["//", "/bidRequest?"]);
            return c = function() {
                return e
            }, e
        }

        function u() {
            var e = d(["//", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", ";", ""]);
            return u = function() {
                return e
            }, e
        }

        function d(e, r) {
            return r = r || e.slice(0), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(r)
                }
            }))
        }
        var l = {
                AOL: "aol",
                ONEMOBILE: "onemobile",
                ONEDISPLAY: "onedisplay"
            },
            p = {
                GET: "display-get"
            },
            m = {
                GET: "mobile-get",
                POST: "mobile-post"
            },
            f = {
                TAG: "iframe",
                TYPE: "iframe"
            },
            b = {
                TAG: "img",
                TYPE: "image"
            },
            v = E(u(), "host", "network", "placement", "pageid", "sizeid", "alias", "misc", "dynamicParams"),
            h = E(c(), "host"),
            g = E(a(), "dcn", "pos", "dynamicParams"),
            O = {
                us: "adserver-us.adtech.advertising.com",
                eu: "adserver-eu.adtech.advertising.com",
                as: "adserver-as.adtech.advertising.com"
            },
            y = 1;

        function E(o) {
            for (var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
            return function() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                var i = t[t.length - 1] || {},
                    a = [o[0]];
                return n.forEach(function(e, r) {
                    var n = s.isInteger(e) ? t[e] : i[e];
                    a.push(n, o[r + 1])
                }), a.join("")
            }
        }

        function P(e) {
            return e === l.AOL || e === l.ONEMOBILE
        }

        function I(e) {
            if (P(e.bidder) && e.params.id && e.params.imp && e.params.imp[0]) {
                var r = e.params.imp[0];
                return r.id && r.tagid && (r.banner && r.banner.w && r.banner.h || r.video && r.video.mimes && r.video.minduration && r.video.maxduration)
            }
        }

        function T(e) {
            return P(e.bidder) && e.params.dcn && e.params.pos
        }

        function S(e) {
            return function(e) {
                return e === l.AOL || e === l.ONEDISPLAY
            }(e.bidder) && e.params.placement && e.params.network
        }
        var R = {
            code: l.AOL,
            aliases: [l.ONEMOBILE, l.ONEDISPLAY],
            supportedMediaTypes: [i.b],
            isBidRequestValid: function(e) {
                return S(e) || function(e) {
                    return T(e) || I(e)
                }(e)
            },
            buildRequests: function(e, r) {
                var n = this,
                    t = r ? r.gdprConsent : null;
                return e.map(function(e) {
                    var r = function(e) {
                        return T(e) ? m.GET : I(e) ? m.POST : S(e) ? p.GET : void 0
                    }(e);
                    if (r) return n.formatBidRequest(r, e, t)
                })
            },
            interpretResponse: function(e, r) {
                var n = e.body;
                if (n) {
                    var t = this._parseBidResponse(n, r);
                    if (t) return t
                } else s.logError("Empty bid response", r.bidderCode, n)
            },
            getUserSyncs: function(e, r) {
                var n = !s.isEmpty(r) && r[0].body;
                return n && n.ext && n.ext.pixels ? this.parsePixelItems(n.ext.pixels) : []
            },
            formatBidRequest: function(e, r, n) {
                var t;
                switch (e) {
                    case p.GET:
                        t = {
                            url: this.buildMarketplaceUrl(r, n),
                            method: "GET",
                            ttl: 60
                        };
                        break;
                    case m.GET:
                        t = {
                            url: this.buildOneMobileGetUrl(r, n),
                            method: "GET",
                            ttl: 3600
                        };
                        break;
                    case m.POST:
                        t = {
                            url: this.buildOneMobileBaseUrl(r),
                            method: "POST",
                            ttl: 3600,
                            data: this.buildOpenRtbRequestData(r, n),
                            options: {
                                contentType: "application/json",
                                customHeaders: {
                                    "x-openrtb-version": "2.2"
                                }
                            }
                        }
                }
                return t.bidderCode = r.bidder, t.bidId = r.bidId, t.userSyncOn = r.params.userSyncOn, t
            },
            buildMarketplaceUrl: function(e, r) {
                var n, t = e.params,
                    i = t.server,
                    a = t.region || "us";
                return O.hasOwnProperty(a) || (s.logWarn("Unknown region '".concat(a, "' for AOL bidder.")), a = "us"), n = i || O[a], t.region = a, v({
                    host: n,
                    network: t.network,
                    placement: parseInt(t.placement),
                    pageid: t.pageId || 0,
                    sizeid: t.sizeId || 0,
                    alias: t.alias || s.getUniqueIdentifierStr(),
                    misc: (new Date).getTime(),
                    dynamicParams: this.formatMarketplaceDynamicParams(t, r)
                })
            },
            buildOneMobileGetUrl: function(e, r) {
                var n = e.params,
                    t = n.dcn,
                    i = n.pos,
                    a = n.ext,
                    o = this.buildOneMobileBaseUrl(e);
                if (t && i) {
                    var s = this.formatOneMobileDynamicParams(a, r);
                    o += g({
                        dcn: t,
                        pos: i,
                        dynamicParams: s
                    })
                }
                return o
            },
            buildOneMobileBaseUrl: function(e) {
                return h({
                    host: e.params.host || "hb.nexage.com"
                })
            },
            formatMarketplaceDynamicParams: function(e, r) {
                var n = 0 < arguments.length && void 0 !== e ? e : {},
                    t = 1 < arguments.length ? r : void 0,
                    i = {};
                n.bidFloor && (i.bidfloor = n.bidFloor), o(i, this.formatKeyValues(n.keyValues)), o(i, this.formatConsentData(t));
                var a = "";
                return s._each(i, function(e, r) {
                    a += "".concat(r, "=").concat(encodeURIComponent(e), ";")
                }), a
            },
            formatOneMobileDynamicParams: function(e, r) {
                var n = 0 < arguments.length && void 0 !== e ? e : {},
                    t = 1 < arguments.length ? r : void 0;
                this.isSecureProtocol() && (n.secure = y), o(n, this.formatConsentData(t));
                var i = "";
                return s._each(n, function(e, r) {
                    i += "&".concat(r, "=").concat(encodeURIComponent(e))
                }), i
            },
            buildOpenRtbRequestData: function(e, r) {
                var n = {
                    id: e.params.id,
                    imp: e.params.imp
                };
                return this.isConsentRequired(r) && (n.regs = {
                    ext: {
                        gdpr: y
                    }
                }, r.consentString && (n.user = {
                    ext: {
                        consent: r.consentString
                    }
                })), n
            },
            isConsentRequired: function(e) {
                return !(!e || !e.gdprApplies)
            },
            formatKeyValues: function(e) {
                var n = {};
                return s._each(e, function(e, r) {
                    n["kv".concat(r)] = e
                }), n
            },
            formatConsentData: function(e) {
                var r = {};
                return this.isConsentRequired(e) && (r.gdpr = y, e.consentString && (r.euconsent = e.consentString)), r
            },
            parsePixelItems: function(e) {
                var t = /\w*(?=\s)/,
                    i = /src=("|')(.*?)\1/,
                    a = [];
                if (e) {
                    var r = e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi);
                    r && r.forEach(function(e) {
                        var r = e.match(t)[0],
                            n = e.match(i)[2];
                        r && r && a.push({
                            type: r === b.TAG ? b.TYPE : f.TYPE,
                            url: n
                        })
                    })
                }
                return a
            },
            _parseBidResponse: function(e, r) {
                var n, t;
                try {
                    n = e.seatbid[0].bid[0]
                } catch (e) {
                    return
                }
                if (n.ext && n.ext.encp) t = n.ext.encp;
                else if (null === (t = n.price) || isNaN(t)) return void s.logError("Invalid price in bid response", l.AOL, bid);
                return {
                    bidderCode: r.bidderCode,
                    requestId: r.bidId,
                    ad: n.adm,
                    cpm: t,
                    width: n.w,
                    height: n.h,
                    creativeId: n.crid || 0,
                    pubapiId: e.id,
                    currency: e.cur || "USD",
                    dealId: n.dealid,
                    netRevenue: !0,
                    ttl: r.ttl
                }
            },
            isOneMobileBidder: P,
            isSecureProtocol: function() {
                return "https:" === document.location.protocol
            }
        };
        Object(t.registerBidder)(R)
    }
}, [186]);
owpbjsChunk([216], {
    194: function(e, r, a) {
        e.exports = a(195)
    },
    195: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", function() {
            return d
        });
        var u = a(12),
            v = a(0),
            b = a(3),
            c = a(1),
            m = a(2),
            n = a(11),
            h = a.n(n),
            t = a(9),
            _ = a.n(t);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function l() {
            return (l = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }).apply(this, arguments)
        }

        function k(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var r = 0, a = new Array(e.length); r < e.length; r++) a[r] = e[r];
                    return a
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        var I = "//ib.adnxs.com/ut/v3/prebid",
            s = ["id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks"],
            x = ["age", "externalUid", "segments", "gender", "dnt", "language"],
            w = ["geo", "device_id"],
            T = ["enabled", "dongle", "member_id", "debug_timeout"],
            o = {
                body: "description",
                body2: "desc2",
                cta: "ctatext",
                image: {
                    serverName: "main_image",
                    requiredParams: {
                        required: !0
                    }
                },
                icon: {
                    serverName: "icon",
                    requiredParams: {
                        required: !0
                    }
                },
                sponsoredBy: "sponsored_by",
                privacyLink: "privacy_link",
                salePrice: "saleprice",
                displayUrl: "displayurl"
            },
            d = {
                code: "appnexus",
                aliases: ["appnexusAst", "brealtime", "emxdigital", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm"],
                supportedMediaTypes: [m.b, m.d, m.c],
                isBidRequestValid: function(e) {
                    return !!(e.params.placementId || e.params.member && e.params.invCode)
                },
                buildRequests: function(e, r) {
                    var a, n = e.map(A),
                        t = h()(e, C);
                    t && (a = {}, Object.keys(t.params.user).filter(function(e) {
                        return _()(x, e)
                    }).forEach(function(e) {
                        return a[e] = t.params.user[e]
                    }));
                    var i, s = h()(e, E);
                    s && s.params && s.params.app && (i = {}, Object.keys(s.params.app).filter(function(e) {
                        return _()(w, e)
                    }).forEach(function(e) {
                        return i[e] = s.params.app[e]
                    }));
                    var o, d = h()(e, R);
                    d && d.params && s.params.app && s.params.app.id && (o = {
                        appid: d.params.app.id
                    });
                    var p = {},
                        u = {},
                        c = v.getCookie("apn_prebid_debug") || null;
                    if (c) try {
                        p = JSON.parse(c)
                    } catch (e) {
                        v.logError("AppNexus Debug Auction Cookie Error:\n\n" + e)
                    } else {
                        var m = h()(e, O);
                        m && m.debug && (p = m.debug)
                    }
                    p && p.enabled && Object.keys(p).filter(function(e) {
                        return _()(T, e)
                    }).forEach(function(e) {
                        u[e] = p[e]
                    });
                    var l = h()(e, S),
                        f = l ? parseInt(l.params.member, 10) : 0,
                        y = {
                            tags: k(n),
                            user: a,
                            sdk: {
                                source: "pbjs",
                                version: "2.22.0"
                            }
                        };
                    if (0 < f && (y.member_id = f), s && (y.device = i), d && (y.app = o), b.b.getConfig("adpod.brandCategoryExclusion") && (y.brand_category_uniqueness = !0), u.enabled && (y.debug = u, v.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(u, null, 4))), r && r.gdprConsent && (y.gdpr_consent = {
                            consent_string: r.gdprConsent.consentString,
                            consent_required: r.gdprConsent.gdprApplies
                        }), r && r.refererInfo) {
                        var g = {
                            rd_ref: encodeURIComponent(r.refererInfo.referer),
                            rd_top: r.refererInfo.reachedTop,
                            rd_ifs: r.refererInfo.numIframes,
                            rd_stk: r.refererInfo.stack.map(function(e) {
                                return encodeURIComponent(e)
                            }).join(",")
                        };
                        y.referrer_detection = g
                    }
                    return h()(e, P) && e.filter(P).forEach(function(r) {
                            var e = function(e, r) {
                                    var a = r.mediaTypes.video,
                                        n = a.durationRangeSec,
                                        t = a.requireExactDuration,
                                        i = function(e) {
                                            var r = e.adPodDurationSec,
                                                a = e.durationRangeSec,
                                                n = e.requireExactDuration,
                                                t = v.getMinValueFromArray(a),
                                                i = Math.floor(r / t);
                                            return n ? Math.max(i, a.length) : i
                                        }(r.mediaTypes.video),
                                        s = v.getMaxValueFromArray(n),
                                        o = e.filter(function(e) {
                                            return e.uuid === r.bidId
                                        }),
                                        d = v.fill.apply(v, k(o).concat([i]));
                                    if (t) {
                                        var p = Math.ceil(i / n.length),
                                            u = v.chunk(d, p);
                                        n.forEach(function(r, e) {
                                            u[e].map(function(e) {
                                                j(e, "minduration", r), j(e, "maxduration", r)
                                            })
                                        })
                                    } else d.map(function(e) {
                                        return j(e, "maxduration", s)
                                    });
                                    return d
                                }(n, r),
                                a = y.tags.filter(function(e) {
                                    return e.uuid !== r.bidId
                                });
                            y.tags = [].concat(k(a), k(e))
                        }),
                        function(e, a) {
                            var n = [];
                            if (15 < e.tags.length) {
                                var t = v.deepClone(e);
                                v.chunk(e.tags, 15).forEach(function(e) {
                                    t.tags = e;
                                    var r = JSON.stringify(t);
                                    n.push({
                                        method: "POST",
                                        url: I,
                                        data: r,
                                        bidderRequest: a
                                    })
                                })
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
                        }(y, r)
                },
                interpretResponse: function(e, r) {
                    var n = this,
                        t = r.bidderRequest;
                    e = e.body;
                    var i = [];
                    if (!e || e.error) {
                        var a = "in response for ".concat(t.bidderCode, " adapter");
                        return e && e.error && (a += ": ".concat(e.error)), v.logError(a), i
                    }
                    if (e.tags && e.tags.forEach(function(e) {
                            var r = function(e) {
                                return e && e.ads && e.ads.length && h()(e.ads, function(e) {
                                    return e.rtb
                                })
                            }(e);
                            if (r && 0 !== r.cpm && _()(n.supportedMediaTypes, r.ad_type)) {
                                var a = function(e, r, a) {
                                    var n = v.getBidRequest(e.uuid, [a]),
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
                                    r.advertiser_id && (t.meta = l({}, t.meta, {
                                        advertiserId: r.advertiser_id
                                    }));
                                    if (r.rtb.video) {
                                        if (l(t, {
                                                width: r.rtb.video.player_width,
                                                height: r.rtb.video.player_height,
                                                vastUrl: r.rtb.video.asset_url,
                                                vastImpUrl: r.notify_url,
                                                ttl: 3600
                                            }), v.deepAccess(n, "mediaTypes.video.context") === m.a) {
                                            var i = Object(c.getIabSubCategory)(n.bidder, r.brand_category_id);
                                            t.meta = l({}, t.meta, {
                                                iabSubCatId: i
                                            }), t.video = {
                                                context: m.a,
                                                durationSeconds: Math.floor(r.rtb.video.duration_ms / 1e3)
                                            }
                                        }
                                        if (r.renderer_url) {
                                            var s = v.deepAccess(a.bids[0], "renderer.options");
                                            l(t, {
                                                adResponse: e,
                                                renderer: function(e, r) {
                                                    var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                                        n = u.a.install({
                                                            id: r.renderer_id,
                                                            url: r.renderer_url,
                                                            config: a,
                                                            loaded: !1,
                                                            adUnitCode: e
                                                        });
                                                    try {
                                                        n.setRender(g)
                                                    } catch (e) {
                                                        v.logWarn("Prebid Error calling setRender on renderer", e)
                                                    }
                                                    return n.setEventHandlers({
                                                        impression: function() {
                                                            return v.logMessage("AppNexus outstream video impression event")
                                                        },
                                                        loaded: function() {
                                                            return v.logMessage("AppNexus outstream video loaded event")
                                                        },
                                                        ended: function() {
                                                            v.logMessage("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none"
                                                        }
                                                    }), n
                                                }(t.adUnitCode, r, s)
                                            }), t.adResponse.ad = t.adResponse.ads[0], t.adResponse.ad.video = t.adResponse.ad.rtb.video
                                        }
                                    } else if (r.rtb[m.c]) {
                                        var o = r.rtb[m.c];
                                        t[m.c] = {
                                            title: o.title,
                                            body: o.desc,
                                            body2: o.desc2,
                                            cta: o.ctatext,
                                            rating: o.rating,
                                            sponsoredBy: o.sponsored,
                                            privacyLink: o.privacy_link,
                                            address: o.address,
                                            downloads: o.downloads,
                                            likes: o.likes,
                                            phone: o.phone,
                                            price: o.price,
                                            salePrice: o.saleprice,
                                            clickUrl: o.link.url,
                                            displayUrl: o.displayurl,
                                            clickTrackers: o.link.click_trackers,
                                            impressionTrackers: o.impression_trackers,
                                            javascriptTrackers: o.javascript_trackers
                                        }, o.main_img && (t.native.image = {
                                            url: o.main_img.url,
                                            height: o.main_img.height,
                                            width: o.main_img.width
                                        }), o.icon && (t.native.icon = {
                                            url: o.icon.url,
                                            height: o.icon.height,
                                            width: o.icon.width
                                        })
                                    } else {
                                        l(t, {
                                            width: r.rtb.banner.width,
                                            height: r.rtb.banner.height,
                                            ad: r.rtb.banner.content
                                        });
                                        try {
                                            var d = r.rtb.trackers[0].impression_urls[0],
                                                p = v.createTrackPixelHtml(d);
                                            t.ad += p
                                        } catch (e) {
                                            v.logError("Error appending tracking pixel", e)
                                        }
                                    }
                                    return t
                                }(e, r, t);
                                a.mediaType = function(e) {
                                    var r = e.ad_type;
                                    return r === m.d ? m.d : r === m.c ? m.c : m.b
                                }(r), i.push(a)
                            }
                        }), e.debug && e.debug.debug_info) {
                        var s = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
                        s = s.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), v.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), v.logMessage(s)
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
                    return a = v.convertTypes({
                        member: "string",
                        invCode: "string",
                        placementId: "number",
                        keywords: v.transformBidderParamKeywords
                    }, a), e && (a.use_pmt_rule = "boolean" == typeof a.usePaymentRule && a.usePaymentRule, a.usePaymentRule && delete a.usePaymentRule, p(a.keywords) && a.keywords.forEach(f), Object.keys(a).forEach(function(e) {
                        var r = v.convertCamelToUnderscore(e);
                        r !== e && (a[r] = a[e], delete a[e])
                    })), a
                }
            };

        function p(e) {
            return !!(v.isArray(e) && 0 < e.length)
        }

        function f(e) {
            p(e.value) && "" === e.value[0] && delete e.value
        }

        function A(r) {
            var a = {};
            if (a.sizes = y(r.sizes), a.primary_size = a.sizes[0], a.ad_types = [], a.uuid = r.bidId, r.params.placementId ? a.id = parseInt(r.params.placementId, 10) : a.code = r.params.invCode, a.allow_smaller_sizes = r.params.allowSmallerSizes || !1, a.use_pmt_rule = r.params.usePaymentRule || !1, a.prebid = !0, a.disable_psa = !0, r.params.reserve && (a.reserve = r.params.reserve), r.params.position && (a.position = {
                    above: 1,
                    below: 2
                }[r.params.position] || 0), r.params.trafficSourceCode && (a.traffic_source_code = r.params.trafficSourceCode), r.params.privateSizes && (a.private_sizes = y(r.params.privateSizes)), r.params.supplyType && (a.supply_type = r.params.supplyType), r.params.pubClick && (a.pubclick = r.params.pubClick), r.params.extInvCode && (a.ext_inv_code = r.params.extInvCode), r.params.externalImpId && (a.external_imp_id = r.params.externalImpId), !v.isEmpty(r.params.keywords)) {
                var e = v.transformBidderParamKeywords(r.params.keywords);
                0 < e.length && e.forEach(f), a.keywords = e
            }
            if ((r.mediaType === m.c || v.deepAccess(r, "mediaTypes.".concat(m.c))) && (a.ad_types.push(m.c), 0 === a.sizes.length && (a.sizes = y([1, 1])), r.nativeParams)) {
                var n = function(t) {
                    var i = {};
                    return Object.keys(t).forEach(function(e) {
                        var r = o[e] && o[e].serverName || o[e] || e,
                            a = o[e] && o[e].requiredParams;
                        if (i[r] = l({}, a, t[e]), !(r !== o.image.serverName && r !== o.icon.serverName) && i[r].sizes) {
                            var n = i[r].sizes;
                            (v.isArrayOfNums(n) || v.isArray(n) && 0 < n.length && n.every(function(e) {
                                return v.isArrayOfNums(e)
                            })) && (i[r].sizes = y(i[r].sizes))
                        }
                        r === o.privacyLink && (i.privacy_supported = !0)
                    }), i
                }(r.nativeParams);
                a[m.c] = {
                    layouts: [n]
                }
            }
            var t = v.deepAccess(r, "mediaTypes.".concat(m.d)),
                i = v.deepAccess(r, "mediaTypes.video.context");
            return r.mediaType !== m.d && !t || a.ad_types.push(m.d), (r.mediaType === m.d || t && "outstream" !== i) && (a.require_asset_url = !0), r.params.video && (a.video = {}, Object.keys(r.params.video).filter(function(e) {
                return _()(s, e)
            }).forEach(function(e) {
                return a.video[e] = r.params.video[e]
            })), r.renderer && (a.video = l({}, a.video, {
                custom_renderer_present: !0
            })), (v.isEmpty(r.mediaType) && v.isEmpty(r.mediaTypes) || r.mediaType === m.b || r.mediaTypes && r.mediaTypes[m.b]) && a.ad_types.push(m.b), a
        }

        function y(e) {
            var r = [],
                a = {};
            if (v.isArray(e) && 2 === e.length && !v.isArray(e[0])) a.width = parseInt(e[0], 10), a.height = parseInt(e[1], 10), r.push(a);
            else if ("object" === i(e))
                for (var n = 0; n < e.length; n++) {
                    var t = e[n];
                    (a = {}).width = parseInt(t[0], 10), a.height = parseInt(t[1], 10), r.push(a)
                }
            return r
        }

        function C(e) {
            return !!e.params.user
        }

        function S(e) {
            return !!parseInt(e.params.member, 10)
        }

        function E(e) {
            if (e.params) return !!e.params.app
        }

        function R(e) {
            return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
        }

        function O(e) {
            return !!e.debug
        }

        function P(e) {
            return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === m.a
        }

        function j(e, r, a) {
            v.isEmpty(e.video) && (e.video = {}), e.video[r] = a
        }

        function g(e) {
            e.renderer.push(function() {
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
            })
        }
        Object(c.registerBidder)(d)
    }
}, [194]);
owpbjsChunk([213], {
    200: function(t, n, e) {
        t.exports = e(201)
    },
    201: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), e.d(n, "spec", function() {
            return s
        });
        var r = e(1),
            v = e(10),
            y = e(0),
            o = e(35),
            b = e.n(o),
            a = e(9),
            i = e.n(a);

        function h(t, n) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, n) {
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
            }(t, n) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function w(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                    return e
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function c(t) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function g(t) {
            return t.split("x").map(Number)
        }

        function A(t, n) {
            return "300x250" === n ? [n].concat(w(t)) : [].concat(w(t), [n])
        }

        function j(t) {
            return "video" === t
        }

        function N() {
            return encodeURIComponent(Object(y.getTopWindowUrl)())
        }
        var x = function(t) {
                return Array.isArray(t) && 2 === t.length ? "".concat(t[0], "x").concat(t[1]) : t
            },
            S = function(t) {
                return i()(["300x250", "320x50"], t)
            },
            I = function(t) {
                return i()(["video", "native"], t)
            },
            T = function(t) {
                return "fullwidth" === t
            },
            s = {
                code: "audienceNetwork",
                supportedMediaTypes: ["banner", "video"],
                isBidRequestValid: function(t) {
                    return "object" === c(t.params) && "string" == typeof t.params.placementId && 0 < t.params.placementId.length && Array.isArray(t.sizes) && 0 < t.sizes.length && (!T(t.params.format) || t.sizes.map(x).some(function(t) {
                        return "300x250" === t
                    })) && (I(t.params.format) || t.sizes.map(x).some(S))
                },
                buildRequests: function(t) {
                    var a = [],
                        i = [],
                        c = [],
                        s = [],
                        d = [],
                        u = [];
                    t.forEach(function(o) {
                        return o.sizes.map(x).filter(function(t) {
                            return function(t, n) {
                                return T(n) && "300x250" === x(t) || I(n) || S(x(t))
                            }(t, o.params.format)
                        }).reduce(A, []).slice(0, 1).forEach(function(t) {
                            var n = h(function(t, n) {
                                    return T(n) ? ["300x250", null] : [t, n]
                                }(t, o.params.format), 2),
                                e = n[0],
                                r = n[1];
                            a.push(o.params.placementId), i.push(r || e), c.push(e), s.push(function(t) {
                                return j(t) ? "" : "6.0.web"
                            }(r)), d.push(o.params.platform), u.push(o.bidId)
                        })
                    });
                    var n = Boolean(window && window.location && "string" == typeof window.location.search && -1 !== window.location.search.indexOf("anhb_testmode")).toString(),
                        e = N(),
                        r = function(t) {
                            return [].concat(w(t.filter(Boolean)), ["2078522619030089"])[0]
                        }(d),
                        o = Object(y.generateUUID)(),
                        l = {
                            placementids: a,
                            adformats: i,
                            testmode: n,
                            pageurl: e,
                            sdk: s,
                            adapterver: "1.3.0",
                            platform: r,
                            platver: "2.22.0",
                            cb: o
                        },
                        p = b()(i, j);
                    if (-1 !== p) {
                        var f = h(g(c[p]), 2);
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
                    return Object.keys(o).map(function(t) {
                        return o[t]
                    }).reduce(function(t, n) {
                        return t.concat(n)
                    }, []).map(function(t, n) {
                        var e = t.bid_id,
                            r = t.placement_id,
                            o = t.bid_price_cents,
                            a = p[n],
                            i = h(g(x(m[n])), 2),
                            c = i[0],
                            s = i[1],
                            d = function(t, n, e) {
                                var r = "native" === n ? '<div class="thirdPartyRoot"><a class="fbAdLink"><div class="fbAdMedia thirdPartyMediaClass"></div><div class="fbAdSubtitle thirdPartySubtitleClass"></div><div class="fbDefaultNativeAdWrapper"><div class="fbAdCallToAction thirdPartyCallToActionClass"></div><div class="fbAdTitle thirdPartyTitleClass"></div></div></a></div>' : "";
                                return "<html>\n  <head>".concat("native" === n ? '<script>window.onload=function(){if(parent){var o=document.getElementsByTagName("head")[0];var s=parent.document.getElementsByTagName("style");for(var i=0;i<s.length;i++)o.appendChild(s[i].cloneNode(true));}}<\/script>' : "", '</head>\n  <body>\n    <div style="display:none;position:relative;">\n      <script type="text/javascript" src="https://connect.facebook.net/en_US/fbadnw60-tag.js" async><\/script>\n      <script type="text/javascript">\n        window.ADNW = window.ADNW || {};\n        window.ADNW.v60 = window.ADNW.v60 || {};\n        window.ADNW.v60.slots = window.ADNW.v60.slots || [];\n        window.ADNW.v60.slots.push({\n          rootElement: document.currentScript.parentElement,\n          placementid: \'').concat(t, "',\n          format: '").concat(n, "',\n          bidid: '").concat(e, "',\n          testmode: false,\n          onAdLoaded: function(rootElement) {\n            console.log('Audience Network [").concat(t, "] ad loaded');\n            rootElement.style.display = 'block';\n          },\n          onAdError: function(errorCode, errorMessage) {\n            console.log('Audience Network [").concat(t, "] error (' + errorCode + ') ' + errorMessage);\n          }\n        });\n      <\/script>\n      ").concat(r, "\n    </div>\n  </body>\n</html>")
                            }(r, a, e),
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
                        if (j(a)) {
                            var l = N();
                            u.mediaType = "video", u.vastUrl = "https://an.facebook.com/v1/instream/vast.xml?placementid=".concat(r, "&pageurl=").concat(l, "&playerwidth=").concat(c, "&playerheight=").concat(s, "&bidid=").concat(e), u.ttl = 3600
                        }
                        return u
                    })
                },
                transformBidParams: function(t, n) {
                    return Object(y.convertTypes)({
                        placementId: "string"
                    }, t)
                }
            };
        Object(r.registerBidder)(s)
    }
}, [200]);
owpbjsChunk([191], {
    249: function(e, r, n) {
        e.exports = n(250)
    },
    250: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n.d(r, "spec", function() {
            return d
        });
        var c = n(0),
            t = n(1);

        function i() {
            return (i = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = arguments[r];
                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                }
                return e
            }).apply(this, arguments)
        }
        var s = 0,
            a = "consumable",
            d = {
                code: "consumable",
                isBidRequestValid: function(e) {
                    return !!(e.params.networkId && e.params.siteId && e.params.unitId && e.params.unitName)
                },
                buildRequests: function(e, r) {
                    var n = {
                        method: "POST",
                        url: "",
                        data: "",
                        bidRequest: []
                    };
                    if (e.length < 1) return n;
                    s = e[0].params.siteId, a = e[0].bidder;
                    var t = i({
                        placements: [],
                        time: Date.now(),
                        url: c.getTopWindowUrl(),
                        referrer: document.referrer,
                        source: [{
                            name: "prebidjs",
                            version: "2.22.0"
                        }]
                    }, e[0].params);
                    return r && r.gdprConsent && (t.gdpr = {
                        consent: r.gdprConsent.consentString,
                        applies: "boolean" != typeof r.gdprConsent.gdprApplies || r.gdprConsent.gdprApplies
                    }), e.map(function(e) {
                        var r = i({
                            divName: e.bidId,
                            adTypes: e.adTypes || function(e) {
                                var n = [];
                                return e.forEach(function(e) {
                                    var r = o.indexOf(e[0] + "x" + e[1]);
                                    0 <= r && n.push(r)
                                }), n
                            }(e.sizes)
                        }, e.params);
                        r.networkId && r.siteId && r.unitId && r.unitName && t.placements.push(r)
                    }), n.data = JSON.stringify(t), n.bidRequest = e, n.url = "https://e.serverbid.com/api/v2", n
                },
                interpretResponse: function(e, r) {
                    var n, t, i, s, a, d = [];
                    t = r.bidRequest, e = (e || {}).body;
                    for (var o = 0; o < t.length; o++)
                        if (n = {}, i = (s = t[o]).bidId, e) {
                            var u = e.decisions && e.decisions[i],
                                p = u && u.pricing && u.pricing.clearPrice;
                            u && p && (n.requestId = i, n.cpm = p, n.width = u.width, n.height = u.height, n.unitId = s.params.unitId, n.unitName = s.params.unitName, n.ad = (a = u, n.unitId, n.unitName, void 0, a.contents && a.contents[0] && a.contents[0].body + c.createTrackPixelHtml(a.impressionUrl)), n.currency = "USD", n.creativeId = u.adId, n.ttl = 30, n.netRevenue = !0, n.referrer = c.getTopWindowUrl(), d.push(n))
                        }
                    return d
                },
                getUserSyncs: function(e, r) {
                    return e.iframeEnabled ? [{
                        type: "iframe",
                        url: "//sync.serverbid.com/ss/" + s + ".html"
                    }] : e.pixelEnabled && 0 < r.length ? r[0].body.pixels : void c.logWarn(a + ": Please enable iframe based user syncing.")
                }
            },
            o = [null, "120x90", "120x90", "468x60", "728x90", "300x250", "160x600", "120x600", "300x100", "180x150", "336x280", "240x400", "234x60", "88x31", "120x60", "120x240", "125x125", "220x250", "250x250", "250x90", "0x0", "200x90", "300x50", "320x50", "320x480", "185x185", "620x45", "300x125", "800x250"];
        o[77] = "970x90", o[123] = "970x250", o[43] = "300x600", o[286] = "970x66", o[3230] = "970x280", o[429] = "486x60", o[374] = "700x500", o[934] = "300x1050", o[1578] = "320x100", o[331] = "320x250", o[3301] = "320x267", o[2730] = "728x250", Object(t.registerBidder)(d)
    }
}, [249]);
owpbjsChunk([181], {
    274: function(e, t, r) {
        e.exports = r(275)
    },
    275: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r.d(t, "spec", function() {
            return s
        }), t.matchRequest = o, t.checkDeepArray = a, t.defaultSize = c;
        var u = r(0),
            i = r(1),
            d = r(3);

        function n(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
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
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var s = {
            code: "districtmDMX",
            supportedFormat: ["banner"],
            isBidRequestValid: function(e) {
                return !(!e.params.dmxid || !e.params.memberid)
            },
            interpretResponse: function(e, d) {
                return (e = e.body || {}).seatbid && u.isArray(e.seatbid) ? e.seatbid.reduce(function(e, t) {
                    var r = t.bid.reduce(function(e, t) {
                        if (e.price < t.price) {
                            var r = c(o(t.impid, d)),
                                i = r.width,
                                n = r.height;
                            return t.cpm = t.price, t.bidId = t.impid, t.requestId = t.impid, t.width = t.w || i, t.height = t.h || n, t.ad = t.adm, t.netRevenue = !0, t.creativeId = t.crid, t.currency = "USD", t.ttl = 60, t
                        }
                        return e.cpm = e.price, e
                    }, {
                        price: 0
                    });
                    return r.adm && e.push(r), e
                }, []).filter(function(e) {
                    return !!e.bidId
                }) : []
            },
            buildRequests: function(e, t) {
                var r = d.b.getConfig("bidderTimeout"),
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
                var n = e.map(function(e) {
                    var t = {};
                    return t.id = e.bidId, t.tagid = String(e.params.dmxid), t.secure = "https:" === window.location.protocol ? 1 : 0, t.banner = {
                        topframe: 1,
                        w: e.sizes[0][0] || 0,
                        h: e.sizes[0][1] || 0,
                        format: e.sizes.map(function(e) {
                            return {
                                w: e[0],
                                h: e[1]
                            }
                        }).filter(function(e) {
                            return "number" == typeof e.w && "number" == typeof e.h
                        })
                    }, t
                });
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
            return n(e.bidderRequest.bids.filter(function(e) {
                return e.bidId === t
            }), 1)[0]
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
}, [274]);
owpbjsChunk([177], {
    282: function(e, r, t) {
        e.exports = t(283)
    },
    283: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "emxAdapter", function() {
            return g
        }), t.d(r, "spec", function() {
            return c
        });
        var l = t(0),
            i = t(1),
            o = t(2),
            n = t(12),
            a = t(9),
            d = t.n(a);

        function m() {
            return (m = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }).apply(this, arguments)
        }
        var s = "emx_digital",
            u = "//js.brealtime.com/outstream/1.30.0/bundle.js",
            g = {
                validateSizes: function(e) {
                    return l.isArray(e) && void 0 !== e[0] ? e.every(function(e) {
                        return l.isArray(e) && 2 === e.length
                    }) : (l.logWarn(s + ": Sizes should be an array"), !1)
                },
                checkVideoContext: function(e) {
                    return e && e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context && ("instream" === e.mediaTypes.video.context || "outstream" === e.mediaTypes.video.context)
                },
                buildBanner: function(e) {
                    var r = [];
                    return r = e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes ? e.mediaTypes.banner.sizes : e.sizes, g.validateSizes(r) || (l.logWarn(s + ": could not detect mediaType banner sizes. Assigning to bid sizes instead"), r = e.sizes), {
                        format: r.map(function(e) {
                            return {
                                w: e[0],
                                h: e[1]
                            }
                        }),
                        w: r[0][0],
                        h: r[0][1]
                    }
                },
                formatVideoResponse: function(e, r) {
                    return e.vastXml = r.adm, r.renderer || r.mediaTypes && r.mediaTypes.video && r.mediaTypes.video.context && "outstream" !== r.mediaTypes.video.context || (e.renderer = g.createRenderer(e, {
                        id: r.bidId,
                        url: u
                    })), e
                },
                isMobile: function() {
                    return /(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)
                },
                isConnectedTV: function() {
                    return /(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent)
                },
                getDevice: function() {
                    return {
                        ua: navigator.userAgent,
                        js: 1,
                        dnt: "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack || "1" === navigator.msDoNotTrack ? 1 : 0,
                        h: screen.height,
                        w: screen.width,
                        devicetype: g.isMobile() ? 1 : g.isConnectedTV() ? 3 : 2,
                        language: navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
                    }
                },
                cleanProtocols: function(e) {
                    return e.protocols && d()(e.protocols, 7) && (l.logWarn(s + ": VAST 4.0 is currently not supported. This protocol has been filtered out of the request."), e.protocols = e.protocols.filter(function(e) {
                        return 7 !== e
                    })), e
                },
                outstreamRender: function(r) {
                    r.renderer.push(function() {
                        var e = r && r.params && r.params[0] && r.params[0].video ? r.params[0].video : {};
                        window.emxVideoQueue = window.emxVideoQueue || [], window.queueEmxVideo({
                            id: r.adUnitCode,
                            adsResponses: r.vastXml,
                            options: e
                        }), window.emxVideoReady && window.videojs && window.emxVideoReady()
                    })
                },
                createRenderer: function(e, r) {
                    var t = n.a.install({
                        id: r.id,
                        url: u,
                        loaded: !1
                    });
                    try {
                        t.setRender(g.outstreamRender)
                    } catch (e) {
                        l.logWarn("Prebid Error calling setRender on renderer", e)
                    }
                    return t
                },
                buildVideo: function(e) {
                    var r = m(e.mediaTypes.video, e.params.video);
                    return g.cleanProtocols(r)
                },
                parseResponse: function(e) {
                    try {
                        return decodeURIComponent(e)
                    } catch (e) {
                        l.logError("emx_digitalBidAdapter", "error", e)
                    }
                },
                getReferrer: function() {
                    try {
                        return window.top.document.referrer
                    } catch (e) {
                        return document.referrer
                    }
                },
                getGdpr: function(e, r) {
                    return e.gdprConsent && (r.regs = {
                        ext: {
                            gdpr: !0 === e.gdprConsent.gdprApplies ? 1 : 0
                        }
                    }), e.gdprConsent && e.gdprConsent.gdprApplies && (r.user = {
                        ext: {
                            consent: e.gdprConsent.consentString
                        }
                    }), r
                }
            },
            c = {
                code: s,
                supportedMediaTypes: [o.b, o.d],
                isBidRequestValid: function(e) {
                    if (!e || !e.params) return l.logWarn(s + ": Missing bid or bid params."), !1;
                    if (e.bidder !== s) return l.logWarn(s + ': Must use "emx_digital" as bidder code.'), !1;
                    if (!e.params.tagid || !l.isStr(e.params.tagid)) return l.logWarn(s + ": Missing tagid param or tagid present and not type String."), !1;
                    var r;
                    if (e.mediaTypes && e.mediaTypes.banner) {
                        if (r = e.mediaTypes.banner.sizes ? e.mediaTypes.banner.sizes : e.sizes, !g.validateSizes(r)) return l.logWarn(s + ": Missing sizes in bid"), !1
                    } else if (e.mediaTypes && e.mediaTypes.video) {
                        if (!g.checkVideoContext(e)) return l.logWarn(s + ": Missing video context: instream or outstream"), !1;
                        if (!e.mediaTypes.video.playerSize) return l.logWarn(s + ": Missing video playerSize"), !1
                    }
                    return !0
                },
                buildRequests: function(e, r) {
                    var o = [],
                        t = r.timeout || "",
                        i = Date.now(),
                        n = location.protocol + "//hb.emxdgt.com?t=" + t + "&ts=" + i + "&src=pbjs",
                        a = -1 < location.protocol.indexOf("https") ? 1 : 0,
                        d = l.getTopWindowLocation().hostname,
                        s = r.refererInfo.referer,
                        u = g.getDevice(),
                        c = g.getReferrer();
                    l._each(e, function(e) {
                        var r = l.getBidIdParameter("tagid", e.params),
                            t = parseFloat(l.getBidIdParameter("bidfloor", e.params)) || 0,
                            i = !!e.mediaTypes.video,
                            n = m({
                                id: e.bidId,
                                tid: e.transactionId,
                                tagid: r,
                                secure: a
                            }, i ? {
                                video: g.buildVideo(e)
                            } : {
                                banner: g.buildBanner(e)
                            }, 0 < t ? {
                                bidfloor: t,
                                bidfloorcur: "USD"
                            } : {});
                        o.push(n)
                    });
                    var p = {
                        id: r.auctionId,
                        imp: o,
                        device: u,
                        site: {
                            domain: d,
                            page: s,
                            ref: c
                        },
                        cur: "USD",
                        version: "1.40.2"
                    };
                    return p = g.getGdpr(r, m({}, p)), {
                        method: "POST",
                        url: n,
                        data: JSON.stringify(p),
                        options: {
                            withCredentials: !0
                        }
                    }
                },
                interpretResponse: function(e) {
                    var n = [],
                        r = e.body || {};
                    return r.seatbid && 0 < r.seatbid.length && r.seatbid[0].bid && r.seatbid.forEach(function(e) {
                        e = e.bid[0];
                        var r = !1,
                            t = g.parseResponse(e.adm) || "",
                            i = {
                                requestId: e.id,
                                cpm: e.price,
                                width: e.w,
                                height: e.h,
                                creativeId: e.crid || e.id,
                                dealId: e.dealid || null,
                                currency: "USD",
                                netRevenue: !0,
                                ttl: e.ttl,
                                ad: t
                            };
                        e.adm && -1 < e.adm.indexOf("<?xml version=") && (r = !0, i = g.formatVideoResponse(i, m({}, e))), i.mediaType = r ? o.d : o.b, n.push(i)
                    }), n
                },
                getUserSyncs: function(e) {
                    var r = [];
                    return e.iframeEnabled && r.push({
                        type: "iframe",
                        url: "//biddr.brealtime.com/check.html"
                    }), r
                }
            };
        Object(i.registerBidder)(c)
    }
}, [282]);
owpbjsChunk([27], {
    17: function(a, b) {
        var c;
        c = function() {
            return this
        }();
        try {
            c = c || Function("return this")() || eval("this")
        } catch (t) {
            "object" == typeof window && (c = window)
        }
        a.exports = c
    },
    320: function(t, e, n) {
        t.exports = n(321)
    },
    321: function(t, r, i) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            function(d) {
                i.d(r, "spec", function() {
                    return n
                });
                var w = i(0),
                    s = i(3),
                    t = i(9),
                    b = i.n(t),
                    e = i(1);

                function y(t, e) {
                    return function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done) && (n.push(u.value), !e || n.length !== e); r = !0);
                        } catch (t) {
                            i = !0, o = t
                        } finally {
                            try {
                                r || null == a.return || a.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }

                function I() {
                    return (I = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                        }
                        return t
                    }).apply(this, arguments)
                }
                var p = {
                        member: "YcXr87z2lpbB"
                    },
                    l = {},
                    S = null;
                var n = {
                    code: "gumgum",
                    aliases: ["gg"],
                    isBidRequestValid: function(t) {
                        var e = t.params,
                            n = t.adUnitCode;
                        switch (!0) {
                            case !!e.inScreen:
                            case !!e.inSlot:
                            case !!e.ICV:
                                break;
                            default:
                                return w.logWarn("[GumGum] No product selected for the placement ".concat(n, ", please check your implementation.")), !1
                        }
                        return !(e.bidfloor && ("number" != typeof e.bidfloor || !isFinite(e.bidfloor))) || (w.logWarn("[GumGum] bidfloor must be a Number"), !1)
                    },
                    buildRequests: function(t, e) {
                        var a = [],
                            c = I({
                                consentString: null,
                                gdprApplies: !0
                            }, e && e.gdprConsent);
                        return w._each(t, function(t) {
                            var e = s.b.getConfig("bidderTimeout"),
                                n = t.bidId,
                                r = t.params,
                                i = void 0 === r ? {} : r,
                                o = t.transactionId,
                                u = {};
                            S && (u.pv = S), i.bidfloor && (u.fp = i.bidfloor), i.inScreen && (u.t = i.inScreen, u.pi = 2), i.inSlot && (u.si = parseInt(i.inSlot, 10), u.pi = 3), i.ICV && (u.ni = parseInt(i.ICV, 10), u.pi = 5), u.gdprApplies = c.gdprApplies, c.gdprApplies && (u.gdprConsent = c.consentString), a.push({
                                id: n,
                                tmax: e,
                                tId: o,
                                pi: u.pi,
                                selector: i.selector,
                                sizes: t.sizes,
                                url: "https://g2.gumgum.com/hbid/imp",
                                method: "GET",
                                data: I(u, function() {
                                    var t, e, n, r, i, o, u, a;
                                    if (l.vw) return l;
                                    try {
                                        e = (t = d.top).screen, n = w.getTopWindowUrl()
                                    } catch (t) {
                                        return w.logError(t), l
                                    }
                                    return l = {
                                        vw: t.innerWidth,
                                        vh: t.innerHeight,
                                        sw: e.width,
                                        sh: e.height,
                                        pu: n,
                                        ce: w.cookiesAreEnabled(),
                                        dpr: t.devicePixelRatio || 1,
                                        jcsi: JSON.stringify({
                                            t: 0,
                                            rq: 8
                                        }),
                                        ogu: (o = (document && document.getElementsByTagName("head")[0]).querySelector("meta[property='og:url']"), o ? o.content : null)
                                    }, u = window.navigator && (window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection), (i = (a = u && (u.downlink || u.bandwidth)) ? Math.round(1024 * a) : null) && (l.ns = i), (r = (n.match(/#ggad=(\w+)$/) || [0, 0])[1]) && (l[isNaN(r) ? "eAdBuyId" : "adBuyId"] = r), l
                                }(), function() {
                                    var t, e = (t = window.DigiTrust && window.DigiTrust.getUser ? window.DigiTrust.getUser(p) : {}) && t.success && t.identity || "";
                                    return !e || e.privacy && e.privacy.optout ? {} : {
                                        dt: e.id
                                    }
                                }(), function(t) {
                                    var e = {};
                                    return t.userId && t.userId.tdid && (e.tdid = t.userId.tdid), e
                                }(t))
                            })
                        }), a
                    },
                    interpretResponse: function(t, e) {
                        var n = [],
                            r = t.body,
                            i = I({
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
                            u = o.price,
                            a = o.id,
                            c = o.markup,
                            d = i.cw,
                            s = i.pag.pvid,
                            p = e.data || {},
                            l = p.pi,
                            f = 3 === l && 9 === p.si,
                            g = w.parseSizesInput(e.sizes),
                            m = y(g[0].split("x"), 2),
                            h = m[0],
                            v = m[1];
                        return 2 !== l && 5 !== l || !b()(g, "1x1") || (v = h = "1"), S = s, a && n.push({
                            ad: d ? function(t, e) {
                                return t.replace("AD_JSON", window.btoa(JSON.stringify(e)))
                            }(d, I({}, r, {
                                bidRequest: e
                            })) : c,
                            cpm: f ? .1 : u,
                            creativeId: a,
                            currency: "USD",
                            height: v,
                            netRevenue: !0,
                            requestId: e.id,
                            ttl: 60,
                            width: h
                        }), n
                    },
                    getUserSyncs: function(t, e) {
                        return e.map(function(t) {
                            return t.body && t.body.pxs && t.body.pxs.scr || []
                        }).reduce(function(t, e) {
                            return t.concat(e)
                        }, []).map(function(t) {
                            return {
                                type: "f" === t.t ? "iframe" : "image",
                                url: t.u
                            }
                        })
                    }
                };
                Object(e.registerBidder)(n)
            }.call(r, i(17))
    }
}, [320]);
owpbjsChunk([149], {
    346: function(e, r, t) {
        e.exports = t(347)
    },
    347: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", function() {
            return b
        });
        var v = t(0),
            n = t(2),
            I = t(3),
            a = t(348),
            i = t.n(a),
            o = t(350),
            s = t.n(o),
            d = t(1);

        function P(e) {
            return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var p = [n.b],
            u = 100,
            c = 35,
            m = !0,
            y = {
                JPY: 1
            };

        function f(e) {
            return i()(e) && 2 === e.length && s()(e[0]) && s()(e[1])
        }
        var b = {
            code: "ix",
            aliases: ["indexExchange"],
            supportedMediaTypes: p,
            isBidRequestValid: function(e) {
                if (!f(e.params.size)) return !1;
                if (! function(e, r) {
                        if (f(e)) return e[0] === r[0] && e[1] === r[1];
                        for (var t = 0; t < e.length; t++)
                            if (e[t][0] === r[0] && e[t][1] === r[1]) return !0;
                        return !1
                    }(e.sizes, e.params.size)) return !1;
                if (e.hasOwnProperty("mediaType") && "banner" !== e.mediaType) return !1;
                if (e.hasOwnProperty("mediaTypes") && !v.deepAccess(e, "mediaTypes.banner.sizes")) return !1;
                if ("string" != typeof e.params.siteId && "number" != typeof e.params.siteId) return !1;
                var r = e.params.hasOwnProperty("bidFloor"),
                    t = e.params.hasOwnProperty("bidFloorCur");
                return !r && !t || r && t && function(e, r) {
                    return Boolean("number" == typeof e && "string" == typeof r && r.match(/^[A-Z]{3}$/))
                }(e.params.bidFloor, e.params.bidFloorCur)
            },
            buildRequests: function(e, r) {
                for (var t, n, a = [], i = [], o = null, s = null, d = "https://as-sec.casalemedia.com/cygnus", p = 0; p < e.length; p++) o = e[p], n = void 0, (n = {}).id = (t = o).bidId, n.banner = {}, n.banner.w = t.params.size[0], n.banner.h = t.params.size[1], n.banner.topframe = v.inIframe() ? 0 : 1, n.ext = {}, n.ext.siteID = t.params.siteId, !t.params.hasOwnProperty("id") || "string" != typeof t.params.id && "number" != typeof t.params.id ? n.ext.sid = "".concat(t.params.size[0], "x").concat(t.params.size[1]) : n.ext.sid = String(t.params.id), t.params.hasOwnProperty("bidFloor") && t.params.hasOwnProperty("bidFloorCur") && (n.bidfloor = t.params.bidFloor, n.bidfloorcur = t.params.bidFloorCur), s = n, a.push(s);
                if (window.headertag && "function" == typeof window.headertag.getIdentityInfo) {
                    var f = window.headertag.getIdentityInfo();
                    if (f && "object" === P(f))
                        for (var u in f)
                            if (f.hasOwnProperty(u)) {
                                var c = f[u];
                                !c.responsePending && c.data && "object" === P(c.data) && Object.keys(c.data).length && i.push(c.data)
                            }
                }
                var m = {};
                if (m.id = e[0].bidderRequestId, m.imp = a, m.site = {}, m.ext = {}, m.ext.source = "prebid", 0 < i.length && (m.user = {}, m.user.eids = i), document.referrer && "" !== document.referrer && (m.site.ref = document.referrer), r) {
                    if (r.gdprConsent) {
                        var y = r.gdprConsent;
                        y.hasOwnProperty("gdprApplies") && (m.regs = {
                            ext: {
                                gdpr: y.gdprApplies ? 1 : 0
                            }
                        }), y.hasOwnProperty("consentString") && (m.user = m.user || {}, m.user.ext = {
                            consent: y.consentString || ""
                        })
                    }
                    r.refererInfo && (m.site.page = r.refererInfo.referer, r.refererInfo.referer && 0 !== r.refererInfo.referer.indexOf("https") && (d = "http://as.casalemedia.com/cygnus"))
                }
                var b = {},
                    l = I.b.getConfig("ix");
                if (l) {
                    if ("object" === P(l.firstPartyData)) {
                        var h = l.firstPartyData,
                            g = "?";
                        for (var w in h) h.hasOwnProperty(w) && (g += "".concat(encodeURIComponent(w), "=").concat(encodeURIComponent(h[w]), "&"));
                        g = g.slice(0, -1), m.site.page += g
                    }
                    "number" == typeof l.timeout && (b.t = l.timeout)
                }
                return b.s = e[0].params.siteId, b.v = 7.2, b.r = JSON.stringify(m), b.ac = "j", b.sd = 1, {
                    method: "GET",
                    url: d,
                    data: b
                }
            },
            interpretResponse: function(e) {
                var r = [],
                    t = null;
                if (!e.hasOwnProperty("body") || !e.body.hasOwnProperty("seatbid")) return r;
                for (var n, a, i, o = e.body, s = o.seatbid, d = 0; d < s.length; d++)
                    if (s[d].hasOwnProperty("bid"))
                        for (var p = s[d].bid, f = 0; f < p.length; f++) n = p[f], a = o.cur, i = void 0, i = {}, y.hasOwnProperty(a) ? i.cpm = n.price / y[a] : i.cpm = n.price / u, i.requestId = n.impid, i.width = n.w, i.height = n.h, i.ad = n.adm, i.dealId = v.deepAccess(n, "ext.dealid"), i.ttl = c, i.netRevenue = m, i.currency = a, i.creativeId = n.hasOwnProperty("crid") ? n.crid : "-", i.meta = {}, i.meta.networkId = v.deepAccess(n, "ext.dspid"), i.meta.brandId = v.deepAccess(n, "ext.advbrandid"), i.meta.brandName = v.deepAccess(n, "ext.advbrand"), t = i, r.push(t);
                return r
            },
            transformBidParams: function(e, r) {
                return v.convertTypes({
                    siteID: "number"
                }, e)
            }
        };
        Object(d.registerBidder)(b)
    }
}, [346]);
owpbjsChunk([136], {
    385: function(t, e, n) {
        t.exports = n(386)
    },
    386: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n.d(e, "spec", function() {
            return E
        });
        var r = n(1),
            o = n(0),
            i = n(3),
            a = n(10),
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
            }, function() {
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
            }())
        }

        function g(t, e) {
            var n = function(t, e) {
                try {
                    var n = o.getWindowTop().document.querySelector(t);
                    if (null !== n && n[e]) return n[e]
                } catch (t) {}
            }(t, e);
            return n && function(t) {
                var e = o.getWindowTop().document.createElement("a");
                return e.href = t, e.href
            }(n)
        }

        function b(t, e) {
            return t.filter(function(t) {
                return t.type === e
            })
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
            if (0 < t.sizes.length && (e.banner = function(t) {
                    return o.isArray(t) && 2 === t.length && !o.isArray(t[0]) ? [y(t)] : t.map(function(t) {
                        return y(t)
                    })
                }(t.sizes)), t.nativeParams) try {
                e.native = JSON.stringify(t.nativeParams)
            } catch (t) {
                o.logError("".concat(u, " : Incorrect JSON : bidRequest.nativeParams"))
            }
            t.params.crid && (e.tagid = t.params.crid.toString());
            var n = parseFloat(t.params.bidfloor);
            n && (e.bidfloor = n);
            var r = function(t) {
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
            }(t.adUnitCode);
            if (r && e.banner && 0 !== e.banner.length) {
                var i = function(t) {
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
                }(r);
                e.ext.coordinates = i, e.ext.viewability = w(r.top_left, v(e.banner)), .5 < w(i.top_left, v(e.banner)) ? e.ext.visibility = s.ABOVE_THE_FOLD : e.ext.visibility = s.BELOW_THE_FOLD
            } else e.ext.visibility = s.NOT_DETERMINED;
            return e
        }

        function v(t) {
            return t.reduce(function(t, e) {
                return e.h * e.w < t.h * t.w ? e : t
            })
        }

        function w(t, e) {
            var n = e.w * e.h,
                r = E.getWindowSize(),
                i = {
                    x: t.x + e.w,
                    y: t.y + e.h
                };
            return 0 == n || -1 === r.w || -1 === r.h ? 0 : function(t, e, n, r) {
                if (t.x > r.x || e.x < n.x || t.y > r.y || e.y < n.y) return 0;
                return (Math.min(e.x, r.x) - Math.max(t.x, n.x)) * (Math.min(e.y, r.y) - Math.max(t.y, n.y))
            }(t, i, {
                x: 0,
                y: 0
            }, {
                x: r.w,
                y: r.h
            }) / n
        }

        function _(t, e) {
            return {
                site: m(t[0].params.site),
                ext: function(t, e) {
                    var n = {
                        customer_id: t.cid,
                        prebid_version: owpbjs.version
                    };
                    n.gdpr_applies = !(!e || !e.gdprApplies), n.gdpr_applies && (n.gdpr_consent_string = e.consentString || "");
                    var r = E.getWindowSize();
                    return -1 !== r.w && -1 !== r.h && (n.screen = r), n
                }(t[0].params, e.gdprConsent),
                id: t[0].auctionId,
                imp: t.map(function(t) {
                    return h(t)
                }),
                tmax: e.timeout || i.b.getConfig("bidderTimeout")
            }
        }

        function x(t, e) {
            var n = {
                protocol: "https",
                hostname: "qsearch-a.akamaihd.net/log",
                search: function(t, e) {
                    e = o.isArray(e) && e || [];
                    var n = {
                        logid: "kfk",
                        evtid: "projectevents",
                        project: "prebid"
                    };
                    return n.acid = o.deepAccess(e, "0.auctionId") || "", n.cid = owpbjs.medianetGlobals.cid || "", n.crid = e.map(function(t) {
                        return o.deepAccess(t, "params.0.crid") || t.adUnitCode
                    }).join("|"), n.adunit_count = e.length || 0, n.dn = o.getTopWindowLocation().host || "", n.requrl = o.getTopWindowUrl() || "", n.event = t.name || "", n.value = t.value || "", n.rd = t.related_data || "", n
                }(t, e)
            };
            o.triggerPixel(a.a(n))
        }
        owpbjs.medianetGlobals = {};
        var E = {
            code: u,
            supportedMediaTypes: [c.b, c.c],
            isBidRequestValid: function(t) {
                return t.params ? t.params.cid && o.isStr(t.params.cid) && !o.isEmptyStr(t.params.cid) ? (d(owpbjs.medianetGlobals, !owpbjs.medianetGlobals.cid && {
                    cid: t.params.cid
                }), !0) : (o.logError("".concat(u, " : cid should be a string")), !1) : (o.logError("".concat(u, " : Missing bid parameters")), !1)
            },
            buildRequests: function(t, e) {
                var n = _(t, e);
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
                return o.isArray(r) && 0 !== r.length ? n = r.filter(function(t) {
                    return function(t) {
                        return !1 === t.no_bid && 0 < parseFloat(t.cpm)
                    }(t)
                }) : (o.logInfo("".concat(u, " : no bids")), n)
            },
            getUserSyncs: function(t, e) {
                var n = function(t) {
                    return !o.isEmpty(t) && t[0].body && t[0].body.ext && o.isArray(t[0].body.ext.csUrl) ? t[0].body.ext.csUrl : []
                }(e);
                return t.iframeEnabled ? b(n, "iframe") : t.pixelEnabled ? b(n, "image") : void 0
            },
            onTimeout: function(t) {
                try {
                    x({
                        name: l,
                        value: t.length,
                        related_data: t[0].timeout || i.b.getConfig("bidderTimeout")
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
}, [385]);
owpbjsChunk([106], {
    454: function(e, r, a) {
        e.exports = a(455)
    },
    455: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", function() {
            return k
        });
        var l = a(0),
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
            m = [{
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
            I = 0,
            v = !1,
            b = {},
            w = {};

        function T(e, r) {
            if (!l.isStr(r)) return r && l.logWarn(h + "Ignoring param key: " + e + ", expects string-value, found " + g(r)), y;
            switch (e) {
                case "pmzoneid":
                    return r.split(",").slice(0, 50).map(function(e) {
                        return e.trim()
                    }).join();
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
            e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0, e.params.adSlot = function(e) {
                return l.isStr(e) ? e.replace(/^\s+/g, "").replace(/\s+$/g, "") : ""
            }(e.params.adSlot);
            var r = e.params.adSlot,
                a = r.split(":");
            if (r = a[0], 2 == a.length && (e.params.adUnitIndex = a[1]), a = r.split("@"), e.params.adUnit = a[0], 1 < a.length) {
                if (2 != (a = a[1].split("x")).length) return void l.logWarn(h + "AdSlot Error: adSlot not in required format");
                e.params.width = parseInt(a[0]), e.params.height = parseInt(a[1])
            }
            if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(u.b) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
                for (var i = 0, t = []; i < e.mediaTypes.banner.sizes.length; i++) 2 === e.mediaTypes.banner.sizes[i].length && t.push(e.mediaTypes.banner.sizes[i]);
                e.mediaTypes.banner.sizes = t, 1 <= e.mediaTypes.banner.sizes.length && (e.params.width || e.params.height ? e.params.width == e.mediaTypes.banner.sizes[0][0] && e.params.height == e.mediaTypes.banner.sizes[0][1] && (e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1)) : (e.params.width = e.mediaTypes.banner.sizes[0][0], e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1)))
            }
        }

        function D(e, r, a) {
            var i, t = "Ignoring param key: " + e + ", expects " + a + ", found " + g(r);
            switch (a) {
                case n.BOOLEAN:
                    i = l.isBoolean;
                    break;
                case n.NUMBER:
                    i = l.isNumber;
                    break;
                case n.STRING:
                    i = l.isStr;
                    break;
                case n.ARRAY:
                    i = l.isArray
            }
            return i(r) ? r : (l.logWarn(h + t), y)
        }

        function S(e) {
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
                            } : l.logWarn(h + "Error: Title Length is required for native ad: " + JSON.stringify(e));
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
                            } : l.logWarn(h + "Error: Image sizes is required for native ad: " + JSON.stringify(e));
                            break;
                        case p.ICON.KEY:
                            e[s].sizes && 0 < e[s].sizes.length ? n = {
                                id: p.ICON.ID,
                                required: e[s].required ? 1 : 0,
                                img: {
                                    type: c.ICON,
                                    w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : y),
                                    h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : y),
                                    ext: e[s].ext
                                }
                            } : l.logWarn(h + "Error: Icon sizes is required for native ad: " + JSON.stringify(e));
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
                                    h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : y),
                                    ext: e[s].ext
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
            var o = m.length,
                d = 0;
            return m.forEach(function(e) {
                for (var r = t.assets.length, a = 0; a < r; a++)
                    if (e.id == t.assets[a].id) {
                        d++;
                        break
                    }
            }), v = o != d, t
        }

        function Y(e) {
            var r, a = e.mediaTypes.banner.sizes,
                i = [];
            if (a !== y && l.isArray(a)) {
                if (r = {}, e.params.width || e.params.height) r.w = e.params.width, r.h = e.params.height;
                else {
                    if (0 === a.length) return r = y, l.logWarn(h + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r;
                    r.w = parseInt(a[0][0]), r.h = parseInt(a[0][1]), a = a.splice(1, a.length - 1)
                }
                0 < a.length && (i = [], a.forEach(function(e) {
                    1 < e.length && i.push({
                        w: e[0],
                        h: e[1]
                    })
                }), 0 < i.length && (r.format = i)), r.pos = 0, r.topframe = l.inIframe() ? 0 : 1
            } else l.logWarn(h + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r = y;
            return r
        }

        function P(e) {
            var r, a = e.params.video;
            if (a !== y) {
                for (var i in r = {}, o) a.hasOwnProperty(i) && (r[i] = D(i, a[i], o[i]));
                l.isArray(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0]), r.h = parseInt(e.mediaTypes.video.playerSize[0][1])) : l.isNumber(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0]), r.h = parseInt(e.mediaTypes.video.playerSize[1])), e.params.video.hasOwnProperty("skippable") && (r.ext = {
                    video_skippable: e.params.video.skippable ? 1 : 0
                })
            } else r = y, l.logWarn(h + "Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
            return r
        }

        function R(e) {
            var r = function(e) {
                var r, a = (r = window.DigiTrust && (t.b.getConfig("digiTrustId") || window.DigiTrust.getUser({
                    member: e
                }))) && r.success && r.identity || null;
                return !a || a.privacy && a.privacy.optout ? null : a
            }(s);
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

        function A(e, r) {
            var a = [];
            R(a),
                function(e, r) {
                    var a = null,
                        i = t.b.getConfig("adsrvrOrgId");
                    l.isStr(l.deepAccess(r, "0.userId.tdid")) ? a = r[0].userId.tdid : i && l.isStr(i.TDID) && (a = i.TDID), null !== a && e.push({
                        source: "adserver.org",
                        uids: [{
                            id: a,
                            atype: 1,
                            ext: {
                                rtiPartner: "TDID"
                            }
                        }]
                    })
                }(a, r), 0 < a.length && (e.user.eids = a)
        }
        l._each(p, function(e) {
            b[e.ID] = e.KEY
        }), l._each(p, function(e) {
            w[e.KEY] = e
        });
        var k = {
            code: "pubmatic",
            supportedMediaTypes: [u.b, u.d, u.c],
            isBidRequestValid: function(e) {
                return !(!e || !e.params) && (l.isStr(e.params.publisherId) ? !!(!e.params.hasOwnProperty("video") || e.params.video.hasOwnProperty("mimes") && l.isArray(e.params.video.mimes) && 0 !== e.params.video.mimes.length) || (l.logWarn(h + "Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), !1) : (l.logWarn(h + "Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), !1))
            },
            buildRequests: function(e, r) {
                var a;
                r && r.refererInfo && (a = r.refererInfo);
                var i, t, s = function(e) {
                        var r = {};
                        return r.pageURL = l.getTopWindowUrl(), e && e.referer ? r.refURL = e.referer : r.refURL = "", r
                    }(a),
                    n = function(e) {
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
                    }(s),
                    o = "",
                    d = "",
                    p = [],
                    c = [];
                if (e.forEach(function(e) {
                        if ((t = l.deepClone(e)).params.adSlot = t.params.adSlot || "", O(t), t.params.hasOwnProperty("video"));
                        else if (!(t.hasOwnProperty("mediaTypes") && t.mediaTypes.hasOwnProperty(u.c) || 0 !== t.params.width || 0 !== t.params.height)) return void l.logWarn(h + "Skipping the non-standard adslot: ", t.params.adSlot, JSON.stringify(t));
                        s.pubId = s.pubId || t.params.publisherId, (s = function(e, r) {
                            var a, i, t;
                            for (a in r.kadpageurl || (r.kadpageurl = r.pageURL), E) E.hasOwnProperty(a) && (i = e[a]) && ("object" === g(t = E[a]) && (i = t.f(i, r)), l.isStr(i) ? r[a] = i : l.logWarn(h + "Ignoring param : " + a + " with value : " + E[a] + ", expects string-value, found " + g(i)));
                            return r
                        }(t.params, s)).transactionId = t.transactionId, "" === o ? o = t.params.currency || y : t.params.hasOwnProperty("currency") && o !== t.params.currency && l.logWarn(h + "Currency specifier ignored. Only one currency permitted."), t.params.currency = o, t.params.hasOwnProperty("dctr") && l.isStr(t.params.dctr) && p.push(t.params.dctr), t.params.hasOwnProperty("bcat") && l.isArray(t.params.bcat) && (c = c.concat(t.params.bcat));
                        var r = function(e) {
                            var r, a, i = {},
                                t = {},
                                s = e.hasOwnProperty("sizes") ? e.sizes : [],
                                n = "",
                                o = [];
                            if (i = {
                                    id: e.bidId,
                                    tagid: e.params.adUnit || void 0,
                                    bidfloor: T("kadfloor", e.params.kadfloor),
                                    secure: 1,
                                    ext: {
                                        pmZoneId: T("pmzoneid", e.params.pmzoneid)
                                    },
                                    bidfloorcur: e.params.currency ? T("currency", e.params.currency) : f
                                }, e.hasOwnProperty("mediaTypes"))
                                for (n in e.mediaTypes) switch (n) {
                                    case u.b:
                                        (r = Y(e)) !== y && (i.banner = r);
                                        break;
                                    case u.c:
                                        t.request = JSON.stringify(S(e.nativeParams)), v ? l.logWarn(h + "Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : i.native = t;
                                        break;
                                    case u.d:
                                        (a = P(e)) !== y && (i.video = a)
                                } else r = {
                                    pos: 0,
                                    w: e.params.width,
                                    h: e.params.height,
                                    topframe: l.inIframe() ? 0 : 1
                                }, l.isArray(s) && 1 < s.length && ((s = s.splice(1, s.length - 1)).forEach(function(e) {
                                    l.isArray(e) && 2 == e.length && o.push({
                                        w: e[0],
                                        h: e[1]
                                    })
                                }), r.format = o), i.banner = r;
                            return i.hasOwnProperty(u.b) || i.hasOwnProperty(u.c) || i.hasOwnProperty(u.d) ? i : y
                        }(t);
                        r && n.imp.push(r)
                    }), 0 != n.imp.length) {
                    if (n.site.publisher.id = s.pubId.trim(), I = s.pubId.trim(), n.ext.wrapper = {}, n.ext.wrapper.profile = parseInt(s.profId) || y, n.ext.wrapper.version = parseInt(s.verId) || y, n.ext.wrapper.wiid = s.wiid || y, n.ext.wrapper.wv = "prebid_prebid_2.22.0", n.ext.wrapper.transactionId = s.transactionId, n.ext.wrapper.wp = "pbjs", n.user.gender = s.gender ? s.gender.trim() : y, n.user.geo = {}, r && r.gdprConsent && (n.user.ext = {
                            consent: r.gdprConsent.consentString
                        }, n.regs = {
                            ext: {
                                gdpr: r.gdprConsent.gdprApplies ? 1 : 0
                            }
                        }), n.user.geo.lat = T("lat", s.lat), n.user.geo.lon = T("lon", s.lon), n.user.yob = T("yob", s.yob), n.device.geo = n.user.geo, n.site.page = s.kadpageurl.trim() || n.site.page.trim(), n.site.domain = function(e) {
                            var r = document.createElement("a");
                            return r.href = e, r.hostname
                        }(n.site.page), 0 < p.length)
                        if (e[0].params.hasOwnProperty("dctr")) {
                            if (d = e[0].params.dctr, l.isStr(d) && 0 < d.length) {
                                var m = d.split("|");
                                d = "", m.forEach(function(e) {
                                    d += 0 < e.length ? e.trim() + "|" : ""
                                }), i = d.length, "|" === d.substring(i, i - 1) && (d = d.substring(0, i - 1)), n.site.ext = {
                                    key_val: d.trim()
                                }
                            } else l.logWarn(h + "Ignoring param : dctr with value : " + d + ", expects string-value, found empty or non-string value");
                            1 < p.length && l.logWarn(h + "dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits")
                        } else l.logWarn(h + "dctr value not found in 1st adunit, ignoring values from subsequent adunits");
                    return A(n, e),
                        function(e, r) {
                            0 < (r = r.filter(function(e) {
                                return "string" == typeof e || (l.logWarn(h + "bcat: Each category should be a string, ignoring category: " + e), !1)
                            }).map(function(e) {
                                return e.trim()
                            }).filter(function(e, r, a) {
                                if (3 < e.length) return a.indexOf(e) === r;
                                l.logWarn(h + "bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e)
                            })).length && (l.logWarn(h + "bcat: Selected: ", r), e.bcat = r)
                        }(n, c), {
                            method: "POST",
                            url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
                            data: JSON.stringify(n)
                        }
                }
            },
            interpretResponse: function(e, r) {
                var i = [],
                    t = f;
                try {
                    var s = JSON.parse(r.data);
                    s && s.imp && 0 < s.imp.length && s.imp.forEach(function(e) {
                        i.push({
                            requestId: e.id,
                            width: 0,
                            height: 0,
                            ttl: 300,
                            ad: "",
                            creativeId: 0,
                            netRevenue: !1,
                            cpm: 0,
                            currency: t,
                            referrer: s.site && s.site.ref ? s.site.ref : ""
                        })
                    }), e.body && e.body.seatbid && l.isArray(e.body.seatbid) && (t = e.body.cur || t, e.body.seatbid.forEach(function(e) {
                        e.bid && l.isArray(e.bid) && e.bid.forEach(function(a) {
                            i.forEach(function(r) {
                                r.requestId == a.impid && (r.requestId = a.impid, r.cpm = (parseFloat(a.price) || 0).toFixed(2), r.width = a.w, r.height = a.h, r.creativeId = a.crid || a.id, r.dealId = a.dealid, r.currency = t, r.netRevenue = !1, r.ttl = 300, r.referrer = s.site && s.site.ref ? s.site.ref : "", r.ad = a.adm, s.imp && 0 < s.imp.length && s.imp.forEach(function(e) {
                                    if (a.impid === e.id) switch (function(r, e) {
                                        var a = "",
                                            i = new RegExp(/VAST\s+version/);
                                        if (0 <= r.indexOf('span class="PubAPIAd"')) e.mediaType = u.b;
                                        else if (i.test(r)) e.mediaType = u.d;
                                        else try {
                                            (a = JSON.parse(r.replace(/\\/g, ""))) && a.native && (e.mediaType = u.c)
                                        } catch (e) {
                                            l.logWarn(h + "Error: Cannot parse native reponse for ad response: " + r)
                                        }
                                    }(a.adm, r), r.mediaType) {
                                        case u.b:
                                            break;
                                        case u.d:
                                            r.width = a.hasOwnProperty("w") ? a.w : e.video.w, r.height = a.hasOwnProperty("h") ? a.h : e.video.h, r.vastXml = a.adm;
                                            break;
                                        case u.c:
                                            ! function(e, r) {
                                                if (r.native = {}, e.hasOwnProperty("adm")) {
                                                    var a = "";
                                                    try {
                                                        a = JSON.parse(e.adm.replace(/\\/g, ""))
                                                    } catch (e) {
                                                        return l.logWarn(h + "Error: Cannot parse native reponse for ad response: " + r.adm)
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
                                            }(a, r)
                                    }
                                }), a.ext && a.ext.deal_channel && (r.dealChannel = d[a.ext.deal_channel] || null), r.meta = {}, a.ext && a.ext.dspid && (r.meta.networkId = a.ext.dspid), a.ext && a.ext.advid && (r.meta.buyerId = a.ext.advid), a.adomain && 0 < a.adomain.length && (r.meta.clickUrl = a.adomain[0]))
                            })
                        })
                    }))
                } catch (e) {
                    l.logError(e)
                }
                return i
            },
            getUserSyncs: function(e, r, a) {
                var i = "https://ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + I;
                if (a && (i += "&gdpr=" + (a.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")), e.iframeEnabled) return [{
                    type: "iframe",
                    url: i
                }];
                l.logWarn(h + "Please enable iframe based user sync.")
            },
            transformBidParams: function(e, r) {
                return l.convertTypes({
                    publisherId: "string",
                    adSlot: "string"
                }, e)
            }
        };
        Object(i.registerBidder)(k)
    }
}, [454]);
owpbjsChunk([96], {
    482: function(e, t, r) {
        e.exports = r(483)
    },
    483: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r.d(t, "spec", function() {
            return i
        });
        var b = r(0),
            n = r(1),
            A = r(2);

        function T(e) {
            return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var i = new function() {
            this.code = "rhythmone", this.supportedMediaTypes = [A.d, A.b];
            var i = [2, 3, 5, 6],
                o = ["video/mp4"],
                a = [1, 2, 3, 4],
                d = [1],
                p = [1, 2, 5],
                u = {},
                s = this,
                m = "2.0.0.0",
                l = Date.now(),
                c = "undefined" != typeof window ? window : {};

            function v(e) {
                var t = parseInt(e[0]),
                    r = parseInt(e[1]);
                return t == t && r == r && [t, r]
            }

            function f(e) {
                var t = e.sizes;
                e.mediaTypes && e.mediaTypes.banner && (t = e.mediaTypes.banner.sizes);
                var r = b.parseSizesInput(t);
                if (!Array.isArray(r)) return {};
                var n = [];
                return r.forEach(function(e) {
                    if (e) {
                        var t = v(e.split("x"));
                        t && n.push({
                            w: t[0],
                            h: t[1]
                        })
                    }
                }), n.length ? {
                    format: n
                } : {}
            }

            function y(e) {
                var t = [];
                if (b.deepAccess(e, "mediaTypes.video.playerSize")) {
                    var r = e.mediaTypes.video.playerSize;
                    b.isArray(e.mediaTypes.video.playerSize[0]) && (r = e.mediaTypes.video.playerSize[0]);
                    var n = v(r);
                    n && (t = n)
                }
                return {
                    mimes: b.deepAccess(e, "mediaTypes.video.mimes") || o,
                    protocols: b.deepAccess(e, "mediaTypes.video.protocols") || i,
                    w: t[0],
                    h: t[1],
                    startdelay: b.deepAccess(e, "mediaTypes.video.startdelay") || 0,
                    skip: b.deepAccess(e, "mediaTypes.video.skip") || 0,
                    playbackmethod: b.deepAccess(e, "mediaTypes.video.playbackmethod") || a,
                    delivery: b.deepAccess(e, "mediaTypes.video.delivery") || d,
                    api: b.deepAccess(e, "mediaTypes.video.api") || p
                }
            }

            function h(e, t) {
                return {
                    id: e[0].bidderRequestId,
                    imp: function(e) {
                        for (var t, r = [], n = 0; n < e.length; n++) {
                            u[e[n].adUnitCode || e[n].placementCode] = e[n];
                            var i = {};
                            i.id = e[n].adUnitCode, i.bidfloor = parseFloat(b.deepAccess(e[n], "params.floor")) || 0, i.secure = "https:" === c.location.protocol ? 1 : 0, !b.deepAccess(e[n], "mediaTypes.banner") && "banner" !== b.deepAccess(e[n], "mediaType") || (i.banner = f(e[n])), !b.deepAccess(e[n], "mediaTypes.video") && "video" !== b.deepAccess(e[n], "mediaType") || (i.video = y(e[n])), i.ext = {
                                bidder: {
                                    placementId: (t = e[n]).params.placementId,
                                    zone: t.params && t.params.zone ? t.params.zone : "1r",
                                    path: t.params && t.params.path ? t.params.path : "mvo"
                                }
                            }, r.push(i)
                        }
                        return r
                    }(e),
                    site: function(e) {
                        return {
                            domain: r(function() {
                                var e = c.document.location.ancestorOrigins;
                                return e && 0 < e.length ? e[e.length - 1] : c.top.document.location.hostname
                            }, ""),
                            page: r(function() {
                                var t;
                                try {
                                    t = c.top.document.location.href.toString()
                                } catch (e) {
                                    t = c.document.location.href.toString()
                                }
                                return t
                            }, ""),
                            ref: r(function() {
                                return e && e.refererInfo ? e.refererInfo.referer : ""
                            }, "")
                        }
                    }(t),
                    device: {
                        ua: navigator.userAgent,
                        devicetype: /(ios|ipod|ipad|iphone|android)/i.test(c.navigator.userAgent) ? 1 : /(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(c.navigator.userAgent) ? 3 : 2,
                        ip: "",
                        dnt: b.getDNT() ? 1 : 0
                    },
                    user: {
                        ext: {
                            consent: b.deepAccess(t, "gdprConsent.gdprApplies") ? t.gdprConsent.consentString : ""
                        }
                    },
                    at: 1,
                    tmax: 1e3,
                    regs: {
                        ext: {
                            gdpr: !!b.deepAccess(t, "gdprConsent.gdprApplies") && Boolean(1 & t.gdprConsent.gdprApplies)
                        }
                    }
                }
            }

            function g(e, t) {
                for (var r = 0; r < t.length; r++)
                    if (t[r].params && t[r].params[e]) return t[r].params[e]
            }

            function r(e, t) {
                try {
                    return e()
                } catch (e) {}
                return t
            }
            this.isBidRequestValid = function(e) {
                return !(!e.params || !e.params.placementId)
            }, this.getUserSyncs = function(e, t, r) {
                var n = [],
                    i = [];
                for (var o in u) n.push(o), i.push(g("placementId", [u[o]]));
                var a = {
                        doc_version: 1,
                        doc_type: "Prebid Audit",
                        placement_id: i.join(",").replace(/[,]+/g, ",").replace(/^,|,$/g, "")
                    },
                    d = "undefined" != typeof window ? window : {
                        document: {
                            location: {
                                href: ""
                            }
                        }
                    },
                    p = d.document.location.ancestorOrigins,
                    s = [];
                p && 0 < p.length && (a.ancestor_origins = p[p.length - 1]), a.popped = null !== d.opener ? 1 : 0, a.framed = d.top === d ? 0 : 1;
                try {
                    a.url = d.top.document.location.href.toString()
                } catch (e) {
                    a.url = d.document.location.href.toString()
                }
                try {
                    a.prebid_version = "2.22.0", a.prebid_timeout = config.getConfig("bidderTimeout")
                } catch (e) {}
                for (var c in a.response_ms = Date.now() - l, a.placement_codes = n.join(","), a.bidder_version = m, r && (a.gdpr_consent = r.consentString, a.gdpr = "boolean" == typeof r.gdprApplies && r.gdprApplies), a) s.push(encodeURIComponent(c) + "=" + encodeURIComponent("object" === T(a[c]) ? JSON.stringify(a[c]) : a[c]));
                if (s.sort(), e.pixelEnabled) return [{
                    type: "image",
                    url: "//hbevents.1rx.io/audit?" + s.join("&")
                }]
            }, this.buildRequests = function(e, t) {
                var r = g("placementId", e);
                if (void 0 === r || e.length < 1) return [];
                var n = g("endpoint", e) || "//tag.1rx.io/rmp/{placementId}/0/{path}?z={zone}",
                    i = g("zone", e) || "1r",
                    o = g("path", e) || "mvo";
                n = (n = (n = n.replace(/\{placementId\}/i, r)).replace(/\{zone\}/i, i)).replace(/\{path\}/i, o);
                var a = /(^v|(\.0)+$)/gi;
                n += "&hbv=" + "2.22.0".replace(a, "") + "," + m.replace(a, "");
                var d = h(e, t);
                return l = Date.now(), {
                    method: "POST",
                    url: n,
                    data: JSON.stringify(d)
                }
            }, this.interpretResponse = function(e) {
                var t = e.body || [],
                    r = [],
                    n = 0;
                if (t.seatbid) {
                    var i = [];
                    for (n = 0; n < t.seatbid.length; n++)
                        for (var o = 0; o < t.seatbid[n].bid.length; o++) i.push(t.seatbid[n].bid[o]);
                    t = i
                }
                for (n = 0; n < t.length; n++) {
                    var a = t[n],
                        d = u[a.impid],
                        p = {
                            requestId: d.bidId,
                            bidderCode: s.code,
                            cpm: parseFloat(a.price),
                            width: a.w,
                            height: a.h,
                            creativeId: a.crid,
                            currency: "USD",
                            netRevenue: !0,
                            ttl: 350
                        };
                    d.mediaTypes && d.mediaTypes.video ? (p.vastUrl = a.nurl, p.mediaType = "video", p.ttl = 600) : p.ad = a.adm, r.push(p)
                }
                return r
            }
        };
        Object(n.registerBidder)(i)
    }
}, [482]);
owpbjsChunk([90], {
    500: function(e, r, t) {
        e.exports = t(501)
    },
    501: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "FASTLANE_ENDPOINT", function() {
            return n
        }), t.d(r, "VIDEO_ENDPOINT", function() {
            return a
        }), t.d(r, "SYNC_ENDPOINT", function() {
            return o
        }), t.d(r, "spec", function() {
            return s
        }), r.hasVideoMediaType = I, r.masSizeOrdering = S, r.determineRubiconVideoSizeId = T, r.getPriceGranularity = j, r.hasValidVideoParams = k, r.resetUserSync = function() {
            z = !1
        };
        var d = t(0),
            i = t(1),
            c = t(3),
            u = t(2);

        function p(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e
        }

        function l() {
            return (l = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }).apply(this, arguments)
        }

        function f(e, r) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, r) {
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
            }(e, r) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function m(e) {
            return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function v() {
            return "https:" === location.protocol
        }
        var n = "//fastlane.rubiconproject.com/a/api/fastlane.json",
            a = "//prebid-server.rubiconproject.com/openrtb2/auction",
            o = "https://eus.rubiconproject.com/usync.html",
            g = {
                FASTLANE: {
                    id: "dt.id",
                    keyv: "dt.keyv",
                    pref: "dt.pref"
                },
                PREBID_SERVER: {
                    id: "id",
                    keyv: "keyv"
                }
            },
            b = {
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
                17: "240x400",
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
                156: "640x320",
                159: "320x250",
                179: "250x600",
                195: "600x300",
                198: "640x360",
                199: "640x200",
                213: "1030x590",
                214: "980x360",
                229: "320x180",
                232: "580x400",
                257: "400x600",
                265: "1920x1080",
                288: "640x380"
            };
        d._each(b, function(e, r) {
            return b[e] = r
        });
        var s = {
            code: "rubicon",
            supportedMediaTypes: [u.b, u.d],
            isBidRequestValid: function(e) {
                if ("object" !== m(e.params)) return !1;
                for (var r = 0, t = ["accountId", "siteId", "zoneId"]; r < t.length; r++)
                    if (e.params[t[r]] = parseInt(e.params[t[r]]), isNaN(e.params[t[r]])) return d.logError("Rubicon bid adapter Error: wrong format of accountId or siteId or zoneId."), !1;
                var i = A(e, !0);
                return !!i && ("video" !== i || k(e))
            },
            buildRequests: function(e, o) {
                var r = [],
                    t = e.filter(function(e) {
                        return "video" === A(e)
                    }).map(function(e) {
                        e.startTime = (new Date).getTime();
                        var r = {
                                id: e.transactionId,
                                test: c.b.getConfig("debug") ? 1 : 0,
                                cur: ["USD"],
                                source: {
                                    tid: e.transactionId
                                },
                                tmax: c.b.getConfig("TTL") || 1e3,
                                imp: [{
                                    exp: 300,
                                    id: e.adUnitCode,
                                    secure: v() || e.params.secure ? 1 : 0,
                                    ext: {
                                        rubicon: e.params
                                    },
                                    video: d.deepAccess(e, "mediaTypes.video") || {}
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
                                            pricegranularity: j(c.b)
                                        }
                                    }
                                }
                            },
                            t = parseFloat(d.deepAccess(e, "params.floor"));
                        isNaN(t) || (r.imp[0].bidfloor = t), r.imp[0].ext.rubicon.video.size_id = T(e),
                            function(r, t, e) {
                                if (!r) return;
                                "object" === m(c.b.getConfig("app")) ? r.app = c.b.getConfig("app") : r.site = {
                                    page: h(t, e)
                                };
                                "object" === m(c.b.getConfig("device")) && (r.device = c.b.getConfig("device"));
                                t.params.video.language && ["site", "device"].forEach(function(e) {
                                    r[e] && (r[e].content = l({
                                        language: t.params.video.language
                                    }, r[e].content))
                                })
                            }(r, e, o),
                            function(e, r) {
                                "object" === m(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip);
                                "object" === m(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay);
                                "object" === m(e.imp[0].video) && void 0 === e.imp[0].video.pos && (e.imp[0].video.pos = "atf" === r.params.position ? 1 : "btf" === r.params.position ? 3 : 0);
                                var t = x(r, "video");
                                e.imp[0].video.w = t[0], e.imp[0].video.h = t[1]
                            }(r, e);
                        var i, n = y(e, "PREBID_SERVER");
                        n && d.deepSetValue(r, "user.ext.digitrust", n), o.gdprConsent && ("boolean" == typeof o.gdprConsent.gdprApplies && (i = o.gdprConsent.gdprApplies ? 1 : 0), r.regs ? r.regs.ext ? r.regs.ext.gdpr = i : r.regs.ext = {
                            gdpr: i
                        } : r.regs = {
                            ext: {
                                gdpr: i
                            }
                        }, d.deepSetValue(r, "user.ext.consent", o.gdprConsent.consentString));
                        return e.userId && "object" === m(e.userId) && (e.userId.tdid || e.userId.pubcid) && (d.deepSetValue(r, "user.ext.eids", []), e.userId.tdid && r.user.ext.eids.push({
                            source: "adserver.org",
                            uids: [{
                                id: e.userId.tdid,
                                ext: {
                                    rtiPartner: "TDID"
                                }
                            }]
                        }), e.userId.pubcid && r.user.ext.eids.push({
                            source: "pubcommon",
                            uids: [{
                                id: e.userId.pubcid
                            }]
                        })), !0 === c.b.getConfig("coppa") && d.deepSetValue(request, "regs.coppa", 1), {
                            method: "POST",
                            url: a,
                            data: r,
                            bidRequest: e
                        }
                    });
                if (!0 !== c.b.getConfig("rubicon.singleRequest")) r = t.concat(e.filter(function(e) {
                    return "banner" === A(e)
                }).map(function(e) {
                    var i = s.createSlotParams(e, o);
                    return {
                        method: "GET",
                        url: n,
                        data: s.getOrderedParams(i).reduce(function(e, r) {
                            var t = i[r];
                            return d.isStr(t) && "" !== t || d.isNumber(t) ? "".concat(e).concat(r, "=").concat(encodeURIComponent(t), "&") : e
                        }, "") + "slots=1&rand=".concat(Math.random()),
                        bidRequest: e
                    }
                }));
                else {
                    var i = e.filter(function(e) {
                        return "banner" === A(e)
                    }).reduce(function(e, r) {
                        return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e
                    }, {});
                    r = t.concat(Object.keys(i).reduce(function(r, e) {
                        return function(t, i) {
                            return t.map(function(e, r) {
                                return r % i == 0 ? t.slice(r, r + i) : null
                            }).filter(function(e) {
                                return e
                            })
                        }(i[e], 10).forEach(function(e) {
                            var i = s.combineSlotUrlParams(e.map(function(e) {
                                return s.createSlotParams(e, o)
                            }));
                            r.push({
                                method: "GET",
                                url: n,
                                data: s.getOrderedParams(i).reduce(function(e, r) {
                                    var t = i[r];
                                    return d.isStr(t) && "" !== t || d.isNumber(t) ? "".concat(e).concat(r, "=").concat(encodeURIComponent(t), "&") : e
                                }, "") + "slots=".concat(e.length, "&rand=").concat(Math.random()),
                                bidRequest: e
                            })
                        }), r
                    }, []))
                }
                return r
            },
            getOrderedParams: function(e) {
                var r = /^tg_v/,
                    t = /^tg_i/,
                    i = ["tpid_tdid", "account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "rf", "dt.id", "dt.keyv", "dt.pref", "p_geo.latitude", "p_geo.longitude", "kw"].concat(Object.keys(e).filter(function(e) {
                        return r.test(e)
                    })).concat(Object.keys(e).filter(function(e) {
                        return t.test(e)
                    })).concat(["tk_flint", "x_source.tid", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                return i.concat(Object.keys(e).filter(function(e) {
                    return -1 === i.indexOf(e)
                }))
            },
            combineSlotUrlParams: function(n) {
                if (1 === n.length) return n[0];
                var i = n.reduce(function(r, t, i) {
                        return Object.keys(t).forEach(function(e) {
                            r.hasOwnProperty(e) || (r[e] = new Array(n.length)), r[e].splice(i, 1, t[e])
                        }), r
                    }, {}),
                    o = new RegExp("^([^;]*)(;\\1)+$");
                return Object.keys(i).forEach(function(e) {
                    var r = i[e].join(";"),
                        t = r.match(o);
                    i[e] = t ? t[1] : r
                }), i
            },
            createSlotParams: function(e, r) {
                e.startTime = (new Date).getTime();
                var t = e.params,
                    i = x(e, "banner"),
                    n = f(t.latLong || [], 2),
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
                        rp_secure: v() ? "1" : "0",
                        tk_flint: "pbjs_lite_v2.22.0",
                        "x_source.tid": e.transactionId,
                        p_screen_res: [window.screen.width, window.screen.height].join("x"),
                        kw: Array.isArray(t.keywords) ? t.keywords.join(",") : "",
                        tk_user_key: t.userId,
                        "p_geo.latitude": isNaN(parseFloat(o)) ? void 0 : parseFloat(o).toFixed(4),
                        "p_geo.longitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                        "tg_fl.eid": e.code,
                        rf: h(e, r)
                    };
                (e.userId || {}).tdid && (s.tpid_tdid = e.userId.tdid), r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (s.gdpr = Number(r.gdprConsent.gdprApplies)), s.gdpr_consent = r.gdprConsent.consentString), null !== t.visitor && "object" === m(t.visitor) && Object.keys(t.visitor).forEach(function(e) {
                    null != t.visitor[e] && (s["tg_v.".concat(e)] = t.visitor[e].toString())
                }), null !== t.inventory && "object" === m(t.inventory) && Object.keys(t.inventory).forEach(function(e) {
                    null != t.inventory[e] && (s["tg_i.".concat(e)] = t.inventory[e].toString())
                });
                var d = y(e, "FASTLANE");
                return l(s, d), !0 === c.b.getConfig("coppa") && (s.coppa = 1), s
            },
            interpretResponse: function(a, e) {
                var s = e.bidRequest;
                if (!(a = a.body) || "object" !== m(a)) return [];
                if (a.seatbid) {
                    var r = d.deepAccess(a, "ext.errors.rubicon");
                    Array.isArray(r) && 0 < r.length && r.forEach(function(e) {
                        d.logError("Got error from PBS Java openRTB: " + e)
                    });
                    var o = [];
                    return a.seatbid.forEach(function(n) {
                        (n.bid || []).forEach(function(e) {
                            var r = {
                                requestId: s.bidId,
                                currency: a.cur || "USD",
                                creativeId: e.crid,
                                cpm: e.price || 0,
                                bidderCode: n.seat,
                                ttl: 300,
                                netRevenue: c.b.getConfig("rubicon.netRevenue") || !1,
                                width: e.w || d.deepAccess(s, "mediaTypes.video.w") || d.deepAccess(s, "params.video.playerWidth"),
                                height: e.h || d.deepAccess(s, "mediaTypes.video.h") || d.deepAccess(s, "params.video.playerHeight")
                            };
                            e.dealid && (r.dealId = e.dealid);
                            var t = d.deepAccess(a, "ext.responsetimemillis.rubicon");
                            if (s && t && (s.serverResponseTimeMs = t), d.deepAccess(e, "ext.prebid.type") === u.d) {
                                r.mediaType = u.d;
                                var i = d.deepAccess(e, "ext.prebid.targeting");
                                i && "object" === m(i) && (r.adserverTargeting = i), e.ext.prebid.cache && "object" === m(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (r.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, r.vastUrl = e.ext.prebid.cache.vastXml.url) : i && i.hb_uuid && i.hb_cache_host && i.hb_cache_path && (r.videoCacheKey = i.hb_uuid, r.vastUrl = "https://".concat(i.hb_cache_host).concat(i.hb_cache_path, "?uuid=").concat(i.hb_uuid)), e.adm && (r.vastXml = e.adm), e.nurl && (r.vastUrl = e.nurl), !r.vastUrl && e.nurl && (r.vastUrl = e.nurl)
                            } else d.logError("Prebid Server Java openRTB returns response with media type other than video for video request.");
                            o.push(r)
                        })
                    }), o
                }
                var t = a.ads;
                return "object" !== m(s) || Array.isArray(s) || "video" !== A(s) || "object" !== m(t) || (t = t[s.adUnitCode]), !Array.isArray(t) || t.length < 1 ? [] : t.reduce(function(e, r, t) {
                    if ("ok" !== r.status) return e;
                    var i = Array.isArray(s) ? s[t] : s;
                    if (i && "object" === m(i)) {
                        var n = {
                            requestId: i.bidId,
                            currency: "USD",
                            creativeId: r.creative_id || "".concat(r.network || "", "-").concat(r.advertiser || ""),
                            cpm: r.cpm || 0,
                            dealId: r.deal,
                            ttl: 300,
                            netRevenue: c.b.getConfig("rubicon.netRevenue") || !1,
                            rubicon: {
                                advertiserId: r.advertiser,
                                networkId: r.network
                            }
                        };
                        if (r.creative_type && (n.mediaType = r.creative_type), r.creative_type === u.d) n.width = i.params.video.playerWidth, n.height = i.params.video.playerHeight, n.vastUrl = r.creative_depot_url, n.impression_id = r.impression_id, n.videoCacheKey = r.impression_id;
                        else {
                            n.ad = function(e, r) {
                                return "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(r, "'>\n<script type='text/javascript'>").concat(e, "<\/script>\n</div>\n</body>\n</html>")
                            }(r.script, r.impression_id);
                            var o = f(b[r.size_id].split("x").map(function(e) {
                                return Number(e)
                            }), 2);
                            n.width = o[0], n.height = o[1]
                        }
                        n.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(function(e, r) {
                            return e[r.key] = r.values[0], e
                        }, {
                            rpfl_elemid: i.adUnitCode
                        }), e.push(n)
                    } else d.logError("Rubicon bid adapter Error: bidRequest undefined at index position:".concat(t), s, a);
                    return e
                }, []).sort(function(e, r) {
                    return (r.cpm || 0) - (e.cpm || 0)
                })
            },
            getUserSyncs: function(e, r, t) {
                if (!z && e.iframeEnabled) {
                    var i = "";
                    return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? i += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString) : i += "?gdpr_consent=".concat(t.consentString)), z = !0, {
                        type: "iframe",
                        url: o + i
                    }
                }
            },
            transformBidParams: function(e, r) {
                return d.convertTypes({
                    accountId: "number",
                    siteId: "number",
                    zoneId: "number"
                }, e)
            }
        };

        function y(e, r) {
            var t, i = 0 < arguments.length && void 0 !== e ? e : {},
                n = 1 < arguments.length ? r : void 0;
            if (!n || !g[n]) return null;
            var o = g[n];
            var a = function() {
                var e = d.deepAccess(i, "userId.digitrustid.data");
                if (e) return e;
                var r = window.DigiTrust && (c.b.getConfig("digiTrustId") || window.DigiTrust.getUser({
                    member: "T9QSFKPDN9"
                }));
                return r && r.success && r.identity || null
            }();
            if (!a || a.privacy && a.privacy.optout) return null;
            var s = (p(t = {}, o.id, a.id), p(t, o.keyv, a.keyv), t);
            return o.pref && (s[o.pref] = 0), s
        }

        function h(e, r) {
            var t = c.b.getConfig("pageUrl");
            return t = e.params.referrer ? e.params.referrer : t || r.refererInfo.referer, e.params.secure ? t.replace(/^http:/i, "https:") : t
        }

        function x(e, r) {
            var t = e.params;
            if ("video" === r) {
                var i = [];
                return t.video && t.video.playerWidth && t.video.playerHeight ? i = [t.video.playerWidth, t.video.playerHeight] : Array.isArray(d.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? i = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (i = e.sizes[0]), i
            }
            var n = [];
            return Array.isArray(t.sizes) ? n = t.sizes : void 0 !== d.deepAccess(e, "mediaTypes.banner.sizes") ? n = _(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? n = _(e.sizes) : d.logWarn("Warning: no sizes are setup or found"), S(n)
        }

        function _(e) {
            return d.parseSizesInput(e).reduce(function(e, r) {
                var t = parseInt(b[r], 10);
                return t && e.push(t), e
            }, [])
        }

        function I(e) {
            return "object" === m(d.deepAccess(e, "params.video")) && void 0 !== d.deepAccess(e, "mediaTypes.".concat(u.d))
        }

        function A(e, r) {
            var t = 1 < arguments.length && void 0 !== r && r;
            return I(e) ? -1 === ["outstream", "instream"].indexOf(d.deepAccess(e, "mediaTypes.".concat(u.d, ".context"))) ? void(t && d.logError("Rubicon bid adapter requires mediaTypes.video.context to be one of outstream or instream")) : x(e, "video").length < 2 ? void(t && d.logError("Rubicon bid adapter could not determine the playerSize of the video\nplayerWidth and playerHeight are inferred from one of params.playerWidth/playerHeight or mediaTypes.video.playerSize or adUnit.sizes, in that order")) : (t && d.logMessage("Rubicon bid adapter making video request for adUnit", e.adUnitCode), "video") : 0 === x(e, "banner").length ? void(t && d.logError("Rubicon bid adapter could not determine the sizes for a banner request\nThey are inferred from one of params.sizes or mediaTypes.banner.sizes or adUnit.sizes, in that order")) : (t && d.logMessage("Rubicon bid adapter making banner request for adUnit", e.adUnitCode), "banner")
        }

        function S(e) {
            var n = [15, 2, 9];
            return e.sort(function(e, r) {
                var t = n.indexOf(e),
                    i = n.indexOf(r);
                return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r
            })
        }

        function T(e) {
            var r = parseInt(d.deepAccess(e, "params.video.size_id"));
            return isNaN(r) ? "outstream" === d.deepAccess(e, "mediaTypes.".concat(u.d, ".context")) ? 203 : 201 : r
        }

        function j(e) {
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

        function k(r) {
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
            return Object.keys(n).forEach(function(e) {
                Object.prototype.toString.call(d.deepAccess(r, "mediaTypes.video." + e)) !== n[e] && (t = !1, d.logError("Rubicon Bid Adapter: mediaTypes.video." + e + " is required and must be of type: " + n[e]))
            }), t
        }
        var z = !1;
        Object(i.registerBidder)(s)
    }
}, [500]);
owpbjsChunk([82], {
    520: function(e, t, r) {
        e.exports = r(521)
    },
    521: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r.d(t, "sharethroughAdapterSpec", function() {
            return o
        });
        var n = r(1),
            s = "sharethrough",
            a = document.location.protocol + "//btlr.sharethrough.com/header-bid/v1",
            i = [1, 1],
            o = {
                code: s,
                isBidRequestValid: function(e) {
                    return !!e.params.pkey && e.bidder === s
                },
                buildRequests: function(e, n) {
                    return e.map(function(e) {
                        var t = {
                            placement_key: e.params.pkey,
                            bidId: e.bidId,
                            consent_required: !1,
                            instant_play_capable: function() {
                                var e = navigator.userAgent;
                                if (!e) return !1;
                                var t = /Android/i.test(e),
                                    r = /iPhone|iPad|iPod/i.test(e),
                                    n = parseInt((/Chrome\/([0-9]+)/.exec(e) || [0, 0])[1]),
                                    s = parseInt((/CriOS\/([0-9]+)/.exec(e) || [0, 0])[1]),
                                    a = parseInt((/Version\/([0-9]+)/.exec(e) || [0, 0])[1]);
                                return !!(t && 53 <= n || r && (10 <= a || 53 <= s) || !t && !r)
                            }(),
                            hbSource: "prebid",
                            hbVersion: "2.22.0",
                            strVersion: "3.0.1"
                        };
                        n && n.gdprConsent && n.gdprConsent.consentString && (t.consent_string = n.gdprConsent.consentString), n && n.gdprConsent && (t.consent_required = !!n.gdprConsent.gdprApplies), e.userId && e.userId.tdid && (t.ttduid = e.userId.tdid);
                        var r = {
                            stayInIframe: e.params.iframe,
                            iframeSize: e.params.iframeSize,
                            sizes: e.sizes
                        };
                        return {
                            method: "GET",
                            url: a,
                            data: t,
                            strData: r
                        }
                    })
                },
                interpretResponse: function(e, t) {
                    var r = e.body;
                    if (!r || !r.creatives || !r.creatives.length) return [];
                    var n = r.creatives[0],
                        s = i;
                    return (t.strData.iframeSize || t.strData.sizes.length) && (s = null != t.strData.iframeSize ? t.strData.iframeSize : function(e) {
                        function r(e) {
                            return e[0] * e[1]
                        }
                        return e.reduce(function(e, t) {
                            return r(t) > r(e) ? t : e
                        })
                    }(t.strData.sizes)), [{
                        requestId: t.data.bidId,
                        width: s[0],
                        height: s[1],
                        cpm: n.cpm,
                        creativeId: n.creative.creative_key,
                        dealId: n.creative.deal_id,
                        currency: "USD",
                        netRevenue: !0,
                        ttl: 360,
                        ad: function(e, t) {
                            var r = "str_response_".concat(t.data.bidId),
                                n = '\n    <div data-str-native-key="'.concat(t.data.placement_key, '" data-stx-response-name="').concat(r, '">\n    </div>\n    <script>var ').concat(r, ' = "').concat(function(e) {
                                    return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(e, t) {
                                        return String.fromCharCode("0x" + t)
                                    }))
                                }(JSON.stringify(e)), '"<\/script>\n  ');
                            t.strData.stayInIframe ? n += '<script src="//native.sharethrough.com/assets/sfp.js"><\/script>' : n += "\n      <script src=\"//native.sharethrough.com/assets/sfp-set-targeting.js\"><\/script>\n      <script>\n        (function() {\n          if (!(window.STR && window.STR.Tag) && !(window.top.STR && window.top.STR.Tag)) {\n            var sfp_js = document.createElement('script');\n            sfp_js.src = \"//native.sharethrough.com/assets/sfp.js\";\n            sfp_js.type = 'text/javascript';\n            sfp_js.charset = 'utf-8';\n            try {\n                window.top.document.getElementsByTagName('body')[0].appendChild(sfp_js);\n            } catch (e) {\n              console.log(e);\n            }\n          }\n        })()\n    <\/script>";
                            return n
                        }(r, t)
                    }]
                },
                getUserSyncs: function(e, t) {
                    var r = [];
                    return e.pixelEnabled && 0 < t.length && t[0].body && t[0].body.cookieSyncUrls && t[0].body.cookieSyncUrls.forEach(function(e) {
                        r.push({
                            type: "image",
                            url: e
                        })
                    }), r
                }
            };
        Object(n.registerBidder)(o)
    }
}, [520]);
owpbjsChunk([73], {
    546: function(r, e, t) {
        r.exports = t(547)
    },
    547: function(r, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), t.d(e, "spec", function() {
            return d
        }), t.d(e, "LogError", function() {
            return u
        });
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
                        o._each(e, function(r) {
                            i = i || o.getBidIdParameter("iv", r.params), r.sizes = o.isArray(r.sizes) && o.isArray(r.sizes[0]) ? r.sizes : [r.sizes], r.sizes = r.sizes.filter(function(r) {
                                return o.isArray(r)
                            });
                            var e = r.sizes.map(function(r) {
                                return {
                                    w: parseInt(r[0], 10),
                                    h: parseInt(r[1], 10)
                                }
                            });
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
                        });
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
                        var s = "//ap.lijit.com/rtb/bid?src=prebid_prebid_2.22.0";
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
                        return t && i && 0 < i.length && i[0].bid && 0 < i[0].bid.length && i[0].bid.map(function(r) {
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
                        }), n
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
                            var n = r.filter(function(r) {
                                    return r.body && r.body.ext && r.body.ext.iid
                                }).map(function(r) {
                                    return r.body.ext.iid
                                }),
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
            u = function() {
                function t(r, e) {
                    ! function(r, e) {
                        if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), o.logError(r), this.error = {}, this.error.t = o.timestamp(), this.error.m = r.message, this.error.s = r.stack, this.error.d = e, this.error.v = "prebid_prebid_2.22.0", this.error.u = o.getTopWindowLocation().href, this.error.ua = navigator.userAgent
                }
                return function(r, e, t) {
                    e && n(r.prototype, e), t && n(r, t)
                }(t, [{
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
            }();
        Object(i.registerBidder)(d)
    }
}, [546]);
owpbjsChunk([69], {
    556: function(e, r, n) {
        e.exports = n(557)
    },
    557: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n.d(r, "spec", function() {
            return c
        });
        var o = n(0),
            t = n(1),
            m = n(2),
            a = n(9),
            l = n.n(a);

        function b(e, r) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, r) {
                var n = [],
                    t = !0,
                    a = !1,
                    o = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(t = (i = c.next()).done) && (n.push(i.value), !r || n.length !== r); t = !0);
                } catch (e) {
                    a = !0, o = e
                } finally {
                    try {
                        t || null == c.return || c.return()
                    } finally {
                        if (a) throw o
                    }
                }
                return n
            }(e, r) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var f = ["minduration", "maxduration"],
            c = {
                code: "synacormedia",
                supportedMediaTypes: [m.b, m.d],
                sizeMap: {},
                isVideoBid: function(e) {
                    return void 0 !== e.mediaTypes && e.mediaTypes.hasOwnProperty("video")
                },
                isBidRequestValid: function(e) {
                    return !!(e && e.params && e.params.placementId && e.params.seatId)
                },
                buildRequests: function(e, r) {
                    var n = this;
                    if (e && e.length && r) {
                        var t = r.refererInfo,
                            p = {
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
                            a = null;
                        return e.forEach(function(i, e) {
                            if (a && a !== i.params.seatId) Object(o.logWarn)("Synacormedia: there is an inconsistent seatId: ".concat(i.params.seatId, " but only sending bid requests for ").concat(a, ", you should double check your configuration"));
                            else {
                                a = i.params.seatId;
                                var c = i.params.placementId,
                                    s = i.params.bidfloor ? parseFloat(i.params.bidfloor) : null;
                                isNaN(s) && Object(o.logWarn)("Synacormedia: there is an invalid bid floor: ".concat(i.params.bidfloor));
                                var d = parseInt(i.params.pos);
                                isNaN(d) && (Object(o.logWarn)("Synacormedia: there is an invalid POS: ".concat(i.params.pos)), d = 0);
                                var u = n.isVideoBid(i) ? "video" : "banner";
                                Object(o.getAdUnitSizes)(i).forEach(function(e, r) {
                                    if (e && 2 == e.length) {
                                        var n = e[0],
                                            t = e[1],
                                            a = {
                                                id: "".concat(u.substring(0, 1)).concat(i.bidId, "-").concat(n, "x").concat(t),
                                                tagid: c
                                            };
                                        null === s || isNaN(s) || (a.bidfloor = s);
                                        var o = {
                                            w: n,
                                            h: t,
                                            pos: d
                                        };
                                        "video" === u && i.params.video && Object.keys(i.params.video).filter(function(e) {
                                            return l()(f, e) && !isNaN(parseInt(i.params.video[e], 10))
                                        }).forEach(function(e) {
                                            return o[e] = parseInt(i.params.video[e], 10)
                                        }), a[u] = o, p.imp.push(a)
                                    }
                                })
                            }
                        }), p.imp.length && a ? {
                            method: "POST",
                            url: "".concat("//prebid.technoratimedia.com", "/openrtb/bids/").concat(a, "?src=prebid_prebid_2.22.0"),
                            data: p,
                            options: {
                                contentType: "application/json",
                                withCredentials: !0
                            }
                        } : void 0
                    }
                },
                interpretResponse: function(e) {
                    function l(e, r) {
                        return r ? r.replace(/\${AUCTION_PRICE}/g, e.price) : r
                    }
                    if (e.body && "object" == i(e.body)) {
                        var r = e.body,
                            n = r.id,
                            t = r.seatbid,
                            f = [];
                        return n && t && t.forEach(function(p) {
                            p.bid.forEach(function(e) {
                                var r = l(e, e.adm),
                                    n = l(e, e.nurl),
                                    t = b(e.impid.match(/^([vb])(.*)-(.*)x(.*)$/), 5),
                                    a = t[1],
                                    o = t[2],
                                    i = t[3],
                                    c = t[4],
                                    s = "v" == a,
                                    d = {
                                        requestId: o,
                                        adId: e.id.replace(/~/g, "-"),
                                        cpm: parseFloat(e.price),
                                        width: parseInt(i, 10),
                                        height: parseInt(c, 10),
                                        creativeId: "".concat(p.seat, "_").concat(e.crid),
                                        currency: "USD",
                                        netRevenue: !0,
                                        mediaType: s ? m.d : m.b,
                                        ad: r,
                                        ttl: 60
                                    };
                                if (s) {
                                    var u = b(n.match(/ID=([^&]*)&?/), 2)[1];
                                    d.videoCacheKey = encodeURIComponent(u), d.vastUrl = n
                                }
                                f.push(d)
                            })
                        }), f
                    }
                    Object(o.logWarn)("Synacormedia: server returned empty/non-json response: " + JSON.stringify(e.body))
                },
                getUserSyncs: function(e, r) {
                    var n = [];
                    return e.iframeEnabled ? n.push({
                        type: "iframe",
                        url: "".concat("//ad-cdn.technoratimedia.com", "/html/usersync.html?src=prebid_prebid_2.22.0")
                    }) : Object(o.logWarn)("Synacormedia: Please enable iframe based user sync."), n
                }
            };
        Object(t.registerBidder)(c)
    }
}, [556]);
owpbjs.processQueue();
!(function(e) {
    function t(n) {
        if (i[n]) return i[n].exports;
        var r = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    var i = {};
    return t.m = e, t.c = i, t.p = "", t(0)
})([(function(e, t, i) {
    var n = i(1),
        r = i(10),
        o = i(6),
        a = i(4),
        s = n.getMetaInfo(window);
    window.PWT = window.PWT || {}, window.PWT.bidMap = window.PWT.bidMap || {}, window.PWT.bidIdMap = window.PWT.bidIdMap || {}, window.PWT.isIframe = window.PWT.isIframe || s.isInIframe, window.PWT.protocol = window.PWT.protocol || s.protocol, window.PWT.secure = window.PWT.secure || s.secure, window.PWT.pageURL = window.PWT.pageURL || s.pageURL, window.PWT.refURL = window.PWT.refURL || s.refURL, window.PWT.isSafeFrame = window.PWT.isSafeFrame || !1, window.PWT.safeFrameMessageListenerAdded = window.PWT.safeFrameMessageListenerAdded || !1, window.PWT.udpv = window.PWT.udpv || n.findQueryParamInURL(s.isIframe ? s.refURL : s.pageURL, "pwtv"), n.findQueryParamInURL(s.isIframe ? s.refURL : s.pageURL, "pwtc") && n.enableDebugLog(), n.findQueryParamInURL(s.isIframe ? s.refURL : s.pageURL, "pwtvc") && n.enableVisualDebugLog(), window.PWT.displayCreative = function(e, t) {
        n.log("In displayCreative for: " + t), o.displayCreative(e, t)
    }, window.PWT.displayPMPCreative = function(e, t, i) {
        n.log("In displayPMPCreative for: " + t);
        var r = n.getBididForPMP(t, i);
        r && o.displayCreative(e, r)
    }, window.PWT.sfDisplayCreative = function(e, t) {
        n.log("In sfDisplayCreative for: " + t), this.isSafeFrame = !0, window.parent.postMessage(JSON.stringify({
            pwt_type: "1",
            pwt_bidID: t,
            pwt_origin: window.location.protocol + "//" + window.location.hostname
        }), "*")
    }, window.PWT.sfDisplayPMPCreative = function(e, t, i) {
        n.log("In sfDisplayPMPCreative for: " + t), this.isSafeFrame = !0, window.parent.postMessage(JSON.stringify({
            pwt_type: "1",
            pwt_bidID: n.getBididForPMP(t, i),
            pwt_origin: window.location.protocol + "//" + window.location.hostname
        }), "*")
    }, window.PWT.initNativeTrackers = function(e, t) {
        n.log("In startTrackers for: " + t), n.addEventListenerForClass(window, "click", a.COMMON.OW_CLICK_NATIVE, o.loadTrackers), o.executeTracker(t)
    }, window.OWT = {
        notifyCount: 0,
        externalBidderStatuses: {}
    }, window.OWT.registerExternalBidders = function(e) {
        return window.OWT.notifyCount++, n.forEachOnArray(e, (function(e, t) {
            n.log("registerExternalBidders: " + t), window.OWT.externalBidderStatuses[t] = {
                id: window.OWT.notifyCount,
                status: !1
            }
        })), window.OWT.notifyCount
    }, window.OWT.notifyExternalBiddingComplete = function(e) {
        n.forEachOnObject(window.OWT.externalBidderStatuses, (function(t, i) {
            i && i.id === e && (n.log("notify externalBidding complete: " + t), window.OWT.externalBidderStatuses[t] = {
                id: i.id,
                status: !0
            })
        }))
    }, r.init(window)
}), (function(e, t, i) {
    function n(e, t) {
        return g.call(e) === "[object " + t + "]"
    }
    var r = i(2),
        o = i(4),
        a = i(5),
        s = i(6),
        d = !1;
    t.debugLogIsEnabled = d;
    var l = !1;
    t.visualDebugLogIsEnabled = l;
    var u = "Array",
        c = "String",
        p = "Function",
        _ = "Number",
        g = Object.prototype.toString,
        f = this;
    t.isA = n, t.isFunction = function(e) {
        return f.isA(e, p)
    }, t.isString = function(e) {
        return f.isA(e, c)
    }, t.isArray = function(e) {
        return f.isA(e, u)
    }, t.isNumber = function(e) {
        return f.isA(e, _)
    }, t.isObject = function(e) {
        return "object" == typeof e && null !== e
    }, t.isOwnProperty = function(e, t) {
        return e.hasOwnProperty ? e.hasOwnProperty(t) : !1
    }, t.isUndefined = function(e) {
        return "undefined" == typeof e
    }, t.enableDebugLog = function() {
        f.debugLogIsEnabled = !0
    }, t.isDebugLogEnabled = function() {
        return f.debugLogIsEnabled
    }, t.enableVisualDebugLog = function() {
        f.debugLogIsEnabled = !0, f.visualDebugLogIsEnabled = !0
    };
    var S = "[OpenWrap] : ",
        I = "[OpenWrap] : [Error]";
    t.log = function(e) {
        f.debugLogIsEnabled && console && this.isFunction(console.log) && (this.isString(e) ? console.log((new Date).getTime() + " : " + S + e) : console.log(e))
    }, t.error = function(e) {
        console.log((new Date).getTime() + " : " + I, e)
    }, t.getCurrentTimestampInMs = function() {
        var e = new window.Date;
        return e.getTime()
    }, t.getCurrentTimestamp = function() {
        var e = new Date;
        return Math.round(e.getTime() / 1e3)
    };
    var m = (function() {
        var e = 0;
        return function() {
            return e++, e
        }
    })();
    t.utilGetIncrementalInteger = m, t.getUniqueIdentifierStr = function() {
        return m() + window.Math.random().toString(16).substr(2)
    }, t.copyKeyValueObject = function(e, t) {
        if (f.isObject(e) && f.isObject(t)) {
            var i = f;
            f.forEachOnObject(t, (function(n, r) {
                if (t[n] = i.isArray(r) ? r : [r], i.isOwnProperty(e, n)) {
                    if (!f.isArray(e[n])) {
                        var o = e[n];
                        e[n] = [o]
                    }
                    e[n].push(r)
                } else e[n] = [r]
            }))
        }
    }, t.getIncrementalInteger = (function() {
        var e = 0;
        return function() {
            return e++, e
        }
    })(), t.generateUUID = function() {
        var e = (new window.Date).getTime(),
            t = window.decodeURIComponent(this.pageURL).toLowerCase().replace(/[^a-z,A-Z,0-9]/gi, ""),
            i = t.length,
            n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx-zzzzz".replace(/[xyz]/g, (function(n) {
                var r = (e + 16 * Math.random()) % 16 | 0;
                e = Math.floor(e / 16);
                var o;
                switch (n) {
                    case "x":
                        o = r;
                        break;
                    case "z":
                        o = t[Math.floor(Math.random() * i)];
                        break;
                    default:
                        o = 3 & r | 8
                }
                return o.toString(16)
            }));
        return n
    };
    var x = "g",
        T = new RegExp(o.MACROS.WIDTH, x),
        A = new RegExp(o.MACROS.HEIGHT, x),
        h = new RegExp(o.MACROS.AD_UNIT_ID, x),
        O = new RegExp(o.MACROS.AD_UNIT_INDEX, x),
        D = new RegExp(o.MACROS.INTEGER, x),
        E = new RegExp(o.MACROS.DIV, x);
    t.generateSlotNamesFromPattern = function(e, t) {
        var i, n, r, o, a = [],
            s = {};
        if (f.isObject(e) && f.isFunction(e.getSizes) && (n = e.getSizes(), r = n.length, r > 0))
            for (o = 0; r > o; o++) 2 == n[o].length && n[o][0] && n[o][1] && (i = t, i = i.replace(h, e.getAdUnitID()).replace(T, n[o][0]).replace(A, n[o][1]).replace(O, e.getAdUnitIndex()).replace(D, f.getIncrementalInteger()).replace(E, e.getDivID()), f.isOwnProperty(s, i) || (s[i] = "", a.push(i)));
        return a
    }, t.checkMandatoryParams = function(e, t, i) {
        var n = !1,
            r = !0;
        if (!e || !f.isObject(e) || f.isArray(e)) return f.log(i + "provided object is invalid."), n;
        if (!f.isArray(t)) return f.log(i + "provided keys must be in an array."), n;
        var o = t.length;
        if (0 == o) return r;
        for (var a = 0; o > a; a++)
            if (!f.isOwnProperty(e, t[a])) return f.log(i + ": " + t[a] + ", mandatory parameter not present."), n;
        return r
    }, t.forEachGeneratedKey = function(e, t, i, n, r, d, l, u, c, p) {
        var _, g, S, I, m, x = d.length;
        if (x > 0 && l.length > 3)
            for (m = l.indexOf(o.MACROS.WIDTH) >= 0 && l.indexOf(o.MACROS.HEIGHT) >= 0, _ = 0; x > _; _++) {
                var T = d[_];
                for (S = f.generateSlotNamesFromPattern(T, l), I = S.length, g = 0; I > g; g++) {
                    var A = S[g],
                        h = null,
                        O = !1,
                        D = T.getSizes();
                    if (null == u ? O = !0 : (h = u[A], h ? f.checkMandatoryParams(h, r, e) ? O = !0 : f.log(e + ": " + A + o.MESSAGES.M9) : f.log(e + ": " + A + o.MESSAGES.M8)), O) {
                        if (1 == p) {
                            var E = a.createBid(e, A);
                            E.setDefaultBidStatus(1).setReceivedTime(f.getCurrentTimestampInMs()), s.setBidFromBidder(T.getDivID(), E)
                        }
                        c(e, t, i, n, A, m, T, u ? u[A] : null, D[g][0], D[g][1])
                    }
                }
            }
    }, t.resizeWindow = function(e, t, i, n) {
        if (i && t) try {
            var r = e.defaultView.frameElement,
                o = [];
            if (n) {
                var a = document.getElementById(n),
                    s = a.querySelector("div");
                o.push(s), o.push(s.querySelector("iframe")), r = a.querySelector("iframe")
            }
            o.push(r), o.forEach((function(e) {
                e && (e.width = "" + t, e.height = "" + i, e.style.width = "" + t + "px", e.style.height = "" + i + "px")
            }))
        } catch (d) {
            f.log("Creative-Resize; Error in resizing creative")
        }
    }, t.writeIframe = function(e, t, i, n, r) {
        e.write('<iframe frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" scrolling="no" width="' + i + '" hspace="0" vspace="0" height="' + n + '"' + (r ? ' style="' + r + '"' : "") + ' src="' + t + '"></iframe>')
    }, t.displayCreative = function(e, t) {
        f.resizeWindow(e, t.width, t.height), t.adHtml ? e.write(t.adHtml) : t.adUrl ? f.writeIframe(e, t.adUrl, t.width, t.height, "") : (f.log("creative details are not found"), f.log(t))
    }, t.getScreenWidth = function(e) {
        var t = -1;
        return e.innerHeight ? t = e.innerWidth : e.document && e.document.documentElement && e.document.documentElement.clientWidth ? t = e.document.documentElement.clientWidth : e.document.body && (t = e.document.body.clientWidth), t
    }, t.getScreenHeight = function(e) {
        var t = -1;
        return e.innerHeight ? t = e.innerHeight : e.document && e.document.documentElement && e.document.documentElement.clientHeight ? t = e.document.documentElement.clientHeight : e.document.body && (t = e.document.body.clientHeight), t
    }, t.forEachOnObject = function(e, t) {
        if (f.isObject(e) && f.isFunction(t))
            for (var i in e) f.isOwnProperty(e, i) && t(i, e[i])
    }, t.forEachOnArray = function(e, t) {
        if (f.isArray(e) && f.isFunction(t))
            for (var i = 0, n = e.length; n > i; i++) t(i, e[i])
    }, t.trim = function(e) {
        return f.isString(e) ? e.replace(/^\s+/g, "").replace(/\s+$/g, "") : e
    }, t.getTopFrameOfSameDomain = function(e) {
        try {
            if (e.parent.document != e.document) return f.getTopFrameOfSameDomain(e.parent)
        } catch (t) {}
        return e
    }, t.metaInfo = {}, t.getMetaInfo = function(e) {
        var t, i = {},
            n = 512;
        i.pageURL = "", i.refURL = "", i.protocol = "https://", i.secure = 1, i.isInIframe = f.isIframe(e);
        try {
            t = f.getTopFrameOfSameDomain(e), i.refURL = (t.refurl || t.document.referrer || "").substr(0, n), i.pageURL = (t !== window.top && "" != t.document.referrer ? t.document.referrer : t.location.href).substr(0, n), i.protocol = (function(e) {
                return "http:" === e.location.protocol ? (i.secure = 0, "http://") : (i.secure = 1, "https://")
            })(t)
        } catch (r) {}
        return f.metaInfo = i, i
    }, t.isIframe = function(e) {
        try {
            return e.self !== e.top
        } catch (t) {
            return !1
        }
    }, t.findInString = function(e, t) {
        return e.indexOf(t) >= 0
    }, t.findQueryParamInURL = function(e, t) {
        return f.isOwnProperty(f.parseQueryParams(e), t)
    }, t.parseQueryParams = function(e) {
        var t = f.createDocElement(window, "a");
        t.href = e;
        var i = {};
        if (t.search) {
            var n = t.search.replace("?", "");
            n = n.split("&"), f.forEachOnArray(n, (function(e, t) {
                var t = t.split("="),
                    n = t[0] || "",
                    r = t[1] || "";
                i[n] = r
            }))
        }
        return i
    }, t.createDocElement = function(e, t) {
        return e.document.createElement(t)
    }, t.addHookOnFunction = function(e, t, i, n) {
        var r = e;
        if (e = t ? e.__proto__ : e, f.isObject(e) && f.isFunction(e[i])) {
            var o = e[i];
            e[i] = n(r, o)
        } else f.log("in assignNewDefination: oldReference is not a function")
    }, t.getBididForPMP = function(e, t) {
        e = e.split(",");
        var i = e.length,
            n = t.length,
            r = "",
            a = "";
        if (0 == i) return this.log("Error: Unable to find bidID as values array is empty."), void 0;
        for (var s = 0; n > s; s++) {
            for (var d = 0; i > d; d++)
                if (e[d].indexOf(t[s]) >= 0) {
                    r = e[d];
                    break
                }
            if ("" != r) break
        }
        "" == r ? (r = e[0], this.log("No PMP-Deal was found matching PriorityArray, So Selecting first PMP-Deal: " + r)) : this.log("Selecting PMP-Deal: " + r);
        var l = r.split(o.COMMON.DEAL_KEY_VALUE_SEPARATOR);
        return 3 == l.length && (a = l[2]), a ? a : (this.log("Error: bidID not found in PMP-Deal: " + r), void 0)
    }, t.createInvisibleIframe = function() {
        var e = f.createDocElement(window, "iframe");
        return e.id = f.getUniqueIdentifierStr(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:self", e.style = "display:none", e
    }, t.addMessageEventListener = function(e, t) {
        return "function" != typeof t ? (f.log("EventHandler should be a function"), !1) : (e.addEventListener ? e.addEventListener("message", t, !1) : e.attachEvent("onmessage", t), !0)
    }, t.safeFrameCommunicationProtocol = function(e) {
        try {
            if (msgData = window.JSON.parse(e.data), !msgData.pwt_type) return;
            switch (window.parseInt(msgData.pwt_type)) {
                case 1:
                    if (window.PWT.isSafeFrame) return;
                    var t = s.getBidById(msgData.pwt_bidID);
                    if (t) {
                        var i = t.bid,
                            n = i.getAdapterID(),
                            r = t.slotid,
                            o = {
                                pwt_type: 2,
                                pwt_bid: i
                            };
                        f.vLogInfo(r, {
                            type: "disp",
                            adapter: n
                        }), s.executeMonetizationPixel(r, i), f.resizeWindow(window.document, i.width, i.height, r), e.source.postMessage(window.JSON.stringify(o), msgData.pwt_origin)
                    }
                    break;
                case 2:
                    if (!window.PWT.isSafeFrame) return;
                    if (msgData.pwt_bid) {
                        var i = msgData.pwt_bid;
                        if (i.adHtml) try {
                            var a = f.createInvisibleIframe(window.document);
                            if (!a) throw {
                                message: "Failed to create invisible frame.",
                                name: ""
                            };
                            if (a.setAttribute("width", i.width), a.setAttribute("height", i.height), a.style = "", window.document.body.appendChild(a), !a.contentWindow) throw {
                                message: "Unable to access frame window.",
                                name: ""
                            };
                            var d = a.contentWindow.document;
                            if (!d) throw {
                                message: "Unable to access frame window document.",
                                name: ""
                            };
                            var l = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;</script></head>';
                            l += "<body>", l += "<script>var $sf = window.parent.$sf;</script>", l += "<script>setInterval(function(){try{var fr = window.document.defaultView.frameElement;fr.width = window.parent.document.defaultView.innerWidth;fr.height = window.parent.document.defaultView.innerHeight;}catch(e){}}, 200);</script>", l += i.adHtml, l += "</body></html>", d.write(l), d.close()
                        } catch (u) {
                            f.log("Error in rendering creative in safe frame."), f.log(u), f.log("Rendering synchronously."), f.displayCreative(window.document, msgData.pwt_bid)
                        } else i.adUrl ? f.writeIframe(window.document, i.adUrl, i.width, i.height, "") : (f.log("creative details are not found"), f.log(i))
                    }
                    break;
                case 3:
                    var t = s.getBidById(msgData.pwt_bidID);
                    if (t) {
                        var i = t.bid,
                            n = i.getAdapterID(),
                            r = t.slotid;
                        f.vLogInfo(r, {
                            type: "disp",
                            adapter: n
                        }), msgData.pwt_action && "imptrackers" == msgData.pwt_action && s.executeMonetizationPixel(r, i), s.fireTracker(i, msgData.pwt_action)
                    }
            }
        } catch (u) {}
    }, t.addMessageEventListenerForSafeFrame = function(e) {
        f.addMessageEventListener(e, f.safeFrameCommunicationProtocol)
    }, t.getElementLocation = function(e) {
        var t, i = 0,
            n = 0;
        if (f.isFunction(e.getBoundingClientRect)) t = e.getBoundingClientRect(), i = Math.floor(t.left), n = Math.floor(t.top);
        else
            for (; e;) i += e.offsetLeft, n += e.offsetTop, e = e.offsetParent;
        return {
            x: i,
            y: n
        }
    }, t.createVLogInfoPanel = function(e, t) {
        var i, n, r, o = window.document;
        if (f.visualDebugLogIsEnabled && (i = o.getElementById(e), i && t.length && t[0][0] && t[0][1] && (r = e + "-pwtc-info", !f.isUndefined(o.getElementById(r))))) {
            var a = f.getElementLocation(i);
            n = o.createElement("div"), n.id = r, n.style = "position: absolute; /*top: " + a.y + "px;*/ left: " + a.x + "px; width: " + t[0][0] + "px; height: " + t[0][1] + "px; border: 1px solid rgb(255, 204, 52); padding-left: 11px; background: rgb(247, 248, 224) none repeat scroll 0% 0%; overflow: auto; z-index: 9999997; visibility: hidden;opacity:0.9;font-size:13px;font-family:monospace;";
            var s = o.createElement("img");
            s.src = f.metaInfo.protocol + "ads.pubmatic.com/AdServer/js/pwt/close.png", s.style = "cursor:pointer; position: absolute; top: 2px; left: " + (a.x + t[0][0] - 16 - 15) + "px; z-index: 9999998;", s.title = "close", s.onclick = function() {
                n.style.display = "none"
            }, n.appendChild(s), n.appendChild(o.createElement("br"));
            for (var d = "Slot: " + e + " | ", l = 0; l < t.length; l++) d += (0 != l ? ", " : "") + t[l][0] + "x" + t[l][1];
            n.appendChild(o.createTextNode(d)), n.appendChild(o.createElement("br")), i.parentNode.insertBefore(n, i)
        }
    }, t.realignVLogInfoPanel = function(e) {
        var t, i, n, r = window.document;
        if (f.visualDebugLogIsEnabled && (t = r.getElementById(e), t && (n = e + "-pwtc-info", i = r.getElementById(n)))) {
            var o = f.getElementLocation(t);
            i.style.visibility = "visible", i.style.left = o.x + "px", i.style.height = t.clientHeight + "px"
        }
    }, t.vLogInfo = function(e, t) {
        var i, n, r = window.document;
        if (f.visualDebugLogIsEnabled) {
            var o = e + "-pwtc-info";
            if (i = r.getElementById(o)) {
                switch (t.type) {
                    case "bid":
                        var a = t.latency,
                            s = t.bidDetails,
                            d = "";
                        0 > a && (a = 0), d = t.hasOwnProperty("adServerCurrency") && void 0 !== t.adServerCurrency ? 0 == t.adServerCurrency ? "USD" : t.adServerCurrency : "USD", n = "Bid: " + t.bidder + (t.s2s ? "(s2s)" : "") + ": " + s.getNetEcpm() + "(" + s.getGrossEcpm() + ")" + d + " :" + a + "ms", s.getPostTimeoutStatus() && (n += ": POST-TIMEOUT");
                        break;
                    case "win-bid":
                        var s = t.bidDetails,
                            d = "";
                        d = t.hasOwnProperty("adServerCurrency") && void 0 !== t.adServerCurrency ? 0 == t.adServerCurrency ? "USD" : t.adServerCurrency : "USD", n = "Winning Bid: " + s.getAdapterID() + ": " + s.getNetEcpm() + d;
                        break;
                    case "win-bid-fail":
                        n = "There are no bids from PWT";
                        break;
                    case "hr":
                        n = "----------------------";
                        break;
                    case "disp":
                        n = "Displaying creative from " + t.adapter
                }
                i.appendChild(r.createTextNode(n)), i.appendChild(r.createElement("br"))
            }
        }
    }, t.getExternalBidderStatus = function(e) {
        var t = !0;
        return f.forEachOnArray(e, (function(e, i) {
            t = window.OWT.externalBidderStatuses[i] ? t && window.OWT.externalBidderStatuses[i].status : t
        })), t
    }, t.resetExternalBidderStatus = function(e) {
        f.forEachOnArray(e, (function(e, t) {
            f.log("resetExternalBidderStatus: " + t), window.OWT.externalBidderStatuses[t] = void 0
        }))
    }, t.ajaxRequest = function(e, t, i, n) {
        try {
            n = n || {};
            var r, o = 4,
                a = !0,
                s = n.method || (i ? "POST" : "GET");
            if (window.XMLHttpRequest ? (r = new window.XMLHttpRequest, f.isUndefined(r.responseType) && (a = !1)) : a = !1, !a) return f.log("Ajax is not supported"), void 0;
            r.onreadystatechange = function() {
                r.readyState === o && t && t(r.responseText, r)
            }, r.open(s, e), n.withCredentials && (r.withCredentials = !0), n.preflight && r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.setRequestHeader("Content-Type", n.contentType || "text/plain"), r.send("POST" === s && i)
        } catch (d) {
            f.log("Failed in Ajax"), f.log(d)
        }
    }, t.getMediaTypeObject = function(e, t, i) {
        var n = {};
        if (e && e.kgp && e.klm) {
            var r = e.kgp,
                a = e.klm,
                s = f.generateSlotNamesFromPattern(i, r)[0];
            if (f.isOwnProperty(a, s)) {
                f.log("Native Config found for adSlot: " + i);
                var d = a[s];
                if (n["native"] = d.config, d[o.COMMON.NATIVE_ONLY]) return n
            } else f.log("Native Config not found for adSlot: " + i)
        } else f.log("Native config not found or KGP/KLM missing in native config provided.");
        return n.banner = {
            sizes: t
        }, n
    }, t.addEventListenerForClass = function(e, t, i, n) {
        if ("function" != typeof n) return f.log("EventHandler should be a function"), !1;
        var r = f.findElementsByClass(e, i);
        e.addEventListener || (t = "on" + t);
        for (var o = 0; o < r.length; o++) r[o].addEventListener(t, n, !0);
        return !0
    }, t.findElementsByClass = function(e, t) {
        return e.document.getElementsByClassName(t) || []
    }, t.getBidFromEvent = function(e) {
        return e && e.target && e.target.attributes && e.target.attributes[o.COMMON.BID_ID] && e.target.attributes[o.COMMON.BID_ID].value || ""
    }, t.getAdFormatFromBidAd = function(e) {
        var t = void 0;
        if (e && f.isString(e)) try {
            var i = JSON.parse(e.replace(/\\/g, ""));
            i && i.native && (t = o.FORMAT_VALUES.NATIVE)
        } catch (n) {
            t = o.FORMAT_VALUES.BANNER
        }
        return t
    }, t.handleHook = function(e, t) {
        f.isFunction(window.PWT[e]) ? window.PWT[e].apply(window.PWT, t) : f.log("Hook-name: " + e + ", window.PWT." + e + " is not a function.")
    }, t.getCurrencyToDisplay = function() {
        var e = r.getAdServerCurrency();
        if (0 == e && (e = "USD"), r.getAdServerCurrency() && window[o.COMMON.PREBID_NAMESPACE] && f.isFunction(window[o.COMMON.PREBID_NAMESPACE].getConfig)) {
            var t = window[o.COMMON.PREBID_NAMESPACE].getConfig();
            if (t && t.currency && t.currency.adServerCurrency) return t.currency.adServerCurrency
        }
        return e
    }
}), (function(e, t, i) {
    function n() {
        var e = o.COMMON.PARENT_ADAPTER_PREBID;
        if (!a.isOwnProperty(r.adapters, e)) {
            var t = {};
            t[o.CONFIG.REV_SHARE] = "0.0", t[o.CONFIG.THROTTLE] = "100", t[o.CONFIG.KEY_GENERATION_PATTERN] = "_DIV_", t[o.CONFIG.KEY_LOOKUP_MAP] = {}, r.adapters[e] = t
        }
    }
    var r = i(3),
        o = i(4),
        a = i(1),
        s = null;
    s = this, t.getPublisherId = function() {
        return a.trim(r.pwt.pubid) || "0"
    }, t.getMataDataPattern = function() {
        return a.isString(r[o.CONFIG.COMMON][o.CONFIG.META_DATA_PATTERN]) ? r[o.CONFIG.COMMON][o.CONFIG.META_DATA_PATTERN] : null
    }, t.getSendAllBidsStatus = function() {
        return window.parseInt(r[o.CONFIG.COMMON][o.CONFIG.SEND_ALL_BIDS]) || 0
    }, t.getTimeout = function() {
        return window.parseInt(r.pwt.t) || 1e3
    }, t.getDisableAjaxTimeout = function() {
        var e = r.pwt;
        return a.isOwnProperty(e, o.CONFIG.DISABLE_AJAX_TIMEOUT) ? 1 == r.pwt.disableAjaxTimeout : !0
    }, t.getAdapterRevShare = function(e) {
        var t = r.adapters;
        return a.isOwnProperty(t[e], o.CONFIG.REV_SHARE) ? 1 - window.parseFloat(t[e][o.CONFIG.REV_SHARE]) / 100 : 1
    }, t.getAdapterThrottle = function(e) {
        var t = r.adapters;
        return a.isOwnProperty(t[e], o.CONFIG.THROTTLE) ? 100 - window.parseFloat(t[e][o.CONFIG.THROTTLE]) : 0
    }, t.isServerSideAdapter = function(e) {
        var t = r.adapters;
        return t[e] && a.isOwnProperty(t[e], o.CONFIG.SERVER_SIDE_ENABLED) ? 1 === window.parseInt(t[e][o.CONFIG.SERVER_SIDE_ENABLED]) : !1
    }, t.getAdapterMaskBidsStatus = function(e) {
        var t = r.adapters,
            i = {
                audienceNetwork: 1
            };
        return a.isOwnProperty(i, e) ? i[e] : a.isOwnProperty(t[e], o.CONFIG.MASK_BIDS) ? window.parseInt(t[e][o.CONFIG.MASK_BIDS]) || 0 : 0
    }, t.getBidPassThroughStatus = function(e) {
        var t = r.adapters;
        return a.isOwnProperty(t[e], o.CONFIG.BID_PASS_THROUGH) ? window.parseInt(t[e][o.CONFIG.BID_PASS_THROUGH]) : 0
    }, t.getProfileID = function() {
        return a.trim(r.pwt[o.CONFIG.PROFILE_ID]) || "0"
    }, t.getProfileDisplayVersionID = function() {
        return a.trim(r.pwt[o.CONFIG.PROFILE_VERSION_ID]) || "0"
    }, t.getAnalyticsPixelURL = function() {
        return r.pwt[o.CONFIG.LOGGER_URL] || !1
    }, t.getMonetizationPixelURL = function() {
        return r.pwt[o.CONFIG.TRACKER_URL] || !1
    }, t.forEachAdapter = function(e) {
        a.forEachOnObject(r.adapters, e)
    }, t.getGdpr = function() {
        var e = r[o.CONFIG.COMMON][o.CONFIG.GDPR_CONSENT] || o.CONFIG.DEFAULT_GDPR_CONSENT;
        return "1" === e
    }, t.getCmpApi = function() {
        return r[o.CONFIG.COMMON][o.CONFIG.GDPR_CMPAPI] || o.CONFIG.DEFAULT_GDPR_CMPAPI
    }, t.getGdprTimeout = function() {
        var e = r[o.CONFIG.COMMON][o.CONFIG.GDPR_TIMEOUT];
        return e ? window.parseInt(e) : o.CONFIG.DEFAULT_GDPR_TIMEOUT
    }, t.getAwc = function() {
        var e = r[o.CONFIG.COMMON][o.CONFIG.GDPR_AWC] || o.CONFIG.DEFAULT_GDPR_AWC;
        return "1" === e
    }, t.addPrebidAdapter = n, t.initConfig = function() {
        s.addPrebidAdapter();
        var e = {};
        a.forEachOnObject(o.CONFIG, (function(t, i) {
            e[i] = ""
        })), a.forEachOnObject(r.adapters, (function(t, i) {
            var n = {};
            a.forEachOnObject(i, (function(t, i) {
                a.isOwnProperty(e, t) || (n[t] = i)
            })), a.forEachOnObject(i[o.CONFIG.KEY_LOOKUP_MAP], (function(e, t) {
                a.forEachOnObject(n, (function(e, i) {
                    t[e] = i
                }))
            }))
        }))
    }, t.getNativeConfiguration = function() {
        return r[o.COMMON.NATIVE_MEDIA_TYPE_CONFIG]
    }, t.getAdServerCurrency = function() {
        return r[o.CONFIG.COMMON][o.COMMON.AD_SERVER_CURRENCY]
    }, t.isSingleImpressionSettingEnabled = function() {
        return parseInt(r[o.CONFIG.COMMON][o.COMMON.SINGLE_IMPRESSION] || o.CONFIG.DEFAULT_SINGLE_IMPRESSION)
    }
}), (function(e, t) {
    t.pwt = {
        t: "1600",
        pid: "877",
        gcv: "86",
        pdvid: "48",
        pubid: "156796",
        dataURL: "t.pubmatic.com/wl?",
        winURL: "t.pubmatic.com/wt?",
        metaDataPattern: 0,
        sendAllBids: "1",
        adserver: "DFP",
        gdpr: "0",
        cmp: 0,
        gdprTimeout: 0,
        awc: 0,
        platform: "display",
        refreshInterval: 0,
        priceGranularity: 0,
        adServerCurrency: 0,
        singleImpression: "1"
    }, t.adapters = {
        sharethrough: {
            rev_share: "0.0",
            timeout: "1600",
            throttle: "100",
            kgp: "_AU_@_W_x_H_",
            klm: {
                "/1031683/UD_ROS_300x250_ATF_Flex@144x256": {
                    pkey: "8KvqdMp41dSFEj1sfxZGhzHf"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@192x256": {
                    pkey: "8KvqdMp41dSFEj1sfxZGhzHf"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@256x144": {
                    pkey: "8KvqdMp41dSFEj1sfxZGhzHf"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@256x256": {
                    pkey: "8KvqdMp41dSFEj1sfxZGhzHf"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@300x250": {
                    pkey: "8KvqdMp41dSFEj1sfxZGhzHf"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@336x280": {
                    pkey: "8KvqdMp41dSFEj1sfxZGhzHf"
                },
                "/1031683/UD_ROS_300x250_BTF_1@300x250": {
                    pkey: "mFNE5kqtaWKPxH19hCR2F7WT"
                },
                "/1031683/UD_ROS_300x250_BTF_2@300x250": {
                    pkey: "B3Bx4rNAuXWczSD4rnRKzcxh"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x250": {
                    pkey: "ZTYWHBnwn9tk9aDpf1iXFwR1"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x600": {
                    pkey: "ZTYWHBnwn9tk9aDpf1iXFwR1"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@468x60": {
                    pkey: "K91VER4v4EerL1wMdszftgUS"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@728x90": {
                    pkey: "K91VER4v4EerL1wMdszftgUS"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x250": {
                    pkey: "K91VER4v4EerL1wMdszftgUS"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x90": {
                    pkey: "K91VER4v4EerL1wMdszftgUS"
                }
            }
        },
        consumable: {
            rev_share: "0.0",
            timeout: "1600",
            throttle: "100",
            kgp: "_AU_@_W_x_H_",
            klm: {
                "/1031683/UD_ROS_300x250_ATF_Flex@144x256": {
                    unitName: "cnsmbl-audio-300x250-slider",
                    unitId: "3944",
                    zoneId: "188156",
                    siteId: "1032790",
                    networkId: "9969"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@192x256": {
                    unitName: "cnsmbl-audio-300x250-slider",
                    unitId: "3944",
                    zoneId: "188156",
                    siteId: "1032790",
                    networkId: "9969"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@256x144": {
                    unitName: "cnsmbl-audio-300x250-slider",
                    unitId: "3944",
                    zoneId: "188156",
                    siteId: "1032790",
                    networkId: "9969"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@256x256": {
                    unitName: "cnsmbl-audio-300x250-slider",
                    unitId: "3944",
                    zoneId: "188156",
                    siteId: "1032790",
                    networkId: "9969"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@300x250": {
                    unitName: "cnsmbl-audio-300x250-slider",
                    unitId: "3944",
                    zoneId: "188156",
                    siteId: "1032790",
                    networkId: "9969"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@336x280": {
                    unitName: "cnsmbl-audio-300x250-slider",
                    unitId: "3944",
                    zoneId: "188156",
                    siteId: "1032790",
                    networkId: "9969"
                },
                "/1031683/UD_ROS_300x250_BTF_1@300x250": {
                    unitName: "cnsmbl-audio-300x250-slider",
                    unitId: "3944",
                    zoneId: "188156",
                    siteId: "1032790",
                    networkId: "9969"
                },
                "/1031683/UD_ROS_300x250_BTF_2@300x250": {
                    unitName: "cnsmbl-audio-300x250-slider",
                    unitId: "3944",
                    zoneId: "188156",
                    siteId: "1032790",
                    networkId: "9969"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@160x600": {
                    unitName: "cnsmbl-audio-300x600",
                    unitId: "3941",
                    zoneId: "188155",
                    siteId: "1032790",
                    networkId: "9969"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x250": {
                    unitName: "cnsmbl-audio-300x600",
                    unitId: "3941",
                    zoneId: "188155",
                    siteId: "1032790",
                    networkId: "9969"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x600": {
                    unitName: "cnsmbl-audio-300x600",
                    unitId: "3941",
                    zoneId: "188155",
                    siteId: "1032790",
                    networkId: "9969"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@468x60": {
                    unitName: "cnsmbl-audio-728x90-slider",
                    unitId: "4026",
                    siteId: "1032790",
                    networkId: "9969"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@728x90": {
                    unitName: "cnsmbl-audio-728x90-slider",
                    unitId: "4026",
                    siteId: "1032790",
                    networkId: "9969"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x250": {
                    unitName: "cnsmbl-audio-728x90-slider",
                    unitId: "4026",
                    siteId: "1032790",
                    networkId: "9969"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x90": {
                    unitName: "cnsmbl-audio-728x90-slider",
                    unitId: "4026",
                    siteId: "1032790",
                    networkId: "9969"
                }
            }
        },
        medianet: {
            cid: "8CU4TR801",
            rev_share: "0.0",
            timeout: "1600",
            throttle: "100",
            kgp: "_AU_@_W_x_H_",
            klm: {
                "/1031683/UD_ROS_300x250_ATF_Flex@300x250": {
                    crid: "824564676",
                    bidfloor: "0"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@336x280": {
                    crid: "824564676",
                    bidfloor: "0"
                },
                "/1031683/UD_ROS_300x250_BTF_1@300x250": {
                    crid: "743351467",
                    bidfloor: "0"
                },
                "/1031683/UD_ROS_300x250_BTF_2@300x250": {
                    crid: "755175778",
                    bidfloor: "0"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@160x600": {
                    crid: "265546829",
                    bidfloor: "0"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x250": {
                    crid: "265546829",
                    bidfloor: "0"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x600": {
                    crid: "265546829",
                    bidfloor: "0"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@468x60": {
                    crid: "594483065",
                    bidfloor: "0"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@728x90": {
                    crid: "594483065",
                    bidfloor: "0"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x250": {
                    crid: "594483065",
                    bidfloor: "0"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x90": {
                    crid: "594483065",
                    bidfloor: "0"
                }
            }
        },
        rhythmone: {
            rev_share: "0.0",
            timeout: "1600",
            throttle: "100",
            kgp: "_AU_@_W_x_H_",
            klm: {
                "/1031683/UD_ROS_300x250_ATF_Flex@144x256": {
                    placementId: "74121"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@192x256": {
                    placementId: "74121"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@256x144": {
                    placementId: "74121"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@256x256": {
                    placementId: "74121"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@300x250": {
                    placementId: "74121"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@336x280": {
                    placementId: "74121"
                },
                "/1031683/UD_ROS_300x250_BTF_1@300x250": {
                    placementId: "74121"
                },
                "/1031683/UD_ROS_300x250_BTF_2@300x250": {
                    placementId: "74121"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@160x600": {
                    placementId: "74121"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x250": {
                    placementId: "74121"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x600": {
                    placementId: "74121"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@468x60": {
                    placementId: "74121"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@728x90": {
                    placementId: "74121"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x250": {
                    placementId: "74121"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x90": {
                    placementId: "74121"
                }
            }
        },
        audienceNetwork: {
            rev_share: "0.0",
            timeout: "1600",
            throttle: "100",
            serverSideEnabled: "0",
            "in-app": 0,
            kgp: "_AU_@_W_x_H_",
            klm: {
                "/1031683/UD_ROS_300x250_ATF_Flex@300x250": {
                    placementId: "865443720288578_865881733578110"
                },
                "/1031683/UD_ROS_300x250_BTF_1@300x250": {
                    placementId: "865443720288578_866574040175546"
                },
                "/1031683/UD_ROS_300x250_BTF_2@300x250": {
                    placementId: "865443720288578_1151757864990494"
                },
                "UD_ROS_300x250_ATF_Flex@300x250": {
                    placementId: "865443720288578_865881733578110"
                },
                "UD_ROS_300x250_BTF_1@300x250": {
                    placementId: "865443720288578_866574040175546"
                }
            }
        },
        synacormedia: {
            seatId: "urbandictionary",
            rev_share: "0.0",
            timeout: "1600",
            throttle: "100",
            kgp: "_AU_@_W_x_H_",
            klm: {
                "/1031683/UD_ROS_300x250_ATF_Flex@300x250": {
                    placementId: "83404",
                    pos: "1"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@336x280": {
                    placementId: "83404",
                    pos: "1"
                },
                "/1031683/UD_ROS_300x250_BTF_1@300x250": {
                    placementId: "83405",
                    pos: "2"
                },
                "/1031683/UD_ROS_300x250_BTF_2@300x250": {
                    placementId: "83406",
                    pos: "2"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@160x600": {
                    placementId: "83407",
                    pos: "1"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x250": {
                    placementId: "83407",
                    pos: "1"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x600": {
                    placementId: "83407",
                    pos: "1"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@468x60": {
                    placementId: "83408",
                    pos: "1"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@728x90": {
                    placementId: "83408",
                    pos: "1"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x250": {
                    placementId: "83408",
                    pos: "1"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x90": {
                    placementId: "83408",
                    pos: "1"
                }
            }
        },
        ix: {
            rev_share: "0.0",
            timeout: "1600",
            throttle: "100",
            pt: 0,
            serverSideEnabled: "0",
            "in-app": 0,
            amp: 0,
            kgp: "_AU_@_W_x_H_",
            klm: {
                "/1031683/UD_ROS_300x250_ATF_Flex@300x250": {
                    siteID: "191166",
                    id: "3"
                },
                "/1031683/UD_ROS_300x250_BTF_1@300x250": {
                    siteID: "198549",
                    id: "4"
                },
                "/1031683/UD_ROS_300x250_BTF_2@300x250": {
                    siteID: "198550",
                    id: "5"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@160x600": {
                    siteID: "191165",
                    id: "2"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x250": {
                    siteID: "191165",
                    id: "2"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x600": {
                    siteID: "191165",
                    id: "2"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@728x90": {
                    siteID: "191164",
                    id: "1"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x90": {
                    siteID: "191164",
                    id: "1"
                },
                "UD_ROS_300x250_ATF_Flex@300x250": {
                    siteID: "191166",
                    id: "3"
                },
                "UD_ROS_300x250_BTF_1@300x250": {
                    siteID: "198549",
                    id: "4"
                },
                "UD_ROS_300x250_BTF_2@300x250": {
                    siteID: "198550",
                    id: "5"
                },
                "UD_ROS_300x600_ATF_Flex@160x600": {
                    siteID: "191165",
                    id: "2"
                },
                "UD_ROS_300x600_ATF_Flex@300x250": {
                    siteID: "191165",
                    id: "2"
                },
                "UD_ROS_300x600_ATF_Flex@300x600": {
                    siteID: "191165",
                    id: "2"
                },
                "UD_ROS_728x90_ATF_Flex@728x90": {
                    siteID: "191164",
                    id: "1"
                },
                "UD_ROS_728x90_ATF_Flex@970x90": {
                    siteID: "191164",
                    id: "1"
                }
            }
        },
        sovrn: {
            throttle: "100",
            bidfloor: 0,
            timeout: "1600",
            rev_share: "0.0",
            serverSideEnabled: "0",
            amp: 0,
            "in-app": 0,
            kgp: "_AU_@_W_x_H_",
            klm: {
                "/1031683/UD_ROS_300x250_ATF_Flex@300x250": {
                    tagid: "589894"
                },
                "/1031683/UD_ROS_300x250_BTF_1@300x250": {
                    tagid: "589895"
                },
                "/1031683/UD_ROS_300x250_BTF_2@300x250": {
                    tagid: "589896"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@728x90": {
                    tagid: "589893"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x250": {
                    tagid: "589893"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x90": {
                    tagid: "589893"
                }
            }
        },
        appnexus: {
            rev_share: "0.0",
            timeout: "1600",
            throttle: "100",
            pt: 0,
            serverSideEnabled: "0",
            amp: 0,
            video: 0,
            "in-app": 0,
            kgp: "_AU_@_W_x_H_",
            klm: {
                "/1031683/AMP_300x250_ATF_Flex@300x250": {
                    placementId: "13945724"
                },
                "/1031683/AMP_300x250_BTF_1_Flex@300x250": {
                    placementId: "13945736"
                },
                "/1031683/AMP_300x250_BTF_2_Flex@300x250": {
                    placementId: "13945736"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@300x250": {
                    placementId: "10929440"
                },
                "/1031683/UD_ROS_300x250_BTF_1@300x250": {
                    placementId: "10929440"
                },
                "/1031683/UD_ROS_300x250_BTF_2@300x250": {
                    placementId: "10929440"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@160x600": {
                    placementId: "10929439"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x250": {
                    placementId: "10929439"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x600": {
                    placementId: "10929439"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@728x90": {
                    placementId: "10929438"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x250": {
                    placementId: "10929438"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x90": {
                    placementId: "10929438"
                },
                "UD_ROS_300x250_ATF_Flex@300x250": {
                    placementId: "10929440"
                },
                "UD_ROS_300x250_BTF_1@300x250": {
                    placementId: "10929440"
                },
                "UD_ROS_300x250_BTF_2@300x250": {
                    placementId: "10929440"
                },
                "UD_ROS_300x600_ATF_Flex@160x600": {
                    placementId: "10929439"
                },
                "UD_ROS_300x600_ATF_Flex@300x250": {
                    placementId: "10929439"
                },
                "UD_ROS_300x600_ATF_Flex@300x600": {
                    placementId: "10929439"
                },
                "UD_ROS_728x90_ATF_Flex@728x90": {
                    placementId: "10929438"
                },
                "UD_ROS_728x90_ATF_Flex@970x90": {
                    placementId: "10929438"
                }
            }
        },
        gumgum: {
            rev_share: "0.0",
            timeout: "1600",
            throttle: "100",
            kgp: "_AU_@_W_x_H_",
            klm: {
                "/1031683/UD_ROS_300x250_ATF_Flex@300x250": {
                    inSlot: "19919"
                },
                "/1031683/UD_ROS_300x250_BTF_1@300x250": {
                    inSlot: "19919"
                },
                "/1031683/UD_ROS_300x250_BTF_2@300x250": {
                    inSlot: "19919"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x250": {
                    inSlot: "19919"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x600": {
                    inSlot: "19920"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@728x90": {
                    inSlot: "19921"
                }
            }
        },
        rubicon: {
            accountId: "6317",
            rev_share: "0.0",
            timeout: "1600",
            throttle: "100",
            pt: 0,
            serverSideEnabled: "0",
            amp: 0,
            video: 0,
            "in-app": 0,
            kgp: "_AU_@_W_x_H_",
            klm: {
                "/1031683/UD_ROS_300x250_ATF_Flex@300x250": {
                    zoneId: "598142",
                    siteId: "126350",
                    position: "ATF"
                },
                "/1031683/UD_ROS_300x250_BTF_1@300x250": {
                    zoneId: "598142",
                    siteId: "126350",
                    position: "BTF"
                },
                "/1031683/UD_ROS_300x250_BTF_2@300x250": {
                    zoneId: "598142",
                    siteId: "126350",
                    position: "BTF"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@160x600": {
                    zoneId: "598142",
                    siteId: "126350",
                    position: "ATF"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x250": {
                    zoneId: "598142",
                    siteId: "126350",
                    position: "ATF"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x600": {
                    zoneId: "598142",
                    siteId: "126350",
                    position: "ATF"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@728x90": {
                    zoneId: "598142",
                    siteId: "126350",
                    position: "ATF"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x250": {
                    zoneId: "598142",
                    siteId: "126350",
                    position: "ATF"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x90": {
                    zoneId: "598142",
                    siteId: "126350",
                    position: "ATF"
                },
                "UD_ROS_300x250_ATF_Flex@300x250": {
                    zoneId: "598142",
                    siteId: "126350",
                    position: "ATF"
                },
                "UD_ROS_300x250_BTF_1@300x250": {
                    zoneId: "598142",
                    siteId: "126350",
                    position: "BTF"
                },
                "UD_ROS_300x250_BTF_2@300x250": {
                    zoneId: "598142",
                    siteId: "126350",
                    position: "BTF"
                },
                "UD_ROS_300x600_ATF_Flex@160x600": {
                    zoneId: "598142",
                    siteId: "126350",
                    position: "ATF"
                },
                "UD_ROS_300x600_ATF_Flex@300x250": {
                    zoneId: "598142",
                    siteId: "126350",
                    position: "ATF"
                },
                "UD_ROS_300x600_ATF_Flex@300x600": {
                    zoneId: "598142",
                    siteId: "126350",
                    position: "ATF"
                },
                "UD_ROS_728x90_ATF_Flex@728x90": {
                    zoneId: "598142",
                    siteId: "126350",
                    position: "ATF"
                },
                "UD_ROS_728x90_ATF_Flex@970x90": {
                    zoneId: "598142",
                    siteId: "126350",
                    position: "ATF"
                }
            }
        },
        districtmDMX: {
            rev_share: "0.0",
            timeout: "1600",
            throttle: "100",
            kgp: "_AU_@_W_x_H_",
            klm: {
                "/1031683/UD_ROS_300x250_ATF_Flex@144x256": {
                    dmxid: "245169",
                    memberid: "100807"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@192x256": {
                    dmxid: "245169",
                    memberid: "100807"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@256x144": {
                    dmxid: "245169",
                    memberid: "100807"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@256x256": {
                    dmxid: "245169",
                    memberid: "100807"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@300x250": {
                    dmxid: "245169",
                    memberid: "100807"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@336x280": {
                    dmxid: "245169",
                    memberid: "100807"
                },
                "/1031683/UD_ROS_300x250_BTF_1@300x250": {
                    dmxid: "245163",
                    memberid: "100807"
                },
                "/1031683/UD_ROS_300x250_BTF_2@300x250": {
                    dmxid: "245164",
                    memberid: "100807"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@160x600": {
                    dmxid: "245168",
                    memberid: "100807"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x250": {
                    dmxid: "245168",
                    memberid: "100807"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x600": {
                    dmxid: "245168",
                    memberid: "100807"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@468x60": {
                    dmxid: "154087",
                    memberid: "100807"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@728x90": {
                    dmxid: "154087",
                    memberid: "100807"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x250": {
                    dmxid: "154087",
                    memberid: "100807"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x90": {
                    dmxid: "154087",
                    memberid: "100807"
                }
            }
        },
        aol: {
            network: "11156.1",
            server: "adserver-us.adtech.advertising.com",
            rev_share: "0.0",
            timeout: "1600",
            throttle: "100",
            kgp: "_AU_@_W_x_H_",
            klm: {
                "/1031683/UD_ROS_300x250_ATF_Flex@300x250": {
                    sizeId: "300x250",
                    placement: "4624896"
                },
                "/1031683/UD_ROS_300x250_BTF_1@300x250": {
                    sizeId: "300x250",
                    placement: "4624896"
                },
                "/1031683/UD_ROS_300x250_BTF_2@300x250": {
                    sizeId: "300x250",
                    placement: "4624896"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@160x600": {
                    sizeId: "300x600",
                    placement: "4624895"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x250": {
                    sizeId: "300x600",
                    placement: "4624895"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x600": {
                    sizeId: "300x600",
                    placement: "4624895"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@728x90": {
                    sizeId: "728x90",
                    placement: "4624894"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x250": {
                    sizeId: "970x250",
                    placement: "4624897"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x90": {
                    sizeId: "728x90",
                    placement: "4624894"
                }
            }
        },
        emx_digital: {
            rev_share: "0.0",
            timeout: "1600",
            throttle: "100",
            kgp: "_AU_@_W_x_H_",
            klm: {
                "/1031683/AMP_300x250_ATF_Flex@300x250": {
                    tagid: "64065"
                },
                "/1031683/AMP_300x250_BTF_1_Flex@300x250": {
                    tagid: "64066"
                },
                "/1031683/AMP_300x250_BTF_2_Flex@300x250": {
                    tagid: "64067"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@300x250": {
                    tagid: "64060"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@160x600": {
                    tagid: "64059"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x250": {
                    tagid: "64069"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x600": {
                    tagid: "64061"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@728x90": {
                    tagid: "64062"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x250": {
                    tagid: "64068"
                }
            }
        },
        pubmatic: {
            publisherId: "156796",
            rev_share: "0.0",
            timeout: "1600",
            throttle: "100",
            pt: 0,
            serverSideEnabled: "0",
            amp: 0,
            video: 0,
            "in-app": 0,
            kgp: "_AU_@_W_x_H_:_AUI_",
            sk: "true"
        },
        districtm: {
            rev_share: "15.0",
            timeout: "1600",
            throttle: "100",
            serverSideEnabled: "0",
            amp: 0,
            video: 0,
            "in-app": 0,
            kgp: "_AU_@_W_x_H_",
            klm: {
                "/1031683/UD_ROS_300x250_ATF_Flex@144x256": {
                    placementId: "13930936"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@192x256": {
                    placementId: "13930936"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@256x144": {
                    placementId: "13930936"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@256x256": {
                    placementId: "13930936"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@300x250": {
                    placementId: "11400640"
                },
                "/1031683/UD_ROS_300x250_ATF_Flex@336x280": {
                    placementId: "13930936"
                },
                "/1031683/UD_ROS_300x250_BTF_1@300x250": {
                    placementId: "13930904"
                },
                "/1031683/UD_ROS_300x250_BTF_2@300x250": {
                    placementId: "13930905"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@160x600": {
                    placementId: "13930909"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x250": {
                    placementId: "13930909"
                },
                "/1031683/UD_ROS_300x600_ATF_Flex@300x600": {
                    placementId: "13930909"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@468x60": {
                    placementId: "11400639"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@728x90": {
                    placementId: "11400639"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x250": {
                    placementId: "11400639"
                },
                "/1031683/UD_ROS_728x90_ATF_Flex@970x90": {
                    placementId: "11400639"
                }
            }
        }
    }
}), (function(e, t) {
    t.COMMON = {
        BID_PRECISION: 2,
        DEAL_KEY_FIRST_PART: "pwtdeal_",
        DEAL_KEY_VALUE_SEPARATOR: "_-_",
        PREBID_PREFIX: "PB_",
        CONFIG: "config",
        DIV_ID: "divID",
        PARAMS: "params",
        SIZES: "sizes",
        HEIGHT: "height",
        WIDTH: "width",
        SLOTS: "slots",
        KEY_GENERATION_PATTERN_VALUE: "kgpv",
        KEY_VALUE_PAIRS: "kvp",
        IMPRESSION_ID: "iid",
        PARENT_ADAPTER_PREBID: "prebid",
        ANALYTICS_CURRENCY: "USD",
        NATIVE_MEDIA_TYPE_CONFIG: "nativeConfig",
        NATIVE_ONLY: "nativeOnly",
        OW_CLICK_NATIVE: "openwrap-native-click",
        BID_ID: "owbidid",
        AD_SERVER_CURRENCY: "adServerCurrency",
        SINGLE_IMPRESSION: "singleImpression",
        PREBID_NAMESPACE: "owpbjs"
    }, t.CONFIG = {
        GLOBAL: "global",
        ADAPTERS: "adapters",
        COMMON: "pwt",
        TIMEOUT: "t",
        KEY_GENERATION_PATTERN: "kgp",
        KEY_LOOKUP_MAP: "klm",
        SERVER_SIDE_KEY: "sk",
        PUBLISHER_ID: "pubid",
        PROFILE_ID: "pid",
        PROFILE_VERSION_ID: "pdvid",
        LOGGER_URL: "dataURL",
        TRACKER_URL: "winURL",
        REV_SHARE: "rev_share",
        THROTTLE: "throttle",
        BID_PASS_THROUGH: "pt",
        GLOBAL_KEY_VALUE: "gkv",
        MASK_BIDS: "maksBids",
        META_DATA_PATTERN: "metaDataPattern",
        SEND_ALL_BIDS: "sendAllBids",
        SERVER_SIDE_ENABLED: "serverSideEnabled",
        GDPR_CONSENT: "gdpr",
        CONSENT_STRING: "cns",
        GDPR_CMPAPI: "cmpApi",
        GDPR_TIMEOUT: "gdprTimeout",
        GDPR_AWC: "awc",
        DEFAULT_GDPR_CMPAPI: "iab",
        DEFAULT_GDPR_TIMEOUT: 1e4,
        DEFAULT_GDPR_AWC: "0",
        DEFAULT_SINGLE_IMPRESSION: "0",
        DEFAULT_GDPR_CONSENT: "0",
        DISABLE_AJAX_TIMEOUT: "disableAjaxTimeout"
    }, t.METADATA_MACROS = {
        WIDTH: "_W_",
        HEIGHT: "_H_",
        PARTNER: "_P_",
        GROSS_ECPM: "_GE_",
        NET_ECPM: "_NE_",
        BID_COUNT: "_BC_",
        PARTNER_COUNT: "_PC_"
    }, t.MACROS = {
        WIDTH: "_W_",
        HEIGHT: "_H_",
        AD_UNIT_ID: "_AU_",
        AD_UNIT_INDEX: "_AUI_",
        INTEGER: "_I_",
        DIV: "_DIV_"
    }, t.SLOT_STATUS = {
        CREATED: 0,
        PARTNERS_CALLED: 1,
        TARGETING_ADDED: 2,
        DISPLAYED: 3
    }, t.WRAPPER_TARGETING_KEYS = {
        BID_ID: "pwtsid",
        BID_STATUS: "pwtbst",
        BID_ECPM: "pwtecp",
        BID_DEAL_ID: "pwtdid",
        BID_ADAPTER_ID: "pwtpid",
        BID_SIZE: "pwtsz",
        PUBLISHER_ID: "pwtpubid",
        PROFILE_ID: "pwtprofid",
        PROFILE_VERSION_ID: "pwtverid",
        META_DATA: "pwtm",
        PLATFORM_KEY: "pwtplt"
    }, t.IGNORE_PREBID_KEYS = {
        hb_bidder: 1,
        hb_adid: 1,
        hb_pb: 1,
        hb_size: 1,
        hb_deal: 1
    }, t.LOGGER_PIXEL_PARAMS = {
        TIMESTAMP: "tst",
        PAGE_URL: "purl",
        TIMEOUT: "to"
    }, t.MESSAGES = {
        M1: ": In fetchbids.",
        M2: ": Throttled.",
        M3: ": adapter must implement the fetchBids() function.",
        M4: "BidManager: entry ",
        M5: ": Callback.",
        M6: "bidAlreadExists : ",
        M7: ": Exiting from fetchBids.",
        M8: ". Config not found, ignored.",
        M9: ". Config ignored.",
        M10: "Bid is rejected as ecpm is NULL.",
        M11: "Bid is rejected as ecpm is NaN: ",
        M12: "Existing bid ecpm: ",
        M13: ", is lower than new bid ecpm ",
        M14: ", so we are replacing bid.",
        M15: ", is greater than new bid ecpm ",
        M16: ", so we are not replacing bid.",
        M17: "Post timeout bid, ignored.",
        M18: "Bid is selected.",
        M19: ": Found winning adapterID: ",
        M20: "Bid is rejected as ecpm is empty string.",
        M21: ": error in respose handler.",
        M22: "Bid is rejected as ecpm is <= 0.",
        M23: "Existing bid is default-bid with zero ecpm, thus replacing it with the new bid from partner.",
        M24: "Passsed argument is not a bidAdaptor",
        M25: "Bid details not found for bidID: ",
        M26: "Currency Module is Activated. Ad Server Currency is: "
    }, t.PLATFORM_VALUES = {
        DISPLAY: "display",
        NATIVE: "native"
    }, t.FORMAT_VALUES = {
        BANNER: "banner",
        VIDEO: "video",
        NATIVE: "native",
        OTHER: "other"
    }, t.HOOKS = {
        PREBID_SET_CONFIG: "HookForPrebidSetConfig",
        PREBID_REQUEST_BIDS: "HookForPrebidRequestBids",
        BID_RECEIVED: "HookForBidReceived",
        POST_AUCTION_KEY_VALUES: "HookForPostAuctionKeyValues"
    }, t.SRA_ENABLED_BIDDERS = {
        rubicon: 1,
        improvedigital: 2
    }
}), (function(e, t, i) {
    function n(e, t) {
        this.adapterID = e, this.kgpv = t, this.bidID = a.getUniqueIdentifierStr(), this.grossEcpm = 0, this.netEcpm = 0, this.defaultBid = 0, this.adHtml = "", this.adUrl = "", this.height = 0, this.width = 0, this.creativeID = "", this.keyValuePairs = {}, this.isPostTimeout = !1, this.receivedTime = 0, this.isServerSide = r.isServerSideAdapter(e) ? 1 : 0, this.dealID = "", this.dealChannel = "", this.isWinningBid = !1, this.status = 0, this.serverSideResponseTime = 0, this.mi = void 0, this.originalCpm = 0, this.originalCurrency = "", this.analyticsGrossCpm = 0, this.analyticsNetCpm = 0, this.native = void 0, this.adFormat = void 0
    }
    var r = i(2),
        o = i(4),
        a = i(1),
        s = function(e, t) {
            return window.parseFloat((e * r.getAdapterRevShare(t)).toFixed(o.COMMON.BID_PRECISION))
        };
    n.prototype.setServerSideResponseTime = function(e) {
        this.serverSideResponseTime = e
    }, n.prototype.getServerSideResponseTime = function() {
        return this.serverSideResponseTime
    }, n.prototype.getServerSideStatus = function() {
        return this.isServerSide
    }, n.prototype.setServerSideStatus = function(e) {
        this.isServerSide = e
    }, n.prototype.getAdapterID = function() {
        return this.adapterID
    }, n.prototype.getBidID = function() {
        return this.bidID
    }, n.prototype.setGrossEcpm = function(e) {
        return null === e ? (a.log(o.MESSAGES.M10), a.log(this), this) : a.isString(e) && (e = e.replace(/\s/g, ""), 0 === e.length) ? (a.log(o.MESSAGES.M20), a.log(this), this) : window.isNaN(e) ? (a.log(o.MESSAGES.M11 + e), a.log(this), this) : (e = window.parseFloat(e.toFixed(o.COMMON.BID_PRECISION)), this.grossEcpm = e, this.netEcpm = s(this.grossEcpm, this.getAdapterID()), this)
    }, n.prototype.getGrossEcpm = function(e) {
        return r.getAdServerCurrency() && this.analyticsGrossCpm && e ? this.analyticsGrossCpm : this.grossEcpm
    }, n.prototype.getNetEcpm = function(e) {
        return r.getAdServerCurrency() && this.analyticsNetCpm && e ? this.analyticsNetCpm : this.netEcpm
    }, n.prototype.setDefaultBidStatus = function(e) {
        return this.defaultBid = e, this
    }, n.prototype.getDefaultBidStatus = function() {
        return this.defaultBid
    }, n.prototype.setAdHtml = function(e) {
        return this.adHtml = e, this.setAdFormat(e), this
    }, n.prototype.getAdHtml = function() {
        return this.adHtml
    }, n.prototype.setAdUrl = function(e) {
        return this.adUrl = e, this
    }, n.prototype.getAdUrl = function() {
        return this.adUrl
    }, n.prototype.setHeight = function(e) {
        return this.height = e, this
    }, n.prototype.getHeight = function() {
        return this.height
    }, n.prototype.setWidth = function(e) {
        return this.width = e, this
    }, n.prototype.getWidth = function() {
        return this.width
    }, n.prototype.getKGPV = function() {
        return this.kgpv
    }, n.prototype.setKeyValuePair = function(e, t) {
        return this.keyValuePairs[e.substr(0, 20)] = t, this
    }, n.prototype.getKeyValuePairs = function() {
        return this.keyValuePairs
    }, n.prototype.setPostTimeoutStatus = function() {
        return this.isPostTimeout = !0, this
    }, n.prototype.getPostTimeoutStatus = function() {
        return this.isPostTimeout
    }, n.prototype.setReceivedTime = function(e) {
        return this.receivedTime = e, this
    }, n.prototype.getReceivedTime = function() {
        return this.receivedTime
    }, n.prototype.setDealID = function(e) {
        return e && (this.dealID = e, this.dealChannel = this.dealChannel || "PMP", this.setKeyValuePair(o.COMMON.DEAL_KEY_FIRST_PART + this.adapterID, this.dealChannel + o.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.dealID + o.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.bidID)), this
    }, n.prototype.getDealID = function() {
        return this.dealID
    }, n.prototype.setDealChannel = function(e) {
        return this.dealID && e && (this.dealChannel = e, this.setKeyValuePair(o.COMMON.DEAL_KEY_FIRST_PART + this.adapterID, this.dealChannel + o.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.dealID + o.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.bidID)), this
    }, n.prototype.getDealChannel = function() {
        return this.dealChannel
    }, n.prototype.setWinningBidStatus = function() {
        return this.isWinningBid = !0, this
    }, n.prototype.getWinningBidStatus = function() {
        return this.isWinningBid
    }, n.prototype.setStatus = function(e) {
        return this.status = e, this
    }, n.prototype.getStatus = function() {
        return this.status
    }, n.prototype.setSendAllBidsKeys = function() {
        if (this.setKeyValuePair(o.WRAPPER_TARGETING_KEYS.BID_ID + "_" + this.adapterID, this.bidID), this.setKeyValuePair(o.WRAPPER_TARGETING_KEYS.BID_STATUS + "_" + this.adapterID, this.getNetEcpm() > 0 ? 1 : 0), this.setKeyValuePair(o.WRAPPER_TARGETING_KEYS.BID_ECPM + "_" + this.adapterID, this.getNetEcpm().toFixed(o.COMMON.BID_PRECISION)), this.setKeyValuePair(o.WRAPPER_TARGETING_KEYS.BID_SIZE + "_" + this.adapterID, this.width + "x" + this.height), this.native) {
            var e = this.keyValuePairs,
                t = this;
            a.forEachOnObject(e, (function(e, i) {
                e.indexOf("native") >= 0 && t.setKeyValuePair(e + "_" + t.adapterID, i)
            }))
        }
    }, n.prototype.setMi = function(e) {
        return this.mi = e, this
    }, n.prototype.getMi = function() {
        return this.mi
    }, n.prototype.setOriginalCpm = function(e) {
        return this.originalCpm = window.parseFloat(e.toFixed(o.COMMON.BID_PRECISION)), this
    }, n.prototype.getOriginalCpm = function() {
        return this.originalCpm
    }, n.prototype.setOriginalCurrency = function(e) {
        return this.originalCurrency = e, this
    }, n.prototype.getOriginalCurrency = function() {
        return this.originalCurrency
    }, n.prototype.setAnalyticsCpm = function(e) {
        return this.analyticsGrossCpm = window.parseFloat(e.toFixed(o.COMMON.BID_PRECISION)), this.analyticsNetCpm = s(this.analyticsGrossCpm, this.getAdapterID()), this
    }, n.prototype.getAnalyticsCpm = function() {
        return this.analyticsGrossCpm
    }, n.prototype.getNative = function() {
        return this.native
    }, n.prototype.setNative = function(e) {
        return this.native = e, this
    }, n.prototype.getAdFormat = function() {
        return this.adFormat
    }, n.prototype.setAdFormat = function(e) {
        return this.adFormat = a.getAdFormatFromBidAd(e), this
    }, e.exports.Bid = n, t.createBid = function(e, t) {
        return new n(e, t)
    }
}), (function(e, t, i) {
    function n(e) {
        _.isOwnProperty(window.PWT.bidMap, e) || (window.PWT.bidMap[e] = f.createBMEntry(e))
    }

    function r(e, t, i, n) {
        window.PWT.bidMap[e].setNewBid(t, i), window.PWT.bidIdMap[i.getBidID()] = {
            s: e,
            a: t
        }, 0 === i.getDefaultBidStatus() && "pubmaticServer" !== i.adapterID && _.vLogInfo(e, {
            type: "bid",
            bidder: t + (0 !== c.getBidPassThroughStatus(t) ? "(Passthrough)" : ""),
            bidDetails: i,
            latency: n,
            s2s: c.isServerSideAdapter(t),
            adServerCurrency: _.getCurrencyToDisplay()
        })
    }

    function o(e, t, i) {
        var n = "",
            r = 0,
            o = 0,
            s = p.METADATA_MACROS,
            d = "g";
        _.forEachOnObject(t.adapters, (function(t, i) {
            "" != i.getLastBidID() && ("pubmaticServer" !== t && o++, _.forEachOnObject(i.bids, (function(t, i) {
                1 != i.getDefaultBidStatus() && 1 != i.getPostTimeoutStatus() && 0 != i.getGrossEcpm() && (r++, n += a(e, i))
            })))
        })), 0 == n.length && (n = e), n = n.replace(new RegExp(s.BID_COUNT, d), r), n = n.replace(new RegExp(s.PARTNER_COUNT, d), o), i[p.WRAPPER_TARGETING_KEYS.META_DATA] = encodeURIComponent(n)
    }

    function a(e, t) {
        var i = p.METADATA_MACROS,
            n = "g";
        return e.replace(new RegExp(i.PARTNER, n), t.getAdapterID()).replace(new RegExp(i.WIDTH, n), t.getWidth()).replace(new RegExp(i.HEIGHT, n), t.getHeight()).replace(new RegExp(i.GROSS_ECPM, n), t.getGrossEcpm()).replace(new RegExp(i.NET_ECPM, n), t.getNetEcpm())
    }

    function s(e) {
        var t = null,
            i = {};
        return _.forEachOnObject(e.adapters, (function(e, n) {
            var r = S.auctionBidsCallBack(e, n, i, t);
            t = r.winningBid, i = r.keyValuePairs
        })), null !== c.getMataDataPattern() && o(c.getMataDataPattern(), e, i), {
            wb: t,
            kvp: i
        }
    }

    function d(e) {
        for (var t in e) t.indexOf("native") >= 0 && 3 === t.split("_").length && delete e[t]
    }

    function l(e, t, i, n) {
        var r = this;
        return "" != t.getLastBidID() ? (_.forEachOnObject(t.bids, (function(t, o) {
            if (o.getPostTimeoutStatus() === !0) return {
                winningBid: n,
                keyValuePairs: i
            };
            if (1 !== o.getDefaultBidStatus() && 1 == c.getSendAllBidsStatus() && o.setSendAllBidsKeys(), null !== n)
                if (n.getNetEcpm() < o.getNetEcpm()) r.updateNativeTargtingKeys(i);
                else {
                    var a = o.getKeyValuePairs();
                    r.updateNativeTargtingKeys(a), o.keyValuePairs = a
                }
            return _.copyKeyValueObject(i, o.getKeyValuePairs()), 0 !== c.getBidPassThroughStatus(e) ? {
                winningBid: n,
                keyValuePairs: i
            } : (null == n ? n = o : n.getNetEcpm() < o.getNetEcpm() && (n = o), void 0)
        })), {
            winningBid: n,
            keyValuePairs: i
        }) : {
            winningBid: n,
            keyValuePairs: i
        }
    }

    function u(e, t, i) {
        var n = t.getCreationTime() || 0,
            r = void 0,
            o = t.getImpressionID();
        const a = !0;
        if (t.getAnalyticEnabledStatus() && !t.getExpiredStatus()) {
            var s = {
                sn: e,
                sz: t.getSizes(),
                ps: []
            };
            t.setExpired(), i[o] = i[o] || [], _.forEachOnObject(t.adapters, (function(e, t) {
                1 != c.getBidPassThroughStatus(e) && _.forEachOnObject(t.bids, (function(t, i) {
                    var d = i.getReceivedTime();
                    return "pubmaticServer" === e ? (_.isOwnProperty(window.PWT.owLatency, o) && _.isOwnProperty(window.PWT.owLatency[o], "startTime") && _.isOwnProperty(window.PWT.owLatency[o], "endTime") ? r = window.PWT.owLatency[o].endTime - window.PWT.owLatency[o].startTime : (r = 0, _.log("Logging pubmaticServer latency as 0 for impressionID: " + o)), _.log("PSL logging: time logged for id " + o + " is " + r), void 0) : ((1 != c.getAdapterMaskBidsStatus(e) || i.getWinningBidStatus() !== !1) && (i.getServerSideStatus() && -1 === i.getDefaultBidStatus() && -1 === i.getServerSideResponseTime() || "pubmatic" === e && (i.getDefaultBidStatus() || i.getPostTimeoutStatus() && 0 == i.getGrossEcpm(a)) || s.ps.push({
                        pn: e,
                        bidid: t,
                        db: i.getDefaultBidStatus(),
                        kgpv: i.getKGPV(),
                        psz: i.getWidth() + "x" + i.getHeight(),
                        eg: i.getGrossEcpm(a),
                        en: i.getNetEcpm(a),
                        di: i.getDealID(),
                        dc: i.getDealChannel(),
                        l1: i.getServerSideStatus() ? i.getServerSideResponseTime() : d - n,
                        l2: 0,
                        ss: i.getServerSideStatus(),
                        t: i.getPostTimeoutStatus() === !1 ? 0 : 1,
                        wb: i.getWinningBidStatus() === !0 ? 1 : 0,
                        mi: i.getServerSideStatus() ? i.getMi() : void 0,
                        af: i.getAdFormat(),
                        ocpm: c.getAdServerCurrency() ? i.getOriginalCpm() : i.getGrossEcpm(),
                        ocry: c.getAdServerCurrency() ? i.getOriginalCurrency() : p.COMMON.ANALYTICS_CURRENCY
                    })), void 0)
                }))
            })), i[o].push(s), void 0 !== r && (i[o].psl = r)
        }
    }
    var c = i(2),
        p = i(4),
        _ = i(1),
        g = i(7),
        f = i(8),
        S = this;
    t.createBidEntry = n, t.setSizes = function(e, t) {
        S.createBidEntry(e), window.PWT.bidMap[e].setSizes(t)
    }, t.setCallInitTime = function(e, t) {
        S.createBidEntry(e), window.PWT.bidMap[e].setAdapterEntry(t)
    }, t.setBidFromBidder = function(e, t) {
        var i = t.getAdapterID(),
            n = (t.getBidID(), window.PWT.bidMap[e]);
        if (!_.isOwnProperty(window.PWT.bidMap, e)) return _.log("BidManager is not expecting bid for " + e + ", from " + i), void 0;
        var r = n.getCreationTime() + c.getTimeout() < t.getReceivedTime() ? !0 : !1,
            o = t.getReceivedTime() - n.getCreationTime();
        S.createBidEntry(e), _.log("BdManagerSetBid: divID: " + e + ", bidderID: " + i + ", ecpm: " + t.getGrossEcpm() + ", size: " + t.getWidth() + "x" + t.getHeight() + ", postTimeout: " + r + ", defaultBid: " + t.getDefaultBidStatus()), r === !0 && t.setPostTimeoutStatus();
        var a = n.getLastBidIDForAdapter(i);
        if ("" != a) {
            var s = n.getBid(i, a),
                d = 1 === s.getDefaultBidStatus();
            d || !r ? (d && _.log(p.MESSAGES.M23), d || s.getNetEcpm() < t.getNetEcpm() ? (_.log(p.MESSAGES.M12 + s.getNetEcpm() + p.MESSAGES.M13 + t.getNetEcpm() + p.MESSAGES.M14), S.storeBidInBidMap(e, i, t, o)) : _.log(p.MESSAGES.M12 + s.getNetEcpm() + p.MESSAGES.M15 + t.getNetEcpm() + p.MESSAGES.M16)) : _.log(p.MESSAGES.M17)
        } else _.log(p.MESSAGES.M18), S.storeBidInBidMap(e, i, t, o);
        r && setTimeout(window.owpbjs.triggerUserSyncs, 10)
    }, t.storeBidInBidMap = r, t.resetBid = function(e, t) {
        _.vLogInfo(e, {
            type: "hr"
        }), delete window.PWT.bidMap[e], S.createBidEntry(e), window.PWT.bidMap[e].setImpressionID(t)
    }, t.createMetaDataKey = o, t.replaceMetaDataMacros = a, t.auctionBids = s, t.updateNativeTargtingKeys = d, t.auctionBidsCallBack = l, t.getBid = function(e) {
        var t = null,
            i = null;
        if (_.isOwnProperty(window.PWT.bidMap, e)) {
            var n = S.auctionBids(window.PWT.bidMap[e]);
            t = n.wb, i = n.kvp, window.PWT.bidMap[e].setAnalyticEnabled(), t && t.getNetEcpm() > 0 ? (t.setStatus(1), t.setWinningBidStatus(), _.vLogInfo(e, {
                type: "win-bid",
                bidDetails: t,
                adServerCurrency: _.getCurrencyToDisplay()
            })) : _.vLogInfo(e, {
                type: "win-bid-fail"
            })
        }
        return {
            wb: t,
            kvp: i
        }
    }, t.getBidById = function(e) {
        if (!_.isOwnProperty(window.PWT.bidIdMap, e)) return _.log(p.MESSAGES.M25 + e), null;
        var t = window.PWT.bidIdMap[e].s,
            i = window.PWT.bidIdMap[e].a;
        if (_.isOwnProperty(window.PWT.bidMap, t)) {
            _.log("BidID: " + e + ", DivID: " + t + p.MESSAGES.M19 + i);
            var n = window.PWT.bidMap[t].getBid(i, e);
            return null == n ? null : {
                bid: n,
                slotid: t
            }
        }
        return _.log(p.MESSAGES.M25 + e), null
    }, t.displayCreative = function(e, t) {
        var i = S.getBidById(t);
        if (i) {
            var n = i.bid,
                r = i.slotid;
            _.displayCreative(e, n), _.vLogInfo(r, {
                type: "disp",
                adapter: n.getAdapterID()
            }), S.executeMonetizationPixel(r, n)
        }
    }, t.executeAnalyticsPixel = function() {
        var e = {
                s: []
            },
            t = c.getPublisherId(),
            i = g.getUserConsentDataFromLS(),
            n = "",
            r = c.getAnalyticsPixelURL(),
            o = {};
        r && (r = _.metaInfo.protocol + r + "pubid=" + t, e[p.CONFIG.PUBLISHER_ID] = c.getPublisherId(), e[p.LOGGER_PIXEL_PARAMS.TIMEOUT] = "" + c.getTimeout(), e[p.LOGGER_PIXEL_PARAMS.PAGE_URL] = window.decodeURIComponent(_.metaInfo.pageURL), e[p.LOGGER_PIXEL_PARAMS.TIMESTAMP] = _.getCurrentTimestamp(), e[p.CONFIG.PROFILE_ID] = c.getProfileID(), e[p.CONFIG.PROFILE_VERSION_ID] = c.getProfileDisplayVersionID(), c.getGdpr() && (n = i && i.c ? encodeURIComponent(i.c) : "", e[p.CONFIG.GDPR_CONSENT] = i && i.g, e[p.CONFIG.CONSENT_STRING] = n, r += "&gdEn=" + (c.getGdpr() ? 1 : 0)), _.forEachOnObject(window.PWT.bidMap, (function(e, t) {
            S.analyticalPixelCallback(e, t, o)
        })), _.forEachOnObject(o, (function(t, i) {
            i.length > 0 && (e.s = i, e[p.COMMON.IMPRESSION_ID] = window.encodeURIComponent(t), e.psl = i.psl, _.ajaxRequest(r, (function() {}), "json=" + window.encodeURIComponent(JSON.stringify(e)), {
                contentType: "application/x-www-form-urlencoded",
                withCredentials: !0
            }))
        })))
    }, t.executeMonetizationPixel = function(e, t) {
        var i = c.getMonetizationPixelURL(),
            n = c.getPublisherId();
        const r = !0;
        i && (i += "pubid=" + n, i += "&purl=" + window.encodeURIComponent(_.metaInfo.pageURL), i += "&tst=" + _.getCurrentTimestamp(), i += "&iid=" + window.encodeURIComponent(window.PWT.bidMap[e].getImpressionID()), i += "&bidid=" + window.encodeURIComponent(t.getBidID()), i += "&pid=" + window.encodeURIComponent(c.getProfileID()), i += "&pdvid=" + window.encodeURIComponent(c.getProfileDisplayVersionID()), i += "&slot=" + window.encodeURIComponent(e), i += "&pn=" + window.encodeURIComponent(t.getAdapterID()), i += "&en=" + window.encodeURIComponent(t.getNetEcpm(r)), i += "&eg=" + window.encodeURIComponent(t.getGrossEcpm(r)), i += "&kgpv=" + window.encodeURIComponent(t.getKGPV()), S.setImageSrcToPixelURL(i))
    }, t.analyticalPixelCallback = u, t.setImageSrcToPixelURL = function(e, t) {
        var i = new window.Image;
        return void 0 == t || t ? (i.src = _.metaInfo.protocol + e, void 0) : (i.src = e, void 0)
    }, t.getAllPartnersBidStatuses = function(e, t) {
        var i = !0;
        return _.forEachOnArray(t, (function(t, n) {
            e[n] && _.forEachOnObject(e[n].adapters, (function(e, t) {
                _.forEachOnObject(t.bids, (function(e, t) {
                    i = i && 0 === t.getDefaultBidStatus()
                }))
            }))
        })), i
    }, t.loadTrackers = function(e) {
        var t = _.getBidFromEvent(e);
        window.parent.postMessage(JSON.stringify({
            pwt_type: "3",
            pwt_bidID: t,
            pwt_origin: window.location.protocol + "//" + window.location.hostname,
            pwt_action: "click"
        }), "*")
    }, t.executeTracker = function(e) {
        window.parent.postMessage(JSON.stringify({
            pwt_type: "3",
            pwt_bidID: e,
            pwt_origin: window.location.protocol + "//" + window.location.hostname,
            pwt_action: "imptrackers"
        }), "*")
    }, t.fireTracker = function(e, t) {
        var i;
        if ("click" === t) i = e["native"] && e["native"].clickTrackers;
        else if ("imptrackers" === t && (i = e["native"] && e["native"].impressionTrackers, e["native"] && e["native"].javascriptTrackers)) {
            var n = _.createInvisibleIframe();
            if (!n) throw {
                message: "Failed to create invisible frame for native javascript trackers"
            };
            if (!n.contentWindow) throw {
                message: "Unable to access frame window for native javascript trackers"
            };
            window.document.body.appendChild(n), n.contentWindow.document.open(), n.contentWindow.document.write(e["native"].javascriptTrackers), n.contentWindow.document.close()
        }(i || []).forEach((function(e) {
            S.setImageSrcToPixelURL(e, !1)
        }))
    }, t.setStandardKeys = function(e, t) {
        if (e) {
            t[p.WRAPPER_TARGETING_KEYS.BID_ID] = e.getBidID(), t[p.WRAPPER_TARGETING_KEYS.BID_STATUS] = e.getStatus(), t[p.WRAPPER_TARGETING_KEYS.BID_ECPM] = e.getNetEcpm().toFixed(p.COMMON.BID_PRECISION);
            var i = e.getDealID();
            i && (t[p.WRAPPER_TARGETING_KEYS.BID_DEAL_ID] = i), t[p.WRAPPER_TARGETING_KEYS.BID_ADAPTER_ID] = e.getAdapterID(), t[p.WRAPPER_TARGETING_KEYS.PUBLISHER_ID] = c.getPublisherId(), t[p.WRAPPER_TARGETING_KEYS.PROFILE_ID] = c.getProfileID(), t[p.WRAPPER_TARGETING_KEYS.PROFILE_VERSION_ID] = c.getProfileDisplayVersionID(), t[p.WRAPPER_TARGETING_KEYS.BID_SIZE] = e.width + "x" + e.height, t[p.WRAPPER_TARGETING_KEYS.PLATFORM_KEY] = e.getNative() ? p.PLATFORM_VALUES.NATIVE : p.PLATFORM_VALUES.DISPLAY
        } else _.log("Not generating key-value pairs as invalid winningBid object passed. WinningBid: "), _.log(e)
    }
}), (function(e, t) {
    function i(e, t) {
        return toString.call(e) === "[object " + t + "]"
    }
    var n = "OpenWrap",
        r = 909090,
        o = function(e) {
            return i(e, "Function")
        },
        a = (function() {
            try {
                return window.localStorage && o(window.localStorage.getItem) && o(window.localStorage.setItem)
            } catch (e) {
                return !1
            }
        })(),
        s = function(e, t, i, r) {
            var o;
            if (a) {
                try {
                    o = window.localStorage.getItem(n)
                } catch (s) {}
                if (o && "string" == typeof o) try {
                    o = JSON.parse(o)
                } catch (s) {
                    o = {}
                } else o = {};
                o && (o.hasOwnProperty(e) || (o[e] = {}), o[e].t = (new Date).getTime(), o[e][t] = i, "c" == t && (o[e].g = r ? 1 : 0));
                try {
                    window.localStorage.setItem(n, JSON.stringify(o))
                } catch (s) {}
            }
        };
    t.setConsentDataInLS = s, t.isCmpFound = function() {
        return !!window.__cmp
    }, t.getUserConsentDataFromCMP = function() {
        function e(e) {
            if (e && e.data && e.data.__cmp && e.data.__cmp.result) {
                var t = e.data.__cmp.result;
                t && t.consentData ? s(i, "c", t.consentData, t.gdprApplies) : "string" == typeof t && s(i, "c", t)
            }
        }

        function t() {
            window.__cmp("getConsentData", "vendorConsents", (function(e) {
                e && e.consentData ? s(i, "c", e.consentData, e.gdprApplies) : "string" == typeof e && s(i, "c", e)
            }))
        }
        var i = r,
            n = 0,
            o = {
                __cmp: {
                    callId: "iframe:" + ++n,
                    command: "getConsentData"
                }
            };
        window.__cmp ? "function" == typeof window.__cmp ? t() : setTimeout((function() {
            "function" == typeof window.__cmp && t()
        }), 500) : (window.top.postMessage(o, "*"), window.addEventListener("message", e))
    }, t.getUserConsentDataFromLS = function() {
        var e = r,
            t = {
                c: "",
                g: 0
            };
        if (!a) return t;
        var i;
        try {
            i = window.localStorage.getItem(n)
        } catch (o) {}
        if (i && "string" == typeof i) {
            try {
                i = JSON.parse(i)
            } catch (o) {
                i = {}
            }
            if (i.hasOwnProperty(e)) {
                var s = i[e];
                s && s.c && s.t && s.t && parseInt(s.t, 10) > (new Date).getTime() - 864e5 && (t.c = s.c, t.g = s.g)
            }
        }
        return t
    }
}), (function(e, t, i) {
    function n(e) {
        this.name = e, this.sizes = [], this.adapters = {}, this.creationTime = o.getCurrentTimestampInMs(), this.impressionID = "", this.analyticsEnabled = !1, this.expired = !1
    }
    var r = i(4),
        o = i(1),
        a = i(9).AdapterEntry;
    n.prototype.setExpired = function() {
        return this.expired = !0, this
    }, n.prototype.getExpiredStatus = function() {
        return this.expired
    }, n.prototype.setAnalyticEnabled = function() {
        return this.analyticsEnabled = !0, this
    }, n.prototype.getAnalyticEnabledStatus = function() {
        return this.analyticsEnabled
    }, n.prototype.setNewBid = function(e, t) {
        o.isOwnProperty(this.adapters, e) || (this.adapters[e] = new a(e)), this.adapters[e].setNewBid(t)
    }, n.prototype.getBid = function(e, t) {
        return o.isOwnProperty(this.adapters, e) ? this.adapters[e].getBid(t) : void 0
    }, n.prototype.getName = function() {
        return this.name
    }, n.prototype.getCreationTime = function() {
        return this.creationTime
    }, n.prototype.setImpressionID = function(e) {
        return this.impressionID = e, this
    }, n.prototype.getImpressionID = function() {
        return this.impressionID
    }, n.prototype.setSizes = function(e) {
        return this.sizes = e, this
    }, n.prototype.getSizes = function() {
        return this.sizes
    }, n.prototype.setAdapterEntry = function(e) {
        return o.isOwnProperty(this.adapters, e) || (this.adapters[e] = new a(e), o.log(r.MESSAGES.M4 + this.name + " " + e + " " + this.adapters[e].getCallInitiatedTime())), this
    }, n.prototype.getLastBidIDForAdapter = function(e) {
        return o.isOwnProperty(this.adapters, e) ? this.adapters[e].getLastBidID() : ""
    }, e.exports.BMEntry = n, t.createBMEntry = function(e) {
        return new n(e)
    }
}), (function(e, t, i) {
    function n(e) {
        this.adapterID = e, this.callInitiatedTime = r.getCurrentTimestampInMs(), this.bids = {}, this.lastBidID = ""
    }
    var r = i(1);
    n.prototype.getCallInitiatedTime = function() {
        return this.callInitiatedTime
    }, n.prototype.getLastBidID = function() {
        return this.lastBidID
    }, n.prototype.getBid = function(e) {
        return r.isOwnProperty(this.bids, e) ? this.bids[e] : null
    }, n.prototype.setNewBid = function(e) {
        delete this.bids[this.lastBidID];
        var t = e.getBidID();
        this.bids[t] = e, this.lastBidID = t
    }, e.exports.AdapterEntry = n
}), (function(e, t, i) {
    function n(e) {
        j.isObject(e) && (it = e)
    }

    function r() {
        return it
    }

    function o(e) {
        var t = 0;
        try {
            var i = e.getSlotId().getId().split("_");
            t = parseInt(i[i.length - 1])
        } catch (n) {}
        return t
    }

    function a(e, t) {
        var i = [];
        return j.isFunction(t.getSizes) && j.forEachOnArray(t.getSizes(window.innerWidth, window.innerHeight), (function(t, n) {
            j.isFunction(n.getWidth) && j.isFunction(n.getHeight) ? i.push([n.getWidth(), n.getHeight()]) : (j.log(e + ", size object does not have getWidth and getHeight method. Ignoring: "), j.log(n))
        })), i
    }

    function s(e, t) {
        j.isObject(e) && j.isFunction(e.getDivID) && j.isArray(t) && t[0] && t[0] == e.getDivID() && (e.setDisplayFunctionCalled(!0), e.setArguments(t))
    }

    function d(e, t, i) {
        if (j.isOwnProperty(nt.slotsMap, e)) i || nt.slotsMap[e].setSizes(nt.getAdSlotSizesArray(e, t));
        else {
            var n = X.createSlot(e);
            n.setDivID(e), n.setPubAdServerObject(t), n.setAdUnitID(t.getAdUnitPath()), n.setAdUnitIndex(nt.getAdUnitIndex(t)), n.setSizes(nt.getAdSlotSizesArray(e, t)), n.setStatus(K.SLOT_STATUS.CREATED), Z && j.isObject(JSON) && j.isFunction(JSON.stringify) && j.forEachOnArray(t.getTargetingKeys(), (function(e, i) {
                n.setKeyValue(i, t.getTargeting(i))
            })), nt.slotsMap[e] = n, j.createVLogInfoPanel(e, n.getSizes(window.innerWidth, window.innerHeight))
        }
    }

    function l(e) {
        if (j.isObject(e) && j.isFunction(e.getSlotId)) {
            var t = e.getSlotId();
            if (t && j.isFunction(t.getDomId)) return t.getDomId()
        }
        return ""
    }

    function u(e, t, i) {
        j.log("Generating slotsMap"), j.forEachOnArray(e, (function(e, n) {
            var r = nt.generateSlotName(n);
            nt.storeInSlotsMap(r, n, i), i && j.isOwnProperty(nt.slotsMap, r) && nt.setDisplayFunctionCalledIfRequired(nt.slotsMap[r], t)
        })), j.log(nt.slotsMap)
    }

    function c(e) {
        return j.isOwnProperty(nt.slotsMap, e) ? nt.slotsMap[e].getStatus() : K.SLOT_STATUS.DISPLAYED
    }

    function p(e, t) {
        j.isOwnProperty(nt.slotsMap, e) && nt.slotsMap[e].updateStatusAfterRendering(t)
    }

    function _(e) {
        var t = [];
        return j.forEachOnObject(nt.slotsMap, (function(i, n) {
            j.isOwnProperty(e, n.getStatus()) && t.push(i)
        })), t
    }

    function g(e) {
        var t, i = {};
        j.isOwnProperty(nt.slotsMap, e) && (t = nt.slotsMap[e].getPubAdServerObject(), j.forEachOnArray(t.getTargetingKeys(), (function(e, n) {
            i[n] = t.getTargeting(n)
        })), t.clearTargeting(), j.forEachOnObject(i, (function(e, i) {
            j.isOwnProperty(nt.wrapperTargetingKeys, e) || t.setTargeting(e, i)
        })))
    }

    function f(e, t, i) {
        j.forEachOnArray(e, (function(e, n) {
            if (j.isOwnProperty(nt.slotsMap, n)) {
                var r = nt.slotsMap[n];
                r.setStatus(K.SLOT_STATUS.PARTNERS_CALLED), i && (nt.removeDMTargetingFromSlot(n), r.setRefreshFunctionCalled(!0), r.setArguments(t))
            }
        }))
    }

    function S(e) {
        var t = [];
        return j.forEachOnArray(e, (function(e, i) {
            t.push(nt.slotsMap[i])
        })), t
    }

    function I(e) {
        var t = {};
        return j.forEachOnObject(e, (function(e, i) {
            t[i] = ""
        })), t
    }

    function m(e) {
        var t = V.getBid(e),
            i = t.wb || null,
            n = t.kvp || {},
            r = nt.slotsMap[e].getPubAdServerObject(),
            o = K.IGNORE_PREBID_KEYS;
        j.log("DIV: " + e + " winningBid: "), j.log(i), i && i.getNetEcpm() > 0 && (nt.slotsMap[e].setStatus(K.SLOT_STATUS.TARGETING_ADDED), V.setStandardKeys(i, n)), j.handleHook(K.HOOKS.POST_AUCTION_KEY_VALUES, [n, r]), j.forEachOnObject(n, (function(e, t) {
            j.isOwnProperty(o, e) || (r.setTargeting(e, t), nt.defineWrapperTargetingKey(e))
        }))
    }

    function x(e) {
        j.isObject(nt.wrapperTargetingKeys) || (nt.wrapperTargetingKeys = {}), nt.wrapperTargetingKeys[e] = ""
    }

    function T(e, t) {
        return j.isObject(e) && j.isFunction(t) ? function() {
            return Q = !0, j.log("Disable Initial Load is called"), t.apply(e, arguments)
        } : (j.log("disableInitialLoad: originalFunction is not a function"), null)
    }

    function A(e, t) {
        return j.isObject(e) && j.isFunction(t) ? function() {
            return j.log("enableSingleRequest is called"), t.apply(e, arguments)
        } : (j.log("disableInitialLoad: originalFunction is not a function"), null)
    }

    function h(e, t) {
        return j.isObject(e) && j.isFunction(t) ? function() {
            var i = arguments,
                n = i[0] ? i[0] : null;
            return null != n && (j.isOwnProperty(tt, n) || (tt[n] = []), tt[n] = tt[n].concat(i[1])), t.apply(e, arguments)
        } : (j.log("setTargeting: originalFunction is not a function"), null)
    }

    function O(e, t) {
        return j.isObject(e) && j.isFunction(t) ? function() {
            var i = arguments[0] || window.googletag.pubads().getSlots();
            return j.forEachOnArray(i, (function(e, t) {
                delete et[nt.generateSlotName(t)]
            })), t.apply(e, arguments)
        } : (j.log("destroySlots: originalFunction is not a function"), null)
    }

    function D(e, t, i, n) {
        j.log(e), j.log(n), nt.updateStatusAfterRendering(n[0], !1), i.apply(t, n)
    }

    function E(e, t) {
        var i = t.getStatus();
        i != K.SLOT_STATUS.DISPLAYED && i != K.SLOT_STATUS.TARGETING_ADDED && nt.findWinningBidAndApplyTargeting(e)
    }

    function w(e, t, i) {
        nt.getStatusOfSlotForDivId(i[0]) != K.SLOT_STATUS.DISPLAYED ? nt.updateStatusAndCallOriginalFunction_Display("Calling original display function after timeout with arguments, ", e, t, i) : j.log("AdSlot already rendered")
    }

    function F(e, t, i) {
        j.getExternalBidderStatus(t) && V.getAllPartnersBidStatuses(window.PWT.bidMap, t) ? (j.resetExternalBidderStatus(t), i()) : e > 0 && window.setTimeout((function() {
            nt.executeDisplay(e - 10, t, i)
        }), 10)
    }

    function R(e, t, i, n) {
        switch (e) {
            case K.SLOT_STATUS.CREATED:
            case K.SLOT_STATUS.PARTNERS_CALLED:
                var r = Object.keys(nt.slotsMap);
                "object" == typeof window.OWT.externalBidderStatuses[n[0]] && window.OWT.externalBidderStatuses[n[0]] && nt.executeDisplay(z.getTimeout(), r, (function() {
                    j.forEachOnObject(nt.slotsMap, (function(e, t) {
                        nt.findWinningBidIfRequired_Display(e, t)
                    })), nt.processDisplayCalledSlot(t, i, n)
                })), setTimeout((function() {
                    j.log("PostTimeout.. back in display function"), j.forEachOnObject(nt.slotsMap, (function(e, t) {
                        nt.findWinningBidIfRequired_Display(e, t)
                    })), nt.processDisplayCalledSlot(t, i, n)
                }), z.getTimeout());
                break;
            case K.SLOT_STATUS.TARGETING_ADDED:
                nt.updateStatusAndCallOriginalFunction_Display("As DM processing is already done, Calling original display function with arguments", t, i, n);
                break;
            case K.SLOT_STATUS.DISPLAYED:
                nt.updateStatusAndCallOriginalFunction_Display("As slot is already displayed, Calling original display function with arguments", t, i, n)
        }
    }

    function y(e, t, i) {
        if (e.length > 0) {
            nt.updateStatusOfQualifyingSlotsBeforeCallingAdapters(e, t, i);
            var n = nt.arrayOfSelectedSlots(e);
            q.callAdapters(n)
        }
    }

    function v(e, t) {
        return Y.getUserConsentDataFromCMP(), j.isObject(e) && j.isFunction(t) ? function() {
            if (j.log("In display function, with arguments: "), j.log(arguments), Q) return j.log("DisableInitialLoad was called, Nothing to do"), t.apply(e, arguments);
            nt.updateSlotsMapFromGoogleSlots(e.pubads().getSlots(), arguments, !0), nt.displayFunctionStatusHandler(c(arguments[0]), e, t, arguments);
            var i = {};
            i[K.SLOT_STATUS.CREATED] = "", nt.forQualifyingSlotNamesCallAdapters(_(i), arguments, !1);
            var n = arguments[0];
            setTimeout((function() {
                j.realignVLogInfoPanel(n), V.executeAnalyticsPixel()
            }), 2e3 + z.getTimeout())
        } : (j.log("display: originalFunction is not a function"), null)
    }

    function P(e) {
        nt.displayHookIsAdded || (nt.displayHookIsAdded = !0, j.log("Adding hook on googletag.display."), j.addHookOnFunction(e, !1, "display", this.newDisplayFunction))
    }

    function b(e, t, i) {
        return j.isOwnProperty(nt.slotsMap, e) && nt.slotsMap[e].isRefreshFunctionCalled() === !0 && nt.slotsMap[e].getStatus() !== K.SLOT_STATUS.DISPLAYED ? (nt.findWinningBidAndApplyTargeting(t), nt.updateStatusAfterRendering(t, !0), !0) : i
    }

    function C(e, t) {
        j.createVLogInfoPanel(e, nt.slotsMap[t].getSizes(window.innerWidth, window.innerHeight)), j.realignVLogInfoPanel(e), V.executeAnalyticsPixel()
    }

    function M(e, t, i, n) {
        j.log("Executing post timeout events, arguments: "), j.log(n);
        var r = !1;
        j.forEachOnArray(e, (function(e, t) {
            var i = nt.slotsMap[t].getDivID();
            r = nt.findWinningBidIfRequired_Refresh(t, i, r), window.setTimeout((function() {
                nt.postRederingChores(i, t)
            }), 2e3)
        })), this.callOriginalRefeshFunction(r, t, i, n)
    }

    function U(e, t, i, n) {
        e === !0 ? (j.log("Calling original refresh function post timeout"), i.apply(t, n)) : j.log("AdSlot already rendered")
    }

    function B(e, t) {
        var i = [],
            n = [];
        return n = 0 == e.length || null == e[0] ? t.getSlots() : e[0], j.forEachOnArray(n, (function(e, t) {
            var n = nt.generateSlotName(t);
            n.length > 0 && (i = i.concat(n))
        })), i
    }

    function N(e, t) {
        return Y.getUserConsentDataFromCMP(), j.isObject(e) && j.isFunction(t) ? function() {
            j.log("In Refresh function"), nt.updateSlotsMapFromGoogleSlots(e.getSlots(), arguments, !1);
            var i = B(arguments, e);
            nt.forQualifyingSlotNamesCallAdapters(i, arguments, !0), j.log("Intiating Call to original refresh function with Timeout: " + z.getTimeout() + " ms");
            var n = arguments;
            "object" == typeof window.OWT.externalBidderStatuses[i[0]] && window.OWT.externalBidderStatuses[i[0]] && nt.executeDisplay(z.getTimeout(), i, (function() {
                nt.postTimeoutRefreshExecution(i, e, t, n)
            })), setTimeout((function() {
                nt.postTimeoutRefreshExecution(i, e, t, n)
            }), z.getTimeout())
        } : (j.log("refresh: originalFunction is not a function"), null)
    }

    function L(e) {
        if (j.isObject(e) && j.isObject(e.googletag) && j.isFunction(e.googletag.pubads)) {
            var t = e.googletag,
                i = t.pubads();
            return j.isObject(i) ? (j.addHookOnFunction(i, !1, "disableInitialLoad", nt.newDisableInitialLoadFunction), j.addHookOnFunction(i, !1, "enableSingleRequest", nt.newEnableSingleRequestFunction), nt.newAddHookOnGoogletagDisplay(t), j.addHookOnFunction(i, !1, "refresh", nt.newRefreshFuncton), j.addHookOnFunction(i, !1, "setTargeting", nt.newSetTargetingFunction), j.addHookOnFunction(t, !1, "destroySlots", nt.newDestroySlotsFunction), !0) : !1
        }
        return !1
    }

    function G(e) {
        return j.isObject(e) ? (e.googletag = e.googletag || {}, e.googletag.cmd = e.googletag.cmd || [], !0) : !1
    }

    function k(e) {
        if (j.isUndefined(e.google_onload_fired) && j.isObject(e.googletag) && j.isArray(e.googletag.cmd) && j.isFunction(e.googletag.cmd.unshift)) {
            j.log("Succeeded to load before GPT");
            var t = this;
            return e.googletag.cmd.unshift((function() {
                j.log("OpenWrap initialization started"), t.addHooks(e), j.log("OpenWrap initialization completed")
            })), !0
        }
        return j.log("Failed to load before GPT"), !1
    }

    function W(e) {
        return j.isObject(e) && j.isObject(e.PWT) && j.isFunction(e.PWT.jsLoaded) ? (e.PWT.jsLoaded(), !0) : !1
    }

    function H(e) {
        e.PWT.safeFrameMessageListenerAdded || (j.addMessageEventListenerForSafeFrame(e), e.PWT.safeFrameMessageListenerAdded = !0)
    }
    var z = i(2),
        K = i(4),
        j = i(1),
        V = i(6),
        Y = i(7),
        q = i(11),
        X = i(13),
        J = !1;
    t.displayHookIsAdded = J;
    var Q = !1,
        Z = !0,
        $ = {};
    t.wrapperTargetingKeys = $;
    var et = {};
    t.slotsMap = et;
    var tt = {},
        it = null,
        nt = this;
    t.setWindowReference = n, t.getWindowReference = r, t.getAdUnitIndex = o, t.getAdSlotSizesArray = a, t.setDisplayFunctionCalledIfRequired = s, t.storeInSlotsMap = d, t.generateSlotName = l, t.updateSlotsMapFromGoogleSlots = u, t.getStatusOfSlotForDivId = c, t.updateStatusAfterRendering = p, t.getSlotNamesByStatus = _, t.removeDMTargetingFromSlot = g, t.updateStatusOfQualifyingSlotsBeforeCallingAdapters = f, t.arrayOfSelectedSlots = S, t.defineWrapperTargetingKeys = I, t.findWinningBidAndApplyTargeting = m, t.defineWrapperTargetingKey = x, t.newDisableInitialLoadFunction = T, t.newEnableSingleRequestFunction = A, t.newSetTargetingFunction = h, t.newDestroySlotsFunction = O, t.updateStatusAndCallOriginalFunction_Display = D, t.findWinningBidIfRequired_Display = E, t.processDisplayCalledSlot = w, t.executeDisplay = F, t.displayFunctionStatusHandler = R, t.forQualifyingSlotNamesCallAdapters = y, t.newDisplayFunction = v, t.newAddHookOnGoogletagDisplay = P, t.findWinningBidIfRequired_Refresh = b, t.postRederingChores = C, t.postTimeoutRefreshExecution = M, t.callOriginalRefeshFunction = U, t.getQualifyingSlotNamesForRefresh = B, t.newRefreshFuncton = N, t.addHooks = L, t.defineGPTVariables = G, t.addHooksIfPossible = k, t.callJsLoadedIfRequired = W, t.initSafeFrameListener = H, t.init = function(e) {
        return z.initConfig(), j.isObject(e) ? (nt.setWindowReference(e), nt.initSafeFrameListener(e), nt.wrapperTargetingKeys = nt.defineWrapperTargetingKeys(K.WRAPPER_TARGETING_KEYS), nt.defineGPTVariables(e), q.registerAdapters(), nt.addHooksIfPossible(e), nt.callJsLoadedIfRequired(e), !0) : !1
    }
}), (function(e, t, i) {
    function n() {
        return Math.floor(100 * Math.random())
    }

    function r(e, t, i) {
        p.forEachOnObject(e, (function(e, n) {
            S.setInitTimeForSlotsForAdapter(t, e), n.fB(t, i)
        }))
    }

    function o(e, t) {
        p.forEachOnArray(e, (function(e, i) {
            var n = i.getDivID();
            _.resetBid(n, t), _.setSizes(n, p.generateSlotNamesFromPattern(i, "_W_x_H_"))
        }))
    }

    function a(e, t) {
        return !(e >= u.getAdapterThrottle(t))
    }

    function s(e, t) {
        p.forEachOnObject(e, (function(e, i) {
            _.setCallInitTime(i.getDivID(), t)
        }))
    }

    function d(e) {
        if (e) {
            var t = e.ID();
            p.isFunction(e.fB) ? S.registeredAdapters[t] = e : p.log(t + c.MESSAGES.M3)
        } else p.log(c.MESSAGES.M3), p.log(e)
    }

    function l() {
        S.registerAdapter(g.register())
    }
    var u = i(2),
        c = i(4),
        p = i(1),
        _ = i(6),
        g = i(12),
        f = {};
    t.registeredAdapters = f;
    var S = this;
    t.callAdapters = function(e) {
        var t = p.generateUUID();
        S.resetSlots(e, t), S.callAdapter(f, e, t)
    }, t.getRandomNumberBelow100 = n, t.callAdapter = r, t.resetSlots = o, t.throttleAdapter = a, t.setInitTimeForSlotsForAdapter = s, t.registerAdapter = d, t.registerAdapters = l
}), (function(e, t, i) {
    function n(e, t) {
        var i = I.createBid(e.bidderCode, t),
            n = parseInt(e.pubmaticServerErrorCode);
        return i.setGrossEcpm(e.cpm), i.setDealID(e.dealId), i.setDealChannel(e.dealChannel), i.setAdHtml(e.ad || ""), i.setAdUrl(e.adUrl || ""), i.setWidth(e.width), i.setHeight(e.height), i.setMi(e.mi), e.native && i.setNative(e.native), i.setReceivedTime(e.responseTimestamp), i.setServerSideResponseTime(e.serverSideResponseTime), f.getAdServerCurrency() && (m.isOwnProperty(e, "originalCpm") || (e.originalCpm = e.cpm), m.isOwnProperty(e, "originalCurrency") || (e.originalCurrency = m.getCurrencyToDisplay()), i.setOriginalCpm(window.parseFloat(e.originalCpm)), i.setOriginalCurrency(e.originalCurrency), m.isFunction(e.getCpmInNewCurrency) ? i.setAnalyticsCpm(window.parseFloat(e.getCpmInNewCurrency(S.COMMON.ANALYTICS_CURRENCY))) : i.setAnalyticsCpm(i.getGrossEcpm())), 1 === n || 2 === n || 6 === n ? (i.setDefaultBidStatus(-1), i.setWidth(0), i.setHeight(0)) : 3 === n || 4 === n || 5 === n ? (i.setDefaultBidStatus(0), 0 === i.isServerSide && i.setPostTimeoutStatus()) : n && i.setDefaultBidStatus(1), m.forEachOnObject(e.adserverTargeting, (function(e, t) {
            "hb_format" !== e && "hb_source" !== e && i.setKeyValuePair(e, t)
        })), i
    }

    function r(e, t) {
        var i = "";
        t.kgpvs.length > 0 && t.kgpvs.forEach((function(t) {
            e.bidderCode == t.adapterID && (i = t.kgpv)
        }));
        var n = i.split("@");
        if (n && 2 == n.length) {
            var r = n[1],
                o = null;
            n[1].indexOf(":") > 0 && (r = n[1].split(":")[0], o = n[1].split(":")[1]), e.getSize() && e.getSize() != r && "0X0" != e.getSize().toUpperCase() && (n[0].toUpperCase() == r.toUpperCase() && (n[0] = e.getSize().toLowerCase()), i = n[0] + "@" + e.getSize(), o && (i = i + ":" + o))
        }
        return i
    }

    function o(e) {
        var t = e.adUnitCode || "";
        if (m.isOwnProperty(E.kgpvMap, t)) {
            if ("pubmaticServer" === e.bidderCode && (e.bidderCode = e.originalBidder), f.isSingleImpressionSettingEnabled() && (E.kgpvMap[t].kgpv = E.checkAndModifySizeOfKGPVIfRequired(e, E.kgpvMap[t])), e.bidderCode && f.isServerSideAdapter(e.bidderCode)) {
                var i = E.kgpvMap[t].divID;
                if (!f.isSingleImpressionSettingEnabled()) {
                    var n = E.getPBCodeWithWidthAndHeight(i, e.bidderCode, e.width, e.height),
                        r = E.getPBCodeWithoutWidthAndHeight(i, e.bidderCode);
                    if (m.isOwnProperty(E.kgpvMap, n)) t = n;
                    else {
                        if (!m.isOwnProperty(E.kgpvMap, r)) return m.log("Failed to find kgpv details for S2S-adapter:" + e.bidderCode), void 0;
                        t = r
                    }
                }
                e.ss = f.isServerSideAdapter(e.bidderCode) ? 1 : 0
            }
            e.bidderCode && (e.timeToRespond < w && m.handleHook(S.HOOKS.BID_RECEIVED, [E.kgpvMap[t].divID, e]), x.setBidFromBidder(E.kgpvMap[t].divID, E.transformPBBidToOWBid(e, E.kgpvMap[t].kgpv)))
        } else m.log("Failed to find pbBid.adUnitCode in kgpvMap, pbBid.adUnitCode:" + e.adUnitCode)
    }

    function a(e) {
        for (var t in e)
            if (m.isOwnProperty(e, t) && m.isOwnProperty(E.kgpvMap, t))
                for (var i = e[t], r = i.bids || [], o = 0; o < r.length; o++) {
                    var a = r[o];
                    a.bidderCode && x.setBidFromBidder(E.kgpvMap[t].divID, n(a, E.kgpvMap[t].kgpv))
                }
    }

    function s(e, t, i, n) {
        return e + "@" + t + "@" + i + "X" + n
    }

    function d(e, t) {
        return e + "@" + t
    }

    function l(e, t, i) {
        var n = !1;
        return m.isOwnProperty(e, t) && e[t].bids.forEach((function(e) {
            e.bidder == i && (n = !0)
        })), n
    }

    function u(e, t, i, n, r, o, a, s, d, u) {
        var c, p, _ = a.getDivID();
        if (f.isSingleImpressionSettingEnabled()) {
            c = a.getDivID(), p = a.getSizes();
            var g = !1;
            if (E.kgpvMap[c] && E.kgpvMap[c].kgpvs && E.kgpvMap[c].kgpvs.length > 0) {
                if (m.forEachOnArray(E.kgpvMap[c].kgpvs, (function(t, i) {
                        i.adapterID == e && (g = !0)
                    })), g && l(t, c, e)) return
            } else E.kgpvMap[c] = {
                kgpvs: [],
                divID: _
            };
            if (!g) {
                var S = {
                    adapterID: e,
                    kgpv: r
                };
                E.kgpvMap[c].kgpvs.push(S)
            }
        } else o ? (c = E.getPBCodeWithWidthAndHeight(_, e, d, u), p = [
            [d, u]
        ]) : (c = E.getPBCodeWithoutWidthAndHeight(_, e), p = a.getSizes()), E.kgpvMap[c] = {
            kgpv: r,
            divID: _
        };
        if (f.isServerSideAdapter(e)) return m.log("Not calling adapter: " + e + ", for " + r + ", as it is serverSideEnabled."), void 0;
        if (m.isOwnProperty(t, c)) {
            if (f.isSingleImpressionSettingEnabled() && l(t, c, e)) return
        } else t[c] = {
            code: c,
            mediaTypes: m.getMediaTypeObject(f.getNativeConfiguration(), p, a),
            sizes: p,
            bids: [],
            divID: _
        };
        var I = {};
        switch (m.forEachOnObject(s, (function(e, t) {
            I[e] = t
        })), e) {
            case "pubmaticServer":
                I.publisherId = i.publisherId, I.adUnitIndex = "" + a.getAdUnitIndex(), I.adUnitId = a.getAdUnitID(), I.divId = a.getDivID(), I.adSlot = r, I.wiid = n, I.profId = f.getProfileID(), window.PWT.udpv && (I.verId = f.getProfileDisplayVersionID()), t[c].bids.push({
                    bidder: e,
                    params: I
                });
                break;
            case "pubmatic":
                I.publisherId = i.publisherId, I.adSlot = r, I.wiid = n, I.profId = f.getProfileID(), window.PWT.udpv && (I.verId = f.getProfileDisplayVersionID()), t[c].bids.push({
                    bidder: e,
                    params: I
                });
                break;
            case "pulsepoint":
                m.forEachOnArray(p, (function(i, n) {
                    var r = {};
                    m.forEachOnObject(s, (function(e, t) {
                        r[e] = t
                    })), r.cf = n[0] + "x" + n[1], t[c].bids.push({
                        bidder: e,
                        params: r
                    })
                }));
                break;
            case "adg":
                m.forEachOnArray(p, (function(i, n) {
                    var r = {};
                    m.forEachOnObject(s, (function(e, t) {
                        r[e] = t
                    })), r.width = n[0], r.height = n[1], t[c].bids.push({
                        bidder: e,
                        params: r
                    })
                }));
                break;
            case "yieldlab":
                m.forEachOnArray(p, (function(i, n) {
                    var r = {};
                    m.forEachOnObject(s, (function(e, t) {
                        r[e] = t
                    })), r.adSize = n[0] + "x" + n[1], t[c].bids.push({
                        bidder: e,
                        params: r
                    })
                }));
                break;
            case "ix":
            case "indexExchange":
                m.forEachOnArray(p, (function(i, n) {
                    var r = {};
                    s.siteID && (r.siteId = s.siteID), r.size = n, t[c].bids.push({
                        bidder: e,
                        params: r
                    })
                }));
                break;
            default:
                t[c].bids.push({
                    bidder: e,
                    params: I
                })
        }
    }

    function c(e, t, i, n, r) {
        m.log(e + S.MESSAGES.M1), t && m.forEachGeneratedKey(e, n, t, r, [], i, t[S.CONFIG.KEY_GENERATION_PATTERN], t[S.CONFIG.KEY_LOOKUP_MAP] || null, E.generatedKeyCallback, !0)
    }

    function p(e) {
        m.forEachOnObject(S.SRA_ENABLED_BIDDERS, (function(t) {
            m.isOwnProperty(A.adapters, t) && (e[t] = {
                singleRequest: !0
            })
        }))
    }

    function _(e, t) {
        if (!window[O]) return m.log("PreBid js is not loaded"), void 0;
        if (!m.isFunction(window[O].onEvent)) return m.log("PreBid js onEvent method is not available"), void 0;
        F || (window[O].onEvent("bidResponse", E.pbBidStreamHandler), F = !0), window[O].logging = m.isDebugLogEnabled();
        var i = {},
            n = T.getRandomNumberBelow100();
        f.forEachAdapter((function(r, o) {
            r !== E.parentAdapterID && (f.isServerSideAdapter(r) || 0 == T.throttleAdapter(n, r) ? (T.setInitTimeForSlotsForAdapter(e, r), E.generatePbConf(r, o, e, i, t)) : m.log(r + S.MESSAGES.M2))
        }));
        var r = [];
        for (var o in i) m.isOwnProperty(i, o) && r.push(i[o]);
        if (r.length > 0 && window[O]) try {
            if (m.isFunction(window[O].setConfig) || "function" == typeof window[O].setConfig) {
                var a = {
                    debug: m.isDebugLogEnabled(),
                    bidderSequence: "random",
                    userSync: {
                        enableOverride: !0,
                        syncsPerBidder: 0,
                        iframeEnabled: !0,
                        pixelEnabled: !0,
                        enabledBidders: (function() {
                            var e = [];
                            return f.forEachAdapter((function(t) {
                                e.push(t)
                            })), e
                        })(),
                        syncDelay: 2e3
                    },
                    disableAjaxTimeout: f.getDisableAjaxTimeout()
                };
                f.getGdpr() && (a.consentManagement = {
                    cmpApi: f.getCmpApi(),
                    timeout: f.getGdprTimeout(),
                    allowAuctionWithoutConsent: f.getAwc()
                }), f.getAdServerCurrency() && (m.log(S.MESSAGES.M26 + f.getAdServerCurrency()), a.currency = {
                    adServerCurrency: f.getAdServerCurrency(),
                    granularityMultiplier: 1
                }), E.assignSingleRequestConfigForBidders(a), m.handleHook(S.HOOKS.PREBID_SET_CONFIG, [a]), window[O].setConfig(a)
            }
            if (!m.isFunction(window[O].requestBids) && "function" != typeof window[O].requestBids) return m.log("PreBid js requestBids function is not available"), void 0;
            m.handleHook(S.HOOKS.PREBID_REQUEST_BIDS, [r]), window[O].requestBids({
                adUnits: r,
                bidsBackHandler: function(e) {
                    m.log("In PreBid bidsBackHandler with bidResponses: "), m.log(e), setTimeout(window[O].triggerUserSyncs, 10)
                },
                timeout: w
            })
        } catch (s) {
            m.log("Error occured in calling PreBid."), m.log(s)
        }
    }

    function g() {
        return E.parentAdapterID
    }
    var f = i(2),
        S = i(4),
        I = i(5),
        m = i(1),
        x = i(6),
        T = i(11),
        A = i(3),
        h = S.COMMON.PARENT_ADAPTER_PREBID,
        O = S.COMMON.PREBID_NAMESPACE;
    t.parentAdapterID = h;
    var D = {};
    t.kgpvMap = D;
    var E = this,
        w = f.getTimeout() - 50,
        F = !1;
    t.transformPBBidToOWBid = n, t.checkAndModifySizeOfKGPVIfRequired = r, t.pbBidStreamHandler = o, t.handleBidResponses = a, t.getPBCodeWithWidthAndHeight = s, t.isAdUnitsCodeContainBidder = l, t.getPBCodeWithoutWidthAndHeight = d, t.generatedKeyCallback = u, t.generatePbConf = c, t.assignSingleRequestConfigForBidders = p, t.fetchBids = _, t.getParenteAdapterID = g, t.register = function() {
        return {
            fB: E.fetchBids,
            ID: E.getParenteAdapterID
        }
    }
}), (function(e, t, i) {
    function n(e) {
        this.name = e, this.status = r.SLOT_STATUS.CREATED, this.divID = "", this.adUnitID = "", this.adUnitIndex = 0, this.sizes = [], this.keyValues = {}, this.arguments = [], this.pubAdServerObject = null, this.displayFunctionCalled = !1, this.refreshFunctionCalled = !1
    }
    var r = i(4);
    n.prototype.getName = function() {
        return this.name
    }, n.prototype.setStatus = function(e) {
        return this.status = e, this
    }, n.prototype.getStatus = function() {
        return this.status
    }, n.prototype.setDivID = function(e) {
        return this.divID = e, this
    }, n.prototype.getDivID = function() {
        return this.divID
    }, n.prototype.setAdUnitID = function(e) {
        return this.adUnitID = e, this
    }, n.prototype.getAdUnitID = function() {
        return this.adUnitID
    }, n.prototype.setAdUnitIndex = function(e) {
        return this.adUnitIndex = e, this
    }, n.prototype.getAdUnitIndex = function() {
        return this.adUnitIndex
    }, n.prototype.setSizes = function(e) {
        return this.sizes = e, this
    }, n.prototype.getSizes = function() {
        return this.sizes
    }, n.prototype.setKeyValue = function(e, t) {
        return this.keyValues[e] = t, this
    }, n.prototype.setKeyValues = function(e) {
        return this.keyValues = e, this
    }, n.prototype.getkeyValues = function() {
        return this.keyValues
    }, n.prototype.setArguments = function(e) {
        return this.arguments = e, this
    }, n.prototype.getArguments = function() {
        return this.arguments
    }, n.prototype.setPubAdServerObject = function(e) {
        return this.pubAdServerObject = e, this
    }, n.prototype.getPubAdServerObject = function() {
        return this.pubAdServerObject
    }, n.prototype.setDisplayFunctionCalled = function(e) {
        return this.displayFunctionCalled = e, this
    }, n.prototype.isDisplayFunctionCalled = function() {
        return this.displayFunctionCalled
    }, n.prototype.setRefreshFunctionCalled = function(e) {
        return this.refreshFunctionCalled = e, this
    }, n.prototype.isRefreshFunctionCalled = function() {
        return this.refreshFunctionCalled
    }, n.prototype.updateStatusAfterRendering = function(e) {
        this.status = r.SLOT_STATUS.DISPLAYED, this.arguments = [], e ? this.refreshFunctionCalled = !1 : this.displayFunctionCalled = !1
    }, e.exports.Slot = n, t.createSlot = function(e) {
        return new n(e)
    }
})]);