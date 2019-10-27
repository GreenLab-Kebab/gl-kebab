define("modules/clean/logging/compression", ["require", "exports"], function(e, t) {
    "use strict";

    function s() {
        return new i
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (function() {
        function e() {}
        return e.prototype.inflate = function(e) {
            return e
        }, e.prototype.deflate = function(e) {
            return e
        }, e
    })();
    t.IdentityCodec = i, t.getBestCompressionCodec = s
}), define("modules/clean/logging/hive/schemas/web-user-action", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = (function() {
        function e(e) {
            this.category = "web-user-action", this.session_id = null, this.user_id = null, this.team_id = null, this.on_maestro = !0, this.extra = {}, this.ua_browser_name = null, this.ua_browser_version = null, this.ua_dist_name = null, this.ua_dist_version = null, this.ua_os_name = null, this.ua_os_version = null, this.authed_user_ids = null, this.identity_gid = null, this.anon_ip = null, this.active_user_id = null, this.team_type = null, this.locale_browser_header = null, this.locale_user_selected = null, this.referrer = null, this.user_agent = null, this.country = null, e.hasOwnProperty("event_name") && void 0 !== e.event_name && (this.event_name = e.event_name), e.hasOwnProperty("session_id") && void 0 !== e.session_id && (this.session_id = e.session_id), e.hasOwnProperty("source") && void 0 !== e.source && (this.source = e.source), e.hasOwnProperty("user_id") && void 0 !== e.user_id && (this.user_id = e.user_id), e.hasOwnProperty("team_id") && void 0 !== e.team_id && (this.team_id = e.team_id), e.hasOwnProperty("on_maestro") && void 0 !== e.on_maestro && (this.on_maestro = e.on_maestro), e.hasOwnProperty("extra") && void 0 !== e.extra && (this.extra = e.extra), e.hasOwnProperty("ua_browser_name") && void 0 !== e.ua_browser_name && (this.ua_browser_name = e.ua_browser_name), e.hasOwnProperty("ua_browser_version") && void 0 !== e.ua_browser_version && (this.ua_browser_version = e.ua_browser_version), e.hasOwnProperty("ua_dist_name") && void 0 !== e.ua_dist_name && (this.ua_dist_name = e.ua_dist_name), e.hasOwnProperty("ua_dist_version") && void 0 !== e.ua_dist_version && (this.ua_dist_version = e.ua_dist_version), e.hasOwnProperty("ua_os_name") && void 0 !== e.ua_os_name && (this.ua_os_name = e.ua_os_name), e.hasOwnProperty("ua_os_version") && void 0 !== e.ua_os_version && (this.ua_os_version = e.ua_os_version), e.hasOwnProperty("authed_user_ids") && void 0 !== e.authed_user_ids && (this.authed_user_ids = e.authed_user_ids), e.hasOwnProperty("identity_gid") && void 0 !== e.identity_gid && (this.identity_gid = e.identity_gid), e.hasOwnProperty("timestamp") && void 0 !== e.timestamp && (this.timestamp = e.timestamp), e.hasOwnProperty("anon_ip") && void 0 !== e.anon_ip && (this.anon_ip = e.anon_ip), e.hasOwnProperty("active_user_id") && void 0 !== e.active_user_id && (this.active_user_id = e.active_user_id), e.hasOwnProperty("team_type") && void 0 !== e.team_type && (this.team_type = e.team_type), e.hasOwnProperty("locale_browser_header") && void 0 !== e.locale_browser_header && (this.locale_browser_header = e.locale_browser_header), e.hasOwnProperty("locale_user_selected") && void 0 !== e.locale_user_selected && (this.locale_user_selected = e.locale_user_selected), e.hasOwnProperty("referrer") && void 0 !== e.referrer && (this.referrer = e.referrer), e.hasOwnProperty("user_agent") && void 0 !== e.user_agent && (this.user_agent = e.user_agent), e.hasOwnProperty("country") && void 0 !== e.country && (this.country = e.country), e.hasOwnProperty("view_type") && void 0 !== e.view_type && (this.view_type = e.view_type), e.hasOwnProperty("file_nsid") && void 0 !== e.file_nsid && (this.file_nsid = e.file_nsid), e.hasOwnProperty("file_sjid") && void 0 !== e.file_sjid && (this.file_sjid = e.file_sjid), e.hasOwnProperty("file_id") && void 0 !== e.file_id && (this.file_id = e.file_id), e.hasOwnProperty("file_name") && void 0 !== e.file_name && (this.file_name = e.file_name), e.hasOwnProperty("file_path") && void 0 !== e.file_path && (this.file_path = e.file_path), e.hasOwnProperty("file_size") && void 0 !== e.file_size && (this.file_size = e.file_size), e.hasOwnProperty("file_extension") && void 0 !== e.file_extension && (this.file_extension = e.file_extension), e.hasOwnProperty("request_id") && void 0 !== e.request_id && (this.request_id = e.request_id), e.hasOwnProperty("upload_id") && void 0 !== e.upload_id && (this.upload_id = e.upload_id), e.hasOwnProperty("all_fsw_ids") && void 0 !== e.all_fsw_ids && (this.all_fsw_ids = e.all_fsw_ids), e.hasOwnProperty("filtered_fsw_ids") && void 0 !== e.filtered_fsw_ids && (this.filtered_fsw_ids = e.filtered_fsw_ids), e.hasOwnProperty("browser_width") && void 0 !== e.browser_width && (this.browser_width = e.browser_width), e.hasOwnProperty("browser_height") && void 0 !== e.browser_height && (this.browser_height = e.browser_height), e.hasOwnProperty("device_width") && void 0 !== e.device_width && (this.device_width = e.device_width), e.hasOwnProperty("device_height") && void 0 !== e.device_height && (this.device_height = e.device_height), e.hasOwnProperty("action_source") && void 0 !== e.action_source && (this.action_source = e.action_source), Object.seal(this)
        }
        return e
    })();
    t.WebUserActionRow = s
}), define("modules/clean/logging/sender", ["require", "exports", "tslib", "modules/core/xhr", "modules/clean/ajax", "modules/clean/web_timing_logger"], function(e, t, s, i, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = s.__importStar(i);
    t.MAX_REPORT_ATTEMPTS = 4;
    var o = {
            NoContent: 204
        },
        a = (function() {
            function e(e, t, s) {
                var i = this;
                this.store = e, this.sendInterval = t, this.batchSize = s, this.numSuccessfulPublish = 0, this.numFailedPublish = 0, this.sentAtTTI = !1, this._pageUnloading = !1, this.scheduleNextSend(Date.now()), r.waitForTTI().then(function() {
                    i.sendOnce(), i.sentAtTTI = !0
                })
            }
            return e.prototype.drainAllLogs = function() {
                var e = this;
                this._pageUnloading || (this._pageUnloading = !0, this.store.subscribeToPushEvent(function() {
                    e.sendOnce(!0)
                })), null != this.nextSendTimeoutId && clearTimeout(this.nextSendTimeoutId), this.sendOnce(!0)
            }, e.prototype.sendOnce = function(e) {
                void 0 === e && (e = !1);
                var t = this.store.drain(this.batchSize);
                Object.keys(t).length > 0 && this.publish(t, e);
                var s = Date.now();
                this.scheduleNextSend(s), this.lastSendTime = s
            }, e.prototype.publish = function(e, t) {
                var s = this;
                void 0 === t && (t = !1);
                var r = {},
                    a = {};
                if (Object.keys(e).forEach(function(t) {
                        var s = e[t].map(function(e) {
                            return e.records()
                        });
                        r[t] = JSON.stringify([].concat.apply([], s))
                    }), a["data-version"] = "1", a.batches = JSON.stringify(r), a.stats = this.store.stats.getAndReset(), t && "navigator" in window && "sendBeacon" in window.navigator) return void n.SilentBackgroundBeaconRequest({
                    url: "/log/telemetry",
                    data: a
                });
                var _ = function(t) {
                    t === o.NoContent ? s.onSendSuccess(e) : s.onSendFailure(e)
                };
                i.sendXhr("/log/telemetry", a, _)
            }, e.prototype.scheduleNextSend = function(e) {
                var t = this;
                this.nextSendTime = e + this.sendInterval, this.nextSendTimeoutId = setTimeout(function() {
                    t.sendOnce()
                }, this.sendInterval)
            }, e.prototype.onSendSuccess = function(e) {
                this.numSuccessfulPublish++, window.SECRET_LOGGING_FRAMEWORK_CALLBACK_DO_NOT_USE && window.SECRET_LOGGING_FRAMEWORK_CALLBACK_DO_NOT_USE(e)
            }, e.prototype.onSendFailure = function(e) {
                this.numFailedPublish++;
                for (var s in e)
                    if (e.hasOwnProperty(s))
                        for (var i = 0, n = e[s]; i < n.length; i++) {
                            var r = n[i];
                            r.markFailure(), r.numReportAttempts < t.MAX_REPORT_ATTEMPTS && this.store.reEnqueueBatch(s, r)
                        }
            }, e
        })();
    t.Sender = a
}), define("modules/clean/logging/storage", ["require", "exports", "tslib"], function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MAX_MESSAGES_IN_BATCH = 100;
    var i = (function() {
        function e() {
            this.stats = new n
        }
        return e
    })();
    t.EventStorage = i;
    var n = (function() {
            function e() {
                this.rate_stats = {}
            }
            return e.prototype._val = function(e, t) {
                return e.hasOwnProperty(t) ? e[t] : 0
            }, e.prototype.onPushEvent = function(e) {
                for (var t = 0, s = ["*", e]; t < s.length; t++) {
                    var i = s[t],
                        n = "enqueue:" + i;
                    this.rate_stats[n] = this._val(this.rate_stats, n) + 1
                }
            }, e.prototype.onDrain = function(e) {
                var t = 0;
                for (var s in e)
                    if (e.hasOwnProperty(s)) {
                        var i = e[s].map(function(e) {
                                return e.size()
                            }).reduce(function(e, t) {
                                return e + t
                            }, 0),
                            n = "dequeue:" + s;
                        this.rate_stats[n] = this._val(this.rate_stats, n) + i, t += i
                    }
                this.rate_stats["dequeue:*"] = this._val(this.rate_stats, "dequeue:*") + t
            }, e.prototype.onReEnqueueBatch = function(e, t) {
                for (var s = 0, i = ["*", e]; s < i.length; s++) {
                    var n = i[s],
                        r = "reEnqueue:" + n;
                    this.rate_stats[r] = this._val(this.rate_stats, r) + t.size()
                }
            }, e.prototype.getAndReset = function() {
                var e = JSON.stringify({
                    "rate-stats": this.rate_stats
                });
                return this.rate_stats = {}, e
            }, e
        })(),
        r = (function(e) {
            function i(t) {
                var s = e.call(this) || this;
                return s.compressionCodec = t, s.existing_batches = {}, s._pushEventCallbacks = [], s
            }
            return s.__extends(i, e), i.prototype._append_batch_to_category = function(e, t) {
                this.existing_batches[e] || (this.existing_batches[e] = []), this.existing_batches[e].push(t)
            }, i.prototype._get_or_create_batch = function(e) {
                var t = this.existing_batches[e];
                return t && 0 !== t.length || (this._add_new_batch_for_category(e), t = this.existing_batches[e]), t[t.length - 1]
            }, i.prototype._add_new_batch_for_category = function(e) {
                var s = new o(e, t.MAX_MESSAGES_IN_BATCH, this.compressionCodec);
                return this._append_batch_to_category(e, s), s
            }, i.prototype.pushEvent = function(e, t) {
                var s = JSON.parse(JSON.stringify(t));
                this.stats.onPushEvent(e), this._get_or_create_batch(e).tryAppend(s) || this._add_new_batch_for_category(e).tryAppend(s);
                if (this._pushEventCallbacks.length > 0)
                    for (var i in this._pushEventCallbacks) "function" == typeof this._pushEventCallbacks[i] && this._pushEventCallbacks[i]()
            }, i.prototype.reEnqueueBatch = function(e, t) {
                return this.stats.onReEnqueueBatch(e, t), this._append_batch_to_category(e, t)
            }, i.prototype.subscribeToPushEvent = function(e) {
                this._pushEventCallbacks.push(e)
            }, i.prototype.drain = function(e) {
                var t = e,
                    s = {};
                for (var i in this.existing_batches)
                    if (this.existing_batches.hasOwnProperty(i)) {
                        if (t <= 0) break;
                        var n = this.existing_batches[i].splice(0, t);
                        if (t -= n.length, n.length > 0) {
                            for (var r = 0, o = n; r < o.length; r++) {
                                var a = o[r];
                                a.close()
                            }
                            s[i] = n
                        }
                    }
                return this.stats.onDrain(s), s
            }, i
        })(i);
    t.WindowStorage = r;
    var o = (function() {
        function e(e, t, s) {
            this.category = e, this.maxMessages = t, this.compressionCodec = s, this.numReportAttempts = 0, this.messages = []
        }
        return e.prototype.isFull = function() {
            return this.messages.length >= this.maxMessages
        }, e.prototype.size = function() {
            return this.messages.length
        }, e.prototype.tryAppend = function(e) {
            return !this.isFull() && !this.closed && (this.messages.push(e), this.isFull() && this.close(), !0)
        }, e.prototype.close = function() {
            this.closed || (this.closed = !0)
        }, e.prototype.records = function() {
            return this.messages
        }, e.prototype.markFailure = function() {
            if (!this.closed) throw new Error("Attempted to send an open batch");
            this.numReportAttempts++
        }, e
    })();
    t.MessageBatch = o
}), define("modules/clean/logging/telemetry", ["require", "exports", "tslib", "modules/clean/logging/storage", "modules/clean/logging/compression", "modules/clean/logging/sender", "modules/core/browser"], function(e, t, s, i, n, r, o) {
    "use strict";

    function a() {
        return c || (c = new l), c
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var _ = (function() {
            function e(e) {
                this.prefix = e
            }
            return e.prototype.log = function(e) {
                a().storage.pushEvent(this.prefix + e.category, e)
            }, e
        })(),
        h = (function(e) {
            function t() {
                return e.call(this, "js:") || this
            }
            return s.__extends(t, e), t
        })(_);
    t.JSEventLogger = h;
    var u = (function(e) {
        function t() {
            return e.call(this, "hive:") || this
        }
        return s.__extends(t, e), t
    })(_);
    t.HiveLogger = u;
    var d = (function(e) {
        function t() {
            return e.call(this, "vortexcombo:") || this
        }
        return s.__extends(t, e), t
    })(_);
    t.VortexComboLogger = d;
    var l = (function() {
        function e() {
            var e = this,
                t = n.getBestCompressionCodec();
            this.storage = new i.WindowStorage(t), this.sender = new r.Sender(this.storage, 5e3, 1), o.onBrowserRedirect(function(t) {
                e.drainAllLogs()
            }), window.addEventListener("beforeunload", function() {
                e.drainAllLogs()
            })
        }
        return e.prototype.drainAllLogs = function() {
            this.sender.drainAllLogs()
        }, e
    })();
    t.ClientTelemetry = l;
    var c;
    t.getGlobalTelemetrySingleton = a
});
//# sourceMappingURL=pkg-telemetry.min.js-vflrEcqbS.map