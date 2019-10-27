require = function() {
    function t(e, r, n) {
        function i(s, a) {
            if (!r[s]) {
                if (!e[s]) {
                    var u = "function" == typeof require && require;
                    if (!a && u) return u(s, !0);
                    if (o) return o(s, !0);
                    var h = new Error("Cannot find module '" + s + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }
                var p = r[s] = {
                    exports: {}
                };
                e[s][0].call(p.exports, function(t) {
                    return i(e[s][1][t] || t)
                }, p, p.exports, t, e, r, n)
            }
            return r[s].exports
        }
        for (var o = "function" == typeof require && require, s = 0; s < n.length; s++) i(n[s]);
        return i
    }
    return t
}()({
    1: [function(t, e, r) {
        function n(t) {
            if (t) return function(t) {
                for (var e in n.prototype) t[e] = n.prototype[e];
                return t
            }(t)
        }
        void 0 !== e && (e.exports = n), n.prototype.on = n.prototype.addEventListener = function(t, e) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
        }, n.prototype.once = function(t, e) {
            function r() {
                this.off(t, r), e.apply(this, arguments)
            }
            return r.fn = e, this.on(t, r), this
        }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(t, e) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var r = this._callbacks["$" + t];
            if (!r) return this;
            if (1 == arguments.length) return delete this._callbacks["$" + t], this;
            for (var n, i = 0; i < r.length; i++)
                if ((n = r[i]) === e || n.fn === e) {
                    r.splice(i, 1);
                    break
                }
            return this
        }, n.prototype.emit = function(t) {
            this._callbacks = this._callbacks || {};
            var e = [].slice.call(arguments, 1),
                r = this._callbacks["$" + t];
            if (r)
                for (var n = 0, i = (r = r.slice(0)).length; n < i; ++n) r[n].apply(this, e);
            return this
        }, n.prototype.listeners = function(t) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
        }, n.prototype.hasListeners = function(t) {
            return !!this.listeners(t).length
        }
    }, {}],
    2: [function(t, e, r) {
        function n() {
            this._defaults = []
        }["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(t) {
            n.prototype[t] = function() {
                return this._defaults.push({
                    fn: t,
                    arguments: arguments
                }), this
            }
        }), n.prototype._setDefaults = function(t) {
            this._defaults.forEach(function(e) {
                t[e.fn].apply(t, e.arguments)
            })
        }, e.exports = n
    }, {}],
    3: [function(t, e, r) {
        "use strict";
        e.exports = function(t) {
            return null !== t && "object" == typeof t
        }
    }, {}],
    4: [function(t, e, r) {
        "use strict";

        function n(t) {
            if (t) return function(t) {
                for (var e in n.prototype) t[e] = n.prototype[e];
                return t
            }(t)
        }
        var i = t("./is-object");
        e.exports = n, n.prototype.clearTimeout = function() {
            return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, this
        }, n.prototype.parse = function(t) {
            return this._parser = t, this
        }, n.prototype.responseType = function(t) {
            return this._responseType = t, this
        }, n.prototype.serialize = function(t) {
            return this._serializer = t, this
        }, n.prototype.timeout = function(t) {
            if (!t || "object" != typeof t) return this._timeout = t, this._responseTimeout = 0, this;
            for (var e in t) switch (e) {
                case "deadline":
                    this._timeout = t.deadline;
                    break;
                case "response":
                    this._responseTimeout = t.response;
                    break;
                default:
                    console.warn("Unknown timeout option", e)
            }
            return this
        }, n.prototype.retry = function(t, e) {
            return 0 !== arguments.length && !0 !== t || (t = 1), t <= 0 && (t = 0), this._maxRetries = t, this._retries = 0, this._retryCallback = e, this
        };
        var o = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
        n.prototype._shouldRetry = function(t, e) {
            if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
            if (this._retryCallback) try {
                var r = this._retryCallback(t, e);
                if (!0 === r) return !0;
                if (!1 === r) return !1
            } catch (t) {
                console.error(t)
            }
            if (e && e.status && e.status >= 500 && 501 != e.status) return !0;
            if (t) {
                if (t.code && ~o.indexOf(t.code)) return !0;
                if (t.timeout && "ECONNABORTED" == t.code) return !0;
                if (t.crossDomain) return !0
            }
            return !1
        }, n.prototype._retry = function() {
            return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this._end()
        }, n.prototype.then = function(t, e) {
            if (!this._fullfilledPromise) {
                var r = this;
                this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function(t, e) {
                    r.end(function(r, n) {
                        r ? e(r) : t(n)
                    })
                })
            }
            return this._fullfilledPromise.then(t, e)
        }, n.prototype.catch = function(t) {
            return this.then(void 0, t)
        }, n.prototype.use = function(t) {
            return t(this), this
        }, n.prototype.ok = function(t) {
            if ("function" != typeof t) throw Error("Callback required");
            return this._okCallback = t, this
        }, n.prototype._isResponseOK = function(t) {
            return !!t && (this._okCallback ? this._okCallback(t) : t.status >= 200 && t.status < 300)
        }, n.prototype.get = function(t) {
            return this._header[t.toLowerCase()]
        }, n.prototype.getHeader = n.prototype.get, n.prototype.set = function(t, e) {
            if (i(t)) {
                for (var r in t) this.set(r, t[r]);
                return this
            }
            return this._header[t.toLowerCase()] = e, this.header[t] = e, this
        }, n.prototype.unset = function(t) {
            return delete this._header[t.toLowerCase()], delete this.header[t], this
        }, n.prototype.field = function(t, e) {
            if (null === t || void 0 === t) throw new Error(".field(name, val) name can not be empty");
            if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), i(t)) {
                for (var r in t) this.field(r, t[r]);
                return this
            }
            if (Array.isArray(e)) {
                for (var n in e) this.field(t, e[n]);
                return this
            }
            if (null === e || void 0 === e) throw new Error(".field(name, val) val can not be empty");
            return "boolean" == typeof e && (e = "" + e), this._getFormData().append(t, e), this
        }, n.prototype.abort = function() {
            return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this)
        }, n.prototype._auth = function(t, e, r, n) {
            switch (r.type) {
                case "basic":
                    this.set("Authorization", "Basic " + n(t + ":" + e));
                    break;
                case "auto":
                    this.username = t, this.password = e;
                    break;
                case "bearer":
                    this.set("Authorization", "Bearer " + t)
            }
            return this
        }, n.prototype.withCredentials = function(t) {
            return void 0 == t && (t = !0), this._withCredentials = t, this
        }, n.prototype.redirects = function(t) {
            return this._maxRedirects = t, this
        }, n.prototype.maxResponseSize = function(t) {
            if ("number" != typeof t) throw TypeError("Invalid argument");
            return this._maxResponseSize = t, this
        }, n.prototype.toJSON = function() {
            return {
                method: this.method,
                url: this.url,
                data: this._data,
                headers: this._header
            }
        }, n.prototype.send = function(t) {
            var e = i(t),
                r = this._header["content-type"];
            if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"), e && !this._data) Array.isArray(t) ? this._data = [] : this._isHost(t) || (this._data = {});
            else if (t && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
            if (e && i(this._data))
                for (var n in t) this._data[n] = t[n];
            else "string" == typeof t ? (r || this.type("form"), r = this._header["content-type"], this._data = "application/x-www-form-urlencoded" == r ? this._data ? this._data + "&" + t : t : (this._data || "") + t) : this._data = t;
            return !e || this._isHost(t) ? this : (r || this.type("json"), this)
        }, n.prototype.sortQuery = function(t) {
            return this._sort = void 0 === t || t, this
        }, n.prototype._finalizeQueryString = function() {
            var t = this._query.join("&");
            if (t && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + t), this._query.length = 0, this._sort) {
                var e = this.url.indexOf("?");
                if (e >= 0) {
                    var r = this.url.substring(e + 1).split("&");
                    "function" == typeof this._sort ? r.sort(this._sort) : r.sort(), this.url = this.url.substring(0, e) + "?" + r.join("&")
                }
            }
        }, n.prototype._appendQueryString = function() {
            console.trace("Unsupported")
        }, n.prototype._timeoutError = function(t, e, r) {
            if (!this._aborted) {
                var n = new Error(t + e + "ms exceeded");
                n.timeout = e, n.code = "ECONNABORTED", n.errno = r, this.timedout = !0, this.abort(), this.callback(n)
            }
        }, n.prototype._setTimeouts = function() {
            var t = this;
            this._timeout && !this._timer && (this._timer = setTimeout(function() {
                t._timeoutError("Timeout of ", t._timeout, "ETIME")
            }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() {
                t._timeoutError("Response timeout of ", t._responseTimeout, "ETIMEDOUT")
            }, this._responseTimeout))
        }
    }, {
        "./is-object": 3
    }],
    5: [function(t, e, r) {
        "use strict";

        function n(t) {
            if (t) return function(t) {
                for (var e in n.prototype) t[e] = n.prototype[e];
                return t
            }(t)
        }
        var i = t("./utils");
        e.exports = n, n.prototype.get = function(t) {
            return this.header[t.toLowerCase()]
        }, n.prototype._setHeaderProperties = function(t) {
            var e = t["content-type"] || "";
            this.type = i.type(e);
            var r = i.params(e);
            for (var n in r) this[n] = r[n];
            this.links = {};
            try {
                t.link && (this.links = i.parseLinks(t.link))
            } catch (t) {}
        }, n.prototype._setStatusProperties = function(t) {
            var e = t / 100 | 0;
            this.status = this.statusCode = t, this.statusType = e, this.info = 1 == e, this.ok = 2 == e, this.redirect = 3 == e, this.clientError = 4 == e, this.serverError = 5 == e, this.error = (4 == e || 5 == e) && this.toError(), this.accepted = 202 == t, this.noContent = 204 == t, this.badRequest = 400 == t, this.unauthorized = 401 == t, this.notAcceptable = 406 == t, this.forbidden = 403 == t, this.notFound = 404 == t
        }
    }, {
        "./utils": 6
    }],
    6: [function(t, e, r) {
        "use strict";
        r.type = function(t) {
            return t.split(/ *; */).shift()
        }, r.params = function(t) {
            return t.split(/ *; */).reduce(function(t, e) {
                var r = e.split(/ *= */),
                    n = r.shift(),
                    i = r.shift();
                return n && i && (t[n] = i), t
            }, {})
        }, r.parseLinks = function(t) {
            return t.split(/ *, */).reduce(function(t, e) {
                var r = e.split(/ *; */),
                    n = r[0].slice(1, -1);
                return t[r[1].split(/ *= */)[1].slice(1, -1)] = n, t
            }, {})
        }, r.cleanHeader = function(t, e) {
            return delete t["content-type"], delete t["content-length"], delete t["transfer-encoding"], delete t.host, e && delete t.cookie, t
        }
    }, {}],
    "hermes-core/req-id": [function(t, e, r) {
        e.exports = function(t) {
            t.query({
                reqId: window.reqId
            })
        }
    }, {}],
    "superagent-jsonp": [function(t, e, r) {
        "use strict";
        var n = function(t) {
                var e = t.script,
                    r = t.callbackName,
                    n = t.timeout;
                e && e.parentNode && e.parentNode.removeChild(e), delete window[r], clearTimeout(n)
            },
            i = function t(e) {
                var r = function(r) {
                    return "undefined" == typeof window ? r : (r.end = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return function(r) {
                            var n = this,
                                i = e.callbackParam || "callback",
                                o = e.callbackName || "superagentCallback" + ((new Date).valueOf() + parseInt(1e3 * Math.random(), 10)),
                                s = e.timeout || 1e3,
                                a = setTimeout(t.errorWrapper.bind(this), s);
                            this._jsonp = {
                                callbackName: o,
                                callback: r,
                                timeout: a
                            }, window[o] = t.callbackWrapper.bind(this), this._query.push(encodeURIComponent(i) + "=" + encodeURIComponent(o));
                            var u = this._query.join("&"),
                                h = document.createElement("script"),
                                p = this.url.indexOf("?") > -1 ? "&" : "?",
                                c = this.url + p + u;
                            return h.src = c, h.onerror = function(e) {
                                t.errorWrapper.call(n, e)
                            }, document.head.appendChild(h), this._jsonp.script = h, this
                        }
                    }.call(r, e), r)
                };
                return "function" == typeof e.end ? r(e) : r
            };
        i.callbackWrapper = function(t) {
            var e = {
                body: t
            };
            n(this._jsonp), this._jsonp.callback.call(this, null, e)
        }, i.errorWrapper = function(t) {
            var e = new Error("404 Not found");
            t && t instanceof Event && "error" === t.type && (e = new Error("Connection issue")), n(this._jsonp), this._jsonp.callback.call(this, e, null)
        }, void 0 !== e && void 0 !== e.exports ? e.exports = i : "function" == typeof define && define.amd ? define([], function() {
            return {
                jsonp: i
            }
        }) : "undefined" != typeof window && (window.superagentJSONP = i)
    }, {}],
    superagent: [function(t, e, r) {
        function n(t) {
            if (!f(t)) return t;
            var e = [];
            for (var r in t) i(e, r, t[r]);
            return e.join("&")
        }

        function i(t, e, r) {
            if (null != r)
                if (Array.isArray(r)) r.forEach(function(r) {
                    i(t, e, r)
                });
                else if (f(r))
                for (var n in r) i(t, e + "[" + n + "]", r[n]);
            else t.push(encodeURIComponent(e) + "=" + encodeURIComponent(r));
            else null === r && t.push(encodeURIComponent(e))
        }

        function o(t) {
            for (var e, r, n = {}, i = t.split("&"), o = 0, s = i.length; o < s; ++o) - 1 == (r = (e = i[o]).indexOf("=")) ? n[decodeURIComponent(e)] = "" : n[decodeURIComponent(e.slice(0, r))] = decodeURIComponent(e.slice(r + 1));
            return n
        }

        function s(t) {
            return /[\/+]json\b/.test(t)
        }

        function a(t) {
            this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
            var e = this.xhr.status;
            1223 === e && (e = 204), this._setStatusProperties(e), this.header = this.headers = function(t) {
                for (var e, r, n, i, o = t.split(/\r?\n/), s = {}, a = 0, u = o.length; a < u; ++a) - 1 !== (e = (r = o[a]).indexOf(":")) && (n = r.slice(0, e).toLowerCase(), i = _(r.slice(e + 1)), s[n] = i);
                return s
            }(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && t._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null
        }

        function u(t, e) {
            var r = this;
            this._query = this._query || [], this.method = t, this.url = e, this.header = {}, this._header = {}, this.on("end", function() {
                var t = null,
                    e = null;
                try {
                    e = new a(r)
                } catch (e) {
                    return t = new Error("Parser is unable to parse the response"), t.parse = !0, t.original = e, r.xhr ? (t.rawResponse = void 0 === r.xhr.responseType ? r.xhr.responseText : r.xhr.response, t.status = r.xhr.status ? r.xhr.status : null, t.statusCode = t.status) : (t.rawResponse = null, t.status = null), r.callback(t)
                }
                r.emit("response", e);
                var n;
                try {
                    r._isResponseOK(e) || (n = new Error(e.statusText || "Unsuccessful HTTP response"))
                } catch (t) {
                    n = t
                }
                n ? (n.original = t, n.response = e, n.status = e.status, r.callback(n, e)) : r.callback(null, e)
            })
        }

        function h(t, e, r) {
            var n = m("DELETE", t);
            return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
        }
        var p;
        "undefined" != typeof window ? p = window : "undefined" != typeof self ? p = self : (console.warn("Using browser-only version of superagent in non-browser environment"), p = this);
        var c = t("component-emitter"),
            l = t("./request-base"),
            f = t("./is-object"),
            d = t("./response-base"),
            y = t("./agent-base"),
            m = r = e.exports = function(t, e) {
                return "function" == typeof e ? new r.Request("GET", t).end(e) : 1 == arguments.length ? new r.Request("GET", t) : new r.Request(t, e)
            };
        r.Request = u, m.getXHR = function() {
            if (!(!p.XMLHttpRequest || p.location && "file:" == p.location.protocol && p.ActiveXObject)) return new XMLHttpRequest;
            try {
                return new ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (t) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (t) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (t) {}
            throw Error("Browser-only version of superagent could not find XHR")
        };
        var _ = "".trim ? function(t) {
            return t.trim()
        } : function(t) {
            return t.replace(/(^\s*|\s*$)/g, "")
        };
        m.serializeObject = n, m.parseString = o, m.types = {
            html: "text/html",
            json: "application/json",
            xml: "text/xml",
            urlencoded: "application/x-www-form-urlencoded",
            form: "application/x-www-form-urlencoded",
            "form-data": "application/x-www-form-urlencoded"
        }, m.serialize = {
            "application/x-www-form-urlencoded": n,
            "application/json": JSON.stringify
        }, m.parse = {
            "application/x-www-form-urlencoded": o,
            "application/json": JSON.parse
        }, d(a.prototype), a.prototype._parseBody = function(t) {
            var e = m.parse[this.type];
            return this.req._parser ? this.req._parser(this, t) : (!e && s(this.type) && (e = m.parse["application/json"]), e && t && (t.length || t instanceof Object) ? e(t) : null)
        }, a.prototype.toError = function() {
            var t = this.req,
                e = t.method,
                r = t.url,
                n = "cannot " + e + " " + r + " (" + this.status + ")",
                i = new Error(n);
            return i.status = this.status, i.method = e, i.url = r, i
        }, m.Response = a, c(u.prototype), l(u.prototype), u.prototype.type = function(t) {
            return this.set("Content-Type", m.types[t] || t), this
        }, u.prototype.accept = function(t) {
            return this.set("Accept", m.types[t] || t), this
        }, u.prototype.auth = function(t, e, r) {
            1 === arguments.length && (e = ""), "object" == typeof e && null !== e && (r = e, e = ""), r || (r = {
                type: "function" == typeof btoa ? "basic" : "auto"
            });
            return this._auth(t, e, r, function(t) {
                if ("function" == typeof btoa) return btoa(t);
                throw new Error("Cannot use basic auth, btoa is not a function")
            })
        }, u.prototype.query = function(t) {
            return "string" != typeof t && (t = n(t)), t && this._query.push(t), this
        }, u.prototype.attach = function(t, e, r) {
            if (e) {
                if (this._data) throw Error("superagent can't mix .send() and .attach()");
                this._getFormData().append(t, e, r || e.name)
            }
            return this
        }, u.prototype._getFormData = function() {
            return this._formData || (this._formData = new p.FormData), this._formData
        }, u.prototype.callback = function(t, e) {
            if (this._shouldRetry(t, e)) return this._retry();
            var r = this._callback;
            this.clearTimeout(), t && (this._maxRetries && (t.retries = this._retries - 1), this.emit("error", t)), r(t, e)
        }, u.prototype.crossDomainError = function() {
            var t = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
            t.crossDomain = !0, t.status = this.status, t.method = this.method, t.url = this.url, this.callback(t)
        }, u.prototype.buffer = u.prototype.ca = u.prototype.agent = function() {
            return console.warn("This is not supported in browser version of superagent"), this
        }, u.prototype.pipe = u.prototype.write = function() {
            throw Error("Streaming is not supported in browser version of superagent")
        }, u.prototype._isHost = function(t) {
            return t && "object" == typeof t && !Array.isArray(t) && "[object Object]" !== Object.prototype.toString.call(t)
        }, u.prototype.end = function(t) {
            return this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = t || function() {}, this._finalizeQueryString(), this._end()
        }, u.prototype._end = function() {
            var t = this,
                e = this.xhr = m.getXHR(),
                r = this._formData || this._data;
            this._setTimeouts(), e.onreadystatechange = function() {
                var r = e.readyState;
                if (r >= 2 && t._responseTimeoutTimer && clearTimeout(t._responseTimeoutTimer), 4 == r) {
                    var n;
                    try {
                        n = e.status
                    } catch (t) {
                        n = 0
                    }
                    if (!n) {
                        if (t.timedout || t._aborted) return;
                        return t.crossDomainError()
                    }
                    t.emit("end")
                }
            };
            var n = function(e, r) {
                r.total > 0 && (r.percent = r.loaded / r.total * 100), r.direction = e, t.emit("progress", r)
            };
            if (this.hasListeners("progress")) try {
                e.onprogress = n.bind(null, "download"), e.upload && (e.upload.onprogress = n.bind(null, "upload"))
            } catch (t) {}
            try {
                this.username && this.password ? e.open(this.method, this.url, !0, this.username, this.password) : e.open(this.method, this.url, !0)
            } catch (t) {
                return this.callback(t)
            }
            if (this._withCredentials && (e.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof r && !this._isHost(r)) {
                var i = this._header["content-type"],
                    o = this._serializer || m.serialize[i ? i.split(";")[0] : ""];
                !o && s(i) && (o = m.serialize["application/json"]), o && (r = o(r))
            }
            for (var a in this.header) null != this.header[a] && this.header.hasOwnProperty(a) && e.setRequestHeader(a, this.header[a]);
            return this._responseType && (e.responseType = this._responseType), this.emit("request", this), e.send(void 0 !== r ? r : null), this
        }, m.agent = function() {
            return new y
        }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(t) {
            y.prototype[t.toLowerCase()] = function(e, r) {
                var n = new m.Request(t, e);
                return this._setDefaults(n), r && n.end(r), n
            }
        }), y.prototype.del = y.prototype.delete, m.get = function(t, e, r) {
            var n = m("GET", t);
            return "function" == typeof e && (r = e, e = null), e && n.query(e), r && n.end(r), n
        }, m.head = function(t, e, r) {
            var n = m("HEAD", t);
            return "function" == typeof e && (r = e, e = null), e && n.query(e), r && n.end(r), n
        }, m.options = function(t, e, r) {
            var n = m("OPTIONS", t);
            return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
        }, m.del = h, m.delete = h, m.patch = function(t, e, r) {
            var n = m("PATCH", t);
            return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
        }, m.post = function(t, e, r) {
            var n = m("POST", t);
            return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
        }, m.put = function(t, e, r) {
            var n = m("PUT", t);
            return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
        }
    }, {
        "./agent-base": 2,
        "./is-object": 3,
        "./request-base": 4,
        "./response-base": 5,
        "component-emitter": 1
    }]
}, {}, []);