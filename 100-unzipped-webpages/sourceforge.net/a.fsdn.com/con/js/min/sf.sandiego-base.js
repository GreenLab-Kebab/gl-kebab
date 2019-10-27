/*! audero-sticky.js 0.3.2 | Aurelio De Rosa (@AurelioDeRosa) | MIT/GPL-3.0 Licensed */
(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.Sticky = f()
    }
})(function() {
    var define, module, exports;
    return (function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f
                }
                var l = n[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n ? n : e)
                }, l, l.exports, e, t, n, r)
            }
            return n[o].exports
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s
    })({
        1: [function(require, module, exports) {
            "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) ? ! function() {
                "use strict";
                var t = document.createElement("_");
                if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
                    var e = function(t) {
                        var e = DOMTokenList.prototype[t];
                        DOMTokenList.prototype[t] = function(t) {
                            var n, i = arguments.length;
                            for (n = 0; i > n; n++) t = arguments[n], e.call(this, t)
                        }
                    };
                    e("add"), e("remove")
                }
                if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
                    var n = DOMTokenList.prototype.toggle;
                    DOMTokenList.prototype.toggle = function(t, e) {
                        return 1 in arguments && !this.contains(t) == !e ? e : n.call(this, t)
                    }
                }
                t = null
            }() : ! function(t) {
                "use strict";
                if ("Element" in t) {
                    var e = "classList",
                        n = "prototype",
                        i = t.Element[n],
                        s = Object,
                        r = String[n].trim || function() {
                            return this.replace(/^\s+|\s+$/g, "")
                        },
                        o = Array[n].indexOf || function(t) {
                            for (var e = 0, n = this.length; n > e; e++)
                                if (e in this && this[e] === t) return e;
                            return -1
                        },
                        c = function(t, e) {
                            this.name = t, this.code = DOMException[t], this.message = e
                        },
                        a = function(t, e) {
                            if ("" === e) throw new c("SYNTAX_ERR", "An invalid or illegal string was specified");
                            if (/\s/.test(e)) throw new c("INVALID_CHARACTER_ERR", "String contains an invalid character");
                            return o.call(t, e)
                        },
                        l = function(t) {
                            for (var e = r.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], i = 0, s = n.length; s > i; i++) this.push(n[i]);
                            this._updateClassName = function() {
                                t.setAttribute("class", this.toString())
                            }
                        },
                        u = l[n] = [],
                        h = function() {
                            return new l(this)
                        };
                    if (c[n] = Error[n], u.item = function(t) {
                            return this[t] || null
                        }, u.contains = function(t) {
                            return t += "", -1 !== a(this, t)
                        }, u.add = function() {
                            var t, e = arguments,
                                n = 0,
                                i = e.length,
                                s = !1;
                            do t = e[n] + "", -1 === a(this, t) && (this.push(t), s = !0); while (++n < i);
                            s && this._updateClassName()
                        }, u.remove = function() {
                            var t, e, n = arguments,
                                i = 0,
                                s = n.length,
                                r = !1;
                            do
                                for (t = n[i] + "", e = a(this, t); - 1 !== e;) this.splice(e, 1), r = !0, e = a(this, t); while (++i < s);
                            r && this._updateClassName()
                        }, u.toggle = function(t, e) {
                            t += "";
                            var n = this.contains(t),
                                i = n ? e !== !0 && "remove" : e !== !1 && "add";
                            return i && this[i](t), e === !0 || e === !1 ? e : !n
                        }, u.toString = function() {
                            return this.join(" ")
                        }, s.defineProperty) {
                        var f = {
                            get: h,
                            enumerable: !0,
                            configurable: !0
                        };
                        try {
                            s.defineProperty(i, e, f)
                        } catch (d) {
                            -2146823252 === d.number && (f.enumerable = !1, s.defineProperty(i, e, f))
                        }
                    } else s[n].__defineGetter__ && i.__defineGetter__(e, h)
                }
            }(window.self));
        }, {}],
        2: [function(require, module, exports) {
            "use strict";

            function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function isPassiveEventListenerSupported() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    window.addEventListener("", null, t)
                } catch (n) {}
                return e
            }

            function getStickyMargins(e) {
                var t = void 0,
                    n = void 0;
                return e.element.classList.add(e.settings.activeClass), t = window.getComputedStyle(e.element), n = {
                    marginBottom: t.marginBottom,
                    marginTop: t.marginTop
                }, e.element.classList.remove(e.settings.activeClass), n
            }

            function getComputedZIndex(e) {
                var t = e.style.position;
                e.style.position = "relative";
                var n = Number(window.getComputedStyle(e).zIndex);
                return e.style.position = t, isNaN(n) ? void 0 : n
            }

            function getZIndex(e, t) {
                var n = getComputedZIndex(e);
                if (void 0 !== n) return n;
                var o = [].slice.call(document.querySelectorAll(t));
                return o.indexOf(e) + 1
            }

            function convertNumbersToPixels(e) {
                var t = {};
                for (var n in e) t[n] = e[n] + "px";
                return t
            }

            function cleanUp(e) {
                var t = store.getData(e.element);
                _style2["default"].resetStyleProperties(e.element.style, properties.concat(["marginTop", "marginBottom", "top", "bottom"])), e.element.style.position = t.position, t.placeholder && t.placeholder.parentNode && t.placeholder.parentNode.removeChild(t.placeholder)
            }

            function calculateBoundaries(e, t) {
                var n = {
                        start: 0,
                        end: 0
                    },
                    o = window.getComputedStyle(e),
                    r = e.parentNode.getBoundingClientRect();
                return "auto" !== o.top ? (n.start = e.getBoundingClientRect().top - parseFloat(o.top), n.end = r.bottom - (parseFloat(t.marginBottom) || 0)) : (n.start = e.getBoundingClientRect().bottom + parseFloat(o.bottom), n.end = r.top + (parseFloat(t.marginTop) || 0)), n.start += window.pageYOffset, n.end += window.pageYOffset, n
            }

            function updatePlaceholderStyle(e) {
                var t = e.element.getBoundingClientRect(),
                    n = store.getData(e.element, "placeholder");
                _style2["default"].copyStyleProperties(n.style, window.getComputedStyle(e.element), ["top", "bottom", "marginTop", "marginBottom", "marginLeft", "marginRight"]), _style2["default"].copyStyleProperties(n.style, convertNumbersToPixels(t), ["width", "height", "left"])
            }

            function onScroll(e) {
                function t() {
                    var t = store.getData(e.element);
                    updatePlaceholderStyle(e), t.position = e.element.style.position, store.setData(e.element, t), _style2["default"].copyStyleProperties(e.element.style, {
                        position: "fixed"
                    }), _style2["default"].copyStyleProperties(e.element.style, t.placeholder.style, properties), e.element.parentNode.insertBefore(t.placeholder, e.element), _eventEmitter2["default"].fireEvent("stickystart", e.element), e.element.classList.add(e.settings.activeClass)
                }

                function n() {
                    cleanUp(e), _eventEmitter2["default"].fireEvent("stickyend", e.element), e.element.classList.remove(e.settings.activeClass)
                }

                function o(t) {
                    var n = store.getData(e.element).placeholder;
                    return t ? calculateBoundaries(n, s) : calculateBoundaries(e.element, s)
                }

                function r() {
                    var r = !!store.getData(e.element).placeholder.parentNode,
                        i = o(r),
                        s = parseFloat(window.getComputedStyle(e.element).height) || 0,
                        l = i.end - s - window.pageYOffset,
                        d = window.pageYOffset >= i.start && window.pageYOffset <= i.end;
                    d ? (r || t(), e.element.style.top = l - a >= 0 ? "" : l + "px") : r && n()
                }

                function i() {
                    var r = !!store.getData(e.element).placeholder.parentNode,
                        i = o(r),
                        s = parseFloat(window.getComputedStyle(e.element).height) || 0,
                        l = window.pageYOffset + window.innerHeight,
                        d = i.end + s - l,
                        c = l <= i.start && l >= i.end;
                    c ? (r || t(), e.element.style.bottom = 0 >= d + a ? "" : -d + "px") : r && n()
                }
                var s = getStickyMargins(e),
                    l = window.getComputedStyle(e.element),
                    a = "auto" !== l.top ? parseFloat(l.top) : parseFloat(l.bottom);
                return "auto" !== l.top ? r : i
            }

            function onResize(e) {
                return function() {
                    e.destroy(), e.init(), store.getData(e.element, "handlers").scroll()
                }
            }

            function bindEvents(e) {
                var t = store.getData(e.element, "handlers");
                window.addEventListener("load", t.scroll), window.addEventListener("scroll", t.scroll, isPassiveEventListenerSupported() ? scrollOptions : !1), window.addEventListener("resize", t.resize)
            }

            function unbindEvents(e) {
                var t = store.getData(e.element, "handlers");
                window.removeEventListener("load", t.scroll), window.removeEventListener("scroll", t.scroll, isPassiveEventListenerSupported() ? scrollOptions : !1), window.removeEventListener("resize", t.resize)
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _extends = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                _createClass = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t
                    }
                }();
            require("classlist-polyfill");
            var _eventEmitter = require("./helpers/event-emitter"),
                _eventEmitter2 = _interopRequireDefault(_eventEmitter),
                _store = require("./helpers/store"),
                _store2 = _interopRequireDefault(_store),
                _style = require("./helpers/style"),
                _style2 = _interopRequireDefault(_style),
                defaults = {
                    selector: ".sticky",
                    activeClass: "sticky--active"
                },
                scrollOptions = {
                    passive: !0
                },
                properties = ["width", "height", "left", "marginLeft", "marginRight", "zIndex"],
                namespace = "auderosticky",
                store = new _store2["default"](namespace),
                Sticky = function() {
                    function e(t) {
                        var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        _classCallCheck(this, e), this.element = t, this.settings = _extends({}, defaults, n)
                    }
                    return _createClass(e, [{
                        key: "init",
                        value: function() {
                            if (store.getData(this.element)) throw new Error("This element has already been initialized");
                            var e = document.createElement(this.element.nodeName);
                            store.setData(this.element, {
                                placeholder: e,
                                handlers: {
                                    scroll: onScroll(this),
                                    resize: onResize(this)
                                },
                                position: this.element.style.position
                            }), _style2["default"].copyStyleProperties(e.style, {
                                visibility: "hidden",
                                zIndex: getZIndex(this.element, this.settings.selector)
                            }), updatePlaceholderStyle(this), bindEvents(this), store.getData(this.element, "handlers").scroll()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            cleanUp(this), unbindEvents(this), store.removeData(this.element)
                        }
                    }], [{
                        key: "isFeatureSupported",
                        value: function() {
                            var e = ["ms", "webkit"],
                                t = "position:sticky;",
                                n = document.createElement("div");
                            return e.forEach(function(e) {
                                t += "position:-" + e + "-sticky;"
                            }), n.style.cssText = t, !!n.style.position
                        }
                    }, {
                        key: "autoInit",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                            t = _extends({}, defaults, t), [].forEach.call(document.querySelectorAll(t.selector), function(n) {
                                var o = new e(n, t);
                                o.init()
                            })
                        }
                    }]), e
                }();
            exports["default"] = Sticky, module.exports = exports["default"];
        }, {
            "./helpers/event-emitter": 3,
            "./helpers/store": 4,
            "./helpers/style": 5,
            "classlist-polyfill": 1
        }],
        3: [function(require, module, exports) {
            "use strict";

            function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _createClass = function() {
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
                EventEmitter = function() {
                    function e() {
                        _classCallCheck(this, e)
                    }
                    return _createClass(e, null, [{
                        key: "namespaceEvent",
                        value: function(t) {
                            return e.namespace + "." + t
                        }
                    }, {
                        key: "fireEvent",
                        value: function(e, t) {
                            var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                                r = document.createEvent("Event");
                            r.initEvent(e, !0, !0), Object.getOwnPropertyNames(n).forEach(function(e) {
                                if (r[e] = n[e], r[e] !== n[e]) throw new TypeError("Cannot set a property which has only a getter")
                            }), t.dispatchEvent(r)
                        }
                    }]), e
                }();
            exports["default"] = EventEmitter, module.exports = exports["default"];
        }, {}],
        4: [function(require, module, exports) {
            "use strict";

            function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _createClass = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t
                    }
                }(),
                Store = function() {
                    function e(t) {
                        _classCallCheck(this, e), this.namespace = t
                    }
                    return _createClass(e, [{
                        key: "getData",
                        value: function(e, t) {
                            return e[this.namespace] && t ? e[this.namespace][t] : e[this.namespace]
                        }
                    }, {
                        key: "setData",
                        value: function(e, t) {
                            return e[this.namespace] || (e[this.namespace] = {}), e[this.namespace] = t, this
                        }
                    }, {
                        key: "removeData",
                        value: function(e) {
                            return delete e[this.namespace], this
                        }
                    }]), e
                }();
            exports["default"] = Store, module.exports = exports["default"];
        }, {}],
        5: [function(require, module, exports) {
            "use strict";

            function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _createClass = function() {
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
                Style = function() {
                    function e() {
                        _classCallCheck(this, e)
                    }
                    return _createClass(e, null, [{
                        key: "resetStyleProperties",
                        value: function(e, t) {
                            t.forEach(function(t) {
                                e[t] = ""
                            })
                        }
                    }, {
                        key: "copyStyleProperties",
                        value: function(e, t) {
                            var n = arguments.length <= 2 || void 0 === arguments[2] ? Object.keys(t) : arguments[2];
                            n.forEach(function(n) {
                                e[n] = t[n]
                            })
                        }
                    }]), e
                }();
            exports["default"] = Style, module.exports = exports["default"];
        }, {}]
    }, {}, [2])(2)
});


//# sourceMappingURL=audero-sticky.min.js.map

SF.Ads.fancyStickify = new SF.FancyStickify($(".sticky"));
document.addEventListener("touchstart", function() {}, false);
if (!Sticky.isFeatureSupported()) {
    Sticky.autoInit()
}
$(".search-toggle").click(function() {
    $(".search").toggleClass("sticky-search-open");
    $(".search-toggle-when-stuck").toggleClass("sticky-search-open");
    $(".search input").focus()
});
$("select.use-placeholder-color").on("change", function() {
    $(this).toggleClass("first-option-selected", this.value === "")
}).trigger("change");

