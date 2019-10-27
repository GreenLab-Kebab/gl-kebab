var k = this || self,
    w = function(a, b) {
        a = a.split(".");
        var c = k;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var e; a.length && (e = a.shift());) a.length || void 0 === b ? c = c[e] && c[e] !== Object.prototype[e] ? c[e] : c[e] = {} : c[e] = b
    },
    x = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
var y = function(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, y);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
x(y, Error);
y.prototype.name = "CustomError";
var z = function(a, b) {
    a = a.split("%s");
    for (var c = "", e = a.length - 1, d = 0; d < e; d++) c += a[d] + (d < b.length ? b[d] : "%s");
    y.call(this, c + a[e])
};
x(z, y);
z.prototype.name = "AssertionError";
var A = function(a, b, c) {
    if (!a) {
        var e = "Assertion failed";
        if (b) {
            e += ": " + b;
            var d = Array.prototype.slice.call(arguments, 2)
        }
        throw new z("" + e, d || []);
    }
    return a
};
var aa = Array.prototype.forEach ? function(a, b) {
    A(null != a.length);
    Array.prototype.forEach.call(a, b, void 0)
} : function(a, b) {
    for (var c = a.length, e = "string" === typeof a ? a.split("") : a, d = 0; d < c; d++) d in e && b.call(void 0, e[d], d, a)
};
var C;
a: {
    var D = k.navigator;
    if (D) {
        var E = D.userAgent;
        if (E) {
            C = E;
            break a
        }
    }
    C = ""
}
var G = function(a) {
    return -1 != C.indexOf(a)
};
var H = function() {
    this.s = ""
};
H.prototype.toString = function() {
    return "SafeScript{" + this.s + "}"
};
H.prototype.a = function(a) {
    this.s = a
};
(new H).a("");
var I = function() {
    this.v = ""
};
I.prototype.toString = function() {
    return "SafeStyle{" + this.v + "}"
};
I.prototype.a = function(a) {
    this.v = a
};
(new I).a("");
var J = function() {
    this.u = ""
};
J.prototype.toString = function() {
    return "SafeStyleSheet{" + this.u + "}"
};
J.prototype.a = function(a) {
    this.u = a
};
(new J).a("");
var K = function() {
    this.o = ""
};
K.prototype.toString = function() {
    return "SafeHtml{" + this.o + "}"
};
K.prototype.a = function(a) {
    this.o = a
};
(new K).a("<!DOCTYPE html>");
(new K).a("");
(new K).a("<br>");
var ba = -1 != C.toLowerCase().indexOf("webkit") && !G("Edge") && G("Mobile");
try {
    (new self.OffscreenCanvas(0, 0)).getContext("2d")
} catch (a) {};
var ca = G("Safari") && !((G("Chrome") || G("CriOS")) && !G("Edge") || G("Coast") || G("Opera") || G("Edge") || G("Edg/") || G("OPR") || G("Firefox") || G("FxiOS") || G("Silk") || G("Android")) && !(G("iPhone") && !G("iPod") && !G("iPad") || G("iPad") || G("iPod"));
var N = function(a) {
        var b = window;
        if (ba && ca && b) {
            b.focus();
            var c = 0,
                e = null;
            e = b.setInterval(function() {
                a.closed || 5 == c ? (b.clearInterval(e), L(a)) : (a.close(), c++)
            }, 150)
        } else a.close(), L(a)
    },
    L = function(a) {
        if (!a.closed && a.document && a.document.body)
            if (a = a.document.body, A(null != a, "goog.dom.setTextContent expects a non-null value for node"), "textContent" in a) a.textContent = "Please close this window.";
            else if (3 == a.nodeType) a.data = "Please close this window.";
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild !=
                a.firstChild;) a.removeChild(A(a.lastChild));
            a.firstChild.data = "Please close this window."
        } else {
            for (var b; b = a.firstChild;) a.removeChild(b);
            A(a, "Node cannot be null or undefined.");
            a.appendChild((9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode("Please close this window."))
        }
    };
