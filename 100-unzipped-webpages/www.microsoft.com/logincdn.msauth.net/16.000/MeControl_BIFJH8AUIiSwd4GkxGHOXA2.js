function _iY(a) {
    return a ? true : a == 0 || a == false || a == ""
}

function _Du(a, b) {
    return _iY(a) ? a : b
}

function _Bd(a) {
    return a instanceof Array
}

function _BD(a) {
    return "function"._g2(typeof a, true)
}

function _E(a) {
    return typeof a == "string"
}

function _BE(a) {
    return _iY(a) && _E(a) && a != ""
}

function strOrDefault(a, b) {
    return _BE(a) ? a : b
}

function _A1(a) {
    if (!_E(a)) return "";
    if (a.lastIndexOf(".") < 0) return "";
    return a.toLowerCase().substr(a.lastIndexOf(".") + 1, a.length)
}

function _A0(a) {
    return document.getElementById(a)
}
var $J = {
    _dW: false,
    _b: function(c, a) {
        var d = null;
        if ("img"._g2(c) && _iY(a)) {
            var g = _A1(a.src);
            if ("png"._g2(g, true) && !$F._mK()) c = "span"
        }
        var b = d;
        if ("input"._g2(c, true) && _iY(a) && (a.name || a.type)) {
            if (!$aE._h._g2(a.type)) {
                var f = document.createElement("div");
                f.innerHTML = '<input type="' + (a.type ? a.type : "") + '" name="' + (a.name ? a.name : "") + '" />';
                b = f.firstChild
            } else try {
                var e = "<" + c;
                if (a.type) e += ' type="' + a.type + '"';
                if (a.name) e += ' name="' + a.name + '"';
                e += ">";
                b = document.createElement(e)
            } catch (h) {
                b = d
            }
            if (_iY(b)) {
                a.type = d;
                a.name = d
            }
        }
        if (!_iY(b)) b = document.createElement(c);
        return $J.update(b, a)
    },
    update: function(c, b) {
        if (_iY(b))
            for (var k = $J._mD(c, "img"), j = new OBJ._Bf(b, {}), g = 0; g < j.length; g++) {
                var a = j[g];
                if (k && $J._dW && "src"._g2(a)) $D._cc(new OBJ._W(b[a], c));
                else if ("css"._g2(a, true))
                    for (var h = new OBJ._Bf(b[a], {}), d = 0; d < h.length; d++) {
                        var e = h[d];
                        if (_iY(b[a][e])) c.style[e] = b[a][e]
                    } else if ("attr"._g2(a, true))
                        for (var i = new OBJ._Bf(b[a], {}), d = 0; d < i.length; d++) {
                            var f = i[d];
                            _iY(b[a][f]) && c.setAttribute(f, "" + b[a][f])
                        } else if (_iY(b[a])) c[a] = b[a]
            }
        return c
    },
    _fD: function(e, d, b) {
        for (var c = $J._b(e, d), a = 0; a < b.length; a++) c.appendChild(b[a]);
        return c
    },
    _eZ: function(f, d) {
        var c = CE(f, d),
            b = {};
        for (var a in b) {
            var e = b[a];
            if (_BD(e)) c[a] = b[a]
        }
        return c
    },
    text: function(a) {
        return document.createTextNode(a)
    },
    _mD: function(a, b) {
        return _iY(a) && a.nodeType == $ag._gZ && (!_E(b) || a.tagName._g2(b, true))
    },
    visible: function(a, b) {
        if ($J._mD(a)) {
            a.style.visibility = b[1];
            a.style.display = b[0]
        }
        return a
    },
    _d: function(b) {
        var a = CE("span");
        a.innerHTML = b;
        return a.childNodes.length === 0 ? "" : a.childNodes[0].nodeValue
    },
    WS: function(a, b, e) {
        if (a && b > 0)
            for (var d = 0; d < b; d++)
                if (e) {
                    var c = CE("label");
                    c.appendChild($J.text("\u00a0"));
                    a.appendChild(c)
                } else a.appendChild($J.text("\u00a0"));
        return a
    }
};

function CE(b, a) {
    return $J._b(b, a)
}

