! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var i = t();
        for (var n in i)("object" == typeof exports ? exports : e)[n] = i[n]
    }
}(this, function() {
    return function(e) {
        function t(n) {
            if (i[n]) return i[n].exports;
            var r = i[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        var i = {};
        return t.m = e, t.c = i, t.i = function(e) {
            return e
        }, t.d = function(e, i, n) {
            t.o(e, i) || Object.defineProperty(e, i, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }, t.n = function(e) {
            var i = e && e.e ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(i, "a", i), i
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 30)
    }([function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function(e) {
                e[e.Unspecified = 0] = "Unspecified", e[e.String = 1] = "String", e[e.Int64 = 2] = "Int64", e[e.Double = 3] = "Double", e[e.Boolean = 4] = "Boolean"
            }(t.AWTPropertyType || (t.AWTPropertyType = {})),
            function(e) {
                e[e.NotSet = 0] = "NotSet", e[e.DistinguishedName = 1] = "DistinguishedName", e[e.GenericData = 2] = "GenericData", e[e.IPV4Address = 3] = "IPV4Address", e[e.IPv6Address = 4] = "IPv6Address", e[e.MailSubject = 5] = "MailSubject", e[e.PhoneNumber = 6] = "PhoneNumber", e[e.QueryString = 7] = "QueryString", e[e.SipAddress = 8] = "SipAddress", e[e.SmtpAddress = 9] = "SmtpAddress", e[e.Identity = 10] = "Identity", e[e.Uri = 11] = "Uri", e[e.Fqdn = 12] = "Fqdn", e[e.IPV4AddressLegacy = 13] = "IPV4AddressLegacy"
            }(t.AWTPiiKind || (t.AWTPiiKind = {})),
            function(e) {
                e[e.NotSet = 0] = "NotSet", e[e.GenericContent = 1] = "GenericContent"
            }(t.AWTCustomerContentKind || (t.AWTCustomerContentKind = {})),
            function(e) {
                e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Immediate_sync = 5] = "Immediate_sync"
            }(t.AWTEventPriority || (t.AWTEventPriority = {})),
            function(e) {
                e[e.NonRetryableStatus = 1] = "NonRetryableStatus", e[e.QueueFull = 3] = "QueueFull"
            }(t.AWTEventsDroppedReason || (t.AWTEventsDroppedReason = {})),
            function(e) {
                e[e.InvalidEvent = 1] = "InvalidEvent", e[e.SizeLimitExceeded = 2] = "SizeLimitExceeded", e[e.KillSwitch = 3] = "KillSwitch"
            }(t.AWTEventsRejectedReason || (t.AWTEventsRejectedReason = {}))
    }, function(e, t, i) {
        "use strict";

        function n(e) {
            var t = new W.Int64("0");
            return t.low = 4294967295 & e, t.high = Math.floor(e / 4294967296), t
        }

        function r() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(I, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }

        function o(e) {
            return "string" == typeof e
        }

        function s(e) {
            return "number" == typeof e
        }

        function a(e) {
            return "boolean" == typeof e
        }

        function u(e) {
            return (e + O) * L
        }

        function h(e) {
            var t = e.indexOf("-");
            return t > -1 ? e.substring(0, t) : ""
        }

        function c() {
            return null === R && (R = "undefined" != typeof navigator && Boolean(navigator.sendBeacon)), R
        }

        function f() {
            return null === b && (b = "undefined" != typeof Uint8Array && !w() && !g()), b
        }

        function p(e) {
            return !(!s(e) || !(e >= 1 && e <= 3 || 5 === e))
        }

        function l(e, i) {
            if (!t.PropertyNameRegex.test(e) || void 0 === i || null === i || "" === i) return null;
            if (o(i) || s(i) || a(i)) i = {
                value: i,
                type: _.AWTPropertyType.Unspecified
            };
            else if (void 0 === i.value || null === i.value || "" === i.value || !o(i.value) && !s(i.value) && !a(i.value)) return null;
            return i.type = A(i.value, i.type), i.type ? i.pii > 0 && i.cc > 0 ? null : i.pii ? S(i.pii) ? i : null : i.cc ? E(i.cc) ? i : null : i : null
        }

        function d(e) {
            return e.getUTCFullYear() + "-" + y(e.getUTCMonth() + 1) + "-" + y(e.getUTCDate()) + "T" + y(e.getUTCHours()) + ":" + y(e.getUTCMinutes()) + ":" + y(e.getUTCSeconds()) + "." + T(e.getUTCMilliseconds()) + "Z"
        }

        function v() {
            if (null === C) {
                var e = new XMLHttpRequest;
                C = void 0 === e.withCredentials && "undefined" != typeof XDomainRequest
            }
            return C
        }

        function g() {
            return !("undefined" == typeof navigator || !navigator.product) && "ReactNative" === navigator.product
        }

        function y(e) {
            return e < 10 ? "0" + e : e.toString()
        }

        function T(e) {
            return e < 10 ? "00" + e : e < 100 ? "0" + e : e.toString()
        }

        function A(e, t) {
            return P(t) && t !== _.AWTPropertyType.Unspecified ? t === _.AWTPropertyType.String && "string" == typeof e ? t : t !== _.AWTPropertyType.Double && t !== _.AWTPropertyType.Int64 || "number" != typeof e ? t === _.AWTPropertyType.Boolean && "boolean" == typeof e ? t : void 0 : t === _.AWTPropertyType.Int64 && e % 1 != 0 ? null : t : m(e)
        }

        function m(e) {
            switch (typeof e) {
                case "string":
                    return _.AWTPropertyType.String;
                case "boolean":
                    return _.AWTPropertyType.Boolean;
                case "number":
                    return _.AWTPropertyType.Double
            }
            return _.AWTPropertyType.Unspecified
        }

        function S(e) {
            return !!(s(e) && e >= 0 && e <= 13)
        }

        function E(e) {
            return !!(s(e) && e >= 0 && e <= 1)
        }

        function P(e) {
            return !!(s(e) && e >= 0 && e <= 4)
        }

        function w() {
            if ("undefined" != typeof navigator && navigator.userAgent) {
                var e = navigator.userAgent.toLowerCase();
                if ((e.indexOf("safari") >= 0 || e.indexOf("firefox") >= 0) && e.indexOf("chrome") < 0) return !0
            }
            return !1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var W = i(4),
            _ = i(0),
            I = /[xy]/g,
            O = 621355968e5,
            L = 1e4;
        t.EventNameAndTypeRegex = /^[a-zA-Z]([a-zA-Z0-9]|_){2,98}[a-zA-Z0-9]$/, t.EventNameDotRegex = /\./g, t.PropertyNameRegex = /^[a-zA-Z](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/, t.StatsApiKey = "a387cfcf60114a43a7699f9fbb49289e-9bceb9fe-1c06-460f-96c5-6a0b247358bc-7238";
        var R = null,
            b = null,
            C = null;
        t.numberToBondInt64 = n, t.newGuid = r, t.isString = o, t.isNumber = s, t.isBoolean = a, t.msToTicks = u, t.getTenantId = h, t.isBeaconsSupported = c, t.isUint8ArrayAvailable = f, t.isPriority = p, t.sanitizeProperty = l, t.getISOString = d, t.useXDomainRequest = v, t.isReactNative = g
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.addNotificationListener = function(e) {
                this.listeners.push(e)
            }, e.removeNotificationListener = function(e) {
                for (var t = this.listeners.indexOf(e); t > -1;) this.listeners.splice(t, 1), t = this.listeners.indexOf(e)
            }, e.eventsSent = function(e) {
                for (var t = this, i = this, n = 0; n < this.listeners.length; ++n) ! function(n) {
                    i.listeners[n].eventsSent && setTimeout(function() {
                        return t.listeners[n].eventsSent(e)
                    }, 0)
                }(n)
            }, e.eventsDropped = function(e, t) {
                for (var i = this, n = this, r = 0; r < this.listeners.length; ++r) ! function(r) {
                    n.listeners[r].eventsDropped && setTimeout(function() {
                        return i.listeners[r].eventsDropped(e, t)
                    }, 0)
                }(r)
            }, e.eventsRetrying = function(e) {
                for (var t = this, i = this, n = 0; n < this.listeners.length; ++n) ! function(n) {
                    i.listeners[n].eventsRetrying && setTimeout(function() {
                        return t.listeners[n].eventsRetrying(e)
                    }, 0)
                }(n)
            }, e.eventsRejected = function(e, t) {
                for (var i = this, n = this, r = 0; r < this.listeners.length; ++r) ! function(r) {
                    n.listeners[r].eventsRejected && setTimeout(function() {
                        return i.listeners[r].eventsRejected(e, t)
                    }, 0)
                }(r)
            }, e.listeners = [], e
        }();
        t.default = n
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(14),
            r = i(0),
            o = i(28),
            s = i(10),
            a = i(5),
            u = i(11),
            h = i(1),
            c = function() {
                function e() {}
                return e.setEventsHandler = function(e) {
                    this.t = e
                }, e.getEventsHandler = function() {
                    return this.t
                }, e.scheduleTimer = function() {
                    var e = this,
                        t = this.r[this.a][2];
                    this.u < 0 && t >= 0 && !this._ && (this.t.hasEvents() ? (0 === t && this.f > 0 && (t = 1), this.u = setTimeout(function() {
                        return e.h()
                    }, t * (1 << this.f) * 1e3)) : this.v = 0)
                }, e.initialize = function(e) {
                    var t = this;
                    this.y = !0, this.T = e, this.t = new o.default(e.collectorUri, e.cacheMemorySizeLimitInNumberOfEvents, e.httpXHROverride), this.g(), s.default.initialize(function(e, i) {
                        if (t.T.canSendStatEvent("awt_stats")) {
                            var n = new a.default("awt_stats");
                            n.setEventPriority(r.AWTEventPriority.High), n.setProperty("TenantId", i);
                            for (var o in e) e.hasOwnProperty(o) && n.setProperty(o, e[o].toString());
                            u.default.getLogger(h.StatsApiKey).logEvent(n)
                        }
                    })
                }, e.setTransmitProfile = function(e) {
                    this.a !== e && void 0 !== this.r[e] && (this.clearTimeout(), this.a = e, this.scheduleTimer())
                }, e.loadTransmitProfiles = function(e) {
                    this.S();
                    for (var t in e)
                        if (e.hasOwnProperty(t)) {
                            if (3 !== e[t].length) continue;
                            for (var i = 2; i >= 0; --i)
                                if (e[t][i] < 0) {
                                    for (var n = i; n >= 0; --n) e[t][n] = -1;
                                    break
                                }
                            for (var i = 2; i > 0; --i)
                                if (e[t][i] > 0 && e[t][i - 1] > 0) {
                                    var r = e[t][i - 1] / e[t][i];
                                    e[t][i - 1] = Math.ceil(r) * e[t][i]
                                }
                            this.r[t] = e[t]
                        }
                }, e.sendEvent = function(e) {
                    this.y && (this.f > 0 && e.priority === r.AWTEventPriority.Immediate_sync && (e.priority = r.AWTEventPriority.High), this.t.addEvent(e), this.scheduleTimer())
                }, e.flush = function(e) {
                    var t = (new Date).getTime();
                    !this._ && this.A + 3e4 < t && (this.A = t, this.u > -1 && (clearTimeout(this.u), this.u = -1), this.t.uploadNow(e))
                }, e.pauseTransmission = function() {
                    this._ || (this.clearTimeout(), this.t.pauseTransmission(), this._ = !0)
                }, e.resumeTransmision = function() {
                    this._ && (this._ = !1, this.t.resumeTransmission(), this.scheduleTimer())
                }, e.flushAndTeardown = function() {
                    s.default.teardown(), this.y = !1, this.clearTimeout(), this.t.teardown()
                }, e.backOffTransmission = function() {
                    this.f < 4 && (this.f++, this.clearTimeout(), this.scheduleTimer())
                }, e.clearBackOff = function() {
                    this.f > 0 && (this.f = 0, this.clearTimeout(), this.scheduleTimer())
                }, e.S = function() {
                    this.clearTimeout(), this.g(), this.a = n.AWT_REAL_TIME, this.scheduleTimer()
                }, e.clearTimeout = function() {
                    this.u > 0 && (clearTimeout(this.u), this.u = -1, this.v = 0)
                }, e.h = function() {
                    var e = r.AWTEventPriority.High;
                    this.v++, this.v * this.r[this.a][2] === this.r[this.a][0] ? (e = r.AWTEventPriority.Low, this.v = 0) : this.v * this.r[this.a][2] === this.r[this.a][1] && (e = r.AWTEventPriority.Normal), this.t.sendEventsForPriorityAndAbove(e), this.u = -1, this.scheduleTimer()
                }, e.g = function() {
                    this.r = {}, this.r[n.AWT_REAL_TIME] = [4, 2, 1], this.r[n.AWT_NEAR_REAL_TIME] = [12, 6, 3], this.r[n.AWT_BEST_EFFORT] = [36, 18, 9]
                }, e.y = !1, e.a = n.AWT_REAL_TIME, e.u = -1, e.f = 0, e._ = !1, e.v = 0, e.A = 0, e
            }();
        t.default = c
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e) {
                this.low = 0, this.high = 0, this.low = parseInt(e, 10), this.low < 0 && (this.high = -1)
            }
            return e.prototype.I = function(t) {
                var i = new e(t);
                return this.low === i.low && this.high === i.high
            }, e
        }();
        t.Int64 = n;
        var r = function() {
            function e(e) {
                this.low = 0, this.high = 0, this.low = parseInt(e, 10)
            }
            return e.prototype.I = function(t) {
                var i = new e(t);
                return this.low === i.low && this.high === i.high
            }, e
        }();
        t.UInt64 = r;
        var o = function() {
            function e() {}
            return e.P = function(e) {
                return this.W(e)
            }, e.W = function(e) {
                return 255 & e
            }, e.B = function(e) {
                return 2147483647 & e | 2147483648 & e
            }, e.w = function(e) {
                return 4294967295 & e
            }, e
        }();
        t.Number = o
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(1),
            r = i(0),
            o = function() {
                function e(e) {
                    this.C = {
                        name: "",
                        properties: {}
                    }, e && this.setName(e)
                }
                return e.prototype.setName = function(e) {
                    this.C.name = e
                }, e.prototype.getName = function() {
                    return this.C.name
                }, e.prototype.setType = function(e) {
                    this.C.type = e
                }, e.prototype.getType = function() {
                    return this.C.type
                }, e.prototype.setTimestamp = function(e) {
                    this.C.timestamp = e
                }, e.prototype.getTimestamp = function() {
                    return this.C.timestamp
                }, e.prototype.setEventPriority = function(e) {
                    this.C.priority = e
                }, e.prototype.getEventPriority = function() {
                    return this.C.priority
                }, e.prototype.setProperty = function(e, t, i) {
                    void 0 === i && (i = r.AWTPropertyType.Unspecified);
                    var o = {
                        value: t,
                        type: i,
                        pii: r.AWTPiiKind.NotSet,
                        cc: r.AWTCustomerContentKind.NotSet
                    };
                    if (null === (o = n.sanitizeProperty(e, o))) return void delete this.C.properties[e];
                    this.C.properties[e] = o
                }, e.prototype.setPropertyWithPii = function(e, t, i, o) {
                    void 0 === o && (o = r.AWTPropertyType.Unspecified);
                    var s = {
                        value: t,
                        type: o,
                        pii: i,
                        cc: r.AWTCustomerContentKind.NotSet
                    };
                    if (null === (s = n.sanitizeProperty(e, s))) return void delete this.C.properties[e];
                    this.C.properties[e] = s
                }, e.prototype.setPropertyWithCustomerContent = function(e, t, i, o) {
                    void 0 === o && (o = r.AWTPropertyType.Unspecified);
                    var s = {
                        value: t,
                        type: o,
                        pii: r.AWTPiiKind.NotSet,
                        cc: i
                    };
                    if (null === (s = n.sanitizeProperty(e, s))) return void delete this.C.properties[e];
                    this.C.properties[e] = s
                }, e.prototype.getPropertyMap = function() {
                    return this.C.properties
                }, e.prototype.getEvent = function() {
                    return this.C
                }, e
            }();
        t.default = o
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function(e) {
                e[e.Unknown = 0] = "Unknown", e[e.MSACID = 1] = "MSACID", e[e.MSAPUID = 2] = "MSAPUID", e[e.ANID = 3] = "ANID", e[e.OrgIdCID = 4] = "OrgIdCID", e[e.OrgIdPUID = 5] = "OrgIdPUID", e[e.UserObjectId = 6] = "UserObjectId", e[e.Skype = 7] = "Skype", e[e.Yammer = 8] = "Yammer", e[e.EmailAddress = 9] = "EmailAddress", e[e.PhoneNumber = 10] = "PhoneNumber", e[e.SipAddress = 11] = "SipAddress", e[e.MUID = 12] = "MUID"
            }(t.AWTUserIdType || (t.AWTUserIdType = {})),
            function(e) {
                e[e.Started = 0] = "Started", e[e.Ended = 1] = "Ended"
            }(t.AWTSessionState || (t.AWTSessionState = {}))
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(1),
            r = "MicrosoftApplicationsTelemetryDeviceId",
            o = "MicrosoftApplicationsTelemetryFirstLaunchTime",
            s = {
                MSIE: "MSIE",
                CHROME: "Chrome",
                FIREFOX: "Firefox",
                SAFARI: "Safari",
                EDGE: "Edge",
                ELECTRON: "Electron",
                SKYPE_SHELL: "SkypeShell",
                PHANTOMJS: "PhantomJS",
                OPERA: "Opera"
            },
            a = {
                WINDOWS: "Windows",
                MACOSX: "Mac OS X",
                WINDOWS_PHONE: "Windows Phone",
                WINDOWS_RT: "Windows RT",
                IOS: "iOS",
                ANDROID: "Android",
                LINUX: "Linux",
                UNKNOWN: "Unknown"
            },
            u = {
                WIN: /(windows|win32)/i,
                WINRT: / arm;/i,
                WINPHONE: /windows\sphone\s\d+\.\d+/i,
                OSX: /(macintosh|mac os x)/i,
                IOS: /(iPad|iPhone|iPod)(?=.*like Mac OS X)/i,
                LINUX: /(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,
                ANDROID: /android/i
            },
            h = {
                5.1: "XP",
                "6.0": "Vista",
                6.1: "7",
                6.2: "8",
                6.3: "8.1",
                "10.0": "10"
            },
            c = function() {
                function e() {}
                return e.addPropertyStorageOverride = function(e) {
                    return !!e && (this.b = e, !0)
                }, e.autoCollect = function(e, t, i) {
                    if (this.O = e, this.R = t, this.D(), i || "undefined" == typeof navigator || (i = navigator.userAgent || ""), this.N(i), this.R && !this.b) return this.M(r), void this.M(o);
                    (this.b || this.U && !this.R) && this.k()
                }, e.checkAndSaveDeviceId = function(e) {
                    e && (this.x(r) !== e && (this.L(r, e), this.L(o, n.getISOString(new Date))), this.F(this.x(o)))
                }, e.k = function() {
                    var e = this.x(r);
                    e ? this.F(this.x(o)) : (e = n.newGuid(), this.checkAndSaveDeviceId(e)), this.O.setDeviceId(e)
                }, e.D = function() {
                    "undefined" != typeof document && document.documentElement && this.O.setAppLanguage(document.documentElement.lang), "undefined" != typeof navigator && this.O.setUserLanguage(navigator.userLanguage || navigator.language);
                    var e = (new Date).getTimezoneOffset(),
                        t = e % 60,
                        i = (e - t) / 60,
                        n = "+";
                    i > 0 && (n = "-"), i = Math.abs(i), t = Math.abs(t), this.O.setUserTimeZone(n + (i < 10 ? "0" + i : i.toString()) + ":" + (t < 10 ? "0" + t : t.toString()))
                }, e.N = function(e) {
                    if (e) {
                        var t = this.q(e);
                        this.O.setDeviceBrowserName(t), this.O.setDeviceBrowserVersion(this.H(e, t));
                        var i = this.Q(e);
                        this.O.setDeviceOsName(i), this.O.setDeviceOsVersion(this.z(e, i))
                    }
                }, e.q = function(e) {
                    return this.j("OPR/", e) ? s.OPERA : this.j(s.PHANTOMJS, e) ? s.PHANTOMJS : this.j(s.EDGE, e) ? s.EDGE : this.j(s.ELECTRON, e) ? s.ELECTRON : this.j(s.CHROME, e) ? s.CHROME : this.j("Trident", e) ? s.MSIE : this.j(s.FIREFOX, e) ? s.FIREFOX : this.j(s.SAFARI, e) ? s.SAFARI : this.j(s.SKYPE_SHELL, e) ? s.SKYPE_SHELL : "Unknown"
                }, e.F = function(e) {
                    if (!isNaN(e)) {
                        var t = new Date;
                        t.setTime(parseInt(e, 10)), e = n.getISOString(t)
                    }
                    this.firstLaunchTime = e
                }, e.j = function(e, t) {
                    return t.indexOf(e) > -1
                }, e.H = function(e, t) {
                    return t === s.MSIE ? this.K(e) : this.G(t, e)
                }, e.K = function(e) {
                    var t = e.match(new RegExp(s.MSIE + " ([\\d,.]+)"));
                    if (t) return t[1];
                    var i = e.match(new RegExp("rv:([\\d,.]+)"));
                    return i ? i[1] : void 0
                }, e.G = function(e, t) {
                    e === s.SAFARI && (e = "Version");
                    var i = t.match(new RegExp(e + "/([\\d,.]+)"));
                    return i ? i[1] : "Unknown"
                }, e.Q = function(e) {
                    return e.match(u.WINPHONE) ? a.WINDOWS_PHONE : e.match(u.WINRT) ? a.WINDOWS_RT : e.match(u.IOS) ? a.IOS : e.match(u.ANDROID) ? a.ANDROID : e.match(u.LINUX) ? a.LINUX : e.match(u.OSX) ? a.MACOSX : e.match(u.WIN) ? a.WINDOWS : "Unknown"
                }, e.z = function(e, t) {
                    return t === a.WINDOWS ? this.V(e, "Windows NT") : t === a.ANDROID ? this.V(e, t) : t === a.MACOSX ? this.X(e) : "Unknown"
                }, e.V = function(e, t) {
                    var i = e.match(new RegExp(t + " ([\\d,.]+)"));
                    return i ? h[i[1]] ? h[i[1]] : i[1] : "Unknown"
                }, e.X = function(e) {
                    var t = e.match(new RegExp(a.MACOSX + " ([\\d,_,.]+)"));
                    if (t) {
                        var i = t[1].replace(/_/g, ".");
                        if (i) {
                            var n = this.Z(i);
                            return n ? i.split(n)[0] : i
                        }
                    }
                    return "Unknown"
                }, e.Z = function(e) {
                    return e.indexOf(".") > -1 ? "." : e.indexOf("_") > -1 ? "_" : null
                }, e.L = function(e, t) {
                    if (this.b) this.b.setProperty(e, t);
                    else if (this.U) {
                        var i = new Date;
                        i.setTime(i.getTime() + 31536e6);
                        var n = "expires=" + i.toUTCString();
                        document.cookie = e + "=" + t + "; " + n
                    }
                }, e.x = function(e) {
                    if (this.b) return this.b.getProperty(e) || "";
                    if (this.U) {
                        e += "=";
                        for (var t = document.cookie.split(";"), i = 0; i < t.length; i++) {
                            for (var n = t[i], r = 0;
                                " " === n.charAt(r);) r++;
                            if (n = n.substring(r), 0 === n.indexOf(e)) return n.substring(e.length, n.length)
                        }
                    }
                    return ""
                }, e.M = function(e) {
                    this.U && (document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;")
                }, e.R = !1, e.U = "undefined" != typeof document && void 0 !== document.cookie, e
            }();
        t.default = c
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(7),
            r = i(0),
            o = i(6),
            s = function() {
                function e(e, t) {
                    this.J = e, this.Y = t
                }
                return e.prototype.setAppId = function(e) {
                    this.$("AppInfo.Id", e)
                }, e.prototype.setAppVersion = function(e) {
                    this.$("AppInfo.Version", e)
                }, e.prototype.setAppLanguage = function(e) {
                    this.$("AppInfo.Language", e)
                }, e.prototype.setDeviceId = function(e) {
                    this.J && (n.default.checkAndSaveDeviceId(e), this.$("DeviceInfo.Id", e))
                }, e.prototype.setDeviceOsName = function(e) {
                    this.J && this.$("DeviceInfo.OsName", e)
                }, e.prototype.setDeviceOsVersion = function(e) {
                    this.J && this.$("DeviceInfo.OsVersion", e)
                }, e.prototype.setDeviceBrowserName = function(e) {
                    this.J && this.$("DeviceInfo.BrowserName", e)
                }, e.prototype.setDeviceBrowserVersion = function(e) {
                    this.J && this.$("DeviceInfo.BrowserVersion", e)
                }, e.prototype.setDeviceMake = function(e) {
                    this.J && this.$("DeviceInfo.Make", e)
                }, e.prototype.setDeviceModel = function(e) {
                    this.J && this.$("DeviceInfo.Model", e)
                }, e.prototype.setUserId = function(e, t, i) {
                    if (!isNaN(i) && null !== i && i >= 0 && i <= 12) this.$("UserInfo.IdType", i.toString());
                    else {
                        var n = void 0;
                        switch (t) {
                            case r.AWTPiiKind.SipAddress:
                                n = o.AWTUserIdType.SipAddress;
                                break;
                            case r.AWTPiiKind.PhoneNumber:
                                n = o.AWTUserIdType.PhoneNumber;
                                break;
                            case r.AWTPiiKind.SmtpAddress:
                                n = o.AWTUserIdType.EmailAddress;
                                break;
                            default:
                                n = o.AWTUserIdType.Unknown
                        }
                        this.$("UserInfo.IdType", n.toString())
                    }
                    if (isNaN(t) || null === t || t === r.AWTPiiKind.NotSet || t > 13) switch (i) {
                        case o.AWTUserIdType.Skype:
                            t = r.AWTPiiKind.Identity;
                            break;
                        case o.AWTUserIdType.EmailAddress:
                            t = r.AWTPiiKind.SmtpAddress;
                            break;
                        case o.AWTUserIdType.PhoneNumber:
                            t = r.AWTPiiKind.PhoneNumber;
                            break;
                        case o.AWTUserIdType.SipAddress:
                            t = r.AWTPiiKind.SipAddress;
                            break;
                        default:
                            t = r.AWTPiiKind.NotSet
                    }
                    this.ee("UserInfo.Id", e, t)
                }, e.prototype.setUserAdvertisingId = function(e) {
                    this.$("UserInfo.AdvertisingId", e)
                }, e.prototype.setUserTimeZone = function(e) {
                    this.$("UserInfo.TimeZone", e)
                }, e.prototype.setUserLanguage = function(e) {
                    this.$("UserInfo.Language", e)
                }, e.prototype.$ = function(e, t) {
                    "string" == typeof t && this.Y.setProperty(e, t)
                }, e.prototype.ee = function(e, t, i) {
                    "string" == typeof t && this.Y.setPropertyWithPii(e, t, i)
                }, e
            }();
        t.default = s
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(21),
            r = i(0),
            o = i(2),
            s = i(1),
            a = function() {
                function e() {}
                return e.getPayloadBlob = function(e, t) {
                    var i, a = new n.IO.MemoryStream,
                        u = new n.CompactBinaryProtocolWriter(a);
                    u.te(n.ne.ie, 3, null), u.re(t, n.ne.oe, n.ne.se);
                    for (var h in e)
                        if (e.hasOwnProperty(h)) {
                            u.ae(h);
                            var c = e[h];
                            u.ue(1, n.ne.de), u.te(n.ne.oe, 2, null), u.ae("act_default_source"), u.te(n.ne.oe, 5, null), u.ae(s.newGuid()), u.te(n.ne._e, 6, null), u.le(s.numberToBondInt64(Date.now())), u.te(n.ne.se, 8, null);
                            var f = a.ce().length + 1;
                            u.ue(e[h].length, n.ne.de);
                            for (var p = a.ce().length - f, l = 0; l < c.length; ++l) {
                                var d = a.ce().length;
                                if (this.writeEvent(c[l], u), a.ce().length - d > 2936012) o.default.eventsRejected([c[l]], r.AWTEventsRejectedReason.SizeLimitExceeded), c.splice(l--, 1), a.ce().splice(d), this.pe(c.length, a, p, f);
                                else if (a.ce().length > 2936012) {
                                    a.ce().splice(d), i || (i = {}), e[h] = c.splice(0, l), i[h] = c, this.pe(e[h].length, a, p, f);
                                    break
                                }
                            }
                            u.fe(!1)
                        }
                    return u.fe(!1), {
                        payloadBlob: a.ce(),
                        remainingRequest: i
                    }
                }, e.pe = function(e, t, i, r) {
                    for (var o = n.ve.he(n.Number.w(e)), s = 0; s < i; ++s) {
                        if (!(s < o.length)) {
                            t.ce().slice(r + s, i - s);
                            break
                        }
                        t.ce()[r + s] = o[s]
                    }
                }, e.writeEvent = function(e, t) {
                    t.te(n.ne.oe, 1, null), t.ae(e.id), t.te(n.ne._e, 3, null), t.le(s.numberToBondInt64(e.timestamp)), t.te(n.ne.oe, 5, null), t.ae(e.type), t.te(n.ne.oe, 6, null), t.ae(e.name);
                    var i = {},
                        o = 0,
                        a = {},
                        u = 0,
                        h = {},
                        c = 0,
                        f = {},
                        p = 0,
                        l = {},
                        d = 0,
                        v = {},
                        g = 0;
                    for (var y in e.properties)
                        if (e.properties.hasOwnProperty(y)) {
                            var T = e.properties[y];
                            if (T.cc > 0) v[y] = T, g++;
                            else if (T.pii > 0) l[y] = T, d++;
                            else switch (T.type) {
                                case r.AWTPropertyType.String:
                                    i[y] = T.value, o++;
                                    break;
                                case r.AWTPropertyType.Int64:
                                    a[y] = T.value, u++;
                                    break;
                                case r.AWTPropertyType.Double:
                                    h[y] = T.value, c++;
                                    break;
                                case r.AWTPropertyType.Boolean:
                                    f[y] = T.value, p++
                            }
                        }
                    if (o) {
                        t.te(n.ne.ie, 13, null), t.re(o, n.ne.oe, n.ne.oe);
                        for (var y in i)
                            if (i.hasOwnProperty(y)) {
                                var A = i[y];
                                t.ae(y), t.ae(A.toString())
                            }
                    }
                    if (d) {
                        t.te(n.ne.ie, 30, null), t.re(d, n.ne.oe, n.ne.de);
                        for (var y in l)
                            if (l.hasOwnProperty(y)) {
                                var T = l[y];
                                t.ae(y), t.te(n.ne.ye, 1, null), t.Te(1), t.te(n.ne.ye, 2, null), t.Te(T.pii), t.te(n.ne.oe, 3, null), t.ae(T.value.toString()), t.fe(!1)
                            }
                    }
                    if (p) {
                        t.te(n.ne.ie, 31, null), t.re(p, n.ne.oe, n.ne.ge);
                        for (var y in f)
                            if (f.hasOwnProperty(y)) {
                                var A = f[y];
                                t.ae(y), t.me(A)
                            }
                    }
                    if (u) {
                        t.te(n.ne.ie, 33, null), t.re(u, n.ne.oe, n.ne._e);
                        for (var y in a)
                            if (a.hasOwnProperty(y)) {
                                var A = a[y];
                                t.ae(y), t.le(s.numberToBondInt64(A))
                            }
                    }
                    if (c) {
                        t.te(n.ne.ie, 34, null), t.re(c, n.ne.oe, n.ne.Se);
                        for (var y in h)
                            if (h.hasOwnProperty(y)) {
                                var A = h[y];
                                t.ae(y), t.Ae(A)
                            }
                    }
                    if (g) {
                        t.te(n.ne.ie, 36, null), t.re(g, n.ne.oe, n.ne.de);
                        for (var y in v)
                            if (v.hasOwnProperty(y)) {
                                var T = v[y];
                                t.ae(y), t.te(n.ne.ye, 1, null), t.Te(T.cc), t.te(n.ne.oe, 2, null), t.ae(T.value.toString()), t.fe(!1)
                            }
                    }
                    t.fe(!1)
                }, e.base64Encode = function(e) {
                    return n.ve.Ie(e)
                }, e
            }();
        t.default = a
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(1),
            r = i(2),
            o = i(0),
            s = function() {
                function e() {}
                return e.initialize = function(e) {
                    var t = this;
                    this.Ee = e, this.Pe = !0, r.default.addNotificationListener({
                        eventsSent: function(e) {
                            t.We("records_sent_count", e.length, e[0].apiKey)
                        },
                        eventsDropped: function(e, i) {
                            switch (i) {
                                case o.AWTEventsDroppedReason.NonRetryableStatus:
                                    t.We("d_send_fail", e.length, e[0].apiKey), t.We("records_dropped_count", e.length, e[0].apiKey);
                                    break;
                                case o.AWTEventsDroppedReason.QueueFull:
                                    t.We("d_queue_full", e.length, e[0].apiKey)
                            }
                        },
                        eventsRejected: function(e, i) {
                            switch (i) {
                                case o.AWTEventsRejectedReason.InvalidEvent:
                                    t.We("r_inv", e.length, e[0].apiKey);
                                    break;
                                case o.AWTEventsRejectedReason.KillSwitch:
                                    t.We("r_kl", e.length, e[0].apiKey);
                                    break;
                                case o.AWTEventsRejectedReason.SizeLimitExceeded:
                                    t.We("r_size", e.length, e[0].apiKey)
                            }
                            t.We("r_count", e.length, e[0].apiKey)
                        },
                        eventsRetrying: null
                    }), setTimeout(function() {
                        return t.flush()
                    }, 6e4)
                }, e.teardown = function() {
                    this.Pe && (this.flush(), this.Pe = !1)
                }, e.eventReceived = function(t) {
                    e.We("records_received_count", 1, t)
                }, e.flush = function() {
                    var e = this;
                    if (this.Pe) {
                        for (var t in this.Be) this.Be.hasOwnProperty(t) && this.Ee(this.Be[t], t);
                        this.Be = {}, setTimeout(function() {
                            return e.flush()
                        }, 6e4)
                    }
                }, e.We = function(e, t, i) {
                    if (this.Pe && i !== n.StatsApiKey) {
                        var r = n.getTenantId(i);
                        this.Be[r] || (this.Be[r] = {}), this.Be[r][e] ? this.Be[r][e] = this.Be[r][e] + t : this.Be[r][e] = t
                    }
                }, e.Pe = !1, e.Be = {}, e
            }();
        t.default = s
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            r = i(6),
            o = i(12),
            s = i(13),
            a = i(3),
            u = i(2),
            h = i(7),
            c = function() {
                function e() {}
                return e.initialize = function(e, t) {
                    if (void 0 === t && (t = {}), !this.we) return this.we = !0, o.default.defaultTenantToken = e, this.Ce(t), this.T.disableCookiesUsage && !this.T.propertyStorageOverride && (o.default.sessionEnabled = !1), h.default.addPropertyStorageOverride(this.T.propertyStorageOverride), h.default.autoCollect(o.default.semanticContext, this.T.disableCookiesUsage, this.T.userAgent), a.default.initialize(this.T), o.default.loggingEnabled = !0, this.T.enableAutoUserSession && (this.getLogger().logSession(r.AWTSessionState.Started), window.addEventListener("beforeunload", this.flushAndTeardown)), this.getLogger()
                }, e.getSemanticContext = function() {
                    return o.default.semanticContext
                }, e.flush = function(e) {
                    this.we && !this.be && a.default.flush(e)
                }, e.flushAndTeardown = function() {
                    this.we && !this.be && (this.T.enableAutoUserSession && this.getLogger().logSession(r.AWTSessionState.Ended), a.default.flushAndTeardown(), o.default.loggingEnabled = !1, this.be = !0)
                }, e.pauseTransmission = function() {
                    this.we && !this.be && a.default.pauseTransmission()
                }, e.resumeTransmision = function() {
                    this.we && !this.be && a.default.resumeTransmision()
                }, e.setTransmitProfile = function(e) {
                    this.we && !this.be && a.default.setTransmitProfile(e)
                }, e.loadTransmitProfiles = function(e) {
                    this.we && !this.be && a.default.loadTransmitProfiles(e)
                }, e.setContext = function(e, t, i) {
                    void 0 === i && (i = n.AWTPropertyType.Unspecified), o.default.logManagerContext.setProperty(e, t, i)
                }, e.setContextWithPii = function(e, t, i, r) {
                    void 0 === r && (r = n.AWTPropertyType.Unspecified), o.default.logManagerContext.setPropertyWithPii(e, t, i, r)
                }, e.setContextWithCustomerContent = function(e, t, i, r) {
                    void 0 === r && (r = n.AWTPropertyType.Unspecified), o.default.logManagerContext.setPropertyWithCustomerContent(e, t, i, r)
                }, e.getLogger = function(e) {
                    var t = e;
                    return t && t !== o.default.defaultTenantToken || (t = ""), this.Oe[t] || (this.Oe[t] = new s.default(t)), this.Oe[t]
                }, e.addNotificationListener = function(e) {
                    u.default.addNotificationListener(e)
                }, e.removeNotificationListener = function(e) {
                    u.default.removeNotificationListener(e)
                }, e.Ce = function(e) {
                    e.collectorUri && (this.T.collectorUri = e.collectorUri), e.cacheMemorySizeLimitInNumberOfEvents > 0 && (this.T.cacheMemorySizeLimitInNumberOfEvents = e.cacheMemorySizeLimitInNumberOfEvents), e.httpXHROverride && e.httpXHROverride.sendPOST && (this.T.httpXHROverride = e.httpXHROverride), e.propertyStorageOverride && e.propertyStorageOverride.getProperty && e.propertyStorageOverride.setProperty && (this.T.propertyStorageOverride = e.propertyStorageOverride), e.userAgent && (this.T.userAgent = e.userAgent), e.disableCookiesUsage && (this.T.disableCookiesUsage = e.disableCookiesUsage), e.canSendStatEvent && (this.T.canSendStatEvent = e.canSendStatEvent), e.enableAutoUserSession && "undefined" != typeof window && window.addEventListener && (this.T.enableAutoUserSession = e.enableAutoUserSession)
                }, e.Oe = {}, e.we = !1, e.be = !1, e.T = {
                    collectorUri: "https://browser.pipe.aria.microsoft.com/Collector/3.0/",
                    cacheMemorySizeLimitInNumberOfEvents: 1e4,
                    disableCookiesUsage: !1,
                    canSendStatEvent: function(e) {
                        return !0
                    }
                }, e
            }();
        t.default = c
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(5),
            r = i(8),
            o = function() {
                function e() {}
                return e.logManagerContext = new n.default, e.sessionEnabled = !0, e.loggingEnabled = !1, e.defaultTenantToken = "", e.semanticContext = new r.default(!0, e.logManagerContext), e
            }();
        t.default = o
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            r = i(6),
            o = i(5),
            s = i(1),
            a = i(10),
            u = i(2),
            h = i(3),
            c = i(12),
            f = i(15),
            p = i(8),
            l = i(7),
            d = function() {
                function e(e) {
                    this.Re = e, this.De = new o.default, this.O = new p.default(!1, this.De), this.Ne = 0, this.Me()
                }
                return e.prototype.setContext = function(e, t, i) {
                    void 0 === i && (i = n.AWTPropertyType.Unspecified), this.De.setProperty(e, t, i)
                }, e.prototype.setContextWithPii = function(e, t, i, r) {
                    void 0 === r && (r = n.AWTPropertyType.Unspecified), this.De.setPropertyWithPii(e, t, i, r)
                }, e.prototype.setContextWithCustomerContent = function(e, t, i, r) {
                    void 0 === r && (r = n.AWTPropertyType.Unspecified), this.De.setPropertyWithCustomerContent(e, t, i, r)
                }, e.prototype.getSemanticContext = function() {
                    return this.O
                }, e.prototype.logEvent = function(t) {
                    if (c.default.loggingEnabled) {
                        this.Re || (this.Re = c.default.defaultTenantToken, this.Me());
                        var i = !0;
                        s.isString(t) ? t = {
                            name: t
                        } : t instanceof o.default && (t = t.getEvent(), i = !1), a.default.eventReceived(this.Re), e.Ue(e.ke(t, this.Re, i), this.De)
                    }
                }, e.prototype.logSession = function(t, i) {
                    if (c.default.sessionEnabled) {
                        var o = {
                            name: "session",
                            type: "session",
                            properties: {}
                        };
                        if (e.xe(o, i), o.priority = n.AWTEventPriority.High, t === r.AWTSessionState.Started) {
                            if (this.Ne > 0) return;
                            this.Ne = (new Date).getTime(), this.Le = s.newGuid(), this.setContext("Session.Id", this.Le), o.properties["Session.State"] = "Started"
                        } else {
                            if (t !== r.AWTSessionState.Ended) return;
                            if (0 === this.Ne) return;
                            var a = Math.floor(((new Date).getTime() - this.Ne) / 1e3);
                            o.properties["Session.Id"] = this.Le, o.properties["Session.State"] = "Ended", o.properties["Session.Duration"] = a.toString(), o.properties["Session.DurationBucket"] = e.Fe(a), this.Ne = 0, this.setContext("Session.Id", null), this.Le = void 0
                        }
                        o.properties["Session.FirstLaunchTime"] = l.default.firstLaunchTime, this.logEvent(o)
                    }
                }, e.prototype.getSessionId = function() {
                    return this.Le
                }, e.prototype.logFailure = function(t, i, r, o, s) {
                    if (t && i) {
                        var a = {
                            name: "failure",
                            type: "failure",
                            properties: {}
                        };
                        e.xe(a, s), a.properties["Failure.Signature"] = t, a.properties["Failure.Detail"] = i, r && (a.properties["Failure.Category"] = r), o && (a.properties["Failure.Id"] = o), a.priority = n.AWTEventPriority.High, this.logEvent(a)
                    }
                }, e.prototype.logPageView = function(t, i, n, r, o, s) {
                    if (t && i) {
                        var a = {
                            name: "pageview",
                            type: "pageview",
                            properties: {}
                        };
                        e.xe(a, s), a.properties["PageView.Id"] = t, a.properties["PageView.Name"] = i, n && (a.properties["PageView.Category"] = n), r && (a.properties["PageView.Uri"] = r), o && (a.properties["PageView.ReferrerUri"] = o), this.logEvent(a)
                    }
                }, e.prototype.Me = function() {
                    !e.qe[this.Re] && this.Re && (e.qe[this.Re] = s.newGuid())
                }, e.xe = function(e, t) {
                    if (t) {
                        t instanceof o.default && (t = t.getEvent()), t.name && (e.name = t.name), t.priority && (e.priority = t.priority);
                        for (var i in t.properties) t.properties.hasOwnProperty(i) && (e.properties[i] = t.properties[i])
                    }
                }, e.Fe = function(e) {
                    return e < 0 ? "Undefined" : e <= 3 ? "UpTo3Sec" : e <= 10 ? "UpTo10Sec" : e <= 30 ? "UpTo30Sec" : e <= 60 ? "UpTo60Sec" : e <= 180 ? "UpTo3Min" : e <= 600 ? "UpTo10Min" : e <= 1800 ? "UpTo30Min" : "Above30Min"
                }, e.Ue = function(e, t) {
                    return e.name && s.isString(e.name) ? (e.name = e.name.toLowerCase(), e.name = e.name.replace(s.EventNameDotRegex, "_"), e.type && s.isString(e.type) ? e.type = e.type.toLowerCase() : e.type = "custom", s.EventNameAndTypeRegex.test(e.name) && s.EventNameAndTypeRegex.test(e.type) ? ((!s.isNumber(e.timestamp) || e.timestamp < 0) && (e.timestamp = (new Date).getTime()), e.properties || (e.properties = {}), this.He(e, t.getPropertyMap()), this.He(e, c.default.logManagerContext.getPropertyMap()), this.Qe(e, "EventInfo.InitId", this.ze(e.apiKey)), this.Qe(e, "EventInfo.Sequence", this.je(e.apiKey)), this.Qe(e, "EventInfo.SdkVersion", f.FullVersionString), this.Qe(e, "EventInfo.Name", e.name), this.Qe(e, "EventInfo.Time", new Date(e.timestamp).toISOString()), s.isPriority(e.priority) || (e.priority = n.AWTEventPriority.Normal), void this.Ke(e)) : void u.default.eventsRejected([e], n.AWTEventsRejectedReason.InvalidEvent)) : void u.default.eventsRejected([e], n.AWTEventsRejectedReason.InvalidEvent)
                }, e.He = function(e, t) {
                    if (t)
                        for (var i in t) t.hasOwnProperty(i) && (e.properties[i] || (e.properties[i] = t[i]))
                }, e.Qe = function(e, t, i) {
                    e.properties[t] = {
                        value: i,
                        pii: n.AWTPiiKind.NotSet,
                        type: n.AWTPropertyType.String
                    }
                }, e.Ke = function(e) {
                    h.default.sendEvent(e)
                }, e.ke = function(e, t, i) {
                    var n = e;
                    if (n.id = s.newGuid(), n.apiKey = t, n.properties = n.properties || {}, i)
                        for (var r in n.properties) n.properties.hasOwnProperty(r) && (n.properties[r] = s.sanitizeProperty(r, n.properties[r]), null === n.properties[r] && delete n.properties[r]);
                    return n
                }, e.ze = function(t) {
                    return e.qe[t]
                }, e.je = function(t) {
                    return void 0 === e.Ge[t] && (e.Ge[t] = 0), (++e.Ge[t]).toString()
                }, e.Ge = {}, e.qe = {}, e
            }();
        t.default = d
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AWT_REAL_TIME = "REAL_TIME", t.AWT_NEAR_REAL_TIME = "NEAR_REAL_TIME", t.AWT_BEST_EFFORT = "BEST_EFFORT"
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Version = "1.6.1", t.FullVersionString = "AWT-Web-JS-" + t.Version
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0);
        t.AWTPropertyType = n.AWTPropertyType, t.AWTPiiKind = n.AWTPiiKind, t.AWTEventPriority = n.AWTEventPriority, t.AWTEventsDroppedReason = n.AWTEventsDroppedReason, t.AWTEventsRejectedReason = n.AWTEventsRejectedReason, t.AWTCustomerContentKind = n.AWTCustomerContentKind;
        var r = i(6);
        t.AWTUserIdType = r.AWTUserIdType, t.AWTSessionState = r.AWTSessionState;
        var o = i(14);
        t.AWT_BEST_EFFORT = o.AWT_BEST_EFFORT, t.AWT_NEAR_REAL_TIME = o.AWT_NEAR_REAL_TIME, t.AWT_REAL_TIME = o.AWT_REAL_TIME;
        var s = i(5);
        t.AWTEventProperties = s.default;
        var a = i(13);
        t.AWTLogger = a.default;
        var u = i(11);
        t.AWTLogManager = u.default;
        var h = i(29);
        t.AWTTransmissionManager = h.default;
        var c = i(9);
        t.AWTSerializer = c.default;
        var f = i(8);
        t.AWTSemanticContext = f.default, t.AWT_COLLECTOR_URL_UNITED_STATES = "https://us.pipe.aria.microsoft.com/Collector/3.0/", t.AWT_COLLECTOR_URL_GERMANY = "https://de.pipe.aria.microsoft.com/Collector/3.0/", t.AWT_COLLECTOR_URL_JAPAN = "https://jp.pipe.aria.microsoft.com/Collector/3.0/", t.AWT_COLLECTOR_URL_AUSTRALIA = "https://au.pipe.aria.microsoft.com/Collector/3.0/", t.AWT_COLLECTOR_URL_EUROPE = "https://eu.pipe.aria.microsoft.com/Collector/3.0/", t.AWT_COLLECTOR_URL_USGOV_DOD = "https://pf.pipe.aria.microsoft.com/Collector/3.0",
            t.AWT_COLLECTOR_URL_USGOV_DOJ = "https://tb.pipe.aria.microsoft.com/Collector/3.0"
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function(e) {
                e[e.Ve = 0] = "_BT_STOP", e[e.Xe = 1] = "_BT_STOP_BASE", e[e.ge = 2] = "_BT_BOOL", e[e.Se = 8] = "_BT_DOUBLE", e[e.oe = 9] = "_BT_STRING", e[e.de = 10] = "_BT_STRUCT", e[e.se = 11] = "_BT_LIST", e[e.ie = 13] = "_BT_MAP", e[e.ye = 16] = "_BT_INT32", e[e._e = 17] = "_BT_INT64"
            }(t.ne || (t.ne = {}))
    }, function(e, t, i) {
        "use strict";

        function n(e) {
            for (var t = [], i = 0; i < e.length; ++i) {
                var n = e.charCodeAt(i);
                n < 128 ? t.push(n) : n < 2048 ? t.push(192 | n >> 6, 128 | 63 & n) : n < 55296 || n >= 57344 ? t.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++i)), t.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n))
            }
            return t
        }

        function r(e) {
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = [], n = e.length % 3, r = 0, o = e.length - n; r < o; r += 3) {
                var s = (e[r] << 16) + (e[r + 1] << 8) + e[r + 2];
                i.push(function(e) {
                    return [t.charAt(e >> 18 & 63), t.charAt(e >> 12 & 63), t.charAt(e >> 6 & 63), t.charAt(63 & e)].join("")
                }(s))
            }
            switch (n) {
                case 1:
                    var s = e[e.length - 1];
                    i.push(t.charAt(s >> 2)), i.push(t.charAt(s << 4 & 63)), i.push("==");
                    break;
                case 2:
                    var a = (e[e.length - 2] << 8) + e[e.length - 1];
                    i.push(t.charAt(a >> 10)), i.push(t.charAt(a >> 4 & 63)), i.push(t.charAt(a << 2 & 63)), i.push("=")
            }
            return i.join("")
        }

        function o(e) {
            for (var t = []; 4294967168 & e;) t.push(127 & e | 128), e >>>= 7;
            return t.push(127 & e), t
        }

        function s(e) {
            for (var t = e.low, i = e.high, n = []; i || 4294967168 & t;) n.push(127 & t | 128), t = (127 & i) << 25 | t >>> 7, i >>>= 7;
            return n.push(127 & t), n
        }

        function a(e) {
            if (p.BrowserChecker.Ze()) {
                var t = new DataView(new ArrayBuffer(8));
                t.setFloat64(0, e, !0);
                for (var i = [], n = 0; n < 8; ++n) i.push(t.getUint8(n));
                return i
            }
            return f.FloatUtils.Je(e, !0)
        }

        function u(e) {
            return (e = c.Number.B(e)) << 1 ^ e >> 31
        }

        function h(e) {
            var t = e.low,
                i = e.high,
                n = i << 1 | t >>> 31,
                r = t << 1;
            2147483648 & i && (n = ~n, r = ~r);
            var o = new c.UInt64("0");
            return o.low = r, o.high = n, o
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = i(4),
            f = i(19),
            p = i(22);
        t.Ye = n, t.Ie = r, t.he = o, t.$e = s, t.et = a, t.tt = u, t.it = h
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.Je = function(e, t) {
                if (!e) return t ? this.nt : this.rt;
                var i = t ? 11 : 8,
                    n = t ? 52 : 23,
                    r = (1 << i - 1) - 1,
                    o = 1 - r,
                    s = r,
                    a = e < 0 ? 1 : 0;
                e = Math.abs(e);
                for (var u = Math.floor(e), h = e - u, c = 2 * (r + 2) + n, f = new Array(c), p = 0; p < c;) f[p++] = 0;
                for (p = r + 2; p && u;) f[--p] = u % 2, u = Math.floor(u / 2);
                for (p = r + 1; p < c - 1 && h > 0;) h *= 2, h >= 1 ? (f[++p] = 1, --h) : f[++p] = 0;
                for (var l = 0; l < c && !f[l];) l++;
                var d = r + 1 - l,
                    v = l + n;
                if (f[v + 1]) {
                    for (p = v; p > l && (f[p] = 1 - f[p], !f); --p);
                    p === l && ++d
                }
                if (d > s || u) return a ? t ? this.ot : this.st : t ? this.at : this.ut;
                if (d < o) return t ? this.nt : this.rt;
                if (t) {
                    var g = 0;
                    for (p = 0; p < 20; ++p) g = g << 1 | f[++l];
                    for (var y = 0; p < 52; ++p) y = y << 1 | f[++l];
                    g |= d + r << 20, g = a << 31 | 2147483647 & g;
                    var T = [255 & y, y >> 8 & 255, y >> 16 & 255, y >>> 24, 255 & g, g >> 8 & 255, g >> 16 & 255, g >>> 24];
                    return T
                }
                var A = 0;
                for (p = 0; p < 23; ++p) A = A << 1 | f[++l];
                A |= d + r << 23, A = a << 31 | 2147483647 & A;
                var T = [255 & A, A >> 8 & 255, A >> 16 & 255, A >>> 24];
                return T
            }, e.rt = [0, 0, 0, 0], e.nt = [0, 0, 0, 0, 0, 0, 0, 0], e.ut = [0, 0, 128, 127], e.st = [0, 0, 128, 255], e.at = [0, 0, 0, 0, 0, 0, 240, 127], e.ot = [0, 0, 0, 0, 0, 0, 240, 255], e
        }();
        t.FloatUtils = n
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(4),
            r = function() {
                function e() {
                    this.dt = []
                }
                return e.prototype._t = function(e) {
                    this.dt.push(n.Number.P(e))
                }, e.prototype.lt = function(e, t, i) {
                    for (; i--;) this._t(e[t++])
                }, e.prototype.ce = function() {
                    return this.dt
                }, e
            }();
        t.MemoryStream = r
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(17);
        t.ne = n.ne;
        var r = i(18);
        t.ve = r;
        var o = i(20);
        t.IO = o;
        var s = i(4);
        t.Int64 = s.Int64, t.UInt64 = s.UInt64, t.Number = s.Number;
        var a = function() {
            function e(e) {
                this.ct = e
            }
            return e.prototype.pt = function(e) {
                this.ct.lt(e, 0, e.length)
            }, e.prototype.me = function(e) {
                this.ct._t(e ? 1 : 0)
            }, e.prototype.ue = function(e, t) {
                this.ft(t), this.ht(e)
            }, e.prototype.re = function(e, t, i) {
                this.ft(t), this.ft(i), this.ht(e)
            }, e.prototype.Ae = function(e) {
                var t = r.et(e);
                this.ct.lt(t, 0, t.length)
            }, e.prototype.te = function(e, t, i) {
                t <= 5 ? this.ct._t(e | t << 5) : t <= 255 ? (this.ct._t(192 | e), this.ct._t(t)) : (this.ct._t(224 | e), this.ct._t(t), this.ct._t(t >> 8))
            }, e.prototype.Te = function(e) {
                e = r.tt(e), this.ht(e)
            }, e.prototype.le = function(e) {
                this.vt(r.it(e))
            }, e.prototype.ae = function(e) {
                if ("" === e) this.ht(0);
                else {
                    var t = r.Ye(e);
                    this.ht(t.length), this.ct.lt(t, 0, t.length)
                }
            }, e.prototype.fe = function(e) {
                this.ft(e ? n.ne.Xe : n.ne.Ve)
            }, e.prototype.ht = function(e) {
                var t = r.he(s.Number.w(e));
                this.ct.lt(t, 0, t.length)
            }, e.prototype.vt = function(e) {
                var t = r.$e(e);
                this.ct.lt(t, 0, t.length)
            }, e.prototype.ft = function(e) {
                this.ct._t(s.Number.W(e))
            }, e
        }();
        t.CompactBinaryProtocolWriter = a
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.Ze = function() {
                return "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
            }, e
        }();
        t.BrowserChecker = n
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {
                this.yt = !0, this.Tt = !0, this.gt = !0, this.mt = "use-collector-delta", this.St = !1
            }
            return e.prototype.allowRequestSending = function() {
                return this.gt && !this.St ? (this.gt = !1, this.yt = !1, !0) : this.yt
            }, e.prototype.shouldAddClockSkewHeaders = function() {
                return this.Tt
            }, e.prototype.getClockSkewHeaderValue = function() {
                return this.mt
            }, e.prototype.setClockSkew = function(e) {
                this.St || (e ? this.mt = e : this.Tt = !1, this.St = !0, this.yt = !0)
            }, e
        }();
        t.default = n
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {
                this.At = {}
            }
            return e.prototype.setKillSwitchTenants = function(e, t) {
                if (e && t) try {
                    var i = e.split(",");
                    if ("this-request-only" === t) return i;
                    for (var n = 1e3 * parseInt(t, 10), r = 0; r < i.length; ++r) this.At[i[r]] = Date.now() + n
                } catch (e) {
                    return []
                }
                return []
            }, e.prototype.isTenantKilled = function(e) {
                return void 0 !== this.At[e] && this.At[e] > Date.now() || (delete this.At[e], !1)
            }, e
        }();
        t.default = n
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            r = function() {
                function e(e, t) {
                    this.It = e, this.Et = t, this.Pt = {}, this.Wt = 0
                }
                return e.prototype.addEventToBatch = function(e) {
                    if (e.priority === n.AWTEventPriority.Immediate_sync) {
                        var t = {};
                        return t[e.apiKey] = [e], t
                    }
                    return this.Wt >= this.Et && this.flushBatch(), void 0 === this.Pt[e.apiKey] && (this.Pt[e.apiKey] = []), this.Pt[e.apiKey].push(e), this.Wt++, null
                }, e.prototype.flushBatch = function() {
                    this.Wt > 0 && (this.It.push(this.Pt), this.Pt = {}, this.Wt = 0)
                }, e.prototype.hasBatch = function() {
                    return this.Wt > 0
                }, e
            }();
        t.default = r
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.shouldRetryForStatus = function(e) {
                return !(e >= 300 && e < 500 && 408 !== e || 501 === e || 505 === e)
            }, e.getMillisToBackoffForRetry = function(e) {
                var t = 0,
                    i = Math.floor(1200 * Math.random()) + 2400;
                return t = Math.pow(4, e) * i, Math.min(t, 12e4)
            }, e
        }();
        t.default = n
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            r = i(9),
            o = i(26),
            s = i(24),
            a = i(23),
            u = i(15),
            h = i(1),
            c = i(2),
            f = i(3),
            p = "POST",
            l = function() {
                function e(e, t, i, n) {
                    var r = this;
                    this.Bt = e, this.wt = i, this.Ct = n, this.bt = "?qsp=true&content-type=application%2Fbond-compact-binary&client-id=NO_AUTH&sdk-version=" + u.FullVersionString, this.Ot = new s.default, this._ = !1, this.Rt = new a.default, this.Dt = !1, this.Nt = 0, h.isUint8ArrayAvailable() || (this.bt += "&content-encoding=base64"), this.bt = t + this.bt, this.Ct || (this.Dt = !h.isReactNative(), this.Ct = {
                        sendPOST: function(e, t, i, n, o, s) {
                            if (h.useXDomainRequest()) {
                                var a = new XDomainRequest;
                                a.open(p, e), a.onload = function() {
                                    o(200, null)
                                }, a.onerror = function() {
                                    n(400, null)
                                }, a.ontimeout = function() {
                                    i(500, null)
                                }, a.send(t)
                            } else if (h.isReactNative()) fetch(e, {
                                body: t,
                                method: p
                            }).then(function(e) {
                                var t = {};
                                e.headers && e.headers.forEach(function(e, i) {
                                    t[i] = e
                                }), o(e.status, t)
                            }).catch(function(e) {
                                n(0, {})
                            });
                            else {
                                var u = new XMLHttpRequest;
                                u.open(p, e, !s), u.onload = function() {
                                    o(u.status, r.Mt(u.getAllResponseHeaders()))
                                }, u.onerror = function() {
                                    n(u.status, r.Mt(u.getAllResponseHeaders()))
                                }, u.ontimeout = function() {
                                    i(u.status, r.Mt(u.getAllResponseHeaders()))
                                }, u.send(t)
                            }
                        }
                    })
                }
                return e.prototype.hasIdleConnection = function() {
                    return this.Nt < 2
                }, e.prototype.sendQueuedRequests = function() {
                    for (; this.hasIdleConnection() && !this._ && this.Bt.length > 0 && this.Rt.allowRequestSending();) this.Nt++, this.Ut(this.Bt.shift(), 0, !1);
                    this.hasIdleConnection() && f.default.scheduleTimer()
                }, e.prototype.isCompletelyIdle = function() {
                    return 0 === this.Nt
                }, e.prototype.teardown = function() {
                    for (; this.Bt.length > 0;) this.Ut(this.Bt.shift(), 0, !0)
                }, e.prototype.pause = function() {
                    this._ = !0
                }, e.prototype.resume = function() {
                    this._ = !1, this.sendQueuedRequests()
                }, e.prototype.removeQueuedRequests = function() {
                    this.Bt.length = 0
                }, e.prototype.sendSynchronousRequest = function(e, t) {
                    this._ && (e[t][0].priority = n.AWTEventPriority.High), this.Nt++, this.Ut(e, 0, !1, !0)
                }, e.prototype.Ut = function(e, t, i, o) {
                    var s = this;
                    if (void 0 === o && (o = !1), this._) return this.Nt--, void this.wt.addBackRequest(e);
                    var a = 0,
                        u = "";
                    for (var f in e) e.hasOwnProperty(f) && (this.Ot.isTenantKilled(f) ? (c.default.eventsRejected(e[f], n.AWTEventsRejectedReason.KillSwitch), delete e[f]) : (u.length > 0 && (u += ","), u += f, a++));
                    if (a > 0) {
                        var p = r.default.getPayloadBlob(e, a);
                        p.remainingRequest && this.Bt.push(p.remainingRequest);
                        var l = this.bt + "&x-apikey=" + u + "&client-time-epoch-millis=" + Date.now().toString();
                        this.Rt.shouldAddClockSkewHeaders() && (l = l + "&time-delta-to-apply-millis=" + this.Rt.getClockSkewHeaderValue());
                        var d = void 0;
                        d = h.isUint8ArrayAvailable() ? new Uint8Array(p.payloadBlob) : r.default.base64Encode(p.payloadBlob);
                        for (var f in e)
                            if (e.hasOwnProperty(f))
                                for (var v = 0; v < e[f].length; ++v) e[f][v].sendAttempt > 0 ? e[f][v].sendAttempt++ : e[f][v].sendAttempt = 1;
                        if (this.Dt && i && h.isBeaconsSupported() && navigator.sendBeacon(l, d)) return;
                        this.Ct.sendPOST(l, d, function(n, r) {
                            s.kt(n, r, e, a, u, t, i, o)
                        }, function(n, r) {
                            s.kt(n, r, e, a, u, t, i, o)
                        }, function(n, r) {
                            s.kt(n, r, e, a, u, t, i, o)
                        }, i || o)
                    } else i || this.xt(null, {}, i, o)
                }, e.prototype.kt = function(e, t, i, r, s, a, u, h) {
                    var p = this,
                        l = !0;
                    if (void 0 !== e) {
                        if (t) {
                            var d = this.Ot.setKillSwitchTenants(t["kill-tokens"], t["kill-duration-seconds"]);
                            this.Rt.setClockSkew(t["time-delta-millis"]);
                            for (var v = 0; v < d.length; ++v) c.default.eventsRejected(i[d[v]], n.AWTEventsRejectedReason.KillSwitch), delete i[d[v]], r--
                        } else this.Rt.setClockSkew(null);
                        if (200 === e) return void this.xt(!0, i, u, h);
                        (!o.default.shouldRetryForStatus(e) || r <= 0) && (l = !1)
                    }
                    if (l)
                        if (h) this.Nt--, i[s][0].priority = n.AWTEventPriority.High, this.wt.addBackRequest(i);
                        else if (a < 1) {
                        for (var g in i) i.hasOwnProperty(g) && c.default.eventsRetrying(i[g]);
                        setTimeout(function() {
                            return p.Ut(i, a + 1, !1)
                        }, o.default.getMillisToBackoffForRetry(a))
                    } else this.Nt--, f.default.backOffTransmission(), this.wt.addBackRequest(i);
                    else this.xt(!1, i, u, h)
                }, e.prototype.xt = function(e, t, i, r) {
                    e && f.default.clearBackOff();
                    for (var o in t) t.hasOwnProperty(o) && (e ? c.default.eventsSent(t[o]) : c.default.eventsDropped(t[o], n.AWTEventsDroppedReason.NonRetryableStatus));
                    this.Nt--, r || i || this.sendQueuedRequests()
                }, e.prototype.Mt = function(e) {
                    var t = {};
                    if (e)
                        for (var i = e.split("\n"), n = 0; n < i.length; ++n) {
                            var r = i[n].split(": ");
                            t[r[0]] = r[1]
                        }
                    return t
                }, e
            }();
        t.default = l
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            r = i(27),
            o = i(3),
            s = i(25),
            a = i(2),
            u = 500,
            h = function() {
                function e(e, t, i) {
                    this.Lt = t, this.Ft = !1, this.qt = [], this.Ht = !1, this._ = !1, this.Qt = 0, this.It = [], this.zt = {}, this.zt[n.AWTEventPriority.High] = [], this.zt[n.AWTEventPriority.Normal] = [], this.zt[n.AWTEventPriority.Low] = [], this.jt(), this.Kt = new s.default(this.It, u), this.Gt = new r.default(this.It, e, this, i)
                }
                return e.prototype.addEvent = function(e) {
                    e.priority === n.AWTEventPriority.Immediate_sync ? this.Gt.sendSynchronousRequest(this.Kt.addEventToBatch(e), e.apiKey) : this.Qt < this.Lt ? this.Vt(e) : this.Xt(e.priority) ? this.Vt(e) : a.default.eventsDropped([e], n.AWTEventsDroppedReason.QueueFull)
                }, e.prototype.sendEventsForPriorityAndAbove = function(e) {
                    this.Zt(e), this.Gt.sendQueuedRequests()
                }, e.prototype.hasEvents = function() {
                    return (this.zt[n.AWTEventPriority.High][0].length > 0 || this.zt[n.AWTEventPriority.Normal][0].length > 0 || this.zt[n.AWTEventPriority.Low][0].length > 0 || this.Kt.hasBatch()) && this.Gt.hasIdleConnection()
                }, e.prototype.addBackRequest = function(e) {
                    if (!this._ || !this.Ht) {
                        for (var t in e)
                            if (e.hasOwnProperty(t))
                                for (var i = 0; i < e[t].length; ++i) e[t][i].sendAttempt < 6 ? this.addEvent(e[t][i]) : a.default.eventsDropped([e[t][i]], n.AWTEventsDroppedReason.NonRetryableStatus);
                        o.default.scheduleTimer()
                    }
                }, e.prototype.teardown = function() {
                    this._ || (this.Zt(n.AWTEventPriority.Low), this.Gt.teardown())
                }, e.prototype.uploadNow = function(e) {
                    var t = this;
                    this.jt(), this.Ft ? this.qt.push(e) : (this.Ft = !0, setTimeout(function() {
                        return t.Jt(e)
                    }, 0))
                }, e.prototype.pauseTransmission = function() {
                    this._ = !0, this.Gt.pause(), this.shouldDropEventsOnPause && (this.Qt -= this.zt[n.AWTEventPriority.High][0].length + this.zt[n.AWTEventPriority.Normal][0].length + this.zt[n.AWTEventPriority.Low][0].length, this.zt[n.AWTEventPriority.High][0] = [], this.zt[n.AWTEventPriority.Normal][0] = [], this.zt[n.AWTEventPriority.Low][0] = [], this.Gt.removeQueuedRequests())
                }, e.prototype.resumeTransmission = function() {
                    this._ = !1, this.Gt.resume()
                }, e.prototype.shouldDropEventsOnPause = function(e) {
                    this.Ht = e
                }, e.prototype.Yt = function() {
                    this.zt[n.AWTEventPriority.High].shift(), this.zt[n.AWTEventPriority.Normal].shift(), this.zt[n.AWTEventPriority.Low].shift()
                }, e.prototype.jt = function() {
                    this.zt[n.AWTEventPriority.High].push([]), this.zt[n.AWTEventPriority.Normal].push([]), this.zt[n.AWTEventPriority.Low].push([])
                }, e.prototype.Vt = function(e) {
                    this._ && this.Ht || (this.Qt++, this.zt[e.priority][this.zt[e.priority].length - 1].push(e))
                }, e.prototype.Xt = function(e) {
                    for (var t = n.AWTEventPriority.Low; t <= e;) {
                        if (this.zt[t][this.zt[t].length - 1].length > 0) return a.default.eventsDropped([this.zt[t][this.zt[t].length - 1].shift()], n.AWTEventsDroppedReason.QueueFull), !0;
                        t++
                    }
                    return !1
                }, e.prototype.Zt = function(e) {
                    for (var t = n.AWTEventPriority.High; t >= e;) {
                        for (; this.zt[t][0].length > 0;) {
                            var i = this.zt[t][0].pop();
                            this.Qt--, this.Kt.addEventToBatch(i)
                        }
                        t--
                    }
                    this.Kt.flushBatch()
                }, e.prototype.Jt = function(e) {
                    var t = this;
                    this.hasEvents() && this.sendEventsForPriorityAndAbove(n.AWTEventPriority.Low), this.$t(function() {
                        t.Yt(), null !== e && void 0 !== e && e(), t.qt.length > 0 ? setTimeout(function() {
                            return t.Jt(t.qt.shift())
                        }, 0) : (t.Ft = !1, t.hasEvents() && o.default.scheduleTimer())
                    })
                }, e.prototype.$t = function(e) {
                    var t = this;
                    this.Gt.isCompletelyIdle() ? e() : setTimeout(function() {
                        return t.$t(e)
                    }, 250)
                }, e
            }();
        t.default = h
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(3),
            r = function() {
                function e() {}
                return e.setEventsHandler = function(e) {
                    n.default.setEventsHandler(e)
                }, e.getEventsHandler = function() {
                    return n.default.getEventsHandler()
                }, e.scheduleTimer = function() {
                    n.default.scheduleTimer()
                }, e
            }();
        t.default = r
    }, function(e, t, i) {
        e.exports = i(16)
    }])
});
var StandaloneAriaLogger;
! function(e) {
    var t = function() {
        function t() {}
        return t.Initialize = function(t, i) {
            if (!e.Logger.ariaLogger) {
                var n = {
                    enableAutoUserSession: !1,
                    collectorUri: t.ariaCollectorUrl,
                    propertyStorageOverride: null,
                    disableCookiesUsage: t.cookieConsentRequired
                };
                if (e.Logger.ariaLogger = AWTLogManager.initialize(t.ariaTenant, n), e.Logger.ariaLogger) {
                    if (e.Logger.ariaLogger.setContext("CorpNet", t.corpNet), e.Logger.ariaLogger.setContext("CorrelationId", t.correlationId), e.Logger.ariaLogger.setContext("DevEnvironment", t.devEnvironment), e.Logger.ariaLogger.setContext("DeploymentEnvironment", t.deploymentEnvironment), e.Logger.ariaLogger.setContext("Geo", t.geoName), e.Logger.ariaLogger.setContext("RequestOrigin", t.requestOrigin), e.Logger.ariaLogger.setContext("SessionId", t.sessionId), e.Logger.ariaLogger.setContext("TestTraffic", t.testTraffic), e.Logger.ariaLogger.setContext("ServerBuildDate", t.serverBuildDate), e.Logger.ariaLogger.setContext("ServerBuildId", t.serverBuildId), t.features && t.features.length > 0 ? t.flights && t.flights.length > 0 ? e.Logger.ariaLogger.setContext("Flights", t.flights + "," + t.features) : e.Logger.ariaLogger.setContext("Flights", t.features) : e.Logger.ariaLogger.setContext("Flights", t.flights), t.authTypeString && t.tenantId) {
                        e.Logger.ariaLogger.setContext("AuthType", t.authTypeString);
                        var r = t.puid,
                            o = AWTUserIdType.Unknown;
                        r ? "OrgId" === t.authTypeString ? o = AWTUserIdType.OrgIdPUID : "MSA" === t.authTypeString && (o = AWTUserIdType.MSAPUID) : r = "Unknown", e.Logger.ariaLogger.getSemanticContext().setUserId(r, AWTPiiKind.NotSet, o), e.Logger.ariaLogger.setContext("UserInfo.OMSTenantId", t.tenantId)
                    }
                    e.Logger.StartSession(), e.Logger.EndSessionOnUnload(i), e.Logger.FlushQueuedEvents()
                }
            }
        }, t.EndSession = function(t, i) {
            if (e.Logger.ariaLogger && e.Logger.sessionActive) {
                if (e.Logger.sessionActive = !1, !window.disableLogs) {
                    var n = e.Logger.GetSessionProperties();
                    e.Logger.ariaLogger.logSession(AWTSessionState.Ended, n)
                }
                i ? AWTLogManager.flushAndTeardown() : t && AWTLogManager.flush(null)
            }
        }, t.LogEvent = function(t, i, n, r) {
            if (void 0 === r && (r = 0), e.Logger.ariaLogger) e.Logger.sessionActive || e.Logger.StartSession(), e.Logger.LogAriaEvent(t, i, r, n);
            else {
                var o = {
                    streamName: t,
                    eventName: i,
                    eventParams: n || {},
                    metrics: [],
                    securityThreshold: r
                };
                window.queuedEvents || (window.queuedEvents = []), window.queuedEvents.push(o)
            }
        }, t.LogUnauthClick = function(t, i) {
            var n = {
                ViewType: t,
                ElementId: i || "Unknown"
            };
            e.Logger.LogEvent("unauth_click", null, n)
        }, t.LogUnauthPageView = function(t) {
            var i = {
                ViewType: t
            };
            e.Logger.LogEvent("unauth_page_view", null, i)
        }, t.LogBootError = function(t, i, n) {
            var r = {};
            n && (r.resourceUrl = n), i && (r.details = i.replace(this.emailRegex, "email_removed").replace(this.localFileRegex, "file_removed")), e.Logger.LogEvent("App_Error", t, r)
        }, t.LogAppBundleError = function(t) {
            var i = e.Logger.GetCDNResourceDetails(t);
            e.Logger.LogBootError("App_Bundle_Parsing_Error", JSON.stringify(i))
        }, t.EndSessionOnUnload = function(t) {
            var i = function() {
                e.Logger.EndSession(!0, t)
            };
            window.addEventListener("beforeunload", i), window.addEventListener("pagehide", i)
        }, t.StartSession = function() {
            if (!window.disableLogs) {
                var t = e.Logger.GetSessionProperties();
                e.Logger.ariaLogger.logSession(AWTSessionState.Started, t)
            }
            e.Logger.sessionActive = !0
        }, t.GetSessionProperties = function() {
            var e = new AWTEventProperties;
            return window.prelaunchMode && e.setProperty("PrelaunchMode", "true"), e.setProperty("LoggerId", "Standalone"), e
        }, t.LogAriaEvent = function(t, i, n, r) {
            var o = e.Logger.GetAppSecurityLevel(),
                s = n || 0,
                a = i && i.indexOf("Error") > -1 || r && r.Error && "OK" !== r.Error;
            if (!(s > o || window.disableLogs && !a)) {
                var u = e.Logger.SetAriaProps(r || {});
                u.setName(t), i && u.setProperty(e.Logger.eventNameProperty, i), u.setProperty("AppSecurityLevel", o), window.prelaunchMode && u.setProperty("PrelaunchMode", "true"), "Performance_Dump" === t && void 0 !== window.startedFromServiceWorker && u.setProperty("CachedPage", window.startedFromServiceWorker.toString()), e.Logger.ariaLogger.logEvent(u)
            }
        }, t.GetCDNResourceDetails = function(e) {
            var t = [];
            if (performance && performance.getEntriesByType) {
                var i = performance.getEntriesByType("resource");
                if (i)
                    for (var n = 0; n < i.length; n++) {
                        var r = i[n];
                        if (("link" === r.initiatorType || "script" === r.initiatorType) && void 0 !== r.transferSize && void 0 !== r.decodedBodySize && r.name && r.name.indexOf(e) >= 0) {
                            var o = r.name.split("/"),
                                s = o.length > 0 ? o[o.length - 1] : "",
                                a = r.transferSize,
                                u = r.decodedBodySize;
                            t.push({
                                name: s,
                                tSize: a,
                                dSize: u
                            })
                        }
                    }
            }
            return t
        }, t.FlushQueuedEvents = function() {
            if (window.queuedEvents) {
                for (var t = 0; t < window.queuedEvents.length; t++) {
                    var i = window.queuedEvents[t];
                    e.Logger.LogAriaEvent(i.streamName, i.eventName, i.securityThreshold, i.eventParams)
                }
                window.queuedEvents = []
            }
        }, t.SetAriaProps = function(e) {
            var t = new AWTEventProperties;
            if (e)
                for (var i in e) e.hasOwnProperty(i) && t.setProperty(i, e[i]);
            return t
        }, t.GetAppSecurityLevel = function() {
            return "number" == typeof window.windowsDataSecuritySetting ? window.windowsDataSecuritySetting : 3
        }, t.emailRegex = new RegExp("[a-zA-Z0-9_\\-\\.]+(@|%40|%2540)[a-zA-Z0-9_\\-\\.]+\\.[a-zA-Z]{2,63}", "g"), t.localFileRegex = new RegExp("file(:|%3A|%253A).*", "gi"), t.eventNameProperty = "EventName", t.sessionActive = !1, t
    }();
    e.Logger = t
}(StandaloneAriaLogger || (StandaloneAriaLogger = {}));