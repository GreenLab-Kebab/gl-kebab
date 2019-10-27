/*!
JW Player version 8.8.2
Copyright (c) 2019, JW Player, All Rights Reserved 
https://github.com/jwplayer/jwplayer/blob/v8.8.2/README.md

This source code and its use and distribution is subject to the terms and conditions of the applicable license agreement. 
https://www.jwplayer.com/tos/

This product includes portions of other software. For the full text of licenses, see below:

JW Player Third Party Software Notices and/or Additional Terms and Conditions

**************************************************************************************************
The following software is used under Apache License 2.0
**************************************************************************************************

vtt.js v0.13.0
Copyright (c) 2019 Mozilla (http://mozilla.org)
https://github.com/mozilla/vtt.js/blob/v0.13.0/LICENSE

* * *

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and
limitations under the License.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**************************************************************************************************
The following software is used under MIT license
**************************************************************************************************

Underscore.js v1.6.0
Copyright (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative
https://github.com/jashkenas/underscore/blob/1.6.0/LICENSE

Backbone backbone.events.js v1.1.2
Copyright (c) 2010-2014 Jeremy Ashkenas, DocumentCloud
https://github.com/jashkenas/backbone/blob/1.1.2/LICENSE

Promise Polyfill v7.1.1
Copyright (c) 2014 Taylor Hakes and Forbes Lindesay
https://github.com/taylorhakes/promise-polyfill/blob/v7.1.1/LICENSE

can-autoplay.js v3.0.0
Copyright (c) 2017 video-dev
https://github.com/video-dev/can-autoplay/blob/v3.0.0/LICENSE

* * *

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**************************************************************************************************
The following software is used under W3C license
**************************************************************************************************

Intersection Observer v0.5.0
Copyright (c) 2016 Google Inc. (http://google.com)
https://github.com/w3c/IntersectionObserver/blob/v0.5.0/LICENSE.md

* * *

W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE
Status: This license takes effect 13 May, 2015.

This work is being provided by the copyright holders under the following license.

License
By obtaining and/or copying this work, you (the licensee) agree that you have read, understood, and will comply with the following terms and conditions.

Permission to copy, modify, and distribute this work, with or without modification, for any purpose and without fee or royalty is hereby granted, provided that you include the following on ALL copies of the work or portions thereof, including modifications:

The full text of this NOTICE in a location viewable to users of the redistributed or derivative work.

Any pre-existing intellectual property disclaimers, notices, or terms and conditions. If none exist, the W3C Software and Document Short Notice should be included.

Notice of any changes or modifications, through a copyright statement on the new code or document such as "This software or document includes material copied from or derived from [title and URI of the W3C document]. Copyright © [YEAR] W3C® (MIT, ERCIM, Keio, Beihang)."

Disclaimers
THIS WORK IS PROVIDED "AS IS," AND COPYRIGHT HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE OR DOCUMENT WILL NOT INFRINGE ANY THIRD PARTY PATENTS, COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.

COPYRIGHT HOLDERS WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENT.

The name and trademarks of copyright holders may NOT be used in advertising or publicity pertaining to the work without specific, written prior permission. Title to copyright in this work will at all times remain with copyright holders.
*/
window.jwplayer = function(t) {
    function e(e) {
        for (var n, i, o = e[0], u = e[1], a = 0, s = []; a < o.length; a++) i = o[a], r[i] && s.push(r[i][0]), r[i] = 0;
        for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (t[n] = u[n]);
        for (c && c(e); s.length;) s.shift()()
    }
    var n = {},
        r = {
            0: 0
        };

    function i(e) {
        if (n[e]) return n[e].exports;
        var r = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.e = function(t) {
        var e = [],
            n = r[t];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var o = new Promise(function(e, i) {
                    n = r[t] = [e, i]
                });
                e.push(n[2] = o);
                var u, a = document.createElement("script");
                a.charset = "utf-8", a.timeout = 120, i.nc && a.setAttribute("nonce", i.nc), a.src = function(t) {
                    return i.p + "" + ({
                        1: "jwplayer.controls",
                        2: "jwplayer.core",
                        3: "jwplayer.core.controls",
                        4: "jwplayer.core.controls.html5",
                        5: "jwplayer.core.controls.polyfills",
                        6: "jwplayer.core.controls.polyfills.html5",
                        7: "polyfills.intersection-observer",
                        8: "polyfills.webvtt",
                        9: "provider.html5",
                        10: "vttparser"
                    }[t] || t) + ".js"
                }(t), u = function(e) {
                    a.onerror = a.onload = null, clearTimeout(c);
                    var n = r[t];
                    if (0 !== n) {
                        if (n) {
                            var i = e && ("load" === e.type ? "missing" : e.type),
                                o = e && e.target && e.target.src,
                                u = new Error("Loading chunk " + t + " failed.\n(" + i + ": " + o + ")");
                            u.type = i, u.request = o, n[1](u)
                        }
                        r[t] = void 0
                    }
                };
                var c = setTimeout(function() {
                    u({
                        type: "timeout",
                        target: a
                    })
                }, 12e4);
                a.onerror = a.onload = u, document.head.appendChild(a)
            }
        return Promise.all(e)
    }, i.m = t, i.c = n, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i.oe = function(t) {
        throw console.error(t), t
    };
    var o = window.webpackJsonpjwplayer = window.webpackJsonpjwplayer || [],
        u = o.push.bind(o);
    o.push = e, o = o.slice();
    for (var a = 0; a < o.length; a++) e(o[a]);
    var c = u;
    return i(i.s = 50)
}([function(t, e, n) {
    "use strict";
    n.d(e, "g", function() {
        return k
    }), n.d(e, "w", function() {
        return P
    }), n.d(e, "j", function() {
        return _
    }), n.d(e, "i", function() {
        return F
    }), n.d(e, "a", function() {
        return M
    }), n.d(e, "B", function() {
        return D
    }), n.d(e, "C", function() {
        return Q
    }), n.d(e, "c", function() {
        return W
    }), n.d(e, "k", function() {
        return Y
    }), n.d(e, "f", function() {
        return U
    }), n.d(e, "m", function() {
        return J
    }), n.d(e, "b", function() {
        return G
    }), n.d(e, "y", function() {
        return tt
    }), n.d(e, "D", function() {
        return rt
    }), n.d(e, "n", function() {
        return ut
    }), n.d(e, "e", function() {
        return at
    }), n.d(e, "h", function() {
        return ct
    }), n.d(e, "z", function() {
        return st
    }), n.d(e, "q", function() {
        return vt
    }), n.d(e, "s", function() {
        return gt
    }), n.d(e, "t", function() {
        return bt
    }), n.d(e, "p", function() {
        return yt
    }), n.d(e, "r", function() {
        return mt
    }), n.d(e, "o", function() {
        return jt
    }), n.d(e, "u", function() {
        return Ot
    }), n.d(e, "l", function() {
        return kt
    }), n.d(e, "A", function() {
        return Ct
    }), n.d(e, "x", function() {
        return Pt
    }), n.d(e, "v", function() {
        return St
    });
    var r = n(14),
        i = {},
        o = Array.prototype,
        u = Object.prototype,
        a = Function.prototype,
        c = o.slice,
        s = o.concat,
        l = u.toString,
        f = u.hasOwnProperty,
        d = o.map,
        p = o.reduce,
        h = o.forEach,
        v = o.filter,
        g = o.every,
        b = o.some,
        y = o.indexOf,
        m = Array.isArray,
        j = Object.keys,
        O = a.bind,
        w = window.isFinite,
        k = function(t, e, n) {
            var r, o;
            if (null == t) return t;
            if (h && t.forEach === h) t.forEach(e, n);
            else if (t.length === +t.length) {
                for (r = 0, o = t.length; r < o; r++)
                    if (e.call(n, t[r], r, t) === i) return
            } else {
                var u = it(t);
                for (r = 0, o = u.length; r < o; r++)
                    if (e.call(n, t[u[r]], u[r], t) === i) return
            }
            return t
        },
        C = k,
        P = function(t, e, n) {
            var r = [];
            return null == t ? r : d && t.map === d ? t.map(e, n) : (k(t, function(t, i, o) {
                r.push(e.call(n, t, i, o))
            }), r)
        },
        x = P,
        S = function(t, e, n, r) {
            var i = arguments.length > 2;
            if (null == t && (t = []), p && t.reduce === p) return r && (e = G(e, r)), i ? t.reduce(e, n) : t.reduce(e);
            if (k(t, function(t, o, u) {
                    i ? n = e.call(r, n, t, o, u) : (n = t, i = !0)
                }), !i) throw new TypeError("Reduce of empty array with no initial value");
            return n
        },
        T = S,
        E = S,
        _ = function(t, e, n) {
            var r;
            return M(t, function(t, i, o) {
                if (e.call(n, t, i, o)) return r = t, !0
            }), r
        },
        A = _,
        F = function(t, e, n) {
            var r = [];
            return null == t ? r : v && t.filter === v ? t.filter(e, n) : (k(t, function(t, i, o) {
                e.call(n, t, i, o) && r.push(t)
            }), r)
        },
        N = F,
        I = function(t, e, n) {
            e || (e = kt);
            var r = !0;
            return null == t ? r : g && t.every === g ? t.every(e, n) : (k(t, function(t, o, u) {
                if (!(r = r && e.call(n, t, o, u))) return i
            }), !!r)
        },
        L = I,
        M = function(t, e, n) {
            e || (e = kt);
            var r = !1;
            return null == t ? r : b && t.some === b ? t.some(e, n) : (k(t, function(t, o, u) {
                if (r || (r = e.call(n, t, o, u))) return i
            }), !!r)
        },
        R = M,
        D = function(t) {
            return null == t ? 0 : t.length === +t.length ? t.length : it(t).length
        },
        B = function(t, e) {
            var n;
            return function() {
                return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
            }
        },
        q = function(t) {
            return null == t ? kt : vt(t) ? t : Ct(t)
        },
        z = function(t) {
            return function(e, n, r) {
                var i = {};
                return n = q(n), k(e, function(o, u) {
                    var a = n.call(r, o, u, e);
                    t(i, a, o)
                }), i
            }
        },
        V = z(function(t, e, n) {
            wt(t, e) ? t[e].push(n) : t[e] = [n]
        }),
        X = z(function(t, e, n) {
            t[e] = n
        }),
        Q = function(t, e, n, r) {
            for (var i = (n = q(n)).call(r, e), o = 0, u = t.length; o < u;) {
                var a = o + u >>> 1;
                n.call(r, t[a]) < i ? o = a + 1 : u = a
            }
            return o
        },
        W = function(t, e) {
            return null != t && (t.length !== +t.length && (t = ot(t)), J(t, e) >= 0)
        },
        H = W,
        Y = function(t, e) {
            return _(t, Pt(e))
        },
        U = function(t) {
            var e = s.apply(o, c.call(arguments, 1));
            return F(t, function(t) {
                return !W(e, t)
            })
        },
        J = function(t, e, n) {
            if (null == t) return -1;
            var r = 0,
                i = t.length;
            if (n) {
                if ("number" != typeof n) return t[r = Q(t, e)] === e ? r : -1;
                r = n < 0 ? Math.max(0, i + n) : n
            }
            if (y && t.indexOf === y) return t.indexOf(e, n);
            for (; r < i; r++)
                if (t[r] === e) return r;
            return -1
        },
        $ = function() {},
        G = function(t, e) {
            var n, r;
            if (O && t.bind === O) return O.apply(t, c.call(arguments, 1));
            if (!vt(t)) throw new TypeError;
            return n = c.call(arguments, 2), r = function() {
                if (!(this instanceof r)) return t.apply(e, n.concat(c.call(arguments)));
                $.prototype = t.prototype;
                var i = new $;
                $.prototype = null;
                var o = t.apply(i, n.concat(c.call(arguments)));
                return Object(o) === o ? o : i
            }
        },
        K = function(t) {
            var e = c.call(arguments, 1);
            return function() {
                for (var n = 0, r = e.slice(), i = 0, o = r.length; i < o; i++) wt(r[i], "partial") && (r[i] = arguments[n++]);
                for (; n < arguments.length;) r.push(arguments[n++]);
                return t.apply(this, r)
            }
        },
        Z = K(B, 2),
        tt = function(t, e) {
            var n = {};
            return e || (e = kt),
                function() {
                    var r = e.apply(this, arguments);
                    return wt(n, r) ? n[r] : n[r] = t.apply(this, arguments)
                }
        },
        et = function(t, e) {
            var n = c.call(arguments, 2);
            return setTimeout(function() {
                return t.apply(null, n)
            }, e)
        },
        nt = K(et, {
            partial: K
        }, 1),
        rt = function(t, e, n) {
            var r, i, o, u = null,
                a = 0;
            n || (n = {});
            var c = function() {
                a = !1 === n.leading ? 0 : xt(), u = null, o = t.apply(r, i), r = i = null
            };
            return function() {
                a || !1 !== n.leading || (a = xt);
                var s = e - (xt - a);
                return r = this, i = arguments, s <= 0 ? (clearTimeout(u), u = null, a = xt, o = t.apply(r, i), r = i = null) : u || !1 === n.trailing || (u = setTimeout(c, s)), o
            }
        },
        it = function(t) {
            if (!ft(t)) return [];
            if (j) return j(t);
            var e = [];
            for (var n in t) wt(t, n) && e.push(n);
            return e
        },
        ot = function(t) {
            for (var e = it(t), n = it.length, r = Array(n), i = 0; i < n; i++) r[i] = t[e[i]];
            return r
        },
        ut = function(t) {
            for (var e = {}, n = it(t), r = 0, i = n.length; r < i; r++) e[t[n[r]]] = n[r];
            return e
        },
        at = function(t) {
            return k(c.call(arguments, 1), function(e) {
                if (e)
                    for (var n in e) void 0 === t[n] && (t[n] = e[n])
            }), t
        },
        ct = Object.assign || function(t) {
            return k(c.call(arguments, 1), function(e) {
                if (e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }), t
        },
        st = function(t) {
            var e = {},
                n = s.apply(o, c.call(arguments, 1));
            return k(n, function(n) {
                n in t && (e[n] = t[n])
            }), e
        },
        lt = m || function(t) {
            return "[object Array]" == l.call(t)
        },
        ft = function(t) {
            return t === Object(t)
        },
        dt = [];
    k(["Function", "String", "Number", "Date", "RegExp"], function(t) {
        dt[t] = function(e) {
            return l.call(e) == "[object " + t + "]"
        }
    }), dt.Function = function(t) {
        return "function" == typeof t
    };
    var pt = dt.Date,
        ht = dt.RegExp,
        vt = dt.Function,
        gt = dt.Number,
        bt = dt.String,
        yt = function(t) {
            return w(t) && !mt(parseFloat(t))
        },
        mt = function(t) {
            return gt(t) && t != +t
        },
        jt = function(t) {
            return !0 === t || !1 === t || "[object Boolean]" == l.call(t)
        },
        Ot = function(t) {
            return void 0 === t
        },
        wt = function(t, e) {
            return f.call(t, e)
        },
        kt = function(t) {
            return t
        },
        Ct = function(t) {
            return function(e) {
                return e[t]
            }
        },
        Pt = function(t) {
            return function(e) {
                if (e === t) return !0;
                for (var n in t)
                    if (t[n] !== e[n]) return !1;
                return !0
            }
        },
        xt = r.a,
        St = function(t) {
            return gt(t) && !mt(t)
        };
    e.d = {
        after: function(t, e) {
            return function() {
                if (--t < 1) return e.apply(this, arguments)
            }
        },
        all: I,
        any: M,
        before: B,
        bind: G,
        clone: function(t) {
            return ft(t) ? lt(t) ? t.slice() : ct({}, t) : t
        },
        collect: x,
        compact: function(t) {
            return F(t, kt)
        },
        constant: function(t) {
            return function() {
                return t
            }
        },
        contains: W,
        defaults: at,
        defer: nt,
        delay: et,
        detect: A,
        difference: U,
        each: k,
        every: L,
        extend: ct,
        filter: F,
        find: _,
        findWhere: Y,
        foldl: T,
        forEach: C,
        groupBy: V,
        has: wt,
        identity: kt,
        include: H,
        indexBy: X,
        indexOf: J,
        inject: E,
        invert: ut,
        isArray: lt,
        isBoolean: jt,
        isDate: pt,
        isFinite: yt,
        isFunction: vt,
        isNaN: mt,
        isNull: function(t) {
            return null === t
        },
        isNumber: gt,
        isObject: ft,
        isRegExp: ht,
        isString: bt,
        isUndefined: Ot,
        isValidNumber: St,
        keys: it,
        last: function(t, e, n) {
            if (null != t) return null == e || n ? t[t.length - 1] : c.call(t, Math.max(t.length - e, 0))
        },
        map: P,
        matches: Pt,
        max: function(t, e, n) {
            if (!e && lt(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
            var r = -1 / 0,
                i = -1 / 0;
            return k(t, function(t, o, u) {
                var a = e ? e.call(n, t, o, u) : t;
                a > i && (r = t, i = a)
            }), r
        },
        memoize: tt,
        now: xt,
        omit: function(t) {
            var e = {},
                n = s.apply(o, c.call(arguments, 1));
            for (var r in t) W(n, r) || (e[r] = t[r]);
            return e
        },
        once: Z,
        partial: K,
        pick: st,
        pluck: function(t, e) {
            return P(t, Ct(e))
        },
        property: Ct,
        propertyOf: function(t) {
            return null == t ? function() {} : function(e) {
                return t[e]
            }
        },
        reduce: S,
        reject: function(t, e, n) {
            return F(t, function(t, r, i) {
                return !e.call(n, t, r, i)
            }, n)
        },
        result: function(t, e) {
            if (null != t) {
                var n = t[e];
                return vt(n) ? n.call(t) : n
            }
        },
        select: N,
        size: D,
        some: R,
        sortedIndex: Q,
        throttle: rt,
        where: function(t, e) {
            return F(t, Pt(e))
        },
        without: function(t) {
            return U(t, c.call(arguments, 1))
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "t", function() {
        return o
    }), n.d(e, "s", function() {
        return u
    }), n.d(e, "r", function() {
        return a
    }), n.d(e, "o", function() {
        return c
    }), n.d(e, "p", function() {
        return s
    }), n.d(e, "a", function() {
        return l
    }), n.d(e, "c", function() {
        return f
    }), n.d(e, "q", function() {
        return d
    }), n.d(e, "d", function() {
        return p
    }), n.d(e, "h", function() {
        return h
    }), n.d(e, "e", function() {
        return v
    }), n.d(e, "b", function() {
        return w
    }), n.d(e, "f", function() {
        return k
    }), n.d(e, "g", function() {
        return C
    }), n.d(e, "k", function() {
        return P
    }), n.d(e, "i", function() {
        return x
    }), n.d(e, "j", function() {
        return S
    }), n.d(e, "l", function() {
        return T
    }), n.d(e, "m", function() {
        return E
    }), n.d(e, "n", function() {
        return _
    }), n.d(e, "v", function() {
        return A
    }), n.d(e, "u", function() {
        return F
    }), n.d(e, "w", function() {
        return N
    });
    var r = n(0);

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var o = 1e5,
        u = 100001,
        a = 100002,
        c = 101e3,
        s = 102e3,
        l = 200001,
        f = 202e3,
        d = 104e3,
        p = 203e3,
        h = 203640,
        v = 204e3,
        g = 303200,
        b = 303210,
        y = 303212,
        m = 303213,
        j = 303220,
        O = 303230,
        w = 306e3,
        k = 308e3,
        C = 308640,
        P = "cantPlayVideo",
        x = "badConnection",
        S = "cantLoadPlayer",
        T = "liveStreamDown",
        E = "technicalError",
        _ = function() {
            function t(e, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.code = Object(r.v)(n) ? n : 0, this.sourceError = i, e && (this.key = e)
            }
            var e, n, o;
            return e = t, o = [{
                key: "logMessage",
                value: function(t) {
                    var e = t % 1e3,
                        n = Math.floor((t - e) / 1e3),
                        r = t;
                    return e >= 400 && e < 600 && (r = "".concat(n, "400-").concat(n, "599")), "JW Player ".concat(t > 299999 && t < 4e5 ? "Warning" : "Error", " ").concat(t, ". For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#").concat(r)
                }
            }], (n = null) && i(e.prototype, n), o && i(e, o), t
        }();

    function A(t, e, n) {
        return n instanceof _ && n.code ? n : new _(t, e, n)
    }

    function F(t, e) {
        var n = A(E, e, t);
        return n.code = (t && t.code || 0) + e, n
    }

    function N(t) {
        var e = t.name,
            n = t.message;
        switch (e) {
            case "AbortError":
                return /pause/.test(n) ? m : /load/.test(n) ? y : b;
            case "NotAllowedError":
                return j;
            case "NotSupportedError":
                return O;
            default:
                return g
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "h", function() {
        return o
    }), n.d(e, "d", function() {
        return u
    }), n.d(e, "i", function() {
        return a
    }), n.d(e, "a", function() {
        return c
    }), n.d(e, "b", function() {
        return s
    }), n.d(e, "f", function() {
        return l
    }), n.d(e, "c", function() {
        return f
    }), n.d(e, "e", function() {
        return d
    }), n.d(e, "g", function() {
        return p
    });
    var r = n(0),
        i = window.parseFloat;

    function o(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }

    function u(t, e, n) {
        for (t = "" + t, n = n || "0"; t.length < e;) t = n + t;
        return t
    }

    function a(t, e) {
        for (var n = t.attributes, r = 0; r < n.length; r++)
            if (n[r].name && n[r].name.toLowerCase() === e.toLowerCase()) return n[r].value.toString();
        return ""
    }

    function c(t) {
        if (!t || "rtmp" === t.substr(0, 4)) return "";
        var e = /[(,]format=(m3u8|mpd)-/i.exec(t);
        return e ? e[1] : (t = t.split("?")[0].split("#")[0]).lastIndexOf(".") > -1 ? t.substr(t.lastIndexOf(".") + 1, t.length).toLowerCase() : void 0
    }

    function s(t) {
        var e = (t / 60 | 0) % 60,
            n = t % 60;
        return u(t / 3600 | 0, 2) + ":" + u(e, 2) + ":" + u(n.toFixed(3), 6)
    }

    function l(t, e) {
        if (!t) return 0;
        if (Object(r.v)(t)) return t;
        var n = t.replace(",", "."),
            o = n.slice(-1),
            u = n.split(":"),
            a = u.length,
            c = 0;
        if ("s" === o) c = i(n);
        else if ("m" === o) c = 60 * i(n);
        else if ("h" === o) c = 3600 * i(n);
        else if (a > 1) {
            var s = a - 1;
            4 === a && (e && (c = i(u[s]) / e), s -= 1), c += i(u[s]), c += 60 * i(u[s - 1]), a >= 3 && (c += 3600 * i(u[s - 2]))
        } else c = i(n);
        return Object(r.v)(c) ? c : 0
    }

    function f(t, e, n) {
        if (Object(r.t)(t) && "%" === t.slice(-1)) {
            var o = i(t);
            return e && Object(r.v)(e) && Object(r.v)(o) ? e * o / 100 : null
        }
        return l(t, n)
    }

    function d(t, e) {
        return t.map(function(t) {
            return e + t
        })
    }

    function p(t, e) {
        return t.map(function(t) {
            return t + e
        })
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "ib", function() {
        return r
    }), n.d(e, "lb", function() {
        return i
    }), n.d(e, "jb", function() {
        return o
    }), n.d(e, "nb", function() {
        return u
    }), n.d(e, "ob", function() {
        return a
    }), n.d(e, "kb", function() {
        return c
    }), n.d(e, "mb", function() {
        return s
    }), n.d(e, "pb", function() {
        return l
    }), n.d(e, "s", function() {
        return f
    }), n.d(e, "u", function() {
        return d
    }), n.d(e, "t", function() {
        return p
    }), n.d(e, "n", function() {
        return h
    }), n.d(e, "q", function() {
        return v
    }), n.d(e, "qb", function() {
        return g
    }), n.d(e, "r", function() {
        return b
    }), n.d(e, "Y", function() {
        return y
    }), n.d(e, "V", function() {
        return m
    }), n.d(e, "v", function() {
        return j
    }), n.d(e, "X", function() {
        return O
    }), n.d(e, "w", function() {
        return w
    }), n.d(e, "sb", function() {
        return k
    }), n.d(e, "a", function() {
        return C
    }), n.d(e, "b", function() {
        return P
    }), n.d(e, "c", function() {
        return x
    }), n.d(e, "d", function() {
        return S
    }), n.d(e, "e", function() {
        return T
    }), n.d(e, "h", function() {
        return E
    }), n.d(e, "F", function() {
        return _
    }), n.d(e, "fb", function() {
        return A
    }), n.d(e, "P", function() {
        return F
    }), n.d(e, "C", function() {
        return N
    }), n.d(e, "B", function() {
        return I
    }), n.d(e, "E", function() {
        return L
    }), n.d(e, "p", function() {
        return M
    }), n.d(e, "bb", function() {
        return R
    }), n.d(e, "m", function() {
        return D
    }), n.d(e, "G", function() {
        return B
    }), n.d(e, "H", function() {
        return q
    }), n.d(e, "M", function() {
        return z
    }), n.d(e, "N", function() {
        return V
    }), n.d(e, "Q", function() {
        return X
    }), n.d(e, "hb", function() {
        return Q
    }), n.d(e, "ab", function() {
        return W
    }), n.d(e, "D", function() {
        return H
    }), n.d(e, "R", function() {
        return Y
    }), n.d(e, "O", function() {
        return U
    }), n.d(e, "S", function() {
        return J
    }), n.d(e, "U", function() {
        return $
    }), n.d(e, "L", function() {
        return G
    }), n.d(e, "K", function() {
        return K
    }), n.d(e, "I", function() {
        return Z
    }), n.d(e, "J", function() {
        return tt
    }), n.d(e, "T", function() {
        return et
    }), n.d(e, "o", function() {
        return nt
    }), n.d(e, "y", function() {
        return rt
    }), n.d(e, "gb", function() {
        return it
    }), n.d(e, "cb", function() {
        return ot
    }), n.d(e, "db", function() {
        return ut
    }), n.d(e, "f", function() {
        return at
    }), n.d(e, "g", function() {
        return ct
    }), n.d(e, "Z", function() {
        return st
    }), n.d(e, "A", function() {
        return lt
    }), n.d(e, "l", function() {
        return ft
    }), n.d(e, "k", function() {
        return dt
    }), n.d(e, "eb", function() {
        return pt
    }), n.d(e, "rb", function() {
        return ht
    }), n.d(e, "z", function() {
        return vt
    }), n.d(e, "j", function() {
        return gt
    }), n.d(e, "W", function() {
        return bt
    }), n.d(e, "i", function() {
        return yt
    }), n.d(e, "x", function() {
        return mt
    });
    var r = "buffering",
        i = "idle",
        o = "complete",
        u = "paused",
        a = "playing",
        c = "error",
        s = "loading",
        l = "stalled",
        f = "drag",
        d = "dragStart",
        p = "dragEnd",
        h = "click",
        v = "doubleClick",
        g = "tap",
        b = "doubleTap",
        y = "over",
        m = "move",
        j = "enter",
        O = "out",
        w = c,
        k = "warning",
        C = "adClick",
        P = "adPause",
        x = "adPlay",
        S = "adSkipped",
        T = "adTime",
        E = "autostartNotAllowed",
        _ = o,
        A = "ready",
        F = "seek",
        N = "beforePlay",
        I = "beforeComplete",
        L = "bufferFull",
        M = "displayClick",
        R = "playlistComplete",
        D = "cast",
        B = "mediaError",
        q = "firstFrame",
        z = "playAttempt",
        V = "playAttemptFailed",
        X = "seeked",
        Q = "setupError",
        W = "state",
        H = "bufferChange",
        Y = "time",
        U = "ratechange",
        J = "mediaType",
        $ = "volume",
        G = "mute",
        K = "meta",
        Z = "levels",
        tt = "levelsChanged",
        et = "visualQuality",
        nt = "controls",
        rt = "fullscreen",
        it = "resize",
        ot = "playlistItem",
        ut = "playlist",
        at = "audioTracks",
        ct = "audioTrackChanged",
        st = "playbackRateChanged",
        lt = "logoClick",
        ft = "captionsList",
        dt = "captionsChanged",
        pt = "providerFirstFrame",
        ht = "userAction",
        vt = "instreamClick",
        gt = "breakpoint",
        bt = "fullscreenchange",
        yt = "bandwidthEstimate",
        mt = "float"
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return i
    }), n.d(e, "d", function() {
        return o
    }), n.d(e, "a", function() {
        return u
    }), n.d(e, "c", function() {
        return a
    });
    var r = n(2);

    function i(t) {
        var e = "";
        return t && (t.localName ? e = t.localName : t.baseName && (e = t.baseName)), e
    }

    function o(t) {
        var e = "";
        return t && (t.textContent ? e = Object(r.h)(t.textContent) : t.text && (e = Object(r.h)(t.text))), e
    }

    function u(t, e) {
        return t.childNodes[e]
    }

    function a(t) {
        return t.childNodes ? t.childNodes.length : 0
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "h", function() {
        return u
    }), n.d(e, "f", function() {
        return a
    }), n.d(e, "l", function() {
        return s
    }), n.d(e, "k", function() {
        return l
    }), n.d(e, "p", function() {
        return f
    }), n.d(e, "g", function() {
        return d
    }), n.d(e, "e", function() {
        return p
    }), n.d(e, "n", function() {
        return h
    }), n.d(e, "d", function() {
        return v
    }), n.d(e, "i", function() {
        return g
    }), n.d(e, "q", function() {
        return b
    }), n.d(e, "j", function() {
        return y
    }), n.d(e, "c", function() {
        return m
    }), n.d(e, "b", function() {
        return j
    }), n.d(e, "o", function() {
        return O
    }), n.d(e, "m", function() {
        return w
    }), n.d(e, "a", function() {
        return k
    });
    var r = navigator.userAgent;

    function i(t) {
        return null !== r.match(t)
    }

    function o(t) {
        return function() {
            return i(t)
        }
    }

    function u() {
        var t = k();
        return !!(t && t >= 18)
    }
    var a = o(/gecko\//i),
        c = o(/trident\/.+rv:\s*11/i),
        s = o(/iP(hone|od)/i),
        l = o(/iPad/i),
        f = o(/Macintosh/i),
        d = o(/FBAV/i);

    function p() {
        return i(/\sEdge\/\d+/i)
    }

    function h() {
        return i(/msie/i)
    }

    function v() {
        return i(/\s(?:(?:Headless)?Chrome|CriOS)\//i) && !p() && !i(/UCBrowser/i)
    }

    function g() {
        return p() || c() || h()
    }

    function b() {
        return i(/safari/i) && !i(/(?:Chrome|CriOS|chromium|android|phantom)/i)
    }

    function y() {
        return i(/iP(hone|ad|od)/i)
    }

    function m() {
        return !(i(/chrome\/[123456789]/i) && !i(/chrome\/18/i) && !a()) && j()
    }

    function j() {
        return i(/Android/i) && !i(/Windows Phone/i)
    }

    function O() {
        return y() || j() || i(/Windows Phone/i)
    }

    function w() {
        try {
            return window.self !== window.top
        } catch (t) {
            return !0
        }
    }

    function k() {
        if (j()) return 0;
        var t, e = navigator.plugins;
        if (e && (t = e["Shockwave Flash"]) && t.description) return parseFloat(t.description.replace(/\D+(\d+\.?\d*).*/, "$1"));
        if (void 0 !== window.ActiveXObject) {
            try {
                if (t = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return parseFloat(t.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/, "."))
            } catch (t) {
                return 0
            }
            return t
        }
        return 0
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    n.d(e, "a", function() {
        return u
    }), n.d(e, "c", function() {
        return a
    }), n.d(e, "d", function() {
        return c
    }), n.d(e, "b", function() {
        return s
    }), n.d(e, "e", function() {
        return l
    }), n.d(e, "f", function() {
        return f
    });
    var o = [].slice,
        u = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            var e, n, r;
            return e = t, (n = [{
                key: "on",
                value: function(t, e, n) {
                    if (!p(this, "on", t, [e, n]) || !e) return this;
                    var r = this._events || (this._events = {});
                    return (r[t] || (r[t] = [])).push({
                        callback: e,
                        context: n
                    }), this
                }
            }, {
                key: "once",
                value: function(t, e, n) {
                    if (!p(this, "once", t, [e, n]) || !e) return this;
                    var r = 0,
                        i = this,
                        o = function n() {
                            r++ || (i.off(t, n), e.apply(this, arguments))
                        };
                    return o._callback = e, this.on(t, o, n)
                }
            }, {
                key: "off",
                value: function(t, e, n) {
                    if (!this._events || !p(this, "off", t, [e, n])) return this;
                    if (!t && !e && !n) return delete this._events, this;
                    for (var r = t ? [t] : Object.keys(this._events), i = 0, o = r.length; i < o; i++) {
                        t = r[i];
                        var u = this._events[t];
                        if (u) {
                            var a = this._events[t] = [];
                            if (e || n)
                                for (var c = 0, s = u.length; c < s; c++) {
                                    var l = u[c];
                                    (e && e !== l.callback && e !== l.callback._callback || n && n !== l.context) && a.push(l)
                                }
                            a.length || delete this._events[t]
                        }
                    }
                    return this
                }
            }, {
                key: "trigger",
                value: function(t) {
                    if (!this._events) return this;
                    var e = o.call(arguments, 1);
                    if (!p(this, "trigger", t, e)) return this;
                    var n = this._events[t],
                        r = this._events.all;
                    return n && h(n, e, this), r && h(r, arguments, this), this
                }
            }, {
                key: "triggerSafe",
                value: function(t) {
                    if (!this._events) return this;
                    var e = o.call(arguments, 1);
                    if (!p(this, "trigger", t, e)) return this;
                    var n = this._events[t],
                        r = this._events.all;
                    return n && h(n, e, this, t), r && h(r, arguments, this, t), this
                }
            }]) && i(e.prototype, n), r && i(e, r), t
        }(),
        a = u.prototype.on,
        c = u.prototype.once,
        s = u.prototype.off,
        l = u.prototype.trigger,
        f = u.prototype.triggerSafe;
    u.on = a, u.once = c, u.off = s, u.trigger = l;
    var d = /\s+/;

    function p(t, e, n, i) {
        if (!n) return !0;
        if ("object" === r(n)) {
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && t[e].apply(t, [o, n[o]].concat(i));
            return !1
        }
        if (d.test(n)) {
            for (var u = n.split(d), a = 0, c = u.length; a < c; a++) t[e].apply(t, [u[a]].concat(i));
            return !1
        }
        return !0
    }

    function h(t, e, n, r) {
        for (var i = -1, o = t.length; ++i < o;) {
            var u = t[i];
            if (r) try {
                u.callback.apply(u.context || n, e)
            } catch (t) {
                console.log('Error in "' + r + '" event handler:', t)
            } else u.callback.apply(u.context || n, e)
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "h", function() {
        return u
    }), n.d(e, "e", function() {
        return a
    }), n.d(e, "p", function() {
        return c
    }), n.d(e, "i", function() {
        return s
    }), n.d(e, "r", function() {
        return l
    }), n.d(e, "q", function() {
        return f
    }), n.d(e, "t", function() {
        return d
    }), n.d(e, "d", function() {
        return v
    }), n.d(e, "a", function() {
        return g
    }), n.d(e, "n", function() {
        return b
    }), n.d(e, "o", function() {
        return y
    }), n.d(e, "u", function() {
        return m
    }), n.d(e, "s", function() {
        return j
    }), n.d(e, "g", function() {
        return O
    }), n.d(e, "b", function() {
        return w
    }), n.d(e, "f", function() {
        return k
    }), n.d(e, "c", function() {
        return C
    }), n.d(e, "l", function() {
        return P
    }), n.d(e, "j", function() {
        return x
    }), n.d(e, "m", function() {
        return S
    }), n.d(e, "k", function() {
        return T
    });
    var r, i = n(0),
        o = n(2);

    function u(t, e) {
        return t.classList.contains(e)
    }

    function a(t) {
        return s(t).firstChild
    }

    function c(t, e) {
        O(t),
            function(t, e) {
                if (!e) return;
                for (var n = document.createDocumentFragment(), r = s(e).childNodes, i = 0; i < r.length; i++) n.appendChild(r[i].cloneNode());
                t.appendChild(n)
            }(t, e)
    }

    function s(t) {
        r || (r = new DOMParser);
        var e = r.parseFromString(t, "text/html").body;
        l(e);
        for (var n = e.querySelectorAll("img,svg"), i = n.length; i--;) {
            f(n[i])
        }
        return e
    }

    function l(t) {
        for (var e = t.querySelectorAll("script,object,iframe"), n = e.length; n--;) {
            var r = e[n];
            r.parentNode.removeChild(r)
        }
        return t
    }

    function f(t) {
        for (var e = t.attributes, n = e.length; n--;) {
            var r = e[n].name;
            /^on/.test(r) && t.removeAttribute(r)
        }
        return t
    }

    function d(t) {
        return t + (t.toString().indexOf("%") > 0 ? "" : "px")
    }

    function p(t) {
        return Object(i.t)(t.className) ? t.className.split(" ") : []
    }

    function h(t, e) {
        e = Object(o.h)(e), t.className !== e && (t.className = e)
    }

    function v(t) {
        return t.classList ? t.classList : p(t)
    }

    function g(t, e) {
        var n = p(t);
        (Array.isArray(e) ? e : e.split(" ")).forEach(function(t) {
            Object(i.c)(n, t) || n.push(t)
        }), h(t, n.join(" "))
    }

    function b(t, e) {
        var n = p(t),
            r = Array.isArray(e) ? e : e.split(" ");
        h(t, Object(i.f)(n, r).join(" "))
    }

    function y(t, e, n) {
        var r = t.className || "";
        e.test(r) ? r = r.replace(e, n) : n && (r += " " + n), h(t, r)
    }

    function m(t, e, n) {
        var r = u(t, e);
        (n = Object(i.o)(n) ? n : !r) !== r && (n ? g(t, e) : b(t, e))
    }

    function j(t, e, n) {
        t.setAttribute(e, n)
    }

    function O(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }

    function w(t) {
        var e = document.createElement("link");
        e.rel = "stylesheet", e.href = t, document.getElementsByTagName("head")[0].appendChild(e)
    }

    function k(t) {
        t && O(t)
    }

    function C(t) {
        var e = {
            left: 0,
            right: 0,
            width: 0,
            height: 0,
            top: 0,
            bottom: 0
        };
        if (!t || !document.body.contains(t)) return e;
        var n = t.getBoundingClientRect(),
            r = window.pageYOffset,
            i = window.pageXOffset;
        return n.width || n.height || n.left || n.top ? (e.left = n.left + i, e.right = n.right + i, e.top = n.top + r, e.bottom = n.bottom + r, e.width = n.right - n.left, e.height = n.bottom - n.top, e) : e
    }

    function P(t, e) {
        t.insertBefore(e, t.firstChild)
    }

    function x(t) {
        return t.nextElementSibling
    }

    function S(t) {
        return t.previousElementSibling
    }

    function T(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = document.createElement("a");
        r.href = t, r.target = e, (r = Object(i.h)(r, n)).click()
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    n.r(e), n.d(e, "exists", function() {
        return o
    }), n.d(e, "isHTTPS", function() {
        return u
    }), n.d(e, "isFileProtocol", function() {
        return a
    }), n.d(e, "isRtmp", function() {
        return c
    }), n.d(e, "isYouTube", function() {
        return s
    }), n.d(e, "typeOf", function() {
        return l
    }), n.d(e, "isDeepKeyCompliant", function() {
        return f
    });
    var i = window.location.protocol;

    function o(t) {
        switch (r(t)) {
            case "string":
                return t.length > 0;
            case "object":
                return null !== t;
            case "undefined":
                return !1;
            default:
                return !0
        }
    }

    function u() {
        return "https:" === i
    }

    function a() {
        return "file:" === i
    }

    function c(t, e) {
        return 0 === t.indexOf("rtmp:") || "rtmp" === e
    }

    function s(t, e) {
        return "youtube" === e || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(t)
    }

    function l(t) {
        if (null === t) return "null";
        var e = r(t);
        return "object" === e && Array.isArray(t) ? "array" : e
    }

    function f(t, e, n) {
        var i = Object.keys(t);
        return Object.keys(e).length >= i.length && i.every(function(i) {
            var o = t[i],
                u = e[i];
            return o && "object" === r(o) ? !(!u || "object" !== r(u)) && f(o, u, n) : n(i, t)
        })
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(5);

    function i(t, e) {
        if (t && t.length > e) return t[e]
    }
    var o = n(0);
    n.d(e, "Browser", function() {
        return a
    }), n.d(e, "OS", function() {
        return c
    }), n.d(e, "Features", function() {
        return s
    });
    var u = navigator.userAgent;
    var a = {},
        c = {},
        s = {};
    Object.defineProperties(a, {
        androidNative: {
            get: Object(o.y)(r.c),
            enumerable: !0
        },
        chrome: {
            get: Object(o.y)(r.d),
            enumerable: !0
        },
        edge: {
            get: Object(o.y)(r.e),
            enumerable: !0
        },
        facebook: {
            get: Object(o.y)(r.g),
            enumerable: !0
        },
        firefox: {
            get: Object(o.y)(r.f),
            enumerable: !0
        },
        ie: {
            get: Object(o.y)(r.i),
            enumerable: !0
        },
        msie: {
            get: Object(o.y)(r.n),
            enumerable: !0
        },
        safari: {
            get: Object(o.y)(r.q),
            enumerable: !0
        },
        version: {
            get: Object(o.y)(function(t, e) {
                var n, r, i, o;
                return t.chrome ? n = -1 !== e.indexOf("Chrome") ? e.substring(e.indexOf("Chrome") + 7) : e.substring(e.indexOf("CriOS") + 6) : t.safari ? n = e.substring(e.indexOf("Version") + 8) : t.firefox ? n = e.substring(e.indexOf("Firefox") + 8) : t.edge ? n = e.substring(e.indexOf("Edge") + 5) : t.ie && (-1 !== e.indexOf("rv:") ? n = e.substring(e.indexOf("rv:") + 3) : -1 !== e.indexOf("MSIE") && (n = e.substring(e.indexOf("MSIE") + 5))), n && (-1 !== (o = n.indexOf(";")) && (n = n.substring(0, o)), -1 !== (o = n.indexOf(" ")) && (n = n.substring(0, o)), -1 !== (o = n.indexOf(")")) && (n = n.substring(0, o)), r = parseInt(n, 10), i = parseInt(n.split(".")[1], 10)), {
                    version: n,
                    major: r,
                    minor: i
                }
            }.bind(void 0, a, u)),
            enumerable: !0
        }
    }), Object.defineProperties(c, {
        android: {
            get: Object(o.y)(r.b),
            enumerable: !0
        },
        iOS: {
            get: Object(o.y)(r.j),
            enumerable: !0
        },
        mobile: {
            get: Object(o.y)(r.o),
            enumerable: !0
        },
        mac: {
            get: Object(o.y)(r.p),
            enumerable: !0
        },
        iPad: {
            get: Object(o.y)(r.k),
            enumerable: !0
        },
        iPhone: {
            get: Object(o.y)(r.l),
            enumerable: !0
        },
        windows: {
            get: Object(o.y)(function() {
                return u.indexOf("Windows") > -1
            }),
            enumerable: !0
        },
        version: {
            get: Object(o.y)(function(t, e) {
                var n, r, o;
                if (t.windows) switch (n = i(/Windows(?: NT|)? ([._\d]+)/.exec(e), 1)) {
                    case "6.1":
                        n = "7.0";
                        break;
                    case "6.2":
                        n = "8.0";
                        break;
                    case "6.3":
                        n = "8.1"
                } else t.android ? n = i(/Android ([._\d]+)/.exec(e), 1) : t.iOS ? n = i(/OS ([._\d]+)/.exec(e), 1) : t.mac && (n = i(/Mac OS X (10[._\d]+)/.exec(e), 1));
                if (n) {
                    r = parseInt(n, 10);
                    var u = n.split(/[._]/);
                    u && (o = parseInt(u[1], 10))
                }
                return {
                    version: n,
                    major: r,
                    minor: o
                }
            }.bind(void 0, c, u)),
            enumerable: !0
        }
    }), Object.defineProperties(s, {
        flash: {
            get: Object(o.y)(r.h),
            enumerable: !0
        },
        flashVersion: {
            get: Object(o.y)(r.a),
            enumerable: !0
        },
        iframe: {
            get: Object(o.y)(r.m),
            enumerable: !0
        },
        passiveEvents: {
            get: Object(o.y)(function() {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function() {
                            return t = !0
                        }
                    });
                    window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e)
                } catch (t) {}
                return t
            }),
            enumerable: !0
        },
        backgroundLoading: {
            get: Object(o.y)(function() {
                return !(c.iOS || a.safari)
            }),
            enumerable: !0
        }
    })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "getAbsolutePath", function() {
        return o
    }), n.d(e, "isAbsolutePath", function() {
        return u
    }), n.d(e, "parseXML", function() {
        return c
    }), n.d(e, "serialize", function() {
        return s
    }), n.d(e, "parseDimension", function() {
        return l
    }), n.d(e, "timeFormat", function() {
        return f
    });
    var r = n(8),
        i = n(0);

    function o(t, e) {
        if (Object(r.exists)(e) || (e = document.location.href), Object(r.exists)(t)) {
            if (u(t)) return t;
            var n, i = e.substring(0, e.indexOf("://") + 3),
                o = e.substring(i.length, e.indexOf("/", i.length + 1));
            if (0 === t.indexOf("/")) n = t.split("/");
            else {
                var a = e.split("?")[0];
                n = (a = a.substring(i.length + o.length + 1, a.lastIndexOf("/"))).split("/").concat(t.split("/"))
            }
            for (var c = [], s = 0; s < n.length; s++) n[s] && Object(r.exists)(n[s]) && "." !== n[s] && (".." === n[s] ? c.pop() : c.push(n[s]));
            return i + o + "/" + c.join("/")
        }
    }

    function u(t) {
        return /^(?:(?:https?|file):)?\/\//.test(t)
    }

    function a(t) {
        return Object(i.a)(t, function(t) {
            return "parsererror" === t.nodeName
        })
    }

    function c(t) {
        var e = null;
        try {
            (a((e = (new window.DOMParser).parseFromString(t, "text/xml")).childNodes) || e.childNodes && a(e.childNodes[0].childNodes)) && (e = null)
        } catch (t) {}
        return e
    }

    function s(t) {
        if (void 0 === t) return null;
        if ("string" == typeof t && t.length < 6) {
            var e = t.toLowerCase();
            if ("true" === e) return !0;
            if ("false" === e) return !1;
            if (!Object(i.r)(Number(t)) && !Object(i.r)(parseFloat(t))) return Number(t)
        }
        return t
    }

    function l(t) {
        return "string" == typeof t ? "" === t ? 0 : t.lastIndexOf("%") > -1 ? t : parseInt(t.replace("px", ""), 10) : t
    }

    function f(t, e) {
        if (t <= 0 && !e || Object(i.r)(parseInt(t))) return "00:00";
        var n = t < 0 ? "-" : "";
        t = Math.abs(t);
        var r = Math.floor(t / 3600),
            o = Math.floor((t - 3600 * r) / 60),
            u = Math.floor(t % 60);
        return n + (r ? r + ":" : "") + (o < 10 ? "0" : "") + o + ":" + (u < 10 ? "0" : "") + u
    }
}, function(t, e, n) {
    "use strict";
    e.a = []
}, function(t, e, n) {
    "use strict";
    n.d(e, "h", function() {
        return d
    }), n.d(e, "c", function() {
        return h
    }), n.d(e, "e", function() {
        return g
    }), n.d(e, "f", function() {
        return b
    }), n.d(e, "b", function() {
        return y
    }), n.d(e, "d", function() {
        return j
    }), n.d(e, "g", function() {
        return O
    }), n.d(e, "a", function() {
        return w
    });
    var r = n(0),
        i = n(5),
        o = n(22),
        u = n(8),
        a = n(33),
        c = {},
        s = {
            zh: "Chinese",
            nl: "Dutch",
            en: "English",
            fr: "French",
            de: "German",
            it: "Italian",
            ja: "Japanese",
            pt: "Portuguese",
            ru: "Russian",
            es: "Spanish",
            el: "Greek",
            fi: "Finnish",
            id: "Indonesian",
            ko: "Korean",
            th: "Thai",
            vi: "Vietnamese"
        };
    Object(r.n)(s);

    function l(t) {
        var e = f(t),
            n = e.indexOf("_");
        return -1 === n ? e : e.substring(0, n)
    }

    function f(t) {
        return t.toLowerCase().replace("-", "_")
    }

    function d(t) {
        return t ? Object.keys(t).reduce(function(e, n) {
            return e[f(n)] = t[n], e
        }, {}) : {}
    }

    function p(t) {
        var e = t.querySelector("html");
        return e ? e.getAttribute("lang") : null
    }

    function h() {
        var t = p(document);
        if (!t && Object(i.m)()) try {
            t = p(window.top.document)
        } catch (t) {}
        return t || navigator.language || "en"
    }
    var v = ["ar", "da", "de", "es", "fi", "fr", "he", "id", "it", "ja", "ko", "nl", "no", "pt", "ro", "ru", "sv", "th", "tr", "vi", "zh"];

    function g(t) {
        return 8207 === t.charCodeAt(0) || /^[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(t)
    }

    function b(t) {
        return v.indexOf(l(t)) >= 0
    }

    function y(t, e, n) {
        return Object(r.h)({}, function(t) {
            var e = t.advertising,
                n = t.related,
                i = t.sharing,
                o = t.abouttext,
                u = Object(r.h)({}, t.localization);
            e && (u.advertising = u.advertising || {}, m(u.advertising, e, "admessage"), m(u.advertising, e, "cuetext"), m(u.advertising, e, "loadingAd"), m(u.advertising, e, "podmessage"), m(u.advertising, e, "skipmessage"), m(u.advertising, e, "skiptext"));
            "string" == typeof u.related ? u.related = {
                heading: u.related
            } : u.related = u.related || {};
            n && m(u.related, n, "autoplaymessage");
            i && (u.sharing = u.sharing || {}, m(u.sharing, i, "heading"), m(u.sharing, i, "copied"));
            o && m(u, t, "abouttext");
            var a = u.close || u.nextUpClose;
            a && (u.close = a);
            return u
        }(t), e[l(n)], e[f(n)])
    }

    function m(t, e, n) {
        var r = t[n] || e[n];
        r && (t[n] = r)
    }

    function j(t) {
        return Object(u.isDeepKeyCompliant)(a.a, t, function(t, e) {
            return "string" == typeof e[t]
        })
    }

    function O(t, e) {
        var n = c[e];
        if (!n) {
            var r = "".concat(t, "translations/").concat(l(e), ".json");
            c[e] = n = new Promise(function(t, n) {
                Object(o.a)({
                    url: r,
                    oncomplete: t,
                    onerror: function(t, r, i, o) {
                        c[e] = null, n(o)
                    },
                    responseType: "json"
                })
            })
        }
        return n
    }

    function w(t, e) {
        var n = Object(r.h)({}, t, e);
        return k(n, "errors", t, e), k(n, "related", t, e), k(n, "sharing", t, e), k(n, "advertising", t, e), n
    }

    function k(t, e, n, i) {
        t[e] = Object(r.h)({}, n[e], i[e])
    }
}, function(t, e, n) {
    "use strict";
    var r = n(48),
        i = n(8),
        o = document.createElement("video"),
        u = {
            aac: "audio/mp4",
            mp4: "video/mp4",
            f4v: "video/mp4",
            m4v: "video/mp4",
            mov: "video/mp4",
            mp3: "audio/mpeg",
            mpeg: "audio/mpeg",
            ogv: "video/ogg",
            ogg: "video/ogg",
            oga: "video/ogg",
            vorbis: "video/ogg",
            webm: "video/webm",
            f4a: "video/aac",
            m3u8: "application/vnd.apple.mpegurl",
            m3u: "application/vnd.apple.mpegurl",
            hls: "application/vnd.apple.mpegurl"
        },
        a = [{
            name: "html5",
            supports: function(t) {
                if (!1 === Object(r.a)(t)) return !1;
                if (!o.canPlayType) return !1;
                var e = t.file,
                    n = t.type;
                if (Object(i.isRtmp)(e, n)) return !1;
                var a = t.mimeType || u[n];
                if (!a) return !1;
                var c = t.mediaTypes;
                c && c.length && (a = [a].concat(c.slice()).join("; "));
                return !!o.canPlayType(a)
            }
        }];
    e.a = a
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var r = Date.now || function() {
        return (new Date).getTime()
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return l
    }), n.d(e, "d", function() {
        return f
    }), n.d(e, "b", function() {
        return d
    }), n.d(e, "c", function() {
        return p
    });
    var r = n(25),
        i = n(26),
        o = n(13),
        u = n(21),
        a = n(32),
        c = n(1),
        s = null,
        l = {};

    function f(t) {
        return s || (s = function(t) {
            var e = t.get("controls"),
                s = h(),
                f = function(t, e) {
                    var n = t.get("playlist");
                    if (Array.isArray(n) && n.length)
                        for (var u = Object(i.c)(Object(r.a)(n[0]), t), a = 0; a < u.length; a++)
                            for (var c = u[a], s = t.getProviders(), l = 0; l < o.a.length; l++) {
                                var f = o.a[l];
                                if (s.providerSupports(f, c)) return f.name === e
                            }
                    return !1
                }(t, "html5");
            if (e && s && f) return p = n.e(6).then(function(t) {
                n(30);
                var e = n(17).default;
                return a.a.controls = n(16).default, Object(u.a)(n(31).default), e
            }.bind(null, n)).catch(d(c.o + 105)), l.html5 = p, p;
            var p;
            if (e && f) return function() {
                var t = n.e(4).then(function(t) {
                    var e = n(17).default;
                    return a.a.controls = n(16).default, Object(u.a)(n(31).default), e
                }.bind(null, n)).catch(d(c.o + 104));
                return l.html5 = t, t
            }();
            if (e && s) return n.e(5).then(function(t) {
                n(30);
                var e = n(17).default;
                return a.a.controls = n(16).default, e
            }.bind(null, n)).catch(d(c.o + 103));
            if (e) return n.e(3).then(function(t) {
                var e = n(17).default;
                return a.a.controls = n(16).default, e
            }.bind(null, n)).catch(d(c.o + 102));
            return (h() ? n.e(7).then(function(t) {
                return n(30)
            }.bind(null, n)).catch(d(c.o + 120)) : Promise.resolve()).then(function() {
                return n.e(2).then(function(t) {
                    return n(17).default
                }.bind(null, n)).catch(d(c.o + 101))
            })
        }(t)), s
    }

    function d(t, e) {
        return function() {
            throw new c.n(c.j, t, e)
        }
    }

    function p(t, e) {
        return function() {
            throw new c.n(null, t, e)
        }
    }

    function h() {
        var t = window.IntersectionObserverEntry;
        return !(t && "IntersectionObserver" in window && "intersectionRatio" in t.prototype)
    }
}, , , function(t, e, n) {
    "use strict";
    e.a = {
        debug: !1
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return c
    }), n.d(e, "b", function() {
        return s
    }), n.d(e, "d", function() {
        return l
    }), n.d(e, "e", function() {
        return p
    }), n.d(e, "c", function() {
        return h
    });
    var r = n(2),
        i = n(35),
        o = n.n(i);

    function u(t) {
        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var a, c = o.a.clear;

    function s(t, e, n, r) {
        n = n || "all-players";
        var i = "";
        if ("object" === u(e)) {
            var a = document.createElement("div");
            l(a, e);
            var c = a.style.cssText;
            Object.prototype.hasOwnProperty.call(e, "content") && c && (c = "".concat(c, ' content: "').concat(e.content, '";')), r && c && (c = c.replace(/;/g, " !important;")), i = "{" + c + "}"
        } else "string" == typeof e && (i = e);
        "" !== i && "{}" !== i ? o.a.style([
            [t, t + i]
        ], n) : o.a.clear(n, t)
    }

    function l(t, e) {
        if (null != t) {
            var n;
            void 0 === t.length && (t = [t]);
            var r = {};
            for (n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = d(n, e[n]));
            for (var i = 0; i < t.length; i++) {
                var o = t[i],
                    u = void 0;
                if (null != o)
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (u = f(n), o.style[u] !== r[n] && (o.style[u] = r[n]))
            }
        }
    }

    function f(t) {
        t = t.split("-");
        for (var e = 1; e < t.length; e++) t[e] = t[e].charAt(0).toUpperCase() + t[e].slice(1);
        return t.join("")
    }

    function d(t, e) {
        return "" === e || null == e ? "" : "string" == typeof e && isNaN(e) ? /png|gif|jpe?g/i.test(e) && e.indexOf("url") < 0 ? "url(" + e + ")" : e : 0 === e || "z-index" === t || "opacity" === t ? "" + e : /color/i.test(t) ? "#" + Object(r.d)(e.toString(16).replace(/^0x/i, ""), 6) : Math.ceil(e) + "px"
    }

    function p(t, e) {
        l(t, {
            transform: e,
            webkitTransform: e,
            msTransform: e,
            mozTransform: e,
            oTransform: e
        })
    }

    function h(t, e) {
        var n = "rgb",
            r = void 0 !== e && 100 !== e;
        if (r && (n += "a"), !a) {
            var i = document.createElement("canvas");
            i.height = 1, i.width = 1, a = i.getContext("2d")
        }
        t ? isNaN(parseInt(t, 16)) || (t = "#" + t) : t = "#000000", a.clearRect(0, 0, 1, 1), a.fillStyle = t, a.fillRect(0, 0, 1, 1);
        var o = a.getImageData(0, 0, 1, 1).data;
        return n += "(" + o[0] + ", " + o[1] + ", " + o[2], r && (n += ", " + e / 100), n + ")"
    }
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "getScriptPath", function() {
        return i
    }), n.d(e, "repo", function() {
        return o
    }), n.d(e, "versionCheck", function() {
        return u
    }), n.d(e, "loadFrom", function() {
        return a
    });
    var r = n(23),
        i = (n(8), function(t) {
            for (var e = document.getElementsByTagName("script"), n = 0; n < e.length; n++) {
                var r = e[n].src;
                if (r) {
                    var i = r.lastIndexOf("/" + t);
                    if (i >= 0) return r.substr(0, i + 1)
                }
            }
            return ""
        }),
        o = function() {
            return i("jwplayer.js")
        },
        u = function(t) {
            var e = ("0" + t).split(/\W/),
                n = r.a.split(/\W/),
                i = parseFloat(e[0]),
                o = parseFloat(n[0]);
            return !(i > o) && !(i === o && parseFloat("0" + e[1]) > parseFloat(n[1]))
        },
        a = function() {
            return i("jwplayer.js")
        }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return a
    });
    var r = n(28),
        i = n(13),
        o = n(49),
        u = n(0);

    function a(t) {
        var e = t.getName().name;
        if (!r.a[e]) {
            if (!Object(u.j)(i.a, Object(u.x)({
                    name: e
                }))) {
                if (!Object(u.q)(t.supports)) throw new Error("Tried to register a provider with an invalid object");
                i.a.unshift({
                    name: e,
                    supports: t.supports
                })
            }
            Object(u.e)(t.prototype, o.a), r.a[e] = t
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return y
    });
    var r = n(0),
        i = n(10),
        o = n(8),
        u = n(1),
        a = 1,
        c = 2,
        s = 3,
        l = 4,
        f = 5,
        d = 6,
        p = 7,
        h = 601,
        v = 602,
        g = 611,
        b = function() {};

    function y(t, e, n, h) {
        var w;
        t === Object(t) && (t = (h = t).url);
        var k = Object(r.h)({
                xhr: null,
                url: t,
                withCredentials: !1,
                retryWithoutCredentials: !1,
                timeout: 6e4,
                timeoutId: -1,
                oncomplete: e || b,
                onerror: n || b,
                mimeType: h && !h.responseType ? "text/xml" : "",
                requireValidXML: !1,
                responseType: h && h.plainText ? "text" : "",
                useDomParser: !1,
                requestFilter: null
            }, h),
            C = function(t, e) {
                return function(t, n) {
                    var i = t.currentTarget || e.xhr;
                    if (clearTimeout(e.timeoutId), e.retryWithoutCredentials && e.xhr.withCredentials) {
                        m(i);
                        var o = Object(r.h)({}, e, {
                            xhr: null,
                            withCredentials: !1,
                            retryWithoutCredentials: !1
                        });
                        y(o)
                    } else !n && i.status >= 400 && i.status < 600 && (n = i.status), j(e, n ? u.k : u.m, n || d, t)
                }
            }(0, k);
        if ("XMLHttpRequest" in window) {
            if (w = k.xhr = k.xhr || new window.XMLHttpRequest, "function" == typeof k.requestFilter) {
                var P;
                try {
                    P = k.requestFilter({
                        url: t,
                        xhr: w
                    })
                } catch (t) {
                    return C(t, f), w
                }
                P && "open" in P && "send" in P && (w = k.xhr = P)
            }
            w.onreadystatechange = function(t) {
                return function(e) {
                    var n = e.currentTarget || t.xhr;
                    if (4 === n.readyState) {
                        clearTimeout(t.timeoutId);
                        var a = n.status;
                        if (a >= 400) return void j(t, u.k, a < 600 ? a : d);
                        if (200 === a) return function(t) {
                            return function(e) {
                                var n = e.currentTarget || t.xhr;
                                if (clearTimeout(t.timeoutId), t.responseType) {
                                    if ("json" === t.responseType) return function(t, e) {
                                        if (!t.response || "string" == typeof t.response && '"' !== t.responseText.substr(1)) try {
                                            t = Object(r.h)({}, t, {
                                                response: JSON.parse(t.responseText)
                                            })
                                        } catch (t) {
                                            return void j(e, u.k, g, t)
                                        }
                                        return e.oncomplete(t)
                                    }(n, t)
                                } else {
                                    var o, a = n.responseXML;
                                    if (a) try {
                                        o = a.firstChild
                                    } catch (t) {}
                                    if (a && o) return O(n, a, t);
                                    if (t.useDomParser && n.responseText && !a && (a = Object(i.parseXML)(n.responseText)) && a.firstChild) return O(n, a, t);
                                    if (t.requireValidXML) return void j(t, u.k, v)
                                }
                                t.oncomplete(n)
                            }
                        }(t)(e);
                        0 === a && Object(o.isFileProtocol)() && !/^[a-z][a-z0-9+.-]*:/.test(t.url) && j(t, u.k, p)
                    }
                }
            }(k), w.onerror = C, "overrideMimeType" in w ? k.mimeType && w.overrideMimeType(k.mimeType) : k.useDomParser = !0;
            try {
                t = t.replace(/#.*$/, ""), w.open("GET", t, !0)
            } catch (t) {
                return C(t, s), w
            }
            if (k.responseType) try {
                w.responseType = k.responseType
            } catch (t) {}
            k.timeout && (k.timeoutId = setTimeout(function() {
                m(w), j(k, u.m, a)
            }, k.timeout), w.onabort = function() {
                clearTimeout(k.timeoutId)
            });
            try {
                k.withCredentials && "withCredentials" in w && (w.withCredentials = !0), w.send()
            } catch (t) {
                C(t, l)
            }
            return w
        }
        j(k, u.m, c)
    }

    function m(t) {
        t.onload = null, t.onprogress = null, t.onreadystatechange = null, t.onerror = null, "abort" in t && t.abort()
    }

    function j(t, e, n, r) {
        t.onerror(e, t.url, t.xhr, new u.n(e, n, r))
    }

    function O(t, e, n) {
        var i = e.documentElement;
        if (!n.requireValidXML || "parsererror" !== i.nodeName && !i.getElementsByTagName("parsererror").length) return t.responseXML || (t = Object(r.h)({}, t, {
            responseXML: e
        })), n.oncomplete(t);
        j(n, u.k, h)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var r = "8.8.2+local.2019-04-14-10-10-00-755"
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(14),
        o = window.performance || {
            timing: {}
        },
        u = o.timing.navigationStart || Object(i.a)();

    function a() {
        return u + o.now()
    }
    "now" in o || (o.now = function() {
        return Object(i.a)() - u
    });
    e.a = function() {
        var t = {},
            e = {},
            n = {},
            i = {};
        return {
            start: function(e) {
                t[e] = a(), n[e] = n[e] + 1 || 1
            },
            end: function(n) {
                if (t[n]) {
                    var r = a() - t[n];
                    delete t[n], e[n] = e[n] + r || r
                }
            },
            dump: function() {
                var o = Object(r.h)({}, e);
                for (var u in t)
                    if (Object.prototype.hasOwnProperty.call(t, u)) {
                        var c = a() - t[u];
                        o[u] = o[u] + c || c
                    }
                return {
                    counts: Object(r.h)({}, n),
                    sums: o,
                    events: Object(r.h)({}, i)
                }
            },
            tick: function(t) {
                i[t] = a()
            },
            clear: function(t) {
                delete i[t]
            },
            between: function(t, e) {
                return i[e] && i[t] ? i[e] - i[t] : null
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(29),
        o = function(t) {
            if (t && t.file) return Object(r.h)({}, {
                kind: "captions",
                default: !1
            }, t)
        },
        u = Array.isArray;
    e.a = function(t) {
        u((t = t || {}).tracks) || delete t.tracks;
        var e = Object(r.h)({}, {
            sources: [],
            tracks: [],
            minDvrWindow: 120,
            dvrSeekLimit: 25
        }, t);
        e.dvrSeekLimit < 5 && (e.dvrSeekLimit = 5), e.sources !== Object(e.sources) || u(e.sources) || (e.sources = [Object(i.a)(e.sources)]), u(e.sources) && 0 !== e.sources.length || (t.levels ? e.sources = t.levels : e.sources = [Object(i.a)(t)]);
        for (var n = 0; n < e.sources.length; n++) {
            var a = e.sources[n];
            if (a) {
                var c = a.default;
                a.default = !!c && "true" === c.toString(), e.sources[n].label || (e.sources[n].label = n.toString()), e.sources[n] = Object(i.a)(e.sources[n])
            }
        }
        return e.sources = e.sources.filter(function(t) {
            return !!t
        }), u(e.tracks) || (e.tracks = []), u(e.captions) && (e.tracks = e.tracks.concat(e.captions), delete e.captions), e.tracks = e.tracks.map(o).filter(function(t) {
            return !!t
        }), e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = {
            none: !0,
            metadata: !0,
            auto: !0
        };

    function o(t, e) {
        return i[t] ? t : i[e] ? e : "metadata"
    }
    var u = n(25),
        a = n(29),
        c = n(34),
        s = n(1);
    n.d(e, "b", function() {
        return l
    }), n.d(e, "e", function() {
        return f
    }), n.d(e, "d", function() {
        return d
    }), n.d(e, "c", function() {
        return p
    });

    function l(t, e, n) {
        return delete Object(r.h)({}, n).playlist, t.map(function(t) {
            return d(e, t, n)
        }).filter(function(t) {
            return !!t
        })
    }

    function f(t) {
        if (!Array.isArray(t) || 0 === t.length) throw new s.n(s.k, 630)
    }

    function d(t, e, n) {
        var i = t.getProviders(),
            u = t.get("preload"),
            a = Object(r.h)({}, e);
        if (a.preload = o(e.preload, u), a.allSources = h(e, t), a.sources = v(a.allSources, i), a.sources.length) return a.file = a.sources[0].file, a.feedData = n, a
    }
    var p = function(t, e) {
        return v(h(t, e), e.getProviders())
    };

    function h(t, e) {
        var n = e.attributes,
            r = t.sources,
            i = t.allSources,
            u = t.preload,
            c = t.drm,
            s = g(t.withCredentials, n.withCredentials);
        return (i || r).map(function(t) {
            if (t !== Object(t)) return null;
            b(t, n, "androidhls"), b(t, n, "hlsjsdefault"), b(t, n, "safarihlsjs"), t.preload = o(t.preload, u);
            var e = t.drm || c || n.drm;
            e && (t.drm = e);
            var r = g(t.withCredentials, s);
            return void 0 !== r && (t.withCredentials = r), Object(a.a)(t)
        }).filter(function(t) {
            return !!t
        })
    }

    function v(t, e) {
        e && e.choose || (e = new c.a);
        var n = function(t, e) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n],
                    i = e.choose(r),
                    o = i.providerToCheck;
                if (o) return {
                    type: r.type,
                    provider: o
                }
            }
            return null
        }(t, e);
        if (!n) return [];
        var r = n.provider,
            i = n.type;
        return t.filter(function(t) {
            return t.type === i && e.providerSupports(r, t)
        })
    }

    function g(t, e) {
        return void 0 === t ? e : t
    }

    function b(t, e, n) {
        n in e && (t[n] = e[n])
    }
    e.a = function(t) {
        return (Array.isArray(t) ? t : [t]).map(u.a)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(0),
        o = function(t) {
            return t.replace(/^(.*\/)?([^-]*)-?.*\.(js)$/, "$2")
        };

    function u(t) {
        var e = 305e3;
        if (!t) return e;
        switch (o(t)) {
            case "jwpsrv":
                e = 305001;
                break;
            case "googima":
                e = 305002;
                break;
            case "vast":
                e = 305003;
                break;
            case "freewheel":
                e = 305004;
                break;
            case "dai":
                e = 305005;
                break;
            case "gapro":
                e = 305006
        }
        return e
    }

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var c = function() {
            this.load = function(t, e, n, o) {
                return n && "object" === a(n) ? Promise.all(Object.keys(n).filter(function(t) {
                    return t
                }).map(function(a) {
                    var c = n[a];
                    return e.setupPlugin(a).then(function(e) {
                        if (!o.attributes._destroyed) return function(t, e, n) {
                            var r = t.name,
                                o = document.createElement("div");
                            o.id = n.id + "_" + r, o.className = "jw-plugin jw-reset";
                            var u = Object(i.h)({}, e),
                                a = t.getNewInstance(n, u, o);
                            return n.addPlugin(r, a), a
                        }(e, c, t)
                    }).catch(function(t) {
                        return e.removePlugin(a), t.code ? t : new r.n(null, u(a), t)
                    })
                })) : Promise.resolve()
            }
        },
        s = n(37),
        l = n(10),
        f = n(2),
        d = 0,
        p = 1,
        h = function(t) {
            if ("string" == typeof t) {
                var e = (t = t.split("?")[0]).indexOf("://");
                if (e > 0) return d;
                var n = t.indexOf("/"),
                    r = Object(f.a)(t);
                return !(e < 0 && n < 0) || r && isNaN(r) ? p : 2
            }
        };
    var v = function(t) {
        this.url = t, this.promise_ = null
    };
    Object.defineProperties(v.prototype, {
        promise: {
            get: function() {
                return this.promise_ || this.load()
            },
            set: function() {}
        }
    }), Object(i.h)(v.prototype, {
        load: function() {
            var t = this,
                e = this.promise_;
            if (!e) {
                if (2 === h(this.url)) e = Promise.resolve(this);
                else {
                    var n = new s.a(function(t) {
                        switch (h(t)) {
                            case d:
                                return t;
                            case p:
                                return Object(l.getAbsolutePath)(t, window.location.href)
                        }
                    }(this.url));
                    this.loader = n, e = n.load().then(function() {
                        return t
                    })
                }
                this.promise_ = e
            }
            return e
        },
        registerPlugin: function(t, e, n) {
            this.name = t, this.target = e, this.js = n
        },
        getNewInstance: function(t, e, n) {
            var i = this.js;
            if ("function" != typeof i) throw new r.n(null, u(this.url) + 100);
            var o = new i(t, e, n);
            return o.addToPlayer = function() {
                var e = t.getContainer().querySelector(".jw-overlays");
                e && (n.left = e.style.left, n.top = e.style.top, e.appendChild(n), o.displayArea = e)
            }, o.resizeHandler = function() {
                var t = o.displayArea;
                t && o.resize(t.clientWidth, t.clientHeight)
            }, o
        }
    });
    var g = v,
        b = n(38),
        y = {},
        m = function() {},
        j = m.prototype;
    j.setupPlugin = function(t) {
        var e = this.getPlugin(t);
        return e ? (e.url !== t && Object(b.a)('JW Plugin "'.concat(o(t), '" already loaded from "').concat(e.url, '". Ignoring "').concat(t, '."')), e.promise) : this.addPlugin(t).load()
    }, j.addPlugin = function(t) {
        var e = o(t),
            n = y[e];
        return n || (n = new g(t), y[e] = n), n
    }, j.getPlugin = function(t) {
        return y[o(t)]
    }, j.removePlugin = function(t) {
        delete y[o(t)]
    }, j.getPlugins = function() {
        return y
    };
    var O = m;
    n.d(e, "b", function() {
        return k
    }), n.d(e, "a", function() {
        return C
    });
    var w = new O,
        k = function(t, e, n) {
            var r = w.addPlugin(t);
            r.js || r.registerPlugin(t, e, n)
        };

    function C(t, e) {
        var n = t.get("plugins");
        return window.jwplayerPluginJsonp = k, (t.pluginLoader = t.pluginLoader || new c).load(e, w, n, t).then(function(e) {
            if (!t.attributes._destroyed) return delete window.jwplayerPluginJsonp, e
        })
    }
}, function(t, e, n) {
    "use strict";
    e.a = {}
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(8),
        o = n(2);
    e.a = function(t) {
        if (t && t.file) {
            var e = Object(r.h)({}, {
                default: !1
            }, t);
            e.file = Object(o.h)("" + e.file);
            var n = /^[^\/]+\/(?:x-)?([^\/]+)$/;
            if (n.test(e.type) && (e.mimeType = e.type, e.type = e.type.replace(n, "$1")), Object(i.isYouTube)(e.file) ? e.type = "youtube" : Object(i.isRtmp)(e.file) ? e.type = "rtmp" : e.type || (e.type = Object(o.a)(e.file)), e.type) {
                switch (e.type) {
                    case "m3u8":
                    case "vnd.apple.mpegurl":
                        e.type = "hls";
                        break;
                    case "dash+xml":
                        e.type = "dash";
                        break;
                    case "m4a":
                        e.type = "aac";
                        break;
                    case "smil":
                        e.type = "rtmp"
                }
                return Object.keys(e).forEach(function(t) {
                    "" === e[t] && delete e[t]
                }), e
            }
        }
    }
}, , , function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return o
    }), n.d(e, "b", function() {
        return u
    });
    var r = n(15),
        i = null,
        o = {};

    function u() {
        return i || (i = n.e(1).then(function(t) {
            var e = n(16).default;
            return o.controls = e, e
        }.bind(null, n)).catch(function() {
            i = null, Object(r.c)(301130)()
        })), i
    }
}, function(t, e, n) {
    "use strict";
    e.a = {
        advertising: {
            admessage: "This ad will end in xx",
            cuetext: "Advertisement",
            displayHeading: "Advertisement",
            loadingAd: "Loading ad",
            podmessage: "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__.",
            skipmessage: "Skip ad in xx",
            skiptext: "Skip"
        },
        airplay: "AirPlay",
        audioTracks: "Audio Tracks",
        auto: "Auto",
        buffer: "Loading",
        cast: "Chromecast",
        cc: "Closed Captions",
        close: "Close",
        errors: {
            badConnection: "This video cannot be played because of a problem with your internet connection.",
            cantLoadPlayer: "Sorry, the video player failed to load.",
            cantPlayInBrowser: "The video cannot be played in this browser.",
            cantPlayVideo: "This video file cannot be played.",
            errorCode: "Error Code",
            liveStreamDown: "The live stream is either down or has ended.",
            protectedContent: "There was a problem providing access to protected content.",
            technicalError: "This video cannot be played because of a technical error."
        },
        exitFullscreen: "Exit Fullscreen",
        fullscreen: "Fullscreen",
        hd: "Quality",
        liveBroadcast: "Live",
        logo: "Logo",
        mute: "Mute",
        next: "Next",
        nextUp: "Next Up",
        notLive: "Not Live",
        off: "Off",
        pause: "Pause",
        play: "Play",
        playback: "Play",
        playbackRates: "Playback Rates",
        player: "Video Player",
        poweredBy: "Powered by",
        prev: "Previous",
        related: {
            autoplaymessage: "Next up in xx",
            heading: "More Videos"
        },
        replay: "Replay",
        rewind: "Rewind 10 Seconds",
        settings: "Settings",
        sharing: {
            copied: "Copied",
            email: "Email",
            embed: "Embed",
            heading: "Share",
            link: "Link"
        },
        slider: "Seek",
        stop: "Stop",
        unmute: "Unmute",
        videoInfo: "About This Video",
        volume: "Volume",
        volumeSlider: "Volume"
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(13),
        o = n(21),
        u = n(28),
        a = n(15);

    function c(t) {
        this.config = t || {}
    }
    var s = {
        html5: function() {
            return n.e(9).then(function(t) {
                var e = n(31).default;
                return Object(o.a)(e), e
            }.bind(null, n)).catch(Object(a.b)(152))
        }
    };
    Object(r.h)(c.prototype, {
        load: function(t) {
            var e = s[t],
                n = function() {
                    return Promise.reject(new Error("Failed to load media"))
                };
            return e ? e().then(function() {
                var e = u.a[t];
                return e || n()
            }) : n()
        },
        providerSupports: function(t, e) {
            return t.supports(e)
        },
        choose: function(t) {
            if (t === Object(t))
                for (var e = i.a.length, n = 0; n < e; n++) {
                    var r = i.a[n];
                    if (this.providerSupports(r, t)) return {
                        priority: e - n - 1,
                        name: r.name,
                        type: t.type,
                        providerToCheck: r,
                        provider: u.a[r.name]
                    }
                }
            return {}
        }
    }), e.a = c
}, function(t, e) {
    var n, r, i = {},
        o = {},
        u = (n = function() {
            return document.head || document.getElementsByTagName("head")[0]
        }, function() {
            return void 0 === r && (r = n.apply(this, arguments)), r
        });

    function a(t) {
        var e = document.createElement("style");
        return e.type = "text/css", e.setAttribute("data-jwplayer-id", t),
            function(t) {
                u().appendChild(t)
            }(e), e
    }

    function c(t, e) {
        var n, r, i, u = o[t];
        u || (u = o[t] = {
            element: a(t),
            counter: 0
        });
        var c = u.counter++;
        return n = u.element, i = function() {
                f(n, c, "")
            }, (r = function(t) {
                f(n, c, t)
            })(e.css),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media) return;
                    r((e = t).css)
                } else i()
            }
    }
    t.exports = {
        style: function(t, e) {
            ! function(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        o = (i[t] || {})[r.id];
                    if (o) {
                        for (var u = 0; u < o.parts.length; u++) o.parts[u](r.parts[u]);
                        for (; u < r.parts.length; u++) o.parts.push(c(t, r.parts[u]))
                    } else {
                        for (var a = [], u = 0; u < r.parts.length; u++) a.push(c(t, r.parts[u]));
                        i[t] = i[t] || {}, i[t][r.id] = {
                            id: r.id,
                            parts: a
                        }
                    }
                }
            }(e, function(t) {
                for (var e = [], n = {}, r = 0; r < t.length; r++) {
                    var i = t[r],
                        o = i[0],
                        u = i[1],
                        a = i[2],
                        c = {
                            css: u,
                            media: a
                        };
                    n[o] ? n[o].parts.push(c) : e.push(n[o] = {
                        id: o,
                        parts: [c]
                    })
                }
                return e
            }(t))
        },
        clear: function(t, e) {
            var n = i[t];
            if (!n) return;
            if (e) {
                var r = n[e];
                if (r)
                    for (var o = 0; o < r.parts.length; o += 1) r.parts[o]();
                return
            }
            for (var u = Object.keys(n), a = 0; a < u.length; a += 1)
                for (var c = n[u[a]], s = 0; s < c.parts.length; s += 1) c.parts[s]();
            delete i[t]
        }
    };
    var s, l = (s = [], function(t, e) {
        return s[t] = e, s.filter(Boolean).join("\n")
    });

    function f(t, e, n) {
        if (t.styleSheet) t.styleSheet.cssText = l(e, n);
        else {
            var r = document.createTextNode(n),
                i = t.childNodes[e];
            i ? t.replaceChild(r, i) : t.appendChild(r)
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = function(t, e, n, r) {
            var i = r ? "(".concat(n, ": ").concat(r, ")").replace(/\s+/g, "&nbsp;") : "";
            return '<div id="'.concat(t, '" class="jw-error jw-reset">') + '<div class="jw-error-msg jw-info-overlay jw-reset"><style>' + '[id="'.concat(t, '"].jw-error{background:#000;overflow:hidden;position:relative}') + '[id="'.concat(t, '"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}') + '[id="'.concat(t, '"] .jw-error-text{text-align:start;color:#FFF;font:14px/1.35 Arial,Helvetica,sans-serif}') + '</style><div class="jw-icon jw-reset"></div><div class="jw-info-container jw-reset">' + '<div class="jw-error-text jw-reset-text" dir="auto">'.concat(e || "", '<span class="jw-break jw-reset"></span>').concat(i, "</div>") + "</div></div></div>"
        },
        i = n(7),
        o = n(19);

    function u(t, e) {
        var n = e.message,
            u = e.code,
            a = r(t.get("id"), n, t.get("localization").errors.errorCode, u),
            c = t.get("width"),
            s = t.get("height"),
            l = Object(i.e)(a);
        return Object(o.d)(l, {
            width: c.toString().indexOf("%") > 0 ? c : "".concat(c, "px"),
            height: s.toString().indexOf("%") > 0 ? s : "".concat(s, "px")
        }), l
    }
    n.d(e, "a", function() {
        return u
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(6),
        o = n(3),
        u = {},
        a = 45e3,
        c = 2,
        s = 3;

    function l(t) {
        var e = document.createElement("link");
        return e.type = "text/css", e.rel = "stylesheet", e.href = t, e
    }

    function f(t) {
        var e = document.createElement("script");
        return e.type = "text/javascript", e.charset = "utf-8", e.async = !0, e.timeout = a, e.src = t, e
    }
    var d = function(t, e) {
        var n = this,
            r = 0;

        function i(t) {
            r = c, n.trigger(o.w, t).off()
        }

        function d(t) {
            r = s, n.trigger(o.jb, t).off()
        }
        this.getStatus = function() {
            return r
        }, this.load = function() {
            var n = u[t];
            return 0 !== r ? n : (n && n.then(d).catch(i), r = 1, n = new Promise(function(n, r) {
                var o = (e ? l : f)(t),
                    u = function() {
                        o.onerror = o.onload = null, clearTimeout(s)
                    },
                    c = function(t) {
                        u(), i(t), r(t)
                    },
                    s = setTimeout(function() {
                        c(new Error("Network timeout ".concat(t)))
                    }, a);
                o.onerror = function() {
                    c(new Error("Failed to load ".concat(t)))
                }, o.onload = function(t) {
                    u(), d(t), n(t)
                };
                var p = document.getElementsByTagName("head")[0] || document.documentElement;
                p.insertBefore(o, p.firstChild)
            }), u[t] = n, n)
        }
    };
    Object(r.h)(d.prototype, i.a), e.a = d
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var r = "function" == typeof console.log ? console.log.bind(console) : function() {}
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return x
    }), n.d(e, "b", function() {
        return A
    });
    var r = n(9),
        i = n(3),
        o = n(6),
        u = n(14),
        a = n(7);

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function l(t, e) {
        return !e || "object" !== c(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function f(t, e, n) {
        return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var r = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = d(t)););
                return t
            }(t, e);
            if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value
            }
        })(t, e, n || t)
    }

    function d(t) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function p(t, e) {
        return (p = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var h, v, g = "ontouchstart" in window,
        b = "PointerEvent" in window && !r.OS.android,
        y = !(b || g && r.OS.mobile),
        m = "window",
        j = "keydown",
        O = r.Features.passiveEvents,
        w = !!O && {
            passive: !0
        },
        k = 6,
        C = 300,
        P = 500,
        x = function(t) {
            function e(t, n) {
                var r;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), r = l(this, d(e).call(this));
                var i = !(n = n || {}).preventScrolling;
                return r.directSelect = !!n.directSelect, r.dragged = !1, r.enableDoubleTap = !1, r.el = t, r.handlers = {}, r.options = {}, r.lastClick = 0, r.lastStart = 0, r.passive = i, r.pointerId = null, r.startX = 0, r.startY = 0, r.event = null, r
            }
            var n, r, i;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && p(t, e)
            }(e, o["a"]), n = e, (r = [{
                key: "on",
                value: function(t, n, r) {
                    return T(t) && (this.handlers[t] || _[t](this)), f(d(e.prototype), "on", this).call(this, t, n, r)
                }
            }, {
                key: "off",
                value: function(t, n, r) {
                    var i = this;
                    if (T(t)) N(this, t);
                    else if (!t) {
                        var o = this.handlers;
                        Object.keys(o).forEach(function(t) {
                            N(i, t)
                        })
                    }
                    return f(d(e.prototype), "off", this).call(this, t, n, r)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.off(), b && I(this), this.el = null
                }
            }]) && s(n.prototype, r), i && s(n, i), e
        }(),
        S = /\s+/;

    function T(t) {
        return t && !(S.test(t) || "object" === c(t))
    }

    function E(t) {
        if (!t.handlers.init) {
            var e = t.el,
                n = t.passive,
                r = !!O && {
                    passive: n
                },
                o = function(i) {
                    if (Object(a.n)(e, "jw-tab-focus"), ! function(t) {
                            if ("which" in t) return 3 === t.which;
                            if ("button" in t) return 2 === t.button;
                            return !1
                        }(i)) {
                        var o = i.target,
                            l = i.type;
                        if (!t.directSelect || o === e) {
                            var f = R(i),
                                d = f.pageX,
                                p = f.pageY;
                            if (t.dragged = !1, t.lastStart = Object(u.a)(), t.startX = d, t.startY = p, N(t, m), "pointerdown" === l && i.isPrimary) {
                                if (!n) {
                                    var h = i.pointerId;
                                    t.pointerId = h, e.setPointerCapture(h)
                                }
                                F(t, m, "pointermove", c, r), F(t, m, "pointercancel", s), F(t, m, "pointerup", s), "BUTTON" === e.tagName && e.focus()
                            } else "mousedown" === l ? (F(t, m, "mousemove", c, r), F(t, m, "mouseup", s)) : "touchstart" === l && (F(t, m, "touchmove", c, r), F(t, m, "touchcancel", s), F(t, m, "touchend", s), n || D(i))
                        }
                    }
                },
                c = function(e) {
                    if (t.dragged) M(t, i.s, e);
                    else {
                        var r = R(e),
                            o = r.pageX,
                            u = r.pageY,
                            a = o - t.startX,
                            c = u - t.startY;
                        a * a + c * c > k * k && (M(t, i.u, e), t.dragged = !0, M(t, i.s, e))
                    }
                    n || "touchmove" !== e.type || D(e)
                },
                s = function(n) {
                    if (clearTimeout(h), t.el)
                        if (I(t), N(t, m), t.dragged) t.dragged = !1, M(t, i.t, n);
                        else if (-1 === n.type.indexOf("cancel") && e.contains(n.target)) {
                        if (Object(u.a)() - t.lastStart > P) return;
                        var r = "pointerup" === n.type || "pointercancel" === n.type,
                            o = "mouseup" === n.type || r && "mouse" === n.pointerType;
                        ! function(t, e, n) {
                            if (t.enableDoubleTap)
                                if (Object(u.a)() - t.lastClick < C) {
                                    var r = n ? i.q : i.r;
                                    M(t, r, e), t.lastClick = 0
                                } else t.lastClick = Object(u.a)()
                        }(t, n, o), o ? M(t, i.n, n) : (M(t, i.qb, n), "touchend" !== n.type || O || D(n))
                    }
                };
            b ? F(t, "init", "pointerdown", o, r) : (y && F(t, "init", "mousedown", o, r), F(t, "init", "touchstart", o, r)), v || (v = new x(document).on("interaction")), F(t, "init", "blur", function() {
                Object(a.n)(e, "jw-tab-focus")
            }), F(t, "init", "focus", function() {
                v.event && v.event.type === j && Object(a.a)(e, "jw-tab-focus")
            })
        }
    }
    var _ = {
        drag: function(t) {
            E(t)
        },
        dragStart: function(t) {
            E(t)
        },
        dragEnd: function(t) {
            E(t)
        },
        click: function(t) {
            E(t)
        },
        tap: function(t) {
            E(t)
        },
        doubleTap: function(t) {
            t.enableDoubleTap = !0, E(t)
        },
        doubleClick: function(t) {
            t.enableDoubleTap = !0, E(t)
        },
        longPress: function(t) {
            if (r.OS.iOS) {
                var e = function() {
                    clearTimeout(h)
                };
                F(t, "longPress", "touchstart", function(n) {
                    e(), h = setTimeout(function() {
                        M(t, "longPress", n)
                    }, P)
                }), F(t, "longPress", "touchmove", e), F(t, "longPress", "touchcancel", e), F(t, "longPress", "touchend", e)
            } else t.el.oncontextmenu = function(e) {
                return M(t, "longPress", e), !1
            }
        },
        focus: function(t) {
            F(t, "focus", "focus", function(e) {
                L(t, "focus", e)
            })
        },
        blur: function(t) {
            F(t, "blur", "blur", function(e) {
                L(t, "blur", e)
            })
        },
        over: function(t) {
            (b || y) && F(t, i.Y, b ? "pointerover" : "mouseover", function(e) {
                "touch" !== e.pointerType && M(t, i.Y, e)
            })
        },
        out: function(t) {
            if (b) {
                var e = t.el;
                F(t, i.X, "pointerout", function(n) {
                    if ("touch" !== n.pointerType && "x" in n) {
                        var r = document.elementFromPoint(n.x, n.y);
                        e.contains(r) || M(t, i.X, n)
                    }
                })
            } else y && F(t, i.X, "mouseout", function(e) {
                M(t, i.X, e)
            })
        },
        move: function(t) {
            (b || y) && F(t, i.V, b ? "pointermove" : "mousemove", function(e) {
                "touch" !== e.pointerType && M(t, i.V, e)
            })
        },
        enter: function(t) {
            F(t, i.v, j, function(e) {
                "Enter" !== e.key && 13 !== e.keyCode || (e.stopPropagation(), L(t, i.v, e))
            })
        },
        keydown: function(t) {
            F(t, j, j, function(e) {
                L(t, j, e)
            }, !1)
        },
        gesture: function(t) {
            var e = function(e) {
                return M(t, "gesture", e)
            };
            F(t, "gesture", "click", e), F(t, "gesture", j, e)
        },
        interaction: function(t) {
            var e = function(e) {
                t.event = e
            };
            F(t, "interaction", "mousedown", e, !0), F(t, "interaction", j, e, !0)
        }
    };

    function A(t) {
        var e = t.ownerDocument || t;
        return e.defaultView || e.parentWindow || window
    }

    function F(t, e, n, r) {
        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : w,
            o = t.handlers[e],
            u = t.options[e];
        if (o || (o = t.handlers[e] = {}, u = t.options[e] = {}), o[n]) throw new Error("".concat(e, " ").concat(n, " already registered"));
        o[n] = r, u[n] = i;
        var a = t.el;
        (e === m ? A(a) : a).addEventListener(n, r, i)
    }

    function N(t, e) {
        var n = t.el,
            r = t.handlers,
            i = t.options,
            o = e === m ? A(n) : n,
            u = r[e],
            a = i[e];
        u && (Object.keys(u).forEach(function(t) {
            var e = a[t];
            "boolean" == typeof e ? o.removeEventListener(t, u[t], e) : o.removeEventListener(t, u[t])
        }), r[e] = null, i[e] = null)
    }

    function I(t) {
        var e = t.el;
        null !== t.pointerId && (e.releasePointerCapture(t.pointerId), t.pointerId = null)
    }

    function L(t, e, n) {
        var r = t.el,
            i = n.target;
        t.trigger(e, {
            type: e,
            sourceEvent: n,
            currentTarget: r,
            target: i
        })
    }

    function M(t, e, n) {
        var r = function(t, e, n) {
            var r, i = e.target,
                o = e.touches,
                u = e.changedTouches,
                a = e.pointerType;
            o || u ? (r = o && o.length ? o[0] : u[0], a = a || "touch") : (r = e, a = a || "mouse");
            var c = r,
                s = c.pageX,
                l = c.pageY;
            return {
                type: t,
                pointerType: a,
                pageX: s,
                pageY: l,
                sourceEvent: e,
                currentTarget: n,
                target: i
            }
        }(e, n, t.el);
        t.trigger(e, r)
    }

    function R(t) {
        return 0 === t.type.indexOf("touch") ? (t.originalEvent || t).changedTouches[0] : t
    }

    function D(t) {
        t.preventDefault && t.preventDefault()
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return r
    }), n.d(e, "a", function() {
        return i
    });
    var r = {
            audioMode: !1,
            flashBlocked: !1,
            item: 0,
            itemMeta: {},
            playbackRate: 1,
            playRejected: !1,
            state: n(3).lb,
            itemReady: !1,
            controlsEnabled: !1
        },
        i = {
            position: 0,
            duration: 0,
            buffer: 0,
            currentTime: 0
        }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var r = function(t, e, n) {
        return Math.max(Math.min(t, n), e)
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e, n) {
        var r = [],
            i = {};

        function o() {
            for (; r.length > 0;) {
                var e = r.shift(),
                    n = e.command,
                    o = e.args;
                (i[n] || t[n]).apply(t, o)
            }
        }
        e.forEach(function(e) {
            var u = t[e];
            i[e] = u, t[e] = function() {
                var t = Array.prototype.slice.call(arguments, 0);
                n() ? r.push({
                    command: e,
                    args: t
                }) : (o(), u && u.apply(this, t))
            }
        }), Object.defineProperty(this, "queue", {
            enumerable: !0,
            get: function() {
                return r
            }
        }), this.flush = o, this.empty = function() {
            r.length = 0
        }, this.off = function() {
            e.forEach(function(e) {
                var n = i[e];
                n && (t[e] = n, delete i[e])
            })
        }, this.destroy = function() {
            this.off(), this.empty()
        }
    }
    n.d(e, "a", function() {
        return r
    })
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return s
    });
    var r = n(6);

    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function u(t, e) {
        return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function a(t) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var s = function(t) {
        function e() {
            var t;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), (t = u(this, a(e).call(this))).attributes = Object.create(null), t
        }
        var n, i, s;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && c(t, e)
        }(e, r["a"]), n = e, (i = [{
            key: "addAttributes",
            value: function(t) {
                var e = this;
                Object.keys(t).forEach(function(n) {
                    e.add(n, t[n])
                })
            }
        }, {
            key: "add",
            value: function(t, e) {
                var n = this;
                Object.defineProperty(this, t, {
                    get: function() {
                        return n.attributes[t]
                    },
                    set: function(e) {
                        return n.set(t, e)
                    },
                    enumerable: !1
                }), this.attributes[t] = e
            }
        }, {
            key: "get",
            value: function(t) {
                return this.attributes[t]
            }
        }, {
            key: "set",
            value: function(t, e) {
                if (this.attributes[t] !== e) {
                    var n = this.attributes[t];
                    this.attributes[t] = e, this.trigger("change:" + t, this, e, n)
                }
            }
        }, {
            key: "clone",
            value: function() {
                var t = {},
                    e = this.attributes;
                if (e)
                    for (var n in e) t[n] = e[n];
                return t
            }
        }, {
            key: "change",
            value: function(t, e, n) {
                this.on("change:" + t, e, n);
                var r = this.get(t);
                return e.call(n, this, r, r), this
            }
        }]) && o(n.prototype, i), s && o(n, s), e
    }()
}, function(t, e, n) {
    "use strict";
    n.d(e, "c", function() {
        return r
    }), n.d(e, "b", function() {
        return i
    }), n.d(e, "a", function() {
        return o
    });
    var r = 4,
        i = 2,
        o = 1
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var r = n(0);

    function i(t, e) {
        return Object(r.h)({}, e, {
            prime: function() {
                t.src || t.load()
            },
            getPrimedElement: function() {
                return t
            },
            clean: function() {
                e.clean(t)
            },
            recycle: function() {
                e.clean(t)
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(42),
        o = n(20),
        u = n(10),
        a = n(9),
        c = n(33),
        s = n(12),
        l = {
            autoPause: {
                viewability: !1
            },
            autostart: !1,
            bandwidthEstimate: null,
            bitrateSelection: null,
            castAvailable: !1,
            controls: !0,
            cues: [],
            defaultPlaybackRate: 1,
            displaydescription: !0,
            displaytitle: !0,
            displayPlaybackLabel: !1,
            height: 360,
            intl: {},
            language: "en",
            liveTimeout: null,
            localization: c.a,
            mute: !1,
            nextUpDisplay: !0,
            playbackRateControls: !1,
            playbackRates: [.5, 1, 1.25, 1.5, 2],
            renderCaptionsNatively: !1,
            repeat: !1,
            stretching: "uniform",
            volume: 90,
            width: 640
        };

    function f(t) {
        return t.slice && "px" === t.slice(-2) && (t = t.slice(0, -2)), t
    }
    var d = function(t, e) {
            var i = Object(r.h)({}, (window.jwplayer || {}).defaults, e, t);
            ! function(t) {
                Object.keys(t).forEach(function(e) {
                    "id" !== e && (t[e] = Object(u.serialize)(t[e]))
                })
            }(i);
            var d = i.forceLocalizationDefaults ? l.language : Object(s.c)(),
                p = Object(s.h)(i.intl);
            i.localization = Object(s.a)(c.a, Object(s.b)(i, p, d));
            var h = Object(r.h)({}, l, i);
            "." === h.base && (h.base = Object(o.getScriptPath)("jwplayer.js")), h.base = (h.base || Object(o.loadFrom)()).replace(/\/?$/, "/"), n.p = h.base, h.width = f(h.width), h.height = f(h.height), h.aspectratio = function(t, e) {
                if (-1 === e.toString().indexOf("%")) return 0;
                if ("string" != typeof t || !t) return 0;
                if (/^\d*\.?\d+%$/.test(t)) return t;
                var n = t.indexOf(":");
                if (-1 === n) return 0;
                var r = parseFloat(t.substr(0, n)),
                    i = parseFloat(t.substr(n + 1));
                return r <= 0 || i <= 0 ? 0 : i / r * 100 + "%"
            }(h.aspectratio, h.width), h.volume = Object(r.v)(h.volume) ? Math.min(Math.max(0, h.volume), 100) : l.volume, h.mute = !!h.mute, h.language = d, h.intl = p;
            var v = i.autoPause;
            v && (h.autoPause.viewability = !("viewability" in v && !v.viewability));
            var g = h.playbackRateControls;
            if (g) {
                var b = h.playbackRates;
                Array.isArray(g) && (b = g), (b = b.filter(function(t) {
                    return Object(r.s)(t) && t >= .25 && t <= 4
                }).map(function(t) {
                    return Math.round(100 * t) / 100
                })).indexOf(1) < 0 && b.push(1), b.sort(), h.playbackRateControls = !0, h.playbackRates = b
            }(!h.playbackRateControls || h.playbackRates.indexOf(h.defaultPlaybackRate) < 0) && (h.defaultPlaybackRate = 1), h.playbackRate = h.defaultPlaybackRate, h.aspectratio || delete h.aspectratio;
            var y = h.playlist;
            if (y) Array.isArray(y.playlist) && (h.feedData = y, h.playlist = y.playlist);
            else {
                var m = Object(r.z)(h, ["title", "description", "type", "mediaid", "image", "file", "sources", "tracks", "preload", "duration"]);
                h.playlist = [m]
            }
            h.qualityLabels = h.qualityLabels || h.hlslabels, delete h.duration;
            var j = h.liveTimeout;
            null !== j && (Object(r.v)(j) ? 0 !== j && (j = Math.max(30, j)) : j = null, h.liveTimeout = j);
            var O, w, k = parseFloat(h.bandwidthEstimate),
                C = parseFloat(h.bitrateSelection);
            return h.bandwidthEstimate = Object(r.v)(k) ? k : (O = h.defaultBandwidthEstimate, w = parseFloat(O), Object(r.v)(w) ? Math.max(w, 1) : l.bandwidthEstimate), h.bitrateSelection = Object(r.v)(C) ? C : l.bitrateSelection, h.backgroundLoading = Object(r.o)(h.backgroundLoading) ? h.backgroundLoading : a.Features.backgroundLoading, h
        },
        p = n(15),
        h = n(27),
        v = n(3),
        g = n(47),
        b = n(26),
        y = n(37),
        m = n(1);

    function j(t, e, n) {
        var r = t.attributes;
        r.playlist = Object(b.a)(e), r.feedData = n
    }

    function O(t) {
        return function(t) {
            var e = t.get("playlist");
            return new Promise(function(n, r) {
                if ("string" != typeof e) {
                    var i = t.get("feedData") || {};
                    return j(t, e, i), n()
                }
                var o = new g.a;
                o.on(v.db, function(e) {
                    var r = e.playlist;
                    delete e.playlist, j(t, r, e), n()
                }), o.on(v.w, function(e) {
                    j(t, [], {}), r(Object(m.u)(e, m.p))
                }), o.load(e)
            })
        }(t).then(function() {
            if (!C(t)) {
                var e = Object(b.b)(t.get("playlist"), t);
                t.attributes.playlist = e;
                try {
                    Object(b.e)(e)
                } catch (t) {
                    throw t.code += m.p, t
                }
                var n = t.getProviders(),
                    r = n.choose(e[0].sources[0]),
                    i = r.provider,
                    o = r.name;
                return "function" == typeof i ? i : p.a.html5 && "html5" === o ? p.a.html5 : n.load(o).catch(function(t) {
                    throw Object(m.u)(t, m.q)
                })
            }
        })
    }

    function w(t) {
        var e = t.get("skin") ? t.get("skin").url : void 0;
        if ("string" == typeof e && ! function(t) {
                for (var e = document.styleSheets, n = 0, r = e.length; n < r; n++)
                    if (e[n].href === t) return !0;
                return !1
            }(e)) {
            return new y.a(e, !0).load().catch(function(t) {
                return t
            })
        }
        return Promise.resolve()
    }

    function k(t) {
        var e = t.attributes,
            n = e.language,
            r = e.base,
            i = e.setupConfig,
            o = e.intl,
            u = Object(s.b)(i, o, n);
        return !Object(s.f)(n) || Object(s.d)(u) ? Promise.resolve() : new Promise(function(i) {
            return Object(s.g)(r, n).then(function(n) {
                var r = n.response;
                if (!C(t)) {
                    if (!r) throw new m.n(null, m.g);
                    e.localization = Object(s.a)(r, u), i()
                }
            }).catch(function(t) {
                i(t.code === m.g ? t : Object(m.u)(t, m.f))
            })
        })
    }

    function C(t) {
        return t.attributes._destroyed
    }
    var P = function(t) {
            var e;
            this.start = function(n) {
                var r = Object(h.a)(t, n),
                    i = Promise.all([Object(p.d)(t), r, O(t), Promise.resolve(), w(t), k(t)]),
                    o = new Promise(function(t, n) {
                        e = setTimeout(function() {
                            n(new m.n(m.j, m.s))
                        }, 6e4);
                        var r = function() {
                            clearTimeout(e), setTimeout(t, 6e4)
                        };
                        i.then(r).catch(r)
                    });
                return Promise.race([i, o]).catch(function(t) {
                    var e = function() {
                        throw t
                    };
                    return r.then(e).catch(e)
                }).then(function(t) {
                    return function(t) {
                        if (!t || !t.length) return {
                            core: null,
                            warnings: []
                        };
                        var e = t.reduce(function(t, e) {
                            return t.concat(e)
                        }, []).filter(function(t) {
                            return t && t.code
                        });
                        return {
                            core: t[0],
                            warnings: e
                        }
                    }(t)
                })
            }, this.destroy = function() {
                clearTimeout(e), t.set("_destroyed", !0), t = null
            }
        },
        x = n(34),
        S = n(24),
        T = n(18),
        E = {
            removeItem: function() {}
        };
    try {
        E = window.localStorage || E
    } catch (t) {}

    function _(t, e) {
        this.namespace = t, this.items = e
    }
    Object(r.h)(_.prototype, {
        getAllItems: function() {
            var t = this;
            return this.items.reduce(function(e, n) {
                var r = E["".concat(t.namespace, ".").concat(n)];
                return r && (e[n] = Object(u.serialize)(r)), e
            }, {})
        },
        track: function(t) {
            var e = this;
            this.items.forEach(function(n) {
                t.on("change:".concat(n), function(t, r) {
                    try {
                        E["".concat(e.namespace, ".").concat(n)] = r
                    } catch (t) {
                        T.a.debug && console.error(t)
                    }
                })
            })
        },
        clear: function() {
            var t = this;
            this.items.forEach(function(e) {
                E.removeItem("".concat(t.namespace, ".").concat(e))
            })
        }
    });
    var A = _,
        F = n(43),
        N = n(40),
        I = n(6),
        L = n(36),
        M = n(44);

    function R(t) {
        t.src || t.load()
    }

    function D() {
        var t = document.createElement("video");
        return t.className = "jw-video jw-reset", t.setAttribute("tabindex", "-1"), t.setAttribute("disableRemotePlayback", ""), t.setAttribute("webkit-playsinline", ""), t.setAttribute("playsinline", ""), t
    }
    var B = n(45),
        q = n(39);
    n.d(e, "b", function() {
        return Q
    });
    var z = function(t) {
        this._events = {}, this.modelShim = new F.a, this.modelShim._qoeItem = new S.a, this.mediaShim = {}, this.setup = new P(this.modelShim), this.currentContainer = this.originalContainer = t, this.apiQueue = new i.a(this, ["load", "play", "pause", "seek", "stop", "playlistItem", "playlistNext", "playlistPrev", "next", "preload", "setConfig", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setFullscreen", "addButton", "removeButton", "castToggle", "setMute", "setVolume", "setPlaybackRate", "addCues", "setCues", "setPlaylistItem", "resize", "setCaptions", "setControls"], function() {
            return !0
        })
    };

    function V(t, e) {
        e && e.code && (e.sourceError && console.error(e.sourceError), console.error(m.n.logMessage(e.code)))
    }

    function X(t) {
        t && t.code && console.warn(m.n.logMessage(t.code))
    }

    function Q(t, e) {
        if (!document.body.contains(t.currentContainer)) {
            var n = document.getElementById(t.get("id"));
            n && (t.currentContainer = n)
        }
        t.currentContainer.parentElement && t.currentContainer.parentElement.replaceChild(e, t.currentContainer), t.currentContainer = e
    }
    Object(r.h)(z.prototype, {
        on: I.a.on,
        once: I.a.once,
        off: I.a.off,
        trigger: I.a.trigger,
        init: function(t, e) {
            var n = this,
                i = this.modelShim,
                o = new A("jwplayer", ["volume", "mute", "captionLabel", "bandwidthEstimate", "bitrateSelection", "qualityLabel"]),
                u = o && o.getAllItems();
            i.attributes = i.attributes || {}, Object(r.h)(this.mediaShim, N.a);
            var a = t,
                c = d(Object(r.h)({}, t), u);
            c.id = e.id, c.setupConfig = a, Object(r.h)(i.attributes, c, N.b), i.getProviders = function() {
                return new x.a(c)
            }, i.setProvider = function() {};
            var s = function() {
                for (var t = M.c, e = [], n = [], r = 0; r < t; r++) {
                    var i = D();
                    e.push(i), n.push(i), R(i)
                }
                var o = n.shift(),
                    u = n.shift(),
                    a = !1;
                return {
                    primed: function() {
                        return a
                    },
                    prime: function() {
                        e.forEach(R), a = !0
                    },
                    played: function() {
                        a = !0
                    },
                    getPrimedElement: function() {
                        return n.length ? n.shift() : null
                    },
                    getAdElement: function() {
                        return o
                    },
                    getTestElement: function() {
                        return u
                    },
                    clean: function(t) {
                        if (t.src) {
                            t.removeAttribute("src");
                            try {
                                t.load()
                            } catch (t) {}
                        }
                    },
                    recycle: function(t) {
                        t && !n.some(function(e) {
                            return e === t
                        }) && (this.clean(t), n.push(t))
                    },
                    syncVolume: function(t) {
                        var n = Math.min(Math.max(0, t / 100), 1);
                        e.forEach(function(t) {
                            t.volume = n
                        })
                    },
                    syncMute: function(t) {
                        e.forEach(function(e) {
                            e.muted = t
                        })
                    }
                }
            }();
            i.get("backgroundLoading") || (s = Object(B.a)(s.getPrimedElement(), s));
            var l = new q.a(Object(q.b)(this.originalContainer)).once("gesture", function() {
                s.prime(), n.preload(), l.destroy()
            });
            return i.on("change:errorEvent", V), this.setup.start(e).then(function(t) {
                var u = t.core;
                if (!u) throw Object(m.u)(null, m.r);
                if (n.setup) {
                    n.on(v.sb, X), t.warnings.forEach(function(t) {
                        n.trigger(v.sb, t)
                    });
                    var a = n.modelShim.clone();
                    if (a.error) throw a.error;
                    var c = n.apiQueue.queue.slice(0);
                    n.apiQueue.destroy(), Object(r.h)(n, u.prototype), n.setup(a, e, n.originalContainer, n._events, c, s);
                    var l = n._model;
                    return i.off("change:errorEvent", V), l.on("change:errorEvent", V), o.track(l), n.updatePlaylist(l.get("playlist"), l.get("feedData")).catch(function(t) {
                        throw Object(m.u)(t, m.p)
                    })
                }
            }).then(function() {
                n.setup && n.playerReady()
            }).catch(function(t) {
                n.setup && function(t, e, n) {
                    Promise.resolve().then(function() {
                        var r = Object(m.v)(m.m, m.t, n),
                            i = t._model || t.modelShim;
                        r.message = r.message || i.get("localization").errors[r.key], delete r.key;
                        var o = i.get("contextual");
                        if (!o) {
                            var u = Object(L.a)(t, r);
                            L.a.cloneIcon && u.querySelector(".jw-icon").appendChild(L.a.cloneIcon("error")), Q(t, u)
                        }
                        i.set("errorEvent", r), i.set("state", v.kb), t.trigger(v.hb, r), o && e.remove()
                    })
                }(n, e, t)
            })
        },
        playerDestroy: function() {
            this.apiQueue && this.apiQueue.destroy(), this.setup && this.setup.destroy(), this.currentContainer !== this.originalContainer && Q(this, this.originalContainer), this.off(), this._events = this._model = this.modelShim = this.apiQueue = this.setup = null
        },
        getContainer: function() {
            return this.currentContainer
        },
        get: function(t) {
            if (this.modelShim) return t in this.mediaShim ? this.mediaShim[t] : this.modelShim.get(t)
        },
        getItemQoe: function() {
            return this.modelShim._qoeItem
        },
        getConfig: function() {
            return Object(r.h)({}, this.modelShim.attributes, this.mediaShim)
        },
        getCurrentCaptions: function() {
            return this.get("captionsIndex")
        },
        getWidth: function() {
            return this.get("containerWidth")
        },
        getHeight: function() {
            return this.get("containerHeight")
        },
        getMute: function() {
            return this.get("mute")
        },
        getProvider: function() {
            return this.get("provider")
        },
        getState: function() {
            return this.get("state")
        },
        getAudioTracks: function() {
            return null
        },
        getCaptionsList: function() {
            return null
        },
        getQualityLevels: function() {
            return null
        },
        getVisualQuality: function() {
            return null
        },
        getCurrentQuality: function() {
            return -1
        },
        getCurrentAudioTrack: function() {
            return -1
        },
        getSafeRegion: function() {
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }
        },
        isBeforeComplete: function() {
            return !1
        },
        isBeforePlay: function() {
            return !1
        },
        createInstream: function() {
            return null
        },
        skipAd: function() {},
        attachMedia: function() {},
        detachMedia: function() {
            return null
        }
    });
    e.a = z
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(3),
        o = n(4),
        u = n(2);

    function a(t) {
        for (var e = [], n = 0; n < Object(o.c)(t); n++) {
            var r = t.childNodes[n];
            "jwplayer" === r.prefix && "mediatypes" === Object(o.b)(r).toLowerCase() && e.push(Object(o.d)(r))
        }
        return e
    }
    var c = function t(e, n) {
            var r, i, c = [];
            for (var s = 0; s < Object(o.c)(e); s++) {
                var l = e.childNodes[s];
                if ("media" === l.prefix) {
                    if (!Object(o.b)(l)) continue;
                    switch (Object(o.b)(l).toLowerCase()) {
                        case "content":
                            if (Object(u.i)(l, "duration") && (n.duration = Object(u.f)(Object(u.i)(l, "duration"))), Object(u.i)(l, "url")) {
                                n.sources || (n.sources = []);
                                var f = {
                                        file: Object(u.i)(l, "url"),
                                        type: Object(u.i)(l, "type"),
                                        width: Object(u.i)(l, "width"),
                                        label: Object(u.i)(l, "label")
                                    },
                                    d = a(l);
                                d.length && (f.mediaTypes = d), n.sources.push(f)
                            }
                            Object(o.c)(l) > 0 && (n = t(l, n));
                            break;
                        case "title":
                            n.title = Object(o.d)(l);
                            break;
                        case "description":
                            n.description = Object(o.d)(l);
                            break;
                        case "guid":
                            n.mediaid = Object(o.d)(l);
                            break;
                        case "thumbnail":
                            n.image || (n.image = Object(u.i)(l, "url"));
                            break;
                        case "group":
                            t(l, n);
                            break;
                        case "subtitle":
                            var p = {};
                            p.file = Object(u.i)(l, "url"), p.kind = "captions", Object(u.i)(l, "lang").length > 0 && (p.label = (r = Object(u.i)(l, "lang"), i = void 0, (i = {
                                zh: "Chinese",
                                nl: "Dutch",
                                en: "English",
                                fr: "French",
                                de: "German",
                                it: "Italian",
                                ja: "Japanese",
                                pt: "Portuguese",
                                ru: "Russian",
                                es: "Spanish"
                            })[r] ? i[r] : r)), c.push(p)
                    }
                }
            }
            n.hasOwnProperty("tracks") || (n.tracks = []);
            for (var h = 0; h < c.length; h++) n.tracks.push(c[h]);
            return n
        },
        s = n(10),
        l = function(t, e) {
            for (var n = "default", r = [], i = [], a = 0; a < t.childNodes.length; a++) {
                var c = t.childNodes[a];
                if ("jwplayer" === c.prefix) {
                    var l = Object(o.b)(c);
                    "source" === l ? (delete e.sources, r.push({
                        file: Object(u.i)(c, "file"),
                        default: Object(u.i)(c, n),
                        label: Object(u.i)(c, "label"),
                        type: Object(u.i)(c, "type")
                    })) : "track" === l ? (delete e.tracks, i.push({
                        file: Object(u.i)(c, "file"),
                        default: Object(u.i)(c, n),
                        kind: Object(u.i)(c, "kind"),
                        label: Object(u.i)(c, "label")
                    })) : (e[l] = Object(s.serialize)(Object(o.d)(c)), "file" === l && e.sources && delete e.sources)
                }
                e.file || (e.file = e.link)
            }
            if (r.length) {
                e.sources = [];
                for (var f = 0; f < r.length; f++) r[f].file.length > 0 && (r[f][n] = "true" === r[f][n], r[f].label.length || delete r[f].label, e.sources.push(r[f]))
            }
            if (i.length) {
                e.tracks = [];
                for (var d = 0; d < i.length; d++) i[d].file.length > 0 && (i[d][n] = "true" === i[d][n], i[d].kind = i[d].kind.length ? i[d].kind : "captions", i[d].label.length || delete i[d].label, e.tracks.push(i[d]))
            }
            return e
        },
        f = n(25);

    function d(t) {
        for (var e = {}, n = 0; n < t.childNodes.length; n++) {
            var r = t.childNodes[n],
                i = Object(o.b)(r);
            if (i) switch (i.toLowerCase()) {
                case "enclosure":
                    e.file = Object(u.i)(r, "url");
                    break;
                case "title":
                    e.title = Object(o.d)(r);
                    break;
                case "guid":
                    e.mediaid = Object(o.d)(r);
                    break;
                case "pubdate":
                    e.date = Object(o.d)(r);
                    break;
                case "description":
                    e.description = Object(o.d)(r);
                    break;
                case "link":
                    e.link = Object(o.d)(r);
                    break;
                case "category":
                    e.tags ? e.tags += Object(o.d)(r) : e.tags = Object(o.d)(r)
            }
        }
        return new f.a(l(t, c(t, e)))
    }
    var p = n(22),
        h = n(6),
        v = n(1);
    e.a = function() {
        var t = Object(r.h)(this, h.a);

        function e(e) {
            try {
                var u, a = e.responseXML ? e.responseXML.childNodes : null,
                    c = "";
                if (a) {
                    for (var s = 0; s < a.length && 8 === (c = a[s]).nodeType; s++);
                    if ("xml" === Object(o.b)(c) && (c = c.nextSibling), "rss" === Object(o.b)(c)) {
                        var l = function(t) {
                            var e = [];
                            e.feedData = {};
                            for (var n = 0; n < Object(o.c)(t); n++) {
                                var r = Object(o.a)(t, n);
                                if ("channel" === Object(o.b)(r).toLowerCase())
                                    for (var i = 0; i < Object(o.c)(r); i++) {
                                        var u = Object(o.a)(r, i),
                                            a = Object(o.b)(u).toLowerCase();
                                        "item" === a ? e.push(d(u)) : a && (e.feedData[a] = Object(o.d)(u))
                                    }
                            }
                            return e
                        }(c);
                        u = Object(r.h)({
                            playlist: l
                        }, l.feedData)
                    }
                }
                if (!u) try {
                    var f = JSON.parse(e.responseText);
                    if (Array.isArray(f)) u = {
                        playlist: f
                    };
                    else {
                        if (!Array.isArray(f.playlist)) throw Error("Playlist is not an array");
                        u = f
                    }
                } catch (t) {
                    throw new v.n(v.k, 621, t)
                }
                t.trigger(i.db, u)
            } catch (t) {
                n(t)
            }
        }

        function n(e) {
            e.code || (e = new v.n(v.k, 0)), t.trigger(i.w, e)
        }
        this.load = function(t) {
            Object(p.a)(t, e, function(t, e, r, i) {
                n(i)
            })
        }, this.destroy = function() {
            this.off()
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var r = n(9);

    function i(t) {
        return "hls" === t.type && r.OS.android ? !1 !== t.androidhls && (!r.Browser.firefox && parseFloat(r.OS.version.version) >= 4.4) : null
    }
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = function() {},
        o = function() {
            return !1
        },
        u = {
            name: "default"
        },
        a = {
            supports: o,
            play: i,
            pause: i,
            preload: i,
            load: i,
            stop: i,
            volume: i,
            mute: i,
            seek: i,
            resize: i,
            remove: i,
            destroy: i,
            eventsOn_: i,
            eventsOff_: i,
            setVisibility: i,
            setFullscreen: i,
            getFullscreen: o,
            supportsFullscreen: o,
            getContainer: i,
            setContainer: i,
            getName: function() {
                return u
            },
            getQualityLevels: i,
            getCurrentQuality: i,
            setCurrentQuality: i,
            getAudioTracks: i,
            getCurrentAudioTrack: i,
            setCurrentAudioTrack: i,
            getSeekRange: function() {
                return {
                    start: 0,
                    end: this.getDuration()
                }
            },
            setPlaybackRate: i,
            getPlaybackRate: function() {
                return 1
            },
            getBandwidthEstimate: function() {
                return null
            },
            setControls: i,
            attachMedia: i,
            detachMedia: i,
            init: i,
            setState: function(t) {
                this.state = t, this.trigger(r.ab, {
                    newstate: t
                })
            },
            sendMediaType: function(t) {
                var e = t[0],
                    n = e.type,
                    i = e.mimeType,
                    o = "aac" === n || "mp3" === n || "mpeg" === n || i && 0 === i.indexOf("audio/");
                this.trigger(r.S, {
                    mediaType: o ? "audio" : "video"
                })
            }
        };
    e.a = a
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = setTimeout;

    function i() {}

    function o(t) {
        if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this)
    }

    function u(t, e) {
        for (; 3 === t._state;) t = t._value;
        0 !== t._state ? (t._handled = !0, o._immediateFn(function() {
            var n = 1 === t._state ? e.onFulfilled : e.onRejected;
            if (null !== n) {
                var r;
                try {
                    r = n(t._value)
                } catch (t) {
                    return void c(e.promise, t)
                }
                a(e.promise, r)
            } else(1 === t._state ? a : c)(e.promise, t._value)
        })) : t._deferreds.push(e)
    }

    function a(t, e) {
        try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var n = e.then;
                if (e instanceof o) return t._state = 3, t._value = e, void s(t);
                if ("function" == typeof n) return void f((r = n, i = e, function() {
                    r.apply(i, arguments)
                }), t)
            }
            t._state = 1, t._value = e, s(t)
        } catch (e) {
            c(t, e)
        }
        var r, i
    }

    function c(t, e) {
        t._state = 2, t._value = e, s(t)
    }

    function s(t) {
        2 === t._state && 0 === t._deferreds.length && o._immediateFn(function() {
            t._handled || o._unhandledRejectionFn(t._value)
        });
        for (var e = 0, n = t._deferreds.length; e < n; e++) u(t, t._deferreds[e]);
        t._deferreds = null
    }

    function l(t, e, n) {
        this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
    }

    function f(t, e) {
        var n = !1;
        try {
            t(function(t) {
                n || (n = !0, a(e, t))
            }, function(t) {
                n || (n = !0, c(e, t))
            })
        } catch (t) {
            if (n) return;
            n = !0, c(e, t)
        }
    }
    o.prototype.catch = function(t) {
        return this.then(null, t)
    }, o.prototype.then = function(t, e) {
        var n = new this.constructor(i);
        return u(this, new l(t, e, n)), n
    }, o.prototype.finally = function(t) {
        var e = this.constructor;
        return this.then(function(n) {
            return e.resolve(t()).then(function() {
                return n
            })
        }, function(n) {
            return e.resolve(t()).then(function() {
                return e.reject(n)
            })
        })
    }, o.all = function(t) {
        return new o(function(e, n) {
            if (!t || void 0 === t.length) throw new TypeError("Promise.all accepts an array");
            var r = Array.prototype.slice.call(t);
            if (0 === r.length) return e([]);
            var i = r.length;

            function o(t, u) {
                try {
                    if (u && ("object" == typeof u || "function" == typeof u)) {
                        var a = u.then;
                        if ("function" == typeof a) return void a.call(u, function(e) {
                            o(t, e)
                        }, n)
                    }
                    r[t] = u, 0 == --i && e(r)
                } catch (t) {
                    n(t)
                }
            }
            for (var u = 0; u < r.length; u++) o(u, r[u])
        })
    }, o.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === o ? t : new o(function(e) {
            e(t)
        })
    }, o.reject = function(t) {
        return new o(function(e, n) {
            n(t)
        })
    }, o.race = function(t) {
        return new o(function(e, n) {
            for (var r = 0, i = t.length; r < i; r++) t[r].then(e, n)
        })
    }, o._immediateFn = "function" == typeof setImmediate && function(t) {
        setImmediate(t)
    } || function(t) {
        r(t, 0)
    }, o._unhandledRejectionFn = function(t) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
    };
    var d = o;
    window.Promise || (window.Promise = d);
    var p = n(20),
        h = n(11),
        v = n(13),
        g = n(21),
        b = {
            availableProviders: v.a,
            registerProvider: g.a
        },
        y = n(27),
        m = n(23),
        j = n(0),
        O = n(18),
        w = n(9),
        k = n(46),
        C = n(3),
        P = n(24),
        x = n(6),
        S = n(8),
        T = n(10),
        E = n(2);

    function _(t, e) {
        this.name = t, this.message = e.message || e.toString(), this.error = e
    }
    var A = n(5),
        F = n(7),
        N = n(19),
        I = n(22),
        L = n(41),
        M = n(38);
    var R = Object(j.h)({}, T, S, p, {
            addClass: F.a,
            hasClass: F.h,
            removeClass: F.n,
            replaceClass: F.o,
            toggleClass: F.u,
            classList: F.d,
            styleDimension: F.t,
            createElement: F.e,
            emptyElement: F.g,
            addStyleSheet: F.b,
            bounds: F.c,
            openLink: F.k,
            css: N.b,
            clearCss: N.a,
            style: N.d,
            transform: N.e,
            getRgba: N.c,
            ajax: I.a,
            crossdomain: function(t) {
                var e = document.createElement("a"),
                    n = document.createElement("a");
                e.href = location.href;
                try {
                    return n.href = t, n.href = n.href, e.protocol + "//" + e.host != n.protocol + "//" + n.host
                } catch (t) {}
                return !0
            },
            tryCatch: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                if (O.a.debug) return t.apply(e || this, n);
                try {
                    return t.apply(e || this, n)
                } catch (e) {
                    return new _(t.name, e)
                }
            },
            Error: _,
            Timer: P.a,
            log: M.a,
            between: L.a,
            foreach: function(t, e) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
            },
            flashVersion: A.a,
            isIframe: A.m,
            indexOf: j.m,
            trim: E.h,
            pad: E.d,
            extension: E.a,
            hms: E.b,
            seconds: E.f,
            prefix: E.e,
            suffix: E.g,
            noop: function() {}
        }),
        D = 0;

    function B(t, e) {
        var n = new k.a(e);
        return n.on(C.fb, function(e) {
            t._qoe.tick("ready"), e.setupTime = t._qoe.between("setup", "ready")
        }), n.on("all", function(e, n) {
            t.trigger(e, n)
        }), n
    }

    function q(t, e) {
        var n = t.plugins;
        Object.keys(n).forEach(function(t) {
            delete n[t]
        }), e.get("setupConfig") && t.trigger("remove"), t.off(), e.playerDestroy(), e.getContainer().removeAttribute("data-jwplayer-id")
    }

    function z(t) {
        var e = ++D,
            n = t.id || "player-".concat(e),
            r = new P.a,
            i = {},
            o = B(this, t);
        r.tick("init"), t.setAttribute("data-jwplayer-id", n), Object.defineProperties(this, {
            id: {
                get: function() {
                    return n
                }
            },
            uniqueId: {
                get: function() {
                    return e
                }
            },
            plugins: {
                get: function() {
                    return i
                }
            },
            _qoe: {
                get: function() {
                    return r
                }
            },
            version: {
                get: function() {
                    return m.a
                }
            },
            Events: {
                get: function() {
                    return x.a
                }
            },
            utils: {
                get: function() {
                    return R
                }
            },
            _: {
                get: function() {
                    return j.d
                }
            }
        }), Object(j.h)(this, {
            _events: {},
            setup: function(e) {
                return r.clear("ready"), r.tick("setup"), q(this, o), (o = B(this, t)).init(e, this), this.on(e.events, null, this)
            },
            remove: function() {
                return function(t) {
                    for (var e = h.a.length; e--;)
                        if (h.a[e].uniqueId === t.uniqueId) {
                            h.a.splice(e, 1);
                            break
                        }
                }(this), q(this, o), this
            },
            qoe: function() {
                var t = o.getItemQoe();
                return {
                    setupTime: this._qoe.between("setup", "ready"),
                    firstFrame: t.getFirstFrame ? t.getFirstFrame() : null,
                    player: this._qoe.dump(),
                    item: t.dump()
                }
            },
            addCues: function(t) {
                return Array.isArray(t) && o.addCues(t), this
            },
            getAudioTracks: function() {
                return o.getAudioTracks()
            },
            getBuffer: function() {
                return o.get("buffer")
            },
            getCaptions: function() {
                return o.get("captions")
            },
            getCaptionsList: function() {
                return o.getCaptionsList()
            },
            getConfig: function() {
                return o.getConfig()
            },
            getContainer: function() {
                return o.getContainer()
            },
            getControls: function() {
                return o.get("controls")
            },
            getCues: function() {
                return o.get("cues")
            },
            getCurrentAudioTrack: function() {
                return o.getCurrentAudioTrack()
            },
            getCurrentCaptions: function() {
                return o.getCurrentCaptions()
            },
            getCurrentQuality: function() {
                return o.getCurrentQuality()
            },
            getCurrentTime: function() {
                return o.get("currentTime")
            },
            getDuration: function() {
                return o.get("duration")
            },
            getEnvironment: function() {
                return w
            },
            getFullscreen: function() {
                return o.get("fullscreen")
            },
            getHeight: function() {
                return o.getHeight()
            },
            getItemMeta: function() {
                return o.get("itemMeta") || {}
            },
            getMute: function() {
                return o.getMute()
            },
            getPlaybackRate: function() {
                return o.get("playbackRate")
            },
            getPlaylist: function() {
                return o.get("playlist")
            },
            getPlaylistIndex: function() {
                return o.get("item")
            },
            getPlaylistItem: function(t) {
                if (!R.exists(t)) return o.get("playlistItem");
                var e = this.getPlaylist();
                return e ? e[t] : null
            },
            getPosition: function() {
                return o.get("position")
            },
            getProvider: function() {
                return o.getProvider()
            },
            getQualityLevels: function() {
                return o.getQualityLevels()
            },
            getSafeRegion: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return o.getSafeRegion(t)
            },
            getState: function() {
                return o.getState()
            },
            getStretching: function() {
                return o.get("stretching")
            },
            getViewable: function() {
                return o.get("viewable")
            },
            getVisualQuality: function() {
                return o.getVisualQuality()
            },
            getVolume: function() {
                return o.get("volume")
            },
            getWidth: function() {
                return o.getWidth()
            },
            setCaptions: function(t) {
                return o.setCaptions(t), this
            },
            setConfig: function(t) {
                return o.setConfig(t), this
            },
            setControls: function(t) {
                return o.setControls(t), this
            },
            setCurrentAudioTrack: function(t) {
                o.setCurrentAudioTrack(t)
            },
            setCurrentCaptions: function(t) {
                o.setCurrentCaptions(t)
            },
            setCurrentQuality: function(t) {
                o.setCurrentQuality(t)
            },
            setFullscreen: function(t) {
                return o.setFullscreen(t), this
            },
            setMute: function(t) {
                return o.setMute(t), this
            },
            setPlaybackRate: function(t) {
                return o.setPlaybackRate(t), this
            },
            setPlaylistItem: function(t, e) {
                return o.setPlaylistItem(t, e), this
            },
            setCues: function(t) {
                return Array.isArray(t) && o.setCues(t), this
            },
            setVolume: function(t) {
                return o.setVolume(t), this
            },
            load: function(t, e) {
                return o.load(t, e), this
            },
            play: function(t) {
                return o.play(t), this
            },
            pause: function(t) {
                return o.pause(t), this
            },
            playToggle: function(t) {
                switch (this.getState()) {
                    case C.ob:
                    case C.ib:
                        return this.pause(t);
                    default:
                        return this.play(t)
                }
            },
            seek: function(t, e) {
                return o.seek(t, e), this
            },
            playlistItem: function(t, e) {
                return o.playlistItem(t, e), this
            },
            playlistNext: function(t) {
                return o.playlistNext(t), this
            },
            playlistPrev: function(t) {
                return o.playlistPrev(t), this
            },
            next: function(t) {
                return o.next(t), this
            },
            castToggle: function() {
                return o.castToggle(), this
            },
            createInstream: function() {
                return o.createInstream()
            },
            skipAd: function() {
                return o.skipAd(), this
            },
            stop: function() {
                return o.stop(), this
            },
            resize: function(t, e) {
                return o.resize(t, e), this
            },
            addButton: function(t, e, n, r, i) {
                return o.addButton(t, e, n, r, i), this
            },
            removeButton: function(t) {
                return o.removeButton(t), this
            },
            attachMedia: function() {
                return o.attachMedia(), this
            },
            detachMedia: function() {
                return o.detachMedia(), this
            },
            isBeforeComplete: function() {
                return o.isBeforeComplete()
            },
            isBeforePlay: function() {
                return o.isBeforePlay()
            }
        })
    }
    Object(j.h)(z.prototype, {
        on: function(t, e, n) {
            return x.c.call(this, t, e, n)
        },
        once: function(t, e, n) {
            return x.d.call(this, t, e, n)
        },
        off: function(t, e, n) {
            return x.b.call(this, t, e, n)
        },
        trigger: function(t, e) {
            return (e = j.d.isObject(e) ? Object(j.h)({}, e) : {}).type = t, O.a.debug ? x.e.call(this, t, e) : x.f.call(this, t, e)
        },
        getPlugin: function(t) {
            return this.plugins[t]
        },
        addPlugin: function(t, e) {
            this.plugins[t] = e, this.on("ready", e.addToPlayer), e.resize && this.on("resize", e.resizeHandler)
        },
        registerPlugin: function(t, e, n) {
            Object(y.b)(t, e, n)
        },
        getAdBlock: function() {
            return !1
        },
        playAd: function(t) {},
        pauseAd: function(t) {}
    }), n.p = Object(p.loadFrom)();
    var V = function(t) {
        var e, n;
        if (t ? "string" == typeof t ? (e = X(t)) || (n = document.getElementById(t)) : "number" == typeof t ? e = h.a[t] : t.nodeType && (e = X((n = t).id || n.getAttribute("data-jwplayer-id"))) : e = h.a[0], e) return e;
        if (n) {
            var r = new z(n);
            return h.a.push(r), r
        }
        return {
            registerPlugin: y.b
        }
    };

    function X(t) {
        for (var e = 0; e < h.a.length; e++)
            if (h.a[e].id === t) return h.a[e];
        return null
    }
    Object.defineProperties(V, {
        api: {
            get: function() {
                return b
            },
            set: function() {}
        },
        version: {
            get: function() {
                return m.a
            },
            set: function() {}
        },
        debug: {
            get: function() {
                return O.a.debug
            },
            set: function(t) {
                O.a.debug = !!t
            }
        }
    });
    e.default = V
}]).default;