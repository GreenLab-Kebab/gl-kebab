(window.webpackJsonpBoomer = window.webpackJsonpBoomer || []).push([
    ["commons.printf"], {
        SKJnWpwCfs: function(r, e, t) {
            var i = t("LZnYl3/ysL"),
                a = function(r) {
                    this._mapped = !1, this._format = r, this._tokens = function(r, e, t, i) {
                        for (var a, o, n = [], s = 0; a = e.exec(r);) {
                            if ((o = r.slice(s, e.lastIndex - a[0].length)).length && n.push(o), t) {
                                var p = t.apply(i, a.slice(1).concat(n.length));
                                void 0 !== p && ("%" === p.specifier ? n.push("%") : n.push(p))
                            }
                            s = e.lastIndex
                        }
                        return (o = r.slice(s)).length && n.push(o), n
                    }(r, this._re, this._parseDelim, this)
                };
            a.prototype._re = /\%(?:\(([\w_.]+)\)|([1-9]\d*)\$)?([0 +\-\#]*)(\*|\d+)?(\.)?(\*|\d+)?[hlL]?([\%bscdeEfFgGioOuxX])/g, a.prototype._parseDelim = function(r, e, t, i, a, o, n) {
                return r && (this._mapped = !0), {
                    mapping: r,
                    intmapping: e,
                    flags: t,
                    _minWidth: i,
                    period: a,
                    _precision: o,
                    specifier: n
                }
            }, a.prototype._specifiers = {
                b: {
                    base: 2,
                    isInt: !0
                },
                o: {
                    base: 8,
                    isInt: !0
                },
                x: {
                    base: 16,
                    isInt: !0
                },
                X: {
                    extend: ["x"],
                    toUpper: !0
                },
                d: {
                    base: 10,
                    isInt: !0
                },
                i: {
                    extend: ["d"]
                },
                u: {
                    extend: ["d"],
                    isUnsigned: !0
                },
                c: {
                    setArg: function(r) {
                        if (!isNaN(r.arg)) {
                            var e = parseInt(r.arg);
                            if (e < 0 || e > 127) throw new Error("invalid character code passed to %c in printf");
                            r.arg = isNaN(e) ? "" + e : String.fromCharCode(e)
                        }
                    }
                },
                s: {
                    setMaxWidth: function(r) {
                        r.maxWidth = "." == r.period ? r.precision : -1
                    }
                },
                e: {
                    isDouble: !0,
                    doubleNotation: "e"
                },
                E: {
                    extend: ["e"],
                    toUpper: !0
                },
                f: {
                    isDouble: !0,
                    doubleNotation: "f"
                },
                F: {
                    extend: ["f"]
                },
                g: {
                    isDouble: !0,
                    doubleNotation: "g"
                },
                G: {
                    extend: ["g"],
                    toUpper: !0
                },
                O: {
                    isObject: !0
                }
            }, a.prototype.format = function(r) {
                if (this._mapped && "object" != typeof r) throw new Error("format requires a mapping");
                for (var e, t = "", i = 0, a = 0; a < this._tokens.length; a++)
                    if ("string" == typeof(e = this._tokens[a])) t += e;
                    else {
                        if (this._mapped) {
                            for (var o = e.mapping.split("."), n = r, s = 0, p = o.length; s < p && void 0 !== (n = n[o[s]]); s++);
                            if (void 0 === n) throw new Error("missing key " + e.mapping);
                            e.arg = n
                        } else {
                            if (e.intmapping && (i = parseInt(e.intmapping) - 1), i >= arguments.length) throw new Error("got " + arguments.length + " printf arguments, insufficient for '" + this._format + "'");
                            e.arg = arguments[i++]
                        }
                        if (!e.compiled) {
                            e.compiled = !0, e.sign = "", e.zeroPad = !1, e.rightJustify = !1, e.alternative = !1;
                            for (var g = {}, f = e.flags.length; f--;) {
                                var h = e.flags.charAt(f);
                                switch (g[h] = !0, h) {
                                    case " ":
                                        e.sign = " ";
                                        break;
                                    case "+":
                                        e.sign = "+";
                                        break;
                                    case "0":
                                        e.zeroPad = !g["-"];
                                        break;
                                    case "-":
                                        e.rightJustify = !0, e.zeroPad = !1;
                                        break;
                                    case "#":
                                        e.alternative = !0;
                                        break;
                                    default:
                                        throw Error("bad formatting flag '" + e.flags.charAt(f) + "'")
                                }
                            }
                            e.minWidth = e._minWidth ? parseInt(e._minWidth) : 0, e.maxWidth = -1, e.toUpper = !1, e.isUnsigned = !1, e.isInt = !1, e.isDouble = !1, e.isObject = !1, e.precision = 1, "." == e.period && (e._precision ? e.precision = parseInt(e._precision) : e.precision = 0);
                            var c = this._specifiers[e.specifier];
                            if (void 0 === c) throw new Error("unexpected specifier '" + e.specifier + "'");
                            if (c.extend) {
                                var d = this._specifiers[c.extend];
                                for (var l in d) c[l] = d[l];
                                delete c.extend
                            }
                            for (var u in c) e[u] = c[u]
                        }
                        if ("function" == typeof e.setArg && e.setArg(e), "function" == typeof e.setMaxWidth && e.setMaxWidth(e), "*" == e._minWidth) {
                            if (this._mapped) throw new Error("* width not supported in mapped formats");
                            if (e.minWidth = parseInt(arguments[i++]), isNaN(e.minWidth)) throw new Error("the argument for * width at position " + i + " is not a number in " + this._format);
                            e.minWidth < 0 && (e.rightJustify = !0, e.minWidth = -e.minWidth)
                        }
                        if ("*" == e._precision && "." == e.period) {
                            if (this._mapped) throw new Error("* precision not supported in mapped formats");
                            if (e.precision = parseInt(arguments[i++]), isNaN(e.precision)) throw Error("the argument for * precision at position " + i + " is not a number in " + this._format);
                            e.precision < 0 && (e.precision = 1, e.period = "")
                        }
                        e.isInt ? ("." == e.period && (e.zeroPad = !1), this.formatInt(e)) : e.isDouble ? ("." != e.period && (e.precision = 6), this.formatDouble(e)) : e.isObject && this.formatObject(e), this.fitField(e), t += "" + e.arg
                    }
                return t
            }, a.prototype._zeros10 = "0000000000", a.prototype._spaces10 = "          ", a.prototype.formatInt = function(r) {
                var e = parseInt(r.arg);
                if (!isFinite(e)) {
                    if ("number" != typeof r.arg) throw new Error("format argument '" + r.arg + "' not an integer; parseInt returned " + e);
                    e = 0
                }
                e < 0 && (r.isUnsigned || 10 != r.base) && (e = 4294967295 + e + 1), e < 0 ? (r.arg = (-e).toString(r.base), this.zeroPad(r), r.arg = "-" + r.arg) : (r.arg = e.toString(r.base), e || r.precision ? this.zeroPad(r) : r.arg = "", r.sign && (r.arg = r.sign + r.arg)), 16 == r.base && (r.alternative && (r.arg = "0x" + r.arg), r.arg = r.toUpper ? r.arg.toUpperCase() : r.arg.toLowerCase()), 8 == r.base && r.alternative && "0" != r.arg.charAt(0) && (r.arg = "0" + r.arg)
            }, a.prototype.formatDouble = function(r) {
                var e = parseFloat(r.arg);
                if (!isFinite(e)) {
                    if ("number" != typeof r.arg) throw new Error("format argument '" + r.arg + "' not a float; parseFloat returned " + e);
                    e = 0
                }
                switch (r.doubleNotation) {
                    case "e":
                        r.arg = e.toExponential(r.precision);
                        break;
                    case "f":
                        r.arg = e.toFixed(r.precision);
                        break;
                    case "g":
                        Math.abs(e) < 1e-4 ? r.arg = e.toExponential(r.precision > 0 ? r.precision - 1 : r.precision) : r.arg = e.toPrecision(r.precision), r.alternative || (r.arg = r.arg.replace(/(\..*[^0])0*e/, "$1e"), r.arg = r.arg.replace(/\.0*e/, "e").replace(/\.0$/, ""));
                        break;
                    default:
                        throw new Error("unexpected double notation '" + r.doubleNotation + "'")
                }
                r.arg = r.arg.replace(/e\+(\d)$/, "e+0$1").replace(/e\-(\d)$/, "e-0$1"), r.alternative && (r.arg = r.arg.replace(/^(\d+)$/, "$1."), r.arg = r.arg.replace(/^(\d+)e/, "$1.e")), e >= 0 && r.sign && (r.arg = r.sign + r.arg), r.arg = r.toUpper ? r.arg.toUpperCase() : r.arg.toLowerCase()
            }, a.prototype.formatObject = function(r) {
                var e = "." === r.period ? r.precision : null;
                r.arg = i.inspect(r.arg, {
                    showHidden: !r.alternative,
                    depth: e,
                    colors: r.sign,
                    compact: !0
                })
            }, a.prototype.zeroPad = function(r, e) {
                e = 2 == arguments.length ? e : r.precision;
                var t = !1;
                "string" != typeof r.arg && (r.arg = "" + r.arg), "-" === r.arg.substr(0, 1) && (t = !0, r.arg = r.arg.substr(1));
                for (var i = e - 10; r.arg.length < i;) r.arg = r.rightJustify ? r.arg + this._zeros10 : this._zeros10 + r.arg;
                var a = e - r.arg.length;
                r.arg = r.rightJustify ? r.arg + this._zeros10.substring(0, a) : this._zeros10.substring(0, a) + r.arg, t && (r.arg = "-" + r.arg)
            }, a.prototype.fitField = function(r) {
                if (r.maxWidth >= 0 && r.arg.length > r.maxWidth) return r.arg.substring(0, r.maxWidth);
                r.zeroPad ? this.zeroPad(r, r.minWidth) : this.spacePad(r)
            }, a.prototype.spacePad = function(r, e) {
                e = 2 == arguments.length ? e : r.minWidth, "string" != typeof r.arg && (r.arg = "" + r.arg);
                for (var t = e - 10; r.arg.length < t;) r.arg = r.rightJustify ? r.arg + this._spaces10 : this._spaces10 + r.arg;
                var i = e - r.arg.length;
                r.arg = r.rightJustify ? r.arg + this._spaces10.substring(0, i) : this._spaces10.substring(0, i) + r.arg
            }, r.exports = function() {
                var r, e, i = Array.prototype.slice.call(arguments);
                i[0] instanceof t("TUUg7HzFuw").Stream && (r = i.shift()), e = i.shift();
                var o = new a(e),
                    n = o.format.apply(o, i);
                if (!r) return n;
                r.write(n)
            }, r.exports.Formatter = a
        }
    }
]);