function escape_html(a) {
    return $("<i></i>").text(a).html()
}
$(function() {
    var b = SF.cdn + "/app/directory_fixed_suggestions?v2&" + (new Date()).toISOString().slice(0, 10);
    var a = $(".typeahead__container input[name=q]");
    if (!a.length) {
        return
    }
    var d = localStorage.getItem("TYPEAHEAD_input:Business Categories");
    if (d) {
        var g = false;
        try {
            if (JSON.parse(d).data.length < 10) {
                g = true
            }
        } catch (f) {
            g = true
        }
        if (g) {
            localStorage.removeItem("TYPEAHEAD_input:Business Categories");
            localStorage.removeItem("TYPEAHEAD_input:Open Source Categories")
        }
    }

    function c(h, l, j, i) {
        var k = $(".typeahead__group-" + l + ":last", h);
        var e = $("<li>", {
            "class": "typeahead__item"
        }).append($("<a>", {
            href: i + j
        }).append($("<span>", {
            "class": "typeahead__display"
        }).text('Full search for "' + j + '" ...')));
        if (k.text() === "full-search-placeholder") {
            k.replaceWith(e)
        } else {
            k.after(e)
        }
    }
    a.each(function() {
        var h = $(this);
        var e = {
            ttl: 24 * 60 * 60 * 1000,
            group: true,
            maxItem: 0,
            maxItemPerGroup: 4,
            cancelButton: false,
            emptyTemplate: "<p><p>No quick results found.<p>Press ENTER to do a full search.",
            href: "{{url}}",
            callback: {
                onLayoutBuiltBefore: function(m, n, k, l) {
                    c(l, "open-source-projects", n, "/directory/?q=");
                    c(l, "business-software", n, "/software/?q=");
                    c(l, "games", n, "/software/games/?q=");
                    return l
                },
                onPopulateSource: function(l, m, o, n) {
                    if (n === "response.docs") {
                        for (var k = 0; k < m.length; k++) {
                            m[k].name = escape_html(m[k].name)
                        }
                    }
                    return m
                }
            }
        };
        var j = h.closest(".typeahead__container");
        var i = {
            "Open Source Categories": {
                dynamic: false,
                cache: true,
                ajax: {
                    url: b,
                    path: "opensource_categories"
                }
            },
            "Open Source Projects": {
                dynamic: true,
                cache: false,
                filter: false,
                ajax: {
                    url: "/proxy-api/search/suggest-project?q={{query}}",
                    path: "response.docs"
                },
                data: [{
                    name: "full-search-placeholder"
                }],
                href: "{{project_url}}",
                display: ["name"]
            },
            "Business Categories": {
                dynamic: false,
                cache: true,
                ajax: {
                    url: b,
                    path: "commercial_categories"
                }
            },
            "Business Software": {
                dynamic: true,
                cache: false,
                filter: false,
                ajax: {
                    url: "/proxy-api/search/suggest-commercial?q={{query}}" + (j.data("commercial-hidden") ? "&hidden=true" : ""),
                    path: "response.docs"
                },
                data: [{
                    name: "full-search-placeholder"
                }],
                href: "{{project_url}}",
                display: ["name"]
            },
            "Game Categories": {
                dynamic: false,
                cache: true,
                ajax: {
                    url: b,
                    path: "commercial_games_categories"
                }
            },
            Games: {
                dynamic: true,
                cache: false,
                filter: false,
                ajax: {
                    url: "/proxy-api/search/suggest-comm-games?q={{query}}" + (j.data("commercial-hidden") ? "&hidden=true" : ""),
                    path: "response.docs"
                },
                data: [{
                    name: "full-search-placeholder"
                }],
                href: "{{project_url}}",
                display: ["name"]
            }
        };
        if (j.data("commercial-only")) {
            delete i["Open Source Categories"];
            delete i["Open Source Projects"];
            delete i["Game Categories"];
            delete i.Games
        } else {
            if (j.data("oss-only")) {
                delete i["Business Categories"];
                delete i["Business Software"];
                delete i["Game Categories"];
                delete i.Games
            } else {
                if (j.data("games-only")) {
                    delete i["Open Source Categories"];
                    delete i["Open Source Projects"];
                    delete i["Business Categories"];
                    delete i["Business Software"]
                }
            }
        }
        e.source = i;
        if (j.data("commercial-only")) {
            e.groupOrder = ["Business Categories", "Business Software"]
        } else {
            if (j.data("oss-only")) {
                e.groupOrder = ["Open Source Categories", "Open Source Projects"]
            } else {
                if (j.data("games-only")) {
                    e.groupOrder = ["Game Categories", "Games"]
                } else {
                    if (j.data("commercial-default")) {
                        e.groupOrder = ["Business Categories", "Business Software", "Open Source Categories", "Open Source Projects"]
                    } else {
                        e.groupOrder = ["Open Source Categories", "Open Source Projects", "Business Categories", "Business Software"]
                    }
                }
            }
        }
        h.typeahead(e)
    })
});
var $stickyHeader = $(".l-header-nav.sticky");
if ($stickyHeader.length) {
    SF._scroll_listener_for_hash = function(a) {
        document.removeEventListener("scroll", SF._scroll_listener_for_hash);
        if (SF.anchorOffsetActive) {
            $(window).trigger("hashchange")
        }
    };
    document.addEventListener("scroll", SF._scroll_listener_for_hash);
    (function(a, d, b) {
        var e = !!(d && d.pushState);
        var c = {
            ANCHOR_REGEX: /^#(?!md_)[^ ]+$/,
            init: function() {
                this.scrollToCurrent();
                $(window).on("hashchange", $.proxy(this, "scrollToCurrent"));
                $("body").on("click", "a", $.proxy(this, "delegateAnchors"))
            },
            getFixedOffset: function() {
                return $stickyHeader.height()
            },
            scrollIfAnchor: function(f, h) {
                var g, i;
                if (!this.ANCHOR_REGEX.test(f)) {
                    return false
                }
                var j = f.slice(1);
                g = a.getElementById(j) || a.getElementsByName(j)[0];
                if (g) {
                    i = $(g).offset().top - this.getFixedOffset();
                    SF.anchorOffsetActive = true;
                    $("html, body").scrollTop(i);
                    if (e && h) {
                        d.pushState({}, a.title, b.pathname + f)
                    }
                }
                return !!g
            },
            scrollToCurrent: function(f) {
                if (this.scrollIfAnchor(window.location.hash) && f) {
                    f.preventDefault()
                }
            },
            delegateAnchors: function(g) {
                var f = g.target;
                if (this.scrollIfAnchor(f.getAttribute("href"), true)) {
                    g.preventDefault()
                }
            }
        };
        $(a).ready($.proxy(c, "init"))
    })(window.document, window.history, window.location)
};
$(function() {
    $("#share-project-button").click(function(d) {
        d.preventDefault();
        $(this).remove();
        $(".social-sharing-buttons").removeClass("hide");
        $(".social-sharing-buttons").removeClass("invisible")
    });
    $(".social-sharing-buttons a").on("click", function(h) {
        h.preventDefault();
        var f = this.href;
        var d = this.className === "google" ? 520 : 444,
            g = this.className === "google" ? 390 : 680;
        window.open(f, "sourceforge_social_share", "resizeable, height=" + d + ",width=" + g)
    });
    var c = function() {
        $(this).attr("target", "_blank");
        $(this).addClass("ext-link");
        $(this).append('<span class="sf-linkout-icon">' + SF.linkout_icon + "</span>")
    };
    $("a[data-external], #top_nav a[rel*=nofollow], .features a, a#homepage, .description a").not('[href^="/"]').not('[href^="#"]').not('[href^="."]').not('[href*="sourceforge.net"]').not('[href*=".sourceforge.io"]').not('[href*="sb.sf.net"]').each(c);
    $(".get-updates.button").click(function(d) {
        d.preventDefault()
    });
    if (!$(".ember-application").length && !$('[id*="svelte-"]').length) {
        var a = $(window.location.hash);
        if (a.length > 0 && typeof a.attr("data-reveal") !== typeof undefined && a.attr("data-reveal") !== false) {
            a.foundation("open")
        }
        var b = function() {
            var d = $(window.location.hash);
            d.filter(".psp-section").addClass("is-active")
        };
        b();
        $(window).on("hashchange", b)
    }
    $(document).on("open.zf.reveal", "[data-reveal]", function() {
        var d = $(this);
        d.find("[autofocus]").focus()
    })
});
if ($("body#forge").length && !$("body.legacy_chrome").length) {
    var $sidebarActivate = $("#sidebar-activate");
    var toolName = $("#top_nav_admin li.selected").text().trim();
    $(".btn-label", $sidebarActivate).text(toolName + " Menu");
    $(".btn-arrow-up").toggle();
    $sidebarActivate.on("click", function() {
        $("#sidebar").toggle(500, function() {
            var a = $("#sidebar");
            if (!a.is(":visible")) {
                a.removeAttr("style")
            }
        });
        $(".btn-arrow-down", $sidebarActivate).toggle();
        $(".btn-arrow-up", $sidebarActivate).toggle();
        return false
    })
}
SF.tablesorter_svg_update = function() {
    $("th.usersortable use", this).each(function() {
        var a = $(this);
        var b = a.closest("th.usersortable");
        if (b.hasClass("headerSortDown")) {
            a.attr("xlink:href", "#sort_down")
        } else {
            if (b.hasClass("headerSortUp")) {
                a.attr("xlink:href", "#sort_up")
            } else {
                a.attr("xlink:href", "#sort")
            }
        }
    })
};
(function() {
    var a, b, c, d, e, f, g, h, i = [].slice,
        j = {}.hasOwnProperty,
        k = function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) j.call(b, d) && (a[d] = b[d]);
            return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
        };
    g = function() {}, b = function() {
        function a() {}
        return a.prototype.addEventListener = a.prototype.on, a.prototype.on = function(a, b) {
            return this._callbacks = this._callbacks || {}, this._callbacks[a] || (this._callbacks[a] = []), this._callbacks[a].push(b), this
        }, a.prototype.emit = function() {
            var a, b, c, d, e, f;
            if (d = arguments[0], a = 2 <= arguments.length ? i.call(arguments, 1) : [], this._callbacks = this._callbacks || {}, c = this._callbacks[d])
                for (e = 0, f = c.length; f > e; e++) b = c[e], b.apply(this, a);
            return this
        }, a.prototype.removeListener = a.prototype.off, a.prototype.removeAllListeners = a.prototype.off, a.prototype.removeEventListener = a.prototype.off, a.prototype.off = function(a, b) {
            var c, d, e, f, g;
            if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this;
            if (d = this._callbacks[a], !d) return this;
            if (1 === arguments.length) return delete this._callbacks[a], this;
            for (e = f = 0, g = d.length; g > f; e = ++f)
                if (c = d[e], c === b) {
                    d.splice(e, 1);
                    break
                }
            return this
        }, a
    }(), a = function(a) {
        function c(a, b) {
            var e, f, g;
            if (this.element = a, this.version = c.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), !this.element || null == this.element.nodeType) throw new Error("Invalid dropzone element.");
            if (this.element.dropzone) throw new Error("Dropzone already attached.");
            if (c.instances.push(this), this.element.dropzone = this, e = null != (g = c.optionsForElement(this.element)) ? g : {}, this.options = d({}, this.defaultOptions, e, null != b ? b : {}), this.options.forceFallback || !c.isBrowserSupported()) return this.options.fallback.call(this);
            if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), !this.options.url) throw new Error("No URL provided.");
            if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
            this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, delete this.options.acceptedMimeTypes), this.options.method = this.options.method.toUpperCase(), (f = this.getExistingFallback()) && f.parentNode && f.parentNode.removeChild(f), this.options.previewsContainer !== !1 && (this.previewsContainer = this.options.previewsContainer ? c.getElement(this.options.previewsContainer, "previewsContainer") : this.element), this.options.clickable && (this.clickableElements = this.options.clickable === !0 ? [this.element] : c.getElements(this.options.clickable, "clickable")), this.init()
        }
        var d, e;
        return k(c, a), c.prototype.Emitter = b, c.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], c.prototype.defaultOptions = {
            url: null,
            method: "post",
            withCredentials: !1,
            parallelUploads: 2,
            uploadMultiple: !1,
            maxFilesize: 256,
            paramName: "file",
            createImageThumbnails: !0,
            maxThumbnailFilesize: 10,
            thumbnailWidth: 120,
            thumbnailHeight: 120,
            filesizeBase: 1e3,
            maxFiles: null,
            params: {},
            clickable: !0,
            ignoreHiddenFiles: !0,
            acceptedFiles: null,
            acceptedMimeTypes: null,
            autoProcessQueue: !0,
            autoQueue: !0,
            addRemoveLinks: !1,
            previewsContainer: null,
            hiddenInputContainer: "body",
            capture: null,
            renameFilename: null,
            dictDefaultMessage: "Drop files here to upload",
            dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
            dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
            dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
            dictInvalidFileType: "You can't upload files of this type.",
            dictResponseError: "Server responded with {{statusCode}} code.",
            dictCancelUpload: "Cancel upload",
            dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
            dictRemoveFile: "Remove file",
            dictRemoveFileConfirmation: null,
            dictMaxFilesExceeded: "You can not upload any more files.",
            accept: function(a, b) {
                return b()
            },
            init: function() {
                return g
            },
            forceFallback: !1,
            fallback: function() {
                var a, b, d, e, f, g;
                for (this.element.className = "" + this.element.className + " dz-browser-not-supported", g = this.element.getElementsByTagName("div"), e = 0, f = g.length; f > e; e++) a = g[e], /(^| )dz-message($| )/.test(a.className) && (b = a, a.className = "dz-message");
                return b || (b = c.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(b)), d = b.getElementsByTagName("span")[0], d && (null != d.textContent ? d.textContent = this.options.dictFallbackMessage : null != d.innerText && (d.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm())
            },
            resize: function(a) {
                var b, c, d;
                return b = {
                    srcX: 0,
                    srcY: 0,
                    srcWidth: a.width,
                    srcHeight: a.height
                }, c = a.width / a.height, b.optWidth = this.options.thumbnailWidth, b.optHeight = this.options.thumbnailHeight, null == b.optWidth && null == b.optHeight ? (b.optWidth = b.srcWidth, b.optHeight = b.srcHeight) : null == b.optWidth ? b.optWidth = c * b.optHeight : null == b.optHeight && (b.optHeight = 1 / c * b.optWidth), d = b.optWidth / b.optHeight, a.height < b.optHeight || a.width < b.optWidth ? (b.trgHeight = b.srcHeight, b.trgWidth = b.srcWidth) : c > d ? (b.srcHeight = a.height, b.srcWidth = b.srcHeight * d) : (b.srcWidth = a.width, b.srcHeight = b.srcWidth / d), b.srcX = (a.width - b.srcWidth) / 2, b.srcY = (a.height - b.srcHeight) / 2, b
            },
            drop: function() {
                return this.element.classList.remove("dz-drag-hover")
            },
            dragstart: g,
            dragend: function() {
                return this.element.classList.remove("dz-drag-hover")
            },
            dragenter: function() {
                return this.element.classList.add("dz-drag-hover")
            },
            dragover: function() {
                return this.element.classList.add("dz-drag-hover")
            },
            dragleave: function() {
                return this.element.classList.remove("dz-drag-hover")
            },
            paste: g,
            reset: function() {
                return this.element.classList.remove("dz-started")
            },
            addedfile: function(a) {
                var b, d, e, f, g, h, i, j, k, l, m, n, o;
                if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) {
                    for (a.previewElement = c.createElement(this.options.previewTemplate.trim()), a.previewTemplate = a.previewElement, this.previewsContainer.appendChild(a.previewElement), l = a.previewElement.querySelectorAll("[data-dz-name]"), f = 0, i = l.length; i > f; f++) b = l[f], b.textContent = this._renameFilename(a.name);
                    for (m = a.previewElement.querySelectorAll("[data-dz-size]"), g = 0, j = m.length; j > g; g++) b = m[g], b.innerHTML = this.filesize(a.size);
                    for (this.options.addRemoveLinks && (a._removeLink = c.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), a.previewElement.appendChild(a._removeLink)), d = function(b) {
                            return function(d) {
                                return d.preventDefault(), d.stopPropagation(), a.status === c.UPLOADING ? c.confirm(b.options.dictCancelUploadConfirmation, function() {
                                    return b.removeFile(a)
                                }) : b.options.dictRemoveFileConfirmation ? c.confirm(b.options.dictRemoveFileConfirmation, function() {
                                    return b.removeFile(a)
                                }) : b.removeFile(a)
                            }
                        }(this), n = a.previewElement.querySelectorAll("[data-dz-remove]"), o = [], h = 0, k = n.length; k > h; h++) e = n[h], o.push(e.addEventListener("click", d));
                    return o
                }
            },
            removedfile: function(a) {
                var b;
                return a.previewElement && null != (b = a.previewElement) && b.parentNode.removeChild(a.previewElement), this._updateMaxFilesReachedClass()
            },
            thumbnail: function(a, b) {
                var c, d, e, f;
                if (a.previewElement) {
                    for (a.previewElement.classList.remove("dz-file-preview"), f = a.previewElement.querySelectorAll("[data-dz-thumbnail]"), d = 0, e = f.length; e > d; d++) c = f[d], c.alt = a.name, c.src = b;
                    return setTimeout(function() {
                        return function() {
                            return a.previewElement.classList.add("dz-image-preview")
                        }
                    }(this), 1)
                }
            },
            error: function(a, b) {
                var c, d, e, f, g;
                if (a.previewElement) {
                    for (a.previewElement.classList.add("dz-error"), "String" != typeof b && b.error && (b = b.error), f = a.previewElement.querySelectorAll("[data-dz-errormessage]"), g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.textContent = b);
                    return g
                }
            },
            errormultiple: g,
            processing: function(a) {
                return a.previewElement && (a.previewElement.classList.add("dz-processing"), a._removeLink) ? a._removeLink.textContent = this.options.dictCancelUpload : void 0
            },
            processingmultiple: g,
            uploadprogress: function(a, b) {
                var c, d, e, f, g;
                if (a.previewElement) {
                    for (f = a.previewElement.querySelectorAll("[data-dz-uploadprogress]"), g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push("PROGRESS" === c.nodeName ? c.value = b : c.style.width = "" + b + "%");
                    return g
                }
            },
            totaluploadprogress: g,
            sending: g,
            sendingmultiple: g,
            success: function(a) {
                return a.previewElement ? a.previewElement.classList.add("dz-success") : void 0
            },
            successmultiple: g,
            canceled: function(a) {
                return this.emit("error", a, "Upload canceled.")
            },
            canceledmultiple: g,
            complete: function(a) {
                return a._removeLink && (a._removeLink.textContent = this.options.dictRemoveFile), a.previewElement ? a.previewElement.classList.add("dz-complete") : void 0
            },
            completemultiple: g,
            maxfilesexceeded: g,
            maxfilesreached: g,
            queuecomplete: g,
            addedfiles: g,
            previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'
        }, d = function() {
            var a, b, c, d, e, f, g;
            for (d = arguments[0], c = 2 <= arguments.length ? i.call(arguments, 1) : [], f = 0, g = c.length; g > f; f++) {
                b = c[f];
                for (a in b) e = b[a], d[a] = e
            }
            return d
        }, c.prototype.getAcceptedFiles = function() {
            var a, b, c, d, e;
            for (d = this.files, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a.accepted && e.push(a);
            return e
        }, c.prototype.getRejectedFiles = function() {
            var a, b, c, d, e;
            for (d = this.files, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a.accepted || e.push(a);
            return e
        }, c.prototype.getFilesWithStatus = function(a) {
            var b, c, d, e, f;
            for (e = this.files, f = [], c = 0, d = e.length; d > c; c++) b = e[c], b.status === a && f.push(b);
            return f
        }, c.prototype.getQueuedFiles = function() {
            return this.getFilesWithStatus(c.QUEUED)
        }, c.prototype.getUploadingFiles = function() {
            return this.getFilesWithStatus(c.UPLOADING)
        }, c.prototype.getAddedFiles = function() {
            return this.getFilesWithStatus(c.ADDED)
        }, c.prototype.getActiveFiles = function() {
            var a, b, d, e, f;
            for (e = this.files, f = [], b = 0, d = e.length; d > b; b++) a = e[b], (a.status === c.UPLOADING || a.status === c.QUEUED) && f.push(a);
            return f
        }, c.prototype.init = function() {
            var a, b, d, e, f, g, h;
            for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(c.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length && (d = function(a) {
                    return function() {
                        return a.hiddenFileInput && a.hiddenFileInput.parentNode.removeChild(a.hiddenFileInput), a.hiddenFileInput = document.createElement("input"), a.hiddenFileInput.setAttribute("type", "file"), (null == a.options.maxFiles || a.options.maxFiles > 1) && a.hiddenFileInput.setAttribute("multiple", "multiple"), a.hiddenFileInput.className = "dz-hidden-input", null != a.options.acceptedFiles && a.hiddenFileInput.setAttribute("accept", a.options.acceptedFiles), null != a.options.capture && a.hiddenFileInput.setAttribute("capture", a.options.capture), a.hiddenFileInput.style.visibility = "hidden", a.hiddenFileInput.style.position = "absolute", a.hiddenFileInput.style.top = "0", a.hiddenFileInput.style.left = "0", a.hiddenFileInput.style.height = "0", a.hiddenFileInput.style.width = "0", document.querySelector(a.options.hiddenInputContainer).appendChild(a.hiddenFileInput), a.hiddenFileInput.addEventListener("change", function() {
                            var b, c, e, f;
                            if (c = a.hiddenFileInput.files, c.length)
                                for (e = 0, f = c.length; f > e; e++) b = c[e], a.addFile(b);
                            return a.emit("addedfiles", c), d()
                        })
                    }
                }(this))(), this.URL = null != (g = window.URL) ? g : window.webkitURL, h = this.events, e = 0, f = h.length; f > e; e++) a = h[e], this.on(a, this.options[a]);
            return this.on("uploadprogress", function(a) {
                return function() {
                    return a.updateTotalUploadProgress()
                }
            }(this)), this.on("removedfile", function(a) {
                return function() {
                    return a.updateTotalUploadProgress()
                }
            }(this)), this.on("canceled", function(a) {
                return function(b) {
                    return a.emit("complete", b)
                }
            }(this)), this.on("complete", function(a) {
                return function() {
                    return 0 === a.getAddedFiles().length && 0 === a.getUploadingFiles().length && 0 === a.getQueuedFiles().length ? setTimeout(function() {
                        return a.emit("queuecomplete")
                    }, 0) : void 0
                }
            }(this)), b = function(a) {
                return a.stopPropagation(), a.preventDefault ? a.preventDefault() : a.returnValue = !1
            }, this.listeners = [{
                element: this.element,
                events: {
                    dragstart: function(a) {
                        return function(b) {
                            return a.emit("dragstart", b)
                        }
                    }(this),
                    dragenter: function(a) {
                        return function(c) {
                            return b(c), a.emit("dragenter", c)
                        }
                    }(this),
                    dragover: function(a) {
                        return function(c) {
                            var d;
                            try {
                                d = c.dataTransfer.effectAllowed
                            } catch (e) {}
                            return c.dataTransfer.dropEffect = "move" === d || "linkMove" === d ? "move" : "copy", b(c), a.emit("dragover", c)
                        }
                    }(this),
                    dragleave: function(a) {
                        return function(b) {
                            return a.emit("dragleave", b)
                        }
                    }(this),
                    drop: function(a) {
                        return function(c) {
                            return b(c), a.drop(c)
                        }
                    }(this),
                    dragend: function(a) {
                        return function(b) {
                            return a.emit("dragend", b)
                        }
                    }(this)
                }
            }], this.clickableElements.forEach(function(a) {
                return function(b) {
                    return a.listeners.push({
                        element: b,
                        events: {
                            click: function(d) {
                                return (b !== a.element || d.target === a.element || c.elementInside(d.target, a.element.querySelector(".dz-message"))) && a.hiddenFileInput.click(), !0
                            }
                        }
                    })
                }
            }(this)), this.enable(), this.options.init.call(this)
        }, c.prototype.destroy = function() {
            var a;
            return this.disable(), this.removeAllFiles(!0), (null != (a = this.hiddenFileInput) ? a.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, c.instances.splice(c.instances.indexOf(this), 1)
        }, c.prototype.updateTotalUploadProgress = function() {
            var a, b, c, d, e, f, g, h;
            if (d = 0, c = 0, a = this.getActiveFiles(), a.length) {
                for (h = this.getActiveFiles(), f = 0, g = h.length; g > f; f++) b = h[f], d += b.upload.bytesSent, c += b.upload.total;
                e = 100 * d / c
            } else e = 100;
            return this.emit("totaluploadprogress", e, c, d)
        }, c.prototype._getParamName = function(a) {
            return "function" == typeof this.options.paramName ? this.options.paramName(a) : "" + this.options.paramName + (this.options.uploadMultiple ? "[" + a + "]" : "")
        }, c.prototype._renameFilename = function(a) {
            return "function" != typeof this.options.renameFilename ? a : this.options.renameFilename(a)
        }, c.prototype.getFallbackForm = function() {
            var a, b, d, e;
            return (a = this.getExistingFallback()) ? a : (d = '<div class="dz-fallback">', this.options.dictFallbackText && (d += "<p>" + this.options.dictFallbackText + "</p>"), d += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', b = c.createElement(d), "FORM" !== this.element.tagName ? (e = c.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), e.appendChild(b)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != e ? e : b)
        }, c.prototype.getExistingFallback = function() {
            var a, b, c, d, e, f;
            for (b = function(a) {
                    var b, c, d;
                    for (c = 0, d = a.length; d > c; c++)
                        if (b = a[c], /(^| )fallback($| )/.test(b.className)) return b
                }, f = ["div", "form"], d = 0, e = f.length; e > d; d++)
                if (c = f[d], a = b(this.element.getElementsByTagName(c))) return a
        }, c.prototype.setupEventListeners = function() {
            var a, b, c, d, e, f, g;
            for (f = this.listeners, g = [], d = 0, e = f.length; e > d; d++) a = f[d], g.push(function() {
                var d, e;
                d = a.events, e = [];
                for (b in d) c = d[b], e.push(a.element.addEventListener(b, c, !1));
                return e
            }());
            return g
        }, c.prototype.removeEventListeners = function() {
            var a, b, c, d, e, f, g;
            for (f = this.listeners, g = [], d = 0, e = f.length; e > d; d++) a = f[d], g.push(function() {
                var d, e;
                d = a.events, e = [];
                for (b in d) c = d[b], e.push(a.element.removeEventListener(b, c, !1));
                return e
            }());
            return g
        }, c.prototype.disable = function() {
            var a, b, c, d, e;
            for (this.clickableElements.forEach(function(a) {
                    return a.classList.remove("dz-clickable")
                }), this.removeEventListeners(), d = this.files, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(this.cancelUpload(a));
            return e
        }, c.prototype.enable = function() {
            return this.clickableElements.forEach(function(a) {
                return a.classList.add("dz-clickable")
            }), this.setupEventListeners()
        }, c.prototype.filesize = function(a) {
            var b, c, d, e, f, g, h, i;
            if (d = 0, e = "b", a > 0) {
                for (g = ["TB", "GB", "MB", "KB", "b"], c = h = 0, i = g.length; i > h; c = ++h)
                    if (f = g[c], b = Math.pow(this.options.filesizeBase, 4 - c) / 10, a >= b) {
                        d = a / Math.pow(this.options.filesizeBase, 4 - c), e = f;
                        break
                    }
                d = Math.round(10 * d) / 10
            }
            return "<strong>" + d + "</strong> " + e
        }, c.prototype._updateMaxFilesReachedClass = function() {
            return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
        }, c.prototype.drop = function(a) {
            var b, c;
            a.dataTransfer && (this.emit("drop", a), b = a.dataTransfer.files, this.emit("addedfiles", b), b.length && (c = a.dataTransfer.items, c && c.length && null != c[0].webkitGetAsEntry ? this._addFilesFromItems(c) : this.handleFiles(b)))
        }, c.prototype.paste = function(a) {
            var b, c;
            if (null != (null != a && null != (c = a.clipboardData) ? c.items : void 0)) return this.emit("paste", a), b = a.clipboardData.items, b.length ? this._addFilesFromItems(b) : void 0
        }, c.prototype.handleFiles = function(a) {
            var b, c, d, e;
            for (e = [], c = 0, d = a.length; d > c; c++) b = a[c], e.push(this.addFile(b));
            return e
        }, c.prototype._addFilesFromItems = function(a) {
            var b, c, d, e, f;
            for (f = [], d = 0, e = a.length; e > d; d++) c = a[d], f.push(null != c.webkitGetAsEntry && (b = c.webkitGetAsEntry()) ? b.isFile ? this.addFile(c.getAsFile()) : b.isDirectory ? this._addFilesFromDirectory(b, b.name) : void 0 : null != c.getAsFile ? null == c.kind || "file" === c.kind ? this.addFile(c.getAsFile()) : void 0 : void 0);
            return f
        }, c.prototype._addFilesFromDirectory = function(a, b) {
            var c, d, e;
            return c = a.createReader(), d = function(a) {
                return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log(a) : void 0
            }, (e = function(a) {
                return function() {
                    return c.readEntries(function(c) {
                        var d, f, g;
                        if (c.length > 0) {
                            for (f = 0, g = c.length; g > f; f++) d = c[f], d.isFile ? d.file(function(c) {
                                return a.options.ignoreHiddenFiles && "." === c.name.substring(0, 1) ? void 0 : (c.fullPath = "" + b + "/" + c.name, a.addFile(c))
                            }) : d.isDirectory && a._addFilesFromDirectory(d, "" + b + "/" + d.name);
                            e()
                        }
                        return null
                    }, d)
                }
            }(this))()
        }, c.prototype.accept = function(a, b) {
            return a.size > 1024 * this.options.maxFilesize * 1024 ? b(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(a.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : c.isValidFile(a, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (b(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", a)) : this.options.accept.call(this, a, b) : b(this.options.dictInvalidFileType)
        }, c.prototype.addFile = function(a) {
            return a.upload = {
                progress: 0,
                total: a.size,
                bytesSent: 0
            }, this.files.push(a), a.status = c.ADDED, this.emit("addedfile", a), this._enqueueThumbnail(a), this.accept(a, function(b) {
                return function(c) {
                    return c ? (a.accepted = !1, b._errorProcessing([a], c)) : (a.accepted = !0, b.options.autoQueue && b.enqueueFile(a)), b._updateMaxFilesReachedClass()
                }
            }(this))
        }, c.prototype.enqueueFiles = function(a) {
            var b, c, d;
            for (c = 0, d = a.length; d > c; c++) b = a[c], this.enqueueFile(b);
            return null
        }, c.prototype.enqueueFile = function(a) {
            if (a.status !== c.ADDED || a.accepted !== !0) throw new Error("This file can't be queued because it has already been processed or was rejected.");
            return a.status = c.QUEUED, this.options.autoProcessQueue ? setTimeout(function(a) {
                return function() {
                    return a.processQueue()
                }
            }(this), 0) : void 0
        }, c.prototype._thumbnailQueue = [], c.prototype._processingThumbnail = !1, c.prototype._enqueueThumbnail = function(a) {
            return this.options.createImageThumbnails && a.type.match(/image.*/) && a.size <= 1024 * this.options.maxThumbnailFilesize * 1024 ? (this._thumbnailQueue.push(a), setTimeout(function(a) {
                return function() {
                    return a._processThumbnailQueue()
                }
            }(this), 0)) : void 0
        }, c.prototype._processThumbnailQueue = function() {
            return this._processingThumbnail || 0 === this._thumbnailQueue.length ? void 0 : (this._processingThumbnail = !0, this.createThumbnail(this._thumbnailQueue.shift(), function(a) {
                return function() {
                    return a._processingThumbnail = !1, a._processThumbnailQueue()
                }
            }(this)))
        }, c.prototype.removeFile = function(a) {
            return a.status === c.UPLOADING && this.cancelUpload(a), this.files = h(this.files, a), this.emit("removedfile", a), 0 === this.files.length ? this.emit("reset") : void 0
        }, c.prototype.removeAllFiles = function(a) {
            var b, d, e, f;
            for (null == a && (a = !1), f = this.files.slice(), d = 0, e = f.length; e > d; d++) b = f[d], (b.status !== c.UPLOADING || a) && this.removeFile(b);
            return null
        }, c.prototype.createThumbnail = function(a, b) {
            var c;
            return c = new FileReader, c.onload = function(d) {
                return function() {
                    return "image/svg+xml" === a.type ? (d.emit("thumbnail", a, c.result), void(null != b && b())) : d.createThumbnailFromUrl(a, c.result, b)
                }
            }(this), c.readAsDataURL(a)
        }, c.prototype.createThumbnailFromUrl = function(a, b, c, d) {
            var e;
            return e = document.createElement("img"), d && (e.crossOrigin = d), e.onload = function(b) {
                return function() {
                    var d, g, h, i, j, k, l, m;
                    return a.width = e.width, a.height = e.height, h = b.options.resize.call(b, a), null == h.trgWidth && (h.trgWidth = h.optWidth), null == h.trgHeight && (h.trgHeight = h.optHeight), d = document.createElement("canvas"), g = d.getContext("2d"), d.width = h.trgWidth, d.height = h.trgHeight, f(g, e, null != (j = h.srcX) ? j : 0, null != (k = h.srcY) ? k : 0, h.srcWidth, h.srcHeight, null != (l = h.trgX) ? l : 0, null != (m = h.trgY) ? m : 0, h.trgWidth, h.trgHeight), i = d.toDataURL("image/png"), b.emit("thumbnail", a, i), null != c ? c() : void 0
                }
            }(this), null != c && (e.onerror = c), e.src = b
        }, c.prototype.processQueue = function() {
            var a, b, c, d;
            if (b = this.options.parallelUploads, c = this.getUploadingFiles().length, a = c, !(c >= b) && (d = this.getQueuedFiles(), d.length > 0)) {
                if (this.options.uploadMultiple) return this.processFiles(d.slice(0, b - c));
                for (; b > a;) {
                    if (!d.length) return;
                    this.processFile(d.shift()), a++
                }
            }
        }, c.prototype.processFile = function(a) {
            return this.processFiles([a])
        }, c.prototype.processFiles = function(a) {
            var b, d, e;
            for (d = 0, e = a.length; e > d; d++) b = a[d], b.processing = !0, b.status = c.UPLOADING, this.emit("processing", b);
            return this.options.uploadMultiple && this.emit("processingmultiple", a), this.uploadFiles(a)
        }, c.prototype._getFilesWithXhr = function(a) {
            var b, c;
            return c = function() {
                var c, d, e, f;
                for (e = this.files, f = [], c = 0, d = e.length; d > c; c++) b = e[c], b.xhr === a && f.push(b);
                return f
            }.call(this)
        }, c.prototype.cancelUpload = function(a) {
            var b, d, e, f, g, h, i;
            if (a.status === c.UPLOADING) {
                for (d = this._getFilesWithXhr(a.xhr), e = 0, g = d.length; g > e; e++) b = d[e], b.status = c.CANCELED;
                for (a.xhr.abort(), f = 0, h = d.length; h > f; f++) b = d[f], this.emit("canceled", b);
                this.options.uploadMultiple && this.emit("canceledmultiple", d)
            } else((i = a.status) === c.ADDED || i === c.QUEUED) && (a.status = c.CANCELED, this.emit("canceled", a), this.options.uploadMultiple && this.emit("canceledmultiple", [a]));
            return this.options.autoProcessQueue ? this.processQueue() : void 0
        }, e = function() {
            var a, b;
            return b = arguments[0], a = 2 <= arguments.length ? i.call(arguments, 1) : [], "function" == typeof b ? b.apply(this, a) : b
        }, c.prototype.uploadFile = function(a) {
            return this.uploadFiles([a])
        }, c.prototype.uploadFiles = function(a) {
            var b, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L;
            for (w = new XMLHttpRequest, x = 0, B = a.length; B > x; x++) b = a[x], b.xhr = w;
            p = e(this.options.method, a), u = e(this.options.url, a), w.open(p, u, !0), w.withCredentials = !!this.options.withCredentials, s = null, g = function(c) {
                return function() {
                    var d, e, f;
                    for (f = [], d = 0, e = a.length; e > d; d++) b = a[d], f.push(c._errorProcessing(a, s || c.options.dictResponseError.replace("{{statusCode}}", w.status), w));
                    return f
                }
            }(this), t = function(c) {
                return function(d) {
                    var e, f, g, h, i, j, k, l, m;
                    if (null != d)
                        for (f = 100 * d.loaded / d.total, g = 0, j = a.length; j > g; g++) b = a[g], b.upload = {
                            progress: f,
                            total: d.total,
                            bytesSent: d.loaded
                        };
                    else {
                        for (e = !0, f = 100, h = 0, k = a.length; k > h; h++) b = a[h], (100 !== b.upload.progress || b.upload.bytesSent !== b.upload.total) && (e = !1), b.upload.progress = f, b.upload.bytesSent = b.upload.total;
                        if (e) return
                    }
                    for (m = [], i = 0, l = a.length; l > i; i++) b = a[i], m.push(c.emit("uploadprogress", b, f, b.upload.bytesSent));
                    return m
                }
            }(this), w.onload = function(b) {
                return function(d) {
                    var e;
                    if (a[0].status !== c.CANCELED && 4 === w.readyState) {
                        if (s = w.responseText, w.getResponseHeader("content-type") && ~w.getResponseHeader("content-type").indexOf("application/json")) try {
                            s = JSON.parse(s)
                        } catch (f) {
                            d = f, s = "Invalid JSON response from server."
                        }
                        return t(), 200 <= (e = w.status) && 300 > e ? b._finished(a, s, d) : g()
                    }
                }
            }(this), w.onerror = function() {
                return function() {
                    return a[0].status !== c.CANCELED ? g() : void 0
                }
            }(this), r = null != (G = w.upload) ? G : w, r.onprogress = t, j = {
                Accept: "application/json",
                "Cache-Control": "no-cache",
                "X-Requested-With": "XMLHttpRequest"
            }, this.options.headers && d(j, this.options.headers);
            for (h in j) i = j[h], i && w.setRequestHeader(h, i);
            if (f = new FormData, this.options.params) {
                H = this.options.params;
                for (o in H) v = H[o], f.append(o, v)
            }
            for (y = 0, C = a.length; C > y; y++) b = a[y], this.emit("sending", b, w, f);
            if (this.options.uploadMultiple && this.emit("sendingmultiple", a, w, f), "FORM" === this.element.tagName)
                for (I = this.element.querySelectorAll("input, textarea, select, button"), z = 0, D = I.length; D > z; z++)
                    if (l = I[z], m = l.getAttribute("name"), n = l.getAttribute("type"), "SELECT" === l.tagName && l.hasAttribute("multiple"))
                        for (J = l.options, A = 0, E = J.length; E > A; A++) q = J[A], q.selected && f.append(m, q.value);
                    else(!n || "checkbox" !== (K = n.toLowerCase()) && "radio" !== K || l.checked) && f.append(m, l.value);
            for (k = F = 0, L = a.length - 1; L >= 0 ? L >= F : F >= L; k = L >= 0 ? ++F : --F) f.append(this._getParamName(k), a[k], this._renameFilename(a[k].name));
            return this.submitRequest(w, f, a)
        }, c.prototype.submitRequest = function(a, b) {
            return a.send(b)
        }, c.prototype._finished = function(a, b, d) {
            var e, f, g;
            for (f = 0, g = a.length; g > f; f++) e = a[f], e.status = c.SUCCESS, this.emit("success", e, b, d), this.emit("complete", e);
            return this.options.uploadMultiple && (this.emit("successmultiple", a, b, d), this.emit("completemultiple", a)), this.options.autoProcessQueue ? this.processQueue() : void 0
        }, c.prototype._errorProcessing = function(a, b, d) {
            var e, f, g;
            for (f = 0, g = a.length; g > f; f++) e = a[f], e.status = c.ERROR, this.emit("error", e, b, d), this.emit("complete", e);
            return this.options.uploadMultiple && (this.emit("errormultiple", a, b, d), this.emit("completemultiple", a)), this.options.autoProcessQueue ? this.processQueue() : void 0
        }, c
    }(b), a.version = "4.3.0", a.options = {}, a.optionsForElement = function(b) {
        return b.getAttribute("id") ? a.options[c(b.getAttribute("id"))] : void 0
    }, a.instances = [], a.forElement = function(a) {
        if ("string" == typeof a && (a = document.querySelector(a)), null == (null != a ? a.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
        return a.dropzone
    }, a.autoDiscover = !0, a.discover = function() {
        var b, c, d, e, f, g;
        for (document.querySelectorAll ? d = document.querySelectorAll(".dropzone") : (d = [], b = function(a) {
                var b, c, e, f;
                for (f = [], c = 0, e = a.length; e > c; c++) b = a[c], f.push(/(^| )dropzone($| )/.test(b.className) ? d.push(b) : void 0);
                return f
            }, b(document.getElementsByTagName("div")), b(document.getElementsByTagName("form"))), g = [], e = 0, f = d.length; f > e; e++) c = d[e], g.push(a.optionsForElement(c) !== !1 ? new a(c) : void 0);
        return g
    }, a.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i], a.isBrowserSupported = function() {
        var b, c, d, e, f;
        if (b = !0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
            if ("classList" in document.createElement("a"))
                for (f = a.blacklistedBrowsers, d = 0, e = f.length; e > d; d++) c = f[d], c.test(navigator.userAgent) && (b = !1);
            else b = !1;
        else b = !1;
        return b
    }, h = function(a, b) {
        var c, d, e, f;
        for (f = [], d = 0, e = a.length; e > d; d++) c = a[d], c !== b && f.push(c);
        return f
    }, c = function(a) {
        return a.replace(/[\-_](\w)/g, function(a) {
            return a.charAt(1).toUpperCase()
        })
    }, a.createElement = function(a) {
        var b;
        return b = document.createElement("div"), b.innerHTML = a, b.childNodes[0]
    }, a.elementInside = function(a, b) {
        if (a === b) return !0;
        for (; a = a.parentNode;)
            if (a === b) return !0;
        return !1
    }, a.getElement = function(a, b) {
        var c;
        if ("string" == typeof a ? c = document.querySelector(a) : null != a.nodeType && (c = a), null == c) throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector or a plain HTML element.");
        return c
    }, a.getElements = function(a, b) {
        var c, d, e, f, g, h, i, j;
        if (a instanceof Array) {
            e = [];
            try {
                for (f = 0, h = a.length; h > f; f++) d = a[f], e.push(this.getElement(d, b))
            } catch (k) {
                c = k, e = null
            }
        } else if ("string" == typeof a)
            for (e = [], j = document.querySelectorAll(a), g = 0, i = j.length; i > g; g++) d = j[g], e.push(d);
        else null != a.nodeType && (e = [a]);
        if (null == e || !e.length) throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
        return e
    }, a.confirm = function(a, b, c) {
        return window.confirm(a) ? b() : null != c ? c() : void 0
    }, a.isValidFile = function(a, b) {
        var c, d, e, f, g;
        if (!b) return !0;
        for (b = b.split(","), d = a.type, c = d.replace(/\/.*$/, ""), f = 0, g = b.length; g > f; f++)
            if (e = b[f], e = e.trim(), "." === e.charAt(0)) {
                if (-1 !== a.name.toLowerCase().indexOf(e.toLowerCase(), a.name.length - e.length)) return !0
            } else if (/\/\*$/.test(e)) {
            if (c === e.replace(/\/.*$/, "")) return !0
        } else if (d === e) return !0;
        return !1
    }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function(b) {
        return this.each(function() {
            return new a(this, b)
        })
    }), "undefined" != typeof module && null !== module ? module.exports = a : window.Dropzone = a, a.ADDED = "added", a.QUEUED = "queued", a.ACCEPTED = a.QUEUED, a.UPLOADING = "uploading", a.PROCESSING = a.UPLOADING, a.CANCELED = "canceled", a.ERROR = "error", a.SUCCESS = "success", e = function(a) {
        var b, c, d, e, f, g, h, i, j, k;
        for (h = a.naturalWidth, g = a.naturalHeight, c = document.createElement("canvas"), c.width = 1, c.height = g, d = c.getContext("2d"), d.drawImage(a, 0, 0), e = d.getImageData(0, 0, 1, g).data, k = 0, f = g, i = g; i > k;) b = e[4 * (i - 1) + 3], 0 === b ? f = i : k = i, i = f + k >> 1;
        return j = i / g, 0 === j ? 1 : j
    }, f = function(a, b, c, d, f, g, h, i, j, k) {
        var l;
        return l = e(b), a.drawImage(b, c, d, f, g, h, i, j, k / l)
    }, d = function(a, b) {
        var c, d, e, f, g, h, i, j, k;
        if (e = !1, k = !0, d = a.document, j = d.documentElement, c = d.addEventListener ? "addEventListener" : "attachEvent", i = d.addEventListener ? "removeEventListener" : "detachEvent", h = d.addEventListener ? "" : "on", f = function(c) {
                return "readystatechange" !== c.type || "complete" === d.readyState ? (("load" === c.type ? a : d)[i](h + c.type, f, !1), !e && (e = !0) ? b.call(a, c.type || c) : void 0) : void 0
            }, g = function() {
                var a;
                try {
                    j.doScroll("left")
                } catch (b) {
                    return a = b, void setTimeout(g, 50)
                }
                return f("poll")
            }, "complete" !== d.readyState) {
            if (d.createEventObject && j.doScroll) {
                try {
                    k = !a.frameElement
                } catch (l) {}
                k && g()
            }
            return d[c](h + "DOMContentLoaded", f, !1), d[c](h + "readystatechange", f, !1), a[c](h + "load", f, !1)
        }
    }, a._autoDiscoverFunction = function() {
        return a.autoDiscover ? a.discover() : void 0
    }, d(window, a._autoDiscoverFunction)
}).call(this);

(function() {
    var b, a = function(c, d) {
        return function() {
            return c.apply(d, arguments)
        }
    };
    b = (function() {
        function c(d) {
            this.el = d;
            this.dragleave = a(this.dragleave, this);
            this.dragenter = a(this.dragenter, this);
            if (this.supportsEventConstructors()) {
                this.first = false;
                this.second = false;
                this.el.addEventListener("dragenter", this.dragenter, false);
                this.el.addEventListener("dragleave", this.dragleave, false)
            }
        }
        c.prototype.dragenter = function(d) {
            if (this.first) {
                return this.second = true
            } else {
                this.first = true;
                return this.el.dispatchEvent(new CustomEvent("dragster:enter", {
                    bubbles: true,
                    cancelable: true,
                    detail: {
                        dataTransfer: d.dataTransfer
                    }
                }))
            }
        };
        c.prototype.dragleave = function(d) {
            if (this.second) {
                this.second = false
            } else {
                if (this.first) {
                    this.first = false
                }
            }
            if (!this.first && !this.second) {
                return this.el.dispatchEvent(new CustomEvent("dragster:leave", {
                    bubbles: true,
                    cancelable: true,
                    detail: {
                        dataTransfer: d.dataTransfer
                    }
                }))
            }
        };
        c.prototype.removeListeners = function() {
            this.el.removeEventListener("dragenter", this.dragenter, false);
            return this.el.removeEventListener("dragleave", this.dragleave, false)
        };
        c.prototype.supportsEventConstructors = function() {
            try {
                new CustomEvent("z")
            } catch (d) {
                return false
            }
            return true
        };
        c.prototype.reset = function() {
            this.first = false;
            return this.second = false
        };
        return c
    })();
    if (typeof module === "undefined") {
        window.Dragster = b
    } else {
        module.exports = b
    }
}).call(this);
jQuery.cookie = function(b, j, m) {
    if (typeof j != "undefined") {
        m = m || {};
        if (j === null) {
            j = "";
            m.expires = -1
        }
        var e = "";
        if (m.expires && (typeof m.expires == "number" || m.expires.toUTCString)) {
            var f;
            if (typeof m.expires == "number") {
                f = new Date();
                f.setTime(f.getTime() + (m.expires * 24 * 60 * 60 * 1000))
            } else {
                f = m.expires
            }
            e = "; expires=" + f.toUTCString()
        }
        var l = m.path ? "; path=" + (m.path) : "";
        var g = m.domain ? "; domain=" + (m.domain) : "";
        var a = m.secure ? "; secure" : "";
        document.cookie = [b, "=", encodeURIComponent(j), e, l, g, a].join("")
    } else {
        var d = null;
        if (document.cookie && document.cookie != "") {
            var k = document.cookie.split(";");
            for (var h = 0; h < k.length; h++) {
                var c = jQuery.trim(k[h]);
                if (c.substring(0, b.length + 1) == (b + "=")) {
                    d = decodeURIComponent(c.substring(b.length + 1));
                    break
                }
            }
        }
        return d
    }
};
/*
 *      jQuery dotdotdot 1.8.3
 *
 *      Copyright (c) Fred Heusschen
 *      www.frebsite.nl
 *
 *      Plugin website:
 *      dotdotdot.frebsite.nl
 *
 *      Licensed under the MIT license.
 *      http://en.wikipedia.org/wiki/MIT_License
 */
! function(t, e) {
    "use strict";

    function n(t, e, n) {
        var r = t.children(),
            a = !1;
        t.empty();
        for (var i = 0, d = r.length; i < d; i++) {
            var l = r.eq(i);
            if (t.append(l), n && t.append(n), o(t, e)) {
                l.remove(), a = !0;
                break
            }
            n && n.detach()
        }
        return a
    }

    function r(e, n, i, d, l) {
        var s = !1,
            c = "a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",
            u = "script, .dotdotdot-keep";
        return e.contents().detach().each(function() {
            var h = this,
                f = t(h);
            if ("undefined" == typeof h) return !0;
            if (f.is(u)) e.append(f);
            else {
                if (s) return !0;
                e.append(f), !l || f.is(d.after) || f.find(d.after).length || e[e.is(c) ? "after" : "append"](l), o(i, d) && (s = 3 == h.nodeType ? a(f, n, i, d, l) : r(f, n, i, d, l)), s || l && l.detach()
            }
        }), n.addClass("is-truncated"), s
    }

    function a(e, n, r, a, d) {
        var c = e[0];
        if (!c) return !1;
        var h = s(c),
            f = h.indexOf(" ") !== -1 ? " " : "　",
            p = "letter" == a.wrap ? "" : f,
            g = h.split(p),
            v = -1,
            w = -1,
            m = 0,
            b = g.length - 1;
        if (a.fallbackToLetter && 0 === m && 0 === b && (p = "", g = h.split(p), b = g.length - 1), a.maxLength) h = i(h.trim().substr(0, a.maxLength), a), l(c, h);
        else {
            for (; m <= b && (0 !== m || 0 !== b);) {
                var y = Math.floor((m + b) / 2);
                if (y == w) break;
                w = y, l(c, g.slice(0, w + 1).join(p) + a.ellipsis), r.children().each(function() {
                    t(this).toggle().toggle()
                }), o(r, a) ? (b = w, a.fallbackToLetter && 0 === m && 0 === b && (p = "", g = g[0].split(p), v = -1, w = -1, m = 0, b = g.length - 1)) : (v = w, m = w)
            }
            if (v == -1 || 1 === g.length && 0 === g[0].length) {
                var x = e.parent();
                e.detach();
                var C = d && d.closest(x).length ? d.length : 0;
                if (x.contents().length > C ? c = u(x.contents().eq(-1 - C), n) : (c = u(x, n, !0), C || x.detach()), c && (h = i(s(c), a), l(c, h), C && d)) {
                    var T = d.parent();
                    t(c).parent().append(d), t.trim(T.html()) || T.remove()
                }
            } else h = i(g.slice(0, v + 1).join(p), a), l(c, h)
        }
        return !0
    }

    function o(t, e) {
        return t.innerHeight() > e.maxHeight || e.maxLength && t.text().trim().length > e.maxLength
    }

    function i(e, n) {
        for (; t.inArray(e.slice(-1), n.lastCharacter.remove) > -1;) e = e.slice(0, -1);
        return t.inArray(e.slice(-1), n.lastCharacter.noEllipsis) < 0 && (e += n.ellipsis), e
    }

    function d(t) {
        return {
            width: t.innerWidth(),
            height: t.innerHeight()
        }
    }

    function l(t, e) {
        t.innerText ? t.innerText = e : t.nodeValue ? t.nodeValue = e : t.textContent && (t.textContent = e)
    }

    function s(t) {
        return t.innerText ? t.innerText : t.nodeValue ? t.nodeValue : t.textContent ? t.textContent : ""
    }

    function c(t) {
        do t = t.previousSibling; while (t && 1 !== t.nodeType && 3 !== t.nodeType);
        return t
    }

    function u(e, n, r) {
        var a, o = e && e[0];
        if (o) {
            if (!r) {
                if (3 === o.nodeType) return o;
                if (t.trim(e.text())) return u(e.contents().last(), n)
            }
            for (a = c(o); !a;) {
                if (e = e.parent(), e.is(n) || !e.length) return !1;
                a = c(e[0])
            }
            if (a) return u(t(a), n)
        }
        return !1
    }

    function h(e, n) {
        return !!e && ("string" == typeof e ? (e = t(e, n), !!e.length && e) : !!e.jquery && e)
    }

    function f(t) {
        for (var e = t.innerHeight(), n = ["paddingTop", "paddingBottom"], r = 0, a = n.length; r < a; r++) {
            var o = parseInt(t.css(n[r]), 10);
            isNaN(o) && (o = 0), e -= o
        }
        return e
    }
    if (!t.fn.dotdotdot) {
        t.fn.dotdotdot = function(e) {
            if (0 === this.length) return t.fn.dotdotdot.debug('No element found for "' + this.selector + '".'), this;
            if (this.length > 1) return this.each(function() {
                t(this).dotdotdot(e)
            });
            var a = this,
                i = a.contents();
            a.data("dotdotdot") && a.trigger("destroy.dot"), a.data("dotdotdot-style", a.attr("style") || ""), a.css("word-wrap", "break-word"), "nowrap" === a.css("white-space") && a.css("white-space", "normal"), a.bind_events = function() {
                return a.bind("update.dot", function(e, d) {
                    switch (a.removeClass("is-truncated"), e.preventDefault(), e.stopPropagation(), typeof l.height) {
                        case "number":
                            l.maxHeight = l.height;
                            break;
                        case "function":
                            l.maxHeight = l.height.call(a[0]);
                            break;
                        default:
                            l.maxHeight = f(a)
                    }
                    l.maxHeight += l.tolerance, "undefined" != typeof d && (("string" == typeof d || "nodeType" in d && 1 === d.nodeType) && (d = t("<div />").append(d).contents()), d instanceof t && (i = d)), g = a.wrapInner('<div class="dotdotdot" />').children(), g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
                        height: "auto",
                        width: "auto",
                        border: "none",
                        padding: 0,
                        margin: 0
                    });
                    var c = !1,
                        u = !1;
                    return s.afterElement && (c = s.afterElement.clone(!0), c.show(), s.afterElement.detach()), o(g, l) && (u = "children" == l.wrap ? n(g, l, c) : r(g, a, g, l, c)), g.replaceWith(g.contents()), g = null, t.isFunction(l.callback) && l.callback.call(a[0], u, i), s.isTruncated = u, u
                }).bind("isTruncated.dot", function(t, e) {
                    return t.preventDefault(), t.stopPropagation(), "function" == typeof e && e.call(a[0], s.isTruncated), s.isTruncated
                }).bind("originalContent.dot", function(t, e) {
                    return t.preventDefault(), t.stopPropagation(), "function" == typeof e && e.call(a[0], i), i
                }).bind("destroy.dot", function(t) {
                    t.preventDefault(), t.stopPropagation(), a.unwatch().unbind_events().contents().detach().end().append(i).attr("style", a.data("dotdotdot-style") || "").removeClass("is-truncated").data("dotdotdot", !1)
                }), a
            }, a.unbind_events = function() {
                return a.unbind(".dot"), a
            }, a.watch = function() {
                if (a.unwatch(), "window" == l.watch) {
                    var e = t(window),
                        n = e.width(),
                        r = e.height();
                    e.bind("resize.dot" + s.dotId, function() {
                        n == e.width() && r == e.height() && l.windowResizeFix || (n = e.width(), r = e.height(), u && clearInterval(u), u = setTimeout(function() {
                            a.trigger("update.dot")
                        }, 100))
                    })
                } else c = d(a), u = setInterval(function() {
                    if (a.is(":visible")) {
                        var t = d(a);
                        c.width == t.width && c.height == t.height || (a.trigger("update.dot"), c = t)
                    }
                }, 500);
                return a
            }, a.unwatch = function() {
                return t(window).unbind("resize.dot" + s.dotId), u && clearInterval(u), a
            };
            var l = t.extend(!0, {}, t.fn.dotdotdot.defaults, e),
                s = {},
                c = {},
                u = null,
                g = null;
            return l.lastCharacter.remove instanceof Array || (l.lastCharacter.remove = t.fn.dotdotdot.defaultArrays.lastCharacter.remove), l.lastCharacter.noEllipsis instanceof Array || (l.lastCharacter.noEllipsis = t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis), s.afterElement = h(l.after, a), s.isTruncated = !1, s.dotId = p++, a.data("dotdotdot", !0).bind_events().trigger("update.dot"), l.watch && a.watch(), a
        }, t.fn.dotdotdot.defaults = {
            ellipsis: "... ",
            wrap: "word",
            fallbackToLetter: !0,
            lastCharacter: {},
            tolerance: 0,
            callback: null,
            after: null,
            height: null,
            watch: !1,
            windowResizeFix: !0,
            maxLength: null
        }, t.fn.dotdotdot.defaultArrays = {
            lastCharacter: {
                remove: [" ", "　", ",", ";", ".", "!", "?"],
                noEllipsis: []
            }
        }, t.fn.dotdotdot.debug = function(t) {};
        var p = 1,
            g = t.fn.html;
        t.fn.html = function(n) {
            return n != e && !t.isFunction(n) && this.data("dotdotdot") ? this.trigger("update", [n]) : g.apply(this, arguments)
        };
        var v = t.fn.text;
        t.fn.text = function(n) {
            return n != e && !t.isFunction(n) && this.data("dotdotdot") ? (n = t("<div />").text(n).html(), this.trigger("update", [n])) : v.apply(this, arguments)
        }
    }
}(jQuery), jQuery(document).ready(function(t) {
    t(".dot-ellipsis").each(function() {
        var e = t(this).hasClass("dot-resize-update"),
            n = t(this).hasClass("dot-timer-update"),
            r = 0,
            a = t(this).attr("class").split(/\s+/);
        t.each(a, function(t, e) {
            var n = e.match(/^dot-height-(\d+)$/);
            null !== n && (r = Number(n[1]))
        });
        var o = {};
        n && (o.watch = !0), e && (o.watch = "window"), r > 0 && (o.height = r), t(this).dotdotdot(o)
    })
}), jQuery(window).on("load", function() {
    jQuery(".dot-ellipsis.dot-load-update").trigger("update.dot")
});


(function(e) {
    var c = {};

    function b(i, h) {
        var g = !/\W/.test(i) ? c[i] = c[i] || b(document.getElementById(i).innerHTML) : new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + i.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
        return h ? g(h) : g
    }

    function f(g, h) {
        function j() {
            e(this).remove()
        }

        function i() {
            e(this).slideUp(100, j)
        }
        e(g).animate({
            opacity: 0
        }, {
            duration: 250,
            queue: false,
            complete: i
        })
    }

    function a(g, i) {
        function h() {
            var k = "." + i.newClass + "." + i.messageClass,
                j;
            if (e.cookie && e.cookie(i.persistentCookie)) {
                j = e(k, g).not(i.persistentClass)
            } else {
                j = e(k, g)
            }
            if (j.length) {
                j.prepend(i.closeIcon);
                j.click(function(l) {
                    if (e.cookie && j.hasClass(i.persistentClass)) {
                        e.cookie(i.persistentCookie, 1, {
                            path: "/"
                        })
                    }
                    f(this, i)
                });
                j.removeClass(i.newClass).addClass(i.activeClass);
                j.each(function() {
                    var l = this;
                    if (!e(l).hasClass(i.stickyClass) && !e(l).hasClass(i.persistentClass)) {
                        var m = e(l).attr("data-timer") || i.timer;
                        setTimeout(function() {
                            f(e(l), i)
                        }, m)
                    }
                    e(l).fadeIn(500)
                })
            }
            setTimeout(h, i.interval)
        }
        h()
    }

    function d(g) {
        return g.replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    e.fn.notifier = function(g) {
        var h = e.extend({}, e.fn.notify.defaults, g);
        return e(this).each(function() {
            var i = this,
                j = e.metadata ? e.extend(h, e(this).metadata()) : h;
            if (j.scrollcss) {
                e(window).scroll(function() {
                    e(i).css(j.scrollcss)
                })
            }
            e("." + j.messageClass, i).addClass(j.newClass);
            a(i, j)
        })
    };
    e.fn.notify = function(i, g) {
        var h;
        if (typeof i === "string") {
            h = e.extend({
                message: i
            }, e.fn.notify.defaults, g)
        } else {
            h = e.extend({}, e.fn.notify.defaults, i)
        }
        if (h.status === "success") {
            h.status = "confirm"
        }
        return e(this).each(function() {
            var k = e.metadata ? e.extend(h, e(this).metadata()) : h;
            if (h.message) {
                if (k.sanitize) {
                    k.message = d(k.message);
                    k.title = d(k.title)
                }
                var j = b(k.tmpl, k);
                e(this).append(j)
            } else {
                if (window.console) {
                    window.console.warn("No message was set in notify's config: ", k)
                }
            }
        })
    };
    e.fn.notify.defaults = {
        status: "info",
        interval: 500,
        timer: 15000,
        sticky: false,
        title: "",
        sanitize: true,
        tmpl: '<div class="message <%=newClass%> <%=status%> <% if (sticky) { %><%=stickyClass %><% } %>" data-timer="<%=timer%>"><% if (title) { %><h6><%=title%></h6><% } %><div class="content"><%=message%></div></div>',
        stickyClass: "notify-sticky",
        persistentClass: "notify-persistent",
        persistentCookie: "notify-persistent-closed",
        newClass: "notify-new",
        activeClass: "notify-active",
        inactiveClass: "notify-inactive",
        messageClass: "message",
        closeIcon: '<b title="Close" class="ico ico-close" data-icon="D"></b>'
    }
}(jQuery));
if (!window.SF) {
    window.SF = {}
}
SF.Widgets = SF.Widgets || {};
SF.SDChromePopover = function(c) {
    c.addClass("is-dropdown-submenu-parent opens-right");
    var a = c.find("a").first();
    var b = a.siblings("ul").first();
    b.addClass("submenu is-dropdown-submenu first-sub vertical");
    b.parent().addClass("is-dropdown-submenu-parent opens-right");
    a.hover(function() {
        c.addClass("is-active");
        b.addClass("js-dropdown-active")
    }, function() {
        a.parent().mouseleave(function() {
            c.removeClass("is-active");
            b.removeClass("js-dropdown-active")
        })
    })
};
jQuery(function(b) {
    var c = b("#updater-tooltip-sd").length ? b("#updater-tooltip-sd") : b("#updater-tooltip");
    if (c.length) {
        if (c.hasClass("fetch")) {
            b.ajax({
                url: "/user/updates/find" + location.search,
                global: false,
                success: function(d) {
                    if (d.length) {
                        c.hide().html(d).show();
                        if (SF.sandiego_chrome) {
                            SF.SDChromePopover(c)
                        }
                    }
                }
            })
        } else {
            if (SF.sandiego_chrome) {
                SF.SDChromePopover(c)
            }
        }
    }
    var a = b("#account-tooltip");
    if (a.length) {
        if (SF.sandiego_chrome) {
            SF.SDChromePopover(a)
        }
    }
    b(window).on("load", function() {
        SF.floatingNewsletter = new SF.FloatingNewsletterSubscribe()
    });
    b(".newsletter-subscribe-form").each(SF.wire_up_subscribe_form)
});
SF.FloatingNewsletterSubscribe = (function(a) {
    var b = {
        element: "#newsletter-floating",
        delay: 5,
        cookieName: "suppressNewsletter",
        basementEl: "footer .l-nav-bottom",
        transition: "bottom 1s"
    };

    function c(e) {
        var d = this;
        this.settings = a.extend(this.settings, b, e);
        setTimeout(this.init.bind(this), this.settings.delay * 1000)
    }
    c.prototype.init = function() {
        this.$el = a(this.settings.element);
        if (!this.$el.length) {
            return
        }
        this.height = this.$el.outerHeight();
        this.$el.css("bottom", this.height * (-1));
        this.suppressCookie = a.cookie(this.settings.cookieName);
        this.isHidden = true;
        this.$basementEl = a(this.settings.basementEl);
        this.basementHeight = this.$basementEl.height();
        this.boundScrollDelegate = this.scrollRelocate.bind(this);
        if (this.$el && !this.suppressCookie) {
            window.addEventListener("scroll", this.boundScrollDelegate, isPassiveEventListenerSupported() ? {
                passive: true
            } : false);
            this.show();
            a("#btn-float-close", this.$el).click(this.hide.bind(this))
        }
    };
    c.prototype.scrollRelocate = function() {
        if (!this.isHidden) {
            this.$el.css("transition", "none");
            this.$el.css("bottom", this.calcBottom())
        }
    };
    c.prototype.calcBottom = function() {
        var g = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        var f = a(window).scrollTop();
        var d = g + f;
        var e = this.$basementEl.offset().top;
        if (d < e) {
            return 0
        } else {
            return d - e
        }
    };
    c.prototype.show = function() {
        this.$el.css("transition", this.settings.transition);
        this.$el.css("bottom", this.calcBottom());
        this.isHidden = false
    };
    c.prototype.hide = function() {
        this.$el.css("transition", this.settings.transition);
        this.$el.css("bottom", this.height * (-1));
        this.suppress();
        this.isHidden = true
    };
    c.prototype.suppress = function() {
        a.cookie(this.settings.cookieName, true, {
            expires: 365,
            path: "/"
        });
        return true
    };
    return c
})(jQuery);

function getIndicesOf(b, g, a) {
    var f = 0,
        d = b.length;
    var c, e = [];
    if (!a) {
        g = g.toLowerCase();
        b = b.toLowerCase()
    }
    while ((c = g.indexOf(b, f)) > -1) {
        e.push(c);
        f = c + d
    }
    return e
}
SF.BlockThis = (function(b) {
    var c = {
        element: "#overlay-blockthis-wrapper",
        btnActivateSelector: ".btn-blockthis",
        btnCloseSelector: "#btn-blockthis-close",
        inputGptInfoSelector: "#gpt-info",
        positionSticky: false
    };

    function a(g) {
        var f = this;
        this.settings = b.extend(this.settings, c, g);

        function i(o) {
            var p = b(o.target),
                m = p.parents(".draper"),
                n = m.attr("id").replace("_wrapped", ""),
                l = m.attr("data-id");
            f.$element.show();
            f.dropzone = k();
            if (f.settings.positionSticky) {
                new Sticky(f.$element.get(0)).init()
            } else {
                d();
                b(window).resize(d)
            }
            f.capture(n, l);
            return false
        }

        function e(l) {
            return f.submit()
        }

        function h(l) {
            f.close();
            return false
        }

        function k() {
            if (f.dropzone) {
                f.dropzone.enable();
                return f.dropzone
            }
            var m = new Dropzone("#blockthisForm", {
                paramName: "screenshot",
                autoProcessQueue: false,
                maxFiles: 1,
                maxFilesize: 2,
                clickable: "#upload-it",
                thumbnailWidth: null,
                thumbnailHeight: 35,
                acceptedFiles: "image/*,.png,.jpg,.jpeg,.gif",
                addRemoveLinks: true,
                renameFilename: function(n) {
                    var p = n.split("."),
                        o = p[p.length - 1];
                    return "screenshot." + o
                },
                previewsContainer: b(".dropzone-previews")[0],
                previewTemplate: document.getElementById("dropzone-preview-template").innerHTML,
                dictMaxFilesExceeded: "You may only upload 1 screenshot.",
                dictFallbackText: "Screenshot (required):",
                init: function() {
                    this.on("success", function() {
                        b("#messages").notify({
                            message: "Report submitted successfully.  Thanks!",
                            status: "success"
                        });
                        b("#btn-blockthis-close").trigger("click")
                    });
                    this.on("error", function(o, n, q) {
                        var p = n.error || n;
                        b("#messages").notify({
                            message: p,
                            status: "error"
                        });
                        this.removeAllFiles(true);
                        b("#btn-blockthis-submit").attr("disabled", false).attr("value", "Submit Report")
                    });
                    this.on("addedfile", function(n) {
                        b("#upload-it").hide();
                        b(".dropzone-previews").show();
                        f.$form.trigger("dragster:leave")
                    });
                    this.on("removedfile", function(n) {
                        b("#upload-it").show();
                        b(".dropzone-previews").hide()
                    })
                }
            });
            var l = new Dragster(f.$form[0]);
            f.$form.on("dragster:enter", function() {
                f.$form.addClass("dragging-active")
            });
            f.$form.on("dragster:leave", function() {
                f.$form.removeClass("dragging-active")
            });
            return m
        }

        function d(n) {
            var m = f.$element.outerHeight();
            var l = (b(window).height() - m) + "px";
            f.$element.css({
                top: l
            })
        }(function j() {
            this.$element = b(this.settings.element);
            if (!this.$element.length) {
                return false
            }
            Dropzone.options.blockthisForm = false;
            this.$btnClose = b(this.settings.btnCloseSelector);
            this.$gptInfo = b(this.settings.inputGptInfoSelector);
            this.$form = b("form", this.$element);
            b("body").on("click", this.settings.btnActivateSelector, i);
            this.$form.submit(e);
            this.$btnClose.click(h)
        }).apply(this)
    }
    a.prototype.getSanitizeAdInfo = function(g, w) {
        var v = null,
            m = {};
        for (var n = 0; n < SF.Ads.renderedAds.length; n++) {
            v = SF.Ads.renderedAds[n];
            if (v.slot.getAdUnitPath().indexOf(g) !== -1) {
                break
            }
        }
        if (!v) {
            return null
        }
        m.contentUrl = v.slot.getContentUrl();
        var f = SF.Ads.Helpers.getAdRenderData(v);
        if (f) {
            m.position = g;
            m.third_party = f._is_3pas_;
            m.adsense_for_content = f._is_afc_;
            m.height = f._height_;
            m.width = f._width_;
            m.expandable = f._expandable_;
            m.html = f._html_;
            var l = window.bizxPrebid && bizxPrebid.Ads.prebidWinners && bizxPrebid.Ads.prebidWinners[w];
            if (l) {
                m.ad_network = l.bidder;
                if (l.ad) {
                    m.html = l.ad
                } else {
                    if (l.adUrl) {
                        m.html = ""
                    } else {
                        if (window.console && window.console.log) {
                            window.console.log("No ad attributes on prebid response", l)
                        }
                        m.html = ""
                    }
                }
            }
            m.click_urls = [];
            var q = b(m.html);
            var r = b.merge(q.find("a"), q.filter("a"));
            r.each(function(z, B) {
                var x = B.search.replace(/^\?/, "").split("&"),
                    A = {},
                    y;
                for (z = 0; z < x.length; z++) {
                    y = x[z].split("=");
                    A[y[0]] = y[1]
                }
                if (A.adurl) {
                    m.click_urls.push(A.adurl)
                }
            });
            m.adurl_strings = [];
            var e = getIndicesOf("adurl", f._html_);
            var s;
            for (s = 0; s < e.length; s++) {
                m.adurl_strings.push(f._html_.substr(e[s], 200))
            }
            m.destination_strings = [];
            var p = getIndicesOf("destinationUrl", f._html_);
            for (s = 0; s < p.length; s++) {
                m.destination_strings.push(f._html_.substr(p[s], 200))
            }
            m.imgs = [];
            var d = b.merge(q.find("noscript"), q.filter("noscript")).html();
            var o;
            try {
                o = b(d)
            } catch (k) {
                d = b("<div/>").html(d).text();
                o = b(d)
            }
            if (!o.length) {
                var j = f._html_.match(/<NOSCRIPT>([\s\S]+)<\/NOSCRIPT>/i);
                if (j) {
                    o = b(j[1])
                }
            }
            var t = b.merge(q.find("img"), b.merge(q.filter("img"), b.merge(o.find("img"), o.filter("img"))));
            t.each(function(x, y) {
                var z = b(y).attr("src");
                if (z && z.indexOf("google.com/ads/measurement") === -1 && z.indexOf("/branding/googlelogo/") === -1 && z.indexOf("/adchoices/img/") === -1 && !(y.height === 1 && y.width === 1)) {
                    m.imgs.push(z)
                }
            });
            var u = f._html_.match(/https:\/\/tpc\.googlesyndication\.com\/sadbundle\/[0-9]+\//);
            if (u) {
                m.imgs.push(u[0] + "backup.jpg")
            }
            var h = f._html_.match(/http.*backup\.[a-z]{3,4}/);
            if (h) {
                m.imgs.push(h[0])
            }
            m.text = "";
            q.filter("#adunit").find(":not(:has(*))").not("script").not("style").each(function(y, z) {
                var x = b(z);
                if (x.text()) {
                    m.text += x.text() + "\n"
                }
            })
        }
        if (window.console && window.console.log) {
            window.console.log("Ad info is:", m)
        }
        return m
    };
    a.prototype.persistCapturedInfo = function() {
        this.$gptInfo.val(JSON.stringify(this.capturedAdInfo))
    };
    a.prototype.capture = function(e, d) {
        if (!SF.Ads.renderedAds) {
            throw "Attempted to capture ad info, but feature is not enabled"
        }
        this.capturedAdInfo = this.getSanitizeAdInfo(e, d);
        this.persistCapturedInfo();
        return this.capturedAdInfo
    };
    a.prototype.submit = function() {
        var d = this.$form[0];
        if (d && d.checkValidity && !d.checkValidity()) {
            return true
        }
        if (this.dropzone.getQueuedFiles && !this.dropzone.getQueuedFiles().length) {
            b("#messages").notify({
                message: "You must provide a screenshot file.",
                status: "error"
            });
            return false
        }
        b("input[type=submit]", this.$form).attr("disabled", true).attr("value", "Submitting...");
        if (this.dropzone.processQueue) {
            this.dropzone.processQueue();
            return false
        } else {
            return true
        }
    };
    a.prototype.close = function() {
        this.$element.hide();
        this.dropzone.removeAllFiles(true);
        this.dropzone.disable();
        b("#btn-blockthis-submit").attr("disabled", false).attr("value", "Submit Report");
        this.$form.find("input").each(function(d, e) {
            if (e.name !== "_visit_cookie" && e.name !== "timestamp" && e.name !== "spinner" && e.name !== "") {
                b(e).val("")
            }
        });
        return false
    };
    return a
}(window.jQuery));
SF.blockThis = new SF.BlockThis({
    positionSticky: true
});
SF.MyProjects = (function(b) {
    function a() {
        this.init()
    }
    a.prototype.init = function() {
        if (!b("#account-tooltip").length) {
            return
        }
        this.loaded = false;
        this.$logout_li = b('.tooltip-container .account b[title="Log Out"]').parents("li:first");
        this.pending();
        b(window).on("load", this.load.bind(this));
        b("#account-tooltip").click(this.load.bind(this))
    };
    a.prototype.pending = function() {
        this.$logout_li.before('<li class="projects-loading">loading your projects...</li>')
    };
    a.prototype.load = function() {
        if (this.loaded) {
            return
        }
        this.loaded = true;
        var c = b("div#account-tooltip").length ? b("#account-tooltip > a").attr("href") : b("#account-tooltip > li > a").attr("href");
        var d = "/rest" + c;
        b.ajax({
            url: d,
            context: this,
            global: false,
            success: function(h) {
                b(".projects-loading").remove();
                var g = [];
                for (var e = 0; e < h.projects.length; e++) {
                    var f = h.projects[e];
                    var j = b("<i></i>").text(f.name).html();
                    g.push('<li><a href="' + f.url + '">' + j + "</a></li>")
                }
                this.$logout_li.before(g.join(""))
            },
            error: function() {
                this.loaded = false
            }
        })
    };
    return a
})(jQuery);
SF.myProjects = new SF.MyProjects();
SF.captchaSuccessCallbacks = {};
SF.doRecaptcha = function(c, a, d) {
    if (a.length === 0) {
        if (window.console && window.console.log) {
            window.console.log("No recaptcha element found")
        }
        d();
        return
    }
    var b = a.data("sf-recaptcha-id");
    if (b === undefined) {
        window.alert("reCAPTCHA did not get loaded.")
    } else {
        c.preventDefault();
        c.stopPropagation();
        c.stopImmediatePropagation();
        grecaptcha.reset(b);
        SF.captchaSuccessCallbacks[b] = d;
        grecaptcha.execute(b)
    }
};

function activate_form(a) {
    a.removeData("delay-captcha").removeAttr("data-delay-captcha");
    recaptchaLoadCallback()
}

function recaptchaLoadCallback() {
    if (!window.grecaptcha) {
        return
    }
    $(".g-recaptcha").each(function() {
        var a = $(this);
        if (!a.parent().is(":visible")) {
            return
        }
        if (a.data("sf-recaptcha-id") !== undefined) {
            return
        }
        var b = a.parents("form");
        if (b.data("delay-captcha") !== undefined) {
            b.one("click mouseover", function() {
                activate_form(b)
            });
            b.find(":input").one("focus", function() {
                activate_form(b)
            });
            return
        }
        var c = grecaptcha.render(this, {
            callback: function(d) {
                c = a.data("sf-recaptcha-id");
                SF.captchaSuccessCallbacks[c]()
            }
        }, true);
        a.data("sf-recaptcha-id", c);
        if (a.data("run-automatically") !== undefined) {
            b.on("submit.checkCaptcha", function(d) {
                SF.doRecaptcha(d, a, function() {
                    b.off("submit.checkCaptcha");
                    b.submit()
                })
            })
        }
    })
}

function paytrace_encryptValue(a) {
    if (!SF.paytraceKey) {
        throw Error("Set SF.paytraceKey in template first.")
    }
    if (!SF.paytraceForgeKey) {
        SF.paytraceForgeKey = forge.pki.publicKeyFromPem(SF.paytraceKey)
    }
    return forge.util.encode64(SF.paytraceForgeKey.encrypt(a))
}

function openSaveFileDialog(f, c, a) {
    if (!f) {
        return
    }
    var b = f.constructor !== Blob ? new Blob([f], {
        type: a || "application/octet-stream"
    }) : f;
    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(b, c);
        return
    }
    var g = document.createElement("a"),
        d = window.URL,
        e;
    if (a) {
        g.type = a
    }
    g.download = c || "untitled";
    g.href = e = d.createObjectURL(b);
    g.dispatchEvent(new MouseEvent("click"));
    setTimeout(d.revokeObjectURL.bind(d, e))
}

function saveCSV(d, b) {
    d[0].push("Downloaded " + (new Date()).toLocaleString() + " from https://sourceforge.net");
    var a = CSV.arrayToCsv(d);
    var c = a.replace(/\n/g, "\r\n");
    openSaveFileDialog(c, b + ".csv", "text/csv")
};
SF.Widgets = SF.Widgets || {};
SF.Widgets.responsivePlaceholder = function() {
    var a = $("input[data-placeholder]");
    a.each(function() {
        var b = $(this);
        var c = !Foundation.MediaQuery.atLeast("medium") ? b.data("placeholder-small") : b.data("placeholder");
        b.attr("placeholder", c)
    })
};
$(function() {
    $("#site-notification .btn-close").click(function(b) {
        b.preventDefault();
        var a = $(this).parent();
        a.parent().slideToggle();
        var d = a.data("notification-id");
        var c = [d, 0, "True"].join("-");
        $.cookie("site-notification", c, {
            expires: 365,
            path: "/"
        })
    })
});
SF.Widgets.pageLoadingSpinner = function() {
    $(".off-canvas-content").addClass("grayed-out");
    $("#busy-spinner").show()
};
SF.Widgets.DirectorySearchInput = (function() {
    function a() {
        this.$formSearchMain = $("#form-search-main");
        this.$txtSearchMain = $("input[name=q]", this.$formSearchMain);
        this.$btnCancel = $(".btn-search-cancel", this.$formSearchMain);
        this.originalQuery = this.$txtSearchMain.val();
        this.$txtSearchMain.on("input", this.handleTextChange.bind(this));
        this.$btnCancel.on("click", this.handleCancelClick.bind(this));
        this.initialize()
    }
    a.prototype.initialize = function(b) {
        this.handleTextChange()
    };
    a.prototype.handleTextChange = function(b) {
        if (this.$txtSearchMain.val()) {
            this.$btnCancel.show()
        } else {
            this.$btnCancel.hide()
        }
    };
    a.prototype.handleCancelClick = function(b) {
        if (this.$txtSearchMain.val() === this.originalQuery) {
            SF.Widgets.pageLoadingSpinner();
            return true
        } else {
            this.$txtSearchMain.val(this.originalQuery);
            this.handleTextChange();
            b.preventDefault();
            return false
        }
    };
    return a
})();
SF.Widgets.StarRatingBuilder = (function() {
    function a(b) {
        if (!$(".templates-stars").length) {
            throw Error("Star templates missing")
        }
        this.templates = {
            empty: $(".templates-stars .empty")[0].outerHTML,
            half: $(".templates-stars .half")[0].outerHTML,
            full: $(".templates-stars .yellow")[0].outerHTML
        }
    }
    a.prototype.buildHTML = function(c) {
        var f = c;
        var e = '<div class="m-stars" aria-hidden="true">';
        for (var b = 1; b < 6; b++) {
            var d = "empty";
            if (f >= b) {
                d = "full"
            } else {
                if (f >= (b - 0.5)) {
                    d = "half"
                }
            }
            e += this.templates[d]
        }
        e += "</div>";
        return e
    };
    return a
})();
SF.Widgets.ToggleSwitchesOuterLabels = (function() {
    function b() {
        $(".m-toggle-exterior-labels > span").click(a)
    }

    function a(f) {
        var d = $(this);
        var c = parseInt($(this).data("target-val"));
        d.parents(".m-toggle-exterior-labels").find(".switch-input").prop("checked", Boolean(c)).change()
    }
    return b
})();
SF.Widgets.toggleSwitchesOuterLables = SF.Widgets.ToggleSwitchesOuterLabels();
net.sf.ua = navigator.userAgent.toLowerCase();
net.sf.Browser = {
    safari: /webkit/.test(net.sf.ua) && !/chrome/.test(net.sf.ua),
    chrome: /^(?!.*edge).*chrome.*$/.test(net.sf.ua),
    opera: /opera/.test(net.sf.ua),
    msie: /msie/.test(net.sf.ua) && !/opera/.test(net.sf.ua),
    mozilla: /mozilla/.test(net.sf.ua) && !/(compatible|webkit)/.test(net.sf.ua),
    edge: /edge/.test(net.sf.ua)
};
$(function() {
    $(".ie7 .ico[data-icon]").each(function() {
        var b = $(this);
        b.text(b.attr("data-icon"));
        b.css("display", "inline");
        b.css("padding", "0 10px " + Math.max(16, b.height()) + "px 0");
        b.css("height", "0px")
    });
    $("#messages").notifier();
    $(".ui-dialog-titlebar-close").click(function(b) {
        $(this).closest(".ui-widget").hide();
        b.preventDefault()
    });
    $(".ui-widget-overlay").on("click", function() {
        $(".ui-dialog").dialog("close")
    });
    var a = $("#busy-spinner");
    a.hide();
    a.ajaxStart(function() {
        if (!window.location.toString().match("upload")) {
            a.show()
        }
    });
    a.ajaxStop(function() {
        a.hide()
    })
});
if ($ && $.tablesorter) {
    $.tablesorter.addParser({
        id: "localnum",
        is: function(a) {
            return false
        },
        format: function(a) {
            return parseInt(a.split(",").join(""), 10)
        },
        type: "numeric"
    })
}

function addCommas(a) {
    return String(a).replace(new RegExp("(\\d)(?=(\\d\\d\\d)+(?!\\d))", "g"), "$1,")
}

function getQuerystring(b, d) {
    if (d === null) {
        d = ""
    }
    b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var c = new RegExp("[\\?&]" + b + "=([^&#]*)");
    var a = c.exec(window.location.href);
    if (a === null) {
        return d
    } else {
        return a[1]
    }
}
if (SF.seo_debug) {
    $(function() {
        $("a").each(function() {
            var a = $(this).attr("href");
            var d = String(a);
            var b = new RegExp("^(http|https)://(?!(?:sourceforge.net|(.*).sb.sf.net)).*", "gi");
            var c = d.search(b);
            if (c >= 0) {
                $(this).css({
                    background: "#900000",
                    color: "#fff"
                })
            }
        })
    })
}
$(function() {
    if (SF && SF.ad_block_measurement && window.gptadslots) {
        var b = $("body");
        var a = (new Date()).getTime();
        b.append('<img src="/cdn/con/img/green.gif?' + a + '" alt="" style="display:none">');
        if (window.googletag && !SF.Ads.gpt_blocked) {
            b.append('<img src="/cdn/con/img/ad.gif?' + a + '" alt="" style="display:none">')
        }
    }
    if (SF && SF.adblock) {
        $("body").addClass("blocked")
    }
});
$(".psp_newsletter_subscribe.reveal").on("open.zf.reveal", function() {
    recaptchaLoadCallback()
});

function truncateDescrWithExpandLink(a) {
    var c = {
        after: ".read-more",
        watch: "window"
    };
    $(a + "-inner").append('<a href="#" class="read-more">Expand &#x25BE;</a>');
    $(a).dotdotdot(c);
    $(a).on("click", ".read-more", b);

    function b(f) {
        var d = $(this).parents(".description");
        f.preventDefault();
        d.trigger("destroy").css({
            height: "auto"
        });
        d.addClass("untruncated");
        $(".read-more", d).remove()
    }
};
/*!
 * jQuery Typeahead
 * Copyright (C) 2018 RunningCoder.org
 * Licensed under the MIT license
 *
 * @author Tom Bertrand
 * @version 2.10.6 (2018-7-30)
 * @link http://www.runningcoder.org/jquerytypeahead/
 */
! function(e) {
    var t;
    "function" == typeof define && define.amd ? define("jquery-typeahead", ["jquery"], function(t) {
        return e(t)
    }) : "object" == typeof module && module.exports ? module.exports = (void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(void 0)), e(t)) : e(jQuery)
}(function(j) {
    "use strict";
    var i, s = {
            input: null,
            minLength: 2,
            maxLength: !(window.Typeahead = {
                version: "2.10.6"
            }),
            maxItem: 8,
            dynamic: !1,
            delay: 300,
            order: null,
            offset: !1,
            hint: !1,
            accent: !1,
            highlight: !0,
            multiselect: null,
            group: !1,
            groupOrder: null,
            maxItemPerGroup: null,
            dropdownFilter: !1,
            dynamicFilter: null,
            backdrop: !1,
            backdropOnFocus: !1,
            cache: !1,
            ttl: 36e5,
            compression: !1,
            searchOnFocus: !1,
            blurOnTab: !0,
            resultContainer: null,
            generateOnLoad: null,
            mustSelectItem: !1,
            href: null,
            display: ["display"],
            template: null,
            templateValue: null,
            groupTemplate: null,
            correlativeTemplate: !1,
            emptyTemplate: !1,
            cancelButton: !0,
            loadingAnimation: !0,
            filter: !0,
            matcher: null,
            source: null,
            callback: {
                onInit: null,
                onReady: null,
                onShowLayout: null,
                onHideLayout: null,
                onSearch: null,
                onResult: null,
                onLayoutBuiltBefore: null,
                onLayoutBuiltAfter: null,
                onNavigateBefore: null,
                onNavigateAfter: null,
                onEnter: null,
                onLeave: null,
                onClickBefore: null,
                onClickAfter: null,
                onDropdownFilter: null,
                onSendRequest: null,
                onReceiveRequest: null,
                onPopulateSource: null,
                onCacheSave: null,
                onSubmit: null,
                onCancel: null
            },
            selector: {
                container: "typeahead__container",
                result: "typeahead__result",
                list: "typeahead__list",
                group: "typeahead__group",
                item: "typeahead__item",
                empty: "typeahead__empty",
                display: "typeahead__display",
                query: "typeahead__query",
                filter: "typeahead__filter",
                filterButton: "typeahead__filter-button",
                dropdown: "typeahead__dropdown",
                dropdownItem: "typeahead__dropdown-item",
                labelContainer: "typeahead__label-container",
                label: "typeahead__label",
                button: "typeahead__button",
                backdrop: "typeahead__backdrop",
                hint: "typeahead__hint",
                cancelButton: "typeahead__cancel-button"
            },
            debug: !1
        },
        o = {
            from: "ãàáäâẽèéëêìíïîõòóöôùúüûñç",
            to: "aaaaaeeeeeiiiiooooouuuunc"
        },
        n = ~window.navigator.appVersion.indexOf("MSIE 9."),
        r = ~window.navigator.appVersion.indexOf("MSIE 10"),
        a = !!~window.navigator.userAgent.indexOf("Trident") && ~window.navigator.userAgent.indexOf("rv:11"),
        l = function(t, e) {
            this.rawQuery = t.val() || "", this.query = t.val() || "", this.selector = t[0].selector, this.deferred = null, this.tmpSource = {}, this.source = {}, this.dynamicGroups = [], this.hasDynamicGroups = !1, this.generatedGroupCount = 0, this.groupBy = "group", this.groups = [], this.searchGroups = [], this.generateGroups = [], this.requestGroups = [], this.result = [], this.tmpResult = {}, this.groupTemplate = "", this.resultHtml = null, this.resultCount = 0, this.resultCountPerGroup = {}, this.options = e, this.node = t, this.namespace = "." + this.helper.slugify.call(this, this.selector) + ".typeahead", this.isContentEditable = void 0 !== this.node.attr("contenteditable") && "false" !== this.node.attr("contenteditable"), this.container = null, this.resultContainer = null, this.item = null, this.items = null, this.comparedItems = null, this.xhr = {}, this.hintIndex = null, this.filters = {
                dropdown: {},
                dynamic: {}
            }, this.dropdownFilter = {
                static: [],
                dynamic: []
            }, this.dropdownFilterAll = null, this.isDropdownEvent = !1, this.requests = {}, this.backdrop = {}, this.hint = {}, this.label = {}, this.hasDragged = !1, this.focusOnly = !1, this.displayEmptyTemplate, this.__construct()
        };
    l.prototype = {
        _validateCacheMethod: function(t) {
            var e;
            if (!0 === t) t = "localStorage";
            else if ("string" == typeof t && !~["localStorage", "sessionStorage"].indexOf(t)) return !1;
            e = void 0 !== window[t];
            try {
                window[t].setItem("typeahead", "typeahead"), window[t].removeItem("typeahead")
            } catch (t) {
                e = !1
            }
            return e && t || !1
        },
        extendOptions: function() {
            if (this.options.cache = this._validateCacheMethod(this.options.cache), this.options.compression && ("object" == typeof LZString && this.options.cache || (this.options.compression = !1)), this.options.maxLength && !isNaN(this.options.maxLength) || (this.options.maxLength = 1 / 0), void 0 !== this.options.maxItem && ~[0, !1].indexOf(this.options.maxItem) && (this.options.maxItem = 1 / 0), this.options.maxItemPerGroup && !/^\d+$/.test(this.options.maxItemPerGroup) && (this.options.maxItemPerGroup = null), this.options.display && !Array.isArray(this.options.display) && (this.options.display = [this.options.display]), this.options.multiselect && (this.items = [], this.comparedItems = [], "string" == typeof this.options.multiselect.matchOn && (this.options.multiselect.matchOn = [this.options.multiselect.matchOn])), this.options.group && (Array.isArray(this.options.group) || ("string" == typeof this.options.group ? this.options.group = {
                    key: this.options.group
                } : "boolean" == typeof this.options.group && (this.options.group = {
                    key: "group"
                }), this.options.group.key = this.options.group.key || "group")), this.options.highlight && !~["any", !0].indexOf(this.options.highlight) && (this.options.highlight = !1), this.options.dropdownFilter && this.options.dropdownFilter instanceof Object) {
                Array.isArray(this.options.dropdownFilter) || (this.options.dropdownFilter = [this.options.dropdownFilter]);
                for (var t = 0, e = this.options.dropdownFilter.length; t < e; ++t) this.dropdownFilter[this.options.dropdownFilter[t].value ? "static" : "dynamic"].push(this.options.dropdownFilter[t])
            }
            this.options.dynamicFilter && !Array.isArray(this.options.dynamicFilter) && (this.options.dynamicFilter = [this.options.dynamicFilter]), this.options.accent && ("object" == typeof this.options.accent ? this.options.accent.from && this.options.accent.to && (this.options.accent.from.length, this.options.accent.to.length) : this.options.accent = o), this.options.groupTemplate && (this.groupTemplate = this.options.groupTemplate), this.options.resultContainer && ("string" == typeof this.options.resultContainer && (this.options.resultContainer = j(this.options.resultContainer)), this.options.resultContainer instanceof j && this.options.resultContainer[0] && (this.resultContainer = this.options.resultContainer)), this.options.group && this.options.group.key && (this.groupBy = this.options.group.key), this.options.callback && this.options.callback.onClick && (this.options.callback.onClickBefore = this.options.callback.onClick, delete this.options.callback.onClick), this.options.callback && this.options.callback.onNavigate && (this.options.callback.onNavigateBefore = this.options.callback.onNavigate, delete this.options.callback.onNavigate), this.options = j.extend(!0, {}, s, this.options)
        },
        unifySourceFormat: function() {
            var t, e, i;
            for (t in this.dynamicGroups = [], Array.isArray(this.options.source) && (this.options.source = {
                    group: {
                        data: this.options.source
                    }
                }), "string" == typeof this.options.source && (this.options.source = {
                    group: {
                        ajax: {
                            url: this.options.source
                        }
                    }
                }), this.options.source.ajax && (this.options.source = {
                    group: {
                        ajax: this.options.source.ajax
                    }
                }), (this.options.source.url || this.options.source.data) && (this.options.source = {
                    group: this.options.source
                }), this.options.source)
                if (this.options.source.hasOwnProperty(t)) {
                    if ("string" == typeof(e = this.options.source[t]) && (e = {
                            ajax: {
                                url: e
                            }
                        }), i = e.url || e.ajax, Array.isArray(i) ? (e.ajax = "string" == typeof i[0] ? {
                            url: i[0]
                        } : i[0], e.ajax.path = e.ajax.path || i[1] || null) : "object" == typeof e.url ? e.ajax = e.url : "string" == typeof e.url && (e.ajax = {
                            url: e.url
                        }), delete e.url, !e.data && !e.ajax) return !1;
                    e.display && !Array.isArray(e.display) && (e.display = [e.display]), e.minLength = "number" == typeof e.minLength ? e.minLength : this.options.minLength, e.maxLength = "number" == typeof e.maxLength ? e.maxLength : this.options.maxLength, e.dynamic = "boolean" == typeof e.dynamic || this.options.dynamic, e.minLength > e.maxLength && (e.minLength = e.maxLength), this.options.source[t] = e, this.options.source[t].dynamic && this.dynamicGroups.push(t), e.cache = void 0 !== e.cache ? this._validateCacheMethod(e.cache) : this.options.cache, e.compression && ("object" == typeof LZString && e.cache || (e.compression = !1))
                }
            return this.hasDynamicGroups = this.options.dynamic || !!this.dynamicGroups.length, !0
        },
        init: function() {
            this.helper.executeCallback.call(this, this.options.callback.onInit, [this.node]), this.container = this.node.closest("." + this.options.selector.container)
        },
        delegateEvents: function() {
            var i = this,
                t = ["focus" + this.namespace, "input" + this.namespace, "propertychange" + this.namespace, "keydown" + this.namespace, "keyup" + this.namespace, "search" + this.namespace, "generate" + this.namespace];
            j("html").on("touchmove", function() {
                i.hasDragged = !0
            }).on("touchstart", function() {
                i.hasDragged = !1
            }), this.node.closest("form").on("submit", function(t) {
                if (!i.options.mustSelectItem || !i.helper.isEmpty(i.item)) return i.options.backdropOnFocus || i.hideLayout(), i.options.callback.onSubmit ? i.helper.executeCallback.call(i, i.options.callback.onSubmit, [i.node, this, i.item || i.items, t]) : void 0;
                t.preventDefault()
            }).on("reset", function() {
                setTimeout(function() {
                    i.node.trigger("input" + i.namespace), i.hideLayout()
                })
            });
            var s = !1;
            if (this.node.attr("placeholder") && (r || a)) {
                var e = !0;
                this.node.on("focusin focusout", function() {
                    e = !(this.value || !this.placeholder)
                }), this.node.on("input", function(t) {
                    e && (t.stopImmediatePropagation(), e = !1)
                })
            }
            this.node.off(this.namespace).on(t.join(" "), function(t, e) {
                switch (t.type) {
                    case "generate":
                        i.generateSource(Object.keys(i.options.source));
                        break;
                    case "focus":
                        if (i.focusOnly) {
                            i.focusOnly = !1;
                            break
                        }
                        i.options.backdropOnFocus && (i.buildBackdropLayout(), i.showLayout()), i.options.searchOnFocus && !i.item && (i.deferred = j.Deferred(), i.assignQuery(), i.generateSource());
                        break;
                    case "keydown":
                        8 === t.keyCode && i.options.multiselect && i.options.multiselect.cancelOnBackspace && "" === i.query && i.items.length ? i.cancelMultiselectItem(i.items.length - 1, null, t) : t.keyCode && ~[9, 13, 27, 38, 39, 40].indexOf(t.keyCode) && (s = !0, i.navigate(t));
                        break;
                    case "keyup":
                        n && i.node[0].value.replace(/^\s+/, "").toString().length < i.query.length && i.node.trigger("input" + i.namespace);
                        break;
                    case "propertychange":
                        if (s) {
                            s = !1;
                            break
                        }
                    case "input":
                        i.deferred = j.Deferred(), i.assignQuery(), "" === i.rawQuery && "" === i.query && (t.originalEvent = e || {}, i.helper.executeCallback.call(i, i.options.callback.onCancel, [i.node, i.item, t]), i.item = null), i.options.cancelButton && i.toggleCancelButtonVisibility(), i.options.hint && i.hint.container && "" !== i.hint.container.val() && 0 !== i.hint.container.val().indexOf(i.rawQuery) && (i.hint.container.val(""), i.isContentEditable && i.hint.container.text("")), i.hasDynamicGroups ? i.helper.typeWatch(function() {
                            i.generateSource()
                        }, i.options.delay) : i.generateSource();
                        break;
                    case "search":
                        i.searchResult(), i.buildLayout(), i.result.length || i.searchGroups.length && i.displayEmptyTemplate ? i.showLayout() : i.hideLayout(), i.deferred && i.deferred.resolve()
                }
                return i.deferred && i.deferred.promise()
            }), this.options.generateOnLoad && this.node.trigger("generate" + this.namespace)
        },
        assignQuery: function() {
            this.isContentEditable ? this.rawQuery = this.node.text() : this.rawQuery = this.node.val().toString(), this.rawQuery = this.rawQuery.replace(/^\s+/, ""), this.rawQuery !== this.query && (this.query = this.rawQuery)
        },
        filterGenerateSource: function() {
            if (this.searchGroups = [], this.generateGroups = [], !this.focusOnly || this.options.multiselect)
                for (var t in this.options.source)
                    if (this.options.source.hasOwnProperty(t) && this.query.length >= this.options.source[t].minLength && this.query.length <= this.options.source[t].maxLength) {
                        if (this.filters.dropdown && "group" === this.filters.dropdown.key && this.filters.dropdown.value !== t) continue;
                        if (this.searchGroups.push(t), !this.options.source[t].dynamic && this.source[t]) continue;
                        this.generateGroups.push(t)
                    }
        },
        generateSource: function(t) {
            if (this.filterGenerateSource(), Array.isArray(t) && t.length) this.generateGroups = t;
            else if (!this.generateGroups.length) return void this.node.trigger("search" + this.namespace);
            if (this.requestGroups = [], this.generatedGroupCount = 0, this.options.loadingAnimation && this.container.addClass("loading"), !this.helper.isEmpty(this.xhr)) {
                for (var e in this.xhr) this.xhr.hasOwnProperty(e) && this.xhr[e].abort();
                this.xhr = {}
            }
            for (var i, s, o, n, r, a, l, h = this, c = (e = 0, this.generateGroups.length); e < c; ++e) {
                if (i = this.generateGroups[e], n = (o = this.options.source[i]).cache, r = o.compression, n && (a = window[n].getItem("TYPEAHEAD_" + this.selector + ":" + i))) {
                    r && (a = LZString.decompressFromUTF16(a)), l = !1;
                    try {
                        (a = JSON.parse(a + "")).data && a.ttl > (new Date).getTime() ? (this.populateSource(a.data, i), l = !0) : window[n].removeItem("TYPEAHEAD_" + this.selector + ":" + i)
                    } catch (t) {}
                    if (l) continue
                }!o.data || o.ajax ? o.ajax && (this.requests[i] || (this.requests[i] = this.generateRequestObject(i)), this.requestGroups.push(i)) : "function" == typeof o.data ? (s = o.data.call(this), Array.isArray(s) ? h.populateSource(s, i) : "function" == typeof s.promise && function(e) {
                    j.when(s).then(function(t) {
                        t && Array.isArray(t) && h.populateSource(t, e)
                    })
                }(i)) : this.populateSource(j.extend(!0, [], o.data), i)
            }
            return this.requestGroups.length && this.handleRequests(), !!this.generateGroups.length
        },
        generateRequestObject: function(s) {
            var o = this,
                n = this.options.source[s],
                t = {
                    request: {
                        url: n.ajax.url || null,
                        dataType: "json",
                        beforeSend: function(t, e) {
                            o.xhr[s] = t;
                            var i = o.requests[s].callback.beforeSend || n.ajax.beforeSend;
                            "function" == typeof i && i.apply(null, arguments)
                        }
                    },
                    callback: {
                        beforeSend: null,
                        done: null,
                        fail: null,
                        then: null,
                        always: null
                    },
                    extra: {
                        path: n.ajax.path || null,
                        group: s
                    },
                    validForGroup: [s]
                };
            if ("function" != typeof n.ajax && (n.ajax instanceof Object && (t = this.extendXhrObject(t, n.ajax)), 1 < Object.keys(this.options.source).length))
                for (var e in this.requests) this.requests.hasOwnProperty(e) && (this.requests[e].isDuplicated || t.request.url && t.request.url === this.requests[e].request.url && (this.requests[e].validForGroup.push(s), t.isDuplicated = !0, delete t.validForGroup));
            return t
        },
        extendXhrObject: function(t, e) {
            return "object" == typeof e.callback && (t.callback = e.callback, delete e.callback), "function" == typeof e.beforeSend && (t.callback.beforeSend = e.beforeSend, delete e.beforeSend), t.request = j.extend(!0, t.request, e), "jsonp" !== t.request.dataType.toLowerCase() || t.request.jsonpCallback || (t.request.jsonpCallback = "callback_" + t.extra.group), t
        },
        handleRequests: function() {
            var t, h = this,
                c = this.requestGroups.length;
            if (!1 !== this.helper.executeCallback.call(this, this.options.callback.onSendRequest, [this.node, this.query]))
                for (var e = 0, i = this.requestGroups.length; e < i; ++e) t = this.requestGroups[e], this.requests[t].isDuplicated || function(t, r) {
                    if ("function" == typeof h.options.source[t].ajax) {
                        var e = h.options.source[t].ajax.call(h, h.query);
                        if ("object" != typeof(r = h.extendXhrObject(h.generateRequestObject(t), "object" == typeof e ? e : {})).request || !r.request.url) return h.populateSource([], t);
                        h.requests[t] = r
                    }
                    var a, i = !1,
                        l = {};
                    if (~r.request.url.indexOf("{{query}}") && (i || (r = j.extend(!0, {}, r), i = !0), r.request.url = r.request.url.replace("{{query}}", encodeURIComponent(h.query))), r.request.data)
                        for (var s in r.request.data)
                            if (r.request.data.hasOwnProperty(s) && ~String(r.request.data[s]).indexOf("{{query}}")) {
                                i || (r = j.extend(!0, {}, r), i = !0), r.request.data[s] = r.request.data[s].replace("{{query}}", h.query);
                                break
                            }
                    j.ajax(r.request).done(function(t, e, i) {
                        for (var s, o = 0, n = r.validForGroup.length; o < n; o++) s = r.validForGroup[o], "function" == typeof(a = h.requests[s]).callback.done && (l[s] = a.callback.done.call(h, t, e, i))
                    }).fail(function(t, e, i) {
                        for (var s = 0, o = r.validForGroup.length; s < o; s++)(a = h.requests[r.validForGroup[s]]).callback.fail instanceof Function && a.callback.fail.call(h, t, e, i)
                    }).always(function(t, e, i) {
                        for (var s, o = 0, n = r.validForGroup.length; o < n; o++) {
                            if (s = r.validForGroup[o], (a = h.requests[s]).callback.always instanceof Function && a.callback.always.call(h, t, e, i), "abort" === e) return;
                            h.populateSource(null !== t && "function" == typeof t.promise && [] || l[s] || t, a.extra.group, a.extra.path || a.request.path), 0 === (c -= 1) && h.helper.executeCallback.call(h, h.options.callback.onReceiveRequest, [h.node, h.query])
                        }
                    }).then(function(t, e) {
                        for (var i = 0, s = r.validForGroup.length; i < s; i++)(a = h.requests[r.validForGroup[i]]).callback.then instanceof Function && a.callback.then.call(h, t, e)
                    })
                }(t, this.requests[t])
        },
        populateSource: function(i, t, e) {
            var s = this,
                o = this.options.source[t],
                n = o.ajax && o.data;
            e && "string" == typeof e && (i = this.helper.namespace.call(this, e, i)), Array.isArray(i) || (i = []), n && ("function" == typeof n && (n = n()), Array.isArray(n) && (i = i.concat(n)));
            for (var r, a = o.display ? "compiled" === o.display[0] ? o.display[1] : o.display[0] : "compiled" === this.options.display[0] ? this.options.display[1] : this.options.display[0], l = 0, h = i.length; l < h; l++) null !== i[l] && "boolean" != typeof i[l] && ("string" == typeof i[l] && ((r = {})[a] = i[l], i[l] = r), i[l].group = t);
            if (!this.hasDynamicGroups && this.dropdownFilter.dynamic.length) {
                var c, p, u = {};
                for (l = 0, h = i.length; l < h; l++)
                    for (var d = 0, f = this.dropdownFilter.dynamic.length; d < f; d++) c = this.dropdownFilter.dynamic[d].key, (p = i[l][c]) && (this.dropdownFilter.dynamic[d].value || (this.dropdownFilter.dynamic[d].value = []), u[c] || (u[c] = []), ~u[c].indexOf(p.toLowerCase()) || (u[c].push(p.toLowerCase()), this.dropdownFilter.dynamic[d].value.push(p)))
            }
            if (this.options.correlativeTemplate) {
                var m = o.template || this.options.template,
                    g = "";
                if ("function" == typeof m && (m = m.call(this, "", {})), m) {
                    if (Array.isArray(this.options.correlativeTemplate))
                        for (l = 0, h = this.options.correlativeTemplate.length; l < h; l++) g += "{{" + this.options.correlativeTemplate[l] + "}} ";
                    else g = m.replace(/<.+?>/g, " ").replace(/\s{2,}/, " ").trim();
                    for (l = 0, h = i.length; l < h; l++) i[l].compiled = j("<textarea />").html(g.replace(/\{\{([\w\-\.]+)(?:\|(\w+))?}}/g, function(t, e) {
                        return s.helper.namespace.call(s, e, i[l], "get", "")
                    }).trim()).text();
                    o.display ? ~o.display.indexOf("compiled") || o.display.unshift("compiled") : ~this.options.display.indexOf("compiled") || this.options.display.unshift("compiled")
                } else;
            }
            this.options.callback.onPopulateSource && (i = this.helper.executeCallback.call(this, this.options.callback.onPopulateSource, [this.node, i, t, e])), this.tmpSource[t] = Array.isArray(i) && i || [];
            var y = this.options.source[t].cache,
                v = this.options.source[t].compression,
                b = this.options.source[t].ttl || this.options.ttl;
            if (y && !window[y].getItem("TYPEAHEAD_" + this.selector + ":" + t)) {
                this.options.callback.onCacheSave && (i = this.helper.executeCallback.call(this, this.options.callback.onCacheSave, [this.node, i, t, e]));
                var k = JSON.stringify({
                    data: i,
                    ttl: (new Date).getTime() + b
                });
                v && (k = LZString.compressToUTF16(k)), window[y].setItem("TYPEAHEAD_" + this.selector + ":" + t, k)
            }
            this.incrementGeneratedGroup()
        },
        incrementGeneratedGroup: function() {
            if (this.generatedGroupCount++, this.generatedGroupCount === this.generateGroups.length) {
                this.xhr = {};
                for (var t = 0, e = this.generateGroups.length; t < e; t++) this.source[this.generateGroups[t]] = this.tmpSource[this.generateGroups[t]];
                this.hasDynamicGroups || this.buildDropdownItemLayout("dynamic"), this.options.loadingAnimation && this.container.removeClass("loading"), this.node.trigger("search" + this.namespace)
            }
        },
        navigate: function(t) {
            if (this.helper.executeCallback.call(this, this.options.callback.onNavigateBefore, [this.node, this.query, t]), 27 === t.keyCode) return t.preventDefault(), void(this.query.length ? (this.resetInput(), this.node.trigger("input" + this.namespace, [t])) : (this.node.blur(), this.hideLayout()));
            if (this.result.length) {
                var e, i = this.resultContainer.find("." + this.options.selector.item).not("[disabled]"),
                    s = i.filter(".active"),
                    o = s[0] ? i.index(s) : null,
                    n = s[0] ? s.attr("data-index") : null,
                    r = null;
                if (this.clearActiveItem(), this.helper.executeCallback.call(this, this.options.callback.onLeave, [this.node, null !== o && i.eq(o) || void 0, null !== n && this.result[n] || void 0, t]), 13 === t.keyCode) return t.preventDefault(), void(0 < s.length ? "javascript:;" === s.find("a:first")[0].href ? s.find("a:first").trigger("click", t) : s.find("a:first")[0].click() : this.node.closest("form").trigger("submit"));
                if (39 !== t.keyCode) {
                    9 === t.keyCode ? this.options.blurOnTab ? this.hideLayout() : 0 < s.length ? o + 1 < i.length ? (t.preventDefault(), r = o + 1, this.addActiveItem(i.eq(r))) : this.hideLayout() : i.length ? (t.preventDefault(), r = 0, this.addActiveItem(i.first())) : this.hideLayout() : 38 === t.keyCode ? (t.preventDefault(), 0 < s.length ? 0 <= o - 1 && (r = o - 1, this.addActiveItem(i.eq(r))) : i.length && (r = i.length - 1, this.addActiveItem(i.last()))) : 40 === t.keyCode && (t.preventDefault(), 0 < s.length ? o + 1 < i.length && (r = o + 1, this.addActiveItem(i.eq(r))) : i.length && (r = 0, this.addActiveItem(i.first()))), e = null !== r ? i.eq(r).attr("data-index") : null, this.helper.executeCallback.call(this, this.options.callback.onEnter, [this.node, null !== r && i.eq(r) || void 0, null !== e && this.result[e] || void 0, t]), t.preventInputChange && ~[38, 40].indexOf(t.keyCode) && this.buildHintLayout(null !== e && e < this.result.length ? [this.result[e]] : null), this.options.hint && this.hint.container && this.hint.container.css("color", t.preventInputChange ? this.hint.css.color : null === e && this.hint.css.color || this.hint.container.css("background-color") || "fff");
                    var a = null === e || t.preventInputChange ? this.rawQuery : this.getTemplateValue.call(this, this.result[e]);
                    this.node.val(a), this.isContentEditable && this.node.text(a), this.helper.executeCallback.call(this, this.options.callback.onNavigateAfter, [this.node, i, null !== r && i.eq(r).find("a:first") || void 0, null !== e && this.result[e] || void 0, this.query, t])
                } else null !== o ? i.eq(o).find("a:first")[0].click() : this.options.hint && "" !== this.hint.container.val() && this.helper.getCaret(this.node[0]) >= this.query.length && i.filter('[data-index="' + this.hintIndex + '"]').find("a:first")[0].click()
            }
        },
        getTemplateValue: function(i) {
            if (i) {
                var t = i.group && this.options.source[i.group].templateValue || this.options.templateValue;
                if ("function" == typeof t && (t = t.call(this)), !t) return this.helper.namespace.call(this, i.matchedKey, i).toString();
                var s = this;
                return t.replace(/\{\{([\w\-.]+)}}/gi, function(t, e) {
                    return s.helper.namespace.call(s, e, i, "get", "")
                })
            }
        },
        clearActiveItem: function() {
            this.resultContainer.find("." + this.options.selector.item).removeClass("active")
        },
        addActiveItem: function(t) {
            t.addClass("active")
        },
        searchResult: function() {
            this.resetLayout(), !1 !== this.helper.executeCallback.call(this, this.options.callback.onSearch, [this.node, this.query]) && (!this.searchGroups.length || this.options.multiselect && this.options.multiselect.limit && this.items.length >= this.options.multiselect.limit || this.searchResultData(), this.helper.executeCallback.call(this, this.options.callback.onResult, [this.node, this.query, this.result, this.resultCount, this.resultCountPerGroup]), this.isDropdownEvent && (this.helper.executeCallback.call(this, this.options.callback.onDropdownFilter, [this.node, this.query, this.filters.dropdown, this.result]), this.isDropdownEvent = !1))
        },
        searchResultData: function() {
            var t, e, i, s, o, n, r, a, l, h, c, p = this.groupBy,
                u = null,
                d = this.query.toLowerCase(),
                f = this.options.maxItem,
                m = this.options.maxItemPerGroup,
                g = this.filters.dynamic && !this.helper.isEmpty(this.filters.dynamic),
                y = "function" == typeof this.options.matcher && this.options.matcher;
            this.options.accent && (d = this.helper.removeAccent.call(this, d));
            for (var v = 0, b = this.searchGroups.length; v < b; ++v)
                if (F = this.searchGroups[v], !this.filters.dropdown || "group" !== this.filters.dropdown.key || this.filters.dropdown.value === F) {
                    o = void 0 !== this.options.source[F].filter ? this.options.source[F].filter : this.options.filter, r = "function" == typeof this.options.source[F].matcher && this.options.source[F].matcher || y;
                    for (var k = 0, w = this.source[F].length; k < w && (!(this.resultItemCount >= f) || this.options.callback.onResult); k++)
                        if ((!g || this.dynamicFilter.validate.apply(this, [this.source[F][k]])) && null !== (t = this.source[F][k]) && "boolean" != typeof t && (!this.options.multiselect || this.isMultiselectUniqueData(t)) && (!this.filters.dropdown || (t[this.filters.dropdown.key] || "").toLowerCase() === (this.filters.dropdown.value || "").toLowerCase())) {
                            if ((u = "group" === p ? F : t[p] ? t[p] : t.group) && !this.tmpResult[u] && (this.tmpResult[u] = [], this.resultCountPerGroup[u] = 0), m && "group" === p && this.tmpResult[u].length >= m && !this.options.callback.onResult) break;
                            for (var x = 0, C = (S = this.options.source[F].display || this.options.display).length; x < C; ++x) {
                                if (!1 !== o) {
                                    if (void 0 === (s = /\./.test(S[x]) ? this.helper.namespace.call(this, S[x], t) : t[S[x]]) || "" === s) continue;
                                    s = this.helper.cleanStringFromScript(s)
                                }
                                if ("function" == typeof o) {
                                    if (void 0 === (n = o.call(this, t, s))) break;
                                    if (!n) continue;
                                    "object" == typeof n && (t = n)
                                }
                                if (~[void 0, !0].indexOf(o)) {
                                    if (null === s) continue;
                                    if (i = (i = s).toString().toLowerCase(), this.options.accent && (i = this.helper.removeAccent.call(this, i)), e = i.indexOf(d), this.options.correlativeTemplate && "compiled" === S[x] && e < 0 && /\s/.test(d)) {
                                        l = !0, c = i;
                                        for (var q = 0, A = (h = d.split(" ")).length; q < A; q++)
                                            if ("" !== h[q]) {
                                                if (!~c.indexOf(h[q])) {
                                                    l = !1;
                                                    break
                                                }
                                                c = c.replace(h[q], "")
                                            }
                                    }
                                    if (e < 0 && !l) continue;
                                    if (this.options.offset && 0 !== e) continue;
                                    if (r) {
                                        if (void 0 === (a = r.call(this, t, s))) break;
                                        if (!a) continue;
                                        "object" == typeof a && (t = a)
                                    }
                                }
                                if (this.resultCount++, this.resultCountPerGroup[u]++, this.resultItemCount < f) {
                                    if (m && this.tmpResult[u].length >= m) break;
                                    this.tmpResult[u].push(j.extend(!0, {
                                        matchedKey: S[x]
                                    }, t)), this.resultItemCount++
                                }
                                break
                            }
                            if (!this.options.callback.onResult) {
                                if (this.resultItemCount >= f) break;
                                if (m && this.tmpResult[u].length >= m && "group" === p) break
                            }
                        }
                }
            if (this.options.order) {
                var O, S = [];
                for (var F in this.tmpResult)
                    if (this.tmpResult.hasOwnProperty(F)) {
                        for (v = 0, b = this.tmpResult[F].length; v < b; v++) O = this.options.source[this.tmpResult[F][v].group].display || this.options.display, ~S.indexOf(O[0]) || S.push(O[0]);
                        this.tmpResult[F].sort(this.helper.sort(S, "asc" === this.options.order, function(t) {
                            return t.toString().toUpperCase()
                        }))
                    }
            }
            var L = [],
                I = [];
            for (v = 0, b = (I = "function" == typeof this.options.groupOrder ? this.options.groupOrder.apply(this, [this.node, this.query, this.tmpResult, this.resultCount, this.resultCountPerGroup]) : Array.isArray(this.options.groupOrder) ? this.options.groupOrder : "string" == typeof this.options.groupOrder && ~["asc", "desc"].indexOf(this.options.groupOrder) ? Object.keys(this.tmpResult).sort(this.helper.sort([], "asc" === this.options.groupOrder, function(t) {
                    return t.toString().toUpperCase()
                })) : Object.keys(this.tmpResult)).length; v < b; v++) L = L.concat(this.tmpResult[I[v]] || []);
            this.groups = JSON.parse(JSON.stringify(I)), this.result = L
        },
        buildLayout: function() {
            this.buildHtmlLayout(), this.buildBackdropLayout(), this.buildHintLayout(), this.options.callback.onLayoutBuiltBefore && (this.tmpResultHtml = this.helper.executeCallback.call(this, this.options.callback.onLayoutBuiltBefore, [this.node, this.query, this.result, this.resultHtml])), this.tmpResultHtml instanceof j ? this.resultContainer.html(this.tmpResultHtml) : this.resultHtml instanceof j && this.resultContainer.html(this.resultHtml), this.options.callback.onLayoutBuiltAfter && this.helper.executeCallback.call(this, this.options.callback.onLayoutBuiltAfter, [this.node, this.query, this.result])
        },
        buildHtmlLayout: function() {
            if (!1 !== this.options.resultContainer) {
                var h;
                if (this.resultContainer || (this.resultContainer = j("<div/>", {
                        class: this.options.selector.result
                    }), this.container.append(this.resultContainer)), !this.result.length)
                    if (this.options.multiselect && this.options.multiselect.limit && this.items.length >= this.options.multiselect.limit) h = this.options.multiselect.limitTemplate ? "function" == typeof this.options.multiselect.limitTemplate ? this.options.multiselect.limitTemplate.call(this, this.query) : this.options.multiselect.limitTemplate.replace(/\{\{query}}/gi, j("<div>").text(this.helper.cleanStringFromScript(this.query)).html()) : "Can't select more than " + this.items.length + " items.";
                    else {
                        if (!this.options.emptyTemplate || "" === this.query) return;
                        h = "function" == typeof this.options.emptyTemplate ? this.options.emptyTemplate.call(this, this.query) : this.options.emptyTemplate.replace(/\{\{query}}/gi, j("<div>").text(this.helper.cleanStringFromScript(this.query)).html())
                    }
                this.displayEmptyTemplate = !!h;
                var o = this.query.toLowerCase();
                this.options.accent && (o = this.helper.removeAccent.call(this, o));
                var c = this,
                    t = this.groupTemplate || "<ul></ul>",
                    p = !1;
                this.groupTemplate ? t = j(t.replace(/<([^>]+)>\{\{(.+?)}}<\/[^>]+>/g, function(t, e, i, s, o) {
                    var n = "",
                        r = "group" === i ? c.groups : [i];
                    if (!c.result.length) return !0 === p ? "" : (p = !0, "<" + e + ' class="' + c.options.selector.empty + '">' + h + "</" + e + ">");
                    for (var a = 0, l = r.length; a < l; ++a) n += "<" + e + ' data-group-template="' + r[a] + '"><ul></ul></' + e + ">";
                    return n
                })) : (t = j(t), this.result.length || t.append(h instanceof j ? h : '<li class="' + c.options.selector.empty + '">' + h + "</li>")), t.addClass(this.options.selector.list + (this.helper.isEmpty(this.result) ? " empty" : ""));
                for (var e, i, n, s, r, a, l, u, d, f, m, g, y, v = this.groupTemplate && this.result.length && c.groups || [], b = 0, k = this.result.length; b < k; ++b) e = (n = this.result[b]).group, s = !this.options.multiselect && this.options.source[n.group].href || this.options.href, u = [], d = this.options.source[n.group].display || this.options.display, this.options.group && (e = n[this.options.group.key], this.options.group.template && ("function" == typeof this.options.group.template ? i = this.options.group.template.call(this, n) : "string" == typeof this.options.group.template && (i = this.options.group.template.replace(/\{\{([\w\-\.]+)}}/gi, function(t, e) {
                        return c.helper.namespace.call(c, e, n, "get", "")
                    }))), t.find('[data-search-group="' + e + '"]')[0] || (this.groupTemplate ? t.find('[data-group-template="' + e + '"] ul') : t).append(j("<li/>", {
                        class: c.options.selector.group,
                        html: j("<a/>", {
                            href: "javascript:;",
                            html: i || e,
                            tabindex: -1
                        }),
                        "data-search-group": e
                    }))), this.groupTemplate && v.length && ~(m = v.indexOf(e || n.group)) && v.splice(m, 1), r = j("<li/>", {
                        class: c.options.selector.item + " " + c.options.selector.group + "-" + this.helper.slugify.call(this, e),
                        disabled: !!n.disabled,
                        "data-group": e,
                        "data-index": b,
                        html: j("<a/>", {
                            href: s && !n.disabled ? (g = s, y = n, y.href = c.generateHref.call(c, g, y)) : "javascript:;",
                            html: function() {
                                if (a = n.group && c.options.source[n.group].template || c.options.template) "function" == typeof a && (a = a.call(c, c.query, n)), l = a.replace(/\{\{([^\|}]+)(?:\|([^}]+))*}}/gi, function(t, e, i) {
                                    var s = c.helper.cleanStringFromScript(String(c.helper.namespace.call(c, e, n, "get", "")));
                                    return ~(i = i && i.split("|") || []).indexOf("slugify") && (s = c.helper.slugify.call(c, s)), ~i.indexOf("raw") || !0 === c.options.highlight && o && ~d.indexOf(e) && (s = c.helper.highlight.call(c, s, o.split(" "), c.options.accent)), s
                                });
                                else {
                                    for (var t = 0, e = d.length; t < e; t++) void 0 !== (f = /\./.test(d[t]) ? c.helper.namespace.call(c, d[t], n, "get", "") : n[d[t]]) && "" !== f && u.push(f);
                                    l = '<span class="' + c.options.selector.display + '">' + c.helper.cleanStringFromScript(String(u.join(" "))) + "</span>"
                                }(!0 === c.options.highlight && o && !a || "any" === c.options.highlight) && (l = c.helper.highlight.call(c, l, o.split(" "), c.options.accent)), j(this).append(l)
                            }
                        })
                    }),
                    function(t, i, e) {
                        e.on("click", function(t, e) {
                            i.disabled ? t.preventDefault() : (e && "object" == typeof e && (t.originalEvent = e), c.options.mustSelectItem && c.helper.isEmpty(i) ? t.preventDefault() : (c.options.multiselect || (c.item = i), !1 !== c.helper.executeCallback.call(c, c.options.callback.onClickBefore, [c.node, j(this), i, t]) && (t.originalEvent && t.originalEvent.defaultPrevented || t.isDefaultPrevented() || (c.options.multiselect ? (c.query = c.rawQuery = "", c.addMultiselectItemLayout(i)) : (c.focusOnly = !0, c.query = c.rawQuery = c.getTemplateValue.call(c, i), c.isContentEditable && (c.node.text(c.query), c.helper.setCaretAtEnd(c.node[0]))), c.hideLayout(), c.node.val(c.query).focus(), c.options.cancelButton && c.toggleCancelButtonVisibility(), c.helper.executeCallback.call(c, c.options.callback.onClickAfter, [c.node, j(this), i, t])))))
                        }), e.on("mouseenter", function(t) {
                            i.disabled || (c.clearActiveItem(), c.addActiveItem(j(this))), c.helper.executeCallback.call(c, c.options.callback.onEnter, [c.node, j(this), i, t])
                        }), e.on("mouseleave", function(t) {
                            i.disabled || c.clearActiveItem(), c.helper.executeCallback.call(c, c.options.callback.onLeave, [c.node, j(this), i, t])
                        })
                    }(0, n, r), (this.groupTemplate ? t.find('[data-group-template="' + e + '"] ul') : t).append(r);
                if (this.result.length && v.length)
                    for (b = 0, k = v.length; b < k; ++b) t.find('[data-group-template="' + v[b] + '"]').remove();
                this.resultHtml = t
            }
        },
        generateHref: function(t, o) {
            var n = this;
            return "string" == typeof t ? t = t.replace(/\{\{([^\|}]+)(?:\|([^}]+))*}}/gi, function(t, e, i) {
                var s = n.helper.namespace.call(n, e, o, "get", "");
                return ~(i = i && i.split("|") || []).indexOf("slugify") && (s = n.helper.slugify.call(n, s)), s
            }) : "function" == typeof t && (t = t.call(this, o)), t
        },
        getMultiselectComparedData: function(t) {
            var e = "";
            if (Array.isArray(this.options.multiselect.matchOn))
                for (var i = 0, s = this.options.multiselect.matchOn.length; i < s; ++i) e += void 0 !== t[this.options.multiselect.matchOn[i]] ? t[this.options.multiselect.matchOn[i]] : "";
            else {
                var o = JSON.parse(JSON.stringify(t)),
                    n = ["group", "matchedKey", "compiled", "href"];
                for (i = 0, s = n.length; i < s; ++i) delete o[n[i]];
                e = JSON.stringify(o)
            }
            return e
        },
        buildBackdropLayout: function() {
            this.options.backdrop && (this.backdrop.container || (this.backdrop.css = j.extend({
                opacity: .6,
                filter: "alpha(opacity=60)",
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                "z-index": 1040,
                "background-color": "#000"
            }, this.options.backdrop), this.backdrop.container = j("<div/>", {
                class: this.options.selector.backdrop,
                css: this.backdrop.css
            }).insertAfter(this.container)), this.container.addClass("backdrop").css({
                "z-index": this.backdrop.css["z-index"] + 1,
                position: "relative"
            }))
        },
        buildHintLayout: function(t) {
            if (this.options.hint)
                if (this.node[0].scrollWidth > Math.ceil(this.node.innerWidth())) this.hint.container && this.hint.container.val("");
                else {
                    var e = this,
                        i = "",
                        s = (t = t || this.result, this.query.toLowerCase());
                    if (this.options.accent && (s = this.helper.removeAccent.call(this, s)), this.hintIndex = null, this.searchGroups.length) {
                        if (this.hint.container || (this.hint.css = j.extend({
                                "border-color": "transparent",
                                position: "absolute",
                                top: 0,
                                display: "inline",
                                "z-index": -1,
                                float: "none",
                                color: "silver",
                                "box-shadow": "none",
                                cursor: "default",
                                "-webkit-user-select": "none",
                                "-moz-user-select": "none",
                                "-ms-user-select": "none",
                                "user-select": "none"
                            }, this.options.hint), this.hint.container = j("<" + this.node[0].nodeName + "/>", {
                                type: this.node.attr("type"),
                                class: this.node.attr("class"),
                                readonly: !0,
                                unselectable: "on",
                                "aria-hidden": "true",
                                tabindex: -1,
                                click: function() {
                                    e.node.focus()
                                }
                            }).addClass(this.options.selector.hint).css(this.hint.css).insertAfter(this.node), this.node.parent().css({
                                position: "relative"
                            })), this.hint.container.css("color", this.hint.css.color), s)
                            for (var o, n, r, a = 0, l = t.length; a < l; a++)
                                if (!t[a].disabled) {
                                    n = t[a].group;
                                    for (var h = 0, c = (o = this.options.source[n].display || this.options.display).length; h < c; h++)
                                        if (r = String(t[a][o[h]]).toLowerCase(), this.options.accent && (r = this.helper.removeAccent.call(this, r)), 0 === r.indexOf(s)) {
                                            i = String(t[a][o[h]]), this.hintIndex = a;
                                            break
                                        }
                                    if (null !== this.hintIndex) break
                                }
                        var p = 0 < i.length && this.rawQuery + i.substring(this.query.length) || "";
                        this.hint.container.val(p), this.isContentEditable && this.hint.container.text(p)
                    }
                }
        },
        buildDropdownLayout: function() {
            if (this.options.dropdownFilter) {
                var i = this;
                j("<span/>", {
                    class: this.options.selector.filter,
                    html: function() {
                        j(this).append(j("<button/>", {
                            type: "button",
                            class: i.options.selector.filterButton,
                            style: "display: none;",
                            click: function() {
                                i.container.toggleClass("filter");
                                var e = i.namespace + "-dropdown-filter";
                                j("html").off(e), i.container.hasClass("filter") && j("html").on("click" + e + " touchend" + e, function(t) {
                                    j(t.target).closest("." + i.options.selector.filter)[0] && j(t.target).closest(i.container)[0] || i.hasDragged || (i.container.removeClass("filter"), j("html").off(e))
                                })
                            }
                        })), j(this).append(j("<ul/>", {
                            class: i.options.selector.dropdown
                        }))
                    }
                }).insertAfter(i.container.find("." + i.options.selector.query))
            }
        },
        buildDropdownItemLayout: function(t) {
            if (this.options.dropdownFilter) {
                var e, i, o = this,
                    n = "string" == typeof this.options.dropdownFilter && this.options.dropdownFilter || "All",
                    r = this.container.find("." + this.options.selector.dropdown);
                "static" !== t || !0 !== this.options.dropdownFilter && "string" != typeof this.options.dropdownFilter || this.dropdownFilter.static.push({
                    key: "group",
                    template: "{{group}}",
                    all: n,
                    value: Object.keys(this.options.source)
                });
                for (var s = 0, a = this.dropdownFilter[t].length; s < a; s++) {
                    i = this.dropdownFilter[t][s], Array.isArray(i.value) || (i.value = [i.value]), i.all && (this.dropdownFilterAll = i.all);
                    for (var l = 0, h = i.value.length; l <= h; l++) l === h && s !== a - 1 || l === h && s === a - 1 && "static" === t && this.dropdownFilter.dynamic.length || (e = this.dropdownFilterAll || n, i.value[l] ? e = i.template ? i.template.replace(new RegExp("{{" + i.key + "}}", "gi"), i.value[l]) : i.value[l] : this.container.find("." + o.options.selector.filterButton).html(e), function(e, i, s) {
                        r.append(j("<li/>", {
                            class: o.options.selector.dropdownItem + " " + o.helper.slugify.call(o, i.key + "-" + (i.value[e] || n)),
                            html: j("<a/>", {
                                href: "javascript:;",
                                html: s,
                                click: function(t) {
                                    t.preventDefault(), c.call(o, {
                                        key: i.key,
                                        value: i.value[e] || "*",
                                        template: s
                                    })
                                }
                            })
                        }))
                    }(l, i, e))
                }
                this.dropdownFilter[t].length && this.container.find("." + o.options.selector.filterButton).removeAttr("style")
            }

            function c(t) {
                "*" === t.value ? delete this.filters.dropdown : this.filters.dropdown = t, this.container.removeClass("filter").find("." + this.options.selector.filterButton).html(t.template), this.isDropdownEvent = !0, this.node.trigger("input" + this.namespace), this.options.multiselect && this.adjustInputSize(), this.node.focus()
            }
        },
        dynamicFilter: {
            isEnabled: !1,
            init: function() {
                this.options.dynamicFilter && (this.dynamicFilter.bind.call(this), this.dynamicFilter.isEnabled = !0)
            },
            validate: function(t) {
                var e, i, s = null,
                    o = null;
                for (var n in this.filters.dynamic)
                    if (this.filters.dynamic.hasOwnProperty(n) && (i = ~n.indexOf(".") ? this.helper.namespace.call(this, n, t, "get") : t[n], "|" !== this.filters.dynamic[n].modifier || s || (s = i == this.filters.dynamic[n].value || !1), "&" === this.filters.dynamic[n].modifier)) {
                        if (i != this.filters.dynamic[n].value) {
                            o = !1;
                            break
                        }
                        o = !0
                    }
                return e = s, null !== o && !0 === (e = o) && null !== s && (e = s), !!e
            },
            set: function(t, e) {
                var i = t.match(/^([|&])?(.+)/);
                e ? this.filters.dynamic[i[2]] = {
                    modifier: i[1] || "|",
                    value: e
                } : delete this.filters.dynamic[i[2]], this.dynamicFilter.isEnabled && this.generateSource()
            },
            bind: function() {
                for (var t, e = this, i = 0, s = this.options.dynamicFilter.length; i < s; i++) "string" == typeof(t = this.options.dynamicFilter[i]).selector && (t.selector = j(t.selector)), t.selector instanceof j && t.selector[0] && t.key && function(t) {
                    t.selector.off(e.namespace).on("change" + e.namespace, function() {
                        e.dynamicFilter.set.apply(e, [t.key, e.dynamicFilter.getValue(this)])
                    }).trigger("change" + e.namespace)
                }(t)
            },
            getValue: function(t) {
                var e;
                return "SELECT" === t.tagName ? e = t.value : "INPUT" === t.tagName && ("checkbox" === t.type ? e = t.checked && t.getAttribute("value") || t.checked || null : "radio" === t.type && t.checked && (e = t.value)), e
            }
        },
        buildMultiselectLayout: function() {
            if (this.options.multiselect) {
                var t, e = this;
                this.label.container = j("<span/>", {
                    class: this.options.selector.labelContainer,
                    "data-padding-left": parseFloat(this.node.css("padding-left")) || 0,
                    "data-padding-right": parseFloat(this.node.css("padding-right")) || 0,
                    "data-padding-top": parseFloat(this.node.css("padding-top")) || 0,
                    click: function(t) {
                        j(t.target).hasClass(e.options.selector.labelContainer) && e.node.focus()
                    }
                }), this.node.closest("." + this.options.selector.query).prepend(this.label.container), this.options.multiselect.data && (Array.isArray(this.options.multiselect.data) ? this.populateMultiselectData(this.options.multiselect.data) : "function" == typeof this.options.multiselect.data && (t = this.options.multiselect.data.call(this), Array.isArray(t) ? this.populateMultiselectData(t) : "function" == typeof t.promise && j.when(t).then(function(t) {
                    t && Array.isArray(t) && e.populateMultiselectData(t)
                })))
            }
        },
        isMultiselectUniqueData: function(t) {
            for (var e = !0, i = 0, s = this.comparedItems.length; i < s; ++i)
                if (this.comparedItems[i] === this.getMultiselectComparedData(t)) {
                    e = !1;
                    break
                }
            return e
        },
        populateMultiselectData: function(t) {
            for (var e = 0, i = t.length; e < i; ++e) this.addMultiselectItemLayout(t[e]);
            this.node.trigger("search" + this.namespace, {
                origin: "populateMultiselectData"
            })
        },
        addMultiselectItemLayout: function(t) {
            if (this.isMultiselectUniqueData(t)) {
                this.items.push(t), this.comparedItems.push(this.getMultiselectComparedData(t));
                var e, i = this.getTemplateValue(t),
                    s = this,
                    o = this.options.multiselect.href ? "a" : "span",
                    n = j("<span/>", {
                        class: this.options.selector.label,
                        html: j("<" + o + "/>", {
                            text: i,
                            click: function(t) {
                                var e = j(this).closest("." + s.options.selector.label),
                                    i = s.label.container.find("." + s.options.selector.label).index(e);
                                s.options.multiselect.callback && s.helper.executeCallback.call(s, s.options.multiselect.callback.onClick, [s.node, s.items[i], t])
                            },
                            href: this.options.multiselect.href ? (e = s.items[s.items.length - 1], s.generateHref.call(s, s.options.multiselect.href, e)) : null
                        })
                    });
                return n.append(j("<span/>", {
                    class: this.options.selector.cancelButton,
                    html: "×",
                    click: function(t) {
                        var e = j(this).closest("." + s.options.selector.label),
                            i = s.label.container.find("." + s.options.selector.label).index(e);
                        s.cancelMultiselectItem(i, e, t)
                    }
                })), this.label.container.append(n), this.adjustInputSize(), !0
            }
        },
        cancelMultiselectItem: function(t, e, i) {
            var s = this.items[t];
            (e = e || this.label.container.find("." + this.options.selector.label).eq(t)).remove(), this.items.splice(t, 1), this.comparedItems.splice(t, 1), this.options.multiselect.callback && this.helper.executeCallback.call(this, this.options.multiselect.callback.onCancel, [this.node, s, i]), this.adjustInputSize(), this.focusOnly = !0, this.node.focus().trigger("input" + this.namespace, {
                origin: "cancelMultiselectItem"
            })
        },
        adjustInputSize: function() {
            var i = this.node[0].getBoundingClientRect().width - (parseFloat(this.label.container.data("padding-right")) || 0) - (parseFloat(this.label.container.css("padding-left")) || 0),
                s = 0,
                o = 0,
                n = 0,
                r = !1,
                a = 0;
            this.label.container.find("." + this.options.selector.label).filter(function(t, e) {
                0 === t && (a = j(e)[0].getBoundingClientRect().height + parseFloat(j(e).css("margin-bottom") || 0)), s = j(e)[0].getBoundingClientRect().width + parseFloat(j(e).css("margin-right") || 0), .7 * i < n + s && !r && (o++, r = !0), n + s < i ? n += s : (r = !1, n = s)
            });
            var t = parseFloat(this.label.container.data("padding-left") || 0) + (r ? 0 : n),
                e = o * a + parseFloat(this.label.container.data("padding-top") || 0);
            this.container.find("." + this.options.selector.query).find("input, textarea, [contenteditable], .typeahead__hint").css({
                paddingLeft: t,
                paddingTop: e
            })
        },
        showLayout: function() {
            !this.container.hasClass("result") && (this.result.length || this.displayEmptyTemplate || this.options.backdropOnFocus) && (function() {
                var e = this;
                j("html").off("keydown" + this.namespace).on("keydown" + this.namespace, function(t) {
                    t.keyCode && 9 === t.keyCode && setTimeout(function() {
                        j(":focus").closest(e.container).find(e.node)[0] || e.hideLayout()
                    }, 0)
                }), j("html").off("click" + this.namespace + " touchend" + this.namespace).on("click" + this.namespace + " touchend" + this.namespace, function(t) {
                    j(t.target).closest(e.container)[0] || j(t.target).closest("." + e.options.selector.item)[0] || t.target.className === e.options.selector.cancelButton || e.hasDragged || e.hideLayout()
                })
            }.call(this), this.container.addClass([this.result.length || this.searchGroups.length && this.displayEmptyTemplate ? "result " : "", this.options.hint && this.searchGroups.length ? "hint" : "", this.options.backdrop || this.options.backdropOnFocus ? "backdrop" : ""].join(" ")), this.helper.executeCallback.call(this, this.options.callback.onShowLayout, [this.node, this.query]))
        },
        hideLayout: function() {
            (this.container.hasClass("result") || this.container.hasClass("backdrop")) && (this.container.removeClass("result hint filter" + (this.options.backdropOnFocus && j(this.node).is(":focus") ? "" : " backdrop")), this.options.backdropOnFocus && this.container.hasClass("backdrop") || (j("html").off(this.namespace), this.helper.executeCallback.call(this, this.options.callback.onHideLayout, [this.node, this.query])))
        },
        resetLayout: function() {
            this.result = [], this.tmpResult = {}, this.groups = [], this.resultCount = 0, this.resultCountPerGroup = {}, this.resultItemCount = 0, this.resultHtml = null, this.options.hint && this.hint.container && (this.hint.container.val(""), this.isContentEditable && this.hint.container.text(""))
        },
        resetInput: function() {
            this.node.val(""), this.isContentEditable && this.node.text(""), this.query = "", this.rawQuery = ""
        },
        buildCancelButtonLayout: function() {
            if (this.options.cancelButton) {
                var e = this;
                j("<span/>", {
                    class: this.options.selector.cancelButton,
                    html: "×",
                    mousedown: function(t) {
                        t.stopImmediatePropagation(), t.preventDefault(), e.resetInput(), e.node.trigger("input" + e.namespace, [t])
                    }
                }).insertBefore(this.node)
            }
        },
        toggleCancelButtonVisibility: function() {
            this.container.toggleClass("cancel", !!this.query.length)
        },
        __construct: function() {
            this.extendOptions(), this.unifySourceFormat() && (this.dynamicFilter.init.apply(this), this.init(), this.buildDropdownLayout(), this.buildDropdownItemLayout("static"), this.buildMultiselectLayout(), this.delegateEvents(), this.buildCancelButtonLayout(), this.helper.executeCallback.call(this, this.options.callback.onReady, [this.node]))
        },
        helper: {
            isEmpty: function(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e)) return !1;
                return !0
            },
            removeAccent: function(t) {
                if ("string" == typeof t) {
                    var e = o;
                    return "object" == typeof this.options.accent && (e = this.options.accent), t = t.toLowerCase().replace(new RegExp("[" + e.from + "]", "g"), function(t) {
                        return e.to[e.from.indexOf(t)]
                    })
                }
            },
            slugify: function(t) {
                return "" !== (t = String(t)) && (t = (t = this.helper.removeAccent.call(this, t)).replace(/[^-a-z0-9]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "")), t
            },
            sort: function(s, i, o) {
                var n = function(t) {
                    for (var e = 0, i = s.length; e < i; e++)
                        if (void 0 !== t[s[e]]) return o(t[s[e]]);
                    return t
                };
                return i = [-1, 1][+!!i],
                    function(t, e) {
                        return t = n(t), e = n(e), i * ((e < t) - (t < e))
                    }
            },
            replaceAt: function(t, e, i, s) {
                return t.substring(0, e) + s + t.substring(e + i)
            },
            highlight: function(t, e, i) {
                t = String(t);
                var s = i && this.helper.removeAccent.call(this, t) || t,
                    o = [];
                Array.isArray(e) || (e = [e]), e.sort(function(t, e) {
                    return e.length - t.length
                });
                for (var n = e.length - 1; 0 <= n; n--) "" !== e[n].trim() ? e[n] = e[n].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : e.splice(n, 1);
                s.replace(new RegExp("(?:" + e.join("|") + ")(?!([^<]+)?>)", "gi"), function(t, e, i) {
                    o.push({
                        offset: i,
                        length: t.length
                    })
                });
                for (n = o.length - 1; 0 <= n; n--) t = this.helper.replaceAt(t, o[n].offset, o[n].length, "<strong>" + t.substr(o[n].offset, o[n].length) + "</strong>");
                return t
            },
            getCaret: function(t) {
                var e = 0;
                if (t.selectionStart) return t.selectionStart;
                if (document.selection) {
                    var i = document.selection.createRange();
                    if (null === i) return e;
                    var s = t.createTextRange(),
                        o = s.duplicate();
                    s.moveToBookmark(i.getBookmark()), o.setEndPoint("EndToStart", s), e = o.text.length
                } else if (window.getSelection) {
                    var n = window.getSelection();
                    if (n.rangeCount) {
                        var r = n.getRangeAt(0);
                        r.commonAncestorContainer.parentNode == t && (e = r.endOffset)
                    }
                }
                return e
            },
            setCaretAtEnd: function(t) {
                if (void 0 !== window.getSelection && void 0 !== document.createRange) {
                    var e = document.createRange();
                    e.selectNodeContents(t), e.collapse(!1);
                    var i = window.getSelection();
                    i.removeAllRanges(), i.addRange(e)
                } else if (void 0 !== document.body.createTextRange) {
                    var s = document.body.createTextRange();
                    s.moveToElementText(t), s.collapse(!1), s.select()
                }
            },
            cleanStringFromScript: function(t) {
                return "string" == typeof t && t.replace(/<\/?(?:script|iframe)\b[^>]*>/gm, "") || t
            },
            executeCallback: function(t, e) {
                if (t) {
                    var i;
                    if ("function" == typeof t) i = t;
                    else if (("string" == typeof t || Array.isArray(t)) && ("string" == typeof t && (t = [t, []]), "function" != typeof(i = this.helper.namespace.call(this, t[0], window)))) return;
                    return i.apply(this, (t[1] || []).concat(e || []))
                }
            },
            namespace: function(t, e, i, s) {
                if ("string" != typeof t || "" === t) return !1;
                var o = void 0 !== s ? s : void 0;
                if (!~t.indexOf(".")) return e[t] || o;
                for (var n = t.split("."), r = e || window, a = (i = i || "get", ""), l = 0, h = n.length; l < h; l++) {
                    if (void 0 === r[a = n[l]]) {
                        if (~["get", "delete"].indexOf(i)) return void 0 !== s ? s : void 0;
                        r[a] = {}
                    }
                    if (~["set", "create", "delete"].indexOf(i) && l === h - 1) {
                        if ("set" !== i && "create" !== i) return delete r[a], !0;
                        r[a] = o
                    }
                    r = r[a]
                }
                return r
            },
            typeWatch: (i = 0, function(t, e) {
                clearTimeout(i), i = setTimeout(t, e)
            })
        }
    }, j.fn.typeahead = j.typeahead = function(t) {
        return e.typeahead(this, t)
    };
    var e = {
        typeahead: function(t, e) {
            if (e && e.source && "object" == typeof e.source) {
                if ("function" == typeof t) {
                    if (!e.input) return;
                    t = j(e.input)
                }
                if (void 0 === t[0].value && (t[0].value = t.text()), t.length) {
                    if (1 === t.length) return t[0].selector = t.selector || e.input || t[0].nodeName.toLowerCase(), window.Typeahead[t[0].selector] = new l(t, e);
                    for (var i, s = {}, o = 0, n = t.length; o < n; ++o) void 0 !== s[i = t[o].nodeName.toLowerCase()] && (i += o), t[o].selector = i, window.Typeahead[i] = s[i] = new l(t.eq(o), e);
                    return s
                }
            }
        }
    };
    return window.console = window.console || {
        log: function() {}
    }, Array.isArray || (Array.isArray = function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }), "trim" in String.prototype || (String.prototype.trim = function() {
        return this.replace(/^\s+/, "").replace(/\s+$/, "")
    }), "indexOf" in Array.prototype || (Array.prototype.indexOf = function(t, e) {
        void 0 === e && (e = 0), e < 0 && (e += this.length), e < 0 && (e = 0);
        for (var i = this.length; e < i; e++)
            if (e in this && this[e] === t) return e;
        return -1
    }), Object.keys || (Object.keys = function(t) {
        var e, i = [];
        for (e in t) Object.prototype.hasOwnProperty.call(t, e) && i.push(e);
        return i
    }), l
});