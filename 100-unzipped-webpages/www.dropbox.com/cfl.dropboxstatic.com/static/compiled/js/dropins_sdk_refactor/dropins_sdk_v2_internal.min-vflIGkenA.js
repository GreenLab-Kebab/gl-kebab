define(function() {
    return (function(e) {
        function o(t) {
            if (n[t]) return n[t].exports;
            var r = n[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports
        }
        var n = {};
        return o.m = e, o.c = n, o.d = function(e, n, t) {
            o.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: t
            })
        }, o.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return o.d(n, "a", n), n
        }, o.o = function(e, o) {
            return Object.prototype.hasOwnProperty.call(e, o)
        }, o.p = "", o(o.s = 3)
    })([function(e, o, n) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var t = window.location.protocol + "//" + window.location.host,
            r = (function() {
                function e(o) {
                    if (this.origin = t, this.sendMessage = function(e) {}, this.state = {}, this.options = o, !this.options) throw new Error("options must be provided");
                    if (!this.options.appKey) throw new Error("appKey must be provided");
                    e.validateOnError(this.options.onError)
                }
                return e.validateOnError = function(e) {
                    if (e && "function" != typeof e) throw new Error("onError must be a function")
                }, e.prototype.setOnError = function(o) {
                    e.validateOnError(o), this.options.onError = o
                }, e.prototype.hasOnCloseDialogMessage = function() {
                    return void 0 !== this.onCloseDialogMessage
                }, e.prototype.setOnCloseDialogMessage = function(e) {
                    if ("function" != typeof e) throw new Error("onCloseDialogMessage must be a function");
                    this.onCloseDialogMessage = e
                }, e.prototype.sendState = function() {
                    this.sendMessage({
                        method: "state",
                        params: this.state
                    })
                }, e.prototype.url = function() {
                    var e = [{
                            key: "app_key",
                            value: this.options.appKey
                        }, {
                            key: "origin",
                            value: this.origin
                        }].concat(this.urlParams()),
                        o = e.map(function(e) {
                            return encodeURIComponent(e.key) + "=" + encodeURIComponent(e.value)
                        }).join("&");
                    return {
                        pathname: this.urlPathname(),
                        search: "?" + o
                    }
                }, e.prototype.windowDimensions = function() {
                    return {
                        width: 735,
                        height: 552
                    }
                }, e.prototype.handleMessage = function(e) {
                    switch (void 0 !== e.sequenceNumber && this.sendMessage({
                        method: "ack",
                        sequenceNumber: e.sequenceNumber
                    }), e.method) {
                        case "origin_request":
                            this.sendMessage({
                                method: "origin"
                            });
                            break;
                        case "ready":
                            this.sendState();
                            break;
                        case "error":
                            this.options.onError && this.options.onError(e.params);
                            break;
                        case "close_dialog":
                            this.onCloseDialogMessage && this.onCloseDialogMessage(), this.onCloseDialogMessage = void 0
                    }
                }, e
            })();
        o.Dropin = r
    }, function(e, o, n) {
        "use strict";

        function t(e, o) {
            return "width=" + e + ",height=" + o + ",left=" + (window.screenX + ((window.outerWidth || document.documentElement.offsetWidth) - e) / 2) + ",top=" + (window.screenY + ((window.outerHeight || document.documentElement.offsetHeight) - o) / 2)
        }

        function r(e, o, n) {
            return e + (e.indexOf("?") === -1 ? "?" : "&") + o + "=" + n
        }

        function i(e) {
            return r(e, "version", encodeURIComponent(Dropbox.VERSION))
        }

        function s(e, o) {
            var n = encodeURIComponent(window.location.protocol + "//" + window.location.host),
                t = encodeURIComponent(Dropbox.appKey),
                s = encodeURIComponent(e.linkType || ""),
                a = encodeURIComponent(e._trigger || "js"),
                c = Boolean(e.multiselect),
                l = encodeURIComponent(h(e.extensions, "join", function(e) {
                    return e.join(" ")
                }) || ""),
                u = Boolean(e.folderselect);
            o = Boolean(o);
            var p = Dropbox.baseUrl + "/chooser?origin=" + n + "&app_key=" + t + "&link_type=" + s + "&trigger=" + a + "&multiselect=" + c + "&extensions=" + l + "&folderselect=" + u + "&iframe=" + o;
            if (void 0 !== e.fileselect && (p = r(p, "fileselect", Boolean(e.fileselect))), void 0 !== e.sizeLimit && (p = r(p, "size_limit", e.sizeLimit)), null != e.initialNavigation) {
                if (null != e.initialNavigation.mode) {
                    p = r(p, "initial_navigation_mode", encodeURIComponent(e.initialNavigation.mode))
                }
                if (null != e.initialNavigation.role) {
                    p = r(p, "initial_navigation_role", encodeURIComponent(e.initialNavigation.role))
                }
                if (e.initialNavigation.cursor) {
                    p = r(p, "initial_navigation_cursor", encodeURIComponent(e.initialNavigation.cursor))
                }
            }
            if (null != e.initialViewType) {
                p = r(p, "initial_view_type", encodeURIComponent(e.initialViewType))
            }
            if (null != e.fields) {
                p = r(p, "fields", encodeURIComponent("function" == typeof e.fields.join ? e.fields.join(" ") : void 0))
            }
            if (e.showSignOut === !1 && (p = r(p, "show_sign_out", "false")), null !== e.initialNavigationPath) {
                p = r(p, "initial_navigation_path", encodeURIComponent(e.initialNavigationPath))
            }
            return i(p)
        }

        function a() {
            /\bTrident\b/.test(navigator.userAgent) && null != document.body && null == o.ieframe && (o.ieframe = document.createElement("iframe"), o.ieframe.setAttribute("id", "dropbox_xcomm"), o.ieframe.setAttribute("src", Dropbox.baseUrl + "/static/api/1/xcomm.html"), o.ieframe.style.display = "none", document.body.appendChild(o.ieframe))
        }

        function c(e) {
            var n = {
                options: b({}, e, {
                    success: function(t, r) {
                        "function" == typeof e.success && e.success(t, r), o.currentChooserSession === n && (o.currentChooserSession = null)
                    },
                    cancel: function(t) {
                        "function" == typeof e.cancel && e.cancel(t), o.currentChooserSession === n && (o.currentChooserSession = null)
                    }
                })
            };
            return o.currentChooserSession = n, n
        }

        function l(e) {
            var o = document.createElement("iframe");
            return o.src = "about:blank", o._postAction = e, o.name = "dropbox-dropins", o.style.display = "block", o.style.backgroundColor = "white", o.style.border = "none", o
        }

        function u(e, o, n) {
            if (e._fetch_url_on_save) {
                var t = e.fetch_urls_fn;
                "function" != typeof t && "function" == typeof e.error && e.error("Something went wrong, file url callback not provided."), t(n, o)
            }
        }

        function p(e, o) {
            var n, t = encodeURIComponent(Dropbox.appKey),
                r = Dropbox.baseUrl + "/dropins/job_status?job=" + o + "&app_key=" + t;
            r = i(r);
            var s = function(o) {
                "COMPLETE" === o.status ? ("function" == typeof e.progress && e.progress(1), "function" == typeof e.success && e.success()) : "PENDING" === o.status || "DOWNLOADING" === o.status ? (null != o.progress && "function" == typeof e.progress && e.progress(o.progress / 100), setTimeout(n, 1500)) : "FAILED" === o.status && "function" == typeof e.error && e.error(o.error)
            };
            if ("withCredentials" in new XMLHttpRequest) n = function() {
                var o = new XMLHttpRequest;
                return o.onload = function() {
                    return s(JSON.parse(o.responseText))
                }, o.onerror = function() {
                    return "function" == typeof e.error ? e.error() : void 0
                }, o.open("GET", r, !0), o.send()
            };
            else if (Dropbox.disableJSONP) {
                if ("undefined" == typeof XDomainRequest || null === XDomainRequest || "https:" !== document.location.protocol) throw new Error("Unable to find suitable means of cross domain communication");
                n = function() {
                    var o = new XDomainRequest;
                    return o.onload = function() {
                        return s(JSON.parse(o.responseText))
                    }, o.onerror = function() {
                        return "function" == typeof e.error ? e.error() : void 0
                    }, o.open("get", r), o.send()
                }
            } else n = function() {
                var o = "DropboxJsonpCallback" + g++,
                    n = !1;
                window[o] = function(e) {
                    return n = !0, s(e)
                };
                var t = document.createElement("script");
                return t.src = r + "&callback=" + o, t.onreadystatechange = function() {
                    if ("loaded" === t.readyState) return n || "function" == typeof e.error && e.error(), null != t.parentNode ? t.parentNode.removeChild(t) : void 0
                }, document.getElementsByTagName("head")[0].appendChild(t)
            };
            return "function" == typeof e.progress && e.progress(0), n()
        }

        function d(e, n, t) {
            var r, i = JSON.parse(e.data);
            switch (r = null != o.ieframe && t._popup ? o.ieframe.contentWindow : e.source, void 0 !== i.sequence_number && r.postMessage(JSON.stringify({
                method: "ack",
                sequence_number: i.sequence_number
            }), Dropbox.baseUrl), i.method) {
                case "origin_request":
                    e.source.postMessage(JSON.stringify({
                        method: "origin"
                    }), Dropbox.baseUrl);
                    break;
                case "ready":
                    if (null != t.files) {
                        var s = void 0;
                        if (t._fetch_url_on_save) {
                            for (var a = [], c = 0; c < t.files.length; c++) {
                                var l = t.files[c];
                                a.push({
                                    filename: l.filename
                                })
                            }
                            s = JSON.stringify({
                                method: "files_with_callback",
                                params: a
                            })
                        } else s = JSON.stringify({
                            method: "files",
                            params: t.files
                        });
                        if (r.postMessage(s, Dropbox.baseUrl), null != t._ews_auth_token) {
                            var d = JSON.stringify({
                                method: "ews_auth_token",
                                params: {
                                    ews_auth_token: t._ews_auth_token
                                }
                            });
                            r.postMessage(d, Dropbox.baseUrl)
                        }
                    }
                    "function" == typeof t.ready && t.ready();
                    break;
                case "files_selected":
                case "files_saved":
                    "function" == typeof n && n(), "function" == typeof t.success && t.success(i.params, o.last_navigation);
                    break;
                case "cursor_changed":
                    o.last_navigation = {
                        cursor: i.params
                    };
                    break;
                case "progress":
                    "function" == typeof t.progress && t.progress(i.params);
                    break;
                case "close_dialog":
                    "function" == typeof n && n(), "function" == typeof t.cancel && t.cancel(o.last_navigation);
                    break;
                case "resize":
                    "function" == typeof t.resize && t.resize(i.params);
                    break;
                case "error":
                    "function" == typeof t.error && t.error(i.params);
                    break;
                case "error_and_close":
                    "function" == typeof n && n(), "function" == typeof t.error && t.error(i.params);
                    break;
                case "job_id":
                    "function" == typeof n && n(), p(t, i.params);
                    break;
                case "save_callback":
                    var f = function(e) {
                        if (null == e) throw new Error("Please supply {urls: [...]} to success callback");
                        if (null != e.url && null != e.urls) throw new Error("Do not pass both url and urls to the save callback");
                        if (null != e.url && (e.urls = [e.url]), null == e.urls) throw new Error("Please supply {urls: [...]} to success callback");
                        return i = {
                            method: "continue_saving",
                            params: {
                                download_urls: e.urls
                            }
                        }, void r.postMessage(JSON.stringify(i), Dropbox.baseUrl)
                    };
                    u(t, i.params, f);
                    break;
                case "_debug_log":
                    "undefined" != typeof console && null !== console && console.log(i.params.msg)
            }
        }

        function f(e) {
            var o = encodeURIComponent(window.location.protocol + "//" + window.location.host),
                n = encodeURIComponent(Dropbox.appKey);
            return e = Boolean(e), i(Dropbox.baseUrl + "/saver?origin=" + o + "&app_key=" + n + "&iframe=" + e)
        }

        function h(e, o, n) {
            return void 0 !== e && null !== e && "function" == typeof e[o] ? n(e, o) : void 0
        }

        function v(e, o) {
            return void 0 !== e && null !== e ? o(e) : void 0
        }

        function m() {
            o.last_navigation = {}, o.ieframe = null, o.currentChooserSession = null, g = 1, null == Dropbox.baseUrl && (Dropbox.baseUrl = "https://www.dropbox.com"), null == Dropbox.blockBaseUrl && (Dropbox.blockBaseUrl = "https://dl-web.dropbox.com"), Dropbox.addListener = function(e, o, n) {
                e.addEventListener ? e.addEventListener(o, n, !1) : e.attachEvent("on" + o, function(e) {
                    return e.preventDefault = function() {
                        return !1
                    }, n(e)
                })
            }, Dropbox.removeListener = function(e, o, n) {
                e.removeEventListener ? e.removeEventListener(o, n, !1) : e.detachEvent("on" + o, n)
            }, Dropbox.createChooserWidget = function(e) {
                var o = c(e),
                    n = l(s(o.options, !0));
                return n._handler = function(e) {
                    e.source === n.contentWindow && e.origin === Dropbox.baseUrl && d(e, null, o.options)
                }, Dropbox.addListener(window, "message", n._handler), n
            }, Dropbox.cleanupWidget = function(e) {
                if (!e._handler) throw new Error("Invalid widget!");
                Dropbox.removeListener(window, "message", e._handler), delete e._handler
            }
        }
        var b = this && this.__assign || function() {
            return b = Object.assign || function(e) {
                for (var o, n = 1, t = arguments.length; n < t; n++) {
                    o = arguments[n];
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                }
                return e
            }, b.apply(this, arguments)
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), null == window.Dropbox && (window.Dropbox = {});
        var g;
        o.popupDimensionsString = t, o.chooserUrl = s, o.createIEFrame = a, o.createChooserSession = c, o.createWidgetElement = l, o.handleJobId = p, o.handleMessageEvent = d, o.saverUrl = f, o.__guardMethod__ = h, o.__guard__ = v, o.initModule = m
    }, function(e, o, n) {
        "use strict";
        var t = this && this.__extends || (function() {
            var e = function(o, n) {
                return (e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, o) {
                        e.__proto__ = o
                    } || function(e, o) {
                        for (var n in o) o.hasOwnProperty(n) && (e[n] = o[n])
                    })(o, n)
            };
            return function(o, n) {
                function t() {
                    this.constructor = o
                }
                e(o, n), o.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            }
        })();
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = n(0),
            i = ["text", "documents", "images", "video", "audio"],
            s = (function(e) {
                function o(o) {
                    var n = e.call(this, o) || this;
                    return n.validateOptions = function() {
                        var e = function(e, o) {
                            if (void 0 !== n.options[e] && typeof n.options[e] !== o) throw new Error("The " + e + " option, if provided, must have type " + o)
                        };
                        if (e("linkType", "string"), e("_trigger", "string"), void 0 !== n.options.extensions) {
                            if (!(n.options.extensions instanceof Array)) throw new Error("The extensions option, if provided, must be an array");
                            for (var o = 0, t = n.options.extensions; o < t.length; o++) {
                                var r = t[o];
                                if ("string" != typeof r || !r.match(/^\.[\.\w$#&+@!()\-'`_~]+$/) && i.indexOf(r) === -1) throw new Error("The provided list of extensions or file types is not valid. See Chooser documentation: https://www.dropbox.com/developers/dropins/chooser/js. Available file types are: " + i.join(", "))
                            }
                        }
                        if (e("multiselect", "boolean"), e("iframe", "boolean"), e("folderselect", "boolean"), e("fileselect", "boolean"), void 0 !== n.options.fileselect && !n.options.fileselect && !n.options.folderselect) throw new Error("You must enable either fileselect or folderselect on the Chooser so the user can select something");
                        if (e("sizeLimit", "number"), void 0 !== n.options.sizeLimit && n.options.sizeLimit <= 0) throw new Error("The sizeLimit option, if provided, must be a positive number");
                        var s = n.options.initialNavigation;
                        if (void 0 !== s) {
                            if (void 0 !== s.mode && "string" != typeof s.mode) throw new Error("The initialNavigation.mode option, if provided, must be a string");
                            if (void 0 !== s.role && "string" != typeof s.role) throw new Error("The initialNavigation.role option, if provided, must be a string");
                            if (void 0 !== s.cursor && "string" != typeof s.cursor) throw new Error("The initialNavigation.cursor option, if provided, must be a string")
                        }
                        if (e("initialViewType", "string"), void 0 !== n.options.fields) {
                            if (!(n.options.fields instanceof Array)) throw new Error("The fields option, if provided, must be an array");
                            for (var a = 0, c = n.options.fields; a < c.length; a++) {
                                if ("string" != typeof c[a]) throw new Error("The fields option, if provided, must be an array of strings")
                            }
                        }
                        if (e("showSignOut", "boolean"), e("version", "string"), e("cl", "string"), "function" != typeof n.options.onSuccess) throw new Error("You must provide a success callback to the Chooser to see the files that the user selects");
                        e("onReady", "function"), e("onCancel", "function"), e("onError", "function"), e("onResize", "function")
                    }, n.validateOptions(), n
                }
                return t(o, e), o.prototype.urlParams = function() {
                    var e = [],
                        o = function(o, n) {
                            void 0 !== n && e.push({
                                key: o,
                                value: "" + n
                            })
                        };
                    return o("link_type", this.options.linkType), e.push({
                        key: "trigger",
                        value: this.options._trigger || "js"
                    }), void 0 !== this.options.extensions && e.push({
                        key: "extensions",
                        value: this.options.extensions.join(" ")
                    }), o("multiselect", this.options.multiselect), o("iframe", this.options.iframe), o("folderselect", this.options.folderselect), o("fileselect", this.options.fileselect), o("size_limit", this.options.sizeLimit), void 0 !== this.options.initialNavigation && (o("initial_navigation_mode", this.options.initialNavigation.mode), o("initial_navigation_role", this.options.initialNavigation.role), o("initial_navigation_cursor", this.options.initialNavigation.cursor)), o("initial_view_type", this.options.initialViewType), void 0 !== this.options.fields && e.push({
                        key: "fields",
                        value: this.options.fields.join(" ")
                    }), o("show_sign_out", this.options.showSignOut), o("version", this.options.version), o("cl", this.options.cl), e
                }, o.prototype.urlPathname = function() {
                    return "/chooser"
                }, o.prototype.close = function() {
                    "function" == typeof this.onCloseDialogMessage && this.onCloseDialogMessage()
                }, o.prototype.handleMessage = function(o) {
                    switch (e.prototype.handleMessage.call(this, o), o.method) {
                        case "ready":
                            void 0 !== this.options.onReady && this.options.onReady();
                            break;
                        case "files_selected":
                            this.close(), this.options.onSuccess(o.params, this.lastNavigation);
                            break;
                        case "cursor_changed":
                            this.lastNavigation = {
                                cursor: o.params
                            };
                            break;
                        case "close_dialog":
                            void 0 !== this.options.onCancel && this.options.onCancel(this.lastNavigation);
                            break;
                        case "resize":
                            void 0 !== this.options.onResize && this.options.onResize(o.params);
                            break;
                        case "error":
                            this.close();
                            break;
                        case "_debug_log":
                            void 0 !== console && null !== console && console.log(o.params.msg)
                    }
                }, o
            })(r.Dropin);
        o.BaseChooser = s;
        var a = (function(e) {
            function o(o) {
                return e.call(this, o) || this
            }
            return t(o, e), o
        })(s);
        o.Chooser = a
    }, function(e, o, n) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), n(4).initModule(), o.Dropbox = window.Dropbox
    }, function(e, o, n) {
        "use strict";

        function t() {
            i.initModule(), Dropbox.VERSION = "2";
            var e = new r.BrowserEnvironment;
            Dropbox.mount = e.mount.bind(e), Dropbox.openWindow = e.openWindow.bind(e);
            var o = e.remove.bind(e);
            Dropbox.unmount = o, Dropbox.closeWindow = o, Dropbox.Mover = c.Mover, Dropbox.Previewer = l.Previewer, Dropbox.Chooser = s.Chooser, Dropbox.ZoomChooser = a.ZoomChooser, i.genericDropins.init = function() {
                for (var e = document.getElementsByTagName("a"), o = 0; o < e.length; o++) {
                    var n = e[o];
                    (n.getAttribute("class") || "").split(" ").indexOf("dropbox-saver") >= 0 && (function(e) {
                        Dropbox.createSaveButton({
                            files: function() {
                                return [{
                                    url: e.getAttribute("data-url") || e.href,
                                    filename: e.getAttribute("data-filename") || i.filenameFromPath(e.pathname)
                                }]
                            }
                        }, e)
                    })(n)
                }
            }
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = n(5),
            i = n(7),
            s = n(2),
            a = n(8),
            c = n(9),
            l = n(10);
        o.initModule = t
    }, function(e, o, n) {
        "use strict";

        function t(e) {
            return function() {
                for (var o = 0, n = e; o < n.length; o++) {
                    (0, n[o])()
                }
            }
        }

        function r(e) {
            return "object" == typeof e && "string" == typeof e.method
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = n(6);
        o.TARGET_ORIGIN = "https://www.dropbox.com";
        var s = function() {},
            a = (function() {
                function e() {
                    var e = this;
                    this.activeDropins = [], this.deleteActiveDropin = function(o) {
                        return function() {
                            var n = e.activeDropins.indexOf(o);
                            n !== -1 && e.activeDropins.splice(n, 1)
                        }
                    }, this.openWindow = function(n) {
                        e.throwIfAlreadyActive(n);
                        var r = t([]);
                        try {
                            var a = n.url(),
                                c = "" + o.TARGET_ORIGIN + a.pathname + a.search,
                                l = i.PopupEnvironment.open(c, n.windowDimensions(), function() {
                                    r()
                                });
                            r = t([l.stopInterval, r]);
                            r = t([e.attach(n, l.messagingWindow), r]), r = t([function() {
                                n.sendMessage({
                                    method: "close"
                                })
                            }, r]);
                            var u = {
                                dropin: n,
                                cleanup: s
                            };
                            e.activeDropins.push(u), r = t([e.deleteActiveDropin(u), r]), n.hasOnCloseDialogMessage() || n.setOnCloseDialogMessage(r), u.cleanup = r
                        } catch (e) {
                            throw r(), e
                        }
                    }
                }
                return e.prototype.mount = function(e, n) {
                    if (!e) throw new Error("Dropbox component must be provided");
                    if (!n) throw new Error("Container element must be provided");
                    this.throwIfAlreadyActive(e);
                    var r = t([]);
                    try {
                        var i = this.createIframe();
                        r = t([this.attach(e, function() {
                            if (!i.contentWindow) throw new Error("iframe does not contain a contentWindow");
                            return i.contentWindow
                        }), r]);
                        var a = e.url();
                        i.src = "" + o.TARGET_ORIGIN + a.pathname + a.search + "&iframe=true", n.appendChild(i), r = t([function() {
                            n.removeChild(i)
                        }, r]);
                        var c = {
                            dropin: e,
                            cleanup: s
                        };
                        this.activeDropins.push(c), r = t([this.deleteActiveDropin(c), r]), e.hasOnCloseDialogMessage() || e.setOnCloseDialogMessage(r), c.cleanup = r
                    } catch (e) {
                        throw r(), e
                    }
                }, e.prototype.remove = function(e) {
                    if (!e) throw new Error("Dropbox component must be provided");
                    for (var o = 0, n = this.activeDropins; o < n.length; o++) {
                        var t = n[o];
                        if (t.dropin === e) {
                            t.cleanup();
                            break
                        }
                    }
                }, e.prototype.throwIfAlreadyActive = function(e) {
                    for (var o = 0, n = this.activeDropins; o < n.length; o++) {
                        if (n[o].dropin === e) throw new Error("Component is already in use")
                    }
                }, e.prototype.attach = function(e, n) {
                    e.sendMessage = function(e) {
                        n().postMessage(JSON.stringify(e), o.TARGET_ORIGIN)
                    };
                    var t = function(t) {
                        if (t.source === n() && t.origin === o.TARGET_ORIGIN) {
                            var i;
                            try {
                                i = JSON.parse(t.data)
                            } catch (e) {
                                return
                            }
                            r(i) && e.handleMessage(i)
                        }
                    };
                    return window.addEventListener("message", t),
                        function() {
                            e.sendMessage = s, window.removeEventListener("message", t)
                        }
                }, e.prototype.createIframe = function() {
                    var e = window.document.createElement("iframe");
                    return e.style.height = "100%", e.style.width = "100%", e.style.border = "none", e
                }, e
            })();
        o.BrowserEnvironment = a
    }, function(e, o, n) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var t = n(1),
            r = (function() {
                function e(e, o) {
                    var n = this;
                    this.popupWindow = e, this.onClose = o, this.stopInterval = function() {
                        clearInterval(n.intervalId)
                    }, this.isWindowClosedByUser = function() {
                        try {
                            return n.popupWindow.closed
                        } catch (e) {}
                        return !1
                    }, this.messagingWindow = function() {
                        return void 0 !== t.ieframe && null !== t.ieframe ? t.ieframe.contentWindow : n.popupWindow
                    }, this.handleInterval = function() {
                        n.isWindowClosedByUser() && (n.onClose(), n.stopInterval())
                    }, this.intervalId = setInterval(this.handleInterval, 100)
                }
                return e.open = function(o, n, r) {
                    var i = t.popupDimensionsString(n.width, n.height),
                        s = i + ",resizable,scrollbars",
                        a = window.open(o, "_blank", s);
                    if (null === a) throw new Error("Failed to open the window. Dropbox popups may only be attached to a user-triggered event handler such as a tap or click event.");
                    return a.focus(), new e(a, r)
                }, e
            })();
        o.PopupEnvironment = r
    }, function(e, o, n) {
        "use strict";

        function t(e, o) {
            null != o ? o.innerHTML = "" : (o = document.createElement("a"), o.href = "#"), o.className += " dropbox-dropin-btn", Dropbox.isBrowserSupported() ? o.className += " dropbox-dropin-default" : o.className += " dropbox-dropin-disabled";
            var n = document.createElement("span");
            return n.className = "dropin-btn-status", o.appendChild(n), e = document.createTextNode(e), o.appendChild(e), o
        }

        function r(e) {
            return e.replace(/\/+$/g, "").split("/").pop()
        }

        function i(e) {
            var o = document.createElement("a");
            return o.href = e, r(o.pathname)
        }

        function s() {
            a.initModule(), null == Dropbox.appKey && (Dropbox.appKey = a.__guard__(document.getElementById("dropboxjs"), function(e) {
                return e.getAttribute("data-app-key")
            })), Dropbox.init = function(e) {
                null != e.translation_function && (l = e.translation_function), null != e.appKey && (Dropbox.appKey = e.appKey)
            };
            var e = function(e) {
                    var o = document.createElement("iframe");
                    return o.src = e, o.style.display = "block", o.style.backgroundColor = "white", o.style.border = "none", o
                },
                n = function(e) {
                    var o, n, t;
                    if ("string" == typeof e[0]) t = e.shift(), o = "string" == typeof e[0] ? e.shift() : i(t), n = e.shift() || {}, n.files = [{
                        url: t,
                        filename: o
                    }];
                    else {
                        if (n = e.shift(), null == n) throw new Error("Missing arguments. See documentation.");
                        if ((null == n.files || !n.files.length) && "function" != typeof n.files) throw new Error("Missing files. See documentation.");
                        if (null != n.fetch_urls_fn) {
                            if ("function" != typeof n.fetch_urls_fn) throw new Error("fetch_urls_fn must be a function if supplied.  See documentation.");
                            n._fetch_url_on_save = !0
                        }
                        for (var r = 0; r < n.files.length; r++) {
                            var s = n.files[r];
                            if ("function" == typeof s.url && (n._fetch_url_on_save = !0, n.fetch_urls_fn = s.url, s.url = null, r > 0)) throw new Error("Old style url as callback is only supported for single files.");
                            s.filename || (s.filename = i(s.url))
                        }
                    }
                    return n
                };
            Dropbox.save = function() {
                for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
                var t = n(e);
                if (!Dropbox.isBrowserSupported()) return void alert(l("Your browser does not support the Dropbox Saver"));
                if (t._popup = !0, "object" != typeof t.files || !t.files.length) throw new Error("The object passed in must have a 'files' property that contains a list of objects. See documentation.");
                if (t.iframe && !t.windowName) throw new Error("Dropbox.save does not yet support creating its own iframe.                       windowName must be provided when the iframe option is present.");
                for (var i = 0, s = t.files; i < s.length; i++) {
                    var c = s[i];
                    if (t._fetch_url_on_save) {
                        if (t.fetch_urls_fn) {
                            if (null != c.url) throw new Error("You passed in a 'fetch_urls_fn' option to specify the file URLs.  Don't include individual URLs in each file objects.")
                        } else if ("function" != typeof c.url) throw new Error("File urls should be all urls, or a single file with function. See documentation.")
                    } else if ("string" != typeof c.url) throw new Error("File urls to download incorrectly configured. Each file must have a url. See documentation.")
                }
                var u = a.popupDimensionsString(735, 670);
                return r(a.saverUrl(t.iframe), u, t).window
            };
            var r = function(e, o, n) {
                    var t = function() {
                            c.closed || (c.close(), c.postMessage(JSON.stringify({
                                method: "close"
                            }), Dropbox.baseUrl)), Dropbox.removeListener(window, "message", r), clearInterval(l)
                        },
                        r = function(e) {
                            e.source !== c && e.source !== (void 0 !== a.ieframe && null !== a.ieframe ? a.ieframe.contentWindow : void 0) || a.handleMessageEvent(e, t, n)
                        },
                        i = function() {
                            (function() {
                                try {
                                    return c.closed
                                } catch (e) {}
                            })() && (t(), "function" == typeof n.cancel && n.cancel(a.last_navigation))
                        },
                        s = n.iframe ? "" : o + ",resizable,scrollbars",
                        c = window.open(e, n.windowName || "dropbox", s);
                    if (!c) throw new Error("Failed to open/load the window. Dropbox.choose and Dropbox.save should only be called from within a user-triggered event handler such as a tap or click event.");
                    c.focus();
                    var l = setInterval(i, 100);
                    return Dropbox.addListener(window, "message", r), {
                        window: c,
                        onClose: t
                    }
                },
                s = function(e) {
                    null == e.success && a.__guardMethod__(console, "warn", function(e) {
                        return e.warn("You must provide a success callback to the Chooser to see the files that the user selects")
                    }), void 0 === e.fileselect || Boolean(e.fileselect) || Boolean(e.folderselect) || a.__guardMethod__(console, "error", function(e) {
                        return e.error("You must enable either fileselect or folderselect on the Chooser so the user can select something")
                    });
                    var o = function() {
                        return a.__guardMethod__(console, "warn", function(e) {
                            return e.warn("The provided list of extensions or file types is not valid. See Chooser documentation: https://www.dropbox.com/developers/dropins/chooser/js")
                        }), a.__guardMethod__(console, "warn", function(e) {
                            return e.warn("Available file types are: " + c.join(", "))
                        }), delete e.extensions
                    };
                    if (null != e.extensions && null != Array.isArray)
                        if (Array.isArray(e.extensions))
                            for (var n = 0, t = e.extensions; n < t.length; n++) {
                                var r = t[n];
                                r.match(/^\.[\.\w$#&+@!()\-'`_~]+$/) || c.indexOf(r) !== -1 || o()
                            } else o();
                    return void 0 !== e.sizeLimit && "number" != typeof e.sizeLimit && e.sizeLimit <= 0 && a.__guardMethod__(console, "error", function(e) {
                        return e.error("The sizeLimit option, if provided, must be a positive number")
                    }), e
                },
                u = function(o) {
                    if (!Dropbox.isBrowserSupported()) return void alert(l("Your browser does not support the Dropbox Chooser"));
                    var n = a.createChooserSession(o);
                    if (o.iframe && !o.windowName) {
                        var t = e(a.chooserUrl(o, !0));
                        t.style.width = "735px", t.style.height = "552px", t.style.margin = "125px auto 0 auto", t.style.border = "1px solid #ACACAC", t.style.boxShadow = "rgba(0, 0, 0, .2) 0px 4px 16px";
                        var i = document.createElement("div");
                        i.style.position = "fixed", i.style.left = i.style.right = i.style.top = i.style.bottom = "0", i.style.zIndex = "1000", i.style.backgroundColor = "rgba(160, 160, 160, 0.2)", i.appendChild(t), document.body.appendChild(i);
                        var s = function(e) {
                            e.source === t.contentWindow && (n.onClose = function() {
                                document.body.removeChild(i), Dropbox.removeListener(window, "message", s)
                            }, a.handleMessageEvent(e, n.onClose, n.options))
                        };
                        Dropbox.addListener(window, "message", s)
                    } else {
                        var c = a.popupDimensionsString(735, 552);
                        n.onClose = r(a.chooserUrl(n.options, n.options.iframe), c, n.options).onClose
                    }
                };
            Dropbox.choose = function(e) {
                null == e && (e = {}), e = s(e), u(e)
            }, Dropbox.cancelChooser = function() {
                a.currentChooserSession && (a.currentChooserSession.onClose && a.currentChooserSession.onClose(), a.currentChooserSession.options.cancel && a.currentChooserSession.options.cancel(a.last_navigation))
            };
            var p = function() {
                for (var e = 0, o = [/IEMobile\/(7|8|9|10)\./, /BB10;/, /CriOS/]; e < o.length; e++) {
                    if (o[e].test(navigator.userAgent)) return !1
                }
                return "undefined" != typeof JSON && null !== JSON && null != window.postMessage && null != window.addEventListener && !/MSIE [7-9]/.test(navigator.userAgent)
            };
            Dropbox.isBrowserSupported = function() {
                var e = p();
                return Dropbox.isBrowserSupported = function() {
                    return e
                }, e
            }, Dropbox.createChooseButton = function(e) {
                null == e && (e = {}), e = s(e);
                var o = t(l("Choose from Dropbox"));
                return Dropbox.addListener(o, "click", function(n) {
                    n.preventDefault(), u({
                        success: function(n, t) {
                            o.className = "dropbox-dropin-btn dropbox-dropin-success", "function" == typeof e.success && e.success(n, t)
                        },
                        cancel: e.cancel,
                        linkType: e.linkType,
                        multiselect: e.multiselect,
                        fileselect: e.fileselect,
                        folderselect: e.folderselect,
                        extensions: e.extensions,
                        sizeLimit: e.sizeLimit,
                        iframe: e.iframe,
                        _trigger: "button"
                    })
                }), o
            }, Dropbox.createSaveButton = function() {
                for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
                var r = n(e),
                    i = e.shift();
                return i = t(l("Save to Dropbox"), i), Dropbox.addListener(i, "click", function(e) {
                    if (e.preventDefault(), i.className.indexOf("dropbox-dropin-error") >= 0 || i.className.indexOf("dropbox-dropin-default") >= 0 || i.className.indexOf("dropbox-dropin-disabled") >= 0) {
                        var o = ("function" == typeof r.files ? r.files() : void 0) || r.files;
                        if (!(null != o ? o.length : void 0)) return i.className = "dropbox-dropin-btn dropbox-dropin-error", void("function" == typeof r.error && r.error("Missing files"));
                        Dropbox.save({
                            files: o,
                            success: function() {
                                i.className = "dropbox-dropin-btn dropbox-dropin-success", "function" == typeof r.success && r.success()
                            },
                            progress: function(e) {
                                i.className = "dropbox-dropin-btn dropbox-dropin-progress", "function" == typeof r.progress && r.progress(e)
                            },
                            cancel: function() {
                                "function" == typeof r.cancel && r.cancel()
                            },
                            error: function(e) {
                                i.className = "dropbox-dropin-btn dropbox-dropin-error", "function" == typeof r.error && r.error(e)
                            }
                        })
                    }
                }), i
            };
            var d = function(e, o) {
                    return "  background: " + e + ";\n  background: -moz-linear-gradient(top, " + e + " 0%, " + o + " 100%);\n  background: -webkit-linear-gradient(top, " + e + " 0%, " + o + " 100%);\n  background: linear-gradient(to bottom, " + e + " 0%, " + o + " 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='" + e + "', endColorstr='" + o + "',GradientType=0);  "
                },
                f = document.createElement("style");
            f.type = "text/css";
            var h = '  @-webkit-keyframes rotate {\n    from  { -webkit-transform: rotate(0deg); }\n    to   { -webkit-transform: rotate(360deg); }\n  }\n\n  @keyframes rotate {\n    from  { transform: rotate(0deg); }\n    to   { transform: rotate(360deg); }\n  }\n\n    .dropbox-dropin-btn, .dropbox-dropin-btn:link, .dropbox-dropin-btn:hover {\n      display: inline-block;\n      height: 14px;\n      font-family: "Lucida Grande", "Segoe UI", "Tahoma", "Helvetica Neue", "Helvetica", sans-serif;\n      font-size: 11px;\n      font-weight: 600;\n      color: #636363;\n      text-decoration: none;\n      padding: 1px 7px 5px 3px;\n      border: 1px solid #ebebeb;\n      border-radius: 2px;\n      border-bottom-color: #d4d4d4;\n      ' + d("#fcfcfc", "#f5f5f5") + "\n    }\n\n    .dropbox-dropin-default:hover, .dropbox-dropin-error:hover {\n      border-color: #dedede;\n      border-bottom-color: #cacaca;\n      " + d("#fdfdfd", "#f5f5f5") + "\n    }\n\n    .dropbox-dropin-default:active, .dropbox-dropin-error:active {\n      border-color: #d1d1d1;\n      box-shadow: inset 0 1px 1px rgba(0,0,0,0.1);\n    }\n\n    .dropbox-dropin-btn .dropin-btn-status {\n      display: inline-block;\n      width: 15px;\n      height: 14px;\n      vertical-align: bottom;\n      margin: 0 5px 0 2px;\n      background: transparent url('" + Dropbox.baseUrl + "/static/images/widgets/dbx-saver-status.png') no-repeat;\n      position: relative;\n      top: 2px;\n    }\n\n    .dropbox-dropin-default .dropin-btn-status {\n      background-position: 0px 0px;\n    }\n\n    .dropbox-dropin-progress .dropin-btn-status {\n      width: 18px;\n      margin: 0 4px 0 0;\n      background: url('" + Dropbox.baseUrl + "/static/images/widgets/dbx-progress.png') no-repeat center center;\n        -webkit-animation-name: rotate;\n        -webkit-animation-duration: 1.7s;\n        -webkit-animation-iteration-count: infinite;\n        -webkit-animation-timing-function: linear;\n      animation-name: rotate;\n      animation-duration: 1.7s;\n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n    }\n\n    .dropbox-dropin-success .dropin-btn-status {\n      background-position: -15px 0px;\n    }\n\n    .dropbox-dropin-disabled {\n      background: #e0e0e0;\n      border: 1px #dadada solid;\n      border-bottom: 1px solid #ccc;\n      box-shadow: none;\n    }\n\n    .dropbox-dropin-disabled .dropin-btn-status {\n      background-position: -30px 0px;\n    }\n\n    .dropbox-dropin-error .dropin-btn-status {\n      background-position: -45px 0px;\n    }\n\n  @media only screen and (-webkit-min-device-pixel-ratio: 1.4) {\n      .dropbox-dropin-btn .dropin-btn-status {\n        background-image: url('" + Dropbox.baseUrl + "/static/images/widgets/dbx-saver-status-2x.png');\n        background-size: 60px 14px;\n          -webkit-background-size: 60px 14px;\n      }\n\n      .dropbox-dropin-progress .dropin-btn-status {\n        background: url('" + Dropbox.baseUrl + "/static/images/widgets/dbx-progress-2x.png') no-repeat center center;\n        background-size: 20px 20px;\n          -webkit-background-size: 20px 20px;\n      }\n  }\n\n    .dropbox-saver:hover, .dropbox-chooser:hover {\n      text-decoration: none;\n      cursor: pointer;\n    }\n\n    .dropbox-chooser, .dropbox-dropin-btn {\n      line-height: 11px !important;\n      text-decoration: none !important;\n      box-sizing: content-box !important;\n        -webkit-box-sizing: content-box !important;\n        -moz-box-sizing: content-box !important;\n    }\n    ";
            f.styleSheet ? f.styleSheet.cssText = h : f.textContent = h, document.getElementsByTagName("head")[0].appendChild(f), setTimeout(a.createIEFrame, 0);
            var v = function() {
                document.removeEventListener ? document.removeEventListener("DOMContentLoaded", v, !1) : document.detachEvent && document.detachEvent("onreadystatechange", v), a.createIEFrame(), o.genericDropins.init()
            };
            "interactive" === document.readyState || "complete" === document.readyState ? setTimeout(v, 0) : document.addEventListener ? document.addEventListener("DOMContentLoaded", v, !1) : document.attachEvent("onreadystatechange", v)
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = n(1),
            c = ["text", "documents", "images", "video", "audio"];
        o.genericDropins = {
            init: function() {}
        };
        var l = function(e) {
            return e
        };
        o.createDropinButton = t, o.filenameFromPath = r, o.initModule = s
    }, function(e, o, n) {
        "use strict";
        var t = this && this.__extends || (function() {
            var e = function(o, n) {
                return (e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, o) {
                        e.__proto__ = o
                    } || function(e, o) {
                        for (var n in o) o.hasOwnProperty(n) && (e[n] = o[n])
                    })(o, n)
            };
            return function(o, n) {
                function t() {
                    this.constructor = o
                }
                e(o, n), o.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            }
        })();
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = n(2),
            i = (function(e) {
                function o(o) {
                    var n = e.call(this, o) || this;
                    return n.validateNoOptionLinkType(), n
                }
                return t(o, e), o.prototype.validateNoOptionLinkType = function() {
                    if (void 0 !== this.options.linkType) throw new Error("The ZoomChooser SDK does not accept a linkType.")
                }, o.prototype.urlParams = function() {
                    var o = e.prototype.urlParams.call(this);
                    return o.push({
                        key: "is_zoom_chooser",
                        value: "true"
                    }), o
                }, o
            })(r.BaseChooser);
        o.ZoomChooser = i
    }, function(e, o, n) {
        "use strict";
        var t = this && this.__extends || (function() {
                var e = function(o, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, o) {
                            e.__proto__ = o
                        } || function(e, o) {
                            for (var n in o) o.hasOwnProperty(n) && (e[n] = o[n])
                        })(o, n)
                };
                return function(o, n) {
                    function t() {
                        this.constructor = o
                    }
                    e(o, n), o.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
                }
            })(),
            r = this && this.__assign || function() {
                return r = Object.assign || function(e) {
                    for (var o, n = 1, t = arguments.length; n < t; n++) {
                        o = arguments[n];
                        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                    }
                    return e
                }, r.apply(this, arguments)
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = n(0),
            s = (function(e) {
                function o(n) {
                    var t = e.call(this, n) || this;
                    return o.validateOnSuccess(t.options.onSuccess), o.validateOnCancel(t.options.onCancel), t.state = {
                        entries: t.options.entries,
                        initialFolderSelection: t.options.initialFolderSelection
                    }, t.onSuccess = t.options.onSuccess, t.onCancel = t.options.onCancel, t
                }
                return t(o, e), o.validateOnSuccess = function(e) {
                    if (e && "function" != typeof e) throw new Error("onSuccess must be a function")
                }, o.validateOnCancel = function(e) {
                    if (e && "function" != typeof e) throw new Error("onCancel must be a function")
                }, o.prototype.urlParams = function() {
                    return [{
                        key: "account_id",
                        value: this.options.accountId
                    }, {
                        key: "initial_folder_selection",
                        value: this.state.initialFolderSelection
                    }]
                }, o.prototype.urlPathname = function() {
                    return "/dropins/mover"
                }, o.prototype.handleMessage = function(o) {
                    switch (e.prototype.handleMessage.call(this, o), o.method) {
                        case "success":
                            this.onSuccess && this.onSuccess();
                            break;
                        case "cancel":
                            this.onCancel && this.onCancel()
                    }
                }, o.prototype.setEntries = function(e) {
                    this.state = r({}, this.state, {
                        entries: e
                    }), this.sendState()
                }, o.prototype.setInitialFolderSelection = function(e) {
                    this.state = r({}, this.state, {
                        initialFolderSelection: e
                    }), this.sendState()
                }, o.prototype.setOnSuccess = function(e) {
                    o.validateOnSuccess(e), this.onSuccess = e
                }, o.prototype.setOnCancel = function(e) {
                    o.validateOnCancel(e), this.onCancel = e
                }, o
            })(i.Dropin);
        o.Mover = s
    }, function(e, o, n) {
        "use strict";
        var t = this && this.__extends || (function() {
                var e = function(o, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, o) {
                            e.__proto__ = o
                        } || function(e, o) {
                            for (var n in o) o.hasOwnProperty(n) && (e[n] = o[n])
                        })(o, n)
                };
                return function(o, n) {
                    function t() {
                        this.constructor = o
                    }
                    e(o, n), o.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
                }
            })(),
            r = this && this.__assign || function() {
                return r = Object.assign || function(e) {
                    for (var o, n = 1, t = arguments.length; n < t; n++) {
                        o = arguments[n];
                        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                    }
                    return e
                }, r.apply(this, arguments)
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = n(0),
            s = (function(e) {
                function o(o) {
                    void 0 === o && (o = {});
                    var n = e.call(this, o) || this;
                    return n.state = {
                        accountId: n.options.accountId,
                        hideAccount: n.options.hideAccount,
                        link: n.options.link,
                        cl: n.options.cl,
                        view: n.options.initialView,
                        openLinksWithSDK: !!n.options.onOpenLink
                    }, n
                }
                return t(o, e), o.prototype.urlPathname = function() {
                    return "/dropins/previewer"
                }, o.prototype.urlParams = function() {
                    return (this.state.accountId ? [{
                        key: "account_id",
                        value: this.state.accountId
                    }] : []).concat(this.state.hideAccount ? [{
                        key: "hide_account",
                        value: "true"
                    }] : [], this.state.view ? [{
                        key: "initial_view",
                        value: this.state.view
                    }] : [], this.state.cl ? [{
                        key: "cl",
                        value: this.state.cl
                    }] : [], this.state.link ? [{
                        key: "link",
                        value: this.state.link
                    }] : [])
                }, o.prototype.handleMessage = function(o) {
                    switch (o.method) {
                        case "view_change":
                            var n = o.params.view;
                            this.state = r({}, this.state, {
                                view: n
                            }), this.options.onViewChange && this.options.onViewChange(n);
                            break;
                        case "open_link":
                            this.options.onOpenLink && this.options.onOpenLink(o.params.link);
                            break;
                        default:
                            e.prototype.handleMessage.call(this, o)
                    }
                }, o.prototype.setAccountId = function(e) {
                    this.state = r({}, this.state, {
                        accountId: e
                    }), this.sendState()
                }, o.prototype.setHideAccount = function(e) {
                    this.state = r({}, this.state, {
                        hideAccount: e
                    }), this.sendState()
                }, o.prototype.setLink = function(e) {
                    this.state = r({}, this.state, {
                        link: e
                    }), this.sendState()
                }, o.prototype.setView = function(e) {
                    this.state = r({}, this.state, {
                        view: e
                    }), this.sendState()
                }, o
            })(i.Dropin);
        o.Previewer = s
    }])
});
//# sourceMappingURL=dropins_sdk_v2_internal.min.js-vflM6ga9S.map