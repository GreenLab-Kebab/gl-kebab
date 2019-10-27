try {
    ! function(e, n, t, r, o) {
        "use strict";
        var i = function() {},
            a = function(e, n, t) {
                var r = e[n];
                e[n] = function() {
                    var e = r.apply(this, arguments);
                    return t.apply(this, arguments), e
                }
            },
            c = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            },
            u = {
                PRODUCT: "product"
            },
            s = function() {
                e.obApi.dispatch.apply(e.obApi, arguments)
            };
        s.version = e.obApi.version, s.loaded = e.obApi.loaded, s.marketerId = e.obApi.marketerId, s.queue = e.obApi.queue;
        var d = e.obApi = s;
        d.version = "1.1.2";
        var p = function() {
                function e(e, n, t) {
                    var r = new Date;
                    r.setTime(r.getTime() + 24 * t * 60 * 60 * 1e3);
                    var o = "expires=" + r.toUTCString();
                    document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(n) + "; " + o + "; path=/"
                }

                function n(e) {
                    if (!document.cookie) return "";
                    var n = "";
                    try {
                        n = decodeURIComponent(document.cookie)
                    } catch (e) {}
                    var t = n.indexOf(e + "=");
                    if (t < 0) return "";
                    var r = t + (e + "=").length,
                        o = n.indexOf(";", r),
                        i = o > 0 ? o : document.cookie.length;
                    return n.substring(r, i)
                }
                return {
                    get: n,
                    set: e
                }
            }(),
            f = function() {
                function e() {
                    return Math.random().toString().replace(".", "")
                }

                function n() {
                    var e = "";
                    try {
                        e = window.top.location.href || document.location.href
                    } catch (n) {
                        e = document.location.href
                    }
                    return e || ""
                }

                function r() {
                    var e, n = o();
                    return n ? (p.set("outbrain_click_id", n, 1), e = n) : e = p.get("outbrain_click_id"), e
                }

                function o() {
                    var e, t = n().split("?")[1] || "",
                        r = t.split(/&/);
                    for (e = 0; e < r.length; e++)
                        if (i(r[e])) return a(r[e]);
                    return ""
                }

                function i(e) {
                    return 0 === e.indexOf("dicbo=")
                }

                function a(e) {
                    return e.split("=")[1].split("#")[0]
                }
                var s, f = [],
                    h = !1,
                    w = !1,
                    g = function(e) {
                        if (w) return b(e, s);
                        f.push(e), h || (h = !0, m.checkHasConsent(function(e) {
                            for (w = !0, s = !!e; f.length > 0;) b(f.shift(), s)
                        }))
                    },
                    b = function(e, n) {
                        var t = "PAGE_VIEW" === e.name,
                            r = e.contentType === u.PRODUCT;
                        E(e, n), t && n && y(e), r && n && I(e)
                    },
                    E = function(n, o) {
                        var i = _(n);
                        delete i.content, delete i.contentType, i.optOut = o ? "false" : "true";
                        var a = o ? r() : "";
                        a && (i.ob_click_id = a), (new t).src = "//tr.outbrain.com/pixel?" + A(i) + "&bust=" + e()
                    },
                    y = function(n) {
                        (new t).src = "//amplifypixel.outbrain.com/pixel?mid=" + n.marketerId + "&" + A({
                            dl: n.dl || ""
                        }) + "&bust=" + e()
                    },
                    I = function(n) {
                        var r = n.content && n.content.id || "";
                        (new t).src = "//dr.outbrain.com/pixel?mid=" + n.marketerId + "&pid=" + r + "&bust=" + e()
                    },
                    A = function(e) {
                        var n = [];
                        for (var t in e) e.hasOwnProperty(t) && n.push(t + "=" + encodeURIComponent(e[t]));
                        return n.join("&")
                    },
                    _ = function(e) {
                        var n = {};
                        for (var t in e) n[t] = e[t];
                        return n
                    };
                return function() {
                    var e = arguments;
                    if (!e[1]) throw new Error("can't dispatch pixel, event name is missing");
                    var t, r = e[0],
                        o = e[2] && "object" == typeof e[2] ? e[2] : {};
                    for (!1 === c(d.marketerId) && (d.marketerId = [d.marketerId]), t = 0; t < d.marketerId.length; t++) switch (o.marketerId = d.marketerId[t], o.obApiVersion = d.version, o.name = e[1].replace(/ /g, "-"), o.dl = n(), r) {
                        case "track":
                            v(o, r), g(o);
                            break;
                        default:
                            l(l.LOG_TYPES.ERROR, "Command type " + r + " is not recognized", o.name)
                    }
                }
            }();
        obApi.dispatch = f;
        var m = function() {
                var e = 0;
                return {
                    checkHasConsent: function(n) {
                        var t = function() {
                                clearTimeout(e), window.removeEventListener ? window.removeEventListener("message", r, !1) : window.detachEvent && window.detachEvent("message", r, !1), n.apply(n, arguments)
                            },
                            r = function(e) {
                                var n;
                                try {
                                    n = e && "string" == typeof e.data ? JSON.parse(e.data) : e.data
                                } catch (e) {
                                    t(!0)
                                }
                                n && n.__cmpReturn && i(t, n.returnValue, n.success)
                            },
                            o = function(e) {
                                if (!e) return !0;
                                var n = !0;
                                for (var t in e)
                                    if (e.hasOwnProperty(t) && (n = !1, e[t])) return !0;
                                return !!n
                            },
                            i = function(e, n, t) {
                                if ((!t || !n || !n.vendorConsents || void 0 === n.vendorConsents[164] || !0 === n.vendorConsents[164]) && o(n.purposeConsents)) return e(!0);
                                e(!1)
                            };
                        try {
                            if (e = setTimeout(function() {
                                    t.call(n, !0)
                                }, 500), window.__cmp) ! function(e) {
                                "function" == typeof window.__cmp ? window.__cmp("getVendorConsents", [164], function(n, t) {
                                    i(e, n, t)
                                }) : e(!0)
                            }(t);
                            else {
                                var a, c = window;
                                try {
                                    for (; !a && (c.frames.__cmpLocator && (a = c), c !== window.top);) c = c.parent
                                } catch (e) {
                                    a = window.top
                                }
                                if (window.addEventListener ? window.addEventListener("message", r, !1) : window.attachEvent && window.attachEvent("message", r, !1), !a) return void t({
                                    msg: "CMP not found"
                                }, !1);
                                var u = {
                                    __cmpCall: {
                                        command: "getVendorConsents",
                                        parameter: [164],
                                        callId: "obamplify"
                                    }
                                };
                                a.postMessage(u, "*")
                            }
                        } catch (e) {
                            throw t(!0), e
                        }
                    }
                }
            }(),
            l = (function() {
                var n;
                if (r.pushState && r.replaceState && e.addEventListener) {
                    var t = function() {
                        o.href !== n && (n = o.href, obApi("track", "PAGE_VIEW"))
                    };
                    a(r, "pushState", t), a(r, "replaceState", t), e.addEventListener("popstate", t, !1)
                }
            }(), function() {
                var n = e.postMessage || i,
                    t = function(e, t, r) {
                        n({
                            action: "log",
                            type: e,
                            message: t,
                            name: r ? r.replace(/ /g, "-") : ""
                        }, "*")
                    };
                return t.LOG_TYPES = {
                    LOG: "log",
                    WARNING: "warning",
                    INFO: "info",
                    ERROR: "error"
                }, t
            }()),
            v = function() {
                var e = {
                        USD: 1,
                        CAD: 1,
                        EUR: 1,
                        GBP: 1,
                        ILS: 1,
                        AUD: 1,
                        MXN: 1,
                        BRL: 1,
                        SEK: 1,
                        SGD: 1,
                        RUB: 1,
                        NZD: 1,
                        INR: 1,
                        JPY: 1,
                        PHP: 1,
                        CHF: 1
                    },
                    n = new RegExp("^[A-Za-z0-9]+[A-Za-z0-9-]*$"),
                    t = new RegExp("^[0-9]+[.0-9]*$");
                return function(r, o) {
                    var i = r.contentType === u.PRODUCT,
                        a = r.content && r.content.id,
                        c = a && ("number" == typeof a || "string" == typeof a);
                    return i && !c ? (l(l.LOG_TYPES.WARNING, "content id is not string or number", r.name), !1) : r.orderValue && !r.currency ? (l(l.LOG_TYPES.WARNING, "Order value reported but no currency is declared", r.name), !1) : r.currency && !e.hasOwnProperty(r.currency) ? (l(l.LOG_TYPES.WARNING, "Currency not recognized", r.name), !1) : r.orderValue && !t.test(r.orderValue) ? (l(l.LOG_TYPES.WARNING, "Order value can only be a positive number", r.name), !1) : "PAGE_VIEW" === r.name || n.test(r.name) ? !("PAGE_VIEW" !== r.name && r.name.length > 100) || (l(l.LOG_TYPES.WARNING, "Event name length cannot exceed 100 characters", r.name), !1) : (l(l.LOG_TYPES.WARNING, "Event Name invalid", r.name), !1)
                }
            }();
        ! function() {
            for (var e = !1; d.queue.length;) {
                var n = d.queue.shift();
                if ("PAGE_VIEW" === n[1] && !n[2]) {
                    if (e) continue;
                    e = !0
                }
                d.dispatch.apply(d, n)
            }
        }()
    }(window, document, Image, history, location)
} catch (e) {
    (new Image).src = "//tr.outbrain.com/log?obApiVersion=" + obApi.version + "&msg=" + encodeURIComponent('{"error":"LOAD", "obApiVersion": ' + obApi.version + ', "marketerID": ' + obApi.marketerId + ', "referrer": ' + document.referrer + ', "extra": {"name":"' + e.name + '","line":"' + (e.lineNumber || e.line) + '","script":"' + (e.fileName || e.sourceURL || e.script) + '","stack":"' + (e.stackTrace || e.stack) + '","message":"' + e.message + '"}}')
}