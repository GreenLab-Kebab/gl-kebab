(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["app"], {
        0: function(e, t, n) {
            n("8f7e"), e.exports = n("56d7")
        },
        "0312": function(e, t, n) {},
        "0a49": function(e, t, n) {},
        1211: function(e, t, n) {},
        "1b0c": function(e, t, n) {
            "use strict";
            var i = n("b671"),
                o = n.n(i);
            o.a
        },
        "21b6": function(e, t, n) {
            "use strict";
            t["a"] = {
                methods: {
                    goBack: function() {
                        var e = window.history;
                        e && e.length && e.length <= 1 ? this.$router.push({
                            path: "/"
                        }) : this.$router.go(-1)
                    }
                }
            }
        },
        "23eb": function(e, t, n) {
            "use strict";
            var i = n("f58a"),
                o = n.n(i);
            o.a
        },
        "23fa": function(e, t, n) {
            "use strict";
            var i = n("df14"),
                o = n.n(i);
            o.a
        },
        2579: function(e, t, n) {},
        "29c6": function(e, t, n) {},
        "2fb0": function(e, t, n) {
            var i = {
                "./": "6f78",
                "./huawei": "3c23",
                "./huawei.js": "3c23",
                "./index": "6f78",
                "./index.js": "6f78",
                "./mobile": "8f9f",
                "./mobile.js": "8f9f"
            };

            function o(e) {
                var t = a(e);
                return n(t)
            }

            function a(e) {
                var t = i[e];
                if (!(t + 1)) {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return t
            }
            o.keys = function() {
                return Object.keys(i)
            }, o.resolve = a, e.exports = o, o.id = "2fb0"
        },
        "325f": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [n("div", {
                        staticStyle: {
                            height: "2.75rem"
                        }
                    }), n("div", {
                        staticClass: "m-top-bar m-panel m-container-max m-topbar-max"
                    }, [n("div", {
                        staticClass: "nav-box"
                    }, [n("div", {
                        staticClass: "nav-left"
                    }, [e.back ? n("div", {
                        staticClass: "nav-ctrl",
                        on: {
                            click: function(t) {
                                return e.goback()
                            }
                        }
                    }, [n("i", {
                        staticClass: "m-font m-font-arrow-left"
                    }), e._v("返回\n        ")]) : e._e(), e._t("left")], 2), n("div", {
                        staticClass: "nav-main"
                    }, [n("h3", {
                        staticClass: "m-text-cut",
                        domProps: {
                            textContent: e._s(e.title)
                        }
                    })]), n("div", {
                        staticClass: "nav-right"
                    }, [e._t("right"), e.more ? n("div", {
                        staticClass: "nav-ctrl",
                        on: {
                            click: function(t) {
                                return e.gomore()
                            }
                        }
                    }, [n("i", {
                        staticClass: "m-font m-font-dot-more"
                    })]) : e._e()], 2)])])])
                },
                o = [],
                a = n("21b6"),
                r = {
                    mixins: [a["a"]],
                    name: "topbar",
                    props: {
                        title: String,
                        back: Boolean,
                        more: Boolean,
                        goback: {
                            type: Function,
                            default: function() {
                                this.goBack()
                            }
                        },
                        gomore: Function
                    }
                },
                s = r,
                c = (n("aa18"), n("0c7c")),
                l = Object(c["a"])(s, i, o, !1, null, null, null);
            t["default"] = l.exports
        },
        3408: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.requesting,
                            expression: "requesting"
                        }],
                        staticClass: "m-tips m-tips-tp"
                    }, [e._m(0)])
                },
                o = [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "m-loading m-loading-dark"
                    }, [n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span")])
                }],
                a = {
                    name: "nextpage",
                    props: {
                        requesting: {
                            type: Boolean,
                            default: !1
                        }
                    }
                },
                r = a,
                s = (n("9041"), n("0c7c")),
                c = Object(s["a"])(r, i, o, !1, null, "f7085ff0", null);
            t["default"] = c.exports
        },
        "383a": function(e, t, n) {
            "use strict";
            n("551c"), n("8a81");
            var i = n("a026");
            t["a"] = new i["a"]
        },
        "3c23": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("a4bb"),
                o = n.n(i);
            n("386d");
            ! function() {
                function e(e, t, n) {
                    var i = "http://122.11.38.205/fastapprouter/",
                        a = "";
                    if (i = i + (new Date).getTime() + "/", e && (i = i + "?i=" + e), t && (i = i + "&p=" + t), function(e) {
                            if (!e) return !0;
                            var t = void 0;
                            for (t in e) return !1;
                            return !0
                        }(n)) {
                        var r = window.location.search;
                        r.indexOf("?") > -1 && (a = r.substr(1))
                    } else a = o()(n).map(function(e) {
                        return e + "=" + encodeURIComponent(n[e])
                    }).join("&");
                    "" !== a && (i = i + "&a=" + encodeURIComponent(a));
                    var s = document.createElement("img");
                    s.src = i, s.style.width = "1px", s.style.height = "1px", s.style.display = "none", document.body.appendChild(s)
                }

                function t() {
                    var e = navigator.userAgent;
                    if (e) {
                        e = e.toLowerCase();
                        var t = e.indexOf("android"),
                            n = e.indexOf("build/huawei");
                        if (t >= 0 && n >= 0) {
                            var i = e.slice(t + 8, t + 9);
                            if (i >= 8) return !0
                        }
                    }
                    return !1
                }

                function n(e, t, n) {
                    var i = document.createElement("iframe"),
                        a = "hwfastapp://" + e;
                    t && (a = a + "/" + t), n && o()(n).length > 0 && (n = o()(n).map(function(e) {
                        return e + "=" + encodeURIComponent(n[e])
                    }).join("&"), a = a + "?" + n), i.src = a, document.body.appendChild(i), i.style.display = "none"
                }
                window.appRouterHw = function(i, o, a) {
                    if (t()) {
                        a = a || {}, e(i, o, a);
                        var r = 500,
                            s = new Date;
                        setTimeout(function() {
                            var e = new Date;
                            r + 30 >= e - s && n(i, o, a)
                        }, r)
                    } else n(i, o, a)
                }
            }()
        },
        "3ec7": function(e, t, n) {
            var i = {
                "./ahref.js": "67fe",
                "./inf-scroll.js": "ffee",
                "./mactive.js": "d50c",
                "./mvlink.js": "d03a"
            };

            function o(e) {
                var t = a(e);
                return n(t)
            }

            function a(e) {
                var t = i[e];
                if (!(t + 1)) {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return t
            }
            o.keys = function() {
                return Object.keys(i)
            }, o.resolve = a, e.exports = o, o.id = "3ec7"
        },
        "43b3": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [n("mv-toast"), n("mv-msgbox"), n("mv-actionsheet"), n("mv-pswp")], 1)
                },
                o = [],
                a = {
                    name: "modal",
                    props: {}
                },
                r = a,
                s = n("0c7c"),
                c = Object(s["a"])(r, i, o, !1, null, null, null);
            t["default"] = c.exports
        },
        5042: function(e, t, n) {},
        "555a": function(e, t, n) {
            "use strict";
            var i = n("2579"),
                o = n.n(i);
            o.a
        },
        "56d7": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("0a0d"),
                o = n.n(i),
                a = (n("a481"), n("cebc")),
                r = (n("4917"), n("551c"), n("8a81"), n("a026")),
                s = n("2f62"),
                c = (n("54ba"), n("4f5a"), n("29c6"), n("0312"), n("5d2d")),
                l = n("58ca"),
                u = n("a18c"),
                d = n("f499"),
                p = n.n(d),
                f = {
                    composerText: "",
                    composerPhoto: [],
                    composerCallback: null
                },
                m = 0,
                h = {
                    UPDATE_composer: function(e, t) {
                        e.composerText = t || ""
                    },
                    UPDATE_composerPhoto: function(e, t) {
                        t && t.length ? e.composerPhoto = t.map(function(e) {
                            return e.id
                        }).filter(function(e) {
                            return e
                        }) : e.composerPhoto = []
                    },
                    UPDATE_composerCallback: function(e, t) {
                        e.composerCallback = t || null
                    }
                },
                v = {
                    updateComposer: function(e, t) {
                        var n = e.commit;
                        return n("UPDATE_composer", t)
                    },
                    updateComposerPhoto: function(e, t) {
                        var n = e.commit;
                        return n("UPDATE_composerPhoto", t)
                    },
                    getComposerCallBack: function(e) {
                        var t = e.commit;
                        if (o()() - m > 1e4) t("UPDATE_composerCallback");
                        else if (f.composerCallback) {
                            var n = JSON.parse(p()(f.composerCallback));
                            return t("UPDATE_composerCallback"), n
                        }
                        return null
                    },
                    setComposerCallBack: function(e, t) {
                        var n = e.commit;
                        m = o()(), n("UPDATE_composerCallback", t)
                    }
                },
                g = {
                    compose: function(e) {
                        return e.composerText
                    },
                    composerPhoto: function(e) {
                        return e.composerPhoto
                    }
                },
                w = {
                    state: f,
                    actions: v,
                    mutations: h,
                    getters: g
                },
                b = {
                    friendGroup: null,
                    followerInfo: null
                },
                _ = {
                    SET_friendGroup: function(e, t) {
                        e.friendGroup = t || null
                    },
                    SET_followerInfo: function(e, t) {
                        e.followerInfo = t || null
                    }
                },
                x = {
                    setFriendGroup: function(e, t) {
                        var n = e.commit;
                        return n("SET_friendGroup", t)
                    },
                    setFollowerInfo: function(e, t) {
                        var n = e.commit;
                        return n("SET_followerInfo", t)
                    }
                },
                C = {
                    friendGroup: function(e) {
                        return e.friendGroup
                    },
                    followerInfo: function(e) {
                        return e.followerInfo
                    }
                },
                y = {
                    state: b,
                    actions: x,
                    mutations: _,
                    getters: C
                },
                T = {
                    pageid: ""
                },
                k = {
                    UPDATE_PAGEID: function(e, t) {
                        e.pageid = t || ""
                    }
                },
                E = {
                    updatePageId: function(e, t) {
                        var n = e.commit;
                        return n("UPDATE_PAGEID", t)
                    }
                },
                S = {
                    curPageId: function(e) {
                        return e.pageid
                    }
                },
                L = {
                    state: T,
                    actions: E,
                    mutations: k,
                    getters: S
                },
                I = {
                    config: {},
                    login: !(!+c["a"].getData("h5_mlogin") && !+c["a"].getCookie("MLOGIN"))
                },
                O = {
                    updateConfig: function(e, t) {
                        e.config = Object(a["a"])({}, t)
                    },
                    updateLoggedin: function(e, t) {
                        e.login = !!+t
                    }
                },
                P = {
                    updateConfig: function(e, t) {
                        var n = e.commit;
                        return n("updateConfig", t)
                    },
                    updateLoggedin: function(e, t) {
                        var n = e.commit;
                        return n("updateLoggedin", t)
                    }
                },
                $ = {
                    config: function(e) {
                        return e.config
                    },
                    mlogin: function(e) {
                        return e.login || e.config.login
                    }
                },
                D = {
                    state: I,
                    actions: P,
                    mutations: O,
                    getters: $
                },
                A = n("2d7d"),
                W = n.n(A),
                M = n("795b"),
                R = n.n(M),
                U = n("bc3a"),
                F = n.n(U),
                B = n("4328"),
                V = n.n(B),
                H = n("383a");

            function N(e) {
                for (var t in e) 0 === e[t] || e[t] || delete e[t]
            }
            var j = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),
                q = j ? "development" : "production";
            F.a.defaults.withCredentials = !0, F.a.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest", F.a.defaults.headers.common["MWeibo-Pwa"] = "1", F.a.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            var Y = function(e) {
                F.a.defaults.baseURL = "".concat(window.location.protocol, "//m.weibo.cn"), "development" === q && (F.a.defaults.baseURL = "https://m.weibo.cn"), /\.weibo.cn$/.test(window.location.hostname) && (F.a.defaults.baseURL = "".concat(window.location.protocol, "//").concat(window.location.hostname)), e.prototype.$http = F.a, e.http = F.a, F.a.interceptors.request.use(function(e) {
                    var t = e.params,
                        n = e.data;
                    if ("get" === e.method) {
                        var i = +("standalone" in window.navigator && window.navigator.standalone) || "";
                        t ? (t.standalone = i, N(t)) : i && (e.params = {
                            standalone: i
                        })
                    }
                    return n && (N(n), n.append ? n.append("st", $e.state.config.config.st) : (n.st = $e.state.config.config.st, e.data = V.a.stringify(n))), e
                }, function(e) {
                    return R.a.reject(e)
                }), F.a.interceptors.response.use(function(e) {
                    if (e.status >= 400) {
                        var t = "";
                        return e.body && e.body.msg ? t = e.body.msg : (t = "接口请求失败", e.status && (t += "(".concat(e.status, ")"))), H["a"].$emit("mvMsgbox", {
                            type: "error",
                            text: t
                        }), window.Raven && window.Raven.captureMessage("接口请求失败", {
                            level: "warning",
                            tags: {
                                errorCode: e.status
                            },
                            extra: {
                                msg: t
                            }
                        }), e
                    }
                    var n = e.data;
                    if (n) {
                        if (21301 === n.error_code && "production" !== q && H["a"].$emit("mvMsgbox", {
                                type: "alert",
                                text: "TAuth2 Token 失效, 请联系老司机@王炜。"
                            }), -100 === n.ok && n.url) {
                            var i = new URL(n.url);
                            return "passport.weibo.cn" === i.host && i.pathname.match(/^\/signin\//) ? H["a"].$emit("login", i.searchParams.get("r")) : window.location.href = n.url, R.a.reject(e)
                        }
                        if (0 === n.ok) switch (H["a"].$emit("mvToast", !1), n.error_type) {
                            case "alert":
                                H["a"].$emit("mvMsgbox", {
                                    type: "alert",
                                    text: n.msg
                                });
                                break;
                            case "confirm":
                                n.btn || (n.btn = {}), H["a"].$emit("mvMsgbox", {
                                    type: "confirm",
                                    title: n.title || "",
                                    text: n.msg,
                                    style: {
                                        color: n.btn.color || "orange"
                                    },
                                    btnText: n.btn.text || "",
                                    btnCallback: function() {
                                        n.btn.url && (window.location.href = n.btn.url)
                                    }
                                });
                                break;
                            case "captcha":
                                var a = function(e) {
                                        return e.length > 0 && e.length < 10
                                    },
                                    r = "".concat(F.a.defaults.baseURL, "/api/captcha/show?t=").concat(o()());
                                H["a"].$emit("mvMsgbox", {
                                    title: n.msg,
                                    type: "prompt",
                                    pic: r,
                                    validate: a
                                }, function(t) {
                                    if (t) {
                                        H["a"].$emit("mvMsgbox", !1);
                                        var n = e.config,
                                            i = V.a.parse(n.data);
                                        i._code = t, n.data = i, F()(n)
                                    }
                                });
                                break;
                            default:
                        }
                    }
                    return e
                }, function(e) {
                    return R.a.reject(e)
                })
            };
            r["a"].use(Y);
            var z = null,
                K = {
                    data: {}
                },
                G = new W.a,
                X = {
                    UPDATE_unRead: function(e, t) {
                        for (var n in t) G.has(n) && (o()() - G.get(n) < 3e4 ? t[n] = e.data[n] : G.delete(n));
                        e.data = t
                    }
                },
                Q = {
                    unreadAction: function(e) {
                        function t() {
                            e.rootState.online.online && r["a"].http.get("/api/remind/unread", {
                                params: {
                                    t: +new Date + Math.floor(1e4 * Math.random())
                                }
                            }).then(function(t) {
                                if (t.data && t.data.ok > 0) {
                                    var n = t.data.data;
                                    n.mention = n.mention_cmt + n.mention_status, e.commit("UPDATE_unRead", n)
                                }
                            })
                        }
                        z ? clearInterval(z) : t(), z = setInterval(t, 2e4)
                    },
                    clearUnreadTimer: function() {
                        clearInterval(z), z = null
                    },
                    freezeUnreadKey: function(e, t) {
                        K.data[t] = 0, G.set(t, o()())
                    },
                    clearFreeze: function() {
                        G.clear()
                    }
                },
                Z = {
                    unread: function(e) {
                        return e.data
                    }
                },
                J = {
                    state: K,
                    actions: Q,
                    mutations: X,
                    getters: Z
                },
                ee = {
                    online: !0
                },
                te = {
                    UPDATE_ONLINE: function(e, t) {
                        e.online = !!t
                    }
                },
                ne = {
                    updateOnlineState: function(e, t) {
                        var n = e.commit;
                        return n("UPDATE_ONLINE", t)
                    }
                },
                ie = {
                    online: function(e) {
                        return e.online
                    }
                },
                oe = {
                    state: ee,
                    actions: ne,
                    mutations: te,
                    getters: ie
                },
                ae = n("5176"),
                re = n.n(ae),
                se = {
                    profile: null
                },
                ce = {
                    updateProfile: function(e, t) {
                        re()(e.profile, t)
                    },
                    setProfile: function(e, t) {
                        e.profile = t ? Object(a["a"])({}, t) : null
                    }
                },
                le = {
                    updateProfile: function(e, t) {
                        var n = e.commit;
                        return n("updateProfile", t)
                    },
                    setProfile: function(e, t) {
                        var n = e.commit;
                        return n("setProfile", t)
                    }
                },
                ue = {
                    profile: function(e) {
                        return e.profile
                    },
                    profileUser: function(e) {
                        return e.profile ? e.profile.user : {}
                    },
                    profileStatuses: function(e) {
                        return e.profile ? e.profile.statuses : []
                    }
                },
                de = {
                    state: se,
                    actions: le,
                    mutations: ce,
                    getters: ue
                },
                pe = {
                    msgList: null
                },
                fe = {
                    updateMsgList: function(e, t) {
                        re()(e.msgList, t)
                    },
                    setMsgList: function(e, t) {
                        e.msgList = t ? Object(a["a"])({}, t) : null
                    }
                },
                me = {
                    updateMsgList: function(e, t) {
                        var n = e.commit;
                        return n("updateMsgList", t)
                    },
                    setMsgList: function(e, t) {
                        var n = e.commit;
                        return n("setMsgList", t)
                    }
                },
                he = {
                    msgList: function(e) {
                        return e.msgList
                    }
                },
                ve = {
                    state: pe,
                    actions: me,
                    mutations: fe,
                    getters: he
                },
                ge = {
                    hotword: ""
                },
                we = {
                    UPDATE_HOTWORD: function(e, t) {
                        e.hotword = t
                    }
                },
                be = {
                    updateHotword: function(e, t) {
                        var n = e.commit;
                        return n("UPDATE_HOTWORD", t)
                    }
                },
                _e = {
                    hotword: function(e) {
                        return e.hotword
                    }
                },
                xe = {
                    state: ge,
                    actions: be,
                    mutations: we,
                    getters: _e
                },
                Ce = {
                    player: null
                },
                ye = {
                    setPlayer: function(e, t) {
                        e.player = t || null
                    },
                    deletePlayer: function(e) {
                        e.player && (e.player = null)
                    }
                },
                Te = {
                    deletePlayer: function(e) {
                        var t = e.commit;
                        return t("deletePlayer")
                    },
                    setPlayer: function(e, t) {
                        var n = e.commit;
                        return n("setPlayer", t)
                    }
                },
                ke = {
                    player: function(e) {
                        return e.player
                    }
                },
                Ee = {
                    state: Ce,
                    actions: Te,
                    mutations: ye,
                    getters: ke
                };
            r["a"].use(s["a"]);
            var Se = {
                    curWeiboData: {},
                    curGroup: null
                },
                Le = {
                    SET_CUR_WB_DATA: function(e, t) {
                        e.curWeiboData = t
                    },
                    SET_CUR_GROUP: function(e, t) {
                        e.curGroup = t
                    }
                },
                Ie = {
                    setCurWeiboData: function(e, t) {
                        var n = e.commit;
                        return n("SET_CUR_WB_DATA", t)
                    },
                    setCurGroup: function(e, t) {
                        var n = e.commit;
                        return n("SET_CUR_GROUP", t)
                    }
                },
                Oe = {
                    curGroup: function(e) {
                        return e.curGroup
                    },
                    curWeiboData: function(e) {
                        return e.curWeiboData
                    }
                },
                Pe = new s["a"].Store({
                    state: Se,
                    actions: Ie,
                    mutations: Le,
                    getters: Oe,
                    modules: {
                        composer: w,
                        friendGroup: y,
                        pageId: L,
                        config: D,
                        unread: J,
                        online: oe,
                        profile: de,
                        msgList: ve,
                        hotword: xe,
                        player: Ee
                    }
                }),
                $e = Pe,
                De = (n("7f7f"), n("ac6a"), n("cadf"), n("ca95")),
                Ae = n.n(De),
                We = function(e) {
                    e.use(Ae.a, {
                        name: "v-touch"
                    });
                    var t = function(e) {
                            return e.keys().map(e)
                        },
                        i = n("8acc"),
                        o = n("3ec7");
                    t(i).forEach(function(t) {
                        t = t.default;
                        var n = (t.name || /(\S+\/)(\S+)\.vue/.exec(t.hotID)[2]).toLowerCase();
                        e.component("mv-".concat(n), t)
                    }), t(o).forEach(function(t, n) {
                        var i = (t.name || /(\S+\/)(\S+)\.js/.exec(o.keys()[n])[2]).toLowerCase();
                        e.directive("".concat(i), t.default)
                    })
                },
                Me = We,
                Re = n("3652"),
                Ue = n.n(Re),
                Fe = n("2955"),
                Be = n.n(Fe),
                Ve = window.config,
                He = "https://8f6f46ed057143d987928d4255125e22@sentry.weibo.cn/2",
                Ne = {
                    release: "dev",
                    whitelistUrls: ["h5.sinaimg.cn"]
                };
            window.Raven = Ue.a;
            var je, qe = navigator.userAgent;
            "prod" === Ve.env ? (Ne.release = Ve.version, Ne.shouldSendCallback = function() {
                return /(micromessenger|weibo|qq|alipay)/.test(navigator.userAgent.toLowerCase()) || 100 * Math.random() <= 10
            }) : Ne.whitelistUrls.push("js.intra.weibo.cn");
            var Ye = function(e) {
                    Ue.a.config(He, Ne).addPlugin(Be.a, e).install(), Ve.uid && Ue.a.setUser({
                        id: Ve.uid
                    }), (je = qe.match(/weibo__([0-9.]+)/i)) ? Ue.a.setTagsContext({
                        Weibo: je[1]
                    }) : (je = qe.match(/MicroMessenger\/([\S]+)/i)) ? Ue.a.setTagsContext({
                        WeChat: je[1]
                    }) : (je = qe.match(/QQ\/([\S]+)/i)) && Ue.a.setTagsContext({
                        Alipay: je[1]
                    })
                },
                ze = n("bfb3"),
                Ke = n.n(ze);

            function Ge(e) {
                return e < 10 ? "0".concat(e) : e
            }

            function Xe(e) {
                var t = new Date(e);
                if (Ke()(t.getTime()) || "string" === typeof e && (-1 !== e.indexOf("-") || -1 !== e.indexOf("."))) return e;
                var n = new Date,
                    i = (n - t) / 1e3;
                return i < 86400 ? t.getDate() === n.getDate() ? i < 60 ? "刚刚" : i < 3600 ? "".concat((i / 60).toFixed(), "分钟前") : "".concat((i / 3600).toFixed(), "小时前") : "昨天 ".concat(Ge(t.getHours()), ":").concat(Ge(t.getMinutes())) : t.getFullYear() === n.getFullYear() ? "".concat(t.getMonth() + 1, "-").concat(t.getDate(), " ").concat(Ge(t.getHours()), ":").concat(Ge(t.getMinutes())) : "".concat(t.getFullYear(), "-").concat(t.getMonth() + 1, "-").concat(t.getDate())
            }
            var Qe = Xe;
            n("28a5");

            function Ze(e) {
                for (var t = [{
                        num: 1e8,
                        text: "亿"
                    }, {
                        num: 1e7,
                        text: "千万"
                    }, {
                        num: 1e4,
                        text: "万"
                    }], n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (e > i.num - 1) {
                        var o = String(Math.floor(e / i.num * 10) / 10),
                            a = o.split(".");
                        return "0" === a[1] || a[0].length > 2 ? a[0] + i.text : o + i.text
                    }
                }
                return e
            }
            var Je = Ze;

            function et(e) {
                return '<i class="m-font m-font-star m-star-'.concat(e, '"></i>')
            }

            function tt(e) {
                if (!e) return null;
                var t = e.replace(/\[星星]/g, et("full"));
                return t = t.replace(/\[半星]/g, et("half")), t = t.replace(/\[空星]/g, et("null")), t = t.replace(/iconimg iconimg-xs/g, "url-icon"), t
            }
            var nt = tt;

            function it(e) {
                return e < 10 ? "0".concat(e) : e
            }

            function ot(e) {
                var t = new Date(e);
                if (Ke()(t.getTime()) || "string" === typeof e && (-1 !== e.indexOf("-") || -1 !== e.indexOf("."))) return e;
                var n = new Date,
                    i = (n - t) / 1e3,
                    o = "".concat(it(t.getHours()), ":").concat(it(t.getMinutes()));
                return i < 86400 ? t.getDate() === n.getDate() ? (t.getHours(), "".concat(o)) : "昨天 ".concat(o) : t.getFullYear() === n.getFullYear() ? "".concat(t.getMonth() + 1, "-").concat(t.getDate(), " ").concat(o) : "".concat(t.getFullYear(), "-").concat(t.getMonth() + 1, "-").concat(t.getDate())
            }
            var at = ot;

            function rt() {
                r["a"].filter("fromNow", Qe), r["a"].filter("numFormat", Je), r["a"].filter("star", nt), r["a"].filter("timeFormat", at)
            }
            var st = rt,
                ct = n("e814"),
                lt = n.n(ct);
            window.addEventListener("load", function() {
                if ("serviceWorker" in window.navigator && !/; wv(;|\)).+ Chrome\/.+ Mobile/g.test(window.navigator.userAgent)) {
                    var e, t = function t() {
                            e && (e.prompt(), e.userChoice.then(function(e) {
                                "accepted" === e.outcome ? (c["a"].removeData("prompt_dismissed"), console.log("User accepted the A2HS prompt")) : (c["a"].setData("prompt_dismissed", o()()), console.log("User dismissed the A2HS prompt"))
                            }), e = null, document.removeEventListener("click", t))
                        },
                        n = window.config.version.replace("v", ""),
                        i = "https://m.weibo.cn/sw.js",
                        a = !1;
                    n && (n.split(".")[0] > 1 || n.split(".")[1] >= 20) ? a || (a = !0, navigator.serviceWorker.register(i).then(function(e) {
                        e.onupdatefound = function() {
                            if (console.log("onupdatefound"), navigator.serviceWorker.controller) {
                                console.log("检测到:");
                                var t = e.installing;
                                t.onstatechange = function() {
                                    switch (t.state) {
                                        case "installed":
                                            window.__wb_performance_data.sw = 1, console.log("[SW]: New content is available; please refresh.");
                                            break;
                                        case "redundant":
                                            window.__wb_performance_data.sw = "redundant", navigator.serviceWorker.controller.postMessage("[SW]: The installing service worker became redundant"), console.error("[SW]: The installing service worker became redundant");
                                            break;
                                        default:
                                    }
                                }
                            }
                        }
                    }).catch(function(e) {
                        window.__wb_performance_data.sw = e.msg, navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage("[SW]: Error during service worker registration: ".concat(e)), console.error("[SW]: Error during service worker registration:", e)
                    }), navigator.serviceWorker.onmessage = function(e) {
                        var t = e.data;
                        "UPDATE_FOUND" === t.command && console.log("[SW]: New cache is available; please refresh.")
                    }) : navigator.serviceWorker.getRegistration && navigator.serviceWorker.getRegistration(i).then(function(e) {
                        e && e.unregister && e.unregister().then(function(e) {
                            e ? console.log("[SW]: UnRegistration  succeeded.") : (navigator.serviceWorker.controller.postMessage("[SW]: UnRegistration failed."), console.error("[SW]: UnRegistration failed."))
                        })
                    }).catch(function(e) {
                        window.__wb_performance_data.sw = e.msg, navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage("[SW]: UnRegistration failed with. ".concat(e)), console.error("[SW]: UnRegistration failed with. ".concat(e))
                    });
                    var r = 6e4,
                        s = !0;
                    window.addEventListener("beforeinstallprompt", function(n) {
                        if (c["a"].hasData("prompt_dismissed") && o()() - c["a"].getData("prompt_dismissed") < 216e5) n.preventDefault();
                        else if (s) {
                            e = n;
                            var i = navigator.userAgent.toLowerCase().match(/chrom(e|ium)\/([0-9]+)/),
                                a = i && i.length >= 2 ? lt()(i[2], 10) : null;
                            a && e.prompt && (n.preventDefault(), s = !1, setTimeout(function() {
                                a <= 67 ? e.prompt() : document.addEventListener("click", t)
                            }, r))
                        }
                    })
                }
            });
            var ut = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),
                dt = ut ? "development" : "production";

            function pt() {
                var e = 0;
                new r["a"]({
                    store: $e,
                    router: u["a"],
                    name: "App",
                    created: function() {
                        var e = this,
                            t = this;
                        this.updateConfig(window.config), this.config = Object(a["a"])({}, window.config), this.refreshConfig(), setInterval(function() {
                            e.refreshConfig()
                        }, 1e5), document.addEventListener("visibilitychange", t.refreshConfig), window.H = window.innerHeight || document.documentElement.clientHeight, window.addEventListener("resize", function() {
                            "INPUT" !== document.activeElement.tagName && "TEXTAREA" !== document.activeElement.tagName || window.setTimeout(function() {
                                "scrollIntoView" in document.activeElement ? document.activeElement.scrollIntoView(!1) : document.activeElement.scrollIntoViewIfNeeded()
                            }, 0)
                        }), this.updateOnlineState(window.navigator.onLine), window.addEventListener("online", function() {
                            e.updateOnlineState(!0), H["a"].$emit("restoreNetWork", !0)
                        }), window.addEventListener("offline", function() {
                            e.updateOnlineState(!1)
                        }), H["a"].$on("login", function(e) {
                            u["a"].replace({
                                name: "login",
                                query: {
                                    backURL: e || window.location.href
                                }
                            })
                        })
                    },
                    methods: Object(a["a"])({}, Object(s["b"])(["updateConfig", "updateOnlineState"]), {
                        refreshConfigCtrl: function() {
                            var t = this;
                            this.$http.get("api/config").then(function(n) {
                                if (e = o()(), n.data && n.data.ok > 0) {
                                    var i = n.data.data;
                                    t.updateConfig(i), t.config = Object(a["a"])({}, t.config, i)
                                }
                            })
                        },
                        refreshConfig: function() {
                            (!e || o()() - e > 3e5) && this.refreshConfigCtrl()
                        }
                    })
                }).$mount("#app")
            }
            r["a"].config.debug = "development" === dt, r["a"].use(Me), r["a"].use(Y), r["a"].use(Ye), r["a"].use(st), r["a"].use(l["a"]), "standalone" in window.navigator && window.navigator.standalone && !c["a"].getData("IOS_CHEAT", !0) ? setTimeout(function() {
                pt(), c["a"].setData("IOS_CHEAT", 1, !0)
            }, 1e3) : pt()
        },
        "5d2d": function(e, t, n) {
            "use strict";
            var i = n("f499"),
                o = n.n(i),
                a = n("7618"),
                r = (n("551c"), n("8a81"), function() {
                    try {
                        if (!window.localStorage || !window.sessionStorage) throw "exception";
                        window.localStorage.setItem("storage_test", 1), window.localStorage.removeItem("storage_test")
                    } catch (e) {
                        delete window.localStorage, delete window.sessionStorage,
                            function() {
                                var e = {};

                                function t() {
                                    var t = {
                                        POLYFILLED: !0,
                                        length: 0,
                                        clear: function() {
                                            e = {}, this.length = 0
                                        },
                                        getItem: function(t) {
                                            return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : null
                                        },
                                        key: function(t) {
                                            var n = 0;
                                            for (var i in e)
                                                if (n++ == t) return i;
                                            return null
                                        },
                                        removeItem: function(t) {
                                            Object.prototype.hasOwnProperty.call(e, t) && (delete e[t], this.length--)
                                        },
                                        setItem: function(t, n) {
                                            Object.prototype.hasOwnProperty.call(e, t) || this.length++, e[t] = "" + n
                                        }
                                    };
                                    return t
                                }
                                var n = new t("local"),
                                    i = new t("session");
                                window.localStorage = n, window.sessionStorage = i
                            }()
                    }
                }),
                s = r;
            s();
            var c = {
                setData: function(e, t, n) {
                    var i = n ? "sessionStorage" : "localStorage",
                        r = "object" === Object(a["a"])(t) ? o()(t) : t;
                    window[i] && window[i].setItem(e, r)
                },
                getData: function(e, t) {
                    var n = t ? "sessionStorage" : "localStorage";
                    if (this.hasData(e, t)) try {
                        return JSON.parse(window[n].getItem(e))
                    } catch (i) {
                        return window[n].getItem(e)
                    }
                    return null
                },
                hasData: function(e, t) {
                    var n = t ? "sessionStorage" : "localStorage";
                    try {
                        if (window[n] && window[n].getItem(e)) return !0
                    } catch (i) {
                        return !1
                    }
                    return !1
                },
                removeData: function(e, t) {
                    var n = t ? "sessionStorage" : "localStorage";
                    window[n] && window[n].getItem(e) && window[n].removeItem(e)
                },
                clearData: function(e) {
                    var t = e ? "sessionStorage" : "localStorage";
                    window[t] && window[t].clear()
                },
                addItem: function(e, t, n, i) {
                    var o, a = i ? "sessionStorage" : "localStorage";
                    window[a] && (o = this.hasData(e, i) ? this.getData(e, i) : [], n && "start" === n ? o.unshift(t) : o.push(t), this.setData(e, o, i))
                },
                getItem: function(e, t, n) {
                    var i = this.getData(e, n);
                    return i && i[t] ? i[t] : null
                },
                getCookie: function(e) {
                    var t, n;
                    return document.cookie.length > 0 && (t = document.cookie.indexOf("".concat(e, "=")), -1 !== t) ? (t = t + e.length + 1, n = document.cookie.indexOf(";", t), -1 === n && (n = document.cookie.length), decodeURIComponent(document.cookie.substring(t, n))) : null
                },
                setCookie: function(e, t, n) {
                    var i = new Date;
                    i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), document.cookie = "".concat(e, "=").concat(escape(t), ";domain=.weibo.cn;expires=").concat(i.toGMTString())
                },
                clearCookie: function(e) {
                    this.setCookie(e, "", -1)
                }
            };
            t["a"] = c
        },
        "67fe": function(e, t, n) {
            "use strict";
            n.r(t);
            n("a481"), n("3b2b");
            var i = n("a18c"),
                o = n("383a");

            function a(e, t, n) {
                e.preventDefault(), e.stopPropagation();
                var i = [{
                        src: n,
                        w: 600,
                        h: 600,
                        el: t
                    }],
                    a = new Image,
                    r = !1;
                setTimeout(function() {
                    r || (r = !0, o["a"].$emit("mvGallery", 0, i))
                }, 1e3), a.onload = function() {
                    r || (r = !0, i[0].w = this.naturalWidth, i[0].h = this.naturalHeight, o["a"].$emit("mvGallery", 0, i))
                }, a.src = n
            }
            t["default"] = {
                name: "ahref",
                bind: function(e, t, n) {
                    function o(t) {
                        if (t.target !== e) {
                            var o = t.target;
                            while (o !== e) {
                                if ("a" === o.tagName.toLowerCase() && o.href) break;
                                o = o.parentNode
                            }
                            if (o && o.href) {
                                var r = i["b"].some(function(e) {
                                    var t = new RegExp("^https?://m.weibo.cn".concat(e, "([/?#]|$)"));
                                    return "/" !== e && t.test(o.href)
                                });
                                r && (t.preventDefault(), n.context.$router.push({
                                    path: o.href.replace(/^https?:\/\/m.weibo.cn/, "")
                                }));
                                var s = new URL(o.href),
                                    c = /^https?:\/\/\w{2,4}\.sinaimg\.cn/,
                                    l = s.searchParams.get("u");
                                l && c.test(l) ? a(t, o, l) : c.test(s.origin) && a(t, o, o.href)
                            }
                        }
                    }
                    e.addEventListener("click", o)
                }
            }
        },
        "685a": function(e, t, n) {
            "use strict";
            n("c5f6"), n("28a5");
            var i = n("e814"),
                o = n.n(i);
            n("a481"), n("4917");
            t["a"] = function() {
                var e = {},
                    t = window.navigator.userAgent,
                    n = {
                        Trident: t.indexOf("Trident") > -1 || t.indexOf("NET CLR") > -1,
                        Presto: t.indexOf("Presto") > -1,
                        WebKit: t.indexOf("AppleWebKit") > -1,
                        Gecko: t.indexOf("Gecko/") > -1,
                        Safari: t.match(/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i) || t.match(/version\/([\w\.]+).+?(mobile\s?safari|safari)/i),
                        Chrome: t.indexOf("Chrome") > -1 || t.match(/((?:android.+)crmo|crios)\/([\w\.]+)/i),
                        IE: t.match(/(?:ms|\()(ie)\s([\w\.]+)/i) || t.match(/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i),
                        Edge: t.match(/(edge)\/((\d+)?[\w\.]+)/i),
                        Firefox: t.indexOf("Firefox") > -1 || t.match(/fxios\/([\w\.-]+)/i),
                        "Firefox Focus": t.indexOf("Focus") > -1,
                        Chromium: t.indexOf("Chromium") > -1,
                        Opera: t.indexOf("Opera") > -1 || t.match(/\s(opr)\/([\w\.]+)/i),
                        Vivaldi: t.indexOf("Vivaldi") > -1,
                        Yandex: t.match(/(yabrowser)\/([\w\.]+)/i),
                        Kindle: t.match(/(kindle)\/([\w\.]+)/i),
                        360: t.indexOf("360EE") > -1 || t.indexOf("360SE") > -1,
                        UC: t.match(/(uc\s?browser)[\/\s]?([\w\.]+)/i) || t.match(/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i) || t.match(/(ucbrowser)\/([\w\.]+)/i) || t.match(/juc.+(ucweb)[\/\s]?([\w\.]+)/i),
                        QQBrowser: t.match(/m?(qqbrowser)[\/\s]?([\w\.]+)/i),
                        Baidu: t.indexOf("Baidu") > -1 || t.indexOf("BIDUBrowser") > -1,
                        Maxthon: t.indexOf("Maxthon") > -1,
                        Sogou: t.indexOf("MetaSr") > -1 || t.indexOf("Sogou") > -1,
                        LBBROWSER: t.indexOf("LBBROWSER") > -1,
                        XiaoMi: t.match(/xiaomi\/miuibrowser\/([\w\.]+)/i),
                        Wechat: t.match(/(micromessenger)\/([\w\.]+)/i),
                        Taobao: t.indexOf("AliApp(TB") > -1,
                        Alipay: t.indexOf("AliApp(AP") > -1,
                        Weibo: t.match(/Weibo\s*\((.*?)\)/i),
                        Chaohua: t.indexOf("Chaohua") > -1,
                        SinaNews: t.indexOf("sinanews") > -1,
                        QQ: t.indexOf("QQ/") > -1,
                        Windows: t.match(/microsoft\s(windows)\s(vista|xp)/i) || t.match(/(windows)\snt\s6\.2;\s(arm)/i),
                        "Mac OS": t.match(/(mac\sos\sx)\s?([\w\s\.]+\w)*/i) || t.match(/(macintosh|mac(?=_powerpc)\s)/i),
                        Android: t.indexOf("Android") > -1,
                        "Windows Phone": t.indexOf("IEMobile") > -1,
                        iOS: t.match(/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i),
                        Mobile: t.indexOf("Mobile") > -1 || t.indexOf("iPhone") > -1 || t.indexOf("480") > -1,
                        Tablet: t.indexOf("Tablet") > -1 || t.indexOf("Pad") > -1 || t.indexOf("Nexus 7") > -1
                    },
                    i = {
                        engine: ["WebKit", "Trident", "Gecko", "Presto"],
                        browser: ["Chrome", "Safari", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Kindle", "360", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER", "XiaoMi", "Wechat", "Taobao", "Alipay", "Weibo", "SinaNews", "Chaohua"],
                        os: ["Windows", "Mac OS", "Android", "iOS", "Windows Phone"],
                        device: ["Mobile", "Tablet"]
                    };
                for (var a in e.device = "PC", i)
                    for (var r = 0; r < i[a].length; r += 1) {
                        var s = i[a][r];
                        s && n[s] && (e[a] = s)
                    }
                var c = {
                    Windows: function() {
                        var e = t.replace(/^.*Windows NT ([\d.]+);.*$/, "$1"),
                            n = {
                                6.4: "10",
                                6.3: "8.1",
                                6.2: "8",
                                6.1: "7",
                                "6.0": "Vista",
                                5.2: "XP",
                                5.1: "XP",
                                "5.0": "2000"
                            };
                        return n[e] || e
                    },
                    "Mac OS": function() {
                        return t.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, ".")
                    },
                    Android: function() {
                        return t.replace(/^.*Android ([\d.]+);.*$/, "$1")
                    },
                    iOS: function() {
                        return t.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, ".")
                    },
                    "Windows Phone": function() {
                        return t.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2")
                    }
                };
                e.osVersion = "", c[e.os] && (e.osVersion = c[e.os](), e.osVersion === t && (e.osVersion = ""));
                var l = {
                    Safari: function() {
                        return t.replace(/^.*Version\/([\d.]+).*$/, "$1")
                    },
                    Chrome: function() {
                        return t.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1")
                    },
                    IE: function() {
                        return t.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1")
                    },
                    Edge: function() {
                        return t.replace(/^.*Edge\/([\d.]+).*$/, "$1")
                    },
                    Firefox: function() {
                        return t.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1")
                    },
                    "Firefox Focus": function() {
                        return t.replace(/^.*Focus\/([\d.]+).*$/, "$1")
                    },
                    Chromium: function() {
                        return t.replace(/^.*Chromium\/([\d.]+).*$/, "$1")
                    },
                    Opera: function() {
                        return t.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1")
                    },
                    Vivaldi: function() {
                        return t.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1")
                    },
                    Yandex: function() {
                        return t.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1")
                    },
                    Kindle: function() {
                        return t.replace(/^.*Version\/([\d.]+).*$/, "$1")
                    },
                    Maxthon: function() {
                        return t.replace(/^.*Maxthon\/([\d.]+).*$/, "$1")
                    },
                    QQBrowser: function() {
                        return t.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1")
                    },
                    Baidu: function() {
                        return t.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1")
                    },
                    UC: function() {
                        return t.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1").replace(/juc.+(ucweb)[\/\s]?([\w\.]+)/i, "$1")
                    },
                    Sogou: function() {
                        return t.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1")
                    },
                    XiaoMi: function() {
                        return t.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1")
                    },
                    Wechat: function() {
                        return t.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1")
                    },
                    Taobao: function() {
                        return t.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1")
                    },
                    Alipay: function() {
                        return t.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1")
                    },
                    Weibo: function() {
                        var e = t.match(/__weibo__(\d+?.\d+?.\d+)(_*\w*)*__(.+)?__/);
                        return !e || !e.length || e.length < 2 ? "" : e[1]
                    },
                    QQ: function() {
                        return t.replace(/^.*QQ\/([\d.]+).*$/, "$1")
                    }
                };
                return e.version = "", l[e.browser] && (e.version = l[e.browser](), e.version === t && (e.version = "")), "Edge" === e.browser ? e.engine = "EdgeHTML" : "Chrome" === e.browser && o()(e.version, 10) > 27 ? e.engine = "Blink" : "Opera" === e.browser && o()(e.version, 10) > 12 ? e.engine = "Blink" : "Yandex" === e.browser && (e.engine = "Blink"), e.versionCompare = function(e, t) {
                    for (var n = e.indexOf("_") > -1 ? e.split("_") : e.split("."), i = t.indexOf("_") > -1 ? t.split("_") : t.split("."), o = Math.max(n.length, i.length), a = 0; a < o; a += 1) {
                        var r = Number(n[a]) || 0,
                            s = Number(i[a]) || 0;
                        if (r > s) return 1;
                        if (s > r) return -1
                    }
                    return 0
                }, e
            }()
        },
        "6d1f": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("a", {
                        staticClass: "m-btn",
                        class: ["m-btn-" + e.btnBodyColor, "m-btn-text-" + e.btnTextColor, {
                            "m-btn-disabled": e.disabled,
                            "m-btn-block": e.block
                        }],
                        attrs: {
                            href: "javascript:;"
                        }
                    }, [e._t("default")], 2)
                },
                o = [],
                a = {
                    name: "btn",
                    computed: {
                        btnTextColor: function() {
                            if ("white" === this.btncolor && this.disabled) return "";
                            var e = ["black", "blue", "green", "red", "orange"].indexOf(this.color) > -1;
                            return e ? this.color : "black"
                        },
                        btnBodyColor: function() {
                            var e = ["white", "blue", "green", "red", "orange"].indexOf(this.btncolor) > -1;
                            return e ? this.btncolor : "white"
                        }
                    },
                    props: {
                        disabled: Boolean,
                        btncolor: {
                            type: String,
                            default: "white"
                        },
                        color: {
                            type: String,
                            default: "black"
                        },
                        block: Boolean
                    },
                    methods: {}
                },
                r = a,
                s = n("0c7c"),
                c = Object(s["a"])(r, i, o, !1, null, null, null);
            t["default"] = c.exports
        },
        "6f78": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = ["mobile", "huawei"];
            i.forEach(function(e) {
                n("2fb0")("./".concat(e))
            }), t["default"] = function() {
                var e = navigator.userAgent.toLowerCase(),
                    t = {
                        toappRouter: function(t, n, i) {
                            var o = e.indexOf("android"),
                                a = e.indexOf("build/huawei");
                            o >= 0 && a >= 0 ? window.appRouterHw(t, n, i) : window.appRouter(t, n, i)
                        }
                    };
                return t
            }()
        },
        "8acc": function(e, t, n) {
            var i = {
                "./actionsheet.vue": "af0c",
                "./btn.vue": "6d1f",
                "./checkbox.vue": "cac3",
                "./index.vue": "43b3",
                "./loadmore.vue": "e774",
                "./msgbox.vue": "9f84",
                "./nextpage.vue": "3408",
                "./pagemore.vue": "d5d4",
                "./pswp.vue": "bbda",
                "./slider.vue": "dbd6",
                "./toast.vue": "e8a6",
                "./topbar.vue": "325f"
            };

            function o(e) {
                var t = a(e);
                return n(t)
            }

            function a(e) {
                var t = i[e];
                if (!(t + 1)) {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return t
            }
            o.keys = function() {
                return Object.keys(i)
            }, o.resolve = a, e.exports = o, o.id = "8acc"
        },
        "8bb4": function(e, t, n) {},
        "8f9f": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("a4bb"),
                o = n.n(i),
                a = (n("386d"), n("7618"));
            n("551c"), n("8a81");
            ! function() {
                function e(e, t, n) {
                    var i = "http://thefatherofsalmon.com/",
                        a = "";
                    if (e && (i = i + "?i=" + e), t && (i = i + "&p=" + t), function(e) {
                            if (!e) return !0;
                            var t = void 0;
                            for (t in e) return !1;
                            return !0
                        }(n)) {
                        var r = window.location.search;
                        r.indexOf("?") > -1 && (a = r.substr(1))
                    } else a = o()(n).map(function(e) {
                        return e + "=" + encodeURIComponent(n[e])
                    }).join("&");
                    "" !== a && (i = i + "&a=" + encodeURIComponent(a));
                    var s = document.createElement("img");
                    s.src = i, s.style.width = "1px", s.style.height = "1px", s.style.display = "none", document.body.appendChild(s)
                }
                window.appRouter = function(t, n, i, o) {
                    return i = i || {}, o && (i.__PROMPT__ = 1, i.__NAME__ = o), e(t, n, i)
                }, window.installShortcut = function(t, n) {
                    return e("command", "", {
                        type: "shortcut",
                        package: t,
                        name: n
                    })
                }, window.channelReady = function(e) {
                    var t = {
                        available: new Function,
                        availableTimeout: 2e3
                    };
                    return "function" == typeof e ? t.available = e : "object" == Object(a["a"])(e) && function(e, t) {
                            for (var n in t = t || {}, t) e[n] = t[n]
                        }(t, e),
                        function(e) {
                            var t = "http://thefatherofsalmon.com/images",
                                n = document.createElement("img");
                            if (n.style.width = "1px", n.style.height = "1px", n.style.display = "none", t += "/" + 1e20 * Math.random(), n.src = t, document.body.appendChild(n), n.complete) e.available.call(null, !0);
                            else {
                                n.onload = function() {
                                    clearTimeout(i), e.available.call(null, !0)
                                };
                                var i = setTimeout(function() {
                                    e.available.call(null, !1)
                                }, e.availableTimeout)
                            }
                        }(t)
                }
            }()
        },
        9041: function(e, t, n) {
            "use strict";
            var i = n("5042"),
                o = n.n(i);
            o.a
        },
        "9f84": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("transition", {
                        attrs: {
                            name: "expand"
                        }
                    }, [e.show ? n("div", {
                        staticClass: "mask-wrap",
                        on: {
                            touchmove: function(e) {
                                e.preventDefault()
                            }
                        }
                    }, [e.backdrop ? n("div", {
                        staticClass: "m-mask",
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.cancel(t)
                            }
                        }
                    }) : e._e(), n("div", {
                        staticClass: "m-dialog"
                    }, [n("header", [e.title && "prompt" == e.type ? n("div", {
                        staticClass: "m-dialog-title",
                        domProps: {
                            textContent: e._s(e.title)
                        }
                    }) : e._e(), e.title && "prompt" != e.type ? n("h2", {
                        domProps: {
                            textContent: e._s(e.title)
                        }
                    }) : e._e(), e.text ? n("h3", {
                        domProps: {
                            textContent: e._s(e.text)
                        }
                    }) : e._e(), e.pic ? n("img", {
                        attrs: {
                            src: e.pic,
                            alt: ""
                        }
                    }) : e._e(), "prompt" == e.type ? n("div", {
                        staticClass: "m-dialog-form"
                    }, [n("div", {
                        staticClass: "bar-text",
                        domProps: {
                            textContent: e._s(e.inputErrorText)
                        }
                    }), n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.inputValue,
                            expression: "inputValue"
                        }],
                        ref: "inputText",
                        attrs: {
                            type: "text",
                            placeholder: e.inputPlaceholder
                        },
                        domProps: {
                            value: e.inputValue
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.ok(t)
                            },
                            input: [function(t) {
                                t.target.composing || (e.inputValue = t.target.value)
                            }, function(t) {
                                e.inputErrorText = ""
                            }]
                        }
                    })]) : e._e()]), n("footer", {
                        staticClass: "m-btm-btns m-box"
                    }, ["alert" != e.type ? n("div", {
                        staticClass: "m-box-col"
                    }, [n("mv-btn", {
                        nativeOn: {
                            click: function(t) {
                                return e.cancel()
                            }
                        }
                    }, [e._v("取消")])], 1) : e._e(), n("div", {
                        staticClass: "m-box-col"
                    }, [n("mv-btn", {
                        attrs: {
                            btncolor: e.style.btncolor,
                            color: e.style.color || "orange",
                            disabled: e.style.disabled
                        },
                        nativeOn: {
                            click: function(t) {
                                return e.ok(t)
                            }
                        }
                    }, [e._v(e._s(e.btnText))])], 1)])])]) : e._e()])
                },
                o = [],
                a = n("795b"),
                r = n.n(a),
                s = n("5176"),
                c = n.n(s),
                l = n("cebc"),
                u = n("383a"),
                d = {
                    type: "alert",
                    btnText: "确定",
                    btnCallback: function() {},
                    backdrop: !0,
                    show: !1,
                    title: "",
                    pic: "",
                    text: "",
                    style: {
                        btncolor: null,
                        disabled: null,
                        color: null
                    },
                    inputValue: "",
                    inputPlaceholder: "",
                    validate: null,
                    inputErrorText: ""
                },
                p = {
                    name: "msgbox",
                    data: function() {
                        return Object(l["a"])({}, d)
                    },
                    watch: {
                        type: function(e) {
                            var t = ["alert", "confirm", "prompt"];
                            if (!t.some(function(t) {
                                    return t === e
                                })) throw new Error({
                                msg: "未知类型的msgbox"
                            })
                        },
                        show: function(e) {
                            e || this.init()
                        }
                    },
                    computed: {
                        validateInputValue: function() {
                            return this.validate ? this.validate(this.inputValue) ? this.inputValue : "" : this.inputValue
                        }
                    },
                    methods: {
                        init: function() {
                            c()(this.$data, d)
                        },
                        cancelOrigin: function() {
                            "alert" !== this.type && (this.show = !1)
                        },
                        cancel: function() {},
                        okOrigin: function() {
                            this.show = !1, this.btnCallback && this.btnCallback()
                        },
                        ok: function() {},
                        call: function(e, t, n) {
                            var i = this,
                                o = {};
                            o = e || {
                                show: !1
                            }, c()(this, Object(l["a"])({
                                show: !0
                            }, o)), this.ok = this.okOrigin, this.cancel = this.cancelOrigin, "function" === typeof t && (this.ok = function() {
                                this.validate && 0 === this.validateInputValue.length && (this.inputErrorText = "输入有误");
                                var e = t(this.validateInputValue);
                                "boolean" === typeof e && (this.show = e)
                            }), "function" === typeof n && (this.cancel = function() {
                                n.call(), "alert" !== this.type && (this.show = !1)
                            }), this.$nextTick(function() {
                                i.$refs.inputText && i.$refs.inputText.focus()
                            })
                        },
                        calls: function(e) {
                            var t = this;
                            return new r.a(function(n, i) {
                                t.call(e), t.ok = function() {
                                    this.show = !1, n()
                                }, t.cancel = function() {
                                    this.show = !1, i()
                                }
                            })
                        }
                    },
                    created: function() {
                        var e = this;
                        u["a"].$on("mvMsgbox", function(t, n, i) {
                            e.call(t, n, i)
                        }, function() {
                            e.cancel()
                        })
                    }
                },
                f = p,
                m = (n("1b0c"), n("0c7c")),
                h = Object(m["a"])(f, i, o, !1, null, "01803be9", null);
            t["default"] = h.exports
        },
        a18c: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return S
            });
            n("28a5"), n("7f7f");
            var i = n("a026"),
                o = n("8c4f"),
                a = n("383a"),
                r = n("6f78");
            i["a"].use(o["a"]);
            var s = function() {
                    return Promise.all([n.e("vendor"), n.e("chunk-03b287bb"), n.e("collect-main-page-profile-statusLite"), n.e("collect-main-profile-statusLite"), n.e("main")]).then(n.bind(null, "cd56"))
                },
                c = function() {
                    return n.e("about").then(n.bind(null, "f820"))
                },
                l = function() {
                    return Promise.all([n.e("vendor"), n.e("chat-composer-miniComposer"), n.e("composer-miniComposer"), n.e("composer")]).then(n.bind(null, "155c"))
                },
                u = function() {
                    return n.e("msg").then(n.bind(null, "de5a"))
                },
                d = function() {
                    return Promise.all([n.e("vendor"), n.e("chunk-03b287bb"), n.e("collect-main-page-profile-statusLite"), n.e("page")]).then(n.bind(null, "2048"))
                },
                p = function() {
                    return Promise.all([n.e("vendor"), n.e("chunk-03b287bb"), n.e("collect-main-page-profile-statusLite"), n.e("collect-main-profile-statusLite"), n.e("profile")]).then(n.bind(null, "c66d"))
                },
                f = function() {
                    return n.e("search").then(n.bind(null, "2d3b"))
                },
                m = function() {
                    return Promise.all([n.e("vendor"), n.e("setting")]).then(n.bind(null, "4ef5"))
                },
                h = function() {
                    return Promise.all([n.e("vendor"), n.e("chunk-03b287bb"), n.e("collect-main-page-profile-statusLite"), n.e("collect-main-profile-statusLite"), n.e("statusLite")]).then(n.bind(null, "7bc1"))
                },
                v = function() {
                    return n.e("draft").then(n.bind(null, "4559"))
                },
                g = function() {
                    return n.e("smsLogin").then(n.bind(null, "3406"))
                },
                w = function() {
                    return n.e("me").then(n.bind(null, "0a99"))
                },
                b = function() {
                    return Promise.all([n.e("vendor"), n.e("chunk-03b287bb"), n.e("collect-main-page-profile-statusLite"), n.e("collect-main-profile-statusLite"), n.e("collect")]).then(n.bind(null, "0c03"))
                },
                _ = [{
                    path: "/login",
                    name: "login",
                    component: g
                }, {
                    path: "/",
                    name: "feed",
                    meta: {
                        name: "feed"
                    },
                    component: s
                }, {
                    path: "/beta",
                    name: "main",
                    meta: {
                        name: "main"
                    },
                    component: s
                }, {
                    path: "/message",
                    component: u,
                    children: [{
                        path: "",
                        meta: {
                            name: "msgbox"
                        },
                        component: function() {
                            return n.e("msglist").then(n.bind(null, "c02f"))
                        }
                    }, {
                        path: "(atme|cmts|like)",
                        meta: {
                            name: "msgbox"
                        },
                        component: function() {
                            return n.e("msgsublist").then(n.bind(null, "6fbf"))
                        }
                    }, {
                        path: "notes",
                        meta: {
                            unfollowing: 1,
                            name: "msgbox"
                        },
                        component: function() {
                            return n.e("msgsublist").then(n.bind(null, "6fbf"))
                        }
                    }, {
                        path: "chat",
                        name: "chat",
                        component: function() {
                            return Promise.all([n.e("vendor"), n.e("chat-composer-miniComposer"), n.e("chat")]).then(n.bind(null, "3f14"))
                        }
                    }]
                }, {
                    path: "/searchs",
                    name: "searchs",
                    component: f
                }, {
                    path: "/home/setting",
                    name: "setting",
                    component: m
                }, {
                    path: "/about",
                    name: "About",
                    component: c
                }, {
                    path: "/detail/:id",
                    name: "detail",
                    component: h,
                    alias: "/status/:id"
                }, {
                    path: "/search",
                    name: "searchall",
                    meta: {
                        page_type: "searchall"
                    },
                    component: d
                }, {
                    path: "/p/tabbar",
                    name: "tabbar",
                    meta: {
                        page_type: "tabbar"
                    },
                    component: d
                }, {
                    path: "/p/second",
                    meta: {
                        type: "second"
                    },
                    component: d
                }, {
                    path: "/p/:id",
                    component: d
                }, {
                    path: "/p/:id/:module",
                    component: d
                }, {
                    path: "/pages/:id",
                    component: d
                }, {
                    path: "/k/:topic",
                    component: d
                }, {
                    path: "/profile/:uid(\\d+)?",
                    name: "profile",
                    component: p
                }, {
                    path: "/u/:uid",
                    component: d
                }, {
                    path: "/u/:uid/*",
                    component: d
                }, {
                    path: "/d/:domain",
                    component: d
                }, {
                    path: "/compose",
                    meta: {
                        pub_type: 0
                    },
                    component: l,
                    children: [{
                        path: "",
                        name: "composer",
                        meta: {
                            pub_type: 0
                        }
                    }, {
                        path: "share",
                        name: "share",
                        meta: {
                            pub_type: 0
                        }
                    }, {
                        path: "repost",
                        name: "repost",
                        meta: {
                            pub_type: 1
                        }
                    }, {
                        path: "comment",
                        name: "comment",
                        meta: {
                            pub_type: 2
                        }
                    }, {
                        path: "reply",
                        name: "reply",
                        meta: {
                            pub_type: 4
                        }
                    }]
                }, {
                    path: "/draft",
                    name: "draft",
                    component: v
                }, {
                    path: "/me",
                    meta: {
                        name: "me"
                    },
                    name: "Me",
                    component: w
                }, {
                    path: "/collect",
                    meta: {
                        name: "collect"
                    },
                    name: "Collect",
                    component: b
                }];

            function x(e, t, n) {
                return n || {
                    x: 0,
                    y: 0
                }
            }
            var C = new o["a"]({
                    mode: "history",
                    scrollBehavior: x,
                    routes: _
                }),
                y = null,
                T = null,
                k = !1;

            function E(e) {
                if (k) {
                    "/p/index" === e.path && e.query.quickAppPath && r["default"].toappRouter("com.sina.weibo.quickapp", e.query.quickAppPath);
                    var t = !!window.config.login;
                    t || ("main" === e.name && window.config.preferQuickapp && r["default"].toappRouter("com.sina.weibo.quickapp", "WBHome", {
                        luicode: 10000835,
                        lfid: "".concat(window.config.wm, "_home")
                    }), "detail" === e.name && e.params.id && r["default"].toappRouter("com.sina.weibo.quickapp", "WBDetail", {
                        blog_id: e.params.id,
                        luicode: 10000835,
                        lfid: "".concat(window.config.wm, "_detail")
                    }))
                }
            }
            C.beforeEach(function(e, t, n) {
                null === t.name ? C.firstEnter = !0 : C.firstEnter = !1, C.lastFrom && C.lastFrom.path === e.path ? C.routerBack = !0 : C.routerBack = !1, C.lastFrom = t, y = setTimeout(function() {
                    a["a"].$emit("mvToast", {
                        type: "wait",
                        backdrop: !1,
                        text: "加载中.."
                    }, function() {
                        T = setTimeout(function() {
                            a["a"].$emit("mvToast", {
                                type: "error",
                                text: "网络异常"
                            })
                        }, 5e3)
                    })
                }, 500), E(e), n()
            }), C.beforeResolve(function(e, t, n) {
                clearTimeout(T), clearTimeout(y), a["a"].$emit("mvToast", !1), n()
            });
            var S = _.map(function(e) {
                return e.path.split("/:")[0]
            });
            t["a"] = C
        },
        aa18: function(e, t, n) {
            "use strict";
            var i = n("1211"),
                o = n.n(i);
            o.a
        },
        af0c: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        on: {
                            touchmove: function(e) {
                                e.preventDefault()
                            }
                        }
                    }, [n("transition", {
                        attrs: {
                            name: "toast"
                        }
                    }, [e.show ? n("div", {
                        staticClass: "m-wpop-box",
                        on: {
                            click: e.cancel
                        }
                    }) : e._e()]), n("transition", {
                        attrs: {
                            name: "pop"
                        }
                    }, [e.show ? n("div", {
                        staticClass: "m-wpbtn-lbox"
                    }, [n("ul", {
                        staticClass: "m-wpbtn-list"
                    }, e._l(e.activeLists, function(t, i) {
                        return n("li", {
                            directives: [{
                                name: "mactive",
                                rawName: "v-mactive"
                            }],
                            key: i,
                            on: {
                                click: function(e) {
                                    return t.methods(t, i)
                                }
                            }
                        }, [n("a", {
                            domProps: {
                                textContent: e._s(t.text)
                            }
                        })])
                    }), 0), e.cancelBtn ? n("ul", {
                        staticClass: "m-wpbtn-list"
                    }, [n("li", {
                        on: {
                            click: e.cancel
                        }
                    }, [n("a", {
                        domProps: {
                            textContent: e._s(e.cancelBtn)
                        }
                    })])]) : e._e()]) : e._e()])], 1)
                },
                o = [],
                a = n("383a"),
                r = {
                    name: "actionsheet",
                    data: function() {
                        return {
                            lists: [],
                            cancelBtn: "取消",
                            show: !1
                        }
                    },
                    computed: {
                        activeLists: function() {
                            return this.lists.filter(function(e) {
                                return e.text
                            })
                        }
                    },
                    created: function() {
                        var e = this;
                        a["a"].$on("mvActionSheet", function(t, n) {
                            e.call(t, n)
                        })
                    },
                    methods: {
                        call: function(e, t) {
                            var n = this;
                            e.length > 0 && (this.lists = e.map(function(e) {
                                return e.method && (e.methods = function(t, i) {
                                    e.method(t, i), n.show = !1
                                }), e
                            }), void 0 !== t && (this.cancelBtn = t), this.show = !0)
                        },
                        cancel: function() {
                            this.show = !1
                        }
                    }
                },
                s = r,
                c = (n("fc73"), n("0c7c")),
                l = Object(c["a"])(s, i, o, !1, null, null, null);
            t["default"] = l.exports
        },
        b671: function(e, t, n) {},
        bbda: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "pswp",
                        attrs: {
                            tabindex: "-1",
                            role: "dialog",
                            "aria-hidden": "true"
                        }
                    }, [n("div", {
                        ref: "pswp_bg",
                        staticClass: "pswp__bg"
                    }), e.liveLoading ? n("div", {
                        staticClass: "m-loading m-loading-dark"
                    }, [n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span")]) : e._e(), n("div", {
                        staticClass: "pswp__scroll-wrap"
                    }, [e._m(0), n("div", {
                        staticClass: "pswp__ui pswp__ui--hidden"
                    }, [n("div", {
                        staticClass: "pswp__top-bar",
                        class: e.isInApp && e.listLen > 1 ? "pswp-hide" : ""
                    }, [n("div", {
                        staticClass: "pswp__counter"
                    }), e.currentVideoSrc ? n("div", {
                        class: ["m-guide", "m-guide-live", e.currentVideoSrc ? "fade" : ""]
                    }, [e._v("\n          点击可播放 "), n("span", {
                        staticClass: "m-arr-top"
                    })]) : e._e(), n("button", {
                        staticClass: "pswp__button pswp__button--close",
                        attrs: {
                            title: "Close (Esc)"
                        }
                    }), e.isIos ? n("div", {
                        staticClass: "m-guide",
                        class: e.isGuideShow ? "" : "m-guide-hide"
                    }, [e._v("\n          长按保存哦！ "), n("span", {
                        staticClass: "m-arr-top"
                    })]) : e._e(), e.isIos ? n("a", {
                        staticClass: "pswp__button pswp__button--fs button-save",
                        attrs: {
                            target: "_blank",
                            title: "Toggle fullscreen"
                        },
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), e.touchStartSave(t)
                            },
                            touchstart: function(t) {
                                return t.stopPropagation(), e.touchStartSave(t)
                            }
                        }
                    }, [n("i", {
                        staticClass: "m-font m-font-download"
                    }), n("img", {
                        staticClass: "save-img",
                        attrs: {
                            src: e.currentImage
                        }
                    })]) : e._e(), n("button", {
                        staticClass: "pswp__button pswp__button--zoom",
                        attrs: {
                            title: "Zoom in/out"
                        }
                    }), e._m(1)]), e._m(2), n("button", {
                        staticClass: "pswp__button pswp__button--arrow--left",
                        attrs: {
                            title: "Previous (arrow left)"
                        }
                    }), n("button", {
                        staticClass: "pswp__button pswp__button--arrow--right",
                        attrs: {
                            title: "Next (arrow right)"
                        }
                    }), e._m(3), e.currentVideoSrc ? n("a", {
                        class: ["live-icon"],
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), t.preventDefault(), e.handleLive(t)
                            },
                            touchstart: function(t) {
                                return t.stopPropagation(), t.preventDefault(), e.handleLive(t)
                            }
                        }
                    }, [n("i", {
                        class: ["lite-iconf", "lite-iconf-live", e.isLiveShow ? "live" : ""]
                    })]) : e._e()]), e.currentVideoSrc ? n("div", {
                        class: ["live-warp", e.isLiveShow ? "" : "hidden"],
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), t.preventDefault(), e.resetLive(t)
                            },
                            touchstart: function(t) {
                                return t.stopPropagation(), t.preventDefault(), e.resetLive(t)
                            }
                        }
                    }, [n("video", {
                        ref: "liveVideo",
                        staticStyle: {
                            "object-fit": "fill"
                        },
                        attrs: {
                            width: e.liveSizeWidth,
                            height: e.liveSizeHeight,
                            autoplay: "",
                            poster: e.currentImage,
                            "x5-video-player-type": "h5",
                            "webkit-playsinline": "true",
                            playsinline: "true"
                        },
                        on: {
                            playing: e.playLive,
                            ended: e.resetLive,
                            abort: e.errorLive,
                            error: e.errorLive
                        }
                    }, [e.isLiveSourceShow ? n("source", {
                        attrs: {
                            src: e.currentVideoSrc,
                            type: "video/quicktime"
                        }
                    }) : e._e()])]) : e._e()])])
                },
                o = [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "pswp__container"
                    }, [n("div", {
                        staticClass: "pswp__item"
                    }), n("div", {
                        staticClass: "pswp__item"
                    }), n("div", {
                        staticClass: "pswp__item"
                    })])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "pswp__preloader"
                    }, [n("div", {
                        staticClass: "pswp__preloader__icn"
                    }, [n("div", {
                        staticClass: "pswp__preloader__cut"
                    }, [n("div", {
                        staticClass: "pswp__preloader__donut"
                    })])])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "pswp__share-modal pswp__share-modal--hidden pswp__single-tap"
                    }, [n("div", {
                        staticClass: "pswp__share-tooltip"
                    })])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "pswp__caption"
                    }, [n("div", {
                        staticClass: "pswp__caption__center"
                    })])
                }],
                a = n("5176"),
                r = n.n(a),
                s = (n("a481"), n("774e")),
                c = n.n(s),
                l = (n("ac6a"), n("685a")),
                u = n("b24f"),
                d = n.n(u),
                p = n("e814"),
                f = n.n(p),
                m = (n("7f7f"), function(e, t) {
                    var n, i, o, a, r, s, c, l, u, d, p, m, h, v, g, w, b, _, x = this,
                        C = !1,
                        y = !0,
                        T = !0,
                        k = {
                            barsSize: {
                                top: 44,
                                bottom: "auto"
                            },
                            closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                            timeToIdle: 4e3,
                            timeToIdleOutside: 1e3,
                            loadingIndicatorDelay: 1e3,
                            addCaptionHTMLFn: function(e, t) {
                                return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
                            },
                            closeEl: !0,
                            captionEl: !0,
                            fullscreenEl: !0,
                            zoomEl: !0,
                            shareEl: !0,
                            counterEl: !0,
                            arrowEl: !0,
                            preloaderEl: !0,
                            tapToClose: !1,
                            tapToToggleControls: !0,
                            clickToCloseNonZoomable: !0,
                            shareButtons: [{
                                id: "facebook",
                                label: "Share on Facebook",
                                url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                            }, {
                                id: "twitter",
                                label: "Tweet",
                                url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                            }, {
                                id: "pinterest",
                                label: "Pin it",
                                url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                            }, {
                                id: "download",
                                label: "Download image",
                                url: "{{raw_image_url}}",
                                download: !0
                            }],
                            getImageURLForShare: function() {
                                return e.currItem.src || ""
                            },
                            getPageURLForShare: function() {
                                return window.location.href
                            },
                            getTextForShare: function() {
                                return e.currItem.title || ""
                            },
                            indexIndicatorSep: " / ",
                            fitControlsWidth: 1200
                        },
                        E = function(e) {
                            if (w) return !0;
                            e = e || window.event, g.timeToIdle && g.mouseUsed && !u && M();
                            for (var n, i, o = e.target || e.srcElement, a = o.getAttribute("class") || "", r = 0; r < j.length; r++) n = j[r], n.onTap && a.indexOf("pswp__" + n.name) > -1 && (n.onTap(o), i = !0);
                            if (i) {
                                e.stopPropagation && e.stopPropagation(), w = !0;
                                var s = t.features.isOldAndroid ? 600 : 30;
                                setTimeout(function() {
                                    w = !1
                                }, s)
                            }
                        },
                        S = function() {
                            return !e.likelyTouchDevice || g.mouseUsed || screen.width > g.fitControlsWidth
                        },
                        L = function(e, n, i) {
                            t[(i ? "add" : "remove") + "Class"](e, "pswp__" + n)
                        },
                        I = function() {
                            var e = 1 === g.getNumItemsFn();
                            e !== v && (L(i, "ui--one-slide", e), v = e)
                        },
                        O = function() {
                            L(c, "share-modal--hidden", T)
                        },
                        P = function() {
                            return T = !T, T ? (t.removeClass(c, "pswp__share-modal--fade-in"), setTimeout(function() {
                                T && O()
                            }, 300)) : (O(), setTimeout(function() {
                                T || t.addClass(c, "pswp__share-modal--fade-in")
                            }, 30)), T || D(), !1
                        },
                        $ = function(t) {
                            t = t || window.event;
                            var n = t.target || t.srcElement;
                            return e.shout("shareLinkClick", t, n), !!n.href && (!!n.hasAttribute("download") || (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), T || P(), !1))
                        },
                        D = function() {
                            for (var e, t, n, i, o, a = "", r = 0; r < g.shareButtons.length; r++) e = g.shareButtons[r], n = g.getImageURLForShare(e), i = g.getPageURLForShare(e), o = g.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(o)), a += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", g.parseShareButtonOut && (a = g.parseShareButtonOut(e, a));
                            c.children[0].innerHTML = a, c.children[0].onclick = $
                        },
                        A = function(e) {
                            for (var n = 0; n < g.closeElClasses.length; n++)
                                if (t.hasClass(e, "pswp__" + g.closeElClasses[n])) return !0
                        },
                        W = 0,
                        M = function() {
                            clearTimeout(_), W = 0, u && x.setIdle(!1)
                        },
                        R = function(e) {
                            e = e || window.event;
                            var t = e.relatedTarget || e.toElement;
                            t && "HTML" !== t.nodeName || (clearTimeout(_), _ = setTimeout(function() {
                                x.setIdle(!0)
                            }, g.timeToIdleOutside))
                        },
                        U = function() {
                            g.fullscreenEl && !t.features.isOldAndroid && (n || (n = x.getFullscreenAPI()), t.addClass(e.template, "pswp--supports-fs"))
                        },
                        F = function() {
                            g.preloaderEl && (B(!0), d("beforeChange", function() {
                                clearTimeout(h), h = setTimeout(function() {
                                    e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && B(!1) : B(!0)
                                }, g.loadingIndicatorDelay)
                            }), d("imageLoadComplete", function(t, n) {
                                e.currItem === n && B(!0)
                            }))
                        },
                        B = function(e) {
                            m !== e && (L(p, "preloader--active", !e), m = e)
                        },
                        V = function(e) {
                            var n = e.vGap;
                            if (S()) {
                                var r = g.barsSize;
                                if (g.captionEl && "auto" === r.bottom)
                                    if (a || (a = t.createEl("pswp__caption pswp__caption--fake"), a.appendChild(t.createEl("pswp__caption__center")), i.insertBefore(a, o), t.addClass(i, "pswp__ui--fit")), g.addCaptionHTMLFn(e, a, !0)) {
                                        var s = a.clientHeight;
                                        n.bottom = f()(s, 10) || 44
                                    } else n.bottom = r.top;
                                else n.bottom = "auto" === r.bottom ? 0 : r.bottom;
                                n.top = r.top
                            } else n.top = n.bottom = 0
                        },
                        H = function() {
                            g.timeToIdle && d("mouseUsed", function() {
                                t.bind(document, "mousemove", M), t.bind(document, "mouseout", R), b = setInterval(function() {
                                    W++, 2 === W && x.setIdle(!0)
                                }, g.timeToIdle / 2)
                            })
                        },
                        N = function() {
                            var e;
                            d("onVerticalDrag", function(e) {
                                y && e < .95 ? x.hideControls() : !y && e >= .95 && x.showControls()
                            }), d("onPinchClose", function(t) {
                                y && t < .9 ? (x.hideControls(), e = !0) : e && !y && t > .9 && x.showControls()
                            }), d("zoomGestureEnded", function() {
                                e = !1, e && !y && x.showControls()
                            })
                        },
                        j = [{
                            name: "caption",
                            option: "captionEl",
                            onInit: function(e) {
                                o = e
                            }
                        }, {
                            name: "share-modal",
                            option: "shareEl",
                            onInit: function(e) {
                                c = e
                            },
                            onTap: function() {
                                P()
                            }
                        }, {
                            name: "button--share",
                            option: "shareEl",
                            onInit: function(e) {
                                s = e
                            },
                            onTap: function() {
                                P()
                            }
                        }, {
                            name: "button--zoom",
                            option: "zoomEl",
                            onTap: e.toggleDesktopZoom
                        }, {
                            name: "counter",
                            option: "counterEl",
                            onInit: function(e) {
                                r = e
                            }
                        }, {
                            name: "button--close",
                            option: "closeEl",
                            onTap: e.close
                        }, {
                            name: "button--arrow--left",
                            option: "arrowEl",
                            onTap: e.prev
                        }, {
                            name: "button--arrow--right",
                            option: "arrowEl",
                            onTap: e.next
                        }, {
                            name: "button--fs",
                            option: "fullscreenEl",
                            onTap: function(t) {
                                var n = e.currItem.bsrc || e.currItem.src;
                                t.href = n
                            }
                        }, {
                            name: "preloader",
                            option: "preloaderEl",
                            onInit: function(e) {
                                p = e
                            }
                        }],
                        q = function() {
                            var e, n, o, a = function(i) {
                                if (i)
                                    for (var a = i.length, r = 0; r < a; r++) {
                                        e = i[r], n = e.className;
                                        for (var s = 0; s < j.length; s++) o = j[s], n.indexOf("pswp__" + o.name) > -1 && (g[o.option] ? (t.removeClass(e, "pswp__element--disabled"), o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                                    }
                            };
                            a(i.children);
                            var r = t.getChildByClass(i, "pswp__top-bar");
                            r && a(r.children)
                        };
                    x.init = function() {
                        t.extend(e.options, k, !0), g = e.options, i = t.getChildByClass(e.scrollWrap, "pswp__ui"), d = e.listen, N(), d("beforeChange", x.update), d("doubleTap", function(t) {
                            var n = e.currItem.initialZoomLevel;
                            e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(g.getDoubleTapZoom(!1, e.currItem), t, 333)
                        }), d("preventDragEvent", function(e, t, n) {
                            var i = e.target || e.srcElement;
                            i && i.getAttribute("class") && e.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
                        }), d("bindEvents", function() {
                            t.bind(i, "pswpTap click", E), t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", x.onMouseOver)
                        }), d("unbindEvents", function() {
                            T || P(), b && clearInterval(b), t.unbind(document, "mouseout", R), t.unbind(document, "mousemove", M), t.unbind(i, "pswpTap click", E), t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", x.onMouseOver), n && (t.unbind(document, n.eventK, x.updateFullscreen), n.isFullscreen() && (g.hideAnimationDuration = 0, n.exit()), n = null)
                        }), d("destroy", function() {
                            g.captionEl && (a && i.removeChild(a), t.removeClass(o, "pswp__caption--empty")), c && (c.children[0].onclick = null), t.removeClass(i, "pswp__ui--over-close"), t.addClass(i, "pswp__ui--hidden"), x.setIdle(!1)
                        }), g.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"), d("initialZoomIn", function() {
                            g.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden")
                        }), d("initialZoomOut", function() {
                            t.addClass(i, "pswp__ui--hidden")
                        }), d("parseVerticalMargin", V), q(), g.shareEl && s && c && (T = !0), I(), H(), U(), F()
                    }, x.setIdle = function(e) {
                        u = e, L(i, "ui--idle", e)
                    }, x.update = function() {
                        y && e.currItem ? (x.updateIndexIndicator(), g.captionEl && (g.addCaptionHTMLFn(e.currItem, o), L(o, "caption--empty", !e.currItem.title)), C = !0) : C = !1, T || P(), I()
                    }, x.updateFullscreen = function(n) {
                        n && setTimeout(function() {
                            e.setScrollOffset(0, t.getScrollY())
                        }, 50)
                    }, x.updateIndexIndicator = function() {
                        g.counterEl && (r.innerHTML = e.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn())
                    }, x.onGlobalTap = function(n) {
                        n = n || window.event;
                        var i = n.target || n.srcElement;
                        if (!w)
                            if (n.detail && "mouse" === n.detail.pointerType) {
                                if (A(i)) return void e.close();
                                t.hasClass(i, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? g.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
                            } else if (g.tapToToggleControls && (y ? x.hideControls() : x.showControls()), g.tapToClose && (t.hasClass(i, "pswp__img") || A(i))) return void e.close()
                    }, x.onMouseOver = function(e) {
                        e = e || window.event;
                        var t = e.target || e.srcElement;
                        L(i, "ui--over-close", A(t))
                    }, x.hideControls = function() {
                        t.addClass(i, "pswp__ui--hidden"), y = !1
                    }, x.showControls = function() {
                        y = !0, C || x.update(), t.removeClass(i, "pswp__ui--hidden")
                    }, x.supportsFullscreen = function() {
                        var e = document;
                        return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
                    }, x.getFullscreenAPI = function() {
                        var t, n = document.documentElement,
                            i = "fullscreenchange";
                        return n.requestFullscreen ? t = {
                            enterK: "requestFullscreen",
                            exitK: "exitFullscreen",
                            elementK: "fullscreenElement",
                            eventK: i
                        } : n.mozRequestFullScreen ? t = {
                            enterK: "mozRequestFullScreen",
                            exitK: "mozCancelFullScreen",
                            elementK: "mozFullScreenElement",
                            eventK: "moz" + i
                        } : n.webkitRequestFullscreen ? t = {
                            enterK: "webkitRequestFullscreen",
                            exitK: "webkitExitFullscreen",
                            elementK: "webkitFullscreenElement",
                            eventK: "webkit" + i
                        } : n.msRequestFullscreen && (t = {
                            enterK: "msRequestFullscreen",
                            exitK: "msExitFullscreen",
                            elementK: "msFullscreenElement",
                            eventK: "MSFullscreenChange"
                        }), t && (t.enter = function() {
                            if (l = g.closeOnScroll, g.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK) return e.template[this.enterK]();
                            e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                        }, t.exit = function() {
                            return g.closeOnScroll = l, document[this.exitK]()
                        }, t.isFullscreen = function() {
                            return document[this.elementK]
                        }), t
                    }
                }),
                h = m,
                v = n("383a"),
                g = {
                    name: "pswp",
                    created: function() {
                        var e = this;
                        v["a"].$on("mvGallery", function(t, n) {
                            e.isInApp = !!window.WeiboJSBridge, e.listLen = n.length, e.list = n, e.openPhotoSwipe(t, n), e.currentImage = e.list[t].src, e.currentIndex = t, e.currentVideoSrc = e.list[t].videoSrc
                        })
                    },
                    data: function() {
                        return {
                            isInApp: !1,
                            listLen: 1,
                            list: [],
                            isIos: "iOS" === l["a"].os,
                            currentImage: null,
                            showTip: !1,
                            isGuideShow: !1,
                            currentVideoSrc: "",
                            isLiveUsed: !1,
                            currentIndex: null,
                            isLiveLoaded: !1,
                            liveLoading: !1,
                            isLiveShow: !1,
                            liveSizeHeight: 0,
                            liveSizeWidth: 0,
                            isLiveSourceShow: !1,
                            loadingTimer: null
                        }
                    },
                    methods: {
                        getCurrentImageSize: function() {
                            var e = this,
                                t = document.querySelectorAll(".pswp__img");
                            c()(t).forEach(function(t) {
                                "block" === t.style.display && (e.liveSizeWidth = +t.style.width.replace("px", ""), e.liveSizeHeight = +t.style.height.replace("px", ""))
                            })
                        },
                        resetLive: function() {
                            this.isLiveSourceShow = !1, this.liveLoading = !1, this.isLiveShow = !1, this.isLiveLoaded = !1
                        },
                        handleLive: function() {
                            var e = this;
                            if (this.isLiveShow) this.resetLive();
                            else {
                                if (!this.isLiveUsed) {
                                    this.isLiveUsed = !0;
                                    var t = this;
                                    window.addEventListener("resize", t.onResize), window.Raven && window.Raven.captureMessage("LIVE PHOTOS 使用率", {
                                        level: "warning",
                                        tags: {
                                            errorType: ""
                                        },
                                        extra: {
                                            info: ""
                                        }
                                    })
                                }
                                if (this.isLiveShow = !0, this.liveLoading = !0, !this.$refs.liveVideo.canPlayType("video/quicktime")) return this.isLiveShow = !1, this.liveLoading = !1, void v["a"].$emit("mvToast", {
                                    type: "error",
                                    text: "该浏览器不支持"
                                });
                                this.loadingTimer = setTimeout(function() {
                                    e.liveLoading && (e.liveLoading = !1, e.resetLive(), v["a"].$emit("mvToast", {
                                        type: "error",
                                        text: "暂时无法播放"
                                    }))
                                }, 3e4), this.isLiveSourceShow = !0, this.getCurrentImageSize();
                                var n = this.$refs.liveVideo;
                                n.onloadstart = this.loadstartLive(), n.play()
                            }
                        },
                        playLive: function() {
                            this.isLiveLoaded = !1, this.liveLoading = !1
                        },
                        loadstartLive: function() {
                            this.liveLoading = !0
                        },
                        errorLive: function() {
                            this.isLiveShow && (this.resetLive(), v["a"].$emit("mvToast", {
                                type: "error",
                                text: "暂时无法播放"
                            }))
                        },
                        onResize: function() {
                            this.getCurrentImageSize()
                        },
                        touchStartSave: function() {
                            if (!this.isGuideShow) {
                                this.isGuideShow = !0;
                                var e = this;
                                setTimeout(function() {
                                    e.isGuideShow = !1
                                }, 2e3)
                            }
                        },
                        openPhotoSwipe: function(e, t) {
                            var n = this,
                                i = {
                                    showHideOpacity: !0,
                                    loop: !1,
                                    getThumbBoundsFn: function(e) {
                                        var n = window.pageYOffset || document.documentElement.scrollTop,
                                            i = t[e].el.getBoundingClientRect();
                                        return {
                                            x: i.left,
                                            y: i.top + n,
                                            w: i.width
                                        }
                                    },
                                    index: e,
                                    fullscreenEl: !0,
                                    closeEl: !this.isInApp
                                },
                                o = {
                                    isClickableElement: function() {
                                        return !0
                                    }
                                };
                            this.isIos || (i = r()(i, o));
                            var a = new d.a(this.$el, h, t, i);
                            a.init(), a.listen("beforeChange", function() {
                                var e = a.getCurrentIndex();
                                n.isLiveUsed && (n.resetLive(), n.loadingTimer && clearTimeout(n.loadingTimer)), n.currentImage = n.list[e].src, n.currentIndex = e, n.currentVideoSrc = n.list[e].videoSrc
                            }), a.listen("close", function() {
                                if (n.currentImage = null, n.list = [], n.isLiveUsed) {
                                    n.resetLive(), n.liveSizeHeight = 0, n.liveSizeWidth = 0, n.isLiveUsed = !1;
                                    var e = n;
                                    window.removeEventListener("resize", e.onResize), n.loadingTimer && clearTimeout(n.loadingTimer)
                                }
                            })
                        }
                    }
                },
                w = g,
                b = (n("555a"), n("0c7c")),
                _ = Object(b["a"])(w, i, o, !1, null, "390f07f5", null);
            t["default"] = _.exports
        },
        cac3: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "card m-panel card4"
                    }, [n("label", {
                        attrs: {
                            for: e.id
                        }
                    }, [n("div", {
                        staticClass: "card-wrap"
                    }, [n("div", {
                        staticClass: "card-main"
                    }, [n("div", {
                        staticClass: "m-box"
                    }, [n("div", {
                        staticClass: "box-left m-box-col m-box-center-a"
                    }, [e.icon ? n("span", {
                        staticClass: "m-img-icon"
                    }, [n("img", {
                        attrs: {
                            src: e.icon
                        }
                    })]) : e._e(), n("span", {
                        staticClass: "link-text"
                    }, [n("span", {
                        staticClass: "main-link",
                        domProps: {
                            textContent: e._s(e.text)
                        }
                    }), e._t("default")], 2)]), n("div", {
                        staticClass: "box-right m-box-center-a"
                    }, [n("label", {
                        staticClass: "m-switch"
                    }, [n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.curChecked,
                            expression: "curChecked"
                        }],
                        attrs: {
                            type: "checkbox",
                            id: e.id,
                            disabled: e.disabled
                        },
                        domProps: {
                            checked: Array.isArray(e.curChecked) ? e._i(e.curChecked, null) > -1 : e.curChecked
                        },
                        on: {
                            change: function(t) {
                                var n = e.curChecked,
                                    i = t.target,
                                    o = !!i.checked;
                                if (Array.isArray(n)) {
                                    var a = null,
                                        r = e._i(n, a);
                                    i.checked ? r < 0 && (e.curChecked = n.concat([a])) : r > -1 && (e.curChecked = n.slice(0, r).concat(n.slice(r + 1)))
                                } else e.curChecked = o
                            }
                        }
                    }), n("span")])])])])])])])
                },
                o = [],
                a = {
                    name: "checkbox",
                    data: function() {
                        return {
                            id: 0,
                            curChecked: this.checked
                        }
                    },
                    created: function() {
                        var e = ~~(1e5 * Math.random());
                        this.id = "mv".concat(e)
                    },
                    props: {
                        checked: {
                            required: !0
                        },
                        text: {
                            type: String,
                            required: !0
                        },
                        icon: {
                            type: String
                        },
                        disabled: Boolean
                    },
                    watch: {
                        curChecked: function() {
                            this.$emit("check")
                        }
                    }
                },
                r = a,
                s = n("0c7c"),
                c = Object(s["a"])(r, i, o, !1, null, null, null);
            t["default"] = c.exports
        },
        d03a: function(e, t, n) {
            "use strict";
            n.r(t);
            n("3b2b"), n("a481");
            var i = n("a18c");
            t["default"] = {
                name: "mvlink",
                bind: function(e, t, n) {
                    function o(o) {
                        if (e.classList.add("m-active"), setTimeout(function() {
                                e && e.classList.remove("m-active")
                            }, 100), t.value && (t.value.scheme || t.value.actionlog || t.value.toLogin || t.value.callback || e.getAttribute("callback"))) {
                            if (o.stopPropagation(), t.value.actionlog) {
                                var a = t.value.actionlog;
                                delete a.uicode;
                                try {
                                    a.uicode = n.context.$route.meta.uicode
                                } catch (c) {}
                                n.context.$http.get("h5logs/actionLog", {
                                    params: a
                                })
                            }
                            if (t.value.toLogin);
                            else if (t.value.callback) t.value.callback.call();
                            else if (e.getAttribute("callback")) {
                                var r = e.getAttribute("callback").replace(/\(\)/g, "");
                                n.context[r].call()
                            } else if (t.value.scheme) {
                                var s = i["b"].some(function(e) {
                                    var n = new RegExp("^https?://m.weibo.cn".concat(e, "([/?#]|$)"));
                                    return "/" !== e && n.test(t.value.scheme)
                                });
                                s ? n.context.$router.push({
                                    path: t.value.scheme.replace(/^https?:\/\/m.weibo.cn/, "")
                                }) : window.location.href = t.value.scheme
                            }
                        }
                    }
                    e.addEventListener("click", o)
                }
            }
        },
        d50c: function(e, t, n) {
            "use strict";
            n.r(t), t["default"] = {
                name: "mactive",
                bind: function(e) {
                    function t() {
                        e && e.classList.remove("m-active")
                    }

                    function n() {
                        e.classList.add("m-active"), setTimeout(t, 500)
                    }

                    function i() {
                        var e = !1;
                        try {
                            var t = Object.defineProperty({}, "passive", {
                                get: function() {
                                    return e = !0, !0
                                }
                            });
                            window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
                        } catch (n) {
                            e = !1
                        }
                        return e
                    }
                    e.addEventListener("touchstart", n, !!i && {
                        passive: !0
                    }), e.addEventListener("touchend", t)
                }
            }
        },
        d5d4: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showloading,
                            expression: "showloading"
                        }],
                        ref: "loading",
                        staticClass: "m-tips m-tips-tp"
                    }, [e._m(0)])
                },
                o = [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "m-loading m-loading-dark"
                    }, [n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span")])
                }],
                a = (n("c5f6"), n("383a")),
                r = {
                    name: "pagemore",
                    created: function() {
                        var e = this;
                        this.$nextTick(function() {
                            e.loadingHeiht = e.$el.clientHeight
                        }), a["a"].$on("requestEnd", function() {
                            e.requesting = !1
                        }), a["a"].$on("hideLoadmore", function() {
                            e.showloading = !1
                        })
                    },
                    props: {
                        loadGap: {
                            type: Number,
                            default: 0
                        },
                        nextPage: {
                            type: Function,
                            default: function() {}
                        }
                    },
                    data: function() {
                        return {
                            loadingHeiht: 0,
                            showloading: !0,
                            requesting: !1
                        }
                    },
                    watch: {
                        requesting: function(e) {
                            window.onscroll = e ? null : this.loadmore
                        }
                    },
                    mounted: function() {
                        window.onscroll = this.loadmore
                    },
                    methods: {
                        loadmore: function() {
                            var e = document.body.scrollTop,
                                t = document.documentElement.clientHeight,
                                n = this.getOffsetPosition(this.$refs.loading).top;
                            e > t && n + this.loadingHeiht / 2 < e + t + this.loadGap && (this.nextPage(), this.requesting = !0)
                        }
                    }
                },
                s = r,
                c = n("0c7c"),
                l = Object(c["a"])(s, i, o, !1, null, null, null);
            t["default"] = l.exports
        },
        dbd6: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "card-main"
                    }, [n("div", {
                        staticClass: "m-img-box"
                    }, [n("v-touch", {
                        on: {
                            pan: e.onPan,
                            panend: e.onPanEnd
                        }
                    }, [n("ul", {
                        ref: "piclist",
                        style: {
                            width: e.pageWidth + "px",
                            height: e.pageHeight + "px"
                        }
                    }, e._l(e.picsArr, function(t, i) {
                        return n("li", {
                            directives: [{
                                name: "mvlink",
                                rawName: "v-mvlink",
                                value: t,
                                expression: "item"
                            }],
                            key: i,
                            class: {
                                cur: t.cur
                            },
                            style: {
                                transform: e.translateX(t),
                                transitionDuration: e.transitionDuration(t)
                            },
                            on: {
                                transitionend: e.initPic,
                                click: function(n) {
                                    return e.onClickPic(n, t)
                                }
                            }
                        }, [n("img", {
                            attrs: {
                                src: t[e.imgUrlKey]
                            }
                        }), e.titleKey && t[e.titleKey] ? n("div", {
                            staticClass: "text-bar"
                        }, [n("span", {
                            staticClass: "m-text-cut",
                            style: {
                                paddingRight: e.dotPadding + "px"
                            },
                            domProps: {
                                textContent: e._s(t[e.titleKey])
                            }
                        })]) : e._e()])
                    }), 0)])], 1), e.picsArr.length > 1 && e.dotVal ? n("ul", {
                        ref: "dot",
                        staticClass: "m-sld-dot"
                    }, e._l(e.picsArr, function(t, i) {
                        return n("li", {
                            key: i,
                            class: {
                                cur: i === e.pageIndex
                            }
                        })
                    }), 0) : e._e()])
                },
                o = [],
                a = (n("c5f6"), n("cebc")),
                r = n("5d73"),
                s = n.n(r),
                c = (n("ac6a"), n("a026")),
                l = {
                    name: "slider",
                    data: function() {
                        return {
                            pageWidth: 0,
                            firstPicHeight: 0,
                            pageIndex: 0,
                            dragging: !1,
                            timer: null,
                            quickTurnPage: !1,
                            dotPadding: 0,
                            picsArr: this.pics
                        }
                    },
                    computed: {
                        dotVal: function() {
                            return "true" === this.dot || !!+this.dot
                        },
                        widthVal: function() {
                            return +this.width
                        },
                        heightVal: function() {
                            return +this.height
                        },
                        autoPlayVal: function() {
                            return +this.autoPlay
                        },
                        speedVal: function() {
                            return +this.speed
                        },
                        pageHeight: function() {
                            return this.heightVal ? this.widthVal ? this.heightVal / this.widthVal * this.pageWidth : this.heightVal : this.firstPicHeight
                        },
                        nextIndex: function() {
                            return (this.pageIndex + 1) % this.picsArr.length
                        },
                        prevIndex: function() {
                            return (this.pageIndex - 1 + this.picsArr.length) % this.picsArr.length
                        }
                    },
                    methods: {
                        translateX: function(e) {
                            return "translateX(".concat(e.deltaX, "px)")
                        },
                        transitionDuration: function(e) {
                            var t = "0s";
                            return this.autoPlayVal && e.cur && (t = "".concat(this.speedVal, "ms"), this.dragging ? t = "0s" : this.quickTurnPage && (t = "200ms")), t
                        },
                        next: function() {
                            var e = this.picsArr;
                            e[this.nextIndex].cur = !0, e[this.nextIndex].deltaX = 0, e[this.pageIndex].deltaX = -this.pageWidth, this.pageIndex = this.nextIndex
                        },
                        prev: function() {
                            var e = this.picsArr;
                            e[this.prevIndex].cur = !0, e[this.pageIndex].deltaX = this.pageWidth, e[this.prevIndex].deltaX = 0, this.pageIndex = this.prevIndex
                        },
                        initPic: function() {
                            this.picsArr.forEach(function(e) {
                                e.cur = !1, e.deltaX = 0
                            }), this.quickTurnPage = !1, this.picsArr[this.pageIndex].cur = !0
                        },
                        initTimer: function() {
                            if (this.autoPlayVal <= this.speedVal) throw new Error("auto-play must more than speed");
                            if (this.autoPlayVal > 0 && this.picsArr.length > 1) {
                                var e = this;
                                clearInterval(e.timer), e.timer = setInterval(function() {
                                    e.picsArr[e.nextIndex].cur = !0, e.picsArr[e.nextIndex].deltaX = e.pageWidth, setTimeout(function() {
                                        e.next()
                                    }, 10)
                                }, e.autoPlayVal)
                            }
                        },
                        onPan: function(e) {
                            if (!this.noDrag && this.picsArr.length > 1) {
                                this.dragging = !0;
                                var t = this.picsArr;
                                t[this.pageIndex].deltaX = e.deltaX, e.deltaX < 0 ? (t[this.nextIndex].cur = !0, t[this.nextIndex].deltaX = e.deltaX + this.pageWidth) : (t[this.prevIndex].cur = !0, t[this.prevIndex].deltaX = e.deltaX - this.pageWidth), this.initTimer()
                            }
                        },
                        onPanEnd: function(e) {
                            !this.noDrag && this.picsArr.length > 1 && (this.dragging = !1, e.distance > .5 * this.pageWidth || e.distance > 150 ? e.deltaX < 0 ? this.next() : this.prev() : (this.picsArr[this.pageIndex].deltaX = 0, e.deltaX < 0 ? this.picsArr[this.nextIndex].deltaX = this.pageWidth : this.picsArr[this.prevIndex].deltaX = -this.pageWidth))
                        },
                        onClickPic: function(e, t) {
                            if (!this.noDrag && this.picsArr.length > 1)
                                if (t[this.imgLinkKey]) window.location.href = t[this.imgLinkKey];
                                else {
                                    var n = this,
                                        i = this.picsArr;
                                    n.initTimer(), this.quickTurnPage = !0, e.clientX < window.innerWidth / 2 ? (i[n.prevIndex].cur = !0, i[n.prevIndex].deltaX = -n.pageWidth, setTimeout(function() {
                                        n.prev()
                                    }, 50)) : (i[n.nextIndex].cur = !0, i[n.nextIndex].deltaX = n.pageWidth, setTimeout(function() {
                                        n.next()
                                    }, 50))
                                }
                        },
                        resize: function() {
                            var e = this;
                            if (!this.heightVal) var t = setInterval(function() {
                                if (e.$refs.piclist) {
                                    var n = e.$refs.piclist.children[0].firstElementChild.offsetHeight;
                                    n > 0 && (e.firstPicHeight = n, clearInterval(t))
                                } else clearInterval(t)
                            }, 50);
                            this.pageWidth = this.$el ? this.$el.offsetWidth : this.pageWidth, this.dotVal && (this.dotPadding = this.pageWidth - this.$refs.dot.offsetLeft)
                        },
                        create: function() {
                            var e = !0,
                                t = !1,
                                n = void 0;
                            try {
                                for (var i, o = s()(this.picsArr); !(e = (i = o.next()).done); e = !0) {
                                    var a = i.value;
                                    c["a"].set(a, "deltaX", 0), c["a"].set(a, "cur", !1)
                                }
                            } catch (r) {
                                t = !0, n = r
                            } finally {
                                try {
                                    e || null == o.return || o.return()
                                } finally {
                                    if (t) throw n
                                }
                            }
                            this.initPic()
                        }
                    },
                    created: function() {
                        var e = this;
                        this.$watch("pics", function(t) {
                            e.picsArr = t.map(function(e) {
                                return Object(a["a"])({}, e)
                            }), e.create()
                        }, {
                            deep: !0
                        }), this.create()
                    },
                    mounted: function() {
                        var e = this;
                        c["a"].nextTick(function() {
                            e.resize(), window.addEventListener("resize", e.resize), e.initTimer()
                        })
                    },
                    destroyed: function() {
                        var e = this;
                        window.removeEventListener("resize", e.resize), clearInterval(e.timer)
                    },
                    props: {
                        pics: {
                            type: Array,
                            required: !0
                        },
                        width: {
                            type: [String, Number],
                            default: 0
                        },
                        height: {
                            type: [String, Number],
                            default: 0
                        },
                        dot: {
                            default: !0
                        },
                        autoPlay: {
                            type: [String, Number],
                            default: 0
                        },
                        noDrag: {
                            type: Boolean,
                            default: !1
                        },
                        speed: {
                            type: [String, Number],
                            default: 300,
                            validator: function(e) {
                                return e >= 0
                            }
                        },
                        imgUrlKey: {
                            type: String,
                            required: !0
                        },
                        imgLinkKey: {
                            type: String
                        },
                        titleKey: {
                            type: String
                        }
                    }
                },
                u = l,
                d = (n("23eb"), n("0c7c")),
                p = Object(d["a"])(u, i, o, !1, null, "5977568c", null);
            t["default"] = p.exports
        },
        df14: function(e, t, n) {},
        e774: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        style: {
                            transform: e.translate,
                            transitionDuration: e.transition
                        },
                        on: {
                            mousedown: e.startDrag,
                            touchstart: e.startDrag,
                            mousemove: function(t) {
                                return t.stopPropagation(), e.onDrag(t)
                            },
                            touchmove: function(t) {
                                return t.stopPropagation(), e.onDrag(t)
                            },
                            mouseup: e.stopDrag,
                            touchend: e.stopDrag,
                            mouseleave: e.stopDrag,
                            transitionend: e.transitionEnd
                        }
                    }, [n("div", {
                        staticClass: "m-tips m-tips-tp"
                    }, [e.showArrow ? [e.requesting ? n("div", {
                        staticClass: "m-loading m-loading-dark"
                    }, [n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span")]) : n("i", {
                        staticClass: "m-font m-font-down m-font-down-ani",
                        class: {
                            up: e.dragging && e.dY > e.topDistance
                        }
                    })] : e._e(), e.showText ? n("span", {
                        staticClass: "main-link",
                        domProps: {
                            textContent: e._s(e.status)
                        }
                    }) : e._e()], 2), e._t("default"), n("div", {
                        staticStyle: {
                            position: "fixed"
                        }
                    })], 2)
                },
                o = [],
                a = (n("c5f6"), n("383a"));

            function r(e) {
                var t = e;
                while (t && "HTML" !== t.tagName && "BODY" !== t.tagName && 1 === t.nodeType) {
                    var n = document.defaultView.getComputedStyle(t).overflowY;
                    if ("scroll" === n || "auto" === n) return t;
                    t = t.parentNode
                }
                return document.documentElement
            }
            var s = {
                    name: "loadmore",
                    created: function() {
                        var e = this;
                        this.$nextTick(function() {
                            e.topBarHeight = e.$el.children[0].clientHeight
                        }), a["a"].$on("mvLoadEnd", function() {
                            e.loadEnd()
                        }), a["a"].$on("mvLoadStart", function() {
                            e.scrollTarget.scrollTop = 0, e.loadStart()
                        })
                    },
                    mounted: function() {
                        this.scrollTarget = r(this.$el)
                    },
                    props: {
                        topDistance: {
                            type: Number,
                            default: 100
                        },
                        topPullText: {
                            type: String,
                            default: "下拉刷新"
                        },
                        topDropText: {
                            type: String,
                            default: "加载中..."
                        },
                        topLoadingText: {
                            type: String,
                            default: "释放更新"
                        },
                        showText: {
                            type: Boolean,
                            default: !0
                        },
                        showArrow: {
                            type: Boolean,
                            default: !0
                        },
                        topMethod: {
                            type: Function
                        }
                    },
                    data: function() {
                        return {
                            scrollTarget: null,
                            topBarHeight: 0,
                            requesting: !1,
                            dragging: !1,
                            startY: 0,
                            dY: 0,
                            reset: !0
                        }
                    },
                    computed: {
                        transition: function() {
                            return this.dragging || 0 === this.dY && this.reset ? "0s" : "200ms"
                        },
                        translate: function() {
                            var e = 80 * Math.atan(this.dY / 200) - this.topBarHeight;
                            return "translateY(".concat(e, "px)")
                        },
                        status: function() {
                            return this.dragging && this.dY > this.topDistance ? this.topLoadingText : this.requesting ? this.topDropText : this.topPullText
                        }
                    },
                    watch: {
                        requesting: function(e) {
                            e || (this.dY = 0)
                        }
                    },
                    methods: {
                        loadStart: function() {
                            this.requesting = !0, this.topMethod(), this.dY = this.topDistance
                        },
                        loadEnd: function() {
                            this.requesting = !1
                        },
                        startDrag: function(e) {
                            var t = e.changedTouches ? e.changedTouches[0] : e;
                            this.scrollTarget.scrollTop <= 0 && (this.startY = t.pageY, this.dragging = !0, this.reset = !1)
                        },
                        onDrag: function(e) {
                            var t = e.changedTouches ? e.changedTouches[0] : e;
                            this.dragging && t.pageY - this.startY > 0 && window.scrollY <= 0 && (e.preventDefault(), this.dY = t.pageY - this.startY, this.requesting && (this.dY = this.dY + this.topDistance))
                        },
                        stopDrag: function() {
                            this.dragging = !1, this.dY > this.topDistance && window.scrollY <= 0 ? this.loadStart() : this.dY = 0
                        },
                        transitionEnd: function() {
                            this.dY !== this.topDistance || this.requesting || (this.dY = 0), 0 === this.dY && (this.reset = !0)
                        }
                    }
                },
                c = s,
                l = (n("f39b"), n("0c7c")),
                u = Object(l["a"])(c, i, o, !1, null, null, null);
            t["default"] = u.exports
        },
        e8a6: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("transition", {
                        attrs: {
                            name: "toast"
                        }
                    }, [e.show ? n("div", {
                        staticClass: "mv-toast mask-wrap"
                    }, [e.backdrop ? n("div", {
                        staticClass: "m-mask",
                        on: {
                            touchstart: function(e) {
                                e.stopPropagation(), e.preventDefault()
                            }
                        }
                    }) : e._e(), n("div", {
                        staticClass: "m-popup",
                        on: {
                            touchstart: function(e) {
                                e.stopPropagation(), e.preventDefault()
                            }
                        }
                    }, [n("div", {
                        staticClass: "m-box m-box-dir m-box-center"
                    }, [n("header", ["ok" === e.curType ? n("i", {
                        staticClass: "m-font m-font-line-check"
                    }) : e._e(), "error" === e.curType ? n("i", {
                        staticClass: "m-font m-font-line-close"
                    }) : e._e(), "warning" === e.curType ? n("i", {
                        staticClass: "m-font m-font-warn"
                    }) : e._e(), "wait" === e.curType ? n("div", {
                        staticClass: "m-loading m-loading-light"
                    }, [n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span"), n("span")]) : e._e()]), n("h3", {
                        domProps: {
                            innerHTML: e._s(e.text)
                        }
                    })])])]) : e._e()])
                },
                o = [],
                a = n("795b"),
                r = n.n(a),
                s = n("cebc"),
                c = n("5176"),
                l = n.n(c),
                u = (n("28a5"), n("383a")),
                d = {
                    name: "toast",
                    data: function() {
                        return {
                            duration: 2e3,
                            backdrop: !0,
                            show: !1,
                            text: "",
                            curType: this.type,
                            type: "ok"
                        }
                    },
                    methods: {
                        call: function(e, t) {
                            var n = {};
                            if ("string" === typeof e) n = {
                                text: e
                            };
                            else if (e) {
                                n = e;
                                var i = "ok error warning wait".split(" ").indexOf(n.type) > -1;
                                n.curType = i ? n.type : this.type, delete n.type
                            } else n = {
                                show: !1
                            };
                            l()(this, Object(s["a"])({
                                show: !0
                            }, n)), "function" === typeof t && t(this)
                        },
                        calls: function(e) {
                            var t = this;
                            return new r.a(function(n) {
                                t.call(e), n(t)
                            })
                        }
                    },
                    created: function() {
                        var e = this;
                        window.mvToast = this, u["a"].$on("mvToast", function(t, n) {
                            e.call(t, n)
                        })
                    },
                    watch: {
                        show: function(e) {
                            var t = this;
                            e && "wait" !== this.curType && setTimeout(function() {
                                t.show = !1
                            }, this.duration)
                        },
                        curType: function(e, t) {
                            var n = this;
                            "wait" !== e && "wait" === t && setTimeout(function() {
                                n.show = !1
                            }, this.duration)
                        }
                    }
                },
                p = d,
                f = (n("23fa"), n("0c7c")),
                m = Object(f["a"])(p, i, o, !1, null, null, null);
            t["default"] = m.exports
        },
        f39b: function(e, t, n) {
            "use strict";
            var i = n("0a49"),
                o = n.n(i);
            o.a
        },
        f58a: function(e, t, n) {},
        fc73: function(e, t, n) {
            "use strict";
            var i = n("8bb4"),
                o = n.n(i);
            o.a
        },
        ffee: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("0f32"),
                o = n.n(i),
                a = {
                    distance: .618 * window.innerHeight,
                    gapTime: 300,
                    visibleHeight: 0,
                    firstCheck: !1,
                    funcExpression: "",
                    scrollTarget: null,
                    scrollListener: null,
                    disabled: !1
                };

            function r(e) {
                var t = e;
                while (t && "HTML" !== t.tagName && "BODY" !== t.tagName && 1 === t.nodeType) {
                    var n = document.defaultView.getComputedStyle(t).overflowY;
                    if ("scroll" === n || "auto" === n) return t;
                    t = t.parentNode
                }
                return window
            }

            function s(e) {
                return e === window ? e.innerHeight : e.clientHeight
            }

            function c(e) {
                var t = e.el.getBoundingClientRect().bottom - a.visibleHeight;
                t < a.distance && !a.disabled && e.vm[e.epr].call()
            }

            function l(e) {
                return e
            }
            t["default"] = {
                name: "inf-scroll",
                bind: function(e, t, n) {
                    var i = {
                        el: e,
                        vm: n.context,
                        epr: t.expression
                    };
                    if (a.gapTime = e.getAttribute("gap-time") || a.gapTime, a.distance = e.getAttribute("distance") || a.distance, a.disabled = e.getAttribute("disabled") || a.disabled, a.firstCheck = e.getAttribute("first-check") || a.firstCheck, !i.epr) throw new Error("滚到底后要做什么呢？");
                    if (!{}.hasOwnProperty.call(i.vm, i.epr)) throw new Error("找不到所指定的method");
                    e.getAttribute("first-check") || i.vm[i.epr].call();
                    var u = !1,
                        d = function() {
                            u = !0, i.vm.$nextTick(function() {
                                l(i), a.scrollTarget = r(e), a.visibleHeight = s(a.scrollTarget) || a.visibleHeight, a.scrollListener = o()(function() {
                                    c(i)
                                }, a.gapTime), a.scrollTarget.addEventListener("scroll", a.scrollListener)
                            })
                        };
                    i.vm.$on("hook:mounted", function() {
                        d()
                    }), i.vm.$on("hook:updated", function() {
                        u || d()
                    })
                },
                unbind: function() {
                    a.scrollTarget.removeEventListener("scroll", a.scrollListener)
                }
            }
        }
    },
    [
        [0, "manifest", "vendor"]
    ]
]);
//# sourceMappingURL=app.34ada95a.js.map