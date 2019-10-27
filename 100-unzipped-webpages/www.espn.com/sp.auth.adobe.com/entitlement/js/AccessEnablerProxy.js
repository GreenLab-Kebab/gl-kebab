var ae = accessEnabler = function(t) {
    function e(n) {
        if (o[n]) return o[n].exports;
        var r = o[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var o = {};
    return e.m = t, e.c = o, e.d = function(t, o, n) {
        e.o(t, o) || Object.defineProperty(t, o, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, e.n = function(t) {
        var o = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(o, "a", o), o
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e.h = "925f2c3d39000521e496", e.cn = "AccessEnablerProxy", e(e.s = 15)
}([function(t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), o.d(e, "LogLevel", function() {
        return n
    });
    var n;
    ! function(t) {
        t[t.TRACE = 0] = "TRACE", t[t.DEBUG = 1] = "DEBUG", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT"
    }(n || (n = {}));
    var r = function() {
        function t() {
            this.level = n.INFO, this.prefix = "", this.logMethods = ["trace", "debug", "info", "warn", "error"], this.bindConsoleLog()
        }
        return t.prototype.debug = function(t) {
            for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o]
        }, t.prototype.warn = function(t) {
            for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o]
        }, t.prototype.error = function(t) {
            for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o]
        }, t.prototype.info = function(t) {
            for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o]
        }, t.prototype.log = function(t) {
            for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o]
        }, t.prototype.trace = function(t) {
            for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o]
        }, t.prototype.setLevel = function(t) {
            this.level = t, this.bindConsoleLog()
        }, t.prototype.setPrefix = function(t) {
            this.prefix = "[" + t + "]", this.bindConsoleLog()
        }, t.prototype.bindConsoleLog = function() {
            if (console)
                for (var t in console)
                    if (console.hasOwnProperty(t)) {
                        var e = "function" == typeof console[t];
                        this.logMethods.indexOf(t) >= this.level ? this[t] = console[e ? t : "log"].bind(window.console, this.prefix + "[" + t.toString() + "]") : this[t] = function() {}
                    }
        }, t
    }();
    e.default = new r
}, function(t, e, o) {
    "use strict";
    o.d(e, "c", function() {
        return n
    }), o.d(e, "a", function() {
        return r
    }), o.d(e, "b", function() {
        return s
    });
    var n = function() {
            function t() {}
            return t.parseXML = function(t) {
                return t && "string" == typeof t ? (new DOMParser).parseFromString(t, "text/xml") : null
            }, t
        }(),
        r = function() {
            function t() {}
            return t.extend = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var o = 1; o < t.length; o++)
                    for (var n in t[o]) t[o].hasOwnProperty(n) && (t[0][n] = t[o][n]);
                return t[0]
            }, t.isEmpty = function(e) {
                if (!e || t.isUndefined(e) || null === e) return !0;
                if (e.length) return !e.length;
                if (e.size) return !e.size;
                for (var o in e)
                    if (e.hasOwnProperty(o)) return !1;
                return !0
            }, t.isUndefined = function(t) {
                return void 0 === t
            }, t
        }(),
        s = function() {
            function t() {}
            return t.inArray = function(t, e) {
                if (e.indexOf) return e.indexOf(t);
                for (var o in e)
                    if (e[o] === t) return o;
                return -1
            }, t.createHiddenIframe = function(t, e) {
                var o, n = document.getElementsByTagName("iframe");
                if (n.length > 0)
                    for (var r = 0; r < n.length; r++)
                        if (n[r].getAttribute("name") === t) {
                            o = n[r];
                            break
                        }
                o || (o = document.createElement("iframe"), o.setAttribute("name", t), o.setAttribute("id", t), o.setAttribute("style", "display:none"), document.body.appendChild(o)), o.setAttribute("src", e)
            }, t.convertServerDateToISO8601DateFormat = function(t) {
                var e = t.split(" "),
                    o = e[0],
                    n = e[1],
                    r = e[3];
                o = o.split("/").join("-");
                var s = r.length - 2;
                return r = r.substr(0, s) + ":" + r.substr(s), o + "T" + n + r
            }, t.isIE = function() {
                var t = navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/),
                    e = !(!navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/MSIE/));
                return t || e
            }, t
        }()
}, function(t, e, o) {
    "use strict";
    o.d(e, "a", function() {
        return u
    });
    var n = o(5),
        r = o(1),
        s = o(0),
        i = o(6),
        a = o(3),
        u = function() {
            function t(e) {
                var o = this;
                if (this.defaultOptions = {
                        url: window.location.href,
                        async: !0,
                        cache: !1,
                        type: "GET",
                        context: this,
                        dataType: "xml",
                        timeout: 3e4,
                        data: t.globalData,
                        headers: t.globalHeaders,
                        cookies: t.globalCookies,
                        traditional: !1,
                        proxyRequest: !(navigator.vendor && navigator.vendor.match(/Apple/)),
                        proxyResponse: !1
                    }, this.mimeTypes = {
                        xml: "application/xml",
                        json: "application/json",
                        text: "*/*"
                    }, this.options = this.processOptions(e), this.urlObj = new a(this.options.url, null, !1), this.options.proxyRequest) {
                    var n = this.options.proxyURL + "#" + encodeURIComponent(document.location.href);
                    this.postMesager = new i.a(n, window.accessEnablerProxy.contentWindow)
                } else this.setCookies(), this.setCache(), this.setData(), this.xhr = this.getXHR(), this.xhr.onreadystatechange = function(n) {
                    var r = n.target;
                    if (e.data && e.data.resource_id && (r.resourceID = e.data.resource_id), 4 === r.readyState) {
                        var i = r.status >= 200 && r.status < 400 ? o.options.success : o.options.error,
                            a = "xml" !== o.options.dataType || o.options.proxyResponse ? r.responseText : r.responseXML;
                        s.default.debug("XHR response received: ", r), i.apply(o.options.context, [a, n.target.status, t.xhrToObject(r)])
                    }
                }, this.options.url = this.options.url = this.urlObj.toString(), this.xhr.open(this.options.type, this.options.url, this.options.async), this.options.async && (this.xhr.timeout = this.options.timeout), this.setHeaders()
            }
            return t.xhrToObject = function(t) {
                if (t.getAllResponseHeaders) {
                    var e = t.getAllResponseHeaders().split("\r\n"),
                        o = {};
                    e.map(function(t) {
                        var e = t.split(": ");
                        2 === e.length && (o[e[0].toLowerCase()] = e[1])
                    });
                    var n = {
                        status: t.status,
                        statusText: t.statusText,
                        responseText: t.responseText,
                        responseHeaders: o
                    };
                    return t.resourceID && (n.resourceID = t.resourceID), s.default.debug("Converted xhr into serializable object", t, n), n
                }
                return s.default.warn("trying to objectify a non xhr!", t), t
            }, t.isCors = function(t) {
                var e = new a(t, null, !1);
                return 0 !== window.location.href.indexOf(e.origin)
            }, t.prototype.send = function() {
                var t = this;
                this.options.proxyRequest ? (s.default.debug("Sending proxy request: ", this.options), this.postMesager.postAjax(this.options).then(function(e) {
                    s.default.debug("Proxy response received: ", e);
                    var o = e.status,
                        n = e.data,
                        i = e.status >= 200 && e.status < 400 ? t.options.success : t.options.error;
                    n = "xml" === t.options.dataType ? r.c.parseXML(n) : n, i.apply(t.options.context, [n, o, e.xhr])
                })) : (s.default.debug("Sending request: ", this.options), this.xhr.send(this.options.data))
            }, t.prototype.processOptions = function(e) {
                var o = r.a.extend(Object.create(t.globalOptions), this.defaultOptions, e);
                return e.data && (o.data = r.a.extend({}, this.defaultOptions.data, e.data)), e.headers && (o.headers = r.a.extend({}, this.defaultOptions.headers, e.headers)), o
            }, t.prototype.setData = function() {
                if (!r.a.isEmpty(this.options.data)) {
                    var t = n.a.param(this.options.data, this.options.traditional);
                    "POST" === this.options.type ? "json" === this.options.dataType ? this.options.data = JSON.stringify(this.options.data) : this.options.data = t : (this.urlObj.query && this.urlObj.query.length > 1 ? this.urlObj.query += "&" + t : this.urlObj.query = t, this.options.data = null)
                }
            }, t.prototype.setCookies = function() {
                var t = "https:" === this.urlObj.protocol ? ";secure" : "";
                for (var e in this.options.cookies) r.a.isEmpty(e) ? document.cookie = e + "=;path=/" + t + "; expires=Thu, 01 Jan 1970 00:00:00 UTC;" : document.cookie = e + "=" + this.options.cookies[e] + ";path=/" + t
            }, t.prototype.setCache = function() {
                if (!this.options.cache) {
                    s.default.debug("busting cache!");
                    var t = "_=" + (new Date).getTime();
                    this.urlObj.query && this.urlObj.query.length > 1 ? this.urlObj.query += "&" + t : this.urlObj.query = t
                }
            }, t.prototype.setHeaders = function() {
                if ("POST" === this.options.type && ("json" === this.options.dataType ? this.xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8") : this.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")), this.options.headers)
                    for (var t in this.options.headers) this.options.headers.hasOwnProperty(t) && this.xhr.setRequestHeader(t, this.options.headers[t]);
                this.options.dataType && this.mimeTypes[this.options.dataType] && this.xhr.setRequestHeader("Accept", this.mimeTypes[this.options.dataType])
            }, t.prototype.getXHR = function() {
                var e = new XMLHttpRequest;
                return t.isCors(this.urlObj.origin) && (s.default.debug("Enabling CORS"), e.withCredentials = !0), e
            }, t.globalOptions = {
                proxyURL: "AccessEnablerProxy.html"
            }, t.globalHeaders = {}, t.globalCookies = {
                client_type: "html5",
                client_version: "3.4.2"
            }, t.globalData = {}, t
        }()
}, function(t, e, o) {
    "use strict";
    (function(e) {
        function n(t) {
            t = t || e.location || {};
            var o, n = {},
                r = typeof t;
            if ("blob:" === t.protocol) n = new i(unescape(t.pathname), {});
            else if ("string" === r) {
                n = new i(t, {});
                for (o in f) delete n[o]
            } else if ("object" === r) {
                for (o in t) o in f || (n[o] = t[o]);
                void 0 === n.slashes && (n.slashes = h.test(t.href))
            }
            return n
        }

        function r(t) {
            var e = l.exec(t);
            return {
                protocol: e[1] ? e[1].toLowerCase() : "",
                slashes: !!e[2],
                rest: e[3]
            }
        }

        function s(t, e) {
            for (var o = (e || "/").split("/").slice(0, -1).concat(t.split("/")), n = o.length, r = o[n - 1], s = !1, i = 0; n--;) "." === o[n] ? o.splice(n, 1) : ".." === o[n] ? (o.splice(n, 1), i++) : i && (0 === n && (s = !0), o.splice(n, 1), i--);
            return s && o.unshift(""), "." !== r && ".." !== r || o.push(""), o.join("/")
        }

        function i(t, e, o) {
            if (!(this instanceof i)) return new i(t, e, o);
            var a, u, l, h, f, g, y = d.slice(),
                v = typeof e,
                m = this,
                b = 0;
            for ("object" !== v && "string" !== v && (o = e, e = null), o && "function" != typeof o && (o = p.parse), e = n(e), u = r(t || ""), a = !u.protocol && !u.slashes, m.slashes = u.slashes || a && e.slashes, m.protocol = u.protocol || e.protocol || "", t = u.rest, u.slashes || (y[2] = [/(.*)/, "pathname"]); b < y.length; b++) h = y[b], l = h[0], g = h[1], l !== l ? m[g] = t : "string" == typeof l ? ~(f = t.indexOf(l)) && ("number" == typeof h[2] ? (m[g] = t.slice(0, f), t = t.slice(f + h[2])) : (m[g] = t.slice(f), t = t.slice(0, f))) : (f = l.exec(t)) && (m[g] = f[1], t = t.slice(0, f.index)), m[g] = m[g] || (a && h[3] ? e[g] || "" : ""), h[4] && (m[g] = m[g].toLowerCase());
            o && (m.query = o(m.query)), a && e.slashes && "/" !== m.pathname.charAt(0) && ("" !== m.pathname || "" !== e.pathname) && (m.pathname = s(m.pathname, e.pathname)), c(m.port, m.protocol) || (m.host = m.hostname, m.port = ""), m.username = m.password = "", m.auth && (h = m.auth.split(":"), m.username = h[0] || "", m.password = h[1] || ""), m.origin = m.protocol && m.host && "file:" !== m.protocol ? m.protocol + "//" + m.host : "null", m.href = m.toString()
        }

        function a(t, e, o) {
            var n = this;
            switch (t) {
                case "query":
                    "string" == typeof e && e.length && (e = (o || p.parse)(e)), n[t] = e;
                    break;
                case "port":
                    n[t] = e, c(e, n.protocol) ? e && (n.host = n.hostname + ":" + e) : (n.host = n.hostname, n[t] = "");
                    break;
                case "hostname":
                    n[t] = e, n.port && (e += ":" + n.port), n.host = e;
                    break;
                case "host":
                    n[t] = e, /:\d+$/.test(e) ? (e = e.split(":"), n.port = e.pop(), n.hostname = e.join(":")) : (n.hostname = e, n.port = "");
                    break;
                case "protocol":
                    n.protocol = e.toLowerCase(), n.slashes = !o;
                    break;
                case "pathname":
                case "hash":
                    if (e) {
                        var r = "pathname" === t ? "/" : "#";
                        n[t] = e.charAt(0) !== r ? r + e : e
                    } else n[t] = e;
                    break;
                default:
                    n[t] = e
            }
            for (var s = 0; s < d.length; s++) {
                var i = d[s];
                i[4] && (n[i[1]] = n[i[1]].toLowerCase())
            }
            return n.origin = n.protocol && n.host && "file:" !== n.protocol ? n.protocol + "//" + n.host : "null", n.href = n.toString(), n
        }

        function u(t) {
            t && "function" == typeof t || (t = p.stringify);
            var e, o = this,
                n = o.protocol;
            n && ":" !== n.charAt(n.length - 1) && (n += ":");
            var r = n + (o.slashes ? "//" : "");
            return o.username && (r += o.username, o.password && (r += ":" + o.password), r += "@"), r += o.host + o.pathname, e = "object" == typeof o.query ? t(o.query) : o.query, e && (r += "?" !== e.charAt(0) ? "?" + e : e), o.hash && (r += o.hash), r
        }
        var c = o(8),
            p = o(9),
            l = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
            h = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            d = [
                ["#", "hash"],
                ["?", "query"],
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d+)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1]
            ],
            f = {
                hash: 1,
                query: 1
            };
        i.prototype = {
            set: a,
            toString: u
        }, i.extractProtocol = r, i.location = n, i.qs = p, t.exports = i
    }).call(e, o(4))
}, function(t, e) {
    var o;
    o = function() {
        return this
    }();
    try {
        o = o || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (o = window)
    }
    t.exports = o
}, function(t, e, o) {
    "use strict";
    o.d(e, "a", function() {
        return s
    });
    var n = function() {
            function t() {
                this.r20 = /%20/g, this.class2type = {}, this.rbracket = /\[\]$/, this.toString = this.class2type.toString
            }
            return t.prototype.type = function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? this.class2type[this.toString.call(t)] || "object" : typeof t
            }, t.prototype.isFunction = function(t) {
                return "function" === this.type(t)
            }, t.prototype.buildParams = function(t, e, o) {
                var n, r, s;
                if (Array.isArray(e))
                    for (r in e) e.hasOwnProperty(r) && (s = e[r], this.rbracket.test(t) ? o(t, s) : this.buildParams(t + "[" + ("object" == typeof s ? r : "") + "]", s, o));
                else if ("object" === this.type(e))
                    for (n in e) e.hasOwnProperty(n) && this.buildParams(t + "[" + n + "]", e[n], o);
                else o(t, e)
            }, t
        }(),
        r = new n,
        s = function() {
            function t() {}
            return t.param = function(t, e) {
                void 0 === e && (e = !1);
                var o, n, s, i = [],
                    a = function(t, e) {
                        e = r.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                    };
                if (Array.isArray(t))
                    for (n in t) t.hasOwnProperty(n) && (s = t[n], a(n, s));
                else
                    for (o in t) t.hasOwnProperty(o) && r.buildParams(o, t[o], a);
                var u = i.join("&").replace(r.r20, "+");
                return e && (u = u.replace(/%5B%5D/g, "")), u
            }, t
        }()
}, function(t, e, o) {
    "use strict";
    o.d(e, "a", function() {
        return a
    });
    var n = o(0),
        r = o(2),
        s = o(1),
        i = o(7),
        a = function() {
            function t(t, e) {
                void 0 === t && (t = null), void 0 === e && (e = parent), this.handlers = {}, this.url = t, this.target = e, this.handlers = {}, this.cookieService = i.a.getInstance()
            }
            return t.prototype.postMessage = function(t) {
                this.target.postMessage(t, this.url.replace(/([^:]+:\/\/[^\/]+).*/, "$1"))
            }, t.prototype.postAjax = function(t) {
                var e = this;
                return new Promise(function(o) {
                    try {
                        var r = s.a.extend({}, t);
                        r.proxyRequest = !1, r.proxyResponse = !0, delete r.context, delete r.success, delete r.error;
                        var i = "c.a.p.pm.xhr." + e.getOpId();
                        e.addEventListener(i, function(t) {
                            t.data.id === i && (n.default.debug("Proxy response event message received: ", t), e.removeEventListener(t.data.id), o(t.data))
                        });
                        var a = {
                            id: i,
                            payload: r
                        };
                        n.default.debug("Sending proxy request event message: ", a), e.postMessage(a)
                    } catch (t) {
                        n.default.error(t), o({
                            error: t.toString()
                        })
                    }
                })
            }, t.prototype.postStorage = function(t) {
                for (var e = this, o = [], r = 1; r < arguments.length; r++) o[r - 1] = arguments[r];
                return new Promise(function(r) {
                    try {
                        var s = "c.a.p.pm.s." + e.getOpId();
                        e.addEventListener(s, function(t) {
                            t.data.id === s && (e.removeEventListener(t.data.id), r(t.data.result))
                        });
                        var i = {
                            id: s,
                            operation: t,
                            params: o
                        };
                        e.postMessage(i)
                    } catch (t) {
                        n.default.error(t), r()
                    }
                })
            }, t.prototype.handleAjax = function() {
                var t = this;
                this.addEventListener("ajax", function(e) {
                    if (e && e.data && e.data.id && 0 === e.data.id.indexOf("c.a.p.pm.xhr.")) {
                        var o = e.data.payload;
                        o.success = o.error = function(o, r, s) {
                            var i = {
                                id: e.data.id,
                                status: r,
                                data: o,
                                xhr: s
                            };
                            n.default.debug("Sending proxy response event message: ", i), t.postMessage(i)
                        };
                        try {
                            n.default.debug("Handling proxy request event message: ", e), new r.a(o).send()
                        } catch (t) {
                            n.default.error(t)
                        }
                    }
                })
            }, t.prototype.handleStorage = function() {
                var t = this;
                this.addEventListener("storage", function(e) {
                    if (e && e.data && e.data.id && 0 === e.data.id.indexOf("c.a.p.pm.s.") && e.data.operation && e.data.params) {
                        var o = {
                                id: e.data.id
                            },
                            r = e.data.params;
                        switch (e.data.operation) {
                            case "getItems":
                                if (o.result = {}, t.isLocalStorageSpaceEnabled())
                                    for (var s = 0, i = r; s < i.length; s++) {
                                        var a = i[s],
                                            u = localStorage.getItem(a);
                                        null !== u && (o.result[a] = u)
                                    } else o.result.error = !0, n.default.debug("Web localStorage is not available for 3rd parties for read operations");
                                break;
                            case "setItem":
                                t.isLocalStorageSpaceEnabled() ? 2 === r.length ? localStorage.setItem(r[0], r[1]) : n.default.error("Did not receive valid data to write!", r) : n.default.debug("Web localStorage is not available for 3rd parties for write operations");
                                break;
                            case "isSessionCookieSet":
                                o.result = {
                                    isSessionCookieSet: t.cookieService.isSessionCookieSet()
                                };
                                break;
                            case "setSessionCookie":
                                t.cookieService.setSessionCookie();
                                break;
                            default:
                                n.default.error("Unsupported storage operation: ", e.data.operation)
                        }
                        t.postMessage(o)
                    }
                })
            }, t.prototype.addEventListener = function(t, e) {
                this.handlers[t] = e, window.addEventListener("message", e, !1)
            }, t.prototype.removeEventListener = function(t) {
                window.removeEventListener("message", this.handlers[t], !1), delete this.handlers[t]
            }, t.prototype.getOpId = function() {
                return t.opSeq > 1e3 && (t.opSeq = 0), +new Date + "." + t.opSeq++
            }, t.prototype.isLocalStorageSpaceEnabled = function() {
                try {
                    return localStorage.setItem("canWrite", "test"), localStorage.removeItem("canWrite"), !0
                } catch (t) {
                    return !1
                }
            }, t.opSeq = 0, t
        }()
}, function(t, e, o) {
    "use strict";
    o.d(e, "a", function() {
        return n
    });
    var n = function() {
        function t() {
            this.SESSION_COOKIE_NAME = "ap_93"
        }
        return t.getInstance = function() {
            return this.instance || (this.instance = new t), this.instance
        }, t.prototype.setSessionCookie = function() {
            document.cookie = this.SESSION_COOKIE_NAME + "=" + (new Date).getTime() + ";path=/"
        }, t.prototype.isSessionCookieSet = function() {
            return -1 !== document.cookie.indexOf(this.SESSION_COOKIE_NAME)
        }, t
    }()
}, function(t, e, o) {
    "use strict";
    t.exports = function(t, e) {
        if (e = e.split(":")[0], !(t = +t)) return !1;
        switch (e) {
            case "http":
            case "ws":
                return 80 !== t;
            case "https":
            case "wss":
                return 443 !== t;
            case "ftp":
                return 21 !== t;
            case "gopher":
                return 70 !== t;
            case "file":
                return !1
        }
        return 0 !== t
    }
}, function(t, e, o) {
    "use strict";

    function n(t) {
        return decodeURIComponent(t.replace(/\+/g, " "))
    }

    function r(t) {
        for (var e, o = /([^=?&]+)=?([^&]*)/g, r = {}; e = o.exec(t); r[n(e[1])] = n(e[2]));
        return r
    }

    function s(t, e) {
        e = e || "";
        var o = [];
        "string" != typeof e && (e = "?");
        for (var n in t) i.call(t, n) && o.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
        return o.length ? e + o.join("&") : ""
    }
    var i = Object.prototype.hasOwnProperty;
    e.stringify = s, e.parse = r
}, , , , , , function(t, e, o) {
    "use strict";

    function n() {
        r.default.setLevel(i ? r.LogLevel.DEBUG : r.LogLevel.ERROR);
        var t = decodeURIComponent(window.location.hash.slice(1)),
            e = new s.a(t);
        e.handleAjax(), e.handleStorage(), e.postMessage("PROXY_LOADED")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = o(0),
        s = o(6),
        i = -1 !== window.location.search.indexOf("debug");
    if (r.default.setPrefix("AccessEnablerProxy.js"), r.default.info("Version: 3.4.2-3ff3b09" + (i ? " DEBUG" : " RELEASE")), "undefined" != typeof Promise && -1 !== Promise.toString().indexOf("[native code]")) n();
    else {
        r.default.warn("You have an old / non standards compliant browser, loading polyfills...");
        var a = document.createElement("script");
        a.src = "polyfill.js", a.onload = function() {
            return n()
        }, a.onerror = function() {
            r.default.error("Failed to load polyfills"), n()
        }, document.head.appendChild(a)
    }
}]);
//# sourceMappingURL=AccessEnablerProxy.js.map