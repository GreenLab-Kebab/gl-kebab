var sas = sas || {};
sas.utils = sas.utils || {}, sas.events = sas.events || {}, sas.cmp = sas.cmp || {}, Date.now || (Date.now = function() {
        return (new Date).getTime()
    }), sas.utils.extend = function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var a = arguments[e];
            if (a && "object" == typeof a)
                for (var s in a) void 0 !== a[s] && (Array.isArray(a[s]) ? t[s] = a[s] : "object" == typeof a[s] ? t[s] = sas.utils.extend({}, t[s], a[s]) : t[s] = a[s])
        }
        return t
    }, sas.utils.Latch = function(t) {
        for (var e = [], a = {}, s = t = t || [], n = !1, r = 0; r < s.length; r++) a[t[r]] = {};
        var i = function() {
                if (!n) {
                    for (var t in a)
                        if (!a[t].status) return;
                    n = !0;
                    for (var s = o(), r = 0; r < e.length; r++) e[r].apply(this, s)
                }
            },
            o = function() {
                for (var t = [], e = 0; e < s.length; e++) t.push(a[s[e]].result);
                return t
            };
        this.isComplete = function() {
            return n
        }, this.notify = function(t, e) {
            a[t] && (a[t].status = !0, a[t].result = e, i())
        }, this.addListener = function(t) {
            null != t && (n ? t() : e.push(t))
        }, i()
    }, sas.utils.getIEVersion = function() {
        var t = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
        return t ? parseInt(t[1]) : void 0
    }, sas.utils.parseCookies = function(t) {
        for (var e = {}, a = t.split("; "), s = 0; s < a.length; s++) {
            var n = a[s],
                r = n.indexOf("="),
                i = n.substring(0, r),
                o = n.substring(r + 1);
            e[i] = o
        }
        return e
    }, sas.utils.setCookie = function(t, e, a, s) {
        var n = new Date;
        n.setTime(n.getTime() + 24 * s * 60 * 60 * 1e3);
        var r = "expires=" + n.toUTCString();
        t.cookie = e + "=" + a + ";" + r + ";path=/"
    }, sas.events.addEvent = function(t, e, a) {
        if (t && e && a) return t.attachEvent ? t.attachEvent("on" + e, a) : t.addEventListener && t.addEventListener(e, a, !1), {
            removeEvent: function() {
                t.detachEvent ? t.detachEvent("on" + e, a) : t.removeEventListener && t.removeEventListener(e, a, !1)
            }
        }
    }, sas.events.addLoadEvent = function(t, e) {
        if (t && e) {
            var a = "load",
                s = function() {
                    return !0
                };
            (sas.utils.getIEVersion() < 11 || t == document) && (a = "readystatechange", s = function() {
                if (!t.readyState || "complete" == t.readyState || "loaded" == t.readyState) return !0
            });
            var n = sas.events.addEvent(t, a, function() {
                s() && (n.removeEvent(), e.apply(this, arguments))
            })
        }
    }, sas.events.addMessageEvent = function(t, e) {
        t && e && sas.events.addEvent(t, "message", function() {
            e.apply(this, arguments)
        })
    }, sas.events._events = sas.events._events || {}, sas.events._history = sas.events._history || [], sas.events.on = function(t, e, a) {
        sas.events._events[t] = sas.events._events[t] || {
            que: []
        };
        var s = sas.events._events[t];
        a && (s = s[a] = s[a] || {
            que: []
        }), s.que.push(e)
    }, sas.events.fire = function(t, e, a) {
        sas.events._history.push({
            eventName: t,
            data: sas.utils.extend({
                timestamp: Date.now()
            }, e),
            id: a
        });
        var s = sas.events._events[t];
        if (s) {
            if (a && s[a])
                for (var n = 0; n < s[a].que.length; n++) s[a].que[n](sas.utils.extend({}, e), a);
            for (n = 0; n < s.que.length; n++) s.que[n](sas.utils.extend({}, e), a)
        }
    }, sas.events.off = function(t, e, a) {
        var s = sas.events._events[t];
        if (s) {
            var n = s.que;
            if (a && (n = s[a].que), n) {
                var r = n.indexOf(e);
                r >= 0 && n.splice(r, 1)
            }
        }
    }, sas.events.history = function(t) {
        for (var e = [], a = 0; a < sas.events._history.length; a++) {
            var s = sas.events._history[a];
            t && s.eventName != t || e.push(sas.utils.extend({}, s))
        }
        return e
    },
    function() {
        if (!sas.__cmpBootstrapLoaded) {
            sas.__cmpBootstrapLoaded = !0, sas.events.on("CmpCalled", function() {
                a && clearInterval(a), setTimeout(function() {
                    0 == sas.events.history("CmpAnswered").length && 0 == sas.events.history("CmpFailToAnswer").length && sas.events.fire("CmpFailToAnswer", {
                        failType: "Too long"
                    })
                }, 1500)
            });
            var t = {};
            sas.bootstrapGdpr = function() {
                void 0 !== window.__cmp && "[object Function]" === Object.prototype.toString.call(window.__cmp) ? (sas.events.fire("CmpCalled", {
                    location: "Same Iframe"
                }), window.__cmp("getConsentData", null, n)) : (sas.events.fire("CmpNotFoundInFrame"), function() {
                    for (var e, a, r, i, o, d, c = window; !e;) {
                        try {
                            c.frames.__cmpLocator && (e = c)
                        } catch (t) {}
                        if (c === window.top) break;
                        c = c.parent
                    }
                    e && (sas.events.fire("CmpFrameFound"), sas.events.addEvent(window, "message", s), sas.events.fire("CmpCalled", {
                        location: "Different iframe"
                    }), a = "getConsentData", r = null, i = function(t, e) {
                        n(t, e)
                    }, o = "smartjs" + Math.random(), d = {
                        __cmpCall: {
                            command: a,
                            parameter: r,
                            callId: o
                        }
                    }, t[o] = i, e.postMessage(d, "*"))
                }())
            }, sas.events.fire("CmpSearch", {
                firstTry: !0
            }), sas.bootstrapGdpr();
            var e = 0,
                a = setInterval(function() {
                    "function" == typeof sas.bootstrapGdpr && 0 == sas.events.history("CmpCalled").length && (sas.events.fire("CmpSearch", {
                        retryNumber: e
                    }), sas.bootstrapGdpr()), (e > 50 || sas.events.history("CmpCalled").length > 0) && clearInterval(a), e++
                }, 500)
        }

        function s(e) {
            var a = "string" == typeof e.data && -1 != e.data.indexOf("cmpReturn") ? JSON.parse(e.data) : e.data;
            if (a.__cmpReturn) {
                var s = a.__cmpReturn;
                "function" == typeof t[s.callId] && (t[s.callId](s.returnValue, s.success), delete t[s.callId])
            }
        }

        function n(t, e) {
            e && t && t.consentData ? (sas.events.fire("CmpAnswered", t), sas.utils.setCookie(document, "sas_euconsent", t.consentData, 30)) : sas.events.fire("CmpFailToAnswer", {
                consent: t,
                success: e,
                failType: "Wrong answer"
            })
        }
    }(window, document),
    function(t, e) {
        if (!sas.__smartLoaded) {
            sas.__smartLoaded = !0;
            var a = function(t) {
                var e = this;
                e.instances = [], sas.events.on("ad", function() {
                    e._onAd.apply(e, arguments)
                }, t), sas.events.on("load", function() {
                    e._onLoad.apply(e, arguments)
                }, t), sas.events.on("noad", function() {
                    e._onNoad.apply(e, arguments)
                }, t), sas.events.on("error", function() {
                    e._onError.apply(e, arguments)
                }, t), sas.events.on("beforeRender", function() {
                    e._beforeRender.apply(e, arguments)
                }, t)
            };
            a.prototype.onCall = function(t, e, a) {
                this.callType = t, this.ad = e, this.options = a
            }, a.prototype.reset = function(t, e) {
                if (this.displayData = null, t ? this.renderStatus = null : "rendered" == this.renderStatus && (this.renderStatus = "pending"), sas.events.fire("reset", {
                        formatId: this.ad.formatId,
                        instance: this.ad.instance,
                        tagId: this.ad.tagId,
                        hardReset: t
                    }, this.ad.tagId), e)
                    for (var a = 0; a < this.instances.length; a++) this.instances[a].reset(t)
            }, a.prototype.setHeaderBiddingWinner = function(t) {
                this.headerBidding = t
            }, a.prototype._onLoad = function() {
                var a = e.getElementById(this.ad.tagId);
                a && (this.hasAd = this.hasAd || a.childNodes.length > 1, t.sas_loadHandler && t.sas_loadHandler({
                    id: this.ad.formatId,
                    hasAd: this.hasAd
                }), this.options && this.options.onLoad && this.options.onLoad({
                    formatId: this.ad.formatId,
                    tagId: this.ad.tagId,
                    hasAd: this.hasAd
                }))
            }, a.prototype._beforeRender = function(t) {
                this.options && this.options.beforeRender && this.options.beforeRender(t)
            }, a.prototype._onError = function(t) {
                this.options && this.options.onError && this.options.onError(t)
            }, a.prototype._onNoad = function(t) {
                this.callType == sas.callType.ONECALL && this.ad.isOnecallJSON ? this.displayData.scriptNoad && ((new Image).src = this.displayData.scriptNoad) : this.callType == sas.callType.ONECALL && sas_manager && sas_manager.noad(this.ad.formatId), this.options && this.options.onNoad && this.options.onNoad(t)
            }, a.prototype._onAd = function(t) {
                this.hasAd = !0, this.options && this.options.onAd && this.options.onAd(t)
            }, a.prototype.clean = function() {
                var t = e.getElementById(this.ad.tagId);
                this.options && this.options.onClean && this.options.onClean(this.ad.formatId, t), sas.events.fire("clean", {
                    formatId: this.ad.formatId,
                    instance: this.ad.instance,
                    tagId: this.ad.tagId
                }, this.ad.tagId), t && (t.innerHTML = "")
            }, a.prototype.render = function() {
                var t = this;
                if ("rendered" != this.renderStatus)
                    if (this.displayData) {
                        this.renderStatus = "rendered", this.clean();
                        var a = {
                            formatId: this.ad.formatId,
                            instance: this.ad.instance,
                            tagId: this.ad.tagId
                        };
                        sas.events.fire("beforeRender", a, t.ad.tagId);
                        var s = function() {
                                sas.events.fire("load", a, t.ad.tagId)
                            },
                            n = function() {
                                sas.events.fire("error", a, t.ad.tagId), sas.events.fire("noad", a, t.ad.tagId)
                            };
                        if (!this.displayData.scriptType) return sas.events.fire("load", a, this.ad.tagId), void sas.events.fire("noad", a, this.ad.tagId);
                        var r = e.getElementById(this.ad.tagId);
                        if (r) {
                            switch (this.displayData.scriptType) {
                                case "iframe":
                                    k(r, this, this.options.async, s, n);
                                    break;
                                case "script":
                                    U(r, this.displayData.scriptSrc, this.options.async, s, n);
                                    break;
                                case "passback":
                                    sas.passback({
                                        formatId: this.ad.formatId,
                                        tagId: this.ad.tagId,
                                        chain: this.displayData.chain
                                    });
                                    break;
                                case "content":
                                    R(r, this), s();
                                    break;
                                default:
                                    throw new Error("Unsupported script type " + this.displayData.scriptType)
                            }
                            sas.events.fire("render", a, this.ad.tagId)
                        } else sas.events.fire("error", a, this.ad.tagId)
                    } else this.renderStatus = "pending"
            };
            var s = function() {},
                n = !1,
                r = function() {
                    return Math.round(1e10 * Math.random())
                },
                i = "http://www.smartadserver.com",
                o = r(),
                d = !0,
                c = encodeURIComponent,
                l = decodeURIComponent,
                p = 0,
                f = !1,
                u = 0,
                h = !1,
                g = null,
                v = {},
                m = [],
                y = {},
                I = {},
                _ = {},
                w = null;
            sas._networks = sas._networks || {}, sas._pendingCommands = sas._pendingCommands || {}, sas.callType = {
                STD: "std",
                IFRAME: "iframe",
                ONECALL: "onecall",
                XML: "xml",
                PASSBACK: "passback"
            }, sas.renderMode = {
                DEFAULT: 0,
                READY: 1,
                ON_DEMAND: 2
            };
            var T = !1,
                E = [],
                C = {
                    onLoad: s,
                    onError: s,
                    onClean: s,
                    beforeRender: s
                };
            sas.events.on("call", function(t) {
                var e = v[t.ad.tagId];
                e.displayData = {
                    scriptType: "script",
                    scriptSrc: q(t.callType, t.ad, t.options)
                }, $.addListener(function() {
                    e.render()
                })
            }, sas.callType.STD), sas.events.on("call", function(t) {
                var e = v[t.ad.tagId];
                e.displayData = {
                    scriptType: "iframe",
                    scriptSrc: q(t.callType, t.ad, t.options),
                    width: t.ad.width || 0,
                    height: t.ad.height || 0
                }, $.addListener(function() {
                    e.render()
                })
            }, sas.callType.IFRAME), sas.events.on("call", function(t) {
                $.addListener(function() {
                    t.ad.isOnecallJSON ? S(t) : A(t)
                })
            }, sas.callType.ONECALL);
            var A = function(t) {
                    var a = q(t.callType, t.ad, t.options)();
                    U(e.getElementsByTagName("head")[0], a, t.options.async, function() {
                        for (var e in sas_manager.formats) {
                            if (i = b(e.substring(1))) {
                                var a = sas_manager.formats[e];
                                i.options.async || a.chain ? i.displayData = {
                                    scriptType: a.scriptType(),
                                    scriptSrc: a.scriptSrc(),
                                    chain: a.chain,
                                    width: "iframe" == a.scriptType() ? a.scriptWidth() : 0,
                                    height: "iframe" == a.scriptType() ? a.scriptHeight() : 0
                                } : i.displayData = Z(a.scriptURL()), i.displayData.scriptSrc && (i.displayData.scriptSrc = function(t) {
                                    return function() {
                                        return rt(t)
                                    }
                                }(i.displayData.scriptSrc))
                            }
                        }
                        var s = {};
                        for (var n in t.ad.formats) s[t.ad.formats[n].id] = !0;
                        for (var r in v) {
                            var i;
                            s[(i = v[r]).ad.formatId] && (i.displayData = i.displayData || {}, "pending" == i.renderStatus && i.render())
                        }
                    }, t.options.onError)
                },
                S = function(t) {
                    $.addListener(function() {
                        var e = H(t.ad, t.options);
                        ! function(t, e, a, s, n) {
                            var r = new XMLHttpRequest;
                            r.onreadystatechange = function() {
                                if (4 == this.readyState) {
                                    var t = JSON.parse(this.responseText);
                                    200 == this.status ? a(t) : s(t)
                                }
                            }, r.withCredentials = !0;
                            var i = !0;
                            try {
                                r.open("POST", t, !0)
                            } catch (n) {
                                if (i = !1, sas.utils.getIEVersion() <= 9 && -2147024891 == n.number) {
                                    var o = new XDomainRequest;
                                    o.open("POST", t), o.ontimeout = function() {
                                        s()
                                    }, o.onerror = function() {
                                        s()
                                    }, o.onload = function() {
                                        var t = JSON.parse(this.responseText);
                                        a(t)
                                    }, o.send(JSON.stringify(e))
                                }
                            }
                            i && (r.setRequestHeader("content-type", "application/json"), r.send(JSON.stringify(e)))
                        }(j(t.ad, t.options), e, function(t) {
                            for (var e in t) {
                                var a = b(e);
                                if (a) {
                                    var s = t[e];
                                    a.displayData = {
                                        scriptType: s.ScriptType,
                                        scriptSrc: s.ScriptSrc,
                                        scriptNoad: s.ScriptNoad,
                                        contentType: s.ContentType,
                                        content: s.Content,
                                        chain: s.Chain,
                                        width: s.ScriptWidth,
                                        height: s.ScriptHeight
                                    }, a.displayData.scriptSrc && (a.displayData.scriptSrc = function(t) {
                                        return function() {
                                            return rt(t)
                                        }
                                    }(a.displayData.scriptSrc)), "pending" == a.renderStatus && a.render()
                                }
                            }
                        }, t.options.onError, t.options.domain)
                    })
                },
                D = "invalid site id",
                L = "invalid page id or name",
                N = "invalid format id",
                x = function(t) {
                    throw new Error(t)
                };
            Array.isArray || (Array.isArray = function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            });
            var b = function(t) {
                    var e = v[t = "" + t] || v["sas_" + t];
                    if (e) return e;
                    var s = t.split("_"),
                        n = s.slice(0, s.length - 1).join("_");
                    if (s.length > 1 && !isNaN(s[s.length - 1]) && (e = v[n] || v["sas_" + n])) {
                        var r = parseInt(s[s.length - 1]),
                            i = e.ad.tagId + "_" + r,
                            o = new a(i);
                        return o.onCall(e.callType, sas.utils.extend({}, e.ad, {
                            tagId: i,
                            instance: r
                        }), e.options), e.instances.push(o), v[i] = o, o
                    }
                    return null
                },
                k = function(t, a, s, n, r) {
                    var i = e.createElement("iframe");
                    i.id = "sas_i_" + a.ad.formatId + (a.ad.instance ? "_" + a.ad.instance : ""), i.scrolling = "no", i.frameBorder = 0, i.width = a.displayData.width, i.height = a.displayData.height, i.style.margin = 0, i.style.padding = 0, i.style.width = a.displayData.width + "px", i.style.height = a.displayData.height + "px", i.src = "function" == typeof a.displayData.scriptSrc ? a.displayData.scriptSrc() : a.displayData.scriptSrc, s ? (sas.events.addLoadEvent(i, n), sas.events.addEvent(i, "error", r)) : (i.setAttribute("onload", F(n) + "()"), i.setAttribute("onError", F(r) + "()")), a.options.async ? t.appendChild(i) : e.write(i.outerHTML)
                },
                M = 1,
                O = function(t, a, s) {
                    var n = e.createElement("script");
                    n.id = "sas_script" + M++, n.type = "text/javascript", n.text = a, s ? t.appendChild(n) : e.write(n.outerHTML)
                },
                R = function(t, a) {
                    switch (a.displayData.contentType) {
                        case "application/javascript":
                            O(t, a.displayData.content, a.options.async);
                            break;
                        case "text/html":
                            ! function(t, a) {
                                var s = e.createElement("iframe");
                                s.id = "sas_i" + a.ad.formatId + (a.ad.instance ? "_" + a.ad.instance : ""), s.scrolling = "no", s.frameBorder = 0, s.width = a.displayData.width, s.height = a.displayData.height, s.style.margin = 0, s.style.padding = 0, s.style.width = a.displayData.width + "px", s.style.height = a.displayData.height + "px", t.appendChild(s), s.contentWindow.document.open("text/html", "replace"), s.contentWindow.document.write(a.displayData.content), s.contentWindow.document.close()
                            }(t, a)
                    }
                },
                B = 1,
                F = function(e) {
                    var a = "__sas_gcbk_" + B++;
                    return t[a] = function() {
                        t[a] && (t[a] = void 0, e())
                    }, a
                },
                U = function(t, a, s, n, r) {
                    var i = e.createElement("script");
                    i.id = "sas_script" + M++, i.type = "text/javascript", i.src = "function" == typeof a ? a() : a, i.async = s, s ? (sas.events.addLoadEvent(i, n), sas.events.addEvent(i, "error", r)) : (i.setAttribute("onload", F(n) + "()"), i.setAttribute("onError", F(r) + "()")), s ? t.appendChild(i) : e.write(i.outerHTML)
                },
                H = function(e, a) {
                    a = sas.utils.extend({
                        forceMasterFlag: !1
                    }, a), d = !!a.forceMasterFlag || d, o = a.resetTimestamp ? r() : o, J();
                    var s = W(),
                        n = nt() || (t.location.origin ? t.location.origin + t.location.pathname : ""),
                        i = screen.height,
                        c = screen.width;
                    return function(t, e, a, s, n, r, i) {
                        var o = {
                                timestamp: a,
                                networkId: n.networkId,
                                getAdContent: n.getAdContent,
                                siteId: t.siteId,
                                pageId: t.pageId,
                                pageName: t.pageName,
                                master: e,
                                noAdCallback: "sas.noad",
                                pageUrl: s,
                                screen: {
                                    height: r,
                                    width: i
                                },
                                uid: g || 0,
                                noCookie: n.noCookie,
                                ads: []
                            },
                            d = at();
                        d && (o.gdpr_consent = d);
                        for (var c = 0; c < t.formats.length; c++) {
                            var l = t.formats[c],
                                p = l.tagId ? l.tagId : "sas_" + l.id,
                                f = _[p] || {};
                            isNaN(f.cpm) && (f = {}), o.ads.push({
                                formatId: l.id,
                                tagId: p,
                                bidfloor: l.overriddenBidfloor,
                                target: t.target,
                                currency: l.currency,
                                headerBidding: f
                            })
                        }
                        return o
                    }(e, s, o, n, a, i, c)
                },
                j = function(t, e) {
                    return e.domain + "/" + +e.networkId + "/call"
                },
                q = function(e, a, s) {
                    s = sas.utils.extend({
                        forceMasterFlag: !1
                    }, s), d = !!s.forceMasterFlag || d, o = s.resetTimestamp ? r() : o, e == sas.callType.ONECALL && J();
                    var n = W(),
                        i = nt() || (t.location.origin ? t.location.origin + t.location.pathname : ""),
                        c = screen.height,
                        l = screen.width;
                    return function() {
                        return sas.utils.buildUrl(s.domain, e, a, n, o, s.async, s.networkId, g, i, I, _[a.tagId], s.clickTrackingUrl, s.clickTrackingEncodingLevel, c, l)
                    }
                },
                W = function() {
                    return J() ? "m" : "s"
                },
                J = function() {
                    return !!d && (d = !1, !0)
                },
                P = function(t) {
                    var a, s, n = e.getElementById(t);
                    return n || (e.write((a = t, s = e.createElement("div"), s.id = a, s).outerHTML), n = e.getElementById(t)), n
                },
                G = [];
            sas.events.addLoadEvent(e, function() {
                n = !0, G.push = function(t) {
                    t()
                };
                for (var t = 0; t < G.length; t++) G[t]()
            });
            var V = !1;
            sas.events.addMessageEvent(t, function() {
                if (arguments && !(arguments.length < 1)) {
                    var e = arguments[0];
                    if (e && e.data && "string" == typeof e.data && !(e.data.indexOf("SMRT") < 0)) {
                        var a = e.data.split(" ");
                        if (!(a.length < 2)) {
                            var s = a[2] || "",
                                n = a[1].split(".");
                            if (0 !== n.length) {
                                for (var r = t, i = 0; i < n.length; i++)
                                    if (!(r = r[n[i]])) return;
                                try {
                                    r(s)
                                } catch (t) {}
                            }
                        }
                    }
                }
            });
            var X, Y = function(t, e) {
                    if (!t) return !1;
                    if (!e) return !1;
                    var a, s = sas._networks[e.networkId];
                    return !!(s && s.f && s.f[t.formatId] && (a = s.f[t.formatId], Math.random() < a))
                },
                K = !1,
                $ = new sas.utils.Latch(["loaded"]);
            sas.setup = function(e) {
                if (K) throw new Error("sas.setup can only be called once");
                K = !0, i = (e = e || {}).domain || "http://www.smartadserver.com", f = e.async || f, sas_ajax = f, p = e.networkid || p, u = e.renderMode || u, h = e.inSequence || h, g = e.uid, I = sas.utils.extend(I, e.partnerIds), t.sas_renderMode = u, sas.configure({
                    id: p
                }), f && u != sas.renderMode.DEFAULT || $.notify("loaded"), u == sas.renderMode.ON_DEMAND && (X = setTimeout(function() {
                    sas.render()
                }, parseInt(e.renderModeTimeout) || 5e3))
            }, sas.call = function(t, e, s) {
                "string" != typeof t && (s = sas.utils.extend({}, e, {
                    async: !0
                }), e = t, t = "std", u == sas.renderMode.DEFAULT && $.notify("loaded")), s = sas.utils.extend({}, s), t == sas.callType.ONECALL && e.formats && (s.async = !0), (e = sas.utils.extend({}, e)).siteId = e.siteId || e.siteid, e.pageId = e.pageId || e.pageid, e.pageName = e.pageName || e.pagename, e.formatId = e.formatId || e.formatid, e.siteId || x(D);
                var n, r, o = (n = navigator.userAgent.indexOf("iPad") > 0, r = "" + navigator.userAgent.indexOf("iPhone") > 0, n || r ? n ? "ipad" : "iphone" : navigator.userAgent.indexOf("Android") > 0 ? "android" : "");
                if (o.length > 0 && (e.target && e.target.length > 0 && (e.target += ";"), e.target += "platform=" + o), e.pageId || e.pageName || x(L), e.formatId || e.formats || x(N), (s = sas.utils.extend({}, C, {
                        async: f,
                        domain: i,
                        networkId: p
                    }, s)) && s.networkId) {
                    var d = parseInt(s.networkId);
                    if (d > 0 && !sas._networks[d]) return sas._pendingCommands[d] = sas._pendingCommands[d] || [], void sas._pendingCommands[d].push(function() {
                        sas.call(t, e, s)
                    })
                }
                if (!Y(e, s)) {
                    if (!e || !e.siteId || !e.pageId && !e.pageName || !e.formatId && !e.formats) throw new Error("Missing parameter(s)");
                    if (t == sas.callType.ONECALL) {
                        if (e.isOnecallJSON = !!e.formats, !e.formats) {
                            e.formats = [];
                            for (var c = ("" + e.formatId).replace(/\s/g, "").split(","), l = 0; l < c.length; l++) e.formats.push({
                                id: c[l]
                            })
                        }
                        for (l = 0; l < e.formats.length; l++) {
                            var g = e.formats[l];
                            g.tagId = g.tagId || "sas_" + g.id, (y = v[g.tagId] || new a(g.tagId)).onCall(t, sas.utils.extend({}, e, {
                                tagId: g.tagId,
                                formatId: g.id,
                                originalFormatId: g.id
                            }), s), y.reset(!!s.reset, !0), v[g.tagId] = y
                        }
                    } else {
                        var y;
                        e.tagId = e.tagId || "sas_" + e.formatId, P(e.tagId), (y = v[e.tagId] || new a(e.tagId)).onCall(t, sas.utils.extend({}, e), s), y.reset(!!s.reset), v[e.tagId] = y
                    }
                    s.async && u == sas.renderMode.READY && (V || (V = !0, G.push(function() {
                        sas.render()
                    }))), e.passback || m.push({
                        callType: t,
                        ad: sas.utils.extend({}, e),
                        options: sas.utils.extend({}, s)
                    }), s.async && h ? $.addListener(function() {
                        var a, n;
                        a = {
                            callType: t,
                            ad: e,
                            options: s
                        }, n = function() {
                            if (E.length > 0) {
                                T = !0;
                                var t = E.shift(),
                                    e = t.options.onLoad;
                                t.options.onLoad = function(t) {
                                    n(), e(t)
                                }, sas.events.fire("call", {
                                    callType: t.callType,
                                    ad: t.ad,
                                    options: t.options
                                }, t.callType)
                            } else T = !1
                        }, E.push(a), T || n()
                    }) : sas.events.fire("call", {
                        callType: t,
                        ad: e,
                        options: s
                    }, t)
                }
            }, sas.passback = function(t) {
                var e = t.tagId ? t.tagId : "sas_" + t.formatId;
                if (y[e] = {
                        current: -1,
                        ad: t
                    }, t.noadUrl) {
                    var a = b(e);
                    if (a.options.onNoad) {
                        var s = a.options.onNoad;
                        a.options.onNoad = function(e) {
                            (new Image).src = t.noadUrl, s({
                                formatId: e.formatId,
                                tagId: e.tagId
                            })
                        }
                    } else a.options.onNoad = function() {
                        (new Image).src = t.noadUrl
                    }
                }
                sas.next(e)
            }, sas.next = function(t) {
                var a = b(t),
                    s = y[a.ad.tagId];
                if (a && s) {
                    var n = e.getElementById(a.ad.tagId);
                    n && (n.innerHTML = ""), s.current >= 0 && ((new Image).src = s.ad.chain[s.current].noadUrl), s.current++, s.current < s.ad.chain.length && (s.ad.chain[s.current].countUrl && ((new Image).src = s.ad.chain[s.current].countUrl), s.ad.chain[s.current].script ? O(n, s.ad.chain[s.current].script, a.options.async) : U(n, s.ad.chain[s.current].scriptUrl, a.options.async))
                }
            };
            var z = {
                forceMasterFlag: !1,
                resetTimestamp: !0,
                target: void 0
            };
            sas.refresh = function(t, e) {
                if ($.isComplete()) {
                    e = sas.utils.extend({}, z, t, e);
                    var a = s;
                    if (arguments.length <= 1 && "string" != typeof t && isNaN(t)) a = function(t) {
                        for (var a in v) v[a].ad && v[a].ad.tagId && (_[v[a].ad.tagId] = void 0), v[a].reset();
                        for (a = 0; a < m.length; a++) m[a].options.async && (t && (m[a].ad.target = t), sas.events.fire("call", {
                            callType: m[a].callType,
                            ad: sas.utils.extend({}, m[a].ad, {
                                target: t
                            }),
                            options: sas.utils.extend({}, m[a].options, e)
                        }, m[a].callType))
                    };
                    else {
                        var n = b(t);
                        if (!n || !n.options.async) return;
                        n.ad && n.ad.tagId && (_[n.ad.tagId] = void 0), n.reset(), a = function(t) {
                            void 0 !== t && null !== t && (n.ad.target = t || n.ad.target), sas.events.fire("call", {
                                callType: sas.callType.STD,
                                ad: n.ad,
                                options: n.options
                            }, sas.callType.STD)
                        }
                    }
                    d = !!e.forceMasterFlag || d, o = e.resetTimestamp ? r() : o, a(e.target)
                }
            }, sas.getTag = function(t) {
                var a = b(t);
                return a ? e.getElementById(a.ad.tagId) : null
            }, sas.clean = function(t) {
                if (0 == arguments.length)
                    for (var e in v) {
                        var a;
                        (a = v[e]).clean()
                    } else(a = b(t)) && a.clean()
            }, sas.noad = function(t) {
                var e = b(t);
                e && sas.events.fire("noad", {
                    formatId: e.ad.formatId,
                    instance: e.ad.instance,
                    tagId: e.ad.tagId
                }, e.ad.tagId)
            }, sas.render = function(t) {
                if (0 == arguments.length) {
                    if (clearTimeout(X), !$.isComplete() && (u == sas.renderMode.READY && n || u == sas.renderMode.ON_DEMAND))
                        for (var e in $.notify("loaded"), v) {
                            var a;
                            "pending" != (a = v[e]).renderStatus || !a.options.async && n || a.render()
                        }
                } else(a = b(t)) && (!a.options.async && n || P(a.ad.tagId), a.render())
            }, sas.setPartnerId = function(t, e) {
                I[t] = e
            }, sas.appendHtml = function(t, a) {
                var s = e.getElementById(t);
                if (Range && Range.prototype.createContextualFragment) s.appendChild(e.createRange().createContextualFragment(a));
                else {
                    var n = e.createElement("div");
                    n.innerHTML = a;
                    for (var r = n.childNodes, i = 0; i < r.length; i++) s.appendChild(st(r[i]))
                }
            }, sas.configure = function(t) {
                if (t && t.id && !(parseInt(t.id) <= 0) && !sas._networks[t.id] && (sas._networks[t.id] = t, sas._pendingCommands[t.id]))
                    for (var e; e = sas._pendingCommands[t.id].shift();) e()
            }, sas.setHeaderBiddingWinner = function(t, e) {
                _[t] = e, sas.events.fire("setHeaderBiddingWinner", {
                    tagId: t,
                    headBiddingData: e,
                    newHeaderBiddingDataArray: _
                })
            }, sas.setGdprConsentData = function(t) {
                w = t
            }, sas.utils.buildUrl = function(t, e, a, s, n, r, i, o, d, l, p, f, u, h, g) {
                var v = {};
                if (null != i && (v.nwid = i), v.siteid = a.siteId, v.pgid = a.pageId, v.pgname = a.pageName, v.fmtid = a.formatId, e == sas.callType.IFRAME && (v.out = "iframe"), r && (v.async = 1), e != sas.callType.ONECALL) {
                    var m = s.split("=");
                    v.visit = m.length > 1 ? m[1] : s
                } else v.oc = 1;
                for (var y in v.tmstp = n, a.target && (v.tgt = c(a.target)), e != sas.callType.ONECALL && (v.orgfmtid = a.originalFormatId, v.tag = a.tagId), o && (v.uid = o), h && (v.sh = h), g && (v.sw = g), d && (v.pgDomain = c(d)), p && e != sas.callType.ONECALL && (v.hb_bid = p.bidder, v.hb_cpm = p.cpm, v.hb_ccy = p.currency, v.hb_dealid = p.dealId), f && (v.clcturl = c(f)), u && (v.clctenc = clickTrackingEncoding), l) v[encodeURIComponent("extuid-" + y)] = encodeURIComponent(l[y]);
                var I = at();
                I && (v.gdpr_consent = I), v.noadcbk = "sas.noad";
                var _ = [];
                for (var w in v) null != v[w] && _.push(w + "=" + v[w]);
                return t + "/ac?" + _.join("&")
            };
            var Q = function(t, e, a) {
                var s = t.indexOf("/");
                if (s < 0) throw new Error("Invalid argument : sas_pageid");
                this.siteId = t.substring(0, s);
                var n = t.substring(s + 1);
                0 == n.indexOf("(") && n.indexOf(")") == n.length - 1 && (n = n.slice(1, n.length - 1));
                var r = parseInt(n);
                r + "" == n ? this.pageId = r : this.pageName = n, this.formatId = e, this.target = a
            };
            t.sas_ads = sas, t.sas_ajax = !1, t.sas_manager = null, t.sas_unrenderedFormats = [], t.sas_callAd = sas.callAd, t.sas_callAds = sas.callAds, sas.callAd = sas.refresh, sas.callAds = function() {
                $.isComplete() ? sas.refresh() : sas.render()
            }, sas.cleanAd = sas.clean, sas.cleanAds = sas.clean;
            var Z = function(t) {
                var a = e.createElement("div");
                a.innerHTML = "_" + t;
                var s = a.childNodes[1];
                return {
                    scriptType: s.tagName.toLowerCase(),
                    scriptSrc: s.src,
                    width: s.width || 0,
                    height: s.height || 0
                }
            };
            t.sas_render = function(t, e, a, s, n) {
                sas.render(t)
            }, t.SmartAdServerAjaxOneCall = function(t, e) {
                sas.render(e)
            }, t.SmartAdServer_iframe = function(t, e, a, s, n) {
                var r = new Q(t, e, a);
                r.width = s, r.height = n, sas.call("iframe", r)
            }, t.SmartAdServer = function(t, e, a) {
                var s = new Q(t, e, a);
                sas.call(sas.callType.STD, s)
            }, t.SmartAdServerAjax = SmartAdServer, t.sas_gcf = function(t) {
                return e.getElementById("sas_" + t)
            }, t.sas_appendToContainer = function(t, a) {
                var s = e.getElementById("sas_" + t);
                if (s) {
                    if ("string" == typeof a) {
                        var n = e.createElement("div");
                        n.innerHTML = a, a = n
                    }
                    s.appendChild(a)
                }
            }, t.sascc = function(t, e) {
                (new Image).src = i + "/h/mcp?imgid=" + t + "&pgid=" + e + "&uid=[uid]&tmstp=" + o + "&tgt=[targeting]"
            }, t.sasmobile = function(t, e, a) {
                var s = new Q(t, e, a);
                sas.call(sas.callType.STD, s)
            };
            var tt = {};
            t.sas_addCleanListener = function(t, e) {
                tt[t] = e
            }, sas.events.on("clean", function(t) {
                tt[t.tagId] && tt[t.tagId](), tt[t.formatId] && tt[t.formatId]()
            }), t.sas_cleanAds = sas.clean, t.sas_cleanAd = sas.clean, sas.events.fire("Bootstrap", {
                time: "Start"
            }), sas.cmd = sas.cmd || [], sas.cmd.push = function(t) {
                t()
            };
            for (var et = 0; et < sas.cmd.length; et++) sas.cmd[et]();
            sas.events.fire("Bootstrap", {
                time: "End"
            })
        }

        function at() {
            if (w) return w;
            var t = sas.utils.parseCookies(e.cookie);
            return t ? t.sas_euconsent : null
        }

        function st(t) {
            var a;
            if ("script" == t.tagName.toLowerCase()) a = e.createElement("script"), t.type && (a.type = t.type), t.src && (a.src = t.src), t.text && (a.text = t.text);
            else {
                a = t.cloneNode(!1);
                for (var s = t.childNodes, n = 0; n < s.length; n++) a.appendChild(st(s[n]))
            }
            return a
        }

        function nt() {
            var e = t;
            try {
                for (; e.parent.document;) {
                    if (e.parent.document === e.document) return e.location.origin ? e.location.origin + e.location.pathname : "";
                    e = e.parent
                }
            } catch (t) {}
            try {
                try {
                    if (t.top.location.href) return t.top.location.origin ? t.top.location.origin + t.top.location.pathname : ""
                } catch (t) {}
                var a = t.location.ancestorOrigins;
                return 1 == a.length ? e.document.referrer : a[a.length - 1]
            } catch (t) {
                return e.document.referrer
            }
        }

        function rt(t) {
            var a, s = e.createElement("a"),
                n = /(?:^\?|&)([^=&]+)=?([^&]*)(?=&|$)/g;
            s.href = t;
            for (var r = s.search, i = []; null !== (a = n.exec(r));) {
                "extuid-" === (p = {
                    n: l(a[1]),
                    v: l(a[2])
                }).n.substr(0, 7) && I[p.n.substr(7)] || i.push(p)
            }
            for (var o in I) i.push({
                n: "extuid-" + o,
                v: I[o]
            });
            r = "";
            for (var d = 0; d < i.length; d++) {
                var p = i[d];
                r += (0 === d ? "?" : "&") + c(p.n), "" !== p.v && (r += "=" + c(p.v))
            }
            return s.search = r, s.href
        }
    }(window, document);
if (window.sas && sas.configure) {
    sas.configure({
        id: 1357
    });
}