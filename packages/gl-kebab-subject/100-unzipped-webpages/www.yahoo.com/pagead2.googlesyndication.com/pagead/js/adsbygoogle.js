(function() {
    var l;

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
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }

    function ca(a) {
        if (!(a instanceof Array)) {
            a = ba(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var da = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ea;
    if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
    else {
        var fa;
        a: {
            var ha = {
                    Ka: !0
                },
                ia = {};
            try {
                ia.__proto__ = ha;
                fa = ia.Ka;
                break a
            } catch (a) {}
            fa = !1
        }
        ea = fa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ja = ea;

    function ka(a, b) {
        a.prototype = da(b.prototype);
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
    var la = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        ma = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function na(a, b) {
        if (b) {
            var c = ma;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && la(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    na("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
            void 0 === c && (c = this.length);
            c = Math.max(0, Math.min(c | 0, this.length));
            for (var d = b.length; 0 < d && 0 < c;)
                if (this[--c] != b[--d]) return !1;
            return 0 >= d
        }
    });
    na("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    var pa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    na("Object.assign", function(a) {
        return a || pa
    });
    var p = this || self;

    function qa(a) {
        return "number" == typeof a
    }

    function ra() {
        if (null === sa) a: {
            var a = p.document;
            if ((a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && ta.test(a)) {
                sa = a;
                break a
            }
            sa = ""
        }
        return sa
    }
    var ta = /^[\w+/_-]+[=]{0,2}$/,
        sa = null;

    function ua(a) {
        a = a.split(".");
        for (var b = p, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function va() {}

    function wa(a) {
        a.ha = void 0;
        a.j = function() {
            return a.ha ? a.ha : a.ha = new a
        }
    }

    function xa(a) {
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

    function ya(a) {
        return null === a
    }

    function za(a) {
        return "array" == xa(a)
    }

    function Aa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Ba(a) {
        return a[Ca] || (a[Ca] = ++Da)
    }
    var Ca = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Da = 0;

    function Ea(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Fa(a, b, c) {
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

    function Ga(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ga = Ea : Ga = Fa;
        return Ga.apply(null, arguments)
    }

    function Ha(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function q(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    var Ia = (new Date).getTime();

    function Ja(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ka(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function La(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ma(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Na(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Oa(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Pa(a, b) {
        a: if ("string" === typeof a) a = "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            else {
                for (var c = 0; c < a.length; c++)
                    if (c in a && a[c] === b) {
                        a = c;
                        break a
                    }
                a = -1
            }return 0 <= a
    };

    function Qa() {
        return function() {
            return !ya.apply(this, arguments)
        }
    }

    function Ra(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Sa(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function Ta(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Ua(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Va(a, b) {
        return null !== a && b in a
    }

    function Wa(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };

    function Xa(a, b, c) {
        this.c = a === Ya && b || "";
        this.ca = a === Ya && c || null;
        this.g = Za
    }
    Xa.prototype.b = !0;
    Xa.prototype.a = function() {
        return this.c.toString()
    };

    function $a(a) {
        if (a instanceof Xa && a.constructor === Xa && a.g === Za) return a.c;
        xa(a);
        return "type_error:TrustedResourceUrl"
    }
    var Za = {},
        Ya = {};

    function ab(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    var bb = /&/g,
        cb = /</g,
        db = />/g,
        eb = /"/g,
        fb = /'/g,
        gb = /\x00/g;

    function hb(a, b) {
        return -1 != a.indexOf(b)
    }

    function ib(a, b) {
        var c = 0;
        a = ab(String(a)).split(".");
        b = ab(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = jb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || jb(0 == f[2].length, 0 == g[2].length) || jb(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function jb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function kb(a, b) {
        this.c = a === lb && b || "";
        this.g = mb
    }
    kb.prototype.b = !0;
    kb.prototype.a = function() {
        return this.c.toString()
    };

    function nb(a) {
        if (a instanceof kb && a.constructor === kb && a.g === mb) return a.c;
        xa(a);
        return "type_error:SafeUrl"
    }
    var ob = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        mb = {},
        lb = {};
    var pb;
    a: {
        var qb = p.navigator;
        if (qb) {
            var rb = qb.userAgent;
            if (rb) {
                pb = rb;
                break a
            }
        }
        pb = ""
    }

    function t(a) {
        return hb(pb, a)
    }

    function sb(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };

    function tb() {
        return (t("Chrome") || t("CriOS")) && !t("Edge")
    }

    function ub() {
        function a(e) {
            e = Na(e, d);
            return c[e] || ""
        }
        var b = pb;
        if (t("Trident") || t("MSIE")) return vb(b);
        b = sb(b);
        var c = {};
        Ja(b, function(e) {
            c[e[0]] = e[1]
        });
        var d = Ha(Va, c);
        return t("Opera") ? a(["Version", "Opera"]) : t("Edge") ? a(["Edge"]) : t("Edg/") ? a(["Edg"]) : tb() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
    }

    function vb(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1]) return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                if (a && a[1]) switch (a[1]) {
                    case "4.0":
                        b = "8.0";
                        break;
                    case "5.0":
                        b = "9.0";
                        break;
                    case "6.0":
                        b = "10.0";
                        break;
                    case "7.0":
                        b = "11.0"
                } else b = "7.0";
                else b = c[1];
        return b
    };

    function wb(a, b) {
        a.src = $a(b);
        (b = ra()) && a.setAttribute("nonce", b)
    };
    var xb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        yb = {
            "'": "\\'"
        };

    function zb(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function Ab(a) {
        Ab[" "](a);
        return a
    }
    Ab[" "] = va;

    function w() {}
    var Bb = "function" == typeof Uint8Array;

    function x(a, b, c, d) {
        a.a = null;
        b || (b = []);
        a.F = void 0;
        a.g = -1;
        a.b = b;
        a: {
            if (b = a.b.length) {
                --b;
                var e = a.b[b];
                if (!(null === e || "object" != typeof e || za(e) || Bb && e instanceof Uint8Array)) {
                    a.i = b - a.g;
                    a.c = e;
                    break a
                }
            }
            a.i = Number.MAX_VALUE
        }
        a.s = {};
        if (c)
            for (b = 0; b < c.length; b++) e = c[b], e < a.i ? (e += a.g, a.b[e] = a.b[e] || Cb) : (Db(a), a.c[e] = a.c[e] || Cb);
        if (d && d.length)
            for (b = 0; b < d.length; b++) Eb(a, d[b])
    }
    var Cb = [];

    function Db(a) {
        var b = a.i + a.g;
        a.b[b] || (a.c = a.b[b] = {})
    }

    function y(a, b) {
        if (b < a.i) {
            b += a.g;
            var c = a.b[b];
            return c === Cb ? a.b[b] = [] : c
        }
        if (a.c) return c = a.c[b], c === Cb ? a.c[b] = [] : c
    }

    function Fb(a, b) {
        a = y(a, b);
        return null == a ? a : +a
    }

    function Gb(a, b) {
        a = y(a, b);
        return null == a ? a : !!a
    }

    function z(a, b, c) {
        a = y(a, b);
        return null == a ? c : a
    }

    function Hb(a, b) {
        a = Gb(a, b);
        return null == a ? !1 : a
    }

    function Ib(a, b) {
        a = Fb(a, b);
        return null == a ? 0 : a
    }

    function Jb(a, b, c) {
        b < a.i ? a.b[b + a.g] = c : (Db(a), a.c[b] = c);
        return a
    }

    function Eb(a, b) {
        for (var c, d, e = 0; e < b.length; e++) {
            var f = b[e],
                g = y(a, f);
            null != g && (c = f, d = g, Jb(a, f, void 0))
        }
        return c ? (Jb(a, c, d), c) : 0
    }

    function A(a, b, c) {
        a.a || (a.a = {});
        if (!a.a[c]) {
            var d = y(a, c);
            d && (a.a[c] = new b(d))
        }
        return a.a[c]
    }

    function B(a, b, c) {
        a.a || (a.a = {});
        if (!a.a[c]) {
            for (var d = y(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.a[c] = e
        }
        b = a.a[c];
        b == Cb && (b = a.a[c] = []);
        return b
    }

    function Kb(a) {
        if (a.a)
            for (var b in a.a) {
                var c = a.a[b];
                if (za(c))
                    for (var d = 0; d < c.length; d++) c[d] && Kb(c[d]);
                else c && Kb(c)
            }
        return a.b
    };

    function Lb(a) {
        x(this, a, Mb, null)
    }
    q(Lb, w);

    function Nb(a) {
        x(this, a, null, null)
    }
    q(Nb, w);
    var Mb = [2, 3];

    function Ob(a) {
        x(this, a, null, null)
    }
    q(Ob, w);

    function Pb(a) {
        var b = new Ob;
        return Jb(b, 1, a)
    }

    function Qb(a, b) {
        return Jb(a, 2, b)
    }

    function Rb(a, b) {
        return Jb(a, 3, b)
    }

    function Sb(a, b) {
        return Jb(a, 4, b)
    };
    var Tb = document,
        C = window;
    var Ub = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function Vb(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function Wb() {
        this.a = C.document || {
            cookie: ""
        }
    }
    Wb.prototype.set = function(a, b, c, d, e, f) {
        if ("object" === typeof c) {
            var g = c.c;
            f = c.g;
            e = c.domain;
            d = c.a;
            c = c.b
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === c && (c = -1);
        this.a.cookie = a + "=" + b + (e ? ";domain=" + e : "") + (d ? ";path=" + d : "") + (0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(+new Date + 1E3 * c)).toUTCString()) + (f ? ";secure" : "") + (null != g ? ";samesite=" + g : "")
    };
    Wb.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.a.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = ab(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };

    function Xb(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Yb(a) {
        this.a = a || p.document || document
    }
    Yb.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function Zb(a) {
        $b();
        return new Xa(Ya, a, null)
    }
    var $b = va;

    function ac() {
        return !(t("iPad") || t("Android") && !t("Mobile") || t("Silk")) && (t("iPod") || t("iPhone") || t("Android") || t("IEMobile"))
    };

    function bc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Ab(a.foo);
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

    function cc(a) {
        for (var b = p, c = 0; b && 40 > c++ && (!bc(b) || !a(b));) a: {
            try {
                var d = b.parent;
                if (d && d != b) {
                    b = d;
                    break a
                }
            } catch (e) {}
            b = null
        }
    }

    function dc() {
        var a = p;
        cc(function(b) {
            a = b;
            return !1
        });
        return a
    }

    function ec(a, b) {
        var c = a.createElement("script");
        wb(c, Zb(b));
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function fc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function gc(a, b, c) {
        var d = !1;
        void 0 === c || c || (d = hc());
        return !d && !ic() && (c = Math.random(), c < b) ? (c = jc(p), a[Math.floor(c * a.length)]) : null
    }

    function jc(a) {
        if (!a.crypto) return Math.random();
        try {
            var b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (c) {
            return Math.random()
        }
    }

    function kc(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function lc(a) {
        return Wa(a, function(b, c) {
            return Object.prototype.hasOwnProperty.call(a, c) && !0
        })
    }

    function mc(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var ic = Ra(function() {
        return hb(pb, "Google Web Preview") || 1E-4 > Math.random()
    });

    function nc(a, b) {
        var c = -1;
        try {
            a.localStorage && (c = parseInt(a.localStorage.getItem(b), 10))
        } catch (d) {
            return null
        }
        return 0 <= c && 1E3 > c ? c : null
    }

    function oc(a, b) {
        if (ic()) return null;
        var c = Math.floor(1E3 * jc(a));
        try {
            if (a.localStorage) return a.localStorage.setItem(b, String(c)), c
        } catch (d) {}
        return null
    }
    var hc = Ra(function() {
            return hb(pb, "MSIE")
        }),
        pc = /^([0-9.]+)px$/,
        qc = /^(-?[0-9.]{1,30})$/;

    function rc(a) {
        return qc.test(a) && (a = Number(a), !isNaN(a)) ? a : null
    }

    function sc(a, b) {
        return b ? !/^false$/.test(a) : /^true$/.test(a)
    }

    function D(a) {
        return (a = pc.exec(a)) ? +a[1] : null
    }

    function tc(a) {
        var b = {
            display: "none"
        };
        a.style.setProperty ? kc(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        }) : a.style.cssText = uc(vc(wc(a.style.cssText), xc(b, function(c) {
            return c + " !important"
        })))
    }
    var vc = Object.assign || function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };

    function xc(a, b) {
        var c = {},
            d;
        for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
        return c
    }

    function uc(a) {
        var b = [];
        kc(a, function(c, d) {
            null != c && "" !== c && b.push(d + ":" + c)
        });
        return b.length ? b.join(";") + ";" : ""
    }

    function wc(a) {
        var b = {};
        if (a) {
            var c = /\s*:\s*/;
            Ja((a || "").split(/\s*;\s*/), function(d) {
                if (d) {
                    var e = d.split(c);
                    d = e[0];
                    e = e[1];
                    d && e && (b[d.toLowerCase()] = e)
                }
            })
        }
        return b
    }
    var yc = Ra(function() {
        var a = /Edge\/([^. ]+)/.exec(navigator.userAgent);
        return a ? 18 <= parseInt(a[1], 10) : (a = /Chrome\/([^. ]+)/.exec(navigator.userAgent)) ? 71 <= parseInt(a[1], 10) : (a = /AppleWebKit\/([^. ]+)/.exec(navigator.userAgent)) ? 605 <= parseInt(a[1], 10) : (a = /Firefox\/([^. ]+)/.exec(navigator.userAgent)) ? 64 <= parseInt(a[1], 10) : !1
    });

    function zc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function Ac(a, b) {
        p.google_image_requests || (p.google_image_requests = []);
        var c = p.document.createElement("img");
        if (b) {
            var d = function(e) {
                b && b(e);
                c.removeEventListener && c.removeEventListener("load", d, !1);
                c.removeEventListener && c.removeEventListener("error", d, !1)
            };
            zc(c, "load", d);
            zc(c, "error", d)
        }
        c.src = a;
        p.google_image_requests.push(c)
    };

    function Bc(a, b) {
        a = parseInt(a, 10);
        return isNaN(a) ? b : a
    }
    var Cc = /^([\w-]+\.)*([\w-]{2,})(:[0-9]+)?$/;

    function Dc(a, b) {
        return a ? (a = a.match(Cc)) ? a[0] : b : b
    };

    function Ec() {
        return "r20191003"
    }
    var Fc = sc("false", !1),
        Gc = sc("false", !1),
        Hc = sc("true", !1),
        Ic = sc("true", !1) || !Gc;

    function Jc() {
        return Dc("", "pagead2.googlesyndication.com")
    };

    function Kc(a) {
        x(this, a, Lc, Mc)
    }
    q(Kc, w);
    var Lc = [2, 8],
        Mc = [
            [3, 4, 5],
            [6, 7]
        ];

    function Nc(a) {
        return null != a ? !a : a
    }

    function Oc(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d].call();
            if (e == b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function Pc(a, b) {
        var c = B(a, Kc, 2);
        if (!c.length) return Qc(a, b);
        a = z(a, 1, 0);
        if (1 == a) return Nc(Pc(c[0], b));
        c = La(c, function(d) {
            return function() {
                return Pc(d, b)
            }
        });
        switch (a) {
            case 2:
                return Oc(c, !1);
            case 3:
                return Oc(c, !0)
        }
    }

    function Qc(a, b) {
        var c = Eb(a, Mc[0]);
        a: {
            switch (c) {
                case 3:
                    var d = z(a, 3, 0);
                    break a;
                case 4:
                    d = z(a, 4, 0);
                    break a;
                case 5:
                    d = z(a, 5, 0);
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, y(a, 8))
            } catch (f) {
                return
            }
            b = z(a, 1, 0);
            if (4 == b) return !!e;
            d = null != e;
            if (5 == b) return d;
            if (12 == b) a = z(a, 7, "");
            else a: {
                switch (c) {
                    case 4:
                        a = Ib(a, 6);
                        break a;
                    case 5:
                        a = z(a, 7, "");
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 == b) return e === a;
                if (9 == b) return 0 == ib(e, a);
                if (d) switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e > a;
                    case 12:
                        return (new RegExp(a)).test(e);
                    case 10:
                        return -1 == ib(e, a);
                    case 11:
                        return 1 == ib(e, a)
                }
            }
        }
    }

    function Rc(a, b) {
        return !a || !(!b || !Pc(a, b))
    };

    function Sc(a) {
        x(this, a, Tc, null)
    }
    q(Sc, w);
    var Tc = [4];

    function Uc(a) {
        x(this, a, Vc, Wc)
    }
    q(Uc, w);

    function Xc(a) {
        x(this, a, null, null)
    }
    q(Xc, w);
    var Vc = [5],
        Wc = [
            [1, 2, 3, 6]
        ];

    function Yc() {
        var a = {};
        this.a = (a[3] = {}, a[4] = {}, a[5] = {}, a)
    }
    wa(Yc);
    var Zc = sc("false", !1);

    function $c(a, b) {
        switch (b) {
            case 1:
                return z(a, 1, 0);
            case 2:
                return z(a, 2, 0);
            case 3:
                return z(a, 3, 0);
            case 6:
                return z(a, 6, 0);
            default:
                return null
        }
    }

    function ad(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return Hb(a, 1);
            case 2:
                return Ib(a, 2);
            case 3:
                return z(a, 3, "");
            case 6:
                return y(a, 4);
            default:
                return null
        }
    }
    var bd = Ra(function() {
        if (!Zc) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function cd(a, b, c) {
        var d = bd();
        if (d[a] && null != d[a][b]) return d[a][b];
        b = dd.j().a[a][b];
        if (!b) return c;
        b = new Uc(b);
        b = ed(b);
        a = ad(b, a);
        return null != a ? a : c
    }

    function ed(a) {
        var b = Yc.j().a;
        if (b) {
            var c = Oa(B(a, Xc, 5), function(d) {
                return Rc(A(d, Kc, 1), b)
            });
            if (c) return A(c, Sc, 2)
        }
        return A(a, Sc, 4)
    }

    function dd() {
        var a = {};
        this.a = (a[1] = {}, a[2] = {}, a[3] = {}, a[6] = {}, a)
    }
    wa(dd);

    function fd(a, b) {
        return !!cd(1, a, void 0 === b ? !1 : b)
    }

    function gd(a, b) {
        b = void 0 === b ? 0 : b;
        a = Number(cd(2, a, b));
        return isNaN(a) ? b : a
    }

    function hd(a, b) {
        return cd(3, a, void 0 === b ? "" : b)
    }

    function id(a, b) {
        b = void 0 === b ? [] : b;
        return cd(6, a, b)
    }

    function jd(a) {
        var b = dd.j().a;
        Ja(a, function(c) {
            var d = Eb(c, Wc[0]),
                e = $c(c, d);
            e && (b[d][e] = Kb(c))
        })
    }

    function kd(a) {
        var b = dd.j().a;
        Ja(a, function(c) {
            var d = new Uc(c),
                e = Eb(d, Wc[0]);
            (d = $c(d, e)) && (b[e][d] || (b[e][d] = c))
        })
    };

    function E(a) {
        this.a = a
    }
    var ld = new E(1),
        md = new E(2),
        nd = new E(3),
        od = new E(4),
        pd = new E(5),
        qd = new E(6),
        rd = new E(7),
        sd = new E(8),
        td = new E(9),
        ud = new E(10),
        vd = new E(11),
        wd = new E(12),
        xd = new E(13),
        yd = new E(14);

    function F(a, b, c) {
        c.hasOwnProperty(a.a) || Object.defineProperty(c, String(a.a), {
            value: b
        })
    }

    function zd(a, b, c) {
        return b[a.a] || c || function() {}
    }

    function Ad(a) {
        F(pd, fd, a);
        F(qd, gd, a);
        F(rd, hd, a);
        F(sd, id, a);
        F(xd, kd, a)
    }

    function Bd(a) {
        F(od, function(b) {
            Yc.j().a = b
        }, a);
        F(td, function(b, c) {
            var d = Yc.j();
            d.a[3][b] || (d.a[3][b] = c)
        }, a);
        F(ud, function(b, c) {
            var d = Yc.j();
            d.a[4][b] || (d.a[4][b] = c)
        }, a);
        F(vd, function(b, c) {
            var d = Yc.j();
            d.a[5][b] || (d.a[5][b] = c)
        }, a);
        F(yd, function(b) {
            for (var c = Yc.j(), d = ba([3, 4, 5]), e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                e = void 0;
                var g = c.a[f];
                f = b[f];
                for (e in f) g[e] = f[e]
            }
        }, a)
    }

    function Cd(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function Dd() {
        this.a = function() {
            return !1
        }
    }
    wa(Dd);

    function G(a) {
        var b = void 0 === b ? !1 : b;
        return Dd.j().a(a, b)
    };

    function Ed(a) {
        a = void 0 === a ? p : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function Fd(a) {
        return (a = a || Ed()) ? bc(a.master) ? a.master : null : null
    };

    function Gd(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Hd(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function Id(a) {
        a = Fd(Ed(a)) || a;
        a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
    }

    function Jd(a) {
        a = Fd(Ed(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }
    var Kd = !!window.google_async_iframe_id,
        Ld = Kd && window.parent || window;

    function Md() {
        if (Kd && !bc(Ld)) {
            var a = "." + Tb.domain;
            try {
                for (; 2 < a.split(".").length && !bc(Ld);) Tb.domain = a = a.substr(a.indexOf(".") + 1), Ld = window.parent
            } catch (b) {}
            bc(Ld) || (Ld = window)
        }
        return Ld
    }
    var Nd = /(^| )adsbygoogle($| )/;

    function Od(a) {
        return Fc && a.google_top_window || a.top
    }

    function Pd(a) {
        a = Od(a);
        return bc(a) ? a : null
    };

    function I(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function J(a, b) {
        a: if (a = I(a).eids || [], a.indexOf) b = a.indexOf(b), b = 0 < b || 0 === b;
            else {
                for (var c = 0; c < a.length; c++)
                    if (a[c] === b) {
                        b = !0;
                        break a
                    }
                b = !1
            }return b
    }

    function Qd(a, b) {
        a = I(a);
        a.tag_partners = a.tag_partners || [];
        a.tag_partners.push(b)
    }

    function Rd(a) {
        I(C).allow_second_reactive_tag = a
    }

    function Sd(a, b, c) {
        for (var d = 0; d < a.length; ++d)
            if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c) return a[d];
        return null
    };
    var Td = {},
        Ud = (Td.google_ad_client = !0, Td.google_ad_host = !0, Td.google_ad_host_channel = !0, Td.google_adtest = !0, Td.google_tag_for_child_directed_treatment = !0, Td.google_tag_for_under_age_of_consent = !0, Td.google_tag_partner = !0, Td);

    function K(a) {
        x(this, a, Vd, null)
    }
    q(K, w);
    var Vd = [4];
    K.prototype.X = function() {
        return y(this, 3)
    };

    function L(a) {
        x(this, a, null, null)
    }
    q(L, w);

    function Wd(a) {
        x(this, a, null, Xd)
    }
    q(Wd, w);

    function Yd(a) {
        x(this, a, null, null)
    }
    q(Yd, w);

    function Zd(a) {
        x(this, a, null, null)
    }
    q(Zd, w);

    function $d(a) {
        x(this, a, null, null)
    }
    q($d, w);
    var Xd = [
        [1, 2, 3]
    ];

    function ae(a) {
        x(this, a, null, null)
    }
    q(ae, w);

    function be(a) {
        x(this, a, null, null)
    }
    q(be, w);

    function ce(a) {
        x(this, a, de, null)
    }
    q(ce, w);
    var de = [6, 7, 9, 10, 11];

    function ee(a) {
        x(this, a, fe, null)
    }
    q(ee, w);

    function ge(a) {
        x(this, a, null, null)
    }
    q(ge, w);

    function he(a) {
        x(this, a, ie, null)
    }
    q(he, w);

    function je(a) {
        x(this, a, null, null)
    }
    q(je, w);

    function ke(a) {
        x(this, a, null, null)
    }
    q(ke, w);

    function le(a) {
        x(this, a, null, null)
    }
    q(le, w);

    function me(a) {
        x(this, a, null, null)
    }
    q(me, w);
    var fe = [1, 2, 5, 7],
        ie = [2, 5, 6];
    var ne = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6
    };

    function oe(a, b) {
        a = a.replace(/(^\/)|(\/$)/g, "");
        var c = mc(a),
            d = pe(a);
        return b.find(function(e) {
            var f = null != y(e, 7) ? y(A(e, je, 7), 1) : y(e, 1);
            e = null != y(e, 7) ? y(A(e, je, 7), 2) : 2;
            if (!qa(f)) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function pe(a) {
        for (var b = {};;) {
            b[mc(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };

    function qe(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }

    function re(a) {
        return !!(a.error && a.meta && a.id)
    };
    var se = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function te(a, b) {
        this.a = a;
        this.b = b
    }

    function ue(a, b, c) {
        this.url = a;
        this.a = b;
        this.sa = !!c;
        this.depth = null
    };

    function ve() {
        this.c = "&";
        this.g = !1;
        this.b = {};
        this.i = 0;
        this.a = []
    }

    function we(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function xe(a, b, c, d, e) {
        var f = [];
        kc(a, function(g, h) {
            (g = ye(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function ye(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(ye(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(xe(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function ze(a, b, c, d) {
        a.a.push(b);
        a.b[b] = we(c, d)
    }

    function Ae(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Be(a) - c.length;
        if (0 > d) return "";
        a.a.sort(function(m, u) {
            return m - u
        });
        c = null;
        for (var e = "", f = 0; f < a.a.length; f++)
            for (var g = a.a[f], h = a.b[g], k = 0; k < h.length; k++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var n = xe(h[k], a.c, ",$");
                if (n) {
                    n = e + n;
                    if (d >= n.length) {
                        d -= n.length;
                        b += n;
                        e = a.c;
                        break
                    }
                    a.g && (e = d, n[e - 1] == a.c && --e, b += n.substr(0, e), e = a.c, d = 0);
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }

    function Be(a) {
        var b = 1,
            c;
        for (c in a.b) b = c.length > b ? c.length : b;
        return 3997 - b - a.c.length - 1
    };

    function Ce() {
        var a = void 0 === a ? C : a;
        this.b = "http:" === a.location.protocol ? "http:" : "https:";
        this.a = Math.random()
    }

    function De() {
        var a = Ee,
            b = Fe.google_srt;
        0 <= b && 1 >= b && (a.a = b)
    }

    function Ge(a, b, c, d, e, f) {
        if ((d ? a.a : Math.random()) < (e || .01)) try {
            if (c instanceof ve) var g = c;
            else g = new ve, kc(c, function(k, n) {
                var m = g,
                    u = m.i++;
                k = we(n, k);
                m.a.push(u);
                m.b[u] = k
            });
            var h = Ae(g, a.b, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" === typeof f ? Ac(h, null) : Ac(h, void 0 === f ? null : f))
        } catch (k) {}
    };

    function He(a, b) {
        this.start = a < b ? a : b;
        this.a = a < b ? b : a
    };

    function Ie(a, b, c) {
        this.b = b >= a ? new He(a, b) : null;
        this.a = c
    }

    function Ke(a, b) {
        b = void 0 === b ? 0 : b;
        b = 0 != b ? "google_experiment_mod" + b : "google_experiment_mod";
        var c = nc(a, b);
        return null != c ? c : oc(a, b)
    };
    var Le = null;

    function Me() {
        if (null === Le) {
            Le = "";
            try {
                var a = "";
                try {
                    a = p.top.location.hash
                } catch (c) {
                    a = p.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Le = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Le
    };

    function Ne() {
        var a = p.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
    }

    function Oe() {
        var a = void 0 === a ? p : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Pe(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var Qe = p.performance,
        Re = !!(Qe && Qe.mark && Qe.measure && Qe.clearMarks),
        Se = Ra(function() {
            var a;
            if (a = Re) a = Me(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function Te() {
        var a = Fe;
        this.b = [];
        this.c = a || p;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.b = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.a = Se() || (null != b ? b : 1 > Math.random())
    }

    function Ue(a) {
        a && Qe && Se() && (Qe.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Qe.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Te.prototype.start = function(a, b) {
        if (!this.a) return null;
        var c = Oe() || Ne();
        a = new Pe(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Qe && Se() && Qe.mark(b);
        return a
    };

    function Ve() {
        var a = We;
        this.s = Ee;
        this.c = !0;
        this.b = null;
        this.i = this.M;
        this.a = void 0 === a ? null : a;
        this.g = !1
    }
    l = Ve.prototype;
    l.Ca = function(a) {
        this.i = a
    };
    l.ia = function(a) {
        this.b = a
    };
    l.Da = function(a) {
        this.c = a
    };
    l.Ea = function(a) {
        this.g = a
    };
    l.aa = function(a, b, c) {
        try {
            if (this.a && this.a.a) {
                var d = this.a.start(a.toString(), 3);
                var e = b();
                var f = this.a;
                b = d;
                if (f.a && "number" === typeof b.value) {
                    var g = Oe() || Ne();
                    b.duration = g - b.value;
                    var h = "goog_" + b.label + "_" + b.uniqueId + "_end";
                    Qe && Se() && Qe.mark(h);
                    !f.a || 2048 < f.b.length || f.b.push(b)
                }
            } else e = b()
        } catch (k) {
            f = this.c;
            try {
                Ue(d), f = this.i(a, new qe(k, {
                    message: Xe(k)
                }), void 0, c)
            } catch (n) {
                this.M(217, n)
            }
            if (!f) throw k;
        }
        return e
    };
    l.xa = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return e.aa(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    l.M = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new ve;
            f.g = !0;
            ze(f, 1, "context", a);
            re(b) || (b = new qe(b, {
                message: Xe(b)
            }));
            b.msg && ze(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.b) try {
                this.b(g)
            } catch (oa) {}
            if (d) try {
                d(g)
            } catch (oa) {}
            b = [g];
            f.a.push(3);
            f.b[3] = b;
            d = p;
            b = [];
            g = null;
            do {
                var h = d;
                if (bc(h)) {
                    var k = h.location.href;
                    g = h.document && h.document.referrer || null
                } else k = g, g = null;
                b.push(new ue(k || "", h));
                try {
                    d = h.parent
                } catch (oa) {
                    d = null
                }
            } while (d && h != d);
            k = 0;
            for (var n = b.length - 1; k <= n; ++k) b[k].depth = n - k;
            h = p;
            if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1)
                for (n = 1; n < b.length; ++n) {
                    var m = b[n];
                    m.url || (m.url = h.location.ancestorOrigins[n - 1] || "", m.sa = !0)
                }
            var u = new ue(p.location.href, p, !1);
            h = null;
            var r = b.length - 1;
            for (m = r; 0 <= m; --m) {
                var v = b[m];
                !h && se.test(v.url) && (h = v);
                if (v.url && !v.sa) {
                    u = v;
                    break
                }
            }
            v = null;
            var H = b.length && b[r].url;
            0 != u.depth && H && (v = b[r]);
            var T = new te(u, v);
            T.b && ze(f, 4, "top", T.b.url || "");
            ze(f, 5, "url", T.a.url || "");
            Ge(this.s, e, f, this.g, c)
        } catch (oa) {
            try {
                Ge(this.s, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Xe(oa),
                    url: T && T.a.url
                }, this.g, c)
            } catch (Je) {}
        }
        return this.c
    };

    function Xe(a) {
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

    function M(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, M) : this.stack = Error().stack || ""
    }
    ka(M, Error);

    function Ye() {
        this.b = !1;
        this.a = null;
        this.g = !1;
        this.i = Math.random();
        this.c = this.M
    }
    l = Ye.prototype;
    l.ia = function(a) {
        this.a = a
    };
    l.Da = function(a) {
        this.b = a
    };
    l.Ea = function(a) {
        this.g = a
    };
    l.Ca = function(a) {
        this.c = a
    };
    l.M = function(a, b, c, d, e) {
        if ((this.g ? this.i : Math.random()) > (void 0 === c ? .01 : c)) return this.b;
        re(b) || (b = new qe(b, {
            context: a,
            id: void 0 === e ? "jserror" : e
        }));
        if (d || this.a) b.meta = {}, this.a && this.a(b.meta), d && d(b.meta);
        p.google_js_errors = p.google_js_errors || [];
        p.google_js_errors.push(b);
        p.error_rep_loaded || (ec(p.document, p.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js"), p.error_rep_loaded = !0);
        return this.b
    };
    l.aa = function(a, b, c) {
        try {
            var d = b()
        } catch (e) {
            if (!this.c(a, e, .01, c, "jserror")) throw e;
        }
        return d
    };
    l.xa = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return e.aa(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    var Ee, Ze, $e, Fe = Md(),
        We = new Te;

    function af(a) {
        null != a && (Fe.google_measure_js_timing = a);
        Fe.google_measure_js_timing || (a = We, a.a = !1, a.b != a.c.google_js_reporting_queue && (Se() && Ja(a.b, Ue), a.b.length = 0))
    }

    function bf(a) {
        var b = C.jerExpIds;
        if (za(b) && 0 !== b.length) {
            var c = a.eid;
            if (c) {
                b = ca(c.split(",")).concat(ca(b));
                c = {};
                for (var d = 0, e = 0; e < b.length;) {
                    var f = b[e++];
                    var g = f;
                    g = Aa(g) ? "o" + Ba(g) : (typeof g).charAt(0) + g;
                    Object.prototype.hasOwnProperty.call(c, g) || (c[g] = !0, b[d++] = f)
                }
                b.length = d;
                a.eid = b.join(",")
            } else a.eid = b.join(",")
        }
    }

    function cf(a) {
        var b = C.jerUserAgent;
        b && (a.useragent = b)
    }(function() {
        Ee = new Ce;
        "number" !== typeof Fe.google_srt && (Fe.google_srt = Math.random());
        De();
        Ze = new Ve;
        Ze.ia(function(b) {
            bf(b);
            $e && (b.jc = $e);
            cf(b)
        });
        Ze.Ea(!0);
        "complete" == Fe.document.readyState ? af() : We.a && zc(Fe, "load", function() {
            af()
        });
        var a = Tb.currentScript;
        $e = a ? a.dataset.jc : ""
    })();

    function df() {
        var a = [ef, ff];
        Ze.ia(function(b) {
            Ja(a, function(c) {
                c(b)
            });
            bf(b);
            $e && (b.jc = $e);
            cf(b)
        })
    }

    function gf(a, b, c) {
        return Ze.aa(a, b, c)
    }

    function hf(a, b) {
        return Ze.xa(a, b, void 0, void 0)
    }

    function jf(a, b, c) {
        Ge(Ee, a, b, !0, c, void 0)
    }

    function kf(a, b, c, d) {
        return 0 == (re(b) ? b.msg || Xe(b.error) : Xe(b)).indexOf("TagError") ? (c = b instanceof qe ? b.error : b, c.pbr || (c.pbr = !0, Ze.M(a, b, .1, d, "puberror")), !1) : Ze.M(a, b, c, d)
    }

    function lf(a) {
        jf("rmvasft", {
            code: "ldr",
            branch: a ? "exp" : "cntr"
        })
    };

    function mf(a, b) {
        this.pa = a;
        this.ya = b
    }

    function nf(a) {
        var b = [].slice.call(arguments).filter(Qa());
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function(e) {
            c = c.concat(e.pa || []);
            d = Object.assign(d, e.ya)
        });
        return new mf(c, d)
    }

    function of (a) {
        switch (a) {
            case 1:
                return new mf(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new mf(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new mf(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new mf(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    };
    var pf = new mf(["google-auto-placed"], {
        google_tag_origin: "qs"
    });
    var qf = {},
        rf = (qf.google_ad_channel = !0, qf.google_ad_host = !0, qf);

    function sf(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        jf("ama", b, .01)
    }

    function tf(a) {
        var b = {};
        kc(rf, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };
    var uf = Bc("2019", 2012);

    function vf(a, b, c) {
        c || (c = Ic ? "https" : "http");
        p.location && "https:" == p.location.protocol && "http" == c && (c = "https");
        return [c, "://", a, b].join("")
    }

    function wf(a, b, c) {
        a = vf(a, b, c);
        G(182) && 2012 < uf && (a = a.replace(new RegExp(".js".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), ("_fy" + uf + ".js").replace(/\$/g, "$$$$")));
        G(202) && (a += (0 < a.indexOf("?") ? "&" : "?") + "cache=bust");
        return a
    };
    var xf = null;

    function yf() {
        if (!Fc) return !1;
        if (null != xf) return xf;
        xf = !1;
        try {
            var a = Pd(p);
            a && -1 != a.location.hash.indexOf("google_logging") && (xf = !0);
            p.localStorage.getItem("google_logging") && (xf = !0)
        } catch (b) {}
        return xf
    }

    function zf(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        p.google_logging_queue || (c = !0, p.google_logging_queue = []);
        p.google_logging_queue.push([a, b]);
        c && yf() && (a = wf(Jc(), "/pagead/js/logging_library.js"), ec(p.document, a))
    };

    function Af(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c
    }

    function Bf(a, b, c) {
        return {
            top: a.b - c,
            right: a.a + a.c + b,
            bottom: a.b + c,
            left: a.a - b
        }
    };

    function Cf(a) {
        x(this, a, null, null)
    }
    q(Cf, w);

    function Df(a) {
        x(this, a, null, null)
    }
    q(Df, w);

    function Ef(a) {
        x(this, a, null, null)
    }
    q(Ef, w);

    function Ff(a) {
        x(this, a, Gf, null)
    }
    q(Ff, w);
    var Gf = [5];

    function Hf(a) {
        try {
            var b = a.localStorage.getItem("google_ama_settings");
            return b ? new Ff(b ? JSON.parse(b) : null) : null
        } catch (c) {
            return null
        }
    };

    function If() {
        this.a = {};
        this.b = {}
    }
    If.prototype.set = function(a, b) {
        this.a[a] = b;
        this.b[a] = a
    };
    If.prototype.get = function(a, b) {
        return void 0 !== this.a[a] ? this.a[a] : b
    };
    var Jf = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function Kf() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.isReactiveTagFirstOnPage = this.wasReactiveAdConfigHandlerRegistered = this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.adRegion = null;
        this.improveCollisionDetection = 1;
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new Lf
    }

    function Mf(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new Lf) : a.google_reactive_ads_global_state = new Kf;
        return a.google_reactive_ads_global_state
    }

    function Lf() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };

    function Nf(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function N(a) {
        return Nf(a).clientWidth
    };

    function Of(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = D(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    function Pf(a, b) {
        return !((qc.test(b.google_ad_width) || pc.test(a.style.width)) && (qc.test(b.google_ad_height) || pc.test(a.style.height)))
    }

    function Qf(a, b) {
        return (a = Rf(a, b)) ? a.y : 0
    }

    function Rf(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (e) {
            return null
        }
    }

    function Sf(a, b) {
        do {
            var c = fc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    }

    function Tf(a) {
        var b = 0,
            c;
        for (c in Jf) - 1 != a.indexOf(c) && (b |= Jf[c]);
        return b
    }

    function Uf(a, b, c, d, e) {
        if (Od(a) != a) return Pd(a) ? 3 : 16;
        if (!(488 > N(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = N(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = N(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = fc(b, a)) && (e = D(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function Vf(a, b, c, d) {
        var e = Uf(b, c, a, .3, d);
        if (!0 !== e) return e;
        e = N(b);
        a = e - a;
        a = e && 0 <= a ? !0 : e ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10;
        return "true" == d.google_full_width_responsive || Sf(c, b) ? a : 9
    }

    function Wf(a, b, c) {
        "rtl" == b ? a.style.marginRight = c : a.style.marginLeft = c
    }

    function Xf(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = fc(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function Yf(a, b, c) {
        a = Rf(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function Zf(a, b, c, d, e, f) {
        if (G(189) || a.location && "#hffwroe2etoh" == a.location.hash) {
            if (e = (e = b.parentElement) ? (e = fc(e, a)) ? e.direction : "" : "", e) {
                Wf(b, e, "0px");
                b.style.width = N(a) + "px";
                if (0 !== Yf(a, b, e)) {
                    Wf(b, e, "0px");
                    var g = Yf(a, b, e);
                    Wf(b, e, -1 * g + "px");
                    a = Yf(a, b, e);
                    0 !== a && a !== g && Wf(b, e, g / (a - g) * g + "px")
                }
                b.style.zIndex = 30;
                G(224) && (b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = "none", b.style.borderSpacing = b.style.padding = "0")
            }
        } else if (a = fc(c, a)) {
            g = D(a.paddingLeft) || 0;
            a = a.direction;
            d = e - d;
            if (f.google_ad_resize) g = -1 * (d + g) + "px";
            else {
                for (var h = f = 0; 100 > h && c; h++) f += c.offsetLeft + c.clientLeft - c.scrollLeft, c = c.offsetParent;
                g = f + g;
                g = "rtl" == a ? -1 * (d - g) + "px" : -1 * g + "px"
            }
            Wf(b, a, g);
            b.style.width = e + "px";
            b.style.zIndex = 30
        }
    };

    function O(a, b) {
        this.b = a;
        this.a = b
    }
    l = O.prototype;
    l.minWidth = function() {
        return this.b
    };
    l.height = function() {
        return this.a
    };
    l.L = function(a) {
        return 300 < a && 300 < this.a ? this.b : Math.min(1200, Math.round(a))
    };
    l.fa = function(a) {
        return this.L(a) + "x" + this.height()
    };
    l.Z = function() {};

    function P(a, b, c, d) {
        d = void 0 === d ? function(f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = fc(a, b)) && e[c] && d(e[c]) || null
    }

    function $f(a) {
        return function(b) {
            return b.minWidth() <= a
        }
    }

    function ag(a, b, c, d) {
        var e = a && bg(c, b),
            f = cg(b, d);
        return function(g) {
            return !(e && g.height() >= f)
        }
    }

    function dg(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function bg(a, b) {
        return Qf(a, b) < Nf(b).clientHeight - 100
    }

    function eg(a, b) {
        a = Qf(a, b);
        b = Nf(b).clientHeight;
        return 0 == b ? null : a / b
    }

    function fg(a, b) {
        var c = P(b, a, "height", D);
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = P(b, a, "height", D);
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && D(b.style.height)) && (c = Math.min(c, d)), (d = P(b, a, "maxHeight", D)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function cg(a, b) {
        var c = a.google_unique_id;
        return b && 0 == ("number" === typeof c ? c : 0) ? Math.max(250, 2 * Nf(a).clientHeight / 3) : 250
    };

    function gg(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };

    function hg(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    };

    function ig(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = zb(d.eb);
            a[e] = d.value
        }
    };
    var jg = null;

    function kg() {
        if (!jg) {
            for (var a = p, b = a, c = 0; a && a != a.parent;)
                if (a = a.parent, c++, bc(a)) b = a;
                else break;
            jg = b
        }
        return jg
    };

    function lg(a, b, c, d) {
        this.g = a;
        this.b = b;
        this.c = c;
        this.a = d
    }

    function mg(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.g)
        } catch (g) {}
        if (!c.length) return [];
        b = c;
        c = b.length;
        if (0 < c) {
            for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
            b = d
        } else b = [];
        b = ng(a, b);
        qa(a.b) && (c = a.b, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if (qa(a.c)) {
            c = [];
            for (d = 0; d < b.length; d++) {
                e = og(b[d]);
                var f = a.c;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    lg.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.g,
            occurrenceIndex: this.b,
            paragraphIndex: this.c,
            ignoreMode: this.a
        })
    };

    function ng(a, b) {
        if (null == a.a) return b;
        switch (a.a) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.a);
        }
    }

    function og(a) {
        var b = [];
        gg(a.getElementsByTagName("p"), function(c) {
            100 <= pg(c) && b.push(c)
        });
        return b
    }

    function pg(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        gg(a.childNodes, function(c) {
            b += pg(c)
        });
        return b
    }

    function qg(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };

    function rg(a) {
        if (!a) return null;
        var b = y(a, 7);
        if (y(a, 1) || a.X() || 0 < y(a, 4).length) {
            var c = a.X(),
                d = y(a, 1),
                e = y(a, 4);
            b = y(a, 2);
            var f = y(a, 5);
            a = sg(y(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + qg(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + qg(e[c]);
            b = (e = g) ? new lg(e, b, f, a) : null
        } else b = b ? new lg(b, y(a, 2), y(a, 5), sg(y(a, 6))) : null;
        return b
    }
    var tg = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function sg(a) {
        return null != a ? tg[a] : a
    }
    var ug = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function vg() {
        this.a = {};
        this.b = {}
    }
    vg.prototype.add = function(a) {
        this.a[a] = !0;
        this.b[a] = a
    };
    vg.prototype.contains = function(a) {
        return !!this.a[a]
    };

    function wg() {
        this.a = new If
    }
    wg.prototype.set = function(a, b) {
        var c = this.a.get(a);
        c || (c = new vg, this.a.set(a, c));
        c.add(b)
    };

    function xg(a, b) {
        function c() {
            d.push({
                anchor: e.anchor,
                position: e.position
            });
            return e.anchor == b.anchor && e.position == b.position
        }
        for (var d = [], e = a; e;) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d;
                    if (e.anchor.firstChild) {
                        e = {
                            anchor: e.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d
            }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                e = {
                    anchor: e.anchor.parentNode,
                    position: 3
                };
                if (c()) return d;
                e.position = 4;
                if (c()) return d
            }
            e && e.anchor.nextSibling ? e = {
                anchor: e.anchor.nextSibling,
                position: 1
            } : e = null
        }
        return d
    };

    function yg(a, b) {
        this.b = a;
        this.a = b
    }

    function zg(a, b) {
        var c = new wg,
            d = new vg;
        b.forEach(function(e) {
            if (A(e, Yd, 1)) {
                e = A(e, Yd, 1);
                if (A(e, L, 1) && A(A(e, L, 1), K, 1) && A(e, L, 2) && A(A(e, L, 2), K, 1)) {
                    var f = Ag(a, A(A(e, L, 1), K, 1)),
                        g = Ag(a, A(A(e, L, 2), K, 1));
                    if (f && g)
                        for (f = ba(xg({
                                anchor: f,
                                position: y(A(e, L, 1), 2)
                            }, {
                                anchor: g,
                                position: y(A(e, L, 2), 2)
                            })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(Ba(g.anchor), g.position)
                }
                A(e, L, 3) && A(A(e, L, 3), K, 1) && (f = Ag(a, A(A(e, L, 3), K, 1))) && c.set(Ba(f), y(A(e, L, 3), 2))
            } else A(e, Zd, 2) ? Bg(a, A(e, Zd, 2), c) : A(e, $d, 3) && Cg(a, A(e, $d, 3), d)
        });
        return new yg(c, d)
    }

    function Bg(a, b, c) {
        A(b, K, 1) && (a = Dg(a, A(b, K, 1))) && a.forEach(function(d) {
            d = Ba(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function Cg(a, b, c) {
        A(b, K, 1) && (a = Dg(a, A(b, K, 1))) && a.forEach(function(d) {
            c.add(Ba(d))
        })
    }

    function Ag(a, b) {
        return (a = Dg(a, b)) && 0 < a.length ? a[0] : null
    }

    function Dg(a, b) {
        return (b = rg(b)) ? mg(b, a) : null
    };

    function Eg(a, b, c) {
        var d = Bf(c, b + 1, b + 1);
        return !Ma(a, function(e) {
            return e.left < d.right && d.left < e.right && e.top < d.bottom && d.top < e.bottom
        })
    };

    function Fg(a, b) {
        if (!a) return !1;
        a = fc(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function Gg(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Hg(a) {
        return !!a.nextSibling || !!a.parentNode && Hg(a.parentNode)
    };

    function Ig(a, b) {
        return a && null != y(a, 4) && b[y(A(a, be, 4), 2)] ? !1 : !0
    }

    function Jg(a) {
        var b = {};
        a && y(a, 6).forEach(function(c) {
            b[c] = !0
        });
        return b
    }

    function Kg(a, b, c, d) {
        this.a = p;
        this.$ = a;
        this.b = b;
        this.i = d || null;
        this.s = (this.F = c) ? zg(p.document, B(c, Wd, 5)) : zg(p.document, []);
        this.c = 0;
        this.g = !1
    }

    function Lg(a, b) {
        if (a.g) return !0;
        a.g = !0;
        var c = B(a.b, ce, 1);
        a.c = 0;
        var d = Jg(a.F),
            e;
        if (e = A(a.b, me, 15) && Hb(A(a.b, me, 15), 12)) a: {
            e = Hf(a.a);e = null === e ? null : B(e, Ef, 5);
            var f = Hf(a.a);
            var g = null != f ? A(f, Cf, 6) || null : null;
            if (null == e) e = !1;
            else {
                var h = .3,
                    k = f = 4;
                g && (h = Fb(g, 2) || h, f = y(g, 1) || f, k = y(g, 3) || k);
                g = h;
                h = Hf(a.a);
                h = null !== h && null != y(h, 4) ? Fb(h, 4) : 1;
                g -= h;
                h = [];
                for (var n = 0; n < e.length; n++) {
                    if (.05 > g || (Mg(a).numAutoAdsPlaced || 0) >= f) {
                        e = !0;
                        break a
                    }
                    var m = y(e[n], 1);
                    if (null == m) break;
                    var u = c[m],
                        r = A(e[n], Df, 2);
                    null != r && null != Fb(r, 1) && null != Fb(r, 2) && null != Fb(r, 3) && (r = new Af(Fb(r, 1), Fb(r, 2), Fb(r, 3)), Eg(h, k, r) && (m = Ng(a, u, m, b, d, !1), null != m && null != m.V && (m = m.V.getBoundingClientRect(), h.push(m), u = a.a, g -= m.width * m.height / (Nf(u).clientHeight * N(u)))))
                }
                e = 0 < (Mg(a).numAutoAdsPlaced || 0)
            }
        }
        if (e) return !0;
        e = Hf(a.a);
        if (null !== e && Hb(e, 2)) return Mg(a).eatf = !0, zf(7, [!0, 0, !1]), !0;
        for (e = 0; e < c.length; e++)
            if (Ng(a, c[e], e, b, d, !0)) return !0;
        zf(7, [!1, a.c, !1]);
        return !1
    }

    function Ng(a, b, c, d, e, f) {
        if (1 !== y(b, 8) || !Ig(b, e)) return null;
        var g = A(b, be, 4);
        if (!f || g && 2 == y(g, 1)) {
            a.c++;
            if (b = Og(a, b, d, e)) d = Mg(a), d.placement = c, d.numAutoAdsPlaced || (d.numAutoAdsPlaced = 0), d.numAutoAdsPlaced++, zf(7, [!1, a.c, !0]);
            return b
        }
        return null
    }

    function Og(a, b, c, d) {
        if (!Ig(b, d) || 1 != y(b, 8)) return null;
        d = A(b, K, 1);
        if (!d) return null;
        d = rg(d);
        if (!d) return null;
        d = mg(d, a.a.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = y(b, 2);
        e = ug[e];
        e = void 0 !== e ? e : null;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.a;
                switch (e) {
                    case 0:
                        f = Fg(Gg(d), f);
                        break a;
                    case 3:
                        f = Fg(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = Fg(g ? 1 == g.nodeType ? g : Gg(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !Hg(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !hg(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c = f)) {
            c = a.s;
            f = y(b, 2);
            g = Ba(d);
            g = c.b.a.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.a.contains(Ba(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.a.contains(Ba(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (c) return null;
        f = A(b, ae, 3);
        c = {};
        f && (c.Ga = y(f, 1), c.oa = y(f, 2), c.Na = !!Gb(f, 3));
        f = A(b, be, 4) && y(A(b, be, 4), 2) ? y(A(b, be, 4), 2) : null;
        f = of (f);
        b = null == y(b, 12) ? null : y(b, 12);
        b = nf(a.i, f, null == b ? null : new mf(null, {
            google_ml_rank: b
        }));
        f = a.a;
        a = a.$;
        var h = f.document;
        g = Xb((new Yb(h)).a, "DIV");
        var k = g.style;
        k.textAlign = "center";
        k.width = "100%";
        k.height = "auto";
        k.clear = c.Na ? "both" : "none";
        c.Ta && ig(k, c.Ta);
        h = Xb((new Yb(h)).a, "INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        c.Ga && (k.marginTop = c.Ga);
        c.oa && (k.marginBottom = c.oa);
        c.La && ig(k, c.La);
        g.appendChild(h);
        c = {
            ea: g,
            V: h
        };
        c.V.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.pa) c.ea.className = h.join(" ");
        h = c.V;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var n = c.ea;
                switch (e) {
                    case 0:
                        d.parentNode && d.parentNode.insertBefore(n, d);
                        break;
                    case 3:
                        var m = d.parentNode;
                        if (m) {
                            var u = d.nextSibling;
                            if (u && u.parentNode != m)
                                for (; u && 8 == u.nodeType;) u = u.nextSibling;
                            m.insertBefore(n, u)
                        }
                        break;
                    case 1:
                        d.insertBefore(n, d.firstChild);
                        break;
                    case 2:
                        d.appendChild(n)
                }
                hg(d) && (d.setAttribute("data-init-display", d.style.display), d.style.display = "block");
                b: {
                    var r = c.V;r.setAttribute("data-adsbygoogle-status", "reserved");r.className += " adsbygoogle-noablate";n = {
                        element: r
                    };
                    var v = b && b.ya;
                    if (r.hasAttribute("data-pub-vars")) {
                        try {
                            v = JSON.parse(r.getAttribute("data-pub-vars"))
                        } catch (H) {
                            break b
                        }
                        r.removeAttribute("data-pub-vars")
                    }
                    v && (n.params = v);
                    (f.adsbygoogle = f.adsbygoogle || []).push(n)
                }
            } catch (H) {
                (r = c.ea) && r.parentNode && (v = r.parentNode, v.removeChild(r), hg(v) && (v.style.display = v.getAttribute("data-init-display") || "none"));
                r = !1;
                break a
            }
            r = !0
        }
        return r ? c : null
    }

    function Mg(a) {
        return a.a.google_ama_state = a.a.google_ama_state || {}
    };

    function Pg() {
        this.b = new Qg(this);
        this.a = 0
    }

    function Rg(a) {
        if (0 != a.a) throw Error("Already resolved/rejected.");
    }

    function Qg(a) {
        this.a = a
    }

    function Sg(a) {
        switch (a.a.a) {
            case 0:
                break;
            case 1:
                a.b && a.b(a.a.g);
                break;
            case 2:
                a.c && a.c(a.a.c);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function Tg(a) {
        this.exception = a
    }

    function Ug(a, b) {
        this.c = p;
        this.a = a;
        this.b = b
    }
    Ug.prototype.start = function() {
        this.g()
    };
    Ug.prototype.g = function() {
        try {
            switch (this.c.document.readyState) {
                case "complete":
                case "interactive":
                    Lg(this.a, !0);
                    Vg(this);
                    break;
                default:
                    Lg(this.a, !1) ? Vg(this) : this.c.setTimeout(Ga(this.g, this), 100)
            }
        } catch (a) {
            Vg(this, a)
        }
    };

    function Vg(a, b) {
        try {
            var c = a.b,
                d = a.a;
            Mg(d);
            B(d.b, ce, 1);
            var e = new Tg(b);
            Rg(c);
            c.a = 1;
            c.g = e;
            Sg(c.b)
        } catch (f) {
            a = a.b, b = f, Rg(a), a.a = 2, a.c = b, Sg(a.b)
        }
    };

    function Wg(a) {
        sf(a, {
            atf: 1
        })
    }

    function Xg(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        sf(a, {
            atf: 0
        })
    };

    function Yg() {
        this.debugCard = null;
        this.debugCardRequested = !1
    };

    function Zg(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = $g(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function $g(a) {
        var b = "";
        Gd(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    };
    var ah = {
        13: "0.001",
        22: "0.01",
        24: "0.05",
        28: "0.001",
        29: "0.01",
        60: "0.03",
        66: "0.1",
        79: "1200",
        82: "3",
        98: "0.01",
        99: "600",
        100: "100",
        103: "0.01",
        118: "false",
        126: "0.001",
        128: "false",
        129: "0.02",
        135: "0.01",
        136: "0.02",
        137: "0.01",
        149: "0",
        150: "1000",
        155: "0.06",
        160: "250",
        161: "150",
        162: "0.1",
        165: "0.02",
        173: "800",
        174: "2",
        177: "0.02",
        179: "100",
        180: "20",
        185: "0.4",
        189: "400",
        190: "60",
        193: "500",
        194: "0"
    };
    var bh = null;

    function ch() {
        this.a = ah
    }

    function Q(a, b) {
        a = parseFloat(a.a[b]);
        return isNaN(a) ? 0 : a
    };

    function dh(a, b, c) {
        var d = "script";
        d = void 0 === d ? "" : d;
        var e = a.createElement("link");
        try {
            e.rel = "preload";
            if (hb("preload", "stylesheet")) var f = b.ca ? b.ca : $a(b).toString();
            else {
                if (b instanceof Xa) var g = b.ca ? b.ca : $a(b).toString();
                else {
                    if (b instanceof kb) var h = nb(b);
                    else {
                        if (b instanceof kb) var k = b;
                        else b = "object" == typeof b && b.b ? b.a() : String(b), ob.test(b) || (b = "about:invalid#zClosurez"), k = new kb(lb, b);
                        h = nb(k)
                    }
                    g = h
                }
                f = g
            }
            e.href = f
        } catch (n) {
            return
        }
        d && (e.as = d);
        c && e.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(e)
        } catch (n) {}
    };

    function eh(a) {
        var b = {},
            c = {};
        return c.enable_page_level_ads = (b.pltais = !0, b), c.google_ad_client = a, c
    };

    function fh() {};

    function gh(a) {
        if (!a) return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };

    function hh(a, b, c) {
        return ih(a, void 0 === c ? "" : c, function(d) {
            return Ma(B(d, Nb, 2), function(e) {
                return y(e, 1) === b
            })
        })
    }

    function jh(a, b, c) {
        c = void 0 === c ? "" : c;
        var d = Pd(a) || a;
        return kh(d, b) ? !0 : ih(a, c, function(e) {
            return Ma(y(e, 3), function(f) {
                return f === b
            })
        })
    }

    function lh(a) {
        return ih(p, void 0 === a ? "" : a, function() {
            return !0
        })
    }

    function kh(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Pa(a.split(","), b.toString())
    }

    function ih(a, b, c) {
        a = Pd(a) || a;
        var d = mh(a);
        b && (b = gh(String(b)));
        return Ua(d, function(e, f) {
            return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
        })
    }

    function mh(a) {
        a = nh(a);
        var b = {};
        Gd(a, function(c, d) {
            try {
                var e = new Lb(c);
                b[d] = e
            } catch (f) {}
        });
        return b
    }

    function nh(a) {
        try {
            var b = a.localStorage.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : Ta(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" == typeof e && za(d)
            })
        } catch (d) {
            return {}
        }
    };

    function oh() {
        this.a = function() {
            return []
        };
        this.b = function() {
            return []
        }
    }

    function ph(a, b) {
        a.a = zd(md, b, function() {
            return []
        });
        a.b = zd(nd, b, function() {
            return []
        })
    }
    wa(oh);
    var qh = {
            f: "368226950",
            h: "368226951"
        },
        rh = {
            f: "368226960",
            h: "368226961"
        },
        sh = {
            f: "368226470",
            U: "368226471"
        },
        th = {
            f: "368226480",
            U: "368226481"
        },
        uh = {
            f: "332260030",
            R: "332260031",
            P: "332260032"
        },
        vh = {
            f: "332260040",
            R: "332260041",
            P: "332260042"
        },
        wh = {
            f: "368226500",
            h: "368226501"
        },
        xh = {
            f: "36998750",
            h: "36998751"
        },
        yh = {
            f: "231196899",
            h: "231196900"
        },
        zh = {
            f: "231196901",
            h: "231196902"
        },
        Ah = {
            o: "20040067",
            f: "20040068",
            ma: "1337"
        },
        Bh = {
            f: "21060548",
            o: "21060549"
        },
        Ch = {
            f: "21060623",
            o: "21060624"
        },
        Dh = {
            f: "22324606",
            h: "22324607"
        },
        Eh = {
            f: "21062271",
            o: "21062272"
        },
        Fh = {
            f: "229739148",
            h: "229739149"
        },
        Gh = {
            f: "229739146",
            h: "229739147"
        },
        Hh = {
            f: "20040012",
            h: "20040013"
        },
        Ih = {
            f: "151527201",
            T: "151527221",
            K: "151527222",
            J: "151527223",
            H: "151527224",
            I: "151527225"
        },
        R = {
            f: "151527001",
            T: "151527021",
            K: "151527022",
            J: "151527023",
            H: "151527024",
            I: "151527025"
        };

    function Jh(a) {
        return Fc && !!a.google_disable_experiments
    }
    Md();

    function Kh(a) {
        var b = jh(p, 12, a.google_ad_client);
        a = "google_ad_host" in a;
        var c = J(p, qh.h),
            d = Zg(p.location, "google_ads_preview");
        return b && !a && c || d
    }

    function Lh(a) {
        if (p.google_apltlad || Od(p) != p || !a.google_ad_client) return null;
        var b = Kh(a),
            c = !J(p, sh.U);
        if (!b && !c) return null;
        p.google_apltlad = !0;
        var d = eh(a.google_ad_client),
            e = d.enable_page_level_ads;
        kc(a, function(f, g) {
            Ud[g] && "google_ad_client" != g && (e[g] = f)
        });
        b ? e.google_ad_channel = "AutoInsertAutoAdCode" : c && (e.google_pgb_reactive = 7, "google_ad_section" in a || "google_ad_region" in a) && (e.google_ad_section = a.google_ad_section || a.google_ad_region);
        return d
    }

    function Mh(a) {
        return Aa(a.enable_page_level_ads) && 7 == a.enable_page_level_ads.google_pgb_reactive
    };

    function ff(a) {
        try {
            var b = I(p).eids || [];
            null != b && 0 < b.length && (a.eid = b.join(","))
        } catch (c) {}
    }

    function ef(a) {
        a.shv = Ec()
    }
    Ze.Da(!Fc);

    function Nh(a, b) {
        return Qf(b, a) + P(b, a, "height", D)
    };

    function Oh() {
        var a = {};
        this[3] = (a[23] = function(b) {
            return hh(C, parseInt(b, 10))
        }, a[24] = function(b) {
            return jh(C, parseInt(b, 10))
        }, a);
        this[4] = {};
        this[5] = {}
    }
    wa(Oh);
    var Ph = new Ie(200, 399, 0),
        Qh = new Ie(600, 699, 0),
        Rh = new Ie(800, 899, 0),
        Sh = new Ie(0, 999, 5),
        Th = new Ie(400, 499, 6);

    function Uh(a) {
        a = void 0 === a ? p : a;
        return a.ggeac || (a.ggeac = {})
    };

    function Vh() {
        var a = {};
        this[3] = (a[8] = function(b) {
            return !!ua(b)
        }, a[9] = function(b) {
            b = ua(b);
            var c;
            if (c = "function" == xa(b)) b = b && b.toString && b.toString(), c = "string" === typeof b && hb(b, "[native code]");
            return c
        }, a[10] = function() {
            return window == window.top
        }, a[22] = function() {
            return yc()
        }, a);
        a = {};
        this[4] = (a[5] = function(b) {
            b = Ke(window, void 0 === b ? 0 : b);
            return null != b ? b : void 0
        }, a[6] = function(b) {
            b = ua(b);
            return "number" === typeof b ? b : void 0
        }, a);
        a = {};
        this[5] = (a[2] = function() {
            return window.location.href
        }, a[3] = function() {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }, a[4] = function(b) {
            b = ua(b);
            return "string" === typeof b ? b : void 0
        }, a)
    }
    wa(Vh);

    function Wh(a) {
        x(this, a, Xh, null)
    }
    q(Wh, w);
    var Xh = [2];
    Wh.prototype.X = function() {
        return z(this, 1, 0)
    };
    Wh.prototype.W = function() {
        return z(this, 7, 0)
    };

    function Yh(a) {
        x(this, a, Zh, null)
    }
    q(Yh, w);
    var Zh = [2];
    Yh.prototype.W = function() {
        return z(this, 5, 0)
    };

    function $h(a) {
        x(this, a, ai, null)
    }
    q($h, w);

    function bi(a) {
        x(this, a, ci, null)
    }
    q(bi, w);
    var ai = [1, 2],
        ci = [2];
    bi.prototype.W = function() {
        return z(this, 1, 0)
    };
    var di = [12, 13];

    function ei(a, b) {
        var c = this,
            d = void 0 === b ? {} : b;
        b = void 0 === d.ra ? !1 : d.ra;
        var e = void 0 === d.Sa ? {} : d.Sa;
        d = void 0 === d.Za ? [] : d.Za;
        this.a = a;
        this.i = b;
        this.c = e;
        this.g = d;
        this.b = {};
        (a = Me()) && Ja(a.split(",") || [], function(f) {
            (f = parseInt(f, 10)) && (c.b[f] = !0)
        })
    }

    function fi(a, b) {
        var c = [],
            d = gi(a.a, b);
        d.length && (9 !== b && (a.a = hi(a.a, b)), Ja(d, function(e) {
            if (e = ii(a, e)) {
                var f = e.X();
                c.push(f);
                a.g.push(f);
                (e = B(e, Uc, 2)) && jd(e)
            }
        }));
        return c
    }

    function ji(a, b) {
        a.a.push.apply(a.a, ca(Ka(La(b, function(c) {
            return new bi(c)
        }), function(c) {
            return !Pa(di, c.W())
        })))
    }

    function ii(a, b) {
        var c = Yc.j().a;
        if (!Rc(A(b, Kc, 3), c)) return null;
        var d = B(b, Wh, 2),
            e = d.length * z(b, 1, 0),
            f = z(b, 6, 0);
        if (f) {
            e = Ke(window, f);
            if (null === e) return null;
            b = ki(b, e);
            return !b || c && !Rc(A(b, Kc, 3), c) ? null : li(a, [b], 1)
        }
        d = c ? Ka(d, function(g) {
            return Rc(A(g, Kc, 3), c)
        }) : d;
        return d.length ? (b = z(b, 4, 0)) ? mi(a, b, e, d) : li(a, d, e / 1E3) : null
    }

    function mi(a, b, c, d) {
        var e = null != a.c[b] ? a.c[b] : 1E3;
        if (0 >= e) return null;
        d = li(a, d, c / e);
        a.c[b] = d ? 0 : e - c;
        return d
    }

    function li(a, b, c) {
        var d = a.b,
            e = Na(b, function(f) {
                return !!d[f.X()]
            });
        return e ? e : a.i ? null : gc(b, c, !1)
    }

    function ni(a, b) {
        F(ld, function(c) {
            a.b[c] = !0
        }, b);
        F(md, function(c) {
            return fi(a, c)
        }, b);
        F(nd, function() {
            return a.g
        }, b);
        F(wd, function(c) {
            return ji(a, c)
        }, b)
    }

    function gi(a, b) {
        return (a = Na(a, function(c) {
            return c.W() == b
        })) && B(a, Yh, 2) || []
    }

    function hi(a, b) {
        return Ka(a, function(c) {
            return c.W() != b
        })
    }

    function ki(a, b) {
        var c = B(a, Wh, 2),
            d = c.length,
            e = z(a, 1, 0);
        a = z(a, 8, 0);
        var f = (b - a) % d;
        return b < a || b - a - f >= d * (e - 1) ? null : c[f]
    };

    function oi() {
        this.a = function() {}
    }
    wa(oi);

    function pi(a) {
        oi.j().a(a)
    };

    function qi(a, b, c, d) {
        d = void 0 === d ? Uh() : d;
        d.hasOwnProperty("init-done") ? (zd(wd, d)(La(B(a, bi, 2), function(e) {
            return Kb(e)
        })), zd(xd, d)(La(B(a, Uc, 1), function(e) {
            return Kb(e)
        })), b && zd(yd, d)(b), ri(d)) : (ni(new ei(B(a, bi, 2), c), d), Ad(d), Bd(d), Cd(d), ri(d), jd(B(a, Uc, 1)), pi(Vh.j()), b && pi(b))
    }

    function ri(a) {
        var b = a = void 0 === a ? Uh() : a;
        ph(oh.j(), b);
        b = a;
        Dd.j().a = zd(pd, b);
        oi.j().a = zd(yd, a)
    };

    function S(a, b) {
        b && a.push(b)
    }

    function si(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        d = Pd(a) || a;
        d = (d = (d = d.location && d.location.hash) && (d.match(/google_plle=([\d,]+)/) || d.match(/deid=([\d,]+)/))) && d[1];
        return !!d && Ma(c, Ha(hb, d))
    }

    function ti(a, b, c) {
        for (var d = 0; d < c.length; d++)
            if (si(a, c[d])) return c[d];
        return Jh(a) ? null : gc(c, b)
    }

    function ui(a, b, c, d, e, f) {
        f = void 0 === f ? 1 : f;
        for (var g = 0; g < e.length; g++)
            if (si(a, e[g])) return e[g];
        Jh(a) ? c = null : (f = void 0 === f ? 1 : f, 0 >= d ? c = null : (g = new He(c, c + d - 1), (d = d % f || d / f % e.length) || (d = b.b, d = !(d.start <= g.start && d.a >= g.a)), d ? c = null : (a = Ke(a, b.a), c = null !== a && g.start <= a && g.a >= a ? e[Math.floor((a - c) / f) % e.length] : null)));
        return c
    };

    function vi(a, b, c) {
        if (bc(a.document.getElementById(b).contentWindow)) a = a.document.getElementById(b).contentWindow, b = a.document, b.body && b.body.firstChild || (/Firefox/.test(navigator.userAgent) ? b.open("text/html", "replace") : b.open(), a.google_async_iframe_close = !0, b.write(c));
        else {
            a = a.document.getElementById(b).contentWindow;
            c = String(c);
            b = ['"'];
            for (var d = 0; d < c.length; d++) {
                var e = c.charAt(d),
                    f = e.charCodeAt(0),
                    g = d + 1,
                    h;
                if (!(h = xb[e])) {
                    if (!(31 < f && 127 > f))
                        if (f = e, f in yb) e = yb[f];
                        else if (f in xb) e = yb[f] = xb[f];
                    else {
                        h = f.charCodeAt(0);
                        if (31 < h && 127 > h) e = f;
                        else {
                            if (256 > h) {
                                if (e = "\\x", 16 > h || 256 < h) e += "0"
                            } else e = "\\u", 4096 > h && (e += "0");
                            e += h.toString(16).toUpperCase()
                        }
                        e = yb[f] = e
                    }
                    h = e
                }
                b[g] = h
            }
            b.push('"');
            a.location.replace("javascript:" + b.join(""))
        }
    };
    var wi = null;

    function U(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        O.call(this, a, b);
        this.Y = c;
        this.Ra = d
    }
    ka(U, O);
    U.prototype.ba = function() {
        return this.Y
    };
    U.prototype.Z = function(a, b, c, d) {
        if (!c.google_ad_resize) {
            d.style.height = this.height() + "px";
            b = J(a, R.f);
            a = J(a, R.T) || J(a, R.K) || J(a, R.J) || J(a, R.H) || J(a, R.I);
            if (b || a) c.ovlp = !0;
            c.rpe = !0
        }
    };

    function xi(a) {
        return function(b) {
            return !!(b.Y & a)
        }
    };
    var yi = Ab("script");

    function zi(a, b, c, d, e, f, g, h, k, n, m, u, r, v) {
        this.va = a;
        this.a = b;
        this.Y = void 0 === c ? null : c;
        this.c = void 0 === d ? null : d;
        this.ka = void 0 === e ? null : e;
        this.b = void 0 === f ? null : f;
        this.g = void 0 === g ? null : g;
        this.F = void 0 === h ? !1 : h;
        this.$ = void 0 === k ? !1 : k;
        this.Ha = void 0 === n ? null : n;
        this.Ia = void 0 === m ? null : m;
        this.i = void 0 === u ? null : u;
        this.s = void 0 === r ? null : r;
        this.Ja = void 0 === v ? null : v;
        this.la = this.Ba = this.wa = null
    }

    function Ai(a, b, c) {
        null != a.Y && (c.google_responsive_formats = a.Y);
        null != a.ka && (c.google_safe_for_responsive_override = a.ka);
        null != a.b && (!0 === a.b ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.b));
        null != a.g && !0 !== a.g && (c.gfwrnher = a.g);
        a.F && (c.google_bfa = a.F);
        a.$ && (c.ebfa = a.$);
        var d = a.s || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.i || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.a.L(b);
        var e = a.a.height();
        c.google_ad_resize || (c.google_ad_width = d, c.google_ad_height = e, c.google_ad_format = a.a.fa(b), c.google_responsive_auto_format = a.va, null != a.c && (c.armr = a.c), c.google_ad_resizable = !0, c.google_override_format = 1, c.google_loader_features_used = 128, !0 === a.b && (c.gfwrnh = a.a.height() + "px"));
        null != a.Ha && (c.gfwroml = a.Ha);
        null != a.Ia && (c.gfwromr = a.Ia);
        null != a.i && (c.gfwroh = a.i);
        null != a.s && (c.gfwrow = a.s);
        null != a.Ja && (c.gfwroz = a.Ja);
        null != a.wa && (c.gml = a.wa);
        null != a.Ba && (c.gmr = a.Ba);
        null != a.la && (c.gzi = a.la);
        b = Md();
        b = Pd(b) || b;
        Zg(b.location, "google_responsive_slot_debug") && (c.ds = "outline:thick dashed " + (d && e ? !0 !== a.b || !0 !== a.g ? "#ffa500" : "#0f0" : "#f00") + " !important;");
        !Zg(b.location, "google_responsive_dummy_ad") || !Pa([1, 2, 3, 4, 5, 6, 7, 8], a.va) && 1 !== a.c || c.google_ad_resize || 2 === a.c || (a = JSON.stringify({
            googMsgType: "adpnt",
            key_value: [{
                key: "qid",
                value: "DUMMY_AD"
            }]
        }), c.dash = "<" + yi + ">window.top.postMessage('" + a + "', '*');\n          </" + yi + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
    /*

     Copyright 2019 The AMP HTML Authors. All Rights Reserved.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS-IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var Bi = {},
        Ci = (Bi.image_stacked = 1 / 1.91, Bi.image_sidebyside = 1 / 3.82, Bi.mobile_banner_image_sidebyside = 1 / 3.82, Bi.pub_control_image_stacked = 1 / 1.91, Bi.pub_control_image_sidebyside = 1 / 3.82, Bi.pub_control_image_card_stacked = 1 / 1.91, Bi.pub_control_image_card_sidebyside = 1 / 3.74, Bi.pub_control_text = 0, Bi.pub_control_text_card = 0, Bi),
        Di = {},
        Ei = (Di.image_stacked = 80, Di.image_sidebyside = 0, Di.mobile_banner_image_sidebyside = 0, Di.pub_control_image_stacked = 80, Di.pub_control_image_sidebyside = 0, Di.pub_control_image_card_stacked = 85, Di.pub_control_image_card_sidebyside = 0, Di.pub_control_text = 80, Di.pub_control_text_card = 80, Di),
        Fi = {},
        Gi = (Fi.pub_control_image_stacked = 100, Fi.pub_control_image_sidebyside = 200, Fi.pub_control_image_card_stacked = 150, Fi.pub_control_image_card_sidebyside = 250, Fi.pub_control_text = 100, Fi.pub_control_text_card = 150, Fi);

    function Hi(a) {
        var b = 0;
        a.A && b++;
        a.u && b++;
        a.v && b++;
        if (3 > b) return {
            w: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.A.split(",");
        var c = a.v.split(",");
        a = a.u.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            w: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            w: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
        };
        for (var d = [], e = [], f = 0; f < b.length; f++) {
            var g = Number(c[f]);
            if (isNaN(g) || 0 === g) return {
                w: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
            };
            d.push(g);
            g = Number(a[f]);
            if (isNaN(g) || 0 === g) return {
                w: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
            };
            e.push(g)
        }
        return {
            v: d,
            u: e,
            ua: b
        }
    }

    function Ii(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    var Ji = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function Ki(a, b) {
        O.call(this, a, b)
    }
    ka(Ki, O);
    Ki.prototype.L = function(a) {
        return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
    };

    function Li(a, b) {
        Mi(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type) return new zi(9, new Ki(a, Math.floor(a * b.google_phwr)));
        var c = ac();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * Ci.mobile_banner_image_sidebyside + Ei.mobile_banner_image_sidebyside) + 96), a = {
            O: a,
            N: c,
            u: 1,
            v: 12,
            A: "mobile_banner_image_sidebyside"
        }) : (a = Ii(a), a = {
            O: a.width,
            N: a.height,
            u: 1,
            v: 13,
            A: "image_sidebyside"
        }) : (a = Ii(a), a = {
            O: a.width,
            N: a.height,
            u: 4,
            v: 2,
            A: "image_stacked"
        });
        Ni(b, a);
        return new zi(9, new Ki(a.O, a.N))
    }

    function Oi(a, b) {
        Mi(a, b);
        var c = Hi({
            v: b.google_content_recommendation_rows_num,
            u: b.google_content_recommendation_columns_num,
            A: b.google_content_recommendation_ui_type
        });
        if (c.w) a = {
            O: 0,
            N: 0,
            u: 0,
            v: 0,
            A: "image_stacked",
            w: c.w
        };
        else {
            var d = 2 === c.ua.length && 468 <= a ? 1 : 0;
            var e = c.ua[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = Gi[e];
            for (var g = c.u[d]; a / g < f && 1 < g;) g--;
            f = g;
            c = c.v[d];
            d = Math.floor(((a - 8 * f - 8) / f * Ci[e] + Ei[e]) * c + 8 * c + 8);
            a = 1500 < a ? {
                width: 0,
                height: 0,
                ja: "Calculated slot width is too large: " + a
            } : 1500 < d ? {
                width: 0,
                height: 0,
                ja: "Calculated slot height is too large: " + d
            } : {
                width: a,
                height: d
            };
            a = a.ja ? {
                O: 0,
                N: 0,
                u: 0,
                v: 0,
                A: e,
                w: a.ja
            } : {
                O: a.width,
                N: a.height,
                u: f,
                v: c,
                A: e
            }
        }
        if (a.w) throw new M(a.w);
        Ni(b, a);
        return new zi(9, new Ki(a.O, a.N))
    }

    function Mi(a, b) {
        if (0 >= a) throw new M("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function Ni(a, b) {
        a.google_content_recommendation_ui_type = b.A;
        a.google_content_recommendation_columns_num = b.u;
        a.google_content_recommendation_rows_num = b.v
    };

    function Pi(a, b) {
        O.call(this, a, b)
    }
    ka(Pi, O);
    Pi.prototype.L = function() {
        return this.minWidth()
    };
    Pi.prototype.Z = function(a, b, c, d) {
        var e = this.L(b);
        Zf(a, d, d.parentElement, b, e, c);
        if (!c.google_ad_resize) {
            d.style.height = this.height() + "px";
            b = J(a, R.f);
            d = J(a, R.T) || J(a, R.K) || J(a, R.J) || J(a, R.H) || J(a, R.I);
            if (b || d) c.ovlp = !0;
            c.rpe = !0;
            if (J(a, vh.f) || J(a, vh.R) || J(a, vh.P)) c.ovlp = !0
        }
    };
    var Qi = {
        "image-top": function(a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function(a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function(a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function(a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function(a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function Ri(a, b) {
        O.call(this, a, b)
    }
    ka(Ri, O);
    Ri.prototype.L = function() {
        return Math.min(1200, this.minWidth())
    };

    function Si(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f && "false" != e.google_full_width_responsive) {
            var g = Uf(b, c, a, .2, e);
            if (!0 !== g) e.gfwrnwer = g;
            else if (g = N(b)) {
                e.google_full_width_responsive_allowed = !0;
                var h = c.parentElement;
                if (h) {
                    b: for (var k = c, n = 0; 100 > n && k.parentElement; ++n) {
                        for (var m = k.parentElement.childNodes, u = 0; u < m.length; ++u) {
                            var r = m[u];
                            if (r != k && Xf(b, r)) break b
                        }
                        k = k.parentElement;
                        k.style.width = "100%";
                        k.style.height = "auto"
                    }
                    Zf(b, c, h, a, g, e);a = g
                }
            }
        }
        if (250 > a) throw new M("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new M("Fluid responsive ads must be at least 50px tall: height=" + f);
            return new zi(11, new O(a, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            b = Math.pow(10, 3);
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                e = [];
                for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                b = e
            } else b = null;
            if (!b) throw new M("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(1E3 * c - -725 + 10);
            if (isNaN(f)) throw new M("Invalid height: height=" + f);
            if (50 > f) throw new M("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new M("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new zi(11, new O(a, f))
        }
        d = Qi[f];
        if (!d) throw new M("Invalid data-ad-layout value: " + f);
        c = bg(c, b);
        b = N(b);
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new zi(11, "in-article" == f ? new Ri(a, b) : new O(a, b))
    };

    function Ti(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function Ui(a, b, c) {
        for (var d = a.length, e = null, f = 0; f < d; ++f) {
            var g = a[f];
            if (b(g)) {
                if (!c || c(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var V = [new U(970, 90, 2), new U(728, 90, 2), new U(468, 60, 2), new U(336, 280, 1), new U(320, 100, 2), new U(320, 50, 2), new U(300, 600, 4), new U(300, 250, 1), new U(250, 250, 1), new U(234, 60, 2), new U(200, 200, 1), new U(180, 150, 1), new U(160, 600, 4), new U(125, 125, 1), new U(120, 600, 4), new U(120, 240, 4), new U(120, 120, 1, !0)],
        Vi = [V[6], V[12], V[3], V[0], V[7], V[14], V[1], V[8], V[10], V[4], V[15], V[2], V[11], V[5], V[13], V[9], V[16]];

    function Wi(a, b, c, d, e) {
        "false" != e.google_full_width_responsive || c.location && "#gfwrffwaifhp" == c.location.hash ? "autorelaxed" == b && (e.google_full_width_responsive || J(c, Fh.h)) || Xi(b) || e.google_ad_resize ? (b = Vf(a, c, d, e), c = !0 !== b ? {
            l: a,
            m: b
        } : {
            l: N(c) || a,
            m: !0
        }) : c = {
            l: a,
            m: 2
        } : c = {
            l: a,
            m: 1
        };
        b = c.m;
        return !0 !== b ? {
            l: a,
            m: b
        } : d.parentElement ? {
            l: c.l,
            m: b
        } : {
            l: a,
            m: b
        }
    }

    function Yi(a, b, c, d, e) {
        var f = gf(247, function() {
                return Wi(a, b, c, d, e)
            }),
            g = f.l;
        f = f.m;
        var h = !0 === f,
            k = D(d.style.width),
            n = D(d.style.height),
            m = Zi(g, b, c, d, e, h);
        g = m.G;
        h = m.D;
        var u = m.B,
            r = m.C,
            v = m.ba;
        m = m.ta;
        var H = $i(b, v),
            T, oa = (T = P(d, c, "marginLeft", D)) ? T + "px" : "",
            Je = (T = P(d, c, "marginRight", D)) ? T + "px" : "";
        T = P(d, c, "zIndex") || "";
        return new zi(H, g, v, null, m, f, h, u, r, oa, Je, n, k, T)
    }

    function Xi(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function Zi(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, N(c)) ? 4 : 3 : Tf(b);
        var g = !1,
            h = !1;
        if (488 > N(c)) {
            var k = Sf(d, c);
            var n = bg(d, c);
            g = !n && k;
            h = n && k
        }
        n = [$f(a), ag(488 > N(c), c, d, h), xi(b)];
        null != e.google_max_responsive_height && n.push(dg(e.google_max_responsive_height));
        var m = [function(r) {
            return !r.Ra
        }];
        if (g || h) g = fg(c, d), m.push(dg(g));
        var u = Ui(Vi.slice(0), Ti(n), Ti(m));
        if (!u) throw new M("No slot size for availableWidth=" + a);
        h = gf(248, function() {
            var r;
            a: if (f) {
                if (e.gfwrnh && (r = D(e.gfwrnh))) {
                    r = {
                        G: new Pi(a, r),
                        D: !0,
                        B: !1,
                        C: !1
                    };
                    break a
                }
                r = !1;
                var v = Nf(c).clientHeight,
                    H = Qf(d, c),
                    T = c.google_lpabyc,
                    oa = eg(d, c);
                if (oa && 2 < oa && !c.google_bfabyc && (!T || H - T > v) && (v = .9 * Nf(c).clientHeight, H = Math.min(v, aj(c, d, e)), v && H == v)) {
                    H = c.google_pbfabyc;
                    r = !H;
                    if (J(c, vh.R) || J(c, vh.P)) {
                        c.google_bfabyc = Qf(d, c) + v;
                        r = {
                            G: new Pi(a, Math.floor(v)),
                            D: !0,
                            B: !0,
                            C: !0
                        };
                        break a
                    }
                    H || (c.google_pbfabyc = Qf(d, c) + v)
                }
                v = a / 1.2;
                H = Math.min(v, aj(c, d, e));
                if (H < .5 * v || 100 > H) H = v;
                if (J(c, R.K) || J(c, R.J) || J(c, R.H) || J(c, R.I)) H *= 1.3;
                r = {
                    G: new Pi(a, Math.floor(H)),
                    D: H < v ? 102 : !0,
                    B: !1,
                    C: r
                }
            } else r = {
                G: u,
                D: 100,
                B: !1,
                C: !1
            };
            return r
        });
        g = h.G;
        n = h.D;
        m = h.B;
        h = h.C;
        return bj(c) ? {
            G: cj(a, c, d, g, e),
            D: !1,
            B: !1,
            C: !1,
            ba: b,
            ta: k
        } : {
            G: g,
            D: n,
            B: m,
            C: h,
            ba: b,
            ta: k
        }
    }

    function aj(a, b, c) {
        if (c.google_resizing_allowed || "true" == c.google_full_width_responsive) a = Infinity;
        else {
            c = Infinity;
            do {
                var d = P(b, a, "height", D);
                d && (c = Math.min(c, d));
                (d = P(b, a, "maxHeight", D)) && (c = Math.min(c, d))
            } while ((b = b.parentElement) && "HTML" != b.tagName);
            a = c
        }
        return a
    }

    function $i(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function cj(a, b, c, d, e) {
        var f = e.google_ad_height || P(c, b, "height", D);
        a = Si(a, b, c, f, e).a;
        return a.minWidth() * a.height() > d.minWidth() * d.height() ? a : d
    }

    function bj(a) {
        return G(227) || a.location && "#hffwroe2etoq" == a.location.hash
    };

    function dj(a, b) {
        O.call(this, a, b)
    }
    ka(dj, O);
    dj.prototype.L = function() {
        return this.minWidth()
    };
    dj.prototype.fa = function(a) {
        return O.prototype.fa.call(this, a) + "_0ads_al"
    };
    var ej = [new dj(728, 15), new dj(468, 15), new dj(200, 90), new dj(180, 90), new dj(160, 90), new dj(120, 90)];

    function fj(a, b, c) {
        var d = 250,
            e = 90;
        d = void 0 === d ? 130 : d;
        e = void 0 === e ? 30 : e;
        var f = Ui(ej, $f(a));
        if (!f) throw new M("No link unit size for width=" + a + "px");
        a = Math.min(a, 1200);
        f = f.height();
        b = Math.max(f, b);
        d = (new zi(10, new dj(a, Math.min(b, 15 == f ? e : d)))).a;
        b = d.minWidth();
        d = d.height();
        15 <= c && (d = c);
        return new zi(10, new dj(b, d))
    }

    function gj(a, b, c, d) {
        if ("false" == d.google_full_width_responsive) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = 1, a;
        var e = Vf(a, b, c, d);
        if (!0 !== e) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = e, a;
        e = N(b);
        if (!e) return a;
        d.google_full_width_responsive_allowed = !0;
        Zf(b, c, c.parentElement, a, e, d);
        return e
    };

    function hj(a, b, c, d, e) {
        var f;
        (f = N(b)) ? 488 > N(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Zf(b, c, c.parentElement, a, f, e), f = {
            l: f,
            m: !0
        }) : f = {
            l: a,
            m: 5
        } : f = {
            l: a,
            m: 4
        }: f = {
            l: a,
            m: 10
        };
        var g = f;
        f = g.l;
        g = g.m;
        if (!0 !== g || a == f) return new zi(12, new O(a, d), null, null, !0, g, 100);
        a = Zi(f, "auto", b, c, e, !0);
        return new zi(1, a.G, a.ba, 2, !0, g, a.D, a.B, a.C)
    };

    function ij(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c) {
            a: {
                if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = ba(Ji), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) {
                            b = !0;
                            break a
                        }
                b = !1
            }
            return b ? 9 : 5
        }
        if (Xi(c)) return 1;
        if ("link" == c) return 4;
        if ("fluid" == c) return "in-article" === b.google_ad_layout && (G(208) || G(227) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash)) ? (b.google_ad_format = "auto", b.armr = 3, 1) : 8
    }

    function jj(a, b, c, d, e) {
        e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && P(b, d, "width", D) || c.google_ad_width || 0;
        !J(d, yh.h) || 5 !== a && 9 !== a || (c.google_ad_format = "auto", c.google_ad_slot = "", a = 1);
        var f = (f = kj(a, e, b, c, d)) ? f : Yi(e, c.google_ad_format, d, b, c);
        f.a.Z(d, e, c, b);
        Ai(f, e, c);
        1 != a && (a = f.a.height(), b.style.height = a + "px")
    }

    function kj(a, b, c, d, e) {
        var f = d.google_ad_height || P(c, e, "height", D);
        switch (a) {
            case 5:
                return a = gf(247, function() {
                    return Wi(b, d.google_ad_format, e, c, d)
                }), f = a.l, a = a.m, !0 === a && b != f && Zf(e, c, c.parentElement, b, f, d), !0 === a ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = a), lj(e) && (d.ovlp = !0), Li(f, d);
            case 9:
                return Oi(b, d);
            case 4:
                return a = gj(b, e, c, d), fj(a, fg(e, c), f);
            case 8:
                return Si(b, e, c, f, d);
            case 10:
                return hj(b, e, c, f, d)
        }
    }

    function lj(a) {
        return J(a, Fh.f) || J(a, Fh.h)
    };

    function W(a) {
        this.g = [];
        this.b = a || window;
        this.a = 0;
        this.c = null;
        this.i = 0
    }
    var mj;
    l = W.prototype;
    l.Oa = function(a, b) {
        0 != this.a || 0 != this.g.length || b && b != window ? this.qa(a, b) : (this.a = 2, this.Aa(new nj(a, window)))
    };
    l.qa = function(a, b) {
        this.g.push(new nj(a, b || this.b));
        oj(this)
    };
    l.Ua = function(a) {
        this.a = 1;
        if (a) {
            var b = hf(188, Ga(this.za, this, !0));
            this.c = this.b.setTimeout(b, a)
        }
    };
    l.za = function(a) {
        a && ++this.i;
        1 == this.a && (null != this.c && (this.b.clearTimeout(this.c), this.c = null), this.a = 0);
        oj(this)
    };
    l.$a = function() {
        return !(!window || !Array)
    };
    l.Qa = function() {
        return this.i
    };

    function oj(a) {
        var b = hf(189, Ga(a.ab, a));
        a.b.setTimeout(b, 0)
    }
    l.ab = function() {
        if (0 == this.a && this.g.length) {
            var a = this.g.shift();
            this.a = 2;
            var b = hf(190, Ga(this.Aa, this, a));
            a.a.setTimeout(b, 0);
            oj(this)
        }
    };
    l.Aa = function(a) {
        this.a = 0;
        a.b()
    };

    function pj(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }

    function qj(a) {
        return !!a && ("object" === typeof a || "function" === typeof a) && pj(a) && Hd(a.nq) && Hd(a.nqa) && Hd(a.al) && Hd(a.rl)
    }

    function rj() {
        if (mj && pj(mj)) return mj;
        var a = kg(),
            b = a.google_jobrunner;
        return qj(b) ? mj = b : a.google_jobrunner = mj = new W(a)
    }

    function sj(a, b) {
        rj().nq(a, b)
    }

    function tj(a, b) {
        rj().nqa(a, b)
    }
    W.prototype.nq = W.prototype.Oa;
    W.prototype.nqa = W.prototype.qa;
    W.prototype.al = W.prototype.Ua;
    W.prototype.rl = W.prototype.za;
    W.prototype.sz = W.prototype.$a;
    W.prototype.tc = W.prototype.Qa;

    function nj(a, b) {
        this.b = a;
        this.a = b
    };

    function uj(a, b) {
        var c = Pd(b);
        if (c) {
            c = N(c);
            var d = fc(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" != d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function vj(a) {
        var b = this;
        this.a = a;
        a.google_iframe_oncopy || (a.google_iframe_oncopy = {
            handlers: {},
            upd: function(c, d) {
                var e = wj("rx", c),
                    f = Number;
                a: {
                    if (c && (c = c.match("dt=([^&]+)")) && 2 == c.length) {
                        c = c[1];
                        break a
                    }
                    c = ""
                }
                f = f(c);
                f = (new Date).getTime() - f;
                e = e.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= f ? "M" : 0 <= f ? f : "-M"));
                b.set(d, e);
                return e
            }
        });
        this.b = a.google_iframe_oncopy
    }
    vj.prototype.set = function(a, b) {
        var c = this;
        this.b.handlers[a] = b;
        this.a.addEventListener && this.a.addEventListener("load", function() {
            var d = c.a.document.getElementById(a);
            try {
                var e = d.contentWindow.document;
                if (d.onload && e && (!e.body || !e.body.firstChild)) d.onload()
            } catch (f) {}
        }, !1)
    };

    function wj(a, b) {
        var c = new RegExp("\\b" + a + "=(\\d+)"),
            d = c.exec(b);
        d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
        return b
    }
    var xj, yj = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
    var X = yj;
    /[\x00&<>"']/.test(X) && (-1 != X.indexOf("&") && (X = X.replace(bb, "&amp;")), -1 != X.indexOf("<") && (X = X.replace(cb, "&lt;")), -1 != X.indexOf(">") && (X = X.replace(db, "&gt;")), -1 != X.indexOf('"') && (X = X.replace(eb, "&quot;")), -1 != X.indexOf("'") && (X = X.replace(fb, "&#39;")), -1 != X.indexOf("\x00") && (X = X.replace(gb, "&#0;")));
    yj = X;
    xj = yj;
    var zj = {},
        Aj = (zj.google_ad_modifications = !0, zj.google_analytics_domain_name = !0, zj.google_analytics_uacct = !0, zj.google_pause_ad_requests = !0, zj);

    function Bj(a) {
        switch (a) {
            case "":
            case "Test":
            case "Real":
                return !0;
            default:
                return !1
        }
    }

    function Cj(a) {
        this.c = C;
        this.b = void 0 === a ? !1 : a;
        this.a = new Wb
    }

    function Dj(a) {
        var b = a.a.get("__gads", "");
        return a.b && !Bj(b) ? "Real" : b
    }
    Cj.prototype.write = function(a) {
        var b = y(a, 1);
        if (this.b) {
            if (!Bj(this.a.get("__gads", ""))) return;
            Bj(b) || (b = "Real")
        }
        this.a.set("__gads", b, y(a, 2) - this.c.Date.now() / 1E3, y(a, 3), y(a, 4), !1)
    };
    var Ej = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        Fj = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;

    function Gj(a) {
        return Ej.test(a) && !Fj.test(a)
    }
    var Hj = p;

    function Ij(a) {
        a = "https://adservice" + (a + "/adsid/integrator.js");
        var b = ["domain=" + encodeURIComponent(p.location.hostname)];
        Y[3] >= +new Date && b.push("adsid=" + encodeURIComponent(Y[1]));
        return a + "?" + b.join("&")
    }
    var Y, Z;

    function Jj() {
        Hj = p;
        Y = Hj.googleToken = Hj.googleToken || {};
        var a = +new Date;
        Y[1] && Y[3] > a && 0 < Y[2] || (Y[1] = "", Y[2] = -1, Y[3] = -1, Y[4] = "", Y[6] = "");
        Z = Hj.googleIMState = Hj.googleIMState || {};
        Gj(Z[1]) || (Z[1] = ".google.com");
        za(Z[5]) || (Z[5] = []);
        "boolean" !== typeof Z[6] && (Z[6] = !1);
        za(Z[7]) || (Z[7] = []);
        "number" !== typeof Z[8] && (Z[8] = 0)
    }
    var Kj = {
        ga: function() {
            return 0 < Z[8]
        },
        Wa: function() {
            Z[8]++
        },
        Xa: function() {
            0 < Z[8] && Z[8]--
        },
        Ya: function() {
            Z[8] = 0
        },
        fb: function() {
            return !1
        },
        Pa: function() {
            return Z[5]
        },
        Ma: function(a) {
            try {
                a()
            } catch (b) {
                p.setTimeout(function() {
                    throw b;
                }, 0)
            }
        },
        Va: function() {
            if (!Kj.ga()) {
                var a = p.document,
                    b = function(e) {
                        e = Ij(e);
                        a: {
                            try {
                                var f = ra();
                                break a
                            } catch (g) {}
                            f = void 0
                        }
                        dh(a, e, f);
                        f = a.createElement("script");
                        f.type = "text/javascript";
                        f.onerror = function() {
                            return p.processGoogleToken({}, 2)
                        };
                        e = Zb(e);
                        wb(f, e);
                        try {
                            (a.head || a.body || a.documentElement).appendChild(f), Kj.Wa()
                        } catch (g) {}
                    },
                    c = Z[1];
                b(c);
                ".google.com" != c && b(".google.com");
                b = {};
                var d = (b.newToken = "FBT", b);
                p.setTimeout(function() {
                    return p.processGoogleToken(d, 1)
                }, 1E3)
            }
        }
    };

    function Lj() {
        p.processGoogleToken = p.processGoogleToken || function(a, b) {
            var c = a;
            c = void 0 === c ? {} : c;
            b = void 0 === b ? 0 : b;
            a = c.newToken || "";
            var d = "NT" == a,
                e = parseInt(c.freshLifetimeSecs || "", 10),
                f = parseInt(c.validLifetimeSecs || "", 10),
                g = c["1p_jar"] || "";
            c = c.pucrd || "";
            Jj();
            1 == b ? Kj.Ya() : Kj.Xa();
            var h = Hj.googleToken = Hj.googleToken || {},
                k = 0 == b && a && "string" === typeof a && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
            d = d && !Kj.ga() && (!(Y[3] >= +new Date) || "NT" == Y[1]);
            var n = !(Y[3] >= +new Date) && 0 != b;
            if (k || d || n) d = +new Date, e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && Ac("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + b, null), h[5] = b, h[1] = a, h[2] = e, h[3] = f, h[4] = g, h[6] = c, Jj();
            if (k || !Kj.ga()) {
                b = Kj.Pa();
                for (a = 0; a < b.length; a++) Kj.Ma(b[a]);
                b.length = 0
            }
        };
        Jj();
        Y[3] >= +new Date && Y[2] >= +new Date || Kj.Va()
    };
    var Mj = Ab("script");

    function Nj() {
        C.google_sa_impl && !C.document.getElementById("google_shimpl") && (C.google_sa_queue = null, C.google_sl_win = null, C.google_sa_impl = null);
        if (!C.google_sa_queue) {
            C.google_sa_queue = [];
            C.google_sl_win = C;
            C.google_process_slots = function() {
                return Oj(C)
            };
            var a = Pj();
            dh(C.document, a);
            J(C, "20199335") || !tb() || t("iPhone") && !t("iPod") && !t("iPad") || t("iPad") || t("iPod") ? ec(C.document, a).id = "google_shimpl" : (a = Xb(document, "IFRAME"), a.id = "google_shimpl", a.style.display = "none", C.document.documentElement.appendChild(a), vi(C, "google_shimpl", "<!doctype html><html><body><" + (Mj + ">google_sl_win=window.parent;google_async_iframe_id='google_shimpl';</") + (Mj + ">") + Qj() + "</body></html>"), a.contentWindow.document.close())
        }
    }
    var Oj = hf(215, function(a) {
        var b = a.google_sa_queue,
            c = b.shift();
        a.google_sa_impl || jf("shimpl", {
            t: "no_fn"
        });
        "function" == xa(c) && gf(216, c);
        b.length && a.setTimeout(function() {
            return Oj(a)
        }, 0)
    });

    function Rj(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function Qj() {
        var a = Pj();
        return "<" + Mj + ' src="' + a + '"></' + Mj + ">"
    }

    function Pj() {
        var a = "/show_ads_impl.js";
        a = void 0 === a ? "/show_ads_impl.js" : a;
        a: {
            if (Fc) try {
                var b = C.google_cafe_host || C.top.google_cafe_host;
                if (b) {
                    var c = b;
                    break a
                }
            } catch (d) {}
            c = Jc()
        }
        return wf(c, ["/pagead/js/", Ec(), "/r20190131", a, ""].join(""), "https")
    }

    function Sj(a, b, c, d) {
        return function() {
            var e = !1;
            d && rj().al(3E4);
            try {
                vi(a, b, c), e = !0
            } catch (g) {
                var f = kg().google_jobrunner;
                qj(f) && f.rl()
            }
            e && (e = wj("google_async_rrc", c), (new vj(a)).set(b, Sj(a, b, e, !1)))
        }
    }

    function Tj(a) {
        if (!wi) a: {
            for (var b = [p.top], c = [], d = 0, e; e = b[d++];) {
                c.push(e);
                try {
                    if (e.frames)
                        for (var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g) b.push(e.frames[g])
                } catch (k) {}
            }
            for (b = 0; b < c.length; b++) try {
                var h = c[b].frames.google_esf;
                if (h) {
                    wi = h;
                    break a
                }
            } catch (k) {}
            wi = null
        }
        if (!wi) {
            if (/[^a-z0-9-]/.test(a)) return null;
            c = Xb(document, "IFRAME");
            c.id = "google_esf";
            c.name = "google_esf";
            h = vf(Dc("", "googleads.g.doubleclick.net"), ["/pagead/html/", Ec(), "/r20190131/zrt_lookup.html#", encodeURIComponent("")].join(""));
            c.src = h;
            c.style.display = "none";
            c.setAttribute("data-ad-client", gh(a));
            return c
        }
        return null
    }

    function Uj(a, b, c) {
        Vj(a, b, c, function(d, e, f) {
            d = d.document;
            for (var g = e.id, h = 0; !g || d.getElementById(g + "_anchor");) g = "aswift_" + h++;
            e.id = g;
            e.name = g;
            g = Number(f.google_ad_width || 0);
            h = Number(f.google_ad_height || 0);
            var k = f.ds || "";
            k && (k += k.endsWith(";") ? "" : ";");
            var n = "";
            if (!f.google_enable_single_iframe) {
                n = ["<iframe"];
                for (m in e) e.hasOwnProperty(m) && n.push(m + "=" + e[m]);
                n.push('style="left:0;position:absolute;top:0;border:0px;width:' + (g + "px;height:" + (h + 'px;"')));
                n.push("></iframe>");
                n = n.join(" ")
            }
            var m = e.id;
            var u = "";
            u = void 0 === u ? "" : u;
            g = "border:none;height:" + h + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + (g + "px;background-color:transparent;");
            m = ['<ins id="' + (m + '_expand"'), ' style="display:inline-table;' + g + (void 0 === k ? "" : k) + '"', u ? ' data-ad-slot="' + u + '">' : ">", '<ins id="' + (m + '_anchor" style="display:block;') + g + '">', n, "</ins></ins>"].join("");
            16 == f.google_reactive_ad_format ? (f = d.createElement("div"), f.innerHTML = m, c.appendChild(f.firstChild)) : c.innerHTML = m;
            return e.id
        })
    }

    function Vj(a, b, c, d) {
        var e = b.google_ad_width,
            f = b.google_ad_height;
        J(a, Hh.h) ? (lf(!0), b.google_enable_single_iframe = !0) : J(a, Hh.f) && lf(!1);
        var g = {};
        null != e && (g.width = e && '"' + e + '"');
        null != f && (g.height = f && '"' + f + '"');
        g.frameborder = '"0"';
        g.marginwidth = '"0"';
        g.marginheight = '"0"';
        g.vspace = '"0"';
        g.hspace = '"0"';
        g.allowtransparency = '"true"';
        g.scrolling = '"no"';
        g.allowfullscreen = '"true"';
        g.onload = '"' + xj + '"';
        d = d(a, g, b);
        Wj(a, c, b);
        (c = Tj(b.google_ad_client)) && a.document.documentElement.appendChild(c);
        c = Ia;
        e = (new Date).getTime();
        b.google_lrv = Ec();
        b.google_async_iframe_id = d;
        b.google_unique_id = Jd(a);
        b.google_start_time = c;
        b.google_bpp = e > c ? e - c : 1;
        b.google_async_rrc = 0;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[d] = b;
        a.google_t12n_vars = ah;
        if (b.google_enable_single_iframe) {
            var h = {
                pubWin: a,
                iframeWin: null,
                vars: b
            };
            Rj(a, function() {
                a.google_sa_impl(h)
            }, a.document.getElementById(d + "_anchor") ? sj : tj)
        } else Rj(a, Sj(a, d, ["<!doctype html><html><body>", "<" + Mj + ">", "google_sl_win=window.parent;google_iframe_start_time=new Date().getTime();", 'google_async_iframe_id="' + d + '";', "</" + Mj + ">", "<" + Mj + ">window.parent.google_sa_impl({iframeWin: window, pubWin: window.parent, vars: window.parent['google_sv_map']['" + (d + "']});</") + Mj + ">", "</body></html>"].join(""), !0), a.document.getElementById(d) ? sj : tj)
    }

    function Wj(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" != d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !Ub[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if (!qa(c.google_reactive_sra_index) || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width, c.google_orig_ad_height || c.google_ad_height];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = mc(e.join(":")).toString();
            var h = void 0 === h ? !1 : h;
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = "";
                void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        for (var k = b.parentElement.childNodes, n = 0, m = 0; m < k.length; ++m) {
                            var u = k[m];
                            if (u.nodeName && u.nodeName.toString().toLowerCase() === g) {
                                if (b === u) {
                                    g = "." + n;
                                    break a
                                }++n
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            h = e.join() + ":";
            b = [];
            if (a) try {
                var r = a.parent;
                for (e = 0; r && r !== a && 25 > e; ++e) {
                    var v = r.frames;
                    for (d = 0; d < v.length; ++d)
                        if (a === v[d]) {
                            b.push(d);
                            break
                        }
                    a = r;
                    r = a.parent
                }
            } catch (H) {}
            c.google_ad_dom_fingerprint = mc(h + b.join()).toString()
        }
    }
    var Xj = !Hc;

    function Yj(a) {
        var b = a.value,
            c = "https://partner.googleadservices.com/gampad/cookie.js?domain=" + a.domain + "&callback=_gfp_s_&client=" + a.cb;
        a.bb && (c += "&test=1");
        b && (c += "&cookie=" + encodeURIComponent(b) + "&crv=" + Number("Test" !== b));
        return c
    }

    function Zj(a) {
        var b = void 0 === b ? Yj : b;
        var c = C._gfp_a_;
        if ("boolean" !== typeof c) throw Error("Illegal value of _gfp_a_: " + c);
        if (c) {
            c = C._gfp_p_;
            if ("boolean" !== typeof c) throw Error("Illegal value of _gfp_p_: " + c);
            if (!c) {
                if (G(225)) {
                    c = G(226);
                    var d = new Cj(c);
                    navigator.cookieEnabled && (C._gfp_s_ = hf(629, function(e) {
                        delete C._gfp_s_;
                        if (!e) throw Error("Invalid JSONP response");
                        if (e = e._cookies_) {
                            var f = e[0];
                            if (!f) throw Error("Invalid JSONP response");
                            e = f._value_;
                            var g = f._expires_,
                                h = f._path_;
                            f = f._domain_;
                            if ("string" !== typeof e || "number" !== typeof g || "string" !== typeof h || "string" !== typeof f) throw Error("Invalid JSONP response");
                            d.write(Sb(Rb(Qb(Pb(e), g), h), f))
                        }
                    }), ec(C.document, b({
                        domain: C.location.hostname,
                        cb: a,
                        bb: c,
                        value: Dj(d)
                    })))
                }
                C._gfp_p_ = !0
            }
        }
    };

    function ak(a, b) {
        a = a.attributes;
        for (var c = a.length, d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                var f = ab(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                if (!b.hasOwnProperty(f)) {
                    e = e.value;
                    var g = {};
                    g = (g.google_reactive_ad_format = Bc, g.google_allow_expandable_ads = sc, g);
                    e = g.hasOwnProperty(f) ? g[f](e, null) : e;
                    null === e || (b[f] = e)
                }
            }
        }
    }

    function bk(a) {
        if (a = Ed(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function ck(a, b, c) {
        ak(a, b);
        if (c.document && c.document.body && !ij(c, b) && !b.google_reactive_ad_format) {
            var d = parseInt(a.style.width, 10),
                e = uj(a, c);
            if (0 < e && d > e) {
                var f = parseInt(a.style.height, 10);
                d = !!Ub[d + "x" + f];
                var g = e;
                if (d) {
                    var h = Vb(e, f);
                    if (h) g = h, b.google_ad_format = h + "x" + f + "_0ads_al";
                    else throw new M("No slot size for availableWidth=" + e);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = g;
                d || (b.google_ad_format = null, b.google_override_format = !0);
                e = g;
                a.style.width = e + "px";
                f = Yi(e, "auto", c, a, b);
                g = e;
                f.a.Z(c, g, b, a);
                Ai(f, g, b);
                f = f.a;
                b.google_responsive_formats = null;
                f.minWidth() > e && !d && (b.google_ad_width = f.minWidth(), a.style.width = f.minWidth() + "px")
            }
        }
        d = a.offsetWidth || P(a, c, "width", D) || b.google_ad_width || 0;
        a: if (e = Ha(Yi, d, "auto", c, a, b, !1, !0), f = Pd(c) || c, g = b.google_ad_client, f = f.location && "#ftptohbh" === f.location.hash ? 2 : Zg(f.location, "google_responsive_slot_debug") || Zg(f.location, "google_responsive_slot_preview") || G(217) ? 1 : G(218) ? 2 : hh(f, 1, g) ? 1 : jh(f, 11, g) ? G(219) ? 2 : 1 : 0, 0 === f || !ac() && !G(216) || b.google_reactive_ad_format || ij(c, b) || Pf(a, b) || b.google_ad_resize || Od(c) != c) d = !1;
            else {
                for (g = a; g; g = g.parentElement)
                    if (h = fc(g, c), !h || !Pa(["static", "relative"], h.position)) {
                        d = !1;
                        break a
                    }
                G(216) || !0 === Uf(c, a, d, .3, b) ? (b.google_resizing_allowed = !0, b.ovlp = !0, 2 === f ? (f = {}, Ai(e(), d, f), b.google_resizing_width = f.google_ad_width, b.google_resizing_height = f.google_ad_height, f.ds && (b.ds = f.ds), b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1), jh(c, 11, b.google_ad_client) && (d = G(219) ? "AutoOptimizeAdSizeOriginal" : "AutoOptimizeAdSizeVariant", b.google_ad_channel = b.google_ad_channel ? [b.google_ad_channel, d].join("+") : d), d = !0) : d = !1
            }
        if (e = ij(c, b)) jj(e, a, b, c, d);
        else {
            if (Pf(a, b)) {
                if (d = fc(a, c)) a.style.width = d.width, a.style.height = d.height, Of(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = bk(c)
            } else Of(a.style, b), 300 == b.google_ad_width && 250 == b.google_ad_height && (d = a.style.width, a.style.width = "100%", e = a.offsetWidth, a.style.width = d, b.google_available_width = e);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive && !J(c, wh.h) ? jj(10, a, b, c, !1) : J(c, xh.h) && 12 == b.google_responsive_auto_format && (a = Vf(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function dk(a, b, c) {
        var d = window;
        return function() {
            var e = Oe(),
                f = 3;
            try {
                var g = b.apply(this, arguments)
            } catch (h) {
                f = 13;
                if (c) return c(a, h), g;
                throw h;
            } finally {
                d.google_measure_js_timing && e && (e = {
                    label: a.toString(),
                    value: e,
                    duration: (Oe() || 0) - e,
                    type: f
                }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e))
            }
            return g
        }
    }

    function ek(a, b) {
        return dk(a, b, function(c, d) {
            (new Ye).M(c, d)
        })
    };

    function fk() {
        var a = this;
        this.b = this.i = this.c = this.a = 0;
        this.s = new PerformanceObserver(ek(640, function(b) {
            b = ba(b.getEntries());
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                if ("layout-shift" === c.entryType) {
                    var d = c;
                    d.hadRecentInput || (a.a += Number(d.value), Number(d.value) > a.c && (a.c = Number(d.value)))
                }
                "largest-contentful-paint" === c.entryType && (d = c, a.i = Math.floor(d.renderTime || d.loadTime));
                "first-input" === c.entryType && (a.b = Number((c.processingStart - c.startTime).toFixed(3)))
            }
        }));
        this.F = !1;
        this.g = ek(641, this.g.bind(this))
    }
    ka(fk, fh);
    fk.prototype.g = function() {
        var a = document;
        if (2 === ({
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0) && !this.F) {
            this.F = !0;
            this.s.takeRecords();
            a = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics&cls=" + this.a.toFixed(3);
            a += "&mls=" + this.c.toFixed(3);
            a += "&lcp=" + Math.floor(this.i);
            0 < this.b && (a += "&fid=" + this.b);
            var b = oh.j().b();
            a += "&eid=" + b.join();
            window.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            })
        }
    };

    function gk(a) {
        return Nd.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
    }

    function hk(a, b) {
        a.setAttribute("data-adsbygoogle-status", "done");
        ik(a, b)
    }

    function ik(a, b) {
        var c = window,
            d = Md();
        d.google_spfd || (d.google_spfd = ck);
        (d = b.google_reactive_ads_config) || ck(a, b, c);
        if (!jk(a, b, c)) {
            d || (c.google_lpabyc = Nh(c, a));
            if (d) {
                d = d.page_level_pubvars || {};
                if (I(C).page_contains_reactive_tag && !I(C).allow_second_reactive_tag) {
                    if (d.pltais) {
                        Rd(!1);
                        return
                    }
                    throw new M("Only one 'enable_page_level_ads' allowed per page.");
                }
                I(C).page_contains_reactive_tag = !0;
                Rd(7 === d.google_pgb_reactive)
            } else Id(c);
            Gd(Aj, function(e, f) {
                b[f] = b[f] || c[f]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (I(C).first_tag_on_page || 0);
            gf(164, function() {
                Uj(c, b, a)
            })
        }
    }

    function jk(a, b, c) {
        var d = b.google_reactive_ads_config;
        if (d) {
            var e = d.page_level_pubvars;
            var f = (Aa(e) ? e : {}).google_tag_origin
        }
        e = "string" == typeof a.className && /(\W|^)adsbygoogle-noablate(\W|$)/.test(a.className);
        var g = b.google_ad_slot;
        var h = f || b.google_tag_origin;
        f = I(c);
        Sd(f.ad_whitelist || [], g, h) ? g = null : (h = f.space_collapsing || "none", g = (g = Sd(f.ad_blacklist || [], g)) ? {
            na: !0,
            Fa: g.space_collapsing || h
        } : f.remove_ads_by_default ? {
            na: !0,
            Fa: h,
            da: f.ablation_viewport_offset
        } : null);
        if (g && g.na && "on" != b.google_adtest && !e && (e = eg(a, c), !g.da || g.da && (e || 0) >= g.da)) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = Ba(a), c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == g.Fa && (null !== rc(a.getAttribute("width")) && a.setAttribute("width", 0), null !== rc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0;
        if ((e = fc(a, c)) && "none" == e.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (p.console && p.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function kk(a) {
        var b = document.getElementsByTagName("INS");
        for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (gk(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a)) return d
        }
        return null
    }

    function lk() {
        var a = Xb(document, "INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        tc(a);
        return a
    }

    function mk(a) {
        var b = {};
        Gd(ne, function(e, f) {
            !1 === a.enable_page_level_ads ? b[f] = !1 : a.hasOwnProperty(f) && (b[f] = a[f])
        });
        Aa(a.enable_page_level_ads) && (b.page_level_pubvars = a.enable_page_level_ads);
        var c = lk();
        Tb.body.appendChild(c);
        var d = {};
        d = (d.google_reactive_ads_config = b, d.google_ad_client = a.google_ad_client, d);
        d.google_pause_ad_requests = I(C).pause_ad_requests || !1;
        hk(c, d)
    }

    function nk(a) {
        return "complete" == a.readyState || "interactive" == a.readyState
    }

    function ok(a) {
        function b() {
            return mk(a)
        }
        var c = void 0 === c ? Tb : c;
        var d = Pd(window);
        if (!d) throw new M("Page-level tag does not work inside iframes.");
        Mf(d).wasPlaTagProcessed = !0;
        if (c.body || nk(c)) b();
        else {
            var e = Sa(hf(191, b));
            zc(c, "DOMContentLoaded", e);
            (new p.MutationObserver(function(f, g) {
                c.body && (e(), g.disconnect())
            })).observe(c, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function pk(a) {
        var b = {};
        gf(165, function() {
            qk(a, b)
        }, function(c) {
            c.client = c.client || b.google_ad_client || a.google_ad_client;
            c.slotname = c.slotname || b.google_ad_slot;
            c.tag_origin = c.tag_origin || b.google_tag_origin
        })
    }

    function rk(a) {
        delete a.google_checked_head;
        kc(a, function(b, c) {
            Ud[c] || (delete a[c], b = c.replace("google", "data").replace(/_/g, "-"), p.console.warn("AdSense head tag doesn't support " + b + " attribute."))
        })
    }

    function qk(a, b) {
        if (null == a) throw new M("push() called with no parameters.");
        Ia = (new Date).getTime();
        Nj();
        a: {
            if (void 0 != a.enable_page_level_ads) {
                if ("string" == typeof a.google_ad_client) {
                    var c = !0;
                    break a
                }
                throw new M("'google_ad_client' is missing from the tag config.");
            }
            c = !1
        }
        if (c) sk(a, b);
        else if ((c = a.params) && Gd(c, function(e, f) {
                b[f] = e
            }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
        else {
            a = tk(a.element);
            ak(a, b);
            c = I(p).head_tag_slot_vars || {};
            kc(c, function(e, f) {
                b.hasOwnProperty(f) || (b[f] = e)
            });
            if (a.hasAttribute("data-require-head") && !I(p).head_tag_slot_vars) throw new M("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
            if (!b.google_ad_client) throw new M("Ad client is missing from the slot.");
            G(210) && (b.google_apsail = lh(b.google_ad_client));
            var d = (c = 0 === (I(C).first_tag_on_page || 0) && Lh(b)) && Mh(c);
            c && !d && (sk(c), I(C).skip_next_reactive_tag = !0);
            0 === (I(C).first_tag_on_page || 0) && (I(C).first_tag_on_page = 2);
            "_gfp_p_" in C || (C._gfp_p_ = !1);
            Zj(b.google_ad_client);
            b.google_pause_ad_requests = I(C).pause_ad_requests || !1;
            hk(a, b);
            c && d && uk(c)
        }
    }

    function uk(a) {
        function b() {
            Mf(p).wasPlaTagProcessed || p.adsbygoogle && p.adsbygoogle.push(a)
        }
        nk(Tb) ? b() : zc(Tb, "DOMContentLoaded", Sa(b))
    }

    function sk(a, b) {
        if (I(C).skip_next_reactive_tag) I(C).skip_next_reactive_tag = !1;
        else {
            0 === (I(C).first_tag_on_page || 0) && (I(C).first_tag_on_page = 1);
            b && a.tag_partner && (Qd(p, a.tag_partner), Qd(b, a.tag_partner));
            a: if (!I(C).ama_ran_on_page) {
                try {
                    var c = p.localStorage.getItem("google_ama_config")
                } catch (v) {
                    c = null
                }
                try {
                    var d = c ? new ee(c ? JSON.parse(c) : null) : null
                } catch (v) {
                    d = null
                }
                if (b = d)
                    if (c = A(b, ge, 3), !c || y(c, 1) <= +new Date) try {
                        p.localStorage.removeItem("google_ama_config")
                    } catch (v) {
                        sf(p, {
                            lserr: 1
                        })
                    } else {
                        if (Mh(a) && (c = oe(p.location.pathname, B(b, he, 7)), !c || !Gb(c, 8))) break a;
                        I(C).ama_ran_on_page = !0;
                        A(b, ke, 13) && 1 === y(A(b, ke, 13), 1) && (c = 0, A(A(b, ke, 13), le, 6) && y(A(A(b, ke, 13), le, 6), 3) && (c = y(A(A(b, ke, 13), le, 6), 3) || 0), d = I(p), d.remove_ads_by_default = !0, d.space_collapsing = "slot", d.ablation_viewport_offset = c);
                        zf(3, [Kb(b)]);
                        c = a.google_ad_client;
                        d = nf(pf, new mf(null, tf(Aa(a.enable_page_level_ads) ? a.enable_page_level_ads : {})));
                        try {
                            var e = oe(p.location.pathname, B(b, he, 7)),
                                f;
                            if (f = e) b: {
                                var g = y(e, 2);
                                if (g)
                                    for (var h = 0; h < g.length; h++)
                                        if (1 == g[h]) {
                                            f = !0;
                                            break b
                                        }
                                f = !1
                            }
                            if (f) {
                                if (y(e, 4)) {
                                    f = {};
                                    var k = new mf(null, (f.google_package = y(e, 4), f));
                                    d = nf(d, k)
                                }
                                var n = new Kg(c, b, e, d),
                                    m = new Pg;
                                (new Ug(n, m)).start();
                                var u = m.b;
                                var r = Ha(Xg, p);
                                if (u.b) throw Error("Then functions already set.");
                                u.b = Ha(Wg, p);
                                u.c = r;
                                Sg(u)
                            }
                        } catch (v) {
                            sf(p, {
                                atf: -1
                            })
                        }
                    }
            }
            ok(a)
        }
    }

    function tk(a) {
        if (a) {
            if (!gk(a) && (a.id ? a = kk(a.id) : a = null, !a)) throw new M("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new M("'element' is not a good DOM element.");
        } else if (a = kk(), !a) throw new M("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function vk() {
        df();
        Ze.Ca(kf);
        gf(166, wk)
    }

    function wk() {
        var a = Fd(Ed(C)) || C,
            b = I(a);
        if (!b.plle) {
            b.plle = !0;
            null == nc(a, "google_pem_mod") && oc(a, "google_pem_mod");
            var c = [null, null];
            try {
                var d = JSON.parse("[[[186,null,null,[1]],[189,null,null,[1]],[null,30,null,[null,4]],[196,null,null,[1]]],[[12,[[1,[[21064123],[21064124]]],[10,[[21064522],[21064523,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\x22LayoutShift\x22]]]]],[13,[[null,[[21064708],[21064709,[[215,null,null,[1]]]]]]]],[10,[[7,[[20040008,[[202,null,null,[1]]]],[20040009,[[202,null,null,[1]],[182,null,null,[1]]]],[20040027,[[202,null,null,[1]],[182,null,null,[],[[[2,[[4,null,8,null,null,null,null,[\x22IntersectionObserver\x22]],[4,null,8,null,null,null,null,[\x22Proxy\x22]]]],[1]]]]]]]],[1,[[21062810],[21062811]]],[null,[[21063914],[21063915,[[225,null,null,[1]]]]]],[1,[[21063996],[21063997,[[160,null,null,[1]]]]]],[5,[[21064530],[21064531,[[205,null,null,[1]]]],[21064532,[[null,30,null,[null,3]]]],[21064533,[[205,null,null,[1]],[null,30,null,[null,3]]]],[21064534,[[null,29,null,[null,2]]]],[21064535,[[205,null,null,[1]],[null,29,null,[null,2]]]],[21064536,[[null,29,null,[null,2]],[null,30,null,[null,3]]]],[21064537,[[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]]]]]],[1,[[21064602],[21064603,[[226,null,null,[1]],[225,null,null,[1]]]]]],[200,[[21064714],[21064715,[[207,null,null,[1]]]]]],[1000,[[182982000,[[218,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x227\x22]],[7,null,null,5,null,40,null,[\x227\x22]]]]],[182982100,[[217,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x227\x22]],[7,null,null,5,null,40,null,[\x227\x22]]]]]]],[1000,[[182982200,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x227\x22]],[7,null,null,5,null,40,null,[\x227\x22]]]]],[182982300,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x227\x22]],[7,null,null,5,null,40,null,[\x227\x22]]]]]]],[1000,[[182983000,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2215\x22]],[7,null,null,5,null,1000,null,[\x2215\x22]],[4,null,24,null,null,null,null,[\x2211\x22]]]]],[182983100,[[219,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2215\x22]],[7,null,null,5,null,1000,null,[\x2215\x22]],[4,null,24,null,null,null,null,[\x2211\x22]]]]]]],[1000,[[182983200,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2215\x22]],[7,null,null,5,null,1000,null,[\x2215\x22]],[4,null,24,null,null,null,null,[\x2211\x22]]]]],[182983300,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2215\x22]],[7,null,null,5,null,1000,null,[\x2215\x22]],[4,null,24,null,null,null,null,[\x2211\x22]]]]]]],[1000,[[182984000,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2212\x22]],[7,null,null,5,null,20,null,[\x2212\x22]],[4,null,23,null,null,null,null,[\x221\x22]]]]],[182984100,[[218,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2212\x22]],[7,null,null,5,null,20,null,[\x2212\x22]],[4,null,23,null,null,null,null,[\x221\x22]]]]]]],[1000,[[182984200,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2212\x22]],[7,null,null,5,null,20,null,[\x2212\x22]],[4,null,23,null,null,null,null,[\x221\x22]]]]],[182984300,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2212\x22]],[7,null,null,5,null,20,null,[\x2212\x22]],[4,null,23,null,null,null,null,[\x221\x22]]]]]]],[1000,[[368226410,[[190,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2219\x22]],[7,null,null,5,null,20,null,[\x2219\x22]]]]],[368226411,[[224,null,null,[1]],[190,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2219\x22]],[7,null,null,5,null,20,null,[\x2219\x22]]]]]]],[1000,[[368226420,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2219\x22]],[7,null,null,5,null,20,null,[\x2219\x22]]]]],[368226421,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2219\x22]],[7,null,null,5,null,20,null,[\x2219\x22]]]]]]],[1000,[[368226430,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2219\x22]],[7,null,null,5,null,20,null,[\x2219\x22]]]]],[368226431,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2219\x22]],[7,null,null,5,null,20,null,[\x2219\x22]]]]]]],[1000,[[368226570,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2216\x22]],[7,null,null,5,null,20,null,[\x2216\x22]]]]],[368226571,[[210,null,null,[1]],[211,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2216\x22]],[7,null,null,5,null,20,null,[\x2216\x22]]]]]]],[1000,[[368226580,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2217\x22]],[7,null,null,5,null,20,null,[\x2217\x22]]]]],[368226581,[[222,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2217\x22]],[7,null,null,5,null,20,null,[\x2217\x22]]]]]]],[1000,[[368226590,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2217\x22]],[7,null,null,5,null,20,null,[\x2217\x22]]]]],[368226591,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2217\x22]],[7,null,null,5,null,20,null,[\x2217\x22]]]]]]],[1000,[[368226600,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2214\x22]],[7,null,null,5,null,20,null,[\x2214\x22]]]]],[368226601,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2214\x22]],[7,null,null,5,null,20,null,[\x2214\x22]]]]]]],[1000,[[368226610,[[190,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2214\x22]],[7,null,null,5,null,20,null,[\x2214\x22]]]]],[368226611,[[216,null,null,[1]],[190,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2214\x22]],[7,null,null,5,null,20,null,[\x2214\x22]]]]]]],[1000,[[368885003,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x224\x22]],[7,null,null,5,null,20,null,[\x224\x22]]]]],[368885004,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x224\x22]],[7,null,null,5,null,20,null,[\x224\x22]]]]]]],[1000,[[519641231,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2213\x22]],[7,null,null,5,null,2,null,[\x2213\x22]]]]],[519641232,[[191,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2213\x22]],[7,null,null,5,null,2,null,[\x2213\x22]]]]]]],[1000,[[633794021,[[190,null,null,[1]]],[2,[[8,null,null,5,null,-1,null,[\x2218\x22]],[7,null,null,5,null,1,null,[\x2218\x22]]]]],[633794022,[[208,null,null,[1]],[190,null,null,[1]]],[2,[[8,null,null,5,null,99,null,[\x2218\x22]],[7,null,null,5,null,101,null,[\x2218\x22]]]]],[633794023,[[227,null,null,[1]],[190,null,null,[1]]],[2,[[8,null,null,5,null,199,null,[\x2218\x22]],[7,null,null,5,null,201,null,[\x2218\x22]]]]],[633794024,[[190,null,null,[1]]],[2,[[8,null,null,5,null,299,null,[\x2218\x22]],[7,null,null,5,null,301,null,[\x2218\x22]]]]]]],[1,[[633794031,[[190,null,null,[1]]]],[633794032,[[232,null,null,[1]],[190,null,null,[1]]]],[633794033,[[233,null,null,[1]],[190,null,null,[1]]]],[633794034,[[233,null,null,[1]],[232,null,null,[1]],[190,null,null,[1]]]]],null,null,null,21]]],[11,[[1000,[[368226300,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2211\x22]],[7,null,null,5,null,100,null,[\x2211\x22]]]]],[368226301,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2211\x22]],[7,null,null,5,null,100,null,[\x2211\x22]]]]]]],[1000,[[368226305,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2211\x22]],[7,null,null,5,null,100,null,[\x2211\x22]]]]],[368226306,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2211\x22]],[7,null,null,5,null,100,null,[\x2211\x22]]]]]]],[1000,[[368226310,[[190,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2211\x22]],[7,null,null,5,null,100,null,[\x2211\x22]]]]],[368226311,[[209,null,null,[1]],[190,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2211\x22]],[7,null,null,5,null,100,null,[\x2211\x22]]]]]]]]]]]")
            } catch (m) {
                d = c
            }
            zf(13, [d]);
            qi(new $h(d), Oh.j(), {
                ra: Jh(a)
            }, Uh(a));
            oh.j().a(12);
            oh.j().a(10);
            b.eids = La(oh.j().b(), String).concat(b.eids || []);
            b = b.eids;
            bh || (bh = new ch);
            var e = bh;
            Ic = !0;
            var f;
            d = wh;
            var g = ti(a, Q(e, 136), [d.f, d.h]);
            S(b, g);
            jh(a, 12) && (d = rh, c = qh, g = ui(a, new Ie(0, 999, 0), Q(e, 149), Q(e, 150), [d.f, d.h], 4), S(b, g), g == d.f ? f = c.f : g == d.h ? f = c.h : f = "", S(b, f));
            d = vh;
            g = ui(a, Ph, Q(e, 160), Q(e, 161), [d.f, d.R, d.P]);
            S(b, g);
            c = uh;
            g == d.f ? f = c.f : g == d.R ? f = c.R : g == d.P ? f = c.P : f = "";
            S(b, f);
            d = th;
            g = ui(a, Sh, Q(e, 179), Q(e, 180), [d.f, d.U]);
            S(b, g);
            c = sh;
            g == d.f ? f = c.f : g == d.U ? f = c.U : f = "";
            S(b, f);
            ab("") && S(b, "");
            d = Ah;
            g = ti(a, Q(e, 13), [d.o, d.f]);
            S(b, g);
            g = ti(a, 0, [d.ma]);
            S(b, g);
            d = Bh;
            g = ti(a, Q(e, 60), [d.o, d.f]);
            S(b, g);
            g == Bh.o && (d = Ch, g = ti(a, Q(e, 66), [d.o, d.f]), S(b, g), d = Eh, g = ti(a, Q(e, 137), [d.o, d.f]), S(b, g), g == Ch.o && (d = Dh, g = ti(a, Q(e, 135), [d.o, d.f]), S(b, g)));
            d = xh;
            g = ti(a, Q(e, 98), [d.f, d.h]);
            S(b, g);
            d = yh;
            g = ui(a, Rh, Q(e, 173), Q(e, 174), [d.f, d.h]);
            S(b, g);
            c = zh;
            g == d.f ? f = c.f : g == d.h ? f = c.h : f = "";
            S(b, f);
            d = Fh;
            g = ui(a, Qh, Q(e, 99), Q(e, 100), [d.f, d.h]);
            S(b, g);
            c = Gh;
            g == d.f ? f = c.f : g == d.h ? f = c.h : f = "";
            S(b, f);
            d = Hh;
            g = ti(a, Q(e, 165), [d.f, d.h]);
            S(b, g);
            d = R;
            g = ui(a, Th, Q(e, 189), Q(e, 190), [d.f, d.T, d.K, d.J, d.H, d.I]);
            S(b, g);
            c = Ih;
            g == d.f ? f = c.f : g == d.T ? f = c.T : g == d.K ? f = c.K : g == d.J ? f = c.J : g == d.H ? f = c.H : g == d.I ? f = c.I : f = "";
            S(b, f);
            g = ti(a, Q(e, 185), ["20199336", "20199335"]);
            S(b, g);
            a = Pd(a) || a;
            Zg(a.location, "google_mc_lab") && S(b, "242104166")
        }
        if (!t("Trident") && !t("MSIE") || 0 <= ib(ub(), 11)) {
            a = J(C, Ch.o) || J(C, Ah.o) || J(C, Ah.ma);
            af(a);
            Jj();
            Gj(".google.nl") && (Z[1] = ".google.nl");
            Lj();
            try {
                if (C.PerformanceObserver && G(203)) {
                    var h = new fk;
                    h.s.observe({
                        entryTypes: ["layout-shift", "largest-contentful-paint", "first-input"],
                        buffered: !0
                    });
                    document.addEventListener("visibilitychange", h.g)
                }
            } catch (m) {}
            if (h = Pd(p)) h = Mf(h), h.tagSpecificState[1] || (h.tagSpecificState[1] = new Yg);
            if (f = C.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])')) {
                f.setAttribute("data-checked-head", "true");
                a = I(window);
                if (a.head_tag_slot_vars) throw new M("Only one AdSense head tag supported per page. The second tag is ignored.");
                h = {};
                ak(f, h);
                rk(h);
                f = {};
                for (var k in h) f[k] = h[k];
                a.head_tag_slot_vars = f;
                k = {};
                k = (k.google_ad_client = h.google_ad_client, k.enable_page_level_ads = h, k);
                C.adsbygoogle || (C.adsbygoogle = []);
                h = C.adsbygoogle;
                h.loaded ? h.push(k) : h.splice(0, 0, k)
            }
            k = window.adsbygoogle;
            if (!k || !k.loaded) {
                h = {
                    push: pk,
                    loaded: !0
                };
                try {
                    Object.defineProperty(h, "requestNonPersonalizedAds", {
                        set: xk
                    }), Object.defineProperty(h, "pauseAdRequests", {
                        set: yk
                    }), Object.defineProperty(h, "cookieOptions", {
                        set: zk
                    }), Object.defineProperty(h, "onload", {
                        set: Ak
                    })
                } catch (m) {}
                if (k)
                    for (a = ba(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]), f = a.next(); !f.done; f = a.next()) f = f.value, void 0 !== k[f] && (h[f] = k[f]);
                "_gfp_a_" in window || (window._gfp_a_ = Xj);
                if (k && k.shift) try {
                    var n;
                    for (a = 20; 0 < k.length && (n = k.shift()) && 0 < a;) pk(n), --a
                } catch (m) {
                    throw window.setTimeout(vk, 0), m;
                }
                window.adsbygoogle = h;
                k && (h.onload = k.onload)
            }
        }
    }

    function xk(a) {
        if (+a) {
            if ((a = dc()) && a.frames && !a.frames.GoogleSetNPA) try {
                var b = a.document,
                    c = new Yb(b),
                    d = b.body || b.head && b.head.parentElement;
                if (d) {
                    var e = Xb(c.a, "IFRAME");
                    e.name = "GoogleSetNPA";
                    e.id = "GoogleSetNPA";
                    e.setAttribute("style", "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;");
                    d.appendChild(e)
                }
            } catch (f) {}
        } else(b = dc().document.getElementById("GoogleSetNPA")) && b.parentNode && b.parentNode.removeChild(b)
    }

    function yk(a) {
        +a ? I(C).pause_ad_requests = !0 : (I(C).pause_ad_requests = !1, a = function() {
            if (!I(C).pause_ad_requests) {
                var b = Md(),
                    c = Md();
                try {
                    if (Tb.createEvent) {
                        var d = Tb.createEvent("CustomEvent");
                        d.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !1, !1, "");
                        b.dispatchEvent(d)
                    } else if (Hd(c.CustomEvent)) {
                        var e = new c.CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", {
                            bubbles: !1,
                            cancelable: !1,
                            detail: ""
                        });
                        b.dispatchEvent(e)
                    } else if (Hd(c.Event)) {
                        var f = new Event("adsbygoogle-pub-unpause-ad-requests-event", {
                            bubbles: !1,
                            cancelable: !1
                        });
                        b.dispatchEvent(f)
                    }
                } catch (g) {}
            }
        }, p.setTimeout(a, 0), p.setTimeout(a, 1E3))
    }

    function zk(a) {
        switch (a) {
            case 0:
                a = !0;
                break;
            case 1:
                a = !1;
                break;
            case 2:
                a = Xj;
                break;
            default:
                throw Error("Illegal value of cookieOptions: " + a);
        }
        C._gfp_a_ = a;
        "_gfp_p_" in C && (a = C.google_sv_map, Zj(a[lc(a)].google_ad_client))
    }

    function Ak(a) {
        Hd(a) && window.setTimeout(a, 0)
    };
    vk();
}).call(this);