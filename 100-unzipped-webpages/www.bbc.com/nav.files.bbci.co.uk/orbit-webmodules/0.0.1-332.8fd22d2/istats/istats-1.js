define("istats-1", [], function() {
    var t, e, a = {
            version: "2.0.0"
        },
        s = a,
        o = [],
        c = {},
        n = "",
        l = !1,
        u = [],
        f = "sa_labels",
        d = "ckpf_echo_device_id",
        p = "ckns_echo_device_id",
        h = null,
        g = "istats-notrack",
        m = "_istats_" + Math.random(),
        i = {
            internal: !0,
            external: !0,
            download: !0,
            clickthrough: !0,
            promoimage: !0
        },
        v = {
            type: "",
            url: ""
        },
        k = [],
        _ = 2e3,
        w = null,
        b = {
            ignore: /.+\.(jpe?g|gif|png)$/i,
            webUrl: /^(\.\.?\/|\/|https?:\/\/|[^\/.:]+([\/.]|$))/i,
            pseudoProtocol: /^(mailto:|javascript:|about:|view-source:|data:)/i,
            internalUrl: /^(?:\/\/|https?:\/\/)?(?:[^.]+\.)*((bbc|bbci)(?:\.co\.uk|\.com)|doubleclick\.net)(:|\/|$)/i,
            storeUrl: /^https?:\/\/.*store\.bbc\.(co\.uk|com).*$/i,
            downloadUrl: /.+\.(pdf|te?xt|rtf|docx?|xlsx?|pptx?|od[tpsgbf]|mp[234]|m4a|mpeg|exe|dmg|zip|tgz)$/i,
            relativeUrl: /^(\.\.?\/|\/[^\/]|([^\/.:]+([\/.]|$)))/i,
            clickThrough: /^#sa-(.*)(?:-sa(.*))$/,
            hashLabels: /^ct_|ns_(fee|campaign|linkname|mchannel|source)=(.+?)$/,
            domain: /(bbc(?:\.co\.uk|\.com))(:\d+)?(\/.*)?$/i
        },
        y = {},
        T = {
            types: {
                "trackingfail.istats": !0,
                "trackingsuccess.istats": !0,
                "redirect.istats": !0,
                "cookiecreated.istats": !0
            }
        },
        U = {},
        C = [],
        L = [],
        r = function() {
            var e = {};
            for (var t in T.types) e[t] = [];
            return e
        },
        x = V(f);

    function E(e) {
        return void 0 === e.istats && (e.istats = {}), void 0 === e.istats.enabled && (e.istats.enabled = !0), e
    }

    function I(e) {
        return e ? E(e).istats : window.istats
    }

    function D(e) {
        return e = e.replace(/\+/g, "%20"), decodeURIComponent(e)
    }

    function N(e) {
        for (var t = {}, n = e.split("&"), r = 0; r < n.length; r++) {
            var o = n[r].split("=");
            t[o[0]] = o[1]
        }
        return t
    }

    function R(e) {
        if (e || (e = location.hash), "" !== e) {
            var t, n = e.match(b.clickThrough),
                r = "";
            if (null === n) return;
            if (n[2] && (r = "#" + n[2]), function(e) {
                    if (history.replaceState) {
                        var t = location.protocol + "//" + location.host + (location.pathname ? location.pathname : "");
                        try {
                            history.replaceState({}, "", t + e)
                        } catch (e) {
                            window.console && console.log && console.log(e)
                        }
                    } else location.hash = e
                }(r), "" === (t = n[1])) return;
            return v.type = "click through", N(D(t))
        }
    }

    function S() {
        var e = !0,
            t = !0,
            n = I().enabled;
        return window.bbcFlagpoles_istats && (t = !("ON" === window.bbcFlagpoles_istats)), !t && n || (e = !1), e
    }

    function $(e) {
        if ("string" != typeof e) throw Error("'site' must be a string");
        return e = e.toLowerCase().replace(/_/g, "-")
    }

    function O(e, t) {
        return !!e.className && -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
    }

    function j(e) {
        var t = e.match(b.domain);
        return t ? t[1] : e.replace(/:\d+$/, "")
    }

    function F(e, t) {
        t = t || "&";
        var n = [];
        for (var r in e.hasOwnProperty("name") && n.push(encodeURIComponent("name") + "=" + encodeURIComponent(e.name)), e) e.hasOwnProperty(r) && "object" != typeof e[r] && ("linkLocation" === r ? n.push(encodeURIComponent("link_location") + "=" + encodeURIComponent(e[r])) : "name" !== r && "ns_referrer" !== r && n.push(encodeURIComponent(r) + "=" + encodeURIComponent(e[r])));
        return e.hasOwnProperty("ns_referrer") && n.push(encodeURIComponent("ns_referrer") + "=" + encodeURIComponent(e.ns_referrer)), n.join(t)
    }

    function K(e) {
        "string" == typeof e && (e = N(D(e))), P(c, e)
    }

    function P(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function W(e) {
        M("ckns_sa_labels_persist", e)
    }

    function A() {
        var t = {},
            e = V("ckns_sa_labels_persist");
        if (e) try {
            t = JSON.parse(e)
        } catch (e) {
            t = {}
        }
        return t
    }

    function H(e, t, n, r, o) {
        e.istats = e.istats || {}, e.istats.linkType = t, e.istats.linkTrackerUrl = n, e.istats.linkLocation = r, e.istats.linkElement = o
    }

    function G(e) {
        for (var t = {}; e;) {
            if (e.linktrack) {
                "string" == typeof e.linktrack && (t = N(D(e.linktrack))), "object" == typeof e.linktrack && (t = e.linktrack);
                break
            }
            e = e.parentNode
        }
        return t
    }

    function J(e, t, n, r) {
        var o = r.altKey || r.ctrlKey || r.metaKey || r.shiftKey,
            i = function() {},
            a = o || n.target && !n.target.match(/^_(self|parent|top)$/i);
        a || (i = function() {
            !1 !== T.notify(t, "redirect.istats", r) && (window.location.href = n.href)
        }), clearTimeout(w), w = setTimeout(function() {
            T.notify(t, "trackingfail.istats", r), i()
        }, _), Q(e, function() {
            clearTimeout(w), !1 !== T.notify(t, "trackingsuccess.istats", r) && i()
        }, r), a || (r.preventDefault ? r.preventDefault() : event.returnValue = !1)
    }

    function z(e) {
        void 0 === e[m] && (e[m] = {
            eventsKey: L.length,
            linkTypesTracked: {}
        }, L.push(r()))
    }

    function M(e, t, n) {
        var r, o = new Date,
            i = window.location.host;
        return void 0 === n && (n = 31536e6), o.setTime(o.getTime() + n), r = e + "=" + t + ("; expires=" + o.toGMTString()) + "; domain=" + j(i) + "; path=/", document.cookie = r
    }

    function V(e) {
        for (var t, n = e + "=", r = document.cookie.split(";"), o = 0, i = r.length; o < i; o++) {
            for (t = r[o];
                " " === t.charAt(0);) t = t.substring(1, t.length);
            if (0 === t.indexOf(n)) return decodeURIComponent(t.substring(n.length, t.length))
        }
        return null
    }

    function q(e) {
        for (var t in void 0 === e && (e = {}), c) void 0 === e[t] && (e[t] = c[t]);
        var n = "unavailable";
        return window.screen && screen.width && screen.height && (n = screen.width + "x" + screen.height), h && (e.ns_alias = h), e.screen_resolution = n, e.bbc_site = s.getSite(), e.name = s.getCountername(), e.ns_ti = document.title, e.ns_c = document.characterSet ? document.characterSet : document.defaultCharset, e.ns__t = (new Date).getTime(), e.ns_jspageurl = location && location.href ? location.href : document.URL, e.ns_referrer = B(), e
    }

    function B() {
        return encodeURI(window.orb && window.orb.referrer ? window.orb.referrer : document.referrer)
    }

    function Q(e, t, n, r) {
        if (S())
            if (l) {
                if (0 == o.length) throw Error("No data collectors available");
                e = q(e), k.push(e), "function" == typeof t && t()
            } else r || C.push({
                labels: e,
                callback: t,
                event: n
            })
    }

    function X(e) {
        return e.split("?")[0].split("#")[0]
    }
    return E(window), x = x || I()._trackingCookie, null !== V(e = f) && M(e, "", -1), a.getConfig = I, a.isReady = function(e) {
        return "function" == typeof e && (l ? e() : u.push(e)), l
    }, a._getLabelsFromString = N, a.isEnabled = S, a.setCountername = function(e) {
        t = e
    }, a.getCountername = function() {
        return t || (t = window.location.pathname.replace(/\/$/, "").replace(/^\//, "").replace(/\//g, ".") + ".page"), t.match(/\.page$/) || (t += ".page"), t
    }, a._normaliseLabelValue = $, a.setSite = function(e) {
        n = $(e)
    }, a.getSite = function() {
        return n || "string" == typeof c.bbc_site && s.setSite(c.bbc_site), n
    }, a.getDefaultURL = function() {
        try {
            var e = s.getCollector("default")
        } catch (e) {
            return ""
        }
        return e.url + "?" + F(q({}), "&")
    }, a.track = function(e, t) {
        if (S()) {
            if (!i[e]) throw 'Given linkType, "' + e + '" is not valid.';
            (t = t || {}).region || (t.region = [document.body]), void 0 === t.region.push && (t.region = [t.region]);
            for (var n = t.region.length; n--;) {
                var r = t.region[n];
                z(r);
                var o = r[m];
                o.linkTypesTracked[e] = t || {}, o.trackerAttached || (! function(t) {
                    y.attach(t, "click", function(e) {
                        U.dispatch(t, e)
                    })
                }(r), o.trackerAttached = !0)
            }
        }
    }, a.observe = function(e, t, n) {
        if (!T.types[t]) throw 'Cannot observe: Given eventType, "' + t + '" in unknown.';
        void 0 === e.push && (e = [e]);
        for (var r = e.length; r--;) z(e[r]), L[e[r][m].eventsKey][t].push(n)
    }, a._isInternal = function(e) {
        return a._isWebUrl(e) && (b.relativeUrl.test(e) || b.internalUrl.test(e)) && !b.storeUrl.test(e)
    }, a._isInternalCrossDomain = function(e) {
        return a._isWebUrl(e) && s._isInternal(e) && a._getDomainFromHost(window.location.host) !== a._getDomainFromHost(e)
    }, a._isExternal = function(e) {
        return a._isWebUrl(e) && !s._isInternal(e)
    }, a._isDownload = function(e) {
        return b.webUrl.test(e) && b.downloadUrl.test(e)
    }, a._isWebUrl = function(e) {
        return b.webUrl.test(e) && !b.ignore.test(e) && !b.pseudoProtocol.test(e)
    }, a._getDomainFromHost = j, a._getLabelsFromHashString = R, a._createCookie = M, a._inspectTracking = function(e) {
        return void 0 !== e && (v = e), v
    }, a.log = function(e, t, n, r) {
        n = n || {}, S() && ("pageview" !== e.toLowerCase() && (n.ns_type = "hidden", n.action_name = t, n.action_type = e), v.type = "logging actions", Q(n, r))
    }, a.addNoTrack = function(e) {
        var t, n, r;
        n = g, r = (t = e).className ? t.className + " " : "", O(t, n) || (t.className = r + n)
    }, a.removeNoTrack = function(e) {
        ! function(e, t) {
            for (var n = e.className.split(" "), r = [], o = n.length; o--;) n[o] !== t && r.unshift(n[o]);
            e.className = r.length ? r.join(" ") : ""
        }(e, g)
    }, a.addLabels = K, a._getLabels = function() {
        return c
    }, a.addStoredLabels = function(e, t) {
        "string" == typeof e && (e = N(D(e))), K(e);
        var n = (new Date).getTime() + t,
            r = A();
        for (var o in e) r[o] = {
            value: e[o],
            expires: n
        };
        W(JSON.stringify(r))
    }, T.notify = function(e, t, n) {
        for (var r = L[e[m].eventsKey][t], o = 0, i = r.length; o < i; o++)
            if ("function" == typeof r[o] && !1 === r[o](n)) return !1
    }, y.attach = function(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
    }, y.detach = function(e, t, n) {
        e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null
    }, y.getTarget = function(e) {
        return (e = e || window.event).target || e.srcElement
    }, U.dispatch = function(e, t) {
        var n, r, o, i, a = function(e, t) {
            var n = e;
            do {
                if ("A" == n.nodeName) return n;
                if (n === t) return !1
            } while (n = n.parentNode)
        }(y.getTarget(t), this);
        a && a.href && (i = (new Date).getTime(), a.istatsTimestamp && i - a.istatsTimestamp < 500 || O(a, g) || (n = function(e) {
            if (s._isWebUrl(e)) return s._isExternal(e) ? "external" : s._isDownload(e) ? "download" : s._isInternal(e) ? "internal" : void 0
        }(a.href), r = U[n], o = e[m].linkTypesTracked[n], n && r && o && (a.istatsTimestamp = i, t.istats = t.istats || {}, U[n](e, a, t))))
    }, U.external = function(e, t, n) {
        var r = e[m].linkTypesTracked.external || {};
        r.extlink_url = t.href, r.ns_type = "hidden", r.action_type = "extlink", r.ns_referrer = B(), t.id && (r.extlink_id = t.id), P(r, G(t)), r.linkLocation || (r.linkLocation = ""), H(n, v.type = "external", F(r), r.linkLocation, t), J(r, e, t, n)
    }, U.download = function(e, t, n) {
        var r = e[m].linkTypesTracked.download || {};
        r.download_url = t.href, r.ns_type = "hidden", r.action_type = "download", r.ns_referrer = B(), t.id && (r.download_id = t.id), P(r, G(t)), r.linkLocation || (r.linkLocation = ""), H(n, v.type = "download", F(r), r.linkLocation, t), J(r, e, t, n)
    }, U.internal = function(e, t, n) {
        var r = e[m].linkTypesTracked.internal || {};
        if (r.intlink_from_url = location.href, r.intlink_ts = (new Date).getTime(), t.id && (r.intlink_id = t.id), P(r, G(t)), r.linkLocation || (r.linkLocation = ""), a._isInternalCrossDomain(t.href)) {
            var o = t.href.split("#", 2),
                i = o[0] + "#sa-" + F(r) + "-sa";
            o[1] && (i += o[1]), t.href = i
        } else x = F(r), M(f, x, 1e4), T.notify(e, "cookiecreated.istats", n)
    }, a.addCollector = function(e) {
        if ("object" != typeof e) throw new Error("Only an object can be passed in as a collector");
        if (!e.name) throw new Error("Collector must have a name");
        if (!e.url) throw new Error("Collector must have a url");
        return e.seperator && (e.separator = e.seperator, delete e.seperator), o.push(e), !0
    }, a.getCollector = function(e) {
        for (var t = 0; t < o.length; t++)
            if (o[t].name === e) return o[t];
        throw Error("Unable to find " + e + " in collectors")
    }, a._sendData = Q, a.labelsSent = function() {
        return k
    }, a.invoke = function() {
        var e;
        if (!l && S()) {
            e = R() || function() {
                    if ("string" == typeof x) return v.type = "internal", N(decodeURIComponent(x))
                }(),
                function() {
                    var e = A(),
                        t = {},
                        n = (new Date).getTime();
                    for (var r in e) e[r].expires > n && (t[r] = e[r]);
                    W(JSON.stringify(t))
                }();
            var t = A(),
                n = {};
            for (var r in t) n[r] = t[r].value;
            K(n), l = !0;
            var o = P({}, c);
            if (e && (function(e) {
                    if (!e.intlink_from_url) return !1;
                    var t = B();
                    return !t || X(e.intlink_from_url) === X(t) || (s.log("error", "istats-internal-link-tracking", e), !1)
                }(e) || (e.intlink_from_url = void 0, e.intlink_ts = void 0, e.link_location = void 0), o = P(o, e), I()._linkTracked = !0), null == (h = V(p)) && (h = V(d)), s.log("pageview", s.getCountername(), o), 0 < C.length)
                for (var i in C) Q(C[i].labels, C[i].callback, C[i].event, !0);
            if (u && 0 < u.length)
                for (var a = 0; a < u.length; a++) "function" == typeof u[a] && u[a]();
            u = []
        }
    }, a._partialReset = function() {
        l = !1, u = [], k = [], h = void 0, c = {}
    }, a
});