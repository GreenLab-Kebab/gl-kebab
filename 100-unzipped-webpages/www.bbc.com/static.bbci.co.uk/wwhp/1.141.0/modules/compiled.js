(function() {
    (function(e, t) {
        "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define("vendor/bower/happens/index", t) : e.Happens = t()
    })(this, function() {
        "use strict";

        function e(t) {
            var n = this instanceof e;
            if (t) {
                if (!!n) throw new Error("You can't pass a target when instantiating with the `new` keyword");
                for (var r in e.prototype) t[r] = e.prototype[r]
            } else if (!n) return new e
        }

        function t(e) {
            if (!(e && e instanceof Function)) throw new Error(e + " is not a Function")
        }
        return e.prototype.__init = function(e) {
            var t = this.__listeners || (this.__listeners = []);
            return t[e] || (t[e] = [])
        }, e.prototype.on = function(e, n) {
            t(n), this.__init(e).push(n)
        }, e.prototype.off = function(e, t) {
            var n = this.__init(e);
            n.splice(n.indexOf(t), 1)
        }, e.prototype.once = function(e, n) {
            t(n);
            var r = this,
                i = function() {
                    r.off(e, i), n.apply(this, arguments)
                };
            this.on(e, i)
        }, e.prototype.emit = function(e) {
            var t, n = this.__init(e).slice(0);
            for (t in n) n[t].apply(this, [].slice.call(arguments, 1))
        }, e
    }), define("lib/core", ["jquery", "vendor/bower/happens/index"], function(e, t) {
            "use strict";
            return {
                $: e,
                config: {},
                pubsub: t()
            }
        }),
        function(e) {
            define("vendor/bower/underscore/underscore", [], function() {
                return function() {
                    return function() {
                        function x(e) {
                            function t(t, n, r, i, s, o) {
                                for (; s >= 0 && s < o; s += e) {
                                    var u = i ? i[s] : s;
                                    r = n(r, t[u], u, t)
                                }
                                return r
                            }
                            return function(n, r, i, s) {
                                r = v(r, s, 4);
                                var o = !S(n) && d.keys(n),
                                    u = (o || n).length,
                                    a = e > 0 ? 0 : u - 1;
                                return arguments.length < 3 && (i = n[o ? o[a] : a], a += e), t(n, r, i, o, a, u)
                            }
                        }

                        function C(e) {
                            return function(t, n, r) {
                                n = m(n, r);
                                var i = E(t),
                                    s = e > 0 ? 0 : i - 1;
                                for (; s >= 0 && s < i; s += e)
                                    if (n(t[s], s, t)) return s;
                                return -1
                            }
                        }

                        function k(e, t, n) {
                            return function(r, i, s) {
                                var u = 0,
                                    a = E(r);
                                if (typeof s == "number") e > 0 ? u = s >= 0 ? s : Math.max(s + a, u) : a = s >= 0 ? Math.min(s + 1, a) : s + a + 1;
                                else if (n && s && a) return s = n(r, i), r[s] === i ? s : -1;
                                if (i !== i) return s = t(o.call(r, u, a), d.isNaN), s >= 0 ? s + u : -1;
                                for (s = e > 0 ? u : a - 1; s >= 0 && s < a; s += e)
                                    if (r[s] === i) return s;
                                return -1
                            }
                        }

                        function M(e, t) {
                            var n = O.length,
                                i = e.constructor,
                                s = d.isFunction(i) && i.prototype || r,
                                o = "constructor";
                            d.has(e, o) && !d.contains(t, o) && t.push(o);
                            while (n--) o = O[n], o in e && e[o] !== s[o] && !d.contains(t, o) && t.push(o)
                        }
                        var e = this,
                            t = e._,
                            n = Array.prototype,
                            r = Object.prototype,
                            i = Function.prototype,
                            s = n.push,
                            o = n.slice,
                            u = r.toString,
                            a = r.hasOwnProperty,
                            f = Array.isArray,
                            l = Object.keys,
                            c = i.bind,
                            h = Object.create,
                            p = function() {},
                            d = function(e) {
                                if (e instanceof d) return e;
                                if (!(this instanceof d)) return new d(e);
                                this._wrapped = e
                            };
                        typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = d), exports._ = d) : e._ = d, d.VERSION = "1.8.3";
                        var v = function(e, t, n) {
                                if (t === void 0) return e;
                                switch (n == null ? 3 : n) {
                                    case 1:
                                        return function(n) {
                                            return e.call(t, n)
                                        };
                                    case 2:
                                        return function(n, r) {
                                            return e.call(t, n, r)
                                        };
                                    case 3:
                                        return function(n, r, i) {
                                            return e.call(t, n, r, i)
                                        };
                                    case 4:
                                        return function(n, r, i, s) {
                                            return e.call(t, n, r, i, s)
                                        }
                                }
                                return function() {
                                    return e.apply(t, arguments)
                                }
                            },
                            m = function(e, t, n) {
                                return e == null ? d.identity : d.isFunction(e) ? v(e, t, n) : d.isObject(e) ? d.matcher(e) : d.property(e)
                            };
                        d.iteratee = function(e, t) {
                            return m(e, t, Infinity)
                        };
                        var g = function(e, t) {
                                return function(n) {
                                    var r = arguments.length;
                                    if (r < 2 || n == null) return n;
                                    for (var i = 1; i < r; i++) {
                                        var s = arguments[i],
                                            o = e(s),
                                            u = o.length;
                                        for (var a = 0; a < u; a++) {
                                            var f = o[a];
                                            if (!t || n[f] === void 0) n[f] = s[f]
                                        }
                                    }
                                    return n
                                }
                            },
                            y = function(e) {
                                if (!d.isObject(e)) return {};
                                if (h) return h(e);
                                p.prototype = e;
                                var t = new p;
                                return p.prototype = null, t
                            },
                            b = function(e) {
                                return function(t) {
                                    return t == null ? void 0 : t[e]
                                }
                            },
                            w = Math.pow(2, 53) - 1,
                            E = b("length"),
                            S = function(e) {
                                var t = E(e);
                                return typeof t == "number" && t >= 0 && t <= w
                            };
                        d.each = d.forEach = function(e, t, n) {
                            t = v(t, n);
                            var r, i;
                            if (S(e))
                                for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
                            else {
                                var s = d.keys(e);
                                for (r = 0, i = s.length; r < i; r++) t(e[s[r]], s[r], e)
                            }
                            return e
                        }, d.map = d.collect = function(e, t, n) {
                            t = m(t, n);
                            var r = !S(e) && d.keys(e),
                                i = (r || e).length,
                                s = Array(i);
                            for (var o = 0; o < i; o++) {
                                var u = r ? r[o] : o;
                                s[o] = t(e[u], u, e)
                            }
                            return s
                        }, d.reduce = d.foldl = d.inject = x(1), d.reduceRight = d.foldr = x(-1), d.find = d.detect = function(e, t, n) {
                            var r;
                            S(e) ? r = d.findIndex(e, t, n) : r = d.findKey(e, t, n);
                            if (r !== void 0 && r !== -1) return e[r]
                        }, d.filter = d.select = function(e, t, n) {
                            var r = [];
                            return t = m(t, n), d.each(e, function(e, n, i) {
                                t(e, n, i) && r.push(e)
                            }), r
                        }, d.reject = function(e, t, n) {
                            return d.filter(e, d.negate(m(t)), n)
                        }, d.every = d.all = function(e, t, n) {
                            t = m(t, n);
                            var r = !S(e) && d.keys(e),
                                i = (r || e).length;
                            for (var s = 0; s < i; s++) {
                                var o = r ? r[s] : s;
                                if (!t(e[o], o, e)) return !1
                            }
                            return !0
                        }, d.some = d.any = function(e, t, n) {
                            t = m(t, n);
                            var r = !S(e) && d.keys(e),
                                i = (r || e).length;
                            for (var s = 0; s < i; s++) {
                                var o = r ? r[s] : s;
                                if (t(e[o], o, e)) return !0
                            }
                            return !1
                        }, d.contains = d.includes = d.include = function(e, t, n, r) {
                            S(e) || (e = d.values(e));
                            if (typeof n != "number" || r) n = 0;
                            return d.indexOf(e, t, n) >= 0
                        }, d.invoke = function(e, t) {
                            var n = o.call(arguments, 2),
                                r = d.isFunction(t);
                            return d.map(e, function(e) {
                                var i = r ? t : e[t];
                                return i == null ? i : i.apply(e, n)
                            })
                        }, d.pluck = function(e, t) {
                            return d.map(e, d.property(t))
                        }, d.where = function(e, t) {
                            return d.filter(e, d.matcher(t))
                        }, d.findWhere = function(e, t) {
                            return d.find(e, d.matcher(t))
                        }, d.max = function(e, t, n) {
                            var r = -Infinity,
                                i = -Infinity,
                                s, o;
                            if (t == null && e != null) {
                                e = S(e) ? e : d.values(e);
                                for (var u = 0, a = e.length; u < a; u++) s = e[u], s > r && (r = s)
                            } else t = m(t, n), d.each(e, function(e, n, s) {
                                o = t(e, n, s);
                                if (o > i || o === -Infinity && r === -Infinity) r = e, i = o
                            });
                            return r
                        }, d.min = function(e, t, n) {
                            var r = Infinity,
                                i = Infinity,
                                s, o;
                            if (t == null && e != null) {
                                e = S(e) ? e : d.values(e);
                                for (var u = 0, a = e.length; u < a; u++) s = e[u], s < r && (r = s)
                            } else t = m(t, n), d.each(e, function(e, n, s) {
                                o = t(e, n, s);
                                if (o < i || o === Infinity && r === Infinity) r = e, i = o
                            });
                            return r
                        }, d.shuffle = function(e) {
                            var t = S(e) ? e : d.values(e),
                                n = t.length,
                                r = Array(n);
                            for (var i = 0, s; i < n; i++) s = d.random(0, i), s !== i && (r[i] = r[s]), r[s] = t[i];
                            return r
                        }, d.sample = function(e, t, n) {
                            return t == null || n ? (S(e) || (e = d.values(e)), e[d.random(e.length - 1)]) : d.shuffle(e).slice(0, Math.max(0, t))
                        }, d.sortBy = function(e, t, n) {
                            return t = m(t, n), d.pluck(d.map(e, function(e, n, r) {
                                return {
                                    value: e,
                                    index: n,
                                    criteria: t(e, n, r)
                                }
                            }).sort(function(e, t) {
                                var n = e.criteria,
                                    r = t.criteria;
                                if (n !== r) {
                                    if (n > r || n === void 0) return 1;
                                    if (n < r || r === void 0) return -1
                                }
                                return e.index - t.index
                            }), "value")
                        };
                        var T = function(e) {
                            return function(t, n, r) {
                                var i = {};
                                return n = m(n, r), d.each(t, function(r, s) {
                                    var o = n(r, s, t);
                                    e(i, r, o)
                                }), i
                            }
                        };
                        d.groupBy = T(function(e, t, n) {
                            d.has(e, n) ? e[n].push(t) : e[n] = [t]
                        }), d.indexBy = T(function(e, t, n) {
                            e[n] = t
                        }), d.countBy = T(function(e, t, n) {
                            d.has(e, n) ? e[n]++ : e[n] = 1
                        }), d.toArray = function(e) {
                            return e ? d.isArray(e) ? o.call(e) : S(e) ? d.map(e, d.identity) : d.values(e) : []
                        }, d.size = function(e) {
                            return e == null ? 0 : S(e) ? e.length : d.keys(e).length
                        }, d.partition = function(e, t, n) {
                            t = m(t, n);
                            var r = [],
                                i = [];
                            return d.each(e, function(e, n, s) {
                                (t(e, n, s) ? r : i).push(e)
                            }), [r, i]
                        }, d.first = d.head = d.take = function(e, t, n) {
                            return e == null ? void 0 : t == null || n ? e[0] : d.initial(e, e.length - t)
                        }, d.initial = function(e, t, n) {
                            return o.call(e, 0, Math.max(0, e.length - (t == null || n ? 1 : t)))
                        }, d.last = function(e, t, n) {
                            return e == null ? void 0 : t == null || n ? e[e.length - 1] : d.rest(e, Math.max(0, e.length - t))
                        }, d.rest = d.tail = d.drop = function(e, t, n) {
                            return o.call(e, t == null || n ? 1 : t)
                        }, d.compact = function(e) {
                            return d.filter(e, d.identity)
                        };
                        var N = function(e, t, n, r) {
                            var i = [],
                                s = 0;
                            for (var o = r || 0, u = E(e); o < u; o++) {
                                var a = e[o];
                                if (S(a) && (d.isArray(a) || d.isArguments(a))) {
                                    t || (a = N(a, t, n));
                                    var f = 0,
                                        l = a.length;
                                    i.length += l;
                                    while (f < l) i[s++] = a[f++]
                                } else n || (i[s++] = a)
                            }
                            return i
                        };
                        d.flatten = function(e, t) {
                            return N(e, t, !1)
                        }, d.without = function(e) {
                            return d.difference(e, o.call(arguments, 1))
                        }, d.uniq = d.unique = function(e, t, n, r) {
                            d.isBoolean(t) || (r = n, n = t, t = !1), n != null && (n = m(n, r));
                            var i = [],
                                s = [];
                            for (var o = 0, u = E(e); o < u; o++) {
                                var a = e[o],
                                    f = n ? n(a, o, e) : a;
                                t ? ((!o || s !== f) && i.push(a), s = f) : n ? d.contains(s, f) || (s.push(f), i.push(a)) : d.contains(i, a) || i.push(a)
                            }
                            return i
                        }, d.union = function() {
                            return d.uniq(N(arguments, !0, !0))
                        }, d.intersection = function(e) {
                            var t = [],
                                n = arguments.length;
                            for (var r = 0, i = E(e); r < i; r++) {
                                var s = e[r];
                                if (d.contains(t, s)) continue;
                                for (var o = 1; o < n; o++)
                                    if (!d.contains(arguments[o], s)) break;
                                o === n && t.push(s)
                            }
                            return t
                        }, d.difference = function(e) {
                            var t = N(arguments, !0, !0, 1);
                            return d.filter(e, function(e) {
                                return !d.contains(t, e)
                            })
                        }, d.zip = function() {
                            return d.unzip(arguments)
                        }, d.unzip = function(e) {
                            var t = e && d.max(e, E).length || 0,
                                n = Array(t);
                            for (var r = 0; r < t; r++) n[r] = d.pluck(e, r);
                            return n
                        }, d.object = function(e, t) {
                            var n = {};
                            for (var r = 0, i = E(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
                            return n
                        }, d.findIndex = C(1), d.findLastIndex = C(-1), d.sortedIndex = function(e, t, n, r) {
                            n = m(n, r, 1);
                            var i = n(t),
                                s = 0,
                                o = E(e);
                            while (s < o) {
                                var u = Math.floor((s + o) / 2);
                                n(e[u]) < i ? s = u + 1 : o = u
                            }
                            return s
                        }, d.indexOf = k(1, d.findIndex, d.sortedIndex), d.lastIndexOf = k(-1, d.findLastIndex), d.range = function(e, t, n) {
                            t == null && (t = e || 0, e = 0), n = n || 1;
                            var r = Math.max(Math.ceil((t - e) / n), 0),
                                i = Array(r);
                            for (var s = 0; s < r; s++, e += n) i[s] = e;
                            return i
                        };
                        var L = function(e, t, n, r, i) {
                            if (r instanceof t) {
                                var s = y(e.prototype),
                                    o = e.apply(s, i);
                                return d.isObject(o) ? o : s
                            }
                            return e.apply(n, i)
                        };
                        d.bind = function(e, t) {
                            if (c && e.bind === c) return c.apply(e, o.call(arguments, 1));
                            if (!d.isFunction(e)) throw new TypeError("Bind must be called on a function");
                            var n = o.call(arguments, 2),
                                r = function() {
                                    return L(e, r, t, this, n.concat(o.call(arguments)))
                                };
                            return r
                        }, d.partial = function(e) {
                            var t = o.call(arguments, 1),
                                n = function() {
                                    var r = 0,
                                        i = t.length,
                                        s = Array(i);
                                    for (var o = 0; o < i; o++) s[o] = t[o] === d ? arguments[r++] : t[o];
                                    while (r < arguments.length) s.push(arguments[r++]);
                                    return L(e, n, this, this, s)
                                };
                            return n
                        }, d.bindAll = function(e) {
                            var t, n = arguments.length,
                                r;
                            if (n <= 1) throw new Error("bindAll must be passed function names");
                            for (t = 1; t < n; t++) r = arguments[t], e[r] = d.bind(e[r], e);
                            return e
                        }, d.memoize = function(e, t) {
                            var n = function(r) {
                                var i = n.cache,
                                    s = "" + (t ? t.apply(this, arguments) : r);
                                return d.has(i, s) || (i[s] = e.apply(this, arguments)), i[s]
                            };
                            return n.cache = {}, n
                        }, d.delay = function(e, t) {
                            var n = o.call(arguments, 2);
                            return setTimeout(function() {
                                return e.apply(null, n)
                            }, t)
                        }, d.defer = d.partial(d.delay, d, 1), d.throttle = function(e, t, n) {
                            var r, i, s, o = null,
                                u = 0;
                            n || (n = {});
                            var a = function() {
                                u = n.leading === !1 ? 0 : d.now(), o = null, s = e.apply(r, i), o || (r = i = null)
                            };
                            return function() {
                                var f = d.now();
                                !u && n.leading === !1 && (u = f);
                                var l = t - (f - u);
                                return r = this, i = arguments, l <= 0 || l > t ? (o && (clearTimeout(o), o = null), u = f, s = e.apply(r, i), o || (r = i = null)) : !o && n.trailing !== !1 && (o = setTimeout(a, l)), s
                            }
                        }, d.debounce = function(e, t, n) {
                            var r, i, s, o, u, a = function() {
                                var f = d.now() - o;
                                f < t && f >= 0 ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i), r || (s = i = null)))
                            };
                            return function() {
                                s = this, i = arguments, o = d.now();
                                var f = n && !r;
                                return r || (r = setTimeout(a, t)), f && (u = e.apply(s, i), s = i = null), u
                            }
                        }, d.wrap = function(e, t) {
                            return d.partial(t, e)
                        }, d.negate = function(e) {
                            return function() {
                                return !e.apply(this, arguments)
                            }
                        }, d.compose = function() {
                            var e = arguments,
                                t = e.length - 1;
                            return function() {
                                var n = t,
                                    r = e[t].apply(this, arguments);
                                while (n--) r = e[n].call(this, r);
                                return r
                            }
                        }, d.after = function(e, t) {
                            return function() {
                                if (--e < 1) return t.apply(this, arguments)
                            }
                        }, d.before = function(e, t) {
                            var n;
                            return function() {
                                return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
                            }
                        }, d.once = d.partial(d.before, 2);
                        var A = !{
                                toString: null
                            }.propertyIsEnumerable("toString"),
                            O = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
                        d.keys = function(e) {
                            if (!d.isObject(e)) return [];
                            if (l) return l(e);
                            var t = [];
                            for (var n in e) d.has(e, n) && t.push(n);
                            return A && M(e, t), t
                        }, d.allKeys = function(e) {
                            if (!d.isObject(e)) return [];
                            var t = [];
                            for (var n in e) t.push(n);
                            return A && M(e, t), t
                        }, d.values = function(e) {
                            var t = d.keys(e),
                                n = t.length,
                                r = Array(n);
                            for (var i = 0; i < n; i++) r[i] = e[t[i]];
                            return r
                        }, d.mapObject = function(e, t, n) {
                            t = m(t, n);
                            var r = d.keys(e),
                                i = r.length,
                                s = {},
                                o;
                            for (var u = 0; u < i; u++) o = r[u], s[o] = t(e[o], o, e);
                            return s
                        }, d.pairs = function(e) {
                            var t = d.keys(e),
                                n = t.length,
                                r = Array(n);
                            for (var i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
                            return r
                        }, d.invert = function(e) {
                            var t = {},
                                n = d.keys(e);
                            for (var r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
                            return t
                        }, d.functions = d.methods = function(e) {
                            var t = [];
                            for (var n in e) d.isFunction(e[n]) && t.push(n);
                            return t.sort()
                        }, d.extend = g(d.allKeys), d.extendOwn = d.assign = g(d.keys), d.findKey = function(e, t, n) {
                            t = m(t, n);
                            var r = d.keys(e),
                                i;
                            for (var s = 0, o = r.length; s < o; s++) {
                                i = r[s];
                                if (t(e[i], i, e)) return i
                            }
                        }, d.pick = function(e, t, n) {
                            var r = {},
                                i = e,
                                s, o;
                            if (i == null) return r;
                            d.isFunction(t) ? (o = d.allKeys(i), s = v(t, n)) : (o = N(arguments, !1, !1, 1), s = function(e, t, n) {
                                return t in n
                            }, i = Object(i));
                            for (var u = 0, a = o.length; u < a; u++) {
                                var f = o[u],
                                    l = i[f];
                                s(l, f, i) && (r[f] = l)
                            }
                            return r
                        }, d.omit = function(e, t, n) {
                            if (d.isFunction(t)) t = d.negate(t);
                            else {
                                var r = d.map(N(arguments, !1, !1, 1), String);
                                t = function(e, t) {
                                    return !d.contains(r, t)
                                }
                            }
                            return d.pick(e, t, n)
                        }, d.defaults = g(d.allKeys, !0), d.create = function(e, t) {
                            var n = y(e);
                            return t && d.extendOwn(n, t), n
                        }, d.clone = function(e) {
                            return d.isObject(e) ? d.isArray(e) ? e.slice() : d.extend({}, e) : e
                        }, d.tap = function(e, t) {
                            return t(e), e
                        }, d.isMatch = function(e, t) {
                            var n = d.keys(t),
                                r = n.length;
                            if (e == null) return !r;
                            var i = Object(e);
                            for (var s = 0; s < r; s++) {
                                var o = n[s];
                                if (t[o] !== i[o] || !(o in i)) return !1
                            }
                            return !0
                        };
                        var _ = function(e, t, n, r) {
                            if (e === t) return e !== 0 || 1 / e === 1 / t;
                            if (e == null || t == null) return e === t;
                            e instanceof d && (e = e._wrapped), t instanceof d && (t = t._wrapped);
                            var i = u.call(e);
                            if (i !== u.call(t)) return !1;
                            switch (i) {
                                case "[object RegExp]":
                                case "[object String]":
                                    return "" + e == "" + t;
                                case "[object Number]":
                                    if (+e !== +e) return +t !== +t;
                                    return +e === 0 ? 1 / +e === 1 / t : +e === +t;
                                case "[object Date]":
                                case "[object Boolean]":
                                    return +e === +t
                            }
                            var s = i === "[object Array]";
                            if (!s) {
                                if (typeof e != "object" || typeof t != "object") return !1;
                                var o = e.constructor,
                                    a = t.constructor;
                                if (o !== a && !(d.isFunction(o) && o instanceof o && d.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1
                            }
                            n = n || [], r = r || [];
                            var f = n.length;
                            while (f--)
                                if (n[f] === e) return r[f] === t;
                            n.push(e), r.push(t);
                            if (s) {
                                f = e.length;
                                if (f !== t.length) return !1;
                                while (f--)
                                    if (!_(e[f], t[f], n, r)) return !1
                            } else {
                                var l = d.keys(e),
                                    c;
                                f = l.length;
                                if (d.keys(t).length !== f) return !1;
                                while (f--) {
                                    c = l[f];
                                    if (!d.has(t, c) || !_(e[c], t[c], n, r)) return !1
                                }
                            }
                            return n.pop(), r.pop(), !0
                        };
                        d.isEqual = function(e, t) {
                            return _(e, t)
                        }, d.isEmpty = function(e) {
                            return e == null ? !0 : S(e) && (d.isArray(e) || d.isString(e) || d.isArguments(e)) ? e.length === 0 : d.keys(e).length === 0
                        }, d.isElement = function(e) {
                            return !!e && e.nodeType === 1
                        }, d.isArray = f || function(e) {
                            return u.call(e) === "[object Array]"
                        }, d.isObject = function(e) {
                            var t = typeof e;
                            return t === "function" || t === "object" && !!e
                        }, d.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
                            d["is" + e] = function(t) {
                                return u.call(t) === "[object " + e + "]"
                            }
                        }), d.isArguments(arguments) || (d.isArguments = function(e) {
                            return d.has(e, "callee")
                        }), typeof /./ != "function" && typeof Int8Array != "object" && (d.isFunction = function(e) {
                            return typeof e == "function" || !1
                        }), d.isFinite = function(e) {
                            return isFinite(e) && !isNaN(parseFloat(e))
                        }, d.isNaN = function(e) {
                            return d.isNumber(e) && e !== +e
                        }, d.isBoolean = function(e) {
                            return e === !0 || e === !1 || u.call(e) === "[object Boolean]"
                        }, d.isNull = function(e) {
                            return e === null
                        }, d.isUndefined = function(e) {
                            return e === void 0
                        }, d.has = function(e, t) {
                            return e != null && a.call(e, t)
                        }, d.noConflict = function() {
                            return e._ = t, this
                        }, d.identity = function(e) {
                            return e
                        }, d.constant = function(e) {
                            return function() {
                                return e
                            }
                        }, d.noop = function() {}, d.property = b, d.propertyOf = function(e) {
                            return e == null ? function() {} : function(t) {
                                return e[t]
                            }
                        }, d.matcher = d.matches = function(e) {
                            return e = d.extendOwn({}, e),
                                function(t) {
                                    return d.isMatch(t, e)
                                }
                        }, d.times = function(e, t, n) {
                            var r = Array(Math.max(0, e));
                            t = v(t, n, 1);
                            for (var i = 0; i < e; i++) r[i] = t(i);
                            return r
                        }, d.random = function(e, t) {
                            return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
                        }, d.now = Date.now || function() {
                            return (new Date).getTime()
                        };
                        var D = {
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#x27;",
                                "`": "&#x60;"
                            },
                            P = d.invert(D),
                            H = function(e) {
                                var t = function(t) {
                                        return e[t]
                                    },
                                    n = "(?:" + d.keys(e).join("|") + ")",
                                    r = RegExp(n),
                                    i = RegExp(n, "g");
                                return function(e) {
                                    return e = e == null ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
                                }
                            };
                        d.escape = H(D), d.unescape = H(P), d.result = function(e, t, n) {
                            var r = e == null ? void 0 : e[t];
                            return r === void 0 && (r = n), d.isFunction(r) ? r.call(e) : r
                        };
                        var B = 0;
                        d.uniqueId = function(e) {
                            var t = ++B + "";
                            return e ? e + t : t
                        }, d.templateSettings = {
                            evaluate: /<%([\s\S]+?)%>/g,
                            interpolate: /<%=([\s\S]+?)%>/g,
                            escape: /<%-([\s\S]+?)%>/g
                        };
                        var j = /(.)^/,
                            F = {
                                "'": "'",
                                "\\": "\\",
                                "\r": "r",
                                "\n": "n",
                                "\u2028": "u2028",
                                "\u2029": "u2029"
                            },
                            I = /\\|'|\r|\n|\u2028|\u2029/g,
                            q = function(e) {
                                return "\\" + F[e]
                            };
                        d.template = function(e, t, n) {
                            !t && n && (t = n), t = d.defaults({}, t, d.templateSettings);
                            var r = RegExp([(t.escape || j).source, (t.interpolate || j).source, (t.evaluate || j).source].join("|") + "|$", "g"),
                                i = 0,
                                s = "__p+='";
                            e.replace(r, function(t, n, r, o, u) {
                                return s += e.slice(i, u).replace(I, q), i = u + t.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), t
                            }), s += "';\n", t.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
                            try {
                                var o = new Function(t.variable || "obj", "_", s)
                            } catch (u) {
                                throw u.source = s, u
                            }
                            var a = function(e) {
                                    return o.call(this, e, d)
                                },
                                f = t.variable || "obj";
                            return a.source = "function(" + f + "){\n" + s + "}", a
                        }, d.chain = function(e) {
                            var t = d(e);
                            return t._chain = !0, t
                        };
                        var R = function(e, t) {
                            return e._chain ? d(t).chain() : t
                        };
                        d.mixin = function(e) {
                            d.each(d.functions(e), function(t) {
                                var n = d[t] = e[t];
                                d.prototype[t] = function() {
                                    var e = [this._wrapped];
                                    return s.apply(e, arguments), R(this, n.apply(d, e))
                                }
                            })
                        }, d.mixin(d), d.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
                            var t = n[e];
                            d.prototype[e] = function() {
                                var n = this._wrapped;
                                return t.apply(n, arguments), (e === "shift" || e === "splice") && n.length === 0 && delete n[0], R(this, n)
                            }
                        }), d.each(["concat", "join", "slice"], function(e) {
                            var t = n[e];
                            d.prototype[e] = function() {
                                return R(this, t.apply(this._wrapped, arguments))
                            }
                        }), d.prototype.value = function() {
                            return this._wrapped
                        }, d.prototype.valueOf = d.prototype.toJSON = d.prototype.value, d.prototype.toString = function() {
                            return "" + this._wrapped
                        }, typeof define == "function" && define.amd && define("underscore", [], function() {
                            return d
                        })
                    }.call(this), e._ = _
                }.apply(e, arguments)
            })
        }(this), define("ads", ["lib/core", "vendor/bower/underscore/underscore"], function(e, t) {
            "use strict";
            var n = 320,
                r = function(t, r, i) {
                    e.$("body").removeClass("mpu--tall mpu--standard").addClass(i ? i > n ? "mpu--tall" : "mpu--standard" : "")
                };
            return {
                init: function(n, i) {
                    if (!i) return;
                    i.reset && e.$(n).on("resize", t.debounce(i.reset, 300));
                    if (i.pubsub) {
                        var s = i.ad("mpu");
                        s && t.isFunction(s.getWidth) && t.isFunction(s.getHeight) && r("mpu", s.getWidth(), s.getHeight()), i.pubsub.on("ad:open:mpu ad:resize:mpu ad:close:mpu", r)
                    }
                }
            }
        }),
        function(e) {
            define("vendor/bower/cookie-monster/cookie-monster", [], function() {
                return function() {
                    var t = {
                        set: function(e, t, n, r, i) {
                            var s = new Date,
                                o = "",
                                u = typeof t,
                                a = "",
                                f = "";
                            r = r || "/", n && (s.setTime(s.getTime() + n * 24 * 60 * 60 * 1e3), o = "; expires=" + s.toUTCString());
                            if (u === "object" && u !== "undefined") {
                                if (!("JSON" in window)) throw "Bummer, your browser doesn't support JSON parsing.";
                                a = encodeURIComponent(JSON.stringify({
                                    v: t
                                }))
                            } else a = encodeURIComponent(t);
                            i && (f = "; secure"), document.cookie = e + "=" + a + o + "; path=" + r + f
                        },
                        get: function(e) {
                            var t = e + "=",
                                n = document.cookie.split(";"),
                                r = "",
                                i = "",
                                s = {};
                            for (var o = 0; o < n.length; o++) {
                                var u = n[o];
                                while (u.charAt(0) == " ") u = u.substring(1, u.length);
                                if (u.indexOf(t) === 0) {
                                    r = decodeURIComponent(u.substring(t.length, u.length)), i = r.substring(0, 1);
                                    if (i == "{") try {
                                        s = JSON.parse(r);
                                        if ("v" in s) return s.v
                                    } catch (a) {
                                        return r
                                    }
                                    return r == "undefined" ? undefined : r
                                }
                            }
                            return null
                        },
                        remove: function(e) {
                            this.set(e, "", -1)
                        },
                        increment: function(e, t) {
                            var n = this.get(e) || 0;
                            this.set(e, parseInt(n, 10) + 1, t)
                        },
                        decrement: function(e, t) {
                            var n = this.get(e) || 0;
                            this.set(e, parseInt(n, 10) - 1, t)
                        }
                    };
                    return e.monster = t
                }.apply(e, arguments)
            })
        }(this), define("lib/util", ["vendor/bower/cookie-monster/cookie-monster", "vendor/bower/underscore/underscore"], function(e, t) {
            "use strict";
            return {
                logger: function() {
                    var e = ["assert", "count", "dir", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "time", "timeEnd", "trace", "warn"],
                        t = {},
                        n = function(t) {
                            return function() {
                                if (typeof console != "undefined" && t in console) try {
                                    console[t].apply(console, Array.prototype.slice.call(arguments))
                                } catch (e) {
                                    console[t](Array.prototype.slice.call(arguments))
                                }
                            }
                        };
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r];
                        t[i] = n(i)
                    }
                    return t
                }(),
                date: function() {
                    var e = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    return {
                        getDayName: function(t) {
                            return t.getDay === undefined || e[t.getDay()] === undefined ? "" : e[t.getDay()]
                        },
                        getMonthName: function(e) {
                            return e.getMonth === undefined || t[e.getMonth()] === undefined ? "" : t[e.getMonth()]
                        },
                        getFormattedDate: function(e) {
                            return this.getDayName(e) + ", " + e.getDate() + " " + this.getMonthName(e)
                        }
                    }
                }(),
                extend: function(e, n) {
                    var r = this,
                        i;
                    e && t.has(e, "constructor") ? i = e.constructor : i = function() {
                        return r.apply(this, arguments)
                    }, t.extend(i, r, n);
                    var s = function() {
                        this.constructor = i
                    };
                    return s.prototype = r.prototype, i.prototype = new s, e && t.extend(i.prototype, e), i.__super__ = r.prototype, i
                },
                cookie: e,
                isSandbox: function(e) {
                    return e.host.indexOf("pal.sandbox.dev") === 0
                },
                isModernBrowser: function() {
                    var e = !1;
                    try {
                        e = "localStorage" in window && "setItem" in localStorage
                    } catch (t) {}
                    return e
                }
            }
        }), define("lib/module/manager", ["lib/util", "jquery", "require", "vendor/bower/underscore/underscore"], function(e, t, n, r) {
            "use strict";
            var i = "modules/";
            return {
                load: function() {
                    var i = t.Deferred(),
                        s = t("html"),
                        o = [],
                        u = [],
                        a = [];
                    return e.isModernBrowser() ? (s.addClass("wwhp-js"), t("[data-wwhp-module]").each(function(e, n) {
                        var i = r.map((t(n).data("wwhp-module") || "").split(","), t.trim);
                        r.each(i, function(e) {
                            o.push({
                                name: e,
                                element: t(n)
                            })
                        })
                    }), r.each(o, function(t) {
                        this.loadModule(t).done(function(e) {
                            u.push(e)
                        }).fail(function(t) {
                            a.push(t), e.logger.error("Module failed to load", t)
                        }).always(function() {
                            u.length + a.length === o.length && i.resolve(u, a)
                        })
                    }, this), i.promise()) : (s.addClass("wwhp-no-js"), i.reject(u, a), i.promise())
                },
                loadModule: function(e) {
                    var r = t.Deferred();
                    return n([i + e.name], function(t) {
                        try {
                            var n = new t(e.element, {});
                            e.element.data(e.name, e), e.instance = n, r.resolve(e)
                        } catch (i) {
                            e.error = i, r.reject(e)
                        }
                    }, function(t) {
                        e.error = t, r.reject(e)
                    }), r.promise()
                }
            }
        }),
        function() {
            "use strict";

            function e(t, r) {
                function s(e, t) {
                    return function() {
                        return e.apply(t, arguments)
                    }
                }
                var i;
                r = r || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = r.touchBoundary || 10, this.layer = t, this.tapDelay = r.tapDelay || 200, this.tapTimeout = r.tapTimeout || 700;
                if (e.notNeeded(t)) return;
                var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"],
                    u = this;
                for (var a = 0, f = o.length; a < f; a++) u[o[a]] = s(u[o[a]], u);
                n && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, r) {
                    var i = Node.prototype.removeEventListener;
                    e === "click" ? i.call(t, e, n.hijacked || n, r) : i.call(t, e, n, r)
                }, t.addEventListener = function(e, n, r) {
                    var i = Node.prototype.addEventListener;
                    e === "click" ? i.call(t, e, n.hijacked || (n.hijacked = function(e) {
                        e.propagationStopped || n(e)
                    }), r) : i.call(t, e, n, r)
                }), typeof t.onclick == "function" && (i = t.onclick, t.addEventListener("click", function(e) {
                    i(e)
                }, !1), t.onclick = null)
            }
            var t = navigator.userAgent.indexOf("Windows Phone") >= 0,
                n = navigator.userAgent.indexOf("Android") > 0 && !t,
                r = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
                i = r && /OS 4_\d(_\d)?/.test(navigator.userAgent),
                s = r && /OS [6-7]_\d/.test(navigator.userAgent),
                o = navigator.userAgent.indexOf("BB10") > 0;
            e.prototype.needsClick = function(e) {
                switch (e.nodeName.toLowerCase()) {
                    case "button":
                    case "select":
                    case "textarea":
                        if (e.disabled) return !0;
                        break;
                    case "input":
                        if (r && e.type === "file" || e.disabled) return !0;
                        break;
                    case "label":
                    case "iframe":
                    case "video":
                        return !0
                }
                return /\bneedsclick\b/.test(e.className)
            }, e.prototype.needsFocus = function(e) {
                switch (e.nodeName.toLowerCase()) {
                    case "textarea":
                        return !0;
                    case "select":
                        return !n;
                    case "input":
                        switch (e.type) {
                            case "button":
                            case "checkbox":
                            case "file":
                            case "image":
                            case "radio":
                            case "submit":
                                return !1
                        }
                        return !e.disabled && !e.readOnly;
                    default:
                        return /\bneedsfocus\b/.test(e.className)
                }
            }, e.prototype.sendClick = function(e, t) {
                var n, r;
                document.activeElement && document.activeElement !== e && document.activeElement.blur(), r = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
            }, e.prototype.determineEventType = function(e) {
                return n && e.tagName.toLowerCase() === "select" ? "mousedown" : "click"
            }, e.prototype.focus = function(e) {
                var t;
                r && e.setSelectionRange && e.type.indexOf("date") !== 0 && e.type !== "time" && e.type !== "month" ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
            }, e.prototype.updateScrollParent = function(e) {
                var t, n;
                t = e.fastClickScrollParent;
                if (!t || !t.contains(e)) {
                    n = e;
                    do {
                        if (n.scrollHeight > n.offsetHeight) {
                            t = n, e.fastClickScrollParent = n;
                            break
                        }
                        n = n.parentElement
                    } while (n)
                }
                t && (t.fastClickLastScrollTop = t.scrollTop)
            }, e.prototype.getTargetElementFromEventTarget = function(e) {
                return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
            }, e.prototype.onTouchStart = function(e) {
                var t, n, s;
                if (e.targetTouches.length > 1) return !0;
                t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0];
                if (r) {
                    s = window.getSelection();
                    if (s.rangeCount && !s.isCollapsed) return !0;
                    if (!i) {
                        if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                        this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
                    }
                }
                return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
            }, e.prototype.touchHasMoved = function(e) {
                var t = e.changedTouches[0],
                    n = this.touchBoundary;
                return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n ? !0 : !1
            }, e.prototype.onTouchMove = function(e) {
                if (!this.trackingClick) return !0;
                if (this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) this.trackingClick = !1, this.targetElement = null;
                return !0
            }, e.prototype.findControl = function(e) {
                return e.control !== undefined ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
            }, e.prototype.onTouchEnd = function(e) {
                var t, o, u, a, f, l = this.targetElement;
                if (!this.trackingClick) return !0;
                if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
                if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
                this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, o = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, s && (f = e.changedTouches[0], l = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset) || l, l.fastClickScrollParent = this.targetElement.fastClickScrollParent), u = l.tagName.toLowerCase();
                if (u === "label") {
                    t = this.findControl(l);
                    if (t) {
                        this.focus(l);
                        if (n) return !1;
                        l = t
                    }
                } else if (this.needsFocus(l)) {
                    if (e.timeStamp - o > 100 || r && window.top !== window && u === "input") return this.targetElement = null, !1;
                    this.focus(l), this.sendClick(l, e);
                    if (!r || u !== "select") this.targetElement = null, e.preventDefault();
                    return !1
                }
                if (r && !i) {
                    a = l.fastClickScrollParent;
                    if (a && a.fastClickLastScrollTop !== a.scrollTop) return !0
                }
                return this.needsClick(l) || (e.preventDefault(), this.sendClick(l, e)), !1
            }, e.prototype.onTouchCancel = function() {
                this.trackingClick = !1, this.targetElement = null
            }, e.prototype.onMouse = function(e) {
                return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0 : !0
            }, e.prototype.onClick = function(e) {
                var t;
                return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : e.target.type === "submit" && e.detail === 0 ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t)
            }, e.prototype.destroy = function() {
                var e = this.layer;
                n && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
            }, e.notNeeded = function(e) {
                var t, r, i, s;
                if (typeof window.ontouchstart == "undefined") return !0;
                r = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
                if (r) {
                    if (!n) return !0;
                    t = document.querySelector("meta[name=viewport]");
                    if (t) {
                        if (t.content.indexOf("user-scalable=no") !== -1) return !0;
                        if (r > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
                    }
                }
                if (o) {
                    i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
                    if (i[1] >= 10 && i[2] >= 3) {
                        t = document.querySelector("meta[name=viewport]");
                        if (t) {
                            if (t.content.indexOf("user-scalable=no") !== -1) return !0;
                            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
                        }
                    }
                }
                if (e.style.msTouchAction === "none" || e.style.touchAction === "manipulation") return !0;
                s = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
                if (s >= 27) {
                    t = document.querySelector("meta[name=viewport]");
                    if (t && (t.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) return !0
                }
                return e.style.touchAction === "none" || e.style.touchAction === "manipulation" ? !0 : !1
            }, e.attach = function(t, n) {
                return new e(t, n)
            }, typeof define == "function" && typeof define.amd == "object" && define.amd ? define("vendor/bower/fastclick/fastclick", [], function() {
                return e
            }) : typeof module != "undefined" && module.exports ? (module.exports = e.attach, module.exports.FastClick = e) : window.FastClick = e
        }(), define("app", ["ads", "lib/module/manager", "lib/core", "lib/util", "vendor/bower/fastclick/fastclick"], function(e, t, n, r, i) {
            "use strict";
            return {
                init: function(r, s) {
                    n.config = s, e.init(r, r.bbcdotcom), Object.prototype.toString.call(r.operamini) === "[object OperaMini]" && n.$("html").addClass("opera-mini"), r.wwhp = {}, r.wwhp.core = n, t.load().always(function(e, t) {
                        r.wwhp.modules = e, r.wwhp.failed = t
                    }), i.attach(r.document.body, {})
                }
            }
        }), define("lib/module/base", ["lib/core", "lib/util"], function(e, t) {
            "use strict";
            var n = function(e, t) {
                this.$el = e, this.elCache = {}, this.selectors = this.selectors || {}, this.init.apply(this, arguments)
            };
            return n.prototype.$ = e.$, n.prototype.init = function(e, t) {}, n.prototype.$get = function(e) {
                if (!this.selectors[e]) throw new Error("Invalid selector name " + e);
                return this.elCache[e] || (this.elCache[e] = this.$el.find(this.selectors[e])), this.elCache[e]
            }, n.prototype.clearElCache = function() {
                this.elCache = {}
            }, n.extend = t.extend, n
        }), define("modules/header", ["lib/module/base", "lib/util"], function(e, t) {
            "use strict";
            return e.extend({
                selectors: {
                    header: ".module__title"
                },
                init: function() {
                    var n = this.getDate();
                    this.$get("header").html("<span>Welcome to BBC.com</span>" + t.date.getDayName(n) + ", " + n.getDate() + " " + t.date.getMonthName(n)), this.$get("header").css({
                        opacity: 1
                    })
                },
                getDate: function() {
                    return new Date
                }
            })
        }),
        function(e, t) {
            "use strict";
            var n = function() {
                    return t.addEventListener ? function(t, n, r) {
                        return t.addEventListener(n, r, !1)
                    } : function(t, n, r) {
                        return t.attachEvent("on" + n, r)
                    }
                }(),
                r = [96, 130, 165, 200, 235, 270, 304, 340, 375, 410, 445, 485, 520, 555, 590, 625, 660, 695, 736],
                i = typeof Object.keys == "function" ? Object.keys : function(e) {
                    var t = [],
                        n;
                    for (n in e) t.push(n);
                    return t
                },
                s = function(e, t) {
                    var n = 0,
                        r = e.length,
                        i = [];
                    for (; n < r; n++) i[n] = t(e[n], n);
                    return i
                },
                o = function(e) {
                    return e
                },
                u = function() {},
                a = function() {
                    return !0
                },
                f = function(e, t) {
                    var n;
                    return function() {
                        var r = this,
                            i = arguments,
                            s = function() {
                                n = null, e.apply(r, i)
                            };
                        clearTimeout(n), n = setTimeout(s, t)
                    }
                },
                l = function(e, n) {
                    var s = this,
                        a = t;
                    n = n || {}, e !== undefined && (typeof e == "string" ? (n.selector = e, e = undefined) : typeof e.length == "undefined" && (n = e, e = undefined)), this.viewportHeight = a.documentElement.clientHeight, this.selector = e ? null : n.selector || ".delayed-image-load", this.className = n.className || "image-replace", this.gif = a.createElement("img"), this.gif.src = "data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7", this.gif.className = this.className, this.gif.alt = "", this.lazyloadOffset = n.lazyloadOffset || 0, this.scrollDelay = n.scrollDelay || 250, this.onResize = n.hasOwnProperty("onResize") ? n.onResize : !0, this.lazyload = n.hasOwnProperty("lazyload") ? n.lazyload : !1, this.loadHidden = n.hasOwnProperty("loadHidden") ? n.loadHidden : !0, this.scrolled = !1, this.availablePixelRatios = n.availablePixelRatios || [1, 2], this.availableWidths = n.availableWidths || r, this.onImagesReplaced = n.onImagesReplaced || u, this.widthsMap = {}, this.refreshPixelRatio(), this.widthInterpolator = n.widthInterpolator || o, this.gif.removeAttribute("height"), this.gif.removeAttribute("width"), typeof this.availableWidths != "function" && (typeof this.availableWidths.length == "number" ? this.widthsMap = l.createWidthsMap(this.availableWidths, this.widthInterpolator, this.devicePixelRatio) : (this.widthsMap = this.availableWidths, this.availableWidths = i(this.availableWidths)), this.availableWidths = this.availableWidths.sort(function(e, t) {
                        return e - t
                    })), this.divs = [], this.add(e || this.selector), this.ready(n.onReady), setTimeout(function() {
                        s.init()
                    }, 0)
                };
            l.prototype.add = function(e) {
                e = e || this.selector;
                var n = typeof e == "string" ? t.querySelectorAll(e) : e;
                if (n && n.length) {
                    var r = s(n, o);
                    this.changeDivsToEmptyImages(r), this.divs = this.divs.concat(r)
                }
            }, l.prototype.scrollCheck = function() {
                var t = this,
                    n = 0,
                    r = [];
                this.scrolled && (s(this.divs, function(e) {
                    t.isPlaceholder(e) && (++n, t.isThisElementOnScreen(e) && r.push(e))
                }), n === 0 && e.clearInterval(t.interval), this.changeDivsToEmptyImages(r), this.scrolled = !1)
            }, l.prototype.init = function() {
                var e = this;
                this.initialized = !0;
                var t = a;
                this.lazyload ? (this.registerScrollEvent(), this.scrolled = !0, e.scrollCheck(), t = function(t) {
                    return e.isPlaceholder(t) === !1
                }) : this.checkImagesNeedReplacing(this.divs), this.onResize && this.registerResizeEvent(t), this.onReady()
            }, l.prototype.ready = function(e) {
                this.onReady = e || u
            }, l.prototype.createGif = function(e) {
                if (e.className.match(new RegExp("(^| )" + this.className + "( |$)"))) return e;
                var t = e.getAttribute("data-class"),
                    n = e.getAttribute("data-width"),
                    r = this.gif.cloneNode(!1);
                return n && (r.width = n, r.setAttribute("data-width", n)), r.className = (t ? t + " " : "") + this.className, r.setAttribute("data-src", e.getAttribute("data-src")), r.setAttribute("alt", e.getAttribute("data-alt") || this.gif.alt), e.parentNode.replaceChild(r, e), r
            }, l.prototype.changeDivsToEmptyImages = function(e) {
                var t = this;
                s(e, function(n, r) {
                    e[r] = t.createGif(n)
                }), this.initialized && this.checkImagesNeedReplacing(e)
            }, l.prototype.isPlaceholder = function(e) {
                return e.src === this.gif.src
            }, l.prototype.isThisElementOnScreen = function(e) {
                var t = 0,
                    n = l.getPageOffset() + this.lazyloadOffset;
                if (e.offsetParent)
                    do t += e.offsetTop; while (e = e.offsetParent);
                return t < this.viewportHeight + n
            }, l.prototype.checkImagesNeedReplacing = function(e, t) {
                var n = this;
                t = t || a, this.isResizing || (this.isResizing = !0, this.refreshPixelRatio(), s(e, function(e) {
                    n.isImageEligibleForReplacing(e) && t(e) && n.replaceImagesBasedOnScreenDimensions(e)
                }), this.isResizing = !1, this.onImagesReplaced(e))
            }, l.prototype.isImageEligibleForReplacing = function(e) {
                return this.loadHidden || l.isElementVisible(e)
            }, l.prototype.replaceImagesBasedOnScreenDimensions = function(e) {
                var t, n;
                n = l.getNaturalWidth(e), t = typeof this.availableWidths == "function" ? this.availableWidths(e) : this.determineAppropriateResolution(e), e.width = t;
                if (!this.isPlaceholder(e) && t <= n) return;
                e.src = this.changeImageSrcToUseNewImageDimensions(e.getAttribute("data-src"), t), e.removeAttribute("width"), e.removeAttribute("height")
            }, l.prototype.determineAppropriateResolution = function(e) {
                return l.getClosestValue(e.getAttribute("data-width") || e.parentNode.clientWidth, this.availableWidths)
            }, l.prototype.refreshPixelRatio = function() {
                this.devicePixelRatio = l.getClosestValue(l.getPixelRatio(), this.availablePixelRatios)
            }, l.prototype.changeImageSrcToUseNewImageDimensions = function(e, t) {
                return e.replace(/{width}/g, l.transforms.width(t, this.widthsMap)).replace(/{pixel_ratio}/g, l.transforms.pixelRatio(this.devicePixelRatio))
            }, l.getPixelRatio = function(n) {
                return (n || e).devicePixelRatio || 1
            }, l.createWidthsMap = function(t, n, r) {
                var i = {},
                    s = t.length;
                while (s--) i[t[s]] = n(t[s], r);
                return i
            }, l.transforms = {
                pixelRatio: function(e) {
                    return e === 1 ? "" : "-" + e + "x"
                },
                width: function(e, t) {
                    return t[e] || e
                }
            }, l.getClosestValue = function(t, n) {
                var r = n.length,
                    i = n[r - 1];
                t = parseFloat(t);
                while (r--) t <= n[r] && (i = n[r]);
                return i
            }, l.prototype.registerResizeEvent = function(t) {
                var r = this;
                n(e, "resize", f(function() {
                    r.checkImagesNeedReplacing(r.divs, t)
                }, 100))
            }, l.prototype.registerScrollEvent = function() {
                var r = this;
                this.scrolled = !1, this.interval = e.setInterval(function() {
                    r.scrollCheck()
                }, r.scrollDelay), n(e, "scroll", function() {
                    r.scrolled = !0
                }), n(e, "resize", function() {
                    r.viewportHeight = t.documentElement.clientHeight, r.scrolled = !0
                })
            }, l.getPageOffsetGenerator = function(r) {
                return r ? function() {
                    return e.pageYOffset
                } : function() {
                    return t.documentElement.scrollTop
                }
            }, l.isElementVisible = function(e) {
                return e.offsetWidth > 0 || e.offsetHeight > 0
            }, l.getNaturalWidth = function() {
                return "naturalWidth" in new Image ? function(e) {
                    return e.naturalWidth
                } : function(e) {
                    var n = t.createElement("img");
                    return n.src = e.src, n.width
                }
            }(), l.getPageOffset = l.getPageOffsetGenerator(Object.prototype.hasOwnProperty.call(e, "pageYOffset")), l.applyEach = s, l.addEvent = n, l.debounce = f, typeof module == "object" && typeof module.exports == "object" ? module.exports = exports = l : typeof define == "function" && define.amd ? define("vendor/bower/imager.js/Imager", [], function() {
                return l
            }) : typeof e == "object" && (e.Imager = l)
        }(window, document), define("modules/images", ["lib/core", "lib/module/base", "vendor/bower/imager.js/Imager", "vendor/bower/underscore/underscore"], function(e, t, n, r) {
            "use strict";
            return t.extend({
                init: function() {
                    e.pubsub.on("images:refresh", r.bind(this.refreshImages, this)), this.imager = new n({
                        loadHidden: !1,
                        lazyload: !0,
                        availableWidths: [144, 304, 400, 624, 800, 999]
                    }), this.reelPromoImager = new n(".delayed-image-load-reel", {
                        loadHidden: !1,
                        lazyload: !0,
                        availableWidths: {
                            160: "160x90",
                            208: "208x117",
                            272: "272x153",
                            320: "320x180",
                            432: "432x243",
                            528: "528x297",
                            656: "656x369",
                            800: "800x450",
                            992: "992x558",
                            1200: "1200x675"
                        }
                    })
                },
                refreshImages: function() {
                    this.imager.scrolled = !0, this.reelPromoImager.scrolled = !0
                }
            })
        }), define("modules/media", ["lib/module/base", "lib/core"], function(e, t) {
            "use strict";
            return e.extend({
                selectors: {
                    links: ".block-link"
                },
                init: function() {
                    this.$get("links").hover(function() {
                        t.$(this).addClass("block-link--hover")
                    }, function() {
                        t.$(this).removeClass("block-link--hover")
                    })
                }
            })
        }),
        function(e) {
            define("vendor/bower/js-breakpoints/breakpoints", [], function() {
                return function() {
                    return window.Breakpoints = function(e, t) {
                        "use strict";
                        var n = {},
                            r = 200,
                            i = [],
                            s = null,
                            o = "js-breakpoints-getComputedStyleTest",
                            u = "position",
                            a = "absolute",
                            f = function(t, n, r) {
                                t.attachEvent ? (t["e" + n + r] = r, t[n + r] = function() {
                                    t["e" + n + r](e.event)
                                }, t.attachEvent("on" + n, t[n + r])) : t.addEventListener(n, r, !1)
                            },
                            l = function(e, t, n) {
                                var r, i;
                                return function() {
                                    var s = this,
                                        o = arguments,
                                        u = function() {
                                            r = null, n || (i = e.apply(s, o))
                                        },
                                        a = n && !r;
                                    return clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i
                                }
                            },
                            c = function(e, n, r) {
                                var i = t.createElement("div");
                                i.className = "js-breakpoints-" + n, e.appendChild(i), r(i), i.parentNode.removeChild(i)
                            },
                            h = function(e) {
                                var t = n.isMatched(e);
                                return t && !e.isMatched ? (e.matched.call(e.context), e.isMatched = !0) : !t && e.isMatched && (e.exit.call(e.context), e.isMatched = !1), e
                            },
                            p = function() {
                                for (var e = 0; e < i.length; e++) h(i[e])
                            },
                            d = function(t, n, r) {
                                return e.getComputedStyle ? e.getComputedStyle(t, n).getPropertyValue(r) : t.currentStyle && n.length === 0 ? t.currentStyle[r] : ""
                            },
                            v = function() {
                                if (s !== null) return;
                                s = !1;
                                if (e.getComputedStyle) {
                                    var n = e.getComputedStyle(t.documentElement, ":after").getPropertyValue("content");
                                    s = n.replace(/\"/g, "") === o
                                }
                            },
                            m = function() {
                                var t = l(p, r);
                                return f(e, "resize", t), f(e, "orientationchange", t), n
                            };
                        return n.isMatched = function(e) {
                            var n = e.el || t.body,
                                r = !1,
                                i;
                            return s ? (i = d(n, ":after", "content"), r = i.replace(/\"/g, "") === e.name) : c(n, e.name, function(e) {
                                i = d(e, "", u), r = i === a
                            }), r
                        }, n.on = function(e) {
                            return v(), i.push(e), e.isMatched = !1, e.matched = e.matched || function() {}, e.exit = e.exit || function() {}, e.context = e.context || e, h(e)
                        }, n.off = function(e) {
                            var t = i.indexOf(e);
                            t > -1 && i.splice(t, 1)
                        }, m()
                    }(window, document), e.Breakpoints = Breakpoints
                }.apply(e, arguments)
            })
        }(this),
        function(e) {
            "use strict";
            typeof define == "function" && define.amd ? define("vendor/bower/slick.js/slick", ["jquery"], e) : typeof exports != "undefined" ? module.exports = e(require("jquery")) : e(jQuery)
        }(function(e) {
            "use strict";
            var t = window.Slick || {};
            t = function() {
                function n(n, r) {
                    var i = this,
                        s, o, u;
                    i.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: e(n),
                        appendDots: e(n),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
                        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(e, t) {
                            return '<button type="button" data-role="none">' + (t + 1) + "</button>"
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rows: 1,
                        rtl: !1,
                        slide: "",
                        slidesPerRow: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        variableWidth: !1,
                        vertical: !1,
                        verticalSwiping: !1,
                        waitForAnimate: !0
                    }, i.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1
                    }, e.extend(i, i.initials), i.activeBreakpoint = null, i.animType = null, i.animProp = null, i.breakpoints = [], i.breakpointSettings = [], i.cssTransitions = !1, i.hidden = "hidden", i.paused = !1, i.positionProp = null, i.respondTo = null, i.rowCount = 1, i.shouldClick = !0, i.$slider = e(n), i.$slidesCache = null, i.transformType = null, i.transitionType = null, i.visibilityChange = "visibilitychange", i.windowWidth = 0, i.windowTimer = null, s = e(n).data("slick") || {}, i.options = e.extend({}, i.defaults, s, r), i.currentSlide = i.options.initialSlide, i.originalSettings = i.options, o = i.options.responsive || null;
                    if (o && o.length > -1) {
                        i.respondTo = i.options.respondTo || "window";
                        for (u in o) o.hasOwnProperty(u) && (i.breakpoints.push(o[u].breakpoint), i.breakpointSettings[o[u].breakpoint] = o[u].settings);
                        i.breakpoints.sort(function(e, t) {
                            return i.options.mobileFirst === !0 ? e - t : t - e
                        })
                    }
                    typeof document.mozHidden != "undefined" ? (i.hidden = "mozHidden", i.visibilityChange = "mozvisibilitychange") : typeof document.webkitHidden != "undefined" && (i.hidden = "webkitHidden", i.visibilityChange = "webkitvisibilitychange"), i.autoPlay = e.proxy(i.autoPlay, i), i.autoPlayClear = e.proxy(i.autoPlayClear, i), i.changeSlide = e.proxy(i.changeSlide, i), i.clickHandler = e.proxy(i.clickHandler, i), i.selectHandler = e.proxy(i.selectHandler, i), i.setPosition = e.proxy(i.setPosition, i), i.swipeHandler = e.proxy(i.swipeHandler, i), i.dragHandler = e.proxy(i.dragHandler, i), i.keyHandler = e.proxy(i.keyHandler, i), i.autoPlayIterator = e.proxy(i.autoPlayIterator, i), i.instanceUid = t++, i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, i.init(!0), i.checkResponsive(!0)
                }
                var t = 0;
                return n
            }(), t.prototype.addSlide = t.prototype.slickAdd = function(t, n, r) {
                var i = this;
                if (typeof n == "boolean") r = n, n = null;
                else if (n < 0 || n >= i.slideCount) return !1;
                i.unload(), typeof n == "number" ? n === 0 && i.$slides.length === 0 ? e(t).appendTo(i.$slideTrack) : r ? e(t).insertBefore(i.$slides.eq(n)) : e(t).insertAfter(i.$slides.eq(n)) : r === !0 ? e(t).prependTo(i.$slideTrack) : e(t).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function(t, n) {
                    e(n).attr("data-slick-index", t)
                }), i.$slidesCache = i.$slides, i.reinit()
            }, t.prototype.animateHeight = function() {
                var e = this;
                if (e.options.slidesToShow === 1 && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.animate({
                        height: t
                    }, e.options.speed)
                }
            }, t.prototype.animateSlide = function(t, n) {
                var r = {},
                    i = this;
                i.animateHeight(), i.options.rtl === !0 && i.options.vertical === !1 && (t = -t), i.transformsEnabled === !1 ? i.options.vertical === !1 ? i.$slideTrack.animate({
                    left: t
                }, i.options.speed, i.options.easing, n) : i.$slideTrack.animate({
                    top: t
                }, i.options.speed, i.options.easing, n) : i.cssTransitions === !1 ? (i.options.rtl === !0 && (i.currentLeft = -i.currentLeft), e({
                    animStart: i.currentLeft
                }).animate({
                    animStart: t
                }, {
                    duration: i.options.speed,
                    easing: i.options.easing,
                    step: function(e) {
                        e = Math.ceil(e), i.options.vertical === !1 ? (r[i.animType] = "translate(" + e + "px, 0px)", i.$slideTrack.css(r)) : (r[i.animType] = "translate(0px," + e + "px)", i.$slideTrack.css(r))
                    },
                    complete: function() {
                        n && n.call()
                    }
                })) : (i.applyTransition(), t = Math.ceil(t), i.options.vertical === !1 ? r[i.animType] = "translate3d(" + t + "px, 0px, 0px)" : r[i.animType] = "translate3d(0px," + t + "px, 0px)", i.$slideTrack.css(r), n && setTimeout(function() {
                    i.disableTransition(), n.call()
                }, i.options.speed))
            }, t.prototype.asNavFor = function(t) {
                var n = this,
                    r = n.options.asNavFor;
                r && r !== null && (r = e(r).not(n.$slider)), r !== null && typeof r == "object" && r.each(function() {
                    var n = e(this).slick("getSlick");
                    n.unslicked || n.slideHandler(t, !0)
                })
            }, t.prototype.applyTransition = function(e) {
                var t = this,
                    n = {};
                t.options.fade === !1 ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
            }, t.prototype.autoPlay = function() {
                var e = this;
                e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
            }, t.prototype.autoPlayClear = function() {
                var e = this;
                e.autoPlayTimer && clearInterval(e.autoPlayTimer)
            }, t.prototype.autoPlayIterator = function() {
                var e = this;
                e.options.infinite === !1 ? e.direction === 1 ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (e.currentSlide - 1 === 0 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
            }, t.prototype.buildArrows = function() {
                var t = this;
                t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow = e(t.options.prevArrow), t.$nextArrow = e(t.options.nextArrow), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.appendTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled"))
            }, t.prototype.buildDots = function() {
                var t = this,
                    n, r;
                if (t.options.dots === !0 && t.slideCount > t.options.slidesToShow) {
                    r = '<ul class="' + t.options.dotsClass + '">';
                    for (n = 0; n <= t.getDotCount(); n += 1) r += "<li>" + t.options.customPaging.call(this, t, n) + "</li>";
                    r += "</ul>", t.$dots = e(r).appendTo(t.options.appendDots), t.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
                }
            }, t.prototype.buildOut = function() {
                var t = this;
                t.$slides = t.$slider.children(":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
                    e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
                }), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"), t.$slideTrack = t.slideCount === 0 ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0);
                if (t.options.centerMode === !0 || t.options.swipeToSlide === !0) t.options.slidesToScroll = 1;
                e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.options.accessibility === !0 && t.$list.prop("tabIndex", 0), t.setSlideClasses(typeof this.currentSlide == "number" ? this.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
            }, t.prototype.buildRows = function() {
                var e = this,
                    t, n, r, i, s, o, u;
                i = document.createDocumentFragment(), o = e.$slider.children();
                if (e.options.rows > 1) {
                    u = e.options.slidesPerRow * e.options.rows, s = Math.ceil(o.length / u);
                    for (t = 0; t < s; t++) {
                        var a = document.createElement("div");
                        for (n = 0; n < e.options.rows; n++) {
                            var f = document.createElement("div");
                            for (r = 0; r < e.options.slidesPerRow; r++) {
                                var l = t * u + (n * e.options.slidesPerRow + r);
                                o.get(l) && f.appendChild(o.get(l))
                            }
                            a.appendChild(f)
                        }
                        i.appendChild(a)
                    }
                    e.$slider.html(i), e.$slider.children().children().children().css({
                        width: 100 / e.options.slidesPerRow + "%",
                        display: "inline-block"
                    })
                }
            }, t.prototype.checkResponsive = function(t) {
                var n = this,
                    r, i, s, o = !1,
                    u = n.$slider.width(),
                    a = window.innerWidth || e(window).width();
                n.respondTo === "window" ? s = a : n.respondTo === "slider" ? s = u : n.respondTo === "min" && (s = Math.min(a, u));
                if (n.originalSettings.responsive && n.originalSettings.responsive.length > -1 && n.originalSettings.responsive !== null) {
                    i = null;
                    for (r in n.breakpoints) n.breakpoints.hasOwnProperty(r) && (n.originalSettings.mobileFirst === !1 ? s < n.breakpoints[r] && (i = n.breakpoints[r]) : s > n.breakpoints[r] && (i = n.breakpoints[r]));
                    i !== null ? n.activeBreakpoint !== null ? i !== n.activeBreakpoint && (n.activeBreakpoint = i, n.breakpointSettings[i] === "unslick" ? n.unslick(i) : (n.options = e.extend({}, n.originalSettings, n.breakpointSettings[i]), t === !0 && (n.currentSlide = n.options.initialSlide), n.refresh(t)), o = i) : (n.activeBreakpoint = i, n.breakpointSettings[i] === "unslick" ? n.unslick(i) : (n.options = e.extend({}, n.originalSettings, n.breakpointSettings[i]), t === !0 && (n.currentSlide = n.options.initialSlide), n.refresh(t)), o = i) : n.activeBreakpoint !== null && (n.activeBreakpoint = null, n.options = n.originalSettings, t === !0 && (n.currentSlide = n.options.initialSlide), n.refresh(t), o = i), !t && o !== !1 && n.$slider.trigger("breakpoint", [n, o])
                }
            }, t.prototype.changeSlide = function(t, n) {
                var r = this,
                    i = e(t.target),
                    s, o, u;
                i.is("a") && t.preventDefault(), i.is("li") || (i = i.closest("li")), u = r.slideCount % r.options.slidesToScroll !== 0, s = u ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll;
                switch (t.data.message) {
                    case "previous":
                        o = s === 0 ? r.options.slidesToScroll : r.options.slidesToShow - s, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
                        break;
                    case "next":
                        o = s === 0 ? r.options.slidesToScroll : s, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
                        break;
                    case "index":
                        var a = t.data.index === 0 ? 0 : t.data.index || i.index() * r.options.slidesToScroll;
                        r.slideHandler(r.checkNavigable(a), !1, n), i.children().trigger("focus");
                        break;
                    default:
                        return
                }
            }, t.prototype.checkNavigable = function(e) {
                var t = this,
                    n, r;
                n = t.getNavigableIndexes(), r = 0;
                if (e > n[n.length - 1]) e = n[n.length - 1];
                else
                    for (var i in n) {
                        if (e < n[i]) {
                            e = r;
                            break
                        }
                        r = n[i]
                    }
                return e
            }, t.prototype.cleanUpEvents = function() {
                var t = this;
                t.options.dots && t.$dots !== null && (e("li", t.$dots).off("click.slick", t.changeSlide), t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).off("mouseenter.slick", e.proxy(t.setPaused, t, !0)).off("mouseleave.slick", e.proxy(t.setPaused, t, !1))), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
            }, t.prototype.cleanUpRows = function() {
                var e = this,
                    t;
                e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.html(t))
            }, t.prototype.clickHandler = function(e) {
                var t = this;
                t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
            }, t.prototype.destroy = function(t) {
                var n = this;
                n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && typeof n.options.prevArrow != "object" && n.$prevArrow.remove(), n.$nextArrow && typeof n.options.nextArrow != "object" && n.$nextArrow.remove(), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                    e(this).attr("style", e(this).data("originalStyling"))
                }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
            }, t.prototype.disableTransition = function(e) {
                var t = this,
                    n = {};
                n[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
            }, t.prototype.fadeSlide = function(e, t) {
                var n = this;
                n.cssTransitions === !1 ? (n.$slides.eq(e).css({
                    zIndex: 1e3
                }), n.$slides.eq(e).animate({
                    opacity: 1
                }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
                    opacity: 1,
                    zIndex: 1e3
                }), t && setTimeout(function() {
                    n.disableTransition(e), t.call()
                }, n.options.speed))
            }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
                var t = this;
                e !== null && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
            }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
                var e = this;
                return e.currentSlide
            }, t.prototype.getDotCount = function() {
                var e = this,
                    t = 0,
                    n = 0,
                    r = 0;
                if (e.options.infinite === !0)
                    while (t < e.slideCount) ++r, t = n + e.options.slidesToShow, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                else if (e.options.centerMode === !0) r = e.slideCount;
                else
                    while (t < e.slideCount) ++r, t = n + e.options.slidesToShow, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                return r - 1
            }, t.prototype.getLeft = function(e) {
                var t = this,
                    n, r, i = 0,
                    s;
                return t.slideOffset = 0, r = t.$slides.first().outerHeight(), t.options.infinite === !0 ? (t.slideCount > t.options.slidesToShow && (t.slideOffset = t.slideWidth * t.options.slidesToShow * -1, i = r * t.options.slidesToShow * -1), t.slideCount % t.options.slidesToScroll !== 0 && e + t.options.slidesToScroll > t.slideCount && t.slideCount > t.options.slidesToShow && (e > t.slideCount ? (t.slideOffset = (t.options.slidesToShow - (e - t.slideCount)) * t.slideWidth * -1, i = (t.options.slidesToShow - (e - t.slideCount)) * r * -1) : (t.slideOffset = t.slideCount % t.options.slidesToScroll * t.slideWidth * -1, i = t.slideCount % t.options.slidesToScroll * r * -1))) : e + t.options.slidesToShow > t.slideCount && (t.slideOffset = (e + t.options.slidesToShow - t.slideCount) * t.slideWidth, i = (e + t.options.slidesToShow - t.slideCount) * r), t.slideCount <= t.options.slidesToShow && (t.slideOffset = 0, i = 0), t.options.centerMode === !0 && t.options.infinite === !0 ? t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth : t.options.centerMode === !0 && (t.slideOffset = 0, t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2)), t.options.vertical === !1 ? n = e * t.slideWidth * -1 + t.slideOffset : n = e * r * -1 + i, t.options.variableWidth === !0 && (t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? s = t.$slideTrack.children(".slick-slide").eq(e) : s = t.$slideTrack.children(".slick-slide").eq(e + t.options.slidesToShow), n = s[0] ? s[0].offsetLeft * -1 : 0, t.options.centerMode === !0 && (t.options.infinite === !1 ? s = t.$slideTrack.children(".slick-slide").eq(e) : s = t.$slideTrack.children(".slick-slide").eq(e + t.options.slidesToShow + 1), n = s[0] ? s[0].offsetLeft * -1 : 0, n += (t.$list.width() - s.outerWidth()) / 2)), n
            }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
                var t = this;
                return t.options[e]
            }, t.prototype.getNavigableIndexes = function() {
                var e = this,
                    t = 0,
                    n = 0,
                    r = [],
                    i;
                e.options.infinite === !1 ? i = e.slideCount : (t = e.options.slidesToScroll * -1, n = e.options.slidesToScroll * -1, i = e.slideCount * 2);
                while (t < i) r.push(t), t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                return r
            }, t.prototype.getSlick = function() {
                return this
            }, t.prototype.getSlideCount = function() {
                var t = this,
                    n, r, i;
                return i = t.options.centerMode === !0 ? t.slideWidth * Math.floor(t.options.slidesToShow / 2) : 0, t.options.swipeToSlide === !0 ? (t.$slideTrack.find(".slick-slide").each(function(n, s) {
                    if (s.offsetLeft - i + e(s).outerWidth() / 2 > t.swipeLeft * -1) return r = s, !1
                }), n = Math.abs(e(r).attr("data-slick-index") - t.currentSlide) || 1, n) : t.options.slidesToScroll
            }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
                var n = this;
                n.changeSlide({
                    data: {
                        message: "index",
                        index: parseInt(e)
                    }
                }, t)
            }, t.prototype.init = function(t) {
                var n = this;
                e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots()), t && n.$slider.trigger("init", [n])
            }, t.prototype.initArrowEvents = function() {
                var e = this;
                e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {
                    message: "previous"
                }, e.changeSlide), e.$nextArrow.on("click.slick", {
                    message: "next"
                }, e.changeSlide))
            }, t.prototype.initDotEvents = function() {
                var t = this;
                t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
                    message: "index"
                }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.setPaused, t, !0)).on("mouseleave.slick", e.proxy(t.setPaused, t, !1))
            }, t.prototype.initializeEvents = function() {
                var t = this;
                t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                    action: "start"
                }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                    action: "move"
                }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                    action: "end"
                }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                    action: "end"
                }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.$list.on("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
            }, t.prototype.initUI = function() {
                var e = this;
                e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay === !0 && e.autoPlay()
            }, t.prototype.keyHandler = function(e) {
                var t = this;
                e.keyCode === 37 && t.options.accessibility === !0 ? t.changeSlide({
                    data: {
                        message: "previous"
                    }
                }) : e.keyCode === 39 && t.options.accessibility === !0 && t.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            }, t.prototype.lazyLoad = function() {
                function o(t) {
                    e("img[data-lazy]", t).each(function() {
                        var t = e(this),
                            n = e(this).attr("data-lazy"),
                            r = document.createElement("img");
                        r.onload = function() {
                            t.animate({
                                opacity: 1
                            }, 200)
                        }, r.src = n, t.css({
                            opacity: 0
                        }).attr("src", n).removeAttr("data-lazy").removeClass("slick-loading")
                    })
                }
                var t = this,
                    n, r, i, s;
                t.options.centerMode === !0 ? t.options.infinite === !0 ? (i = t.currentSlide + (t.options.slidesToShow / 2 + 1), s = i + t.options.slidesToShow + 2) : (i = Math.max(0, t.currentSlide - (t.options.slidesToShow / 2 + 1)), s = 2 + (t.options.slidesToShow / 2 + 1) + t.currentSlide) : (i = t.options.infinite ? t.options.slidesToShow + t.currentSlide : t.currentSlide, s = i + t.options.slidesToShow, t.options.fade === !0 && (i > 0 && i--, s <= t.slideCount && s++)), n = t.$slider.find(".slick-slide").slice(i, s), o(n), t.slideCount <= t.options.slidesToShow ? (r = t.$slider.find(".slick-slide"), o(r)) : t.currentSlide >= t.slideCount - t.options.slidesToShow ? (r = t.$slider.find(".slick-cloned").slice(0, t.options.slidesToShow), o(r)) : t.currentSlide === 0 && (r = t.$slider.find(".slick-cloned").slice(t.options.slidesToShow * -1), o(r))
            }, t.prototype.loadSlider = function() {
                var e = this;
                e.setPosition(), e.$slideTrack.css({
                    opacity: 1
                }), e.$slider.removeClass("slick-loading"), e.initUI(), e.options.lazyLoad === "progressive" && e.progressiveLazyLoad()
            }, t.prototype.next = t.prototype.slickNext = function() {
                var e = this;
                e.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            }, t.prototype.orientationChange = function() {
                var e = this;
                e.checkResponsive(), e.setPosition()
            }, t.prototype.pause = t.prototype.slickPause = function() {
                var e = this;
                e.autoPlayClear(), e.paused = !0
            }, t.prototype.play = t.prototype.slickPlay = function() {
                var e = this;
                e.paused = !1, e.autoPlay()
            }, t.prototype.postSlide = function(e) {
                var t = this;
                t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay()
            }, t.prototype.prev = t.prototype.slickPrev = function() {
                var e = this;
                e.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            }, t.prototype.preventDefault = function(e) {
                e.preventDefault()
            }, t.prototype.progressiveLazyLoad = function() {
                var t = this,
                    n, r;
                n = e("img[data-lazy]", t.$slider).length, n > 0 && (r = e("img[data-lazy]", t.$slider).first(), r.attr("src", r.attr("data-lazy")).removeClass("slick-loading").load(function() {
                    r.removeAttr("data-lazy"), t.progressiveLazyLoad(), t.options.adaptiveHeight === !0 && t.setPosition()
                }).error(function() {
                    r.removeAttr("data-lazy"), t.progressiveLazyLoad()
                }))
            }, t.prototype.refresh = function(t) {
                var n = this,
                    r = n.currentSlide;
                n.destroy(!0), e.extend(n, n.initials), n.init(), t || n.changeSlide({
                    data: {
                        message: "index",
                        index: r
                    }
                }, !1)
            }, t.prototype.reinit = function() {
                var t = this;
                t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && t.currentSlide !== 0 && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t])
            }, t.prototype.resize = function() {
                var t = this;
                e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                    t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
                }, 50))
            }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
                var r = this;
                typeof e == "boolean" ? (t = e, e = t === !0 ? 0 : r.slideCount - 1) : e = t === !0 ? --e : e;
                if (r.slideCount < 1 || e < 0 || e > r.slideCount - 1) return !1;
                r.unload(), n === !0 ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(e).remove(), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slidesCache = r.$slides, r.reinit()
            }, t.prototype.setCSS = function(e) {
                var t = this,
                    n = {},
                    r, i;
                t.options.rtl === !0 && (e = -e), r = t.positionProp == "left" ? Math.ceil(e) + "px" : "0px", i = t.positionProp == "top" ? Math.ceil(e) + "px" : "0px", n[t.positionProp] = e, t.transformsEnabled === !1 ? t.$slideTrack.css(n) : (n = {}, t.cssTransitions === !1 ? (n[t.animType] = "translate(" + r + ", " + i + ")", t.$slideTrack.css(n)) : (n[t.animType] = "translate3d(" + r + ", " + i + ", 0px)", t.$slideTrack.css(n)))
            }, t.prototype.setDimensions = function() {
                var e = this;
                e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
                    padding: "0px " + e.options.centerPadding
                }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
                    padding: e.options.centerPadding + " 0px"
                })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
            }, t.prototype.setFade = function() {
                var t = this,
                    n;
                t.$slides.each(function(r, i) {
                    n = t.slideWidth * r * -1, t.options.rtl === !0 ? e(i).css({
                        position: "relative",
                        right: n,
                        top: 0,
                        zIndex: 800,
                        opacity: 0
                    }) : e(i).css({
                        position: "relative",
                        left: n,
                        top: 0,
                        zIndex: 800,
                        opacity: 0
                    })
                }), t.$slides.eq(t.currentSlide).css({
                    zIndex: 900,
                    opacity: 1
                })
            }, t.prototype.setHeight = function() {
                var e = this;
                if (e.options.slidesToShow === 1 && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.css("height", t)
                }
            }, t.prototype.setOption = t.prototype.slickSetOption = function(e, t, n) {
                var r = this;
                r.options[e] = t, n === !0 && (r.unload(), r.reinit())
            }, t.prototype.setPosition = function() {
                var e = this;
                e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
            }, t.prototype.setProps = function() {
                var e = this,
                    t = document.body.style;
                e.positionProp = e.options.vertical === !0 ? "top" : "left", e.positionProp === "top" ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (t.WebkitTransition !== undefined || t.MozTransition !== undefined || t.msTransition !== undefined) && e.options.useCSS === !0 && (e.cssTransitions = !0), t.OTransform !== undefined && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", t.perspectiveProperty === undefined && t.webkitPerspective === undefined && (e.animType = !1)), t.MozTransform !== undefined && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", t.perspectiveProperty === undefined && t.MozPerspective === undefined && (e.animType = !1)), t.webkitTransform !== undefined && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", t.perspectiveProperty === undefined && t.webkitPerspective === undefined && (e.animType = !1)), t.msTransform !== undefined && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", t.msTransform === undefined && (e.animType = !1)), t.transform !== undefined && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.animType !== null && e.animType !== !1
            }, t.prototype.setSlideClasses = function(e) {
                var t = this,
                    n, r, i, s;
                t.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true").removeClass("slick-center"), r = t.$slider.find(".slick-slide"), t.options.centerMode === !0 ? (n = Math.floor(t.options.slidesToShow / 2), t.options.infinite === !0 && (e >= n && e <= t.slideCount - 1 - n ? t.$slides.slice(e - n, e + n + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = t.options.slidesToShow + e, r.slice(i - n + 1, i + n + 2).addClass("slick-active").attr("aria-hidden", "false")), e === 0 ? r.eq(r.length - 1 - t.options.slidesToShow).addClass("slick-center") : e === t.slideCount - 1 && r.eq(t.options.slidesToShow).addClass("slick-center")), t.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= t.slideCount - t.options.slidesToShow ? t.$slides.slice(e, e + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : r.length <= t.options.slidesToShow ? r.addClass("slick-active").attr("aria-hidden", "false") : (s = t.slideCount % t.options.slidesToShow, i = t.options.infinite === !0 ? t.options.slidesToShow + e : e, t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - e < t.options.slidesToShow ? r.slice(i - (t.options.slidesToShow - s), i + s).addClass("slick-active").attr("aria-hidden", "false") : r.slice(i, i + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), t.options.lazyLoad === "ondemand" && t.lazyLoad()
            }, t.prototype.setupInfinite = function() {
                var t = this,
                    n, r, i;
                t.options.fade === !0 && (t.options.centerMode = !1);
                if (t.options.infinite === !0 && t.options.fade === !1) {
                    r = null;
                    if (t.slideCount > t.options.slidesToShow) {
                        t.options.centerMode === !0 ? i = t.options.slidesToShow + 1 : i = t.options.slidesToShow;
                        for (n = t.slideCount; n > t.slideCount - i; n -= 1) r = n - 1, e(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r - t.slideCount).prependTo(t.$slideTrack).addClass("slick-cloned");
                        for (n = 0; n < i; n += 1) r = n, e(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r + t.slideCount).appendTo(t.$slideTrack).addClass("slick-cloned");
                        t.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                            e(this).attr("id", "")
                        })
                    }
                }
            }, t.prototype.setPaused = function(e) {
                var t = this;
                t.options.autoplay === !0 && t.options.pauseOnHover === !0 && (t.paused = e, e ? t.autoPlayClear() : t.autoPlay())
            }, t.prototype.selectHandler = function(t) {
                var n = this,
                    r = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                    i = parseInt(r.attr("data-slick-index"));
                i || (i = 0);
                if (n.slideCount <= n.options.slidesToShow) {
                    n.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-active").attr("aria-hidden", "false"), n.options.centerMode === !0 && (n.$slider.find(".slick-slide").removeClass("slick-center"), n.$slides.eq(i).addClass("slick-center")), n.asNavFor(i);
                    return
                }
                n.slideHandler(i)
            }, t.prototype.slideHandler = function(e, t, n) {
                var r, i, s, o, u = null,
                    a = this;
                t = t || !1;
                if (a.animating === !0 && a.options.waitForAnimate === !0) return;
                if (a.options.fade === !0 && a.currentSlide === e) return;
                if (a.slideCount <= a.options.slidesToShow) return;
                t === !1 && a.asNavFor(e), r = e, u = a.getLeft(r), o = a.getLeft(a.currentSlide), a.currentLeft = a.swipeLeft === null ? o : a.swipeLeft;
                if (a.options.infinite === !1 && a.options.centerMode === !1 && (e < 0 || e > a.getDotCount() * a.options.slidesToScroll)) {
                    a.options.fade === !1 && (r = a.currentSlide, n !== !0 ? a.animateSlide(o, function() {
                        a.postSlide(r)
                    }) : a.postSlide(r));
                    return
                }
                if (a.options.infinite === !1 && a.options.centerMode === !0 && (e < 0 || e > a.slideCount - a.options.slidesToScroll)) {
                    a.options.fade === !1 && (r = a.currentSlide, n !== !0 ? a.animateSlide(o, function() {
                        a.postSlide(r)
                    }) : a.postSlide(r));
                    return
                }
                a.options.autoplay === !0 && clearInterval(a.autoPlayTimer), r < 0 ? a.slideCount % a.options.slidesToScroll !== 0 ? i = a.slideCount - a.slideCount % a.options.slidesToScroll : i = a.slideCount + r : r >= a.slideCount ? a.slideCount % a.options.slidesToScroll !== 0 ? i = 0 : i = r - a.slideCount : i = r, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, i]), s = a.currentSlide, a.currentSlide = i, a.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows();
                if (a.options.fade === !0) {
                    n !== !0 ? a.fadeSlide(i, function() {
                        a.postSlide(i)
                    }) : a.postSlide(i), a.animateHeight();
                    return
                }
                n !== !0 ? a.animateSlide(u, function() {
                    a.postSlide(i)
                }) : a.postSlide(i)
            }, t.prototype.startLoad = function() {
                var e = this;
                e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
            }, t.prototype.swipeDirection = function() {
                var e, t, n, r, i = this;
                return e = i.touchObject.startX - i.touchObject.curX, t = i.touchObject.startY - i.touchObject.curY, n = Math.atan2(t, e), r = Math.round(n * 180 / Math.PI), r < 0 && (r = 360 - Math.abs(r)), r <= 45 && r >= 0 ? i.options.rtl === !1 ? "left" : "right" : r <= 360 && r >= 315 ? i.options.rtl === !1 ? "left" : "right" : r >= 135 && r <= 225 ? i.options.rtl === !1 ? "right" : "left" : i.options.verticalSwiping === !0 ? r >= 35 && r <= 135 ? "left" : "right" : "vertical"
            }, t.prototype.swipeEnd = function(e) {
                var t = this,
                    n;
                t.dragging = !1, t.shouldClick = t.touchObject.swipeLength > 10 ? !1 : !0;
                if (t.touchObject.curX === undefined) return !1;
                t.touchObject.edgeHit === !0 && t.$slider.trigger("edge", [t, t.swipeDirection()]);
                if (t.touchObject.swipeLength >= t.touchObject.minSwipe) switch (t.swipeDirection()) {
                    case "left":
                        n = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide + t.getSlideCount()) : t.currentSlide + t.getSlideCount(), t.slideHandler(n), t.currentDirection = 0, t.touchObject = {}, t.$slider.trigger("swipe", [t, "left"]);
                        break;
                    case "right":
                        n = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide - t.getSlideCount()) : t.currentSlide - t.getSlideCount(), t.slideHandler(n), t.currentDirection = 1, t.touchObject = {}, t.$slider.trigger("swipe", [t, "right"])
                } else t.touchObject.startX !== t.touchObject.curX && (t.slideHandler(t.currentSlide), t.touchObject = {})
            }, t.prototype.swipeHandler = function(e) {
                var t = this;
                if (t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1) return;
                if (t.options.draggable === !1 && e.type.indexOf("mouse") !== -1) return;
                t.touchObject.fingerCount = e.originalEvent && e.originalEvent.touches !== undefined ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold);
                switch (e.data.action) {
                    case "start":
                        t.swipeStart(e);
                        break;
                    case "move":
                        t.swipeMove(e);
                        break;
                    case "end":
                        t.swipeEnd(e)
                }
            }, t.prototype.swipeMove = function(e) {
                var t = this,
                    n = !1,
                    r, i, s, o, u;
                u = e.originalEvent !== undefined ? e.originalEvent.touches : null;
                if (!t.dragging || u && u.length !== 1) return !1;
                r = t.getLeft(t.currentSlide), t.touchObject.curX = u !== undefined ? u[0].pageX : e.clientX, t.touchObject.curY = u !== undefined ? u[0].pageY : e.clientY, t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2))), t.options.verticalSwiping === !0 && (t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curY - t.touchObject.startY, 2)))), i = t.swipeDirection();
                if (i === "vertical") return;
                e.originalEvent !== undefined && t.touchObject.swipeLength > 4 && e.preventDefault(), o = (t.options.rtl === !1 ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1), t.options.verticalSwiping === !0 && (o = t.touchObject.curY > t.touchObject.startY ? 1 : -1), s = t.touchObject.swipeLength, t.touchObject.edgeHit = !1, t.options.infinite === !1 && (t.currentSlide === 0 && i === "right" || t.currentSlide >= t.getDotCount() && i === "left") && (s = t.touchObject.swipeLength * t.options.edgeFriction, t.touchObject.edgeHit = !0), t.options.vertical === !1 ? t.swipeLeft = r + s * o : t.swipeLeft = r + s * (t.$list.height() / t.listWidth) * o, t.options.verticalSwiping === !0 && (t.swipeLeft = r + s * o);
                if (t.options.fade === !0 || t.options.touchMove === !1) return !1;
                if (t.animating === !0) return t.swipeLeft = null, !1;
                t.setCSS(t.swipeLeft)
            }, t.prototype.swipeStart = function(e) {
                var t = this,
                    n;
                if (t.touchObject.fingerCount !== 1 || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
                e.originalEvent !== undefined && e.originalEvent.touches !== undefined && (n = e.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = n !== undefined ? n.pageX : e.clientX, t.touchObject.startY = t.touchObject.curY = n !== undefined ? n.pageY : e.clientY, t.dragging = !0
            }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
                var e = this;
                e.$slidesCache !== null && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
            }, t.prototype.unload = function() {
                var t = this;
                e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && typeof t.options.prevArrow != "object" && t.$prevArrow.remove(), t.$nextArrow && typeof t.options.nextArrow != "object" && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden", "true").css("width", "")
            }, t.prototype.unslick = function(e) {
                var t = this;
                t.$slider.trigger("unslick", [t, e]), t.destroy()
            }, t.prototype.updateArrows = function() {
                var e = this,
                    t;
                t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.options.infinite !== !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.removeClass("slick-disabled"), e.$nextArrow.removeClass("slick-disabled"), e.currentSlide === 0 ? (e.$prevArrow.addClass("slick-disabled"), e.$nextArrow.removeClass("slick-disabled")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled"), e.$prevArrow.removeClass("slick-disabled")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled"), e.$prevArrow.removeClass("slick-disabled")))
            }, t.prototype.updateDots = function() {
                var e = this;
                e.$dots !== null && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
            }, t.prototype.visibility = function() {
                var e = this;
                document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : e.options.autoplay === !0 && (e.paused = !1, e.autoPlay())
            }, e.fn.slick = function() {
                var e = this,
                    n = arguments[0],
                    r = Array.prototype.slice.call(arguments, 1),
                    i = e.length,
                    s = 0,
                    o;
                for (s; s < i; s++) {
                    typeof n == "object" || typeof n == "undefined" ? e[s].slick = new t(e[s], n) : o = e[s].slick[n].apply(e[s].slick, r);
                    if (typeof o != "undefined") return o
                }
                return e
            }
        }), define("modules/video/playlist", ["require", "lib/core", "lib/module/base", "lib/util", "bump-3", "vendor/bower/js-breakpoints/breakpoints", "vendor/bower/underscore/underscore", "vendor/bower/slick.js/slick"], function(e, t, n, r, i, s, o) {
            "use strict";
            var u = "video__item--selected",
                a = "video__tab--selected",
                f = "video--noslick",
                l = "video--slick",
                c = {
                    draggable: !0,
                    infinite: !1,
                    variableWidth: !0,
                    prevArrow: '<button class="video__nav video__prev" aria-label="scroll left"><span class="icon icon--prev" aria-hidden="true"></span></button>',
                    nextArrow: '<button class="video__nav video__next" aria-label="scroll right"><span class="icon icon--next" aria-hidden="true"></span></button>'
                };
            return n.extend({
                videos: null,
                selectors: {
                    tabLinks: ".video__tab__link",
                    playlist: ".video__items",
                    playlistItems: ".video__item"
                },
                init: function(e, t) {
                    this.videoManager = t, this._registerEvents(), s.on({
                        name: "group-3",
                        matched: o.bind(this._loadPlaylist, this),
                        exit: o.bind(this._unloadPlaylist, this)
                    })
                },
                _registerEvents: function() {
                    t.pubsub.on("video:categorySelected", o.bind(this._onCategorySelect, this)), t.pubsub.on("video:videoSelected", o.bind(this._onVideoSelect, this))
                },
                _loadPlaylist: function() {
                    this.$get("playlistItems").off("click.wwhp.video").on("click.wwhp.video", o.bind(this._onVideoClick, this)), this.$get("tabLinks").off("click.wwhp.video").on("click.wwhp.video", o.bind(this._onTabClick, this)), this.$get("playlist").slick(c), this.$el.removeClass(f).addClass(l)
                },
                _unloadPlaylist: function() {
                    this.$get("playlistItems").off("click.wwhp.video"), this.$get("tabLinks").off("click.wwhp.video"), this.$get("playlist").slick("slickUnfilter").slick("unslick"), this.$el.removeClass(l).addClass(f)
                },
                _onVideoClick: function(e) {
                    if (!t.$(e.target).is("a.tag")) {
                        e.preventDefault();
                        var n = t.$(e.currentTarget).data("category-index");
                        this.videoManager.selectVideo(n), this.videoManager.requestVideoPlay(n)
                    }
                },
                _onTabClick: function(e) {
                    e.preventDefault();
                    var n = t.$(e.currentTarget).data("category");
                    this.videoManager.selectCategory(n)
                },
                _onCategorySelect: function(e) {
                    if (!this.videoManager.videos[e]) return;
                    var n = this.$get("tabLinks").filter('[data-category="' + e + '"]'),
                        r = this.videoManager.state.playingVideo || 0,
                        i = this.videoManager.state.playingCategory === e;
                    n.parent().addClass(a).siblings().removeClass(a), this.$get("playlistItems").removeClass(u), this.$get("playlist").slick("slickFilter", ".video__item--" + e).slick("slickGoTo", i ? r : 0), t.pubsub.emit("images:refresh"), i && this.videoManager.selectVideo(r)
                },
                _onVideoSelect: function(e) {
                    var t;
                    if (!this.videoManager.state.selectedCategory || !this.videoManager.state.playingCategory || this.videoManager.state.playingCategory !== this.videoManager.state.selectedCategory || !(t = this.videoManager.videos[this.videoManager.state.selectedCategory][e])) return;
                    this.$get("playlist").slick("slickGoTo", e), t.slide.addClass(u).siblings().removeClass(u)
                }
            })
        }), define("lib/timeInterval", [], function() {
            function t(t) {
                if (!e[t]) {
                    var n = t.match(/PT((\d+)H)?((\d+)M)?((\d+)S)?/);
                    if (n === null) throw "Could not parse time interval: " + t;
                    var r = n[2] !== undefined ? parseInt(n[2], 10) : 0,
                        i = n[4] !== undefined ? parseInt(n[4], 10) : 0,
                        s = n[6] !== undefined ? parseInt(n[6], 10) : 0;
                    e[t] = {
                        h: r,
                        m: i,
                        s: s
                    }
                }
                return e[t]
            }

            function n(e) {
                return e.toString().replace(/^(\d)$/, "0$1")
            }

            function r(e) {
                var r = t(e);
                return r.m + ":" + n(r.s)
            }

            function i(e) {
                var n = t(e);
                return n.h * 3600 + n.m * 60 + n.s
            }
            var e = {};
            return {
                toTimestamp: r,
                toSeconds: i
            }
        }), define("modules/video/playlistBuilder", ["lib/timeInterval"], function(e) {
            function n(e) {
                var n = [];
                return r(e) && n.push(t), n.push({
                    vpid: e.pid,
                    kind: "programme"
                }), {
                    holdingImageURL: e.img ? e.img : "",
                    items: n,
                    title: e.title,
                    summary: e.summary
                }
            }

            function r(t) {
                return t.allowadvertising && e.toSeconds(t.duration) > 30
            }
            var t = {
                kind: "advert",
                media: {
                    kind: "video",
                    type: "video/mp4"
                }
            };
            return {
                build: n
            }
        }), define("vendor/pre-built/bbc-video-experience/bbcdotcom/adverts", [], function() {
            "use strict";
            var e, t, n = function() {
                    return window.bbcdotcom !== undefined && window.bbcdotcom.config.isAdsEnabled() === !0
                },
                r = function(t) {
                    e = t.assetType !== undefined ? t.assetType : ""
                },
                i = function(e) {
                    t = e
                },
                s = function(r) {
                    if (!t) return;
                    if (!n()) return;
                    var i;
                    try {
                        i = window.bbcdotcom.av.emp.adverts.getPrerollAdTagWithAdRule()
                    } catch (s) {
                        return
                    }
                    if (!r || !r.shortHeadline || !r.uri || !r.assetId) return;
                    var o = encodeURIComponent(r.shortHeadline.toLowerCase().split(" ").join("")),
                        u = r.assetId,
                        a = encodeURIComponent(encodeURIComponent(window.location.origin + r.uri)),
                        f = 14,
                        l = "";
                    while (f--) l += Math.floor(Math.random() * 10);
                    i = i.replace(/(correlator=)(\d+)/g, "correlator=" + l), i = i.replace(/(url=)[^&]*/g, "url=" + a), e !== "" && (i = i.replace(/(asset_type%3D(media_asset|index))/g, "asset_type%3D" + e)), i = i.replace(/(headline%3D)\w+/g, "headline%3D" + o), i = i.replace(/(story_id%3D)\w+/g, "story_id%3D" + u), t.dispatchEvent("bbc.smp.plugins.ads.event.updateAdTag", {
                        adTag: i
                    })
                },
                o = function() {
                    if (n()) {
                        var e = document.getElementById("bbccom_mpu"),
                            t = '<div class="bbccom_companion_inner"><a href="' + bbcdotcom.locale.get("advertInfoPageUrl") + '" class="bbccom_text">' + bbcdotcom.locale.get("advertisementText") + "</a>" + '<div class="bbccom_advert_inner" id="bbccom_mpu_inner"></div></div>';
                        e.innerHTML = t;
                        var r = bbcdotcom.adverts.adUnit.get();
                        googletag.cmd.push(function() {
                            googletag.defineSlot(r, [300, 60], "bbccom_mpu_inner").addService(googletag.companionAds()).addService(googletag.pubads()), googletag.enableServices()
                        })
                    }
                };
            return {
                init: r,
                initBump: i,
                isAdsModuleEnabled: n,
                updateAdTag: s,
                initCompanionAds: o
            }
        }), define("vendor/pre-built/bbc-video-experience/analytics/adapter", [], function() {
            "use strict";
            var e = {},
                t = {},
                n = function(e) {
                    t[e.getName()] = e
                },
                r = function(n) {
                    var r = n.getProviderName();
                    if (!t[r]) return;
                    var i = n.getEvents(),
                        s = n.getBuilders();
                    for (var o in i) {
                        e[o] === undefined && (e[o] = []);
                        var u = {
                            providerName: r,
                            eventName: i[o],
                            builder: s[o]
                        };
                        if (u.builder === undefined) continue;
                        e[o].push(u)
                    }
                },
                i = function() {
                    var n = arguments[0],
                        r = [];
                    for (var i = 1; i < arguments.length; i++) r.push(arguments[i]);
                    var s = e[n];
                    if (s === undefined) return;
                    for (var o in s) {
                        var u = s[o],
                            a = u.eventName,
                            f = u.builder,
                            l = t[u.providerName];
                        try {
                            l.track(a, f.apply(f, r))
                        } catch (c) {}
                    }
                },
                s = function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return {
                registerProvider: n,
                registerSource: r,
                track: i
            }
        }), define("vendor/pre-built/bbc-video-experience/analytics/provider/bbcdotcom", [], function() {
            "use strict";
            var e = function() {
                    return "bbcdotcom"
                },
                t = function() {
                    try {
                        return window.bbcdotcom !== undefined && window.bbcdotcom.config.isAnalyticsEnabled() === !0
                    } catch (e) {
                        return !1
                    }
                },
                n = function(e, t) {
                    try {
                        window.bbcdotcom.av.emp.analytics.trackEvent(e, t)
                    } catch (n) {}
                };
            try {
                t() && window.bbcdotcom.setConfig({
                    isContinuousPlayPage: !0
                })
            } catch (r) {}
            return {
                getName: e,
                isEnabled: t,
                track: n
            }
        }), define("vendor/pre-built/bbc-video-experience/analytics/provider/comscore", [], function() {
            "use strict";
            var e, t = function() {
                    return "comscore"
                },
                n = function(t, n) {
                    e.emit(t, [n])
                },
                r = function(t) {
                    e = t
                };
            return {
                getName: t,
                track: n,
                setNewsPubsub: r
            }
        }), define("vendor/pre-built/bbc-video-experience/continuousPlay/playIntent", [], function() {
            "use strict";
            var e = null,
                t = null,
                n = function(n, r) {
                    t = e, e = {
                        index: n,
                        event: null
                    }, r && (e.event = r)
                },
                r = function() {
                    return e.index
                },
                i = function() {
                    return t === null ? null : t.index
                },
                s = function() {
                    return e.event
                },
                o = function() {
                    return e !== null
                },
                u = function() {
                    return t === null
                };
            return {
                create: n,
                getIndex: r,
                getEvent: s,
                getPreviousIndex: i,
                isActive: o,
                isFirst: u
            }
        }), define("vendor/pre-built/bbc-video-experience/continuousPlay/analytics/bbcdotcom", ["vendor/pre-built/bbc-video-experience/continuousPlay/playIntent"], function(e) {
            "use strict";
            var t = "bbcdotcom",
                n = {
                    playlistLoaded: "continuousPlay.mediaStarted",
                    dismissContPlay: "continuousPlay.dismissed",
                    openMoreVideos: "continuousPlay.openedMoreVideos",
                    goneFullScreen: "videoExperience:player:enteredFullScreen"
                },
                r = {
                    playlistLoaded: function(t) {
                        var n = {
                                index: e.getIndex(),
                                title: t.title
                            },
                            r = e.getEvent();
                        return r ? (n.origin = r.origin !== undefined ? "cp-" + r.origin : null, n.cpTimeout = r.secondsIntoCountdown !== undefined ? r.secondsIntoCountdown : null, n.fullscreen = r.fullscreen !== undefined ? r.fullscreen : null) : n.origin = e.isFirst() ? "page-load" : "manual", n
                    },
                    dismissContPlay: function(e) {
                        return {
                            cpTimeout: e.secondsIntoCountdown
                        }
                    },
                    openMoreVideos: function() {
                        return {}
                    },
                    goneFullScreen: function() {
                        return {}
                    }
                };
            return {
                getProviderName: function() {
                    return t
                },
                getEvents: function() {
                    return n
                },
                getBuilders: function() {
                    return r
                }
            }
        }), define("vendor/pre-built/bbc-video-experience/continuousPlay/analytics/comscore", ["vendor/pre-built/bbc-video-experience/continuousPlay/playIntent"], function(e) {
            "use strict";
            var t = "comscore",
                n = {
                    playlistLoaded: "betamax:video:playlist_loaded"
                },
                r = {
                    playlistLoaded: function(t, n) {
                        var r = {
                                item_position: e.getIndex(),
                                vpid: t.firstProgrammeItem ? t.firstProgrammeItem.identifier : null,
                                section: n.section
                            },
                            i = e.getEvent();
                        if (i) {
                            switch (i.origin) {
                                case "cta":
                                    r.play_type = "next";
                                    break;
                                case "auto":
                                    r.play_type = "continuous";
                                    break;
                                case "carousel":
                                    r.play_type = "carousel";
                                    break;
                                default:
                                    r.play_type = null
                            }
                            r.action_location = i.fullscreen ? "player-fullscreen" : "page"
                        } else r.play_type = e.isFirst() ? "auto" : "list", r.action_location = "page";
                        return r
                    }
                };
            return {
                getProviderName: function() {
                    return t
                },
                getEvents: function() {
                    return n
                },
                getBuilders: function() {
                    return r
                }
            }
        }), define("vendor/pre-built/bbc-video-experience/continuousPlay/config", [], function() {
            "use strict";
            var e, t = function(t) {
                    e = t || {}
                },
                n = function(t) {
                    return {
                        name: "smp.plugin.continuousplay.playlistSetChanged",
                        data: {
                            items: t,
                            countdownDurationSecs: e.countdownDuration || 10,
                            adPluginExists: e.adsEnabled || !1,
                            autoPlayFirstItem: e.autoPlayFirstItem !== undefined ? e.autoPlayFirstItem : !1,
                            copy: e.copy
                        }
                    }
                },
                r = function() {
                    return {
                        html: "name:continuousPlay.js",
                        swf: "name:continuousPlay.swf"
                    }
                };
            return {
                init: t,
                getPluginLocations: r,
                getConfig: n
            }
        }), define("vendor/pre-built/bbc-video-experience/continuousPlay/dataSource", ["vendor/pre-built/bbc-video-experience/continuousPlay/playIntent"], function(e) {
            "use strict";
            var t, n, r, i, s, o = function(e) {
                    r = e, i = !1, s = []
                },
                u = function(e) {
                    r.findItems(function(s, o) {
                        if (s) return e(s);
                        t = [], n = [];
                        var u;
                        for (u in o) {
                            var a = r.parseItem(u, o),
                                f = parseInt(u, 10);
                            a.index = f, t[f] = a, n[f] = r.parseAdvertMeta(u, o)
                        }
                        i || (i = !0, p()), e(null, t)
                    })
                },
                a = function(e) {
                    h(function() {
                        e(t)
                    })
                },
                f = function(n) {
                    h(function() {
                        var r = e.getIndex();
                        l(r) && n(t[r])
                    })
                },
                l = function(e) {
                    return t && t[e] ? t[e] : undefined
                },
                c = function(t) {
                    h(function() {
                        var r = e.getIndex();
                        t(n[r])
                    })
                },
                h = function(e) {
                    i ? e() : s.push(e)
                },
                p = function() {
                    for (var e in s) {
                        var t = s[e];
                        t()
                    }
                    s = []
                };
            return {
                init: o,
                refresh: u,
                getCurrentItem: f,
                getCurrentAdvertMeta: c,
                getItemAtIndex: l,
                getData: a
            }
        }), define("vendor/pre-built/bbc-video-experience/continuousPlay/history", ["vendor/pre-built/bbc-video-experience/continuousPlay/dataSource"], function(e) {
            "use strict";
            var t, n, r, i, s, o, u = function(e) {
                    var u = e || {},
                        a = u.window || window;
                    t = a.history, n = u.isEnabled || !1, r = u.maintainHistory || !1, i = u.playHandler || function() {}, o = !0, s = t && t.pushState !== undefined, n && s && (a.onpopstate = f)
                },
                a = function() {
                    if (!n || !s) return;
                    e.getCurrentItem(function(e) {
                        if (!e) return;
                        var n = e.title + " - BBC News",
                            i = e.uri + location.search,
                            s = t.state;
                        if (s && s.uri === i) return;
                        var u = {
                            videoIndex: e.index,
                            uri: i,
                            title: n
                        };
                        r && !o ? t.pushState(u, "", i) : t.replaceState(u, "", i), l(n), o = !1
                    })
                },
                f = function(e) {
                    var t = e.state;
                    t && t.videoIndex && (i(t.videoIndex), l(t.title))
                },
                l = function(e) {
                    document.title = e
                };
            return {
                init: u,
                update: a
            }
        }), define("vendor/pre-built/bbc-video-experience/continuousPlay/main", ["vendor/pre-built/bbc-video-experience/continuousPlay/config", "vendor/pre-built/bbc-video-experience/continuousPlay/dataSource", "vendor/pre-built/bbc-video-experience/continuousPlay/playIntent", "vendor/pre-built/bbc-video-experience/bbcdotcom/adverts", "vendor/pre-built/bbc-video-experience/continuousPlay/history", "vendor/pre-built/bbc-video-experience/continuousPlay/analytics/bbcdotcom", "vendor/pre-built/bbc-video-experience/continuousPlay/analytics/comscore", "vendor/pre-built/bbc-video-experience/analytics/adapter"], function(e, t, n, r, i, s, o, u) {
            "use strict";
            var a, f = null,
                l = !1,
                c = !1,
                h = !1,
                p = !0,
                d, v, m, g, y, b, w, E, S, x = function(a, f) {
                    var l = f || {};
                    t.init(a), u.registerSource(s), u.registerSource(o), e.init({
                        staticPrefix: l.staticPrefix,
                        adsEnabled: r.isAdsModuleEnabled(),
                        countdownDuration: l.countdownDuration,
                        pluginPath: l.pluginPath,
                        autoPlayFirstItem: l.autoPlayFirstItem,
                        copy: l.copy
                    });
                    var c = l.updateBrowserUrl || {};
                    i.init({
                        isEnabled: c.enabled || !1,
                        maintainHistory: c.maintainHistory || !1,
                        playHandler: C
                    }), r.init({
                        assetType: l.advertAssetType
                    }), l.showCompanionAds === !0 && r.initCompanionAds(), L(l.handlers || {}), n.create(l.startIndex || 0)
                },
                T = function(e) {
                    a = e, r.initBump(a), a.bind("pluginLoaded", A), a.bind("pluginLoadFailed", O), a.bind("playlistLoaded", M), a.bind("continuousPlay.play", _), a.bind("continuousPlay.stats", D), a.bind("uiinfo", P), f !== null && (C(f), f = null)
                },
                N = function() {
                    t.refresh(function(t, r) {
                        if (t) {
                            y(t);
                            return
                        }
                        a.setData(e.getConfig(r));
                        var i = n.isFirst() ? n.getIndex() : n.getPreviousIndex();
                        g(a.ended() ? null : i)
                    })
                },
                C = function(e) {
                    if (!a) {
                        f = e;
                        return
                    }
                    n.create(e), t.getCurrentItem(function(e) {
                        a.loadPlaylist(e.playlist, {
                            counterName: e.counterName || null
                        })
                    })
                },
                k = function() {
                    var e, r, i;
                    if (n.isActive()) {
                        e = n.getIndex();
                        if (n.isFirst() || t.getItemAtIndex(e + 1)) r = e + 1;
                        t.getItemAtIndex(e - 1) && (i = e - 1)
                    }
                    return {
                        index: e,
                        nextIndex: r,
                        prevIndex: i
                    }
                },
                L = function(e) {
                    v = e.videoPlayed || function() {}, m = e.videoReplayed || function() {}, g = e.dataChanged || function() {}, y = e.dataFailed || function() {}, b = e.dismissed || function() {}, d = e.enabled || function() {}, w = e.turnOn || function() {}, E = e.turnOff || function() {}, S = e.failedToload || function() {}
                },
                A = function(e) {
                    e.eventData !== undefined ? c = e.eventData.match("continuousPlay") != null : e.url !== undefined && (c = e.url.match("continuousPlay") != null), c && (i.update(), d(n.getIndex()))
                },
                O = function(e) {
                    S()
                },
                M = function(s) {
                    t.getCurrentAdvertMeta(function(e) {
                        r.updateAdTag(e)
                    });
                    for (var o = 0; o < s.playlist.items.length; o++) {
                        var f = s.playlist.items[o];
                        if (f.vpid === "bbc_news24" || f.identifier === "bbc_news24") {
                            S();
                            return
                        }
                    }
                    t.getCurrentItem(function(e) {
                        u.track("playlistLoaded", s.playlist, e)
                    });
                    if (!l) {
                        t.refresh(function(t, n) {
                            if (t) return y(t);
                            a.updateUiConfig({
                                controls: {
                                    availableOnMediaEnded: !0
                                }
                            }), a.loadPlugin(e.getPluginLocations(), e.getConfig(n))
                        }), l = !0;
                        return
                    }
                    c && (i.update(), v(n.getIndex()))
                },
                _ = function(e) {
                    var t = e.origin;
                    switch (t) {
                        case "replay":
                            m();
                            break;
                        case "auto":
                        case "cta":
                        case "carousel":
                            n.create(e.index, e)
                    }
                },
                D = function(e) {
                    var t = e.id;
                    switch (t) {
                        case "dismissContPlay":
                            u.track(t, e), b();
                            break;
                        case "openMoreVideos":
                            u.track(t);
                            break;
                        case "turnCPon":
                            w(n.getIndex());
                            break;
                        case "turnCPoff":
                            E()
                    }
                },
                P = function(e) {
                    if (h) return;
                    e.isFullscreen && (h = !0, u.track("goneFullScreen"))
                },
                H = function() {
                    p = !0, w(n.getIndex())
                },
                B = function() {
                    p = !1, E()
                };
            return {
                init: x,
                initBump: T,
                refreshData: N,
                playItem: C,
                getPlayingInfo: k
            }
        }), define("vendor/pre-built/bbc-video-experience/continuousPlay/module", ["vendor/pre-built/bbc-video-experience/continuousPlay/main", "vendor/pre-built/bbc-video-experience/analytics/adapter", "vendor/pre-built/bbc-video-experience/analytics/provider/bbcdotcom"], function(e, t, n) {
            "use strict";
            return n.isEnabled() && t.registerProvider(n), e
        }), define("modules/video/player", ["require", "lib/core", "lib/module/base", "lib/util", "modules/video/playlistBuilder", "bump-3", "vendor/bower/js-breakpoints/breakpoints", "vendor/bower/underscore/underscore", "vendor/pre-built/bbc-video-experience/continuousPlay/module"], function(e, t, n, r, i, s, o, u, a) {
            "use strict";
            var f = {
                product: "news",
                autoplay: !1,
                superResponsive: !0,
                counterName: t.config.counterName,
                producer: t.config.producer
            };
            return n.extend({
                selectors: {
                    playerContainer: ".video__player",
                    player: "#player",
                    overlay: ".video__player .media",
                    title: ".video__player .media__link",
                    summary: ".video__player .media__summary",
                    img: ".video__player .media__image img",
                    source: ".video__player .media__tag"
                },
                player: null,
                state: null,
                init: function(e, t) {
                    this.videoManager = t, this.$ = s, this._registerEvents()
                },
                _registerEvents: function() {
                    t.pubsub.on("video:playRequested", u.bind(this._onPlayRequested, this)), t.pubsub.on("video:videoSelected", u.bind(this._onVideoSelected, this)), t.config.continuousPlayEnabled === !0 && t.pubsub.on("video:continuousPlay:dismissed", u.bind(this._onContinuousPlayDismissed, this)), o.on({
                        name: "group-3",
                        matched: u.bind(this._initPlayer, this),
                        exit: u.bind(this._removePlayer, this)
                    })
                },
                _initPlayer: function() {
                    this._isPlayerInitialised() || (this.player = this.$get("player").player(f), this.player.bind("initialised", u.bind(function() {
                        t.pubsub.emit("video:player:initialised", this.player)
                    }, this)), t.config.continuousPlayEnabled === !0 && this.player.bind("continuousPlay.stats", function(e) {
                        e.id === "turnCPoff" && t.pubsub.emit("video:continuousPlay:autoPlaySettingChange", !1), e.id === "turnCPon" && t.pubsub.emit("video:continuousPlay:autoPlaySettingChange", !0)
                    }), e(["bbcdotcom/av/emp/adverts", "bbcdotcom/av/emp/analytics"], u.bind(function(e, t) {
                        e.addSmpPlugin(this.$get("player").attr("id"), this.player), t.addEventListeners(this.player), this._onPlayerCreated(this.player)
                    }, this), u.bind(function(e) {
                        r.logger.warn("bbcdotcom adverts and analytics failed to load with error:", e), this._onPlayerCreated(this.player)
                    }, this))), this.$get("overlay").off("click.wwhp.video").on("click.wwhp.video", u.bind(this._onOverlayClick, this))
                },
                _removePlayer: function() {
                    this._isPlayerInitialised() && this.player.pause(), this.$get("overlay").off("click.wwhp.video")
                },
                _isPlayerInitialised: function() {
                    return !!this.player
                },
                _playVideo: function(e) {
                    try {
                        this._hideOverlay();
                        if (t.config.continuousPlayEnabled === !0) a.refreshData(), a.playItem(e);
                        else {
                            var n;
                            if (!(n = this.videoManager.getVideoByIndex(e))) return;
                            var r = i.build({
                                    allowadvertising: n.data.allowadvertising,
                                    pid: n.data.pid,
                                    title: n.data.title,
                                    img: n.data.img,
                                    summary: n.data.summary,
                                    duration: n.data.duration
                                }),
                                s = {
                                    statsObject: {
                                        clipPID: n.data.clippid ? n.data.clippid : n.data.pid,
                                        producer: t.config.producer
                                    }
                                };
                            this.player.loadPlaylist(r, s)
                        }
                    } catch (o) {
                        console.log(o)
                    }
                },
                _showOverlay: function() {
                    this.$get("overlay").css("z-index", 500), this.$get("overlay").removeClass("media--overlay__hidden")
                },
                _hideOverlay: function() {
                    this.$get("overlay").addClass("media--overlay__hidden"), setTimeout(u.bind(function() {
                        this.$get("overlay").css("z-index", 0)
                    }, this), 800)
                },
                _replaceOverlayContent: function(e) {
                    this.$get("title").html(e.title).attr({
                        href: e.url
                    }), this.$get("summary").html(e.summary), this.$get("source").html(e.sourcename).attr({
                        href: e.sourceurl
                    }), this.$get("img").attr({
                        src: e.img,
                        alt: e.imgalttext,
                        "data-src": e.img
                    })
                },
                _onPlayRequested: function(e) {
                    this._playVideo(e)
                },
                _onVideoSelected: function(e) {
                    var t;
                    if (!(t = this.videoManager.getVideoByIndex(e))) return;
                    this._replaceOverlayContent(t.data)
                },
                _onContinuousPlayDismissed: function() {
                    this._showOverlay()
                },
                _onOverlayClick: function(e) {
                    t.$(e.target).is("a.tag") || (e.preventDefault(), this.videoManager.requestVideoPlay(this.videoManager.state.playingVideo))
                },
                _onVideoEnd: function() {
                    if (t.config.continuousPlayEnabled !== !0) {
                        this._showOverlay();
                        return
                    }(!a.getPlayingInfo().nextIndex || this.videoManager.state.autoPlay === !1) && this._showOverlay()
                },
                _onPlayerCreated: function(e) {
                    e.bind("playlistEnded", u.bind(this._onVideoEnd, this)), t.config.continuousPlayEnabled !== !0 && e.autoplay(!0), e.load()
                }
            })
        }),
        function(e, t) {
            typeof exports == "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define("vendor/bower/moment/moment", t) : e.moment = t()
        }(this, function() {
            "use strict";

            function t() {
                return e.apply(null, arguments)
            }

            function n(t) {
                e = t
            }

            function r(e) {
                return Object.prototype.toString.call(e) === "[object Array]"
            }

            function i(e) {
                return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
            }

            function s(e, t) {
                var n = [],
                    r;
                for (r = 0; r < e.length; ++r) n.push(t(e[r], r));
                return n
            }

            function o(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function u(e, t) {
                for (var n in t) o(t, n) && (e[n] = t[n]);
                return o(t, "toString") && (e.toString = t.toString), o(t, "valueOf") && (e.valueOf = t.valueOf), e
            }

            function a(e, t, n, r) {
                return gn(e, t, n, r, !0).utc()
            }

            function f() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1
                }
            }

            function l(e) {
                return e._pf == null && (e._pf = f()), e._pf
            }

            function c(e) {
                if (e._isValid == null) {
                    var t = l(e);
                    e._isValid = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated, e._strict && (e._isValid = e._isValid && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === undefined)
                }
                return e._isValid
            }

            function h(e) {
                var t = a(NaN);
                return e != null ? u(l(t), e) : l(t).userInvalidated = !0, t
            }

            function d(e, t) {
                var n, r, i;
                typeof t._isAMomentObject != "undefined" && (e._isAMomentObject = t._isAMomentObject), typeof t._i != "undefined" && (e._i = t._i), typeof t._f != "undefined" && (e._f = t._f), typeof t._l != "undefined" && (e._l = t._l), typeof t._strict != "undefined" && (e._strict = t._strict), typeof t._tzm != "undefined" && (e._tzm = t._tzm), typeof t._isUTC != "undefined" && (e._isUTC = t._isUTC), typeof t._offset != "undefined" && (e._offset = t._offset), typeof t._pf != "undefined" && (e._pf = l(t)), typeof t._locale != "undefined" && (e._locale = t._locale);
                if (p.length > 0)
                    for (n in p) r = p[n], i = t[r], typeof i != "undefined" && (e[r] = i);
                return e
            }

            function m(e) {
                d(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), v === !1 && (v = !0, t.updateOffset(this), v = !1)
            }

            function g(e) {
                return e instanceof m || e != null && e._isAMomentObject != null
            }

            function y(e) {
                return e < 0 ? Math.ceil(e) : Math.floor(e)
            }

            function b(e) {
                var t = +e,
                    n = 0;
                return t !== 0 && isFinite(t) && (n = y(t)), n
            }

            function w(e, t, n) {
                var r = Math.min(e.length, t.length),
                    i = Math.abs(e.length - t.length),
                    s = 0,
                    o;
                for (o = 0; o < r; o++)(n && e[o] !== t[o] || !n && b(e[o]) !== b(t[o])) && s++;
                return s + i
            }

            function E() {}

            function T(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }

            function N(e) {
                var t = 0,
                    n, r, i, s;
                while (t < e.length) {
                    s = T(e[t]).split("-"), n = s.length, r = T(e[t + 1]), r = r ? r.split("-") : null;
                    while (n > 0) {
                        i = C(s.slice(0, n).join("-"));
                        if (i) return i;
                        if (r && r.length >= n && w(s, r, !0) >= n - 1) break;
                        n--
                    }
                    t++
                }
                return null
            }

            function C(e) {
                var t = null;
                if (!S[e] && typeof module != "undefined" && module && module.exports) try {
                    t = x._abbr, require("./locale/" + e), k(t)
                } catch (n) {}
                return S[e]
            }

            function k(e, t) {
                var n;
                return e && (typeof t == "undefined" ? n = A(e) : n = L(e, t), n && (x = n)), x._abbr
            }

            function L(e, t) {
                return t !== null ? (t.abbr = e, S[e] = S[e] || new E, S[e].set(t), k(e), S[e]) : (delete S[e], null)
            }

            function A(e) {
                var t;
                e && e._locale && e._locale._abbr && (e = e._locale._abbr);
                if (!e) return x;
                if (!r(e)) {
                    t = C(e);
                    if (t) return t;
                    e = [e]
                }
                return N(e)
            }

            function M(e, t) {
                var n = e.toLowerCase();
                O[n] = O[n + "s"] = O[t] = e
            }

            function _(e) {
                return typeof e == "string" ? O[e] || O[e.toLowerCase()] : undefined
            }

            function D(e) {
                var t = {},
                    n, r;
                for (r in e) o(e, r) && (n = _(r), n && (t[n] = e[r]));
                return t
            }

            function P(e, n) {
                return function(r) {
                    return r != null ? (B(this, e, r), t.updateOffset(this, n), this) : H(this, e)
                }
            }

            function H(e, t) {
                return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
            }

            function B(e, t, n) {
                return e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
            }

            function j(e, t) {
                var n;
                if (typeof e == "object")
                    for (n in e) this.set(n, e[n]);
                else {
                    e = _(e);
                    if (typeof this[e] == "function") return this[e](t)
                }
                return this
            }

            function F(e, t, n) {
                var r = "" + Math.abs(e),
                    i = t - r.length,
                    s = e >= 0;
                return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
            }

            function z(e, t, n, r) {
                var i = r;
                typeof r == "string" && (i = function() {
                    return this[r]()
                }), e && (U[e] = i), t && (U[t[0]] = function() {
                    return F(i.apply(this, arguments), t[1], t[2])
                }), n && (U[n] = function() {
                    return this.localeData().ordinal(i.apply(this, arguments), e)
                })
            }

            function W(e) {
                return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
            }

            function X(e) {
                var t = e.match(I),
                    n, r;
                for (n = 0, r = t.length; n < r; n++) U[t[n]] ? t[n] = U[t[n]] : t[n] = W(t[n]);
                return function(i) {
                    var s = "";
                    for (n = 0; n < r; n++) s += t[n] instanceof Function ? t[n].call(i, e) : t[n];
                    return s
                }
            }

            function V(e, t) {
                return e.isValid() ? (t = $(t, e.localeData()), R[t] = R[t] || X(t), R[t](e)) : e.localeData().invalidDate()
            }

            function $(e, t) {
                function r(e) {
                    return t.longDateFormat(e) || e
                }
                var n = 5;
                q.lastIndex = 0;
                while (n >= 0 && q.test(e)) e = e.replace(q, r), q.lastIndex = 0, n -= 1;
                return e
            }

            function ft(e) {
                return typeof e == "function" && Object.prototype.toString.call(e) === "[object Function]"
            }

            function lt(e, t, n) {
                at[e] = ft(t) ? t : function(e) {
                    return e && n ? n : t
                }
            }

            function ct(e, t) {
                return o(at, e) ? at[e](t._strict, t._locale) : new RegExp(ht(e))
            }

            function ht(e) {
                return e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
                    return t || n || r || i
                }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function dt(e, t) {
                var n, r = t;
                typeof e == "string" && (e = [e]), typeof t == "number" && (r = function(e, n) {
                    n[t] = b(e)
                });
                for (n = 0; n < e.length; n++) pt[e[n]] = r
            }

            function vt(e, t) {
                dt(e, function(e, n, r, i) {
                    r._w = r._w || {}, t(e, r._w, r, i)
                })
            }

            function mt(e, t, n) {
                t != null && o(pt, e) && pt[e](t, n._a, n, e)
            }

            function Tt(e, t) {
                return (new Date(Date.UTC(e, t + 1, 0))).getUTCDate()
            }

            function Ct(e) {
                return this._months[e.month()]
            }

            function Lt(e) {
                return this._monthsShort[e.month()]
            }

            function At(e, t, n) {
                var r, i, s;
                this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []);
                for (r = 0; r < 12; r++) {
                    i = a([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), !n && !this._monthsParse[r] && (s = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(s.replace(".", ""), "i"));
                    if (n && t === "MMMM" && this._longMonthsParse[r].test(e)) return r;
                    if (n && t === "MMM" && this._shortMonthsParse[r].test(e)) return r;
                    if (!n && this._monthsParse[r].test(e)) return r
                }
            }

            function Ot(e, t) {
                var n;
                if (typeof t == "string") {
                    t = e.localeData().monthsParse(t);
                    if (typeof t != "number") return e
                }
                return n = Math.min(e.date(), Tt(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
            }

            function Mt(e) {
                return e != null ? (Ot(this, e), t.updateOffset(this, !0), this) : H(this, "Month")
            }

            function _t() {
                return Tt(this.year(), this.month())
            }

            function Dt(e) {
                var t, n = e._a;
                return n && l(e).overflow === -2 && (t = n[yt] < 0 || n[yt] > 11 ? yt : n[bt] < 1 || n[bt] > Tt(n[gt], n[yt]) ? bt : n[wt] < 0 || n[wt] > 24 || n[wt] === 24 && (n[Et] !== 0 || n[St] !== 0 || n[xt] !== 0) ? wt : n[Et] < 0 || n[Et] > 59 ? Et : n[St] < 0 || n[St] > 59 ? St : n[xt] < 0 || n[xt] > 999 ? xt : -1, l(e)._overflowDayOfYear && (t < gt || t > bt) && (t = bt), l(e).overflow = t), e
            }

            function Pt(e) {
                t.suppressDeprecationWarnings === !1 && typeof console != "undefined" && console.warn && console.warn("Deprecation warning: " + e)
            }

            function Ht(e, t) {
                var n = !0;
                return u(function() {
                    return n && (Pt(e + "\n" + (new Error).stack), n = !1), t.apply(this, arguments)
                }, t)
            }

            function jt(e, t) {
                Bt[e] || (Pt(t), Bt[e] = !0)
            }

            function Ut(e) {
                var t, n, r = e._i,
                    i = Ft.exec(r);
                if (i) {
                    l(e).iso = !0;
                    for (t = 0, n = It.length; t < n; t++)
                        if (It[t][1].exec(r)) {
                            e._f = It[t][0];
                            break
                        }
                    for (t = 0, n = qt.length; t < n; t++)
                        if (qt[t][1].exec(r)) {
                            e._f += (i[6] || " ") + qt[t][0];
                            break
                        }
                    r.match(st) && (e._f += "Z"), ln(e)
                } else e._isValid = !1
            }

            function zt(e) {
                var n = Rt.exec(e._i);
                if (n !== null) {
                    e._d = new Date(+n[1]);
                    return
                }
                Ut(e), e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e))
            }

            function Wt(e, t, n, r, i, s, o) {
                var u = new Date(e, t, n, r, i, s, o);
                return e < 1970 && u.setFullYear(e), u
            }

            function Xt(e) {
                var t = new Date(Date.UTC.apply(null, arguments));
                return e < 1970 && t.setUTCFullYear(e), t
            }

            function Vt(e) {
                return $t(e) ? 366 : 365
            }

            function $t(e) {
                return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
            }

            function Kt() {
                return $t(this.year())
            }

            function Qt(e, t, n) {
                var r = n - t,
                    i = n - e.day(),
                    s;
                return i > r && (i -= 7), i < r - 7 && (i += 7), s = yn(e).add(i, "d"), {
                    week: Math.ceil(s.dayOfYear() / 7),
                    year: s.year()
                }
            }

            function Gt(e) {
                return Qt(e, this._week.dow, this._week.doy).week
            }

            function Zt() {
                return this._week.dow
            }

            function en() {
                return this._week.doy
            }

            function tn(e) {
                var t = this.localeData().week(this);
                return e == null ? t : this.add((e - t) * 7, "d")
            }

            function nn(e) {
                var t = Qt(this, 1, 4).week;
                return e == null ? t : this.add((e - t) * 7, "d")
            }

            function rn(e, t, n, r, i) {
                var s = 6 + i - r,
                    o = Xt(e, 0, 1 + s),
                    u = o.getUTCDay(),
                    a;
                return u < i && (u += 7), n = n != null ? 1 * n : i, a = 1 + s + 7 * (t - 1) - u + n, {
                    year: a > 0 ? e : e - 1,
                    dayOfYear: a > 0 ? a : Vt(e - 1) + a
                }
            }

            function sn(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return e == null ? t : this.add(e - t, "d")
            }

            function on(e, t, n) {
                return e != null ? e : t != null ? t : n
            }

            function un(e) {
                var t = new Date;
                return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
            }

            function an(e) {
                var t, n, r = [],
                    i, s;
                if (e._d) return;
                i = un(e), e._w && e._a[bt] == null && e._a[yt] == null && fn(e), e._dayOfYear && (s = on(e._a[gt], i[gt]), e._dayOfYear > Vt(s) && (l(e)._overflowDayOfYear = !0), n = Xt(s, 0, e._dayOfYear), e._a[yt] = n.getUTCMonth(), e._a[bt] = n.getUTCDate());
                for (t = 0; t < 3 && e._a[t] == null; ++t) e._a[t] = r[t] = i[t];
                for (; t < 7; t++) e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
                e._a[wt] === 24 && e._a[Et] === 0 && e._a[St] === 0 && e._a[xt] === 0 && (e._nextDay = !0, e._a[wt] = 0), e._d = (e._useUTC ? Xt : Wt).apply(null, r), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[wt] = 24)
            }

            function fn(e) {
                var t, n, r, i, s, o, u;
                t = e._w, t.GG != null || t.W != null || t.E != null ? (s = 1, o = 4, n = on(t.GG, e._a[gt], Qt(yn(), 1, 4).year), r = on(t.W, 1), i = on(t.E, 1)) : (s = e._locale._week.dow, o = e._locale._week.doy, n = on(t.gg, e._a[gt], Qt(yn(), s, o).year), r = on(t.w, 1), t.d != null ? (i = t.d, i < s && ++r) : t.e != null ? i = t.e + s : i = s), u = rn(n, r, i, o, s), e._a[gt] = u.year, e._dayOfYear = u.dayOfYear
            }

            function ln(e) {
                if (e._f === t.ISO_8601) {
                    Ut(e);
                    return
                }
                e._a = [], l(e).empty = !0;
                var n = "" + e._i,
                    r, i, s, o, u, a = n.length,
                    f = 0;
                s = $(e._f, e._locale).match(I) || [];
                for (r = 0; r < s.length; r++) o = s[r], i = (n.match(ct(o, e)) || [])[0], i && (u = n.substr(0, n.indexOf(i)), u.length > 0 && l(e).unusedInput.push(u), n = n.slice(n.indexOf(i) + i.length), f += i.length), U[o] ? (i ? l(e).empty = !1 : l(e).unusedTokens.push(o), mt(o, i, e)) : e._strict && !i && l(e).unusedTokens.push(o);
                l(e).charsLeftOver = a - f, n.length > 0 && l(e).unusedInput.push(n), l(e).bigHour === !0 && e._a[wt] <= 12 && e._a[wt] > 0 && (l(e).bigHour = undefined), e._a[wt] = cn(e._locale, e._a[wt], e._meridiem), an(e), Dt(e)
            }

            function cn(e, t, n) {
                var r;
                return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : e.isPM != null ? (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0), t) : t
            }

            function hn(e) {
                var t, n, r, i, s;
                if (e._f.length === 0) {
                    l(e).invalidFormat = !0, e._d = new Date(NaN);
                    return
                }
                for (i = 0; i < e._f.length; i++) {
                    s = 0, t = d({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[i], ln(t);
                    if (!c(t)) continue;
                    s += l(t).charsLeftOver, s += l(t).unusedTokens.length * 10, l(t).score = s;
                    if (r == null || s < r) r = s, n = t
                }
                u(e, n || t)
            }

            function pn(e) {
                if (e._d) return;
                var t = D(e._i);
                e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], an(e)
            }

            function dn(e) {
                var t = new m(Dt(vn(e)));
                return t._nextDay && (t.add(1, "d"), t._nextDay = undefined), t
            }

            function vn(e) {
                var t = e._i,
                    n = e._f;
                return e._locale = e._locale || A(e._l), t === null || n === undefined && t === "" ? h({
                    nullInput: !0
                }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), g(t) ? new m(Dt(t)) : (r(n) ? hn(e) : n ? ln(e) : i(t) ? e._d = t : mn(e), e))
            }

            function mn(e) {
                var n = e._i;
                n === undefined ? e._d = new Date : i(n) ? e._d = new Date(+n) : typeof n == "string" ? zt(e) : r(n) ? (e._a = s(n.slice(0), function(e) {
                    return parseInt(e, 10)
                }), an(e)) : typeof n == "object" ? pn(e) : typeof n == "number" ? e._d = new Date(n) : t.createFromInputFallback(e)
            }

            function gn(e, t, n, r, i) {
                var s = {};
                return typeof n == "boolean" && (r = n, n = undefined), s._isAMomentObject = !0, s._useUTC = s._isUTC = i, s._l = n, s._i = e, s._f = t, s._strict = r, dn(s)
            }

            function yn(e, t, n, r) {
                return gn(e, t, n, r, !1)
            }

            function En(e, t) {
                var n, i;
                t.length === 1 && r(t[0]) && (t = t[0]);
                if (!t.length) return yn();
                n = t[0];
                for (i = 1; i < t.length; ++i)
                    if (!t[i].isValid() || t[i][e](n)) n = t[i];
                return n
            }

            function Sn() {
                var e = [].slice.call(arguments, 0);
                return En("isBefore", e)
            }

            function xn() {
                var e = [].slice.call(arguments, 0);
                return En("isAfter", e)
            }

            function Tn(e) {
                var t = D(e),
                    n = t.year || 0,
                    r = t.quarter || 0,
                    i = t.month || 0,
                    s = t.week || 0,
                    o = t.day || 0,
                    u = t.hour || 0,
                    a = t.minute || 0,
                    f = t.second || 0,
                    l = t.millisecond || 0;
                this._milliseconds = +l + f * 1e3 + a * 6e4 + u * 36e5, this._days = +o + s * 7, this._months = +i + r * 3 + n * 12, this._data = {}, this._locale = A(), this._bubble()
            }

            function Nn(e) {
                return e instanceof Tn
            }

            function Cn(e, t) {
                z(e, 0, 0, function() {
                    var e = this.utcOffset(),
                        n = "+";
                    return e < 0 && (e = -e, n = "-"), n + F(~~(e / 60), 2) + t + F(~~e % 60, 2)
                })
            }

            function Ln(e) {
                var t = (e || "").match(st) || [],
                    n = t[t.length - 1] || [],
                    r = (n + "").match(kn) || ["-", 0, 0],
                    i = +(r[1] * 60) + b(r[2]);
                return r[0] === "+" ? i : -i
            }

            function An(e, n) {
                var r, s;
                return n._isUTC ? (r = n.clone(), s = (g(e) || i(e) ? +e : +yn(e)) - +r, r._d.setTime(+r._d + s), t.updateOffset(r, !1), r) : yn(e).local()
            }

            function On(e) {
                return -Math.round(e._d.getTimezoneOffset() / 15) * 15
            }

            function Mn(e, n) {
                var r = this._offset || 0,
                    i;
                return e != null ? (typeof e == "string" && (e = Ln(e)), Math.abs(e) < 16 && (e *= 60), !this._isUTC && n && (i = On(this)), this._offset = e, this._isUTC = !0, i != null && this.add(i, "m"), r !== e && (!n || this._changeInProgress ? Kn(this, Wn(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r : On(this)
            }

            function _n(e, t) {
                return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
            }

            function Dn(e) {
                return this.utcOffset(0, e)
            }

            function Pn(e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(On(this), "m")), this
            }

            function Hn() {
                return this._tzm ? this.utcOffset(this._tzm) : typeof this._i == "string" && this.utcOffset(Ln(this._i)), this
            }

            function Bn(e) {
                return e = e ? yn(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0
            }

            function jn() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }

            function Fn() {
                if (typeof this._isDSTShifted != "undefined") return this._isDSTShifted;
                var e = {};
                d(e, this), e = vn(e);
                if (e._a) {
                    var t = e._isUTC ? a(e._a) : yn(e._a);
                    this._isDSTShifted = this.isValid() && w(e._a, t.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }

            function In() {
                return !this._isUTC
            }

            function qn() {
                return this._isUTC
            }

            function Rn() {
                return this._isUTC && this._offset === 0
            }

            function Wn(e, t) {
                var n = e,
                    r = null,
                    i, s, u;
                return Nn(e) ? n = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : typeof e == "number" ? (n = {}, t ? n[t] = e : n.milliseconds = e) : (r = Un.exec(e)) ? (i = r[1] === "-" ? -1 : 1, n = {
                    y: 0,
                    d: b(r[bt]) * i,
                    h: b(r[wt]) * i,
                    m: b(r[Et]) * i,
                    s: b(r[St]) * i,
                    ms: b(r[xt]) * i
                }) : (r = zn.exec(e)) ? (i = r[1] === "-" ? -1 : 1, n = {
                    y: Xn(r[2], i),
                    M: Xn(r[3], i),
                    d: Xn(r[4], i),
                    h: Xn(r[5], i),
                    m: Xn(r[6], i),
                    s: Xn(r[7], i),
                    w: Xn(r[8], i)
                }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (u = $n(yn(n.from), yn(n.to)), n = {}, n.ms = u.milliseconds, n.M = u.months), s = new Tn(n), Nn(e) && o(e, "_locale") && (s._locale = e._locale), s
            }

            function Xn(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t
            }

            function Vn(e, t) {
                var n = {
                    milliseconds: 0,
                    months: 0
                };
                return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
            }

            function $n(e, t) {
                var n;
                return t = An(t, e), e.isBefore(t) ? n = Vn(e, t) : (n = Vn(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n
            }

            function Jn(e, t) {
                return function(n, r) {
                    var i, s;
                    return r !== null && !isNaN(+r) && (jt(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), s = n, n = r, r = s), n = typeof n == "string" ? +n : n, i = Wn(n, r), Kn(this, i, e), this
                }
            }

            function Kn(e, n, r, i) {
                var s = n._milliseconds,
                    o = n._days,
                    u = n._months;
                i = i == null ? !0 : i, s && e._d.setTime(+e._d + s * r), o && B(e, "Date", H(e, "Date") + o * r), u && Ot(e, H(e, "Month") + u * r), i && t.updateOffset(e, o || u)
            }

            function Yn(e, t) {
                var n = e || yn(),
                    r = An(n, this).startOf("day"),
                    i = this.diff(r, "days", !0),
                    s = i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse";
                return this.format(t && t[s] || this.localeData().calendar(s, this, yn(n)))
            }

            function Zn() {
                return new m(this)
            }

            function er(e, t) {
                var n;
                return t = _(typeof t != "undefined" ? t : "millisecond"), t === "millisecond" ? (e = g(e) ? e : yn(e), +this > +e) : (n = g(e) ? +e : +yn(e), n < +this.clone().startOf(t))
            }

            function tr(e, t) {
                var n;
                return t = _(typeof t != "undefined" ? t : "millisecond"), t === "millisecond" ? (e = g(e) ? e : yn(e), +this < +e) : (n = g(e) ? +e : +yn(e), +this.clone().endOf(t) < n)
            }

            function nr(e, t, n) {
                return this.isAfter(e, n) && this.isBefore(t, n)
            }

            function rr(e, t) {
                var n;
                return t = _(t || "millisecond"), t === "millisecond" ? (e = g(e) ? e : yn(e), +this === +e) : (n = +yn(e), +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))
            }

            function ir(e, t, n) {
                var r = An(e, this),
                    i = (r.utcOffset() - this.utcOffset()) * 6e4,
                    s, o;
                return t = _(t), t === "year" || t === "month" || t === "quarter" ? (o = sr(this, r), t === "quarter" ? o /= 3 : t === "year" && (o /= 12)) : (s = this - r, o = t === "second" ? s / 1e3 : t === "minute" ? s / 6e4 : t === "hour" ? s / 36e5 : t === "day" ? (s - i) / 864e5 : t === "week" ? (s - i) / 6048e5 : s), n ? o : y(o)
            }

            function sr(e, t) {
                var n = (t.year() - e.year()) * 12 + (t.month() - e.month()),
                    r = e.clone().add(n, "months"),
                    i, s;
                return t - r < 0 ? (i = e.clone().add(n - 1, "months"), s = (t - r) / (r - i)) : (i = e.clone().add(n + 1, "months"), s = (t - r) / (i - r)), -(n + s)
            }

            function or() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }

            function ur() {
                var e = this.clone().utc();
                return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : V(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : V(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            }

            function ar(e) {
                var n = V(this, e || t.defaultFormat);
                return this.localeData().postformat(n)
            }

            function fr(e, t) {
                return this.isValid() ? Wn({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }

            function lr(e) {
                return this.from(yn(), e)
            }

            function cr(e, t) {
                return this.isValid() ? Wn({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }

            function hr(e) {
                return this.to(yn(), e)
            }

            function pr(e) {
                var t;
                return e === undefined ? this._locale._abbr : (t = A(e), t != null && (this._locale = t), this)
            }

            function vr() {
                return this._locale
            }

            function mr(e) {
                e = _(e);
                switch (e) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return e === "week" && this.weekday(0), e === "isoWeek" && this.isoWeekday(1), e === "quarter" && this.month(Math.floor(this.month() / 3) * 3), this
            }

            function gr(e) {
                return e = _(e), e === undefined || e === "millisecond" ? this : this.startOf(e).add(1, e === "isoWeek" ? "week" : e).subtract(1, "ms")
            }

            function yr() {
                return +this._d - (this._offset || 0) * 6e4
            }

            function br() {
                return Math.floor(+this / 1e3)
            }

            function wr() {
                return this._offset ? new Date(+this) : this._d
            }

            function Er() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }

            function Sr() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }

            function xr() {
                return c(this)
            }

            function Tr() {
                return u({}, l(this))
            }

            function Nr() {
                return l(this).overflow
            }

            function Cr(e, t) {
                z(0, [e, e.length], 0, t)
            }

            function kr(e, t, n) {
                return Qt(yn([e, 11, 31 + t - n]), t, n).week
            }

            function Lr(e) {
                var t = Qt(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                return e == null ? t : this.add(e - t, "y")
            }

            function Ar(e) {
                var t = Qt(this, 1, 4).year;
                return e == null ? t : this.add(e - t, "y")
            }

            function Or() {
                return kr(this.year(), 1, 4)
            }

            function Mr() {
                var e = this.localeData()._week;
                return kr(this.year(), e.dow, e.doy)
            }

            function _r(e) {
                return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3)
            }

            function Pr(e, t) {
                return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10)
            }

            function Br(e) {
                return this._weekdays[e.day()]
            }

            function Fr(e) {
                return this._weekdaysShort[e.day()]
            }

            function qr(e) {
                return this._weekdaysMin[e.day()]
            }

            function Rr(e) {
                var t, n, r;
                this._weekdaysParse = this._weekdaysParse || [];
                for (t = 0; t < 7; t++) {
                    this._weekdaysParse[t] || (n = yn([2e3, 1]).day(t), r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(r.replace(".", ""), "i"));
                    if (this._weekdaysParse[t].test(e)) return t
                }
            }

            function Ur(e) {
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return e != null ? (e = Pr(e, this.localeData()), this.add(e - t, "d")) : t
            }

            function zr(e) {
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return e == null ? t : this.add(e - t, "d")
            }

            function Wr(e) {
                return e == null ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
            }

            function Xr(e, t) {
                z(e, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                })
            }

            function Vr(e, t) {
                return t._meridiemParse
            }

            function $r(e) {
                return (e + "").toLowerCase().charAt(0) === "p"
            }

            function Kr(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }

            function ei(e, t) {
                t[xt] = b(("0." + e) * 1e3)
            }

            function ni() {
                return this._isUTC ? "UTC" : ""
            }

            function ri() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }

            function oi(e) {
                return yn(e * 1e3)
            }

            function ui() {
                return yn.apply(null, arguments).parseZone()
            }

            function fi(e, t, n) {
                var r = this._calendar[e];
                return typeof r == "function" ? r.call(t, n) : r
            }

            function ci(e) {
                var t = this._longDateFormat[e],
                    n = this._longDateFormat[e.toUpperCase()];
                return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                    return e.slice(1)
                }), this._longDateFormat[e])
            }

            function pi() {
                return this._invalidDate
            }

            function mi(e) {
                return this._ordinal.replace("%d", e)
            }

            function gi(e) {
                return e
            }

            function bi(e, t, n, r) {
                var i = this._relativeTime[n];
                return typeof i == "function" ? i(e, t, n, r) : i.replace(/%d/i, e)
            }

            function wi(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return typeof n == "function" ? n(t) : n.replace(/%s/i, t)
            }

            function Ei(e) {
                var t, n;
                for (n in e) t = e[n], typeof t == "function" ? this[n] = t : this["_" + n] = t;
                this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            }

            function xi(e, t, n, r) {
                var i = A(),
                    s = a().set(r, t);
                return i[n](s, e)
            }

            function Ti(e, t, n, r, i) {
                typeof e == "number" && (t = e, e = undefined), e = e || "";
                if (t != null) return xi(e, t, n, i);
                var s, o = [];
                for (s = 0; s < r; s++) o[s] = xi(e, s, n, i);
                return o
            }

            function Ni(e, t) {
                return Ti(e, t, "months", 12, "month")
            }

            function Ci(e, t) {
                return Ti(e, t, "monthsShort", 12, "month")
            }

            function ki(e, t) {
                return Ti(e, t, "weekdays", 7, "day")
            }

            function Li(e, t) {
                return Ti(e, t, "weekdaysShort", 7, "day")
            }

            function Ai(e, t) {
                return Ti(e, t, "weekdaysMin", 7, "day")
            }

            function Mi() {
                var e = this._data;
                return this._milliseconds = Oi(this._milliseconds), this._days = Oi(this._days), this._months = Oi(this._months), e.milliseconds = Oi(e.milliseconds), e.seconds = Oi(e.seconds), e.minutes = Oi(e.minutes), e.hours = Oi(e.hours), e.months = Oi(e.months), e.years = Oi(e.years), this
            }

            function _i(e, t, n, r) {
                var i = Wn(t, n);
                return e._milliseconds += r * i._milliseconds, e._days += r * i._days, e._months += r * i._months, e._bubble()
            }

            function Di(e, t) {
                return _i(this, e, t, 1)
            }

            function Pi(e, t) {
                return _i(this, e, t, -1)
            }

            function Hi(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }

            function Bi() {
                var e = this._milliseconds,
                    t = this._days,
                    n = this._months,
                    r = this._data,
                    i, s, o, u, a;
                return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Hi(Fi(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, i = y(e / 1e3), r.seconds = i % 60, s = y(i / 60), r.minutes = s % 60, o = y(s / 60), r.hours = o % 24, t += y(o / 24), a = y(ji(t)), n += a, t -= Hi(Fi(a)), u = y(n / 12), n %= 12, r.days = t, r.months = n, r.years = u, this
            }

            function ji(e) {
                return e * 4800 / 146097
            }

            function Fi(e) {
                return e * 146097 / 4800
            }

            function Ii(e) {
                var t, n, r = this._milliseconds;
                e = _(e);
                if (e === "month" || e === "year") return t = this._days + r / 864e5, n = this._months + ji(t), e === "month" ? n : n / 12;
                t = this._days + Math.round(Fi(this._months));
                switch (e) {
                    case "week":
                        return t / 7 + r / 6048e5;
                    case "day":
                        return t + r / 864e5;
                    case "hour":
                        return t * 24 + r / 36e5;
                    case "minute":
                        return t * 1440 + r / 6e4;
                    case "second":
                        return t * 86400 + r / 1e3;
                    case "millisecond":
                        return Math.floor(t * 864e5) + r;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }

            function qi() {
                return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + b(this._months / 12) * 31536e6
            }

            function Ri(e) {
                return function() {
                    return this.as(e)
                }
            }

            function Qi(e) {
                return e = _(e), this[e + "s"]()
            }

            function Gi(e) {
                return function() {
                    return this._data[e]
                }
            }

            function ss() {
                return y(this.days() / 7)
            }

            function as(e, t, n, r, i) {
                return i.relativeTime(t || 1, !!n, e, r)
            }

            function fs(e, t, n) {
                var r = Wn(e).abs(),
                    i = os(r.as("s")),
                    s = os(r.as("m")),
                    o = os(r.as("h")),
                    u = os(r.as("d")),
                    a = os(r.as("M")),
                    f = os(r.as("y")),
                    l = i < us.s && ["s", i] || s === 1 && ["m"] || s < us.m && ["mm", s] || o === 1 && ["h"] || o < us.h && ["hh", o] || u === 1 && ["d"] || u < us.d && ["dd", u] || a === 1 && ["M"] || a < us.M && ["MM", a] || f === 1 && ["y"] || ["yy", f];
                return l[2] = t, l[3] = +e > 0, l[4] = n, as.apply(null, l)
            }

            function ls(e, t) {
                return us[e] === undefined ? !1 : t === undefined ? us[e] : (us[e] = t, !0)
            }

            function cs(e) {
                var t = this.localeData(),
                    n = fs(this, !e, t);
                return e && (n = t.pastFuture(+this, n)), t.postformat(n)
            }

            function ps() {
                var e = hs(this._milliseconds) / 1e3,
                    t = hs(this._days),
                    n = hs(this._months),
                    r, i, s;
                r = y(e / 60), i = y(r / 60), e %= 60, r %= 60, s = y(n / 12), n %= 12;
                var o = s,
                    u = n,
                    a = t,
                    f = i,
                    l = r,
                    c = e,
                    h = this.asSeconds();
                return h ? (h < 0 ? "-" : "") + "P" + (o ? o + "Y" : "") + (u ? u + "M" : "") + (a ? a + "D" : "") + (f || l || c ? "T" : "") + (f ? f + "H" : "") + (l ? l + "M" : "") + (c ? c + "S" : "") : "P0D"
            }
            var e, p = t.momentProperties = [],
                v = !1,
                S = {},
                x, O = {},
                I = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                q = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                R = {},
                U = {},
                J = /\d/,
                K = /\d\d/,
                Q = /\d{3}/,
                G = /\d{4}/,
                Y = /[+-]?\d{6}/,
                Z = /\d\d?/,
                et = /\d{1,3}/,
                tt = /\d{1,4}/,
                nt = /[+-]?\d{1,6}/,
                rt = /\d+/,
                it = /[+-]?\d+/,
                st = /Z|[+-]\d\d:?\d\d/gi,
                ot = /[+-]?\d+(\.\d{1,3})?/,
                ut = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                at = {},
                pt = {},
                gt = 0,
                yt = 1,
                bt = 2,
                wt = 3,
                Et = 4,
                St = 5,
                xt = 6;
            z("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            }), z("MMM", 0, 0, function(e) {
                return this.localeData().monthsShort(this, e)
            }), z("MMMM", 0, 0, function(e) {
                return this.localeData().months(this, e)
            }), M("month", "M"), lt("M", Z), lt("MM", Z, K), lt("MMM", ut), lt("MMMM", ut), dt(["M", "MM"], function(e, t) {
                t[yt] = b(e) - 1
            }), dt(["MMM", "MMMM"], function(e, t, n, r) {
                var i = n._locale.monthsParse(e, r, n._strict);
                i != null ? t[yt] = i : l(n).invalidMonth = e
            });
            var Nt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                kt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                Bt = {};
            t.suppressDeprecationWarnings = !1;
            var Ft = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                It = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                    ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                    ["YYYY-DDD", /\d{4}-\d{3}/]
                ],
                qt = [
                    ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                    ["HH:mm", /(T| )\d\d:\d\d/],
                    ["HH", /(T| )\d\d/]
                ],
                Rt = /^\/?Date\((\-?\d+)/i;
            t.createFromInputFallback = Ht("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            }), z(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }), z(0, ["YYYY", 4], 0, "year"), z(0, ["YYYYY", 5], 0, "year"), z(0, ["YYYYYY", 6, !0], 0, "year"), M("year", "y"), lt("Y", it), lt("YY", Z, K), lt("YYYY", tt, G), lt("YYYYY", nt, Y), lt("YYYYYY", nt, Y), dt(["YYYYY", "YYYYYY"], gt), dt("YYYY", function(e, n) {
                n[gt] = e.length === 2 ? t.parseTwoDigitYear(e) : b(e)
            }), dt("YY", function(e, n) {
                n[gt] = t.parseTwoDigitYear(e)
            }), t.parseTwoDigitYear = function(e) {
                return b(e) + (b(e) > 68 ? 1900 : 2e3)
            };
            var Jt = P("FullYear", !1);
            z("w", ["ww", 2], "wo", "week"), z("W", ["WW", 2], "Wo", "isoWeek"), M("week", "w"), M("isoWeek", "W"), lt("w", Z), lt("ww", Z, K), lt("W", Z), lt("WW", Z, K), vt(["w", "ww", "W", "WW"], function(e, t, n, r) {
                t[r.substr(0, 1)] = b(e)
            });
            var Yt = {
                dow: 0,
                doy: 6
            };
            z("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), M("dayOfYear", "DDD"), lt("DDD", et), lt("DDDD", Q), dt(["DDD", "DDDD"], function(e, t, n) {
                n._dayOfYear = b(e)
            }), t.ISO_8601 = function() {};
            var bn = Ht("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
                    var e = yn.apply(null, arguments);
                    return e < this ? this : e
                }),
                wn = Ht("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
                    var e = yn.apply(null, arguments);
                    return e > this ? this : e
                });
            Cn("Z", ":"), Cn("ZZ", ""), lt("Z", st), lt("ZZ", st), dt(["Z", "ZZ"], function(e, t, n) {
                n._useUTC = !0, n._tzm = Ln(e)
            });
            var kn = /([\+\-]|\d\d)/gi;
            t.updateOffset = function() {};
            var Un = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
                zn = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
            Wn.fn = Tn.prototype;
            var Qn = Jn(1, "add"),
                Gn = Jn(-1, "subtract");
            t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
            var dr = Ht("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                return e === undefined ? this.localeData() : this.locale(e)
            });
            z(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            }), z(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }), Cr("gggg", "weekYear"), Cr("ggggg", "weekYear"), Cr("GGGG", "isoWeekYear"), Cr("GGGGG", "isoWeekYear"), M("weekYear", "gg"), M("isoWeekYear", "GG"), lt("G", it), lt("g", it), lt("GG", Z, K), lt("gg", Z, K), lt("GGGG", tt, G), lt("gggg", tt, G), lt("GGGGG", nt, Y), lt("ggggg", nt, Y), vt(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, r) {
                t[r.substr(0, 2)] = b(e)
            }), vt(["gg", "GG"], function(e, n, r, i) {
                n[i] = t.parseTwoDigitYear(e)
            }), z("Q", 0, 0, "quarter"), M("quarter", "Q"), lt("Q", J), dt("Q", function(e, t) {
                t[yt] = (b(e) - 1) * 3
            }), z("D", ["DD", 2], "Do", "date"), M("date", "D"), lt("D", Z), lt("DD", Z, K), lt("Do", function(e, t) {
                return e ? t._ordinalParse : t._ordinalParseLenient
            }), dt(["D", "DD"], bt), dt("Do", function(e, t) {
                t[bt] = b(e.match(Z)[0], 10)
            });
            var Dr = P("Date", !0);
            z("d", 0, "do", "day"), z("dd", 0, 0, function(e) {
                return this.localeData().weekdaysMin(this, e)
            }), z("ddd", 0, 0, function(e) {
                return this.localeData().weekdaysShort(this, e)
            }), z("dddd", 0, 0, function(e) {
                return this.localeData().weekdays(this, e)
            }), z("e", 0, 0, "weekday"), z("E", 0, 0, "isoWeekday"), M("day", "d"), M("weekday", "e"), M("isoWeekday", "E"), lt("d", Z), lt("e", Z), lt("E", Z), lt("dd", ut), lt("ddd", ut), lt("dddd", ut), vt(["dd", "ddd", "dddd"], function(e, t, n) {
                var r = n._locale.weekdaysParse(e);
                r != null ? t.d = r : l(n).invalidWeekday = e
            }), vt(["d", "e", "E"], function(e, t, n, r) {
                t[r] = b(e)
            });
            var Hr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                jr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                Ir = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
            z("H", ["HH", 2], 0, "hour"), z("h", ["hh", 2], 0, function() {
                return this.hours() % 12 || 12
            }), Xr("a", !0), Xr("A", !1), M("hour", "h"), lt("a", Vr), lt("A", Vr), lt("H", Z), lt("h", Z), lt("HH", Z, K), lt("hh", Z, K), dt(["H", "HH"], wt), dt(["a", "A"], function(e, t, n) {
                n._isPm = n._locale.isPM(e), n._meridiem = e
            }), dt(["h", "hh"], function(e, t, n) {
                t[wt] = b(e), l(n).bigHour = !0
            });
            var Jr = /[ap]\.?m?\.?/i,
                Qr = P("Hours", !0);
            z("m", ["mm", 2], 0, "minute"), M("minute", "m"), lt("m", Z), lt("mm", Z, K), dt(["m", "mm"], Et);
            var Gr = P("Minutes", !1);
            z("s", ["ss", 2], 0, "second"), M("second", "s"), lt("s", Z), lt("ss", Z, K), dt(["s", "ss"], St);
            var Yr = P("Seconds", !1);
            z("S", 0, 0, function() {
                return ~~(this.millisecond() / 100)
            }), z(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            }), z(0, ["SSS", 3], 0, "millisecond"), z(0, ["SSSS", 4], 0, function() {
                return this.millisecond() * 10
            }), z(0, ["SSSSS", 5], 0, function() {
                return this.millisecond() * 100
            }), z(0, ["SSSSSS", 6], 0, function() {
                return this.millisecond() * 1e3
            }), z(0, ["SSSSSSS", 7], 0, function() {
                return this.millisecond() * 1e4
            }), z(0, ["SSSSSSSS", 8], 0, function() {
                return this.millisecond() * 1e5
            }), z(0, ["SSSSSSSSS", 9], 0, function() {
                return this.millisecond() * 1e6
            }), M("millisecond", "ms"), lt("S", et, J), lt("SS", et, K), lt("SSS", et, Q);
            var Zr;
            for (Zr = "SSSS"; Zr.length <= 9; Zr += "S") lt(Zr, rt);
            for (Zr = "S"; Zr.length <= 9; Zr += "S") dt(Zr, ei);
            var ti = P("Milliseconds", !1);
            z("z", 0, 0, "zoneAbbr"), z("zz", 0, 0, "zoneName");
            var ii = m.prototype;
            ii.add = Qn, ii.calendar = Yn, ii.clone = Zn, ii.diff = ir, ii.endOf = gr, ii.format = ar, ii.from = fr, ii.fromNow = lr, ii.to = cr, ii.toNow = hr, ii.get = j, ii.invalidAt = Nr, ii.isAfter = er, ii.isBefore = tr, ii.isBetween = nr, ii.isSame = rr, ii.isValid = xr, ii.lang = dr, ii.locale = pr, ii.localeData = vr, ii.max = wn, ii.min = bn, ii.parsingFlags = Tr, ii.set = j, ii.startOf = mr, ii.subtract = Gn, ii.toArray = Er, ii.toObject = Sr, ii.toDate = wr, ii.toISOString = ur, ii.toJSON = ur, ii.toString = or, ii.unix = br, ii.valueOf = yr, ii.year = Jt, ii.isLeapYear = Kt, ii.weekYear = Lr, ii.isoWeekYear = Ar, ii.quarter = ii.quarters = _r, ii.month = Mt, ii.daysInMonth = _t, ii.week = ii.weeks = tn, ii.isoWeek = ii.isoWeeks = nn, ii.weeksInYear = Mr, ii.isoWeeksInYear = Or, ii.date = Dr, ii.day = ii.days = Ur, ii.weekday = zr, ii.isoWeekday = Wr, ii.dayOfYear = sn, ii.hour = ii.hours = Qr, ii.minute = ii.minutes = Gr, ii.second = ii.seconds = Yr, ii.millisecond = ii.milliseconds = ti, ii.utcOffset = Mn, ii.utc = Dn, ii.local = Pn, ii.parseZone = Hn, ii.hasAlignedHourOffset = Bn, ii.isDST = jn, ii.isDSTShifted = Fn, ii.isLocal = In, ii.isUtcOffset = qn, ii.isUtc = Rn, ii.isUTC = Rn, ii.zoneAbbr = ni, ii.zoneName = ri, ii.dates = Ht("dates accessor is deprecated. Use date instead.", Dr), ii.months = Ht("months accessor is deprecated. Use month instead", Mt), ii.years = Ht("years accessor is deprecated. Use year instead", Jt), ii.zone = Ht("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", _n);
            var si = ii,
                ai = {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                li = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                hi = "Invalid date",
                di = "%d",
                vi = /\d{1,2}/,
                yi = {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                Si = E.prototype;
            Si._calendar = ai, Si.calendar = fi, Si._longDateFormat = li, Si.longDateFormat = ci, Si._invalidDate = hi, Si.invalidDate = pi, Si._ordinal = di, Si.ordinal = mi, Si._ordinalParse = vi, Si.preparse = gi, Si.postformat = gi, Si._relativeTime = yi, Si.relativeTime = bi, Si.pastFuture = wi, Si.set = Ei, Si.months = Ct, Si._months = Nt, Si.monthsShort = Lt, Si._monthsShort = kt, Si.monthsParse = At, Si.week = Gt, Si._week = Yt, Si.firstDayOfYear = en, Si.firstDayOfWeek = Zt, Si.weekdays = Br, Si._weekdays = Hr, Si.weekdaysMin = qr, Si._weekdaysMin = Ir, Si.weekdaysShort = Fr, Si._weekdaysShort = jr, Si.weekdaysParse = Rr, Si.isPM = $r, Si._meridiemParse = Jr, Si.meridiem = Kr, k("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = b(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                    return e + n
                }
            }), t.lang = Ht("moment.lang is deprecated. Use moment.locale instead.", k), t.langData = Ht("moment.langData is deprecated. Use moment.localeData instead.", A);
            var Oi = Math.abs,
                Ui = Ri("ms"),
                zi = Ri("s"),
                Wi = Ri("m"),
                Xi = Ri("h"),
                Vi = Ri("d"),
                $i = Ri("w"),
                Ji = Ri("M"),
                Ki = Ri("y"),
                Yi = Gi("milliseconds"),
                Zi = Gi("seconds"),
                es = Gi("minutes"),
                ts = Gi("hours"),
                ns = Gi("days"),
                rs = Gi("months"),
                is = Gi("years"),
                os = Math.round,
                us = {
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                },
                hs = Math.abs,
                ds = Tn.prototype;
            ds.abs = Mi, ds.add = Di, ds.subtract = Pi, ds.as = Ii, ds.asMilliseconds = Ui, ds.asSeconds = zi, ds.asMinutes = Wi, ds.asHours = Xi, ds.asDays = Vi, ds.asWeeks = $i, ds.asMonths = Ji, ds.asYears = Ki, ds.valueOf = qi, ds._bubble = Bi, ds.get = Qi, ds.milliseconds = Yi, ds.seconds = Zi, ds.minutes = es, ds.hours = ts, ds.days = ns, ds.weeks = ss, ds.months = rs, ds.years = is, ds.humanize = cs, ds.toISOString = ps, ds.toString = ps, ds.toJSON = ps, ds.locale = pr, ds.localeData = vr, ds.toIsoString = Ht("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ps), ds.lang = dr, z("X", 0, 0, "unix"), z("x", 0, 0, "valueOf"), lt("x", it), lt("X", ot), dt("X", function(e, t, n) {
                n._d = new Date(parseFloat(e, 10) * 1e3)
            }), dt("x", function(e, t, n) {
                n._d = new Date(b(e))
            }), t.version = "2.10.6", n(yn), t.fn = si, t.min = Sn, t.max = xn, t.utc = a, t.unix = oi, t.months = Ni, t.isDate = i, t.locale = k, t.invalid = h, t.duration = Wn, t.isMoment = g, t.weekdays = ki, t.parseZone = ui, t.localeData = A, t.isDuration = Nn, t.monthsShort = Ci, t.weekdaysMin = Ai, t.defineLocale = L, t.weekdaysShort = Li, t.normalizeUnits = _, t.relativeTimeThreshold = ls;
            var vs = t;
            return vs
        }), define("modules/video/dataProvider", ["lib/timeInterval", "modules/video/playlistBuilder", "vendor/bower/moment/moment"], function(e, t, n) {
            "use strict";
            var r, i = function(e) {
                    r = e
                },
                s = function(e) {
                    e(null, r.videos[r.state.playingCategory])
                },
                o = function(r, i) {
                    var s = i[r],
                        o = {
                            title: s.data.title,
                            date: n(s.data.updated).format("Do MMMM YYYY"),
                            uri: s.data.url,
                            imgUrl: s.data.img,
                            duration: s.data.duration ? e.toTimestamp(s.data.duration) : "0:00"
                        };
                    return o.playlist = t.build(s.data), o
                },
                u = function(e, t) {
                    var n = t[e];
                    return {
                        section: n.data.sourceurl,
                        adCampaignKeyword: null,
                        assetId: null,
                        assetType: e === 0 ? "AV" : "media_cplay",
                        editorAdFlag: n.data.allowadvertising,
                        shortHeadline: n.data.summary,
                        uri: n.data.url
                    }
                };
            return {
                init: i,
                findItems: s,
                parseItem: o,
                parseAdvertMeta: u
            }
        }), define("modules/video", ["lib/core", "lib/module/base", "modules/video/playlist", "modules/video/player", "modules/video/dataProvider", "vendor/pre-built/bbc-video-experience/continuousPlay/module", "vendor/bower/underscore/underscore", "vendor/bower/js-breakpoints/breakpoints"], function(e, t, n, r, i, s, o, u) {
            "use strict";
            return t.extend({
                selectors: {
                    tabLinks: ".video__tab__link",
                    playlistItems: ".video__item"
                },
                init: function() {
                    this.state = {}, this._registerEvents(), this.playlist = new n(this.$el, this), this.player = new r(this.$el, this), this.videos = this._gatherVideos();
                    var e = this.$get("tabLinks").eq(0).data("category");
                    this.selectCategory(e), this.selectVideo(0)
                },
                _registerEvents: function() {
                    e.pubsub.on("video:player:initialised", o.bind(this._onPlayerInitialised, this)), e.config.continuousPlayEnabled === !0 && (e.pubsub.on("video:continuousPlay:enabled", o.bind(this._onContinuousPlayEnabled, this)), e.pubsub.on("video:continuousPlay:videoPlayed", o.bind(this._onContinuousPlayVideoPlayed, this)), e.pubsub.on("video:continuousPlay:autoPlaySettingChange", o.bind(this._onAutoPlaySettingChange, this)))
                },
                getVideoByIndex: function(e, t) {
                    var n = t || this.state.playingCategory;
                    return !o.has(this.videos, n) || !o.has(this.videos[n], e) ? null : this.videos[n][e]
                },
                selectCategory: function(t) {
                    this.state.selectedCategory = t, e.pubsub.emit("video:categorySelected", t)
                },
                selectVideo: function(t) {
                    this.state.playingVideo = t, this.state.playingCategory = this.state.selectedCategory, e.pubsub.emit("video:videoSelected", t)
                },
                requestVideoPlay: function(t) {
                    e.pubsub.emit("video:playRequested", t)
                },
                _gatherVideos: function() {
                    var t = {};
                    return this.$get("playlistItems").each(function(n, r) {
                        var i = e.$(r),
                            s = i.data("category"),
                            o = i.data("video");
                        t[s] = t[s] || [], t[s].push({
                            index: t[s].length,
                            data: o,
                            slide: i
                        })
                    }), t
                },
                _initContinuousPlay: function(t) {
                    if (this.state.continuousPlayInitialised) return;
                    i.init(this), s.init(i, {
                        staticPrefix: e.config.staticPrefix,
                        adsEnabled: !0,
                        countdownDuration: 5,
                        startIndex: 0,
                        updateBrowserUrl: {
                            enabled: !1,
                            updateHistory: !1
                        },
                        advertAssetType: "media_cplay",
                        autoPlayFirstItem: !0,
                        handlers: {
                            enabled: o.bind(function(t) {
                                e.pubsub.emit("video:continuousPlay:enabled", t)
                            }, this),
                            videoPlayed: o.bind(function(t) {
                                e.pubsub.emit("video:continuousPlay:videoPlayed", t)
                            }, this),
                            dismissed: function() {
                                e.pubsub.emit("video:continuousPlay:dismissed")
                            }
                        }
                    }), s.initBump(t), this.state.continuousPlayInitialised = !0
                },
                _onPlayerInitialised: function(t) {
                    e.config.continuousPlayEnabled === !0 && this._initContinuousPlay(t), this.state.ready = !0
                },
                _onContinuousPlayEnabled: function(t) {
                    this.state.playingVideo = t, e.pubsub.emit("video:videoSelected", t)
                },
                _onContinuousPlayVideoPlayed: function(t) {
                    this.state.playingVideo = t, e.pubsub.emit("video:videoSelected", t)
                },
                _onAutoPlaySettingChange: function(e) {
                    this.state.autoPlay = e
                }
            })
        }), define("modules/weather", ["lib/module/base", "lib/util", "underscore"], function(e, t, n) {
            "use strict";
            return e.extend({
                init: function() {
                    this.clearElCache(), this._initDom(), this._bindEvents(), !this.initialised && t.cookie.get("ckps_hploc") && this.setLocation(t.cookie.get("ckps_hploc")), this.initialised = !0, this.expanded = !1
                },
                selectors: {
                    weather: ".weather",
                    edit: ".weather--edit",
                    form: ".weather--form",
                    input: ".weather--form--input",
                    error: ".weather--error",
                    results: ".weather--results"
                },
                data: {
                    module: "weather",
                    "wwhp-template": "responsive"
                },
                initialised: !1,
                expanded: !1,
                search: function(e) {
                    if (e.length < 3) return !1;
                    this._call({
                        action: "search",
                        location_term: e
                    }, this._onSearchSuccess)
                },
                setLocation: function(e) {
                    this._call({
                        action: "set",
                        location_id: e
                    }, this._onSetSuccess)
                },
                _call: function(e, t) {
                    return this._clearError(), this._setIsLoading(!0), this.$get("input").attr("disabled", "disabled"), this.$.ajax(this.$get("form").attr("action"), {
                        dataType: "json",
                        data: n.extend({}, this.data, e),
                        success: n.bind(t, this),
                        error: n.bind(this._onError, this),
                        complete: n.bind(this._onLoad, this)
                    })
                },
                _initDom: function() {
                    this.$get("edit").show(), this._clearError()
                },
                _bindEvents: function() {
                    this.$get("edit").off("click.weather").on("click.weather", n.bind(function(e) {
                        e.preventDefault(), this.$(e.target).text(this.$(e.target).text().toLowerCase() === "edit" ? "Close" : "Edit"), this.$get("form").toggle(), this.$get("results").empty(), this.$get("input").val(""), this._clearError(), this.expanded = !this.expanded, this._setIsLoading(!1), this.$get("input").removeAttr("disabled")
                    }, this)), this.$get("results").on("click.weather", "li a", n.bind(function(e) {
                        e.preventDefault(), this.setLocation(this.$(e.target).data("id"))
                    }, this)), this.$get("form").off("submit.weather").on("submit.weather", n.bind(function(e) {
                        e.preventDefault(), this.search(this.$get("input").val())
                    }, this))
                },
                _onSearchSuccess: function(e, t, r) {
                    if (!this._validateSearch(e)) {
                        this._onError(r, t, new Error("Location not found."));
                        return
                    }
                    var i = this.$(document.createDocumentFragment());
                    n.each(e, function(e, t) {
                        var n = this.$("<a>").attr({
                            href: "#"
                        }).data({
                            id: e.id
                        }).text(e.name);
                        i.append(this.$("<li>").addClass("weather--result").append(n))
                    }, this), this.$get("results").html(i)
                },
                _onSetSuccess: function(e, t, n) {
                    if (!this._validateForecast(e)) {
                        this._onError(n, t, new Error("Error setting location. Please try again in a moment."));
                        return
                    }
                    this.$get("weather").replaceWith(this.$(e.html).find(this.selectors.weather)), this.init()
                },
                _onLoad: function() {
                    this._setIsLoading(!1), this.$get("input").removeAttr("disabled")
                },
                _onError: function(e, t, n) {
                    this._showError(n.message), this.$get("results").empty()
                },
                _validateSearch: function(e) {
                    return e && e.length > 0
                },
                _validateForecast: function(e) {
                    return e.html && this.$(e.html).find(this.selectors.weather).length > 0
                },
                _setIsLoading: function(e) {
                    this.$get("weather")[e ? "addClass" : "removeClass"]("weather--loading")
                },
                _showError: function(e) {
                    this.$get("error").text(e).show()
                },
                _clearError: function() {
                    this.$get("error").empty().hide()
                }
            })
        }), define("definejs", ["app", "modules/header", "modules/images", "modules/media", "modules/video", "modules/video/dataProvider", "modules/video/player", "modules/video/playlist", "modules/video/playlistBuilder", "modules/weather"], function() {
            return ""
        })
})();