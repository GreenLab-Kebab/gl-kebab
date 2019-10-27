define("ralltiir/src/action", ["require", "ralltiir/src/utils/cache", "@searchfe/assert", "ralltiir/src/utils/logger", "@searchfe/underscore", "ralltiir/src/utils/dom", "ralltiir/src/utils/url"], function(require) {
    function a(a, b, R, A, O, S, E) {
        function P() {
            function a(a, c) {
                return function(h) {
                    return arguments[0] = (h || "").replace(/#.*$/, ""), a.apply(c, arguments)
                }
            }
            var h = c.create("pages", {
                onRemove: function(a, c, h) {
                    v.isFunction(a.onRemove) && a.onRemove(c, h)
                },
                limit: 1e6
            });
            return h.get = a(h.get, h), h.set = a(h.set, h), h.contains = a(h.contains, h), h
        }

        function j() {
            return b.pathname + b.search
        }

        function k(c, h) {
            h && S.setInstance(a.createURL(c).toString(), h)
        }

        function U(a) {
            var c = w.parse(a);
            return "sfr" === c.scheme && "index" === c.host ? T : a
        }

        function L() {
            var a, c = j();
            a = F.get(c), a ? a.scrollTop = window.pageYOffset : F.set(c, {
                scrollTop: window.pageYOffset
            })
        }

        function _(c, h) {
            var v = a.ignoreRoot(b.pathname + b.search),
                y = a.createURL(v).toString(),
                w = a.createURL(c, h).toString();
            return g.log("[transfering page] from:", y, "to:", w), F.contains(y) ? void F.set(w, F.get(y)) : void console.warn("current page not found, cannot transfer to", c)
        }

        function I(a) {
            a = a || window.event;
            var c = N(a.target || a.srcElement, function(a) {
                return "A" === a.tagName
            });
            if (c) {
                var h = c.getAttribute("data-sf-href"),
                    g = c.getAttribute("data-sf-options"),
                    v = c.getAttribute("data-visited");
                if (h) {
                    a.preventDefault();
                    try {
                        g = JSON.parse(g) || {}
                    } catch (w) {
                        console.warn("JSON parse failed, fallback to empty options"), g = {}
                    }
                    g.src = "hijack";
                    var b = {
                            event: a,
                            anchor: c
                        },
                        R = C(c) + h;
                    exports.redirect(R, null, g, b), "off" !== v && y.addClass(c, D.visitedClassName)
                }
            }
        }

        function C(a) {
            var c = N(a, function(a) {
                return /(^|\s)rt-view($|\s)/.test(a.className)
            });
            return c ? c.getAttribute("data-base") || "" : ""
        }

        function N(a, c) {
            for (var h = a; null !== h && !c(h);) h = h.parentNode;
            return h
        }
        var F, H, T, M, z, exports = new O,
            D = {},
            $ = {};
        return exports.init = function() {
            exports.started = !1, S.init(this.dispatch), exports.pages = F = P(), H = !1, D = {
                root: "/",
                visitedClassName: "visited"
            }, T = "/", M = !0, z = 0
        }, exports.getState = function() {
            return $
        }, exports.regist = function(a, c) {
            h(a, "invalid path pattern"), h(c, "invalid service"), c.singleton = !0, S.register(a, null, c)
        }, exports.unregist = function(a) {
            S.unRegister(a)
        }, exports.dispatch = function(a, c) {
            h(a, "cannot dispatch with options:" + a);
            var v = S.getOrCreate(c.url, c.pathPattern);
            c.service = v;
            var y = S.getOrCreate(a.url, a.pathPattern, {
                isRendered: !v
            });
            if (a.service = y, v && v === y && !v.singleton) return void g.log("prev service and current service are the same. disabled dispatch.");
            F.contains(a.url) || F.set(a.url, {
                id: z,
                isIndex: M
            }), a.page = F.get(a.url), c.page = F.get(c.url);
            var w = $;
            return $ = {}, H && (H = !1, a.options.src = "back"), a.options && "sync" === a.options.src ? T = a.url || "/" : M = !1, g.log("action dispatching to: " + a.url), exports.emit("dispatching", {
                current: a,
                previous: c,
                extra: $
            }), A.ensureAttached(), E(a, c, w)
        }, exports.isIndexPage = function() {
            return M
        }, exports.exist = function(a) {
            return S.isRegistered(a)
        }, exports.config = function(c) {
            return 0 !== arguments.length && (v.assign(D, c), a.config(D)), D
        }, exports.redirect = function(c, h, y, R, A) {
            g.log("action redirecting to: " + c);
            var O = exports.emit("redirecting", c, h, y, A);
            if (!O) {
                c = U(c), k(c, v.get(R, "service")), v.assign($, R), y = v.assign({}, y, {
                    id: z++
                }), L();
                try {
                    y.silent && _(c, h), a.redirect(c, h, y)
                } catch (e) {
                    throw e.url = w.resolve(D.root, c), b.replace(e.url), exports.emit("redirectFailed", e), e
                }
            }
        }, exports.back = function() {
            H = !0, L(), R.back()
        }, exports.reset = function(c, h, g, y) {
            var w = exports.emit("reseting", c, h, g);
            w || (k(c, v.get(y, "service")), M && (T = c), _(c, h), v.assign($, y), a.reset(c, h, g))
        }, exports.start = function(c) {
            arguments.length && exports.config(c), document.body.addEventListener("click", I), a.start(), exports.started = !0
        }, exports.stop = function() {
            document.body.removeEventListener("click", I), a.stop(), a.clear(), exports.started = !1
        }, exports.destroy = function() {
            exports.stop(), c.destroy("pages"), S.destroy(), exports.pages = F = void 0, S.unRegisterAll()
        }, exports.update = function(c, h, g, v) {
            g = g ? g : {}, g.hasOwnProperty("silent") || (g.silent = !0);
            var y = a.ignoreRoot(b.pathname + b.search),
                w = a.createURL(y).toString(),
                R = a.ignoreRoot(c),
                A = (R || "").replace(/\?.*/, ""),
                O = a.getState(),
                S = {
                    from: {
                        url: w
                    },
                    to: {
                        url: R,
                        path: A
                    },
                    extra: v
                };
            return exports.partialUpdate(c, {
                replace: !0,
                state: O,
                transition: S,
                to: v && v.container && v.container.get(0),
                query: h,
                options: g
            })
        }, exports.partialUpdate = function(c, h) {
            var g = a.ignoreRoot(b.pathname + b.search),
                y = a.createURL(g).toString(),
                w = F.get(y);
            _(c, h.query), h = v.assign({}, {
                fromUrl: c,
                replace: !1,
                routerOptions: {},
                page: w
            }, h);
            var R = S.getOrCreate(c),
                A = R.partialUpdate(c, h);
            return h.routerOptions.silent = !0, a.reset(c || b.href, h.query, h.routerOptions), Promise.resolve(A)
        }, exports.init(), exports
    }
    var c = require("ralltiir/src/utils/cache"),
        h = require("@searchfe/assert"),
        g = require("ralltiir/src/utils/logger"),
        v = require("@searchfe/underscore"),
        y = require("ralltiir/src/utils/dom"),
        w = require("ralltiir/src/utils/url");
    return a
}), define("ralltiir/src/config", ["require", "ralltiir/src/action", "ralltiir/src/dispatch", "ralltiir/src/transitions", "ralltiir/src/router/router", "ralltiir/src/services", "ralltiir/src/resource", "ralltiir/src/doc", "ralltiir/src/utils/cache", "ralltiir/src/utils/http", "ralltiir/src/utils/url", "ralltiir/src/utils/di", "ralltiir/src/utils/emitter", "@searchfe/assert", "@searchfe/underscore", "ralltiir/src/lang/map", "ralltiir/src/utils/logger"], function(require) {
    var a = {
        action: {
            type: "factory",
            module: require("ralltiir/src/action"),
            args: ["router", "location", "history", "doc", "emitter", "services", "dispatch"]
        },
        dispatch: {
            type: "factory",
            module: require("ralltiir/src/dispatch")
        },
        transitions: {
            type: "value",
            module: require("ralltiir/src/transitions")
        },
        router: {
            type: "factory",
            module: require("ralltiir/src/router/router")
        },
        services: {
            type: "factory",
            args: ["router"],
            module: require("ralltiir/src/services")
        },
        resource: {
            type: "value",
            module: require("ralltiir/src/resource")
        },
        doc: {
            type: "factory",
            module: require("ralltiir/src/doc"),
            args: ["document"]
        },
        cache: {
            type: "value",
            module: require("ralltiir/src/utils/cache")
        },
        http: {
            type: "value",
            module: require("ralltiir/src/utils/http")
        },
        url: {
            type: "value",
            module: require("ralltiir/src/utils/url")
        },
        di: {
            type: "value",
            module: require("ralltiir/src/utils/di")
        },
        emitter: {
            type: "value",
            module: require("ralltiir/src/utils/emitter")
        },
        assert: {
            type: "value",
            module: require("@searchfe/assert")
        },
        _: {
            type: "value",
            module: require("@searchfe/underscore")
        },
        promise: {
            type: "value",
            module: window.Promise
        },
        map: {
            type: "value",
            module: require("ralltiir/src/lang/map")
        },
        window: {
            type: "value",
            value: window
        },
        document: {
            type: "value",
            value: window.document
        },
        location: {
            type: "value",
            value: window.location
        },
        history: {
            type: "value",
            value: window.history
        },
        logger: {
            type: "value",
            module: require("ralltiir/src/utils/logger")
        }
    };
    return a
}), define("ralltiir/src/dispatch", ["require", "ralltiir/src/transitions", "@searchfe/underscore"], function(require) {
    var a = require("ralltiir/src/transitions"),
        c = require("@searchfe/underscore");
    return function(h) {
        function g(a, g, v) {
            return w.reset([function() {
                return g.service ? g.service.singleton ? g.service.detach(a, g, v) : g.service.beforeDetach(a, g, v) : void 0
            }, function() {
                return a.service ? a.service.singleton ? a.service.create(a, g, v) : a.service.beforeAttach(a, g, v) : void 0
            }, function() {
                return g.service ? g.service.singleton ? g.service.destroy(a, g, v) : g.service.detach(a, g, v) : void 0
            }, function() {
                return a.service ? a.service.attach(a, g, v) : void 0
            }]).exec(function() {
                a.service && a.service.abort && a.service.abort(a, g, v)
            }, function(e) {
                console.error(e), "sync" !== c.get(a, "options.src") && h.replace(h.href)
            })
        }

        function v() {
            function a(q) {
                return w = q, y = (y + 1) % v, exports
            }

            function h(a, h) {
                var v = y;
                c.isFunction(g) && g(), g = a;
                var b = function(a, c) {
                    var h = Promise.resolve("init"),
                        g = [];
                    return a.forEach(function(v, y) {
                        h = h.then(function() {
                            return c(v, y, a)
                        }).then(function(x) {
                            return g.push(x)
                        })
                    }), h.then(function() {
                        return g
                    })
                };
                return b(w, function(a) {
                    return "function" == typeof a && v === y ? a() : void 0
                }).catch(h).then(function() {
                    g = null
                })
            }
            var g, v = 1e4,
                y = 0,
                w = [],
                exports = {
                    reset: a,
                    exec: h,
                    aborted: !1
                };
            return exports
        }

        function y(h, v, y) {
            if (h.service && h.service.guard && h.service.guard(h, v) === !1) return !1;
            if (v.service && v.service.guard && v.service.guard(h, v) === !1) return !1;
            var w = v.service && v.service.name,
                b = h.service && h.service.name,
                R = a.getImpl(w, b);
            if (R) {
                var A = c.assign({
                    prev: v,
                    current: h
                }, h, y);
                return R(v.service, h.service, A)
            }
            return g(h, v, y)
        }
        var w = v();
        return y
    }
}), define("ralltiir/src/doc", ["require"], function() {
    function a(a) {
        function c() {
            var c = a.querySelector("#sfr-app");
            c || a.body.appendChild(h)
        }
        var h = a.querySelector("#sfr-app");
        return h || (h = a.createElement("div"), h.setAttribute("id", "sfr-app")), h.ensureAttached = c, h.ensureAttached(), h
    }
    return a
}), define("ralltiir/src/index", ["ralltiir/src/utils/di", "ralltiir/src/config"], function(a, c) {
    var h = new a(c);
    return Object.keys(c).forEach(h.resolve, h), h.container
}), define("ralltiir/src/lang/map", ["require", "@searchfe/underscore"], function(require) {
    function a() {
        this.size = 0, this._data = {}
    }

    function c(a) {
        return h.isRegExp(a) ? "reg_" + a : h.isString(a) ? "str_" + a : "other_" + a
    }
    var h = require("@searchfe/underscore");
    return a.prototype.set = function(a, h) {
        var g = c(a);
        this._data.hasOwnProperty(g) || this.size++, this._data[g] = {
            key: a,
            value: h
        }
    }, a.prototype.keys = function() {
        var a = this._data;
        return Object.keys(this._data).map(function(c) {
            var h = a[c];
            return h.key
        })
    }, a.prototype.forEach = function(a) {
        var c = this._data;
        Object.keys(this._data).forEach(function(h) {
            var g = c[h];
            a(g.value, g.key)
        })
    }, a.prototype.has = function(a) {
        var h = c(a);
        return this._data.hasOwnProperty(h)
    }, a.prototype.delete = function(a) {
        var h = c(a);
        this._data.hasOwnProperty(h) && (delete this._data[h], this.size--)
    }, a.prototype.get = function(a) {
        var h = c(a),
            g = this._data[h];
        return g ? g.value : void 0
    }, a.prototype.clear = function() {
        this.size = 0, this._data = {}
    }, a
}), define("ralltiir/src/resource", ["require", "ralltiir/src/utils/http", "@searchfe/underscore"], function(require) {
    function a(a) {
        this.url = a
    }
    var c = require("ralltiir/src/utils/http"),
        h = require("@searchfe/underscore");
    return a.prototype = {
        getUrl: function(a) {
            var c = this.url;
            return h.forOwn(a, function(a, h) {
                c = c.replace(":" + h, a)
            }), c = c.replace(/:[a-zA-Z]\w*/g, "")
        },
        create: function(a, h) {
            var g = this.getUrl(h);
            return c.post(g, a)
        },
        query: function(a) {
            var h = this.getUrl(a);
            return c.get(h)
        },
        update: function(a, h) {
            var g = this.getUrl(h);
            return c.put(g, a)
        },
        "delete": function(a) {
            var h = this.getUrl(a);
            return c.delete(h)
        }
    }, a.prototype.constructor = a, a
}), define("ralltiir/src/router/router", ["require", "@searchfe/underscore", "ralltiir/src/router/router/config", "ralltiir/src/router/router/controller", "ralltiir/src/utils/logger"], function(require) {
    function a() {
        function a(a) {
            var c = -1;
            return a = a.toString(), S.some(function(h, i) {
                return h.raw.toString() === a && (c = i), -1 !== c
            }), c
        }

        function w(a, c) {
            for (var h, g = {}, v = c.params || [], y = a.match(c.path) || [], i = 1; i < y.length; i++) h = v[i - 1] || "$" + i, g[h] = decodeURIComponent(y[i]);
            return g
        }

        function b(a, h) {
            y.log("router apply: " + a), h = h || {};
            var v, b = c({}, a.getQuery()),
                A = {},
                O = a.getPath();
            if (v = R(a), !v) throw new Error("can not find route for: " + O);
            v.path instanceof RegExp && v.path.test(O) && (A = w(O, v));
            var S = {
                    path: O,
                    pathPattern: v.raw,
                    query: b,
                    params: A,
                    url: g.ignoreRoot(a.toString()),
                    originalUrl: a.toString(),
                    options: h
                },
                P = [S, E];
            E = S, y.log("router calling handler: " + v.name), v.fn.apply(v.thisArg, P)
        }

        function R(a) {
            var c, h, g = a.getPath();
            return y.log("finding handlers for", a, "in rules:", S), S.some(function(v) {
                return v.path instanceof RegExp ? v.path.test(g) && (c = v) : a.equalPath(v.path) && (c = v), v.path || (h = v), !!c
            }), c || h
        }

        function A(a) {
            var c = {
                params: []
            };
            return c.path = a.replace(/:([^\/]+)/g, function(a, h) {
                return c.params.push(h), "([^/]+)"
            }), c.path = new RegExp("^" + c.path + "$"), c
        }
        var O = {},
            S = [],
            E = {};
        return O.pathPattern = function(a) {
            a = g.ignoreRoot(a);
            var c = g.createURL(a),
                h = R(c);
            return h ? h.raw : null
        }, O.reset = function(a, c, h) {
            g.reset(a, c, h)
        }, O.config = function(a) {
            a = a || {};
            var g = a.root;
            g && "/" === g.charAt(g.length - 1) && (g = a.root = g.substring(0, g.length - 1)), g && "/" !== g.charAt(0) && (a.root = "/" + g), c(h, a)
        }, O.add = function(h, g, y) {
            if (a(h) >= 0) throw new Error("path already exist");
            var w = {
                raw: h,
                path: h,
                fn: g,
                thisArg: y
            };
            v.isString(h) && v.contains(h, ":") && (w = c(w, A(h))), S.push(w)
        }, O.remove = function(c) {
            var i = a(c);
            i >= 0 && S.splice(i, 1)
        }, O.exist = function(c) {
            return a(c) >= 0
        }, O.clear = function() {
            S = []
        }, O.redirect = function(a, c, h) {
            y.log("router redirecting to: " + a), g.redirect(a, c, h)
        }, O.start = function(a) {
            O.config(a), g.init(b)
        }, O.stop = function() {
            g.dispose(), O.clear(), E = {}
        }, O.controller = function(a) {
            var c = g;
            g = a, v.forOwn(c, function(a, c) {
                g.hasOwnProperty(c) || (g[c] = a)
            })
        }, O.getState = function() {
            return E
        }, O.ignoreRoot = g.ignoreRoot, O.createURL = g.createURL, O
    }
    var c = require("@searchfe/underscore").extend,
        h = require("ralltiir/src/router/router/config"),
        g = require("ralltiir/src/router/router/controller"),
        v = require("@searchfe/underscore"),
        y = require("ralltiir/src/utils/logger");
    return a
}), define("ralltiir/src/router/router/URL", ["require", "ralltiir/src/utils/uri/component/Path", "ralltiir/src/utils/uri/component/Query", "ralltiir/src/utils/uri/component/Fragment", "ralltiir/src/router/router/config"], function(require) {
    function a(a, b) {
        b = b || {}, a = (a || "").trim() || v.path;
        var R = y.exec(a);
        R || console.warn("URI not valid:");
        var A = this.token = b.token || w,
            O = b.root || v.root;
        "/" === O.charAt(O.length - 1) && (O = O.substring(0, O.length - 1)), this.root = O, a = a.split("#"), this.fragment = new g(a[1]), a = a[0].split(A);
        var S = b.base || {};
        this.path = new c(a[0], S.path), this.query = new h(a[1]);
        var E = this.path.get();
        this.outRoot = 0 === E.indexOf(".."), this.outRoot && (E = c.resolve(O + "/", E), 0 === E.indexOf(O) && (E = E.substring(O.length), this.path.set(E), this.outRoot = !1)), this.outRoot || "/" === E.charAt(0) || this.path.set("/" + E), b.query && this.query.add(b.query)
    }
    var c = require("ralltiir/src/utils/uri/component/Path"),
        h = require("ralltiir/src/utils/uri/component/Query"),
        g = require("ralltiir/src/utils/uri/component/Fragment"),
        v = require("ralltiir/src/router/router/config"),
        y = new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"),
        w = "?";
    return a.prototype.toString = function() {
        var a = this.root,
            h = this.path.get();
        return h = this.outRoot ? c.resolve(a + "/", h) : a + h, h + this.query.toString(this.token) + this.fragment.toString()
    }, a.prototype.equalPath = function(a) {
        return this.path.get() === a
    }, a.prototype.equal = function(a) {
        return this.query.equal(a.query) && this.equalPath(a.path.get())
    }, a.prototype.equalWithFragment = function(a) {
        return this.equal(a) && this.fragment.equal(a.fragment)
    }, a.prototype.getQuery = function() {
        return this.query.get()
    }, a.prototype.getPath = function() {
        return this.path.get()
    }, a
}), define("ralltiir/src/router/router/config", [], {
    path: "/",
    root: "",
    mode: "async"
}), define("ralltiir/src/router/router/controller", ["require", "@searchfe/underscore", "ralltiir/src/router/router/URL", "ralltiir/src/router/router/config"], function(require) {
    function a(a, h) {
        c(a, h) || (w(a, h), b = a)
    }

    function c(a, c) {
        return b && a.equal(b) && !c.force
    }

    function h(a) {
        var c = O.root;
        if ("/" === a.charAt(0) && c)
            if (0 === a.indexOf(c)) a = a.replace(c, "");
            else {
                var h = c.split("/").slice(1);
                h = h.map(function() {
                    return ".."
                }), a = h.join("/") + a, b = null
            }
        return a
    }

    function g(a, c) {
        return a || (a = h(location.pathname)), new A(a, {
            query: c,
            base: b
        })
    }

    function v(e, c) {
        if (e = e || {}, !R.get(e, "state.disableServiceDispatch")) {
            var v = h(location.pathname);
            if (location.search.length > 1 && (v += location.search), v = g(v), v.outRoot) return y(v.toString(), !0);
            var w = c ? {
                src: "sync"
            } : R.extend({}, e.state, {
                src: "history"
            });
            a(v, w)
        }
    }

    function y(a, c) {
        exports.dispose(), c ? location.replace(a) : location.href = a
    }
    var w, b, R = require("@searchfe/underscore"),
        A = require("ralltiir/src/router/router/URL"),
        O = require("ralltiir/src/router/router/config"),
        exports = {};
    return exports.init = function(a) {
        window.addEventListener("popstate", v, !1), w = a, v(null, !0)
    }, exports.redirect = function(h, v, w) {
        return w = w || {}, h = g(h, v), h.outRoot || "page" === O.mode ? !c(h, w) && y(h.toString()) : (b.equalWithFragment(h) || history.pushState(w, w.title, h.toString()), void(w.silent || a(h, w)))
    }, exports.reset = function(h, v, w) {
        return w = w || {}, h = g(h, v), h.outRoot || "page" === O.mode ? !c(h, w) && y(h.toString()) : (w.silent ? b = h : a(h, w), void history.replaceState(w, w.title, h.toString()))
    }, exports.dispose = function() {
        window.removeEventListener("popstate", v, !1), b = null
    }, exports.ignoreRoot = h, exports.createURL = g, exports
}), define("ralltiir/src/services", ["require", "ralltiir/src/lang/map", "@searchfe/underscore", "@searchfe/assert", "ralltiir/src/utils/logger", "ralltiir/src/utils/cache"], function(require) {
    var a = require("ralltiir/src/lang/map"),
        c = require("@searchfe/underscore"),
        h = require("@searchfe/assert"),
        g = require("ralltiir/src/utils/logger"),
        v = require("ralltiir/src/utils/cache");
    return function(y) {
        function w(n) {
            return exports.serviceInstances.setLimit(n)
        }

        function b(h) {
            F = new a, N = h, C = exports.urlEntries = new a, I = exports.serviceInstances = v.create("services", {
                onRemove: function(a, h, g) {
                    return !a.singleton && c.isFunction(a.destroy) ? a.destroy(h, g) : void 0
                },
                limit: 8
            })
        }

        function R() {
            v.destroy("services")
        }

        function A(a, v, w) {
            h(a, "invalid path pattern"), h(w, "cannot register empty service"), h(!C.has(a), "path already registerd"), v = c.assign({}, v, {
                pathPattern: a
            }), y.add(a, N), C.set(a, {
                service: w,
                config: v
            }), g.info("service", w, "registered to", a)
        }

        function O(a, g) {
            h(g, "message target should be set explicitly"), I.forEach(function(h) {
                c.isFunction(h.onMessage) && ("*" === g || g === h.name) && setTimeout(function() {
                    h.onMessage(a)
                })
            })
        }

        function S(a) {
            return C.has(a)
        }

        function E() {
            C.keys().forEach(P), C.clear()
        }

        function P(a) {
            h(a, "invalid path pattern"), h(S(a), "path not registered"), y.remove(a), C.delete(a), g.info("service unregistered from: " + a)
        }

        function j(a) {
            var c = F.get(a);
            return void 0 === c ? void 0 : I.get(c)
        }

        function k(a, c) {
            var h = H++;
            return F.set(a, h), c.id = h, I.set(h, c), c
        }

        function U(a, h, g) {
            var v = j(a);
            if (v) return v;
            arguments.length < 2 && (h = y.pathPattern(a));
            var w = C.get(h);
            if (w) {
                var b = w.service,
                    R = c.assign({}, w.config, g),
                    A = b.singleton ? b : new b(a, R);
                return k(a, A)
            }
        }

        function L(a, c) {
            var h = F.get(a);
            return void 0 !== h ? (F.set(c, h), !0) : !1
        }

        function _(a, c) {
            void 0 !== c.id ? F.set(a, c.id) : k(a, c)
        }
        var I, C, N, F, exports = {
                init: b,
                destroy: R,
                register: A,
                postMessage: O,
                unRegister: P,
                isRegistered: S,
                unRegisterAll: E,
                getOrCreate: U,
                setInstanceLimit: w,
                copyServiceMapping: L,
                urlEntries: null,
                setInstance: _
            },
            H = 0;
        return exports
    }
}), define("ralltiir/src/transitions", ["require", "@searchfe/underscore"], function(require) {
    function a(a) {
        a.impl = a.impl || v.noop, g.push(a)
    }

    function c() {
        g = []
    }

    function h(a, c) {
        for (var i = 0; i < g.length; i++) {
            var h = g[i];
            if (h.from === a && h.to === c) return h.impl
        }
    }
    var g = [],
        v = require("@searchfe/underscore");
    return {
        register: a,
        getImpl: h,
        clear: c
    }
}), define("ralltiir/src/utils/cache-namespace", ["require", "@searchfe/underscore"], function(require) {
    function a() {}

    function c(c, g) {
        this.name = c, this.list = [], this.options = h.assign({
            limit: 3,
            onRemove: a
        }, g)
    }
    var h = require("@searchfe/underscore");
    return c.prototype = {
        constructor: c,
        setLimit: function(a) {
            this.options.limit = a
        },
        get: function(a) {
            var c = this.findIndexByKey(a);
            if (-1 === c) return void 0;
            var h = this.list[c];
            return this.list.splice(c, 1), this.list.push(h), h.value
        },
        set: function(a, c) {
            for (this.remove(a); this.list.length >= this.options.limit;) {
                var h = this.list.shift();
                this.options.onRemove(h.value, h.key, !0)
            }
            return this.list.push({
                key: a,
                value: c
            }), this
        },
        contains: function(a) {
            return this.has(a)
        },
        has: function(a) {
            return this.findIndexByKey(a) > -1
        },
        rename: function(a, c) {
            if (a === c) return this;
            this.remove(c);
            var h = this.findIndexByKey(a);
            if (-1 === h) throw new Error("key not found:" + a);
            return this.list[h].key = c, this
        },
        remove: function(a) {
            var c = this.findIndexByKey(a);
            if (c > -1) {
                var h = this.list[c];
                this.options.onRemove(h.value, h.key, !1), this.list.splice(c, 1)
            }
            return this
        },
        forEach: function(a) {
            this.list.forEach(function(c) {
                a(c.value, c.key)
            })
        },
        size: function() {
            return this.list.length
        },
        clear: function() {
            return this.list = [], this
        },
        findIndexByKey: function(a) {
            return h.findIndex(this.list, function(c) {
                return c.key === a
            })
        }
    }, c
}), define("ralltiir/src/utils/cache", ["require", "@searchfe/assert", "ralltiir/src/utils/cache-namespace"], function(require) {
    function a(a) {
        if (!g.hasOwnProperty(a)) throw new Error("cache namespace " + a + " undefined");
        return g[a]
    }
    var c = require("@searchfe/assert"),
        h = require("ralltiir/src/utils/cache-namespace"),
        g = {},
        exports = {};
    return exports.create = function(a, v) {
        return c(a, "cannot create namespace with empty name"), c(!g[a], "namespace with " + a + " already created"), g[a] = new h(a, v)
    }, exports.destroy = function(a) {
        c(g[a], "namespace with " + a + " not exist"), delete g[a]
    }, exports.using = function(c) {
        return a(c)
    }, exports.set = function(c, h, g) {
        return a(c).set(h, g)
    }, exports.get = function(c, h) {
        return a(c).get(h)
    }, exports.size = function(c) {
        return a(c).size()
    }, exports.rename = function(c, h, g) {
        return a(c).rename(h, g)
    }, exports.remove = function(c, h) {
        return a(c).remove(h)
    }, exports.clear = function(c) {
        return 0 !== arguments.length ? a(c).clear() : void(g = {})
    }, exports.contains = function(a, c) {
        if (0 === arguments.length) throw new Error("namespace not specified");
        return 1 === arguments.length ? g.hasOwnProperty(a) : g.hasOwnProperty(a) ? g[a].contains(c) : !1
    }, exports.has = function(a) {
        return g.hasOwnProperty(a)
    }, exports
}), define("ralltiir/src/utils/di", ["require", "@searchfe/assert", "@searchfe/underscore"], function(require) {
    function a(a) {
        this.config = this.normalize(a), this.container = Object.create(null)
    }
    var c = require("@searchfe/assert"),
        h = require("@searchfe/underscore");
    return a.prototype.resolve = function(a) {
        var h = this.config[a];
        if (c(h, "module declaration not found: " + a), this.container[a] && h.cache) return this.container[a];
        switch (void 0 === h.value && h.module && (h.value = h.module), h.type) {
            case "value":
                return this.container[a] = h.value;
            case "factory":
                c("function" == typeof h.value, "entity not injectable: " + h.value);
                var g = h.args || [];
                return this.container[a] = this.inject(h.value, g);
            default:
                throw new Error("DI type " + h.type + " not recognized")
        }
    }, a.prototype.inject = function(a, c) {
        var h = c.map(function(a) {
            return this.resolve(a)
        }, this);
        return a.apply(null, h)
    }, a.prototype.normalize = function(a) {
        return h.forOwn(a, function(a) {
            void 0 === a.cache && (a.cache = !0), void 0 === a.type && (a.type = "value")
        }), a
    }, a
}), define("ralltiir/src/utils/dom", ["require"], function() {
    function a(a, h) {
        c(a, h) || (a.className && (a.className += " "), a.className += h)
    }

    function c(a, c) {
        return h(c).test(a.className)
    }

    function h(a) {
        return new RegExp("(^|\\s)" + a + "(\\s|$)")
    }
    return {
        addClass: a,
        hasClass: c
    }
}), define("ralltiir/src/utils/emitter", ["require"], function() {
    function a() {}
    var c = a.prototype;
    c._getEvents = function() {
        return this._events || (this._events = {}), this._events
    }, c._getMaxListeners = function() {
        return isNaN(this.maxListeners) && (this.maxListeners = 10), this.maxListeners
    }, c.on = function(a, c) {
        var h = this._getEvents(),
            g = this._getMaxListeners();
        h[a] = h[a] || [];
        var v = h[a].length;
        if (v >= g && 0 !== g) {
            var y = "Warning: possible Emitter memory leak detected. " + v + " listeners added.";
            console.warn(y)
        }
        return h[a].push(c), this
    }, c.once = function(a, c) {
        function h() {
            return g.off(a, h), c.apply(this, arguments)
        }
        var g = this;
        return h.listener = c, this.on(a, h), this
    }, c.off = function(a, c) {
        var h = this._getEvents();
        if (0 === arguments.length) return this._events = {}, this;
        var g = h[a];
        if (!g) return this;
        if (1 === arguments.length) return delete h[a], this;
        for (var v, i = 0; i < g.length; i++)
            if (v = g[i], v === c || v.listener === c) {
                g.splice(i, 1);
                break
            }
        return this
    }, c.emit = function(a) {
        for (var c = this._getEvents(), h = c[a], g = !0, v = !1, y = [], i = 1; i < arguments.length; i++) y.push(arguments[i]);
        if (h)
            for (h = h.slice(0), i = 0; i < h.length; i++) try {
                g = h[i].apply(this, y), g === !1 && (v = !0)
            } catch (e) {
                console.error(e)
            }
        return v
    }, c.listeners = function(a) {
        var c = this._getEvents();
        return c[a] || []
    }, c.setMaxListeners = function(a) {
        return this.maxListeners = a, this
    };
    var h = Object.keys(c);
    return a.mixin = function(a) {
        for (var g, i = 0, v = h.length; v > i; i++) g = h[i], a[g] = c[g];
        return a
    }, a
}), define("ralltiir/src/utils/http", ["require", "@searchfe/underscore", "ralltiir/src/utils/url"], function(require) {
    function a(a) {
        return a instanceof FormData ? "multipart/form-data" : "application/x-www-form-urlencoded"
    }

    function c(a) {
        var c;
        try {
            c = exports.createXHR()
        } catch (e) {
            return Promise.reject(e)
        }
        return c.open(a.method, a.url, !0), g.forOwn(a.headers, function(a, h) {
            c.setRequestHeader(h, a)
        }), g.assign(c, a.xhrFields), new Promise(function(g, v) {
            c.onreadystatechange = function() {
                4 === c.readyState && (c = h(c), c.status >= 200 && c.status < 300 ? g(c) : v(c))
            }, c.send(a.data)
        })
    }

    function h(a) {
        var c = a.getAllResponseHeaders().split("\r\n").filter(g.negate(g.isEmpty)).map(function(a) {
            return g.split(a, /\s*:\s*/)
        });
        if (a.responseHeaders = g.fromPairs(c), a.data = a.responseText, "application/json" === a.responseHeaders["Content-Type"]) try {
            a.data = JSON.parse(a.responseText)
        } catch (e) {
            console.warn("Invalid JSON content with Content-Type: application/json")
        }
        return a
    }
    var g = require("@searchfe/underscore"),
        v = require("ralltiir/src/utils/url"),
        exports = {};
    return exports.ajax = function(h, y) {
        return "object" == typeof h && (y = h, h = ""), y = g.defaultsDeep(y, {
            url: h,
            method: y && y.type || "GET",
            headers: {},
            data: null,
            jsonp: !1,
            jsonpCallback: "sf_http_" + Math.random().toString(36).substr(2)
        }), g.forOwn(y.headers, function(a, c) {
            y.headers[c] = a.toLowerCase(a)
        }), (y.headers["content-type"] || y.data) && (y.headers["content-type"] = y.headers["content-type"] || a(y.data)), /application\/json/.test(y.headers["content-type"]) ? y.data = JSON.stringify(y.data) : /form-urlencoded/.test(y.headers["content-type"]) && (y.data = v.param(y.data)), c(y)
    }, exports.get = function(a, c) {
        return exports.ajax(a, {
            data: c
        })
    }, exports.post = function(a, c) {
        return exports.ajax(a, {
            method: "POST",
            data: c
        })
    }, exports.put = function(a, c) {
        return exports.ajax(a, {
            method: "PUT",
            data: c
        })
    }, exports.delete = function(a, c) {
        return exports.ajax(a, {
            method: "DELETE",
            data: c
        })
    }, exports.createXHR = function() {
        var a = !1;
        if (window.XMLHttpRequest ? a = new XMLHttpRequest : window.ActiveXObject && (a = new ActiveXObject("Microsoft.XMLHTTP")), !a) throw new Error("Cannot create an XHR instance");
        return a
    }, exports
}), define("ralltiir/src/utils/logger", ["require", "@searchfe/underscore", "ralltiir/src/utils/emitter"], function(require) {
    function a() {
        O = A = Date.now()
    }

    function c() {
        var a = Array.prototype.slice.call(arguments);
        y && a.unshift("[" + h() + "]");
        var c, g = new Error("logger track").stack || "",
            v = g.split("\n")[3] || "",
            w = "";
        c = /at\s+\(?(.*):\d+:\d+\)?$/.exec(v) || [];
        var b = c[1];
        c = /([^\/?#]+)([?#]|$)/.exec(b) || [];
        var R = c[1];
        w += R ? R + ":" : "", c = /at ([\w\d.]+)\s*\(/.exec(v) || [];
        var A = c[1] || "anonymous";
        return w += A, a.unshift("[" + w + "]"), a
    }

    function h() {
        var a = Date.now(),
            c = (a - A) / 1e3,
            h = c + "(+" + (a - O) + ")";
        return O = a, h
    }

    function g(a, c, h) {
        c.apply(console, h), h.unshift(a), exports.emit.apply(exports, h)
    }

    function v(a, h) {
        return !w && /log|debug|info/.test(a) ? b.noop : function() {
            var v = c.apply(null, arguments);
            g(a, h, v)
        }
    }
    var y = !!location.search.match(/rt-debug-timming/i),
        w = !!location.search.match(/rt-debug/i),
        b = require("@searchfe/underscore"),
        R = require("ralltiir/src/utils/emitter"),
        A = Date.now(),
        O = A,
        exports = new R;
    return w && console.log("Ralltiir debug enabled"), y && console.log("Ralltiir timming debug enabled"), exports.log = v("log", console.log), exports.debug = v("debug", console.log), exports.info = v("info", console.info), exports.warn = v("warn", console.warn), exports.error = v("error", console.error), exports.reset = a, exports
}), define("ralltiir/src/utils/uri/URI", ["require", "ralltiir/src/utils/uri/util/uri-parser", "ralltiir/src/utils/uri/component/Scheme", "ralltiir/src/utils/uri/component/UserName", "ralltiir/src/utils/uri/component/Password", "ralltiir/src/utils/uri/component/Host", "ralltiir/src/utils/uri/component/Port", "ralltiir/src/utils/uri/component/Path", "ralltiir/src/utils/uri/component/Query", "ralltiir/src/utils/uri/component/Fragment"], function(require) {
    function a(a) {
        a = h(a);
        var c, v = this;
        Object.keys(g).forEach(function(h) {
            c = g[h], v[h] = new c(a[h])
        })
    }

    function c(a) {
        var c = [],
            h = a.username.toString(),
            g = a.password.toString(),
            v = a.host.toString(),
            port = a.port.toString();
        return (h || g) && c.push(h + ":" + g + "@"), c.push(v), c.push(port), c.join("")
    }
    var h = require("ralltiir/src/utils/uri/util/uri-parser"),
        g = {
            scheme: require("ralltiir/src/utils/uri/component/Scheme"),
            username: require("ralltiir/src/utils/uri/component/UserName"),
            password: require("ralltiir/src/utils/uri/component/Password"),
            host: require("ralltiir/src/utils/uri/component/Host"),
            port: require("ralltiir/src/utils/uri/component/Port"),
            path: require("ralltiir/src/utils/uri/component/Path"),
            query: require("ralltiir/src/utils/uri/component/Query"),
            fragment: require("ralltiir/src/utils/uri/component/Fragment")
        };
    return a.prototype.set = function() {
        var i = 0,
            a = {};
        arguments.length > 1 && (a.name = arguments[i++]), a.data = Array.prototype.slice.call(arguments, i);
        var c = this[a.name];
        if (c) c.set.apply(c, a.data);
        else {
            var v = this,
                y = h(a.data[0]);
            Object.keys(g).forEach(function(a) {
                v[a].set(y[a])
            })
        }
    }, a.prototype.get = function() {
        var a = {
                name: arguments[0],
                data: Array.prototype.slice.call(arguments, 1)
            },
            c = this[a.name];
        return c ? c.get.apply(c, a.data) : void 0
    }, a.prototype.toString = function(a) {
        var h, g = this[a];
        if (g) h = g.toString();
        else {
            h = [];
            var v = this.scheme.toString();
            v && h.push(v + ":");
            var y = c(this);
            v && y && h.push("//"), h.push(y), h.push(this.path.toString()), h.push(this.query.toString()), h.push(this.fragment.toString()), h = h.join("")
        }
        return h
    }, a.prototype.equal = function(c) {
        c instanceof a || (c = new a(c));
        for (var h, v = !0, y = Object.keys(g), i = 0; v && (h = y[i]); i++) v = "port" === h ? this[h].equal(c[h].get(), this.scheme.get()) : this[h].equal(c[h]);
        return v
    }, a
}), define("ralltiir/src/utils/uri/component/Abstract", ["require"], function() {
    function a() {
        var a = Array.prototype.slice.call(arguments);
        this.set.apply(this, a)
    }
    return a.prototype.get = function() {
        return this.data
    }, a.prototype.set = function(a) {
        this.data = a || ""
    }, a.prototype.add = function(a) {
        this.set(a)
    }, a.prototype.remove = function() {
        this.data = ""
    }, a.prototype.toString = function() {
        return this.data.toString()
    }, a.prototype.equal = function(c) {
        return c instanceof a && (c = c.get()), this.data == c
    }, a
}), define("ralltiir/src/utils/uri/component/Fragment", ["require", "@searchfe/underscore", "ralltiir/src/utils/uri/component/Abstract"], function(require) {
    function a(a) {
        h.call(this, a)
    }
    var c = require("@searchfe/underscore").inherits,
        h = require("ralltiir/src/utils/uri/component/Abstract"),
        g = "#";
    return c(a, h), a.prototype.toString = function(a) {
        return a = a || g, this.data ? a + this.data : ""
    }, a
}), define("ralltiir/src/utils/uri/component/Host", ["require", "@searchfe/underscore", "ralltiir/src/utils/uri/component/Abstract"], function(require) {
    function a(a) {
        h.call(this, a)
    }
    var c = require("@searchfe/underscore").inherits,
        h = require("ralltiir/src/utils/uri/component/Abstract");
    return c(a, h), a.prototype.set = function(a) {
        a = a || "", this.data = a.toLowerCase()
    }, a.prototype.equal = function(c) {
        return c = c instanceof a ? c.get() : c || "", this.data === c.toLowerCase()
    }, a
}), define("ralltiir/src/utils/uri/component/Password", ["require", "@searchfe/underscore", "ralltiir/src/utils/uri/component/Abstract"], function(require) {
    function a(a) {
        h.call(this, a)
    }
    var c = require("@searchfe/underscore").inherits,
        h = require("ralltiir/src/utils/uri/component/Abstract");
    return c(a, h), a
}), define("ralltiir/src/utils/uri/component/Path", ["require", "@searchfe/underscore", "ralltiir/src/utils/uri/component/Abstract"], function(require) {
    function a(a) {
        return a || (a = "/"), a
    }

    function c(a) {
        return a = a.split("/"), a.pop(), a.join("/")
    }

    function h(a, c) {
        for (var h, g = 0, i = a.length - 1; h = a[i]; i--) "." === h ? a.splice(i, 1) : ".." === h ? (a.splice(i, 1), g++) : g && (a.splice(i, 1), g--);
        if (c)
            for (; g-- > 0;) a.unshift("..");
        return a
    }

    function g(a, c) {
        y.call(this, a, c)
    }
    var v = require("@searchfe/underscore").inherits,
        y = require("ralltiir/src/utils/uri/component/Abstract");
    return g.resolve = function(a, v) {
        if (v = v || "", "/" === v.charAt(0)) return g.resolve(v);
        var y = "/" === a.charAt(0),
            w = !1;
        v ? (a = c(a), w = "/" === v.charAt(v.length - 1)) : a.length > 1 && (w = "/" === a.charAt(a.length - 1));
        var b = a.split("/").concat(v.split("/")).filter(function(a) {
            return !!a
        });
        return b = h(b, !y), (y ? "/" : "") + (b.length > 0 ? b.join("/") + (w ? "/" : "") : "")
    }, v(g, y), g.prototype.set = function(a, c) {
        c instanceof g && (c = c.get());
        var h = [a || ""];
        c && h.unshift(c), this.data = g.resolve.apply(g, h)
    }, g.prototype.equal = function(c) {
        var h = a(this.data);
        return c = a(c instanceof g ? c.get() : g.resolve(c || "")), h === c
    }, g.prototype.resolve = function(a, c) {
        a instanceof g && (a = a.get());
        var h = [this.data];
        c ? h.unshift(a) : h.push(a), this.data = g.resolve.apply(g, h)
    }, g
}), define("ralltiir/src/utils/uri/component/Port", ["require", "@searchfe/underscore", "ralltiir/src/utils/uri/component/Abstract"], function(require) {
    function a(a) {
        h.call(this, a)
    }
    var c = require("@searchfe/underscore").inherits,
        h = require("ralltiir/src/utils/uri/component/Abstract"),
        g = {
            ftp: "21",
            ssh: "22",
            telnet: "23",
            http: "80",
            https: "443",
            ws: "80",
            wss: "443"
        };
    return c(a, h), a.prototype.equal = function(port, c) {
        var h = this.data || g[c];
        return port instanceof a && (port = port.get()), port = port || g[c], h === port
    }, a.prototype.toString = function() {
        return this.data ? ":" + this.data : ""
    }, a
}), define("ralltiir/src/utils/uri/component/Query", ["require", "@searchfe/underscore", "ralltiir/src/utils/uri/component/Abstract", "ralltiir/src/utils/uri/util/parse-query", "ralltiir/src/utils/uri/util/stringify-query"], function(require) {
    function a(a, c) {
        if (!Array.isArray(a) || !Array.isArray(c)) return !1;
        if (a.length !== c.length) return !1;
        a = a.slice(0), a = a.slice(0), a.sort(), c.sort();
        for (var h = !0, i = 0, g = a.length; h && g > i; i++) h = a[i] == c[i];
        return h
    }

    function c(c, h) {
        if (!w.isObject(c) || !w.isObject(h)) return !1;
        var g = Object.keys(c),
            v = Object.keys(h);
        if (g.length !== v.length) return !1;
        for (var y, b, R = !0, i = 0; R && (y = g[i]); i++) {
            if (!h.hasOwnProperty(y)) {
                R = !1;
                break
            }
            b = c[y], R = Array.isArray(b) ? a(b, h[y]) : b == h[y]
        }
        return R
    }

    function h(a) {
        return a = Array.isArray(a) ? a.map(function(a) {
            return g(a)
        }) : null === a || void 0 === a ? null : g(a)
    }

    function g(a) {
        return a = String(a).replace(/\+/g, "%20"), decodeURIComponent(a)
    }

    function v(a, c, g) {
        var v = g[a];
        return c = h(c), v ? (Array.isArray(v) || (v = [v]), Array.isArray(c) ? v = v.concat(c) : v.push(c)) : v = c, g[a] = v, g
    }

    function y(a) {
        a = a || {}, b.call(this, a)
    }
    var w = require("@searchfe/underscore"),
        b = require("ralltiir/src/utils/uri/component/Abstract"),
        R = require("ralltiir/src/utils/uri/util/parse-query"),
        A = require("ralltiir/src/utils/uri/util/stringify-query"),
        O = "?";
    return w.inherits(y, b), y.prototype.set = function() {
        if (1 === arguments.length) {
            var a = arguments[0];
            if (w.isObject(a)) {
                var c = this.data = {};
                w.forOwn(a, function(a, g) {
                    c[g] = h(a)
                })
            } else this.data = R(a)
        } else this.data[arguments[0]] = h(arguments[1])
    }, y.prototype.get = function(a) {
        return a ? this.data[a] : w.extend({}, this.data)
    }, y.prototype.toString = function(a) {
        a = a || O;
        var c = A(this.data);
        return c ? a + c : ""
    }, y.prototype.equal = function(a) {
        return w.isString(a) ? a = R(a) : a instanceof y && (a = a.get()), c(this.data, a)
    }, y.prototype.add = function(a, c) {
        var h = this.data;
        w.isObject(a) ? Object.keys(a).forEach(function(c) {
            v(c, a[c], h)
        }) : v(a, c, h), this.data = h
    }, y.prototype.remove = function(a) {
        a ? this.data.hasOwnProperty(a) && delete this.data[a] : this.data = {}
    }, y
}), define("ralltiir/src/utils/uri/component/Scheme", ["require", "@searchfe/underscore", "ralltiir/src/utils/uri/component/Abstract"], function(require) {
    function a(a) {
        h.call(this, a)
    }
    var c = require("@searchfe/underscore"),
        h = require("ralltiir/src/utils/uri/component/Abstract");
    return c.inherits(a, h), a.prototype.set = function(a) {
        a = a || "", this.data = a.toLowerCase()
    }, a.prototype.equal = function(c) {
        return c = c instanceof a ? c.get() : c || "", this.data === c.toLowerCase()
    }, a
}), define("ralltiir/src/utils/uri/component/UserName", ["require", "@searchfe/underscore", "ralltiir/src/utils/uri/component/Abstract"], function(require) {
    function a(a) {
        h.call(this, a)
    }
    var c = require("@searchfe/underscore"),
        h = require("ralltiir/src/utils/uri/component/Abstract");
    return c.inherits(a, h), a
}), define("ralltiir/src/utils/uri/util/parse-query", ["require"], function() {
    function a(a) {
        var h = {};
        a = a.split("&");
        var g, v;
        return a.forEach(function(a) {
            a && (a = a.split("="), g = a[0], v = a.length >= 2 ? c(a[1]) : null, h[g] ? (Array.isArray(h[g]) || (h[g] = [h[g]]), h[g].push(v)) : h[g] = v)
        }), h
    }

    function c(a) {
        return a = String(a).replace(/\+/g, "%20"), decodeURIComponent(a)
    }
    return a
}), define("ralltiir/src/utils/uri/util/stringify-query", ["require"], function() {
    function a(a) {
        var c, h = [];
        return Object.keys(a).forEach(function(g) {
            c = a[g], Array.isArray(c) || (c = [c]), c.forEach(function(a) {
                h.push(null === a ? g : g + "=" + encodeURIComponent(a || ""))
            })
        }), h.join("&")
    }
    return a
}), define("ralltiir/src/utils/uri/util/uri-parser", ["require", "@searchfe/underscore"], function(require) {
    function a(a) {
        var c = {},
            h = ["scheme", "username", "password", "host", "port", "path", "query", "fragment"];
        return h.forEach(function(h) {
            c[h] = a[h] || y
        }), c
    }

    function c(a) {
        var c = {};
        return a.replace(/^([^@]+@)?([^:]+)(:\d+)?$/, function(a, h, g, port) {
            h && (h = h.slice(0, -1), h = h.split(":"), c.username = h[0], c.password = h[1]), c.host = g, port && (c.port = port.substring(1))
        }), c
    }

    function h(a, h) {
        var g = /[^:]+:\d{2,}(\/|$)/.test(a);
        return g && (a = a.split("/"), w.extend(h, c(a.shift())), a.length > 0 && (h.path = "/" + a.join("/"))), g
    }

    function g(a, c) {
        var i = a.indexOf(":"),
            h = a.indexOf("/");
        h = h >= 0 ? h : a.length;
        var g = i >= 0 && h > i;
        return g && (c.scheme = a.substring(0, i), c.path = a.substring(i + 1)), g
    }

    function v(a) {
        var v = {},
            i = a.indexOf("#");
        return i >= 0 && (v.fragment = a.substring(i + 1), a = a.substring(0, i)), i = a.indexOf("?"), i >= 0 && (v.query = a.substring(i + 1), a = a.substring(0, i)), i = a.indexOf("://"), i >= 0 ? (v.scheme = a.substring(0, i), a = a.substring(i + 3), "file" === v.scheme ? v.path = a : (a = a.split("/"), w.extend(v, c(a.shift())), a.length > 0 && (v.path = "/" + a.join("/"))), v) : h(a, v) ? v : g(a, v) ? v : (a = a.split("/"), v.host = a.shift(), a.length > 0 && (v.path = "/" + a.join("/")), v)
    }
    var y, w = require("@searchfe/underscore");
    return function(c) {
        return w.isString(c) && (c = v(c)), a(c)
    }
}), define("ralltiir/src/utils/url", ["require", "ralltiir/src/utils/uri/URI", "@searchfe/underscore", "ralltiir/src/utils/uri/component/Path", "ralltiir/src/utils/uri/util/uri-parser"], function(require) {
    function a(a) {
        return new c(a)
    }
    var c = require("ralltiir/src/utils/uri/URI"),
        h = require("@searchfe/underscore"),
        g = require("ralltiir/src/utils/uri/component/Path"),
        v = require("ralltiir/src/utils/uri/util/uri-parser");
    return a.parse = function(a) {
        return v(a)
    }, a.resolve = function(a, c) {
        return g.resolve(a, c)
    }, a.param = function(a) {
        return h.isObject(a) ? h.map(a, function(a, c) {
            return encodeURIComponent(c) + "=" + encodeURIComponent(a)
        }).join("&") : a
    }, a
}), define("ralltiir", ["ralltiir/src/index"], function(mod) {
    return mod
});