function _A0(a) {
    return document.getElementById(a)
}
$J._d3 = function(f, i, h, g) {
    function d() {}
    d.prototype = f.prototype;
    for (var e = new d, a = $J._eZ(i, h), c = OBJ._Bf(e, {}), b = 0; b < c.length; b++)
        if (!_iY(a[c[b]])) a[c[b]] = e[c[b]];
    a._oE.apply(a, g);
    return a
};
$J._d3.prototype = {
    _oE: function() {}
};
var $aL = {
        _r2: ["block", "visible"],
        _lO: ["", "hidden"],
        _p4: ["none", ""],
        Default: ["", ""]
    },
    $aE = {
        _eJ: "button",
        _el: "checkbox",
        _h: "password",
        _pY: "radio",
        _rD: "submit",
        _rJ: "text",
        $q: "tel",
        _aB: "email",
        ButtonElement: "buttonelement",
        Number: "number",
        Tel: "tel"
    },
    $ag = {
        _gZ: 1,
        _rj: 3
    };
Function.prototype._fL = function(f) {
    var a = this,
        d = a.prototype;

    function e() {}
    e.prototype = f.prototype;
    a.prototype = new e;
    a.prototype.constructor = a;
    for (var c = new OBJ._Bf(d, {}), b = 0; b < c.length; b++) a.prototype[c[b]] = d[c[b]]
};
Function.prototype.implements = Function.prototype._fL;
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
};
String.prototype._g2 = function(a, b) {
    if (!_E(a)) return false;
    if (b) return this.toLowerCase() == a.toLowerCase();
    else return this == a
};
String.prototype.find = function(a, c, b) {
    if (!_E(a)) return -1;
    if (c) return this.toLowerCase().indexOf(a.toLowerCase(), b);
    else return this.indexOf(a, b)
};
String.prototype._q7 = function(a, b) {
    if (!_E(a)) return false;
    var d = b ? this.toUpperCase() : this,
        c = b ? a.toUpperCase() : a;
    return d.indexOf(c) == 0
};
String.prototype.format = function() {
    for (var b = this, a = 0; a < arguments.length; a++) b = b.replace(new RegExp("\\{" + a + "\\}", "g"), arguments[a]);
    return b
};
String.prototype._y = function(g, e, i) {
    var d = [];
    if (_E(g)) {
        var a = this.split(g);
        if (e) {
            for (var b = 0; b < a.length; b++)
                if (a[b].length > 0) {
                    var c = a[b].find(e);
                    if (c == -1) d[a[b]] = null;
                    else {
                        var h = c == 0 ? "" : a[b].substring(0, c),
                            f = c < a[b].length - 1 ? a[b].substring(c + 1) : null;
                        if (!_iY(f) || !i) d[h] = f;
                        else d[h] = f.split(e)
                    }
                }
        } else d = a
    }
    return d
};
String.prototype._m = function() {
    var a = this.trim();
    if (a.charAt(0) > "~" || a.indexOf(" ", 0) != -1) return false;
    var c = a.indexOf("@");
    if (c == -1 || a.indexOf(".", c) == -1) return false;
    var b = a.split("@");
    if (b.length > 2 || b[0].length < 1 || b[1].length < 2) return false;
    return true
};
String.prototype._s = function() {
    var a = this.replace(/\D+/g, "");
    return a.length >= 4 && a.length <= 50
};
String.prototype.isSkypeName = function() {
    var b = this.trim(),
        a = new RegExp(/^[a-zA-Z][a-zA-Z0-9\.,\-_:']{0,128}$/);
    return b.match(a)
};
String.prototype._aF = function(d, c) {
    if (!this._m()) return this;
    var b = c ? "@" : "",
        a = this.trim().split("@")[1];
    if (d) return b + a.slice(0, a.lastIndexOf(".") + 1);
    return b + a
};
String.prototype.extractDomainFromUrl = function() {
    var a = document.createElement("a");
    a.href = this;
    return a.hostname
};
var OBJ = {
        _CI: function(b, a) {
            this.key = b;
            this.value = a
        },
        _Bf: function(b, c) {
            var a = [];
            if (_iY(b) && (_iY(c) || _iY(b.constructor))) {
                a._next = 0;
                a._target = b;
                var e = _iY(c) ? c : new b.constructor;
                for (var d in b) !_iY(e[d]) && a.push(d)
            }
            a.next = function() {
                var a = this,
                    b = a[a._next];
                a._next++;
                return new OBJ._CI(b, a._target[b])
            };
            a.hasNext = function() {
                return _iY(this._next) && this._next < this.length
            };
            return a
        },
        _nX: function(f, d, e) {
            var a = "",
                c = OBJ._Bf(f, []);
            while (c.hasNext()) {
                var b = c.next();
                if (a.length != 0) a += d;
                a += _Du(b.key, "") + e + _Du(b.value, "")
            }
            return a
        },
        _nY: function(d) {
            for (var f = arguments, c, e = 1; _iY(d) && _iY(c = f[e]); e++)
                for (var b = new OBJ._Bf(c, {}), a = 0; a < b.length; a++)
                    if (_iY(c[b[a]])) d[b[a]] = c[b[a]];
            return d
        }
    },
    $K = {
        toString: function(d, c) {
            var a = new OBJ._Bf(d, {});
            while (a.hasNext()) {
                var b = a.next();
                if (b.value == c) return b.key
            }
            return ""
        }
    };
OBJ.$k = {
    _og: "asyncfail",
    _oF: "asynccomplete"
};
OBJ._X = function(c, b) {
    var a = this;
    a.url = c;
    a.m_oProps = _iY(b) ? b : {};
    $L._dn(OBJ.$k._og, a);
    $L._dn(OBJ.$k._oF, a);
    a.m_fComplete = false;
    a.m_fSuccess = null;
    a.m_fRunning = false
};
OBJ._X.prototype = {
    _f3: function() {},
    _li: function() {},
    _a2: function() {},
    _oK: function(b, c) {
        var a = this;
        if (!a.m_fComplete) {
            $T._lu();
            a.m_fRunning = false;
            a.m_fComplete = true;
            a.m_fSuccess = c
        }
        if (a.m_fSuccess == false) {
            a._a2();
            $L._jM(a, OBJ.$k._og, b)
        } else {
            a._li();
            $L._jM(a, OBJ.$k._oF, b)
        }
        a._eN()
    },
    send: function() {
        var a = this;
        if (!a.m_fRunning)
            if (a.m_fComplete) a._oK();
            else {
                $T._lU();
                a.m_fRunning = true;
                a._f3()
            }
    },
    _dy: function(b) {
        var a = this;
        $L.add(b, $L.$m._of, a._ha, a);
        $L.add(b, $L.$m._cH, a._ha, a);
        $L.add(b, $L.$m._oU, a._hA, a)
    },
    _nY: function(a) {
        this._nz(a)
    },
    _eN: function() {
        $L._kO(OBJ.$k._og, this)._eo();
        $L._kO(OBJ.$k._oF, this)._eo()
    },
    _nz: function(a) {
        $L._kO(OBJ.$k._og, this)._nZ($L._kO(OBJ.$k._og, a));
        $L._kO(OBJ.$k._oF, this)._nZ($L._kO(OBJ.$k._oF, a))
    },
    _ha: function(a) {
        this._oK(a, false)
    },
    _hA: function(a) {
        this._oK(a, null)
    }
};
OBJ._W = function(c, a, b) {
    this.m_arrEl = _iY(a) ? [a] : [];
    OBJ._X.apply(this, [c, b])
};
OBJ._W.prototype = {
    _f3: function() {
        var a = this;
        for (var d = new Image, c = new OBJ._Bf(a.m_oProps, {}), b = 0; b < c.length; b++) d[c[b]] = a.m_oProps[c[b]];
        a._dy(d);
        d.src = a.url
    },
    _li: function() {
        var a = this;
        if (a.m_fSuccess == true)
            for (var b = 0; b < a.m_arrEl.length; b++) a._qu(a.m_arrEl[b])
    },
    _qu: function(a) {
        var b = this,
            e = _A1(b.url),
            d = "png"._g2(e, true) && !$F._mK();
        if ($J._mD(a, "img") || d && $J._mD(a, "span"))
            if (d && $J._mD(a, "span")) {
                $J.WS(a, 1);
                var c = "image";
                if (a.width && a.height) {
                    a.style.width = a.width + "px";
                    a.style.height = a.height + "px";
                    c = "scale"
                }
                a.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + b.url + "', sizingMethod='" + c + "')"
            } else {
                a.src = b.url;
                a.style.visibility = ""
            }
        else a.style.backgroundImage = "url(" + b.url + ")"
    },
    _nY: function(a) {
        this._nz(a);
        for (var b = 0; b < a.m_arrEl.length; b++) this.m_arrEl.push(a.m_arrEl[b])
    },
    _hA: function(a) {
        this._oK(a, true)
    }
};
OBJ._W._fL(OBJ._X);
OBJ._Y = function(b, a) {
    OBJ._X.apply(this, [b, a])
};
OBJ._Y.prototype = {
    _f3: function() {
        var a = this,
            b = CE("script", a.m_oProps);
        a._dy(b);
        $L.add(b, $L.$m._o3, a._il, a);
        b.src = a.url;
        $J._kk("head").appendChild(b)
    },
    _il: function(b) {
        var a = $L._lD(b);
        !this.m_fComplete && (a.readyState == "loaded" || a.readyState == "complete") && this._oK(b, null)
    }
};
OBJ._Y._fL(OBJ._X);
OBJ._V = function(d, a, c, b) {
    this.m_fHidden = c ? true : false;
    this.m_elHolder = b;
    OBJ._X.apply(this, [d, a])
};
OBJ._V.prototype = {
    _f3: function() {
        var a = this,
            b = CE("iframe", a.m_oProps);
        a.m_fHidden && $J.visible(b, $aL._p4);
        a._dy(b);
        b.src = a.url;
        if ($J._mD(a.m_elHolder)) a.m_elHolder.appendChild(b);
        else document.body.appendChild(b)
    }
};
OBJ._V._fL(OBJ._X);
var $D = {};
$D._cc = function(a) {
    if (!_iY($D.requests)) $D.requests = [];
    if (_iY($D.requests[a.url])) $D.requests[a.url]._nY(a);
    else $D.requests[a.url] = a;
    $D.requests[a.url].send()
};
var $L = {
    _n8: "on",
    Model: {
        Standards: 0,
        IE: 1
    },
    $m: {
        _of: "abort",
        _oh: "blur",
        _oI: "change",
        _oJ: "click",
        _cH: "error",
        _om: "focus",
        _or: "keypress",
        _oU: "load",
        _oX: "mouseout",
        _oy: "mouseover",
        _pA: "submit",
        _oQ: "keydown",
        _o3: "readystatechange",
        _os: "keyup",
        _oq: "input",
        _oW: "mousedown",
        OnScroll: "scroll",
        _ol: "contextmenu",
        _oz: "paste",
        _o1: "propertychange",
        _ox: "mousemove",
        OnMessage: "message"
    },
    ModelOverrides: [],
    "get": function(a) {
        if (_iY(a) && a._customEvent) return a.event;
        return a || window.event
    },
    _lD: function(a) {
        var b = a || $L.get(a);
        return b.srcElement || b.target
    },
    add: function(a, d, f, e) {
        var b = f;
        if (_iY(e)) b = $L._jV(f, e);
        var c = $L._n8 + d;
        if (_iY(a[c]) && a[c]._customEvent == true) a[c].attach(b);
        else if (a.addEventListener && $L.ModelOverrides[d] != $L.Model.IE) a.addEventListener(d, b, false);
        else a.attachEvent && $L.ModelOverrides[d] != $L.Model.Standards && a.attachEvent(c, b);
        return b
    },
    _jN: function(a, b) {
        if (_iY(a[b])) return a[b]();
        if (_iY(document.createEvent)) {
            var c = document.createEvent("HTMLEvents");
            c.initEvent(b, true, true);
            return a.dispatchEvent(c)
        }
        return false
    },
    _jV: function(b, a) {
        return function(c) {
            return b.call(a, c)
        }
    },
    _qB: function(b, a, c) {
        setTimeout(function() {
            b.apply(a, c)
        }, 0)
    },
    _fP: function(a) {
        a = $L.get(a);
        _BD(a.stopPropagation) && a.stopPropagation();
        a.cancelBubble = true
    },
    end: function(a) {
        a = $L.get(a);
        _BD(a.preventDefault) && a.preventDefault();
        a.returnValue = false;
        return false
    }
};
$L.ModelOverrides[$L.$m._o1] = $L.Model.IE;
$L = OBJ._nY($L, {
    $l: {
        _aX: 13,
        _aE: 27,
        _q2: 32,
        _bB: 38,
        _bb: 40,
        _dw: 63232,
        _dV: 63233
    },
    _jM: function(a, b, d) {
        if (_iY(a) && _E(b)) {
            var c = $L._n8 + b;
            if (_iY(a[c]) && a[c]._customEvent == true) return a[c]._jM(a, d);
            else if (document.createEvent && $L.ModelOverrides[b] != $L.Model.IE) return a.dispatchEvent($L._b(d, b));
            else if (document.createEventObject && $L.ModelOverrides[b] != $L.Model.Standards) return a.fireEvent($L._n8 + b, $L._b(d, b))
        }
        return false
    },
    _jn: function(a) {
        if ($J._mD(a)) return $L._jN(a, $L.$m._oJ) || true;
        return false
    },
    _jo: function(a) {
        if ($J._mf(a) || _iY(a.focus)) return $L._jN(a, $L.$m._om) || true;
        return false
    },
    _b: function(c, a) {
        if (_iY(document.createEvent) && $L.ModelOverrides[a] != $L.Model.IE) {
            var b = document.createEvent("HTMLEvents");
            b.initEvent(a, true, true);
            return b
        } else if (_iY(document.createEventObject) && $L.ModelOverrides[a] != $L.Model.Standards) return document.createEventObject($L.get(c));
        return null
    },
    remove: function(a, c, d) {
        var b = $L._n8 + c;
        if (_iY(a[b]) && a[b]._customEvent == true) a[b].remove(d);
        else if (a.removeEventListener && $L.ModelOverrides[c] != $L.Model.IE) a.removeEventListener(c, d, false);
        else a.detachEvent && $L.ModelOverrides[c] != $L.Model.Standards && a.detachEvent(b, d)
    },
    _dX: function(b, a) {
        $J._mD(b) && _E(a) && $L.add(b, a, function(a) {
            $L.end($L.get(a))
        })
    },
    _dx: function(b, a) {
        $J._mD(b) && _E(a) && $L.add(b, a, function(a) {
            $L._fP($L.get(a))
        })
    },
    _dn: function(b, a) {
        if (_iY(a) && _E(b)) {
            var c = new $L._AQ(b);
            a[c.type] = c
        }
    },
    _kO: function(c, a) {
        var d = null;
        if (_iY(a) && _E(c)) {
            var b = $L._n8 + c;
            if (_iY(a[b]) && a[b]._customEvent == true) d = a[b]
        }
        return d
    },
    _kv: function(b) {
        var a = 0;
        try {
            if (document.layers) a = b.which;
            else a = b.keyCode
        } catch (c) {}
        return a
    },
    _mL: function(a) {
        var b = false;
        a = $L.get(a);
        if (_iY(a.which)) b = a.which == 3;
        else if (_iY(a.button)) b = a.button == 2;
        return b
    },
    _mM: function(a) {
        return a.shiftKey
    },
    _mJ: function(a) {
        if ($L._mI(a)) return false;
        if (_iY(a.char) && a.char != "" && a.char >= "0" && a.char <= "9") return true;
        var b = $L._kv(a);
        if (!$L._mM(a) && b > 47 && b < 58 || b > 95 && b < 106) return true;
        return false
    },
    _mI: function(a) {
        return a.altKey || a.ctrlKey || a.metaKey
    },
    _mc: function(b) {
        if ($L._mI(b)) return false;
        var a = $L._kv(b);
        if (a > 47 && a < 91 || a > 95 && a < 112 || a > 185) return true;
        return false
    }
});
$L._AQ = function(d) {
    var b = false,
        c = true,
        a = this;
    a.type = $L._n8 + d;
    a._customEvent = c;
    a.returnValue = c;
    a.cancelBubble = b;
    a.event = null;
    a.handlers = [];
    a.attach = function(a) {
        if (!_iY(this.handlers)) this.handlers = [];
        this.handlers.push(a)
    };
    a._jM = function(f, g) {
        var a = this;
        a.event = g;
        a.srcElement = f;
        a.target = f;
        a.returnValue = c;
        a.cancelBubble = b;
        for (var d = 0; d < a.handlers.length; d++) {
            if (!a.returnValue || a.cancelBubble) return b;
            var e = a.handlers[d](a);
            if (_iY(e)) a.returnValue = e
        }
        return a.returnValue
    };
    a.stopPropagation = function() {
        this.cancelBubble = c
    };
    a.preventDefault = function() {
        this.returnValue = b
    };
    a.remove = function(b) {
        var a = this._jH(b);
        a > 0 && this.handlers.splice(a, 1)
    };
    a._eo = function() {
        this.handlers = []
    };
    a._nZ = function(b) {
        for (var a = 0; a < b.handlers.length; a++) this._jH(b.handlers[a]) == -1 && this.handlers.push(b.handlers[a])
    };
    a._jH = function(c) {
        for (var b = -1, a = 0; a < this.handlers.length; a++)
            if (this.handlers[a] === c) {
                b = a;
                break
            }
        return b
    }
};
$L._AS = function(b, a) {
    if (!_iY($L._clickHandlerInstance)) {
        $L._clickHandlerInstance = new $L._AP;
        $L._clickHandlerInstance._d0()
    }
    $L._clickHandlerInstance._dN(b, a);
    return $L._clickHandlerInstance
};
$L._AP = function() {};
$L._AP.prototype = {
    _d0: function() {
        $L.add(document, $L.$m._oJ, this._hF, this)
    },
    _dN: function(b, a) {
        if (_BE(b) && _BD(a)) {
            if (!_iY(this.m_arrCallbacks)) this.m_arrCallbacks = [];
            this.m_arrCallbacks[b] = a
        }
    },
    _hF: function(a) {
        this._lH($L.get(a))
    },
    _lH: function(d) {
        var b = $L._lD(d);
        if (_iY(this.m_arrCallbacks) && $J._mD(b)) {
            var e = new OBJ._Bf(this.m_arrCallbacks, []);
            while (e.hasNext()) {
                var c = e.next(),
                    a = _A0(c.key);
                $J._mD(a) && a != b && !$J._bq(a, b) && _BD(c.value) && c.value.call(a, d)
            }
        }
    }
};
var $T = {
    eDP: {
        ClientUserSaved: "i1",
        ClientMode: "i2",
        ClientLoginTime: "i3",
        ClientExplore: "i4",
        ClientOTPTime: "i5",
        ClientOTPOption: "i6",
        ClientOTPRequest: "i7",
        LoginUsedSSL: "i12",
        ClientUsedKMSI: "i13",
        RenderCompleteTime: "i14",
        ResourcesCompleteTime: "i15",
        ClientPerf: "i16",
        SRSFailed: "i17",
        SRSSuccess: "i18",
        TimeOnPage: "i19",
        MobileScreenWidth: "m1",
        MobileScreenHeight: "m2",
        MobileBadUsername: "m3"
    },
    _kp: function(b) {
        var a = "get_" + $K.toString($T.eDP, b);
        if (_BD($T[a])) return $T[a]();
        return null
    },
    get_ClientMode: function() {
        if (_iY(g_objPageMode)) return g_objPageMode._kw();
        return null
    },
    _nO: 0,
    _nm: null,
    _lu: function() {
        $T._nO--;
        if ($T._nO == 0) $T._nm = new Date
    },
    _lU: function() {
        $T._nO++
    },
    get_ResourcesCompleteTime: function() {
        if ($T._nm != null && $T._nO <= 0) return $T._nm - g_dtFirstByte;
        return null
    },
    _nL: null,
    _lx: function() {
        $T._nL = new Date
    },
    get_RenderCompleteTime: function() {
        if (_iY($T._nL)) return $T._nL - g_dtFirstByte;
        return null
    },
    get_ClientLoginTime: function() {
        if (_iY($T._nL)) return new Date - $T._nL;
        return null
    },
    get_ClientPerf: function() {
        if (window.performance && typeof JSON != "undefined" && JSON.stringify) return JSON.stringify(window.performance.timing);
        return null
    },
    get_TimeOnPage: function() {
        if (window.performance) return (new Date).getTime() - window.performance.timing.loadEventEnd;
        return null
    },
    _nl: null,
    _nV: null,
    _nR: 0,
    _lw: function(a) {
        $T._nl = new Date;
        $T._nV = a
    },
    _lW: function() {
        $T._nR = 1
    },
    get_ClientOTPTime: function() {
        if (_iY($T._nl)) return new Date - $T._nl;
        return null
    },
    get_ClientOTPOption: function() {
        return $T._nV
    },
    get_ClientOTPRequest: function() {
        return $T._nR
    },
    get_SRSFailed: function() {
        return g_iSRSFailed
    },
    get_SRSSuccess: function() {
        return g_sSRSSuccess
    }
};

function evt_MeControl_onload() {
    window.setTimeout(function() {
        var b = MeControl._ex();
        MeControl._po(b);
        if (ServerData.C9) {
            $L.add(window, $L.$m.OnMessage, MeControl._g5, this);
            var a = new OBJ._V(ServerData.C9, {
                id: "mecontrol_iframe_aad_1",
                height: 0,
                width: 0
            }, true);
            $D._cc(a)
        }
    }, 0)
}
var MeControl = {
        _po: function(b) {
            if (window == window.parent) return;
            if (!ServerData.cL) {
                var a = MeControl._eW("Internal Error: ServerData.urlRU was not specified.", false);
                window.parent.postMessage(a, "*", null);
                return
            }
            window.parent.postMessage(b, ServerData.cL)
        },
        _ex: function() {
            var a = {
                    userList: [],
                    postLogoutRedirectUriValid: false
                },
                b = MeControl.getPerformance();
            if (ServerData.sErrTxt) return MeControl._eW(ServerData.sErrTxt, ServerData.bT, b);
            else if (ServerData.b) {
                var c = {
                    idp: "msa",
                    firstName: ServerData.BI,
                    lastName: ServerData.BK,
                    memberName: ServerData.b,
                    cid: ServerData.BF,
                    authenticatedState: ServerData.Cd,
                    remoteIdpFlags: ServerData.Ch
                };
                a.postLogoutRedirectUriValid = ServerData.bT;
                a.userList[0] = c;
                if (b) a.performance = b
            }
            return JSON.stringify(a)
        },
        _eW: function(d, c, a) {
            var b = {
                error: d,
                userList: [],
                postLogoutRedirectUriValid: c
            };
            if (a) b.performance = a;
            return JSON.stringify(b)
        },
        _g5: function(a) {
            if (MeControl._kQ(a.origin) !== MeControl._kQ(ServerData.C9)) return;
            MeControl._po(a.data)
        },
        _kQ: function(c) {
            var a = document.createElement("a");
            a.href = c;
            var b = a.protocol + "//" + a.hostname;
            if (a.port) b += ":" + a.port;
            return b
        },
        getPerformanceObjectData: function(a) {
            var b = {};
            if (!a) return b;
            if (a.toJSON) return a.toJSON();
            for (var c in a) b[c] = a[c];
            return b
        },
        getPerformance: function() {
            if (!window.performance) return null;
            var e = MeControl.getPerformanceObjectData(window.performance.timing),
                c = [];
            if (window.performance.getEntries) {
                var b = window.performance.getEntries();
                if (b)
                    for (var a = 0; a < b.length; a++) c[a] = MeControl.getPerformanceObjectData(b[a])
            }
            var d = {
                idp: "msa",
                timing: e,
                entries: c
            };
            return d
        }
    },
    __MeControl = true