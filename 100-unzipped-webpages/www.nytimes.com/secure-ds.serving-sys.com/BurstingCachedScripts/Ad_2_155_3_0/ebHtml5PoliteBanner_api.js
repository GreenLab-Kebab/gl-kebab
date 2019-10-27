var EBGInfra = EBGInfra ? EBGInfra : {
    declareNamespace: function(a) {
        for (var b = window.EBG, a = a.split("."), c = 0; c < a.length; c++) {
            var d = a[c],
                e = b[d];
            e || (e = b[d] = {});
            b = e
        }
    },
    declareClass: function(a, b) {
        a.prototype.constructor = a;
        if (b) a.__superClass = b, a.__basePrototypePending = !0, EBG._resolveInheritance(a);
        return a
    },
    runTimed: function(a, b, c, d) {
        return setTimeout(function() {
            b.apply(a, c)
        }, d)
    },
    setInterval: function(a, b, c, d) {
        return setInterval(function() {
            b.apply(a, c)
        }, d)
    },
    clearInterval: function(a) {
        clearInterval(a)
    },
    sequence: function() {
        var a = [],
            b = function(c) {
                c.count--;
                if (0 <= c.count) return EBG.runTimed(this, b, [c], c.interval), c.tfunc.apply(c.context, c.args);
                EBG.isFunc(c.callback) && c.callback.apply(c.cbContext, c.cbArgs);
                a[c.index] = null
            };
        return function(c, d, e, g, f, h, i, j, k, l) {
            if (EBG.isFunc(d)) {
                var m;
                a: {
                    for (m = 0; m < a.length; m++)
                        if (a[m] && a[m].func == d) break a;m = !1
                }
                h = EBG.isNumber(h) ? h : f;
                l = l || {};
                if (EBG.isFunc(j) && !EBG.isDefined(l.trailing)) l.trailing = !1;
                c = {
                    context: c,
                    func: d,
                    tfunc: !1 === m ? this.throttle(d, h, l) : a[m].tfunc,
                    args: e ? e : [],
                    count: g,
                    interval: f,
                    cbContext: i,
                    callback: j,
                    cbArgs: k ? k : []
                };
                d = a.push(c) - 1;
                a[d].index = d;
                return b(c)
            }
            return !1
        }
    }(),
    debounce: function(a, b, c) {
        var d, e, g, f, h, i = function() {
            var j = (new Date).getTime() - f;
            j < b && 0 <= j ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(g, e), d || (g = e = null)))
        };
        return function() {
            g = this;
            e = arguments;
            f = (new Date).getTime();
            var j = c && !d;
            d || (d = setTimeout(i, b));
            j && (h = a.apply(g, e), g = e = null);
            return h
        }
    },
    throttle: function(a, b, c) {
        var d, e, g, f = null,
            h = 0;
        c || (c = {});
        var i = function() {
            h = !1 === c.leading ? 0 : (new Date).getTime();
            f = null;
            g =
                a.apply(d, e);
            f || (d = e = null)
        };
        return function() {
            var j = (new Date).getTime();
            !h && !1 === c.leading && (h = j);
            var k = b - (j - h);
            d = this;
            e = arguments;
            0 >= k || k > b ? (f && (clearTimeout(f), f = null), h = j, g = a.apply(d, e), f || (d = e = null)) : !f && !1 !== c.trailing && (f = setTimeout(i, k));
            return g
        }
    },
    _resolveInheritance: function(a) {
        if (a.__basePrototypePending) {
            var b = a.__superClass;
            EBG._resolveInheritance(b);
            var b = b.prototype,
                c = a.prototype,
                d;
            for (d in b) c[d] = c[d] || b[d];
            delete a.__basePrototypePending
        }
    },
    callSuperConstructor: function(a, b, c) {
        (a =
            a.__superClass) && (c ? a.apply(b, c) : a.apply(b));
        return b
    },
    callSuperFunction: function(a, b, c, d) {
        if (a = a.__superClass) var e = a.prototype[c];
        try {
            if (e) return d ? e.apply(b, d) : e.apply(b)
        } catch (g) {}
    },
    typeOf: function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array || !(a instanceof Object) && "[object Array]" == Object.prototype.toString.call(a) || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if (!(a instanceof Object) && ("[object Function]" == Object.prototype.toString.call(a) || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))) return "function"
            } else return "function" == b && "undefined" == typeof a.call ? "object" : "null";
        return b
    },
    isFunc: function(a) {
        return "function" == EBG.typeOf(a)
    },
    isDefined: function(a) {
        return "undefined" != EBG.typeOf(a)
    },
    notNull: function(a) {
        return null != a
    },
    isDefinedNotNull: function(a) {
        return this.isDefined(a) && this.notNull(a)
    },
    hasValue: function(a) {
        return null !=
            a && "undefined" != EBG.typeOf(a)
    },
    hasOwnValue: function(a, b, c) {
        for (var d in a)
            if (a.hasOwnProperty(d))
                if (c && EBG.isFunc(a[d].toLowerCase)) {
                    if (a[d].toLowerCase() === b.toLowerCase()) return !0
                } else if (a[d] === b) return !0;
        return !1
    },
    objMatch: function(a, b) {
        var c = !1;
        if (a && !b || !a && b) return !1;
        for (var d in a) {
            switch (!0) {
                case !EBG.isDefined(b[d]):
                    c = !1;
                    break;
                case a[d] === b[d]:
                case EBG.isElementOrNode(a[d]):
                    c = a[d] === b[d];
                    break;
                case EBG.isObj(a[d]):
                case EBG.isArray(a[d]):
                    c = EBG.objMatch(a[d], b[d]);
                    break;
                default:
                    c = !1
            }
            if (!c) return !1
        }
        return !0
    },
    isObj: function(a) {
        return "object" == EBG.typeOf(a)
    },
    isArray: function(a) {
        return "array" == EBG.typeOf(a)
    },
    isBool: function(a) {
        return "boolean" == EBG.typeOf(a)
    },
    isNumber: function(a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
    },
    isNode: function(a) {
        var b = a && a.ownerDocument && (a.ownerDocument.defaultView || a.ownerDocument.parentwindow);
        return b && ("object" === typeof b.Node || "function" === typeof b.Node) ? a instanceof b.Node : a && "object" === typeof a && "number" === typeof a.nodeType && "string" === typeof a.nodeName
    },
    isElement: function(a) {
        var b =
            a && a.ownerDocument && (a.ownerDocument.defaultView || a.ownerDocument.parentwindow);
        return b && ("object" === typeof b.HTMLElement || "function" === typeof b.HTMLElement) ? a instanceof b.HTMLElement : a && "object" === typeof a && null !== a && 1 === a.nodeType && "string" === typeof a.nodeName
    },
    isElementOrNode: function(a) {
        return this.isElement(a) || this.isNode(a)
    },
    format: function(a) {
        for (var b = 1; b < arguments.length; b++) a = a.replace(RegExp("\\{" + (b - 1) + "\\}", "gi"), "" + arguments[b]);
        return a
    },
    throwEx: function(a) {
        throw {
            name: "",
            message: a
        };
    },
    mergeObj: function(a, b, c) {
        var c = !!c,
            d;
        for (d in a)
            if (a.hasOwnProperty(d) && (!b.hasOwnProperty(d) || c)) b[d] = a[d]
    },
    cloneObj: function(a, b, c) {
        c = c || 1;
        if (!EBG.isObj(a)) return null;
        var d = {},
            e;
        for (e in a) a.hasOwnProperty(e) && (d[e] = b && EBG.isElementOrNode(a[e]) || EBG.isDefinedNotNull(a[e]) && a[e] == a[e].self ? a[e] : EBG.isObj(a[e]) && 4 >= c ? EBG.cloneObj(a[e], null, c + 1) : a[e]);
        return d
    },
    combinePaths: function(a, b) {
        a = a || "";
        b = b || "";
        a && "/" != a[a.length - 1] && b && "/" != b[0] && (a += "/");
        var c = a;
        b && (c += b);
        return c
    },
    px: function(a) {
        return 0 <
            a.toString().search("%") ? a : EBG.format("{0}px", a)
    },
    indexOfArray: function(a, b) {
        for (var c = 0; c < a.length; c++)
            if (a[c] == b) return c;
        return -1
    },
    filterObject: function(a, b, c) {
        if ("function" != typeof b) throw new TypeError;
        var d = {},
            e;
        for (e in a)
            if (a.hasOwnProperty(e)) {
                var g = a[e];
                if (b.call(c || window, g, e, a)) d[e] = g
            }
        return d
    },
    filterArray: function(a, b, c) {
        var d = a.length >>> 0;
        if ("function" != typeof b) throw new TypeError;
        for (var e = [], g = 0; g < d; g++)
            if (g in a) {
                var f = a[g];
                b.call(c || window, f, g, a) && e.push(f)
            }
        return e
    },
    isGlobalDef: function(a,
        b) {
        var c = "undefined" != typeof window[a];
        b && c && (c = eval(a + "==" + b));
        return c
    },
    getPageUrl: function(a) {
        try {
            return a && a.location && a.location.href ? a.location.href : null
        } catch (b) {
            return null
        }
    },
    _isXMLHttpRequestSupported: function(a) {
        var b = window.XMLHttpRequest ? new XMLHttpRequest : null,
            b = b && EBG.isBool(b.withCredentials);
        return b = EBG.isMRAID() ? a ? !0 : !1 : b
    },
    htmlDecode: function(a) {
        this.helperDiv = this.helperDiv ? this.helperDiv : document.createElement("div");
        this.helperDiv.innerHTML = a;
        return this.helperDiv.textContent
    },
    htmlEncode: function(a) {
        this.helperDiv = this.helperDiv ? this.helperDiv : document.createElement("div");
        this.helperDiv.textContent = a;
        return this.helperDiv.innerHTML
    },
    getDataFromRemoteServer: function(a, b, c, d, e) {
        if (!a || EBG.isOfflineDemo) return !1;
        var d = EBG.isBool(d) ? d : !0,
            e = EBG.isBool(e) ? e : !1,
            g = function() {
                try {
                    if (e) {
                        var a, d;
                        9 === document.documentMode ? d = (new window.DOMParser).parseFromString(i.responseText, "text/xml") : (a = document.createElement("div"), a.innerHTML = "<xml>" + i.responseText + "</xml>", document.body.appendChild(a),
                            d = a.firstChild.XMLDocument, document.body.removeChild(a));
                        b.call(c, d)
                    } else b.call(c, i.responseText)
                } catch (f) {
                    b.call(c)
                }
            },
            f = !1;
        try {
            if (this._isXMLHttpRequestSupported(!0)) {
                var h = new XMLHttpRequest;
                h.open("GET", a, d);
                f = !0;
                if (d) h.onreadystatechange = function() {
                    4 == h.readyState && (200 == h.status ? b.call(c, e ? h.responseXML : h.responseText) : b.call(c))
                };
                h.send();
                d || b.call(c, e ? h.responseXML : h.responseText)
            } else if (window.XDomainRequest && d) {
                var i = new XDomainRequest;
                if (i) i.onerror = function() {
                    EBG.log.error("XDomain request error");
                    b.call(c)
                }, i.ontimeout = function() {
                    EBG.log.error("XDomain request timeout");
                    b.call(c)
                }, i.onload = g, i.onprogress = function() {}, i.open("get", a), i.send(), f = !0
            }
        } catch (j) {
            f = !1
        }
        return f
    },
    isPercentage: function(a) {
        return "string" == typeof a ? /\d+%/.test(a) && EBG.isNumber(parseInt(a)) : !1
    },
    getTime: function() {
        var a = (new Date).getTime() / 1E3;
        return function() {
            return (new Date).getTime() / 1E3 - a
        }
    }(),
    getObjKeys: function(a) {
        a = a || {};
        if (Object.keys) return Object.keys(a);
        var b = [],
            c;
        for (c in a) a.hasOwnProperty(c) && b.push(c);
        return b
    },
    serializeObject: function(a) {
        var b = [],
            c;
        for (c in a) a.hasOwnProperty(c) && b.push(c + "=" + a[c]);
        return b.join("&")
    },
    capitalize: function(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    },
    getTopAccessibleWindow: function() {
        var a = window;
        if (a.location.ancestorOrigins) {
            for (var b = window, c = window, d = a.location.ancestorOrigins, e = !1, g = 0; g < d.length; g++) {
                var a = a.parent,
                    f = document.createElement("a");
                f.href = d[g];
                f = f.hostname;
                "null" !== d[g] && (window.location.origin === d[g] || "" === window.location.hostname && "" === f) ? (c = a, e || (b =
                    a)) : e = !0
            }
            return function(a) {
                return ("boolean" == typeof a ? a : 1) ? b : c
            }
        }
        try {
            if (a.top.document.domain || "" === a.parent.document.domain) a = a.top;
            else throw new DOMException;
        } catch (h) {
            try {
                for (a = window; a !== a.parent && a.self !== a.parent;)
                    if (a.parent.document.domain || "" === a.parent.document.domain) a = a.parent
            } catch (i) {}
        }
        return function() {
            return a
        }
    }(),
    getBigScript: function() {
        var a;
        if (document.currentScript) a = document.currentScript;
        else {
            var b = document.getElementsByTagName("script");
            a = b[b.length - 1]
        }
        return function() {
            return a
        }
    }(),
    valueFromPath: function(a, b, c) {
        for (var b = b.split("."), d = 0; d < b.length; d++) a = a[b[d]];
        return EBG.isObj(a) && c ? EBG.cloneObj(a) : a
    },
    isMRAID: function() {
        return window.mraid && EBG.isFunc(mraid.getVersion)
    }
};
EBG = window.EBG || {};
EBGInfra.mergeObj(EBGInfra, EBG, !1);
EBG.declareNamespace("Logging");
EBG.Logging.LoggerLevels = {
    NONE: 0,
    ERROR: 1,
    INFO: 2,
    WARN: 3,
    DEBUG: 4
};
EBG.Logging.Logger = function(a) {
    this._level = a;
    this.startNestingGroupNames = [];
    this.endNestingGroupNames = [];
    this._stringFilters = [];
    this._fGroupFilter = !1;
    this._maxIndent = 15
};
EBG.Logging.Logger.prototype = {
    setLevel: function(a) {
        this._level = a
    },
    setFilter: function(a, b) {
        "string" == EBG.typeOf(a) && (a = [a]);
        this._fGroupFilter = EBG.isDefined(b) ? b : !0;
        this._stringFilters = a
    },
    debug: function(a) {
        this._reportToLog(EBG.Logging.LoggerLevels.DEBUG, arguments)
    },
    info: function(a) {
        this._reportToLog(EBG.Logging.LoggerLevels.INFO, arguments)
    },
    warn: function(a) {
        this._reportToLog(EBG.Logging.LoggerLevels.WARN, arguments)
    },
    error: function(a) {
        this._reportToLog(EBG.Logging.LoggerLevels.ERROR, arguments)
    },
    exception: function(a,
        b) {
        var c = "string" !== b ? EBG.format("Exception in {0}. message: {1}", a, b.message) : EBG.format("Exception in: {0}. message: {1}", a, b);
        b.stack && (c += EBG.format(" stack: {0}", b.stack));
        this._reportToLog(EBG.Logging.LoggerLevels.ERROR, [c])
    },
    startGroup: function(a) {
        this._supportNesting() && this._passesFilter(a) && this.startNestingGroupNames.push(a)
    },
    endGroup: function() {
        this._supportNesting() && 0 < this.endNestingGroupNames.length && window.console.groupEnd(this.endNestingGroupNames.pop())
    },
    _consoleAvailable: function() {
        return void 0 !==
            window.console
    },
    _supportNesting: function() {
        return this._consoleAvailable() ? void 0 !== window.console.group : !1
    },
    _supportErrorMessage: function() {
        return void 0 !== window.console.error
    },
    _supportInfoMessage: function() {
        return void 0 !== window.console.info || void 0 !== window.opera
    },
    _supportWarnMessage: function() {
        return void 0 !== window.console.warn || void 0 !== window.opera
    },
    _supportObjectView: function() {
        return void 0 !== window.console.dir || void 0 !== window.opera
    },
    _callConsoleFunction: function(a, b) {
        var c = !1;
        switch (a) {
            case EBG.Logging.LoggerLevels.INFO:
                this._supportInfoMessage() &&
                    (window.console.info(b), c = !0);
                break;
            case EBG.Logging.LoggerLevels.WARN:
                this._supportWarnMessage() && (window.console.warn(b), c = !0);
                break;
            case EBG.Logging.LoggerLevels.ERROR:
                this._supportErrorMessage() && (consoleFunction = window.console.error(b), c = !0)
        }
        c || window.console.log(b)
    },
    _resetNesting: function() {
        for (var a = 0; a <= this._maxIndent; a++) this.endGroup();
        console.warn("Reset log group nesting. MaxIndent = " + this._maxIndent)
    },
    _passesFilter: function(a) {
        var b = !1;
        if (0 == this._stringFilters.length) b = !0;
        else
            for (var c =
                    0; c < this._stringFilters.length; c++)
                if (-1 < a.indexOf(this._stringFilters[c])) {
                    b = !0;
                    break
                } return b
    },
    _reportToLog: function(a, b) {
        if (this._level >= a && this._consoleAvailable()) {
            var c = b[0];
            "[object String]" !== Object.prototype.toString.call(c) ? this._supportObjectView() || (c = c.toString()) : c = EBG.format.apply(null, b);
            if (void 0 === window.opera) {
                for (; this.startNestingGroupNames.length;) window.console.group(this.startNestingGroupNames[0]), this.endNestingGroupNames.push(this.startNestingGroupNames.shift());
                (this._passesFilter(c) ||
                    this._fGroupFilter && 0 < this.endNestingGroupNames.length) && this._callConsoleFunction(a, c);
                this.endNestingGroupNames.length > this._maxIndent && this._resetNesting()
            } else this._passesFilter(c) && opera.postError(c)
        }
    }
};
EBG.declareClass(EBG.Logging.Logger, null);
EBG.log = EBG.log || new EBG.Logging.Logger(EBG.Logging.LoggerLevels.DEBUG);
(function(a, b, c) {
    b || (b = {
        fn: {},
        extend: function() {
            for (var a = arguments[0], b = 1, c = arguments.length; b < c; b++) {
                var d = arguments[b],
                    i;
                for (i in d) a[i] = d[i]
            }
            return a
        }
    });
    b.fn.pm = function() {
        return this
    };
    if (a.EBG && !EBG.pm) {
        b.pm = EBG.pm = function(a) {
            d.send(a)
        };
        b.pm.bind = EBG.bind = function(a, b, c, h, i) {
            d.bind(a, b, c, h, i)
        };
        b.pm.unbind = EBG.unbind = function(a, b) {
            d.unbind(a, b)
        };
        b.pm.dispatch = function(a, b, c, h) {
            d._dispatch({
                data: JSON.stringify({
                    data: b,
                    type: a
                }),
                source: c,
                target: h,
                origin: null
            })
        };
        b.pm.origin = EBG.pm.origin = null;
        var d = {
            send: function(a) {
                var a = b.extend({}, d.defaults, a),
                    c = a.target;
                if (a.target && a.type) {
                    var f = {
                        data: a.data,
                        type: a.type
                    };
                    if (a.success) f.callback = d._callback(a.success);
                    if (a.error) f.errback = d._callback(a.error);
                    "postMessage" in c && !a.hash && (d._bind(), c.postMessage(JSON.stringify(f), a.origin || "*"))
                }
            },
            bind: function(c, g, f, h, i, j) {
                "postMessage" in a && !j && (d._bind(h), h = d.data("listeners.postmessage"), h || (h = {}, d.data("listeners.postmessage", h)), j = h[c], j || (j = [], h[c] = j), j.push({
                    fn: g,
                    origin: i || b.pm.origin,
                    bindObj: f
                }))
            },
            unbind: function(a, b) {
                var c = d.data("listeners.postmessage");
                if (c && a)
                    if (b) {
                        var h = c[a];
                        if (h) {
                            for (var i = [], j = 0, k = h.length; j < k; j++) {
                                var l = h[j];
                                l.fn !== b && i.push(l)
                            }
                            c[a] = i
                        }
                    } else delete c[a]
            },
            data: function(a, b) {
                return b === c ? d._data[a] : d._data[a] = b
            },
            _data: {},
            _CHARS: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
            _random: function() {
                for (var a = [], b = 0; 32 > b; b++) a[b] = d._CHARS[0 | 32 * Math.random()];
                return a.join("")
            },
            _callback: function(a) {
                var b = d.data("callbacks.postmessage");
                b || (b = {}, d.data("callbacks.postmessage",
                    b));
                var c = d._random();
                b[c] = a;
                return c
            },
            _bind: function(b) {
                d.data("listening.postmessage") || (b = b ? b : a, b.addEventListener ? b.addEventListener("message", d._dispatch, !1) : a.attachEvent && b.attachEvent("onmessage", d._dispatch), d.data("listening.postmessage", 1))
            },
            _dispatch: function(a) {
                var b = {};
                try {
                    b = JSON.parse(a.data)
                } catch (c) {
                    return
                }
                if (b.type) {
                    var h = (d.data("callbacks.postmessage") || {})[b.type];
                    if (h) h(b.data);
                    else
                        for (var h = (d.data("listeners.postmessage") || {})[b.type] || [], i = 0, j = h.length; i < j; i++) {
                            var k = h[i];
                            if (k.origin && a.origin !== k.origin) b.errback && d.send({
                                target: a.source,
                                data: {
                                    message: "postmessage origin mismatch",
                                    origin: [a.origin, k.origin]
                                },
                                type: b.errback
                            });
                            else try {
                                var l;
                                l = k.bindObj ? k.fn.apply(k.bindObj, [b.data, a]) : k.fn(b.data, a);
                                b.callback && d.send({
                                    target: a.source,
                                    data: l,
                                    type: b.callback
                                })
                            } catch (m) {
                                b.errback && d.send({
                                    target: a.source,
                                    data: m,
                                    type: b.errback
                                })
                            }
                        }
                }
            }
        };
        b.extend(d, {
            defaults: {
                target: null,
                url: null,
                type: null,
                data: null,
                success: null,
                error: null,
                origin: "*",
                hash: !1
            }
        })
    } else b.pm = EBG.pm
})(this, "undefined" ===
    typeof jQuery ? null : jQuery);
"JSON" in window && window.JSON || (JSON = {});
(function() {
    function a(a) {
        return 10 > a ? "0" + a : a
    }

    function b(a) {
        e.lastIndex = 0;
        return e.test(a) ? '"' + a.replace(e, function(a) {
            var b = h[a];
            return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }

    function c(a, d) {
        var e, h, n, p, r = g,
            q, o = d[a];
        o && "object" === typeof o && "function" === typeof o.toJSON && (o = o.toJSON(a));
        "function" === typeof i && (o = i.call(d, a, o));
        switch (typeof o) {
            case "string":
                return b(o);
            case "number":
                return isFinite(o) ? "" + o : "null";
            case "boolean":
            case "null":
                return "" +
                    o;
            case "object":
                if (!o) return "null";
                g += f;
                q = [];
                if ("[object Array]" === Object.prototype.toString.apply(o)) {
                    p = o.length;
                    for (e = 0; e < p; e += 1) q[e] = c(e, o) || "null";
                    n = 0 === q.length ? "[]" : g ? "[\n" + g + q.join(",\n" + g) + "\n" + r + "]" : "[" + q.join(",") + "]";
                    g = r;
                    return n
                }
                if (i && "object" === typeof i) {
                    p = i.length;
                    for (e = 0; e < p; e += 1) h = i[e], "string" === typeof h && (n = c(h, o)) && q.push(b(h) + (g ? ": " : ":") + n)
                } else
                    for (h in o) Object.hasOwnProperty.call(o, h) && (n = c(h, o)) && q.push(b(h) + (g ? ": " : ":") + n);
                n = 0 === q.length ? "{}" : g ? "{\n" + g + q.join(",\n" + g) + "\n" +
                    r + "}" : "{" + q.join(",") + "}";
                g = r;
                return n
        }
    }
    if ("function" !== typeof Date.prototype.toJSON) Date.prototype.toJSON = function() {
        return this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z"
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    };
    var d = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        g, f, h = {
            "\u0008": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\u000c": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        i;
    if ("function" !== typeof JSON.stringify) JSON.stringify = function(a, b, d) {
        var e;
        f = g = "";
        if ("number" === typeof d)
            for (e = 0; e < d; e += 1) f += " ";
        else "string" === typeof d && (f = d);
        if ((i = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length)) throw Error("JSON.stringify");
        return c("", {
            "": a
        })
    };
    if ("function" !== typeof JSON.parse) JSON.parse = function(a, b) {
        function c(a, d) {
            var e, f, g = a[d];
            if (g && "object" === typeof g)
                for (e in g) Object.hasOwnProperty.call(g, e) && (f = c(g, e), void 0 !== f ? g[e] = f : delete g[e]);
            return b.call(a, d, g)
        }
        var e;
        d.lastIndex = 0;
        d.test(a) && (a = a.replace(d, function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" === typeof b ? c({
            "": e
        }, "") : e;
        throw new SyntaxError("JSON.parse");
    }
})();
EBG.declareNamespace("API");
EBG.API.InjectionMethod = {
    APPEND: "append",
    INSERT_BEFORE: "insertBefore",
    INSERT_AFTER: "insertAfter",
    FIRST_CHILD: "firstChild",
    LAST_CHILD: "lastChild"
};
EBG.API.BrowserTypes = {
    NON_SUPPORTED: 0,
    IE: 1,
    FF: 2,
    NN: 3,
    SAFARI: 4,
    CHROME: 5,
    AOL: 6,
    OPERA: 7,
    EDGE: 8
};
EBG.API.PlatformTypes = {
    NON_SUPPORTED: 0,
    WIN_95: 1,
    WIN_98: 2,
    WIN_2000: 3,
    WIN_XP: 4,
    WIN_ME: 5,
    WIN_NT: 6,
    MAC: 7,
    WIN_VISTA: 8,
    WIN_7: 9,
    IPHONE: 10,
    IPAD: 11,
    IPOD: 12,
    ANDROID_2_TAB: 13,
    ANDROID_3_TAB: 14,
    WIN_10: 15,
    ANDROID_5_TAB: 16,
    ANDROID_2_MOBILE: 17,
    ANDROID_3_MOBILE: 18,
    WIN_MOBILE_7: 19,
    ANDROID_4_TAB: 20,
    ANDROID_4_MOBILE: 21,
    WIN_8: 22,
    MAC_NEW: 23,
    MAC_YOSEMITE: 24,
    ANDROID_5_MOBILE: 25,
    CROS: 26,
    FBAN: 27,
    SMART_TV: 28,
    UBUNTU: 29,
    LINUX: 30,
    ANDROID_1: 31,
    ANDROID_6_MOBILE: 32,
    ANDROID_6_TAB: 33,
    Mac_El_Capitan: 34,
    Mac_Sierra: 35,
    ANDROID_7_MOBILE: 36,
    ANDROID_7_TAB: 37,
    ANDROID_8_MOBILE: 39,
    ANDROID_8_TAB: 40,
    ANDROID_9_MOBILE: 41,
    ANDROID_9_TAB: 42
};
EBG.API.DeviceTypes = {
    DESKTOP: 0,
    MOBILE: 1,
    TABLET: 2,
    UNKNOWN: 3
};
EBG.API.EventNames = {
    CREATE_AD: "CREATE_AD",
    CREATE_ADAPTOR: "CREATE_ADAPTOR",
    ADAPTOR_MODULES_READY: "ADAPTOR_MODULES_READY",
    CREATE_INT_MGR: "CREATE_INT_MGR",
    CREATE_ANIM_MGR: "CREATE_ANIM_MGR",
    CREATE_POSITIONING_HELPER: "CREATE_POSITIONING_HELPER",
    CREATE_GEOMETRY_HELPER: "CREATE_GEOMETRY_HELPER",
    SHOW_AD: "SHOW_AD",
    ADD_CREATIVES: "ADD_CREATIVES",
    ADD_INTERACTION: "ADD_INTERACTION",
    ADD_EYE_DIV: "ADD_EYE_DIV",
    ADD_HTML5_MAIN_CREATIVE: "ADD_HTML5_MAIN_CREATIVE",
    ADD_HTML5_PANEL_CREATIVE: "ADD_HTML5_PANEL_CREATIVE",
    ADD_EMPTY_BANNER_CREATIVE: "ADD_EMPTY_BANNER_CREATIVE",
    ADD_BANNER_IMAGE_CREATIVE: "ADD_BANNER_IMAGE_CREATIVE",
    ADD_BANNER_DEFAULT_IMAGE_CREATIVE: "ADD_BANNER_DEFAULT_IMAGE_CREATIVE",
    ADD_BANNER_PRELOAD_IMAGE_CREATIVE: "ADD_BANNER_PRELOAD_IMAGE_CREATIVE",
    ADD_BANNER_DEFAULT_FLASH_CREATIVE: "ADD_BANNER_DEFAULT_FLASH_CREATIVE",
    ADD_BANNER_RICH_FLASH_CREATIVE: "ADD_BANNER_RICH_FLASH_CREATIVE",
    ADD_FLOATING_INTRO_CREATIVE: "ADD_FLOATING_INTRO_CREATIVE",
    ADD_FLOATING_REMINDER_CREATIVE: "ADD_FLOATING_REMINDER_CREATIVE",
    ADD_FLOATING_MINISITE_CREATIVE: "ADD_FLOATING_MINISITE_CREATIVE",
    ADD_PANEL_RICH_FLASH_CREATIVE: "ADD_PANEL_RICH_FLASH_CREATIVE",
    SHOW_BANNER_RICH_FLASH_CREATIVE: "SHOW_BANNER_RICH_FLASH_CREATIVE",
    SHOW_PANEL_RICH_FLASH_CREATIVE: "SHOW_PANEL_RICH_FLASH_CREATIVE",
    SHOW_PANEL_CREATIVE: "SHOW_PANEL_CREATIVE",
    SHOW_REMINDER: "SHOW_REMINDER",
    SHOW_MINISITE: "SHOW_MINISITE",
    PAGE_LOAD: "PAGE_LOAD",
    COLLECT_TIMERS: "COLLECT_TIMERS",
    PAGE_UNLOAD: "PAGE_UNLOAD",
    AD_UNLOAD: "AD_UNLOAD",
    PAGE_BEFORE_UNLOAD: "PAGE_BEFORE_UNLOAD",
    PAGE_HIDE: "PAGE_HIDE",
    PAGE_RESIZE: "PAGE_RESIZE",
    PAGE_SCROLL: "PAGE_SCROLL",
    PAGE_FOCUS: "PAGE_FOCUS",
    PAGE_FOCUSIN: "PAGE_FOCUSIN",
    PAGE_FOCUSOUT: "PAGE_FOCUSOUT",
    PAGE_BLUR: "PAGE_BLUR",
    PAGE_HIDDEN: "PAGE_HIDDEN",
    PAGE_VISIBLE: "PAGE_VISIBLE",
    INTERACTION_REPORT_REMOTE_SERVERS: "INTERACTION_REPORT_REMOTE_SERVERS",
    START_TIMER: "START_TIMER",
    STOP_TIMER: "STOP_TIMER",
    UPDATE_TIMER: "UPDATE_TIMER",
    HANDLE_COUNTER_INTERACTION: "HANDLE_COUNTER_INTERACTION",
    HANDLE_TIMER_INTERACTION: "HANDLE_TIMER_INTERACTION",
    DEFAULT_CLICK: "DEFAULT_CLICK",
    EXPAND: "EXPAND",
    COLLAPSE: "COLLAPSE",
    USER_INTERACTION: "USER_INTERACTION",
    MOUSE_OVER: "MOUSE_OVER",
    MOUSE_OUT: "MOUSE_OUT",
    MOUSE_MOVE: "MOUSE_MOVE",
    MODULE_LOAD: "MODULE_LOAD",
    USER_INITIATED_VIDEO: "USER_INITIATED_VIDEO",
    DWELL_UNIQUE: "DWELL_UNIQUE",
    DWELL_VIDEO_START: "DWELL_VIDEO_START",
    DWELL_VIDEO_STOP: "DWELL_VIDEO_STOP",
    CREATIVE_CONTAINER_READY: "CREATIVE_CONTAINER_READY",
    RICH_FLASH_PLAYED: "RICH_FLASH_PLAYED",
    REPLAY_AD: "REPLAY_AD",
    BANDWITH_DETECTED: "BANDWITH_DETECTED",
    FULL_SCREEN_START: "FULL_SCREEN_START",
    FULL_SCREEN_END: "FULL_SCREEN_STOP",
    ANIMATE_PANEL: "ANIMATE_PANEL",
    CLOSE_AD: "CLOSE_AD",
    OPEN_PAGE: "OPEN_PAGE",
    MAX_AD_DURATION: "MAX_AD_DURATION",
    FLASH_IN_FRAME_TWO: "FLASH_IN_FRAME_TWO",
    SHOW_HIDE_ELEMENTS: "SHOW_HIDE_ELEMENTS",
    DEFAULT_IMPRESSION: "DEFAULT_IMPRESSION",
    AIE_LOADED: "AIE_LOADED",
    INIT_MANAGERS: "INIT_MANAGERS",
    MOUSE_MOVE_NEEDED: "MOUSE_MOVE_NEEDED",
    VISIBILITY_CHECK: "VISIBILITY_CHECK",
    VISIBILITY_HIDDEN: "VISIBILITY_HIDDEN",
    AD_START: "AD_START",
    ELEMENT_LOADED: "ELEMENT_LOADED",
    AD_STACKING: "AD_STACKING",
    SCREEN_ORIENTATION: "SCREEN_ORIENTATION",
    PORTRAIT: "PORTRAIT",
    LANDSCAPE: "LANDSCAPE",
    CHANGE_PANEL_POSITION: "CHANGE_PANEL_POSITION",
    PANEL_FREQUENCY_LOADED: "PANEL_FREQUENCY_LOADED",
    THROTTLED: "THROTTLED",
    FLASH_DETECTED: "FLASH_DETECTED",
    ANIMATION: "ANIMATION",
    RESIZE_PANEL: "RESIZE_PANEL",
    MESSAGE_CREATIVE: "MESSAGE_CREATIVE",
    ELEMENT_HIDDEN: "ELEMENT_HIDDEN",
    ELEMENT_SHOWN: "ELEMENT_SHOWN",
    DEVICE_MOTION: "DEVICE_MOTION",
    DEVICE_ORIENTATION: "DEVICE_ORIENTATION",
    INSTREAM_SEND_IMPRESSION: "INSTREAM_SEND_IMPRESSION"
};
EBG.API.EbEventNames = {
    PAGE_LOAD: EBG.API.EventNames.PAGE_LOAD,
    SCREEN_ORIENTATION: EBG.API.EventNames.SCREEN_ORIENTATION,
    VISIBILITY: EBG.API.EventNames.VISIBILITY_CHECK,
    EXPAND: EBG.API.EventNames.EXPAND,
    COLLAPSE: EBG.API.EventNames.COLLAPSE,
    DEVICE_MOTION: EBG.API.EventNames.DEVICE_MOTION,
    DEVICE_ORIENTATION: EBG.API.EventNames.DEVICE_ORIENTATION
};
EBG.VideoInteraction = {
    STARTED: "ebVideoStarted",
    PERCENT_25_PLAYED: "eb25Per_Played",
    PERCENT_50_PLAYED: "eb50Per_Played",
    PERCENT_75_PLAYED: "eb75Per_Played",
    FULLPLAY: "ebVideoFullPlay",
    MUTE: "ebVideoMute",
    UNMUTE: "ebVideoUnmute",
    PAUSE: "ebVideoPause",
    REPLAY: "ebVideoReplay",
    UNMUTED: "ebVideoUnmuted",
    FULLSCREEN_START: "ebFSStart",
    FULLSCREEN_END: "ebFSEnd",
    FULLSCREEN_MUTE: "ebFSVideoMute",
    FULLSCREEN_PAUSE: "ebFSVideoPause",
    SLIDER_DRAGGED: "ebSliderDragged",
    VIDEO_PLAY_DURATION: "ebVideoPlayDuration",
    VIDEO_ASSET_DURATION: "ebVideoAssetDuration",
    FULLSCREEN_DURATION: "ebFSVideoPlayDuration",
    FULLSCREEN_ASSET_DURATION: "ebFSVideoAssetDuration",
    USER_INITIATED_VIDEO: "ebUserInitiatedVideo",
    SKIP: "ebSkip",
    VIDEO_START: "AdVideoStart",
    FIRST_POINT: "AdVideoFirstQuartile",
    MID_POINT: "AdVideoMidpoint",
    THIRD_POINT: "AdVideoThirdQuartile",
    VIDEO_COMPLETE: "AdVideoComplete"
};
EBG.VideoQuartiles = [EBG.VideoInteraction.STARTED, EBG.VideoInteraction.PERCENT_25_PLAYED, EBG.VideoInteraction.PERCENT_50_PLAYED, EBG.VideoInteraction.PERCENT_75_PLAYED, EBG.VideoInteraction.FULLPLAY];
EBG.ReportImpressionType = {
    SERVER: 0,
    DELAYED: 1,
    CLIENT: 2
};
EBG.EBMessage = {
    REQ_INIT: "reqInit",
    INIT: "ebInit",
    INITDONE: "ebInitDone",
    GET_ENVIROMENT: "ebGetEnvironment",
    SHOW_DEFAULT_IMAGE: "ebShowDefaultImage",
    CLICKTHROUGH: "ebclickthrough",
    NOTIFIED_INTERACTION: "ebNotifiedInteraction",
    VERSION_TRACKING_IMPRESSION: "ebversiontrackingimpression",
    USER_ACTION_COUNTER: "ebCIUserActionCounter",
    AUTOMATIC_EVENT_COUNTER: "ebCIAutomaticEventCounter",
    START_TIMER: "ebCIStartTimer",
    UPDATE_TIMER: "ebUpdateTimer",
    STOP_TIMER: "ebCIStopTimer",
    START_VIDEO_TIMER: "ebStartVideoTimer",
    STOP_VIDEO_TIMER: "ebendvideotimer",
    VIDEO_INTERACTION: "ebVideoInteraction",
    VIDEO_LOAD: "ebVideoLoad",
    INIT_VIDEO_LOADER: "ebInitVideoLoader",
    VIDEO_FS_OPEN: "ebVideoFSOpen",
    VIDEO_FS_CLOSE: "ebVideoFSClose",
    VIDEO_FS_AUTO_CLOSE: "ebVideoFSAutoClose",
    START_VIDEO: "ebtStartVideo",
    STOP_VIDEO: "ebtStoptVideo",
    UPDATE_VIDEO_DURATION: "ebtUpdateVideoDuration",
    FULL_SCREEN_OPEN: "ebFullScreenOpen",
    FULL_SCREEN_CLOSE: "ebFullScreenClose",
    FULL_SCREEN_AUTO_CLOSE: "ebFullScreenAutoClose",
    MOUSE_MOVE: "ebMouseMove",
    PAGE_LOAD: "ebPageLoad",
    TRIGGER_AD_START: "ebTriggerAdStart",
    INIT_EXPANSION_PARAMS: "ebInitExpansionParams",
    RESET_COLLAPSE_TIMER: "ebResetCollapseTimer",
    NEW_SE: "ebNewSE",
    EXPAND: "ebExpandPanel",
    EXPAND_DONE: "ebExpandDone",
    COLLAPSE: "ebCollapsePanel",
    COLLAPSE_DONE: "ebCollapseDone",
    NOTIFY_INTERACTION_MONITOR: "NotifyInteractionMonitor",
    HIDE_INTRO: "ebHideIntro",
    INTRO_FULL_PLAY: "ebIntroFullPlay",
    KEEP_AD_OPREN: "ebKeepAdOpen",
    GO_TO_MINISITE: "ebGoToMiniSite",
    UPDATE_CLICK: "ebUpdateClick",
    DOCUMENT_LOADED: "ebDocumentLoaded",
    PLAY_VIDEO_ON_NATIVE_PLAYER: "playVideoOnNativePlayer",
    CREATE_CALENDAR_EVENT: "createCalendarEvent",
    STORE_PICTURE: "storePicture",
    SDK_DATA_CHANGE: "sdkDataChange",
    SDK_EVENT: "sdkEvent",
    ADAPTOR_READY: "adaptorReady",
    SWIPE: "ebSwipe",
    DISPOSE: "ebDispose",
    SET_RESIZE_PROPS: "ebResizeProperties",
    RESIZE: "ebResize",
    SET_EXPAND_PROPS: "ebExpandProperties",
    SET_ORIENTATION_PROPS: "ebOrientationProperties",
    CLOSE: "ebClose",
    CLOSE_AD: "ebclosead",
    SET_STATE: "ebSetstate",
    RESET_STATE: "ebResetstate",
    REQ_MOUSE_MOVE: "ebReqMouseMove",
    ANIMATION: "ebAnimation",
    VISIBILITY: "ebVisibility",
    PANEL_FREQUENCY: "ebPanelFrequency",
    HIDE_ELEMENT: "ebHideElement",
    SHOW_ELEMENT: "ebShowElement",
    ACKNOWLEDGE: "ebAcknowledge",
    SEND_IMP: "sendImp",
    UPDATE_VISIBILITY_ASSET: "ebUpdateVisibilityAsset"
};
EBG.DurationInteraction = {
    TIMER: "Timer",
    AGGREGATE: "Aggregate"
};
EBG.Animation = {
    Easing: {
        linear: "linear",
        easeInQuad: "easeInQuad",
        easeOutQuad: "easeOutQuad",
        easeInOutQuad: "easeInOutQuad",
        easeInCubic: "easeInCubic",
        easeOutCubic: "easeOutCubic",
        easeInOutCubic: "easeInOutCubic",
        easeInQuart: "easeInQuart",
        easeOutQuart: "easeOutQuart",
        easeInOutQuart: "easeInOutQuart",
        easeInQuint: "easeInQuint",
        easeOutQuint: "easeOutQuint",
        easeInOutQuint: "easeInOutQuint"
    },
    TransitionEasing: {
        ease: "ease",
        linear: "linear",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out"
    }
};
EBG.INNERIFRAMEMessage = {
    LOADED: "ebInnerIframeLoaded",
    INIT: "ebInitInnerIframe",
    VERIFY: "ebVerifyInnerIframe",
    EBO: "ebO",
    GLOBALPARAMS: "ebGlobalParams",
    CONTINUE_SENDING: "ContinueSending",
    NOT_LASTMSG: "NotLastMsg",
    LASTMSG: "LastMsg",
    ADCONFIG_REQUEST: "AdConfig_Request",
    SECRET_TAGS: "Secret_Tags"
};
EBG.FS = {
    EB_VERSION_TRACKING_IMPRESSION: "ebversiontrackingimpression",
    EB_CLICKTHROUGH: "ebclickthrough",
    EB_CREATIVE_EVENT_SUBSCRIPTION: "ebcreativeaddhdr",
    EB_CI_USER_ACTION_COUNTER: "ebciuseractioncounter",
    EB_CI_AUTOMATIC_EVENT_COUNTER: "ebciautomaticeventcounter",
    EB_VIDEO_INTERACTION: "ebvideointeraction",
    EB_START_TIMER: "ebstarttimer",
    EB_END_TIMER: "ebendtimer",
    EB_CI_START_TIMER: "ebcistarttimer",
    EB_CI_STOP_TIMER: "ebcistoptimer",
    EB_UPDATE_TIMER: "ebupdatetimer",
    EB_START_VIDEO_TIMER: "ebstartvideotimer",
    EB_STOP_VIDEO_TIMER: "ebendvideotimer",
    EB_PAGE_LOAD: "ebpageload",
    EB_COMMAND: "ebcommand",
    EB_MSG: "ebmsg",
    EB_EXPAND_PANEL: "ebexpandpanel",
    EB_COLLAPSE_PANEL: "ebcollapsepanel",
    EB_SET_STATE: "ebsetstate",
    EB_RESET_STATE: "ebresetstate",
    EB_MOUSE_TRACKER: "ebmousetracker",
    EB_MOUSE_MOVE: "ebmousemove",
    EB_TEST_DC: "ebtestdc",
    EB_CLOSE_AD: "ebclosead",
    EB_REPLAY_AD: "ebreplayad",
    EB_REPLAY_EXP: "ebreplayexp",
    EB_LOAD_RICH_BANNER: "ebloadrichbanner",
    EB_SHOW_RICH_BANNER: "ebshowrichbanner",
    EB_INIT_VIDEO_LOADER: "ebinitvideoloader",
    EB_HIDE_INTRO: "ebhideintro",
    EB_INTRO_FULL_PLAY: "ebintrofullplay",
    EB_KEEP_AD_OPREN: "ebkeepadopen",
    EB_GO_TO_MINISITE: "ebgotominisite",
    EB_VIDEO_LOAD: "ebvideoload",
    EB_VIDEO_LOAD_AND_PLAY: "ebvideoloadandplay",
    EB_FULL_SCREEN_OPEN: "ebfullscreenopen",
    EB_FULL_SCREEN_CLOSE: "ebfullscreenclose",
    EB_FULL_SCREEN_AUTO_CLOSE: "ebfullscreenautoclose",
    EB_VIDEO_FS_OPEN: "ebvideofsopen",
    EB_VIDEO_FS_CLOSE: "ebvideofsclose",
    EB_VIDEO_FS_AUTO_CLOSE: "ebvideofsautoclose",
    EB_START_VIDEO: "ebtstartvideo",
    EB_STOP_VIDEO: "ebtstopvideo",
    EB_UPDATE_VIDEO_DURATION: "ebtupdatevideoduration",
    EB_GET_JS_VAR: "ebgetjsvar",
    EB_GET_ALL_JS_VARS: "ebgetalljsvars",
    EB_SET_JS_VAR: "ebsetjsvar",
    EB_INIT_SE: "ebinitse",
    EB_SET_SE_PROXY: "ebsetseproxy",
    EB_SE_EXPAND_STARTED: "ebseexpandstarted",
    EB_SE_RETRACT_STARTED: "ebseretractstarted",
    EB_SE_RETRACT_FINISHED: "ebseretractfinished",
    EB_NOTIFICATION: "notification",
    EB_VIDEO_ACTIVE_MODE: "ebvideoactivemode"
};
EBG.ActionType = {
    USER: "user",
    AUTO: "auto"
};
EBG.ExpBaseInteractions = {
    PANELS_VIEWED: "ebPanelsViewed",
    AUTO_SHOW: "autoshow",
    DURATION: "duration"
};
EBG.SingleExpInteractions = EBG.ExpBaseInteractions;
EBG.orientation = {
    Both: "BOTH",
    Landscape: "LANDSCAPE",
    Portrait: "PORTAIT"
};
EBG.adTypes = {
    RichBannerHtml5: "Html5Banner",
    PoliteBannerHtml5: "Html5PoliteBanner",
    SEBannerHtml5: "Html5SEBanner",
    ExpBannerHtml5: "Html5ExpBanner",
    DynamicExpBannerHtml5: "Html5DynamicExpBanner",
    StdBanner: "StdBanner",
    Banner: "Banner",
    SingleExpBanner: "SingleExpBanner",
    ExpBanner: "ExpBanner",
    VisibilityAd: "Visibility",
    FloatingAd: "FloatingAd",
    FloatingAdWithRem: "FloatingAdWithReminder",
    TrackingAd: "Tracking",
    StdBannerHtml5: "Html5StdBanner",
    WallpaperAd: "WallpaperAd",
    Image: "Image",
    Html5InstreamBanner: "Html5InstreamBanner",
    FourthParty: "4thParty"
};
EBG.adParts = {
    BANNER: "banner",
    PANEL: "panel",
    DEFAULTBANNER: "defaultBanner",
    RICHBANNER: "richBanner"
};
EBG.WindowTarget = {
    BLANK: "_blank",
    SELF: "_self",
    PARENT: "_parent",
    TOP: "_top"
};
EBG.Const = {
    OUTER_DIV: "eyeDiv",
    DATACAPTURE: "/BurstingPipe/BurstingDataCapturePipe.asp",
    AKAMAIFCS_PLUID_9: "rtmp://flv.stream.atwola.com/flash/flv/mm",
    AKAMAIFCS_PLUID_43: "rtmp://eyeblaster.fcod.msecnd.net/vod/a10061/e1",
    AKAMAIFCS_PLUID_42_45: "rtmp://cp57388.edgefcs.net/ondemand",
    AKAMAI_DEFAULT: "rtmp://cp16207.edgefcs.net/ondemand",
    SHOW_HIDE_FLAG: "data-ebhidingoverlappingelement",
    SHOW_HIDE_BACKUP: "data-ebvisibilitybackup"
};
EBG.PanelPositionType = {
    PAGE_RELATIVE_PERCENTAGE: 0,
    BANNER_RELATIVE_PIXELS: 1,
    PAGE_RELATIVE_PIXELS: 2,
    VIEWPORT_RELATIVE_PERCENTAGE: 3,
    VIEWPORT_RELATIVE_PIXELS: 4
};
EBG.PanelCorner = {
    TOP_LEFT: 1,
    TOP_RIGHT: 2,
    BOTTOM_LEFT: 3,
    BOTTOM_RIGHT: 4
};
EBG.AnimationType = {
    NONE: "none",
    LINEAR: "linear",
    EASE_OUT: "easeout",
    EASE_OUT_SNAP: "easeoutsnap"
};
EBG.ExpandCollapseMethod = {
    CLIP: "clip",
    RESIZE: "resize"
};
EBG.AnimationDefaults = {
    easeOutCoefficient: 0.1,
    stepTime: 10,
    linearSteps: 50,
    snapThreshold: 10,
    animationType: EBG.AnimationType.NONE,
    snap: !1,
    checkShowHideOnEachStep: !1,
    hideAssetAfterExpand: !1,
    removeAssetAfterExpand: !1,
    hideAssetAfterCollapse: !0,
    removeAssetAfterCollapse: !0,
    method: EBG.ExpandCollapseMethod.ExpBanner,
    endAnimationHideAsset: !1,
    endAnimationRemoveAsset: !1
};
EBG.AnimationPushDownDefaults = {
    easeOutCoefficient: 0.1,
    stepTime: 50,
    linearSteps: 20,
    snapThreshold: 10,
    animationType: EBG.AnimationType.LINEAR,
    snap: !1,
    method: EBG.ExpandCollapseMethod.RESIZE,
    checkShowHideOnEachStep: !1,
    hideAssetAfterExpand: !1,
    removeAssetAfterExpand: !1,
    hideAssetAfterCollapse: !0,
    removeAssetAfterCollapse: !0,
    method: EBG.ExpandCollapseMethod.ExpBanner,
    endAnimationHideAsset: !1,
    endAnimationRemoveAsset: !1
};
EBG.AnimProps = {
    easeOutCoefficient: "easeOutCoefficient",
    snapThreshold: "snapThreshold",
    method: "method",
    endAnimationHideAsset: "endAnimationHideAsset",
    endAnimationRemoveAsset: "endAnimationRemoveAsset"
};
EBG.AnimDefaultProps = {
    stepTime: "stepTime",
    linearSteps: "linearSteps",
    animationType: "animationType"
};
EBG.AnimNonDefaultPanelValues = {
    animationType: EBG.AnimationType.NONE,
    stepTime: 0,
    linearSteps: 1
};
EBG.AnimExpansionProps = {
    hideAssetAfterExpand: "hideAssetAfterExpand",
    removeAssetAfterExpand: "removeAssetAfterExpand"
};
EBG.AnimCollapseProps = {
    hideAssetAfterCollapse: "hideAssetAfterCollapse",
    removeAssetAfterCollapse: "removeAssetAfterCollapse"
};
EBG.ProtectedElementIds = ["ebAd", "eyeDiv", "ebDefault", "ebRich", "ebDiv"];
EBG.VisibilityMode = {
    DEFAULT_MODE: "defaultMode",
    BASIC_MODE: "basicMode",
    ENHANCED_MODE: "enhancedMode"
};
EBG.AcCertProgram = {
    IAB_EU: 0,
    NAI_US: 1
};
EBG.AcIconPosition = {
    TopRight: 0,
    TopLeft: 1,
    BottomRight: 2,
    BottomLeft: 3
};
EBG.PreloadType = {
    DefaultImg: 0,
    PreloadImg: 1,
    DefaultFlash: 2
};
EBG.ThrottleStates = {
    LOAD: "load",
    THROTTLE: "throttle",
    RESUME: "resume",
    PAUSE: "pause",
    POLLED: "polled"
};
EBG.WebEnvironment = {
    BROWSER: 0,
    ANDROID_MOBILE_BROWESR: 1,
    ANDROID_WEB_VIEW: 2,
    IOS_MOBILE_BROWSER: 3,
    IOS_WEB_VIEW: 4,
    OTHER_MOBILE_BROWSER: 5,
    OTHER_WEB_VIEW: 6,
    ANDROID_UNKNOWN: 97,
    IOS_UNKNOWN: 98,
    UNKNOWN: 99
};
EBG.SDK_STATES = EBG.SDK_STATES || {};
EBG.SDK_STATES.API = {
    DEFAULT: "SDKdefault",
    EXPANDED: "SDKexpanded",
    LOADING: "SDKloading",
    RESIZED: "SDKresized"
};
EBG.SDK_EVENTS = EBG.SDK_EVENTS || {};
EBG.SDK_EVENTS.API = {
    STATE_CHANGE: "SDKstateChange",
    ERROR: "SDKerror",
    READY: "SDKready",
    VIEWABLE_CHANGE: "SDKviewableChange",
    SIZE_CHANGE: "SDKsizeChange",
    RESIZE_PROPS_CHANGE: "SDKresizePropsChange",
    EXPAND_PROPS_CHANGE: "SDKexpandPropsChange",
    WINDOW_SIZE_CHANGE: "windowSizeChange"
};
EBG.declareNamespace("Adaptors");
EBG.Adaptors.TagNames = {
    DIV: "div",
    IFRAME: "iframe",
    IMG: "img",
    SCRIPT: "script",
    OBJECT: "object",
    EMBED: "embed",
    SPAN: "span",
    A: "a",
    BODY: "body"
};
EBG.Adaptors.InjectionMethod = EBG.API.InjectionMethod;
EBG.Adaptors.WindowProp = {
    top: "top",
    left: "left",
    location: "location",
    menubar: "menubar",
    width: "width",
    height: "height"
};
EBG.Adaptors.MoreSupportedEvent = {
    visibilitychange: 1,
    mozvisibilitychange: 1,
    msvisibilitychange: 1,
    webkitvisibilitychange: 1
};
EBG.Adaptors.StdWebAdaptor = function() {
    this._setEvents()
};
EBG.Adaptors.StdWebAdaptor._walkUpIframes = function(a, b, c, d) {
    var c = c || window,
        e = c.location.origin || c.location.protocol + "//" + c.location.host,
        g = c,
        f = !1,
        h = "",
        d = !!d;
    try {
        if (c.location.ancestorOrigins) {
            a && a.call(g);
            for (h = 0; h < c.location.ancestorOrigins.length; h++) {
                0 == h && "null" == e && (e = c.location.ancestorOrigins[0]);
                g = g.parent;
                f = !1;
                if (c.location.ancestorOrigins[h] == e) try {
                    f = !0
                } catch (i) {
                    f = !1
                }
                if (f) a && a.call(g);
                else {
                    try {
                        b && b.call(g)
                    } catch (j) {}
                    if (!d) break
                }
            }
        } else
            for (a && a.call(g); g !== g.parent;) {
                g = g.parent;
                h = null;
                try {
                    if (h =
                        g.location.origin || g.location.protocol + "//" + g.location.host, "null" == e || "about://" == e) e = h
                } catch (k) {}
                if (h === e) a && a.call(g);
                else {
                    try {
                        b && b.call(g)
                    } catch (l) {}
                    if (!d) break
                }
            }
    } catch (m) {}
};
EBG.Adaptors.StdWebAdaptor._getTopAccessibleWindow = function(a) {
    var b = window;
    EBG.Adaptors.StdWebAdaptor._walkUpIframes(function() {
        b = this
    }, null, window, !("boolean" == typeof a ? a : 1));
    return b
};
EBG.Adaptors.StdWebAdaptor.onEnvEvent = function() {
    EBG.adaptor._handleEvent.apply(EBG.adaptor, arguments)
};
EBG.Adaptors.StdWebAdaptor.prototype = {
    _environmentEvents: {},
    _logicalEvents: {},
    _subscribedEvents: {},
    _subscribedEventsOnElement: [],
    _listener: null,
    _listenerBinding: null,
    _loadedModules: {},
    walkUpIframes: EBG.Adaptors.StdWebAdaptor._walkUpIframes,
    getTopAccessibleWindow: EBG.Adaptors.StdWebAdaptor._getTopAccessibleWindow,
    initInnerModules: function(a, b, c, d, e) {
        if (!this.browser) this.browser = new EBG.Adaptors.Browser(a, b, c, d, e);
        if (!this.flash) this.flash = EBG.Adaptors.FlashDetector ? new EBG.Adaptors.FlashDetector :
            null
    },
    registerSpecialBrowserEvents: function() {},
    loadModule: function(a, b, c, d) {
        if (!a || !b || !b.modulesDir) return !1;
        var e = this,
            b = 0 == a.indexOf("http") ? a : b.modulesDir + a + ".js",
            a = a.toLowerCase(),
            g = new EBG.Events.Event(EBG.Events.EventNames.MODULE_LOAD);
        g.dispatcher = this;
        g.eventData = {
            name: a
        };
        g.timing = EBG.Events.EventTiming.BEFORE;
        if (!EBG.eventMgr.dispatchEvent(g)) {
            if (this._loadedModules[a]) c && this._loadedModules[a].callback.push({
                func: c,
                binding: d || window
            });
            else {
                this._loadedModules[a] = {
                    loading: !0,
                    loaded: !1,
                    scriptWin: window,
                    callback: c ? [{
                        func: c,
                        binding: d || window
                    }] : []
                };
                var f = document.createElement("script");
                f.type = "text/javascript";
                f.async = !0;
                f.readyState ? f.onreadystatechange = function() {
                    if ("loaded" === f.readyState || "complete" === f.readyState) f.onreadystatechange = null, e._handleModuleLoaded(a)
                } : f.onload = function() {
                    e._handleModuleLoaded(a)
                };
                f.src = b;
                (EBG.getBigScript().parentElement || document.getElementsByTagName("html")[0]).appendChild(f);
                EBG.scripts = EBG.scripts || [];
                EBG.scripts.push(f)
            }
            this._loadedModules[a].loaded &&
                EBG.runTimed(this, function() {
                    this._handleModuleLoaded(a)
                }, [], 0)
        }
    },
    _handleModuleLoaded: function(a) {
        var b = this._loadedModules[a];
        b.loading = !1;
        b.loaded = !0;
        var c = new EBG.Events.Event(EBG.Events.EventNames.MODULE_LOAD);
        c.dispatcher = this;
        c.eventData = {
            name: a
        };
        c.timing = EBG.Events.EventTiming.ONTIME;
        if (!EBG.eventMgr.dispatchEvent(c)) {
            for (var a = b.callback.length, d = 0; d < a; d++) {
                var e = b.callback.shift();
                e.func.apply(e.binding, [b.scriptWin])
            }
            c.timing = EBG.Events.EventTiming.AFTER;
            EBG.eventMgr.dispatchEvent(c)
        }
    },
    copy: function(a) {
        for (var b in this._subscribedEvents) this._subscribedEvents.hasOwnProperty(b) && (this._removeEventListener(window, this._environmentEvents[b].name, EBG.Adaptors.StdWebAdaptor.onEnvEvent), a.subscribeToEvent(b));
        for (b = 0; b < this._subscribedEventsOnElement.length; b++) {
            var c = this._subscribedEventsOnElement[b];
            if (c) {
                var d = c.elementId,
                    e = c.eventName,
                    c = c.callback,
                    g = this.getElementById(d);
                g && (this._removeEventListener(g, e, c), a.subscribeToEventOnElement(e, d, c))
            }
        }
        a.flash = this.flash || null
    },
    intMonitorExist: function() {
        return EBG.isPreview &&
            (top.ebHandleFsCommandsPrev || top.ebHandleEventMonitor)
    },
    notifyIntMonitor: function(a) {
        top.ebHandleFsCommandsPrev && top.ebHandleFsCommandsPrev(a.command, a.args, a.objName, a.adId, a.elapsedTime);
        top.ebHandleEventMonitor && top.ebHandleEventMonitor({
            name: a.command,
            args: a.args,
            objName: a.objName,
            adId: a.adId,
            elapsedTime: a.elapsedTime
        })
    },
    hasEvent: function(a) {
        return !!this._environmentEvents[a]
    },
    generateElementId: function(a, b) {
        return EBG.format("eb{0}_{1}", a, b)
    },
    _getTags: function(a, b) {
        EBG.isGlobalDef("JSON");
        var c =
            "";
        if (b && a.tagName == EBG.Adaptors.TagNames.SCRIPT && a.text && !a.attributes) b.push(a);
        else {
            c = "";
            a.attributes && (this._setObjDefaultAttributes(a), c = this._getObjAttributesStr(a));
            c = EBG.format("<{0} {1}>", a.tagName, c);
            a.innerHTML && (c += a.innerHTML);
            a.text && (c += a.text);
            a.params && (c += this._getObjParamsStr(a));
            if (a.children)
                for (var d = 0; d < a.children.length; d++) c += this._getTags(a.children[d], b);
            c += EBG.format("</{0}>", a.tagName)
        }
        return c
    },
    writeReportingIFrame: function(a, b, c) {
        this.inject({
            tagName: EBG.Adaptors.TagNames.IFRAME,
            attributes: {
                id: a,
                src: b,
                style: {
                    width: "0px",
                    height: "0px"
                },
                frameborder: 0
            }
        }, EBG.Adaptors.InjectionMethod.APPEND, this.getElementById(c))
    },
    writeScript: function(a, b, c) {
        try {
            this.inject({
                tagName: EBG.Adaptors.TagNames.SCRIPT,
                attributes: {
                    id: a,
                    name: a,
                    src: b
                }
            }, EBG.Adaptors.InjectionMethod.APPEND, this.getElementById(c))
        } catch (d) {}
    },
    inject: function(a, b, c) {
        if (c && a) {
            var d = c.ownerDocument,
                e = !1;
            if (EBG.isElementOrNode(a)) d = a, e = !0;
            else if (d = d.createElement(a.tagName), a.attributes) {
                this._setObjDefaultAttributes(a);
                for (var g in a.attributes) EBG.isObj(a.attributes[g]) ?
                    this.setStyleToElem(d, a.attributes[g]) : d.setAttribute(g, a.attributes[g])
            }
            switch (b) {
                case EBG.Adaptors.InjectionMethod.INSERT_BEFORE:
                    c.parentNode.insertBefore(d, c);
                    break;
                case EBG.Adaptors.InjectionMethod.INSERT_AFTER:
                    c.nextSibling ? c.parentNode.insertBefore(d, c.nextSibling) : c.parentNode.appendChild(d);
                    break;
                case EBG.Adaptors.InjectionMethod.FIRST_CHILD:
                    c.firstChild ? c.insertBefore(d, c.firstChild) : c.appendChild(d);
                    break;
                default:
                    c.appendChild(d)
            }
            if (e) return d;
            e = "";
            if (a.innerHTML) e = a.innerHTML;
            g = [];
            if (a.children)
                for (var f =
                        0; f < a.children.length; f++) {
                    var h = a.children[f],
                        e = e + EBG.adaptor._getTags(h, g);
                    h.meta && !0 == h.meta.isChromePowerSaver && this._resizeAfterPaint(h.attributes.id, h.meta.origWidth, h.meta.origHeight)
                }
            if (e) d.innerHTML = e;
            if (a.text) d.text = a.text;
            for (f = 0; f < g.length; f++) this.inject(g[f], b, c);
            return d
        }
    },
    addInlineDOM: function(a, b) {
        this.inject(a, EBG.Adaptors.InjectionMethod.APPEND, this.getElementById(b))
    },
    setInnerHtml: function(a, b) {
        if (a) a.innerHTML = b
    },
    setStyleToElem: function(a, b, c) {
        if (a && "object" === typeof b)
            if (c)
                for (var d in b) {
                    if (b.hasOwnProperty(d))
                        if (void 0 ===
                            a.style[d])
                            for (var c = ["Webkit", "Moz", "ms", "O"], e = window.getComputedStyle ? window.getComputedStyle(a, null) : a.style, g = 0; g < c.length; g++) {
                                var f = c[g] + EBG.capitalize(d);
                                if (void 0 !== e[f]) {
                                    a.style[f] = b[d];
                                    break
                                }
                            } else a.style[d] = b[d]
                } else
                    for (d in b) b.hasOwnProperty(d) && (a.style[d] = b[d])
    },
    getStyleOfElem: function(a) {
        if (a) return a.style
    },
    setListener: function(a, b) {
        this._listener = a;
        this._listenerBinding = b
    },
    hasHiddenParent: function(a) {
        if (!a) return !1;
        for (var b = "none" == window.getComputedStyle(a).display;
            (a = a.parentElement) &&
            !(b = "none" == window.getComputedStyle(a).display););
        return b
    },
    subscribeToEvent: function(a, b) {
        var c = this.getDisplayWin(),
            d = this.getPageWin();
        if (this.hasEvent(a) && !this._subscribedEvents[a]) {
            var e = this._environmentEvents[a],
                g = e.inCurWin ? window : this.getPageWin();
            if (b) g = g.document;
            this._logicalEvents[e.name].signInAllWindows && this.serving && this.serving.detectServingMode(!0) === EBG.Adaptors.ServingMode.FRIENDLY_IFRAME && c !== d ? (this._addEventListener(d, e.name, EBG.Adaptors.StdWebAdaptor.onEnvEvent), this._addEventListener(c,
                e.name, EBG.Adaptors.StdWebAdaptor.onEnvEvent)) : this._addEventListener(g, e.name, EBG.Adaptors.StdWebAdaptor.onEnvEvent);
            this._subscribedEvents[a] = {}
        }
    },
    subscribeToEventOnElement: function(a, b, c) {
        var d = !1,
            e = "string" == typeof b ? this.getElementById(b, this.getDisplayWin()) : b;
        e || (d = !0);
        for (var g = this._subscribedEventsOnElement.length, f = 0; f < g; f++)
            if (this._subscribedEventsOnElement[f] && this._subscribedEventsOnElement[f].elementId == b && this._subscribedEventsOnElement[f].eventName == a) {
                d = !0;
                break
            }
        d || (this._addEventListener(e,
            a, c), this._subscribedEventsOnElement[g] = {
            elementId: b,
            eventName: a,
            callback: c
        })
    },
    unsubscribeFromEventOnElement: function(a, b, c) {
        var d = "string" == typeof b ? this.getDisplayWin().document.getElementById(b) : b;
        if (d) {
            for (var e = this._subscribedEventsOnElement.length, g = -1, f = 0; f < e; f++)
                if (this._subscribedEventsOnElement[f] && this._subscribedEventsOnElement[f].elementId == b && this._subscribedEventsOnElement[f].eventName == a && this._subscribedEventsOnElement[f].callback == c) {
                    g = f;
                    break
                }
            0 <= f && (this._removeEventListener(d,
                a, c), this._subscribedEventsOnElement[g] = null)
        }
    },
    _addEventListener: function(a, b, c) {
        "load" == b && this.isPageLoaded() ? setTimeout(function() {
            c({
                type: "load"
            })
        }, 5) : window.addEventListener ? a.addEventListener(b, c, !1) : window.attachEvent && a.attachEvent("on" + b, c)
    },
    _removeEventListener: function(a, b, c) {
        window.removeEventListener ? a.removeEventListener(b, c, !1) : window.detachEvent && a.detachEvent("on" + b, c)
    },
    _checkIfPropExist: function(a, b) {
        return a && 0 <= a ? EBG.format(", {0}={1}", b, a) : ""
    },
    openPage: function(a, b) {
        var c = EBG.WindowTarget.BLANK,
            d = "",
            e = null;
        if (b && (c = b.target, b.xPos || b.yPos || b.width || b.height)) d = "titlebar=1,resizable=1,scrollbars=1,directories=0,toolbar=1,status=1" + this._checkIfPropExist(b.yPos, EBG.Adaptors.WindowProp.top), d += this._checkIfPropExist(b.xPos, EBG.Adaptors.WindowProp.left), d += this._checkIfPropExist(b.showAddressBar, EBG.Adaptors.WindowProp.location), d += this._checkIfPropExist(b.showMenuBar, EBG.Adaptors.WindowProp.menubar), d += this._checkIfPropExist(b.width, EBG.Adaptors.WindowProp.width), d += this._checkIfPropExist(b.height,
            EBG.Adaptors.WindowProp.height);
        e = window.open(a, c, d);
        if (!e && (c = document.createElement("a"), d = ((d = EBG && EBG.getBigScript ? EBG.getBigScript() : null) ? d.parentElement : null) || document.body)) c.setAttribute("id", "SZMK_BRD_Anchortag"), c.setAttribute("href", a), c.setAttribute("target", "_blank"), d.appendChild(c), c.click(), d.removeChild(c);
        return e
    },
    reportBeacon: function(a) {
        navigator && EBG.isFunc(navigator.sendBeacon) && navigator.sendBeacon(a)
    },
    reportToRemoteServerUsingImage: function() {
        var a = [];
        return function(b) {
            for (var c =
                    0; c < a.length; c++)
                if (a[c] === b) return;
            this.ReportingImg = new Image;
            this.ReportingImg.src = b;
            a.push(b)
        }
    }(),
    getDataFromRemoteServer: function(a, b, c, d, e) {
        return EBG.getDataFromRemoteServer(a, b, c, d, e)
    },
    reportToRemoteServer: function(a, b, c, d) {
        if (a && !EBG.isOfflineDemo) {
            var b = !!b,
                d = d || this.getRequestMethod(a),
                e;
            "POST" == d && (e = a.split("?"), a = e[0], e = e[1]);
            var g = !1;
            try {
                if (this.browser.isSafari() && "POST" == d) {
                    var f = document.createElement("iframe");
                    f.style.display = "none";
                    f.style.width = "0px";
                    f.style.height = "0px";
                    document.body.appendChild(f);
                    f = f.contentWindow ? f.contentWindow : f.contentDocument.document ? f.contentDocument.document : f.contentDocument;
                    f.document.open();
                    f.document.write(this.getIframeFormScript(a, e));
                    f.document.close();
                    g = !0
                } else if (EBG._isXMLHttpRequestSupported()) {
                    var h = new XMLHttpRequest;
                    h.open(d, a, b);
                    h.setRequestHeader("Content-type", "text/plain");
                    if (b || !b && !this.browser.isFF()) h.withCredentials = !0;
                    try {
                        h.send(e)
                    } catch (i) {
                        if (b) throw i;
                    }
                    g = !0
                } else if (window.XDomainRequest && !c && b) {
                    var j = new XDomainRequest;
                    j.open(d, a);
                    j.send(e);
                    g = !0
                }
            } catch (k) {
                g = !1
            }
            g || this.reportToRemoteServerUsingImage(a)
        }
    },
    getIframeFormScript: function(a, b) {
        return '<script>var e=document.createElement("form"),t="' + b + '".split("&");e.setAttribute("method","post"),e.setAttribute("action","' + a + '");for(var i=0;i<t.length;++i){var a=t[i].substr(0,t[i].indexOf("=")),r=t[i].substr(t[i].indexOf("=")+1),m=document.createElement("input");m.setAttribute("type","hidden"),m.setAttribute("name",a),m.setAttribute("value",r),e.appendChild(m)}e.submit();<\/script>'
    },
    getElementById: function(a,
        b) {
        var c = null,
            b = b ? b : this.getDisplayWin();
        if (EBG.isDefinedNotNull(a) && (c = b.document.getElementById(a), !c))
            for (var d = this.findAllShadowRoots(b), e = 0; e < d.length && !(c = d[e].querySelector("#" + a)); e++);
        return c
    },
    findAllShadowRoots: function(a) {
        function b(a) {
            for (var a = a.querySelectorAll("*"), e = 0; e < a.length; e++)
                if (a[e].shadowRoot) {
                    var g = a[e].shadowRoot;
                    c.includes(g) || (c.push(g), b(g))
                }
        }
        var c = [];
        a && a.document && a.document.body && "function" == typeof a.document.body.attachShadow && b(a.document);
        return c
    },
    supportsPageLoadEvents: function() {
        return !(this.browser.isOpera() &&
            14 > this.browser.getVersion()) && !(this.browser.isIE() && 7 > this.browser.getVersion()) && !EBG.isMRAID()
    },
    getHostName: function(a) {
        return (a ? a : this.getDisplayWin()).location.hostname
    },
    getDomain: function(a) {
        return (a ? a : this.getDisplayWin()).document.domain
    },
    getDisplayWin: function() {
        return window
    },
    getPageWin: function() {
        return window
    },
    getResolution: function() {
        var a = 0;
        switch (window.screen.width) {
            case 640:
                a = 1;
                break;
            case 800:
                a = 2;
                break;
            case 1024:
                a = 4;
                break;
            case 1152:
                a = 8;
                break;
            case 1280:
                a = 16;
                break;
            case 1600:
                a = 32;
                break;
            case 1400:
                a = 64;
                break;
            case 1920:
                a = 128;
                break;
            case 1680:
                a = 256;
                break;
            case 1366:
                a = 512;
                break;
            case 1440:
                a = 1024;
                break;
            case 1360:
                a = 2048;
                break;
            case 768:
                a = 4096;
                break;
            case 1093:
                a = 8192;
                break;
            case 960:
                a = 16384;
                break;
            case 2560:
                a = 32768
        }
        return a
    },
    inInnerIframe: function() {
        return !1
    },
    inPlacementIframe: function() {
        return !1
    },
    _setEvents: function() {
        this.supportsPageLoadEvents && (this._setEvent(EBG.Events.EventNames.PAGE_LOAD, "load"), this._setEvent(EBG.Events.EventNames.PAGE_UNLOAD, "unload", !0), this._setEvent(EBG.Events.EventNames.PAGE_BEFORE_UNLOAD,
            "beforeunload", !0), this._setEvent(EBG.Events.EventNames.PAGE_HIDE, "pagehide", !0));
        this._setEvent(EBG.Events.EventNames.PAGE_RESIZE, "resize");
        this._setEvent(EBG.Events.EventNames.SCREEN_ORIENTATION, "orientationchange");
        this._setEvent(EBG.Events.EventNames.MOUSE_MOVE, "mousemove", !1, ["clientX", "clientY", "pageX", "pageY", "view"], !0)
    },
    _setEvent: function(a, b, c, d, e) {
        this._environmentEvents[a] = {
            name: b,
            inCurWin: c ? c : !1
        };
        this._logicalEvents[b] = {
            name: a,
            signInAllWindows: e
        };
        if (d) {
            this._logicalEvents[b].attr = [];
            for (a = 0; a < d.length; a++) this._logicalEvents[b].attr[a] = d[a]
        }
    },
    isPageLoaded: function() {
        if (this._isPageLoaded) return !0;
        this._isPageLoaded = EBGInfra.isDefined(window.gEBMainWindow) && EBGInfra.isDefined(gEBMainWindow.EBP) && gEBMainWindow.EBP.isPageLoaded;
        if (!this._isPageLoaded && this.getPageWin().document.readyState) this._isPageLoaded = "complete" == this.getPageWin().document.readyState;
        return EBG.adaptor._isPageLoaded
    },
    _handleEvent: function(a) {
        var b = this._logicalEvents[a.type].name;
        switch (b) {
            case EBG.Events.EventNames.PAGE_LOAD:
                this._isPageLoaded = !0;
                break;
            case EBG.Events.EventNames.PAGE_RESIZE:
                EBG.adaptor.inInnerIframe() && this.serving.rehidePlacementIframe();
                break;
            case EBG.Events.EventNames.SCREEN_ORIENTATION:
                this._handleOrientationEvent();
                return;
            case EBG.Events.EventNames.DEVICE_MOTION:
                this._handleDeviceMotionEvent(a);
                return;
            case EBG.Events.EventNames.DEVICE_ORIENTATION:
                this._handleDeviceOrientationEvent(a);
                return;
            case EBG.Events.EventNames.PAGE_BEFORE_UNLOAD:
                if (this.browser.isIE() && this._isPageLoaded) return
        }
        if (b) {
            var c = new EBG.Events.Event(b);
            EBGInfra.isDefinedNotNull(this._logicalEvents[a.type].attr) && this._prepareLogicalEventData(c, a, this._logicalEvents[a.type].attr);
            EBG.isFunc(this._listener) && this._listener.call(this._listenerBinding, c)
        }
        b == EBG.Events.EventNames.PAGE_UNLOAD && this.dispose()
    },
    dispose: function() {
        for (var a in this._subscribedEvents)
            if (this._subscribedEvents.hasOwnProperty(a)) {
                var b = this._environmentEvents[a].name,
                    c = this._environmentEvents[a].inCurWin ? window : this.getPageWin();
                this._removeEventListener(c, b, EBG.Adaptors.StdWebAdaptor.onEnvEvent);
                this._logicalEvents[b].signInAllWindows && (c = c == this.getPageWin() ? this.getDisplayWin() : this.getPageWin(), this._removeEventListener(c, b, EBG.Adaptors.StdWebAdaptor.onEnvEvent))
            }
        try {
            EBG.adaptor._removeEventListener(EBG.adaptor.getPageWin(), "focus", EBG.adaptor._updateFocused), 10 > EBG.adaptor.browser.getVersion() && EBG.adaptor._removeEventListener(EBG.adaptor.getPageWin().document, "focusin", EBG.adaptor._updateFocused)
        } catch (d) {}
        this._removeEventListener(this.getDisplayWin(), "resize", EBG.adaptor.updateScrollBarWidth)
    },
    _handleOrientationEvent: function() {},
    _handleDeviceMotionEvent: function() {},
    _handleDeviceOrientationEvent: function() {},
    _prepareLogicalEventData: function(a, b, c) {
        try {
            a.eventData = {};
            for (var d = 0; d < c.length; d++) a.eventData[c[d]] = b[c[d]]
        } catch (e) {}
    },
    _getDefaultAttributes: function(a) {
        var b = {};
        switch (a.toLowerCase()) {
            case EBG.Adaptors.TagNames.IFRAME:
                if (b = {
                        marginheight: "0px",
                        marginwidth: "0px",
                        frameborder: "0",
                        scrolling: "no"
                    }, this.browser.isChrome()) b.allow = "autoplay"
        }
        return b
    },
    _getDefaultStyle: function(a) {
        var b = {
            border: "0px",
            padding: "0px",
            margin: "0px"
        };
        switch (a.toLowerCase()) {
            case EBG.Adaptors.TagNames.DIV:
                EBG.mergeObj({
                    top: "0px",
                    left: "0px",
                    overflow: "visible",
                    fontSize: "0px",
                    lineHeight: "0px",
                    textAlign: "left"
                }, b, !0)
        }
        return b
    },
    _setObjDefaultAttributes: function(a) {
        var b = this._getDefaultAttributes(a.tagName);
        EBG.mergeObj(a.attributes, b, !0);
        b.style = this._getDefaultStyle(a.tagName);
        a.attributes.style && EBG.mergeObj(a.attributes.style, b.style, !0);
        a.attributes = b
    },
    _getObjParamsStr: function(a) {
        var a = a.params,
            b = "",
            c;
        for (c in a) a.hasOwnProperty(c) && (b += EBG.format("<PARAM name='{0}' value='{1}'>", c, a[c]));
        return b
    },
    _getObjAttributesStr: function(a) {
        var a = a.attributes,
            b = "",
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (EBG.isObj(d)) {
                    var e = d,
                        d = "",
                        g;
                    for (g in e)
                        if (e.hasOwnProperty(g)) {
                            var f = e[g];
                            "textAlign" == g && (g = "text-align");
                            d += EBG.format("{0}:{1}; ", g, f)
                        }
                }
                if (d) try {
                    d = d.toString().replace(/\"/ig, "&quot;"), b += EBG.format(' {0}="{1}"', c, d)
                } catch (h) {}
            }
        return b
    },
    _resizeAfterPaint: function(a, b, c) {
        b && c && EBG.runTimed(this,
            function() {
                var d = this.getElementById(a);
                this.setElemStyle(d, "width", b);
                this.setElemStyle(d, "height", c)
            }, [], 50)
    },
    handleEvent: function(a) {
        this._handleEvent(a)
    },
    setElemStyle: function(a, b, c) {
        a && b && c && (a.style[b] = c)
    },
    getPositioningById: function(a, b, c) {
        return this.getPositioningByElement(this.getElementById(a), b, c)
    },
    getPositioningByElement: function(a, b, c) {
        a = a && a.getBoundingClientRect ? a.getBoundingClientRect() : null;
        if (!a) return null;
        b = this.getScrollLeftTop(b, c);
        return {
            X: Math.floor(a.left) + b.X,
            Y: Math.floor(a.top) +
                b.Y
        }
    },
    getScrollLeftTop: function(a, b) {
        var c = this._getCurrentWindow(a, b),
            d = c.document,
            e = {
                X: {
                    "0": "XOffset",
                    1: "Left"
                },
                Y: {
                    "0": "YOffset",
                    1: "Top"
                }
            },
            g;
        for (g in e) e[g] = c["page" + e[g][0]] || (d.documentElement ? d.documentElement["scroll" + e[g][1]] : d.documentElement["page" + e[g][0]]) || (d.body ? d.body["scroll" + e[g][1]] : 0);
        return e
    },
    _getCurrentWindow: function(a) {
        try {
            return a ? this.getDisplayWin() : top
        } catch (b) {}
    },
    getRequestMethod: function(a) {
        return this.browser.isIE() && 6 == this.browser.getVersion() || this.isInApp() ? "GET" :
            2E3 < a.length ? "POST" : "GET"
    },
    removeElement: function(a) {
        var b;
        "string" == EBG.typeOf(a) ? b = this.getElementById(a) : EBG.isElementOrNode(a) && (b = a);
        b && (b.parentNode.removeChild(b), b.removeNode && b.removeNode(!0))
    },
    getBrowserLanguage: function() {
        var a = "en-US";
        if ("undefined" !== typeof navigator.language) a = navigator.language;
        else if ("undefined" !== typeof navigator.userLanguage) a = navigator.userLanguage;
        return a
    },
    appendChildElement: function(a, b) {
        a && b && this.getElementById(a).appendChild(b)
    },
    getMaxZIndex: function(a) {
        if (this.browser.isIE() &&
            8 > this.browser.getVersion()) return 10001;
        var b = 0;
        if (a) {
            var c = this.getStyleOfElem(a);
            c && c.zIndex && (b = c.zIndex);
            for (var d in a.childNodes) d && a.childNodes[d] && (c = this.getMaxZIndex(a.childNodes[d]), b = b > c ? b : c)
        }
        return b
    },
    isSafeFrame: function() {
        return !(!window.$sf || !$sf.ext)
    },
    isInApp: function() {
        return !!window.mraid
    },
    isSkype: function() {
        try {
            return !!(window.$WLXRmAd || !window.location.ancestorOrigins && window.parent && window.parent.$WLXRmAd)
        } catch (a) {
            return !1
        }
    },
    isAMP: function() {
        var a = !1;
        doIfAccessible = function() {
            a =
                a || !(!this.context || !this.context.reportRenderedEntityIdentifier)
        };
        this.walkUpIframes(doIfAccessible);
        return a
    },
    isReady: function() {
        return !0
    },
    hasLayoutViewport: function() {
        return document.documentElement.clientWidth > window.innerWidth
    },
    getBoundingClientRect: function(a, b) {
        if (!a || a.id && !this.getElementById(a.id)) return null;
        var b = b || {},
            c = a.getBoundingClientRect(),
            c = {
                width: Math.round(c.width),
                height: Math.round(c.height),
                top: Math.round(c.top),
                left: Math.round(c.left),
                bottom: Math.round(c.bottom),
                right: Math.round(c.right)
            };
        c.width = EBG.isNumber(c.width) ? c.width : c.right - c.left;
        c.height = EBG.isNumber(c.height) ? c.height : c.bottom - c.top;
        this.browser.isAndroid() && this.hasLayoutViewport() && (c.top -= window.pageYOffset, c.left -= window.pageXOffset, c.bottom -= window.pageYOffset, c.right -= window.pageXOffset);
        if (b.clip) try {
            var d = /rect\((.*?)px(.*?)px(.*?)px(.*?)px\)/g.exec(this.getComputedStyle(a).getPropertyValue("clip"));
            if (d) {
                for (var e = 1; e < d.length; e++) d[e] = parseFloat(d[e].replace(",", ""));
                if (0 != d[1] + d[2] + d[3] + d[4]) {
                    var g = {
                        top: c.top +
                            d[1],
                        left: c.left + d[4]
                    };
                    g.right = Math.min(g.left + (d[2] - d[4]), c.right);
                    g.bottom = Math.min(g.top + (d[3] - d[1]), c.bottom);
                    g.width = g.right - g.left;
                    g.height = g.bottom - g.top;
                    c = g
                }
            }
        } catch (f) {}
        if (b.relativeToTop) {
            var h = 0,
                i = 0,
                e = this.getElementWindow(a),
                j = 1,
                k = 1;
            EBG.adaptor.walkUpIframes(function() {
                if (this.frameElement) {
                    var a = this.frameElement.getBoundingClientRect();
                    j *= a.width / this.innerWidth;
                    k *= a.height / this.innerHeight;
                    h += a.top;
                    i += a.left
                }
            }, null, e);
            c.top += h;
            c.left += i;
            c.bottom += h;
            c.right += i;
            c.width *= j;
            c.height *= k;
            c.left *= j;
            c.right *= j;
            c.top *= k;
            c.bottom *= k
        }
        b.relativeToWindow && (e = this.getElementWindow(a), d = e.pageXOffset || e.document.documentElement.scrollLeft, e = e.pageYOffset || e.document.documentElement.scrollTop, c.top += e, c.left += d, c.bottom += e, c.right += d);
        return c
    },
    getElementWindow: function(a) {
        if (!a) return null;
        a = a.ownerDocument;
        return a.defaultView || a.parentWindow || window
    },
    getComputedStyle: function() {
        return window.getComputedStyle ? function(a, b) {
            return (this.getElementWindow(a) || window).getComputedStyle(a, b)
        } : function(a) {
            var b = {};
            b.el = a;
            b.getPropertyValue = function(b) {
                var d = /(\-([a-z]){1})/g;
                "float" == b && (b = "styleFloat");
                d.test(b) && (b = b.replace(d, function(a, b, c) {
                    return c.toUpperCase()
                }));
                return a.currentStyle[b] ? a.currentStyle[b] : a.style[b] ? a.style[b] : null
            };
            return b
        }
    }(),
    createImageElement: function(a) {
        var b = document.createElement("img");
        if (!a) return b;
        if (a = a.attributes) {
            var c = a.style;
            c && EBG.mergeObj({
                border: "0px",
                padding: "0px",
                margin: "0px"
            }, c, !0);
            for (var d in a)
                if (a.hasOwnProperty(d))
                    if ("style" == d) {
                        var e = "",
                            g;
                        for (g in c) c.hasOwnProperty(g) &&
                            (e += EBG.format("{0}:{1}; ", g, c[g]));
                        b.style.cssText += e
                    } else b.setAttribute(d, a[d])
        }
        return b
    },
    isPageVisible: function(a) {
        var b = !0;
        if (this.isAMP()) b = EBG.AMPUtil && EBG.AMPUtil._AMPObj;
        else {
            var c = this._getVisibilityEventHidden();
            if ((b = c && document[c] ? !1 : !0) && this.browser.isIE() && (!c || "msHidden" == c) && this.serving.detectServingMode(!0) != EBG.Adaptors.ServingMode.IFRAME) b = b && (this.focused || a)
        }
        return b
    },
    _getVisibilityEventHidden: function() {
        var a = null;
        "undefined" !== typeof document.hidden ? a = "hidden" : "undefined" !==
            typeof document.mozHidden ? a = "mozHidden" : "undefined" !== typeof document.msHidden ? a = "msHidden" : "undefined" !== typeof document.webkitHidden && (a = "webkitHidden");
        return a
    },
    getObjKeys: function(a) {
        a = a || {};
        if (Object.keys) return Object.keys(a);
        var b = [],
            c;
        for (c in a) a.hasOwnProperty(c) && b.push(c);
        return b
    },
    hasParentElement: function(a, b) {
        a = EBG.isElementOrNode(a) ? a : this.getElementById(a);
        for (b = EBG.isElementOrNode(b) ? b : this.getElementById(b); a && a.parentElement;) {
            if (a.parentElement === b) return !0;
            a = a.parentElement
        }
        return !1
    }
};
EBG.declareClass(EBG.Adaptors.StdWebAdaptor, null);
EBG.Adaptors.WebAdaptor = function() {
    EBG.callSuperConstructor(EBG.Adaptors.WebAdaptor, this);
    EBG.adaptor && EBG.adaptor.copy(this)
};
EBG.Adaptors.WebAdaptor.prototype = {
    _previousWidth: -1,
    _previousHeight: -1,
    _screenOrientation: "",
    scrollBarWidth: 0,
    _isReady: !1,
    focused: !1,
    _loadedModules: [],
    _init: function() {
        this._sendReady()
    },
    isReady: function() {
        return this._isReady
    },
    isSDKDefined: function() {
        return !1
    },
    updateScrollBarWidth: function() {
        EBG.adaptor.scrollBarWidth = EBG.adaptor.getScrollerWidth()
    },
    initInnerModules: function(a, b, c, d, e) {
        EBG.callSuperFunction(EBG.Adaptors.WebAdaptor, this, "initInnerModules", [a, b, c, d, e]);
        this.updateScrollBarWidth();
        if (!this.serving) this.serving = EBG.Adaptors.ServingMgr ? new EBG.Adaptors.ServingMgr : null;
        this._addEventListener(this.getDisplayWin(), "resize", EBG.adaptor.updateScrollBarWidth)
    },
    _pageResizeHandler: function() {
        this._handleOrientationEvent()
    },
    _handleOrientationEvent: function() {
        this._checkOrientationEvent();
        EBG.runTimed(this, this._checkOrientationEvent, [], 300)
    },
    _checkOrientationEvent: function() {
        if (this.browser.isMobile() && this._isOrientationChange()) {
            this._setScreenOrientation();
            var a = new EBG.Events.Event(EBG.Events.EventNames.SCREEN_ORIENTATION);
            a.dispatcher = this;
            a.eventData = {
                screenOrientation: this._screenOrientation
            };
            EBG.eventMgr.dispatchEvent(a)
        }
    },
    _handleDeviceMotionEvent: function(a) {
        function b(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        }
        var c = new EBG.Events.Event(EBG.Events.EventNames.DEVICE_MOTION);
        c.dispatcher = this;
        c.eventData = {
            acceleration: b(a.acceleration),
            accelerationIncludingGravity: b(a.accelerationIncludingGravity),
            rotationRate: b(a.rotationRate),
            timeStamp: a.timeStamp
        };
        EBG.eventMgr.dispatchEvent(c)
    },
    _handleDeviceOrientationEvent: function(a) {
        var b =
            new EBG.Events.Event(EBG.Events.EventNames.DEVICE_ORIENTATION);
        b.dispatcher = this;
        b.eventData = {
            absolute: a.absolute,
            alpha: a.alpha,
            beta: a.beta,
            gamma: a.gamma
        };
        EBG.eventMgr.dispatchEvent(b)
    },
    registerSpecialBrowserEvents: function() {
        if (this.browser.isIE()) this._addEventListener(this.getPageWin(), "focus", this._updateFocused), 10 > this.browser.getVersion() && (this._addEventListener(this.getPageWin().document, "focusout", this._updateFocusOut), this._addEventListener(this.getPageWin().document, "focusin", this._updateFocused)),
            this.focused = this.focused || "undefined" != typeof gEBMainWindow && "undefined" != typeof gEBMainWindow.EBP && gEBMainWindow.EBP.focused;
        EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_RESIZE, this._pageResizeHandler, this));
        this._updateInitialOrientationValues()
    },
    _updateInitialOrientationValues: function() {
        this.browser.isMobile() && this._setScreenOrientation(EBG.adaptor.serving._getTopFriendlyIframe(EBG.adaptor.getDisplayWin()))
    },
    _updateFocusOut: function() {
        EBG.runTimed(EBG.adaptor,
            function() {
                if (!(EBG.adaptor.getPageWin().screenTop > -2 * EBG.adaptor.getPageWin().screen.availHeight)) {
                    var a = new EBG.Events.Event(EBG.Events.EventNames.PAGE_HIDDEN);
                    a.dispatcher = EBG.adaptor;
                    EBG.eventMgr.dispatchEvent(a)
                }
            }, [], 50)
    },
    _updateFocused: function() {
        EBG.adaptor.focused = !0;
        var a = new EBG.Events.Event(EBG.Events.EventNames.PAGE_VISIBLE);
        a.dispatcher = EBG.adaptor;
        EBG.eventMgr.dispatchEvent(a);
        try {
            EBG.adaptor._removeEventListener(EBG.adaptor.getPageWin(), "focus", EBG.adaptor._updateFocused), 10 > EBG.adaptor.browser.getVersion() &&
                EBG.adaptor._removeEventListener(EBG.adaptor.getPageWin().document, "focusin", EBG.adaptor._updateFocused)
        } catch (b) {}
    },
    _setEvents: function() {
        EBG.callSuperFunction(EBG.Adaptors.WebAdaptor, this, "_setEvents", []);
        this._setEvent(EBG.Events.EventNames.PAGE_SCROLL, "scroll");
        this._setEvent(EBG.Events.EventNames.PAGE_FOCUS, "focus");
        this._setEvent(EBG.Events.EventNames.PAGE_BLUR, "blur");
        var a = this._getVisibilityEventName();
        "undefined" === typeof document.addEventListener || "undefined" === typeof a || (this._setEvent(EBG.Events.EventNames.PAGE_HIDDEN,
            a, !0), this._setEvent(EBG.Events.EventNames.PAGE_VISIBLE, a, !0));
        this._setEvent(EBG.Events.EventNames.DEVICE_MOTION, "devicemotion", !1, ["acceleration", "accelerationIncludingGravity", "rotationRate", "timeStamp"], !0);
        this._setEvent(EBG.Events.EventNames.DEVICE_ORIENTATION, "deviceorientation", !1, ["absolute", "alpha", "beta", "gamma"], !0)
    },
    initServingMode: function(a, b, c) {
        b = b ? b : !1;
        switch (a) {
            case EBG.Adaptors.ServingMode.INNER_IFRAME:
                this.serving.setServingMode(EBG.Adaptors.ServingMode.INNER_IFRAME);
                break;
            case -1:
                this.serving.detectServingMode(!1);
                break;
            case 0:
                (!EBG.isPreview || EBG.isPreview && EBG.isTestMode) && c == EBG.Adaptors.ServingMode.FRIENDLY_IFRAME && !b ? this.serving.setServingMode(EBG.Adaptors.ServingMode.FRIENDLY_IFRAME) : !EBG.isPreview && c == EBG.Adaptors.ServingMode.IFRAME && !b ? this.serving.setServingMode(EBG.Adaptors.ServingMode.TOPMOST_FRIENDLY_IFRAME) : b && this.serving.setServingMode(EBG.Adaptors.ServingMode.SCRIPT);
                break;
            case 1:
            case 2:
                this.serving.setServingMode(EBG.Adaptors.ServingMode.IFRAME)
        }
    },
    addPlaceHolder: function(a) {
        this.inInnerIframe() &&
            (this.inject(a, EBG.Adaptors.InjectionMethod.INSERT_BEFORE, this.serving.placementIframe), this.serving.hidePlacementIframe())
    },
    getPageWin: function() {
        return this.serving && this.serving.pageWin ? this.serving.pageWin : window
    },
    getDisplayWin: function() {
        return this.serving && this.serving.displayWin ? this.serving.displayWin : window
    },
    _getDocument: function() {
        return this.getDisplayWin().document
    },
    inInnerIframe: function() {
        return this.serving && this.serving.placementIframe
    },
    inPlacementIframe: function() {
        return this.serving &&
            this.serving.servingMode === EBG.Adaptors.ServingMode.IFRAME
    },
    setElemAttribute: function(a, b, c) {
        a[b] = c
    },
    getClipTag: function(a, b, c, d) {
        return EBG.format("rect({0}px {1}px {2}px {3}px)", a, b, c, d)
    },
    clipIframeParent: function() {
        return !(!EBG.adaptor.browser.isChrome() && !EBG.adaptor.browser.isSafari())
    },
    clip: function(a, b, c, d, e) {
        a.style.clip = this.getClipTag(b, c, d, e)
    },
    unclip: function(a) {
        a.style.clip = "rect(auto auto auto auto)"
    },
    expand: function(a, b) {
        this.setElemStyle(a, "left", EBG.px(-b.x));
        this.setElemStyle(a, "top",
            EBG.px(-b.y));
        this.setElemStyle(a, "width", EBG.px(b.width));
        this.setElemStyle(a, "height", EBG.px(b.height));
        this.unclip(a)
    },
    collapse: function(a, b, c) {
        b = this.getClipParams(b, c);
        this.clip(a, b.top, b.right, b.bottom, b.left)
    },
    resize: function(a, b, c) {
        this.setElemStyle(a, "width", EBG.px(b));
        this.setElemStyle(a, "height", EBG.px(c))
    },
    getClipParams: function(a, b) {
        return {
            top: a.y,
            right: a.x + b.width,
            bottom: a.y + b.height,
            left: a.x
        }
    },
    getCurrentStyleAttr: function(a, b) {
        var c = null;
        try {
            c = a.currentStyle ? a.currentStyle[b] : a.ownerDocument.defaultView.getComputedStyle(a,
                null).getPropertyValue(b)
        } catch (d) {}
        if (!c && "embed" == a.tagName.toLowerCase() && a.parentNode && "object" == a.parentNode.tagName.toLowerCase()) a = a.parentNode, c = a.currentStyle ? a.currentStyle[b] : a.ownerDocument.defaultView.getComputedStyle(a, null).getPropertyValue(b);
        return c
    },
    getViewPortMetrics: function() {
        return this.getWindowViewPortMetrics()
    },
    getWindowViewPortMetrics: function(a) {
        try {
            var a = a ? a : this.getDisplayWin(),
                b = a.document,
                c = {
                    Height: 0,
                    Width: 0
                },
                d = b.documentMode;
            this.serving.servingMode == EBG.Adaptors.ServingMode.INNER_IFRAME &&
                this.updateScrollBarWidth();
            if (this.browser.isIE() && (5 == d || !this.browser.isStrictType(b))) c.Width = b.body.clientWidth, c.Height = b.body.clientHeight;
            else if (this.browser.isIE() || window.ebO && ebO.ffs && ebO.ffs.CFF_MobCSSPixels && this.canHaveLayoutViewport()) c.Width = b.documentElement.clientWidth, c.Height = b.documentElement.clientHeight;
            else if (c.Width = a.innerWidth, c.Height = a.innerHeight, "hidden" != b.body.style.overflow) {
                if (b.body.offsetWidth > c.Width || b.body.scrollWidth > c.Width || 0 < a.scrollMaxX) c.Height -= this.scrollBarWidth;
                var e = b.body.scrollHeight || b.documentElement.scrollHeight;
                if (b.body.offsetHeight > c.Height || e > c.Height || 0 < a.scrollMaxY) c.Width -= this.scrollBarWidth
            }
        } catch (g) {}
        return c
    },
    getPageMetrics: function(a) {
        try {
            var b = a ? a.document : this.getDisplayWin().document,
                a = {
                    Height: 0,
                    Width: 0
                };
            a.Height = Math.max(b.body.scrollHeight, b.documentElement.scrollHeight, b.body.offsetHeight, b.documentElement.offsetHeight, b.body.clientHeight, b.documentElement.clientHeight);
            a.Width = Math.max(b.body.scrollWidth, b.documentElement.scrollWidth,
                b.body.offsetWidth, b.documentElement.offsetWidth, b.body.clientWidth, b.documentElement.clientWidth);
            return a
        } catch (c) {}
    },
    saveInitialScrollBarState: function(a) {
        a.EBG = a.EBG || {};
        var b = a.document;
        a.EBG._scrollBarsInitialState = null != a.EBG._scrollBarsInitialState ? a.EBG._scrollBarsInitialState : b.body.style.overflow
    },
    showScrollBars: function(a) {
        a = a ? a : this.getDisplayWin();
        this.saveInitialScrollBarState(a);
        a.document.body.style.overflow = "auto"
    },
    hideScrollBars: function(a) {
        a = a ? a : this.getDisplayWin();
        this.saveInitialScrollBarState(a);
        a.document.body.style.overflow = "hidden"
    },
    restoreScrollBarsState: function(a) {
        var a = a ? a : this.getDisplayWin(),
            b = a.document;
        if (null != a.EBG._scrollBarsInitialState) b.body.style.overflow = a.EBG._scrollBarsInitialState
    },
    _getCurrentWindow: function(a, b) {
        try {
            return this.serving.servingMode == EBG.Adaptors.ServingMode.INNER_IFRAME ? a = !0 : b == EBG.Adaptors.ServingMode.IFRAME && this.browser.isFF() && (a = !0), a ? this.getDisplayWin() : top
        } catch (c) {}
    },
    getPositioningById: function(a, b, c, d) {
        b = this.serving.servingMode == EBG.Adaptors.ServingMode.INNER_IFRAME ?
            !0 : b;
        return this.getPositioningByElement(this.getElementById(a), b, c, d)
    },
    getIframePosition: function() {
        var a = {
            X: 0,
            Y: 0
        };
        if (EBG.adaptor.serving.detectServingMode(!0) == EBG.Adaptors.ServingMode.IFRAME && "undefined" != typeof this.getDisplayWin().mozInnerScreenX) a.X = this.getDisplayWin().mozInnerScreenX, a.Y = this.getDisplayWin().mozInnerScreenY;
        return a
    },
    getPositioningByElement: function(a, b, c, d) {
        if (!a) return null;
        var b = this.serving.servingMode == EBG.Adaptors.ServingMode.INNER_IFRAME || EBG.isPreview ? !0 : b,
            e = a.getBoundingClientRect ?
            a.getBoundingClientRect() : null;
        if (!e) return null;
        a = Math.round(e.left);
        e = Math.round(e.top);
        if (!EBG.isDefined(d) || !d)
            if (b = this.getScrollLeftTop(b, c)) a += b.X, e += b.Y;
        return {
            X: a,
            Y: e
        }
    },
    getScrollLeftTop: function(a, b) {
        a = b == EBG.Adaptors.ServingMode.IFRAME ? !0 : a;
        return EBG.callSuperFunction(EBG.Adaptors.WebAdaptor, this, "getScrollLeftTop", [a, b])
    },
    getBodyPositioning: function(a) {
        var b = this.getDisplayWin(),
            c = this.isCurrWin();
        (a = EBG.adaptor.getPositioningByElement(b.document.body, !c, a)) || (a = {
            X: 0,
            Y: 0
        });
        return a
    },
    isCurrWin: function() {
        return this.getDisplayWin() ===
            this.getPageWin()
    },
    getScrollerWidth: function() {
        try {
            if (EBG.adaptor.browser._platform == EBG.adaptor.browser._platformTypes.IPAD || EBG.adaptor.browser._platform == EBG.adaptor.browser._platformTypes.IPHONE) return 0;
            var a = EBG.adaptor.getDisplayWin().document,
                b = null,
                c = null,
                d = 0,
                e = 0,
                g = 0,
                b = a.createElement("div");
            b.style.position = "absolute";
            b.style.top = "-1000px";
            b.style.left = "-1000px";
            b.style.width = "100px";
            b.style.height = "50px";
            b.style.overflow = "auto";
            c = a.createElement("div");
            c.style.width = "100%";
            c.style.height =
                "200px";
            b.appendChild(c);
            a.body.appendChild(b);
            e = c.offsetWidth;
            a.body.removeChild(a.body.lastChild);
            b.style.overflow = "hidden";
            a.body.appendChild(b);
            d = c.offsetWidth;
            a.body.removeChild(a.body.lastChild);
            return d - e ? d - e : 0
        } catch (f) {}
    },
    canHaveLayoutViewport: function() {
        var a = EBG.adaptor.getDisplayWin().document.head.getElementsByTagName("meta"),
            b, c = EBG.adaptor.browser.isMobile();
        if (c) {
            for (var d = 0; d < a.length; d++) "viewport" === a[d].name && (b = a[d]);
            if (b)
                for (var a = b.content.split(","), e, d = 0; d < a.length; d++) b = a[d].split("=")[0].trim &&
                    a[d].split("=")[0].trim(), e = a[d].split("=")[1] && a[d].split("=")[1].trim && a[d].split("=")[1].trim(), "user-scalable" == b && "0" == e && (c = !1)
        }
        return c
    },
    _handleEvent: function(a) {
        var b = this._logicalEvents[a.type].name;
        switch (b) {
            case EBG.Events.EventNames.PAGE_HIDDEN:
            case EBG.Events.EventNames.PAGE_VISIBLE:
                b = this.isPageVisible() ? EBG.Events.EventNames.PAGE_VISIBLE : EBG.Events.EventNames.PAGE_HIDDEN;
                break;
            default:
                EBG.callSuperFunction(EBG.Adaptors.WebAdaptor, this, "_handleEvent", [a]);
                return
        }
        if (b) {
            var c = new EBG.Events.Event(b);
            EBGInfra.isDefinedNotNull(this._logicalEvents[a.type].attr) && this._prepareLogicalEventData(c, this._logicalEvents[a.type].eventData, this._logicalEvents[a.type].attr);
            EBG.isFunc(this._listener) && this._listener.call(this._listenerBinding, c)
        }
        b == EBG.Events.EventNames.PAGE_UNLOAD && this.dispose()
    },
    _isOrientationChange: function() {
        var a = EBG.adaptor.serving._getTopFriendlyIframe(EBG.adaptor.getDisplayWin());
        return a.innerWidth !== this._previousWidth || a.innerHeight != this._previousHeight ? this._screenOrientation !==
            (a.innerHeight >= a.innerWidth ? EBG.Events.EventNames.PORTRAIT : EBG.Events.EventNames.LANDSCAPE) : !1
    },
    _setScreenOrientation: function(a) {
        a = a ? a : EBG.adaptor.serving._getTopFriendlyIframe(EBG.adaptor.getDisplayWin());
        this._screenOrientation = a.innerHeight >= a.innerWidth ? EBG.Events.EventNames.PORTRAIT : EBG.Events.EventNames.LANDSCAPE;
        this._previousWidth = a.innerWidth;
        this._previousHeight = a.innerHeight
    },
    getScreenOrientation: function(a) {
        ("boolean" == typeof a ? a : 1) && this._setScreenOrientation();
        return this._screenOrientation
    },
    _sendReady: function() {
        this._isReady = !0;
        var a = new EBG.Events.Event(EBG.EBMessage.ADAPTOR_READY);
        a.dispatcher = this;
        a.timing = EBG.Events.EventTiming.BEFORE;
        if (!EBG.eventMgr.dispatchEvent(a)) a.timing = EBG.Events.EventTiming.ONTIME, EBG.eventMgr.dispatchEvent(a)
    },
    getMouseCoordinates: function(a) {
        var b = {
            mouseX: 0,
            mouseY: 0
        };
        if (a) EBG.adaptor.browser.isIE() ? (b.mouseX = a.clientX ? a.clientX : 0, b.mouseY = a.clientY ? a.clientY : 0) : (b.mouseX = a.pageX ? a.pageX : 0, b.mouseY = a.pageY ? a.pageY : 0), b.view = a.view;
        return b
    },
    _getVisibilityEventName: function() {
        var a =
            null;
        this.isAMP() && EBG.AMPUtil && "undefined" !== typeof EBG.AMPUtil._AMPObj ? a = "amp:visibilitychange" : "undefined" !== typeof document.hidden ? a = "visibilitychange" : "undefined" !== typeof document.mozHidden ? a = "mozvisibilitychange" : "undefined" !== typeof document.msHidden ? a = "msvisibilitychange" : "undefined" !== typeof document.webkitHidden && (a = "webkitvisibilitychange");
        return a
    }
};
EBG.declareClass(EBG.Adaptors.WebAdaptor, EBG.Adaptors.StdWebAdaptor);
EBG.Adaptors = EBG.Adaptors || {};
EBG.Adaptors.Browser = function(a, b, c, d, e) {
    this.set(a, b, c, d, e)
};
EBG.Adaptors.Browser.prototype = {
    _platform: 0,
    _browserType: 0,
    _browserVer: 0,
    _browserCode: 0,
    _deviceType: 0,
    _browserTypes: EBG.API.BrowserTypes,
    _platformTypes: EBG.API.PlatformTypes,
    _deviceTypes: EBG.API.DeviceTypes,
    set: function(a, b, c, d, e) {
        a = a ? a : this._platformTypes.NON_SUPPORTED;
        b = b ? b : this._browserTypes.NON_SUPPORTED;
        e = e ? e : this._browserTypes.NON_SUPPORTED;
        this._platform = a;
        this._browserType = b;
        this._browserVer = c ? c : 0;
        this._browserCode = e;
        this._deviceType = d ? d : 0
    },
    getVersion: function() {
        return this._browserVer
    },
    getDocumentMode: function() {
        return window.document.documentMode
    },
    isIE: function() {
        return this._browserType == this._browserTypes.IE || this._browserType == this._browserTypes.AOL
    },
    isEdge: function() {
        return this._browserType == this._browserTypes.EDGE
    },
    isStrictType: function(a) {
        var b = !1;
        this.isIE() && (b = a ? "CSS1Compat" == a.compatMode : "CSS1Compat" == document.compatMode);
        return b
    },
    isFF: function() {
        return this._browserType == this._browserTypes.FF
    },
    isSafari: function() {
        return this._browserType == this._browserTypes.SAFARI
    },
    isChrome: function() {
        return this._browserType == this._browserTypes.CHROME
    },
    isOpera: function() {
        return this._browserType == this._browserTypes.OPERA
    },
    isMac: function() {
        return this._platform == this._platformTypes.MAC || this._platform == this._platformTypes.MAC_NEW || this._platform == this._platformTypes.MAC_YOSEMITE || this._platform == this._platformTypes.Mac_El_Capitan || this._platform == this._platformTypes.Mac_Sierra
    },
    isMobile: function() {
        var a = !1;
        if (this._deviceType == this._deviceTypes.MOBILE || this._deviceType == this._deviceTypes.TABLET) a = !0;
        return a
    },
    isiOS: function() {
        for (var a in this._platformTypes)
            if (this._platformTypes[a] ==
                this._platform && a.match(/mac|iphone|ipad|ipod/i)) return !0;
        return !1
    },
    isiPad: function() {
        for (var a in this._platformTypes)
            if (this._platformTypes[a] == this._platform && a.match(/ipad/i)) return !0;
        return !1
    },
    isAndroid: function() {
        for (var a in this._platformTypes)
            if (this._platformTypes[a] == this._platform && 0 <= a.indexOf("ANDROID")) return !0;
        return !1
    },
    isAndroidNative: function() {
        return this.isAndroid() && this.isSafari()
    },
    isThirdPartyAllowed: function() {
        return !this.isSafari() || this.isMobile()
    },
    isSpotify: function() {
        var a =
            navigator.userAgent || navigator.vendor || window.opera || "";
        return this.isChrome() && a.match(/spotify/i)
    },
    getEnvironment: function() {
        var a = navigator.userAgent || navigator.vendor || window.opera;
        if (EBG.adaptor.browser.isMobile()) {
            if (EBG.adaptor.browser.isiOS()) {
                var b = window.navigator && window.navigator.standalone;
                return !a.match(/safari/i) && !b ? EBG.WebEnvironment.IOS_WEB_VIEW : EBG.WebEnvironment.IOS_MOBILE_BROWSER
            }
            return EBG.adaptor.browser.isAndroid() ? a.match(/version/i) ? EBG.WebEnvironment.ANDROID_WEB_VIEW : EBG.adaptor.browser.isChrome() ||
                EBG.adaptor.browser.isFF() ? EBG.WebEnvironment.ANDROID_MOBILE_BROWESR : EBG.WebEnvironment.ANDROID_UNKNOWN : EBG.adaptor.browser.isIE() ? EBG.WebEnvironment.OTHER_MOBILE_BROWSER : EBG.WebEnvironment.UNKNOWN
        }
        return EBG.WebEnvironment.BROWSER
    }
};
EBG.Adaptors.ServingMode = {
    SCRIPT: "SCRIPT",
    IFRAME: "IFRAME",
    FRIENDLY_IFRAME: "FRIENDLY_IFRAME",
    INNER_IFRAME: "INNER_IFRAME",
    TOPMOST_FRIENDLY_IFRAME: "TOPMOST_FRIENDLY_IFRAME"
};
EBG.Adaptors.ServingMgr = function() {
    this.displayWin = window;
    this.servingMode = EBG.Adaptors.ServingMode.SCRIPT
};
EBG.Adaptors.ServingMgr.prototype = {
    displayWin: null,
    pageWin: null,
    placementIframe: null,
    _placementIframeAttr: null,
    servingMode: null,
    ebO: null,
    setDisplayWin: function(a) {
        this.displayWin = a
    },
    setPageWin: function() {
        var a = this.detectServingMode(!0);
        switch (this.servingMode) {
            case EBG.Adaptors.ServingMode.SCRIPT:
                switch (a) {
                    case EBG.Adaptors.ServingMode.SCRIPT:
                        this.pageWin = window;
                        break;
                    case EBG.Adaptors.ServingMode.FRIENDLY_IFRAME:
                        this.pageWin = top;
                        break;
                    case EBG.Adaptors.ServingMode.IFRAME:
                    case EBG.Adaptors.ServingMode.INNER_IFRAME:
                        this.pageWin =
                            this.displayWin
                }
                break;
            case EBG.Adaptors.ServingMode.FRIENDLY_IFRAME:
                this.pageWin = top;
                break;
            case EBG.Adaptors.ServingMode.IFRAME:
            case EBG.Adaptors.ServingMode.TOPMOST_FRIENDLY_IFRAME:
            case EBG.Adaptors.ServingMode.INNER_IFRAME:
                this.pageWin = this.displayWin
        }
    },
    setServingMode: function(a) {
        this.servingMode = a;
        var b = null;
        switch (a) {
            case EBG.Adaptors.ServingMode.TOPMOST_FRIENDLY_IFRAME:
                b = this._getTopFriendlyIframe();
                break;
            case EBG.Adaptors.ServingMode.INNER_IFRAME:
            case EBG.Adaptors.ServingMode.FRIENDLY_IFRAME:
                b =
                    top;
                break;
            case EBG.Adaptors.ServingMode.SCRIPT:
                this.setDisplayWin(window);
                this.setPageWin();
                return
        }
        EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_UNLOAD, this._restorePlacementIframe, this));
        b && (EBG.isGlobalDef("gstrEbDisplayPos") && (b = eval("parent." + gstrEbDisplayPos)), this.setDisplayWin(b), this.setPageWin(), b !== window && this._findPlacementIframe())
    },
    detectServingMode: function(a) {
        try {
            var b = EBG.Adaptors.ServingMode.SCRIPT,
                c = window;
            EBG.adaptor.walkUpIframes(function() {
                if (c !=
                    this) b = EBG.Adaptors.ServingMode.FRIENDLY_IFRAME
            }, function() {
                b = EBG.Adaptors.ServingMode.IFRAME
            });
            if (a) return b;
            this.setServingMode(b)
        } catch (d) {}
    },
    detectServingEnvironment: function(a) {
        a = EBG.isDefinedNotNull(a) ? a : this.detectServingMode(!0);
        if (this.servingMode == EBG.Adaptors.ServingMode.INNER_IFRAME) a = EBG.Adaptors.ServingMode.INNER_IFRAME;
        var b = this._getTopFriendlyIframe(window);
        if (window != b && b != top) a = EBG.Adaptors.ServingMode.TOPMOST_FRIENDLY_IFRAME;
        return a
    },
    _getTopFriendlyIframe: function(a) {
        a = a ? a : window;
        if (EBG.adaptor.isSafeFrame()) return a;
        var b;
        EBG.adaptor.walkUpIframes(function() {
            b = this
        }, null, a);
        return b
    },
    _restorePlacementIframe: function() {
        this._placementIframeAttr && (EBGInfra.mergeObj(this._placementIframeAttr, this.placementIframe, !0), EBGInfra.mergeObj(this._placementIframeAttr.style, this.placementIframe.style, !0))
    },
    hidePlacementIframe: function() {
        var a = this.placementIframe;
        if (!this._placementIframeAttr) this._placementIframeAttr = {
            width: a.width,
            height: a.height
        }, this._placementIframeAttr.style = {
            width: EBG.adaptor.getCurrentStyleAttr(a,
                "width"),
            height: EBG.adaptor.getCurrentStyleAttr(a, "height"),
            visibility: EBG.adaptor.getCurrentStyleAttr(a, "visibility"),
            border: EBG.adaptor.getCurrentStyleAttr(a, "border")
        };
        a.style.visibility = "hidden";
        a.width = a.height = 0;
        a.style.width = a.style.height = a.style.border = "0px"
    },
    rehidePlacementIframe: function() {
        this._placementIframeAttr && this.hidePlacementIframe()
    },
    _findPlacementIframe: function() {
        var a = function() {
                if (this == b) {
                    c = !0;
                    var a = b.document.getElementsByTagName(EBG.Adaptors.TagNames.IFRAME);
                    if ("function" ==
                        typeof Array.from)
                        for (var a = Array.from(a), f = EBG.adaptor.findAllShadowRoots(this), h, i = 0; i < f.length; i++) h = Array.from(f[i].querySelectorAll(EBG.Adaptors.TagNames.IFRAME)), a = a.concat(h);
                    for (i = 0; i < a.length; i++) a[i].contentWindow == d && (e = a[i])
                } else c || (d = this)
            },
            b = this.displayWin,
            c = !1,
            d = window,
            e = null;
        EBG.Adaptors.StdWebAdaptor._walkUpIframes(a, a, d, !0);
        this.placementIframe = e
    }
};
EBG.Adaptors.Wallpaper = function() {
    this._currentBg = this._getCurrentBackground()
};
EBG.Adaptors.Wallpaper.prototype = {
    SetBackgroundImage: function(a) {
        var b = EBG.adaptor.getPageWin().document;
        if (a.imgSrc) {
            if (!a.color) a.color = this._currentBg.color ? this._currentBg.color : "transparent";
            var c = a.color,
                c = c + (" url('" + a.imgSrc + "') ");
            a.tiling = "repeat" == a.tiling.toLowerCase() || "repeat-x" == a.tiling.toLowerCase() || "repeat-y" == a.tiling.toLowerCase() || "no-repeat" == a.tiling.toLowerCase() ? a.tiling.toLowerCase() : this._currentBg.tiling ? this._currentBg.tiling : "no-repeat";
            var c = c + (" " + a.tiling),
                c = a.scrolling ?
                c + " scroll" : c + " fixed",
                d = "";
            "center" == a.positionX.toLowerCase() || "right" == a.positionX.toLowerCase() || "left" == a.positionX.toLowerCase() ? d = a.positionX.toLowerCase() : a.positionX = "";
            "center" == a.positionY.toLowerCase() || "top" == a.positionY.toLowerCase() || "bottom" == a.positionY.toLowerCase() ? d += " " + a.positionY.toLowerCase() : a.positionY = "";
            if (!a.positionX || !a.positionY) d = b.body.style.backgroundPosition ? b.body.style.backgroundPosition : "center top";
            b.body.style.background = c + (" " + d)
        }
    },
    RemoveBackgroundImage: function() {
        this._currentBg.imgSrc ?
            this.SetBackgroundImage(this._currentBg) : EBG.adaptor.getPageWin().document.body.style.background = ""
    },
    _getCurrentBackground: function() {
        var a = new EBG.Adaptors.Wallpaper.BgData,
            b = EBG.adaptor.getPageWin().document.body;
        if ("" != b.style.backgroundImage) a.imgSrc = b.style.backgroundImage.substr(4, b.style.backgroundImage.length - 5);
        if ("" != b.style.backgroundColor) a.color = b.style.backgroundColor;
        if ("" != b.style.backgroundRepeat) a.tiling = b.style.backgroundRepeat;
        if ("" != b.style.backgroundAttachment) a.scrolling = "fixed" ==
            b.style.backgroundAttachment ? !1 : !0;
        if ("" != b.style.backgroundPosition) posArr = b.style.backgroundPosition.split(" "), a.positionX = posArr[0], a.positionY = posArr[1];
        return a
    }
};
EBG.Adaptors.Wallpaper.BgData = function() {};
EBG.Adaptors.Wallpaper.BgData.prototype = {
    color: "",
    imgSrc: "",
    tiling: "",
    positionX: "",
    positionY: "",
    scrolling: !1,
    contentWidth: null
};
EBG.declareNamespace("Events");
EBG.Events.EventTiming = {
    BEFORE: "BEFORE",
    ONTIME: "ONTIME",
    AFTER: "AFTER",
    ONTIME_AND_AFTER: "ONTIME_AND_AFTER"
};
EBG.Events.EventNames = EBG.API.EventNames;
EBG.Events.EbEventNames = EBG.API.EbEventNames;
EBG.Events.EventSubscription = function(a, b, c) {
    this.eventName = a;
    this.callback = b;
    this.callbackBinding = c ? c : null
};
EBG.Events.EventSubscription.prototype = {
    dispatcherFilters: null,
    timing: EBG.Events.EventTiming.ONTIME,
    isElementEvent: !1,
    elementId: "",
    isDocumentEvent: !1,
    isValid: function() {
        return EBG.isFunc(this.callback) && (!this.callbackBinding || EBG.isObj(this.callbackBinding))
    },
    toString: function() {
        return EBG.format("EventSubscription: eventName={0}, timing={1}, callback={2}, callbackBinding={3}, dispatcherFilters={4}", this.eventName, this.timing, EBG.typeOf(this.callback), EBG.typeOf(this.callbackBinding), EBG.typeOf(this.dispatcherFilters))
    }
};
EBG.declareClass(EBG.Events.EventSubscription, null);
EBG.Events.Event = function(a) {
    this.name = a;
    this.creationTime = +new Date
};
EBG.Events.Event.prototype = {
    dispatcher: null,
    eventData: null,
    timing: null,
    toString: function() {
        return EBG.format("Event: name={0}, creationTime={1}, dispatcher={2}, eventData={3}", this.name, this.creationTime, EBG.typeOf(this.dispatcher), EBG.typeOf(this.eventData))
    }
};
EBG.declareClass(EBG.Events.Event, null);
EBG.Events.EventManager = function() {
    var a;
    if (EBG.Adaptors && EBG.Adaptors.StdWebAdaptor) EBG.Adaptors.StdWebAdaptor._walkUpIframes(function() {
        if (this.EBG && this.EBG.eventMgr && this.EBG.eventMgr._scriptWin && !this.EBG.eventMgr._scriptWin.closed) a = this.EBG.eventMgr
    }, null, window, !0);
    else {
        var b = EBG.getTopAccessibleWindow(!1);
        if (b && b.EBG && b.EBG.eventMgr) a = b.EBG.eventMgr
    }
    if (a) return a;
    this._subscriptions = {};
    this._dispatchedEvents = {};
    this._trackedEvents[EBG.Events.EventNames.ADD_CREATIVES] = !0
};
EBG.Events.EventManager.prototype = {
    _subscriptions: {},
    _dispatchedEvents: {},
    _trackedEvents: {},
    _scriptWin: window,
    subscribeToEvent: function(a) {
        if (a.isValid())
            if (a.isElementEvent) EBG.adaptor && EBG.adaptor.subscribeToEventOnElement(a.eventName, a.elementId, a.callback);
            else {
                var b = this._subscriptions[a.eventName] = this._subscriptions[a.eventName] || {},
                    c;
                for (c in EBG.Events.EventTiming) EBG.Events.EventTiming.hasOwnProperty(c) && (b[c] = b[c] || []); - 1 == this._getSubscriptionId(a, b[a.timing]) && (b[a.timing].push(a), EBG.adaptor &&
                    EBG.adaptor.hasEvent(a.eventName) && EBG.adaptor.subscribeToEvent(a.eventName, a.isDocumentEvent))
            }
    },
    unsubscribeFromEvent: function(a) {
        if (a && a.isValid())
            if (a.isElementEvent) EBG.adaptor && EBG.adaptor.unsubscribeFromEventOnElement(a.eventName, a.elementId, a.callback);
            else if (this._subscriptions[a.eventName] && this._subscriptions[a.eventName][a.timing]) {
            var b = this._subscriptions[a.eventName][a.timing],
                a = this._getSubscriptionId(a, b); - 1 != a && (b[a] = null)
        }
    },
    dispatchEvent: function(a) {
        var b = !1;
        switch (a.timing) {
            case EBG.Events.EventTiming.BEFORE:
            case EBG.Events.EventTiming.ONTIME:
            case EBG.Events.EventTiming.AFTER:
                b =
                    this._dispatchEventByTiming(a, a.timing);
                break;
            case EBG.Events.EventTiming.ONTIME_AND_AFTER:
                b = (b = this._dispatchEventByTiming(a, EBG.Events.EventTiming.ONTIME)) || this._dispatchEventByTiming(a, EBG.Events.EventTiming.AFTER);
                break;
            default:
                b = (b = (b = this._dispatchEventByTiming(a, EBG.Events.EventTiming.BEFORE)) || this._dispatchEventByTiming(a, EBG.Events.EventTiming.ONTIME)) || this._dispatchEventByTiming(a, EBG.Events.EventTiming.AFTER)
        }
        return b
    },
    attachToAdaptor: function() {
        EBG.adaptor.setListener(this.dispatchEvent,
            this)
    },
    _trackEvent: function(a) {
        a && this._trackedEvents[a.name] && (this._dispatchedEvents[a.name] || (this._dispatchedEvents[a.name] = {}), this._dispatchedEvents[a.name][a.timing] || (this._dispatchedEvents[a.name][a.timing] = []), 10 > this._dispatchedEvents[a.name][a.timing].length && this._dispatchedEvents[a.name][a.timing].push(a))
    },
    getDispatchedEvents: function(a) {
        return this._dispatchedEvents[a.name] ? this._dispatchedEvents[a.name][a.eventTiming] : null
    },
    _dispatchEventByTiming: function(a, b) {
        this._trackEvent(a);
        var c = this._subscriptions[a.name];
        if (!c) return !1;
        for (var c = c[b], d = !1, e = 0; e < c.length; e++) {
            var g = c[e];
            if (g && (g = this._dispatchEventToSubscription(a, g), EBG.isBool(g) && !g)) {
                d = !0;
                break
            }
        }
        return d
    },
    _dispatchEventToSubscription: function(a, b) {
        var c = b.dispatcherFilters;
        if (EBG.isObj(c))
            for (var d in c)
                if (c.hasOwnProperty(d)) {
                    var e = c[d],
                        g = !0,
                        f = d.split("."),
                        h = a.dispatcher;
                    if (h)
                        for (var i = 0; i < f.length; i++) {
                            var h = h[f[i]],
                                j = i == f.length - 1;
                            if (!h || j && h !== e) {
                                g = !1;
                                break
                            }
                        }
                    if (!g) return null
                }
        c = null;
        d = b.callback;
        if (EBG.isFunc(d)) {
            e = [a];
            try {
                c = d.apply(b.callbackBinding, e)
            } catch (k) {}
        }
        return c
    },
    _getSubscriptionId: function(a, b) {
        for (var c = 0; c < b.length; c++)
            if (b[c] && b[c].callback === a.callback && b[c].callbackBinding === a.callbackBinding && b[c].isDocumentEvent === a.isDocumentEvent && this._compareFilters(b[c].dispatcherFilters, a.dispatcherFilters)) return c;
        return -1
    },
    _compareFilters: function(a, b) {
        if (!EBG.isObj(a)) return EBG.isObj(b) ? !1 : !0;
        if (!EBG.isObj(b)) return !1;
        for (var c in a)
            if (a.hasOwnProperty(c))
                if (b.hasOwnProperty(c)) {
                    if (a[c] !== b[c]) return !1
                } else return !1;
        for (c in b)
            if (b.hasOwnProperty(c) && !a.hasOwnProperty(c)) return !1;
        return !0
    }
};
EBG.declareClass(EBG.Events.EventManager, null);
EBG.eventMgr = EBG.eventMgr || new EBG.Events.EventManager;
EBG.declareNamespace("Interactions");
EBG.Interactions.SystemInts = {
    CLICK: "_eyeblaster",
    AD_DURATION: "ebAdDuration",
    REPLAY: "ebReplay",
    CLOSE: "ebClose",
    CLOSE_REM: "ebRemClose",
    DEFAULT_CLICK: "ebDefaultClick",
    USER_INTERACTION: "ebUserInteraction",
    UNIQUE_VIDEO_STARTED: "ebUniqueVideoStarted",
    DWELL_TIME: "ebDwellTime",
    DWELL_UNIQUE: "ebUniqueDwell",
    RICH_FLASH_PLAYED: "ebRichFlashPlayed",
    INT_DURATION: "ebIntDuration",
    VISIBILITY_RECORDABLE: "VsR",
    VISIBILITY_AGENCY_RECORDABLE: "VsRAg",
    VISIBILITY_ADVERTISER_RECORDABLE: "VsRAd",
    VISIBILITY_ADVERTISER: "VsAd",
    VISIBILITY_AGENCY: "VsAg",
    VISIBILITY_IAB: "VsIAB",
    VISIBILITY_ADVERTISER_DURATION: "VsAdDu",
    VISIBILITY_AGENCY_DURATION: "VsAgDu",
    VISIBILITY_AVG_AD_SURFACE: "VsAvSu",
    VISIBILITY_AVG_SCREEN_SHARE: "VsAvSc",
    REM_DURATION: "ebRemDuration",
    INTRO_FULL_PLAY: "ebFullPlay",
    REM_FULL_PLAY: "ebRemFullPlay",
    SWIPE: "ebSwipe",
    AD_START: "AdStart",
    AD_STACKING: "AdStacking",
    MULTI_BURN: "MultiBurn",
    AD_COLLISION: "AdCollision",
    AD_CAROUSEL: "AdCarousel",
    AD_PARAMS: "AdParams",
    PLAYER_PARAMS: "plparams",
    VER_URL: "verURL",
    END_OF_SESSION: "eos"
};
EBG.Interactions.Categories = {
    SYSTEM: 2,
    VIDEO: 1,
    CUSTOM: 0
};
EBG.Interactions.InitiationTypes = {
    AUTO: "auto",
    USER: "user"
};
EBG.Interactions.InteractionTypes = {
    COUNTER: "Counter",
    TIMER: "Timer"
};
EBG.Interactions.checkURL = function(a) {
    var b = a.toLowerCase(); - 1 == b.indexOf("http://") && -1 == b.indexOf("https://") && -1 == b.indexOf("ftp://") && -1 == b.indexOf("aim:") && -1 == b.indexOf("mailto:") && -1 == b.indexOf("fb://") && -1 == b.indexOf("applenews://") && -1 == b.indexOf("applenewss://") && (a = 0 == b.indexOf("/") ? "http://" + EBG.adaptor.getHostName() + a : "http://" + a);
    return a
};
EBG.Interactions.RemoteServersData = function() {};
EBG.Interactions.RemoteServersData.prototype = {
    networkUrl: null,
    agencyUrl: null
};
EBG.declareClass(EBG.Interactions.RemoteServersData, null);
EBG.Interactions.InteractionData = function(a, b, c, d) {
    this.reportingName = a;
    this.adUId = b;
    this.category = c;
    this.assetID = d
};
EBG.Interactions.InteractionData.prototype = {
    initiationType: EBG.Interactions.InitiationTypes.AUTO,
    category: EBG.Interactions.Categories.SYSTEM,
    isPanel: !1
};
EBG.declareClass(EBG.Interactions.InteractionData, null);
EBG.Interactions.CounterInteractionData = function(a, b, c, d) {
    EBG.callSuperConstructor(EBG.Interactions.CounterInteractionData, this, [a, c, b, d]);
    this.remoteServers = new EBG.Interactions.RemoteServersData
};
EBG.Interactions.CounterInteractionData.prototype = {
    reportImmediately: !1,
    countAsClick: !1,
    remoteServers: null,
    clickURL: null,
    numLeftToReport: 10,
    state: null
};
EBG.declareClass(EBG.Interactions.CounterInteractionData, EBG.Interactions.InteractionData);
EBG.Interactions.TimerInteractionData = function(a, b, c) {
    this.reportingName = a;
    EBG.callSuperConstructor(EBG.Interactions.TimerInteractionData, this, [a, c, b])
};
EBG.Interactions.TimerInteractionData.prototype = {
    value: 0,
    startTime: 0,
    idleDuration: 0
};
EBG.declareClass(EBG.Interactions.TimerInteractionData, EBG.Interactions.InteractionData);
EBG.Interactions.AggregationInteractionData = function(a, b, c) {
    this.reportingName = a;
    EBG.callSuperConstructor(EBG.Interactions.AggregationInteractionData, this, [a, c, b])
};
EBG.Interactions.AggregationInteractionData.prototype = {
    value: 0,
    isPlaying: !1
};
EBG.declareClass(EBG.Interactions.AggregationInteractionData, EBG.Interactions.InteractionData);
EBG.AutolinaClass = function() {};
EBG.AutolinaClass.prototype = {
    _hostname: "localhost:3000",
    reportType: {
        INTERACTION: "INTERACTION",
        THIRDPARTY: "THIRDPARTY",
        CLICK: "CLICK"
    },
    report: function(a, b) {
        a = this._adapt(a, b);
        navigator.sendBeacon ? EBG.adaptor.reportBeacon(a) : EBG.adaptor.reportToRemoteServerUsingImage(a)
    },
    _adapt: function(a, b) {
        switch (b) {
            case EBG.Autolina.reportType.THIRDPARTY:
                return ebPtcl + this._hostname + "/3rdparty?url=" + encodeURIComponent(a);
            case EBG.Autolina.reportType.INTERACTION:
                return ebPtcl + this._hostname + "/interaction?" + a.split("?")[1];
            case EBG.Autolina.reportType.CLICK:
                return ebPtcl + this._hostname + "/click?url=" + encodeURIComponent(a)
        }
    },
    _GET: function() {
        var a = {
            x: function() {
                if ("undefined" !== typeof XMLHttpRequest) return new XMLHttpRequest;
                for (var a = ["MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp"], c, d = 0; d < a.length; d++) try {
                    c = new ActiveXObject(a[d]);
                    break
                } catch (e) {}
                return c
            },
            get: function(b, c, d) {
                try {
                    var e = a.x();
                    e.open("GET", b, d);
                    e.onreadystatechange = function() {
                        4 == e.readyState && c &&
                            c(e.responseText)
                    }
                } catch (g) {}
            }
        };
        return a.get
    }()
};
EBG.declareNamespace("Utilities.InteractionUtil");
EBG.dynamicTokens = {
    tp_deviceadvid: "ebaddid",
    tp_deviceidfaraw: "ebidfar",
    tp_deviceidfasha1: "ebidfas1",
    tp_deviceidfasha2: "ebidfas2",
    tp_deviceidfamd5: "ebidfam",
    tp_devicegaid: "ebgaid",
    tp_devicewaid: "ebwaid",
    tp_appname: "ebappname",
    tp_appid: "ebappid",
    tp_mobilelat: "ebmblat",
    tp_mobilelong: "ebmblong"
};
EBG.Utilities.InteractionUtil = function() {};
EBG.Utilities.InteractionUtil.prototype = {
    getBannerRedirectUrl: function(a, b) {
        var c = b || 7850;
        if (!a || !a.adConfig) return "";
        var d = {},
            e = a.adConfig.protocol + EBG.combinePaths(a.adConfig.bsPath, EBG.format("{0}/adServer.bs?cn=brd&PluID={1}&Pos={2}&EyeblasterID={3}", a.adConfig.interactionServer, a.adConfig.pluId, a.adConfig.rnd, a.adConfig.adId));
        if (EBGInfra.isDefined(a.adConfig.page) && a.adConfig.page.length) d.Page = a.adConfig.page;
        if (EBGInfra.isDefinedNotNull(a.clickVal)) d.clk = a.clickVal;
        if (!a.adConfig.isPreview &&
            !a.isClickTag) d.sct = 1;
        if (a.adConfig.autolina) d.autolina = 1;
        if (a.adConfig.massVersioning) {
            if (a.adConfig.massVersioning.adVersions || a.adConfig.massVersioning.defaultAdVersion)
                if (a.sClickedVersion) d.vid = a.sClickedVersion + "&vcl=1";
                else if (a.versionToReport) d.vid = a.versionToReport;
            if (a.adConfig.massVersioning.targetAudienceId) d.ta = a.adConfig.massVersioning.targetAudienceId;
            if (a.adConfig.massVersioning.logDeliveryGroupId || a.adConfig.massVersioning.deliveryGroupId) d.dg = a.adConfig.massVersioning.logDeliveryGroupId ||
                a.adConfig.massVersioning.deliveryGroupId;
            if (a.adConfig.massVersioning.versionTargetAudienceId) d.tav = a.adConfig.massVersioning.versionTargetAudienceId;
            if (a.adConfig.massVersioning.dgTargetAudienceId) d.tadg = a.adConfig.massVersioning.dgTargetAudienceId;
            if (a.adConfig.massVersioning.originalDeliveryGroupId) d.dgo = a.adConfig.massVersioning.originalDeliveryGroupId
        }
        a.fIsDefClick = EBG.isBool(a.fIsDefClick) ? a.fIsDefClick : !1;
        if (!a.fIsDefClick) d.di = 0;
        if (EBGInfra.isDefinedNotNull(a.adConfig.sPublisherPlacementId)) d.pc =
            a.adConfig.sPublisherPlacementId;
        if (EBGInfra.isDefinedNotNull(a.adConfig.sID)) d.sessionid = a.adConfig.sID;
        if (a.adConfig.usercookie) d.usercookie = a.adConfig.usercookie;
        if (EBGInfra.isDefinedNotNull(a.adConfig.optOut)) d.OptOut = a.adConfig.optOut;
        if (EBGInfra.isDefinedNotNull(a.adConfig.lineId)) d.lineid = encodeURIComponent(a.adConfig.lineId);
        if (EBGInfra.isDefinedNotNull(a.adConfig.diAppId)) d.diappid = a.adConfig.diAppId;
        if (a.adConfig.isNXT) d.ctick = +new Date - a.adConfig.handleStartTime;
        if (!a.adConfig.oURLTokens) a.adConfig.oURLTokens =
            this._pairsToObj(a.adConfig.sUrlTokens, "$$");
        for (var g in a.adConfig.oURLTokens) a.adConfig.oURLTokens.hasOwnProperty(g) && EBG.dynamicTokens[g.toLowerCase()] && (d[EBG.dynamicTokens[g.toLowerCase()]] = a.adConfig.oURLTokens[g]);
        if (a.adConfig.ffs && a.adConfig.ffs.CFF_ClickFlags) {
            g = {};
            var f = !1,
                h;
            for (h in a.adConfig.ffs) a.adConfig.ffs.hasOwnProperty(h) && "CFF_Clk_" == h.substring(0, 8) && (g[h.substring(8)] = 1, f = !0);
            try {
                if (f) g = encodeURIComponent(JSON.stringify(g)), d.cff = g
            } catch (i) {}
        }
        for (var j in d) d.hasOwnProperty(j) &&
            (e += "&" + j + "=" + d[j]);
        h = c - e.length;
        if (a.cvurl) d.cvurl = encodeURIComponent('"' + a.cvurl.split("|").join('","') + '"');
        if (a.sJumpUrl) d.rtu = encodeURIComponent(a.sJumpUrl);
        if (EBGInfra.isDefinedNotNull(a.adConfig.ncu)) d.ncu = encodeURIComponent(a.adConfig.ncu);
        if (EBGInfra.isDefinedNotNull(a.adConfig.ebReferrer)) d.ebReferrer = encodeURIComponent(a.adConfig.ebReferrer);
        e += this._capUrls(h, ["cvurl", "ncu", "ebReferrer", "rtu"], d);
        return e.slice(0, c)
    },
    _capUrls: function(a, b, c) {
        for (var d = "", e = !0, g = 0; e;)
            for (var e = !1, f = Math.floor(a /
                    b.length), g = f, h = b.length - 1; 0 <= h; --h) {
                var i = b[h];
                c[i] ? (i = "&" + i + "=" + c[i], i.length <= f && (d += i, a -= i.length, b.splice(h, 1), e = !0)) : (b.splice(h, 1), e = !0)
            }
        for (h = 0; h < b.length; ++h) d += ("&" + b[h] + "=" + c[b[h]]).slice(0, g);
        return d
    },
    _pairsToObj: function(a, b) {
        for (var c = {}, d = unescape(a).split(b), e = 0; e < d.length; e++) try {
            if (d[e]) {
                var g = d[e].indexOf("="),
                    f = d[e].substr(0, g),
                    h = d[e].substr(g + 1);
                c[f] = escape(h)
            }
        } catch (i) {}
        return c
    }
};
EBG.declareClass(EBG.Utilities.InteractionUtil, null);
EBG.InteractionUtil = EBG.InteractionUtil || new EBG.Utilities.InteractionUtil;
EBG.Interactions.Interaction = function() {};
EBG.Interactions.Interaction.prototype = {
    unique: 1,
    _escapeInteractionName: function(a) {
        a = a.toString();
        a = a.replace(/\~|\^|\|/ig, "_");
        return encodeURIComponent(a)
    },
    _buildReportFormat: function(a, b, c, d) {
        d || (d = 0);
        var e = EBG.Interactions.InteractionManager.charAdFieldsDelimeter,
            a = EBG.format("{0}{2}{1}{3}{1}{4}{1}{5}{6}{7}{8}{9}", EBG.Interactions.InteractionManager.charIntDelimeter, e, this._escapeInteractionName(this.interactionData.reportingName), c, d, a, this.unique, b, this.interactionData.category, this.interactionData.isPanel ?
                1 : 0);
        this.interactionData.adConfig && this.interactionData.adConfig.isNXT && (a += e + (+new Date - this.interactionData.adConfig.handleStartTime));
        return a
    }
};
EBG.Interactions.CounterInteraction = function(a) {
    EBG.callSuperConstructor(EBG.Interactions.CounterInteraction, this);
    this.interactionData = a ? a : new EBG.Interactions.CounterInteractionData
};
EBG.Interactions.CounterInteraction.prototype = {
    type: EBG.Interactions.InteractionTypes.COUNTER,
    handle: function(a) {
        var b = this.interactionData,
            c = b.counterJumpUrlData,
            d = c && c.tmpData ? c.tmpData.isClick : !1,
            e = c && c.tmpData ? c.tmpData.isProductClick : !1,
            g = !1,
            f = !0,
            h = !1,
            h = "",
            i = (c && c.tmpData ? c.tmpData.clickUrl : null) || (c ? c.jumpUrl : ""),
            j = c && c.tmpData && c.tmpData.windowWasOpen ? !0 : !1,
            c = !j;
        this.interactionData.adConfig.ffs.CFF_openWindowParam && (c = c && this.interactionData.adConfig.openWindow);
        this.shouldReportInteraction() ?
            (this._handleRemoteServers(), b.counterJumpUrlData && (f = i && this._isEBClick() ? !1 : !0, g = i && (d || this._isEBClick()) ? !0 : !1, (h = d || this._isEBClick()) ? g ? c && this.handleBRDFlow() : (d || e) && this.reportThirdPartyUrls() : c && i && (i = EBG.Interactions.checkURL(i), this._openOrRedirect(i))), h = f ? this._getReportingData(a, g) : "") : !j && i && (i = EBG.Interactions.checkURL(i), this._openOrRedirect(i));
        return h
    },
    reportThirdPartyUrls: function() {
        var a = this.interactionData.reportingName.toLowerCase() == EBG.Interactions.SystemInts.DEFAULT_CLICK.toLowerCase(),
            b = this.interactionData.counterJumpUrlData,
            c = [];
        if (b && b.tmpData && b.tmpData.isClick && (c = this.interactionData.adConfig.clickTrackingUrls, a || this.interactionData.adConfig.showOnlyImage))
            for (a = 0; a < this.interactionData.adConfig.defaultClickTrackingUrls.length; a++) c[c.length] = this.interactionData.adConfig.defaultClickTrackingUrls[a];
        if (b && b.tmpData && b.tmpData.isProductClick && b.tmpData.clickedVerUrl)
            if (this.interactionData.adConfig.ffs.CFF_ReportVer3rdP) {
                b = b.tmpData.clickedVerUrl.split("|");
                for (a = 0; a < b.length; a++) c[c.length] =
                    b[a]
            } else c[c.length] = b.tmpData.clickedVerUrl;
        for (a = 0; a < c.length; a++) EBG.adaptor.reportToRemoteServerUsingImage(c[a])
    },
    shouldReportInteraction: function() {
        var a = !0;
        0 == this.interactionData.numLeftToReport || EBG.isPreview || EBG.isInWorkshop ? a = !1 : this.interactionData.numLeftToReport--;
        return a
    },
    handleBRDFlow: function() {
        var a = this.interactionData,
            b = this.interactionData.counterJumpUrlData,
            c = EBGInfra.isDefinedNotNull(b) && b.tmpData ? b.tmpData.clickUrl : null,
            d = c || EBGInfra.isDefinedNotNull(b) && b.jumpUrl;
        this._isEBClick() &&
            (c || (d = ""));
        a = a.reportingName.toLowerCase() == EBG.Interactions.SystemInts.DEFAULT_CLICK.toLowerCase();
        c = 0;
        b.tmpData.isClick ? c = 1 : b.tmpData.isProductClick && (c = 2);
        d = "" == d ? "" : EBG.Interactions.checkURL(d);
        d = this._getBannerRedirectUrl(d, c, a, b.tmpData.clickedVersion);
        d = EBG.Interactions.checkURL(d);
        this._openOrRedirect(d)
    },
    _openOrRedirect: function(a) {
        -1 == this.interactionData.counterJumpUrlData.target.indexOf(EBG.WindowTarget.BLANK) ? (this.interactionData.reportImmediately = !0, EBG.runTimed(this, this._openPage, [a, this.interactionData.counterJumpUrlData], 1E3)) : this._openPage(a, this.interactionData.counterJumpUrlData)
    },
    getClickTagUrl: function(a) {
        var b = "",
            a = EBG.isDefined(a) && "" != a ? EBG.Interactions.checkURL(a) : void 0;
        EBG.isPreview ? EBG.isInWorkshop ? b = EBG.format("ReportPage_{0}.html", HTMLPageVer) : (b = this.interactionData.counterJumpUrlData.jumpUrl, 4 <= b.length && "http" != b.substr(0, 4) && (b = EBG.format("{0}{1}", ebPtcl, b))) : (b = this._getBannerRedirectUrl(a, null, null, null, !0, 4E3), b = EBG.format("{0}/ReportPage{1}.html?ebReportURL={2}$$ebImpressionID={3}",
            ebBigS, EBG.reportPageVer, escape(b), EBG.Ads.Ad.Fn.getRandFromAdUId(this.interactionData.adConfig.uid)), a = -1, a = EBG.adaptor.browser.isIE() ? 9 <= EBG.adaptor.browser.getVersion() ? 4096 : 2048 : 7850, a -= b.length, a = this._getReportPageTrackingUrls(a), b += a);
        return b
    },
    _getReportPageTrackingUrls: function(a) {
        var b = "$$ebTURLs=[";
        if (-1 != a) {
            if (b.length >= a) return "";
            a -= b.length
        }
        for (var c = this.interactionData.adConfig.clickTrackingUrls, d = 0; d < c.length; d++) {
            var e = EBG.format('{0}"{1}"', 0 != d ? "," : "", c[d]);
            if (-1 != a) {
                if (e.length >=
                    a) break;
                a -= e.length
            }
            b += e
        }
        return b + "]"
    },
    _openPage: function(a, b) {
        var c = b.tmpData.clickedVerUrl ? encodeURIComponent('"' + b.tmpData.clickedVerUrl.split("|").join('","') + '"') : "",
            d = b.tmpData.clickedVerUrl && !EBG.isPreview && !EBG.isInWorkshop ? a + "&cvurl=" + c : a;
        switch (EBG.adaptor.getRequestMethod(d)) {
            case "POST":
                var e = b.target;
                if (!(EBG.adaptor.browser.isIE() && 9 >= EBG.adaptor.browser.getVersion())) b.target = !b.target || b.target == EBG.WindowTarget.BLANK ? "ebReportPage" + parseInt(1E8 * Math.random()) : b.target, EBG.adaptor.openPage("",
                    b);
                EBG.runTimed(this, function() {
                    function c(a, b) {
                        var d = document.createElement("input");
                        d.setAttribute("type", "hidden");
                        d.setAttribute("name", a);
                        d.setAttribute("value", b);
                        return d
                    }
                    var f = document.createElement("form");
                    f.setAttribute("method", "post");
                    f.setAttribute("action", a.substring(0, d.indexOf("?")) + "?cn=brd&ebReferrer=" + encodeURIComponent(this.interactionData.adConfig.ebReferrer));
                    f.setAttribute("target", b.target);
                    b.target = e;
                    var h = this._urlQueryStringToJSON(d),
                        i;
                    for (i in h) f.appendChild(c(i, unescape(h[i])));
                    EBG.adaptor.getDisplayWin().document.body.appendChild(f);
                    f.submit()
                }, [], 25);
                break;
            default:
                EBG.Autolina && EBG.Autolina.report(d, EBG.Autolina.reportType.CLICK), EBG.adaptor.openPage(d, b)
        }
    },
    _urlQueryStringToJSON: function(a) {
        var b = {},
            c = a.substring(a.indexOf("?") + 1);
        if (!c) return b;
        for (var a = [], d = 0, e = 0; e < c.length; e++) switch (c.charAt(e)) {
            case "&":
                a.push(c.substring(d, e));
                d = e + 1;
                break;
            case "$":
                if ("=" == c.charAt(e - 1) && "$" == c.charAt(e + 1))
                    for (e += 2; !("$" == c.charAt(e) && "$" == c.charAt(e - 1));) e++
        }
        a.push(c.substring(d));
        for (e = 0; e < a.length; e++) c = a[e], b[c.substring(0, c.indexOf("="))] = c.substring(c.indexOf("=") + 1);
        return b
    },
    _getReportingData: function(a, b) {
        var c = 0,
            d = 0;
        b || (c = this.interactionData.counterJumpUrlData && this.interactionData.counterJumpUrlData.tmpData.isClick ? 1 : 0, d = this.interactionData.initiationType == EBG.Interactions.InitiationTypes.USER ? 1 : 0);
        var e = this.interactionData.value ? this.interactionData.value : 0;
        if (EBG.isObj(e) && this.interactionData.useInteractionsStrPipe) {
            if (this.interactionData.reportingName == EBG.Interactions.SystemInts.AD_PARAMS) e.idx =
                this.interactionData.numToReport - this.interactionData.numLeftToReport;
            e = EBG.serializeObject(e)
        }
        c = this._buildReportFormat(c, d, e, a);
        this.unique = 0;
        return c
    },
    _getBannerRedirectUrl: function(a, b, c, d, e, g) {
        var f = this.interactionData.adConfig,
            h;
        if (f.massVersioning && (f.massVersioning.adVersions || f.massVersioning.defaultAdVersion)) h = d ? d : EBG.Ads.Ad.Fn.getVersionToReport(f.massVersioning.adVersions);
        return EBG.InteractionUtil.getBannerRedirectUrl({
            adConfig: f,
            sJumpUrl: a,
            clickVal: b,
            fIsDefClick: c,
            sClickedVersion: d,
            isClickTag: e,
            versionToReport: h
        }, g)
    },
    _handleRemoteServers: function() {
        if (!EBG.isPreview && this.interactionData.remoteServers) {
            var a = this.interactionData.remoteServers,
                b = new EBG.Events.Event(EBG.Events.EventNames.INTERACTION_REPORT_REMOTE_SERVERS);
            b.dispatcher = this;
            b.timing = EBG.Events.EventTiming.BEFORE;
            b.eventData = {
                remoteServers: a
            };
            EBG.eventMgr.dispatchEvent(b) || (a.networkUrl && (b = this._replaceRSTokens(a.networkUrl), EBG.adaptor.reportToRemoteServerUsingImage(b)), a.agencyUrl && (a = this._replaceRSTokens(a.agencyUrl),
                EBG.adaptor.reportToRemoteServerUsingImage(a)))
        }
    },
    _replaceRSTokens: function(a) {
        try {
            a = a.replace(/\[ebInteraction\]/ig, this.interactionData.reportingName), a = a.replace(/\[ebInteractionNum\]/ig, EBG.intMgr.adsData[this.interactionData.adConfig.uid].numOfInteractions)
        } catch (b) {}
        return a
    },
    _isEBClick: function() {
        var a = this.interactionData && this.interactionData.reportingName ? this.interactionData.reportingName.toLowerCase() : "";
        return a == EBG.Interactions.SystemInts.CLICK.toLowerCase() || a == EBG.Interactions.SystemInts.DEFAULT_CLICK.toLowerCase()
    }
};
EBG.declareClass(EBG.Interactions.CounterInteraction, EBG.Interactions.Interaction);
EBG.Interactions.TimerInteraction = function(a) {
    EBG.callSuperConstructor(EBG.Interactions.TimerInteraction, this);
    this.interactionData = a ? a : new EBG.Interactions.TimerInteractionData
};
EBG.Interactions.TimerInteraction.prototype = {
    type: EBG.Interactions.InteractionTypes.TIMER,
    handle: function(a) {
        var b = this.interactionData.value;
        this.isRunning() && (this.stop(), this.start());
        var b = this.interactionData.value - b,
            b = 0 < b ? b : 0,
            c = this.interactionData.idleDuration / 1E3;
        this.interactionData.value -= c <= b ? c : b;
        this.interactionData.idleDuration = 0;
        b = EBG.Interactions.InteractionManager.MAX_AD_DURATION_SEC;
        this.interactionData.value = this.interactionData.value > b ? b : this.interactionData.value;
        this.interactionData.value =
            Math.floor(this.interactionData.value);
        return 0 >= this.interactionData.value ? !1 : this._buildReportFormat(0, 0, this.interactionData.value, a, 0)
    },
    start: function() {
        var a = new EBG.Events.Event(EBG.Events.EventNames.START_TIMER);
        a.dispatcher = this;
        a.timing = EBG.Events.EventTiming.BEFORE;
        a.eventData = {
            interaction: this
        };
        if (!EBG.eventMgr.dispatchEvent(a)) {
            if (!this.isRunning()) this.interactionData.startTime = (new Date).getTime(), a.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
            EBG.eventMgr.dispatchEvent(a)
        }
    },
    stop: function() {
        if (this.isRunning()) {
            var a =
                new EBG.Events.Event(EBG.Events.EventNames.STOP_TIMER);
            a.dispatcher = this;
            a.timing = EBG.Events.EventTiming.BEFORE;
            a.eventData = {
                interaction: this
            };
            if (!EBG.eventMgr.dispatchEvent(a)) this.interactionData.value += this.getElapsedTime() / 1E3, this.interactionData.startTime = 0, a.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER, EBG.eventMgr.dispatchEvent(a)
        }
    },
    getElapsedTime: function() {
        return (new Date).getTime() - this.interactionData.startTime
    },
    update: function(a) {
        var b = new EBG.Events.Event(EBG.Events.EventNames.UPDATE_TIMER);
        b.dispatcher = this;
        b.timing = EBG.Events.EventTiming.BEFORE;
        b.eventData = {
            interaction: this
        };
        if (!EBG.eventMgr.dispatchEvent(b)) this.interactionData.value += a, b.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER, EBG.eventMgr.dispatchEvent(b)
    },
    clear: function() {
        this.interactionData.value = 0;
        this.interactionData.startTime = 0
    },
    increaseIdleDuration: function(a) {
        this.interactionData.idleDuration += a
    },
    isRunning: function() {
        return 0 < this.interactionData.startTime
    },
    isFinished: function() {
        return 0 === this.interactionData.startTime &&
            0 < this.interactionData.value
    },
    getValue: function() {
        return this.interactionData.value
    },
    getType: function() {
        return EBG.DurationInteraction.TIMER
    }
};
EBG.declareClass(EBG.Interactions.TimerInteraction, EBG.Interactions.Interaction);
EBG.Interactions.IdleManager = function() {
    this.currentIdleDuration = 0;
    this._startTime = (new Date).getTime();
    this.intervalId = EBG.setInterval(this, this._checkIfIdle, [], EBG.Interactions.IdleManager.IDLE_INTERVAL)
};
EBG.Interactions.IdleManager.IDLE_INTERVAL = 5E3;
EBG.Interactions.IdleManager.prototype = {
    _totalIdleDuration: 0,
    _lastActiveTimeStamp: 0,
    updateIdleDuration: function() {
        this.currentIdleDuration = 0;
        var a = (new Date).getTime();
        if (0 !== this._lastActiveTimeStamp) this.currentIdleDuration = a - this._lastActiveTimeStamp, this.currentIdleDuration > EBG.Interactions.IdleManager.IDLE_INTERVAL + 2E3 && (this._totalIdleDuration += this.currentIdleDuration, EBG.intMgr.handleAllTimers(EBG.Interactions.InteractionManager.HandleAllTimersOptions.HANDLE_IDLE))
    },
    _checkIfIdle: function() {
        this.updateIdleDuration();
        if ((this._lastActiveTimeStamp = (new Date).getTime()) - this._startTime - this._totalIdleDuration > 1E3 * EBG.Interactions.InteractionManager.MAX_AD_DURATION_SEC) EBG.intMgr.unLoadHandler(), EBG.eventMgr.dispatchEvent(new EBG.Events.Event(EBG.Events.EventNames.MAX_AD_DURATION)), EBG.clearInterval(this.intervalId)
    }
};
EBG.declareClass(EBG.Interactions.IdleManager, null);
EBG.Interactions.StdInteractionManager = function() {
    this.adsData = EBG.intMgr ? EBG.intMgr.adsData : {};
    this.adsIntQueues = EBG.intMgr ? EBG.intMgr.adsIntQueues : {}
};
EBG.Interactions.StdInteractionManager.prototype = {
    copy: function(a) {
        this.adsIntQueues = a.adsIntQueues;
        this.adsData = a.adsData
    },
    initAdData: function(a, b) {
        var c = a.uid;
        this.adsIntQueues[c] = this.adsIntQueues[c] ? this.adsIntQueues[c] : [];
        c = this.adsData[c] = {
            adConfig: a,
            isUserInteractionOccur: !1,
            isClickOccur: !1,
            isProductClicked: {},
            numOfInteractions: 0,
            delayIntReport: a.impressionSent ? !1 : b,
            videoState: {},
            assetsTimers: {}
        };
        c[EBG.Interactions.InteractionTypes.COUNTER] = {};
        c[EBG.Interactions.InteractionTypes.TIMER] = {};
        c.adConfig.isStdAd || this._addSystemInteractions(a)
    },
    allowInteractionReport: function(a) {
        if (this.adsData[a]) this.adsData[a].delayIntReport = !1
    },
    addInteraction: function(a, b) {
        var c = EBG.isDefinedNotNull(b) ? b.toLowerCase() : a.interactionData.reportingName.toLowerCase(),
            d = a.interactionData.adUId,
            e = new EBG.Events.Event(EBG.Events.EventNames.ADD_INTERACTION);
        e.eventData = a;
        e.dispatcher = {
            _adConfig: {
                rnd: this.adsData[d].adConfig.rnd
            }
        };
        e.timing = EBG.Events.EventTiming.BEFORE;
        var g = EBG.eventMgr.dispatchEvent(e),
            f =
            this.adsData[d];
        if (!g) {
            if (!f) return;
            f[a.type][c] = a;
            a.interactionData.adConfig = this.adsData[d].adConfig
        }
        e.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
        EBG.eventMgr.dispatchEvent(e)
    },
    getClickTag: function(a) {
        return (a = this._getCounterInteraction(EBG.Interactions.SystemInts.CLICK, a)) ? a.getClickTagUrl() : ""
    },
    getClickTarget: function(a) {
        var b = "_blank";
        if (!EBG.isPreview && EBG.isInWorkshop && (a = this._getCounterInteraction(EBG.Interactions.SystemInts.CLICK, a))) b = a.interactionData.counterJumpUrlData.target;
        return b
    },
    handleCloseAdParts: function(a, b) {
        if (a && 1 == a.fClose) {
            var c = new EBG.Events.Event(EBG.Events.EventNames.CLOSE_AD);
            c.dispatcher = {
                _adConfig: {
                    rnd: EBG.Ads.Ad.Fn.getRandFromAdUId(b)
                }
            };
            c.eventData = {
                closeDueToClickthrough: !0
            };
            EBG.eventMgr.dispatchEvent(c)
        }
    },
    handleCounterInteraction: function(a, b, c, d, e, g) {
        var f = this._getCounterInteraction(a, b),
            h = f ? f.interactionData : null,
            i = h ? h.counterJumpUrlData : null,
            j = this.adsData[b],
            k = j.adConfig.isStdAd,
            l = "",
            g = EBGInfra.isDefined(g) ? g : !0,
            c = c || h && h.assetID || 0;
        if (!k && h) h.initiationType =
            d ? EBG.Interactions.InitiationTypes.USER : h.initiationType, this._handleUserInteraction(b, h), this._handleSpecialInteractions(a, b, c);
        if (f && (a = new EBG.Events.Event(EBG.Events.EventNames.HANDLE_COUNTER_INTERACTION), a.dispatcher = {
                _adConfig: {
                    rnd: EBG.Ads.Ad.Fn.getRandFromAdUId(b)
                }
            }, a.timing = EBG.Events.EventTiming.BEFORE, a.eventData = {
                interaction: f
            }, !EBG.eventMgr.dispatchEvent(a))) {
            if (i) i.tmpData = e, i.tmpData.isClick = h.countAsClick && !j.isClickOccur, j.isClickOccur = i.tmpData.isClick ? !0 : j.isClickOccur, e = i.tmpData.clickedVersion,
                i.tmpData.isProductClick = h.countAsClick && i.tmpData.clickedVersion && e && !j.isProductClicked["V_" + e], i.tmpData.isProductClick && (j.isProductClicked["V_" + e] = !0);
            else if (e && e.value) f.interactionData.value = e.value;
            l = g ? f.handle(c) : "";
            j.numOfInteractions++;
            l && (this._handleReportData(b, h, l), this._isReportDataInQueue(b, l) || this.reportInteractionQueues());
            this.handleCloseAdParts(i, b);
            a.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
            EBG.eventMgr.dispatchEvent(a)
        }
    },
    isInteractionExist: function(a, b, c) {
        if (this.adsData[c] &&
            this.adsData[c][b]) return this.adsData[c][b][a] ? !0 : !1
    },
    _getCounterInteraction: function(a, b) {
        a = a.toLowerCase();
        if (this.adsData[b] && this.adsData[b][EBG.Interactions.InteractionTypes.COUNTER] && this.adsData[b][EBG.Interactions.InteractionTypes.COUNTER][a]) return this.adsData[b][EBG.Interactions.InteractionTypes.COUNTER][a]
    }
};
EBG.declareClass(EBG.Interactions.StdInteractionManager, null);
EBG.Interactions.InteractionManager = function() {
    EBG.callSuperConstructor(EBG.Interactions.InteractionManager, this);
    EBG.intMgr && EBG.intMgr.copy(this);
    this.idleManager = new EBG.Interactions.IdleManager;
    this._timedReport = !EBG.adaptor.browser.isMobile() ? 1E4 : 9E4;
    this._subscribeToEvents()
};
EBG.Interactions.InteractionManager.charAdFieldsDelimeter = "~";
EBG.Interactions.InteractionManager.charIntDelimeter = "^";
EBG.Interactions.InteractionManager.intStackLength = 7;
EBG.Interactions.InteractionManager.MAX_AD_DURATION_SEC = 900;
EBG.Interactions.InteractionManager.INTERACTION_THRESHOLD_SEC = 86400;
EBG.Interactions.InteractionManager.HandleAllTimersOptions = {
    REPORT: 0,
    PAUSE: 1,
    HANDLE_IDLE: 2
};
EBG.Interactions.InteractionManager.prototype = {
    _isUnloadHandled: !1,
    _pausedTimers: null,
    _masterOrdinalNumber: null,
    _seqTimersReportData: {
        index: -1,
        intervals: [5, 10, 20, 40, 60, 120, 240]
    },
    startAggregate: function(a, b, c) {
        if (null == this._masterOrdinalNumber) this._masterOrdinalNumber = c;
        this.startTimer(a, b, c)
    },
    startTimer: function(a, b, c) {
        var d = this._getTimerInteraction(a, b);
        if (d) {
            d.start();
            if (EBGInfra.isDefined(c) && EBGInfra.notNull(c)) switch (d = this.adsData[b], d = d.assetsTimers[c] ? d.assetsTimers[c] : d.assetsTimers[c] = {}, a) {
                case EBG.VideoInteraction.VIDEO_PLAY_DURATION:
                    this._startAssetTimer(d, EBG.VideoInteraction.VIDEO_ASSET_DURATION, b, c);
                    break;
                case EBG.VideoInteraction.FULLSCREEN_DURATION:
                    this._startAssetTimer(d, EBG.VideoInteraction.FULLSCREEN_ASSET_DURATION, b, c)
            }
            EBG.isGlobalDef("JSON")
        }
    },
    _handleVideoStarted: function(a, b) {
        var c = new EBG.Events.Event(EBG.Events.EventNames.DWELL_VIDEO_START);
        c.dispatcher = {
            _adConfig: {
                rnd: EBG.Ads.Ad.Fn.getRandFromAdUId(a)
            }
        };
        c.eventData = {
            assetId: b
        };
        EBG.eventMgr.dispatchEvent(c)
    },
    _startAssetTimer: function(a,
        b, c, d) {
        if (!a[b]) {
            var e;
            null != this._masterOrdinalNumber ? (e = new EBG.Interactions.AggregationInteractionData(b, EBG.Interactions.Categories.VIDEO, c), a[b] = new EBG.Interactions.AggregateInteraction(e)) : (e = new EBG.Interactions.TimerInteractionData(b, EBG.Interactions.Categories.VIDEO, c), a[b] = new EBG.Interactions.TimerInteraction(e))
        }
        a[b].start();
        this._handleVideoStarted(c, d)
    },
    updateAggregation: function(a, b, c, d) {
        if (null == this._masterOrdinalNumber) this._masterOrdinalNumber = d;
        var e = this._getTimerInteraction(a,
            b);
        if (e && (this._masterOrdinalNumber == d && e.update(c), EBGInfra.isDefined(d) && EBGInfra.notNull(d))) switch (e = this.adsData[b], e = e.assetsTimers[d] ? e.assetsTimers[d] : e.assetsTimers[d] = {}, a) {
            case EBG.VideoInteraction.VIDEO_PLAY_DURATION:
                this._updateAssetAggregation(e, EBG.VideoInteraction.VIDEO_ASSET_DURATION, b, c, d);
                break;
            case EBG.VideoInteraction.FULLSCREEN_DURATION:
                this._updateAssetAggregation(e, EBG.VideoInteraction.FULLSCREEN_ASSET_DURATION, b, c, d)
        }
    },
    _updateAssetAggregation: function(a, b, c, d) {
        a[b] || (c = new EBG.Interactions.AggregationInteractionData(b,
            EBG.Interactions.Categories.VIDEO, c), a[b] = new EBG.Interactions.AggregateInteraction(c));
        a[b].update(d)
    },
    stopAggregate: function(a, b, c) {
        this._masterOrdinalNumber = null;
        this.stopTimer(a, b, c)
    },
    stopTimer: function(a, b, c) {
        var d = this._getTimerInteraction(a, b),
            e = this.adsData[b].assetsTimers,
            g = !0;
        if (d) {
            if (EBGInfra.isDefined(c) && EBGInfra.notNull(c) && e[c]) switch (a) {
                case EBG.VideoInteraction.VIDEO_PLAY_DURATION:
                    e[c][EBG.VideoInteraction.VIDEO_ASSET_DURATION].stop();
                    g = !this._isRunningVideoAsset(b, !1);
                    break;
                case EBG.VideoInteraction.FULLSCREEN_DURATION:
                    e[c][EBG.VideoInteraction.FULLSCREEN_ASSET_DURATION].stop()
            }
            g &&
                d.stop();
            if (EBGInfra.isDefined(c) && EBGInfra.notNull(c)) a = new EBG.Events.Event(EBG.Events.EventNames.DWELL_VIDEO_STOP), a.dispatcher = {
                _adConfig: {
                    rnd: EBG.Ads.Ad.Fn.getRandFromAdUId(b)
                }
            }, a.eventData = {
                assetId: c
            }, EBG.eventMgr.dispatchEvent(a)
        }
    },
    clearTimer: function(a, b) {
        var c = this._getTimerInteraction(a, b);
        c && c.clear()
    },
    _isRunningVideoAsset: function(a, b) {
        var c = this.adsData[a].assetsTimers,
            d;
        for (d in c)
            if (c.hasOwnProperty(d)) {
                var e = b ? "ebFSVideoAssetDuration" : "ebVideoAssetDuration";
                if (c[d][e] && c[d][e].isRunning()) return !0
            }
        return !1
    },
    updateTimer: function(a, b, c, d) {
        if (a = this._getTimerInteraction(a, b)) a.update(c), EBGInfra.isDefined(d) && EBGInfra.notNull(d) && this.adsData[b].assetsTimers[d].update(c)
    },
    getTimerValue: function(a, b) {
        var c = this._getTimerInteraction(a, b);
        return c ? c.getValue() : 0
    },
    isTimerRunning: function(a, b) {
        var c = this._getTimerInteraction(a, b);
        return c ? c.isRunning() : !1
    },
    _handleUserInteraction: function(a, b) {
        if (b.initiationType == EBG.Interactions.InitiationTypes.USER && !this.adsData[a].isUserInteractionOccur) {
            this.adsData[a].isUserInteractionOccur = !0;
            var c = new EBG.Events.Event(EBG.Events.EventNames.USER_INTERACTION);
            c.dispatcher = {
                _adConfig: {
                    rnd: EBG.Ads.Ad.Fn.getRandFromAdUId(a)
                }
            };
            EBG.eventMgr.dispatchEvent(c);
            this._reportUserInteraction(a)
        }
    },
    _handlePanelsViewed: function(a, b) {
        b.isPanel && b.initiationType == EBG.Interactions.InitiationTypes.USER && this.handleCounterInteraction(EBG.ExpBaseInteractions.PANELS_VIEWED, a)
    },
    _handleReportData: function(a, b, c) {
        if (b.useInteractionsStrPipe) this._handleDataParams(a, b, c);
        else if (this.adsIntQueues[a].push(c),
            a = this.adsIntQueues[a].length >= EBG.Interactions.InteractionManager.intStackLength ? !0 : !1, b && (b.reportImmediately || b.counterJumpUrlData && b.counterJumpUrlData.tmpData.isClick) || a) b = !b.sync, window.navigator && navigator.sendBeacon && !EBG.isMRAID() ? this.reportInteractionQueues(b, !1, !0) : this.reportInteractionQueues()
    },
    _handleDataParams: function(a, b, c) {
        var b = this._getAdReportData(a),
            c = encodeURIComponent(c),
            d = this._getPipeParams(a, !1);
        this._reportServer(this.adsData[a].adConfig._interactionsStrPipe + "$$" + b + c +
            "$$" + d, !0)
    },
    _handleSpecialInteractions: function(a, b, c) {
        var d = this._getCounterInteraction(a, b),
            a = d.interactionData;
        this._handleUserInteraction(b, a);
        switch (a.reportingName) {
            case EBG.VideoInteraction.STARTED:
                d.unique && this._reportUniqueVideoStarted(b);
                this.adsData[b].isUserInteractionOccur && this._reportUserInitatedVideo(b, c);
                break;
            case EBG.VideoInteraction.FULLSCREEN_START:
                if (this._isRunningVideoAsset(b, !1)) switch (d = this._getTimerInteraction(EBG.VideoInteraction.VIDEO_PLAY_DURATION, b), d = d.getType(),
                    d) {
                    case EBG.DurationInteraction.TIMER:
                        this.startTimer(EBG.VideoInteraction.FULLSCREEN_DURATION, b, c);
                        this.stopTimer(EBG.VideoInteraction.VIDEO_PLAY_DURATION, b, c);
                        break;
                    case EBG.DurationInteraction.AGGREGATE:
                        this.startAggregate(EBG.VideoInteraction.FULLSCREEN_DURATION, b, c), this.stopAggregate(EBG.VideoInteraction.VIDEO_PLAY_DURATION, b, c)
                }
                break;
            case EBG.VideoInteraction.FULLSCREEN_END:
                if (this._isRunningVideoAsset(b, !0)) switch (d = this._getTimerInteraction(EBG.VideoInteraction.VIDEO_PLAY_DURATION, b), d = d.getType(),
                    d) {
                    case EBG.DurationInteraction.TIMER:
                        this.startTimer(EBG.VideoInteraction.VIDEO_PLAY_DURATION, b, c);
                        this.stopTimer(EBG.VideoInteraction.FULLSCREEN_DURATION, b, c);
                        break;
                    case EBG.DurationInteraction.AGGREGATE:
                        this.startAggregate(EBG.VideoInteraction.VIDEO_PLAY_DURATION, b, c), this.stopAggregate(EBG.VideoInteraction.FULLSCREEN_DURATION, b, c)
                }
                break;
            case EBG.VideoInteraction.FULLPLAY:
                this.stopTimer(EBG.VideoInteraction.VIDEO_PLAY_DURATION, b, c)
        }
        this._handlePanelsViewed(b, a)
    },
    handleVideoInteraction: function(a,
        b, c, d, e) {
        if (EBGInfra.isDefined(c) && EBGInfra.notNull(c)) {
            var g = this.adsData[b].videoState;
            g[c] || (g[c] = 0);
            var f = !0,
                h = EBG.indexOfArray(EBG.VideoQuartiles, a); - 1 != h && (h == g[c] ? g[c]++ : f = !1);
            f && this.handleCounterInteraction(a, b, c, d, e)
        }
    },
    handleAllTimers: function(a, b, c) {
        if (a == EBG.Interactions.InteractionManager.HandleAllTimersOptions.PAUSE) this._pausedTimers = [];
        var d = new EBG.Events.Event(EBG.Events.EventNames.COLLECT_TIMERS);
        d.dispatcher = this;
        d.timing = EBG.Events.EventTiming.BEFORE;
        if (c && this.adsData.hasOwnProperty(c)) d.eventData = {
            adUId: c
        };
        EBG.eventMgr.dispatchEvent(d);
        for (var e in this.adsData)
            if (this.adsData.hasOwnProperty(e) && !(c && c != e || this.adsData[e].isUnloadHandled)) {
                var d = this.adsData[e],
                    g = d[EBG.Interactions.InteractionTypes.TIMER];
                g && this._handleTimers(g, a, e);
                if (d.assetsTimers)
                    for (var f in d.assetsTimers) d.assetsTimers.hasOwnProperty(f) && this._handleTimers(d.assetsTimers[f], a, e, f);
                d = new EBG.Events.Event(EBG.Events.EventNames.COLLECT_TIMERS);
                d.dispatcher = this;
                d.timing = EBG.Events.EventTiming.ONTIME;
                if (c) d.eventData = {
                    adUId: c
                };
                EBG.eventMgr.dispatchEvent(d);
                a === EBG.Interactions.InteractionManager.HandleAllTimersOptions.REPORT && (d = 0 <= this._seqTimersReportData.index, b = EBG.isBool(b) ? b : !0, !b && this.adsData[e].adConfig && navigator && navigator.sendBeacon && !EBG.isMRAID() ? this.reportInteractionQueues(b, d, !0) : this.reportInteractionQueues(b, d))
            }
    },
    _handleTimers: function(a, b, c, d) {
        for (var e in a)
            if (a.hasOwnProperty(e)) {
                var g = a[e];
                if (g.isRunning() || g.isFinished()) switch (b) {
                    case EBG.Interactions.InteractionManager.HandleAllTimersOptions.REPORT:
                        var f =
                            new EBG.Events.Event(EBG.Events.EventNames.HANDLE_TIMER_INTERACTION);
                        f.dispatcher = {
                            _adConfig: {
                                rnd: EBG.Ads.Ad.Fn.getRandFromAdUId(c)
                            }
                        };
                        f.timing = EBG.Events.EventTiming.BEFORE;
                        f.eventData = {
                            interaction: g
                        };
                        if (EBG.eventMgr.dispatchEvent(f)) return;
                        (g = g.interactionData.isPanel && g.interactionData.assetID ? g.handle(g.interactionData.assetID) : g.handle(d)) && this.adsIntQueues[c].push(g);
                        f.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
                        EBG.eventMgr.dispatchEvent(f);
                        break;
                    case EBG.Interactions.InteractionManager.HandleAllTimersOptions.PAUSE:
                        g.stop();
                        this._pausedTimers.push(g);
                        break;
                    case EBG.Interactions.InteractionManager.HandleAllTimersOptions.HANDLE_IDLE:
                        g.increaseIdleDuration(this.idleManager.currentIdleDuration)
                }
            }
    },
    pauseAllTimers: function() {
        return this.handleAllTimers(EBG.Interactions.InteractionManager.HandleAllTimersOptions.PAUSE, !0)
    },
    resumeAllTimers: function() {
        if (null != this._pausedTimers) {
            for (var a = 0; a < this._pausedTimers.length; a++) this._pausedTimers[a].start();
            this._pausedTimers = null
        }
    },
    reportInteractionQueues: function(a, b, c) {
        if (!(EBG.getTime() >
                EBG.Interactions.InteractionManager.INTERACTION_THRESHOLD_SEC)) {
            var a = EBG.isBool(a) ? a : !0,
                b = EBG.isBool(b) ? b : !1,
                d = {},
                e = {},
                g;
            for (g in this.adsData)
                if (this.adsData.hasOwnProperty(g)) {
                    var f = this.adsIntQueues[g];
                    if (!this.adsData[g].delayIntReport)
                        for (; f.length;) {
                            for (var h = this._getAdReportData(g), i = this.adsData[g].adConfig._interactionPipe, j = 0, k = this._isUnloadHandled ? f.length : EBG.Interactions.InteractionManager.intStackLength, l = 0; l < f.length && l < k; l++) h += f[l], j++;
                            for (l = 0; l < j; l++) f.shift();
                            this._isUnloadHandled ?
                                (j = d[i] ? d[i] : "", "" != j && (j += "|"), e[i] || (e[i] = this._getPipeParams(g, b)), j += h, d[i] = j) : this._reportServer(i + h + this._getPipeParams(g, b), a, c)
                        }
                }
            for (var m in d) this._reportServer(m + d[m] + (e[m] ? e[m] : ""), a, c)
        }
    },
    _reportServer: function(a, b, c) {
        if (!EBG.isPreview || EBG.isGlobalDef("gfEbForceReportInt")) {
            if (!window.navigator || !EBG.isFunc(navigator.sendBeacon) || EBG.isMRAID() || EBG.adaptor.browser.isiOS() && !EBG.adaptor.browser.isMac()) c = !1;
            c ? EBG.adaptor.reportBeacon(a) : EBG.adaptor.reportToRemoteServer(a, b);
            EBG.Autolina &&
                EBG.Autolina.report(a, EBG.Autolina.reportType.INTERACTION)
        }
    },
    _isReportDataInQueue: function(a, b) {
        for (var c = !1, d = this.adsIntQueues[a], e = 0; e < d.length; e++)
            if (d[e] === b) {
                c = !0;
                break
            }
        return c
    },
    _getPipeParams: function(a, b) {
        var c = "",
            d = this.adsData[a].adConfig.usercookie;
        d && (c += EBG.format("&usercookie={0}", d));
        (d = this.adsData[a].adConfig.optOut) && (c += EBG.format("&OptOut={0}", d));
        b && (c += EBG.format("&iseq={0}", this._seqTimersReportData.index));
        EBG.isGlobalDef("gfEbForceReportInt") && (c += "&pr=1");
        c += EBG.format("&rnd={0}",
            Math.random());
        EBG.adaptor.flash && (c += EBG.format("&flv={0}", EBG.adaptor.flash.version));
        EBG.isDefined(EBG.adaptor.getResolution) && (c += EBG.format("&res={0}", EBG.adaptor.getResolution()));
        EBGInfra.isDefinedNotNull(this.adsData[a].adConfig.diAppId) && (c += "&diappid=" + this.adsData[a].adConfig.diAppId);
        return c
    },
    _getAdReportData: function(a) {
        var b = this.adsData[a].adConfig,
            c = EBG.Interactions.InteractionManager.charAdFieldsDelimeter;
        return EBG.format("{0}{1}{2}{3}{4}{5}{6}{7}{8}{9}{10}{11}{12}", EBG.Ads.Ad.Fn.getAdIdFromAdUId(a),
            c, b.page, c, b.pluId, c, b.massVersioning.targetAudienceId, c, b.massVersioning.logDeliveryGroupId, c, EBG.Ads.Ad.Fn.getVersionToReport(b.massVersioning.adVersions), c, this.adsData[a].adConfig.sID)
    },
    _addSystemInteractions: function(a) {
        var a = a.uid,
            b = new EBG.Interactions.CounterInteractionData(EBG.Interactions.SystemInts.USER_INTERACTION, EBG.Interactions.Categories.SYSTEM, a);
        b.numLeftToReport = 1;
        this.addInteraction(new EBG.Interactions.CounterInteraction(b));
        b = new EBG.Interactions.CounterInteractionData(EBG.Interactions.SystemInts.UNIQUE_VIDEO_STARTED,
            EBG.Interactions.Categories.VIDEO, a);
        b.numLeftToReport = 1;
        this.addInteraction(new EBG.Interactions.CounterInteraction(b));
        b = new EBG.Interactions.CounterInteractionData(EBG.Interactions.SystemInts.DWELL_UNIQUE, EBG.Interactions.Categories.SYSTEM, a);
        b.reportImmediately = !0;
        b.numLeftToReport = 1;
        this.addInteraction(new EBG.Interactions.CounterInteraction(b));
        b = new EBG.Interactions.CounterInteractionData(EBG.Interactions.SystemInts.REPLAY, EBG.Interactions.Categories.SYSTEM, a);
        this.addInteraction(new EBG.Interactions.CounterInteraction(b));
        a = new EBG.Interactions.CounterInteractionData(EBG.Interactions.SystemInts.RICH_FLASH_PLAYED, EBG.Interactions.Categories.SYSTEM, a);
        a.numLeftToReport = 1;
        this.addInteraction(new EBG.Interactions.CounterInteraction(a))
    },
    _reportUserInitatedVideo: function(a, b) {
        this.handleVideoInteraction(EBG.VideoInteraction.USER_INITIATED_VIDEO, a, b)
    },
    _reportUserInteraction: function(a) {
        this.handleCounterInteraction(EBG.Interactions.SystemInts.USER_INTERACTION, a)
    },
    _reportUniqueVideoStarted: function(a) {
        this.handleCounterInteraction(EBG.Interactions.SystemInts.UNIQUE_VIDEO_STARTED,
            a)
    },
    reportDwellUnique: function(a, b) {
        b && this.handleCounterInteraction(EBG.Interactions.SystemInts.DWELL_UNIQUE, a, null, !1)
    },
    reportRichFlashPlayed: function(a) {
        this.handleCounterInteraction(EBG.Interactions.SystemInts.RICH_FLASH_PLAYED, a)
    },
    reportReplay: function(a) {
        this.handleCounterInteraction(EBG.Interactions.SystemInts.REPLAY, a, 0, EBG.ActionType.USER)
    },
    _getTimerInteraction: function(a, b) {
        a = a.toLowerCase();
        if (this.adsData[b] && this.adsData[b][EBG.Interactions.InteractionTypes.TIMER] && this.adsData[b][EBG.Interactions.InteractionTypes.TIMER][a]) return this.adsData[b][EBG.Interactions.InteractionTypes.TIMER][a]
    },
    _subscribeToEvents: function() {
        var a = EBG.adaptor.supportsPageLoadEvents();
        a && (EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_BEFORE_UNLOAD, this.unLoadHandler, this)), EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_UNLOAD, this.unLoadHandler, this)), EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_HIDE, this.unLoadHandler, this)), EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.AD_UNLOAD,
            this.unLoadHandler, this)), EBG.setInterval(this, this.reportInteractionQueues, [], this._timedReport));
        (!a || EBG.adaptor.browser.isMobile()) && this._setNextTimerSeq(!0)
    },
    _handleAllTimersSeq: function() {
        var a = EBG.adaptor.browser.isMobile();
        EBG.adaptor.supportsPageLoadEvents();
        this.reportInteractionQueues(!a);
        this._pausedTimers || (this.handleAllTimers(EBG.Interactions.InteractionManager.HandleAllTimersOptions.REPORT, !a), this.resumeAllTimers());
        this._setNextTimerSeq(!1)
    },
    _setNextTimerSeq: function(a) {
        a = "undefined" !=
            typeof a && a ? this._seqTimersReportData.index = 0 : ++this._seqTimersReportData.index;
        a < this._seqTimersReportData.intervals.length && EBG.runTimed(this, this._handleAllTimersSeq, [], 1E3 * this._seqTimersReportData.intervals[a])
    },
    unLoadHandler: function(a) {
        if (!EBG.intMgr._isUnloadHandled)
            if (a && a.name == EBG.Events.EventNames.AD_UNLOAD) {
                var b = a.dispatcher._adConfig.uid;
                this.adsData[b].isUnloadHandled || (this.handleCounterInteraction(EBG.Interactions.SystemInts.END_OF_SESSION, b, null, null, null), this.handleAllTimers(EBG.Interactions.InteractionManager.HandleAllTimersOptions.REPORT, !1, b));
                this.adsData[b].isUnloadHandled = !0
            } else {
                EBG.intMgr._isUnloadHandled = !0;
                for (b in this.adsData) this.adsData.hasOwnProperty(b) && !this.adsData[b].isUnloadHandled && this.handleCounterInteraction(EBG.Interactions.SystemInts.END_OF_SESSION, b, null, null, a ? null : {
                    value: 1
                });
                this.handleAllTimers(EBG.Interactions.InteractionManager.HandleAllTimersOptions.REPORT, !1)
            }
    },
    getAdDuration: function(a) {
        var b = 0;
        (a = this._getTimerInteraction(EBG.Interactions.SystemInts.AD_DURATION, a)) && (b = a.getElapsedTime());
        return b
    }
};
EBG.declareClass(EBG.Interactions.InteractionManager, EBG.Interactions.StdInteractionManager);
EBG.DataProfile = {
    GENERAL: "general",
    SERVING: "serving",
    URLS: "urls",
    USERINFO: "userInfo",
    PLATFORM: "platform",
    VISIBILITY: "visibility",
    FRAUD: "fraud",
    ERROR: "error",
    INTERACTION: "interaction",
    DEBUG: "debug"
};
EBG.DataPipe = function(a) {
    this._profile = this._completeProfile;
    this._duration = 0;
    this._firstTickDelay = 5E3;
    this._buckets = {};
    this._clientTick = a;
    this._subscribeToUnloadEvents();
    EBG.setInterval(this, function() {
        this._duration++
    }, [], 1E3);
    EBG.runTimed(this, this._tick, [], this._firstTickDelay)
};
EBG.DataPipe.prototype = {
    _data: {
        general: {}
    },
    _tickCount: 0,
    _tickDelay: 1,
    _maxTicks: 1,
    _unloadHandled: !1,
    _completeProfile: {
        general: {
            sid: !0,
            dur: !0,
            dpv: !0,
            ctick: !0,
            ctime: !1,
            adid: !1,
            src: !1
        },
        serving: {
            frmt: !1,
            prtcl: !1,
            dmn: !1,
            srvmd: !1,
            imapp: !1,
            env: !1,
            cb: !1,
            aie: !1,
            size: !1,
            loc: !1,
            afma: !1,
            mraid: !1,
            fmraid: !1,
            dmraid: !1,
            bi: !1,
            wvsb: !1,
            wvrf: !1,
            adkit: !1
        },
        urls: {
            turl: !1,
            rurl: !1,
            pburl: !1,
            aorg: !1
        },
        userInfo: {
            geo: !1,
            ip: !1
        },
        platform: {
            os: !1,
            osv: !1,
            brsrc: !1,
            brsrv: !1,
            brsrt: !1,
            flsv: !1,
            scrw: !1,
            scrh: !1,
            scrl: !1,
            fh: !1,
            fw: !1,
            skype: !1
        },
        fraud: {
            bot: !1,
            injct: !1,
            stack: !1
        },
        visibility: {
            vsbp: !1,
            pct: !1,
            scrsr: !1,
            vsr: !1,
            vsri: !1,
            uvsr: !1,
            vsiab: !1,
            uvsiab: !1
        },
        error: {
            errnum: !1,
            errmsg: !1,
            errfunc: !1,
            errpos: !1
        },
        interaction: {
            IntrN: !1,
            IntrT: !1,
            pid: !1,
            Usr: !1,
            ua: !1,
            AgencyID: !1,
            cid: !1
        },
        debug: {}
    },
    createBucket: function(a, b, c) {
        this._buckets[a] = {
            profile: b,
            url: c
        }
    },
    isBucketExists: function(a) {
        return !!this._buckets[a]
    },
    _clear: function() {
        for (var a in this._profile) {
            var b = this._profile[a],
                c = void 0;
            for (c in b) !this._profile[a][c] && this._data[a] && (this._data[a][c] =
                null, delete this._data[a][c])
        }
    },
    _post: function() {
        var a = {
            x: function() {
                if ("undefined" !== typeof XMLHttpRequest) return new XMLHttpRequest;
                for (var a = ["MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp"], c, d = 0; d < a.length; d++) try {
                    c = new ActiveXObject(a[d]);
                    break
                } catch (e) {}
                return c
            },
            get: function(b, c, d) {
                try {
                    if (c && c.sid) {
                        var b = b + "?json=" + JSON.stringify(c),
                            e = a.x();
                        e.open("GET", b, d);
                        e.send(null)
                    }
                } catch (g) {}
            },
            post: function(b, c, d) {
                try {
                    if (c && c.sid) {
                        var e = a.x();
                        e.open("POST", b, d);
                        e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        e.send(JSON.stringify(c))
                    }
                } catch (g) {}
            }
        };
        return window.mraid ? a.get : a.post
    }(),
    _tick: function() {
        this._unloadHandled || (++this._tickCount, this.flush(), this._tickCount < this._maxTicks && (EBG.runTimed(this, this._tick, [], 1E3 * Math.pow(2, this._tickDelay)), this._tickDelay++))
    },
    send: function(a, b, c) {
        c = c || {};
        if (this._profile[a]) {
            this._data[a] = this._data[a] || {};
            for (var d in b)
                if (("debug" == a || d in this._profile[a]) && EBG.isDefinedNotNull(b[d])) {
                    var e =
                        "";
                    if (EBG.isArray(b[d]))
                        for (var e = [], g = 0; g < b[d].length; ++g) e.push(encodeURIComponent(b[d][g]));
                    else e = encodeURIComponent(b[d]);
                    this._data[a][d] = e
                }
            if (c.constant)
                for (d in this._data[a]) this._profile[a][d] = !0;
            c.flush && this.flush()
        }
    },
    flush: function() {
        for (var a in this._buckets)
            if (this._buckets.hasOwnProperty(a)) {
                var b = this._buckets[a],
                    c = b.profile;
                if ((b = b.url) && c) {
                    this._data.general.dur = this._duration;
                    if (this._clientTick) this._data.general.ctick = +new Date - this._clientTick;
                    for (var d = {}, e = 0; e < c.length; ++e) {
                        var g =
                            c[e],
                            f;
                        for (f in this._data[g]) d[f] = this._data[g][f]
                    }
                    this._post(b, d, !this._unloadHandled)
                }
            }
        this._clear()
    },
    _subscribeToUnloadEvents: function() {
        EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_BEFORE_UNLOAD, this._unloadHandler, this));
        EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_UNLOAD, this._unloadHandler, this));
        EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_HIDE, this._unloadHandler,
            this))
    },
    _unloadHandler: function() {
        if (!this._unloadHandled && (this._unloadHandled = !0, this._tickCount < this._maxTicks)) this._tickCount = this._maxTicks, this.flush()
    }
};
EBG.DataPipeManager = function(a) {
    this._clientTick = a
};
EBG.DataPipeManager.prototype = {
    _pipes: {},
    createPipe: function(a) {
        var b = new EBG.DataPipe(this._clientTick);
        b.send(EBG.DataProfile.GENERAL, {
            sid: a,
            dpv: 2,
            src: "v2"
        });
        this._pipes[a] = b
    },
    getPipe: function(a) {
        this._pipes[a] || this.createPipe(a);
        return this._pipes[a]
    },
    send: function(a, b, c, d) {
        (a = this._pipes[a]) && a.send(b, c, d)
    }
};
EBG.declareNamespace("Positioning");
EBG.Positioning.PositionManager = function() {};
EBG.Positioning.PositionManager.prototype = {
    isVisibile: function(a, b, c) {
        try {
            return 0 < this.calculateVisibilityPercentage(a, b, c) ? !0 : !1
        } catch (d) {}
    },
    calculateVisibilityPercentage: function(a, b, c, d, e, g, f) {
        try {
            var h = 0,
                i = 0,
                j = 0,
                k = !(EBG.adaptor.getDisplayWin() != top && f == EBG.Adaptors.ServingMode.FRIENDLY_IFRAME),
                l = EBG.adaptor.getScrollLeftTop(k, f),
                m = EBG.adaptor.getViewPortMetrics(k, g, f),
                n = this.calculateRightBottowCoordinate(l, m.Width, m.Height),
                p = EBG.adaptor.getPositioningById(a, !k, f);
            if (null != p) {
                a = {
                    X: 0,
                    Y: 0
                };
                try {
                    !k &&
                        window.frameElement && (a = EBG.adaptor.getPositioningByElement(window.frameElement, !1, f))
                } catch (r) {
                    a = {
                        X: 0,
                        Y: 0
                    }
                }
                p.X += a.X;
                p.Y += a.Y;
                "undefined" != typeof d && (p.X += d);
                "undefined" != typeof e && (p.Y += e);
                var q = this.calculateRightBottowCoordinate(p, b, c),
                    j = b * c,
                    i = this.calculateVisibleArea(l, n, p, q),
                    h = j ? i / j : 0
            }
            return h
        } catch (o) {}
    },
    calculateRightBottowCoordinate: function(a, b, c) {
        var d = {
            X: 0,
            Y: 0
        };
        d.X = a.X + b;
        d.Y = a.Y + c;
        return d
    },
    calculateVisibleArea: function(a, b, c, d) {
        try {
            var e = 0,
                g = 0;
            if (c.Y == d.Y && c.X == d.X || b.X <= a.X || b.Y <= a.Y) return 0;
            c.X <= a.X && a.X <= d.X ? e = b.X <= d.X ? b.X - a.X : d.X - a.X : a.X <= c.X && c.X <= b.X && (e = d.X >= b.X ? b.X - c.X : d.X - c.X);
            c.Y <= a.Y && a.Y <= d.Y ? g = b.Y <= d.Y ? b.Y - a.Y : d.Y - a.Y : a.Y <= c.Y && c.Y <= b.Y && (g = d.Y >= b.Y ? b.Y - c.Y : d.Y - c.Y);
            return e * g
        } catch (f) {}
    },
    getFullRectWithClip: function(a, b) {
        var c = null,
            c = EBG.adaptor.getDisplayWin() === EBG.adaptor.getPageWin(),
            d = null;
        if (a) {
            var c = EBG.adaptor.getPositioningByElement(a, !c, b),
                d = {
                    width: a.offsetWidth,
                    height: a.offsetHeight
                },
                e = a.style.clip,
                g = 0,
                f = 0,
                h = d.height,
                i = d.width;
            "" != e && (e = e.substring(e.indexOf("(") +
                1).replace(/,/g, "").replace(/ /g, ""), e = e.split("px"), f = parseInt(e[0]), i = parseInt(e[1]), h = parseInt(e[2]), g = parseInt(e[3]));
            d.left = c.X + g;
            d.top = c.Y + f;
            d.width -= d.width - i;
            d.width -= g;
            d.height -= d.height - h;
            d.height -= f;
            d.right = d.left + d.width;
            d.bottom = d.top + d.height
        }
        return d
    },
    isOverlapping: function(a, b, c) {
        if (!a || 0 == a.offsetWidth && 0 == a.offsetHeight || !b || 0 == b.offsetWidth && 0 == b.offsetHeight) return !1;
        a = EBG.posHelper.getFullRectWithClip(a, c);
        b = EBG.posHelper.getFullRectWithClip(b, c);
        return !a || !b || a.bottom < b.top ||
            a.top > b.bottom || a.right < b.left || a.left > b.right ? !1 : !0
    }
};
EBG.declareClass(EBG.Positioning.PositionManager, null);
EBG.declareNamespace("RichModules");
EBG.RichModules.BasicVisibilityProvider = function(a, b, c) {
    this._resObjId = a;
    this._res = EBG.adaptor.getElementById(a);
    this._adConfig = this.adConfig = b;
    this._options = c || {};
    this._subscribeToEvents();
    this._trackElementLocation()
};
EBG.RichModules.BasicVisibilityProvider._isAvailable = function() {
    return !1
};
EBG.RichModules.BasicVisibilityProvider.prototype = {
    name: "Basic",
    _isStarted: !1,
    _calculateVisibilityPercentage: function() {
        return 0
    },
    _getViewPortMetrics: function() {
        return null
    },
    _dispatchCheckVisibility: function(a) {
        if (this._isStarted) {
            var b = new EBG.Events.Event(EBG.Events.EventNames.VISIBILITY_CHECK);
            b.dispatcher = this;
            b.eventData = a;
            if (EBG.isObj(this._options.customData)) b.eventData.customData = this._options.customData;
            b.timing = EBG.Events.EventTiming.ONTIME;
            EBG.eventMgr.dispatchEvent(b)
        }
    },
    _dispatchVisibilityHidden: function() {
        var a =
            new EBG.Events.Event(EBG.Events.EventNames.VISIBILITY_HIDDEN);
        a.dispatcher = this;
        a.timing = EBG.Events.EventTiming.ONTIME;
        EBG.eventMgr.dispatchEvent(a)
    },
    _subscribeToEvents: function() {
        var a = new EBG.Events.EventSubscription(EBG.Events.EventNames.EXPAND, function(a) {
            a.eventData.props && a.eventData.props.asset.id == this._resObjId && this._trackElementLocation()
        }, this);
        a.timing = EBG.Events.EventTiming.ONTIME;
        a.dispatcherFilters = {
            "_adConfig.rnd": this.adConfig.rnd
        };
        EBG.eventMgr.subscribeToEvent(a)
    },
    updateResourceObjId: function(a) {
        EBG.elementWatcher &&
            EBG.elementWatcher.unwatch(null, this._res, this);
        this._resObjId = a;
        this._res = EBG.adaptor.getElementById(a);
        this._trackElementLocation()
    },
    _isVisible: function() {
        return !1
    },
    _calculateVisibilityResult: function() {
        var a = {};
        try {
            a.assetId = this._resObjId, a.percentage = this._calculateVisibilityPercentage(), a.viewPort = this._getViewPortMetrics()
        } catch (b) {}
        return a
    },
    start: function() {
        this._isStarted = !0
    },
    _trackElementLocation: function() {
        if (this._res = EBG.adaptor.getElementById(this._resObjId)) {
            var a = {
                clip: !0,
                relativeToWindow: !1
            };
            EBG.elementWatcher && EBG.elementWatcher.watch(this._res, this._elemWatcherCallback, this, null, a)
        } else EBG.runTimed(this, this._trackElementLocation, [], 500)
    },
    _elemWatcherCallback: function(a) {
        this.onElementMoved();
        null == a && this._trackElementLocation()
    },
    _triggerVisibilityCheck: function() {
        this._dispatchCheckVisibility(this._calculateVisibilityResult())
    },
    onElementMoved: function() {}
};
EBG.declareClass(EBG.RichModules.BasicVisibilityProvider, null);
EBG.declareNamespace("RichModules");
EBG.RichModules.GeometricVisibilityProvider = function(a, b, c) {
    EBG.callSuperConstructor(EBG.RichModules.GeometricVisibilityProvider, this, [a, b, c])
};
EBG.RichModules.GeometricVisibilityProvider.prototype = {
    name: "Geometric",
    _focusOnResourceElem: null,
    _justReceivedFocusOnPage: null,
    _reachedMaxAdDuration: !1,
    _calculateVisibilityPercentage: function(a) {
        try {
            if (!EBG.adaptor.isPageVisible(this.adConfig.isInstream)) return 0;
            var a = a || {},
                b = this._getAssetRect(a.resourceObjId || this._resObjId),
                c = this._getViewPortRect();
            b.top += ~~a.offsetY;
            b.bottom += ~~a.offsetY;
            b.left += ~~a.offsetX;
            b.right += ~~a.offsetX;
            if (EBG.isDefined(a.width)) b.width = a.width, b.right = b.left + a.width;
            if (EBG.isDefined(a.height)) b.height = a.height, b.bottom = b.top + a.height;
            if (this._intersect(b, c)) {
                var d = this._overlap(c, b);
                this._visibleRect = d;
                return ~~(100 * (d.width * d.height / (b.width * b.height)))
            }
            return 0
        } catch (e) {
            return 0
        }
    },
    _getAssetRect: function(a) {
        a = EBG.isElementOrNode(a) ? a : EBG.adaptor.getElementById(a);
        (a = EBG.adaptor.getBoundingClientRect(a, {
            clip: !0,
            relativeToTop: !0
        })) || (a = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        });
        return a
    },
    _getViewPortMetrics: function() {
        var a = EBG.adaptor._getCurrentWindow(void 0,
                this.adConfig.actualServingMode),
            b = EBG.adaptor.getWindowViewPortMetrics(a);
        if (EBG.adaptor.browser.isFF() && "undefined" != typeof a.outerWidth && EBG.adaptor.serving.detectServingMode(!0) == EBG.Adaptors.ServingMode.IFRAME && ("undefined" == typeof this.adConfig || !EBG.isDefined(this.adConfig.UiVz) || !this.adConfig.UiVz) && !EBG.iframeLocation && "undefined" != typeof this.adConfig && this.adConfig.aiE && !this.adConfig.aiE.iflExists) b.Width = a.outerWidth, b.Height = a.outerHeight, EBG.isDefined(a.scrollMaxX) && 0 < a.scrollMaxX &&
            EBG.isDefined(EBG.adaptor.scrollBarWidth) && 0 < EBG.adaptor.scrollBarWidth && (b.Height -= EBG.adaptor.scrollBarWidth), EBG.isDefined(a.scrollMaxY) && 0 < a.scrollMaxY && EBG.isDefined(EBG.adaptor.scrollBarHeight) && 0 < EBG.adaptor.scrollBarHeight && (b.Width -= EBG.adaptor.scrollBarHeight);
        return b
    },
    _getViewPortRect: function() {
        var a = this._getViewPortMetrics();
        return {
            top: 0,
            left: 0,
            right: a.Width,
            bottom: a.Height
        }
    },
    _overlap: function(a, b) {
        var c = {
            top: -1,
            right: -1,
            bottom: -1,
            left: -1
        };
        if (!this._intersect(a, b)) return c;
        c.top = Math.max(a.top,
            b.top);
        c.left = Math.max(a.left, b.left);
        c.right = Math.min(a.right, b.right);
        c.bottom = Math.min(a.bottom, b.bottom);
        c.width = c.right - c.left;
        c.height = c.bottom - c.top;
        return c
    },
    _intersect: function(a, b) {
        return !(b.left > a.right || b.right < a.left || b.top > a.bottom || b.bottom < a.top)
    },
    _isVisible: function(a) {
        var a = a || {},
            b = EBG.adaptor.getBoundingClientRect(this._res, {
                clip: !0
            });
        return !!this._calculateVisibilityPercentage({
            resourceObjId: a.resourceObjId || this._resObjId,
            width: a.width || b.width,
            height: a.height || b.height,
            offsetX: a.offsetX ||
                this.adConfig.offsetX,
            offsetY: a.offsetY || this.adConfig.offsetY,
            isUIVZ: a.isUIVZ || this.adConfig.UiVz,
            actualServingMode: a.actualServingMode || this.adConfig.actualServingMode
        })
    },
    _subscribeToEvents: function() {
        try {
            EBG.callSuperFunction(EBG.RichModules.GeometricVisibilityProvider, this, "_subscribeToEvents");
            EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_RESIZE, this._pageResizeHandler, this));
            EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_SCROLL,
                this._pageScrollHandler, this));
            if (!EBG.adaptor._getVisibilityEventName() || EBG.adaptor.browser.isAndroidNative() && 4.4 > EBG.adaptor.browser.getVersion()) EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_FOCUS, this._pageFocusHandler, this)), EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_BLUR, this._pageBlurHandler, this)), this._subscribeToElementEvents();
            var a = new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_HIDDEN,
                this._pageHiddenHandler, this);
            a.isDocumentEvent = !0;
            EBG.eventMgr.subscribeToEvent(a);
            a = new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_VISIBLE, this._pageVisibleHandler, this);
            a.isDocumentEvent = !0;
            EBG.eventMgr.subscribeToEvent(a);
            EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.RICH_FLASH_PLAYED, this.onChange, this))
        } catch (b) {}
    },
    _subscribeToElementEvents: function() {
        var a = this,
            b = function() {
                a._resourceBlurHandler()
            },
            c = new EBG.Events.EventSubscription("focus",
                function() {
                    a._resourceFocusHandler()
                }, this);
        c.isElementEvent = !0;
        c.elementId = this._resObjId;
        EBG.eventMgr.subscribeToEvent(c);
        if (EBG.adaptor.browser.isIE() && this.actualServingMode != EBG.Adaptors.ServingMode.SCRIPT) c = new EBG.Events.EventSubscription("blur", b, this), c.isElementEvent = !0, c.elementId = this._resObjId, EBG.eventMgr.subscribeToEvent(c)
    },
    updateResourceObjId: function(a) {
        EBG.callSuperFunction(EBG.RichModules.GeometricVisibilityProvider, this, "updateResourceObjId", [a]);
        EBG.adaptor._getVisibilityEventName() ||
            this._subscribeToElementEvents()
    },
    _pageVisibleHandler: function() {
        this._triggerVisibilityCheck()
    },
    _pageHiddenHandler: function() {
        this._dispatchVisibilityHidden();
        this.adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE && this._dispatchCheckVisibility({
            percentage: 0,
            viewPort: this._getViewPortMetrics()
        })
    },
    _resourceFocusHandler: function() {
        this._focusOnResourceElem = !0;
        EBG.runTimed(this, function() {
            this._focusOnResourceElem = !1
        }, [], 60);
        this._pageFocusHandler()
    },
    _resourceBlurHandler: function() {
        EBG.runTimed(this,
            function() {
                !this._justReceivedFocusOnPage && !this._focusOnResourceElem && this._pageBlurHandler()
            }, [], 30)
    },
    _pageFocusHandler: function() {
        this._justReceivedFocusOnPage = !0;
        EBG.runTimed(this, function() {
            this._justReceivedFocusOnPage = !1
        }, [], 60);
        this._triggerVisibilityCheck()
    },
    _pageBlurHandler: function() {
        EBG.runTimed(this, function() {
            !this._justReceivedFocusOnPage && !this._getAdHasFocus() && this._pageHiddenHandler()
        }, [], 30)
    },
    _getAdHasFocus: function() {
        for (var a = this._getAllAdVisibilityProviders(), b = 0; b < a.length; b++)
            if (a[b]._focusOnResourceElem) return !0;
        return !1
    },
    _getAllAdVisibilityProviders: function() {
        var a = [],
            b = EBG.ads[this._adConfig.uid],
            c;
        for (c in b) b.hasOwnProperty(c) && b[c] instanceof EBG.RichModules.VisibilityManager && b[c]._visibilityProvider && a.push(b[c]._visibilityProvider);
        return a
    },
    _pageScrollHandler: function() {
        this._triggerVisibilityCheck()
    },
    _pageResizeHandler: function() {
        if (!this._resizeTimeOut) {
            var a = this;
            this._resizeTimeOut = setTimeout(function() {
                a._resizeTimeOut = null;
                a._triggerVisibilityCheck()
            }, 100)
        }
    },
    _maxAdDurationHandler: function() {
        this._reachedMaxAdDuration = !0
    },
    start: function() {
        EBG.callSuperFunction(EBG.RichModules.GeometricVisibilityProvider, this, "start");
        var a = 3;
        (function() {
            a-- && (this._triggerVisibilityCheck(), EBG.runTimed(this, arguments.callee, [], 1E3))
        }).apply(this)
    },
    onElementMoved: function() {
        EBG.callSuperFunction(EBG.RichModules.GeometricVisibilityProvider, this, "onElementMoved");
        this._triggerVisibilityCheck()
    },
    onChange: function() {
        this._triggerVisibilityCheck()
    },
    _calculateVisibilityResult: function() {
        var a = EBG.callSuperFunction(EBG.RichModules.GeometricVisibilityProvider,
            this, "_calculateVisibilityResult");
        a.visibleRect = this._visibleRect;
        return a
    }
};
EBG.declareClass(EBG.RichModules.GeometricVisibilityProvider, EBG.RichModules.BasicVisibilityProvider);
EBG.RichModules.MouseVisibilityProvider = function(a, b, c) {
    EBG.callSuperConstructor(EBG.RichModules.MouseVisibilityProvider, this, [a, b, c]);
    try {
        this._subscribeToEvents();
        this._scrollWidth = EBG.adaptor.getScrollerWidth();
        var d = this.adConfig.displayWin || EBG.adaptor.getDisplayWin();
        this._screenResolution = {
            width: d.screen.availWidth,
            height: d.screen.availHeight
        };
        this._screenOriginalResolution = {
            width: d.screen.availWidth,
            height: d.screen.availHeight
        };
        if (!this._browserStateSupported()) this._resolutionBaseScreenSize =
            this._resolutionToScreenSize(this._screenResolution), this._resourceInitialPosition = {
                top: d.screenTop,
                left: d.screenLeft
            };
        var e = this._getDimensions();
        this._resourceFullSize = e.width * e.height;
        this._mouseMoveEventInvoker()
    } catch (g) {}
};
EBG.RichModules.MouseVisibilityProvider.prototype = {
    name: "Mouse",
    isTimedBaseVisibility: !0,
    _isStarted: !1,
    _resObj: null,
    _lastViewPort: null,
    _resourceRect: null,
    _resourceFullSize: null,
    _screenResolution: null,
    _screenOriginalResolution: null,
    _screenInitialPosition: {
        top: 0,
        left: 0
    },
    _resolutionBaseScreenSize: null,
    _intervalId: null,
    _calculateVisibilityPercentage: function() {
        if (!this._isReady) return -1;
        var a = this._getViewPortRect(),
            b = this._resourceRect;
        if (!a || !b) return -1;
        var c = 0;
        if (EBG.adaptor.isPageVisible()) c = this._getDimensions(),
            this._resourceFullSize = c.width * c.height, c = 100 * (EBG.posHelper.calculateVisibleArea({
                X: a.left,
                Y: a.top
            }, {
                X: a.right,
                Y: a.bottom
            }, {
                X: b.left,
                Y: b.top
            }, {
                X: b.right,
                Y: b.bottom
            }) / this._resourceFullSize);
        return c
    },
    _calcResourceRect: function(a) {
        var b;
        if (8 == EBG.adaptor.browser._browserVer && 8 == EBG.adaptor.browser.getDocumentMode()) {
            var c = (b = EBG.adaptor.getElementById(this._resObjId)) && b.getBoundingClientRect ? b.getBoundingClientRect() : {
                top: 0,
                left: 0
            };
            b = a.screenY - (a.clientY - c.top);
            a = a.screenX - (a.clientX - c.left)
        } else b =
            a.screenY - a.offsetY, a = a.screenX - a.offsetX;
        c = this._getDimensions();
        return {
            top: b,
            left: a,
            bottom: b + c.height,
            right: a + c.width
        }
    },
    _getViewPortRect: function() {
        var a = null,
            b = this._getWindowRect();
        b && (a = {
            top: 0 > b.top ? 0 : b.top,
            left: 0 > b.left ? 0 : b.left,
            bottom: b.bottom > this._screenResolution.height ? this._screenResolution.height : b.bottom,
            right: b.right > this._screenResolution.width ? this._screenResolution.width : b.right
        });
        return a
    },
    _getWindowRect: function() {
        var a = null,
            b = this.adConfig.displayWin || EBG.adaptor.getDisplayWin();
        if (this._browserStateSupported()) var a = this._isFullScreen(b),
            c = !a ? 6 : 0,
            d = b.screenX + c,
            e = b.screenY + 70,
            a = {
                top: e,
                left: d,
                bottom: e + b.outerHeight - this._scrollWidth - (!a ? 70 : 0),
                right: d + b.outerWidth - this._scrollWidth + c
            };
        else this._resolutionBaseScreenSize && (b = this._getUnsupportedWindowTopLeft(b), a = {
            top: b.top,
            left: b.left,
            bottom: b.top + this._resolutionBaseScreenSize.height,
            right: b.left + this._resolutionBaseScreenSize.width
        });
        return a
    },
    _getUnsupportedWindowTopLeft: function(a) {
        var b = {
                top: this._screenInitialPosition.top,
                left: this._screenInitialPosition.left
            },
            c = 0 < a.screenLeft ? a.screenLeft : 0,
            d = c - this._resourceInitialPosition.left,
            e = (0 < d ? this._screenOriginalResolution.width - this._resourceInitialPosition.left % this._screenOriginalResolution.width : this._resourceInitialPosition.left % this._screenOriginalResolution.width) + 1,
            g = 0;
        if (Math.abs(d) > e && 0 <= c && c < this._screenResolution.width) g = (1 + Math.floor(Math.abs(Math.abs(d) - e) / this._screenOriginalResolution.width)) * this._screenOriginalResolution.width, b.left = 0 > d ? b.left - g : b.left +
            g;
        a = 0 < a.screenTop ? a.screenTop : 0;
        d = a - this._resourceInitialPosition.top;
        e = (0 < d ? this._screenOriginalResolution.height - this._resourceInitialPosition.top % this._screenOriginalResolution.height : this._resourceInitialPosition.top % this._screenOriginalResolution.height) + 1;
        if (Math.abs(d) > e && 0 <= a && a < this._screenResolution.height) g = (1 + Math.floor(Math.abs(Math.abs(d) - e) / this._screenOriginalResolution.height)) * this._screenOriginalResolution.height, b.top = 0 > d ? b.top - g : b.top + g;
        return b
    },
    _isFullScreen: function(a) {
        return !this._browserStateSupported() ?
            !0 : a.screenX + a.outerWidth == this._screenOriginalResolution.width
    },
    _getViewPortMetrics: function() {
        var a = this._getViewPortRect();
        return a ? {
            Width: a.right - a.left,
            Height: a.bottom - a.top
        } : null
    },
    _isVisible: function() {
        return !!this._calculateVisibilityPercentage()
    },
    _mouseMoveEventInvoker: function() {
        if ((this._resObj = this._resObj ? this._resObj : EBG.adaptor.getElementById(this._resObjId)) && this._resObj.parentNode && this._resObj.parentNode.fireEvent) {
            var a = this;
            this._resObj.parentNode.attachEvent("onmousemove", function(b) {
                var c =
                    a._calcResourceRect(b),
                    d = a._getViewPortRect();
                if (!a._resourceRect) a._screenInitialPosition.left = Math.floor(b.screenX / a._screenOriginalResolution.width) * a._screenOriginalResolution.width, a._screenInitialPosition.top = Math.floor((50 < b.screenY ? b.screenY - 50 : 0) / a._screenOriginalResolution.height) * a._screenOriginalResolution.height;
                a._handleMultipleScreen(b);
                a._handleRecievedData(c, d)
            });
            this._intervalId = EBG.setInterval(this._resObj.parentNode, function() {
                this.fireEvent("onmousemove")
            }, [], EBG.RichModules.VisibilityManager.VisibilityCheckInterval)
        } else EBG.runTimed(this,
            this._mouseMoveEventInvoker, [], EBG.RichModules.VisibilityManager.VisibilityCheckInterval)
    },
    _handleMultipleScreen: function(a) {
        var b = this._getWindowRect();
        if (b) {
            if (a.screenY > this._screenOriginalResolution.height) {
                var c = b.bottom > a.screenY ? b.bottom : a.screenY;
                if (this._screenResolution.height < c) this._screenResolution.height = c
            }
            if (a.screenX > this._screenOriginalResolution.width && (a = b.right > a.screenX ? b.right : a.screenX, this._screenResolution.width < a)) this._screenResolution.width = a
        }
    },
    _handleRecievedData: function(a,
        b) {
        if (!this._resourceRect || this._checkRectanglesDifferent(this._resourceRect, a, 1) || this._checkRectanglesDifferent(this._lastViewPort, b, 1)) this._resourceRect = a, this._lastViewPort = b, this._triggerCalculation()
    },
    _checkRectanglesDifferent: function(a, b, c) {
        for (var d in a)
            if (a.hasOwnProperty(d) && Math.abs(a[d] - b[d]) > c) return !0;
        return !1
    },
    _subscribeToEvents: function() {
        EBG.callSuperFunction(EBG.RichModules.BasicVisibilityProvider, this, "_subscribeToEvents");
        var a = new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_HIDDEN,
            this._pageHiddenHandler, this);
        a.isDocumentEvent = !0;
        EBG.eventMgr.subscribeToEvent(a);
        a = new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_VISIBLE, this._pageVisibleHandler, this);
        a.isDocumentEvent = !0;
        EBG.eventMgr.subscribeToEvent(a)
    },
    _pageVisibleHandler: function() {
        this._triggerVisibilityCheck()
    },
    _pageHiddenHandler: function() {
        this._dispatchVisibilityHidden();
        this.adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE && this._dispatchCheckVisibility({
            percentage: 0,
            viewPort: this._getViewPortMetrics()
        })
    },
    _resolutionToScreenSize: function(a) {
        var b = {
            width: a.width,
            height: a.height
        };
        1680 == a.width && 1050 == a.height ? b = {
            width: 1444,
            height: 806
        } : 1366 == a.width && 768 == a.height ? b = {
            width: 1173,
            height: 562
        } : 1360 == a.width && 768 == a.height ? b = {
            width: 1167,
            height: 562
        } : 1280 == a.width && 1024 == a.height ? b = {
            width: 1097,
            height: 785
        } : 1280 == a.width && 960 == a.height ? b = {
            width: 1097,
            height: 730
        } : 1152 == a.width && 864 == a.height ? b = {
            width: 985,
            height: 645
        } : 1024 == a.width && 768 == a.height ? b = {
            width: 875,
            height: 562
        } : 800 == a.width && 600 == a.height && (b = {
            width: 680,
            height: 416
        });
        return b
    },
    _triggerCalculation: function() {
        if (this._isReady || this._isStarted && this._resourceRect) this._isReady = !0, this._dispatchCheckVisibility(this._calculateVisibilityResult())
    },
    _getDimensions: function() {
        if (!this.adConfig.width || !this.adConfig.height || "100%" == this.adConfig.width || "100%" == this.adConfig.height) {
            var a = EBG.adaptor.getElementById(this.adConfig.placeHolderId),
                a = EBG.adaptor.getBoundingClientRect(a) || {
                    width: 0,
                    height: 0
                };
            return {
                width: a.width,
                height: a.height
            }
        }
        return {
            width: this.adConfig.width,
            height: this.adConfig.height
        }
    },
    _browserStateSupported: function() {
        return 9 <= EBG.adaptor.browser._browserVer && 9 <= EBG.adaptor.browser.getDocumentMode()
    },
    updateResourceObjId: function(a) {
        this._resObj = null;
        this._intervalId && EBG.clearInterval(this._intervalId);
        EBG.callSuperFunction(EBG.RichModules.MouseVisibilityProvider, this, "updateResourceObjId", [a]);
        this._mouseMoveEventInvoker()
    },
    start: function() {
        EBG.callSuperFunction(EBG.RichModules.MouseVisibilityProvider, this, "start");
        this._isStarted = !0;
        this._triggerCalculation()
    }
};
EBG.declareClass(EBG.RichModules.MouseVisibilityProvider, EBG.RichModules.BasicVisibilityProvider);
EBG.declareNamespace("RichModules");
EBG.RichModules.VisibilityManager = function(a, b, c) {
    this._adConfig = this.adConfig = a;
    this._resObjId = b;
    this._res = EBG.adaptor.getElementById(b);
    this.actualServingMode = this.adConfig.actualServingMode;
    this._averageLastCalcTime = (new Date).getTime();
    this._options = c || {};
    this._isPanel = this._options.isPanel;
    this._createIntMgrWrapper();
    this._dpm = EBG.dataPipeMgr.getPipe(this.adConfig.sID);
    this.checkVisibilityCounter = 0;
    this._shouldInitialize() && this._tryInitProvider()
};
EBG.RichModules.VisibilityManager.ThreholdType = {
    IAB: 0,
    Agency: 1,
    Advertiser: 2
};
EBG.RichModules.VisibilityManager.VisibilityCheckInterval = 100;
EBG.RichModules.VisibilityManager.prototype = {
    adConfig: null,
    _resObjId: null,
    _visibilityData: null,
    _visRecordable: !1,
    _lastVisPercentage: 0,
    _lastVisViewPort: null,
    _lastVisRect: null,
    _averageVisibility: 0,
    _averageScreenShare: 0,
    _averageAdDuration: 0,
    _averageLastCalcTime: null,
    _adCoveragePercentage: 0,
    actualServingMode: EBG.Adaptors.ServingMode.SCRIPT,
    _visibilityProvider: null,
    _availableVisibilityProviders: "GeometricVisibilityProvider,SafeFrameVisibilityProvider,IntersectionObserverVisibilityProvider,MouseVisibilityProvider,GridVisibilityProvider,FFVisibilityProvider,MraidVisibilityProvider".split(","),
    _visibilityProviderName: null,
    _providersAvailability: {
        GeometricVisibilityProvider: function(a) {
            var b = !0,
                c = a.actualServingMode == EBG.Adaptors.ServingMode.IFRAME,
                d = EBG.Initializer._getAdClass({
                    tn: a.templateName
                }),
                e = !d.requiresIframeBust && !a.UiVz,
                a = d.requiresIframeBust && !EBG.iframeLocation && a.aiE && !a.aiE.iflExists;
            if (c && (e || a) || EBG.adaptor.isInApp()) b = !1;
            return b
        },
        IntersectionObserverVisibilityProvider: function(a) {
            return window.IntersectionObserver || a.actualServingMode == EBG.Adaptors.ServingMode.IFRAME &&
                window.context && context.observeIntersection && EBG.isFunc(context.observeIntersection) && "Html5ExpBanner" != a.templateName
        },
        FFVisibilityProvider: function(a) {
            return a.actualServingMode == EBG.Adaptors.ServingMode.IFRAME && EBG.isDefined(window.mozInnerScreenY) && EBG.isDefined(window.mozInnerScreenX)
        },
        GridVisibilityProvider: function() {
            var a = !1,
                b = EBG.adaptor.browser.getDocumentMode() || 5;
            EBG.adaptor.browser.isIE() && 10 < b && (a = !0);
            return a
        },
        MouseVisibilityProvider: function() {
            var a = !1,
                b = EBG.adaptor.browser.getDocumentMode() ||
                5;
            EBG.adaptor.browser.isIE() && 11 > b && 11 > EBG.adaptor.browser._browserVer && (a = !0);
            return a
        },
        SafeFrameVisibilityProvider: function() {
            return !!EBG.adaptor.isSafeFrame()
        },
        MraidVisibilityProvider: function(a) {
            var b = a.actualServingMode == EBG.Adaptors.ServingMode.IFRAME;
            return EBG.adaptor.isInApp() && !b ? (a.UiVz = !1, !0) : !1
        }
    },
    _init: function(a) {
        this._visibilityProvider = new(a || window).EBG.RichModules[this._visibilityProviderName](this._resObjId, this._adConfig, this._options);
        this._dpm.send(EBG.DataProfile.VISIBILITY, {
            vsbp: this.getVisibilityProviderNum()
        });
        this._initializeVisibilityData();
        this._subscribeToEvents();
        this._visRecordable = !0;
        this._reportVisibilityRecordable();
        a = function() {
            this._visibilityProvider.start()
        };
        this.adConfig.adStarted ? a.apply(this) : (a = new EBG.Events.EventSubscription(EBG.Events.EventNames.AD_START, a, this), a.timing = EBG.Events.EventTiming.ONTIME, EBG.eventMgr.subscribeToEvent(a))
    },
    _createIntMgrWrapper: function() {
        var a = function() {};
        this._intMgrWrapper = {};
        for (var b = ["handleCounterInteraction",
                "updateTimer", "startTimer", "stopTimer", "clearTimer"
            ], c = 0; c < b.length; c++) this._intMgrWrapper[b[c]] = this._options.muteInteractions ? a : function(a) {
            return function() {
                return EBG.intMgr[a].apply(EBG.intMgr, arguments)
            }
        }(b[c])
    },
    checkVisibility: function(a) {
        a = a ? EBG.cloneObj(a) : {};
        if (!EBG.isDefined(a.percentage) || !EBG.isNumber(a.percentage)) a.percentage = this.calculateVisibilityPercentage();
        if (EBG.isDefinedNotNull(a.percentage) && 0 <= a.percentage) {
            if (!("viewPort" in a)) a.viewPort = this.getViewPortMetrics();
            if (this._adCoveragePercentage) a.percentage =
                Math.max(a.percentage - this._adCoveragePercentage, 0);
            this._res = EBG.adaptor.getElementById(this._resObjId);
            try {
                "visible" == window.getComputedStyle(this._res).getPropertyValue("visibility") ? this.checkVisibilityCounter = 0 : (a.percentage = 0, 3 >= ++this.checkVisibilityCounter && (EBG.runTimed(this, this.checkVisibility, [], 500), 1 == this.checkVisibilityCounter && EBG.runTimed(this, function() {
                    this.checkVisibilityCounter = 0
                }, [], 3E3)))
            } catch (b) {}
            this.adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE && this._calculateAverages(a);
            for (var c in EBG.RichModules.VisibilityManager.ThreholdType) EBG.RichModules.VisibilityManager.ThreholdType.hasOwnProperty(c) && this._visibilityData[EBG.RichModules.VisibilityManager.ThreholdType[c]] && this._visibilityData[EBG.RichModules.VisibilityManager.ThreholdType[c]].isActive && this._execCheckVisibility(a.percentage, EBG.RichModules.VisibilityManager.ThreholdType[c])
        }
    },
    updateResourceObjId: function(a) {
        if (this._visibilityProvider && a) this._collectTimersHandler(), this._resObjId = a, this._res = EBG.adaptor.getElementById(a),
            this._visibilityProvider.updateResourceObjId(a);
        else if (a) this._resObjId = a, this._res = EBG.adaptor.getElementById(a)
    },
    _shouldInitialize: function() {
        var a = EBG.Initializer._getAdClass({
            tn: this.adConfig.templateName
        });
        return this.adConfig.actualServingMode == EBG.Adaptors.ServingMode.IFRAME && !a.requiresIframeBust && this.adConfig.UiVz && !EBG.adaptor.isInApp() ? !1 : !0
    },
    _tryInitProvider: function() {
        (this._visibilityProviderName = this._getVisibilityProvider(this._resObjId, this.adConfig)) ? (this._adConfig.visibility.isAvailable = !0, EBG.RichModules[this._visibilityProviderName] ? this._init() : EBG.adaptor.loadModule(this._visibilityProviderName, this._adConfig, this._init, this)) : this._adConfig.visibility.isAvailable = !1
    },
    _getVisibilityProvider: function(a, b) {
        for (var c = 0; c < this._availableVisibilityProviders.length; c++) {
            var d = this._availableVisibilityProviders[c];
            if (this._providersAvailability[d] && this._providersAvailability[d](b, this)) return d
        }
        return null
    },
    calculateVisibilityPercentage: function(a, b, c, d, e, g, f) {
        var h = 0;
        EBG.adaptor.isPageVisible(this.adConfig.isInstream) ?
            this._visibilityProvider && (h = this._visibilityProvider._calculateVisibilityPercentage({
                resourceObjId: a,
                width: b,
                height: c,
                offsetX: d,
                offsetY: e,
                isUIVZ: g,
                actualServingMode: f
            })) : h = 0;
        return h
    },
    isVisibile: function(a, b, c) {
        var d = !1;
        if (EBG.adaptor.isPageVisible(this.adConfig.isInstream) && this._visibilityProvider) try {
            d = !!this._visibilityProvider._isVisible({
                resourceObjId: a,
                width: b,
                height: c
            })
        } catch (e) {}
        return d
    },
    isIABVisibile: function() {
        return this.calculateVisibilityPercentage() >= this.adConfig.visibility.iabMinSurface
    },
    getViewPortMetrics: function() {
        var a = null;
        this._visibilityProvider && (a = this._visibilityProvider._getViewPortMetrics());
        return a
    },
    _subscribeToEvents: function() {
        try {
            var a = new EBG.Events.EventSubscription(EBG.Events.EventNames.VISIBILITY_CHECK, this._visibilityCheckHandler, this);
            a.dispatcherFilters = {
                "adConfig.rnd": this.adConfig.rnd
            };
            a.timing = EBG.Events.EventTiming.ONTIME;
            EBG.eventMgr.subscribeToEvent(a);
            if (this.adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE) a = new EBG.Events.EventSubscription(EBG.Events.EventNames.COLLECT_TIMERS,
                this._collectTimersHandler, this), a.timing = EBG.Events.EventTiming.BEFORE, EBG.eventMgr.subscribeToEvent(a);
            var b = new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_HIDDEN, this._stopTimersHandler, this);
            b.isDocumentEvent = !this._adConfig.isAMP;
            EBG.eventMgr.subscribeToEvent(b);
            b = new EBG.Events.EventSubscription(EBG.Events.EventNames.VISIBILITY_HIDDEN, this._stopTimersHandler, this);
            EBG.eventMgr.subscribeToEvent(b);
            b = new EBG.Events.EventSubscription(this._isPanel ? "P" : "" + EBG.Events.EventNames.AD_STACKING,
                this._adStackingHandler, this);
            b.dispatcherFilters = {
                "_adConfig.rnd": this.adConfig.rnd
            };
            EBG.eventMgr.subscribeToEvent(b);
            b = new EBG.Events.EventSubscription(EBG.Events.EventNames.EXPAND, function(a) {
                (a.eventData == this.adConfig.panelName || a.eventData.props && a.eventData.props.asset.id == this._resObjId || a.eventData.props && a.eventData.props.panel.id == this._resObjId) && this.checkVisibility()
            }, this);
            b.dispatcherFilters = {
                "_adConfig.rnd": this.adConfig.rnd
            };
            b.timing = EBG.Events.EventTiming.AFTER;
            EBG.eventMgr.subscribeToEvent(b);
            b.timing = EBG.Events.EventTiming.BEFORE;
            EBG.eventMgr.subscribeToEvent(b);
            b = new EBG.Events.EventSubscription(EBG.Events.EventNames.ELEMENT_SHOWN, function() {
                this.checkVisibility()
            }, this);
            b.dispatcherFilters = {
                "_adConfig.rnd": this.adConfig.rnd
            };
            b.timing = EBG.Events.EventTiming.AFTER;
            EBG.eventMgr.subscribeToEvent(b);
            b = new EBG.Events.EventSubscription(EBG.Events.EventNames.ELEMENT_HIDDEN, function() {
                this.checkVisibility()
            }, this);
            b.dispatcherFilters = {
                "_adConfig.rnd": this.adConfig.rnd
            };
            b.timing = EBG.Events.EventTiming.AFTER;
            EBG.eventMgr.subscribeToEvent(b);
            b = new EBG.Events.EventSubscription(EBG.Events.EventNames.COLLAPSE, function(a) {
                (a.eventData == this.adConfig.panelName || a.eventData.props && a.eventData.props.asset.id == this._resObjId || a.eventData.props && a.eventData.props.panel.id == this._resObjId) && this.stopMeasureVisibility()
            }, this);
            b.timing = EBG.Events.EventTiming.BEFORE;
            b.dispatcherFilters = {
                "_adConfig.rnd": this.adConfig.rnd
            };
            EBG.eventMgr.subscribeToEvent(b)
        } catch (c) {}
    },
    _adStackingHandler: function(a) {
        this._adCoveragePercentage =
            a.eventData.percentage;
        this.checkVisibility()
    },
    _visibilityCheckHandler: function(a) {
        EBG.isDefined(a) && EBG.isDefined(a.eventData) && a.dispatcher === this._visibilityProvider && this.checkVisibility(a.eventData)
    },
    _initializeVisibilityData: function() {
        this._visibilityData = [];
        this._visibilityData[EBG.RichModules.VisibilityManager.ThreholdType.IAB] = {
            minSurface: this.adConfig.visibility.iabMinSurface,
            minDuration: this.adConfig.visibility.iabMinDuration,
            minLargeSurface: this.adConfig.visibility.iabMinLargeSurface,
            minLargeDuration: this.adConfig.visibility.iabMinLargeDuration,
            visibilityInteraction: this._adjustPanelIntName(EBG.Interactions.SystemInts.VISIBILITY_IAB),
            durationInteraction: null,
            isActive: this.adConfig.visibility.mode != EBG.VisibilityMode.DEFAULT_MODE,
            durationNeeded: !1,
            timeOutFlag: null,
            reported: !1
        };
        this._visibilityData[EBG.RichModules.VisibilityManager.ThreholdType.Agency] = {
            minSurface: this.adConfig.visibility.agencyMinSurface,
            minDuration: this.adConfig.visibility.agencyMinDuration,
            visibilityInteraction: this._adjustPanelIntName(EBG.Interactions.SystemInts.VISIBILITY_AGENCY),
            durationInteraction: this._adjustPanelIntName(EBG.Interactions.SystemInts.VISIBILITY_AGENCY_DURATION),
            isActive: this.adConfig.visibility.mode != EBG.VisibilityMode.DEFAULT_MODE && !!this.adConfig.visibility.agencyMinDuration,
            durationNeeded: this.adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE && !!this.adConfig.visibility.agencyMinDuration,
            timeOutFlag: null,
            reported: !1
        };
        this._visibilityData[EBG.RichModules.VisibilityManager.ThreholdType.Advertiser] = {
            minSurface: this.adConfig.visibility.advertiserMinSurface,
            minDuration: this.adConfig.visibility.advertiserMinDuration,
            visibilityInteraction: this._adjustPanelIntName(EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER),
            durationInteraction: this._adjustPanelIntName(EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_DURATION),
            isActive: this.adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE && !this._isPanel && !!this.adConfig.visibility.advertiserMinDuration,
            durationNeeded: this.adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE && !!this.adConfig.visibility.advertiserMinDuration,
            timeOutFlag: null,
            reported: !1
        }
    },
    _adjustPanelIntName: function(a) {
        return this._isPanel ? "P" + a : a
    },
    _isLargeBanner: function() {
        var a = EBG.adaptor.getBoundingClientRect(this._res, {
            clip: !0
        });
        return !!a && 242500 <= a.width * a.height
    },
    _execCheckVisibility: function(a, b) {
        try {
            var c, d, e = this._visibilityData[b],
                g = e.visibilityInteraction == EBG.Interactions.SystemInts.VISIBILITY_IAB;
            !EBG.adaptor.browser.isMobile() && e.minLargeSurface && this._isLargeBanner() ? (c = e.minLargeSurface, d = e.minLargeDuration) : (c = e.minSurface, d = e.minDuration);
            a >= c ? (g && !e.reported && !this._visibilityProvider.isTimedBaseVisibility && EBG.runTimed(this, this.checkVisibility, [], EBG.RichModules.VisibilityManager.VisibilityCheckInterval), !e.reported && !e.timeOutFlag ? e.timeOutFlag = EBG.runTimed(this, function() {
                e.timeOutFlag = null;
                this._intMgrWrapper.handleCounterInteraction(e.visibilityInteraction, this.adConfig.uid);
                e.durationNeeded && e.durationInteraction && (this._intMgrWrapper.updateTimer(e.durationInteraction, this.adConfig.uid, d), this._intMgrWrapper.startTimer(e.durationInteraction,
                    this.adConfig.uid));
                g && !e.reported && this._handleIABVisibility();
                e.reported = !0
            }, [], 1E3 * d) : e.reported && e.durationNeeded && e.durationInteraction && this._intMgrWrapper.startTimer(e.durationInteraction, this.adConfig.uid)) : (this._stopDurationTimeout(b), e.durationInteraction && this._stopDurationCounting(b))
        } catch (f) {}
    },
    _stopDurationTimeout: function(a) {
        if (this._visibilityData[a].timeOutFlag) clearTimeout(this._visibilityData[a].timeOutFlag), this._visibilityData[a].timeOutFlag = null
    },
    _stopDurationCounting: function(a) {
        this._visibilityData[a].durationNeeded &&
            this._visibilityData[a].durationInteraction && this._intMgrWrapper.stopTimer(this._visibilityData[a].durationInteraction, this.adConfig.uid)
    },
    _reportVisibilityRecordable: function() {
        var a = this.adConfig.visibility.mode == EBG.VisibilityMode.BASIC_MODE || this.adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE;
        a && this.adConfig.visibility.iabMinDuration && this._intMgrWrapper.handleCounterInteraction(this._adjustPanelIntName(EBG.Interactions.SystemInts.VISIBILITY_RECORDABLE), this.adConfig.uid);
        a && this.adConfig.visibility.agencyMinDuration &&
            this._intMgrWrapper.handleCounterInteraction(this._adjustPanelIntName(EBG.Interactions.SystemInts.VISIBILITY_AGENCY_RECORDABLE), this.adConfig.uid);
        this.adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE && !this._isPanel && this.adConfig.visibility.advertiserMinDuration && this._intMgrWrapper.handleCounterInteraction(this._adjustPanelIntName(EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_RECORDABLE), this.adConfig.uid)
    },
    _collectTimersHandler: function(a) {
        if (!a || !(a.eventData && a.eventData.adUId !=
                this.adConfig.uid || a.dispatcher.adsData && a.dispatcher.adsData[this.adConfig.uid] && a.dispatcher.adsData[this.adConfig.uid].isUnloadHandled)) this._intMgrWrapper.clearTimer(this._adjustPanelIntName(EBG.Interactions.SystemInts.VISIBILITY_AVG_AD_SURFACE), this.adConfig.uid), this._intMgrWrapper.clearTimer(this._adjustPanelIntName(EBG.Interactions.SystemInts.VISIBILITY_AVG_SCREEN_SHARE), this.adConfig.uid), this._calculateAverages({
                percentage: this._lastVisPercentage,
                viewPort: this._visibilityProvider._getViewPortMetrics()
            }),
            this._intMgrWrapper.updateTimer(this._adjustPanelIntName(EBG.Interactions.SystemInts.VISIBILITY_AVG_AD_SURFACE), this.adConfig.uid, this._averageVisibility), this._intMgrWrapper.updateTimer(this._adjustPanelIntName(EBG.Interactions.SystemInts.VISIBILITY_AVG_SCREEN_SHARE), this.adConfig.uid, this._averageScreenShare)
    },
    _stopTimersHandler: function() {
        for (var a in EBG.RichModules.VisibilityManager.ThreholdType) EBG.RichModules.VisibilityManager.ThreholdType.hasOwnProperty(a) && this._visibilityData[EBG.RichModules.VisibilityManager.ThreholdType[a]] &&
            this._visibilityData[EBG.RichModules.VisibilityManager.ThreholdType[a]].isActive && (this._stopDurationTimeout(EBG.RichModules.VisibilityManager.ThreholdType[a]), this._stopDurationCounting(EBG.RichModules.VisibilityManager.ThreholdType[a]))
    },
    stopMeasureVisibility: function() {
        this._collectTimersHandler();
        this._lastVisPercentage = 0;
        this._stopTimersHandler()
    },
    getVisibilityProviderNum: function() {
        var a = {
            None: 0,
            Geometric: 1,
            SafeFrame: 2,
            Mouse: 3,
            Grid: 4,
            Flash: 5,
            FF: 6,
            Mraid: 7,
            AddingEye: 8,
            Basic: 9,
            IntersectionObserver: 10
        };
        return this._visibilityProvider ? a[this._visibilityProvider.name] || -1 : a.None
    },
    _calculateAverages: function(a) {
        var b = (new Date).getTime() - this._averageLastCalcTime;
        if (1E3 < b && 0 < this._lastVisPercentage) {
            this._averageVisibility = (this._averageVisibility * this._averageAdDuration + this._lastVisPercentage * b) / (this._averageAdDuration + b);
            if (this._lastVisViewPort && this._lastVisViewPort.Width && this._lastVisViewPort.Height) {
                var c = this._lastVisViewPort.Width * this._lastVisViewPort.Height,
                    d = this._lastVisRect || EBG.adaptor.getBoundingClientRect(this._res, {
                        clip: !0,
                        relativeToTop: !0
                    }) || {
                        width: 0,
                        height: 0
                    };
                this._averageScreenShare = (this._averageScreenShare * this._averageAdDuration + 100 * (this._lastVisPercentage * (d ? d.width * d.height : 0) / 100 / c) * b) / (this._averageAdDuration + b)
            }
            this._averageAdDuration += b
        }
        this._lastVisPercentage = a.percentage;
        this._lastVisViewPort = a.viewPort;
        this._lastVisRect = EBG.adaptor.getBoundingClientRect(this._res, {
            clip: !0,
            relativeToTop: !0
        }) || {
            width: 0,
            height: 0
        };
        this._averageLastCalcTime = (new Date).getTime()
    },
    _handleIABVisibility: function() {
        EBG.RichModules.VisibilityManager.VisibilityCheckInterval =
            500
    }
};
EBG.declareClass(EBG.RichModules.VisibilityManager, null);
EBG.declareNamespace("RichModules");
EBG.RichModules.Geometry = function() {};
EBG.RichModules.Geometry.prototype = {
    _clipRegex: /rect\((.*?)px(.*?)px(.*?)px(.*?)px\)/g,
    _clipPercentRegex: /rect\(([0-9]+%?)(?:px)?[,]?([0-9]+%?)(?:px)?[,]?([0-9]+%?)(?:px)?[,]?([0-9]+%?)(?:px)?[,]?\)/g,
    getViewport: function() {
        var a = EBG.adaptor.getWindowViewPortMetrics();
        if (a) a.width = a.Width, a.height = a.Height;
        return a
    },
    getPercentOfViewportWidth: function(a) {
        EBG.isNumber(a) || (a = 1 * a.replace(/[^\d\.\-]/g, ""));
        return this.getViewport().Width * a / 100
    },
    getPercentOfViewportHeight: function(a) {
        EBG.isNumber(a) ||
            (a = 1 * a.replace(/[^\d\.\-]/g, ""));
        return this.getViewport().Height * a / 100
    },
    getPercentOfViewport: function(a) {
        EBG.isNumber(a) || (a = 1 * a.replace(/[^\d\.\-]/g, ""));
        var b = EBG.cloneObj(this.getViewport());
        b.width = b.Width = b.Width * a / 100;
        b.height = b.Height = b.Height * a / 100;
        return b
    },
    calculateMaxHeight: function(a, b, c) {
        var d = parseInt(a, 10);
        EBG.isPercentage(a) && (d = this.getPercentOfViewportHeight(d));
        return Math.min(c / b, d)
    },
    calculateMaxWidth: function(a, b, c) {
        var d = parseInt(a, 10);
        EBG.isPercentage(a) && (d = this.getPercentOfViewportWidth(d));
        return Math.min(b * c, d)
    },
    translateCoords: function(a, b, c) {
        var d = {},
            e = ["left", "top", "right", "bottom"],
            g = ["width", "height", "width", "height"],
            f = ["X", "Y", "X", "Y"],
            h;
        for (h in a) {
            var i = EBG.indexOfArray(e, h);
            if (-1 < i) {
                var j = g[i],
                    k = a[h],
                    i = f[i],
                    l;
                if (b.from == EBG.PanelPositionType.VIEWPORT_RELATIVE_PERCENTAGE || b.from == EBG.PanelPositionType.VIEWPORT_RELATIVE_PIXELS || b.to == EBG.PanelPositionType.VIEWPORT_RELATIVE_PERCENTAGE || b.to == EBG.PanelPositionType.VIEWPORT_RELATIVE_PIXELS) c = c || EBG.adaptor.serving.detectServingMode(!0),
                    l = EBG.adaptor.getScrollLeftTop(!1, c);
                switch (b.from) {
                    case EBG.PanelPositionType.PAGE_RELATIVE_PERCENTAGE:
                        var m = 0;
                        a[j] ? (m = this.getViewport()[j] - a[j], k = 0 < m ? Math.round(m * k / 100) : 0) : k = this.getViewport()[j] * k / 100;
                        break;
                    case EBG.PanelPositionType.BANNER_RELATIVE_PIXELS:
                        var n;
                        a.refElem && (n = EBG.isElementOrNode(a.refElem) ? EBG.adaptor.getBoundingClientRect(a.refElem, {
                            relativeToWindow: !0
                        }) : a.refElem);
                        EBG.isDefined(n[h]) && (k += n[h]);
                        break;
                    case EBG.PanelPositionType.VIEWPORT_RELATIVE_PERCENTAGE:
                        a[j] ? (m = this.getViewport()[j] -
                            a[j], k = 0 < m ? Math.round(m * k / 100) : 0) : k = this.getViewport()[j] * k / 100;
                        if ("top" == h || "bottom" == h) k += l.Y;
                        else if ("left" == h || "right" == h) k += l.X;
                        break;
                    case EBG.PanelPositionType.VIEWPORT_RELATIVE_PIXELS:
                        if ("top" == h || "bottom" == h) k += l.Y;
                        else if ("left" == h || "right" == h) k += l.X
                }
                switch (b.to) {
                    case EBG.PanelPositionType.VIEWPORT_RELATIVE_PERCENTAGE:
                        a[j] && (m = this.getViewport()[j] - a[j], k = 0 != m ? Math.round(100 * ((k - l[i]) / m)) : 0);
                        break;
                    case EBG.PanelPositionType.BANNER_RELATIVE_PIXELS:
                        a.refElem && (n = EBG.isElementOrNode(a.refElem) ?
                            EBG.adaptor.getBoundingClientRect(a.refElem, {
                                relativeToWindow: !0
                            }) : a.refElem);
                        EBG.isDefined(n[h]) && (k -= n[h]);
                        break;
                    case EBG.PanelPositionType.PAGE_RELATIVE_PERCENTAGE:
                        a[j] && (m = this.getViewport()[j] - a[j], k = 0 != m ? Math.round(100 * (k / m)) : 0);
                        break;
                    case EBG.PanelPositionType.VIEWPORT_RELATIVE_PIXELS:
                        "top" == h ? k -= l.Y : "left" == h && (k -= l.X)
                }
                d[h] = k
            }
        }
        return d
    },
    resolveClipPercentages: function(a, b) {
        if (this._isRectCSS(a)) {
            for (var c = this._getRectCSSValues(a), d = [null, "top", "right", "bottom", "left"], e = "rect(", g = 1; 4 >= g; g++) {
                var f =
                    c[g];
                switch (d[g]) {
                    case "top":
                    case "bottom":
                        EBG.isPercentage(f) && (b && EBG.isNumber(b.height) ? (f = 1 * f.replace(/[^\d\.\-]/g, ""), f = b.height * f / 100) : f = this.getPercentOfViewportHeight(f));
                        break;
                    case "left":
                    case "right":
                        EBG.isPercentage(f) && (b && EBG.isNumber(b.width) ? (f = 1 * f.replace(/[^\d\.\-]/g, ""), f = b.width * f / 100) : f = this.getPercentOfViewportWidth(f))
                }
                f = Math.round(f);
                e = e + f + "px";
                e = 4 > g ? e + "," : e + ")"
            }
            return e
        }
        return null
    },
    _isRectCSS: function(a) {
        this._clipPercentRegex.lastIndex = 0;
        return this._clipPercentRegex.test(a)
    },
    _getRectCSSValues: function(a) {
        this._clipPercentRegex.lastIndex = 0;
        return this._clipPercentRegex.exec(a)
    }
};
EBG.declareNamespace("RichModules");
EBG.RichModules.ElementWatcher = function() {
    this._subscribeToEvents()
};
EBG.RichModules.ElementWatcher.prototype = {
    _watchedElementsList: [],
    _count: 0,
    _bannerLocationObserver: null,
    _pollingInterval: 100,
    _intervalId: null,
    _rateControlledCheck: null,
    _isRunning: !1,
    forcePolling: !1,
    _subscribeToEvents: function() {
        EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_UNLOAD, this._stop, this))
    },
    _start: function() {
        if (this._isRunning) this.forcePolling && this._startPolling();
        else {
            this._isRunning = !0;
            if (window.MutationObserver) {
                this._rateControlledCheck = EBG.throttle(this._check,
                    this._pollingInterval, {
                        leading: !0
                    });
                var a = this._check.bind(this),
                    b = this;
                this._bannerLocationObserver = new MutationObserver(function() {
                    window.requestAnimationFrame ? window.requestAnimationFrame(a) : b._rateControlledCheck()
                });
                this._bannerLocationObserver.observe(EBG.adaptor.getDisplayWin().document, {
                    attributes: !0,
                    attributeOldValue: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })
            }
            window.MutationObserver || this._startPolling()
        }
    },
    _stop: function() {
        this._intervalId && clearInterval(this._intervalId);
        this._bannerLocationObserver &&
            this._bannerLocationObserver.disconnect();
        this._isRunning = !1
    },
    _check: function() {
        for (var a = 0; a < this._watchedElementsList.length; a++) {
            var b = this._watchedElementsList[a],
                c = EBG.adaptor.getBoundingClientRect(b.element, {
                    clip: b.options.clip,
                    relativeToWindow: b.options.relativeToWindow
                });
            if (c)
                for (var d = 0; d < b.filters.length; d++) {
                    if (c[b.filters[d]] !== b.previousRect[b.filters[d]]) {
                        b.callback && (d = [c, b.previousRect, b.callbackArg], b.callback.apply(b.binding || window, d));
                        b.previousRect = c;
                        break
                    }
                } else b.callback && (d = [c, b.previousRect, b.callbackArg], b.callback.apply(b.binding || window, d)), this.unwatch(b.subscriptionId)
        }
    },
    setPollingInterval: function(a) {
        this._pollingInterval = a || 100
    },
    _startPolling: function() {
        if (0 < this._pollingInterval) this._intervalId && clearInterval(this._intervalId), this._intervalId = EBG.setInterval(this, this._check, [], this._pollingInterval)
    },
    checkNow: function() {
        this._check()
    },
    watch: function(a, b, c, d, e, g) {
        var f = null;
        if (a && b && (this._start(), EBG.isArray(g) || (g = ["left", "top", "width", "height"]), f = this._validate({
                element: a,
                callbackArg: d,
                callback: b,
                binding: c,
                options: e,
                filters: g
            }), !1 === f)) this._watchedElementsList.push({
            element: a,
            callbackArg: d,
            previousRect: EBG.adaptor.getBoundingClientRect(a, {
                clip: !!e.clip,
                relativeToWindow: !!e.relativeToWindow
            }),
            callback: b,
            binding: c,
            options: e,
            filters: g,
            subscriptionId: ++this._count
        }), f = this._count;
        return f
    },
    _validate: function(a) {
        var b = EBG.filterArray(this._watchedElementsList, function(b) {
            return EBG.objMatch(a, b)
        }, this);
        return 0 == b.length ? !1 : b[0].subscriptionId
    },
    unwatch: function(a, b, c) {
        this._watchedElementsList =
            EBG.filterArray(this._watchedElementsList, function(d) {
                return EBG.isDefinedNotNull(a) ? a != d.subscriptionId : c ? b ? !(d.binding == c && d.element == b) : !1 : b ? d.element != b : !0
            }, this);
        0 == this._watchedElementsList.length && this._stop()
    }
};
EBG.declareNamespace("RichModules");
EBG.RichModules.AdStackingDetector = function(a, b) {
    this._adConfig = a;
    this._isFriendlyIframe = this._adConfig.actualServingMode == EBG.Adaptors.ServingMode.FRIENDLY_IFRAME || this._adConfig.actualServingMode == EBG.Adaptors.ServingMode.TOPMOST_FRIENDLY_IFRAME && window.frameElement;
    this._isPanel = b;
    this._elementsIds = [];
    this._validElementParents = [];
    this._visibilityEvent = {};
    this._placeholderDiv = EBG.adaptor.getElementById(this._adConfig.placeHolderId);
    if (this._shouldInitialize()) {
        this._validElementParents.push(a.placeHolderId);
        EBG.Const.OUTER_DIV && this._validElementParents.push(EBG.Const.OUTER_DIV);
        var c = new EBG.Events.EventSubscription(EBG.Events.EventNames.VISIBILITY_CHECK, this._handleVisibilityEvent, this);
        c.dispatcherFilters = {
            "adConfig.rnd": this._adConfig.rnd
        };
        c.timing = EBG.Events.EventTiming.ONTIME;
        EBG.eventMgr.subscribeToEvent(c);
        this._adConfig.adStarted ? this._start() : (c = new EBG.Events.EventSubscription(EBG.Events.EventNames.AD_START, function() {
            this._start()
        }, this), c.timing = EBG.Events.EventTiming.ONTIME, EBG.eventMgr.subscribeToEvent(c))
    }
};
EBG.RichModules.AdStackingDetector.prototype = {
    _densityFactor: 5,
    _prevPercentage: 0,
    _minThresholdForAdStacking: 50,
    _interactionThreshold: 100,
    _generatePointsGrid: function(a) {
        for (var b = [], c = (a.height - 2) / this._densityFactor, d = (a.width - 2) / this._densityFactor, e = 0; e <= this._densityFactor; e++)
            for (var g = 0; g <= this._densityFactor; g++) {
                var f = d * e,
                    h = c * g,
                    f = Math.max(f, 2),
                    h = Math.max(h, 2),
                    f = Math.min(f, a.width - 2),
                    h = Math.min(h, a.height - 2);
                b.push({
                    x: Math.round(f),
                    y: Math.round(h)
                })
            }
        return b
    },
    _handleVisibilityEvent: function(a) {
        if (~EBGInfra.indexOfArray(this._elementsIds,
                a.dispatcher._resObjId)) this._visibilityEvent = EBG.cloneObj(a.eventData)
    },
    _shouldInitialize: function() {
        if (this._adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE && this._adConfig.actualServingMode != EBG.Adaptors.ServingMode.IFRAME) return this._adConfig.actualServingMode == EBG.Adaptors.ServingMode.FRIENDLY_IFRAME && window.parent !== top ? !1 : !0
    },
    _start: function() {
        EBG.runTimed(this, this._analyze, [], 5);
        EBG.runTimed(this, this._analyze, [], EBG.RichModules.VisibilityManager.VisibilityCheckInterval / 2);
        EBG.runTimed(this,
            this._analyze, [], EBG.RichModules.VisibilityManager.VisibilityCheckInterval)
    },
    _analyze: function() {
        if ("hidden" != this._placeholderDiv.style.visibility) {
            var a = this._calculateConcealmentPercentage();
            if (!this._adStackingReported && a.adStacked >= this._interactionThreshold && this._visibilityEvent.percentage >= this._minThresholdForAdStacking) EBG.intMgr.handleCounterInteraction((this._isPanel ? "P" : "") + EBG.Interactions.SystemInts.AD_STACKING, this._adConfig.uid), this._adStackingReported = !0;
            if (a.blocked != this._prevPercentage) {
                this._prevPercentage =
                    a.blocked;
                var b = new EBG.Events.Event(this._isPanel ? "P" : "" + EBG.Events.EventNames.AD_STACKING);
                b.eventData = {
                    intName: (this._isPanel ? "P" : "") + EBG.Interactions.SystemInts.AD_STACKING,
                    percentage: a.blocked
                };
                b.dispatcher = this;
                b.timing = EBG.Events.EventTiming.BEFORE;
                if (EBG.eventMgr.dispatchEvent(b)) return;
                b.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
                EBG.eventMgr.dispatchEvent(b)
            }
            EBG.runTimed(this, this._analyze, [], EBG.RichModules.VisibilityManager.VisibilityCheckInterval)
        }
    },
    _calculateConcealmentPercentage: function() {
        var a = {
            blocked: 0,
            adStacked: 0
        };
        try {
            if (!this._elementsIds.length) return a;
            var b = EBG.adaptor.serving._getTopFriendlyIframe(this._adConfig.displayWin || EBG.adaptor.getDisplayWin()),
                c = EBG.adaptor.getElementById(this._assetId),
                d = EBG.adaptor.getBoundingClientRect(c, {
                    clip: !0,
                    relativeToTop: !0
                });
            if (!c || !c.offsetWidth || !c.offsetHeight || EBG.isDefined(this._visibilityEvent.assetId) && this._visibilityEvent.assetId != this._assetId) return a;
            var e = this._visibilityEvent.visibleRect,
                c = e || d;
            if (!c || 0 == c.width || 0 == c.height) return a;
            this._grid = this._generatePointsGrid(c);
            for (var g = 0, f = 0, h = 0; h < this._grid.length; h++) {
                var i = this._grid[h];
                i.x += Math.floor(c.left) + 1;
                i.y += Math.floor(c.top) + 1;
                var j = b.document.elementFromPoint(i.x, i.y);
                if (j && (!j.id || -1 == EBG.indexOfArray(this._elementsIds, j.id)))
                    if ((!this._isFriendlyIframe || j != window.frameElement) && !this._hasValidParent(j) && !this._isElementTransparent(j)) g++, j.tagName && "iframe" == j.tagName.toLowerCase() && f++
            }
            var k = e ? e.width * e.height / (d.width * d.height) : 1,
                l = Math.round(100 * (g / this._grid.length)),
                m = Math.round(100 * (f / this._grid.length));
            return {
                blocked: Math.ceil(l * k),
                adStacked: m
            }
        } catch (n) {
            return a
        }
    },
    addElementId: function(a, b) {
        -1 == EBGInfra.indexOfArray(this._elementsIds, a) && this._elementsIds.push(a);
        if (b) this._assetId = a, this._visibilityEvent = {}
    },
    _invisibleProperties: {
        visibility: "hidden",
        display: "none",
        opacity: function(a) {
            return 0 == 1 * a
        },
        "-moz-opacity": function(a) {
            return EBG.adaptor.browser.isFF() && 0 == 1 * a
        },
        "-khtml-opacity": function(a) {
            return EBG.adaptor.browser.isSafari() && 0 == 1 * a
        },
        filter: function(a) {
            return EBG.adaptor.browser.isIE() &&
                10 > EBG.adaptor.browser.getVersion() && -1 != EBG.indexOfArray(["alpha(opacity=0)", "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"], a)
        },
        "background-color": function(a, b, c) {
            var d = function(a) {
                    var b = a.replace(/^\s+|\s+$/g, "").match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
                    return b && 0 == 1 * b[4] || "transparent" == a
                },
                e = b.innerText || b.textContent,
                g = EBG.adaptor.browser.isIE() && 9 > EBG.adaptor.browser.getVersion(),
                c = c.getPropertyValue("color");
            return d(a) && -1 == EBG.indexOfArray("object,canvas,video,source,track,iframe,embed,img".split(","),
                b.tagName.toLowerCase()) && (!e || !g && d(c))
        }
    },
    _isElementTransparent: function(a) {
        var b = EBG.adaptor.getComputedStyle(a),
            c = this._invisibleProperties,
            d, e;
        for (e in c) {
            var g = b.getPropertyValue(e);
            if (g)
                for (var f = EBG.isArray(c[e]) ? c[e] : [c[e]], h = 0; h < f.length; h++)
                    if (d = EBG.isFunc(f[h]) ? f[h](g, a, b) : g == f[h]) return !0
        }
        return !1
    },
    _hasValidParent: function(a) {
        if (!a) return !1;
        for (var b = a.id; a.parentElement;) {
            if (a.parentElement.id && -1 != EBG.indexOfArray(this._validElementParents, a.parentElement.id)) return this.addElementId(b, !1), !0;
            a = a.parentElement
        }
        return !1
    }
};
EBG.declareClass(EBG.RichModules.AdStackingDetector, null);
EBG.Interactions.DwellTimeManager = function(a) {
    this._adConfig = a;
    this._defaultPanelName = this._adConfig.panelName
};
EBG.Interactions.DwellTimeManager.prototype = {
    _state: {
        idle: 0,
        start: 1,
        stop: 2,
        panelOpenMouseOver: 3,
        videoPlay: 4,
        videoPlayMouseOut: 5,
        panelOpenMouseOut: 6,
        idlePanelOpen: 7,
        idleVideoPlay: 8
    },
    _idleTimeLimit: 700,
    _curState: 0,
    _numOfOpenPanels: 0,
    _isMouseOverAd: !1,
    _wasMouseOverAd: !1,
    _isUserInteractionOccur: !1,
    _isVideoPlay: !1,
    _isVideoAutoReplay: !1,
    _mouseTimeoutId: 0,
    _autoShownPanels: [],
    _videosToTrack: [],
    _defaultMovieNum: 1,
    _dwellUniqueNeedsToBeReported: !0,
    init: function() {
        this._subscribeToEvents()
    },
    _subscribeToAdEvent: function(a,
        b, c) {
        a = new EBG.Events.EventSubscription(a, b, this);
        if (c) a.dispatcherFilters = {
            "_adConfig.rnd": this._adConfig.rnd
        };
        EBG.eventMgr.subscribeToEvent(a)
    },
    _subscribeToEvents: function() {
        this._subscribeToAdEvent(EBG.Events.EventNames.MOUSE_OVER, this._handleMouseOverAd, !0);
        this._subscribeToAdEvent(EBG.Events.EventNames.MOUSE_OUT, this._handleMouseOutOfAd, !0);
        this._subscribeToAdEvent(EBG.Events.EventNames.DWELL_VIDEO_START, this._handleVideoPlay, !0);
        this._subscribeToAdEvent(EBG.Events.EventNames.DWELL_VIDEO_STOP,
            this._handleVideoStop, !0);
        this._subscribeToAdEvent(EBG.Events.EventNames.USER_INTERACTION, this._handleUserInteraction, !0);
        this._subscribeToAdEvent(EBG.Events.EventNames.EXPAND, this._handlePanelOpen, !0);
        this._subscribeToAdEvent(EBG.Events.EventNames.COLLAPSE, this._handlePanelClose, !0);
        this._subscribeToAdEvent(EBG.Events.EventNames.FULL_SCREEN_START, this._handlePanelOpen, !0);
        this._subscribeToAdEvent(EBG.Events.EventNames.FULL_SCREEN_END, this._handlePanelClose, !0)
    },
    _handleMouseThreshold: function() {
        this._mouseTimeoutId =
            null;
        EBG.intMgr.updateTimer(EBG.Interactions.SystemInts.DWELL_TIME, this._adConfig.uid, this._idleTimeLimit / 1E3);
        switch (this._curState) {
            case this._state.idle:
                this._isMouseOverAd ? this._start() : this._stop();
                break;
            case this._state.idleVideoPlay:
                this._isMouseOverAd ? this._videoPlay() : this._videoPlayMouseOut();
                break;
            case this._state.idlePanelOpen:
                this._isMouseOverAd ? this._panelOpenMouseOver() : this._panelOpenMouseOut()
        }
    },
    _handleUserInteraction: function() {
        if (this._wasMouseOverAd) switch (this._isUserInteractionOccur = !0, this._curState) {
            case this._state.idle:
                this._start();
                break;
            case this._state.idleVideoPlay:
                this._videoPlay();
                break;
            case this._state.idlePanelOpen:
                this._panelOpenMouseOver()
        }
    },
    _handleVideoPlay: function(a) {
        a = a.eventData.assetId || this._defaultMovieNum;
        if (this._isMouseOverAd) switch (this._videosToTrack.push(a), this._isVideoPlay = !0, this._reportUserInitatedVideo(a), this._curState) {
            case this._state.idle:
                this._idleVideoPlay();
                break;
            case this._state.idlePanelOpen:
                break;
            case this._state.idleVideoPlay:
                break;
            case this._state.start:
                this._videoPlay();
                this._reportUserInitatedVideo(a);
                break;
            case this._state.stop:
                this._isVideoAutoReplay || (this._videoPlayMouseOut(), this._reportUserInitatedVideo(a));
                break;
            case this._state.videoPlayMouseOut:
                this._stop();
                this._isVideoAutoReplay = !0;
                break;
            default:
                this._isVideoAutoReplay || this._reportUserInitatedVideo(a)
        }
    },
    _handleVideoStop: function(a) {
        a = EBGInfra.indexOfArray(this._videosToTrack, a.eventData.assetId);
        if (-1 !== a && (this._videosToTrack.splice(a, 1), !(0 < this._videosToTrack.length))) switch (this._isVideoPlay =
            this._isVideoAutoReplay = !1, this._curState) {
            case this._state.videoPlay:
                this._isMouseOverAd ? 0 < this._numOfOpenPanels ? this._panelOpenMouseOver() : this._start() : 0 < this._numOfOpenPanels ? this._panelOpenMouseOut() : this._stop();
                break;
            case this._state.videoPlayMouseOut:
                0 < this._numOfOpenPanels ? this._panelOpenMouseOut() : this._stop();
                break;
            case this._state.idleVideoPlay:
                this._idle()
        }
    },
    _handleMouseOverAd: function() {
        this._wasMouseOverAd = this._isMouseOverAd = !0;
        this._isVideoAutoReplay = !1;
        this._checkRecentAutoPanelOpen();
        switch (this._curState) {
            case this._state.idle:
            case this._state.idlePanelOpen:
            case this._state.idleVideoPlay:
                this._startMouseTimer();
                break;
            case this._state.stop:
                this._isVideoPlay ? this._videoPlay() : this._start();
                break;
            case this._state.panelOpenMouseOut:
                this._panelOpenMouseOver();
                break;
            case this._state.videoPlayMouseOut:
                this._videoPlay()
        }
    },
    _checkRecentAutoPanelOpen: function() {
        if (this._curState == this._state.idle)
            for (var a = (new Date).getTime(), b = this._autoShownPanels.length - 1; 0 <= b; b--) {
                var c = this._autoShownPanels[b];
                300 >= a - c.showtime && (this._autoShownPanels.splice(b, 1), this.handlePanelOpen(c.name))
            }
    },
    _handleMouseOutOfAd: function() {
        this._isMouseOverAd = !1;
        switch (this._curState) {
            case this._state.idle:
            case this._state.idleVideoPlay:
            case this._state.idlePanelOpen:
                this._clearMouseTimer();
                break;
            case this._state.start:
                this._stop();
                break;
            case this._state.videoPlay:
                this._videoPlayMouseOut();
                break;
            case this._state.panelOpenMouseOver:
                this._panelOpenMouseOut()
        }
    },
    _handlePanelOpen: function(a) {
        var b = a.eventData.props && a.eventData.props.panel.name ||
            this._defaultPanelName;
        if (!this._wasMouseOverAd || a.dispatcher.expandedBy == EBG.ActionType.AUTO) this._onAutoShowPanel(b);
        else switch (this._numOfOpenPanels++, this._curState) {
            case this._state.start:
                this._panelOpenMouseOver();
                break;
            case this._state.stop:
                this._panelOpenMouseOut();
                break;
            case this._state.idle:
                this._idlePanelOpen();
                break;
            case this._state.videoPlay:
                this._panelOpenMouseOver()
        }
    },
    _onAutoShowPanel: function(a) {
        this._addAutoShownPanel({
            name: a || this._defaultPanelName,
            showtime: (new Date).getTime()
        })
    },
    _addAutoShownPanel: function(a) {
        0 <= this._getAutoShownPanelIdx(a.name) || (this._autoShownPanels[this._autoShownPanels.length] = a)
    },
    _getAutoShownPanelIdx: function(a) {
        for (var a = a || this._defaultPanelName, b = -1, c = 0; c < this._autoShownPanels.length; c++)
            if (this._autoShownPanels[c].name == a) {
                b = c;
                break
            }
        return b
    },
    _handlePanelClose: function(a) {
        var b = "",
            b = "FullScreen" == a.eventData ? a.eventData : a.eventData.props && a.eventData.props.panel ? a.eventData.props.panel.name : this._defaultPanelName,
            a = this._getAutoShownPanelIdx(b);
        if (0 <= a) this._autoShownPanels.splice(a, 1);
        else {
            this._numOfOpenPanels--;
            if (0 > this._numOfOpenPanels) this._numOfOpenPanels = 0;
            if (0 == this._numOfOpenPanels) switch (this._curState) {
                case this._state.panelOpenMouseOver:
                    this._isVideoPlay ? this._videoPlay() : this._start();
                    break;
                case this._state.panelOpenMouseOut:
                    this._isVideoPlay ? this._videoPlayMouseOut() : this._stop();
                    break;
                case this._state.idlePanelOpen:
                    this._idle()
            }
        }
    },
    _startMouseTimer: function() {
        if (!this._mouseTimeoutId) {
            var a = this;
            this._mouseTimeoutId = setTimeout(function() {
                    a._handleMouseThreshold()
                },
                this._idleTimeLimit)
        }
    },
    _clearMouseTimer: function() {
        clearTimeout(this._mouseTimeoutId);
        this._mouseTimeoutId = null
    },
    _isIdleMode: function() {
        return this._curState == this._state.idle || this._curState == this._state.idlePanelOpen || this._curState == this._state.idleVideoPlay
    },
    _idle: function() {
        if (this._isIdleMode()) this._curState = this._state.idle
    },
    _start: function() {
        this._curState = this._state.start;
        this._startTimer()
    },
    _stop: function() {
        this._curState = this._state.stop;
        this._endTimer()
    },
    _idlePanelOpen: function() {
        if (this._isIdleMode()) this._curState =
            this._state.idlePanelOpen
    },
    _panelOpenMouseOver: function() {
        this._curState = this._state.panelOpenMouseOver;
        this._startTimer()
    },
    _videoPlay: function() {
        this._curState = this._state.videoPlay;
        this._startTimer()
    },
    _videoPlayMouseOut: function() {
        this._curState = this._state.videoPlayMouseOut;
        this._startTimer()
    },
    _panelOpenMouseOut: function() {
        this._curState = this._state.panelOpenMouseOut;
        this._startTimer()
    },
    _idleVideoPlay: function() {
        if (this._isIdleMode()) this._curState = this._state.idleVideoPlay
    },
    _reportUserInitatedVideo: function(a) {
        var b =
            new EBG.Events.Event(EBG.Events.EventNames.USER_INITIATED_VIDEO);
        b.dispatcher = this;
        b.eventData = {
            assetId: a
        };
        EBG.eventMgr.dispatchEvent(b)
    },
    _isTimeOverLimit: function() {
        return this._isTimerStarted() ? (this._endTimer(), EBG.intMgr.getTimerValue(EBG.Interactions.SystemInts.DWELL_TIME, this._adConfig.uid) > this._idleTimeLimit / 1E3) : !1
    },
    _isTimerStarted: function() {
        return EBG.intMgr.isTimerRunning(EBG.Interactions.SystemInts.DWELL_TIME, this._adConfig.uid)
    },
    _resetTimer: function() {
        EBG.intMgr.updateTimer(EBG.Interactions.SystemInts.DWELL_TIME,
            this._adConfig.uid, 0)
    },
    _startTimer: function() {
        var a = new EBG.Events.Event(EBG.Events.EventNames.DWELL_UNIQUE);
        a.dispatcher = this;
        a.eventData = {
            firstTime: this._dwellUniqueNeedsToBeReported,
            adUId: this._adConfig.uid
        };
        EBG.eventMgr.dispatchEvent(a);
        this._dwellUniqueNeedsToBeReported = !1;
        EBG.intMgr.startTimer(EBG.Interactions.SystemInts.DWELL_TIME, this._adConfig.uid)
    },
    _endTimer: function() {
        EBG.intMgr.stopTimer(EBG.Interactions.SystemInts.DWELL_TIME, this._adConfig.uid)
    }
};
EBG.declareNamespace("AdaptiveUtils");
EBG.AdaptiveUtils = function(a) {
    this._adConfig = a;
    if (EBG.Algorithms.MaxWidthSelector) this._selector = new EBG.Algorithms.MaxWidthSelector;
    for (var b in this._adConfig.adHtmlOptions)
        if (this._adConfig.adHtmlOptions[b].path == this._adConfig.adHtmlPath && this._adConfig.adHtmlOptions[b].defaultImagePath == this._adConfig.defaultImagePath) {
            this._adConfig.defaultWidth = this._adConfig.defaultWidth ? this._adConfig.defaultWidth : this._adConfig.adHtmlOptions[b].width;
            this._adConfig.defaultHeight = this._adConfig.defaultHeight ?
                this._adConfig.defaultHeight : this._adConfig.adHtmlOptions[b].height;
            this._adConfig.adHtmlOptions[b].interaction = this._adConfig.adHtmlOptions[b].name = b;
            this._defaultAsset = EBG.cloneObj(this._adConfig.adHtmlOptions[b]);
            break
        }
};
EBG.AdaptiveUtils.prototype = {
    _adConfig: null,
    _shouldFireInteraction: !0,
    _selector: null,
    _chosenAsset: null,
    _defaultAsset: null,
    _preloadImageAsset: null,
    _bannerAsset: null,
    getAsset: function() {
        return this._chosenAsset
    },
    updateAdConfig: function() {
        if (!this._chosenAsset && this._defaultAsset) this._chosenAsset = this._defaultAsset;
        if (this._chosenAsset) this._adConfig.defaultImagePath = this._chosenAsset.defaultImagePath, this._adConfig.adHtmlPath = this._chosenAsset.path, this._adConfig.expansionParams = this._chosenAsset.expansionParams,
            this._adConfig.chosenWidth = this._chosenAsset.width, this._adConfig.chosenHeight = this._chosenAsset.height
    },
    subscribeToEvents: function() {
        this._subscribeToAdEvent(EBG.Events.EventNames.PAGE_RESIZE, this._handlePageResize);
        this._subscribeToAdEvent(EBG.Events.EventNames.SHOW_AD, this._handlePageResize, EBG.Events.EventTiming.BEFORE);
        this._subscribeToAdEvent(EBG.Events.EventNames.SHOW_AD, this._handlePageResize, EBG.Events.EventTiming.AFTER);
        this._subscribeToAdEvent(EBG.Events.EventNames.ADD_CREATIVES, this._handleCreative,
            EBG.Events.EventTiming.BEFORE);
        EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.SCREEN_ORIENTATION, this._handlePageResize, this))
    },
    _showAsset: function(a, b) {
        a._defaultImgResId && EBG.adaptor.getElementById(a._defaultImgResId) ? (EBG.adaptor.removeElement(a._defaultImgResId), a.showDefaultImage()) : a._preloadImgResId && EBG.adaptor.getElementById(a._preloadImgResId) ? (EBG.adaptor.removeElement(a._preloadImgResId), a._addCreatives()) : a._banner && a._banner.divId && EBG.adaptor.getElementById(a._banner.divId) ?
            (a._bannerCC && a._bannerCC._UnbindMessages(), EBG.adaptor.removeElement(a._banner.divId), a._addCreatives()) : (b--, 0 < b && EBG.runTimed(this, this._showAsset, [a, b], 25))
    },
    _handlePageResize: function(a) {
        var b = EBG.ads[this._adConfig.uid],
            c = this._selector.selectAsset(this._adConfig.adHtmlOptions, this._adConfig);
        if (!c && this._defaultAsset) c = this._defaultAsset;
        if (c != this._chosenAsset) EBG.isFunc(b._hideAllPanels) && b._hideAllPanels(), this._chosenAsset = c, this.updateAdConfig(), this._showAsset(b, 3);
        EBG.adaptor.browser.isiOS() &&
            a.name == EBG.Events.EventNames.SCREEN_ORIENTATION && b.handleIOSAdaptiveResize()
    },
    _handleCreative: function(a) {
        if (a.eventData.creativeType == EBG.Events.EventNames.ADD_HTML5_MAIN_CREATIVE && this._shouldFireInteraction) EBG.intMgr.handleCounterInteraction(this.getBannerInteraction(), this._adConfig.adId + "_" + this._adConfig.rnd, null, !1, {}), this._shouldFireInteraction = !1;
        else if (a.eventData.creativeType == EBG.Events.EventNames.ADD_BANNER_DEFAULT_IMAGE_CREATIVE) {
            var b = EBG.adaptor.getElementById(this._adConfig.placeHolderId);
            b || EBG.adaptor.setElemStyle(b, "position", "relative");
            a.eventData.tagsObj.attributes.style.position = "absolute";
            a.eventData.tagsObj.attributes.style.margin = "auto";
            a.eventData.tagsObj.attributes.style.top = "0";
            a.eventData.tagsObj.attributes.style.left = "0";
            a.eventData.tagsObj.attributes.style.right = "0";
            a.eventData.tagsObj.attributes.style.bottom = "0"
        }
    },
    _subscribeToAdEvent: function(a, b, c) {
        a = new EBG.Events.EventSubscription(a, b, this);
        a.dispatcherFilters = {
            "_adConfig.rnd": this._adConfig.rnd
        };
        if (c) a.timing =
            c;
        EBG.eventMgr.subscribeToEvent(a)
    },
    getBannerInteraction: function() {
        return this._chosenAsset.interaction
    }
};
EBG.declareClass(EBG.AdaptiveUtils, null);
EBG.declareNamespace("Algorithms");
EBG.Algorithms.BaseSelector = function() {};
EBG.Algorithms.BaseSelector.prototype = {
    selectAsset: function() {
        return null
    }
};
EBG.declareClass(EBG.Algorithms.BaseSelector, null);
EBG.Algorithms.MaxWidthSelector = function() {
    EBG.callSuperConstructor(EBG.Algorithms.MaxWidthSelector, this)
};
EBG.Algorithms.MaxWidthSelector.prototype = {
    selectAsset: function(a, b) {
        var c = EBG.adaptor.getBoundingClientRect(EBG.adaptor.getElementById(b.placeHolderId));
        if (b.width) c.width = b.width;
        var d = null,
            e;
        for (e in a) {
            var g = a[e];
            g.interaction = g.name = e;
            if (parseInt(g.selectionValue) >= c.width && g.width <= c.width && this.isAssetValid(g, b) && (!d || Math.abs(d.width - c.width) > Math.abs(g.width - c.width)))
                if (d = g, d.width == c.width) break
        }
        return d
    },
    isAssetValid: function(a) {
        var b = !1;
        if (EBG.adaptor.getScreenOrientation() == a.orientation.toUpperCase() ||
            a.orientation.toUpperCase() == EBG.orientation.Both) b = !0;
        return b
    }
};
EBG.declareClass(EBG.Algorithms.MaxWidthSelector, EBG.Algorithms.BaseSelector);
EBG.declareNamespace("Ads");
EBG.Ads.Ad = function(a) {
    this._adConfig = a;
    this._dpm = EBG.dataPipeMgr.getPipe(this._adConfig.sID);
    this._adConfig.isStdAd = this._isStdAd();
    this.startTime = (new Date).getTime() / 1E3;
    this._initReportImpression();
    this._updateURLs();
    this._subscribeEventTriggeringURLs();
    EBG.ads[a.uid] = this;
    this._show();
    this.placeHolderElement ? this._handleMultiBurn() : this._subscribeToAdEvent(EBG.Events.EventNames.SHOW_AD, this._handleMultiBurn, EBG.Events.EventTiming.ONTIME);
    this._sendInitAdInformation()
};
EBG.Ads.Ad.prototype = {
    resizePlaceHolder: !0,
    checkingThrottle: !1,
    _throttleState: null,
    _throttleTimeoutDuration: 1E3,
    _adChoice: null,
    _adConfig: null,
    _cdiReason: 0,
    _showOnlyDefaultImg: !1,
    _banner: {
        divId: "",
        resId: "",
        width: 0,
        height: 0
    },
    _hasDefaultImageInteraction: !1,
    _isStdAd: function() {
        return !0
    },
    _initReportImpression: function() {
        if (this._adConfig.reportImpressionType == EBG.ReportImpressionType.DELAYED) EBG.adaptor.loadModule("DelayedImpression", this._adConfig, function(a) {
            this.delayedImpressionModule = new(a || window).EBG.Modules.DelayedImpression(this._adConfig);
            this._handleDelayedImpressionReport()
        }, this);
        else if (this._adConfig.reportImpressionType == EBG.ReportImpressionType.CLIENT) {
            var a = new EBG.Events.EventSubscription(EBG.Events.EventNames.ELEMENT_LOADED, this._handleClientImpression, this);
            a.dispatcherFilters = {
                ebRand: this._adConfig.rnd
            };
            a.timing = EBG.Events.EventTiming.ONTIME;
            EBG.eventMgr.subscribeToEvent(a);
            a = new EBG.Events.EventSubscription(EBG.EBMessage.DOCUMENT_LOADED, this._handleClientImpression, this);
            a.dispatcherFilters = {
                "_adConfig.rnd": this._adConfig.rnd
            };
            a.timing = EBG.Events.EventTiming.ONTIME;
            EBG.eventMgr.subscribeToEvent(a);
            a = new EBG.Events.EventSubscription(EBG.Events.EventNames.CREATIVE_CONTAINER_READY, this._handleClientImpression, this);
            a.dispatcherFilters = {
                "_adConfig.rnd": this._adConfig.rnd
            };
            a.timing = EBG.Events.EventTiming.ONTIME;
            EBG.eventMgr.subscribeToEvent(a);
            if (this._adConfig.templateName == EBG.adTypes.StdBanner) a = new EBG.Events.EventSubscription(EBG.Events.EventNames.ADD_CREATIVES, this._handleClientImpression, this), a.dispatcherFilters = {
                    "_adConfig.rnd": this._adConfig.rnd
                },
                a.timing = EBG.Events.EventTiming.ONTIME, EBG.eventMgr.subscribeToEvent(a)
        }
    },
    _handleClientImpression: function(a) {
        if (!this._adConfig.impressionSent && (a.eventData && a.eventData.adUId ? a.eventData.adUId : a.dispatcher && a.dispatcher._adConfig ? a.dispatcher._adConfig.uid : null) == this._adConfig.uid) this._dispatchClientImpression(), this._adConfig.impressionTrackingURLs && this._reportImpressionTrackingURLs(this._adConfig.impressionTrackingURLs), EBG.intMgr.allowInteractionReport(this._adConfig.uid)
    },
    _dispatchClientImpression: function(a) {
        if (this._adConfig.impressionSent ||
            EBG.isPreview) return !1;
        this._adConfig.impressionSent = !0;
        var b = EBG.format("{0}{1}/Serving?cn=display&c=40&sessionid={2}&ai={3}&usercookie={4}&oo={5}", EBG.protocol, this._adConfig.bsPath, this._adConfig.sID, this._adConfig.adId, this._adConfig.usercookie, this._adConfig.optOut);
        a && (b += "&isBlank=1");
        this._adConfig.defaultImageDisplayed && this._cdiReason && (b += "&di=1&dir=" + this._cdiReason);
        if (this._adConfig.massVersioning.originalDeliveryGroupId || this._adConfig.massVersioning.deliveryGroupId) b += "&dg=" + (this._adConfig.massVersioning.originalDeliveryGroupId ||
            this._adConfig.massVersioning.deliveryGroupId);
        this._adConfig.massVersioning.subDeliveryGroupId && (b += "&sdg=" + this._adConfig.massVersioning.subDeliveryGroupId);
        this._adConfig.diAppId && (b += "&diappid=" + this._adConfig.diAppId);
        this._adConfig.isNXT && (b += "&ctick=" + (+new Date - this._adConfig.handleStartTime));
        b += "&ord=" + Math.random();
        EBG.adaptor.reportToRemoteServer(b, !0);
        if (!this._dpm) this._dpm = EBG.dataPipeMgr.getPipe(this._adConfig.sID);
        this._dpm.send(EBG.DataProfile.DEBUG, {
            cimp: 1
        })
    },
    _subscribeEventTriggeringURLs: function() {
        if (this._adConfig.eventTrackingURLs) {
            this._adConfig.eventTrackingURLs =
                this._eventTrackingURLsAdapter(this._adConfig.eventTrackingURLs);
            for (var a in this._adConfig.eventTrackingURLs) this._subscribeToAdEvent(a, this._handleEventTrackingURLs, EBG.Events.EventTiming.ONTIME)
        }
    },
    _eventTrackingURLsAdapter: function(a) {
        function b(b) {
            c.ebVideoInteraction = c.ebVideoInteraction || [];
            c.ebVideoInteraction.push({
                filter: {
                    "eventData.intName": b
                },
                urls: a[d]
            })
        }
        var c = {},
            d;
        for (d in a) switch (d) {
            case "vidStart":
                b(EBG.VideoInteraction.STARTED);
                break;
            case "vid25Played":
                b(EBG.VideoInteraction.PERCENT_25_PLAYED);
                break;
            case "vid50Played":
                b(EBG.VideoInteraction.PERCENT_50_PLAYED);
                break;
            case "vid75Played":
                b(EBG.VideoInteraction.PERCENT_75_PLAYED);
                break;
            case "vidFullyPlayed":
                b(EBG.VideoInteraction.FULLPLAY)
        }
        return c
    },
    _handleEventTrackingURLs: function(a) {
        for (var b = this._adConfig.eventTrackingURLs[a.name], c = 0; c < b.length; c++) {
            var d = b[c];
            if (d.filter)
                for (var e in d.filter) EBG.valueFromPath(a, e) == d.filter[e] && this._reportImpressionTrackingURLs(d.urls);
            else this._reportImpressionTrackingURLs(d.urls)
        }
    },
    _counterInteractionHandler: function(a) {
        try {
            var b =
                a.eventData.intName;
            if (!b) b = EBG.Interactions.SystemInts.CLICK;
            a.eventData.clickUrl = this._replaceURLTokens(a.eventData.clickUrl);
            a.eventData.clickedVerUrl = this._replaceURLTokens(a.eventData.clickedVerUrl);
            EBG.intMgr.handleCounterInteraction(b, this._adConfig.uid, 0, null, a.eventData, "undefined" != typeof a.eventData.handleClickInt ? a.eventData.handleClickInt : !0)
        } catch (c) {}
    },
    _versionTrackingImpressionHandler: function(a) {
        try {
            a.eventData.impTrackingUrls && this._reportImpressionTrackingURLs(a.eventData.impTrackingUrls)
        } catch (b) {}
    },
    _reportImpressionTrackingURLs: function(a) {
        if (!EBG.isPreview)
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                c && (c = this._replaceURLTokens(c), EBG.Autolina && EBG.Autolina.report(c, EBG.Autolina.reportType.THIRDPARTY), EBG.adaptor.reportToRemoteServerUsingImage(c))
            }
    },
    _show: function() {
        var a = !this._canShow() || this._adConfig.showOnlyImage;
        this._adConfig.defaultImageDisplayed = !(!a || !this._adConfig.defaultImagePath);
        var b = this._adConfig.showOnlyImage;
        this._verifyPlaceHolder();
        var c = new EBG.Events.Event(EBG.Events.EventNames.SHOW_AD);
        c.dispatcher = this;
        c.timing = EBG.Events.EventTiming.BEFORE;
        c.eventData = {
            isDefaultImage: this._adConfig.defaultImageDisplayed
        };
        EBG.eventMgr.dispatchEvent(c);
        b !== this._adConfig.showOnlyImage && (a = !this._canShow() || this._adConfig.showOnlyImage || this._adConfig.showAieDefaultImage);
        this._subscribeToEvents();
        EBG.intMgr.initAdData(this._adConfig, this._adConfig.shouldReportImpression || this._adConfig.isInstream ? !0 : !1);
        this._addSystemInteractions();
        EBG.AdChoice && EBG.AdChoice.AdChoiceManager ? (this._adChoice = new EBG.AdChoice.AdChoiceManager(this._adConfig),
            this._adChoice.init()) : this._adConfig.AcIncludeMarker && EBG.adaptor.loadModule("AdChoice", this._adConfig, function(a) {
            this._adChoice = new(a || window).EBG.AdChoice.AdChoiceManager(this._adConfig);
            this._adChoice.init()
        }, this);
        (b = EBG.adaptor.getElementById(this._adConfig.placeHolderId)) && this.resizePlaceHolder && "undefined" != typeof this._adConfig.display && EBG.adaptor.setElemStyle(b, "display", this._adConfig.display);
        if (a)
            if (this._adConfig.defaultImagePath) {
                if (!this._adConfig.imageOnly) a = new EBG.Events.Event(EBG.Events.EventNames.DEFAULT_IMPRESSION),
                    a.eventData = {
                        impTrackingUrls: this._adConfig.defaultImpTrackingUrls
                    }, a.dispatcher = this, a.timing = EBG.Events.EventTiming.ONTIME, EBG.eventMgr.dispatchEvent(a);
                this._subscribeToAdEvent(EBG.Events.EventNames.ADD_BANNER_DEFAULT_IMAGE_CREATIVE, this._terminateShow, EBG.Events.EventTiming.AFTER);
                this._showOnlyDefaultImg = !0;
                this.checkAndShowDefaultImage(this.showDefaultImage)
            } else this._adConfig.reportImpressionType == EBG.ReportImpressionType.CLIENT ? this._dispatchClientImpression(!0) : this._adConfig.reportImpressionType ==
                EBG.ReportImpressionType.DELAYED && this._reportImpression && this._reportImpression(!0);
        else this._showOnlyDefaultImg = !1, this._addVideoInteractions(), this._addCustomInteractions(), this._adConfig.useHtmlConvertor && this._subscribeToAdEvent(EBG.Events.EventNames.ADD_CREATIVES, this._terminateShow, EBG.Events.EventTiming.AFTER), this._addCreatives(), this._adConfig.useHtmlConvertor || this._terminateShow()
    },
    _getAdSize: function() {
        return {
            adWidth: EBG.px(this._adConfig.width),
            adHeight: EBG.px(this._adConfig.height)
        }
    },
    _terminateShow: function(a) {
        var b = this.placeHolderElement = EBG.adaptor.getElementById(this._adConfig.placeHolderId);
        if (b && this.resizePlaceHolder) {
            var c = this._getAdSize();
            EBG.adaptor.setElemStyle(b, "width", c.adWidth);
            EBG.adaptor.setElemStyle(b, "height", c.adHeight);
            EBG.adaptor.setElemStyle(b, "margin", "0px auto")
        }
        b = new EBG.Events.Event(EBG.Events.EventNames.SHOW_AD);
        b.dispatcher = this;
        b.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
        b.eventData = {
            isDefaultImage: a ? !0 : !1
        };
        EBG.eventMgr.dispatchEvent(b)
    },
    _verifyPlaceHolder: function() {
        !EBG.adaptor.getElementById(this._adConfig.placeHolderId) &&
            !document.body && document.write('<img style="width:0;height:0"></img>');
        return EBG.adaptor.getElementById(this._adConfig.placeHolderId)
    },
    _canShow: function() {
        return !0
    },
    _onPlayHandler: function() {
        this._adConfig.arrOnPlayEvents && this._executeEvents(this._adConfig.arrOnPlayEvents)
    },
    _onDownloadHandler: function() {
        this._adConfig.arrOnStartDnlEvents && this._executeEvents(this._adConfig.arrOnStartDnlEvents)
    },
    _collectUrl: function() {
        if (!EBG.isPreview && this._adConfig.shouldCollectUrl) try {
            EBG.adaptor.reportToRemoteServer(EBG.format("{0}{1}/BurstingPipe/adServer.bs?cn=curl&ai={2}&url=$${3}$$",
                EBG.protocol, this._adConfig.bsPath, this._adConfig.adId, top.document.URL))
        } catch (a) {}
    },
    _executeEvents: function(a) {
        for (var b, c, d = 0; d < a.length; d++) switch (c = this._replaceURLTokens(a[d].url), a[d].typeId) {
            case 3:
                b = "ebPlayScript" + d;
                EBG.adaptor.writeScript(EBG.adaptor.generateElementId(b, this._adConfig.uid), c, this._adConfig.placeHolderId);
                break;
            case 5:
                b = "ebDnlScript" + d;
                EBG.adaptor.writeScript(EBG.adaptor.generateElementId(b, this._adConfig.uid), c, this._adConfig.placeHolderId);
                break;
            case 4:
                b = "ebPlayIFR" + d;
                EBG.adaptor.writeReportingIFrame(EBG.adaptor.generateElementId(b, this._adConfig.uid), c, this._adConfig.placeHolderId);
                break;
            case 6:
                b = "ebDnlIFR" + d, EBG.adaptor.writeReportingIFrame(EBG.adaptor.generateElementId(b, this._adConfig.uid), c, this._adConfig.placeHolderId)
        }
    },
    _addSystemInteractions: function() {
        try {
            var a = this._adConfig.interactions[EBG.Interactions.SystemInts.CLICK];
            if (a) {
                var b = EBG.Interactions.Categories.SYSTEM;
                this._adConfig.interactions[EBG.Interactions.SystemInts.DEFAULT_CLICK] ? this._hasDefaultImageInteraction = !0 : this._adConfig.interactions[EBG.Interactions.SystemInts.DEFAULT_CLICK] = EBG.cloneObj(a);
                this._addCounterInteraction(EBG.Interactions.SystemInts.CLICK, b);
                this._addCounterInteraction(EBG.Interactions.SystemInts.DEFAULT_CLICK, b)
            }
            if ((!EBG.Ads.StdBanner || !(this instanceof EBG.Ads.StdBanner)) && (!EBG.Ads.WallpaperAd || !(this instanceof EBG.Ads.WallpaperAd))) this._addCounterInteraction(EBG.Interactions.SystemInts.AD_START, b, !0, 1), this._addCounterInteraction(EBG.Interactions.SystemInts.END_OF_SESSION, b, !1,
                1), this._addCounterInteraction(EBG.Interactions.SystemInts.AD_STACKING, b, !1, 1), this._addCounterInteraction(EBG.Interactions.SystemInts.MULTI_BURN, b, !1, 1), this._addCounterInteraction(EBG.Interactions.SystemInts.AD_COLLISION, b, !1, 1), this._addCounterInteraction(EBG.Interactions.SystemInts.AD_CAROUSEL, b, !1, 1), this._adConfig.adParamsEnabled && this._addCounterInteraction(EBG.Interactions.SystemInts.AD_PARAMS, b, !1, 5, null, null, !0), this._adConfig.verUrlEnabled && this._addCounterInteraction(EBG.Interactions.SystemInts.VER_URL,
                b, !1, 1, null, null, !0)
        } catch (c) {}
    },
    _addCounterInteraction: function(a, b, c) {
        var d = this._adConfig.interactions[a],
            b = new EBG.Interactions.CounterInteractionData(a, b, this._adConfig.uid);
        b.initiationType = d.nInitiated ? EBG.Interactions.InitiationTypes.USER : EBG.Interactions.InitiationTypes.AUTO;
        b.countAsClick = d.fClick;
        if (d.agencyURL) b.remoteServers.agencyUrl = d.agencyURL;
        if (d.networkURL) b.remoteServers.networkUrl = d.networkURL;
        this._adjustClickTarget(a);
        b.counterJumpUrlData = d;
        b.reportImmediately = c ? !0 : !1;
        a = new EBG.Interactions.CounterInteraction(b);
        EBG.intMgr.addInteraction(a)
    },
    _addVideoInteractions: function() {},
    _addCustomInteractions: function() {},
    _adjustClickTarget: function(a) {
        var a = this._adConfig.interactions[a],
            b;
        switch (a.target) {
            case 0:
                b = EBG.WindowTarget.SELF;
                break;
            case 2:
                b = EBG.WindowTarget.TOP;
                break;
            default:
                b = EBG.WindowTarget.BLANK
        }
        a.target = b
    },
    _subscribeToEvents: function() {
        this._adConfig.interactionsToReport && this._subscribeToAdEvent(EBG.Events.EventNames.ADD_INTERACTION, this._handleInteractionsSubscription, EBG.Events.EventTiming.BEFORE);
        this._subscribeToAdEvent(EBG.EBMessage.CLICKTHROUGH, this._counterInteractionHandler);
        this._subscribeToAdEvent(EBG.EBMessage.VERSION_TRACKING_IMPRESSION, this._versionTrackingImpressionHandler);
        this._subscribeToAdEvent(EBG.Events.EventNames.DEFAULT_IMPRESSION, this._versionTrackingImpressionHandler, EBG.Events.EventTiming.ONTIME);
        this._subscribeToAdEvent(EBG.Events.EventNames.DEFAULT_CLICK, this._counterInteractionHandler);
        this._subscribeToAdEvent(EBG.Events.EventNames.ADD_CREATIVES, this._onAddCreativesHandler,
            EBG.Events.EventTiming.ONTIME);
        this._subscribeToAdEvent(EBG.Events.EventNames.SHOW_AD, this._onDownloadHandler, EBG.Events.EventTiming.ONTIME);
        this._subscribeToAdEvent(EBG.Events.EventNames.SHOW_AD, this._onPlayHandler, EBG.Events.EventTiming.AFTER);
        this._subscribeToAdEvent(EBG.Events.EventNames.SHOW_AD, this._collectUrl, EBG.Events.EventTiming.AFTER);
        this._adConfig.adParamsEnabled && this._subscribeToAdEvent(EBG.Events.EventNames.AD_START, this._reportAdParams, EBG.Events.EventTiming.AFTER);
        this._subscribeToAdEvent(EBG.EBMessage.NOTIFY_INTERACTION_MONITOR,
            this._notifyInteractionManager);
        var a = new EBG.Events.EventSubscription(EBG.Events.EventNames.ELEMENT_LOADED, function(a) {
            a.eventData.adUId == this._adConfig.uid && this._triggerAdStart()
        }, this);
        a.timing = EBG.Events.EventTiming.ONTIME;
        EBG.eventMgr.subscribeToEvent(a);
        this._subscribeToAdEvent(EBG.Events.EventNames.THROTTLED, this._handleCreativeThrottled);
        EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_UNLOAD, this._unLoadHandler, this))
    },
    _handleInteractionsSubscription: function(a) {
        try {
            var b =
                a.eventData.interactionData.reportingName;
            return this._adConfig.interactionsToReport && this._adConfig.interactionsToReport[b] ? !0 : !1
        } catch (c) {}
    },
    _onAddCreativesHandler: function(a) {
        (!a || !a.eventData || !(a.eventData.creativeType && a.eventData.creativeType == EBG.Events.EventNames.ADD_BANNER_DEFAULT_IMAGE_CREATIVE)) && this._checkForCreativeThrottling();
        try {
            if (!EBG.Initializer._getAdClass({
                    tn: this._adConfig.templateName
                }).requiresIframeBust || this._adConfig.actualServingMode == EBG.Adaptors.ServingMode.SCRIPT) {
                var b =
                    a.dispatcher._adConfig.placeHolderId;
                if (b) {
                    var c = (this._adConfig.displayWin || EBG.adaptor.getDisplayWin()).document.getElementById(b);
                    if (c) c.style.backgroundImage = "", c.onclick = function() {}
                }
            }
        } catch (d) {}
    },
    _checkForCreativeThrottling: function() {
        for (cc in this._CCs) this._CCs.hasOwnProperty(cc) && this._CCs[cc].detectThrottling && (this._CCs[cc].detectThrottling(), this._subscribeToAdEvent(EBG.Events.EventNames.MOUSE_OVER, this._stopPollingForThrottle, EBG.Events.EventTiming.ONTIME))
    },
    _stopPollingForThrottle: function(a) {
        var b = !0;
        if (a && a.eventData && a.eventData.target && a.eventData.target.children) {
            for (var c in this._CCs) this._CCs.hasOwnProperty(c) && (a.eventData.target.children[c] && this._CCs[c].stopPollingForThrottle && this._CCs[c].stopPollingForThrottle(), this._CCs[c].isPollingForThrottle && !0 == this._CCs[c].isPollingForThrottle && (b = !1));
            if (b) a = new EBG.Events.EventSubscription(EBG.Events.EventNames.MOUSE_OVER, this._stopPollingForThrottle, this), a.dispatcherFilters = {
                    "_adConfig.rnd": this._adConfig.rnd
                }, a.timing = EBG.Events.EventTiming.ONTIME,
                EBG.eventMgr.unsubscribeFromEvent(a)
        }
    },
    _updateURLs: function() {
        for (var a = this._adConfig.clickTrackingUrls, b = 0; b < a.length; b++) a[b] = this._replaceURLTokens(a[b]);
        var a = this._adConfig.interactions,
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) a[c].agencyURL = this._replaceURLTokens(a[c].agencyURL), a[c].networkURL = this._replaceURLTokens(a[c].networkURL), a[c].jumpUrl = this._replaceURLTokens(a[c].jumpUrl)
    },
    _handleMultiBurn: function() {
        this._reportMultiBurn(this._checkMultiBurn())
    },
    _checkMultiBurn: function() {
        var a = {
                isAdCarousel: !1,
                isAdCollision: !1,
                isMultiBurn: !1
            },
            b = this._adConfig.advertiserId,
            c = this._adConfig.placementId,
            d = this._adConfig.uid;
        try {
            var e = EBG.adaptor.getTopAccessibleWindow(!1);
            e.ebAds = e.ebAds || {};
            for (var g in e.ebAds) {
                var f = e.ebAds[g];
                if (d != f._adConfig.uid && f.placeHolderElement) {
                    if (!f.removed) try {
                        if (0 == f.placeHolderElement.getClientRects().length) f.removed = !0
                    } catch (h) {
                        f.removed = !0
                    }
                    if (f.removed) {
                        var i = (new Date).getTime() / 1E3 - f.startTime;
                        if (!a.isAdCarousel && 10 < i && 150 > i) a.isAdCarousel = !0
                    } else if (!a.isMultiBurn &&
                        c === f._adConfig.placementId) a.isMultiBurn = !0;
                    else if (!a.isMultiBurn && !a.isAdCollision && b && b === f._adConfig.advertiserId) a.isAdCollision = !0
                }
            }
        } catch (j) {}
        return a
    },
    _reportMultiBurn: function(a) {
        a.isMultiBurn ? EBG.intMgr.handleCounterInteraction(EBG.Interactions.SystemInts.MULTI_BURN, this._adConfig.uid) : a.isAdCollision && EBG.intMgr.handleCounterInteraction(EBG.Interactions.SystemInts.AD_COLLISION, this._adConfig.uid);
        a.isAdCarousel && EBG.intMgr.handleCounterInteraction(EBG.Interactions.SystemInts.AD_CAROUSEL,
            this._adConfig.uid)
    },
    _reportAdParams: function() {
        if (EBG.intMgr.isInteractionExist(EBG.Interactions.SystemInts.AD_PARAMS.toLowerCase(), EBG.Interactions.InteractionTypes.COUNTER, this._adConfig.uid))
            if (EBG.adaptor.isPageLoaded()) {
                if (this._adConfig.adParamsEnabled) {
                    var a = this._getServingModeNum(),
                        b = this._getBannerLocation(),
                        b = b && b.X + "x" + b.Y,
                        c = !this.visibilityMgr ? 0 : this.visibilityMgr.getVisibilityProviderNum(),
                        d = this._adConfig.width + "x" + this._adConfig.height,
                        e = this._getAdCodeBase(),
                        g = EBG.adaptor.browser.getEnvironment(),
                        a = {
                            ifr: a,
                            loc: b,
                            vsbp: c,
                            size: d,
                            cb: e,
                            env: g
                        };
                    if (this._adConfig.wurflValue) a.bi = this._adConfig.wurflValue;
                    EBG.intMgr.handleCounterInteraction(EBG.Interactions.SystemInts.AD_PARAMS, this._adConfig.uid, 0, !1, {
                        value: a
                    })
                }
            } else this._subscribeToAdEvent(EBG.Events.EventNames.PAGE_LOAD, this._reportAdParams)
    },
    _getBannerLocation: function(a) {
        if (a && EBG.isNumber(a.X) && EBG.isNumber(a.Y)) {
            var b, c = function() {
                b = EBG.adaptor.getPositioningByElement(this.frameElement);
                a.X += b.X;
                a.Y += b.Y
            };
            EBG.adaptor.walkUpIframes(function() {
                this.location.ancestorOrigins ?
                    this.location.ancestorOrigins[0] && this.location.ancestorOrigins[0] == this.location.origin && this.frameElement && c.call(this) : this.frameElement && c.call(this)
            }, null, EBG.adaptor.getDisplayWin())
        }
        return a
    },
    _getAdCodeBase: function(a) {
        a = EBG.isDefined(a) ? a : 0;
        this._showOnlyDefaultImg && (a = 0);
        1 == a && this._adConfig.hasConverter && this._adConfig.useHtmlConvertor && (a = 3);
        return a
    },
    _getServingModeNum: function() {
        var a = {
            SCRIPT: 0,
            FRIENDLY_IFRAME: 1,
            IFRAME: 2,
            INNER_IFRAME: 3,
            TOPMOST_FRIENDLY_IFRAME: 4
        };
        if (!EBG.adaptor.serving) return -1;
        var b = EBG.adaptor.serving.detectServingEnvironment(this._adConfig.actualServingMode);
        return EBG.isDefined(a[b]) ? a[b] : -1
    },
    _getTemplateNameNum: function() {
        return {
            Html5StdBanner: 0,
            Html5Banner: 1,
            Html5SEBanner: 2,
            Html5ExpBanner: 3,
            Html5PoliteBanner: 4,
            StdBanner: 5,
            Banner: 6,
            SingleExpBanner: 7,
            ExpBanner: 8,
            Visibility: 9,
            FloatingAd: 10,
            FloatingAdWithReminder: 11,
            Tracking: 12
        }[this._adConfig.templateName] || -1
    },
    _replaceURLTokens: function(a) {
        var b = this._adConfig;
        try {
            a && (a = a.replace(/\[%random%\]/ig, b.rnd), a = a.replace(/\[ebRandom\]/ig,
                b.rnd), a = a.replace(/\[timestamp\]/ig, b.rnd), a = a.replace(/\[%tp_adid%\]/ig, b.adId), a = a.replace(/\[%tp_flightid%\]/ig, b.placementId), a = a.replace(/\[%tp_campaignid%\]/ig, b.campaignId));
            if (!a || !b.sUrlTokens) return a;
            if (!EBG.isObj(b.objURLTokens)) b.oURLTokens = this._pairsToObj(b.sUrlTokens, "$$");
            for (var c in b.oURLTokens) b.oURLTokens.hasOwnProperty(c) && (a = a.replace(RegExp("\\[%" + c + "%\\]", "ig"), b.oURLTokens[c]))
        } catch (d) {}
        return a
    },
    _pairsToObj: function(a, b) {
        for (var c = {}, d = unescape(a).split(b), e = 0; e < d.length; e++) try {
            if (d[e]) {
                var g =
                    d[e].indexOf("="),
                    f = d[e].substr(0, g),
                    h = d[e].substr(g + 1);
                c[f] = escape(h)
            }
        } catch (i) {}
        return c
    },
    _subscribeToAdEvent: function(a, b, c) {
        a = new EBG.Events.EventSubscription(a, b, this);
        a.dispatcherFilters = {
            "_adConfig.rnd": this._adConfig.rnd
        };
        if (c) a.timing = c;
        EBG.eventMgr.subscribeToEvent(a);
        return a
    },
    _getCDIUrl: function(a) {
        var b = a && a.defaultImagePath ? a.defaultImagePath : null,
            b = EBG.format("{0}{1}/{2}/adServer.bs?cn=cdi&ai={3}&p={4}&pluid={5}&ru={6}&pc={7}&brt={8}&pltype={9}&sessionid={10}&dir={11}&ord={12}", EBG.protocol,
                this._adConfig.bsPath, this._adConfig.interactionServer, this._adConfig.adId, this._adConfig.page, this._adConfig.pluId, EBG.isDefinedNotNull(b) && "" != b ? b : EBG.combinePaths(this._adConfig.resourcePath, this._adConfig.defaultImagePath), this._adConfig.sPublisherPlacementId, EBG.adaptor.browser._browserCode, EBG.adaptor.browser._platform, this._adConfig.sID, this._cdiReason, this._adConfig.rnd),
            c = this._adConfig.massVersioning.targetAudienceId;
        c && (b += EBG.format("&ta={0}", c));
        (c = this._adConfig.massVersioning.deliveryGroupId) &&
        (b += EBG.format("&dg={0}", c));
        a && a.versionId ? b += EBG.format("&vid={0}", a.versionId) : this._adConfig.massVersioning.adVersions && (a = this._removePrefixFromVersions(), b += EBG.format("&vid={0}", a));
        EBGInfra.isDefinedNotNull(this._adConfig.diAppId) && (b += "&diappid=" + this._adConfig.diAppId);
        return b
    },
    _removePrefixFromVersions: function() {
        var a = "",
            b = this._adConfig.massVersioning.adVersions.toString();
        if (b) {
            for (var a = [], b = b.split(","), c = 0; c < b.length; c++) {
                var d = b[c].indexOf("_");
                a.push(-1 == d ? b[c] : b[c].substring(0,
                    d))
            }
            a = a.join()
        }
        return a
    },
    buildJSONImgObj: function(a, b) {
        var c = EBG.format(a + "_{0}", this._adConfig.uid);
        return {
            tagName: EBG.Adaptors.TagNames.IMG,
            attributes: {
                id: c,
                src: b,
                width: this._adConfig.width,
                height: this._adConfig.height,
                style: {
                    width: this._adConfig.width,
                    height: this._adConfig.height
                },
                title: this._adConfig.title ? this._adConfig.title : "",
                onload: EBG.format('(function(e) { var event = new EBG.Events.Event(EBG.Events.EventNames.ELEMENT_LOADED);event.dispatcher = this;event.eventData = { DOMEvent: e, elementId: "{0}", adUId:"{1}" };event.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;EBG.eventMgr.dispatchEvent(event);} )(typeof arguments != "undefined" ? arguments[0] : null);',
                    c, this._adConfig.uid)
            }
        }
    },
    setImageClick: function(a, b, c, d, e) {
        a.attributes.onclick = EBG.format('EBG.ads["' + this._adConfig.uid + '"].onImageClick("{0}", {1},"{2}", "{3}", "{4}", "{5}")', this._adConfig.uid, b, a.attributes.id, c, d, e);
        EBG.mergeObj({
            cursor: "pointer; cursor: hand"
        }, a.attributes.style)
    },
    _addDefaultImgRequest: function() {
        this.checkAndShowDefaultImage(this.showDefaultImage)
    },
    checkAndShowDefaultImage: function(a) {
        var b = "",
            c = ".xml",
            d = !0;
        if (EBG.isDefinedNotNull(this._adConfig.svJSON) || EBG.isDefinedNotNull(this._adConfig.sv3CatalogMap) ||
            this._adConfig.massVersioning.versionFullPath) c = ".json", d = !1;
        if (EBG.isDefinedNotNull(this._adConfig.massVersioning) && "" != this._adConfig.massVersioning.defaultAdVersion && "" != this._adConfig.massVersioning.adBasePath) {
            b = this._adConfig.massVersioning.defaultAdVersion;
            b = 0 < this._adConfig.massVersioning.massVersionFolderDivider ? EBG.Ads.Ad.Fn.fixMVPathString(b, this._adConfig.massVersioning.massVersionFolderDivider) : b;
            if (this._adConfig.massVersioning.versionFullPath) b = b.p;
            b = EBG.combinePaths(this._adConfig.massVersioning.adBasePath,
                b + c);
            b = this._adConfig.massVersioning.versionFullPath ? EBG.combinePaths("//" + this._adConfig.sHost, b) : EBG.combinePaths(this._adConfig.resourcePath, b)
        }
        c = d ? this._readMassVersionInfo : this._readJsonVersionInfo;
        (!b || !EBG.adaptor.getDataFromRemoteServer(b, c, this, !0, d)) && a.apply(this)
    },
    subscribeToStandardElementEvents: function() {},
    showDefaultImage: function(a) {
        var b = !this._adConfig.imageOnly || this._hasDefaultImageInteraction,
            c = "";
        this._adConfig.showOnlyImage || this._adConfig.imageOnly || this._adConfig.shouldReportImpression ?
            c = a && a.isValid ? a.defaultImagePath : EBG.combinePaths(this._adConfig.resourcePath, this._adConfig.defaultImagePath) : (c = a && a.isValid ? this._getCDIUrl(a) : this._getCDIUrl(), this._adConfig.massVersioning.adVersions = "");
        var c = this.buildJSONImgObj("ebDefaultImg", c),
            d = a && a.isValid && a.jumpUrl ? a.jumpUrl : b ? this._adConfig.interactions[EBG.Interactions.SystemInts.DEFAULT_CLICK].jumpUrl : this._adConfig.interactions[EBG.Interactions.SystemInts.CLICK].jumpUrl;
        d && this.setImageClick(c, b, d, a && a.isValid ? a.selectedVersion :
            "", a && a.isValid ? a.thirdPartyClks : "");
        a && a.thirdPartyImps && a.thirdPartyImps.length && this._reportImpressionTrackingURLs(a.thirdPartyImps);
        a = new EBG.Events.Event(EBG.Events.EventNames.ADD_CREATIVES);
        a.dispatcher = this;
        a.eventData = {
            tagsObj: c,
            assetId: c.attributes.id,
            isPanel: !1,
            creativeType: EBG.Events.EventNames.ADD_BANNER_DEFAULT_IMAGE_CREATIVE
        };
        a.timing = EBG.Events.EventTiming.BEFORE;
        d = EBG.eventMgr.dispatchEvent(a);
        if (!d && (b = new EBG.Events.Event(EBG.Events.EventNames.ADD_BANNER_DEFAULT_IMAGE_CREATIVE),
                b.eventData = {
                    assetId: c.attributes.id
                }, b.dispatcher = this, b.timing = EBG.Events.EventTiming.BEFORE, d = EBG.eventMgr.dispatchEvent(b), !d && (d = EBG.adaptor.getElementById(this._adConfig.placeHolderId)))) {
            var e = EBG.adaptor.createImageElement(c);
            EBG.adaptor.setInnerHtml(d, "");
            d.appendChild(e);
            this._defaultImgResId = c.attributes.id;
            this.subscribeToStandardElementEvents(this._defaultImgResId);
            b.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
            EBG.eventMgr.dispatchEvent(b);
            a.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
            EBG.eventMgr.dispatchEvent(a)
        }
    },
    _triggerAdStart: function(a) {
        if (!(this._shouldWaitForTriggerAdStart() && !(EBGInfra.isDefined(a) && a.name === EBG.EBMessage.TRIGGER_AD_START) || this._adConfig.adStarted))
            if (this._adConfig.adStarted = !0, a = new EBG.Events.Event(EBG.Events.EventNames.AD_START), a.eventData = {
                    intName: EBG.Interactions.SystemInts.Ad_START
                }, a.dispatcher = this, a.timing = EBG.Events.EventTiming.BEFORE, !EBG.eventMgr.dispatchEvent(a)) this._shouldFireAdStart() && EBG.intMgr.handleCounterInteraction(EBG.Interactions.SystemInts.AD_START,
                this._adConfig.uid), a.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER, EBG.eventMgr.dispatchEvent(a)
    },
    _shouldFireAdStart: function() {
        return this._adConfig.displayVerification || this._adConfig.visibility.mode == EBG.VisibilityMode.BASIC_MODE || this._adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE
    },
    _shouldWaitForTriggerAdStart: function() {
        return !1
    },
    _readJsonVersionInfo: function(a) {
        var b = JSON.parse(a),
            a = this._adConfig.massVersioning.defaultAdVersion && this._adConfig.massVersioning.defaultAdVersion.indexOf &&
            this._adConfig.massVersioning.defaultAdVersion.indexOf("_"),
            c = "",
            c = this._adConfig.massVersioning.defaultAdVersion && this._adConfig.massVersioning.defaultAdVersion.v ? this._adConfig.massVersioning.defaultAdVersion.v : -1 == a ? this._adConfig.massVersioning.defaultAdVersion : this._adConfig.massVersioning.defaultAdVersion.substring(0, a),
            a = {
                isValid: !!b.DefaultImage,
                jumpUrl: b.ClickthroughURL ? b.ClickthroughURL : "",
                defaultImagePath: b.DefaultImage ? b.DefaultImage : "",
                selectedVersion: c,
                thirdPartyImps: b.ThirdPartyImpressionURL ?
                    this._parseUrlValue(b.ThirdPartyImpressionURL) : [],
                thirdPartyClks: b.ThirdPartyClickthroughURL ? this._parseUrlValue(b.ThirdPartyClickthroughURL) : [],
                versionId: b.versionId ? b.versionId : 0
            };
        if (a.isValid && EBG.isNumber(b.DefaultImage) && (a.isValid = !1, b = this._adConfig.assets, c = "ebMovie" + a.defaultImagePath, EBG.isDefinedNotNull(b[c].dsPath))) a.defaultImagePath = EBG.isInWorkshop ? b[c].dsPath : EBG.combinePaths(this._adConfig.resourcePath, b[c].dsPath), a.isValid = !0;
        (this._showOnlyDefaultImg ? this.showDefaultImage : this._showImgAsCreative).apply(this, [a])
    },
    _readMassVersionInfo: function(a) {
        var b = {
            isValid: !1,
            jumpUrl: "",
            defaultImagePath: "",
            selectedVersion: "",
            thirdPartyImps: [],
            thirdPartyClks: []
        };
        try {
            if (EBG.isDefined(a) && null != a) {
                var c = a.documentElement.attributes.getNamedItem("productClickThrough"),
                    d = a.documentElement.attributes.getNamedItem("DefaultImage"),
                    e = a.documentElement.attributes.getNamedItem("ThirdPartyImps"),
                    g = a.documentElement.attributes.getNamedItem("ThirdPartyClickThrough"),
                    f = this._adConfig.massVersioning.defaultAdVersion.indexOf("_"),
                    b = {
                        isValid: null != d && "" != d.value,
                        jumpUrl: null != c ? c.value : "",
                        defaultImagePath: null != d ? d.value : "",
                        selectedVersion: -1 == f ? this._adConfig.massVersioning.defaultAdVersion : this._adConfig.massVersioning.defaultAdVersion.substring(0, f),
                        thirdPartyImps: e && e.value ? this._parseUrlValue(e.value) : [],
                        thirdPartyClks: g && g.value ? this._parseUrlValue(g.value) : []
                    };
                if (b.isValid && EBG.isNumber(b.defaultImagePath)) {
                    b.isValid = !1;
                    var h = this._adConfig.assets,
                        i = "ebMovie" + b.defaultImagePath;
                    if (EBG.isDefinedNotNull(h[i].dsPath)) b.defaultImagePath =
                        EBG.isInWorkshop ? h[i].dsPath : EBG.combinePaths(this._adConfig.resourcePath, h[i].dsPath), b.isValid = !0
                }
            }(this._showOnlyDefaultImg ? this.showDefaultImage : this._showImgAsCreative).apply(this, [b])
        } catch (j) {
            this.showDefaultImage(b)
        }
    },
    _parseUrlValue: function(a) {
        for (var b = [], a = a.split("\u007f"), c = 0; c < a.length; c++)
            for (var d = a[c].split("|"), e = 0; e < d.length; e++) b.push(d[e]);
        return b
    },
    _sendInitAdInformation: function() {
        if (EBG.adaptor.browser.isMobile()) {
            this._adConfig.sendMetricsData && this._dpm.send(EBG.DataProfile.INTERACTION, {
                ua: window.navigator.userAgent
            });
            var a = {};
            if (this._adConfig.actualServingMode && this._adConfig.actualServingMode == EBG.Adaptors.ServingMode.SCRIPT) a.scrl = ~~(window.innerWidth > document.documentElement.clientWidth), a.fh = ~~(window.innerHeight === this._adConfig.height), a.fw = ~~(window.innerWidth === this._adConfig.width);
            Object && Object.getOwnPropertyNames && Object.getOwnPropertyNames(a).length && this._dpm.send(EBG.DataProfile.PLATFORM, a)
        } else this._adConfig.sendMetricsData && this._dpm.send(EBG.DataProfile.INTERACTION, {
            ua: window.navigator.userAgent
        });
        var a = {
                frmt: this._getTemplateNameNum(),
                srvmd: this._getServingModeNum(),
                prtcl: EBG.protocol
            },
            b = this._getBannerLocation();
        if (b) a.loc = b.X + "x" + b.Y;
        a.size = this._adConfig.width + "x" + this._adConfig.height;
        a.cb = this._getAdCodeBase();
        this._dpm.send(EBG.DataProfile.SERVING, a)
    },
    _switchAssetsAfterThrottle: function() {},
    _handleCreativeThrottled: function(a) {
        if (a.eventData)
            if (a.eventData.state && a.eventData.state == EBG.ThrottleStates.RESUME) clearTimeout(this._throttleTimeout), this._throttleState =
                EBG.ThrottleStates.RESUME;
            else if (a.eventData.state && a.eventData.state == EBG.ThrottleStates.POLLED && a.dispatcher._adConfig.uid == this._adConfig.uid) this._switchAssetsAfterThrottle(), EBG.adaptor.flash.removeThrottleDetectionSwf(this._adConfig.uid);
        else if (this.visibilityMgr && a.eventData.id) {
            if (this.visibilityMgr.isVisibile()) {
                var b = EBG.adaptor.getElementById(a.eventData.id),
                    b = b && EBG.adaptor.getBoundingClientRect(b);
                this._throttleState == EBG.ThrottleStates.THROTTLE && (!b || 0 < b.width && 0 < b.height) ? (this._switchAssetsAfterThrottle(),
                    EBG.adaptor.flash.removeThrottleDetectionSwf(this._adConfig.uid)) : this._throttleTimeout = EBG.runTimed(this, this._handleCreativeThrottled, [a], this._throttleTimeoutDuration)
            } else this._subscribeToAdEvent(EBG.Events.EventNames.PAGE_SCROLL, this._checkIfStillThrottled);
            this._throttleState = EBG.ThrottleStates.THROTTLE
        }
    },
    _checkIfStillThrottled: function(a) {
        if (a) {
            if (this.visibilityMgr && !this._throttleTimeout && this._throttleState == EBG.ThrottleStates.THROTTLE && this.visibilityMgr.isVisibile()) this._throttleTimeout =
                EBG.runTimed(this, this._checkIfStillThrottled, [], 1E3)
        } else {
            if (this._throttleState == EBG.ThrottleStates.THROTTLE && this.visibilityMgr && this.visibilityMgr.isVisibile()) this._switchAssetsAfterThrottle(), EBG.adaptor.flash.removeThrottleDetectionSwf(this._adConfig.uid), a = new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_SCROLL, this._checkIfStillThrottled, this), a.dispatcherFilters = {
                "_adConfig.rnd": this._adConfig.rnd
            }, a.timing = EBG.Events.EventTiming.ONTIME, EBG.eventMgr.unsubscribeFromEvent(a);
            clearTimeout(this._throttleTimeout);
            this._throttleTimeout = null;
            if (this._throttleState == EBG.ThrottleStates.RESUME) a = new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_SCROLL, this._checkIfStillThrottled, this), a.dispatcherFilters = {
                "_adConfig.rnd": this._adConfig.rnd
            }, a.timing = EBG.Events.EventTiming.ONTIME, EBG.eventMgr.unsubscribeFromEvent(a)
        }
    },
    dispatchCustomEvent: function(a, b, c, d) {
        a = new EBG.Events.Event(a);
        a.dispatcher = d;
        a.eventData = {
            assetId: b
        };
        a.timing = c;
        return EBG.eventMgr.dispatchEvent(a)
    },
    _notifyInteractionManager: function(a) {
        var b = {};
        if (a && a.eventData) b = a.eventData;
        b.elapsedTime = "";
        if (EBG.intMgr.getAdDuration) b.elapsedTime = EBG.intMgr.getAdDuration(this._adConfig.uid);
        EBG.adaptor.notifyIntMonitor(a.eventData)
    },
    onImageClick: function(a, b, c, d, e, g) {
        try {
            var f = b ? new EBG.Events.Event(EBG.Events.EventNames.DEFAULT_CLICK) : new EBG.Events.Event(EBG.EBMessage.CLICKTHROUGH);
            f.eventData = b ? {
                intName: EBG.Interactions.SystemInts.DEFAULT_CLICK
            } : {
                intName: EBG.Interactions.SystemInts.CLICK
            };
            if (EBG.isDefined(d)) f.eventData.clickUrl = d;
            if (EBG.isDefined(e)) f.eventData.clickedVersion =
                e;
            if (EBG.isDefined(g)) f.eventData.clickedVerUrl = g;
            f.dispatcher = EBG.ads[a];
            EBG.eventMgr.dispatchEvent(f);
            if (EBG.adaptor.intMonitorExist()) {
                var h = new EBG.Events.Event(EBG.EBMessage.NOTIFY_INTERACTION_MONITOR);
                h.eventData = {
                    command: EBG.EBMessage.CLICKTHROUGH,
                    args: "",
                    objName: c,
                    adId: EBG.Ads.Ad.Fn.getAdIdFromAdUId(a)
                };
                EBG.eventMgr.dispatchEvent(h)
            }
        } catch (i) {}
    },
    _unLoadHandler: function() {
        var a = new EBG.Events.Event(EBG.Events.EventNames.AD_UNLOAD);
        a.dispatcher = this;
        a.timing = EBG.Events.EventTiming.BEFORE;
        if (!EBG.eventMgr.dispatchEvent(a)) {
            try {
                EBG.adaptor.removeElement(this._adConfig.placeHolderId)
            } catch (b) {}
            a.timing =
                EBG.Events.EventTiming.ONTIME_AND_AFTER;
            EBG.eventMgr.dispatchEvent(a)
        }
    }
};
EBG.declareClass(EBG.Ads.Ad, null);
EBG.Ads.Ad.Fn = {
    getAdIdFromAdUId: function(a) {
        return a.split("_")[0]
    },
    getRandFromAdUId: function(a) {
        return a.split("_")[1]
    },
    getVersionToReport: function(a) {
        var b = a;
        ebO.ffs.CFF_SASCat && a && EBG.isArray(a) && 1 == a.length ? b = a[0] : a && EBG.isArray(a) ? b = "m" : a.indexOf && (b = -1 < a.indexOf(",") ? "m" : -1 < a.indexOf("_") ? a.substr(0, a.indexOf("_")) : a);
        return b
    },
    getAdVersions: function(a) {
        for (var b = "", a = a.adVersions.split(","), c = 0; c < a.length; c++) b && (b += ","), b += a[c];
        return b
    },
    fixMVPathString: function(a, b) {
        if (0 < b)
            for (var c = a.split(","),
                    d = "", e = "", g, f, h, i = 0; i < c.length; i++) h = c[i], g = "", EBG.isDefinedNotNull(h.match("_")) && (g = h.substr(h.indexOf("_"))), h = parseInt(h), f = parseInt(h / b), h = f + g + "/" + h, d += e + h, "" == e && (e = ",");
        return d
    },
    _handlePageResizeOrScroll: function() {}
};
EBG.declareNamespace("EnableVisibilityUtil");
EBG.EnableVisibilityUtil = function() {};
EBG.EnableVisibilityUtil.initVisibilityManager = function(a, b) {
    this.visibilityMgr ? this.visibilityMgr.updateResourceObjId(b) : this.visibilityMgr = new EBG.RichModules.VisibilityManager(a, b)
};
EBG.EnableVisibilityUtil.addVisibilityInteractions = function() {
    var a = EBG.Interactions.Categories.SYSTEM;
    this._addCounterInteraction(EBG.Interactions.SystemInts.VISIBILITY_RECORDABLE, a, !1, 1);
    this._addCounterInteraction(EBG.Interactions.SystemInts.VISIBILITY_AGENCY_RECORDABLE, a, !1, 1);
    this._addCounterInteraction(EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_RECORDABLE, a, !1, 1);
    this._addCounterInteraction(EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER, a, !1, 1);
    this._addCounterInteraction(EBG.Interactions.SystemInts.VISIBILITY_AGENCY,
        a, !1, 1);
    this._adConfig.ffs.CFF_SendVsiabImmediately ? this._addCounterInteraction(EBG.Interactions.SystemInts.VISIBILITY_IAB, a, !0, 1) : this._addCounterInteraction(EBG.Interactions.SystemInts.VISIBILITY_IAB, a, !1, 1);
    this._addTimerInteraction(EBG.Interactions.SystemInts.VISIBILITY_AGENCY_DURATION, a);
    this._addTimerInteraction(EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_DURATION, a);
    this._addTimerInteraction(EBG.Interactions.SystemInts.VISIBILITY_AVG_AD_SURFACE, a);
    EBG.adaptor.isInApp() || this._addTimerInteraction(EBG.Interactions.SystemInts.VISIBILITY_AVG_SCREEN_SHARE,
        a)
};
EBG.EnableVisibilityUtil.addPanelVisibilityInteractions = function() {
    var a = EBG.Interactions.Categories.SYSTEM;
    this._addCounterInteraction("P" + EBG.Interactions.SystemInts.VISIBILITY_RECORDABLE, a, !1, 1, !0);
    this._addCounterInteraction("P" + EBG.Interactions.SystemInts.VISIBILITY_AGENCY_RECORDABLE, a, !1, 1, !0);
    this._addCounterInteraction("P" + EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_RECORDABLE, a, !1, 1, !0);
    this._addCounterInteraction("P" + EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER, a, !1, 1, !0);
    this._addCounterInteraction("P" +
        EBG.Interactions.SystemInts.VISIBILITY_AGENCY, a, !1, 1, !0);
    this._adConfig.ffs.CFF_SendVsiabImmediately ? this._addCounterInteraction("P" + EBG.Interactions.SystemInts.VISIBILITY_IAB, a, !0, 1, !0) : this._addCounterInteraction("P" + EBG.Interactions.SystemInts.VISIBILITY_IAB, a, !1, 1, !0);
    this._addTimerInteraction("P" + EBG.Interactions.SystemInts.VISIBILITY_AGENCY_DURATION, a, !0);
    this._addTimerInteraction("P" + EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_DURATION, a, !0);
    this._addTimerInteraction("P" + EBG.Interactions.SystemInts.VISIBILITY_AVG_AD_SURFACE,
        a, !0);
    EBG.adaptor.isInApp() || this._addTimerInteraction("P" + EBG.Interactions.SystemInts.VISIBILITY_AVG_SCREEN_SHARE, a, !0);
    this._addCounterInteraction("P" + EBG.Interactions.SystemInts.AD_STACKING, a, !1, 1, !0)
};
EBG.declareClass(EBG.EnableVisibilityUtil, null);
EBG.Ads.RichAd = function(a) {
    this._downloadMode = a.dlm;
    EBG.callSuperConstructor(EBG.Ads.RichAd, this, [a])
};
EBG.Ads.RichAd.prototype = {
    isInFullScreenMode: !1,
    visibilityMgr: null,
    videoLoaderDrivers: [],
    _wallpaper: null,
    _registeredToMouseMove: !1,
    _mouseMoveTimeOut: null,
    _isStdAd: function() {
        return !1
    },
    _subscribeToEvents: function() {
        try {
            EBG.callSuperFunction(EBG.Ads.RichAd, this, "_subscribeToEvents"), EBG.adaptor.isPageLoaded() ? EBG.runTimed(this, this._handlePageLoaded, [], 0) : this._subscribeToAdEvent(EBG.Events.EventNames.PAGE_LOAD, this._handlePageLoaded), this._subscribeToAdEvent(EBG.EBMessage.NOTIFIED_INTERACTION, this._notifiedInteractionHandler),
                this._subscribeToAdEvent(EBG.EBMessage.VIDEO_INTERACTION, this._videoInteractionHandler), this._subscribeToAdEvent(EBG.EBMessage.USER_ACTION_COUNTER, this._counterInteractionHandler), this._subscribeToAdEvent(EBG.EBMessage.AUTOMATIC_EVENT_COUNTER, this._counterInteractionHandler), this._subscribeToAdEvent(EBG.EBMessage.START_TIMER, this._startTimerHandler), this._subscribeToAdEvent(EBG.EBMessage.STOP_TIMER, this._stopTimerHandler), this._subscribeToAdEvent(EBG.EBMessage.START_VIDEO_TIMER, this._startTimerVideoHandler),
                this._subscribeToAdEvent(EBG.EBMessage.STOP_VIDEO_TIMER, this._stopTimerHandler), this._subscribeToAdEvent(EBG.EBMessage.UPDATE_TIMER, this._updateTimerHandler), this._subscribeToAdEvent(EBG.EBMessage.START_VIDEO, this._startAggregateHandler), this._subscribeToAdEvent(EBG.EBMessage.STOP_VIDEO, this._stopAggregateHandler), this._subscribeToAdEvent(EBG.EBMessage.UPDATE_VIDEO_DURATION, this._updateAggregationTimeHandler), this._subscribeToAdEvent(EBG.EBMessage.INIT_VIDEO_LOADER, this._initVideoLoaderHandler), this._subscribeToAdEvent(EBG.EBMessage.VIDEO_LOAD,
                    this._videoLoadHandler), this._subscribeToAdEvent(EBG.EBMessage.VIDEO_FS_OPEN, this._videoFSOpenHandler), this._subscribeToAdEvent(EBG.EBMessage.VIDEO_FS_CLOSE, this._videoFSCloseHandler), this._subscribeToAdEvent(EBG.EBMessage.SET_STATE, this._setStateInCreativeState), this._subscribeToAdEvent(EBG.EBMessage.RESET_STATE, this._setStateInCreativeState), this._subscribeToAdEvent(EBG.Events.EventNames.MOUSE_MOVE_NEEDED, this._mouseMoveNeededHandler, EBG.Events.EventTiming.BEFORE), this._subscribeToAdEvent(EBG.Events.EventNames.SHOW_AD,
                    this.adCreativesAddedHandler, EBG.Events.EventTiming.AFTER), this._subscribeToAdEvent(EBG.Events.EventNames.ADD_CREATIVES, this.addCreativesHandler, EBG.Events.EventTiming.ONTIME), this._subscribeToAdEvent(EBG.Events.EventNames.ADD_BANNER_DEFAULT_IMAGE_CREATIVE, this.addCreativesHandler, EBG.Events.EventTiming.ONTIME), this._subscribeToAdEvent(EBG.Events.EventNames.DWELL_UNIQUE, this._dwellUniqueEventHandler, EBG.Events.EventTiming.ONTIME), this._subscribeToAdEvent(EBG.Events.EventNames.RICH_FLASH_PLAYED, this._richFlashPlayedEventHandler,
                    EBG.Events.EventTiming.ONTIME), this._subscribeToAdEvent(EBG.EBMessage.SHOW_DEFAULT_IMAGE, this._addDefaultImgRequest), this._dwellTimeManager = new EBG.Interactions.DwellTimeManager(this._adConfig), this._dwellTimeManager.init(), this._adConfig.bgImgSrc && (this._subscribeToAdEvent(EBG.Events.EventNames.CLOSE_AD, this._removeBackgroundImage), this._subscribeToAdEvent(EBG.Events.EventNames.PAGE_UNLOAD, this._removeBackgroundImage))
        } catch (a) {}
    },
    _handlePageLoaded: function() {},
    _handleDelayedImpressionReport: function() {},
    _clearDelayedImpData: function() {},
    _reportImpression: function() {},
    _mouseMoveNeededHandler: function() {
        if (!this._registeredToMouseMove) {
            var a = new EBG.Events.EventSubscription(EBG.Events.EventNames.MOUSE_MOVE, this._mouseMoveHandler, this);
            a.isDocumentEvent = !0;
            EBG.eventMgr.subscribeToEvent(a);
            this._registeredToMouseMove = !0
        }
    },
    _mouseMoveHandler: function(a) {
        try {
            if (!this._mouseMoveTimeOut) {
                var b = this;
                b._mouseMoveTimeOut = setTimeout(function() {
                    b._mouseMoveTimeOut = null;
                    for (var c in b._CCs)
                        if (b._CCs.hasOwnProperty(c) &&
                            b._CCs[c]._registeredToMouseMove) {
                            var e = {},
                                e = EBG.adaptor.getMouseCoordinates(a.eventData);
                            b._CCs[c]._handleMouseMove(e)
                        }
                }, 100)
            }
        } catch (c) {}
    },
    _dwellUniqueEventHandler: function(a) {
        EBG.intMgr.reportDwellUnique(this._adConfig.uid, a.eventData.firstTime)
    },
    _richFlashPlayedEventHandler: function() {
        EBG.intMgr.reportRichFlashPlayed(this._adConfig.uid)
    },
    addCreativesHandler: function(a) {
        try {
            this._adConfig.bgImgSrc && this._changeBackgroundImage(), this._updateVisibilityManagerData(a.eventData), this._updateAdStackingData(a.eventData)
        } catch (b) {}
    },
    _updateVisibilityManagerData: function(a) {
        if (a.isPanel) {
            this.visibilityMgrPanelCollection = this.visibilityMgrPanelCollection || {};
            var b = !(this._panels && this._panels[a.panelName] && this._panels[a.panelName].visibilityIntEnabled || 1 == EBG.adaptor.getObjKeys(this._adConfig.panels).length);
            this.visibilityMgrPanelCollection[a.assetId] || (this.visibilityMgrPanelCollection[a.assetId] = new EBG.RichModules.VisibilityManager(this._adConfig, a.assetId, {
                isPanel: !0,
                muteInteractions: b,
                customData: {
                    panelName: a.panelName
                }
            }))
        } else EBG.EnableVisibilityUtil &&
            EBG.EnableVisibilityUtil.initVisibilityManager.apply(this, [this._adConfig, a.assetId])
    },
    _updateAdStackingData: function(a) {
        if (a.isPanel) {
            if (this._panels && 1 == EBG.adaptor.getObjKeys(this._adConfig.panels).length) {
                if (!this._adStackingDetectorPanel) this._adStackingDetectorPanel = new EBG.RichModules.AdStackingDetector(this._adConfig, !0);
                this._adStackingDetectorPanel.addElementId(a.assetId, !0)
            }
        } else {
            if (!this._adStackingDetector) this._adStackingDetector = new EBG.RichModules.AdStackingDetector(this._adConfig, !1);
            this._adStackingDetector.addElementId(a.assetId, !0)
        }
    },
    _addPreloadImg: function() {
        this._preloadImgResId = this._addImgAsCreative("ebPreloadImg", EBG.isInWorkshop ? this._adConfig.preloadImagePath : EBG.combinePaths(this._adConfig.resourcePath, this._adConfig.preloadImagePath), EBG.Events.EventNames.ADD_BANNER_PRELOAD_IMAGE_CREATIVE)
    },
    _addImgAsCreative: function(a, b, c, d) {
        a = this.buildJSONImgObj(a, d && d.isValid ? d.defaultImagePath : b);
        (b = d && d.isValid ? d.jumpUrl : this._adConfig.interactions[EBG.Interactions.SystemInts.CLICK].jumpUrl) &&
        this.setImageClick(a, !1, b, d && d.isValid ? d.selectedVersion : "", d && d.isValid ? d.thirdPartyClks : "");
        b = new EBG.Events.Event(EBG.Events.EventNames.ADD_CREATIVES);
        b.dispatcher = this;
        b.eventData = {
            tagsObj: a,
            assetId: a.attributes.id,
            isPanel: !1,
            creativeType: c
        };
        b.timing = EBG.Events.EventTiming.BEFORE;
        var e = EBG.eventMgr.dispatchEvent(b);
        if (e || (e = this.dispatchCustomEvent(c, a.attributes.id, EBG.Events.EventTiming.BEFORE, this))) return a.attributes.id;
        e = EBG.adaptor.getElementById(this._adConfig.placeHolderId);
        if (this._richShown) return null;
        var g = EBG.adaptor.getElementById("emptyDiv" + this._banner.divId);
        if (d = d && g ? g : e) return e = EBG.adaptor.createImageElement(a), EBG.adaptor.setInnerHtml(d, ""), d.appendChild(e), this.subscribeToStandardElementEvents(a.attributes.id), b.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER, EBG.eventMgr.dispatchEvent(b), this.dispatchCustomEvent(c, a.attributes.id, EBG.Events.EventTiming.ONTIME_AND_AFTER, this), a.attributes.id
    },
    _showImgAsCreative: function(a) {
        if (!this._richShown) this._defaultImgResId = this._addImgAsCreative("ebDefaultImg",
            EBG.isInWorkshop ? this._adConfig.defaultImagePath : EBG.combinePaths(this._adConfig.resourcePath, this._adConfig.defaultImagePath), EBG.Events.EventNames.ADD_BANNER_DEFAULT_IMAGE_CREATIVE, a)
    },
    adCreativesAddedHandler: function() {
        try {
            this._startTimer(EBG.Interactions.SystemInts.AD_DURATION)
        } catch (a) {}
    },
    getAdLocationOnPage: function() {
        var a = this.getAdOffset();
        if (null == a) return a;
        var b = EBG.adaptor.getWindowViewPortMetrics(this._adConfig.displayWin || EBG.adaptor.getDisplayWin());
        return {
            isAdOnLeft: a.X + this._adConfig.width /
                2 < b.Width / 2,
            isAdOnTop: a.Y + this._adConfig.height / 2 < b.Height / 2
        }
    },
    getAdOffset: function() {
        return null
    },
    getVideoLoaderDriver: function(a, b) {
        for (var b = b.replace(/\./ig, "/"), c = 0; c < this.videoLoaderDrivers.length; c++) {
            var d = this.videoLoaderDrivers[c];
            if (d.data.res.id == a && d.data.apiPath == b) return this.videoLoaderDrivers[c]
        }
        return null
    },
    _initVideoLoaderHandler: function(a) {
        a.eventData.apiPath = a.eventData.apiPath.replace(/\./ig, "/");
        a.eventData.res = EBG.adaptor.getElementById(a.flashResId);
        a.eventData.ad = this;
        this.videoLoaderDrivers.push(new EBG.Video.VideoLoaderDriver(a.eventData))
    },
    _videoLoadHandler: function(a) {
        a.eventData.apiPath = a.eventData.apiPath.replace(/\./ig, "/");
        this.getVideoLoaderDriver(a.flashResId, a.eventData.apiPath).load(a.eventData)
    },
    _startAggregateHandler: function(a) {
        try {
            EBG.intMgr.isInteractionExist(EBG.VideoInteraction.FULLSCREEN_DURATION.toLowerCase(), EBG.Interactions.InteractionTypes.TIMER, this._adConfig.uid) || (this._addAggregateInteraction(EBG.VideoInteraction.FULLSCREEN_DURATION, EBG.Interactions.Categories.VIDEO), this._addAggregateInteraction(EBG.VideoInteraction.VIDEO_PLAY_DURATION,
                EBG.Interactions.Categories.VIDEO));
            var b = a.eventData.intName,
                c = this._getAssetIdFromEvent(a);
            EBG.intMgr.startAggregate(b, this._adConfig.uid, c)
        } catch (d) {}
    },
    _updateAggregationTimeHandler: function(a) {
        try {
            var b = a.eventData.intName,
                c = parseInt(a.eventData.deltalDuration),
                d = this._getAssetIdFromEvent(a);
            EBG.intMgr.updateAggregation(b, this._adConfig.uid, c, d)
        } catch (e) {}
    },
    _stopAggregateHandler: function(a) {
        try {
            var b = a.eventData.intName,
                c = this._getAssetIdFromEvent(a);
            EBG.intMgr.stopAggregate(b, this._adConfig.uid,
                c)
        } catch (d) {}
    },
    _startTimerVideoHandler: function(a) {
        try {
            EBG.intMgr.isInteractionExist(EBG.VideoInteraction.FULLSCREEN_DURATION.toLowerCase(), EBG.Interactions.InteractionTypes.TIMER, this._adConfig.uid) || (this._addTimerInteraction(EBG.VideoInteraction.FULLSCREEN_DURATION, EBG.Interactions.Categories.VIDEO), this._addTimerInteraction(EBG.VideoInteraction.VIDEO_PLAY_DURATION, EBG.Interactions.Categories.VIDEO))
        } catch (b) {}
        this._startTimerHandler(a)
    },
    _startTimerHandler: function(a) {
        try {
            var b = a.eventData.intName,
                c = this._getAssetIdFromEvent(a);
            this._startTimer(b, c)
        } catch (d) {}
    },
    _stopTimerHandler: function(a) {
        try {
            var b = a.eventData.intName,
                c = this._getAssetIdFromEvent(a);
            this._stopTimer(b, c)
        } catch (d) {}
    },
    _getAssetIdFromEvent: function(a) {
        var b = EBGInfra.isDefined(a.eventData.assetId) ? a.eventData.assetId : null;
        if ((!EBGInfra.isDefined(b) || !EBGInfra.notNull(b)) && a.eventData.ebmovie)
            if (b = 0, "0" != a.eventData.ebmovie) {
                a = EBG.format("ebMovie{0}", a.eventData.ebmovie);
                if (this._adConfig.assets && this._adConfig.assets[a]) b = this._adConfig.assets[a].assetID;
                if (this._adConfig.bestAsset && this._adConfig.bestAsset[a]) b = this._adConfig.bestAsset[a].assetID
            }
        return b
    },
    _updateTimerHandler: function(a) {
        try {
            var b = a.eventData.intName,
                c = a.eventData.timerValue;
            if ("ebintduration" == b) b = EBG.Interactions.SystemInts.INT_DURATION, c /= 1E3;
            this._updateTimer(b, c)
        } catch (d) {}
    },
    _startTimer: function(a, b) {
        EBG.intMgr.startTimer(a, this._adConfig.uid, b)
    },
    _stopTimer: function(a, b) {
        EBG.intMgr.stopTimer(a, this._adConfig.uid, b)
    },
    _updateTimer: function(a, b) {
        EBG.intMgr.updateTimer(a, this._adConfig.uid,
            b)
    },
    _notifiedInteractionHandler: function(a) {
        try {
            a.eventData.intName = a.eventData.name;
            if (a.eventData.name == EBG.Interactions.SystemInts.PLAYER_PARAMS) a.eventData.value.env = EBG.adaptor.browser.getEnvironment();
            EBG.intMgr.handleCounterInteraction(a.eventData.name, this._adConfig.uid, 0, !1, a.eventData)
        } catch (b) {}
    },
    _videoInteractionHandler: function(a) {
        try {
            var b = a.eventData,
                c = this._getAssetIdFromEvent(a),
                d = b.userInitiated ? b.userInitiated : !1,
                e;
            if (b.intName == EBG.VideoInteraction.STARTED && this.visibilityMgr &&
                this.visibilityMgr.calculateVisibilityPercentage() >= this._adConfig.visibility.iabMinSurface) this._handleVideoVisibilityChangeSub = this._subscribeToAdEvent(EBG.Events.EventNames.VISIBILITY_CHECK, function(a) {
                if (a.eventData.percentage < this._adConfig.visibility.iabMinSurface) this._videoRemainedVisible = !1, EBG.eventMgr.unsubscribeFromEvent(this._handleVideoVisibilityChangeSub)
            }, EBG.Events.EventTiming.ONTIME), this._videoRemainedVisible = !0;
            EBGInfra.hasOwnValue(EBG.VideoQuartiles, b.intName, !0) && this._videoRemainedVisible &&
                (e = {
                    value: 1
                });
            b.intName == EBG.VideoInteraction.FULLPLAY && this._handleVideoVisibilityChangeSub && EBG.eventMgr.unsubscribeFromEvent(this._handleVideoVisibilityChangeSub);
            EBG.intMgr.handleVideoInteraction(b.intName, this._adConfig.uid, c, d, e);
            this._dpm.send(EBG.DataProfile.DEBUG, {
                qrtl: 1
            })
        } catch (g) {}
    },
    _videoFSOpenHandler: function(a) {
        this.isInFullScreenMode = !0;
        a = {
            eventData: {
                assetId: this._adConfig.FSMovie.assetID,
                userInitiated: !0,
                intName: "ebFSStart"
            }
        };
        this._videoInteractionHandler(a);
        a = new EBG.Events.Event(EBG.Events.EventNames.FULL_SCREEN_START);
        a.dispatcher = this;
        a.eventData = "FullScreen";
        EBG.eventMgr.dispatchEvent(a)
    },
    _videoFSCloseHandler: function() {
        this.isInFullScreenMode = !1;
        var a = {
            eventData: {
                assetId: this._adConfig.FSMovie.assetID,
                userInitiated: !0,
                intName: "ebFSEnd"
            }
        };
        a.eventData.assetId = this._adConfig.FSMovie.assetID;
        this._videoInteractionHandler(a);
        a = new EBG.Events.Event(EBG.Events.EventNames.FULL_SCREEN_END);
        a.dispatcher = this;
        a.eventData = "FullScreen";
        EBG.eventMgr.dispatchEvent(a)
    },
    _addSystemInteractions: function() {
        EBG.callSuperFunction(EBG.Ads.RichAd,
            this, "_addSystemInteractions");
        try {
            var a = EBG.Interactions.Categories.SYSTEM;
            this._addTimerInteraction(EBG.Interactions.SystemInts.INT_DURATION, a);
            this._addTimerInteraction(EBG.Interactions.SystemInts.AD_DURATION, a);
            this._addTimerInteraction(EBG.Interactions.SystemInts.DWELL_TIME, a);
            EBG.EnableVisibilityUtil && EBG.EnableVisibilityUtil.addVisibilityInteractions.apply(this);
            (this._adConfig.playerParamsEnabled || this._adConfig.sendMetricsData) && this._addCounterInteraction(EBG.Interactions.SystemInts.PLAYER_PARAMS,
                a, !1, 5, null, null, !0)
        } catch (b) {}
    },
    _addCounterInteraction: function(a, b, c, d, e, g, f) {
        var h = this._adConfig.interactions[EBG.isDefinedNotNull(g) ? g : a],
            i = new EBG.Interactions.CounterInteractionData(a, b, this._adConfig.uid);
        if (e) i.isPanel = !0;
        h ? EBG.callSuperFunction(EBG.Ads.RichAd, this, "_addCounterInteraction", [a, b, c]) : (i.initiationType = EBG.Interactions.InitiationTypes.AUTO, i.numLeftToReport = i.numToReport = d ? d : i.numLeftToReport, i.reportImmediately = c ? !0 : !1, i.useInteractionsStrPipe = f ? !0 : !1, a = new EBG.Interactions.CounterInteraction(i),
            EBG.intMgr.addInteraction(a, g))
    },
    _addTimerInteraction: function(a, b, c, d) {
        a = new EBG.Interactions.TimerInteractionData(a, b, this._adConfig.uid);
        if (c) a.isPanel = c, a.assetID = d || 0;
        c = new EBG.Interactions.TimerInteraction(a);
        EBG.intMgr.addInteraction(c)
    },
    _addAggregateInteraction: function(a, b, c) {
        a = new EBG.Interactions.AggregationInteractionData(a, b, this._adConfig.uid);
        if (c) a.isPanel = c;
        c = new EBG.Interactions.AggregateInteraction(a);
        EBG.intMgr.addInteraction(c)
    },
    _addVideoInteractions: function() {
        try {
            this._addVideoInteraction(EBG.VideoInteraction.STARTED,
                void 0, void 0, this.videoReportImmediate), this._addVideoInteraction(EBG.VideoInteraction.PERCENT_25_PLAYED, void 0, void 0, this.videoReportImmediate), this._addVideoInteraction(EBG.VideoInteraction.PERCENT_50_PLAYED, void 0, void 0, this.videoReportImmediate), this._addVideoInteraction(EBG.VideoInteraction.PERCENT_75_PLAYED, void 0, void 0, this.videoReportImmediate), this._addVideoInteraction(EBG.VideoInteraction.FULLPLAY, void 0, void 0, this.videoReportImmediate, this.sync), this._addVideoInteraction(EBG.VideoInteraction.MUTE, !0), this._addVideoInteraction(EBG.VideoInteraction.UNMUTE, !0), this._addVideoInteraction(EBG.VideoInteraction.UNMUTED), this._addVideoInteraction(EBG.VideoInteraction.PAUSE, !0), this._addVideoInteraction(EBG.VideoInteraction.REPLAY, !0), this._addVideoInteraction(EBG.VideoInteraction.SLIDER_DRAGGED, !0), this._addVideoInteraction(EBG.VideoInteraction.FULLSCREEN_START, !0), this._addVideoInteraction(EBG.VideoInteraction.FULLSCREEN_END, !0), this._addVideoInteraction(EBG.VideoInteraction.FULLSCREEN_MUTE, !0), this._addVideoInteraction(EBG.VideoInteraction.FULLSCREEN_PAUSE, !0), this._addVideoInteraction(EBG.VideoInteraction.USER_INITIATED_VIDEO, !1, 1), this._addVideoInteraction(EBG.VideoInteraction.SKIP, !0)
        } catch (a) {}
    },
    _addVideoInteraction: function(a, b, c, d, e) {
        a = new EBG.Interactions.CounterInteractionData(a, EBG.Interactions.Categories.VIDEO, this._adConfig.uid);
        a.initiationType = b ? EBG.Interactions.InitiationTypes.USER : EBG.Interactions.InitiationTypes.AUTO;
        if (c) a.numLeftToReport = c;
        a.reportImmediately = !!d;
        a.sync = !!e;
        b = new EBG.Interactions.CounterInteraction(a);
        EBG.intMgr.addInteraction(b)
    },
    _addCustomInteractions: function() {
        try {
            var a = this._adConfig.interactions,
                b;
            for (b in a)
                if (a.hasOwnProperty(b)) {
                    var c = EBG.intMgr.adsData[this._adConfig.uid];
                    switch (a[b].type) {
                        case 0:
                            c.Counter.hasOwnProperty(b) || b !== EBG.Interactions.SystemInts.CLICK && b !== EBG.Interactions.SystemInts.DEFAULT_CLICK && this._addCounterInteraction(b, EBG.Interactions.Categories.CUSTOM);
                            break;
                        case 1:
                            c.Timer.hasOwnProperty(b) || this._addTimerInteraction(b, EBG.Interactions.Categories.CUSTOM)
                    }
                }
        } catch (d) {}
    },
    subscribeToStandardElementEvents: function(a) {
        var b =
            new EBG.Events.EventSubscription("mouseover", this._handleMouseEvent, this);
        b.isElementEvent = !0;
        b.elementId = a;
        EBG.eventMgr.subscribeToEvent(b);
        b = new EBG.Events.EventSubscription("mouseout", this._handleMouseEvent, this);
        b.isElementEvent = !0;
        b.elementId = a;
        EBG.eventMgr.subscribeToEvent(b)
    },
    _handleMouseEvent: function(a) {
        var b = a.currentTarget ? a.currentTarget : a.srcElement,
            c = a.relatedTarget ? a.relatedTarget : null,
            d = "",
            e = b.id,
            g = e.lastIndexOf("_") + 1,
            f = "",
            f = b.id.split("_"),
            h = f.length,
            f = f[h - 2] + "_" + f[h - 1],
            f = EBGInfra.isDefined(f) ?
            f : "";
        g && (d = e.substring(g));
        e = "mouseover" == a.type ? new EBG.Events.Event(EBG.Events.EventNames.MOUSE_OVER) : new EBG.Events.Event(EBG.Events.EventNames.MOUSE_OUT);
        if (!("mouseout" == a.type && EBGInfra.isDefined(EBG.ads[f]) && EBG.ads[f].isInFullScreenMode)) e.dispatcher = {
            _adConfig: {
                rnd: d
            }
        }, e.eventData = {
            target: b,
            relatedTarget: c
        }, EBG.eventMgr.dispatchEvent(e)
    },
    _verifyPlaceHolder: function() {
        EBG.callSuperFunction(EBG.Ads.RichAd, this, "_verifyPlaceHolder") || EBG.adaptor.addPlaceHolder({
            tagName: EBG.Adaptors.TagNames.DIV,
            attributes: {
                id: this._adConfig.placeHolderId,
                dir: "ltr"
            },
            children: null
        })
    },
    _changeBackgroundImage: function() {
        this._wallpaper = new EBG.Adaptors.Wallpaper;
        var a = new EBG.Adaptors.Wallpaper.BgData;
        a.imgSrc = EBG.combinePaths(this._adConfig.resourcePath, this._adConfig.bgImgSrc);
        a.tiling = this._adConfig.bgRepeat;
        a.scrolling = this._adConfig.bgIgnoreScrolling;
        a.positionX = this._adConfig.bgPosX;
        a.positionY = this._adConfig.bgPosY;
        this._wallpaper.SetBackgroundImage(a)
    },
    _removeBackgroundImage: function() {
        this._wallpaper &&
            this._wallpaper.RemoveBackgroundImage()
    },
    _setStateInCreativeState: function(a) {
        this._adConfig.optOut || (a = EBG.format("{0}{1}/{2}/adServer.bs?cn=SetState&CampaignID={3}&StateValue={4}&ord={5}", EBG.protocol, this._adConfig.bsPath, "BurstingPipe", this._adConfig.campaignId, a.eventData.stateValue ? a.eventData.stateValue : "", Math.random()), EBG.adaptor.reportToRemoteServer(a, !0, !0))
    }
};
EBG.declareClass(EBG.Ads.RichAd, EBG.Ads.Ad);
EBG.Ads.RichBannerHtml5 = function(a) {
    this._updateAdConfig(a);
    this._adConfig = a;
    this._handleAppearance();
    EBG.callSuperConstructor(EBG.Ads.RichBannerHtml5, this, [a])
};
EBG.Ads.RichBannerHtml5.requiresIframeBust = !1;
EBG.Ads.RichBannerHtml5.prototype = {
    _isClickOccur: !1,
    _CCs: {},
    _banner: {
        divId: "",
        resId: "",
        width: 0,
        height: 0
    },
    _canShow: function() {
        var a = !1;
        this._adConfig.adHtmlPath ? EBG.adaptor.browser.isIE() && !this._adConfig.isPreview ? (a = (this._adConfig.displayWin || EBG.adaptor.getDisplayWin()).document.documentMode, a = 9 == a && this._adConfig.isSafeFrame ? !1 : 8 < a) : a = !0 : this._adConfig.imageOnly = !0;
        return a
    },
    _handleAppearance: function() {
        if (EBG.AdaptiveUtils && this._adConfig.adaptiveAd) this._updatePlaceHolder(), this._adaptiveUtils =
            new EBG.AdaptiveUtils(this._adConfig), this._adaptiveUtils.updateAdConfig(), this._adaptiveUtils.subscribeToEvents()
    },
    handleIOSAdaptiveResize: function() {
        this._bannerCC.handleIOSAdaptiveResize()
    },
    _updatePlaceHolder: function() {
        this._verifyPlaceHolder();
        var a = EBG.adaptor.getElementById(this._adConfig.placeHolderId),
            b = this._adConfig.width && EBG.isNumber(this._adConfig.width) ? this._adConfig.width + "px" : "100%",
            c = this._adConfig.height && EBG.isNumber(this._adConfig.height) ? this._adConfig.height + "px" : "100%";
        this.resizePlaceHolder = !1;
        EBG.adaptor.setElemStyle(a, "width", b);
        EBG.adaptor.setElemStyle(a, "height", c)
    },
    _updateAdConfig: function(a) {
        this._updateSVJSON(a)
    },
    _updateSVJSON: function(a) {
        var b = EBG.isGlobalDef("ebAdXmlPath") ? ebAdXmlPath : "";
        if (b && a.svJSON) a.svPreview = b;
        if (a.sv3CatalogMap && a.massVersioning && a.massVersioning.adVersions && "" != a.massVersioning.adVersions) versions = 0 < a.massVersioning.massVersionFolderDivider ? EBG.Ads.Ad.Fn.fixMVPathString(a.massVersioning.adVersions, a.massVersioning.massVersionFolderDivider) : a.massVersioning.adVersions,
            a.versions = versions;
        if ((!a.ffs || !a.ffs.CFF_SASCat) && a.massVersioning && a.massVersioning.versionFullPath) {
            if (a.versions = a.massVersioning.adVersionsObject ? a.massVersioning.adVersionsObject.p : "", b = EBG.isGlobalDef("ebAdJson") ? ebAdJson : null) a.versionPreviewJson = b
        } else if (a.massVersioning && a.massVersioning.versionFullPath && (a.versions = a.massVersioning.adVersionsObject, b = EBG.isGlobalDef("ebAdJson") ? ebAdJson : null)) a.versionPreviewJson = b
    },
    _subscribeToEvents: function() {
        EBG.callSuperFunction(EBG.Ads.RichBannerHtml5,
            this, "_subscribeToEvents");
        this._subscribeToAdEvent(EBG.EBMessage.CLICKTHROUGH, this._updateAssetsWithClick);
        this._subscribeToAdEvent(EBG.EBMessage.SWIPE, function() {
            EBG.intMgr.handleCounterInteraction(EBG.Interactions.SystemInts.SWIPE, this._adConfig.uid)
        });
        this._subscribeToAdEvent(EBG.EBMessage.DISPOSE, function() {
            var a = new EBG.Events.Event(EBG.Events.EventNames.PAGE_UNLOAD);
            EBG.eventMgr.dispatchEvent(a)
        });
        this._shouldWaitForTriggerAdStart() && this._subscribeToAdEvent(EBG.EBMessage.TRIGGER_AD_START,
            this._triggerAdStart)
    },
    _updateAssetsWithClick: function(a) {
        this._isClickOccur = !0;
        clickedProductId = a && a.eventData && a.eventData.isProductClick && a.eventData.clickedVersion ? a.eventData.clickedVersion : null;
        var a = {
                clickOccur: !0,
                clickedProductId: clickedProductId
            },
            b;
        for (b in this._CCs) this._CCs.hasOwnProperty(b) && this._CCs[b].updateClick(a)
    },
    _writeCreativeElements: function() {
        var a = EBG.adaptor.generateElementId("BannerDiv", this._adConfig.uid),
            b = {
                tagName: EBG.Adaptors.TagNames.DIV,
                attributes: {
                    id: a,
                    dir: "ltr",
                    style: {}
                },
                children: this._bannerCC.buildCreativeContainerJson()
            };
        if ("undefined" != typeof this._adConfig.display) b.attributes.style.display = this._adConfig.display;
        var c = b.children[0] ? b.children[0].attributes.id : this._bannerCC.iframeId;
        this._adConfig.forceClickthrough && b.children.unshift(this.buildClickDivJson());
        var d = new EBG.Events.Event(EBG.Events.EventNames.ADD_CREATIVES);
        d.dispatcher = this;
        d.eventData = {
            tagsObj: b,
            assetId: c,
            isPanel: !1,
            creativeType: EBG.Events.EventNames.ADD_HTML5_MAIN_CREATIVE
        };
        d.timing =
            EBG.Events.EventTiming.BEFORE;
        if (!EBG.eventMgr.dispatchEvent(d)) EBG.adaptor.addInlineDOM(b, this._adConfig.placeHolderId), this.bannerDivId = a, this._banner.divId = a, this._banner.width = this._adConfig.width, this._banner.height = this._adConfig.height, d.timing = EBG.Events.EventTiming.ONTIME, EBG.eventMgr.dispatchEvent(d), this.subscribeToStandardElementEvents(a), d.timing = EBG.Events.EventTiming.AFTER, EBG.eventMgr.dispatchEvent(d)
    },
    _addCreatives: function() {
        this._loadBanner()
    },
    _loadBanner: function() {
        this._bannerCC =
            new EBG.IFrameCC(this._adConfig, {
                clickOccur: this._isClickOccur
            });
        this._bannerCC.iframeId = EBG.adaptor.generateElementId("BannerIFrame", this._adConfig.uid);
        this._CCs[this._bannerCC.iframeId] = this._bannerCC;
        this._bannerCC.setAssetCreativeParams();
        this._writeCreativeElements()
    },
    _addSystemInteractions: function() {
        EBG.callSuperFunction(EBG.Ads.RichBannerHtml5, this, "_addSystemInteractions");
        if (EBG.adaptor.browser.isMobile()) try {
            var a = new EBG.Interactions.CounterInteractionData(EBG.Interactions.SystemInts.SWIPE,
                EBG.Interactions.Categories.SYSTEM, this._adConfig.uid);
            a.initiationType = EBG.Interactions.InitiationTypes.USER;
            var b = new EBG.Interactions.CounterInteraction(a);
            EBG.intMgr.addInteraction(b, EBG.Interactions.SystemInts.SWIPE)
        } catch (c) {}
    },
    _getBannerLocation: function() {
        var a;
        if (this._bannerCC && this._bannerCC.iframeId) a = EBG.adaptor.getPositioningById(this._bannerCC.iframeId, !0, this._adConfig.actualServingMode);
        else if (this._preloadImgResId) a = EBG.adaptor.getPositioningById(this._preloadImgResId);
        else return null;
        return EBG.callSuperFunction(EBG.Ads.RichBannerHtml5, this, "_getBannerLocation", [a])
    },
    _getAdCodeBase: function() {
        return EBG.callSuperFunction(EBG.Ads.RichBannerHtml5, this, "_getAdCodeBase", [2])
    },
    _switchAssetsAfterThrottle: function() {},
    _shouldCheckIfFlashBlocked: function() {
        return !1
    },
    buildClickDivJson: function() {
        var a = EBG.format("ClickDiv_{0}", this._adConfig.uid);
        return {
            tagName: EBG.Adaptors.TagNames.DIV,
            attributes: {
                id: a,
                name: a,
                style: {
                    width: EBG.px(this._adConfig.width),
                    height: EBG.px(this._adConfig.height),
                    position: "absolute",
                    top: "auto",
                    left: "auto",
                    background: "url(about:blank)",
                    cursor: "pointer"
                },
                onclick: EBG.format('EBG.ads["' + this._adConfig.uid + '"].onImageClick("{0}", {1})', this._adConfig.uid, !1)
            }
        }
    }
};
EBG.declareClass(EBG.Ads.RichBannerHtml5, EBG.Ads.RichAd);
EBG.Ads.PoliteBannerHtml5 = function(a) {
    EBG.callSuperConstructor(EBG.Ads.PoliteBannerHtml5, this, [a])
};
EBG.Ads.PoliteBannerHtml5.requiresIframeBust = !1;
EBG.Ads.PoliteBannerHtml5.prototype = {
    _preloadImgResId: null,
    _richShown: !1,
    _addCreatives: function() {
        if (1 == this._downloadMode) EBG.isDefined(this._adConfig.preloadImagePath) ? "" != this._adConfig.preloadImagePath ? this.checkAndShowDefaultImage(this._addPreloadImg) : this._preloadImgResId = this._addImgAsCreative("ebPreloadImg", EBG.combinePaths(ebBigS, "Res/blank_1X1.gif"), EBG.Events.EventNames.ADD_BANNER_PRELOAD_IMAGE_CREATIVE) : this._downloadMode = 3;
        if (3 == this._downloadMode) this._loadBanner(), this._richShown = !0
    },
    _handlePageLoaded: function() {
        if (1 == this._downloadMode)
            if (null != this._preloadImgResId) this._loadBanerAfterPreload(this._preloadImgResId);
            else if (null != this._defaultImgResId && !this._adConfig.showOnlyImage && !this._adConfig.imageOnly && !this._adConfig.defaultImageDisplayed) this._loadBanerAfterPreload(this._defaultImgResId);
        else if (null == this._defaultImgResId && !this._adConfig.showOnlyImage && !this._adConfig.imageOnly && !this._adConfig.defaultImageDisplayed) this._loadBanner(), this._richShown = !0
    },
    _loadBanerAfterPreload: function(a) {
        EBG.adaptor.removeElement(a);
        this._loadBanner();
        this._richShown = !0
    }
};
EBG.declareClass(EBG.Ads.PoliteBannerHtml5, EBG.Ads.RichBannerHtml5);
EBG.declareNamespace("CreativeContainer");
EBG.CreativeContainer = function(a) {
    this._adConfig = a
};
EBG.declareClass(EBG.CreativeContainer, null);
EBGInfra.mergeObj({
    getCC: function(a, b, c) {
        var d = null;
        if ((a = EBG.ads[a]) && a._panels && a._panels[b]) d = a._panels[b].CC;
        else if (EBG.hasOwnValue(EBG.adParts, b) && !c)
            for (var e in a._CCs)
                if (-1 < e.toLowerCase().indexOf(b.toLowerCase())) {
                    d = a._CCs[e];
                    break
                }
        return d
    }
}, EBGInfra, !1);
EBGInfra.mergeObj(EBGInfra, EBG, !1);
EBG.declareNamespace("API.CC");
EBG.API.CC.getRes = function(a, b) {
    var c = EBGInfra.getCC(a, b),
        d = null;
    if (c)
        if (c._flashResID) d = EBG.adaptor.getElementById(c._flashResID);
        else if (c._iframe) d = c._iframe;
    return d
};
EBG.API.CC.getResID = function(a, b) {
    var c = EBGInfra.getCC(a, b),
        d = null;
    if (c)
        if (c._flashResID) d = c._flashResID;
        else if (c.iframeId) d = c.iframeId;
    return d
};
EBG.declareNamespace("IFrameCC");
EBG.IFrameCC = function(a, b) {
    EBG.callSuperConstructor(EBG.IFrameCC, this, [a]);
    this._isClickOccur = b.clickOccur;
    this._isEBInitialized = !1;
    this._isDocLoaded = !1;
    this._iframe = null;
    this.iframeId = null;
    this._isReqInitReceived = !1;
    this._assetCreativeParams = null;
    this._subscribeToEvents();
    this.pm = EBG.pm;
    this.useFriendlyIframe = this._adConfig.isSafeFrame || this._adConfig.isSkype;
    this._registerToEvents();
    this._listenToMessages();
    this._videoAssetsActive = []
};
EBG.IFrameCC.prototype = {
    _isContentLoading: !1,
    _videoAssetsActive: null,
    isAssetFullyLoaded: function() {
        return this._isEBInitialized && this._isDocLoaded
    },
    _subscribeToEvents: function() {
        if (!EBG.adaptor.isReady()) {
            var a = new EBG.Events.EventSubscription(EBG.EBMessage.ADAPTOR_READY, this._checkSendInit, this);
            a.timing = EBG.Events.EventTiming.ONTIME;
            EBG.eventMgr.subscribeToEvent(a)
        }
        a = new EBG.Events.EventSubscription(EBG.Events.EventNames.MESSAGE_CREATIVE, function(a) {
            !a.eventData.msgType || !a.eventData.msgData || a.eventData.assetId &&
                this.iframeId != a.eventData.assetId || this._sendMessage(a.eventData.msgType, a.eventData.msgData)
        }, this);
        a.timing = EBG.Events.EventTiming.ONTIME;
        EBG.eventMgr.subscribeToEvent(a)
    },
    isEBInitialized: function() {
        return this._isEBInitialized
    },
    isDocLoaded: function() {
        return this._isDocLoaded
    },
    updateClick: function(a) {
        this._isClickOccur = a.clickOccur;
        this._sendMessage(EBG.EBMessage.UPDATE_CLICK, a)
    },
    setAssetCreativeParams: function() {
        if (this._adConfig.AdCreativeParams) this._assetCreativeParams = this._adConfig.AdCreativeParams
    },
    _handleMessage: function(a, b) {
        if (this._iframe)
            if (this._iframe.contentWindow) {
                if (b.source === this._iframe.contentWindow) {
                    var c = JSON.parse(b.data);
                    if (c) switch (c.type) {
                        case EBG.EBMessage.REQ_INIT:
                            this._isReqInitReceived = !0;
                            (EBG.adaptor.isReady() || !EBG.adaptor.isSDKDefined()) && this._sendInitToCreative();
                            break;
                        case EBG.EBMessage.INITDONE:
                            this._handleInitDone();
                            break;
                        case EBG.EBMessage.GET_ENVIROMENT:
                            this._sendAdKitData(c.type);
                            break;
                        case EBG.EBMessage.CLOSE_AD:
                            this._dispatchCloseAdEvent();
                            break;
                        default:
                            this._handleGeneralMessage(c)
                    }
                }
            } else EBG.runTimed(this,
                this._handleMessage, [a, b], 20);
        else this._getIframeElement(), EBG.runTimed(this, this._handleMessage, [a, b], 20)
    },
    _handleGeneralMessage: function(a) {
        var b = new EBG.Events.Event(a.type);
        b.dispatcher = this;
        if (a.data && (b.eventData = a.data, b.eventData && b.eventData.command)) this[b.eventData.command](b.eventData);
        EBG.eventMgr.dispatchEvent(b);
        this.handleIntMonitor(a)
    },
    handleIntMonitor: function(a) {
        if (EBG.adaptor.intMonitorExist()) {
            var b = new EBG.Events.Event(EBG.EBMessage.NOTIFY_INTERACTION_MONITOR);
            b.eventData = this._createIntMonitorObj(a);
            EBG.eventMgr.dispatchEvent(b)
        }
    },
    _handleInitDone: function() {
        this._isContentLoading = !1;
        this._isEBInitialized = !0;
        var a = new EBG.Events.Event(EBG.Events.EventNames.CREATIVE_CONTAINER_READY);
        a.dispatcher = this;
        a.eventData = this.iframeId;
        EBG.eventMgr.dispatchEvent(a);
        if (EBG.adaptor.isPageLoaded()) a = new EBG.Events.Event(EBG.Events.EbEventNames.PAGE_LOAD), a.dispatcher = this, this._handleEvents(a)
    },
    _saveAssetSrc: function(a) {
        a.src = this.iframeId
    },
    _registerVideo: function(a) {
        -1 == EBGInfra.indexOfArray(this._videoAssetsActive,
            a.assetId) && this._videoAssetsActive.push(a.assetId)
    },
    _unregisterVideo: function(a) {
        if (0 < this._videoAssetsActive.length) var b = EBGInfra.indexOfArray(this._videoAssetsActive, a.assetId);
        this._videoAssetsActive.splice(b, 1)
    },
    notifyDocLoaded: function(a) {
        this._isDocLoaded = !0;
        this._saveAssetSrc(a)
    },
    getWidth: function() {
        return this._adConfig.width ? this._adConfig.width : this.getActualSize().width
    },
    getHeight: function() {
        return this._adConfig.height ? this._adConfig.height : this.getActualSize().height
    },
    getActualSize: function() {
        var a =
            EBG.adaptor.getElementById(this.iframeId);
        return a ? EBG.adaptor.getBoundingClientRect(a) : {
            width: 0,
            height: 0
        }
    },
    getAdPartsData: function() {
        var a = {
            type: EBG.adParts.BANNER,
            adkitConfigUrl: this._adConfig.assets["config.js"] ? this._adConfig.resourcePath + this._adConfig.assets["config.js"].dsPath : ""
        };
        a.width = a.containerWidth = this.getWidth();
        a.height = a.containerHeight = this.getHeight();
        return a
    },
    _sendAdKitData: function(a) {
        this._dpm = EBG.dataPipeMgr.getPipe(this._adConfig.sID);
        this._dpm.send(EBG.DataProfile.SERVING, {
            adkit: 1
        });
        var b = EBG.cloneObj(this._adConfig.adKitData),
            c = EBG.ads && this._adConfig && this._adConfig.uid && EBG.ads[this._adConfig.uid] ? EBG.ads[this._adConfig.uid]._adaptiveUtils : null;
        if (c) {
            b.adParts = b.adParts || {};
            b.adParts.type = EBG.adParts.BANNER;
            b.adParts.adkitConfigUrl = this._adConfig.assets["config.js"] ? this._adConfig.resourcePath + this._adConfig.assets["config.js"].dsPath : "";
            var c = c.getAsset(),
                d = this.getActualSize();
            if (c) b.adParts.name = c.name, b.adParts.width = c.width, b.adParts.height = c.height;
            if (d) b.adParts.containerWidth =
                d.width, b.adParts.containerHeight = d.height, b.actualWidth = d.width, b.actualHeight = d.height
        } else b.adParts = this.getAdPartsData(), b.adParts.width = this._adConfig.originalWidth || b.adParts.width, b.adParts.height = this._adConfig.originalHeight || b.adParts.height;
        if (this._adConfig.expansionParams) b.adParts.expansionParams = this._adConfig.expansionParams;
        this._sendMessage(a, b)
    },
    handleIOSAdaptiveResize: function() {
        var a = this._iframe.getBoundingClientRect(),
            b = this._iframe.offsetParent.getBoundingClientRect(),
            c = this._iframe.style,
            d = !1;
        if (a.height != b.height) c.height = EBG.px(b.height), d = !0;
        if (a.width != b.width) c.width = EBG.px(b.width), d = !0;
        d ? EBG.runTimed(this, this.handleIOSAdaptiveResize, [], 100) : (c.height = "", c.width = "")
    },
    _createIntMonitorObj: function(a) {
        var b = "";
        if (a) switch (a.type) {
            case EBG.EBMessage.VIDEO_INTERACTION:
                a.data && (b = EBG.format("'{0}',{1}", a.data.intName, a.data.ordinalNum));
                break;
            case EBG.EBMessage.EXPAND:
            case EBG.EBMessage.COLLAPSE:
                b = this._handleSpecialInt(a);
                break;
            default:
                b = a.data.intName
        }
        return {
            command: a.type,
            args: b,
            objName: this.iframeId,
            adId: this._adConfig.adId
        }
    },
    _handleSpecialInt: function(a) {
        var b = "";
        switch (a.type) {
            case EBG.EBMessage.EXPAND:
                b = a.data && EBGInfra.isDefinedNotNull(a.data.panelName) ? a.data.panelName : "";
                b += a.data && EBGInfra.isDefinedNotNull(a.data.actionType) && "" != a.data.actionType ? "," + a.data.actionType : ",User";
                break;
            case EBG.EBMessage.COLLAPSE:
                b = a.data && EBGInfra.isDefinedNotNull(a.data.panelName) ? a.data.panelName : ""
        }
        return b
    },
    _listenToMessages: function() {
        for (var a in EBG.EBMessage) EBG.EBMessage.hasOwnProperty(a) &&
            (a = EBG.EBMessage[a], EBG.pm.bind(a, this._handleMessage, this, this._adConfig.displayWin || EBG.adaptor.getDisplayWin()))
    },
    _UnbindMessages: function() {
        for (var a in EBG.EBMessage) EBG.EBMessage.hasOwnProperty(a) && (a = EBG.EBMessage[a], EBG.pm.unbind(a, this._handleMessage))
    },
    _sendMessage: function(a, b) {
        this._iframe && (this.useFriendlyIframe ? EBG.runTimed(this, function() {
            this._iframe && this._iframe.contentWindow && this._iframe.contentWindow.EBG && this._iframe.contentWindow.EBG.pm && this._iframe.contentWindow.EBG.pm.dispatch(a,
                b, window, this._iframe.contentWindow)
        }, [], 1) : EBG.pm({
            target: this._iframe.contentWindow,
            type: a,
            data: b
        }))
    },
    _handleEvents: function(a) {
        this._isEBInitialized && this._sendMessage(a.name, a.eventData)
    },
    _registerToEvents: function() {
        for (var a in EBG.Events.EbEventNames) EBG.Events.EbEventNames.hasOwnProperty(a) && EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EbEventNames[a], this._handleEvents, this))
    },
    _unregisterToEvents: function() {
        for (var a in EBG.Events.EbEventNames) EBG.Events.EbEventNames.hasOwnProperty(a) &&
            EBG.eventMgr.unsubscribeFromEvent(new EBG.Events.EventSubscription(EBG.Events.EbEventNames[a], this._handleEvents, this))
    },
    _dispatchCloseAdEvent: function() {
        var a = new EBG.Events.Event(EBG.Events.EventNames.CLOSE_AD);
        a.dispatcher = this;
        a.timing = EBG.Events.EventTiming.ONTIME;
        EBG.eventMgr.dispatchEvent(a)
    },
    _checkSendInit: function() {
        this._isReqInitReceived && this._sendInitToCreative()
    },
    _sendInitToCreative: function() {
        if (this._adConfig) {
            var a = {
                assetCreativeParams: this._assetCreativeParams,
                clickOccur: this._isClickOccur,
                clickedProductIds: this._getClickedProductIDs(),
                adConfig: this._adConfig,
                ffs: EBG.serverResponses[this._adConfig.uid].ffs,
                dsBasePath: this._adConfig.resourcePath,
                events: EBG.Events.EbEventNames,
                assetId: this.iframeId,
                visibilityAssetId: this.iframeId,
                browserData: {
                    browserTypes: EBG.adaptor.browser._browserTypes,
                    browserType: EBG.adaptor.browser._browserType,
                    browserVer: EBG.adaptor.browser.getVersion(),
                    isMobile: EBG.adaptor.browser.isMobile(),
                    isIOS: EBG.adaptor.browser.isiOS(),
                    isAndroid: EBG.adaptor.browser.isAndroid(),
                    isAndroidNative: EBG.adaptor.browser.isAndroidNative()
                }
            };
            this._sendMessage(EBG.EBMessage.INIT, a)
        }
    },
    _getIframeElement: function() {
        var a = EBG.adaptor.getElementById(this.iframeId);
        a ? (this._iframe = a, this.useFriendlyIframe && !this._isContentLoading && this._loadContentToIframe(this.getIframePath())) : EBG.runTimed(this, this._getIframeElement, [], 20)
    },
    _loadContentToIframe: function(a) {
        this._isContentLoading = !0;
        var b = a.split("/");
        b.pop();
        var b = b.join("/") + "/",
            c = a.match(/\?.*$/)[0],
            d = this._adConfig.adKitData;
        d.adParts =
            this.getAdPartsData();
        var e = this;
        this._getAssetHtmlContent(a, function(a) {
            a ? (a = '<base href="' + b + '"/>' + a, e._iframe.contentWindow.document.open("text/html", "replace"), e._iframe.contentWindow.ebSafeFrame = {
                pm: function(a) {
                    a && EBG.runTimed(e, function() {
                        e.pm.dispatch(a.type, a.data, e._iframe.contentWindow, a.target)
                    }, [], 1)
                },
                sendMessage: function(a) {
                    this.pm(a)
                },
                getClickTagUrl: function() {
                    return EBG.intMgr.getClickTag(e._adConfig.uid)
                },
                getAdKitData: function() {
                    return {
                        data: JSON.stringify({
                            data: d,
                            type: EBG.EBMessage.GET_ENVIROMENT
                        }),
                        source: window
                    }
                }
            }, e._iframe.contentWindow.ebQueryString = c, e._iframe.contentWindow.document.write(a), setTimeout(function() {
                e._iframe.contentWindow.document.close()
            }, 200)) : e._isContentLoading = !1
        })
    },
    _getAssetHtmlContent: function(a, b) {
        EBG.adaptor.getDataFromRemoteServer(a, function(a) {
            b(a)
        }, this, !0, !1)
    },
    _buildIfrmSrc: function(a) {
        a = EBG.format("{0}{1}v={2}", EBG.combinePaths(this._adConfig.resourcePath, a), -1 < a.indexOf("?") ? "&" : "?", EBG.html5Ver);
        if (this._adConfig.useAsyncEBLoader || this._adConfig.isAsync) a +=
            "&n=1";
        this._adConfig.isInstream && this._adConfig.ffs.CFF_EBVpaidVersion && this._adConfig.moduleInfo && this._adConfig.moduleInfo.vpaidVersionHtml5 && (a += "&vpaidV=" + this._adConfig.moduleInfo.vpaidVersionHtml5);
        this._adConfig.pluId && (a += "&plu=" + this._adConfig.pluId, this._adConfig.sHost && (a += "&sHost=" + this._adConfig.sHost));
        this._adConfig.isInstream && (a += "&nonCached=" + EBG.protocol + this._adConfig.sms);
        this._adConfig.isClickTag && (a = EBG.format("{0}&clickTag={1}", a, escape(EBG.intMgr.getClickTag(this._adConfig.uid))));
        EBG.isPreview && (a = EBG.format("{0}&isPreview={1}", a, "1"));
        return a
    },
    buildCreativeContainerJson: function() {
        var a = this.useFriendlyIframe ? this.getFriendlyIframePath() : this.getIframePath(),
            a = {
                tagName: EBG.Adaptors.TagNames.IFRAME,
                attributes: {
                    id: this.iframeId,
                    name: this.iframeId,
                    src: a,
                    onload: EBG.format('(function(e) { var event = new EBG.Events.Event(EBG.Events.EventNames.ELEMENT_LOADED);event.dispatcher = this;event.eventData = { DOMEvent: e, elementId: "{0}", adUId:"{1}" };event.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;EBG.eventMgr.dispatchEvent(event);} )(typeof arguments != "undefined" ? arguments[0] : null);',
                        this.iframeId, this._adConfig.uid),
                    width: this._adConfig.width ? this._adConfig.width : "100%",
                    height: this._adConfig.height ? this._adConfig.height : "100%",
                    allowfullscreen: !0
                }
            };
        a.attributes.style = {
            width: this._adConfig.width ? EBG.px(this._adConfig.width) : "100%",
            height: this._adConfig.height ? EBG.px(this._adConfig.height) : "100%"
        };
        this._getIframeElement();
        return [a]
    },
    getIframePath: function() {
        return this._buildIfrmSrc(this._adConfig.adHtmlPath)
    },
    getFriendlyIframePath: function() {
        var a, b = "";
        if (EBG.adaptor.browser.isIE() &&
            11 > EBG.adaptor.browser.getVersion()) {
            try {
                if ((a = EBG.adaptor.inject({
                        tagName: EBG.Adaptors.TagNames.IFRAME,
                        attributes: {
                            id: "ebSampleIFrame" + this._adConfig.rnd,
                            src: "",
                            width: 1,
                            height: 1,
                            allowfullscreen: !0,
                            visibility: "hidden",
                            display: "none"
                        }
                    }, EBG.Adaptors.InjectionMethod.APPEND, EBG.adaptor.getElementById(this._adConfig.placeHolderId))) && a.contentWindow) a.contentWindow.document.open("text/html", "replace"), a.contentWindow.document.stam = {}
            } catch (c) {
                b = "javascript:'<script>window.onload=function(){document.write(\\'<script>document.domain=\\\"" +
                    document.domain + "\\\";<\\\\/script>\\');document.close();};<\/script>'"
            }
            a && a.parentElement && a.parentElement.removeChild(a)
        }
        return b
    },
    _getClickedProductIDs: function() {
        return this._adConfig.uid && EBG.intMgr.adsData[this._adConfig.uid] && EBG.intMgr.adsData[this._adConfig.uid].isProductClicked ? EBG.intMgr.adsData[this._adConfig.uid].isProductClicked : {}
    },
    sendPanelFrequencyInfo: function(a) {
        this._sendMessage(EBG.EBMessage.PANEL_FREQUENCY, {
            disableCreativeExpand: !a
        })
    }
};
EBG.declareClass(EBG.IFrameCC, EBG.CreativeContainer);
EBG.declareNamespace("BWDetection");
EBG.BWDetection = {
    checked: !1,
    checking: !1,
    speed: 0,
    _adjustment: 0.75,
    _images: [{
        path: EBG.format("{0}{1}micro.gif", ebPtcl, ebO.sms),
        bytes: 51,
        start: null,
        end: null
    }, {
        path: EBG.format("{0}{1}micro.gif", ebPtcl, ebO.sms),
        bytes: 51,
        start: null,
        end: null
    }, {
        path: EBG.format("{0}{1}bw_image.png", ebPtcl, ebO.sms),
        bytes: 43677,
        start: null,
        end: null
    }],
    _loaded: 0,
    _loadImage: function(a) {
        this._images[a].start = (new Date).getTime();
        var b = new Image,
            c = Math.random();
        b.onload = function() {
            EBG.BWDetection._imageLoaded(a)
        };
        b.src = this._images[a].path +
            "?rnd=" + c
    },
    _imageLoaded: function(a) {
        this._images[a].end = (new Date).getTime();
        this._loaded++;
        this._loaded == this._images.length && this._calculateSpeed()
    },
    _dispatchEvent: function() {
        var a = new EBG.Events.Event(EBG.Events.EventNames.BANDWITH_DETECTED);
        a.dispatcher = this;
        a.eventData = this.speed;
        EBG.eventMgr.dispatchEvent(a)
    },
    _calculateSpeed: function() {
        var a = Math.min(this._images[0].end - this._images[0].start, this._images[1].end - this._images[1].start),
            b = this._images[2].end - this._images[2].start,
            c = b,
            d = this._images[2].bytes;
        b > a && (c = b - a, d -= this._images[0].bytes);
        this.speed = Math.round(8 * (d / (c / 1E3) / 1024)) * this._adjustment;
        if (Infinity == this.speed) this.speed = 25E3;
        this.checked = !0;
        this.checking = !1;
        this._dispatchEvent()
    },
    init: function() {
        this.checking = !0;
        this._loadImage(0);
        this._loadImage(1);
        this._loadImage(2);
        var a = this;
        setTimeout(function() {
            if (!a.checked) a.speed = 56, a.checked = !0, a.checking = !1, a._dispatchEvent()
        }, 5E3)
    }
};
try {
    ebO.extensionHooks.splice(0, 0, function(a, b) {
        function c() {
            var a = new EBG.Events.EventSubscription(EBG.Events.EventNames.CREATE_ADAPTOR, function(a) {
                a.eventData.currentClass.prototype.getRequestMethod = function(a) {
                    if (EBG.adaptor.browser.isMobile() && b.ffs.CFF_ForceGET) return "GET";
                    var c = EBG.adaptor.browser.isMobile() && b.ffs.CFF_URLThreshold ? 4E3 : 2E3;
                    return this.browser.isIE() && 6 == this.browser.getVersion() || this.isInApp() ? "GET" : a.length > c ? "POST" : "GET"
                }
            });
            a.timing = EBG.Events.EventTiming.BEFORE;
            EBG.eventMgr.subscribeToEvent(a)
        }
        (b.ffs.CFF_ForceGET || b.ffs.CFF_URLThreshold || 81 == b.pluId) && c()
    })
} catch (e$$90) {
    ebO.extensionHooks = tempExtensionHook
}
EBG.declareNamespace("API.Ad");
EBG.API.Ad.setCustomVar = function(a, b, c, d) {
    d = !!d;
    a = EBG.ads[a];
    if (!EBGInfra.isDefinedNotNull(a)) throw "Ad doesn't exist";
    a._adConfig.customJSVars = a._adConfig.customJSVars || {};
    var e = a._adConfig.hasOwnProperty(b);
    if (d || !e) a._adConfig[b] = a._adConfig.customJSVars[b] = c;
    "undefined" === a._adConfig[b] && (a._adConfig[b] = a._adConfig.customJSVars[b] = void 0)
};
EBG.API.Ad.getCustomVar = function(a, b, c) {
    a = EBG.ads[a];
    if (!EBGInfra.isDefinedNotNull(a)) throw "Ad doesn't exist";
    a._adConfig.hasOwnProperty(b) && (c = "undefined" == a._adConfig[b] ? void 0 : a._adConfig[b]);
    return c
};
EBG.API.Ad.recalcPosition = function(a) {
    (a = EBG.ads[a]) && a._handlePageResizeOrScroll && a._handlePageResizeOrScroll()
};
EBG.API.Ad.isExpanded = function(a, b) {
    var c, d = EBG.ads[a],
        e = !1;
    if (d && d._CCs)
        for (c in d._CCs)
            if ("undefined" != typeof d._CCs[c].isExpanded && d._CCs[c].isExpanded() && !(EBGInfra.isDefined(b) && "" != b && d._CCs[c].props.panel.name.toLowerCase() != b.toLowerCase())) {
                e = !0;
                break
            }
    return e
};
EBG.API.Ad.shouldExpand = function(a) {
    return (a = EBG.ads[a]) && a.panelFrequencyMgr && a.panelFrequencyMgr.shouldExpand()
};
EBG.API.Ad.isSafeFrame = function(a) {
    a = EBG.ads[a];
    return !(!a || !a._adConfig || !a._adConfig.isSafeFrame)
};
EBG.declareNamespace("API.Banner");
EBG.API.Banner.getElements = function(a) {
    var b = {},
        c = EBG.ads[a];
    if (!c) return null;
    a = c._banner && c._banner.resId || c._bannerCC && c._bannerCC.iframeId || c._preloadImgResId || c._defaultImgResId;
    c = c._banner && c._banner.divId || c._adConfig.placeHolderId;
    if (a) b.banner = EBG.API.Adaptor.getElementById(a);
    if (c) b.bannerDiv = EBG.API.Adaptor.getElementById(c);
    return b
};
EBG.API.Ad.getPlaceholder = function(a) {
    return !EBG.ads[a] ? null : EBG.API.Adaptor.getElementById(EBG.API.Ad.getAdData(a, "placeHolderId"))
};
EBG.API.Banner.callFunc = function(a, b, c) {
    return (a = EBG.API.Banner.getElements(a)) && a.banner && a.banner[b] ? a.banner[b](c) : null
};
EBG.API.Banner.setViewabilityElem = function(a, b) {
    var c = EBG.ads[a];
    if (c) {
        var d = EBG.Initializer._getAdClass({
            tn: c._adConfig.templateName
        }).requiresIframeBust;
        if (d) {
            if (c.visibilityMgr) c.visibilityMgr.updateResourceObjId(b), c._bannerCC._sendMessage(EBG.EBMessage.UPDATE_VISIBILITY_ASSET, {
                assetId: b
            });
            else if (c._adConfig.suppressBanner) c._updateVisibilityManagerData({
                assetId: b,
                isPanel: !1
            }), c._bannerCC._sendMessage(EBG.EBMessage.UPDATE_VISIBILITY_ASSET, {
                assetId: b
            });
            else var e = c._subscribeToAdEvent(EBG.Events.EventNames.ADD_CREATIVES,
                function(a) {
                    if (-1 < ["ADD_HTML5_MAIN_CREATIVE", "ADD_BANNER_RICH_FLASH_CREATIVE", "ADD_BANNER_DEFAULT_IMAGE_CREATIVE", "ADD_BANNER_DEFAULT_FLASH_CREATIVE"].indexOf(a.eventData.creativeType)) {
                        var d = c.visibilityMgr;
                        d && d.updateResourceObjId(b);
                        c._bannerCC._sendMessage(EBG.EBMessage.UPDATE_VISIBILITY_ASSET, {
                            assetId: b
                        }); - 1 < ["ADD_HTML5_MAIN_CREATIVE", "ADD_BANNER_RICH_FLASH_CREATIVE"].indexOf(a.eventData.creativeType) && EBG.eventMgr.unsubscribeFromEvent(e)
                    }
                }, EBG.Events.EventTiming.AFTER);
            c._adStackingDetector &&
                c._adStackingDetector.addElementId(b, !0);
            c._adStackingDetectorPanel && c._adStackingDetectorPanel.addElementId(b)
        }
    }
    return c && d ? !0 : null
};
EBG.API.Ad.getAdData = function() {
    var a = {},
        b = {
            bannerResId: "_banner.resId",
            bannerDivId: "_banner.divId",
            defaultPanelName: "_defaultPanel",
            visibilityAvailable: "_adConfig.visibility.isAvailable",
            adCreativeLocation: function(a) {
                var b = a._adConfig.adHtmlPath,
                    b = b.substring(0, b.lastIndexOf("/") + 1);
                return EBG.combinePaths(a._adConfig.resourcePath + b)
            }
        };
    return function(c, d) {
        var e = EBG.ads[c];
        if (!e || !d) return {};
        var g = d = EBG.isArray(d) ? d : !d || "*" === d ? EBG.getObjKeys(a[c]) : [d];
        a[c] = a[c] || {};
        for (var f = a[c], h = 0; h < g.length; h++) {
            var i =
                g[h],
                j = b[i];
            j || (j = "_adConfig." + i);
            try {
                var k = f,
                    l;
                if (EBG.isFunc(j)) l = j(e);
                else {
                    for (var m = e, n = j.split("."), j = 0; j < n.length; j++) m = m[n[j]];
                    l = EBG.isObj(m) ? EBG.cloneObj(m) : m
                }
                k[i] = l
            } catch (p) {}
        }
        return 1 === d.length ? f[d[0]] : f
    }
}();
EBG.API.Ad.setAdData = function() {
    var a = function() {},
        b = {
            customJSVars: "_adConfig.customJSVars",
            _showOnlyDefaultImg: "_showOnlyDefaultImg",
            _downloadMode: "_downloadMode",
            doNotTouch: a
        };
    return function(c, d) {
        var e = EBG.ads[c];
        if (!e || !d) e = !1;
        else {
            var g = {},
                f;
            for (f in d) {
                var h = d[f],
                    i = b[f];
                i || (i = "_adConfig." + f);
                try {
                    if (EBG.isFunc(i)) i === a ? g[f] = "BLOCKED" : i(e, h);
                    else {
                        for (var j = e, k = i.split("."), i = 0; i < k.length - 1; i++) j[k[i]] = j[k[i]] || {}, j = j[k[i]];
                        j[k[k.length - 1]] = h
                    }
                } catch (l) {
                    g[f] = "Error"
                }
            }
            e = g
        }
        return e
    }
}();
EBG.API.Ad.willCloseAdParts = function(a, b) {
    var c = null;
    "undefined" == typeof b && (b = "_eyeblaster");
    "string" == typeof b && (b = b.toLowerCase(), EBG.intMgr.adsData[a] && EBG.intMgr.adsData[a].Counter && EBG.intMgr.adsData[a].Counter[b] && (c = !!EBG.intMgr.adsData[a].Counter[b].interactionData.counterJumpUrlData.fClose));
    return c
};
EBG.API.Ad.unload = function(a) {
    if (a = EBG.ads[a]) {
        if (EBG.isFunc(a._unLoadHandler)) return a._unLoadHandler(), !0;
        if (EBG.isFunc(a._handlePageUnload)) return a._handlePageUnload(), !0
    }
    return !1
};
EBG.API.Ad.getAssetUrl = function(a, b) {
    var c = EBG.ads[a],
        d = null;
    c && c._adConfig && c._adConfig.assets && c._adConfig.assets.hasOwnProperty(b) && c._adConfig.assets[b].dsPath && (d = EBG.combinePaths(c._adConfig.resourcePath, c._adConfig.assets[b].dsPath));
    return d
};
EBG.API.Ad.setElementWatcherTarget = function(a, b, c) {
    if (a = EBG.ads[a]) return !EBG.isElementOrNode(b) && "string" == EBG.typeOf(b) && (b = EBG.API.Adaptor.getElementById(b)), EBG.elementWatcher.watch(b, a._handlePageResizeOrScroll, a, null, {}, c)
};
EBG.API.Ad.removeElementWatcherTarget = function(a, b, c) {
    a = EBG.ads[a];
    !EBG.isElementOrNode(b) && "string" == EBG.typeOf(b) && (b = EBG.API.Adaptor.getElementById(b));
    EBG.elementWatcher.unwatch(c, b, a)
};
EBG.declareNamespace("API.EventManager");
EBG.API.EventManager.FilterNames = {
    MY_AD: "myAd",
    MY_PANEL: "myPanel"
};
EBG.API.EventManager.subscribeToEvent = function(a, b, c, d, e) {
    a = new EBG.Events.EventSubscription(a, b, e);
    if (d) a.dispatcherFilters = EBG.API.EventManager.getFilters(d);
    if (c) a.timing = c;
    EBG.eventMgr.subscribeToEvent(a)
};
EBG.API.EventManager.subscribeToElementEvent = function(a, b, c, d, e, g) {
    b = new EBG.Events.EventSubscription(b, c, g);
    if (e) b.dispatcherFilters = EBG.API.EventManager.getFilters(e);
    if (d) b.timing = d;
    b.isElementEvent = !0;
    b.elementId = a;
    EBG.eventMgr.subscribeToEvent(b)
};
EBG.API.EventManager.unsubscribeFromEvent = function(a, b, c, d, e) {
    a = new EBG.Events.EventSubscription(a, b, e);
    if (d) a.dispatcherFilters = EBG.API.EventManager.getFilters(d);
    if (c) a.timing = c;
    EBG.eventMgr.unsubscribeFromEvent(a)
};
EBG.API.EventManager.unsubscribeFromElementEvent = function(a, b, c, d, e, g) {
    b = new EBG.Events.EventSubscription(b, c, g);
    if (e) b.dispatcherFilters = EBG.API.EventManager.getFilters(e);
    if (d) b.timing = d;
    b.isElementEvent = !0;
    b.elementId = a;
    EBG.eventMgr.unsubscribeFromEvent(b)
};
EBG.API.EventManager.getFilters = function(a) {
    var b = {};
    if (EBG.isObj(a) || EBG.isArray(a))
        for (var c in a)
            if (a.hasOwnProperty(c)) switch (c) {
                case EBG.API.EventManager.FilterNames.MY_AD:
                    b["_adConfig.uid"] = a[c];
                    break;
                case EBG.API.EventManager.FilterNames.MY_PANEL:
                    b["props.panel.name"] = a[c].toLowerCase();
                    break;
                default:
                    b[c] = a[c]
            }
    return b
};
EBG.API.EventManager.dispatchEvent = function(a, b, c, d) {
    a = new EBG.Events.Event(a);
    a.dispatcher = b;
    a.eventData = c;
    a.timing = d;
    EBG.eventMgr.dispatchEvent(a)
};
EBG.declareNamespace("API.Adaptor");
EBG.API.Adaptor.getElementById = function(a) {
    return EBG.adaptor.getElementById(a)
};
EBG.API.Adaptor.getDisplayWin = function() {
    return EBG.adaptor.getDisplayWin()
};
EBG.API.Adaptor.getPageWin = function() {
    return EBG.adaptor.getPageWin()
};
EBG.API.Adaptor.getViewPortMetrics = function(a) {
    if (a = EBG.adaptor.getWindowViewPortMetrics(a)) a.width = a.Width, a.height = a.Height;
    return a
};
EBG.API.Adaptor.getPageMetrics = function(a) {
    var a = a || EBG.API.Adaptor.getDisplayWin(),
        b = a.document.body,
        c = EBG.API.Adaptor.getScrollLeftTop(a == window),
        d = EBG.adaptor.getPageMetrics ? EBG.adaptor.getPageMetrics(a) : {
            Width: null,
            Height: null
        };
    d.height = d.Height;
    d.width = d.Width;
    d.scrollbarWidth = EBG.adaptor.getScrollerWidth ? EBG.adaptor.getScrollerWidth() : null;
    d.scrollbarsHidden = "hidden" == b.style.overflow;
    d.scrollHeight = b.scrollHeight || a.document.documentElement.scrollHeight;
    d.scrollWidth = b.scrollWidth;
    d.offsetHeight =
        b.offsetHeight;
    d.offsetWidth = b.offsetWidth;
    d.clientHeight = b.clientHeight;
    d.clientWidth = b.clientWidth;
    d.scrollLeft = c.X;
    d.scrollTop = c.Y;
    return d
};
EBG.API.Adaptor.showScrollBars = function(a) {
    EBG.adaptor.showScrollBars(a)
};
EBG.API.Adaptor.hideScrollBars = function(a) {
    EBG.adaptor.hideScrollBars(a)
};
EBG.API.Adaptor.restoreScrollBarsState = function(a) {
    EBG.adaptor.restoreScrollBarsState(a)
};
EBG.API.Adaptor.getEyeDiv = function() {
    return EBG.adaptor.getElementById(EBG.Const.OUTER_DIV)
};
EBG.API.Adaptor.inject = function(a, b, c, d) {
    var e = EBG.adaptor.inject(a, b, c);
    if (d && (a = EBG.ads[d]) && e.id && EBG.API.Adaptor.getElementById(e.id)) a._adStackingDetector && a._adStackingDetector.addElementId(e.id), a._adStackingDetectorPanel && a._adStackingDetectorPanel.addElementId(e.id);
    EBG.eventMgr && EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_UNLOAD, function() {
        EBG.adaptor.removeElement(e)
    }, this));
    return e
};
EBG.API.Adaptor.setStyle = function(a, b, c) {
    c = EBG.isDefined(c) ? c : !0;
    EBG.adaptor.setStyleToElem(a, b, c)
};
EBG.API.Adaptor.getStyle = function(a, b, c) {
    if (a && b) {
        if (c) return EBG.adaptor.getStyleOfElem(a)[b];
        if ((c = a.ownerDocument && a.ownerDocument.defaultView) && c.getComputedStyle) return c.getComputedStyle(a)[b]
    }
};
EBG.API.Adaptor.getBrowserData = function() {
    return {
        platform: EBG.adaptor.browser._platform,
        browser: EBG.adaptor.browser._browserType,
        browserVersion: EBG.adaptor.browser._browserVer,
        device: EBG.adaptor.browser._deviceType
    }
};
EBG.API.Adaptor.getScreenOrientation = function() {
    return EBG.adaptor.getScreenOrientation(!1)
};
EBG.API.Adaptor.getPositioningById = function(a, b, c) {
    b = EBG.isDefined(b) ? b : !0;
    return EBG.adaptor.getPositioningById(a, b, c)
};
EBG.API.Adaptor.getPositioningByElement = function(a, b, c) {
    b = EBG.isDefined(b) ? b : !0;
    return EBG.adaptor.getPositioningByElement(a, b, c)
};
EBG.API.Adaptor.setStyleToElems = function(a, b, c) {
    c = EBG.isDefined(c) ? c : !0;
    EBG.isArray(a) || (a = [a]);
    for (var d = 0; d < a.length; d++) a[d] && a[d].style && EBG.adaptor.setStyleToElem(a[d], b, c)
};
EBG.API.Adaptor.getHostName = function(a) {
    return EBG.adaptor.getHostName(a)
};
EBG.API.Adaptor.getDomain = function(a) {
    return EBG.adaptor.getDomain(a)
};
EBG.API.Adaptor.getScrollLeftTop = function(a, b) {
    return EBG.adaptor.getScrollLeftTop(a, b)
};
EBG.API.Adaptor.removeElement = function(a) {
    EBG.adaptor.removeElement(a)
};
EBG.API.Adaptor.clip = function(a, b, c, d, e) {
    "function" == typeof EBG.adaptor.clip && EBG.adaptor.clip(a, b, c, d, e)
};
EBG.API.Adaptor.unclip = function(a) {
    "function" == typeof EBG.adaptor.unclip && EBG.adaptor.unclip(a)
};
EBG.API.Adaptor.getElementMetrics = function(a) {
    "string" == EBG.typeOf(a) && (a = EBG.adaptor.getElementById(a));
    if (!a) return null;
    var b = {},
        c = a.getBoundingClientRect();
    b.width = c.width ? c.width : c.right - c.left;
    b.height = c.height ? c.height : c.bottom - c.top;
    b.viewPortRelative = {
        top: c.top,
        bottom: c.bottom,
        left: c.left,
        right: c.right
    };
    a = EBG.API.Adaptor.getScrollLeftTop(a.ownerDocument.defaultView ? a.ownerDocument.defaultView : a.ownerDocument.parentWindow);
    b.pageRelative = {
        top: c.top + a.Y,
        bottom: c.bottom + a.Y,
        left: c.left + a.X,
        right: c.right + a.X
    };
    return b
};
EBG.API.Adaptor.setClass = function(a, b, c) {
    "array" !== EBG.typeOf(a) && (a = [a]);
    "array" !== EBG.typeOf(b) && (b = [b]);
    for (var d in a) {
        var e = "string" === EBG.typeOf(a[d]) ? EBG.adaptor.getElementById(a[d]) : a[d];
        if (e && EBG.isDefined(e.className))
            for (var g in b)
                if ("string" === EBG.typeOf(b[g]))
                    if (c) e.className = b[g];
                    else if (!EBG.API.Adaptor.hasClass(e, b[g])) {
            var f = " ";
            "" === e.className && (f = "");
            e.className += f + b[g]
        }
    }
};
EBG.API.Adaptor.removeClass = function(a, b) {
    "array" !== EBG.typeOf(a) && (a = [a]);
    "array" !== EBG.typeOf(b) && (b = [b]);
    for (var c in a) {
        var d = "string" === EBG.typeOf(a[c]) ? EBG.adaptor.getElementById(a[c]) : a[c];
        if (d && EBG.isDefined(d.className)) {
            for (var e in b)
                if ("string" === EBG.typeOf(b[e])) d.className = d.className.replace(RegExp("(^|\\s+)" + b[e] + "(\\s+|$)", "g"), " ");
            d.className = d.className.replace(/^||$/g, "")
        }
    }
};
EBG.API.Adaptor.hasClass = function(a, b, c) {
    var d = 0,
        c = EBG.isDefined(c) ? c : !0;
    "array" !== EBG.typeOf(a) && (a = [a]);
    "array" !== EBG.typeOf(b) && (b = [b]);
    for (var e in a) {
        var g = "string" === EBG.typeOf(a[e]) ? EBG.adaptor.getElementById(a[e]) : a[e];
        if (g && EBG.isDefined(g.className))
            for (var f in b) "string" === EBG.typeOf(b[f]) && null !== g.className.match(RegExp("(^|\\s+)" + b[f] + "(\\s+|$)")) && d++
    }
    return c ? d === a.length * b.length : 0 < d
};
EBG.API.Adaptor.getHighestZIndex = function() {
    return 2147483647
};
(function() {
    var a = function(a) {
            function d() {
                var a = new EBG.Events.EventSubscription(EBG.Events.EventNames.ADAPTOR_MODULES_READY, b);
                EBG.eventMgr.subscribeToEvent(a)
            }
            window.ebO ? ebO.extensionHooks.push(d) : b(a)
        },
        b = function() {
            var a = navigator.userAgent.toLowerCase(),
                b = function(b) {
                    "string" == typeof b && (b = [b]);
                    for (var d = 0; d < b.length; d++)
                        if (-1 < a.indexOf(b[d])) return !0;
                    return !1
                },
                e = EBG.adaptor && EBG.adaptor.browser ? EBG.adaptor.browser : {};
            if (!(EBG.adaptor && EBG.adaptor.browser == e)) {
                e.ver = "unknown";
                e.isMobile = function() {
                    return b("android,iphone,ipod,ipad,blackberry,windows phone,silk".split(","))
                };
                e.isMac = function() {
                    return b("opera")
                };
                e.isAndroid = function() {
                    return b("android")
                };
                e.isFF = function() {
                    return b("firefox")
                };
                if (e.isFF()) e.ver = parseInt(a.slice(a.indexOf("firefox/") + 8));
                e.isIE = function() {
                    return b(["msie", "trident"])
                };
                if (e.isIE()) e.ver = parseInt(b("msie") ? a.slice(a.indexOf("msie ") + 5) : a.slice(a.indexOf("rv:") + 3));
                e.isOpera = function() {
                    return b("opera")
                };
                if (e.isOpera()) e.ver = parseInt(b("opera/9.80") ? a.slice(a.indexOf("version/") + 8) : a.slice(a.indexOf("opera/") + 6));
                e.isChrome = function() {
                    return b("chrome") &&
                        !b("edge")
                };
                if (e.isChrome()) e.ver = parseInt(a.slice(a.indexOf("chrome/") + 7));
                e.isSafari = function() {
                    return b("safari") && !b("chrome")
                };
                if (e.isSafari()) e.ver = parseInt(a.slice(a.indexOf("version/") + 8));
                e.isEdge = function() {
                    return b("edge")
                };
                if (e.isEdge()) e.ver = parseInt(a.slice(a.indexOf("edge/") + 5));
                e.isStrictType = function() {
                    return e.isIE() && "CSS1Compat" == document.compatMode
                };
                e.getDocumentMode = function() {
                    return document.documentMode
                };
                e.getVersion = function() {
                    return e.ver
                }
            }
            var g = window.EBG && EBG.EBAPI && EBG.EBAPI.prototype ||
                window.EBG && EBG.API;
            if (!g.os) {
                g.os = {};
                var f = g.os;
                f.ua = a;
                f.uahas = b;
                f.mobile = e.isMobile();
                f.mac = e.isMac();
                f.kindle = b(["silk/", "kindle"]);
                f.android = e.isAndroid();
                f.windows = b("windows");
                f.windowsphone = b("windows phone");
                f.windowsdesktop = f.windows && !f.windowsphone;
                f.linux = b("linux") && !f.android;
                f.ipod = b("ipod");
                f.ipad = b("ipad");
                f.iphone = b("iphone") && !f.ipad;
                f.ios = f.iphone || f.ipad || f.ipod;
                f.blackberry = b("blackberry");
                f.firefox = b("firefox") && b("mobile;") && !(f.ios || f.android || f.linux || f.blackberry);
                f.name =
                    f.windowsphone ? "windowsphone" : f.windows ? "windows" : f.mac ? "mac" : f.linux ? "linux" : f.android ? "android" : f.ios ? "ios" : "unknown";
                var h = 0;
                switch (f.name) {
                    case "windowsphone":
                        f.verS = "windows";
                        h = a.indexOf("windows phone ");
                        if (-1 < h) {
                            for (var h = a.slice(h + 14), i = 0; i < h.length; i++) {
                                var j = h.charAt(i);
                                if (isNaN(j) && "." !== j) break
                            }
                            0 < i && (h = h.slice(0, i));
                            f.verS = h
                        }
                        break;
                    case "windows":
                        f.verS = "windows";
                        h = a.indexOf("windows nt ");
                        if (-1 < h) {
                            h = a.slice(h + 11);
                            for (i = 0; i < h.length && !(j = h.charAt(i), isNaN(j) && "." !== j); i++);
                            0 < i && (h = h.slice(0,
                                i));
                            switch (h) {
                                case "5.1":
                                    f.verS = "xp";
                                    break;
                                case "5.2":
                                    f.verS = "server2003";
                                    break;
                                case "6.0":
                                    f.verS = "vista";
                                    break;
                                case "6.1":
                                    f.verS = "7";
                                    break;
                                case "6.2":
                                    f.verS = "8";
                                    break;
                                case "6.3":
                                    f.verS = "8.1";
                                    break;
                                case "10.0":
                                    f.verS = "10"
                            }
                        }
                        break;
                    case "mac":
                        h = a.indexOf("mac os x ") + 9;
                        f.verS = a.slice(h);
                        h = f.verS.indexOf(";");
                        if (-1 < h) f.verS = f.verS.slice(0, h);
                        f.verS = f.verS.replace(/_/g, ".");
                        break;
                    case "linux":
                        f.verS = "linux";
                        break;
                    case "android":
                        h = a.indexOf("android ") + 8;
                        f.verS = a.slice(h);
                        h = f.verS.indexOf(";");
                        if (-1 < h) f.verS =
                            f.verS.slice(0, h);
                        break;
                    case "ios":
                        h = a.indexOf(" os ") + 4;
                        f.verS = a.slice(h);
                        for (i = 0; i < f.verS.length && !(j = f.verS.charAt(i), isNaN(j) && "_" !== j); i++);
                        if (0 < i) f.verS = f.verS.slice(0, i);
                        f.verS = f.verS.replace(/_/g, ".");
                        break;
                    case "unknown":
                        f.verS = "unknown"
                }
                if (f.verS.trim) f.verS = f.verS.trim();
                f.verN = parseFloat(f.verS);
                f.verI = f.ver = parseInt(f.verN);
                f[f.name + f.ver] = !0
            }
            if (!g.browser) {
                g.browser = {};
                h = g.browser;
                f = g.os;
                g = function(b) {
                    return parseInt(a.slice(a.indexOf(b) + b.length))
                };
                h.strict = e.isStrictType();
                h.docmode =
                    e.getDocumentMode();
                h.webkit = b("webkit");
                h.ver = e.getVersion();
                h.firefox = e.isFF();
                h.ie = e.isIE();
                h.opera = e.isOpera();
                h.chrome = e.isChrome();
                h.safari = e.isSafari();
                h.edge = b("edge/");
                if (h.edge) h.ver = g("edge/");
                h.silk = b("silk/");
                if (h.silk) h.ver = g("silk/");
                h.uc = b("ucbrowser/");
                if (h.uc) h.ver = g("ucbrowser/");
                h.android = b("android") && !(h.chrome || h.firefox || h.opera || h.uc || h.silk);
                h.name = h.android ? "android" : h.uc ? "uc" : h.opera ? "opera" : h.silk ? "silk" : h.edge ? "edge" : h.ie ? "ie" : h.firefox ? "firefox" : h.chrome ? "chrome" : h.safari ?
                    "safari" : "unknown";
                h[h.name + h.ver] = !0;
                h.checkCSSSupportability = function(a, b) {
                    for (var c = !1, d = document.createElement("div"), e = ["", "webkit", "moz", "ms", "o"], f = 0; f < e.length; f++)
                        if (a = "" === e[f] ? a : e[f] + EBG.capitalize(a), "" === d.style[a] && (d.style[a] = b, "" !== d.style[a])) {
                            c = !0;
                            break
                        }
                    return c
                };
                h.supportsViewportUnits = !/android[1-4]\.[0-3]/i.test(a);
                h.supportsFixedPositioning = !/android2/i.test(a);
                h.supportsCSSTransitions = h.checkCSSSupportability("transition", "width 2s");
                f[f.name + f.ver + h.name + h.ver] = !0
            }
        };
    EBG && EBG.EBAPI ?
        EBG.EBAPI.prototype.browserInit = a : a()
})();
EBG.declareNamespace("Initializer");
EBG.Initializer = {
    initialize: function() {
        var a = null,
            b;
        void 0 !== b && b || (a = EBG.Initializer._getCurrentServerResponse(a), EBG.Initializer._initGlobals(a), EBG.Initializer._callExtensionHooks(a), EBG.Initializer._initAdaptor(a), EBG.Initializer._initManagers(a), EBG.Initializer._initDisplayAd(a));
        return a
    },
    _initManagers: function(a) {
        var b = new EBG.Events.Event(EBG.Events.EventNames.INIT_MANAGERS);
        b.eventData = {
            "_adConfig.rnd": a.rnd
        };
        b.timing = EBG.Events.EventTiming.BEFORE;
        EBG.eventMgr.dispatchEvent(b);
        EBG.Initializer._initInteractionManager(a);
        EBG.Initializer._initAnimationManager(a);
        EBG.Initializer._initPositioningHelper();
        EBG.Initializer._initGeometryHelper();
        EBG.Initializer._initElementWatcher();
        b.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
        EBG.eventMgr.dispatchEvent(b)
    },
    _initDisplayAd: function(a) {
        EBG.Initializer._updateAdConfig(a);
        if (EBG.Initializer._shouldInitAd(a)) {
            this._initDataPipeManager(a);
            this._sendInitialDataPipeData(a);
            if (EBG.isDefined(EBG.adaptor.getDisplayWin().EBG)) try {
                EBGInfra.mergeObj(EBG, EBG.adaptor.getDisplayWin().EBG, !1)
            } catch (b) {
                EBG.adaptor.getDisplayWin().EBG = EBG
            } else EBG.adaptor.getDisplayWin().EBG = EBG;
            a.adConfig.customJSVars && a.adConfig.customJSVars.mdProgFormatID && a.adConfig.customJSVars.mdProgEnable || a.adConfig.singleTagProgrammatic ? EBG.adaptor.loadModule("ProgrammaticSettingsMgr", a.adConfig, function(b) {
                (new(b || window).EBG.Modules.ProgrammaticSettingsMgr(a.adConfig)).getSettings(function() {
                    EBG.Initializer._initAd(a)
                }, this)
            }, this) : EBG.Initializer._initAd(a)
        }
    },
    _shouldInitAd: function(a) {
        return a.innerIframe ||
            0 == a.ifrm || -1 == a.ifrm && EBG.adaptor.serving && EBG.adaptor.serving.servingMode != EBG.Adaptors.ServingMode.IFRAME
    },
    _getCurrentServerResponse: function() {
        for (var a = 0, b; a < ebOArr.length;) {
            if ((b = ebOArr[a]) && !b.csc && this._getAdClass(b)) {
                ebOArr.splice(a, 1);
                break
            }
            a++
        }
        return b
    },
    _initGlobals: function(a) {
        var b = navigator.userAgent.toLowerCase(),
            c = a.adConfig;
        c.handleStartTime = +new Date;
        EBG.isOfflineDemo = !!window.gEbfOfflineDemo;
        if ("/" == a.resPath.charAt(a.resPath.length - 1) && "/" == a.resPath.charAt(a.resPath.length - 2)) a.resPath =
            a.resPath.substring(0, a.resPath.length - 1);
        EBG.resourcePath = a.resPath;
        c.rnd = a.rnd;
        c.uid = EBG.format("{0}_{1}", c.adId, c.rnd);
        c.resourcePath = a.resPath;
        c.ffs = a.ffs;
        c.modulesDir = unescape(ebBigS) + "Modules" + a.modv + "/";
        EBG.sms = c.sms = a.sms || "";
        EBG.fcsVirtualPath = a.fvp || "";
        EBG.pluId = a.pi;
        EBG.dataCapture = EBG.bs = a.bs;
        EBG.protocol = ebPtcl;
        EBG.reportPageVer = a.rpv;
        EBG.html5Ver = a.html5v;
        EBG.flashPixelVer = a.vfp;
        EBG.isMSNMessenger = (-1 < b.indexOf("msn messenger") || -1 < b.indexOf("windows live messenger")) && window == parent;
        EBG.isIMBanner = window.gfEbExpBanerIM || window.gfEbExpBannerIM;
        EBG.isTestMode = a.tm;
        EBG.isPreview = a.pr;
        EBG.isInWorkshop = window.gEbFlyLocal;
        EBG.iframeLocation = a.ifl || window.gstrEbIframeLocation;
        EBG.minZIndex = a.z || window.gnEbMinZIndex || 1E4;
        EBG.eyeDivRefElement = window.gEbEyeDivRefElement;
        if (a.adConfig && a.adConfig.isInstream || a.ffs && a.ffs.CFF_DisableUiVz) a.adConfig.UiVz = !1;
        EBG.eventMgr = EBG.eventMgr || new EBG.Events.EventManager;
        b = EBG.Adaptors.StdWebAdaptor._getTopAccessibleWindow(!1);
        b.ebAds = b.ebAds || {};
        EBG.ads = b.ebAds;
        EBG.serverResponses = EBG.serverResponses || {};
        if ((b = c.adHtmlPath) && a.h5mi) c.adKitData = {
            paths: {
                cachedScript: ebBigS,
                nonCachedScript: ebPtcl + a.sms,
                folderRoot: ebResourcePath + b.substring(0, b.lastIndexOf("/") + 1)
            },
            version: a.h5mi.adkitversion
        }
    },
    _initServingMode: function(a) {
        var b = this._getAdClass(a),
            c = a.adConfig;
        a.requiresIframeBust = b.requiresIframeBust;
        var d = EBG.adaptor.serving ? EBG.adaptor.serving.detectServingMode(!0) : null;
        if (EBG.adaptor.isSafeFrame()) a.ifrm = 0, c.UiVz = !1;
        else if (b.requiresIframeBust) {
            if (a.innerIframe) a.ifrm =
                EBG.Adaptors.ServingMode.INNER_IFRAME;
            if (!a.ifrm || a.soi) a.ifrm = 0;
            EBG.adaptor.initServingMode(a.ifrm, !1, d);
            if (EBG.adaptor.inPlacementIframe()) b = new EBG.Events.EventSubscription(EBG.Events.EventNames.AIE_LOADED, this._handleAieLoad, this), b.dispatcherFilters = {
                "_adConfig.rnd": a.rnd
            }, b.timing = EBG.Events.EventTiming.BEFORE, EBG.eventMgr.subscribeToEvent(b), EBG.adaptor.serving.handleAieServing(a)
        } else if (a.ifrm = 0, b != EBG.Ads.StdBanner && b != EBG.Ads.StdBannerHtml5) {
            EBG.adaptor.initServingMode(a.ifrm, !b.requiresIframeBust,
                d);
            if (d == EBG.Adaptors.ServingMode.FRIENDLY_IFRAME) {
                c.UiVz = !1;
                try {
                    document.close()
                } catch (e) {}
            }
            if (d == EBG.Adaptors.ServingMode.SCRIPT) c.UiVz = !1
        } else c.UiVz = !1
    },
    _handleAieLoad: function(a) {
        a.eventData.loadDefault && a.eventData.currentResponse.tn != EBG.adTypes.VisibilityAd && (EBG.Initializer._initManagers(a.eventData.currentResponse), EBG.Initializer._initDisplayAd(a.eventData.currentResponse))
    },
    _callExtensionHooks: function(a) {
        if (a.extensionHooks)
            for (; 0 !== a.extensionHooks.length;) a.extensionHooks.pop().apply(null, [a.adConfig, a])
    },
    getRichestAdaptor: function() {
        return EBG.Adaptors.WebAdaptor || EBG.Adaptors.StdWebAdaptor
    },
    getRichestInteractionManager: function() {
        return EBG.Interactions.InteractionManager || EBG.Interactions.StdInteractionManager
    },
    _initAdaptor: function(a) {
        var b = this.getRichestAdaptor(),
            c = new EBG.Events.Event(EBG.Events.EventNames.CREATE_ADAPTOR);
        c.eventData = {
            currentClass: b
        };
        c.timing = EBG.Events.EventTiming.BEFORE;
        EBG.eventMgr.dispatchEvent(c);
        if (!EBG.adaptor || EBG.adaptor.constructor.toString() !== c.eventData.currentClass.toString()) b =
            new c.eventData.currentClass, EBG.adaptor = b;
        c.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
        EBG.eventMgr.dispatchEvent(c);
        EBG.adaptor.initInnerModules(a.plt, a.bt, a.bv, a.dt, a.bc);
        this._initServingMode(a);
        EBG.adaptor.registerSpecialBrowserEvents();
        EBG.eventMgr.attachToAdaptor();
        try {
            this._handleMRAIDLoad(a, function() {
                this._dispatchAdaptorReady()
            }, this)
        } catch (d) {
            console.log(d.message)
        }
        a = new EBG.Events.Event(EBG.Events.EventNames.ADAPTOR_MODULES_READY);
        EBG.eventMgr.dispatchEvent(a)
    },
    _handleMRAIDLoad: function(a,
        b, c) {
        var d = null,
            e = this,
            g = function() {
                d && EBG.clearInterval(d);
                a.adConfig.openWindow = !1;
                var f = EBG.adaptor.getElementById(a.phid);
                if (f) {
                    f.style.visibility = "hidden";
                    var g = EBG.runTimed(this, function() {
                        f.style.visibility = "visible"
                    }, [], 400)
                }
                var h = new EBG.Events.EventSubscription(EBG.Events.EventNames.SHOW_AD, function(a) {
                    EBG.runTimed(this, function() {
                        if (a.dispatcher._banner && a.dispatcher._banner.divId) EBG.adaptor.getElementById(a.dispatcher._banner.divId).style.left = EBG.px(0)
                    }, [], 0)
                });
                h.timing = EBG.Events.EventTiming.AFTER;
                EBG.eventMgr.subscribeToEvent(h);
                EBG.adaptor.loadModule("MRAIDUtil", a.adConfig, function() {
                    EBG.clearInterval(g);
                    EBG.MRAIDUtil = new EBG.MRAIDUtil(a.adConfig, b, c)
                }, e)
            },
            f = {},
            h = EBG.adaptor.getTopAccessibleWindow(!1);
        if (-1 < navigator.userAgent.toLowerCase().indexOf("afma-sdk") || -1 < h.location.href.indexOf("js=afma-sdk")) f.afma = 1;
        if (a.adConfig && a.adConfig.customJSVars && a.adConfig.customJSVars.mdForceDisableMRAID) f.dmraid = 1;
        if (!f.dmraid) EBG.isMRAID() ? (f.mraid = 1, g()) : EBG.adaptor.browser.isMobile() && (a.ffs.CFF_ForceLoadMRAID ||
            f.afma) ? (f.fmraid = 1, h = document.createElement("script"), h.src = "mraid.js", h.onload = g, EBG.getBigScript().parentElement.appendChild(h), d = EBG.runTimed(c, b, [], 250)) : this._dispatchAdaptorReady();
        a.mraidObj = f
    },
    _dispatchAdaptorReady: function() {
        if (!EBG.adaptor._isReady) {
            EBG.adaptor._isReady = !0;
            var a = new EBG.Events.Event(EBG.EBMessage.ADAPTOR_READY);
            a.dispatcher = this;
            a.timing = EBG.Events.EventTiming.BEFORE;
            if (!EBG.eventMgr.dispatchEvent(a)) a.timing = EBG.Events.EventTiming.ONTIME, EBG.eventMgr.dispatchEvent(a)
        }
    },
    _initInteractionManager: function(a) {
        newEvent = new EBG.Events.Event(EBG.Events.EventNames.CREATE_INT_MGR);
        newEvent.eventData = {
            currentClass: this.getRichestInteractionManager()
        };
        newEvent.timing = EBG.Events.EventTiming.BEFORE;
        EBG.eventMgr.dispatchEvent(newEvent);
        if (!EBG.intMgr || EBG.intMgr.constructor.toString() != newEvent.eventData.currentClass.toString()) a = new newEvent.eventData.currentClass(a), EBG.intMgr = a;
        newEvent.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
        EBG.eventMgr.dispatchEvent(newEvent)
    },
    _initAnimationManager: function(a) {
        try {
            if (EBG.RichModules &&
                EBG.RichModules.AnimationManager) {
                newEvent = new EBG.Events.Event(EBG.Events.EventNames.CREATE_ANIM_MGR);
                newEvent.eventData = EBG.RichModules.AnimationManager;
                newEvent.timing = EBG.Events.EventTiming.BEFORE;
                EBG.eventMgr.dispatchEvent(newEvent);
                if (!EBG.animationMgr) EBG.animationMgr = new newEvent.eventData;
                if (!EBG.animator && EBG.RichModules && EBG.RichModules.Animator) EBG.animator = new EBG.RichModules.Animator(a.adConfig);
                newEvent.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
                EBG.eventMgr.dispatchEvent(newEvent)
            }
        } catch (b) {}
    },
    _initDataPipeManager: function(a) {
        var b = a.adConfig || {},
            c = b.handleStartTime || null,
            d = !1,
            e = !1;
        b.dpProfileEvents = "general,platform,serving,visibility,debug,error".split(",");
        b.dpProfileInteractions = "general,serving,platform,visibility,urls,interaction,debug".split(",");
        if (a.lmu) b.dpUrlInteractions = EBG.protocol + a.lmu + "/lm/int", b.dpUrlEvents = EBG.protocol + a.lmu + "/lm/evt", b.dpServer = "lm";
        EBG.dataPipeMgr = new EBG.DataPipeManager(c);
        if (b.dpUrlEvents && ("https://" != EBG.protocol || a.ffs.CFF_DataPipeHttps || a.innerIframe &&
                a.ffs.CFF_LogAIE))
            if (a.ffs.CFF_DataPipeAlways) d = !0;
            else if (e = this._getNumericDataFromFlag(a.ffs, "CFF_DataPipeGeneral")) Math.floor(1E4 * Math.random()) + 1 <= 100 * e && (d = !0);
        c = EBG.dataPipeMgr.getPipe(a.sid);
        d && c.createBucket("evt", b.dpProfileEvents, b.dpUrlEvents);
        b.sendMetricsData && c.createBucket("int", b.dpProfileInteractions, b.dpUrlInteractions);
        c.send(EBG.DataProfile.DEBUG, {
            s_flag: a.ffs.CFF_Shark ? 1 : 0,
            s_nxt: a.nxt ? 1 : 0,
            s_bt: 5 == a.bt || 2 == a.bt ? 1 : 0,
            s_plt: -1 < "|7|9|10|11|15|16|22|25|32|33|36|37|39|40|41|42".indexOf("|" +
                a.plt + "|") ? 1 : 0,
            s_bv: 62 < a.bv ? 1 : 0,
            s_ios: 4 == a.bt && -1 < "|7|10|11|".indexOf("|" + a.plt + "|") && 11 < a.bv ? 1 : 0,
            s_vv: a.ffs.CFF_SharkVV || !window.ebVV ? 1 : 0,
            s_instrm: !a.instrm ? 1 : 0,
            s_tn: "StdBanner" == a.tn && !b.adHtmlPath || "Html5Banner" == a.tn && a.ffs.CFF_B_Std || "Tracking" == a.tn && a.ffs.CFF_SharkT,
            s_frp: !a.adConfig.flashResPath ? 1 : 0,
            s_av: !a.av ? 1 : 0,
            s_avd: !a.avd ? 1 : 0,
            s_mvfd: !a.mvfd ? 1 : 0,
            s_geb: !window.gEbBAd ? 1 : 0,
            s_gstr: !window.gstrEbPreLoadScripts ? 1 : 0,
            s_ebadcs: !window.ebAdCS || (a.ubss = -1 < window.ebAdCS.indexOf("_bskp_")) ? 1 : 0,
            s_ebac: window.ebAC ?
                1 : 0,
            s_ope: !a.ope ? 1 : 0,
            s_osde: !a.osde || !a.osde.length ? 1 : 0,
            s_rspn: !b.isResponsive ? 1 : 0,
            s_adpt: !b.adaptiveAd ? 1 : 0
        })
    },
    _initGeometryHelper: function() {
        try {
            if (EBG.RichModules && EBG.RichModules.Geometry) {
                var a = new EBG.Events.Event(EBG.Events.EventNames.CREATE_GEOMETRY_HELPER);
                a.eventData = EBG.RichModules.Geometry;
                a.timing = EBG.Events.EventTiming.BEFORE;
                EBG.eventMgr.dispatchEvent(a);
                if (!EBG.geometry) EBG.geometry = new a.eventData;
                a.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
                EBG.eventMgr.dispatchEvent(a)
            }
        } catch (b) {}
    },
    _initElementWatcher: function() {
        try {
            if (EBG.RichModules && EBG.RichModules.ElementWatcher && !EBG.elementWatcher) EBG.elementWatcher = new EBG.RichModules.ElementWatcher
        } catch (a) {}
    },
    _getNumericDataFromFlag: function(a, b) {
        for (var c in a)
            if (0 == c.indexOf(b) && a[c]) {
                var d = parseFloat(c.substr(b.length).replace("_", "."));
                if (!isNaN(d)) return d
            }
        return 0
    },
    _initPositioningHelper: function() {
        try {
            if (EBG.Positioning && EBG.Positioning.PositionManager) {
                newEvent = new EBG.Events.Event(EBG.Events.EventNames.CREATE_POSITIONING_HELPER);
                newEvent.eventData = EBG.Positioning.PositionManager;
                newEvent.timing = EBG.Events.EventTiming.BEFORE;
                EBG.eventMgr.dispatchEvent(newEvent);
                if (!EBG.posHelper) EBG.posHelper = new newEvent.eventData;
                newEvent.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
                EBG.eventMgr.dispatchEvent(newEvent)
            }
        } catch (a) {}
    },
    _initAd: function(a) {
        try {
            var b = this._getAdClass(a),
                c = a.adConfig;
            newEvent = new EBG.Events.Event(EBG.Events.EventNames.CREATE_AD);
            newEvent.eventData = {
                currentClass: b,
                adConfig: c
            };
            newEvent.timing = EBG.Events.EventTiming.BEFORE;
            newEvent.dispatcher = {
                _adConfig: {
                    rnd: c.rnd,
                    uid: c.uid
                }
            };
            EBG.eventMgr.dispatchEvent(newEvent);
            new newEvent.eventData.currentClass(c);
            newEvent.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
            EBG.eventMgr.dispatchEvent(newEvent);
            EBG.adaptor.getDisplayWin().EBG.ads[c.uid] || (EBG.adaptor.getDisplayWin().EBG.ads[c.uid] = EBG.ads[c.uid]);
            if (EBG.BWDetection && window.gEBMainWindow && gEBMainWindow.EBP)
                if (gEBMainWindow.EBP.ebBW && gEBMainWindow.EBP.ebBW.checked) EBG.BWDetection.speed = gEBMainWindow.EBP.ebBW.speed, EBG.BWDetection.checked = !0;
                else if (gEBMainWindow.EBP.BW && gEBMainWindow.EBP.BW.checked) EBG.BWDetection.speed = gEBMainWindow.EBP.BW.speed, EBG.BWDetection.checked = !0;
            if (c.pckAssets) {
                var a = 0,
                    d;
                for (d in c.pckAssets) c.pckAssets.hasOwnProperty(d) && a++;
                if (0 < a && !EBG.BWDetection.checked) c.bwApplied = !0, EBG.BWDetection.init();
                c.BWD = EBG.BWDetection
            }
        } catch (e) {
            d = "_initAd", a = "none", e.stack && (b = e.stack.match(/((.*)@|at(.*)).*:(\d+:\d+)/), 5 == b.length ? (d = b[2] || b[3], a = b[4]) : d = e.stack.replace(/\n/, " ").substr(0, 100)), c.dpUrlEvents && !this._dpm.isBucketExists("evt") &&
                this._dpm.createBucket("evt", c.dpProfileEvents, c.dpUrlEvents), this._dpm.send(EBG.DataProfile.ERROR, {
                    errmsg: e.message,
                    errfunc: d,
                    errpos: a
                })
        }
    },
    _getAdClass: function(a) {
        var b;
        switch (a.tn) {
            case EBG.adTypes.Image:
                b = EBG.Ads.ImageEx;
                break;
            case EBG.adTypes.RichBannerHtml5:
                b = EBG.Ads.RichBannerHtml5;
                break;
            case EBG.adTypes.PoliteBannerHtml5:
                b = EBG.Ads.PoliteBannerHtml5;
                break;
            case EBG.adTypes.SEBannerHtml5:
                b = EBG.Ads.SEBannerHtml5;
                break;
            case EBG.adTypes.ExpBannerHtml5:
                b = EBG.Ads.ExpBannerHtml5;
                break;
            case EBG.adTypes.StdBannerHtml5:
                b =
                    EBG.Ads.StdBannerHtml5;
                break;
            case EBG.adTypes.StdBanner:
                b = a.IABBV || a.IABEV ? EBG.Ads.StdBannerEx : EBG.Ads.StdBanner;
                break;
            case EBG.adTypes.Banner:
                b = EBG.Ads.RichBanner;
                break;
            case EBG.adTypes.SingleExpBanner:
                b = EBG.Ads.SingleExpBanner;
                break;
            case EBG.adTypes.ExpBanner:
                b = EBG.Ads.ExpBanner;
                break;
            case EBG.adTypes.VisibilityAd:
                b = EBG.Ads.VisibilityAd;
                break;
            case EBG.adTypes.FloatingAd:
                b = EBG.Ads.Floating;
                break;
            case EBG.adTypes.FloatingAdWithRem:
                b = EBG.Ads.FloatingWithReminder;
                break;
            case EBG.adTypes.TrackingAd:
                b =
                    EBG.Ads.TrackingAd;
                break;
            case EBG.adTypes.FourthParty:
                b = EBG.Ads.FourthPartyWithTrackingAd;
                break;
            case EBG.adTypes.WallpaperAd:
                b = EBG.Ads.WallpaperAd;
                break;
            case EBG.adTypes.Html5InstreamBanner:
                b = EBG.Ads.Html5InstreamBanner
        }
        return b
    },
    _updateAdConfig: function(a) {
        var b = a.adConfig;
        b.isNXT = !!a.nxt;
        b.sHost = window.sHost;
        b.nonSecureResourcePath = window.ebNSRP;
        EBG.serverResponses[b.uid] || (EBG.serverResponses[b.uid] = a);
        b.sUrlTokens = a.ut;
        b.placeHolderId = a.phid;
        b.isAsync = !!window.ebAC || !!window.ebAsync;
        if (a.element_id) b.element_id =
            a.element_id;
        var c = EBG.adaptor.getPageWin();
        if (c = EBG.getPageUrl(c)) b.ebReferrer = c;
        b.html5supported = a.html5Enabled;
        b.useHtmlConvertor = b.html5supported && window.ebUseHtml5;
        b.autolina = a.autolina || 0;
        if (b.autolina && EBG.AutolinaClass) try {
            EBG.Autolina = new EBG.AutolinaClass
        } catch (d) {}
        b.preloadCustomScript = window.ebAdCS;
        b.actualServingMode = EBG.adaptor.serving ? EBG.adaptor.serving.detectServingMode(!0) : null;
        if (a.ffs.CFF_RemoveUivz) EBG.adaptor.focused = b.focused ? b.focused : EBG.adaptor.focused;
        b._interactionServer =
            a.is || "BurstingPipe";
        b._interactionPipe = EBG.combinePaths(EBG.protocol + a.bs, b._interactionServer + "/adServer.bs?cn=int&iv=2&int=");
        b._interactionsStrPipe = EBG.combinePaths(EBG.protocol + a.bs, b._interactionServer + "/adServer.bs?cn=int&iv=2&interactionsStr=");
        if (b.expandDynamic) b.showSinglePanel = 1;
        if (!b.clickTrackingUrls) b.clickTrackingUrls = [];
        if (a.ncu) b.clickTrackingUrls.push(a.ncu), b.ncu = a.ncu;
        if (!b.defaultImpTrackingUrls) b.defaultImpTrackingUrls = [], b.defaultClickTrackingUrls = [];
        if (a.dctu) b.defaultClickTrackingUrls =
            a.dctu;
        if (a.ditu) b.defaultImpTrackingUrls = a.ditu;
        b.delayedImpParams = a.delayedImpParams;
        b.impressionTrackingURLs = [];
        if (a.itu && 0 < a.itu.length) b.impressionTrackingURLs = a.itu;
        window.gEbBAd && (gEbBAd.playRS && gEbBAd.playRS.strNUrl && b.impressionTrackingURLs.push(gEbBAd.playRS.strNUrl), gEbBAd.strNImpUrl && b.impressionTrackingURLs.push(gEbBAd.strNImpUrl));
        b.imageOnly = !1;
        b.page = escape(a.p.replace(/\~|\^|\|/ig, "_"));
        b.massVersioning = {
            targetAudienceId: a.ta && "-1" != a.ta ? a.ta : "",
            deliveryGroupId: a.dg && "-1" != a.dg ? a.dg : "",
            subDeliveryGroupId: a.sdg && "-1" != a.sdg ? a.sdg : "",
            logDeliveryGroupId: a.logdg && "-1" != a.logdg ? a.logdg : "",
            adVersions: a.av || "",
            defaultAdVersion: a.avd || "",
            adBasePath: a.abp || "",
            massVersionFolderDivider: a.mvfd || 0,
            versionTargetAudienceId: a.tav && "-1" != a.tav ? a.tav : "",
            dgTargetAudienceId: a.tadg && "-1" != a.tadg ? a.tadg : "",
            originalDeliveryGroupId: a.dgo && "-1" != a.dgo ? a.dgo : ""
        };
        if (0 <= b.massVersioning.adVersions.indexOf("/") || 0 <= b.massVersioning.defaultAdVersion.indexOf("/")) {
            b.massVersioning.versionFullPath = !0;
            if (b.massVersioning.defaultAdVersion) b.massVersioning.defaultAdVersion =
                JSON.parse(b.massVersioning.defaultAdVersion);
            if (b.ffs.CFF_SASCat) {
                if (b.massVersioning.adVersions) {
                    b.massVersioning.adVersions = JSON.parse(b.massVersioning.adVersions);
                    b.massVersioning.adVersionsObject = [];
                    for (var c = [], e, g = 0; g < b.massVersioning.adVersions.length; g++) e = b.massVersioning.adVersions[g], b.massVersioning.adVersionsObject.push(e), c.push(e.v);
                    b.massVersioning.adVersions = c
                }
            } else if (b.massVersioning.adVersions) b.massVersioning.adVersionsObject = JSON.parse(b.massVersioning.adVersions), b.massVersioning.adVersions =
                b.massVersioning.adVersionsObject.v
        }
        if (a.soi && !a.eb4p) b.showOnlyImage = a.soi, b.massVersioning.adVersions = b.massVersioning.defaultAdVersion;
        if (EBGInfra.isDefinedNotNull(a.diAppId)) b.diAppId = a.diAppId;
        if (a.rdi) b.reportImpressionType = !0 === a.rdi ? EBG.ReportImpressionType.DELAYED : a.rdi, b.shouldReportImpression = !0;
        b.defaultImageReason = a.dir || "";
        b.mobileSDK = a.sdk || "";
        b.isOfflineDemo = EBG.isOfflineDemo;
        if ("undefined" == typeof b.openWindow && (b.openWindow = !0, EBG.adaptor.getDisplayWin() != EBG.adaptor.getDisplayWin().parent))
            for (g in b.interactions)
                if (0 ===
                    b.interactions[g].target) {
                    b.openWindow = !1;
                    break
                }
        this._updateAdConfigToHandleOpenWindow(a);
        b.bigSDir = unescape(ebBigS);
        b.imagesDir = unescape(ebBigS) + "Res/Images" + a.imgv + "/";
        b.arrOnStartDnlEvents = a.osde;
        b.arrOnPlayEvents = a.ope;
        b.isGeoStrict = 0 != a.igs ? 1 : 0;
        b.geoData = a.geo ? a.geo : {};
        g = a.oo || 0;
        EBG.adaptor.optOut = b.optOut = window.gEbFOptOut || g;
        EBG.adaptor.histLen = b.histLen = a.hl || 30;
        b.sPublisherPlacementId = a.ppi || "";
        b.width = b.width || "";
        b.height = b.height || "";
        b.adHtmlOptions ? (b.width = a.adw || b.width, b.height = a.adh ||
            b.height, b.defaultWidth = a.w || b.width, b.defaultHeight = a.h || b.height, b.adaptiveAd = !0) : b.isResponsive ? (b.defaultWidth = a.w || b.width, b.defaultHeight = a.h || b.height, b.width = "", b.height = "") : (b.width = a.w || b.width, b.height = a.h || b.height);
        b.shouldCollectUrl = a.cu || 0;
        b.sID = a.sid || "";
        b.dlm = a.dlm || 3;
        b.testImp = !!a.t;
        b.usercookie = a.usercookie || "";
        b.visibility = {};
        g = b.visibility;
        g.mode = EBG.VisibilityMode.DEFAULT_MODE;
        if (a.IABEV || a.insVis) g.mode = EBG.VisibilityMode.ENHANCED_MODE;
        else if (a.IABBV) g.mode = EBG.VisibilityMode.BASIC_MODE;
        g.iabMinSurface = a.IABMS;
        g.iabMinDuration = a.IABMD;
        g.agencyMinSurface = a.AgMS;
        g.agencyMinDuration = a.AgMD;
        g.advertiserMinSurface = a.AdMS;
        g.advertiserMinDuration = a.AdMD;
        g.iabMinLargeSurface = 30;
        g.iabMinLargeDuration = a.IABMD;
        b.isInstreamVisibility = !!a.insVis;
        b.isInstreamVerification = !!a.insVer;
        b.displayVerification = !!a.disVer;
        b.sendMetricsData = !!a.lcu;
        b.agencyId = a.agid;
        if (b.panels) {
            g = !1;
            1 == EBG.adaptor.getObjKeys(b.panels).length && (g = !0);
            for (var f in b.panels)
                if (b.panels.hasOwnProperty(f)) b.panels[f].visibilityIntEnabled =
                    g
        }
        b.wurflValue = a.bi;
        if (f = b.interactionsToReport)
            if (f[EBG.Interactions.SystemInts.AD_START] = EBG.Interactions.SystemInts.AD_START, f[EBG.Interactions.SystemInts.END_OF_SESSION] = EBG.Interactions.SystemInts.END_OF_SESSION, f[EBG.Interactions.SystemInts.AD_STACKING] = EBG.Interactions.SystemInts.AD_STACKING, f[EBG.Interactions.SystemInts.MULTI_BURN] = EBG.Interactions.SystemInts.MULTI_BURN, f[EBG.Interactions.SystemInts.AD_COLLISION] = EBG.Interactions.SystemInts.AD_COLLISION, f[EBG.Interactions.SystemInts.AD_CAROUSEL] =
                EBG.Interactions.SystemInts.AD_CAROUSEL, f.visibility && (f[EBG.Interactions.SystemInts.VISIBILITY_RECORDABLE] = EBG.Interactions.SystemInts.VISIBILITY_RECORDABLE, f[EBG.Interactions.SystemInts.VISIBILITY_AGENCY_RECORDABLE] = EBG.Interactions.SystemInts.VISIBILITY_AGENCY_RECORDABLE, f[EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_RECORDABLE] = EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_RECORDABLE, f[EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER] = EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER,
                    f[EBG.Interactions.SystemInts.VISIBILITY_AGENCY] = EBG.Interactions.SystemInts.VISIBILITY_AGENCY, f[EBG.Interactions.SystemInts.VISIBILITY_IAB] = EBG.Interactions.SystemInts.VISIBILITY_IAB, f[EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_DURATION] = EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_DURATION, f[EBG.Interactions.SystemInts.VISIBILITY_AGENCY_DURATION] = EBG.Interactions.SystemInts.VISIBILITY_AGENCY_DURATION, f[EBG.Interactions.SystemInts.VISIBILITY_AVG_AD_SURFACE] = EBG.Interactions.SystemInts.VISIBILITY_AVG_AD_SURFACE, !EBG.adaptor.isInApp())) f[EBG.Interactions.SystemInts.VISIBILITY_AVG_SCREEN_SHARE] = EBG.Interactions.SystemInts.VISIBILITY_AVG_SCREEN_SHARE;
        b.adParamsEnabled = b.displayVerification || b.isInstreamVerification;
        b.playerParamsEnabled = b.isInstreamVerification;
        b.verUrlEnabled = b.isInstreamVerification || !!a.verUrl;
        if (b.defaultFlashName && !b.defaultFlashPath) b.defaultFlashPath = b.imagesDir + "BannerAssets/" + b.defaultFlashName;
        b.offsetX = a.offsetX || 0;
        b.offsetY = a.offsetY || 0;
        b.adChoice = {};
        b.adChoice.certificationProgram =
            a.AcCP;
        b.adChoice.customUrl = a.CAcURL;
        b.adChoice.includeMarker = b.AcIncludeMarker;
        b.adChoice.iconPosition = parseInt(b.AcIconPosition);
        if (a.wm) b.wmode = a.wm.toLowerCase();
        if (!b.pushDownConfig && "none" != a.disp) b.display = a.disp || "inline";
        b.disableAutoExpand = a.dex || 0;
        b.aiE = a.aiE || {};
        b.appPool = a.appPool || "BurstingPipe";
        b.interactionServer = a.is || "BurstingPipe";
        b.advertiserId = a.advid;
        b.moduleInfo = a.h5mi || {};
        try {
            if (window.gEbBAd) {
                if (gEbBAd.panelsWMode) b.panelsWMode = gEbBAd.panelsWMode;
                if (gEbBAd.strWmode) b.wmode =
                    gEbBAd.strWmode.toLowerCase()
            }
        } catch (h) {}
        if (EBG.adaptor.isSafeFrame()) {
            b.isSafeFrame = !0;
            for (var i in b.panels) {
                f = b.panels[i];
                try {
                    var j = $sf.ext.geom();
                    if (f.posType == EBG.PanelPositionType.PAGE_RELATIVE_PERCENTAGE || f.posType == EBG.PanelPositionType.VIEWPORT_RELATIVE_PERCENTAGE) f.xPos = Math.round((j.win.w - f.width) * (f.xPos / 100)), f.yPos = Math.round((j.win.h - f.height) * (f.yPos / 100));
                    f.posType != EBG.PanelPositionType.BANNER_RELATIVE_PIXELS && (f.xPos -= j.self.l, f.yPos -= j.self.t)
                } catch (k) {
                    f.xPos = 0, f.yPos = 0
                }
                f.posType =
                    EBG.PanelPositionType.BANNER_RELATIVE_PIXELS
            }
        }
        if (EBG.adaptor.isAMP()) b.isAMP = !0, b.expandDynamic = 0;
        if (EBG.adaptor.isSkype()) b.isSkype = !0;
        b.isInApp = EBG.adaptor.isInApp();
        b.locationPolling = this._setLocationPolling(b.locationPolling);
        if (a.eb4p) b.fourthPartyTag = a.eb4p
    },
    _setLocationPolling: function(a) {
        0 < a ? (a = Math.min(a, 100), a = Math.max(a, 10)) : a = 0;
        return a
    },
    _updateAdConfigToHandleOpenWindow: function(a) {
        var b = a.adConfig;
        b.bsPath = b.dataCapture = a.bs;
        b.pluId = EBG.pluId;
        b.protocol = EBG.protocol;
        if (EBGInfra.isDefined(a.lid)) b.lineId =
            a.lid;
        b.isPreview = !!a.pr
    },
    _sendInitialDataPipeData: function(a) {
        var b = a.adConfig;
        this._dpm = EBG.dataPipeMgr.getPipe(b.sID);
        this._dpm.send(EBG.DataProfile.GENERAL, {
            adid: b.adId,
            ctime: +new Date
        });
        b.reportImpressionType && this._dpm.send(EBG.DataProfile.DEBUG, {
            rdi: b.reportImpressionType
        });
        this._dpm.send(EBG.DataProfile.PLATFORM, {
            os: EBG.adaptor.browser._platform,
            brsrc: EBG.adaptor.browser._browserCode,
            brsrv: EBG.adaptor.browser._browserVer,
            brsrt: EBG.adaptor.browser._browserType
        });
        EBG.adaptor.isSkype() && this._dpm.send(EBG.DataProfile.PLATFORM, {
            skype: 1
        });
        var c = a.mraidObj || {};
        c.dmn = a.dmn;
        if (a.innerIframe) c.aie = 1;
        c.env = EBG.adaptor.browser.getEnvironment();
        c.wvsb = ~~(b.isInstreamVisibility || b.visibility.mode != EBG.VisibilityMode.DEFAULT_MODE);
        c.wvrf = ~~(b.isInstreamVerification || b.displayVerification);
        if (b.wurflValue) c.bi = b.wurflValue;
        this._dpm.send(EBG.DataProfile.SERVING, c);
        b.sendMetricsData && (this._dpm.send(EBG.DataProfile.INTERACTION, {
                IntrN: "metrics",
                IntrT: 2,
                pid: b.placementId,
                Usr: b.usercookie,
                AgencyID: b.agencyId || 0,
                cid: b.campaignId
            }), window &&
            window.location && !(EBG.adaptor.browser.isIE() && 9 >= EBG.adaptor.browser.getVersion()) && EBG.adaptor.loadModule("URLUtil", b, function() {
                if (EBG.URLUtil) {
                    var a = function(a) {
                        this._dpm.send(EBG.DataProfile.URLS, {
                            turl: a.top,
                            rurl: a.referrer,
                            aorg: a.aorg
                        })
                    }.bind(this);
                    new EBG.URLUtil(a, {
                        maximumUrlLength: 5E3,
                        maximumAorgUrls: 3
                    })
                }
            }, this));
        if (b.ffs.CFF_GlblChk) {
            a = "doNotInit,ebArrModulesToTrigger,ebAttrConf,ebAttribution,ebRD,ebRDGlobal,ebSafeFrame,ebUseHtml5,ebUserIdGuid,gEbAd,gEbBAd,gEbBannerData,gEbDisableSmartServeAPI,gEbEyeDivRefElement,gEbfLoadAsAS2,gEbFlyLocal,gEbfNewOfflineDemo,gEbfOfflineDemo,gEbFOptOut,gEbPIT,gEbURLTokens,gfEbCacheResources,gfEbChangeRelativeElements,gfEbExpBanerIM,gfEbExpBannerIM,gfEbForceStreaming,gfEbInlineBanner,gfEbRemoveScroll,gfEbUseCompression,gfEbUseHTTPS,gfEbUseMozHideIframe,gnEbLowBWLimit,gnEbMinZIndex,gstrAdPrefix,gstrEbDisplayPos,gstrEbDomain,gstrEbIframeLocation,gstrEbPreLoadScripts,providersData,strPage".split(",");
            b = {
                dbg: 1
            };
            for (c = 0; c < a.length; ++c) window[a[c]] && (b[a[c]] = 1);
            if (window.gEbBAd)
                for (var d in window.gEbBAd) window.gEbBAd.hasOwnProperty(d) && (b["g_" + d] = 1);
            this._dpm.send(EBG.DataProfile.DEBUG, b)
        }
    }
};
try {
    var currentResponse = EBG.Initializer.initialize();
    if (currentResponse.adConfig.UiVz && !currentResponse.requiresIframeBust && (currentResponse.IABBV || currentResponse.IABEV) && !EBG.adaptor.isSafeFrame() && "Visibility" != currentResponse.tn) {
        var vizClone = EBG.cloneObj(currentResponse);
        vizClone.tn = vizClone.adConfig.templateName = "Visibility";
        vizClone.ifrm = 2;
        vizClone.soi = 0;
        ebOArr[ebOArr.length] = vizClone;
        var newEbSrc = ebSrc.replace(currentResponse.tn, vizClone.tn),
            newEbSrc = newEbSrc.replace(/ex(debug|_api|)\.js/ig,
                ".js"),
            newScript = document.createElement("SCRIPT");
        newScript.src = newEbSrc;
        vizClone.ebSrc = newEbSrc;
        if (currentResponse.adConfig.adStarted) {
            var target = document.getElementById(vizClone.phid);
            target && target.appendChild(newScript)
        } else {
            var sub = new EBG.Events.EventSubscription(EBG.Events.EventNames.AD_START, function() {
                var a = document.getElementById(vizClone.phid);
                a && a.appendChild(newScript)
            }, this);
            sub.timing = EBG.Events.EventTiming.ONTIME;
            EBG.eventMgr.subscribeToEvent(sub)
        }
    }
} catch (e$$102) {};