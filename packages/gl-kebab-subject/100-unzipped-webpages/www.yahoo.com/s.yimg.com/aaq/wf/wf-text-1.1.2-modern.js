! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("wafer-text", [], t) : "object" == typeof exports ? exports["wafer-text"] = t() : (e.wafer = e.wafer || {}, e.wafer.wafers = e.wafer.wafers || {}, e.wafer.wafers["wafer-text"] = t())
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(o) {
            if (r[o]) return r[o].exports;
            var n = r[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(n.exports, n, n.exports, t), n.l = !0, n.exports
        }
        var r = {};
        return t.m = e, t.c = r, t.d = function(e, r, o) {
            t.o(e, r) || Object.defineProperty(e, r, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }, t.n = function(e) {
            var r = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(r, "a", r), r
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "https://s.yimg.com/aaq/wf/", t(t.s = "./src/entry.js")
    }({
        "./src/entry.js": function(e, t, r) {
            "use strict";

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function n(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function f(e, t) {
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

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function c(e, t) {
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
            var u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                },
                s = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, r, o) {
                        return r && e(t.prototype, r), o && e(t, o), t
                    }
                }(),
                l = ["text"],
                p = window.wafer.WaferBaseClass,
                y = function(e) {
                    function t(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            f = r.selector;
                        o(this, t);
                        var i = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, {
                            selector: f
                        }, {
                            STATE_ATTRS: l
                        }));
                        return i._util = u({}, i._util, {
                            elem: e
                        }), i.stateDidUpdate(), i
                    }
                    return f(t, e), s(t, [{
                        key: "stateDidUpdate",
                        value: function() {
                            var e = this._util.text;
                            if (void 0 !== e) {
                                this._util.elem.innerHTML = e
                            }
                        }
                    }]), t
                }(p),
                b = y,
                w = window.wafer.controllers.WaferBaseController,
                d = function(e) {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = e.root,
                            o = void 0 === r ? document : r,
                            n = e.selector;
                        i(this, t);
                        var f = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                            root: o,
                            selector: n,
                            props: {
                                selector: n
                            },
                            WaferClass: b
                        }));
                        return f.sync(), f
                    }
                    return c(t, e), t
                }(w),
                h = d;
            t.default = new h({
                selector: ".wafer-text"
            })
        }
    })
});