 ! function() {
     function e(t, n, r) {
         function a(o, s) {
             if (!n[o]) {
                 if (!t[o]) {
                     var c = "function" == typeof require && require;
                     if (!s && c) return c(o, !0);
                     if (i) return i(o, !0);
                     var u = new Error("Cannot find module '" + o + "'");
                     throw u.code = "MODULE_NOT_FOUND", u
                 }
                 var f = n[o] = {
                     exports: {}
                 };
                 t[o][0].call(f.exports, function(e) {
                     return a(t[o][1][e] || e)
                 }, f, f.exports, e, t, n, r)
             }
             return n[o].exports
         }
         for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) a(r[o]);
         return a
     }
     return e
 }()({
     1: [function(e, t, n) {
         var r = e("./util"),
             a = e("./common/sendBeacon"),
             i = function(e) {
                 return this.ver = "1.7.7", this._conf = r.ext({}, i.dftCon), this.$a5 = {}, this.$a1 = [], this.hash = r.seq(), this.$a6(), this.setConfig(e), this.rip = r.getRandIP(), this.record = 999, this["EagleEye-TraceID"] = this.getTraceId()["EagleEye-TraceID"], this._common = {}, this
             };
         i.dftCon = {
             sample: 1,
             pvSample: 1,
             tag: "",
             imgUrl: "https://arms-retcode.aliyuncs.com/r.png?",
             region: null,
             ignore: {
                 ignoreUrls: [],
                 ignoreApis: [],
                 ignoreErrors: []
             },
             release: undefined,
             environment: "production"
         }, i.prototype = {
             constructor: i,
             $a2: function(e) {
                 return e()
             },
             $a7: function() {
                 var e = this._conf.page;
                 return r.$a8(e, [], e + "")
             },
             setPage: function() {},
             setConfig: function(e) {
                 e && "object" == typeof e && (r.$a9(e), e = this.$aa(e), this._conf = r.ext({}, this._conf, e))
             },
             $aa: function(e) {
                 var t = e.region,
                     n = e.imgUrl;
                 if (t) {
                     var a = r.regionMap[t];
                     return e.imgUrl = a || r.defaultImgUrl, e
                 }
                 return n && (e.imgUrl = n), e
             },
             $ab: function(e) {
                 if (this.getConfig("debug")) return !0;
                 var t = r.regionMap,
                     n = !1;
                 for (var a in t)
                     if (t[a] === e) {
                         n = !0;
                         break
                     }
                 return !n && r.warn("[retcode] invalid url: " + e), n
             },
             $ac: function() {},
             $ad: function(e) {
                 a(e, this.getConfig("imgUrl"))
             },
             $ae: function() {},
             $af: function() {
                 return {}
             },
             setCommonInfo: function(e) {
                 e && "object" == typeof e && (this._common = r.ext({}, this._common, e))
             },
             $a6: function() {
                 this.session = r.uu(), this.sBegin = Date.now()
             },
             getTraceId: function() {
                 var e = this.rip,
                     t = Date.now(),
                     n = r.getSortNum(this.record),
                     a = e + t + n + r.getRandNum(this._conf.pid);
                 return this["EagleEye-TraceID"] = a, this.record = n, {
                     "EagleEye-TraceID": a
                 }
             },
             getSessionId: function() {
                 return {
                     "EagleEye-SessionID": this.session
                 }
             },
             getConfig: function(e) {
                 return e ? this._conf[e] : r.ext({}, this._conf)
             },
             $ag: function(e) {
                 return 1 === e || ("boolean" == typeof this.$a5[e] ? this.$a5[e] : (this.$a5[e] = r.pick(e), this.$a5[e]))
             },
             $a4: function() {
                 var e;
                 clearTimeout(this.$a3), this.$a3 = null;
                 for (var t = this._conf && "function" == typeof this._conf.sendRequest; e = this.$a1.pop();) "res" === e.t ? this.$ae(e, "res") : "error" === e.t ? this.$ae(e, "err") : "behavior" === e.t ? this.$ae(e, "behavior") : "health" === e.t && !t && window && window.navigator && "function" == typeof window.navigator.sendBeacon ? this.$ad(e) : this.$ac(e);
                 return this
             },
             _lg: function(e, t, n) {
                 var a = this._conf,
                     i = this.$a7(),
                     o = a.ignore || {},
                     s = o.ignoreErrors,
                     c = o.ignoreUrls,
                     u = o.ignoreApis;
                 return r.$ah(i, c) || r.$ah(r.decode(i), c) ? this : "error" === e && (r.$ah(t.msg, s) || r.$ah(r.decode(t.msg), s)) ? this : "api" === e && (r.$ah(t.api, u) || r.$ah(r.decode(t.api), u)) ? this : this.$ab(a.imgUrl) && t && !a.disabled && a.pid ? n && !this.$ag(n) ? this : (t = r.ext({
                     t: e,
                     times: 1,
                     page: i,
                     tag: a.tag || "",
                     release: a.release || "",
                     environment: a.environment,
                     begin: Date.now()
                 }, t, this.$af(), this._common, {
                     pid: a.pid,
                     _v: this.ver,
                     sid: this.session,
                     sampling: n || 1,
                     z: r.seq(),
                     c1: a.c1,
                     c2: a.c2,
                     c3: a.c3
                 }), function(e, t) {
                     var n; {
                         if ("error" !== t.t || !(n = e.$a1[0]) || "error" !== n.t || t.msg !== n.msg) {
                             if ("behavior" === t.t) {
                                 var a = e.$a1 && e.$a1.length;
                                 if (a > 0 && "behavior" === e.$a1[a - 1].t) {
                                     var i = t.behavior || [];
                                     e.$a1[a - 1].behavior.concat(i)
                                 } else e.$a1.push(t)
                             } else e.$a1.unshift(t);
                             return e.$a2(function() {
                                 e.$a3 = r.delay(function() {
                                     e.$a4()
                                 }, e.$a1[0] && "error" === e.$a1[0].t ? 3e3 : -1)
                             }), !0
                         }
                         n.times++
                     }
                 }(this, t)) : this
             },
             custom: function(e, t) {
                 if (!e || "object" != typeof e) return this;
                 var n = !1,
                     a = {
                         begin: Date.now()
                     };
                 return r.each(e, function(e, t) {
                     return !(n = t && t.length <= 20) && r.warn("[retcode] invalid key: " + t), a["x-" + t] = e, n
                 }), n ? this._lg("custom", a, t || 1) : this
             }
         }, t.exports = i
     }, {
         "./common/sendBeacon": 12,
         "./util": 16
     }],
     2: [function(e, t, n) {
         var r = e("../util");
         t.exports = function(e, t) {
             var n = [],
                 a = null,
                 i = t && t.location && t.location.href,
                 o = 0,
                 s = undefined,
                 c = null,
                 u = function(e, t, n) {
                     if (null !== e) {
                         var r = e[t];
                         e[t] = n(r)
                     }
                 },
                 f = function(e) {
                     var t, n, r, a, i, o = [];
                     if (!e || !e.tagName) return "";
                     if (o.push(e.tagName.toLowerCase()), e.id && "[object String]" === Object.prototype.toString.call(e.id) && o.push("#".concat(e.id)), (t = e.className) && "[object String]" === Object.prototype.toString.call(t))
                         for (n = t.split(/\s+/), i = 0; i < n.length; i++) o.push(".".concat(n[i]));
                     var s = ["type", "name", "title", "alt"];
                     for (i = 0; i < s.length; i++) r = s[i], (a = e.getAttribute(r)) && "[object String]" === Object.prototype.toString.call(a) && o.push("[".concat(r, '="').concat(a, '"]'));
                     return o.join("")
                 },
                 l = function(e, t) {
                     return function(n) {
                         if (n && n !== c) {
                             c = n;
                             var r;
                             try {
                                 r = n.target
                             } catch (u) {
                                 r = "<unknown>"
                             }
                             if (0 !== r.length) {
                                 var i = {
                                     type: "ui.".concat(e),
                                     data: {
                                         message: function(e) {
                                             if (!e || 1 !== e.nodeType) return "";
                                             for (var t = e || null, n = [], r = 0, a = 0, i = " > ".length, o = ""; t && r++ < 5 && !("html" === (o = f(t)) || r > 1 && a + n.length * i + o.length >= 80);) n.push(o), a += o.length, t = t.parentNode;
                                             return n.reverse().join(" > ")
                                         }(r)
                                     },
                                     timestamp: Date.now()
                                 };
                                 "click" === e ? (o && clearTimeout(o), t ? o = setTimeout(function() {
                                     a && a.addBehavior(i)
                                 }, 0) : a && a.addBehavior(i)) : "keypress" === e && (s || a && a.addBehavior(i), clearTimeout(s), s = setTimeout(function() {
                                     s = undefined
                                 }, 100))
                             }
                         }
                     }
                 },
                 h = function() {
                     if (function() {
                             var e = t && t.chrome,
                                 n = e && e.app && e.app.runtime,
                                 r = "history" in t && !!t.history.pushState && !!t.history.replaceState;
                             return !n && r
                         }()) {
                         var e = function(e, t) {
                                 var n = {
                                     type: "navigation",
                                     data: {
                                         from: e,
                                         to: t
                                     }
                                 };
                                 a && a.addBehavior(n), i = t
                             },
                             n = t.onpopstate;
                         t.onpopstate = function() {
                             for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                             var s = t.location.href;
                             if (e(i, s), n) return n.apply(this, a)
                         };
                         var r = function(t) {
                             return function() {
                                 for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                                 var o = r.length > 2 ? r[2] : undefined;
                                 return o && e(i, String(o)), t.apply(this, r)
                             }
                         };
                         u(t.history, "pushState", r), u(t.history, "replaceState", r)
                     }
                 };
             r.ext(e.prototype, {
                 addBehavior: function(e, a) {
                     if (this.getConfig("behavior") && e) {
                         var i = a && a > 0 ? min(a, 100) : 100;
                         return (e = r.ext({}, {
                             type: "default",
                             data: {},
                             timestamp: Date.now(),
                             page: t && t.location && t.location.pathname
                         }, e)).data.message && (e.data.message = r.encode(e.data.message)), n.push(e), n = n.slice(-i)
                     }
                 },
                 getBehavior: function() {
                     return n || []
                 },
                 setBehavior: function(e) {
                     return e && (n = e), n
                 },
                 reportBehavior: function(e) {
                     var t = this;
                     t.getConfig("behavior") && (t.$ai && (clearTimeout(t.$ai), t.$ai = undefined), t.$ai = setTimeout(function() {
                         n && n.length > 0 && (t.behavior(n), n = [], t.$ai = undefined, e && "function" == typeof e && e())
                     }, 0))
                 },
                 $aj: function() {
                     if (!this.hasInitBehavior && !a) {
                         try {
                             ! function() {
                                 if (document && document.referrer && document.location) {
                                     var e = document.referrer,
                                         t = document.location.href;
                                     if ("" !== e) {
                                         var n = {
                                             type: "navigation",
                                             data: {
                                                 from: e,
                                                 to: t
                                             }
                                         };
                                         i = t, a && a.addBehavior(n)
                                     }
                                 }
                             }(),
                             function() {
                                 if (t && t.console)
                                     for (var e = ["debug", "info", "warn", "log", "error", "assert"], n = 0; n < e.length; n++) {
                                         var r = e[n];
                                         t.console[r] && "function" == typeof t.console[r] && u(t.console, r, function(e) {
                                             var n = r;
                                             return function() {
                                                 for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                                                 var s = {
                                                     type: "console",
                                                     data: {
                                                         level: n,
                                                         message: i
                                                     }
                                                 };
                                                 if (a && a.addBehavior(s), "error" === n)
                                                     for (var c = 0; c < i.length; c++) {
                                                         var u = i[c];
                                                         u && u.message && u.stack && a && a.errorHandler(new ErrorEvent("error", {
                                                             error: u,
                                                             message: u.message
                                                         }))
                                                     }
                                                 e && Function.prototype.apply.call(e, t.console, i)
                                             }
                                         })
                                     }
                             }(), t && t.document && t.document.addEventListener && (t.document.addEventListener("click", l("click"), !1), t.document.addEventListener("keypress", l("keypress"), !1)), h()
                         } catch (e) {
                             r.warn("[arms] error in initBehavior", e)
                         }
                         a = this, this.hasInitBehavior = !0
                     }
                     return this
                 }
             })
         }
     }, {
         "../util": 16
     }],
     3: [function(e, t, n) {
         var r = e("../util"),
             a = e("../reporter"),
             i = e("../common/sender"),
             o = e("../common/post"),
             s = r.win,
             c = s.document,
             u = /^(error|api|speed|sum|avg|percent|custom|msg|setPage|setConfig|behavior|performance)$/,
             f = function(e) {
                 var t = this;
                 return a.call(t, e), t._initialPage = e.page && r.$a8(e.page, [], e.page + "") || null, t._health = {
                     errcount: 0,
                     apisucc: 0,
                     apifail: 0
                 }, t.$ak = function(e, n) {
                     "error" === e ? t._health.errcount++ : "api" === e && t._health[n.success ? "apisucc" : "apifail"]++
                 }, !1 !== e.enableInstanceAutoSend && (t.$al(), t.$am(), t.$an(1e4), t._conf && t._conf.behavior && "function" == typeof t.$aj && t.$aj()), Object.defineProperty && s.addEventListener && Object.defineProperty(t, "pipe", {
                     set: t.$ao
                 }), t
             };
         f.prototype = r.$ap(a.prototype), r.ext(a._root.dftCon, {
             uid: null,
             ignoreUrlPath: null,
             ignoreApiPath: null,
             urlHelper: [{
                 rule: /\/([a-z\-_]+)?\d{2,20}/g,
                 target: "/$1**"
             }, /\/$/],
             apiHelper: {
                 rule: /(\w+)\/\d{2,}/g,
                 target: "$1"
             },
             ignoreUrlCase: !0,
             imgUrl: "https://arms-retcode.aliyuncs.com/r.png?",
             disableHook: !1,
             autoSendPv: !0,
             enableSPA: !1,
             enableLinkTrace: !1,
             sendResource: !0,
             behavior: !0,
             parseHash: function(e) {
                 return (e ? r.$ar(e.replace(/^#\/?/, "")) : "") || "[index]"
             },
             parseResponse: function(e) {
                 if (!e || "object" != typeof e) return {};
                 var t = e.code,
                     n = e.msg || e.message || e.subMsg || e.errorMsg || e.ret || e.errorResponse || "";
                 return "object" == typeof n && (t = t || n.code, n = n.msg || n.message || n.info || n.ret || JSON.stringify(n)), {
                     msg: n,
                     code: t,
                     success: !0
                 }
             }
         }), r.ext(f.prototype, {
             constructor: f,
             _super: a,
             $a2: function(e) {
                 var t = this;
                 if (t.hasReady) return e();
                 "complete" === c.readyState ? (t.hasReady = !0, e()) : r.on(s, "load", function() {
                     t.hasReady = !0, e()
                 }, !0)
             },
             $a7: function(e) {
                 var t = this._conf,
                     n = t.page,
                     a = location,
                     i = a.host + a.pathname;
                 return n && !e ? r.$a8(n, [], n + "") : this._initialPage || r.$aq(t.ignoreUrlCase ? i.toLowerCase() : i, t.ignoreUrlPath ? t.ignoreUrlPath : t.urlHelper)
             },
             setPage: function(e, t) {
                 var n = this,
                     r = n.$as;
                 if (!1 !== t) {
                     if (!e || e === r) return n;
                     n.$as = e, clearTimeout(n.$at), n.$au(1), n.$a6(), n.$at = setTimeout(function() {
                         n.$av()
                     }, 10)
                 } else n.$as = e;
                 return n._conf.page = e, n
             },
             setConfig: function(e, t) {
                 if (e && "object" == typeof e) {
                     r.$a9(e), e = this.$aa(e);
                     var n = this._conf;
                     if (this._conf = r.ext({}, n, e), !t) {
                         var a = "disableHook";
                         a in e && n[a] !== e[a] && (e[a] ? this.removeHook() : this.addHook()), (a = "enableSPA") in e && n[a] !== e[a] && this.$aw(e[a])
                     }
                 }
             },
             $ac: function(e) {
                 i(e, this.getConfig("imgUrl"))
             },
             $ae: function(e, t) {
                 var n = {};
                 n[t] = e[t], delete e[t];
                 var a = "";
                 "object" == typeof e && (a = r.serialize(e)), o(n, this.getConfig("imgUrl") + a + "&post_res=")
             },
             $ao: function(e) {
                 var t = this;
                 if (!e || !e.length) return t;
                 try {
                     if ("Array" === r.T(e[0])) return r.each(e, function(e) {
                         return t.$ao(e)
                     });
                     if ("Array" !== r.T(e)) return t;
                     var n = e.shift();
                     if (!u.test(n)) return t;
                     t[n].apply(t, e)
                 } catch (a) {
                     return r.warn("[retcode] error in sendPipe", a), t
                 }
             },
             $ax: function() {
                 var e = r.ext({}, this._health);
                 e.healthy = e.errcount > 0 ? 0 : 1, e.begin = Date.now();
                 var t = e.begin - this.sBegin;
                 e.stay = t, this._lg("health", e, 1), this._health = {
                     errcount: 0,
                     apisucc: 0,
                     apifail: 0
                 }
             },
             createInstance: function(e) {
                 e = r.ext({
                     pid: this._conf.pid
                 }, e);
                 var t = this.__proto__.constructor(e);
                 return e.page && t.$av(), t
             }
         }), e("./behavior")(f, s), e("./handler")(f, s, c), e("./fmp")(f, s, c), e("./hook")(f, s), e("./hack")(f, s), f._super = a, f._root = a._root, a.Browser = f, t.exports = f
     }, {
         "../common/post": 10,
         "../common/sender": 13,
         "../reporter": 15,
         "../util": 16,
         "./behavior": 2,
         "./fmp": 4,
         "./hack": 5,
         "./handler": 6,
         "./hook": 7
     }],
     4: [function(e, t, n) {
         var r = e("../util"),
             a = 500;
         t.exports = function(e, t, n) {
             function i(e, t, n) {
                 var r = 0,
                     a = e.tagName;
                 if ("SCRIPT" !== a && "STYLE" !== a && "META" !== a && "HEAD" !== a) {
                     var o = e.children ? e.children.length : 0;
                     if (o > 0)
                         for (var c = e.children, u = o - 1; u >= 0; u--) r += i(c[u], t + 1, r > 0);
                     if (r <= 0 && !n) {
                         if (!(e.getBoundingClientRect && e.getBoundingClientRect().top < s)) return 0
                     }
                     r += 1 + .5 * t
                 }
                 return r
             }

             function o(e) {
                 for (var t = 1; t < e.length; t++)
                     if (e[t].score < e[t - 1].score) return e.splice(t, 1), o(e);
                 return e
             }
             var s = t.innerHeight || 0,
                 c = [],
                 u = null,
                 f = 0;
             r.ext(e.prototype, {
                 $an: function(e) {
                     var a = this;
                     if (!a._conf || !a._conf.useFmp) return null;
                     if (!t.MutationObserver) return r.warn("[retcode] first meaningful paint can not be retrieved"), a.$ay(), null;
                     r.on(t, "beforeunload", function() {
                         a.$az(0, !0)
                     });
                     var o = t.MutationObserver;
                     return (u = new o(function() {
                         ! function(e) {
                             var t = Date.now() - e,
                                 r = n.querySelector("body");
                             if (r) {
                                 var a = 0;
                                 a += i(r, 1, !1), c.push({
                                     score: a,
                                     t: t
                                 })
                             } else c.push({
                                 score: 0,
                                 t: t
                             })
                         }(a._startTime)
                     })).observe(document, {
                         childList: !0,
                         subtree: !0
                     }), f = 1, a.$a2(function() {
                         a.$az(e)
                     }), u
                 },
                 $az: function(e, t) {
                     var n = this;
                     if (u && f)
                         if (t || ! function(e, t) {
                                 var n = Date.now() - e;
                                 return !(n > t || n - (c && c.length && c[c.length - 1].t || 0) > 2 * a)
                             }(n._startTime, e)) {
                             u.disconnect(), f = 0, c = o(c);
                             for (var i = null, s = 1; s < c.length; s++)
                                 if (c[s].t >= c[s - 1].t) {
                                     var l = c[s].score - c[s - 1].score;
                                     (!i || i.rate <= l) && (i = {
                                         t: c[s].t,
                                         rate: l
                                     })
                                 }
                             i && i.t > 0 && i.t < 36e5 ? n.$ay({
                                 fmp: i.t
                             }) : n.$ay()
                         } else r.delay(function() {
                             n.$az(e)
                         }, a)
                 }
             })
         }
     }, {
         "../util": 16
     }],
     5: [function(e, t, n) {
         t.exports = function(t, n) {
             var r = e("../util"),
                 a = n.history || {},
                 i = n.document,
                 o = function(e, t) {
                     var r;
                     n.CustomEvent ? r = new CustomEvent(e, {
                         detail: t
                     }) : ((r = i.createEvent("HTMLEvents")).initEvent(e, !1, !0), r.detail = t), n.dispatchEvent(r)
                 },
                 s = function(e) {
                     var t = a[e];
                     "function" == typeof t && (a[e] = function(n, i, s) {
                         var c = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments),
                             u = location.href,
                             f = t.apply(a, c);
                         if (!s || "string" != typeof s) return f;
                         if (s === u) return f;
                         try {
                             var l = u.split("#"),
                                 h = s.split("#"),
                                 p = r.$ar(l[0]),
                                 g = r.$ar(h[0]),
                                 d = l[1] && l[1].replace(/^\/?(.*)/, "$1"),
                                 v = h[1] && h[1].replace(/^\/?(.*)/, "$1");
                             p !== g ? o("historystatechange", g) : d !== v && o("historystatechange", v)
                         } catch (m) {
                             r.warn("[retcode] error in " + e + ": " + m)
                         }
                         return f
                     }, a[e].toString = r.$b0(e))
                 };
             r.ext(t.prototype, {
                 $b1: function() {
                     return this.$b2 ? this : (s("pushState"), s("replaceState"), this.$b2 = !0, this)
                 }
             })
         }
     }, {
         "../util": 16
     }],
     6: [function(e, t, n) {
         t.exports = function(t, n, r) {
             var a = e("../util"),
                 i = e("../common/perf"),
                 o = e("../common/res"),
                 s = null,
                 c = r.documentElement,
                 u = n.innerWidth || c.clientWidth || r.body.clientWidth,
                 f = n.innerHeight || c.clientHeight || r.body.clientHeight,
                 l = n.navigator.connection,
                 h = {
                     sr: screen.width + "x" + screen.height,
                     vp: u + "x" + f,
                     ct: l ? l.effectiveType || l.type : ""
                 },
                 p = {},
                 g = function(e, t, n, i, o) {
                     if (t === undefined) {
                         var s, c;
                         if (!p[e]) {
                             s = new RegExp(e + "=([^;]+)");
                             try {
                                 c = s.exec(r.cookie)
                             } catch (f) {
                                 return a.warn("[retcode] can not get cookie:", f), null
                             }
                             c && (p[e] = c[1])
                         }
                         return p[e]
                     }
                     var u = e + "=" + t;
                     i && (u += "; domain=" + i), u += "; path=" + (o || "/"), n && (u += "; max-age=" + n);
                     try {
                         return r.cookie = u, !!r.cookie
                     } catch (f) {
                         return a.warn("[retcode] can not set cookie: ", f), !1
                     }
                 },
                 d = function(e) {
                     var t = e._conf.uid || g("_nk_") || g("_bl_uid");
                     if (!t) {
                         t = a.uu();
                         if (!g("_bl_uid", t, 15552e3)) return null
                     }
                     return t
                 };
             return a.ext(t.prototype, {
                 activeErrHandler: function(e) {
                     return s && !e ? this : (s = this, this)
                 },
                 errorHandler: function(e) {
                     if (!e) return this;
                     var t = e.type;
                     if ("error" === t) {
                         var n = e.target || e.srcElement;
                         !(!n || !n.tagName || e.message || e.filename || e.lineno || e.colno) ? this.$b3(e): this.error(e.error || {
                             message: e.message
                         }, e)
                     } else "unhandledrejection" === t && a.T(e.reason, "Error") && a.$b4(e.reason) && this.error(e.reason);
                     try {
                         this.getConfig("behavior") && this.reportBehavior && this.reportBehavior()
                     } catch (e) {}
                     return this
                 },
                 $b3: function(e) {
                     var t = this,
                         n = e.target || e.srcElement;
                     try {
                         var r = t.$b5(n),
                             i = n.tagName ? n.tagName.toLowerCase() : "",
                             o = t.$b6(n, 5);
                         return t._lg("resourceError", {
                             src: r && r.substring(0, 1e3),
                             node_name: i,
                             xpath: o
                         }), t
                     } catch (s) {
                         return a.warn("[ARMS] $b3 error :", s), t
                     }
                 },
                 $b5: function(e) {
                     var t = e.src || e.href;
                     try {
                         if (!t) {
                             var n = "object" === (e.tagName ? e.tagName.toLowerCase() : ""),
                                 r = e.getAttribute("classid") && "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" === e.getAttribute("classid").toLowerCase() || "application/x-shockwave-flash" === e.getAttribute("type");
                             n && r && (t = e.getAttribute("data") || e.getAttribute("codebase")), t || (t = e.outerHTML || e.innerHTML)
                         }
                     } catch (a) {
                         t = ""
                     }
                     return t
                 },
                 $b6: function(e, t) {
                     var n = e.id ? "#" + e.id : "",
                         r = e.className ? "." + e.className.split(" ").join(".") : "",
                         a = (e.tagName ? e.tagName.toLowerCase() : "") + n + r;
                     return e.parentNode && e.parentNode.tagName && t - 1 != 0 ? this.$b6(e.parentNode, t - 1) + " > " + a : a
                 },
                 $ay: function(e) {
                     var t = this;
                     t.$a2(function() {
                         var n = i();
                         n && (n.page = t.$a7(!0), e && (n = a.ext(n, e)), t.$b7 && (n = a.ext(n, t.$b7)), t._lg("perf", n, t.getConfig("sample")))
                     })
                 },
                 $b8: function(e) {
                     var t = this;
                     t.$a2(function() {
                         var n = o();
                         n && (n.load && n.load <= 2e3 || n.load && n.load <= 8e3 && Math.random() > .05 || (n.page = t.$a7(!0), n.dl = location.href, e && (n = a.ext(n, e)), t._lg("res", n, t.getConfig("sample"))))
                     })
                 },
                 $av: function() {
                     var e = this;
                     e.$a2(function() {
                         var t = function(e) {
                             var t = d(e),
                                 a = n.devicePixelRatio || 1;
                             return {
                                 uid: t,
                                 dt: r.title,
                                 dl: location.href,
                                 dr: r.referrer,
                                 dpr: a.toFixed(2),
                                 de: (r.characterSet || r.defaultCharset || "").toLowerCase(),
                                 ul: c.lang,
                                 begin: Date.now()
                             }
                         }(e);
                         t && t.uid && e._lg("pv", t, e.getConfig("pvSample"))
                     })
                 },
                 $af: function() {
                     return h.uid = d(this), h
                 },
                 $au: function(e) {
                     var t = Date.now();
                     if (t - this._lastUnload < 200) return this;
                     this._lastUnload = t, this.$ax(e), this.$b9 && (this._lg("speed", this.$b9), this.$b9 = null, clearTimeout(this.$ba)), this.$a4()
                 },
                 $aw: function(e) {
                     var t = this;
                     if (!e ^ t.$bb) return t;
                     e ? (t.$b1(), t.$bb = function(e) {
                         var n = t._conf.parseHash(location.hash);
                         n && t.setPage(n, !1 !== e)
                     }, t.$bc = function(e) {
                         var n = t._conf.parseHash(e.detail);
                         n && t.setPage(n)
                     }, a.on(n, "hashchange", t.$bb), a.on(n, "historystatechange", t.$bc), t.$bb(!1)) : (a.off(n, "hashchange", t.$bb), a.off(n, "historystatechange", t.$bc), t.$bb = null, t.$bc = null)
                 },
                 $al: function() {
                     var e = this;
                     if (e.$bd) return e;
                     var t = e._conf;
                     return a.on(n, "beforeunload", function() {
                         e.$au(0)
                     }), e.$aw(t.enableSPA), e.activeErrHandler(!1), e.$bd = !0, e
                 }
             }), a.on(n, "error", function(e) {
                 s && s.errorHandler(e)
             }, !1, !0).on(n, "unhandledrejection", function(e) {
                 s && s.errorHandler(e)
             }), t
         }
     }, {
         "../common/perf": 9,
         "../common/res": 11,
         "../util": 16
     }],
     7: [function(e, t, n) {
         t.exports = function(t, n) {
             var r = e("../util"),
                 a = null,
                 i = function(e, t, n, a, i, o, s, c, u, f) {
                     var l = r.J(i) || null,
                         h = r.$a8(t, [l, a], null);
                     if (!h) return !1;
                     var p = h.code || o,
                         g = !("success" in h) || h.success;
                     e.api(n, g, s, p, h.msg, c, u, f)
                 },
                 o = "fetch",
                 s = "__oFetch_",
                 c = "__oXMLHttpRequest_",
                 u = "XMLHttpRequest";
             return r.ext(t.prototype, {
                 removeHook: function(e, t) {
                     return a && (t || this === a) ? (n[s] && (n[o] = n[s], delete n[s]), n[c] && (n[u] = n[c], delete n[c]), a = null, this) : this
                 },
                 addHook: function(e) {
                     return !e && a ? this : (a || (function() {
                         if ("function" == typeof n[o]) {
                             var e = n[o];
                             n[s] = e, n[o] = function(t, o) {
                                 var s = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments),
                                     c = a;
                                 if (!c || !c.api) return e.apply(n, s);
                                 if (o && ("HEAD" === o.method || "no-cors" === o.mode)) return e.apply(n, s);
                                 var u = Date.now(),
                                     f = c._conf,
                                     l = (t && "string" != typeof t ? t.url : t) || "",
                                     h = l;
                                 if (l = r.$ar(l), !r.$be(l, !0)) return e.apply(n, s);
                                 l = r.$aq(l, f.ignoreApiPath ? f.ignoreApiPath : f.apiHelper);
                                 var p = f.enableLinkTrace,
                                     g = "",
                                     d = "",
                                     v = c.getConfig("pid");
                                 if (p) {
                                     var m = "";
                                     try {
                                         m = location.origin ? location.origin : location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "")
                                     } catch (w) {
                                         m = ""
                                     }
                                     if (r.checkSameOrigin(h, m)) {
                                         if (t && "string" != typeof t) try {
                                             if (s[0].headers && "function" == typeof s[0].headers.get && "function" == typeof s[0].headers.append) {
                                                 var y = s[0].headers.get("EagleEye-TraceID"),
                                                     b = s[0].headers.get("EagleEye-SessionID"),
                                                     $ = s[0].headers.get("EagleEye-pAppName");
                                                 y ? g = y : (g = c.getTraceId()["EagleEye-TraceID"], s[0].headers.append("EagleEye-TraceID", g)), b ? d = b : (d = c.getSessionId()["EagleEye-SessionID"], s[0].headers.append("EagleEye-SessionID", d)), $ || s[0].headers.append("EagleEye-pAppName", v)
                                             }
                                         } catch (E) {
                                             r.warn("[retcode] fetch failed to set header, exception is :\n" + E)
                                         }
                                         o && (o.headers = o.headers ? o.headers : {}, o.headers["EagleEye-TraceID"] ? g = o.headers["EagleEye-TraceID"] : (g = c.getTraceId()["EagleEye-TraceID"], o.headers["EagleEye-TraceID"] = g), o.headers["EagleEye-SessionID"] ? d = o.headers["EagleEye-SessionID"] : (d = c.getSessionId()["EagleEye-SessionID"], o.headers["EagleEye-SessionID"] = d), o.headers["EagleEye-pAppName"] || (o.headers["EagleEye-pAppName"] = v))
                                     }
                                 }
                                 return e.apply(n, s).then(function(e) {
                                     if (!c || !c.api) return e;
                                     try {
                                         if (!e || "function" != typeof e.clone) return e;
                                         var t = e.clone(),
                                             n = t.headers;
                                         if (n && "function" == typeof n.get) {
                                             var a = n.get("content-type");
                                             if (a && !/(text)|(json)/.test(a)) return e
                                         }
                                         var o = Date.now() - u;
                                         return t.ok ? t.text().then(function(e) {
                                             i(c, f.parseResponse, l, h, e, t.status || 200, o, u, g, d)
                                         }) : c.api(l, !1, o, t.status || 404, t.statusText, u, g, d), e
                                     } catch (w) {
                                         return r.warn("[ARMS] fetch response error :", w), e
                                     }
                                 })["catch"](function(e) {
                                     if (!c || !c.api) throw e;
                                     var t = Date.now() - u;
                                     throw c.api(l, !1, t, e.name || "Error", e.message, u, g, d), e
                                 })
                             }, n[o].toString = r.$b0(o)
                         }
                     }(), function() {
                         if ("function" == typeof n[u]) {
                             var e = n[u];
                             n[c] = e, n[u] = function(t) {
                                 var n = new e(t),
                                     o = a;
                                 if (!o || !o.api || !n.addEventListener) return n;
                                 var s, c, u, f = n.send,
                                     l = n.open,
                                     h = n.setRequestHeader,
                                     p = o._conf,
                                     g = o.getConfig("enableLinkTrace"),
                                     d = "",
                                     v = "",
                                     m = "";
                                 return n.open = function(e, t) {
                                     var a = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                                     if (l.apply(n, a), u = t || "", c = r.$ar(u), c = c ? r.$aq(c, p.ignoreApiPath ? p.ignoreApiPath : p.apiHelper) : "", g) {
                                         var i = "";
                                         try {
                                             i = location.origin ? location.origin : location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "")
                                         } catch (s) {
                                             i = ""
                                         }
                                         r.checkSameOrigin(u, i) && h && "function" == typeof h && (d = o.getTraceId()["EagleEye-TraceID"], h.apply(n, ["EagleEye-TraceID", d]), v = o.getSessionId()["EagleEye-SessionID"], h.apply(n, ["EagleEye-SessionID", v]), m = o.getConfig("pid"), h.apply(n, ["EagleEye-pAppName", m]))
                                     }
                                 }, n.send = function() {
                                     s = Date.now();
                                     var e = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                                     f.apply(n, e)
                                 }, r.on(n, "readystatechange", function() {
                                     if (c && 4 === n.readyState) {
                                         var e = Date.now() - s;
                                         if (n.status >= 200 && n.status <= 299) {
                                             var t = n.status || 200;
                                             if ("function" == typeof n.getResponseHeader) {
                                                 var r = n.getResponseHeader("Content-Type");
                                                 if (r && !/(text)|(json)/.test(r)) return
                                             }
                                             n.responseType && "text" !== n.responseType ? o.api(c, !0, e, t, "", s, d, v) : i(o, p.parseResponse, c, u, n.responseText, t, e, s, d, v)
                                         } else o.api(c, !1, e, n.status || "FAILED", n.statusText, s, d, v)
                                     }
                                 }), n
                             }, n[u].toString = r.$b0(u)
                         }
                     }()), a = this, this)
                 },
                 $am: function() {
                     return this.$bf ? this : (this.getConfig("disableHook") || this.addHook(), this.$bf = !0, this)
                 }
             }), t
         }
     }, {
         "../util": 16
     }],
     8: [function(e, t, n) {
         n.TIMING_KEYS = ["", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "", "domInteractive", "", "domContentLoadedEventEnd", "", "loadEventStart", "", "msFirstPaint", "secureConnectionStart"]
     }, {}],
     9: [function(e, t, n) {
         var r = e("../util"),
             a = e("./constants").TIMING_KEYS;
         t.exports = function() {
             var e = r.win || {},
                 t = e.performance;
             if (!t || "object" != typeof t) return null;
             var n = {},
                 i = t.timing || {},
                 o = Date.now(),
                 s = 1;
             if ("function" == typeof e.PerformanceNavigationTiming) {
                 var c = t.getEntriesByType("navigation")[0];
                 c && (i = c, s = 2)
             }
             r.each({
                 dns: [3, 2],
                 tcp: [5, 4],
                 ssl: [5, 17],
                 ttfb: [7, 6],
                 trans: [8, 7],
                 dom: [10, 8],
                 res: [14, 12],
                 firstbyte: [7, 2],
                 fpt: [8, 1],
                 tti: [10, 1],
                 ready: [12, 1],
                 load: [14, 1]
             }, function(e, t) {
                 var r = i[a[e[1]]],
                     o = i[a[e[0]]];
                 if (2 === s || r > 0 && o > 0) {
                     var c = Math.round(o - r);
                     c >= 0 && c < 36e5 && (n[t] = c)
                 }
             });
             var u = e.navigator.connection,
                 f = t.navigation || {};
             n.ct = u ? u.effectiveType || u.type : "";
             var l = u ? u.downlink || u.downlinkMax || u.bandwidth || null : null;
             if ((l = l > 999 ? 999 : l) && (n.bandwidth = l), n.navtype = 1 === f.type ? "Reload" : "Other", 1 === s && i[a[16]] > 0 && i[a[1]] > 0) {
                 var h = i[a[16]] - i[a[1]];
                 h >= 0 && h < 36e5 && (n.fpt = h)
             }
             return 1 === s && i[a[1]] > 0 ? n.begin = i[a[1]] : 2 === s && n.load > 0 ? n.begin = o - n.load : n.begin = o, n
         }
     }, {
         "../util": 16,
         "./constants": 8
     }],
     10: [function(e, t, n) {
         var r = e("../util"),
             a = "object" == typeof window ? window : {},
             i = a.__oXMLHttpRequest_ || a.XMLHttpRequest;
         i = "function" == typeof i ? i : undefined, t.exports = function(e, t) {
             try {
                 var n = new i;
                 n.open("POST", t, !0), n.setRequestHeader("Content-Type", "text/plain"), n.send(JSON.stringify(e))
             } catch (a) {
                 r.warn("[retcode] Failed to log, exception is :\n" + a)
             }
         }
     }, {
         "../util": 16
     }],
     11: [function(e, t, n) {
         var r = e("../util"),
             a = e("./constants").TIMING_KEYS;
         t.exports = function() {
             var e = r.win || {},
                 t = e.performance;
             if (!t || "object" != typeof t || "function" != typeof t.getEntriesByType) return null;
             var n = {},
                 i = t.timing || {},
                 o = t.getEntriesByType("resource") || [];
             if (n.begin = i[a[1]] || Date.now(), "function" == typeof e.PerformanceNavigationTiming) {
                 var s = t.getEntriesByType("navigation")[0];
                 s && (i = s)
             }
             return r.each({
                 dom: [10, 8],
                 load: [14, 1]
             }, function(e, t) {
                 var r = i[a[e[1]]],
                     o = i[a[e[0]]];
                 if (r > 0 && o > 0) {
                     var s = Math.round(o - r);
                     s >= 0 && s < 36e5 && (n[t] = s)
                 }
             }), n.res = JSON.stringify(o), n
         }
     }, {
         "../util": 16,
         "./constants": 8
     }],
     12: [function(e, t, n) {
         var r = e("../util");
         t.exports = function(e, t) {
             "object" == typeof e && (e = r.serialize(e));
             var n = t + e;
             window && window.navigator && "function" == typeof window.navigator.sendBeacon ? window.navigator.sendBeacon(n, {}) : r.warn("[arms] navigator.sendBeacon not surported")
         }
     }, {
         "../util": 16
     }],
     13: [function(e, t, n) {
         var r = e("../util"),
             a = "object" == typeof window ? window : {},
             i = a.__oFetch_ || a.fetch;
         i = "function" == typeof i ? i : undefined, t.exports = function(e, t) {
             var n = -1;
             "object" == typeof e && (n = e.z, e = r.serialize(e));
             var o = t + e;
             if (i) return i(o, {
                 method: "HEAD",
                 mode: "no-cors"
             })["catch"](r.noop);
             if (a.document && a.document.createElement) {
                 var s = "__request_hold_" + n,
                     c = a[s] = new Image;
                 c.onload = c.onerror = function() {
                     a[s] = undefined
                 }, c.src = o, c = null
             }
         }
     }, {
         "../util": 16
     }],
     14: [function(e, t, n) {
         "use strict";

         function r(e, t) {
             var n = a[o] = new i(e);
             n.$ao(t);
             var r = n._conf;
             return !1 !== r.autoSendPv && n.$av(), r && r.useFmp || n.$ay(), r && r.sendResource && n.$b8(), a[s] = !0, n
         }
         var a = window,
             i = a.BrowserLogger = e("./biz.browser/clazz"),
             o = e("./util").key,
             s = "__hasInitBlSdk";
         i.singleton = function(e, t) {
             return a[s] ? a[o] : r(e, t)
         }, i.createExtraInstance = function(e) {
             e && "object" == typeof e && !0 !== e.enableInstanceAutoSend && (e.enableInstanceAutoSend = !1);
             var t = new i(e),
                 n = t._conf;
             return n.enableInstanceAutoSend && (!1 !== n.autoSendPv && t.$av(), n && n.useFmp || t.$ay(), n && n.sendResource && t.$b8()), t
         };
         "object" == typeof window && !!window.navigator && a[o] && (i.bl = function() {
             if (a[s]) return a[o];
             var e = {},
                 t = [];
             return o in a && (e = a[o].config || {}, t = a[o].pipe || []), r(e, t)
         }(a.__hasInitBlSdk)), t.exports = i
     }, {
         "./biz.browser/clazz": 3,
         "./util": 16
     }],
     15: [function(e, t, n) {
         var r = e("./util"),
             a = e("./base"),
             i = ["api", "success", "time", "code", "msg", "trace", "traceId", "begin", "sid", "seq"],
             o = function(e, t) {
                 var n = e.split("::");
                 return n.length > 1 ? r.ext({
                     group: n[0],
                     key: n[1]
                 }, t) : r.ext({
                     group: "default_group",
                     key: n[0]
                 }, t)
             },
             s = function(e) {
                 a.call(this, e);
                 var t;
                 try {
                     t = "object" == typeof performance ? performance.timing.fetchStart : Date.now()
                 } catch (n) {
                     t = Date.now()
                 }
                 return this._startTime = t, this
             };
         s.prototype = r.$ap(a.prototype), r.ext(a.dftCon, {
             startTime: null
         }), r.ext(s.prototype, {
             constructor: s,
             _super: a,
             sum: function(e, t, n) {
                 try {
                     return this._lg("sum", o(e, {
                         val: t || 1,
                         begin: Date.now()
                     }), n)
                 } catch (a) {
                     r.warn("[retcode] can not get parseStatData: " + a)
                 }
             },
             avg: function(e, t, n) {
                 try {
                     return this._lg("avg", o(e, {
                         val: t || 0,
                         begin: Date.now()
                     }), n)
                 } catch (a) {
                     r.warn("[retcode] can not get parseStatData: " + a)
                 }
             },
             percent: function(e, t, n, a) {
                 try {
                     return this._lg("percent", o(e, {
                         subkey: t,
                         val: n || 0,
                         begin: Date.now()
                     }), a)
                 } catch (i) {
                     r.warn("[retcode] can not get parseStatData: " + i)
                 }
             },
             msg: function(e, t) {
                 if (e && !(e.length > 180)) return this.custom({
                     msg: e
                 }, t)
             },
             error: function(e, t) {
                 if (!e) return r.warn("[retcode] invalid param e: " + e), this;
                 1 === arguments.length ? ("string" == typeof e && (e = {
                     message: e
                 }, t = {}), "object" == typeof e && (t = e = e.error || e)) : ("string" == typeof e && (e = {
                     message: e
                 }), "object" != typeof t && (t = {}));
                 var n = e.name || "CustomError",
                     a = e.message || "",
                     i = e.stack || "";
                 t = t || {};
                 var o = {
                         begin: Date.now(),
                         cate: n,
                         msg: a && a.substring(0, 1e3),
                         stack: i && i.substring(0, 1e3),
                         file: t.filename || "",
                         line: t.lineno || "",
                         col: t.colno || "",
                         err: {
                             msg_raw: r.encode(a),
                             stack_raw: r.encode(i)
                         }
                     },
                     s = (this.getConfig("ignore") || {}).ignoreErrors;
                 return r.$ah(o.msg, s) || r.$ah(r.decode(o.msg), s) ? this : (this.$ak && this.$ak("error", o), this._lg("error", o, 1))
             },
             behavior: function(e) {
                 if (e) {
                     var t = "object" == typeof e && e.behavior ? e : {
                         behavior: e
                     };
                     return this.$ak && this.$ak("behavior", t), this._lg("behavior", t, 1)
                 }
             },
             api: function(e, t, n, a, o, s, c, u) {
                 if (!e) return r.warn("[retcode] api is null"), this;
                 if (e = "string" == typeof e ? {
                         api: e,
                         success: t,
                         time: n,
                         code: a,
                         msg: o,
                         begin: s,
                         traceId: c,
                         sid: u
                     } : r.sub(e, i), !r.$be(e.api)) return this;
                 if (e.code = e.code || "", e.msg = e.msg || "", e.success = e.success ? 1 : 0, e.time = +e.time, e.begin = e.begin, e.traceId = e.traceId || "", e.sid = e.sid || "", !e.api || isNaN(e.time)) return r.warn("[retcode] invalid time or api"), this;
                 var f = (this.getConfig("ignore") || {}).ignoreApis;
                 if (r.$ah(e.api, f) || r.$ah(r.decode(e.api), f)) return this;
                 this.$ak && this.$ak("api", e);
                 var l = {
                     type: "api",
                     data: {
                         message: e.msg,
                         url: e.api,
                         status: e.code
                     },
                     timestamp: e.begin
                 };
                 try {
                     this.getConfig("behavior") && this.addBehavior && this.addBehavior(l)
                 } catch (h) {}
                 return this._lg("api", e, e.success && this.getConfig("sample"))
             },
             speed: function(e, t, n) {
                 var a = this,
                     i = this.getConfig("startTime") || this._startTime;
                 return /^s(\d|1[0])$/.test(e) ? (t = "number" != typeof t ? Date.now() - i : t >= i ? t - i : t, a.$b9 = a.$b9 || {}, a.$b9[e] = t, a.$b9.begin = i, clearTimeout(a.$ba), a.$ba = setTimeout(function() {
                     n || (a.$b9.page = a.$a7(!0)), a._lg("speed", a.$b9), a.$b9 = null
                 }, 5e3), a) : (r.warn("[retcode] invalid point: " + e), a)
             },
             performance: function(e) {
                 if (e) {
                     var t = {};
                     for (var n in e)(/^t([1-9]|1[0])$/.test(n) || "ctti" === n || "cfpt" === n) && (t[n] = e[n]);
                     "{}" !== JSON.stringify(t) && (this.$b7 = t)
                 }
             },
             resource: function(e, t) {
                 if (!e || !r.isPlainObject(e)) return r.warn("[arms] invalid param data: " + e), this;
                 var n = Object.keys(e),
                     a = ["begin", "dom", "load", "res", "dl"],
                     i = !1;
                 for (var o in a) {
                     if (n.indexOf(a[o]) < 0) {
                         i = !0;
                         break
                     }
                 }
                 if (i) return r.warn("[arms] lack param data: " + e), this;
                 var s = {
                     begin: e.begin || Date.now(),
                     dom: e.dom || "",
                     load: e.load || "",
                     res: r.isArray(e.res) ? JSON.stringify(e.res) : JSON.stringify([]),
                     dl: e.dl || ""
                 };
                 return this._lg("res", s, t)
             }
         }), s._super = a, s._root = a, a.Reporter = s, t.exports = s
     }, {
         "./base": 1,
         "./util": 16
     }],
     16: [function(e, t, n) {
         Date.now = Date.now || function() {
             return (new Date).getTime()
         };
         var r = Date.now(),
             a = function() {},
             i = {
                 noop: a,
                 warn: function() {
                     var e = "object" == typeof console ? console.warn : a;
                     try {
                         var t = {
                             warn: e
                         };
                         t.warn.call(t)
                     } catch (n) {
                         return a
                     }
                     return e
                 }(),
                 key: "__bl",
                 win: "object" == typeof window && window.document ? window : undefined,
                 regionMap: {
                     cn: "https://arms-retcode.aliyuncs.com/r.png?",
                     sg: "https://arms-retcode-sg.aliyuncs.com/r.png?",
                     sg_2: "https://retcode-sg-lazada.arms.aliyuncs.com/r.png?",
                     daily: "http://arms-retcode-daily.alibaba.net/r.png?",
                     daily_2: "https://arms-retcode-daily.alibaba.net/r.png?",
                     us: "https://retcode-us-west-1.arms.aliyuncs.com/r.png?"
                 },
                 defaultImgUrl: "https://arms-retcode.aliyuncs.com/r.png?",
                 $ap: function(e) {
                     if (Object.create) return Object.create(e);
                     var t = function() {};
                     return t.prototype = e, new t
                 },
                 each: function(e, t) {
                     var n = 0,
                         r = e.length;
                     if (this.T(e, "Array"))
                         for (; n < r && !1 !== t.call(e[n], e[n], n); n++);
                     else
                         for (n in e)
                             if (!1 === t.call(e[n], e[n], n)) break;
                     return e
                 },
                 $a8: function(e, t, n) {
                     if ("function" != typeof e) return n;
                     try {
                         return e.apply(this, t)
                     } catch (r) {
                         return n
                     }
                 },
                 T: function(e, t) {
                     var n = Object.prototype.toString.call(e).substring(8).replace("]", "");
                     return t ? n === t : n
                 },
                 $aq: function(e, t) {
                     if (!e) return "";
                     if (!t) return e;
                     var n = this,
                         r = n.T(t);
                     return "Function" === r ? n.$a8(t, [e], e) : "Array" === r ? (this.each(t, function(t) {
                         e = n.$aq(e, t)
                     }), e) : "Object" === r ? e.replace(t.rule, t.target || "") : e.replace(t, "")
                 },
                 $ah: function(e, t) {
                     if (!e || !t) return !1;
                     if ((this.isString(t) || t.source || "Function" === this.T(t)) && (t = [t]), !this.isArray(t)) return i.warn("[arms] invalid rules of ignore config, (list of) String/RegExp/Funcitons are available"), !1;
                     for (var n, r = [], a = 0, o = t.length; a < o; a++)
                         if (n = t[a], this.isString(n)) r.push(n.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"));
                         else if (n && n.source) r.push(n.source);
                     else if (n && "Function" === this.T(n) && !0 === this.$a8(n, [e], !1)) return !0;
                     var s = new RegExp(r.join("|"), "i");
                     return !!(r.length && s.test && s.test(e))
                 },
                 J: function(e) {
                     if (!e || "string" != typeof e) return e;
                     var t = null;
                     try {
                         t = JSON.parse(e)
                     } catch (n) {}
                     return t
                 },
                 pick: function(e) {
                     return 1 === e || 1 === Math.ceil(Math.random() * e)
                 },
                 $a9: function(e) {
                     if ("sample" in e) {
                         var t = e.sample,
                             n = t;
                         t && /^\d+(\.\d+)?%$/.test(t) && (n = parseInt(100 / parseFloat(t))), 0 < n && 1 > n && (n = parseInt(1 / n)), n >= 1 && n <= 100 ? e.sample = n : delete e.sample
                     }
                     return e
                 },
                 on: function(e, t, n, r, a) {
                     return e.addEventListener ? (a = a || !1, e.addEventListener(t, function i(o) {
                         r && e.removeEventListener(t, i, a), n.call(this, o)
                     }, a)) : e.attachEvent && e.attachEvent("on" + t, function o(a) {
                         r && e.detachEvent("on" + t, o), n.call(this, a)
                     }), this
                 },
                 off: function(e, t, n) {
                     return n ? (e.removeEventListener ? e.removeEventListener(t, n) : e.detachEvent && e.detachEvent(t, n), this) : this
                 },
                 delay: function(e, t) {
                     return -1 === t ? (e(), null) : setTimeout(e, t || 0)
                 },
                 ext: function(e) {
                     for (var t = 1, n = arguments.length; t < n; t++) {
                         var r = arguments[t];
                         for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                     }
                     return e
                 },
                 sub: function(e, t) {
                     var n = {};
                     return this.each(e, function(e, r) {
                         -1 !== t.indexOf(r) && (n[r] = e)
                     }), n
                 },
                 uu: function() {
                     for (var e, t, n = 20, r = new Array(n), a = Date.now().toString(36).split(""); n-- > 0;) t = (e = 36 * Math.random() | 0).toString(36), r[n] = e % 3 ? t : t.toUpperCase();
                     for (var i = 0; i < 8; i++) r.splice(3 * i + 2, 0, a[i]);
                     return r.join("")
                 },
                 seq: function() {
                     return (r++).toString(36)
                 },
                 decode: function(e) {
                     try {
                         e = decodeURIComponent(e)
                     } catch (t) {}
                     return e
                 },
                 encode: function(e, t) {
                     try {
                         e = t ? encodeURIComponent(e).replace(/\(/g, "%28").replace(/\)/g, "%29") : encodeURIComponent(e)
                     } catch (n) {}
                     return e
                 },
                 serialize: function(e) {
                     e = e || {};
                     var t = [];
                     for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && e[n] !== undefined && t.push(n + "=" + this.encode(e[n], "msg" === n));
                     return t.join("&")
                 },
                 $be: function(e, t) {
                     if (!e || "string" != typeof e) return !1;
                     var n = /arms-retcode[\w-]*\.aliyuncs/.test(e);
                     return !n && t && (n = /(\.png)|(\.gif)|(alicdn\.com)/.test(e)), !n
                 },
                 $b4: function(e) {
                     return !(!e || !e.message) && !/failed[\w\s]+fetch/i.test(e.message)
                 },
                 $ar: function(e) {
                     return e && "string" == typeof e ? e.replace(/^(https?:)?\/\//, "").replace(/\?.*$/, "") : ""
                 },
                 $b0: function(e) {
                     return function() {
                         return e + "() { [native code] }"
                     }
                 },
                 checkSameOrigin: function(e, t) {
                     if (!t || !e) return !1;
                     var n = "//" + t.split("/")[2];
                     return e === t || e.slice(0, t.length + 1) === t + "/" || e === n || e.slice(0, n.length + 1) === n + "/" || !/^(\/\/|http:|https:).*/.test(e)
                 },
                 getRandIP: function() {
                     for (var e = [], t = 0; t < 4; t++) {
                         var n = Math.floor(256 * Math.random());
                         e[t] = (n > 15 ? "" : "0") + n.toString(16)
                     }
                     return e.join("")
                 },
                 getSortNum: function(e) {
                     return e ? (e += 1) >= 1e3 && e <= 9999 ? e : e < 1e3 ? e + 1e3 : e % 1e4 + 1e3 : 1e3
                 },
                 getRandNum: function(e) {
                     return e && "string" == typeof e ? e.length < 5 ? this.getNum(5) : e.substring(e.length - 5) : this.getNum(5)
                 },
                 getNum: function(e) {
                     for (var t = [], n = 0; n < e; n++) {
                         var r = Math.floor(16 * Math.random());
                         t[n] = r.toString(16)
                     }
                     return t.join("")
                 },
                 isFunction: function(e) {
                     return "function" == typeof e
                 },
                 isPlainObject: function(e) {
                     return "[object Object]" === Object.prototype.toString.call(e)
                 },
                 isString: function(e) {
                     return "[object String]" === Object.prototype.toString.call(e)
                 },
                 isArray: function(e) {
                     return "[object Array]" === Object.prototype.toString.call(e)
                 },
                 joinRegExp: function(e) {
                     for (var t, n = [], r = 0, a = e.length; r < a; r++) t = e[r], this.isString(t) ? n.push(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : t && t.source && n.push(t.source);
                     return new RegExp(n.join("|"), "i")
                 },
                 reWriteMethod: function(e, t, n) {
                     if (null !== e) {
                         var r = e[t];
                         e[t] = n(r)
                     }
                 }
             };
         t.exports = i
     }, {}]
 }, {}, [14]);