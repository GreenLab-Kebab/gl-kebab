(window.webpackJsonpBoomer = window.webpackJsonpBoomer || []).push([
    ["npm.setimmediate"], {
        HtNaIRzYkf: function(e, t, n) {
            (function(e, t) {
                ! function(e, n) {
                    "use strict";
                    if (!e.setImmediate) {
                        var a, s, o, i, c, r = 1,
                            f = {},
                            u = !1,
                            l = e.document,
                            d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                        d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? a = function(e) {
                            t.nextTick(function() {
                                p(e)
                            })
                        } : ! function() {
                            if (e.postMessage && !e.importScripts) {
                                var t = !0,
                                    n = e.onmessage;
                                return e.onmessage = function() {
                                    t = !1
                                }, e.postMessage("", "*"), e.onmessage = n, t
                            }
                        }() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(e) {
                            p(e.data)
                        }, a = function(e) {
                            o.port2.postMessage(e)
                        }) : l && "onreadystatechange" in l.createElement("script") ? (s = l.documentElement, a = function(e) {
                            var t = l.createElement("script");
                            t.onreadystatechange = function() {
                                p(e), t.onreadystatechange = null, s.removeChild(t), t = null
                            }, s.appendChild(t)
                        }) : a = function(e) {
                            setTimeout(p, 0, e)
                        } : (i = "setImmediate$" + Math.random() + "$", c = function(t) {
                            t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(i) && p(+t.data.slice(i.length))
                        }, e.addEventListener ? e.addEventListener("message", c, !1) : e.attachEvent("onmessage", c), a = function(t) {
                            e.postMessage(i + t, "*")
                        }), d.setImmediate = function(e) {
                            "function" != typeof e && (e = new Function("" + e));
                            for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                            var s = {
                                callback: e,
                                args: t
                            };
                            return f[r] = s, a(r), r++
                        }, d.clearImmediate = m
                    }

                    function m(e) {
                        delete f[e]
                    }

                    function p(e) {
                        if (u) setTimeout(p, 0, e);
                        else {
                            var t = f[e];
                            if (t) {
                                u = !0;
                                try {
                                    ! function(e) {
                                        var t = e.callback,
                                            a = e.args;
                                        switch (a.length) {
                                            case 0:
                                                t();
                                                break;
                                            case 1:
                                                t(a[0]);
                                                break;
                                            case 2:
                                                t(a[0], a[1]);
                                                break;
                                            case 3:
                                                t(a[0], a[1], a[2]);
                                                break;
                                            default:
                                                t.apply(n, a)
                                        }
                                    }(t)
                                } finally {
                                    m(e), u = !1
                                }
                            }
                        }
                    }
                }("undefined" == typeof self ? void 0 === e ? this : e : self)
            }).call(this, n("qv/MW4HMFk"), n("gsGbMhucZM"))
        }
    }
]);