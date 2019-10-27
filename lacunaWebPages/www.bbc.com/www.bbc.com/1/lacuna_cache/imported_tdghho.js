// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}
var requirejs, require, define;
! function(global, setTimeout) {
  var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.3.2",
    commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,
    cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
    jsSuffixRegExp = /\.js$/,
    currDirRegExp = /^\.\//,
    op = Object.prototype,
    ostring = op.toString,
    hasOwn = op.hasOwnProperty,
    isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document),
    isWebWorker = !isBrowser && "undefined" != typeof importScripts,
    readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
    defContextName = "_",
    isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
    contexts = {},
    cfg = {},
    globalDefQueue = [],
    useInteractive = !1;

  function commentReplace(e, t) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[983:1007]", functionData => eval(functionData))}

  function isFunction(e) {
    return "[object Function]" === ostring.call(e)
  }

  function isArray(e) {
    return "[object Array]" === ostring.call(e)
  }

  function each(e, t) {
    var i;
    if (e)
      for (i = 0; i < e.length && (!e[i] || !t(e[i], i, e)); i += 1);
  }

  function eachReverse(e, t) {
    var i;
    if (e)
      for (i = e.length - 1; - 1 < i && (!e[i] || !t(e[i], i, e)); i -= 1);
  }

  function hasProp(e, t) {
    return hasOwn.call(e, t)
  }

  function getOwn(e, t) {
    return hasProp(e, t) && e[t]
  }

  function eachProp(e, t) {
    var i;
    for (i in e)
      if (hasProp(e, i) && t(e[i], i)) break
  }

  function mixin(i, e, r, n) {
    return e && eachProp(e, function(e, t) {
      !r && hasProp(i, t) || (!n || "object" != typeof e || !e || isArray(e) || isFunction(e) || e instanceof RegExp ? i[t] = e : (i[t] || (i[t] = {}), mixin(i[t], e, r, n)))
    }), i
  }

  function bind(e, t) {
    return function() {
      return t.apply(e, arguments)
    }
  }

  function scripts() {
    return document.getElementsByTagName("script")
  }

  function defaultOnError(e) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[2123:2140]", functionData => eval(functionData))}

  function getGlobal(e) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[2166:2282]", functionData => eval(functionData))}

  function makeError(e, t, i, r) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[2317:2479]", functionData => eval(functionData))}
  if (void 0 === define) {
    if (void 0 !== requirejs) {
      if (isFunction(requirejs)) return;
      cfg = requirejs, requirejs = void 0
    }
    void 0 === require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(e, t, i, r) {
      var n, o, a = defContextName;
      return isArray(e) || "string" == typeof e || (o = e, isArray(t) ? (e = t, t = i, i = r) : e = []), o && o.context && (a = o.context), n = (n = getOwn(contexts, a)) || (contexts[a] = req.s.newContext(a)), o && n.configure(o), n.require(e, t, i)
    }, req.config = function(e) {
      return req(e)
    }, req.nextTick = void 0 !== setTimeout ? function(e) {
      setTimeout(e, 4)
    } : function(e) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[3196:3213]", functionData => eval(functionData))}, require = require || req, req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
      contexts: contexts,
      newContext: newContext
    }, req({}), each(["toUrl", "undef", "defined", "specified"], function(t) {
      req[t] = function() {
        var e = contexts[defContextName];
        return e.require[t].apply(e, arguments)
      }
    }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(e, t, i) {
      var r = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
      return r.type = e.scriptType || "text/javascript", r.charset = "utf-8", r.async = !0, r
    }, req.load = function(t, i, r) {
      var e, n = t && t.config || {};
      if (isBrowser) return (e = req.createNode(n, i, r)).setAttribute("data-requirecontext", t.contextName), e.setAttribute("data-requiremodule", i), !e.attachEvent || e.attachEvent.toString && e.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (e.addEventListener("load", t.onScriptLoad, !1), e.addEventListener("error", t.onScriptError, !1)) : (useInteractive = !0, e.attachEvent("onreadystatechange", t.onScriptLoad)), e.src = r, n.onNodeCreated && n.onNodeCreated(e, n, i, r), currentlyAddingScript = e, baseElement ? head.insertBefore(e, baseElement) : head.appendChild(e), currentlyAddingScript = null, e;
      if (isWebWorker) try {
        setTimeout(function() {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[4851:4853]", functionData => eval(functionData))}, 0), importScripts(r), t.completeLoad(i)
      } catch (e) {
        t.onError(makeError("importscripts", "importScripts failed for " + i + " at " + r, e, [i]))
      }
    }, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function(e) {
      if (head = head || e.parentNode, dataMain = e.getAttribute("data-main")) return mainScript = dataMain, cfg.baseUrl || -1 !== mainScript.indexOf("!") || (mainScript = (src = mainScript.split("/")).pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0
    }), define = function(e, i, t) {
      var r, n;
      "string" != typeof e && (t = i, i = e, e = null), isArray(i) || (t = i, i = null), !i && isFunction(t) && (i = [], t.length && (t.toString().replace(commentRegExp, commentReplace).replace(cjsRequireRegExp, function(e, t) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[5848:5875]", functionData => eval(functionData))}), i = (1 === t.length ? ["require"] : ["require", "exports", "module"]).concat(i))), useInteractive && (r = currentlyAddingScript || getInteractiveScript()) && (e = e || r.getAttribute("data-requiremodule"), n = contexts[r.getAttribute("data-requirecontext")]), n ? (n.defQueue.push([e, i, t]), n.defQueueMap[e] = !0) : globalDefQueue.push([e, i, t])
    }, define.amd = {
      jQuery: !0
    }, req.exec = function(text) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[6299:6330]", functionData => eval(functionData))}, req(cfg)
  }

  function newContext(u) {
    var i, e, l, c, d, g = {
        waitSeconds: 7,
        baseUrl: "./",
        paths: {},
        bundles: {},
        pkgs: {},
        shim: {},
        config: {}
      },
      p = {},
      f = {},
      r = {},
      h = [],
      m = {},
      n = {},
      v = {},
      x = 1,
      b = 1;

    function q(e, t, i) {
      var r, n, o, a, s, u, c, d, p, f, l = t && t.split("/"),
        h = g.map,
        m = h && h["*"];
      if (e && (u = (e = e.split("/")).length - 1, g.nodeIdCompat && jsSuffixRegExp.test(e[u]) && (e[u] = e[u].replace(jsSuffixRegExp, "")), "." === e[0].charAt(0) && l && (e = l.slice(0, l.length - 1).concat(e)), function(e) {
          var t, i;
          for (t = 0; t < e.length; t++)
            if ("." === (i = e[t])) e.splice(t, 1), t -= 1;
            else if (".." === i) {
            if (0 === t || 1 === t && ".." === e[2] || ".." === e[t - 1]) continue;
            0 < t && (e.splice(t - 1, 2), t -= 2)
          }
        }(e), e = e.join("/")), i && h && (l || m)) {
        e: for (o = (n = e.split("/")).length; 0 < o; o -= 1) {
          if (s = n.slice(0, o).join("/"), l)
            for (a = l.length; 0 < a; a -= 1)
              if (r = (r = getOwn(h, l.slice(0, a).join("/"))) && getOwn(r, s)) {
                c = r, d = o;
                break e
              }! p && m && getOwn(m, s) && (p = getOwn(m, s), f = o)
        }!c && p && (c = p, d = f),
        c && (n.splice(0, d, c), e = n.join("/"))
      }
      return getOwn(g.pkgs, e) || e
    }

    function E(t) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[7911:8130]", functionData => eval(functionData))}

    function w(e) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[8150:8332]", functionData => eval(functionData))}

    function y(e) {
      var t, i = e ? e.indexOf("!") : -1;
      return -1 < i && (t = e.substring(0, i), e = e.substring(i + 1, e.length)), [t, e]
    }

    function S(e, t, i, r) {
      var n, o, a, s, u = null,
        c = t ? t.name : null,
        d = e,
        p = !0,
        f = "";
      return e || (p = !1, e = "_@r" + (x += 1)), u = (s = y(e))[0], e = s[1], u && (u = q(u, c, r), o = getOwn(m, u)), e && (u ? f = o && o.normalize ? o.normalize(e, function(e) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[8811:8846]", functionData => eval(functionData))}) : -1 === e.indexOf("!") ? q(e, c, r) : e : (u = (s = y(f = q(e, c, r)))[0], f = s[1], i = !0, n = l.nameToUrl(f))), {
        prefix: u,
        name: f,
        parentMap: t,
        unnormalized: !!(a = !u || o || i ? "" : "_unnormalized" + (b += 1)),
        url: n,
        originalName: d,
        isDefine: p,
        id: (u ? u + "!" + f : f) + a
      }
    }

    function k(e) {
      var t = e.id,
        i = getOwn(p, t);
      return i = i || (p[t] = new l.Module(e))
    }

    function M(e, t, i) {
      var r = e.id,
        n = getOwn(p, r);
      !hasProp(m, r) || n && !n.defineEmitComplete ? (n = k(e)).error && "error" === t ? i(n.error) : n.on(t, i) : "defined" === t && i(m[r])
    }

    function O(i, e) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[9579:9810]", functionData => eval(functionData))}

    function j() {
      globalDefQueue.length && (each(globalDefQueue, function(e) {
        var t = e[0];
        "string" == typeof t && (l.defQueueMap[t] = !0), h.push(e)
      }), globalDefQueue = [])
    }

    function P(e) {
      delete p[e], delete f[e]
    }

    function R() {
      var e, r, t = 1e3 * g.waitSeconds,
        n = t && l.startTime + t < (new Date).getTime(),
        o = [],
        a = [],
        s = !1,
        u = !0;
      if (!i) {
        if (i = !0, eachProp(f, function(e) {
            var t = e.map,
              i = t.id;
            if (e.enabled && (t.isDefine || a.push(e), !e.error))
              if (!e.inited && n) w(i) ? s = r = !0 : (o.push(i), E(i));
              else if (!e.inited && e.fetched && t.isDefine && (s = !0, !t.prefix)) return u = !1
          }), n && o.length) return (e = makeError("timeout", "Load timeout for modules: " + o, null, o)).contextName = l.contextName, O(e);
        u && each(a, function(e) {
          ! function n(o, a, s) {
            var e = o.map.id;
            o.error ? o.emit("error", o.error) : (a[e] = !0, each(o.depMaps, function(e, t) {
              var i = e.id,
                r = getOwn(p, i);
              !r || o.depMatched[t] || s[i] || (getOwn(a, i) ? (o.defineDep(t, m[i]), o.check()) : n(r, a, s))
            }), s[e] = !0)
          }(e, {}, {})
        }), n && !r || !s || !isBrowser && !isWebWorker || d || (d = setTimeout(function() {
          d = 0, R()
        }, 50)), i = !1
      }
    }

    function a(e) {
      hasProp(m, e[0]) || k(S(e[0], null, !0)).init(e[1], e[2])
    }

    function o(e, t, i, r) {
      e.detachEvent && !isOpera ? r && e.detachEvent(r, t) : e.removeEventListener(i, t, !1)
    }

    function s(e) {
      var t = e.currentTarget || e.srcElement;
      return o(t, l.onScriptLoad, "load", "onreadystatechange"), o(t, l.onScriptError, "error"), {
        node: t,
        id: t && t.getAttribute("data-requiremodule")
      }
    }

    function T() {
      var e;
      for (j(); h.length;) {
        if (null === (e = h.shift())[0]) return O(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
        a(e)
      }
      l.defQueueMap = {}
    }
    return c = {
      require: function(e) {
        return e.require ? e.require : e.require = l.makeRequire(e.map)
      },
      exports: function(e) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[12197:12329]", functionData => eval(functionData))},
      module: function(e) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[12357:12621]", functionData => eval(functionData))}
    }, (e = function(e) {
      this.events = getOwn(r, e.id) || {}, this.map = e, this.shim = getOwn(g.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
    }).prototype = {
      init: function(e, t, i, r) {
        r = r || {}, this.inited || (this.factory = t, i ? this.on("error", i) : this.events.error && (i = bind(this, function(e) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[13028:13071]", functionData => eval(functionData))})), this.depMaps = e && e.slice(0), this.errback = i, this.inited = !0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check())
      },
      defineDep: function(e, t) {
        this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
      },
      fetch: function() {
        if (!this.fetched) {
          this.fetched = !0, l.startTime = (new Date).getTime();
          var e = this.map;
          if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
          l.makeRequire(this.map, {
            enableBuildCallback: !0
          })(this.shim.deps || [], bind(this, function() {
            return e.prefix ? this.callPlugin() : this.load()
          }))
        }
      },
      load: function() {
        var e = this.map.url;
        n[e] || (n[e] = !0, l.load(this.map.id, e))
      },
      check: function() {
        if (this.enabled && !this.enabling) {
          var t, e, i = this.map.id,
            r = this.depExports,
            n = this.exports,
            o = this.factory;
          if (this.inited) {
            if (this.error) this.emit("error", this.error);
            else if (!this.defining) {
              if (this.defining = !0, this.depCount < 1 && !this.defined) {
                if (isFunction(o)) {
                  if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                    n = l.execCb(i, o, r, n)
                  } catch (e) {
                    t = e
                  } else n = l.execCb(i, o, r, n);
                  if (this.map.isDefine && void 0 === n && ((e = this.module) ? n = e.exports : this.usingExports && (n = this.exports)), t) return t.requireMap = this.map, t.requireModules = this.map.isDefine ? [this.map.id] : null, t.requireType = this.map.isDefine ? "define" : "require", O(this.error = t)
                } else n = o;
                if (this.exports = n, this.map.isDefine && !this.ignore && (m[i] = n, req.onResourceLoad)) {
                  var a = [];
                  each(this.depMaps, function(e) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[15171:15241]", functionData => eval(functionData))}), req.onResourceLoad(l, this.map, a)
                }
                P(i), this.defined = !0
              }
              this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
            }
          } else hasProp(l.defQueueMap, i) || this.fetch()
        }
      },
      callPlugin: function() {
        var u = this.map,
          c = u.id,
          e = S(u.prefix);
        this.depMaps.push(e), M(e, "defined", bind(this, function(e) {
          var o, t, i, r = getOwn(v, this.map.id),
            n = this.map.name,
            a = this.map.parentMap ? this.map.parentMap.name : null,
            s = l.makeRequire(u.parentMap, {
              enableBuildCallback: !0
            });
          return this.map.unnormalized ? (e.normalize && (n = e.normalize(n, function(e) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[16124:16168]", functionData => eval(functionData))}) || ""), M(t = S(u.prefix + "!" + n, this.map.parentMap), "defined", bind(this, function(e) {
            this.map.normalizedMap = t, this.init([], function() {
              return e
            }, null, {
              enabled: !0,
              ignore: !0
            })
          })), void((i = getOwn(p, t.id)) && (this.depMaps.push(t), this.events.error && i.on("error", bind(this, function(e) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[16569:16616]", functionData => eval(functionData))})), i.enable()))) : r ? (this.map.url = l.nameToUrl(r), void this.load()) : ((o = bind(this, function(e) {
            this.init([], function() {
              return e
            }, null, {
              enabled: !0
            })
          })).error = bind(this, function(e) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[16894:17096]", functionData => eval(functionData))}), o.fromText = bind(this, function(e, t) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[17138:17627]", functionData => eval(functionData))}), void e.load(u.name, s, o, g))
        })), l.enable(e, this), this.pluginMaps[e.id] = e
      },
      enable: function() {
        (f[this.map.id] = this).enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(e, t) {
          var i, r, n;
          if ("string" == typeof e) {
            if (e = S(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, n = getOwn(c, e.id)) return void(this.depExports[t] = n(this));
            this.depCount += 1, M(e, "defined", bind(this, function(e) {
              this.undefed || (this.defineDep(t, e), this.check())
            })), this.errback ? M(e, "error", bind(this, this.errback)) : this.events.error && M(e, "error", bind(this, function(e) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[18381:18432]", functionData => eval(functionData))}))
          }
          i = e.id, r = p[i], hasProp(c, i) || !r || r.enabled || l.enable(e, this)
        })), eachProp(this.pluginMaps, bind(this, function(e) {
          var t = getOwn(p, e.id);
          t && !t.enabled && l.enable(e, this)
        })), this.enabling = !1, this.check()
      },
      on: function(e, t) {
        var i = this.events[e];
        (i = i || (this.events[e] = [])).push(t)
      },
      emit: function(e, t) {
        each(this.events[e], function(e) {
          e(t)
        }), "error" === e && delete this.events[e]
      }
    }, (l = {
      config: g,
      contextName: u,
      registry: p,
      defined: m,
      urlFetched: n,
      defQueue: h,
      defQueueMap: {},
      Module: e,
      makeModuleMap: S,
      nextTick: req.nextTick,
      onError: O,
      configure: function(e) {
        if (e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/"), "string" == typeof e.urlArgs) {
          var i = e.urlArgs;
          e.urlArgs = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[19461:19533]", functionData => eval(functionData))}
        }
        var r = g.shim,
          n = {
            paths: !0,
            bundles: !0,
            config: !0,
            map: !0
          };
        eachProp(e, function(e, t) {
          n[t] ? (g[t] || (g[t] = {}), mixin(g[t], e, !0, !0)) : g[t] = e
        }), e.bundles && eachProp(e.bundles, function(e, t) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[19860:19950]", functionData => eval(functionData))}), e.shim && (eachProp(e.shim, function(e, t) {
          isArray(e) && (e = {
            deps: e
          }), !e.exports && !e.init || e.exportsFn || (e.exportsFn = l.makeShimExports(e)), r[t] = e
        }), g.shim = r), e.packages && each(e.packages, function(e) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[20218:20475]", functionData => eval(functionData))}), eachProp(p, function(e, t) {
          e.inited || e.map.unnormalized || (e.map = S(t, null, !0))
        }), (e.deps || e.callback) && l.require(e.deps || [], e.callback)
      },
      makeShimExports: function(t) {
        return function() {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[20722:20855]", functionData => eval(functionData))}
      },
      makeRequire: function(o, a) {
        function s(e, t, i) {
          var r, n;
          return a.enableBuildCallback && t && isFunction(t) && (t.__requireJsBuild = !0), "string" == typeof e ? isFunction(t) ? O(makeError("requireargs", "Invalid require call"), i) : o && hasProp(c, e) ? c[e](p[o.id]) : req.get ? req.get(l, e, o, s) : (r = S(e, o, !1, !0).id, hasProp(m, r) ? m[r] : O(makeError("notloaded", 'Module name "' + r + '" has not been loaded yet for context: ' + u + (o ? "" : ". Use require([])")))) : (T(), l.nextTick(function() {
            T(), (n = k(S(null, o))).skipMap = a.skipMap, n.init(e, t, i, {
              enabled: !0
            }), R()
          }), s)
        }
        return a = a || {}, mixin(s, {
          isBrowser: isBrowser,
          toUrl: function(e) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[21665:21923]", functionData => eval(functionData))},
          defined: function(e) {
            return hasProp(m, S(e, o, !1, !0).id)
          },
          specified: function(e) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[22054:22141]", functionData => eval(functionData))}
        }), o || (s.undef = function(i) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[22182:22507]", functionData => eval(functionData))}), s
      },
      enable: function(e) {
        getOwn(p, e.id) && k(e).enable()
      },
      completeLoad: function(e) {
        var t, i, r, n = getOwn(g.shim, e) || {},
          o = n.exports;
        for (j(); h.length;) {
          if (null === (i = h.shift())[0]) {
            if (i[0] = e, t) break;
            t = !0
          } else i[0] === e && (t = !0);
          a(i)
        }
        if (l.defQueueMap = {}, r = getOwn(p, e), !t && !hasProp(m, e) && r && !r.inited) {
          if (!(!g.enforceDefine || o && getGlobal(o))) return w(e) ? void 0 : O(makeError("nodefine", "No define call for " + e, null, [e]));
          a([e, n.deps || [], n.exportsFn])
        }
        R()
      },
      nameToUrl: function(e, t, i) {
        var r, n, o, a, s, u, c = getOwn(g.pkgs, e);
        if (c && (e = c), u = getOwn(v, e)) return l.nameToUrl(u, t, i);
        if (req.jsExtRegExp.test(e)) a = e + (t || "");
        else {
          for (r = g.paths, o = (n = e.split("/")).length; 0 < o; o -= 1)
            if (s = getOwn(r, n.slice(0, o).join("/"))) {
              isArray(s) && (s = s[0]), n.splice(0, o, s);
              break
            } a = n.join("/"), a = ("/" === (a += t || (/^data\:|^blob\:|\?/.test(a) || i ? "" : ".js")).charAt(0) || a.match(/^[\w\+\.\-]+:/) ? "" : g.baseUrl) + a
        }
        return g.urlArgs && !/^blob\:/.test(a) ? a + g.urlArgs(e, a) : a
      },
      load: function(e, t) {
        req.load(l, e, t)
      },
      execCb: function(e, t, i, r) {
        return t.apply(r, i)
      },
      onScriptLoad: function(e) {
        if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
          interactiveScript = null;
          var t = s(e);
          l.completeLoad(t.id)
        }
      },
      onScriptError: function(e) {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[24332:24737]", functionData => eval(functionData))}
    }).require = l.makeRequire(), l
  }

  function getInteractiveScript() {lacuna_lazy_load("lacuna_cache/imported_tdghho.js[24813:25034]", functionData => eval(functionData))}
}(this, "undefined" == typeof setTimeout ? void 0 : setTimeout);