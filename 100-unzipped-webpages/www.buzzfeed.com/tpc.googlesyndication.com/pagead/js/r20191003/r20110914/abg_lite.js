(function() {
    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }

    function ba(a) {
        if (!(a instanceof Array)) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            a = b ? b.call(a) : {
                next: aa(a)
            };
            for (var c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var ca = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        da;
    if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
    else {
        var ea;
        a: {
            var fa = {
                    a: !0
                },
                ia = {};
            try {
                ia.__proto__ = fa;
                ea = ia.a;
                break a
            } catch (a) {}
            ea = !1
        }
        da = ea ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ja = da;

    function ka(a, b) {
        a.prototype = ca(b.prototype);
        a.prototype.constructor = a;
        if (ja) ja(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c]
    }
    var k = this || self,
        la = /^[\w+/_-]+[=]{0,2}$/,
        n = null;

    function ma() {}

    function p(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function q(a) {
        return "function" == p(a)
    }

    function t(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    var na = "closure_uid_" + (1E9 * Math.random() >>> 0),
        oa = 0;

    function pa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function qa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function u(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? u = pa : u = qa;
        return u.apply(null, arguments)
    }
    var ra = Date.now || function() {
        return +new Date
    };

    function v(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };

    function w(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, w);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    v(w, Error);
    w.prototype.name = "CustomError";
    var sa = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        ta = Array.prototype.forEach ? function(a, b) {
            Array.prototype.forEach.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        };

    function ua(a, b) {
        this.h = a === va && b || "";
        this.g = wa
    }
    var wa = {},
        va = {},
        x = new ua(va, "");

    function xa(a, b, c) {
        this.j = a === ya && b || "";
        this.g = a === ya && c || null;
        this.h = za
    }

    function Aa(a) {
        if (a instanceof xa && a.constructor === xa && a.h === za) return a.j;
        p(a);
        return "type_error:TrustedResourceUrl"
    }
    var za = {},
        ya = {};
    var y;
    a: {
        var Ba = k.navigator;
        if (Ba) {
            var Ca = Ba.userAgent;
            if (Ca) {
                y = Ca;
                break a
            }
        }
        y = ""
    };

    function Da() {
        this.g = "";
        this.h = Fa
    }

    function Ga() {
        var a = Ha;
        if (a instanceof Da && a.constructor === Da && a.h === Fa) return a.g;
        p(a);
        return "type_error:SafeHtml"
    }
    var Fa = {};

    function Ia(a) {
        var b = new Da;
        b.g = a;
        return b
    }
    Ia("<!DOCTYPE html>");
    var Ha = Ia("");
    Ia("<br>");

    function Ja(a) {
        var b = new xa(ya, x instanceof ua && x.constructor === ua && x.g === wa ? x.h : "type_error:Const", null);
        a.src = b.g ? b.g : Aa(b).toString()
    };

    function Ka(a) {
        Ka[" "](a);
        return a
    }
    Ka[" "] = ma;
    var La = -1 != y.indexOf("Trident") || -1 != y.indexOf("MSIE");

    function Ma() {}
    var Na = "function" == typeof Uint8Array;

    function Oa(a, b, c) {
        a.h = null;
        b || (b = []);
        a.u = void 0;
        a.l = -1;
        a.g = b;
        a: {
            if (b = a.g.length) {
                --b;
                var d = a.g[b];
                if (null !== d && "object" == typeof d && "array" != p(d) && !(Na && d instanceof Uint8Array)) {
                    a.m = b - a.l;
                    a.j = d;
                    break a
                }
            }
            a.m = Number.MAX_VALUE
        }
        a.o = {};
        if (c)
            for (b = 0; b < c.length; b++)
                if (d = c[b], d < a.m) d += a.l, a.g[d] = a.g[d] || Pa;
                else {
                    var e = a.m + a.l;
                    a.g[e] || (a.j = a.g[e] = {});
                    a.j[d] = a.j[d] || Pa
                }
    }
    var Pa = [];

    function A(a, b) {
        if (b < a.m) {
            b += a.l;
            var c = a.g[b];
            return c === Pa ? a.g[b] = [] : c
        }
        if (a.j) return c = a.j[b], c === Pa ? a.j[b] = [] : c
    }

    function B(a, b, c) {
        a = A(a, b);
        return null == a ? c : a
    }

    function C(a, b) {
        a = A(a, b);
        a = null == a ? a : !!a;
        return null == a ? !1 : a
    }

    function Qa(a) {
        var b = Ra;
        a.h || (a.h = {});
        if (!a.h[1]) {
            var c = A(a, 1);
            c && (a.h[1] = new b(c))
        }
        return a.h[1]
    }

    function Sa(a) {
        if (a.h)
            for (var b in a.h) {
                var c = a.h[b];
                if ("array" == p(c))
                    for (var d = 0; d < c.length; d++) c[d] && Sa(c[d]);
                else c && Sa(c)
            }
    }
    Ma.prototype.toString = function() {
        Sa(this);
        return this.g.toString()
    };

    function Ra(a) {
        Oa(this, a, Ta)
    }
    v(Ra, Ma);
    var Ta = [28];

    function Ua(a) {
        Oa(this, a, Va)
    }
    v(Ua, Ma);
    var Va = [21];

    function D(a) {
        var b = document;
        return "string" === typeof a ? b.getElementById(a) : a
    }

    function Wa(a) {
        var b = document;
        b.getElementsByClassName ? a = b.getElementsByClassName(a)[0] : (b = document, a = b.querySelectorAll && b.querySelector && a ? b.querySelector(a ? "." + a : "") : Xa(b, a)[0] || null);
        return a || null
    }

    function Xa(a, b) {
        var c, d;
        if (a.querySelectorAll && a.querySelector && b) return a.querySelectorAll(b ? "." + b : "");
        if (b && a.getElementsByClassName) {
            var e = a.getElementsByClassName(b);
            return e
        }
        e = a.getElementsByTagName("*");
        if (b) {
            var f = {};
            for (c = d = 0; a = e[c]; c++) {
                var g = a.className,
                    h;
                if (h = "function" == typeof g.split) h = 0 <= sa(g.split(/\s+/), b);
                h && (f[d++] = a)
            }
            f.length = d;
            return f
        }
        return e
    }

    function Ya(a) {
        var b = document;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    }

    function Za(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };

    function $a(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Ka(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function ab(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function E(a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var bb = /^true$/.test("false"),
        cb = /^true$/.test("true");
    var F = document,
        G = window;

    function H(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function db(a, b) {
        a.removeEventListener && a.removeEventListener("message", b, !1)
    };

    function eb(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        var c = a.document.createElement("img");
        c.src = b;
        a.google_image_requests.push(c)
    };

    function fb(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }
    var gb = !!window.google_async_iframe_id,
        I = gb && window.parent || window;

    function hb(a) {
        try {
            var b = G;
            a = a || G;
            for (var c = 0; 20 > c; c++) {
                if (b == a) return !0;
                if (b == a.top) break;
                b = b.parent
            }
        } catch (d) {}
        return !1
    }

    function J(a, b) {
        a && fb(b, function(c, d) {
            a.style[d] = c
        })
    };

    function ib(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var jb = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function kb(a, b) {
        this.g = a;
        this.h = b
    }

    function lb(a, b) {
        this.url = a;
        this.N = !!b;
        this.depth = null
    };

    function mb() {
        this.j = "&";
        this.l = !1;
        this.h = {};
        this.m = 0;
        this.g = []
    }

    function nb(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function ob(a, b, c, d, e) {
        var f = [];
        ab(a, function(g, h) {
            (g = pb(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function pb(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(pb(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(ob(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function qb(a, b, c, d) {
        a.g.push(b);
        a.h[b] = nb(c, d)
    }

    function rb(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = sb(a) - c.length;
        if (0 > d) return "";
        a.g.sort(function(r, P) {
            return r - P
        });
        c = null;
        for (var e = "", f = 0; f < a.g.length; f++)
            for (var g = a.g[f], h = a.h[g], l = 0; l < h.length; l++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var m = ob(h[l], a.j, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        b += m;
                        e = a.j;
                        break
                    }
                    a.l && (e = d, m[e - 1] == a.j && --e, b += m.substr(0, e), e = a.j, d = 0);
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }

    function sb(a) {
        var b = 1,
            c;
        for (c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    };

    function tb() {
        var a = void 0 === a ? G : a;
        this.h = "http:" === a.location.protocol ? "http:" : "https:";
        this.g = Math.random()
    }

    function ub() {
        var a = vb,
            b = K.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }

    function wb(a, b, c, d, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            if (c instanceof mb) var f = c;
            else f = new mb, ab(c, function(h, l) {
                var m = f,
                    r = m.m++;
                h = nb(l, h);
                m.g.push(r);
                m.h[r] = h
            });
            var g = rb(f, a.h, "/pagead/gen_204?id=" + b + "&");
            g && eb(k, g)
        } catch (h) {}
    };
    var xb = null;

    function yb() {
        var a = k.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : ra()
    }

    function zb() {
        var a = void 0 === a ? k : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Ab(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var L = k.performance,
        Bb = !!(L && L.mark && L.measure && L.clearMarks),
        M = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(function() {
            var a;
            if (a = Bb) {
                var b;
                if (null === xb) {
                    xb = "";
                    try {
                        a = "";
                        try {
                            a = k.top.location.hash
                        } catch (c) {
                            a = k.location.hash
                        }
                        a && (xb = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = xb;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Cb() {
        var a = K;
        this.h = [];
        this.j = a || k;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.g = M() || (null != b ? b : 1 > Math.random())
    }

    function Db(a) {
        a && L && M() && (L.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), L.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Cb.prototype.start = function(a, b) {
        if (!this.g) return null;
        var c = zb() || yb();
        a = new Ab(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        L && M() && L.mark(b);
        return a
    };

    function Eb() {
        var a = Fb;
        this.m = vb;
        this.h = null;
        this.o = this.l;
        this.g = void 0 === a ? null : a;
        this.j = !1
    }

    function Gb(a, b, c) {
        try {
            if (a.g && a.g.g) {
                var d = a.g.start(b.toString(), 3);
                var e = c();
                var f = a.g;
                c = d;
                if (f.g && "number" === typeof c.value) {
                    var g = zb() || yb();
                    c.duration = g - c.value;
                    var h = "goog_" + c.label + "_" + c.uniqueId + "_end";
                    L && M() && L.mark(h);
                    !f.g || 2048 < f.h.length || f.h.push(c)
                }
            } else e = c()
        } catch (l) {
            f = !0;
            try {
                Db(d), f = a.o(b, new ib(l, {
                    message: Hb(l)
                }), void 0, void 0)
            } catch (m) {
                a.l(217, m)
            }
            if (!f) throw l;
        }
        return e
    }

    function Ib(a, b) {
        var c = N;
        return function(d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
            return Gb(c, a, function() {
                return b.apply(void 0, e)
            })
        }
    }
    Eb.prototype.l = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new mb;
            f.l = !0;
            qb(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new ib(b, {
                message: Hb(b)
            }));
            b.msg && qb(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.h) try {
                this.h(g)
            } catch (ha) {}
            if (d) try {
                d(g)
            } catch (ha) {}
            b = [g];
            f.g.push(3);
            f.h[3] = b;
            d = k;
            b = [];
            g = null;
            do {
                var h = d;
                if ($a(h)) {
                    var l = h.location.href;
                    g = h.document && h.document.referrer || null
                } else l = g, g = null;
                b.push(new lb(l || ""));
                try {
                    d = h.parent
                } catch (ha) {
                    d = null
                }
            } while (d && h != d);
            l = 0;
            for (var m = b.length - 1; l <= m; ++l) b[l].depth = m - l;
            h = k;
            if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var r = b[m];
                    r.url || (r.url = h.location.ancestorOrigins[m - 1] || "", r.N = !0)
                }
            var P = new lb(k.location.href, !1);
            h = null;
            var Ea = b.length - 1;
            for (r = Ea; 0 <= r; --r) {
                var z = b[r];
                !h && jb.test(z.url) && (h = z);
                if (z.url && !z.N) {
                    P = z;
                    break
                }
            }
            z = null;
            var zc = b.length && b[Ea].url;
            0 != P.depth && zc && (z = b[Ea]);
            var S = new kb(P, z);
            S.h && qb(f, 4, "top", S.h.url || "");
            qb(f, 5, "url", S.g.url || "");
            wb(this.m, e, f, this.j, c)
        } catch (ha) {
            try {
                wb(this.m, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Hb(ha),
                    url: S && S.g.url
                }, this.j, c)
            } catch (cd) {}
        }
        return !0
    };

    function Hb(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (d) {}
        }
        return b
    };
    var vb, N, Jb;
    if (gb && !$a(I)) {
        var Kb = "." + F.domain;
        try {
            for (; 2 < Kb.split(".").length && !$a(I);) F.domain = Kb = Kb.substr(Kb.indexOf(".") + 1), I = window.parent
        } catch (a) {}
        $a(I) || (I = window)
    }
    var K = I,
        Fb = new Cb;

    function Lb() {
        if (!K.google_measure_js_timing) {
            var a = Fb;
            a.g = !1;
            a.h != a.j.google_js_reporting_queue && (M() && ta(a.h, Db), a.h.length = 0)
        }
    }(function() {
        vb = new tb;
        "number" !== typeof K.google_srt && (K.google_srt = Math.random());
        ub();
        N = new Eb;
        N.h = function(b) {
            var c = G.jerExpIds;
            if ("array" == p(c) && 0 !== c.length) {
                var d = b.eid;
                if (d) {
                    c = ba(d.split(",")).concat(ba(c));
                    d = {};
                    for (var e = 0, f = 0; f < c.length;) {
                        var g = c[f++];
                        var h = g;
                        h = t(h) ? "o" + (h[na] || (h[na] = ++oa)) : (typeof h).charAt(0) + h;
                        Object.prototype.hasOwnProperty.call(d, h) || (d[h] = !0, c[e++] = g)
                    }
                    c.length = e;
                    b.eid = c.join(",")
                } else b.eid = c.join(",")
            }
            Jb && (b.jc = Jb);
            (c = G.jerUserAgent) && (b.useragent = c)
        };
        N.j = !0;
        "complete" == K.document.readyState ? Lb() : Fb.g && H(K, "load", function() {
            Lb()
        });
        var a = F.currentScript;
        Jb = a ? a.dataset.jc : ""
    })();

    function O(a, b) {
        return Ib(a, b)
    };

    function Mb(a, b, c, d) {
        this.xOffset = a;
        this.yOffset = b;
        this.height = d;
        this.width = c;
        this.g = null
    }

    function Nb() {
        this.referenceFrameArray = []
    }

    function Ob(a) {
        return {
            referenceFrameArray: a.referenceFrameArray.map(function(b) {
                return {
                    xOffset: b.xOffset,
                    yOffset: b.yOffset,
                    height: b.height,
                    width: b.width
                }
            })
        }
    }

    function Pb(a) {
        var b = void 0 === b ? new Nb : b;
        for (var c = 0, d = 0, e = 0; 20 > e; ++e) {
            var f = a.document.body;
            var g = f.parentElement;
            var h = a === k.top ? f.scrollHeight || g.scrollHeight : a.innerHeight;
            g = a === k.top ? f.scrollWidth || g.scrollWidth : a.innerWidth;
            f = b;
            c = new Mb(c, d, g, h);
            c.g = f;
            f.referenceFrameArray.push(c);
            if (!(c = !a.frameElement)) {
                c = !1;
                try {
                    a.parent.document.body && (c = !1)
                } catch (l) {
                    c = !0
                }
            }
            if (c) break;
            else d = a.frameElement.getBoundingClientRect(), c = d.left + a.parent.pageXOffset, d = d.top + a.parent.pageYOffset, a = a.parent
        }
        return b
    };

    function Qb(a, b) {
        this.j = a;
        this.l = b;
        this.h = 0;
        this.g = null
    }
    Qb.prototype.get = function() {
        if (0 < this.h) {
            this.h--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else a = this.j();
        return a
    };

    function Rb(a, b) {
        a.l(b);
        100 > a.h && (a.h++, b.next = a.g, a.g = b)
    };

    function Sb(a) {
        k.setTimeout(function() {
            throw a;
        }, 0)
    }
    var Tb;

    function Ub() {
        var a = k.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == y.indexOf("Presto") && (a = function() {
            var e = Ya("IFRAME");
            e.style.display = "none";
            Ja(e);
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.write(Ga());
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = u(function(l) {
                if (("*" == h || l.origin == h) && l.data == g) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && -1 == y.indexOf("Trident") && -1 == y.indexOf("MSIE")) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.M;
                    c.M = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    M: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in Ya("SCRIPT") ? function(e) {
            var f = Ya("SCRIPT");
            f.onreadystatechange = function() {
                f.onreadystatechange = null;
                f.parentNode.removeChild(f);
                f = null;
                e();
                e = null
            };
            document.documentElement.appendChild(f)
        } : function(e) {
            k.setTimeout(e, 0)
        }
    };

    function Vb() {
        this.h = this.g = null
    }
    var Xb = new Qb(function() {
        return new Wb
    }, function(a) {
        a.reset()
    });
    Vb.prototype.add = function(a, b) {
        var c = Xb.get();
        c.set(a, b);
        this.h ? this.h.next = c : this.g = c;
        this.h = c
    };

    function Yb() {
        var a = Zb,
            b = null;
        a.g && (b = a.g, a.g = a.g.next, a.g || (a.h = null), b.next = null);
        return b
    }

    function Wb() {
        this.next = this.h = this.g = null
    }
    Wb.prototype.set = function(a, b) {
        this.g = a;
        this.h = b;
        this.next = null
    };
    Wb.prototype.reset = function() {
        this.next = this.h = this.g = null
    };

    function $b(a, b) {
        ac || bc();
        cc || (ac(), cc = !0);
        Zb.add(a, b)
    }
    var ac;

    function bc() {
        if (k.Promise && k.Promise.resolve) {
            var a = k.Promise.resolve(void 0);
            ac = function() {
                a.then(dc)
            }
        } else ac = function() {
            var b = dc,
                c;
            !(c = !q(k.setImmediate)) && (c = k.Window && k.Window.prototype) && (c = -1 == y.indexOf("Edge") && k.Window.prototype.setImmediate == k.setImmediate);
            c ? (Tb || (Tb = Ub()), Tb(b)) : k.setImmediate(b)
        }
    }
    var cc = !1,
        Zb = new Vb;

    function dc() {
        for (var a; a = Yb();) {
            try {
                a.g.call(a.h)
            } catch (b) {
                Sb(b)
            }
            Rb(Xb, a)
        }
        cc = !1
    };

    function Q(a) {
        this.g = 0;
        this.u = void 0;
        this.l = this.h = this.j = null;
        this.m = this.o = !1;
        if (a != ma) try {
            var b = this;
            a.call(void 0, function(c) {
                R(b, 2, c)
            }, function(c) {
                R(b, 3, c)
            })
        } catch (c) {
            R(this, 3, c)
        }
    }

    function ec() {
        this.next = this.context = this.h = this.j = this.g = null;
        this.l = !1
    }
    ec.prototype.reset = function() {
        this.context = this.h = this.j = this.g = null;
        this.l = !1
    };
    var fc = new Qb(function() {
        return new ec
    }, function(a) {
        a.reset()
    });

    function gc(a, b, c) {
        var d = fc.get();
        d.j = a;
        d.h = b;
        d.context = c;
        return d
    }

    function hc() {
        var a, b = new Q(function(c) {
            a = c
        });
        return new ic(b, a)
    }
    Q.prototype.then = function(a, b, c) {
        return jc(this, q(a) ? a : null, q(b) ? b : null, c)
    };
    Q.prototype.$goog_Thenable = !0;
    Q.prototype.cancel = function(a) {
        if (0 == this.g) {
            var b = new T(a);
            $b(function() {
                kc(this, b)
            }, this)
        }
    };

    function kc(a, b) {
        if (0 == a.g)
            if (a.j) {
                var c = a.j;
                if (c.h) {
                    for (var d = 0, e = null, f = null, g = c.h; g && (g.l || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.g && 1 == d ? kc(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : lc(c), mc(c, e, 3, b)))
                }
                a.j = null
            } else R(a, 3, b)
    }

    function nc(a, b) {
        a.h || 2 != a.g && 3 != a.g || oc(a);
        a.l ? a.l.next = b : a.h = b;
        a.l = b
    }

    function jc(a, b, c, d) {
        var e = gc(null, null, null);
        e.g = new Q(function(f, g) {
            e.j = b ? function(h) {
                try {
                    var l = b.call(d, h);
                    f(l)
                } catch (m) {
                    g(m)
                }
            } : f;
            e.h = c ? function(h) {
                try {
                    var l = c.call(d, h);
                    void 0 === l && h instanceof T ? g(h) : f(l)
                } catch (m) {
                    g(m)
                }
            } : g
        });
        e.g.j = a;
        nc(a, e);
        return e.g
    }
    Q.prototype.w = function(a) {
        this.g = 0;
        R(this, 2, a)
    };
    Q.prototype.A = function(a) {
        this.g = 0;
        R(this, 3, a)
    };

    function R(a, b, c) {
        if (0 == a.g) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.g = 1;
            a: {
                var d = c,
                    e = a.w,
                    f = a.A;
                if (d instanceof Q) {
                    nc(d, gc(e || ma, f || null, a));
                    var g = !0
                } else {
                    if (d) try {
                        var h = !!d.$goog_Thenable
                    } catch (m) {
                        h = !1
                    } else h = !1;
                    if (h) d.then(e, f, a), g = !0;
                    else {
                        if (t(d)) try {
                            var l = d.then;
                            if (q(l)) {
                                pc(d, l, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (m) {
                            f.call(a, m);
                            g = !0;
                            break a
                        }
                        g = !1
                    }
                }
            }
            g || (a.u = c, a.g = b, a.j = null, oc(a), 3 != b || c instanceof T || qc(a, c))
        }
    }

    function pc(a, b, c, d, e) {
        function f(l) {
            h || (h = !0, d.call(e, l))
        }

        function g(l) {
            h || (h = !0, c.call(e, l))
        }
        var h = !1;
        try {
            b.call(a, g, f)
        } catch (l) {
            f(l)
        }
    }

    function oc(a) {
        a.o || (a.o = !0, $b(a.v, a))
    }

    function lc(a) {
        var b = null;
        a.h && (b = a.h, a.h = b.next, b.next = null);
        a.h || (a.l = null);
        return b
    }
    Q.prototype.v = function() {
        for (var a; a = lc(this);) mc(this, a, this.g, this.u);
        this.o = !1
    };

    function mc(a, b, c, d) {
        if (3 == c && b.h && !b.l)
            for (; a && a.m; a = a.j) a.m = !1;
        if (b.g) b.g.j = null, rc(b, c, d);
        else try {
            b.l ? b.j.call(b.context) : rc(b, c, d)
        } catch (e) {
            sc.call(null, e)
        }
        Rb(fc, b)
    }

    function rc(a, b, c) {
        2 == b ? a.j.call(a.context, c) : a.h && a.h.call(a.context, c)
    }

    function qc(a, b) {
        a.m = !0;
        $b(function() {
            a.m && sc.call(null, b)
        })
    }
    var sc = Sb;

    function T(a) {
        w.call(this, a)
    }
    v(T, w);
    T.prototype.name = "cancel";

    function ic(a, b) {
        this.h = a;
        this.g = b
    };

    function U() {
        this.h = this.h;
        this.w = this.w
    }
    U.prototype.h = !1;
    U.prototype.g = function() {
        if (this.w)
            for (; this.w.length;) this.w.shift()()
    };

    function tc(a) {
        var b = [];
        uc(new vc, a, b);
        return b.join("")
    }

    function vc() {}

    function uc(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if ("array" == p(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), uc(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), wc(d, c), c.push(":"), uc(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    wc(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var xc = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        yc = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function wc(a, b) {
        b.push('"', a.replace(yc, function(c) {
            var d = xc[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), xc[c] = d);
            return d
        }), '"')
    };

    function V(a, b, c, d, e, f) {
        U.call(this);
        this.o = a;
        this.status = 1;
        this.j = b;
        this.m = c;
        this.I = d;
        this.G = !!e;
        this.v = Math.random();
        this.B = {};
        this.u = null;
        this.A = u(this.H, this);
        this.F = f
    }
    ka(V, U);
    V.prototype.H = function(a) {
        if (a.origin === this.m && (this.G || a.source == this.j)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (t(b) && (a = b.i, b.c === this.o && a != this.v)) {
                if (2 !== this.status) try {
                    this.status = 2, Ac(this), this.u && (this.u(), this.u = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || t(b)) && this.B.hasOwnProperty(a)) this.B[a](b)
            }
        }
    };

    function Ac(a) {
        var b = {};
        b.c = a.o;
        b.i = a.v;
        a.F && (b.e = a.F);
        a.j.postMessage(tc(b), a.m)
    }
    V.prototype.D = function() {
        if (1 === this.status) {
            try {
                this.j.postMessage && Ac(this)
            } catch (a) {}
            window.setTimeout(u(this.D, this), 50)
        }
    };
    V.prototype.connect = function(a) {
        a && (this.u = a);
        H(window, "message", this.A);
        this.I && this.D()
    };

    function Bc(a, b, c) {
        a.B[b] = c
    }
    V.prototype.l = function(a, b) {
        var c = {};
        c.c = this.o;
        c.i = this.v;
        c.s = a;
        c.p = b;
        try {
            this.j.postMessage(tc(c), this.m)
        } catch (d) {}
    };
    V.prototype.g = function() {
        this.status = 3;
        db(window, this.A);
        U.prototype.g.call(this)
    };

    function Cc(a, b, c, d, e) {
        V.call(this, a, b, c, d);
        this.C = e
    }
    ka(Cc, V);
    Cc.prototype.l = function(a, b) {
        Dc(this, a, b)
    };

    function Ec(a, b) {
        var c = new Q(function(d, e) {
            k.setTimeout(function() {
                return e(Error("apmc:nocon"))
            }, 4E3);
            La ? k.setTimeout(function() {
                return a.connect(d)
            }, 0) : a.connect(d)
        });
        c.then(function() {
            return a.A(b)
        }, function() {});
        return c
    }

    function Dc(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = {},
            e = (d.c = a.o, d.i = a.v, d.s = b, d.p = c, d);
        a.C && (e.msg_type = a.C);
        La ? k.setTimeout(function() {
            a.j.postMessage(JSON.stringify(e), a.m)
        }, 0) : a.j.postMessage(JSON.stringify(e), a.m)
    }

    function Fc(a, b) {
        return new Q(function(c, d) {
            k.setTimeout(function() {
                return d(Error("apmc:timeout"))
            }, 4E3);
            try {
                var e = JSON.parse(a.data),
                    f = e.c;
                if ("apmc:bc:cr" === e.s && f === b && null != a.source && "string" == typeof a.origin) {
                    var g = new Cc(f, a.source, a.origin, !0);
                    Ec(g, a).then(function() {
                        return c(g)
                    }, function() {
                        g.h || (g.h = !0, g.g())
                    })
                } else throw Error("Invalid connection event");
            } catch (h) {
                d(Error("apmc:error"))
            }
        })
    };

    function Gc(a, b) {
        U.call(this);
        var c = this;
        this.v = a;
        this.o = null;
        this.m = hc();
        this.l = !1;
        this.u = b;
        this.j = O(276, function(d) {
            return Hc(c, d)
        })
    }
    ka(Gc, U);

    function Ic(a) {
        var b = {};
        b = (b.msg_type = a.v, b);
        H(G, "message", a.j);
        a = G.top;
        b.googMsgType = "sth";
        a.postMessage(tc(b), "*")
    }

    function Hc(a, b) {
        hb(b.source) && !a.l && (a.l = !0, Fc(b, a.u).then(function(c) {
            db(G, a.j);
            a.o = c;
            a.m.g && a.m.g(c)
        }, function() {
            a.l = !1
        }))
    }
    Gc.prototype.g = function() {
        db(G, this.j);
        if (this.o) {
            var a = this.o;
            a.h || (a.h = !0, a.g())
        }
        U.prototype.g.call(this)
    };

    function Jc(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return "string" === typeof a && a.match(/\S+/g) || []
    }

    function W(a, b) {
        a.classList ? a.classList.add(b) : (a.classList ? a.classList.contains(b) : 0 <= sa(Jc(a), b)) || (a.className += 0 < a.className.length ? " " + b : b)
    };

    function Kc(a) {
        this.g = (this.serializedAttributionData = a) ? new Ua(a) : null;
        this.isMutableImpression = null != A(this.g, 1) && !!C(Qa(this.g), 33);
        this.S = B(this.g, 30, "") || "";
        this.Z = !!C(this.g, 11);
        this.hasUserFeedbackData = !!this.g && null != A(this.g, 1);
        this.R = !!C(this.g, 4);
        this.V = !!C(this.g, 6);
        this.G = !!C(this.g, 13);
        B(this.g, 8, 0);
        this.creativeIndexSuffix = 1 < B(this.g, 8, 0) ? B(this.g, 7, 0).toString() : "";
        this.$ = !!C(this.g, 17);
        this.Y = !!C(this.g, 18);
        this.P = !!C(this.g, 14);
        this.H = !!C(this.g, 15);
        C(this.g, 5);
        this.W = 1 == C(this.g, 9);
        this.openAttributionInline = 1 == C(this.g, 10);
        this.isMobileDevice = !!C(this.g, 12);
        this.L = null;
        this.U = (a = F.querySelector("[data-slide]")) ? "true" === a.getAttribute("data-slide") : !1;
        (this.J = "" !== this.creativeIndexSuffix) && void 0 === G.goog_multislot_cache && (G.goog_multislot_cache = {});
        if (this.J && !this.U) {
            if (a = G.goog_multislot_cache.hd, void 0 === a) {
                a = !1;
                var b = F.querySelector("[data-dim]");
                if (b)
                    if (b = b.getBoundingClientRect(), 150 <= b.right - b.left && 150 <= b.bottom - b.top) a = !1;
                    else {
                        var c = document.body.getBoundingClientRect();
                        150 > (1 >= Math.abs(c.left - b.left) && 1 >= Math.abs(c.right - b.right) ? b.bottom - b.top : b.right - b.left) && (a = !0)
                    }
                else a = !1;
                window.goog_multislot_cache.hd = a
            }
        } else a = !1;
        this.I = a;
        this.w = D("abgcp" + this.creativeIndexSuffix);
        this.C = D("abgc" + this.creativeIndexSuffix);
        this.h = D("abgs" + this.creativeIndexSuffix);
        this.B = D("abgl" + this.creativeIndexSuffix);
        this.u = D("abgb" + this.creativeIndexSuffix);
        this.F = D("abgac" + this.creativeIndexSuffix);
        D("mute_panel" + this.creativeIndexSuffix);
        this.D = Wa("goog_delegate_attribution" + this.creativeIndexSuffix);
        this.isDelegateAttributionActive = !!this.D && !!this.P && !Wa("goog_delegate_disabled") && !this.H;
        if (this.h) a: {
            a = this.h;b = "A";c = a.childNodes;
            for (var d = 0; d < c.length; d++) {
                var e = c.item(d);
                if ("undefined" != typeof e.tagName && e.tagName.toUpperCase() == b) {
                    a = e;
                    break a
                }
            }
        }
        else a = null;
        this.l = a;
        this.X = "left" == this.S;
        this.m = this.isDelegateAttributionActive ? this.D : D("cbb" + this.creativeIndexSuffix);
        this.T = this.I ? "0" === this.creativeIndexSuffix : !0;
        if (a = !!this.m) a = this.m, a = a.classList ? a.classList.contains("goog_dismissable_menu") : 0 <= sa(Jc(a), "goog_dismissable_menu");
        this.enableDelegateDismissableMenu = a;
        this.o = null;
        this.K = 0;
        this.j = this.isDelegateAttributionActive ? this.D : this.V && this.w ? this.w : this.C;
        this.A = null;
        this.v = G;
        this.O = !!C(this.g, 19);
        this.adbadgeEnabled = !!C(this.g, 24);
        this.enableNativeSurveyLoadIndicator = !!C(this.g, 25);
        C(this.g, 26);
        this.enableNativeJakeUi = !!C(this.g, 27);
        this.isPoliticalAd = !!C(this.g, 29)
    };

    function Lc(a, b, c) {
        if (!a) throw Error("bad conv util ctor args");
        this.h = a;
        this.g = c
    };

    function Mc(a, b) {
        var c = this;
        this.g = a;
        this.h = b;
        this.g.$ || (this.o = !1, this.l = this.m = this.j = null, !this.g.I || this.g.adbadgeEnabled || this.g.T ? Nc(this) : (a = {
            display: "none"
        }, b = {
            width: "15px",
            height: "15px"
        }, this.g.isMobileDevice ? (J(this.g.u, a), J(this.g.h, a), J(this.g.w, b), J(this.g.C, b)) : J(this.g.C, a)), Oc(this), this.g.enableNativeJakeUi && this.g.enableNativeSurveyLoadIndicator && W(this.g.F, "abgnac"), this.g.isDelegateAttributionActive ? (W(document.body, "goog_delegate_active"), W(document.body, "jaa")) : (!this.g.isMutableImpression && this.g.m && Za(this.g.m), this.m = setTimeout(function() {
            W(document.body, "jar")
        }, this.g.G ? 750 : 100)), this.g.H && W(document.body, "goog_delegate_disabled"), this.g.O && G.addEventListener("load", function() {
            return c.h()
        }), Pc(this))
    }

    function Oc(a) {
        if (a.g.Z) H(a.g.j, "click", O(365, function(c) {
            var d = G.goog_interstitial_display;
            d && (d(c), c && (c.stopPropagation(), c.preventDefault()))
        }));
        else if (a.g.isMutableImpression && a.g.isMobileDevice) H(a.g.j, "click", function() {
            return a.h()
        });
        else if (a.g.isMutableImpression && !a.g.isMobileDevice && a.g.m && H(a.g.m, "click", function() {
                return a.h()
            }), a.g.R) Qc(a);
        else {
            H(a.g.j, "mouseover", O(367, function() {
                return Qc(a)
            }));
            H(a.g.j, "mouseout", O(369, function() {
                return Rc(a, 500)
            }));
            H(a.g.j, "touchstart", O(368, function() {
                return Qc(a)
            }));
            var b = O(370, function() {
                return Rc(a, 4E3)
            });
            H(a.g.j, "mouseup", b);
            H(a.g.j, "touchend", b);
            H(a.g.j, "touchcancel", b);
            a.g.l && H(a.g.l, "click", O(371, function(c) {
                return a.preventDefault(c)
            }))
        }
    }

    function Nc(a) {
        if (a.g.l && a.g.Y) {
            var b = Qa(a.g.g);
            b && null != A(b, 5) && null != A(b, 6) && (a.j = new Lc(B(b, 5, ""), B(b, 6, ""), B(b, 19, "")));
            H(a.g.l, "click", O(452, function() {
                if (!a.o && (a.o = !0, a.j)) {
                    var c = a.j,
                        d = c.h + "&label=closebutton_whythisad_click";
                    d += "&label_instance=1";
                    c.g && (d += "&cid=" + c.g);
                    eb(window, d)
                }
            }))
        }
    }

    function Pc(a) {
        a.g.G && (a.l = new Gc("xcat", "xca-ch"), a.l.m.h.then(function(b) {
            Bc(b, "xca-rdy", function() {
                a.g.A = Pb(a.g.v);
                var c = {
                    abgp: a.g.v.abgp,
                    name: a.g.v.name,
                    abg_href: a.g.B.getAttribute("href"),
                    abg_target: a.g.B.getAttribute("target"),
                    is_mutable_impression: a.g.isMutableImpression,
                    is_mobile: !!a.g.w,
                    is_rtl: a.g.X,
                    has_aria_hidden: "true" === a.g.B.getAttribute("aria-hidden"),
                    serializable_reference_frame_set: Ob(a.g.A)
                };
                b.l("render-xca", c)
            });
            Bc(b, "req-pos-xca", function() {
                a.g.A = Pb(a.g.v);
                var c = {
                    serializable_reference_frame_set: Ob(a.g.A)
                };
                b.l("pos-xca", c)
            });
            Bc(b, "xca-dis", function() {
                clearTimeout(a.m);
                a.m = null;
                W(document.body, "jaa")
            });
            Bc(b, "xca-clk", function() {
                a.g.L.expandAttributionCard();
                b.l("hide-xca", {})
            });
            b.l("chk-xca", {})
        }), Ic(a.l))
    }

    function Sc(a) {
        var b = a.g.F;
        b.style.display = "block";
        a.g.enableNativeJakeUi && a.g.enableNativeSurveyLoadIndicator && window.requestAnimationFrame(function() {
            W(b, "abgacfo")
        })
    }

    function Qc(a) {
        window.clearTimeout(a.g.o);
        a.g.o = null;
        a.g.h && "block" == a.g.h.style.display || (a.g.K = ra(), a.g.u && a.g.h && (a.g.u.style.display = "none", a.g.h.style.display = "block", window.goog_extracreative_attribution && window.postMessage("xca_exp", "*")))
    }

    function Rc(a, b) {
        window.clearTimeout(a.g.o);
        a.g.o = window.setTimeout(function() {
            return Tc(a)
        }, b)
    }

    function Tc(a) {
        window.clearTimeout(a.g.o);
        a.g.o = null;
        a.g.u && a.g.h && (a.g.u.style.display = "block", a.g.h.style.display = "none");
        window.goog_extracreative_attribution && window.postMessage("xca_col", "*")
    }
    Mc.prototype.preventDefault = function(a) {
        if (this.g.h && "block" == this.g.h.style.display && 500 > ra() - this.g.K) E(a);
        else if (this.g.openAttributionInline) {
            var b = this.g.l.getAttribute("href");
            window.adSlot ? window.adSlot.openAttribution(b) && E(a) : window.openAttribution && (window.openAttribution(b), E(a))
        } else this.g.W && (b = this.g.l.getAttribute("href"), window.adSlot ? window.adSlot.openSystemBrowser(b) && E(a) : window.openSystemBrowser && (window.openSystemBrowser(b), E(a)))
    };

    function Uc(a) {
        var b = Vc,
            c = this;
        if (!b) throw Error("bad ctor");
        this.j = b;
        this.h = a;
        this.g = !1;
        Wa("goog_delegate_deferred") ? void 0 !== G.goog_delegate_deferred_token ? Wc(this) : (a = function() {
            Wc(c)
        }, G.goog_delegate_deferred_token = a, setTimeout(a, 5E3)) : Wc(this)
    }

    function Wc(a) {
        if (!a.g && (a.g = !0, G.goog_delegate_deferred_token = void 0, a.h)) {
            var b = a.j;
            a = a.h;
            if (!a) throw Error("bad attrdata");
            a = new Kc(a);
            new b(a)
        }
    };

    function Xc() {
        a: {
            if (bb) try {
                var a = G.google_cafe_host || G.top.google_cafe_host;
                if (a) {
                    var b = a;
                    break a
                }
            } catch (c) {}
            b = "pagead2.googlesyndication.com"
        }
        a = cb ? "https" : "http";k.location && "https:" == k.location.protocol && "http" == a && (a = "https");
        return [a, "://", b, "/pagead/js/r20191003/r20110914/abg_survey.js"].join("")
    };

    function Yc() {
        var a = hc();
        this.promise = a.h;
        this.resolve = a.g
    }

    function Zc(a, b) {
        a.google_llp || (a.google_llp = {});
        a = a.google_llp;
        a[5] || (a[5] = new Yc, b && b());
        return a[5]
    }

    function $c() {
        var a = window,
            b = Xc();
        return Zc(a, function() {
            var c = a.document,
                d = c.createElement("script");
            d.src = Aa(new xa(ya, b, null));
            if (null === n) a: {
                var e = k.document;
                if ((e = e.querySelector && e.querySelector("script[nonce]")) && (e = e.nonce || e.getAttribute("nonce")) && la.test(e)) {
                    n = e;
                    break a
                }
                n = ""
            }(e = n) && d.setAttribute("nonce", e);
            (c = c.getElementsByTagName("script")[0]) && c.parentNode && c.parentNode.insertBefore(d, c)
        }).promise
    };

    function Vc(a) {
        var b = this;
        this.g = a;
        this.h = new Mc(this.g, O(359, function() {
            return ad(b)
        }))
    }

    function ad(a) {
        Gb(N, 373, function() {
            Tc(a.h);
            Sc(a.h)
        });
        window.goog_extracreative_attribution || $c().then(function(b) {
            b.createAttributionCard(a.g);
            a.g.L = b;
            b.expandAttributionCard()
        })
    };

    function bd(a) {
        var b = [a];
        b = void 0 === b ? [] : b;
        k.google_logging_queue || (k.google_logging_queue = []);
        k.google_logging_queue.push([11, b]);
        new Uc(a)
    }
    var X = ["buildAttribution"],
        Y = k;
    X[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + X[0]);
    for (var Z; X.length && (Z = X.shift());) X.length || void 0 === bd ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = bd;
}).call(this);