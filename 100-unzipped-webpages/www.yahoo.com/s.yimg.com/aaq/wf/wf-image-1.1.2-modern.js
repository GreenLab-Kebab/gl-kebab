! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("wafer-image", [], t) : "object" == typeof exports ? exports["wafer-image"] = t() : (e.wafer = e.wafer || {}, e.wafer.wafers = e.wafer.wafers || {}, e.wafer.wafers["wafer-image"] = t())
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

            function a(e, t) {
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

            function s(e, t, r) {
                r && e.setAttribute("srcset", r), e.src = t
            }

            function i(e, t, r) {
                var o = e.getAttribute(r);
                o && (e.setAttribute(t, o), e.removeAttribute(r))
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                },
                l = function() {
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
                u = function e(t, r, o) {
                    null === t && (t = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(t, r);
                    if (void 0 === n) {
                        var a = Object.getPrototypeOf(t);
                        return null === a ? void 0 : e(a, r, o)
                    }
                    if ("value" in n) return n.value;
                    var s = n.get;
                    if (void 0 !== s) return s.call(o)
                },
                f = window.wafer,
                p = f.constants,
                d = f.utils,
                v = d.bindEvent,
                m = d.convertNodeListToArray,
                y = d.each,
                b = d.isNodeName,
                g = d.unbindEvent,
                w = p.ATTR_PREFIX,
                h = window.wafer.controllers.WaferLazyController,
                _ = window.wafer.base,
                O = function(e) {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = e.root,
                            a = void 0 === r ? document : r;
                        o(this, t);
                        var s = t.prototype.configs,
                            i = s.nativeClass,
                            l = s.selector,
                            u = s.separator,
                            f = s.srcset,
                            p = s.successClass,
                            d = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                                root: a,
                                selector: l,
                                successClass: p
                            }));
                        return d._options = c({}, d._options, {
                            defaultOffsetX: 0,
                            defaultOffsetY: 500,
                            nativeClass: i,
                            separator: u,
                            srcset: f
                        }), d.sync(), d
                    }
                    return a(t, e), l(t, [{
                        key: "nativeLazyLoadElement",
                        value: function(e) {
                            var t = this._getImageMetaWithType(e),
                                r = t.type;
                            if (r) {
                                var o = this._options,
                                    n = o.src,
                                    a = o.srcset,
                                    s = o.nativeClass,
                                    c = o.selector;
                                e.setAttribute("loading", "lazy"), e.classList.remove(c.replace(".", "")), e.classList.add(s), e.removeAttribute(n), e.removeAttribute(a), "picture" === r && y(m(e.parentNode.getElementsByTagName("source")), function(e) {
                                    i(e, "srcset", a)
                                }), this._addEventsToElement(e, e, "native", t)
                            }
                        }
                    }, {
                        key: "loadElement",
                        value: function(e, t) {
                            if (this._shouldLoadElement(e, t)) {
                                var r = this._getImageMetaWithType(e),
                                    o = r.type;
                                if (!o) return;
                                var n = this._options.srcset,
                                    a = new Image;
                                "picture" === o && (a = e, y(m(e.parentNode.getElementsByTagName("source")), function(e) {
                                    i(e, "srcset", n)
                                })), this._addEventsToElement(e, a, "default", r)
                            }
                        }
                    }, {
                        key: "_itemLoaded",
                        value: function(e) {
                            u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_itemLoaded", this).call(this, e);
                            var r = this._options.srcset;
                            e.removeAttribute(r)
                        }
                    }, {
                        key: "_addEventsToElement",
                        value: function(e, t, r, o) {
                            var n = this,
                                a = o.elemSrc,
                                i = o.elemSrcset,
                                c = o.fallbackSrc,
                                l = o.type,
                                u = this._options,
                                f = u.error,
                                p = u.errorClass,
                                d = u.src,
                                m = u.successClass,
                                y = function r() {
                                    f && f(e, "invalid"), e.classList.add(p), c && (e.classList.add("wafer-img-fallback"), e.src = c), _.emitError({
                                        elem: e,
                                        meta: {
                                            src: d
                                        },
                                        name: "WaferImage",
                                        stack: {}
                                    }), g(t, "error", r), g(t, "load", b)
                                },
                                b = function o() {
                                    "native" !== r ? ("image" === l || "picture" === l ? s(e, a, i) : e.style.backgroundImage = 'url("' + a + '")', n._itemLoaded(e)) : e.classList.add(m), g(t, "error", y), g(t, "load", o)
                                };
                            v(t, "error", y), v(t, "load", b), s(t, a, i)
                        }
                    }, {
                        key: "_getImageMetaWithType",
                        value: function(e) {
                            var t = this._options,
                                r = t.isRetina,
                                o = t.separator,
                                n = t.src,
                                a = t.srcset,
                                s = e.getAttribute(n),
                                i = e.getAttribute(w + "fallback-src");
                            if (s) {
                                var c = s.split(o),
                                    l = c[r && c.length > 1 ? 1 : 0],
                                    u = e.getAttribute(a),
                                    f = e.tagName.toLowerCase(),
                                    p = "img" === f,
                                    d = e.parentNode,
                                    v = d && b(d, "picture");
                                if (p || void 0 === e.src) return v ? {
                                    elemSrc: l,
                                    elemSrcset: u,
                                    fallbackSrc: i,
                                    type: "picture"
                                } : {
                                    elemSrc: l,
                                    elemSrcset: u,
                                    fallbackSrc: i,
                                    type: p ? "image" : f
                                }
                            }
                            return {}
                        }
                    }]), t
                }(h);
            O.prototype.configs = {
                selector: ".wafer-img",
                separator: "|",
                srcset: "data-wf-srcset",
                nativeClass: "wafer-img-native",
                successClass: "wafer-img-loaded",
                allowPrefetch: !0
            };
            var j = O;
            t.default = new j({
                selector: j.prototype.configs.selector
            })
        }
    })
});