var da = function(a) {
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
    var e = b.indexOf(":");
    if (-1 != e) {
        var d =
            b.substring(e + 1);
        b = b.substring(0, e);
        if ("http" === a && "80" !== d || "https" === a && "443" !== d) c = ":" + d
    }
    return a + "://" + b + c
};
var ea = function() {
    function a() {
        d[0] = 1732584193;
        d[1] = 4023233417;
        d[2] = 2562383102;
        d[3] = 271733878;
        d[4] = 3285377520;
        r = n = 0
    }

    function b(g) {
        for (var h = t, f = 0; 64 > f; f += 4) h[f / 4] = g[f] << 24 | g[f + 1] << 16 | g[f + 2] << 8 | g[f + 3];
        for (f = 16; 80 > f; f++) g = h[f - 3] ^ h[f - 8] ^ h[f - 14] ^ h[f - 16], h[f] = (g << 1 | g >>> 31) & 4294967295;
        g = d[0];
        var l = d[1],
            p = d[2],
            q = d[3],
            M = d[4];
        for (f = 0; 80 > f; f++) {
            if (40 > f)
                if (20 > f) {
                    var u = q ^ l & (p ^ q);
                    var F = 1518500249
                } else u = l ^ p ^ q, F = 1859775393;
            else 60 > f ? (u = l & p | q & (l | p), F = 2400959708) : (u = l ^ p ^ q, F = 3395469782);
            u = ((g << 5 | g >>> 27) & 4294967295) +
                u + M + F + h[f] & 4294967295;
            M = q;
            q = p;
            p = (l << 30 | l >>> 2) & 4294967295;
            l = g;
            g = u
        }
        d[0] = d[0] + g & 4294967295;
        d[1] = d[1] + l & 4294967295;
        d[2] = d[2] + p & 4294967295;
        d[3] = d[3] + q & 4294967295;
        d[4] = d[4] + M & 4294967295
    }

    function c(g, h) {
        if ("string" === typeof g) {
            g = unescape(encodeURIComponent(g));
            for (var f = [], l = 0, p = g.length; l < p; ++l) f.push(g.charCodeAt(l));
            g = f
        }
        h || (h = g.length);
        f = 0;
        if (0 == n)
            for (; f + 64 < h;) b(g.slice(f, f + 64)), f += 64, r += 64;
        for (; f < h;)
            if (m[n++] = g[f++], r++, 64 == n)
                for (n = 0, b(m); f + 64 < h;) b(g.slice(f, f + 64)), f += 64, r += 64
    }

    function e() {
        var g = [],
            h = 8 * r;
        56 > n ? c(v, 56 - n) : c(v, 64 - (n - 56));
        for (var f = 63; 56 <= f; f--) m[f] = h & 255, h >>>= 8;
        b(m);
        for (f = h = 0; 5 > f; f++)
            for (var l = 24; 0 <= l; l -= 8) g[h++] = d[f] >> l & 255;
        return g
    }
    for (var d = [], m = [], t = [], v = [128], B = 1; 64 > B; ++B) v[B] = 0;
    var n, r;
    a();
    return {
        reset: a,
        update: c,
        digest: e,
        digestString: function() {
            for (var g = e(), h = "", f = 0; f < g.length; f++) h += "0123456789ABCDEF".charAt(Math.floor(g[f] / 16)) + "0123456789ABCDEF".charAt(g[f] % 16);
            return h
        }
    }
};
var fa = function(a, b, c) {
        var e = [];
        e = [b, a];
        aa(c, function(d) {
            e.push(d)
        });
        return O(e.join(" "))
    },
    O = function(a) {
        var b = ea();
        b.update(a);
        return b.digestString().toLowerCase()
    };
var P = function(a) {
        var b = a || [];
        a = [];
        for (var c = 0, e = b.length; c < e; ++c) {
            var d = String(b[c] || "");
            d && a.push(d)
        }
        if (2 > a.length) return null;
        b = a[0];
        c = gadgets.rpc.getOrigin(a[1]);
        if (c !== a[1]) return null;
        a = a.slice(2);
        return (a = (c && b ? ["session_state", fa(da(c), b, a || [])].join(" ") : null) || "") && a.substr(14) || null
    },
    Q = function(a, b, c) {
        this.j = String(a || "");
        this.g = String(b || "");
        this.b = String(c || "");
        this.c = {};
        this.l = this.m = this.h = this.i = "";
        this.f = null
    };
Q.prototype.evaluate = function() {
    var a = {},
        b = "";
    try {
        b = String(document.cookie || "")
    } catch (t) {}
    b = b.split("; ").join(";").split(";");
    for (var c = 0, e = b.length; c < e; ++c) {
        var d = b[c],
            m = d.indexOf("="); - 1 != m ? a[d.substr(0, m)] = d.substr(m + 1) : a[d] = null
    }
    this.c = a;
    if (this.c.SID)
        if (this.g = this.g.split(".")[0].split("@")[0], this.h = String(this.c[0 == this.j.indexOf("https://") ? "SAPISID" : "APISID"] || ""))
            if (a = 0 == gadgets.rpc.getOrigin(String(window.location.href)).indexOf("https://") ? "SAPISID" : "APISID", this.i = String(this.c[a] ||
                    "")) {
                b = String(this.c.LSOLH || "").split(":");
                c = b.length;
                if (1 == c || 4 == c) this.m = b[0];
                if (3 == c || 4 == c) a = String(b[c - 3] || ""), b = String(b[c - 1] || ""), c = this.i, a ? (e = [a], c && e.push(c), c = O(e.join(" ")).substr(0, 4)) : c = null, c === b && (this.l = a);
                this.b && (a = this.b.indexOf("."), -1 != a && (a = this.b.substr(0, a) || "", this.b = a + "." + P([this.h, this.j, this.g, this.m, this.l, a]).substr(0, 4)));
                a = P([this.h, this.j, this.g, this.b]);
                this.b && (a = a + "." + this.b);
                this.f = a
            } else this.f = "";
    else this.f = ""
};
Q.prototype.getVersionInfo = function(a) {
    var b = parseInt(a, 10);
    if (String(b) != a || !(0 <= b)) return null;
    a = this.l;
    if (!a) return null;
    a = a.split("|");
    return a.length <= b ? null : a[b] || null
};
var R = function(a, b, c) {
        a = new Q(a, b, c);
        a.evaluate();
        return a
    },
    S = function(a, b, c) {
        c = c || ha(this);
        var e = null;
        if (a) {
            a = String(a);
            var d = a.indexOf("."); - 1 != d && (e = a.substr(d + 1))
        }
        b = R(c, b, e).f;
        if (null == a || "" == a) a = b == a;
        else if (null == b || b.length != a.length) a = !1;
        else {
            e = c = 0;
            for (d = a.length; e < d; ++e) c |= a.charCodeAt(e) ^ b.charCodeAt(e);
            a = 0 == c
        }
        return a
    },
    T = function(a, b, c) {
        c = c || ha(this);
        c = R(c);
        if (String(a) != c.f) throw Error("Unauthorized request");
        return c.getVersionInfo(String(b))
    },
    ha = function(a) {
        a = String(a.origin || "");
        if (!a) throw Error("RPC has no origin.");
        return a
    };
