(function() {
    var f, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        ia = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        ja = function(a, b) {
            if (b) {
                var c = ia;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    e in c || (c[e] = {});
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && ca(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    ja("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
            var d = this + "";
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6", "es3");
    var la = function() {
            la = function() {};
            ia.Symbol || (ia.Symbol = na)
        },
        ra = function(a, b) {
            this.Mp = a;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: b
            })
        };
    ra.prototype.toString = function() {
        return this.Mp
    };
    var na = function() {
            function a(c) {
                if (this instanceof a) throw new TypeError("Symbol is not a constructor");
                return new ra("jscomp_symbol_" + (c || "") + "_" + b++, c)
            }
            var b = 0;
            return a
        }(),
        va = function() {
            la();
            var a = ia.Symbol.iterator;
            a || (a = ia.Symbol.iterator = ia.Symbol("Symbol.iterator"));
            "function" != typeof Array.prototype[a] && ca(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ua(aa(this))
                }
            });
            va = function() {}
        },
        ua = function(a) {
            va();
            a = {
                next: a
            };
            a[ia.Symbol.iterator] = function() {
                return this
            };
            return a
        },
        xa = function(a, b) {
            va();
            a instanceof String && (a += "");
            var c = 0,
                d = {
                    next: function() {
                        if (c < a.length) {
                            var e = c++;
                            return {
                                value: b(e, a[e]),
                                done: !1
                            }
                        }
                        d.next = function() {
                            return {
                                done: !0,
                                value: void 0
                            }
                        };
                        return d.next()
                    }
                };
            d[Symbol.iterator] = function() {
                return d
            };
            return d
        };
    ja("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return xa(this, function(b) {
                return b
            })
        }
    }, "es6", "es3");
    ja("Array.prototype.values", function(a) {
        return a ? a : function() {
            return xa(this, function(b, c) {
                return c
            })
        }
    }, "es8", "es3");
    ja("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(k) {
                return k
            };
            var e = [],
                g = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof g) {
                b = g.call(b);
                for (var h = 0; !(g = b.next()).done;) e.push(c.call(d, g.value, h++))
            } else
                for (g = b.length, h = 0; h < g; h++) e.push(c.call(d, b[h], h));
            return e
        }
    }, "es6", "es3");
    var za = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    ja("WeakMap", function(a) {
        function b() {}

        function c(l) {
            var n = typeof l;
            return "object" === n && null !== l || "function" === n
        }

        function d(l) {
            if (!za(l, g)) {
                var n = new b;
                ca(l, g, {
                    value: n
                })
            }
        }

        function e(l) {
            var n = Object[l];
            n && (Object[l] = function(v) {
                if (v instanceof b) return v;
                d(v);
                return n(v)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var l = Object.seal({}),
                        n = Object.seal({}),
                        v = new a([
                            [l, 2],
                            [n, 3]
                        ]);
                    if (2 != v.get(l) || 3 != v.get(n)) return !1;
                    v["delete"](l);
                    v.set(n, 4);
                    return !v.has(l) && 4 == v.get(n)
                } catch (u) {
                    return !1
                }
            }()) return a;
        var g = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var h = 0,
            k = function(l) {
                this.Fe = (h += Math.random() + 1).toString();
                if (l) {
                    l = ba(l);
                    for (var n; !(n = l.next()).done;) n = n.value, this.set(n[0], n[1])
                }
            };
        k.prototype.set = function(l, n) {
            if (!c(l)) throw Error("Invalid WeakMap key");
            d(l);
            if (!za(l, g)) throw Error("WeakMap key fail: " + l);
            l[g][this.Fe] = n;
            return this
        };
        k.prototype.get = function(l) {
            return c(l) && za(l, g) ? l[g][this.Fe] : void 0
        };
        k.prototype.has = function(l) {
            return c(l) && za(l, g) && za(l[g],
                this.Fe)
        };
        k.prototype["delete"] = function(l) {
            return c(l) && za(l, g) && za(l[g], this.Fe) ? delete l[g][this.Fe] : !1
        };
        return k
    }, "es6", "es3");
    ja("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) za(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8", "es3");
    ja("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6", "es3");
    ja("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var g = d[c];
                if (g === b || Object.is(g, b)) return !0
            }
            return !1
        }
    }, "es7", "es3");
    var Aa = Aa || {},
        r = this || self,
        Ba = function(a) {
            return "string" == typeof a
        },
        Ca = function(a, b, c) {
            a = a.split(".");
            c = c || r;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
        },
        Da = function(a) {
            a = a || "";
            throw Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
        },
        Fa = function() {},
        La = function(a) {
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
        },
        Ma = function(a) {
            return "array" == La(a)
        },
        Oa = function(a) {
            var b = La(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        Pa = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        Qa = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        Ra = function(a, b, c) {
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
                return a.apply(b,
                    arguments)
            }
        },
        C = function(a, b, c) {
            C = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Qa : Ra;
            return C.apply(null, arguments)
        },
        Ua = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        Va = Date.now || function() {
            return +new Date
        },
        E = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.be = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        };
    var Wa = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Wa);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    E(Wa, Error);
    Wa.prototype.name = "CustomError";
    var Xa = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Wa.call(this, c + a[d])
    };
    E(Xa, Wa);
    Xa.prototype.name = "AssertionError";
    var $a = Array.prototype.indexOf ? function(a, b, c) {
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (Ba(a)) return Ba(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        ab = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Ba(a) ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a)
        },
        bb = Array.prototype.filter ? function(a, b, c) {
            return Array.prototype.filter.call(a,
                b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], g = 0, h = Ba(a) ? a.split("") : a, k = 0; k < d; k++)
                if (k in h) {
                    var l = h[k];
                    b.call(c, l, k, a) && (e[g++] = l)
                }
            return e
        },
        cb = Array.prototype.map ? function(a, b, c) {
            return Array.prototype.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), g = Ba(a) ? a.split("") : a, h = 0; h < d; h++) h in g && (e[h] = b.call(c, g[h], h, a));
            return e
        },
        db = function(a, b, c) {
            a: {
                for (var d = a.length, e = Ba(a) ? a.split("") : a, g = 0; g < d; g++)
                    if (g in e && b.call(c, e[g], g, a)) {
                        b = g;
                        break a
                    }
                b = -1
            }
            return 0 > b ? null : Ba(a) ? a.charAt(b) : a[b]
        },
        fb = function(a, b) {
            b = $a(a, b);
            var c;
            (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
            return c
        },
        gb = function(a) {
            return Array.prototype.concat.apply([], arguments)
        },
        hb = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        ib = function(a, b, c) {
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        },
        jb = function(a, b, c) {
            return gb.apply([], cb(a, b, c))
        };
    var mb = function() {
            return null
        },
        nb = function(a) {
            return a
        },
        ob = function(a, b) {
            b = b || 0;
            return function() {
                return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
            }
        };
    var pb = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        qb = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        rb = function(a, b) {
            return null !== a && b in a
        },
        sb = function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        },
        tb = function(a) {
            var b = La(a);
            if ("object" == b || "array" == b) {
                if ("function" == La(a.clone)) return a.clone();
                b = "array" == b ? [] : {};
                for (var c in a) b[c] = tb(a[c]);
                return b
            }
            return a
        },
        ub = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        yb = function(a,
            b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var g = 0; g < ub.length; g++) c = ub[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var zb = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Cb = function(a, b) {
        this.np = a === Ab && b || "";
        this.aq = Bb
    };
    Cb.prototype.nb = !0;
    Cb.prototype.Oa = function() {
        return this.np
    };
    var Db = function(a) {
            return a instanceof Cb && a.constructor === Cb && a.aq === Bb ? a.np : "type_error:Const"
        },
        Bb = {},
        Ab = {};
    var Eb = function() {
        this.Yn = ""
    };
    Eb.prototype.nb = !0;
    Eb.prototype.Oa = function() {
        return this.Yn.toString()
    };
    Eb.prototype.ob = function(a) {
        this.Yn = a;
        return this
    };
    (new Eb).ob("");
    var Fb = /<[^>]*>|&[^;]+;/g,
        Gb = function(a, b) {
            return b ? a.replace(Fb, "") : a
        },
        Hb = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
        Ib = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]/,
        Jb = /^http:\/\/.*/,
        Kb = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff][^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*$/,
        Lb = /[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc][^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*$/,
        Mb = /\s+/,
        Nb = /[\d\u06f0-\u06f9]/;
    var Qb = function(a, b, c) {
        this.$n = a === Ob && b || "";
        this.xp = a === Ob && c || null;
        this.bq = Pb
    };
    Qb.prototype.nb = !0;
    Qb.prototype.Oa = function() {
        return this.$n.toString()
    };
    Qb.prototype.Vi = !0;
    Qb.prototype.sd = function() {
        return 1
    };
    var Rb = function(a) {
            return a instanceof Qb && a.constructor === Qb && a.bq === Pb ? a.$n : "type_error:TrustedResourceUrl"
        },
        Ub = function(a, b) {
            var c = Db(a);
            if (!Sb.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(Tb, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof Cb ? Db(d) : encodeURIComponent(String(d))
            });
            return new Qb(Ob, a, null)
        },
        Tb = /%{(\w+)}/g,
        Sb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        Pb = {},
        Ob = {};
    var Vb = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        cc = function(a, b) {
            if (b) a = a.replace(Wb, "&amp;").replace(Xb, "&lt;").replace(Yb, "&gt;").replace(Zb, "&quot;").replace($b, "&#39;").replace(ac, "&#0;");
            else {
                if (!bc.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Wb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Xb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Yb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Zb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace($b,
                    "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(ac, "&#0;"))
            }
            return a
        },
        Wb = /&/g,
        Xb = /</g,
        Yb = />/g,
        Zb = /"/g,
        $b = /'/g,
        ac = /\x00/g,
        bc = /[\x00&<>"']/,
        ec = function(a, b) {
            var c = 0;
            a = Vb(String(a)).split(".");
            b = Vb(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var g = a[e] || "",
                    h = b[e] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length) break;
                    c = dc(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) ||
                        dc(0 == g[2].length, 0 == h[2].length) || dc(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == c)
            }
            return c
        },
        dc = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var hc = function(a, b) {
        this.Zn = a === fc && b || "";
        this.Zp = gc
    };
    hc.prototype.nb = !0;
    hc.prototype.Oa = function() {
        return this.Zn.toString()
    };
    hc.prototype.Vi = !0;
    hc.prototype.sd = function() {
        return 1
    };
    var ic = function(a) {
            return a instanceof hc && a.constructor === hc && a.Zp === gc ? a.Zn : "type_error:SafeUrl"
        },
        jc = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,
        kc = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,
        lc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        nc = function(a) {
            if (a instanceof hc) return a;
            a = "object" == typeof a && a.nb ? a.Oa() : String(a);
            lc.test(a) || (a = "about:invalid#zClosurez");
            return mc(a)
        },
        pc = function(a, b) {
            if (a instanceof hc) return a;
            a = "object" == typeof a && a.nb ? a.Oa() : String(a);
            if (b && /^data:/i.test(a)) {
                b = a.replace(/(%0A|%0D)/g, "");
                var c = b.match(kc);
                c = c && jc.test(c[1]);
                b = mc(c ? b : "about:invalid#zClosurez");
                if (b.Oa() == a) return b
            }
            lc.test(a) || (a = "about:invalid#zClosurez");
            return mc(a)
        },
        gc = {},
        mc = function(a) {
            return new hc(fc, a)
        };
    mc("about:blank");
    var fc = {};
    var rc = function() {
        this.Aj = "";
        this.Yp = qc
    };
    rc.prototype.nb = !0;
    var qc = {};
    rc.prototype.Oa = function() {
        return this.Aj
    };
    var sc = function(a) {
        return a instanceof rc && a.constructor === rc && a.Yp === qc ? a.Aj : "type_error:SafeStyle"
    };
    rc.prototype.ob = function(a) {
        this.Aj = a;
        return this
    };
    var tc = (new rc).ob(""),
        vc = function(a) {
            var b = "",
                c;
            for (c in a) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
                var d = a[c];
                null != d && (d = Ma(d) ? cb(d, uc).join(" ") : uc(d), b += c + ":" + d + ";")
            }
            return b ? (new rc).ob(b) : tc
        },
        uc = function(a) {
            if (a instanceof hc) return 'url("' + ic(a).toString().replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
            if (a instanceof Cb) a = Db(a);
            else {
                a = String(a);
                var b = a.replace(wc, "$1").replace(wc, "$1").replace(xc, "url");
                if (yc.test(b)) {
                    if (b = !zc.test(a)) {
                        for (var c =
                                b = !0, d = 0; d < a.length; d++) {
                            var e = a.charAt(d);
                            "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                        }
                        b = b && c && Ac(a)
                    }
                    a = b ? Bc(a) : "zClosurez"
                } else a = "zClosurez"
            }
            if (/[{;}]/.test(a)) throw new Xa("Value does not allow [{;}], got: %s.", [a]);
            return a
        },
        Ac = function(a) {
            for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                if ("]" == e) {
                    if (b) return !1;
                    b = !0
                } else if ("[" == e) {
                    if (!b) return !1;
                    b = !1
                } else if (!b && !c.test(e)) return !1
            }
            return b
        },
        yc = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
        xc = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        wc = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
        zc = /\/\*/,
        Bc = function(a) {
            return a.replace(xc, function(b, c, d, e) {
                var g = "";
                d = d.replace(/^(['"])(.*)\1$/, function(h, k, l) {
                    g = k;
                    return l
                });
                b = nc(d).Oa();
                return c + g + b + g + e
            })
        };
    var Dc = function() {
        this.zj = "";
        this.Xp = Cc
    };
    Dc.prototype.nb = !0;
    var Cc = {},
        Ec = function(a, b) {
            if (-1 != a.indexOf("<")) throw Error("Selector does not allow '<', got: " + a);
            var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
            if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
            a: {
                for (var d = {
                        "(": ")",
                        "[": "]"
                    }, e = [], g = 0; g < c.length; g++) {
                    var h = c[g];
                    if (d[h]) e.push(d[h]);
                    else {
                        b: {
                            var k = void 0;
                            for (k in d)
                                if (d[k] == h) {
                                    k = !0;
                                    break b
                                }
                            k = !1
                        }
                        if (k && e.pop() != h) {
                            c = !1;
                            break a
                        }
                    }
                }
                c = 0 == e.length
            }
            if (!c) throw Error("() and [] in selector must be balanced, got: " +
                a);
            b instanceof rc || (b = vc(b));
            a = a + "{" + sc(b).replace(/</g, "\\3C ") + "}";
            return (new Dc).ob(a)
        },
        Gc = function(a) {
            var b = "",
                c = function(d) {
                    Ma(d) ? ab(d, c) : b += Fc(d)
                };
            ab(arguments, c);
            return (new Dc).ob(b)
        };
    Dc.prototype.Oa = function() {
        return this.zj
    };
    var Fc = function(a) {
        return a instanceof Dc && a.constructor === Dc && a.Xp === Cc ? a.zj : "type_error:SafeStyleSheet"
    };
    Dc.prototype.ob = function(a) {
        this.zj = a;
        return this
    };
    var Hc = (new Dc).ob("");
    var Ic;
    a: {
        var Jc = r.navigator;
        if (Jc) {
            var Kc = Jc.userAgent;
            if (Kc) {
                Ic = Kc;
                break a
            }
        }
        Ic = ""
    }
    var Lc = function(a) {
            return -1 != Ic.indexOf(a)
        },
        Mc = function(a) {
            for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
            return c
        };
    var Nc = function() {
            return Lc("Trident") || Lc("MSIE")
        },
        Pc = function() {
            return Lc("Safari") && !(Oc() || Lc("Coast") || Lc("Opera") || Lc("Edge") || Lc("Edg/") || Lc("OPR") || Lc("Firefox") || Lc("FxiOS") || Lc("Silk") || Lc("Android"))
        },
        Oc = function() {
            return (Lc("Chrome") || Lc("CriOS")) && !Lc("Edge")
        },
        Rc = function() {
            function a(e) {
                e = db(e, d);
                return c[e] || ""
            }
            var b = Ic;
            if (Nc()) return Qc(b);
            b = Mc(b);
            var c = {};
            ab(b, function(e) {
                c[e[0]] = e[1]
            });
            var d = Ua(rb, c);
            return Lc("Opera") ? a(["Version", "Opera"]) : Lc("Edge") ? a(["Edge"]) : Lc("Edg/") ? a(["Edg"]) :
                Oc() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
        },
        Qc = function(a) {
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
    var Tc = function() {
        this.yj = "";
        this.Wp = Sc;
        this.Jh = null
    };
    Tc.prototype.Vi = !0;
    Tc.prototype.sd = function() {
        return this.Jh
    };
    Tc.prototype.nb = !0;
    Tc.prototype.Oa = function() {
        return this.yj.toString()
    };
    var Uc = function(a) {
            return a instanceof Tc && a.constructor === Tc && a.Wp === Sc ? a.yj : "type_error:SafeHtml"
        },
        Wc = function(a) {
            if (a instanceof Tc) return a;
            var b = "object" == typeof a,
                c = null;
            b && a.Vi && (c = a.sd());
            return Vc(cc(b && a.nb ? a.Oa() : String(a)), c)
        },
        Xc = /^[a-zA-Z0-9-]+$/,
        Yc = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        Zc = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        $c = function(a, b) {
            a = Wc(a);
            var c = a.sd(),
                d = [],
                e =
                function(g) {
                    Ma(g) ? ab(g, e) : (g = Wc(g), d.push(Uc(g).toString()), g = g.sd(), 0 == c ? c = g : 0 != g && c != g && (c = null))
                };
            ab(b, e);
            return Vc(d.join(Uc(a).toString()), c)
        },
        bd = function(a) {
            return $c(ad, Array.prototype.slice.call(arguments))
        },
        cd = function(a, b) {
            var c = bd(ib(arguments, 1));
            c.Jh = a;
            return c
        },
        Sc = {},
        Vc = function(a, b) {
            return (new Tc).ob(a, b)
        };
    Tc.prototype.ob = function(a, b) {
        this.yj = a;
        this.Jh = b;
        return this
    };
    Vc("<!DOCTYPE html>", 0);
    var ad = Vc("", 0);
    Vc("<br>", 0);
    var ed = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(function() {
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            b = a.firstChild.firstChild;
            a.innerHTML = Uc(ad);
            return !b.parentElement
        }),
        fd = function(a, b) {
            if (ed())
                for (; a.lastChild;) a.removeChild(a.lastChild);
            a.innerHTML = Uc(b)
        },
        gd = function(a, b) {
            b = b instanceof hc ? b : pc(b);
            a.href = ic(b)
        },
        hd = function(a, b) {
            b = b instanceof hc ? b : pc(b, /^data:image\//i.test(b));
            a.src =
                ic(b)
        },
        id = function(a, b) {
            b = b instanceof hc ? b : pc(b);
            a.href = ic(b)
        };
    var jd = function(a, b) {
        return a = cc(a, b)
    };
    var kd = function() {
            return -1 != Ic.toLowerCase().indexOf("webkit") && !Lc("Edge")
        },
        ld = function() {
            return Lc("Gecko") && !kd() && !(Lc("Trident") || Lc("MSIE")) && !Lc("Edge")
        };
    var md = function(a) {
        md[" "](a);
        return a
    };
    md[" "] = Fa;
    var nd = function(a, b, c, d) {
        d = d ? d(b) : b;
        return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    };
    var od = Lc("Opera"),
        pd = Nc(),
        qd = Lc("Edge"),
        rd = ld(),
        sd = kd(),
        td = function() {
            var a = r.document;
            return a ? a.documentMode : void 0
        },
        ud;
    a: {
        var vd = "",
            wd = function() {
                var a = Ic;
                if (rd) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (qd) return /Edge\/([\d\.]+)/.exec(a);
                if (pd) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (sd) return /WebKit\/(\S+)/.exec(a);
                if (od) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();wd && (vd = wd ? wd[1] : "");
        if (pd) {
            var xd = td();
            if (null != xd && xd > parseFloat(vd)) {
                ud = String(xd);
                break a
            }
        }
        ud = vd
    }
    var yd = ud,
        zd = {},
        Ad = function(a) {
            return nd(zd, a, function() {
                return 0 <= ec(yd, a)
            })
        },
        Bd;
    Bd = r.document && pd ? td() : void 0;
    var Cd = Pc() && !(Lc("iPhone") && !Lc("iPod") && !Lc("iPad") || Lc("iPad") || Lc("iPod"));
    var Dd = {},
        Ed = null,
        Fd = rd || sd && !Cd || od || "function" == typeof r.btoa,
        Gd = function(a, b) {
            if (Fd && !b) var c = r.btoa(a);
            else {
                c = [];
                for (var d = 0, e = 0; e < a.length; e++) {
                    var g = a.charCodeAt(e);
                    255 < g && (c[d++] = g & 255, g >>= 8);
                    c[d++] = g
                }
                a = b;
                void 0 === a && (a = 0);
                if (!Ed)
                    for (Ed = {}, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                        g = b.concat(d[e].split(""));
                        Dd[e] = g;
                        for (var h = 0; h < g.length; h++) {
                            var k = g[h];
                            void 0 === Ed[k] && (Ed[k] = h)
                        }
                    }
                a = Dd[a];
                b = [];
                for (d = 0; d < c.length; d +=
                    3) {
                    var l = c[d],
                        n = (e = d + 1 < c.length) ? c[d + 1] : 0;
                    k = (g = d + 2 < c.length) ? c[d + 2] : 0;
                    h = l >> 2;
                    l = (l & 3) << 4 | n >> 4;
                    n = (n & 15) << 2 | k >> 6;
                    k &= 63;
                    g || (k = 64, e || (n = 64));
                    b.push(a[h], a[l], a[n] || "", a[k] || "")
                }
                c = b.join("")
            }
            return c
        };
    var Hd = function(a, b, c, d, e) {
        this.ks = a;
        this.Eh = c;
        this.Iu = e
    };
    Hd.prototype.qn = function() {
        return !!this.Eh
    };
    var Id = function() {},
        Jd = "function" == typeof Uint8Array,
        Od = function(a, b, c, d, e, g) {
            a.Y = null;
            b || (b = c ? [c] : []);
            a.iB = c ? String(c) : void 0;
            a.cd = 0 === c ? -1 : 0;
            a.wa = b;
            a: {
                c = a.wa.length;b = -1;
                if (c && (b = c - 1, c = a.wa[b], !(null === c || "object" != typeof c || Ma(c) || Jd && c instanceof Uint8Array))) {
                    a.Kd = b - a.cd;
                    a.Ua = c;
                    break a
                } - 1 < d ? (a.Kd = Math.max(d, b + 1 - a.cd), a.Ua = null) : a.Kd = Number.MAX_VALUE
            }
            a.dA = {};
            if (e)
                for (d = 0; d < e.length; d++) b = e[d], b < a.Kd ? (b += a.cd, a.wa[b] = a.wa[b] || Kd) : (Ld(a), a.Ua[b] = a.Ua[b] || Kd);
            if (g && g.length)
                for (d = 0; d < g.length; d++) {
                    b =
                        e = void 0;
                    c = a;
                    for (var h = g[d], k = 0; k < h.length; k++) {
                        var l = h[k],
                            n = Md(c, l);
                        null != n && (b = l, e = n, Nd(c, l, void 0))
                    }
                    b && Nd(c, b, e)
                }
        },
        Kd = [],
        Ld = function(a) {
            var b = a.Kd + a.cd;
            a.wa[b] || (a.Ua = a.wa[b] = {})
        },
        Md = function(a, b) {
            if (b < a.Kd) {
                b += a.cd;
                var c = a.wa[b];
                return c === Kd ? a.wa[b] = [] : c
            }
            if (a.Ua) return c = a.Ua[b], c === Kd ? a.Ua[b] = [] : c
        },
        Pd = function(a, b, c) {
            a = Md(a, b);
            return null == a ? c : a
        },
        Nd = function(a, b, c) {
            b < a.Kd ? a.wa[b + a.cd] = c : (Ld(a), a.Ua[b] = c);
            return a
        },
        Qd = function(a, b, c, d) {
            a.Y || (a.Y = {});
            if (!a.Y[c]) {
                var e = Md(a, c);
                if (d || e) a.Y[c] = new b(e)
            }
            return a.Y[c]
        },
        Rd = function(a, b, c) {
            a.Y || (a.Y = {});
            var d = c ? c.wa : c;
            a.Y[b] = c;
            return Nd(a, b, d)
        };
    Id.prototype.Xd = function() {
        return JSON.stringify(this.wa && this.wa, Sd)
    };
    var Sd = function(a, b) {
        return "number" != typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
    };
    Id.prototype.toString = function() {
        return this.wa.toString()
    };
    Id.prototype.getExtension = function(a) {
        if (this.Ua) {
            this.Y || (this.Y = {});
            var b = a.ks;
            if (a.Iu) {
                if (a.qn()) return this.Y[b] || (this.Y[b] = cb(this.Ua[b] || [], function(c) {
                    return new a.Eh(c)
                })), this.Y[b]
            } else if (a.qn()) return !this.Y[b] && this.Ua[b] && (this.Y[b] = new a.Eh(this.Ua[b])), this.Y[b];
            return this.Ua[b]
        }
    };
    Id.prototype.wf = function() {
        return new this.constructor(Td(this.wa))
    };
    Id.prototype.clone = function() {
        return new this.constructor(Td(this.wa))
    };
    var Td = function(a) {
        if (Ma(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? Td(d) : d)
            }
            return b
        }
        if (Jd && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? Td(d) : d);
        return b
    };
    var Vd = function(a) {
        Od(this, a, 0, -1, Ud, null)
    };
    E(Vd, Id);
    var Ud = [2];
    Vd.prototype.ww = function(a) {
        return Nd(this, 4, a)
    };
    Vd.prototype.Oq = function() {
        return Nd(this, 4, void 0)
    };
    var Wd = function(a) {
        if (!a) return "";
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var b = a.substring(a.indexOf("://") + 3),
            c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
        a = a.substring(0, a.indexOf("://"));
        if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && "android-app" !== a && "chrome-search" !== a && "app" !== a) throw Error("Invalid URI scheme in origin: " + a);
        c = "";
        var d = b.indexOf(":");
        if (-1 != d) {
            var e =
                b.substring(d + 1);
            b = b.substring(0, d);
            if ("http" === a && "80" !== e || "https" === a && "443" !== e) c = ":" + e
        }
        return a + "://" + b + c
    };
    var Xd = function() {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            v = n = 0
        }

        function b(u) {
            for (var F = h, w = 0; 64 > w; w += 4) F[w / 4] = u[w] << 24 | u[w + 1] << 16 | u[w + 2] << 8 | u[w + 3];
            for (w = 16; 80 > w; w++) u = F[w - 3] ^ F[w - 8] ^ F[w - 14] ^ F[w - 16], F[w] = (u << 1 | u >>> 31) & 4294967295;
            u = e[0];
            var Q = e[1],
                V = e[2],
                N = e[3],
                fa = e[4];
            for (w = 0; 80 > w; w++) {
                if (40 > w)
                    if (20 > w) {
                        var B = N ^ Q & (V ^ N);
                        var y = 1518500249
                    } else B = Q ^ V ^ N, y = 1859775393;
                else 60 > w ? (B = Q & V | N & (Q | V), y = 2400959708) : (B = Q ^ V ^ N, y = 3395469782);
                B = ((u << 5 | u >>> 27) & 4294967295) +
                    B + fa + y + F[w] & 4294967295;
                fa = N;
                N = V;
                V = (Q << 30 | Q >>> 2) & 4294967295;
                Q = u;
                u = B
            }
            e[0] = e[0] + u & 4294967295;
            e[1] = e[1] + Q & 4294967295;
            e[2] = e[2] + V & 4294967295;
            e[3] = e[3] + N & 4294967295;
            e[4] = e[4] + fa & 4294967295
        }

        function c(u, F) {
            if ("string" === typeof u) {
                u = unescape(encodeURIComponent(u));
                for (var w = [], Q = 0, V = u.length; Q < V; ++Q) w.push(u.charCodeAt(Q));
                u = w
            }
            F || (F = u.length);
            w = 0;
            if (0 == n)
                for (; w + 64 < F;) b(u.slice(w, w + 64)), w += 64, v += 64;
            for (; w < F;)
                if (g[n++] = u[w++], v++, 64 == n)
                    for (n = 0, b(g); w + 64 < F;) b(u.slice(w, w + 64)), w += 64, v += 64
        }

        function d() {
            var u = [],
                F = 8 * v;
            56 > n ? c(k, 56 - n) : c(k, 64 - (n - 56));
            for (var w = 63; 56 <= w; w--) g[w] = F & 255, F >>>= 8;
            b(g);
            for (w = F = 0; 5 > w; w++)
                for (var Q = 24; 0 <= Q; Q -= 8) u[F++] = e[w] >> Q & 255;
            return u
        }
        for (var e = [], g = [], h = [], k = [128], l = 1; 64 > l; ++l) k[l] = 0;
        var n, v;
        a();
        return {
            reset: a,
            update: c,
            digest: d,
            Fr: function() {
                for (var u = d(), F = "", w = 0; w < u.length; w++) F += "0123456789ABCDEF".charAt(Math.floor(u[w] / 16)) + "0123456789ABCDEF".charAt(u[w] % 16);
                return F
            }
        }
    };
    var Zd = function(a, b, c, d) {
            var e = [];
            if (1 == (Ma(c) ? 2 : 1)) return e = [b, a], ab(d, function(k) {
                e.push(k)
            }), Yd(e.join(" "));
            var g = [],
                h = [];
            ab(c, function(k) {
                h.push(k.key);
                g.push(k.value)
            });
            c = Math.floor((new Date).getTime() / 1E3);
            e = 0 == g.length ? [c, b, a] : [g.join(":"), c, b, a];
            ab(d, function(k) {
                e.push(k)
            });
            a = Yd(e.join(" "));
            a = [c, a];
            0 == h.length || a.push(h.join(""));
            return a.join("_")
        },
        Yd = function(a) {
            var b = Xd();
            b.update(a);
            return b.Fr().toLowerCase()
        };
    var $d = function(a) {
        this.Oh = a || {
            cookie: ""
        }
    };
    f = $d.prototype;
    f.isEnabled = function() {
        return navigator.cookieEnabled
    };
    f.Ou = function(a) {
        return !/[;=\s]/.test(a)
    };
    f.Qu = function(a) {
        return !/[;\r\n]/.test(a)
    };
    f.set = function(a, b, c, d, e, g) {
        if (!this.Ou(a)) throw Error('Invalid cookie name "' + a + '"');
        if (!this.Qu(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 !== c || (c = -1);
        e = e ? ";domain=" + e : "";
        d = d ? ";path=" + d : "";
        g = g ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Va() + 1E3 * c)).toUTCString();
        this.Aw(a + "=" + b + e + d + c + g)
    };
    f.get = function(a, b) {
        for (var c = a + "=", d = this.Fi(), e = 0, g; e < d.length; e++) {
            g = Vb(d[e]);
            if (0 == g.lastIndexOf(c, 0)) return g.substr(c.length);
            if (g == a) return ""
        }
        return b
    };
    f.remove = function(a, b, c) {
        var d = this.jl(a);
        this.set(a, "", 0, b, c);
        return d
    };
    f.Dc = function() {
        return this.Ai().keys
    };
    f.xd = function() {
        return this.Ai().values
    };
    f.jm = function() {
        return this.Oh.cookie ? this.Fi().length : 0
    };
    f.jl = function(a) {
        return void 0 !== this.get(a)
    };
    f.clear = function() {
        for (var a = this.Ai().keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };
    f.Aw = function(a) {
        this.Oh.cookie = a
    };
    f.Fi = function() {
        return (this.Oh.cookie || "").split(";")
    };
    f.Ai = function() {
        for (var a = this.Fi(), b = [], c = [], d, e, g = 0; g < a.length; g++) e = Vb(a[g]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };
    var ae = function(a) {
        var b = Wd(String(r.location.href)),
            c = r.__OVERRIDE_SID;
        null == c && (c = (new $d(document)).get("SID"));
        if (c) {
            var d = (c = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:")) ? r.__SAPISID : r.__APISID;
            null == d && (d = (new $d(document)).get(c ? "SAPISID" : "APISID"));
            if (d) return b = String(r.location.href), c = c ? "SAPISIDHASH" : "APISIDHASH", b && d && c ? [c, Zd(Wd(b), d, a || null, [])].join(" ") : null
        }
        return null
    };
    var be = function(a, b) {
        return a + Math.random() * (b - a)
    };
    var de = function(a, b) {
            pb(b, function(c, d) {
                c && "object" == typeof c && c.nb && (c = c.Oa());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : ce.hasOwnProperty(d) ? a.setAttribute(ce[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        ce = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        ee = function(a) {
            for (var b; b = a.firstChild;) a.removeChild(b)
        },
        fe = function(a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        },
        ge = function(a, b) {
            if ("textContent" in a) a.textContent = b;
            else if (3 == a.nodeType) a.data = String(b);
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                a.firstChild.data = String(b)
            } else ee(a), a.appendChild((9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode(String(b)))
        };
    var he = function() {
        this.kd = this.kd;
        this.Rc = this.Rc
    };
    f = he.prototype;
    f.kd = !1;
    f.Nh = function() {
        this.kd || (this.kd = !0, this.Jb())
    };
    f.no = function(a) {
        this.mq(Ua(ie, a))
    };
    f.mq = function(a, b) {
        this.kd ? void 0 !== b ? a.call(b) : a() : (this.Rc || (this.Rc = []), this.Rc.push(void 0 !== b ? C(a, b) : a))
    };
    f.Jb = function() {
        if (this.Rc)
            for (; this.Rc.length;) this.Rc.shift()()
    };
    var ie = function(a) {
        a && "function" == typeof a.Nh && a.Nh()
    };
    var je = function(a, b) {
        if (a.classList) a.classList.add(b);
        else {
            if (a.classList) var c = a.classList.contains(b);
            else a.classList ? c = a.classList : (c = a.className, c = Ba(c) && c.match(/\S+/g) || []), c = 0 <= $a(c, b);
            c || (a.className += 0 < a.className.length ? " " + b : b)
        }
    };
    var ke = "StopIteration" in r ? r.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        le = function() {};
    le.prototype.next = function() {
        throw ke;
    };
    le.prototype.cq = function() {
        return this
    };
    var me = !pd || 9 <= Number(Bd),
        ne = pd && !Ad("9"),
        oe = function() {
            if (!r.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            try {
                r.addEventListener("test", Fa, b), r.removeEventListener("test", Fa, b)
            } catch (c) {}
            return a
        }();
    var pe = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.Sc = !1;
        this.Eo = !0
    };
    pe.prototype.stopPropagation = function() {
        this.Sc = !0
    };
    pe.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Eo = !1
    };
    var qe = function(a, b) {
        pe.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.key = "";
        this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.we = this.state = null;
        a && this.lu(a, b)
    };
    E(qe, pe);
    qe.prototype.lu = function(a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        if (b = a.relatedTarget) {
            if (rd) {
                a: {
                    try {
                        md(b.nodeName);
                        var d = !0;
                        break a
                    } catch (e) {}
                    d = !1
                }
                d || (b = null)
            }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.we = a;
        a.defaultPrevented && this.preventDefault()
    };
    qe.prototype.stopPropagation = function() {
        qe.be.stopPropagation.call(this);
        this.we.stopPropagation ? this.we.stopPropagation() : this.we.cancelBubble = !0
    };
    qe.prototype.preventDefault = function() {
        qe.be.preventDefault.call(this);
        var a = this.we;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, ne) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var re = "closure_listenable_" + (1E6 * Math.random() | 0),
        se = 0;
    var te = function(a, b, c, d, e, g) {
        this.listener = a;
        this.rg = b;
        this.src = c;
        this.type = d;
        this.capture = !!e;
        this.cg = g;
        this.key = ++se;
        this.Nd = this.sf = !1
    };
    te.prototype.mg = function() {
        this.Nd = !0;
        this.cg = this.src = this.rg = this.listener = null
    };
    var ue = function(a) {
        this.src = a;
        this.Ia = {};
        this.df = 0
    };
    f = ue.prototype;
    f.add = function(a, b, c, d, e) {
        var g = a.toString();
        a = this.Ia[g];
        a || (a = this.Ia[g] = [], this.df++);
        var h = ve(a, b, d, e); - 1 < h ? (b = a[h], c || (b.sf = !1)) : (b = new te(b, null, this.src, g, !!d, e), b.sf = c, a.push(b));
        return b
    };
    f.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.Ia)) return !1;
        var e = this.Ia[a];
        b = ve(e, b, c, d);
        return -1 < b ? (e[b].mg(), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.Ia[a], this.df--), !0) : !1
    };
    f.oo = function(a) {
        var b = a.type;
        if (!(b in this.Ia)) return !1;
        var c = fb(this.Ia[b], a);
        c && (a.mg(), 0 == this.Ia[b].length && (delete this.Ia[b], this.df--));
        return c
    };
    f.Mv = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.Ia)
            if (!a || c == a) {
                for (var d = this.Ia[c], e = 0; e < d.length; e++) ++b, d[e].mg();
                delete this.Ia[c];
                this.df--
            }
        return b
    };
    f.Bi = function(a, b, c, d) {
        a = this.Ia[a.toString()];
        var e = -1;
        a && (e = ve(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    var ve = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var g = a[e];
            if (!g.Nd && g.listener == b && g.capture == !!c && g.cg == d) return e
        }
        return -1
    };
    var we = "closure_lm_" + (1E6 * Math.random() | 0),
        xe = {},
        ye = 0,
        Ae = function(a, b, c, d, e) {
            if (d && d.once) return ze(a, b, c, d, e);
            if (Ma(b)) {
                for (var g = 0; g < b.length; g++) Ae(a, b[g], c, d, e);
                return null
            }
            c = Be(c);
            return a && a[re] ? a.Ob(b, c, Pa(d) ? !!d.capture : !!d, e) : Ce(a, b, c, !1, d, e)
        },
        Ce = function(a, b, c, d, e, g) {
            if (!b) throw Error("Invalid event type");
            var h = Pa(e) ? !!e.capture : !!e,
                k = De(a);
            k || (a[we] = k = new ue(a));
            c = k.add(b, c, d, h, g);
            if (c.rg) return c;
            d = Ee();
            c.rg = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) oe || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(),
                d, e);
            else if (a.attachEvent) a.attachEvent(Fe(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            ye++;
            return c
        },
        Ee = function() {
            var a = Ge,
                b = me ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        ze = function(a, b, c, d, e) {
            if (Ma(b)) {
                for (var g = 0; g < b.length; g++) ze(a, b[g], c, d, e);
                return null
            }
            c = Be(c);
            return a && a[re] ? a.An(b, c, Pa(d) ? !!d.capture : !!d, e) : Ce(a, b, c, !0, d, e)
        },
        He = function(a, b, c, d, e) {
            if (Ma(b)) {
                for (var g = 0; g < b.length; g++) He(a, b[g], c, d, e);
                return null
            }
            d = Pa(d) ? !!d.capture : !!d;
            c = Be(c);
            if (a && a[re]) return a.uk(b, c, d, e);
            if (!a) return !1;
            if (a = De(a))
                if (b = a.Bi(b, c, d, e)) return Ie(b);
            return !1
        },
        Ie = function(a) {
            if ("number" == typeof a || !a || a.Nd) return !1;
            var b = a.src;
            if (b && b[re]) return b.zp(a);
            var c = a.type,
                d = a.rg;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Fe(c), d) : b.addListener && b.removeListener && b.removeListener(d);
            ye--;
            (c =
                De(b)) ? (c.oo(a), 0 == c.df && (c.src = null, b[we] = null)) : a.mg();
            return !0
        },
        Fe = function(a) {
            return a in xe ? xe[a] : xe[a] = "on" + a
        },
        Ke = function(a, b, c, d) {
            var e = !0;
            if (a = De(a))
                if (b = a.Ia[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var g = b[a];
                        g && g.capture == c && !g.Nd && (g = Je(g, d), e = e && !1 !== g)
                    }
            return e
        },
        Je = function(a, b) {
            var c = a.listener,
                d = a.cg || a.src;
            a.sf && Ie(a);
            return c.call(d, b)
        },
        Ge = function(a, b) {
            if (a.Nd) return !0;
            if (!me) {
                if (!b) a: {
                    b = ["window", "event"];
                    for (var c = r, d = 0; d < b.length; d++)
                        if (c = c[b[d]], null == c) {
                            b = null;
                            break a
                        }
                    b =
                    c
                }
                d = b;
                b = new qe(d, this);
                c = !0;
                if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 == d.keyCode) try {
                            d.keyCode = -1;
                            break a
                        } catch (h) {
                            e = !0
                        }
                        if (e || void 0 == d.returnValue) d.returnValue = !0
                    }
                    d = [];
                    for (e = b.currentTarget; e; e = e.parentNode) d.push(e);a = a.type;
                    for (e = d.length - 1; !b.Sc && 0 <= e; e--) {
                        b.currentTarget = d[e];
                        var g = Ke(d[e], a, !0, b);
                        c = c && g
                    }
                    for (e = 0; !b.Sc && e < d.length; e++) b.currentTarget = d[e],
                    g = Ke(d[e], a, !1, b),
                    c = c && g
                }
                return c
            }
            return Je(a, new qe(b, this))
        },
        De = function(a) {
            a = a[we];
            return a instanceof ue ? a : null
        },
        Le = "__closure_events_fn_" +
        (1E9 * Math.random() >>> 0),
        Be = function(a) {
            if ("function" == La(a)) return a;
            a[Le] || (a[Le] = function(b) {
                return a.handleEvent(b)
            });
            return a[Le]
        };
    var Me = function() {
        he.call(this);
        this.hc = new ue(this);
        this.eq = this;
        this.vj = null
    };
    E(Me, he);
    Me.prototype[re] = !0;
    f = Me.prototype;
    f.addEventListener = function(a, b, c, d) {
        Ae(this, a, b, c, d)
    };
    f.removeEventListener = function(a, b, c, d) {
        He(this, a, b, c, d)
    };
    f.dispatchEvent = function(a) {
        var b = this.vj;
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.vj) c.push(b), ++d
        }
        b = this.eq;
        d = a.type || a;
        if (Ba(a)) a = new pe(a, b);
        else if (a instanceof pe) a.target = a.target || b;
        else {
            var e = a;
            a = new pe(d, b);
            yb(a, e)
        }
        e = !0;
        if (c)
            for (var g = c.length - 1; !a.Sc && 0 <= g; g--) {
                var h = a.currentTarget = c[g];
                e = h.Pf(d, !0, a) && e
            }
        a.Sc || (h = a.currentTarget = b, e = h.Pf(d, !0, a) && e, a.Sc || (e = h.Pf(d, !1, a) && e));
        if (c)
            for (g = 0; !a.Sc && g < c.length; g++) h = a.currentTarget = c[g], e = h.Pf(d, !1, a) && e;
        return e
    };
    f.Jb = function() {
        Me.be.Jb.call(this);
        this.Nv();
        this.vj = null
    };
    f.Ob = function(a, b, c, d) {
        return this.hc.add(String(a), b, !1, c, d)
    };
    f.An = function(a, b, c, d) {
        return this.hc.add(String(a), b, !0, c, d)
    };
    f.uk = function(a, b, c, d) {
        return this.hc.remove(String(a), b, c, d)
    };
    f.zp = function(a) {
        return this.hc.oo(a)
    };
    f.Nv = function(a) {
        return this.hc ? this.hc.Mv(a) : 0
    };
    f.Pf = function(a, b, c) {
        a = this.hc.Ia[String(a)];
        if (!a) return !0;
        a = a.concat();
        for (var d = !0, e = 0; e < a.length; ++e) {
            var g = a[e];
            if (g && !g.Nd && g.capture == b) {
                var h = g.listener,
                    k = g.cg || g.src;
                g.sf && this.zp(g);
                d = !1 !== h.call(k, c) && d
            }
        }
        return d && 0 != c.Eo
    };
    f.Bi = function(a, b, c, d) {
        return this.hc.Bi(String(a), b, c, d)
    };
    var Ne = {};

    function Oe(a) {
        if (pd && !Ad(9)) return [0, 0, 0, 0];
        var b = Ne.hasOwnProperty(a) ? Ne[a] : null;
        if (b) return b;
        65536 < Object.keys(Ne).length && (Ne = {});
        var c = [0, 0, 0, 0];
        b = Pe(a, /\\[0-9A-Fa-f]{6}\s?/g);
        b = Pe(b, /\\[0-9A-Fa-f]{1,5}\s/g);
        b = Pe(b, /\\./g);
        b = b.replace(/:not\(([^\)]*)\)/g, "     $1 ");
        b = b.replace(/{[^]*/gm, "");
        b = Qe(b, c, /(\[[^\]]+\])/g, 2);
        b = Qe(b, c, /(#[^\#\s\+>~\.\[:]+)/g, 1);
        b = Qe(b, c, /(\.[^\s\+>~\.\[:]+)/g, 2);
        b = Qe(b, c, /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, 3);
        b = Qe(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
        b = Qe(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
        b = b.replace(/[\*\s\+>~]/g, " ");
        b = b.replace(/[#\.]/g, " ");
        Qe(b, c, /([^\s\+>~\.\[:]+)/g, 3);
        b = c;
        return Ne[a] = b
    }

    function Qe(a, b, c, d) {
        return a.replace(c, function(e) {
            b[d] += 1;
            return Array(e.length + 1).join(" ")
        })
    }

    function Pe(a, b) {
        return a.replace(b, function(c) {
            return Array(c.length + 1).join("A")
        })
    };
    var Re = {
            "* ARIA-CHECKED": !0,
            "* ARIA-COLCOUNT": !0,
            "* ARIA-COLINDEX": !0,
            "* ARIA-DESCRIBEDBY": !0,
            "* ARIA-DISABLED": !0,
            "* ARIA-GOOG-EDITABLE": !0,
            "* ARIA-LABEL": !0,
            "* ARIA-LABELLEDBY": !0,
            "* ARIA-MULTILINE": !0,
            "* ARIA-MULTISELECTABLE": !0,
            "* ARIA-ORIENTATION": !0,
            "* ARIA-PLACEHOLDER": !0,
            "* ARIA-READONLY": !0,
            "* ARIA-REQUIRED": !0,
            "* ARIA-ROLEDESCRIPTION": !0,
            "* ARIA-ROWCOUNT": !0,
            "* ARIA-ROWINDEX": !0,
            "* ARIA-SELECTED": !0,
            "* ABBR": !0,
            "* ACCEPT": !0,
            "* ACCESSKEY": !0,
            "* ALIGN": !0,
            "* ALT": !0,
            "* AUTOCOMPLETE": !0,
            "* AXIS": !0,
            "* BGCOLOR": !0,
            "* BORDER": !0,
            "* CELLPADDING": !0,
            "* CELLSPACING": !0,
            "* CHAROFF": !0,
            "* CHAR": !0,
            "* CHECKED": !0,
            "* CLEAR": !0,
            "* COLOR": !0,
            "* COLSPAN": !0,
            "* COLS": !0,
            "* COMPACT": !0,
            "* COORDS": !0,
            "* DATETIME": !0,
            "* DIR": !0,
            "* DISABLED": !0,
            "* ENCTYPE": !0,
            "* FACE": !0,
            "* FRAME": !0,
            "* HEIGHT": !0,
            "* HREFLANG": !0,
            "* HSPACE": !0,
            "* ISMAP": !0,
            "* LABEL": !0,
            "* LANG": !0,
            "* MAX": !0,
            "* MAXLENGTH": !0,
            "* METHOD": !0,
            "* MULTIPLE": !0,
            "* NOHREF": !0,
            "* NOSHADE": !0,
            "* NOWRAP": !0,
            "* OPEN": !0,
            "* READONLY": !0,
            "* REQUIRED": !0,
            "* REL": !0,
            "* REV": !0,
            "* ROLE": !0,
            "* ROWSPAN": !0,
            "* ROWS": !0,
            "* RULES": !0,
            "* SCOPE": !0,
            "* SELECTED": !0,
            "* SHAPE": !0,
            "* SIZE": !0,
            "* SPAN": !0,
            "* START": !0,
            "* SUMMARY": !0,
            "* TABINDEX": !0,
            "* TITLE": !0,
            "* TYPE": !0,
            "* VALIGN": !0,
            "* VALUE": !0,
            "* VSPACE": !0,
            "* WIDTH": !0
        },
        Se = {
            "* USEMAP": !0,
            "* ACTION": !0,
            "* CITE": !0,
            "* HREF": !0,
            "* LONGDESC": !0,
            "* SRC": !0,
            "LINK HREF": !0,
            "* FOR": !0,
            "* HEADERS": !0,
            "* NAME": !0,
            "A TARGET": !0,
            "* CLASS": !0,
            "* ID": !0,
            "* STYLE": !0
        };
    var Te = {
            rgb: !0,
            rgba: !0,
            alpha: !0,
            rect: !0,
            image: !0,
            "linear-gradient": !0,
            "radial-gradient": !0,
            "repeating-linear-gradient": !0,
            "repeating-radial-gradient": !0,
            "cubic-bezier": !0,
            matrix: !0,
            perspective: !0,
            rotate: !0,
            rotate3d: !0,
            rotatex: !0,
            rotatey: !0,
            steps: !0,
            rotatez: !0,
            scale: !0,
            scale3d: !0,
            scalex: !0,
            scaley: !0,
            scalez: !0,
            skew: !0,
            skewx: !0,
            skewy: !0,
            translate: !0,
            translate3d: !0,
            translatex: !0,
            translatey: !0,
            translatez: !0
        },
        Ue = /[\n\f\r"'()*<>]/g,
        Ve = {
            "\n": "%0a",
            "\f": "%0c",
            "\r": "%0d",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "*": "%2a",
            "<": "%3c",
            ">": "%3e"
        };

    function We(a) {
        return Ve[a]
    }
    var Xe = function(a, b, c) {
        b = Vb(b);
        if ("" == b) return null;
        var d = String(b.substr(0, 4)).toLowerCase();
        if (0 == ("url(" < d ? -1 : "url(" == d ? 0 : 1)) {
            if (!b.endsWith(")") || 1 < (b ? b.split("(").length - 1 : 0) || 1 < (b ? b.split(")").length - 1 : 0) || !c) a = null;
            else {
                a: for (b = b.substring(4, b.length - 1), d = 0; 2 > d; d++) {
                    var e = "\"'".charAt(d);
                    if (b.charAt(0) == e && b.charAt(b.length - 1) == e) {
                        b = b.substring(1, b.length - 1);
                        break a
                    }
                }
                a = c ? (a = c(b, a)) && "about:invalid#zClosurez" != ic(a).toString() ? 'url("' + ic(a).toString().replace(Ue, We) + '")' : null : null
            }
            return a
        }
        if (0 <
            b.indexOf("(")) {
            if (/"|'/.test(b)) return null;
            for (a = /([\-\w]+)\(/g; c = a.exec(b);)
                if (!(c[1] in Te)) return null
        }
        return b
    };

    function Ye(a, b) {
        a = r[a];
        return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
    }

    function Ze(a, b) {
        return (a = r[a]) && a.prototype && a.prototype[b] || null
    }
    var $e = Ye("Element", "attributes") || Ye("Node", "attributes"),
        af = Ze("Element", "hasAttribute"),
        bf = Ze("Element", "getAttribute"),
        cf = Ze("Element", "setAttribute"),
        df = Ze("Element", "removeAttribute"),
        ef = Ze("Element", "getElementsByTagName"),
        ff = Ze("Element", "matches") || Ze("Element", "msMatchesSelector"),
        gf = Ye("Node", "nodeName"),
        hf = Ye("Node", "nodeType"),
        jf = Ye("Node", "parentNode"),
        kf = Ye("HTMLElement", "style") || Ye("Element", "style"),
        lf = Ye("HTMLStyleElement", "sheet"),
        mf = Ze("CSSStyleDeclaration", "getPropertyValue"),
        nf = Ze("CSSStyleDeclaration", "setProperty");

    function of (a, b, c, d) {
        if (a) return a.apply(b);
        a = b[c];
        if (!d(a)) throw Error("Clobbering detected");
        return a
    }

    function pf(a, b, c, d) {
        if (a) return a.apply(b, d);
        if (pd && 10 > document.documentMode) {
            if (!b[c].call) throw Error("IE Clobbering detected");
        } else if ("function" != typeof b[c]) throw Error("Clobbering detected");
        return b[c].apply(b, d)
    }

    function qf(a) {
        return of($e, a, "attributes", function(b) {
            return b instanceof NamedNodeMap
        })
    }

    function rf(a, b, c) {
        try {
            pf(cf, a, "setAttribute", [b, c])
        } catch (d) {
            if (-1 == d.message.indexOf("A security problem occurred")) throw d;
        }
    }

    function sf(a) {
        return of(kf, a, "style", function(b) {
            return b instanceof CSSStyleDeclaration
        })
    }

    function tf(a) {
        return of(lf, a, "sheet", function(b) {
            return b instanceof CSSStyleSheet
        })
    }

    function uf(a) {
        return of(gf, a, "nodeName", function(b) {
            return "string" == typeof b
        })
    }

    function vf(a) {
        return of(hf, a, "nodeType", function(b) {
            return "number" == typeof b
        })
    }

    function wf(a) {
        return of(jf, a, "parentNode", function(b) {
            return !(b && "string" == typeof b.name && b.name && "parentnode" == b.name.toLowerCase())
        })
    }

    function xf(a, b) {
        return pf(mf, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [b]) || ""
    }

    function yf(a, b, c) {
        pf(nf, a, a.setProperty ? "setProperty" : "setAttribute", [b, c])
    };
    var zf = pd && 10 > document.documentMode ? null : /\s*([^\s'",]+[^'",]*(('([^'\r\n\f\\]|\\[^])*')|("([^"\r\n\f\\]|\\[^])*")|[^'",])*)/g,
        Af = {
            "-webkit-border-horizontal-spacing": !0,
            "-webkit-border-vertical-spacing": !0
        },
        Df = function(a, b, c) {
            var d = [];
            a = Bf(hb(a.cssRules));
            ab(a, function(e) {
                if (b && !/[a-zA-Z][\w-:\.]*/.test(b)) throw Error("Invalid container id");
                if (!(b && pd && 10 == document.documentMode && /\\['"]/.test(e.selectorText))) {
                    var g = b ? e.selectorText.replace(zf, "#" + b + " $1") : e.selectorText;
                    d.push(Ec(g, Cf(e.style,
                        c)))
                }
            });
            return Gc(d)
        },
        Bf = function(a) {
            return bb(a, function(b) {
                return b instanceof CSSStyleRule || b.type == CSSRule.STYLE_RULE
            })
        },
        Ff = function(a, b, c) {
            a = Ef("<style>" + a + "</style>");
            return null == a || null == a.sheet ? Hc : Df(a.sheet, void 0 != b ? b : null, c)
        },
        Ef = function(a) {
            if (pd && !Ad(10) || "function" != typeof r.DOMParser) return null;
            a = Vc("<html><head></head><body>" + a + "</body></html>", null);
            return (new DOMParser).parseFromString(Uc(a), "text/html").body.children[0]
        },
        Cf = function(a, b) {
            if (!a) return tc;
            var c = document.createElement("div").style,
                d = Gf(a);
            ab(d, function(e) {
                var g = sd && e in Af ? e : e.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
                0 != g.lastIndexOf("--", 0) && 0 != g.lastIndexOf("var", 0) && (e = xf(a, e), e = Xe(g, e, b), null != e && yf(c, g, e))
            });
            return (new rc).ob(c.cssText || "")
        },
        If = function(a) {
            var b = Array.from(pf(ef, a, "getElementsByTagName", ["STYLE"])),
                c = jb(b, function(e) {
                    return hb(tf(e).cssRules)
                });
            c = Bf(c);
            c.sort(function(e, g) {
                e = Oe(e.selectorText);
                a: {
                    g = Oe(g.selectorText);
                    for (var h = Math.min(e.length, g.length), k = 0; k < h; k++) {
                        var l =
                            e[k];
                        var n = g[k];
                        l = l > n ? 1 : l < n ? -1 : 0;
                        if (0 != l) {
                            e = l;
                            break a
                        }
                    }
                    e = e.length;g = g.length;e = e > g ? 1 : e < g ? -1 : 0
                }
                return -e
            });
            a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
            for (var d; d = a.nextNode();) ab(c, function(e) {
                pf(ff, d, d.matches ? "matches" : "msMatchesSelector", [e.selectorText]) && e.style && Hf(d, e.style)
            });
            ab(b, fe)
        },
        Hf = function(a, b) {
            var c = Gf(a.style),
                d = Gf(b);
            ab(d, function(e) {
                if (!(0 <= c.indexOf(e))) {
                    var g = xf(b, e);
                    yf(a.style, e, g)
                }
            })
        },
        Gf = function(a) {
            Oa(a) ? a = hb(a) : (a = qb(a), fb(a, "cssText"));
            return a
        };
    var Jf = "undefined" != typeof WeakMap && -1 != WeakMap.toString().indexOf("[native code]"),
        Kf = 0,
        Lf = function() {
            this.$ = [];
            this.Tg = [];
            this.gd = "data-elementweakmap-index-" + Kf++
        };
    Lf.prototype.set = function(a, b) {
        if (pf(af, a, "hasAttribute", [this.gd])) {
            var c = parseInt(pf(bf, a, "getAttribute", [this.gd]) || null, 10);
            this.Tg[c] = b
        } else c = this.Tg.push(b) - 1, rf(a, this.gd, c.toString()), this.$.push(a);
        return this
    };
    Lf.prototype.get = function(a) {
        if (pf(af, a, "hasAttribute", [this.gd])) return a = parseInt(pf(bf, a, "getAttribute", [this.gd]) || null, 10), this.Tg[a]
    };
    Lf.prototype.clear = function() {
        this.$.forEach(function(a) {
            pf(df, a, "removeAttribute", [this.gd])
        }, this);
        this.$ = [];
        this.Tg = []
    };
    var Mf = !pd || 10 <= Number(Bd),
        Nf = !pd || null == document.documentMode,
        Of = function() {};
    f = Of.prototype;
    f.Cv = function(a) {
        if (!Mf) return "";
        a = this.Dv(a);
        if (0 < qf(a).length) {
            var b = document.createElement("SPAN");
            b.appendChild(a);
            a = b
        }
        a = (new XMLSerializer).serializeToString(a);
        return a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"))
    };
    f.Dv = function(a) {
        if (!Mf) return document.createElement("SPAN");
        var b = document.createElement("SPAN");
        this.Av(b);
        a = this.rv(a);
        a = Vc(a, null);
        var c = document.createElement("template");
        if (Nf && "content" in c) fd(c, a), c = c.content;
        else {
            var d = document.implementation.createHTMLDocument("x");
            c = d.body;
            fd(d.body, a)
        }
        a = document.createTreeWalker(c, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, !1);
        c = Jf ? new WeakMap : new Lf;
        for (var e; e = a.nextNode();)
            if (d = this.ur(e)) {
                1 == vf(d) && c.set(e, d);
                e = wf(e);
                var g = !1;
                if (e) {
                    var h = vf(e),
                        k = uf(e).toLowerCase(),
                        l = wf(e);
                    11 != h || l ? "body" == k && l && (h = wf(l)) && !wf(h) && (g = !0) : g = !0;
                    h = null;
                    g || !e ? h = b : 1 == vf(e) && (h = c.get(e));
                    h.content && (h = h.content);
                    h.appendChild(d)
                }
            } else ee(e);
        c.clear && c.clear();
        return b
    };
    f.ur = function(a) {
        switch (vf(a)) {
            case 3:
                return this.createTextNode(a);
            case 1:
                return this.sr(a);
            default:
                return null
        }
    };
    f.sr = function(a) {
        if ("TEMPLATE" == uf(a).toUpperCase()) return null;
        var b = this.rr(a);
        if (!b) return null;
        this.vv(a, b);
        return b
    };
    f.vv = function(a, b) {
        var c = qf(a);
        if (null != c)
            for (var d = 0, e; e = c[d]; d++)
                if (e.specified) {
                    var g = this.uv(a, e);
                    null === g || rf(b, e.name, g)
                }
    };
    var Pf = {
        APPLET: !0,
        AUDIO: !0,
        BASE: !0,
        BGSOUND: !0,
        EMBED: !0,
        FORM: !0,
        IFRAME: !0,
        ISINDEX: !0,
        KEYGEN: !0,
        LAYER: !0,
        LINK: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        SVG: !0,
        STYLE: !0,
        TEMPLATE: !0,
        VIDEO: !0
    };
    var Qf = {
        A: !0,
        ABBR: !0,
        ACRONYM: !0,
        ADDRESS: !0,
        AREA: !0,
        ARTICLE: !0,
        ASIDE: !0,
        B: !0,
        BDI: !0,
        BDO: !0,
        BIG: !0,
        BLOCKQUOTE: !0,
        BR: !0,
        BUTTON: !0,
        CAPTION: !0,
        CENTER: !0,
        CITE: !0,
        CODE: !0,
        COL: !0,
        COLGROUP: !0,
        DATA: !0,
        DATALIST: !0,
        DD: !0,
        DEL: !0,
        DETAILS: !0,
        DFN: !0,
        DIALOG: !0,
        DIR: !0,
        DIV: !0,
        DL: !0,
        DT: !0,
        EM: !0,
        FIELDSET: !0,
        FIGCAPTION: !0,
        FIGURE: !0,
        FONT: !0,
        FOOTER: !0,
        FORM: !0,
        H1: !0,
        H2: !0,
        H3: !0,
        H4: !0,
        H5: !0,
        H6: !0,
        HEADER: !0,
        HGROUP: !0,
        HR: !0,
        I: !0,
        IMG: !0,
        INPUT: !0,
        INS: !0,
        KBD: !0,
        LABEL: !0,
        LEGEND: !0,
        LI: !0,
        MAIN: !0,
        MAP: !0,
        MARK: !0,
        MENU: !0,
        METER: !0,
        NAV: !0,
        NOSCRIPT: !0,
        OL: !0,
        OPTGROUP: !0,
        OPTION: !0,
        OUTPUT: !0,
        P: !0,
        PRE: !0,
        PROGRESS: !0,
        Q: !0,
        S: !0,
        SAMP: !0,
        SECTION: !0,
        SELECT: !0,
        SMALL: !0,
        SOURCE: !0,
        SPAN: !0,
        STRIKE: !0,
        STRONG: !0,
        STYLE: !0,
        SUB: !0,
        SUMMARY: !0,
        SUP: !0,
        TABLE: !0,
        TBODY: !0,
        TD: !0,
        TEXTAREA: !0,
        TFOOT: !0,
        TH: !0,
        THEAD: !0,
        TIME: !0,
        TR: !0,
        TT: !0,
        U: !0,
        UL: !0,
        VAR: !0,
        WBR: !0
    };
    var Rf = {
            "ANNOTATION-XML": !0,
            "COLOR-PROFILE": !0,
            "FONT-FACE": !0,
            "FONT-FACE-SRC": !0,
            "FONT-FACE-URI": !0,
            "FONT-FACE-FORMAT": !0,
            "FONT-FACE-NAME": !0,
            "MISSING-GLYPH": !0
        },
        Vf = function(a) {
            a = a || new Tf;
            a.su();
            this.ne = sb(a.xb);
            this.Ze = sb(a.Ze);
            this.de = sb(a.de);
            this.fk = a.fk;
            ab(a.Cr, function(b) {
                if (0 != b.lastIndexOf("data-", 0)) throw new Xa('Only "data-" attributes allowed, got: %s.', [b]);
                if (0 == b.lastIndexOf("data-sanitizer-", 0)) throw new Xa('Attributes with "%s" prefix are not allowed, got: %s.', ["data-sanitizer-",
                    b
                ]);
                this.ne["* " + b.toUpperCase()] = Uf
            }, this);
            ab(a.Br, function(b) {
                b = b.toUpperCase();
                if (-1 == b.indexOf("-") || Rf[b]) throw new Xa("Only valid custom element tag names allowed, got: %s.", [b]);
                this.de[b] = !0
            }, this);
            this.Ke = a.Ke;
            this.We = a.We;
            this.Bf = null;
            this.Yi = a.Yi
        };
    E(Vf, Of);
    var Wf = function(a) {
            return function(b, c) {
                return (b = a(Vb(b), c)) && "about:invalid#zClosurez" != ic(b).toString() ? ic(b).toString() : null
            }
        },
        Tf = function() {
            this.xb = {};
            ab([Re, Se], function(a) {
                ab(qb(a), function(b) {
                    this.xb[b] = Uf
                }, this)
            }, this);
            this.Xb = {};
            this.Cr = [];
            this.Br = [];
            this.Ze = sb(Pf);
            this.de = sb(Qf);
            this.fk = !1;
            this.Ep = nc;
            this.Go = this.pk = this.Jn = this.Ke = mb;
            this.We = null;
            this.Wn = this.Yi = !1
        };
    f = Tf.prototype;
    f.xq = function() {
        this.Go = Xf;
        return this
    };
    f.Wx = function(a) {
        this.Ke = a;
        return this
    };
    f.Yx = function(a) {
        this.Ep = a;
        return this
    };
    f.Vx = function(a) {
        this.Jn = a;
        return this
    };
    f.Xx = function(a) {
        this.pk = a;
        return this
    };
    var Yf = function(a, b) {
            return function(c, d, e, g) {
                c = a(c, d, e, g);
                return null == c ? null : b(c, d, e, g)
            }
        },
        Zf = function(a, b, c, d) {
            a[c] && !b[c] && (a[c] = Yf(a[c], d))
        };
    Tf.prototype.oe = function() {
        return new Vf(this)
    };
    Tf.prototype.su = function() {
        if (this.Wn) throw Error("HtmlSanitizer.Builder.build() can only be used once.");
        Zf(this.xb, this.Xb, "* USEMAP", $f);
        var a = Wf(this.Ep);
        ab(["* ACTION", "* CITE", "* HREF"], function(c) {
            Zf(this.xb, this.Xb, c, a)
        }, this);
        var b = Wf(this.Ke);
        ab(["* LONGDESC", "* SRC", "LINK HREF"], function(c) {
            Zf(this.xb, this.Xb, c, b)
        }, this);
        ab(["* FOR", "* HEADERS", "* NAME"], function(c) {
            Zf(this.xb, this.Xb, c, Ua(ag, this.Jn))
        }, this);
        Zf(this.xb, this.Xb, "A TARGET", Ua(bg, ["_blank", "_self"]));
        Zf(this.xb, this.Xb, "* CLASS",
            Ua(cg, this.pk));
        Zf(this.xb, this.Xb, "* ID", Ua(dg, this.pk));
        Zf(this.xb, this.Xb, "* STYLE", Ua(this.Go, b));
        this.Wn = !0
    };
    var eg = function(a, b) {
            a || (a = "*");
            return (a + " " + b).toUpperCase()
        },
        Xf = function(a, b, c, d) {
            if (!d.Ch) return null;
            b = sc(Cf(d.Ch, function(e, g) {
                c.Ar = g;
                e = a(e, c);
                return null == e ? null : mc(e)
            }));
            return "" == b ? null : b
        },
        Uf = function(a) {
            return Vb(a)
        },
        bg = function(a, b) {
            b = Vb(b);
            return 0 <= $a(a, b.toLowerCase()) ? b : null
        },
        $f = function(a) {
            return (a = Vb(a)) && "#" == a.charAt(0) ? a : null
        },
        ag = function(a, b, c) {
            return a(Vb(b), c)
        },
        cg = function(a, b, c) {
            b = b.split(/(?:\s+)/);
            for (var d = [], e = 0; e < b.length; e++) {
                var g = a(b[e], c);
                g && d.push(g)
            }
            return 0 == d.length ?
                null : d.join(" ")
        },
        dg = function(a, b, c) {
            return a(Vb(b), c)
        };
    f = Vf.prototype;
    f.ib = function(a) {
        this.Bf = this.qt();
        a = this.Cv(a);
        return Vc(a, null)
    };
    f.Av = function(a) {
        this.Bf && "*" == this.We && (a.id = this.Bf)
    };
    f.rv = function(a) {
        if (!this.Yi) return a;
        a = Ef("<div>" + a + "</div>");
        If(a);
        return a.innerHTML
    };
    f.qt = function() {
        var a = !("STYLE" in this.Ze) && "STYLE" in this.de;
        return "*" == this.We && a ? "sanitizer-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Va()).toString(36)) : this.We
    };
    f.createTextNode = function(a) {
        var b = a.data;
        (a = wf(a)) && "style" == uf(a).toLowerCase() && !("STYLE" in this.Ze) && "STYLE" in this.de && (b = Fc(Ff(b, this.Bf, C(function(c, d) {
            return this.Ke(c, {
                Ar: d
            })
        }, this))));
        return document.createTextNode(b)
    };
    f.rr = function(a) {
        a = uf(a).toUpperCase();
        if (a in this.Ze) return null;
        if (this.de[a]) return document.createElement(a);
        var b = document.createElement("SPAN");
        this.fk && rf(b, "data-sanitizer-original-tag", a.toLowerCase());
        return b
    };
    f.uv = function(a, b) {
        var c = b.name;
        if (0 == c.lastIndexOf("data-sanitizer-", 0)) return null;
        var d = uf(a);
        b = b.value;
        var e = {
                tagName: Vb(d).toLowerCase(),
                attributeName: Vb(c).toLowerCase()
            },
            g = {
                Ch: void 0
            };
        "style" == e.attributeName && (g.Ch = sf(a));
        a = eg(d, c);
        if (a in this.ne) return c = this.ne[a], c(b, e, g);
        c = eg(null, c);
        return c in this.ne ? (c = this.ne[c], c(b, e, g)) : null
    };
    var fg = function(a) {
        return (new Tf).oe().ib(a)
    };
    var gg = function(a, b) {
        this.Ac = "number" == typeof a ? 0 < a ? 1 : 0 > a ? -1 : null : null == a ? null : a ? -1 : 1;
        this.yq = !!b
    };
    f = gg.prototype;
    f.ji = function(a, b) {
        var c = 0,
            d = 0,
            e = !1;
        a = Gb(a, b).split(Mb);
        for (b = 0; b < a.length; b++) {
            var g = a[b];
            Ib.test(Gb(g, void 0)) ? (c++, d++) : Jb.test(g) ? e = !0 : Hb.test(Gb(g, void 0)) ? d++ : Nb.test(g) && (e = !0)
        }
        return 0 == d ? e ? 1 : 0 : .4 < c / d ? -1 : 1
    };
    f.Aq = function(a, b) {
        return 0 > Number(a) * Number(b)
    };
    f.zl = function(a, b, c, d) {
        return d && (this.Aq(b, this.Ac) || 1 == this.Ac && Lb.test(Gb(a, c)) || -1 == this.Ac && Kb.test(Gb(a, c))) ? 1 == this.Ac ? "\u200e" : "\u200f" : ""
    };
    f.yl = function(a, b) {
        return this.tn(this.ji(a, b))
    };
    f.tn = function(a) {
        return -1 == (0 == a ? this.Ac : a) ? "rtl" : "ltr"
    };
    f.mp = function(a, b) {
        return this.rx(null, a, b)
    };
    f.rx = function(a, b, c) {
        null == a && (a = this.ji(Uc(b).toString(), !0));
        return this.sx(a, b, c)
    };
    f.sx = function(a, b, c) {
        c = c || void 0 == c;
        var d = 0 != a && a != this.Ac;
        if (this.yq || d) {
            var e;
            d && (e = -1 == a ? "rtl" : "ltr");
            d = {
                dir: e
            };
            if (!Xc.test("span")) throw Error("");
            if ("SPAN" in Zc) throw Error("");
            e = null;
            var g = "";
            if (d)
                for (l in d) {
                    if (!Xc.test(l)) throw Error("");
                    var h = d[l];
                    if (null != h) {
                        var k = l;
                        if (h instanceof Cb) h = Db(h);
                        else if ("style" == k.toLowerCase()) {
                            if (!Pa(h)) throw Error("");
                            h instanceof rc || (h = vc(h));
                            h = sc(h)
                        } else {
                            if (/^on/i.test(k)) throw Error("");
                            if (k.toLowerCase() in Yc)
                                if (h instanceof Qb) h = Rb(h).toString();
                                else if (h instanceof hc) h = ic(h).toString();
                            else if (Ba(h)) h = nc(h).Oa();
                            else throw Error("");
                        }
                        h.nb && (h = h.Oa());
                        k = k + '="' + cc(String(h)) + '"';
                        g += " " + k
                    }
                }
            var l = "<span" + g;
            g = b;
            null != g ? Ma(g) || (g = [g]) : g = [];
            !0 === zb.span ? l += ">" : (e = bd(g), l += ">" + Uc(e).toString() + "</span>", e = e.sd());
            (d = d && d.dir) && (e = /^(ltr|rtl|auto)$/i.test(d) ? 0 : null);
            d = Vc(l, e)
        } else d = b;
        return d = cd(0, d, this.zl(Uc(b).toString(), a, !0, c))
    };
    f.En = function(a, b) {
        return this.Xu(null, a, b)
    };
    f.Xu = function(a, b, c) {
        null == a && (a = this.ji(b, c));
        return this.zl(b, a, c, !0)
    };
    f.tx = function() {
        return -1 == this.Ac ? "right" : "left"
    };
    var hg = function(a, b, c, d) {
        this.fn = a;
        this.Fn = b;
        this.te = this.Fh = a;
        this.io = c || 0;
        this.Eq = d || 2
    };
    hg.prototype.reset = function() {
        this.te = this.Fh = this.fn
    };
    hg.prototype.wd = function() {
        return this.Fh
    };
    hg.prototype.Dq = function() {
        this.te = Math.min(this.Fn, this.te * this.Eq);
        this.Fh = Math.min(this.Fn, this.te + (this.io ? Math.round(this.io * (Math.random() - .5) * 2 * this.te) : 0))
    };
    var ig = function() {};
    ig.prototype.Sk = null;
    ig.prototype.Am = function() {
        return this.Sk || (this.Sk = this.uu())
    };
    var jg, kg = function() {};
    E(kg, ig);
    kg.prototype.ol = function() {
        var a = this.Dm();
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    };
    kg.prototype.uu = function() {
        var a = {};
        this.Dm() && (a[0] = !0, a[1] = !0);
        return a
    };
    kg.prototype.Dm = function() {
        if (!this.an && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0; b < a.length; b++) {
                var c = a[b];
                try {
                    return new ActiveXObject(c), this.an = c
                } catch (d) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return this.an
    };
    jg = new kg;
    var lg = function(a, b) {
        this.pb = {};
        this.$ = [];
        this.hf = this.bc = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.addAll(a)
    };
    f = lg.prototype;
    f.jm = function() {
        return this.bc
    };
    f.xd = function() {
        this.pe();
        for (var a = [], b = 0; b < this.$.length; b++) a.push(this.pb[this.$[b]]);
        return a
    };
    f.Dc = function() {
        this.pe();
        return this.$.concat()
    };
    f.jl = function(a) {
        return mg(this.pb, a)
    };
    f.gs = function(a, b) {
        if (this === a) return !0;
        if (this.bc != a.jm()) return !1;
        b = b || ng;
        this.pe();
        for (var c, d = 0; c = this.$[d]; d++)
            if (!b(this.get(c), a.get(c))) return !1;
        return !0
    };
    var ng = function(a, b) {
        return a === b
    };
    f = lg.prototype;
    f.clear = function() {
        this.pb = {};
        this.hf = this.bc = this.$.length = 0
    };
    f.remove = function(a) {
        return mg(this.pb, a) ? (delete this.pb[a], this.bc--, this.hf++, this.$.length > 2 * this.bc && this.pe(), !0) : !1
    };
    f.pe = function() {
        if (this.bc != this.$.length) {
            for (var a = 0, b = 0; a < this.$.length;) {
                var c = this.$[a];
                mg(this.pb, c) && (this.$[b++] = c);
                a++
            }
            this.$.length = b
        }
        if (this.bc != this.$.length) {
            var d = {};
            for (b = a = 0; a < this.$.length;) c = this.$[a], mg(d, c) || (this.$[b++] = c, d[c] = 1), a++;
            this.$.length = b
        }
    };
    f.get = function(a, b) {
        return mg(this.pb, a) ? this.pb[a] : b
    };
    f.set = function(a, b) {
        mg(this.pb, a) || (this.bc++, this.$.push(a), this.hf++);
        this.pb[a] = b
    };
    f.addAll = function(a) {
        if (a instanceof lg)
            for (var b = a.Dc(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
        else
            for (b in a) this.set(b, a[b])
    };
    f.forEach = function(a, b) {
        for (var c = this.Dc(), d = 0; d < c.length; d++) {
            var e = c[d],
                g = this.get(e);
            a.call(b, g, e, this)
        }
    };
    f.clone = function() {
        return new lg(this)
    };
    f.cq = function(a) {
        this.pe();
        var b = 0,
            c = this.hf,
            d = this,
            e = new le;
        e.next = function() {
            if (c != d.hf) throw Error("The map has changed since the iterator was created");
            if (b >= d.$.length) throw ke;
            var g = d.$[b++];
            return a ? g : d.pb[g]
        };
        return e
    };
    var mg = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var og = function(a) {
            if (a.xd && "function" == typeof a.xd) return a.xd();
            if (Ba(a)) return a.split("");
            if (Oa(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            b = [];
            c = 0;
            for (d in a) b[c++] = a[d];
            return b
        },
        pg = function(a, b, c) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
            else if (Oa(a) || Ba(a)) ab(a, b, c);
            else {
                if (a.Dc && "function" == typeof a.Dc) var d = a.Dc();
                else if (a.xd && "function" == typeof a.xd) d = void 0;
                else if (Oa(a) || Ba(a)) {
                    d = [];
                    for (var e = a.length, g = 0; g < e; g++) d.push(g)
                } else d = qb(a);
                e = og(a);
                g =
                    e.length;
                for (var h = 0; h < g; h++) b.call(c, e[h], d && d[h], a)
            }
        };
    var qg = function(a, b) {
        Me.call(this);
        this.hg = a || 1;
        this.af = b || r;
        this.Ok = C(this.Ex, this);
        this.yn = Va()
    };
    E(qg, Me);
    f = qg.prototype;
    f.enabled = !1;
    f.Aa = null;
    f.setInterval = function(a) {
        this.hg = a;
        this.Aa && this.enabled ? (this.stop(), this.start()) : this.Aa && this.stop()
    };
    f.Ex = function() {
        if (this.enabled) {
            var a = Va() - this.yn;
            0 < a && a < .8 * this.hg ? this.Aa = this.af.setTimeout(this.Ok, this.hg - a) : (this.Aa && (this.af.clearTimeout(this.Aa), this.Aa = null), this.Ir(), this.enabled && (this.stop(), this.start()))
        }
    };
    f.Ir = function() {
        this.dispatchEvent("tick")
    };
    f.start = function() {
        this.enabled = !0;
        this.Aa || (this.Aa = this.af.setTimeout(this.Ok, this.hg), this.yn = Va())
    };
    f.stop = function() {
        this.enabled = !1;
        this.Aa && (this.af.clearTimeout(this.Aa), this.Aa = null)
    };
    f.Jb = function() {
        qg.be.Jb.call(this);
        this.stop();
        delete this.af
    };
    var rg = function(a, b, c) {
        if ("function" == La(a)) c && (a = C(a, c));
        else if (a && "function" == typeof a.handleEvent) a = C(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : r.setTimeout(a, b || 0)
    };
    var sg = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        tg = function(a, b) {
            if (!b) return a;
            var c = a.indexOf("#");
            0 > c && (c = a.length);
            var d = a.indexOf("?");
            if (0 > d || d > c) {
                d = c;
                var e = ""
            } else e = a.substring(d + 1, c);
            a = [a.substr(0, d), e, a.substr(c)];
            c = a[1];
            a[1] = b ? c ? c + "&" + b : b : c;
            return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
        },
        ug = function(a, b, c) {
            if (Ma(b))
                for (var d = 0; d < b.length; d++) ug(a, String(b[d]), c);
            else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
        },
        vg = function(a, b) {
            var c = [];
            for (b = b || 0; b < a.length; b += 2) ug(a[b], a[b + 1], c);
            return c.join("&")
        },
        wg = function(a, b) {
            var c = 2 == arguments.length ? vg(arguments[1], 0) : vg(arguments, 1);
            return tg(a, c)
        },
        xg = function(a, b, c) {
            c = null != c ? "=" + encodeURIComponent(String(c)) : "";
            return tg(a, b + c)
        },
        yg = function(a, b, c, d) {
            for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
                var g = a.charCodeAt(b - 1);
                if (38 == g || 63 == g)
                    if (g = a.charCodeAt(b + e), !g || 61 == g || 38 == g || 35 == g) return b;
                b += e + 1
            }
            return -1
        },
        zg = /#|$/,
        Ag = /[?&]($|#)/;
    var Bg = function(a) {
        Me.call(this);
        this.headers = new lg;
        this.Wg = a || null;
        this.Ub = !1;
        this.Vg = this.J = null;
        this.gj = "";
        this.Ic = this.Wi = this.gg = this.ii = !1;
        this.Tb = 0;
        this.Mg = null;
        this.Bo = "";
        this.xk = this.Fv = this.jf = !1
    };
    E(Bg, Me);
    var Cg = /^https?$/i,
        Dg = ["POST", "PUT"],
        Eg = [],
        Fg = function(a, b, c, d, e, g, h) {
            var k = new Bg;
            Eg.push(k);
            b && k.Ob("complete", b);
            k.An("ready", k.Nq);
            g && k.jp(g);
            h && k.nx(h);
            k.send(a, c, d, e);
            return k
        };
    Bg.prototype.Nq = function() {
        this.Nh();
        fb(Eg, this)
    };
    Bg.prototype.jp = function(a) {
        this.Tb = Math.max(0, a)
    };
    Bg.prototype.nx = function(a) {
        this.jf = a
    };
    Bg.prototype.send = function(a, b, c, d) {
        if (this.J) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.gj + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.gj = a;
        this.ii = !1;
        this.Ub = !0;
        this.J = this.zr();
        this.Vg = this.Wg ? this.Wg.Am() : jg.Am();
        this.J.onreadystatechange = C(this.Nn, this);
        this.Fv && "onprogress" in this.J && (this.J.onprogress = C(function(g) {
            this.Ln(g, !0)
        }, this), this.J.upload && (this.J.upload.onprogress = C(this.Ln, this)));
        try {
            this.Wi = !0, this.J.open(b, String(a), !0), this.Wi = !1
        } catch (g) {
            this.Jl(5,
                g);
            return
        }
        a = c || "";
        var e = this.headers.clone();
        d && pg(d, function(g, h) {
            e.set(h, g)
        });
        d = db(e.Dc(), Gg);
        c = r.FormData && a instanceof r.FormData;
        !(0 <= $a(Dg, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(g, h) {
            this.J.setRequestHeader(h, g)
        }, this);
        this.Bo && (this.J.responseType = this.Bo);
        "withCredentials" in this.J && this.J.withCredentials !== this.jf && (this.J.withCredentials = this.jf);
        try {
            this.Tk(), 0 < this.Tb && ((this.xk = Hg(this.J)) ? (this.J.timeout = this.Tb, this.J.ontimeout =
                C(this.vp, this)) : this.Mg = rg(this.vp, this.Tb, this)), this.gg = !0, this.J.send(a), this.gg = !1
        } catch (g) {
            this.Jl(5, g)
        }
    };
    var Hg = function(a) {
            return pd && Ad(9) && "number" == typeof a.timeout && void 0 !== a.ontimeout
        },
        Gg = function(a) {
            return "content-type" == a.toLowerCase()
        };
    f = Bg.prototype;
    f.zr = function() {
        return this.Wg ? this.Wg.ol() : jg.ol()
    };
    f.vp = function() {
        "undefined" != typeof Aa && this.J && (this.dispatchEvent("timeout"), this.abort(8))
    };
    f.Jl = function() {
        this.Ub = !1;
        this.J && (this.Ic = !0, this.J.abort(), this.Ic = !1);
        this.Bl();
        this.tf()
    };
    f.Bl = function() {
        this.ii || (this.ii = !0, this.dispatchEvent("complete"), this.dispatchEvent("error"))
    };
    f.abort = function() {
        this.J && this.Ub && (this.Ub = !1, this.Ic = !0, this.J.abort(), this.Ic = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), this.tf())
    };
    f.Jb = function() {
        this.J && (this.Ub && (this.Ub = !1, this.Ic = !0, this.J.abort(), this.Ic = !1), this.tf(!0));
        Bg.be.Jb.call(this)
    };
    f.Nn = function() {
        this.kd || (this.Wi || this.gg || this.Ic ? this.Mn() : this.hv())
    };
    f.hv = function() {
        this.Mn()
    };
    f.Mn = function() {
        if (this.Ub && "undefined" != typeof Aa && (!this.Vg[1] || 4 != this.Wf() || 2 != this.Ji()))
            if (this.gg && 4 == this.Wf()) rg(this.Nn, 0, this);
            else if (this.dispatchEvent("readystatechange"), this.xu()) {
            this.Ub = !1;
            try {
                this.sn() ? (this.dispatchEvent("complete"), this.dispatchEvent("success")) : this.Bl()
            } finally {
                this.tf()
            }
        }
    };
    f.Ln = function(a, b) {
        this.dispatchEvent(Ig(a, "progress"));
        this.dispatchEvent(Ig(a, b ? "downloadprogress" : "uploadprogress"))
    };
    var Ig = function(a, b) {
        return {
            type: b,
            lengthComputable: a.lengthComputable,
            loaded: a.loaded,
            total: a.total
        }
    };
    f = Bg.prototype;
    f.tf = function(a) {
        if (this.J) {
            this.Tk();
            var b = this.J,
                c = this.Vg[0] ? Fa : null;
            this.Vg = this.J = null;
            a || this.dispatchEvent("ready");
            try {
                b.onreadystatechange = c
            } catch (d) {}
        }
    };
    f.Tk = function() {
        this.J && this.xk && (this.J.ontimeout = null);
        this.Mg && (r.clearTimeout(this.Mg), this.Mg = null)
    };
    f.cj = function() {
        return !!this.J
    };
    f.xu = function() {
        return 4 == this.Wf()
    };
    f.sn = function() {
        var a = this.Ji();
        a: switch (a) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var b = !0;
                break a;
            default:
                b = !1
        }
        return b || 0 === a && !this.Hu()
    };
    f.Hu = function() {
        var a = String(this.gj).match(sg)[1] || null;
        !a && r.self && r.self.location && (a = r.self.location.protocol, a = a.substr(0, a.length - 1));
        return Cg.test(a ? a.toLowerCase() : "")
    };
    f.Wf = function() {
        return this.J ? this.J.readyState : 0
    };
    f.Ji = function() {
        try {
            return 2 < this.Wf() ? this.J.status : -1
        } catch (a) {
            return -1
        }
    };
    f.kt = function() {
        try {
            return this.J ? this.J.responseText : ""
        } catch (a) {
            return ""
        }
    };
    var Jg = function(a, b, c) {
        Fg(a.url, function(d) {
            d = d.target;
            d.sn() ? b(d.kt()) : c(d.Ji())
        }, a.Xv, a.body, a.Vv, a.Gx, a.withCredentials)
    };
    var Kg = function(a) {
        Od(this, a, 0, -1, null, null)
    };
    E(Kg, Id);
    Kg.prototype.Uw = function(a) {
        return Nd(this, 5, a)
    };
    Kg.prototype.xg = function(a) {
        return Nd(this, 7, a)
    };
    var Lg = function(a) {
        Od(this, a, 0, -1, null, null)
    };
    E(Lg, Id);
    Lg.prototype.Fs = function() {
        return Md(this, 1)
    };
    Lg.prototype.Qo = function(a) {
        return Nd(this, 1, a)
    };
    Lg.prototype.Ws = function() {
        return Qd(this, Kg, 11)
    };
    Lg.prototype.Yo = function(a) {
        return Rd(this, 11, a)
    };
    var Ng = function(a) {
        Od(this, a, 0, 29, Mg, null)
    };
    E(Ng, Id);
    var Mg = [3, 20, 27];
    f = Ng.prototype;
    f.Os = function() {
        return Md(this, 1)
    };
    f.Gw = function(a) {
        return Nd(this, 1, a)
    };
    f.bx = function(a) {
        return Nd(this, 21, a)
    };
    f.zg = function(a) {
        return Nd(this, 26, a)
    };
    f.dx = function(a) {
        return Nd(this, 8, a)
    };
    f.Hw = function(a) {
        return Rd(this, 16, a)
    };
    var Pg = function(a) {
        Od(this, a, 0, 17, Og, null)
    };
    E(Pg, Id);
    var Og = [3, 5];
    f = Pg.prototype;
    f.bp = function(a) {
        return Nd(this, 4, a)
    };
    f.Es = function() {
        return Qd(this, Lg, 1)
    };
    f.Po = function(a) {
        return Rd(this, 1, a)
    };
    f.Ww = function(a) {
        return Nd(this, 2, a)
    };
    f.Ys = function() {
        this.Y || (this.Y = {});
        if (!this.Y[3]) {
            for (var a = Md(this, 3), b = [], c = 0; c < a.length; c++) b[c] = new Ng(a[c]);
            this.Y[3] = b
        }
        a = this.Y[3];
        a == Kd && (a = this.Y[3] = []);
        return a
    };
    f.$o = function(a) {
        this.Y || (this.Y = {});
        a = a || [];
        for (var b = [], c = 0; c < a.length; c++) b[c] = a[c].wa;
        this.Y[3] = a;
        return Nd(this, 3, b)
    };
    f.Vw = function(a) {
        return Nd(this, 14, a)
    };
    f.Ro = function(a) {
        return Rd(this, 13, a)
    };
    var Rg = function(a) {
        Od(this, a, 0, 6, Qg, null)
    };
    E(Rg, Id);
    var Qg = [5];
    Rg.prototype.dt = function() {
        return Pd(this, 1, "-1")
    };
    Rg.prototype.Cg = function(a) {
        return Rd(this, 2, a)
    };
    var Sg = function(a) {
        Od(this, a, 0, -1, null, null)
    };
    E(Sg, Id);
    Sg.prototype.st = function() {
        return Pd(this, 1, -1)
    };
    var Tg = new Hd(175237375, {
        cB: 0
    }, Sg, function(a, b) {
        var c = {
            XB: Pd(b, 1, -1)
        };
        a && (c.$x = b);
        return c
    }, 0);
    var Ug = function(a, b, c, d, e, g, h, k, l, n, v) {
        Me.call(this);
        this.ij = a;
        this.Qf = b || Fa;
        this.dd = new Pg;
        this.zc = "";
        this.qj = d;
        this.og = v;
        this.Ya = [];
        this.Kq = 1E3;
        this.wn = "";
        this.Kx = Ua(be, 0, 1);
        this.qh = e || null;
        this.Yd = c || null;
        this.Al = h || !1;
        this.sj = l || null;
        this.Sx = this.Tx = this.sh = !1;
        this.Kn = this.jk = -1;
        this.$q = !1;
        this.ka = null;
        this.jf = !k;
        this.Fc = null;
        this.rj = 0;
        this.rw = 1;
        this.uh = null;
        this.Mu = g || !1;
        this.Hx = 0;
        a = (new Lg).Qo(1);
        g || (g = (new Kg).Uw(document.documentElement.getAttribute("lang")), a.Yo(g));
        this.dd.Po(a);
        this.dd.Ww(this.ij);
        this.Bc = new hg(1E4, 3E5, .1);
        this.Kb = new qg(this.Bc.wd());
        this.no(this.Kb);
        Ae(this.Kb, "tick", ob(this.om(n)), !1, this);
        this.jh = new qg(6E5);
        this.no(this.jh);
        Ae(this.jh, "tick", ob(this.om(n)), !1, this);
        this.Al || this.jh.start();
        this.Mu || (Ae(window, "beforeunload", this.Of, !1, this), Ae(window, "unload", this.Of, !1, this), Ae(document, "pagehide", this.Of, !1, this))
    };
    E(Ug, Me);
    f = Ug.prototype;
    f.om = function(a) {
        if (a) {
            var b = this;
            return function() {
                a().then(b.flush.bind(b))
            }
        }
        return this.flush
    };
    f.Jb = function() {
        this.Of();
        Ug.be.Jb.call(this)
    };
    f.gm = function() {
        this.qh || (this.qh = this.Dr());
        return this.qh
    };
    f.Hr = function(a) {
        a instanceof Ng ? this.log(a) : (a = (new Ng).dx(a.Xd()), this.log(a))
    };
    f.Rj = function(a) {
        a.Fs() || a.Qo(1);
        this.dd.Po(a)
    };
    f.zg = function(a) {
        this.zc = a
    };
    f.Js = function() {
        return this.dd.Es()
    };
    f.Oo = function(a) {
        a ? (this.ka || (this.ka = new Vd), this.ka.ww(a.Xd())) : this.ka && this.ka.Oq()
    };
    f.xw = function(a) {
        this.sh = a
    };
    f.Ro = function(a) {
        this.uh = a
    };
    f.Vo = function(a) {
        this.Fc = a
    };
    f.xg = function(a) {
        var b = this.Js(),
            c = b.Ws();
        c || (c = new Kg);
        c.xg(a);
        b.Yo(c);
        this.Rj(b)
    };
    f.Jw = function(a) {
        this.$q || this.Lr(a)
    };
    f.Lr = function(a) {
        this.Bc = new hg(1 > a ? 1 : a, 3E5, .1);
        this.Kb.setInterval(this.Bc.wd())
    };
    f.Fq = function() {
        this.Bc.Dq();
        this.Kb.setInterval(this.Bc.wd())
    };
    f.Yv = function() {
        this.Bc.reset();
        this.Kb.setInterval(this.Bc.wd())
    };
    f.log = function(a) {
        a = a.wf();
        a.bx(this.rw++);
        this.zc && a.zg(this.zc);
        a.Os() || a.Gw(Va().toString());
        this.ka && a.Hw(this.ka.wf());
        this.gq(a)
    };
    f.gq = function(a) {
        for (; this.Ya.length >= this.Kq;) this.Ya.shift(), ++this.rj;
        this.Ya.push(a);
        this.dispatchEvent(new Vg(a));
        this.Hn()
    };
    f.Hn = function() {
        this.Al || this.Kb.enabled || this.Kb.start()
    };
    f.Qq = function() {
        this.Kb.enabled && this.Kb.stop()
    };
    f.flush = function(a, b) {
        if (0 == this.Ya.length) a && a();
        else {
            var c = Va();
            if (this.Kn > c && this.jk < c) b && b("throttled");
            else {
                var d = this.dd.wf().bp(Va().toString()).$o(this.Ya).Vw(this.rj);
                this.uh && d.Ro(this.uh);
                c = {};
                var e = this.Qf();
                e && (c.Authorization = e);
                var g = this.gm();
                this.Yd && (c["X-Goog-AuthUser"] = this.Yd, g = xg(g, "authuser", this.Yd));
                this.sj && (c["X-Goog-PageId"] = this.sj, g = xg(g, "pageId", this.sj));
                if (e && this.wn == e) b && b("stale-auth-token");
                else if (this.Tq(), this.sh) d.Xd(), c && JSON.stringify(c), a && a();
                else {
                    var h =
                        d.Xd(),
                        k = 1;
                    this.Fc && this.Fc.ZA() && (c["Content-Encoding"] = "gzip", c["Content-Type"] = "application/binary", h = this.Fc.cA(h), k = 2);
                    c = {
                        url: g,
                        body: h,
                        Uz: k,
                        Vv: c,
                        Xv: "POST",
                        withCredentials: this.jf,
                        Gx: this.Hx
                    };
                    g = C(function(l) {
                        this.Mt(l);
                        a && a()
                    }, this);
                    h = C(function(l) {
                        this.Ft(d.Ys(), l, e);
                        b && b("net-send-failed", l)
                    }, this);
                    this.og ? this.og.send(c, g, h) : this.qj(c, g, h)
                }
            }
        }
    };
    f.Tq = function() {
        this.Ya = [];
        this.Qq();
        this.rj = 0
    };
    f.Of = function() {
        this.sh || (this.Tx && this.os(), this.Sx && this.ns(), this.flush())
    };
    f.os = function() {
        this.Jo(32, 10, function(a, b) {
            a = xg(a, "format", "json");
            return window.navigator.sendBeacon(a, b.Xd())
        })
    };
    f.pw = function(a) {
        hd(new Image, a)
    };
    f.ns = function() {
        var a = this;
        this.Jo(6, 5, function(b, c) {
            a.pw(wg(b, "format", "base64json", "p", Gd(c.Xd(), 3)));
            return !0
        })
    };
    f.Jo = function(a, b, c) {
        if (0 != this.Ya.length) {
            var d = this.gm();
            for (var e = d.search(zg), g = 0, h, k = []; 0 <= (h = yg(d, g, "format", e));) k.push(d.substring(g, h)), g = Math.min(d.indexOf("&", h) + 1 || e, e);
            k.push(d.substr(g));
            d = k.join("").replace(Ag, "$1");
            d = wg(d, "auth", this.Qf(), "authuser", this.Yd || "0");
            for (e = 0; e < b && this.Ya.length; ++e) {
                g = this.Ya.slice(0, a);
                h = this.dd.wf().bp(Va().toString()).$o(g);
                if (!c(d, h)) break;
                this.Ya = this.Ya.slice(g.length)
            }
        }
    };
    f.Ku = function(a) {
        return 500 <= a && 600 > a || 401 == a || 0 == a
    };
    f.sv = function(a) {
        this.Ya = a.concat(this.Ya);
        this.Hn()
    };
    f.Ft = function(a, b, c) {
        this.Fq();
        401 == b && c && (this.wn = c);
        this.Ku(b) && this.sv(a)
    };
    f.Mt = function(a) {
        this.Yv();
        if (a) {
            try {
                var b = JSON.parse(a.replace(")]}'\n", ""));
                var c = new Rg(b)
            } catch (d) {}
            c && (a = c.dt(), a = Number(a), 0 < a && (this.jk = Va(), this.Kn = this.jk + a), c = c.getExtension(Tg)) && (c = c.st(), -1 != c && this.Jw(c))
        }
    };
    f.Dr = function() {
        return .01 > this.Kx() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true"
    };
    var Vg = function() {
        this.type = "event-logged"
    };
    E(Vg, pe);
    var Wg = function(a, b) {
        this.ij = a;
        this.Yd = b;
        this.Er = "https://play.google.com/log?format=json&hasfast=true";
        this.Ru = !0;
        this.es = !1;
        this.qj = Jg;
        this.zc = ""
    };
    f = Wg.prototype;
    f.xg = function(a) {
        this.Pk = a;
        return this
    };
    f.Vo = function(a) {
        this.Fc = a;
        return this
    };
    f.zg = function(a) {
        this.zc = a;
        return this
    };
    f.Oo = function(a) {
        this.Vk = a;
        return this
    };
    f.Rj = function(a) {
        this.Xk = a;
        return this
    };
    f.oe = function() {
        var a = new Ug(this.ij, this.Qf ? this.Qf : ae, this.Yd, this.qj, this.Er, this.es, void 0, void 0, void 0, void 0, this.og ? this.og : void 0);
        this.Ru || a.xw(!0);
        this.Xk && a.Rj(this.Xk);
        this.Pk && a.xg(this.Pk);
        this.Fc && a.Vo(this.Fc);
        this.zc && a.zg(this.zc);
        this.Vk && a.Oo(this.Vk);
        return a
    };
    var Xg = function(a) {
        Od(this, a, 0, -1, null, null)
    };
    E(Xg, Id);
    f = Xg.prototype;
    f.Zw = function(a) {
        return Nd(this, 1, a)
    };
    f.Dw = function(a) {
        return Nd(this, 2, a)
    };
    f.Tw = function(a) {
        return Nd(this, 3, a)
    };
    f.Ag = function(a) {
        return Nd(this, 4, a)
    };
    f.Yf = function() {
        return Md(this, 5)
    };
    f.fx = function(a) {
        return Nd(this, 5, a)
    };
    f.Cw = function(a) {
        return Nd(this, 6, a)
    };
    f.$w = function(a) {
        return Nd(this, 7, a)
    };
    var Yg = new gg(1),
        Zg = Yg.tn(1),
        $g = Yg.tx(),
        ah = function(a, b) {
            return Uc(Yg.mp(Wc(a), b)).toString()
        },
        bh = function(a, b) {
            return Yg.mp(fg(a), b)
        },
        ch = function(a) {
            return a ? Yg.yl(a, !1) : Zg
        },
        dh = function(a) {
            return a ? Yg.yl(a, !0) : Zg
        },
        eh = function(a) {
            return a ? Yg.En(a, !1) : ""
        },
        fh = function(a) {
            return a ? Yg.En(a, !0) : ""
        };
    var gh = {
            "result-info": function(a, b) {
                return "About " + (a + (" results (" + (b + " seconds)")))
            },
            page: function(a) {
                return "Page " + a
            }
        },
        hh = {
            "search-on-google": function() {
                var a = ba(["Search for ", " on Google"]),
                    b = a.next().value;
                a = a.next().value;
                return {
                    prefix: b,
                    kk: a
                }
            },
            "google-custom-search": function() {
                var a = ba(["", " Custom Search"]),
                    b = a.next().value;
                a = a.next().value;
                return {
                    prefix: b,
                    kk: a
                }
            }
        };
    var ih = {
        blank: "&nbsp;",
        image: "Image",
        web: "Web",
        "ads-by-google": "Ads by Google",
        watermark: "clipped from Google",
        "clear-results": "clear results",
        search: "search",
        "search-uc": "Search",
        "powered-by": "powered by",
        previous: "Previous",
        next: "Next",
        "clear-tool-title": "Clear search box",
        "no-results": "No Results",
        "linked-cse-error-results": "Linked CSEs are no longer supported.  See https://goo.gl/Gs1KIc.",
        dym: "Did you mean:",
        "showing-results-for": "Showing results for",
        "search-instead-for": "Search instead for",
        "custom-search": "Custom Search",
        labeled: "Labeled",
        "all-results-short": "All",
        "all-results-long": "All results",
        "refine-results": "Refine results:",
        "file-format": "File Format:",
        "order-results-by": "Sort by:",
        "order-by-relevance": "Relevance",
        "order-by-date": "Date",
        "structured-data": "Structured data",
        "cse-branding": "Google Custom Search Branding",
        "next-page": "Next page",
        "prev-page": "Previous page"
    };
    var jh = function(a, b) {
            var c = function() {};
            c.prototype = b.prototype;
            a.prototype = new c;
            a.prototype.Hz = function(d, e, g, h) {
                var k = Array.prototype.splice.apply(arguments, [1, arguments.length]);
                return d.apply(a, k)
            }
        },
        kh = (new Date).getTime(),
        lh = !0,
        nh = function(a, b) {
            mh(a, void 0 === b ? "1" : b)
        },
        oh = function(a) {
            lh = !1;
            nh(a);
            lh = !0
        },
        mh = function(a, b) {
            b = void 0 === b ? "1" : b;
            var c = document.getElementsByTagName("head")[0];
            c || (c = document.body.parentNode.appendChild(document.createElement("head")));
            var d = document.createElement("script");
            d.type = "text/javascript";
            d.charset = "utf-8";
            a = lh ? a + "&key=notsupplied&v=" + (void 0 === b ? "1" : b) : a;
            if (pd || Cd || ph("konqueror")) a = a + "&nocache=" + kh++;
            d.src = a;
            var e = function() {
                d.onload = null;
                d.parentNode.removeChild(d)
            };
            a = function(g) {
                g = g ? g : window.event;
                g = g.target ? g.target : g.srcElement;
                if ("loaded" == g.readyState || "complete" == g.readyState) g.onreadystatechange && (g.onreadystatechange = null), e()
            };
            "Gecko" == navigator.product ? d.onload = e : d.onreadystatechange = a;
            c.appendChild(d)
        },
        qh = function(a, b) {
            return function() {
                return b.apply(a,
                    arguments)
            }
        },
        rh = function(a, b, c) {
            c = void 0 === c ? [] : c;
            return function() {
                return b.apply(a, c)
            }
        },
        sh = function(a) {
            for (; a.firstChild;) a.removeChild(a.firstChild)
        },
        th = function(a, b) {
            if (a) try {
                sh(a), a.appendChild(b)
            } catch (c) {}
            return b
        },
        L = function(a, b) {
            try {
                a.appendChild(b)
            } catch (c) {}
            return b
        };

    function uh(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = void 0 === c.vb ? !1 : c.vb;
        (void 0 === c.Dd ? 0 : c.Dd) || d ? (b = (new Tf).xq().Vx(nb).Xx(nb).Wx(nc).Yx(nc).oe().ib(b), fd(a, b)) : (b = (new Tf).oe().ib(b), fd(a, b))
    }
    var vh = function(a) {
            return document.createTextNode(void 0 === a ? "" : a)
        },
        wh = function(a) {
            a = void 0 === a ? {} : a;
            var b = void 0 === a.text ? void 0 : a.text,
                c = void 0 === a.className ? void 0 : a.className,
                d = void 0 === a.Dd ? !1 : a.Dd,
                e = void 0 === a.vb ? !1 : a.vb,
                g = document.createElement("div");
            (void 0 === a.uc ? 0 : a.uc) ? L(g, vh(b)): b && (b instanceof Tc ? fd(g, b) : uh(g, b, {
                Dd: d,
                vb: e
            }));
            c && (g.className = c);
            return g
        },
        M = function(a) {
            return wh({
                className: a
            })
        },
        xh = function(a, b) {
            var c = document.createElement("span");
            a && L(c, vh(a));
            b && (c.className = b);
            return c
        },
        yh = function(a, b, c) {
            var d = document.createElement("table");
            d.setAttribute("cellSpacing", a ? a : 0);
            d.setAttribute("cellPadding", b ? b : 0);
            c && (d.className = c);
            return d
        },
        Ah = function(a, b, c) {
            (a = a.insertRow(-1)) || alert(a);
            for (var d = 0; d < b; d++) zh(a, c);
            return a
        },
        zh = function(a, b) {
            a = a.insertCell(-1);
            b && (a.className = b);
            return a
        },
        Bh = function(a, b, c, d) {
            var e = document.createElement("img");
            e.src = a;
            b && (e.width = b);
            c && (e.height = c);
            d && (e.className = d);
            return e
        },
        Ch = function(a, b, c, d, e) {
            var g = document.createElement("a");
            a && gd(g, a);
            b && (d ? L(g, xh(b, d)) : L(g, vh(b)));
            c && (g.target = c);
            e && (g.title = e);
            return g
        },
        Dh = function(a, b, c, d, e, g) {
            g = void 0 === g ? {} : g;
            var h = M(d),
                k = document.createElement("a");
            k.href = a;
            uh(k, b, {
                Dd: !0
            });
            d && (k.className = d);
            c && (k.target = c);
            e && (k.title = e);
            for (var l in g) k.setAttribute(l, g[l]);
            h.appendChild(k);
            return h
        },
        Eh = function(a, b) {
            b = void 0 === b ? {} : b;
            b = void 0 === b.vb ? !1 : b.vb;
            var c = document.createDocumentFragment(),
                d = document.createElement("div");
            for (a instanceof Tc ? fd(d, a) : b ? d.innerHTML = a : uh(d, a, {
                    Dd: !1
                }); d.firstChild;) c.appendChild(d.firstChild);
            return c
        },
        Fh = function(a, b, c, d, e, g, h) {
            e = void 0 === e ? "" : e;
            var k = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            k.setAttribute("width", g || c);
            k.setAttribute("height", h || d);
            k.setAttribute("viewBox", "0 0 " + c + " " + d);
            e && k.setAttribute("class", e);
            c = document.createElementNS("http://www.w3.org/2000/svg", "title");
            c.textContent = b;
            k.appendChild(c);
            b = document.createElementNS("http://www.w3.org/2000/svg", "path");
            b.setAttribute("d", a);
            k.appendChild(b);
            return k
        },
        Gh = function(a, b) {
            b ? (a.tabIndex = 0, a.onclick =
                b, a.onkeypress = function(c) {
                    c = c || window.event;
                    c.keyCode && 13 == c.keyCode && b.call(a, c)
                }) : (a.tabIndex = -1, a.removeAttribute("tabIndex"), a.onclick = null, a.onkeypress = null)
        },
        Hh = function(a, b) {
            if (null == a || null == a.className) return !1;
            a = a.className.split(" ");
            for (var c = 0; c < a.length; c++)
                if (a[c] == b) return !0;
            return !1
        },
        T = function(a, b) {
            Hh(a, b) || (a.className += " " + b)
        },
        Ih = function(a, b) {
            if (null != a.className) {
                for (var c = a.className.split(" "), d = [], e = !1, g = 0; g < c.length; g++) c[g] != b ? c[g] && d.push(c[g]) : e = !0;
                e && (a.className = d.join(" "))
            }
        },
        Jh = "",
        Kh = {
            dr: {
                Yz: 1,
                eA: 1,
                OA: 1,
                id: 1,
                PA: 1,
                "in": 1,
                $A: 1,
                bB: 1,
                dB: 1,
                eB: 1,
                gB: 1,
                qB: 1,
                cC: 1,
                iC: 1,
                jC: 1,
                nC: 1,
                oC: 1,
                qC: 1
            },
            bA: {
                Lz: 1,
                Qz: 1,
                Sz: 1,
                Tz: 1,
                Vz: 1,
                Wz: 1,
                dr: 1,
                fA: 1,
                "do": 1,
                jA: 1,
                pA: 1,
                EA: 1,
                FA: 1,
                GA: 1,
                NA: 1,
                aB: 1,
                hB: 1,
                jB: 1,
                kB: 1,
                lB: 1,
                mB: 1,
                nB: 1,
                oB: 1,
                pB: 1,
                xB: 1,
                yB: 1,
                zB: 1,
                AB: 1,
                BB: 1,
                CB: 1,
                MB: 1,
                RB: 1,
                ZB: 1,
                eC: 1,
                gC: 1,
                hC: 1,
                lC: 1,
                mC: 1,
                pC: 1
            },
            rB: {
                Mz: 1
            }
        };

    function ph(a) {
        return a in Lh ? Lh[a] : Lh[a] = -1 != navigator.userAgent.toLowerCase().indexOf(a)
    }
    var Lh = {},
        Mh = function(a) {
            this.Jq = a + "branding";
            this.ku = a + "branding-img-noclear";
            this.Xq = a + "branding-clickable";
            this.text = a + "branding-text";
            this.Ev = a + "branding-text-name"
        },
        Nh = function(a, b, c) {
            if (!a) return {
                length: 0
            };
            b = b && "*" != b ? b.toUpperCase() : "";
            if (c && a.getElementsByClassName) {
                c = a.getElementsByClassName(c);
                if (b) {
                    a = {};
                    for (var d = 0, e = 0, g; g = c[e]; e++) b == g.nodeName && (a[d++] = g);
                    a.length = d;
                    return a
                }
                return c
            }
            b = a.getElementsByTagName(b || "*");
            if (c) {
                a = {};
                for (e = d = 0; g = b[e]; e++) Hh(g, c) && (a[d++] = g);
                a.length = d;
                return a
            }
            return b
        },
        Oh = function(a) {
            var b = [];
            if (a)
                for (var c in a) null != a[c] && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
            return b.join("&")
        },
        Ph = function(a, b) {
            b || (b = document.body);
            for (var c = 0; a != b;) c += a.offsetTop, a = a.offsetParent;
            return c
        },
        Qh = function(a) {
            return "string" == typeof a ? document.getElementById(a) : a
        },
        Rh = function(a) {
            if (a) {
                var b = document.createElement("A");
                a = mc(a);
                gd(b, a);
                b = b.href
            } else b = null;
            return b
        },
        Sh = function(a) {
            return !!a && /https?:\/\/([^/.:]+\.)*google(\.[^/.:]+)*(:[0-9]+)?\/cse/.test(a)
        },
        Th =
        function(a) {
            window.console && window.console.warn(a)
        };
    var Uh = function(a) {
            return "string" == typeof a ? "" != a && "0" != a && "false" != a.toLowerCase() : !!a
        },
        Vh = function(a) {
            a = parseInt(a, 10);
            return isNaN(a) ? void 0 : a
        },
        W = function(a) {
            return function(b) {
                for (var c = 0; c < a.length; c++)
                    if (typeof b == a[c]) return b
            }
        },
        Wh = function() {
            var a = 0;
            return function() {
                return "___gcse_" + a++
            }
        }(),
        Xh = function(a) {
            var b = 0;
            return function(c) {
                return "two-column" == a ? c || String(a) : c || String(a + b++)
            }
        },
        Yh = {};
    Yh.standard = {
        re: ["searchbox+results"],
        Tf: Xh("standard")
    };
    Yh["two-column"] = {
        re: ["searchbox", "results"],
        Tf: Xh("two-column")
    };
    Yh["searchbox-only"] = {
        re: ["searchbox"],
        Tf: Xh("searchbox-only")
    };
    Yh["searchresults-only"] = {
        re: ["results"],
        Tf: Xh("searchresults-only")
    };
    var Zh = {
            search: {
                ec: "standard",
                qe: "searchbox+results"
            },
            searchbox: {
                ec: "two-column",
                qe: "searchbox"
            },
            searchresults: {
                ec: "two-column",
                qe: "results"
            },
            "searchbox-only": {
                ec: "searchbox-only",
                qe: "searchbox"
            },
            "searchresults-only": {
                ec: "searchresults-only",
                qe: "results"
            }
        },
        $h, ai = [],
        bi;
    for (bi in Zh) ai.push("gcse\\:" + bi), ai.push("div.gcse-" + bi);
    $h = ai.join(", ");
    var ci = function(a, b, c) {
            b = b && "*" != b ? b.toUpperCase() : "";
            if (c && a.getElementsByClassName) {
                a = a.getElementsByClassName(c);
                if (b) {
                    for (var d = {}, e = 0, g = 0, h; h = a[g]; g++) b == h.nodeName && (d[e++] = h);
                    d.length = e;
                    return d
                }
                return a
            }
            a = a.getElementsByTagName(b || "*");
            if (c) {
                d = {};
                for (g = e = 0; h = a[g]; g++) {
                    a: {
                        if (null != h && null != h.className) {
                            b = h.className.split(" ");
                            for (var k = 0; k < b.length; k++)
                                if (b[k] == c) {
                                    b = !0;
                                    break a
                                }
                        }
                        b = !1
                    }
                    b && (d[e++] = h)
                }
                d.length = e;
                return d
            }
            return a
        },
        di = function(a) {
            var b = [],
                c;
            for (c in Zh) {
                for (var d = a.getElementsByTagName("gcse:" +
                        c), e = 0; e < d.length; e++) b.push(d[e]);
                d = ci(a, "div", "gcse-" + c);
                for (e = 0; e < d.length; e++) b.push(d[e])
            }
            return b
        },
        ei = {
            cz: {
                name: "resultsUrl",
                l: function(a) {
                    if ("string" == typeof a && (a = Rh(a)) && (0 == a.indexOf("http://") || 0 == a.indexOf("https://"))) return a
                },
                defaultValue: void 0,
                s: !0,
                g: void 0,
                i: void 0,
                m: "searchbox"
            },
            Ty: {
                name: "newWindow",
                l: Uh,
                defaultValue: !1,
                s: !0,
                g: void 0,
                i: void 0,
                m: "searchbox"
            },
            Zy: {
                name: "queryParameterName",
                l: W(["string"]),
                defaultValue: "q",
                s: !0,
                g: void 0,
                i: void 0,
                m: void 0
            },
            jy: {
                name: "autoSearchOnLoad",
                l: Uh,
                defaultValue: !0,
                s: !0,
                g: void 0,
                i: void 0,
                m: void 0
            },
            ny: {
                name: "defaultToRefinement",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "defaultToRefinement",
                i: void 0,
                m: void 0
            },
            sy: {
                name: "enableOrderBy",
                l: Uh,
                defaultValue: void 0,
                s: !0,
                g: "enableOrderBy",
                i: void 0,
                m: void 0
            },
            Wy: {
                name: "orderByOptions",
                l: W(["object"]),
                defaultValue: void 0,
                s: !1,
                g: "keys",
                i: "orderByOptions",
                m: void 0
            },
            dz: {
                name: "resultSetSize",
                l: W(["string", "number"]),
                defaultValue: void 0,
                s: !0,
                g: "resultSetSize",
                i: void 0,
                m: void 0
            },
            az: {
                name: "extendedRestricts",
                l: W(["object"]),
                defaultValue: void 0,
                s: !1,
                g: "restrict-extended",
                i: void 0,
                m: void 0
            },
            ez: {
                name: "safeSearch",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "restrict-safesearch",
                i: void 0,
                m: void 0
            },
            $y: {
                name: "refinementStyle",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: void 0,
                i: void 0,
                m: "results"
            },
            qy: {
                name: "enableHistory",
                l: Uh,
                defaultValue: !1,
                s: !0,
                g: void 0,
                i: void 0,
                m: void 0
            },
            Ry: {
                name: "linkTarget",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: void 0,
                i: void 0,
                m: "results"
            },
            uy: {
                name: "enableSpeech",
                l: Uh,
                defaultValue: !1,
                s: !0,
                g: void 0,
                i: void 0,
                m: "searchbox"
            },
            py: {
                name: "enableAutoComplete",
                l: Uh,
                defaultValue: void 0,
                s: !0,
                g: void 0,
                i: void 0,
                m: "searchbox"
            },
            fy: {
                name: "autoCompleteMatchType",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "matchType",
                i: "autoCompleteOptions",
                m: "searchbox"
            },
            iy: {
                name: "autoCompleteValidLanguages",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "validLanguages",
                i: "autoCompleteOptions",
                m: "searchbox"
            },
            gy: {
                name: "autoCompleteMaxCompletions",
                l: Vh,
                defaultValue: void 0,
                s: !0,
                g: "maxCompletions",
                i: "autoCompleteOptions",
                m: "searchbox"
            },
            hy: {
                name: "autoCompleteMaxPromotions",
                l: Vh,
                defaultValue: void 0,
                s: !0,
                g: "maxPromotions",
                i: "autoCompleteOptions",
                m: "searchbox"
            },
            Uy: {
                name: "noResultsString",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: void 0,
                i: void 0,
                m: "results"
            },
            cy: {
                name: "addOverride",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: void 0,
                i: void 0,
                m: void 0
            },
            Vy: {
                name: "numTopRefinements",
                l: Vh,
                defaultValue: void 0,
                s: !1,
                g: void 0,
                i: void 0,
                m: void 0
            },
            Ez: {
                name: "webSearchResultSetSize",
                l: W(["number", "string"]),
                defaultValue: void 0,
                s: !0,
                g: "resultSetSize",
                i: "webSearchOptions",
                m: void 0
            },
            Dz: {
                name: "webSearchExtendedRestricts",
                l: W(["object"]),
                defaultValue: void 0,
                s: !1,
                g: "restrict-extended",
                i: "webSearchOptions",
                m: void 0
            },
            Bz: {
                name: "lr",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "lr",
                i: "webSearchExtendedRestricts",
                m: void 0
            },
            xz: {
                name: "cr",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "cr",
                i: "webSearchExtendedRestricts",
                m: void 0
            },
            zz: {
                name: "gl",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "gl",
                i: "webSearchExtendedRestricts",
                m: void 0
            },
            yz: {
                name: "filter",
                l: W(["number"]),
                defaultValue: void 0,
                s: !0,
                g: "filter",
                i: "webSearchExtendedRestricts",
                m: void 0
            },
            wz: {
                name: "as_sitesearch",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "as_sitesearch",
                i: "webSearchExtendedRestricts",
                m: void 0
            },
            uz: {
                name: "as_oq",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "as_oq",
                i: "webSearchExtendedRestricts",
                m: void 0
            },
            Gz: {
                name: "sort_by",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "sort_by",
                i: "webSearchExtendedRestricts",
                m: void 0
            },
            vz: {
                name: "as_rights",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "as_rights",
                i: "webSearchExtendedRestricts",
                m: void 0
            },
            sz: {
                name: "as_filetype",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "as_filetype",
                i: "webSearchExtendedRestricts",
                m: void 0
            },
            Fz: {
                name: "webSearchSafesearch",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "restrict-safesearch",
                i: "webSearchOptions",
                m: void 0
            },
            Az: {
                name: "webSearchLinkTarget",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "linkTarget",
                i: "webSearchOptions",
                m: "results"
            },
            Cz: {
                name: "webSearchQueryAddition",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "queryAddition",
                i: "webSearchOptions",
                m: void 0
            },
            ry: {
                name: "enableImageSearch",
                l: Uh,
                defaultValue: void 0,
                s: !0,
                g: "enableImageSearch",
                i: void 0,
                m: "results"
            },
            oy: {
                name: "disableWebSearch",
                l: Uh,
                defaultValue: void 0,
                s: !0,
                g: "disableWebSearch",
                i: void 0,
                m: void 0
            },
            my: {
                name: "defaultToImageSearch",
                l: Uh,
                defaultValue: void 0,
                s: !0,
                g: "defaultToImageSearch",
                i: void 0,
                m: void 0
            },
            Ky: {
                name: "imageSearchLayout",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "layout",
                i: "imageSearchOptions",
                m: "results"
            },
            My: {
                name: "imageSearchExtendedRestricts",
                l: W(["object"]),
                defaultValue: void 0,
                s: !1,
                g: "restrict-extended",
                i: "imageSearchOptions",
                m: void 0
            },
            Ly: {
                name: "image_lr",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "lr",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            Dy: {
                name: "image_cr",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "cr",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            Fy: {
                name: "image_gl",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "gl",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            Ey: {
                name: "image_filter",
                l: W(["number"]),
                defaultValue: void 0,
                s: !0,
                g: "filter",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            Cy: {
                name: "image_as_sitesearch",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "as_sitesearch",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            Ay: {
                name: "image_as_oq",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "as_oq",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            Oy: {
                name: "image_sort_by",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "sort",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            By: {
                name: "image_as_rights",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "as_rights",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            zy: {
                name: "image_as_filetype",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "as_filetype",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            Iy: {
                name: "image_size",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "imgsz",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            Gy: {
                name: "image_colortype",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "imgc",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            Hy: {
                name: "image_dominantcolor",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "imgcolor",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            Jy: {
                name: "image_type",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "imgtype",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            Ny: {
                name: "imageSearchResultSetSize",
                l: W(["number", "string"]),
                defaultValue: void 0,
                s: !0,
                g: "resultSetSize",
                i: "imageSearchOptions",
                m: void 0
            },
            wy: {
                name: "gaQueryParameter",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "queryParameter",
                i: "googleAnalyticsOptions",
                m: "searchbox"
            },
            vy: {
                name: "gaCategoryParameter",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "categoryParameter",
                i: "googleAnalyticsOptions",
                m: "searchbox"
            },
            ay: {
                name: "adchannel",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "adchannel",
                i: void 0,
                m: void 0
            },
            by: {
                name: "adclient",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "adclient",
                i: void 0,
                m: void 0
            },
            ey: {
                name: "adtest",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "adtest",
                i: void 0,
                m: void 0
            },
            dy: {
                name: "adoptions",
                l: W(["object"]),
                defaultValue: void 0,
                s: !1,
                g: "adoptions",
                i: void 0,
                m: void 0
            },
            jz: {
                name: "overlayResults",
                l: Uh,
                defaultValue: !1,
                s: !0,
                g: "overlayResults",
                i: void 0,
                m: void 0
            },
            ty: {
                name: "enableRichSnippets",
                l: Uh,
                defaultValue: !1,
                s: !1,
                g: void 0,
                i: void 0,
                m: "results"
            },
            xy: {
                name: "hideElementBranding",
                l: Uh,
                defaultValue: !1,
                s: !1,
                g: void 0,
                i: void 0,
                m: void 0
            },
            Yy: {
                name: "personalizedAds",
                l: Uh,
                defaultValue: !0,
                s: !0,
                g: "personalizedAds",
                i: void 0,
                m: void 0
            },
            ly: {
                name: "cssThemeVersion",
                l: W(["number"]),
                defaultValue: void 0,
                s: !1,
                g: void 0,
                i: void 0,
                m: void 0
            },
            Sy: {
                name: "mobileLayout",
                l: W(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "mobileLayout",
                i: void 0,
                m: void 0
            },
            Py: {
                name: "isMobileDevice",
                l: Uh,
                defaultValue: !1,
                s: !1,
                g: void 0,
                i: void 0,
                m: void 0
            },
            Qy: {
                name: "isSafeSearchActive",
                l: function(a) {
                    if ("string" == typeof a) {
                        if ("off" == a || "moderate" == a) return "off";
                        if ("active" == a) return "active"
                    } else if ("boolean" == typeof a) return a ? "active" : "off"
                },
                defaultValue: void 0,
                s: !0,
                g: "isSafeSearchActive",
                i: void 0,
                m: void 0
            },
            yy: {
                name: "imageLayoutRedesign",
                l: Uh,
                defaultValue: !1,
                s: !1,
                g: void 0,
                i: void 0,
                m: void 0
            }
        },
        fi = function(a, b) {
            for (var c in ei) ei.hasOwnProperty(c) && a.call(b, ei[c])
        },
        gi = ["oq", "gs_204"];
    var hi = function(a, b) {
            var c = {};
            fi(function(d) {
                var e = a.getAttribute(b + d.name);
                null != e && (c[d.name] = e)
            }, null);
            return c
        },
        ii = function(a, b) {
            this.node = a;
            this.ro = b ? 1 : 0;
            if (b) {
                var c = b.tag || "search";
                var d = b.attributes || {}
            } else {
                c = "";
                c = a.nodeName.toLowerCase();
                var e = "";
                "div" == c ? (e = "data-", c = (a.className || a.getAttribute("class")).substr(5)) : c = c.substr(5);
                d = hi(a, e)
            }
            this.attributes = d;
            this.ec = Zh[c].ec;
            this.type = Zh[c].qe;
            a = b ? b.gname : a.getAttribute(e + "gname");
            this.ya = Yh[this.ec].Tf(a);
            this.qr = function() {
                var g = this.node;
                if (0 == this.ro) {
                    var h = document.createElement("div");
                    var k = g.parentNode;
                    k.insertBefore(h, g);
                    k.removeChild(g);
                    h.id = g.id;
                    this.node = h
                } else 1 == this.ro && (h = document.createElement("div"), g.appendChild(h), this.node = h);
                this.node.id && 0 !== this.node.id.length || (this.node.id = Wh())
            }
        };
    var ji = ' <div style="display:none"> <span id="private_ratings"> <span class="gsc-snippet-metadata"> <span data-if="Vars.ratingstars"> <span class="gsc-rating-bar"> <span data-attr="{style:\'width:\' + (Vars.ratingstars * 20) + \'%\'}"></span> </span> <span data-if="Vars.ratingcount"> <span data-body="\' \' + Vars.ratingcount"></span> <span> reviews</span> </span> </span> <span data-if="Vars.totaltime"> <span data-if="Vars.ratingstars && Vars.ratingcount"> - </span> <span data-body="Vars.totaltime"></span> </span> <span data-if="Vars.calories"> <span data-if="Vars.ratingstars && Vars.ratingcount || Vars.totaltime"> - </span> <span data-body="Vars.calories"></span> <span> cal</span> </span> <span data-if="Vars.pricerange"> <span data-if="Vars.ratingstars && Vars.ratingcount || Vars.totaltime || Vars.calories"> - </span> <span> Price range: </span> <span data-body="Vars.pricerange"></span> </span> <span data-if="Vars.reviewer" class="gsc-reviewer"> <span data-body="\' \' + Vars.reviewer"></span> </span> </span> </span> <span id="private_hproduct"> <span class="gsc-snippet-metadata"> <span data-if="Vars.availability">Availability: <span data-body="Vars.availability"></span>.</span> <span data-if="Vars.availability && Vars.price">&nbsp;</span> <span data-if="Vars.price"> Price: <span data-body="Vars.price"></span>.</span> </span> </span> <span id="private_hreview_icon"> <span data-if="google.search.richsnippets.hreviewNonEmpty(Vars.hreview)"> <span class="gsc-zippy"></span> </span> </span> <span id="private_hreview_content"> <span data-if="google.search.richsnippets.hreviewNonEmpty(Vars.hreview)" class="gsc-preview-reviews"> <ul> <span data-foreach="Vars.hreview" data-attr="0"> <li data-if="(Cur.description || Cur.summary) && Index == 0" class = "gsc-review-agregate-first-line"> <span data-if="Cur.description" data-body="Cur.description"></span> <span data-elif="Cur.summary" data-body="Cur.summary"></span> </li> <li data-elif="(Cur.description || Cur.summary) && Index < 10" data-attr="{\'class\': Index % 2 == 0 ? \'gsc-review-agregate-even-lines\' : \'gsc-review-agregate-odd-lines\'}"> <span data-if="Cur.description" data-body="Cur.description"></span> <span data-elif="Cur.summary" data-body="Cur.summary"></span> </li> </span> </ul> </span> </span> <span id="private_hrecipe"> <span data-if="Vars.author" class="gsc-author"> <span data-body="\' \' + Vars.author"></span> </span> </span> <span id="private_recipe"> <span data-attr="0" data-body="render(\'private_ratings\',google.search.richsnippets.merge(richSnippet.recipe))"> </span> <span data-if="Vars.richSnippet.hrecipe && Vars.richSnippet.hrecipe.author && !Vars.richSnippet.recipe.reviewer" data-attr="0" data-body="render(\'private_hrecipe\',richSnippet.hrecipe)"> </span> </span> <span id="private_person"> <span data-vars="{vcard:google.search.richsnippets.merge(Vars.richSnippet.vcard)}"> <span data-if="Vars.richSnippet.vcard && vcard.adr"> <span data-if="vcard.adr" class="gs-location"> <span data-body="\' \' + vcard.adr"> </span> </span> </span> <span data-elif="Vars.richSnippet.person"> <span data-if="person.role" class="gsc-role"> <span data-attr="0" data-body="\' \' + person.role"> </span> </span> <span data-if="person.org" class="gsc-org"> <span data-body="\' @\' + person.org"> </span> </span> <span data-if="person.location" class="gsc-location"> <span data-if="person.org || person.role || Vars.richSnippet.review"> - </span> <span data-body="\' \' + person.location"> </span> </span> </span> <span data-if="Vars.richSnippet.vcard && vcard.tel" class="gsc-tel"> <span data-if="(person && (person.org || person.role || Vars.richSnippet.review || person.location)) || (Vars.richSnippet.vcard && vcard.adr) "> - </span> <span data-body="\' Tel: \' + vcard.tel"> </span> </span> </span> </span> <span id="private_metadata" class="gsc-snippet-metadata"> <span data-vars="{person:google.search.richsnippets.merge(Vars.richSnippet.person), product:google.search.richsnippets.merge(Vars.richSnippet.hproduct)}"> <span data-if="Vars.richSnippet.recipe" data-attr="0" data-body="render(\'private_recipe\', Vars)"> </span> <span data-elif="Vars.richSnippet.review" data-attr="0" data-body="render(\'private_ratings\',google.search.richsnippets.merge(richSnippet.review))"> </span> <span data-if="Vars.richSnippet.hproduct && (product.availability || product.price)" data-attr="0" data-body="render(\'private_hproduct\', product)"> </span> <span data-elif="Vars.richSnippet.person || Vars.richSnippet.vcard" data-attr="0" data-body="render(\'private_person\', Vars)"> </span> </span> </span> <div id="base_facets"> <div class="gsc-context-box" data-facetgroup=\'title\'> </div> </div> <div id="base_facetGroupEntry"> <div> <div class="gsc-facet-label gsc-col" style="display:inline-block;"> <a data-attr="{\'data-refinementLabel\': label, \'label-with-op\': label_with_op}" data-body="anchor"></a> </div> <div class="gsc-facet-result gsc-col" data-body="html(width + \'%\')" style="display:inline-block;"> </div> <div data-attr="{\'class\': index == \'first\' ? \'gsc-chart gsc-top gsc-col\' : index == \'last\' ? \'gsc-chart gsc-bottom gsc-col\' : index == \'sizeone\' ? \'gsc-chart gsc-bottom gsc-col gsc-top\' : \'gsc-chart gsc-col\'}" style="display:inline-block;"> <div class="" data-attr="{style:\'width:\' + width + \'%\'}"></div> </div> </div> </div> <div id="base_webResult"> <div class="gs-webResult gs-result" data-vars="{longUrl:function() { var i = unescapedUrl.indexOf(visibleUrl); return i < 1 ? visibleUrl : unescapedUrl.substring(i);}}"> <div class="gsc-thumbnail-inside"> <div class="gs-title"> <a class="gs-title" data-attr="{href:unescapedUrl,target:target,dir:bidiHtmlDir(title)}" data-body="html(title)"> </a> </div> </div> <div class="gsc-url-top"> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-short" data-body="visibleUrl" data-attr="{dir:bidiTextDir(visibleUrl)}"> </div> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-long" data-body="Vars.formattedUrl ? html(Vars.formattedUrl) : longUrl()" data-attr="{dir: Vars.formattedUrl ? bidiHtmlDir(Vars.formattedUrl) : bidiTextDir(longUrl()), style:\'word-break:break-all;\'}"> </div> </div> <table class="gsc-table-result"> <tbody> <tr> <td class="gsc-table-cell-thumbnail gsc-thumbnail" style="display:none"> <div data-if="Vars.richSnippet" data-attr="0" data-body="render(\'thumbnail\',richSnippet,{url:unescapedUrl,target:target})"> </div> </td> <td data-attr="{\'class\': \'gsc-table-cell-snippet-close\'}"> <div class="gs-title gsc-table-cell-thumbnail gsc-thumbnail-left"> <a class="gs-title" data-attr="{href:unescapedUrl,target:target,dir:bidiHtmlDir(title)}" data-body="html(title)"> </a> </div> <div class="gs-fileFormat" data-if="Vars.fileFormat"> <span class="gs-fileFormat" data-body="localizedMessages[\'file-format\'] + \' \'"></span> <span class="gs-fileFormatType" data-body="Vars.fileFormat"></span> </div> <div data-if="google.search.CurrentLocale == \'en\' && Vars.richSnippet"> <span data-attr="0" data-body="render(\'private_metadata\', Vars)"> </span> </div> <div class="gs-bidi-start-align gs-snippet" data-body="html(content)" data-attr="{dir:bidiHtmlDir(content)}"> </div> <div class="gsc-url-bottom"> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-short" data-body="visibleUrl" data-attr="{dir:bidiTextDir(visibleUrl)}"> </div> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-long" data-body="Vars.formattedUrl ? html(Vars.formattedUrl) : longUrl()" data-attr="{dir: Vars.formattedUrl ? bidiHtmlDir(Vars.formattedUrl) : bidiTextDir(longUrl()), style:\'word-break:break-all;\'}"> </div> </div> <div class="gs-richsnippet-box" style="display: none;"> </div> <span data-if="google.search.CurrentLocale == \'en\' && Vars.richSnippet && Vars.richSnippet.hreview" data-attr="0" data-body="render(\'private_hreview_content\',richSnippet)"> </span> <div class="gs-per-result-labels" data-attr="{url:unescapedUrl}"> <span data-body="localizedMessages[\'labeled\']" data-if="Vars.perResultLabels"></span> <div data-foreach="Vars.perResultLabels" data-attr="0" data-if="Vars.perResultLabels"> <a class="gs-label" data-attr="{\'data-refinementLabel\': Cur[\'label\'], \'label-with-op\': Cur[\'label_with_op\'], \'dir\' : bidiTextDir(Cur.anchor)}" data-body="Cur.anchor"></a> <span data-body="bidiTextMarkAfter(Cur.anchor)"></span> </div> </div> </td> </tr> </tbody> </table> </div> </div> <div id="base_imageResult_image" ><a data-attr="{ \'href\':originalContextUrl, \'target\':target, \'class\':imageClass }" ><img data-attr="{ \'src\':tbUrl, \'title\':titleNoFormatting, \'class\':imageClass }"/ ></a ></div> <div id="base_imageResult_text" ><div class="gs-title gs-ellipsis" ><a class="gs-title" data-attr="{ href:originalContextUrl, target:target, dir:bidiHtmlDir(title) }" data-body="html(title)"></a ></div ><div class="gs-visibleUrl gs-bidi-start-align gs-ellipsis gsc-url-top" data-attr="{title:visibleUrl, dir:bidiTextDir(visibleUrl)}" data-body="visibleUrl" ></div ><div class="gs-snippet gs-bidi-start-align gs-ellipsis" data-attr="{title:contentNoFormatting, dir:bidiHtmlDir(content)}" data-body="html(content)" ></div ><div class="gs-size gs-ellipsis" data-body="width + \' \u00d7 \' + height" ></div ><div class="gs-visibleUrl gs-bidi-start-align gs-ellipsis gsc-url-bottom" data-attr="{title:visibleUrl, dir:bidiTextDir(visibleUrl)}" data-body="visibleUrl" ></div ></div> <div id="base_imageResult_content" ><div data-body="render(\'base_imageResult_image\', Vars)" class="gs-image-box" ></div ><div data-body="render(\'base_imageResult_text\', Vars)" class="gs-text-box" ></div ></div> <div id="base_imageResult_classic" ><div class="gs-result gs-imageResult gs-imageResult-classic" data-body="render(\'base_imageResult_content\', Vars, { imageClass: \'gs-image gs-image-scalable\' })" ></div ></div> <div id="base_imageResult_column" ><div class="gs-result gs-imageResult gs-imageResult-column" data-body="render(\'base_imageResult_content\', Vars, { imageClass: \'gs-image gs-image-scalable\' })" ></div ></div> <div id="base_imageResult_popup" ><div class="gs-result gs-imageResult gs-imageResult-popup" onmouseover="google.search.ImageSearch.showPopup(this)" onmouseout="google.search.ImageSearch.hidePopup(this)" ><div class="gs-image-thumbnail-box" ><div data-body="render(\'base_imageResult_image\', Vars, { imageClass: \'gs-image gs-image-scalable\' })" class="gs-image-box" ></div ></div ><div data-body="render(\'base_imageResult_content\', Vars, { imageClass: \'gs-image\' })" class="gs-image-popup-box" ></div ></div ></div> <div id="base_thumbnail"> <div data-attr="0" data-vars="{tn:(Vars.cseThumbnail && cseThumbnail.src) ? cseThumbnail : ( (Vars.thumbnail && thumbnail.src) ? thumbnail : {src:Vars.document && document.thumbnailUrl})}"> <div data-if="tn.src"> <a class="gs-image" data-attr="{href:url,target:target}"> <img data-if="!tn.width || !tn.height || tn.width >= tn.height * 7 / 5" class="gs-image" data-attr="{src:tn.src}" onload="if (this.parentNode && this.parentNode.parentNode && this.parentNode.parentNode.parentNode) { this.parentNode.parentNode.parentNode.style.display = \'\'; this.parentNode.parentNode.className = \'gs-image-box gs-web-image-box gs-web-image-box-landscape\'; } "/> <img data-elif="true" class="gs-image" data-attr="{src:tn.src}" onload="if (this.parentNode && this.parentNode.parentNode && this.parentNode.parentNode.parentNode) { this.parentNode.parentNode.parentNode.style.display = \'\'; this.parentNode.parentNode.className = \'gs-image-box gs-web-image-box gs-web-image-box-portrait\'; } "/> </a> </div> </div> </div> <div id="base_action"> <div data-foreach="Vars.action" data-attr="0"> <div data-attr="{\'class\': \'gs-action \' + Cur[\'class\']}" data-if="Cur.url && Cur.label"> <a class="gs-action" data-attr="{href:Cur.url,target:target,dir:bidiTextDir(Cur.label)}" data-body="Cur.label"></a> </div> </div> </div> </div> ',
        ki = ' <div style="display:none"> <span id="private_ratings"> <span class="gsc-snippet-metadata"> <span data-if="Vars.ratingstars"> <span class="gsc-rating-bar"> <span data-attr="{style:\'width:\' + (Vars.ratingstars * 20) + \'%\'}"></span> </span> <span data-if="Vars.ratingcount"> <span data-body="\' \' + Vars.ratingcount"></span> <span> reviews</span> </span> </span> <span data-if="Vars.totaltime"> <span data-if="Vars.ratingstars && Vars.ratingcount"> - </span> <span data-body="Vars.totaltime"></span> </span> <span data-if="Vars.calories"> <span data-if="Vars.ratingstars && Vars.ratingcount || Vars.totaltime"> - </span> <span data-body="Vars.calories"></span> <span> cal</span> </span> <span data-if="Vars.pricerange"> <span data-if="Vars.ratingstars && Vars.ratingcount || Vars.totaltime || Vars.calories"> - </span> <span> Price range: </span> <span data-body="Vars.pricerange"></span> </span> <span data-if="Vars.reviewer" class="gsc-reviewer"> <span data-body="\' \' + Vars.reviewer"></span> </span> </span> </span> <span id="private_hproduct"> <span class="gsc-snippet-metadata"> <span data-if="Vars.availability">Availability: <span data-body="Vars.availability"></span>.</span> <span data-if="Vars.availability && Vars.price">&nbsp;</span> <span data-if="Vars.price"> Price: <span data-body="Vars.price"></span>.</span> </span> </span> <span id="private_hrecipe"> <span data-if="Vars.author" class="gsc-author"> <span data-body="\' \' + Vars.author"></span> </span> </span> <span id="private_recipe"> <span data-attr="0" data-body="render(\'private_ratings\',google.search.richsnippets.merge(richSnippet.recipe))"> </span> <span data-if="Vars.richSnippet.hrecipe && Vars.richSnippet.hrecipe.author && !Vars.richSnippet.recipe.reviewer" data-attr="0" data-body="render(\'private_hrecipe\',richSnippet.hrecipe)"> </span> </span> <span id="private_person"> <span data-vars="{vcard:google.search.richsnippets.merge(Vars.richSnippet.vcard)}"> <span data-if="Vars.richSnippet.vcard && vcard.adr"> <span data-if="vcard.adr" class="gs-location"> <span data-body="\' \' + vcard.adr"> </span> </span> </span> <span data-elif="Vars.richSnippet.person"> <span data-if="person.role" class="gsc-role"> <span data-attr="0" data-body="\' \' + person.role"> </span> </span> <span data-if="person.org" class="gsc-org"> <span data-body="\' @\' + person.org"> </span> </span> <span data-if="person.location" class="gsc-location"> <span data-if="person.org || person.role || Vars.richSnippet.review"> - </span> <span data-body="\' \' + person.location"> </span> </span> </span> <span data-if="Vars.richSnippet.vcard && vcard.tel" class="gsc-tel"> <span data-if="(person && (person.org || person.role || Vars.richSnippet.review || person.location)) || (Vars.richSnippet.vcard && vcard.adr) "> - </span> <span data-body="\' Tel: \' + vcard.tel"> </span> </span> </span> </span> <span id="private_metadata" class="gsc-snippet-metadata"> <span data-vars="{person:google.search.richsnippets.merge(Vars.richSnippet.person), product:google.search.richsnippets.merge(Vars.richSnippet.hproduct)}"> <span data-if="Vars.richSnippet.recipe" data-attr="0" data-body="render(\'private_recipe\', Vars)"> </span> <span data-elif="Vars.richSnippet.review" data-attr="0" data-body="render(\'private_ratings\',google.search.richsnippets.merge(richSnippet.review))"> </span> <span data-if="Vars.richSnippet.hproduct && (product.availability || product.price)" data-attr="0" data-body="render(\'private_hproduct\', product)"> </span> <span data-elif="Vars.richSnippet.person || Vars.richSnippet.vcard" data-attr="0" data-body="render(\'private_person\', Vars)"> </span> </span> </span> <div id="base_facets"> <div class="gsc-context-box" data-facetgroup=\'title\'> </div> </div> <div id="base_facetGroupEntry"> <div> <div class="gsc-facet-label gsc-col" style="display:inline-block;"> <a data-attr="{\'data-refinementLabel\': label, \'label-with-op\': label_with_op}" data-body="anchor"></a> </div> <div class="gsc-facet-result gsc-col" data-body="html(width + \'%\')" style="display:inline-block;"> </div> <div data-attr="{\'class\': index == \'first\' ? \'gsc-chart gsc-top gsc-col\' : index == \'last\' ? \'gsc-chart gsc-bottom gsc-col\' : index == \'sizeone\' ? \'gsc-chart gsc-bottom gsc-col gsc-top\' : \'gsc-chart gsc-col\'}" style="display:inline-block;"> <div class="" data-attr="{style:\'width:\' + width + \'%\'}"></div> </div> </div> </div> <div id="base_webResult"> <div class="gs-webResult gs-result" data-vars="{longUrl:function() { var i = unescapedUrl.indexOf(visibleUrl); return i < 1 ? visibleUrl : unescapedUrl.substring(i);}}"> <div class="gsc-thumbnail-inside"> <div class="gs-title"> <a class="gs-title" data-attr="{href:unescapedUrl,target:target,dir:bidiHtmlDir(title)}" data-body="html(title)"> </a> </div> </div> <div class="gsc-url-top"> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-short" data-body="visibleUrl" data-attr="{dir:bidiTextDir(visibleUrl)}"> </div> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-long" data-body="Vars.formattedUrl ? html(Vars.formattedUrl) : longUrl()" data-attr="{dir: Vars.formattedUrl ? bidiHtmlDir(Vars.formattedUrl) : bidiTextDir(longUrl()), style:\'word-break:break-all;\'}"> </div> </div> <div class="gsc-table-result"> <div data-if="Vars.richSnippet" data-attr="0" data-body="render(\'thumbnail\',richSnippet,{url:unescapedUrl,target:target})"> </div> <div class="gsc-table-cell-snippet-close"> <div class="gs-title gsc-table-cell-thumbnail gsc-thumbnail-left"> <a class="gs-title" data-attr="{href:unescapedUrl,target:target,dir:bidiHtmlDir(title)}" data-body="html(title)"> </a> </div> <div class="gs-fileFormat" data-if="Vars.fileFormat"> <span class="gs-fileFormat" data-body="localizedMessages[\'file-format\'] + \' \'"></span> <span class="gs-fileFormatType" data-body="Vars.fileFormat"></span> </div> <div data-if="google.search.CurrentLocale == \'en\' && Vars.richSnippet"> <span data-attr="0" data-body="render(\'private_metadata\', Vars)"> </span> </div> <div class="gs-bidi-start-align gs-snippet" data-body="html(content)" data-attr="{dir:bidiHtmlDir(content)}"> </div> <div class="gsc-url-bottom"> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-short" data-body="visibleUrl" data-attr="{dir:bidiTextDir(visibleUrl)}"> </div> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-long" data-body="Vars.formattedUrl ? html(Vars.formattedUrl) : longUrl()" data-attr="{dir: Vars.formattedUrl ? bidiHtmlDir(Vars.formattedUrl) : bidiTextDir(longUrl()), style:\'word-break:break-all;\'}"> </div> </div> <div data-if="Vars.richSnippet && Vars.richSnippet.action" class="gs-actions" data-body="render(\'action\',richSnippet,{url:unescapedUrl,target:target})"> </div> <div class="gs-richsnippet-box" style="display: none;"> </div> <div class="gs-per-result-labels" data-attr="{url:unescapedUrl}"> <span data-body="localizedMessages[\'labeled\']" data-if="Vars.perResultLabels"></span> <div data-foreach="Vars.perResultLabels" data-attr="0" data-if="Vars.perResultLabels"> <a class="gs-label" data-attr="{\'data-refinementLabel\': Cur[\'label\'], \'label-with-op\': Cur[\'label_with_op\'], \'dir\' : bidiTextDir(Cur.anchor)}" data-body="Cur.anchor"></a> <span data-body="bidiTextMarkAfter(Cur.anchor)"></span> </div> </div> </div> </div> </div> </div> <div id="base_imageResult_image" ><a data-attr="{ \'href\':originalContextUrl, \'target\':target, \'class\':imageClass }" ><img data-attr="{ \'src\':tbUrl, \'title\':titleNoFormatting, \'class\':imageClass }"/ ></a ></div> <div id="base_imageResult_text" ><div class="gs-title gs-ellipsis" ><a class="gs-title" data-attr="{ href:originalContextUrl, target:target, dir:bidiHtmlDir(title) }" data-body="html(title)"></a ></div ><div class="gs-visibleUrl gs-bidi-start-align gs-ellipsis gsc-url-top" data-attr="{title:visibleUrl, dir:bidiTextDir(visibleUrl)}" data-body="visibleUrl" ></div ><div class="gs-snippet gs-bidi-start-align gs-ellipsis" data-attr="{title:contentNoFormatting, dir:bidiHtmlDir(content)}" data-body="html(content)" ></div ><div class="gs-size gs-ellipsis" data-body="width + \' \u00d7 \' + height" ></div ><div class="gs-visibleUrl gs-bidi-start-align gs-ellipsis gsc-url-bottom" data-attr="{title:visibleUrl, dir:bidiTextDir(visibleUrl)}" data-body="visibleUrl" ></div ></div> <div id="base_imageResult_content" ><div data-body="render(\'base_imageResult_image\', Vars)" class="gs-image-box" ></div ><div data-body="render(\'base_imageResult_text\', Vars)" class="gs-text-box" ></div ></div> <div id="base_imageResult_classic" ><div class="gs-result gs-imageResult gs-imageResult-classic" data-body="render(\'base_imageResult_content\', Vars, { imageClass: \'gs-image gs-image-scalable\' })" ></div ></div> <div id="base_imageResult_column" ><div class="gs-result gs-imageResult gs-imageResult-column" data-body="render(\'base_imageResult_content\', Vars, { imageClass: \'gs-image gs-image-scalable\' })" ></div ></div> <div id="base_imageResult_popup" ><div class="gs-result gs-imageResult gs-imageResult-popup" onmouseover="google.search.ImageSearch.showPopup(this)" onmouseout="google.search.ImageSearch.hidePopup(this)" ><div class="gs-image-thumbnail-box" ><div data-body="render(\'base_imageResult_image\', Vars, { imageClass: \'gs-image gs-image-scalable\' })" class="gs-image-box" ></div ></div ><div data-body="render(\'base_imageResult_content\', Vars, { imageClass: \'gs-image\' })" class="gs-image-popup-box" ></div ></div ></div> <div id="base_thumbnail"> <div data-attr="0" data-vars="{tn:(Vars.cseThumbnail && cseThumbnail.src) ? cseThumbnail : ( (Vars.thumbnail && thumbnail.src) ? thumbnail : {src:Vars.document && document.thumbnailUrl})}"> <div class="gsc-table-cell-thumbnail gsc-thumbnail" data-if="tn.src"> <div data-if="!tn.width || !tn.height || tn.width >= tn.height * 7 / 5" class="gs-image-box gs-web-image-box gs-web-image-box-landscape"> <a class="gs-image" data-attr="{href:url,target:target}"> <img class="gs-image" data-attr="{src:tn.src}"> </a> </div> <div data-elif="true" class="gs-image-box gs-web-image-box gs-web-image-box-portrait"> <a class="gs-image" data-attr="{href:url,target:target}"> <img class="gs-image" data-attr="{src:tn.src}"> </a> </div> </div> </div> </div> <div id="base_action"> <div data-foreach="Vars.action" data-attr="0"> <div data-attr="{\'class\': \'gs-action \' + Cur[\'class\']}" data-if="Cur.url && Cur.label"> <a class="gs-action" data-attr="{href:Cur.url,target:target,dir:bidiTextDir(Cur.label)}" data-body="Cur.label"></a> </div> </div> </div> </div> ';
    var mi = {
            jx: function(a) {
                li = a
            }
        },
        ni = Wc(""),
        li;
    mi.nq = function(a) {
        oi.unshift(a);
        return oi
    };
    var oi = ["base_", ""],
        qi = function(a, b) {
            pi[a] || (pi[a] = eval("[function(Vars,render,html,bidiTextDir,bidiHtmlDir,bidiTextMarkAfter,bidiHtmlMarkAfter, localizedMessages){with(Vars)return(" + a + ")}][0]"));
            return pi[a](b, mi.aa, Eh, ch, dh, eh, fh, ih)
        };
    mi.wB = function(a) {
        Da();
        qi = a
    };
    var pi = {},
        ri = function() {
            var a = 3 == li ? ki : ji;
            a && (L(document.body, Eh(a, {
                vb: !0
            })), ki = ji = "")
        };
    mi.aa = function(a, b) {
        var c = 0;
        for (ri(); !a.appendChild;) {
            if (c >= oi.length) return Eh(a + " not found");
            a = Qh(oi[c++] + a) || a
        }
        for (var d = {}, e = 1; e < arguments.length; e++)
            for (var g in arguments[e]) d[g] = arguments[e][g];
        var h;
        try {
            var k = Eh(ni, {
                vb: !0
            });
            g = e = !1;
            var l, n, v = function(N) {
                N = "data-" + N;
                l = (h = n.getAttribute(N)) ? qi(h, d) : "";
                u.removeAttribute && u.removeAttribute(N);
                return h
            };
            for (n = a.firstChild; n; n = e ? n : n.nextSibling) {
                var u = n.cloneNode(!1);
                if (1 != n.nodeType)(3 != n.nodeType || n.nodeValue.match(/\S/)) && L(k, u);
                else {
                    v("foreach");
                    !e && h && (d.Foreach = l && "function" == typeof l.join ? l : [l], c = 0, e = !0);
                    if (e)
                        if (c < d.Foreach.length) d.Cur = d.Foreach[d.Index = c++];
                        else {
                            e = !1;
                            continue
                        }
                    v("if") && (g = !1);
                    if (h || v("elif"))
                        if (g || !l) continue;
                        else g = !0;
                    if (!v("attr") || l) {
                        var F = u;
                        L(k, F);
                        if (h)
                            for (var w in l) void 0 != l[w] && ("class" == w ? F.className = l[w] : F.setAttribute(w, l[w]))
                    } else u = k;
                    if (v("facetgroup"))
                        for (F = 0; F < d.display_facets.length; F++) {
                            var Q = {
                                index: ""
                            };
                            1 == d.display_facets.length ? Q = {
                                    index: "sizeone"
                                } : 0 == F ? Q = {
                                    index: "first"
                                } : F == d.display_facets.length - 1 &&
                                (Q = {
                                    index: "last"
                                });
                            L(u, (0, mi.aa)("facetGroupEntry", d.display_facets[F], Q))
                        }
                    var V = v("body") ? l && l instanceof Node ? l : vh("" + l) : (0, mi.aa)(n, d, v("vars") ? l : {});
                    try {
                        V && L(u, V)
                    } catch (N) {}
                }
            }
            return k
        } catch (N) {
            return Eh(N.toString() + ": " + h, {
                vb: !0
            })
        }
    };
    var ti = function() {
            this.kw = si;
            si += 1;
            this.Ha = {
                width: 100,
                height: 75
            };
            this.Eb = "_blank";
            this.tb("small");
            this.Vq();
            this.Lc = this.Tc = this.jb = this.Sg = this.Yc = this.Kg = this.Bh = this.se = null;
            this.results = [];
            this.Lg = {};
            this.Ie = this.Mc = "";
            if ("object" === typeof window && window.location && window.location.hostname && "" != window.location.hostname) {
                if ("" == Jh) {
                    var a = window.location.hostname.toLowerCase().split(".");
                    2 > a.length && (Jh = ".com");
                    var b = a.pop();
                    a = a.pop();
                    Jh = 2 == b.length ? Kh[a] && 1 == Kh[a][b] ? "." + a + "." + b : "." + b : ".com"
                }
                b =
                    Jh
            } else b = ".com";
            this.Lm = b;
            this.Pc = this.Mf = null;
            this.M = !1;
            this.Na = "none"
        },
        si = 0,
        ui = /style=([^&]*)/;
    f = ti.prototype;
    f.tl = function(a) {
        a.html && delete a.html;
        if (a.type && "SPELL_CORRECTED_RESULTS" == a.type) {
            var b = M("gs-result");
            var c = wh({
                    text: ih["showing-results-for"] + " ",
                    className: "gs-spelling",
                    uc: !0
                }),
                d = document.createElement("a"),
                e = bh(this.Rb(a.correctedAnchor));
            fd(d, e);
            c.appendChild(d);
            b.appendChild(c);
            c = wh({
                text: ih["search-instead-for"] + " ",
                className: "gs-spelling",
                uc: !0
            });
            T(c, "gs-spelling-original");
            d = document.createElement("a");
            e = bh(this.Rb(a.originalAnchor));
            fd(d, e);
            c.appendChild(d);
            b.appendChild(c)
        } else b = wh({
            text: ih.dym +
                " ",
            className: "gs-spelling",
            uc: !0
        }), T(b, "gs-result"), c = document.createElement("a"), d = bh(this.Rb(a.anchor)), fd(c, d), b.appendChild(c);
        a.html = b
    };
    f.cc = function() {
        return null
    };
    f.Rb = function(a) {
        return a
    };
    f.Bd = function() {
        return !1
    };
    f.Gd = function(a) {
        return a
    };
    f.th = function() {
        return new ti
    };
    f.Sj = function() {};
    f.Ih = function() {
        return null
    };
    f.Hh = function() {
        return null
    };
    f.qo = function() {};
    f.pl = function() {};
    f.nl = function() {};
    var vi = function() {
        if (google.search && google.search.Up) {
            var a = decodeURIComponent(google.search.Up).match(ui);
            if (a && a[1]) return a[1]
        }
        return null
    };
    f = ti.prototype;
    f.kl = function(a) {
        a.Tc = this.Tc;
        a.Qe = this.Qe;
        a.Eb = this.Eb;
        a.La = this.La;
        a.Yc = this.Yc;
        this.Ha && (a.Ha = {
            width: this.Ha.width,
            height: this.Ha.height
        });
        a.kh = this.kh;
        a.fc = this.fc;
        a.gc = this.gc;
        a.md = this.md;
        a.Na = this.Na
    };
    f.$d = function(a) {
        this.Tc = null == a || "" == a ? null : a
    };
    f.eo = function(a, b) {
        a = "";
        this.gc && this.M ? (a = this.md ? "https://csqr-autopush.corp.google.com/cse/element/v1" : "https://cse.google.com/cse/element/v1", a += "?rsz=" + this.La + "&num=" + this.ye() + "&hl=en") : this.fc && this.M && (a = "https://www.googleapis.com/customsearch/v1element?key=AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY&rsz=" + this.La + "&num=" + this.ye() + "&hl=en&prettyPrint=false");
        this.Qe && (a += "&source=" + encodeURIComponent(this.Qe));
        this.Lm && (a += "&gss=" + this.Lm);
        b && (a += "&start=" + b);
        this.Na && (a += "&cselibv=" + this.Na);
        return a
    };
    f.sb = function(a) {
        this.Eb = a
    };
    f.rm = function() {
        return this.lc
    };
    f.xe = function() {
        return this.Eb && "" != this.Eb ? this.Eb : null
    };
    f.Cc = function() {
        null == this.se && (this.se = "gsc-" + this.jb + "Result");
        return this.se
    };
    f.km = function() {
        null == this.Bh && (this.Bh = "gs-" + this.jb + "Result");
        return this.Bh
    };
    f.Jm = function() {
        null == this.Kg && (this.Kg = ih[this.jb]);
        return this.Yc ? this.Yc : this.Kg
    };
    f.tb = function(a) {
        this.ep(a)
    };
    f.Ag = function(a) {
        a && (this.Na = a)
    };
    f.ep = function(a) {
        var b = -1;
        "number" === typeof a ? b = a : isNaN(parseInt(a, 10)) || (b = parseInt(a, 10));
        if (0 < b && 8 >= b) this.La = b;
        else switch (a) {
            case "large":
                this.La = "large";
                break;
            default:
            case "small":
                this.La = "small"
        }
    };
    f.cp = function(a, b) {
        var c = void 0 === b ? {} : b;
        b = void 0 === c.oj ? 1 : c.oj;
        c = void 0 === c.mj ? 10 : c.mj;
        var d = -1;
        "number" === typeof a ? d = a : isNaN(parseInt(a, 10)) || (d = parseInt(a, 10));
        d >= b && d <= c ? this.La = d : "filtered_cse" == a ? this.La = a : this.ep(a)
    };
    f.Sa = function(a, b, c) {
        var d = void 0;
        if (c && 0 < c)
            if (this.cursor && this.cursor.pages && this.cursor.pages[c - 1] && this.cursor.pages[c - 1].start) d = this.cursor.pages[c - 1].start;
            else {
                var e = this.ye();
                e && (d = e * (c - 1))
            }
        c = this.mi(a, void 0, d);
        (b = Oh(b)) && (c += "&" + b);
        b = this.Lg.hasOwnProperty(c);
        if (c == this.Ie && !b) return this.Kl(), !1;
        d = (new Date).getTime();
        if (b && 5E3 > d - this.Lg[c]) return !1;
        b && (d = -1);
        this.Lg[c] = d;
        this.cursor = null;
        this.Mc = a;
        this.Ie = c;
        this.lc = this.sm ? this.sm() : null;
        this.M && (this.gc || this.fc) ? oh(wi(this, c)) : nh(this.zm(a,
            c));
        return !0
    };
    var wi = function(a, b) {
        var c = r.google.search.cse,
            d = "api" + Math.floor(2E4 * Math.random());
        c[d] = function(e) {
            var g = ba(e.error ? [e.error.code, e.error.message] : [200, null]),
                h = g.next().value;
            g = g.next().value;
            a.pg(e, h, g, h, b);
            delete c[d]
        };
        return b + "&callback=google.search.cse." + d
    };
    f = ti.prototype;
    f.zm = function(a, b) {
        var c = b + (this.lc ? "&" + this.lc : "");
        a = this.Kk(a, b);
        return c + ("&context=" + a)
    };
    f.xt = function(a) {
        this.cursor && a < this.cursor.pages.length && (a = this.mi(this.Mc, void 0, this.cursor.pages[a].start), this.cursor = null, this.Ie = a, this.M && (this.gc || this.fc) ? oh(wi(this, a)) : nh(this.zm(this.Mc, a)))
    };
    f.Rf = function() {
        return this.cursor && null != this.cursor.currentPageIndex ? this.cursor.currentPageIndex + 1 : null
    };
    f.ye = function() {
        return isNaN(parseInt(this.La, 10)) ? "small" == this.La ? 4 : "large" == this.La ? 8 : "filtered_cse" == this.La ? 10 : 4 : parseInt(this.La, 10)
    };
    f.Gk = function(a) {
        var b = Dh("http://code.google.com/apis/ajaxsearch/faq.html", ih.watermark + " - " + this.er(), "_blank", "gs-watermark");
        L(a, b)
    };
    f.er = function() {
        var a = new Date;
        return a.getMonth() + 1 + "/" + a.getFullYear()
    };
    f.Vq = function() {
        this.results = []
    };
    f.Kl = function() {
        this.Zk && this.Zk()
    };
    f.pg = function(a, b, c, d, e) {
        e && delete this.Lg[e];
        if (!e || !this.Ie || e == this.Ie) {
            if (this.results && 0 < this.results.length)
                for (e = 0; e < this.results.length; e++) this.results[e].html && xi(this.results[e].html);
            this.results = a && a.results && 0 < a.results.length ? a.results : [];
            this.completionStatus = b;
            this.hashStatus = d;
            c && (this.Mf = c);
            this.Do = a && a.resultAttribution && null != a.resultAttribution && "" != a.resultAttribution ? a.resultAttribution : null;
            a && a.cursor && a.cursor.pages && 0 < a.cursor.pages.length ? this.cursor = a.cursor : "cursor" in
                this && delete this.cursor;
            if (a && a.context) {
                this.context = a.context;
                b = [];
                if (a.context.facets && 0 < parseInt(a.context.total_results, 10)) {
                    for (e = 0; e < a.context.facets.length; e++) a.context.facets[e].facet_search_label && (c = a.context.facets[e], d = parseInt(c.count, 10), 0 < d && (c.count = d, c.width = Math.ceil(100 * d / parseInt(a.context.total_results, 10)), b.push(c)));
                    0 < b.length && b.sort(function(g, h) {
                        return h.count - g.count
                    })
                }
                this.context.display_facets = b
            } else "context" in this && delete this.context;
            a && a.promotions ? this.promotions =
                a.promotions : "promotions" in this && delete this.promotions;
            a && a.omittedResults ? this.omittedResults = a.omittedResults : "omittedResults" in this && delete this.omittedResults;
            a && a.spelling ? this.spelling = a.spelling : "spelling" in this && delete this.spelling;
            a && a.findMoreOnGoogle ? this.findMoreOnGoogle = a.findMoreOnGoogle : "findMoreOnGoogle" in this && delete this.findMoreOnGoogle;
            this.uq();
            this.Kl()
        }
    };
    f.zs = function() {
        return this.Do ? wh({
            text: this.Do,
            className: "gs-results-attribution"
        }) : null
    };
    f.fp = function(a) {
        this.kh = a
    };
    f.uq = function() {
        for (var a = 0; a < this.results.length; a++) this.xh(this.results[a]);
        (a = this.context) && this.nl(a)
    };
    f.ax = function(a, b, c) {
        c = void 0 === c ? [] : c;
        this.Zk = rh(a, b, c)
    };
    f.Kw = function(a, b) {
        this.sm = rh(a, b)
    };
    var yi = function(a, b) {
        if (a.length)
            for (var c = 0; c < a.length; c++)
                if (null == a[c]) {
                    a[c] = b;
                    var d = c;
                    break
                }
        d || (d = a.length, a.push(b));
        return d
    };
    ti.prototype.Sb = function(a) {
        this.Yc = a
    };
    var zi;

    function xi(a) {
        zi || (zi = wh());
        zi.appendChild(a);
        fd(zi, ad)
    }
    ti.prototype.ss = function(a) {
        var b = a || this.Mf;
        a = {};
        var c = M(this.km());
        T(c, "gs-result");
        T(c, "gs-error-result");
        b = wh({
            text: b,
            className: "gs-snippet"
        });
        L(c, b);
        a.html = c;
        return a
    };
    ti.prototype.ts = function(a) {
        var b = a || this.Pc;
        a = {};
        var c = M(this.km());
        T(c, "gs-result");
        T(c, "gs-no-results-result");
        b = wh({
            text: b,
            className: "gs-snippet"
        });
        L(c, b);
        a.html = c;
        return a
    };
    ti.prototype.Wo = function(a) {
        this.Ha = a
    };
    var Ai = function(a, b, c) {
        this.query = a;
        this.Hv = b;
        this.Pa = c
    };
    ti.prototype.Uo = function(a) {
        this.gc = a
    };
    ti.prototype.To = function(a) {
        this.md = a
    };
    ti.prototype.So = function(a) {
        this.fc = a
    };
    var Bi = function() {};
    f = Bi.prototype;
    f.eh = function() {
        return []
    };
    f.dh = function() {
        return {}
    };
    f.Mj = function() {
        return ""
    };
    f.Uc = function() {
        return null
    };
    f.Yj = function() {};
    f.type = function() {
        return null
    };
    f.clone = function() {
        return new Bi
    };
    var Ci = function(a, b) {
        this.yp = "cx";
        this.Nj = a;
        this.rc = (void 0 === b ? null : b) || null
    };
    f = Ci.prototype;
    f.type = function() {
        return this.yp
    };
    f.Mj = function() {
        return this.Nj
    };
    f.Uc = function() {
        return this.rc
    };
    f.Yj = function(a) {
        this.rc = a
    };
    f.eh = function() {
        var a = [];
        this.rc && (0 == this.rc.indexOf("more:") || 0 == this.rc.indexOf("less:") ? a.push(this.rc) : a.push("more:" + this.rc));
        return a
    };
    f.dh = function() {
        var a = {};
        return a[this.yp] = this.Nj, a
    };
    f.clone = function() {
        return new Ci(this.Nj, this.rc)
    };
    var Di = function(a, b) {
        if (null == a) throw Error("Missing CX value: " + a);
        if (/^[\s\xa0]*$/.test(a)) throw Error("Invalid or missing CX value: '" + a + "'");
        return new Ci(a, b)
    };
    var Ei = function() {
        ti.call(this);
        this.jb = "image";
        this.ka = this.Xa = this.rb = null;
        this.Ta = {};
        this.Je = "classic";
        this.X = new Bi;
        this.Ha = {
            width: 112,
            height: 84
        };
        this.lb = null
    };
    jh(Ei, ti);
    var Fi = [],
        Gi = {
            as_dt: !0,
            as_epq: !0,
            as_eq: !0,
            as_filetype: !0,
            as_lq: !0,
            as_nlo: !0,
            as_nhi: !0,
            as_oq: !0,
            as_q: !0,
            as_qdr: !0,
            as_rights: !0,
            as_rq: !0,
            as_sitesearch: !0,
            cr: !0,
            c2coff: !0,
            filter: !0,
            gl: !0,
            hq: !0,
            imgsz: !0,
            imgc: !0,
            imgcolor: !0,
            imgtype: !0,
            lr: !0,
            query: !0,
            sort: !0
        };
    f = Ei.prototype;
    f.th = function() {
        var a = new Ei;
        this.kl(a);
        a.rb = this.rb;
        a.Xa = this.Xa;
        a.ka = this.ka;
        a.Ta = this.Ta;
        a.Zo(this.Je);
        a.X = this.X.clone();
        a.M = this.M;
        a.lb = this.lb;
        return a
    };
    f.Gd = function(a) {
        a = a.replace(/\s+$/, "").replace(/^\s+/, "");
        return a.replace(/\s+/g, "_").toLowerCase()
    };
    f.Bd = function(a) {
        return this.M ? this.X.Uc() == this.Gd(a) : !1
    };
    f.Rb = function(a) {
        var b = this.X.Uc();
        return this.M && b ? a.replace(new RegExp("[ +]?" + b.replace(/^[\s\xa0]+/, "")), "") : a
    };
    f.Cc = function() {
        return this.se = ["gsc-" + this.jb + "Result", "gsc-" + this.jb + "Result-" + this.Je].join(" ")
    };
    f.Kk = function(a, b) {
        return yi(Fi, [this, a, b])
    };
    f.mi = function(a, b, c) {
        b = this.eo(null == b ? "CustomImageSearch.RawCompletion" : b, c);
        this.fc && this.M && (b += "&searchtype=image");
        a = [a];
        this.Tc && a.push(this.Tc);
        a = a.concat(this.X.eh()).join(" ");
        var d = this.X.dh(),
            e = [];
        for (g in d) e.push(g + "=" + d[g]);
        var g = "&" + e.join("&");
        g = g + "&q=" + encodeURIComponent(a);
        "off" == this.Xa || "active" == this.Xa ? g += "&safe=" + this.Xa : this.rb && (g += "&safe=" + this.rb);
        this.lb && (g += "&cse_tok=" + this.lb);
        this.Ta && (a = Oh(this.Ta)) && (g += "&" + a);
        this.ka && (g += "&exp=" + this.ka.join());
        b += g;
        this.Lc = g;
        c &&
            0 != c && (this.Lc = this.Lc + "&start=" + c);
        window.google.loader.GoogleLocale && this.fc && this.M && (b += "&googlehost=" + encodeURIComponent(window.google.loader.GoogleLocale));
        return b
    };
    f.xh = function(a) {
        a.html && delete a.html;
        a.target = this.xe() || void 0;
        a.html = mi.aa("imageResult_" + this.Je, a);
        for (var b = Hi(a.tbWidth, a.tbHeight, this.Ha), c = a.html.firstChild; c; c = c.nextSibling)
            if (1 == c.nodeType) {
                for (var d = c.getElementsByTagName("img"), e = [], g = 0, h; h = d[g]; ++g) e[g] = h;
                "IMG" == c.tagName.toUpperCase() && e.push(c);
                for (d = 0; g = e[d]; ++d) Hh(g, "gs-image-scalable") && (this.ju ? (g.style.width = "auto", g.style.height = "180px") : (g.style.width = b.width + "px", g.style.height = b.height + "px"))
            }
        this.Gk(a.html)
    };
    f.Zo = function(a) {
        if ("classic" == a || "column" == a || "popup" == a) {
            var b = this.results;
            if (this.Je != a && b)
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.html && delete d.html
                }
            this.Je = a;
            "classic" == a ? this.Ha = {
                width: 112,
                height: 84
            } : "column" == a ? this.Ha = {
                width: 112,
                height: 168
            } : "popup" == a && (this.Ha = {
                width: 224,
                height: 84
            })
        }
    };
    f.Nw = function(a) {
        this.ju = a
    };
    f.$j = function(a, b) {
        this.X = Di(a, b);
        this.X instanceof Ci && (this.M = !0)
    };
    f.Hh = function() {
        return this.M ? this.X.type() : null
    };
    f.Ih = function() {
        return this.M ? this.X.Mj() : null
    };
    f.cc = function() {
        return this.M ? this.X.Uc() : null
    };
    f.Sj = function(a) {
        this.M && a && this.X.Yj(a)
    };
    f.Se = function(a) {
        a && (this.lb = a)
    };
    f.tb = function(a) {
        this.cp(a, {
            oj: 1,
            mj: 20
        })
    };
    f.ye = function() {
        var a = ti.prototype.ye.call(this);
        return this.M && a && "number" != typeof this.La ? 2 * a : a
    };
    f.Uj = function(a) {
        this.Xa = a
    };
    f.ae = function(a, b) {
        if ("restrict-safesearch" == a) this.rb = b ? "active" == b || "off" == b ? b : null : null;
        else if ("restrict-extended" == a)
            if (b)
                for (var c in b) a = b[c], Gi[c] && (this.Ta[c] = a);
            else this.Ta = {}
    };
    var Hi = function(a, b, c, d, e) {
        var g = Math.min(c.width / a, c.height / b);
        a = {
            width: Math.round(a * g),
            height: Math.round(b * g)
        };
        d && (d.width = a.width, d.height = a.height, e && (d.style.left = (c.width - a.width) / 2 + "px"));
        return a
    };
    Ei.prototype.sb = function(a) {
        ti.prototype.sb.call(this, a)
    };
    Ei.prototype.$d = function(a) {
        ti.prototype.$d.call(this, a)
    };
    Ei.prototype.Cg = function(a) {
        this.ka = Array.isArray(a) && 0 != a.length ? a : null
    };
    var Ii = function() {
        ti.call(this);
        this.jb = "web";
        this.ka = this.Xa = this.rb = null;
        this.Ta = {};
        this.X = new Bi;
        this.lb = null;
        this.Mb = new Vf
    };
    jh(Ii, ti);
    var Ji = [],
        Ki = {
            as_dt: !0,
            as_epq: !0,
            as_eq: !0,
            as_filetype: !0,
            as_lq: !0,
            as_nlo: !0,
            as_nhi: !0,
            as_oq: !0,
            as_q: !0,
            as_qdr: !0,
            as_rights: !0,
            as_rq: !0,
            as_sitesearch: !0,
            cr: !0,
            c2coff: !0,
            filter: !0,
            gl: !0,
            hq: !0,
            lr: !0,
            query: !0,
            richsnippet: !0,
            sort: !0,
            usg: !0
        };
    f = Ii.prototype;
    f.th = function() {
        var a = new Ii;
        this.kl(a);
        a.rb = this.rb;
        a.Xa = this.Xa;
        a.ka = this.ka;
        a.Ta = this.Ta;
        a.X = this.X.clone();
        a.M = this.M;
        a.lb = this.lb;
        return a
    };
    f.qo = function(a) {
        var b = yi(Ji, [this, null, null]),
            c = 0;
        b && (c = parseInt(b, 10));
        b = 3 == Ji[c].length ? new Ai(Ji[c][1] || a && a.prefetchQuery, Ji[c][2], Ji[c][0], a) : new Ai("", "", Ji[c], a);
        Ji[c] = null;
        b.Pa.pg(a, 200, void 0, 200, b.Hv)
    };
    f.Gd = function(a) {
        a = a.replace(/\s+$/, "").replace(/^\s+/, "");
        return a.replace(/\s+/g, "_").toLowerCase()
    };
    f.Bd = function(a) {
        return this.M ? this.X.Uc() == this.Gd(a) : !1
    };
    f.Rb = function(a) {
        var b = this.X.Uc();
        return this.M && b ? a.replace(new RegExp("[ +]?" + b.replace(/^[\s\xa0]+/, "")), "") : a
    };
    f.Kk = function(a, b) {
        return yi(Ji, [this, a, b])
    };
    f.mi = function(a, b, c) {
        b = null == b ? "CustomWebSearch.RawCompletion" : b;
        a = [a];
        this.Tc && a.push(this.Tc);
        a = a.concat(this.X.eh()).join(" ");
        var d = this.X.dh(),
            e = [];
        for (g in d) e.push(g + "=" + d[g]);
        var g = "&" + e.join("&");
        g += "&q=" + encodeURIComponent(a);
        "off" == this.Xa || "active" == this.Xa ? g += "&safe=" + this.Xa : this.rb && (g += "&safe=" + this.rb);
        this.lb && (g += "&cse_tok=" + this.lb);
        this.Ta && (a = Oh(this.Ta)) && (g += "&" + a);
        this.ka && (g += "&exp=" + this.ka.join());
        b = this.eo(b, c);
        b += g;
        this.Lc = g;
        c && 0 != c && (this.Lc = this.Lc + "&start=" + c);
        window.google.loader.GoogleLocale &&
            (b = this.fc && this.M ? b + ("&googlehost=" + encodeURIComponent(window.google.loader.GoogleLocale)) : b + ("&gl=" + encodeURIComponent(window.google.loader.GoogleLocale)));
        return b
    };
    f.wr = function(a, b) {
        var c = wh({
            text: ah(a.visibleUrl),
            className: "gs-visibleUrl"
        });
        L(b, c);
        T(c, "gs-visibleUrl-short");
        a = wh({
            text: ah(a.url),
            className: "gs-visibleUrl"
        });
        L(b, a);
        T(a, "gs-visibleUrl-long")
    };
    f.pl = function(a) {
        a.html && delete a.html;
        var b = M("gs-promotion");
        T(b, "gs-result");
        var c = M("gs-promotion-table");
        L(b, c);
        if (a.image) {
            var d = a.image.url.replace("resize_w=40", "resize_w=60").replace("resize_h=40", "resize_h=60");
            d = Bh(d, null, null, "gs-promotion-image");
            if (a.url) {
                var e = Ch(a.url, "", this.xe());
                a.clicktrackUrl && Li(e, a.clicktrackUrl, a.url);
                L(e, d);
                d = e
            }
            e = d
        }
        d = null;
        a.clicktrackUrl && (d = {}, d["data-cturl"] = a.clicktrackUrl, d["data-ctorig"] = a.url);
        d = Dh(a.url, a.title, this.xe(), "gs-title", void 0, d);
        if (a.titleRight) {
            var g =
                xh("", "gs-promotion-title-right"),
                h = this.Mb.ib(" " + a.titleRight);
            fd(g, h);
            L(d, g)
        }
        d.dir = dh(d.innerHTML);
        T(d, "gs-bidi-start-align");
        h = M(a.image ? "" : "gs-promotion-text-cell");
        L(c, h);
        L(h, d);
        Ii.prototype.wr(a, h);
        c = M();
        if (e) {
            g = M("gs-promotion-table-snippet-with-image");
            L(h, g);
            h = M("gs-promotion-image-cell");
            var k = M("gs-promotion-image-box");
            L(k, e);
            L(h, k);
            L(g, h);
            T(c, "gs-promotion-text-cell-with-image");
            L(g, c)
        } else a.bodyLines && L(h, c);
        if (a.bodyLines)
            for (e = a.bodyLines, g = "right" == a.bodyLinkAlignment, h = 0; h < e.length; h++) {
                var l =
                    e[h],
                    n = l.title,
                    v = l.url,
                    u = l.visibleUrl;
                k = void 0;
                n && (k = xh(""), n = this.Mb.ib(n), fd(k, n));
                n = void 0;
                v && u && (n = Ch(v, "", this.xe()), l.clicktrackUrl && Li(n, l.clicktrackUrl, v), l = xh("", "gs-title"), u = this.Mb.ib(u), fd(l, u), L(n, l));
                u = M("gs-snippet");
                k && g && (L(u, k), n && L(u, vh(" ")));
                n && L(u, n);
                k && !g && (n && L(u, vh(" ")), L(u, k));
                u.dir = dh(d.innerHTML);
                T(u, "gs-bidi-start-align");
                L(c, u)
            }
        a.html = b
    };
    f.nl = function(a) {
        delete a.html;
        0 < a.display_facets.length && (a.html = mi.aa("facets", a))
    };
    f.xh = function(a) {
        a.html && delete a.html;
        a.target = this.xe() || void 0;
        a.title = a.title || a.visibleUrl;
        a.html = mi.aa("webResult", a);
        if (a.clicktrackUrl)
            for (var b = a.html.firstChild; b; b = b.nextSibling)
                if (1 == b.nodeType) {
                    "a" == b.tagName.toLowerCase() && b.href == a.unescapedUrl && Li(b, a.clicktrackUrl, a.unescapedUrl);
                    for (var c = b.getElementsByTagName("a"), d = 0, e; e = c[d]; d++) e.href == a.unescapedUrl && Li(e, a.clicktrackUrl, a.unescapedUrl)
                }
        this.Gk(a.html)
    };
    var Li = function(a, b, c) {
        a.setAttribute("data-cturl", b);
        a.setAttribute("data-ctorig", c)
    };
    f = Ii.prototype;
    f.$j = function(a, b) {
        this.Mf = null;
        this.X = Di(a, b);
        this.X instanceof Ci && (this.M = !0)
    };
    f.Hh = function() {
        return this.M ? this.X.type() : null
    };
    f.Ih = function() {
        return this.M ? this.X.Mj() : null
    };
    f.cc = function() {
        return this.M ? this.X.Uc() : null
    };
    f.Sj = function(a) {
        this.M && a && this.X.Yj(a)
    };
    f.Se = function(a) {
        a && (this.lb = a)
    };
    f.Uj = function(a) {
        this.Xa = a
    };
    f.ae = function(a, b) {
        "restrict-safesearch" == a && (this.rb = b ? "active" == b || "off" == b || "moderate" == b ? b : null : null);
        if ("restrict-extended" == a)
            if (b)
                for (var c in b) a = b[c], Ki[c] && (this.Ta[c] = a);
            else this.Ta = {}
    };
    f.tb = function(a) {
        this.cp(a, {
            oj: 1,
            mj: 20
        })
    };
    f.sb = function(a) {
        ti.prototype.sb.call(this, a)
    };
    f.$d = function(a) {
        ti.prototype.$d.call(this, a)
    };
    f.Cg = function(a) {
        this.ka = Array.isArray(a) && 0 != a.length ? a : null
    };
    var Pi = function(a, b) {
            this.vk = !(!window.history || !window.history.pushState);
            this.wk = Mi();
            this.hi = this.vk || this.wk;
            var c = window.location.href;
            this.Gq = 0 <= c.indexOf("#") ? c.substring(0, c.indexOf("#")) : c;
            this.Ni = !1;
            this.bv = b;
            b = Ni(Oi());
            this.hj = b.zn;
            this.Nc = b.state;
            if (this.hi) {
                b = qh(this, Pi.prototype.ev);
                this.vk && window.addEventListener ? (window.addEventListener("popstate", b, !1), window.addEventListener("hashchange", b, !1)) : this.wk && (window.addEventListener ? window.addEventListener("hashchange", b, !1) : window.attachEvent &&
                    window.attachEvent("onhashchange", b));
                b = !1;
                for (var d in this.Nc) {
                    b = !0;
                    break
                }
                b ? this.Sl() : this.hp(a, !0)
            }
        },
        Qi = {
            "gsc.q": !0,
            "gsc.tab": !0,
            "gsc.page": !0,
            "gsc.ref": !0,
            "gsc.sort": !0
        },
        Ri = {
            "gsc.tab": !0,
            "gsc.page": !0
        },
        Mi = function() {
            return "onhashchange" in window && (!pd || 8 <= document.documentMode)
        };
    f = Pi.prototype;
    f.isEnabled = function() {
        return this.hi
    };
    f.pushState = function(a) {
        this.hi && !this.Ni && this.hp(a, !1)
    };
    f.hp = function(a, b) {
        var c = {};
        for (d in a) Qi[d] && (c[d] = a[d]);
        a = c;
        if (!Si(this.Nc, a)) {
            var d = this.Nc = a;
            a = [];
            for (var e in d) null != d[e] && Qi[e] && a.push(encodeURIComponent(e) + "=" + encodeURIComponent(d[e]));
            d = a.join("&");
            this.hj && (d = this.hj + "&" + d);
            this.vk ? (e = document.title || "", d = "#" + d, b ? window.history.replaceState(null, e, d) : window.history.pushState(null, e, d)) : this.wk && (d = this.Gq + "#" + d, b ? window.location.replace(d) : id(window.location, d))
        }
    };
    f.getState = function() {
        var a = {},
            b;
        for (b in this.Nc) a[b] = this.Nc[b];
        return a
    };
    f.ev = function() {
        var a = Ni(Oi());
        this.hj = a.zn;
        Si(this.Nc, a.state) || (this.Nc = a.state, this.Sl())
    };
    f.Sl = function() {
        this.Ni = !0;
        this.bv(this.getState());
        this.Ni = !1
    };
    var Oi = function() {
            var a = window.location.href,
                b = a.indexOf("#");
            return 0 > b ? "" : a.substring(b + 1)
        },
        Si = function(a, b) {
            for (var c in a)
                if (a[c] !== b[c]) return !1;
            for (c in b)
                if (!a.hasOwnProperty(c)) return !1;
            return !0
        },
        Ni = function(a) {
            var b = {};
            a = a.split("&");
            for (var c = [], d = 0; d < a.length; d++) {
                var e = a[d],
                    g = e.indexOf("="),
                    h = !1;
                if (-1 != g) {
                    var k = decodeURIComponent(e.substr(0, g));
                    Qi[k] && (g = decodeURIComponent(e.substr(g + 1)), Ri[k] ? (g = parseInt(g, 10), isNaN(g) || (b[k] = g)) : b[k] = g, h = !0)
                }
                h || c.push(e)
            }
            return {
                state: b,
                zn: c.join("&")
            }
        };
    var Ti = function(a) {
        if (!a) return a;
        var b = [
                ["url", "url"],
                ["clicktrackUrl", function(u) {
                    return ["url", "https://www.google.com" + u]
                }],
                ["title", "title"],
                ["visibleUrl", "visibleUrl"]
            ],
            c = [
                ["title", "content"]
            ],
            d = [
                ["url", "url"],
                ["width", "width"],
                ["height", "height"]
            ],
            e = [];
        a = ba(a);
        for (var g = a.next(); !g.done; g = a.next()) {
            var h = g.value;
            g = {};
            for (var k = ba(b), l = k.next(); !l.done; l = k.next()) {
                var n = ba(l.value);
                l = n.next().value;
                n = n.next().value;
                h[l] && ("function" === typeof n ? (n = ba(n(h[l])), l = n.next().value, n = n.next().value,
                    g[l] = n) : g[n] = h[l])
            }
            if (h.bodyLines && 0 < h.bodyLines.length)
                for (k = h.bodyLines[0], l = ba(c), n = l.next(); !n.done; n = l.next()) {
                    var v = ba(n.value);
                    n = v.next().value;
                    v = v.next().value;
                    k[n] && (g[v] = k[n])
                }
            if (h.image)
                for (h = h.image, k = {}, g.image = k, l = ba(d), n = l.next(); !n.done; n = l.next()) v = ba(n.value), n = v.next().value, v = v.next().value, h[n] && (k[v] = h[n]);
            e.push(g)
        }
        return e
    };
    for (var Ui = {
            BUBBLEGUM: "//www.google.com/cse/static/style/look/bubblegum.css",
            V2_BUBBLEGUM: "//www.google.com/cse/static/style/look/v2/bubblegum.css",
            GREENSKY: "//www.google.com/cse/static/style/look/greensky.css",
            V2_GREENSKY: "//www.google.com/cse/static/style/look/v2/greensky.css",
            ESPRESSO: "//www.google.com/cse/static/style/look/espresso.css",
            V2_ESPRESSO: "//www.google.com/cse/static/style/look/v2/espresso.css",
            SHINY: "//www.google.com/cse/static/style/look/shiny.css",
            V2_SHINY: "//www.google.com/cse/static/style/look/v2/shiny.css",
            MINIMALIST: "//www.google.com/cse/static/style/look/minimalist.css",
            V2_MINIMALIST: "//www.google.com/cse/static/style/look/v2/minimalist.css",
            V2_DEFAULT: "//www.google.com/cse/static/style/look/v2/default.css"
        }, Vi = ba(Object.entries(Ui)), Wi = Vi.next(); !Wi.done; Wi = Vi.next()) {
        var Xi = ba(Wi.value),
            Yi = Xi.next().value,
            Zi = Xi.next().value;
        Ca("google.loader.themes." + Yi, Zi, void 0)
    };
    var $i = /^[6-9]$/,
        aj = /<\/?(?:b|em)>/gi,
        bj = {
            Rp: 8,
            zk: 9,
            yk: 13,
            Yg: 27,
            kz: 32,
            Op: 37,
            Qp: 38,
            Pp: 39,
            Np: 40,
            Sp: 46,
            Xy: 190
        };
    var cj = function(a) {
            return {
                contains: function(b) {
                    return b in a
                },
                qA: function(b) {
                    return !!a[b]
                },
                et: function(b) {
                    return a[b] || 0
                },
                cb: function(b) {
                    return a[b] || ""
                },
                ft: function(b) {
                    return a[b] || null
                }
            }
        },
        dj = cj({});
    var ej = function(a, b, c, d, e, g) {
        function h(n) {
            if (e)
                for (var v = 0, u; u = n[v++];)
                    for (var F = 0; F < e.length; ++F)
                        if (u == e[F]) return !0;
            return !1
        }
        var k = !1,
            l = {
                xi: function() {
                    return a
                },
                Bb: function() {
                    return b
                },
                Sf: function() {
                    return c
                },
                v: function() {
                    return d
                },
                Hm: function() {
                    return g.cb("za")
                },
                DA: function() {
                    return g.cb("zb")
                },
                Ki: function() {
                    return e || []
                },
                LA: function(n) {
                    return !!e && h([n])
                },
                HA: h,
                getParameters: function() {
                    return g
                },
                um: function() {
                    return k
                }
            };
        switch (d) {
            case 0:
            case 32:
            case 38:
            case 400:
            case 407:
            case 35:
            case 33:
            case 41:
            case 34:
            case 44:
            case 45:
            case 40:
            case 46:
            case 56:
            case 30:
            case 411:
            case 410:
            case 71:
                k = !0
        }
        g || (g = dj);
        return l
    };
    var fj = /\s/g,
        gj = /\u3000/g,
        hj = /^\s/,
        ij = /\s+/,
        jj = /\s+/g,
        kj = /^\s+|\s+$/g,
        lj = /^\s+$/,
        mj = /<[^>]*>/g,
        nj = /&nbsp;/g,
        oj = /&#x3000;/g,
        pj = [/&/g, /&amp;/g, /</g, /&lt;/g, />/g, /&gt;/g, /"/g, /&quot;/g, /'/g, /&#39;/g, /{/g, /&#123;/g],
        qj = document.getElementsByTagName("head")[0],
        rj = 0,
        sj = 1,
        tj = function(a) {
            var b = {};
            if (a)
                for (var c = 0; c < a.length; ++c) b[a[c]] = !0;
            return b
        },
        uj = function() {
            return (new Date).getTime()
        },
        vj = function(a, b) {
            void 0 === b && (b = a);
            var c = function() {
                return b
            };
            return {
                Uf: c,
                Gm: function() {
                    return a
                },
                mt: c,
                KA: function() {
                    return a <
                        b
                },
                gs: function(d) {
                    return d && a == d.Gm() && b == d.mt()
                }
            }
        },
        wj = function(a, b, c, d) {
            if (null == b || "" === b) {
                if (!d) return;
                b = ""
            }
            c.push(a + "=" + encodeURIComponent(String(b)))
        },
        xj = function(a, b) {
            var c = [],
                d;
            for (d in a) wj(d, a[d], c, b);
            return c.join("&")
        },
        yj = function(a) {
            for (var b = pj.length, c = 0; c < b; c += 2) a = a.replace(pj[c], pj[c + 1].source);
            return a
        },
        zj = function(a) {
            for (var b = pj.length, c = 0; c < b; c += 2) a = a.replace(pj[c + 1], pj[c].source);
            a = a.replace(nj, " ");
            return a.replace(oj, "\u3000")
        },
        Aj = function(a, b) {
            return a && (-1 < a.indexOf(" ") ||
                ij.test(a)) ? (a = a.replace(jj, " "), a.replace(b ? kj : hj, "")) : a
        },
        Bj = function(a, b, c) {
            c && (a = a.toLowerCase(), b = b.toLowerCase());
            return b.length <= a.length && a.substring(0, b.length) == b
        },
        Cj = function() {},
        Dj = function(a, b) {
            return ej(a.xi(), a.Bb(), b, a.v(), a.Ki(), a.getParameters())
        },
        Ej = function(a, b) {
            if (b.indexOf) return b.indexOf(a);
            for (var c = 0, d = b.length; c < d; ++c)
                if (b[c] === a) return c;
            return -1
        },
        Fj = function(a, b) {
            return b.Ga() - a.Ga()
        },
        Gj = function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        };
    var Hj = Nc(),
        Ij = Hj && !(0 <= ec(Rc(), 9)),
        Jj = Hj && !(0 <= ec(Rc(), 8)),
        Kj = Hj && 0 <= ec(Rc(), 10),
        Lj = ld();
    Lj && Rc();
    var Mj = Lc("Opera"),
        Nj = kd(),
        Oj = Pc(),
        Pj = Oc(),
        Qj = Lc("Android"),
        Rj = Lc("Macintosh");
    var Sj = void 0 != document.documentElement.style.opacity,
        Tj = {
            rtl: "right",
            ltr: "left"
        },
        Uj = function(a, b) {
            try {
                if (a.setSelectionRange) a.setSelectionRange(b, b);
                else if (a.createTextRange) {
                    var c = a.createTextRange();
                    c.collapse(!0);
                    c.moveStart("character", b);
                    c.select()
                }
            } catch (d) {}
        },
        Vj = function(a, b) {
            for (var c = 0, d = 0; a && (!b || a != b);) {
                c += a.offsetTop;
                d += a.offsetLeft;
                try {
                    a = a.offsetParent
                } catch (e) {
                    a = null
                }
            }
            return {
                ie: c,
                Db: d
            }
        },
        Wj = function(a, b, c) {
            a = document.createElement(a);
            b && (a.className = b);
            c && (a.id = c);
            return a
        },
        Xj = function() {
            var a =
                Wj("table");
            a.cellPadding = a.cellSpacing = 0;
            a.style.width = "100%";
            return a
        },
        Yj = function(a) {
            return Wj("div", a)
        },
        Zj = function(a, b) {
            a.innerHTML != b && (b && (Jj ? b && (-1 < b.indexOf(" ") || ij.test(b)) && (b = b.replace(gj, "&#x3000;"), b = b.replace(fj, "&nbsp;")) : Ij && (b = '<pre style="font:inherit;margin:0">' + b + "</pre>")), a.innerHTML = b)
        },
        ak = function(a, b) {
            a.dir != b && (a.dir = b, a.style.textAlign = Tj[b])
        },
        ck = function(a, b, c) {
            if (bk(a, b)) return null;
            var d = Wj("input");
            d.type = "hidden";
            d.name = b;
            c && (d.value = c);
            a.appendChild(d);
            return d
        },
        bk = function(a, b) {
            if (a = a.getElementsByTagName("input"))
                for (var c = 0, d; d = a[c++];)
                    if (d.name == b && "submit" != d.type.toLowerCase()) return d;
            return null
        },
        dk = function(a) {
            a && (a.preventDefault && a.preventDefault(), a.returnValue = !1);
            return !1
        },
        ek = function(a) {
            if (a = a || window.event) a.stopPropagation && a.stopPropagation(), a.cancelBubble = a.cancel = !0;
            return dk(a)
        },
        fk = function(a) {
            a = a.insertCell(-1);
            var b = Wj("a");
            b.href = "#ifl";
            b.className = "gssb_j gss_ifl";
            a.appendChild(b);
            return b
        },
        gk = function(a) {
            var b = a || window;
            a = b.document;
            var c = b.innerWidth;
            b = b.innerHeight;
            if (!c) {
                var d = a.documentElement;
                d && (c = d.clientWidth, b = d.clientHeight);
                c || (c = a.body.clientWidth, b = a.body.clientHeight)
            }
            return {
                Kp: c,
                Tm: b
            }
        },
        hk = function(a) {
            var b = {};
            if (a)
                for (var c = 0, d; d = a[c++];) b[d.Ii()] = d;
            return b
        },
        ik = function(a) {
            return a ? a.ownerDocument || a.document : window.document
        },
        jk = function(a) {
            return a ? (a = ik(a), a.defaultView || a.parentWindow) : window
        },
        kk = function() {
            return Sj ? "opacity" : "filter"
        },
        lk = function(a) {
            return Sj ? a + "" : (Jj ? "progid:DXImageTransform.Microsoft.Alpha(" :
                "alpha(") + "opacity=" + Math.floor(100 * a) + ")"
        };
    var mk = function() {
            var a = function() {
                    return 5
                },
                b = function(c, d, e) {
                    e.push({
                        v: function() {
                            return 505
                        },
                        position: 1
                    })
                };
            return {
                v: function() {
                    return 153
                },
                sa: function() {
                    return {
                        Ga: a,
                        at: b
                    }
                }
            }
        },
        ok = function(a, b, c) {
            var d, e = function() {
                    return nk(a, b, c, d)
                },
                g = function(k, l) {
                    l.aa(k)
                },
                h = function() {
                    return 505
                };
            return {
                va: function(k) {
                    d = k.ud()
                },
                v: function() {
                    return 152
                },
                sa: function() {
                    return {
                        zh: e,
                        aa: g,
                        zd: Cj,
                        Mi: Cj,
                        Ii: h
                    }
                }
            }
        },
        nk = function(a, b, c, d) {
            var e, g = {
                v: function() {
                    return 505
                },
                na: function() {
                    return e
                },
                aa: Cj
            };
            (function() {
                e = Yj();
                e.style.textAlign =
                    "ltr" == d ? "right" : "left";
                var h = Wj("img");
                hd(h, a);
                h.srcset = b + " 2x";
                h.style.verticalAlign = "middle";
                "ltr" == d ? h.style.paddingRight = "1px" : h.style.paddingLeft = "1px";
                e.appendChild(h);
                h = Wj("span");
                h.style.color = "#b5b5b5";
                h.style.fontSize = "12px";
                h.style.verticalAlign = "middle";
                h.innerHTML = "";
                h.appendChild(document.createTextNode(c));
                e.appendChild(h)
            })();
            return g
        };
    var pk = function(a) {
        var b, c = function(e) {
                var g = 1;
                if (b) {
                    var h = e.$f();
                    "focus" == h || "blur" == h || "mousedown" == h ? g = 3 : (e.yg("partnerid", a), e.Xj("types", "t"))
                }
                return g
            },
            d = function() {
                return 10
            };
        return {
            K: function() {
                b = !0
            },
            v: function() {
                return 156
            },
            sa: function() {
                return {
                    Vf: c,
                    Ga: d
                }
            }
        }
    };
    var qk = function(a) {
        return {
            hm: function() {
                return a.hm()
            },
            bb: function() {
                return a.bb()
            },
            kc: function() {
                return a.kc()
            }
        }
    };
    var rk = function(a, b, c, d, e, g) {
        function h() {
            return !!b && !!b[0]
        }
        var k, l = !0,
            n, v = {
                Ae: function() {
                    return a
                },
                bb: function() {
                    return a.bb()
                },
                wi: function() {
                    return h() ? b[0] : null
                },
                kc: function() {
                    return b
                },
                Gc: h,
                getParameters: function() {
                    return c
                },
                mn: function() {
                    return d
                },
                wu: function() {
                    return e
                },
                UA: function() {
                    return g
                },
                v: function() {
                    return l
                },
                Ss: function() {
                    n || (n = qk(v));
                    return n
                },
                hm: function() {
                    return k
                }
            };
        b ? b.length && 33 == b[0].v() && (e = l = !1) : b = [];
        c ? k = c.ft("t") : c = dj;
        return v
    };
    var sk = function(a, b) {
        var c = function() {
                return 2
            },
            d = function(e) {
                for (var g = [], h = [], k = e.kc(), l = !1, n = 0, v; v = k[n++];) 34 == v.v() ? h.length < b && (h.push(v), v.getParameters().cb("c") && (l = !0)) : g.length < a && g.push(Dj(v, g.length));
                for (k = 0; n = h[k++];) {
                    v = n.getParameters();
                    var u = {};
                    u.a = v.cb("a");
                    u.b = v.cb("b");
                    u.c = v.cb("c");
                    u.d = v.cb("d");
                    u.e = l;
                    g.push(ej("", "", g.length, n.v(), n.Ki(), cj(u)))
                }
                return rk(e.Ae(), g, e.getParameters(), e.mn(), e.wu(), !0)
            };
        return {
            v: function() {
                return 122
            },
            sa: function() {
                return {
                    Ga: c,
                    Sr: d
                }
            }
        }
    };
    var tk = function() {
            this.ed = {}
        },
        uk = tj([155, 149, 153, 154, 311, 152, 156, 122, 151, 158, 294, 160]);
    tk.prototype.set = function(a, b) {
        this.ed[a] = b
    };
    tk.prototype.Ma = function(a, b) {
        a in this.ed || (this.ed[a] = []);
        this.ed[a].push(b)
    };
    var vk = function(a, b, c, d, e, g) {
            this.L = a;
            this.Tr = b;
            this.Ea = c;
            this.Dh = d;
            this.wg = e;
            this.C = g;
            this.Hb = {};
            this.vh = {};
            this.Sh = new tk;
            this.Ek = [];
            this.Wb = [];
            this.Cb = !1;
            this.mc()
        },
        wk = [127, 149, 134, 494, 123, 121, 126, 553, 118, 115, 128, 160, 173, 119, 116, 152, 153, 129, 120, 374, 124, 158, 155, 131, 130, 147, 570, 141, 142, 137, 143, 138, 144, 139, 140, 135, 136];
    f = vk.prototype;
    f.K = function(a) {
        this.Da();
        for (var b = 0, c; c = this.Wb[b++];) c.K && c.K(a);
        this.Cb = !0
    };
    f.Da = function() {
        if (this.Cb) {
            for (var a = 0, b; b = this.Wb[a++];) b.Da && b.Da();
            this.Cb = !1
        }
    };
    f.cj = function() {
        return this.Cb
    };
    f.get = function(a, b) {
        if (a = this.Hb[a]) return this.cm(a, this.dm(b))
    };
    f.Wa = function(a, b) {
        if (a = this.vh[a]) {
            var c = [];
            b = this.dm(b);
            for (var d = 0, e; e = a[d++];) c.push(this.cm(e, b));
            return c
        }
        return []
    };
    f.ao = function(a) {
        a = a.ed;
        for (var b in a) {
            var c = b,
                d = a[c];
            uk[c] ? this.zw(c, d) : this.yw(c, d)
        }
    };
    f.yw = function(a, b) {
        (b = this.xm(a, b)) && (this.Hb[a] = b)
    };
    f.zw = function(a, b) {
        for (var c = this.vh[a] || [], d = 0, e; d < b.length; ++d)(e = this.xm(a, b[d])) && c.push(e);
        this.vh[a] = c
    };
    f.xm = function(a, b) {
        if (!(b instanceof Object)) return null;
        if (b.qd) {
            var c = b.qd();
            c && this.vw(c)
        }
        b.v();
        this.tw(b, a);
        this.Wb.push(b);
        return b
    };
    f.cm = function(a, b) {
        return a.sa ? a.sa(b) : {}
    };
    f.tw = function(a, b) {
        this.Ek.push([a, b])
    };
    f.dm = function(a) {
        for (var b = 0, c = 0, d; d = this.Ek[c++];) d[0] == a && (b = d[1]);
        return b
    };
    f.vw = function(a) {
        for (var b = 0, c; c = a[b++];) {
            var d = c.v();
            uk[d] ? this.Sh.Ma(d, c) : this.Sh.set(d, c)
        }
    };
    var xk = function(a, b) {
        a = Ej(a.v(), wk);
        b = Ej(b.v(), wk);
        return 0 > a ? 1 : 0 > b ? -1 : a - b
    };
    vk.prototype.mc = function() {
        this.ao(this.Tr);
        this.ao(this.Sh);
        this.Wb.sort(xk);
        for (var a = 0, b; b = this.Wb[a++];) b.va && b.va(this.Ea, this.Dh);
        this.L.pj(this.Dh, this.Ea.nf());
        this.Dh.zq();
        for (a = 0; b = this.Wb[a++];) b.O && b.O(this);
        for (a = 0; b = this.Wb[a++];) b.za && b.za(this.C);
        for (a = 0; b = this.Wb[a++];) b.K && b.K(this.C);
        this.Cb = !0
    };
    var yk = function(a) {
        var b;
        (function() {
            var c = function() {};
            a || (a = {});
            var d = function(e) {
                return a[e] || c
            };
            b = {
                search: d("b"),
                ng: d("c"),
                redirect: d("d"),
                Xf: d("e"),
                If: d("f"),
                $h: d("g"),
                ai: d("h"),
                Wh: d("i"),
                bi: d("j"),
                Hf: d("k"),
                Xh: d("l"),
                Cp: d("n"),
                ci: d("o"),
                di: d("p"),
                Ef: d("q"),
                pj: d("r"),
                Fl: d("s"),
                Gl: d("t"),
                Zh: d("u"),
                ei: d("w"),
                Th: d("x"),
                Yh: d("y"),
                Vh: d("z"),
                Uh: d("aa"),
                fi: d("ab"),
                ck: d("ac")
            }
        })();
        return {
            search: function(c, d) {
                b.search(c, d)
            },
            ng: function(c) {
                b.ng(c)
            },
            redirect: function(c) {
                b.redirect(c)
            },
            Xf: function(c) {
                return b.Xf(c)
            },
            If: function(c) {
                b.If(c)
            },
            $h: function(c) {
                b.$h(c)
            },
            ai: function(c) {
                b.ai(c)
            },
            Wh: function(c) {
                b.Wh(c)
            },
            bi: function(c, d) {
                b.bi(c, d)
            },
            Hf: function(c, d) {
                b.Hf(c, d)
            },
            Xh: function() {
                b.Xh()
            },
            Cp: function(c) {
                b.Cp(c)
            },
            ci: function() {
                b.ci()
            },
            di: function() {
                b.di()
            },
            Ef: function(c) {
                b.Ef(c)
            },
            pj: function(c, d) {
                b.pj(c, d)
            },
            Fl: function(c) {
                b.Fl(c)
            },
            Gl: function() {
                b.Gl()
            },
            Zh: function() {
                b.Zh()
            },
            Yh: function() {
                b.Yh()
            },
            ei: function(c) {
                b.ei(c)
            },
            Th: function() {
                b.Th()
            },
            Vh: function() {
                b.Vh()
            },
            Uh: function() {
                b.Uh()
            },
            fi: function() {
                b.fi()
            },
            ck: function(c,
                d) {
                return b.ck(c, d)
            }
        }
    };
    var zk = function(a, b, c, d, e) {
        var g = Lj ? "-moz-" : Hj ? "-ms-" : Mj ? "-o-" : Nj ? "-webkit-" : "",
            h = ".gstl_" + d,
            k = new RegExp("(\\.(" + e.join("|") + ")\\b)"),
            l = [];
        return {
            addRule: function(n, v) {
                if (b) {
                    if (c) {
                        n = n.split(",");
                        for (var u = [], F = 0, w; w = n[F++];) w = k.test(w) ? w.replace(k, h + "$1") : h + " " + w, u.push(w);
                        n = u.join(",")
                    }
                    l.push(n, "{", v, "}")
                }
            },
            zq: function() {
                if (b && l.length) {
                    b = !1;
                    var n = Wj("style");
                    n.setAttribute("type", "text/css");
                    (a || qj).appendChild(n);
                    var v = l.join("");
                    l = null;
                    n.styleSheet ? n.styleSheet.cssText = v : (v = document.createTextNode(v),
                        n.appendChild(v))
                }
            },
            prefix: function(n, v) {
                var u = n + (v || "");
                g && (u += v ? n + g + v : g + n);
                return u
            }
        }
    };
    var Ak = function(a, b, c, d, e) {
        function g() {
            B.Da()
        }

        function h(m) {
            R.Qb(m || "")
        }

        function k() {
            return R.ta()
        }

        function l() {
            return wa.Be()
        }

        function n() {
            H.xa(8)
        }

        function v(m) {
            return Z.getParameters(m)
        }

        function u() {
            return z || !!y && y.xc()
        }

        function F() {
            return ha.xn
        }

        function w(m) {
            m = jk(m.op || qj);
            void 0 == m.nextSearchboxId && (m.nextSearchboxId = 50);
            return m.nextSearchboxId++
        }

        function Q() {
            if (a)
                for (var m = a; m = m.parentNode;) {
                    var p = m.dir;
                    if (p) return p
                }
            return "ltr"
        }

        function V(m) {
            m = Gj(m);
            m.mk[35] || (m.Ux = "");
            var p = m.On;
            p ? m.On =
                p.toLowerCase() : m.Zt = !1;
            m.pi && !m.oi && (m.pi = !1);
            Pj || (m.ej = !1);
            return m
        }

        function N() {
            var m = jk(a),
                p = gk(m);
            H.Ob(m, "resize", function() {
                var Y = gk(m);
                if (Y.Kp != p.Kp || Y.Tm != p.Tm) p = Y, n()
            })
        }

        function fa(m) {
            var p = m.Kf,
                Y = p[135],
                G = p[138],
                K = p[139];
            p[136] || K || Y || G ? (m.Kf[136] = !0, m.Kf[141] = !0, ka = G ? 3 : 1) : ka = 0
        }
        var B, y, I, H, O, R, J, ha, Z, oa, Ga, Ha, Sa, wa, Ia, ma, sa, ka, q = !1,
            z, x = {
                install: function(m) {
                    if (!q) {
                        m = V(m);
                        sa = null == e ? w(m) : e;
                        var p = ik(a),
                            Y = Q(),
                            G = !!p.getElementById("gs_id" + sa),
                            K = ["gssb_c", "gssb_k"];
                        m.rk && K.push(m.rk);
                        K = zk(m.op,
                            m.bu, m.Yr, sa, K);
                        fa(m);
                        z = m.xc;
                        B = new vk(P, d, {
                            nf: function() {
                                return G
                            },
                            get: function(da) {
                                return p.getElementById(da + sa)
                            },
                            ui: function(da) {
                                return p.getElementById(da)
                            },
                            pm: function() {
                                return b
                            },
                            ud: function() {
                                return Y
                            },
                            Fa: function(da) {
                                return da + sa
                            },
                            yi: function() {
                                return a
                            }
                        }, K, x, m);
                        B.get(347, x);
                        y = B.get(130, x);
                        I = B.get(115, x);
                        H = B.get(117, x);
                        O = B.get(123, x);
                        R = B.get(118, x);
                        J = B.get(119, x);
                        ha = B.get(374, x);
                        Z = B.get(120, x);
                        oa = B.get(189, x);
                        Ga = B.get(553, x);
                        B.get(124, x);
                        Ha = B.get(419, x);
                        Sa = B.get(126, x);
                        wa = B.get(128, x);
                        Ia =
                            B.get(139, x);
                        ma = B.get(121, x);
                        N();
                        q = !0
                    }
                },
                K: function(m) {
                    g();
                    m = V(m);
                    fa(m);
                    z = m.xc;
                    B.K(m)
                },
                Da: g,
                uA: function() {
                    return b
                },
                jq: function(m, p) {
                    return ck(m, p)
                },
                Ab: function() {
                    return R.Ab()
                },
                ta: k,
                Gc: function() {
                    return wa.Gc()
                },
                Ce: function() {
                    return wa.Ce()
                },
                Ci: v,
                ht: function(m, p) {
                    m || (m = Z.getParameters(p));
                    return xj(m)
                },
                YA: function() {
                    return wa.isVisible()
                },
                rq: function(m, p) {
                    H.Ob(m, "click", function(Y) {
                        ma.search(k(), p);
                        return dk(Y)
                    })
                },
                ph: function() {
                    O.ph()
                },
                iA: function() {
                    wa.Kh()
                },
                hk: function(m) {
                    R.hk(m || "")
                },
                tA: function() {
                    return I.Lb()
                },
                $z: function() {
                    R.clear()
                },
                Ko: function() {
                    R.Ko()
                },
                focus: function() {
                    J.focus()
                },
                blur: function() {
                    J.blur()
                },
                on: function() {
                    return O.on()
                },
                td: function() {
                    var m = Sa.td();
                    return m ? m.Ss() : null
                },
                Qb: h,
                Wc: function() {
                    Z.reset()
                },
                search: function(m, p) {
                    ma.search(m, p)
                },
                FB: function() {
                    Ia && Ia.refresh()
                },
                QB: function(m) {
                    wa.Sw(m)
                },
                Ff: function() {
                    wa.Ff()
                },
                Be: l,
                kC: n,
                Ck: function() {
                    R.Ck()
                },
                cj: function() {
                    return !!B && B.cj()
                },
                EB: function() {},
                xc: u,
                Ls: function() {
                    return u() && y ? y.Ls() : ""
                },
                xA: function(m, p) {
                    return bk(m, p)
                },
                vm: function() {
                    return ka
                },
                Fa: function() {
                    return sa
                },
                aA: function() {
                    Ia && Ia.clear()
                },
                bk: function(m, p) {
                    h(m);
                    wa.isEnabled() && wa.bk(m, p, !1)
                },
                NB: function(m) {
                    H.xa(15, {
                        query: m
                    })
                },
                dj: function() {
                    return J.dj()
                },
                ap: function(m) {
                    Ga.ap(m)
                },
                Dg: function(m) {
                    I.Dg(m)
                },
                Hm: function() {
                    var m, p = Sa.td();
                    if (p) {
                        var Y = p.wi();
                        Y && ((m = Y.Hm()) || (m = p.getParameters().cb("o")))
                    }
                    return m || ""
                },
                JB: function(m, p) {
                    return oa ? (oa.KB(m, p), !0) : !1
                },
                AA: function(m, p) {
                    switch (m) {
                        case "oq":
                        case "gs_l":
                            return v(p)[m] || null;
                        case "gs_ssp":
                            a: {
                                if ((m = l()) && 46 == m.v() && (m = m.getParameters().cb("g"))) break a;
                                m = null
                            }
                            return m;
                        default:
                            return null
                    }
                },
                PB: function() {},
                yA: F,
                xf: function(m) {
                    return 6 == F() && !!Ha && Ha.xf(m)
                }
            };
        var P = yk(c);
        return x
    };
    var Bk = function() {
        var a = function(b) {
            var c = {
                    Oz: b
                },
                d;
            for (d in b) c[d] = b[d];
            return c
        };
        return {
            zi: function(b, c, d, e, g) {
                try {
                    var h = Ak(b, c, d, e, g);
                    return a(h)
                } catch (k) {
                    return null
                }
            },
            translate: function(b) {
                return a(b.api || b)
            }
        }
    };
    var Ck = function() {
        var a, b, c, d, e, g, h = function(n) {
                if ("keyup" == n.$f()) {
                    var v = uj();
                    if (g) {
                        var u = v - g;
                        a += u;
                        b += u * u
                    }
                    n = n.bb().length;
                    n < e && ++c;
                    ++d;
                    e = n;
                    g = v
                }
            },
            k = function() {
                return [a, b, d, c]
            },
            l = function() {
                g = e = d = c = b = a = 0
            };
        return {
            v: function() {
                return 582
            },
            sa: function() {
                return {
                    xv: h,
                    Ci: k,
                    Wc: l
                }
            }
        }
    };
    var Dk = function() {
        var a = /j0/g,
            b = /j+$/,
            c, d = function() {
                return 23
            },
            e = function() {
                return c.Ci().join("j").replace(a, "j").replace(b, "")
            },
            g = function() {
                c.Wc()
            },
            h = {
                O: function(k) {
                    c = k.get(582, h)
                },
                v: function() {
                    return 311
                },
                sa: function() {
                    return {
                        Sf: d,
                        wd: e,
                        reset: g
                    }
                }
            };
        return h
    };
    var Ek = function() {
        var a, b = function(e) {
                a.xv(e);
                return 1
            },
            c = function() {
                return 17
            },
            d = {
                O: function(e) {
                    a = e.get(582, d)
                },
                v: function() {
                    return 156
                },
                sa: function() {
                    return {
                        Vf: b,
                        Ga: c
                    }
                }
            };
        return d
    };
    var Fk = function() {};
    f = Fk.prototype;
    f.va = function() {};
    f.O = function() {};
    f.za = function() {};
    f.K = function() {};
    f.sa = function() {
        return this
    };
    f.qd = function() {
        return null
    };
    f.Da = function() {};
    var Gk = sj++,
        Hk = function(a) {
            var b = this;
            this.Nk = a;
            this.ca = Yj();
            this.tg = function() {
                b.F.Fu() || b.F.ta() ? b.Si() : b.Nk && b.qx()
            };
            this.qx = function() {
                b.fa || (b.F.Eg(b.Nk), b.fa = !0)
            };
            this.Si = function() {
                if (b.fa || void 0 == b.fa) b.F.Eg("#fff"), b.fa = !1
            }
        };
    E(Hk, Fk);
    f = Hk.prototype;
    f.va = function(a) {
        this.Nb = a.yi()
    };
    f.O = function(a) {
        a && (this.G = a.get(117, this), this.F = a.get(118, this))
    };
    f.za = function() {
        this.G.Ka(this.Nb, "focus", this.Si);
        this.G.Ka(this.Nb, "blur", this.tg);
        this.G.qb(4, this.tg);
        this.G.qb(5, this.tg)
    };
    f.K = function() {
        this.tg()
    };
    f.v = function() {
        return 160
    };
    f.Da = function() {
        this.Si()
    };
    f.isEnabled = function() {
        return this.nc
    };
    f.Zf = function() {
        return Gk
    };
    f.Ga = function() {
        return 5
    };
    f.na = function() {
        return this.ca
    };
    f.Hi = function() {
        return {
            nn: !this.fa
        }
    };
    var Ik = function() {
        function a(y, I, H, O) {
            var R = y.Fa(),
                J = y.bb();
            V.Hl || e();
            I = v + u + F + "?" + (w ? w + "&" : "") + (I ? I + "&" : "");
            y = [];
            wj("q", J, y, !0);
            V.Gp || wj("callback", "google.sbox.p" + n, y);
            if (Q) {
                J = "";
                for (var ha = 4 + Math.floor(32 * Math.random()), Z = 0, oa; Z < ha; ++Z) oa = .3 > Math.random() ? 48 + Math.floor(10 * Math.random()) : (.5 < Math.random() ? 65 : 97) + Math.floor(26 * Math.random()), J += String.fromCharCode(oa);
                wj("gs_gbg", J, y)
            }
            J = Wj("script");
            J.src = I + y.join("&");
            J.charset = "utf-8";
            N[R] = J;
            fa = V.Hl ? O : H;
            k.appendChild(J);
            return !0
        }

        function b() {
            return 0
        }

        function c() {
            return 0
        }

        function d(y) {
            var I = N[y];
            I && (k.removeChild(I), delete N[y])
        }

        function e() {
            for (var y in N) k.removeChild(N[y]);
            N = {};
            fa = null
        }

        function g(y) {
            fa && fa(y)
        }

        function h(y) {
            y || (y = Cj);
            var I = window.google;
            V.Gp ? I.ac.h = y : I.sbox["p" + n] = y
        }
        var k = qj,
            l, n, v, u, F, w, Q, V, N = {},
            fa, B = {
                O: function(y) {
                    l = y.get(127, B);
                    n = y.wg.Fa()
                },
                za: function() {
                    "google" in window || (window.google = {});
                    "sbox" in window.google || (window.google.sbox = {})
                },
                K: function(y) {
                    V = y;
                    0 == y.wh && (y = l.gr, v = y.protocol, u = y.host, F = y.Ij, w = y.xx, Q = "https:" ==
                        document.location.protocol, h(g), (new Image).src = v + u + "/generate_204")
                },
                v: function() {
                    return 149
                },
                sa: function() {
                    return {
                        qw: a,
                        Pr: d,
                        ph: Cj,
                        im: b,
                        nm: c
                    }
                },
                Da: function() {
                    h(null);
                    e()
                }
            };
        return B
    };
    var Jk = function() {
        this.Qh = {}
    };
    E(Jk, Fk);
    var Kk = {
        Tt: !1,
        Ti: "left",
        kn: !0,
        jd: null,
        marginWidth: 0
    };
    f = Jk.prototype;
    f.O = function(a) {
        this.Z = a.get(116, this);
        if (a = a.Wa(154, this))
            for (var b = 0, c; c = a[b++];) this.Qh[c.ze()] = c
    };
    f.K = function() {
        this.fa = !1
    };
    f.Da = function() {
        this.Hc()
    };
    f.v = function() {
        return 115
    };
    f.isVisible = function() {
        return this.fa
    };
    f.Wj = function(a) {
        if (a in this.Qh) {
            if (this.ad) {
                if (a == this.ad.ze()) return;
                this.Hc();
                this.ad.bg()
            }
            this.ad = this.Qh[a];
            this.Z.Wj(this.ad)
        }
    };
    f.Lb = function() {
        return this.fa ? this.Z.Lb() : 0
    };
    f.show = function() {
        this.fa || (this.Z.show(this.gt()), this.fa = !0)
    };
    f.Hc = function() {
        this.fa && (this.Z.Hc(), this.fa = !1)
    };
    f.Dg = function(a) {
        this.Z.Dg(a)
    };
    f.gt = function() {
        var a = Gj(Kk);
        this.ad && this.ad.mf(a);
        return a
    };
    var Lk = function() {};
    E(Lk, Fk);
    f = Lk.prototype;
    f.O = function(a) {
        this.Z = a.get(119, this);
        this.yb = a.get(130, this);
        this.Gr = a.get(145, this);
        this.G = a.get(117, this);
        this.ma = a.get(123, this);
        this.eb = a.get(374, this);
        this.Un = a.get(121, this);
        this.Uv = a.get(553, this);
        this.N = a.get(128, this);
        this.$e = a.get(139, this);
        this.Ix = a.get(173, this);
        this.ge = a.Wa(160, this);
        this.L = a.L;
        this.pu = a.wg.vm()
    };
    f.za = function(a) {
        this.C = a;
        this.ja = this.vc = this.Z.Ts() || ""
    };
    f.K = function(a) {
        this.C = a;
        this.pn = this.hn = !1;
        this.Zd()
    };
    f.v = function() {
        return 118
    };
    f.Mm = function() {
        var a = {};
        this.G.xa(13, a);
        !a.cancel && this.C.Vm && this.G.defer(this.N.Kh);
        this.L.Yh()
    };
    f.Gt = function() {
        this.G.xa(12);
        this.L.Zh()
    };
    f.Jt = function() {
        this.Nm("rtl")
    };
    f.Kt = function() {
        this.Nm("ltr")
    };
    f.Ot = function() {
        this.N.gw()
    };
    f.Ct = function(a) {
        this.N.Gc() ? this.N.fw() : this.N.Ff(a)
    };
    f.Ad = function() {
        if (0 == this.C.nk) return !1;
        if (4 == this.C.nk) return this.L.fi(), !1;
        var a = this.bm();
        if (a) switch (this.C.nk) {
            case 1:
                if (this.Dk(a, !0)) return this.eb.add(8), !0;
                break;
            case 3:
                return this.N.Ad(a)
        }
        return !1
    };
    f.Et = function() {
        this.C.iw ? this.search(5) : (this.N.isVisible() ? this.N.Kh() : this.qf(), this.Co())
    };
    f.Bt = function(a) {
        this.ja && a.Gm() == this.ja.length && (this.$e && this.$e.clear(), this.C.hw && this.search(2), this.L.Wh(this.ja))
    };
    f.yt = function(a) {
        this.yb && 0 == a.Uf() && this.yb.mw()
    };
    f.Om = function(a, b, c, d) {
        this.C.Kr && !this.N.isVisible() && "mousedown" == c && this.N.Ff(b);
        var e = !1,
            g = !1;
        if (a != this.ja || "onremovechip" == c) Bj(c, "key") ? this.eb.add(1) : "paste" == c && this.eb.add(2), e = !0, this.Dt(a, c), a && !lj.test(a) && (d = !0), g = !0;
        a = this.Uv.ql(a, b, c);
        switch (a.Qs()) {
            case 2:
                d = !0;
                break;
            case 3:
                d = !1
        }
        d ? (e && this.N.ux(), this.js(a)) : g && this.Wq();
        this.G.xa(2, {
            cf: c
        })
    };
    f.Rw = function(a) {
        (this.hn = a) && this.eb.add(4)
    };
    f.Xo = function(a) {
        this.pn != a && ((this.pn = a) ? this.L.Vh() : this.L.Uh())
    };
    f.Bg = function(a) {
        this.Tn(a)
    };
    f.ps = function() {
        this.Z.focus()
    };
    f.qf = function() {
        this.Z.blur()
    };
    f.Fu = function() {
        return this.Z.dj()
    };
    f.hk = function(a, b, c) {
        Bj(a, this.ja, !0) && (a = this.ja + a.substr(this.ja.length));
        this.Om(a, c || vj(a.length), "", b);
        this.Tn(a, !0)
    };
    f.Qb = function(a) {
        this.Hg(a);
        this.Z.refresh();
        this.G.xa(4, {
            jd: this.Ra,
            input: a
        })
    };
    f.Ko = function() {
        this.Z.select()
    };
    f.Co = function() {
        this.ja != this.vc && this.Hg(this.vc);
        this.G.xa(5, {
            input: this.vc,
            Bx: this.N.kc(),
            jd: this.Ra
        });
        this.Z.refresh();
        this.L.ai(this.vc)
    };
    f.Yk = function() {
        this.vc = this.ja
    };
    f.fm = function() {
        return this.Z.fm()
    };
    f.Ab = function() {
        return this.vc
    };
    f.ta = function() {
        return this.ja
    };
    f.vi = function() {
        return this.Ra
    };
    f.rd = function() {
        return this.Z.rd()
    };
    f.Ei = function() {
        return this.Z.Ei()
    };
    f.Lb = function() {
        return this.Z.Lb()
    };
    f.yd = function() {
        return this.Z.yd()
    };
    f.wm = function() {
        return this.Z.wm()
    };
    f.Xt = function() {
        return 0 != this.pu
    };
    f.Qi = function() {
        if (this.Ix) {
            if (this.C.Pi) return !0;
            for (var a = 0, b; b = this.ge[a++];)
                if (b.isEnabled()) return !0
        }
        return !1
    };
    f.xj = function() {
        this.Z.xj()
    };
    f.search = function(a) {
        this.Un.search(this.ja, a)
    };
    f.clear = function(a) {
        this.ja && (this.Hg(""), this.Z.clear(), this.G.xa(1), this.N.clear(), this.L.If(this.ja));
        a && this.L.Th()
    };
    f.Wc = function() {
        this.Tu = this.un = this.si = 0
    };
    f.Eg = function(a) {
        this.Z.Eg(a)
    };
    f.Ck = function() {
        var a = this.bm();
        a && this.Dk(a)
    };
    f.Dt = function(a, b) {
        this.Hg(a);
        this.G.xa(1, {
            cf: b,
            jd: this.Ra
        });
        this.L.If(a);
        a = uj();
        this.si || (this.si = a);
        this.un = a
    };
    f.Nm = function(a) {
        var b = this.rd().Uf();
        this.Ra == a ? this.N.Gc() && b == this.ja.length && (this.N.Ce() ? this.C.pi && (a = this.N.Be(), this.Un.search(a.Bb(), 6)) : this.C.$u && this.Ad()) : this.yb && 0 == b && this.yb.mw()
    };
    f.bm = function() {
        if (this.N.Gc()) {
            var a = this.N.Ce() ? this.N.Be() : this.N.wi();
            if (a.um()) return a
        }
        return null
    };
    f.Dk = function(a, b) {
        a = a.Bb();
        var c = this.vc;
        return (c || a ? c && a && c.toLowerCase() == a.toLowerCase() : 1) ? !1 : (this.Yk(), b ? this.hk(a, !0) : this.Qb(a), !0)
    };
    f.Tn = function(a, b) {
        this.ja = a || "";
        this.Zd();
        this.Z.refresh();
        b || (this.G.xa(4, {
            jd: this.Ra,
            input: this.ja
        }), this.L.$h(this.ja))
    };
    f.Zd = function() {
        var a = this.Gr.vi(this.ja);
        a != this.Ra && (this.Z.Tj(a), this.Ra = a)
    };
    f.js = function(a) {
        this.hn && a.Xj("gs_is", 1);
        this.ma.Nl(a)
    };
    f.Wq = function() {
        this.N.clear();
        this.ma.fg()
    };
    f.Hg = function(a) {
        this.ja = this.vc = a || "";
        this.Zd()
    };
    var Nk = function() {
            function a(A) {
                A.jd = eb;
                A.marginWidth = vb;
                var S = wb.sp;
                S || (S = "rtl" == eb ? "right" : "left");
                A.Ti = S
            }

            function b(A, S, Ja) {
                var pa = !1;
                A = da && da.RA(S);
                H();
                (ta = S) && S.length && (pa = S[0].Bb(), x.Yt(pa) && (pa = p.Ab()), eb = x.vi(pa), Ja ? (xb = !0, pa = z.Pv(S, eb), S = S[0].getParameters().cb("a"), S = zj(S), vb = Y.yd(S)) : (xb = !1, pa = z.aa(Ia(), eb), vb = 0), A && (Ea = da.CA(), c(da.vA())), pa ? y() : H());
                return pa
            }

            function c(A) {
                q();
                if (U != A) {
                    var S = U;
                    U = A;
                    ka(S)
                }
            }

            function d() {
                if (N())
                    if (qa) {
                        var A = U;
                        U == ta.length - 1 ? Ea = U = null : null == U ? U = 0 : ++U;
                        Ea =
                            U;
                        sa(A, d)
                    } else y()
            }

            function e() {
                if (N())
                    if (qa) {
                        var A = U;
                        ta && 0 != U ? null == U ? U = ta.length - 1 : --U : Ea = U = null;
                        Ea = U;
                        sa(A, e)
                    } else y()
            }

            function g(A) {
                A = A ? 4 : 3;
                if (fa()) {
                    var S = Q();
                    z.ag(S) || p.search(A);
                    kb.Hf(p.Ab(), S)
                } else p.search(A)
            }

            function h(A) {
                return z.Ad(A)
            }

            function k(A) {
                Ea = U = A;
                kb.Hf(p.Ab(), ta[A])
            }

            function l() {
                return qa
            }

            function n() {
                return Ya
            }

            function v(A) {
                Ya && !A && H();
                Ya = A
            }

            function u() {
                return ta
            }

            function F() {
                return N() ? ta[0] : null
            }

            function w() {
                return U
            }

            function Q() {
                return null != Ea ? ta[Ea] : null
            }

            function V() {
                return Ea
            }

            function N() {
                return !(!ta || !ta.length)
            }

            function fa() {
                return null != Ea
            }

            function B() {
                qa && !ya && (ya = window.setTimeout(H, wb.eu))
            }

            function y() {
                qa || (P.Wj(Mk), P.show(), qa = !0, kb.ci())
            }

            function I() {
                qa && (ya && (window.clearTimeout(ya), ya = null), P.Hc(), qa = !1, kb.di())
            }

            function H() {
                I();
                ta = null;
                xb = !1;
                null != U && z.Og(U);
                Ea = U = null;
                z.clear()
            }

            function O() {
                m.fg();
                I()
            }

            function R() {
                null != U && z.Og(U);
                Ea = U = null
            }

            function J() {
                q();
                Ta = window.setTimeout(R, 0)
            }

            function ha() {
                q()
            }

            function Z(A) {
                if (N()) y();
                else {
                    var S = p.Ab();
                    S && (A = A || p.rd(),
                        S = K.ql(S, A), m.Nl(S))
                }
            }

            function oa() {
                return z.na()
            }

            function Ga() {
                return z.vd()
            }

            function Ha() {
                qa = !1
            }

            function Sa() {
                z.sc()
            }

            function wa() {
                return Mk
            }

            function Ia() {
                if (N() && !xb) {
                    for (var A = [], S = [], Ja = 0, pa;
                        (pa = G[Ja++]) && !pa.at(p.Ab(), ta, S););
                    (Ja = S ? S.length : 0) && (Ja -= ma(S, A, 0));
                    for (pa = 0; pa < ta.length; ++pa) A.push(ta[pa]);
                    Ja && (Ja -= ma(S, A, 1));
                    wb.$t && A.push(1);
                    Ja && ma(S, A, 2);
                    wb.Rm && A.push(2);
                    Za && Za.Kz(A);
                    return A
                }
                return null
            }

            function ma(A, S, Ja) {
                for (var pa = 0, oc = 0, lb; oc < A.length; ++oc)(lb = A[oc]) && lb.position == Ja && (S.push(lb),
                    ++pa);
                return pa
            }

            function sa(A, S) {
                null == U || z.jg(U) ? (ka(A), null == U ? p.Co() : (A = z.ni(ta[U]), p.Bg(A), kb.ei(A))) : (z.Og(A), S())
            }

            function ka(A) {
                q();
                null != A && z.Og(A);
                null != U && z.fu(U)
            }

            function q() {
                Ta && (window.clearTimeout(Ta), Ta = null)
            }
            var z, x, P, m, p, Y, G, K, da, Za, kb, ta, U, Ea, xb, qa, Ya, ya, Ta, vb, eb, wb, Ka = {
                O: function(A) {
                    z = A.get(129, Ka);
                    x = A.get(145, Ka);
                    P = A.get(115, Ka);
                    m = A.get(123, Ka);
                    p = A.get(118, Ka);
                    Y = A.get(147, Ka);
                    G = A.Wa(153, Ka);
                    K = A.get(553, Ka);
                    A.get(126, Ka);
                    da = A.get(184, Ka);
                    Za = A.get(157, Ka);
                    kb = A.L
                },
                za: function() {
                    G.sort(Fj)
                },
                K: function(A) {
                    wb = A;
                    Ea = U = null;
                    qa = xb = !1;
                    Ya = !0;
                    eb = "";
                    vb = 0
                },
                v: function() {
                    return 128
                },
                sa: function() {
                    return {
                        bk: b,
                        Mw: c,
                        fw: d,
                        gw: e,
                        ag: g,
                        Ad: h,
                        At: k,
                        isVisible: l,
                        isEnabled: n,
                        Sw: v,
                        kc: u,
                        wi: F,
                        wA: w,
                        Be: Q,
                        lt: V,
                        Gc: N,
                        Ce: fa,
                        ux: B,
                        show: y,
                        Hc: I,
                        clear: H,
                        Kh: O,
                        Zv: R,
                        $v: J,
                        Iz: ha,
                        Ff: Z
                    }
                },
                qd: function() {
                    var A = {
                        mf: a,
                        na: oa,
                        vd: Ga,
                        bg: Ha,
                        sc: Sa,
                        ze: wa
                    };
                    return [{
                        va: Cj,
                        O: Cj,
                        za: Cj,
                        K: Cj,
                        v: function() {
                            return 154
                        },
                        sa: function() {
                            return A
                        },
                        qd: function() {
                            return null
                        },
                        Da: Cj
                    }]
                },
                Da: function() {
                    ya && (window.clearTimeout(ya), ya = null);
                    ta = null;
                    I()
                }
            };
            return Ka
        },
        Mk = sj++;
    var Pk = function() {
        this.jn = Ok.test("x")
    };
    E(Pk, Fk);
    var Qk = /^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$/,
        Ok = /^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])/;
    Pk.prototype.va = function(a) {
        this.pd = a.ud()
    };
    Pk.prototype.v = function() {
        return 145
    };
    Pk.prototype.Yt = function(a) {
        if (!this.jn) return !0;
        for (var b = !1, c = !1, d = 0, e; d < a.length; ++d)
            if (e = a.charAt(d), !Qk.test(e) && (Ok.test(e) ? c = !0 : b = !0, c && b)) return !0;
        return !1
    };
    Pk.prototype.vi = function(a) {
        var b = this.pd;
        this.jn && (Ok.test(a) ? b = "ltr" : Qk.test(a) || (b = "rtl"));
        return b
    };
    var Rk = function() {
        this.Fj = [];
        this.Gh = {
            Tp: 1
        }
    };
    E(Rk, Fk);
    var Sk = window.postMessage && !(Hj || Oj || Mj);
    f = Rk.prototype;
    f.v = function() {
        return 117
    };
    f.Da = function() {
        this.dc = null
    };
    f.Ka = function(a, b, c, d, e) {
        var g = this.tm(a);
        g || (g = {}, this.Fj.push({
            element: a,
            Pt: g
        }));
        var h = g[b];
        h || (h = g[b] = [], g = this.Ns(b, a.Tp ? window : jk(a), h), "string" == typeof b ? a.addEventListener ? a.addEventListener(b, g, !1) : a["on" + b] = g : a[b] = g);
        h.push(this.Ms(c, d || 0, !!e));
        h.sort(Tk);
        c.hs = b
    };
    f.Pg = function(a, b) {
        if (a = this.tm(a))
            if (a = a[b.hs])
                for (var c = 0, d; d = a[c++];)
                    if (d.Ld == b) {
                        d.lj = !0;
                        break
                    }
    };
    f.qb = function(a, b, c, d) {
        this.Ka(this.Gh, a, b, c, d)
    };
    f.Lx = function(a) {
        this.Pg(this.Gh, a)
    };
    f.xa = function(a, b) {
        b = b || {};
        (a = this.Gh[a]) && a(b, b.cf)
    };
    f.Ob = function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
    };
    f.uk = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c)
    };
    f.defer = function(a) {
        if (Sk) {
            if (!this.dc) {
                this.dc = [];
                var b = C(this.bt, this);
                this.Ob(window, "message", b)
            }
            this.dc.push(a);
            a = window.location.href;
            window.postMessage("sbox.df", /HTTPS?:\/\//i.test(a) ? a : "*")
        } else window.setTimeout(a, 0)
    };
    f.bt = function(a) {
        this.dc && a && a.source == window && "sbox.df" == a.data && this.dc.length && (this.dc.shift()(), this.dc && this.dc.length && window.postMessage("sbox.df", window.location.href))
    };
    f.Ns = function(a, b, c) {
        return C(function(d, e) {
            if (c.length && (d = d || this.ws(b), d.cf = e || a, this.wv(d, c), d.ig)) return delete d.ig, d.yu && (d = b.event || d), ek(d), d.returnValue = !1
        }, this)
    };
    f.ws = function(a) {
        var b = {};
        if (a = a.event) a.keyCode && (b.keyCode = a.keyCode), b.yu = !0;
        return b
    };
    f.Ms = function(a, b, c) {
        return {
            Au: c,
            lj: !1,
            priority: b,
            Ld: a
        }
    };
    f.tm = function(a) {
        for (var b = 0, c; b < this.Fj.length; ++b)
            if (c = this.Fj[b], c.element == a) return c.Pt;
        return null
    };
    f.wv = function(a, b) {
        for (var c, d, e = 0, g; g = b[e++];) g.lj ? d = !0 : c || (g.Au ? this.dw(g, a) : c = g.Ld(a));
        if (d)
            for (e = 0; g = b[e];) g.lj ? b.splice(e, 1) : ++e
    };
    f.dw = function(a, b) {
        this.defer(function() {
            a.Ld(b)
        })
    };
    var Tk = function(a, b) {
        return b.priority - a.priority
    };
    var Uk = function() {
        this.ef = {};
        this.Ng = this.Hj = 0
    };
    E(Uk, Fk);
    f = Uk.prototype;
    f.K = function() {
        this.reset()
    };
    f.v = function() {
        return 494
    };
    f.sq = function(a) {
        this.ef[a.Fa()] = !0
    };
    f.Yu = function(a) {
        var b = a.Ae();
        a = b.Fa();
        a in this.ef && (b = b.Yf(), this.Ng += uj() - b, ++this.Hj, delete this.ef[a])
    };
    f.us = function() {
        var a = 0,
            b;
        for (b in this.ef) a++;
        return a
    };
    f.reset = function() {
        this.ef = {};
        this.Ng = this.Hj = 0
    };
    var Vk = function() {};
    E(Vk, Fk);
    f = Vk.prototype;
    f.K = function() {
        this.reset()
    };
    f.v = function() {
        return 374
    };
    f.add = function(a) {
        this.eb[a] = !0;
        this.xn = a
    };
    f.vt = function() {
        var a = [],
            b;
        for (b in this.eb) a.push(parseInt(b, 10));
        return a
    };
    f.reset = function() {
        this.eb = {};
        this.xn = null
    };
    var Wk = function() {
        this.Lo = -1
    };
    E(Wk, Fk);
    var Xk = /\.+$/,
        Yk = /\./g,
        Zk = tj([23]);
    f = Wk.prototype;
    f.O = function(a) {
        this.Lf = a.get(191, this);
        this.ma = a.get(123, this);
        this.F = a.get(118, this);
        this.eb = a.get(374, this);
        this.Ec = a.get(494, this);
        this.Xc = a.get(126, this);
        this.N = a.get(128, this);
        this.Lp = a.Wa(311, this);
        hk(a.Wa(152, this))
    };
    f.za = function(a) {
        this.qk = a.Vu
    };
    f.K = function(a) {
        this.C = a;
        this.reset()
    };
    f.v = function() {
        return 120
    };
    f.getParameters = function(a) {
        var b = this.F.Ab();
        a = this.nt(a);
        var c = this.pt(b, a);
        b = {
            oq: b,
            gs_l: a + "." + c
        };
        this.C.Eu && (b.q = this.F.ta());
        return b
    };
    f.reset = function() {
        this.Mo = uj();
        ++this.Lo;
        this.F.Wc();
        this.eb.reset();
        this.ma.Wc();
        for (var a = 0, b; b = this.Lp[a++];) b.reset()
    };
    f.gx = function(a) {
        this.qk = a
    };
    f.Ps = function() {
        var a = this.Xc.td();
        return a ? a.getParameters().cb("e") || "" : ""
    };
    f.Us = function() {
        return this.eb.vt().join("j")
    };
    f.ys = function() {
        var a = "";
        this.Xc.Oi() ? a = "o" : this.N.Ce() && (a = this.N.lt() + "");
        return a
    };
    f.nt = function(a) {
        var b = [];
        b[27] = 34;
        b[0] = $k(this.C.rh);
        b[28] = $k(this.C.ug);
        b[1] = void 0 == a ? "" : a + "";
        b[26] = this.Us();
        b[2] = this.ys();
        b[3] = this.As();
        b[4] = this.Gi(this.F.si);
        b[5] = this.Gi(this.F.un);
        b[6] = this.Lo;
        b[7] = uj() - this.Mo;
        b[18] = this.Gi(this.F.Tu);
        b[8] = this.ma.wo;
        if (a = this.ma.Cs()) b[25] = this.Bs(a), b[10] = a.vu;
        b[11] = this.ma.qm();
        b[12] = this.ma.am;
        if (a = this.ma.Hs()) b[9] = a.Tv, b[22] = a.Lv, b[17] = a.aw;
        b[13] = this.ma.Rn;
        b[14] = this.ma.nj;
        b[15] = this.ma.sk;
        b[16] = this.ma.Gs();
        b[30] = this.Ec.us();
        b[31] = this.Ec.Hj;
        b[32] = this.Ec.Ng;
        b[19] = $k(this.C.lk);
        b[20] = this.Ps();
        a = 0;
        for (var c; c = this.Lp[a++];) {
            var d = c.Sf();
            Zk[d] && (b[d] = void 0 == b[d] ? $k(c.wd()) : "")
        }
        return b.join(".").replace(Xk, "")
    };
    var $k = function(a) {
        return a ? a.replace(Yk, "-") : ""
    };
    Wk.prototype.As = function() {
        var a = "",
            b = this.N.kc();
        if (b) {
            for (var c, d = 0, e = 0, g; g = b[e++];) {
                var h = g;
                g = h.v() + "";
                h = h.Ki();
                h.length && (g += "i" + h.join("i"));
                g != c && (1 < d && (a += "l" + d), a += (c ? "j" : "") + g, d = 0, c = g);
                ++d
            }
            1 < d && (a += "l" + d)
        }
        return a
    };
    Wk.prototype.pt = function(a, b) {
        return this.Lf && this.qk ? (a += b, b = this.Lf.decode(this.qk), a = this.Lf.ot(a, b), a = a.slice(0, 8), this.Lf.encode(a)) : ""
    };
    Wk.prototype.Gi = function(a) {
        return Math.max(a - this.Mo, 0)
    };
    Wk.prototype.Bs = function(a) {
        return a.Gu ? "1" + (this.C.Ur ? "a" : "") + (this.C.Xr ? "c" : "") : ""
    };
    var al = function() {};
    E(al, Fk);
    f = al.prototype;
    f.va = function(a) {
        this.ti = a.pm()
    };
    f.O = function(a) {
        a.get(347, this);
        this.yb = a.get(130, this);
        this.G = a.get(117, this);
        this.ma = a.get(123, this);
        this.F = a.get(118, this);
        this.jj = a.get(120, this);
        this.N = a.get(128, this);
        this.$e = a.get(139, this);
        this.L = a.L;
        this.Ho = a.Wa(294, this)
    };
    f.K = function(a) {
        this.C = a
    };
    f.v = function() {
        return 121
    };
    f.search = function(a, b) {
        if (this.Ho) {
            for (var c = !1, d = 0, e; e = this.Ho[d++];) 2 == e.Vf(a, b) && (c = !0);
            if (c) return
        }
        if (a && !lj.test(a) || this.C.xc || this.yb && this.yb.xc()) $i.test(b) ? this.ti && !this.Nf && (this.Nf = ck(this.ti, "btnI", "1")) : this.Nf && (this.ti.removeChild(this.Nf), this.Nf = null), this.L.search(a, b), this.uf(), this.G.xa(14, {
            query: a
        })
    };
    f.ng = function(a) {
        this.L.ng(a);
        this.uf()
    };
    f.redirect = function(a) {
        this.L.redirect(a);
        this.uf()
    };
    f.Ef = function(a) {
        this.L.Ef(a);
        this.uf()
    };
    f.Xf = function(a) {
        return this.L.Xf(a)
    };
    f.uf = function() {
        this.ma.fg();
        this.ma.vf();
        this.jj.reset();
        this.N.clear();
        this.F.Ab() != this.F.ta() && this.F.Yk();
        this.$e && this.$e.clear()
    };
    var bl = function(a, b, c) {
        function d() {
            return a
        }

        function e() {
            return J
        }

        function g() {
            return ha
        }

        function h() {
            return b
        }

        function k() {
            return c || ""
        }

        function l(Z, oa) {
            F(Z, oa)
        }

        function n(Z, oa) {
            F(Z, oa, !0)
        }

        function v() {
            B || (y = !0)
        }

        function u() {
            H = !0
        }

        function F(Z, oa, Ga) {
            B || (Q[Z] = oa, Ga && (V[Z] = oa))
        }
        var w = (rj++).toString(36),
            Q = {},
            V = {},
            N, fa, B = !1,
            y = !1,
            I = !1,
            H = !1,
            O = 1,
            R = {
                Fa: function() {
                    return w
                },
                ym: function() {
                    var Z = parseInt(w, 36);
                    return isNaN(Z) ? -1 : Z
                },
                bb: d,
                Zs: e,
                Di: g,
                rd: h,
                Qs: function() {
                    return O
                },
                getParameters: function() {
                    return Q
                },
                sA: function() {
                    return N
                },
                $f: k,
                Yf: function() {
                    return fa
                },
                xs: function() {
                    return {
                        bb: d,
                        Zs: e,
                        Di: g,
                        rd: h,
                        $f: k,
                        Xj: l,
                        yg: n,
                        Zl: v,
                        Lq: u
                    }
                },
                Iw: function(Z) {
                    O = Z
                },
                Xj: l,
                yg: n,
                Zl: v,
                Lq: u,
                Bu: function() {
                    return y
                },
                iu: function() {
                    I = !0
                },
                rn: function() {
                    return I
                },
                TA: function() {
                    return H
                },
                ms: function() {
                    B || (fa = uj(), "cp" in V || n("cp", b.Uf()), F("gs_id", w), N = xj(V) + ":" + a, B = !0)
                }
            };
        var J = a.toLowerCase();
        var ha = Aj(J);
        return R
    };
    var cl = function() {};
    E(cl, Fk);
    f = cl.prototype;
    f.O = function(a) {
        this.Jj = a.Wa(156, this);
        this.Xc = a.get(126, this)
    };
    f.za = function() {
        this.Jj.sort(dl)
    };
    f.K = function(a) {
        this.C = a;
        this.Xn = a.tv
    };
    f.v = function() {
        return 553
    };
    f.ql = function(a, b, c) {
        return this.ct(a, b, c)
    };
    f.ap = function(a) {
        this.Xn = a
    };
    f.ct = function(a, b, c, d) {
        a = bl(a, b || vj(a.length), c || "");
        this.ls(a);
        a.yg("ds", this.C.ul);
        a.yg("pq", this.Xn);
        d && a.Zl();
        a.ms();
        return a
    };
    f.ls = function(a) {
        var b = 1,
            c = a.xs(),
            d = this.Xc.td();
        if (this.Jj)
            for (var e = 0, g; g = this.Jj[e++];) g = g.Vf(c, d), g > b && (b = g);
        a.Iw(b)
    };
    var dl = function(a, b) {
        return a.Ga() - b.Ga()
    };
    var el = function() {
        this.Cb = !1;
        this.lg = -1
    };
    E(el, Fk);
    var fl = [0, 1, 2, 3, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8],
        gl = fl[fl.length - 1] + 1,
        hl = 100 * fl.length - 1;
    f = el.prototype;
    f.O = function(a) {
        this.yc = a.get(133, this);
        this.yb = a.get(130, this);
        this.F = a.get(118, this);
        this.jj = a.get(120, this);
        this.Ec = a.get(494, this);
        this.yo = a.get(124, this);
        this.zo = a.get(125, this);
        this.Ao = a.get(230, this);
        this.sw = a.get(127, this);
        this.L = a.L
    };
    f.K = function(a) {
        this.$b = this.sw.$b;
        this.C = a;
        this.Cb = !0;
        this.Jd = {};
        this.bj = 0;
        this.Cu = a.qs;
        this.Du = a.eg;
        this.Ui = -1;
        this.Jc = this.C.Wr && !!this.yc
    };
    f.v = function() {
        return 123
    };
    f.Da = function() {
        this.Cb = !1;
        this.Bk();
        this.vf();
        this.Jd = null;
        this.fg()
    };
    f.Nl = function(a, b) {
        if (!(!this.Cb || this.Du || this.yb && this.yb.Rz())) {
            var c = !0;
            this.Nx(a);
            ++this.wo;
            this.Ec.sq(a);
            this.Ov();
            if (this.Jc) {
                var d = this.yc.get(a);
                d && ((c = this.Cu || a.Bu()) && this.C.hu && a.iu(), this.zo.Ld(d), d.mn() && ++this.am, this.vf())
            }
            c && (this.Kc = a, this.Aa && !b || this.bo())
        }
    };
    f.Oi = function() {
        return 10 <= this.Me || 3 <= this.$b.nm() ? !0 : !1
    };
    f.fg = function() {
        this.Ui = this.lg
    };
    f.on = function() {
        return this.lg <= this.Ui
    };
    f.vf = function() {
        this.Kc = null
    };
    f.Cs = function() {
        return {
            Gu: this.Jc,
            vu: this.Jc ? this.yc.rA() : 0
        }
    };
    f.qm = function() {
        return this.Jc ? this.yc.qm() : 0
    };
    f.Hs = function() {
        return {
            Tv: this.cl,
            Lv: this.bl,
            aw: this.dl
        }
    };
    f.Gs = function() {
        for (var a = [], b = 0, c, d = 0; d <= gl; ++d) c = this.Qj[d], 0 == c ? b++ : (b = 1 == b ? "0j" : 1 < b ? d + "-" : "", a.push(b + c), b = 0);
        return a.join("j")
    };
    f.ph = function() {
        this.Jc && this.yc.Zz()
    };
    f.Wc = function() {
        this.Jc && this.yc.Wc();
        this.sk = this.nj = this.Rn = this.dl = this.bl = this.cl = this.am = this.Me = this.wo = 0;
        this.Qj = [];
        for (var a = 0; a <= gl; ++a) this.Qj[a] = 0
    };
    f.Ds = function(a) {
        return C(function(b) {
            this.co(b, a)
        }, this)
    };
    f.bo = function() {
        this.Bk();
        if (!(2 < this.$b.nm()) && this.Kc) {
            var a = [],
                b = this.Kc.getParameters();
            if (b)
                for (var c in b) wj(c, b[c], a);
            this.L.Xh();
            a = this.$b.qw(this.Kc, a.join("&"), this.Ds(this.Kc), C(this.co, this));
            this.Kc.rn() || (++this.cl, a ? this.pq(this.Kc) : ++this.bl);
            this.vf();
            this.ew()
        }
    };
    f.ew = function() {
        for (var a = 100, b = (this.Me - 2) / 2, c = 1; c++ <= b;) a *= 2;
        a < this.bj && (a = this.bj);
        this.Aa = window.setTimeout(C(this.bo, this), a)
    };
    f.Bk = function() {
        null != this.Aa && (window.clearTimeout(this.Aa), this.Aa = null)
    };
    f.pq = function(a) {
        this.Jd[a.Fa()] = a;
        ++this.Me
    };
    f.po = function(a) {
        this.$b.Pr(a);
        delete this.Jd[a];
        this.Me && --this.Me
    };
    f.Ov = function() {
        var a = uj(),
            b;
        for (b in this.Jd) {
            var c = this.Jd[b].Yf();
            2500 < a - c && this.po(b)
        }
    };
    f.co = function(a, b) {
        if (this.Cb) {
            if (!b && (b = this.Jd[this.yo.nv(a)], !b)) return;
            if (!b.rn()) {
                a = this.yo.ov(a, b);
                if (this.Ao) {
                    var c = this.F.ta();
                    a = this.Ao.ib(a, c)
                }
                this.Jc && this.yc.put(a);
                this.Ju(b) || (++this.dl, this.zo.Ld(a) || ++this.Rn, this.Qx(b, a));
                this.Ox(a)
            }
        }
    };
    f.Qx = function(a, b) {
        this.bj = b.getParameters().et("d");
        a && (this.po(a.Fa()), a = a.Yf(), a = uj() - a, this.sk += a, this.nj = Math.max(a, this.nj), this.Px(a))
    };
    f.Px = function(a) {
        ++this.Qj[a > hl ? gl : fl[Math.floor(a / 100)]]
    };
    f.Ox = function(a) {
        a && (a = a.getParameters().cb("q")) && this.jj.gx(a)
    };
    f.Nx = function(a) {
        a = a.ym();
        a > this.lg && (this.lg = a)
    };
    f.Ju = function(a) {
        return a.ym() <= this.Ui
    };
    var il = function() {
        this.uj = {}
    };
    E(il, Fk);
    f = il.prototype;
    f.O = function(a) {
        this.Iq = a.get(150, this);
        if (a = a.Wa(158, this))
            for (var b = 0, c; c = a[b++];) this.uj[c.zA()] = c
    };
    f.K = function(a) {
        this.Cx = a.mk;
        this.St = a.Pm
    };
    f.v = function() {
        return 124
    };
    f.nv = function(a) {
        return (a[2] || {}).j
    };
    f.ov = function(a, b) {
        var c = a[0],
            d = a[1],
            e = {};
        if (a = a[2])
            for (var g in a) {
                var h = a[g];
                g in this.uj && (h = this.uj[g].parse(h));
                e[g] = h
            }
        return rk(b, this.pv(c, d), cj(e), !1, !0, !1)
    };
    f.pv = function(a, b) {
        for (var c = !1, d = !1, e = !1, g = 0, h; h = b[g++];)
            if (33 == this.Im(h) ? d = !0 : c = !0, d && c) {
                e = !0;
                break
            }
        c = 0;
        d = [];
        for (g = 0; h = b[g++];) {
            var k = this.Im(h);
            if (this.Cx[k] && (!e || 33 != k)) {
                var l = this.tt(h, a);
                d.push(ej(l, this.vl(l), c++, k, this.rt(h), this.it(h)))
            }
        }
        return d
    };
    f.Im = function(a) {
        return a[1] || 0
    };
    f.rt = function(a) {
        return a[2] || []
    };
    f.tt = function(a, b) {
        a = a[0];
        this.St && (a = this.Iq.bold(b.toLowerCase(), this.vl(a)));
        return a
    };
    f.it = function(a) {
        return (a = a[3]) ? cj(a) : dj
    };
    f.vl = function(a) {
        return zj(a).replace(mj, "")
    };
    var jl = function() {};
    E(jl, Fk);
    jl.prototype.O = function(a) {
        this.G = a.get(117, this);
        this.F = a.get(118, this);
        this.Ec = a.get(494, this);
        this.Lj = a.Wa(122, this);
        this.Xc = a.get(126, this);
        this.N = a.get(128, this);
        this.L = a.L;
        this.Lj.sort(kl)
    };
    jl.prototype.v = function() {
        return 125
    };
    jl.prototype.Ld = function(a) {
        var b = this.Pu(a);
        if (b) {
            if (this.Lj)
                for (var c = 0, d; d = this.Lj[c++];) a = d.Sr(a);
            this.Xc.Ew(a);
            this.Bv(a)
        }
        this.L.bi(a, b);
        return b
    };
    jl.prototype.Pu = function(a) {
        var b = this.F.ta(),
            c = this.Xc.td();
        b = b.toLowerCase();
        var d = a.bb().toLowerCase();
        b == d ? c = !0 : (b = Aj(b), a = (d = a.Ae()) ? d.Di() : Aj(a.bb().toLowerCase()), c = c ? c.Ae().Di() : "", c = 0 == b.indexOf(a) ? 0 == b.indexOf(c) ? a.length >= c.length : !0 : !1);
        return c
    };
    var kl = function(a, b) {
        return a.Ga() - b.Ga()
    };
    jl.prototype.Bv = function(a) {
        var b = a.Ae().bb(),
            c = a.kc();
        if (this.N.isEnabled())
            if (c.length) {
                var d = 0 == a.v();
                this.N.bk(b, c, d) && this.Ec.Yu(a)
            } else this.N.clear();
        this.G.xa(3, {
            input: b,
            Bx: c
        })
    };
    var ll = function() {};
    E(ll, Fk);
    f = ll.prototype;
    f.O = function(a) {
        this.ma = a.get(123, this)
    };
    f.K = function() {
        this.Pq()
    };
    f.v = function() {
        return 126
    };
    f.Oi = function() {
        return this.ma.Oi()
    };
    f.Ew = function(a) {
        this.Cl = a
    };
    f.td = function() {
        return this.Cl
    };
    f.Pq = function() {
        this.Cl = null
    };
    var ml = function() {
        this.el = {}
    };
    E(ml, Fk);
    ml.prototype.O = function(a) {
        a = a.Wa(149, this);
        for (var b = 0, c; c = a[b++];) this.el[c.im()] = c
    };
    ml.prototype.K = function(a) {
        var b = "https:" == document.location.protocol,
            c = [];
        wj("client", a.rh, c);
        wj("hl", a.Ge, c);
        wj("gl", a.yx, c);
        wj("sugexp", a.lk, c);
        wj("gs_rn", 34, c);
        wj("gs_ri", a.ug, c);
        a.Mk && wj("authuser", a.Mk, c);
        this.gr = {
            protocol: "http" + (b ? "s" : "") + "://",
            host: a.Wv || "clients1." + a.ir,
            Ij: a.Ij || "/complete/search",
            xx: c.length ? c.join("&") : ""
        };
        this.$b && this.$b.im() == a.wh || (this.$b = this.el[a.wh])
    };
    ml.prototype.v = function() {
        return 127
    };
    var nl = function() {};
    E(nl, Fk);
    var ol = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 0, 0, 0, 0, 64, 0, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 0, 0, 0, 0, 0],
        pl = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21],
        ql = [3614090360, 3905402710, 606105819, 3250441966, 4118548399, 1200080426,
            2821735955, 4249261313, 1770035416, 2336552879, 4294925233, 2304563134, 1804603682, 4254626195, 2792965006, 1236535329, 4129170786, 3225465664, 643717713, 3921069994, 3593408605, 38016083, 3634488961, 3889429448, 568446438, 3275163606, 4107603335, 1163531501, 2850285829, 4243563512, 1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740, 2763975236, 1272893353, 4139469664, 3200236656, 681279174, 3936430074, 3572445317, 76029189, 3654602809, 3873151461, 530742520, 3299628645, 4096336452, 1126891415, 2878612391, 4237533241, 1700485571,
            2399980690, 4293915773, 2240044497, 1873313359, 4264355552, 2734768916, 1309151649, 4149444226, 3174756917, 718787259, 3951481745
        ];
    nl.prototype.v = function() {
        return 191
    };
    nl.prototype.encode = function(a) {
        "string" == typeof a && (a = rl(a));
        var b = "";
        if (a) {
            for (var c = a.length, d = 0, e = 0, g = 0; c--;)
                for (e <<= 8, e |= a[g++], d += 8; 6 <= d;) b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(e >> d - 6 & 63), d -= 6;
            d && (b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(e << 8 >> d + 8 - 6 & 63))
        }
        return b
    };
    nl.prototype.decode = function(a) {
        var b = [];
        if (a)
            for (var c = 0, d = 0, e = 0; e < a.length; ++e) {
                var g = a.charCodeAt(e);
                if (32 > g || 127 < g || !ol[g - 32]) return [];
                c <<= 6;
                c |= ol[g - 32] - 1;
                d += 6;
                8 <= d && (b.push(c >> d - 8 & 255), d -= 8)
            }
        return b
    };
    nl.prototype.ot = function(a, b) {
        var c = {};
        c.ra = Array(4);
        c.buffer = Array(4);
        c.Zx = Array(4);
        c.padding = Array(64);
        c.padding[0] = 128;
        for (var d = 1; 64 > d; ++d) c.padding[d] = 0;
        sl(c);
        d = Array(64);
        64 < b.length && (sl(c), tl(c, b), b = ul(c));
        for (var e = 0; e < b.length; ++e) d[e] = b[e] ^ 92;
        for (e = b.length; 64 > e; ++e) d[e] = 92;
        sl(c);
        for (e = 0; 64 > e; ++e) c.buffer[e] = d[e] ^ 106;
        vl(c, c.buffer);
        c.total = 64;
        tl(c, rl(a));
        a = ul(c);
        sl(c);
        vl(c, d);
        c.total = 64;
        tl(c, a);
        return ul(c)
    };
    var rl = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; ++d) {
                var e = a.charCodeAt(d);
                128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
            }
            return b
        },
        sl = function(a) {
            a.ra[0] = 1732584193;
            a.ra[1] = 4023233417;
            a.ra[2] = 2562383102;
            a.ra[3] = 271733878;
            a.rf = a.total = 0
        },
        vl = function(a, b) {
            for (var c = a.Zx, d = 0; 64 > d; d += 4) c[d / 4] = b[d] | b[d + 1] << 8 | b[d + 2] << 16 | b[d + 3] << 24;
            var e = a.ra[0];
            b = a.ra[1];
            d = a.ra[2];
            for (var g = a.ra[3], h, k, l, n = 0; 64 > n; ++n) 16 > n ? (h = g ^ b & (d ^ g), k = n) : 32 > n ? (h = d ^ g & (b ^ d), k = 5 * n + 1 & 15) :
                48 > n ? (h = b ^ d ^ g, k = 3 * n + 5 & 15) : (h = d ^ (b | ~g), k = 7 * n & 15), l = g, g = d, d = b, e = e + h + ql[n] + c[k] & 4294967295, h = pl[n], b = b + ((e << h | e >>> 32 - h) & 4294967295) & 4294967295, e = l;
            a.ra[0] = a.ra[0] + e & 4294967295;
            a.ra[1] = a.ra[1] + b & 4294967295;
            a.ra[2] = a.ra[2] + d & 4294967295;
            a.ra[3] = a.ra[3] + g & 4294967295
        },
        tl = function(a, b, c) {
            c || (c = b.length);
            a.total += c;
            for (var d = 0; d < c; ++d) a.buffer[a.rf++] = b[d], 64 == a.rf && (vl(a, a.buffer), a.rf = 0)
        },
        ul = function(a) {
            var b = Array(16),
                c = 8 * a.total,
                d = a.rf;
            tl(a, a.padding, 56 > d ? 56 - d : 64 - (d - 56));
            for (var e = 56; 64 > e; ++e) a.buffer[e] =
                c & 255, c >>>= 8;
            vl(a, a.buffer);
            for (e = d = 0; 4 > e; ++e)
                for (c = 0; 32 > c; c += 8) b[d++] = a.ra[e] >> c & 255;
            return b
        };
    var wl = function() {};
    E(wl, Fk);
    wl.prototype.v = function() {
        return 150
    };
    wl.prototype.bold = function(a, b) {
        b = yj(b.replace(aj, ""));
        a = yj(Aj(a, !0));
        if (Bj(b, a)) return a + "<b>" + b.substr(a.length) + "</b>";
        for (var c = "", d = [], e = b.length - 1, g = 0, h = -1, k; k = b.charAt(g); ++g) " " == k || "\t" == k ? c.length && (d.push({
            t: c,
            Ne: h,
            e: g + 1
        }), c = "", h = -1) : (c += k, -1 == h ? h = g : g == e && d.push({
            t: c,
            Ne: h,
            e: g + 1
        }));
        a = this.$s(a, d);
        if (!a.length) return "<b>" + b + "</b>";
        c = "";
        for (g = e = 0; h = a[g]; ++g)(k = d[h.Ne].Ne) && (c += "<b>" + b.substring(e, k - 1) + "</b> "), e = d[h.e].e, c += b.substring(k, e);
        e < b.length && (c += "<b>" + b.substring(e) + "</b> ");
        return c
    };
    wl.prototype.$s = function(a, b) {
        var c = a.split(/\s+/);
        a = {};
        for (var d = 0, e; e = c[d++];) a[e] = 1;
        c = -1;
        var g = [],
            h = b.length - 1;
        for (d = 0; e = b[d]; ++d) a[e.t] ? (e = -1 == c, d == h ? g.push({
            Ne: e ? d : c,
            e: d
        }) : e && (c = d)) : -1 < c && (g.push({
            Ne: c,
            e: d - 1
        }), c = -1);
        return g
    };
    var xl = function() {};
    E(xl, Fk);
    var yl = function(a) {
        return eval('"\\u30' + a.split(",").join("\\u30") + '"')
    };
    yl("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");
    yl("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");
    yl("D1,D4,D7,DA,DD");
    yl("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");
    yl("D1__,D4__,D7__,DA__,DD");
    yl("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");
    yl("CF,D2,D5,D8,DB");
    xl.prototype.v = function() {
        return 146
    };
    var zl = function() {
        this.ln = !0
    };
    E(zl, Fk);
    f = zl.prototype;
    f.va = function(a, b) {
        this.pd = a.ud();
        b.addRule(".gssb_c", "border:0;position:absolute;z-index:989");
        b.addRule(".gssb_e", "border:1px solid #ccc;border-top-color:#d9d9d9;" + b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);") + "cursor:default");
        b.addRule(".gssb_f", "visibility:hidden;white-space:nowrap");
        b.addRule(".gssb_k", "border:0;display:block;position:absolute;top:0;z-index:988");
        b.addRule(".gsdd_a", "border:none!important")
    };
    f.O = function(a) {
        this.yf = a.get(115, this);
        this.F = a.get(118, this);
        this.G = a.get(117, this);
        this.Io = a.wg.Fa()
    };
    f.za = function(a) {
        this.C = a;
        this.yr();
        (a.ue || document.body).appendChild(this.Ba);
        this.G.qb(8, C(this.sc, this))
    };
    f.K = function(a) {
        this.C = a;
        this.Ba.style.position = a.ve
    };
    f.v = function() {
        return 116
    };
    f.Wj = function(a) {
        a != this.Le && (this.Le = a, a = a.na(), this.tj ? a != this.tj && this.gb.replaceChild(a, this.tj) : this.gb.appendChild(a), this.tj = a)
    };
    f.Lb = function() {
        this.qg || (this.qg = this.gb ? Math.max(this.gb.offsetHeight, 0) : 0);
        return this.qg
    };
    f.show = function(a) {
        this.zv(a);
        this.tc(this.Mh, !0);
        this.tc(this.Yb, !0);
        this.G.xa(16);
        this.sc()
    };
    f.Hc = function() {
        this.qg = 0;
        this.tc(this.Mh, !1);
        this.tc(this.Yb, !1);
        this.Zd(this.pd);
        this.G.xa(11)
    };
    f.sc = function() {
        this.qg = 0;
        this.uo();
        this.Sv();
        this.Le && this.Le.sc()
    };
    f.Dg = function(a) {
        this.Xi ? this.en != a && this.Xi.replaceChild(a, this.en) : (this.tr(), this.Xi.appendChild(a));
        this.en = a
    };
    f.tr = function() {
        var a = this.Ba.insertRow(-1);
        a.style.height = "0";
        a.insertCell(-1);
        this.Xi = a.insertCell(-1);
        this.yf.isVisible() || (this.tc(this.gb, !1), this.tc(this.Ba, !0), this.sc());
        this.Mh = this.gb
    };
    f.yr = function() {
        this.Ba = Xj();
        this.Ba.className = "gstl_" + this.Io + " gssb_c";
        this.tc(this.Ba, !1);
        this.Mh = this.Ba;
        var a = this.Ba.insertRow(-1);
        this.Ed = a.insertCell(-1);
        this.Ed.className = "gssb_f";
        this.kj = Yj();
        this.gb = a.insertCell(-1);
        this.gb.className = "gssb_e";
        this.gb.style.width = "100%";
        this.C.Rt && (this.Yb = Wj("iframe", "gstl_" + this.Io + " gssb_k"), this.tc(this.Yb, !1), (this.C.ue || document.body).appendChild(this.Yb));
        if (this.od = this.C.El) "number" == typeof this.od && (this.od += this.C.ld[2]), this.ek(this.Ba, this.od);
        this.uo()
    };
    f.uo = function() {
        var a = this.Le && this.Le.vd(),
            b = a ? a.offsetWidth : this.F.yd(),
            c = this.od;
        c ? "string" == typeof c && (c = null) : this.Dn || !this.ln ? (this.gb.style.width = "", this.Ba.style.width = "") : (this.gb.style.width = "100%", c = b + this.C.ld[2], this.ek(this.Ba, c));
        if ("relative" != this.C.ve) {
            var d = this.F.Ei();
            a && (d.Db = Vj(a).Db);
            a = this.ut(d, b, c);
            b = {
                Db: 0,
                ie: 0
            };
            "absolute" == this.C.ve && this.C.ue && this.C.ue != document.body && (b = Vj(this.C.ue));
            d = this.Ba.style;
            d.top = a.ie - b.ie + "px";
            d.left = d.right = "";
            void 0 != a.Db ? d.left = a.Db - b.Db +
                "px" : d.right = a.cw + b.Db + "px"
        }
        Jj && (d.zoom = "normal", d.zoom = 1)
    };
    f.ut = function(a, b, c) {
        var d = this.C.ld,
            e = d[1];
        d = d[0];
        d = a.ie + this.F.Lb() + d;
        if ("right" == this.Zm) return {
            cw: (jk(this.Ba) || window).document.documentElement.clientWidth - (a.Db - e + b),
            ie: d
        };
        a = a.Db + e;
        "center" == this.Zm && c && (a += (b - c) / 2);
        return {
            Db: a,
            ie: d
        }
    };
    f.Lw = function(a, b) {
        a.style.height = Math.max(b, 0) + "px"
    };
    f.ek = function(a, b) {
        "number" == typeof b ? 0 < b && (a.style.width = b + "px") : a.style.width = b
    };
    f.Sv = function() {
        if (this.Yb) {
            var a = this.C.Cq[0],
                b = this.Yb.style;
            "relative" != this.C.ve && (b.top = this.Ba.style.top, b.left = this.Ba.offsetLeft + this.Ed.offsetWidth + "px");
            this.Lw(this.Yb, this.Lb() + a);
            this.ek(this.Yb, this.gb.offsetWidth)
        }
    };
    f.tc = function(a, b) {
        a && (a.style.display = b ? "" : "none")
    };
    f.Zd = function(a) {
        this.Ra != a && (this.Ra = a, ak(this.Ba, a))
    };
    f.Xw = function(a) {
        if (this.Dn != a) {
            var b = this.kj.style;
            a ? (this.Ed.hasChildNodes() || this.Ed.appendChild(this.kj), b.width = a + "px", Lj && (b.paddingLeft = "1px")) : (this.Ed.hasChildNodes() && this.Ed.removeChild(this.kj), b.paddingLeft = "");
            this.Dn = a
        }
    };
    f.zv = function(a) {
        this.gb.className = a.Tt ? "gssb_e gsdd_a" : "gssb_e";
        this.Zd(a.jd || this.pd);
        this.Xw(a.marginWidth);
        this.ln = a.kn;
        this.Zm = a.Ti
    };
    var Al = function() {
        function a(t, D) {
            Za && (Za = !1, x.Pg(p, Z), x.Pg(p, oa));
            D || (D = t);
            p.parentNode.replaceChild(t, p);
            D.appendChild(p);
            da && K.Iv && (Hj || Lj ? x.defer(function() {
                p.focus();
                Uj(p, U.Uf())
            }) : p.focus());
            Ga()
        }

        function b() {
            return ya
        }

        function c(t) {
            var D = "rtl" == t == ("rtl" == A);
            p.dir = t;
            if (Ta) {
                P.Tj(t);
                var ea = qa.parentNode;
                ea.removeChild(Ta);
                D ? qa.parentNode.insertBefore(Ta, qa.nextSibling) : ea.insertBefore(Ta, qa)
            }
            ya && (ya.dir = t, ea = ya.parentNode, ea.removeChild(ya), D ? ea.insertBefore(ya, qa) : qa.parentNode.insertBefore(ya,
                qa.nextSibling));
            0 != Y && (D = 0, ea = p.style, "INPUT" != p.nodeName && (D += 1), ea.left = ea.right = "", ea["rtl" == t ? "right" : "left"] = D + "px")
        }

        function d() {
            return U
        }

        function e() {
            return Vj(Ya)
        }

        function g() {
            var t = Ya ? Ya.offsetHeight : 0;
            Ja > t && (t = Ja);
            return t
        }

        function h() {
            return pa ? pa : Ya ? Ya.offsetWidth : 0
        }

        function k() {
            var t = p.offsetWidth;
            K.ej && (t -= p.offsetHeight);
            return t
        }

        function l() {
            return p.value
        }

        function n(t) {
            var D = K.Yl ? p : qa || oc || p;
            D.style.background = t || "transparent";
            K.ih && (D.style.textIndent = -1 == t.indexOf("url") ? "0" : K.ih +
                "px")
        }

        function v() {
            xb = !0
        }

        function u() {
            p.select();
            ma()
        }

        function F() {
            Qj && (p.value = "");
            p.value = q.ta();
            Qj && (p.value = p.value);
            B()
        }

        function w() {
            if (!da) try {
                p.focus(), da = !0, B()
            } catch (t) {}
        }

        function Q() {
            da && (p.blur(), da = !1)
        }

        function V() {
            return da
        }

        function N() {
            p.value = ""
        }

        function fa() {
            var t = S.get("gs_id");
            if (t) ya = S.get("gs_ttc"), qa = S.get("gs_tti"), q.Qi() && P && (vb = P.na(), Ta = vb.parentNode);
            else {
                t = Xj();
                t.id = S.Fa("gs_id");
                t.className = "gstl_" + G + " " + (K.rk || p.className);
                var D = t.insertRow(-1),
                    ea = t.style,
                    Na = p.style;
                ea.width =
                    pa ? pa + "px" : Na.width;
                ea.height = Ja ? Ja + "px" : Na.height;
                ea.padding = "0";
                ea = p.style;
                ea.border = "none";
                ea.padding = Mj || Hj ? "0 1px" : "0";
                ea.margin = "0";
                ea.height = "auto";
                ea.width = "100%";
                p.className = K.$i;
                Ka && (ya = D.insertCell(-1), ya.id = S.Fa("gs_ttc"), ya.style.whiteSpace = "nowrap");
                qa = D.insertCell(-1);
                qa.id = S.Fa("gs_tti");
                qa.className = "gsib_a";
                q.Qi() && P && (vb = P.na(), Ta = D.insertCell(-1), Ta.className = "gsib_b", Ta.appendChild(vb));
                a(t, qa)
            }
            Rj && Nj && (p.style.height = "1.25em", p.style.marginTop = "-0.0625em");
            y(t);
            Ya = t
        }

        function B() {
            if (da) {
                var t =
                    p.value.length;
                U = vj(t);
                Uj(p, t)
            }
        }

        function y(t) {
            x.Ka(t, "mouseup", function() {
                p.focus()
            })
        }

        function I() {
            x.Ka(p, "keydown", O);
            (Mj || K.Mq) && x.Ka(p, "keypress", J);
            x.Ka(p, "select", ma, 10);
            var t = !1,
                D = function(ea) {
                    x.Ka(p, ea, ha, 10, t)
                };
            D("mousedown");
            D("keyup");
            D("keypress");
            t = !0;
            D("mouseup");
            D("keydown");
            D("focus");
            D("blur");
            D("cut");
            D("paste");
            D("input");
            x.Ka(p, "compositionstart", H);
            x.Ka(p, "compositionend", H)
        }

        function H(t) {
            t = t.type;
            "compositionstart" == t ? q.Xo(!0) : "compositionend" == t && q.Xo(!1)
        }

        function O(t) {
            var D =
                t.keyCode;
            Ea = D;
            var ea = (Nj || Lj) && (38 == D || 40 == D) && z.Gc(),
                Na = D == ka.yk,
                dd = D == ka.Yg;
            eb = !1;
            D == ka.zk && (eb = q.Ad());
            Na && ((D = z.Be()) && R(D) ? z.ag(t.shiftKey) : x.defer(function() {
                z.ag(t.shiftKey)
            }));
            if (ea || Na || dd || eb) t.ig = !0
        }

        function R(t) {
            return (t = m[t.v()].VA) && t()
        }

        function J(t) {
            var D = t.keyCode,
                ea = D == ka.Yg,
                Na = D == ka.zk && eb;
            if (D == ka.yk || ea || Na) t.ig = !0
        }

        function ha(t) {
            if (!wb) {
                var D = t.cf;
                if (!(D.indexOf("key") || t.ctrlKey || t.altKey || t.shiftKey || t.metaKey)) a: if (t = t.keyCode, "keypress" != D) {
                    var ea = 38 == t || 40 == t;
                    if ("keydown" ==
                        D) {
                        if (q.Rw(229 == t), ea) break a
                    } else {
                        var Na = t != Ea;
                        Ea = -1;
                        if (!ea || Na) break a
                    }
                    switch (t) {
                        case ka.Yg:
                            q.Et();
                            break;
                        case ka.Op:
                            q.Jt();
                            break;
                        case ka.Pp:
                            q.Kt();
                            break;
                        case ka.Qp:
                            q.Ot();
                            break;
                        case ka.Np:
                            q.Ct(U);
                            break;
                        case ka.Sp:
                            q.Bt(U);
                            break;
                        case ka.Rp:
                            q.yt(U)
                    }
                }
                ma();
                q.Om(p.value, U, D)
            }
        }

        function Z() {
            da = !0;
            q.Gt()
        }

        function oa() {
            da = !1;
            q.Mm()
        }

        function Ga() {
            Za || (Za = !0, x.Ka(p, "focus", Z, 99), x.Ka(p, "blur", oa, 99))
        }

        function Ha() {
            ta || (ta = window.setInterval(wa, K.qv || 50))
        }

        function Sa() {
            ta && (window.clearTimeout(ta), ta = null)
        }

        function wa() {
            ha({
                cf: "polling"
            })
        }

        function Ia() {
            if (Lj) {
                var t = p,
                    D = document.createEvent("KeyboardEvent");
                D.initKeyEvent && (D.initKeyEvent("keypress", !0, !0, null, !1, !1, !0, !1, 27, 0), t.dispatchEvent(D))
            }
        }

        function ma() {
            if (da) {
                a: {
                    var t = p;
                    try {
                        if ("selectionStart" in t) {
                            var D = t.selectionStart;
                            var ea = t.selectionEnd
                        } else {
                            var Na = t.createTextRange(),
                                dd = ik(t).selection.createRange();
                            Na.inRange(dd) && (Na.setEndPoint("EndToStart", dd), D = Na.text.length, Na.setEndPoint("EndToEnd", dd), ea = Na.text.length)
                        }
                        if (void 0 !== D) {
                            var Sf =
                                vj(D, ea);
                            break a
                        }
                    } catch (Jm) {}
                    Sf = null
                }
                Sf && (U = Sf)
            }
        }

        function sa() {
            var t;
            x.Ob(window, "pagehide", function() {
                wb = !0;
                t = p.value
            });
            x.Ob(window, "pageshow", function(D) {
                wb = !1;
                (D.persisted || void 0 !== t) && q.Qb(t)
            })
        }
        var ka = bj,
            q, z, x, P, m, p, Y, G, K, da, Za = !1,
            kb, ta, U = vj(0),
            Ea = -1,
            xb = !1,
            qa, Ya, ya, Ta, vb, eb, wb, Ka, A, S, Ja, pa, oc, lb = {
                va: function(t, D) {
                    S = t;
                    p = t.yi();
                    A = t.ud();
                    t.nf() || (D.addRule(".gsib_a", "width:100%;padding:4px 6px 0"), Kj && D.addRule(".gsib_a input::-ms-clear", "display: none"), D.addRule(".gsib_a,.gsib_b", "vertical-align:top"))
                },
                O: function(t) {
                    q = t.get(118, lb);
                    x = t.get(117, lb);
                    z = t.get(128, lb);
                    P = t.get(173, lb);
                    m = hk(t.Wa(152, lb));
                    t = t.wg;
                    Y = t.vm();
                    G = t.Fa()
                },
                za: function(t) {
                    K = t;
                    Ja = t.gn;
                    pa = t.nu;
                    a: {
                        try {
                            da = ik(p).activeElement == p;
                            break a
                        } catch (D) {}
                        da = !1
                    }
                    ma();
                    Hj && x.Ka(p, "beforedeactivate", function(D) {
                        xb && (xb = !1, D.ig = !0)
                    }, 10);
                    Lj && sa();
                    Ya = p;
                    Ka = !!t.Kf[130];
                    (q.Xt() || q.Qi() || Ka || t.rs) && fa();
                    t.$r && (x.Ka(p, "blur", Sa, 10), x.Ka(p, "focus", Ha, 10), kb = !0);
                    x.qb(8, Ia);
                    I();
                    Ga()
                },
                K: function(t) {
                    K = t;
                    var D = t.mu;
                    D && (oc = S.ui(D));
                    p.setAttribute("autocomplete",
                        "off");
                    p.setAttribute("spellcheck", !1);
                    p.style.outline = t.av ? "" : "none";
                    kb && Ha()
                },
                v: function() {
                    return 119
                },
                sa: function() {
                    return {
                        $B: a,
                        fm: b,
                        Tj: c,
                        rd: d,
                        Ei: e,
                        Lb: g,
                        yd: h,
                        wm: k,
                        Ts: l,
                        Eg: n,
                        xj: v,
                        select: u,
                        refresh: F,
                        focus: w,
                        blur: Q,
                        dj: V,
                        clear: N
                    }
                },
                Da: function() {
                    kb && Sa();
                    K.Vm && x.Pg(p, q.Mm)
                }
            };
        return lb
    };
    var Bl = function() {
        function a(m, p) {
            if (!ma) return !1;
            wa = p;
            fa();
            p = !1;
            for (var Y = 0, G; G = m[Y++];) F(G) && (p = !0);
            return p
        }

        function b(m) {
            var p = H[m.v()];
            return p && p.Nt ? p.Nt(m) : !1
        }

        function c(m) {
            return H[m.v()].Mi(null, m, O)
        }

        function d(m) {
            var p = H[m.v()];
            return p && p.ni ? p.ni(m, I.Ab()) : m.Bb()
        }

        function e(m, p) {
            if (!ma) return !1;
            wa = p;
            fa();
            p = !1;
            for (var Y = 0, G; G = m[Y++];)
                if (1 == G)
                    if (ka) sa.appendChild(ka);
                    else {
                        G = Q();
                        var K = G.style;
                        K.textAlign = "center";
                        K.whiteSpace = "nowrap";
                        G.dir = Ia;
                        K = Yj();
                        K.style.position = "relative";
                        q = Yj();
                        q.className =
                            "gssb_g";
                        J.Rm && (q.style.paddingBottom = "1px");
                        w(J.jw, q, 13);
                        J.Wt ? w(J.ri, q, 8) : J.au && w(J.lw, q, 14);
                        K.appendChild(q);
                        G.appendChild(K);
                        ka = G.parentNode
                    }
            else 2 == G ? z ? sa.appendChild(z) : (G = Q(), K = G.style, K.padding = "1px 4px 2px 0", K.fontSize = "11px", K.textAlign = "right", K = Wj("a"), K.id = "gssb_b", K.href = "http://www.google.com/support/websearch/bin/answer.py?hl=" + J.Ge + "&answer=106230", K.innerHTML = J.Uu, G.appendChild(K), z = G.parentNode) : 3 == G ? (G = Ga.pop()) ? sa.appendChild(G) : (G = ma.insertRow(-1), G.Lu = !0, G = G.insertCell(-1),
                K = Wj("div", "gssb_l"), G.appendChild(K)) : F(G) && (p = !0);
            return p
        }

        function g(m) {
            V(m, x);
            var p = B.kc();
            p && y.xa(9, {
                index: m,
                YB: p[m],
                aC: Ha[m]
            })
        }

        function h(m) {
            V(m, "");
            y.xa(10)
        }

        function k() {
            for (var m, p, Y; Y = Z.pop();) m = Y.v(), (p = ha[m]) || (p = ha[m] = []), p.push(Y), m = Y.na(), m.parentNode.removeChild(m);
            for (; m = sa.firstChild;) m = sa.removeChild(m), m.Lu ? Ga.push(m) : m != ka && m != z && oa.push(m);
            Ha = []
        }

        function l(m) {
            return (m = Ha[m]) ? m.jg() : !1
        }

        function n() {
            fa()
        }

        function v() {
            return ma
        }

        function u() {
            return J.Qm || Ia == wa ? Sa : null
        }

        function F(m) {
            var p =
                m.v(),
                Y = H[p];
            if (!Y) return !1;
            var G = (p = ha[p]) && p.pop();
            G || (G = Y.zh(O));
            Y.aa(m, G);
            Z.push(G);
            var K = G.na();
            p = Q();
            p.className = "gssb_a " + J.qp;
            p.appendChild(K);
            if (void 0 !== m.Sf) {
                Ha.push(G);
                G = wa;
                var da = m.Sf();
                J.gu && (K.onmouseover = function() {
                    B.Mw(da)
                }, K.onmouseout = function() {
                    B.$v()
                });
                K.onclick = function(Za) {
                    I.qf();
                    m.um() && I.Bg(m.Bb());
                    B.Zv();
                    B.At(da);
                    Za = Za || jk(K).event;
                    Y.zd(Za, m, O)
                }
            } else G = Ia;
            ak(p, G);
            return !0
        }

        function w(m, p, Y) {
            var G = Wj("input");
            G.type = "button";
            G.value = zj(m);
            G.onclick = function() {
                O.search(I.ta(),
                    Y)
            };
            if (J.Ut) {
                m = "lsb";
                var K = Wj("span");
                var da = Wj("span");
                K.className = "ds";
                da.className = "lsbb";
                K.appendChild(da);
                da.appendChild(G)
            } else m = "gssb_h", K = G;
            G.className = m;
            p.appendChild(K)
        }

        function Q() {
            var m = oa.pop();
            if (m) return sa.appendChild(m), m.firstChild;
            m = ma.insertRow(-1);
            m = m.insertCell(-1);
            m.className = J.qp;
            m.onmousedown = N;
            return m
        }

        function V(m, p) {
            (m = Ha[m]) && m.jg() && (m.na().parentNode.parentNode.className = p)
        }

        function N(m) {
            m = m || jk(ma).event;
            m.stopPropagation ? m.stopPropagation() : Mj || Hj && I.xj();
            return !1
        }

        function fa() {
            if (q) {
                var m = I.yd() - 3;
                0 < m && (q.style.width = m + "px")
            }
        }
        var B, y, I, H, O, R, J, ha = {},
            Z = [],
            oa = [],
            Ga = [],
            Ha = [],
            Sa, wa, Ia, ma, sa, ka, q, z, x, P = {
                va: function(m, p) {
                    R = m;
                    Ia = m.ud();
                    p.addRule(".gssb_a", "padding:0 7px");
                    p.addRule(".gssb_a,.gssb_a td", "white-space:nowrap;overflow:hidden;line-height:22px");
                    p.addRule("#gssb_b", "font-size:11px;color:#36c;text-decoration:none");
                    p.addRule("#gssb_b:hover", "font-size:11px;color:#36c;text-decoration:underline");
                    p.addRule(".gssb_g", "text-align:center;padding:8px 0 7px;position:relative");
                    p.addRule(".gssb_h", "font-size:15px;height:28px;margin:0.2em" + (Nj ? ";-webkit-appearance:button" : ""));
                    p.addRule(".gssb_i", "background:#eee");
                    p.addRule(".gss_ifl", "visibility:hidden;padding-left:5px");
                    p.addRule(".gssb_i .gss_ifl", "visibility:visible");
                    p.addRule("a.gssb_j", "font-size:13px;color:#36c;text-decoration:none;line-height:100%");
                    p.addRule("a.gssb_j:hover", "text-decoration:underline");
                    p.addRule(".gssb_l", "height:1px;background-color:#e5e5e5");
                    p.addRule(".gssb_m", "color:#000;background:#fff")
                },
                O: function(m) {
                    B = m.get(128, P);
                    y = m.get(117, P);
                    I = m.get(118, P);
                    O = m.get(121, P);
                    H = hk(m.Wa(152, P))
                },
                za: function(m) {
                    J = m;
                    ma = Xj();
                    m = Wj("tbody");
                    ma.appendChild(m);
                    sa = ma.getElementsByTagName("tbody")[0]
                },
                K: function(m) {
                    J = m;
                    var p = m.jo;
                    p && (Sa = R.ui(p));
                    ma.className = m.tp || "gssb_m";
                    x = m.rp || "gssb_i"
                },
                v: function() {
                    return 129
                },
                sa: function() {
                    return {
                        Pv: a,
                        ni: d,
                        ag: c,
                        Ad: b,
                        aa: e,
                        fu: g,
                        Og: h,
                        clear: k,
                        jg: l,
                        sc: n,
                        na: v,
                        vd: u
                    }
                }
            };
        return P
    };
    var Cl = function() {};
    E(Cl, Fk);
    f = Cl.prototype;
    f.va = function(a) {
        this.mv = a.pm() || document.body
    };
    f.za = function(a) {
        this.C = a
    };
    f.v = function() {
        return 147
    };
    f.yd = function(a) {
        var b = 0;
        a && (this.Fb || this.fl(), this.Wk(), a in this.mh ? b = this.mh[a] : (Zj(this.Fb, yj(a)), this.mh[a] = b = this.Fb.offsetWidth, Zj(this.Fb, "")));
        return b
    };
    f.Lb = function() {
        this.Fb || this.fl();
        this.Wk();
        this.lh || (Zj(this.Fb, "|"), this.lh = this.Fb.offsetHeight);
        return this.lh
    };
    f.fl = function() {
        var a = Yj(this.C.$i),
            b = a.style;
        b.background = "transparent";
        b.color = "#000";
        b.padding = 0;
        b.position = "absolute";
        b.whiteSpace = "pre";
        this.Fb = a;
        this.Fb.style.visibility = "hidden";
        this.mv.appendChild(this.Fb)
    };
    f.Wk = function() {
        var a = uj();
        if (!this.Qk || this.Qk + 3E3 < a) {
            this.Qk = a;
            a = this.Fb;
            var b = jk(a);
            a = (a = b.getComputedStyle ? b.getComputedStyle(a, "") : a.currentStyle) ? a.fontSize : null;
            this.Rk && a == this.Rk || (this.mh = {}, this.lh = null, this.Rk = a)
        }
    };
    var Dl = function() {
        this.ed = {};
        this.set(191, new nl);
        this.set(150, new wl);
        this.set(146, new xl);
        this.set(147, new Cl);
        this.Ma(149, Ik());
        this.set(145, new Pk);
        this.set(117, new Rk);
        this.set(494, new Uk);
        this.set(374, new Vk);
        this.set(120, new Wk);
        this.set(121, new al);
        this.set(553, new cl);
        this.set(124, new il);
        this.set(125, new jl);
        this.set(123, new el);
        this.set(126, new ll);
        this.set(127, new ml);
        this.set(115, new Jk);
        this.set(118, new Lk);
        this.set(128, Nk());
        this.set(116, new zl);
        this.set(119, Al());
        this.set(129, Bl())
    };
    E(Dl, tk);
    var El = function() {
        return {
            zi: function() {
                return {
                    rh: "hp",
                    ug: "hp",
                    ir: "google.com",
                    yx: "",
                    Ge: "en",
                    ul: "",
                    tv: "",
                    Ux: "",
                    Mk: 0,
                    Vu: "",
                    lk: "",
                    Hl: !1,
                    Wv: "",
                    Ij: "",
                    wh: 0,
                    fC: null,
                    Gp: !1,
                    LB: !1,
                    eg: !1,
                    mk: tj([19, 5, 0]),
                    Wr: !0,
                    nA: 10,
                    Ur: !0,
                    Xr: !0,
                    hA: !1,
                    qs: !1,
                    Eu: !1,
                    ej: !1,
                    Nu: !1,
                    du: !1,
                    Nz: !0,
                    VB: "en",
                    ih: 0,
                    Vm: !0,
                    Kr: !1,
                    eu: 500,
                    Pi: !1,
                    dg: !0,
                    Um: !0,
                    Zt: !1,
                    On: "",
                    sB: "//www.google.com/textinputassistant",
                    tB: "",
                    vB: 7,
                    IA: !1,
                    JA: !1,
                    $t: !1,
                    Wt: !0,
                    au: !1,
                    Rm: !1,
                    iw: !1,
                    hw: !1,
                    nk: 1,
                    $u: !0,
                    pi: !1,
                    oi: !1,
                    $r: !1,
                    qv: 10,
                    Pm: !1,
                    Iv: !0,
                    ue: document.body,
                    bu: !0,
                    op: null,
                    Kf: {},
                    mA: {},
                    DB: 0,
                    rs: !1,
                    hu: !0,
                    xc: !1,
                    oA: !1,
                    SA: !1,
                    SB: null,
                    Yr: !1,
                    fB: null,
                    wx: null,
                    lA: !1,
                    gu: !0,
                    Mq: !1,
                    bC: 1,
                    av: !1,
                    jw: "Search",
                    ri: "I'm  Feeling Lucky",
                    lw: "",
                    Uu: "Learn more",
                    IB: "Remove",
                    GB: "This search was removed from your Web History",
                    MA: "",
                    gA: "Did you mean:",
                    uB: "",
                    OB: "",
                    WB: "Search by voice",
                    UB: 'Listening for "Ok Google"',
                    TB: 'Say "Ok Google"',
                    Yl: !1,
                    mu: null,
                    gn: 0,
                    nu: 0,
                    $i: "",
                    qp: "",
                    XA: !1,
                    ve: "absolute",
                    Ut: !1,
                    Rt: !1,
                    jo: null,
                    Qm: !0,
                    ld: [0, 0, 0],
                    El: null,
                    sp: null,
                    Cq: [0],
                    HB: 1,
                    rk: "",
                    tp: "",
                    rp: "",
                    Vl: null,
                    Xl: "",
                    Wl: "",
                    Xz: 1
                }
            }
        }
    };
    var Fl = function() {
        this.fa = !1;
        this.fj = ""
    };
    E(Fl, Fk);
    var Gl = /<\/b> <b>/gi;
    f = Fl.prototype;
    f.va = function(a) {
        this.Nb = a.yi()
    };
    f.O = function(a) {
        this.G = a.get(117, this);
        this.F = a.get(118, this);
        this.eb = a.get(374, this);
        this.bf = a.get(121, this)
    };
    f.K = function(a) {
        this.nc = a.ej && !a.Nu;
        this.Ym = a.du;
        this.Dp();
        this.Nb.setAttribute("x-webkit-grammar", "builtin:search");
        "" != a.Ge && this.Nb.setAttribute("lang", a.Ge);
        this.nc ? (this.Ue || (this.Ue = C(this.Lt, this)), this.G.Ob(this.Nb, "webkitspeechchange", this.Ue)) : this.Ue && (this.G.uk(this.Nb, "webkitspeechchange", this.Ue), this.Ue = null);
        this.nc && this.Ym ? (this.Zc || (this.Zc = C(this.Dp, this)), this.G.qb(4, this.Zc), this.G.qb(5, this.Zc), this.G.qb(1, this.Zc)) : this.Zc && (this.G.Lx(this.Zc), this.Zc = null)
    };
    f.v = function() {
        return 419
    };
    f.Xs = function(a) {
        return this.Ig && this.Ve == a.bb() ? rk(a, this.Ig, dj, !0, !1, !1) : null
    };
    f.xf = function(a) {
        return !!a && 0 <= a.indexOf("**")
    };
    f.Sq = function() {
        this.fj = ""
    };
    f.Dp = function() {
        var a = this.nc && (!this.Ym || !this.F.ta());
        a != this.fa && (this.fa ? this.Nb.removeAttribute("x-webkit-speech") : this.Nb.setAttribute("x-webkit-speech", ""), this.fa = a)
    };
    f.Hq = function(a, b) {
        b = yj(b);
        a = yj(Aj(a, !0));
        a = a.split(" ");
        b = b.split(" ");
        for (var c, d = 0; d < b.length; ++d) c = b[d], 0 > a.indexOf(c) && (b[d] = c.bold());
        return b.join(" ").replace(Gl, " ")
    };
    f.Lt = function(a) {
        a = a && a.results ? a.results : [];
        var b = Math.min(a.length, 3);
        this.Ve = a[0].utterance;
        this.eb.add(6);
        if (this.xf(this.Ve)) {
            this.Ig = [];
            for (var c = 0; c < b; ++c) {
                var d = a[c].utterance;
                this.xf(d) || (d = ej(this.Hq(this.Ve, d), d, c, 40, null), this.Ig.push(d))
            }
        } else this.Ig = null, this.fj = this.Ve, this.bf.search(this.Ve, 15)
    };
    var Hl = function() {};
    Hl.prototype.jg = function() {
        return !0
    };
    var Il = function(a, b) {
        this.F = a;
        this.bf = b;
        this.mc()
    };
    E(Il, Hl);
    Il.prototype.na = function() {
        return this.ca
    };
    Il.prototype.v = function() {
        return 40
    };
    Il.prototype.aa = function(a, b, c) {
        this.Ye.innerHTML = a;
        this.gf = b;
        c && !this.Va && (this.Va = fk(this.Xe), this.Va.onclick = C(function(d) {
            this.F.qf();
            this.F.Bg(this.gf);
            this.bf.search(this.gf, 9);
            return ek(d)
        }, this));
        c ? (this.Va.innerHTML = c + " &raquo;", this.Va.style.display = "") : this.Va && (this.Va.style.display = "none")
    };
    Il.prototype.mc = function() {
        this.ca = Yj();
        this.ca.className = "gsq_a";
        var a = Xj();
        this.ca.appendChild(a);
        this.Xe = a.insertRow(-1);
        a = this.Xe.insertCell(-1);
        a.style.width = "100%";
        this.Ye = Wj("span");
        a.appendChild(this.Ye)
    };
    var Jl = function() {
        function a(k) {
            return new Il(e, k)
        }

        function b(k, l) {
            l.aa(k.xi(), k.Bb(), g)
        }

        function c(k, l, n) {
            n.search(l.Bb(), 1)
        }

        function d() {
            return 40
        }
        var e, g, h = {
            va: function(k, l) {
                l.addRule(".gsq_a", "padding:0")
            },
            O: function(k) {
                e = k.get(118, h)
            },
            K: function(k) {
                g = k.oi ? k.ri : ""
            },
            v: function() {
                return 152
            },
            sa: function() {
                return {
                    zh: a,
                    aa: b,
                    zd: c,
                    Mi: Cj,
                    Ii: d
                }
            }
        };
        return h
    };
    var Kl = function() {};
    E(Kl, Fk);
    Kl.prototype.O = function(a) {
        this.ik = a.get(419, this)
    };
    Kl.prototype.v = function() {
        return 156
    };
    Kl.prototype.Vf = function(a) {
        var b = a.$f();
        return this.ik && "input" == b && this.ik.fj == a.bb() ? (this.ik.Sq(), 3) : 1
    };
    Kl.prototype.Ga = function() {
        return 22
    };
    var Ll = function() {};
    E(Ll, Fk);
    f = Ll.prototype;
    f.O = function(a) {
        this.yf = a.get(419, this)
    };
    f.v = function() {
        return 151
    };
    f.Ga = function() {
        return 1
    };
    f.update = function() {};
    f.get = function(a) {
        var b = null;
        this.yf && (b = this.yf.Xs(a));
        return b
    };
    f.reset = function() {};
    var Ml = function() {};
    E(Ml, Fk);
    f = Ml.prototype;
    f.va = function(a, b) {
        this.Ea = a;
        a.nf() || (b.addRule(".gscb_a", "display:inline-block;font:27px/13px arial,sans-serif"), b.addRule(".gsst_a .gscb_a", "color:#a1b9ed;cursor:pointer"), b.addRule(".gsst_a:hover .gscb_a,.gsst_a:focus .gscb_a", "color:#36c"))
    };
    f.O = function(a) {
        this.F = a.get(118, this);
        this.G = a.get(117, this);
        this.il = a.get(173, this)
    };
    f.za = function(a) {
        this.nc = !!a.dg;
        this.Ap(a);
        this.Te = this.Ea.get("gs_cb");
        this.Te || (this.Te = Wj("span", "gscb_a"), this.Te.id = this.Ea.Fa("gs_cb"), this.Te.innerHTML = "&times;");
        a = C(this.It, this);
        this.G.qb(4, a);
        this.G.qb(5, a);
        this.G.qb(1, a)
    };
    f.K = function(a) {
        a.Pi && (this.nc = !!a.dg);
        this.Ap(a)
    };
    f.v = function() {
        return 160
    };
    f.isEnabled = function() {
        return this.nc
    };
    f.Zf = function() {
        return Nl
    };
    f.Ga = function() {
        return 5
    };
    f.na = function() {
        return this.Te
    };
    f.Hi = function() {
        return {
            nn: !this.fa
        }
    };
    f.zd = function() {
        this.F.clear(!0)
    };
    f.Ap = function(a) {
        this.Xm = a.Um;
        this.fa = !this.Xm || !!this.F.ta()
    };
    f.Rx = function() {
        var a = this.Zf();
        this.fa && this.nc ? this.il.px(a) : this.il.Wm(a)
    };
    f.It = function() {
        this.Xm && (this.fa = !!this.F.ta(), this.Rx())
    };
    var Nl = sj++;
    var Ol = function() {
        this.fe = {}
    };
    E(Ol, Fk);
    f = Ol.prototype;
    f.va = function(a, b) {
        this.Ea = a;
        this.pd = a.ud();
        a.nf() || (b.addRule(".gsst_a", "display:inline-block"), b.addRule(".gsst_a", "cursor:pointer;padding:0 4px"), b.addRule(".gsst_a:hover", "text-decoration:none!important"), b.addRule(".gsst_b", "font-size:16px;padding:0 2px;position:relative;" + b.prefix("user-select:none;") + "white-space:nowrap"), b.addRule(".gsst_e", "vertical-align:middle;" + (kk() + ":" + lk(.55) + ";")), b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e", kk() + ":" + lk(.72) + ";"), b.addRule(".gsst_a:active .gsst_e",
            kk() + ":" + lk(1) + ";"), b.addRule(".gsst_f", "background:white;text-align:left"), b.addRule(".gsst_g", "background-color:white;border:1px solid #ccc;border-top-color:#d9d9d9;" + b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);") + "margin:-1px -3px;padding:0 6px"), b.addRule(".gsst_h", "background-color:white;height:1px;margin-bottom:-1px;position:relative;top:-1px"))
    };
    f.qd = function() {
        var a = {
            mf: C(this.mf, this),
            na: C(this.Ks, this),
            vd: C(this.vd, this),
            bg: C(this.bg, this),
            sc: Cj,
            ze: C(this.ze, this)
        };
        return [{
            va: Cj,
            O: Cj,
            za: Cj,
            K: Cj,
            v: function() {
                return 154
            },
            sa: function() {
                return a
            },
            qd: function() {
                return null
            },
            Da: Cj
        }]
    };
    f.O = function(a) {
        this.Rr = a.get(115, this);
        this.G = a.get(117, this);
        this.F = a.get(118, this);
        this.ge = a.Wa(160, this);
        this.L = a.L
    };
    f.v = function() {
        return 173
    };
    f.za = function(a) {
        this.Vt = a.Pi;
        this.ge.sort(Pl);
        this.ca = this.Ea.get("gs_st");
        if (!this.ca) {
            this.ca = Yj("gsst_b");
            this.ca.id = this.Ea.Fa("gs_st");
            if (a = a.gn) this.ca.style.lineHeight = a + "px";
            this.Pl()
        }
        this.al()
    };
    f.K = function(a) {
        this.C = a;
        if (a = a.jo) this.Jv = this.Ea.ui(a);
        if (this.Vt) {
            a = 0;
            for (var b; b = this.ge[a++];) {
                var c = !!this.fe[b.Zf()];
                if (b.isEnabled() != c) {
                    for (; this.ca.hasChildNodes();) this.ca.removeChild(this.ca.lastChild);
                    this.Pl();
                    this.al();
                    break
                }
            }
        }
        this.Qr = Yj("gsst_h");
        this.Ph = Yj("gsst_f");
        this.Ph.dir = "ltr";
        this.Ph.appendChild(this.Qr);
        this.G.qb(13, C(this.zt, this))
    };
    f.Tj = function(a) {
        this.Ra != a && (this.ca.dir = this.Ra = a, this.Ri())
    };
    f.na = function() {
        return this.ca
    };
    f.px = function(a) {
        (a = this.fe[a]) && a.style && (a.style.display = "")
    };
    f.Wm = function(a) {
        (a = this.fe[a]) && a.style && (a.style.display = "none")
    };
    f.Ri = function() {
        this.Rh && (this.fe[this.Rh].className = "gsst_a", this.Rr.Hc(), this.Rh = null)
    };
    f.mf = function(a) {
        a.Ti = "rtl" == this.Ra ? "left" : "right";
        a.kn = !1
    };
    f.Ks = function() {
        return this.Ph
    };
    f.vd = function() {
        return this.C.Qm || this.pd == this.Ra ? this.Jv : null
    };
    f.bg = function() {
        this.Ri()
    };
    f.ze = function() {
        return Ql
    };
    var Pl = function(a, b) {
        return b.Ga() - a.Ga()
    };
    f = Ol.prototype;
    f.zt = function() {
        this.$m != this.Rh && this.Ri()
    };
    f.Pl = function() {
        for (var a, b = 0, c; c = this.ge[b++];)
            if (c.isEnabled()) {
                a = !0;
                var d = Wj("a", "gsst_a");
                this.bs(d, c);
                d.appendChild(c.na());
                this.ca.appendChild(d)
            }
        this.ca.style.display = a ? "" : "none"
    };
    f.Rq = function() {
        this.$m = null
    };
    f.al = function() {
        this.fe = {};
        for (var a = 0, b; b = this.ge[a++];)
            if (b.isEnabled()) {
                var c = b.Zf(),
                    d = b.na().parentNode;
                d.onclick = C(b.zd, b);
                d.onmouseover = function() {
                    this.$m = c
                };
                d.onmouseout = this.Rq;
                this.fe[c] = d;
                b.Hi && (b = b.Hi(), b.nn && this.Wm(c), (b = b.dC) && !this.L.ck(d, b) && (d.title = b))
            }
    };
    f.bs = function(a, b) {
        a.href = "javascript:void(0)";
        Mj && (a.tabIndex = 0);
        a.onkeydown = function(c) {
            c = c || window.event;
            var d = c.keyCode;
            if (13 == d || 32 == d) b.zd(c), this.F.ps(), ek(c)
        }
    };
    var Ql = sj++;
    var Rl = function(a, b) {
        this.F = a;
        this.bf = b;
        this.mc()
    };
    E(Rl, Hl);
    Rl.prototype.na = function() {
        return this.ca
    };
    Rl.prototype.v = function() {
        return 0
    };
    Rl.prototype.aa = function(a, b, c) {
        this.Ye.innerHTML = a;
        this.gf = b;
        c && !this.Va && (this.Va = fk(this.Xe), this.Va.onclick = C(function(d) {
            this.F.qf();
            this.F.Bg(this.gf);
            this.bf.search(this.gf, 9);
            return ek(d)
        }, this));
        c ? (this.Va.innerHTML = c + " &raquo;", this.Va.style.display = "") : this.Va && (this.Va.style.display = "none")
    };
    Rl.prototype.mc = function() {
        this.ca = Yj();
        this.ca.className = "gsq_a";
        var a = Xj();
        this.ca.appendChild(a);
        this.Xe = a.insertRow(-1);
        a = this.Xe.insertCell(-1);
        a.style.width = "100%";
        this.Ye = Wj("span");
        a.appendChild(this.Ye)
    };
    var Sl = function() {
        function a(k) {
            return new Rl(e, k)
        }

        function b(k, l) {
            l.aa(k.xi(), k.Bb(), g)
        }

        function c(k, l, n) {
            n.search(l.Bb(), 1)
        }

        function d() {
            return 0
        }
        var e, g, h = {
            va: function(k, l) {
                l.addRule(".gsq_a", "padding:0")
            },
            O: function(k) {
                e = k.get(118, h)
            },
            K: function(k) {
                g = k.oi ? k.ri : ""
            },
            v: function() {
                return 152
            },
            sa: function() {
                return {
                    zh: a,
                    aa: b,
                    zd: c,
                    Mi: Cj,
                    Ii: d
                }
            }
        };
        return h
    };
    var Tl = function() {
        var a = {
                Vp: "oq",
                $p: "gs_l"
            },
            b, c, d, e, g, h, k, l, n, v, u, F, w, Q, V, N = !1,
            fa, B, y, I, H = !1,
            O = function(q) {
                var z = !0;
                void 0 != q && (z = q == c.eg, c.eg = q);
                b ? z || b.K(c) : (b = Bk().zi(g, d, sa, c.$k), b.install(c))
            },
            R = function(q) {
                b.Qb(q)
            },
            J = function(q) {
                return q + (0 <= q.indexOf("?") ? "&" : "?") + b.ht()
            },
            ha = function(q) {
                id(window.location, q)
            },
            Z = function() {
                B && B()
            },
            oa = function() {
                return c.ug
            },
            Ga = function(q, z, x, P, m) {
                d = q;
                g = z;
                y = P;
                I = x || "partner-generic";
                (n = m.brandingPlaceholder) && z.setAttribute("placeholder", n);
                je(g, "gsc-input");
                var p =
                    m.onRenderCallback;
                p && (B = function() {
                    try {
                        p()
                    } catch (Y) {}
                });
                c = Sa();
                Ia(c, m);
                q = new Ml;
                wa(y, c, q);
                O();
                Ha(q, m.clearToolTitle);
                m.searchButton && b.rq(m.searchButton, 12)
            },
            Ha = function(q, z) {
                q = q.na();
                var x = q.parentElement;
                x && (x.setAttribute("title", z), "button" != (x.getAttribute("role") || null) && x.setAttribute("role", "button"), q.setAttribute("aria-hidden", !0))
            },
            Sa = function() {
                var q = ka.zi(),
                    z = I;
                q.rh = z;
                q.ug = z;
                q.ul = "cse";
                q.WA = !0;
                q.wx = {
                    partnerid: y
                };
                q.Yl = !0;
                q.$i = "gsc-input";
                q.tp = "gsc-completion-container";
                q.rp = "gsc-completion-selected";
                w && (q.Vl = g.id, q.Xl = "gsc-input-hover", q.Wl = "gsc-input-focus");
                q.ld = [-1, 0, 0];
                q.Pm = !0;
                q.xc = !0;
                q.dg = !0;
                q.Um = !0;
                q.spellcheck = !1;
                q.mk = tj([0, 34]);
                return q
            },
            wa = function(q, z, x) {
                var P = new Dl;
                P.Ma(152, Sl());
                P.Ma(153, mk());
                P.Ma(160, x);
                P.set(173, new Ol);
                k && P.Ma(152, ok(k, l, n));
                P.Ma(156, pk(q));
                P.set(582, Ck());
                P.Ma(156, Ek());
                P.Ma(311, Dk());
                v && P.Ma(160, new Hk(v));
                P.Ma(122, sk(u, F));
                z.$k = P;
                V && (q = z.$k, q.set(419, new Fl), q.Ma(156, new Kl), q.Ma(151, new Ll), q.Ma(152, Jl()))
            },
            Ia = function(q, z) {
                if (Q = !!z.useKennedyLookAndFeel) w &&
                    (q.Vl = g.parentNode.id, q.Xl = "gsc-input-box-hover", q.Wl = "gsc-input-box-focus"), q.ld = [3, -1, 2], q.dg = !0;
                z.interfaceLanguage && (q.Ge = z.interfaceLanguage);
                z.disableAutoCompletions && (q.eg = !0);
                u = parseInt(z.maxSuggestions, 10);
                0 <= u || (u = 10);
                F = parseInt(z.maxPromotions, 10);
                0 <= F || (F = 3);
                q.lk = "gsnos,n=" + (u + 3);
                k = z.brandingImageUrl;
                l = z.brandingImage2xUrl;
                k && (v = z.brandingImageStyle + " url(" + k + ")", q.ih = z.backgroundTextIndent);
                var x = z.styleOptions;
                if (x) {
                    var P = x.xOffset || 0,
                        m = x.yOffset || 0,
                        p = x.widthOffset || 0,
                        Y = x.fixedWidth;
                    N = !!x.allowWordWrapping;
                    var G = q.ld;
                    G[0] += m;
                    G[1] += P;
                    G[2] += p;
                    q.El = Y;
                    q.sp = x.xAlign;
                    x.positionFixed && (q.ve = "fixed")
                }
                V = !!z.enableSpeech
            },
            ma = function() {},
            sa = {
                K: O,
                install: function(q, z, x, P, m) {
                    Ga(q, z, void 0 === m ? null : m, x, P);
                    if (P.isLoggingWithHiddenFormFields) {
                        h = {};
                        for (var p in a) q = a[p], h[q] = b.jq(d, q)
                    } else H = !0, d && (d.addEventListener ? d.addEventListener("submit", ma, !1) : d.attachEvent && d.attachEvent("onsubmit", ma))
                },
                tu: function(q, z, x, P) {
                    w = x;
                    Ga(q, z, w.Em(), w.Cm() || "", P);
                    P.enableAsynchronousLogging && (H = !0)
                },
                QA: function(q,
                    z, x, P, m) {
                    Ga(null, z, void 0 === m ? null : m, x, P);
                    H = !0;
                    e = q
                },
                Qb: R,
                ta: function() {
                    return b.ta()
                },
                BA: oa,
                b: function(q, z) {
                    q != g.value && (w && window.console && window.console.log && window.console.log("Programmatically setting input.value? Please consider using prefillQuery() or execute() from google.search.SearchControl instead."), q = g.value, R(q));
                    if (q && !lj.test(q)) {
                        fa = z;
                        z = b.Ci(fa);
                        if (h) {
                            var x = a.Vp;
                            h[x] && (h[x].value = z[x]);
                            x = a.$p;
                            h[x] && (h[x].value = z[x])
                        }
                        w ? (q != b.ta() && b.Qb(q), H ? w.submit() : w.Ax(z)) : e ? e(z) : d && (d.fireEvent &&
                            document.createEventObject ? (q = document.createEventObject(), d.fireEvent("onsubmit", q) && d.submit()) : d.dispatchEvent && document.createEvent ? (q = document.createEvent("HTMLEvents"), q.initEvent("submit", !0, !0), d.dispatchEvent(q) && d.submit()) : d.onsubmit && 0 == d.onsubmit() || d.submit());
                        fa = null
                    }
                },
                c: ha,
                d: function(q) {
                    ha(J(q))
                },
                e: J,
                f: oa,
                o: Z,
                p: Z,
                r: function(q) {
                    w ? Q ? (q.addRule(".gssb_a", "padding:0 9px"), q.addRule(".gsib_a", "padding:5px 9px 4px 9px"), q.addRule(".gscb_a", "line-height:27px")) : q.addRule(".gssb_a", "padding:0 7px") :
                        q.addRule(".gssb_a", "padding:0 2px");
                    q.addRule(".gssb_e", "border:0");
                    q.addRule(".gssb_l", "margin:5px 0");
                    q.addRule("input.gsc-input::-webkit-input-placeholder", "font-size:14px");
                    q.addRule("input.gsc-input:-moz-placeholder", "font-size:14px");
                    q.addRule("input.gsc-input::-moz-placeholder", "font-size:14px");
                    q.addRule("input.gsc-input:-ms-input-placeholder", "font-size:14px");
                    q.addRule("input.gsc-input:focus::-webkit-input-placeholder", "color:transparent");
                    q.addRule("input.gsc-input:focus:-moz-placeholder",
                        "color:transparent");
                    q.addRule("input.gsc-input:focus::-moz-placeholder", "color:transparent");
                    q.addRule("input.gsc-input:focus:-ms-input-placeholder", "color:transparent");
                    q.addRule(".gssb_c .gsc-completion-container", "position:static");
                    q.addRule(".gssb_c", "z-index:5000");
                    q.addRule(".gsc-completion-container table", "background:transparent;font-size:inherit;font-family:inherit");
                    q.addRule(".gssb_c > tbody > tr,.gssb_c > tbody > tr > td,.gssb_d,.gssb_d > tbody > tr,.gssb_d > tbody > tr > td,.gssb_e,.gssb_e > tbody > tr,.gssb_e > tbody > tr > td",
                        "padding:0;margin:0;border:0");
                    q.addRule(".gssb_a table,.gssb_a table tr,.gssb_a table tr td", "padding:0;margin:0;border:0");
                    N && q.addRule(".gssb_a,.gssb_a td", "white-space:normal")
                },
                x: function() {
                    w && w.Zb()
                }
            };
        var ka = El();
        return sa
    };
    var Ul = fg(ih.blank),
        Vl = Wc(ih.next),
        Wl = function(a) {
            var b = a.u.Jm();
            this.level = a.Oc;
            this.T = wh({
                text: ah(b)
            });
            this.zb = null;
            this.Pa = a.u;
            this.context = a
        },
        Xl = function() {
            this.root = null;
            this.Ha = {
                width: 112,
                height: 84
            };
            this.Pc = null
        };
    Xl.prototype.Fg = function(a) {
        this.Pc = a
    };
    var Yl = function() {
        this.kp = this.input = null;
        this.la = 1;
        this.pf = !1;
        this.pa = null;
        this.mb = "standard";
        this.Jf = !1;
        this.he = -1;
        this.Vb = !0;
        this.setAutoComplete = this.No;
        this.setSearchFormRoot = this.gp
    };
    f = Yl.prototype;
    f.gp = function(a) {
        this.kp = Qh(a)
    };
    f.Fw = function(a) {
        this.la = 1 == a || 2 == a ? a : 1
    };
    f.No = function(a) {
        this.pf = a
    };
    f.ex = function(a) {
        this.Jf = a
    };
    f.Bw = function(a) {
        this.Vb = a
    };
    f.hx = function(a) {
        this.he = a
    };
    f.ds = function(a, b, c, d) {
        b = void 0 === b ? "q" : b;
        this.mb = "searchbox-only";
        this.pa = {
            Oj: a,
            Gv: "" == b ? "q" : b,
            cv: void 0 === c ? !1 : c,
            lv: void 0 === d ? "?" : d
        }
    };
    f.cs = function() {
        this.mb = "searchresults-only"
    };
    var $l = function(a, b, c) {
            this.Gb = c;
            this.u = a;
            this.ea = null;
            this.u.ax(b, b.pg, [this]);
            this.u.Kw(b, Zl.prototype.rm);
            this.u.tb(b.Pd);
            this.u.sb(b.Eb);
            this.ua = this.De = this.root = null;
            this.Zi = !0;
            this.ia = [];
            this.Id = this.me = this.ab = this.ha = null;
            this.Oc = 0;
            this.Md = !1
        },
        Zl = function(a) {
            this.fh = this.Pd = "small";
            this.la = 1;
            this.Ud = this.input = this.root = null;
            this.Tb = 500;
            this.qu = rh(this, Zl.prototype.fv, [null]);
            this.ru = rh(this, Zl.prototype.gv, [null]);
            this.Hp = this.Ip = this.bn = this.cn = this.Jp = this.dn = this.tk = null;
            this.Cd = 0;
            this.nh = !1;
            this.Eb = "_blank";
            this.mb = "standard";
            this.Vd = this.oa = null;
            this.vn = 0;
            this.Ja = this.qc = this.Re = this.fb = this.$c = this.ub = null;
            this.Qn = !1;
            this.pc = null;
            this.hd = this.Wd = 0;
            this.da = {};
            this.da[X.kb] = {
                enabled: !0,
                className: "gsc-adBlock",
                $a: "",
                Jg: {
                    lines: 2
                }
            };
            this.da[X.Qa] = {
                enabled: !1,
                className: "gsc-adBlockVertical",
                $a: "gsc-thinWrapper",
                Jg: {}
            };
            this.da[X.Ca] = {
                enabled: !1,
                className: "gsc-adBlockBottom",
                $a: "",
                Jg: {}
            };
            this.H = [];
            if (a)
                for (var b = 0; b < a.length; b++) {
                    var c = new $l(a[b], this, new Xl);
                    this.H.push(c)
                }
            this.Zj("tab");
            this.Hk = {};
            this.Vb = !1;
            this.je = !0;
            this.Mb = new Vf
        };
    Zl.prototype.Gj = !1;
    var X = {
            kb: "top",
            Qa: "right",
            Ca: "bottom"
        },
        am = ih["no-results"],
        bm = {},
        cm = (bm[Ui.Xg] = {
            colorBackground: "#FDE5FF",
            colorTitleLink: "#0568CD",
            colorText: "#000",
            colorDomainLink: "#CC7A9F",
            fontFamily: "Arial"
        }, bm[Ui.$g] = {
            colorBackground: "#EEFFE5",
            colorBorder: "#A9DA92",
            colorTitleLink: "#06C",
            colorText: "#454545",
            colorDomainLink: "#8D5FA7",
            fontFamily: "Trebuchet MS",
            fontSizeDescription: "14"
        }, bm[Ui.Zg] = {
            colorBackground: "#F2F0E6",
            colorTitleLink: "#950000",
            colorText: "#333",
            colorDomainLink: "#A25B08",
            fontFamily: "Georgia",
            fontSizeDescription: "14",
            fontSizeDomainLink: "12"
        }, bm[Ui.bh] = {
            colorBackground: "#F0F0F6",
            colorBorder: "#CCC",
            colorTitleLink: "#06C",
            colorDomainLink: "#008000",
            fontFamily: "Verdana"
        }, bm[Ui.ah] = {
            colorBackground: "#EEE",
            colorBorder: "#CCC",
            colorTitleLink: "#000",
            colorText: "#444",
            colorDomainLink: "#333",
            fontSizeDescription: "14",
            fontFamily: "Arial"
        }, bm[Ui.Ak] = {
            colorBackground: "#fff",
            colorBorder: "#ddd",
            colorTitleLink: "#1155CC",
            colorText: "#222",
            colorDomainLink: "#093",
            fontSizeDescription: "13",
            fontFamily: "Arial, sans-serif"
        }, bm),
        dm = {},
        em = (dm[Ui.Xg] =
            cm[Ui.Xg], dm[Ui.nz] = cm[Ui.Xg], dm[Ui.$g] = cm[Ui.$g], dm[Ui.pz] = cm[Ui.$g], dm[Ui.Zg] = cm[Ui.Zg], dm[Ui.oz] = cm[Ui.Zg], dm[Ui.bh] = cm[Ui.bh], dm[Ui.rz] = cm[Ui.bh], dm[Ui.ah] = cm[Ui.ah], dm[Ui.qz] = cm[Ui.ah], dm[Ui.Ak] = cm[Ui.Ak], dm);
    Zl.prototype.vq = function() {
        var a = this;
        return function() {
            a.Gj && (a.vo(), a.Gj = !1)
        }
    };
    Zl.prototype.Vr = function(a, b) {
        this.wc = !0;
        this.bd = a;
        if (b) {
            a = this.da[X.kb];
            var c = this.da[X.Qa],
                d = this.da[X.Ca];
            void 0 != b.includeVerticalAds && (c.enabled = b.includeVerticalAds);
            void 0 != b.includeSideAds && (c.enabled = b.includeSideAds);
            void 0 != b._includeBottomAds_ && (d.enabled = b._includeBottomAds_);
            void 0 != b.iframes && (this.$l = b.iframes);
            b.channel && (this.kf = b.channel);
            b.clientIP && (this.Ik = b.clientIP);
            "off" == b.isSafeSearchActive ? this.ke = "low" : "active" == b.isSafeSearchActive ? this.ke = "high" : b.safe && (this.ke = b.safe);
            b.userAgent && (this.Jk = b.userAgent);
            b.adStyle && (this.Fk = b.adStyle);
            b.cseGoogleHosting && (this.lf = b.cseGoogleHosting);
            if (d = b.adtest || b.debug) this.gh = d;
            void 0 != b.numTopAds && (a.Pb = Math.max(0, Math.min(4, b.numTopAds)), a.enabled = a.Pb ? !0 : !1);
            void 0 != b.numSideAds && (c.Pb = Math.max(0, Math.min(8, b.numSideAds)), c.enabled = c.Pb ? !0 : !1);
            "noTop" == b.layout && (a.enabled = !1, c.enabled = !0);
            "personalizedAds" in b && (this.Vn = b.personalizedAds)
        }(function(e, g, h, k) {
            e[k] = e[k] || function() {
                (e[k].q = e[k].q || []).push(arguments)
            };
            e[k].t =
                Number(new Date);
            var l = g.createElement(h);
            g = g.getElementsByTagName(h)[0];
            l.async = 1;
            l.src = "//cse.google.com/adsense/search/async-ads.js";
            g.parentNode.insertBefore(l, g)
        })(window, document, "script", "_googCsa");
        window._googCsa("jsLoadedCallback", this.vq())
    };
    Zl.prototype.le = function(a, b, c) {
        b || (b = new Xl);
        b.Ha && a.Wo(b.Ha);
        b = new $l(a, this, b);
        c ? (c.ia.push(b), b.Id = c, b.Oc = c.Oc + 1) : (this.H.push(b), b.Oc = 0);
        this.Pe(a) && (this.Qt = !0);
        a.Qe = "gsc"
    };
    Zl.prototype.rl = function(a) {
        a.Gb.root && (a.Zi = !1, T(a.Gb.root, "gsc-resultsRoot"), Ih(a.Gb.root, "gsc-resultsbox-visible"), T(a.Gb.root, "gsc-resultsbox-invisible"));
        var b = a.Gb.root ? a.Gb.root : M("gsc-resultsRoot");
        a.root = b;
        a.u.Sg && T(b, "gsc-resultsRoot-" + a.u.Sg);
        2 == this.la && (a.ha.zb = b);
        a.De = wh({
            className: "gsc-stats"
        });
        a.ua = M();
        a.ua.onmousedown = qh(this, Zl.prototype.Zq);
        a.ua.onclick = qh(this, Zl.prototype.Yq);
        a.ea = M("gsc-expansionArea");
        L(a.ua, a.ea);
        a.Zi && L(this.Qd, b);
        L(b, a.ua)
    };
    var fm = /^https?:\/\/www\.google\.com\/url\?/;
    f = Zl.prototype;
    f.Zq = function(a) {
        this.Vb && this.Fo(this.Ql(a));
        return !0
    };
    f.Yq = function(a) {
        var b = this.Ql(a);
        this.Vb || this.Fo(b);
        b && window.setTimeout(function() {
            var c = b.getAttribute("data-ctorig");
            c && gd(b, c)
        }, 0);
        return !0
    };
    f.Ql = function(a) {
        a = a || window.event;
        for (a = a.target || a.srcElement; a && !(a.href && a.getAttribute("data-cturl") && a.getAttribute("data-ctorig"));) a = a.parentNode;
        return a
    };
    f.Fo = function(a) {
        if (a) {
            var b = a.getAttribute("data-cturl");
            b && fm.test(b) && gd(a, b)
        }
    };
    f.ll = function(a) {
        var b = wh({
            uc: !0
        });
        T(b, "gsc-refinementBlockInvisible");
        this.hb && L(this.hb, b);
        a.ab = b;
        this.kr(a)
    };
    f.jr = function(a) {
        return xh(a)
    };
    f.sl = function(a) {
        var b = xh();
        a = this.Mb.ib(a);
        fd(b, a);
        a = document.createDocumentFragment();
        a.appendChild(b);
        return a
    };
    f.kr = function(a) {
        var b = a.ha,
            c = this.yh(a, a);
        c.level += 1;
        "tab" == this.lo ? th(c.T, vh(ih["all-results-short"])) : th(c.T, this.jr(ih["all-results-long"]));
        a.ha = b;
        a.me = c;
        a.me.zb = a.ha.zb
    };
    f.Zj = function(a) {
        "link" == a ? (this.ko = "gsc-refinementHeader", this.sg = "gsc-refinementhInactive", this.Dj = "gsc-refinementhActive", this.lo = a, this.Ej = "gsc-refinementsAreaInvisible", this.mo = "gsc-refinementsArea") : "tab" == a && (this.ko = "gsc-tabHeader", this.sg = "gsc-tabhInactive", this.Dj = "gsc-tabhActive", this.lo = a, this.Ej = "gsc-tabsAreaInvisible", this.mo = "gsc-tabsArea")
    };
    f.yh = function(a, b) {
        var c = new Wl(a);
        a.ha = c;
        Gh(c.T, rh(this, this.ce, [c]));
        a = "gs-spacer";
        od && (a += " gs-spacer-opera");
        b ? (b = b.ab, T(c.T, this.ko), T(c.T, this.sg)) : (b = this.ub, T(c.T, "gsc-tabHeader"), T(c.T, "gsc-tabhInactive"));
        T(c.T, "gsc-inline-block");
        b && (L(b, c.T), a = xh(" ", a), L(b, a));
        return c
    };
    f.In = function(a) {
        if (1 != a.ia.length) {
            var b = a.ia.shift();
            if (b) {
                a.ia.push(b);
                a = b.ha.T;
                var c = a.nextSibling;
                a.parentNode && (L(a.parentNode, a), c && L(a.parentNode, c), b = b.ha.zb, b.parentNode && L(b.parentNode, b))
            }
        }
    };
    f.Bm = function(a) {
        for (var b = 0; b < this.pc.length; ++b)
            if (this.pc[b].key == a) return b;
        return null
    };
    f.iv = function(a) {
        this.Ja && (this.Ja.className = "gsc-option-menu-invisible");
        this.Wd != a && (this.Vj(a), this.Gg(a, this.D.Pa), this.Sa())
    };
    f.nw = function(a) {
        a = a || window.event;
        this.Ja.className = "gsc-option-menu";
        this.Ja.style.top = Ph(this.Ja, this.qc) + Ph(this.Re, this.qc) - Ph(Nh(this.Ja, "div", "gsc-option-menu-item-highlighted")[0], this.qc) + "px";
        a.cancelBubble = !0;
        a.stopPropagation && a.stopPropagation()
    };
    f.Mr = function(a) {
        a = a || window.event;
        var b;
        if (b = this.Ja) {
            b = this.Ja;
            for (a = a.target || a.srcElement; a && a != b;) a = a.parentNode;
            b = a != b
        }
        b && (this.Ja.className = "gsc-option-menu-invisible")
    };
    var gm = function(a) {
        a = a || window.event;
        a.cancelBubble = !0;
        a.stopPropagation && a.stopPropagation()
    };
    f = Zl.prototype;
    f.vr = function() {
        var a = M("gsc-orderby-invisible"),
            b = wh({
                text: ih["order-results-by"],
                className: "gsc-orderby-label",
                uc: !0
            });
        T(b, "gsc-inline-block");
        L(a, b);
        this.qc = M("gsc-option-menu-container");
        T(this.qc, "gsc-inline-block");
        L(a, this.qc);
        b = M("gsc-selected-option-container");
        T(b, "gsc-inline-block");
        this.Re = M("gsc-selected-option");
        var c = M("gsc-option-selector");
        L(b, this.Re);
        L(b, c);
        b.onclick = qh(this, this.nw);
        L(this.qc, b);
        this.Ja = M("gsc-option-menu-invisible");
        for (b = 0; b < this.pc.length; ++b) {
            var d = this.pc[b].label;
            c = M("gsc-option-menu-item");
            d = wh({
                text: d,
                className: "gsc-option",
                uc: !0
            });
            L(c, d);
            L(this.Ja, c);
            d.onclick = rh(this, Zl.prototype.iv, [b])
        }
        L(this.qc, this.Ja);
        this.Ja.onclick = gm;
        b = qh(this, this.Mr);
        this.root.attachEvent ? (this.root.attachEvent("onmousedown", b), document.attachEvent("onmousedown", b)) : document.addEventListener && document.addEventListener("mousedown", b, !0);
        return a
    };
    f.xr = function() {
        var a = M("gsc-richsnippet-popup-box");
        T(a, "gsc-richsnippet-popup-box-invisible");
        return a
    };
    f.Za = function(a, b, c) {
        c = void 0 === c ? [] : c;
        Gh(a, rh(this, b, c))
    };
    f.Gf = function(a, b) {
        var c = null,
            d = null;
        b ? b.la ? (this.la = b.la, c = b.input, d = b.kp, this.mb = b.mb, this.pf = b.pf, this.Jf = b.Jf, this.he = b.he, "searchbox-only" == this.mb && (this.pa = b.pa)) : this.la = 1 : this.la = 1;
        this.root = M(this.pa ? "gsc-control-searchbox-only" : "gsc-control");
        this.root.dir = Zg;
        var e = Qh(a);
        e && th(e, this.root);
        b && b.Vb && (this.Vb = !0, this.W && this.W.fp(this.Cn()), this.V && this.V.fp(this.Cn()));
        null != c ? (this.input = c, this.input.onkeyup = this.qu, this.input.onpaste = this.ru, this.je = !1) : (this.je = !0, null == d ? d = this.root :
            d.dir = Zg, this.Ud = new hm(!0, d, {
                Qg: !0,
                Jz: this.Vb,
                Lk: !0
            }), this.Ud.Yw(this, this.Zb), this.input = this.Ud.input, d = this.Ud.Pj, e = {
                clearToolTitle: ih["clear-tool-title"],
                interfaceLanguage: "en",
                searchButton: this.Ud.Oe,
                useKennedyLookAndFeel: !0
            }, this.Vb && (e.brandingImageUrl = im, e.brandingImage2xUrl = jm, e.brandingImageStyle = km, e.brandingPlaceholder = ih["custom-search"], e.backgroundTextIndent = 48), this.pf ? this.hh && (e.maxSuggestions = this.hh.maxCompletions, e.maxPromotions = this.hh.maxPromotions) : e.disableAutoCompletions = !0, this.pa && (e.enableAsynchronousLogging = !Sh(Rh(this.pa.Oj))), e.enableSpeech = b ? b.Jf : !1, this.Vd = Tl(), this.Vd.tu(d, this.input, this, e), e.useKennedyLookAndFeel && T(d, "gsc-search-box-tools"));
        c || "searchresults-only" != this.mb || (this.Ud.Pj.style.display = "none", this.root.style.visibility = "hidden");
        if (!this.pa) {
            this.Qd = M("gsc-resultsbox-invisible");
            this.Il && (this.Sd = this.xr(), L(this.Qd, this.Sd));
            this.qa = this.Sn ? M("gsc-results-wrapper-overlay") : M("gsc-results-wrapper-nooverlay");
            L(this.root, this.qa);
            this.Sn &&
                (this.Fd = M("gsc-modal-background-image"), L(this.root, this.Fd), this.Za(this.Fd, Zl.prototype.Zb), this.Rd = M("gsc-results-close-btn"), L(this.qa, this.Rd), this.Za(this.Rd, Zl.prototype.Zb));
            if (2 == this.la)
                for (this.ub = M("gsc-tabsAreaInvisible"), b = M("gsc-positioningWrapper"), L(b, this.ub), L(this.qa, b), 1 < this.H.length && this.Zj("link"), this.hb = M(this.Ej), b = M("gsc-positioningWrapper"), L(b, this.hb), L(this.qa, b), this.Rg && (b = M("gsc-refinementsGradient"), L(this.hb, b)), b = 0; b < this.H.length; b++) this.yh(this.H[b]);
            this.$c =
                M("gsc-above-wrapper-area-invisible");
            L(this.qa, this.$c);
            b = yh(0, 0, "gsc-above-wrapper-area-container");
            L(this.$c, b);
            b = Ah(b, 0);
            c = zh(b, "gsc-result-info-container");
            this.Od = M("gsc-result-info-invisible");
            L(c, this.Od);
            this.Qn && 2 == this.la && (b = zh(b, "gsc-orderby-container"), this.fb = this.vr(), L(b, this.fb), this.fb.className = "gsc-orderby-invisible");
            this.wb = this.qa;
            if (this.wc) {
                var g = this.qa;
                this.wb = M("gsc-wrapper");
                this.ic(function(h, k) {
                    k.R = M("gsc-adBlockInvisible");
                    h == X.kb ? L(this.wb, k.R) : h == X.Qa && L(g, k.R)
                });
                L(g, this.wb)
            }
            L(this.wb, this.Qd);
            for (b = 0; b < this.H.length; b++) this.rl(this.H[b]), c = this.H[b].ha.zb, 2 == this.la && c && (T(c, "gsc-tabData"), T(c, "gsc-tabdInactive"));
            if (2 == this.la && 0 < this.H.length) {
                this.D = this.H[0].ha;
                this.ee(this.D);
                if (b = this.H[0].ha.zb) Ih(b, "gsc-tabdInactive"), T(b, "gsc-tabdActive");
                this.fb && (this.Vj(this.hd), this.Gg(this.hd, this.D.Pa))
            }
        }
        a && (a = this.Is()) && 300 > a && T(this.root, "gsc-narrow")
    };
    f.Vj = function(a) {
        if (this.fb) {
            var b = Nh(this.Ja, "div", "gsc-option-menu-item-highlighted")[0];
            b && Ih(b, "gsc-option-menu-item-highlighted");
            this.Wd = a;
            T(Nh(this.Ja, "div", "gsc-option")[this.Wd].parentNode, "gsc-option-menu-item-highlighted");
            this.Re && (a = this.Re, b = this.pc[this.Wd].label, void 0 != a.textContent ? a.textContent = b : a.innerText = b)
        }
    };
    f.Gg = function(a, b) {
        b instanceof Ii && b.ae("restrict-extended", {
            sort: this.pc[a].key
        })
    };
    f.jp = function(a) {
        switch (a) {
            case 350:
            case 500:
            case 700:
                this.Tb = a;
                break;
            default:
                this.Tb = 500
        }
    };
    f.Pe = function(a) {
        return "web" == a.jb && a.M ? !1 : !0
    };
    f.ee = function(a) {
        1 == a.level ? a.T.onclick ? (Gh(a.T, null), Ih(a.T, this.sg), T(a.T, this.Dj)) : (this.Za(a.T, this.ce, [a]), Ih(a.T, this.Dj), T(a.T, this.sg)) : a.T.onclick ? (Gh(a.T, null), Ih(a.T, "gsc-tabhInactive"), T(a.T, "gsc-tabhActive")) : (this.Za(a.T, this.ce, [a]), Ih(a.T, "gsc-tabhActive"), T(a.T, "gsc-tabhInactive"))
    };
    f.ce = function(a, b) {
        if (this.D != a) {
            this.dk(!0);
            var c = this.D.zb;
            c && (Ih(c, "gsc-tabdActive"), T(c, "gsc-tabdInactive"));
            this.ee(this.D);
            c = this.jc(this.D.context);
            var d = this.jc(a.context);
            1 == this.D.level && c != d && (T(c.ab, "gsc-refinementBlockInvisible"), this.ee(c.ha));
            this.D = a;
            c = this.D.Pa;
            this.ee(this.D);
            this.fb && this.Gg(this.Wd, this.D.Pa);
            1 == this.D.level && d.ha.T.onclick && this.ee(d.ha);
            this.Gn();
            d = null;
            !b && this.oa && this.oa.isEnabled() && (d = this.oa.getState(), this.ip(a, d));
            if (a = this.D.zb) T(a, "gsc-tabdActive"),
                Ih(a, "gsc-tabdInactive");
            var e = (a = b ? b.query : this.He) && a == c.Mc;
            b && (e = e && b.page == c.Rf());
            if (e) {
                d && (d["gsc.page"] = c.Rf(), this.oa.pushState(d));
                if (!this.Fp(c.Mc, c.Rf()) || od && b) this.lc = c.lc, this.ki(c.Mc, c.Rf());
                this.D.context.Bn || (this.lp(this.D.context), this.Ol(c), this.fb && this.Bp())
            } else a && this.Ll(a, b && b.page, null, d)
        }
    };
    f.Fp = function(a, b) {
        (b = void 0 === b ? null : b) || (b = 1);
        var c = this.da[X.Ca];
        return !!this.ba && this.ba.query == a && (this.ba.adPage || 1) == b && !(c.enabled && this.D && this.D.context.ea != c.R.parentNode)
    };
    f.Ol = function(a) {
        var b = a.results,
            c = a.cursor;
        1 != this.la && (this.Od.id = "resInfo-" + a.kw);
        1 != this.la && 0 < b.length && c && c.resultCount && c.searchResultTime ? (a = vh(gh["result-info"](c.resultCount, c.searchResultTime)), th(this.Od, a), this.Od.className = "gsc-result-info") : (this.Od.className = "gsc-result-info-invisible", sh(this.Od))
    };
    f.Rl = function(a, b) {
        if (a.u.M)
            for (var c = 0; c < a.ia.length; c++) {
                var d = a.ia[c];
                if (d.u.Bd(b)) return d.ha
            }
        return null
    };
    f.up = function(a, b) {
        b = this.Rl(a, b);
        var c = !0;
        b || (b = a.ha, c = !1);
        this.ce(b);
        return c
    };
    f.ox = function(a, b) {
        ge(this.Sd, "");
        var c = M("gsc-richsnippet-popup-close-button");
        this.Za(c, function() {
            T(this.Sd, "gsc-richsnippet-popup-box-invisible")
        });
        var d = vh(ih["structured-data"] + " : "),
            e = M("gsc-richsnippet-popup-box-title-text");
        L(e, d);
        d = vh(decodeURIComponent(a));
        a = M("gsc-richsnippet-popup-box-title-url");
        L(a, d);
        d = M("gsc-richsnippet-popup-box-title");
        L(d, e);
        L(d, a);
        L(d, c);
        L(this.Sd, d);
        c = M("gsc-richsnippet-popup-box-contents");
        for (var g in b) this.Qv(g, b[g], c);
        L(this.Sd, c);
        Ih(this.Sd, "gsc-richsnippet-popup-box-invisible")
    };
    f.Qv = function(a, b, c) {
        var d = M("gsc-richsnippet-individual-snippet-box"),
            e = M("gsc-richsnippet-individual-snippet-key");
        a = a.charAt(0).toUpperCase() + a.slice(1);
        a = vh(a);
        L(e, a);
        a = M("gsc-richsnippet-individual-snippet-data");
        for (var g in b) this.so(g, b[g], a);
        L(d, e);
        L(d, a);
        L(c, d)
    };
    f.so = function(a, b, c) {
        var d = vh(a + "  :  ");
        a = M("gsc-richsnippet-individual-snippet-valueelem");
        if ("string" == typeof b) {
            var e = M("gsc-richsnippet-individual-snippet-keyelem");
            L(e, d);
            d = vh(b);
            L(a, d)
        }
        if ("object" == typeof b)
            for (var g in b) this.so(g, b[g], a);
        b = M("gsc-richsnippet-individual-snippet-keyvalue");
        e && L(b, e);
        L(b, a);
        L(c, b)
    };
    f.gk = function(a, b) {
        var c = this.root,
            d = a.ua;
        b ? (T(c, "gsc-loading-fade"), a.Bn = !0, T(d, "gsc-loading-resultsRoot"), 0 == a.Oc && this.hb && T(this.hb, "gsc-loading-refinementsArea")) : (Ih(c, "gsc-loading-fade"), a.Bn = !1, Ih(d, "gsc-loading-resultsRoot"), this.hb && Ih(this.hb, "gsc-loading-refinementsArea"))
    };
    f.Gn = function() {
        this.wc && (this.Pe(this.D.Pa) ? this.Ee() : this.Lh())
    };
    f.Mx = function(a) {
        var b = this.da[X.Ca];
        if (b.R.parentNode != a.ea) {
            var c = Nh(a.ea, "div", "gsc-cursor-box")[0];
            c && c.parentNode == a.ea ? a.ea.insertBefore(b.R, c) : a.ea && L(a.ea, b.R)
        }
    };
    f.Ee = function() {
        this.wc && this.ic(function(a, b) {
            b.R.className = "gsc-adBlockInvisible";
            b.enabled && b.$a && Ih(this.wb, b.$a)
        })
    };
    f.Lh = function() {
        this.wc && this.ic(function(a, b) {
            0 < b.Qc ? (b.R.className = b.className, b.$a && T(this.wb, b.$a)) : (b.R.className = "gsc-adBlockInvisible", b.$a && Ih(this.wb, b.$a))
        })
    };
    f.submit = function() {
        return this.pp()
    };
    f.pp = function(a) {
        this.input.value.length ? this.pa ? this.Pn(a) : this.Sa(void 0, void 0, a) : this.Zb();
        return !1
    };
    f.Ax = function(a) {
        return this.pp(a)
    };
    f.Pn = function(a) {
        var b = this.pa.lv;
        b = this.pa.Oj + (0 <= this.pa.Oj.indexOf(b) ? "&" : b) + encodeURIComponent(this.pa.Gv) + "=" + encodeURIComponent(this.input.value);
        (a = Oh(a)) && (b += "&" + a);
        this.pa.cv ? window.open(b) : id(window.location, b)
    };
    f.Dl = function() {
        this.ub && !this.Dx && 1 < this.H.length && (this.ub.className = "gsc-tabsArea");
        !this.hb || this.H[0] && 0 == this.H[0].ia.length || (this.hb.className = this.mo)
    };
    f.wq = function(a) {
        var b = this;
        return function(c, d) {
            if (d) {
                b.da[a].Qc = 1;
                var e = 0,
                    g = 0;
                b.ic(function(h, k) {
                    k.enabled && k.xo && (e++, k.Qc && g++)
                });
                e == g ? (window.clearTimeout(b.Jr), b.Lh()) : 1 == g && (b.Jr = window.setTimeout(function() {
                    b.Lh()
                }, 200))
            }
        }
    };
    f.Cm = function() {
        return null
    };
    f.Em = function() {
        return null
    };
    f.wj = function(a) {
        if (this.je) this.Vd.Qb(a);
        else if (this.input.value = a, this.input.onfocus) this.input.onfocus(null)
    };
    f.Cn = function() {
        var a = new Mh("gcsc-"),
            b = M(a.Jq);
        de(b, {
            role: "contentinfo",
            "aria-label": ih["cse-branding"]
        });
        var c = xh(ih["powered-by"], a.text);
        L(b, c);
        c = a.text + " " + a.Ev;
        var d = hh["google-custom-search"](),
            e = d.prefix;
        d = d.kk;
        e && L(b, xh(e.trim(), c));
        e = Bh("https://www.google.com/cse/static/images/1x/googlelogo_grey_46x15dp.png", null, null, a.ku);
        pd || (e.srcset = "https://www.google.com/cse/static/images/2x/googlelogo_grey_46x15dp.png 2x");
        de(e, {
            alt: "Google"
        });
        var g = Ch("https://cse.google.com/?ref=b&hl=en", null,
            "_BLANK");
        g.className = a.Xq;
        L(g, e);
        L(b, g);
        d && L(b, xh(d.trim(), c));
        return b
    };
    f.Kv = function(a) {
        a ? this.wj(a) : a = this.je ? this.Vd.ta() : this.input.value;
        return a
    };
    f.Vs = function() {
        return this.je ? this.Vd.ta() : this.input.value
    };
    f.Sa = function(a, b, c) {
        if (!this.pa) {
            var d = this.Fm(this.xl, this.wl);
            d && this.ce(d)
        }
        this.Ll(a, b, c)
    };
    f.Ll = function(a, b, c, d, e) {
        a = this.Kv(a);
        this.li(a, b, c, d, e)
    };
    f.li = function(a, b, c, d, e) {
        if (a.length) {
            this.nh = !1;
            this.He = a;
            this.kg = b || 1;
            this.oa && this.oa.isEnabled() && (d = d || this.oa.getState(), d["gsc.q"] = a, null == b ? delete d["gsc.page"] : d["gsc.page"] = b, this.fb && this.D.Pa instanceof Ii && (d["gsc.sort"] = this.pc[this.Wd].key), this.oa.pushState(d));
            this.lc = "qid=" + (new Date).getTime().toString(16) + Math.floor(1E7 * Math.random()).toString(16);
            d = !1;
            if (2 == this.la) d = this.Ml(this.D.context, this.D.zb, a, e, b, c) || d;
            else
                for (var g = 0; g < this.H.length; g++) d = this.Ml(this.H[g], this.H[g].root,
                    a, e, b, c) || d;
            c = this.Fp(a, b);
            d || !c ? this.ki(a, b) : this.Gn()
        }
    };
    f.rm = function() {
        return this.lc
    };
    f.ki = function(a, b) {
        b = void 0 === b ? null : b;
        var c = this.wc;
        c && (this.Qt && 1 == this.la || 2 == this.la && this.Pe(this.D.Pa)) && (c = !1);
        var d = this.zu();
        void 0 != d || this.bd || this.$l || (c = !1);
        2 != this.la && (this.da[X.Ca].enabled = !1);
        if (c)
            if (this.uw(), this.$l) {
                this.Ee();
                this.ic(function(h, k) {
                    ge(k.R, "")
                });
                this.ba = {};
                this.ba.pubId = this.bd || "google-coop";
                this.ba.gcsc = !0;
                d && (this.ba.cx = d);
                this.ba.hl = encodeURIComponent("en");
                this.ba.adtest = this.gh ? "on" : null;
                this.ba.channel = this.kf ? this.kf : null;
                this.ba.adsafe = this.ke || null;
                this.ba.query =
                    a;
                this.ba.adstyle = this.Fk ? this.Fk : null;
                b && (this.ba.adPage = b);
                this.ba.containerWidth = this.vn || this.qa.offsetWidth;
                void 0 !== this.Vn && (this.ba.personalizedAds = this.Vn);
                this.ba.cseGoogleHosting = "full" == this.lf || "iframe" == this.lf || "partner" == this.lf ? this.lf : "partner";
                this.ba.fontSizeDescription = "13";
                this.ba.fontSizeDomainLink = "13";
                this.ba.fontSizeTitle = "16";
                if ((b = vi()) && b in em) {
                    b = em[b];
                    for (var e in b) this.ba[e] = b[e]
                }
                google.ads && google.ads.search && google.ads && google.ads.search.Ads ? this.vo() : this.Gj = !0
            } else {
                e =
                    "";
                this.da[X.kb].enabled && (e = e + "w" + this.da[X.kb].Pb);
                this.da[X.Qa].enabled && (e = e + "n" + this.da[X.Qa].Pb);
                e = "http://www.google.com/" + (d ? "cse" : "search") + "?output=js&num=0&ie=utf8&oe=utf8&q=" + encodeURIComponent(a) + "&hl=" + encodeURIComponent("en") + "&ad=" + encodeURIComponent(e) + "&js=uds&" + this.lc;
                d && (e += "&cx=" + d);
                this.bd && (e += "&client=" + encodeURIComponent(this.bd));
                this.kf && (e += "&channel=" + encodeURIComponent(this.kf));
                this.gh && (e += "&adtest=on");
                this.Ik && (e += "&ip=" + encodeURIComponent(this.Ik));
                this.ke && (e +=
                    "&adsafe=" + encodeURIComponent(this.ke));
                this.Jk && (e += "&useragent=" + encodeURIComponent(this.Jk));
                b && (e += "&adpage=" + encodeURIComponent(b + ""));
                var g = this;
                window.google_afs_request_done = function(h) {
                    g.dv(h)
                };
                oh(e)
            }
    };
    f.ic = function(a) {
        for (var b in X)
            if (X.hasOwnProperty(b)) {
                var c = X[b];
                a.call(this, c, this.da[c])
            }
    };
    f.vo = function() {
        var a = [];
        this.ic(function(b, c) {
            c.Qc = 0;
            if (c.enabled && 0 < c.Pb) {
                c.xo = !0;
                c.Kj = {
                    container: c.R,
                    number: c.Pb,
                    callback: this.wq(b),
                    position: b
                };
                for (var d in c.Jg) null != c.Kj[d] && (c.Kj[d] = c.Jg);
                a.push(c.Kj)
            } else c.xo = !1;
            b == X.Ca && this.Mx(this.D.context);
            c.R.className = "gsc-adBlockNoHeight";
            c.R.style.height = "0px"
        });
        0 < a.length && new google.ads.search.Ads(this.ba, a)
    };
    f.Ml = function(a, b, c, d, e, g) {
        b = a.u;
        this.tk && this.tk(this, b, c);
        var h = !1;
        if (d) b.qo(d);
        else {
            d = {};
            if (g)
                for (var k in g) d[k] = g[k];
            for (k in this.Hk) d[k] || (d[k] = this.Hk[k]);
            this.bd && (d.cseclient = this.bd);
            (g = "web" === b.jb ? this.Jp : this.dn) && (c = g(this.ya || "", c) || c);
            h = b.Sa(c, d, e)
        }
        this.gk(a, h);
        return h
    };
    f.zu = function() {
        for (var a = 0; a < this.H.length; a++) {
            var b = this.H[a].u;
            if ("web" == b.jb && b.M && "cx" == b.Hh()) return b.Ih()
        }
        return null
    };
    f.dv = function(a) {
        window.google_afs_request_done = null;
        var b = this.da[X.kb],
            c = this.da[X.Qa];
        if (b.R)
            if (ge(b.R, ""), ge(c.R, ""), b.Qc = c.Qc = 0, !a || 1 > a.length) this.Ee();
            else {
                if (!this.ub)
                    for (var d = 0; d < this.H.length; d++) {
                        var e = this.H[d].u;
                        if (this.Pe(e)) {
                            this.Ee();
                            return
                        }
                    }
                b.R.className = b.className;
                e = !1;
                var g = document.createElement("h2");
                d = "";
                this.gh && (d = "*DEBUG* ");
                d += ih["ads-by-google"];
                void 0 != g.textContent ? g.textContent = d : g.innerText = d;
                L(b.R, g);
                var h = a.length;
                for (d = 0; d < h; d++) {
                    var k = a[d];
                    if ("text/wide" == k.type) {
                        b.Qc++;
                        var l = M("gsc-ad"),
                            n = Dh(k.url, k.line1, "_blank");
                        L(l, n);
                        n = document.createElement("cite");
                        var v = this.Mb.ib(k.visible_url);
                        fd(n, v);
                        L(l, n);
                        n = xh();
                        k = this.Mb.ib(k.line2);
                        fd(n, k);
                        L(l, n);
                        L(b.R, l)
                    } else c.enabled && (c.Qc++, e || (e = !0, T(this.wb, c.$a), c.R && (L(c.R, g.cloneNode(!0)), c.R.className = c.className)), l = M("gsc-ad"), n = Dh(k.url, k.line1, "_blank"), L(l, n), n = xh(), v = this.Mb.ib(k.line2 + "<br/>" + k.line3), fd(n, v), L(l, n), n = document.createElement("cite"), k = this.Mb.ib(k.visible_url), fd(n, k), L(l, n), c.R && L(c.R, l))
                }
                c.enabled &&
                    !e && Ih(this.wb, c.$a);
                this.ub && (e = this.D.Pa, this.Pe(e) && this.Ee())
            }
    };
    f.fv = function() {
        var a = this.input.value;
        a && "" != a && (this.Cd && window.clearTimeout(this.Cd), this.Cd = window.setTimeout(rh(this, Zl.prototype.Sa, [null]), this.Tb))
    };
    f.gv = function() {
        this.Cd && window.clearTimeout(this.Cd);
        this.Cd = window.setTimeout(rh(this, Zl.prototype.Sa, [null]), this.Tb)
    };
    f.uw = function() {
        var a = {};
        if (this.da[X.kb].enabled) switch (this.fh) {
            case "filtered_cse":
                a[X.kb] = 3;
                a[X.Qa] = 5;
                a[X.Ca] = 3;
                break;
            case "large":
                a[X.kb] = 2;
                a[X.Qa] = 4;
                a[X.Ca] = 2;
                break;
            default:
                a[X.kb] = 1, a[X.Qa] = 2, a[X.Ca] = 1
        } else switch (a[X.kb] = 0, this.fh) {
            case "filtered_cse":
                a[X.Qa] = 8;
                a[X.Ca] = 3;
                break;
            case "large":
                a[X.Qa] = 6;
                a[X.Ca] = 2;
                break;
            case "small":
                a[X.Qa] = 3;
                a[X.Ca] = 1;
                break;
            default:
                a[X.Qa] = 6, a[X.Ca] = 2
        }
        this.ic(function(b, c) {
            void 0 == c.Pb && (c.Pb = a[b])
        })
    };
    f.tb = function(a) {
        var b = parseInt(a, 10);
        if (!isNaN(b) && 0 < b && 8 >= b) this.Pd = a;
        else switch (a) {
            case "large":
                this.Pd = "large";
                break;
            case "filtered_cse":
                this.Pd = "filtered_cse";
                break;
            default:
            case "small":
                this.Pd = "small"
        }
        for (b = 0; b < this.H.length; b++) this.H[b].u.tb(a);
        this.fh = a
    };
    f.sb = function(a) {
        this.Eb = a;
        for (var b = 0; b < this.H.length; b++) this.H[b].u.sb(a)
    };
    f.Fg = function(a) {
        for (var b = 0; b < this.H.length; b++) this.H[b].Gb.Fg(a)
    };
    f.dk = function(a) {
        if (a) {
            if (this.Qd.className = "gsc-resultsbox-visible", this.qa && T(this.qa, "gsc-results-wrapper-visible"), this.Rd && T(this.Rd, "gsc-results-close-btn-visible"), this.Fd) {
                T(this.Fd, "gsc-modal-background-image-visible");
                var b = document.getElementsByTagName("body")[0];
                T(b, "gsc-overflow-hidden")
            }
        } else this.Qd.className = "gsc-resultsbox-invisible", this.qa && Ih(this.qa, "gsc-results-wrapper-visible"), this.Rd && Ih(this.Rd, "gsc-results-close-btn-visible"), this.Fd && (Ih(this.Fd, "gsc-modal-background-image-visible"),
            b = document.getElementsByTagName("body")[0], Ih(b, "gsc-overflow-hidden"));
        for (b = 0; b < this.H.length; b++)
            if (!this.H[b].Zi) {
                var c = this.H[b].root;
                a ? (Ih(c, "gsc-resultsbox-invisible"), T(c, "gsc-resultsbox-visible")) : (Ih(c, "gsc-resultsbox-visible"), T(c, "gsc-resultsbox-invisible"))
            }
    };
    f.Zb = function() {
        this.je ? this.Vd.Qb("") : this.input.value = "";
        this.kg = this.He = null;
        if ("searchbox-only" != this.mb && ("searchresults-only" == this.mb && (this.root.style.visibility = "hidden"), this.dk(!1), this.ub && (this.ub.className = "gsc-tabsAreaInvisible"), this.hb && (this.hb.className = this.Ej), this.ic(function(b, c) {
                c.R && (c.R.className = "gsc-adBlockInvisible", c.$a && Ih(this.wb, c.$a))
            }), this.$c && (this.$c.className = "gsc-above-wrapper-area-invisible"), this.oa && this.oa.isEnabled())) {
            var a = this.oa.getState();
            delete a["gsc.page"];
            delete a["gsc.q"];
            this.oa.pushState(a)
        }
    };
    f.ak = function(a, b, c, d, e) {
        a = a.Rb ? a.Rb(b) : b;
        d ? (b = {}, b[d] = e, d = rh(this, this.Sa, [a, void 0, b])) : d = rh(this, this.Sa, [a]);
        Gh(c, d)
    };
    f.Bp = function() {
        this.fb && (this.fb.className = this.D.context.u instanceof Ii ? "gsc-orderby" : "gsc-orderby-invisible")
    };
    f.Uk = function(a) {
        var b = function(c, d) {
            for (var e = c.firstChild; e;) {
                var g = e.nextSibling;
                e != d && c.removeChild(e);
                e = g
            }
        };
        b(a.ea, this.da[X.Ca].R);
        b(a.ua, a.ea)
    };
    f.pg = function(a) {
        "searchresults-only" == this.mb && (this.root.style.visibility = "visible");
        this.gk(a, !1);
        this.dk(!0);
        if (!this.nh) {
            this.Uk(a);
            var b = a.u,
                c = ["gsc-results", b.Cc()].join(" ");
            a.ua.className = c;
            this.bw(a);
            c = b.context || {};
            var d = !(!this.ub || !c);
            !this.tq && d && (this.Zu(c.title, a), this.tq = !0);
            var e = b.promotions;
            var g = a.u.Mf && 400 <= a.u.completionStatus ? [a.u.ss()] : 0 == a.u.results.length && a.Gb.Pc && 200 == a.u.completionStatus ? [a.u.ts(a.Gb.Pc)] : a.u.results;
            d = "web" === b.jb;
            var h = !0,
                k = d ? this.Hp : this.bn;
            if (k) {
                var l =
                    M(b.Cc());
                T(l, "gsc-result");
                h = this.ya;
                var n = this.input.value,
                    v = Ti(e);
                if (g) {
                    var u = [
                        ["content", "content"],
                        ["contentNoFormatting", "contentNoFormatting"],
                        ["originalContextUrl", "contextUrl"],
                        ["fileFormat", "fileFormat"],
                        ["perResultLabels", "perResultLabels"],
                        ["title", "title"],
                        ["titleNoFormatting", "titleNoFormatting"],
                        ["clicktrackUrl", "url"],
                        ["visibleUrl", "visibleUrl"]
                    ];
                    for (var F = [
                            ["tbHeight", "height"],
                            ["tbUrl", "url"],
                            ["tbWidth", "width"]
                        ], w = [
                            ["height", "height"],
                            ["unescapedUrl", "url"],
                            ["width", "width"]
                        ], Q = [
                            ["anchor", "anchor"],
                            ["label", "label"],
                            ["label_with_op", "labelWithOp"]
                        ], V = [
                            ["height", "height"],
                            ["src", "url"],
                            ["url", "url"],
                            ["width", "width"]
                        ], N = [], fa = ba(g), B = fa.next(); !B.done; B = fa.next()) {
                        var y = B.value;
                        B = {};
                        for (var I = ba(u), H = I.next(); !H.done; H = I.next()) {
                            var O = ba(H.value);
                            H = O.next().value;
                            O = O.next().value;
                            y[H] && (B[O] = y[H])
                        }
                        I = !1;
                        H = {};
                        O = ba(F);
                        for (var R = O.next(); !R.done; R = O.next()) {
                            var J = ba(R.value);
                            R = J.next().value;
                            J = J.next().value;
                            y[R] && (I = !0, H[J] = y[R])
                        }
                        I && (B.thumbnailImage = H);
                        if (y.height) {
                            I = {};
                            H =
                                ba(w);
                            for (O = H.next(); !O.done; O = H.next()) R = ba(O.value), O = R.next().value, R = R.next().value, y[O] && (I[R] = y[O]);
                            B.image = I
                        }
                        if (y.richSnippet) {
                            I = void 0;
                            H = y.richSnippet;
                            if (H.cseThumbnail) {
                                O = H.cseThumbnail;
                                R = {};
                                B.thumbnailImage = R;
                                J = ba(V);
                                for (var ha = J.next(); !ha.done; ha = J.next()) {
                                    var Z = ba(ha.value);
                                    ha = Z.next().value;
                                    Z = Z.next().value;
                                    O[ha] && (R[Z] = O[ha])
                                }
                            }
                            O = !1;
                            R = {};
                            for (I in H) H.hasOwnProperty(I) && "cseThumbnail" !== I && "cseImage" !== I && (R[I] = tb(H[I]), O = !0);
                            O && (B.richSnippet = R)
                        }
                        if (y.perResultLabels)
                            for (I = y.perResultLabels,
                                y = [], B.perResultLabels = y, I = ba(I), H = I.next(); !H.done; H = I.next()) {
                                H = H.value;
                                O = {};
                                R = ba(Q);
                                for (J = R.next(); !J.done; J = R.next()) ha = ba(J.value), J = ha.next().value, ha = ha.next().value, H[J] && (O[ha] = H[J]);
                                y.push(O)
                            }
                        N.push(B)
                    }
                    u = N
                } else u = g;
                (h = !k(h, n, v, u, l)) || a.ua.insertBefore(l, a.ea)
            }
            if (h && e && 0 < e.length) {
                k = [];
                e = ba(e);
                for (l = e.next(); !l.done; l = e.next()) n = l.value, n.html || a.u.pl(n), n.html && (l = M(a.u.Cc()), T(l, "gsc-result"), T(l, "gsc-promotion"), n = n.html.cloneNode(!0), L(l, n), a.ua.insertBefore(l, a.ea), k.push(l));
                e = k
            } else e = [];
            if (k = this.$c) k.className = "gsc-above-wrapper-area";
            this.Ol(b);
            this.fb && this.Bp();
            this.iq(a, c.html);
            l = !h;
            k = [];
            if (h)
                for (g = ba(g), h = g.next(); !h.done; h = g.next()) h = h.value, h.html || b.xh(h), h.html && (l = !0, k.push(this.yv(a, h)));
            this.lq(a);
            this.qq(l, a);
            this.Wu(a, c);
            this.Dl();
            (a = d ? this.Ip : this.cn) && a(this.ya, this.input.value, e, k)
        }
    };
    f.bw = function(a) {
        var b = a.u.spelling;
        if (b && (!b.html && a.u.tl && a.u.tl(b), b.html)) {
            var c = b.html.cloneNode(!0),
                d = c.getElementsByTagName("a");
            b.type && "SPELL_CORRECTED_RESULTS" == b.type ? d && 1 < d.length && (this.ak(a.u, b.correctedQuery, d[0], b.correctedParamName, b.correctedParamValue), this.ak(a.u, b.originalQuery, d[1], b.originalParamName, b.originalParamValue)) : d && 0 < d.length && this.ak(a.u, b.correctedQuery, d[0]);
            b = M(a.u.Cc());
            T(b, "gsc-result");
            L(b, c);
            a.ua.insertBefore(b, a.ea)
        }
    };
    f.Zu = function(a, b) {
        b = this.jc(b);
        a && !b.u.Yc && th(b.ha.T, this.sl(ah(a)))
    };
    f.iq = function(a, b) {
        var c = this.D && this.D.Pa && "Web" == this.D.Pa.Yc && 0 < a.u.results.length && 0 === a.u.cursor.currentPageIndex;
        if (b && c) {
            c = M(a.u.Cc());
            T(c, "gsc-result");
            b = b.cloneNode(!0);
            L(c, b);
            b = Nh(c, "div", "gsc-facet-label");
            for (var d = 0; d < b.length; d++) {
                var e = b[d];
                if (e) {
                    var g = this.jc(a);
                    e = ba(e.getElementsByTagName("a"));
                    for (var h = e.next(); !h.done; h = e.next()) {
                        h = h.value;
                        var k = h.getAttribute("data-refinementLabel");
                        if (k != a.u.cc()) {
                            var l = h.getAttribute("label-with-op");
                            l || (l = k);
                            this.Za(h, this.up, [g, l])
                        } else T(h,
                            "gs-labelActive")
                    }
                }
            }
            a.ua.insertBefore(c, a.ea)
        }
    };
    f.yv = function(a, b) {
        var c = M(a.u.Cc());
        T(c, "gsc-result");
        a.u.Sg && T(c, "gsc-result-" + a.u.Sg);
        var d = b.html.cloneNode(!0);
        L(c, d);
        if (this.Il && (d = Nh(c, "div", "gs-richsnippet-box")[0])) {
            d.style.display = "block";
            var e = xh(ih["structured-data"], "gsc-richsnippet-showsnippet-label");
            L(d, e);
            this.Za(e, this.ox, [b.url, b.richSnippet])
        }
        if (b.perResultLabels && (b = Nh(c, "div", "gs-per-result-labels")[0])) {
            b = b.getElementsByTagName("a");
            d = this.jc(a);
            e = 0;
            for (var g; g = b[e]; e++) {
                var h = g.getAttribute("data-refinementLabel");
                if (h !=
                    a.u.cc()) {
                    var k = g.getAttribute("label-with-op");
                    k || (k = h);
                    this.Za(g, this.up, [d, k])
                } else T(g, "gs-labelActive")
            }
        }(b = this.da[X.Ca].R) && b.parentNode == a.ea ? a.ea.insertBefore(c, b) : a.ea && L(a.ea, c);
        return c
    };
    f.qq = function(a, b) {
        a ? (b.De && th(b.De, vh("(" + b.u.results.length + ")")), b.ua && (a = b.u.zs()) && L(b.ua, a)) : (b.De && th(b.De, vh("(0)")), this.Uk(b));
        var c = this.Eb,
            d = this.Rg;
        a = void 0 === b.ua ? null : b.ua;
        var e = b.u;
        d = void 0 === d ? !1 : d;
        if (a)
            if (b = e.kh, e.findMoreOnGoogle && e.findMoreOnGoogle.url) {
                var g = e.findMoreOnGoogle.url;
                g = e.Rb ? e.Rb(g) : g;
                var h = e.Mc;
                e = hh["search-on-google"]();
                var k = e.prefix,
                    l = e.kk;
                e = M("gcsc-find-more-on-google");
                var n = Fh("m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z",
                    ih.search, 13, 13, "gcsc-find-more-on-google-magnifier", 12, 12);
                L(e, n);
                k && (k = xh(k, "gcsc-find-more-on-google-text"), L(e, k));
                0 === h.length ? h = {
                    query: "",
                    Sm: !1
                } : (k = h.endsWith('"'), h = {
                    Sm: k,
                    query: h.slice(0, k ? -1 : h.length)
                });
                k = xh(h.query, "gcsc-find-more-on-google-query");
                L(e, k);
                h.Sm && L(e, xh('"', "gcsc-find-more-on-google-query"));
                l && (l = xh(l, "gcsc-find-more-on-google-text"), L(e, l));
                c = Ch(g, null, c);
                L(c, e);
                d ? (d = b, d = void 0 === d ? null : d, b = wh({
                        className: "gcsc-more-maybe-branding-box"
                    }), L(b, c), c = M("gcsc-find-more-on-google-root"),
                    L(c, b), L(a, c.cloneNode(!0)), d && L(a, d.cloneNode(!0))) : (d = b, d = void 0 === d ? null : d, b = wh({
                    className: "gcsc-more-maybe-branding-root"
                }), L(b, c), d && (c = wh({
                    className: "gcsc-find-more-on-google-branding"
                }), L(c, d), L(b, c)), L(a, b.cloneNode(!0)))
            } else b && L(a, b.cloneNode(!0))
    };
    f.Wu = function(a, b) {
        if (0 == a.Oc || a.Md) {
            var c = this.jc(a),
                d = 0 == a.Oc && this.cu(a),
                e = a.Md && 1 == c.ia.length;
            if (d || e) {
                if (d && this.Uq(a), b.facets && 0 < b.facets.length) {
                    d && this.ll(a);
                    var g = !1,
                        h = b.facets;
                    if (h.length > this.he && 0 < b.display_facets.length && -1 !== this.he)
                        for (h.sort(function(n, v) {
                                return v.count - n.count
                            }), b = h.length; b > this.he; b--) h.pop();
                    for (b = 0; b < h.length; b++) {
                        var k = h[b],
                            l = k.label_with_op;
                        if (!l || this.wl) l = k.label;
                        d || e && !a.u.Bd(l) ? this.ml(c, l, k.anchor) : (a.u.Sb(k.anchor), this.In(c), g = !0)
                    }
                    e && !g && this.In(c)
                }
            } else if (a.Md &&
                b.facets && 0 < b.facets.length)
                for (c = b.facets, d = 0; d < c.length; d++) e = c[d], a.u.Bd(e.label) && a.u.Sb(e.anchor);
            a.Md && (a.Md = !1)
        }
        this.ub && this.D && a == this.D.context && this.lp(a);
        this.Rv(a)
    };
    f.ml = function(a, b, c) {
        var d = a.u,
            e = d.th();
        e.Sj(b);
        e.Sb(c);
        b = new Xl;
        b.Pc = a.Gb.Pc;
        this.le(e, b, a);
        e.tb(d.La);
        d.Ha && e.Wo(d.Ha);
        d = a.ia[a.ia.length - 1];
        this.yh(d, a);
        this.rl(d);
        if (a = d.ha.zb) T(a, "gsc-tabData"), T(a, "gsc-tabdInactive");
        return d
    };
    f.lq = function(a) {
        if (a.u.Lc && a.ea && a.u.cursor && a.u.cursor.pages && 1 < a.u.cursor.pages.length) {
            var b = M("gsc-cursor-box gs-bidi-start-align");
            this.Rg || (b.dir = "ltr");
            var c = this.mr(a);
            b.appendChild(c);
            L(a.ua, b)
        }
    };
    f.Rv = function(a) {
        var b = this.input.value;
        a = this.jc(a);
        if (a.ia)
            for (var c = 0; c < a.ia.length; c++) {
                var d = a.ia[c];
                th(d.ha.T, this.sl(ah(d.u.Jm().replace(/\$q/g, b))))
            }
    };
    f.jc = function(a) {
        return a.Id || a
    };
    f.lp = function(a) {
        a.ab ? (Ih(a.ab, "gsc-refinementBlockInvisible"), T(a.ab, "gsc-refinementBlock"), this.D != a.me && (this.D = a.me, this.ee(this.D))) : a.Id && a.Id.ab && (Ih(a.Id.ab, "gsc-refinementBlockInvisible"), T(a.Id.ab, "gsc-refinementBlock"))
    };
    f.cu = function(a) {
        var b = a.u.context ? a.u.context.facets : null;
        if (!b) return 0 < a.ia.length;
        if (b.length != a.ia.length) return !0;
        for (var c = 0; c < b.length; c++) {
            var d = b[c].label_with_op;
            d || (d = b[c].label);
            if (!a.ia[c].u.Bd(d)) return !0
        }
        return !1
    };
    f.Uq = function(a) {
        if (0 != a.ia.length) {
            var b = a.ab;
            b && (sh(b), b.parentNode && b.parentNode.removeChild(b));
            for (a.ab = null; 0 < a.ia.length;) b = a.ia.pop(), b.root && (sh(b.root), this.Qd.removeChild(b.root))
        }
    };
    f.mr = function(a) {
        return this.Rg ? this.pr(a) : this.nr(a)
    };
    f.nr = function(a) {
        for (var b = M("gsc-cursor"), c = a.u.cursor, d = 0; d < c.pages.length; d++) {
            var e = d + 1,
                g = d == c.currentPageIndex,
                h = "gsc-cursor-page" + (g ? " gsc-cursor-current-page" : "");
            e = lm(g ? {
                text: c.pages[d].label
            } : {
                text: c.pages[d].label,
                title: gh.page(e),
                Td: "link"
            }, h);
            g ? de(e, {
                tabindex: 0,
                tabIndex: 0
            }) : this.Za(e, Zl.prototype.vg, [a, d]);
            b.appendChild(e)
        }
        return b
    };
    f.pr = function(a) {
        var b = M("gsc-cursor"),
            c = a.u.cursor,
            d = c.currentPageIndex,
            e = ["ar", "iw"].includes("en");
        if (0 == c.pages.length) return b;
        var g = function(k) {
                return Fh(k != e ? "M10.2 11.5L5.2 6.5 10.2 1.56 8.65 0l-6.5 6.5 6.5 6.5z" : "M2.8 11.5L7.8 6.5 2.8 1.56 4.36 0l6.5 6.5-6.5 6.5z", k ? ih.previous : ih.next, 13, 13, "gsc-cursor-chevron")
            },
            h = lm(0 === d ? {} : {
                title: ih["prev-page"],
                Td: "link"
            }, "gsc-cursor-container-previous");
        b.appendChild(h);
        0 < d && (h.appendChild(g(!0)), this.Za(h, Zl.prototype.vg, [a, d - 1]), b.appendChild(h));
        0 == d && 1 < c.pages.length ? (h = lm({
            text: Vl,
            title: ih["next-page"],
            Td: "link"
        }, "gsc-cursor-next-page"), this.Za(h, Zl.prototype.vg, [a, 1]), de(h, {
            tabindex: -1,
            tabIndex: -1
        }), b.appendChild(h)) : (h = lm({
            text: gh.page(d + 1)
        }, d < c.pages.length - 1 ? "gsc-cursor-numbered-page" : "gsc-cursor-final-page"), b.appendChild(h));
        h = lm({
            text: void 0,
            title: ih["next-page"],
            Td: "link"
        }, "gsc-cursor-container-next");
        b.appendChild(h);
        d < c.pages.length - 1 && (h.appendChild(g(!1)), this.Za(h, Zl.prototype.vg, [a, d + 1]), b.appendChild(h));
        return b
    };
    var lm = function(a, b) {
        b = wh({
            text: a.text,
            className: b,
            vb: !0
        });
        var c = {};
        a.title && (c["aria-label"] = a.title);
        a.Td && (c.role = a.Td);
        (a.title || a.Td) && de(b, c);
        return b
    };
    f = Zl.prototype;
    f.Is = function(a) {
        a = a ? a : this.root;
        var b = null;
        window.getComputedStyle ? b = window.getComputedStyle(a, null) : a.currentStyle ? b = a.currentStyle : document.defaultView.getComputedStyle && (b = document.defaultView.getComputedStyle(a, null));
        return b ? parseInt(b.width, 10) : 300
    };
    f.Pw = function(a, b) {
        this.cn = qh(a, b)
    };
    f.Ow = function(a, b) {
        this.bn = qh(a, b)
    };
    f.lx = function(a, b) {
        this.Ip = qh(a, b)
    };
    f.kx = function(a, b) {
        this.Hp = qh(a, b)
    };
    f.mx = function(a, b) {
        this.Jp = qh(a, b)
    };
    f.Qw = function(a, b) {
        this.dn = qh(a, b)
    };
    f.ix = function(a, b) {
        this.tk = b && qh(a, b)
    };
    f.vg = function(a, b) {
        this.nh = !1;
        this.Dl();
        this.gk(a, !0);
        this.kg = b + 1;
        if (this.oa && this.oa.isEnabled()) {
            var c = this.oa.getState();
            c["gsc.page"] = b + 1;
            this.oa.pushState(c)
        }
        this.ki(this.He, b + 1);
        a.u.xt(b);
        this.qa.scrollIntoView()
    };
    f.vx = function(a) {
        var b;
        if (!(b = !a) && (b = !(!window.history || !window.history.pushState) || Mi())) a: {
            b = Ni(Oi()).state;
            for (var c in b) {
                b = !0;
                break a
            }
            b = !1
        }
        b || a(this);
        a = {};
        this.pa || this.ip(this.D, a);
        this.He && (a["gsc.q"] = this.He);
        this.kg && (a["gsc.page"] = this.kg);
        this.oa = new Pi(a, qh(this, Zl.prototype.Ht));
        return this.oa.isEnabled()
    };
    f.Fm = function(a, b) {
        if (null == a || 0 > a || a >= this.H.length) a = this.D;
        else {
            var c = this.H[a];
            if (c.u.M && b) {
                var d = b;
                c.u.Gd && (d = c.u.Gd(b));
                a = this.Rl(c, d);
                a || (c.ab || this.ll(c), b = this.ml(c, d, b), b.Md = !0, a = b.ha)
            } else a = c.me || c.ha
        }
        return a
    };
    f.Ht = function(a) {
        var b = this.Fm(a["gsc.tab"], a["gsc.ref"]);
        if (b) {
            if (this.fb) {
                var c;
                null != a["gsc.sort"] && (c = this.Bm(a["gsc.sort"]));
                null == c && (c = this.hd);
                this.Vj(c);
                this.Gg(c, b.Pa)
            }
            c = a["gsc.q"] || "";
            a = a["gsc.page"];
            if (null == a || 0 >= a) a = 1;
            this.D == b ? c ? this.Sa(c, a) : this.Zb() : (this.ce(b, {
                query: c,
                page: a
            }), c || this.Zb())
        }
    };
    f.ip = function(a, b) {
        for (var c = this.jc(a.context), d = 0; d < this.H.length; d++)
            if (this.H[d] == c) {
                b["gsc.tab"] = d;
                break
            }
        a = a.Pa;
        a.cc && null != a.cc() ? b["gsc.ref"] = a.cc() : delete b["gsc.ref"]
    };
    var hm = function(a, b, c) {
            mm++;
            var d = document.createElement("form");
            d.className = "gsc-search-box";
            d.acceptCharset = "utf-8";
            var e = ih["search-uc"],
                g = ih.search;
            c && c.Qg && c.Lk && (e = "");
            if (c && (c.buttonText && (g = e = c.buttonText), c.clickableBrandingUrl)) {
                var h = "http://www.google.com";
                "string" == typeof c.clickableBrandingUrl && c.clickableBrandingUrl.match(/^http:\/\/[a-z]*\.google\.com/) && (h = c.clickableBrandingUrl);
                h = Ch(h, null, "_BLANK");
                h.className = "gsc-branding-clickable"
            }
            c && c.Qg ? "" == e ? (e = document.createElement("button"),
                e.className = "gsc-search-button gsc-search-button-v2", this.Oe = e, this.Oe.appendChild(Fh("m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z",
                    g, 13, 13))) : (h = document.createElement("input"), h.type = "button", h.value = e, h.className = "gsc-search-button", this.Oe = h) : (h = document.createElement("input"), h.type = "submit", h.value = e, h.className = "gsc-search-button", this.Oe = h);
            e = document.createElement("input");
            e.setAttribute("autoComplete", "off");
            e.type = "text";
            e.size = 10;
            T(e, "gsc-input");
            this.input = e;
            this.input.name = "search";
            this.input.title = g;
            g = this.input;
            c && c.Qg && c.Lk && (this.input.className = "", this.input.style.width = "100%", this.input.style.padding = "0 2px 0 0",
                this.aj = M("gsc-input-box"), this.aj.id = "gsc-iw-id" + mm, L(this.aj, this.input), g = this.aj);
            c && c.Qg && (this.input.id = "gsc-i-id" + mm);
            c = yh(null, null, "gsc-search-box");
            L(d, c);
            c = Ah(c, 0);
            this.ou = zh(c, "gsc-input");
            e = zh(c, "gsc-search-button");
            L(this.ou, g);
            L(e, this.Oe);
            this.Pj = d;
            sh(b);
            L(b, this.Pj);
            a && (this.oh = wh({
                text: Ul,
                className: "gsc-clear-button",
                vb: !0
            }), this.oh.title = ih["clear-results"], a = zh(c, "gsc-clear-button"), L(a, this.oh))
        },
        im = ("https:" == document.location.protocol ? "https:" : "http:") + "//www.google.com/cse/static/images/1x/googlelogo_lightgrey_46x16dp.png",
        jm = ("https:" == document.location.protocol ? "https:" : "http:") + "//www.google.com/cse/static/images/2x/googlelogo_lightgrey_46x16dp.png",
        km = "#FFFFFF " + $g + " no-repeat",
        mm = 0;
    hm.prototype.Yw = function(a, b) {
        this.oh.onclick = rh(a, b, [this])
    };
    hm.prototype.Sa = function(a) {
        a && (this.input.value = a);
        this.zx && this.zx()
    };
    var om = function(a, b, c) {
        b = void 0 === b ? {} : b;
        this.Fx = (new Date).getTime();
        this.ya = void 0 === c ? null : c;
        Zl.call(this);
        this.Rg = b.useMobileLayout;
        this.gi = null != b.enableApiary_ ? !!b.enableApiary_ : !0;
        this.gc = null != b.experimentNames ? -1 < b.experimentNames.indexOf("csqr") : !1;
        this.md = Array.isArray(b.experimentNames) ? 0 <= $a(b.experimentNames, "dev") : !1;
        this.tb(b.resultSetSize || "large");
        c = {};
        if (b.adoptions)
            for (var d in b.adoptions) b.adoptions.hasOwnProperty(d) && (c[d] = b.adoptions[d]);
        c.iframes = !0;
        c.adtest = b.adtest || null;
        c.channel = b.adchannel || null;
        c.includeVerticalAds = !1;
        c.numTopAds = 4;
        "noTop" == c.layout && (c.layout = null);
        "personalizedAds" in b && (c.personalizedAds = b.personalizedAds);
        "isSafeSearchActive" in b && (c.isSafeSearchActive = b.isSafeSearchActive);
        this.Vr(b.adclient || "", c);
        this.hh = b.autoCompleteOptions;
        this.fr = "" + a;
        this.Df = a;
        this.xl = 0;
        this.wl = b.defaultToRefinement;
        this.W = null;
        if (!b.disableWebSearch || !b.enableImageSearch) {
            var e = {};
            b["restrict-extended"] && (e["restrict-extended"] = b["restrict-extended"]);
            b["restrict-safesearch"] &&
                (e["restrict-safesearch"] = b["restrict-safesearch"]);
            b.isSafeSearchActive && (e.isSafeSearchActive = b.isSafeSearchActive);
            if (b.webSearchOptions)
                for (d in b.webSearchOptions) e[d] = b.webSearchOptions[d];
            b.cse_token && (e.cse_token = b.cse_token);
            b.cselibVersion && (e.cselibVersion = b.cselibVersion);
            b.experimentNames && (e.experimentNames = b.experimentNames);
            this.fs(e)
        }
        this.V = null;
        if (b.enableImageSearch) {
            a = {};
            b["restrict-safesearch"] && (a["restrict-safesearch"] = b["restrict-safesearch"]);
            b.isSafeSearchActive && (a.isSafeSearchActive =
                b.isSafeSearchActive);
            if (b.imageSearchOptions)
                for (d in b.imageSearchOptions) a[d] = b.imageSearchOptions[d];
            b.cse_token && (a.cse_token = b.cse_token);
            b.cselibVersion && (a.cselibVersion = b.cselibVersion);
            b.imageLayoutRedesign && (a.imageLayoutRedesign = b.imageLayoutRedesign);
            b.experimentNames && (a.experimentNames = b.experimentNames);
            this.Zr(a);
            b.defaultToImageSearch && this.W && (this.xl = 1)
        }
        this.W && this.V && this.Sb({
            web: ih.web,
            image: ih.image
        });
        b.googleAnalyticsOptions && b.googleAnalyticsOptions.queryParameter && (this.Li =
            b.googleAnalyticsOptions, this.ix(null, nm));
        b.enableOrderBy && (this.Qn = !0, this.pc = b.orderByOptions && b.orderByOptions.keys && 0 < b.orderByOptions.keys.length ? b.orderByOptions.keys : [{
            key: "",
            label: ih["order-by-relevance"]
        }, {
            key: "date",
            label: ih["order-by-date"]
        }], void 0 !== e && b.orderByOptions && e["restrict-extended"] && void 0 !== e["restrict-extended"].sort_by && (this.hd = this.Bm(e["restrict-extended"].sort_by) || 0), void 0 == this.hd && (this.hd = 0));
        this.Sn = b.overlayResults ? !0 : !1;
        this.Il = !!b.enableRichSnippets;
        this.Tl = !0;
        this.draw = this.Gf;
        this.execute = this.Sa;
        this.getImageSearcher = this.Rs;
        this.setResultSetSize = this.tb
    };
    jh(om, Zl);
    var pm = null,
        qm = !1,
        rm = function() {
            qm || (pm = new Image, pm.onload = pm.onerror = pm.onabort = function() {
                pm = null
            }, pm.src = "https://www.googleapis.com/generate_204", qm = !0)
        };
    vi() && rm();
    f = om.prototype;
    f.fs = function(a) {
        this.W || (this.W = new Ii, this.W.$j(this.Df), this.W.Kg = ih["custom-search"], this.W.So(this.gi), this.W.Uo(this.gc), this.W.To(this.md), this.le(this.W), a && (a.cse_token ? this.W.Se(a.cse_token) : this.W.Se("AHKYotWVmvV1wohA3g8oNFAm_6cK:1495660148313"), a.cselibVersion && this.W.Ag(a.cselibVersion), a.resultSetSize && this.W.tb(a.resultSetSize), a["restrict-extended"] && this.W.ae("restrict-extended", a["restrict-extended"]), a["restrict-safesearch"] && this.W.ae("restrict-safesearch", a["restrict-safesearch"]),
            a.isSafeSearchActive && this.W.Uj(a.isSafeSearchActive), a.linkTarget && this.W.sb(a.linkTarget), a.queryAddition && this.W.$d(a.queryAddition), a.experimentNames && this.W.Cg(a.experimentNames)))
    };
    f.Zr = function(a) {
        this.V || (this.V = new Ei, this.V.$j(this.Df), this.V.So(this.gi), this.V.Uo(this.gc), this.V.To(this.md), this.le(this.V), a && (a.cse_token ? this.V.Se(a.cse_token) : this.V.Se("AHKYotWVmvV1wohA3g8oNFAm_6cK:1495660148313"), a.cselibVersion && this.V.Ag(a.cselibVersion), a.resultSetSize && this.V.tb(a.resultSetSize), this.V.Zo(a.layout || "popup"), a["restrict-safesearch"] && this.V.ae("restrict-safesearch", a["restrict-safesearch"]), a.isSafeSearchActive && this.V.Uj(a.isSafeSearchActive), a["restrict-extended"] &&
            this.V.ae("restrict-extended", a["restrict-extended"]), a.linkTarget && this.V.sb(a.linkTarget), a.queryAddition && this.V.$d(a.queryAddition), a.experimentNames && this.V.Cg(a.experimentNames), a.imageLayoutRedesign && this.V.Nw(a.imageLayoutRedesign)))
    };
    f.Cm = function() {
        return this.fr
    };
    f.Em = function() {
        return "partner-generic"
    };
    f.Gf = function(a, b) {
        b || (b = new Yl);
        b.Fw(2);
        this.rC && 1 == this.H.length && (this.Dx = !0);
        this.Fg(am);
        "searchbox-only" != b.mb && this.gi && rm();
        Zl.prototype.Gf.call(this, a, b);
        Qh("cse-hosted") || window.__gcse || window.console && window.console.warn("This page is calling an unsupported version of the Custom Search Element API. Please switch to the current version of the Custom Search Element API https://developers.google.com/custom-search/docs/element.");
        a = this.pa ? "gsc-control-searchbox-only" : "gsc-control-cse";
        b = this.root;
        this.pa || (b = M(), this.root.parentNode && this.root.parentNode.insertBefore(b, this.root), L(b, this.root), this.root.className = "gsc-control-wrapper-cse");
        b.className = a;
        T(b, a + "-en")
    };
    f.li = function(a, b, c, d, e) {
        if (this.pa) this.Pn();
        else {
            var g = this.qa.offsetWidth;
            Ih(this.wb, "gsc-thinWrapper");
            this.Tl && (g = this.jt(), this.Tl = !1);
            this.vn = g;
            if (500 > (new Date).getTime() - this.Fx && this.wc) try {
                var h = decodeURIComponent(window.location.href).replace(/\+/g, " "),
                    k = decodeURIComponent(a).replace(/\+/g, " ");
                this.wc = -1 != h.indexOf(k)
            } catch (l) {}
            Zl.prototype.li.call(this, a, b, c, d, e)
        }
    };
    f.jt = function() {
        var a = "a a a a a ";
        for (var b = 5; 80 > b; b *= 2) a += a;
        a = wh({
            text: a,
            uc: !0
        });
        a.style.fontFamily = "arial";
        a.style.fontSize = "16px";
        a.style.visibility = "hidden";
        return this.qa ? (L(this.qa, a), b = this.qa.offsetWidth, this.qa.removeChild(a), b) : 0
    };
    f.Sb = function(a) {
        "string" == typeof a ? this.W ? this.W.Sb(a) : this.V && this.V.Sb(a) : (a.web && this.W && this.W.Sb(a.web), a.image && this.V && this.V.Sb(a.image))
    };
    f.le = function(a, b, c) {
        Zl.prototype.le.call(this, a, b, c);
        a.Qe = "gcsc"
    };
    f.Rs = function() {
        return this.V
    };
    var nm = function(a, b, c) {
        var d = document.location;
        c = [d.pathname, d.search, d.search ? "&" : "?", encodeURIComponent(a.Li.queryParameter), "=", encodeURIComponent(c)];
        if (a.Li.categoryParameter) {
            d = b.cc();
            var e = b.jb;
            "web" == e && (e = "");
            b.M && d && (e = e ? e + (":" + d) : d);
            (b = null == e ? "unknown" : e) && c.push("&", encodeURIComponent(a.Li.categoryParameter), "=", encodeURIComponent(b))
        }
        window.gtag && "function" == typeof window.gtag ? window.gtag("event", "page_view", {
            page_path: c.join("")
        }) : window.ga && "function" == typeof window.ga ? window.ga("send",
            "pageview", c.join("")) : window._gaq && "function" == typeof window._gaq.push ? window._gaq.push(["_trackPageview", c.join("")]) : window.console && window.console.log("Google Analytics tracking was not correctly setup.")
    };
    var sm = function(a, b, c, d, e, g, h, k, l) {
        this.fd = a;
        this.ya = b;
        this.type = c;
        this.Hb = {};
        this.w = this.ar(d);
        this.ff = e;
        this.Af = g;
        this.nd = h;
        this.Ah = k;
        this.Na = l
    };
    f = sm.prototype;
    f.Hd = 0;
    f.Ib = null;
    f.fq = function(a) {
        if (a.ya != this.ya) return Th("Name of the component, " + a.ya + ", should match name of the element, " + this.ya + "."), this.Hd;
        if (!a.type) return Th("Component has null type."), this.Hd;
        var b = !1;
        this.Hb[a.type] && (Th("Multiple components of the same type " + a.type + " for Element named " + this.ya + " are detected. Only the last is used."), b = !0);
        for (var c = Yh[this.type].re, d = 0; d < c.length; d++)
            if (c[d] == a.type) return this.Hb[a.type] = a, b || this.Hd++, this.Hd;
        Th("Component of type " + a.type + " is not allowed for Element named " +
            this.ya + " of type " + this.type + ".");
        return this.Hd
    };
    f.aa = function() {
        var a = Yh[this.type].re;
        if (a.length != this.Hd)
            for (var b = 0; b < a.length; b++)
                if (!this.Hb[a[b]]) return Th("Component of type " + a[b] + " is missing for Element named " + this.ya + "."), !1;
        a = {};
        for (var c in this.Hb) this.Hb.hasOwnProperty(c) && (b = this.Hb[c], b.qr(), a[c] = b.node, this.jv(), this.kv(b.attributes, c));
        this.Ib = this.Or(a);
        return !0
    };
    f.ar = function(a) {
        var b = {},
            c;
        for (c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
        return b
    };
    f.kv = function(a, b) {
        a.hasOwnProperty("webSearchSafesearch") && (a.isSafeSearchActive = a.webSearchSafesearch);
        a.hasOwnProperty("safeSearch") && (a.isSafeSearchActive = a.safeSearch);
        fi(function(c) {
            if (a.hasOwnProperty(c.name) && c.s && ("searchbox+results" == b || void 0 == c.m || c.m == b)) {
                var d = c.l(a[c.name]);
                null != d && ("webSearchExtendedRestricts" === c.i ? (this.w.webSearchExtendedRestricts || (this.w.webSearchExtendedRestricts = {}), this.w.webSearchExtendedRestricts[c.name] = d) : "imageSearchExtendedRestricts" === c.i ? (this.w.imageSearchExtendedRestricts ||
                    (this.w.imageSearchExtendedRestricts = {}), c.g && (this.w.imageSearchExtendedRestricts[c.g] = d)) : this.w[c.name] = d)
            }
        }, this)
    };
    f.jv = function() {
        var a = r.__gcse;
        if (a && a.searchCallbacks) {
            a = void 0 === r.__gcse ? {} : r.__gcse;
            var b = void 0 === a.searchCallbacks ? {} : a.searchCallbacks;
            a = void 0 === b.image ? {} : b.image;
            b = void 0 === b.web ? {} : b.web;
            a = ba([
                [a.starting, "onImageSearchStarting"],
                [a.ready, "onImageResultsReady"],
                [a.rendered, "onImageResultsRendered"],
                [b.starting, "onWebSearchStarting"],
                [b.ready, "onWebResultsReady"],
                [b.rendered, "onWebResultsRendered"]
            ]);
            for (b = a.next(); !b.done; b = a.next()) {
                var c = ba(b.value);
                b = c.next().value;
                c = c.next().value;
                b && (this.w[c] = "function" == typeof b ? b : "string" == typeof b && "function" === typeof r[b] ? r[b] : null)
            }
        }
    };
    f.kq = function(a, b) {
        a = Ub(new Cb(Ab, "https://www.google.com/cse/static/element/%{versionDir}/mobile+%{lang}.css"), {
            versionDir: a,
            lang: b
        });
        b = document.createElement("link");
        b.type = "text/css";
        b.rel = "stylesheet";
        b.href = a.xp ? a.xp : Rb(a).toString();
        document.getElementsByTagName("head")[0].appendChild(b)
    };
    f.Or = function(a) {
        var b = {
            imageSearchOptions: {},
            webSearchOptions: {},
            autoCompleteOptions: {},
            googleAnalyticsOptions: {},
            orderByOptions: {}
        };
        fi(function(h) {
            h.g && void 0 != this.w[h.name] && ((h.i ? b[h.i] : b)[h.g] = this.w[h.name])
        }, this);
        this.Na && (b.cselibVersion = this.Na);
        this.Af && (b.cse_token = this.Af);
        this.nd && (b.experimentNames = this.nd);
        this.w.enableRichSnippets && (b.enableRichSnippets = !0);
        this.w.imageLayoutRedesign && (b.imageLayoutRedesign = !0);
        if ("forced" == this.w.mobileLayout || "enabled" == this.w.mobileLayout && this.w.isMobileDevice) document.querySelector("head>meta[name=viewport]") ||
            console.warn("Mobile layout requested, but viewport meta tag is missing. Page layout may not be optimal."), this.kq(this.Na, this.Ah), b.useMobileLayout = !0;
        void 0 != this.w.cssThemeVersion && (b.cssThemeVersion = this.w.cssThemeVersion, mi.jx(this.w.cssThemeVersion));
        var c = new om(this.fd, b, this.ya);
        void 0 != this.w.refinementStyle && c.Zj(this.w.refinementStyle);
        void 0 != this.w.addOverride && mi.nq(this.w.addOverride);
        void 0 != this.w.linkTarget && c.sb(this.w.linkTarget);
        var d = [
            [this.w.onImageSearchStarting, C(c.Qw, c)],
            [this.w.onImageResultsReady, C(c.Ow, c)],
            [this.w.onImageResultsRendered, C(c.Pw, c)],
            [this.w.onWebSearchStarting, C(c.mx, c)],
            [this.w.onWebResultsReady, C(c.kx, c)],
            [this.w.onWebResultsRendered, C(c.lx, c)]
        ];
        d = ba(d);
        for (var e = d.next(); !e.done; e = d.next()) {
            var g = ba(e.value);
            e = g.next().value;
            g = g.next().value;
            null != e && g(null, e)
        }
        d = new Yl;
        void 0 != this.w.enableAutoComplete && d.No(this.w.enableAutoComplete);
        void 0 != this.w.enableSpeech && d.ex(this.w.enableSpeech);
        void 0 != this.w.numTopRefinements && d.hx(this.w.numTopRefinements);
        void 0 != this.w.hideElementBranding && d.Bw(!this.w.hideElementBranding);
        e = null;
        "searchbox-only" == this.type ? (e = this.w.resultsUrl, !e && this.fd ? e = "https://cse.google.com/cse?cx=" + encodeURIComponent(this.fd) : void 0 == e && (e = window.location.href), this.w.personalizedAds || (e += "&personalized_ads=0"), d.ds(e, this.w.queryParameterName, this.w.newWindow), e = a.searchbox) : "searchresults-only" == this.type ? (d.cs(), e = a.results) : "two-column" == this.type ? (d.gp(a.searchbox), e = a.results) : e = a["searchbox+results"];
        c.Gf(e, d);
        this.w.noResultsString &&
            (a = jd(this.w.noResultsString), c.Fg(a));
        this.w.enableHistory ? c.vx(qh(this, this.mc)) && void 0 == this.w.linkTarget && c.sb("_self") : this.mc(c);
        return c
    };
    f.mc = function(a) {
        var b = this.ff[this.w.queryParameterName];
        if (b && this.w.autoSearchOnLoad)
            if ("searchbox-only" == this.type) a.wj(b);
            else {
                for (var c = this.ff, d = {}, e = 0; e < gi.length; e++) c.hasOwnProperty(gi[e]) && (d[gi[e]] = c[gi[e]]);
                a.Sa(b, void 0, d)
            }
    };
    var tm = function(a, b, c, d, e) {
        e = void 0 === e ? null : e;
        this.Su = a;
        this.Na = b;
        this.Df = c;
        this.ho = void 0 === d ? null : d;
        this.wp = e ? e : (new Wg(1151, "0")).oe()
    };
    tm.prototype.ow = function(a, b) {
        b = void 0 === b ? "" : b;
        a = (new Xg).Zw(1).Dw(b + ": " + a).Tw(this.Su).Ag(this.Na).fx(Date.now()).Cw(this.Df);
        this.ho && a.$w(this.ho);
        this.wp.Hr(a);
        this.wp.flush()
    };
    tm.prototype.Ug = function(a, b) {
        b = void 0 === b ? "" : b;
        var c = this;
        return function() {
            var d = Array.prototype.slice.call(arguments, 0) || [];
            try {
                return a.apply(this, d)
            } catch (e) {
                throw "string" === typeof e && (e = {
                    message: e
                }), c.ow(e.message, b), e.message;
            }
        }
    };
    var um = function(a) {
        a = void 0 === a ? {} : a;
        this.fd = a.cx || "";
        this.Jx = this.wt(a.uiOptions);
        this.Vc = {};
        this.Ea = {};
        var b = window.location.search,
            c = {};
        if (1 < b.length) {
            b = b.substr(1).split("&");
            for (var d = 0; d < b.length; d++) {
                var e = b[d].split("=");
                try {
                    var g = decodeURIComponent(e[0])
                } catch (k) {
                    continue
                }
                if (g) {
                    try {
                        var h = e[1] ? decodeURIComponent(e[1].replace(/\+/g, " ")) : e[1]
                    } catch (k) {}
                    c[g] = h
                }
            }
        }
        this.ff = c;
        this.Cj = a.rawCss;
        this.Bq();
        this.Af = a.cse_token;
        this.nd = a.exp;
        this.Ah = a.language;
        this.Na = a.cselibVersion;
        this.oc = this.nd &&
            0 <= $a(this.nd, "cc") ? new tm("cse.manager", this.Na, this.fd, this.ff.q) : null
    };
    f = um.prototype;
    f.wt = function(a) {
        a = a || {};
        var b = {};
        fi(function(c) {
            var d = c.name,
                e = null;
            a.hasOwnProperty(d) && (e = c.l(a[d]));
            null != e ? b[d] = e : void 0 != c.defaultValue && (b[d] = c.defaultValue)
        }, this);
        return b
    };
    f.Nr = function() {
        if ("boolean" == typeof this.Bj) return this.Bj;
        var a = document.createElement("div");
        a.appendChild(document.createElement("G:TEST"));
        return this.Bj = !!(a.querySelectorAll && 0 < a.querySelectorAll("G\\:TEST").length)
    };
    f.go = function(a) {
        var b = this;
        this.oc ? this.oc.Ug(function() {
            return b.Km(a)
        }, "go").apply(this) : this.Km(a)
    };
    f.Km = function(a) {
        a = (a ? Qh(a) : null) || document.body;
        a = this.Nr() ? a.querySelectorAll($h) : di(a);
        window || (window = {});
        for (var b = 0; b < a.length; ++b) this.fo(new ii(a[b]));
        this.Ul()
    };
    f.aa = function(a, b) {
        var c = this;
        return this.oc ? this.oc.Ug(function() {
            return c.to(a, b)
        }, "render").apply(this) : this.to(a, b)
    };
    f.to = function(a, b) {
        if (b && "searchbox" != a.tag && "searchresults" != b.tag) return Th('First and second components must be of tag "searchbox"  and "searchresults" separately.'), null;
        if (b && a.gname != b.gname) return Th("First and second components must be of the same gname."), null;
        a = [a];
        b && a.push(b);
        b = [];
        for (var c = 0; c < a.length; c++) {
            if (!a[c].div) return Th("div required for component."), null;
            a[c].tag || (a[c].tag = "search");
            if (!Zh[a[c].tag]) return Th("tag named " + a[c].tag + " is not recognized"), null;
            var d = Qh(a[c].div);
            if (d && 1 === d.nodeType) {
                d = new ii(d, a[c]);
                var e = d.ya;
                b.push(d)
            }
        }
        for (c = 0; c < b.length; c++) this.fo(b[c]);
        this.Ul();
        return e ? this.lm(e) : null
    };
    f.lm = function(a) {
        var b = this;
        return this.oc ? this.oc.Ug(function() {
            return b.mm(a)
        }, "getElement").apply(this) : this.mm(a)
    };
    f.mm = function(a) {
        return this.Ea[a] ? new vm(this.Ea[a]) : null
    };
    f.vs = function() {
        var a = this;
        return this.oc ? this.oc.Ug(function() {
            return a.em()
        }, "getAllElements").apply() : this.em()
    };
    f.em = function() {
        var a = {},
            b;
        for (b in this.Ea) a[b] = new vm(this.Ea[b]);
        return a
    };
    f.fo = function(a) {
        var b = a.ya;
        this.Vc[b] || (this.Vc[b] = new sm(this.fd, b, a.ec, this.Jx, this.ff, this.Af, this.nd, this.Ah, this.Na));
        this.Vc[b].fq(a)
    };
    f.Bq = function() {
        if (this.Cj) {
            var a = document.getElementsByTagName("head")[0];
            a || (a = document.body.parentNode.appendChild(document.createElement("head")));
            var b = document.createElement("style");
            b.type = "text/css";
            b.styleSheet ? b.styleSheet.cssText = this.Cj : b.appendChild(document.createTextNode(this.Cj));
            a.appendChild(b)
        }
    };
    f.Ul = function() {
        for (var a in this.Vc)
            if (this.Vc.hasOwnProperty(a)) {
                var b = this.Vc[a];
                b.aa() && (this.Ea[a] = b);
                delete this.Vc[a]
            }
    };
    var vm = function(a) {
        this.gname = a.ya;
        this.type = a.type;
        this.uiOptions = a.w;
        this.execute = qh(a.Ib, a.Ib.Sa);
        this.prefillQuery = qh(a.Ib, a.Ib.wj);
        this.getInputQuery = qh(a.Ib, a.Ib.Vs);
        this.clearAllResults = qh(a.Ib, a.Ib.Zb)
    };
    var wm = om,
        xm, ym = {
            Cf: null,
            zf: null,
            exp: null
        },
        zm = function(a) {
            if (!xm) {
                xm = new um(a);
                if (a) {
                    if (!ym.zf) {
                        var b = a.cse_token;
                        b && (ym.zf = b)
                    }
                    ym.exp || (b = a.exp) && (ym.exp = b);
                    ym.Cf || (a = a.cx) && (ym.Cf = a)
                }
                return !0
            }
            return !1
        };
    var Am = r.window.setTimeout,
        Bm = r.window,
        Cm = r.document,
        Dm = function() {
            return {
                loaded: !0,
                complete: !0
            }[Cm.readyState]
        },
        Em = function(a) {
            if ("loading" === Cm.readyState)
                if (Bm.addEventListener) Bm.addEventListener("DOMContentLoaded", function c() {
                    Bm.removeEventListener("DOMContentLoaded", c, !1);
                    a()
                }, !1);
                else if (Bm.attachEvent) Bm.attachEvent("onreadystatechange", function c() {
                Dm() && (Bm.detachEvent("onreadystatechange", c), a())
            });
            else return !1;
            else a();
            return !0
        },
        Fm = function(a) {
            if (Bm.addEventListener) Bm.addEventListener("load",
                function c() {
                    Bm.removeEventListener("load", c, !1);
                    a()
                }, !1);
            else if (Bm.attachEvent) Bm.attachEvent("onload", function c() {
                Bm.detachEvent("onload", c);
                a()
            });
            else return !1;
            return !0
        },
        Gm = function(a, b) {
            var c = function() {
                a() ? b() : Am(c, 10)
            };
            c()
        };
    var Hm = function(a, b, c) {
            for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
            d = ba(d);
            for (e = d.next(); !e.done; e = d.next()) e = e.value, Ca(b + "." + e, a[e], void 0)
        },
        Im = function(a, b) {
            for (var c in b) Ca(a + "." + c, b[c], void 0)
        };
    Hm({
            init: zm,
            go: function(a) {
                zm();
                xm.go(a)
            },
            render: function(a, b) {
                zm();
                return xm.aa(a, b)
            },
            createControl: function(a) {
                a.cse_token = ym.zf;
                a.experimentNames = ym.exp;
                return new wm(ym.Cf || "unknown cx", a)
            },
            getElement: function(a) {
                zm();
                return xm.lm(a)
            },
            getAllElements: function() {
                zm();
                return xm.vs()
            },
            testAccess: function() {
                Da("cse.element.api.testAccess");
                return {
                    kA: xm,
                    Pz: ym
                }
            },
            installMocks: function(a, b, c) {
                Da("cse.element.api.installMocks");
                a && (xm = null, ym.Cf = null, ym.zf = null, ym.exp = null);
                b && (xm = b);
                c && (wm = c)
            }
        }, "google.search.cse.element",
        "getAllElements", "getElement", "go", "init", "render", "createControl");
    Im("google.search.cse.element", {
        ComponentType: {
            gz: "searchbox+results",
            fz: "searchbox",
            bz: "results"
        },
        ElementType: {
            lz: "standard",
            mz: "two-column",
            hz: "searchbox-only",
            iz: "searchresults-only"
        }
    });
    Im("google.search.cse.element.settings", {
        CLASS_PREFIX: "gcse-",
        CSE_PREFIX: "gcse",
        DATA_PREFIX: "data-",
        ElementConfiguration: {},
        forEachOption: fi,
        getAllComponentElements: di,
        getNextDivId: Wh,
        GNAME: "gname",
        HTML_TAG: "div",
        LOGGING_PARAMETERS: gi,
        OptionConfig: {},
        Option: ei,
        QUERY_SELECTOR_ALL_SELECTOR: $h,
        RenderMode: {
            REPLACE: 0,
            ky: 1
        },
        TagConfiguration: {},
        TAG_PREFIX: "gcse:",
        WIDGET_TYPE_CONFIGURATIONS: Yh
    });
    Hm(mi, "google.search.Csedr", "addOverride", "render");
    Ca("google.search.CustomSearchControl", om, void 0);
    Ca("google.search.DrawOptions", Yl, void 0);
    Im("google.search.ImageSearch", {
        showPopup: function(a) {
            var b = a.children[0],
                c = a.children[1];
            if ("block" != c.style.display) {
                c.style.display = "block";
                a.style.zIndex = 4E3;
                a = c.children[0];
                var d = c.children[1],
                    e = b.getElementsByTagName("img")[0],
                    g = c.getElementsByTagName("img")[0],
                    h = {
                        width: g.offsetWidth,
                        height: g.offsetHeight
                    };
                g.offsetWidth < e.offsetWidth ? h = {
                    width: e.offsetWidth,
                    height: 2 * e.offsetHeight
                } : g.offsetHeight < e.offsetHeight && (h = {
                    width: e.offsetWidth,
                    height: e.offsetHeight
                });
                Hi(g.offsetWidth, g.offsetHeight,
                    h, g);
                c.style.width = c.offsetWidth > 2 * b.offsetWidth ? 2 * b.offsetWidth + "px" : Math.max(a.offsetWidth, d.offsetWidth)
            }
        },
        hidePopup: function(a) {
            a = a.children[1];
            "none" != a.style.display && (a.style.display = "none", a.parentElement.style.zIndex = 0)
        },
        LAYOUT_CLASSIC: "classic",
        LAYOUT_COLUMN: "column",
        LAYOUT_POPUP: "popup"
    });
    Im("google.search.richsnippets", {
        merge: function(a) {
            if (!a) return a;
            if (!(a instanceof Array)) return a;
            for (var b = {}, c = 0; c < a.length; c++)
                for (var d in a[c]) b[d] = a[c][d];
            return b
        },
        hreviewNonEmpty: function(a) {
            if (!(a instanceof Array)) return !(!a.description && !a.summary);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (c.description || c.summary) return !0
            }
            return !1
        }
    });
    Im("google.search.Search", {
        FILTERED_CSE_RESULTSET: "filtered_cse",
        LARGE_CSE_RESULTSET: "large",
        SMALL_RESULTSET: "small"
    });
    Ca("google.search.CurrentLocale", "en", void 0);
    Ca("google.search.cse.element.Element", sm, void 0);
    Ca("google.setOnLoadCallback", function(a, b) {
        Dm() ? a() : b ? Em(a) || Gm(Dm, a) : Fm(a) || Gm(Dm, a)
    }, void 0);
}).call(this);