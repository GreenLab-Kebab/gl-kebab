! function() {
    var n = "BrowserSubscriptionHelper",
        t = "chrome",
        p = "error",
        l = "info",
        i = "pushNotifications",
        r = "undefined",
        o = "Unsupported Browser.",
        c = "granted",
        a = "denied",
        u = "subscriptions",
        s = "type",
        d = "push",
        e = "display-push-promos",
        f = "js-push-subscribe",
        h = "rapidnofollow",
        m = "subscriptionFail";

    function g(e, i, t) {
        this.init(e, i, t)
    }
    g.prototype = {
        init: function(e, i, t) {
            var n = this;
            n.beaconer = i, n.tracker = t, n.config = {
                bucket: e.bucket,
                confirmationNotification: e.confirmationNotification || {},
                overlay: e.overlay || {},
                serviceWorkerScope: e.serviceWorkerScope || "/",
                serviceWorkerUrl: e.serviceWorkerUrl,
                spaceId: e.spaceId,
                subscriptionService: e.subscriptionService || {},
                supportedBrowsers: e.supportedBrowsers || {},
                userAgent: e.userAgent || {},
                useRivendell: e.useRivendell || 0
            }, n._attachPermissionUpdateHandle(), n._updateAttributesForSubscribedUser()
        },
        checkIsSupportedBrowser: function() {
            for (var e = this.config.userAgent, i = e.browserName, t = e.browserVersion, n = e.os || e.osName, r = this.config.supportedBrowsers[i] || {}, o = !1, s = !1, a = r.os && r.os.length, c = 0; c < a; c++)
                if (-1 < n.indexOf(r.os[c])) {
                    s = !0;
                    break
                }
            return (!r.minVersion || t >= r.minVersion) && (!r.maxVersion || t <= r.maxVersion) && (!r.useServiceWorker || r.useServiceWorker && "serviceWorker" in navigator) && s && (o = !0), o
        },
        checkSubscriptionChurn: function(u) {
            var d = this;
            d.checkIsSupportedBrowser(i) ? d.fetchPushPermission(function(e, t) {
                e || !t || t && "granted" !== t.state ? u && u(e, {
                    isOnboardError: null,
                    pushManagerChurn: null
                }) : d.getSubscriptionLog(function(e, i) {
                    e ? u && u(e) : t && i ? function(e, i) {
                        var t = d._parseGCMSubscriptionId(i) || null,
                            n = e.deviceId || null,
                            r = e.subscriptionState || null,
                            o = i && i.error === m,
                            s = !n && "granted" === e.state && "started" === i.onboardState,
                            a = n && "granted" === e.state && "started" === i.onboardState && !i.error,
                            c = "subsPushMngrResync";
                        if (o ? c = "subsOnepushResync" : a && (c = "subsFCMResync"), o || s || a) return d._sendBeacon(l, {
                            code: c,
                            deviceId: n,
                            idbDeviceId: t,
                            onboardTime: i.onboardTime
                        }), u && u(null, {
                            isOnboardError: !0,
                            pushManagerChurn: null
                        });
                        t && t !== n && (!i.churnCheckTime || i.churnCheckTime < i.subscriptionTime) ? d.logSubscriptionChurnCheck(function(e) {
                            e ? u && u(e) : (d._sendBeacon(l, {
                                code: "subChurn",
                                idbDeviceId: t,
                                deviceId: n,
                                subscriptionState: r
                            }), u && u(null, {
                                isOnboardError: !1,
                                pushManagerChurn: !0
                            }))
                        }) : u && u(null, {
                            isOnboardError: !1,
                            pushManagerChurn: !1
                        })
                    }(t, i) : u && u(null, {
                        isOnboardError: !1,
                        pushManagerChurn: !1
                    })
                })
            }) : u && u(new Error(o))
        },
        fetchPushPermission: function(e) {
            if (e) {
                this.checkIsSupportedBrowser() && this.config.userAgent.browserName === t ? this._fetchPushPermissionChrome(e) : e(new Error(o, null))
            }
        },
        requestPushPermission: function(e, i) {
            if (i) {
                this.checkIsSupportedBrowser() && (this.logOnboardingStart(), this.config.userAgent.browserName === t) ? this._requestPushPermissionChrome(e, i) : i(new Error(o, null))
            }
        },
        _fetchPushPermissionChrome: function(i) {
            var t = this;
            (Notification && Notification.permission) === c ? navigator.serviceWorker.getRegistration(t.config.serviceWorkerScope).then(function(e) {
                return e && e.pushManager.getSubscription()
            }).then(t._buildPermissionObjectChrome.bind(t)).then(function(e) {
                i(null, e)
            }).catch(function(e) {
                t._sendBeacon(p, {
                    code: "brwsrPermFetchError",
                    message: e
                }), i(e)
            }) : i(null, t._buildPermissionObjectChrome(null))
        },
        _requestPushPermissionChrome: function(e, i) {
            var t = this,
                n = t.config.serviceWorkerUrl,
                r = t.config.serviceWorkerScope;
            Notification && n && r && ("default" === Notification.permission && (t._trackLinkView({
                itc: "1",
                sec: e.sec,
                slk: "notification permission request",
                subsec: e.subsec
            }), t._sendBeacon(l, {
                code: "notificationPermissionRequest",
                message: e.sec
            })), Notification.requestPermission().then(function() {
                return t._doRegisterServiceWorker(n, r)
            }).then(t._doPushManagerSubscribe.bind(t)).then(t._buildPermissionObjectChrome.bind(t)).then(function(e) {
                t._sendBeacon(l, {
                    code: "brwsrPermReqSuccess",
                    message: e.state
                }), i(null, e)
            }).catch(function(e) {
                t._sendBeacon(p, {
                    code: "brwsrPermReqError",
                    message: e
                }), i(e, null)
            }))
        },
        _doRegisterServiceWorker: function(e, i) {
            var t = this;
            return navigator.serviceWorker.register(e, {
                scope: i
            }).then(function(e) {
                return t._sendBeacon(l, {
                    code: "svcWkrRegSuccess"
                }), e
            }, function(e) {
                t._sendBeacon(p, {
                    code: "svcWkrRegError",
                    message: e
                })
            })
        },
        _doPushManagerSubscribe: function(n) {
            var i = this;
            if (window.Promise && n) return new Promise(function(i, e) {
                if (Notification && "granted" === Notification.permission) {
                    var t = n.installing || n.waiting;
                    t ? t.addEventListener("statechange", function(e) {
                        "activated" === e.target.state && i()
                    }) : n.active ? i() : e("Service Worker not active")
                } else e("Permission not granted")
            }).then(function() {
                return n.pushManager.subscribe({
                    userVisibleOnly: !0
                })
            }).then(function(e) {
                if (!e || !e.endpoint) throw "Missing subscription endpoint";
                return i.logPushManagerSuccess(e.endpoint), i._sendBeacon(l, {
                    code: "PushMngrSubSuccess",
                    deviceId: e.endpoint
                }), e
            }).catch(function(e) {
                i._sendBeacon(p, {
                    code: "PushMngrSubFail",
                    message: e
                }), i.logPushManagerFailure()
            })
        },
        _buildPermissionObjectChrome: function(e) {
            var i;
            return i = typeof e === r ? "No_SW_registration" : null === e ? "No_PushManager_Subscription" : "Subscription_Present", {
                deviceId: e && this._parseGCMSubscriptionId(e),
                state: Notification && Notification.permission,
                subscriptionKeys: e && btoa(JSON.stringify(e)),
                subscriptionState: i
            }
        },
        _parseGCMSubscriptionId: function(e) {
            var i, t;
            return e && e.endpoint && (t = (i = e.endpoint.match(/^https\:\/\/(fcm|android)\.googleapis\.com\/(gcm|fcm)\/send\/(.*)$/)) && i.length && i[3]), t
        },
        _sendBeacon: function(e, i) {
            var t = this;
            t.beaconer && e && i && ("function" == typeof t.beaconer ? t.beaconer(e, n, i) : "function" == typeof t.beaconer[e] && t.beaconer[e](n, i))
        },
        _trackClick: function(e, i) {
            this.tracker && e && e.sec && e.slk && typeof e._p !== r && this.tracker.beaconClick(e.sec, e.slk, e._p, e, e.outcome, i)
        },
        _trackLinkView: function(e) {
            this.tracker && e && e.sec && e.slk && this.tracker.beaconLinkViews([{
                sec: e.sec,
                t1: e.t1,
                t2: e.t2,
                _links: [e]
            }])
        },
        _attachPermissionUpdateHandle: function(e) {
            var n = this;
            n.checkIsSupportedBrowser(i) ? navigator && navigator.permissions && navigator.permissions.query && navigator.permissions.query({
                name: "notifications"
            }).then(function(t) {
                t ? (t.onchange = function() {
                    n.getSubscriptionLog(function(e, i) {
                        i || (i = {}), i.code = "userPermissionUpdate", i.newState = t.state, n._sendBeacon(l, i)
                    })
                }, e && e(null, !0)) : e && e(null, !1)
            }) : e && e(new Error(o), !1)
        },
        _convertAllOnepushTopicsToRivendell: function(e, i) {
            var t = {
                    channel_id: (i = i || {}).subscriptionKeys,
                    device_id: i.deviceId,
                    registration_id: e
                },
                n = Object.assign(t, this.getEssentialAttributes());
            return this.callSubscriptionService({
                method: "POST",
                operation: "update",
                serviceResource: "subscriptions.oToR"
            }, n), !0
        },
        _updateAttributesForSubscribedUser: function() {
            if (!window.indexedDB) return !1;
            var a = this;
            a._readEntryInDB(function(e, o) {
                if (e) return !1;
                var i = (o = o || {}).lastAttributeUpdateTime,
                    s = o.registrationId;
                if (Date.now() - i <= 864e5) return !1;
                a.fetchPushPermission(function(e, n) {
                    if (e) return !1;
                    var i = (n = n || {}).subscriptionKeys;
                    if (n.state === c && "completed" === o.onboardState && i) {
                        var t = {
                            channel_id: i,
                            device_id: n.deviceId
                        };
                        s ? t.registration_id = s : a.config.useRivendell && (t.useRivendell = 1);
                        var r = Object.assign(t, a.getEssentialAttributes());
                        return a.callSubscriptionService({
                            method: "POST",
                            operation: "update",
                            serviceResource: "subscriptions.setAttributes"
                        }, r, function(e, i) {
                            if (!e) {
                                i = i || {}, s = s || i.registrationId || i.g0 && i.g0.data && i.g0.data.registrationId;
                                var t = {
                                    lastAttributeUpdateTime: Date.now()
                                };
                                s && (setTimeout(function() {
                                    a._convertAllOnepushTopicsToRivendell(s, n)
                                }, 0), t.registrationId = s), a._setEntryInDB(t)
                            }
                        }), !0
                    }
                    return !1
                })
            })
        },
        logOnboardingStart: function(e, i) {
            e = e || {}, this._initDB(e, i)
        },
        logOnboardingCompleted: function(e, i) {
            this._setEntryInDB({
                onboardState: "completed",
                origin: e,
                error: void 0
            }, i)
        },
        logPushManagerSuccess: function(e, i) {
            this._setEntryInDB({
                endpoint: e,
                subscriptionTime: (new Date).getTime()
            }, i)
        },
        logPushManagerFailure: function(e) {
            this._setEntryInDB({
                error: "pushManagerFail"
            }, e)
        },
        logSubscriptionFailure: function(e) {
            this._setEntryInDB({
                error: m
            }, e)
        },
        logSubscriptionChurnCheck: function(e) {
            this._setEntryInDB({
                churnCheckTime: (new Date).getTime()
            }, e)
        },
        clearErrorLog: function(e) {
            this._setEntryInDB({
                error: void 0
            }, e)
        },
        getSubscriptionLog: function(e) {
            this._readEntryInDB(e)
        },
        _openDB: function(t) {
            var n = this,
                e = window.indexedDB.open("yahooNotifications", 2);
            e.onupgradeneeded = function(e) {
                e.target.result.createObjectStore(u, {
                    keyPath: s
                }).transaction.onerror = function(e) {
                    var i = new Error("Failed upgrading: " + e.target.errorCode);
                    n._sendBeacon(p, {
                        code: "IDBUpgradeFail",
                        message: i.message
                    }), t && t(i)
                }
            }, e.onsuccess = function(e) {
                var i = e.target.result;
                t && t(null, i)
            }, e.onerror = function(e) {
                var i = new Error("Failed opening: " + e.target.errorCode);
                n._sendBeacon(p, {
                    code: "IDBOpenFail",
                    message: i.message
                }), t && t(new Error(i))
            }
        },
        _initDB: function(r, o) {
            var s = this,
                a = (new Date).getTime();
            s._openDB(function(e, t) {
                if (e) return o && o(e);
                var n = s._buildEntryObject(r),
                    i = t.transaction(u, "readwrite").objectStore(u).put(n);
                i.onsuccess = function(e) {
                    var i = (new Date).getTime();
                    o && o(null, n), s._sendBeacon(l, {
                        code: "initIndexedDBDuration",
                        message: i - a
                    }), t.close()
                }, i.onerror = function(e) {
                    var i = new Error("Failed initilazing: " + e.target.errorCode);
                    s._sendBeacon(p, {
                        code: "IDBInitFail",
                        message: i.message
                    }), o && o(i), t.close()
                }
            })
        },
        _readEntryInDB: function(r) {
            var o = this,
                s = (new Date).getTime();
            o._openDB(function(e, t) {
                if (e) return r && r(e);
                var n = t.transaction(u).objectStore(u).get(d);
                n.onsuccess = function(e) {
                    var i = (new Date).getTime();
                    r && r(null, n.result), o._sendBeacon(l, {
                        code: "readIndexedDBDuration",
                        message: i - s
                    }), t.close()
                }, n.onerror = function(e) {
                    var i = new Error("Failed Reading: ", e.target.errorCode);
                    o._sendBeacon(p, {
                        code: "IDBReadFail",
                        message: i.message
                    }), r && r(i), t.close()
                }
            })
        },
        _setEntryInDB: function(r, o) {
            var s = this,
                a = (new Date).getTime();
            s._readEntryInDB(function(e, n) {
                e || !n ? s._initDB(s._buildEntryObject(r, n), o) : s._openDB(function(i, t) {
                    if (i) return o && o(i);
                    var e = t.transaction(u, "readwrite").objectStore(u).put(s._buildEntryObject(r, n));
                    e.onsuccess = function(e) {
                        var i = (new Date).getTime();
                        o && o(null, !0), s._sendBeacon(l, {
                            code: "updateIndexedDBDuration",
                            message: i - a
                        }), t.close()
                    }, e.onerror = function(e) {
                        s._sendBeacon(p, {
                            code: "IDBUpdateFail",
                            message: i
                        }), o && o(new Error("Failed updating: ", e.target.errorCode)), t.close()
                    }
                })
            })
        },
        _buildEntryObject: function(e, i) {
            e = e || {}, i = i || {};
            var t = (new Date).getTime(),
                n = e.registrationId || i.registrationId,
                r = {
                    bucket: e.bucket || i.bucket || this.config.bucket,
                    churnCheckTime: e.churnCheckTime || i.churnCheckTime,
                    endpoint: e.endpoint || i.endpoint,
                    error: e.error || i.error,
                    lastAttributeUpdateTime: e.lastAttributeUpdateTime || i.lastAttributeUpdateTime,
                    onboardState: e.onboardState || i.onboardState || "started",
                    onboardTime: i.onboardTime || t,
                    origin: e.origin || i.origin,
                    permissionState: Notification && Notification.permission || "unsuported",
                    spaceId: e.spaceId || i.spaceId || this.config.spaceId,
                    subscriptionTime: e.subscriptionTime || i.subscriptionTime,
                    updateTime: t
                };
            return n && (r.registrationId = n), e.hasOwnProperty("error") && void 0 === e.error && (r.error = void 0, "started" === r.onboardState && (r.onboardState = "completed", r.onboardTime = t)), r[s] = d, r
        },
        _sendRequest: function(e, i, t) {
            if (e) {
                var n = this,
                    r = 2e3,
                    o = e.url,
                    s = e.headers,
                    a = e.body,
                    c = new XMLHttpRequest;
                for (var u in i = "number" == typeof i ? i : 3, c.open(e.method, o), c.responseType = "json", c.timeout = 1e4, s) s.hasOwnProperty(u) && c.setRequestHeader(u, s[u]);
                c.onload = function() {
                    if (200 === c.status) {
                        var e = c.response;
                        t && t(null, e)
                    } else d()
                }, c.onerror = function() {
                    d()
                }, c.ontimeout = function() {
                    d()
                }, "GET" === e.method ? c.send() : c.send(a)
            }

            function d() {
                0 < i ? (i -= 1, setTimeout(function() {
                    n._sendRequest(e, i, t)
                }, r)) : t && t(new Error(c.statusText))
            }
        },
        callSubscriptionService: function(i, e, t) {
            i = i || {};
            var n, r = this.config.subscriptionService,
                o = "",
                s = "";
            i.matrixParams && Object.keys && (Object.keys(i.matrixParams).forEach(function(e) {
                o += ";" + encodeURIComponent(e) + "=" + encodeURIComponent(i.matrixParams[e] || "")
            }), o && (o += ";")), s = [].concat(r.protocol ? r.protocol + "://" : []).concat(r.host || []).concat(r.path ? r.path.replace("RESOURCE_PLACEHOLDER", i.serviceResource + o) : []).join(""), "GET" === i.method ? (s.indexOf("resource/") < 0 && (s.endsWith && !s.endsWith("/") && (s += "/"), s += "resource/" + i.serviceResource + o), n = {
                url: s,
                method: "GET"
            }) : "POST" === i.method && (n = {
                body: JSON.stringify({
                    requests: {
                        g0: {
                            resource: i.serviceResource,
                            operation: i.operation,
                            params: i,
                            body: e
                        }
                    },
                    context: r.context || {}
                }),
                headers: {
                    "content-type": "application/json"
                },
                url: s,
                method: "POST"
            }), this._sendRequest(n, 3, t)
        },
        readTopicSubscription: function(r, o, s) {
            if (r && o)
                if (window.indexedDB) {
                    var a = this;
                    a._readEntryInDB(function(e, i) {
                        if (e) s && s(e);
                        else {
                            var t = (i = i || {}).registrationId,
                                n = {
                                    matrixParams: {
                                        channel_id: o,
                                        operation: "read",
                                        serviceResource: "subscriptions.hasSubscription",
                                        target_id: r
                                    },
                                    method: "GET",
                                    serviceResource: "subscriptions.hasSubscription"
                                };
                            t ? n.matrixParams.registration_id = t : a.config.useRivendell && (n.matrixParams.useRivendell = 1), a.callSubscriptionService(n, null, s)
                        }
                    })
                } else s && s(new Error("IndexedDB connection failed"));
            else s && s(new Error("Missing required arguments"))
        },
        setTopicSubscription: function(s, a, c, u, d) {
            if (s && c && u)
                if (window.indexedDB) {
                    var l = this;
                    l._readEntryInDB(function(e, i) {
                        if (e) d && d(e);
                        else {
                            var n = (i = i || {}).registrationId,
                                t = {
                                    channel_id: u,
                                    device_id: c,
                                    target_id: s
                                };
                            n ? t.registration_id = n : l.config.useRivendell && (t.useRivendell = 1);
                            var r = Object.assign(t, l.getEssentialAttributes()),
                                o = {
                                    method: "POST",
                                    operation: "update",
                                    serviceResource: a ? "subscriptions.setSubscription" : "subscriptions.removeSubscription"
                                };
                            l.callSubscriptionService(o, r, function(i, t) {
                                !i && (t = t || {}, n = n || t.registrationId || t.g0 && t.g0.data && t.g0.data.registrationId) ? l._setEntryInDB({
                                    registrationId: n
                                }, function(e) {
                                    e && l._sendBeacon(p, {
                                        code: "registrationIDBEntryError",
                                        message: e.message
                                    }), d.call(l, i, t)
                                }) : d.apply(l, Array.prototype.slice.call(arguments))
                            })
                        }
                    })
                } else d && d(new Error("IndexedDB connection failed"));
            else d && d(new Error("Missing required arguments"))
        },
        checkIsPushMuted: function(t, n) {
            if (t && n) {
                var r = this;
                r.fetchPushPermission(function(e, i) {
                    i && i.state === c && i.subscriptionKeys ? r.readTopicSubscription(t, i.subscriptionKeys, function(e, i) {
                        var t = i && i.isSubscribed;
                        n(null, !t)
                    }) : n(null, !0)
                })
            } else n && n(new Error("Missing required topic"))
        },
        pushNotificationSubscribe: function(t, n) {
            if (t && t.topic) {
                t = JSON.parse(JSON.stringify(t));
                var r = this,
                    o = r.config.overlay.default,
                    e = t.topic,
                    s = t.trackingParams || {
                        sec: "hd"
                    };
                s.subsec = "browser-prompt", s.aid = e, t.trackingParams = s, r.fetchPushPermission(function(e, i) {
                    return e || !i ? (r._sendBeacon(p, {
                        code: "permRead",
                        message: e.message
                    }), void(n && n(new Error("Could not read push permission")))) : i.state === a ? (t.trackingParams = null, void r._handlePermissionDenied(t, n)) : i.state === c && i.deviceId && i.subscriptionKeys ? (t.trackingParams = null, void r._handlePermissionGranted(i, t, n)) : (t.showInstructionsDefault && o && i.state !== c && r.renderInstructionOverlay(o.overlayId, o.imageUrl, o.imageWidth, o.imageHeight, o.xOffset, o.yOffset), void r.requestPushPermission(s, function(e, i) {
                        return t.showInstructionsDefault && o && r.removeInstructionsOverlay(o.overlayId), !e && i ? i.state === c ? void r._handlePermissionGranted(i, t, n) : i.state === a ? void r._handlePermissionDenied(t, n) : void r._handlePermissionDismissed(t, n) : (r._sendBeacon(p, {
                            code: "permReq",
                            message: e.message
                        }), void(n && n(new Error("Push permission request failure"))))
                    }))
                })
            } else n && n(new Error("Missing required option: topic"))
        },
        _handlePermissionGranted: function(t, e, n) {
            var r = this,
                i = (e = e || {}).trackingParams,
                o = e.topic;
            t && t.state === c && o ? (i && (i.slk = "permission-allow", i._p = 1, r._trackClick(i)), this.setTopicSubscription(o, !0, t.deviceId, t.subscriptionKeys, function(e, i) {
                e ? t.deviceId && r.logSubscriptionFailure() : (r.hidePushSubscriptionPromos(), r.getSubscriptionLog(function(e, i) {
                    i && "completed" !== i.onboardState && r.logOnboardingCompleted(o)
                })), e && r._sendBeacon(p, {
                    code: "failureAfterPerm",
                    message: e && e.message
                }), n && n(e, i)
            })) : n && n(new Error("Missing required params in handler"))
        },
        _handlePermissionDenied: function(e, i) {
            e = e || {};
            var t = this.config.overlay.denied,
                n = e.trackingParams;
            n && (n.slk = "permission-block", n._p = 2, this._trackClick(n)), e.showInstructionsDenied && t && this.renderInstructionOverlay(t.overlayId, t.imageUrl, t.imageWidth, t.imageHeight, t.xOffset, t.yOffset), i && i(new Error("Permission denied by user"))
        },
        _handlePermissionDismissed: function(e, i) {
            var t = (e = e || {}).trackingParams;
            t && (t.slk = "permission-dismiss", t._p = 0, this._trackClick(t)), i && i(new Error("Permission not granted by user"))
        },
        pushNotificationUnsubscribe: function(t, n) {
            var r = this;
            t && r.fetchPushPermission(function(e, i) {
                i ? r.setTopicSubscription(t, !1, i.deviceId, i.subscriptionKeys, n) : n && n(new Error("Could not read permission"))
            })
        },
        renderInstructionOverlay: function(i, e, t, n, r, o) {
            var s = this;
            if (i && e && t && n) {
                var a = document.createElement("div"),
                    c = document.createElement("div"),
                    u = "";
                a.id = i, a.setAttribute("style", "position:fixed; background-color:rgba(236, 236, 236, 0.95); top:0; left:0; width:100%; height:100%; z-index:100;"), "number" != typeof r && (u += "margin-left:auto; margin-right:auto;"), "number" != typeof o && (u += " margin-top:117px;"), u && c.setAttribute("style", u), c.setAttribute("style", "width:" + t + "px;height:" + n + "px;background: url(" + e + ") 0 0/" + t + "px " + n + "px no-repeat;" + ("number" == typeof r ? "margin-left:" + r + "px;" : "") + ("number" == typeof o ? "margin-top:" + o + "px;" : "")), a.appendChild(c), document.body.appendChild(a), s.removeInstructionsOverlay && (document.onkeydown = function(e) {
                    ("key" in (e = e || window.event) ? "Escape" === e.key || "Esc" === e.key : 27 === e.keyCode) && s.removeInstructionsOverlay(i)
                }, a.onclick = function(e) {
                    s.removeInstructionsOverlay(i)
                })
            }
        },
        removeInstructionsOverlay: function(e) {
            var i = document.getElementById(e);
            i && document.body.removeChild(i)
        },
        shouldPromotePushNotifications: function() {
            return this.checkIsSupportedBrowser(i) && Notification.permission !== c
        },
        shouldPromotePushNotificationsForTopic: function(e, t) {
            e && this.checkIsSupportedBrowser(i) ? this.checkIsPushMuted(e, function(e, i) {
                e ? t(e, !1) : t(void 0, i)
            }) : t(void 0, !1)
        },
        showPushSubscriptionPromos: function() {
            this.shouldPromotePushNotifications() && document.body.classList.add(e)
        },
        hidePushSubscriptionPromos: function() {
            document.body.classList.remove(e)
        },
        _stringParseKV: function(e, i, t) {
            var n = {};
            if (!e) return n;
            i = i || ";", t = t || ":";
            for (var r = e.split(i), o = 0; o < r.length; o += 1) {
                var s = r[o],
                    a = s.indexOf(t),
                    c = s.substring(0, a),
                    u = s.substring(a + 1);
                c = c.trim ? c.trim() : c, u = u.trim ? u.trim() : u, c && (n[c] = u)
            }
            return n
        },
        _delegateDOMEvent: function(e, i, t, n) {
            if (e && i && t && n) {
                var r = document.querySelector(i);
                r && r.addEventListener(e, function(e) {
                    for (var i = e.target; i && e.currentTarget !== i;) {
                        if (i.classList.contains(t)) {
                            n.call(i, e);
                            break
                        }
                        i = i.parentNode
                    }
                }, !1)
            }
        },
        addPromoButtonDelegator: function() {
            var i = this;
            i._delegateDOMEvent("click", "body", f, function(e) {
                i.handlePromoButtonSubscription(this)
            })
        },
        handlePromoButtonSubscription: function(e) {
            if (e) {
                var i = this,
                    t = e.getAttribute("data-subscription-topic"),
                    n = e.getAttribute("data-subscription-ylk"),
                    r = n && i._stringParseKV(n),
                    o = "false" === e.getAttribute("data-subscription-instructions-default"),
                    s = "false" === e.getAttribute("data-subscription-instructions-denied");
                t && r && (i._trackClick(i._stringParseKV(n)), i.pushNotificationSubscribe({
                    showInstructionsDefault: !o,
                    showInstructionsDenied: !s,
                    topic: t,
                    trackingParams: r
                }, i.displayWelcomeNotification.bind(i)))
            }
        },
        trackPromoButtonsLinkViews: function() {
            for (var e, i, t = document.getElementsByClassName(f), n = 0; t && n < t.length; n += 1) t[n].classList.contains(h) && this._isVisible(t[n]) && (e = t[n].getAttribute("data-subscription-ylk") || "", (i = this._stringParseKV(e)) && i.slk && (i.slk = "[manual] " + i.slk, this._trackLinkView(i)), t[n].classList.remove(h))
        },
        _isVisible: function(e) {
            if (e) {
                var i = window.getComputedStyle(e, null);
                return i && "none" !== i.display && "hidden" !== i.visibility
            }
        },
        displayWelcomeNotification: function() {
            var e = this.config.confirmationNotification;
            Notification.permission === c && e.enabled && new Notification(e.title, {
                body: e.body,
                icon: e.icon
            })
        },
        getEssentialAttributes: function() {
            var e = {
                utcTz: "UTC" + -(new Date).getTimezoneOffset() / 60
            };
            if (window.Intl) try {
                e.tz = window.Intl.DateTimeFormat().resolvedOptions().timeZone
            } catch (e) {}
            return e
        }
    }, typeof module !== r && module.exports ? module.exports = g : typeof window !== r && (window.SubscriptionHelper = g)
}();