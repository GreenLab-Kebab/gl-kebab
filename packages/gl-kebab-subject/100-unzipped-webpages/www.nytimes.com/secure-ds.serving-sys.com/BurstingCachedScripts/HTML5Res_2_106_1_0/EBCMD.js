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
        return function(c, d, e, f, k, g, j, i, o, l) {
            if (EBG.isFunc(d)) {
                var p;
                a: {
                    for (p = 0; p < a.length; p++)
                        if (a[p] && a[p].func == d) break a;p = !1
                }
                g = EBG.isNumber(g) ? g : k;
                l = l || {};
                if (EBG.isFunc(i) && !EBG.isDefined(l.trailing)) l.trailing = !1;
                c = {
                    context: c,
                    func: d,
                    tfunc: !1 === p ? this.throttle(d, g, l) : a[p].tfunc,
                    args: e ? e : [],
                    count: f,
                    interval: k,
                    cbContext: j,
                    callback: i,
                    cbArgs: o ? o : []
                };
                d = a.push(c) - 1;
                a[d].index = d;
                return b(c)
            }
            return !1
        }
    }(),
    debounce: function(a, b, c) {
        var d, e, f, k, g, j = function() {
            var i = (new Date).getTime() - k;
            i < b && 0 <= i ? d = setTimeout(j, b - i) : (d = null, c || (g = a.apply(f, e), d || (f = e = null)))
        };
        return function() {
            f = this;
            e = arguments;
            k = (new Date).getTime();
            var i = c && !d;
            d || (d = setTimeout(j, b));
            i && (g = a.apply(f, e), f = e = null);
            return g
        }
    },
    throttle: function(a, b, c) {
        var d, e, f, k = null,
            g = 0;
        c || (c = {});
        var j = function() {
            g = !1 === c.leading ? 0 : (new Date).getTime();
            k = null;
            f =
                a.apply(d, e);
            k || (d = e = null)
        };
        return function() {
            var i = (new Date).getTime();
            !g && !1 === c.leading && (g = i);
            var o = b - (i - g);
            d = this;
            e = arguments;
            0 >= o || o > b ? (k && (clearTimeout(k), k = null), g = i, f = a.apply(d, e), k || (d = e = null)) : !k && !1 !== c.trailing && (k = setTimeout(j, o));
            return f
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
        } catch (f) {}
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
                var f = a[e];
                if (b.call(c || window, f, e, a)) d[e] = f
            }
        return d
    },
    filterArray: function(a, b, c) {
        var d = a.length >>> 0;
        if ("function" != typeof b) throw new TypeError;
        for (var e = [], f = 0; f < d; f++)
            if (f in a) {
                var k = a[f];
                b.call(c || window, k, f, a) && e.push(k)
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
            f = function() {
                try {
                    if (e) {
                        var a, d;
                        9 === document.documentMode ? d = (new window.DOMParser).parseFromString(j.responseText, "text/xml") : (a = document.createElement("div"), a.innerHTML = "<xml>" + j.responseText + "</xml>", document.body.appendChild(a),
                            d = a.firstChild.XMLDocument, document.body.removeChild(a));
                        b.call(c, d)
                    } else b.call(c, j.responseText)
                } catch (f) {
                    b.call(c)
                }
            },
            k = !1;
        try {
            if (this._isXMLHttpRequestSupported(!0)) {
                var g = new XMLHttpRequest;
                g.open("GET", a, d);
                k = !0;
                if (d) g.onreadystatechange = function() {
                    4 == g.readyState && (200 == g.status ? b.call(c, e ? g.responseXML : g.responseText) : b.call(c))
                };
                g.send();
                d || b.call(c, e ? g.responseXML : g.responseText)
            } else if (window.XDomainRequest && d) {
                var j = new XDomainRequest;
                if (j) j.onerror = function() {
                    EBG.log.error("XDomain request error");
                    b.call(c)
                }, j.ontimeout = function() {
                    EBG.log.error("XDomain request timeout");
                    b.call(c)
                }, j.onload = f, j.onprogress = function() {}, j.open("get", a), j.send(), k = !0
            }
        } catch (i) {
            k = !1
        }
        return k
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
            for (var b = window, c = window, d = a.location.ancestorOrigins, e = !1, f = 0; f < d.length; f++) {
                var a = a.parent,
                    k = document.createElement("a");
                k.href = d[f];
                k = k.hostname;
                "null" !== d[f] && (window.location.origin === d[f] || "" === window.location.hostname && "" === k) ? (c = a, e || (b =
                    a)) : e = !0
            }
            return function(a) {
                return ("boolean" == typeof a ? a : 1) ? b : c
            }
        }
        try {
            if (a.top.document.domain || "" === a.parent.document.domain) a = a.top;
            else throw new DOMException;
        } catch (g) {
            try {
                for (a = window; a !== a.parent && a.self !== a.parent;)
                    if (a.parent.document.domain || "" === a.parent.document.domain) a = a.parent
            } catch (j) {}
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
                    j;
                for (j in d) a[j] = d[j]
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
        b.pm.bind = EBG.bind = function(a, b, c, g, j) {
            d.bind(a, b, c, g, j)
        };
        b.pm.unbind = EBG.unbind = function(a, b) {
            d.unbind(a, b)
        };
        b.pm.dispatch = function(a, b, c, g) {
            d._dispatch({
                data: JSON.stringify({
                    data: b,
                    type: a
                }),
                source: c,
                target: g,
                origin: null
            })
        };
        b.pm.origin = EBG.pm.origin = null;
        var d = {
            send: function(a) {
                var a = b.extend({}, d.defaults, a),
                    c = a.target;
                if (a.target && a.type) {
                    var k = {
                        data: a.data,
                        type: a.type
                    };
                    if (a.success) k.callback = d._callback(a.success);
                    if (a.error) k.errback = d._callback(a.error);
                    "postMessage" in c && !a.hash && (d._bind(), c.postMessage(JSON.stringify(k), a.origin || "*"))
                }
            },
            bind: function(c, f, k, g, j, i) {
                "postMessage" in a && !i && (d._bind(g), g = d.data("listeners.postmessage"), g || (g = {}, d.data("listeners.postmessage", g)), i = g[c], i || (i = [], g[c] = i), i.push({
                    fn: f,
                    origin: j || b.pm.origin,
                    bindObj: k
                }))
            },
            unbind: function(a, b) {
                var c = d.data("listeners.postmessage");
                if (c && a)
                    if (b) {
                        var g = c[a];
                        if (g) {
                            for (var j = [], i = 0, o = g.length; i < o; i++) {
                                var l = g[i];
                                l.fn !== b && j.push(l)
                            }
                            c[a] = j
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
                    var g = (d.data("callbacks.postmessage") || {})[b.type];
                    if (g) g(b.data);
                    else
                        for (var g = (d.data("listeners.postmessage") || {})[b.type] || [], j = 0, i = g.length; j < i; j++) {
                            var o = g[j];
                            if (o.origin && a.origin !== o.origin) b.errback && d.send({
                                target: a.source,
                                data: {
                                    message: "postmessage origin mismatch",
                                    origin: [a.origin, o.origin]
                                },
                                type: b.errback
                            });
                            else try {
                                var l;
                                l = o.bindObj ? o.fn.apply(o.bindObj, [b.data, a]) : o.fn(b.data, a);
                                b.callback && d.send({
                                    target: a.source,
                                    data: l,
                                    type: b.callback
                                })
                            } catch (p) {
                                b.errback && d.send({
                                    target: a.source,
                                    data: p,
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
            var b = g[a];
            return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }

    function c(a, d) {
        var e, g, n, q, s = f,
            m, h = d[a];
        h && "object" === typeof h && "function" === typeof h.toJSON && (h = h.toJSON(a));
        "function" === typeof j && (h = j.call(d, a, h));
        switch (typeof h) {
            case "string":
                return b(h);
            case "number":
                return isFinite(h) ? "" + h : "null";
            case "boolean":
            case "null":
                return "" +
                    h;
            case "object":
                if (!h) return "null";
                f += k;
                m = [];
                if ("[object Array]" === Object.prototype.toString.apply(h)) {
                    q = h.length;
                    for (e = 0; e < q; e += 1) m[e] = c(e, h) || "null";
                    n = 0 === m.length ? "[]" : f ? "[\n" + f + m.join(",\n" + f) + "\n" + s + "]" : "[" + m.join(",") + "]";
                    f = s;
                    return n
                }
                if (j && "object" === typeof j) {
                    q = j.length;
                    for (e = 0; e < q; e += 1) g = j[e], "string" === typeof g && (n = c(g, h)) && m.push(b(g) + (f ? ": " : ":") + n)
                } else
                    for (g in h) Object.hasOwnProperty.call(h, g) && (n = c(g, h)) && m.push(b(g) + (f ? ": " : ":") + n);
                n = 0 === m.length ? "{}" : f ? "{\n" + f + m.join(",\n" + f) + "\n" +
                    s + "}" : "{" + m.join(",") + "}";
                f = s;
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
        f, k, g = {
            "\u0008": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\u000c": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        j;
    if ("function" !== typeof JSON.stringify) JSON.stringify = function(a, b, d) {
        var e;
        k = f = "";
        if ("number" === typeof d)
            for (e = 0; e < d; e += 1) k += " ";
        else "string" === typeof d && (k = d);
        if ((j = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length)) throw Error("JSON.stringify");
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
window.addModernizr = function() {
    window.Modernizr = function(a, b, c) {
        function d() {
            g.input = function(a) {
                for (var b = 0, c = a.length; b < c; b++) h[a[b]] = a[b] in l;
                return h
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
            g.inputtypes = function(a) {
                for (var d = 0, e, f, g, h = a.length; d < h; d++) l.setAttribute("type", f = a[d]), e = "text" !== l.type, e && (l.value = p, l.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && l.style.WebkitAppearance !== c ? (j.appendChild(l), g = b.defaultView,
                    e = g.getComputedStyle && "textfield" !== g.getComputedStyle(l, null).WebkitAppearance && 0 !== l.offsetHeight, j.removeChild(l)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = l.checkValidity && !1 === l.checkValidity() : /^color$/.test(f) ? (j.appendChild(l), e = l.value != p, j.removeChild(l)) : e = l.value != p)), m[a[d]] = !!e;
                return m
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }

        function e(a, b) {
            var c = a.charAt(0).toUpperCase() + a.substr(1),
                c = (a + " " + s.join(c + " ") + c).split(" ");
            return f(c, b)
        }

        function f(a, b) {
            for (var d in a)
                if (o[a[d]] !== c) return "pfx" == b ? a[d] : !0;
            return !1
        }

        function k(a, b) {
            return typeof a === b
        }
        var g = {},
            j = b.documentElement;
        b.head || b.getElementsByTagName("head");
        var i = b.createElement("modernizr"),
            o = i.style,
            l = b.createElement("input"),
            p = ":)",
            n = Object.prototype.toString,
            q = " -webkit- -moz- -o- -ms- -khtml- ".split(" "),
            s = "Webkit Moz O ms Khtml".split(" "),
            i = {},
            m = {},
            h = {},
            u = [],
            B = function(a, c, d, e) {
                var f, g, h = b.createElement("div");
                if (parseInt(d, 10))
                    for (; d--;) g = b.createElement("div"),
                        g.id = e ? e[d] : "modernizr" + (d + 1), h.appendChild(g);
                f = ["&shy;<style>", a, "</style>"].join("");
                h.id = "modernizr";
                h.innerHTML += f;
                j.appendChild(h);
                a = c(h, a);
                h.parentNode.removeChild(h);
                return !!a
            },
            y = function() {
                var a = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return function(d, e) {
                    e = e || b.createElement(a[d] || "div");
                    d = "on" + d;
                    var f = d in e;
                    f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = k(e[d], "function"), k(e[d],
                        c) || (e[d] = c), e.removeAttribute(d)));
                    return f
                }
            }(),
            v, C = {}.hasOwnProperty,
            z;
        !k(C, c) && !k(C.call, c) ? z = function(a, b) {
            return C.call(a, b)
        } : z = function(a, b) {
            return b in a && k(a.constructor.prototype[b], c)
        };
        (function(c, d) {
            var e = c.join(""),
                f = d.length;
            B(e, function(c, d) {
                for (var e = b.styleSheets[b.styleSheets.length - 1], e = e.cssText || e.cssRules[0].cssText, t = c.childNodes, w = {}; f--;) w[t[f].id] = t[f];
                g.touch = "ontouchstart" in a || 9 === w.touch.offsetTop;
                g.csstransforms3d = 9 === w.csstransforms3d.offsetLeft;
                g.generatedcontent = 1 <=
                    w.generatedcontent.offsetHeight;
                g.fontface = /src/i.test(e) && 0 === e.indexOf(d.split(" ")[0])
            }, f, d)
        })(['@font-face {font-family:"font";src:url("//:")}', ["@media (", q.join("touch-enabled),("), "modernizr){#touch{top:9px;position:absolute}}"].join(""), ["@media (", q.join("transform-3d),("), "modernizr){#csstransforms3d{left:9px;position:absolute}}"].join(""), ['#generatedcontent:after{content:"', p, '"}'].join("")], ["fontface", "touch", "csstransforms3d", "generatedcontent"]);
        i.flexbox = function() {
            var a = b.createElement("div"),
                c = b.createElement("div"),
                d = "display";
            d += ":";
            a.style.cssText = (d + q.join("box;" + d)).slice(0, -d.length) + "width:42px;padding:0;";
            c.style.cssText = q.join("box-flex:1;") + "width:10px;";
            a.appendChild(c);
            j.appendChild(a);
            d = 42 === c.offsetWidth;
            a.removeChild(c);
            j.removeChild(a);
            return d
        };
        i.canvas = function() {
            var a = b.createElement("canvas");
            return !!a.getContext && !!a.getContext("2d")
        };
        i.canvastext = function() {
            return !!g.canvas && !!k(b.createElement("canvas").getContext("2d").fillText, "function")
        };
        i.webgl = function() {
            return !!a.WebGLRenderingContext
        };
        i.touch = function() {
            return g.touch
        };
        i.geolocation = function() {
            return !!navigator.geolocation
        };
        i.postmessage = function() {
            return !!a.postMessage
        };
        i.websqldatabase = function() {
            return !!a.openDatabase
        };
        i.indexedDB = function() {
            for (var b = -1, c = s.length; ++b < c;)
                if ("Webkit" !== s[b] && a[s[b].toLowerCase() + "IndexedDB"]) return !0;
            try {
                return !!a.indexedDB
            } catch (d) {
                return !1
            }
        };
        i.hashchange = function() {
            return y("hashchange", a) && (b.documentMode === c || 7 < b.documentMode)
        };
        i.history = function() {
            return !!a.history && !!history.pushState
        };
        i.draganddrop = function() {
            return y("dragstart") && y("drop")
        };
        i.websockets = function() {
            for (var b = -1, c = s.length; ++b < c;)
                if (a[s[b] + "WebSocket"]) return !0;
            return "WebSocket" in a
        };
        i.rgba = function() {
            o.cssText = "background-color:rgba(150,255,150,.5)";
            return !!~("" + o.backgroundColor).indexOf("rgba")
        };
        i.hsla = function() {
            o.cssText = "background-color:hsla(120,40%,100%,.5)";
            return !!~("" + o.backgroundColor).indexOf("rgba") || !!~("" + o.backgroundColor).indexOf("hsla")
        };
        i.multiplebgs = function() {
            o.cssText = "background:url(//:),url(//:),red url(//:)";
            return /(url\s*\(.*?){3}/.test(o.background)
        };
        i.backgroundsize = function() {
            return e("backgroundSize")
        };
        i.borderimage = function() {
            return e("borderImage")
        };
        i.borderradius = function() {
            return e("borderRadius")
        };
        i.boxshadow = function() {
            return e("boxShadow")
        };
        i.textshadow = function() {
            return "" === b.createElement("div").style.textShadow
        };
        i.opacity = function() {
            var a = q.join("opacity:.55;") + "";
            o.cssText = a;
            return /^0.55$/.test(o.opacity)
        };
        i.cssanimations = function() {
            return e("animationName")
        };
        i.csscolumns = function() {
            return e("columnCount")
        };
        i.cssgradients = function() {
            var a = ("background-image:" + q.join("gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:") + q.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0, -17);
            o.cssText = a;
            return !!~("" + o.backgroundImage).indexOf("gradient")
        };
        i.cssreflections = function() {
            return e("boxReflect")
        };
        i.csstransforms = function() {
            return !!f(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])
        };
        i.csstransforms3d = function() {
            var a = !!f(["perspectiveProperty",
                "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"
            ]);
            a && "webkitPerspective" in j.style && (a = g.csstransforms3d);
            return a
        };
        i.csstransitions = function() {
            return e("transitionProperty")
        };
        i.fontface = function() {
            return g.fontface
        };
        i.generatedcontent = function() {
            return g.generatedcontent
        };
        i.video = function() {
            var a = b.createElement("video"),
                c = !1;
            try {
                if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"'), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"') || a.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'),
                    c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"')
            } catch (d) {}
            return c
        };
        i.audio = function() {
            var a = b.createElement("audio"),
                c = !1;
            try {
                if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"'), c.mp3 = a.canPlayType("audio/mpeg;"), c.wav = a.canPlayType('audio/wav; codecs="1"'), c.m4a = a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")
            } catch (d) {}
            return c
        };
        i.localstorage = function() {
            try {
                return !!localStorage.getItem
            } catch (a) {
                return !1
            }
        };
        i.sessionstorage = function() {
            try {
                return !!sessionStorage.getItem
            } catch (a) {
                return !1
            }
        };
        i.webworkers = function() {
            return !!a.Worker
        };
        i.applicationcache = function() {
            return !!a.applicationCache
        };
        i.svg = function() {
            return !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
        };
        i.inlinesvg = function() {
            var a = b.createElement("div");
            a.innerHTML = "<svg/>";
            return "http://www.w3.org/2000/svg" == (a.firstChild && a.firstChild.namespaceURI)
        };
        i.smil = function() {
            return !!b.createElementNS && /SVG/.test(n.call(b.createElementNS("http://www.w3.org/2000/svg", "animate")))
        };
        i.svgclippaths =
            function() {
                return !!b.createElementNS && /SVG/.test(n.call(b.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
            };
        for (var D in i) z(i, D) && (v = D.toLowerCase(), g[v] = i[D](), u.push((window.gStrEBModernizrPrefix ? gStrEBModernizrPrefix : "") + (g[v] ? "" : "no-") + v));
        g.input || d();
        o.cssText = "";
        i = l = null;
        a.attachEvent && function() {
            var a = b.createElement("div");
            a.innerHTML = "<elem></elem>";
            return 1 !== a.childNodes.length
        }() && function(a, b) {
            function d(a) {
                for (var b = -1; ++b < h;) a.createElement(g[b])
            }
            a.iepp = a.iepp || {};
            var e =
                a.iepp,
                f = e.html5elements || "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                g = f.split("|"),
                h = g.length,
                t = RegExp("(^|\\s)(" + f + ")", "gi"),
                w = RegExp("<(/*)(" + f + ")", "gi"),
                J = /^\s*[\{\}]\s*$/,
                i = RegExp("(^|[^\\n]*?\\s)(" + f + ")([^\\n]*)({[\\n\\w\\W]*?})", "gi"),
                k = b.createDocumentFragment(),
                j = b.documentElement,
                f = j.firstChild,
                r = b.createElement("body"),
                A = b.createElement("style"),
                E = /print|all/,
                l;
            e.getCSS = function(a, b) {
                if (a +
                    "" === c) return "";
                for (var d = -1, t = a.length, f, w = []; ++d < t;) f = a[d], f.disabled || (b = f.media || b, E.test(b) && w.push(e.getCSS(f.imports, b), f.cssText), b = "all");
                return w.join("")
            };
            e.parseCSS = function(a) {
                for (var b = [], c; null != (c = i.exec(a));) b.push(((J.exec(c[1]) ? "\n" : c[1]) + c[2] + c[3]).replace(t, "$1.iepp_$2") + c[4]);
                return b.join("\n")
            };
            e.writeHTML = function() {
                var a = -1;
                for (l = l || b.body; ++a < h;)
                    for (var c = b.getElementsByTagName(g[a]), d = c.length, e = -1; ++e < d;) 0 > c[e].className.indexOf("iepp_") && (c[e].className += " iepp_" + g[a]);
                k.appendChild(l);
                j.appendChild(r);
                r.className = l.className;
                r.id = l.id;
                r.innerHTML = l.innerHTML.replace(w, "<$1font")
            };
            e._beforePrint = function() {
                A.styleSheet.cssText = e.parseCSS(e.getCSS(b.styleSheets, "all"));
                e.writeHTML()
            };
            e.restoreHTML = function() {
                r.innerHTML = "";
                j.removeChild(r);
                j.appendChild(l)
            };
            e._afterPrint = function() {
                e.restoreHTML();
                A.styleSheet.cssText = ""
            };
            d(b);
            d(k);
            e.disablePP || (f.insertBefore(A, f.firstChild), A.media = "print", A.className = "iepp-printshim", a.attachEvent("onbeforeprint", e._beforePrint),
                a.attachEvent("onafterprint", e._afterPrint))
        }(a, b);
        g._version = "2.0";
        g._prefixes = q;
        g._domPrefixes = s;
        g.hasEvent = y;
        g.testProp = function(a) {
            return f([a])
        };
        g.testAllProps = e;
        g.testStyles = B;
        j.className = j.className.replace(/\bno-js\b/, "") + (" js " + u.join(" "));
        return g
    }(this, this.document);
    (function(a, b, c) {
        function d() {
            for (var a = 1, b = -1; q.length - ++b && (!q[b].s || (a = q[b].r)););
            a && k()
        }

        function e(a) {
            var c = b.createElement("script"),
                e;
            c.src = a.s;
            c.onreadystatechange = c.onload = function() {
                !e && (!c.readyState || "loaded" ==
                    c.readyState || "complete" == c.readyState) && (e = 1, d(), c.onload = c.onreadystatechange = null)
            };
            l(function() {
                e || (e = 1, d())
            }, x.errorTimeout);
            a.e ? c.onload() : p.parentNode.insertBefore(c, p)
        }

        function f(a) {
            var c = b.createElement("link"),
                e;
            c.href = a.s;
            c.rel = "stylesheet";
            c.type = "text/css";
            !a.e && (y || m) ? function L(a) {
                l(function() {
                    if (!e) try {
                        a.sheet.cssRules.length ? (e = 1, d()) : L(a)
                    } catch (b) {
                        1E3 == b.code || "security" == b.message || "denied" == b.message ? (e = 1, l(function() {
                            d()
                        }, 0)) : L(a)
                    }
                }, 0)
            }(c) : (c.onload = function() {
                e || (e = 1, l(function() {
                        d()
                    },
                    0))
            }, a.e && c.onload());
            l(function() {
                e || (e = 1, d())
            }, x.errorTimeout);
            !a.e && p.parentNode.insertBefore(c, p)
        }

        function k() {
            var a = q.shift();
            s = 1;
            a ? a.t ? l(function() {
                "c" == a.t ? f(a) : e(a)
            }, 0) : (a(), d()) : s = 0
        }

        function g(a, c, e, f, g, i) {
            function j() {
                !A && (!r.readyState || "loaded" == r.readyState || "complete" == r.readyState) && (E.r = A = 1, !s && d(), r.onload = r.onreadystatechange = null, l(function() {
                    u.removeChild(r)
                }, 0))
            }
            var r = b.createElement(a),
                A = 0,
                E = {
                    t: e,
                    s: c,
                    e: i
                };
            r.src = r.data = c;
            !h && (r.style.display = "none");
            r.width = r.height = "0";
            "object" !=
            a && (r.type = e);
            r.onload = r.onreadystatechange = j;
            "img" == a ? r.onerror = j : "script" == a && (r.onerror = function() {
                E.e = E.r = 1;
                k()
            });
            q.splice(f, 0, E);
            u.insertBefore(r, h ? null : p);
            l(function() {
                A || (u.removeChild(r), E.r = E.e = A = 1, d())
            }, x.errorTimeout)
        }

        function j(a, b, c) {
            var d = "c" == b ? z : C;
            s = 0;
            b = b || "j";
            F(a) ? g(d, a, b, this.i++, o, c) : (q.splice(this.i++, 0, a), 1 == q.length && k());
            return this
        }

        function i() {
            var a = x;
            a.loader = {
                load: j,
                i: 0
            };
            return a
        }
        var o = b.documentElement,
            l = a.setTimeout,
            p = b.getElementsByTagName("script")[0],
            n = {}.toString,
            q = [],
            s = 0,
            m = "MozAppearance" in o.style,
            h = m && !!b.createRange().compareNode,
            u = h ? o : p.parentNode,
            B = a.opera && "[object Opera]" == n.call(a.opera),
            y = "webkitAppearance" in o.style,
            v = y && "async" in b.createElement("script"),
            C = m ? "object" : B || v ? "img" : "script",
            z = y ? "img" : C,
            D = Array.isArray || function(a) {
                return "[object Array]" == n.call(a)
            },
            F = function(a) {
                return "string" == typeof a
            },
            H = function(a) {
                return "[object Function]" == n.call(a)
            },
            I = [],
            K = {},
            G, x;
        x = function(a) {
            function b(a) {
                var a = a.split("!"),
                    c = I.length,
                    d = a.pop(),
                    e = a.length,
                    d = {
                        url: d,
                        origUrl: d,
                        prefixes: a
                    },
                    f, t;
                for (t = 0; t < e; t++) f = K[a[t]], f && (d = f(d));
                for (t = 0; t < c; t++) d = I[t](d);
                return d
            }

            function d(a, e, f, g, w) {
                var h = b(a),
                    J = h.autoCallback;
                if (!h.bypass) {
                    e && (e = H(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]);
                    if (h.instead) return h.instead(a, e, f, g, w);
                    f.load(h.url, h.forceCSS || !h.forceJS && /css$/.test(h.url) ? "c" : c, h.noexec);
                    (H(e) || H(J)) && f.load(function() {
                        i();
                        e && e(h.origUrl, w, g);
                        J && J(h.origUrl, w, g)
                    })
                }
            }

            function e(a, b) {
                function c(a) {
                    if (F(a)) d(a, g, b, 0, f);
                    else if ("object" == typeof a)
                        for (h in a) a.hasOwnProperty(h) &&
                            d(a[h], g, b, h, f)
                }
                var f = !!a.test,
                    t = a.load || a.both,
                    g = a.callback,
                    h;
                c(f ? a.yep : a.nope);
                c(t);
                a.complete && b.load(a.complete)
            }
            var f, g, h = this.yepnope.loader;
            if (F(a)) d(a, 0, h, 0);
            else if (D(a))
                for (f = 0; f < a.length; f++) g = a[f], F(g) ? d(g, 0, h, 0) : D(g) ? x(g) : "object" == typeof g && e(g, h);
            else "object" == typeof a && e(a, h)
        };
        x.addPrefix = function(a, b) {
            K[a] = b
        };
        x.addFilter = function(a) {
            I.push(a)
        };
        x.errorTimeout = 1E4;
        null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", G = function() {
            b.removeEventListener("DOMContentLoaded",
                G, 0);
            b.readyState = "complete"
        }, 0));
        a.yepnope = i()
    })(this, this.document);
    Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }
};
window.shouldModernizrNew || window.addModernizr();
window.addModernizrNew = function() {
    (function(a, b, c) {
        var d, e;

        function f() {
            return "function" != typeof b.createElement ? b.createElement(arguments[0]) : B ? b.createElementNS.call(b, "http://www.w3.org/2000/svg", arguments[0]) : b.createElement.apply(b, arguments)
        }

        function k(a) {
            return a.replace(/([a-z])-([a-z])/g, function(a, b, c) {
                return b + c.toUpperCase()
            }).replace(/^-/, "")
        }

        function g(a, c, d, e) {
            var g, h, i, j, k = f("div"),
                l, m = b.body;
            l = (m || (m = f(B ? "svg" : "body"), m.fake = !0), m);
            if (parseInt(d, 10))
                for (; d--;) i = f("div"), i.id = e ? e[d] :
                    "modernizr" + (d + 1), k.appendChild(i);
            return g = f("style"), g.type = "text/css", g.id = "smodernizr", (l.fake ? l : k).appendChild(g), l.appendChild(k), g.styleSheet ? g.styleSheet.cssText = a : g.appendChild(b.createTextNode(a)), k.id = "modernizr", l.fake && (l.style.background = "", l.style.overflow = "hidden", j = u.style.overflow, u.style.overflow = "hidden", u.appendChild(l)), h = c(k, a), l.fake ? (l.parentNode.removeChild(l), u.style.overflow = j) : k.parentNode.removeChild(k), !!h
        }

        function j(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        }

        function i(a) {
            return a.replace(/([A-Z])/g, function(a, b) {
                return "-" + b.toLowerCase()
            }).replace(/^ms-/, "-ms-")
        }

        function o(b, d) {
            var e = b.length;
            if ("CSS" in a && "supports" in a.CSS) {
                for (; e--;)
                    if (a.CSS.supports(i(b[e]), d)) return !0;
                return !1
            }
            if ("CSSSupportsRule" in a) {
                for (var f = []; e--;) f.push("(" + i(b[e]) + ":" + d + ")");
                return f = f.join(" or "), g("@supports (" + f + ") { #modernizr { position: absolute; } }", function(a) {
                    return "absolute" == getComputedStyle(a, null).position
                })
            }
            return c
        }

        function l(a, b, g, h) {
            function i() {
                l && (delete d,
                    delete e)
            }
            if (h = "undefined" === typeof h ? !1 : h, "undefined" !== typeof g) {
                var j = o(a, g);
                if ("undefined" !== typeof j) return j
            }
            for (var l, m, n, p, j = ["modernizr", "tspan"]; !d;) l = !0, e = f(j.shift()), d = e.style;
            for (m = a.length, j = 0; m > j; j++)
                if (n = a[j], p = d[n], !!~("" + n).indexOf("-") && (n = k(n)), d[n] !== c) {
                    if (h || "undefined" === typeof g) return i(), "pfx" == b ? n : !0;
                    try {
                        d[n] = g
                    } catch (q) {}
                    if (d[n] != p) return i(), "pfx" == b ? n : !0
                }
            return i(), !1
        }

        function p(a, b, c, d, e) {
            var r;
            var f = a.charAt(0).toUpperCase() + a.slice(1),
                g = (a + " " + D.join(f + " ") + f).split(" "),
                h;
            if ("string" === typeof b || "undefined" === typeof b) h = l(g, b, d, e);
            else {
                g = (a + " " + H.join(f + " ") + f).split(" ");
                a: {
                    var a = g,
                        i;
                    for (i in a)
                        if (a[i] in b) {
                            r = !1 === c ? a[i] : (h = b[a[i]], "function" === typeof h ? j(h, c || b) : h), b = r;
                            break a
                        }
                    b = !1
                }
                h = b
            }
            return h
        }

        function n(a, b, d) {
            return p(a, c, c, b, d)
        }
        var q = [],
            s = [],
            m = {
                _version: "3.3.1",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function(a, b) {
                    var c = this;
                    setTimeout(function() {
                        b(c[a])
                    }, 0)
                },
                addTest: function(a, b, c) {
                    s.push({
                        name: a,
                        fn: b,
                        options: c
                    })
                },
                addAsyncTest: function(a) {
                    s.push({
                        name: null,
                        fn: a
                    })
                }
            },
            h = function() {};
        h.prototype = m;
        h = new h;
        h.addTest("applicationcache", "applicationCache" in a);
        h.addTest("geolocation", "geolocation" in navigator);
        h.addTest("history", function() {
            var b = navigator.userAgent;
            return -1 === b.indexOf("Android 2.") && -1 === b.indexOf("Android 4.0") || -1 === b.indexOf("Mobile Safari") || -1 !== b.indexOf("Chrome") || -1 !== b.indexOf("Windows Phone") ? a.history && "pushState" in a.history : !1
        });
        h.addTest("postmessage", "postMessage" in a);
        h.addTest("svg", !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
        h.addTest("websockets", "WebSocket" in a && 2 === a.WebSocket.CLOSING);
        h.addTest("localstorage", function() {
            try {
                return localStorage.setItem("modernizr", "modernizr"), localStorage.removeItem("modernizr"), !0
            } catch (a) {
                return !1
            }
        });
        h.addTest("sessionstorage", function() {
            try {
                return sessionStorage.setItem("modernizr", "modernizr"), sessionStorage.removeItem("modernizr"), !0
            } catch (a) {
                return !1
            }
        });
        h.addTest("websqldatabase", "openDatabase" in
            a);
        h.addTest("webworkers", "Worker" in a);
        var u = b.documentElement,
            B = "svg" === u.nodeName.toLowerCase();
        h.addTest("audio", function() {
            var a = f("audio"),
                b = !1;
            try {
                (b = !!a.canPlayType) && (b = new Boolean(b), b.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), b.mp3 = a.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), b.opus = a.canPlayType('audio/ogg; codecs="opus"') || a.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), b.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,
                    ""), b.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (c) {}
            return b
        });
        h.addTest("canvas", function() {
            var a = f("canvas");
            return !(!a.getContext || !a.getContext("2d"))
        });
        h.addTest("canvastext", function() {
            return !1 === h.canvas ? !1 : "function" == typeof f("canvas").getContext("2d").fillText
        });
        h.addTest("video", function() {
            var a = f("video"),
                b = !1;
            try {
                (b = !!a.canPlayType) && (b = new Boolean(b), b.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), b.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,
                    ""), b.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), b.vp9 = a.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), b.hls = a.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
            } catch (c) {}
            return b
        });
        h.addTest("webgl", function() {
            var b = f("canvas"),
                c = "probablySupportsContext" in b ? "probablySupportsContext" : "supportsContext";
            return c in b ? b[c]("webgl") || b[c]("experimental-webgl") : "WebGLRenderingContext" in a
        });
        h.addTest("multiplebgs", function() {
            var a =
                f("a").style;
            return a.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(a.background)
        });
        h.addTest("rgba", function() {
            var a = f("a").style;
            return a.cssText = "background-color:rgba(150,255,150,.5)", -1 < ("" + a.backgroundColor).indexOf("rgba")
        });
        h.addTest("inlinesvg", function() {
            var a = f("div");
            return a.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && a.firstChild && a.firstChild.namespaceURI)
        });
        var y = function() {
            var a = !("onblur" in b.documentElement);
            return function(b, d) {
                var e;
                return b ? (d && "string" != typeof d || (d = f(d || "div")), b = "on" + b, e = b in d, !e && a && (d.setAttribute || (d = f("div")), d.setAttribute(b, ""), e = "function" == typeof d[b], d[b] !== c && (d[b] = c), d.removeAttribute(b)), e) : !1
            }
        }();
        m.hasEvent = y;
        h.addTest("hashchange", function() {
            return !1 === y("hashchange", a) ? !1 : b.documentMode === c || 7 < b.documentMode
        });
        var v = m._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        m._prefixes = v;
        h.addTest("cssgradients", function() {
            for (var a, b = "", c = 0, d = v.length -
                    1; d > c; c++) a = 0 === c ? "to " : "", b += "background-image:" + v[c] + "linear-gradient(" + a + "left top, #9f9, white);";
            h._config.usePrefixes && (b += "background-image:-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");
            a = f("a").style;
            return a.cssText = b, -1 < ("" + a.backgroundImage).indexOf("gradient")
        });
        h.addTest("opacity", function() {
            var a = f("a").style;
            return a.cssText = v.join("opacity:.55;"), /^0.55$/.test(a.opacity)
        });
        h.addTest("hsla", function() {
            var a = f("a").style;
            return a.cssText = "background-color:hsla(120,40%,100%,.5)", !!~("" + a.backgroundColor).indexOf("rgba") || !!~("" + a.backgroundColor).indexOf("hsla")
        });
        h.addTest("supports", "CSS" in a && "supports" in a.CSS || "supportsCSS" in a);
        var C = {}.toString;
        h.addTest("svgclippaths", function() {
            return !!b.createElementNS && /SVGClipPath/.test(C.call(b.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
        });
        h.addTest("smil", function() {
            return !!b.createElementNS && /SVGAnimate/.test(C.call(b.createElementNS("http://www.w3.org/2000/svg", "animate")))
        });
        var z = m.testStyles = g;
        h.addTest("touchevents",
            function() {
                var c;
                if ("ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch) c = !0;
                else {
                    var d = ["@media (", v.join("touch-enabled),("), "heartz){#modernizr{top:9px;position:absolute}}"].join("");
                    z(d, function(a) {
                        c = 9 === a.offsetTop
                    })
                }
                return c
            });
        (function() {
            var a = navigator.userAgent,
                b = a.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1),
                c = a.match(/w(eb)?osbrowser/gi),
                d = a.match(/windows phone/gi) && a.match(/iemobile\/([0-9])+/gi) && 9 <= parseFloat(RegExp.$1),
                a = 533 > b && a.match(/android/gi);
            return c ||
                a || d
        })() ? h.addTest("fontface", !1): z('@font-face {font-family:"font";src:url("https://")}', function(a, c) {
            var d = b.getElementById("smodernizr"),
                d = (d = d.sheet || d.styleSheet) ? d.cssRules && d.cssRules[0] ? d.cssRules[0].cssText : d.cssText || "" : "",
                d = /src/i.test(d) && 0 === d.indexOf(c.split(" ")[0]);
            h.addTest("fontface", d)
        });
        z('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(a) {
            h.addTest("generatedcontent", 7 <= a.offsetHeight)
        });
        var D = m._config.usePrefixes ? "Moz O ms Webkit".split(" ") : [];
        m._cssomPrefixes = D;
        var F = function(b) {
            var d, e = v.length,
                f = a.CSSRule;
            if ("undefined" == typeof f) return c;
            if (!b) return !1;
            if (b = b.replace(/^@/, ""), d = b.replace(/-/g, "_").toUpperCase() + "_RULE", d in f) return "@" + b;
            for (var g = 0; e > g; g++) {
                var h = v[g];
                if (h.toUpperCase() + "_" + d in f) return "@-" + h.toLowerCase() + "-" + b
            }
            return !1
        };
        m.atRule = F;
        var H = m._config.usePrefixes ? "moz o ms webkit".split(" ") : [];
        m._domPrefixes = H;
        var I = f("modernizr");
        h._q.push(function() {
            delete I
        });
        d = I.style;
        e = void 0;
        h._q.unshift(function() {
            delete d
        });
        var K = m.testProp = function(a, b, d) {
            return l([a], c, b, d)
        };
        h.addTest("textshadow", K("textShadow", "1px 1px"));
        m.testAllProps = p;
        var G, x = m.prefixed = function(a, b, c) {
            return 0 === a.indexOf("@") ? F(a) : (-1 != a.indexOf("-") && (a = k(a)), b ? p(a, b, c) : p(a, "pfx"))
        };
        try {
            G = x("indexedDB", a)
        } catch (M) {}
        h.addTest("indexeddb", !!G);
        G && h.addTest("indexeddb.deletedatabase", "deleteDatabase" in G);
        m.testAllProps = n;
        h.addTest("cssanimations", n("animationName", "a", !0));
        h.addTest("backgroundsize", n("backgroundSize", "100%", !0));
        h.addTest("borderimage",
            n("borderImage", "url() 1", !0));
        h.addTest("borderradius", n("borderRadius", "0px", !0));
        h.addTest("boxshadow", n("boxShadow", "1px 1px", !0));
        (function() {
            h.addTest("csscolumns", function() {
                var a = !1,
                    b = n("columnCount");
                try {
                    (a = !!b) && (a = new Boolean(a))
                } catch (c) {}
                return a
            });
            for (var a, b, c = "Width,Span,Fill,Gap,Rule,RuleColor,RuleStyle,RuleWidth,BreakBefore,BreakAfter,BreakInside".split(","), d = 0; d < c.length; d++) a = c[d].toLowerCase(), b = n("column" + c[d]), ("breakbefore" === a || "breakafter" === a || "breakinside" == a) && (b = b ||
                n(c[d])), h.addTest("csscolumns." + a, b)
        })();
        h.addTest("flexbox", n("flexBasis", "1px", !0));
        h.addTest("cssreflections", n("boxReflect", "above", !0));
        h.addTest("csstransforms", function() {
            return -1 === navigator.userAgent.indexOf("Android 2.") && n("transform", "scale(1)", !0)
        });
        h.addTest("csstransforms3d", function() {
            var a = !!n("perspective", "1px", !0),
                b = h._config.usePrefixes;
            if (a && (!b || "webkitPerspective" in u.style)) {
                var c;
                h.supports ? c = "@supports (perspective: 1px)" : (c = "@media (transform-3d)", b && (c += ",(-webkit-transform-3d)"));
                c += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}";
                z("#modernizr{width:0;height:0}" + c, function(b) {
                    a = 7 === b.offsetWidth && 18 === b.offsetHeight
                })
            }
            return a
        });
        h.addTest("csstransitions", n("transition", "all", !0));
        h.addTest("forcetouch", function() {
            return y(x("mouseforcewillbegin", a, !1), a) ? MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN && MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN : !1
        });
        (function() {
            var a, b, c, d, e, f, g;
            for (g in s)
                if (s.hasOwnProperty(g)) {
                    if (a = [], b = s[g], b.name && (a.push(b.name.toLowerCase()),
                            b.options && b.options.aliases && b.options.aliases.length))
                        for (c = 0; c < b.options.aliases.length; c++) a.push(b.options.aliases[c].toLowerCase());
                    for (c = "function" === typeof b.fn ? b.fn() : b.fn, d = 0; d < a.length; d++) e = a[d], f = e.split("."), 1 === f.length ? h[f[0]] = c : (!h[f[0]] || h[f[0]] instanceof Boolean || (h[f[0]] = new Boolean(h[f[0]])), h[f[0]][f[1]] = c), q.push((c ? "" : "no-") + f.join("-"))
                }
        })();
        (function(a) {
            var b = u.className,
                c = h._config.classPrefix || "";
            if (B && (b = b.baseVal), h._config.enableJSClass) b = b.replace(RegExp("(^|\\s)" +
                c + "no-js(\\s|$)"), "$1" + c + "js$2");
            h._config.enableClasses && (b += " " + c + a.join(" " + c), B ? u.className.baseVal = b : u.className = b)
        })(q);
        delete m.addTest;
        delete m.addAsyncTest;
        for (m = 0; m < h._q.length; m++) h._q[m]();
        a.Modernizr = h
    })(window, document)
};
window.shouldModernizrNew && window.addModernizrNew();
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
        for (var f in a.adConfig.oURLTokens) a.adConfig.oURLTokens.hasOwnProperty(f) && EBG.dynamicTokens[f.toLowerCase()] && (d[EBG.dynamicTokens[f.toLowerCase()]] = a.adConfig.oURLTokens[f]);
        if (a.adConfig.ffs && a.adConfig.ffs.CFF_ClickFlags) {
            f = {};
            var k = !1,
                g;
            for (g in a.adConfig.ffs) a.adConfig.ffs.hasOwnProperty(g) && "CFF_Clk_" == g.substring(0, 8) && (f[g.substring(8)] = 1, k = !0);
            try {
                if (k) f = encodeURIComponent(JSON.stringify(f)), d.cff = f
            } catch (j) {}
        }
        for (var i in d) d.hasOwnProperty(i) &&
            (e += "&" + i + "=" + d[i]);
        g = c - e.length;
        if (a.cvurl) d.cvurl = encodeURIComponent('"' + a.cvurl.split("|").join('","') + '"');
        if (a.sJumpUrl) d.rtu = encodeURIComponent(a.sJumpUrl);
        if (EBGInfra.isDefinedNotNull(a.adConfig.ncu)) d.ncu = encodeURIComponent(a.adConfig.ncu);
        if (EBGInfra.isDefinedNotNull(a.adConfig.ebReferrer)) d.ebReferrer = encodeURIComponent(a.adConfig.ebReferrer);
        e += this._capUrls(g, ["cvurl", "ncu", "ebReferrer", "rtu"], d);
        return e.slice(0, c)
    },
    _capUrls: function(a, b, c) {
        for (var d = "", e = !0, f = 0; e;)
            for (var e = !1, k = Math.floor(a /
                    b.length), f = k, g = b.length - 1; 0 <= g; --g) {
                var j = b[g];
                c[j] ? (j = "&" + j + "=" + c[j], j.length <= k && (d += j, a -= j.length, b.splice(g, 1), e = !0)) : (b.splice(g, 1), e = !0)
            }
        for (g = 0; g < b.length; ++g) d += ("&" + b[g] + "=" + c[b[g]]).slice(0, f);
        return d
    },
    _pairsToObj: function(a, b) {
        for (var c = {}, d = unescape(a).split(b), e = 0; e < d.length; e++) try {
            if (d[e]) {
                var f = d[e].indexOf("="),
                    k = d[e].substr(0, f),
                    g = d[e].substr(f + 1);
                c[k] = escape(g)
            }
        } catch (j) {}
        return c
    }
};
EBG.declareClass(EBG.Utilities.InteractionUtil, null);
EBG.InteractionUtil = EBG.InteractionUtil || new EBG.Utilities.InteractionUtil;
EBG.EventName = {
    EB_INITIALIZED: "ebinitialized",
    EB_NOTIFY_CREATIVE: "ebNotifyCreative",
    VISIBILITY: "VISIBILITY_CHECK",
    DEVICE_MOTION: "DEVICE_MOTION",
    DEVICE_ORIENTATION: "DEVICE_ORIENTATION",
    UPDATE_VISIBILITY_ASSET: "ebUpdateVisibilityAsset"
};
EBG.Video = {
    EXTERNAL_ASSET: "externalAsset"
};
EBG.HTML5 = {
    AssetTypeByPriority: "M3U8,MP4,WEBM,OGV,MPEG,OGG".split(",")
};
EBG.CommandsToSend = {
    REGISETR_VIDEO: "_registerVideo",
    UNREGISETR_VIDEO: "_unregisterVideo",
    NOTIFY_DOC_LOADED: "notifyDocLoaded"
};
EBG.EventSubscription = function(a, b, c) {
    this.eventName = a;
    this.callback = b ? b : null;
    this.callbackBinding = c ? c : null
};
EBG.EventSubscription.prototype = {
    isValid: function() {
        return EBG.isFunc(this.callback) && (!this.callbackBinding || EBG.isObj(this.callbackBinding))
    },
    toString: function() {
        return EBG.format("EventSubscription: eventName={0}, callback={1}, callbackBinding={2}", this.eventName, EBG.typeOf(this.callback), EBG.typeOf(this.callbackBinding))
    }
};
EBG.WindowProp = {
    top: "top",
    left: "left",
    location: "location",
    menubar: "menubar",
    width: "width",
    height: "height"
};
EBG.Interactions = EBG.Interactions || {};
EBG.Interactions.NotifiedInteractions = EBG.Interactions.NotifiedInteractions || {
    PLAYER_PARAMS: "plparams",
    VER_URL: "verURL",
    SKIP: "ebSkip"
};
EBG.EBC = function() {
    this._addSupportedCommands();
    !window.ebDivAd && window.top === window || window.EBModulesConfig && EBModulesConfig.localMode ? this._isInitialized = this._isLocalMode = !0 : (this._registerToEvents(), this._sendInitMessage())
};
EBG.EBC.prototype = {
    _isLocalMode: !1,
    _isInitialized: !1,
    _adConfig: null,
    _adConfigDefined: !1,
    _isPageLoaded: !1,
    _dsBasePath: "",
    _isClickOccur: !1,
    _clickedProductIds: {},
    _subscriptions: window.EB ? EB._subscriptions : {},
    _bandWidth: null,
    _ffs: null,
    _commands: {},
    _assetCreativeParams: null,
    _mousePos: {
        curr: {},
        prev: {}
    },
    _isMouseMoveSubscribed: !1,
    _canSendMouseMove: !1,
    getAdProperty: function(a) {
        var b = this._adConfig;
        if (a && EBG.isFunc(a.split)) {
            for (var a = a.split("."), c = 0; c < a.length; c++)
                if (b) b = b[a[c]];
                else return null;
            return EBG.isObj(b) ?
                EBG.cloneObj(b) : b
        }
    },
    isInitialized: function() {
        return this._isInitialized
    },
    notifyCreativeWhenReady: function(a) {
        this._isInitialized ? a(this._assetCreativeParams ? this._assetCreativeParams : null) : this.addEventListener(EBG.EventName.EB_NOTIFY_CREATIVE, a)
    },
    notifyMessage: function(a) {
        this._sendMessage(a.name, a)
    },
    notifyEvent: function(a) {
        try {
            EBGInfra.hasOwnValue(EBG.Interactions.NotifiedInteractions, a.name, !0) && this._sendMessage(EBG.EBMessage.NOTIFIED_INTERACTION, a)
        } catch (b) {}
    },
    isMobileDevice: function() {
        return this._isMobileDevice()
    },
    addEventListener: function(a, b, c) {
        try {
            this._subscriptions[a] || (this._subscriptions[a] = []);
            var d = new EBG.EventSubscription(a, b, c);
            d.isValid() || EBG.throwEx("subscription is invalid!");
            this._subscriptions[a].push(d);
            return d
        } catch (e) {}
    },
    removeEventListener: function(a) {
        try {
            if (a && a.eventName) {
                var b = a.eventName;
                if (a && this._subscriptions[b])
                    for (var c = 0; c < this._subscriptions[b].length; c++)
                        if (this._subscriptions[b][c] === a) {
                            this._subscriptions[b].splice(c, 1);
                            break
                        }
            }
        } catch (d) {}
    },
    getAssetUrl: function(a, b) {
        if (a &&
            a.format) {
            var c = "";
            switch (a.format) {
                case "wsRelUrl":
                case "absUrl":
                    c = a.data;
                    break;
                case "dsRelUrl":
                    c = EBG.combinePaths(this._adConfig.resourcePath, a.data)
            }
            return c
        }
        c = (c = this._getAsset(a, b)) ? c.dsPath : "";
        return c = "" != c ? EB._adConfig.ffs.CFF_userExternalPck && (-1 !== c.indexOf("http://") || -1 !== c.indexOf("https://")) ? c : EBG.combinePaths(this._dsBasePath, c) : EBGInfra.isDefined(a) ? a : ""
    },
    _getAsset: function(a, b) {
        var c = null;
        try {
            EBGInfra.isDefined(b) && (b = EBG.format("{0}{1}", "ebmovie", b), c = this._getAssetProps(b), this._adConfig.pckAssets &&
                this._adConfig.pckAssets[b] && (c = this._getBestAsset(b))), c || (c = this._getAssetProps(a))
        } catch (d) {}
        return c
    },
    browserSupports: function(a) {
        var a = a.toLowerCase(),
            b = !0;
        try {
            for (var c = a.split("."), a = null, d = 0; d < c.length; d++) var e = c[d],
                a = a || Modernizr,
                a = a[e],
                b = b && !!a
        } catch (f) {}
        return b
    },
    clickthrough: function(a, b, c) {
        try {
            this._handleInteractionCommand(a, b, EBG.EBMessage.CLICKTHROUGH, c, this._adConfig.currentVersion)
        } catch (d) {}
    },
    _setInteractionData: function(a, b) {
        return {
            intName: a ? a : "",
            clickUrl: b ? b : "",
            handleClickInt: !0,
            clickInt: this._adConfigDefined ? this._adConfig.interactions[a] : null,
            windowWasOpen: this._adConfigDefined ? this._adConfig.openWindow : !0,
            isCustomInteraction: a ? !0 : !1
        }
    },
    _handleInteractionCommand: function(a, b, c, d, e) {
        var f = !1,
            b = this._setInteractionData(a, b),
            k = !1;
        b.intName = a ? a : "_eyeblaster";
        b.clickInt = d ? d : !b.clickInt && this._adConfigDefined ? this._adConfig.interactions[b.intName] : b.clickInt;
        if (e && b.clickInt) b.clickInt.clickedVersion = b.clickInt.clickedVersion || e;
        if ((a = b.clickInt) && a.fClick) this._isClickOccur =
            (k = !this._isClickOccur) ? !0 : this._isClickOccur, f = a.fClick ? this._shoudlUseBrdPipe(b, k) : !1;
        this._setJumpUrl(b, f, k);
        this._openWindowOrRedirect(b);
        if (b.clickInt.clickedVersion) b.clickedVersion = b.clickInt.clickedVersion, b.clickedVerUrl = b.clickInt.clickedVerUrl, b.clickUrl = b.clickInt.currentClickUrl ? b.clickInt.currentClickUrl : b.clickInt.jumpUrl ? b.clickInt.jumpUrl : b.clickUrl;
        this._sendMessage(c, b)
    },
    _useDelayedWindowOpen: function() {
        var a = !1; - 1 != window.navigator.userAgent.indexOf("FBIOS") && (a = !0);
        return a
    },
    _shoudlUseBrdPipe: function(a, b) {
        return shouldUseBrdPipe = this._getJumpUrlNonLocalMode(a) && (a.isCustomInteraction && b || !a.isCustomInteraction) ? !0 : !1
    },
    _getJumpUrlNonLocalMode: function(a) {
        var b = "";
        a.clickInt && (b = a.isCustomInteraction ? a.clickInt.jumpUrl ? a.clickInt.jumpUrl : a.clickUrl ? a.clickUrl : "" : a.clickInt.jumpUrl ? a.clickInt.jumpUrl : "");
        return b
    },
    _setJumpUrl: function(a, b, c) {
        var d = "";
        if (this._isLocalMode) a.jumpUrl = a.clickUrl;
        else if (d = this._getJumpUrlNonLocalMode(a), a.clickUrl = a.isCustomInteraction ? d : "",
            this._adConfigDefined) !this._adConfig.isPreview && b ? (b = a.clickInt && a.clickInt.clickedVersion ? a.clickInt.clickedVersion : !1, c = c ? 1 : b && !this._clickedProductIds["V_" + b] ? 2 : 0, a.jumpUrl = this._getBannerRedirectUrl(b && d ? d : a.clickUrl, c, b, a.clickInt && a.clickInt.clickedVerUrl ? a.clickInt.clickedVerUrl : !1), 2 == c && (this._clickedProductIds["V_" + b] = !0)) : a.jumpUrl = d
    },
    _getBannerRedirectUrl: function(a, b, c, d) {
        return EBG.InteractionUtil.getBannerRedirectUrl({
            adConfig: this._adConfig,
            clickVal: b,
            sJumpUrl: a,
            fIsDefClick: !1,
            sClickedVersion: c,
            isClickTag: !1,
            cvurl: d
        })
    },
    _openWindowOrRedirect: function(a) {
        var b = this._checkURL(a.jumpUrl),
            c = this._getInteractionClickTarget(a),
            d = a.windowWasOpen,
            c = c ? c : EBG.WindowTarget.BLANK,
            e = null,
            f = "";
        if (d && b) {
            if (this._adConfigDefined)
                if (e = a.clickInt, this._isMobileDevice()) f = "dialog=no,fullscreen=yes,titlebar=1,resizable=1,scrollbars=1,directories=0,toolbar=1,status=1";
                else if (e && (e.xPos || e.yPos || e.width || e.height)) f = "titlebar=1,resizable=1,scrollbars=1,directories=0,toolbar=1,status=1" + this._formatProperty(e.yPos,
                EBG.WindowProp.top), f += this._formatProperty(e.xPos, EBG.WindowProp.left), f += this._formatProperty(e.showAddressBar, EBG.WindowProp.location), f += this._formatProperty(e.showMenuBar, EBG.WindowProp.menubar), f += this._formatProperty(e.width, EBG.WindowProp.width), f += this._formatProperty(e.height, EBG.WindowProp.height);
            e = window.open(b, c, f);
            if (!e && (c = document.createElement("a"), f = ((f = EBG && EBG.getBigScript ? EBG.getBigScript() : null) ? f.parentElement : null) || document.body)) c.setAttribute("id", "SZMK_BRD_Anchortag"),
                c.setAttribute("href", b), c.setAttribute("target", "_blank"), f.appendChild(c), c.click(), f.removeChild(c)
        }
        return e
    },
    userActionCounter: function(a, b) {
        try {
            this._handleInteractionCommand(a, b, EBG.EBMessage.USER_ACTION_COUNTER)
        } catch (c) {}
    },
    automaticEventCounter: function(a, b) {
        try {
            this._handleInteractionCommand(a, b, EBG.EBMessage.AUTOMATIC_EVENT_COUNTER)
        } catch (c) {}
    },
    startTimer: function(a) {
        try {
            this._sendMessage(EBG.EBMessage.START_TIMER, {
                intName: a
            })
        } catch (b) {}
    },
    stopTimer: function(a) {
        try {
            this._sendMessage(EBG.EBMessage.STOP_TIMER, {
                intName: a
            })
        } catch (b) {}
    },
    startVideoTimer: function(a, b) {
        try {
            var c = this._getAsset(a);
            this._sendMessage(EBG.EBMessage.START_VIDEO_TIMER, {
                intName: b ? EBG.VideoInteraction.FULLSCREEN_DURATION : EBG.VideoInteraction.VIDEO_PLAY_DURATION,
                assetId: c ? c.assetID : 0,
                ordinalNum: c ? c.ordinalNum : 0,
                command: EBG.CommandsToSend.REGISETR_VIDEO
            })
        } catch (d) {}
    },
    stopVideoTimer: function(a, b) {
        try {
            var c = this._getAsset(a);
            this._sendMessage(EBG.EBMessage.STOP_VIDEO_TIMER, {
                intName: b ? EBG.VideoInteraction.FULLSCREEN_DURATION : EBG.VideoInteraction.VIDEO_PLAY_DURATION,
                assetId: c ? c.assetID : 0,
                ordinalNum: c ? c.ordinalNum : 0,
                command: EBG.CommandsToSend.UNREGISETR_VIDEO
            })
        } catch (d) {}
    },
    videoInteraction: function(a, b, c) {
        try {
            var d = this._getAsset(b);
            this._sendMessage(EBG.EBMessage.VIDEO_INTERACTION, {
                intName: a,
                assetId: d ? d.assetID : 0,
                ordinalNum: d ? d.ordinalNum : 0,
                userInitiated: c
            })
        } catch (e) {}
    },
    showDefaultImage: function() {
        try {
            this._sendMessage(EBG.EBMessage.SHOW_DEFAULT_IMAGE)
        } catch (a) {}
    },
    initExpansionParams: function() {},
    setExpansionParams: function(a, b, c, d, e) {
        a = {
            x: a,
            y: b,
            width: c,
            height: d
        };
        if (e) a.autoCollapse = e;
        try {
            this._sendMessage(EBG.EBMessage.INIT_EXPANSION_PARAMS, a)
        } catch (f) {}
    },
    getDimensions: function() {
        return {
            width: this._adConfig.originalWidth || this._adConfig.width,
            height: this._adConfig.originalHeight || this._adConfig.height
        }
    },
    resetCollapseTimer: function(a, b) {
        var c = {
            newTimerValue: b
        };
        if (a) c.panelName = a;
        this._sendMessage(EBG.EBMessage.RESET_COLLAPSE_TIMER, c)
    },
    cancelCollapseTimer: function(a) {
        this.resetCollapseTimer(a, -1)
    },
    expand: function(a) {
        EBG.isGlobalDef("JSON");
        try {
            this._sendMessage(EBG.EBMessage.EXPAND,
                a)
        } catch (b) {}
    },
    collapse: function(a) {
        try {
            this._sendMessage(EBG.EBMessage.COLLAPSE, "undefined" != typeof a ? a : null)
        } catch (b) {}
    },
    closeAd: function() {
        try {
            this._sendMessage(EBG.EBMessage.CLOSE_AD)
        } catch (a) {}
    },
    _sendInitMessage: function() {
        this._isInitialized || (this._sendMessage(EBG.EBMessage.REQ_INIT, null), EBG.runTimed(this, this._sendInitMessage, [!0], 200))
    },
    _isServingMode: function() {
        return this._isInitialized && !this._isLocalMode
    },
    getAssetProps: function(a, b) {
        return this._getAssetProps(a, b)
    },
    _getAssetProps: function(a,
        b) {
        if (!this._isServingMode()) return null;
        var c = null;
        b && (a = EBG.format("{0}{1}", "ebmovie", b));
        a = a.toLowerCase();
        a = a.split("?")[0];
        c = this._adConfig.assets[a] ? this._adConfig.assets[a] : this._getPackageProps(a);
        !c && -1 != a.indexOf("/") && (a = a.split("/"), a = a[a.length - 1], c = this._adConfig.assets[a]);
        return c
    },
    _getPackageProps: function(a) {
        if (!this._isServingMode()) return null;
        var b = null,
            a = a.toLowerCase();
        if (this._adConfig.pckAssets[a]) b = this._adConfig.pckAssets[a];
        else
            for (var c in this._adConfig.pckAssets)
                for (var d in this._adConfig.pckAssets[c])
                    for (var e =
                            0; e < this._adConfig.pckAssets[c][d].length; e++)
                        if (this._adConfig.pckAssets[c][d][e].dsPath && this._adConfig.pckAssets[c][d][e].dsPath.toLowerCase() == a) {
                            b = this._adConfig.pckAssets[c][d][e];
                            break
                        } return b
    },
    _formatProperty: function(a, b) {
        return a && 0 <= a ? "," + b + "=" + a : ""
    },
    _isMobileDevice: function() {
        isMobile = !1;
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)) isMobile = !0;
        return isMobile
    },
    _getInteractionClickTarget: function(a) {
        var b = a.intName ? a.intName : "_eyeblaster",
            c = "";
        if (this._isServingMode()) {
            var b = this._adConfig.interactions[b],
                d = a.clickUrl ? a.clickUrl : b.jumpUrl;
            if (b && d && b.target && (c = a.clickInt && a.clickInt.target ? a.clickInt.target : b.target, c == EBG.WindowTarget.SELF)) c = EBG.WindowTarget.PARENT
        }
        return c
    },
    _addSupportedCommands: function() {
        this._commands[EBG.EBMessage.UPDATE_CLICK] = this._updateClick;
        this._commands[EBG.EBMessage.REQ_MOUSE_MOVE] = this._handleMouseMoveRequest;
        this._commands[EBG.EBMessage.PANEL_FREQUENCY] = this._handlePanelFrequencyMessage
    },
    _listenToMessages: function() {
        for (var a in EBG.EventName) EBG.EventName.hasOwnProperty(a) && (a = EBG.EventName[a], EBG.pm.bind(a, this._handleEvents, this));
        for (var b in this._commands) this._commands.hasOwnProperty(b) && EBG.pm.bind(b, this._commands[b], this)
    },
    isAutoExpandEnabled: function() {
        return this._isLocalMode || 1 == this._adConfig.uponShow && !this._adConfig.disableCreativeExpand
    },
    _handlePanelFrequencyMessage: function(a) {
        this._adConfig.disableCreativeExpand =
            a.disableCreativeExpand
    },
    _updateClick: function(a) {
        this._isClickOccur = a.clickOccur;
        a.clickedProductId && (this._clickedProductIds["V_" + a.clickedProductId] = !0)
    },
    init: function(a) {
        EBG.isGlobalDef("JSON");
        if (!this._isInitialized) {
            this._ffs = a.ffs;
            this._adConfig = a.adConfig;
            this._adConfigDefined = EBGInfra.isDefinedNotNull(this._adConfig) ? !0 : !1;
            this._dsBasePath = a.dsBasePath;
            this._bandWidth = a.adConfig.BWD;
            this._isClickOccur = a.clickOccur;
            this._clickedProductIds = a.clickedProductIds || {};
            this._assetCreativeParams =
                a.assetCreativeParams;
            this.assetId = a.assetId;
            this.visibilityAssetId = a.visibilityAssetId;
            this._browserData = a.browserData;
            this.bannerId = this._adConfig.placeHolderId;
            this._initAssetList();
            for (var b in a.events) a.events.hasOwnProperty(b) && (EBG.EventName[b] = a.events[b]);
            this._listenToMessages();
            this._adConfig.bwApplied ? this._bandWidth.checked || !this._bandWidth.checking ? this._notifyEbInitialized() : this.addEventListener(EBG.Events.EventNames.BANDWITH_DETECTED, this._notifyEbInitialized) : this._notifyEbInitialized()
        }
    },
    _notifyEbInitialized: function() {
        if (EBG.isDefinedNotNull(window.ebArrModulesToTrigger) && ebArrModulesToTrigger.length)
            for (var a = 0; a < ebArrModulesToTrigger.length; a++) try {
                ebArrModulesToTrigger[a].init(this._adConfig)
            } catch (b) {}
        this._isInitialized = !0;
        this._sendMessage(EBG.EBMessage.INITDONE, null);
        window.ebDivAd && !this._adConfig.isInstream && ("function" === typeof window.Event ? a = new Event("ebinitdone") : (a = document.createEvent("Event"), a.initEvent("ebinitdone", !0, !0)), window.dispatchEvent(a));
        this._dispatchEvent(EBG.EventName.EB_INITIALIZED,
            null);
        this._dispatchEvent(EBG.EventName.EB_NOTIFY_CREATIVE, this._assetCreativeParams ? this._assetCreativeParams : null);
        "object" == typeof additionalConfig && this._sendMessage("additionalConfig", additionalConfig)
    },
    _initAssetList: function() {
        var a = this._adConfig.assets,
            b = this._adConfig.pckAssets,
            c = {},
            d = {},
            e = /ebmovie([0-9_])/i,
            f;
        for (f in a)
            if (a.hasOwnProperty(f)) {
                var k = a[f];
                k.ordinalNum = e.test(f) ? 1 * e.exec(f)[1] : 0;
                c[f.toLowerCase()] = k;
                k.dsPath && (c[k.dsPath.toLowerCase()] = k)
            }
        this._adConfig.assets = c;
        var c = a =
            null,
            g;
        for (g in b)
            if (b.hasOwnProperty(g)) {
                var c = b[g],
                    a = e.test(g) ? 1 * e.exec(g)[1] : 0,
                    j;
                for (j in c)
                    if (c.hasOwnProperty(j))
                        for (f = 0; f < c[j].length; f++) c[j][f].ordinalNum = a;
                d[g.toLowerCase()] = c
            }
        this._adConfig.pckAssets = d
    },
    _getBestAsset: function(a) {
        var b = this._getBestAdditionalAsset(a);
        this._adConfig.bestAsset = this._adConfig.bestAsset || {};
        return this._adConfig.bestAsset[a] = b
    },
    _getBestAdditionalAsset: function(a) {
        var b = {
                bitRate: -1
            },
            c = this._bandWidth.speed; - 1 != c && (c = Math.round(1.1 * c));
        var d = {},
            d = this._adConfig.pckAssets[a];
        if (!d || 0 == d.length) return null;
        for (a = 0; a < EBG.HTML5.AssetTypeByPriority.length; a++) {
            var e = EBG.HTML5.AssetTypeByPriority[a];
            if (this._isVideoTypeSupported(e) && (e = d[e])) {
                var f = this._getBestBitrateAssetIndex(c, e);
                if (0 <= f) {
                    EBG.mergeObj(e[f], b, !0);
                    break
                }(-1 == b.bitRate || e[e.length - 1].bitRate < b.bitRate) && EBG.mergeObj(e[e.length - 1], b, !0)
            }
        }
        return b
    },
    _getBestBitrateAssetIndex: function(a, b) {
        var c = -1;
        if (-1 == a || this._adConfig.isOfflineDemo) return 0 < b.length ? 0 : -1;
        for (var d = -1, e = 0; e < b.length; e++) {
            var f = b[e].bitRate -
                a;
            0 > f && (f = -f);
            if (-1 == d || f < d) d = f, c = e
        }
        return c
    },
    _isVideoTypeSupported: function(a) {
        var b = !1,
            c = document.createElement("video");
        switch (a) {
            case "MP4":
            case "OGV":
            case "MPEG":
            case "OGG":
            case "WEBM":
                c.canPlayType && c.canPlayType(EBG.format("video/{0}", a.toLowerCase())) && (b = !0);
                break;
            case "M3U8":
                c.canPlayType && c.canPlayType("application/x-mpegURL") && (b = !0)
        }
        return b
    },
    _handleMouseMoveRequest: function(a) {
        if (!0 === a.shouldStart) {
            if (!this._isMouseMoveSubscribed) this._isMouseMoveSubscribed = this._canSendMouseMove = !0,
                document.body.addEventListener("mousemove", this._handleMouseMove, !1)
        } else if (this._isMouseMoveSubscribed) document.body.removeEventListener("mousemove", this._handleMouseMove, !1), this._isMouseMoveSubscribed = this._canSendMouseMove = !1
    },
    _handleMouseMove: function(a) {
        EB._mousePos.current = {
            x: a.clientX,
            y: a.clientY
        };
        EB._sendMouseMove()
    },
    _sendMouseMove: function() {
        if (!0 == this._canSendMouseMove) {
            this._canSendMouseMove = !1;
            if (this._mousePos.prev.x != this._mousePos.current.x || this._mousePos.prev.y != this._mousePos.current.y) this._mousePos.prev =
                EBG.cloneObj(this._mousePos.current), this._sendMessage(EBG.EBMessage.MOUSE_MOVE, {
                    clientX: this._mousePos.current.x,
                    clientY: this._mousePos.current.y
                });
            EBG.runTimed(this, function() {
                this._canSendMouseMove = !0;
                this._sendMouseMove()
            }, [], 500)
        }
    },
    _sendMessage: function(a, b) {
        EBG.isGlobalDef("JSON");
        if (b && this._adConfig && !("uid" in b)) b.uid = this._adConfig.uid;
        var c = {
            target: window.ebSafeFrame && ebSafeFrame.cc ? ebSafeFrame.cc : window.parent,
            type: a,
            data: b
        };
        if (window.ebSafeFrame && ebSafeFrame.cc) c.source = this;
        window.ebSafeFrame ?
            ebSafeFrame.pm(c) : EBG.pm(c)
    },
    _handleEvents: function(a, b) {
        var c = JSON.parse(b.data);
        EBG.isGlobalDef("JSON");
        if (EBG.EventName.PAGE_LOAD && c.type == EBG.EventName.PAGE_LOAD) this._isPageLoaded = !0;
        this._dispatchEvent(c.type, c)
    },
    _dispatchEvent: function(a, b) {
        EBG.isGlobalDef("JSON");
        var c = this._subscriptions[a];
        if (c)
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                e.callback.apply(e.callbackBinding || window, [b])
            }
    },
    _registerToEvents: function() {
        this._registerDocumentLoaded();
        EBG.pm.bind(EBG.EBMessage.INIT, this.init, this,
            window);
        this.addEventListener(EBG.EventName.UPDATE_VISIBILITY_ASSET, function(a) {
            this.visibilityAssetId = a.data.assetId
        }, this);
        this.addEventListener(EBG.EventName.VISIBILITY, function(a) {
            if (this.visibilityAssetId === a.data.assetId) this._visibilityData = a.data, this._visibilityData.available = !0
        }, this)
    },
    getVisibilityData: function() {
        return this._adConfig && this._adConfig.visibility && this._adConfig.visibility.isAvailable ? this._visibilityData || {
            available: !0
        } : {
            available: !1
        }
    },
    _registerDocumentLoaded: function() {
        var a =
            this;
        "complete" != document.readyState ? document.onreadystatechange = function() {
            "complete" == document.readyState && a._documentStateCompleted(a)
        } : this._documentStateCompleted(this)
    },
    _documentStateCompleted: function(a) {
        a._sendMessage(EBG.EBMessage.DOCUMENT_LOADED, {
            command: EBG.CommandsToSend.NOTIFY_DOC_LOADED
        });
        if ((a = parseFloat(navigator.userAgent.split("Edge/")[1])) && 14.14342 > a) a = document.createElement("input"), document.body.appendChild(a), a.focus(), document.body.removeChild(a)
    },
    _checkURL: function(a) {
        if (a) {
            var b =
                a.toLowerCase(); - 1 == b.indexOf("http://") && -1 == b.indexOf("https://") && -1 == b.indexOf("ftp://") && -1 == b.indexOf("aim:") && -1 == b.indexOf("tel:") && -1 == b.indexOf("sms:") && -1 == b.indexOf("mailto:") && -1 == b.indexOf("fb://") && -1 == b.indexOf("applenews://") && -1 == b.indexOf("applenewss://") && (a = 0 == b.indexOf("/") ? "http://" + window.location.hostname + a : "http://" + a)
        }
        return a
    },
    userSwipe: function() {
        try {
            this._sendMessage(EBG.EBMessage.SWIPE, {
                intName: EBG.EBMessage.SWIPE
            })
        } catch (a) {}
    },
    getSDKData: function() {
        return null
    },
    setNativePlayerAsDefault: function() {},
    dispose: function() {
        try {
            this._sendMessage(EBG.EBMessage.DISPOSE, {
                intName: EBG.EBMessage.DISPOSE
            })
        } catch (a) {}
    },
    hideAdPart: function(a) {
        a = a || {};
        this._sendMessage(EBG.EBMessage.HIDE_ELEMENT, {
            adPart: a.adPart || EBG.adParts.BANNER,
            panelName: a.panelName && a.panelName.toLowerCase()
        })
    },
    showAdPart: function(a) {
        a = a || {};
        this._sendMessage(EBG.EBMessage.SHOW_ELEMENT, {
            adPart: a.adPart || EBG.adParts.BANNER,
            panelName: a.panelName && a.panelName.toLowerCase()
        })
    },
    relativeToAbsolute: function(a) {
        return "//" === a.substr(0, 2) ? EBG.combinePaths(this._adConfig.protocol,
            a) : "https://" == a.substr(0, 8) || "http://" == a.substr(0, 7) ? a : EBG.combinePaths(this._adConfig.adKitData.paths.folderRoot, a)
    }
};
document.addEventListener("DOMContentLoaded", function() {
    "object" == typeof additionalConfig && EB._sendMessage("additionalConfig", additionalConfig)
}, !1);
EBG.EBCMDEvents = {
    collapseAd: "collapseAd",
    expandAd: "expandAd",
    SDK_DATA_CHANGE: "sdkDataChange",
    SDK_EVENT: "sdkEvent"
};
EBG.mergeObj(EBG.EBCMDEvents, EBG.EventName, !0);
EBG.EBC.prototype.playVideoOnNativePlayer = function(a, b) {
    var c = this.getAssetUrl(a, b),
        d = this._getAsset(a, b).dsPath;
    if (!d) d = EBG.Video.EXTERNAL_ASSET;
    EB.videoInteraction(EBG.VideoInteraction.STARTED, d, !0);
    try {
        this._sendMessage(EBG.EBMessage.PLAY_VIDEO_ON_NATIVE_PLAYER, {
            videoUrl: c
        })
    } catch (e) {}
};
EBG.EBC.prototype.shouldUseNativePlayer = function() {
    var a = !1;
    this._adConfig.SDKData && this._adConfig.SDKData.isNativePlayerSupported && this._useNativePlayerAsDefault && (a = !0);
    return a
};
EBG.EBC.prototype.setNativePlayerAsDefault = function(a) {
    this._useNativePlayerAsDefault = a
};
EBG.EBC.prototype.createCalendarEvent = function(a) {
    try {
        this._sendMessage(EBG.EBMessage.CREATE_CALENDAR_EVENT, a)
    } catch (b) {}
};
EBG.EBC.prototype.storePicture = function(a) {
    a = this.getAssetUrl(a);
    try {
        this._sendMessage(EBG.EBMessage.STORE_PICTURE, {
            pictureUrl: a
        })
    } catch (b) {}
};
EBG.EBC.prototype._handleEvents = function(a, b) {
    var c = JSON.parse(b.data);
    EBG.isGlobalDef("JSON");
    if (EBG.EventName.PAGE_LOAD && c.type == EBG.EventName.PAGE_LOAD) this._isPageLoaded = !0;
    c && c.type == EBG.EventName.collapseAd && ("function" == typeof collapse ? collapse() : this.collapse());
    c && c.type == EBG.EventName.expandAd && ("function" == typeof expand ? expand() : this.expand());
    if (c && c.type == EBG.EventName.SDK_DATA_CHANGE) this._adConfig.SDKData = c.data.SDKData;
    if (c.type == EBG.EventName.SDK_EVENT) {
        var d = c.data;
        if (d && d.eventName &&
            d.SDKData) this._adConfig.SDKData = d.SDKData, this._dispatchEvent(d.eventName, {
            eventData: d.eventData,
            SDKData: d.SDKData
        })
    } else {
        d = c;
        if (EBG.EBCMDEvents.hasOwnProperty(c.type)) d = c.data;
        this._dispatchEvent(c.type, d)
    }
};
EBG.EBC.prototype.isMobileDevice = function() {
    return this._adConfig.isInApp || this._isMobileDevice()
};
EBG.EBC.prototype.getSDKData = function() {
    return this._adConfig && this._adConfig.SDKData ? this._adConfig.SDKData : null
};
EBG.EBC.prototype.setResizeProperties = function(a) {
    this._sendMessage(EBG.EBMessage.SET_RESIZE_PROPS, a)
};
EBG.EBC.prototype.setExpandProperties = function(a) {
    this._sendMessage(EBG.EBMessage.SET_EXPAND_PROPS, a)
};
EBG.EBC.prototype.setOrientationProperties = function(a) {
    this._sendMessage(EBG.EBMessage.SET_ORIENTATION_PROPS, a)
};
EBG.EBC.prototype.resize = function(a, b) {
    this._sendMessage(EBG.EBMessage.RESIZE, {
        width: a,
        height: b
    })
};
EBG.EBC.prototype.close = function() {
    this._sendMessage(EBG.EBMessage.CLOSE)
};
EBG.declareClass(EBG.EBC, null);
EB = new EBG.EBC;