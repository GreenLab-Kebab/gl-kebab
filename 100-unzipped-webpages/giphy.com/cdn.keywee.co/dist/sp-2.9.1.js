/*! * Snowplow - The world's most powerful web analytics platform
 *
 * @description JavaScript tracker for Snowplow
 * @version     2.9.1
 * @author      Alex Dean, Simon Andersson, Anthon Pang, Fred Blundun, Joshua Beemster
 * @copyright   Anthon Pang, Snowplow Analytics Ltd
 * @license     Simplified BSD
 */
(function() {
    function a(c, g, e) {
        function d(m, j) {
            if (!g[m]) {
                if (!c[m]) {
                    var i = typeof require == "function" && require;
                    if (!j && i) {
                        return i(m, !0)
                    }
                    if (b) {
                        return b(m, !0)
                    }
                    var k = new Error("Cannot find module '" + m + "'");
                    throw k.code = "MODULE_NOT_FOUND", k
                }
                var h = g[m] = {
                    exports: {}
                };
                c[m][0].call(h.exports, function(l) {
                    var o = c[m][1][l];
                    return d(o ? o : l)
                }, h, h.exports, a, c, g, e)
            }
            return g[m].exports
        }
        var b = typeof require == "function" && require;
        for (var f = 0; f < e.length; f++) {
            d(e[f])
        }
        return d
    }
    return a
})()({
    1: [function(b, c, a) {
        this.cookie = function(e, g, d, i, f, h) {
            if (arguments.length > 1) {
                return document.cookie = e + "=" + escape(g) + (d ? "; expires=" + new Date(+new Date() + (d * 1000)).toUTCString() : "") + (i ? "; path=" + i : "") + (f ? "; domain=" + f : "") + (h ? "; secure" : "")
            }
            return unescape((("; " + document.cookie).split("; " + e + "=")[1] || "").split(";")[0])
        }
    }, {}],
    2: [function(c, d, b) {
        var a = {
            utf8: {
                stringToBytes: function(e) {
                    return a.bin.stringToBytes(unescape(encodeURIComponent(e)))
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(a.bin.bytesToString(e)))
                }
            },
            bin: {
                stringToBytes: function(g) {
                    for (var e = [], f = 0; f < g.length; f++) {
                        e.push(g.charCodeAt(f) & 255)
                    }
                    return e
                },
                bytesToString: function(e) {
                    for (var g = [], f = 0; f < e.length; f++) {
                        g.push(String.fromCharCode(e[f]))
                    }
                    return g.join("")
                }
            }
        };
        d.exports = a
    }, {}],
    3: [function(b, c, a) {
        (function() {
            var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                e = {
                    rotl: function(g, f) {
                        return (g << f) | (g >>> (32 - f))
                    },
                    rotr: function(g, f) {
                        return (g << (32 - f)) | (g >>> f)
                    },
                    endian: function(g) {
                        if (g.constructor == Number) {
                            return e.rotl(g, 8) & 16711935 | e.rotl(g, 24) & 4278255360
                        }
                        for (var f = 0; f < g.length; f++) {
                            g[f] = e.endian(g[f])
                        }
                        return g
                    },
                    randomBytes: function(g) {
                        for (var f = []; g > 0; g--) {
                            f.push(Math.floor(Math.random() * 256))
                        }
                        return f
                    },
                    bytesToWords: function(g) {
                        for (var j = [], h = 0, f = 0; h < g.length; h++, f += 8) {
                            j[f >>> 5] |= g[h] << (24 - f % 32)
                        }
                        return j
                    },
                    wordsToBytes: function(h) {
                        for (var g = [], f = 0; f < h.length * 32; f += 8) {
                            g.push((h[f >>> 5] >>> (24 - f % 32)) & 255)
                        }
                        return g
                    },
                    bytesToHex: function(f) {
                        for (var h = [], g = 0; g < f.length; g++) {
                            h.push((f[g] >>> 4).toString(16));
                            h.push((f[g] & 15).toString(16))
                        }
                        return h.join("")
                    },
                    hexToBytes: function(g) {
                        for (var f = [], h = 0; h < g.length; h += 2) {
                            f.push(parseInt(g.substr(h, 2), 16))
                        }
                        return f
                    },
                    bytesToBase64: function(g) {
                        for (var f = [], k = 0; k < g.length; k += 3) {
                            var l = (g[k] << 16) | (g[k + 1] << 8) | g[k + 2];
                            for (var h = 0; h < 4; h++) {
                                if (k * 8 + h * 6 <= g.length * 8) {
                                    f.push(d.charAt((l >>> 6 * (3 - h)) & 63))
                                } else {
                                    f.push("=")
                                }
                            }
                        }
                        return f.join("")
                    },
                    base64ToBytes: function(g) {
                        g = g.replace(/[^A-Z0-9+\/]/ig, "");
                        for (var f = [], h = 0, j = 0; h < g.length; j = ++h % 4) {
                            if (j == 0) {
                                continue
                            }
                            f.push(((d.indexOf(g.charAt(h - 1)) & (Math.pow(2, -2 * j + 8) - 1)) << (j * 2)) | (d.indexOf(g.charAt(h)) >>> (6 - j * 2)))
                        }
                        return f
                    }
                };
            c.exports = e
        })()
    }, {}],
    4: [function(b, c, a) {
        (function(d) {
            var e = (function() {
                var g = "s",
                    h = function(o) {
                        var p = -o.getTimezoneOffset();
                        return (p !== null ? p : 0)
                    },
                    k = function(p, q, o) {
                        var r = new Date();
                        if (p !== undefined) {
                            r.setFullYear(p)
                        }
                        r.setMonth(q);
                        r.setDate(o);
                        return r
                    },
                    i = function(o) {
                        return h(k(o, 0, 2))
                    },
                    l = function(o) {
                        return h(k(o, 5, 2))
                    },
                    f = function(p) {
                        var q = p.getMonth() > 7,
                            t = q ? l(p.getFullYear()) : i(p.getFullYear()),
                            o = h(p),
                            s = t < 0,
                            r = t - o;
                        if (!s && !q) {
                            return r < 0
                        }
                        return r !== 0
                    },
                    j = function() {
                        var o = i(),
                            p = l(),
                            q = o - p;
                        if (q < 0) {
                            return o + ",1"
                        } else {
                            if (q > 0) {
                                return p + ",1," + g
                            }
                        }
                        return o + ",0"
                    },
                    m = function() {
                        var o = j();
                        return new e.TimeZone(e.olson.timezones[o])
                    },
                    n = function(o) {
                        var p = new Date(2010, 6, 15, 1, 0, 0, 0),
                            q = {
                                "America/Denver": new Date(2011, 2, 13, 3, 0, 0, 0),
                                "America/Mazatlan": new Date(2011, 3, 3, 3, 0, 0, 0),
                                "America/Chicago": new Date(2011, 2, 13, 3, 0, 0, 0),
                                "America/Mexico_City": new Date(2011, 3, 3, 3, 0, 0, 0),
                                "America/Asuncion": new Date(2012, 9, 7, 3, 0, 0, 0),
                                "America/Santiago": new Date(2012, 9, 3, 3, 0, 0, 0),
                                "America/Campo_Grande": new Date(2012, 9, 21, 5, 0, 0, 0),
                                "America/Montevideo": new Date(2011, 9, 2, 3, 0, 0, 0),
                                "America/Sao_Paulo": new Date(2011, 9, 16, 5, 0, 0, 0),
                                "America/Los_Angeles": new Date(2011, 2, 13, 8, 0, 0, 0),
                                "America/Santa_Isabel": new Date(2011, 3, 5, 8, 0, 0, 0),
                                "America/Havana": new Date(2012, 2, 10, 2, 0, 0, 0),
                                "America/New_York": new Date(2012, 2, 10, 7, 0, 0, 0),
                                "Europe/Helsinki": new Date(2013, 2, 31, 5, 0, 0, 0),
                                "Pacific/Auckland": new Date(2011, 8, 26, 7, 0, 0, 0),
                                "America/Halifax": new Date(2011, 2, 13, 6, 0, 0, 0),
                                "America/Goose_Bay": new Date(2011, 2, 13, 2, 1, 0, 0),
                                "America/Miquelon": new Date(2011, 2, 13, 5, 0, 0, 0),
                                "America/Godthab": new Date(2011, 2, 27, 1, 0, 0, 0),
                                "Europe/Moscow": p,
                                "Asia/Amman": new Date(2013, 2, 29, 1, 0, 0, 0),
                                "Asia/Beirut": new Date(2013, 2, 31, 2, 0, 0, 0),
                                "Asia/Damascus": new Date(2013, 3, 6, 2, 0, 0, 0),
                                "Asia/Jerusalem": new Date(2013, 2, 29, 5, 0, 0, 0),
                                "Asia/Yekaterinburg": p,
                                "Asia/Omsk": p,
                                "Asia/Krasnoyarsk": p,
                                "Asia/Irkutsk": p,
                                "Asia/Yakutsk": p,
                                "Asia/Vladivostok": p,
                                "Asia/Baku": new Date(2013, 2, 31, 4, 0, 0),
                                "Asia/Yerevan": new Date(2013, 2, 31, 3, 0, 0),
                                "Asia/Kamchatka": p,
                                "Asia/Gaza": new Date(2010, 2, 27, 4, 0, 0),
                                "Africa/Cairo": new Date(2010, 4, 1, 3, 0, 0),
                                "Europe/Minsk": p,
                                "Pacific/Apia": new Date(2010, 10, 1, 1, 0, 0, 0),
                                "Pacific/Fiji": new Date(2010, 11, 1, 0, 0, 0),
                                "Australia/Perth": new Date(2008, 10, 1, 1, 0, 0, 0)
                            };
                        return q[o]
                    };
                return {
                    determine: m,
                    date_is_dst: f,
                    dst_start_for: n
                }
            }());
            e.TimeZone = function(f) {
                var g = {
                        "America/Denver": ["America/Denver", "America/Mazatlan"],
                        "America/Chicago": ["America/Chicago", "America/Mexico_City"],
                        "America/Santiago": ["America/Santiago", "America/Asuncion", "America/Campo_Grande"],
                        "America/Montevideo": ["America/Montevideo", "America/Sao_Paulo"],
                        "Asia/Beirut": ["Asia/Amman", "Asia/Jerusalem", "Asia/Beirut", "Europe/Helsinki", "Asia/Damascus"],
                        "Pacific/Auckland": ["Pacific/Auckland", "Pacific/Fiji"],
                        "America/Los_Angeles": ["America/Los_Angeles", "America/Santa_Isabel"],
                        "America/New_York": ["America/Havana", "America/New_York"],
                        "America/Halifax": ["America/Goose_Bay", "America/Halifax"],
                        "America/Godthab": ["America/Miquelon", "America/Godthab"],
                        "Asia/Dubai": ["Europe/Moscow"],
                        "Asia/Dhaka": ["Asia/Yekaterinburg"],
                        "Asia/Jakarta": ["Asia/Omsk"],
                        "Asia/Shanghai": ["Asia/Krasnoyarsk", "Australia/Perth"],
                        "Asia/Tokyo": ["Asia/Irkutsk"],
                        "Australia/Brisbane": ["Asia/Yakutsk"],
                        "Pacific/Noumea": ["Asia/Vladivostok"],
                        "Pacific/Tarawa": ["Asia/Kamchatka", "Pacific/Fiji"],
                        "Pacific/Tongatapu": ["Pacific/Apia"],
                        "Asia/Baghdad": ["Europe/Minsk"],
                        "Asia/Baku": ["Asia/Yerevan", "Asia/Baku"],
                        "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"]
                    },
                    h = f,
                    j = function() {
                        var k = g[h],
                            m = k.length,
                            l = 0,
                            n = k[0];
                        for (; l < m; l += 1) {
                            n = k[l];
                            if (e.date_is_dst(e.dst_start_for(n))) {
                                h = n;
                                return
                            }
                        }
                    },
                    i = function() {
                        return typeof(g[h]) !== "undefined"
                    };
                if (i()) {
                    j()
                }
                return {
                    name: function() {
                        return h
                    }
                }
            };
            e.olson = {};
            e.olson.timezones = {
                "-720,0": "Pacific/Majuro",
                "-660,0": "Pacific/Pago_Pago",
                "-600,1": "America/Adak",
                "-600,0": "Pacific/Honolulu",
                "-570,0": "Pacific/Marquesas",
                "-540,0": "Pacific/Gambier",
                "-540,1": "America/Anchorage",
                "-480,1": "America/Los_Angeles",
                "-480,0": "Pacific/Pitcairn",
                "-420,0": "America/Phoenix",
                "-420,1": "America/Denver",
                "-360,0": "America/Guatemala",
                "-360,1": "America/Chicago",
                "-360,1,s": "Pacific/Easter",
                "-300,0": "America/Bogota",
                "-300,1": "America/New_York",
                "-270,0": "America/Caracas",
                "-240,1": "America/Halifax",
                "-240,0": "America/Santo_Domingo",
                "-240,1,s": "America/Santiago",
                "-210,1": "America/St_Johns",
                "-180,1": "America/Godthab",
                "-180,0": "America/Argentina/Buenos_Aires",
                "-180,1,s": "America/Montevideo",
                "-120,0": "America/Noronha",
                "-120,1": "America/Noronha",
                "-60,1": "Atlantic/Azores",
                "-60,0": "Atlantic/Cape_Verde",
                "0,0": "UTC",
                "0,1": "Europe/London",
                "60,1": "Europe/Berlin",
                "60,0": "Africa/Lagos",
                "60,1,s": "Africa/Windhoek",
                "120,1": "Asia/Beirut",
                "120,0": "Africa/Johannesburg",
                "180,0": "Asia/Baghdad",
                "180,1": "Europe/Moscow",
                "210,1": "Asia/Tehran",
                "240,0": "Asia/Dubai",
                "240,1": "Asia/Baku",
                "270,0": "Asia/Kabul",
                "300,1": "Asia/Yekaterinburg",
                "300,0": "Asia/Karachi",
                "330,0": "Asia/Kolkata",
                "345,0": "Asia/Kathmandu",
                "360,0": "Asia/Dhaka",
                "360,1": "Asia/Omsk",
                "390,0": "Asia/Rangoon",
                "420,1": "Asia/Krasnoyarsk",
                "420,0": "Asia/Jakarta",
                "480,0": "Asia/Shanghai",
                "480,1": "Asia/Irkutsk",
                "525,0": "Australia/Eucla",
                "525,1,s": "Australia/Eucla",
                "540,1": "Asia/Yakutsk",
                "540,0": "Asia/Tokyo",
                "570,0": "Australia/Darwin",
                "570,1,s": "Australia/Adelaide",
                "600,0": "Australia/Brisbane",
                "600,1": "Asia/Vladivostok",
                "600,1,s": "Australia/Sydney",
                "630,1,s": "Australia/Lord_Howe",
                "660,1": "Asia/Kamchatka",
                "660,0": "Pacific/Noumea",
                "690,0": "Pacific/Norfolk",
                "720,1,s": "Pacific/Auckland",
                "720,0": "Pacific/Tarawa",
                "765,1,s": "Pacific/Chatham",
                "780,0": "Pacific/Tongatapu",
                "780,1,s": "Pacific/Apia",
                "840,0": "Pacific/Kiritimati"
            };
            if (typeof a !== "undefined") {
                a.jstz = e
            } else {
                d.jstz = e
            }
        })(this)
    }, {}],
    5: [function(b, c, a) {
        (function() {
            var h = this;

            function f(q, m) {
                var j = q.length,
                    p = m ^ j,
                    o = 0,
                    n;
                while (j >= 4) {
                    n = ((q.charCodeAt(o) & 255)) | ((q.charCodeAt(++o) & 255) << 8) | ((q.charCodeAt(++o) & 255) << 16) | ((q.charCodeAt(++o) & 255) << 24);
                    n = (((n & 65535) * 1540483477) + ((((n >>> 16) * 1540483477) & 65535) << 16));
                    n ^= n >>> 24;
                    n = (((n & 65535) * 1540483477) + ((((n >>> 16) * 1540483477) & 65535) << 16));
                    p = (((p & 65535) * 1540483477) + ((((p >>> 16) * 1540483477) & 65535) << 16)) ^ n;
                    j -= 4;
                    ++o
                }
                switch (j) {
                    case 3:
                        p ^= (q.charCodeAt(o + 2) & 255) << 16;
                    case 2:
                        p ^= (q.charCodeAt(o + 1) & 255) << 8;
                    case 1:
                        p ^= (q.charCodeAt(o) & 255);
                        p = (((p & 65535) * 1540483477) + ((((p >>> 16) * 1540483477) & 65535) << 16))
                }
                p ^= p >>> 13;
                p = (((p & 65535) * 1540483477) + ((((p >>> 16) * 1540483477) & 65535) << 16));
                p ^= p >>> 15;
                return p >>> 0
            }

            function e(s, o) {
                var t, u, q, k, n, j, l, r, p, m;
                t = s.length & 3;
                u = s.length - t;
                q = o;
                n = 3432918353;
                l = 461845907;
                m = 0;
                while (m < u) {
                    p = ((s.charCodeAt(m) & 255)) | ((s.charCodeAt(++m) & 255) << 8) | ((s.charCodeAt(++m) & 255) << 16) | ((s.charCodeAt(++m) & 255) << 24);
                    ++m;
                    p = ((((p & 65535) * n) + ((((p >>> 16) * n) & 65535) << 16))) & 4294967295;
                    p = (p << 15) | (p >>> 17);
                    p = ((((p & 65535) * l) + ((((p >>> 16) * l) & 65535) << 16))) & 4294967295;
                    q ^= p;
                    q = (q << 13) | (q >>> 19);
                    k = ((((q & 65535) * 5) + ((((q >>> 16) * 5) & 65535) << 16))) & 4294967295;
                    q = (((k & 65535) + 27492) + ((((k >>> 16) + 58964) & 65535) << 16))
                }
                p = 0;
                switch (t) {
                    case 3:
                        p ^= (s.charCodeAt(m + 2) & 255) << 16;
                    case 2:
                        p ^= (s.charCodeAt(m + 1) & 255) << 8;
                    case 1:
                        p ^= (s.charCodeAt(m) & 255);
                        p = (((p & 65535) * n) + ((((p >>> 16) * n) & 65535) << 16)) & 4294967295;
                        p = (p << 15) | (p >>> 17);
                        p = (((p & 65535) * l) + ((((p >>> 16) * l) & 65535) << 16)) & 4294967295;
                        q ^= p
                }
                q ^= s.length;
                q ^= q >>> 16;
                q = (((q & 65535) * 2246822507) + ((((q >>> 16) * 2246822507) & 65535) << 16)) & 4294967295;
                q ^= q >>> 13;
                q = ((((q & 65535) * 3266489909) + ((((q >>> 16) * 3266489909) & 65535) << 16))) & 4294967295;
                q ^= q >>> 16;
                return q >>> 0
            }
            var d = e;
            d.v2 = f;
            d.v3 = e;
            if (typeof(c) != "undefined") {
                c.exports = d
            } else {
                var g = h.murmur;
                d.noConflict = function() {
                    h.murmur = g;
                    return d
                };
                h.murmur = d
            }
        }())
    }, {}],
    6: [function(b, c, a) {
        (function() {
            var g = b("crypt"),
                d = b("charenc").utf8,
                e = b("charenc").bin,
                h = function(q) {
                    if (q.constructor == String) {
                        q = d.stringToBytes(q)
                    }
                    var y = g.bytesToWords(q),
                        z = q.length * 8,
                        r = [],
                        u = 1732584193,
                        s = -271733879,
                        p = -1732584194,
                        o = 271733878,
                        k = -1009589776;
                    y[z >> 5] |= 128 << (24 - z % 32);
                    y[((z + 64 >>> 9) << 4) + 15] = z;
                    for (var B = 0; B < y.length; B += 16) {
                        var G = u,
                            F = s,
                            E = p,
                            D = o,
                            C = k;
                        for (var A = 0; A < 80; A++) {
                            if (A < 16) {
                                r[A] = y[B + A]
                            } else {
                                var x = r[A - 3] ^ r[A - 8] ^ r[A - 14] ^ r[A - 16];
                                r[A] = (x << 1) | (x >>> 31)
                            }
                            var v = ((u << 5) | (u >>> 27)) + k + (r[A] >>> 0) + (A < 20 ? (s & p | ~s & o) + 1518500249 : A < 40 ? (s ^ p ^ o) + 1859775393 : A < 60 ? (s & p | s & o | p & o) - 1894007588 : (s ^ p ^ o) - 899497514);
                            k = o;
                            o = p;
                            p = (s << 30) | (s >>> 2);
                            s = u;
                            u = v
                        }
                        u += G;
                        s += F;
                        p += E;
                        o += D;
                        k += C
                    }
                    return [u, s, p, o, k]
                },
                f = function(k, i) {
                    var j = g.wordsToBytes(h(k));
                    return i && i.asBytes ? j : i && i.asString ? e.bytesToString(j) : g.bytesToHex(j)
                };
            f._blocksize = 16;
            f._digestsize = 20;
            c.exports = f
        })()
    }, {
        charenc: 2,
        crypt: 3
    }],
    7: [function(b, c, a) {
        Object.defineProperty(a, "__esModule", {
            value: true
        });
        var d = b("./lib/core");
        a.trackerCore = d.trackerCore
    }, {
        "./lib/core": 9
    }],
    8: [function(c, d, a) {
        Object.defineProperty(a, "__esModule", {
            value: true
        });

        function b(n) {
            var j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var h, g, f, s, q, p, o, t, m = 0,
                u = 0,
                l, k = [];
            if (!n) {
                return n
            }
            n = unescape(encodeURIComponent(n));
            do {
                h = n.charCodeAt(m++);
                g = n.charCodeAt(m++);
                f = n.charCodeAt(m++);
                t = h << 16 | g << 8 | f;
                s = t >> 18 & 63;
                q = t >> 12 & 63;
                p = t >> 6 & 63;
                o = t & 63;
                k[u++] = j.charAt(s) + j.charAt(q) + j.charAt(p) + j.charAt(o)
            } while (m < n.length);
            l = k.join("");
            var e = n.length % 3;
            return (e ? l.slice(0, e - 3) : l) + "===".slice(e || 3)
        }
        a.base64encode = b
    }, {}],
    9: [function(b, d, a) {
        Object.defineProperty(a, "__esModule", {
            value: true
        });
        var e = b("uuid");
        var g = b("./payload");

        function c(h) {
            if (h == null) {
                return {
                    type: "dtm",
                    value: new Date().getTime()
                }
            } else {
                if (typeof h === "number") {
                    return {
                        type: "dtm",
                        value: h
                    }
                } else {
                    if (h.type === "ttm") {
                        return {
                            type: "ttm",
                            value: h.value
                        }
                    } else {
                        return {
                            type: "dtm",
                            value: (h.value || new Date().getTime())
                        }
                    }
                }
            }
        }

        function f(j, o) {
            if (typeof j === "undefined") {
                j = true
            }
            var h = {};

            function l(p, q) {
                h[p] = q
            }

            function k(r, s) {
                var q = {};
                s = s || {};
                for (var p in r) {
                    if (s[p] || (r[p] !== null && typeof r[p] !== "undefined")) {
                        q[p] = r[p]
                    }
                }
                return q
            }

            function n(p) {
                if (p && p.length) {
                    return {
                        schema: "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0",
                        data: p
                    }
                }
            }

            function i(t, q, p) {
                t.addDict(h);
                t.add("eid", e.v4());
                var s = c(p);
                t.add(s.type, s.value.toString());
                var r = n(q);
                if (r !== undefined) {
                    t.addJson("cx", "co", r)
                }
                if (typeof o === "function") {
                    o(t)
                }
                return t
            }

            function m(r, q, p) {
                var t = g.payloadBuilder(j);
                var s = {
                    schema: "iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0",
                    data: r
                };
                t.add("e", "ue");
                t.addJson("ue_px", "ue_pr", s);
                return i(t, q, p)
            }
            return {
                setBase64Encoding: function(p) {
                    j = p
                },
                addPayloadPair: l,
                addPayloadDict: function(q) {
                    for (var p in q) {
                        if (q.hasOwnProperty(p)) {
                            h[p] = q[p]
                        }
                    }
                },
                resetPayloadPairs: function(p) {
                    h = g.isJson(p) ? p : {}
                },
                setTrackerVersion: function(p) {
                    l("tv", p)
                },
                setTrackerNamespace: function(p) {
                    l("tna", p)
                },
                setAppId: function(p) {
                    l("aid", p)
                },
                setPlatform: function(p) {
                    l("p", p)
                },
                setUserId: function(p) {
                    l("uid", p)
                },
                setScreenResolution: function(q, p) {
                    l("res", q + "x" + p)
                },
                setViewport: function(q, p) {
                    l("vp", q + "x" + p)
                },
                setColorDepth: function(p) {
                    l("cd", p)
                },
                setTimezone: function(p) {
                    l("tz", p)
                },
                setLang: function(p) {
                    l("lang", p)
                },
                setIpAddress: function(p) {
                    l("ip", p)
                },
                trackUnstructEvent: m,
                trackSelfDescribingEvent: m,
                trackPageView: function(t, s, r, q, p) {
                    var u = g.payloadBuilder(j);
                    u.add("e", "pv");
                    u.add("url", t);
                    u.add("page", s);
                    u.add("refr", r);
                    return i(u, q, p)
                },
                trackPagePing: function(r, s, w, x, t, q, y, p, u) {
                    var v = g.payloadBuilder(j);
                    v.add("e", "pp");
                    v.add("url", r);
                    v.add("page", s);
                    v.add("refr", w);
                    v.add("pp_mix", x.toString());
                    v.add("pp_max", t.toString());
                    v.add("pp_miy", q.toString());
                    v.add("pp_may", y.toString());
                    return i(v, p, u)
                },
                trackStructEvent: function(s, v, q, u, t, r, p) {
                    var w = g.payloadBuilder(j);
                    w.add("e", "se");
                    w.add("se_ca", s);
                    w.add("se_ac", v);
                    w.add("se_la", q);
                    w.add("se_pr", u);
                    w.add("se_va", (t == null ? undefined : t.toString()));
                    return i(w, r, p)
                },
                trackEcommerceTransaction: function(w, v, t, s, p, x, q, u, z, r, y) {
                    var A = g.payloadBuilder(j);
                    A.add("e", "tr");
                    A.add("tr_id", w);
                    A.add("tr_af", v);
                    A.add("tr_tt", t);
                    A.add("tr_tx", s);
                    A.add("tr_sh", p);
                    A.add("tr_ci", x);
                    A.add("tr_st", q);
                    A.add("tr_co", u);
                    A.add("tr_cu", z);
                    return i(A, r, y)
                },
                trackEcommerceTransactionItem: function(s, w, p, q, u, t, x, r, v) {
                    var y = g.payloadBuilder(j);
                    y.add("e", "ti");
                    y.add("ti_id", s);
                    y.add("ti_sk", w);
                    y.add("ti_nm", p);
                    y.add("ti_ca", q);
                    y.add("ti_pr", u);
                    y.add("ti_qu", t);
                    y.add("ti_cu", x);
                    return i(y, r, v)
                },
                trackScreenView: function(q, s, r, p) {
                    return m({
                        schema: "iglu:com.snowplowanalytics.snowplow/screen_view/jsonschema/1-0-0",
                        data: k({
                            name: q,
                            id: s
                        })
                    }, r, p)
                },
                trackLinkClick: function(w, r, t, q, v, u, p) {
                    var s = {
                        schema: "iglu:com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1",
                        data: k({
                            targetUrl: w,
                            elementId: r,
                            elementClasses: t,
                            elementTarget: q,
                            elementContent: v
                        })
                    };
                    return m(s, u, p)
                },
                trackAdImpression: function(t, p, r, s, z, u, v, y, q, x) {
                    var w = {
                        schema: "iglu:com.snowplowanalytics.snowplow/ad_impression/jsonschema/1-0-0",
                        data: k({
                            impressionId: t,
                            costModel: p,
                            cost: r,
                            targetUrl: s,
                            bannerId: z,
                            zoneId: u,
                            advertiserId: v,
                            campaignId: y
                        })
                    };
                    return m(w, q, x)
                },
                trackAdClick: function(r, x, p, s, A, u, t, v, z, q, y) {
                    var w = {
                        schema: "iglu:com.snowplowanalytics.snowplow/ad_click/jsonschema/1-0-0",
                        data: k({
                            targetUrl: r,
                            clickId: x,
                            costModel: p,
                            cost: s,
                            bannerId: A,
                            zoneId: u,
                            impressionId: t,
                            advertiserId: v,
                            campaignId: z
                        })
                    };
                    return m(w, q, y)
                },
                trackAdConversion: function(A, p, s, r, u, y, z, t, x, q, w) {
                    var v = {
                        schema: "iglu:com.snowplowanalytics.snowplow/ad_conversion/jsonschema/1-0-0",
                        data: k({
                            conversionId: A,
                            costModel: p,
                            cost: s,
                            category: r,
                            action: u,
                            property: y,
                            initialValue: z,
                            advertiserId: t,
                            campaignId: x
                        })
                    };
                    return m(v, q, w)
                },
                trackSocialInteraction: function(t, s, u, r, p) {
                    var q = {
                        schema: "iglu:com.snowplowanalytics.snowplow/social_interaction/jsonschema/1-0-0",
                        data: k({
                            action: t,
                            network: s,
                            target: u
                        })
                    };
                    return m(q, r, p)
                },
                trackAddToCart: function(w, r, t, u, v, q, s, p) {
                    return m({
                        schema: "iglu:com.snowplowanalytics.snowplow/add_to_cart/jsonschema/1-0-0",
                        data: k({
                            sku: w,
                            name: r,
                            category: t,
                            unitPrice: u,
                            quantity: v,
                            currency: q
                        })
                    }, s, p)
                },
                trackRemoveFromCart: function(w, r, t, u, v, q, s, p) {
                    return m({
                        schema: "iglu:com.snowplowanalytics.snowplow/remove_from_cart/jsonschema/1-0-0",
                        data: k({
                            sku: w,
                            name: r,
                            category: t,
                            unitPrice: u,
                            quantity: v,
                            currency: q
                        })
                    }, s, p)
                },
                trackFormChange: function(v, q, w, t, r, u, s, p) {
                    return m({
                        schema: "iglu:com.snowplowanalytics.snowplow/change_form/jsonschema/1-0-0",
                        data: k({
                            formId: v,
                            elementId: q,
                            nodeName: w,
                            type: t,
                            elementClasses: r,
                            value: u
                        }, {
                            value: true
                        })
                    }, s, p)
                },
                trackFormSubmission: function(t, r, s, q, p) {
                    return m({
                        schema: "iglu:com.snowplowanalytics.snowplow/submit_form/jsonschema/1-0-0",
                        data: k({
                            formId: t,
                            formClasses: r,
                            elements: s
                        })
                    }, q, p)
                },
                trackSiteSearch: function(u, t, q, r, s, p) {
                    return m({
                        schema: "iglu:com.snowplowanalytics.snowplow/site_search/jsonschema/1-0-0",
                        data: k({
                            terms: u,
                            filters: t,
                            totalResults: q,
                            pageResults: r
                        })
                    }, s, p)
                },
                trackConsentWithdrawn: function(t, w, q, r, u, s, p) {
                    var v = {
                        schema: "iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0",
                        data: k({
                            id: w,
                            version: q,
                            name: r,
                            description: u
                        })
                    };
                    return m({
                        schema: "iglu:com.snowplowanalytics.snowplow/consent_withdrawn/jsonschema/1-0-0",
                        data: k({
                            all: t
                        })
                    }, v.data && s ? s.concat([v]) : s, p)
                },
                trackConsentGranted: function(w, q, r, u, t, s, p) {
                    var v = {
                        schema: "iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0",
                        data: k({
                            id: w,
                            version: q,
                            name: r,
                            description: u,
                        })
                    };
                    return m({
                        schema: "iglu:com.snowplowanalytics.snowplow/consent_granted/jsonschema/1-0-0",
                        data: k({
                            expiry: t,
                        })
                    }, s ? s.concat([v]) : [v], p)
                }
            }
        }
        a.trackerCore = f
    }, {
        "./payload": 10,
        uuid: 12
    }],
    10: [function(f, g, c) {
        Object.defineProperty(c, "__esModule", {
            value: true
        });
        var a = f("./base64");

        function e(j) {
            if (!j) {
                return j
            }
            var i = a.base64encode(j);
            return i.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
        }

        function d(j) {
            if (!h(j)) {
                return false
            }
            for (var i in j) {
                if (j.hasOwnProperty(i)) {
                    return true
                }
            }
            return false
        }
        c.isNonEmptyJson = d;

        function h(i) {
            return (typeof i !== "undefined" && i !== null && (i.constructor === {}.constructor || i.constructor === [].constructor))
        }
        c.isJson = h;

        function b(j) {
            var m = {};
            var l = function(n, o) {
                if (o != null && o !== "") {
                    m[n] = o
                }
            };
            var i = function(o) {
                for (var n in o) {
                    if (o.hasOwnProperty(n)) {
                        l(n, o[n])
                    }
                }
            };
            var k = function(n, o, p) {
                if (d(p)) {
                    var q = JSON.stringify(p);
                    if (j) {
                        l(n, e(q))
                    } else {
                        l(o, q)
                    }
                }
            };
            return {
                add: l,
                addDict: i,
                addJson: k,
                build: function() {
                    return m
                }
            }
        }
        c.payloadBuilder = b
    }, {
        "./base64": 8
    }],
    11: [function(b, c, a) {
        (function(i) {
            var e;
            var h = i.crypto || i.msCrypto;
            if (h && h.getRandomValues) {
                var d = new Uint8Array(16);
                e = function f() {
                    h.getRandomValues(d);
                    return d
                }
            }
            if (!e) {
                var g = new Array(16);
                e = function() {
                    for (var j = 0, k; j < 16; j++) {
                        if ((j & 3) === 0) {
                            k = Math.random() * 4294967296
                        }
                        g[j] = k >>> ((j & 3) << 3) & 255
                    }
                    return g
                }
            }
            c.exports = e
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {}],
    12: [function(c, b, g) {
        var d = c("./rng");
        var p = [];
        var h = {};
        for (var j = 0; j < 256; j++) {
            p[j] = (j + 256).toString(16).substr(1);
            h[p[j]] = j
        }

        function e(w, t, x) {
            var u = (t && x) || 0,
                v = 0;
            t = t || [];
            w.toLowerCase().replace(/[0-9a-f]{2}/g, function(i) {
                if (v < 16) {
                    t[u + v++] = h[i]
                }
            });
            while (v < 16) {
                t[u + v++] = 0
            }
            return t
        }

        function l(s, u) {
            var t = u || 0,
                v = p;
            return v[s[t++]] + v[s[t++]] + v[s[t++]] + v[s[t++]] + "-" + v[s[t++]] + v[s[t++]] + "-" + v[s[t++]] + v[s[t++]] + "-" + v[s[t++]] + v[s[t++]] + "-" + v[s[t++]] + v[s[t++]] + v[s[t++]] + v[s[t++]] + v[s[t++]] + v[s[t++]]
        }
        var r = d();
        var o = [r[0] | 1, r[1], r[2], r[3], r[4], r[5]];
        var f = (r[6] << 8 | r[7]) & 16383;
        var m = 0,
            k = 0;

        function q(E, u, y) {
            var z = u && y || 0;
            var A = u || [];
            E = E || {};
            var x = E.clockseq !== undefined ? E.clockseq : f;
            var s = E.msecs !== undefined ? E.msecs : new Date().getTime();
            var D = E.nsecs !== undefined ? E.nsecs : k + 1;
            var t = (s - m) + (D - k) / 10000;
            if (t < 0 && E.clockseq === undefined) {
                x = x + 1 & 16383
            }
            if ((t < 0 || s > m) && E.nsecs === undefined) {
                D = 0
            }
            if (D >= 10000) {
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
            }
            m = s;
            k = D;
            f = x;
            s += 12219292800000;
            var C = ((s & 268435455) * 10000 + D) % 4294967296;
            A[z++] = C >>> 24 & 255;
            A[z++] = C >>> 16 & 255;
            A[z++] = C >>> 8 & 255;
            A[z++] = C & 255;
            var B = (s / 4294967296 * 10000) & 268435455;
            A[z++] = B >>> 8 & 255;
            A[z++] = B & 255;
            A[z++] = B >>> 24 & 15 | 16;
            A[z++] = B >>> 16 & 255;
            A[z++] = x >>> 8 | 128;
            A[z++] = x & 255;
            var w = E.node || o;
            for (var v = 0; v < 6; v++) {
                A[z + v] = w[v]
            }
            return u ? u : l(A)
        }

        function n(t, s, x) {
            var u = s && x || 0;
            if (typeof(t) == "string") {
                s = t == "binary" ? new Array(16) : null;
                t = null
            }
            t = t || {};
            var w = t.random || (t.rng || d)();
            w[6] = (w[6] & 15) | 64;
            w[8] = (w[8] & 63) | 128;
            if (s) {
                for (var v = 0; v < 16; v++) {
                    s[u + v] = w[v]
                }
            }
            return s || l(w)
        }
        var a = n;
        a.v1 = q;
        a.v4 = n;
        a.parse = e;
        a.unparse = l;
        b.exports = a
    }, {
        "./rng": 11
    }],
    13: [function(d, e, a) {
        var g = d("./lib_managed/lodash"),
            f = d("./lib/helpers"),
            c = typeof a !== "undefined" ? a : this,
            b = window;
        c.errorManager = function(i) {
            function h(o, l, p, n, m, q) {
                var k = (m && m.stack) ? m.stack : null;
                i.trackSelfDescribingEvent({
                    schema: "iglu:com.snowplowanalytics.snowplow/application_error/jsonschema/1-0-1",
                    data: {
                        programmingLanguage: "JAVASCRIPT",
                        message: o || "JS Exception. Browser doesn't support ErrorEvent API",
                        stackTrace: k,
                        lineNumber: p,
                        lineColumn: n,
                        fileName: l
                    }
                }, q)
            }

            function j(n, k, m) {
                var l;
                if (g.isFunction(m)) {
                    l = k.concat(m(n))
                } else {
                    l = k
                }
                h(n.message, n.filename, n.lineno, n.colno, n.error, l)
            }
            return {
                trackError: h,
                enableErrorTracking: function(k, n, m) {
                    function l(o) {
                        if (g.isFunction(k) && k(o) || k == null) {
                            j(o, m, n)
                        }
                    }
                    f.addEventListener(b, "error", l, true)
                }
            }
        }
    }, {
        "./lib/helpers": 18,
        "./lib_managed/lodash": 20
    }],
    14: [function(c, d, a) {
        var f = c("./lib_managed/lodash"),
            e = c("./lib/helpers"),
            b = typeof a !== "undefined" ? a : this;
        b.getFormTrackingManager = function(k, j, m) {
            var q = ["textarea", "input", "select"];
            var g = j + "form";
            var r = function() {
                return true
            };
            var i = function() {
                return true
            };
            var p = function(t) {
                return t
            };

            function o(t) {
                return t[f.find(["name", "id", "type", "nodeName"], function(u) {
                    return t[u] && typeof t[u] === "string"
                })]
            }

            function s(t) {
                while (t && t.nodeName && t.nodeName.toUpperCase() !== "HTML" && t.nodeName.toUpperCase() !== "FORM") {
                    t = t.parentNode
                }
                if (t && t.nodeName && t.nodeName.toUpperCase() === "FORM") {
                    return o(t)
                }
            }

            function h(u) {
                var t = [];
                f.forEach(q, function(v) {
                    var w = f.filter(u.getElementsByTagName(v), function(x) {
                        return x.hasOwnProperty(g)
                    });
                    f.forEach(w, function(y) {
                        if (y.type === "submit") {
                            return
                        }
                        var x = {
                            name: o(y),
                            value: y.value,
                            nodeName: y.nodeName
                        };
                        if (y.type && y.nodeName.toUpperCase() === "INPUT") {
                            x.type = y.type
                        }
                        if ((y.type === "checkbox" || y.type === "radio") && !y.checked) {
                            x.value = null
                        }
                        t.push(x)
                    })
                });
                return t
            }

            function l(t) {
                return function(x) {
                    var u = x.target;
                    var v = (u.nodeName && u.nodeName.toUpperCase() === "INPUT") ? u.type : null;
                    var w = (u.type === "checkbox" && !u.checked) ? null : p(u.value);
                    k.trackFormChange(s(u), o(u), u.nodeName, v, e.getCssClasses(u), w, m(t))
                }
            }

            function n(t) {
                return function(w) {
                    var v = w.target;
                    var u = h(v);
                    f.forEach(u, function(x) {
                        x.value = p(x.value)
                    });
                    k.trackFormSubmission(o(v), e.getCssClasses(v), u, m(t))
                }
            }
            return {
                configureFormTracking: function(t) {
                    if (t) {
                        r = e.getFilter(t.forms, true);
                        i = e.getFilter(t.fields, false);
                        p = e.getTransform(t.fields)
                    }
                },
                addFormListeners: function(t) {
                    f.forEach(document.getElementsByTagName("form"), function(u) {
                        if (r(u) && !u[g]) {
                            f.forEach(q, function(v) {
                                f.forEach(u.getElementsByTagName(v), function(w) {
                                    if (i(w) && !w[g] && w.type.toLowerCase() !== "password") {
                                        e.addEventListener(w, "change", l(t), false);
                                        w[g] = true
                                    }
                                })
                            });
                            e.addEventListener(u, "submit", n(t));
                            u[g] = true
                        }
                    })
                }
            }
        }
    }, {
        "./lib/helpers": 18,
        "./lib_managed/lodash": 20
    }],
    15: [function(b, c, a) {
        (function() {
            var f = b("./lib_managed/lodash"),
                e = b("./lib/helpers"),
                d = typeof a !== "undefined" ? a : this;
            d.InQueueManager = function(g, n, m, j, o) {
                var h = {};

                function q(u) {
                    var v = [];
                    if (!u || u.length === 0) {
                        v = f.map(h)
                    } else {
                        for (var t = 0; t < u.length; t++) {
                            if (h.hasOwnProperty(u[t])) {
                                v.push(h[u[t]])
                            } else {
                                e.warn('Warning: Tracker namespace "' + u[t] + '" not configured')
                            }
                        }
                    }
                    if (v.length === 0) {
                        e.warn("Warning: No tracker configured")
                    }
                    return v
                }

                function k(u, v, t) {
                    e.warn(u + " is deprecated. Set the collector when a new tracker instance using newTracker.");
                    var i;
                    if (f.isUndefined(t)) {
                        i = "sp"
                    } else {
                        i = t
                    }
                    p(i);
                    h[i][u](v)
                }

                function p(t, u, i) {
                    i = i || {};
                    if (!h.hasOwnProperty(t)) {
                        h[t] = new g(o, t, n, m, i);
                        h[t].setCollectorUrl(u)
                    } else {
                        e.warn("Tracker namespace " + t + " already exists.")
                    }
                }

                function s(v) {
                    var u = v.split(":"),
                        i = u[0],
                        t = (u.length > 1) ? u[1].split(";") : [];
                    return [i, t]
                }

                function r() {
                    var v, u, x, w, t, A, y, z;
                    for (v = 0; v < arguments.length; v += 1) {
                        w = arguments[v];
                        t = Array.prototype.shift.call(w);
                        if (f.isFunction(t)) {
                            t.apply(h, w);
                            continue
                        }
                        A = s(t);
                        x = A[0];
                        y = A[1];
                        if (x === "newTracker") {
                            p(w[0], w[1], w[2]);
                            continue
                        }
                        if ((x === "setCollectorCf" || x === "setCollectorUrl") && (!y || y.length === 0)) {
                            k(x, w[0], w[1]);
                            continue
                        }
                        z = q(y);
                        for (u = 0; u < z.length; u++) {
                            z[u][x].apply(z[u], w)
                        }
                    }
                }
                for (var l = 0; l < j.length; l++) {
                    r(j[l])
                }
                return {
                    push: r
                }
            }
        }())
    }, {
        "./lib/helpers": 18,
        "./lib_managed/lodash": 20
    }],
    16: [function(d, e, b) {
        var g = d("./snowplow"),
            f, a, c = window;
        if (c.GlobalSnowplowNamespace && c.GlobalSnowplowNamespace.length > 0) {
            f = c.GlobalSnowplowNamespace.shift();
            a = c[f];
            a.q = new g.Snowplow(a.q, f)
        } else {
            c._snaq = c._snaq || [];
            c._snaq = new g.Snowplow(c._snaq, "_snaq")
        }
    }, {
        "./snowplow": 23
    }],
    17: [function(b, c, a) {
        (function() {
            var l = b("../lib_managed/lodash"),
                k = b("murmurhash").v3,
                g = b("jstimezonedetect").jstz.determine(),
                e = b("browser-cookie-lite"),
                h = typeof a !== "undefined" ? a : this,
                j = window,
                d = navigator,
                i = screen,
                f = document;
            h.hasSessionStorage = function() {
                try {
                    return !!j.sessionStorage
                } catch (m) {
                    return true
                }
            };
            h.hasLocalStorage = function() {
                try {
                    return !!j.localStorage
                } catch (m) {
                    return true
                }
            };
            h.localStorageAccessible = function() {
                var m = "modernizr";
                if (!h.hasLocalStorage()) {
                    return false
                }
                try {
                    j.localStorage.setItem(m, m);
                    j.localStorage.removeItem(m);
                    return true
                } catch (n) {
                    return false
                }
            };
            h.hasCookies = function(m) {
                var n = m || "testcookie";
                if (l.isUndefined(d.cookieEnabled)) {
                    e.cookie(n, "1");
                    return e.cookie(n) === "1" ? "1" : "0"
                }
                return d.cookieEnabled ? "1" : "0"
            };
            h.detectSignature = function(r) {
                var p = [d.userAgent, [i.height, i.width, i.colorDepth].join("x"), (new Date()).getTimezoneOffset(), h.hasSessionStorage(), h.hasLocalStorage()];
                var m = [];
                if (d.plugins) {
                    for (var q = 0; q < d.plugins.length; q++) {
                        if (d.plugins[q]) {
                            var n = [];
                            for (var o = 0; o < d.plugins[q].length; o++) {
                                n.push([d.plugins[q][o].type, d.plugins[q][o].suffixes])
                            }
                            m.push([d.plugins[q].name + "::" + d.plugins[q].description, n.join("~")])
                        }
                    }
                }
                return k(p.join("###") + "###" + m.sort().join(";"), r)
            };
            h.detectTimezone = function() {
                return (typeof(g) === "undefined") ? "" : g.name()
            };
            h.detectViewport = function() {
                var p = j,
                    n = "inner";
                if (!("innerWidth" in j)) {
                    n = "client";
                    p = f.documentElement || f.body
                }
                var o = p[n + "Width"];
                var m = p[n + "Height"];
                if (o >= 0 && m >= 0) {
                    return o + "x" + m
                } else {
                    return null
                }
            };
            h.detectDocumentSize = function() {
                var q = f.documentElement,
                    o = f.body,
                    p = o ? Math.max(o.offsetHeight, o.scrollHeight) : 0;
                var m = Math.max(q.clientWidth, q.offsetWidth, q.scrollWidth);
                var n = Math.max(q.clientHeight, q.offsetHeight, q.scrollHeight, p);
                return isNaN(m) || isNaN(n) ? "" : m + "x" + n
            };
            h.detectBrowserFeatures = function(o, n) {
                var m, r, t = {
                        pdf: "application/pdf",
                        qt: "video/quicktime",
                        realp: "audio/x-pn-realaudio-plugin",
                        wma: "application/x-mplayer2",
                        dir: "application/x-director",
                        fla: "application/x-shockwave-flash",
                        java: "application/x-java-vm",
                        gears: "application/x-googlegears",
                        ag: "application/x-silverlight"
                    },
                    p = {};
                if (d.mimeTypes && d.mimeTypes.length) {
                    for (m in t) {
                        if (Object.prototype.hasOwnProperty.call(t, m)) {
                            r = d.mimeTypes[t[m]];
                            p[m] = (r && r.enabledPlugin) ? "1" : "0"
                        }
                    }
                }
                if (d.constructor === window.Navigator && typeof d.javaEnabled !== "unknown" && !l.isUndefined(d.javaEnabled) && d.javaEnabled()) {
                    p.java = "1"
                }
                if (l.isFunction(j.GearsFactory)) {
                    p.gears = "1"
                }
                p.res = i.width + "x" + i.height;
                p.cd = i.colorDepth;
                if (o) {
                    p.cookie = h.hasCookies(n)
                }
                var q = {
                    update: function s() {
                        if (typeof window !== "undefined" && typeof window.addEventListener === "function") {
                            var w = false;
                            var v = Object.defineProperty({}, "passive", {
                                get: function u() {
                                    w = true
                                }
                            });
                            var x = function x() {};
                            window.addEventListener("testPassiveEventSupport", x, v);
                            window.removeEventListener("testPassiveEventSupport", x, v);
                            q.hasSupport = w
                        }
                    }
                };
                q.update();
                if (q.hasSupport === true) {
                    p.passive = "1"
                }
                p.wheel = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll";
                return p
            }
        }())
    }, {
        "../lib_managed/lodash": 20,
        "browser-cookie-lite": 1,
        jstimezonedetect: 4,
        murmurhash: 5
    }],
    18: [function(b, c, a) {
        (function() {
            var g = b("../lib_managed/lodash"),
                e = b("browser-cookie-lite"),
                d = typeof a !== "undefined" ? a : this;
            d.fixupTitle = function(i) {
                if (!g.isString(i)) {
                    i = i.text || "";
                    var h = document.getElementsByTagName("title");
                    if (h && !g.isUndefined(h[0])) {
                        i = h[0].text
                    }
                }
                return i
            };
            d.getHostName = function(h) {
                var j = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
                    i = j.exec(h);
                return i ? i[1] : h
            };
            d.fixupDomain = function(i) {
                var h = i.length;
                if (i.charAt(--h) === ".") {
                    i = i.slice(0, h)
                }
                if (i.slice(0, 2) === "*.") {
                    i = i.slice(1)
                }
                return i
            };
            d.getReferrer = function(j) {
                var i = "";
                var h = d.fromQuerystring("referrer", window.location.href) || d.fromQuerystring("referer", window.location.href);
                if (h) {
                    return h
                }
                if (j) {
                    return j
                }
                try {
                    i = window.top.document.referrer
                } catch (l) {
                    if (window.parent) {
                        try {
                            i = window.parent.document.referrer
                        } catch (k) {
                            i = ""
                        }
                    }
                }
                if (i === "") {
                    i = document.referrer
                }
                return i
            };
            d.addEventListener = function(k, j, i, h) {
                if (k.addEventListener) {
                    k.addEventListener(j, i, h);
                    return true
                }
                if (k.attachEvent) {
                    return k.attachEvent("on" + j, i)
                }
                k["on" + j] = i
            };
            d.fromQuerystring = function(j, i) {
                var h = new RegExp("^[^#]*[?&]" + j + "=([^&#]*)").exec(i);
                if (!h) {
                    return null
                }
                return decodeURIComponent(h[1].replace(/\+/g, " "))
            };
            d.warn = function(h) {
                if (typeof console !== "undefined") {
                    console.warn("Snowplow: " + h)
                }
            };
            d.getCssClasses = function(h) {
                return h.className.match(/\S+/g) || []
            };

            function f(h, l) {
                var k = d.getCssClasses(h),
                    j;
                for (j = 0; j < k.length; j++) {
                    if (l[k[j]]) {
                        return true
                    }
                }
                return false
            }
            d.getFilter = function(m, n) {
                if (g.isArray(m) || !g.isObject(m)) {
                    return function() {
                        return true
                    }
                }
                if (m.hasOwnProperty("filter")) {
                    return m.filter
                } else {
                    var j = m.hasOwnProperty("whitelist");
                    var l = m.whitelist || m.blacklist;
                    if (!g.isArray(l)) {
                        l = [l]
                    }
                    var h = {};
                    for (var k = 0; k < l.length; k++) {
                        h[l[k]] = true
                    }
                    if (n) {
                        return function(i) {
                            return f(i, h) === j
                        }
                    } else {
                        return function(i) {
                            return i.name in h === j
                        }
                    }
                }
            };
            d.getTransform = function(h) {
                if (!g.isObject(h)) {
                    return function(i) {
                        return i
                    }
                }
                if (h.hasOwnProperty("transform")) {
                    return h.transform
                } else {
                    return function(i) {
                        return i
                    }
                }
                return function(i) {
                    return i
                }
            };
            d.decorateQuerystring = function(h, j, r) {
                var p = j + "=" + r;
                var o = h.split("#");
                var k = o[0].split("?");
                var n = k.shift();
                var s = k.join("?");
                if (!s) {
                    s = p
                } else {
                    var l = true;
                    var q = s.split("&");
                    for (var m = 0; m < q.length; m++) {
                        if (q[m].substr(0, j.length + 1) === j + "=") {
                            l = false;
                            q[m] = p;
                            s = q.join("&");
                            break
                        }
                    }
                    if (l) {
                        s = p + "&" + s
                    }
                }
                o[0] = n + "?" + s;
                return o.join("#")
            };
            d.attemptGetLocalStorage = function(h) {
                try {
                    return localStorage.getItem(h)
                } catch (i) {}
            };
            d.attemptWriteLocalStorage = function(h, i) {
                try {
                    localStorage.setItem(h, i);
                    return true
                } catch (j) {
                    return false
                }
            };
            d.findRootDomain = function() {
                var j = "_sp_root_domain_test_";
                var p = j + new Date().getTime();
                var n = "_test_value_" + new Date().getTime();
                var l = window.location.hostname.split(".");
                var h = l.length - 1;
                while (h >= 0) {
                    var m = l.slice(h, l.length).join(".");
                    e.cookie(p, n, 0, "/", m);
                    if (e.cookie(p) === n) {
                        d.deleteCookie(p, m);
                        var o = d.getCookiesWithPrefix(j);
                        for (var k = 0; k < o.length; k++) {
                            d.deleteCookie(o[k], m)
                        }
                        return m
                    }
                    h -= 1
                }
                return window.location.hostname
            };
            d.isValueInArray = function(j, k) {
                for (var h = 0; h < k.length; h++) {
                    if (k[h] === j) {
                        return true
                    }
                }
                return false
            };
            d.deleteCookie = function(i, h) {
                e.cookie(i, "", -1, "/", h)
            };
            d.getCookiesWithPrefix = function(h) {
                var k = document.cookie.split("; ");
                var l = [];
                for (var j = 0; j < k.length; j++) {
                    if (k[j].substring(0, h.length) === h) {
                        l.push(k[j])
                    }
                }
                return l
            };
            d.parseInt = function(i) {
                var h = parseInt(i);
                return isNaN(h) ? undefined : h
            };
            d.parseFloat = function(i) {
                var h = parseFloat(i);
                return isNaN(h) ? undefined : h
            }
        }())
    }, {
        "../lib_managed/lodash": 20,
        "browser-cookie-lite": 1
    }],
    19: [function(b, c, a) {
        (function() {
            var f = b("./helpers"),
                d = typeof a !== "undefined" ? a : this;

            function h(j) {
                var i = new RegExp("^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$");
                return i.test(j)
            }

            function e(l) {
                var j, i;
                if (h(l)) {
                    try {
                        j = document.body.children[0].children[0].children[0].children[0].children[0].children[0].innerHTML;
                        i = "You have reached the cached page for";
                        return j.slice(0, i.length) === i
                    } catch (k) {
                        return false
                    }
                }
            }

            function g(k, j) {
                var m = new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+))([?][^#]+)"),
                    l = m.exec(k),
                    i = f.fromQuerystring(j, l[1]);
                return i
            }
            d.fixupUrl = function(k, i, j) {
                if (k === "translate.googleusercontent.com") {
                    if (j === "") {
                        j = i
                    }
                    i = g(i, "u");
                    k = f.getHostName(i)
                } else {
                    if (k === "cc.bingj.com" || k === "webcache.googleusercontent.com" || e(k)) {
                        i = document.links[0].href;
                        k = f.getHostName(i)
                    }
                }
                return [k, i, j]
            }
        }())
    }, {
        "./helpers": 18
    }],
    20: [function(b, c, a) {
        (function(d) {
            (function() {
                var I;
                var aB = "3.10.1";
                var B = "[object Arguments]",
                    aI = "[object Array]",
                    aZ = "[object Boolean]",
                    D = "[object Date]",
                    aS = "[object Error]",
                    f = "[object Function]",
                    aU = "[object Map]",
                    n = "[object Number]",
                    l = "[object Object]",
                    aa = "[object RegExp]",
                    i = "[object Set]",
                    C = "[object String]",
                    A = "[object WeakMap]";
                var a2 = "[object ArrayBuffer]",
                    bv = "[object Float32Array]",
                    ad = "[object Float64Array]",
                    y = "[object Int8Array]",
                    aM = "[object Int16Array]",
                    H = "[object Int32Array]",
                    aY = "[object Uint8Array]",
                    ar = "[object Uint8ClampedArray]",
                    ax = "[object Uint16Array]",
                    u = "[object Uint32Array]";
                var bl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
                    w = /^\w*$/,
                    at = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
                var by = /\\(\\)?/g;
                var aK = /\w*$/;
                var k = /^\[object .+?Constructor\]$/;
                var W = /^\d+$/;
                var bq = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
                var aq = {};
                aq[bv] = aq[ad] = aq[y] = aq[aM] = aq[H] = aq[aY] = aq[ar] = aq[ax] = aq[u] = true;
                aq[B] = aq[aI] = aq[a2] = aq[aZ] = aq[D] = aq[aS] = aq[f] = aq[aU] = aq[n] = aq[l] = aq[aa] = aq[i] = aq[C] = aq[A] = false;
                var aw = {};
                aw[B] = aw[aI] = aw[a2] = aw[aZ] = aw[D] = aw[bv] = aw[ad] = aw[y] = aw[aM] = aw[H] = aw[n] = aw[l] = aw[aa] = aw[C] = aw[aY] = aw[ar] = aw[ax] = aw[u] = true;
                aw[aS] = aw[f] = aw[aU] = aw[i] = aw[A] = false;
                var aN = {
                    "function": true,
                    object: true
                };
                var F = aN[typeof a] && a && !a.nodeType && a;
                var ak = aN[typeof c] && c && !c.nodeType && c;
                var aT = F && ak && typeof d == "object" && d && d.Object && d;
                var bo = aN[typeof self] && self && self.Object && self;
                var ab = aN[typeof window] && window && window.Object && window;
                var bw = ak && ak.exports === F && F;
                var bk = aT || ((ab !== (this && this.window)) && ab) || bo || this;

                function K(bG, bC, bF) {
                    var bE = bG.length,
                        bD = bF ? bE : -1;
                    while ((bF ? bD-- : ++bD < bE)) {
                        if (bC(bG[bD], bD, bG)) {
                            return bD
                        }
                    }
                    return -1
                }

                function aH(bC) {
                    return bC == null ? "" : (bC + "")
                }
                var X = (function() {
                    try {
                        Object({
                            toString: 0
                        } + "")
                    } catch (bC) {
                        return function() {
                            return false
                        }
                    }
                    return function(bD) {
                        return typeof bD.toString != "function" && typeof(bD + "") == "string"
                    }
                }());

                function m(bC) {
                    return !!bC && typeof bC == "object"
                }
                var al = Array.prototype,
                    o = Error.prototype,
                    bp = Object.prototype,
                    az = String.prototype;
                var L = Function.prototype.toString;
                var aE = bp.hasOwnProperty;
                var q = bp.toString;
                var v = RegExp("^" + L.call(aE).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                var bg = bk.ArrayBuffer,
                    aD = bp.propertyIsEnumerable,
                    a1 = al.splice,
                    Y = bk.Uint8Array;
                var z = aC(Array, "isArray"),
                    bx = aC(Object, "keys");
                var ap = 9007199254740991;
                var Q = {};
                Q[bv] = bk.Float32Array;
                Q[ad] = bk.Float64Array;
                Q[y] = bk.Int8Array;
                Q[aM] = bk.Int16Array;
                Q[H] = bk.Int32Array;
                Q[aY] = Y;
                Q[ar] = bk.Uint8ClampedArray;
                Q[ax] = bk.Uint16Array;
                Q[u] = bk.Uint32Array;
                var a3 = {};
                a3[aI] = a3[D] = a3[n] = {
                    constructor: true,
                    toLocaleString: true,
                    toString: true,
                    valueOf: true
                };
                a3[aZ] = a3[C] = {
                    constructor: true,
                    toString: true,
                    valueOf: true
                };
                a3[aS] = a3[f] = a3[aa] = {
                    constructor: true,
                    toString: true
                };
                a3[l] = {
                    constructor: true
                };
                a4(bq, function(bD) {
                    for (var bC in a3) {
                        if (aE.call(a3, bC)) {
                            var bE = a3[bC];
                            bE[bD] = aE.call(bE, bD)
                        }
                    }
                });

                function P() {}
                var bs = P.support = {};
                (function(bC) {
                    var bE = function() {
                            this.x = bC
                        },
                        bD = {
                            "0": bC,
                            length: bC
                        },
                        bG = [];
                    bE.prototype = {
                        valueOf: bC,
                        y: bC
                    };
                    for (var bF in new bE) {
                        bG.push(bF)
                    }
                    bs.enumErrorProps = aD.call(o, "message") || aD.call(o, "name");
                    bs.enumPrototypes = aD.call(bE, "prototype");
                    bs.nonEnumShadows = !/valueOf/.test(bG);
                    bs.spliceObjects = (a1.call(bD, 0, 1), !bD[0]);
                    bs.unindexedChars = ("x" [0] + Object("x")[0]) != "xx"
                }(1, 0));

                function s(bE, bF) {
                    var bC = -1,
                        bD = bE.length;
                    bF || (bF = Array(bD));
                    while (++bC < bD) {
                        bF[bC] = bE[bC]
                    }
                    return bF
                }

                function a4(bF, bE) {
                    var bC = -1,
                        bD = bF.length;
                    while (++bC < bD) {
                        if (bE(bF[bC], bC, bF) === false) {
                            break
                        }
                    }
                    return bF
                }

                function bB(bI, bD) {
                    var bE = -1,
                        bG = bI.length,
                        bF = -1,
                        bC = [];
                    while (++bE < bG) {
                        var bH = bI[bE];
                        if (bD(bH, bE, bI)) {
                            bC[++bF] = bH
                        }
                    }
                    return bC
                }

                function bb(bG, bF) {
                    var bD = -1,
                        bE = bG.length,
                        bC = Array(bE);
                    while (++bD < bE) {
                        bC[bD] = bF(bG[bD], bD, bG)
                    }
                    return bC
                }

                function t(bF, bC) {
                    var bD = -1,
                        bE = bF.length;
                    while (++bD < bE) {
                        if (bC(bF[bD], bD, bF)) {
                            return true
                        }
                    }
                    return false
                }

                function a9(bC, bD) {
                    return bD == null ? bC : aX(bD, Z(bD), bC)
                }

                function aX(bH, bF, bD) {
                    bD || (bD = {});
                    var bC = -1,
                        bG = bF.length;
                    while (++bC < bG) {
                        var bE = bF[bC];
                        bD[bE] = bH[bE]
                    }
                    return bD
                }

                function E(bE, bC, bF) {
                    var bD = typeof bE;
                    if (bD == "function") {
                        return bC === I ? bE : R(bE, bC, bF)
                    }
                    if (bE == null) {
                        return an
                    }
                    if (bD == "object") {
                        return bm(bE)
                    }
                    return bC === I ? aV(bE) : aW(bE, bC)
                }

                function aQ(bK, bI, bD, bL, bF, bG, bE) {
                    var bN;
                    if (bD) {
                        bN = bF ? bD(bK, bL, bF) : bD(bK)
                    }
                    if (bN !== I) {
                        return bN
                    }
                    if (!T(bK)) {
                        return bK
                    }
                    var bH = h(bK);
                    if (bH) {
                        bN = av(bK);
                        if (!bI) {
                            return s(bK, bN)
                        }
                    } else {
                        var bM = q.call(bK),
                            bJ = bM == f;
                        if (bM == l || bM == B || (bJ && !bF)) {
                            if (X(bK)) {
                                return bF ? bK : {}
                            }
                            bN = bz(bJ ? {} : bK);
                            if (!bI) {
                                return a9(bN, bK)
                            }
                        } else {
                            return aw[bM] ? ay(bK, bM, bI) : (bF ? bK : {})
                        }
                    }
                    bG || (bG = []);
                    bE || (bE = []);
                    var bC = bG.length;
                    while (bC--) {
                        if (bG[bC] == bK) {
                            return bE[bC]
                        }
                    }
                    bG.push(bK);
                    bE.push(bN);
                    (bH ? a4 : au)(bK, function(bP, bO) {
                        bN[bO] = aQ(bP, bI, bD, bO, bK, bG, bE)
                    });
                    return bN
                }
                var af = U(au);

                function M(bE, bD) {
                    var bC = [];
                    af(bE, function(bG, bF, bH) {
                        if (bD(bG, bF, bH)) {
                            bC.push(bG)
                        }
                    });
                    return bC
                }

                function ag(bG, bD, bF, bE) {
                    var bC;
                    bF(bG, function(bI, bH, bJ) {
                        if (bD(bI, bH, bJ)) {
                            bC = bE ? bH : bI;
                            return false
                        }
                    });
                    return bC
                }
                var bf = ah();

                function au(bC, bD) {
                    return bf(bC, bD, Z)
                }

                function ae(bE, bG, bC) {
                    if (bE == null) {
                        return
                    }
                    bE = r(bE);
                    if (bC !== I && bC in bE) {
                        bG = [bC]
                    }
                    var bD = 0,
                        bF = bG.length;
                    while (bE != null && bD < bF) {
                        bE = r(bE)[bG[bD++]]
                    }
                    return (bD && bD == bF) ? bE : I
                }

                function bh(bG, bD, bF, bE, bC, bH) {
                    if (bG === bD) {
                        return true
                    }
                    if (bG == null || bD == null || (!T(bG) && !m(bD))) {
                        return bG !== bG && bD !== bD
                    }
                    return a8(bG, bD, bh, bF, bE, bC, bH)
                }

                function a8(bT, bG, bN, bK, bM, bQ, bO) {
                    var bJ = h(bT),
                        bL = h(bG),
                        bE = aI,
                        bR = aI;
                    if (!bJ) {
                        bE = q.call(bT);
                        if (bE == B) {
                            bE = l
                        } else {
                            if (bE != l) {
                                bJ = N(bT)
                            }
                        }
                    }
                    if (!bL) {
                        bR = q.call(bG);
                        if (bR == B) {
                            bR = l
                        } else {
                            if (bR != l) {
                                bL = N(bG)
                            }
                        }
                    }
                    var bC = bE == l && !X(bT),
                        bD = bR == l && !X(bG),
                        bI = bE == bR;
                    if (bI && !(bJ || bC)) {
                        return O(bT, bG, bE)
                    }
                    if (!bM) {
                        var bS = bC && aE.call(bT, "__wrapped__"),
                            bP = bD && aE.call(bG, "__wrapped__");
                        if (bS || bP) {
                            return bN(bS ? bT.value() : bT, bP ? bG.value() : bG, bK, bM, bQ, bO)
                        }
                    }
                    if (!bI) {
                        return false
                    }
                    bQ || (bQ = []);
                    bO || (bO = []);
                    var bF = bQ.length;
                    while (bF--) {
                        if (bQ[bF] == bT) {
                            return bO[bF] == bG
                        }
                    }
                    bQ.push(bT);
                    bO.push(bG);
                    var bH = (bJ ? bn : bj)(bT, bG, bN, bK, bM, bQ, bO);
                    bQ.pop();
                    bO.pop();
                    return bH
                }

                function aG(bG, bK, bF) {
                    var bJ = bK.length,
                        bD = bJ,
                        bE = !bF;
                    if (bG == null) {
                        return !bD
                    }
                    bG = r(bG);
                    while (bJ--) {
                        var bH = bK[bJ];
                        if ((bE && bH[2]) ? bH[1] !== bG[bH[0]] : !(bH[0] in bG)) {
                            return false
                        }
                    }
                    while (++bJ < bD) {
                        bH = bK[bJ];
                        var bL = bH[0],
                            bI = bG[bL],
                            bC = bH[1];
                        if (bE && bH[2]) {
                            if (bI === I && !(bL in bG)) {
                                return false
                            }
                        } else {
                            var bM = bF ? bF(bI, bC, bL) : I;
                            if (!(bM === I ? bh(bC, bI, bF, true) : bM)) {
                                return false
                            }
                        }
                    }
                    return true
                }

                function br(bF, bE) {
                    var bD = -1,
                        bC = a0(bF) ? Array(bF.length) : [];
                    af(bF, function(bH, bG, bI) {
                        bC[++bD] = bE(bH, bG, bI)
                    });
                    return bC
                }

                function bm(bF) {
                    var bC = aR(bF);
                    if (bC.length == 1 && bC[0][2]) {
                        var bD = bC[0][0],
                            bE = bC[0][1];
                        return function(bG) {
                            if (bG == null) {
                                return false
                            }
                            bG = r(bG);
                            return bG[bD] === bE && (bE !== I || (bD in bG))
                        }
                    }
                    return function(bG) {
                        return aG(bG, bC)
                    }
                }

                function aW(bG, bF) {
                    var bE = h(bG),
                        bD = bd(bG) && aF(bF),
                        bC = (bG + "");
                    bG = bi(bG);
                    return function(bH) {
                        if (bH == null) {
                            return false
                        }
                        var bI = bC;
                        bH = r(bH);
                        if ((bE || !bD) && !(bI in bH)) {
                            bH = bG.length == 1 ? bH : ae(bH, aL(bG, 0, -1));
                            if (bH == null) {
                                return false
                            }
                            bI = am(bG);
                            bH = r(bH)
                        }
                        return bH[bI] === bF ? (bF !== I || (bI in bH)) : bh(bF, bH[bI], I, true)
                    }
                }

                function aP(bC) {
                    return function(bD) {
                        return bD == null ? I : r(bD)[bC]
                    }
                }

                function aO(bD) {
                    var bC = (bD + "");
                    bD = bi(bD);
                    return function(bE) {
                        return ae(bE, bD, bC)
                    }
                }

                function aL(bH, bG, bD) {
                    var bE = -1,
                        bF = bH.length;
                    bG = bG == null ? 0 : (+bG || 0);
                    if (bG < 0) {
                        bG = -bG > bF ? 0 : (bF + bG)
                    }
                    bD = (bD === I || bD > bF) ? bF : (+bD || 0);
                    if (bD < 0) {
                        bD += bF
                    }
                    bF = bG > bD ? 0 : ((bD - bG) >>> 0);
                    bG >>>= 0;
                    var bC = Array(bF);
                    while (++bE < bF) {
                        bC[bE] = bH[bE + bG]
                    }
                    return bC
                }

                function R(bD, bC, bE) {
                    if (typeof bD != "function") {
                        return an
                    }
                    if (bC === I) {
                        return bD
                    }
                    switch (bE) {
                        case 1:
                            return function(bF) {
                                return bD.call(bC, bF)
                            };
                        case 3:
                            return function(bG, bF, bH) {
                                return bD.call(bC, bG, bF, bH)
                            };
                        case 4:
                            return function(bF, bH, bG, bI) {
                                return bD.call(bC, bF, bH, bG, bI)
                            };
                        case 5:
                            return function(bJ, bF, bH, bG, bI) {
                                return bD.call(bC, bJ, bF, bH, bG, bI)
                            }
                    }
                    return function() {
                        return bD.apply(bC, arguments)
                    }
                }

                function p(bE) {
                    var bC = new bg(bE.byteLength),
                        bD = new Y(bC);
                    bD.set(new Y(bE));
                    return bC
                }

                function U(bD, bC) {
                    return function(bI, bH) {
                        var bF = bI ? a7(bI) : 0;
                        if (!aA(bF)) {
                            return bD(bI, bH)
                        }
                        var bE = bC ? bF : -1,
                            bG = r(bI);
                        while ((bC ? bE-- : ++bE < bF)) {
                            if (bH(bG[bE], bE, bG) === false) {
                                break
                            }
                        }
                        return bI
                    }
                }

                function ah(bC) {
                    return function(bE, bK, bI) {
                        var bJ = r(bE),
                            bG = bI(bE),
                            bH = bG.length,
                            bD = bC ? bH : -1;
                        while ((bC ? bD-- : ++bD < bH)) {
                            var bF = bG[bD];
                            if (bK(bJ[bF], bF, bJ) === false) {
                                break
                            }
                        }
                        return bE
                    }
                }

                function be(bD, bC) {
                    return function(bH, bE, bF) {
                        bE = ba(bE, bF, 3);
                        if (h(bH)) {
                            var bG = K(bH, bE, bC);
                            return bG > -1 ? bH[bG] : I
                        }
                        return ag(bH, bE, bD)
                    }
                }

                function ac(bC, bD) {
                    return function(bG, bF, bE) {
                        return (typeof bF == "function" && bE === I && h(bG)) ? bC(bG, bF) : bD(bG, R(bF, bE, 3))
                    }
                }

                function bu(bC) {
                    return function(bF, bG, bE) {
                        var bD = {};
                        bG = ba(bG, bE, 3);
                        au(bF, function(bK, bJ, bI) {
                            var bH = bG(bK, bJ, bI);
                            bJ = bC ? bH : bJ;
                            bK = bC ? bK : bH;
                            bD[bJ] = bK
                        });
                        return bD
                    }
                }

                function bn(bJ, bK, bN, bD, bF, bG, bE) {
                    var bI = -1,
                        bL = bJ.length,
                        bM = bK.length;
                    if (bL != bM && !(bF && bM > bL)) {
                        return false
                    }
                    while (++bI < bL) {
                        var bC = bJ[bI],
                            bH = bK[bI],
                            bO = bD ? bD(bF ? bH : bC, bF ? bC : bH, bI) : I;
                        if (bO !== I) {
                            if (bO) {
                                continue
                            }
                            return false
                        }
                        if (bF) {
                            if (!t(bK, function(bP) {
                                    return bC === bP || bN(bC, bP, bD, bF, bG, bE)
                                })) {
                                return false
                            }
                        } else {
                            if (!(bC === bH || bN(bC, bH, bD, bF, bG, bE))) {
                                return false
                            }
                        }
                    }
                    return true
                }

                function O(bE, bD, bC) {
                    switch (bC) {
                        case aZ:
                        case D:
                            return +bE == +bD;
                        case aS:
                            return bE.name == bD.name && bE.message == bD.message;
                        case n:
                            return (bE != +bE) ? bD != +bD : bE == +bD;
                        case aa:
                        case C:
                            return bE == (bD + "")
                    }
                    return false
                }

                function bj(bS, bE, bP, bK, bM, bR, bQ) {
                    var bH = Z(bS),
                        bJ = bH.length,
                        bI = Z(bE),
                        bN = bI.length;
                    if (bJ != bN && !bM) {
                        return false
                    }
                    var bF = bJ;
                    while (bF--) {
                        var bT = bH[bF];
                        if (!(bM ? bT in bE : aE.call(bE, bT))) {
                            return false
                        }
                    }
                    var bC = bM;
                    while (++bF < bJ) {
                        bT = bH[bF];
                        var bU = bS[bT],
                            bD = bE[bT],
                            bG = bK ? bK(bM ? bD : bU, bM ? bU : bD, bT) : I;
                        if (!(bG === I ? bP(bU, bD, bK, bM, bR, bQ) : bG)) {
                            return false
                        }
                        bC || (bC = bT == "constructor")
                    }
                    if (!bC) {
                        var bL = bS.constructor,
                            bO = bE.constructor;
                        if (bL != bO && ("constructor" in bS && "constructor" in bE) && !(typeof bL == "function" && bL instanceof bL && typeof bO == "function" && bO instanceof bO)) {
                            return false
                        }
                    }
                    return true
                }

                function ba(bE, bD, bF) {
                    var bC = P.callback || V;
                    bC = bC === V ? E : bC;
                    return bF ? bC(bE, bD, bF) : bC
                }
                var a7 = aP("length");

                function aR(bD) {
                    var bC = g(bD),
                        bE = bC.length;
                    while (bE--) {
                        bC[bE][2] = aF(bC[bE][1])
                    }
                    return bC
                }

                function aC(bC, bD) {
                    var bE = bC == null ? I : bC[bD];
                    return aj(bE) ? bE : I
                }

                function av(bE) {
                    var bD = bE.length,
                        bC = new bE.constructor(bD);
                    if (bD && typeof bE[0] == "string" && aE.call(bE, "index")) {
                        bC.index = bE.index;
                        bC.input = bE.input
                    }
                    return bC
                }

                function bz(bD) {
                    var bC = bD.constructor;
                    if (!(typeof bC == "function" && bC instanceof bC)) {
                        bC = Object
                    }
                    return new bC
                }

                function ay(bH, bD, bF) {
                    var bG = bH.constructor;
                    switch (bD) {
                        case a2:
                            return p(bH);
                        case aZ:
                        case D:
                            return new bG(+bH);
                        case bv:
                        case ad:
                        case y:
                        case aM:
                        case H:
                        case aY:
                        case ar:
                        case ax:
                        case u:
                            if (bG instanceof bG) {
                                bG = Q[bD]
                            }
                            var bE = bH.buffer;
                            return new bG(bF ? p(bE) : bE, bH.byteOffset, bH.length);
                        case n:
                        case C:
                            return new bG(bH);
                        case aa:
                            var bC = new bG(bH.source, aK.exec(bH));
                            bC.lastIndex = bH.lastIndex
                    }
                    return bC
                }

                function a0(bC) {
                    return bC != null && aA(a7(bC))
                }

                function G(bD, bC) {
                    bD = (typeof bD == "number" || W.test(bD)) ? +bD : -1;
                    bC = bC == null ? ap : bC;
                    return bD > -1 && bD % 1 == 0 && bD < bC
                }

                function e(bG, bE, bD) {
                    if (!T(bD)) {
                        return false
                    }
                    var bF = typeof bE;
                    if (bF == "number" ? (a0(bD) && G(bE, bD.length)) : (bF == "string" && bE in bD)) {
                        var bC = bD[bE];
                        return bG === bG ? (bG === bC) : (bC !== bC)
                    }
                    return false
                }

                function bd(bF, bD) {
                    var bE = typeof bF;
                    if ((bE == "string" && w.test(bF)) || bE == "number") {
                        return true
                    }
                    if (h(bF)) {
                        return false
                    }
                    var bC = !bl.test(bF);
                    return bC || (bD != null && bF in r(bD))
                }

                function aA(bC) {
                    return typeof bC == "number" && bC > -1 && bC % 1 == 0 && bC <= ap
                }

                function aF(bC) {
                    return bC === bC && !T(bC)
                }

                function ao(bF) {
                    var bI = a5(bF),
                        bH = bI.length,
                        bJ = bH && bF.length;
                    var bD = !!bJ && aA(bJ) && (h(bF) || j(bF) || bt(bF));
                    var bE = -1,
                        bC = [];
                    while (++bE < bH) {
                        var bG = bI[bE];
                        if ((bD && G(bG, bJ)) || aE.call(bF, bG)) {
                            bC.push(bG)
                        }
                    }
                    return bC
                }

                function r(bF) {
                    if (P.support.unindexedChars && bt(bF)) {
                        var bD = -1,
                            bE = bF.length,
                            bC = Object(bF);
                        while (++bD < bE) {
                            bC[bD] = bF.charAt(bD)
                        }
                        return bC
                    }
                    return T(bF) ? bF : Object(bF)
                }

                function bi(bD) {
                    if (h(bD)) {
                        return bD
                    }
                    var bC = [];
                    aH(bD).replace(at, function(bG, bH, bE, bF) {
                        bC.push(bE ? bF.replace(by, "$1") : (bH || bG))
                    });
                    return bC
                }

                function am(bD) {
                    var bC = bD ? bD.length : 0;
                    return bC ? bD[bC - 1] : I
                }

                function S(bF, bC, bD) {
                    var bE = h(bF) ? bB : M;
                    bC = ba(bC, bD, 3);
                    return bE(bF, bC)
                }
                var bA = be(af);
                var a6 = ac(a4, af);

                function J(bF, bE, bC) {
                    var bD = h(bF) ? bb : br;
                    bE = ba(bE, bC, 3);
                    return bD(bF, bE)
                }

                function j(bC) {
                    return m(bC) && a0(bC) && aE.call(bC, "callee") && !aD.call(bC, "callee")
                }
                var h = z || function(bC) {
                    return m(bC) && aA(bC.length) && q.call(bC) == aI
                };

                function bc(bC) {
                    return T(bC) && q.call(bC) == f
                }

                function T(bD) {
                    var bC = typeof bD;
                    return !!bD && (bC == "object" || bC == "function")
                }

                function aj(bC) {
                    if (bC == null) {
                        return false
                    }
                    if (bc(bC)) {
                        return v.test(L.call(bC))
                    }
                    return m(bC) && (X(bC) ? v : k).test(bC)
                }

                function bt(bC) {
                    return typeof bC == "string" || (m(bC) && q.call(bC) == C)
                }

                function N(bC) {
                    return m(bC) && aA(bC.length) && !!aq[q.call(bC)]
                }

                function ai(bC) {
                    return bC === I
                }
                var Z = !bx ? ao : function(bD) {
                    var bC = bD == null ? I : bD.constructor;
                    if ((typeof bC == "function" && bC.prototype === bD) || (typeof bD == "function" ? P.support.enumPrototypes : a0(bD))) {
                        return ao(bD)
                    }
                    return T(bD) ? bx(bD) : []
                };

                function a5(bE) {
                    if (bE == null) {
                        return []
                    }
                    if (!T(bE)) {
                        bE = Object(bE)
                    }
                    var bC = bE.length,
                        bM = P.support;
                    bC = (bC && aA(bC) && (h(bE) || j(bE) || bt(bE)) && bC) || 0;
                    var bD = bE.constructor,
                        bJ = -1,
                        bG = (bc(bD) && bD.prototype) || bp,
                        bF = bG === bE,
                        bQ = Array(bC),
                        bI = bC > 0,
                        bK = bM.enumErrorProps && (bE === o || bE instanceof Error),
                        bP = bM.enumPrototypes && bc(bE);
                    while (++bJ < bC) {
                        bQ[bJ] = (bJ + "")
                    }
                    for (var bL in bE) {
                        if (!(bP && bL == "prototype") && !(bK && (bL == "message" || bL == "name")) && !(bI && G(bL, bC)) && !(bL == "constructor" && (bF || !aE.call(bE, bL)))) {
                            bQ.push(bL)
                        }
                    }
                    if (bM.nonEnumShadows && bE !== bp) {
                        var bO = bE === az ? C : (bE === o ? aS : q.call(bE)),
                            bN = a3[bO] || a3[l];
                        if (bO == l) {
                            bG = bp
                        }
                        bC = bq.length;
                        while (bC--) {
                            bL = bq[bC];
                            var bH = bN[bL];
                            if (!(bF && bH) && (bH ? aE.call(bE, bL) : bE[bL] !== bG[bL])) {
                                bQ.push(bL)
                            }
                        }
                    }
                    return bQ
                }
                var aJ = bu();

                function g(bE) {
                    bE = r(bE);
                    var bD = -1,
                        bG = Z(bE),
                        bH = bG.length,
                        bC = Array(bH);
                    while (++bD < bH) {
                        var bF = bG[bD];
                        bC[bD] = [bF, bE[bF]]
                    }
                    return bC
                }

                function V(bE, bC, bD) {
                    if (bD && e(bE, bC, bD)) {
                        bC = I
                    }
                    return m(bE) ? x(bE) : E(bE, bC)
                }

                function an(bC) {
                    return bC
                }

                function x(bC) {
                    return bm(aQ(bC, true))
                }

                function aV(bC) {
                    return bd(bC) ? aP(bC) : aO(bC)
                }
                P.callback = V;
                P.filter = S;
                P.forEach = a6;
                P.keys = Z;
                P.keysIn = a5;
                P.map = J;
                P.mapValues = aJ;
                P.matches = x;
                P.pairs = g;
                P.property = aV;
                P.collect = J;
                P.each = a6;
                P.iteratee = V;
                P.select = S;
                P.find = bA;
                P.identity = an;
                P.isArguments = j;
                P.isArray = h;
                P.isFunction = bc;
                P.isNative = aj;
                P.isObject = T;
                P.isString = bt;
                P.isTypedArray = N;
                P.isUndefined = ai;
                P.last = am;
                P.detect = bA;
                P.VERSION = aB;
                if (F && ak) {
                    if (bw) {
                        (ak.exports = P)._ = P
                    }
                }
            }.call(this))
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {}],
    21: [function(c, d, a) {
        var f = c("./lib_managed/lodash"),
            e = c("./lib/helpers"),
            b = typeof a !== "undefined" ? a : this;
        b.getLinkTrackingManager = function(m, i, p) {
            var h, g, l, q, k, n;

            function r(u, t) {
                var B, D, z, A, y, C;
                while ((B = u.parentNode) !== null && !f.isUndefined(B) && ((D = u.tagName.toUpperCase()) !== "A" && D !== "AREA")) {
                    u = B
                }
                if (!f.isUndefined(u.href)) {
                    var x = u.hostname || e.getHostName(u.href),
                        v = x.toLowerCase(),
                        s = u.href.replace(x, v),
                        w = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):", "i");
                    if (!w.test(s)) {
                        z = u.id;
                        A = e.getCssClasses(u);
                        y = u.target;
                        C = l ? u.innerHTML : null;
                        s = unescape(s);
                        m.trackLinkClick(s, z, A, y, C, p(t))
                    }
                }
            }

            function o(s) {
                return function(t) {
                    var u, v;
                    t = t || window.event;
                    u = t.which || t.button;
                    v = t.target || t.srcElement;
                    if (t.type === "click") {
                        if (v) {
                            r(v, s)
                        }
                    } else {
                        if (t.type === "mousedown") {
                            if ((u === 1 || u === 2) && v) {
                                k = u;
                                n = v
                            } else {
                                k = n = null
                            }
                        } else {
                            if (t.type === "mouseup") {
                                if (u === k && v === n) {
                                    r(v, s)
                                }
                                k = n = null
                            }
                        }
                    }
                }
            }

            function j(s) {
                if (g) {
                    e.addEventListener(s, "mouseup", o(q), false);
                    e.addEventListener(s, "mousedown", o(q), false)
                } else {
                    e.addEventListener(s, "click", o(q), false)
                }
            }
            return {
                configureLinkClickTracking: function(u, s, v, t) {
                    l = v;
                    q = t;
                    g = s;
                    h = e.getFilter(u, true)
                },
                addClickListeners: function() {
                    var t = document.links,
                        s;
                    for (s = 0; s < t.length; s++) {
                        if (h(t[s]) && !t[s][i]) {
                            j(t[s]);
                            t[s][i] = true
                        }
                    }
                }
            }
        }
    }, {
        "./lib/helpers": 18,
        "./lib_managed/lodash": 20
    }],
    22: [function(b, c, a) {
        (function() {
            var g = b("./lib_managed/lodash"),
                e = b("./lib/detectors").localStorageAccessible,
                f = b("./lib/helpers"),
                d = typeof a !== "undefined" ? a : this;
            d.OutQueueManager = function(x, q, s, z, w, m, j) {
                var k, h = false,
                    v, i;
                w = w && window.XMLHttpRequest && ("withCredentials" in new XMLHttpRequest());
                var r = w ? "/com.snowplowanalytics.snowplow/tp2" : "/i";
                m = (e() && z && w && m) || 1;
                k = ["snowplowOutQueue", x, q, w ? "post2" : "get"].join("_");
                if (z) {
                    try {
                        i = JSON.parse(localStorage.getItem(k))
                    } catch (u) {}
                }
                if (!g.isArray(i)) {
                    i = []
                }
                s.outQueues.push(i);
                if (w && m > 1) {
                    s.bufferFlushers.push(function() {
                        if (!h) {
                            y()
                        }
                    })
                }

                function o(H) {
                    var D = "?",
                        E = {
                            co: true,
                            cx: true
                        },
                        C = true;
                    for (var G in H) {
                        if (H.hasOwnProperty(G) && !(E.hasOwnProperty(G))) {
                            if (!C) {
                                D += "&"
                            } else {
                                C = false
                            }
                            D += encodeURIComponent(G) + "=" + encodeURIComponent(H[G])
                        }
                    }
                    for (var F in E) {
                        if (H.hasOwnProperty(F) && E.hasOwnProperty(F)) {
                            D += "&" + F + "=" + encodeURIComponent(H[F])
                        }
                    }
                    return D
                }

                function A(C) {
                    var D = g.mapValues(C, function(E) {
                        return E.toString()
                    });
                    return {
                        evt: D,
                        bytes: B(JSON.stringify(D))
                    }
                }

                function B(E) {
                    var C = 0;
                    for (var D = 0; D < E.length; D++) {
                        var F = E.charCodeAt(D);
                        if (F <= 127) {
                            C += 1
                        } else {
                            if (F <= 2047) {
                                C += 2
                            } else {
                                if (F >= 55296 && F <= 57343) {
                                    C += 4;
                                    D++
                                } else {
                                    if (F < 65535) {
                                        C += 3
                                    } else {
                                        C += 4
                                    }
                                }
                            }
                        }
                    }
                    return C
                }

                function t(F, E) {
                    v = E + r;
                    if (w) {
                        var C = A(F);
                        if (C.bytes >= j) {
                            f.warn("Event of size " + C.bytes + " is too long - the maximum size is " + j);
                            var G = n(v);
                            G.send(p(l([C.evt])));
                            return
                        } else {
                            i.push(C)
                        }
                    } else {
                        i.push(o(F))
                    }
                    var D = false;
                    if (z) {
                        D = f.attemptWriteLocalStorage(k, JSON.stringify(i))
                    }
                    if (!h && (!D || i.length >= m)) {
                        y()
                    }
                }

                function y() {
                    while (i.length && typeof i[0] !== "string" && typeof i[0] !== "object") {
                        i.shift()
                    }
                    if (i.length < 1) {
                        h = false;
                        return
                    }
                    if (!g.isString(v)) {
                        throw "No Snowplow collector configured, cannot track"
                    }
                    h = true;
                    var G = i[0];
                    if (w) {
                        var H = n(v);
                        var C = setTimeout(function() {
                            H.abort();
                            h = false
                        }, 5000);

                        function D(J) {
                            var L = 0;
                            var K = 0;
                            while (L < J.length) {
                                K += J[L].bytes;
                                if (K >= j) {
                                    break
                                } else {
                                    L += 1
                                }
                            }
                            return L
                        }
                        var I = D(i);
                        H.onreadystatechange = function() {
                            if (H.readyState === 4 && H.status >= 200 && H.status < 400) {
                                for (var J = 0; J < I; J++) {
                                    i.shift()
                                }
                                if (z) {
                                    f.attemptWriteLocalStorage(k, JSON.stringify(i))
                                }
                                clearTimeout(C);
                                y()
                            } else {
                                if (H.readyState === 4 && H.status >= 400) {
                                    clearTimeout(C);
                                    h = false
                                }
                            }
                        };
                        var E = g.map(i.slice(0, I), function(J) {
                            return J.evt
                        });
                        if (E.length > 0) {
                            H.send(p(l(E)))
                        }
                    } else {
                        var F = new Image(1, 1);
                        F.onload = function() {
                            i.shift();
                            if (z) {
                                f.attemptWriteLocalStorage(k, JSON.stringify(i))
                            }
                            y()
                        };
                        F.onerror = function() {
                            h = false
                        };
                        F.src = v + G.replace("?", "?stm=" + new Date().getTime() + "&")
                    }
                }

                function n(C) {
                    var D = new XMLHttpRequest();
                    D.open("POST", C, true);
                    D.withCredentials = true;
                    D.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
                    return D
                }

                function p(C) {
                    return JSON.stringify({
                        schema: "iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4",
                        data: C
                    })
                }

                function l(E) {
                    var C = new Date().getTime().toString();
                    for (var D = 0; D < E.length; D++) {
                        E[D]["stm"] = C
                    }
                    return E
                }
                return {
                    enqueueRequest: t,
                    executeQueue: y
                }
            }
        }())
    }, {
        "./lib/detectors": 17,
        "./lib/helpers": 18,
        "./lib_managed/lodash": 20
    }],
    23: [function(b, c, a) {
        (function() {
            var f = b("uuid"),
                i = b("./lib_managed/lodash"),
                h = b("./lib/helpers"),
                d = b("./in_queue"),
                g = b("./tracker"),
                e = typeof a !== "undefined" ? a : this;
            e.Snowplow = function(l, q) {
                var k = document,
                    m = window,
                    o = "js-2.9.1",
                    n = {
                        outQueues: [],
                        bufferFlushers: [],
                        expireDateTime: null,
                        hasLoaded: false,
                        registeredOnLoadHandlers: [],
                        pageViewId: null
                    };

                function p() {
                    var s;
                    i.forEach(n.bufferFlushers, function(t) {
                        t()
                    });
                    if (n.expireDateTime) {
                        do {
                            s = new Date();
                            if (i.filter(n.outQueues, function(t) {
                                    return t.length > 0
                                }).length === 0) {
                                break
                            }
                        } while (s.getTime() < n.expireDateTime)
                    }
                }

                function r() {
                    var s;
                    if (!n.hasLoaded) {
                        n.hasLoaded = true;
                        for (s = 0; s < n.registeredOnLoadHandlers.length; s++) {
                            n.registeredOnLoadHandlers[s]()
                        }
                    }
                    return true
                }

                function j() {
                    var t;
                    if (k.addEventListener) {
                        h.addEventListener(k, "DOMContentLoaded", function s() {
                            k.removeEventListener("DOMContentLoaded", s, false);
                            r()
                        })
                    } else {
                        if (k.attachEvent) {
                            k.attachEvent("onreadystatechange", function s() {
                                if (k.readyState === "complete") {
                                    k.detachEvent("onreadystatechange", s);
                                    r()
                                }
                            });
                            if (k.documentElement.doScroll && m === m.top) {
                                (function s() {
                                    if (!n.hasLoaded) {
                                        try {
                                            k.documentElement.doScroll("left")
                                        } catch (u) {
                                            setTimeout(s, 0);
                                            return
                                        }
                                        r()
                                    }
                                }())
                            }
                        }
                    }
                    if ((new RegExp("WebKit")).test(navigator.userAgent)) {
                        t = setInterval(function() {
                            if (n.hasLoaded || /loaded|complete/.test(k.readyState)) {
                                clearInterval(t);
                                r()
                            }
                        }, 10)
                    }
                    h.addEventListener(m, "load", r, false)
                }
                m.Snowplow = {
                    getTrackerCf: function(u) {
                        var s = new g.Tracker(q, "", o, n, {});
                        s.setCollectorCf(u);
                        return s
                    },
                    getTrackerUrl: function(s) {
                        var u = new g.Tracker(q, "", o, n, {});
                        u.setCollectorUrl(s);
                        return u
                    },
                    getAsyncTracker: function() {
                        return new g.Tracker(q, "", o, n, {})
                    }
                };
                h.addEventListener(m, "beforeunload", p, false);
                j();
                return new d.InQueueManager(g.Tracker, o, n, l, q)
            }
        }())
    }, {
        "./in_queue": 15,
        "./lib/helpers": 18,
        "./lib_managed/lodash": 20,
        "./tracker": 24,
        uuid: 12
    }],
    24: [function(b, c, a) {
        (function() {
            var q = b("./lib_managed/lodash"),
                f = b("./lib/helpers"),
                i = b("./lib/proxies"),
                g = b("browser-cookie-lite"),
                n = b("./lib/detectors"),
                m = b("sha1"),
                p = b("./links"),
                e = b("./forms"),
                o = b("./errors"),
                k = b("./out_queue"),
                l = b("snowplow-tracker-core").trackerCore,
                d = b("uuid"),
                h = typeof a !== "undefined" ? a : this;
            h.Tracker = function j(bw, a3, U, C, aJ) {
                var z = l(true, function(bF) {
                        N(bF);
                        an(bF, aS)
                    }),
                    ax = document,
                    al = window,
                    W = navigator,
                    v = i.fixupUrl(ax.domain, al.location.href, f.getReferrer()),
                    bf = f.fixupDomain(v[0]),
                    bv = v[1],
                    aW = v[2],
                    bE, ao, aJ = aJ || {},
                    aU = "GET",
                    L = aJ.hasOwnProperty("platform") ? aJ.platform : "web",
                    x, bi = aJ.hasOwnProperty("appId") ? aJ.appId : "",
                    aD, a0 = ax.title,
                    D, aS = aJ.hasOwnProperty("pageUnloadTimer") ? aJ.pageUnloadTimer : 500,
                    P = false,
                    F, V, G, bs = aJ.hasOwnProperty("cookieName") ? aJ.cookieName : "_sp_",
                    I = aJ.hasOwnProperty("cookieDomain") ? aJ.cookieDomain : null,
                    bt = "/",
                    ac = W.doNotTrack || W.msDoNotTrack || al.doNotTrack,
                    bm = aJ.hasOwnProperty("respectDoNotTrack") ? aJ.respectDoNotTrack && (ac === "yes" || ac === "1") : false,
                    av, ar, M = aJ.hasOwnProperty("cookieLifetime") ? aJ.cookieLifetime : 63072000,
                    R = aJ.hasOwnProperty("sessionCookieTimeout") ? aJ.sessionCookieTimeout : 1800,
                    X = aJ.hasOwnProperty("userFingerprintSeed") ? aJ.userFingerprintSeed : 123412414,
                    bk = ax.characterSet || ax.charset,
                    a4 = aJ.hasOwnProperty("forceSecureTracker") ? (aJ.forceSecureTracker === true) : false,
                    ag = !a4 && aJ.hasOwnProperty("forceUnsecureTracker") ? (aJ.forceUnsecureTracker === true) : false,
                    aq = aJ.hasOwnProperty("useLocalStorage") ? (f.warn("argmap.useLocalStorage is deprecated. Use argmap.stateStorageStrategy instead."), aJ.useLocalStorage) : true,
                    aM = aJ.hasOwnProperty("useCookies") ? (f.warn("argmap.useCookies is deprecated. Use argmap.stateStorageStrategy instead."), aJ.useCookies) : true,
                    aY = aJ.hasOwnProperty("stateStorageStrategy") ? aJ.stateStorageStrategy : (!aM && !aq ? "none" : (aM && aq ? "cookieAndLocalStorage" : (aM ? "cookie" : "localStorage"))),
                    K = W.userLanguage || W.language,
                    bj = n.detectBrowserFeatures(aY == "cookie" || aY == "cookieAndLocalStorage", Q("testcookie")),
                    y = (aJ.userFingerprint === false) ? "" : n.detectSignature(X),
                    O = bw + "_" + a3,
                    aZ = false,
                    aV, br = new Date().getTime(),
                    aQ, aE, ay, af, ak = m,
                    a1, at, ab, aa = 1,
                    bD, E = bc(),
                    u = p.getLinkTrackingManager(z, O, bp),
                    az = e.getFormTrackingManager(z, O, bp),
                    aT = o.errorManager(z),
                    bo = new k.OutQueueManager(bw, a3, C, aY == "localStorage" || aY == "cookieAndLocalStorage", aJ.post, aJ.bufferSize, aJ.maxPostBytes || 40000),
                    a9 = false,
                    bx = aJ.contexts || {},
                    bz = [],
                    t = [],
                    aL = false,
                    J = false;
                if (aJ.hasOwnProperty("discoverRootDomain") && aJ.discoverRootDomain) {
                    I = f.findRootDomain()
                }
                if (bx.gaCookies) {
                    bz.push(H())
                }
                if (bx.geolocation) {
                    bu()
                }
                z.setBase64Encoding(aJ.hasOwnProperty("encodeBase64") ? aJ.encodeBase64 : true);
                z.setTrackerVersion(U);
                z.setTrackerNamespace(a3);
                z.setAppId(bi);
                z.setPlatform(L);
                z.setTimezone(n.detectTimezone());
                z.addPayloadPair("lang", K);
                z.addPayloadPair("cs", bk);
                for (var ai in bj) {
                    if (Object.prototype.hasOwnProperty.call(bj, ai)) {
                        if (ai === "res" || ai === "cd" || ai === "cookie") {
                            z.addPayloadPair(ai, bj[ai])
                        } else {
                            z.addPayloadPair("f_" + ai, bj[ai])
                        }
                    }
                }

                function bB() {
                    v = i.fixupUrl(ax.domain, al.location.href, f.getReferrer());
                    if (v[1] !== bv) {
                        aW = f.getReferrer(bv)
                    }
                    bf = f.fixupDomain(v[0]);
                    bv = v[1]
                }

                function au() {
                    var bF = new Date().getTime();
                    if (this.href) {
                        this.href = f.decorateQuerystring(this.href, "_sp", at + "." + bF)
                    }
                }

                function w(bH) {
                    for (var bG = 0; bG < ax.links.length; bG++) {
                        var bF = ax.links[bG];
                        if (!bF.spDecorationEnabled && bH(bF)) {
                            f.addEventListener(bF, "click", au, true);
                            f.addEventListener(bF, "mousedown", au, true);
                            bF.spDecorationEnabled = true
                        }
                    }
                }

                function bc() {
                    return {
                        transaction: {},
                        items: []
                    }
                }

                function bn(bF) {
                    var bG;
                    if (G) {
                        bG = new RegExp("#.*");
                        return bF.replace(bG, "")
                    }
                    return bF
                }

                function by(bF) {
                    var bH = new RegExp("^([a-z]+):"),
                        bG = bH.exec(bF);
                    return bG ? bG[1] : null
                }

                function be(bH, bF) {
                    var bI = by(bF),
                        bG;
                    if (bI) {
                        return bF
                    }
                    if (bF.slice(0, 1) === "/") {
                        return by(bH) + "://" + f.getHostName(bH) + bF
                    }
                    bH = bn(bH);
                    if ((bG = bH.indexOf("?")) >= 0) {
                        bH = bH.slice(0, bG)
                    }
                    if ((bG = bH.lastIndexOf("/")) !== bH.length - 1) {
                        bH = bH.slice(0, bG + 1)
                    }
                    return bH + bF
                }

                function an(bH, bG) {
                    var bF = new Date();
                    var bI = !!g.cookie(av);
                    if (!(bm || bI)) {
                        bo.enqueueRequest(bH.build(), x);
                        C.expireDateTime = bF.getTime() + bG
                    }
                }

                function Q(bF) {
                    return bs + bF + "." + a1
                }

                function ap(bG) {
                    var bF = Q(bG);
                    if (aY == "localStorage") {
                        return f.attemptGetLocalStorage(bF)
                    } else {
                        if (aY == "cookie" || aY == "cookieAndLocalStorage") {
                            return g.cookie(bF)
                        }
                    }
                }

                function aO() {
                    bB();
                    a1 = ak((I || bf) + (bt || "/")).slice(0, 4)
                }

                function bg() {
                    var bF = new Date();
                    aV = bF.getTime()
                }

                function a6() {
                    aB();
                    bg()
                }

                function aH() {
                    var bF = (ax.compatMode && ax.compatMode !== "BackCompat") ? ax.documentElement : ax.body;
                    return [bF.scrollLeft || al.pageXOffset, bF.scrollTop || al.pageYOffset]
                }

                function aN() {
                    var bG = aH();
                    var bF = bG[0];
                    aQ = bF;
                    aE = bF;
                    var bH = bG[1];
                    ay = bH;
                    af = bH
                }

                function aB() {
                    var bG = aH();
                    var bF = bG[0];
                    if (bF < aQ) {
                        aQ = bF
                    } else {
                        if (bF > aE) {
                            aE = bF
                        }
                    }
                    var bH = bG[1];
                    if (bH < ay) {
                        ay = bH
                    } else {
                        if (bH > af) {
                            af = bH
                        }
                    }
                }

                function Y(bG) {
                    var bF = Math.round(bG);
                    if (!isNaN(bF)) {
                        return bF
                    }
                }

                function aw() {
                    var bG = Q("ses");
                    var bF = "*";
                    ba(bG, bF, R)
                }

                function bq(bH, bG, bF, bJ, bI, bL) {
                    var bM = Q("id");
                    var bK = bH + "." + bG + "." + bF + "." + bJ + "." + bI + "." + bL;
                    ba(bM, bK, M)
                }

                function ba(bF, bH, bG) {
                    if (aY == "localStorage") {
                        f.attemptWriteLocalStorage(bF, bH)
                    } else {
                        if (aY == "cookie" || aY == "cookieAndLocalStorage") {
                            g.cookie(bF, bH, bG, bt, I)
                        }
                    }
                }

                function aP() {
                    return d.v4()
                }

                function B() {
                    var bG = aY != "none" && !!ap("ses");
                    var bF = a8();
                    if (bF[1]) {
                        at = bF[1]
                    } else {
                        at = aP();
                        bF[1] = at
                    }
                    ab = bF[6];
                    if (!bG) {
                        bF[3]++;
                        ab = d.v4();
                        bF[6] = ab;
                        bF[5] = bF[4]
                    }
                    if (aY != "none") {
                        aw();
                        bF[4] = Math.round(new Date().getTime() / 1000);
                        bF.shift();
                        bq.apply(null, bF)
                    }
                }

                function a8() {
                    if (aY == "none") {
                        return []
                    }
                    var bG = new Date(),
                        bF = Math.round(bG.getTime() / 1000),
                        bI = ap("id"),
                        bH;
                    if (bI) {
                        bH = bI.split(".");
                        bH.unshift("0")
                    } else {
                        bH = ["1", at, bF, 0, bF, ""]
                    }
                    if (!bH[6]) {
                        bH[6] = d.v4()
                    }
                    return bH
                }

                function N(bM) {
                    var bH = Math.round(new Date().getTime() / 1000),
                        bK = Q("id"),
                        bJ = Q("ses"),
                        bO = ap("ses"),
                        bG = a8(),
                        bP = bG[0],
                        bN = bG[1],
                        bS = bG[2],
                        bI = bG[3],
                        bR = bG[4],
                        bF = bG[5],
                        bL = bG[6];
                    var bQ = !!g.cookie(av);
                    if ((bm || bQ) && aY != "none") {
                        if (aY == "localStorage") {
                            f.attemptWriteLocalStorage(bK, "");
                            f.attemptWriteLocalStorage(sesName, "")
                        } else {
                            if (aY == "cookie" || aY == "cookieAndLocalStorage") {
                                g.cookie(bK, "", -1, bt, I);
                                g.cookie(bJ, "", -1, bt, I)
                            }
                        }
                        return
                    }
                    if (bP === "0") {
                        ab = bL;
                        if (!bO && aY != "none") {
                            bI++;
                            bF = bR;
                            ab = d.v4()
                        }
                        aa = bI
                    } else {
                        if ((new Date().getTime() - br) > R * 1000) {
                            ab = d.v4();
                            aa++
                        }
                    }
                    bM.add("vp", n.detectViewport());
                    bM.add("ds", n.detectDocumentSize());
                    bM.add("vid", aa);
                    bM.add("sid", ab);
                    bM.add("duid", bN);
                    bM.add("fp", y);
                    bM.add("uid", bD);
                    bB();
                    bM.add("refr", bn(ao || aW));
                    bM.add("url", bn(aD || bv));
                    if (aY != "none") {
                        bq(bN, bS, aa, bH, bF, ab);
                        aw()
                    }
                    br = new Date().getTime()
                }

                function am(bF) {
                    return bd(bF + ".cloudfront.net")
                }

                function bd(bF) {
                    if (a4) {
                        return ("https://" + bF)
                    }
                    if (ag) {
                        return ("http://" + bF)
                    }
                    return ("https:" === ax.location.protocol ? "https" : "http") + "://" + bF
                }

                function bp(bM) {
                    var bJ = bz.concat(bM || []);
                    if (bx.webPage) {
                        bJ.push(bh())
                    }
                    if (bx.performanceTiming) {
                        var bO = S();
                        if (bO) {
                            bJ.push(bO)
                        }
                    }
                    if (al.optimizely) {
                        if (bx.optimizelySummary) {
                            var bL = aj();
                            q.each(bL, function(bS) {
                                bJ.push(bS)
                            })
                        }
                        if (bx.optimizelyXSummary) {
                            var bL = a2();
                            q.each(bL, function(bS) {
                                bJ.push(bS)
                            })
                        }
                        if (bx.optimizelyExperiments) {
                            var bF = ah();
                            for (var bK = 0; bK < bF.length; bK++) {
                                bJ.push(bF[bK])
                            }
                        }
                        if (bx.optimizelyStates) {
                            var bQ = r();
                            for (var bK = 0; bK < bQ.length; bK++) {
                                bJ.push(bQ[bK])
                            }
                        }
                        if (bx.optimizelyVariations) {
                            var bR = bA();
                            for (var bK = 0; bK < bR.length; bK++) {
                                bJ.push(bR[bK])
                            }
                        }
                        if (bx.optimizelyVisitor) {
                            var bI = a7();
                            if (bI) {
                                bJ.push(bI)
                            }
                        }
                        if (bx.optimizelyAudiences) {
                            var bG = T();
                            for (var bK = 0; bK < bG.length; bK++) {
                                bJ.push(bG[bK])
                            }
                        }
                        if (bx.optimizelyDimensions) {
                            var bH = aX();
                            for (var bK = 0; bK < bH.length; bK++) {
                                bJ.push(bH[bK])
                            }
                        }
                    }
                    if (bx.augurIdentityLite) {
                        var bP = aG();
                        if (bP) {
                            bJ.push(bP)
                        }
                    }
                    if (bx.parrable) {
                        var bN = bC();
                        if (bN) {
                            bJ.push(bN)
                        }
                    }
                    return bJ
                }

                function aA() {
                    if (!aL || C.pageViewId == null) {
                        C.pageViewId = d.v4()
                    }
                }

                function aC() {
                    if (C.pageViewId == null) {
                        C.pageViewId = d.v4()
                    }
                    return C.pageViewId
                }

                function bh() {
                    return {
                        schema: "iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0",
                        data: {
                            id: aC()
                        }
                    }
                }

                function S() {
                    var bF = ["navigationStart", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "secureConnectionStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "unloadEventStart", "unloadEventEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd", "msFirstPaint", "chromeFirstPaint", "requestEnd", "proxyStart", "proxyEnd"];
                    var bI = al.performance || al.mozPerformance || al.msPerformance || al.webkitPerformance;
                    if (bI) {
                        var bH = {};
                        for (var bG in bI.timing) {
                            if (f.isValueInArray(bG, bF) && (bI.timing[bG] !== null)) {
                                bH[bG] = bI.timing[bG]
                            }
                        }
                        delete bH.requestEnd;
                        if (al.chrome && al.chrome.loadTimes && typeof al.chrome.loadTimes().firstPaintTime === "number") {
                            bH.chromeFirstPaint = Math.round(al.chrome.loadTimes().firstPaintTime * 1000)
                        }
                        return {
                            schema: "iglu:org.w3/PerformanceTiming/jsonschema/1-0-0",
                            data: bH
                        }
                    }
                }

                function A(bH, bF) {
                    var bG;
                    if (al.optimizely && al.optimizely.data) {
                        bG = al.optimizely.data[bH];
                        if (typeof bF !== "undefined" && bG !== undefined) {
                            bG = bG[bF]
                        }
                    }
                    return bG
                }

                function aI(bH, bF) {
                    var bG;
                    if (al.optimizely) {
                        bG = al.optimizely.get(bH);
                        if (typeof bF !== "undefined" && bG !== undefined) {
                            bG = bG[bF]
                        }
                    }
                    return bG
                }

                function bb() {
                    var bG = A("state");
                    var bF = A("experiments");
                    return q.map(bG && bF && bG.activeExperiments, function(bH) {
                        var bI = bF[bH];
                        return {
                            activeExperimentId: bH.toString(),
                            variation: bG.variationIdsMap[bH][0].toString(),
                            conditional: bI && bI.conditional,
                            manual: bI && bI.manual,
                            name: bI && bI.name
                        }
                    })
                }

                function Z() {
                    var bI = aI("state");
                    var bH = bI.getActiveExperimentIds();
                    var bF = aI("data", "experiments");
                    var bG = aI("visitor");
                    return q.map(bH, function(bJ) {
                        variation = bI.getVariationMap()[bJ];
                        variationName = variation.name;
                        variationId = variation.id;
                        visitorId = bG.visitorId;
                        return {
                            experimentId: parseInt(bJ),
                            variationName: variationName,
                            variation: parseInt(variationId),
                            visitorId: visitorId
                        }
                    })
                }

                function ah() {
                    var bI = A("experiments");
                    if (bI) {
                        var bJ = [];
                        for (var bH in bI) {
                            if (bI.hasOwnProperty(bH)) {
                                var bG = {};
                                bG.id = bH;
                                var bF = bI[bH];
                                bG.code = bF.code;
                                bG.manual = bF.manual;
                                bG.conditional = bF.conditional;
                                bG.name = bF.name;
                                bG.variationIds = bF.variation_ids;
                                bJ.push({
                                    schema: "iglu:com.optimizely/experiment/jsonschema/1-0-0",
                                    data: bG
                                })
                            }
                        }
                        return bJ
                    }
                    return []
                }

                function r() {
                    var bG = [];
                    var bQ = A("experiments");
                    if (bQ) {
                        for (var bO in bQ) {
                            if (bQ.hasOwnProperty(bO)) {
                                bG.push(bO)
                            }
                        }
                    }
                    var bH = A("state");
                    if (bH) {
                        var bJ = [];
                        var bL = bH.activeExperiments || [];
                        for (var bK = 0; bK < bG.length; bK++) {
                            var bM = bG[bK];
                            var bI = {};
                            bI.experimentId = bM;
                            bI.isActive = f.isValueInArray(bG[bK], bL);
                            var bP = bH.variationMap || {};
                            bI.variationIndex = bP[bM];
                            var bF = bH.variationNamesMap || {};
                            bI.variationName = bF[bM];
                            var bN = bH.variationIdsMap || {};
                            if (bN[bM] && bN[bM].length === 1) {
                                bI.variationId = bN[bM][0]
                            }
                            bJ.push({
                                schema: "iglu:com.optimizely/state/jsonschema/1-0-0",
                                data: bI
                            })
                        }
                        return bJ
                    }
                    return []
                }

                function bA() {
                    var bI = A("variations");
                    if (bI) {
                        var bJ = [];
                        for (var bH in bI) {
                            if (bI.hasOwnProperty(bH)) {
                                var bG = {};
                                bG.id = bH;
                                var bF = bI[bH];
                                bG.name = bF.name;
                                bG.code = bF.code;
                                bJ.push({
                                    schema: "iglu:com.optimizely/variation/jsonschema/1-0-0",
                                    data: bG
                                })
                            }
                        }
                        return bJ
                    }
                    return []
                }

                function a7() {
                    var bI = A("visitor");
                    if (bI) {
                        var bH = {};
                        bH.browser = bI.browser;
                        bH.browserVersion = bI.browserVersion;
                        bH.device = bI.device;
                        bH.deviceType = bI.deviceType;
                        bH.ip = bI.ip;
                        var bF = bI.platform || {};
                        bH.platformId = bF.id;
                        bH.platformVersion = bF.version;
                        var bG = bI.location || {};
                        bH.locationCity = bG.city;
                        bH.locationRegion = bG.region;
                        bH.locationCountry = bG.country;
                        bH.mobile = bI.mobile;
                        bH.mobileId = bI.mobileId;
                        bH.referrer = bI.referrer;
                        bH.os = bI.os;
                        return {
                            schema: "iglu:com.optimizely/visitor/jsonschema/1-0-0",
                            data: bH
                        }
                    }
                }

                function T() {
                    var bI = A("visitor", "audiences");
                    if (bI) {
                        var bH = [];
                        for (var bG in bI) {
                            if (bI.hasOwnProperty(bG)) {
                                var bF = {
                                    id: bG,
                                    isMember: bI[bG]
                                };
                                bH.push({
                                    schema: "iglu:com.optimizely/visitor_audience/jsonschema/1-0-0",
                                    data: bF
                                })
                            }
                        }
                        return bH
                    }
                    return []
                }

                function aX() {
                    var bF = A("visitor", "dimensions");
                    if (bF) {
                        var bI = [];
                        for (var bH in bF) {
                            if (bF.hasOwnProperty(bH)) {
                                var bG = {
                                    id: bH,
                                    value: bF[bH]
                                };
                                bI.push({
                                    schema: "iglu:com.optimizely/visitor_dimension/jsonschema/1-0-0",
                                    data: bG
                                })
                            }
                        }
                        return bI
                    }
                    return []
                }

                function aj() {
                    return q.map(bb(), function(bF) {
                        return {
                            schema: "iglu:com.optimizely.snowplow/optimizely_summary/jsonschema/1-0-0",
                            data: bF
                        }
                    })
                }

                function a2() {
                    return q.map(Z(), function(bF) {
                        return {
                            schema: "iglu:com.optimizely.optimizelyx/summary/jsonschema/1-0-0",
                            data: bF
                        }
                    })
                }

                function aG() {
                    var bI = al.augur;
                    if (bI) {
                        var bH = {
                            consumer: {},
                            device: {}
                        };
                        var bG = bI.consumer || {};
                        bH.consumer.UUID = bG.UID;
                        var bJ = bI.device || {};
                        bH.device.ID = bJ.ID;
                        bH.device.isBot = bJ.isBot;
                        bH.device.isProxied = bJ.isProxied;
                        bH.device.isTor = bJ.isTor;
                        var bF = bJ.fingerprint || {};
                        bH.device.isIncognito = bF.browserHasIncognitoEnabled;
                        return {
                            schema: "iglu:io.augur.snowplow/identity_lite/jsonschema/1-0-0",
                            data: bH
                        }
                    }
                }

                function bC() {
                    var bH = window._hawk;
                    if (bH) {
                        var bG = {
                            encryptedId: null,
                            optout: null
                        };
                        bG.encryptedId = bH.browserid;
                        var bI = new RegExp("(?:^|;)\\s?" + "_parrable_hawk_optout".replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1") + "=(.*?)(?:;|$)", "i"),
                            bF = document.cookie.match(bI);
                        bG.optout = (bF && decodeURIComponent(bF[1])) ? bF && decodeURIComponent(bF[1]) : "false";
                        return {
                            schema: "iglu:com.parrable/encrypted_payload/jsonschema/1-0-0",
                            data: bG
                        }
                    }
                }

                function ae() {
                    var bH = Math.round(new Date().getTime() / 1000),
                        bL = ap("ses"),
                        bG = a8(),
                        bM = bG[0],
                        bK = bG[1],
                        bO = bG[2],
                        bI = bG[3],
                        bN = bG[4],
                        bF = bG[5],
                        bJ = bG[6];
                    if (bM === "0") {
                        ab = bJ;
                        if (aY != "none") {
                            bI++;
                            bF = bN;
                            ab = d.v4()
                        }
                        aa = bI;
                        aw()
                    } else {
                        ab = d.v4();
                        aa++
                    }
                    if (aY != "none") {
                        bq(bK, bO, aa, bH, bF, ab);
                        aw()
                    }
                    br = new Date().getTime()
                }

                function bu() {
                    if (!a9 && W.geolocation && W.geolocation.getCurrentPosition) {
                        a9 = true;
                        W.geolocation.getCurrentPosition(function(bF) {
                            var bH = bF.coords;
                            var bG = {
                                schema: "iglu:com.snowplowanalytics.snowplow/geolocation_context/jsonschema/1-1-0",
                                data: {
                                    latitude: bH.latitude,
                                    longitude: bH.longitude,
                                    latitudeLongitudeAccuracy: bH.accuracy,
                                    altitude: bH.altitude,
                                    altitudeAccuracy: bH.altitudeAccuracy,
                                    bearing: bH.heading,
                                    speed: bH.speed,
                                    timestamp: Math.round(bF.timestamp)
                                }
                            };
                            bz.push(bG)
                        })
                    }
                }

                function H() {
                    var bF = {};
                    q.forEach(["__utma", "__utmb", "__utmc", "__utmv", "__utmz", "_ga"], function(bG) {
                        var bH = g.cookie(bG);
                        if (bH) {
                            bF[bG] = bH
                        }
                    });
                    return {
                        schema: "iglu:com.google.analytics/cookies/jsonschema/1-0-0",
                        data: bF
                    }
                }

                function aR(bG, bF) {
                    return (bG || []).concat(bF ? bF() : [])
                }

                function aK(bL, bI, bG, bF) {
                    bB();
                    if (J) {
                        aA()
                    }
                    J = true;
                    a0 = ax.title;
                    D = bL;
                    var bK = f.fixupTitle(D || a0);
                    z.trackPageView(bn(aD || bv), bK, bn(ao || aW), bp(aR(bI, bG)), bF);
                    var bH = new Date();
                    if (P && !aZ) {
                        aZ = true;
                        if (Object.prototype.hasOwnProperty.call(bj, "wheel")) {
                            if (Object.prototype.hasOwnProperty.call(bj, "passive")) {
                                f.addEventListener(ax, bj.wheel, bg, {
                                    passive: true
                                })
                            } else {
                                f.addEventListener(ax, bj.wheel, bg)
                            }
                        }
                        aN();
                        f.addEventListener(ax, "click", bg);
                        f.addEventListener(ax, "mouseup", bg);
                        f.addEventListener(ax, "mousedown", bg);
                        f.addEventListener(ax, "mousemove", bg);
                        f.addEventListener(al, "scroll", a6);
                        f.addEventListener(ax, "keypress", bg);
                        f.addEventListener(ax, "keydown", bg);
                        f.addEventListener(ax, "keyup", bg);
                        f.addEventListener(al, "resize", bg);
                        f.addEventListener(al, "focus", bg);
                        f.addEventListener(al, "blur", bg);
                        aV = bH.getTime();
                        clearInterval(bE);
                        bE = setInterval(function bJ() {
                            var bM = new Date();
                            if ((aV + V) > bM.getTime()) {
                                if (F < bM.getTime()) {
                                    s(aR(bI, bG))
                                }
                            }
                        }, V)
                    }
                }

                function s(bF) {
                    bB();
                    var bG = ax.title;
                    if (bG !== a0) {
                        a0 = bG;
                        D = null
                    }
                    z.trackPagePing(bn(aD || bv), f.fixupTitle(D || a0), bn(ao || aW), Y(aQ), Y(aE), Y(ay), Y(af), bp(bF));
                    aN()
                }

                function a5(bK, bJ, bP, bL, bF, bM, bG, bI, bO, bH, bN) {
                    z.trackEcommerceTransaction(bK, bJ, bP, bL, bF, bM, bG, bI, bO, bp(bH), bN)
                }

                function aF(bI, bM, bF, bG, bK, bJ, bN, bH, bL) {
                    z.trackEcommerceTransactionItem(bI, bM, bF, bG, bK, bJ, bN, bp(bH), bL)
                }

                function bl(bG, bF) {
                    if (bG !== "") {
                        return bG + bF.charAt(0).toUpperCase() + bF.slice(1)
                    }
                    return bF
                }

                function ad(bK) {
                    var bJ, bF, bI = ["", "webkit", "ms", "moz"],
                        bH;
                    if (!ar) {
                        for (bF = 0; bF < bI.length; bF++) {
                            bH = bI[bF];
                            if (ax[bl(bH, "hidden")]) {
                                if (ax[bl(bH, "visibilityState")] === "prerender") {
                                    bJ = true
                                }
                                break
                            } else {
                                if (ax[bl(bH, "hidden")] === false) {
                                    break
                                }
                            }
                        }
                    }
                    if (bJ) {
                        f.addEventListener(ax, bH + "visibilitychange", function bG() {
                            ax.removeEventListener(bH + "visibilitychange", bG, false);
                            bK()
                        });
                        return
                    }
                    bK()
                }
                aO();
                B();
                if (aJ.crossDomainLinker) {
                    w(aJ.crossDomainLinker)
                }
                return {
                    getDomainSessionIndex: function() {
                        return aa
                    },
                    getPageViewId: function() {
                        return aC()
                    },
                    newSession: ae,
                    getCookieName: function(bF) {
                        return Q(bF)
                    },
                    getUserId: function() {
                        return bD
                    },
                    getDomainUserId: function() {
                        return (a8())[1]
                    },
                    getDomainUserInfo: function() {
                        return a8()
                    },
                    getUserFingerprint: function() {
                        return y
                    },
                    setAppId: function(bF) {
                        f.warn('setAppId is deprecated. Instead add an "appId" field to the argmap argument of newTracker.');
                        z.setAppId(bF)
                    },
                    setReferrerUrl: function(bF) {
                        ao = bF
                    },
                    setCustomUrl: function(bF) {
                        bB();
                        aD = be(bv, bF)
                    },
                    setDocumentTitle: function(bF) {
                        a0 = ax.title;
                        D = bF
                    },
                    discardHashTag: function(bF) {
                        G = bF
                    },
                    setCookieNamePrefix: function(bF) {
                        f.warn('setCookieNamePrefix is deprecated. Instead add a "cookieName" field to the argmap argument of newTracker.');
                        bs = bF
                    },
                    setCookieDomain: function(bF) {
                        f.warn('setCookieDomain is deprecated. Instead add a "cookieDomain" field to the argmap argument of newTracker.');
                        I = f.fixupDomain(bF);
                        aO()
                    },
                    setCookiePath: function(bF) {
                        bt = bF;
                        aO()
                    },
                    setVisitorCookieTimeout: function(bF) {
                        M = bF
                    },
                    setSessionCookieTimeout: function(bF) {
                        f.warn('setSessionCookieTimeout is deprecated. Instead add a "sessionCookieTimeout" field to the argmap argument of newTracker.');
                        R = bF
                    },
                    setUserFingerprintSeed: function(bF) {
                        f.warn('setUserFingerprintSeed is deprecated. Instead add a "userFingerprintSeed" field to the argmap argument of newTracker.');
                        X = bF;
                        y = n.detectSignature(X)
                    },
                    enableUserFingerprint: function(bF) {
                        f.warn('enableUserFingerprintSeed is deprecated. Instead add a "userFingerprint" field to the argmap argument of newTracker.');
                        if (!bF) {
                            y = ""
                        }
                    },
                    respectDoNotTrack: function(bG) {
                        f.warn('This usage of respectDoNotTrack is deprecated. Instead add a "respectDoNotTrack" field to the argmap argument of newTracker.');
                        var bF = W.doNotTrack || W.msDoNotTrack;
                        bm = bG && (bF === "yes" || bF === "1")
                    },
                    crossDomainLinker: function(bF) {
                        w(bF)
                    },
                    addListener: function(bH, bF, bG) {
                        addClickListener(bH, bF, bG)
                    },
                    enableLinkClickTracking: function(bH, bF, bI, bG) {
                        if (C.hasLoaded) {
                            u.configureLinkClickTracking(bH, bF, bI, bG);
                            u.addClickListeners()
                        } else {
                            C.registeredOnLoadHandlers.push(function() {
                                u.configureLinkClickTracking(bH, bF, bI, bG);
                                u.addClickListeners()
                            })
                        }
                    },
                    refreshLinkClickTracking: function() {
                        if (C.hasLoaded) {
                            u.addClickListeners()
                        } else {
                            C.registeredOnLoadHandlers.push(function() {
                                u.addClickListeners()
                            })
                        }
                    },
                    enableActivityTracking: function(bG, bF) {
                        if (bG === parseInt(bG, 10) && bF === parseInt(bF, 10)) {
                            P = true;
                            F = new Date().getTime() + bG * 1000;
                            V = bF * 1000
                        } else {
                            f.warn("Activity tracking not enabled, please provide integer values for minimumVisitLength and heartBeatDelay.")
                        }
                    },
                    updatePageActivity: function() {
                        bg()
                    },
                    enableFormTracking: function(bF, bG) {
                        if (C.hasLoaded) {
                            az.configureFormTracking(bF);
                            az.addFormListeners(bG)
                        } else {
                            C.registeredOnLoadHandlers.push(function() {
                                az.configureFormTracking(bF);
                                az.addFormListeners(bG)
                            })
                        }
                    },
                    killFrame: function() {
                        if (al.location !== al.top.location) {
                            al.top.location = al.location
                        }
                    },
                    redirectFile: function(bF) {
                        if (al.location.protocol === "file:") {
                            al.location = bF
                        }
                    },
                    setOptOutCookie: function(bF) {
                        av = bF
                    },
                    setCountPreRendered: function(bF) {
                        ar = bF
                    },
                    setUserId: function(bF) {
                        bD = bF
                    },
                    identifyUser: function(bF) {
                        setUserId(bF)
                    },
                    setUserIdFromLocation: function(bF) {
                        bB();
                        bD = f.fromQuerystring(bF, bv)
                    },
                    setUserIdFromReferrer: function(bF) {
                        bB();
                        bD = f.fromQuerystring(bF, aW)
                    },
                    setUserIdFromCookie: function(bF) {
                        bD = g.cookie(bF)
                    },
                    setCollectorCf: function(bF) {
                        x = am(bF)
                    },
                    setCollectorUrl: function(bF) {
                        x = bd(bF)
                    },
                    setPlatform: function(bF) {
                        f.warn('setPlatform is deprecated. Instead add a "platform" field to the argmap argument of newTracker.');
                        z.setPlatform(bF)
                    },
                    encodeBase64: function(bF) {
                        f.warn('This usage of encodeBase64 is deprecated. Instead add an "encodeBase64" field to the argmap argument of newTracker.');
                        z.setBase64Encoding(bF)
                    },
                    flushBuffer: function() {
                        bo.executeQueue()
                    },
                    enableGeolocationContext: bu,
                    trackPageView: function(bI, bH, bG, bF) {
                        ad(function() {
                            aK(bI, bH, bG, bF)
                        })
                    },
                    trackStructEvent: function(bI, bL, bG, bK, bJ, bH, bF) {
                        ad(function() {
                            z.trackStructEvent(bI, bL, bG, bK, bJ, bp(bH), bF)
                        })
                    },
                    trackSelfDescribingEvent: function(bG, bH, bF) {
                        ad(function() {
                            z.trackSelfDescribingEvent(bG, bp(bH), bF)
                        })
                    },
                    trackUnstructEvent: function(bG, bH, bF) {
                        ad(function() {
                            z.trackSelfDescribingEvent(bG, bp(bH), bF)
                        })
                    },
                    addTrans: function(bK, bJ, bP, bL, bF, bM, bG, bI, bO, bH, bN) {
                        E.transaction = {
                            orderId: bK,
                            affiliation: bJ,
                            total: bP,
                            tax: bL,
                            shipping: bF,
                            city: bM,
                            state: bG,
                            country: bI,
                            currency: bO,
                            context: bH,
                            tstamp: bN
                        }
                    },
                    addItem: function(bI, bM, bF, bG, bK, bJ, bN, bH, bL) {
                        E.items.push({
                            orderId: bI,
                            sku: bM,
                            name: bF,
                            category: bG,
                            price: bK,
                            quantity: bJ,
                            currency: bN,
                            context: bH,
                            tstamp: bL
                        })
                    },
                    trackTrans: function() {
                        ad(function() {
                            a5(E.transaction.orderId, E.transaction.affiliation, E.transaction.total, E.transaction.tax, E.transaction.shipping, E.transaction.city, E.transaction.state, E.transaction.country, E.transaction.currency, E.transaction.context, E.transaction.tstamp);
                            for (var bF = 0; bF < E.items.length; bF++) {
                                var bG = E.items[bF];
                                aF(bG.orderId, bG.sku, bG.name, bG.category, bG.price, bG.quantity, bG.currency, bG.context, bG.tstamp)
                            }
                            E = bc()
                        })
                    },
                    trackLinkClick: function(bL, bH, bI, bG, bK, bJ, bF) {
                        ad(function() {
                            z.trackLinkClick(bL, bH, bI, bG, bK, bp(bJ), bF)
                        })
                    },
                    trackAdImpression: function(bJ, bF, bH, bI, bO, bK, bL, bN, bG, bM) {
                        ad(function() {
                            z.trackAdImpression(bJ, bF, bH, bI, bO, bK, bL, bN, bp(bG), bM)
                        })
                    },
                    trackAdClick: function(bH, bM, bF, bI, bP, bK, bJ, bL, bO, bG, bN) {
                        ad(function() {
                            z.trackAdClick(bH, bM, bF, bI, bP, bK, bJ, bL, bO, bp(bG), bN)
                        })
                    },
                    trackAdConversion: function(bP, bF, bI, bH, bK, bN, bO, bJ, bM, bG, bL) {
                        ad(function() {
                            z.trackAdConversion(bP, bF, bI, bH, bK, bN, bO, bJ, bM, bp(bG), bL)
                        })
                    },
                    trackSocialInteraction: function(bI, bH, bJ, bG, bF) {
                        ad(function() {
                            z.trackSocialInteraction(bI, bH, bJ, bp(bG), bF)
                        })
                    },
                    trackAddToCart: function(bM, bH, bJ, bK, bL, bG, bI, bF) {
                        ad(function() {
                            z.trackAddToCart(bM, bH, bJ, bK, bL, bG, bp(bI), bF)
                        })
                    },
                    trackRemoveFromCart: function(bM, bH, bJ, bK, bL, bG, bI, bF) {
                        ad(function() {
                            z.trackRemoveFromCart(bM, bH, bJ, bK, bL, bG, bp(bI), bF)
                        })
                    },
                    trackSiteSearch: function(bK, bJ, bG, bH, bI, bF) {
                        ad(function() {
                            z.trackSiteSearch(bK, bJ, bG, bH, bp(bI), bF)
                        })
                    },
                    trackTiming: function(bK, bH, bJ, bG, bI, bF) {
                        ad(function() {
                            z.trackSelfDescribingEvent({
                                schema: "iglu:com.snowplowanalytics.snowplow/timing/jsonschema/1-0-0",
                                data: {
                                    category: bK,
                                    variable: bH,
                                    timing: bJ,
                                    label: bG
                                }
                            }, bp(bI), bF)
                        })
                    },
                    trackConsentWithdrawn: function(bJ, bL, bG, bH, bK, bI, bF) {
                        ad(function() {
                            z.trackConsentWithdrawn(bJ, bL, bG, bH, bK, bp(bI), bF)
                        })
                    },
                    trackConsentGranted: function(bL, bG, bH, bK, bJ, bI, bF) {
                        ad(function() {
                            z.trackConsentGranted(bL, bG, bH, bK, bJ, bp(bI), bF)
                        })
                    },
                    trackEnhancedEcommerceAction: function(bI, bG, bF) {
                        var bH = t.concat(bG || []);
                        t.length = 0;
                        ad(function() {
                            z.trackSelfDescribingEvent({
                                schema: "iglu:com.google.analytics.enhanced-ecommerce/action/jsonschema/1-0-0",
                                data: {
                                    action: bI
                                }
                            }, bp(bH), bF)
                        })
                    },
                    addEnhancedEcommerceActionContext: function(bH, bK, bG, bL, bF, bI, bN, bJ, bM, bO) {
                        t.push({
                            schema: "iglu:com.google.analytics.enhanced-ecommerce/actionFieldObject/jsonschema/1-0-0",
                            data: {
                                id: bH,
                                affiliation: bK,
                                revenue: f.parseFloat(bG),
                                tax: f.parseFloat(bL),
                                shipping: f.parseFloat(bF),
                                coupon: bI,
                                list: bN,
                                step: f.parseInt(bJ),
                                option: bM,
                                currency: bO
                            }
                        })
                    },
                    addEnhancedEcommerceImpressionContext: function(bG, bF, bM, bI, bH, bJ, bK, bL, bN) {
                        t.push({
                            schema: "iglu:com.google.analytics.enhanced-ecommerce/impressionFieldObject/jsonschema/1-0-0",
                            data: {
                                id: bG,
                                name: bF,
                                list: bM,
                                brand: bI,
                                category: bH,
                                variant: bJ,
                                position: f.parseInt(bK),
                                price: f.parseFloat(bL),
                                currency: bN
                            }
                        })
                    },
                    addEnhancedEcommerceProductContext: function(bG, bF, bO, bJ, bH, bL, bN, bK, bI, bM, bP) {
                        t.push({
                            schema: "iglu:com.google.analytics.enhanced-ecommerce/productFieldObject/jsonschema/1-0-0",
                            data: {
                                id: bG,
                                name: bF,
                                list: bO,
                                brand: bJ,
                                category: bH,
                                variant: bL,
                                price: f.parseFloat(bN),
                                quantity: f.parseInt(bK),
                                coupon: bI,
                                position: f.parseInt(bM),
                                currency: bP
                            }
                        })
                    },
                    addEnhancedEcommercePromoContext: function(bJ, bI, bH, bF, bG) {
                        t.push({
                            schema: "iglu:com.google.analytics.enhanced-ecommerce/promoFieldObject/jsonschema/1-0-0",
                            data: {
                                id: bJ,
                                name: bI,
                                creative: bH,
                                position: bF,
                                currency: bG
                            }
                        })
                    },
                    enableErrorTracking: function(bF, bG) {
                        aT.enableErrorTracking(bF, bG, bp())
                    },
                    trackError: function(bI, bF, bK, bH, bG, bL) {
                        var bJ = bp(bL);
                        aT.trackError(bI, bF, bK, bH, bG, bJ)
                    },
                    preservePageViewId: function() {
                        aL = true
                    }
                }
            }
        }())
    }, {
        "./errors": 13,
        "./forms": 14,
        "./lib/detectors": 17,
        "./lib/helpers": 18,
        "./lib/proxies": 19,
        "./lib_managed/lodash": 20,
        "./links": 21,
        "./out_queue": 22,
        "browser-cookie-lite": 1,
        sha1: 6,
        "snowplow-tracker-core": 7,
        uuid: 12
    }]
}, {}, [16]);