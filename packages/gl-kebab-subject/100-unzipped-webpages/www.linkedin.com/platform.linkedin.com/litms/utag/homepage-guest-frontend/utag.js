var tealiumDil, utag_condload = !1;
try {
    ! function() {
        if (("" + document.cookie).match("utag_env_linkedin_homepage-guest-frontend=(//tags.tiqcdn.com/utag/linkedin/[^S;]*)") && -1 === RegExp.$1.indexOf("/prod/")) {
            for (var t = RegExp.$1; - 1 != t.indexOf("%");) t = decodeURIComponent(t);
            t = t.replace(/\.\./g, ""), a = t, (n = (e = document).createElement("script")).language = "javascript", n.type = "text/javascript", n.src = a, e.getElementsByTagName("head")[0].appendChild(n), utag_condload = !0, __tealium_default_path = "//platform.linkedin.com/litms/utag/homepage-guest-frontend/"
        }
        var a, e, n
    }()
} catch (t) {}
try {
    try {
        window.utag_cfg_ovrd = window.utag_cfg_ovrd || {}, window.utag_cfg_ovrd.nocookie = !0, window.utag_data = window.utag_data || {};
        var timestamp = Date.now();
        utag_data["ut.visitor_id"] = timestamp, utag_data.tealium_visitor_id = timestamp, utag_data["cp.utag_main_v_id"] = timestamp
    } catch (t) {
        utag.DB(t)
    }
} catch (t) {}
if (void 0 === utag && !utag_condload) {
    var utag = {
        id: "linkedin.homepage-guest-frontend",
        o: {},
        sender: {},
        send: {},
        rpt: {
            ts: {
                a: new Date
            }
        },
        dbi: [],
        db_log: [],
        loader: {
            q: [],
            lc: 0,
            f: {},
            p: 0,
            ol: 0,
            wq: [],
            lq: [],
            bq: {},
            bk: {},
            rf: 0,
            ri: 0,
            rp: 0,
            rq: [],
            ready_q: [],
            sendq: {
                pending: 0
            },
            run_ready_q: function() {
                for (var t = 0; t < utag.loader.ready_q.length; t++) {
                    utag.DB("READY_Q:" + t);
                    try {
                        utag.loader.ready_q[t]()
                    } catch (t) {
                        utag.DB(t)
                    }
                }
            },
            lh: function(t, a, e) {
                return a = (t = "" + location.hostname).split("."), e = /\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\.|\...\.jp$/.test(t) ? 3 : 2, a.splice(a.length - e, e).join(".")
            },
            WQ: function(t, a, e, n, i) {
                utag.DB("WQ:" + utag.loader.wq.length);
                try {
                    utag.udoname && utag.udoname.indexOf(".") < 0 && utag.ut.merge(utag.data, window[utag.udoname], 0), utag.cfg.load_rules_at_wait && utag.handler.LR(utag.data)
                } catch (t) {
                    utag.DB(t)
                }
                for (n = 0, i = [], t = 0; t < utag.loader.wq.length; t++)(a = utag.loader.wq[t]).load = utag.loader.cfg[a.id].load, 4 == a.load ? (this.f[a.id] = 0, utag.loader.LOAD(a.id)) : a.load > 0 ? (i.push(a), n++) : this.f[a.id] = 1;
                for (t = 0; t < i.length; t++) utag.loader.AS(i[t]);
                0 == n && utag.loader.END()
            },
            AS: function(t, a, e, n) {
                utag.send[t.id] = t, void 0 === t.src && (t.src = utag.cfg.path + (void 0 !== t.name ? t.name : "utag." + t.id + ".js")), t.src += (t.src.indexOf("?") > 0 ? "&" : "?") + "utv=" + (t.v ? utag.cfg.template + t.v : utag.cfg.v), utag.rpt["l_" + t.id] = t.src, a = document, this.f[t.id] = 0, 2 == t.load ? (utag.DB("Attach sync: " + t.src), t.uid = t.id, void 0 !== t.cb && t.cb()) : 1 != t.load && 3 != t.load || a.createElement && (e = "utag_linkedin.homepage-guest-frontend_" + t.id, a.getElementById(e) || (n = {
                    src: t.src,
                    id: e,
                    uid: t.id,
                    loc: t.loc
                }, 3 == t.load && (n.type = "iframe"), void 0 !== t.cb && (n.cb = t.cb), utag.ut.loader(n)))
            },
            GV: function(t, a, e) {
                for (e in a = {}, t) t.hasOwnProperty(e) && "function" != typeof t[e] && (a[e] = t[e]);
                return a
            },
            OU: function(t, a, e, n, i, o, r, d) {
                d = {}, utag.loader.RDcp(d);
                try {
                    if (void 0 !== d["cp.OPTOUTMULTI"])
                        for (i = utag.loader.cfg, e = utag.ut.decode(d["cp.OPTOUTMULTI"]).split("|"), o = 0; o < e.length; o++)
                            if (1 * (n = e[o].split(":"))[1] != 0)
                                if (0 == n[0].indexOf("c")) {
                                    for (r in utag.loader.GV(i))
                                        if (i[r].tcat == n[0].substring(1) && (i[r].load = 0), i[r].tid == t && i[r].tcat == n[0].substring(1)) return !0;
                                    if (a == n[0].substring(1)) return !0
                                } else if (1 * n[0] == 0) utag.cfg.nocookie = !0;
                    else {
                        for (r in utag.loader.GV(i)) i[r].tid == n[0] && (i[r].load = 0);
                        if (t == n[0]) return !0
                    }
                } catch (t) {
                    utag.DB(t)
                }
                return !1
            },
            RDdom: function(t) {
                var a = document || {},
                    e = location || {};
                t["dom.referrer"] = a.referrer, t["dom.title"] = "" + a.title, t["dom.domain"] = "" + e.hostname, t["dom.query_string"] = ("" + e.search).substring(1), t["dom.hash"] = ("" + e.hash).substring(1), t["dom.url"] = "" + a.URL, t["dom.pathname"] = "" + e.pathname, t["dom.viewport_height"] = window.innerHeight || (a.documentElement ? a.documentElement.clientHeight : 960), t["dom.viewport_width"] = window.innerWidth || (a.documentElement ? a.documentElement.clientWidth : 960)
            },
            RDcp: function(t, a, e, n) {
                for (n in a = utag.loader.RC())
                    if (n.match(/utag_(.*)/))
                        for (e in utag.loader.GV(a[n])) t["cp.utag_" + RegExp.$1 + "_" + e] = a[n][e];
                for (e in utag.loader.GV(utag.cl && !utag.cl._all_ ? utag.cl : a)) e.indexOf("utag_") < 0 && void 0 !== a[e] && (t["cp." + e] = a[e])
            },
            RDqp: function(t, a, e, n) {
                if (a = location.search + (location.hash + "").replace("#", "&"), utag.cfg.lowerqp && (a = a.toLowerCase()), a.length > 1)
                    for (e = a.substring(1).split("&"), a = 0; a < e.length; a++)(n = e[a].split("=")).length > 1 && (t["qp." + n[0]] = utag.ut.decode(n[1]))
            },
            RDmeta: function(t, a, e, n) {
                for (a = document.getElementsByTagName("meta"), e = 0; e < a.length; e++) {
                    try {
                        n = a[e].name || a[e].getAttribute("property") || ""
                    } catch (t) {
                        n = "", utag.DB(t)
                    }
                    utag.cfg.lowermeta && (n = n.toLowerCase()), "" != n && (t["meta." + n] = a[e].content)
                }
            },
            RDva: function(t) {
                var a = function(t, a) {
                    var e, n;
                    (e = localStorage.getItem(a)) && "{}" != e && (n = utag.ut.flatten({
                        va: JSON.parse(e)
                    }), utag.ut.merge(t, n, 1))
                };
                try {
                    a(t, "tealium_va"), a(t, "tealium_va_" + t["ut.account"] + "_" + t["ut.profile"])
                } catch (t) {
                    utag.DB(t)
                }
            },
            RDut: function(t, a) {
                var e = {},
                    n = new Date,
                    i = "function" == utag.ut.typeOf(n.toISOString);
                t["ut.domain"] = utag.cfg.domain, t["ut.version"] = utag.cfg.v, e.tealium_event = t["ut.event"] = a || "view", e.tealium_visitor_id = t["ut.visitor_id"] = t["cp.utag_main_v_id"], e.tealium_session_id = t["ut.session_id"] = t["cp.utag_main_ses_id"], e.tealium_session_number = t["cp.utag_main__sn"], e.tealium_session_event_number = t["cp.utag_main__se"];
                try {
                    e.tealium_datasource = utag.cfg.datasource, e.tealium_account = t["ut.account"] = utag.cfg.utid.split("/")[0], e.tealium_profile = t["ut.profile"] = utag.cfg.utid.split("/")[1], e.tealium_environment = t["ut.env"] = utag.cfg.path.split("/")[6]
                } catch (t) {
                    utag.DB(t)
                }
                e.tealium_random = Math.random().toFixed(16).substring(2), e.tealium_library_name = "utag.js", e.tealium_library_version = (utag.cfg.template + "0").substring(2), e.tealium_timestamp_epoch = Math.floor(n.getTime() / 1e3), e.tealium_timestamp_utc = i ? n.toISOString() : "", n.setHours(n.getHours() - n.getTimezoneOffset() / 60), e.tealium_timestamp_local = i ? n.toISOString().replace("Z", "") : "", utag.ut.merge(t, e, 0)
            },
            RDses: function(t, a, e) {
                e = (a = (new Date).getTime()) + parseInt(utag.cfg.session_timeout) + "", t["cp.utag_main_ses_id"] ? (t["cp.utag_main__ss"] = "0", t["cp.utag_main__se"] = 1 + parseInt(t["cp.utag_main__se"] || 0) + "") : (t["cp.utag_main_ses_id"] = a + "", t["cp.utag_main__ss"] = "1", t["cp.utag_main__se"] = "1", t["cp.utag_main__sn"] = 1 + parseInt(t["cp.utag_main__sn"] || 0) + ""), t["cp.utag_main__pn"] = t["cp.utag_main__pn"] || "1", t["cp.utag_main__st"] = e, utag.loader.SC("utag_main", {
                    _sn: t["cp.utag_main__sn"] || 1,
                    _se: t["cp.utag_main__se"],
                    _ss: t["cp.utag_main__ss"],
                    _st: e,
                    ses_id: (t["cp.utag_main_ses_id"] || a) + ";exp-session",
                    _pn: t["cp.utag_main__pn"] + ";exp-session"
                })
            },
            RDpv: function(t) {
                "function" == typeof utag.pagevars && (utag.DB("Read page variables"), utag.pagevars(t))
            },
            RD: function(t, a) {
                utag.DB("utag.loader.RD"), utag.DB(t), utag.loader.RDcp(t), utag.loader.rd_flag || (utag.loader.rd_flag = 1, t["cp.utag_main_v_id"] = t["cp.utag_main_v_id"] || utag.ut.vi((new Date).getTime()), t["cp.utag_main__pn"] = 1 + parseInt(t["cp.utag_main__pn"] || 0) + "", utag.loader.SC("utag_main", {
                    v_id: t["cp.utag_main_v_id"]
                }), utag.loader.RDses(t)), a && !utag.cfg.noview && utag.loader.RDses(t), utag.loader.RDqp(t), utag.loader.RDmeta(t), utag.loader.RDdom(t), utag.loader.RDut(t, a || "view"), utag.loader.RDpv(t), utag.loader.RDva(t)
            },
            RC: function(t, a, e, n, i, o, r, d, u, g, c, s, l, f, p, m, h, _, v, y, w, D) {
                for (m = {}, e = "" + document.cookie != "" ? document.cookie.split("; ") : [], y = /^(.*?)=(.*)$/, w = /^(.*);exp-(.*)$/, D = (new Date).getTime(), n = 0; n < e.length; n++)
                    if (e[n].match(y) && (_ = RegExp.$1, v = RegExp.$2), o = utag.ut.decode(v), void 0 !== _)
                        if (0 == _.indexOf("ulog") || 0 == _.indexOf("utag_")) {
                            for (o = v.split("$"), d = [], c = {}, r = 0; r < o.length; r++) try {
                                if ((d = o[r].split(":")).length > 2 && (d[1] = d.slice(1).join(":")), h = "", 0 == ("" + d[1]).indexOf("~")) {
                                    for (u = d[1].substring(1).split("|"), g = 0; g < u.length; g++) u[g] = utag.ut.decode(u[g]);
                                    h = u
                                } else h = utag.ut.decode(d[1]);
                                c[d[0]] = h
                            } catch (t) {
                                utag.DB(t)
                            }
                            for (r in m[_] = {}, utag.loader.GV(c)) {
                                if (c[r] instanceof Array) {
                                    for (p = [], f = 0; f < c[r].length; f++) c[r][f].match(w) && (s = "session" == RegExp.$2 ? void 0 !== c._st ? c._st : D - 1 : parseInt(RegExp.$2)) > D && (p[f] = 0 == a ? c[r][f] : RegExp.$1);
                                    c[r] = p.join("|")
                                } else c[r] = "" + c[r], c[r].match(w) && (s = "session" == RegExp.$2 ? void 0 !== c._st ? c._st : D - 1 : parseInt(RegExp.$2), c[r] = s < D ? null : 0 == a ? c[r] : RegExp.$1);
                                c[r] && (m[_][r] = c[r])
                            }
                        } else(utag.cl[_] || utag.cl._all_) && (m[_] = o);
                return t ? m[t] ? m[t] : {} : m
            },
            SC: function(t, a, e, n, i, o, r, d, u, g, c, s, l) {
                if (!t) return 0;
                if ("utag_main" == t && utag.cfg.nocookie) return 0;
                l = "";
                var f = new Date,
                    p = new Date;
                if (p.setTime(f.getTime() + 31536e6), s = p.toGMTString(), e && "da" == e) s = "Thu, 31 Dec 2009 00:00:00 GMT";
                else if (0 != t.indexOf("utag_") && 0 != t.indexOf("ulog")) "object" != typeof a && (l = a);
                else {
                    for (i in n = utag.loader.RC(t, 0), utag.loader.GV(a))
                        if ((o = "" + a[i]).match(/^(.*);exp-(\d+)(\w)$/) && (r = f.getTime() + parseInt(RegExp.$2) * ("h" == RegExp.$3 ? 36e5 : 864e5), "u" == RegExp.$3 && (r = parseInt(RegExp.$2)), o = RegExp.$1 + ";exp-" + r), "i" == e) null == n[i] && (n[i] = o);
                        else if ("d" == e) delete n[i];
                    else if ("a" == e) n[i] = null != n[i] ? o - 0 + (n[i] - 0) : o;
                    else if ("ap" == e || "au" == e)
                        if (null == n[i]) n[i] = o;
                        else {
                            if (n[i].indexOf("|") > 0 && (n[i] = n[i].split("|")), (r = n[i] instanceof Array ? n[i] : [n[i]]).push(o), "au" == e) {
                                for (d = {}, c = {}, u = 0; u < r.length; u++) r[u].match(/^(.*);exp-(.*)$/) && (g = RegExp.$1), void 0 === c[g] && (c[g] = 1, d[r[u]] = 1);
                                for (u in r = [], utag.loader.GV(d)) r.push(u)
                            }
                            n[i] = r
                        }
                    else n[i] = o;
                    for (r in d = new Array, utag.loader.GV(n))
                        if (n[r] instanceof Array) {
                            for (e = 0; e < n[r].length; e++) n[r][e] = encodeURIComponent(n[r][e]);
                            d.push(r + ":~" + n[r].join("|"))
                        } else d.push((r + ":").replace(/[\,\$\;\?]/g, "") + encodeURIComponent(n[r]));
                    0 == d.length && (d.push(""), s = ""), l = d.join("$")
                }
                return document.cookie = t + "=" + l + ";path=/;domain=" + utag.cfg.domain + ";expires=" + s, 1
            },
            LOAD: function(t, a, e, n) {
                if (utag.loader.cfg)
                    if (0 != this.ol) {
                        if (utag.DB("utag.loader.LOAD:" + t), 0 == this.f[t]) {
                            if (this.f[t] = 1, 1 != utag.cfg.noview && utag.loader.cfg[t].send) {
                                utag.DB("SENDING: " + t);
                                try {
                                    if (utag.loader.sendq.pending > 0 && utag.loader.sendq[t])
                                        for (utag.DB("utag.loader.LOAD:sendq: " + t); n = utag.loader.sendq[t].shift();) utag.DB(n), utag.sender[t].send(n.event, utag.handler.C(n.data)), utag.loader.sendq.pending--;
                                    else utag.sender[t].send("view", utag.handler.C(utag.data));
                                    utag.rpt["s_" + t] = 0
                                } catch (a) {
                                    utag.DB(a), utag.rpt["s_" + t] = 1
                                }
                            }
                            if (0 == utag.loader.rf) return;
                            for (a in utag.loader.GV(this.f))
                                if (0 == this.f[a] || 2 == this.f[a]) return;
                            utag.loader.END()
                        }
                    } else {
                        for (a in utag.loader.cfg[t].block && utag.loader.cfg[t].cbf && (this.f[t] = 1, delete utag.loader.bq[t]), utag.loader.GV(utag.loader.bq)) return 4 == utag.loader.cfg[t].load && 0 == utag.loader.cfg[t].wait && (utag.loader.bk[t] = 1, utag.DB("blocked: " + t)), void utag.DB("blocking: " + a);
                        utag.loader.INIT()
                    }
            },
            EV: function(t, a, e, n) {
                if ("ready" == a) {
                    if (!utag.data) try {
                        utag.cl = {
                            _all_: 1
                        }, utag.loader.initdata(), utag.loader.RD(utag.data)
                    } catch (t) {
                        utag.DB(t)
                    }
                    var i;
                    if (document.attachEvent || utag.cfg.dom_complete ? "complete" === document.readyState : "loading" !== document.readyState) setTimeout(e, 1);
                    else utag.loader.ready_q.push(e), utag.loader.ready_q.length <= 1 && (document.addEventListener ? (i = function() {
                        document.removeEventListener("DOMContentLoaded", i, !1), utag.loader.run_ready_q()
                    }, utag.cfg.dom_complete || document.addEventListener("DOMContentLoaded", i, !1), window.addEventListener("load", utag.loader.run_ready_q, !1)) : document.attachEvent && (i = function() {
                        "complete" === document.readyState && (document.detachEvent("onreadystatechange", i), utag.loader.run_ready_q())
                    }, document.attachEvent("onreadystatechange", i), window.attachEvent("onload", utag.loader.run_ready_q)))
                } else t.addEventListener ? t.addEventListener(a, e, !1) : t.attachEvent && t.attachEvent((1 == n ? "" : "on") + a, e)
            },
            END: function(t, a, e, n, i, o) {
                if (!this.ended) {
                    if (this.ended = 1, utag.DB("loader.END"), t = utag.data, utag.handler.base && "*" != utag.handler.base)
                        for (n = utag.handler.base.split(","), e = 0; e < n.length; e++) void 0 !== t[n[e]] && (utag.handler.df[n[e]] = t[n[e]]);
                    else "*" == utag.handler.base && utag.ut.merge(utag.handler.df, t, 1);
                    for (var r in utag.rpt.r_0 = "t", utag.loader.GV(utag.cond)) utag.rpt["r_" + r] = utag.cond[r] ? "t" : "f";
                    utag.rpt.ts.s = new Date, (i = utag.cfg.path).indexOf(".tiqcdn.") > 0 && 1 == t["cp.utag_main__ss"] && !utag.cfg.no_session_count && utag.ut.loader({
                        src: i.substring(0, i.indexOf("/utag/") + 6) + "tiqapp/utag.v.js?a=" + utag.cfg.utid + (utag.cfg.nocookie ? "&nocookie=1" : "&cb=" + (new Date).getTime()),
                        id: "tiqapp"
                    }), 1 != utag.cfg.noview && utag.handler.RE("view", t, "end"), utag.handler.INIT()
                }
            }
        },
        DB: function(t, a) {
            if (!1 !== utag.cfg.utagdb && (void 0 === utag.cfg.utagdb && (a = document.cookie + "", utag.cfg.utagdb = a.indexOf("utagdb=true") >= 0), !0 === utag.cfg.utagdb)) {
                var e;
                e = "object" == utag.ut.typeOf(t) ? utag.handler.C(t) : t, utag.db_log.push(e);
                try {
                    utag.cfg.noconsole || console.log(e)
                } catch (t) {}
            }
        },
        RP: function(t, a, e) {
            if (void 0 !== t && void 0 !== t.src && "" != t.src) {
                for (e in a = [], utag.loader.GV(t)) "src" != e && a.push(e + "=" + escape(t[e]));
                this.dbi.push((new Image).src = t.src + "?utv=" + utag.cfg.v + "&utid=" + utag.cfg.utid + "&" + a.join("&"))
            }
        },
        view: function(t, a, e) {
            return this.track({
                event: "view",
                data: t || {},
                cfg: {
                    cb: a,
                    uids: e
                }
            })
        },
        link: function(t, a, e) {
            return this.track({
                event: "link",
                data: t || {},
                cfg: {
                    cb: a,
                    uids: e
                }
            })
        },
        track: function(t, a, e, n, i) {
            for (i in "string" == typeof(t = t || {}) && (t = {
                    event: t,
                    data: a || {},
                    cfg: {
                        cb: e,
                        uids: n
                    }
                }), utag.loader.GV(utag.o)) utag.o[i].handler.trigger(t.event || "view", t.data || t, t.cfg || {
                cb: a,
                uids: e
            });
            return t.cfg = t.cfg || {
                cb: a
            }, "function" == typeof t.cfg.cb && t.cfg.cb(), !0
        },
        handler: {
            base: "",
            df: {},
            o: {},
            send: {},
            iflag: 0,
            INIT: function(t, a, e) {
                if (utag.DB("utag.handler.INIT"), utag.initcatch) utag.initcatch = 0;
                else if (this.iflag = 1, (t = utag.loader.q.length) > 0)
                    for (utag.DB("Loader queue"), a = 0; a < t; a++) e = utag.loader.q[a], utag.handler.trigger(e.a, e.b, e.c)
            },
            test: function() {
                return 1
            },
            LR: function(t) {
                for (var a in utag.DB("Load Rules"), utag.loader.GV(utag.cond)) utag.cond[a] = !1;
                for (var e in utag.DB(t), utag.loader.loadrules(t), utag.DB(utag.cond), utag.loader.initcfg(), utag.loader.OU(), utag.loader.GV(utag.cond)) utag.rpt["r_" + e] = utag.cond[e] ? "t" : "f"
            },
            RE: function(t, a, e, n, i, o, r) {
                if ("alr" != e && !this.cfg_extend) return 0;
                if (utag.DB("RE: " + e), "alr" == e && utag.DB("All Tags EXTENSIONS"), utag.DB(a), void 0 !== this.extend) {
                    for (r = 0, n = 0; n < this.extend.length; n++) try {
                        i = 0, void 0 !== this.cfg_extend && (void 0 === (o = this.cfg_extend[n]).count && (o.count = 0), 0 == o[t] || 1 == o.once && o.count > 0 || 0 == o[e] ? i = 1 : (1 == o[e] && (r = 1), o.count++)), 1 != i && (this.extend[n](t, a), utag.rpt["ex_" + n] = 0)
                    } catch (t) {
                        utag.DB(t), utag.rpt["ex_" + n] = 1, utag.ut.error({
                            e: t.message,
                            s: utag.cfg.path + "utag.js",
                            l: n,
                            t: "ge"
                        })
                    }
                    return utag.DB(a), r
                }
            },
            trigger: function(t, a, e, n, i, o) {
                if (utag.DB("trigger:" + t + (e && e.uids ? ":" + e.uids.join(",") : "")), a = a || {}, utag.DB(a), this.iflag) {
                    if (utag.ut.merge(a, this.df, 0), utag.loader.RD(a, t), utag.cfg.noview = !1, e && e.uids)
                        for (this.RE(t, a, "alr"), o = 0; o < e.uids.length; o++) n = e.uids[o], utag.loader.OU(utag.loader.cfg[n].tid) || r(t, a, n);
                    else if (utag.cfg.load_rules_ajax)
                        for (this.RE(t, a, "blr"), this.LR(a), this.RE(t, a, "alr"), o = 0; o < utag.loader.cfgsort.length; o++) n = utag.loader.cfgsort[o], utag.loader.cfg[n].load && utag.loader.cfg[n].send && r(t, a, n);
                    else
                        for (n in this.RE(t, a, "alr"), utag.loader.GV(utag.sender)) r(t, a, n);
                    this.RE(t, a, "end")
                } else {
                    for (n in utag.DB("trigger:called before tags loaded"), utag.loader.f) 1 !== utag.loader.f[n] && utag.DB("Tag " + n + " did not LOAD");
                    utag.loader.q.push({
                        a: t,
                        b: utag.handler.C(a),
                        c: e
                    })
                }

                function r(t, a, e) {
                    try {
                        void 0 !== utag.sender[e] ? (utag.DB("SENDING: " + e), utag.sender[e].send(t, utag.handler.C(a)), utag.rpt["s_" + e] = 0) : 2 != utag.loader.cfg[e].load && (utag.loader.sendq[e] = utag.loader.sendq[e] || [], utag.loader.sendq[e].push({
                            event: t,
                            data: utag.handler.C(a)
                        }), utag.loader.sendq.pending++, utag.loader.AS({
                            id: e,
                            load: 1
                        }))
                    } catch (t) {
                        utag.DB(t)
                    }
                }
            },
            C: function(t, a, e) {
                for (e in a = {}, utag.loader.GV(t)) t[e] instanceof Array ? a[e] = t[e].slice(0) : a[e] = t[e];
                return a
            }
        },
        ut: {
            pad: function(t, a, e, n) {
                if (n = "", a > (t = "" + (t - 0).toString(16)).length)
                    for (e = 0; e < a - t.length; e++) n += "0";
                return "" + n + t
            },
            vi: function(t, a, e) {
                if (!utag.v_id) {
                    a = this.pad(t, 12), e = "" + Math.random(), a += this.pad(e.substring(2, e.length), 16);
                    try {
                        a += this.pad(navigator.plugins.length ? navigator.plugins.length : 0, 2), a += this.pad(navigator.userAgent.length, 3), a += this.pad(document.URL.length, 4), a += this.pad(navigator.appVersion.length, 3), a += this.pad(screen.width + screen.height + parseInt(screen.colorDepth ? screen.colorDepth : screen.pixelDepth), 5)
                    } catch (t) {
                        utag.DB(t), a += "12345"
                    }
                    utag.v_id = a
                }
                return utag.v_id
            },
            hasOwn: function(t, a) {
                return null != t && Object.prototype.hasOwnProperty.call(t, a)
            },
            isEmptyObject: function(t, a) {
                for (a in t)
                    if (utag.ut.hasOwn(t, a)) return !1;
                return !0
            },
            isEmpty: function(t) {
                var a = utag.ut.typeOf(t);
                return "number" == a ? isNaN(t) : "boolean" != a && ("string" == a ? 0 === t.length : utag.ut.isEmptyObject(t))
            },
            typeOf: function(t) {
                return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            },
            flatten: function(t) {
                var a = {};
                return function t(e, n) {
                    if (Object(e) !== e || e instanceof Array) a[n] = e;
                    else if (utag.ut.isEmptyObject(e));
                    else
                        for (var i in e) t(e[i], n ? n + "." + i : i)
                }(t, ""), a
            },
            merge: function(t, a, e, n) {
                if (e)
                    for (n in utag.loader.GV(a)) t[n] = a[n];
                else
                    for (n in utag.loader.GV(a)) void 0 === t[n] && (t[n] = a[n])
            },
            decode: function(t, a) {
                a = "";
                try {
                    a = decodeURIComponent(t)
                } catch (t) {
                    utag.DB(t)
                }
                return "" == a && (a = unescape(t)), a
            },
            encode: function(t, a) {
                a = "";
                try {
                    a = encodeURIComponent(t)
                } catch (t) {
                    utag.DB(t)
                }
                return "" == a && (a = escape(t)), a
            },
            error: function(t, a, e) {
                "undefined" != typeof utag_err && utag_err.push(t)
            },
            loader: function(t, a, e, n, i, o) {
                for (i in utag.DB(t), a = document, "iframe" == t.type ? ((o = a.getElementById(t.id)) && "IFRAME" == o.tagName && o.parentNode.removeChild(o), e = a.createElement("iframe"), t.attrs = t.attrs || {}, utag.ut.merge(t.attrs, {
                        height: "1",
                        width: "1",
                        style: "display:none"
                    }, 0)) : "img" == t.type ? (utag.DB("Attach img: " + t.src), (e = new Image).referrerPolicy = "origin") : ((e = a.createElement("script")).language = "javascript", e.type = "text/javascript", e.async = 1, e.charset = "utf-8"), t.id && (e.id = t.id), utag.loader.GV(t.attrs)) e.setAttribute(i, t.attrs[i]);
                e.setAttribute("src", t.src), "function" == typeof t.cb && (e.addEventListener ? e.addEventListener("load", function() {
                    t.cb()
                }, !1) : e.onreadystatechange = function() {
                    "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t.cb())
                }), "function" == typeof t.error && utag.loader.EV(e, "error", t.error), "img" != t.type && (i = t.loc || "head", (n = a.getElementsByTagName(i)[0]) && (utag.DB("Attach to " + i + ": " + t.src), "script" == i ? n.parentNode.insertBefore(e, n) : n.appendChild(e)))
            }
        }
    };
    if (utag.o["linkedin.homepage-guest-frontend"] = utag, utag.cfg = {
            template: "ut4.46.",
            load_rules_ajax: !0,
            load_rules_at_wait: !1,
            lowerqp: !1,
            noconsole: !1,
            session_timeout: 18e5,
            readywait: 0,
            noload: 0,
            domain: utag.loader.lh(),
            datasource: "##UTDATASOURCE##".replace("##UTDATASOURCE##", ""),
            path: "//platform.linkedin.com/litms/utag/homepage-guest-frontend/",
            utid: "linkedin/homepage-guest-frontend/201909242238"
        }, utag.cfg.v = utag.cfg.template + "201909242238", utag.cond = {
            20: 0,
            26: 0,
            35: 0,
            41: 0,
            42: 0,
            47: 0,
            48: 0
        }, utag.loader.initdata = function() {
            try {
                utag.data = "undefined" != typeof utag_data ? utag_data : {}, utag.udoname = "utag_data"
            } catch (t) {
                utag.data = {}, utag.DB("idf:" + t)
            }
        }, utag.loader.loadrules = function(t, a) {
            var e = t || utag.data,
                n = a || utag.cond;
            for (var i in utag.loader.GV(n)) switch (i) {
                case "20":
                    try {
                        n[20] |= /^(d|p)_homepage-guest-jobs-home(_jsbeacon)?$/.test(e.pageKey)
                    } catch (t) {
                        utag.DB(t)
                    }
                    break;
                case "26":
                    try {
                        n[26] |= /^(d|p)_homepage-guest-jobs-home(_jsbeacon)?$/.test(e.pageKey)
                    } catch (t) {
                        utag.DB(t)
                    }
                    break;
                case "35":
                    try {
                        n[35] |= "link" == e["ut.event"]
                    } catch (t) {
                        utag.DB(t)
                    }
                    break;
                case "41":
                    try {
                        n[41] |= /^urn:li:control:[dp]_homepage-guest-jobs-home_jsbeacon-guest_homepage-jobseeker_nav-header-signin$/.test(e.controlUrn) || /^urn:li:control:[dp]_homepage-guest-jobs-home_jsbeacon-guest_homepage-jobseeker_nav-header-join$/.test(e.controlUrn) || /^urn:li:control:[dp]_homepage-guest-jobs-home_jsbeacon-homepage-jobseeker_search-jobs-search-btn$/.test(e.controlUrn)
                    } catch (t) {
                        utag.DB(t)
                    }
                    break;
                case "42":
                    try {
                        n[42] |= /^urn:li:control:[dp]_homepage-guest-jobs-home_jsbeacon-homepage-jobseeker_search-jobs-search-btn$/.test(e.controlUrn)
                    } catch (t) {
                        utag.DB(t)
                    }
                    break;
                case "47":
                    try {
                        n[47] |= void 0 !== e.enableDMP && e.enableDMP.toString().toLowerCase() == "true".toLowerCase()
                    } catch (t) {
                        utag.DB(t)
                    }
                    break;
                case "48":
                    try {
                        n[48] |= void 0 !== e["adsTargetingPrivacySettings.allowLinkedInAudienceNetwork"] && e["adsTargetingPrivacySettings.allowAge"].toString().indexOf("true") > -1 && e["adsTargetingPrivacySettings.allowCompaniesFollowed"].toString().indexOf("true") > -1 && e["adsTargetingPrivacySettings.allowConnections"].toString().indexOf("true") > -1 && e["adsTargetingPrivacySettings.allowCurrentCompanyFromProfile"].toString().indexOf("true") > -1 && e["adsTargetingPrivacySettings.allowCurrentJobFromProfile"].toString().indexOf("true") > -1 && e["adsTargetingPrivacySettings.allowDegrees"].toString().indexOf("true") > -1 && e["adsTargetingPrivacySettings.allowEnterpriseProduct"].toString().indexOf("true") > -1 && e["adsTargetingPrivacySettings.allowFieldsOfStudy"].toString().indexOf("true") > -1 && e["adsTargetingPrivacySettings.allowGender"].toString().indexOf("true") > -1 && e["adsTargetingPrivacySettings.allowGraduationYear"].toString().indexOf("true") > -1 && e["adsTargetingPrivacySettings.allowGroupsJoined"].toString().indexOf("true") > -1 && e["adsTargetingPrivacySettings.allowLinkedInAudienceNetwork"].toString().indexOf("true") > -1 && e["adsTargetingPrivacySettings.allowPastCompaniesFromProfile"].toString().indexOf("true") > -1 && e["adsTargetingPrivacySettings.allowPastJobsFromProfile"].toString().indexOf("true") > -1 && e["adsTargetingPrivacySettings.allowSchools"].toString().indexOf("true") > -1 && e["adsTargetingPrivacySettings.allowSkills"].toString().indexOf("true") > -1 && e["adsTargetingPrivacySettings.allowZipcode"].toString().indexOf("true") > -1 && e["adsTargetingPrivacySettings.hasDisallowedInterestsAndCategories"].toString().indexOf("false") > -1 && "control" != e["lix.litms.gdpr.allowTracking"] && e["adsTargetingPrivacySettings.allowPersonalizationWithProfileData"].toString().indexOf("true") > -1 || void 0 === e["cp.BizographicsOptOut"] && void 0 === e["adsTargetingPrivacySettings.allowLinkedInAudienceNetwork"] || void 0 !== e["cp.BizographicsOptOut"] && void 0 === e["adsTargetingPrivacySettings.allowLinkedInAudienceNetwork"] && e["cp.BizographicsOptOut"].toString().toLowerCase() == "false".toLowerCase()
                    } catch (t) {
                        utag.DB(t)
                    }
            }
        }, utag.pre = function() {
            utag.loader.initdata();
            try {
                utag.loader.RD(utag.data)
            } catch (t) {
                utag.DB(t)
            }
            utag.loader.loadrules()
        }, utag.loader.GET = function() {
            utag.cl = {
                _all_: 1
            }, utag.pre(), utag.handler.extend = [function(t, a) {
                try {
                    a.enableDMP = "true"
                } catch (t) {
                    utag.DB(t)
                }
            }], utag.handler.cfg_extend = [{
                blr: 1,
                end: 0,
                bwq: 0,
                id: "16",
                alr: 0
            }], utag.loader.initcfg = function() {
                utag.loader.cfg = {
                    36: {
                        load: utag.cond[20] && utag.cond[48],
                        send: 1,
                        v: 201909231945,
                        wait: 1,
                        tid: 20067
                    },
                    38: {
                        load: utag.cond[26] && utag.cond[48],
                        send: 1,
                        v: 201909231945,
                        wait: 1,
                        tid: 20067
                    },
                    63: {
                        load: utag.cond[20] && utag.cond[48],
                        send: 1,
                        v: 201909231945,
                        wait: 1,
                        tid: 20067
                    },
                    64: {
                        load: utag.cond[41] && utag.cond[35] && utag.cond[48],
                        send: 1,
                        v: 201909231945,
                        wait: 1,
                        tid: 20067
                    },
                    67: {
                        load: utag.cond[42] && utag.cond[48],
                        send: 1,
                        v: 201909231945,
                        wait: 1,
                        tid: 20067
                    },
                    65: {
                        load: utag.cond[41] && utag.cond[35] && utag.cond[48],
                        send: 1,
                        v: 201909231945,
                        wait: 1,
                        tid: 20067
                    },
                    66: {
                        load: utag.cond[20] && utag.cond[48],
                        send: 1,
                        v: 201909231945,
                        wait: 1,
                        tid: 20067
                    },
                    74: {
                        load: utag.cond[42] && utag.cond[48],
                        send: 1,
                        v: 201909231945,
                        wait: 1,
                        tid: 20067
                    },
                    75: {
                        load: utag.cond[42] && utag.cond[48],
                        send: 1,
                        v: 201909231945,
                        wait: 1,
                        tid: 20067
                    },
                    79: {
                        load: 4,
                        send: utag.cond[47] && utag.cond[48],
                        v: 201909231945,
                        wait: 0,
                        tid: 1191,
                        src: "https://platform.linkedin.com/litms/vendor/adobe/visitor-api.js"
                    },
                    80: {
                        load: 4,
                        send: utag.cond[47] && utag.cond[48],
                        v: 201909231945,
                        wait: 0,
                        tid: 1206,
                        src: "https://platform.linkedin.com/litms/vendor/adobe/dil.js"
                    }
                }, utag.loader.cfgsort = ["36", "38", "63", "64", "67", "65", "66", "74", "75", "79", "80"]
            }, utag.loader.initcfg()
        }, "undefined" != typeof utag_cfg_ovrd)
        for (utag._i in utag.loader.GV(utag_cfg_ovrd)) utag.cfg[utag._i] = utag_cfg_ovrd[utag._i];
    utag.loader.PINIT = function(t, a, e) {
        if (utag.DB("Pre-INIT"), !utag.cfg.noload) {
            try {
                this.GET(), utag.handler.RE("view", utag.data, "blr") && utag.handler.LR(utag.data)
            } catch (t) {
                utag.DB(t)
            }
            for (a in t = this.cfg, e = 0, this.GV(t))(1 == t[a].block || t[a].load > 0 && void 0 !== t[a].src && "" != t[a].src) && (t[a].block = 1, e = 1, this.bq[a] = 1);
            if (1 == e)
                for (a in this.GV(t)) t[a].block && (t[a].id = a, 4 == t[a].load && (t[a].load = 1), t[a].cb = function() {
                    var t = this.uid;
                    utag.loader.cfg[t].cbf = 1, utag.loader.LOAD(t)
                }, this.AS(t[a]));
            0 == e && this.INIT()
        }
    }, utag.loader.INIT = function(t, a, e, n, i) {
        if (utag.DB("utag.loader.INIT"), 1 == this.ol) return -1;
        for (this.ol = 1, 1 != utag.cfg.noview && utag.handler.RE("view", utag.data, "alr"), utag.rpt.ts.i = new Date, n = this.cfgsort, t = 0; t < n.length; t++) i = n[t], (a = this.cfg[i]).id = i, 1 != a.block && (utag.loader.bk[a.id] || (utag.cfg.readywait || utag.cfg.noview) && 4 == a.load ? (this.f[a.id] = 0, utag.loader.LOAD(a.id)) : 1 == a.wait && 0 == utag.loader.rf ? (utag.DB("utag.loader.INIT: waiting " + a.id), this.wq.push(a), this.f[a.id] = 2) : a.load > 0 && (utag.DB("utag.loader.INIT: loading " + a.id), this.lq.push(a), this.AS(a)));
        return this.wq.length > 0 ? utag.loader.EV("", "ready", function(t) {
            0 == utag.loader.rf && (utag.DB("READY:utag.loader.wq"), utag.loader.rf = 1, utag.loader.WQ())
        }) : this.lq.length > 0 ? utag.loader.rf = 1 : 0 == this.lq.length && utag.loader.END(), 1
    }, utag.cfg.readywait || utag.cfg.waittimer ? utag.loader.EV("", "ready", function(t) {
        0 == utag.loader.rf && (utag.loader.rf = 1, utag.cfg.readywait = 1, utag.DB("READY:utag.cfg.readywait"), setTimeout(function() {
            utag.loader.PINIT()
        }, utag.cfg.waittimer || 1))
    }) : utag.loader.PINIT()
}
try {
    ! function(t, a) {
        window.utag.tagsettings = window.utag.tagsettings || {}, window.utag.tagsettings.adobe = window.utag.tagsettings.adobe || {};
        var e = window.utag.tagsettings.adobe.visitorAPI = window.utag.tagsettings.adobe.visitorAPI || function() {
                function a(a) {
                    utag.DB("[" + t + "] : " + a)
                }

                function e(t, e) {
                    var n = [],
                        i = {},
                        o = null,
                        r = null,
                        d = new RegExp("AMCV_" + window.encodeURIComponent(t) + "=(.*?)(;|$)"),
                        u = !1,
                        g = {
                            hasOwn: function(t, a) {
                                return null !== t && Object.prototype.hasOwnProperty.call(t, a)
                            }
                        },
                        c = function() {
                            var t, a = [],
                                e = utag.loader.cfg,
                                n = {
                                    1: 1,
                                    4: 1
                                };
                            for (t in e) g.hasOwn(e, t) && 1191 === e[t].tid && n[e[t].load] && a.push(t);
                            return a
                        }();

                    function s(t) {
                        if ((r = t) && r.setCustomerIDs) {
                            var a, e;
                            for (a in i) g.hasOwn(i, a) && (e = i[a]).authState && void 0 !== Visitor.AuthState[e.authState] && (e.authState = Visitor.AuthState[e.authState]);
                            r.setCustomerIDs(i)
                        }
                        for (; 0 !== n.length;) {
                            n.shift()(r)
                        }
                        return !0
                    }
                    this.sync = function(t) {
                        var a;
                        for (a in t) g.hasOwn(t, a) && (i[a] || (i[a] = t[a]));
                        return !0
                    }, this.subscribe = function(i) {
                        return null !== r ? i(r) : (n.push(i), u || (a("demdex org id [" + t + "] sync requested"), function n(i) {
                            return 0 === i ? (a("demdex org id [" + t + "] sync timed out!"), u = !1, s(void 0)) : (u = !0, d.test(document.cookie) && /\|mcmid\|/i.test(window.decodeURIComponent(RegExp.$1)) && function() {
                                for (var t, a = !0, e = 0, n = c.length; e < n; e++)
                                    if (t = c[e], !utag.loader.f[t]) {
                                        a = !1;
                                        break
                                    }
                                return a
                            }() ? (a("demdex org id [" + t + "] sync completed"), s(e ? window.Visitor.getInstance(t, e) : window.Visitor.getInstance(t))) : (window.Visitor && window.Visitor.getInstance && e && !o && (o = window.Visitor.getInstance(t, e)), void window.setTimeout(function() {
                                a("demdex org id [" + t + "] sync, waiting..."), n(--i)
                            }, 25)))
                        }(80)), !0)
                    }
                }
                return new function() {
                    var t = {};
                    this._version = "1.0", this.getInstance = function(n, i, o, r) {
                        if (!n) return i(void 0);
                        if (n = /@AdobeOrg$/.test(n) ? n : n + "@AdobeOrg", !t[n]) {
                            if (!o) return a("demdex org id [" + n + "] sync error. marketing cloud tag missing demdex config"), i(void 0);
                            t[n] = new e(n, o)
                        }
                        return r && t[n].sync(r), t[n].subscribe(i), !0
                    }
                }
            }(),
            n = {
                id: t
            };
        utag.o[a].sender[t] = n, void 0 === utag.ut && (utag.ut = {});
        var i = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
        void 0 === utag.ut.loader || !i || parseInt(i[1]) < 41 ? n.loader = function(t, a, e, n, i, o) {
            for (i in utag.DB(t), a = document, "iframe" == t.type ? (e = (o = a.getElementById(t.id)) && "IFRAME" == o.tagName ? o : a.createElement("iframe"), t.attrs = t.attrs || {}, utag.ut.merge(t.attrs, {
                    height: "1",
                    width: "1",
                    style: "display:none"
                }, 0)) : "img" == t.type ? (utag.DB("Attach img: " + t.src), e = new Image) : ((e = a.createElement("script")).language = "javascript", e.type = "text/javascript", e.async = 1, e.charset = "utf-8"), t.id && (e.id = t.id), utag.loader.GV(t.attrs)) e.setAttribute(i, t.attrs[i]);
            e.setAttribute("src", t.src), "function" == typeof t.cb && (e.addEventListener ? e.addEventListener("load", function() {
                t.cb()
            }, !1) : e.onreadystatechange = function() {
                "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t.cb())
            }), "img" == t.type || o || (i = t.loc || "head", (n = a.getElementsByTagName(i)[0]) && (utag.DB("Attach to " + i + ": " + t.src), "script" == i ? n.parentNode.insertBefore(e, n) : n.appendChild(e)))
        } : n.loader = utag.ut.loader, void 0 === utag.ut.typeOf ? n.typeOf = function(t) {
            return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        } : n.typeOf = utag.ut.typeOf, n.hasOwn = function(t, a) {
            return null != t && Object.prototype.hasOwnProperty.call(t, a)
        }, n.isEmptyObject = function(t, a) {
            for (a in t)
                if (n.hasOwn(t, a)) return !1;
            return !0
        }, n.ev = {
            view: 1
        }, n.initialized = !1, n.map_func = function(t, a, e) {
            var i = t.shift();
            a[i] = a[i] || {}, t.length > 0 ? n.map_func(t, a[i], e) : a[i] = e
        }, n.clearEmptyKeys = function(t) {
            for (var a in t) "" !== t[a] && void 0 !== t[a] || delete t[a];
            return t
        }, n.map = {
            "id.dmp": "customer_ids.lnkdidsync.id",
            "dmp.authState": "customer_ids.lnkdidsync.authState"
        }, n.extend = [function(t, a) {
            try {
                if (void 0 !== a["id.dmp"]) try {
                    a["dmp.authState"] = 1
                } catch (t) {}
            } catch (t) {
                utag.DB(t)
            }
        }], n.send = function(t, a) {
            if (n.ev[t] || void 0 !== n.ev.all) {
                var i, o, r, d;
                for (utag.DB("send:79"), utag.DB(a), n.data = {
                        adobe_org_id: "14215E3D5995C57C0A495C55",
                        config: {
                            useCORSOnly: !0,
                            trackingServer: "",
                            trackingServerSecure: "",
                            marketingCloudServer: "",
                            marketingCloudServerSecure: "",
                            cookieDomain: utag.loader.RC("utag_main").vapi_domain || function() {
                                for (var t = 0, a = document.domain, e = a.split("."), n = "_vapi" + (new Date).getTime(); t < e.length - 1 && -1 === document.cookie.indexOf(n + "=" + n);) a = e.slice(-1 - ++t).join("."), document.cookie = n + "=" + n + ";domain=" + a + ";";
                                return document.cookie = n + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + a + ";", utag.loader.SC("utag_main", {
                                    vapi_domain: a
                                }), a
                            }()
                        },
                        customer_ids: {}
                    }, i = 0; i < n.extend.length; i++) try {
                    if (0 == (o = n.extend[i](t, a))) return
                } catch (r) {}
                for (o in utag.DB("send:79:EXTENSIONS"), utag.DB(a), i = [], utag.loader.GV(n.map))
                    if (void 0 !== a[o] && "" !== a[o])
                        for (r = n.map[o].split(","), d = 0; d < r.length; d++) n.map_func(r[d].split("."), n.data, a[o]);
                if (utag.DB("send:79:MAPPINGS"), utag.DB(n.data), !n.data.adobe_org_id) return void utag.DB(n.id + ": Tag not fired: Required attribute not populated [adobe_org_id]");
                n.initialized || (n.initialized = !0, e.getInstance(n.data.adobe_org_id, function(t) {}, n.clearEmptyKeys(n.data.config), n.data.customer_ids)), utag.DB("send:79:COMPLETE")
            }
        }, utag.o[a].loader.LOAD(t)
    }("79", "linkedin.homepage-guest-frontend")
} catch (t) {
    utag.DB(t)
}
try {
    ! function(t, a) {
        var e = {
            id: "80"
        };
        utag.o[a].sender[80] = e, void 0 === utag.ut && (utag.ut = {});
        var n = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
        void 0 === utag.ut.loader || !n || parseInt(n[1]) < 41 ? e.loader = function(t, a, e, n, i, o) {
            for (i in utag.DB(t), a = document, "iframe" == t.type ? (e = (o = a.getElementById(t.id)) && "IFRAME" == o.tagName ? o : a.createElement("iframe"), t.attrs = t.attrs || {}, utag.ut.merge(t.attrs, {
                    height: "1",
                    width: "1",
                    style: "display:none"
                }, 0)) : "img" == t.type ? (utag.DB("Attach img: " + t.src), e = new Image) : ((e = a.createElement("script")).language = "javascript", e.type = "text/javascript", e.async = 1, e.charset = "utf-8"), t.id && (e.id = t.id), utag.loader.GV(t.attrs)) e.setAttribute(i, t.attrs[i]);
            e.setAttribute("src", t.src), "function" == typeof t.cb && (e.addEventListener ? e.addEventListener("load", function() {
                t.cb()
            }, !1) : e.onreadystatechange = function() {
                "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t.cb())
            }), "img" == t.type || o || (i = t.loc || "head", (n = a.getElementsByTagName(i)[0]) && (utag.DB("Attach to " + i + ": " + t.src), "script" == i ? n.parentNode.insertBefore(e, n) : n.appendChild(e)))
        } : e.loader = utag.ut.loader, void 0 === utag.ut.typeOf ? e.typeOf = function(t) {
            return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        } : e.typeOf = utag.ut.typeOf, e.ev = {
            view: 1
        }, e.initialized = !1, e.scriptrequested = !1, e.queue = [], e.map_func = function(t, a, n) {
            var i = t.shift();
            a[i] = a[i] || {}, t.length > 0 ? e.map_func(t, a[i], n) : a[i] = n
        }, e.clearEmptyKeys = function(t) {
            for (var a in t) "" !== t[a] && void 0 !== t[a] || delete t[a];
            return t
        }, e.isEmptyObject = function(t, a) {
            for (a in t)
                if (utag.ut.hasOwn(t, a)) return !1;
            return !0
        }, e.toBoolean = function(t) {
            return !0 === (t = t || "") || "true" === t.toLowerCase() || "on" === t.toLowerCase()
        }, e.map = {
            _sm_80_1: "uuidCookie.name",
            _sm_80_2: "uuidCookie.days",
            "dom.pathname": "c.page_name",
            pageKey: "c.page_key"
        }, e.extend = [function(t, a) {
            try {
                a._sm_80_1 = "aam_uuid"
            } catch (t) {
                utag.DB(t)
            }
            try {
                a._sm_80_2 = "30"
            } catch (t) {
                utag.DB(t)
            }
        }], e.loader_cb = function(t, a, n) {
            utag.DB("send:80:CALLBACK"), e.initialized = !0, utag.DB("send:80:CALLBACK:COMPLETE")
        }, e.callBack = function() {
            for (var t = {}; t = e.queue.shift();) e.data = t.data, e.loader_cb(t.a, t.b, t.c)
        }, e.send = function(t, a) {
            if (e.ev[t] || void 0 !== e.ev.all) {
                var n, i, o, r, d;
                for (utag.DB("send:80"), utag.DB(a), e.data = {
                        namespace: "14215E3D5995C57C0A495C55",
                        partner: "lnkd",
                        use_ecommerce: "off"
                    }, n = 0; n < e.extend.length; n++) try {
                    if (0 == (i = e.extend[n](t, a))) return
                } catch (o) {}
                for (i in utag.DB("send:80:EXTENSIONS"), utag.DB(a), n = [], utag.loader.GV(e.map))
                    if (void 0 !== a[i] && "" !== a[i])
                        for (o = e.map[i].split(","), r = 0; r < o.length; r++) e.map_func(o[r].split("."), e.data, a[i]);
                if (utag.DB("send:80:MAPPINGS"), utag.DB(e.data), e.toBoolean(e.data.use_ecommerce) && (e.data.c.order_id = e.data.order_id || a._corder || "", e.data.c.order_total = e.data.order_total || a._ctotal || "", e.data.c.order_subtotal = e.data.order_subtotal || a._csubtotal || "", e.data.c.order_shipping = e.data.order_shipping || a._cship || "", e.data.c.order_tax = e.data.order_tax || a._ctax || "", e.data.c.order_store = e.data.order_store || a._cstore || "", e.data.c.order_currency = e.data.order_currency || a._ccurrency || "", e.data.c.order_coupon_code = e.data.order_coupon_code || a._cpromo || "", e.data.c.order_type = e.data.order_type || a._ctype || ""), !e.data.partner) return void utag.DB(e.id + ": Tag not fired: Required attribute not populated");
                var u = e.clearEmptyKeys({
                    partner: e.data.partner,
                    visitorService: {
                        namespace: e.data.namespace
                    },
                    containerNSID: e.data.containerNSID || "",
                    delayAllUntilWindowLoad: e.toBoolean(e.data.delayAllUntilWindowLoad) || "",
                    disableDeclaredUUIDCookie: e.toBoolean(e.data.disableDeclaredUUIDCookie) || "",
                    disableDestinationPublishingIframe: e.toBoolean(e.data.disableDestinationPublishingIframe) || "",
                    disableIDSyncs: e.toBoolean(e.data.disableIDSyncs) || "",
                    enableErrorReporting: e.toBoolean(e.data.enableErrorReporting) || "",
                    iframeAkamaiHTTPS: e.toBoolean(e.data.iframeAkamaiHTTPS) || "",
                    removeFinishedScriptsAndCallbacks: e.toBoolean(e.data.removeFinishedScriptsAndCallbacks) || "",
                    mappings: e.data.mappings || ""
                });
                for (d in u.declaredId = e.clearEmptyKeys({
                        dpid: e.data.dpid || "",
                        dpuuid: e.data.dpuuid || ""
                    }), u.uuidCookie = e.clearEmptyKeys({
                        name: e.data.uuidCookie.name || "",
                        days: e.data.uuidCookie.days || "",
                        path: e.data.path || "",
                        domain: e.data.domain || "",
                        secure: e.toBoolean(e.data.secure) || "",
                        useCORSOnly: !0
                    }), (tealiumDil = DIL.create(u)).api.signals(e.data.c, "c_"), e.isEmptyObject(e.data.d) || tealiumDil.api.signals(e.data.d, "d_"), e.isEmptyObject(e.data.p) || tealiumDil.api.signals(e.data.p, "p_"), e.isEmptyObject(e.data.h) || tealiumDil.api.signals(e.data.h, "h_"), e.data.cobject) tealiumDil.api.signals(e.data.cobject[d], "c_");
                tealiumDil.api.submit(), utag.DB("send:80:COMPLETE")
            }
        }, utag.o[a].loader.LOAD("80")
    }(0, "linkedin.homepage-guest-frontend")
} catch (t) {
    utag.DB(t)
}! function() {
    if (void 0 !== utag) {
        for (var t in utag.initcatch = !0, utag.loader.GV(utag.loader.cfg)) {
            var a = utag.loader.cfg[t];
            if (4 != a.load) {
                utag.initcatch = !1;
                break
            }
            if (1 == a.wait) {
                utag.initcatch = !1;
                break
            }
        }
        utag.initcatch && utag.handler.INIT()
    }
}();