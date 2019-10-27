/*! 20191006-9-RELEASE 2019-10-06 */

! function(t) {
    var e = "${jsScope}";
    e.indexOf("{jsScope}") > -1 && (e = "TRC"), t[e] || (t[e] = {})
}(window),
function(t, e) {
    t.TRC = t.TRC || {};
    var n = function() {
            return !0
        },
        i = function(n, i, r, o) {
            var a = n + "/" + encodeURIComponent(r || t.TRC.publisherId) + "/log/3" + "/" + i;
            return o && (a += "?" + e.TRCLogger.formatParams(o)), a
        },
        r = function(e, i) {
            var r, o = new(t.XDomainRequest || t.XMLHttpRequest);
            return o.open(e, i), o.onload = n, o.onerror = n, o.ontimeout = n, o.onprogress = n, o.withCredentials = !0, o
        };
    t.TRC.TRCLogger = e.TRCLogger = {
        post: function(t, n, o, a, s) {
            var c = i(t, n, a, s),
                u = r("POST", c);
            u.setRequestHeader && u.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), u.send(e.TRCLogger.formatParams(o))
        },
        get: function(t, e, n, o) {
            var a = i(t, e, o, n),
                s;
            r("GET", a).send()
        },
        formatParams: function(t) {
            var e = [];
            for (var n in t) t.hasOwnProperty(n) && e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
            return e.join("&")
        }
    }
}(window, window["${jsScope}".indexOf("{jsScope}") >= 0 ? "TRC" : "${jsScope}"]),
function(t, e) {
    if (e && !e.MessageDelayer) {
        var n = function(n) {
                return function(i) {
                    var r = i.detail,
                        o = i.type,
                        a = "" + r[this.groupingKeyName],
                        s = this.delayedEventsMap[a],
                        c = e.eventUtils.getDateNow();
                    if (s) {
                        this.timeoutHandles[a] && (clearTimeout(this.timeoutHandles[a]), this.timeoutHandles[a] = null);
                        var u = [].concat(s);
                        this.delayedEventsMap[a] = [];
                        for (var l = 0; l < u.length; l++) {
                            var f = u[l],
                                d;
                            n(f.config).apply(t, [f.groupingKey, f.message, r, o, c - f.queueTime])
                        }
                    }
                }
            },
            i = n(function(t) {
                return t.successCallback
            }),
            r = n(function(t) {
                return t.failCallback
            }),
            o = function(t, e) {
                var n = "" + t;
                this.timeoutHandles[n] || (this.timeoutHandles[n] = setTimeout(function() {
                    this.timeoutHandles[n] = null;
                    var e = {};
                    e[this.groupingKeyName] = t, r.call(this, {
                        detail: e,
                        type: "dt"
                    })
                }.bind(this), e))
            };
        e.MessageDelayer = function(t, n, o) {
            if (this.groupingKeyName = t, this.delayedEventsMap = {}, this.timeoutHandles = {}, e.eventUtils.safeAddEventListener(n, i.bind(this)), o)
                for (var a = 0; a < o.length; a++) e.eventUtils.safeAddEventListener(o[a], r.bind(this))
        }, e.MessageDelayer.prototype = {
            constructor: e.MessageDelayer,
            delayMessage: function(t, n, i) {
                var r = "" + t;
                i.failCallback = i.failCallback || function() {}, this.delayedEventsMap[r] || (this.delayedEventsMap[r] = []), this.delayedEventsMap[r].push({
                    groupingKey: t,
                    message: n,
                    config: i,
                    queueTime: e.eventUtils.getDateNow()
                }), i.timeoutInMillis && o.call(this, t, i.timeoutInMillis)
            }
        }
    }
}(window, window["${jsScope}".indexOf("{jsScope}") >= 0 ? "TRC" : "${jsScope}"]),
function(t, e, n) {
    var i, r, o, a, s, c, u, l;
    ! function() {
        if ("function" == typeof t.CustomEvent) return !1;

        function n(t, n) {
            n = n || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var i = e.createEvent("CustomEvent");
            return i.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), i
        }
        n.prototype = t.Event.prototype, t.CustomEvent = n
    }(), n.eventUtils = n.eventUtils || {}, n.eventUtils.dispatchEvent = n.eventUtils.dispatchEvent || function(t, e) {
        "function" == typeof CustomEvent && document.dispatchEvent(new CustomEvent(t, {
            detail: e || {}
        }))
    }, n.eventUtils.safeAddEventListener = n.eventUtils.safeAddEventListener || function(t, e) {
        document.addEventListener(t, function(t) {
            try {
                e.call(this, t)
            } catch (t) {}
        })
    }, n.eventUtils.getDateNow = n.eventUtils.getDateNow || function() {
        var t, e;
        if (Date.now) {
            if ("number" == typeof(t = Date.now())) return t;
            if ("number" == typeof(e = Number(t))) return e
        }
        return (new Date).getTime()
    }, n.sharedEvents = n.sharedEvents || {
        PAGE_VIEW: "TRK_TFA_PAGE_VIEW",
        REQUEST_ID_CREATED: "TRK_TFA_REQUEST_ID_CREATED",
        REQUEST_ID_CREATION_TIMEOUT: "TRK_TFA_REQUEST_ID_CREATION_TIMEOUT",
        REQUEST_ID_CREATION_ERROR: "TRK_TFA_REQUEST_ID_CREATION_ERROR",
        REQUEST_ID_CREATION_JS_ERROR: "TRK_TFA_REQUEST_ID_CREATION_JS_ERROR",
        INVALID_TRK_RESPONSE: "TRK_TFA_INVALID_TRK_RESPONSE"
    }, n.publisherIdType = n.publisherIdType || {
        NAME: "n",
        ID: "i"
    }, n.pageViewInitiator = n.pageViewInitiator || {
        TRK: "trk",
        TFA: "tfa"
    }, n.util = n.util || {}, n.util.getReferrer = n.util.getReferrer || (r = function() {
        try {
            return decodeURI(top.window.document.referrer)
        } catch (t) {}
        return null
    }, o = /https?:\/\/\w+\.taboola(?:syndication)?\.com/, u = [function() {
        for (var t = document.head.getElementsByTagName("link"), e = 0; e < t.length; e++)
            if ("referrer" === t[e].rel) return t[e].href;
        return null
    }, function() {
        var t = r();
        return t ? a(t) : null
    }, function() {
        return "N/A"
    }], (l = function() {
        for (var t, e = 0; !t && e < u.length; e++) t = u[e].call(this);
        return t
    }).innerExtractReferrerFromTopMostReferrer = a = function(t) {
        return o.test(t) ? t.split("?")[0] : t.substr(0, 400)
    }, l), n.util.isString = function(t) {
        return "string" == typeof t || t instanceof String
    }
}(window, document, window["${jsScope}".indexOf("{jsScope}") >= 0 ? "TRC" : "${jsScope}"]),
function(t, e) {
    t._tfa = t._tfa || [], t._tfa.config || (t._tfa.TfaConfig = function() {
        this.configMap = {}
    }, t._tfa.TfaConfig.prototype = {
        safeGet: function(t, e, n) {
            var i, r, o;
            if (n && this.configMap[n]) i = "" + n;
            else {
                if (!this.firstPublisherId) return e;
                i = this.firstPublisherId
            }
            try {
                return void 0 === (o = (r = this.configMap[i])[t]) ? e : o
            } catch (t) {
                return e
            }
        },
        hasValidConfig: function() {
            return !!this.firstPublisherId
        },
        addConfig: function(t, n) {
            e.util.isString(n) || (this.firstPublisherId || (this.firstPublisherId = t), this.configMap["" + t] = n)
        }
    }, t._tfa.config = new t._tfa.TfaConfig, t._taboola = t._taboola || []), t._tfa.config.addConfig("${publisherId}", "${tfa_config}")
}(window, window["${jsScope}".indexOf("{jsScope}") >= 0 ? "TRC" : "${jsScope}"]),
function(t, e, n) {
    "use strict";
    var i = n.jsScope,
        r = {
            map: function(t, e) {
                if ("function" == typeof Array.prototype.map) return e.map(t);
                for (var n = [], i = 0; i < e.length; i++) n.push(t(e[i], i, e));
                return n
            },
            forEach: function(t, e) {
                if ("function" == typeof Array.prototype.forEach) return e.forEach(t);
                for (var n = 0; n < e.length; n++) t(e[n], n, e)
            },
            filter: function(t, e) {
                if ("function" == typeof Array.prototype.filter) return e.filter(t);
                for (var n = [], i = 0; i < e.length; i++) t(e[i], i, e) && n.push(e[i]);
                return n
            },
            objKeys: Object.keys || (o = Object.prototype.hasOwnProperty, a = !{
                toString: null
            }.propertyIsEnumerable("toString"), s = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], c = s.length, function(t) {
                if ("function" != typeof t && ("object" != typeof t || null === t)) throw new TypeError("Object.keys called on non-object");
                var e = [],
                    n, i;
                for (n in t) o.call(t, n) && e.push(n);
                if (a)
                    for (i = 0; i < c; i++) o.call(t, s[i]) && e.push(s[i]);
                return e
            })
        },
        o, a, s, c;
    n.networkMap && "string" != typeof n.networkMap || (n.networkMap = {});
    var u = null,
        l = null,
        f = null,
        d = null,
        h = {},
        g = 0,
        p = !1,
        m = "requestTimeoutHandle",
        v = "requestId",
        S = "requestStatus",
        T = "trkRequestDone",
        E = 5e3,
        I = "init",
        w = "pr",
        y = "pud",
        R = "tto",
        b = "s",
        _ = "f",
        C = "u",
        D = [R, _],
        N = [I, w, y],
        O = (($ = {})[i.publisherIdType.NAME] = "name", $[i.publisherIdType.ID] = "id", $),
        U = function() {
            for (var t = {}, e = r.objKeys(n.networkMap), o = 0; o < e.length; ++o) {
                var a;
                t["" + n.networkMap[e[o]][O[i.publisherIdType.ID]]] = !0
            }
            return t
        }(),
        M = "gk",
        P = "dk",
        k = "TRK_RELEASE_DELAYED_REQUESTS_EVENT",
        A = function() {
            var t = {};
            return t[M] = P, t
        }(),
        V = new i.MessageDelayer(M, k),
        j = function(t, e) {
            L = L.loadTrc(e.publisherId, e.publisherIdType, e.config, e.requestData)
        },
        x = {
            UNINITIALIZED: {
                loadTrc: function(t, e, n, i) {
                    var r = wt();
                    return X(t, e, n, i), r ? x.USER_ID_SET : x.PENDING_USER_ID_SET
                }
            },
            PENDING_USER_ID_SET: {
                loadTrc: function(t, e, n, i) {
                    return i[S] = y, V.delayMessage(P, {
                        publisherId: t,
                        publisherIdType: e,
                        config: n,
                        requestData: i
                    }, {
                        successCallback: j
                    }), x.PENDING_USER_ID_SET
                }
            },
            USER_ID_SET: {
                loadTrc: function(t, e, n, i) {
                    return X(t, e, n, i), x.USER_ID_SET
                }
            }
        },
        L = x.UNINITIALIZED,
        $, q = function() {
            return !0 === n.tfaContext
        },
        K = function() {
            try {
                localStorage.setItem("taboolaStorageDetection", "detect"), localStorage.removeItem("taboolaStorageDetection")
            } catch (t) {
                return !1
            }
            return !0
        },
        F = function(t, e, n) {
            var i = t.split(e);
            return i.slice(0, n - 1).concat(i.length >= n ? i.slice(n - 1).join(e) : [])
        },
        H = function(t) {
            if (!t) throw new Error("Invalid URL!");
            this.href = t;
            var e = F(t, "#", 2);
            return this.hash = e.length > 1 ? "#" + e.pop() : "", t = e[0], e = F(t, "?", 2), this.search = e.length > 1 ? "?" + e.pop() : "", t = e[0], e = F(t, "://", 2), this.protocol = e.length > 1 ? e.shift() + ":" : "", t = e[0], e = F(t, "/", 2), this.pathname = e.length > 1 ? "/" + e.pop() : "/", t = e[0], e = F(t, "@", 2), this.auth = e.length > 1 ? e.shift() : "", t = e[0], e = F(t, ":", 2), this.port = e.length > 1 ? parseInt(e.pop()) : 0, this.host = e[0], this
        },
        G = {
            "http:": 1,
            "https:": 1
        };
    H.prototype.toString = function(t) {
        return (this.host ? this.protocol + "//" + (this.auth ? this.auth + "@" : "") + this.host + (this.port ? ":" + this.port : "") : "") + this.pathname + this.search + (t ? "" : this.hash || "")
    }, H.prototype.switchProtocol = function(t, e) {
        var n = this instanceof H ? this : new H(this),
            i;
        return G[t] && (e && "https:" === n.protocol || (n.protocol = t)), (i = n.toString(!1)).length > 1 ? i : ""
    }, H.prototype.getParameter = function(t) {
        for (var e, n = (this instanceof H ? this : new H(this)).search.substr(1).split(/&/), i = 0; i < n.length; i++) {
            var r = n[i].split(new RegExp("="), 2);
            if (unescape(r[0]) === t) return unescape(r[1])
        }
        return null
    };
    var W = {
            states: {
                ABP_DETECTION_DISABLED: -2,
                ABP_NOT_DETECTED: 0,
                ABP_DETECTED: 1
            },
            createBlockDetectionDiv: function(t) {
                var n = e.createElement("div");
                return n.className = t, n.style.fontSize = "initial", n.appendChild(e.createTextNode(".")), e.documentElement.appendChild(n), n
            },
            isBlockDetectedOnDiv: function(t) {
                return !t.offsetHeight
            },
            isBlockDetectedOnClassNames: function(t) {
                var n, i = t.length,
                    r;
                for (n = 0; n < i; n++)
                    if (t[n]) {
                        r = this.createBlockDetectionDiv(t[n]);
                        try {
                            if (this.isBlockDetectedOnDiv(r)) return !0
                        } catch (t) {} finally {
                            e.documentElement.removeChild(r)
                        }
                    }
                return !1
            },
            getBlockedState: function(t) {
                return dt() || ht() ? this.states.ABP_NOT_DETECTED : t && this.isBlockDetectedOnClassNames(t) ? this.states.ABP_DETECTED : this.states.ABP_NOT_DETECTED
            }
        },
        J = function(t, e) {
            for (var n = r.objKeys(t), i = 0; i < n.length; i++) {
                var o = n[i];
                e.push([o, t[o]])
            }
        },
        B = function(t) {
            i[t.callbackName] = function() {}, t.newScriptElement.parentNode.removeChild(t.newScriptElement), t.newScriptElement = null, delete t.newScriptElement
        },
        z = function(e) {
            B(e), e[S] = R, e.isMediaRequest || (t.TRC.trkRequestStatus = !1), L === x.PENDING_USER_ID_SET && (L = x.UNINITIALIZED), e[T] ? i.eventUtils.dispatchEvent(i.sharedEvents.INVALID_TRK_RESPONSE, {
                publisherId: e.publisherId
            }) : i.eventUtils.dispatchEvent(i.sharedEvents.REQUEST_ID_CREATION_TIMEOUT, {
                publisherId: e.publisherId
            }), it()
        },
        Q = function(t, n, i, r) {
            var o = e.getElementsByTagName("script")[0],
                a = e.createElement("script");
            return a.type = "text/javascript", a.src = t, a.charset = "UTF-8", i ? a.setAttribute("defer", "defer") : r && a.setAttribute("async", "async"), "function" == typeof n && (a.addEventListener ? (a.addEventListener("load", n, !1), a.addEventListener("error", n, !1)) : a.onreadystatechange = function() {
                "loaded" !== a.readyState && "complete" !== a.readyState || n.apply(a)
            }), o.parentNode.insertBefore(a, o), a
        },
        Y = function(t, e, n) {
            var r = {
                publisherId: t,
                isMediaRequest: n.pageViewInitiator === i.pageViewInitiator.TFA,
                publisherIdType: e,
                callbackName: "trkCallback" + (0 === g ? "" : g)
            };
            return r[S] = I, h[t] || (h[t] = []), h[t].push(r), ++g, r
        },
        Z = function(t) {
            return function() {
                z(t)
            }
        },
        X = function(e, n, i, r) {
            var o = "//trc.taboola.com/" + e + "/trc/3/json?" + "tim=" + (new Date).getTime() + "&" + "data=" + encodeURIComponent(JSON.stringify(et(r))) + "&" + "pubit=" + n,
                a = i.isMediaRequest ? t._tfa.config.safeGet("tfa:trk:tracking-request-timeout", E, e) : E;
            r[S] = w, r[m] = t.setTimeout(Z(r), a), r.newScriptElement = Q(o, function() {
                r[T] = !0
            })
        },
        tt = function(t) {
            return function(e) {
                rt(t, e)
            }
        },
        et = function(t) {
            var e = "${jsScope}".indexOf("{jsScope}") >= 0 ? "TRC" : "${jsScope}";
            return i[t.callbackName] = tt(t), at(t, e + "." + t.callbackName)
        },
        nt = function(t) {
            var e = h[t = "" + t];
            return e && e.length > 0 ? e[e.length - 1] : null
        },
        it = function() {
            i.eventUtils.dispatchEvent(k, A)
        },
        rt = function(e, r) {
            if (t.clearTimeout(e[m]), r && r.trc && (r.trc.ui ? (r.trc["DNT"] && "TRUE" === r.trc["DNT"].toUpperCase() ? localStorage.removeItem("taboola global:user-id") : localStorage.setItem("taboola global:user-id", r.trc["ui"]), L = x.USER_ID_SET) : L = x.UNINITIALIZED, r.trc.sd && localStorage.setItem(e.publisherId + ":session-data", r.trc["sd"]), r.trc["vl"] && r.trc["vl"].length)) {
                var o = r.trc["vl"][0].ri;
                e.isMediaRequest || (t.TRC.events_ri = o), e[v] = o, e[S] = b, i.eventUtils.dispatchEvent(i.sharedEvents.REQUEST_ID_CREATED, {
                    publisherId: e.publisherId,
                    requestId: o
                })
            }
            e[S] !== b && (e[S] = _, i.eventUtils.dispatchEvent(i.sharedEvents.REQUEST_ID_CREATION_ERROR, {
                publisherId: e.publisherId
            })), e.isMediaRequest || (t.TRC.trkRequestStatus = !(D.indexOf(e[S]) >= 0)), t.TRC.alertVVResponseLoaded && t.TRC.alertVVResponseLoaded(n.tblVersion), B(e), it()
        },
        ot = function() {
            var t = d;
            return t || (t = i.util.getReferrer()), t
        },
        at = function(e, i) {
            var r = W.getBlockedState(["banner_ad", "sponsored_ad"]);
            return {
                id: ~~(1e3 * Math.random()),
                ii: lt(e),
                it: Et(t._taboola),
                sd: It(e.publisherId),
                ui: wt(),
                vi: st(),
                cv: n.tblVersion,
                uiv: "default",
                u: yt(),
                e: ot(),
                cb: i,
                mpv: e.isMediaRequest,
                r: [{
                    li: "rbox-tracking",
                    s: 0,
                    uim: "rbox-tracking:pub=" + n.bakedPublisherName + ":abp=" + r,
                    uip: "rbox-tracking",
                    orig_uip: "rbox-tracking"
                }]
            }
        },
        st = function() {
            return t.taboola_view_id || (t.taboola_view_id = (new Date).getTime()), t.taboola_view_id
        },
        ct = function(t) {
            for (var e = 0; e < t.length; ++e)
                for (var n = t[e], i = r.objKeys(n), o = 0; o < i.length; ++o) {
                    var a = i[o],
                        s = n[a];
                    if ("unknown" !== s) switch ("auto" === s && (s = ""), a) {
                        case "video":
                            u = s;
                            break;
                        case "url":
                            f = s;
                            break;
                        case "article":
                        case "category":
                        case "home":
                        case "search":
                        case "photo":
                        case "other":
                        case "content_hub":
                            l = s;
                            break;
                        case "ref_url":
                            d = s
                    }
                }
        },
        ut = function(e) {
            if (e) {
                var n = i.trk.getPublisherRequestId(e);
                if (n) return n
            }
            return t.TRC.events_ri
        },
        lt = function(t) {
            var e = null;
            return u || "" === u ? e = u : (l || "" === l) && (e = l), ("" === e || t.isMediaRequest) && (e = pt("item-id", n.normalizeItemId, n.prenormalizeIdRules)), e
        },
        ft = function(t, e, n) {
            var i;
            if (!n) return e;
            r.forEach(function(t) {
                var n = e.search(t);
                n >= 0 && (e = e.substr(0, n))
            }, n["truncate-at"] || []);
            for (var o = new H(e), a = r.objKeys(n), s = 0; s < a.length; ++s) {
                var c = a[s];
                if (n[c]) switch (c) {
                    case "host":
                        delete o.host;
                        break;
                    case "trailing-dirsep":
                        for (;
                            "/" === o.pathname.substr(o.pathname.length - 1);) o.pathname = o.pathname.substr(0, o.pathname.length - 1);
                        break;
                    case "query":
                        var u = [],
                            l = o.search.replace(/^\?/, "").split("&");
                        "string" == typeof(i = n[c]) && (i = new RegExp(i));
                        var f = i instanceof Array ? function(t) {
                            for (var e = 0; e < i.length; e++)
                                if (t === i[e]) return !0;
                            return !1
                        } : i instanceof RegExp ? i.test.trcBind(i) : function() {
                            return !1
                        };
                        l.forEach(function(t) {
                            f(decodeURIComponent(t.split("=")[0])) && u.push(t)
                        }), o.search = (u.length ? "?" : "") + u.join("&");
                        break;
                    case "fragment":
                        var d = o.hash.replace(/^#/, "");
                        "string" == typeof(i = n[c]) && (i = new RegExp(i)), o.hash = "", i instanceof RegExp && i.test(d) ? o.hash = "#" + d : i instanceof Array && i.forEach(function(t) {
                            d.search(t) >= 0 && (o.hash = "#" + d)
                        })
                }
            }
            return o.pathname || (o.pathname = "/"), "item-id" === t ? o.toString().toLowerCase() : o.toString()
        },
        dt = function() {
            return gt(ot(), "ampproject.net")
        },
        ht = function() {
            return gt(ot(), "instantarticles.fb.com")
        },
        gt = function(t, e) {
            try {
                return void 0 !== t && void 0 !== e && t.indexOf(e) > 0
            } catch (t) {
                return !1
            }
        },
        pt = function(t, e, i) {
            var r = ["paramUrl", "meta", "canonical", "og", "location"],
                o = {
                    paramUrl: mt,
                    canonical: vt,
                    og: St,
                    location: Tt
                },
                a = n.urlExtractOrder || r,
                s = 0,
                c, l, f, d = "",
                h = function(t, e) {
                    return ft.call(this, t, e, i)
                };
            for (a.push("location"); s < a.length && (!d || /^\s*$/.test(d));) l = a[s], d = (c = o[a[s]]) ? c.call(null, t, h) : null, s++;
            return "item-url" === t && l === mt ? d : (f = l !== Tt, d = e ? e.call(this, d, u ? "video" : "text", f) : d)
        },
        mt = function(t, e) {
            return !f || "item-id" !== t && "item-url" !== t ? null : e.call(this, t, f)
        },
        vt = function(t, n) {
            for (var i = e.head.getElementsByTagName("link"), r = 0; r < i.length; r++)
                if ("canonical" === i[r].rel) return n.call(this, t, i[r].href);
            return null
        },
        St = function(t, n) {
            for (var i = e.head.getElementsByTagName("meta"), r = 0; r < i.length; r++)
                if ("og:url" === i[r].getAttribute("property") && i[r].content.length > 5) return n.call(this, t, i[r].content);
            return null
        },
        Tt = function(e, n) {
            var i = function() {
                var e = t.location,
                    n = r.filter(function(t) {
                        return 0 !== t.search("trc_") && "taboola-debug" !== t
                    }, e.search.replace(/^\?/, "").split("&")).join("&");
                return e.origin + e.pathname + "?" + n
            };
            return n.call(this, e, i())
        },
        Et = function(t) {
            try {
                var e = r.objKeys(t[0]);
                for (var n in e) switch (e[n]) {
                    case "home":
                        return "home";
                    case "category":
                        return "category";
                    case "text":
                    case "article":
                        return "text";
                    case "search":
                        return "search";
                    case "photo":
                        return "photo";
                    case "other":
                        return "other";
                    case "content_hub":
                        return "content_hub";
                    case "video":
                    default:
                        return "video"
                }
            } catch (t) {
                return "video"
            }
        },
        It = function(t) {
            return localStorage.getItem(t + ":session-data")
        },
        wt = function() {
            return localStorage.getItem("taboola global:user-id")
        },
        yt = function() {
            return pt("item-url", n.normalizeItemUrl, n.prenormalizeUrlRules)
        },
        Rt = function(t) {
            for (var e, n = /^(.*\/libtrc\/.+\/)(?:(?:trk)|(?:tfa))\.js(?:\?(.*))?$/, i = 0; i < t.length; i++)
                if (e = t[i].src.match(n)) return e[1]
        },
        bt = function() {
            for (var t = Rt(e.getElementsByTagName("script")), n = [{
                    key: "?",
                    index: 0
                }, {
                    key: "://",
                    index: 1
                }, {
                    key: "//",
                    index: 1
                }, {
                    key: "/",
                    index: 0
                }], i = 0, r = n.length, o = t, a; i < r; i++) o = (a = F(o, n[i].key, 2)).length > 1 ? a[n[i].index] : a[0];
            return o
        },
        _t = function() {
            if (!t.TRC.AdServerManager) {
                var e = bt();
                t.TRC.VVReady = Ct, Q("//" + e + "/libtrc/vv." + n.tblVersion + ".js")
            }
        },
        Ct = function() {
            t.TRC.adManager = new t.TRC.AdServerManager(n.vvConfig, n.tblVersion), t.TRC.adManager.startVV().then(function() {
                t.TRC.adManager.run()
            })
        },
        Dt = function(t, e) {
            return t ? t[e] : t
        },
        Nt = function(t, e, n) {
            if (0 === r.objKeys(n).length || U["" + t]) return t;
            var i = document.createElement("a");
            i.href = f;
            var o = (i.host || location.host).toLowerCase(),
                a = (i.href || location.href).toLowerCase(),
                s = O[e],
                c = Dt(n[o], s),
                u = "/",
                l = ["m", "mobile", "www2", "www3"],
                d = [],
                h, g, p, m, v;
            if (!c) {
                for (J(n, d), d.sort(function(t, e) {
                        return t[0].length > e[0].length ? -1 : t[0].length < e[0].length ? 1 : 0
                    }), h = 0, g = d.length; h < g; h++)
                    if ((p = d[h][0].toLowerCase()).indexOf(u) > 0) {
                        if (a.match(p)) {
                            c = Dt(d[h][1], s);
                            break
                        }
                        if (p.indexOf("www.") > -1 && a.match(p.replace("www.", ""))) {
                            c = Dt(d[h][1], s);
                            break
                        }
                    } else if (o.match(p)) {
                    c = Dt(d[h][1], s);
                    break
                }
                if (!c && o.indexOf("www.") < 0) {
                    for (h = 0, g = l.length; h < g && (m = new RegExp("(https://|http://|^)" + l[h] + "."), v = o.replace(m, "www."), !(c = Dt(n[v], s))); h++);
                    c || (c = Dt(n[v = "www." + o], s))
                }
            }
            return c || "unknown-site-on-" + t
        },
        Ot = function(t, e, n) {
            var i = nt(t);
            return i ? e.call(this, i[S]) : n
        };
    t.TRC = t.TRC || {}, t.TRC.trk = i.trk = t.TRC.trk || {
        init: function() {
            t.TRC.utm && !q() || (q() || p || (t.TRC._getGlobalRequestId = ut, t.TRC._getItemId = lt, t.TRC._getItemType = Et, p = !0), t.TRC.hasTrk ? q() || i.trk.execute() : t._tfa && !t._tfa.config.hasValidConfig() || (i.hasTrk = !0, K() && (i.eventUtils.safeAddEventListener(i.sharedEvents.PAGE_VIEW, function(e) {
                try {
                    var r = e.detail,
                        o = r.publisherIdType,
                        a = r.accountId,
                        s = r.pageViewInitiator;
                    ct(t._taboola);
                    var c = s === i.pageViewInitiator.TFA;
                    if (c) {
                        if (t._tfa.config.safeGet("tfa:trk:prevent-concurrent-requests", !0, a) && i.trk.isRequestProcessing(a)) return;
                        t._tfa.config.safeGet("tfa:trk:network-solution-enabled", !1, a) && (a = Nt(a, o, n.networkMap))
                    }
                    var u = {
                        pageViewInitiator: s,
                        isMediaRequest: c
                    };
                    L = L.loadTrc(a, o, u, Y(a, o, u))
                } catch (e) {
                    i.eventUtils.dispatchEvent(i.sharedEvents.REQUEST_ID_CREATION_JS_ERROR, {
                        publisherId: a
                    })
                }
            }), q() || i.trk.execute(), n.enableVV && _t())))
        },
        execute: function() {
            var e = i.publisherIdType.NAME,
                r = Nt(n.bakedPublisherName, e, n.networkMap);
            i.eventUtils.dispatchEvent(i.sharedEvents.PAGE_VIEW, {
                accountId: r,
                publisherIdType: e,
                pageViewInitiator: i.pageViewInitiator.TRK
            }), t.TRC.publisherId = t.TRC.publisherId || r
        },
        getRequestStatus: function(t) {
            var e = nt(t);
            return e ? e[S] : C
        },
        isRequestProcessing: function(t) {
            return Ot(t, function(t) {
                return N.indexOf(t) > -1
            }, !1)
        },
        hasRequestEnded: function(t) {
            return Ot(t, function(t) {
                return D.indexOf(t) > -1 || !(N.indexOf(t) > -1)
            }, !1)
        },
        getPublisherRequestId: function(t) {
            var e = nt(t);
            return e && e[S] === b ? e[v] : null
        }
    }, q() && !t._tfa.config.safeGet("tfa:trk:enabled", !1, n.bakedPublisherId) || i.trk.init()
}(window, document, {
    bakedPublisherId: "${publisherId}",
    bakedPublisherName: "${publisherName}",
    tblVersion: "20191006-9-RELEASE",
    normalizeItemId: "${normalizerFn}",
    prenormalizeIdRules: "${prenormalizeIdRules}",
    prenormalizeUrlRules: "${prenormalizeUrlRules}",
    normalizeItemUrl: "${normalizeItemUrl}",
    urlExtractOrder: "${urlExtractOrder}",
    networkMap: "${networkMap}",
    vvConfig: "${vvConfig}",
    enableVV: "${enableVisitValue}",
    tfaContext: "${tfaContext}",
    jsScope: window["${jsScope}".indexOf("{jsScope}") >= 0 ? "TRC" : "${jsScope}"]
}),
function(win, TRC) {
    win._tfa = win._tfa || [], TRC.useStorageDetection = win.TRC.useStorageDetection = win.TRC.useStorageDetection || !0, TRC.text = TRC.text || {}, TRC.text.lsplit = TRC.text.lsplit || function(t, e, n) {
        var i = t.split(e);
        return i.slice(0, n - 1).concat(i.length >= n ? i.slice(n - 1).join(e) : [])
    }, TRC.util = TRC.util || {}, TRC.util.jsonParseWithNative = TRC.util.jsonParseWithNative || function(t) {
        try {
            return JSON.parse(t)
        } catch (e) {
            return TRC.util.jsonParseWithEval(t)
        }
    }, TRC.util.jsonParseWithEval = TRC.util.jsonParseWithEval || function(text) {
        try {
            return eval("(" + String(text) + ")")
        } catch (t) {
            throw new Error("JSON parse error - invalid input!")
        }
    }, TRC.util.safeAddParam = TRC.util.safeAddParam || function(t, e, n) {
        var i, r;
        n && e && t && (i = encodeURIComponent(t), r = encodeURIComponent(e), n.push(i + "=" + r))
    };
    var TRCImpl = win.TRCImpl = win.TRCImpl || {};
    TRCImpl.global = TRCImpl.global || {}, win.__trcError = win.__trcError || function t() {}, win.__trcJSONify = win.__trcJSONify || function(t) {
        if (window.JSON && window.JSON.stringify && TRCImpl && TRCImpl.global["use-native-json-stringify"]) return window.JSON.stringify(t);

        function e(t) {
            return '"' + t.replace(/[\s\S]/g, function(t) {
                switch (t) {
                    case '"':
                        return '\\"';
                    case "\\":
                        return "\\\\";
                    case "\n":
                        return "\\n";
                    case "\r":
                        return "\\r"
                }
                return t
            }) + '"'
        }

        function n(t) {
            for (var e = [], n = 0; n < t.length; n++) e[n] = __trcJSONify(t[n]);
            return e
        }

        function i(t) {
            var n = [];
            for (var i in t) t.hasOwnProperty(i) && n.push(e(i) + ":" + __trcJSONify(t[i]));
            return n
        }
        return t instanceof Array ? "[" + n(t).join(",") + "]" : t instanceof Object ? "{" + i(t).join(",") + "}" : null === t ? "null" : "string" == typeof t ? e(t) : void 0 === t ? "undefined" : t.toString()
    }
}(window, window["${jsScope}".indexOf("{jsScope}") >= 0 ? "TRC" : "${jsScope}"]),
function(t, e) {
    var n = "taboola global",
        i = "trctestcookie";

    function r() {
        for (var t = "trc_cookie_storage", n = new Object, i = document.cookie.split(/;\s+/), r = 0; r < i.length; r++) {
            var o = e.text.lsplit(i[r], "=", 2),
                a = unescape(o[0]),
                s = unescape(o[1]);
            if (a == t) {
                for (var c = s.split("|"), u = 0; u < c.length; u++) {
                    var o = c[u].split("=");
                    n[unescape(o[0])] = unescape(o[1])
                }
                break
            }
        }

        function l() {
            var e = new Array,
                i, r;
            for (var o in n) n.hasOwnProperty(o) && null != n[o] && (e[e.length] = escape(o) + "=" + escape(n[o]));
            i = e.length > 0 ? 1 : -1, r = new Date((new Date).getTime() + 365 * i * 864e5), document.cookie = t + "=" + escape(e.join("|")) + ";path=/;expires=" + r.toUTCString()
        }
        return this.getValue = function(t) {
            return n.hasOwnProperty(t) ? n[t] : null
        }, this.setValue = function(t, e) {
            n[t] = e, l()
        }, this.removeKey = function(t) {
            delete n[t], l()
        }, this
    }

    function o(t) {
        var e = t || {};
        return this.getValue = function(t) {
            return e[t] ? e[t] : null
        }, this.setValue = function(t, n) {
            e[t] = n
        }, this.removeKey = function(t) {
            delete e[t]
        }, this.getData = function() {
            return e
        }, this
    }

    function a(e) {
        return this.getValue = function(n) {
            return t[e + "Storage"].getItem(n)
        }, this.setValue = function(n, i) {
            try {
                t[e + "Storage"].setItem(n, i)
            } catch (t) {}
        }, this.removeKey = function(n) {
            try {
                t[e + "Storage"].removeItem(n)
            } catch (t) {}
        }, this
    }

    function s(e) {
        var n = t[e + "Storage"],
            i = (new Date).getTime() + "",
            r = "_taboolaStorageDetection";
        try {
            if (n.setItem(r, i), n.getItem(r) == i) return n.removeItem(r), n
        } catch (t) {}
        return null
    }

    function c(n) {
        try {
            if (t.localStorage instanceof Storage && e.useStorageDetection && s(n)) return new a(n)
        } catch (t) {
            return null
        }
    }
    var u = function a() {
        return this.state = {}, this.getLocalStorageImplementation = function(e, n) {
            if (null != this.state.privateStorageImpl && "strict-w3c-storage" != e) return this.state.privateStorageImpl;
            var i = t.TRCImpl ? t.TRCImpl.global : {};
            switch (e = e || (i["local-storage-usage"] ? i["local-storage-usage"] : "prefer-w3c-storage")) {
                case "strict-w3c-storage":
                    return c("session" === n ? "session" : "local");
                case "prefer-w3c-storage":
                    var a = c("local");
                    if (a) return this.state.privateStorageImpl = a;
                case "prefer-cookies":
                    try {
                        if (this.canWriteCookies()) return this.state.privateStorageImpl = new r
                    } catch (t) {}
                default:
                    return this.state.privateStorageImpl = new o
            }
        }, this.getFirstPartyCookie = function() {
            if (this.state.firstPartyCookie) return this.state.firstPartyCookie;
            var t = this.getLocalStorageImplementation();
            if (t instanceof r || t instanceof o) return this.state.firstPartyCookie = t;
            try {
                if (this.canWriteCookies()) return this.state.firstPartyCookie = new r
            } catch (t) {}
            return this.state.firstPartyCookie = new o
        }, this.canWriteCookies = function() {
            var t;
            return document.cookie = i + "=ok", t = -1 !== document.cookie.indexOf(i), document.cookie = i + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;", t
        }, this.getDummyStorage = function(t) {
            return new o(t)
        }, this.getValue = function(t) {
            return this.getPublisherValue(n, t)
        }, this.storePublisherValue = function(t, e, n) {
            var i;
            this.isNotAllowedToWriteValue(e, n) || (i = this.buildKeyWithPublisher(t, e), this.getLocalStorageImplementation().setValue(i, n), this.addKeyToStoredKeysList(i))
        }, this.isNotAllowedToWriteValue = function(t, n) {
            return null == n || void 0 == n || e.doNotTrack && !this.isAllowedKeyWhenDoNotTrack(t)
        }, this.buildKeyWithPublisher = function(t, e) {
            return t + ":" + e
        }, this.getPublisherValue = function(t, n) {
            return e.doNotTrack && !this.isAllowedKeyWhenDoNotTrack(n) ? null : this.getLocalStorageImplementation().getValue(this.buildKeyWithPublisher(t, n))
        }, this.addKeyToStoredKeysList = function(t) {
            var e = this.getStoredKeysList(); - 1 === e.indexOf(t) && (e.push(t), this.setStoredKeysList(e))
        }, this.getStoredKeysList = function() {
            var t = this.getLocalStorageImplementation().getValue(this.buildKeyWithPublisher(n, "local-storage-keys")),
                i;
            try {
                i = e.util.jsonParseWithNative(t) || []
            } catch (t) {
                i = [], __trcError("Could not parse local storage keys", t)
            }
            return i
        }, this.setStoredKeysList = function(t) {
            var e;
            try {
                e = __trcJSONify(t), this.getLocalStorageImplementation().setValue(this.buildKeyWithPublisher(n, "local-storage-keys"), e)
            } catch (t) {
                return void __trcError("Could not stringify local storage keys", t)
            }
        }, this.isAllowedKeyWhenDoNotTrack = function(e) {
            var n, i = (t.TRCImpl && t.TRCImpl.global || {})["dnt-allowed-keys"] || ["session-id", "trc_css-isolation"],
                r;
            return null !== e && void 0 !== e && (r = e.split(":")[1] || e, -1 !== i.indexOf(r))
        }, this.storeUserId = function(t) {
            this.isNotAllowedToWriteValue("user-id", t) || this.storePublisherValue(n, "user-id", t)
        }, this.getUserIdFirstPartyCookie = function() {
            return this.getFirstPartyCookie().getValue(this.buildKeyWithPublisher(n, "user-id"))
        }, this.getSessionDataFirstPartyCookie = function() {
            var t = this.getStoredKeysList();
            for (key in t)
                if (t[key].includes("session-data")) return e.tfaPageManager.getLocalStorageImplementation().getValue(t[key])
        }, this.initState = function() {
            void 0 === this.state && (this.state = {}), this.state.privateStorageImpl = null
        }, this.initState(), this
    };
    e.tfaPageManager = e.tfaPageManager || new u
}(window, window["${jsScope}".indexOf("{jsScope}") >= 0 ? "TRC" : "${jsScope}"]),
function(t, e, n) {
    var i = window.TRC.pageManager || n.tfaPageManager;

    function r(t, e) {
        t && e && (e[t] = !0)
    }

    function o(t, e, n) {
        for (var i = {}, o = 0; o < arguments.length; o++) r(arguments[o], i);
        return Object.keys(i).length > 1
    }
    n.tfaUserId = {
        initialized: !1,
        userId: null,
        getUserId: function() {
            return this.userId
        },
        sendUserIdsToTrc: function(t, e, i) {
            var r, a = [];
            if (o(t, e, i)) return n.util.safeAddParam("uiref", t, a), n.util.safeAddParam("uils", e, a), n.util.safeAddParam("uifpc", i, a), (r = new Image).src = "//trc.taboola.com/sg/taboola-tfa/1/um/?" + a.join("&"), r
        },
        readAndStoreUserId: function() {
            var t = this.extractUserIdFromReferrer(),
                e = i.getValue("user-id"),
                n = i.getUserIdFirstPartyCookie();
            t && (this.sendUserIdsToTrc(t, e, n), i.storeUserId(t), n && i.getFirstPartyCookie().setValue("taboola global:user-id", t)), this.userId = t || e || n
        },
        extractUserIdFromReferrer: function() {
            var t = this.getReferrer();
            if (t && t.indexOf("taboola") > -1) return this.getParameterByName("ui", t)
        },
        getReferrer: function() {
            return e.referrer
        },
        getParameterByName: function(t, e) {
            if (!e || !t) return null;
            t = t.replace(/[\[\]]/g, "\\$&");
            var n, i = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
            return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
        },
        init: function() {
            this.initialized || (this.readAndStoreUserId(), this.initialized = !0)
        }
    }, n.tfaUserId.init()
}(window, document, window["${jsScope}".indexOf("{jsScope}") >= 0 ? "TRC" : "${jsScope}"]),
function(t, e) {
    var n = "_tfa",
        i, r, o, a = 6 * 60 * 60 * 1e3,
        s = "eng_mt",
        c = 27;

    function u(t, e, n) {
        var i = t && t.sessionStartTime ? t.sessionStartTime + this.getSessionDuration() - e : this.getSessionDuration();
        i < 0 && (i = 0), setTimeout(function() {
            n(i)
        }, i)
    }

    function l(t) {
        return t.ver && t.ver === this.getDataVersion()
    }
    var f = function t() {
        this.state = {}
    };
    f.prototype = {
        constructor: f,
        init: function t(n) {
            var i = e.eventUtils.getDateNow(),
                r = this.getSessionDataFromStorage();
            if (this.getIsLocalStorageAvailable()) return u.call(this, r, i, n), r && r.sessionStartTime ? this.state = r : (this.state = {
                ver: c,
                sessionStartTime: i,
                scrollDepth: 0,
                sessionDepth: [],
                timeOnSite: 0,
                numOfTimesMetricsSent: 0
            }, this.persistMetricsData()), this
        },
        resetStorageMetricData: function t() {
            var n = e.tfaPageManager.getLocalStorageImplementation("strict-w3c-storage");
            this.state = {}, n.setValue(s, "")
        },
        getSessionDataFromState: function t() {
            return this.state
        },
        getSessionDataFromStorage: function t() {
            var n, i, r;
            if (n = e.tfaPageManager.getLocalStorageImplementation("strict-w3c-storage"), o = !!n, r = (i = n && n.getValue(s)) && e.util.jsonParseWithNative && e.util.jsonParseWithNative(i)) {
                if (l.call(this, r) && !this.hasSessionEnded(r)) return r;
                this.resetStorageMetricData()
            }
        },
        hasSessionEnded: function t(n) {
            var i = n ? n.sessionStartTime : this.getSessionStartTime();
            return !i || e.eventUtils.getDateNow() - i > this.getSessionDuration()
        },
        persistMetricsData: function n() {
            var i = e.tfaPageManager.getLocalStorageImplementation("strict-w3c-storage"),
                r = this.state;
            i && t.__trcJSONify && i.setValue(s, t.__trcJSONify(r))
        },
        persistSpecificMetricsData: function n(i, r) {
            var o = e.tfaPageManager.getLocalStorageImplementation("strict-w3c-storage"),
                a;
            o && t.__trcJSONify && i && (a = this.getSessionDataFromStorage()) && (a[i] = r, o.setValue(s, t.__trcJSONify(a)))
        },
        updateMetricState: function t(e, n) {
            var i = this.state;
            e && (i[e] = n)
        },
        getSessionDuration: function t() {
            return a
        },
        getSessionStartTime: function t() {
            return this.state.sessionStartTime
        },
        getScrollDepth: function t() {
            return this.state.scrollDepth
        },
        getTimeOnSite: function t() {
            return this.state.timeOnSite
        },
        getNumOfTimesMetricsSent: function t() {
            return this.state.numOfTimesMetricsSent
        },
        getDataVersion: function() {
            return c
        },
        getIsLocalStorageAvailable: function() {
            return o
        }
    }, (r = (i = t[n] = t[n] || []).TEM = i.TEM || {}).ESU = r.ESU || new f
}(window, window["${jsScope}".indexOf("{jsScope}") >= 0 ? "TRC" : "${jsScope}"]),
function(t, e) {
    var n = "_tfa",
        i;

    function r(t, e) {
        this.storageUtils.updateMetricState(t, e), this.storageUtils.persistSpecificMetricsData(t, e)
    }
    var o = function t() {};
    o.prototype = {
        constructor: o,
        init: function t(e) {
            this.storageUtils = e || {}, this.setVisibilityProperties(), this.initMetricData(this.storageUtils), this.initVisibilityListener()
        },
        initMetricData: function t(n) {
            this.isPageHidden = document[this.hiddenProp], this.timeOnSite = n.getTimeOnSite() || 0, this.lastVisibleStartTime = this.isPageHidden ? 0 : e.eventUtils.getDateNow()
        },
        initVisibilityListener: function t() {
            document.addEventListener(this.visibilityChangeEventName, this.handleVisibilityChange.bind(this), !1)
        },
        setVisibilityProperties: function t() {
            void 0 !== document.hidden ? (this.hiddenProp = "hidden", this.visibilityChangeEventName = "visibilitychange") : void 0 !== document.msHidden ? (this.hiddenProp = "msHidden", this.visibilityChangeEventName = "msvisibilitychange") : void 0 !== document.webkitHidden && (this.hiddenProp = "webkitHidden", this.visibilityChangeEventName = "webkitvisibilitychange")
        },
        calcTimeOnSite: function t() {
            return this.lastVisibleStartTime ? this.timeOnSite + (e.eventUtils.getDateNow() - this.lastVisibleStartTime) : this.timeOnSite
        },
        handleVisibilityChange: function t() {
            this.isPageHidden = document[this.hiddenProp], this.isPageHidden ? (this.timeOnSite = this.calcTimeOnSite(), r.call(this, "timeOnSite", this.timeOnSite)) : this.lastVisibleStartTime = e.eventUtils.getDateNow()
        },
        getTimeOnSite: function t() {
            return this.isPageHidden ? this.timeOnSite : this.calcTimeOnSite()
        }
    }, (i = t[n] = t[n] || []).TEM = i.TEM || {}, i.TEM.TOS = i.TEM.TOS || new o
}(window, window["${jsScope}".indexOf("{jsScope}") >= 0 ? "TRC" : "${jsScope}"]),
function() {
    var t = "_tfa",
        e, n = !1,
        i;

    function r() {
        return void 0 == document.body || void 0 == document.documentElement ? 0 : (n = !0, Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight))
    }

    function o(t, e) {
        this.storageUtils.updateMetricState(t, e), this.storageUtils.persistSpecificMetricsData(t, e)
    }

    function a(t, e) {
        var n;
        return function() {
            var i = this,
                r = arguments;
            clearTimeout(n), n = setTimeout(function() {
                t.apply(i, r)
            }, e)
        }
    }
    var s = function t() {};
    s.prototype = {
        constructor: s,
        init: function t(e) {
            this.storageUtils = e || {}, this.maxScrollPercentage = this.storageUtils.getScrollDepth() || 0, this.initEventListeners(), this.updateMeasurements(), this.calcMaxScrollPercentage()
        },
        getScrollDepth: function t() {
            return n || this.calcMaxScrollPercentage(), this.maxScrollPercentage
        },
        initEventListeners: function t() {
            window.addEventListener("resize", a(this.onResize.bind(this), 100)), window.addEventListener("scroll", a(this.onScroll.bind(this), 50))
        },
        onResize: function t() {
            this.updateMeasurements()
        },
        onScroll: function t() {
            this.calcMaxScrollPercentage()
        },
        updateMeasurements: function t() {
            this.winHeight = window.innerHeight, this.docHeight = r()
        },
        calcMaxScrollPercentage: function t() {
            var e = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop,
                i;
            n || this.updateMeasurements(), (i = 0 == this.docHeight ? 0 : Math.floor((e + this.winHeight) / this.docHeight * 100)) > this.maxScrollPercentage && (this.maxScrollPercentage = i, o.call(this, "scrollDepth", this.maxScrollPercentage))
        }
    }, (i = (e = window[t] = window[t] || []).TEM = e.TEM || {}).SCD = i.SCD || new s
}(),
function(t, e) {
    var n, i, r = t["_tfa"].TEM,
        o = function() {};
    o.prototype = {
        constructor: o,
        init: function(t, n) {
            this.storageUtils = t, this.refreshFromStorage(), e.eventUtils.safeAddEventListener(n, this.handleUnipPageView.bind(this))
        },
        getKey: function() {
            return "ssd"
        },
        setState: function(t) {
            this.visitedUrls = {};
            for (var e = 0; e < t.length; e++) this.visitedUrls[t[e]] = !0
        },
        getState: function() {
            return this.visitedUrls ? Object.keys(this.visitedUrls) : []
        },
        getMetric: function() {
            return this.getState().length
        },
        persistState: function() {
            var t = "sessionDepth",
                e = this.getState();
            this.storageUtils.updateMetricState(t, e), this.storageUtils.persistSpecificMetricsData(t, e)
        },
        refreshFromStorage: function() {
            var t = this.storageUtils.getSessionDataFromStorage(),
                e;
            t || (t = this.storageUtils.getSessionDataFromState()), (e = t["sessionDepth"]) || (e = []), this.setState(e)
        },
        handleUnipPageView: function() {
            try {
                var e = t.location.href;
                this.visitedUrls[e] || (this.visitedUrls[e] = !0, this.persistState())
            } catch (t) {}
        }
    }, r.SSD = r.SSD || new o
}(window, window["${jsScope}".indexOf("{jsScope}") >= 0 ? "TRC" : "${jsScope}"]),
function(t, e) {
    var n = "_tfa",
        i = t[n] = t[n] || [],
        r, o = i.TEM = i.TEM || {},
        a = o.ESU || {},
        s = o.SCD || {},
        c = o.SSD || {},
        u = o.TOS || {},
        l = 1500,
        f = "numOfTimesMetricsSent",
        d = "pre_d_eng_tb",
        h = {
            SESSION_END: "SESSION_END"
        },
        g, p;

    function m(t, e) {
        var n = u.getTimeOnSite(),
            i = s.getScrollDepth(),
            r = c.getMetric();
        return {
            notify: "event",
            name: d,
            tos: n,
            scd: i,
            ssd: r,
            est: a.getSessionStartTime(),
            ver: a.getDataVersion(),
            isls: a.getIsLocalStorageAvailable(),
            src: t,
            invt: e
        }
    }

    function v(t, e) {
        var n = m(t, e);
        n.est && (r.pageViewAccountIds ? S(r.pageViewAccountIds, n) : T(n))
    }

    function S(t, e) {
        var n = Object.keys(t);
        n.length > 0 ? n.forEach(function(n) {
            e.id = t[n], T(e)
        }) : T(e)
    }

    function T(t) {
        r.push(t)
    }

    function E(t) {
        clearTimeout(p), o.sendMetrics("se", t), a.resetStorageMetricData()
    }

    function I(t) {
        var e = a.getSessionDataFromStorage(),
            n, i;
        (isNaN(g) || g < 0) && (g = 0), a.hasSessionEnded() || ((i = e && e.numOfTimesMetricsSent !== g) ? (g = e.numOfTimesMetricsSent, a.updateMetricState(f, g)) : (n = ++g, a.updateMetricState(f, n), a.persistSpecificMetricsData(f, n), o.sendMetrics("i", t)), w())
    }

    function w() {
        var t = l * Math.pow(2, g);
        p = setTimeout(function() {
            I(t)
        }, t)
    }

    function y() {
        g = a.getNumOfTimesMetricsSent() || 0, w()
    }

    function R() {
        o.initialized || (r = i.TUP || {}, o.initialized = !0, o.ESU.init(E), o.ESU.getIsLocalStorageAvailable() && (u.init(a), s.init(a), c.init(a, e.sharedEvents.PAGE_VIEW), o.initIntervalTrigger()))
    }
    o.init = o.init || R, o.onSessionEndTrigger = o.onSessionEndTrigger || E, o.sendMetrics = o.sendMetrics || v, o.initIntervalTrigger = o.initIntervalTrigger || y, o.EVENTS = o.EVENTS || h
}(window, window["${jsScope}".indexOf("{jsScope}") >= 0 ? "TRC" : "${jsScope}"]),
function(t, e, n) {
    var i = e.tfaPageManager || {},
        r = "_tfa",
        o = window[r] = window[r] || [],
        a = {
            event: M,
            subscription: A
        },
        s = /(\S+)taboola(\S+|)\.com\/libtrc\/unip\/(\S+)\/tfa\.js(\S+|)/,
        c = ["notify", "id"],
        u = {
            name: "en",
            url: "item-url",
            referrer: "ref"
        },
        l = "script[src$='tfa.js']",
        f = -1,
        d = {
            defaultProtocol: "https:",
            host: "trc.taboola.com",
            httpMethod: "get",
            loggerEventName: "unip",
            logToConsole: !0
        },
        h = {
            EMPTY_COMMAND: "EMPTY_COMMAND",
            MISSING_NOTIFY: "MISSING_NOTIFY",
            INVALID_NOTIFY: "INVALID_NOTIFY",
            MISSING_NAME: "MISSING_NAME",
            INVALID_ID: "INVALID_ID"
        },
        g = {
            UNIP_TFA_PUSH: "UNIP_TFA_PUSH",
            TFA_VALIDATION_ERROR: "TFA_VALIDATION_ERROR"
        },
        p = {
            page_view: V
        },
        m = ((v = {})[e.sharedEvents.REQUEST_ID_CREATION_TIMEOUT] = "to", v[e.sharedEvents.REQUEST_ID_CREATION_ERROR] = "err", v[e.sharedEvents.REQUEST_ID_CREATION_JS_ERROR] = "jserr", v[e.sharedEvents.INVALID_TRK_RESPONSE] = "itrkr", v),
        v;

    function S() {
        var t = x();
        t.initialized && t.domAccountId && setTimeout(function() {
            for (var t = x().asyncQueue; t.length;) L(t.shift())
        }, 0)
    }

    function T() {
        var t = E(),
            e;
        if (t && (e = t.src.replace(s, "$3"))) return /^\d+$/.test(e) ? parseInt(e, 10) : (q("Value '" + e + "' is invalid for 'id' param in script source url '" + t.src + "'. Only numeric values are allowed."), f)
    }

    function E() {
        for (var t = document.querySelectorAll(l), e, n = 0; n < t.length; n++)
            if ((e = t[n]).src.indexOf("/unip/") > 0) return e
    }

    function I() {
        return e.eventUtils.getDateNow()
    }

    function w(t) {
        t["ce"] = "subscr"
    }

    function y(t) {
        var e = i.getSessionDataFirstPartyCookie();
        void 0 !== e && e && (t["sd"] = e)
    }

    function R(t) {
        try {
            var n = e.tfaUserId.getUserId(),
                r = i.getValue("user-id");
            (n || r) && (t["ui"] = n || r)
        } catch (e) {
            q("Error while trying to add user-id param, params=" + JSON.stringify(t), e)
        }
    }

    function b(t) {
        var n = x();
        n.referrer || (n.referrer = e.util.getReferrer()), t[u.referrer] = n.referrer
    }

    function _(t) {
        var e = {},
            n = !1,
            i;
        for (var r in t.tim = I(), t) !t.hasOwnProperty(r) || c.indexOf(r) >= 0 || (e[i = u.hasOwnProperty(r) ? u[r] : r] = t[r], n = !0);
        return n && e
    }

    function C(t, n) {
        var i = e.trk.getPublisherRequestId(t),
            r = (window.location.protocol || d.defaultProtocol) + "//" + d.host;
        i && D(n, i), R(n), b(n), O(n);
        try {
            e.TRCLogger[d.httpMethod](r, d.loggerEventName, n, t)
        } catch (e) {
            q("Error while trying to send to server event with id '" + t + "' and params '" + JSON.stringify(n) + "'.", e)
        }
    }

    function D(t, e) {
        t["ri"] = e
    }

    function N(t, e) {
        t["mrir"] = e
    }

    function O(t) {
        t["cv"] = n
    }

    function U(n, i) {
        var r = x(),
            o;
        if (!e.trk.getPublisherRequestId(n)) {
            if (e.trk.isRequestProcessing(n)) return void r.messageDelayer.delayMessage(n, i, {
                successCallback: C,
                failCallback: function(t, e, n, i) {
                    var r = m[i];
                    r || (r = i), N(e, r), C(t, e)
                },
                timeoutInMillis: t._tfa.config.safeGet("tfa:trk:tracking-request-timeout", 5e3, n) + 500
            });
            N(i, e.trk.getRequestStatus(n))
        }
        C(n, i)
    }

    function M(t) {
        var n = x(),
            i = t && t.id || n.domAccountId,
            r, o;
        if (i) {
            if (i !== f) {
                if (r = _(t), i = parseInt(i, 10), o = P(r), p[o] && p[o](r, i), F(i)) {
                    if (H(i)) return void U(i, r);
                    e.trk.getPublisherRequestId(i) || N(r, "wffo")
                }
                C(i, r)
            }
        } else n.asyncQueue.push(t)
    }

    function P(t) {
        return t[u.name]
    }

    function k(t, e) {
        void 0 !== t["sourceurl"] && t["sourceurl"] && (e["surl"] = t["sourceurl"])
    }

    function A(t) {
        var e = x(),
            n = t && t.id || e.domAccountId;
        if (n) {
            if (n !== f) {
                var i = _(t);
                w(i), y(i), k(t, i), C(parseInt(n, 10), i)
            }
        } else e.asyncQueue.push(t)
    }

    function V(t, n) {
        var i = x();
        n && (i.pageViewAccountIds[n] = parseInt(n, 10), e.eventUtils.dispatchEvent(e.sharedEvents.PAGE_VIEW, {
            accountId: n,
            publisherIdType: e.publisherIdType.ID,
            eventParams: t,
            pageViewInitiator: e.pageViewInitiator.TFA
        }))
    }

    function j(t) {
        return t ? t.notify ? a.hasOwnProperty(t.notify) ? t.name ? !(t.hasOwnProperty("id") && !/^\d+$/.test(t.id)) || ($(h.INVALID_ID, t, "Value '" + t.id + "' is invalid for 'id' field in command '" + JSON.stringify(t) + "'. Only numeric values are allowed."), !1) : ($(h.MISSING_NAME, t, "Mandatory 'name' field is missing in command '" + JSON.stringify(t) + "'."), !1) : ($(h.INVALID_NOTIFY, t, "Value '" + t.notify + "' is invalid for 'notify' field in command '" + JSON.stringify(t) + "'."), !1) : ($(h.MISSING_NOTIFY, t, "Mandatory 'notify' field is missing in command '" + JSON.stringify(t) + "'."), !1) : ($(h.EMPTY_COMMAND, t, "Command is '" + t + "'."), !1)
    }

    function x() {
        return window && window[r] && window[r].TUP || {}
    }

    function L(t) {
        if (j(t)) try {
            a[t.notify](t)
        } catch (e) {
            q("An error occurred while handling command '" + JSON.stringify(t) + "'.", e)
        }
    }

    function $(t, n, i) {
        var r = x();
        e.eventUtils.dispatchEvent(g.TFA_VALIDATION_ERROR, {
            accountId: r.domAccountId,
            errorCode: t,
            command: n
        }), q(i)
    }

    function q(t, e) {
        d.logToConsole && K(t, e)
    }

    function K(t, e) {
        e ? console.log("Taboola Pixel: " + t, e) : console.log("Taboola Pixel: " + t)
    }

    function F(e) {
        return t._tfa.config.safeGet("tfa:trk:enabled", !1, e)
    }

    function H(e) {
        return t._tfa.config.safeGet("tfa:trk:wait-for-request-id", !0, e)
    }

    function G() {
        var t = o.TUP = o.TUP || {},
            n = o.TEM || {};
        t.domAccountId = t.domAccountId || T(), t.initialized || (t.push = o.TUP.push || L, t.initialized = !0, t.asyncQueue = [], t.EVENTS = g, t.pageViewAccountIds = {}, t.messageDelayer = new e.MessageDelayer("publisherId", e.sharedEvents.REQUEST_ID_CREATED, [e.sharedEvents.REQUEST_ID_CREATION_JS_ERROR, e.sharedEvents.REQUEST_ID_CREATION_ERROR, e.sharedEvents.REQUEST_ID_CREATION_TIMEOUT, e.sharedEvents.INVALID_TRK_RESPONSE]), n && n.init && n.init()), S()
    }
    G()
}(window, window["${jsScope}".indexOf("{jsScope}") >= 0 ? "TRC" : "${jsScope}"], "20191006-9-RELEASE"),
function(t, e, n) {
    var i = "_tfa",
        r = {
            orderid: "orderid",
            currency: "currency",
            revenue: "revenue",
            quantity: "quantity",
            name: "name",
            attributionGroup: "attributionGroup"
        },
        o = {
            type: "marking-type"
        },
        a = (t.location.protocol.match(/http/) ? t.location.protocol : "http:") + "//trc.taboola.com/{$publishreId}log/3/{$logType}?",
        s = /(\S+)taboola(\S+|)\.com\/libtrc\/(\S+)\/tfa\.js(\S+|)/,
        c = "unip/",
        u = [],
        l = [],
        f = "http:";

    function d(t) {
        var e;
        switch (t.notify) {
            case "action":
                e = u;
                break;
            case "mark":
                e = l;
                break;
            case "event":
            case "subscription":
                e = queue.TUP;
                break;
            default:
                return
        }
        e && e.push(t)
    }

    function h() {
        return n.tfaUserId && n.tfaUserId.getUserId() ? "&ui=" + encodeURIComponent(n.tfaUserId.getUserId()) : ""
    }

    function g() {
        var t, e, n = w();
        if (n)
            for (t = 0, e = u.length; t < e; t++) v(m(a, {
                $publishreId: n ? n + "/" : "",
                $logType: "action"
            }) + "tim=" + escape(T()) + "&item-url=" + escape(S()) + y(r, u.shift()) + E() + h())
    }

    function p() {
        var t, e, n = w();
        if (n)
            for (t = 0, e = l.length; t < e; t++) v(m(a, {
                $publishreId: n ? n + "/" : "",
                $logType: "mark"
            }) + "tim=" + escape(T()) + "&item-url=" + escape(S()) + y(o, l.shift()) + E() + h())
    }

    function m(t, e) {
        return t.replace(/\{([^{}]*)\}/g, function(t, n) {
            var i = e[n];
            return "string" == typeof i || "number" == typeof i ? i : t
        })
    }

    function v(t) {
        var e;
        (new Image).src = t
    }

    function S() {
        return t.location.href
    }

    function T() {
        var t = new Date,
            e = t.getHours(),
            n = t.getMinutes(),
            i = t.getSeconds() + t.getMilliseconds() / 1e3;
        return (e < 10 ? "0" : "") + e + ":" + (n < 10 ? "0" : "") + n + ":" + (i < 10 ? "0" : "") + i.toFixed(3)
    }

    function E() {
        var n = t.location.search,
            i = e.referrer.match(/(\?\S+)$/g),
            r = "";
        return r = I(n.replace(/^\?/, "").split(/&/)) + (i ? I(i[0].replace(/^\?/, "").split(/&/)) : "")
    }

    function I(t) {
        var e = "",
            n, i, r = "trc_";
        for (n = 0, i = t.length; n < i; n++) 0 == t[n].indexOf(r) && (e = e + "&" + t[n]);
        return e
    }

    function w() {
        var t = document.getElementsByTagName("script"),
            e, n, i = "",
            r;
        for (e = 0, n = t.length; e < n; e++)
            if (i = (r = t[e].src).replace(s, "$3"), t[e].src && i !== t[e].src && i.indexOf(c) < 0) return i;
        return i
    }

    function y(t, e) {
        var n, i = "";
        for (n in t) void 0 !== e[n] && (i += "&" + t[n] + "=" + e[n]);
        return i
    }

    function R(t) {
        for (var e = 0; e < arguments.length; e++)(t = arguments[e]) instanceof Object && d(t);
        return b(), arguments.length
    }

    function b() {
        g(), p()
    }

    function _() {
        for (; queue.length;) R(queue.shift())
    }

    function C() {
        queue = t[i] = t[i] || [], queue.registered || (queue.push = R, queue.registered = !0, _())
    }
    C()
}(window, document, window["${jsScope}".indexOf("{jsScope}") >= 0 ? "TRC" : "${jsScope}"]);