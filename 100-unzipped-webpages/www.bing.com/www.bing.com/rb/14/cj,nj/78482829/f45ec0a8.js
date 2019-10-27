/*!DisableJavascriptProfiler*/
var BM = BM || {};
BM.config = {
        B: {
            timeout: 250,
            delay: 750,
            maxUrlLength: 300,
            sendlimit: 20
        },
        V: {
            distance: 20
        },
        N: {
            maxUrlLength: 300
        },
        E: {
            buffer: 30,
            timeout: 5e3,
            maxUrlLength: 300
        },
        C: {
            distance: 10
        }
    },
    function(n) {
        function ot() {
            if (!document.querySelector || !document.querySelectorAll) {
                y({
                    FN: "init",
                    S: "QuerySelector"
                });
                return
            }
            v = {};
            f = [];
            g = 1;
            d = 0;
            k = 0;
            e = [];
            o = 0;
            s = !1;
            var n = Math.floor(Math.random() * 1e4).toString(36);
            t = {
                P: {
                    C: 0,
                    N: 0,
                    I: n,
                    S: kt,
                    M: i,
                    T: 0,
                    K: i,
                    F: 0
                }
            };
            ri()
        }

        function dt(n, t) {
            var r = {};
            for (var i in n) i.indexOf("_") !== 0 && (i in t && (n[i] !== t[i] || i === "i") ? (r[i] = t[i], n[i] = t[i]) : r[i] = null);
            return r
        }

        function gt(n) {
            var i = {};
            for (var t in n) n.hasOwnProperty(t) && (i[t] = n[t]);
            return i
        }

        function tt(n, t, i) {
            if (!s) {
                y({
                    FN: "snapshot",
                    S: n
                });
                return
            }
            i = i || yt;
            t = t || !1;
            var r = w() + i;
            it(e, n) === -1 && e.push(n);
            t ? (st(), ht(t)) : r > o && (st(), k = sb_st(ht, i), o = r)
        }

        function y(n) {
            var f = {
                    T: "CI.BoxModelError",
                    FID: "CI",
                    Name: ut,
                    SV: ft,
                    P: t && "P" in t ? p(t.P) : i,
                    TS: r(),
                    ST: l
                },
                u, e;
            for (u in n) f[u] = n[u];
            e = p(f);
            ct(e)
        }

        function st() {
            o > 0 && (sb_ct(k), o = 0)
        }

        function ht(n) {
            var i, u;
            if (!s) {
                y({
                    FN: "send",
                    S: e.join(c[1])
                });
                return
            }(g <= wt || n) && (t.P.S = e.join(c[1]), t.P.F = n ? 1 : 0, t.P.M = ui(), i = r(), ni(), t.P.T = r(), t.P.N = g++, t.P.C += r() - i, u = ti(t), t.P.C = 0, ct(u), e = [], o = 0)
        }

        function ni() {
            s && rt("compute")
        }

        function ct(n) {
            if (lt(window, "Log2") && Log2.LogEvent && JSON) Log2.LogEvent("ClientInst", JSON.parse(n), null, null, null, null, null, null);
            else {
                var i = w(),
                    r = "<E><T>Event.ClientInst<\/T><IG>" + _G.IG + "<\/IG><TS>" + i + "<\/TS><D><![CDATA[[" + n.replace("]\]>", "]]]\]><![CDATA[>") + "]]\]><\/D><\/E>",
                    u = "<ClientInstRequest><Events>" + r + "<\/Events><STS>" + i + "<\/STS><\/ClientInstRequest>",
                    t = sj_gx();
                t.open("POST", "/fd/ls/lsp.aspx", !0);
                t.setRequestHeader("Content-Type", "text/xml");
                t.send(u)
            }
            sj_evt.fire("BM", n)
        }

        function p(n) {
            var r = i,
                u, t;
            for (u in n)
                if (t = n[u], t !== i) {
                    var o = typeof t == "number",
                        f = '"',
                        e = o || t.indexOf("{") === 0 ? i : f;
                    r += f + u + f + ":" + e + t + e + ","
                }
            return "{" + (r.length > 0 ? r.substr(0, r.length - 1) : i) + "}"
        }

        function ti(n) {
            function g(n, t) {
                function y(n) {
                    return n.replace(bt, encodeURIComponent)
                }
                var h = !0,
                    f = [],
                    u, r, e, s, o, l, v;
                if (t = t || 1, !("_c" in n) || t <= 1) {
                    for (u in n)
                        if (r = n[u], s = u.charCodeAt(0) >= 65 && u.charCodeAt(0) <= 90, s && f.push(u), u.indexOf("_") === 0) continue;
                        else typeof r == "number" ? (e = parseInt(r.toString()).toString(36), f.push(e), nt(e)) : typeof r == "string" ? (e = y(r), f.push(e), nt(e)) : r == null ? f.push(i) : typeof r == "object" && (o = g(r, t + 1, u), (o && o.length > 0 || s) && f.push(o), h = !1);
                    h && (n._c = !0)
                }
                return l = c[t], v = f.join(a + l + a), v
            }

            function nt(n) {
                n.length > 2 && (n in w && it(f, n) === -1 ? f.push(n) : w[n] = 1)
            }
            var tt = r(),
                w = {},
                h = {
                    T: "CI.BoxModel",
                    FID: "CI",
                    Name: ut,
                    SV: ft,
                    P: i
                },
                e = {},
                s, b, u, o, k, l, y;
            for (u in n) u !== "P" && (s = g(n[u]), s && s.length > 0 && (e[u] = s.split(a)));
            b = f.slice(d).join(c[1]);
            d = f.length;
            t.P.K = b;
            for (u in e) {
                if (u !== "M")
                    for (o = 0; o < e[u].length; o++) k = e[u][o], l = it(f, k), l >= 0 && (e[u][o] = a + l.toString(36));
                y = e[u].join(i);
                u in v && v[u] === y || (h[u] = v[u] = y)
            }
            return t.P.C += r() - tt, h.P = p(t.P), p(h)
        }

        function it(n, t) {
            for (var i = 0; i < n.length; i++)
                if (n[i] === t) return i;
            return -1
        }

        function r() {
            return nt ? w() - nt : et ? at(performance.now()) : new Date - window.si_ST
        }

        function w() {
            return et ? at(performance.now() + performance.timing.navigationStart) : (new Date).getTime()
        }

        function lt(n, t) {
            return typeof n[t] != "undefined"
        }

        function at(n) {
            return n < -1 ? -1 : parseInt(n)
        }

        function ii() {
            function n() {
                nt = t;
                sj_evt.unbind("ajax.load", n)
            }
            var t = w();
            sj_evt.bind("ajax.load", n, !1)
        }

        function ri() {
            l = 1;
            var n = r();
            s = !0;
            rt("load");
            tt("T", !1, pt);
            t.P.C += r() - n;
            sj_be(window, "beforeunload", h, !1);
            sj_evt.bind("unload", h);
            sj_evt.bind("BMU", h);
            l = 2
        }

        function h() {
            l = 3;
            sj_ue(window, "beforeunload", h);
            sj_evt.unbind("unload", h);
            sj_evt.unbind("BMU", h);
            tt("U", !0);
            s = !1;
            rt("unload");
            l = 4
        }

        function rt(n) {
            for (var i = 0; i < u.length; i++) u[i][n](t)
        }

        function ui() {
            for (var t = [], n = 0; n < u.length; n++) t.push(u[n].id);
            return t.join(c[1])
        }

        function vt(n) {
            for (var t = 0; t < u.length; t++)
                if (u[t].id === n) return !0;
            return !1
        }

        function fi(n) {
            var t = !1;
            return vt(n.id) || (u.push(n), t = !0), t
        }

        function ei(n) {
            var t = !1;
            return !vt(n.id) && n.check() && (u.push(n), t = !0), t
        }

        function oi() {
            sj_evt.bind("onP1", ot, !0);
            sj_evt.bind("ajax.unload", ii, !0);
            sj_evt.bind("ajax.postload", ot, !0)
        }
        if (!_w.BM || !n.register) {
            var ut = "v2.8",
                ft = "4",
                i = "",
                b = n.config["B"],
                yt = b.delay,
                pt = b.timeout,
                wt = b.sendlimit,
                et = _w.performance && performance.now && performance.timing,
                a = "@",
                c = ["$", "+", "/", ":", ";"],
                bt = /([%$+\/:;"])/g,
                f, t, u = [],
                v, e, o, k, d, g, s, kt = "T",
                nt, l = 0;
            sb_st(oi, 0);
            n.extend = fi;
            n.register = ei;
            n.snapshot = tt;
            n.delta = dt;
            n.clone = gt;
            n.exists = lt;
            n.time = r;
            n.error = y
        }
    }(BM),
    function(n) {
        function g(w) {
            var it, g, rt, k, nt;
            w[t] = [];
            d = w;
            i = {};
            i[t] = {};
            u = [];
            r = document.documentElement;
            h = document.body;
            o = b + o;
            f = n.exists(window, "getComputedStyle") ? parseInt(window.getComputedStyle(document.body)["font-size"]) : -1;
            f = f > 0 ? f : -1;
            var ut = "innerWidth" in window ? window.innerWidth : r.clientWidth,
                ft = "innerHeight" in window ? window.innerHeight : r.clientHeight,
                et = window.pageXOffset || r.scrollLeft,
                ot = window.pageYOffset || r.scrollTop,
                st = s in document ? document[s] : c;
            for (o = n.exists(window, "devicePixelRatio") ? window.devicePixelRatio : -1, it = {
                    t: n.time(),
                    x: et,
                    y: ot,
                    w: ut,
                    h: ft,
                    dw: h.clientWidth,
                    dh: h.clientHeight,
                    d: o,
                    s: f,
                    v: st,
                    e: c
                }, g = n.dequeue("V"), g.push({
                    t: it.t,
                    i: it
                }), rt = 0; rt < g.length; rt++) k = g[rt], nt = {
                t: k.t,
                x: k.i.x,
                y: k.i.y,
                w: k.i.w,
                h: k.i.h,
                dw: k.i.dw,
                dh: k.i.dh,
                d: o,
                s: f,
                v: k.i.v,
                e: c
            }, w[t].length == 0 ? (i[t] = n.clone(nt), w[t].push(nt)) : tt(nt) && w[t].push(n.delta(i[t], nt));
            i[t] = n.clone(it);
            g = [];
            l = 0;
            sj_be(window, "scroll", a);
            sj_be(window, "resize", v);
            sj_be(window, "pageshow", e);
            sj_be(window, "pagehide", e);
            s in document && (sj_be(document, "visibilitychange", e, !1), sj_evt.bind("visibility", y), sj_evt.bind("peekexpand", p))
        }

        function nt() {
            if (i != null && t in i) return i[t];
            n.error({
                FN: "viewport",
                S: "current"
            })
        }

        function tt(n) {
            var u = i[t];
            for (var r in u)
                if (r !== "t" && r in n && u[r] !== n[r]) return !0;
            return !1
        }

        function a() {
            var f = n.clone(i[t]);
            return f.t = n.time(), f.x = window.pageXOffset || r.scrollLeft, f.y = window.pageYOffset || r.scrollTop, f.e = "scroll", u.push(f), n.snapshot(t), !0
        }

        function v() {
            var f = n.clone(i[t]);
            return f.t = n.time(), f.w = "innerWidth" in window ? window.innerWidth : r.clientWidth, f.h = "innerHeight" in window ? window.innerHeight : r.clientHeight, f.e = "resize", u.push(f), n.snapshot(t), !0
        }

        function e(r) {
            var e = document[s],
                o = r ? r.type : "visibility",
                f;
            r.persisted && (o += "-cached");
            f = n.clone(i[t]);
            f.t = n.time();
            f.v = e;
            f.e = o;
            u.push(f);
            n.snapshot(t, e === "unloaded")
        }

        function y(r) {
            var f, e;
            if (r.length > 1) {
                if (f = r[1] ? "visible" : "hidden", r.length > 2) switch (r[2]) {
                    case 0:
                        f = "apphidden";
                        break;
                    case 1:
                        f = "appvisible";
                        break;
                    case 2:
                        f = "webvisible"
                }
                e = n.clone(i[t]);
                e.t = n.time();
                e.v = f;
                e.e = "cortana";
                u.push(e);
                n.snapshot(t, f === "hidden")
            }
        }

        function p() {
            var f = n.clone(i[t]);
            f.t = n.time();
            f.w = "innerWidth" in window ? window.innerWidth : r.clientWidth;
            f.h = "innerHeight" in window ? window.innerHeight : r.clientHeight;
            f.v = "peekexpand";
            f.e = "cortana";
            u.push(f);
            n.snapshot(t)
        }

        function w(n, t) {
            var i = n.x - t.x,
                r = n.y - t.y;
            return Math.sqrt(i * i + r * r)
        }

        function it(r) {
            for (var f, o, s = u.length, e = 0; e < s; e++) f = u[e], (e === 0 || e === s - 1 || f.e !== "scroll" || w(f, o) > k) && (e === 0 ? n.metric(1, f.t) : l += w(f, o), r[t].push(n.delta(i[t], f)), o = f);
            n.metric(8, parseInt(l));
            u = []
        }

        function rt() {
            sj_ue(window, "scroll", a);
            sj_ue(window, "resize", v);
            sj_ue(window, "pageshow", e);
            sj_ue(window, "pagehide", e);
            s in document && (sj_ue(document, "visibilitychange", e), sj_evt.unbind("visibility", y), sj_evt.unbind("peekexpand", p));
            u = []
        }
        var t = "V",
            o, f, h, b = "",
            c = "default",
            s = "visibilityState",
            i, u = [],
            k = n.config[t].distance,
            r, d, l, ut = n.extend({
                id: t,
                load: g,
                compute: it,
                unload: rt
            });
        ut && (n.viewport = nt)
    }(BM),
    function(n) {
        function d(r) {
            r[t] = [];
            f = r;
            h = document.body;
            i = {};
            i[t] = [];
            u = n.dequeue("L");
            a(document, n.time());
            u = []
        }

        function g() {
            return i[t]
        }

        function a(n, t) {
            var i, e, u;
            if (n.querySelectorAll)
                for (i in c) {
                    var f = c[i],
                        o = f[0],
                        s = f[1];
                    for (i += !f[2] ? r : " >*", e = n.querySelectorAll(i), u = 0; u < e.length; u++) v(e[u], t, "T", o, s)
                }
        }

        function v(r, u, e, s, h) {
            var c = w(r, e, u),
                l;
            if (!(c.x < 0) && !(c.y < 0)) return s && (c._ex = s), h && (c._ey = h), (r.tagName === "IMG" || r.tagName === "IFRAME") && (c._s = it(r)), c.i = i[t].length, r.setAttribute("data-bm", c.i), l = nt(c), l ? o(i[t][c.i], c, c.t) : (f[t].push(c), i[t].push(n.clone(c))), c.i
        }

        function nt(r) {
            for (var a, y, c, s, e, v, l = 0, h = 0; h < u.length; h++)
                for (a = u[h], y = u[h].t, c = 0; c < a.i.length; c++)
                    if (s = a.i[c], s.t = y, s._e === r._e) {
                        e = n.clone(r);
                        for (v in s) e[v] = s[v];
                        l === 0 ? (f[t].push(e), i[t].push(n.clone(e))) : o(i[t][r.i], e, e.t);
                        l++
                    }
            return l > 0
        }

        function y(n) {
            while (n && n.hasAttribute && n !== document.body) {
                if (n.hasAttribute("data-bm")) return parseInt(n.getAttribute("data-bm"));
                n = n.parentElement
            }
            return null
        }

        function tt(n, r, u, f) {
            var o, e;
            if (n) {
                for (o = i[t], e = 0; e < o.length; e++)
                    if (n === o[e]._e) return o[e].i;
                return f && a(n, r), v(n, r, u)
            }
            return null
        }

        function o(i, r, u) {
            for (var o, h, c = ["x", "y", "w", "h", "z"], e = {}, l = !1, s = 0; s < c.length; s++) o = c[s], i[o] !== r[o] && (l = !0, e[o] = r[o]);
            l && (e.i = i.i, e.e = r.e, e.t = u, h = n.delta(i, e), h.e = r.e, f[t].push(h))
        }

        function p(n) {
            return n.tagName + (n.id ? "#" + n.id : n.className ? "." + n.className : r)
        }

        function w(t, i, u) {
            var s, c = Number(t.getAttribute("data-bm")),
                e, f, o;
            !isNaN(c) && c > -1 ? (e = n.layout()[c], s = e && e._e === t ? e.p : b(t)) : s = b(t);
            f = {
                t: u,
                i: null,
                s: p(t),
                k: ut(t),
                x: 0,
                y: 0,
                w: t.offsetWidth,
                h: t.offsetHeight,
                z: 0,
                e: i,
                p: s,
                _e: t,
                _s: r,
                _ex: -1,
                _ey: -1
            };
            o = t;
            try {
                if (t.offsetParent)
                    do f.x += t.offsetLeft, f.y += t.offsetTop; while (t = t.offsetParent)
            } catch (l) {
                f.x = null;
                f.y = null
            }
            while (o !== h && (o = o.parentElement)) f.z++;
            return f
        }

        function it(t) {
            try {
                if (n.exists(t, "src") && t.src.indexOf("data:") !== 0) return t.src ? t.src : r
            } catch (i) {}
            return r
        }

        function b(n) {
            for (var t = Number(n.getAttribute(e + k)) || Number(n.getAttribute(e + l)) || -1;
                (n = n.parentElement) && t === -1;) t = Number(n.getAttribute(e + l)) || t;
            return t
        }

        function rt(n) {
            if (n) {
                var t = n.className;
                if (t) {
                    if (typeof t == "string") return t;
                    if (typeof t == "object" && "baseVal" in t) return t.baseVal
                }
            }
            return ""
        }

        function ut(n) {
            var t, u;
            if (rt(n).split(" ").indexOf("b_ans") > -1 && n.hasAttribute("h")) return s(n.getAttribute("h"));
            if (n.tagName === "IMG" || p(n).indexOf("rms_img") >= 0) {
                if (t = y(n), t != null && t < i.L.length) return s(i.L[t].k)
            } else if (u = n.querySelector("a[h]"), u) return s(u.getAttribute("h"));
            return r
        }

        function s(n) {
            var t = n;
            return t = t ? t.substr(t.indexOf("=") + 1) : r, t && t.indexOf("javascript") >= 0 ? r : t
        }

        function ft() {
            for (var u, s, f = i[t], e = n.time(), r = 0; r < f.length; r++) u = f[r], s = w(u._e, "R", e), o(u, s, e)
        }

        function et() {}
        var t = "L",
            i, f, h, r = "",
            c = n.rules,
            u, e = "data-",
            l = "priority",
            k = "fixedpriority",
            ot = n.extend({
                id: t,
                load: d,
                compute: ft,
                unload: et
            });
        ot && (n.observe = tt, n.match = y, n.layout = g)
    }(BM),
    function(n) {
        function e(n) {
            n[i] = [];
            f = n;
            t = [];
            u()
        }

        function u() {
            for (var n = 0; n < 11; n++) t.push(r)
        }

        function o(r) {
            r.P.F && (n.metric(3, n.time()), r[i] = t)
        }

        function s() {
            u()
        }

        function h(n, i) {
            if (t) switch (n) {
                case 0:
                    t[n] = t[n] !== r ? Math.max(t[n], i) : i;
                    break;
                case 1:
                    t[n] = t[n] !== r ? Math.min(t[n], i) : i;
                    break;
                default:
                    t[n] = i
            }
        }
        var i = "M",
            f, t, r = "",
            c = n.extend({
                id: i,
                load: e,
                compute: o,
                unload: s
            });
        c && (n.metric = h)
    }(BM),
    function(n) {
        function e() {
            return typeof MutationObserver != "undefined"
        }

        function o(t) {
            f = t;
            var i = new MutationObserver(s);
            u = n.viewport();
            i && i.observe(document.body, {
                childList: !0,
                subtree: !0
            })
        }

        function s(f) {
            var s, a, e, c, o, v, l;
            if (t !== null) {
                for (s = [], a = n.time(), e = 0; e < f.length; e++)
                    for (c = 0; c < f[e].addedNodes.length; c++) o = f[e].addedNodes[c], v = o.tagName, h(o) && (l = n.observe(o, a, i, !0), l && l.x < u.w && l.y < u.h && n.metric(0, a), s.push(o.parentNode));
                s.length > 0 && (r = s, n.snapshot(i))
            }
        }

        function h(n) {
            var t = n.offsetWidth >= 20 || n.offsetHeight >= 20,
                i = r.indexOf(n.parentNode) >= 0;
            return t && !i
        }

        function c() {}

        function l() {
            t && t.disconnect();
            t = null;
            r = []
        }
        var i = "MT",
            r = [],
            t, u, f;
        n.register({
            id: i,
            check: e,
            load: o,
            compute: c,
            unload: l
        })
    }(BM),
    function(n) {
        function g() {
            return !0
        }

        function nt(n) {
            n[u] = [];
            d = n;
            c = 0;
            e = 0
        }

        function tt(i) {
            for (var k, nt, a, tt, rt = n.viewport().w, g = n.layout(), b = 0; b < g.length; b++) {
                var o = g[b],
                    r = o._e,
                    h = o._ex,
                    d = o._ey,
                    w = f;
                o.i === b && (h = _G.RTL && h >= 0 ? rt - h - r.offsetWidth : h, h >= 0 && !p(o.x, h) && (w = o.k.length === 0 ? y(r) : w, i[u].push({
                    t: n.time(),
                    l: o.i,
                    e: "X",
                    v: Math.abs(o.x - h),
                    m: w
                }), e++), d >= 0 && !p(o.y, d) && (w = o.k.length === 0 ? y(r) : w, i[u].push({
                    t: n.time(),
                    l: o.i,
                    e: "Y",
                    v: Math.abs(o.y - d),
                    m: w
                }), e++), r.tagName !== "IMG" || o.i in t || (a = it(r), a && (k = n.exists(r, k) ? r[k] : !0, nt = n.exists(r, s) ? r[s] > 0 : !0, k ? nt || (t[o.i] = {
                    _e: r,
                    _s: a,
                    _d: !0,
                    _b: !1
                }, v(b, a)) : (t[o.i] = {
                    _e: r,
                    _s: a,
                    _d: !1,
                    _b: !0
                }, l(r, !0)))), r.tagName !== "DIV" || !r.hasAttribute("data-src") || o.i in t || (a = r.getAttribute("data-src"), tt = r.style.backgroundImage, tt || (t[o.i] = {
                    _e: r,
                    _s: a,
                    _d: !1,
                    _b: !1
                }, l(r, !1))))
            }
            n.metric(5, e);
            n.metric(6, c)
        }

        function it(t) {
            try {
                if (n.exists(t, "src")) return t.src ? t.src : f
            } catch (i) {}
            return f
        }

        function l(n, t) {
            t && (sj_be(n, "load", r), sj_be(n, "error", r));
            i || (i = sb_st(a, k))
        }

        function r(n) {
            var t = window.event || n,
                i = sj_et(n);
            return a(t.type, i)
        }

        function a(u, f) {
            var s = 0,
                e, o, h;
            for (e in t)
                if (!t[e]._d && (!f || t[e]._e === f) && (o = t[e]._e, h = o.tagName === "IMG" ? !o[w] || u && u === "error" : !o.style.backgroundImage, t[e]._b && (sj_ue(o, "load", r), sj_ue(o, "error", r)), h && (v(e, t[e]._s), s++), t[e]._d = !0, f)) return;
            s > 0 && n.snapshot("E");
            i = 0
        }

        function v() {}

        function y(n) {
            var t = n.querySelector("a");
            return t && t.href ? t.href.substr(0, b) : f
        }

        function p(n, t) {
            return n >= t - h && n <= t + h
        }

        function rt() {
            var u, n;
            for (u in t) n = t[u], n._b && !n._d && (sj_ue(n._e, "load", r), sj_ue(n._e, "error", r));
            i && (sb_ct(i), i = 0);
            t = {}
        }
        var u = "E",
            f = "",
            w = "complete",
            s = "naturalWidth",
            o = n.config[u],
            h = o.buffer,
            b = o.maxUrlLength,
            k = o.timeout,
            i = 0,
            c, e, t = {},
            d;
        n.register({
            id: u,
            check: g,
            load: nt,
            compute: tt,
            unload: rt
        })
    }(BM),
    function(n) {
        function b() {
            return _w.performance && performance.now && performance.getEntries
        }

        function k(t) {
            t[r] = [];
            l[r] = [];
            f = performance.timing.loadEventEnd - performance.timing.navigationStart;
            h = n.viewport();
            c = 0;
            g()
        }

        function d(u) {
            var k, it, d, v, tt, rt;
            if (r in l) {
                var ct = u[r],
                    p = l[r],
                    kt = performance.timing,
                    ut = performance.getEntries();
                for (v = 0; v < p.length; v++) k = p[v]._r, p[v].i == v && k && s(k.duration) !== p[v].d && u.N.push(n.delta(p[v], {
                    i: p[v].i,
                    t: n.time(),
                    d: s(k.duration)
                }));
                for (it = ut.length, d = a; d < it; d++) {
                    var o = ut[d],
                        g = o.name,
                        w = nt(g),
                        ft = !0;
                    for (g.indexOf("format=snrjson") >= 0 && g.indexOf("progrender=1") === -1 && (i = o.startTime, f = o.duration), v = 0; v < y.length; v++)
                        if (w[1].indexOf(y[v]) >= 0 || w[1] === e) {
                            ft = !1;
                            break
                        }
                    ft && c++;
                    var et = t(o.startTime, i),
                        lt = s(o.duration),
                        at = t(o.connectStart, i),
                        vt = o.secureConnectionStart === 0 ? 0 : t(o.secureConnectionStart, i),
                        yt = t(o.connectEnd, i),
                        pt = t(o.requestStart, i),
                        wt = t(o.responseStart, i),
                        bt = t(o.responseEnd, i),
                        ot = null,
                        st = n.layout();
                    for (tt = 0; tt < st.length; tt++) {
                        var b = st[tt],
                            dt = b._e,
                            ht = b._s;
                        if (ht && g === ht) {
                            ot = b.i;
                            b.x < h.w && b.y < h.h && (f = et);
                            break
                        }
                    }
                    rt = {
                        _r: o,
                        t: et,
                        i: p.length,
                        l: ot,
                        h: w[1],
                        p: w[2].length === 0 ? w[3] : w[2],
                        s: o.initiatorType,
                        d: lt,
                        pc: w[0],
                        cs: at,
                        sc: vt,
                        ce: yt,
                        rs: pt,
                        rt: wt,
                        re: bt
                    };
                    ct.push(rt);
                    p.push(n.clone(rt))
                }
                a = it;
                n.metric(0, f);
                n.metric(4, p.length);
                n.metric(7, c)
            }
        }

        function g() {
            var i = -1,
                u = performance.timing.navigationStart,
                r;
            performance.timing && performance.timing.msFirstPaint ? i = t(performance.timing.msFirstPaint, u) : _w.chrome && _w.chrome.loadTimes && (r = _w.chrome.loadTimes(), "firstPaintAfterLoadTime" in r && (i = t(r.firstPaintAfterLoadTime * 1e3, u)));
            n.metric(2, i)
        }

        function nt(n) {
            var r, y, s;
            u.href = n;
            var h, c, i, f = u.protocol,
                l = u.hostname,
                t = u.pathname,
                a = f.indexOf(p);
            return f = a >= 0 ? f.substr(0, a) : f, t = t.indexOf(o) === 0 ? t.substr(1) : t, r = u.search.toLowerCase(), y = l.length > 0 ? t.substr(0, v) : n.substr(0, v), r.length > 0 && (h = r.indexOf("event.")) > 0 && (c = r.indexOf("&data")) > 0 ? (t = r.substr(h, c - h).replace("event.", e), t === "clientinst" && (s = w.exec(r.replace(/%22/g, '"')), s != null && s.length > 1 && (t = s[1]))) : t.indexOf("rms/") === 0 && (i = t.split(o)) && i.length > 1 ? t = i[1].replace("rms%20answers%20", e).replace(".source", e) : (i = t.split(o)) && i.length >= 2 && (t = i[i.length - 2] + o + i[i.length - 1]), [f, l, t, y]
        }

        function t(n, t) {
            return n && n > 0 ? s(n - t) : -1
        }

        function s(n) {
            return n < -1 ? -1 : parseInt(n)
        }

        function tt() {}
        var r = "N",
            a = 0,
            i = 0,
            f, h, c, v = n.config[r].maxUrlLength,
            u = document.createElement("A"),
            e = "",
            o = "/",
            p = ":",
            w = /"name":"(.*?)"/,
            l = {},
            y = [location.hostname, "live.com", "virtualearth.net", "bing.net", "msedge.net", "skype.com", "microsofttranslator.com", "footprintdns.com", "testanalytics.net", "footprintpredict.com"];
        n.register({
            id: r,
            check: b,
            load: k,
            compute: d,
            unload: tt
        })
    }(BM),
    function(n) {
        function p() {
            return !0
        }

        function w(n) {
            i = 1;
            n[t] = [];
            y = n;
            s = document.documentElement;
            r = [];
            o = 0;
            f = {};
            l(sj_be, h);
            b();
            i = 2
        }

        function l(n, t) {
            for (var o, f, i, r = 0; r < e.length; r++)
                if (o = e[r], f = window.navigator.pointerEnabled ? o.replace("mouse", "pointer") : o, n(document, f, t, !1), n === sj_be) u.push(f);
                else if (n === sj_ue)
                for (i = u.length - 1; i >= 0; i--) u[i] === f && u.splice(i, 1)
        }

        function b() {
            for (var r, i = n.dequeue("EVT"), t = 0; t < i.length; t++) r = i[t].i, k(r.type) && h(r, i[t].t)
        }

        function k(n) {
            for (var t = 0; t < e.length; t++)
                if (e[t] === n.replace("pointer", "mouse")) return !0
        }

        function h(f, e) {
            f = f || _w.event;
            var o = f.touches && f.touches.length > 0 ? f.touches[0] : null,
                h = f.pointerType || f.type.indexOf("touch") == 0 && "touch" || "mouse",
                l = {
                    _e: f.target,
                    t: e || n.time(),
                    l: null,
                    e: f.type,
                    p: h,
                    b: n.exists(f, "button") ? f.button : null,
                    x: o ? o.pageX : "pageX" in f ? f.pageX : "clientX" in f ? f.clientX + s.scrollLeft : null,
                    y: o ? o.pageY : "pageY" in f ? f.pageY : "clientY" in f ? f.clientY + s.scrollTop : null,
                    s: n.exists(f, "buttons") ? f.buttons : null
                };
            return r.push(l), i === 2 || i === 1 ? n.snapshot(t) : c || (n.error({
                FN: "enqueue",
                S: "C",
                ET: f.type,
                EVTS: u.join("+")
            }), c = !0), !0
        }

        function a(n, t) {
            var i = n.x - t.x,
                r = n.y - t.y;
            return Math.sqrt(i * i + r * r)
        }

        function d(i) {
            var h = r.length,
                e, s, u;
            if (h > 0) {
                for (e = (t in f) ? f[t] : null, s = 0; s < h; s++) u = r[s], (s === 0 || s === h - 1 || u.e.indexOf("move") < 0 || a(u, e) > v) && (u.l = n.match(u._e), e === null ? (n.metric(1, u.t), e = f[t] = n.clone(u), i[t].push(u)) : (o += a(u, e), i[t].push(n.delta(e, u))));
                r = []
            }
            n.metric(9, parseInt(o))
        }

        function g() {
            i = 3;
            l(sj_ue, h);
            i = 4
        }
        var t = "C",
            r = [],
            f = {},
            v = n.config[t].distance,
            e = ["click", "mousedown", "mouseup", "mousemove", "touchstart", "touchend", "touchmove"],
            o, s, y, c = !1,
            i = 0,
            u = [];
        n.register({
            id: t,
            check: p,
            load: w,
            compute: d,
            unload: g
        })
    }(BM),
    function(n) {
        function e() {
            return !0
        }

        function o(n) {
            n[t] = [];
            u = n;
            f(sj_be, i);
            s()
        }

        function f(n, t) {
            for (var u, i = 0; i < r.length; i++) u = r[i], n(document, u, t, !1)
        }

        function s() {
            for (var u, r = n.dequeue("EVT"), t = 0; t < r.length; t++) u = r[t].i, u.type === "keydown" && i(u, r[t].t)
        }

        function i(i, r) {
            return i = i || _w.event, r = r || n.time(), u[t].push({
                t: r,
                l: n.observe(i.target, r, t),
                e: i.type,
                m: i.shiftKey << 1 | i.ctrlKey << 2 | i.altKey << 3 | i.metaKey << 4 | (i.repeat || 0) << 5 | (i.isComposing || 0) << 6 | (i.location || 0) << 16
            }), n.snapshot(t), !0
        }

        function h() {}

        function c() {
            f(sj_ue, i)
        }
        var t = "K",
            r = ["keydown", "keypress"],
            u;
        n.register({
            id: t,
            check: e,
            load: o,
            compute: h,
            unload: c
        })
    }(BM),
    function(n) {
        function c() {
            return !0
        }

        function l(t) {
            var c, e, l;
            t[i] = [];
            o = t;
            n.metric(10, 0);
            f(sj_be, u);
            r = !0;
            a();
            s && (s = !1, c = sj_cook.get("_SS", "HV"), c && c.length > 0 && location.href.indexOf("&rdr=1") === -1 && location.href.indexOf("?") > 0 ? (e = location.href + "&rdr=1" + (_G && _G.IG ? "&rdrig=" + _G.IG : ""), h != "" && (e = e.replace(location.host, h)), typeof sj_lc != "undefined" ? window.sj_lc(e) : location.href = e) : (l = document.getElementById("b_content"), l && (l.style.visibility = "visible")))
        }

        function f(n, t) {
            for (var r, i = 0; i < e.length; i++) r = e[i], n(r === "resize" ? window : document, window.navigator.pointerEnabled ? r.replace("mouse", "pointer") : r, t, !1)
        }

        function a() {
            var t = n.dequeue("EVT");
            t.length > 0 && u(t[0].i, t[0].t)
        }

        function u(t, e) {
            if (r) {
                t = t || _w.event;
                var s = "" + Math.round((new Date).getTime() / 1e3);
                o[i].push({
                    t: e || n.time(),
                    e: t.type,
                    s: s
                });
                sj_cook.set("_SS", "HV", s, !1, "/");
                r = !1;
                f(sj_ue, u);
                n.metric(10, 1);
                n.snapshot(i)
            }
            return !0
        }

        function v() {}

        function y() {
            r && (f(sj_ue, u), r = !1)
        }
        var i = "BD",
            e = ["click", "mousedown", "mouseup", "touchstart", "touchend", "mousemove", "touchmove", "scroll", "keydown", "resize"],
            o, r = !1,
            t = n.config[i],
            s = t && t.basic ? t.basic : !1,
            h = t && t.redirectHost ? t.redirectHost : "";
        n.register({
            id: i,
            check: c,
            load: l,
            compute: v,
            unload: y
        })
    }(BM);
0