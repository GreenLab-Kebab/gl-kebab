var DARLA, $sf, Y, $yac;
! function(t) {
    function e(t) {
        return t && typeof t == ut ? ct : st
    }

    function n(t) {
        return e(t) == st || t instanceof Bt == st ? st : ct
    }

    function r(t, e) {
        return y(he, t, ft, e)
    }

    function i() {}

    function o(t, e) {
        var n, r, i, o, a, c = [],
            f = 0;
        if (t) {
            try {
                if (n = typeof t, n == dt || t.top == top || t.nodeType || t.tagName) return c;
                if (n == lt && (c = t.split("")), n != ut) return c;
                o = t[0], f = s(t[Ct], Et), i = s(o, Et)
            } catch (u) {
                c = [], f = 0, t = ft
            }
            if (f > 0) {
                try {
                    t.constructor === Ht && (c = c.concat(t), r = c[Ct] === f)
                } catch (u) {
                    c = [], r = st
                }
                if (!r) try {
                    i != Et && 1 === f ? c = [o] : f != Et && (c = Ht[mt](ft, t)), r = c[Ct] === f
                } catch (u) {
                    r = st, c = []
                }
                if (!r) try {
                    for (c = new Ht(f), a = 0; f > a; a++) c[a] = t[a]
                } catch (u) {
                    c = []
                }
            } else if (t && (o || "0" in t)) try {
                for (a in t) a = s(a, -1, 0), a >= 0 && (c[a] = t[a])
            } catch (u) {
                c = []
            }
            e > 0 && c[Ct] >= e && (c = c.slice(e))
        }
        return c
    }

    function a(e, n) {
        var r, i, o, a, s, f, u, d = ft,
            l = Lt,
            h = Lt,
            y = Lt,
            m = st;
        l = c(e), l = w(l);
        try {
            d = JSON.parse(l)
        } catch (v) {
            if (l) {
                if (n && (r = l[Ct], o = l.charAt(0), a = l.charAt(1), s = l.charAt(r - 1), f = l.charAt(r - 2), m = ("{" === o || "[" === o || "\\" === o && ('"' === a || "'" === a)) && ("}" === s || "]" === s || '"' === s && "\\" === f || "'" === s && "\\" === f) && (l.search(/\\\"/g) >= 1 || l.search(/\\\'/g) >= 1)), n && m) {
                    h = '"' + l + '"';
                    try {
                        i = It("return " + h), y = i()
                    } catch (g) {
                        y = Lt
                    }
                    i = ft, !y || typeof n !== ut || "out" in n || (n.out = y), l = y || l || Lt
                }
                try {
                    u = t.JSON || ft, u && (d = u.parse(l), p(d) && (d = ft))
                } catch (g) {
                    d = ft
                }
                if (d == ft) try {
                    u = It(" return " + l), d = u(), p(d) && (d = ft)
                } catch (g) {
                    d = ft
                }
            }
        }
        return u = ft, d
    }

    function c(t) {
        var e = typeof t;
        if (e == lt) return t;
        if (e == ht && !t) return "0";
        if (e == ut && t && t.join) return t.join(Lt);
        if (!t) return Lt;
        try {
            t += Lt
        } catch (n) {
            t = Lt
        }
        return t
    }

    function s(t, e, n, r) {
        var i;
        if (typeof t != ht) try {
            i = Yt(t), isNaN(i) && (i = parseFloat(t)), t = i
        } catch (o) {
            t = Yt.NaN
        }
        return r == ft && (r = Wt), n == ft && (n = Xt), (isNaN(t) || n > t || t > r) && e != ft ? e : t
    }

    function f(t, e, i, o, a, c, s) {
        var u, d, l, p, h, y, m;
        if (!n(e)) return t;
        t || (t = {}), u = s ? t : e;
        for (l in u) try {
            if (d = e[l], p = typeof d, y = ct, m = l in t, i && !r(e, l)) continue;
            if (o && p == dt) continue;
            if (m && (2 !== a || c ? a && (y = st) : y = p == ut ? ct : st), !y) continue;
            if (p == ut && d) {
                if (c) continue;
                h = 2 === a && m ? t[l] : {}, d.tagName || d.nodeType ? (d = "#node", DARLA.note && DARLA.note(558)) : d = f(h, d, i, o, a, st, s)
            }
            t[l] = d
        } catch (v) {}
        return t
    }

    function u(t, e) {
        var n, r = t && t[Ct],
            i = st;
        if (r) try {
            i = -1 !== t.indexOf(e)
        } catch (o) {
            for (n = 0; r > n; n++)
                if (t[n] === e) {
                    i = ct;
                    break
                }
        }
        return i
    }

    function d(t) {
        var e, n, r;
        try {
            t && typeof t == dt && (t instanceof It ? n = ct : (r = t[_t](), r && (r = new t.constructor("return window; ")(), n = !(!r || !r.top))))
        } catch (e) {
            r = e
        }
        return e = t = r = ft, !!n
    }

    function l(t, e) {
        function n(t) {
            var e, n = t[Ct],
                r = t[0],
                i = t;
            return r && 1 == n && (e = l(r), e[Ct] && (i = e)), i
        }
        var r, i = [];
        return t && typeof t == ut && (i = t instanceof Ht ? t : o(t), i = n(i), r = i[Ct], e = s(e, 0, 0), e && r && r - 1 >= e && (i = i.slice(e)), i = n(i)), i
    }

    function p(t, e, n) {
        var i, o, a = ct;
        try {
            if (t && (o = typeof t, o == ut || o == dt))
                for (i in t)
                    if ((!e || r(t, i)) && (!n || typeof t[i] != dt)) {
                        a = st;
                        break
                    }
        } catch (c) {
            a = ct
        }
        return a
    }

    function h(e, n) {
        var r;
        if (!d(t.btoa) || n) {
            r = String(e);
            for (var i, o, a = 0, c = Ae, s = ""; r.charAt(0 | a) || (c = "=", a % 1); s += c.charAt(63 & i >> 8 - a % 1 * 8)) {
                if (o = r.charCodeAt(a += .75), o > 255) return "";
                i = i << 8 | o
            }
            return s
        }
        return t.btoa(e)
    }

    function y(t, n, r) {
        var i, o, a, c = arguments,
            s = c[Ct],
            f = 3,
            u = [],
            p = 0,
            h = 0;
        if (d(t))
            if (s > f && (u = l(c, f)), n && !e(n) && (n = ft), r) {
                p = new $t;
                try {
                    i = t[mt](n, u)
                } catch (a) {
                    o = a
                }
                h = new $t
            } else try {
                i = t[mt](n, u)
            } catch (a) {
                o = a
            } else o = new Error("bad ref"), o[ht] = -2147418113;
        if (r) try {
            r.time = h - p, r.err = o || ft
        } catch (a) {}
        return i
    }

    function m(t, e) {
        var n = arguments,
            r = n[Ct],
            i = r > 2 ? o(arguments, 2) : ft,
            a = function() {
                var n = o(arguments);
                return n = i ? n.concat(i) : n, t[mt](e || ft, n)
            };
        return a
    }

    function v() {
        return (new $t).getTime()
    }

    function g() {
        return Pt.round(100 * Pt.random())
    }

    function b(t) {
        return t && Pt.floor(100 * Pt.random()) < t
    }

    function w(t) {
        var e = Lt;
        return t && (e = c(t)), e && (e = e[Tt](/^\s\s*/, Lt)[Tt](/\s\s*$/, Lt)), e
    }

    function x(t) {
        var e = Lt;
        try {
            e = escape(t)
        } catch (n) {
            e = Lt
        }
        return e
    }

    function _(t) {
        var e = Lt;
        try {
            e = unescape(t)
        } catch (n) {
            e = Lt
        }
        return e
    }

    function k(t, e, n, r, i, a) {
        var s, f, u, d, l, p, h, y, m, v, g, b = RegExp,
            w = t,
            x = r || Lt,
            _ = R(x, "g") > Et,
            k = "(?:(?!\\1)[^\\\\]|\\\\.)*\\1",
            A = x[Tt](/g/g, Lt),
            S = "g" + A,
            L = [],
            E = [],
            T = st;
        if (n || n === st || (T = ct), n === st && (a = ct), e)
            if (e && n && e != n) {
                try {
                    v = new b(e + "|" + n, S), g = new b(e, A)
                } catch (C) {
                    v = g = ft
                }
                if (v && g)
                    do {
                        for (f = u = 0, y = m = s = ft; l = v.exec(w);)
                            if (p = l[0], h = l.index, g.test(p)) u++ ? a || E.push(h) : (y || (y = p), d = v.lastIndex);
                            else if (u && !--u) {
                            if (s = w.slice(d, h), m = p, y && m && (s = c([y, s, m]), y = m = ft), L.push(s), i && i > 0 && L[Ct] === i) return L;
                            if (!_) return L
                        }
                        _ && E[Ct] && (w = w.slice(E.shift()), f = 1)
                    } while (f || u && (v.lastIndex = d))
            } else {
                if (1 === e[Ct] && (e = "\\" + e), T) try {
                    v = new b("([" + e + "])" + k, S)
                } catch (C) {
                    v = ft
                } else try {
                    v = new b(e, S)
                } catch (C) {
                    v = ft
                }
                v && (l = w.match(v), l && l[Ct] && (L = o(l, i)))
            }
        return L
    }

    function A(t, e, n) {
        var r, i, o, a = [];
        try {
            e = w(e), e = e[yt](), 0 == e.search(/([A-Za-z0-9_]+)/) && (e = e[Tt](/([\:\-])/g, "\\$1"), "doctype" == e ? (r = "<(\\!" + e + ")+" + ge, i = st) : (r = "<(" + e + ")+" + ge, e in ve && (o = ve[e], o.end || (i = st)), i !== st && (i = "<\\/(" + e + ")>")), a = k(t, r, i, "gim", n))
        } catch (c) {
            a = []
        }
        return a
    }

    function S(t, e) {
        var n, r, i = new RegExp("(" + e + ")+(>+|\\s+|(\\={1,1}[\\\"']{0,1}([^\\\"']*)[\\\"']{0,1})+)", "i"),
            o = Lt;
        try {
            n = t.match(i), n && (r = n[1] || Lt, o = n[4] || !!r)
        } catch (a) {
            o = Lt
        }
        return o
    }

    function L(e, n, r, i) {
        var o, a, s, u, d, l, p, h = r && typeof r == ut ? r : t,
            y = 0,
            m = ot,
            v = ft;
        if (e)
            if (e = c(e), n = n && typeof n == ut ? n : ft, R(e, m))
                for (o = e.split(m); a = o[y++];) try {
                    a = w(a), d = a in h, s = h[a], u = typeof s, p = !!(u == dt || s && u == ut), l = !(!i || !p), v = y == o[Ct] ? p && n ? h[a] = f(s, n, st, st, i) : l ? s : h[a] = s || n || {} : l ? s : h[a] = s || {}, h = v
                } catch (g) {
                    h = v = ft
                } else s = h[e], u = typeof s, p = !!(u == dt || s && u == ut), v = p && n ? h[e] = f(s, n, st, st, i) : h[e] = s || n || {};
        return v
    }

    function E(t, e, n, r, o, a, c, s, f) {
        var u, l, p, h, y, m, v = "__defineGetter__",
            g = "__defineSetter__",
            b = "defineProperty",
            w = "getOwnPropertyDescriptor",
            x = st,
            _ = st,
            k = st;
        try {
            u = typeof n
        } catch (A) {
            u = pt
        }
        u == pt && (n = ft);
        try {
            l = t && typeof t || Lt
        } catch (A) {
            l = Lt
        }
        if (c && d(c) ? (_ = ct, p = c) : p = n, s && d(s) ? (k = ct, h = s) : h = i, k && !_ && (p = i), n !== ft || k) {
            if (l == ut || l == dt) try {
                if (Bt[b]) {
                    m = {}, _ && (m.get = p), k && (m.set = h), m.get || m.set || (m[we] = !!a, m[_e] = n), de && 8 != de.ie ? (r || (m[be] = st), o || (m[xe] = st)) : m[we] === st && (delete m[we], delete m[_e], m.get || (m.get = p), m.set || (m.set = h));
                    try {
                        y = Bt[w](t, e)
                    } catch (A) {
                        y = ft
                    }
                    y ? !y[be] && y[we] ? (be in m && delete m[be], xe in m && delete m[xe], m.get && delete m.get, m.set && delete m.set, we in m || (m[we] = h == i ? st : !!a), _e in m || (m[_e] = n), Bt[b](t, e, m), x = ct) : y[be] && !y[we] ? (we in m && delete m[we], _e in m && delete m[_e], m.get || (m.get = p), m.set || (m.set = h), Bt[b](t, e, m), x = ct) : (Bt[b](t, e, m), x = ct) : (Bt[b](t, e, m), x = ct)
                }
            } catch (A) {
                x = st
            }
        } else x = ft;
        if (x) try {
            x = t[e] === n
        } catch (A) {
            x = st
        }
        try {
            x === st && t[v] && (t[v](e, p), t[g](e, h), x = t[e] === n)
        } catch (A) {
            x = st
        }
        try {
            f && x === st && (t[e] = n, x = t[e] === n)
        } catch (A) {
            x = st
        }
        return x
    }

    function T(t, e, n, r, i) {
        var o, a, s, u, d, l, p, h, y, m, v, g, b, w, x, k = st,
            A = this;
        if (!(A instanceof T)) return new T(t, e, n, r, i);
        if (!arguments[Ct]) return A;
        if (t && typeof t == ut) return f(new T(Lt, e, n, r, i), t);
        if (t = c(t), e = c(e) || tt, n = c(n) || et, !t) return A;
        for (o = N(t, 0), (e != Q && n != Q && o == Q || o == e) && (t = O(t, 1)), h = t.split(e), g = h[Ct], a = 0; g--;)
            if (d = h[a++], v = k = st, d) {
                if (y = d.split(n), w = y[Ct], w > 2) {
                    if (m = _(y[0]), y.shift(), i)
                        if (l = m + n, s = R(t, l), w = l[Ct], p = O(t, s + w), l = e + e, x = l[Ct], u = R(p, l), -1 != u) {
                            p = t.substr(s + w, u + x), b = new T(p, e, n, r, i), p = Lt, w = 0;
                            for (p in b) w++;
                            w > 0 && (a += w - 1), d = b
                        } else d = _(y.join(n));
                    else d = _(y.join(n));
                    k = ct
                } else 2 == w && (m = _(y[0]), d = _(y[1]), k = ct);
                k && (r ? m in A || (A[m] = d, v = ct) : (A[m] = d, v = ct), i && v && m && d && typeof d != ut && (R(d, e) >= 0 || R(d, n) >= 0) && (A[m] = new T(d, e, n, r, i)))
            }
    }

    function C(t, e, n, r) {
        var i, o, a, s, f = [],
            u = this;
        t = t || tt, e = e || et;
        for (i in u) a = u[i], o = typeof a, o != dt && (o == ut && a && (a.tagName || a.nodeType ? (DARLA.note && DARLA.note(559), a = "#node") : a = C.call(a, t, e, n, r)), n && (i = x(i)), r || (a = x(a)), f.push(i, e, a, t));
        return s = f[Ct], s && (f[s - 1] = Lt), c(f)
    }

    function R(t, e, n) {
        return n ? t.lastIndexOf(e) : t.indexOf(e)
    }

    function O(t, e, n) {
        return arguments[Ct] > 2 ? t.substring(e, n) : t.substring(e)
    }

    function N(t, e) {
        return t.charAt(e)
    }

    function D(t, e, n) {
        var r = t && t.match(e);
        return n == ft ? r || ft : r && r[n] || ft
    }

    function j(t) {
        var e = 0;
        return parseFloat(t[Tt](re, function() {
            return 1 == e++ ? Lt : ot
        }))
    }

    function M(t, e) {
        return t.test(e)
    }

    function Y() {
        var e;
        try {
            e = ae ? new t[xt](ae) : new XMLHttpRequest
        } catch (n) {
            e = ft
        }
        return e || ft
    }

    function P() {
        var e, n, r = fe,
            i = v();
        if (i - ce >= Gt || fe === ft) {
            try {
                r = !(t != top || !le[bt + "Enabled"])
            } catch (o) {
                r = ft
            }
            if (r === ft) try {
                e = "sf_ck_test_" + i + "_" + g(), n = e + "=1", t[wt][bt] = n, r = -1 != R(t[wt][bt], n), r && (t[wt][bt] = e + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT")
            } catch (o) {
                r = st
            }
            ce = i, fe = r
        }
        return r
    }

    function $() {
        var e, n, r, i, o, a, s = ue,
            f = v();
        if (f - se >= Gt || ue === ft) {
            try {
                i = le.plugins, a = vt + " " + gt, o = i && i[a] || ft, o && (s = o.description, s = s[Tt](/^.*\s+(\S+\s+\S+$)/, "$1"), e = s[Tt](/^(.*)\..*$/, "$1"), n = s[Tt](/^.*\.(.*)\s.*$/, "$1"), r = -1 != R(s, "r") ? s[Tt](/^.*r(.*)$/, "$1") : 0, s = e + ot + n + ot + r)
            } catch (u) {
                s = 0
            }
            if (zt && !s) {
                a = vt + gt + ot + vt + gt;
                try {
                    o = new t[xt](a), o.AllowScriptAccess = "always", o && (s = o.GetVariable("$version"), s ? (s = s.split(" ")[1].split(","), s = s[0] + ot + s[1] + ot + s[2]) : s = 0)
                } catch (u) {
                    s = 0
                }
                if (!s) try {
                    o = new t[xt](a + ".6"), s = "6.0.21"
                } catch (u) {
                    s = 0
                }
            }
            se = f, ue = s
        }
        return c(s)
    }

    function H(t) {
        var e, n = {};
        if (!t && de) return de;
        n.ie = n.edge = n.opera = n[Ut] = n.webkit = n.safari = n.chrome = n.air = n.ipod = n.ipad = n.iphone = n.android = n.webos = n.silk = n.nodejs = n.phanomjs = 0, n.mobile = n.ios = n.os = ft, n.accel = st, n.caja = le && le.cajaVersion, t = t || pe || Lt, t && (M(/windows|win32/i, t) ? n.os = "windows" : M(/macintosh|mac_powerpc/i, t) ? n.os = "macintosh" : M(/android/i, t) ? n.os = "android" : M(/linux/i, t) && (n.os = "linux"), M(/KHTML/, t) && (n.webkit = 1), M(/IEMobile|XBLWP7/, t) && (n.mobile = "windows"), M(/Fennec/, t) && (n.mobile = Ut), e = D(t, /AppleWebKit\/([^\s]*)/, 1), e && (n.webkit = j(e), n.safari = n.webkit, M(/PhantomJS/, t) && (e = D(t, /PhantomJS\/([^\s]*)/, 1), e && (n.phantomjs = j(e))), M(/ Mobile\//, t) || M(/iPad|iPod|iPhone/, t) ? (n.mobile = "Apple", e = D(t, /OS ([^\s]*)/, 1), e = e && j(e[Tt]("_", ot)), n.ios = e, n.ipad = n.ipod = n.iphone = 0, e = D(t, /iPad|iPod|iPhone/, 0), e && (n[e[yt]()] = n.ios)) : (e = D(t, /NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/, 0), e && (n.mobile = e), M(/webOS/, t) && (n.mobile = "WebOS", e = D(t, /webOS\/([^\s]*);/, 1), e && (n.webos = j(e))), M(/ Android/, t) && (n.mobile = "Android", e = D(t, /Android ([^\s]*);/, 1), e && (n.android = j(e))), M(/Silk/, t) && (e = D(t, /Silk\/([^\s]*)\)/, 1), e && (n.silk = j(e)), n.android || (n.android = 2.34, n.os = "Android"), M(/Accelerated=true/, t) && (n.accel = !0))), e = D(t, /Edge\/([^\s]*)/), e && e[0] && e[1] ? (n.edge = j(e[1]), n.safari = 0, n.chrome = 0) : (e = D(t, /(Chrome|CrMo)\/([^\s]*)/), e && e[1] && e[2] ? (n.chrome = j(e[2]), n.safari = 0, "CrMo" === e[1] && (n.mobile = "chrome")) : (e = D(t, /AdobeAIR\/([^\s]*)/), e && (n.air = e[0])))), n.webkit || (e = D(t, /Opera[\s\/]([^\s]*)/, 1), e ? (n.opera = j(e), e = D(t, /Opera Mini[^;]*/, 0), e && (n.mobile = e)) : (e = D(t, /MSIE ([^;]*)|Trident.*; rv:([0-9.]+)/), e ? (e = e[1] || e[2], n.ie = j(e)) : (e = D(t, /Gecko\/([^\s]*)/), e && (n[Ut] = 1, e = D(t, /rv:([^\s\)]*)/, 1), e && (n[Ut] = j(e)))))));
        try {
            typeof process == ut && process.versions && process.versions.node && (n.os = process.platform, n.nodejs = j(process.versions.node))
        } catch (r) {
            n.nodejs = 0
        }
        return n
    }

    function B(e) {
        var n, r, i, o, a, s, f, u = Lt,
            d = me,
            l = 0,
            p = e[Ct];
        if (e = c(e), ye) return ye.call(t, e);
        if (!e) return u;
        for (l; p > l;) o = R(d, N(e, l++)), a = R(d, N(e, l++)), s = R(d, N(e, l++)), f = R(d, N(e, l++)), n = o << 2 | a >> 4, r = (15 & a) << 4 | s >> 2, i = (3 & s) << 6 | f, u += Ft(n), 64 != s && (u += Ft(r)), 64 != f && (u += Ft(i));
        return u
    }

    function I(t, e) {
        var n, r, i, o, a, s = 0;
        e || (e = {}, e[Dt] = e[Rt] = e[Ot] = Lt);
        try {
            if (G) {
                if (n = G[Rt], i = G[Ot], a = G[Dt], r = G[Mt], o = D(t, Zt), o && (s = o.lastIndex, o = o[0]), M(ee, o)) s = R(a, nt, 1), s != Et && (o = O(a, 0, s) + o);
                else if (M(te, o)) o = o[Tt](te, Lt), s = R(a, nt, 1), s != Et && (o = O(a, 0, s + 1) + o);
                else {
                    for (; Qt.exec(o) && (s = R(a, nt, 1), s != Et);) a = O(a, 0, s), o = o[Tt](RegExp.$1, Lt);
                    o = c([a, nt, o])
                }
                e[Rt] = n, e[Ot] = i, e[Dt] = o
            }
        } catch (f) {}
        return e
    }

    function F(t, e) {
        var n, r = Lt,
            i = Lt,
            o = Lt,
            a = Lt,
            s = Lt,
            f = Lt,
            u = 0;
        return t && (t.search(Kt) || (I(t, e), t = c([e[Rt], at, e[Ot], nt, e[Dt]])), n = D(t, Jt), n && (r = n[1] || Lt, i = n[2] || Lt, f = n[3] || Lt, o = n[5] || Lt, a = n[6] || Lt, s = n[7] || Lt), r && (r = r[Tt](ne, Lt), "file" == r[yt]() && i && o && N(o, 0) == rt && (o = i + o, i = Lt)), f && (f = f[Tt](ne, Lt)), a && N(a, 0) == Q && (a = O(a, 1)), s && N(s, 0) == it && (s = O(s, 1)), o && N(o, 0) == nt && (o = O(o, 1)), s && (u = R(s, Q), u != Et && (a = O(s, u + 1), s = O(s, 0, u)))), e = e || {}, e[Rt] = r, e[Ot] = i, e[Mt] = f, e[Dt] = o, e[Nt] = a, e[jt] = s, e
    }

    function z(t, e, n, r, i, o) {
        if (!(this instanceof z)) return new z(t, e, n, r, i, o);
        var a, s, f, u = this,
            d = arguments[Ct],
            l = st;
        if (u[Rt] = u[Ot] = u[Dt] = u[jt] = u[Mt] = Lt, u[Nt] = ft, !d) return u;
        t = c(t), 1 != d && (!t || e || n || r || i || o) ? (-1 == R(t, rt) && (t += rt), a = D(t, qt, 0), a && (s = u[Rt] = a, u[Rt] = u[Rt][Tt](ne, Lt)), e = c(e), e ? u[Ot] = e : (f = {}, F(t, f), f[Ot] && (u[Ot] = f[Ot])), o && D(o, ie) ? u[Mt] = o : (f = {}, F(t, f), f[Mt] && (u[Mt] = f[Mt])), n = c(n), n ? (l = !!D(n, Kt), l && I(n, u), l && (e != u[Ot] && (u[Ot] = e), s != u[Rt] && (u[Rt] = s), o != u[Mt] && (u[Mt] = o)), u[Dt] = n) : (f = {}, F(t, f), f[Dt] && (u[Dt] = f[Dt])), i ? u[jt] = i : (f = {}, F(t, f), f[jt] && (u[jt] = f[jt])), r ? u[Nt] = r : (f = {}, F(t, f), f[Nt] && (u[Nt] = f[Nt]))) : F(t, u), R(u[Dt], it) || (u[jt] = O(u[Dt], 1), u[Dt] = Lt);
        try {
            u[Nt] && typeof u[Nt] === lt && (u[Nt] = T(u[Nt], tt, et))
        } catch (p) {
            u[Nt] = ft
        }
    }

    function U(t) {
        var e, n, i, o = /([-!#$%&'*+\/=?^`{|}~]|\w)(([-!#$%&'*+\/=?^`{|}~]|\w)|(\.([-!#$%&'*+\/=?^`{|}~]|\w)))*@\w(\w|([-.]\w))*\.\w{2,4}/,
            a = st,
            c = ct;
        if (t) {
            n = t[Nt] ? t : new z(t), e = n[Nt];
            for (i in e)
                if (r(e, i)) {
                    if (-1 != R(i, "login") || -1 != R(i, "crumb")) {
                        a = ct;
                        break
                    }
                    if (o.test(e[i])) {
                        a = ct;
                        break
                    }
                }
            a || (c = st)
        } else c = st;
        return c
    }

    function W(t) {
        var e, n, i, o = /([-!$'*+\/?^`{|}~]|\w)(([-!$'*+\/?^`{|}~]|\w)|(\.([-!$'*+\/?^`{|}~]|\w)))*@\w(\w|([-.]\w))*\.\w{2,4}/g,
            a = T();
        e = t[Nt] ? t : new z(t), n = e[Nt];
        for (i in n)
            if (r(n, i)) {
                if (-1 != R(i, "login") || -1 != R(i, "crumb")) continue;
                a[i] = n[i].replace(o, "DRL")
            }
        return e[Nt] = a, e.toString()
    }

    function X(e, n, r) {
        var i = -1,
            o = "set" + At;
        if (r) return t[o](e, n);
        try {
            i = t[o](e, n)
        } catch (a) {
            i = -1
        }
        return i
    }

    function V(e, n) {
        var r = 0,
            i = "clear" + At;
        if (n) return t[i](e), 1;
        try {
            t[i](e), r = 1
        } catch (o) {
            r = 0
        }
        return r
    }
    var G, J, q, K, Z, Q = "?",
        tt = "&",
        et = "=",
        nt = "/",
        rt = ":",
        it = "#",
        ot = ".",
        at = rt + nt + nt,
        ct = !0,
        st = !1,
        ft = null,
        ut = "object",
        dt = "function",
        lt = "string",
        pt = "undefined",
        ht = "number",
        yt = "toLowerCase",
        mt = "apply",
        vt = "Shockwave",
        gt = "Flash",
        bt = "cookie",
        wt = "document",
        xt = "ActiveXObject",
        _t = "toString",
        kt = "valueOf",
        At = "Timeout",
        St = "prototype",
        Lt = "",
        Et = -1,
        Tt = "replace",
        Ct = "length",
        Rt = "protocol",
        Ot = "host",
        Nt = "params",
        Dt = "path",
        jt = "hash",
        Mt = "port",
        Yt = t && t.Number,
        Pt = t && t.Math,
        $t = t && t.Date,
        Ht = t && t.Array,
        Bt = t && t.Object,
        It = t && t.Function,
        Ft = String.fromCharCode,
        zt = st,
        Ut = "gecko",
        Wt = Yt && Yt.MAX_VALUE || 9007199254740992,
        Xt = Et * Wt,
        Vt = 2048,
        Gt = 6e4,
        Jt = /^(http\:|https\:|file\:|ftp\:)(?:\/)+([-\w\.]+)(\:\d+)?(([^\s\?#]*)(\?\S[^#]*)*(#\S*)*)/i,
        qt = /http\:|https\:|file\:|ftp:\:/gi,
        Kt = /^(\.\.\/|\.\/|\/)/,
        Zt = /\S[^\?#]*/,
        Qt = /(^\.\.\/)/,
        te = /(^\.\/)/,
        ee = /(^\/)/,
        ne = /\:/g,
        re = /\./g,
        ie = /^\d+/,
        oe = 0,
        ae = Lt,
        ce = 0,
        se = 0,
        fe = ft,
        ue = ft,
        de = ft,
        le = t && t.navigator,
        pe = le && le.userAgent || Lt,
        he = Bt[St].hasOwnProperty,
        ye = t && t.atob,
        me = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" + et,
        ve = {
            img: {
                end: 0,
                type: 0
            },
            script: {
                end: 1,
                type: 1
            },
            style: {
                end: 1,
                type: 2
            },
            iframe: {
                end: 1,
                type: 3
            },
            object: {
                end: 1,
                type: 4
            },
            embed: {
                end: 1,
                type: 5
            },
            param: {
                end: 0,
                type: 6
            },
            video: {
                end: 1,
                type: 7
            },
            audio: {
                end: 1,
                type: 8
            },
            track: {
                end: 0,
                type: 9
            },
            source: {
                end: 0,
                type: 10
            },
            applet: {
                end: 1,
                type: 11
            },
            base: {
                end: 0,
                type: 12
            },
            link: {
                end: 0,
                type: 13
            },
            meta: {
                end: 0,
                type: 14
            },
            title: {
                end: 1,
                type: 15
            },
            html: {
                end: 1,
                type: 16
            },
            head: {
                end: 1,
                type: 17
            },
            body: {
                end: 1,
                type: 18
            },
            frameset: {
                end: 1,
                type: 19
            },
            frame: {
                end: 0,
                type: 20
            },
            doctype: {
                end: 0,
                type: 21
            },
            noscript: {
                end: 1,
                type: 22
            }
        },
        ge = "((?:\\s+[\\:\\-A-Za-z0-9_]+(?:\\s*=\\s*(?:(?:\\\"[^\\\"]*\\\")|(?:'[^']*')|[^>\\s]+))?)*)\\s*(\\/?)>",
        be = "configurable",
        we = "writable",
        xe = "enumerable",
        _e = "value",
        ke = ["http", "", "://geo.yahoo.com/p?s=1197801021&t=", 3, "&_ts=", 5, "&_ms=", 7, "&usergenf=0&outcm=privPolicy&etrg=backgroundPost&etag=darla&_R=", 9, "&_w=", 11, "&A_pr=", 13, "&D_v=", 15],
        Ae = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    Z = T[St], Z[_t] = Z[kt] = C,
        function() {
            function e(t) {
                var e = Lt,
                    n = t || this,
                    r = n[Rt],
                    i = n[Ot],
                    o = n[Mt];
                return r ? "file" != r ? i ? o && !D(o, ie) ? st : (r += rt, r.search(qt) ? st : (e = c([r, at, i, o ? rt + o : Lt, nt, n[Dt]]), e[Ct] > Vt ? st : D(i, /^[-\w\.]+/i) ? !!e : st)) : st : !(!r || !n[Dt]) : st
            }

            function n(e) {
                var n, r;
                if (e) {
                    try {
                        r = t[wt].referrer
                    } catch (i) {
                        r = Lt
                    }
                    r != K ? (K = r, n = J = new z(r)) : n = J
                } else {
                    try {
                        r = t.location.href
                    } catch (i) {
                        r = Lt
                    }
                    if (!r) try {
                        r = t[wt].URL
                    } catch (i) {
                        r = Lt
                    }
                    r != q ? (q = r, n = G = new z(r), U(r) && X(function() {
                        var e = R(r, ":"),
                            n = v()[_t](),
                            i = n[Ct] - 3,
                            o = encodeURIComponent,
                            a = ke;
                        G.isSSL() && (a[1] = "s"), a[3] = Pt.random(), a[5] = O(n, 0, i), a[7] = O(n, i), a[9] = o(r), a[11] = o(O(r, e + 3)), a[13] = O(r, 0, e), a[15] = DARLA.version, DARLA.Dom.img(a.join("")), t.console.warn("DETECTED PP VIOLATION ON " + r)
                    }, 100)) : n = G
                }
                return n
            }

            function r() {
                return n()
            }

            function i() {
                return n(1)
            }
            var o = {};
            z.MAX_LENGTH = Vt, z.validate = function(t) {
                return e(new z(t))
            }, o.isValid = e, o.isSSL = function(t) {
                var e = t || this,
                    n = st;
                if (e && e instanceof z) try {
                    n = 0 === e[Rt].search(/https/i)
                } catch (r) {
                    n = st
                }
                return n
            }, o[_t] = o[kt] = function() {
                var t, n, r, i, o, a, s = this;
                try {
                    if (!e(s)) return Lt
                } catch (f) {
                    return Lt
                }
                return r = s[Nt], n = s[Dt], i = s[jt], o = s[Mt], t = [s[Rt], at, s[Ot]], o && t.push(rt, o), n && D(n, /\/|\w+/g) && t.push(nt, n), r && r instanceof T && (r = c(r) || Lt, a = r[Ct], a && N(r, a - 1) == tt && (r = O(r, 0, a - 1)), t.push(Q, r)), i && t.push(it, i), c(t)
            }, o.toStripString = function() {
                var t = Lt,
                    e = this,
                    n = e[Rt],
                    r = e[Dt],
                    i = e[Ot];
                return n && r && i && (t = c([n, at, i, nt, r])), t
            }, o.toHostString = function(t, n) {
                var r, i, o = Lt,
                    a = this,
                    s = [];
                return a instanceof z && e(a) && (r = a[Ot] || Lt, r && s.push(r), t !== st && (i = a[Rt] || Lt, i && s.unshift(i, at)), n && r && (i = a[Mt] || Lt, i && s.push(rt, i)), o = c(s)), o
            }, o.isSub = function(t) {
                var e = st,
                    n = this,
                    r = -1;
                return n instanceof z && t instanceof z && n[Mt] === t[Mt] && n[Rt] === t[Rt] && (r = n[Ot].lastIndexOf(t[Ot]), e = !(-1 == r || r + t[Ot][Ct] != n[Ot][Ct])), e
            }, z[St] = o, r(), i(), z.loc = r, z.ref = i, z.convertRelative = I
        }(),
        function() {
            var e, n, r = "Msxml2",
                i = ".XMLHTTP",
                o = [r + i + ".6.0", r + i + ".3.0", r + i, "Microsoft" + i],
                a = ft,
                c = 0;
            try {
                e = t[xt], zt = !!e
            } catch (s) {
                e = ft, zt = st
            }
            if (e)
                for (; n = o[c++];) try {
                    a = new e(n), a && (ae = n)
                } catch (s) {
                    ae = Lt
                } finally {
                    a = ft
                }
            e = a = ft, de = H(), de.parse = H, zt = zt ? zt : !!de.ie
        }(), L("DARLA", {
            isIE: zt,
            cookiesOn: P,
            flashVersion: $,
            xhr: Y
        }, ft, ct), L("DARLA.Lang", {
            ParamHash: T,
            URL: z,
            cstr: c,
            fCC: Ft,
            atob: B,
            cnum: s,
            mix: f,
            arrayContains: u,
            time: v,
            rand: g,
            coinFlip: b,
            def: L,
            trim: w,
            convertArgs: l,
            canCall: d,
            callSafe: y,
            rbind: m,
            empty: p,
            findTags: A,
            findAttribute: S,
            cbool: function(t) {
                var e = t,
                    n = typeof e;
                return e && n == ut && (e = c(e), e = e ? e[yt]() : e, n = lt), n == lt && "0" === e || "false" === e || "no" === e || e === pt || "null" === e ? st : !!e
            },
            guid: function(t) {
                return c([t || Lt, "_", oe++, "_" + v(), "_", g()])
            },
            noop: i,
            rtrue: function() {
                return ct
            },
            rfalse: function() {
                return st
            },
            rnull: function() {
                return ft
            },
            ar: o,
            obj: function() {
                return {}
            },
            isobj: n,
            own: r,
            prop: E,
            json: a,
            btoa: h,
            ns: function(e, n) {
                var r, i, o, a, s, f, u = /(\[(.{1,})\])|(\.\w+)/gm,
                    d = /\[(('|")?)((\s|.)*?)(('|")?)\]/gm,
                    l = /(\[.*)|(\..*)/g,
                    p = /\./gm,
                    h = 0,
                    y = Lt,
                    m = st,
                    v = st;
                if (i = n = n || t, e && (e = c(e)))
                    if (e = w(e), o = D(e, u)) {
                        for (y = e[Tt](l, Lt), o.unshift(y); a = o[h++];) {
                            a = a[Tt](d, "$3")[Tt](p, Lt);
                            try {
                                if (s = i[a], f = typeof s, !(s && f == ut || f == dt)) {
                                    v = ct, m = st;
                                    break
                                }
                                i = i[a]
                            } catch (g) {
                                v = ct, m = st;
                                break
                            }
                        }
                        v || (m = ct)
                    } else try {
                        a = e, s = i[a], f = typeof s, (s && f == ut || f == dt) && (i = s, m = ct)
                    } catch (g) {
                        m = st
                    }
                return r = m ? i : st
            },
            _isob: U,
            urlToPublic: W,
            sto: X,
            cto: V,
            es: x,
            ues: _
        }, ft, ct), L("$sf.lib", {
            cookiesOn: P,
            isIE: zt,
            flashVersion: $,
            lang: DARLA.Lang
        }, ft, ct), L("DARLA.Dom.UA", de, ft, ct)
}(window),
function(t) {
    function e(t) {
        var e;
        try {
            e = xe(t && t.nodeType, -1)
        } catch (n) {
            e = -1
        }
        return e
    }

    function n(t) {
        return 1 === e(t)
    }

    function r(e) {
        ke(t[Ht][Ot], t[Ht], Mt, wt, r, Yt), ke(t[Ht][Ot], t[Ht], Mt, At, i, Yt), B(t, _t, i), We = Pt
    }

    function i(e) {
        ke(t[Ht][Ot], t[Ht], Mt, wt, r, Yt), ke(t[Ht][Ot], t[Ht], Mt, At, i, Yt), B(t, _t, i), We = Pt
    }

    function o() {
        var e, n, r, i;
        if (Ue && (Le(Ue), Ue = 0), Fe >= ze && (Ie = Mt, We = Pt), We === Mt) {
            try {
                e = t[Ht][It], n = et("*")[ut], r = e && e.childNodes && e.childNodes[ut] || 0, i = e && e.lastChild
            } catch (a) {
                He = Be = 0, Ie = Mt
            }
            He && n == He && Be && r == Be && i == Ie ? (Ie = Mt, We = Pt) : (He = n, Be = r, Ie = i, Fe += 1, Ue = Se(o, Dt))
        } else Ie = Mt
    }

    function a(e) {
        var n, r = Yt,
            i = Yt,
            a = _t + "ed",
            c = "complete";
        if (Ue && (clearTimeout(Ue), Ue = 0), 1 != e && We) Ie = Mt, e ? 2 == e && (r = Pt) : r = Pt;
        else {
            try {
                n = t[Ht].readyState
            } catch (s) {
                n = ""
            }
            n ? (Ie = Mt, e ? 2 == e ? n == a || n == c ? r = We = Pt : (i = Pt, r = We = Yt) : n != a && n != c ? (r = Pt, i = Pt) : (i = Pt, r = Yt) : n == a || n == c || !Re || Re && Ne > 8 && "interactive" == n ? r = We = Pt : (i = Pt, r = We = Yt)) : (i = Pt, 1 == e && (r = Pt))
        }
        return i && (He = Be = Fe = 0, Ie = Mt, o()), r
    }

    function c(t) {
        var e, n = we(t && t.id);
        e = n && Xe[n], e && (B(t, _t, e), Xe[n] = Mt, delete Xe[n])
    }

    function s(t, e) {
        var n, r;
        be.canCall(e) && (n = function(i) {
            var o = i[Ye] || i[Pe];
            c(o), o && e && ke(e, o, Mt, i), o = t = e = n = r = Mt
        }, r = t.id, c(t), r && (Xe[r] = n), H(t, _t, n)), n = Mt
    }

    function f(t, e, n, r) {
        return Ce = Ee.XMsgHost, t && Ce && Ce[t] && Ce[t](e, n, r)
    }

    function u(t) {
        var e = t;
        try {
            e = t && "string" == typeof t ? L(t) || t : t
        } catch (n) {
            e = t
        }
        return e
    }

    function d(t, e, n) {
        var r, i = Yt,
            o = p(t);
        if (r = _(o), e = e || "", r && o != top) try {
            e || Re ? (r.open("text/html", ht), r.write(e), n || r.close()) : o.location[ht](ct), i = Pt
        } catch (a) {
            i = Yt
        }
        return t = r = o = Mt, i
    }

    function l(e) {
        var n = Mt;
        return e = e || t, e && e[Me] ? n = e : (e = _(e), e && e[Me] && (n = e)), n
    }

    function p(t) {
        var e, n, r, i, o, a, c = 0;
        try {
            if (e = t.contentWindow || Mt, !e)
                for (r = _(t), n = r && S(r), i = n && n.frames || []; o = i[c++];) {
                    try {
                        a = o.frameElement
                    } catch (s) {
                        a = Mt
                    }
                    if (a && a == t) {
                        e = o;
                        break
                    }
                }
        } catch (f) {
            e = Mt
        }
        return e
    }

    function h(e, n, r, i, o) {
        var a, s, d, l, p, h;
        e = e || {}, l = e.id, s = l && u(l), p = tt(s), s = p ? s : Mt, d = p == st ? s : Mt, d ? (f("detach", d), c(d), h = M(d), a = m(d, e, n, r, o), O(a, kt, Mt), O(a, "onreadystatechange", Mt)) : (i && ("string" == typeof i && (i = u(i)), tt(i) && (h = i)), !h && s && (h = M(s)), n = we(n) || N(s) || "", a = w(e, n, r, o));
        try {
            h ? d ? h[yt](a, d) : s ? h[yt](a, s) : j(h, a) : j(t[Ht][It], a)
        } catch (y) {}
        return a = s = e = d = h = r = Mt, L(l)
    }

    function y(t, e, n) {
        var r = Yt;
        return (t = u(t)) ? (e = e || "", r = d(t, e, n), t = Mt, r) : r
    }

    function m(t, e, n, r, i) {
        return b(t, e, n, r, i)
    }

    function v(t, e, n, r, i, o) {
        var a = Ae(g, Mt, e, n, r, i, o);
        Se(a, 90)
    }

    function g(t, e, n, r, i) {
        var o, a, c, u;
        t && Y(t) && (Re ? (c = M(t), a = t.cloneNode(Yt), a.src = e, u = x("div"), u.innerHTML = a.outerHTML, a = u.firstChild, s(a, n), r && f(mt, a, r, i), c[yt](a, t)) : (o = p(t), s(t, n), r && f(mt, t, r, i), o.location[ht](e)))
    }

    function b(t, e, n, r, i, o) {
        var a, c, d, l, p, h, y, m, g, b, w, _ = ["<", st, " "],
            k = "",
            A = Yt;
        if (o) p = t;
        else {
            if (t = u(t), tt(t) != st) return Mt;
            p = t.cloneNode(Yt)
        }
        e = e || {}, St in e && O(p, St, Mt), Lt in e && O(p, Lt, Mt), g = e[St] = we(e[St]) || O(t, St) || ct, b = e[Lt] = we(e[Lt]) || O(t, Lt) || "", k = i && f("prep", e), k && (b = we(k)), o || (O(p, "width", Mt), O(p, "height", Mt)), n && (l = N(p), l && ";" != l.charAt(l[ut] - 1) && (l += ";"), N(p, [l, we(n)])), A = g != ct && be.cbool(e.async) && Ee.loading(), A && (e[St] = ct, delete e.async), l = x("div"), j(l, p), y = l.innerHTML, m = y[ht](/<iframe(.*?)>(.*?)<\/iframe>/gim, "$1"), b && _.push(Lt, '="', b, '" '), m && _.push(m), _.push(" ></", st, ">"), delete e[Lt], l.innerHTML = we(_), h = l.firstChild;
        for (a in e) d = e[a], c = typeof d, ("function" == c || d && c == $t) && (d = ""), O(h, a, d);
        return h.id || (h.id = "darla_" + st + "_" + $e, $e++), O(h, "FRAMEBORDER", "no"), O(h, Qt, "no"), O(h, "ALLOWTRANSPARENCY", Pt), O(h, "HIDEFOCUS", Pt), O(h, "TABINDEX", -1), O(h, "MARGINWIDTH", 0), O(h, "MARGINHEIGHT", 0), A ? (w = Ae(v, Mt, h, g, r, k, i), s(h, w)) : (s(h, r), k && f(mt, h, k, i)), k = i = p = r = t = l = null, h
    }

    function w(t, e, n, r) {
        return b(x(st), t, e, n, r, Pt)
    }

    function x(e, n) {
        return (arguments[ut] > 1 && _(n) || t[Ht]).createElement(e)
    }

    function _(t) {
        var n, r = Mt;
        try {
            t && (n = e(t), r = 9 == n ? t : t[Ht] || t.ownerDocument || Mt)
        } catch (i) {
            r = Mt
        }
        return r
    }

    function k(e) {
        var n = e && _(e) || t[Ht],
            r = n[Xt],
            i = n[Bt];
        return r && !Oe && "CSS1Compat" != r && (i = n[It]), i
    }

    function A(e, n) {
        var r = t[Ht].domain,
            i = be.URL.loc().host;
        if (e && -1 != i.indexOf(e) && -1 != e.indexOf(".")) try {
            t[Ht].domain = e, r = e
        } catch (o) {}
        return r != i || n || (r = ""), r
    }

    function S(t) {
        var e, n = Mt;
        try {
            t && (n = t[gt] || t[bt] || Mt, n || (e = _(t), n = e && (e[gt] || e[bt]) || Mt))
        } catch (r) {
            n = Mt
        }
        return n
    }

    function L(e) {
        var n, r = arguments,
            i = r[ut],
            o = Mt;
        n = i > 1 ? _(r[1]) : t[Ht];
        try {
            o = e && n.getElementById(e) || Mt
        } catch (a) {
            o = Mt
        }
        return o
    }

    function E(t) {
        return t && n(t) ? O(t, "id") || t.id || "" : ""
    }

    function T(n, r) {
        var i = Mt;
        try {
            i = t[Ht].elementFromPoint(n, r), 1 !== e(i) && (i = Mt)
        } catch (o) {
            i = Mt
        }
        return i
    }

    function C(e, n) {
        var r, i, o, a, c = "{",
            s = "}";
        try {
            r = et("head")[0], -1 == e.indexOf(c) && -1 == e.indexOf(s) ? (i = x("link"), i.type = "text/css", i.rel = "stylesheet", i.href = e, n && (i.id = n), j(r, i)) : (i = x("style"), i.type = "text/css", n && (i.id = n), j(r, i), a = i.styleSheet, a && a.addRule ? a[Vt] = e : (o = t[Ht].createTextNode(e), j(i, o)))
        } catch (f) {}
    }

    function R(t, e, n) {
        try {
            arguments[ut] > 2 ? n === Mt ? t[pt](e, 0) : (n = we(n), "class" == e[zt]() ? t.className = n : t[lt](e, n, 0)) : n = we(t[dt](e, 0))
        } catch (r) {
            n = ""
        }
        return n
    }

    function O(t, e, n) {
        try {
            arguments[ut] > 2 ? n === Mt ? t[pt](e) : (n = we(n), "class" == e[zt]() ? t.className = n : t[lt](e, n)) : n = we(t[dt](e))
        } catch (r) {
            n = ""
        }
        return n
    }

    function N(t, e) {
        var n;
        try {
            n = t.style, arguments[ut] > 1 ? n[Vt] = we(e) : e = n[Vt]
        } catch (r) {
            e = ""
        }
        return e
    }

    function D(t, e, n) {
        var r = 1 == e ? "inherit" : 2 == e ? "visible" : "hidden",
            i = t && t.style,
            o = -1;
        i && (i.visibility = r, 0 !== n && 1 !== n && 2 !== n && 3 !== n || (1 == e || 2 == e ? 1 == n ? o = "block" : 2 == n ? o = "inline-block" : 3 == n && (o = "inline") : o = "none"), -1 != o && (i[Ct] = o))
    }

    function j(t, e) {
        return t.appendChild(e)
    }

    function M(t) {
        return t && (t[ee] || t.parentElement)
    }

    function Y(e, n) {
        return n = arguments[ut] > 1 ? _(e) : t[Ht], n && e && Z(n[Bt], e)
    }

    function P(t) {
        return t && (t.text || t.innerHTML || t.innerText) || ""
    }

    function $(t, e, n) {
        var r = new Image;
        return r[kt] = r.onerror = function() {
            ke(e, r), ke(n, r), r[kt] = r.onerror = Mt, e = n = r = Mt
        }, r[St] = t, r
    }

    function H(t, e, n, r) {
        var i = Yt,
            o = {};
        if (r = r || Yt, ke(t && t[Rt], t, o, e, n, r), o.err || (i = Pt), !i && Re) try {
            t.attachEvent(xt + e, n), i = Pt
        } catch (a) {
            i = Yt
        }
        return t = n = Mt, i
    }

    function B(t, e, n, r) {
        var i = Yt,
            o = {};
        if (r = r || Yt, ke(t && t[Ot], t, o, e, n, r), o.err || (i = Pt), !i && Re) try {
            t.detachEvent(xt + e, n)
        } catch (a) {
            i = Yt
        }
        return t = n = Mt, i
    }

    function I(t, e) {
        var n, r = "";
        try {
            n = t[Gt]
        } catch (i) {
            n = Mt
        }
        if (arguments[ut] > 1 && e && n) try {
            r = n[e]
        } catch (i) {
            r = ""
        } else r = n;
        return r
    }

    function F(t, e) {
        var n, r = "";
        try {
            n = S(t)[Jt](t, Mt)
        } catch (i) {
            n = Mt
        }
        if (arguments[ut] > 1 && e && n) try {
            r = n[e]
        } catch (i) {
            r = ""
        } else r = n;
        return r
    }

    function z(t) {
        var e, n, r = [-1, -1, -1, -1],
            i = [Kt + "Top", Kt + "Right", Kt + "Bottom", Kt + "Left"],
            o = 0;
        if (!t) return r;
        for (; n = i[o];) e = t[n], W(e) && (e = xe(e, -1), e >= 0 && (r[o] = e)), o++;
        return r
    }

    function U(t) {
        var e, n, r = [-1, -1, -1, -1],
            i = t && t[Kt],
            o = 0;
        if (i && -1 != i[vt](/\d+/g))
            for (i = i[ht](/\w+\(([^\)]*?)\)/g, "$1"), r = i.split(" "), r = r[ut] <= 1 ? r.split(",") : r, n = r[ut], o = 0; n--;) e = r[o], W(e) ? r[o] = xe(e, -1) : r[o] = -1, o++;
        return r
    }

    function W(t) {
        return t = we(t), t && -1 == t[vt](/\D+/g) ? Pt : t && -1 != t[vt](/px/gi) ? Pt : void 0
    }

    function X(t, e, n) {
        var r = 0,
            i = 0,
            o = /^t(?:able|d|h|r|head|foot)$/i;
        return n = n || it(t), n && (r = n.borderTopWidth, i = n.borderLeftWidth, r = W(r) ? xe(r, 0) : 0, i = W(i) ? xe(i, 0) : 0, je && o.test(tt(t)) && (r = i = 0)), e = e || {
            t: 0,
            l: 0
        }, e.t += r, e.l += i, e
    }

    function V() {}

    function G(e) {
        var n, r, i, o, a = {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            },
            c = V,
            s = 0,
            f = 0,
            u = "page",
            d = "Offset",
            l = u + "X" + d,
            p = u + "Y" + d,
            h = Yt;
        e ? (n = _(e), n ? i = S(e) : (n = t[Ht], i = t)) : (n = t[Ht], i = t), r = n && n[Bt] || c, o = n && n[It] || c;
        try {
            h = !!(i && i != top && l in i)
        } catch (y) {
            h = Yt
        }
        return h && (s = xe(i[l], 0), f = xe(i[p], 0)), a.x = ve(r[ye], o[ye], s), a.y = ve(r[he], o[he], f), a.w = ve(r[le], o[le], 0), a.h = ve(r[pe], o[pe], 0), a
    }

    function J(e) {
        var r, i, o, a, c, s, f, u, d, l, p = {
                t: 0,
                l: 0,
                r: 0,
                b: 0,
                w: 0,
                h: 0,
                z: 0
            },
            h = "getBoundingClientRect",
            y = 0,
            m = 0,
            v = 0,
            g = 0,
            b = Yt,
            w = _(e) || t[Ht],
            x = w[Xt],
            A = w.documentMode || 0;
        if (n(e)) try {
            if (c = it(e), r = k(e), i = G(e), p.l = e[oe] || 0, p.t = e[ie] || 0, o = e, a = Mt, b = je || De > 519, l = e === r, !l && h && e[h]) Re && (!A || A > 0 && 8 > A || x === qt) && (f = r.clientLeft, u = r.clientTop), d = e[h](), p.t = d.top, p.l = d.left, (f || u) && (p.l -= f, p.t -= u), (i.y || i.x) && (!Te.ios || Te.ios >= 4.2) && (p.l += i.x, p.t += i.y);
            else {
                for (;
                    (o = o[re]) && n(o) && a !== o;) f = o[oe], u = o[ie], p.t += u, p.l += f, b && (p = X(o, p)), a = o;
                if ("fixed" != c[Tt]) {
                    for (o = e, a = Mt;
                        (o = o[ee]) && n(o) && a !== o && o != r;) y = o[he], m = o[ye], je && (s = it(o), "visible" != s[te] && (p = X(o, p, s))), (y || m) && (p.l -= m, p.t -= y), a = o;
                    p.l += i.x, p.t += i.y
                } else p.l += i.x, p.t += i.y
            }
            e == r ? (g = e[fe], v = e[se]) : (g = e[ce], v = e[ae]), p.b = p.t + g, p.r = p.l + v, p.w = ve(v, 0), p.h = ve(g, 0), p.z = c.zIndex
        } catch (S) {
            p = {
                t: 0,
                l: 0,
                r: 0,
                b: 0,
                w: 0,
                h: 0,
                z: 0
            }
        }
        return p
    }

    function q(e) {
        var n = e && S(e) || t,
            r = n[de] || 0,
            i = n[ue] || 0,
            o = n.screenY || n.screenTop || 0,
            a = r + o,
            c = n.screenX || n.screenLeft || 0,
            s = i + c,
            f = k(e);
        return r || i || !f || (r = f[fe] || 0, i = f[se] || 0, s = c + i, a = o + r), {
            t: o,
            l: c,
            b: a,
            r: s,
            w: i,
            h: r
        }
    }

    function K(t) {
        var e = k(t),
            n = 0,
            r = 0;
        return e && (n = e[le] || 0, r = e[pe] || 0), {
            t: 0,
            l: 0,
            b: r,
            r: n,
            w: n,
            h: r
        }
    }

    function Z(n, r) {
        var i = Yt,
            o = e(n),
            a = e(r);
        if (1 == o && -1 != a)
            if (n[Ut])
                if (Oe || 1 == a) i = n[Ut](r);
                else
                    for (; r;) {
                        if (n === r) {
                            i = Pt;
                            break
                        }
                        if (r = r[ee], r == t[Ht][Bt]) break
                    } else n[Wt] && (i = n === r || !!(16 & n[Wt](r)));
        return i
    }

    function Q(t) {
        var e, n = Yt,
            r = tt(t) == st;
        r && (f("detach", t), c(t), d(t) || O(t, St, ct));
        try {
            e = M(t), e && (e.removeChild(t), n = Pt, Re && r && nt())
        } catch (i) {}
        return t = e = Mt, n
    }

    function tt(t) {
        return 1 === e(t) && t.tagName[zt]() || ""
    }

    function et(e, n, r) {
        var i, o, a, c, s = [],
            f = "getElementsByTagName",
            u = "getElementsByClassName",
            d = Mt;
        try {
            if (n || (n = t[Ht]), n)
                if (r) {
                    if ("string" == typeof r) {
                        if (n[u]) {
                            if (i = n[u](r), a = i && i[ut], c = 0, a)
                                for (; o = i[c++];) tt(o) == e && s.push(o)
                        } else if (n[f] && (i = n[f](e), a = i && i[ut], c = 0, d = e ? new RegExp("(?:^|\\s+)" + r + "(?:\\s+|$)") : Mt, a && d))
                            for (; o = i[c++];) - 1 != o.className.search(d) && s.push(o)
                    } else if (n[u]) s = n[u](e);
                    else if (n[f] && (i = n[f]("*"), a = i && i[ut], c = 0, d = e ? new RegExp("(?:^|\\s+)" + e + "(?:\\s+|$)") : Mt, a && d))
                        for (; o = i[c++];) - 1 != o.className.search(d) && s.push(o)
                } else n[f] && (s = n[f](e))
        } catch (l) {
            s = []
        }
        return s
    }

    function nt() {
        Re && Ft in t && (jt && Le(jt), jt = Se(function() {
            try {
                t[Ft]()
            } catch (e) {}
        }, ft))
    }

    function rt(t) {
        var e = Yt;
        return (e = ke(Ee.ready)) ? void ke(t) : void Se(function() {
            rt(t), t = Mt
        }, 50)
    }
    var it, ot, at, ct = "about:blank",
        st = "iframe",
        ft = 3e3,
        ut = "length",
        dt = "getAttribute",
        lt = "setAttribute",
        pt = "removeAttribute",
        ht = "replace",
        yt = ht + "Child",
        mt = "attach",
        vt = "search",
        gt = "parentWindow",
        bt = "defaultView",
        wt = "DOMContentLoaded",
        xt = "on",
        _t = "load",
        kt = xt + _t,
        At = "pageshow",
        St = "src",
        Lt = "name",
        Et = "prototype",
        Tt = "position",
        Ct = "display",
        Rt = "addEventListener",
        Ot = "removeEventListener",
        Nt = {
            preventDefault: 0,
            stopImmediatePropagation: 0,
            stopPropagation: 0,
            preventBubble: 0
        },
        Dt = 10,
        jt = 0,
        Mt = null,
        Yt = !1,
        Pt = !0,
        $t = "object",
        Ht = "document",
        Bt = Ht + "Element",
        It = "body",
        Ft = "CollectGarbage",
        zt = "toLowerCase",
        Ut = "contains",
        Wt = "compareDocumentPosition",
        Xt = "compatMode",
        Vt = "cssText",
        Gt = "currentStyle",
        Jt = "getComputedStyle",
        qt = "BackCompat",
        Kt = "clip",
        Zt = "scroll",
        Qt = "SCROLLING",
        te = "overflow",
        ee = "parentNode",
        ne = "offset",
        re = ne + "Parent",
        ie = ne + "Top",
        oe = ne + "Left",
        ae = ne + "Width",
        ce = ne + "Height",
        se = "clientWidth",
        fe = "clientHeight",
        ue = "innerWidth",
        de = "innerHeight",
        le = Zt + "Width",
        pe = Zt + "Height",
        he = Zt + "Top",
        ye = Zt + "Left",
        me = t.Math,
        ve = me.max,
        ge = t.DARLA,
        be = ge && ge.Lang,
        we = be && be.cstr,
        xe = be && be.cnum,
        _e = be && be.def,
        ke = be && be.callSafe,
        Ae = be && be.rbind,
        Se = be && be.sto,
        Le = be && be.cto,
        Ee = ge && ge.Dom,
        Te = Ee && Ee.UA,
        Ce = Mt,
        Re = ge && ge.isIE,
        Oe = Te && Te.opera,
        Ne = Te && Te.ie,
        De = Te && Te.webkit,
        je = Te && Te.gecko,
        Me = "postMessage",
        Ye = Re ? "srcElement" : "target",
        Pe = Re ? "target" : "currentTarget",
        $e = 0,
        He = 0,
        Be = 0,
        Ie = Mt,
        Fe = 0,
        ze = 300,
        Ue = 0,
        We = Mt,
        Xe = {};
    V[Et][ye] = V[Et][he] = V[Et][le] = V[Et][pe] = 0, V = new V, be && (Re || Ne ? (at = x(st), O(at, Qt, "no"), "no" != O(at, Qt) && (O = R), ot = z, it = I) : (ot = U, it = F), Ee = _e("Dom", {
        elt: L,
        id: E,
        doc: _,
        docNode: k,
        inDoc: Y,
        dm: A,
        img: $,
        txt: P,
        make: x,
        view: S,
        css: N,
        attr: O,
        vis: D,
        append: j,
        purge: Q,
        par: M,
        tags: et,
        tagName: tt,
        gc: nt,
        attach: H,
        detach: B,
        wait: rt,
        makeCss: C,
        contains: Z,
        currentStyle: it,
        ready: function() {
            return a(0)
        },
        loading: function() {
            return a(1)
        },
        complete: function() {
            return a(2)
        },
        evtCancel: function(t) {
            var e = "";
            if (t) {
                try {
                    t.returnValue = Yt
                } catch (n) {}
                try {
                    t.cancelBubble = Pt
                } catch (n) {}
                try {
                    t.stopped = Pt
                } catch (n) {}
                for (e in Nt)
                    if (Nt[e]) try {
                        t[e]()
                    } catch (n) {}
            }
            return Yt
        },
        evtTgt: function(t) {
            var e = Mt;
            try {
                e = t ? t[Ye] || t[Pe] : Mt
            } catch (n) {
                e = Mt
            }
            return e
        }
    }, ge, 1), _e("HTML5", {
        listen: function(t, e, n) {
            var r = l(e);
            r && (n ? B(r, "message", t) : H(r, "message", t)), r = e = t = Mt
        },
        post: function(t, e, n) {
            var r = l(e),
                i = Yt;
            try {
                n = n || "*", r && t && (r[Me](we(t), n), i = Pt)
            } catch (o) {
                i = Yt
            }
            return e = r = Mt, i
        },
        canPostMsg: function() {
            var e = Yt;
            try {
                e = !!t[Me]
            } catch (n) {
                e = Yt
            }
            return e
        }
    }, Ee, 1), _e("IFrames", {
        replace: h,
        write: y,
        make: w,
        clone: m,
        view: p
    }, Ee, 1), _e("Geom", {
        winSize: q,
        rect: J,
        docRect: K,
        docScroll: G,
        atPt: T
    }, Ee, 1), _e("$sf.lib.dom", Ee, Mt, Pt), function() {
        var e, n = "createEvent",
            o = "UIEvent",
            a = "";
        if (e = ke(t[Ht][n], t[Ht], Mt, o), e = e ? e : ke(t[Ht][n], t[Ht], Mt, o + "s"))
            for (a in Nt) e[a] && (Nt[a] = 1);
        e = Mt, ke(t[Ht][Rt], t[Ht], Mt, wt, r, Yt), ke(t[Ht][Rt], t[Ht], Mt, At, i, Yt), H(t, _t, i)
    }())
}(window),
function() {
    function t() {
        y.listen(e, f, s), b = u = c, h.detach(f, "unload", t), f = t = c
    }

    function e(t) {
        var e = t && t.data || "";
        h.evtCancel(t), "string" == typeof e && -1 != e.indexOf("guid=") && (e = p(e), r(e, t)), t = c
    }

    function n(t) {
        return y.post(t, u, "file" == w ? "*" : w)
    }

    function r(t, e) {
        var n = t && t.guid,
            r = t && t.msg;
        if (n && m && m == n && b && r) try {
            l.sto(function() {
                try {
                    b(r)
                } catch (i) {
                    i = c
                }
                t = e = r = n = c
            }, 1)
        } catch (i) {} else r = n = "", t = e = c
    }

    function i(t, e) {
        m && m == t && l.canCall(e) && (b = e)
    }

    function o(t, e) {
        var r;
        e && (t && m && m == t && (r = p({
            msg: e,
            id: v,
            guid: t
        }), n(r.toString())) || (r = c))
    }

    function a(n) {
        !g && n && n instanceof p && (v = n.id || "", w = n.host || "", m = n.guid || "", m && v && w && (y.listen(e, f), h.attach(f, "unload", t), g = n))
    }
    var c = null,
        s = !0,
        f = window,
        u = f.parent,
        d = f.DARLA,
        l = d && d.Lang,
        p = l && l.ParamHash,
        h = d && d.Dom,
        y = h && h.HTML5,
        m = "",
        v = "",
        g = c,
        b = c,
        w = "";
    l && y && h && l.def("XMsgClient", {
        init: a,
        attach: i,
        send: o
    }, h)
}(),
function(t) {
    function e(t, e, n, r, i) {
        var o = this;
        o.cmd = t, o.info = Kt(e) && e || {}, o.value = n || bt, o.reason = Bt(r), o[me] = Kt(i) && i || Qn, o.constructor = Object
    }

    function n(t) {
        var e = tr && tr[me];
        return tr && tr != Qn && t && tr[me] === t && t === e
    }

    function r(t) {
        return !!(Zt(t, me) && t[me] && n(t[me]))
    }

    function i(t, e) {
        var n, r, i = "1",
            o = "0";
        return e && we.test(e) && (e = e[pe](be.sf_ver, "1.0"), e = e[pe](be.sf_ck_on, t && t.ckOn || o), n = be.sf_flash_ver, n && n.test(e) && (e = e[pe](n, Rt.flashVersion())), n = be.sf_tp_ck_on, n && n.test(e) && (e = e[pe](n, Rt.cookiesOn())), n = be.sf_cur_iv,
            n && n.test(e) && (e = e[pe](n, it() || o)), n = be.sf_exp_ovr, n && n.test(e) && (e = e[pe](n, F(_e) ? i : o)), n = be.sf_exp_push, n && n.test(e) && (e = e[pe](n, F(xe) ? i : o)), n = be.sf_rd_ck, n && n.test(e) && (e = e[pe](n, F(Ne) ? i : o)), n = be.sf_wrt_ck, n && n.test(e) && (e = e[pe](n, F(De) ? i : o)), n = be.sf_bg, n && n.test(e) && (e = e[pe](n, F(Se) ? i : o)), n = be.sf_lyr, n && n.test(e) && (e = e[pe](n, F(Te) ? i : o)), n = be.sf_video, n && n.test(e) && (e = e[pe](n, F(Ee) ? i : o)), r = Ke && Ke.self || {}, e = e[pe](be.sf_x, r.l || o), e = e[pe](be.sf_y, r.t || o), e = e[pe](be.sf_w, r.w || o), e = e[pe](be.sf_h, r.h || o), r = Ke && Ke.par || {}, e = e[pe](be.sf_par_x, r.l || o), e = e[pe](be.sf_par_y, r.t || o), e = e[pe](be.sf_par_w, r.w || o), e = e[pe](be.sf_par_h, r.h || o), e = e[pe](be.sf_par_root, r && Ke.win && Ke.win.w === r.w ? i : o), e = e[pe](be.sf_host, Bt(Fe))), e
    }

    function o(t, e, n) {
        var r, i = {};
        return r = Wt(n || zn, $t, i, t, e), r = i.err ? Qn : r
    }

    function a(t, e) {
        Nt.sto(function() {
            zn && Wt(zn, $t, bt, t, e)
        }, 1)
    }

    function c() {
        var t, n = {},
            r = {};
        tr && tr !== Qn && (t = new e("register-update", bt, "", "", n), r[me] = n, tr = r, a("register-update", t))
    }

    function s(t) {
        var e, n, r, i, o = wt;
        for (e in t) {
            if (n = t[e], i = Wt(Ot, bt, bt, n)) {
                try {
                    if (r = typeof n, r == kt || r == _t) continue
                } catch (a) {
                    o = xt;
                    break
                }
                o = xt;
                break
            }
            t[e] = It(t[e], 0, 0)
        }
        return o
    }

    function f(t, e, n, r) {
        var i = e ? 0 : xt,
            o = {
                t: i,
                l: i,
                r: i,
                b: i,
                w: i,
                h: i
            };
        return n && (o.iv = o.xiv = o.yiv = 0), Nt.mix(o, t, wt, wt, xt, wt, !r)
    }

    function u(t) {
        var e, n, r, i, o, a, c, u, d, l = wt;
        return 1 == arguments.length && t && (e = t.self || t, r = t.ref || t.par || r, i = t.exp || i, o = t.win || o, a = t.doc || bt), e && (e = f(e, xt, wt)), r && (n = f(r)), i && (u = f(i, xt, wt), i.iv && (e.iv = It(i.iv, 0, 0)), i.xiv && (e.xiv = It(i.xiv, 0, 0)), i.yiv && (e.yiv = It(i.yiv, 0, 0))), o && (d = f(o)), a && (c = f(a, wt, xt, wt)), l = e && n && u && d && s(e) && s(n) && s(u) && s(d), l && t && (t.self && (t.self = e), t.par && (t.par = n), t.exp && (t.exp = u), t.win && (t.win = d), t.doc && (c && c.w > 0 && c.h > 0 ? t.doc = c : t.doc = d), "root" in t && (t.root = Ft(t.root)), "fixed" in t && (t.fixed = Ft(t.fixed))), l
    }

    function d() {
        var t = te(),
            e = de(t);
        return It(e.w, Ue, 0)
    }

    function l() {
        var t = te(),
            e = de(t);
        return It(e.h, We, 0)
    }

    function p() {
        var t = ["cmd=request-update&pos=", Ge, "&guid=", Xe],
            e = Gt(),
            n = fn,
            r = n > ln && e >= n ? e - n : 0;
        Jt(sn), sn = 0, fn && un > r || In ? sn = qt(p, dn) : (fn = e, H(Bt(t), "request-update", wt))
    }

    function h(t) {
        return ie(t), xt
    }

    function y(e) {
        var n, r = Ht("fcan");
        try {
            e = e || t.event, n = oe(e)
        } catch (i) {
            e = n = bt
        }
        return n && r && (n == r || ee(r, n)) ? wt : (ie(e), xt)
    }

    function m(t) {
        return t !== bt && (t === wt || 1 === It(t) || typeof t === kt && 1 === It(t.on)) ? wt : xt
    }

    function v(e) {
        var n, r = ["cmd=fclose&pos=", Ge, "&guid=", Xe],
            i = ["cmd=fdb&pos=", Ge, "&guid=", Xe];
        try {
            e = e || t.event, n = oe(e)
        } catch (o) {
            e = n = bt
        }
        e && n && n != Ht("fcan_a") && n != Ht("fcan_lbl") && (ie(e), n == Ht("fdbtn_2") ? H(Bt(i), "fdb", xt, wt) : H(Bt(r), "fclose", xt, wt))
    }

    function g(t, e) {
        var n, r;
        try {
            n = oe(t), n && (r = n.style, "ovr" == e ? r.backgroundColor = "#E2E2E2" : r.backgroundColor = "#FFFFFF")
        } catch (i) {}
    }

    function b(t) {
        return g(t, "ovr")
    }

    function w(t) {
        return g(t, "out")
    }

    function x() {
        var t, e, n, r, i = xt;
        if (ir) try {
            t = Ht(ye), e = t && de(t), n = e && ue(e.r - 20, e.t + 10), r = n && de(n), t && n && r && r.w > 0 && r.h <= 50 && !ee(t, n) && (i = wt, se(n))
        } catch (o) {
            i = xt
        }
        return i
    }

    function _(t) {
        var e, n = Bt(t && t.type).toLowerCase(),
            r = Ht("fcan"),
            i = Ht(ye),
            o = xt;
        return e = t && ue(t.clientX, t.clientY), e = e ? e : t && oe(t), o = e && r && (e == r || ee(r, e)) && e != i, o && (or && n == St || n == Et ? o = xt : (!or && n == Lt || n == Tt) && (o = xt)), o
    }

    function k(t) {
        var e, n, r = Ht("fcan");
        return _(t, r) ? (or || C(t), ie(t), wt) : (r = Ht("fcan"), n = Ht("fc_lblfclose"), e = Ht("fdb"), r && (r.style.display = "none"), n && (n.style.display = "none"), void(e && (e.style.display = "inline-block")))
    }

    function A(t) {
        var e = Ht("fcan"),
            n = Ht("fc_lblfclose"),
            r = Ht("fdb");
        e && (e.style.display = "block"), n && (n.style.display = "block"), r && (r.style.display = "none")
    }

    function S(t, e, n) {
        e && n && (ie(t), or ? (or = xt, e.style.width = "14px", e.style.paddingLeft = "3px", n.style.left = "17px") : (or = wt, e.style.width = "auto", e.style.paddingLeft = "32px", n.style.left = "-22px"))
    }

    function L(t) {
        _(t) && (ir && (x(), ie(t)), re(Ct, Et, L, wt))
    }

    function E(t) {
        _(t) && !or && S(t, Ht("fcan"), Ht("fcan_lbl"))
    }

    function T(t) {
        _(t) && or && S(t, Ht("fcan"), Ht("fcan_lbl"))
    }

    function C(t) {
        or || S(t, Ht("fcan"), Ht("fcan_lbl"))
    }

    function R(t) {
        or && S(t, Ht("fcan"), Ht("fcan_lbl"))
    }

    function O() {
        var t;
        2 === er || 1 === er && hn || (3 !== er || qe) && (t = Ht(ye), t && se(t))
    }

    function N() {
        var t, e, n, r, i, o, a, c = Bt(["position:relative;padding:5px 26px 5px 10px;text-align:center;display:block;width:auto;height:auto;"]),
            s = Bt(["position:fixed;top:1px;right:0px;font-size:12px;", "font-family:Helevetica Neue,Arial,sans-serif;color:#000;height:24px;display:block;", "border-color:#e2e2e2; border-style: solid; border-width: 0 0 1px 1px; border-bottom-left-radius:6px;", "background-color:#e2e2e2;display:block;width:auto;min-width:", nr ? "88px" : "66px", ";", "white-space:nowrap;cursor:pointer;z-index:214748366;-webkit-user-select:none;"]),
            f = Bt(["background-image:url('https://s.yimg.com/lq/lib/can_interstitial/icons/adchoice_1.4.gif');", "position:absolute;top:0;right:0;font-size:11px;font-family:Arial,sans-serif;", "color:#21005F;background-color:#FFF;width:14px;height:23px;display:block;white-space:nowrap;", "background-position:100% 4px;background-repeat:no-repeat;z-index:300;cursor:pointer;", "border-bottom-left-radius:6px;margin:0px;padding-left:3px;padding-right:2px;padding-top:1px;padding-bottom:0px;display:inline;"]),
            u = Bt(["display:none;right:4px;position:relative;border-left:1px solid #E2E2E2;border-bottom:1px solid #E2E2E2; box-shadow: -3px 3px 4px #888;border-bottom-left-radius:6px;"]),
            d = Bt(["background-color:#FFF;right:0;top:0;width:100%;display:inline-block;text-align:center;padding:5px 2px;height:12px"]),
            l = Bt(["position:relative;left:1px;color:#21005F;padding: 3px 0 11px;"]),
            p = Bt(["position:relative;left:17px;top:3px;"]),
            m = Bt(['<span id="fc_lblfclose" style="', c, '">', xn, nr ? "" : '<span class="fc_lblfclose_x" style="position:absolute;top:right:0;top:2px;font-size:20px;width:20px;line-height:20px;line-height:20px; border-left: 1px solid black; margin-left: 5px;">&times;</span>', "</span>", '<span id="fdb" style="', u, '">', '<span value="1" id="fdbtn_1" style="', d, '">', wn, "</span>", "<br/>", '<span value="2" id="fdbtn_2" class="each" style="', d, '">', bn, "</span>", "</span>"]),
            g = !!Ht(ye),
            x = ae("div"),
            _ = xt,
            S = 0,
            L = "";
        if (nr && (m += Bt(['<span id="fcan" style="', f, '">', '<a href="', vn, '" target="_blank" id="fcan_a" style="', l, '">', '<span id="fcan_lbl" style="', p, '">', mn, "</span>", "</a>", "</span>"])), x && !g) try {
            if (o = Ct && Ct.body, x.id = ye, x.style.cssText = s, x.innerHTML = Bt(m), o && (x = ce(o, x))) {
                for (ne(x, "click", v), ne(x, "selectstart", h), a = Ht("fdb"), n = Ht("fcan"), t = fe("*", x); e = t[S++];) L = Vt("sffcid_" + S), zt(e, "sffcid", L, xt, xt, xt);
                n && (yn ? (ne(n, Et, C, wt), ne(n, Tt, R, wt)) : (ne(n, St, C, wt), ne(n, Lt, R, wt))), rr && (ne(x, St, k), ne(x, Lt, A)), rr && a && (ne(a, St, b, wt), ne(a, Lt, w, wt)), n = Ht("fcan_a"), n && ne(n, "click", y), r = fe("table", bt, "ad_slug_table"), r = r && r[0] || bt, i = r ? fe("tr", r) : bt, i = i && i[0] || bt, i && (i.style.display = "none"), _ = wt
            }
        } catch (E) {
            O(), _ = xt
        }
        return _
    }

    function D() {
        var t = xt;
        return 0 > ir ? 1 === er ? hn && (t = wt) : 3 == er ? qe || (t = wt) : 2 == er && (t = wt) : 1 === ir && (t = wt), t
    }

    function j() {
        var t, n = "ui-fclose-on",
            r = ["cmd=", n, "&pos=", Ge, "&guid=", Xe],
            i = xt;
        D() ? (i = N(), ir = i ? 1 : 0) : ir = 0, i && (H(Bt(r), n, wt, wt), t = new e(n, {}, 1, ""), a(n, t))
    }

    function M(n, r, i) {
        var o, c = "",
            s = xt,
            f = xt;
        try {
            "vis-change" == r ? (s = wt, f = wt, 0 === i ? qn = 1 : 1 === i && (qn = 0)) : "resize" == r ? s = wt : "js-err" == r ? (o = new e(r, i), a(r, o)) : (n = n || t.event, c = Bt(n && n.type) || "", c = c.toLowerCase(), c = c.replace(/^on/, ""))
        } catch (u) {
            c = "", s = xt
        }
        "load" === c ? Qe === xt && (Qe = wt, er > 0 && qt(j, 10)) : s && Qe && (sn && (Jt(sn), sn = 0), sn = qt(p, dn), -1 == sn && (sn = 0))
    }

    function P(t) {
        var n, r, i, a, s, f, p = xt;
        return x(), t = Dt(t), n = t.geom, cmd = t.cmd, r = t.info, a = "hf" in t ? t.hf : bt, a != bt && (Ze = Ft(a)), n && (n = Dt(jt(n), bt, bt, xt, wt), u(n) ? Ke = n : n = bt), r = r && Dt(jt(r), bt, bt, xt, wt) || {}, s = "value" in t ? t.value : "value" in r ? r.value : "", cmd && (i = new e(cmd, r, s, Bt(t.reason)), cmd == En ? (p = wt, Hn && (In = bt, Hn = xt, Fn = wt, Z(), Fn = xt, o(En, i))) : cmd == Me ? (p = wt, In && In.cmd == Me && (Gn && (Gn = xt), on && an && (f = It(r.r, 0, 0, 100), f > 0 && r.rs && (on = f, an = r.rs, rn && rn.h && (rn.h.ratio = f, rn.h.ratioString = an))), Jn = wt, In = bt, Ue = d(), We = l(), o(Me, i), c())) : cmd == ke ? (p = wt, In && In.cmd == ke && (In = bt, Gn = wt, Hn && (Hn = xt), o(ke, i), c())) : cmd == Ae ? (p = wt, In && In.cmd == Ae && (Gn = xt, In = bt, $(0, 0), o(Ae, i), c())) : cmd == Ln ? (p = wt, Hn && (In = bt, Hn = xt, o(En, i), c())) : cmd == _e || cmd == xe ? (p = wt, In && (In = bt, Hn = wt, o(Sn + "ed", i), c())) : cmd == Tn ? (p = wt, In && (Bn = i, In = bt, o(Tn, i), c())) : cmd == Cn ? (p = wt, In && (Bn = In = bt, o("clear-bg", i), c())) : cmd == Rn ? (p = wt, In && (In = bt, o(Rn, i), c())) : cmd == On ? (p = wt, In && In.cmd === Ce && (In = bt), o(On, i)) : cmd == Re ? (p = wt, o(Re, i)) : cmd == Le ? (p = wt, o(Le, i)) : cmd == An || "focus-update" == cmd ? o(An, i) : cmd == De ? (In && (In = bt), o(De, i), c()) : cmd == Ne ? (In && (In = bt), o(Ne, i), c()) : cmd == je ? Kn && yt(s, r) : "meta-update" == cmd ? t.meta && (pn = Dt(jt(t.meta), bt, bt, xt, wt), o("meta-update", i)) : cmd == Nn && (p = wt, In && (In = bt, i.cmd = t.cmd_failed || i.cmd || "", o(Nn, i)))), t = bt, p
    }

    function $(t, e, n) {
        var r, i, o, a = Ht("fc_align"),
            c = Ct && Ct.body,
            s = c && c.style,
            f = Ct && Ct.documentElement,
            u = f && f.style,
            d = "position:absolute;";
        a && (r = a.style, i = t ? "right:0px;" : "left:0px;", o = e ? "bottom:0px;" : "top:0px;", r.cssText = d + i + o, n && (r.width = r.height = "100%")), s.width = s.height = u.width = u.height = "100%", a = r = f = c = u = s = bt
    }

    function H(t, n, r, i) {
        var c, s = Vt("pnd_cmd"),
            f = Gt();
        return In && !i ? (c = new e(In.cmd || n || "unknown", bt, "", "awaiting completion of previous action"), void a(Nn, c)) : (r !== wt && (In = {
            id: s,
            sent: f,
            cmd: n,
            f: bt
        }, In.f = function() {
            var r;
            In && In.id == s && (r = In.cmd, r == ke ? Gn = xt : r == (_e || xe) && (Fn = wt, Z(), Fn = xt), In = bt, c = new e(r | n || "unknown", bt, "", "timeout"), o(Nn, c)), s = f = n = t = c = bt
        }, Nt.sto(In.f, Yn)), Yt && Yt.send(Xe, t))
    }

    function B(t, n, r) {
        var i, a, c;
        return x(), qe || !Xe ? 0 : (t = It(t, 0, 0), n = It(n, 0, 0), Ue = t, We = n, qe = wt, Xt(r) ? (Qe || tr !== bt ? tr = Qn : (a = {}, c = {}, c[me] = a, i = new e("register", bt, "", "", a), o("register", i, r), c[me] !== a ? (tr = Qn, i = new e("register-update", bt, "", "registration revoked"), o("register-update", i)) : tr = c), zn = r) : (tr = Qn, zn = bt), 1)
    }

    function I(t) {
        var e, n, i, o, a = t && typeof t || "",
            c = xt,
            s = Gt(),
            f = kn,
            u = xt;
        if ("string" == a) Un || 0 != t.indexOf("fdb") ? Wn || qe || 0 != t.indexOf("noad") || (Wn = wt, c = wt) : (Un = wt, c = wt);
        else if (a == kt) {
            if (Un || "fdb" != t.cmd ? Wn && qe && "noad" == t.cmd && (Wn = wt, c = wt) : (Un = wt, c = wt), t.data && 1 == t.data.nodeType) {
                try {
                    e = t.data, "script" == Mt.tagName(e) && (n = Mt.txt(e), i = Qt(n))
                } catch (d) {
                    i = bt
                }
                i ? t.data = i : delete t.data
            }
            o = t, t = Bt(Dt(t))
        } else t = Bt(t);
        return t && (!c && Vn > Xn && (f = s - Vn), c || (Vn = s), c = !c && o && r(o) ? wt : c, (qe && F(Le) && f >= kn || c) && (H(Bt(["cmd=", Le, "&guid=", Xe, "&a=msg&pos=", Ge, "&msg=", escape(t), "&uem=1"]), Le, wt), u = wt)), u
    }

    function F(t) {
        var e = Bt(t),
            n = ze || Ye,
            r = bt;
        return e ? (t in n ? r = n[t] : je == t ? r = wt : "*" in n && (r = n["*"]), Ft(r)) : Nt.mix({}, n, wt, wt, wt)
    }

    function z(t, n, i) {
        var o, s, f, u, p, h, y, m, v, g, b, w = xt,
            x = xt,
            _ = xt,
            k = -1,
            A = i ? xe : _e,
            S = ["cmd=", A, "&pos=", Ge, "&guid=", Xe],
            L = 0,
            E = 0;
        if (qe || (v = "no valid registration"), v || Ge && Xe || (v = "internal error"), !v && In && (v = "pending command in progress"), !v && Hn && (v = "already expanded"), !v && Gn && (v = "already hidden"), v || !en && !nn || (v = "flexible safeframe expansion not supported"), v || !i || F(xe) || (v = "push expansion not supported"), O(), Kt(t)) {
            if (m = r(t), o = It(t.r, 0, 0), s = It(t.b, 0, 0), f = It(t.t, 0, 0), u = It(t.l, 0, 0), t.push && (v || F(xe) || (v = "push expansion not supported"), A = xe, S[1] = A, k = m ? It(t.animTime, -1, ge, ve) : -1), !v && !m && A == xe && k > 0 && (v = "push expansion with animation requires valid registration key"), v) return g = new e(A, bt, "", v), a(Nn, g), void(b && c());
            !o && u && (w = wt, L = -1 * u), o && !u && (L = o), !s && f && (x = wt, E = -1 * f), s && !f && (E = s), _ = f && s || u && o ? xt : wt, d(), l(), _ ? ($(w, x), S.push("&dx=", L, "&dy=", E)) : (p = Ht("fc_align"), fc_align && (h = p && p.style, y = ["position:absolute;"], f && s ? y.push("top:0px;") : f ? y.push("bottom:0px;") : s && y.push("top:0px;"), u && o ? y.push("left:0px;") : u ? y.push("right:0px;") : s && y.push("left:0px;"), h && (h.cssText = Bt(y)), S.push("&exp_obj=", escape(Dt(t)))))
        } else {
            if (v) return g = new e(A, bt, "", v), a(Nn, g), void(b && c());
            if (t = It(t, 0), n = It(n, 0), 0 == t && 0 == n) return;
            w = 0 > t, x = 0 > n, $(w, x), S.push("&dx=", t, "&dy=", n)
        }
        return H(Bt(S), A), wt
    }

    function U(t) {
        var n, i, o, s, f, u, p, h, y = "",
            m = 0;
        qe || (y = "no valid registration"), Ge && Xe || (y = "internal error"), !y && In && (y = "pending command in progress"), !y && Hn && (y = "currently in expanded state"), y || F(Me) || (y = "not supported"), y || Kt(t) || (y = "invalid parameter object"), y || !en && !nn || on > 0 && (h = Bt(t && t.ratio), m = h.split(/x/i), 2 === m.length ? (m[0] = It(m[0], 0, 0, 9999), m[1] = It(m[1], 0, 0, 9999), m[0] > 0 && m[1] > 0 && m[0] > m[1] ? m = (m[1] / m[0] * 100).toFixed(2) : (h = "", m = 0, y = "flexible safeframes can only be resized by ratio")) : (h = "", m = 0, y = "flexible safeframes can only be resized by ratio")), O(), y || r(t) || (y = jn, p = wt), y || ("w" in t || (t.w = d()), "h" in t || (t.h = l()), s = It(t.h, -1, 0), m > 0 && s <= l() ? (o = d(), s = It(o * (100 / m), -1, 0)) : o = It(t.w, -1, 0), -1 == o && -1 == s && (y = "invalid width/height values")), !y && (1 >= o || 1 >= s) && (y = "setting size to less than 1px is hiding, call $sf.ext.hide instead"), !y && Gn && (15 > o || 15 > s) && (y = "setting size must be greater than 15 if safeframe has been hidden"), y || (o == Ue && s == We || (u = wt), u || (y = "invalid width/height values (2)")), y ? (n = new e(Me, bt, "", y), a(Nn, n), p && c()) : (f = It(t.animTime, -1, ge, ve), i = ["cmd=", Me, "&pos=", Ge, "&guid=", Xe, "&w=", o, "&h=", s, "&at=", f, "&r=", m, "&rs=", h], $(0, 0, wt), H(Bt(i), Me))
    }

    function W(t) {
        var n, i, o, s = "";
        qe || (s = "no valid registration"), Ge && Xe || (s = "internal error"), s || F(ke) || (s = "not supported"), s || Kt(t) || (s = "invalid parameter object"), !s && Gn && (s = "already hidden"), s || r(t) || (s = jn, o = wt), O(), s ? (n = new e(ke, bt, "", s), a(Nn, n), o && c()) : (i = ["cmd=", ke, "&pos=", Ge, "&guid=", Xe], In && (In.id && Nt.cto(In.id), Xt(In.f), In = bt), Fn = wt, Z(), Fn = xt, H(Bt(i), ke))
    }

    function X(t) {
        var n, i, o, s, f, u = "";
        qe || (u = "no valid registration"), Ge && Xe || (u = "internal error"), u || F(ke) || (u = "not supported"), u || Kt(t) || (u = "invalid parameter object"), !u && In && (u = "pending command in progress"), u || Gn || (u = "safe frame has not been hidden"), u || r(t) || (u = jn, o = wt), O(), s = d(), f = l(), !u && s > 20 && f > 20 && (u = "not closed"), u ? (n = new e(Ae, bt, "", u), a(Nn, n), o && c()) : (i = ["cmd=", Ae, "&pos=", Ge, "&guid=", Xe], $(0, 0, wt), H(Bt(i), Ae))
    }

    function V(t) {
        var n, i, o, c, s = ["w", "h", "html"],
            f = ["r", "l", "t", "b", "center", "fixed"],
            u = [];
        if (F(Te)) {
            r(t) || (c = new e(Te, bt, "", Mn), a(Dn, c)), O();
            for (i in s) {
                if (n = s[i], !(n in t)) return xt;
                o = t[n], o = "html" == n ? escape(o) : o, u.push("&", n, "=", Bt(o))
            }
            i = "";
            for (i in f) n = f[i], n in t && u.push("&", n, "=", Bt(t[n]));
            u = Bt(u), H(Bt(["cmd=", Te, "&guid=", Xe, "&a=msg&pos=", Ge, u]), Te)
        }
    }

    function G() {
        H(Bt(["cmd=", Ce, "&guid=", Xe, "&a=msg&pos=", Ge, "&options=none"]), Ce)
    }

    function J(t) {
        F(Te) && H(Bt(["cmd=", Re, "&guid=", Xe, "&a=msg&pos=", Ge, "&msg=", Bt(t)]), Re, wt)
    }

    function q(t) {
        var n, i;
        return F(Se) ? (O(), r(t) || (i = new e(Se, bt, "", Mn), a(Dn, i)), n = K(t, ""), Bn || n && "1" != n.clear ? (n.cmd = Se, n.guid = Xe, n.pos = Ge, H(Bt(n), Se), wt) : (i = new e(Se, bt, "", "invalid descriptor object"), a(Nn, i), xt)) : (i = new e(Se, bt, "", "not supported"), a(Nn, i), xt)
    }

    function K(t, e) {
        var n, r = "&clear=1",
            i = 0;
        if (Kt(t)) {
            r = [];
            for (n in t) {
                if (name = n, "color" == name && (r[i] = "&" + e + "color=" + t[n]), "imgsrc" == name && (r[i] = "&" + e + "imgsrc=" + t[n]), "posX" == name) {
                    if (Ot(t[n])) return;
                    r[i] = "&" + e + "posX=" + t[n]
                }
                if ("posY" == name) {
                    if (Ot(t[n])) return;
                    r[i] = "&" + e + "posY=" + t[n]
                }
                if ("repeatX" == name && (r[i] = "&" + e + "repeatX=" + t[n]), "repeatY" == name && (r[i] = "&" + e + "repeatY=" + t[n]), "fixed" == name && (r[i] = "&" + e + "fixed=" + t[n]), "left_pane" == name && null != t[n] && (r[i] = K(t[n], "left_"), i++), "right_pane" == name && null != t[n] && (r[i] = K(t[n], "right_"), i++), "href" == name && (r[i] = "&" + e + "href=" + t[n]), "t" == name) {
                    if (Ot(t[n])) return;
                    r[i] = "&" + e + "t=" + t[n]
                }
                if ("l" == name) {
                    if (Ot(t[n])) return;
                    r[i] = "&" + e + "l=" + t[n]
                }
                if ("b" == name) {
                    if (Ot(t[n])) return;
                    r[i] = "&" + e + "b=" + t[n]
                }
                if ("r" == name) {
                    if (Ot(t[n])) return;
                    r[i] = "&" + e + "r=" + t[n]
                }
                "tgt" == name && (r[i] = "&" + e + "tgt=" + t[n]), i += 1
            }
            r = Bt(r)
        }
        return Dt(r, bt, bt, wt, wt)
    }

    function Z() {
        var t, n;
        return Fn || (qe || (t = "invalid registration"), !t && In && (t = "pending command in progress"), !t && Gn && (t = "safeframe is hidden"), t || Hn || (t = "not expanded")), !Fn && t ? (n = new e(Oe, bt, "", t), a(Nn, n), xt) : ($(0, 0, Jn), wt)
    }

    function Q() {
        O(), Z() && H(Bt(["cmd=", Oe, "&pos=", Ge, "&guid=", Xe]), Oe)
    }

    function tt(t) {
        if (t === wt) t = "true";
        else if (t === xt) t = "false";
        else if (t = It(t, 0, 500, 999999), 500 > t) return xt;
        return H(Bt(["cmd=", Ee, "&guid=", Xe, "&pos=", Ge, "&duration=", t]), Ee, wt), wt
    }

    function et(t, n) {
        var i, o, s, f, u, d, l, p, h = xt;
        if (Kt(n)) try {
            f = Bt(t), i = Zt(n, "value") ? xt : wt, h = r(n)
        } catch (y) {
            i = wt, h = xt
        }
        if (o = i ? Ne : De, h) {
            if (!F(o)) return p = new e(o, bt, "", "not supported"), a(Nn, p), xt;
            if (!f) return p = new e(o, bt, "", "no valid cookie name"), a(Nn, p), xt
        }
        return h ? (s = ["cmd=", o, "&pos=", Ge, "&guid=", Xe], !i && n && (u = Bt(n.value), s.push("&value=", u), d = Bt(n.expires), d && s.push("&exp=", d), l = Bt(n.domain), l && s.push("&dmn=", l)), s.push("&cookie=", f), H(Bt(s), o, wt), wt) : (F(De) && (ze[De] = xt), F(Ne) && (ze[Ne] = xt), p = new e(o, bt, "", jn), a(Nn, p), c(), xt)
    }

    function nt(t, e) {
        var n, r, i = "";
        return pn ? (n = pn.ownerKey || "", "host" === t ? ft() : "from" === t ? st() : e && e !== n ? i : t && e && prop_name === e ? i : t && n && t === n ? i : "ownerKey" === t ? i : "y" === e ? i : (e ? n === e && (r = pn[e]) : r = pn, i = r && t in r ? r[t] : i)) : i
    }

    function rt() {
        return Ke
    }

    function it() {
        var t = It(Ke && Ke.self && Ke.self.iv, -1, 0),
            e = 0;
        return t >= 0 && (e = Math.floor(100 * t)), (0 === qn || Gn) && (e = 0), e
    }

    function ot() {
        return !!Ze
    }

    function at() {
        var t = {
            focus: Ze ? 1 : 0,
            viewPct: it(),
            fclose: D() > 0 ? 1 : 0
        };
        return en && nn ? t.flex = "both" : en && !nn ? t.flex = "w" : nn && !en ? t.flex = "h" : t.flex = 0, on > 0 && an && (t.ratio = an), cn ? t.fs = 1 : t.fs = 0, t
    }

    function ct() {
        var t = "";
        return en && nn && on > 0 && an && (t = an), t
    }

    function st() {
        return tn
    }

    function ft() {
        return Bt(Ft(pn.hostURL) ? pn.hostURL : Nt.URL.ref())
    }

    function ut() {
        var t, e = "collapsed";
        return In ? (t = In.cmd || "", t == Me ? e = "resizing" : t == ke ? e = "hiding" : t == Ae ? e = "showing" : t == _e || t == xe ? e = "expanding" : t == Oe ? e = "collapsing" : Gn ? e = "hidden" : Hn && (e = "expanded")) : Gn ? e = "hidden" : Hn && (e = "expanded"), e
    }

    function dt() {
        throw new Error("api not supported by this site")
    }

    function lt() {
        var e, n, r, i, o = /(r\-(.*)\.html)|(sf(.*?)\.js)/gi,
            a = 0,
            c = 0,
            s = "getEntriesByType",
            f = [];
        try {
            e = t.performance, e && typeof e[s] === _t && (f = e[s]("resource"))
        } catch (u) {
            f = []
        }
        for (; n = f[c++];) {
            try {
                r = n.name, i = n.transferSize
            } catch (u) {
                r = "", i = 0
            }
            if (i && i > 0) {
                if (r && -1 !== r.search(o)) continue;
                a += i
            }
        }
        return e = f = n = bt, a
    }

    function pt() {
        var t = lt(),
            e = ["cmd=csz&pos=", Ge, "&guid=", Xe, "&sz="];
        t && (e.push(t), H(Bt(e), "size", wt, wt))
    }

    function ht(e) {
        var n, r, o, a, c, s, f, d, l, p = {};
        if (!Je) {
            Je = wt;
            try {
                e.geom && (r = Dt(jt(e.geom), bt, bt, xt, wt), u(r) && (Ke = r)), e.meta && (pn = Dt(jt(e.meta), bt, bt, xt, wt)), f = pn && pn.y, d = f && f.adc, d = Nt.json(d), l = f && f.fdb && Nt.json(f.fdb), d && (mn = d.label, vn = d.url, gn = d.close, bn = d.fdb, wn = d.collapse, xn = d.closeAd), mn = mn || "AdChoices", vn = vn || "https://info.yahoo.com/privacy/us/yahoo/relevantads.html", gn = gn || "Close", bn = bn || "I don't like this Ad", rr = e.conf && m(e.conf.fdb) && m(l), wn = wn || "Collapse", xn = xn || "Close Ad", hn = It(pn && pn.y && pn.y.is3rd || -1, -1), yn = !!(Mt.UA && Mt.UA.ie && Mt.UA.ie <= 8), yn || (ne(Ct, St, E, wt), ne(Ct, Lt, T, wt)), ne(Ct, Et, L, wt), $t = {
                    register: B,
                    expand: z,
                    collapse: Q,
                    geom: rt,
                    bg: q,
                    msg: I,
                    lyr: {
                        open: V,
                        close: G,
                        msg: J
                    },
                    supports: F,
                    inViewPercentage: it,
                    winHasFocus: ot,
                    fromURL: st,
                    hostURL: ft,
                    resizeTo: U,
                    aspectRatio: ct,
                    show: X,
                    hide: W,
                    meta: nt,
                    cookie: et,
                    status: ut,
                    ui: at,
                    video: tt
                }, $t = Ut("Y.SandBox.vendor", $t, p), $t = Ut("$sf.ext", $t, p), Xe = e.guid, _n = e.conf, Ve = Ft(_n.debug), Ge = e.pos, Pn = It(_n.w, 0), $n = It(_n.h, 0), Ze = Ft(e.hf), tn = Bt(e.fromURL), en = Ft(e.flexW), nn = Ft(e.flexH), cn = Ft(_n.allowFS), e.flexW = en, e.flexH = nn, (en || nn && e.flexInf) && (rn = e.flexInf, on = It(rn && rn.h && rn.h.ratio, 0, 0, 100), an = Bt(rn && on > 0 && rn.h && rn.h.ratioString)), r = "closeBtn" in _n ? _n.closeBtn : 0, r && (r = Dt(jt(r), bt, bt, xt, wt)), r && "mode" in r && (er = It(r.mode, -1)), r && "adc" in r && (nr = 0 != It(r.adc, 1)), r = "supports" in _n ? _n.supports : 0, r && "string" == typeof r && (r = Ft(r)), r === xt ? (_n.supports = xt, $t.expand = $t.collapse = $t.bg = $t.resizeTo = $t.show = $t.hide = $t.cookie = dt, $t.lyr.open = $t.lyr.close = $t.lyr.msg = dt, Ye[_e] = 0, ze = Ye) : ze = Dt(jt(_n.supports), bt, bt, wt, wt), (en || nn) && (ze[_e] = ze[xe] = xt), !t.__cmp && F(je) && (Kn = wt, yt = function(t, e) {
                    var n, r = e.cmp_cbid,
                        i = e.cmp_success;
                    n = JSON.parse(atob(t)), Zn[r](n, i)
                }, t.__cmp = function(t, e, n) {
                    var r = Math.random() + "",
                        i = {
                            __cmpCall: {
                                command: t,
                                parameter: e
                            }
                        };
                    Zn[r] = n, H(Bt(["cmd=", je, "&pos=", Ge, "&guid=", Xe, "&cbid=", r, "&cmparg=", btoa(JSON.stringify(i))]), je, wt, wt)
                })
            } catch (h) {}
            try {
                HTMLElement.prototype.focus = function() {}
            } catch (h) {}
            try {
                delete Y.SandBox.vendor.init
            } catch (h) {}
            try {
                delete $sf.ext.init
            } catch (h) {}
            try {
                s = t.Y, t.Y = bt
            } catch (h) {}
            try {
                c = t.$sf, t.$sf = bt
            } catch (h) {}
            zt(t, "$sf", c) || Ut("$sf", c), t.$sf || (t.$sf = c), zt($sf, "ext", $t) || Ut("$sf.ext", $t), zt(t, "Y", {}) || Ut("Y", {}), zt(Y, "SandBox", {}) || Ut("Y.SandBox", {}), t.Y && Y.SandBox || (t.Y = s);
            try {
                delete Y.SandBox.vendor, delete Y.SandBox
            } catch (h) {}
            zt(t, "Y", {}) || Ut("Y", {}), zt(Y, "SandBox", {}) || Ut("Y.SandBox", {}), zt(Y.SandBox, "vendor", $t) || Ut("Y.SandBox.vendor", $t);
            try {
                Fe = Nt.URL.ref(), n = Fe.toHostString()
            } catch (h) {
                Fe = n = ""
            }
            if (!n || !Xe || !Ge) return;
            try {
                Fe = Fe.toStripString()
            } catch (h) {
                Fe = n
            }
            return o = e.html, o && (o = a = jt(o), e.unescaped = wt, a = i(e, a), e.html = a), Yt && Yt.attach(Xe, P), ne(t, "load", pt), M
        }
    }
    if (!t || !t.top || t != t.top) {
        var yt, mt = {},
            vt = {},
            gt = {},
            bt = null,
            wt = !0,
            xt = !1,
            _t = "function",
            kt = "object",
            At = "mouse",
            St = At + "over",
            Lt = At + "out",
            Et = At + "enter",
            Tt = At + "leave",
            Ct = document,
            Rt = t.DARLA,
            Ot = isNaN,
            Nt = Rt && Rt.Lang,
            Dt = Nt && Nt.ParamHash,
            jt = Nt && Nt.ues,
            Mt = Rt && Rt.Dom,
            Yt = Mt && Mt.XMsgClient,
            Pt = (Mt && Mt.HTML5, Mt && Mt.Geom),
            $t = bt,
            Ht = Mt && Mt.elt,
            Bt = Nt && Nt.cstr,
            It = Nt && Nt.cnum,
            Ft = Nt && Nt.cbool,
            zt = Nt && Nt.prop,
            Ut = Nt && Nt.def,
            Wt = Nt && Nt.callSafe,
            Xt = Nt && Nt.canCall,
            Vt = Nt && Nt.guid,
            Gt = Nt && Nt.time,
            Jt = Nt && Nt.cto,
            qt = Nt && Nt.sto,
            Kt = Nt && Nt.isobj,
            Zt = Nt && Nt.own,
            Qt = Nt && Nt.json,
            te = Mt && Mt.docNode,
            ee = Mt && Mt.contains,
            ne = Mt && Mt.attach,
            re = Mt && Mt.detach,
            ie = Mt && Mt.evtCancel,
            oe = Mt && Mt.evtTgt,
            ae = Mt && Mt.make,
            ce = Mt && Mt.append,
            se = Mt && Mt.purge,
            fe = Mt && Mt.tags,
            ue = Pt && Pt.atPt,
            de = Pt && Pt.rect,
            le = RegExp,
            pe = "replace",
            he = "sf_",
            ye = Vt("fc_fclose"),
            me = "key",
            ve = 2500,
            ge = 100,
            be = [he + "ver", he + "ck_on", he + "flash_ver", he + "tp_ck_on", he + "exp_ovr", he + "exp_push", he + "rd_ck", he + "wrt_ck", he + "bg", he + "video", he + "lyr", he + "cur_iv", he + "x", he + "y", he + "w", he + "h", he + "par_x", he + "par_y", he + "par_w", he + "par_h", he + "par_root", he + "host"],
            we = function() {
                var t, e, n, r, i, o, a = "\\})",
                    c = be.join(a + "|"),
                    s = le("(" + he + ")", "g");
                for (c = c[pe](s, "(\\$\\{$1"), c += a, t = le(c, "g"), e = c.split("|"), r = 0, n = {}; i = be[r];) o = e[r++], o = le(o, "g"), n[i] = o;
                return be = n, t
            }(),
            xe = "exp-push",
            _e = "exp-ovr",
            ke = "hide",
            Ae = "show",
            Se = "bg",
            Le = "cmsg",
            Ee = "video",
            Te = "lyr",
            Ce = Te + "-close",
            Re = Te + "-msg",
            Oe = "COLLAPSE",
            Ne = "read-cookie",
            De = "write-cookie",
            je = "cmp",
            Me = "resize-to",
            Ye = function() {
                var t = {};
                return t[je] = t[Ee] = t[_e] = 1, t[xe] = t[Se] = t[Te] = t[Ne] = t[De] = t[Me] = 0, t
            }(),
            Pe = {
                t: 0,
                l: 0,
                r: 0,
                b: 0,
                w: 0,
                h: 0,
                iv: 0,
                xiv: 0,
                yiv: 0
            },
            $e = {
                t: 0,
                l: 0,
                r: 0,
                b: 0,
                w: 0,
                h: 0
            },
            He = {
                t: 0,
                l: 0,
                r: 0,
                b: 0,
                w: 0,
                h: 0
            },
            Be = {
                t: 0,
                l: 0,
                r: 0,
                b: 0,
                w: 0,
                h: 0
            },
            Ie = {
                self: Pe,
                par: $e,
                win: He,
                exp: Be
            },
            Fe = "",
            ze = bt,
            Ue = 0,
            We = 0,
            Xe = bt,
            Ve = 0,
            Ge = "",
            Je = xt,
            qe = xt,
            Ke = Ie,
            Ze = xt,
            Qe = xt,
            tn = "",
            en = xt,
            nn = xt,
            rn = bt,
            on = 0,
            an = "",
            cn = xt,
            sn = 0,
            fn = 0,
            un = 1200,
            dn = 500,
            ln = 0,
            pn = bt,
            hn = -1,
            yn = bt,
            mn = "AdChoices",
            vn = "https://info.yahoo.com/privacy/us/yahoo/relevantads.html",
            gn = "Close",
            bn = "I don't like this Ad",
            wn = "Collapse",
            xn = "Close Ad",
            _n = bt,
            kn = 200,
            An = "geom-update",
            Sn = "expand",
            Ln = "collapse",
            En = Ln + "d",
            Tn = Se,
            Cn = "clear-bg",
            Rn = Te,
            On = Ce,
            Nn = "failed",
            Dn = "warning",
            jn = "no valid reg key provided",
            Mn = jn + ", this will result in an error/failure in the future",
            Yn = 1e4,
            Pn = 0,
            $n = 0,
            Hn = xt,
            Bn = bt,
            In = bt,
            Fn = xt,
            zn = bt,
            Un = xt,
            Wn = xt,
            Xn = Gt && Gt(),
            Vn = 0,
            Gn = xt,
            Jn = xt,
            qn = bt,
            Kn = xt,
            Zn = {},
            Qn = {},
            tr = bt,
            er = -1,
            nr = wt,
            rr = xt,
            ir = -1,
            or = xt;
        e.prototype = Dt && new Dt || {};
        try {
            t.Y && Y === mt || (t.Y = mt), Y.SandBox && Y.SandBox === vt || (Y.SandBox = vt), Y.SandBox.vendor && Y.SandBox.vendor === gt || (Y.SandBox.vendor = gt), Y.SandBox.vendor.init = ht
        } catch (ar) {}
    }
}(window),
function(t) {
    function e(e) {
        var n, r = window,
            i = 1;
        try {
            e = e || r.event || {}
        } catch (o) {
            e = {
                type: pt
            }
        }
        for (; n = Ke.shift();) se(n, r, ot, e);
        nt && se(nt, r, ot, e), Ze[lt] = qe[lt] = 0, nt = et = rt = it = ot;
        try {
            K && (r[Oe] = K, r[Ne] = Q)
        } catch (o) {}
        je || ke(r, st, w), ke(r, Vt, F), ke(r, Gt, W), ke(Qt, q, z), ke(r, ht, y), ke(r, pt, h);
        try {
            r.Unloader = ot
        } catch (o) {}
        try {
            r[bt] = ot
        } catch (o) {}
        try {
            Ue && (ye(Ue), Ue = 0)
        } catch (o) {}
        try {
            We && (ye(We), We = 0)
        } catch (o) {}
        try {
            Ve && (ye(Ve), Ve = 0)
        } catch (o) {}
        try {
            Ge && (ye(Ge), Ge = 0)
        } catch (o) {}
        return r = t = e = K = Z = Q = tt = Qt = te = ce = ae = G = J = n = ot, i
    }

    function n() {
        if (ee) try {
            Ve && (ye(Ve), Ve = 0), t[mt] && t[mt] != it && (it = t[mt], t[mt] = ot), t[yt] && t[yt] != nt && (nt = t[yt], t[yt] = ot), t[gt] && t[gt] != rt && (rt = t[gt], t[gt] = ot), t[bt] = R, Ve = he(n, Mt)
        } catch (e) {}
    }

    function r() {
        if (ee) {
            try {
                We && -1 != We && (ye(We), We = 0)
            } catch (n) {}
            try {
                if (t == top && -1 != We) return We = -1, ie.gc(), y({}), void e()
            } catch (n) {
                We = -1
            }
            try {
                We || (We = he(r, Yt))
            } catch (n) {}
        }
    }

    function i() {
        var e, n, r, i, o = [];
        if (Ye) {
            try {
                o = t && t.performance && t.performance.getEntriesByType("resource")
            } catch (a) {
                o = ot
            }
            for (n = o && o[lt] || 0, i = 0; n > i; i++)
                if (e = o[i], r = e && e.name, r && r.substr && "http:" === r.substr(0, 5)) return at
        }
        return ct
    }

    function o() {
        var t, e, n, r, i = "querySelectorAll";
        try {
            t = Qt[i]("object[classid]") || [], e = Qt[i]('object[data*=".swf"]') || [], n = Qt[i]('*[type="application/x-shockwave-flash"]') || [], r = Qt[i]('*[src*=".swf"]') || []
        } catch (o) {
            t = e = n = r = []
        }
        return 0 !== t[lt] || 0 !== e[lt] || 0 !== n[lt] || 0 !== r[lt]
    }

    function a(t) {
        var e, n, r = [];
        if (/^\d+(\.\d+)*$/.exec(t))
            for (r = t.split("."), n = r[lt], e = 0; n > e; e++) r[e] = +r[e];
        return r
    }

    function c(t, e) {
        var n, r = a(t),
            i = a(e),
            o = r[lt],
            c = i[lt];
        for (n = 0; o > n && c > n; n++) {
            if (r[n] > i[n]) return 1;
            if (r[n] < i[n]) return $t
        }
        return c > o ? $t : o > c ? 1 : 0
    }

    function s(t, e, n) {
        var r, i, o = ve && ve(t) || [],
            a = o[lt],
            s = e.indexOf("e") > $t,
            f = e.indexOf("g") > $t,
            u = e.indexOf("l") > $t;
        for (i = 0; a > i; i++)
            if (r = c(n, t[i]), s && 0 === r || f && 1 === r || u && r === $t) return at;
        return ct
    }

    function f(t, e) {
        for (var n, r = 0, i = ["g", "ge", "e", "l", "le"]; n = i[r++];)
            if (n in t && s(t[n], n, e)) return at;
        return ct
    }

    function u() {
        return 1
    }

    function d(t) {
        var e = 0;
        try {
            i() && (O(zt, t, u()), e = 1)
        } catch (n) {
            e = $t
        }
        return e
    }

    function l(t) {
        var e, n = 0;
        try {
            o() && (e = te.flashVersion(), f(Be, e) ? Me ? O(Wt, t, Ht) : O(Wt, t, It) : f(Ie, Fe) && (Me ? O(Wt, t, Bt) : O(Wt, t, Ft)), n = 1)
        } catch (r) {
            n = $t
        }
        return n
    }

    function p() {
        var t = G && G.pos;
        try {
            Xe && -1 != Xe && (ye(Xe), Xe = 0)
        } catch (e) {}
        $e || ($e = l(t)), He || (He = d(t)), (0 > $e || 0 > He) && (Xe = $t);
        try {
            Xe || $e && He || (Xe = he(p, Pt))
        } catch (e) {}
    }

    function h(t) {
        e(t)
    }

    function y(e) {
        var n, r = 0;
        if (qe[lt])
            for (; n = qe[r++];) se(n, t, ot, e);
        se(rt, t, ot, e)
    }

    function m() {
        var t, e, n, r, i, o, a, c, s = document.body,
            f = s.clientWidth,
            u = s.clientHeight,
            d = 0,
            l = {
                w: -1,
                h: -1
            };
        for (r = s.childNodes; n = r[d++];)
            if (i = DARLA.Dom.tagName(n), i && "script" != i && "style" != i && "link" != i) {
                if (n == s) break;
                o = DARLA.Dom.Geom.rect(n), a = Le(o.r, f), c = Ee(o.l, 0), t = Le(o.w, a - c), a = Le(o.b, u), c = Ee(o.t, 0), e = Le(o.h, a - c), t > 0 && e > 0 && t > l.w && e > l.h && (l.w = t, l.h = e)
            }
        return l.w <= 0 && (l.w = f), l.h <= 0 && (l.h = u), l
    }

    function v(t) {
        return t ? Se.round(t) : t
    }

    function g(t) {
        return t ? +t.toFixed(3) : t
    }

    function b(e) {
        if (!e) return "";
        var n, r, i, o, a, c, s, f, u, d, l, p = [],
            h = [],
            y = 5;
        try {
            t && t.performance && (n = t.performance.getEntriesByType("resource"), r = t.performance.getEntriesByType("paint"))
        } catch (m) {
            n = ot
        }
        for (o = n && n[lt] || 0, a = o > y ? y : o, l = 0; o > l; l++) c = n[l], u = c.connectEnd, d = c.secureConnectionStart, f = c.requestStart, s = [c.name, c.duration, c.startTime, d ? u - d : ot, f ? c.domainLookupEnd - c.domainLookupStart : ot, f ? u - c.connectStart : ot], h.push(s);
        for (h.sort(function(t, e) {
                var n = t[1],
                    r = e[1];
                return r > n ? 1 : n > r ? -1 : 0
            }), l = 0; a > l; l++) c = h[l], p.push('{"name":"' + c[0] + '","dur":' + v(c[1]) + ',"st":' + v(c[2]) + ',"ssl":' + v(c[3]) + ',"dns":' + g(c[4]) + ',"conn":' + g(c[5]) + "}");
        if (r) {
            var b = "";
            for (l = 0; l < r.length; l++) i = r[l], b += '"' + i.name + '":' + v(i.startTime) + ",";
            b.length > 0 && p.push("{" + b.slice(0, -1) + "}")
        }
        return '"' + e + '":[' + p.join(",") + "]"
    }

    function w(e) {
        function r() {
            var e = Y && Y.SandBox && Y.SandBox.vendor;
            if ("PerformancePaintTiming" in t && y > 0) {
                var n = t.performance.getEntriesByType("paint");
                if ((!n || n.length < 2) && e && "function" == typeof e.inViewPercentage && e.inViewPercentage() >= Zt) return he(r, Kt), void(y -= Kt)
            }
            f = b(G.pos), O("resourceTiming", G.pos, f)
        }
        var i, o, a, c, s, f, u = 0,
            d = 0,
            l = be("a"),
            p = J && J.tgt || "_blank",
            h = we("fc_align"),
            y = qt;
        if (!je) {
            for (je = at, ke(t, st, w), t[bt] = R, r(), se(Qe, t, ot, e);
                (i = l[u++]) && (o = Ae(i, "target"), o != p && Ae(i, "target", p), !(u > 10)););
            if (h && ee && ie.UA && ie.UA.ie <= 7)
                for (l = be("img"), u = 0; i = l[u++];) {
                    try {
                        a = Ae(i, "width") + Jt, c = Ae(i, "height") + Jt, "0" !== a && "1" !== a || "0" !== c && "1" !== c ? d++ : (s = ie.currentStyle(i), s && "none" != s.display && ie.par(i) == h && (i.style.display = "none"))
                    } catch (v) {}
                    if (u > 20) break
                }
            G.fif || O("content-size", G.pos, de(re(m())));
            try {
                he(n, Mt)
            } catch (v) {}
            se(et, t, ot, e)
        }
    }

    function x(e) {
        var n, r = 0,
            i = at,
            o = {},
            a = ct;
        if (Ze[lt])
            for (; n = Ze[r++];)
                if (i = se(n, t, o, e), i = !i && o.err ? at : i, i === ct || e.returnValue === ct || e.stopped) {
                    a = at;
                    break
                }
        return !a && it && se(it, t, ot, e), i
    }

    function _(e, n, r, i) {
        var o, a, c, s = ct;
        if (r ? (a = Q, c = tt) : (a = K, c = Z), i) try {
            o = c.call(t, e, n, ct), s = at
        } catch (f) {
            o = ot, s = ct
        }
        if (!s && a) {
            try {
                o = a(e, n)
            } catch (f) {
                o = ot
            }
            try {
                o = a.call(t, e, n)
            } catch (f) {
                o = ot
            }
        }
        return o
    }

    function k(t, e) {
        return E(t, e, at)
    }

    function A(t, e) {
        return E(t, e)
    }

    function S(t, e) {
        return T(t, e, at)
    }

    function L(t, e) {
        return T(t, e)
    }

    function E(t, e, n) {
        var r, i = de(t),
            o = ct;
        switch (i = i && i[Rt]()) {
            case pt:
            case yt:
                Ke.push(e);
                break;
            case ht:
            case gt:
                qe.push(e);
                break;
            case ut:
            case mt:
                Ze.push(e);
                break;
            default:
                -1 == i.indexOf(ut) && (o = at)
        }
        return r = o ? _(t, e, ct, n) : at
    }

    function T(t, e, n) {
        var r, i, o = de(t),
            a = 0;
        switch (o = o && o[Rt]()) {
            case pt:
            case yt:
                i = Ke;
                break;
            case ht:
            case gt:
                i = qe;
                break;
            case ut:
            case mt:
                i = Ze
        }
        if (i) {
            if (i[lt])
                for (; r = i[a];) {
                    if (r === e) {
                        i.splice(a, 1);
                        break
                    }
                    a++
                }
        } else _(t, e, at, n)
    }

    function C() {
        Ue && (ye(Ue), Ue = 0), ne.empty(Je) || (Je = re(Je), O("js-err", Je), Je[lt] = ot)
    }

    function R(e, n, r) {
        var i, o = G && G.pos;
        Pe || (O(Ut, o, u()), Pe = at), Je || (Je = {}), Je[ne.guid("jse")] = {
            l: je,
            m: de(["Message: ", e, "\nURL:", n, "\nLine:", r, "\n"])
        }, Ue && (ye(Ue), Ue = 0);
        try {
            i = ne.convertArgs(arguments), Qe.apply(t, [ot, "js-err", i])
        } catch (a) {}
        return Ue = he(C, jt), at
    }

    function O(e) {
        var n, r, i, o = [e, ze],
            a = arguments,
            c = a[lt];
        try {
            n = t[Xt][Ot]
        } catch (s) {
            n = ot
        }
        if (n) {
            o = o.concat(ne.convertArgs(a, 1));
            try {
                n.msg(o)
            } catch (s) {}
        } else if (ae) {
            for (r = ["a=handoff&cmd=msg&pos=", G.pos, "&msg=", e, "&guid=", ze, "&args="], i = 1; c > i; ++i) r.push(pe(pe(a[i])), ",");
            r.push("&"), ae.send(ze, de(r))
        }
        n = ot
    }

    function N(t) {
        rt = t
    }

    function D() {
        return rt
    }

    function j(t) {
        nt = t
    }

    function M() {
        return nt
    }

    function P(t) {
        et = t
    }

    function $() {
        return et
    }

    function H(t) {
        it = t
    }

    function B() {
        return it
    }

    function I(t) {
        t && (K && (t[Oe] = A, t[Ne] = L), Z && (t[Ce] = k, t[Re] = S), Z && (ne.prop(t, Ce, k), ne.prop(t, Re, S)), K && (ne.prop(t, Oe, A), ne.prop(t, Ne, L)), ne.prop(t, vt, et, ct, at, ct, $, P), ne.prop(t, yt, nt, ct, at, ct, M, j), ne.prop(t, mt, it, ct, at, ct, B, H), ne.prop(t, gt, rt, ct, at, ct, D, N))
    }

    function F(t) {
        return ie.evtCancel(t)
    }

    function z(e) {
        var n = -1;
        try {
            n = xt in Qt ? Qt[xt] : kt in Qt ? Qt[kt] : At in Qt ? Qt[At] : St in Qt ? Qt[St] : Lt in Qt ? Qt[Lt] : -1
        } catch (r) {
            n = -1
        }
        n === xt ? n = 0 : "visible" === n ? n = 1 : n === ct ? n = 0 : n === at && (n = 1), se(Qe, t, ot, e, "vis-change", n)
    }

    function U() {
        if (Ge) {
            try {
                ye(Ge), Ge = 0
            } catch (e) {}
            se(Qe, t, ot, ot, Gt)
        }
    }

    function W(t) {
        je && (Ge && ye(Ge), Ge = he(U, 500))
    }

    function X() {
        var n, r;
        if (J.bg && ie.makeCss(de(["#fc { background-color: ", J.bg, "; }"]), "darla_bg_css"), r = J.tgt, r || (r = J.tgt = "_blank"), "_blank" != r && Qt) {
            for (; xe(be("base")[0]););
            n = ie.make("base"), Ae(n, "target", r), ge(be("head")[0], n)
        }
        ee && (K = t[Oe], Q = t[Ne]), Z = t[Ce], tt = t[Re], _e(t, ht, y), _e(t, pt, h), _e(t, st, w), _e(t, ut, x, at), _e(t, Vt, F, at), _e(t, Gt, W), xt in Qt || kt in Qt ? q = _t : At in Qt ? q = "moz" + _t : St in Qt ? q = "webkit" + _t : Lt in Qt && (q = "ms" + _t), _e(Qt, q, z), I(t), I(t.__proto__), I(t.Window && t.Window.prototype), I(self), ne.prop(t, "self", self, ct, at, ct), t.Unloader = {
            fire: e
        }, t[bt] = R;
        try {
            navigator.mediaDevices.getUserMedia = function() {
                return Promise.reject()
            }
        } catch (i) {}
        if (G.fif) {
            try {
                Ae(t.frameElement, "name", ot)
            } catch (i) {}
            t.inFIF = t.isAJAX = at
        } else ae && ae.init && ae.init(G), ce && ce.init && (Qe = ce.init(G))
    }

    function V() {
        var e, i;
        if (i = de(J.css), i && (i = le(i), ie.makeCss(i, "darla_custom_css")), e = de(G.html)) {
            G.unescaped || (e = le(e));
            try {
                G.flexW || G.flexH || we("fc_align") ? Qt.write(e) : Qt.write('<div id="fc_align" class="darla sf_align" style="position:absolute;top:0px;left:0px">', e, "</div>")
            } catch (o) {
                R("Error while rendering content: " + o[ut])
            }
            t[bt] = R
        }
        r(), n(), p()
    }
    if (!t || t != t.top) {
        var G, J, q, K, Z, Q, tt, et, nt, rt, it, ot = null,
            at = !0,
            ct = !1,
            st = "load",
            ft = "on",
            ut = "message",
            dt = "before",
            lt = "length",
            pt = "un" + st,
            ht = dt + pt,
            yt = ft + pt,
            mt = ft + ut,
            vt = ft + st,
            gt = ft + ht,
            bt = ft + "error",
            wt = "visibility",
            xt = "hidden",
            _t = wt + "change",
            kt = wt + "State",
            At = "mozHidden",
            St = "webkitHidden",
            Lt = "msHidden",
            Et = "__defineGetter__",
            Tt = "__defineSetter__",
            Ct = "defineProperty",
            Rt = "toLowerCase",
            Ot = "DARLA",
            Nt = "URL",
            Dt = "Lang",
            jt = 1500,
            Mt = 750,
            Yt = 5e3,
            Pt = 500,
            $t = -1,
            Ht = 1,
            Bt = 2,
            It = 3,
            Ft = 4,
            zt = "insecureContent",
            Ut = "jsError",
            Wt = "flashNukeFallback",
            Xt = "parent",
            Vt = "scroll",
            Gt = "resize",
            Jt = "",
            qt = 5e3,
            Kt = 500,
            Zt = 20,
            Qt = document,
            te = t.DARLA,
            ee = te && te.isIE,
            ne = te && te[Dt],
            re = ne && ne.ParamHash,
            ie = te && te.Dom,
            oe = ie && ie.IFrames,
            ae = ie && ie.XMsgClient,
            ce = ne && ne.ns && ne.ns("Y.SandBox.vendor"),
            se = ne && ne.callSafe,
            fe = ne && ne.noop,
            ue = ne && ne.cnum,
            de = ne && ne.cstr,
            le = ne && ne.ues,
            pe = ne && ne.es,
            he = ne && ne.sto,
            ye = ne && ne.cto,
            me = ne && ne.fCC,
            ve = ne && ne.convertArgs,
            ge = ie && ie.append,
            be = ie && ie.tags,
            we = ie && ie.elt,
            xe = ie && ie.purge,
            _e = ie && ie.attach,
            ke = ie && ie.detach,
            Ae = ie && ie.attr,
            Se = Math,
            Le = Se.min,
            Ee = Se.max,
            Te = Object,
            Ce = "addEventListener",
            Re = "removeEventListener",
            Oe = "attachEvent",
            Ne = "detachEvent",
            De = "referrer",
            je = ct,
            Me = ct,
            Ye = ct,
            Pe = ct,
            $e = 0,
            He = 0,
            Be = {},
            Ie = {},
            Fe = "",
            ze = Jt,
            Ue = 0,
            We = 0,
            Xe = 0,
            Ve = 0,
            Ge = 0,
            Je = ot,
            qe = [],
            Ke = [],
            Ze = [],
            Qe = ot;
        ! function() {
            var e, n, r, i, o, a, c, s, f, u, d, l, p, h, y = /^https?\:\/\/([^\/\?]*)(yahoo|tumblr|flickr)\.(net|com)(\:\d+)?([\/\?]|$)/,
                m = 100,
                v = me && me(m + 10, m - 3, m + 9, m + 1);
            if (d = t[v], t[v] = Jt, top != t && top == t[Xt] && re && ue && de && oe && ge && be && we && xe && _e && ke) try {
                if (-1 == d.indexOf("guid=")) return;
                if (p = /&eff=(\d)&/.exec(d), Me = p && ue(p[1], 0, 0, 2), p = /&bv=([\.\d]*)&/.exec(d), Fe = p && p[1] || Jt, p = /&eicf=(\d)&/.exec(d), Ye = p && ue(p[1], 0, 0, 1), e = ne[Nt], G = re(d, ot, ot, at, at), J = G.conf, ze = G.guid, Be = G.fbl || {}, Ie = G.bbl || {}, !ze || !J) return;
                G.fif = o = ue(G.fif, 0, 0);
                try {
                    c = t[Xt][Ot][Dt][Nt].loc()
                } catch (l) {
                    c = ot
                }
                if (o && !c) return;
                if (!o && c) {
                    if (d = de(c.protocol), !d) return;
                    if (-1 == d.indexOf("file")) return;
                    f = at
                }
                if (o && !y.test(c)) return;
                try {
                    a = e.ref(), s = a.toString()
                } catch (l) {
                    a = ot, s = Jt
                }
                try {
                    u = e.loc()
                } catch (l) {
                    u = ot
                }
                if (o && s && (!a || a && !a.host) && !f && (G.host = a.protocol + "://" + a.host), !s && !f) return;
                if (!o && !f && -1 == G.host.indexOf(a.host)) return;
                if (!u || !f && !u.host) return;
                if (!(o || f || G.srcHost && -1 != G.srcHost.indexOf(u.host))) return;
                if (a && !f && a.host && (h = ne._isob(a))) {
                    n = de(ne.urlToPublic(a)), a = new e(n), i = function() {
                        return n
                    }, e.ref = function() {
                        return a
                    };
                    try {
                        Te[Ct](Qt, De, {
                            get: i,
                            set: fe,
                            configurable: ct
                        }), r = at
                    } catch (l) {
                        r = ct
                    }
                    if (!r) try {
                        Qt[Et](De, i), Qt[Tt](De, fe)
                    } catch (l) {}
                }
                X(), V()
            } catch (l) {
                l = ot
            }
        }()
    }
}(window);