"use strict";

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function _slicedToArray(e, t) {
    return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
}

function _iterableToArrayLimit(e, t) {
    var r = [],
        a = !0,
        i = !1,
        o = void 0;
    try {
        for (var n, s = e[Symbol.iterator](); !(a = (n = s.next()).done) && (r.push(n.value), !t || r.length !== t); a = !0);
    } catch (e) {
        i = !0, o = e
    } finally {
        try {
            a || null == s.return || s.return()
        } finally {
            if (i) throw o
        }
    }
    return r
}

function _arrayWithHoles(e) {
    if (Array.isArray(e)) return e
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
        var a = t[r];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
    }
}

function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}
require = function() {
    return function e(t, r, a) {
        function i(n, s) {
            if (!r[n]) {
                if (!t[n]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(n, !0);
                    if (o) return o(n, !0);
                    var c = new Error("Cannot find module '" + n + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = r[n] = {
                    exports: {}
                };
                t[n][0].call(u.exports, function(e) {
                    return i(t[n][1][e] || e)
                }, u, u.exports, e, t, r, a)
            }
            return r[n].exports
        }
        for (var o = "function" == typeof require && require, n = 0; n < a.length; n++) i(a[n]);
        return i
    }
}()({
    1: [function(e, t, r) {
        var a = !1,
            i = window || self;
        try {
            a = !!i.localStorage.getItem("f7c9180f-5c45-47b4-8de4-428015f096c0")
        } catch (e) {}
        t.exports = a
    }, {}],
    2: [function(e, t, r) {
        var a = e("../enabled");
        t.exports = function(e) {
            return function() {
                if (a && "object" === _typeof(window.console) && "function" == typeof console[e]) return console[e].apply(console, Array.prototype.slice.call(arguments, 0))
            }
        }
    }, {
        "../enabled": 1
    }],
    3: [function(e, t, r) {
        t.exports = e("./internal/expose")("log")
    }, {
        "./internal/expose": 2
    }],
    "@marcom/data-relay": [function(e, t, r) {
        var a, i = e("@marcom/ac-console/log");
        try {
            a = e("@marcom/ac-analytics")
        } catch (e) {
            i(e)
        }
        var o = {
                properties: {
                    absoluteUrlRegex: new RegExp("^(?:[a-z]+:)+//", "i"),
                    analyticsTitle: "data relayed",
                    cidQueryParam: "cid",
                    cookieDomain: ".apple.com",
                    cookieMaxKeyLength: 5,
                    cookieName: "aw_rid",
                    cookieValueSeparator: "|",
                    cookieValueEntrySeparator: ":",
                    customAnalyticsAttribute: "",
                    dataMaxLength: 100,
                    deferNavigationTimeout: 400,
                    interactionEvent: "mouseup",
                    internalLinkAttribute: "data-analytics-intrapage-link",
                    parseRelativeUrlRegex: new RegExp("^([./]*)(.+)"),
                    prefixAllowedCharacters: /^[A-Za-z0-9_]+$/,
                    prefixMaxLength: 3,
                    relayButtonUrlAttribute: "data-url",
                    ridQueryParam: "rid",
                    ridRelayAttribute: "data-rid-relay",
                    ridRelaySelector: "[data-rid-relay]",
                    ridStoreAttribute: "data-rid-store",
                    ridStoreSelector: "[data-rid-store]",
                    ridPrefixSeparator: "-",
                    trackingDataSeparator: "|",
                    trackingProperty: "eVar17",
                    urlFormatHostName: "https://apple.com/",
                    urlSeparator: ",",
                    valueAllowedCharacters: /^[A-Za-z0-9-_%]+$/
                },
                options: {
                    automaticMode: !0,
                    canDeferNavigation: !0,
                    trackCid: !1,
                    useJsonStorageFormat: !1,
                    useSecureCookie: !0
                },
                passiveTracking: {
                    overwriteStorageItem: !1,
                    overwriteStorageItemValues: !0,
                    overwriteAppMeasurementValues: !0,
                    overwriteAppMeasurementEvents: !0
                }
            },
            n = function() {
                function e(t) {
                    _classCallCheck(this, e), this._isSupported() && this._initialize(t)
                }
                return _createClass(e, [{
                    key: "_isSupported",
                    value: function() {
                        if (!(window && document && document.documentElement && Array.prototype.includes)) return !1;
                        try {
                            var e = new window.URL("x", "http://w");
                            return e.pathname = "y%20z", "http://w/y%20z" === e.href && void 0 !== e.searchParams
                        } catch (e) {
                            return !1
                        }
                    }
                }, {
                    key: "_initialize",
                    value: function(e) {
                        if (this.options = o.options, this.properties = o.properties, this.passiveTracking = o.passiveTracking, this.analytics = a, this._applyConfigurations(e), this.options.automaticMode) {
                            var t = this.getRidFromUrl(window.location.href);
                            this.storeRid(t), this._setupEventHandlers()
                        }
                    }
                }, {
                    key: "_applyConfigurations",
                    value: function(e) {
                        var t = this;
                        if (e) {
                            var r = Object.keys(o);
                            Object.keys(e).forEach(function(a) {
                                r.includes(a) && (t[a] = Object.assign(t[a], e[a]))
                            })
                        }
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleClick = this._handleClick.bind(this), document.documentElement.addEventListener(this.properties.interactionEvent, this._handleClick)
                    }
                }, {
                    key: "_handleClick",
                    value: function(e) {
                        var t = this._ancestor(e.target, "".concat(this.properties.ridRelaySelector, ", ").concat(this.properties.ridStoreSelector));
                        i("Data Relay - click occurred - looking for ancestor that has data-rid-relay or data-rid-store"), t && (t.getAttribute(this.properties.ridRelayAttribute) ? (i("Data Relay - an element with data-rid-relay was clicked"), this._handleRidRelay(e, t)) : t.getAttribute(this.properties.ridStoreAttribute) && (i("Data Relay - an element with data-rid-store was clicked"), this._handleRidStore(e, t)))
                    }
                }, {
                    key: "storeRid",
                    value: function(e) {
                        if (e) {
                            var t = this.getRidFromCookie();
                            t ? (i("Data Relay - cookie was already there, combining the new data with the current cookie data"), i("Data Relay - current data stored in cookie", t), i("Data Relay - the rid that is currently in the URL that is overwriting the current rid", e), i("Data Relay - the combined value of the old and new rid data"), this.writeCookieFromObj(this._prepareCookieData(e, t))) : (i("Data Relay - cookie was not already there - just created now"), i('Data Relay - wrote the following string to the cookie:"', JSON.stringify(e) + '"'), this.writeCookieFromObj(this._prepareCookieData(e)))
                        }
                    }
                }, {
                    key: "_prepareCookieData",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this._deleteInvalidValues(e);
                        var r = Object.assign({}, t, e),
                            a = Object.keys(r),
                            i = a.length - this.properties.cookieMaxKeyLength;
                        if (i <= 0) return r;
                        for (var o = Object.keys(e), n = a.filter(function(e) {
                                return !o.includes(e)
                            }); i > 0;) {
                            var s = void 0;
                            s = n.length ? n : o, delete r[this._getRandomArrayItem(s)], i--
                        }
                        return r
                    }
                }, {
                    key: "writeCookieFromObj",
                    value: function(e) {
                        var t = "";
                        return this.options.useSecureCookie && (t = " secure;"), !this.options.trackCid && e.cid && delete e.cid, this._deleteInvalidValues(e), !this._isEmpty(e) && (!!(e = this._formatCookieData(e)) && (document.cookie = "".concat(this.properties.cookieName, "=").concat(e, "; path=/; domain=").concat(this.properties.cookieDomain, ";").concat(t), e))
                    }
                }, {
                    key: "_formatCookieData",
                    value: function(e) {
                        return e ? this.options.useJsonStorageFormat ? encodeURIComponent(JSON.stringify(e)) : this._createSimpleFormatCookieData(e) : null
                    }
                }, {
                    key: "_createSimpleFormatCookieData",
                    value: function(e) {
                        var t = this,
                            r = "";
                        return Object.keys(e).forEach(function(a) {
                            r += "".concat(a).concat(t.properties.cookieValueEntrySeparator).concat(encodeURIComponent(e[a])).concat(t.properties.cookieValueSeparator)
                        }), r = r.substring(0, r.length - this.properties.cookieValueSeparator.length), encodeURIComponent(r)
                    }
                }, {
                    key: "_handleRidRelay",
                    value: function(e, t) {
                        var r = this.getRidMappingFromEl(t);
                        if (r) {
                            var a, o = this.getRidFromCookie();
                            o ? a = this.relayDataToElement(t, r, o) : i("Data Relay - no cookie data applied, there was no data stored in the cookie"), a || (a = this.getTrackingDataForEl(t, r)), a && this._trackAnalyticsData(t, a, r, e)
                        } else i("Data Relay - no action taken, there was no proper data mapping")
                    }
                }, {
                    key: "_handleRidStore",
                    value: function(e, t) {
                        var r = this.getRidStorageDataFromEl(t);
                        r ? (i("Data Relay - rid storage data found in element - attempting to store"), this.storeRid(r)) : i("Data Relay - no action taken, there was no proper data in the rid store attribute")
                    }
                }, {
                    key: "_trackAnalyticsData",
                    value: function(e, t, r, a) {
                        if (i("Data Relay - analytics tracking - " + this.properties.trackingProperty + ' should be tracked with the value "', t + '"'), this.analytics) {
                            var o = this._createTrackingData(e, t, r);
                            if (e.getAttribute("data-analytics-click") || e.hasAttribute("data-analytics-exit-link") || this.properties.customAnalyticsAttribute && e.hasAttribute(this.properties.customAnalyticsAttribute)) return delete o.title, void this.analytics.passiveTracker(o, this.passiveTracking);
                            this.options.canDeferNavigation && "A" === e.tagName && !this._isIntraPageLink(e) && (a.preventDefault(), this.timeout = setTimeout(function() {
                                window.location = e.href
                            }, this.properties.deferNavigationTimeout)), this.analytics.track(o)
                        }
                    }
                }, {
                    key: "_createTrackingData",
                    value: function(e, t, r) {
                        var a = {};
                        e && e.hasAttribute("data-rid-options") && (a = JSON.parse(e.getAttribute("data-rid-options")));
                        var i = this._buildEventsString(r, a),
                            o = {
                                title: a.analyticsTitle || this.properties.analyticsTitle,
                                events: i
                            };
                        return o[a.trackingProperty || this.properties.trackingProperty] = t, o
                    }
                }, {
                    key: "_buildEventsString",
                    value: function(e, t) {
                        var r = "";
                        return Object.keys(e).forEach(function(e) {
                            t && t.eventTracking && t.eventTracking[e] ? r += "event".concat(t.eventTracking[e], ",") : "cid" !== e && (r += "event".concat(e, ","))
                        }), r = r.substring(0, r.length - 1)
                    }
                }, {
                    key: "getTrackingDataForEl",
                    value: function(e, t) {
                        var r, a = this,
                            o = [];
                        e.href ? r = "href" : e.getAttribute(this.properties.relayButtonUrlAttribute) && (r = this.properties.relayButtonUrlAttribute);
                        var n = Object.keys(t),
                            s = e.getAttribute(r),
                            l = this.getQueryString(this._formatUrl(s).url);
                        return n.forEach(function(e) {
                            var r = [];
                            if ("string" == typeof t[e] && (t[e] = [t[e]]), t[e].forEach(function(e) {
                                    var t = l[e];
                                    if (t && a.properties.valueAllowedCharacters.test(t)) {
                                        if (e === a.properties.cidQueryParam && null !== t) {
                                            if (!a.options.trackCid) return;
                                            t = "".concat(a.properties.cidQueryParam, "-").concat(t)
                                        }
                                        t && r.push(t)
                                    }
                                }), r.length < 1) i("Data Relay - there was no data available in the elements url that corresponds to the rid to query param mapping, so this data will not be tracked on " + a.properties.trackingProperty);
                            else {
                                var n = new Set(r);
                                Array.from(n).forEach(function(e) {
                                    o.push(e)
                                })
                            }
                        }), i('Data Relay - built the data for a link that had no data relayed to it, the current value of "' + o + '" will be tracked on ' + this.properties.trackingProperty), o.join(this.properties.trackingDataSeparator)
                    }
                }, {
                    key: "relayDataToElement",
                    value: function(e, t, r) {
                        var a = this,
                            o = [],
                            n = [];
                        e.href && o.push("href"), e.getAttribute(this.properties.relayButtonUrlAttribute) && o.push(this.properties.relayButtonUrlAttribute);
                        var s = Object.keys(t);
                        return o.forEach(function(o) {
                            var l = a._formatUrl(e.getAttribute(o)),
                                c = new URL(l.url);
                            s.forEach(function(s) {
                                if (s + "" in r) {
                                    if (s === a.properties.cidQueryParam) {
                                        if (!a.options.trackCid) return;
                                        n.push("".concat(s, "-").concat(r[s]))
                                    } else n.push(r[s]);
                                    "string" == typeof t[s] && (t[s] = [t[s]]), t[s].forEach(function(e) {
                                        c.searchParams.set(e, r[s])
                                    });
                                    var u = c.toString();
                                    l.relative && (u = u.replace(a.properties.urlFormatHostName, l.original)), e.setAttribute(o, decodeURIComponent(u)), i('Data Relay - the data-url of the element had the query string named "' + t[s] + '" and the value of it was replaced with ' + r[s] + ' rid - "' + s + '"')
                                }
                            })
                        }), n.join(this.properties.trackingDataSeparator)
                    }
                }, {
                    key: "getRidFromCookie",
                    value: function() {
                        var e = this,
                            t = document.cookie,
                            r = (t = t.split("; ")).find(function(t) {
                                return 0 === t.indexOf(e.properties.cookieName)
                            });
                        return r ? (r = this._readCookie(r.split("=")[1]), this._deleteInvalidValues(r), !this._isEmpty(r) && r) : null
                    }
                }, {
                    key: "_readCookie",
                    value: function(e) {
                        return e ? this.options.useJsonStorageFormat ? JSON.parse(decodeURIComponent(e)) : this._readSimpleFormatCookie(e) : {}
                    }
                }, {
                    key: "_readSimpleFormatCookie",
                    value: function(e) {
                        var t = this;
                        return (e = decodeURIComponent(e)).split(this.properties.cookieValueSeparator).reduce(function(e, r) {
                            var a = _slicedToArray(r.split(t.properties.cookieValueEntrySeparator), 2),
                                i = a[0],
                                o = a[1];
                            return e[i] = decodeURIComponent(o), e
                        }, {})
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        document.documentElement.removeEventListener(this.properties.interactionEvent, this._handleClick)
                    }
                }, {
                    key: "getRidMappingFromEl",
                    value: function(e) {
                        return JSON.parse(e.getAttribute(this.properties.ridRelayAttribute))
                    }
                }, {
                    key: "getRidStorageDataFromEl",
                    value: function(e) {
                        var t = JSON.parse(e.getAttribute(this.properties.ridStoreAttribute));
                        return this._deleteInvalidValues(t), !this._isEmpty(t) && t
                    }
                }, {
                    key: "getRidFromUrl",
                    value: function(e) {
                        var t = this.getQueryString(e),
                            r = t[this.properties.ridQueryParam],
                            a = {};
                        if (r && (a = this._parseRidStringData(r)), this.options.trackCid) {
                            var i, o = t[this.properties.cidQueryParam];
                            o && (i = this._parseCidStringData(o)), i && Object.assign(a, i)
                        }
                        return this._isEmpty(a) && (a = null), a
                    }
                }, {
                    key: "getRelayData",
                    value: function(e, t, r, a) {
                        var i = this;
                        if (!e) return null;
                        void 0 === r && (r = !0), void 0 === a && (a = !1);
                        var o = this.getRidFromCookie();
                        if (!o && !t) return null;
                        var n = new Set,
                            s = new Set;
                        Array.isArray(e) || (e = [e]), Array.isArray(t) || (t = [t]), e.forEach(function(e, r) {
                            if (!(e.length > i.properties.prefixMaxLength || !i.properties.prefixAllowedCharacters.test(e))) {
                                if (!o || void 0 === o[e] || i.properties.dataMaxLength < o[e].length || !i.properties.valueAllowedCharacters.test(o[e])) {
                                    if (!t[r] || i.properties.dataMaxLength < t[r].length || !i.properties.valueAllowedCharacters.test(t[r])) return;
                                    n.add(t[r])
                                } else n.add(o[e]);
                                s.add("event".concat(e))
                            }
                        }), n = this._listToString(n);
                        var l = _defineProperty({
                            events: s = this._listToString(s)
                        }, this.properties.trackingProperty, n);
                        return this.analytics && r && t && l[this.properties.trackingProperty] && l.events && (a ? this.analytics.passiveTracker(l, this.passiveTracking) : (l.title = this.properties.analyticsTitle, this.analytics.track(l))), {
                            data: n,
                            trackingData: l
                        }
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        var t = this.getRidFromCookie();
                        return t && void 0 !== t[e] ? t[e] : null
                    }
                }, {
                    key: "set",
                    value: function(e, t) {
                        return e && "string" == typeof e && t && "string" == typeof t ? this.storeRid(_defineProperty({}, e, t)) : null
                    }
                }, {
                    key: "_listToString",
                    value: function(e) {
                        var t = "";
                        return e.forEach(function(e) {
                            t += "".concat(e, ",")
                        }), t.substring(0, t.length - 1)
                    }
                }, {
                    key: "getQueryString",
                    value: function(e) {
                        var t = {};
                        return e.substring(e.indexOf("?") + 1).split("&").forEach(function(e) {
                            var r = _slicedToArray(e.split("="), 2),
                                a = r[0],
                                i = r[1];
                            t[a] = i
                        }), t
                    }
                }, {
                    key: "_deleteInvalidValues",
                    value: function(e) {
                        var t = this;
                        Object.keys(e).forEach(function(r) {
                            (t.properties.dataMaxLength < e[r].length || t.properties.prefixMaxLength < r.length || !t.properties.valueAllowedCharacters.test(e[r]) || !t.properties.prefixAllowedCharacters.test(r)) && delete e[r]
                        })
                    }
                }, {
                    key: "_isEmpty",
                    value: function(e) {
                        return 0 === Object.keys(e).length
                    }
                }, {
                    key: "_parseRidStringData",
                    value: function(e) {
                        var t, r = this;
                        try {
                            t = decodeURIComponent(e)
                        } catch (e) {
                            i(e)
                        }
                        if (!t) return {};
                        var a = {};
                        return t.split(this.properties.urlSeparator).forEach(function(e) {
                            var t = e.split(r.properties.ridPrefixSeparator),
                                i = t.shift();
                            if (i && i.length <= r.properties.prefixMaxLength && r.properties.prefixAllowedCharacters.test(i)) {
                                var o = t.join(r.properties.ridPrefixSeparator);
                                o = encodeURIComponent(o), r.properties.valueAllowedCharacters.test(o) && (a[i] = o)
                            }
                        }), a
                    }
                }, {
                    key: "_formatUrl",
                    value: function(e) {
                        var t = {
                            relative: !1,
                            original: !1,
                            url: null
                        };
                        if (this.properties.absoluteUrlRegex.test(e)) return t.url = e, t;
                        var r = this.properties.parseRelativeUrlRegex.exec(e);
                        return r.length && r[r.length - 1] ? (t.relative = !0, t.original = r[1], t.url = this.properties.urlFormatHostName + r[r.length - 1], t) : null
                    }
                }, {
                    key: "_parseCidStringData",
                    value: function(e) {
                        var t = {};
                        return t[this.properties.cidQueryParam] = e, t
                    }
                }, {
                    key: "_ancestor",
                    value: function(e, t) {
                        if (e.matches(t)) return e;
                        for (;
                            (e = e.parentNode) && e.nodeType === Node.ELEMENT_NODE;) {
                            if (!t || e.matches(t)) return e;
                            if (e === document.documentElement) break
                        }
                        return null
                    }
                }, {
                    key: "_getRandomArrayItem",
                    value: function(e) {
                        return e.splice(Math.floor(Math.random() * e.length), 1)
                    }
                }, {
                    key: "_isIntraPageLink",
                    value: function(e) {
                        var t = e.getAttribute("href");
                        return !(null !== t && "#" !== t.charAt(0) && 0 !== t.indexOf("javascript:") && 0 !== t.indexOf("mailto:") && 0 !== t.indexOf("tel:") && !e.hasAttribute(this.properties.internalLinkAttribute))
                    }
                }]), e
            }();
        t.exports = n
    }, {
        "@marcom/ac-analytics": "@marcom/ac-analytics",
        "@marcom/ac-console/log": 3
    }]
}, {}, []);