w("checkSessionState", S);
w("getVersionInfo", T);
var U, V, W, X, Y, Z, ia = window,
    ja = (window.location.href || ia.location.href).match(/.*(\?|#|&)usegapi=([^&#]+)/) || [];
"1" === decodeURIComponent(ja[ja.length - 1] || "") ? (W = function(a, b, c, e, d, m) {
    U.send(b, d, e, m || gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
}, X = function(a, b) {
    U.register(a, b, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
}, Y = function(a) {
    var b = /^(?:https?:\/\/)?[0-9.\-A-Za-z]+(?::\d+)?/.exec(a);
    b = gapi.iframes.makeWhiteListIframesFilter([b ? b[0] : null]);
    W("..", "oauth2callback", gadgets.rpc.getAuthToken(".."), void 0, a, b)
}, V = function() {
    ka()
}, Z = function() {
    W("..", "oauth2relayReady", gadgets.rpc.getAuthToken(".."));
    X("check_session_state",
        la);
    X("get_versioninfo", ma)
}) : (W = function(a, b, c, e, d) {
    gadgets.rpc.call(a, b + ":" + c, e, d)
}, X = function(a, b) {
    gadgets.rpc.register(a, b)
}, Y = function(a) {
    gadgets.rpc.getTargetOrigin("..") == gadgets.rpc.getOrigin(a) && W("..", "oauth2callback", gadgets.rpc.getAuthToken(".."), void 0, a)
}, V = function() {
    Z()
}, Z = function() {
    W("..", "oauth2relayReady", gadgets.rpc.getAuthToken(".."));
    X("check_session_state", S);
    X("get_versioninfo", T)
});
var ka = function() {
        var a = Z;
        window.gapi.load("gapi.iframes", function() {
            U = gapi.iframes.getContext().getParentIframe();
            a()
        })
    },
    na = function(a) {
        window.setTimeout(function() {
            Y(a)
        }, 1)
    },
    la = function(a) {
        if (a) {
            var b = a.session_state;
            var c = a.client_id
        }
        return S(b, c, U.getOrigin())
    },
    ma = function(a) {
        return T(a.xapisidHash, a.sessionIndex, U.getOrigin())
    },
    oa = !1,
    pa = !1,
    qa = function() {
        pa = !0;
        oa && V()
    };
w("oauth2callback", na);
w("oauth2verify", function(a, b) {
    var c = window.open("about:blank", a),
        e;
    if (c && !c.closed && (e = c.oauth2callbackUrl)) return window.timeoutMap = window.timeoutMap || {}, window.realSetTimeout = window.realSetTimeout || window.setTimeout, window.setTimeout = function(d, m) {
        try {
            var t = d,
                v = !1;
            d = function() {
                if (!v) {
                    v = !0;
                    try {
                        window.timeoutMap[String(n)] = void 0, delete window.timeoutMap[String(n)]
                    } catch (r) {}
                    return t.call(this)
                }
            };
            var B = c.setTimeout(d, m);
            var n = window.realSetTimeout(d, m);
            window.timeoutMap[String(n)] = B;
            return n
        } catch (r) {}
        return window.realSetTimeout(d,
            m)
    }, window.realClearTimeout = window.realClearTimeout || window.clearTimeout, window.clearTimeout = function(d) {
        try {
            var m = window.timeoutMap[String(d)];
            m && c.clearTimeout(m)
        } catch (t) {}
        try {
            window.timeoutMap[String(d)] = void 0, delete window.timeoutMap[String(d)]
        } catch (t) {}
        window.realClearTimeout(d)
    }, na(String(e)), "keep_open" != b && N(c), !0;
    c && !c.closed && N(c);
    return !1
});
w("init", function() {
    oa = !0;
    pa && V()
});
window.addEventListener ? window.addEventListener("load", qa, !1) : window.attachEvent("onload", qa);