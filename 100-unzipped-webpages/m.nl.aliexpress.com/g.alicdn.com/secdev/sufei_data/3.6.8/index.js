! function(n, t, r, i, o, a, e, c, u, f, s, l, m, h, v) {
    var p, d = 368,
        g = "isg",
        y = c,
        b = !!y.addEventListener,
        w = u.getElementsByTagName("head")[0],
        z = f.userAgent;
    ! function(n) {
        function t() {
            return 4294967295 * i.random() >>> 0
        }

        function a(n) {
            var t;
            switch (typeof n) {
                case "function":
                    t = h.call(n);
                    break;
                case "object":
                    try {
                        t = n + ""
                    } catch (r) {
                        return !1
                    }
                    break;
                default:
                    return !1
            }
            return m.test(t)
        }

        function e(n) {
            for (var t = 0, r = 0, i = n.length; r < i; r++) t = (t << 5) - t + n.charCodeAt(r), t >>>= 0;
            return t
        }

        function c(n, t) {
            var r = n.indexOf(t);
            return -1 === r ? n : n.substr(0, r)
        }

        function u(n, t) {
            var r = n.indexOf(t);
            return -1 === r ? n : n.substr(r + t.length)
        }

        function f(n) {
            var t = n.match(v);
            if (!t) return null;
            var r = t[1];
            return p.test(r) && (r = u(r, "@"), r = c(r, ":")), r
        }

        function s(n) {
            for (var t = 0, r = n.length - 1; r >= 0; r--) {
                t = t << 1 | (0 | +n[r])
            }
            return t
        }

        function l(n, t, r, i) {
            b ? n.addEventListener(t, r, i) : n.attachEvent && n.attachEvent("on" + t, function() {
                r(event)
            })
        }
        n.a = t;
        var m = /native code/,
            h = r.prototype.toString;
        n.b = a, n.c = e, n.d = o.now || function() {
            return +new o
        }, n.e = c, n.f = u;
        var v = /^(?:https?:)?\/{2,}([^\/?#\\]+)/i,
            p = /[@:]/;
        n.g = f, n.h = s, n.i = l
    }(p || (p = {}));
    var _, k = function() {
        function n(n) {
            this.j = new a("(?:^|; )" + n + "=([^;]+)", "g"), this.k = n + "=", this.l = ""
        }
        return n.prototype.m = function() {
            for (var n, t = u.cookie, r = []; n = this.j.exec(t);) r.push(n[1]);
            return r
        }, n.prototype.n = function() {
            return this.m()[0]
        }, n.prototype.o = function(n) {
            if (!this.l) {
                var t = "";
                this.p && (t += "; domain=" + this.p), this.q && (t += "; path=" + this.q), this.r && (t += "; expires=" + this.r), this.l = t
            }
            u.cookie = this.k + n + this.l
        }, n.prototype.s = function() {
            var n = this.r;
            this.t("Thu, 01 Jan 1970 00:00:00 GMT"), this.o(""), this.t(n)
        }, n.prototype.u = function(n) {
            this.p = n, this.l = ""
        }, n.prototype.v = function(n) {
            this.q = n, this.l = ""
        }, n.prototype.t = function(n) {
            this.r = n, this.l = ""
        }, n
    }();
    ! function(n) {
        function t(n) {
            var t = n.stack || n.message;
            s(function(n) {
                r(t)
            }, 1)
        }

        function r(n) {
            var t = u._sufei_log;
            if (null == t && (t = .001), !(i.random() > t)) {
                c({
                    code: 1,
                    msg: (n + "").substr(0, 1e3),
                    pid: "sufeidata",
                    page: l.href.split(/[#?]/)[0],
                    query: l.search.substr(1),
                    hash: l.hash,
                    referrer: u.referrer,
                    title: u.title,
                    ua: f.userAgent,
                    rel: d,
                    c1: a()
                }, "//gm.mmstat.com/fsp.1.1?")
            }
        }

        function o(n, t, r) {
            n = (n || "").substr(0, 2e3), c({
                url: n,
                token: t,
                cna: a(),
                ext: r
            }, "https://fourier.alibaba.com/ts?")
        }

        function a() {
            return null == m && (m = new k("cna").n() || ""), m
        }

        function c(n, t) {
            var r = [];
            for (var i in n) r.push(i + "=" + e(n[i]));
            (new v).src = t + r.join("&")
        }
        n.w = t, n.x = r, n.y = o;
        var m
    }(_ || (_ = {}));
    var x;
    ! function(n) {
        function t() {
            if (un) {
                var n = Q + ":" + fn + ":" + un.join(",");
                _.y("", n, 4), un = null
            }
        }

        function r(n) {
            J = n.clientX, V = n.clientY, Q++;
            var t = n.target;
            Z = a(t)
        }

        function o(n) {
            var t = n.touches[0];
            K = t.clientX, nn = t.clientY, Q++;
            var r = n.target;
            Z = a(r)
        }

        function a(n) {
            if (null == c.innerHeight) return !0;
            var t = n.getBoundingClientRect();
            return t.top >= 0 && t.left >= 0 && t.bottom <= c.innerHeight && t.right <= c.innerWidth
        }

        function e(n) {
            if (tn = n.isTrusted, null == tn && (tn = !0), b) {
                var r = n.target,
                    o = r.offsetWidth >> 1,
                    a = r.offsetHeight >> 1;
                if (!(o < 10 && a < 10)) {
                    var e = i.abs(n.offsetX - o),
                        u = i.abs(n.offsetY - a),
                        f = e < 2 && u < 2;
                    if (f && fn++, fn >= 3 && (3 === fn && (s(t, 2e4), p.i(c, "unload", t)), un && un.length < 20)) {
                        var l = (f ? "" : "!") + r.tagName;
                        un.push(l)
                    }
                }
            }
        }

        function m(n) {
            K = n.clientX, nn = n.clientY, U++
        }

        function v(n) {
            var t = n.touches[0];
            K = t.clientX, nn = t.clientY, U++
        }

        function d(n) {
            G++
        }

        function g(n) {
            F++
        }

        function w() {
            var n = h.availWidth,
                t = c.outerWidth;
            null == t && (t = u.documentElement.clientWidth || u.body.clientWidth), N = n - t < 20
        }

        function k(n) {
            Y = !0, rn = !0
        }

        function x(n) {
            rn = !1
        }

        function A(n) {
            cn = n.gamma, en || (en = s(function(n) {
                removeEventListener("deviceorientation", A), s(j, 470)
            }, 30))
        }

        function j() {
            en = 0, addEventListener("deviceorientation", A)
        }

        function C() {
            if (u.ontouchmove ? (p.i(u, "touchmove", v, !0), p.i(u, "touchstart", o, !0)) : (p.i(u, "mousemove", m, !0), p.i(u, "mousedown", r, !0)), p.i(u, "click", e, !0), p.i(u, "keydown", g, !0), p.i(c, "scroll", d, !0), p.i(c, "focus", k), p.i(c, "blur", x), p.i(c, "resize", w), w(), f.getBattery) {
                var n = f.getBattery();
                n && (n.then(function(n) {
                    $ = n
                })["catch"](function(n) {}), on = !0)
            }
            an && j()
        }

        function T() {
            return U
        }

        function E() {
            return G
        }

        function M() {
            return Q
        }

        function L() {
            return F
        }

        function B() {
            var n = J,
                t = V;
            return n || t || (n = K, t = nn), {
                F: n,
                G: t,
                H: tn
            }
        }

        function P() {
            return Z
        }

        function q() {
            var n = u.hidden;
            return null == n && (n = u.mozHidden), !n
        }

        function R() {
            return rn
        }

        function W() {
            return Y
        }

        function O() {
            return N
        }

        function S() {
            return on
        }

        function I() {
            return !$ || $.charging
        }

        function X() {
            return $ ? 100 * $.level : 127
        }

        function D() {
            return an
        }

        function H() {
            return an ? cn + 90 : 255
        }
        var N, Y, $, U = 0,
            Q = 0,
            G = 0,
            F = 0,
            J = 0,
            V = 0,
            Z = !0,
            K = 0,
            nn = 0,
            tn = !0,
            rn = !0,
            on = !1,
            an = !!y.DeviceOrientationEvent;
        (/dingtalk/.test(l.hostname) || /Qianniu/.test(z)) && (an = !1);
        var en, cn = null,
            un = [],
            fn = 0;
        n.z = C, n.A = T, n.B = E, n.C = M, n.D = L, n.I = B, n.J = P, n.K = q, n.L = R, n.M = W, n.N = O, n.O = S, n.P = I, n.Q = X, n.R = D, n.S = H
    }(x || (x = {}));
    var A;
    ! function(n) {
        function r() {
            return "$cdc_asdjflasutopfhvcZLmcfl_" in u || f.webdriver
        }

        function i() {
            if (a()) return !1;
            try {
                return !!u.createElement("canvas").getContext("webgl")
            } catch (n) {
                return !1
            }
        }

        function a() {
            return "ontouchstart" in u
        }

        function e() {
            return /zh-cn/i.test(f.language || f.systemLanguage)
        }

        function l() {
            return -480 === (new o).getTimezoneOffset()
        }

        function m() {
            return x.J()
        }

        function h() {
            return x.R()
        }

        function v() {
            return x.O()
        }

        function d() {
            return x.P()
        }

        function g() {
            return T && ("complete" !== u.readyState || p.d() - E > 1e4 || x.A() || x.B() || x.C() || x.D()) && (T = !1), T
        }

        function _() {
            for (var n = 0; n < B.length; n++) M[L.length + n] = B[n]();
            return p.h(M)
        }

        function k() {
            for (var n in S)
                if (S.hasOwnProperty(n)) {
                    var t = S[n];
                    if (t()) return +n.substr(1)
                }
            return 0
        }

        function A(n) {
            var t = y.RTCPeerConnection || y.mozRTCPeerConnection || y.webkitRTCPeerConnection;
            if (!t) return void n(0);
            var r = {
                    optional: [{
                        W: !0
                    }]
                },
                i = {
                    iceServers: [{
                        urls: "stun:x"
                    }]
                },
                o = new t(i, r);
            s(function(n) {
                try {
                    o.close()
                } catch (t) {}
            }, 5e3), o.onicecandidate = function(t) {
                var r = t.candidate;
                if (!r) return void n(0);
                var i = j(r.candidate);
                null != i && (n(i), o.onicecandidate = null)
            }, o.createDataChannel(""), o.createOffer().then(function(n) {
                o.setLocalDescription(n)
            })["catch"](function(t) {
                n(0)
            })
        }

        function j(n) {
            var t = /(\d+)\.(\d+)\.(\d+)\.(\d+)\D/.exec(n);
            return t ? (+t[1] << 24 | +t[2] << 16 | +t[3] << 8 | +t[4]) >>> 0 : null
        }

        function C() {
            E = p.d();
            for (var n = 0; n < L.length; n++) M[n] = L[n]()
        }
        var T = !0,
            E = 0,
            M = t(16),
            L = [r, i, a, e, l],
            B = [m, h, v, d, g];
        n.T = g, n.U = _;
        var P = f.vendor,
            q = w.style,
            R = "chrome" in c,
            W = "ActiveXObject" in c,
            O = p.b(y.WeakMap),
            S = {
                _13: function() {
                    return "callPhantom" in y || /PhantomJS/i.test(z)
                },
                _14: function() {
                    return /python/i.test(f.appVersion)
                },
                _15: function() {
                    return "sgAppName" in f
                },
                _16: function() {
                    return /Maxthon/i.test(P)
                },
                _17: function() {
                    return "opr" in y
                },
                _18: function() {
                    return R && /BIDUBrowser/i.test(z)
                },
                _19: function() {
                    return R && /LBBROWSER/i.test(z)
                },
                _20: function() {
                    return R && /QQBrowser/.test(z)
                },
                _21: function() {
                    return R && /UBrowser/i.test(z)
                },
                _22: function() {
                    return R && /2345Explorer/.test(z)
                },
                _23: function() {
                    return R && /TheWorld/.test(z)
                },
                _24: function() {
                    return R && "MSGesture" in y
                },
                _26: function() {
                    return "aef" in y && /WW_IMSDK/.test(z)
                },
                _25: function() {
                    return /Qianniu/.test(z)
                },
                _1: function() {
                    return R
                },
                _2: function() {
                    return "mozRTCIceCandidate" in y || "mozInnerScreenY" in y
                },
                _3: function() {
                    return "safari" in y
                },
                _4: function() {
                    return W && !("maxHeight" in q)
                },
                _5: function() {
                    return W && !p.b(y.postMessage)
                },
                _6: function() {
                    return W && !b
                },
                _7: function() {
                    return W && !p.b(y.Uint8Array)
                },
                _8: function() {
                    return W && !O
                },
                _9: function() {
                    return W && O
                },
                _10: function() {
                    return "Google Inc." === f.vendor
                },
                _11: function() {
                    return "Apple Computer, Inc." === f.vendor
                },
                _12: function() {
                    return W
                }
            };
        n.V = k, n.X = A, n.z = C
    }(A || (A = {}));
    var j, C = function() {
        function n() {
            var n = this,
                t = y.WeakMap;
            if (t) this.Y = new t;
            else {
                var r = function() {
                    n.Z = [], n.$ = []
                };
                r(), setInterval(r, 1e4)
            }
        }
        return n.prototype._ = function(n, t) {
            var r = this.Y;
            r ? r.set(n, t) : (this.Z.push(n), this.$.push(t))
        }, n.prototype.aa = function(n) {
            var t = this.Y;
            if (t) return t.get(n);
            var r = this.Z.indexOf(n);
            return r >= 0 ? this.$[r] : void 0
        }, n
    }();
    ! function(n) {
        function t() {
            n.ba = r("1688.com,95095.com,a-isv.org,aliapp.org,alibaba-inc.com,alibaba.com,alibaba.net,alibabacapital.com,alibabacloud.com,alibabacorp.com,alibabadoctor.com,alibabagroup.com,alicdn.com,alidayu.com,aliexpress.com,alifanyi.com,alihealth.cn,alihealth.com.cn,alihealth.hk,alikmd.com,alimama.com,alimei.com,alios.cn,alipay-corp.com,alipay.com,aliplus.com,alisoft.com,alisports.com,alitianji.com,alitrip.com,alitrip.hk,aliunicorn.com,aliway.com,aliwork.com,alixiaomi.com,aliyun-inc.com,aliyun.com,aliyun.xin,aliyuncs.com,alizhaopin.com,amap.com,antfinancial-corp.com,antsdaq-corp.com,asczwa.com,atatech.org,autonavi.com,b2byao.com,bcvbw.com,cainiao-inc.cn,cainiao-inc.com,cainiao.com,cainiao.com.cn,cainiaoyizhan.com,cheng.xin,cibntv.net,cnzz.com,damai.cn,ddurl.to,dingding.xin,dingtalk.com,dingtalkapps.com,doctoryou.ai,doctoryou.cn,dratio.com,etao.com,feizhu.cn,feizhu.com,fliggy.com,fliggy.hk,freshhema.com,gaode.com,gein.cn,gongyi.xin,guoguo-app.com,hemaos.com,heyi.test,hichina.com,itao.com,jingguan.ai,jiyoujia.com,juhuasuan.com,koubei-corp.com,kumiao.com,laifeng.com,laiwang.com,lazada.co.id,lazada.co.th,lazada.com,lazada.com.my,lazada.com.ph,lazada.sg,lazada.vn,liangxinyao.com,lingshoujia.com,lwurl.to,mashangfangxin.com,mashort.cn,mdeer.com,miaostreet.com,mmstat.com,mshare.cc,mybank-corp.cn,nic.xin,pailitao.com,phpwind.com,phpwind.net,saee.org.cn,shenjing.com,shyhhema.com,sm.cn,soku.com,tanx.com,taobao.com,taobao.org,taopiaopiao.com,tb.cn,tmall.com,tmall.hk,tmall.ru,tmjl.ai,tudou.com,umeng.co,umeng.com,umengcloud.com,umsns.com,umtrack.com,wasu.tv,whalecloud.com,wrating.com,www.net.cn,xiami.com,ykimg.com,youku.com,yowhale.com,yunos-inc.com,yunos.com,yushanfang.com,zmxy-corp.com.cn,zuodao.com"), n.ca = r("127.0.0.1,afptrack.alimama.com,aldcdn.tmall.com,delivery.dayu.com,hzapush.aliexpress.com,local.alipcsec.com,localhost.wwbizsrv.alibaba.com,napi.uc.cn,sec.taobao.com,tce.alicdn.com,un.alibaba-inc.com,utp.ucweb.com,ynuf.aliapp.org"), n.da = r("alicdn.com,aliimg.com,alimama.cn,alimmdn.com,alipay.com,alivecdn.com,aliyun.com,aliyuncs.com,amap.com,autonavi.com,cibntv.net,cnzz.com,facebook.com,googleapis.com,greencompute.org,lesiclub.cn,linezing.com,mmcdn.cn,mmstat.com,sm-tc.cn,sm.cn,soku.com,tanx.com,taobaocdn.com,tbcache.com,tbcdn.cn,tudou.com,uczzd.cn,umeng.com,wrating.com,xiami.net,xiaoshuo1-sm.com,ykimg.com,youku.com,zimgs.cn")
        }

        function r(n) {
            for (var t = {}, r = n.split(","), i = 0; i < r.length; i++) t[r[i]] = !0;
            return t
        }
        n.z = t
    }(j || (j = {}));
    var T;
    ! function(t) {
        function r(n, t, r) {
            switch (r.length) {
                case 0:
                    return t();
                case 1:
                    return t(r[0]);
                case 2:
                    return t(r[0], r[1]);
                default:
                    return t(r[0], r[2], r[3])
            }
        }

        function i(n, t) {
            switch (t.length) {
                case 0:
                    return new n;
                case 1:
                    return new n(t[0]);
                case 2:
                    return new n(t[0], t[1]);
                default:
                    return new n(t[0], t[2], t[3])
            }
        }

        function o(n, o, a) {
            return function() {
                var e, c = arguments;
                try {
                    e = o(c, this, n)
                } catch (u) {
                    e = c, _.w(u)
                }
                if (e) {
                    if (e === t.ea) return;
                    c = e
                }
                return a ? i(n, c) : "apply" in n ? n.apply(this, c) : r(this, n, c)
            }
        }

        function a(n, t, r) {
            if (!n) return !1;
            var i = n[t];
            return !!i && (n[t] = o(i, r, !1), !0)
        }

        function e(n, t, r) {
            if (!n) return !1;
            var i = n[t];
            return !!i && (n[t] = o(i, r, !0), !0)
        }

        function c(t, r, i) {
            if (!u) return !1;
            var a = u(t, r);
            return !(!a || !a.set) && (a.set = o(a.set, i, !1), b || (a.get = function(n) {
                return function() {
                    return n.call(this)
                }
            }(a.get)), n.defineProperty(t, r, a), !0)
        }
        t.ea = -1;
        var u = n.getOwnPropertyDescriptor;
        t.fa = a, t.ga = e, t.ha = c
    }(T || (T = {}));
    var E, M = function() {
        function n(n) {
            this.ia = n;
            for (var t = 0, r = n.length; t < r; t++) this[t] = 0
        }
        return n.prototype.ja = function() {
            for (var n = this.ia, t = [], r = -1, i = 0, o = n.length; i < o; i++)
                for (var a = this[i], e = n[i], c = r += e; t[c] = 255 & a, 0 != --e;) --c, a >>= 8;
            return t
        }, n.prototype.ka = function(n) {
            for (var t = this.ia, r = 0, i = 0, o = t.length; i < o; i++) {
                var a = t[i],
                    e = 0;
                do {
                    e = e << 8 | n[r++]
                } while (--a > 0);
                this[i] = e >>> 0
            }
        }, n
    }();
    ! function(n) {
        function t(n) {
            for (var t = 0, r = 0, i = n.length; r < i; r++) t = (t << 5) - t + n[r];
            return 255 & t
        }

        function r(n, t, r, i, o) {
            for (var a = n.length; t < a;) r[i++] = n[t++] ^ 255 & o, o = ~(131 * o)
        }

        function i(n) {
            for (var t = [], r = n.length, i = 0; i < r; i += 3) {
                var o = n[i] << 16 | n[i + 1] << 8 | n[i + 2];
                t.push(f.charAt(o >> 18), f.charAt(o >> 12 & 63), f.charAt(o >> 6 & 63), f.charAt(63 & o))
            }
            return t.join("")
        }

        function o(n) {
            for (var t = [], r = 0; r < n.length; r += 4) {
                var i = s[n.charAt(r)] << 18 | s[n.charAt(r + 1)] << 12 | s[n.charAt(r + 2)] << 6 | s[n.charAt(r + 3)];
                t.push(i >> 16, i >> 8 & 255, 255 & i)
            }
            return t
        }

        function a() {
            for (var n = 0; n < 64; n++) {
                var t = f.charAt(n);
                s[t] = n
            }
        }

        function e(n) {
            var o = t(n),
                a = [u, o];
            return r(n, 0, a, 2, o), i(a)
        }

        function c(n) {
            var i = o(n),
                a = i[1],
                e = [];
            if (r(i, 2, e, 0, a), t(e) == a) return e
        }
        var u = 4,
            f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            s = {};
        n.z = a, n.la = e, n.ma = c
    }(E || (E = {}));
    var L;
    ! function(n) {
        function t() {
            for (var n = f.platform, t = 0; t < r.length; t++)
                if (r[t].test(n)) return t + 1;
            return 0
        }
        var r = [/^Win32/, /^Win64/, /^Linux armv|^Linux aarch64/, /^Android/, /^iPhone/, /^iPad/, /^MacIntel/, /^Linux [ix]\d+/, /^ARM/, /^iPod/, /^BlackBerry/];
        n.na = t
    }(L || (L = {}));
    var B;
    ! function(n) {
        function t() {
            return p.d() / 1e3 >>> 0
        }

        function r(n) {
            if (x.z(), A.z(), n) {
                var t = E.ma(n);
                t && o.ka(t)
            }
            o[1] = p.a(), o[5] = A.V(), o[6] = L.na(), o[8] = p.c(f.userAgent);
            try {
                A.X(function(n) {
                    o[7] = n
                })
            } catch (r) {
                o[7] = 0
            }
        }

        function i(n, r) {
            0 == o[4] && (o[4] = p.a(), o[3] = t()), o[2] = t(), o[16] = A.U();
            var i = !1;
            if (!A.T()) {
                o[9] = x.A(), o[10] = x.B(), o[11] = x.C(), o[12] = x.D();
                var e = x.I();
                o[13] = e.F, o[14] = e.G, i = e.H
            }
            o[17] = x.S(), o[18] = x.Q();
            var c = x.L(),
                u = x.N(),
                f = x.M(),
                s = [r, x.K(), n, c, i, !0, f, u];
            n && a++, o[15] = p.h(s), o[0] = a;
            var l = o.ja(),
                m = E.la(l);
            return m
        }
        var o = new M([2, 2, 4, 4, 4, 1, 1, 4, 4, 3, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1]),
            a = 0;
        n.z = r, n.oa = i
    }(B || (B = {}));
    var P;
    ! function(n) {
        function t(n, t) {
            var r = n.split("."),
                i = r.length - 1,
                o = r[i];
            if (o in t) return !0;
            for (var a = i - 1; a >= 0; a--)
                if ((o = r[a] + "." + o) in t) return !0;
            return !1
        }

        function r(n) {
            var t = l.hostname;
            if (C.test(t)) return x.o(n), t;
            var r = t.split("."),
                i = r.length;
            if (1 === i) return x.o(n), t;
            i > 5 && (i = 5), t = r.pop();
            for (var o = 2; o <= i && (t = r.pop() + "." + t, x.u(t), x.o(n), !(t in j.ba || t in j.ca || t in j.da)) && x.n() !== n; o++);
            return t
        }

        function i(n) {
            var t = r(n),
                i = "(^|\\.)" + t.replace(/\./g, "\\.") + "$";
            z = new a(i, "i")
        }

        function e() {
            A = null;
            var n = B.oa(!1, null);
            x.o(n)
        }

        function f() {
            var n = B.oa(!0);
            x.o(n), null == A && (A = s(e, 0))
        }

        function m(n, t) {
            /^\/\//.test(n) && (n = l.protocol + n);
            var r = B.oa(!0);
            _.y(n, r, t)
        }

        function h(n, t) {
            if (t)
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (i.test && i.test(n)) return !0
                }
            return !1
        }

        function v(n) {
            var r;
            if (null != n && (n += "", r = p.g(n)), !r) return f(), !0;
            if (z.test(r)) return f(), !0;
            if (C.test(r)) return !1;
            var i = p.e(n, "?");
            return h(i, y.__sufei_point_list) ? (m(n, 0), !1) : !t(r, j.da) && (!(r in j.ca) && (!/\/gw-open\/|\/gw\//.test(i) && (!h(i, y.__sufei_ignore_list) && (m(n, 0), !1))))
        }

        function d(n) {
            var r = u.referrer;
            if (r) {
                var i = p.g(r);
                if (i && t(i, j.ba)) return
            }
            m(r, 1)
        }

        function b() {
            x.s();
            for (var n = l.hostname.split("."), t = n.pop();;) {
                var r = n.pop();
                if (!r) break;
                t = r + "." + t, x.u(t), x.s()
            }
        }

        function w() {
            j.z(), x = new k(g);
            var n = new o(p.d() + 15552e6).toUTCString();
            x.t(n), x.v("/");
            var t = x.m();
            t.length > 1 && (_.x("exist_multi_isg"), b(), x.m().length > 0 && _.x("clear_fail"));
            var r = t[0];
            B.z(r), r = B.oa(!1, null), i(r), 0 === t.length && d(r), p.i(c, "unload", function(n) {
                var t = B.oa(!1, !0);
                x.o(t)
            })
        }
        var z, x, A, C = /^(\d+\.)*\d+$/;
        n.pa = f, n.qa = v, n.z = w
    }(P || (P = {}));
    var q;
    ! function(n) {
        function t() {
            r() || (i("insertBefore"), i("appendChild"))
        }

        function r() {
            var n = y.HTMLScriptElement;
            if (!n) return !1;
            var t = n.prototype,
                r = /^src$/i;
            return T.fa(t, "setAttribute", function(n) {
                var t = n[0],
                    i = n[1];
                r.test(t) && a(i)
            }), T.ha(t, "src", function(n) {
                a(n[0])
            })
        }

        function i(n) {
            var t = y.Element;
            t ? T.fa(t.prototype, n, o) : (T.fa(w, n, o), T.fa(u.body, n, o))
        }

        function o(n) {
            var t = n[0];
            t && "SCRIPT" === t.tagName && a(t.src)
        }

        function a(n) {
            n += "", e.test(n) && P.qa(n)
        }
        n.z = t;
        var e = /callback=/
    }(q || (q = {}));
    var R;
    ! function(n) {
        function t(n) {
            return p.e(n.href, "#")
        }

        function r(n) {
            var t = n.target;
            if (!t) {
                var r = f[0];
                r && (t = r.target)
            }
            return t
        }

        function i(n) {
            if (/^https?\:/.test(n.protocol)) {
                var i = r(n);
                if (!i || /^_self$/i.test(i)) {
                    if (t(n) === c && n.hash) return
                }
                P.qa(n.href)
            }
        }

        function o(n) {
            if (!n.defaultPrevented)
                for (var t = n.target || n.srcElement; t;) {
                    var r = t.tagName;
                    if ("A" === r || "AREA" === r) {
                        i(t);
                        break
                    }
                    t = t.parentNode
                }
        }

        function a(n) {
            var t = n.target || n.srcElement;
            s.aa(t) !== m && P.qa(t.action)
        }

        function e() {
            f = u.getElementsByTagName("base"), c = t(l), p.i(u, "click", o), p.i(u, "submit", a);
            var n = y.HTMLFormElement;
            n && T.fa(n.prototype, "submit", function(n, t) {
                var r = t;
                P.qa(r.action), s._(r, ++m)
            })
        }
        var c, f, s = new C,
            m = 0;
        n.z = e
    }(R || (R = {}));
    var W;
    ! function(n) {
        function t() {
            r(), /Mobile/.test(z) && (i(), o() || p.i(u, "DOMContentLoaded", o))
        }

        function r() {
            T.fa(y, "fetch", function(n) {
                var t = n[0],
                    r = n[1];
                "string" == typeof t && P.qa(t) && (r = r || {}, r.credentials && "omit" !== r.credentials || (r.credentials = "same-origin"), n[1] = r)
            })
        }

        function i() {
            var n = y.lib;
            if (n) {
                var t = !/taobao.com$/.test(l.hostname);
                T.fa(n.windvane, "call", function(n) {
                    if ("MtopWVPlugin" === n[0] && "send" === n[1]) {
                        var r = n[2];
                        if (t) {
                            (r.ext_headers || {})["X-Sufei-Token"] = B.oa(!0)
                        } else P.pa()
                    }
                })
            }
        }

        function o() {
            var n = y.jsbridge;
            if (n && (n = n["default"])) return T.fa(n, "pushBack", function(n) {
                "native:" === n[0] && P.pa()
            }), !0
        }
        n.z = t
    }(W || (W = {}));
    var O;
    ! function(n) {
        function t() {
            var n = y.XMLHttpRequest;
            if (n) {
                var t = n.prototype;
                t && r(t) || i()
            }
            o()
        }

        function r(n) {
            var t = T.fa(n, "open", function(n, t) {
                    var r = n[1];
                    a._(t, r)
                }),
                r = T.fa(n, "send", function(n, t) {
                    var r = a.aa(t);
                    P.qa(r)
                });
            return t && r
        }

        function i() {
            T.ga(y, "XMLHttpRequest", function() {
                P.qa()
            })
        }

        function o() {
            var n = /XMLHTTP/i;
            T.ga(y, "ActiveXObject", function(t) {
                var r = t[0];
                r && n.test(r) && P.qa()
            })
        }
        var a = new C;
        n.z = t
    }(O || (O = {}));
    var S;
    ! function(n) {
        function t() {
            E.z(), P.z(), R.z(), O.z(), W.z(), q.z()
        }
        var r = "_sufei_data2";
        ! function() {
            if (!u[r]) {
                u[r] = d;
                try {
                    t()
                } catch (n) {
                    _.w(n)
                }
            }
        }()
    }(S || (S = {}))
}(Object, Array, Function, Math, Date, RegExp, encodeURIComponent, window, document, navigator, setTimeout, location, history, screen, Image);