(function() {
    var k, m = this,
        n = function(a) {
            return void 0 !== a
        },
        aa = function() {},
        p = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable &&
                        !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        q = function(a) {
            return "string" == typeof a
        },
        r = function(a) {
            return "function" == p(a)
        },
        ba = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ca = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b,
                    arguments)
            }
        },
        t = function(a, b, c) {
            t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ba : ca;
            return t.apply(null, arguments)
        },
        u = Date.now || function() {
            return +new Date
        },
        v = function(a, b) {
            var c;
            a = a.split(".");
            c = c || m;
            a[0] in c || !c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) !a.length && n(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {}
        },
        y = function(a, b) {
            var c = x.prototype;
            c[a] = b
        },
        z = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Ga = b.prototype;
            a.prototype = new c;
            a.Ja = function(a, c, f) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                return b.prototype[c].apply(a, d)
            }
        };
    var da = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        ea = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < da.length; f++) c = da[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var fa = {
        m: !0,
        c: !0,
        s: !0,
        t: !0
    };
    var ga = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        ha = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var ia = Array.prototype.indexOf ? function(a, b, c) {
        return Array.prototype.indexOf.call(a, b, c)
    } : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (q(a)) return q(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var A;
    a: {
        var ja = m.navigator;
        if (ja) {
            var ka = ja.userAgent;
            if (ka) {
                A = ka;
                break a
            }
        }
        A = ""
    }
    var B = function(a) {
            var b = A;
            return -1 != b.indexOf(a)
        },
        la = function() {
            var a = "WebKit",
                b = A;
            return -1 != b.toLowerCase().indexOf(a.toLowerCase())
        };
    var ma = function(a, b) {
        this.x = n(a) ? a : 0;
        this.y = n(b) ? b : 0
    };
    ma.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    var na = function(a) {
        na[" "](a);
        return a
    };
    na[" "] = aa;
    var pa = function(a, b) {
        var c, d = oa;
        c = c ? c(a) : a;
        return Object.prototype.hasOwnProperty.call(d, c) ? d[c] : d[c] = b(a)
    };
    var qa = B("Opera"),
        C = B("Trident") || B("MSIE"),
        ra = B("Edge"),
        D = B("Gecko") && !(la() && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"),
        E = la() && !B("Edge"),
        sa = function() {
            var a = A;
            if (D) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (ra) return /Edge\/([\d\.]+)/.exec(a);
            if (C) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (E) return /WebKit\/(\S+)/.exec(a);
            if (qa) return /(?:Version)[ \/]?(\S+)/.exec(a)
        },
        ta = function() {
            var a = m.document;
            return a ? a.documentMode : void 0
        },
        ua;
    a: {
        var va = "",
            wa = sa();wa && (va = wa ? wa[1] : "");
        if (C) {
            var xa = ta();
            if (null != xa && xa > parseFloat(va)) {
                ua = String(xa);
                break a
            }
        }
        ua = va
    }
    var ya = ua,
        oa = {},
        F = function(a) {
            return pa(a, function() {
                var b, c = a;
                b = ya;
                var d = 0;
                b = ga(String(b)).split(".");
                for (var c = ga(String(c)).split("."), e = Math.max(b.length, c.length), f = 0; 0 == d && f < e; f++) {
                    var g = b[f] || "",
                        h = c[f] || "";
                    do {
                        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                        h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                        if (0 == g[0].length && 0 == h[0].length) break;
                        var d = 0 == g[1].length ? 0 : parseInt(g[1], 10),
                            l = 0 == h[1].length ? 0 : parseInt(h[1], 10),
                            d = ha(d, l) || ha(0 == g[2].length, 0 == h[2].length) || ha(g[2], h[2]),
                            g = g[3],
                            h = h[3]
                    } while (0 ==
                        d)
                }
                b = d;
                return 0 <= b
            })
        },
        Aa = function() {
            var a = 9;
            return Number(za) >= a
        },
        Ba;
    var Ca = m.document,
        Da = ta();
    Ba = Ca && C ? Da || ("CSS1Compat" == Ca.compatMode ? parseInt(ya, 10) : 5) : void 0;
    var za = Ba;
    !D && !C || C && Aa() || D && F("1.9.1");
    C && F("9");
    var G = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    var Ea = function() {
        var a = G().top;
        try {
            return !!a.location.href || "" === a.location.href
        } catch (b) {
            return !1
        }
    };
    var Fa = [],
        Ga = !1,
        Ha = function(a) {
            if (Ga)
                for (var b = 0; b < Fa.length; b++) a(t(Fa[b].Ra, Fa[b]))
        };
    var Ia = !C || Aa(),
        Ja = C && !F("9");
    !E || F("528");
    D && F("1.9b") || C && F("8") || qa && F("9.5") || E && F("528");
    D && !F("8") || C && F("9");
    var Ka = function() {
        this.ca = this.ca;
        this.za = this.za
    };
    Ka.prototype.ca = !1;
    var H = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.w = !1;
        this.ia = !0
    };
    H.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.ia = !1
    };
    var I = function(a, b) {
        H.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.X = this.state = null;
        if (a) {
            var c = b;
            b = this.type = a.type;
            var d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = c;
            if (c = a.relatedTarget) {
                if (D) {
                    var e;
                    a: {
                        var f = "nodeName";
                        try {
                            na(c[f]);
                            e = !0;
                            break a
                        } catch (g) {}
                        e = !1
                    }
                    e || (c = null)
                }
            } else "mouseover" == b ? c = a.fromElement : "mouseout" == b && (c = a.toElement);
            this.relatedTarget = c;
            null === d ? (this.offsetX = E || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = E || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX =
                d.screenX || 0, this.screenY = d.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.charCode = a.charCode || ("keypress" == b ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.state = a.state;
            this.X = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    z(I, H);
    I.prototype.preventDefault = function() {
        I.Ga.preventDefault.call(this);
        var a = this.X;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Ja) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var J = "closure_listenable_" + (1E6 * Math.random() | 0),
        La = 0;
    var Ma = function(a, b, c, d, e) {
            var f = null;
            this.listener = a;
            this.M = f;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.G = e;
            this.key = ++La;
            this.A = this.D = !1
        },
        Na = function(a) {
            a.A = !0;
            a.listener = null;
            a.M = null;
            a.src = null;
            a.G = null
        };
    var K = function(a) {
        this.src = a;
        this.b = {};
        this.T = 0
    };
    K.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.b[f];
        a || (a = this.b[f] = [], this.T++);
        var g = Oa(a, b, d, e); - 1 < g ? (b = a[g], c || (b.D = !1)) : (b = new Ma(b, this.src, f, !!d, e), b.D = c, a.push(b));
        return b
    };
    K.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.b)) return !1;
        var e = this.b[a];
        b = Oa(e, b, c, d);
        return -1 < b ? (c = e[b], Na(c), c = e, Array.prototype.splice.call(c, b, 1), 0 == e.length && (delete this.b[a], this.T--), !0) : !1
    };
    var Pa = function(a, b) {
        var c = b.type;
        if (c in a.b) {
            var d, e = a.b[c],
                f = ia(e, b);
            (d = 0 <= f) && Array.prototype.splice.call(e, f, 1);
            d && (Na(b), 0 == a.b[c].length && (delete a.b[c], a.T--))
        }
    };
    K.prototype.Z = function(a, b, c, d) {
        a = this.b[a.toString()];
        var e = -1;
        a && (e = Oa(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    var Oa = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.A && f.listener == b && f.capture == !!c && f.G == d) return e
        }
        return -1
    };
    var Qa = "closure_lm_" + (1E6 * Math.random() | 0),
        Ra = {},
        Sa = 0,
        L = function(a, b, c, d, e) {
            if ("array" == p(b))
                for (var f = 0; f < b.length; f++) L(a, b[f], c, d, e);
            else c = Ta(c), a && a[J] ? a.j.add(String(b), c, !1, d, e) : Ua(a, b, c, !1, d, e)
        },
        Ua = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = !!e,
                h = M(a);
            h || (a[Qa] = h = new K(a));
            c = h.add(b, c, d, e, f);
            if (!c.M) {
                d = Va();
                c.M = d;
                d.src = a;
                d.listener = c;
                if (a.addEventListener) a.addEventListener(b.toString(), d, g);
                else if (a.attachEvent) a.attachEvent(Wa(b.toString()), d);
                else throw Error("addEventListener and attachEvent are unavailable.");
                Sa++
            }
        },
        Va = function() {
            var a = Xa,
                b = Ia ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        Ya = function(a, b, c, d, e) {
            if ("array" == p(b))
                for (var f = 0; f < b.length; f++) Ya(a, b[f], c, d, e);
            else c = Ta(c), a && a[J] ? a.j.add(String(b), c, !0, d, e) : Ua(a, b, c, !0, d, e)
        },
        Za = function(a, b, c, d, e) {
            if ("array" == p(b))
                for (var f = 0; f < b.length; f++) Za(a, b[f], c, d, e);
            else c = Ta(c), a && a[J] ? a.j.remove(String(b), c, d, e) : a && (d = !!d, (a = M(a)) && (b = a.Z(b, c, d, e)) && $a(b))
        },
        $a = function(a) {
            if ("number" !=
                typeof a && a && !a.A) {
                var b = a.src;
                if (b && b[J]) Pa(b.j, a);
                else {
                    var c = a.type,
                        d = a.M;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(Wa(c), d);
                    Sa--;
                    (c = M(b)) ? (Pa(c, a), 0 == c.T && (c.src = null, b[Qa] = null)) : Na(a)
                }
            }
        },
        Wa = function(a) {
            return a in Ra ? Ra[a] : Ra[a] = "on" + a
        },
        bb = function(a, b, c, d) {
            var e = !0;
            if (a = M(a))
                if (b = a.b[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.A && (f = ab(f, d), e = e && !1 !== f)
                    }
            return e
        },
        ab = function(a, b) {
            var c = a.listener,
                d = a.G || a.src;
            a.D && $a(a);
            return c.call(d, b)
        },
        Xa = function(a, b) {
            if (a.A) return !0;
            if (!Ia) {
                if (!b) a: {
                    var c;b = "window.event";b = b.split(".");c = c || m;
                    for (var d; d = b.shift();)
                        if (null != c[d]) c = c[d];
                        else {
                            b = null;
                            break a
                        }
                    b = c
                }
                d = b;
                c = new I(d, this);
                b = !0;
                if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 == d.keyCode) try {
                            d.keyCode = -1;
                            break a
                        } catch (g) {
                            e = !0
                        }
                        if (e || void 0 == d.returnValue) d.returnValue = !0
                    }
                    d = [];
                    for (e = c.currentTarget; e; e = e.parentNode) d.push(e);a = a.type;
                    for (e = d.length - 1; !c.w && 0 <= e; e--) {
                        c.currentTarget = d[e];
                        var f = bb(d[e],
                            a, !0, c);
                        b = b && f
                    }
                    for (e = 0; !c.w && e < d.length; e++) c.currentTarget = d[e],
                    f = bb(d[e], a, !1, c),
                    b = b && f
                }
                return b
            }
            return ab(a, new I(b, this))
        },
        M = function(a) {
            a = a[Qa];
            return a instanceof K ? a : null
        },
        cb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Ta = function(a) {
            if (r(a)) return a;
            a[cb] || (a[cb] = function(b) {
                return a.handleEvent(b)
            });
            return a[cb]
        };
    Ha(function(a) {
        Xa = a(Xa)
    });
    var N = function() {
            return Math.round(u() / 1E3)
        },
        db = function(a) {
            return window.performance && window.performance.timing && window.performance.timing.domLoading && 0 < window.performance.timing[a] ? Math.round(window.performance.timing[a] / 1E3) : null
        },
        eb = function() {
            return {
                domLoading: db("domLoading"),
                domComplete: db("domComplete"),
                unloadEventStart: db("unloadEventStart")
            }
        };
    window.console && "function" === typeof window.console.log && t(window.console.log, window.console);
    var fb = function(a) {
            if (/^\s*$/.test(a)) return !1;
            var b = /\\["\\\/bfnrtu]/g,
                c = /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                d = /(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,
                e = /^[\],:{}\s\u2028\u2029]*$/;
            return e.test(a.replace(b, "@").replace(c, "]").replace(d, ""))
        },
        gb = function(a) {
            a = String(a);
            if (fb(a)) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        hb = function(a) {
            this.N = a
        };
    hb.prototype.C = function(a) {
        var b = [];
        ib(this, a, b);
        return b.join("")
    };
    var ib = function(a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if ("array" == p(b)) {
                        var d = a;
                        a = b;
                        b = a.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), e = a[f], ib(d, d.N ? d.N.call(a, String(f), e) : e, c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        f = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), jb(d, c), c.push(":"), ib(a, a.N ? a.N.call(b, d, e) : e, c), f = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        jb(b, c);
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
        },
        kb = {
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
        lb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        jb = function(a, b) {
            b.push('"', a.replace(lb, function(a) {
                var b =
                    kb[a];
                b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), kb[a] = b);
                return b
            }), '"')
        };
    var mb = function() {
        var a;
        if (!a) return this;
        var b = a.La(),
            c = a.Ma(),
            d = a.l,
            e = a.i;
        a = a.f;
        b && (this.er = b.C());
        c && (this.vi = c.C());
        null != d && (this.tagstamp = d);
        null != e && (this.playstamp = e);
        null != a && (this.lactstamp = a);
        return this
    };
    var nb = null,
        pb = function() {
            var a = "google_video_inner_static_iframe",
                b = document;
            if (b.body) {
                var c;
                try {
                    c = b.createElement('<iframe name="' + a + '" id="' + a + '" src="about:blank" style="height: 0px; width: 0px; display:none">'), b.body.appendChild(c)
                } catch (d) {
                    c = b.createElement("iframe"), c.setAttribute("name", a), c.setAttribute("id", a), c.setAttribute("src", "about:blank"), c.setAttribute("style", "height: 0px; width: 0px; display:none"), b.body.appendChild(c)
                }
            } else b.write("<iframe frameBorder='0' src='about:blank' id='" +
                a + "' name='" + a + "' style='height:0px;width:0px;display:none'></iframe>")
        },
        qb = function(a) {
            a = a.X;
            if (G().top == a.source) {
                var b;
                a: {
                    a = a.data;
                    var c = "data";
                    try {
                        if (0 == a.lastIndexOf(c, 0)) {
                            var d = a.substring(c.length),
                                e = new mb;
                            0 < d.length && ea(e, gb(d));
                            b = e;
                            break a
                        }
                    } catch (f) {}
                    b = null
                }
                null != b && (nb = b)
            }
        },
        rb = function() {
            if (!Ea()) {
                var a = G().frames;
                (a = a.length && a.google_video_inner_static_iframe) || pb();
                L(G(), "message", qb);
                v("ima.video.client.getLastSnapshotFromTop", function() {
                    return nb
                });
                G().top.postMessage && G().top.postMessage("get",
                    "*")
            }
        };
    var O = function() {
        Ka.call(this);
        this.j = new K(this);
        this.ka = this;
        this.ha = null
    };
    z(O, Ka);
    var sb = O;
    sb.prototype[J] = !0;
    O.prototype.addEventListener = function(a, b, c, d) {
        L(this, a, b, c, d)
    };
    O.prototype.removeEventListener = function(a, b, c, d) {
        Za(this, a, b, c, d)
    };
    O.prototype.dispatchEvent = function(a) {
        var b, c = this.ha;
        if (c) {
            b = [];
            for (var d = 1; c; c = c.ha) b.push(c), ++d
        }
        c = this.ka;
        d = a.type || a;
        if (q(a)) a = new H(a, c);
        else if (a instanceof H) a.target = a.target || c;
        else {
            var e = a;
            a = new H(d, c);
            ea(a, e)
        }
        var e = !0,
            f;
        if (b)
            for (var g = b.length - 1; !a.w && 0 <= g; g--) f = a.currentTarget = b[g], e = P(f, d, !0, a) && e;
        a.w || (f = a.currentTarget = c, e = P(f, d, !0, a) && e, a.w || (e = P(f, d, !1, a) && e));
        if (b)
            for (g = 0; !a.w && g < b.length; g++) f = a.currentTarget = b[g], e = P(f, d, !1, a) && e;
        return c = e
    };
    var P = function(a, b, c, d) {
        b = a.j.b[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.A && g.capture == c) {
                var h = g.listener,
                    l = g.G || g.src;
                g.D && Pa(a.j, g);
                e = !1 !== h.call(l, d) && e
            }
        }
        return e && 0 != d.ia
    };
    O.prototype.Z = function(a, b, c, d) {
        return this.j.Z(String(a), b, c, d)
    };
    var Q = function(a, b, c) {
        this.xa = c;
        this.oa = a;
        this.Fa = b;
        this.K = 0;
        this.H = null
    };
    Q.prototype.get = function() {
        var a;
        0 < this.K ? (this.K--, a = this.H, this.H = a.next, a.next = null) : a = this.oa();
        return a
    };
    Q.prototype.put = function(a) {
        this.Fa(a);
        this.K < this.xa && (this.K++, a.next = this.H, this.H = a)
    };
    var tb = function(a) {
        return a
    };
    var ub = function(a) {
            m.setTimeout(function() {
                throw a;
            }, 0)
        },
        vb, wb = function() {
            var a = m.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !B("Presto") && (a = function() {
                var a = document.createElement("IFRAME");
                a.style.display = "none";
                a.src = "";
                document.documentElement.appendChild(a);
                var b = a.contentWindow,
                    a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                    a = t(function(a) {
                        if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
                    }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && !B("Trident") && !B("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (n(c.next)) {
                        c = c.next;
                        var a = c.ba;
                        c.ba = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        ba: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
                function(a) {
                    var b = document.createElement("SCRIPT");
                    b.onreadystatechange = function() {
                        b.onreadystatechange = null;
                        b.parentNode.removeChild(b);
                        b = null;
                        a();
                        a = null
                    };
                    document.documentElement.appendChild(b)
                } : function(a) {
                    m.setTimeout(a, 0)
                }
        },
        xb = tb;
    Ha(function(a) {
        xb = a
    });
    var yb = function() {
            this.U = this.B = null
        },
        Ab = new Q(function() {
            return new zb
        }, function(a) {
            a.reset()
        }, 100);
    yb.prototype.add = function(a, b) {
        var c = Ab.get();
        c.set(a, b);
        this.U ? this.U.next = c : this.B = c;
        this.U = c
    };
    yb.prototype.remove = function() {
        var a = null;
        this.B && (a = this.B, this.B = this.B.next, this.B || (this.U = null), a.next = null);
        return a
    };
    var zb = function() {
        this.next = this.scope = this.Y = null
    };
    zb.prototype.set = function(a, b) {
        this.Y = a;
        this.scope = b;
        this.next = null
    };
    zb.prototype.reset = function() {
        this.next = this.scope = this.Y = null
    };
    var Eb = function(a, b) {
            R || Bb();
            Cb || (R(), Cb = !0);
            Db.add(a, b)
        },
        R, Bb = function() {
            if (-1 != String(m.Promise).indexOf("[native code]")) {
                var a = m.Promise.resolve(void 0);
                R = function() {
                    a.then(Fb)
                }
            } else R = function() {
                var a, c, d = Fb,
                    e = d;
                a && (e = t(d, a));
                e = xb(e);
                !r(m.setImmediate) || !c && m.Window && m.Window.prototype && !B("Edge") && m.Window.prototype.setImmediate == m.setImmediate ? (vb || (vb = wb()), vb(e)) : m.setImmediate(e)
            }
        },
        Cb = !1,
        Db = new yb,
        Fb = function() {
            for (var a; a = Db.remove();) {
                try {
                    a.Y.call(a.scope)
                } catch (b) {
                    ub(b)
                }
                Ab.put(a)
            }
            Cb = !1
        };
    var Gb = function() {
        this.next = this.context = this.ga = this.fa = this.na = null;
        this.la = !1
    };
    Gb.prototype.reset = function() {
        this.context = this.ga = this.fa = this.na = null;
        this.la = !1
    };
    var Hb = new Q(function() {
            return new Gb
        }, function(a) {
            a.reset()
        }, 100),
        Ib = function(a, b, c) {
            var d = Hb.get();
            d.fa = a;
            d.ga = b;
            d.context = c;
            return d
        },
        Kb = function(a, b) {
            a.ma || 2 != a.O && 3 != a.O || Jb(a);
            a.aa ? a.aa.next = b : a.ma = b;
            a.aa = b
        },
        Nb = function(a, b, c) {
            if (0 == a.O) {
                a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.O = 1;
                var d;
                a: {
                    var e = c,
                        f = a.Pa,
                        g = a.Qa,
                        h = a,
                        l;
                    if (e) try {
                        l = !!e.$goog_Thenable
                    } catch (ob) {
                        l = !1
                    } else l = !1;
                    if (l) e.then(f, g, h),
                    d = !0;
                    else {
                        l = typeof e;
                        if (l = "object" == l && null != e || "function" == l) try {
                            var w = e.then;
                            if (r(w)) {
                                Lb(e, w, f, g, h);
                                d = !0;
                                break a
                            }
                        } catch (ob) {
                            g.call(h, ob);
                            d = !0;
                            break a
                        }
                        d = !1
                    }
                }
                d || (a.Oa = c, a.O = b, a.Na = null, Jb(a), 3 != b || Mb(a, c))
            }
        },
        Lb = function(a, b, c, d, e) {
            var f = !1,
                g = function(a) {
                    f || (f = !0, c.call(e, a))
                },
                h = function(a) {
                    f || (f = !0, d.call(e, a))
                };
            try {
                b.call(a, g, h)
            } catch (l) {
                h(l)
            }
        },
        Jb = function(a) {
            a.pa || (a.pa = !0, Eb(a.Ka, a))
        },
        Mb = function(a, b) {
            a.wa = !0;
            Eb(function() {
                a.wa && Ob.call(null, b)
            })
        },
        Ob = ub;
    var S = function(a, b) {
        O.call(this);
        this.I = a || 1;
        this.R = b || m;
        this.V = t(this.Ha, this);
        this.$ = u()
    };
    z(S, O);
    S.prototype.enabled = !1;
    S.prototype.o = null;
    S.prototype.Ha = function() {
        if (this.enabled) {
            var a = u() - this.$;
            0 < a && a < .8 * this.I ? this.o = this.R.setTimeout(this.V, this.I - a) : (this.o && (this.R.clearTimeout(this.o), this.o = null), this.dispatchEvent("tick"), this.enabled && (this.o = this.R.setTimeout(this.V, this.I), this.$ = u()))
        }
    };
    S.prototype.start = function() {
        this.enabled = !0;
        this.o || (this.o = this.R.setTimeout(this.V, this.I), this.$ = u())
    };
    var Qb = function(a, b, c) {
            this.h = c;
            this.J = null;
            this.F = 0;
            this.ya = 500;
            this.P = null;
            Pb(this, a, b);
            c = document.documentElement;
            var d;
            try {
                if (Ea()) {
                    var e;
                    b = [];
                    var f = G(c.ownerDocument);
                    for (c = f; c != f.top; c = c.parent)
                        if (c.frameElement) b.push(c.frameElement);
                        else break;
                    d = (e = b) && 0 != e.length ? "1" : "0"
                } else d = "2"
            } catch (h) {
                d = "2"
            }
            try {
                if ("1" == d) {
                    for (var g = a.parent; g != a.top; g = g.parent) Pb(this, g, g.document);
                    Pb(this, a.top, a.top.document)
                }
            } catch (h) {}
        },
        Pb = function(a, b, c) {
            L(c, "mousedown", t(a.Aa, a));
            L(b, "scroll", t(a.Da, a));
            L(c, "touchstart",
                t(a.Ea, a));
            L(c, "mousemove", t(a.Ca, a))
        };
    k = Qb.prototype;
    k.Ea = function() {
        this.h && this.h("t")
    };
    k.Aa = function() {
        this.h && this.h("c")
    };
    k.Da = function() {
        this.h && this.h("s")
    };
    k.Ca = function(a) {
        if (null != a.clientX && null != a.clientY) {
            a = new ma(a.clientX, a.clientY);
            if (this.J) {
                var b, c = this.J;
                b = c.x - a.x;
                c = c.y - a.y;
                b = Math.sqrt(b * b + c * c);
                this.F += Math.round(b)
            }
            this.J = a
        }
        this.P && m.clearTimeout(this.P);
        a = this.Ba;
        b = this.ya;
        if (r(a)) this && (a = t(a, this));
        else if (a && "function" == typeof a.handleEvent) a = t(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        this.P = a = 2147483647 < Number(b) ? -1 : m.setTimeout(a, b || 0)
    };
    k.Ba = function() {
        this.h && this.h("m", this.F);
        this.J = this.P = null;
        this.F = 0
    };
    var Rb = 0,
        Sb = -1,
        Tb = function(a, b) {
            b = "number" == typeof b ? b : 1;
            var c = null !== fa && a in fa,
                d = (a = "m" == a) && 100 <= b;
            (b = c && (d || !a) && 0 < b) && (Sb = N())
        },
        Ub = function() {
            Rb = N();
            new Qb(G(), document, Tb)
        },
        Vb = function(a, b) {
            a && (N = a);
            b && (eb = b)
        };
    var x = function(a, b) {
        this.l = Rb;
        this.i = a;
        this.f = Math.max(Sb, b, a)
    };
    k = x.prototype;
    k.va = function() {
        return this.l
    };
    k.ua = function() {
        return this.i
    };
    k.sa = function() {
        return this.f
    };
    k.qa = function(a, b, c) {
        a && (this.l = Math.min(this.l, a));
        this.i = Math.max(this.i, b);
        this.f = Math.max(this.f, c)
    };
    k.C = function() {
        var a = [];
        null != this.l && a.push("tt" + (N() - this.l));
        null != this.i && a.push("pd" + (N() - this.i));
        null != this.f && -1 < this.f ? a.push("la" + 1E3 * (N() - this.f)) : a.push("la-1");
        return a.join("_")
    };
    k.ea = function() {
        return N() - this.l
    };
    k.ta = function() {
        return null != this.i ? N() - this.i : this.ea()
    };
    k.ra = function() {
        return {}
    };
    y("getTagLoadTimestamp", x.prototype.va);
    y("getPlaylistTimestamp", x.prototype.ua);
    y("getLastActivityTimestamp", x.prototype.sa);
    y("extendWithDataFromTopIframe", x.prototype.qa);
    y("serialize", x.prototype.C);
    y("getTimeSinceTagLoadSeconds", x.prototype.ea);
    y("getPlaylistTimeDiff", x.prototype.ta);
    y("getBuckets", x.prototype.ra);
    var Wb = B("Safari") && !((B("Chrome") || B("CriOS")) && !B("Edge") || B("Coast") || B("Opera") || B("Edge") || B("Silk") || B("Android")) && !(B("iPhone") && !B("iPod") && !B("iPad") || B("iPad") || B("iPod"));
    var T = null,
        U = null,
        Xb = null,
        Yb = D || E && !Wb || qa,
        Zb = Yb || "function" == typeof m.btoa,
        $b = Yb || !Wb && !C && "function" == typeof m.atob,
        bc = function(a, b) {
            ac();
            b = b ? Xb : T;
            for (var c = [], d = 0; d < a.length; d += 3) {
                var e = a[d],
                    f = d + 1 < a.length,
                    g = f ? a[d + 1] : 0,
                    h = d + 2 < a.length,
                    l = h ? a[d + 2] : 0,
                    w = e >> 2,
                    e = (e & 3) << 4 | g >> 4,
                    g = (g & 15) << 2 | l >> 6,
                    l = l & 63;
                h || (l = 64, f || (g = 64));
                c.push(b[w], b[e], b[g], b[l])
            }
            return c.join("")
        },
        dc = function(a) {
            var b = !0;

            function c(a) {
                d += String.fromCharCode(a)
            }
            if ($b && !b) return m.atob(a);
            var d = "";
            cc(a, c);
            return d
        },
        cc = function(a, b) {
            function c(b) {
                for (; d <
                    a.length;) {
                    var c = a.charAt(d++),
                        e = U[c];
                    if (null != e) return e;
                    if (!/^[\s\xa0]*$/.test(c)) throw Error("Unknown base64 encoding at char: " + c);
                }
                return b
            }
            ac();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                e = e << 2 | f >> 4;
                b(e);
                64 != g && (f = f << 4 & 240 | g >> 2, b(f), 64 != h && (g = g << 6 & 192 | h, b(g)))
            }
        },
        ac = function() {
            if (!T) {
                T = {};
                U = {};
                Xb = {};
                for (var a = 0; 65 > a; a++) T[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), U[T[a]] = a, Xb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),
                    62 <= a && (U["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a)
            }
        };
    var ec = function() {
        this.g = -1
    };
    var V = function() {
        this.g = 64;
        this.a = [];
        this.W = [];
        this.ja = [];
        this.L = [];
        this.L[0] = 128;
        for (var a = 1; a < this.g; ++a) this.L[a] = 0;
        this.S = this.v = 0;
        this.reset()
    };
    z(V, ec);
    V.prototype.reset = function() {
        this.a[0] = 1732584193;
        this.a[1] = 4023233417;
        this.a[2] = 2562383102;
        this.a[3] = 271733878;
        this.a[4] = 3285377520;
        this.S = this.v = 0
    };
    var W = function(a, b, c) {
        c || (c = 0);
        var d = a.ja;
        if (q(b))
            for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else
            for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.a[0];
        c = a.a[1];
        for (var g = a.a[2], h = a.a[3], l = a.a[4], w, e = 0; 80 > e; e++) 40 > e ? 20 > e ? (f = h ^ c & (g ^ h), w = 1518500249) : (f = c ^ g ^ h, w = 1859775393) : 60 > e ? (f = c & g | h & (c | g), w = 2400959708) : (f = c ^ g ^ h, w = 3395469782),
            f = (b << 5 | b >>> 27) + f + l + w + d[e] & 4294967295, l = h, h = g, g = (c << 30 | c >>> 2) & 4294967295, c = b, b = f;
        a.a[0] = a.a[0] + b & 4294967295;
        a.a[1] = a.a[1] + c & 4294967295;
        a.a[2] = a.a[2] + g & 4294967295;
        a.a[3] = a.a[3] + h & 4294967295;
        a.a[4] = a.a[4] + l & 4294967295
    };
    V.prototype.update = function(a, b) {
        if (null != a) {
            n(b) || (b = a.length);
            for (var c = b - this.g, d = 0, e = this.W, f = this.v; d < b;) {
                if (0 == f)
                    for (; d <= c;) W(this, a, d), d += this.g;
                if (q(a))
                    for (; d < b;) {
                        if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.g) {
                            W(this, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.g) {
                                W(this, e);
                                f = 0;
                                break
                            }
            }
            this.v = f;
            this.S += b
        }
    };
    V.prototype.digest = function() {
        var a = [],
            b = 8 * this.S;
        56 > this.v ? this.update(this.L, 56 - this.v) : this.update(this.L, this.g - (this.v - 56));
        for (var c = this.g - 1; 56 <= c; c--) this.W[c] = b & 255, b /= 256;
        W(this, this.W);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8) a[b] = this.a[c] >> d & 255, ++b;
        return a
    };
    var X = function(a) {
            this.da = a || {
                cookie: ""
            }
        },
        fc = /\s*;\s*/;
    X.prototype.isEnabled = function() {
        return navigator.cookieEnabled
    };
    X.prototype.set = function(a, b, c, d, e, f) {
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        n(c) || (c = -1);
        e = e ? ";domain=" + e : "";
        d = d ? ";path=" + d : "";
        f = f ? ";secure" : "";
        0 > c ? c = "" : (c = 0 == c ? new Date(1970, 1, 1) : new Date(u() + 1E3 * c), c = ";expires=" + c.toUTCString());
        this.da.cookie = a + "=" + b + e + d + c + f
    };
    X.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.da.cookie || "").split(fc), e = 0, f; f = d[e]; e++) {
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    X.prototype.remove = function(a, b, c) {
        var d = n(this.get(a));
        this.set(a, "", 0, b, c);
        return d
    };
    var Y = new X("undefined" == typeof document ? null : document);
    Y.Ia = 3950;
    var gc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    var Z = null,
        hc = null,
        ic = function(a, b, c, d, e) {
            this.u = b;
            this.tsl = a;
            this.nv = c;
            this.upt = d;
            this.lt = e
        },
        jc = function(a) {
            a = a.split("#")[0];
            var b = new V;
            b.update(a);
            a = b.digest();
            return bc(a).slice(0, 4)
        },
        lc = function() {
            var a = kc(),
                b;
            var c = kc();
            c && c.tsl ? (b = eb().unloadEventStart, N(), c = c.tsl, b = b && c >= b ? !0 : 8 >= hc - c) : b = !1;
            a: {
                c = jc(document.URL);
                if (Z)
                    for (var d = 0; d < Z.length; d++)
                        if (Z[d].u == c) {
                            c = !0;
                            break a
                        }
                c = !1
            }
            d = kc();
            d = !!d && 0 < d.nv;
            (b = b && !c && !d) && a && a.upt ? a = a.upt : (a = Rb, b = eb().domLoading, a = null != b ? b : null != a ? a : N());
            return a
        },
        mc =
        function() {
            var a = null;
            if (Y.isEnabled() && n(Y.get("GED_PLAYLIST_ACTIVITY"))) {
                var b = Y.get("GED_PLAYLIST_ACTIVITY");
                if (b) try {
                    b = dc(b), a = gb(b)
                } catch (c) {}
            }
            return a
        },
        kc = function() {
            if (Z)
                for (var a = jc(document.referrer), b = 0; b < Z.length; b++)
                    if (Z[b].u == a) return Z[b];
            return null
        },
        nc = function() {
            if (Y.isEnabled()) {
                var a = lc(),
                    b = new x(a, -1),
                    c;
                c = b;
                c = 5 > N() - c.f;
                var b = b.f,
                    d = N(),
                    e = jc(document.URL),
                    a = new ic(d, e, c ? 1 : 0, a, b);
                c = mc();
                b = [];
                if (c) {
                    b = c.length;
                    if (0 < b) {
                        d = Array(b);
                        for (e = 0; e < b; e++) d[e] = c[e];
                        c = d
                    } else c = [];
                    b = document.URL;
                    b = jc(b);
                    d = N();
                    for (e = 0; e < c.length; e++)
                        if (c[e].u == b || 600 <= d - c[e].tsl) c.splice(e, 1), e--;
                    b = c
                }
                a && b.unshift(a);
                var b = b.slice(0, 3),
                    f, a = f = (new hb(f)).C(b);
                f = !0;
                if (Zb && !f) f = m.btoa(a);
                else {
                    c = [];
                    for (d = b = 0; d < a.length; d++) {
                        for (e = a.charCodeAt(d); 255 < e;) c[b++] = e & 255, e >>= 8;
                        c[b++] = e
                    }
                    a = c;
                    f = bc(a, f)
                }
                a = document.URL;
                c = 1;
                a = a.match(gc)[c] || null;
                a = "http" == a;
                Y.set("GED_PLAYLIST_ACTIVITY", f, -1, "/", null, !a)
            }
        };
    var oc = function() {
        function a() {
            try {
                nc()
            } catch (c) {}
        }
        if (!(window.ima && window.ima.video && window.ima.video.client && window.ima.video.client.tagged)) {
            Ub();
            Ya(G(), "unload", a);
            try {
                hc || (hc = N(), Z = mc())
            } catch (c) {}
            v("ima.video.client.getEData", function() {
                var a = lc(),
                    b;
                a: {
                    if (Z)
                        for (b = 0; b < Z.length; b++) {
                            var e;
                            e = Z[b];
                            if (e = null !== e && "lt" in e) {
                                b = Z[b].lt;
                                break a
                            }
                        }
                    b = -1
                }
                return new x(a, b)
            });
            var b = new S(1E3);
            b.start();
            L(b, "tick", function() {
                try {
                    nc()
                } catch (c) {}
            });
            v("ima.video.client.setupEDHooks", Ub);
            v("ima.video.client.resetEDForTesting",
                Vb);
            v("ima.video.client.tagged", !0)
        }
    };
    v("ima.video.client.jsTag", !0);
    rb();
    oc();
}).call(this);