! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("wafer", [], t) : "object" == typeof exports ? exports.wafer = t() : e.wafer = t()
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "https://s.yimg.com/aaq/wf/", t(t.s = "./src/entry.js")
    }({
        "./src/entry.js": function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function s(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }

            function c(e) {
                return Array.isArray(e) ? e : Array.from(e)
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function v(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var h = {};
            n.d(h, "localStorage", function() {
                return y
            }), n.d(h, "visibilityMeta", function() {
                return w
            }), n.d(h, "transformProperty", function() {
                return p
            }), n.d(h, "mutationObserver", function() {
                return g
            }), n.d(h, "nativeLazyLoadingSupported", function() {
                return b
            });
            var m = {};
            n.d(m, "isVisible", function() {
                return H
            }), n.d(m, "debounce", function() {
                return U
            }), n.d(m, "elementInView", function() {
                return Y
            }), n.d(m, "throttle", function() {
                return F
            }), n.d(m, "bindEvent", function() {
                return X
            }), n.d(m, "unbindEvent", function() {
                return J
            }), n.d(m, "get", function() {
                return K
            }), n.d(m, "loadScriptAsync", function() {
                return q
            }), n.d(m, "loadCSSSync", function() {
                return $
            }), n.d(m, "each", function() {
                return G
            }), n.d(m, "findAncestor", function() {
                return Q
            }), n.d(m, "fireBeacon", function() {
                return Z
            }), n.d(m, "isNodeName", function() {
                return ee
            }), n.d(m, "parseUrl", function() {
                return te
            }), n.d(m, "getElementsByAttrValues", function() {
                return ne
            }), n.d(m, "convertNodeListToArray", function() {
                return re
            }), n.d(m, "getConfigFromJSONScriptNode", function() {
                return ie
            }), n.d(m, "getTemplateNode", function() {
                return oe
            }), n.d(m, "urlify", function() {
                return ae
            }), n.d(m, "fetchWithCache", function() {
                return se
            }), n.d(m, "removeCookie", function() {
                return ce
            }), n.d(m, "setCookie", function() {
                return ue
            }), n.d(m, "getCookie", function() {
                return le
            }), n.d(m, "clearAllTimeout", function() {
                return fe
            }), n.d(m, "clearTimeout", function() {
                return de
            }), n.d(m, "clearTimeoutForInstance", function() {
                return ve
            }), n.d(m, "setTimeout", function() {
                return he
            });
            var y = function() {
                    try {
                        return window.localStorage.setItem("test", "test"), window.localStorage.removeItem("test"), !0
                    } catch (e) {
                        return !1
                    }
                }(),
                w = function() {
                    var e = void 0,
                        t = void 0;
                    return void 0 !== document.hidden ? (e = "hidden", t = "visibilitychange") : void 0 !== document.mozHidden ? (e = "mozHidden", t = "mozvisibilitychange") : void 0 !== document.msHidden ? (e = "msHidden", t = "msvisibilitychange") : void 0 !== document.webkitHidden && (e = "webkitHidden", t = "webkitvisibilitychange"), {
                        hidden: e,
                        visibilityChange: t
                    }
                }(),
                p = function() {
                    return "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform"
                }(),
                g = function() {
                    for (var e = ["WebKit", "Moz", "O", "Ms", ""], t = 0; t < e.length; t++)
                        if (e[t] + "MutationObserver" in window) return !0;
                    return !1
                }(),
                b = function() {
                    return "loading" in HTMLImageElement.prototype
                }(),
                _ = ["rid", "crumb"],
                E = {
                    omit: 1,
                    "same-origin": 1,
                    include: 1
                },
                T = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments[1];
                    return e.replace(new RegExp("[?&]" + t + "=[^&#]*(#.*)?$"), "$1").replace(new RegExp("([?&])" + t + "=[^&]*&"), "$1")
                },
                S = function(e) {
                    return Object.keys(e).map(function(t) {
                        return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                    }).join("&")
                },
                C = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.body,
                        r = t.cache,
                        i = void 0 === r ? 1 : r,
                        o = t.cacheKey,
                        a = t.cacheStrategy,
                        s = void 0 === a ? "networkFirst" : a,
                        c = t.cacheTtl,
                        u = void 0 === c ? 60 : c,
                        l = t.credentials,
                        f = void 0 === l ? "same-origin" : l,
                        d = t.paramsToNotCache,
                        v = void 0 === d ? {} : d,
                        h = t.timeout,
                        m = void 0 === h ? 6e3 : h;
                    return new Promise(function(t, r) {
                        var a = Date.now(),
                            c = S(v),
                            l = c ? e + (-1 === e.indexOf("?") ? "?" : "&") + c : e;
                        o || (o = e, _.forEach(function(e) {
                            o = T(o, e)
                        })), f || E[f] || (f = "same-origin");
                        var d = i,
                            h = "GET",
                            y = !1,
                            w = void 0,
                            p = void 0,
                            g = !1;
                        if (n) try {
                            n = JSON.stringify(JSON.parse(n)), h = "POST", d = !1
                        } catch (e) {
                            n = {}
                        }
                        var b = setTimeout(function() {
                            if (y = !0, w) return void t(Object.assign({}, w, {
                                _fetchMeta: {
                                    duration: Date.now() - a,
                                    source: "CACHE_IS_STALE"
                                }
                            }));
                            r(new Error("Request timed out"))
                        }, m);
                        p = d && window.wafer.db && "cacheFirst" === s ? window.wafer.db.get(o, "fetch", {
                            timeout: 1e3
                        }).then(function(e) {
                            if (e) {
                                var n = e.ttl,
                                    r = e.value,
                                    i = e.cachedTime,
                                    o = (Date.now() - i) / 1e3;
                                try {
                                    w = JSON.parse(r)
                                } catch (e) {}
                                o < n && (clearTimeout(b), y || (g = !0, t(Object.assign({}, w, {
                                    _fetchMeta: {
                                        duration: Date.now() - a,
                                        source: "CACHE"
                                    }
                                }))))
                            }
                        }).catch(function(e) {}) : Promise.resolve(!1), p.then(function() {
                            if (!g) {
                                var e = new Headers;
                                "POST" === h && e.append("Content-Type", "application/json");
                                var i = {
                                    credentials: f,
                                    headers: e,
                                    method: h
                                };
                                n && (i.body = n), fetch(l, i).then(function(e) {
                                    if (clearTimeout(b), !y) {
                                        var n = e.status;
                                        if (200 === n) {
                                            var r = e.headers.get("Content-Type");
                                            if (d && window.wafer.db && u && r && r.match(/application\/json/i)) {
                                                var i = Date.now();
                                                e.clone().text().then(function(e) {
                                                    return window.wafer.db.set({
                                                        ttl: u,
                                                        key: o,
                                                        value: e,
                                                        cachedTime: i
                                                    }, "fetch", {
                                                        timeout: m
                                                    }).catch(function(e) {}), !0
                                                })
                                            }
                                            return e.json().then(function(e) {
                                                t(Object.assign({}, e, {
                                                    _fetchMeta: {
                                                        duration: Date.now() - a,
                                                        source: d ? w ? "NETWORK_AS_CACHE_IS_EXPIRED" : "NETWORK" : "NETWORK_WITHOUT_CACHE"
                                                    }
                                                }))
                                            }).catch(function(e) {
                                                throw new Error("Malformed response")
                                            })
                                        }
                                        throw 204 === n ? (d = !1, w = null, new Error("No Content")) : new Error("Malformed response")
                                    }
                                }).catch(function(e) {
                                    if (!y)
                                        if (clearTimeout(b), w) t(Object.assign({}, w, {
                                            _fetchMeta: {
                                                duration: Date.now() - a,
                                                source: "CACHE_IS_STALE"
                                            }
                                        }));
                                        else if (d) {
                                        if (!window.wafer.db) return void r(e);
                                        window.wafer.db.get(o, "fetch", {
                                            timeout: m
                                        }).then(function(n) {
                                            if (!n) return void r(e);
                                            var i = n.ttl,
                                                o = n.value,
                                                s = n.cachedTime,
                                                c = (Date.now() - s) / 1e3;
                                            try {
                                                w = JSON.parse(o)
                                            } catch (e) {}
                                            t(Object.assign({}, w, {
                                                _fetchMeta: {
                                                    duration: Date.now() - a,
                                                    source: c < i ? "CACHE_SECOND_ATTEMPT" : "CACHE_SECOND_ATTEMPT_STALE"
                                                }
                                            }))
                                        }).catch(function(e) {
                                            r(e)
                                        })
                                    } else r(e)
                                })
                            }
                        })
                    })
                },
                k = function(e) {
                    return "string" == typeof e && e
                },
                O = /;\s/g,
                A = /([^=]+)=/i,
                x = function(e) {
                    if (k(e)) {
                        var t = new Date(0).toUTCString();
                        window.document.cookie = e + "=''; expires=" + t
                    }
                },
                D = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = n.expires,
                        i = n.domain,
                        o = n.path;
                    if (k(e)) {
                        var a = e + "=" + t;
                        r && r instanceof Date && (a += "; expires=" + r.toUTCString()), i && k(i) && (a += "; domain=" + i), o && k(o) && (a += "; path=" + o), window.document.cookie = a
                    }
                },
                L = function(e) {
                    if (!k(e)) return null;
                    var t = null;
                    return e = e.trim(), window.document.cookie.split(O).some(function(n) {
                        var r = void 0,
                            i = void 0,
                            o = n.match(A);
                        if (Array.isArray(o)) try {
                            r = decodeURIComponent(o[1]), i = decodeURIComponent(n.substring(r.length + 1))
                        } catch (e) {}
                        return r === e && (t = i.trim(), !0)
                    }), t
                },
                j = this,
                I = function() {
                    var e = new Map;
                    return {
                        setTimeout: function(e) {
                            function t(t, n, r) {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function() {
                                return e.toString()
                            }, t
                        }(function(t, n, r) {
                            var i = r || j;
                            if (!i) return setTimeout(t, n);
                            e.has(i) || e.set(i, new Map);
                            var o = setTimeout(function() {
                                var n = Array.prototype.slice.call(arguments);
                                e.get(i).delete(o), t.apply(this, n)
                            }, n);
                            return e.get(i).set(o, o), o
                        }),
                        clearAllTimeout: function() {
                            if (e && e.size) {
                                var t = !0,
                                    n = !1,
                                    r = void 0;
                                try {
                                    for (var i, o = e.values()[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                        var a = i.value,
                                            s = !0,
                                            c = !1,
                                            u = void 0;
                                        try {
                                            for (var l, f = a.values()[Symbol.iterator](); !(s = (l = f.next()).done); s = !0) {
                                                var d = l.value;
                                                clearTimeout(d)
                                            }
                                        } catch (e) {
                                            c = !0, u = e
                                        } finally {
                                            try {
                                                !s && f.return && f.return()
                                            } finally {
                                                if (c) throw u
                                            }
                                        }
                                    }
                                } catch (e) {
                                    n = !0, r = e
                                } finally {
                                    try {
                                        !t && o.return && o.return()
                                    } finally {
                                        if (n) throw r
                                    }
                                }
                                e.clear()
                            }
                        },
                        clearTimeoutForInstance: function(t) {
                            var n = e.get(t);
                            if (n && n.size) {
                                var r = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var a, s = n[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                                        var c = a.value;
                                        clearTimeout(c)
                                    }
                                } catch (e) {
                                    i = !0, o = e
                                } finally {
                                    try {
                                        !r && s.return && s.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                e.get(t).clear()
                            }
                        },
                        clearTimeout: function(e) {
                            function t(t, n) {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function() {
                                return e.toString()
                            }, t
                        }(function(t, n) {
                            var r = n || j,
                                i = e.get(r);
                            if (!i) return void clearTimeout(t);
                            var o = i.get(t);
                            clearTimeout(o), e.get(r).delete(t)
                        })
                    }
                }(),
                N = I.clearAllTimeout,
                P = I.clearTimeout,
                R = I.clearTimeoutForInstance,
                M = I.setTimeout,
                z = "ontouchstart" in window,
                B = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = n.offsetX,
                        i = void 0 === r ? 0 : r,
                        o = n.offsetY,
                        a = void 0 === o ? 0 : o;
                    return e.right + i >= t.left && e.bottom + a >= t.top && e.left - i <= t.right && e.top - a <= t.bottom
                },
                W = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                },
                V = function e(t, n, r, i) {
                    if (r.hasAttribute(t)) {
                        var o = r.getAttribute(t);
                        i[o] && i[o].push(r)
                    }
                    var a = r.children;
                    if (!a) return i;
                    for (var s = a.length; s--;) e(t, n, a[s], i);
                    return i
                },
                H = W,
                U = function(e, t, n) {
                    var r = void 0;
                    return function() {
                        for (var i = arguments.length, o = Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                        window.clearTimeout(r), r = window.setTimeout(function() {
                            e.apply(n, o)
                        }, t)
                    }
                },
                Y = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.containerClass,
                        r = t.offsetX,
                        i = void 0 === r ? 0 : r,
                        o = t.offsetY,
                        a = void 0 === o ? 0 : o,
                        s = arguments[2];
                    if (!W(e)) return !1;
                    if (n && Element.prototype.closest) {
                        var c = e.closest(n);
                        if (c) {
                            var u = c.getBoundingClientRect();
                            if (B(u, s)) {
                                var l = u.bottom + a,
                                    f = u.left - i,
                                    d = u.right + i,
                                    v = u.top - a,
                                    h = {
                                        top: v > s.top ? v : s.top,
                                        right: d < s.right ? d : s.right,
                                        bottom: l < s.bottom ? l : s.bottom,
                                        left: f > s.left ? f : s.left
                                    },
                                    m = e.getBoundingClientRect();
                                return B(m, h)
                            }
                            return !1
                        }
                    }
                    var y = e.getBoundingClientRect();
                    return B(y, s, {
                        offsetX: i,
                        offsetY: a
                    })
                },
                F = function(e, t, n) {
                    var r = 0;
                    return function() {
                        for (var i = arguments.length, o = Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                        var s = +new Date;
                        s - r < t || (r = s, e.apply(n, o))
                    }
                },
                X = function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        i = r.passive,
                        o = void 0 === i || i;
                    z && "click" === t && (e.style.cursor = "pointer"), e.addEventListener(t, n, {
                        capture: !1,
                        passive: o
                    })
                },
                J = function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        i = r.passive,
                        o = void 0 === i || i;
                    e.removeEventListener(t, n, {
                        capture: !1,
                        passive: o
                    })
                },
                K = function(e, t) {
                    return t.reduce(function(e, t) {
                        return e && e[t] ? e[t] : null
                    }, e)
                },
                q = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.src,
                        n = e.type,
                        r = e.text,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                        o = arguments[2];
                    if (o && K(window, o.split("."))) return void i();
                    if ("text/javascript" !== (n = n || "text/javascript")) return void i(new Error("can load only script of type text/javascript"));
                    var a = document.createElement("script");
                    a.type = n, t ? (a.src = t, a.async = !0, a.defer = !0, a.readyState ? a.onreadystatechange = function() {
                        "loaded" !== a.readyState && "complete" !== a.readyState || (a.onreadystatechange = null, i())
                    } : a.onload = function() {
                        i()
                    }) : (a.textContent = "try{" + r + "}catch(e){window.console && window.console.error(e);}", i()), document.getElementsByTagName("head")[0].appendChild(a)
                },
                $ = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.src,
                        n = e.text,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                        i = document.getElementsByTagName("head")[0];
                    if (n) {
                        var o = document.createElement("style");
                        o.type = "text/css", o.styleSheet ? o.styleSheet.cssText = n : o.appendChild(document.createTextNode(n)), i.appendChild(o), r()
                    } else {
                        var a = document.createElement("link");
                        a.rel = "stylesheet", a.href = t, i.parentNode.insertBefore(a, i), r()
                    }
                },
                G = function(e, t) {
                    if (e && t)
                        for (var n = e.length, r = 0; r < n && !1 !== t(e[r], r); r++);
                },
                Q = function(e, t) {
                    for (; e && !e.classList.contains(t);) e = e.parentElement;
                    return e
                },
                Z = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.useNavigator,
                        r = void 0 === n || n,
                        i = t.useTimestamp,
                        o = void 0 === i || i,
                        a = !1;
                    if (r)
                        if (window.navigator && "function" == typeof window.navigator.sendBeacon) try {
                            window.navigator.sendBeacon(e) || (a = !0)
                        } catch (e) {
                            a = !0
                        } else a = !0;
                        else a = !0;
                    if (a) {
                        var s = new Image;
                        X(s, "error", function() {
                            s = null
                        }), X(s, "load", function() {
                            s = null
                        }), X(s, "abort", function() {
                            s = null
                        }), s.src = o ? e + (-1 === e.indexOf("?") ? "?" : "&") + (new Date).getTime() : e
                    }
                },
                ee = function(e, t) {
                    return e.nodeName.toLowerCase() === t
                },
                te = function(e) {
                    if (!(e = e ? e.split("?")[0] : "") || "/" === e.charAt(0)) return {
                        host: "undefined" != typeof window ? window.location.host : "",
                        pathname: e || ""
                    };
                    var t = e.split("/");
                    return {
                        host: t[2],
                        pathname: "/" + t.slice(3).join("/")
                    }
                },
                ne = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document.body;
                    if (!Array.isArray(t)) return {};
                    var r = {};
                    return t.forEach(function(e) {
                        r[e] = []
                    }), V(e, t, n, r), r
                },
                re = function(e) {
                    for (var t, n = [], r = 0; t = e[r]; ++r) n.push(t);
                    return n
                },
                ie = function(e) {
                    if (!e) return {};
                    var t = {};
                    try {
                        t = JSON.parse(e.textContent)
                    } catch (e) {}
                    return t
                },
                oe = function(e) {
                    if (!e) return e;
                    if ("content" in document.createElement("template")) return e;
                    var t = e.childNodes,
                        n = void 0;
                    if (t.length) {
                        n = document.createElement("div");
                        for (var r = 0; r < t.length; r++) n.appendChild(t[r].cloneNode(!0));
                        e.innerHTML = ""
                    } else n = e;
                    return n
                },
                ae = S,
                se = C,
                ce = x,
                ue = D,
                le = L,
                fe = N,
                de = P,
                ve = R,
                he = M,
                me = Object.freeze({
                    ATTR_PREFIX: "data-wf-",
                    DISPLAY_BLOCK: "block",
                    DISPLAY_NONE: "none",
                    WAFER_DESTROYED: "wafer-destroyed"
                }),
                ye = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                we = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                pe = function() {
                    function e() {
                        r(this, e)
                    }
                    return we(e, [{
                        key: "init",
                        value: function() {
                            this._util = {
                                listeners: {}
                            }
                        }
                    }, {
                        key: "emit",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = this._util.listeners;
                            n && n[e] && n[e].forEach(function(n) {
                                n.call(void 0, ye({
                                    type: e
                                }, t))
                            })
                        }
                    }, {
                        key: "on",
                        value: function(e, t) {
                            var n = this._util.listeners;
                            n && t && e && (n[e] || (n[e] = []), n[e].push(t))
                        }
                    }, {
                        key: "removeListener",
                        value: function(e, t) {
                            var n = this._util.listeners;
                            if (n && n[e]) {
                                var r = n[e].indexOf(t);
                                r > -1 && n[e].splice(r, 1)
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this._util.listeners = null
                        }
                    }]), e
                }(),
                ge = pe,
                be = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                _e = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t.name,
                            r = t.version,
                            o = t.tables,
                            a = void 0 === o ? ["fetch"] : o,
                            s = t.cb,
                            c = void 0 === s ? function() {} : s;
                        i(this, e), this._utils = {
                            cb: c,
                            connection: null,
                            db: null,
                            name: n,
                            startTime: Date.now(),
                            tables: a
                        };
                        var u = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                        u && n && r && (this._utils.connection = u.open(n, r), this.addEventListener())
                    }
                    return be(e, [{
                        key: "addEventListener",
                        value: function() {
                            var e = this,
                                t = this._utils,
                                n = t.cb,
                                r = t.connection,
                                i = t.startTime,
                                o = t.tables;
                            r.onsuccess = function(t) {
                                var r = t.target.result,
                                    a = !0;
                                o.some(function(e) {
                                    return !r.objectStoreNames.contains(e) && (a = !1, !0)
                                }), a && (e._utils.db = r, n("success", {
                                    duration: Date.now() - i
                                }))
                            }, r.onerror = function(t) {
                                e._utils.db = null, n("error", {
                                    duration: Date.now() - i
                                })
                            }, r.onupgradeneeded = function(t) {
                                var r = t.target.result;
                                o.forEach(function(e) {
                                    r.createObjectStore(e, {
                                        keyPath: "key"
                                    }).createIndex("key", ["cachedTime", "key", "ttl"])
                                }), t.target.transaction.oncomplete = function() {
                                    e._utils.db = r, n("success", {
                                        duration: Date.now() - i
                                    })
                                }
                            }
                        }
                    }, {
                        key: "get",
                        value: function(e, t) {
                            var n = this,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                i = r.timeout,
                                o = void 0 === i ? 1e3 : i,
                                a = this._utils.db;
                            return new Promise(function(r, i) {
                                if (!a) return void i(new Error("Connection missing"));
                                if (!t) return void i(new Error("Table missing"));
                                var s = !1,
                                    c = setTimeout(function() {
                                        s = !0, i(new Error("Cache lookup timed out"))
                                    }, o);
                                if (!a.objectStoreNames.contains(t)) return clearTimeout(c), void i(new Error("Store does not exist : " + t));
                                var u = void 0;
                                try {
                                    u = n._utils.db.transaction(t, "readonly")
                                } catch (e) {
                                    return clearTimeout(c), void i(e)
                                }
                                u.onerror = function(e) {
                                    clearTimeout(c), s || i(e)
                                }, u.onabort = function(e) {
                                    clearTimeout(c), s || i(e)
                                };
                                var l = u.objectStore(t);
                                if (!l) return clearTimeout(c), void i(new Error("store doesn't exist for table : " + t));
                                var f = l.get(e);
                                f.onsuccess = function(e) {
                                    if (clearTimeout(c), !s) {
                                        var t = e.target.result;
                                        r(t)
                                    }
                                }, f.onerror = function(e) {
                                    clearTimeout(c), s || i(e)
                                }
                            })
                        }
                    }, {
                        key: "set",
                        value: function(e, t) {
                            var n = this,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                i = r.timeout,
                                o = void 0 === i ? 1e3 : i,
                                a = this._utils,
                                s = a.cb,
                                c = a.db;
                            return new Promise(function(r, i) {
                                if (!c) return void i(new Error("Connection missing"));
                                if (!t) return void i(new Error("Table missing"));
                                var a = !1,
                                    u = setTimeout(function() {
                                        a = !0, i(new Error("Cache write timed out"))
                                    }, o);
                                if (!c.objectStoreNames.contains(t)) return clearTimeout(u), s("error", {
                                    action: "deleting db",
                                    message: "Store does not exist : " + t
                                }), n.deleteDB().catch(function() {}), void i(new Error("Store does not exist : " + t));
                                var l = void 0;
                                try {
                                    l = n._utils.db.transaction(t, "readwrite")
                                } catch (e) {
                                    return clearTimeout(u), e instanceof DOMException && (s("error", {
                                        action: "deleting db",
                                        message: e.message
                                    }), n.deleteDB().catch(function() {})), void i(e)
                                }
                                l.onerror = function(e) {
                                    clearTimeout(u), a || i(e)
                                }, l.onabort = function(e) {
                                    clearTimeout(u), a || i(e)
                                };
                                var f = l.objectStore(t);
                                if (!f) return clearTimeout(u), void i(new Error("store doesn't exist for table : " + t));
                                var d = f.put(e);
                                d.onsuccess = function(e) {
                                    if (clearTimeout(u), !a) {
                                        var t = e.target.result;
                                        r(t)
                                    }
                                }, d.onerror = function(e) {
                                    clearTimeout(u), a || i(e)
                                }
                            })
                        }
                    }, {
                        key: "delete",
                        value: function(e, t) {
                            var n = this,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                i = r.timeout,
                                o = void 0 === i ? 1e3 : i,
                                a = this._utils.db;
                            return new Promise(function(r, i) {
                                if (!a) return void i(new Error("Connection missing"));
                                if (!t) return void i(new Error("Table missing"));
                                var s = !1,
                                    c = setTimeout(function() {
                                        s = !0, i(new Error("Cache delete timed out"))
                                    }, o);
                                if (!a.objectStoreNames.contains(t)) return clearTimeout(c), void i(new Error("Store does not exist : " + t));
                                var u = void 0;
                                try {
                                    u = n._utils.db.transaction(t, "readwrite")
                                } catch (e) {
                                    return clearTimeout(c), void i(e)
                                }
                                u.onerror = function(e) {
                                    clearTimeout(c), s || i(e)
                                }, u.onabort = function(e) {
                                    clearTimeout(c), s || i(e)
                                };
                                var l = u.objectStore(t);
                                if (!l) return clearTimeout(c), void i(new Error("store doesn't exist for table : " + t));
                                var f = l.delete(e);
                                f.onsuccess = function(e) {
                                    if (clearTimeout(c), !s) {
                                        var t = e.target.result;
                                        r(t)
                                    }
                                }, f.onerror = function(e) {
                                    clearTimeout(c), s || i(e)
                                }
                            })
                        }
                    }, {
                        key: "clean",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = n.timeout,
                                i = void 0 === r ? 1e4 : r,
                                o = n.timeDiffToDelete,
                                a = void 0 === o ? 864e5 : o,
                                s = this._utils.db,
                                c = Date.now();
                            return new Promise(function(n, r) {
                                if (!s) return void r(new Error("Connection missing"));
                                if (!e) return void r(new Error("Table missing"));
                                var o = !1,
                                    u = setTimeout(function() {
                                        o = !0, r(new Error("Cache clean timed out"))
                                    }, i);
                                if (!s.objectStoreNames.contains(e)) return clearTimeout(u), void r(new Error("Store does not exist : " + e));
                                var l = void 0;
                                try {
                                    l = t._utils.db.transaction(e, "readonly")
                                } catch (e) {
                                    return clearTimeout(u), void r(e)
                                }
                                l.onerror = function(e) {
                                    clearTimeout(u), o || r(e)
                                }, l.onabort = function(e) {
                                    clearTimeout(u), o || r(e)
                                };
                                var f = l.objectStore(e);
                                if (!f) return clearTimeout(u), void r(new Error("store doesn't exist for table : " + e));
                                var d = f.openCursor(),
                                    v = [];
                                d.onsuccess = function(i) {
                                    if (clearTimeout(u), !o) {
                                        var s = i.target.result;
                                        if (s) {
                                            var l = s.value.cachedTime;
                                            c - l > a && v.push(t.delete(s.key, e)), s.continue()
                                        } else Promise.all(v).then(function(e) {
                                            n(e)
                                        }).catch(function(e) {
                                            r(e)
                                        })
                                    }
                                }, d.onerror = function(e) {
                                    clearTimeout(u), o || r(e)
                                }
                            })
                        }
                    }, {
                        key: "deleteDB",
                        value: function() {
                            var e = this,
                                t = this._utils.db,
                                n = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                            return new Promise(function(r, i) {
                                if (!n) return void i(new Error("Connection missing"));
                                t && (t.close(), e._utils.db = null);
                                var o = e._utils.name,
                                    a = !1,
                                    s = setTimeout(function() {
                                        a = !0, i(new Error("Could not delete"))
                                    }, 1e3),
                                    c = n.deleteDatabase(o);
                                c.onerror = function(e) {
                                    clearTimeout(s), a || i(new Error("Could not delete"))
                                }, c.onsuccess = function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    clearTimeout(s), a || r(e.result)
                                }
                            })
                        }
                    }]), e
                }(),
                Ee = _e,
                Te = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                Se = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                Ce = function(e) {
                    document.attachEvent && void 0 !== document.attachEvent ? document.attachEvent("onreadystatechange", function() {
                        "interactive" === document.readyState && setTimeout(e, 0)
                    }) : "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e, {
                        capture: !1,
                        passive: !0
                    }) : setTimeout(e, 0)
                },
                ke = function() {
                    function e() {
                        var t = this;
                        o(this, e), this._viewport = {
                            top: 0,
                            left: 0
                        }, this._state = {}, this._isPageVisible = !0, this._observerMapping = {}, this._saveViewportOffset(), this._updateState(), this._initHostConfig(), this._handleVisibilityChange = this._handleVisibilityChange.bind(this), Ce(function() {
                            window.wafer && window.wafer.utils && (t._initDB(), t._setup())
                        })
                    }
                    return Se(e, [{
                        key: "addObserver",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                            this._observerMapping[e] || (this._observerMapping[e] = []), this._observerMapping[e].push(t)
                        }
                    }, {
                        key: "removeObserver",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                            if (this._observerMapping[e]) {
                                var n = this._observerMapping[e].indexOf(t);
                                this._observerMapping[e].splice(n, 1)
                            }
                        }
                    }, {
                        key: "sync",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            this._sync && this._sync(e)
                        }
                    }, {
                        key: "syncUI",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            this._wafers.forEach(function(t) {
                                t._state && t._state.mounted && t.handleResize && t.handleResize(e)
                            })
                        }
                    }, {
                        key: "trigger",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            this._wafers.forEach(function(t) {
                                t._state && t._state.mounted && t.handleTrigger && t.handleTrigger(e)
                            })
                        }
                    }, {
                        key: "prefetch",
                        value: function(e) {
                            this._wafers.forEach(function(t) {
                                var n = t && t.configs;
                                if (n) {
                                    var r = n.allowPrefetch,
                                        i = n.selector;
                                    r && i && Array.prototype.slice.call(e.getElementsByClassName(i.replace(".", ""))).forEach(function(e) {
                                        return t.loadElement(e, !0)
                                    })
                                }
                            });
                            var t = window.wafer,
                                n = t.features,
                                r = t.utils,
                                i = r.getElementsByAttrValues;
                            n.nativeLazyLoadingSupported && i("loading", ["lazy"], e).lazy.forEach(function(e) {
                                e.setAttribute("loading", "eager")
                            })
                        }
                    }, {
                        key: "emitError",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.elem,
                                n = e.meta,
                                r = e.name,
                                i = e.stack;
                            this._emit({
                                elem: t,
                                meta: n,
                                name: r,
                                stack: i
                            })
                        }
                    }, {
                        key: "emitLog",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.elem,
                                n = e.meta,
                                r = e.name;
                            this._emit({
                                elem: t,
                                meta: n,
                                name: r
                            }, "log")
                        }
                    }, {
                        key: "emitWaferEvent",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = t.elem,
                                r = t.meta;
                            this._emit({
                                elem: n,
                                meta: r
                            }, e)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = t.destroySelf,
                                r = void 0 === n || n,
                                i = window.wafer.utils,
                                o = i.unbindEvent;
                            if (e) {
                                var a = e.children;
                                if (a)
                                    for (var s = a.length; s--;) this.destroy(a[s])
                            } else o(document, window.wafer.features.visibilityMeta.visibilityChange, this._handleVisibilityChange), o(window, "resize", this._handleResizeWithThrottle), o(window, "scroll", this._handleScrollWithThrottle), o(document.body, "click", this._handleDelegatedEvent, {
                                passive: !1
                            }), o(document.body, "change", this._handleDelegatedEvent, {
                                passive: !1
                            }), i.clearAllTimeout(), this._ee.destroy();
                            r && this._wafers.forEach(function(t) {
                                t.destroy && t.destroy(e)
                            })
                        }
                    }, {
                        key: "clearOldCache",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.timeDiffToDelete,
                                n = void 0 === t ? 864e5 : t;
                            window.wafer.db && window.wafer.db.clean("fetch", {
                                timeDiffToDelete: n
                            })
                        }
                    }, {
                        key: "_initDB",
                        value: function() {
                            var e = this,
                                t = document.getElementById("wafer-db-config"),
                                n = {};
                            if (t) try {
                                Object.assign(n, JSON.parse(t.textContent))
                            } catch (e) {
                                this.emitError({
                                    meta: {},
                                    name: "initDb",
                                    stack: e.stack
                                })
                            }
                            window.wafer.db = new Ee(Object.assign({}, n, {
                                cb: function(t) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    switch (t) {
                                        case "success":
                                            e.emitLog({
                                                name: "IDB-connection-success",
                                                meta: n
                                            });
                                            break;
                                        case "error":
                                            e.emitError({
                                                name: "IDB",
                                                meta: n
                                            }), e.emitLog({
                                                name: "IDB-connection-error",
                                                meta: n
                                            })
                                    }
                                }
                            }))
                        }
                    }, {
                        key: "_initHostConfig",
                        value: function() {
                            var e = document.getElementById("wafer-config");
                            if (e) try {
                                var t = JSON.parse(e.textContent);
                                Object.defineProperty(this, "_hostConfig", {
                                    value: t,
                                    writable: !1
                                })
                            } catch (e) {
                                this.emitError({
                                    meta: {},
                                    name: "initConfig",
                                    stack: e.stack
                                })
                            }
                        }
                    }, {
                        key: "_emit",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "error";
                            this._ee && this._ee.emit(t, e)
                        }
                    }, {
                        key: "_setup",
                        value: function() {
                            var e = this;
                            if (!this._ee) {
                                var t = window.wafer.utils,
                                    n = t.bindEvent,
                                    r = t.throttle;
                                this._ee = new ge, this._ee.init(), window.wafer.on = this._ee.on.bind(this._ee), window.wafer.removeListener = this._ee.removeListener.bind(this._ee), Object.defineProperty(window.wafer, "state", {
                                    configurable: !0,
                                    set: function(t) {
                                        e.state = t
                                    }
                                }), this._handleResizeWithThrottle = r(function() {
                                    return e._handleResize.call(e)
                                }, 10, this), this._handleScrollWithThrottle = r(function() {
                                    return e._handleScroll.call(e)
                                }, 10, this), this._handleDelegatedEvent = this._handleDelegatedEvent.bind(this), this._sync = r(function(t) {
                                    e._wafers.forEach(function(e) {
                                        e.sync && e.sync(t)
                                    }), e._updateState(t)
                                }, 0, this), this._saveViewportOffsetWithThrottle = r(function() {
                                    e._saveViewportOffset()
                                }, 50, this), n(document, window.wafer.features.visibilityMeta.visibilityChange, this._handleVisibilityChange), n(window, "resize", this._handleResizeWithThrottle), n(window, "scroll", this._handleScrollWithThrottle), n(document.body, "click", this._handleDelegatedEvent, {
                                    passive: !1
                                }), n(document.body, "change", this._handleDelegatedEvent, {
                                    passive: !1
                                }), this.__executeAllRegisteredReadyFns()
                            }
                        }
                    }, {
                        key: "_saveViewportOffset",
                        value: function() {
                            this._viewport.bottom = window.innerHeight || document.documentElement.clientHeight, this._viewport.right = window.innerWidth || document.documentElement.clientWidth
                        }
                    }, {
                        key: "_updateState",
                        value: function() {
                            for (var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, n = t.querySelectorAll("script.wafer-state"), r = 0; e = n[r]; ++r) {
                                if (!e.classList) {
                                    try {
                                        this.state = JSON.parse(e.textContent)
                                    } catch (e) {}
                                    return
                                }
                                if (!e.classList.contains("state-added")) {
                                    try {
                                        this.state = JSON.parse(e.textContent)
                                    } catch (t) {
                                        e.classList.add("state-error")
                                    }
                                    e.classList.add("state-added")
                                }
                            }
                        }
                    }, {
                        key: "_handleResize",
                        value: function() {
                            this._saveViewportOffsetWithThrottle(), this._wafers.forEach(function(e) {
                                e._state && e._state.mounted && e.handleResize && e.handleResize()
                            })
                        }
                    }, {
                        key: "_handleVisibilityChange",
                        value: function() {
                            var e = this;
                            setTimeout(function() {
                                var t = !document[window.wafer.features.visibilityMeta.hidden];
                                e._isPageVisible = t, e._ee.emit("pageVisibilityChange", {
                                    isActive: t
                                }), e._wafers.forEach(function(e) {
                                    e._state && e._state.mounted && e.handleVisibilityChange && e.handleVisibilityChange(t)
                                })
                            }, 1e3)
                        }
                    }, {
                        key: "_handleScroll",
                        value: function() {
                            var e = {
                                scrollX: window.scrollX || window.pageXOffset,
                                scrollY: window.scrollY || window.pageYOffset
                            };
                            this._ee.emit("scroll", e), this._wafers.forEach(function(t) {
                                t._state && t._state.mounted && t.handleScroll && t.handleScroll(e)
                            })
                        }
                    }, {
                        key: "_getElementComposedMap",
                        value: function(e) {
                            for (var t = e, n = new Map; t;) n.set(t, !0), t = t.parentElement;
                            return n
                        }
                    }, {
                        key: "_handleDelegatedEvent",
                        value: function(e) {
                            var t = this,
                                n = e.target;
                            e.waferComposedMap = function() {
                                var e = void 0;
                                return function() {
                                    return e || (e = t._getElementComposedMap(n)), e
                                }
                            }();
                            var r = n;
                            for (this._wafers.forEach(function(t) {
                                    t._state && t._state.mounted && (t.handleEvent("clickOutside", r, e), r.classList.contains(t._options.selector.replace(".", "")) && t.handleEvent(e.type, r, e))
                                }), r = r.parentElement; r;) this._wafers.forEach(function(t) {
                                t._state && t._state.mounted && r.classList.contains(t._options.selector.replace(".", "")) && t.handleEvent(e.type, r, e)
                            }), r = r.parentElement
                        }
                    }, {
                        key: "viewport",
                        get: function() {
                            return this._viewport
                        }
                    }, {
                        key: "state",
                        get: function() {
                            return this._state
                        },
                        set: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            for (var n in t) ! function(n) {
                                if (t.hasOwnProperty(n)) {
                                    var r = e._state[n];
                                    if (void 0 === r) {
                                        var i = e._observerMapping || {};
                                        Object.defineProperty(e._state, n, {
                                            configurable: !0,
                                            get: function() {
                                                return r
                                            },
                                            set: function(e) {
                                                var t = i[n] || [];
                                                r = e, setTimeout(function() {
                                                    t.forEach(function(e) {
                                                        return e()
                                                    })
                                                }, 0)
                                            }
                                        })
                                    }
                                    Object(t[n]) === t[n] ? e._state[n] = Te({}, e._state[n], t[n]) : e._state[n] = t[n]
                                }
                            }(n)
                        }
                    }, {
                        key: "isPageVisible",
                        get: function() {
                            return this._isPageVisible
                        }
                    }, {
                        key: "isIORetrySupported",
                        get: function() {
                            var e = this._hostConfig || {},
                                t = e.retryIODisable;
                            return !(void 0 !== t && t)
                        }
                    }, {
                        key: "_wafers",
                        get: function() {
                            return (window.wafer.wafers && Object.keys(window.wafer.wafers) || []).reduce(function(e, t) {
                                return !0 === window.wafer.wafers[t].__esModule ? (e.push(window.wafer.wafers[t].default), e) : (e.push(window.wafer.wafers[t]), e)
                            }, [])
                        }
                    }]), e
                }(),
                Oe = ke,
                Ae = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                xe = function() {
                    function e(e, t) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    }
                    return function(t, n) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return e(t, n);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                De = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                Le = /\[([\w\.-]+)]/g,
                je = /\[([\w\.-]+)]/g,
                Ie = "wf-state-undefined",
                Ne = "wf-state-reset",
                Pe = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.get;
                    return e.replace(Le, function(e) {
                        e = e.slice(1, -1);
                        var t = e.split("."),
                            r = t.slice(1, t.length);
                        return n(window.wafer.base.state, r) || Ie
                    })
                },
                Re = new Map([
                    ["focusin", {
                        passive: !1
                    }],
                    ["focusout", {
                        passive: !1
                    }],
                    ["keydown", {
                        passive: !1
                    }],
                    ["keyup", {
                        passive: !1
                    }],
                    ["focusin", {
                        passive: !1
                    }],
                    ["mousedown", {
                        passive: !1
                    }],
                    ["mouseup", {
                        passive: !0
                    }],
                    ["mouseleave", {
                        passive: !1
                    }],
                    ["mouseover", {
                        passive: !1
                    }],
                    ["mousemove", {
                        passive: !0
                    }],
                    ["touchstart", {
                        passive: !0
                    }],
                    ["touchend", {
                        passive: !0
                    }],
                    ["touchmove", {
                        passive: !1
                    }]
                ]),
                Me = function() {
                    function e(t) {
                        var n = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = r.selector,
                            o = arguments[2],
                            a = o.STATE_ATTRS,
                            s = o.DEFAULT_STATE_KEY_TO_UPDATE,
                            l = void 0 === s ? "" : s;
                        u(this, e), this._util = {
                            elem: t,
                            selector: i
                        };
                        var f = window.wafer,
                            d = f.constants,
                            v = f.utils,
                            h = d.ATTR_PREFIX,
                            m = void 0 === h ? "data-wf-" : h,
                            y = window.wafer.base,
                            w = this.stateDidUpdate && this.stateDidUpdate.bind(this),
                            p = (t.getAttribute(m + "on") || "").split(":"),
                            g = xe(p, 3),
                            b = g[0],
                            _ = void 0 === b ? "complete" : b,
                            E = g[1],
                            T = void 0 === E ? "setState" : E,
                            S = g[2],
                            C = void 0 === S ? l : S;
                        _ = _ || "complete", C && "complete" === _ && ("setState" === T ? this._util.shouldUpdateState = !0 : "toggleState" === T && (this._util.shouldToggleState = !0), this._util.stateKeysToUpdate = C.split(".")), w && a.forEach(function(e) {
                            var r = t.getAttribute(m + "[" + e + "]") || t.getAttribute(m + "state-" + e),
                                i = t.getAttribute("" + m + e);
                            if (r)
                                for (var o = void 0; null !== (o = je.exec(r));) {
                                    var a = o[1],
                                        s = a.split("."),
                                        u = c(s),
                                        l = u[0],
                                        f = u.slice(1);
                                    "state" === l && function() {
                                        var t = n,
                                            o = xe(f, 1),
                                            a = o[0],
                                            s = Pe(r, v);
                                        i || -1 !== s.indexOf(Ie) || (n._util[e] = s);
                                        var c = function n() {
                                            if (t._destroyed) return void y.removeObserver.call(y, a, n);
                                            var i = t._util[e];
                                            t._util[e] = Pe(r, v), -1 === t._util[e].indexOf(Ie) && i !== t._util[e] ? -1 === t._util[e].indexOf(Ne) && w({
                                                stateAttr: e
                                            }) : t._util[e] = i
                                        };
                                        setTimeout(function() {
                                            c()
                                        }, 0), y.addObserver(a, c)
                                    }()
                                }
                        })
                    }
                    return De(e, [{
                        key: "addEventListeners",
                        value: function() {
                            this._addEventListenerToEvents(window.wafer.utils.bindEvent, "bindEvent")
                        }
                    }, {
                        key: "removeEventListeners",
                        value: function() {
                            this._addEventListenerToEvents(window.wafer.utils.unbindEvent, "unbindEvent")
                        }
                    }, {
                        key: "_addEventListenerToEvents",
                        value: function(e, t) {
                            var n = this,
                                r = this._util.elem,
                                i = this.constructor.events,
                                o = "bindEvent" === t;
                            if (i) {
                                for (var a in i) {
                                    (function(t) {
                                        if (i.hasOwnProperty(t)) {
                                            var a = function() {
                                                if (!Re.has(t)) return {
                                                    v: "continue"
                                                };
                                                var a = i[t],
                                                    c = Re.get(t),
                                                    u = !0,
                                                    l = !1,
                                                    f = void 0;
                                                try {
                                                    for (var d, v = a[Symbol.iterator](); !(u = (d = v.next()).done); u = !0) {
                                                        var h = d.value,
                                                            m = xe(h, 2),
                                                            y = m[0],
                                                            w = m[1];
                                                        ! function(i, a) {
                                                            var u = void 0;
                                                            (u = "_self" === i ? r : [].concat(s(r.getElementsByClassName(i)))) && n[a] && (o && (n[a] = n[a].bind(n)), Array.isArray(u) ? u.forEach(function(r) {
                                                                e.call(n, r, t, n[a], c)
                                                            }) : e.call(n, u, t, n[a], c))
                                                        }(y, w)
                                                    }
                                                } catch (e) {
                                                    l = !0, f = e
                                                } finally {
                                                    try {
                                                        !u && v.return && v.return()
                                                    } finally {
                                                        if (l) throw f
                                                    }
                                                }
                                            }();
                                            if ("object" === (void 0 === a ? "undefined" : Ae(a))) a.v
                                        }
                                    })(a)
                                }
                            }
                        }
                    }, {
                        key: "didComplete",
                        value: function(e, t) {
                            var n = this._util,
                                r = n.shouldToggleState,
                                i = n.shouldUpdateState,
                                o = n.stateKeysToUpdate;
                            if (i) {
                                var s = {};
                                o.reduce(function(e, n, r) {
                                    return e[n] = e[n] || {}, r === o.length - 1 && (e[n] = t), e[n]
                                }, s), window.wafer.base.state = s
                            } else if (r) {
                                var u = c(o),
                                    l = u[0],
                                    f = u.slice(1),
                                    d = f.length;
                                if (d) {
                                    var v = window.wafer.base.state[l] || {};
                                    f.reduce(function(e, t, n) {
                                        return e[t] = n === d - 1 ? !e[t] : e[t] || {}, e[t]
                                    }, v), window.wafer.state = a({}, l, v)
                                } else window.wafer.state = a({}, l, !window.wafer.base.state[l])
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var e = this._util,
                                t = e.elem,
                                n = e.selector;
                            window.wafer.utils.clearTimeoutForInstance(this), t && (n && t.classList.remove(n.replace(".", "")), t.classList.add("wafer-destroyed")), this._util = {}, this._state = {}, this._destroyed = !0
                        }
                    }]), e
                }(),
                ze = Me,
                Be = function() {
                    function e(e, t) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    }
                    return function(t, n) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return e(t, n);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                We = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                Ve = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                He = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t.root,
                            r = t.selector,
                            i = t.props,
                            o = void 0 === i ? {} : i,
                            a = t.WaferClass;
                        l(this, e), this._state = {
                            elementInstances: new Map,
                            mounted: !1
                        }, this._options = {
                            props: o,
                            root: n,
                            selector: r,
                            WaferClass: a
                        }, a && a.events && Object.keys(a.events).forEach(function(e) {
                            a.events[e] = new Map(a.events[e])
                        })
                    }
                    return Ve(e, [{
                        key: "handleResize",
                        value: function() {
                            var e = this._state.elementInstances,
                                t = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var i, o = e.values()[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                    var a = i.value,
                                        s = a.instance,
                                        c = s.handleResize;
                                    c && c.call(s)
                                }
                            } catch (e) {
                                n = !0, r = e
                            } finally {
                                try {
                                    !t && o.return && o.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                        }
                    }, {
                        key: "handleEvent",
                        value: function(e, t, n) {
                            var r = this._options.WaferClass,
                                i = this._state.elementInstances;
                            if ("clickOutside" !== e) {
                                if (r && r.events) {
                                    var o = i.get(t);
                                    o && this._handleEvent(e, n, o)
                                }
                            } else {
                                var a = !0,
                                    s = !1,
                                    c = void 0;
                                try {
                                    for (var u, l = i.values()[Symbol.iterator](); !(a = (u = l.next()).done); a = !0) {
                                        var f = u.value,
                                            d = f.instance;
                                        if (d) {
                                            var v = d.handleClickOutside;
                                            v && v.call(d, n)
                                        }
                                    }
                                } catch (e) {
                                    s = !0, c = e
                                } finally {
                                    try {
                                        !a && l.return && l.return()
                                    } finally {
                                        if (s) throw c
                                    }
                                }
                            }
                        }
                    }, {
                        key: "sync",
                        value: function(e) {
                            var t = this._state.elementInstances,
                                n = this._options,
                                r = n.props,
                                i = n.root,
                                o = n.selector,
                                a = n.successClass,
                                s = n.WaferClass,
                                c = [];
                            o && (c = Array.prototype.slice.call((e || i).getElementsByClassName(o.replace(".", ""))).filter(function(e) {
                                return !e.classList.contains(a)
                            }));
                            var u = c.length;
                            if (u) {
                                var l = this.willSync;
                                l && l.call(this, e), c.forEach(function(e) {
                                    if (!t.has(e)) {
                                        var n = void 0;
                                        if (s) {
                                            n = new s(e, We({}, r, {
                                                selector: o
                                            }));
                                            var i = n.destroy;
                                            n.destroy = function() {
                                                t.delete(e);
                                                for (var r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                                                i.apply(n, o)
                                            }
                                        }
                                        t.set(e, {
                                            instance: n
                                        })
                                    }
                                })
                            }
                            if (this.validate(e), u) {
                                var f = this.didSync;
                                f && f.call(this, e)
                            }
                        }
                    }, {
                        key: "handleTrigger",
                        value: function(e) {
                            var t = this._options,
                                n = t.selector,
                                r = t.successClass;
                            if (e.classList.contains(n.replace(".", "")) && !e.classList.contains(r)) {
                                var i = this.willTrigger,
                                    o = this.trigger,
                                    a = this.didTrigger;
                                i && i.call(this, e), o && this.trigger(e), a && a.call(this, e)
                            }
                        }
                    }, {
                        key: "validate",
                        value: function(e) {
                            if (0 === this._state.elementInstances.size) return void this.destroy();
                            var t = this.willValidate,
                                n = this.didValidate;
                            t && t.call(this, e), this._state.mounted = !0, n && n.call(this, e)
                        }
                    }, {
                        key: "destroy",
                        value: function(e) {
                            var t = this.willDestroy,
                                n = this.didDestroy;
                            if (e) {
                                var r = this._state.elementInstances;
                                if (r.has(e)) {
                                    t && t.call(this, e);
                                    var i = r.get(e),
                                        o = i.instance;
                                    o && o.destroy(), r.delete(e), n && n.call(this, e)
                                }
                            } else t && t.call(this), this._destroyAll(), n && n.call(this)
                        }
                    }, {
                        key: "_destroyAll",
                        value: function() {
                            var e = this._state,
                                t = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var i, o = e.elementInstances.values()[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                    var a = i.value,
                                        s = a.instance;
                                    s && s.destroy()
                                }
                            } catch (e) {
                                n = !0, r = e
                            } finally {
                                try {
                                    !t && o.return && o.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                            e.elementInstances.clear(), e.mounted = !1
                        }
                    }, {
                        key: "_handleEvent",
                        value: function(e, t, n) {
                            var r = this._options.WaferClass,
                                i = r.events[e];
                            if (i)
                                for (var o = t.target; o;)
                                    if (o.className) {
                                        var a = void 0,
                                            s = !0,
                                            c = !1,
                                            u = void 0;
                                        try {
                                            for (var l, f = i.entries()[Symbol.iterator](); !(s = (l = f.next()).done); s = !0) {
                                                var d = l.value,
                                                    v = Be(d, 2),
                                                    h = v[0],
                                                    m = v[1];
                                                if (o.classList.contains(h)) {
                                                    var y = n.instance,
                                                        w = y && y[m];
                                                    t.eventTarget = o, w && w(t), a = !0;
                                                    break
                                                }
                                            }
                                        } catch (e) {
                                            c = !0, u = e
                                        } finally {
                                            try {
                                                !s && f.return && f.return()
                                            } finally {
                                                if (c) throw u
                                            }
                                        }
                                        o = a ? null : o.parentElement
                                    } else o = o.parentElement
                        }
                    }]), e
                }(),
                Ue = He,
                Ye = function() {
                    function e(e, t) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    }
                    return function(t, n) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return e(t, n);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                Fe = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                Xe = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                Je = function(e) {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.containerClass,
                            r = void 0 === n ? null : n,
                            i = e.error,
                            o = void 0 !== i && i,
                            a = e.errorClass,
                            s = void 0 === a ? "wafer-error" : a,
                            c = e.root,
                            u = void 0 === c ? document : c,
                            l = e.selector,
                            v = e.src,
                            h = void 0 === v ? "data-wf-src" : v,
                            m = e.success,
                            y = void 0 !== m && m,
                            w = e.successClass,
                            p = void 0 === w ? "wafer-lazy-loaded" : w,
                            g = e.validateDelay,
                            b = void 0 === g ? 25 : g;
                        f(this, t);
                        var _ = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                                root: u,
                                selector: l
                            })),
                            E = window.wafer.utils,
                            T = E.getConfigFromJSONScriptNode,
                            S = E.throttle,
                            C = T(document.getElementById("wafer-lazy-config")),
                            k = C.enableNativeLazyLoading,
                            O = void 0 === k || k;
                        return _._options = Fe({}, _._options, {
                            container: !!r && u.getElementsByClassName(r),
                            containerClass: r,
                            enableNativeLazyLoading: O,
                            error: o,
                            errorClass: s,
                            isRetina: window.devicePixelRatio > 1,
                            src: h,
                            success: y,
                            successClass: p
                        }), _._validateWithThrottle = S(function() {
                            _.validate()
                        }, b, _), _
                    }
                    return v(t, e), Xe(t, [{
                        key: "handleScroll",
                        value: function() {
                            this._validateWithThrottle()
                        }
                    }, {
                        key: "handleResize",
                        value: function() {
                            this._validateWithThrottle()
                        }
                    }, {
                        key: "willDestroy",
                        value: function() {
                            var e = this,
                                t = this._options.container;
                            if (t) {
                                var n = window.wafer.utils,
                                    r = n.each,
                                    i = n.unbindEvent;
                                r(t, function(t) {
                                    i(t, "scroll", e._validateWithThrottle)
                                })
                            }
                        }
                    }, {
                        key: "didSync",
                        value: function() {
                            var e = this,
                                t = this._state,
                                n = t.elementInstances,
                                r = t.mounted;
                            if (0 !== n.size) {
                                var i = this._options,
                                    o = i.container,
                                    a = i.defaultOffsetY,
                                    s = void 0 === a ? 100 : a,
                                    c = i.defaultOffsetX,
                                    u = void 0 === c ? 0 : c,
                                    l = !0,
                                    f = !1,
                                    d = void 0;
                                try {
                                    for (var v, h = n.entries()[Symbol.iterator](); !(l = (v = h.next()).done); l = !0) {
                                        var m = v.value,
                                            y = Ye(m, 2),
                                            w = y[0],
                                            p = y[1];
                                        p = void 0 === p ? {} : p;
                                        var g = p.offsetX,
                                            b = p.offsetY;
                                        if (void 0 === g || void 0 === b) {
                                            var _ = n.get(w),
                                                E = (w.getAttribute("data-wf-margin") || "").split(" "),
                                                T = Ye(E, 2),
                                                S = T[0],
                                                C = T[1];
                                            _.offsetY = Number(S) || s, _.offsetX = Number(C) || u
                                        }
                                    }
                                } catch (e) {
                                    f = !0, d = e
                                } finally {
                                    try {
                                        !l && h.return && h.return()
                                    } finally {
                                        if (f) throw d
                                    }
                                }
                                if (!r && (this._state.mounted = !0, o)) {
                                    var k = window.wafer.utils,
                                        O = k.bindEvent;
                                    (0, k.each)(o, function(t) {
                                        O(t, "scroll", e._validateWithThrottle)
                                    })
                                }
                            }
                        }
                    }, {
                        key: "willValidate",
                        value: function() {
                            var e = this._state.elementInstances,
                                t = window.wafer,
                                n = t.base,
                                r = t.features,
                                i = t.utils,
                                o = i.elementInView,
                                a = this._options,
                                s = a.enableNativeLazyLoading,
                                c = r.nativeLazyLoadingSupported,
                                u = !0,
                                l = !1,
                                f = void 0;
                            try {
                                for (var d, v = e.entries()[Symbol.iterator](); !(u = (d = v.next()).done); u = !0) {
                                    var h = d.value,
                                        m = Ye(h, 2),
                                        y = m[0],
                                        w = m[1];
                                    w = void 0 === w ? {} : w;
                                    var p = w.offsetX,
                                        g = w.offsetY,
                                        b = y.getAttribute("data-wf-trigger") || "viewport",
                                        _ = y.tagName.toLowerCase();
                                    "onLoad" === b ? (this._load(y, !0), e.delete(y)) : c && s && ("img" === _ || "picture" === _) && this.nativeLazyLoadElement ? (this.nativeLazyLoadElement(y), e.delete(y)) : (o(y, Fe({}, a, {
                                        offsetX: p,
                                        offsetY: g
                                    }), n.viewport) || y.classList.contains(a.successClass)) && (this._load(y), e.delete(y))
                                }
                            } catch (e) {
                                l = !0, f = e
                            } finally {
                                try {
                                    !u && v.return && v.return()
                                } finally {
                                    if (l) throw f
                                }
                            }
                        }
                    }, {
                        key: "_shouldLoadElement",
                        value: function(e, t) {
                            var n = this._options.successClass;
                            return !e.classList.contains(n) && (t || e.offsetWidth > 0 && e.offsetHeight > 0)
                        }
                    }, {
                        key: "_loadElement",
                        value: function(e, t) {
                            var n = this,
                                r = this._state.elementInstances,
                                i = r.get(e),
                                o = parseInt(e.getAttribute("data-wf-timeout"), 10) || 0;
                            !0 !== i.pending && (o ? setTimeout(function() {
                                return n.loadElement(e, t)
                            }, o) : this.loadElement(e, t), i.pending = !0)
                        }
                    }, {
                        key: "_load",
                        value: function(e, t) {
                            var n = this;
                            if (e && void 0 === e.length) this._loadElement(e);
                            else {
                                (0, window.wafer.utils.each)(e, function(e) {
                                    n._loadElement(e, t)
                                })
                            }
                        }
                    }, {
                        key: "_itemLoaded",
                        value: function(e) {
                            var t = this._options,
                                n = t.src,
                                r = t.selector,
                                i = t.success,
                                o = t.successClass;
                            e.classList.remove(r.replace(".", "")), e.classList.add(o), i && i(e), e.removeAttribute(n)
                        }
                    }]), t
                }(Ue),
                Ke = Je,
                qe = function() {
                    var e = [];
                    return {
                        add: function(t, n) {
                            if ("function" == typeof t) return window.wafer.on ? void t.call(n) : void e.push({
                                scope: n,
                                fn: t
                            })
                        },
                        executeAll: function() {
                            e.forEach(function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = e.fn,
                                    n = e.scope;
                                t.call(n)
                            }), e = []
                        }
                    }
                }();
            n.d(t, "base", function() {
                return Qe
            }), n.d(t, "controllers", function() {
                return Ze
            }), n.d(t, "ready", function() {
                return Ge
            }), n.d(t, "constants", function() {
                return me
            }), n.d(t, "features", function() {
                return h
            }), n.d(t, "utils", function() {
                return m
            }), n.d(t, "WaferBaseClass", function() {
                return ze
            });
            var $e = qe.executeAll,
                Ge = qe.add,
                Qe = new Oe;
            Qe.__executeAllRegisteredReadyFns = $e, Qe.supportStateReset = !0;
            var Ze = {
                WaferBaseController: Ue,
                WaferLazyController: Ke
            }
        }
    })
});