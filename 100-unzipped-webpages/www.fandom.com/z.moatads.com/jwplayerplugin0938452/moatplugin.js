/*Copyright (c) 2011, 2018, Oracle and/or its affiliates. All rights reserved.*/
var moatjw = moatjw || function() {
    function q(a) {
        var c = p(a);
        if (c) {
            if (c = c.player)
                for (var b in r) r.hasOwnProperty(b) && c.off(b, B);
            a && (k[a] = null, delete k[a])
        }
    }

    function w(a, c, b) {
        (a = p(a)) && a.moatApi.dispatchEvent({
            type: c,
            adVolume: b
        })
    }

    function m(a) {
        return "number" === typeof a && !isNaN(a)
    }

    function p(a) {
        if (a) return k && k[a]
    }

    function x(a, c, b, e) {
        if (a && c && b && m(e)) {
            var h = ["first", "mid", "third"],
                f = [],
                g, d, l;
            d = 0;
            for (l = h.length; d < l && (g = h[d], g = a[g], g.sent || f.push(g), b !== g.event); d++);
            d = 0;
            for (l = f.length; d < l; d++) g = f[d], g.sent = !0, w(c, g.event, e)
        }
    }

    function y(a) {
        return a ? (a = p(a)) && a.quartiles : !1
    }

    function B(a) {
        var c = a.type,
            b = r[c],
            e;
        if (!(e = a.id)) a: {
            for (var h in k)
                if (k.hasOwnProperty(h) && (e = k[h]) && e.player === this) {
                    e = h;
                    break a
                }
            e = void 0
        }
        h = e;
        var f, g;
        if ("adTime" === c) a: {
            g = y(h),
            b = a.duration,
            a = a.position,
            m(b) && m(a) && 0 !== b && 0 !== a ? (a = a / b * 100, (b = p(h)) && !b.checkedAdTime && (b.checkedAdTime = !0, 100 === a && (a = 0))) : a = 0,
            b = g;
            if (h && m(a) && b && b)
                for (f in b)
                    if (b.hasOwnProperty(f)) {
                        c = b[f];
                        e = a;
                        var d = c;
                        if (m(e) && d && !d.sent && e >= d.min && e <= d.max) {
                            b = c.event;
                            break a
                        }
                    }
            b = void 0
        }
        b && (f = C(this), "AdVideoComplete" === b && (g = y(h), x(g, h, b, f)), "AdVideoFirstQuartile" === b || "AdVideoMidpoint" === b || "AdVideoThirdQuartile" === b ? x(g, h, b, f) : w(h, b, f), "AdVideoComplete" !== b && "AdSkipped" !== b && "AdStopped" !== b || q(h))
    }

    function t(a, c) {
        return "GDFP" === a || "googima" === c
    }

    function C(a) {
        if (a) {
            if (a.getMute()) return 0;
            a = a.getVolume();
            if (m(a)) return 1 < a ? a / 100 : a
        }
    }

    function D(a) {
        var c = a.container,
            b = a.adIds,
            e = a.duration,
            h = a.partnerCode,
            f = a.url,
            g = document.createElement("script"),
            d = [],
            l = "_moatApi" +
            Math.floor(1E5 * Math.random()),
            k, n, b = {
                adData: {
                    ids: b,
                    duration: e,
                    url: f
                },
                dispatchEvent: function(a) {
                    this.sendEvent ? (d && (d.push(a), a = d, d = !1), this.sendEvent(a)) : d && d.push(a)
                }
            };
        t(a.adSystem, a.client) && (b["imaSDK-Plugin"] = !0, b.imaAd = a.adData);
        b.plugin = 0;
        try {
            k = c.ownerDocument, n = k.defaultView || k.parentWindow
        } catch (E) {
            k = document, n = window
        }
        n[l] = b;
        g.type = "text/javascript";
        c && c.insertBefore(g, c.childNodes[0] || null);
        g.src = "https://z.moatads.com/" + h + "/moatvideo.js#" + l;
        return b
    }

    function u(a) {
        a && (w(a, "AdStopped", 0),
            q(a))
    }
    var r = {
            adComplete: "AdVideoComplete",
            adSkipped: "AdSkipped",
            adError: "AdError",
            adStarted: "AdStarted",
            adImpression: "AdImpression",
            adPlay: "AdPlaying",
            adPause: "AdPaused",
            volume: "AdVolumeChange",
            mute: "AdVolumeChange",
            adTime: null,
            remove: "AdStopped"
        },
        k = {};
    return {
        add: function(a) {
            if (!a) return !1;
            var c = a.partnerCode,
                b;
            b = (b = a.player) ? "function" === typeof b.on ? b : b.player ? "function" === typeof b.player.on ? b.player : !1 : !1 : !1;
            var e = a.adImpressionEvent;
            if (!c || !b || !e) return !1;
            a: {
                for (var c = ["getContainer", "off", "on",
                        "getMute", "getVolume"
                    ], e = 0, h = c.length; e < h; e++)
                    if ("function" !== typeof b[c[e]]) {
                        c = !1;
                        break a
                    }
                c = !0
            }
            if (!c) return !1;
            var f;
            a: if (a) {
                var c = a.partnerCode,
                    g = a.adImpressionEvent,
                    e = g.adsystem,
                    h = g.client,
                    d;
                d = t(e, h) ? (d = g.ima) && d.ad : g;
                var l;
                try {
                    var m;
                    if (!(m = a.ids)) {
                        var n = d,
                            p = {};
                        t(e, h) && (p = n ? ids = {
                            level1: "-",
                            level2: "-",
                            level3: n.getAdId() || null,
                            level4: n.getCreativeId() || null
                        } : !1);
                        m = p
                    }
                    f = a.container || b.getContainer();
                    var z;
                    if (!(z = a.duration)) {
                        var n = d,
                            q;
                        t(e, h) && (q = n.getDuration());
                        z = q
                    }
                    var v = g && g.id;
                    if (!v || k.hasOwnProperty(v)) {
                        do v =
                            Math.floor(1E5 * Math.random()).toString(); while (k.hasOwnProperty(v))
                    }
                    var x = g.tag,
                        A;
                    (A = a.url) || (a = d, t(e, h) && a.getMediaUrl(), A = a.mediafile && a.mediafile.file);
                    l = {
                        adSystem: e,
                        adData: d,
                        client: h,
                        adIds: m,
                        container: f,
                        duration: z,
                        id: v,
                        partnerCode: c,
                        player: b,
                        tag: x,
                        url: A,
                        checkedAdTime: !1,
                        quartiles: {
                            first: {
                                event: "AdVideoFirstQuartile",
                                sent: !1,
                                min: 25,
                                max: 50
                            },
                            mid: {
                                event: "AdVideoMidpoint",
                                sent: !1,
                                min: 50,
                                max: 75
                            },
                            third: {
                                event: "AdVideoThirdQuartile",
                                sent: !1,
                                min: 75,
                                max: 100
                            }
                        }
                    }
                } catch (y) {
                    f = !1;
                    break a
                }
                f = l
            } else f = !1;
            if (!f) return !1;
            l = f.id;
            k[l] = f;
            if (f && b) {
                if (b)
                    for (var u in r)
                        if (r.hasOwnProperty(u)) b.on(u, B);
                f.moatApi = D(f);
                f.moatApi && w(f.id, "AdImpression", C(b))
            }
            return l
        },
        remove: u,
        removeAll: function() {
            for (var a in k) k.hasOwnProperty(a) && u(a)
        }
    }
}();