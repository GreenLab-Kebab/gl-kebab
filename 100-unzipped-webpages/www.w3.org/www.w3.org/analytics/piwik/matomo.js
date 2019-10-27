/*!!
 * Piwik - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link https://piwik.org
 * @source https://github.com/matomo-org/matomo/blob/master/js/piwik.js
 * @license https://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
;
if (typeof JSON_PIWIK !== "object" && typeof window.JSON === "object" && window.JSON.stringify && window.JSON.parse) {
    JSON_PIWIK = window.JSON
} else {
    (function() {
        var a = {};
        /*!! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
        (function() {
            var c = typeof define === "function" && define.amd;
            var e = {
                "function": true,
                object: true
            };
            var h = e[typeof a] && a && !a.nodeType && a;
            var i = e[typeof window] && window || this,
                b = h && e[typeof module] && module && !module.nodeType && typeof global == "object" && global;
            if (b && (b.global === b || b.window === b || b.self === b)) {
                i = b
            }

            function j(ab, V) {
                ab || (ab = i.Object());
                V || (V = i.Object());
                var K = ab.Number || i.Number,
                    R = ab.String || i.String,
                    x = ab.Object || i.Object,
                    S = ab.Date || i.Date,
                    T = ab.SyntaxError || i.SyntaxError,
                    aa = ab.TypeError || i.TypeError,
                    J = ab.Math || i.Math,
                    Y = ab.JSON || i.JSON;
                if (typeof Y == "object" && Y) {
                    V.stringify = Y.stringify;
                    V.parse = Y.parse
                }
                var n = x.prototype,
                    u = n.toString,
                    r, m, L;
                var B = new S(-3509827334573292);
                try {
                    B = B.getUTCFullYear() == -109252 && B.getUTCMonth() === 0 && B.getUTCDate() === 1 && B.getUTCHours() == 10 && B.getUTCMinutes() == 37 && B.getUTCSeconds() == 6 && B.getUTCMilliseconds() == 708
                } catch (v) {}

                function o(ac) {
                    if (o[ac] !== L) {
                        return o[ac]
                    }
                    var ad;
                    if (ac == "bug-string-char-index") {
                        ad = "a" [0] != "a"
                    } else {
                        if (ac == "json") {
                            ad = o("json-stringify") && o("json-parse")
                        } else {
                            var ak, ah = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                            if (ac == "json-stringify") {
                                var ai = V.stringify,
                                    aj = typeof ai == "function" && B;
                                if (aj) {
                                    (ak = function() {
                                        return 1
                                    }).toJSON = ak;
                                    try {
                                        aj = ai(0) === "0" && ai(new K()) === "0" && ai(new R()) == '""' && ai(u) === L && ai(L) === L && ai() === L && ai(ak) === "1" && ai([ak]) == "[1]" && ai([L]) == "[null]" && ai(null) == "null" && ai([L, u, null]) == "[null,null,null]" && ai({
                                            a: [ak, true, false, null, "\x00\b\n\f\r\t"]
                                        }) == ah && ai(null, ak) === "1" && ai([1, 2], null, 1) == "[\n 1,\n 2\n]" && ai(new S(-8640000000000000)) == '"-271821-04-20T00:00:00.000Z"' && ai(new S(8640000000000000)) == '"+275760-09-13T00:00:00.000Z"' && ai(new S(-62198755200000)) == '"-000001-01-01T00:00:00.000Z"' && ai(new S(-1)) == '"1969-12-31T23:59:59.999Z"'
                                    } catch (ae) {
                                        aj = false
                                    }
                                }
                                ad = aj
                            }
                            if (ac == "json-parse") {
                                var ag = V.parse;
                                if (typeof ag == "function") {
                                    try {
                                        if (ag("0") === 0 && !ag(false)) {
                                            ak = ag(ah);
                                            var af = ak.a.length == 5 && ak.a[0] === 1;
                                            if (af) {
                                                try {
                                                    af = !ag('"\t"')
                                                } catch (ae) {}
                                                if (af) {
                                                    try {
                                                        af = ag("01") !== 1
                                                    } catch (ae) {}
                                                }
                                                if (af) {
                                                    try {
                                                        af = ag("1.") !== 1
                                                    } catch (ae) {}
                                                }
                                            }
                                        }
                                    } catch (ae) {
                                        af = false
                                    }
                                }
                                ad = af
                            }
                        }
                    }
                    return o[ac] = !!ad
                }
                if (!o("json")) {
                    var U = "[object Function]",
                        Q = "[object Date]",
                        N = "[object Number]",
                        O = "[object String]",
                        E = "[object Array]",
                        A = "[object Boolean]";
                    var F = o("bug-string-char-index");
                    if (!B) {
                        var s = J.floor;
                        var Z = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                        var D = function(ac, ad) {
                            return Z[ad] + 365 * (ac - 1970) + s((ac - 1969 + (ad = +(ad > 1))) / 4) - s((ac - 1901 + ad) / 100) + s((ac - 1601 + ad) / 400)
                        }
                    }
                    if (!(r = n.hasOwnProperty)) {
                        r = function(ae) {
                            var ac = {},
                                ad;
                            if ((ac.__proto__ = null, ac.__proto__ = {
                                    toString: 1
                                }, ac).toString != u) {
                                r = function(ah) {
                                    var ag = this.__proto__,
                                        af = ah in (this.__proto__ = null, this);
                                    this.__proto__ = ag;
                                    return af
                                }
                            } else {
                                ad = ac.constructor;
                                r = function(ag) {
                                    var af = (this.constructor || ad).prototype;
                                    return ag in this && !(ag in af && this[ag] === af[ag])
                                }
                            }
                            ac = null;
                            return r.call(this, ae)
                        }
                    }
                    m = function(ae, ah) {
                        var af = 0,
                            ac, ad, ag;
                        (ac = function() {
                            this.valueOf = 0
                        }).prototype.valueOf = 0;
                        ad = new ac();
                        for (ag in ad) {
                            if (r.call(ad, ag)) {
                                af++
                            }
                        }
                        ac = ad = null;
                        if (!af) {
                            ad = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                            m = function(aj, an) {
                                var am = u.call(aj) == U,
                                    al, ak;
                                var ai = !am && typeof aj.constructor != "function" && e[typeof aj.hasOwnProperty] && aj.hasOwnProperty || r;
                                for (al in aj) {
                                    if (!(am && al == "prototype") && ai.call(aj, al)) {
                                        an(al)
                                    }
                                }
                                for (ak = ad.length; al = ad[--ak]; ai.call(aj, al) && an(al)) {}
                            }
                        } else {
                            if (af == 2) {
                                m = function(aj, am) {
                                    var ai = {},
                                        al = u.call(aj) == U,
                                        ak;
                                    for (ak in aj) {
                                        if (!(al && ak == "prototype") && !r.call(ai, ak) && (ai[ak] = 1) && r.call(aj, ak)) {
                                            am(ak)
                                        }
                                    }
                                }
                            } else {
                                m = function(aj, am) {
                                    var al = u.call(aj) == U,
                                        ak, ai;
                                    for (ak in aj) {
                                        if (!(al && ak == "prototype") && r.call(aj, ak) && !(ai = ak === "constructor")) {
                                            am(ak)
                                        }
                                    }
                                    if (ai || r.call(aj, (ak = "constructor"))) {
                                        am(ak)
                                    }
                                }
                            }
                        }
                        return m(ae, ah)
                    };
                    if (!o("json-stringify")) {
                        var q = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        };
                        var I = "000000";
                        var t = function(ac, ad) {
                            return (I + (ad || 0)).slice(-ac)
                        };
                        var z = "\\u00";
                        var C = function(ai) {
                            var ad = '"',
                                ag = 0,
                                ah = ai.length,
                                ac = !F || ah > 10;
                            var af = ac && (F ? ai.split("") : ai);
                            for (; ag < ah; ag++) {
                                var ae = ai.charCodeAt(ag);
                                switch (ae) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        ad += q[ae];
                                        break;
                                    default:
                                        if (ae < 32) {
                                            ad += z + t(2, ae.toString(16));
                                            break
                                        }
                                        ad += ac ? af[ag] : ai.charAt(ag)
                                }
                            }
                            return ad + '"'
                        };
                        var p = function(ai, aA, ag, al, ax, ac, aj) {
                            var at, ae, ap, az, ay, ak, aw, au, aq, an, ar, ad, ah, af, av, ao;
                            try {
                                at = aA[ai]
                            } catch (am) {}
                            if (typeof at == "object" && at) {
                                ae = u.call(at);
                                if (ae == Q && !r.call(at, "toJSON")) {
                                    if (at > -1 / 0 && at < 1 / 0) {
                                        if (D) {
                                            ay = s(at / 86400000);
                                            for (ap = s(ay / 365.2425) + 1970 - 1; D(ap + 1, 0) <= ay; ap++) {}
                                            for (az = s((ay - D(ap, 0)) / 30.42); D(ap, az + 1) <= ay; az++) {}
                                            ay = 1 + ay - D(ap, az);
                                            ak = (at % 86400000 + 86400000) % 86400000;
                                            aw = s(ak / 3600000) % 24;
                                            au = s(ak / 60000) % 60;
                                            aq = s(ak / 1000) % 60;
                                            an = ak % 1000
                                        } else {
                                            ap = at.getUTCFullYear();
                                            az = at.getUTCMonth();
                                            ay = at.getUTCDate();
                                            aw = at.getUTCHours();
                                            au = at.getUTCMinutes();
                                            aq = at.getUTCSeconds();
                                            an = at.getUTCMilliseconds()
                                        }
                                        at = (ap <= 0 || ap >= 10000 ? (ap < 0 ? "-" : "+") + t(6, ap < 0 ? -ap : ap) : t(4, ap)) + "-" + t(2, az + 1) + "-" + t(2, ay) + "T" + t(2, aw) + ":" + t(2, au) + ":" + t(2, aq) + "." + t(3, an) + "Z"
                                    } else {
                                        at = null
                                    }
                                } else {
                                    if (typeof at.toJSON == "function" && ((ae != N && ae != O && ae != E) || r.call(at, "toJSON"))) {
                                        at = at.toJSON(ai)
                                    }
                                }
                            }
                            if (ag) {
                                at = ag.call(aA, ai, at)
                            }
                            if (at === null) {
                                return "null"
                            }
                            ae = u.call(at);
                            if (ae == A) {
                                return "" + at
                            } else {
                                if (ae == N) {
                                    return at > -1 / 0 && at < 1 / 0 ? "" + at : "null"
                                } else {
                                    if (ae == O) {
                                        return C("" + at)
                                    }
                                }
                            }
                            if (typeof at == "object") {
                                for (af = aj.length; af--;) {
                                    if (aj[af] === at) {
                                        throw aa()
                                    }
                                }
                                aj.push(at);
                                ar = [];
                                av = ac;
                                ac += ax;
                                if (ae == E) {
                                    for (ah = 0, af = at.length; ah < af; ah++) {
                                        ad = p(ah, at, ag, al, ax, ac, aj);
                                        ar.push(ad === L ? "null" : ad)
                                    }
                                    ao = ar.length ? (ax ? "[\n" + ac + ar.join(",\n" + ac) + "\n" + av + "]" : ("[" + ar.join(",") + "]")) : "[]"
                                } else {
                                    m(al || at, function(aC) {
                                        var aB = p(aC, at, ag, al, ax, ac, aj);
                                        if (aB !== L) {
                                            ar.push(C(aC) + ":" + (ax ? " " : "") + aB)
                                        }
                                    });
                                    ao = ar.length ? (ax ? "{\n" + ac + ar.join(",\n" + ac) + "\n" + av + "}" : ("{" + ar.join(",") + "}")) : "{}"
                                }
                                aj.pop();
                                return ao
                            }
                        };
                        V.stringify = function(ac, ae, af) {
                            var ad, al, aj, ai;
                            if (e[typeof ae] && ae) {
                                if ((ai = u.call(ae)) == U) {
                                    al = ae
                                } else {
                                    if (ai == E) {
                                        aj = {};
                                        for (var ah = 0, ag = ae.length, ak; ah < ag; ak = ae[ah++], ((ai = u.call(ak)), ai == O || ai == N) && (aj[ak] = 1)) {}
                                    }
                                }
                            }
                            if (af) {
                                if ((ai = u.call(af)) == N) {
                                    if ((af -= af % 1) > 0) {
                                        for (ad = "", af > 10 && (af = 10); ad.length < af; ad += " ") {}
                                    }
                                } else {
                                    if (ai == O) {
                                        ad = af.length <= 10 ? af : af.slice(0, 10)
                                    }
                                }
                            }
                            return p("", (ak = {}, ak[""] = ac, ak), al, aj, ad, "", [])
                        }
                    }
                    if (!o("json-parse")) {
                        var M = R.fromCharCode;
                        var l = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        };
                        var G, X;
                        var H = function() {
                            G = X = null;
                            throw T()
                        };
                        var y = function() {
                            var ah = X,
                                af = ah.length,
                                ag, ae, ac, ai, ad;
                            while (G < af) {
                                ad = ah.charCodeAt(G);
                                switch (ad) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        G++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        ag = F ? ah.charAt(G) : ah[G];
                                        G++;
                                        return ag;
                                    case 34:
                                        for (ag = "@", G++; G < af;) {
                                            ad = ah.charCodeAt(G);
                                            if (ad < 32) {
                                                H()
                                            } else {
                                                if (ad == 92) {
                                                    ad = ah.charCodeAt(++G);
                                                    switch (ad) {
                                                        case 92:
                                                        case 34:
                                                        case 47:
                                                        case 98:
                                                        case 116:
                                                        case 110:
                                                        case 102:
                                                        case 114:
                                                            ag += l[ad];
                                                            G++;
                                                            break;
                                                        case 117:
                                                            ae = ++G;
                                                            for (ac = G + 4; G < ac; G++) {
                                                                ad = ah.charCodeAt(G);
                                                                if (!(ad >= 48 && ad <= 57 || ad >= 97 && ad <= 102 || ad >= 65 && ad <= 70)) {
                                                                    H()
                                                                }
                                                            }
                                                            ag += M("0x" + ah.slice(ae, G));
                                                            break;
                                                        default:
                                                            H()
                                                    }
                                                } else {
                                                    if (ad == 34) {
                                                        break
                                                    }
                                                    ad = ah.charCodeAt(G);
                                                    ae = G;
                                                    while (ad >= 32 && ad != 92 && ad != 34) {
                                                        ad = ah.charCodeAt(++G)
                                                    }
                                                    ag += ah.slice(ae, G)
                                                }
                                            }
                                        }
                                        if (ah.charCodeAt(G) == 34) {
                                            G++;
                                            return ag
                                        }
                                        H();
                                    default:
                                        ae = G;
                                        if (ad == 45) {
                                            ai = true;
                                            ad = ah.charCodeAt(++G)
                                        }
                                        if (ad >= 48 && ad <= 57) {
                                            if (ad == 48 && ((ad = ah.charCodeAt(G + 1)), ad >= 48 && ad <= 57)) {
                                                H()
                                            }
                                            ai = false;
                                            for (; G < af && ((ad = ah.charCodeAt(G)), ad >= 48 && ad <= 57); G++) {}
                                            if (ah.charCodeAt(G) == 46) {
                                                ac = ++G;
                                                for (; ac < af && ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57); ac++) {}
                                                if (ac == G) {
                                                    H()
                                                }
                                                G = ac
                                            }
                                            ad = ah.charCodeAt(G);
                                            if (ad == 101 || ad == 69) {
                                                ad = ah.charCodeAt(++G);
                                                if (ad == 43 || ad == 45) {
                                                    G++
                                                }
                                                for (ac = G; ac < af && ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57); ac++) {}
                                                if (ac == G) {
                                                    H()
                                                }
                                                G = ac
                                            }
                                            return +ah.slice(ae, G)
                                        }
                                        if (ai) {
                                            H()
                                        }
                                        if (ah.slice(G, G + 4) == "true") {
                                            G += 4;
                                            return true
                                        } else {
                                            if (ah.slice(G, G + 5) == "false") {
                                                G += 5;
                                                return false
                                            } else {
                                                if (ah.slice(G, G + 4) == "null") {
                                                    G += 4;
                                                    return null
                                                }
                                            }
                                        }
                                        H()
                                }
                            }
                            return "$"
                        };
                        var W = function(ad) {
                            var ac, ae;
                            if (ad == "$") {
                                H()
                            }
                            if (typeof ad == "string") {
                                if ((F ? ad.charAt(0) : ad[0]) == "@") {
                                    return ad.slice(1)
                                }
                                if (ad == "[") {
                                    ac = [];
                                    for (;; ae || (ae = true)) {
                                        ad = y();
                                        if (ad == "]") {
                                            break
                                        }
                                        if (ae) {
                                            if (ad == ",") {
                                                ad = y();
                                                if (ad == "]") {
                                                    H()
                                                }
                                            } else {
                                                H()
                                            }
                                        }
                                        if (ad == ",") {
                                            H()
                                        }
                                        ac.push(W(ad))
                                    }
                                    return ac
                                } else {
                                    if (ad == "{") {
                                        ac = {};
                                        for (;; ae || (ae = true)) {
                                            ad = y();
                                            if (ad == "}") {
                                                break
                                            }
                                            if (ae) {
                                                if (ad == ",") {
                                                    ad = y();
                                                    if (ad == "}") {
                                                        H()
                                                    }
                                                } else {
                                                    H()
                                                }
                                            }
                                            if (ad == "," || typeof ad != "string" || (F ? ad.charAt(0) : ad[0]) != "@" || y() != ":") {
                                                H()
                                            }
                                            ac[ad.slice(1)] = W(y())
                                        }
                                        return ac
                                    }
                                }
                                H()
                            }
                            return ad
                        };
                        var P = function(ae, ad, af) {
                            var ac = w(ae, ad, af);
                            if (ac === L) {
                                delete ae[ad]
                            } else {
                                ae[ad] = ac
                            }
                        };
                        var w = function(af, ae, ag) {
                            var ad = af[ae],
                                ac;
                            if (typeof ad == "object" && ad) {
                                if (u.call(ad) == E) {
                                    for (ac = ad.length; ac--;) {
                                        P(ad, ac, ag)
                                    }
                                } else {
                                    m(ad, function(ah) {
                                        P(ad, ah, ag)
                                    })
                                }
                            }
                            return ag.call(af, ae, ad)
                        };
                        V.parse = function(ae, af) {
                            var ac, ad;
                            G = 0;
                            X = "" + ae;
                            ac = W(y());
                            if (y() != "$") {
                                H()
                            }
                            G = X = null;
                            return af && u.call(af) == U ? w((ad = {}, ad[""] = ac, ad), "", af) : ac
                        }
                    }
                }
                V.runInContext = j;
                return V
            }
            if (h && !c) {
                j(i, h)
            } else {
                var f = i.JSON,
                    k = i.JSON3,
                    d = false;
                var g = j(i, (i.JSON3 = {
                    noConflict: function() {
                        if (!d) {
                            d = true;
                            i.JSON = f;
                            i.JSON3 = k;
                            f = k = null
                        }
                        return g
                    }
                }));
                i.JSON = {
                    parse: g.parse,
                    stringify: g.stringify
                }
            }
            if (c) {
                define(function() {
                    return g
                })
            }
        }).call(this);
        JSON_PIWIK = a
    })()
}
if (typeof _paq !== "object") {
    _paq = []
}
if (typeof window.Piwik !== "object") {
    window.Matomo = window.Piwik = (function() {
        var r, b = {},
            y = {},
            G = document,
            h = navigator,
            X = screen,
            T = window,
            i = T.performance || T.mozPerformance || T.msPerformance || T.webkitPerformance,
            t = T.encodeURIComponent,
            S = T.decodeURIComponent,
            l = unescape,
            I = [],
            E, e, ae = [],
            x = 0,
            U = 0,
            m = false;

        function p(al) {
            try {
                return S(al)
            } catch (am) {
                return unescape(al)
            }
        }

        function J(am) {
            var al = typeof am;
            return al !== "undefined"
        }

        function A(al) {
            return typeof al === "function"
        }

        function W(al) {
            return typeof al === "object"
        }

        function w(al) {
            return typeof al === "string" || al instanceof String
        }

        function B(am) {
            if (!am) {
                return true
            }
            var al;
            var an = true;
            for (al in am) {
                if (Object.prototype.hasOwnProperty.call(am, al)) {
                    an = false
                }
            }
            return an
        }

        function ah(al) {
            var am = typeof console;
            if (am !== "undefined" && console && console.error) {
                console.error(al)
            }
        }

        function ad() {
            var aq, ap, at, am, al;
            for (aq = 0; aq < arguments.length; aq += 1) {
                al = null;
                if (arguments[aq] && arguments[aq].slice) {
                    al = arguments[aq].slice()
                }
                am = arguments[aq];
                at = am.shift();
                var ar, an;
                var ao = w(at) && at.indexOf("::") > 0;
                if (ao) {
                    ar = at.split("::");
                    an = ar[0];
                    at = ar[1];
                    if ("object" === typeof e[an] && "function" === typeof e[an][at]) {
                        e[an][at].apply(e[an], am)
                    } else {
                        if (al) {
                            ae.push(al)
                        }
                    }
                } else {
                    for (ap = 0; ap < I.length; ap++) {
                        if (w(at)) {
                            an = I[ap];
                            var au = at.indexOf(".") > 0;
                            if (au) {
                                ar = at.split(".");
                                if (an && "object" === typeof an[ar[0]]) {
                                    an = an[ar[0]];
                                    at = ar[1]
                                } else {
                                    if (al) {
                                        ae.push(al);
                                        break
                                    }
                                }
                            }
                            if (an[at]) {
                                an[at].apply(an, am)
                            } else {
                                var av = "The method '" + at + '\' was not found in "_paq" variable.  Please have a look at the Piwik tracker documentation: https://developer.piwik.org/api-reference/tracking-javascript';
                                ah(av);
                                if (!au) {
                                    throw new TypeError(av)
                                }
                            }
                            if (at === "addTracker") {
                                break
                            }
                            if (at === "setTrackerUrl" || at === "setSiteId") {
                                break
                            }
                        } else {
                            at.apply(I[ap], am)
                        }
                    }
                }
            }
        }

        function ak(ao, an, am, al) {
            if (ao.addEventListener) {
                ao.addEventListener(an, am, al);
                return true
            }
            if (ao.attachEvent) {
                return ao.attachEvent("on" + an, am)
            }
            ao["on" + an] = am
        }

        function n(al) {
            if (G.readyState === "complete") {
                al()
            } else {
                if (T.addEventListener) {
                    T.addEventListener("load", al, false)
                } else {
                    if (T.attachEvent) {
                        T.attachEvent("onload", al)
                    }
                }
            }
        }

        function q(ao) {
            var al = false;
            if (G.attachEvent) {
                al = G.readyState === "complete"
            } else {
                al = G.readyState !== "loading"
            }
            if (al) {
                ao();
                return
            }
            var an;
            if (G.addEventListener) {
                ak(G, "DOMContentLoaded", function am() {
                    G.removeEventListener("DOMContentLoaded", am, false);
                    if (!al) {
                        al = true;
                        ao()
                    }
                })
            } else {
                if (G.attachEvent) {
                    G.attachEvent("onreadystatechange", function am() {
                        if (G.readyState === "complete") {
                            G.detachEvent("onreadystatechange", am);
                            if (!al) {
                                al = true;
                                ao()
                            }
                        }
                    });
                    if (G.documentElement.doScroll && T === T.top) {
                        (function am() {
                            if (!al) {
                                try {
                                    G.documentElement.doScroll("left")
                                } catch (ap) {
                                    setTimeout(am, 0);
                                    return
                                }
                                al = true;
                                ao()
                            }
                        }())
                    }
                }
            }
            ak(T, "load", function() {
                if (!al) {
                    al = true;
                    ao()
                }
            }, false)
        }

        function aa(am, ar, at) {
            if (!am) {
                return ""
            }
            var al = "",
                ao, an, ap, aq;
            for (ao in b) {
                if (Object.prototype.hasOwnProperty.call(b, ao)) {
                    aq = b[ao] && "function" === typeof b[ao][am];
                    if (aq) {
                        an = b[ao][am];
                        ap = an(ar || {}, at);
                        if (ap) {
                            al += ap
                        }
                    }
                }
            }
            return al
        }

        function af() {
            var al;
            m = true;
            aa("unload");
            if (r) {
                do {
                    al = new Date()
                } while (al.getTimeAlias() < r)
            }
        }

        function o(an, am) {
            var al = G.createElement("script");
            al.type = "text/javascript";
            al.src = an;
            if (al.readyState) {
                al.onreadystatechange = function() {
                    var ao = this.readyState;
                    if (ao === "loaded" || ao === "complete") {
                        al.onreadystatechange = null;
                        am()
                    }
                }
            } else {
                al.onload = am
            }
            G.getElementsByTagName("head")[0].appendChild(al)
        }

        function K() {
            var al = "";
            try {
                al = T.top.document.referrer
            } catch (an) {
                if (T.parent) {
                    try {
                        al = T.parent.document.referrer
                    } catch (am) {
                        al = ""
                    }
                }
            }
            if (al === "") {
                al = G.referrer
            }
            return al
        }

        function s(al) {
            var an = new RegExp("^([a-z]+):"),
                am = an.exec(al);
            return am ? am[1] : null
        }

        function d(al) {
            var an = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
                am = an.exec(al);
            return am ? am[1] : al
        }

        function ag(am, al) {
            am = String(am);
            return am.lastIndexOf(al, 0) === 0
        }

        function R(am, al) {
            am = String(am);
            return am.indexOf(al, am.length - al.length) !== -1
        }

        function z(am, al) {
            am = String(am);
            return am.indexOf(al) !== -1
        }

        function g(am, al) {
            am = String(am);
            return am.substr(0, am.length - al)
        }

        function F(ao, an, aq) {
            ao = String(ao);
            if (!aq) {
                aq = ""
            }
            var al = ao.indexOf("#");
            var ar = ao.length;
            if (al === -1) {
                al = ar
            }
            var ap = ao.substr(0, al);
            var am = ao.substr(al, ar - al);
            if (ap.indexOf("?") === -1) {
                ap += "?"
            } else {
                if (!R(ap, "?")) {
                    ap += "&"
                }
            }
            return ap + t(an) + "=" + t(aq) + am
        }

        function k(am, an) {
            am = String(am);
            if (am.indexOf("?" + an + "=") === -1 && am.indexOf("&" + an + "=") === -1) {
                return am
            }
            var ao = am.indexOf("?");
            if (ao === -1) {
                return am
            }
            var al = am.substr(ao + 1);
            var at = am.substr(0, ao);
            if (al) {
                var au = "";
                var aw = al.indexOf("#");
                if (aw !== -1) {
                    au = al.substr(aw + 1);
                    al = al.substr(0, aw)
                }
                var ap;
                var ar = al.split("&");
                var aq = ar.length - 1;
                for (aq; aq >= 0; aq--) {
                    ap = ar[aq].split("=")[0];
                    if (ap === an) {
                        ar.splice(aq, 1)
                    }
                }
                var av = ar.join("&");
                if (av) {
                    at = at + "?" + av
                }
                if (au) {
                    at += "#" + au
                }
            }
            return at
        }

        function f(an, am) {
            var al = "[\\?&#]" + am + "=([^&#]*)";
            var ap = new RegExp(al);
            var ao = ap.exec(an);
            return ao ? S(ao[1]) : ""
        }

        function a(al) {
            if (al && String(al) === al) {
                return al.replace(/^\s+|\s+$/g, "")
            }
            return al
        }

        function D(al) {
            return unescape(t(al))
        }

        function aj(aB) {
            var an = function(aH, aG) {
                    return (aH << aG) | (aH >>> (32 - aG))
                },
                aC = function(aJ) {
                    var aH = "",
                        aI, aG;
                    for (aI = 7; aI >= 0; aI--) {
                        aG = (aJ >>> (aI * 4)) & 15;
                        aH += aG.toString(16)
                    }
                    return aH
                },
                aq, aE, aD, am = [],
                av = 1732584193,
                at = 4023233417,
                ar = 2562383102,
                ap = 271733878,
                ao = 3285377520,
                aA, az, ay, ax, aw, aF, al, au = [];
            aB = D(aB);
            al = aB.length;
            for (aE = 0; aE < al - 3; aE += 4) {
                aD = aB.charCodeAt(aE) << 24 | aB.charCodeAt(aE + 1) << 16 | aB.charCodeAt(aE + 2) << 8 | aB.charCodeAt(aE + 3);
                au.push(aD)
            }
            switch (al & 3) {
                case 0:
                    aE = 2147483648;
                    break;
                case 1:
                    aE = aB.charCodeAt(al - 1) << 24 | 8388608;
                    break;
                case 2:
                    aE = aB.charCodeAt(al - 2) << 24 | aB.charCodeAt(al - 1) << 16 | 32768;
                    break;
                case 3:
                    aE = aB.charCodeAt(al - 3) << 24 | aB.charCodeAt(al - 2) << 16 | aB.charCodeAt(al - 1) << 8 | 128;
                    break
            }
            au.push(aE);
            while ((au.length & 15) !== 14) {
                au.push(0)
            }
            au.push(al >>> 29);
            au.push((al << 3) & 4294967295);
            for (aq = 0; aq < au.length; aq += 16) {
                for (aE = 0; aE < 16; aE++) {
                    am[aE] = au[aq + aE]
                }
                for (aE = 16; aE <= 79; aE++) {
                    am[aE] = an(am[aE - 3] ^ am[aE - 8] ^ am[aE - 14] ^ am[aE - 16], 1)
                }
                aA = av;
                az = at;
                ay = ar;
                ax = ap;
                aw = ao;
                for (aE = 0; aE <= 19; aE++) {
                    aF = (an(aA, 5) + ((az & ay) | (~az & ax)) + aw + am[aE] + 1518500249) & 4294967295;
                    aw = ax;
                    ax = ay;
                    ay = an(az, 30);
                    az = aA;
                    aA = aF
                }
                for (aE = 20; aE <= 39; aE++) {
                    aF = (an(aA, 5) + (az ^ ay ^ ax) + aw + am[aE] + 1859775393) & 4294967295;
                    aw = ax;
                    ax = ay;
                    ay = an(az, 30);
                    az = aA;
                    aA = aF
                }
                for (aE = 40; aE <= 59; aE++) {
                    aF = (an(aA, 5) + ((az & ay) | (az & ax) | (ay & ax)) + aw + am[aE] + 2400959708) & 4294967295;
                    aw = ax;
                    ax = ay;
                    ay = an(az, 30);
                    az = aA;
                    aA = aF
                }
                for (aE = 60; aE <= 79; aE++) {
                    aF = (an(aA, 5) + (az ^ ay ^ ax) + aw + am[aE] + 3395469782) & 4294967295;
                    aw = ax;
                    ax = ay;
                    ay = an(az, 30);
                    az = aA;
                    aA = aF
                }
                av = (av + aA) & 4294967295;
                at = (at + az) & 4294967295;
                ar = (ar + ay) & 4294967295;
                ap = (ap + ax) & 4294967295;
                ao = (ao + aw) & 4294967295
            }
            aF = aC(av) + aC(at) + aC(ar) + aC(ap) + aC(ao);
            return aF.toLowerCase()
        }

        function Z(an, al, am) {
            if (!an) {
                an = ""
            }
            if (!al) {
                al = ""
            }
            if (an === "translate.googleusercontent.com") {
                if (am === "") {
                    am = al
                }
                al = f(al, "u");
                an = d(al)
            } else {
                if (an === "cc.bingj.com" || an === "webcache.googleusercontent.com" || an.slice(0, 5) === "74.6.") {
                    al = G.links[0].href;
                    an = d(al)
                }
            }
            return [an, al, am]
        }

        function L(am) {
            var al = am.length;
            if (am.charAt(--al) === ".") {
                am = am.slice(0, al)
            }
            if (am.slice(0, 2) === "*.") {
                am = am.slice(1)
            }
            if (am.indexOf("/") !== -1) {
                am = am.substr(0, am.indexOf("/"))
            }
            return am
        }

        function ai(am) {
            am = am && am.text ? am.text : am;
            if (!w(am)) {
                var al = G.getElementsByTagName("title");
                if (al && J(al[0])) {
                    am = al[0].text
                }
            }
            return am
        }

        function P(al) {
            if (!al) {
                return []
            }
            if (!J(al.children) && J(al.childNodes)) {
                return al.children
            }
            if (J(al.children)) {
                return al.children
            }
            return []
        }

        function V(am, al) {
            if (!am || !al) {
                return false
            }
            if (am.contains) {
                return am.contains(al)
            }
            if (am === al) {
                return true
            }
            if (am.compareDocumentPosition) {
                return !!(am.compareDocumentPosition(al) & 16)
            }
            return false
        }

        function M(an, ao) {
            if (an && an.indexOf) {
                return an.indexOf(ao)
            }
            if (!J(an) || an === null) {
                return -1
            }
            if (!an.length) {
                return -1
            }
            var al = an.length;
            if (al === 0) {
                return -1
            }
            var am = 0;
            while (am < al) {
                if (an[am] === ao) {
                    return am
                }
                am++
            }
            return -1
        }

        function j(an) {
            if (!an) {
                return false
            }

            function al(ap, aq) {
                if (T.getComputedStyle) {
                    return G.defaultView.getComputedStyle(ap, null)[aq]
                }
                if (ap.currentStyle) {
                    return ap.currentStyle[aq]
                }
            }

            function ao(ap) {
                ap = ap.parentNode;
                while (ap) {
                    if (ap === G) {
                        return true
                    }
                    ap = ap.parentNode
                }
                return false
            }

            function am(ar, ay, ap, av, at, aw, au) {
                var aq = ar.parentNode,
                    ax = 1;
                if (!ao(ar)) {
                    return false
                }
                if (9 === aq.nodeType) {
                    return true
                }
                if ("0" === al(ar, "opacity") || "none" === al(ar, "display") || "hidden" === al(ar, "visibility")) {
                    return false
                }
                if (!J(ay) || !J(ap) || !J(av) || !J(at) || !J(aw) || !J(au)) {
                    ay = ar.offsetTop;
                    at = ar.offsetLeft;
                    av = ay + ar.offsetHeight;
                    ap = at + ar.offsetWidth;
                    aw = ar.offsetWidth;
                    au = ar.offsetHeight
                }
                if (an === ar && (0 === au || 0 === aw) && "hidden" === al(ar, "overflow")) {
                    return false
                }
                if (aq) {
                    if (("hidden" === al(aq, "overflow") || "scroll" === al(aq, "overflow"))) {
                        if (at + ax > aq.offsetWidth + aq.scrollLeft || at + aw - ax < aq.scrollLeft || ay + ax > aq.offsetHeight + aq.scrollTop || ay + au - ax < aq.scrollTop) {
                            return false
                        }
                    }
                    if (ar.offsetParent === aq) {
                        at += aq.offsetLeft;
                        ay += aq.offsetTop
                    }
                    return am(aq, ay, ap, av, at, aw, au)
                }
                return true
            }
            return am(an)
        }
        var ac = {
            htmlCollectionToArray: function(an) {
                var al = [],
                    am;
                if (!an || !an.length) {
                    return al
                }
                for (am = 0; am < an.length; am++) {
                    al.push(an[am])
                }
                return al
            },
            find: function(al) {
                if (!document.querySelectorAll || !al) {
                    return []
                }
                var am = document.querySelectorAll(al);
                return this.htmlCollectionToArray(am)
            },
            findMultiple: function(an) {
                if (!an || !an.length) {
                    return []
                }
                var am, ao;
                var al = [];
                for (am = 0; am < an.length; am++) {
                    ao = this.find(an[am]);
                    al = al.concat(ao)
                }
                al = this.makeNodesUnique(al);
                return al
            },
            findNodesByTagName: function(am, al) {
                if (!am || !al || !am.getElementsByTagName) {
                    return []
                }
                var an = am.getElementsByTagName(al);
                return this.htmlCollectionToArray(an)
            },
            makeNodesUnique: function(al) {
                var aq = [].concat(al);
                al.sort(function(at, ar) {
                    if (at === ar) {
                        return 0
                    }
                    var av = M(aq, at);
                    var au = M(aq, ar);
                    if (av === au) {
                        return 0
                    }
                    return av > au ? -1 : 1
                });
                if (al.length <= 1) {
                    return al
                }
                var am = 0;
                var ao = 0;
                var ap = [];
                var an;
                an = al[am++];
                while (an) {
                    if (an === al[am]) {
                        ao = ap.push(am)
                    }
                    an = al[am++] || null
                }
                while (ao--) {
                    al.splice(ap[ao], 1)
                }
                return al
            },
            getAttributeValueFromNode: function(ap, an) {
                if (!this.hasNodeAttribute(ap, an)) {
                    return
                }
                if (ap && ap.getAttribute) {
                    return ap.getAttribute(an)
                }
                if (!ap || !ap.attributes) {
                    return
                }
                var ao = (typeof ap.attributes[an]);
                if ("undefined" === ao) {
                    return
                }
                if (ap.attributes[an].value) {
                    return ap.attributes[an].value
                }
                if (ap.attributes[an].nodeValue) {
                    return ap.attributes[an].nodeValue
                }
                var am;
                var al = ap.attributes;
                if (!al) {
                    return
                }
                for (am = 0; am < al.length; am++) {
                    if (al[am].nodeName === an) {
                        return al[am].nodeValue
                    }
                }
                return null
            },
            hasNodeAttributeWithValue: function(am, al) {
                var an = this.getAttributeValueFromNode(am, al);
                return !!an
            },
            hasNodeAttribute: function(an, al) {
                if (an && an.hasAttribute) {
                    return an.hasAttribute(al)
                }
                if (an && an.attributes) {
                    var am = (typeof an.attributes[al]);
                    return "undefined" !== am
                }
                return false
            },
            hasNodeCssClass: function(an, al) {
                if (an && al && an.className) {
                    var am = typeof an.className === "string" ? an.className.split(" ") : [];
                    if (-1 !== M(am, al)) {
                        return true
                    }
                }
                return false
            },
            findNodesHavingAttribute: function(ap, an, al) {
                if (!al) {
                    al = []
                }
                if (!ap || !an) {
                    return al
                }
                var ao = P(ap);
                if (!ao || !ao.length) {
                    return al
                }
                var am, aq;
                for (am = 0; am < ao.length; am++) {
                    aq = ao[am];
                    if (this.hasNodeAttribute(aq, an)) {
                        al.push(aq)
                    }
                    al = this.findNodesHavingAttribute(aq, an, al)
                }
                return al
            },
            findFirstNodeHavingAttribute: function(an, am) {
                if (!an || !am) {
                    return
                }
                if (this.hasNodeAttribute(an, am)) {
                    return an
                }
                var al = this.findNodesHavingAttribute(an, am);
                if (al && al.length) {
                    return al[0]
                }
            },
            findFirstNodeHavingAttributeWithValue: function(ao, an) {
                if (!ao || !an) {
                    return
                }
                if (this.hasNodeAttributeWithValue(ao, an)) {
                    return ao
                }
                var al = this.findNodesHavingAttribute(ao, an);
                if (!al || !al.length) {
                    return
                }
                var am;
                for (am = 0; am < al.length; am++) {
                    if (this.getAttributeValueFromNode(al[am], an)) {
                        return al[am]
                    }
                }
            },
            findNodesHavingCssClass: function(ap, ao, al) {
                if (!al) {
                    al = []
                }
                if (!ap || !ao) {
                    return al
                }
                if (ap.getElementsByClassName) {
                    var aq = ap.getElementsByClassName(ao);
                    return this.htmlCollectionToArray(aq)
                }
                var an = P(ap);
                if (!an || !an.length) {
                    return []
                }
                var am, ar;
                for (am = 0; am < an.length; am++) {
                    ar = an[am];
                    if (this.hasNodeCssClass(ar, ao)) {
                        al.push(ar)
                    }
                    al = this.findNodesHavingCssClass(ar, ao, al)
                }
                return al
            },
            findFirstNodeHavingClass: function(an, am) {
                if (!an || !am) {
                    return
                }
                if (this.hasNodeCssClass(an, am)) {
                    return an
                }
                var al = this.findNodesHavingCssClass(an, am);
                if (al && al.length) {
                    return al[0]
                }
            },
            isLinkElement: function(am) {
                if (!am) {
                    return false
                }
                var al = String(am.nodeName).toLowerCase();
                var ao = ["a", "area"];
                var an = M(ao, al);
                return an !== -1
            },
            setAnyAttribute: function(am, al, an) {
                if (!am || !al) {
                    return
                }
                if (am.setAttribute) {
                    am.setAttribute(al, an)
                } else {
                    am[al] = an
                }
            }
        };
        var v = {
            CONTENT_ATTR: "data-track-content",
            CONTENT_CLASS: "piwikTrackContent",
            CONTENT_NAME_ATTR: "data-content-name",
            CONTENT_PIECE_ATTR: "data-content-piece",
            CONTENT_PIECE_CLASS: "piwikContentPiece",
            CONTENT_TARGET_ATTR: "data-content-target",
            CONTENT_TARGET_CLASS: "piwikContentTarget",
            CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
            CONTENT_IGNOREINTERACTION_CLASS: "piwikContentIgnoreInteraction",
            location: undefined,
            findContentNodes: function() {
                var am = "." + this.CONTENT_CLASS;
                var al = "[" + this.CONTENT_ATTR + "]";
                var an = ac.findMultiple([am, al]);
                return an
            },
            findContentNodesWithinNode: function(ao) {
                if (!ao) {
                    return []
                }
                var am = ac.findNodesHavingCssClass(ao, this.CONTENT_CLASS);
                var al = ac.findNodesHavingAttribute(ao, this.CONTENT_ATTR);
                if (al && al.length) {
                    var an;
                    for (an = 0; an < al.length; an++) {
                        am.push(al[an])
                    }
                }
                if (ac.hasNodeAttribute(ao, this.CONTENT_ATTR)) {
                    am.push(ao)
                } else {
                    if (ac.hasNodeCssClass(ao, this.CONTENT_CLASS)) {
                        am.push(ao)
                    }
                }
                am = ac.makeNodesUnique(am);
                return am
            },
            findParentContentNode: function(am) {
                if (!am) {
                    return
                }
                var an = am;
                var al = 0;
                while (an && an !== G && an.parentNode) {
                    if (ac.hasNodeAttribute(an, this.CONTENT_ATTR)) {
                        return an
                    }
                    if (ac.hasNodeCssClass(an, this.CONTENT_CLASS)) {
                        return an
                    }
                    an = an.parentNode;
                    if (al > 1000) {
                        break
                    }
                    al++
                }
            },
            findPieceNode: function(am) {
                var al;
                al = ac.findFirstNodeHavingAttribute(am, this.CONTENT_PIECE_ATTR);
                if (!al) {
                    al = ac.findFirstNodeHavingClass(am, this.CONTENT_PIECE_CLASS)
                }
                if (al) {
                    return al
                }
                return am
            },
            findTargetNodeNoDefault: function(al) {
                if (!al) {
                    return
                }
                var am = ac.findFirstNodeHavingAttributeWithValue(al, this.CONTENT_TARGET_ATTR);
                if (am) {
                    return am
                }
                am = ac.findFirstNodeHavingAttribute(al, this.CONTENT_TARGET_ATTR);
                if (am) {
                    return am
                }
                am = ac.findFirstNodeHavingClass(al, this.CONTENT_TARGET_CLASS);
                if (am) {
                    return am
                }
            },
            findTargetNode: function(al) {
                var am = this.findTargetNodeNoDefault(al);
                if (am) {
                    return am
                }
                return al
            },
            findContentName: function(am) {
                if (!am) {
                    return
                }
                var ap = ac.findFirstNodeHavingAttributeWithValue(am, this.CONTENT_NAME_ATTR);
                if (ap) {
                    return ac.getAttributeValueFromNode(ap, this.CONTENT_NAME_ATTR)
                }
                var al = this.findContentPiece(am);
                if (al) {
                    return this.removeDomainIfIsInLink(al)
                }
                if (ac.hasNodeAttributeWithValue(am, "title")) {
                    return ac.getAttributeValueFromNode(am, "title")
                }
                var an = this.findPieceNode(am);
                if (ac.hasNodeAttributeWithValue(an, "title")) {
                    return ac.getAttributeValueFromNode(an, "title")
                }
                var ao = this.findTargetNode(am);
                if (ac.hasNodeAttributeWithValue(ao, "title")) {
                    return ac.getAttributeValueFromNode(ao, "title")
                }
            },
            findContentPiece: function(am) {
                if (!am) {
                    return
                }
                var ao = ac.findFirstNodeHavingAttributeWithValue(am, this.CONTENT_PIECE_ATTR);
                if (ao) {
                    return ac.getAttributeValueFromNode(ao, this.CONTENT_PIECE_ATTR)
                }
                var al = this.findPieceNode(am);
                var an = this.findMediaUrlInNode(al);
                if (an) {
                    return this.toAbsoluteUrl(an)
                }
            },
            findContentTarget: function(an) {
                if (!an) {
                    return
                }
                var ao = this.findTargetNode(an);
                if (ac.hasNodeAttributeWithValue(ao, this.CONTENT_TARGET_ATTR)) {
                    return ac.getAttributeValueFromNode(ao, this.CONTENT_TARGET_ATTR)
                }
                var am;
                if (ac.hasNodeAttributeWithValue(ao, "href")) {
                    am = ac.getAttributeValueFromNode(ao, "href");
                    return this.toAbsoluteUrl(am)
                }
                var al = this.findPieceNode(an);
                if (ac.hasNodeAttributeWithValue(al, "href")) {
                    am = ac.getAttributeValueFromNode(al, "href");
                    return this.toAbsoluteUrl(am)
                }
            },
            isSameDomain: function(al) {
                if (!al || !al.indexOf) {
                    return false
                }
                if (0 === al.indexOf(this.getLocation().origin)) {
                    return true
                }
                var am = al.indexOf(this.getLocation().host);
                if (8 >= am && 0 <= am) {
                    return true
                }
                return false
            },
            removeDomainIfIsInLink: function(an) {
                var am = "^https?://[^/]+";
                var al = "^.*//[^/]+";
                if (an && an.search && -1 !== an.search(new RegExp(am)) && this.isSameDomain(an)) {
                    an = an.replace(new RegExp(al), "");
                    if (!an) {
                        an = "/"
                    }
                }
                return an
            },
            findMediaUrlInNode: function(ap) {
                if (!ap) {
                    return
                }
                var an = ["img", "embed", "video", "audio"];
                var al = ap.nodeName.toLowerCase();
                if (-1 !== M(an, al) && ac.findFirstNodeHavingAttributeWithValue(ap, "src")) {
                    var ao = ac.findFirstNodeHavingAttributeWithValue(ap, "src");
                    return ac.getAttributeValueFromNode(ao, "src")
                }
                if (al === "object" && ac.hasNodeAttributeWithValue(ap, "data")) {
                    return ac.getAttributeValueFromNode(ap, "data")
                }
                if (al === "object") {
                    var aq = ac.findNodesByTagName(ap, "param");
                    if (aq && aq.length) {
                        var am;
                        for (am = 0; am < aq.length; am++) {
                            if ("movie" === ac.getAttributeValueFromNode(aq[am], "name") && ac.hasNodeAttributeWithValue(aq[am], "value")) {
                                return ac.getAttributeValueFromNode(aq[am], "value")
                            }
                        }
                    }
                    var ar = ac.findNodesByTagName(ap, "embed");
                    if (ar && ar.length) {
                        return this.findMediaUrlInNode(ar[0])
                    }
                }
            },
            trim: function(al) {
                return a(al)
            },
            isOrWasNodeInViewport: function(aq) {
                if (!aq || !aq.getBoundingClientRect || aq.nodeType !== 1) {
                    return true
                }
                var ap = aq.getBoundingClientRect();
                var ao = G.documentElement || {};
                var an = ap.top < 0;
                if (an && aq.offsetTop) {
                    an = (aq.offsetTop + ap.height) > 0
                }
                var am = ao.clientWidth;
                if (T.innerWidth && am > T.innerWidth) {
                    am = T.innerWidth
                }
                var al = ao.clientHeight;
                if (T.innerHeight && al > T.innerHeight) {
                    al = T.innerHeight
                }
                return ((ap.bottom > 0 || an) && ap.right > 0 && ap.left < am && ((ap.top < al) || an))
            },
            isNodeVisible: function(am) {
                var al = j(am);
                var an = this.isOrWasNodeInViewport(am);
                return al && an
            },
            buildInteractionRequestParams: function(al, am, an, ao) {
                var ap = "";
                if (al) {
                    ap += "c_i=" + t(al)
                }
                if (am) {
                    if (ap) {
                        ap += "&"
                    }
                    ap += "c_n=" + t(am)
                }
                if (an) {
                    if (ap) {
                        ap += "&"
                    }
                    ap += "c_p=" + t(an)
                }
                if (ao) {
                    if (ap) {
                        ap += "&"
                    }
                    ap += "c_t=" + t(ao)
                }
                return ap
            },
            buildImpressionRequestParams: function(al, am, an) {
                var ao = "c_n=" + t(al) + "&c_p=" + t(am);
                if (an) {
                    ao += "&c_t=" + t(an)
                }
                return ao
            },
            buildContentBlock: function(an) {
                if (!an) {
                    return
                }
                var al = this.findContentName(an);
                var am = this.findContentPiece(an);
                var ao = this.findContentTarget(an);
                al = this.trim(al);
                am = this.trim(am);
                ao = this.trim(ao);
                return {
                    name: al || "Unknown",
                    piece: am || "Unknown",
                    target: ao || ""
                }
            },
            collectContent: function(ao) {
                if (!ao || !ao.length) {
                    return []
                }
                var an = [];
                var al, am;
                for (al = 0; al < ao.length; al++) {
                    am = this.buildContentBlock(ao[al]);
                    if (J(am)) {
                        an.push(am)
                    }
                }
                return an
            },
            setLocation: function(al) {
                this.location = al
            },
            getLocation: function() {
                var al = this.location || T.location;
                if (!al.origin) {
                    al.origin = al.protocol + "//" + al.hostname + (al.port ? ":" + al.port : "")
                }
                return al
            },
            toAbsoluteUrl: function(am) {
                if ((!am || String(am) !== am) && am !== "") {
                    return am
                }
                if ("" === am) {
                    return this.getLocation().href
                }
                if (am.search(/^\/\//) !== -1) {
                    return this.getLocation().protocol + am
                }
                if (am.search(/:\/\//) !== -1) {
                    return am
                }
                if (0 === am.indexOf("#")) {
                    return this.getLocation().origin + this.getLocation().pathname + am
                }
                if (0 === am.indexOf("?")) {
                    return this.getLocation().origin + this.getLocation().pathname + am
                }
                if (0 === am.search("^[a-zA-Z]{2,11}:")) {
                    return am
                }
                if (am.search(/^\//) !== -1) {
                    return this.getLocation().origin + am
                }
                var al = "(.*/)";
                var an = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(al))[0];
                return an + am
            },
            isUrlToCurrentDomain: function(am) {
                var an = this.toAbsoluteUrl(am);
                if (!an) {
                    return false
                }
                var al = this.getLocation().origin;
                if (al === an) {
                    return true
                }
                if (0 === String(an).indexOf(al)) {
                    if (":" === String(an).substr(al.length, 1)) {
                        return false
                    }
                    return true
                }
                return false
            },
            setHrefAttribute: function(am, al) {
                if (!am || !al) {
                    return
                }
                ac.setAnyAttribute(am, "href", al)
            },
            shouldIgnoreInteraction: function(an) {
                var am = ac.hasNodeAttribute(an, this.CONTENT_IGNOREINTERACTION_ATTR);
                var al = ac.hasNodeCssClass(an, this.CONTENT_IGNOREINTERACTION_CLASS);
                return am || al
            }
        };

        function O(am, ap) {
            if (ap) {
                return ap
            }
            am = v.toAbsoluteUrl(am);
            if (z(am, "?")) {
                var ao = am.indexOf("?");
                am = am.slice(0, ao)
            }
            if (R(am, "matomo.php")) {
                am = g(am, "matomo.php".length)
            } else {
                if (R(am, "piwik.php")) {
                    am = g(am, "piwik.php".length)
                } else {
                    if (R(am, ".php")) {
                        var al = am.lastIndexOf("/");
                        var an = 1;
                        am = am.slice(0, al + an)
                    }
                }
            }
            if (R(am, "/js/")) {
                am = g(am, "js/".length)
            }
            return am
        }

        function N(ar) {
            var au = "Piwik_Overlay";
            var am = new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$");
            var an = am.exec(G.referrer);
            if (an) {
                var ap = an[1];
                if (ap !== String(ar)) {
                    return false
                }
                var aq = an[2],
                    al = an[3],
                    ao = an[4];
                if (!ao) {
                    ao = ""
                } else {
                    if (ao.indexOf("&segment=") === 0) {
                        ao = ao.substr("&segment=".length)
                    }
                }
                T.name = au + "###" + aq + "###" + al + "###" + ao
            }
            var at = T.name.split("###");
            return at.length === 4 && at[0] === au
        }

        function Y(am, at, ao) {
            var ar = T.name.split("###"),
                aq = ar[1],
                al = ar[2],
                ap = ar[3],
                an = O(am, at);
            o(an + "plugins/Overlay/client/client.js?v=1", function() {
                Piwik_Overlay_Client.initialize(an, ao, aq, al, ap)
            })
        }

        function u() {
            var an;
            try {
                an = T.frameElement
            } catch (am) {
                return true
            }
            if (J(an)) {
                return (an && String(an.nodeName).toLowerCase() === "iframe") ? true : false
            }
            try {
                return T.self !== T.top
            } catch (al) {
                return true
            }
        }

        function Q(b9, b4) {
            var bD = this,
                a9 = "mtm_consent",
                cG = "mtm_consent_removed",
                bZ = Z(G.domain, T.location.href, K()),
                cO = L(bZ[0]),
                bI = p(bZ[1]),
                bi = p(bZ[2]),
                cM = false,
                cd = "GET",
                c3 = cd,
                aE = "application/x-www-form-urlencoded; charset=UTF-8",
                cs = aE,
                aA = b9 || "",
                bC = "",
                cT = "",
                b1 = b4 || "",
                bt = "",
                bJ = "",
                a0, be = "",
                c0 = ["7z", "aac", "apk", "arc", "arj", "asf", "asx", "avi", "azw3", "bin", "csv", "deb", "dmg", "doc", "docx", "epub", "exe", "flv", "gif", "gz", "gzip", "hqx", "ibooks", "jar", "jpg", "jpeg", "js", "mobi", "mp2", "mp3", "mp4", "mpg", "mpeg", "mov", "movie", "msi", "msp", "odb", "odf", "odg", "ods", "odt", "ogg", "ogv", "pdf", "phps", "png", "ppt", "pptx", "qt", "qtm", "ra", "ram", "rar", "rpm", "sea", "sit", "tar", "tbz", "tbz2", "bz", "bz2", "tgz", "torrent", "txt", "wav", "wma", "wmv", "wpd", "xls", "xlsx", "xml", "z", "zip"],
                au = [cO],
                bu = [],
                bG = [],
                a4 = [],
                bE = 500,
                cQ = false,
                cC, a1, bM, bK, al, cm = ["pk_campaign", "piwik_campaign", "utm_campaign", "utm_source", "utm_medium"],
                bB = ["pk_kwd", "piwik_kwd", "utm_term"],
                bf = "_pk_",
                ar = "pk_vid",
                aV = 180,
                cR, bk, bN = false,
                bg = false,
                cK, ba, bq, cD = 33955200000,
                ck = 1800000,
                cZ = 15768000000,
                aY = true,
                ci = 0,
                bL = false,
                aM = false,
                b6, bR = {},
                ch = {},
                bh = {},
                bo = 200,
                cU = {},
                c1 = {},
                b5 = [],
                ca = false,
                cw = false,
                am = false,
                c2 = false,
                cH = false,
                aK = false,
                a8 = u(),
                cS = null,
                b7, aN, bv, b2 = aj,
                bj, aH, cn = 0,
                bp = ["id", "ses", "cvar", "ref"],
                cv = false,
                bw = null,
                cE = [],
                at = U++;
            try {
                be = G.title
            } catch (ct) {
                be = ""
            }

            function c6(dh, df, de, dg, dd, dc) {
                if (bg) {
                    return
                }
                var db;
                if (de) {
                    db = new Date();
                    db.setTime(db.getTime() + de)
                }
                G.cookie = dh + "=" + t(df) + (de ? ";expires=" + db.toGMTString() : "") + ";path=" + (dg || "/") + (dd ? ";domain=" + dd : "") + (dc ? ";secure" : "")
            }

            function az(dd) {
                if (bg) {
                    return 0
                }
                var db = new RegExp("(^|;)[ ]*" + dd + "=([^;]*)"),
                    dc = db.exec(G.cookie);
                return dc ? S(dc[2]) : 0
            }
            bw = !az(cG);

            function bX(db) {
                var dc;
                db = k(db, ar);
                if (bK) {
                    dc = new RegExp("#.*");
                    return db.replace(dc, "")
                }
                return db
            }

            function bQ(dd, db) {
                var de = s(db),
                    dc;
                if (de) {
                    return db
                }
                if (db.slice(0, 1) === "/") {
                    return s(dd) + "://" + d(dd) + db
                }
                dd = bX(dd);
                dc = dd.indexOf("?");
                if (dc >= 0) {
                    dd = dd.slice(0, dc)
                }
                dc = dd.lastIndexOf("/");
                if (dc !== dd.length - 1) {
                    dd = dd.slice(0, dc + 1)
                }
                return dd + db
            }

            function cB(dd, db) {
                var dc;
                dd = String(dd).toLowerCase();
                db = String(db).toLowerCase();
                if (dd === db) {
                    return true
                }
                if (db.slice(0, 1) === ".") {
                    if (dd === db.slice(1)) {
                        return true
                    }
                    dc = dd.length - db.length;
                    if ((dc > 0) && (dd.slice(dc) === db)) {
                        return true
                    }
                }
                return false
            }

            function cg(db) {
                var dc = document.createElement("a");
                if (db.indexOf("//") !== 0 && db.indexOf("http") !== 0) {
                    if (db.indexOf("*") === 0) {
                        db = db.substr(1)
                    }
                    if (db.indexOf(".") === 0) {
                        db = db.substr(1)
                    }
                    db = "http://" + db
                }
                dc.href = v.toAbsoluteUrl(db);
                if (dc.pathname) {
                    return dc.pathname
                }
                return ""
            }

            function aZ(dc, db) {
                if (!ag(db, "/")) {
                    db = "/" + db
                }
                if (!ag(dc, "/")) {
                    dc = "/" + dc
                }
                var dd = (db === "/" || db === "/*");
                if (dd) {
                    return true
                }
                if (dc === db) {
                    return true
                }
                db = String(db).toLowerCase();
                dc = String(dc).toLowerCase();
                if (R(db, "*")) {
                    db = db.slice(0, -1);
                    dd = (!db || db === "/");
                    if (dd) {
                        return true
                    }
                    if (dc === db) {
                        return true
                    }
                    return dc.indexOf(db) === 0
                }
                if (!R(dc, "/")) {
                    dc += "/"
                }
                if (!R(db, "/")) {
                    db += "/"
                }
                return dc.indexOf(db) === 0
            }

            function ao(df, dh) {
                var dc, db, dd, de, dg;
                for (dc = 0; dc < au.length; dc++) {
                    de = L(au[dc]);
                    dg = cg(au[dc]);
                    if (cB(df, de) && aZ(dh, dg)) {
                        return true
                    }
                }
                return false
            }

            function aR(de) {
                var dc, db, dd;
                for (dc = 0; dc < au.length; dc++) {
                    db = L(au[dc].toLowerCase());
                    if (de === db) {
                        return true
                    }
                    if (db.slice(0, 1) === ".") {
                        if (de === db.slice(1)) {
                            return true
                        }
                        dd = de.length - db.length;
                        if ((dd > 0) && (de.slice(dd) === db)) {
                            return true
                        }
                    }
                }
                return false
            }

            function cl(db, dd) {
                db = db.replace("send_image=0", "send_image=1");
                var dc = new Image(1, 1);
                dc.onload = function() {
                    E = 0;
                    if (typeof dd === "function") {
                        dd({
                            request: db,
                            trackerUrl: aA,
                            success: true
                        })
                    }
                };
                dc.onerror = function() {
                    if (typeof dd === "function") {
                        dd({
                            request: db,
                            trackerUrl: aA,
                            success: false
                        })
                    }
                };
                dc.src = aA + (aA.indexOf("?") < 0 ? "?" : "&") + db
            }

            function aG() {
                return "object" === typeof h && "function" === typeof h.sendBeacon && "function" === typeof Blob
            }

            function a2(de, di) {
                var dd = aG();
                if (!dd) {
                    return false
                }
                var dh = {
                    type: "application/x-www-form-urlencoded; charset=UTF-8"
                };
                var dg = false;
                var dc = aA;
                try {
                    var db = new Blob([de], dh);
                    if (de.length <= 2000) {
                        db = new Blob([], dh);
                        dc = dc + (dc.indexOf("?") < 0 ? "?" : "&") + de
                    }
                    dg = h.sendBeacon(dc, db)
                } catch (df) {
                    return false
                }
                if (dg && typeof di === "function") {
                    di({
                        request: de,
                        trackerUrl: aA,
                        success: true,
                        isSendBeacon: true
                    })
                }
                return dg
            }

            function cY(dc, dd, db) {
                if (!J(db) || null === db) {
                    db = true
                }
                if (m && a2(dc, dd)) {
                    return
                }
                setTimeout(function() {
                    if (m && a2(dc, dd)) {
                        return
                    }
                    var dg;
                    try {
                        var df = T.XMLHttpRequest ? new T.XMLHttpRequest() : T.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
                        df.open("POST", aA, true);
                        df.onreadystatechange = function() {
                            if (this.readyState === 4 && !(this.status >= 200 && this.status < 300)) {
                                var dh = m && a2(dc, dd);
                                if (!dh && db) {
                                    cl(dc, dd)
                                } else {
                                    if (typeof dd === "function") {
                                        dd({
                                            request: dc,
                                            trackerUrl: aA,
                                            success: false,
                                            xhr: this
                                        })
                                    }
                                }
                            } else {
                                if (this.readyState === 4 && (typeof dd === "function")) {
                                    dd({
                                        request: dc,
                                        trackerUrl: aA,
                                        success: true,
                                        xhr: this
                                    })
                                }
                            }
                        };
                        df.setRequestHeader("Content-Type", cs);
                        df.withCredentials = true;
                        df.send(dc)
                    } catch (de) {
                        dg = m && a2(dc, dd);
                        if (!dg && db) {
                            cl(dc, dd)
                        } else {
                            if (typeof dd === "function") {
                                dd({
                                    request: dc,
                                    trackerUrl: aA,
                                    success: false
                                })
                            }
                        }
                    }
                }, 50)
            }

            function cb(dc) {
                var db = new Date();
                var dd = db.getTime() + dc;
                if (!r || dd > r) {
                    r = dd
                }
            }

            function cj(db) {
                if (b7 || !a1 || !bw) {
                    return
                }
                b7 = setTimeout(function dc() {
                    b7 = null;
                    if (!a8) {
                        a8 = (!G.hasFocus || G.hasFocus())
                    }
                    if (!a8) {
                        cj(a1);
                        return
                    }
                    if (bM()) {
                        return
                    }
                    var dd = new Date(),
                        de = a1 - (dd.getTime() - cS);
                    de = Math.min(a1, de);
                    cj(de)
                }, db || a1)
            }

            function bF() {
                if (!b7) {
                    return
                }
                clearTimeout(b7);
                b7 = null
            }

            function a6() {
                a8 = true;
                if (bM()) {
                    return
                }
                cj()
            }

            function av() {
                bF()
            }

            function c8() {
                if (aK || !a1) {
                    return
                }
                aK = true;
                ak(T, "focus", a6);
                ak(T, "blur", av);
                cj()
            }

            function cx(df) {
                var dc = new Date();
                var db = dc.getTime();
                cS = db;
                if (cw && db < cw) {
                    var dd = cw - db;
                    setTimeout(df, dd);
                    cb(dd + 50);
                    cw += 50;
                    return
                }
                if (cw === false) {
                    var de = 800;
                    cw = db + de
                }
                df()
            }

            function bA(dc, db, dd) {
                if (!bw) {
                    cE.push(dc);
                    return
                }
                if (!cK && dc) {
                    if (cv && bw) {
                        dc += "&consent=1"
                    }
                    cx(function() {
                        if (cQ && a2(dc, dd)) {
                            cb(100);
                            return
                        }
                        if (c3 === "POST" || String(dc).length > 2000) {
                            cY(dc, dd)
                        } else {
                            cl(dc, dd)
                        }
                        cb(db)
                    })
                }
                if (!aK) {
                    c8()
                } else {
                    cj()
                }
            }

            function cf(db) {
                if (cK) {
                    return false
                }
                return (db && db.length)
            }

            function cX(db, df) {
                if (!df || df >= db.length) {
                    return [db]
                }
                var dc = 0;
                var dd = db.length;
                var de = [];
                for (dc; dc < dd; dc += df) {
                    de.push(db.slice(dc, dc + df))
                }
                return de
            }

            function c7(dc, db) {
                if (!cf(dc)) {
                    return
                }
                if (!bw) {
                    cE.push(dc);
                    return
                }
                cx(function() {
                    var df = cX(dc, 50);
                    var dd = 0,
                        de;
                    for (dd; dd < df.length; dd++) {
                        de = '{"requests":["?' + df[dd].join('","?') + '"]}';
                        cY(de, null, false)
                    }
                    cb(db)
                })
            }

            function aP(db) {
                return bf + db + "." + b1 + "." + bj
            }

            function b0() {
                if (bg) {
                    return "0"
                }
                if (!J(h.cookieEnabled)) {
                    var db = aP("testcookie");
                    c6(db, "1");
                    return az(db) === "1" ? "1" : "0"
                }
                return h.cookieEnabled ? "1" : "0"
            }

            function bd() {
                bj = b2((cR || cO) + (bk || "/")).slice(0, 4)
            }

            function bS() {
                var dc = aP("cvar"),
                    db = az(dc);
                if (db.length) {
                    db = JSON_PIWIK.parse(db);
                    if (W(db)) {
                        return db
                    }
                }
                return {}
            }

            function cy() {
                if (aM === false) {
                    aM = bS()
                }
            }

            function cL() {
                return b2((h.userAgent || "") + (h.platform || "") + JSON_PIWIK.stringify(c1) + (new Date()).getTime() + Math.random()).slice(0, 16)
            }

            function aw() {
                return b2((h.userAgent || "") + (h.platform || "") + JSON_PIWIK.stringify(c1)).slice(0, 6)
            }

            function bb() {
                return Math.floor((new Date()).getTime() / 1000)
            }

            function aF() {
                var dc = bb();
                var dd = aw();
                var db = String(dc) + dd;
                return db
            }

            function cW(dd) {
                dd = String(dd);
                var dg = aw();
                var de = dg.length;
                var df = dd.substr(-1 * de, de);
                var dc = parseInt(dd.substr(0, dd.length - de), 10);
                if (dc && df && df === dg) {
                    var db = bb();
                    if (aV <= 0) {
                        return true
                    }
                    if (db >= dc && db <= (dc + aV)) {
                        return true
                    }
                }
                return false
            }

            function c9(db) {
                if (!cH) {
                    return ""
                }
                var df = f(db, ar);
                if (!df) {
                    return ""
                }
                df = String(df);
                var dd = new RegExp("^[a-zA-Z0-9]+$");
                if (df.length === 32 && dd.test(df)) {
                    var dc = df.substr(16, 32);
                    if (cW(dc)) {
                        var de = df.substr(0, 16);
                        return de
                    }
                }
                return ""
            }

            function cI() {
                if (!bJ) {
                    bJ = c9(bI)
                }
                var dd = new Date(),
                    db = Math.round(dd.getTime() / 1000),
                    dc = aP("id"),
                    dg = az(dc),
                    df, de;
                if (dg) {
                    df = dg.split(".");
                    df.unshift("0");
                    if (bJ.length) {
                        df[1] = bJ
                    }
                    return df
                }
                if (bJ.length) {
                    de = bJ
                } else {
                    if ("0" === b0()) {
                        de = ""
                    } else {
                        de = cL()
                    }
                }
                df = ["1", de, db, 0, db, "", ""];
                return df
            }

            function aU() {
                var di = cI(),
                    de = di[0],
                    df = di[1],
                    dc = di[2],
                    db = di[3],
                    dg = di[4],
                    dd = di[5];
                if (!J(di[6])) {
                    di[6] = ""
                }
                var dh = di[6];
                return {
                    newVisitor: de,
                    uuid: df,
                    createTs: dc,
                    visitCount: db,
                    currentVisitTs: dg,
                    lastVisitTs: dd,
                    lastEcommerceOrderTs: dh
                }
            }

            function aD() {
                var de = new Date(),
                    dc = de.getTime(),
                    df = aU().createTs;
                var db = parseInt(df, 10);
                var dd = (db * 1000) + cD - dc;
                return dd
            }

            function aI(db) {
                if (!b1) {
                    return
                }
                var dd = new Date(),
                    dc = Math.round(dd.getTime() / 1000);
                if (!J(db)) {
                    db = aU()
                }
                var de = db.uuid + "." + db.createTs + "." + db.visitCount + "." + dc + "." + db.lastVisitTs + "." + db.lastEcommerceOrderTs;
                c6(aP("id"), de, aD(), bk, cR, bN)
            }

            function bH() {
                var db = az(aP("ref"));
                if (db.length) {
                    try {
                        db = JSON_PIWIK.parse(db);
                        if (W(db)) {
                            return db
                        }
                    } catch (dc) {}
                }
                return ["", "", 0, ""]
            }

            function bT(dd, dc, db) {
                c6(dd, "", -86400, dc, db)
            }

            function br(dc) {
                var db = "testvalue";
                c6("test", db, 10000, null, dc);
                if (az("test") === db) {
                    bT("test", null, dc);
                    return true
                }
                return false
            }

            function aB() {
                var dc = bg;
                bg = false;
                var db, dd;
                for (db = 0; db < bp.length; db++) {
                    dd = aP(bp[db]);
                    if (dd !== cG && dd !== a9 && 0 !== az(dd)) {
                        bT(dd, bk, cR)
                    }
                }
                bg = dc
            }

            function bY(db) {
                b1 = db;
                aI()
            }

            function da(df) {
                if (!df || !W(df)) {
                    return
                }
                var de = [];
                var dd;
                for (dd in df) {
                    if (Object.prototype.hasOwnProperty.call(df, dd)) {
                        de.push(dd)
                    }
                }
                var dg = {};
                de.sort();
                var db = de.length;
                var dc;
                for (dc = 0; dc < db; dc++) {
                    dg[de[dc]] = df[de[dc]]
                }
                return dg
            }

            function b8() {
                c6(aP("ses"), "1", ck, bk, cR, bN)
            }

            function bc() {
                var de = "";
                var dc = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var dd = dc.length;
                var db;
                for (db = 0; db < 6; db++) {
                    de += dc.charAt(Math.floor(Math.random() * dd))
                }
                return de
            }

            function co(dd, dz, dA, de) {
                var dy, dc = new Date(),
                    dl = Math.round(dc.getTime() / 1000),
                    di, dx, df = 1024,
                    dF, dm, dv = aM,
                    dg = aP("ses"),
                    dt = aP("ref"),
                    dq = aP("cvar"),
                    dr = az(dg),
                    dw = bH(),
                    dC = a0 || bI,
                    dj, db;
                if (bg) {
                    aB()
                }
                if (cK) {
                    return ""
                }
                var ds = aU();
                if (!J(de)) {
                    de = ""
                }
                var dp = G.characterSet || G.charset;
                if (!dp || dp.toLowerCase() === "utf-8") {
                    dp = null
                }
                dj = dw[0];
                db = dw[1];
                di = dw[2];
                dx = dw[3];
                if (!dr) {
                    var dB = ck / 1000;
                    if (!ds.lastVisitTs || (dl - ds.lastVisitTs) > dB) {
                        ds.visitCount++;
                        ds.lastVisitTs = ds.currentVisitTs
                    }
                    if (!bq || !dj.length) {
                        for (dy in cm) {
                            if (Object.prototype.hasOwnProperty.call(cm, dy)) {
                                dj = f(dC, cm[dy]);
                                if (dj.length) {
                                    break
                                }
                            }
                        }
                        for (dy in bB) {
                            if (Object.prototype.hasOwnProperty.call(bB, dy)) {
                                db = f(dC, bB[dy]);
                                if (db.length) {
                                    break
                                }
                            }
                        }
                    }
                    dF = d(bi);
                    dm = dx.length ? d(dx) : "";
                    if (dF.length && !aR(dF) && (!bq || !dm.length || aR(dm))) {
                        dx = bi
                    }
                    if (dx.length || dj.length) {
                        di = dl;
                        dw = [dj, db, di, bX(dx.slice(0, df))];
                        c6(dt, JSON_PIWIK.stringify(dw), cZ, bk, cR)
                    }
                }
                dd += "&idsite=" + b1 + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + dc.getHours() + "&m=" + dc.getMinutes() + "&s=" + dc.getSeconds() + "&url=" + t(bX(dC)) + (bi.length ? "&urlref=" + t(bX(bi)) : "") + ((bt && bt.length) ? "&uid=" + t(bt) : "") + "&_id=" + ds.uuid + "&_idts=" + ds.createTs + "&_idvc=" + ds.visitCount + "&_idn=" + ds.newVisitor + (dj.length ? "&_rcn=" + t(dj) : "") + (db.length ? "&_rck=" + t(db) : "") + "&_refts=" + di + "&_viewts=" + ds.lastVisitTs + (String(ds.lastEcommerceOrderTs).length ? "&_ects=" + ds.lastEcommerceOrderTs : "") + (String(dx).length ? "&_ref=" + t(bX(dx.slice(0, df))) : "") + (dp ? "&cs=" + t(dp) : "") + "&send_image=0";
                for (dy in c1) {
                    if (Object.prototype.hasOwnProperty.call(c1, dy)) {
                        dd += "&" + dy + "=" + c1[dy]
                    }
                }
                var dE = [];
                if (dz) {
                    for (dy in dz) {
                        if (Object.prototype.hasOwnProperty.call(dz, dy) && /^dimension\d+$/.test(dy)) {
                            var dh = dy.replace("dimension", "");
                            dE.push(parseInt(dh, 10));
                            dE.push(String(dh));
                            dd += "&" + dy + "=" + t(dz[dy]);
                            delete dz[dy]
                        }
                    }
                }
                if (dz && B(dz)) {
                    dz = null
                }
                for (dy in bh) {
                    if (Object.prototype.hasOwnProperty.call(bh, dy)) {
                        var dn = (-1 === M(dE, dy));
                        if (dn) {
                            dd += "&dimension" + dy + "=" + t(bh[dy])
                        }
                    }
                }
                if (dz) {
                    dd += "&data=" + t(JSON_PIWIK.stringify(dz))
                } else {
                    if (al) {
                        dd += "&data=" + t(JSON_PIWIK.stringify(al))
                    }
                }

                function dk(dG, dH) {
                    var dI = JSON_PIWIK.stringify(dG);
                    if (dI.length > 2) {
                        return "&" + dH + "=" + t(dI)
                    }
                    return ""
                }
                var dD = da(bR);
                var du = da(ch);
                dd += dk(dD, "cvar");
                dd += dk(du, "e_cvar");
                if (aM) {
                    dd += dk(aM, "_cvar");
                    for (dy in dv) {
                        if (Object.prototype.hasOwnProperty.call(dv, dy)) {
                            if (aM[dy][0] === "" || aM[dy][1] === "") {
                                delete aM[dy]
                            }
                        }
                    }
                    if (bL) {
                        c6(dq, JSON_PIWIK.stringify(aM), ck, bk, cR)
                    }
                }
                if (aY) {
                    if (ci) {
                        dd += "&gt_ms=" + ci
                    } else {
                        if (i && i.timing && i.timing.requestStart && i.timing.responseEnd) {
                            dd += "&gt_ms=" + (i.timing.responseEnd - i.timing.requestStart)
                        }
                    }
                }
                if (aH) {
                    dd += "&pv_id=" + aH
                }
                ds.lastEcommerceOrderTs = J(de) && String(de).length ? de : ds.lastEcommerceOrderTs;
                aI(ds);
                b8();
                dd += aa(dA, {
                    tracker: bD,
                    request: dd
                });
                if (cT.length) {
                    dd += "&" + cT
                }
                if (A(b6)) {
                    dd = b6(dd)
                }
                return dd
            }
            bM = function a3() {
                var db = new Date();
                if (cS + a1 <= db.getTime()) {
                    bD.ping();
                    return true
                }
                return false
            };

            function bl(de, dd, dj, df, db, dm) {
                var dh = "idgoal=0",
                    di, dc = new Date(),
                    dk = [],
                    dl, dg = String(de).length;
                if (dg) {
                    dh += "&ec_id=" + t(de);
                    di = Math.round(dc.getTime() / 1000)
                }
                dh += "&revenue=" + dd;
                if (String(dj).length) {
                    dh += "&ec_st=" + dj
                }
                if (String(df).length) {
                    dh += "&ec_tx=" + df
                }
                if (String(db).length) {
                    dh += "&ec_sh=" + db
                }
                if (String(dm).length) {
                    dh += "&ec_dt=" + dm
                }
                if (cU) {
                    for (dl in cU) {
                        if (Object.prototype.hasOwnProperty.call(cU, dl)) {
                            if (!J(cU[dl][1])) {
                                cU[dl][1] = ""
                            }
                            if (!J(cU[dl][2])) {
                                cU[dl][2] = ""
                            }
                            if (!J(cU[dl][3]) || String(cU[dl][3]).length === 0) {
                                cU[dl][3] = 0
                            }
                            if (!J(cU[dl][4]) || String(cU[dl][4]).length === 0) {
                                cU[dl][4] = 1
                            }
                            dk.push(cU[dl])
                        }
                    }
                    dh += "&ec_items=" + t(JSON_PIWIK.stringify(dk))
                }
                dh = co(dh, al, "ecommerce", di);
                bA(dh, bE);
                if (dg) {
                    cU = {}
                }
            }

            function bU(db, df, de, dd, dc, dg) {
                if (String(db).length && J(df)) {
                    bl(db, df, de, dd, dc, dg)
                }
            }

            function bn(db) {
                if (J(db)) {
                    bl("", db, "", "", "", "")
                }
            }

            function bV(dc, de, dd) {
                aH = bc();
                var db = co("action_name=" + t(ai(dc || be)), de, "log");
                bA(db, bE, dd)
            }

            function aW(dd, dc) {
                var de, db = "(^| )(piwik[_-]" + dc;
                if (dd) {
                    for (de = 0; de < dd.length; de++) {
                        db += "|" + dd[de]
                    }
                }
                db += ")( |$)";
                return new RegExp(db)
            }

            function aQ(db) {
                return (aA && db && 0 === String(db).indexOf(aA))
            }

            function cq(df, db, dg, dc) {
                if (aQ(db)) {
                    return 0
                }
                var de = aW(bG, "download"),
                    dd = aW(a4, "link"),
                    dh = new RegExp("\\.(" + c0.join("|") + ")([?&#]|$)", "i");
                if (dd.test(df)) {
                    return "link"
                }
                if (dc || de.test(df) || dh.test(db)) {
                    return "download"
                }
                if (dg) {
                    return 0
                }
                return "link"
            }

            function aq(dc) {
                var db;
                db = dc.parentNode;
                while (db !== null && J(db)) {
                    if (ac.isLinkElement(dc)) {
                        break
                    }
                    dc = db;
                    db = dc.parentNode
                }
                return dc
            }

            function c5(dg) {
                dg = aq(dg);
                if (!ac.hasNodeAttribute(dg, "href")) {
                    return
                }
                if (!J(dg.href)) {
                    return
                }
                var df = ac.getAttributeValueFromNode(dg, "href");
                if (aQ(df)) {
                    return
                }
                var dc = dg.pathname || cg(dg.href);
                var dh = dg.hostname || d(dg.href);
                var di = dh.toLowerCase();
                var dd = dg.href.replace(dh, di);
                var de = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):", "i");
                if (!de.test(dd)) {
                    var db = cq(dg.className, dd, ao(di, dc), ac.hasNodeAttribute(dg, "download"));
                    if (db) {
                        return {
                            type: db,
                            href: dd
                        }
                    }
                }
            }

            function aL(db, dc, dd, de) {
                var df = v.buildInteractionRequestParams(db, dc, dd, de);
                if (!df) {
                    return
                }
                return co(df, null, "contentInteraction")
            }

            function cF(dd, de, di, db, dc) {
                if (!J(dd)) {
                    return
                }
                if (aQ(dd)) {
                    return dd
                }
                var dg = v.toAbsoluteUrl(dd);
                var df = "redirecturl=" + t(dg) + "&";
                df += aL(de, di, db, (dc || dd));
                var dh = "&";
                if (aA.indexOf("?") < 0) {
                    dh = "?"
                }
                return aA + dh + df
            }

            function a7(db, dc) {
                if (!db || !dc) {
                    return false
                }
                var dd = v.findTargetNode(db);
                if (v.shouldIgnoreInteraction(dd)) {
                    return false
                }
                dd = v.findTargetNodeNoDefault(db);
                if (dd && !V(dd, dc)) {
                    return false
                }
                return true
            }

            function cp(dd, dc, df) {
                if (!dd) {
                    return
                }
                var db = v.findParentContentNode(dd);
                if (!db) {
                    return
                }
                if (!a7(db, dd)) {
                    return
                }
                var de = v.buildContentBlock(db);
                if (!de) {
                    return
                }
                if (!de.target && df) {
                    de.target = df
                }
                return v.buildInteractionRequestParams(dc, de.name, de.piece, de.target)
            }

            function aS(dc) {
                if (!b5 || !b5.length) {
                    return false
                }
                var db, dd;
                for (db = 0; db < b5.length; db++) {
                    dd = b5[db];
                    if (dd && dd.name === dc.name && dd.piece === dc.piece && dd.target === dc.target) {
                        return true
                    }
                }
                return false
            }

            function bz(de) {
                if (!de) {
                    return false
                }
                var dh = v.findTargetNode(de);
                if (!dh || v.shouldIgnoreInteraction(dh)) {
                    return false
                }
                var di = c5(dh);
                if (c2 && di && di.type) {
                    return false
                }
                if (ac.isLinkElement(dh) && ac.hasNodeAttributeWithValue(dh, "href")) {
                    var db = String(ac.getAttributeValueFromNode(dh, "href"));
                    if (0 === db.indexOf("#")) {
                        return false
                    }
                    if (aQ(db)) {
                        return true
                    }
                    if (!v.isUrlToCurrentDomain(db)) {
                        return false
                    }
                    var df = v.buildContentBlock(de);
                    if (!df) {
                        return
                    }
                    var dd = df.name;
                    var dj = df.piece;
                    var dg = df.target;
                    if (!ac.hasNodeAttributeWithValue(dh, v.CONTENT_TARGET_ATTR) || dh.wasContentTargetAttrReplaced) {
                        dh.wasContentTargetAttrReplaced = true;
                        dg = v.toAbsoluteUrl(db);
                        ac.setAnyAttribute(dh, v.CONTENT_TARGET_ATTR, dg)
                    }
                    var dc = cF(db, "click", dd, dj, dg);
                    v.setHrefAttribute(dh, dc);
                    return true
                }
                return false
            }

            function aJ(dc) {
                if (!dc || !dc.length) {
                    return
                }
                var db;
                for (db = 0; db < dc.length; db++) {
                    bz(dc[db])
                }
            }

            function aT(db) {
                return function(dc) {
                    if (!db) {
                        return
                    }
                    var df = v.findParentContentNode(db);
                    var dg;
                    if (dc) {
                        dg = dc.target || dc.srcElement
                    }
                    if (!dg) {
                        dg = db
                    }
                    if (!a7(df, dg)) {
                        return
                    }
                    cb(bE);
                    if (ac.isLinkElement(db) && ac.hasNodeAttributeWithValue(db, "href") && ac.hasNodeAttributeWithValue(db, v.CONTENT_TARGET_ATTR)) {
                        var dd = ac.getAttributeValueFromNode(db, "href");
                        if (!aQ(dd) && db.wasContentTargetAttrReplaced) {
                            ac.setAnyAttribute(db, v.CONTENT_TARGET_ATTR, "")
                        }
                    }
                    var dk = c5(db);
                    if (am && dk && dk.type) {
                        return dk.type
                    }
                    if (bz(df)) {
                        return "href"
                    }
                    var dh = v.buildContentBlock(df);
                    if (!dh) {
                        return
                    }
                    var de = dh.name;
                    var dl = dh.piece;
                    var dj = dh.target;
                    var di = aL("click", de, dl, dj);
                    if (di) {
                        bA(di, bE)
                    }
                    return di
                }
            }

            function bW(dd) {
                if (!dd || !dd.length) {
                    return
                }
                var db, dc;
                for (db = 0; db < dd.length; db++) {
                    dc = v.findTargetNode(dd[db]);
                    if (dc && !dc.contentInteractionTrackingSetupDone) {
                        dc.contentInteractionTrackingSetupDone = true;
                        ak(dc, "click", aT(dc))
                    }
                }
            }

            function bs(dd, de) {
                if (!dd || !dd.length) {
                    return []
                }
                var db, dc;
                for (db = 0; db < dd.length; db++) {
                    if (aS(dd[db])) {
                        dd.splice(db, 1);
                        db--
                    } else {
                        b5.push(dd[db])
                    }
                }
                if (!dd || !dd.length) {
                    return []
                }
                aJ(de);
                bW(de);
                var df = [];
                for (db = 0; db < dd.length; db++) {
                    dc = co(v.buildImpressionRequestParams(dd[db].name, dd[db].piece, dd[db].target), undefined, "contentImpressions");
                    if (dc) {
                        df.push(dc)
                    }
                }
                return df
            }

            function cu(dc) {
                var db = v.collectContent(dc);
                return bs(db, dc)
            }

            function a5(dc) {
                if (!dc || !dc.length) {
                    return []
                }
                var db;
                for (db = 0; db < dc.length; db++) {
                    if (!v.isNodeVisible(dc[db])) {
                        dc.splice(db, 1);
                        db--
                    }
                }
                if (!dc || !dc.length) {
                    return []
                }
                return cu(dc)
            }

            function aC(dd, db, dc) {
                var de = v.buildImpressionRequestParams(dd, db, dc);
                return co(de, null, "contentImpression")
            }

            function c4(de, dc) {
                if (!de) {
                    return
                }
                var db = v.findParentContentNode(de);
                var dd = v.buildContentBlock(db);
                if (!dd) {
                    return
                }
                if (!dc) {
                    dc = "Unknown"
                }
                return aL(dc, dd.name, dd.piece, dd.target)
            }

            function cJ(dc, de, db, dd) {
                return "e_c=" + t(dc) + "&e_a=" + t(de) + (J(db) ? "&e_n=" + t(db) : "") + (J(dd) ? "&e_v=" + t(dd) : "")
            }

            function ap(dd, df, db, de, dh, dg) {
                if (a(String(dd)).length === 0 || a(String(df)).length === 0) {
                    ah("Error while logging event: Parameters `category` and `action` must not be empty or filled with whitespaces");
                    return false
                }
                var dc = co(cJ(dd, df, db, de), dh, "event");
                bA(dc, bE, dg)
            }

            function b3(db, de, dc, df) {
                var dd = co("search=" + t(db) + (de ? "&search_cat=" + t(de) : "") + (J(dc) ? "&search_count=" + dc : ""), df, "sitesearch");
                bA(dd, bE)
            }

            function cN(db, df, de, dd) {
                var dc = co("idgoal=" + db + (df ? "&revenue=" + df : ""), de, "goal");
                bA(dc, bE, dd)
            }

            function cV(de, db, di, dh, dd) {
                var dg = db + "=" + t(bX(de));
                var dc = cp(dd, "click", de);
                if (dc) {
                    dg += "&" + dc
                }
                var df = co(dg, di, "link");
                bA(df, bE, dh)
            }

            function bP(dc, db) {
                if (dc !== "") {
                    return dc + db.charAt(0).toUpperCase() + db.slice(1)
                }
                return db
            }

            function cc(dg) {
                var df, db, de = ["", "webkit", "ms", "moz"],
                    dd;
                if (!ba) {
                    for (db = 0; db < de.length; db++) {
                        dd = de[db];
                        if (Object.prototype.hasOwnProperty.call(G, bP(dd, "hidden"))) {
                            if (G[bP(dd, "visibilityState")] === "prerender") {
                                df = true
                            }
                            break
                        }
                    }
                }
                if (df) {
                    ak(G, dd + "visibilitychange", function dc() {
                        G.removeEventListener(dd + "visibilitychange", dc, false);
                        dg()
                    });
                    return
                }
                dg()
            }

            function bm() {
                var dc = aU().uuid;
                var db = aF();
                return dc + db
            }

            function ce(db) {
                if (!db) {
                    return
                }
                if (!ac.hasNodeAttribute(db, "href")) {
                    return
                }
                var dc = ac.getAttributeValueFromNode(db, "href");
                if (!dc || aQ(dc)) {
                    return
                }
                dc = k(dc, ar);
                var dd = bm();
                dc = F(dc, ar, dd);
                ac.setAnyAttribute(db, "href", dc)
            }

            function ax(de) {
                var df = ac.getAttributeValueFromNode(de, "href");
                if (!df) {
                    return false
                }
                df = String(df);
                var dc = df.indexOf("//") === 0 || df.indexOf("http://") === 0 || df.indexOf("https://") === 0;
                if (!dc) {
                    return false
                }
                var db = de.pathname || cg(de.href);
                var dd = (de.hostname || d(de.href)).toLowerCase();
                if (ao(dd, db)) {
                    if (!cB(cO, L(dd))) {
                        return true
                    }
                    return false
                }
                return false
            }

            function cA(db) {
                var dc = c5(db);
                if (dc && dc.type) {
                    dc.href = p(dc.href);
                    cV(dc.href, dc.type, undefined, null, db);
                    return
                }
                if (cH) {
                    db = aq(db);
                    if (ax(db)) {
                        ce(db)
                    }
                }
            }

            function cr() {
                return G.all && !G.addEventListener
            }

            function cP(db) {
                var dd = db.which;
                var dc = (typeof db.button);
                if (!dd && dc !== "undefined") {
                    if (cr()) {
                        if (db.button & 1) {
                            dd = 1
                        } else {
                            if (db.button & 2) {
                                dd = 3
                            } else {
                                if (db.button & 4) {
                                    dd = 2
                                }
                            }
                        }
                    } else {
                        if (db.button === 0 || db.button === "0") {
                            dd = 1
                        } else {
                            if (db.button & 1) {
                                dd = 2
                            } else {
                                if (db.button & 2) {
                                    dd = 3
                                }
                            }
                        }
                    }
                }
                return dd
            }

            function bO(db) {
                switch (cP(db)) {
                    case 1:
                        return "left";
                    case 2:
                        return "middle";
                    case 3:
                        return "right"
                }
            }

            function aX(db) {
                return db.target || db.srcElement
            }

            function ay(db) {
                return function(de) {
                    de = de || T.event;
                    var dd = bO(de);
                    var df = aX(de);
                    if (de.type === "click") {
                        var dc = false;
                        if (db && dd === "middle") {
                            dc = true
                        }
                        if (df && !dc) {
                            cA(df)
                        }
                    } else {
                        if (de.type === "mousedown") {
                            if (dd === "middle" && df) {
                                aN = dd;
                                bv = df
                            } else {
                                aN = bv = null
                            }
                        } else {
                            if (de.type === "mouseup") {
                                if (dd === aN && df === bv) {
                                    cA(df)
                                }
                                aN = bv = null
                            } else {
                                if (de.type === "contextmenu") {
                                    cA(df)
                                }
                            }
                        }
                    }
                }
            }

            function an(dd, dc) {
                var db = typeof dc;
                if (db === "undefined") {
                    dc = true
                }
                ak(dd, "click", ay(dc), false);
                if (dc) {
                    ak(dd, "mouseup", ay(dc), false);
                    ak(dd, "mousedown", ay(dc), false);
                    ak(dd, "contextmenu", ay(dc), false)
                }
            }

            function by(dd, df) {
                am = true;
                var de, dc = aW(bu, "ignore"),
                    dg = G.links,
                    db = null,
                    dh = null;
                if (dg) {
                    for (de = 0; de < dg.length; de++) {
                        db = dg[de];
                        if (!dc.test(db.className)) {
                            dh = typeof db.piwikTrackers;
                            if ("undefined" === dh) {
                                db.piwikTrackers = []
                            }
                            if (-1 === M(db.piwikTrackers, df)) {
                                db.piwikTrackers.push(df);
                                an(db, dd)
                            }
                        }
                    }
                }
            }

            function aO(dc, df, dg) {
                if (ca) {
                    return true
                }
                ca = true;
                var dh = false;
                var de, dd;

                function db() {
                    dh = true
                }
                n(function() {
                    function di(dk) {
                        setTimeout(function() {
                            if (!ca) {
                                return
                            }
                            dh = false;
                            dg.trackVisibleContentImpressions();
                            di(dk)
                        }, dk)
                    }

                    function dj(dk) {
                        setTimeout(function() {
                            if (!ca) {
                                return
                            }
                            if (dh) {
                                dh = false;
                                dg.trackVisibleContentImpressions()
                            }
                            dj(dk)
                        }, dk)
                    }
                    if (dc) {
                        de = ["scroll", "resize"];
                        for (dd = 0; dd < de.length; dd++) {
                            if (G.addEventListener) {
                                G.addEventListener(de[dd], db, false)
                            } else {
                                T.attachEvent("on" + de[dd], db)
                            }
                        }
                        dj(100)
                    }
                    if (df && df > 0) {
                        df = parseInt(df, 10);
                        di(df)
                    }
                })
            }

            function cz() {
                var dc, de, df = {
                    pdf: "application/pdf",
                    qt: "video/quicktime",
                    realp: "audio/x-pn-realaudio-plugin",
                    wma: "application/x-mplayer2",
                    dir: "application/x-director",
                    fla: "application/x-shockwave-flash",
                    java: "application/x-java-vm",
                    gears: "application/x-googlegears",
                    ag: "application/x-silverlight"
                };
                if (!((new RegExp("MSIE")).test(h.userAgent))) {
                    if (h.mimeTypes && h.mimeTypes.length) {
                        for (dc in df) {
                            if (Object.prototype.hasOwnProperty.call(df, dc)) {
                                de = h.mimeTypes[df[dc]];
                                c1[dc] = (de && de.enabledPlugin) ? "1" : "0"
                            }
                        }
                    }
                    if (!((new RegExp("Edge[ /](\\d+[\\.\\d]+)")).test(h.userAgent)) && typeof navigator.javaEnabled !== "unknown" && J(h.javaEnabled) && h.javaEnabled()) {
                        c1.java = "1"
                    }
                    if (A(T.GearsFactory)) {
                        c1.gears = "1"
                    }
                    c1.cookie = b0()
                }
                var dd = parseInt(X.width, 10);
                var db = parseInt(X.height, 10);
                c1.res = parseInt(dd, 10) + "x" + parseInt(db, 10)
            }
            var bx = {
                enabled: true,
                requests: [],
                timeout: null,
                sendRequests: function() {
                    var db = this.requests;
                    this.requests = [];
                    if (db.length === 1) {
                        bA(db[0], bE)
                    } else {
                        c7(db, bE)
                    }
                },
                push: function(db) {
                    if (!db) {
                        return
                    }
                    if (m || !this.enabled) {
                        bA(db, bE);
                        return
                    }
                    bx.requests.push(db);
                    if (this.timeout) {
                        clearTimeout(this.timeout);
                        this.timeout = null
                    }
                    this.timeout = setTimeout(function() {
                        bx.timeout = null;
                        bx.sendRequests()
                    }, 1750);
                    var dc = "RequestQueue" + at;
                    if (!Object.prototype.hasOwnProperty.call(b, dc)) {
                        b[dc] = {
                            unload: function() {
                                if (bx.timeout) {
                                    clearTimeout(bx.timeout)
                                }
                                bx.sendRequests()
                            }
                        }
                    }
                }
            };
            cz();
            bd();
            aI();
            this.getVisitorId = function() {
                return aU().uuid
            };
            this.getVisitorInfo = function() {
                return cI()
            };
            this.getAttributionInfo = function() {
                return bH()
            };
            this.getAttributionCampaignName = function() {
                return bH()[0]
            };
            this.getAttributionCampaignKeyword = function() {
                return bH()[1]
            };
            this.getAttributionReferrerTimestamp = function() {
                return bH()[2]
            };
            this.getAttributionReferrerUrl = function() {
                return bH()[3]
            };
            this.setTrackerUrl = function(db) {
                aA = db
            };
            this.getTrackerUrl = function() {
                return aA
            };
            this.getPiwikUrl = function() {
                return O(this.getTrackerUrl(), bC)
            };
            this.addTracker = function(db, dd) {
                if (!dd) {
                    throw new Error("A siteId must be given to add a new tracker")
                }
                if (!J(db) || null === db) {
                    db = this.getTrackerUrl()
                }
                var dc = new Q(db, dd);
                I.push(dc);
                e.trigger("TrackerAdded", [this]);
                return dc
            };
            this.getSiteId = function() {
                return b1
            };
            this.setSiteId = function(db) {
                bY(db)
            };
            this.resetUserId = function() {
                bt = ""
            };
            this.setUserId = function(db) {
                if (!J(db) || !db.length) {
                    return
                }
                bt = db
            };
            this.getUserId = function() {
                return bt
            };
            this.setCustomData = function(db, dc) {
                if (W(db)) {
                    al = db
                } else {
                    if (!al) {
                        al = {}
                    }
                    al[db] = dc
                }
            };
            this.getCustomData = function() {
                return al
            };
            this.setCustomRequestProcessing = function(db) {
                b6 = db
            };
            this.appendToTrackingUrl = function(db) {
                cT = db
            };
            this.getRequest = function(db) {
                return co(db)
            };
            this.addPlugin = function(db, dc) {
                b[db] = dc
            };
            this.setCustomDimension = function(db, dc) {
                db = parseInt(db, 10);
                if (db > 0) {
                    if (!J(dc)) {
                        dc = ""
                    }
                    if (!w(dc)) {
                        dc = String(dc)
                    }
                    bh[db] = dc
                }
            };
            this.getCustomDimension = function(db) {
                db = parseInt(db, 10);
                if (db > 0 && Object.prototype.hasOwnProperty.call(bh, db)) {
                    return bh[db]
                }
            };
            this.deleteCustomDimension = function(db) {
                db = parseInt(db, 10);
                if (db > 0) {
                    delete bh[db]
                }
            };
            this.setCustomVariable = function(dc, db, df, dd) {
                var de;
                if (!J(dd)) {
                    dd = "visit"
                }
                if (!J(db)) {
                    return
                }
                if (!J(df)) {
                    df = ""
                }
                if (dc > 0) {
                    db = !w(db) ? String(db) : db;
                    df = !w(df) ? String(df) : df;
                    de = [db.slice(0, bo), df.slice(0, bo)];
                    if (dd === "visit" || dd === 2) {
                        cy();
                        aM[dc] = de
                    } else {
                        if (dd === "page" || dd === 3) {
                            bR[dc] = de
                        } else {
                            if (dd === "event") {
                                ch[dc] = de
                            }
                        }
                    }
                }
            };
            this.getCustomVariable = function(dc, dd) {
                var db;
                if (!J(dd)) {
                    dd = "visit"
                }
                if (dd === "page" || dd === 3) {
                    db = bR[dc]
                } else {
                    if (dd === "event") {
                        db = ch[dc]
                    } else {
                        if (dd === "visit" || dd === 2) {
                            cy();
                            db = aM[dc]
                        }
                    }
                }
                if (!J(db) || (db && db[0] === "")) {
                    return false
                }
                return db
            };
            this.deleteCustomVariable = function(db, dc) {
                if (this.getCustomVariable(db, dc)) {
                    this.setCustomVariable(db, "", "", dc)
                }
            };
            this.deleteCustomVariables = function(db) {
                if (db === "page" || db === 3) {
                    bR = {}
                } else {
                    if (db === "event") {
                        ch = {}
                    } else {
                        if (db === "visit" || db === 2) {
                            aM = {}
                        }
                    }
                }
            };
            this.storeCustomVariablesInCookie = function() {
                bL = true
            };
            this.setLinkTrackingTimer = function(db) {
                bE = db
            };
            this.getLinkTrackingTimer = function() {
                return bE
            };
            this.setDownloadExtensions = function(db) {
                if (w(db)) {
                    db = db.split("|")
                }
                c0 = db
            };
            this.addDownloadExtensions = function(dc) {
                var db;
                if (w(dc)) {
                    dc = dc.split("|")
                }
                for (db = 0; db < dc.length; db++) {
                    c0.push(dc[db])
                }
            };
            this.removeDownloadExtensions = function(dd) {
                var dc, db = [];
                if (w(dd)) {
                    dd = dd.split("|")
                }
                for (dc = 0; dc < c0.length; dc++) {
                    if (M(dd, c0[dc]) === -1) {
                        db.push(c0[dc])
                    }
                }
                c0 = db
            };
            this.setDomains = function(db) {
                au = w(db) ? [db] : db;
                var df = false,
                    dd = 0,
                    dc;
                for (dd; dd < au.length; dd++) {
                    dc = String(au[dd]);
                    if (cB(cO, L(dc))) {
                        df = true;
                        break
                    }
                    var de = cg(dc);
                    if (de && de !== "/" && de !== "/*") {
                        df = true;
                        break
                    }
                }
                if (!df) {
                    au.push(cO)
                }
            };
            this.enableCrossDomainLinking = function() {
                cH = true
            };
            this.disableCrossDomainLinking = function() {
                cH = false
            };
            this.isCrossDomainLinkingEnabled = function() {
                return cH
            };
            this.setCrossDomainLinkingTimeout = function(db) {
                aV = db
            };
            this.getCrossDomainLinkingUrlParameter = function() {
                return t(ar) + "=" + t(bm())
            };
            this.setIgnoreClasses = function(db) {
                bu = w(db) ? [db] : db
            };
            this.setRequestMethod = function(db) {
                c3 = db || cd
            };
            this.setRequestContentType = function(db) {
                cs = db || aE
            };
            this.setReferrerUrl = function(db) {
                bi = db
            };
            this.setCustomUrl = function(db) {
                a0 = bQ(bI, db)
            };
            this.getCurrentUrl = function() {
                return a0 || bI
            };
            this.setDocumentTitle = function(db) {
                be = db
            };
            this.setAPIUrl = function(db) {
                bC = db
            };
            this.setDownloadClasses = function(db) {
                bG = w(db) ? [db] : db
            };
            this.setLinkClasses = function(db) {
                a4 = w(db) ? [db] : db
            };
            this.setCampaignNameKey = function(db) {
                cm = w(db) ? [db] : db
            };
            this.setCampaignKeywordKey = function(db) {
                bB = w(db) ? [db] : db
            };
            this.discardHashTag = function(db) {
                bK = db
            };
            this.setCookieNamePrefix = function(db) {
                bf = db;
                aM = bS()
            };
            this.setCookieDomain = function(db) {
                var dc = L(db);
                if (br(dc)) {
                    cR = dc;
                    bd()
                }
            };
            this.getCookieDomain = function() {
                return cR
            };
            this.hasCookies = function() {
                return "1" === b0()
            };
            this.setSessionCookie = function(dd, dc, db) {
                if (!dd) {
                    throw new Error("Missing cookie name")
                }
                if (!J(db)) {
                    db = ck
                }
                bp.push(dd);
                c6(aP(dd), dc, db, bk, cR)
            };
            this.getCookie = function(dc) {
                var db = az(aP(dc));
                if (db === 0) {
                    return null
                }
                return db
            };
            this.setCookiePath = function(db) {
                bk = db;
                bd()
            };
            this.getCookiePath = function(db) {
                return bk
            };
            this.setVisitorCookieTimeout = function(db) {
                cD = db * 1000
            };
            this.setSessionCookieTimeout = function(db) {
                ck = db * 1000
            };
            this.getSessionCookieTimeout = function() {
                return ck
            };
            this.setReferralCookieTimeout = function(db) {
                cZ = db * 1000
            };
            this.setConversionAttributionFirstReferrer = function(db) {
                bq = db
            };
            this.setSecureCookie = function(db) {
                bN = db
            };
            this.disableCookies = function() {
                bg = true;
                c1.cookie = "0";
                if (b1) {
                    aB()
                }
            };
            this.deleteCookies = function() {
                aB()
            };
            this.setDoNotTrack = function(dc) {
                var db = h.doNotTrack || h.msDoNotTrack;
                cK = dc && (db === "yes" || db === "1");
                if (cK) {
                    this.disableCookies()
                }
            };
            this.alwaysUseSendBeacon = function() {
                cQ = true
            };
            this.addListener = function(dc, db) {
                an(dc, db)
            };
            this.enableLinkTracking = function(dc) {
                c2 = true;
                var db = this;
                cc(function() {
                    q(function() {
                        by(dc, db)
                    })
                })
            };
            this.enableJSErrorTracking = function() {
                if (cM) {
                    return
                }
                cM = true;
                var db = T.onerror;
                T.onerror = function(dg, de, dd, df, dc) {
                    cc(function() {
                        var dh = "JavaScript Errors";
                        var di = de + ":" + dd;
                        if (df) {
                            di += ":" + df
                        }
                        ap(dh, di, dg)
                    });
                    if (db) {
                        return db(dg, de, dd, df, dc)
                    }
                    return false
                }
            };
            this.disablePerformanceTracking = function() {
                aY = false
            };
            this.setGenerationTimeMs = function(db) {
                ci = parseInt(db, 10)
            };
            this.enableHeartBeatTimer = function(db) {
                db = Math.max(db, 1);
                a1 = (db || 15) * 1000;
                if (cS !== null) {
                    c8()
                }
            };
            this.disableHeartBeatTimer = function() {
                bF();
                if (a1 || aK) {
                    if (T.removeEventListener) {
                        T.removeEventListener("focus", a6, true);
                        T.removeEventListener("blur", av, true)
                    } else {
                        if (T.detachEvent) {
                            T.detachEvent("onfocus", a6);
                            T.detachEvent("onblur", av)
                        }
                    }
                }
                a1 = null;
                aK = false
            };
            this.killFrame = function() {
                if (T.location !== T.top.location) {
                    T.top.location = T.location
                }
            };
            this.redirectFile = function(db) {
                if (T.location.protocol === "file:") {
                    T.location = db
                }
            };
            this.setCountPreRendered = function(db) {
                ba = db
            };
            this.trackGoal = function(db, de, dd, dc) {
                cc(function() {
                    cN(db, de, dd, dc)
                })
            };
            this.trackLink = function(dc, db, de, dd) {
                cc(function() {
                    cV(dc, db, de, dd)
                })
            };
            this.getNumTrackedPageViews = function() {
                return cn
            };
            this.trackPageView = function(db, dd, dc) {
                b5 = [];
                cE = [];
                if (N(b1)) {
                    cc(function() {
                        Y(aA, bC, b1)
                    })
                } else {
                    cc(function() {
                        cn++;
                        bV(db, dd, dc)
                    })
                }
            };
            this.trackAllContentImpressions = function() {
                if (N(b1)) {
                    return
                }
                cc(function() {
                    q(function() {
                        var db = v.findContentNodes();
                        var dc = cu(db);
                        c7(dc, bE)
                    })
                })
            };
            this.trackVisibleContentImpressions = function(db, dc) {
                if (N(b1)) {
                    return
                }
                if (!J(db)) {
                    db = true
                }
                if (!J(dc)) {
                    dc = 750
                }
                aO(db, dc, this);
                cc(function() {
                    n(function() {
                        var dd = v.findContentNodes();
                        var de = a5(dd);
                        c7(de, bE)
                    })
                })
            };
            this.trackContentImpression = function(dd, db, dc) {
                if (N(b1)) {
                    return
                }
                dd = a(dd);
                db = a(db);
                dc = a(dc);
                if (!dd) {
                    return
                }
                db = db || "Unknown";
                cc(function() {
                    var de = aC(dd, db, dc);
                    bA(de, bE)
                })
            };
            this.trackContentImpressionsWithinNode = function(db) {
                if (N(b1) || !db) {
                    return
                }
                cc(function() {
                    if (ca) {
                        n(function() {
                            var dc = v.findContentNodesWithinNode(db);
                            var dd = a5(dc);
                            c7(dd, bE)
                        })
                    } else {
                        q(function() {
                            var dc = v.findContentNodesWithinNode(db);
                            var dd = cu(dc);
                            c7(dd, bE)
                        })
                    }
                })
            };
            this.trackContentInteraction = function(dd, de, db, dc) {
                if (N(b1)) {
                    return
                }
                dd = a(dd);
                de = a(de);
                db = a(db);
                dc = a(dc);
                if (!dd || !de) {
                    return
                }
                db = db || "Unknown";
                cc(function() {
                    var df = aL(dd, de, db, dc);
                    if (df) {
                        bA(df, bE)
                    }
                })
            };
            this.trackContentInteractionNode = function(dc, db) {
                if (N(b1) || !dc) {
                    return
                }
                cc(function() {
                    var dd = c4(dc, db);
                    if (dd) {
                        bA(dd, bE)
                    }
                })
            };
            this.logAllContentBlocksOnPage = function() {
                var dd = v.findContentNodes();
                var db = v.collectContent(dd);
                var dc = typeof console;
                if (dc !== "undefined" && console && console.log) {
                    console.log(db)
                }
            };
            this.trackEvent = function(dc, de, db, dd, dg, df) {
                cc(function() {
                    ap(dc, de, db, dd, dg, df)
                })
            };
            this.trackSiteSearch = function(db, dd, dc, de) {
                b5 = [];
                cc(function() {
                    b3(db, dd, dc, de)
                })
            };
            this.setEcommerceView = function(de, db, dd, dc) {
                if (!J(dd) || !dd.length) {
                    dd = ""
                } else {
                    if (dd instanceof Array) {
                        dd = JSON_PIWIK.stringify(dd)
                    }
                }
                bR[5] = ["_pkc", dd];
                if (J(dc) && String(dc).length) {
                    bR[2] = ["_pkp", dc]
                }
                if ((!J(de) || !de.length) && (!J(db) || !db.length)) {
                    return
                }
                if (J(de) && de.length) {
                    bR[3] = ["_pks", de]
                }
                if (!J(db) || !db.length) {
                    db = ""
                }
                bR[4] = ["_pkn", db]
            };
            this.getEcommerceItems = function() {
                return JSON.parse(JSON.stringify(cU))
            };
            this.addEcommerceItem = function(df, db, dd, dc, de) {
                if (df.length) {
                    cU[df] = [df, db, dd, dc, de]
                }
            };
            this.removeEcommerceItem = function(db) {
                if (db.length) {
                    delete cU[db]
                }
            };
            this.clearEcommerceCart = function() {
                cU = {}
            };
            this.trackEcommerceOrder = function(db, df, de, dd, dc, dg) {
                bU(db, df, de, dd, dc, dg)
            };
            this.trackEcommerceCartUpdate = function(db) {
                bn(db)
            };
            this.trackRequest = function(dc, de, dd, db) {
                cc(function() {
                    var df = co(dc, de, db);
                    bA(df, bE, dd)
                })
            };
            this.ping = function() {
                this.trackRequest("ping=1", null, null, "ping")
            };
            this.disableQueueRequest = function() {
                bx.enabled = false
            };
            this.queueRequest = function(db) {
                cc(function() {
                    var dc = co(db);
                    bx.push(dc)
                })
            };
            this.getRememberedConsent = function() {
                var db = az(a9);
                if (az(cG)) {
                    if (db) {
                        bT(a9, bk, cR)
                    }
                    return null
                }
                if (!db || db === 0) {
                    return null
                }
                return db
            };
            this.hasRememberedConsent = function() {
                return !!this.getRememberedConsent()
            };
            this.requireConsent = function() {
                cv = true;
                bw = this.hasRememberedConsent();
                x++;
                b["CoreConsent" + x] = {
                    unload: function() {
                        if (!bw) {
                            aB()
                        }
                    }
                }
            };
            this.setConsentGiven = function() {
                bw = true;
                bT(cG, bk, cR);
                var dc, db;
                for (dc = 0; dc < cE.length; dc++) {
                    db = typeof cE[dc];
                    if (db === "string") {
                        bA(cE[dc], bE)
                    } else {
                        if (db === "object") {
                            c7(cE[dc], bE)
                        }
                    }
                }
                cE = []
            };
            this.rememberConsentGiven = function(dc) {
                if (bg) {
                    ah("rememberConsentGiven is called but cookies are disabled, consent will not be remembered");
                    return
                }
                if (dc) {
                    dc = dc * 60 * 60 * 1000
                }
                this.setConsentGiven();
                var db = new Date().getTime();
                c6(a9, db, dc, bk, cR, bN)
            };
            this.forgetConsentGiven = function() {
                if (bg) {
                    ah("forgetConsentGiven is called but cookies are disabled, consent will not be forgotten");
                    return
                }
                bT(a9, bk, cR);
                c6(cG, new Date().getTime(), 0, bk, cR, bN);
                this.requireConsent()
            };
            this.isUserOptedOut = function() {
                return !bw
            };
            this.optUserOut = this.forgetConsentGiven;
            this.forgetUserOptOut = this.rememberConsentGiven;
            e.trigger("TrackerSetup", [this])
        }

        function H() {
            return {
                push: ad
            }
        }

        function c(aq, ap) {
            var ar = {};
            var an, ao;
            for (an = 0; an < ap.length; an++) {
                var al = ap[an];
                ar[al] = 1;
                for (ao = 0; ao < aq.length; ao++) {
                    if (aq[ao] && aq[ao][0]) {
                        var am = aq[ao][0];
                        if (al === am) {
                            ad(aq[ao]);
                            delete aq[ao];
                            if (ar[am] > 1 && am !== "addTracker") {
                                ah("The method " + am + ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: https://developer.piwik.org/guides/tracking-javascript-guide#multiple-piwik-trackers')
                            }
                            ar[am]++
                        }
                    }
                }
            }
            return aq
        }
        var C = ["addTracker", "disableCookies", "setTrackerUrl", "setAPIUrl", "enableCrossDomainLinking", "setCrossDomainLinkingTimeout", "setSecureCookie", "setCookiePath", "setCookieDomain", "setDomains", "setUserId", "setSiteId", "alwaysUseSendBeacon", "enableLinkTracking", "requireConsent", "setConsentGiven"];

        function ab(al, an) {
            var am = new Q(al, an);
            I.push(am);
            _paq = c(_paq, C);
            for (E = 0; E < _paq.length; E++) {
                if (_paq[E]) {
                    ad(_paq[E])
                }
            }
            _paq = new H();
            e.trigger("TrackerAdded", [am]);
            return am
        }
        ak(T, "beforeunload", af, false);
        Date.prototype.getTimeAlias = Date.prototype.getTime;
        e = {
            initialized: false,
            JSON: JSON_PIWIK,
            DOM: {
                addEventListener: function(ao, an, am, al) {
                    var ap = typeof al;
                    if (ap === "undefined") {
                        al = false
                    }
                    ak(ao, an, am, al)
                },
                onLoad: n,
                onReady: q,
                isNodeVisible: j,
                isOrWasNodeVisible: v.isNodeVisible
            },
            on: function(am, al) {
                if (!y[am]) {
                    y[am] = []
                }
                y[am].push(al)
            },
            off: function(an, am) {
                if (!y[an]) {
                    return
                }
                var al = 0;
                for (al; al < y[an].length; al++) {
                    if (y[an][al] === am) {
                        y[an].splice(al, 1)
                    }
                }
            },
            trigger: function(an, ao, am) {
                if (!y[an]) {
                    return
                }
                var al = 0;
                for (al; al < y[an].length; al++) {
                    y[an][al].apply(am || T, ao)
                }
            },
            addPlugin: function(al, am) {
                b[al] = am
            },
            getTracker: function(al, am) {
                if (!J(am)) {
                    am = this.getAsyncTracker().getSiteId()
                }
                if (!J(al)) {
                    al = this.getAsyncTracker().getTrackerUrl()
                }
                return new Q(al, am)
            },
            getAsyncTrackers: function() {
                return I
            },
            addTracker: function(al, an) {
                var am;
                if (!I.length) {
                    am = ab(al, an)
                } else {
                    am = I[0].addTracker(al, an)
                }
                return am
            },
            getAsyncTracker: function(am, ap) {
                var ao;
                if (I && I.length && I[0]) {
                    ao = I[0]
                } else {
                    return ab(am, ap)
                }
                if (!ap && !am) {
                    return ao
                }
                if ((!J(ap) || null === ap) && ao) {
                    ap = ao.getSiteId()
                }
                if ((!J(am) || null === am) && ao) {
                    am = ao.getTrackerUrl()
                }
                var an, al = 0;
                for (al; al < I.length; al++) {
                    an = I[al];
                    if (an && String(an.getSiteId()) === String(ap) && an.getTrackerUrl() === am) {
                        return an
                    }
                }
            },
            retryMissedPluginCalls: function() {
                var am = ae;
                ae = [];
                var al = 0;
                for (al; al < am.length; al++) {
                    ad(am[al])
                }
            }
        };
        if (typeof define === "function" && define.amd) {
            define("piwik", [], function() {
                return e
            });
            define("matomo", [], function() {
                return e
            })
        }
        return e
    }())
}
/*!!! pluginTrackerHook */
(function() {
    function b() {
        if ("object" !== typeof _paq) {
            return false
        }
        var c = typeof _paq.length;
        if ("undefined" === c) {
            return false
        }
        return !!_paq.length
    }
    if (window && "object" === typeof window.piwikPluginAsyncInit && window.piwikPluginAsyncInit.length) {
        var a = 0;
        for (a; a < window.piwikPluginAsyncInit.length; a++) {
            if (typeof window.piwikPluginAsyncInit[a] === "function") {
                window.piwikPluginAsyncInit[a]()
            }
        }
    }
    if (window && window.piwikAsyncInit) {
        window.piwikAsyncInit()
    }
    if (!window.Piwik.getAsyncTrackers().length) {
        if (b()) {
            window.Piwik.addTracker()
        } else {
            _paq = {
                push: function(c) {
                    var d = typeof console;
                    if (d !== "undefined" && console && console.error) {
                        console.error("_paq.push() was used but Matomo tracker was not initialized before the matomo.js file was loaded. Make sure to configure the tracker via _paq.push before loading matomo.js. Alternatively, you can create a tracker via Matomo.addTracker() manually and then use _paq.push but it may not fully work as tracker methods may not be executed in the correct order.", c)
                    }
                }
            }
        }
    }
    window.Piwik.trigger("PiwikInitialized", []);
    window.Piwik.initialized = true
}());
(function() {
    var a = (typeof AnalyticsTracker);
    if (a === "undefined") {
        AnalyticsTracker = window.Piwik
    }
}());
if (typeof piwik_log !== "function") {
    piwik_log = function(b, f, d, g) {
        function a(h) {
            try {
                if (window["piwik_" + h]) {
                    return window["piwik_" + h]
                }
            } catch (i) {}
            return
        }
        var c, e = window.Piwik.getTracker(d, f);
        e.setDocumentTitle(b);
        e.setCustomData(g);
        c = a("tracker_pause");
        if (c) {
            e.setLinkTrackingTimer(c)
        }
        c = a("download_extensions");
        if (c) {
            e.setDownloadExtensions(c)
        }
        c = a("hosts_alias");
        if (c) {
            e.setDomains(c)
        }
        c = a("ignore_classes");
        if (c) {
            e.setIgnoreClasses(c)
        }
        e.trackPageView();
        if (a("install_tracker")) {
            piwik_track = function(i, k, j, h) {
                e.setSiteId(k);
                e.setTrackerUrl(j);
                e.trackLink(i, h)
            };
            e.enableLinkTracking()
        }
    }
}
/*!! @license-end */
;