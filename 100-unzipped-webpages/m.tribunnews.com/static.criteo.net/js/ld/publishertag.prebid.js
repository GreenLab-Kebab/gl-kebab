// Hash: x/T6PFCdwv5gc3GujrrEXaP9S8NMmKc8xC9RCM8TtepN7njtjLofneXdeBGJ1U4WCFrYBk7STDbFvoQwiDbXknfMWDpFuozQcMoRGBCYVg9jXEUOBvgo44qIbD7PN3fXIMt3TcfXLJjqXxQVMhgRx4/+aZY3s/pWq75Tv/QzobU=
! function() {
    "use strict";
    var s, t;
    (t = s || (s = {}))[t.Error = 0] = "Error", t[t.Warning = 1] = "Warning", t[t.Debug = 2] = "Debug";
    var a = ["color: #fff;", "background: #ff8f1c;", "display: inline-block;", "padding: 1px 4px;", "border-radius: 3px;"].join(" "),
        g = function() {
            function n() {}
            return n.Log = function(t, e) {
                if (!(n.LOGLEVEL < t)) {
                    var i = s[t].toUpperCase(),
                        o = window.navigator.userAgent,
                        r = 0 < o.indexOf("MSIE ") || 0 < o.indexOf("Trident/");
                    window.console ? r ? console.log("[PubTag] " + i + ": " + e) : console.log("%cPubTag", a, i + ": " + e) : t <= s.Error && alert("[PubTag] " + i + ": " + e)
                }
            }, n.Debug = function(t) {
                n.Log(s.Debug, t)
            }, n.Warning = function(t) {
                n.Log(s.Warning, t)
            }, n.Error = function(t) {
                n.Log(s.Error, t)
            }, n.LOGLEVEL = s.Error, n
        }();
    var d = function() {
        function i(t) {
            void 0 === t && (t = !0), t && window.performance && window.performance.now ? this.now = window.performance.now.bind(window.performance) : Date.now ? this.now = Date.now : this.now = function() {
                return (new Date).getTime()
            }
        }
        return i.CreateRunning = function() {
            var t = new i;
            return t.start(), t
        }, i.CreateWithStartTime = function(t) {
            var e = new i(!1);
            return e.startTime = t, e
        }, i.TimeSincePageLoad = function() {
            if (window.performance) {
                if (window.performance.now) return window.performance.now();
                if (window.performance.timing && window.performance.timing.navigationStart) return (new Date).getTime() - performance.timing.navigationStart
            }
            return 0
        }, i.prototype.start = function() {
            this.startTime = this.now()
        }, i.prototype.elapsed = function() {
            return this.now() - this.startTime
        }, i
    }();

    function v(t) {
        try {
            return JSON.parse(t)
        } catch (t) {
            return
        }
    }
    var p = 91,
        c = {};

    function l(t, e) {
        if (t) {
            var i = {};
            void 0 !== t.consentData && (i.consentData = t.consentData), void 0 !== t.gdprApplies && (i.gdprApplies = !!t.gdprApplies), t.vendorConsents && void 0 !== t.vendorConsents[p.toString()] && (i.consentGiven = !!t.vendorConsents[p.toString()]), e(i)
        } else g.Warning("Unable to read GDPR consent data from CMP"), e(void 0)
    }

    function u(t, e, i, o) {
        if (!r(t)) {
            g.Debug("No CMP defined on current frame");
            var n = m(t);
            t.__cmp = function(t, e, i) {
                if (!n) return g.Warning("CMP not found"), void i({
                    msg: "CMP not found"
                }, !1);
                var o = Math.random().toString(10),
                    r = {
                        __cmpCall: {
                            command: t,
                            parameter: e,
                            callId: o
                        }
                    };
                c[o] = i, n.postMessage(r, "*")
            }, t.addEventListener("message", function(t) {
                var e = "string" == typeof t.data ? v(t.data) : t.data;
                if (e && e.__cmpReturn && e.__cmpReturn.callId && e.__cmpReturn.returnValue) {
                    var i = e.__cmpReturn;
                    c && c[i.callId] && (c[i.callId](i.returnValue, i.success), delete c[i.callId])
                }
            }, !1)
        }
        t.__cmp(e, i, o)
    }

    function r(t) {
        return "function" == typeof t.__cmp
    }

    function m(t) {
        for (var e, i = t, o = 0; o < 10; ++o) {
            try {
                i.frames.__cmpLocator && (e = i)
            } catch (t) {}
            if (i === t.top) break;
            i = i.parent
        }
        return e
    }
    var n = function() {
            function t(t) {
                this.EXPIRE_SUFFIX = "_expires", this.CHECK_STORAGE_KEY = "criteo_localstorage_check", this.localStorage = function(t) {
                    try {
                        return t.localStorage
                    } catch (t) {
                        return
                    }
                }(t || window)
            }
            return t.prototype.checkLocalStorage = function() {
                if (!this.localStorage) return !1;
                var t = this.CHECK_STORAGE_KEY;
                try {
                    return this.localStorage.setItem(t, t), this.localStorage.removeItem(t), !0
                } catch (t) {
                    return !1
                }
            }, t.prototype.removeItem = function(t) {
                this.localStorage.removeItem(t), this.localStorage.removeItem(t + this.EXPIRE_SUFFIX)
            }, t.prototype.getItem = function(t, e) {
                var i = (new Date).getTime(),
                    o = this.localStorage.getItem(t + this.EXPIRE_SUFFIX),
                    r = o ? parseInt(o, 10) : -1;
                return -1 !== r && r < i || e && (-1 === r || e < r - i) ? (this.removeItem(t), null) : this.localStorage.getItem(t)
            }, t.prototype.setItem = function(t, e, i) {
                if (this.localStorage.setItem(t, e), i) {
                    var o = (new Date).getTime() + i;
                    this.localStorage.setItem(t + this.EXPIRE_SUFFIX, o.toString())
                }
            }, t
        }(),
        h = function() {
            function i() {
                this.localStorageHelper = new n, this.localStorageEnabled = this.localStorageHelper.checkLocalStorage()
            }
            return i.prototype.silentModeEnabled = function() {
                var t = i.SILENT_MODE_KEY;
                return this.localStorageEnabled && null !== this.localStorageHelper.getItem(t)
            }, i.prototype.enableSilentMode = function(t) {
                if (this.localStorageEnabled) {
                    var e = i.SILENT_MODE_KEY;
                    this.localStorageHelper.setItem(e, "1", t)
                }
            }, i.SILENT_MODE_KEY = "criteo_silent_mode", i
        }();

    function f() {
        return (new Date).getTime()
    }
    var o, y, I, e, E = function() {
            function t(t) {
                this.x = t + "_lock_A", this.y = t + "_lock_B", this.id = Math.floor(1e9 * Math.random()).toString()
            }
            return t.prototype.get = function(t) {
                var e = localStorage.getItem(t);
                if (e) {
                    var i = e.split("|");
                    if (!(i.length < 2 || parseInt(i[1], 10) < f())) return i[0]
                }
            }, t.prototype.set = function(t, e) {
                var i = f() + e;
                localStorage.setItem(t, this.id + "|" + i)
            }, t.prototype.acquire = function(t, e, i) {
                var o = this;
                void 0 === i && (i = 100), i <= 0 || this.tryAcquire(e) ? (t(), this.release()) : setTimeout(function() {
                    o.acquire(t, e, i - 10)
                }, 10)
            }, t.prototype.tryAcquire = function(t) {
                localStorage.setItem(this.x, this.id);
                var e = this.get(this.y);
                return !(e && e !== this.id || (this.set(this.y, t), localStorage.getItem(this.x) !== this.id || this.get(this.y) !== this.id))
            }, t.prototype.release = function() {
                localStorage.removeItem(this.x), localStorage.removeItem(this.y)
            }, t
        }(),
        S = function() {
            function t(t, e) {
                this.width = t, this.height = e
            }
            return t.prototype.toString = function() {
                return this.width + "x" + this.height
            }, t
        }(),
        i = function() {
            function t(t) {
                this.impressionId = t
            }
            return t.prototype.toString = function() {
                return "ImpId" + this.impressionId
            }, t
        }(),
        _ = (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        b = function(r) {
            function t(t, e, i) {
                var o = r.call(this, t) || this;
                return o.size = e, o.networkId = i, o
            }
            return _(t, r), t.prototype.toString = function() {
                return r.prototype.toString.call(this) + "_Size" + this.size + "_NetworkId" + this.networkId
            }, t
        }(i),
        w = (y = function(t, e) {
            return (y = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            y(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        C = function(o) {
            function t(t, e) {
                var i = o.call(this, t) || this;
                return i.zoneId = e, i
            }
            return w(t, o), t.prototype.toString = function() {
                return o.prototype.toString.call(this) + "_ZoneId" + this.zoneId
            }, t
        }(i),
        T = function() {
            function t(t, e) {
                this.useZoneIdIntegration = t, this.networkId = e
            }
            return t.prototype.createKeysFromSlotRequest = function(t) {
                if (this.useZoneIdIntegration) return [new C(t.impId, t.zoneId)];
                for (var e = [], i = 0, o = t.sizes; i < o.length; i++) {
                    var r = o[i];
                    e.push(new b(t.impId, r, this.networkId))
                }
                return e
            }, t.prototype.createKeyFromSlotResponse = function(t) {
                return this.useZoneIdIntegration ? new C(t.impid, t.zoneid) : new b(t.impid, new S(t.width, t.height), this.networkId)
            }, t.prototype.createKeyFromBid = function(t) {
                return this.useZoneIdIntegration ? new C(t.impressionId, t.zoneId) : new b(t.impressionId, new S(t.width, t.height), this.networkId)
            }, t
        }(),
        O = function() {
            function l(t, e) {
                this.localStorageHelper = new n, this.localStorageEnabled = this.localStorageHelper.checkLocalStorage(), this.slotKeyFactory = new T(t, e)
            }
            return l.useZoneIdIntegration = function(t, e) {
                return void 0 === e || 0 === t.filter(function(t) {
                    return void 0 !== t.sizes && 0 < t.sizes.length
                }).length
            }, l.prototype.get = function(t) {
                var e = l.BID_KEY_PREFIX + t.toString(),
                    i = this.localStorageHelper.getItem(e),
                    o = i && v(i);
                return o && "object" == typeof o && "bids" in o ? (o.bids = o.bids.filter(function(t) {
                    return t.expiration > f()
                }), o) : {
                    bids: []
                }
            }, l.prototype.set = function(t, e) {
                var i = l.BID_KEY_PREFIX + t.toString();
                0 < e.bids.length || e.no_bid && e.no_bid > f() ? this.localStorageHelper.setItem(i, JSON.stringify(e)) : this.localStorageHelper.removeItem(i)
            }, l.prototype.filterNoBidSlots = function(t) {
                for (var e = [], i = 0, o = t; i < o.length; i++) {
                    for (var r = o[i], n = [], s = 0, a = this.slotKeyFactory.createKeysFromSlotRequest(r); s < a.length; s++) {
                        var d = a[s];
                        this.getBid(d, 0) !== l.NO_BID && (d instanceof b ? n.push(d.size) : e.push(r))
                    }
                    0 < n.length && (r.sizes = n, e.push(r))
                }
                return e
            }, l.prototype.getRequestCachedBids = function(t, e) {
                void 0 === e && (e = 5e3);
                for (var i = [], o = 0, r = t; o < r.length; o++)
                    for (var n = r[o], s = 0, a = this.slotKeyFactory.createKeysFromSlotRequest(n); s < a.length; s++) {
                        var d = a[s],
                            c = this.getBid(d, e);
                        void 0 !== c && c !== l.NO_BID && i.push(c)
                    }
                return i
            }, l.prototype.getBid = function(t, e) {
                if (void 0 === e && (e = 5e3), this.localStorageEnabled) {
                    var i = this.get(t);
                    if (i.no_bid && i.no_bid > f()) return l.NO_BID;
                    if (0 < e)
                        for (var o = 0, r = i.bids; o < r.length; o++) {
                            var n = r[o];
                            if (new E(l.BID_KEY_PREFIX + n.bid.slotid).tryAcquire(e)) return n.bid
                        }
                }
            }, l.prototype.storeRequestNoBid = function(t, e) {
                for (var i = 0, o = this.slotKeyFactory.createKeysFromSlotRequest(t); i < o.length; i++) {
                    var r = o[i];
                    this.storeNoBid(r, e)
                }
            }, l.prototype.storeResponseBid = function(e, i) {
                var t = this.slotKeyFactory.createKeyFromSlotResponse(e);
                this.modifyCache(t, function(t) {
                    t.bids.push({
                        bid: e,
                        expiration: f() + 1e3 * i
                    })
                })
            }, l.prototype.storeNoBid = function(t, e) {
                this.modifyCache(t, function(t) {
                    t.no_bid = Math.max(t.no_bid || 0, f() + 1e3 * e)
                })
            }, l.prototype.removeBid = function(i) {
                var t = this.slotKeyFactory.createKeyFromBid(i);
                this.modifyCache(t, function(t) {
                    for (var e = 0; e < t.bids.length; e++)
                        if (t.bids[e].bid.slotid === i.slotId) return void t.bids.splice(e, 1)
                }), new E(t.toString()).release()
            }, l.prototype.modifyCache = function(e, i) {
                var o = this;
                if (this.localStorageEnabled) {
                    var r = new E(e.toString());
                    r.acquire(function() {
                        var t = o.get(e);
                        i(t), o.set(e, t), r.release()
                    }, 1e3)
                }
            }, l.NO_BID = "nobid", l.BID_KEY_PREFIX = "criteo_pt_cdb_bidcache_", l
        }(),
        M = function() {
            function t(t, e, i) {
                var o = O.useZoneIdIntegration(e, i);
                this.bidManager = new O(o, i), this.silentModeManager = new h, this.context = t
            }
            return t.prototype.filterNoBidSlots = function(t) {
                var e = this.bidManager.filterNoBidSlots(t);
                return this.context.shouldIgnoreSilentMode ? (e.length !== t.length && this.context.setSilentModeIgnored && this.context.setSilentModeIgnored(), t) : e
            }, t.prototype.silentModeEnabled = function() {
                var t = !1;
                return this.silentModeManager.silentModeEnabled() && (this.context.shouldIgnoreSilentMode && this.context.setSilentModeIgnored ? this.context.setSilentModeIgnored() : t = !0), t
            }, t.prototype.getCachedBids = function(t) {
                return this.bidManager.getRequestCachedBids(t)
            }, t.prototype.removeBid = function(t) {
                this.bidManager.removeBid(t)
            }, t.prototype.handleResponse = function(t, e, i, o) {
                var r = i.time_to_next_call;
                0 < r && (g.Debug("Global silent mode enabled for " + r + " seconds"), this.silentModeManager.enableSilentMode(1e3 * r));
                var n = {};
                if (i.slots)
                    for (var s = 0, a = i.slots; s < a.length; s++) {
                        (f = a[s]).ttl && (n[f.imp_id] = f.ttl)
                    }
                if (e.slots)
                    for (var d = 0, c = e.slots; d < c.length; d++) {
                        var l = 0;
                        (f = c[d]).slotid in n && (l = n[f.slotid], delete n[f.slotid]), o && 0 < l && (g.Debug("Post-timeout bid for slot '" + f.impid + "' cached for " + l + " seconds"), this.bidManager.storeResponseBid(f, l))
                    }
                for (var u in n)
                    if (n.hasOwnProperty(u))
                        for (var p = 0, h = t; p < h.length; p++) {
                            var f;
                            if ((f = h[p]).slotId === u) {
                                l = n[u];
                                g.Debug("Silent mode for slot '" + f.impId + "' enabled for " + l + " seconds"), this.bidManager.storeRequestNoBid(f, l)
                            }
                        }
            }, t
        }(),
        A = function(t, e, i, o, r, n, s, a, d, c, l, u, p) {
            this.publisherTagVersion = t, this.slots = e, this.elapsed = i, this.isTimeout = o, this.pageLoadElapsed = r, this.adapterStartElapsed = n, this.cdbCallStartElapsed = s, this.cdbCallEndElapsed = a, this.adapterEndElapsed = d, this.setTargetingElapsed = c, this.adapterTimeout = l, this.adapterIsTimeout = u, this.timeToFirstByte = p
        },
        D = function(t, e, i, o, r) {
            this.impressionId = t, this.zoneId = e, this.adUnitId = i, this.cachedBidUsed = o, this.isDsc = r
        },
        R = function() {
            function t() {
                this.elapsed = 0, this.isTimeout = !1, this.pageLoadElapsed = 0, this.adapterStartElapsed = 0, this.cdbCallStartElapsed = 0, this.cdbCallEndElapsed = 0, this.adapterEndElapsed = 0, this.cachedBidsReturned = [], this.slots = []
            }
            return t.prototype.withElapsed = function(t) {
                return this.elapsed = Math.round(t), this
            }, t.prototype.withIsTimeout = function(t) {
                return this.isTimeout = t, this
            }, t.prototype.withPageLoadElapsed = function(t) {
                return this.pageLoadElapsed = Math.round(t), this
            }, t.prototype.withAdapterStartElapsed = function(t) {
                return this.adapterStartElapsed = Math.round(t), this
            }, t.prototype.withCdbCallStartElapsed = function(t) {
                return this.cdbCallStartElapsed = Math.round(t), this
            }, t.prototype.withCdbCallEndElapsed = function(t) {
                return this.cdbCallEndElapsed = Math.round(t), this
            }, t.prototype.withSetTargetingElapsed = function(t) {
                return this.setTargetingElapsed = Math.round(t), this
            }, t.prototype.withAdapterEndElapsed = function(t) {
                return this.adapterEndElapsed = Math.round(t), this
            }, t.prototype.withAdapterTimeout = function(t) {
                return this.adapterTimeout = t && Math.round(t), this
            }, t.prototype.withCachedBidsReturned = function(t) {
                return this.cachedBidsReturned = t, this
            }, t.prototype.withTimeToFirstByte = function(t) {
                return this.timeToFirstByte = t && Math.round(t), this
            }, t.prototype.addSlot = function(t, e, i, o) {
                var r = 0 < this.cachedBidsReturned.filter(function(t) {
                    return t.impid === i && t.zoneid === e
                }).length;
                return this.slots.push(new D(t, e, i, r, o)), this
            }, t.prototype.build = function() {
                var t;
                return void 0 !== this.adapterTimeout && (t = this.adapterEndElapsed > this.adapterTimeout), new A(74, this.slots, this.elapsed, this.isTimeout, this.pageLoadElapsed, this.adapterStartElapsed, this.cdbCallStartElapsed, this.cdbCallEndElapsed, this.adapterEndElapsed, this.setTargetingElapsed, this.adapterTimeout, t, this.timeToFirstByte)
            }, t
        }(),
        B = function() {
            function r() {
                this.localStorageHelper = new n, this.localStorageEnabled = this.localStorageHelper.checkLocalStorage()
            }
            return r.prototype.getMetrics = function(t) {
                if (this.localStorageEnabled) {
                    var e = r.METRICS_STORAGE_KEY,
                        i = this.localStorageHelper.getItem(e),
                        o = i ? v(i) : [];
                    return t && this.localStorageHelper.removeItem(e), o
                }
                return []
            }, r.prototype.setMetrics = function(t) {
                if (this.localStorageEnabled) {
                    var e = r.METRICS_STORAGE_KEY;
                    this.localStorageHelper.setItem(e, JSON.stringify(t), 36e5)
                }
            }, r.prototype.storeMetric = function(t) {
                if (this.localStorageEnabled) {
                    var e = this.getMetrics(!1);
                    e.push(t), this.setMetrics(e)
                }
            }, r.METRICS_STORAGE_KEY = "criteo_pt_cdb_metrics", r
        }();

    function x(t) {
        switch (t.toLowerCase()) {
            case "amp":
                return I.AMP;
            default:
                return I.Unspecified
        }
    }(e = I || (I = {}))[e.Unspecified = 0] = "Unspecified", e[e.AMP = 1] = "AMP";
    var k = function() {
        function t(t, e, i, o, r, n, s, a, d, c, l) {
            this.slots = t, this.context = e, this.metricsManager = i, this.urlBuilder = o, this.profileId = r, this.integrationMode = n || I.Unspecified, this.networkId = s, this.adapterVersion = a, this.gdprConsent = d, this.wrapperVersion = c, this.viewportComputer = l
        }
        return t.prototype.isValid = function() {
            return 0 < this.slots.length
        }, t.prototype.getRequest = function() {
            for (var t = [], e = 0, i = this.slots; e < i.length; e++) {
                var o = i[e],
                    r = {
                        slotid: o.slotId,
                        impid: o.impId
                    };
                if (void 0 !== o.zoneId && (r.zoneid = o.zoneId), void 0 !== o.nativeCallback && (r.native = !0), void 0 !== o.transactionId && (r.transactionid = o.transactionId), void 0 !== o.publisherSubId && (r.publishersubid = o.publisherSubId), void 0 !== o.sizes) {
                    for (var n = [], s = 0, a = o.sizes; s < a.length; s++) {
                        var d = a[s];
                        n.push(d.width + "x" + d.height)
                    }
                    r.sizes = n
                }
                if (void 0 !== o.video) {
                    var c = {
                        playersizes: this.parsePlayerSizes(o.video.playersize),
                        mimes: o.video.mimes,
                        protocols: o.video.protocols,
                        maxduration: o.video.maxduration,
                        api: o.video.api,
                        skip: o.video.skip,
                        placement: o.video.placement,
                        playbackmethod: o.video.playbackmethod,
                        minduration: o.video.minduration,
                        startdelay: o.video.startdelay
                    };
                    r.video = c
                }
                if (void 0 !== this.viewportComputer) {
                    var l = this.viewportComputer.getSlotPosition(o);
                    void 0 !== l && (r.position = {
                        top: l.top,
                        left: l.left
                    })
                }
                t.push(r)
            }
            var u = {
                publisher: {
                    url: this.context.highestAccessibleUrl
                },
                slots: t,
                user: {
                    ceh: this.context.ceh
                }
            };
            void 0 !== this.networkId && (u.publisher.networkid = this.networkId);
            var p = this.metricsManager.getMetrics(!0);
            if (p.length && (u.previousBidFeedback = p), this.gdprConsent && (u.gdprConsent = this.gdprConsent), void 0 !== this.viewportComputer) {
                var h = this.viewportComputer.getViewport();
                u.viewport = {
                    width: h.width,
                    height: h.height,
                    scrollTop: h.scrollTop,
                    scrollLeft: h.scrollLeft
                }
            }
            return u
        }, t.prototype.parsePlayerSize = function(t) {
            return t[0] + "x" + t[1]
        }, t.prototype.parsePlayerSizes = function(t) {
            var e = this;
            return Array.isArray(t[0]) ? t.map(function(t) {
                return e.parsePlayerSize(t)
            }) : [this.parsePlayerSize(t)]
        }, t.prototype.getUrl = function() {
            return this.urlBuilder.buildUrl(this.profileId, this.context, this.integrationMode, this.adapterVersion, this.wrapperVersion)
        }, t
    }();

    function N(t) {
        var e = {
            slots: void 0,
            time_to_next_call: 0
        };
        return void 0 !== t.exd && (void 0 !== t.exd.time_to_next_call && (e.time_to_next_call = t.exd.time_to_next_call), e.slots = t.exd.slots, delete t.exd), e
    }

    function U() {
        var i = (new Date).getTime();
        return "undefined" != typeof performance && "function" == typeof performance.now && (i += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var e = (i + 16 * Math.random()) % 16 | 0;
            return i = Math.floor(i / 16), ("x" === t ? e : 3 & e | 8).toString(16)
        })
    }
    var L = function(t, e, i, o, r, n, s, a) {
            this.slotId = U().replace(/-/g, ""), this.impId = t, this.zoneId = e, this.nativeCallback = i, this.transactionId = o, this.sizes = r, this.publisherSubId = n, this.mediaTypes = s, this.video = a
        },
        P = function(t, e, i, o, r, n, s, a, d, c) {
            this.playersize = t, this.mimes = e, this.protocols = i, this.maxduration = o, this.api = r, this.skip = n, this.placement = s, this.playbackmethod = a, this.minduration = d, this.startdelay = c
        };
    var F = function() {
            function t(t, e, i) {
                this.hasSetTargetingBeenCalled = !1, this.builder = t, this.timer = void 0 !== e ? d.CreateWithStartTime(e) : d.CreateRunning();
                var o = this.timer.elapsed();
                this.builder.withAdapterStartElapsed(o), this.builder.withPageLoadElapsed(d.TimeSincePageLoad() - o), void 0 !== i && this.builder.withAdapterTimeout(i)
            }
            return t.prototype.sendRequest = function(t) {
                this.url = t, this.sendTime = d.CreateRunning(), this.builder.withCdbCallStartElapsed(this.timer.elapsed())
            }, t.prototype.requestReceived = function(t) {
                void 0 === t && (t = !1), this.builder.withElapsed(function(t) {
                    if (window.performance && window.performance.getEntries)
                        for (var e = window.performance.getEntries(), i = e.length - 1; 0 <= i; --i) {
                            var o = e[i];
                            if (o.name === t && o.duration) return Math.round(o.duration)
                        }
                }(this.url) || this.sendTime.elapsed()), this.builder.withCdbCallEndElapsed(this.timer.elapsed()), this.builder.withIsTimeout(t)
            }, t.prototype.setTargeting = function() {
                this.hasSetTargetingBeenCalled || (this.builder.withSetTargetingElapsed(this.timer.elapsed()), this.hasSetTargetingBeenCalled = !0)
            }, t.prototype.finish = function(t) {
                if (this.builder.withAdapterEndElapsed(this.timer.elapsed()), t && 0 !== t.length)
                    for (var e = 0, i = t; e < i.length; e++) {
                        var o = i[e];
                        this.builder.addSlot(o.imp_id, o.zone_id, o.ad_unit_id, o.is_dsc)
                    } else this.builder.addSlot("");
                return this.builder.withTimeToFirstByte(this.computeTimeToFirstByte()), this.build()
            }, t.prototype.computeTimeToFirstByte = function() {
                if (void 0 !== window.performance) {
                    var t = window.performance.getEntriesByType("resource");
                    if (void 0 !== t) {
                        var e = t.filter(function(t) {
                            return 0 <= t.name.indexOf("cdb")
                        });
                        if (void 0 !== e && 0 < e.length) {
                            var i = e[e.length - 1],
                                o = i.responseStart,
                                r = i.requestStart;
                            if (void 0 !== o && void 0 !== r) return o - r
                        }
                    }
                }
            }, t.prototype.build = function() {
                return this.builder.build()
            }, t
        }(),
        K = function() {
            function t() {}
            return t.generateCacheBuster = function() {
                return Math.floor(99999999999 * Math.random())
            }, t
        }(),
        q = function() {
            function s(t) {
                void 0 === t && (t = !1), this.auditMode = t
            }
            return s.prototype.buildUrl = function(t, e, i, o, r) {
                void 0 === i && (i = I.Unspecified);
                var n = s.CRITEO_BIDDER_URL + this.getHandlerPath();
                return n += "?ptv=74", !0 === e.isAdBlocked && (n += "&abp=1"), n += "&profileId=" + String(t), n += e.ctoIdOnPublisherDomain ? "&idcpy=" + e.ctoIdOnPublisherDomain : "", n += e.idfs ? "&idfs=" + e.idfs : "", n += e.secureId ? "&sid=" + e.secureId : "", n += e.isOptOut ? "&optout=1" : "", n += e.bundle ? "&bundle=" + e.bundle : "", i !== I.Unspecified && (n += "&im=" + i), void 0 !== o && (n += "&av=" + String(o)), void 0 !== r && (n += "&wv=" + encodeURIComponent(r)), n += e.silentModeIgnored ? "&smi=1" : "", n += "&cb=" + String(K.generateCacheBuster()), n += e.getContextFlags()
            }, s.prototype.getHandlerPath = function() {
                return this.auditMode ? s.CRITEO_BIDDER_AUDIT_HANDLER : s.CRITEO_BIDDER_HANDLER
            }, s.CRITEO_BIDDER_URL = "https://bidder.criteo.com/", s.CRITEO_BIDDER_HANDLER = "cdb", s.CRITEO_BIDDER_AUDIT_HANDLER = "prebid/audit", s
        }();

    function H(t) {
        var e = "number" == typeof window.PREBID_TIMEOUT ? window.PREBID_TIMEOUT : void 0;
        return t && e ? Math.min(t, e) : t || e || void 0
    }
    var z, G, W = void 0 === window.pbjs;
    (G = z || (z = {})).Native = "native", G.Banner = "banner", G.Video = "video";
    var V, j, X = function() {
            function o(t, e, i, o, r) {
                var n, s, a;
                this.ProfileIdPTPrefetch = 274, this.timer = new F(new R, o.auctionStart, H(o.timeout)), this.auctionId = o.auctionId, this.bidRequests = i, this.slots = [];
                for (var d = 0, c = i; d < c.length; d++) {
                    var l = c[d];
                    this.slots.push(new L(l.adUnitCode, l.params.zoneId, l.params.nativeCallback, l.transactionId, l.sizes.map(function(t) {
                        return new S(t[0], t[1])
                    }), l.params.publisherSubId, l.mediaTypes, this.getVideoInfoFromBidRequest(l))), n = l.params.networkId || n, a = o.ceh, window.criteo_pubtag.context.ceh = a, l.params.integrationMode && (s = x(l.params.integrationMode))
                }
                var u = {};
                o.gdprConsent && (void 0 !== o.gdprConsent.consentString && (u.consentData = o.gdprConsent.consentString), void 0 !== o.gdprConsent.gdprApplies && (u.gdprApplies = !!o.gdprConsent.gdprApplies), o.gdprConsent.vendorData && o.gdprConsent.vendorData.vendorConsents && void 0 !== o.gdprConsent.vendorData.vendorConsents[p.toString(10)] && (u.consentGiven = !!o.gdprConsent.vendorData.vendorConsents[p.toString(10)])), this.metricsManager = new B, this.cache = new M(window.criteo_pubtag.context, this.slots, n), this.requestBuilder = new k(this.cache.filterNoBidSlots(this.slots), window.criteo_pubtag.context, this.metricsManager, new q(!1), W ? this.ProfileIdPTPrefetch : t, s, n, e, u, r), this.url = this.requestBuilder.getUrl(), window.Criteo.prebid_adapters = window.Criteo.prebid_adapters || {}, window.Criteo.prebid_adapters[this.auctionId] = this
            }
            return o.prototype.buildCdbUrl = function() {
                return this.url
            }, o.prototype.buildCdbRequest = function() {
                if (this.cache.silentModeEnabled()) g.Debug("Request ignored because the global silent mode is enabled");
                else {
                    if (this.requestBuilder.isValid()) return this.timer.sendRequest(this.url), this.requestBuilder.getRequest();
                    g.Debug("Request ignored because it doesnt contain any slot")
                }
            }, o.GetAllAdapters = function() {
                return window.Criteo.prebid_adapters
            }, o.GetAdapter = function(t) {
                var e = "string" == typeof t ? t : t.bidRequests[0].auctionId,
                    i = o.GetAllAdapters();
                if (i && e in i) return i[e]
            }, o.prototype.createCriteoNativeAdWithCallback = function(t, e, i) {
                return window.criteo_prebid_native_slots = window.criteo_prebid_native_slots || {}, window.criteo_prebid_native_slots[t] = {
                    callback: i,
                    payload: e
                }, '<script type="text/javascript">\n            var win = window;\n            for (var i = 0; i < 10; ++i) {\n                win = win.parent;\n                if (win.criteo_prebid_native_slots) {\n                    var responseSlot = win.criteo_prebid_native_slots["' + t + '"];\n                    responseSlot.callback(responseSlot.payload);\n                    break;\n                }\n            }\n        <\/script>'
            }, o.prototype.createPrebidNativeAd = function(t) {
                return {
                    title: t.products[0].title,
                    body: t.products[0].description,
                    sponsoredBy: t.advertiser.description,
                    icon: t.advertiser.logo,
                    image: t.products[0].image,
                    clickUrl: t.products[0].click_url,
                    privacyLink: t.privacy.optout_click_url,
                    privacyIcon: t.privacy.optout_image_url,
                    cta: t.products[0].call_to_action,
                    price: t.products[0].price,
                    impressionTrackers: t.impression_pixels.map(function(t) {
                        return t.url
                    })
                }
            }, o.prototype.getBidRequestForSlot = function(t) {
                for (var e = 0, i = this.bidRequests; e < i.length; e++) {
                    var o = i[e];
                    if (o.adUnitCode === t.impid && (!o.params.zoneId || parseInt(o.params.zoneId, 10) === t.zoneid)) return o
                }
            }, o.prototype.getVideoInfoFromBidRequest = function(t) {
                if (this.hasVideoMediaType(t)) return new P(t.mediaTypes.video.playerSize, t.mediaTypes.video.mimes, t.mediaTypes.video.protocols, t.mediaTypes.video.maxduration, t.mediaTypes.video.api, t.params.video.skip, t.params.video.placement, t.params.video.playbackmethod, t.params.video.minduration, t.params.video.startdelay)
            }, o.prototype.hasVideoMediaType = function(t) {
                return void 0 !== t.params && void 0 !== t.params.video && (void 0 !== t.mediaTypes && void 0 !== t.mediaTypes.video)
            }, o.prototype.interpretResponse = function(t, e) {
                this.timer.requestReceived();
                var i = N(t),
                    o = {};
                if (void 0 !== i.slots)
                    for (var r = 0, n = i.slots; r < n.length; r++) {
                        o[(c = n[r]).imp_id] = c
                    }
                var s = [];
                if (t.slots && Array.isArray(t.slots))
                    for (var a = 0, d = t.slots; a < d.length; a++) {
                        var c = d[a],
                            l = this.getBidRequestForSlot(c);
                        if (l) {
                            var u = l.bidId,
                                p = c.ttl || o[c.slotid] && o[c.slotid].ttl || 60,
                                h = {
                                    requestId: u,
                                    adId: U(),
                                    cpm: c.cpm,
                                    currency: c.currency,
                                    netRevenue: !0,
                                    ttl: p,
                                    creativeId: u,
                                    width: c.width,
                                    height: c.height,
                                    dealId: c.deal
                                };
                            c.native ? l.params.nativeCallback ? h.ad = this.createCriteoNativeAdWithCallback(u, c.native, l.params.nativeCallback) : (h.native = this.createPrebidNativeAd(c.native), h.mediaType = z.Native) : c.video ? (h.vastUrl = c.displayurl, h.mediaType = z.Video) : h.ad = c.creative, s.push(h)
                        } else g.Error('Could not get bid request for slot "' + c + '"')
                    }
                return this.cache.handleResponse(this.slots, t, i, !1), this.metricsManager.storeMetric(this.timer.finish(i.slots)), s
            }, o.prototype.handleBidWon = function(t) {
                this.updateMetric(t, function(t) {
                    t.adapterBidWon = !0
                })
            }, o.prototype.handleBidTimeout = function() {
                this.timer.requestReceived(!0), this.metricsManager.storeMetric(this.timer.finish())
            }, o.prototype.handleSetTargeting = function(t) {
                var e = this;
                this.timer.setTargeting(), this.updateMetric(t, function() {
                    return e.timer.build()
                })
            }, o.prototype.updateMetric = function(t, e) {
                for (var i = this.metricsManager.getMetrics(!1), o = 0; o < i.length; ++o)
                    for (var r = 0, n = i[o].slots; r < n.length; r++) {
                        var s = n[r];
                        if (s.adUnitId === t.adUnitCode) {
                            var a = e(s);
                            a && (i[o] = a)
                        }
                    }
                this.metricsManager.setMetrics(i)
            }, o
        }(),
        Y = function() {
            function t(t) {
                this.name = t
            }
            return t.prototype.eval = function(t) {}, t
        }(),
        J = function() {
            function s(t, e, i, o) {
                void 0 === o && (o = !0), this.url = t, this.data = e, this.contentType = i, this.withCredentials = o
            }
            return s.prototype.send = function(t, e, i, o) {
                var r = void 0 !== this.data ? "POST" : "GET",
                    n = this.getXMLHttpRequest(r, t, e, i, o);
                if (void 0 !== n) n.send(this.data);
                else {
                    var s = this.getXDomainRequest(r, t, e, i, o);
                    void 0 !== s && s.send(this.data)
                }
            }, s.prototype.getXMLHttpRequest = function(t, e, i, o, r) {
                var n = new XMLHttpRequest;
                if ("withCredentials" in n) return n.open(t, this.url, !0), n.timeout = r || s.LOCAL_PASSBACK_TIMEOUT, this.contentType ? n.setRequestHeader("Content-type", this.contentType) : "POST" === t && n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.withCredentials = this.withCredentials, n.onload = function() {
                    4 === n.readyState && 200 === n.status ? e(n.responseText) : i(n.readyState, n.status)
                }, n.onerror = function() {
                    i(void 0, void 0)
                }, o && (n.ontimeout = o), n
            }, s.prototype.getXDomainRequest = function(t, e, i, o, r) {
                if ("undefined" != typeof XDomainRequest) {
                    var n = new XDomainRequest;
                    return n.timeout = r || s.LOCAL_PASSBACK_TIMEOUT, n.open(t, this.url), n.onload = function() {
                        void 0 !== n.responseText ? e(n.responseText) : i(void 0, void 0)
                    }, n.onerror && (n.onerror = function() {
                        i(void 0, void 0)
                    }), n.ontimeout && o && (n.ontimeout = o), n
                }
            }, s.LOCAL_PASSBACK_TIMEOUT = 3e4, s
        }(),
        Z = (V = function(t, e) {
            return (V = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            V(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        Q = function(p) {
            function h(t, e, i, o, r, n, s, a, d, c, l) {
                var u = p.call(this, h.NAME) || this;
                return u.profileId = t, u.urlBuilder = e, u.slots = i, u.metricBuilder = new R, u.metricsManager = new B, u.callbackSuccess = o, u.callbackError = r, u.callbackTimeout = n, u.timeout = s, u.networkId = a, u.integrationMode = d, u.adapterVersion = c, u.viewportComputer = l, u
            }
            return Z(h, p), h.prototype.setGDPRConsent = function(t) {
                this.gdprConsent = t
            }, h.prototype.getMetricBuilder = function() {
                return this.metricBuilder
            }, h.prototype.eval = function(t) {
                this.evalWithTimeout(t, void 0)
            }, h.prototype.evalWithTimeout = function(t, e) {
                var o = this,
                    i = h.getCriteoAdapterBidRequest(),
                    r = h.getRequestAuctionStart(i),
                    n = e || H(i && i.timeout),
                    s = new F(this.metricBuilder, r, n),
                    a = new k(this.slots, t.context, this.metricsManager, this.urlBuilder, this.profileId, this.integrationMode, this.networkId, this.adapterVersion, this.gdprConsent, void 0, this.viewportComputer);
                if (a.isValid() && "undefined" != typeof JSON) {
                    var d = a.getRequest(),
                        c = JSON.stringify(d),
                        l = a.getUrl(),
                        u = new J(l, c, "application/x-www-form-urlencoded");
                    s.sendRequest(l), u.send(function(t) {
                        s.requestReceived();
                        var e = v(t) || {},
                            i = N(e);
                        void 0 !== o.callbackSuccess && o.callbackSuccess(JSON.stringify(e), i), o.metricsManager.storeMetric(s.finish(i.slots))
                    }, function(t, e) {
                        s.requestReceived(), void 0 !== o.callbackError && o.callbackError(t, e), o.metricsManager.storeMetric(s.finish())
                    }, function() {
                        s.requestReceived(!0), void 0 !== o.callbackTimeout && o.callbackTimeout(), o.metricsManager.storeMetric(s.finish())
                    }, this.timeout)
                } else this.callbackError(void 0, void 0)
            }, h.getCriteoAdapterBidRequest = function() {
                try {
                    return window.pbjs._bidsRequested.find(function(t) {
                        return "criteo" === t.bidderCode
                    })
                } catch (t) {
                    return
                }
            }, h.getRequestAuctionStart = function(t) {
                return t && t.auctionStart
            }, h.NAME = "directbidding", h
        }(Y),
        $ = (j = function(t, e) {
            return (j = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            j(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        tt = function(h) {
            function f(t, e, i, o, r, n, s, a, d, c, l) {
                var u = h.call(this, f.NAME) || this,
                    p = Math.max(10 * (s || 3e3), 3e3);
                return u.cache = new M(window.criteo_pubtag.context, i, a), u.directBiddingEvent = new Q(t, e, u.cache.filterNoBidSlots(i), function(t, e) {
                    return u.onSuccess(t, e)
                }, function(t, e) {
                    return u.onError(t, e)
                }, function() {
                    return u.onHttpTimeout()
                }, p, a, d, c, l), u.slots = i, u.callbackSuccess = o, u.callbackError = r, u.callbackTimeout = n, u.timeout = s, u.hasTimeouted = !1, u.hasResponded = !1, u
            }
            return $(f, h), f.prototype.eval = function(e) {
                var t, i = this;
                r(t = window) || void 0 !== m(t) ? function(t, i, e) {
                    void 0 === e && (e = parseInt("10000", 10));
                    var o = d.CreateRunning(),
                        r = !1,
                        n = setTimeout(function() {
                            r = !0, g.Warning("Timeout: Unable to resolve GDPR consent after " + e + "ms"), i(void 0)
                        }, e);
                    u(t, "getConsentData", null, function(t, e) {
                        r || (clearTimeout(n), e ? (g.Debug("Consent retrieved in " + o.elapsed() + "ms"), l(t, i)) : (g.Warning("Error retrieving GDPR consent data from CMP"), i(void 0)))
                    })
                }(window, function(t) {
                    i.evalWithCmp(e, t)
                }) : this.evalWithCmp(e, void 0)
            }, f.prototype.evalWithCmp = function(t, e) {
                var i = this;
                if (this.cache.silentModeEnabled()) return g.Debug("Request ignored because the global silent mode is enabled"), void this.callbackSuccess("", void 0);
                setTimeout(function() {
                    return i.onTimeout()
                }, this.timeout || 3e3), this.directBiddingEvent.setGDPRConsent(e), this.directBiddingEvent.evalWithTimeout(t, this.timeout)
            }, f.prototype.onSuccess = function(t, e) {
                if (this.hasResponded = !0, void 0 !== e) {
                    var i = v(t);
                    this.cache.handleResponse(this.slots, i, e, this.hasTimeouted)
                }
                this.hasTimeouted || this.callbackSuccess(t, e)
            }, f.prototype.onError = function(t, e) {
                this.hasResponded = !0, this.hasTimeouted || this.callbackError(t, e)
            }, f.prototype.onHttpTimeout = function() {
                this.hasResponded = !0, this.hasTimeouted || this.callbackTimeout()
            }, f.prototype.onTimeout = function() {
                if (!this.hasResponded) {
                    this.hasTimeouted = !0;
                    var t = this.cache.getCachedBids(this.slots);
                    0 === t.length ? this.callbackTimeout() : (g.Debug("Cached bids returned because of timeout: ['" + t.map(function(t) {
                        return t.impid
                    }).join("', '") + "']"), this.directBiddingEvent.getMetricBuilder().withCachedBidsReturned(t), this.callbackSuccess(JSON.stringify({
                        slots: t
                    }), void 0))
                }
            }, f.prototype.getMetricBuilder = function() {
                return this.directBiddingEvent.getMetricBuilder()
            }, f.prototype.getBidCache = function() {
                return this.cache
            }, f.NAME = "directbidding", f
        }(Y),
        et = {
            prebid: "criteo_fast_bid",
            standalone: "criteo_fast_bid_standalone"
        };
    var it, ot, rt = function() {
            function t() {}
            return t.LoadPolyfills = function() {
                t.DefineIsArray(), t.DefineIndexOf(), t.DefineFilter()
            }, t.DefineIsArray = function() {
                Array.isArray || (Array.isArray = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                })
            }, t.DefineIndexOf = function() {
                Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
                    if (void 0 === e && (e = 0), void 0 === this) throw new TypeError("'this' is null or not defined");
                    var i = this.length;
                    if (0 === i) return -1;
                    if (i <= e) return -1;
                    for (var o = Math.max(0 <= e ? e : i - Math.abs(e), 0); o < i;) {
                        if (o in this && this[o] === t) return o;
                        o++
                    }
                    return -1
                })
            }, t.DefineFilter = function() {
                Array.prototype.filter || (Array.prototype.filter = function(t) {
                    if (void 0 === this || void 0 === this) throw new TypeError;
                    var e = this.length;
                    if ("function" != typeof t) throw new TypeError;
                    for (var i = [], o = 2 <= arguments.length ? arguments[1] : void 0, r = 0; r < e; r++)
                        if (r in this) {
                            var n = this[r];
                            t.call(o, n, r, this) && i.push(n)
                        }
                    return i
                })
            }, t
        }(),
        nt = function() {
            function h() {}
            return h.SetCookie = function(t, e, i, o, r) {
                void 0 === r && (r = !1);
                var n = o || document,
                    s = n.location.hostname,
                    a = new Date;
                a.setTime(a.getTime() + 60 * i * 60 * 1e3);
                var d = "expires=" + a.toUTCString();
                if (!r) return h.setCookieString(t, e, d, void 0, n), s;
                for (var c = s.split("."), l = 0; l < c.length; ++l) {
                    var u = c.slice(c.length - l - 1, c.length).join(".");
                    h.setCookieString(t, e, d, u, n);
                    var p = h.GetCookie(t, o);
                    if (p && p === e) return u
                }
                return s
            }, h.DeleteCookie = function(t, e, i) {
                void 0 === i && (i = !1), h.SetCookie(t, "", 0, e, i)
            }, h.GetCookie = function(t, e) {
                for (var i = 0, o = (e || document).cookie.split(";"); i < o.length; i++) {
                    var r = o[i],
                        n = r.substr(0, r.indexOf("=")).replace(/^\s+|\s+$/g, ""),
                        s = r.substr(r.indexOf("=") + 1);
                    if (n === t) return decodeURIComponent(s)
                }
            }, h.setCookieString = function(t, e, i, o, r) {
                var n = t + "=" + encodeURIComponent(e) + ";" + i + ";";
                o && "" !== o && (n += "domain=." + o + ";"), r.cookie = n + "path=/"
            }, h
        }();

    function st(e, i) {
        try {
            return decodeURIComponent(e)
        } catch (t) {
            return void 0 !== i ? i : e
        }
    }(ot = it || (it = {}))[ot.None = 0] = "None", ot[ot.Cookie = 1] = "Cookie", ot[ot.LocalStorage = 2] = "LocalStorage";
    var at, dt, ct = function() {
            function o(t, e, i) {
                this.isDebug = e, this.topWin = t, this.topDoc = t.document, this.localStorageHelper = new n(this.topWin), this.localStorageEnabled = this.localStorageHelper.checkLocalStorage(), this.canWriteCookies = this.checkCookiesAreWriteable(), this.topUrl = i
            }
            return o.isSafariBrowser = function() {
                return null !== navigator.userAgent.match(o.SAFARI_CHECK_REGEX)
            }, o.isAndroidBrowser = function() {
                return -1 < navigator.userAgent.toLowerCase().indexOf("android")
            }, o.isFirefoxBrowser = function() {
                return -1 < navigator.userAgent.toLowerCase().indexOf("firefox")
            }, o.prototype.synchronizeCriteoUid = function(t) {
                var e = this;
                if ((t || o.isSafariBrowser() || o.isAndroidBrowser() || o.isFirefoxBrowser()) && this.topWin.addEventListener)
                    if ("complete" === this.topDoc.readyState) this.appendGumIframeIfDoesNotExist();
                    else {
                        var i = function() {
                            e.topDoc.removeEventListener("DOMContentLoaded", i), e.topWin.removeEventListener("load", i), e.appendGumIframeIfDoesNotExist()
                        };
                        this.topWin.addEventListener("load", i, !1), this.topDoc.addEventListener("DOMContentLoaded", i, !1)
                    }
            }, o.prototype.appendGumIframeIfDoesNotExist = function() {
                var i = this,
                    t = this.createGumIframe();
                this.topDoc.getElementById(o.SYNCFRAME_ID) || (this.topWin.addEventListener("message", function(t) {
                    var e = t.data;
                    e && e.isCriteoMessage && (t.stopImmediatePropagation(), e.optout ? (i.setClientSideOptOut(), i.deleteClientSideUid(), i.deleteClientSideIdfs(), i.deleteClientSideSecureId(), i.deleteBundle()) : (e.uid && i.setClientSideUid(e.uid), e.idfs && i.setClientSideIdfs(e.idfs), e.bundle && i.setBundle(e.bundle), e.removeSid ? i.deleteClientSideSecureId() : e.sid && i.setClientSideSecureId(e.sid)))
                }, !0), this.topDoc.body.appendChild(t))
            }, o.prototype.getClientSideUid = function() {
                return this.getFromAllStorages(o.GUID_COOKIE_NAME)
            }, o.prototype.setClientSideUid = function(t) {
                this.writeOnAllStorages(o.GUID_COOKIE_NAME, t, o.GUID_RETENTION_TIME_HOUR)
            }, o.prototype.deleteClientSideUid = function() {
                this.deleteFromAllStorage(o.GUID_COOKIE_NAME)
            }, o.prototype.getBundle = function() {
                return this.getFromAllStorages(o.BUNDLE_COOKIE_NAME)
            }, o.prototype.setBundle = function(t) {
                this.writeOnAllStorages(o.BUNDLE_COOKIE_NAME, t, o.GUID_RETENTION_TIME_HOUR)
            }, o.prototype.deleteBundle = function() {
                this.deleteFromAllStorage(o.BUNDLE_COOKIE_NAME)
            }, o.prototype.getClientSideOptOut = function() {
                var t = this.getFromAllStorages(o.OPTOUT_COOKIE_NAME);
                return {
                    value: "1" === t.value,
                    origin: t.origin
                }
            }, o.prototype.setClientSideOptOut = function() {
                this.writeOnAllStorages(o.OPTOUT_COOKIE_NAME, "1", o.OPTOUT_RETENTION_TIME_HOUR)
            }, o.prototype.deleteClientSideIdfs = function() {
                this.deleteFromAllStorage(o.IDFS_COOKIE_NAME)
            }, o.prototype.getClientSideIdfs = function() {
                return this.getFromAllStorages(o.IDFS_COOKIE_NAME)
            }, o.prototype.setClientSideIdfs = function(t) {
                this.writeOnAllStorages(o.IDFS_COOKIE_NAME, t, o.GUID_RETENTION_TIME_HOUR)
            }, o.prototype.getClientSideSecureId = function() {
                return this.getFromAllStorages(o.SECURE_ID_COOKIE_NAME)
            }, o.prototype.setClientSideSecureId = function(t) {
                this.writeOnAllStorages(o.SECURE_ID_COOKIE_NAME, t, o.GUID_RETENTION_TIME_HOUR)
            }, o.prototype.deleteClientSideSecureId = function() {
                this.deleteFromAllStorage(o.SECURE_ID_COOKIE_NAME)
            }, o.prototype.getLocalWebId = function() {
                var t = this.getFromAllStorages(o.LOCAL_WEB_ID_COOKIE_NAME);
                if (this.canWriteCookies) {
                    var e = t.value;
                    e || (e = U()), this.writeOnAllStorages(o.LOCAL_WEB_ID_COOKIE_NAME, String(e), o.GUID_RETENTION_TIME_HOUR), t = this.getFromAllStorages(o.LOCAL_WEB_ID_COOKIE_NAME)
                }
                return t.value && t || {
                    value: "NA",
                    origin: it.None
                }
            }, o.prototype.checkCookiesAreWriteable = function() {
                var t = "cto_writeable";
                nt.SetCookie(t, "1", 1, this.topDoc, !0);
                var e = "1" === nt.GetCookie(t, this.topDoc);
                return nt.DeleteCookie(t, this.topDoc, !0), e
            }, o.prototype.createGumIframe = function() {
                var t = this.topDoc.createElement("iframe"),
                    e = this.buildSyncframeSrc();
                return t.src = e, t.id = o.SYNCFRAME_ID, t.style.display = "none", t
            }, o.prototype.writeOnAllStorages = function(t, e, i) {
                this.localStorageEnabled && this.localStorageHelper.setItem(t, e), nt.SetCookie(t, e, i, this.topDoc, !0)
            }, o.prototype.getFromAllStorages = function(t) {
                var e, i = nt.GetCookie(t, this.topDoc);
                return this.localStorageEnabled && (e = this.localStorageHelper.getItem(t) || void 0), {
                    value: i || e,
                    origin: (i && it.Cookie) | (e && it.LocalStorage)
                }
            }, o.prototype.deleteFromAllStorage = function(t) {
                nt.DeleteCookie(t, this.topDoc, !0), this.localStorageEnabled && this.localStorageHelper.removeItem(t)
            }, o.prototype.getTld = function() {
                var t = nt.SetCookie(o.TLD_TEST_COOKIE_NAME, "test", 1, this.topDoc, !0);
                return nt.DeleteCookie(o.TLD_TEST_COOKIE_NAME, this.topDoc, !0), t
            }, o.prototype.buildSyncframeSrc = function() {
                var t, e, i = this.getClientSideUid(),
                    o = this.getClientSideIdfs(),
                    r = this.getClientSideOptOut(),
                    n = this.getClientSideSecureId(),
                    s = this.getLocalWebId(),
                    a = this.getBundle(),
                    d = this.getTld(),
                    c = encodeURIComponent((t = this.topUrl, e = document.createElement("a"), e.href = t, {
                        protocol: e.protocol,
                        host: e.host,
                        hostname: e.hostname,
                        pathname: "/" === e.pathname[0] ? e.pathname.slice(1) : e.pathname,
                        search: e.search,
                        href: e.href
                    }).hostname),
                    l = this.canWriteCookies,
                    u = "https://gum.criteo.com/syncframe?topUrl=" + c + (this.isDebug ? "&debug=1" : "");
                return u += "#" + JSON.stringify({
                    optout: r,
                    uid: i,
                    idfs: o,
                    sid: n,
                    origin: "publishertag",
                    version: 74,
                    lwid: s,
                    tld: d,
                    bundle: a,
                    topUrl: c,
                    cw: l
                })
            }, o.GUID_COOKIE_NAME = "cto_idcpy", o.GUID_RETENTION_TIME_HOUR = 9360, o.IDFS_COOKIE_NAME = "cto_idfs", o.SECURE_ID_COOKIE_NAME = "cto_sid", o.LOCAL_WEB_ID_COOKIE_NAME = "cto_lwid", o.BUNDLE_COOKIE_NAME = "cto_bundle", o.OPTOUT_COOKIE_NAME = "cto_optout", o.OPTOUT_RETENTION_TIME_HOUR = 43200, o.TLD_TEST_COOKIE_NAME = "cto_pub_test_tld", o.SYNCFRAME_ID = "criteo-syncframe", o.SAFARI_CHECK_REGEX = /^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i, o
        }(),
        lt = function() {
            function t() {}
            return t.getHighestAccessibleWindow = function(t) {
                var e = t,
                    i = !1;
                try {
                    for (; e.parent.document !== e.document;) {
                        if (!e.parent.document) {
                            i = !0;
                            break
                        }
                        e = e.parent
                    }
                } catch (t) {
                    i = !0
                }
                return {
                    topFrame: e,
                    err: i
                }
            }, t.getHighestAccessibleUrl = function(t) {
                var e = t.topFrame;
                if (!t.err) return e.location.href;
                try {
                    var i = e.top.location.href;
                    if (i) return i
                } catch (t) {}
                try {
                    var o = e.location.ancestorOrigins;
                    if (o) return o[o.length - 1]
                } catch (t) {}
                return e.document.referrer
            }, t.inIframe = function() {
                try {
                    return window.self !== window.top
                } catch (t) {
                    return !0
                }
            }, t
        }();
    (dt = at || (at = {}))[dt.InFriendlyIframe = 1] = "InFriendlyIframe", dt[dt.InUnfriendlyIframe = 2] = "InUnfriendlyIframe", dt[dt.DirectIntegration = 3] = "DirectIntegration";
    var ut = function() {
            function t(t, e) {
                this.charset = t.charset || t.characterSet || "";
                var i = lt.getHighestAccessibleWindow(e);
                this.displayContext = this.getDisplayContext(i), this.highestAccessibleUrl = lt.getHighestAccessibleUrl(i), this.synchronizeCriteoUid(i, this.highestAccessibleUrl);
                var o, r = this.getQueryStringParams(this.highestAccessibleUrl);
                this.debugMode = "1" === r.pbt_debug || !1, this.noLog = "1" === r.pbt_nolog || !1, this.shouldIgnoreSilentMode = this.computeShouldIgnoreSilentMode(), this.silentModeIgnored = !1, this.debugMode && (o = s.Debug, g.LOGLEVEL = o), this.location = e.location, this.dising = !1, this.ct0 = void 0, this.wpdt0 = void 0, this.isAdBlocked = void 0, this.rtaVarNames = []
            }
            return t.prototype.getContextFlags = function() {
                var t = "";
                return t += this.debugMode ? "&debug=1" : "", t += this.noLog ? "&nolog=1" : ""
            }, t.prototype.getDisplayContext = function(t) {
                return lt.inIframe() ? t.err ? at.InUnfriendlyIframe : at.InFriendlyIframe : at.DirectIntegration
            }, t.prototype.getQueryStringParams = function(t) {
                var e = {},
                    i = t.split("?");
                if (1 < i.length)
                    for (var o = 0, r = i[1].split("&"); o < r.length; o++) {
                        var n = r[o].split("=");
                        e[st(n[0])] = st(n[1])
                    }
                return e
            }, t.prototype.synchronizeCriteoUid = function(t, e) {
                var i = t.topFrame,
                    o = new ct(i, this.debugMode, e);
                this.ctoIdOnPublisherDomain = o.getClientSideUid().value, this.isOptOut = o.getClientSideOptOut().value, this.idfs = o.getClientSideIdfs().value, this.secureId = o.getClientSideSecureId().value, this.bundle = o.getBundle().value, o.synchronizeCriteoUid()
            }, t.prototype.getIdfs = function() {
                return [this.idfs, this.secureId].join(":")
            }, t.prototype.setIdfs = function(t) {
                var e = t.split(":");
                e[0] && (this.idfs = e[0]), e[1] && (this.secureId = e[1])
            }, t.prototype.computeShouldIgnoreSilentMode = function() {
                return Math.floor(100 * Math.random()) < 5
            }, t.prototype.setSilentModeIgnored = function() {
                this.silentModeIgnored = !0
            }, t
        }(),
        pt = function() {
            this.bids = {}, this.lineItemRanges = [], this.impIds = []
        };
    var ht, ft, gt, vt, mt, yt = function() {
        function t() {
            this.standaloneBidder = new pt, this.events = [], this.context = new ut(document, window), g.Debug("Publisher Tag loaded")
        }
        return t.prototype.push = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            for (var i = 0, o = t; i < o.length; i++) {
                var r = o[i];
                this.events.push(r)
            }
            this.evalEvents()
        }, t.prototype.evalEvents = function() {
            for (var t = 0; t < this.events.length;) {
                var e = this.events[t];
                if ("conditionalEvent" !== e.name || e.canEval()) {
                    var i = this.events.splice(t, 1);
                    try {
                        i[0].eval(this)
                    } catch (t) {
                        g.Error("An exception occurred processing an event: " + t.toString())
                    }
                } else t++
            }
        }, t.VERSION = 74, t
    }();

    function It(t) {
        var e = t,
            i = function() {
                try {
                    return e.apply(this, arguments)
                } catch (t) {
                    g.Error("Exception caught: " + t.toString())
                }
            };
        for (var o in i.prototype = e.prototype, e) e.hasOwnProperty(o) && (i[o] = e[o]);
        return i
    }
    window.criteo_pubtag || (rt.LoadPolyfills(), window.criteo_pubtag = new yt), window.Criteo = function t(e) {
        for (var i in e)
            if (e.hasOwnProperty(i)) {
                var o = e[i];
                "function" == typeof o ? e[i] = It(o) : "object" == typeof o && (e[i] = t(o))
            }
        return e
    }({
        PubTag: {
            Adapters: {
                Prebid: X
            },
            DirectBidding: {
                DirectBiddingEvent: tt,
                DirectBiddingSlot: L,
                DirectBiddingUrlBuilder: q,
                Size: S
            }
        },
        events: window.Criteo ? window.Criteo.events : [],
        passbackEvents: window.Criteo ? window.Criteo.passbackEvents : [],
        usePrebidEvents: !window.Criteo || window.Criteo.usePrebidEvents
    }), !1 !== window.Criteo.usePrebidEvents && (window.Criteo.events = (ht = window.Criteo.events, ft = {
        push: function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            if (void 0 !== t)
                for (var i = 0, o = t; i < o.length; i++) {
                    var r = o[i];
                    "function" == typeof r && It(r)()
                }
        }
    }, ht && Array.isArray(ht) && ft.push.apply(ft, ht), ft)), gt = "prebid", vt = new n, mt = et[gt], vt.checkLocalStorage() && null === vt.getItem(mt, 864e5) && new J("//static.criteo.net/js/ld/publishertag." + gt + ".js", void 0, void 0, !1).send(function(t) {
        vt.setItem(mt, t, 864e5)
    }, function(t, e) {
        g.Error("Could not update FastBid" + (e ? " (" + e + ")" : ""))
    })
}();