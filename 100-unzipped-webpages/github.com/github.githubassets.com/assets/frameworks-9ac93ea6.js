self.System = self.System || (() => {
    const t = {},
        e = {},
        n = t => t.replace(/^.\/(\w+)-[a-f0-9]{8,}.js$/, "./$1.js"),
        o = {
            register(r, i) {
                const s = n(`./${((document.currentScript||{}).src||"").split("?").shift().split("/").pop()}`),
                    a = {},
                    c = i((t, e) => e ? a[t] = e : Object.assign(a, t), o);
                t[s] = Promise.all(r.map((t, e) => o.import(n(t)).then(c.setters[e]))).then(() => (c.execute(), a)).catch(t => {
                    throw t.message = `evaluating module ${s}: ${t.message}`, t
                }), e[s] && (e[s](t[s]), delete e[s])
            },
            import: n => t[n] || (t[n] = new Promise((t, o) => {
                const r = setTimeout(() => {
                    o(new Error(`could not resolve ${n}`))
                }, 1e4);
                e[n] = (e => {
                    clearTimeout(r), t(e)
                })
            }))
        };
    return o
})(), System.register([], function(t, e) {
    "use strict";
    return {
        execute: function() {
            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function n(t, n) {
                return !n || "object" !== e(n) && "function" != typeof n ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : n
            }

            function o(t) {
                var e = "function" == typeof Map ? new Map : void 0;
                return (o = function(t) {
                    if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
                    var n;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, o)
                    }

                    function o() {
                        return r(t, arguments, s(this).constructor)
                    }
                    return o.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: o,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), i(o, t)
                })(t)
            }

            function r(t, e, n) {
                return (r = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (sn) {
                        return !1
                    }
                }() ? Reflect.construct : function(t, e, n) {
                    var o = [null];
                    o.push.apply(o, e);
                    var r = new(Function.bind.apply(t, o));
                    return n && i(r, n.prototype), r
                }).apply(null, arguments)
            }

            function i(t, e) {
                return (i = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function s(t) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            t({
                $: async function(t, e) {
                    const n = Et(t, e);
                    n.headers.set("Accept", "application/json");
                    const o = await self.fetch(n),
                        r = new wt(o);
                    return yt(o, r), o.json()
                },
                A: function() {
                    return bn() && yn() || _n()
                },
                B: _n,
                C: function(t, e, n) {
                    return new Promise(function(o, r) {
                        window.u2f.register(t, e, n, function(t) {
                            "registrationData" in t && t.registrationData ? o(t) : r(new An("Device registration failed", Sn(t)))
                        })
                    })
                },
                D: async function(t) {
                    const e = un(sn, pn, t),
                        n = await navigator.credentials.create(e);
                    return un(an, mn, n)
                },
                E: async function(t) {
                    const e = (n = t, "low" === n || "medium" === n || "high" === n || "two_factor" === n ? n : null);
                    var n;
                    if (!e) throw new Error("invariant violation: level");
                    return "true" === await xt(`/sessions/in_sudo?requested_access_level=${e}`, {
                        headers: {
                            accept: "application/json"
                        }
                    }) || async function() {
                        if (xn) return !1;
                        xn = !0, kn = !1;
                        const t = (await async function() {
                            const t = document.body;
                            if (!t) throw new Error("invariant violation: body");
                            const e = l(document, "link[rel=sudo-modal]", HTMLLinkElement),
                                n = document.querySelector(".js-sudo-prompt");
                            if (n instanceof HTMLTemplateElement) return n;
                            if (e) {
                                const n = await kt(document, function(t) {
                                    const e = new URL(t, window.location.origin),
                                        n = new URLSearchParams(e.search.slice(1));
                                    return n.set("webauthn-support", En()), e.search = n.toString(), e.toString()
                                }(e.href));
                                return t.appendChild(n), l(document, ".js-sudo-prompt", HTMLTemplateElement)
                            }
                            throw new Error("couldn't load sudo prompt")
                        }()).content.cloneNode(!0);
                        if (!(t instanceof DocumentFragment)) throw new Error("invariant violation: content instanceof DocumentFragment");
                        const e = await Fe({
                            content: t
                        });
                        return await new Promise(t => {
                            e.addEventListener("dialog:remove", function() {
                                xn = !1, t()
                            }, {
                                once: !0
                            })
                        }), kn
                    }()
                },
                F: function(t, e, n) {
                    var o = n || HTMLInputElement,
                        r = t.elements.namedItem(e);
                    if (r instanceof o) return r;
                    throw new a("Element not found by name: <".concat(o.name, "> ").concat(e))
                },
                H: function(t, e) {
                    if ("boolean" == typeof e) {
                        if (!(t instanceof HTMLInputElement)) throw new TypeError("only checkboxes can be set to boolean value");
                        t.checked = e
                    } else {
                        if ("checkbox" === t.type) throw new TypeError("checkbox can't be set to string value");
                        t.value = e
                    }
                    he(t, "change", !1)
                },
                I: function(t, e) {
                    return new Promise(function(n, o) {
                        ! function r(i) {
                            function s(t) {
                                switch (t.status) {
                                    case 200:
                                        n(t);
                                        break;
                                    case 202:
                                        setTimeout(() => r(1.5 * i), i);
                                        break;
                                    default:
                                        o(new wt(t))
                                }
                            }
                            Tt(t, e).then(function s(r) {
                                switch (r.status) {
                                    case 200:
                                        n(r);
                                        break;
                                    case 202:
                                        setTimeout(() => (function r(i) {
                                            function s(t) {
                                                switch (t.status) {
                                                    case 200:
                                                        n(t);
                                                        break;
                                                    case 202:
                                                        setTimeout(() => r(1.5 * i), i);
                                                        break;
                                                    default:
                                                        o(new wt(t))
                                                }
                                            }
                                            Tt(t, e).then(s, o)
                                        })(1.5 * i), i);
                                        break;
                                    default:
                                        o(new wt(r))
                                }
                            }, o)
                        }(1e3)
                    })
                },
                J: Dn,
                K: ne,
                L: ee,
                M: function(t, e) {
                    0 === Object.keys(Do.children).length && document.addEventListener("keydown", Ro);
                    var n = function(t) {
                        return t.split(",").map(function(t) {
                            return t.split(" ")
                        })
                    }(e || t.getAttribute("data-hotkey") || "").map(function(e) {
                        return Do.insert(e).add(t)
                    });
                    Io.set(t, n)
                },
                N: function(t) {
                    var e = Io.get(t);
                    if (e && e.length) {
                        var n = !0,
                            o = !1,
                            r = void 0;
                        try {
                            for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done); n = !0) {
                                var a = i.value;
                                a && a.delete(t)
                            }
                        } catch (c) {
                            o = !0, r = c
                        } finally {
                            try {
                                n || null == s.return || s.return()
                            } finally {
                                if (o) throw r
                            }
                        }
                    }
                    0 === Object.keys(Do.children).length && document.removeEventListener("keydown", Ro)
                },
                P: function(t, e, n) {
                    function o(e) {
                        const {
                            currentTarget: r
                        } = e;
                        r && (r.removeEventListener(t, n), r.removeEventListener("blur", o))
                    }
                    ye(e, function(e) {
                        e.addEventListener(t, n), e.addEventListener("blur", o)
                    })
                },
                Q: function() {
                    return Promise.resolve()
                },
                R: function(t, e) {
                    return 1 === t ? e : e.endsWith("y") ? `${e.substring(0,e.length-1)}ies` : `${e}s`
                },
                S: function(t, e) {
                    t.removeEventListener("keydown", nn), t.removeEventListener("keyup", on), t.removeEventListener("input", rn);
                    const n = tn.get(t);
                    n && (null != n.timer && n.listener === e && clearTimeout(n.timer), tn.delete(t))
                },
                T: ge,
                V: Wo,
                W: async function(t, e) {
                    const n = Zo.get(t);
                    n && n.abort();
                    return tr(t, e)
                },
                X: $o,
                Z: function(t) {
                    Oe.push(t)
                },
                _: async function() {
                    await async function() {
                        const t = document.querySelector("link[rel=sso-session]"),
                            e = document.querySelector("meta[name=sso-expires-around]");
                        if (!(t instanceof HTMLLinkElement)) return !0;
                        if (! function(t) {
                                if (!(t instanceof HTMLMetaElement)) return !0;
                                const e = parseInt(t.content);
                                return (new Date).getTime() / 1e3 > e
                            }(e)) return !0;
                        const n = t.href,
                            o = await Tt(n, {
                                headers: {
                                    Accept: "application/json"
                                }
                            });
                        return await o.json()
                    }() || (or || (or = async function() {
                        const t = l(document, "link[rel=sso-modal]", HTMLLinkElement),
                            e = await Fe({
                                content: kt(document, t.href),
                                dialogClass: "sso-modal"
                            });
                        let n = null;
                        if (window.external.ssoComplete = function(t) {
                                t.error ? nr(n = !1) : (nr(n = !0), function(t) {
                                    const e = document.querySelector("meta[name=sso-expires-around]");
                                    e && e.setAttribute("content", t)
                                }(t.expiresAround), window.focus()), window.external.ssoComplete = null
                            }, await
                            function(t) {
                                return new Promise(e => {
                                    t.addEventListener("dialog:remove", e, {
                                        once: !0
                                    })
                                })
                            }(e), !n) throw new Error("sso prompt canceled")
                    }().then(rr).catch(rr)), await or)
                },
                a$: fe,
                a0: Bo,
                a1: function(t, e) {
                    const n = t.currentTarget;
                    if (!(n instanceof HTMLAnchorElement)) throw new Error("invariant: app/assets/modules/github/pjax.js:39");
                    if (0 !== t.button || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
                    if (location.protocol !== n.protocol || location.hostname !== n.hostname) return;
                    if (n.href.indexOf("#") > -1 && kr(n) === kr(location)) return;
                    if (t.defaultPrevented) return;
                    const o = {
                        url: n.href,
                        container: null,
                        target: n
                    };
                    Object.assign(o, e), mr(n, "pjax:click", {
                        options: o,
                        relatedEvent: t
                    }) && (vr(o), t.preventDefault(), mr(n, "pjax:clicked", {
                        options: o
                    }))
                },
                a2: function(t, e) {
                    const n = t.currentTarget;
                    if (!(n instanceof HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/pjax.js:82");
                    const o = {
                        type: (n.method || "GET").toUpperCase(),
                        url: n.action,
                        container: null,
                        target: n
                    };
                    if (Object.assign(o, e), "GET" === o.type) {
                        if (n.querySelector("input[type=file]")) return;
                        if ("string" != typeof o.url) throw new Error("invariant: app/assets/modules/github/pjax.js:97");
                        const t = xr(o.url);
                        t.search += (t.search ? "&" : "") + ge(n), o.url = t.toString()
                    } else o.data = new FormData(n);
                    vr(o), t.preventDefault()
                },
                a3: gr,
                a5: Mo,
                a6: function(t, e) {
                    const n = {
                        id: Or++,
                        selector: t,
                        in: e,
                        out: null,
                        elements: [],
                        checkPending: !1,
                        scrollHandler() {
                            ! function(t) {
                                if (!document.hasFocus()) return;
                                if (window.scrollY === Nr) return;
                                if (Nr = window.scrollY, t.checkPending) return;
                                t.checkPending = !0, window.requestAnimationFrame(() => {
                                    t.checkPending = !1, Hr(t)
                                })
                            }(n)
                        }
                    };
                    te(t, {
                        add(t) {
                            !async function(t, e) {
                                e.elements.push(t), 1 === e.elements.length && (window.addEventListener("scroll", e.scrollHandler, {
                                    capture: !0,
                                    passive: !0
                                }), await Pr(document), Hr(e))
                            }(t, n)
                        },
                        remove(t) {
                            ! function(t, e) {
                                const n = e.elements.indexOf(t); - 1 !== n && e.elements.splice(n, 1);
                                0 === e.elements.length && window.removeEventListener("scroll", e.scrollHandler, {
                                    capture: !0,
                                    passive: !0
                                })
                            }(t, n)
                        }
                    })
                },
                a7: ar,
                a8: sr,
                a9: function() {
                    return hr
                },
                aA: di,
                aB: me,
                aC: Xo,
                aD: Jo,
                aE: function(t, e) {
                    pi(t), hi(t, e)
                },
                aG: Pr,
                aH: function(t) {
                    const e = t.getAttribute("data-hydro-click-payload") || "",
                        n = t.getAttribute("data-hydro-click-hmac") || "",
                        o = t.getAttribute("data-hydro-client-context") || "";
                    se({
                        hydroEventPayload: e,
                        hydroEventHmac: n,
                        hydroClientContext: o
                    }, !0)
                },
                aI: function(t) {
                    const e = tn.get(t);
                    e && e.listener.call(null, t)
                },
                aJ: async function(t, e) {
                    if (Zo.get(t)) return;
                    const n = new XMLHttpRequest,
                        o = d(t, "data-url"),
                        r = t.hasAttribute("data-retain-focus");
                    n.open("GET", o), n.setRequestHeader("Accept", "text/html"), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), null != e && n.setRequestHeader("X-Request-Purpose", e);
                    Zo.set(t, n);
                    try {
                        const e = await
                        function(t, e) {
                            return new Promise((n, o) => {
                                t.onload = (() => {
                                    200 === t.status ? n(t.responseText) : o(new Error(`XMLHttpRequest ${t.statusText}`))
                                }), t.onerror = o, t.send(e || null)
                            })
                        }(n);
                        if (Xo(t, r)) throw new Error("element had interactions");
                        return tr(t, e, r)
                    } catch (i) {
                        "XMLHttpRequest abort" !== i.message && console.warn("Failed to update content", t, i)
                    } finally {
                        Zo.delete(t)
                    }
                },
                aK: zr,
                aL: function() {
                    const t = Ee[Ae() - 1];
                    if (t) return t.url
                },
                aM: function() {
                    const t = Ee[Ae() + 1];
                    if (t) return t.url
                },
                aN: function(t, e) {
                    const n = t.closest("[data-pjax-container]");
                    if (!n) throw new Error(`no pjax container for ${function(t){const e=[];let n=t;for(;n&&(e.push(cr(n)),9!==n.nodeType&&!n.id);)n=n.parentNode;return e.reverse().join(" > ")}(t)}`);
                    const o = Lr(n),
                        r = xr(t.href);
                    return r.search += `${r.search?"&":""}_pjax=${encodeURIComponent(o)}`, Tt(r.href, {
                        headers: Object.assign({
                            Accept: "text/html",
                            "X-PJAX": "true",
                            "X-PJAX-Container": o
                        }, e && e.headers)
                    })
                },
                aO: function(t, e) {
                    lr.set(t, e), n = e, n.catch(() => {});
                    var n
                },
                aP: je,
                aQ: function(t) {
                    return ki.get(t)
                },
                aR: function(t) {
                    const e = t.getAttribute("data-details-container") || ".js-details-container",
                        n = c(t, e).classList;
                    return n.contains("Details--on") || n.contains("open")
                },
                aS: En,
                aT: async function() {
                    return window.PublicKeyCredential && window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable && await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable() ? "supported" : "unsupported"
                },
                aU: function() {
                    return bn() && yn() || Tn()
                },
                aV: Tn,
                aW: function(t, e, n) {
                    return new Promise(function(o, r) {
                        window.u2f.sign(t, e, n, function(t) {
                            "keyHandle" in t && t.keyHandle ? o(t) : r(new An("Signing request failed", Sn(t)))
                        })
                    })
                },
                aX: async function(t) {
                    const e = un(sn, gn, t),
                        n = await navigator.credentials.get(e);
                    return un(an, vn, n)
                },
                aY: function(t, e, n) {
                    let o = t.value.substring(0, t.selectionEnd || 0),
                        r = t.value.substring(t.selectionEnd || 0);
                    o = o.replace(e, n), r = r.replace(e, n), t.value = o + r, t.selectionStart = o.length, t.selectionEnd = o.length, t.dispatchEvent(new CustomEvent("change", {
                        bubbles: !0,
                        cancelable: !1
                    }))
                },
                aZ: fi,
                a_: de,
                aa: qr,
                ab: Ho,
                ac: function(t) {
                    const e = t.split("‍");
                    let n = 0;
                    for (const o of e) {
                        const t = Array.from(o.split(/[\ufe00-\ufe0f]/).join("")).length;
                        n += t
                    }
                    return n / e.length
                },
                ad: Qo,
                ae: qe,
                af: function(t) {
                    return Tt(t.action, {
                        method: t.method,
                        body: new FormData(t)
                    })
                },
                ag: function(t, e) {
                    for (const n in e) {
                        const o = e[n],
                            r = t.elements.namedItem(n);
                        r instanceof HTMLInputElement ? r.value = o : r instanceof HTMLTextAreaElement && (r.value = o)
                    }
                },
                ah: Vr,
                ai: ir,
                aj: ke,
                ak: function(t, e) {
                    window.ga("provide", t, e)
                },
                al: function(t) {
                    window.ga("set", {
                        location: t
                    })
                },
                am: function(t) {
                    window.ga("set", {
                        title: t
                    })
                },
                an: function(t, e) {
                    window.ga("set", t, e)
                },
                ao: function(t, e = {
                    page: ""
                }) {
                    e.page = t || "", window.ga("send", "pageview", e)
                },
                ap: function(t, e, n = {}) {
                    window.ga("create", t, e, n), window.ga("set", "transport", "sendBeacon" in window.navigator ? "beacon" : "xhr")
                },
                aq: function(t, e = {}) {
                    window.ga(() => {
                        window.ga("require", t, e)
                    })
                },
                ar: function(t) {
                    void 0 === t.interactive && (t.interactive = !0);
                    window.ga("send", "event", t.category, t.action, t.label, t.value, {
                        nonInteraction: !t.interactive
                    })
                },
                at: Yr,
                au: function(t) {
                    let e = t;
                    "string" == typeof e && (e = e.replace(/,/g, ""));
                    return parseFloat(e)
                },
                av: function(t) {
                    return `${t}`.replace(/(^|[^\w.])(\d{4,})/g, (t, e, n) => e + n.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,"))
                },
                aw: function(t, e) {
                    const n = 1 === t ? "data-singular-string" : "data-plural-string",
                        o = e.getAttribute(n);
                    if (null == o) return;
                    e.textContent = o
                },
                ax: function(t, e) {
                    const n = t.selectionEnd || 0,
                        o = t.value.substring(0, n),
                        r = t.value.substring(n),
                        i = "" === t.value || o.match(/\n$/) ? "" : "\n";
                    t.value = o + i + e + r, t.selectionStart = n + e.length, t.selectionEnd = n + e.length, t.dispatchEvent(new CustomEvent("change", {
                        bubbles: !0,
                        cancelable: !1
                    })), t.focus()
                },
                az: hi,
                b: l,
                b0: function(t) {
                    Ne.push(t)
                },
                b1: qo,
                b4: Qr,
                b5: jn,
                b7: Mn,
                b8: async function(t) {
                    return ki.get(t) || Li(await (e = t, n = "codeEditor:ready", new Promise(t => {
                        e.addEventListener(n, t, {
                            once: !0
                        })
                    })));
                    var e, n
                },
                b9: In,
                ba: function(t) {
                    const e = t.getBoundingClientRect();
                    return {
                        top: e.top + window.pageYOffset,
                        left: e.left + window.pageXOffset
                    }
                },
                bb: function() {
                    return new Promise(window.requestAnimationFrame)
                },
                bd: Ai,
                d: pt,
                e: te,
                f: c,
                g: mt,
                h: d,
                i: Tt,
                j: se,
                l: pe,
                m: function(t) {
                    const e = t.getAttribute("data-hydro-view") || "",
                        n = t.getAttribute("data-hydro-view-hmac") || "",
                        o = t.getAttribute("data-hydro-client-context") || "";
                    se({
                        hydroEventPayload: e,
                        hydroEventHmac: n,
                        hydroClientContext: o
                    }, !0)
                },
                n: kt,
                o: ye,
                p: function(t, e) {
                    function n(t) {
                        const {
                            currentTarget: o
                        } = t;
                        o && (o.removeEventListener("input", e), o.removeEventListener("blur", n))
                    }
                    ye(t, function(t) {
                        t.addEventListener("input", e), t.addEventListener("blur", n)
                    })
                },
                q: Me,
                r: Re,
                s: xt,
                t: u,
                u: function(t, e = 0, {
                    start: n = !1,
                    middle: o = !1,
                    once: r = !1
                } = {}) {
                    return qe(t, e, {
                        start: n,
                        middle: o,
                        once: r
                    })
                },
                v: function(t, e) {
                    const n = new URL(t, window.location.origin),
                        o = e ? Object.assign({}, e) : {},
                        r = n.hash.match(/^#csrf-token=([A-Za-z0-9+\/=]+)$/);
                    if (!r) throw new TypeError("Expected csrfRequest(url) to have an associated #csrf-token");
                    n.hash = "";
                    const i = n.toString();
                    o.mode = "same-origin";
                    const s = new Request(i, o);
                    return s.headers.append("Scoped-CSRF-Token", r[1]), s
                },
                w: Fe,
                x: vt,
                z: function(t, e, n = {
                    wait: null
                }) {
                    tn.set(t, {
                        keypressed: !1,
                        inputed: !1,
                        timer: void 0,
                        listener: e,
                        wait: null != n.wait ? n.wait : 100
                    }), t.addEventListener("keydown", nn), t.addEventListener("keyup", on), t.addEventListener("input", rn)
                }
            });
            var a = function(t) {
                function e(t) {
                    var o;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (o = n(this, s(e).call(this, t))).name = "QueryError", o.framesToPop = 1, o
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && i(t, e)
                }(e, o(Error)), e
            }();

            function c(t, e, n) {
                var o = n || HTMLElement,
                    r = t.closest(e);
                if (r instanceof o) return r;
                throw new a("Element not found: <".concat(o.name, "> ").concat(e))
            }

            function l(t, e, n) {
                var o = n || HTMLElement,
                    r = t.querySelector(e);
                if (r instanceof o) return r;
                throw new a("Element not found: <".concat(o.name, "> ").concat(e))
            }

            function u(t, e, n) {
                var o = n || HTMLElement,
                    r = [],
                    i = !0,
                    s = !1,
                    a = void 0;
                try {
                    for (var c, l = t.querySelectorAll(e)[Symbol.iterator](); !(i = (c = l.next()).done); i = !0) {
                        var u = c.value;
                        u instanceof o && r.push(u)
                    }
                } catch (d) {
                    s = !0, a = d
                } finally {
                    try {
                        i || null == l.return || l.return()
                    } finally {
                        if (s) throw a
                    }
                }
                return r
            }

            function d(t, e) {
                var n = t.getAttribute(e);
                if (null != n) return n;
                throw new a("Attribute not found on element: ".concat(e))
            }
            const f = new WeakMap,
                h = (t("b2", t => (...e) => {
                    const n = t(...e);
                    return f.set(n, !0), n
                }), t => "function" == typeof t && f.has(t)),
                p = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
                m = (t, e, n = null) => {
                    for (; e !== n;) {
                        const n = e.nextSibling;
                        t.removeChild(e), e = n
                    }
                },
                g = {},
                v = {},
                w = `{{lit-${String(Math.random()).slice(2)}}}`,
                b = `\x3c!--${w}--\x3e`,
                y = new RegExp(`${w}|${b}`),
                E = "$lit$";
            class _ {
                constructor(t, e) {
                    this.parts = [], this.element = e;
                    const n = [],
                        o = [],
                        r = document.createTreeWalker(e.content, 133, null, !1);
                    let i = 0,
                        s = -1,
                        a = 0;
                    const {
                        strings: c,
                        values: {
                            length: l
                        }
                    } = t;
                    for (; a < l;) {
                        const t = r.nextNode();
                        if (null !== t) {
                            if (s++, 1 === t.nodeType) {
                                if (t.hasAttributes()) {
                                    const e = t.attributes,
                                        {
                                            length: n
                                        } = e;
                                    let o = 0;
                                    for (let t = 0; t < n; t++) T(e[t].name, E) && o++;
                                    for (; o-- > 0;) {
                                        const e = c[a],
                                            n = L.exec(e)[2],
                                            o = n.toLowerCase() + E,
                                            r = t.getAttribute(o);
                                        t.removeAttribute(o);
                                        const i = r.split(y);
                                        this.parts.push({
                                            type: "attribute",
                                            index: s,
                                            name: n,
                                            strings: i
                                        }), a += i.length - 1
                                    }
                                }
                                "TEMPLATE" === t.tagName && (o.push(t), r.currentNode = t.content)
                            } else if (3 === t.nodeType) {
                                const e = t.data;
                                if (e.indexOf(w) >= 0) {
                                    const o = t.parentNode,
                                        r = e.split(y),
                                        i = r.length - 1;
                                    for (let e = 0; e < i; e++) {
                                        let n, i = r[e];
                                        if ("" === i) n = k();
                                        else {
                                            const t = L.exec(i);
                                            null !== t && T(t[2], E) && (i = i.slice(0, t.index) + t[1] + t[2].slice(0, -E.length) + t[3]), n = document.createTextNode(i)
                                        }
                                        o.insertBefore(n, t), this.parts.push({
                                            type: "node",
                                            index: ++s
                                        })
                                    }
                                    "" === r[i] ? (o.insertBefore(k(), t), n.push(t)) : t.data = r[i], a += i
                                }
                            } else if (8 === t.nodeType)
                                if (t.data === w) {
                                    const e = t.parentNode;
                                    null !== t.previousSibling && s !== i || (s++, e.insertBefore(k(), t)), i = s, this.parts.push({
                                        type: "node",
                                        index: s
                                    }), null === t.nextSibling ? t.data = "" : (n.push(t), s--), a++
                                } else {
                                    let e = -1;
                                    for (; - 1 !== (e = t.data.indexOf(w, e + 1));) this.parts.push({
                                        type: "node",
                                        index: -1
                                    }), a++
                                }
                        } else r.currentNode = o.pop()
                    }
                    for (const u of n) u.parentNode.removeChild(u)
                }
            }
            const T = (t, e) => {
                    const n = t.length - e.length;
                    return n >= 0 && t.slice(n) === e
                },
                x = t => -1 !== t.index,
                k = () => document.createComment(""),
                L = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
            class A {
                constructor(t, e, n) {
                    this.__parts = [], this.template = t, this.processor = e, this.options = n
                }
                update(t) {
                    let e = 0;
                    for (const n of this.__parts) void 0 !== n && n.setValue(t[e]), e++;
                    for (const n of this.__parts) void 0 !== n && n.commit()
                }
                _clone() {
                    const t = p ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
                        e = [],
                        n = this.template.parts,
                        o = document.createTreeWalker(t, 133, null, !1);
                    let r, i = 0,
                        s = 0,
                        a = o.nextNode();
                    for (; i < n.length;)
                        if (r = n[i], x(r)) {
                            for (; s < r.index;) s++, "TEMPLATE" === a.nodeName && (e.push(a), o.currentNode = a.content), null === (a = o.nextNode()) && (o.currentNode = e.pop(), a = o.nextNode());
                            if ("node" === r.type) {
                                const t = this.processor.handleTextExpression(this.options);
                                t.insertAfterNode(a.previousSibling), this.__parts.push(t)
                            } else this.__parts.push(...this.processor.handleAttributeExpressions(a, r.name, r.strings, this.options));
                            i++
                        } else this.__parts.push(void 0), i++;
                    return p && (document.adoptNode(t), customElements.upgrade(t)), t
                }
            }
            const S = ` ${w} `;
            class C {
                constructor(t, e, n, o) {
                    this.strings = t, this.values = e, this.type = n, this.processor = o
                }
                getHTML() {
                    const t = this.strings.length - 1;
                    let e = "",
                        n = !1;
                    for (let o = 0; o < t; o++) {
                        const t = this.strings[o],
                            r = t.lastIndexOf("\x3c!--");
                        n = (r > -1 || n) && -1 === t.indexOf("--\x3e", r + 1);
                        const i = L.exec(t);
                        e += null === i ? t + (n ? S : b) : t.substr(0, i.index) + i[1] + i[2] + E + i[3] + w
                    }
                    return e += this.strings[t]
                }
                getTemplateElement() {
                    const t = document.createElement("template");
                    return t.innerHTML = this.getHTML(), t
                }
            }
            const j = t("b3", t => null === t || !("object" == typeof t || "function" == typeof t)),
                M = t => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
            class D {
                constructor(t, e, n) {
                    this.dirty = !0, this.element = t, this.name = e, this.strings = n, this.parts = [];
                    for (let o = 0; o < n.length - 1; o++) this.parts[o] = this._createPart()
                }
                _createPart() {
                    return new I(this)
                }
                _getValue() {
                    const t = this.strings,
                        e = t.length - 1;
                    let n = "";
                    for (let o = 0; o < e; o++) {
                        n += t[o];
                        const e = this.parts[o];
                        if (void 0 !== e) {
                            const t = e.value;
                            if (j(t) || !M(t)) n += "string" == typeof t ? t : String(t);
                            else
                                for (const e of t) n += "string" == typeof e ? e : String(e)
                        }
                    }
                    return n += t[e]
                }
                commit() {
                    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()))
                }
            }
            class I {
                constructor(t) {
                    this.value = void 0, this.committer = t
                }
                setValue(t) {
                    t === g || j(t) && t === this.value || (this.value = t, h(t) || (this.committer.dirty = !0))
                }
                commit() {
                    for (; h(this.value);) {
                        const t = this.value;
                        this.value = g, t(this)
                    }
                    this.value !== g && this.committer.commit()
                }
            }
            class P {
                constructor(t) {
                    this.value = void 0, this.__pendingValue = void 0, this.options = t
                }
                appendInto(t) {
                    this.startNode = t.appendChild(k()), this.endNode = t.appendChild(k())
                }
                insertAfterNode(t) {
                    this.startNode = t, this.endNode = t.nextSibling
                }
                appendIntoPart(t) {
                    t.__insert(this.startNode = k()), t.__insert(this.endNode = k())
                }
                insertAfterPart(t) {
                    t.__insert(this.startNode = k()), this.endNode = t.endNode, t.endNode = this.startNode
                }
                setValue(t) {
                    this.__pendingValue = t
                }
                commit() {
                    for (; h(this.__pendingValue);) {
                        const t = this.__pendingValue;
                        this.__pendingValue = g, t(this)
                    }
                    const t = this.__pendingValue;
                    t !== g && (j(t) ? t !== this.value && this.__commitText(t) : t instanceof C ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : M(t) ? this.__commitIterable(t) : t === v ? (this.value = v, this.clear()) : this.__commitText(t))
                }
                __insert(t) {
                    this.endNode.parentNode.insertBefore(t, this.endNode)
                }
                __commitNode(t) {
                    this.value !== t && (this.clear(), this.__insert(t), this.value = t)
                }
                __commitText(t) {
                    const e = this.startNode.nextSibling,
                        n = "string" == typeof(t = null == t ? "" : t) ? t : String(t);
                    e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = n : this.__commitNode(document.createTextNode(n)), this.value = t
                }
                __commitTemplateResult(t) {
                    const e = this.options.templateFactory(t);
                    if (this.value instanceof A && this.value.template === e) this.value.update(t.values);
                    else {
                        const n = new A(e, t.processor, this.options),
                            o = n._clone();
                        n.update(t.values), this.__commitNode(o), this.value = n
                    }
                }
                __commitIterable(t) {
                    Array.isArray(this.value) || (this.value = [], this.clear());
                    const e = this.value;
                    let n, o = 0;
                    for (const r of t) void 0 === (n = e[o]) && (n = new P(this.options), e.push(n), 0 === o ? n.appendIntoPart(this) : n.insertAfterPart(e[o - 1])), n.setValue(r), n.commit(), o++;
                    o < e.length && (e.length = o, this.clear(n && n.endNode))
                }
                clear(t = this.startNode) {
                    m(this.startNode.parentNode, t.nextSibling, this.endNode)
                }
            }
            class O {
                constructor(t, e, n) {
                    if (this.value = void 0, this.__pendingValue = void 0, 2 !== n.length || "" !== n[0] || "" !== n[1]) throw new Error("Boolean attributes can only contain a single expression");
                    this.element = t, this.name = e, this.strings = n
                }
                setValue(t) {
                    this.__pendingValue = t
                }
                commit() {
                    for (; h(this.__pendingValue);) {
                        const t = this.__pendingValue;
                        this.__pendingValue = g, t(this)
                    }
                    if (this.__pendingValue === g) return;
                    const t = !!this.__pendingValue;
                    this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = t), this.__pendingValue = g
                }
            }
            class N extends D {
                constructor(t, e, n) {
                    super(t, e, n), this.single = 2 === n.length && "" === n[0] && "" === n[1]
                }
                _createPart() {
                    return new R(this)
                }
                _getValue() {
                    return this.single ? this.parts[0].value : super._getValue()
                }
                commit() {
                    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue())
                }
            }
            class R extends I {}
            let H = !1;
            try {
                const t = {
                    get capture() {
                        return H = !0, !1
                    }
                };
                window.addEventListener("test", t, t), window.removeEventListener("test", t, t)
            } catch (Ci) {}
            class q {
                constructor(t, e, n) {
                    this.value = void 0, this.__pendingValue = void 0, this.element = t, this.eventName = e, this.eventContext = n, this.__boundHandleEvent = (t => this.handleEvent(t))
                }
                setValue(t) {
                    this.__pendingValue = t
                }
                commit() {
                    for (; h(this.__pendingValue);) {
                        const t = this.__pendingValue;
                        this.__pendingValue = g, t(this)
                    }
                    if (this.__pendingValue === g) return;
                    const t = this.__pendingValue,
                        e = this.value,
                        n = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive),
                        o = null != t && (null == e || n);
                    n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), o && (this.__options = F(t), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = t, this.__pendingValue = g
                }
                handleEvent(t) {
                    "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
                }
            }
            const F = t => t && (H ? {
                capture: t.capture,
                passive: t.passive,
                once: t.once
            } : t.capture);
            const U = new class {
                handleAttributeExpressions(t, e, n, o) {
                    const r = e[0];
                    return "." === r ? new N(t, e.slice(1), n).parts : "@" === r ? [new q(t, e.slice(1), o.eventContext)] : "?" === r ? [new O(t, e.slice(1), n)] : new D(t, e, n).parts
                }
                handleTextExpression(t) {
                    return new P(t)
                }
            };

            function V(t) {
                let e = W.get(t.type);
                void 0 === e && (e = {
                    stringsArray: new WeakMap,
                    keyString: new Map
                }, W.set(t.type, e));
                let n = e.stringsArray.get(t.strings);
                if (void 0 !== n) return n;
                const o = t.strings.join(w);
                return void 0 === (n = e.keyString.get(o)) && (n = new _(t, t.getTemplateElement()), e.keyString.set(o, n)), e.stringsArray.set(t.strings, n), n
            }
            const W = new Map,
                B = new WeakMap;
            t("c", (t, e, n) => {
                let o = B.get(e);
                void 0 === o && (m(e, e.firstChild), B.set(e, o = new P(Object.assign({
                    templateFactory: V
                }, n))), o.appendInto(e)), o.setValue(t), o.commit()
            });
            (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.1.2");
            t("a", (t, ...e) => new C(t, e, "html", U));

            function X() {
                if (!(this instanceof X)) return new X;
                this.size = 0, this.uid = 0, this.selectors = [], this.indexes = Object.create(this.indexes), this.activeIndexes = []
            }
            var $ = window.document.documentElement,
                G = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector;
            X.prototype.matchesSelector = function(t, e) {
                return G.call(t, e)
            }, X.prototype.querySelectorAll = function(t, e) {
                return e.querySelectorAll(t)
            }, X.prototype.indexes = [];
            var K = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            X.prototype.indexes.push({
                name: "ID",
                selector: function(t) {
                    var e;
                    if (e = t.match(K)) return e[0].slice(1)
                },
                element: function(t) {
                    if (t.id) return [t.id]
                }
            });
            var Y = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            X.prototype.indexes.push({
                name: "CLASS",
                selector: function(t) {
                    var e;
                    if (e = t.match(Y)) return e[0].slice(1)
                },
                element: function(t) {
                    var e = t.className;
                    if (e) {
                        if ("string" == typeof e) return e.split(/\s/);
                        if ("object" == typeof e && "baseVal" in e) return e.baseVal.split(/\s/)
                    }
                }
            });
            var z, J = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            X.prototype.indexes.push({
                name: "TAG",
                selector: function(t) {
                    var e;
                    if (e = t.match(J)) return e[0].toUpperCase()
                },
                element: function(t) {
                    return [t.nodeName.toUpperCase()]
                }
            }), X.prototype.indexes.default = {
                name: "UNIVERSAL",
                selector: function() {
                    return !0
                },
                element: function() {
                    return [!0]
                }
            }, z = "function" == typeof window.Map ? window.Map : function() {
                function t() {
                    this.map = {}
                }
                return t.prototype.get = function(t) {
                    return this.map[t + " "]
                }, t.prototype.set = function(t, e) {
                    this.map[t + " "] = e
                }, t
            }();
            var Q = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

            function Z(t, e) {
                var n, o, r, i, s, a, c = (t = t.slice(0).concat(t.default)).length,
                    l = e,
                    u = [];
                do {
                    if (Q.exec(""), (r = Q.exec(l)) && (l = r[3], r[2] || !l))
                        for (n = 0; n < c; n++)
                            if (s = (a = t[n]).selector(r[1])) {
                                for (o = u.length, i = !1; o--;)
                                    if (u[o].index === a && u[o].key === s) {
                                        i = !0;
                                        break
                                    }
                                i || u.push({
                                    index: a,
                                    key: s
                                });
                                break
                            }
                } while (r);
                return u
            }

            function tt(t, e) {
                var n, o, r;
                for (n = 0, o = t.length; n < o; n++)
                    if (r = t[n], e.isPrototypeOf(r)) return r
            }

            function et(t, e) {
                return t.id - e.id
            }
            X.prototype.logDefaultIndexUsed = function() {}, X.prototype.add = function(t, e) {
                var n, o, r, i, s, a, c, l, u = this.activeIndexes,
                    d = this.selectors;
                if ("string" == typeof t) {
                    for (n = {
                            id: this.uid++,
                            selector: t,
                            data: e
                        }, c = Z(this.indexes, t), o = 0; o < c.length; o++) i = (l = c[o]).key, (s = tt(u, r = l.index)) || ((s = Object.create(r)).map = new z, u.push(s)), r === this.indexes.default && this.logDefaultIndexUsed(n), (a = s.map.get(i)) || (a = [], s.map.set(i, a)), a.push(n);
                    this.size++, d.push(t)
                }
            }, X.prototype.remove = function(t, e) {
                if ("string" == typeof t) {
                    var n, o, r, i, s, a, c, l, u = this.activeIndexes,
                        d = {},
                        f = 1 === arguments.length;
                    for (n = Z(this.indexes, t), r = 0; r < n.length; r++)
                        for (o = n[r], i = u.length; i--;)
                            if (a = u[i], o.index.isPrototypeOf(a)) {
                                if (c = a.map.get(o.key))
                                    for (s = c.length; s--;)(l = c[s]).selector !== t || !f && l.data !== e || (c.splice(s, 1), d[l.id] = !0);
                                break
                            }
                    this.size -= Object.keys(d).length
                }
            }, X.prototype.queryAll = function(t) {
                if (!this.selectors.length) return [];
                var e, n, o, r, i, s, a, c, l = {},
                    u = [],
                    d = this.querySelectorAll(this.selectors.join(", "), t);
                for (e = 0, o = d.length; e < o; e++)
                    for (i = d[e], n = 0, r = (s = this.matches(i)).length; n < r; n++) l[(c = s[n]).id] ? a = l[c.id] : (a = {
                        id: c.id,
                        selector: c.selector,
                        data: c.data,
                        elements: []
                    }, l[c.id] = a, u.push(a)), a.elements.push(i);
                return u.sort(et)
            }, X.prototype.matches = function(t) {
                if (!t) return [];
                var e, n, o, r, i, s, a, c, l, u, d, f = this.activeIndexes,
                    h = {},
                    p = [];
                for (e = 0, r = f.length; e < r; e++)
                    if (c = (a = f[e]).element(t))
                        for (n = 0, i = c.length; n < i; n++)
                            if (l = a.map.get(c[n]))
                                for (o = 0, s = l.length; o < s; o++) !h[d = (u = l[o]).id] && this.matchesSelector(t, u.selector) && (h[d] = !0, p.push(u));
                return p.sort(et)
            };
            var nt = {},
                ot = {},
                rt = new WeakMap,
                it = new WeakMap,
                st = new WeakMap,
                at = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");

            function ct(t, e, n) {
                var o = t[e];
                return t[e] = function() {
                    return n.apply(t, arguments), o.apply(t, arguments)
                }, t
            }

            function lt() {
                rt.set(this, !0)
            }

            function ut() {
                rt.set(this, !0), it.set(this, !0)
            }

            function dt() {
                return st.get(this) || null
            }

            function ft(t, e) {
                at && Object.defineProperty(t, "currentTarget", {
                    configurable: !0,
                    enumerable: !0,
                    get: e || at.get
                })
            }

            function ht(t) {
                var e = (1 === t.eventPhase ? ot : nt)[t.type];
                if (e) {
                    var n = function(t, e, n) {
                        var o = [],
                            r = e;
                        do {
                            if (1 !== r.nodeType) break;
                            var i = t.matches(r);
                            if (i.length) {
                                var s = {
                                    node: r,
                                    observers: i
                                };
                                n ? o.unshift(s) : o.push(s)
                            }
                        } while (r = r.parentElement);
                        return o
                    }(e, t.target, 1 === t.eventPhase);
                    if (n.length) {
                        ct(t, "stopPropagation", lt), ct(t, "stopImmediatePropagation", ut), ft(t, dt);
                        for (var o = 0, r = n.length; o < r && !rt.get(t); o++) {
                            var i = n[o];
                            st.set(t, i.node);
                            for (var s = 0, a = i.observers.length; s < a && !it.get(t); s++) i.observers[s].data.call(i.node, t)
                        }
                        st.delete(t), ft(t)
                    }
                }
            }

            function pt(t, e, n) {
                var o = !!(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}).capture,
                    r = o ? ot : nt,
                    i = r[t];
                i || (i = new X, r[t] = i, document.addEventListener(t, ht, o)), i.add(e, n)
            }

            function mt(t, e, n) {
                return t.dispatchEvent(new CustomEvent(e, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: n
                }))
            }
            class gt extends Error {
                constructor(t, e) {
                    super(`${t} for HTTP ${e.status}`), this.response = e
                }
            }

            function vt(t, e) {
                const n = t.createElement("template");
                return n.innerHTML = e, t.importNode(n.content, !0)
            }
            class wt extends Error {
                constructor(t) {
                    super(), this.response = t, this.framesToPop = 1
                }
            }
            const bt = window.AbortError || class extends Error {};

            function yt(t, e) {
                if (t.status >= 200 && t.status < 300) return t; {
                    const n = t.statusText ? ` ${t.statusText}` : "";
                    throw e.message = `HTTP ${t.status}${n}`, e
                }
            }

            function Et(t, e) {
                const n = e ? Object.assign({}, e) : {};
                n.credentials || (n.credentials = "same-origin");
                const o = new Request(t, n);
                if (o.headers.append("X-Requested-With", "XMLHttpRequest"), /#csrf-token=/.test(o.url)) throw new TypeError("URL with encoded CSRF token was passed to fetch() without using the csrfRequest(url) helper");
                return o
            }
            async function _t(t, e) {
                const n = await self.fetch(t);
                if (e && e.aborted) throw new bt("The operation was aborted");
                return n
            }
            async function Tt(t, e) {
                const n = Et(t, e),
                    o = await _t(n, e && e.signal);
                return yt(o, new wt(o)), o
            }
            async function xt(t, e) {
                const n = Et(t, e),
                    o = await _t(n, e && e.signal);
                return yt(o, new wt(o)), o.text()
            }
            async function kt(t, e, n) {
                const o = Et(e, n),
                    r = await _t(o, n && n.signal);
                return yt(r, new wt(r)),
                    function(t, e) {
                        const n = e.headers.get("content-type") || "";
                        if (!n.startsWith("text/html")) throw new gt(`expected response with text/html, but was ${n}`, e);
                        const o = e.headers.get("x-html-safe");
                        if (!o) throw new gt("missing X-HTML-Safe nonce", e);
                        if (o !== t) throw new gt("response X-HTML-Safe nonce did not match", e)
                    }(function(t) {
                        const e = t.querySelector("meta[name=html-safe-nonce]");
                        if (null == e || !(e instanceof HTMLMetaElement)) throw new Error("could not find html-safe-nonce on document");
                        const n = e.content;
                        if (n) return n;
                        throw new Error("could not find html-safe-nonce on document")
                    }(t), r), vt(t, await r.text())
            }
            var Lt = null,
                At = null,
                St = [];

            function Ct(t, e) {
                var n = [];

                function o() {
                    var t = n;
                    n = [], e(t)
                }
                return function() {
                    for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                    n.push(r), 1 === n.length && jt(t, o)
                }
            }

            function jt(t, e) {
                At || (At = new MutationObserver(Mt)), Lt || (Lt = t.createElement("div"), At.observe(Lt, {
                    attributes: !0
                })), St.push(e), Lt.setAttribute("data-twiddle", "" + Date.now())
            }

            function Mt() {
                var t = St;
                St = [];
                for (var e = 0; e < t.length; e++) try {
                    t[e]()
                } catch (n) {
                    setTimeout(function() {
                        throw n
                    }, 0)
                }
            }
            var Dt = new WeakMap,
                It = new WeakMap,
                Pt = new WeakMap,
                Ot = new WeakMap;

            function Nt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n],
                        r = o[0],
                        i = o[1],
                        s = o[2];
                    r === Wt ? (Rt(s, i), Ht(s, i)) : r === Bt ? qt(s, i) : r === Xt && Ft(t.observers, i)
                }
            }

            function Rt(t, e) {
                if (e instanceof t.elementConstructor) {
                    var n = Dt.get(e);
                    if (n || (n = [], Dt.set(e, n)), -1 === n.indexOf(t.id)) {
                        var o = void 0;
                        if (t.initialize && (o = t.initialize.call(void 0, e)), o) {
                            var r = It.get(e);
                            r || (r = {}, It.set(e, r)), r["" + t.id] = o
                        }
                        n.push(t.id)
                    }
                }
            }

            function Ht(t, e) {
                if (e instanceof t.elementConstructor) {
                    var n = Ot.get(e);
                    if (n || (n = [], Ot.set(e, n)), -1 === n.indexOf(t.id)) {
                        t.elements.push(e);
                        var o = It.get(e),
                            r = o ? o["" + t.id] : null;
                        if (r && r.add && r.add.call(void 0, e), t.subscribe) {
                            var i = t.subscribe.call(void 0, e);
                            if (i) {
                                var s = Pt.get(e);
                                s || (s = {}, Pt.set(e, s)), s["" + t.id] = i
                            }
                        }
                        t.add && t.add.call(void 0, e), n.push(t.id)
                    }
                }
            }

            function qt(t, e) {
                if (e instanceof t.elementConstructor) {
                    var n = Ot.get(e);
                    if (n) {
                        var o = t.elements.indexOf(e);
                        if (-1 !== o && t.elements.splice(o, 1), -1 !== (o = n.indexOf(t.id))) {
                            var r = It.get(e),
                                i = r ? r["" + t.id] : null;
                            if (i && i.remove && i.remove.call(void 0, e), t.subscribe) {
                                var s = Pt.get(e),
                                    a = s ? s["" + t.id] : null;
                                a && a.unsubscribe && a.unsubscribe()
                            }
                            t.remove && t.remove.call(void 0, e), n.splice(o, 1)
                        }
                        0 === n.length && Ot.delete(e)
                    }
                }
            }

            function Ft(t, e) {
                var n = Ot.get(e);
                if (n) {
                    for (var o = n.slice(0), r = 0; r < o.length; r++) {
                        var i = t[o[r]];
                        if (i) {
                            var s = i.elements.indexOf(e); - 1 !== s && i.elements.splice(s, 1);
                            var a = It.get(e),
                                c = a ? a["" + i.id] : null;
                            c && c.remove && c.remove.call(void 0, e);
                            var l = Pt.get(e),
                                u = l ? l["" + i.id] : null;
                            u && u.unsubscribe && u.unsubscribe(), i.remove && i.remove.call(void 0, e)
                        }
                    }
                    Ot.delete(e)
                }
            }
            var Ut = null;

            function Vt(t) {
                return "matches" in t || "webkitMatchesSelector" in t || "mozMatchesSelector" in t || "oMatchesSelector" in t || "msMatchesSelector" in t
            }
            var Wt = 1,
                Bt = 2,
                Xt = 3;

            function $t(t, e, n) {
                for (var o = 0; o < n.length; o++) {
                    var r = n[o];
                    "childList" === r.type ? (Gt(t, e, r.addedNodes), Kt(t, e, r.removedNodes)) : "attributes" === r.type && Yt(t, e, r.target)
                }(function(t) {
                    if (null === Ut) {
                        var e = t.createElement("div"),
                            n = t.createElement("div"),
                            o = t.createElement("div");
                        e.appendChild(n), n.appendChild(o), e.innerHTML = "", Ut = o.parentNode !== n
                    }
                    return Ut
                })(t.ownerDocument) && function(t, e) {
                    for (var n = 0; n < t.observers.length; n++) {
                        var o = t.observers[n];
                        if (o)
                            for (var r = o.elements, i = 0; i < r.length; i++) {
                                var s = r[i];
                                s.parentNode || e.push([Xt, s])
                            }
                    }
                }(t, e)
            }

            function Gt(t, e, n) {
                for (var o = 0; o < n.length; o++) {
                    var r = n[o];
                    if (Vt(r))
                        for (var i = t.selectorSet.matches(r), s = 0; s < i.length; s++) {
                            var a = i[s].data;
                            e.push([Wt, r, a])
                        }
                    if ("querySelectorAll" in r)
                        for (var c = t.selectorSet.queryAll(r), l = 0; l < c.length; l++)
                            for (var u = c[l], d = u.data, f = u.elements, h = 0; h < f.length; h++) e.push([Wt, f[h], d])
                }
            }

            function Kt(t, e, n) {
                for (var o = 0; o < n.length; o++) {
                    var r = n[o];
                    if ("querySelectorAll" in r) {
                        e.push([Xt, r]);
                        for (var i = r.querySelectorAll("*"), s = 0; s < i.length; s++) e.push([Xt, i[s]])
                    }
                }
            }

            function Yt(t, e, n) {
                if (Vt(n))
                    for (var o = t.selectorSet.matches(n), r = 0; r < o.length; r++) {
                        var i = o[r].data;
                        e.push([Wt, n, i])
                    }
                if ("querySelectorAll" in n) {
                    var s = Ot.get(n);
                    if (s)
                        for (var a = 0; a < s.length; a++) {
                            var c = t.observers[s[a]];
                            c && (t.selectorSet.matchesSelector(n, c.selector) || e.push([Bt, n, c]))
                        }
                }
            }
            var zt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                Jt = 0;

            function Qt(t) {
                var e, n, o;
                this.rootNode = 9 === t.nodeType ? t.documentElement : t, this.ownerDocument = 9 === t.nodeType ? t : t.ownerDocument, this.observers = [], this.selectorSet = new X, this.mutationObserver = new MutationObserver(function(t, e) {
                    var n = [];
                    $t(t, n, e), Nt(t, n)
                }.bind(this, this)), this._scheduleAddRootNodes = Ct(this.ownerDocument, function(t) {
                    var e = [];
                    Gt(t, e, [t.rootNode]), Nt(t, e)
                }.bind(this, this)), this._handleThrottledChangedTargets = Ct(this.ownerDocument, function(t, e) {
                    var n = [];
                    (function(t, e, n) {
                        for (var o = 0; o < n.length; o++)
                            for (var r = n[o], i = r.form ? r.form.elements : t.rootNode.querySelectorAll("input"), s = 0; s < i.length; s++) Yt(t, e, i[s])
                    })(t, n, e), Nt(t, n)
                }.bind(this, this)), this.rootNode.addEventListener("change", function(t, e) {
                    t._handleThrottledChangedTargets(e.target)
                }.bind(this, this), !1), e = this.ownerDocument, n = function(t) {
                    t.mutationObserver.observe(t.rootNode, {
                        childList: !0,
                        attributes: !0,
                        subtree: !0
                    }), t._scheduleAddRootNodes()
                }.bind(this, this), "interactive" === (o = e.readyState) || "complete" === o ? jt(e, n) : e.addEventListener("DOMContentLoaded", jt(e, n))
            }
            Qt.prototype.disconnect = function() {
                this.mutationObserver.disconnect()
            }, Qt.prototype.observe = function(t, e) {
                var n = void 0;
                "function" == typeof e ? n = {
                    selector: t,
                    initialize: e
                } : "object" === (void 0 === e ? "undefined" : zt(e)) ? (n = e).selector = t : n = t;
                var o = this,
                    r = {
                        id: Jt++,
                        selector: n.selector,
                        initialize: n.initialize,
                        add: n.add,
                        remove: n.remove,
                        subscribe: n.subscribe,
                        elements: [],
                        elementConstructor: n.hasOwnProperty("constructor") ? n.constructor : this.ownerDocument.defaultView.Element,
                        abort: function() {
                            o._abortObserving(r)
                        }
                    };
                return this.selectorSet.add(r.selector, r), this.observers[r.id] = r, this._scheduleAddRootNodes(), r
            }, Qt.prototype._abortObserving = function(t) {
                for (var e = t.elements, n = 0; n < e.length; n++) qt(t, e[n]);
                this.selectorSet.remove(t.selector, t), delete this.observers[t.id]
            }, Qt.prototype.triggerObservers = function(t) {
                var e = [];
                ! function(t, e, n) {
                    if ("querySelectorAll" in n) {
                        Yt(t, e, n);
                        for (var o = n.querySelectorAll("*"), r = 0; r < o.length; r++) Yt(t, e, o[r])
                    }
                }(this, e, t), Nt(this, e)
            };
            var Zt = void 0;

            function te() {
                var t;
                return (Zt || (Zt = new Qt(window.document)), t = Zt).observe.apply(t, arguments)
            }

            function ee(t, e) {
                const n = t.head;
                if (!n) return "";
                for (const o of n.getElementsByTagName("meta"))
                    if (o.name === e) return o.content;
                return ""
            }

            function ne(t) {
                const e = ee(t, "expected-hostname");
                return !!e && e.replace(/\.$/, "").split(".").slice(-2).join(".") !== t.location.hostname.replace(/\.$/, "").split(".").slice(-2).join(".")
            }
            const oe = t("a4", "interactive" === document.readyState || "complete" === document.readyState ? Promise.resolve() : new Promise(t => {
                    document.addEventListener("DOMContentLoaded", () => {
                        t()
                    })
                })),
                re = t("k", "complete" === document.readyState ? Promise.resolve() : new Promise(t => {
                    window.addEventListener("load", t)
                }));
            let ie = [];

            function se(t, e = !1) {
                void 0 === t.timestamp && (t.timestamp = (new Date).getTime()), ie.push(t), e ? ce() : async function() {
                    await re, null == ae && (ae = window.requestIdleCallback(ce))
                }()
            }
            let ae = null;

            function ce() {
                if (ae = null, ne(document)) return;
                const t = ee(document, "browser-stats-url");
                if (!t) return;
                const e = JSON.stringify({
                    stats: ie
                });
                navigator.sendBeacon && navigator.sendBeacon(t, e), ie = []
            }
            var le;
            le = "function" == typeof FormData && "entries" in FormData.prototype ? function(t) {
                return Array.from(new FormData(t).entries())
            } : function(t) {
                for (var e = [], n = t.elements, o = 0; o < n.length; o++) {
                    var r = n[o],
                        i = r.tagName.toUpperCase();
                    if ("SELECT" === i || "TEXTAREA" === i || "INPUT" === i) {
                        var s = r.type,
                            a = r.name;
                        if (a && !r.disabled && "submit" !== s && "reset" !== s && "button" !== s && ("radio" !== s && "checkbox" !== s || r.checked))
                            if ("SELECT" === i)
                                for (var c = r.getElementsByTagName("option"), l = 0; l < c.length; l++) {
                                    var u = c[l];
                                    u.selected && e.push([a, u.value])
                                } else "file" === s ? (console.warn("form-data-entries could not serialize <input type=file>", r), e.push([a, ""])) : e.push([a, r.value])
                    }
                }
                return e
            };
            var ue = t("ay", le);

            function de(t) {
                const e = t.closest("form");
                if (!(e instanceof HTMLFormElement)) return;
                let n = fe(e);
                if (t.name) {
                    const o = t.matches("input[type=submit]") ? "Submit" : "",
                        r = t.value || o;
                    n || ((n = document.createElement("input")).type = "hidden", n.classList.add("is-submit-button-value"), e.prepend(n)), n.name = t.name, n.value = r
                } else n && n.remove()
            }

            function fe(t) {
                const e = t.querySelector("input.is-submit-button-value");
                return e instanceof HTMLInputElement ? e : null
            }

            function he(t, e, n) {
                return t.dispatchEvent(new CustomEvent(e, {
                    bubbles: !0,
                    cancelable: n
                }))
            }

            function pe(t, e) {
                e && (! function(t, e) {
                    if (!(t instanceof HTMLFormElement)) throw new TypeError("The specified element is not of type HTMLFormElement.");
                    if (!(e instanceof HTMLElement)) throw new TypeError("The specified element is not of type HTMLElement.");
                    if ("submit" !== e.type) throw new TypeError("The specified element is not a submit button.");
                    if (!t || t !== e.form) throw new Error("The specified element is not owned by the form element.")
                }(t, e), de(e)), he(t, "submit", !0) && t.submit()
            }

            function me(t) {
                if (!(t instanceof HTMLElement)) return !1;
                const e = t.nodeName.toLowerCase(),
                    n = (t.getAttribute("type") || "").toLowerCase();
                return "select" === e || "textarea" === e || "input" === e && "submit" !== n && "reset" !== n || t.isContentEditable
            }

            function ge(t) {
                const e = new URLSearchParams;
                for (const [n, o] of ue(t)) e.append(n, o);
                return e.toString()
            }
            pt("click", "[data-hydro-click]", function(t) {
                const e = t.currentTarget;
                se({
                    hydroEventPayload: e.getAttribute("data-hydro-click") || "",
                    hydroEventHmac: e.getAttribute("data-hydro-click-hmac") || "",
                    hydroClientContext: e.getAttribute("data-hydro-client-context") || ""
                }, !0)
            });
            let ve = !1;
            const we = new X;

            function be(t) {
                const e = t.target;
                if (e instanceof HTMLElement && e.nodeType !== Node.DOCUMENT_NODE)
                    for (const n of we.matches(e)) n.data.call(null, e)
            }

            function ye(t, e) {
                ve || (ve = !0, document.addEventListener("focus", be, !0)), we.add(t, e), document.activeElement && document.activeElement.matches(t) && e(document.activeElement)
            }
            const Ee = [];
            let _e, Te, xe = 0;

            function ke() {
                return _e
            }

            function Le() {
                try {
                    return Math.min(Math.max(0, history.length) || 0, 9007199254740991)
                } catch (sn) {
                    return 0
                }
            }

            function Ae() {
                return Le() - 1 + xe
            }

            function Se(t) {
                _e = t;
                const e = location.href;
                Ee[Ae()] = {
                    url: e,
                    state: _e
                }, Ee.length = Le(), window.dispatchEvent(new CustomEvent("statechange", {
                    bubbles: !1,
                    cancelable: !1
                }))
            }

            function Ce() {
                return (new Date).getTime()
            }

            function je(t, e, n) {
                xe = 0;
                const o = Object.assign({}, {
                    _id: Ce()
                }, t);
                history.pushState(o, e, n), Se(o)
            }

            function Me(t, e, n) {
                const o = Object.assign({}, {
                    _id: ke()._id
                }, t);
                history.replaceState(o, e, n), Se(o)
            }

            function De(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = [],
                        o = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var s, a = t[Symbol.iterator](); !(o = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); o = !0);
                    } catch (c) {
                        r = !0, i = c
                    } finally {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return n
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            _e = function() {
                const t = {
                    _id: (new Date).getTime()
                };
                return Se(t), t
            }(), window.addEventListener("popstate", function(t) {
                const e = t.state;
                e && e._id && (e._id < ke()._id ? xe-- : xe++, Se(e))
            }, !0), window.addEventListener("hashchange", function() {
                if (Le() > Ee.length) {
                    const t = {
                        _id: Ce()
                    };
                    history.replaceState(t, "", location.href), Se(t)
                }
            }, !0);
            class Ie extends Error {
                constructor(t, e) {
                    super(t), this.response = e
                }
            }

            function Pe() {
                let t, e;
                return [new Promise(function(n, o) {
                    t = n, e = o
                }), t, e]
            }
            const Oe = [],
                Ne = [];

            function Re(t, e) {
                Te || (Te = new X, document.addEventListener("submit", He)), Te.add(t, e)
            }

            function He(t) {
                if (!(t.target instanceof HTMLFormElement)) return;
                const e = t.target,
                    n = Te && Te.matches(e);
                if (!n || 0 === n.length) return;
                const o = function(t) {
                        const e = {
                            method: t.method || "GET",
                            url: t.action,
                            headers: new Headers({
                                "X-Requested-With": "XMLHttpRequest"
                            }),
                            body: null
                        };
                        if ("GET" === e.method.toUpperCase()) {
                            const n = function(t) {
                                const e = new URLSearchParams;
                                for (const o of ue(t)) {
                                    var n = De(o, 2);
                                    const t = n[0],
                                        r = n[1];
                                    e.append(t, r)
                                }
                                return e.toString()
                            }(t);
                            n && (e.url += (~e.url.indexOf("?") ? "&" : "?") + n)
                        } else e.body = new FormData(t);
                        return e
                    }(e),
                    r = De(Pe(), 3),
                    i = r[0],
                    s = r[1],
                    a = r[2];
                t.preventDefault(), async function(t, e, n, o) {
                    let r = !1;
                    for (const i of t) {
                        const t = Pe(),
                            s = De(t, 2),
                            a = s[0],
                            c = s[1],
                            l = () => (r = !0, c(), o),
                            u = {
                                text: l,
                                json: () => (n.headers.set("Accept", "application/json"), l()),
                                html: () => (n.headers.set("Accept", "text/html"), l())
                            };
                        await Promise.race([a, i.data.call(null, e, u, n)])
                    }
                    return r
                }(n, e, o, i).then(async t => {
                    if (t) {
                        for (const t of Ne) await t(e);
                        (async function(t) {
                            const e = await window.fetch(t.url, {
                                    method: t.method,
                                    body: null !== t.body ? t.body : void 0,
                                    headers: t.headers,
                                    credentials: "same-origin"
                                }),
                                n = {
                                    url: e.url,
                                    status: e.status,
                                    statusText: e.statusText,
                                    headers: e.headers,
                                    text: "",
                                    get json() {
                                        const t = JSON.parse(this.text);
                                        return delete this.json, this.json = t, this.json
                                    },
                                    get html() {
                                        return delete this.html, this.html = function(t, e) {
                                            const n = t.createElement("template");
                                            return n.innerHTML = e, t.importNode(n.content, !0)
                                        }(document, this.text), this.html
                                    }
                                },
                                o = await e.text();
                            if (n.text = o, e.ok) return n;
                            throw new Ie("request failed", n)
                        })(o).then(s, a).catch(() => {}).then(() => {
                            for (const t of Oe) t(e)
                        })
                    } else e.submit()
                }, t => {
                    e.submit(), setTimeout(() => {
                        throw t
                    })
                })
            }

            function qe(t, e = 0, {
                start: n = !0,
                middle: o = !0,
                once: r = !1
            } = {}) {
                var i, s = 0,
                    a = !1,
                    c = function c(...l) {
                        if (!a) {
                            var u = Date.now() - s;
                            s = Date.now(), n ? (n = !1, t(...l), r && c.cancel()) : (o && u < e || !o) && (clearTimeout(i), i = setTimeout(function() {
                                s = Date.now(), t(...l), r && c.cancel()
                            }, o ? e - u : e))
                        }
                    };
                return c.cancel = function() {
                    clearTimeout(i), a = !0
                }, c
            }
            async function Fe(t) {
                const e = l(document, "#site-details-dialog", HTMLTemplateElement).content.cloneNode(!0);
                if (!(e instanceof DocumentFragment)) throw new Error("invariant violation: clonedDetails instanceof HTMLElement");
                const n = l(e, "details"),
                    o = l(n, "details-dialog"),
                    r = l(n, ".js-details-dialog-spinner");
                if (t.detailsClass && n.classList.add(...t.detailsClass.split(" ")), t.dialogClass && o.classList.add(...t.dialogClass.split(" ")), !document.body) throw new Error("invariant violation: document.body");
                document.body.append(e);
                const i = await t.content;
                return r.remove(), o.prepend(i), n.addEventListener("toggle", () => {
                    n.hasAttribute("open") || (mt(o, "dialog:remove"), n.remove())
                }), o
            }
            class Ue extends CustomEvent {
                constructor(t, e) {
                    super(t, e), this.relatedTarget = e.relatedTarget
                }
            }
            const Ve = new WeakMap;

            function We(t, e) {
                const n = new XMLHttpRequest;
                return n.open("GET", e, !0), n.setRequestHeader("Accept", "text/html; fragment"),
                    function(t, e) {
                        const n = Ve.get(t);
                        n && n.abort();
                        Ve.set(t, e);
                        const o = () => Ve.delete(t),
                            r = function(t) {
                                return new Promise((e, n) => {
                                    t.onload = function() {
                                        t.status >= 200 && t.status < 300 ? e(t.responseText) : n(new Error(t.responseText))
                                    }, t.onerror = n, t.send()
                                })
                            }(e);
                        return r.then(o, o), r
                    }(t, n)
            }

            function Be(t, e) {
                (function(t, e) {
                    const n = t.scrollTop,
                        o = n + t.clientHeight,
                        r = e.offsetTop,
                        i = r + e.clientHeight;
                    return r >= n && i <= o
                })(t, e) || (t.scrollTop = e.offsetTop)
            }
            let Xe = !1;
            const $e = !!navigator.userAgent.match(/Macintosh/);

            function Ge(t) {
                if (t.shiftKey || t.metaKey || t.altKey) return;
                const e = t.currentTarget;
                if (!(e instanceof HTMLTextAreaElement || e instanceof HTMLInputElement)) return;
                if (Xe) return;
                const n = document.getElementById(e.getAttribute("aria-owns") || "");
                if (n) switch (t.key) {
                    case "Enter":
                    case "Tab":
                        (function(t, e) {
                            const n = e.querySelector('[aria-selected="true"]');
                            return !(!n || "true" !== n.getAttribute("aria-disabled") && (n.click(), 0))
                        })(0, n) && t.preventDefault();
                        break;
                    case "Escape":
                        ze(e, n);
                        break;
                    case "ArrowDown":
                        Ye(e, n, 1), t.preventDefault();
                        break;
                    case "ArrowUp":
                        Ye(e, n, -1), t.preventDefault();
                        break;
                    case "n":
                        $e && t.ctrlKey && (Ye(e, n, 1), t.preventDefault());
                        break;
                    case "p":
                        $e && t.ctrlKey && (Ye(e, n, -1), t.preventDefault())
                }
            }

            function Ke(t) {
                if (!(t.target instanceof Element)) return;
                const e = t.target.closest('[role="option"]');
                e && "true" !== e.getAttribute("aria-disabled") && function(t) {
                    t.dispatchEvent(new CustomEvent("combobox-commit", {
                        bubbles: !0
                    }))
                }(e)
            }

            function Ye(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                const o = e.querySelector('[aria-selected="true"]'),
                    r = Array.from(e.querySelectorAll('[role="option"]')),
                    i = r.indexOf(o);
                let s = 1 === n ? 0 : r.length - 1;
                if (o && i >= 0) {
                    const t = i + n;
                    t >= 0 && t < r.length && (s = t)
                }
                const a = r[s];
                if (a)
                    for (const c of r) a === c ? (t.setAttribute("aria-activedescendant", a.id), a.setAttribute("aria-selected", "true"), Be(e, a)) : c.setAttribute("aria-selected", "false")
            }

            function ze(t, e) {
                t.removeAttribute("aria-activedescendant");
                for (const n of e.querySelectorAll('[aria-selected="true"]')) n.setAttribute("aria-selected", "false")
            }

            function Je(t) {
                const e = t.currentTarget;
                if (!(e instanceof HTMLTextAreaElement || e instanceof HTMLInputElement)) return;
                Xe = "compositionstart" === t.type;
                const n = document.getElementById(e.getAttribute("aria-owns") || "");
                n && ze(e, n)
            }
            class Qe {
                constructor(t, e, n) {
                    this.container = t, this.input = e, this.results = n, this.results.hidden = !0, this.input.setAttribute("autocomplete", "off"), this.input.setAttribute("spellcheck", "false"), this.interactingWithList = !1, this.onInputChange = function(t, e) {
                        let n;
                        return function() {
                            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                            clearTimeout(n), n = setTimeout(() => {
                                clearTimeout(n), t(...r)
                            }, e)
                        }
                    }(this.onInputChange.bind(this), 300), this.onResultsMouseDown = this.onResultsMouseDown.bind(this), this.onInputBlur = this.onInputBlur.bind(this), this.onInputFocus = this.onInputFocus.bind(this), this.onKeydown = this.onKeydown.bind(this), this.onCommit = this.onCommit.bind(this), this.input.addEventListener("keydown", this.onKeydown), this.input.addEventListener("focus", this.onInputFocus), this.input.addEventListener("blur", this.onInputBlur), this.input.addEventListener("input", this.onInputChange), this.results.addEventListener("mousedown", this.onResultsMouseDown), this.results.addEventListener("combobox-commit", this.onCommit)
                }
                destroy() {
                    this.input.removeEventListener("keydown", this.onKeydown), this.input.removeEventListener("focus", this.onInputFocus), this.input.removeEventListener("blur", this.onInputBlur), this.input.removeEventListener("input", this.onInputChange), this.results.removeEventListener("mousedown", this.onResultsMouseDown), this.results.removeEventListener("combobox-commit", this.onCommit)
                }
                sibling(t) {
                    const e = Array.from(this.results.querySelectorAll('[role="option"]')),
                        n = this.results.querySelector('[aria-selected="true"]'),
                        o = e.indexOf(n),
                        r = t ? e[o + 1] : e[o - 1],
                        i = t ? e[0] : e[e.length - 1];
                    return r || i
                }
                onKeydown(t) {
                    "Escape" === t.key && this.container.open && (this.container.open = !1, t.stopPropagation(), t.preventDefault())
                }
                onInputFocus() {
                    this.fetchResults()
                }
                onInputBlur() {
                    this.interactingWithList ? this.interactingWithList = !1 : this.container.open = !1
                }
                onCommit(t) {
                    let {
                        target: e
                    } = t;
                    const n = e;
                    if (!(n instanceof HTMLElement)) return;
                    if (this.container.open = !1, n instanceof HTMLAnchorElement) return;
                    const o = n.getAttribute("data-autocomplete-value") || n.textContent;
                    this.container.value = o
                }
                onResultsMouseDown() {
                    this.interactingWithList = !0
                }
                onInputChange() {
                    this.container.removeAttribute("value"), this.fetchResults()
                }
                identifyOptions() {
                    let t = 0;
                    for (const e of this.results.querySelectorAll('[role="option"]:not([id])')) e.id = "".concat(this.results.id, "-option-").concat(t++)
                }
                fetchResults() {
                    const t = this.input.value.trim();
                    if (!t) return void(this.container.open = !1);
                    const e = this.container.src;
                    if (!e) return;
                    const n = new URL(e, window.location.href),
                        o = new URLSearchParams(n.search.slice(1));
                    o.append("q", t), n.search = o.toString(), this.container.dispatchEvent(new CustomEvent("loadstart")), We(this.input, n.toString()).then(t => {
                        this.results.innerHTML = t, this.identifyOptions();
                        const e = !!this.results.querySelector('[role="option"]');
                        this.container.open = e, this.container.dispatchEvent(new CustomEvent("load")), this.container.dispatchEvent(new CustomEvent("loadend"))
                    }).catch(() => {
                        this.container.dispatchEvent(new CustomEvent("error")), this.container.dispatchEvent(new CustomEvent("loadend"))
                    })
                }
                open() {
                    var t, e;
                    this.results.hidden && (t = this.input, e = this.results, t.addEventListener("compositionstart", Je), t.addEventListener("compositionend", Je), t.addEventListener("keydown", Ge), e.addEventListener("click", Ke), this.results.hidden = !1, this.container.setAttribute("aria-expanded", "true"))
                }
                close() {
                    var t, e;
                    this.results.hidden || (t = this.input, e = this.results, t.removeAttribute("aria-activedescendant"), t.removeEventListener("compositionstart", Je), t.removeEventListener("compositionend", Je), t.removeEventListener("keydown", Ge), e.removeEventListener("click", Ke), this.results.hidden = !0, this.input.removeAttribute("aria-activedescendant"), this.container.setAttribute("aria-expanded", "false"))
                }
            }
            const Ze = new WeakMap;
            class AutocompleteElement extends HTMLElement {
                constructor() {
                    super()
                }
                connectedCallback() {
                    const t = this.getAttribute("aria-owns");
                    if (!t) return;
                    const e = this.querySelector("input"),
                        n = document.getElementById(t);
                    e instanceof HTMLInputElement && n && (e.setAttribute("aria-owns", t), Ze.set(this, new Qe(this, e, n)), this.setAttribute("role", "combobox"), this.setAttribute("aria-haspopup", "listbox"), this.setAttribute("aria-expanded", "false"), e.setAttribute("aria-autocomplete", "list"), e.setAttribute("aria-controls", t), n.setAttribute("role", "listbox"))
                }
                disconnectedCallback() {
                    const t = Ze.get(this);
                    t && (t.destroy(), Ze.delete(this))
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
                get value() {
                    return this.getAttribute("value") || ""
                }
                set value(t) {
                    this.setAttribute("value", t)
                }
                get open() {
                    return this.hasAttribute("open")
                }
                set open(t) {
                    t ? this.setAttribute("open", "") : this.removeAttribute("open")
                }
                static get observedAttributes() {
                    return ["open", "value"]
                }
                attributeChangedCallback(t, e, n) {
                    if (e === n) return;
                    const o = Ze.get(this);
                    if (o) switch (t) {
                        case "open":
                            null === n ? o.close() : o.open();
                            break;
                        case "value":
                            null !== n && (o.input.value = n), this.dispatchEvent(new Ue("auto-complete-change", {
                                bubbles: !0,
                                relatedTarget: o.input
                            }))
                    }
                }
            }
            window.customElements.get("auto-complete") || (window.AutocompleteElement = AutocompleteElement, window.customElements.define("auto-complete", AutocompleteElement)), t("y", AutocompleteElement);
            const tn = new WeakMap;

            function en(t) {
                const e = tn.get(t);
                e && (null != e.timer && clearTimeout(e.timer), e.timer = window.setTimeout(() => {
                    null != e.timer && (e.timer = null), e.inputed = !1, e.listener.call(null, t)
                }, e.wait))
            }

            function nn(t) {
                const {
                    currentTarget: e
                } = t;
                if (!(e && e instanceof Element)) return;
                const n = tn.get(e);
                n && (n.keypressed = !0, null != n.timer && clearTimeout(n.timer))
            }

            function on(t) {
                const {
                    currentTarget: e
                } = t;
                if (!e || !(e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)) return;
                const n = tn.get(e);
                n && (n.keypressed = !1, n.inputed && en(e))
            }

            function rn(t) {
                const {
                    currentTarget: e
                } = t;
                if (!e || !(e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)) return;
                const n = tn.get(e);
                n && (n.inputed = !0, n.keypressed || en(e))
            }

            function sn(t) {
                const e = "==".slice(0, (4 - t.length % 4) % 4),
                    n = t.replace(/-/g, "+").replace(/_/g, "/") + e,
                    o = atob(n),
                    r = new ArrayBuffer(o.length),
                    i = new Uint8Array(r);
                for (let s = 0; s < o.length; s++) i[s] = o.charCodeAt(s);
                return r
            }

            function an(t) {
                const e = new Uint8Array(t);
                let n = "";
                for (const o of e) n += String.fromCharCode(o);
                return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
            }
            const cn = "copy",
                ln = "convert";

            function un(t, e, n) {
                if (e === cn) return n;
                if (e === ln) return t(n);
                if (e instanceof Array) return n.map(n => un(t, e[0], n));
                if (e instanceof Object) {
                    const o = {};
                    for (const [r, i] of Object.entries(e))
                        if (r in n) null != n[r] ? o[r] = un(t, i.schema, n[r]) : o[r] = null;
                        else if (i.required) throw new Error(`Missing key: ${r}`);
                    return o
                }
            }

            function dn(t) {
                return {
                    required: !0,
                    schema: t
                }
            }

            function fn(t) {
                return {
                    required: !1,
                    schema: t
                }
            }
            const hn = {
                    type: dn(cn),
                    id: dn(ln),
                    transports: fn(cn)
                },
                pn = {
                    publicKey: dn({
                        rp: dn(cn),
                        user: dn({
                            id: dn(ln),
                            name: dn(cn),
                            displayName: dn(cn),
                            icon: fn(cn)
                        }),
                        challenge: dn(ln),
                        pubKeyCredParams: dn(cn),
                        timeout: fn(cn),
                        excludeCredentials: fn([hn]),
                        authenticatorSelection: fn(cn),
                        attestation: fn(cn),
                        extensions: fn(cn)
                    }),
                    signal: fn(cn)
                },
                mn = {
                    type: dn(cn),
                    id: dn(cn),
                    rawId: dn(ln),
                    response: dn({
                        clientDataJSON: dn(ln),
                        attestationObject: dn(ln)
                    })
                },
                gn = {
                    mediation: fn(cn),
                    publicKey: dn({
                        challenge: dn(ln),
                        timeout: fn(cn),
                        rpId: fn(cn),
                        allowCredentials: fn([hn]),
                        userVerification: fn(cn),
                        extensions: fn(cn)
                    }),
                    signal: fn(cn)
                },
                vn = {
                    type: dn(cn),
                    id: dn(cn),
                    rawId: dn(ln),
                    response: dn({
                        clientDataJSON: dn(ln),
                        authenticatorData: dn(ln),
                        signature: dn(ln),
                        userHandle: dn(ln)
                    })
                };

            function wn() {
                return !!(navigator.credentials && navigator.credentials.create && navigator.credentials.get && window.PublicKeyCredential)
            }

            function bn() {
                return "true" === ee(document, "u2f-enabled")
            }

            function yn() {
                return !!window.u2f
            }

            function En() {
                return wn() ? "supported" : "unsupported"
            }

            function _n() {
                return "true" === ee(document, "webauthn-registration-enabled") && wn()
            }

            function Tn() {
                return "true" === ee(document, "webauthn-auth-enabled") && wn()
            }
            t("G", {
                report(t) {}
            });
            let xn = !1;
            let kn = !1;
            Re(".js-sudo-form", async function(t, e) {
                    try {
                        await e.text()
                    } catch (n) {
                        if (!n.response) throw n;
                        let e;
                        switch (n.response.status) {
                            case 401:
                                e = "Incorrect password.";
                                break;
                            case 429:
                                e = "Too many password attempts. Please wait and try again later.";
                                break;
                            default:
                                e = "Failed to receive a response. Please try again later."
                        }
                        return l(t, ".js-sudo-error").textContent = e, l(t, ".js-sudo-error").hidden = !1, void(l(t, ".js-sudo-password", HTMLInputElement).value = "")
                    }
                    kn = !0, c(t, "details").removeAttribute("open")
                }),
                function() {
                    var t = "chrome" in window && window.navigator.userAgent.indexOf("Edge") < 0;
                    if (!("u2f" in window) && t) {
                        var e, n = window.u2f = {};
                        n.EXTENSION_ID = "kmendfapggjehodndflmmgagdbamhnfd", n.MessageTypes = {
                            U2F_REGISTER_REQUEST: "u2f_register_request",
                            U2F_REGISTER_RESPONSE: "u2f_register_response",
                            U2F_SIGN_REQUEST: "u2f_sign_request",
                            U2F_SIGN_RESPONSE: "u2f_sign_response",
                            U2F_GET_API_VERSION_REQUEST: "u2f_get_api_version_request",
                            U2F_GET_API_VERSION_RESPONSE: "u2f_get_api_version_response"
                        }, n.ErrorCodes = {
                            OK: 0,
                            OTHER_ERROR: 1,
                            BAD_REQUEST: 2,
                            CONFIGURATION_UNSUPPORTED: 3,
                            DEVICE_INELIGIBLE: 4,
                            TIMEOUT: 5
                        }, n.getMessagePort = function(t) {
                            if ("undefined" != typeof chrome && chrome.runtime) {
                                var e = {
                                    type: n.MessageTypes.U2F_SIGN_REQUEST,
                                    signRequests: []
                                };
                                chrome.runtime.sendMessage(n.EXTENSION_ID, e, function() {
                                    chrome.runtime.lastError ? n.getIframePort_(t) : n.getChromeRuntimePort_(t)
                                })
                            } else n.isAndroidChrome_() ? n.getAuthenticatorPort_(t) : n.isIosChrome_() ? n.getIosPort_(t) : n.getIframePort_(t)
                        }, n.isAndroidChrome_ = function() {
                            var t = navigator.userAgent;
                            return -1 != t.indexOf("Chrome") && -1 != t.indexOf("Android")
                        }, n.isIosChrome_ = function() {
                            return ["iPhone", "iPad", "iPod"].indexOf(navigator.platform) > -1
                        }, n.getChromeRuntimePort_ = function(t) {
                            var e = chrome.runtime.connect(n.EXTENSION_ID, {
                                includeTlsChannelId: !0
                            });
                            setTimeout(function() {
                                t(new n.WrappedChromeRuntimePort_(e))
                            }, 0)
                        }, n.getAuthenticatorPort_ = function(t) {
                            setTimeout(function() {
                                t(new n.WrappedAuthenticatorPort_)
                            }, 0)
                        }, n.getIosPort_ = function(t) {
                            setTimeout(function() {
                                t(new n.WrappedIosPort_)
                            }, 0)
                        }, n.WrappedChromeRuntimePort_ = function(t) {
                            this.port_ = t
                        }, n.formatSignRequest_ = function(t, o, r, i, s) {
                            if (void 0 === e || e < 1.1) {
                                for (var a = [], c = 0; c < r.length; c++) a[c] = {
                                    version: r[c].version,
                                    challenge: o,
                                    keyHandle: r[c].keyHandle,
                                    appId: t
                                };
                                return {
                                    type: n.MessageTypes.U2F_SIGN_REQUEST,
                                    signRequests: a,
                                    timeoutSeconds: i,
                                    requestId: s
                                }
                            }
                            return {
                                type: n.MessageTypes.U2F_SIGN_REQUEST,
                                appId: t,
                                challenge: o,
                                registeredKeys: r,
                                timeoutSeconds: i,
                                requestId: s
                            }
                        }, n.formatRegisterRequest_ = function(t, o, r, i, s) {
                            if (void 0 === e || e < 1.1) {
                                for (var a = 0; a < r.length; a++) r[a].appId = t;
                                var c = [];
                                for (a = 0; a < o.length; a++) c[a] = {
                                    version: o[a].version,
                                    challenge: r[0],
                                    keyHandle: o[a].keyHandle,
                                    appId: t
                                };
                                return {
                                    type: n.MessageTypes.U2F_REGISTER_REQUEST,
                                    signRequests: c,
                                    registerRequests: r,
                                    timeoutSeconds: i,
                                    requestId: s
                                }
                            }
                            return {
                                type: n.MessageTypes.U2F_REGISTER_REQUEST,
                                appId: t,
                                registerRequests: r,
                                registeredKeys: o,
                                timeoutSeconds: i,
                                requestId: s
                            }
                        }, n.WrappedChromeRuntimePort_.prototype.postMessage = function(t) {
                            this.port_.postMessage(t)
                        }, n.WrappedChromeRuntimePort_.prototype.addEventListener = function(t, e) {
                            var n = t.toLowerCase();
                            "message" == n || "onmessage" == n ? this.port_.onMessage.addListener(function(t) {
                                e({
                                    data: t
                                })
                            }) : console.error("WrappedChromeRuntimePort only supports onMessage")
                        }, n.WrappedAuthenticatorPort_ = function() {
                            this.requestId_ = -1, this.requestObject_ = null
                        }, n.WrappedAuthenticatorPort_.prototype.postMessage = function(t) {
                            var e = n.WrappedAuthenticatorPort_.INTENT_URL_BASE_ + ";S.request=" + encodeURIComponent(JSON.stringify(t)) + ";end";
                            document.location = e
                        }, n.WrappedAuthenticatorPort_.prototype.getPortType = function() {
                            return "WrappedAuthenticatorPort_"
                        }, n.WrappedAuthenticatorPort_.prototype.addEventListener = function(t, e) {
                            if ("message" == t.toLowerCase()) {
                                window.addEventListener("message", this.onRequestUpdate_.bind(this, e), !1)
                            } else console.error("WrappedAuthenticatorPort only supports message")
                        }, n.WrappedAuthenticatorPort_.prototype.onRequestUpdate_ = function(t, e) {
                            var n = JSON.parse(e.data),
                                o = (n.intentURL, n.errorCode, null);
                            n.hasOwnProperty("data") && (o = JSON.parse(n.data)), t({
                                data: o
                            })
                        }, n.WrappedAuthenticatorPort_.INTENT_URL_BASE_ = "intent:#Intent;action=com.google.android.apps.authenticator.AUTHENTICATE", n.WrappedIosPort_ = function() {}, n.WrappedIosPort_.prototype.postMessage = function(t) {
                            var e = JSON.stringify(t),
                                n = "u2f://auth?" + encodeURI(e);
                            location.replace(n)
                        }, n.WrappedIosPort_.prototype.getPortType = function() {
                            return "WrappedIosPort_"
                        }, n.WrappedIosPort_.prototype.addEventListener = function(t, e) {
                            "message" !== t.toLowerCase() && console.error("WrappedIosPort only supports message")
                        }, n.getIframePort_ = function(t) {
                            var e = "chrome-extension://" + n.EXTENSION_ID,
                                o = document.createElement("iframe");
                            o.src = e + "/u2f-comms.html", o.setAttribute("style", "display:none"), document.body.appendChild(o);
                            var r = new MessageChannel,
                                i = function(e) {
                                    "ready" == e.data ? (r.port1.removeEventListener("message", i), t(r.port1)) : console.error('First event on iframe port was not "ready"')
                                };
                            r.port1.addEventListener("message", i), r.port1.start(), o.addEventListener("load", function() {
                                o.contentWindow.postMessage("init", e, [r.port2])
                            })
                        }, n.EXTENSION_TIMEOUT_SEC = 30, n.port_ = null, n.waitingForPort_ = [], n.reqCounter_ = 0, n.callbackMap_ = {}, n.getPortSingleton_ = function(t) {
                            n.port_ ? t(n.port_) : (0 == n.waitingForPort_.length && n.getMessagePort(function(t) {
                                for (n.port_ = t, n.port_.addEventListener("message", n.responseHandler_); n.waitingForPort_.length;) n.waitingForPort_.shift()(n.port_)
                            }), n.waitingForPort_.push(t))
                        }, n.responseHandler_ = function(t) {
                            var e = t.data,
                                o = e.requestId;
                            if (o && n.callbackMap_[o]) {
                                var r = n.callbackMap_[o];
                                delete n.callbackMap_[o], r(e.responseData)
                            } else console.error("Unknown or missing requestId in response.")
                        }, n.sign = function(t, o, r, i, s) {
                            void 0 === e ? n.getApiVersion(function(a) {
                                e = void 0 === a.js_api_version ? 0 : a.js_api_version, console.log("Extension JS API Version: ", e), n.sendSignRequest(t, o, r, i, s)
                            }) : n.sendSignRequest(t, o, r, i, s)
                        }, n.sendSignRequest = function(t, e, o, r, i) {
                            n.getPortSingleton_(function(s) {
                                var a = ++n.reqCounter_;
                                n.callbackMap_[a] = r;
                                var c = void 0 !== i ? i : n.EXTENSION_TIMEOUT_SEC,
                                    l = n.formatSignRequest_(t, e, o, c, a);
                                s.postMessage(l)
                            })
                        }, n.register = function(t, o, r, i, s) {
                            void 0 === e ? n.getApiVersion(function(a) {
                                e = void 0 === a.js_api_version ? 0 : a.js_api_version, console.log("Extension JS API Version: ", e), n.sendRegisterRequest(t, o, r, i, s)
                            }) : n.sendRegisterRequest(t, o, r, i, s)
                        }, n.sendRegisterRequest = function(t, e, o, r, i) {
                            n.getPortSingleton_(function(s) {
                                var a = ++n.reqCounter_;
                                n.callbackMap_[a] = r;
                                var c = void 0 !== i ? i : n.EXTENSION_TIMEOUT_SEC,
                                    l = n.formatRegisterRequest_(t, o, e, c, a);
                                s.postMessage(l)
                            })
                        }, n.getApiVersion = function(t, e) {
                            n.getPortSingleton_(function(o) {
                                if (o.getPortType) {
                                    var r;
                                    switch (o.getPortType()) {
                                        case "WrappedIosPort_":
                                        case "WrappedAuthenticatorPort_":
                                            r = 1.1;
                                            break;
                                        default:
                                            r = 0
                                    }
                                    t({
                                        js_api_version: r
                                    })
                                } else {
                                    var i = ++n.reqCounter_;
                                    n.callbackMap_[i] = t;
                                    var s = {
                                        type: n.MessageTypes.U2F_GET_API_VERSION_REQUEST,
                                        timeoutSeconds: void 0 !== e ? e : n.EXTENSION_TIMEOUT_SEC,
                                        requestId: i
                                    };
                                    o.postMessage(s)
                                }
                            })
                        }
                    }
                }();
            const Ln = 1;
            class An extends Error {
                constructor(t, e) {
                    super(t), this.code = e
                }
            }

            function Sn(t) {
                return "errorCode" in t && "number" == typeof t.errorCode && 0 !== t.errorCode ? t.errorCode : Ln
            }
            var Cn = t("as", "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {});

            function jn() {
                throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
            }

            function Mn(t) {
                return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
            }

            function Dn(t, e) {
                return t(e = {
                    exports: {}
                }, e.exports), e.exports
            }

            function In(t) {
                return t && t.default || t
            }
            t("b6", Object.freeze({
                commonjsGlobal: Cn,
                commonjsRequire: jn,
                unwrapExports: Mn,
                createCommonjsModule: Dn,
                getCjsExportFromNamespace: In
            }));
            const Pn = "data-close-dialog",
                On = "[".concat(Pn, "]");

            function Nn(t) {
                let e = t.querySelector("[autofocus]");
                e || (e = t, t.setAttribute("tabindex", "-1")), e.focus()
            }

            function Rn(t) {
                const e = t.currentTarget;
                e instanceof Element && ("Escape" === t.key || "Esc" === t.key ? (Vn(e, !1), t.stopPropagation()) : "Tab" === t.key && function(t) {
                    if (!(t.currentTarget instanceof Element)) return;
                    const e = t.currentTarget.querySelector("details-dialog");
                    if (!e) return;
                    t.preventDefault();
                    const n = Array.from(e.querySelectorAll("*")).filter(Hn);
                    if (0 === n.length) return;
                    const o = t.shiftKey ? -1 : 1,
                        r = n.filter(t => t.matches(":focus"))[0];
                    let i = 0;
                    if (r) {
                        const t = n.indexOf(r);
                        if (-1 !== t) {
                            const e = t + o;
                            e >= 0 && (i = e % n.length)
                        }
                    }
                    n[i].focus()
                }(t))
            }

            function Hn(t) {
                return t.tabIndex >= 0 && !t.disabled && !t.hidden && (!t.type || "hidden" !== t.type) && !t.closest("[hidden]")
            }

            function qn(t) {
                const e = t.querySelector("details-dialog");
                return !(e instanceof DetailsDialogElement) || e.dispatchEvent(new CustomEvent("details-dialog-close", {
                    bubbles: !0,
                    cancelable: !0
                }))
            }

            function Fn(t) {
                if (!(t.currentTarget instanceof Element)) return;
                const e = t.currentTarget.closest("details[open]");
                e && (qn(e) || (t.preventDefault(), t.stopPropagation()))
            }

            function Un(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.querySelector("details-dialog");
                if (n instanceof DetailsDialogElement)
                    if (e.hasAttribute("open")) document.activeElement && $n.set(n, {
                        details: e,
                        activeElement: document.activeElement
                    }), Nn(n), e.addEventListener("keydown", Rn);
                    else {
                        for (const e of n.querySelectorAll("form")) e instanceof HTMLFormElement && e.reset();
                        const t = function(t, e) {
                            const n = $n.get(e);
                            return n && n.activeElement instanceof HTMLElement ? n.activeElement : t.querySelector("summary")
                        }(e, n);
                        t && t.focus(), e.removeEventListener("keydown", Rn)
                    }
            }

            function Vn(t, e) {
                e !== t.hasAttribute("open") && (e ? t.setAttribute("open", "") : qn(t) && t.removeAttribute("open"))
            }

            function Wn(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.querySelector("details-dialog");
                if (!(n instanceof DetailsDialogElement)) return;
                const o = n.querySelector("include-fragment:not([src])");
                if (!o) return;
                const r = n.src;
                null !== r && (o.addEventListener("loadend", () => {
                    e.hasAttribute("open") && Nn(n)
                }), o.setAttribute("src", r))
            }

            function Bn(t, e, n) {
                Xn(t), e && t.addEventListener("toggle", Wn, {
                    once: !0
                }), e && n && t.addEventListener("mouseover", Wn, {
                    once: !0
                })
            }

            function Xn(t) {
                t.removeEventListener("toggle", Wn), t.removeEventListener("mouseover", Wn)
            }
            const $n = new WeakMap;
            class DetailsDialogElement extends HTMLElement {
                static get CLOSE_ATTR() {
                    return Pn
                }
                static get CLOSE_SELECTOR() {
                    return On
                }
                constructor() {
                    super(), $n.set(this, {
                        details: null,
                        activeElement: null
                    }), this.addEventListener("click", function(t) {
                        let {
                            target: e
                        } = t;
                        if (!(e instanceof Element)) return;
                        const n = e.closest("details");
                        n && e.closest(On) && Vn(n, !1)
                    })
                }
                get src() {
                    return this.getAttribute("src")
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
                get preload() {
                    return this.hasAttribute("preload")
                }
                set preload(t) {
                    t ? this.setAttribute("preload", "") : this.removeAttribute("preload")
                }
                connectedCallback() {
                    this.setAttribute("role", "dialog"), this.setAttribute("aria-modal", "true");
                    const t = $n.get(this);
                    if (!t) return;
                    const e = this.parentElement;
                    if (!e) return;
                    const n = e.querySelector("summary");
                    n && (n.hasAttribute("role") || n.setAttribute("role", "button"), n.addEventListener("click", Fn, {
                        capture: !0
                    })), e.addEventListener("toggle", Un), t.details = e, Bn(e, this.src, this.preload)
                }
                disconnectedCallback() {
                    const t = $n.get(this);
                    if (!t) return;
                    const {
                        details: e
                    } = t;
                    if (!e) return;
                    e.removeEventListener("toggle", Un), Xn(e);
                    const n = e.querySelector("summary");
                    n && n.removeEventListener("click", Fn, {
                        capture: !0
                    }), t.details = null
                }
                toggle(t) {
                    const e = $n.get(this);
                    if (!e) return;
                    const {
                        details: n
                    } = e;
                    n && Vn(n, t)
                }
                static get observedAttributes() {
                    return ["src", "preload"]
                }
                attributeChangedCallback() {
                    const t = $n.get(this);
                    if (!t) return;
                    const {
                        details: e
                    } = t;
                    e && Bn(e, this.src, this.preload)
                }
            }
            t("bc", DetailsDialogElement), window.customElements.get("details-dialog") || (window.DetailsDialogElement = DetailsDialogElement, window.customElements.define("details-dialog", DetailsDialogElement));
            const Gn = new WeakMap;

            function Kn(t, e) {
                setTimeout(function() {
                    e.dispatchEvent(new Event(t))
                }, 0)
            }

            function Yn(t) {
                return zn(t).then(function(e) {
                    const n = t.parentNode;
                    n && (t.insertAdjacentHTML("afterend", e), n.removeChild(t))
                }, function() {
                    t.classList.add("is-error")
                })
            }

            function zn(t) {
                const e = t.src;
                let n = Gn.get(t);
                return n && n.src === e ? n.data : (n = e ? t.load() : Promise.reject(new Error("missing src")), Gn.set(t, {
                    src: e,
                    data: n
                }), n)
            }
            class IncludeFragmentElement extends HTMLElement {
                constructor() {
                    super()
                }
                static get observedAttributes() {
                    return ["src"]
                }
                get src() {
                    const t = this.getAttribute("src");
                    if (t) {
                        const e = this.ownerDocument.createElement("a");
                        return e.href = t, e.href
                    }
                    return ""
                }
                set src(t) {
                    t ? this.setAttribute("src", t) : this.removeAttribute("src")
                }
                get data() {
                    return zn(this)
                }
                attributeChangedCallback(t) {
                    "src" === t && this._attached && Yn(this)
                }
                connectedCallback() {
                    this._attached = !0, this.src && Yn(this)
                }
                disconnectedCallback() {
                    this._attached = !1
                }
                request() {
                    const t = this.src;
                    if (!t) throw new Error("missing src");
                    return new Request(t, {
                        method: "GET",
                        credentials: "same-origin",
                        headers: {
                            Accept: "text/html"
                        }
                    })
                }
                load() {
                    return Promise.resolve().then(() => (Kn("loadstart", this), this.fetch(this.request()))).then(t => {
                        if (200 !== t.status) throw new Error("Failed to load resource: the server responded with a status of ".concat(t.status));
                        const e = t.headers.get("Content-Type");
                        if (!e || !e.match(/^text\/html/)) throw new Error("Failed to load resource: expected text/html but was ".concat(e));
                        return t
                    }).then(t => t.text()).then(t => (Kn("load", this), Kn("loadend", this), t), t => {
                        throw Kn("error", this), Kn("loadend", this), t
                    })
                }
                fetch(t) {
                    return fetch(t)
                }
            }
            t("O", IncludeFragmentElement), window.customElements.get("include-fragment") || (window.IncludeFragmentElement = IncludeFragmentElement, window.customElements.define("include-fragment", IncludeFragmentElement));
            class RemoteInputElement extends HTMLElement {
                static get observedAttributes() {
                    return ["src"]
                }
                attributeChangedCallback(t, e) {
                    e && "src" === t && Jn(this, !1)
                }
                connectedCallback() {
                    const t = this.input;
                    t && (t.setAttribute("autocomplete", "off"), t.setAttribute("spellcheck", "false"), this.debounceInputChange = function(t) {
                        let e;
                        return function() {
                            clearTimeout(e), e = setTimeout(() => {
                                clearTimeout(e), t()
                            }, 300)
                        }
                    }(() => Jn(this)), this.boundFetchResults = (() => Jn(this)), t.addEventListener("focus", this.boundFetchResults), t.addEventListener("change", this.boundFetchResults), t.addEventListener("input", this.debounceInputChange))
                }
                disconnectedCallback() {
                    const t = this.input;
                    t && (t.removeEventListener("focus", this.boundFetchResults), t.removeEventListener("change", this.boundFetchResults), t.removeEventListener("input", this.debounceInputChange))
                }
                get input() {
                    const t = this.querySelector("input, textarea");
                    return t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement ? t : null
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
            }
            async function Jn(t) {
                let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                const n = t.input;
                if (!n) return;
                const o = n.value;
                if (e && t.currentQuery === o) return;
                t.currentQuery = o;
                const r = t.src;
                if (!r) return;
                const i = document.getElementById(t.getAttribute("aria-owns") || "");
                if (!i) return;
                const s = new URL(r, window.location.href),
                    a = new URLSearchParams(s.search);
                let c;
                a.append(t.getAttribute("param") || "q", o), s.search = a.toString(), t.dispatchEvent(new CustomEvent("loadstart")), t.setAttribute("loading", "");
                let l = !1,
                    u = "";
                try {
                    c = await fetch(s, {
                        credentials: "same-origin",
                        headers: {
                            accept: "text/html; fragment"
                        }
                    }), u = await c.text(), t.dispatchEvent(new CustomEvent("load"))
                } catch (d) {
                    l = !0, t.dispatchEvent(new CustomEvent("error"))
                }
                t.removeAttribute("loading"), l || (c && c.ok ? (t.dispatchEvent(new CustomEvent("remote-input-success", {
                    bubbles: !0
                })), i.innerHTML = u) : t.dispatchEvent(new CustomEvent("remote-input-error", {
                    bubbles: !0
                })), t.dispatchEvent(new CustomEvent("loadend")))
            }
            t("Y", RemoteInputElement), window.customElements.get("remote-input") || (window.RemoteInputElement = RemoteInputElement, window.customElements.define("remote-input", RemoteInputElement));
            const Qn = new WeakMap;
            let Zn = null;

            function to(t, e) {
                return t.closest("task-lists") === e.closest("task-lists")
            }

            function eo(t) {
                if (t.currentTarget !== t.target) return;
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest(".contains-task-list");
                if (!n) return;
                if (e.classList.add("is-ghost"), t.dataTransfer && t.dataTransfer.setData("text/plain", e.textContent.trim()), !e.parentElement) return;
                const o = Array.from(e.parentElement.children),
                    r = o.indexOf(e),
                    i = Qn.get(e);
                i && i.sortStarted(n), Zn = {
                    didDrop: !1,
                    dragging: e,
                    dropzone: e,
                    sourceList: n,
                    sourceSibling: o[r + 1] || null,
                    sourceIndex: r
                }
            }

            function no(t) {
                if (!Zn) return;
                const e = t.currentTarget;
                e instanceof Element && (to(Zn.dragging, e) ? (t.preventDefault(), t.dataTransfer && (t.dataTransfer.dropEffect = "move"), Zn.dropzone !== e && (Zn.dragging.classList.add("is-dragging"), Zn.dropzone = e, ! function(t, e) {
                    if (t.parentNode === e.parentNode) {
                        let n = t;
                        for (; n;) {
                            if (n === e) return !0;
                            n = n.previousElementSibling
                        }
                    }
                    return !1
                }(Zn.dragging, e) ? e.after(Zn.dragging) : e.before(Zn.dragging))) : t.stopPropagation())
            }

            function oo(t) {
                if (!Zn) return;
                t.preventDefault(), t.stopPropagation();
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                if (Zn.didDrop = !0, !Zn.dragging.parentElement) return;
                let n = Array.from(Zn.dragging.parentElement.children).indexOf(Zn.dragging);
                const o = e.closest(".contains-task-list");
                if (!o) return;
                if (Zn.sourceIndex === n && Zn.sourceList === o) return;
                Zn.sourceList === o && Zn.sourceIndex < n && n++;
                const r = {
                        list: Zn.sourceList,
                        index: Zn.sourceIndex
                    },
                    i = {
                        list: o,
                        index: n
                    },
                    s = Qn.get(Zn.dragging);
                s && s.sortFinished({
                    src: r,
                    dst: i
                })
            }

            function ro() {
                Zn && (Zn.dragging.classList.remove("is-dragging"), Zn.dragging.classList.remove("is-ghost"), Zn.didDrop || Zn.sourceList.insertBefore(Zn.dragging, Zn.sourceSibling), Zn = null)
            }

            function io(t) {
                if (!Zn) return;
                const e = t.currentTarget;
                e instanceof Element && (to(Zn.dragging, e) ? (t.preventDefault(), t.dataTransfer && (t.dataTransfer.dropEffect = "move")) : t.stopPropagation())
            }
            const so = new WeakMap;
            class TaskListsElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("change", t => {
                        const e = t.target;
                        e instanceof HTMLInputElement && e.classList.contains("task-list-item-checkbox") && this.dispatchEvent(new CustomEvent("task-lists-check", {
                            bubbles: !0,
                            detail: {
                                position: ho(e),
                                checked: e.checked
                            }
                        }))
                    }), so.set(this, new MutationObserver(go.bind(null, this)))
                }
                connectedCallback() {
                    const t = so.get(this);
                    t && t.observe(this, {
                        childList: !0,
                        subtree: !0
                    }), go(this)
                }
                disconnectedCallback() {
                    const t = so.get(this);
                    t && t.disconnect()
                }
                get disabled() {
                    return this.hasAttribute("disabled")
                }
                set disabled(t) {
                    t ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                }
                get sortable() {
                    return this.hasAttribute("sortable")
                }
                set sortable(t) {
                    t ? this.setAttribute("sortable", "") : this.removeAttribute("sortable")
                }
                static get observedAttributes() {
                    return ["disabled"]
                }
                attributeChangedCallback(t, e, n) {
                    if (e !== n) switch (t) {
                        case "disabled":
                            vo(this)
                    }
                }
            }
            const ao = document.createElement("template");
            ao.innerHTML = '\n  <span class="handle">\n    <svg class="drag-handle" aria-hidden="true" width="16" height="15" version="1.1" viewBox="0 0 16 15">\n      <path d="M12,4V5H4V4h8ZM4,8h8V7H4V8Zm0,3h8V10H4v1Z"></path>\n    </svg>\n  </span>';
            const co = new WeakMap;

            function lo(t) {
                if (co.get(t)) return;
                co.set(t, !0);
                const e = t.closest("task-lists");
                if (!(e instanceof TaskListsElement)) return;
                if (e.querySelectorAll(".task-list-item").length <= 1) return;
                const n = ao.content.cloneNode(!0),
                    o = n.querySelector(".handle");
                if (t.prepend(n), !o) throw new Error("handle not found");
                o.addEventListener("mouseenter", _o), o.addEventListener("mouseleave", To),
                    function(t, e, n) {
                        Qn.set(t, {
                            sortStarted: e,
                            sortFinished: n
                        }), t.addEventListener("dragstart", eo), t.addEventListener("dragenter", no), t.addEventListener("dragend", ro), t.addEventListener("drop", oo), t.addEventListener("dragover", io)
                    }(t, yo, Eo), t.addEventListener("mouseenter", uo), t.addEventListener("mouseleave", fo)
            }

            function uo(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest("task-lists");
                n instanceof TaskListsElement && n.sortable && !n.disabled && e.classList.add("hovered")
            }

            function fo(t) {
                const e = t.currentTarget;
                e instanceof Element && e.classList.remove("hovered")
            }

            function ho(t) {
                const e = po(t);
                if (!e) throw new Error(".contains-task-list not found");
                const n = Array.from(e.children).indexOf(t.closest(".task-list-item"));
                return [wo(e), n]
            }

            function po(t) {
                const e = t.parentElement;
                return e ? e.closest(".contains-task-list") : null
            }

            function mo(t) {
                return po(t) === function t(e) {
                    const n = po(e);
                    return n ? t(n) || n : null
                }(t)
            }

            function go(t) {
                const e = t.querySelectorAll(".contains-task-list > .task-list-item");
                for (const n of e) mo(n) && lo(n);
                vo(t)
            }

            function vo(t) {
                for (const e of t.querySelectorAll(".task-list-item")) e.classList.toggle("enabled", !t.disabled);
                for (const e of t.querySelectorAll(".task-list-item-checkbox")) e instanceof HTMLInputElement && (e.disabled = t.disabled)
            }

            function wo(t) {
                const e = t.closest("task-lists");
                if (!e) throw new Error("parent not found");
                return Array.from(e.querySelectorAll("ol, ul")).indexOf(t)
            }
            const bo = new WeakMap;

            function yo(t) {
                const e = t.closest("task-lists");
                if (!e) throw new Error("parent not found");
                bo.set(e, Array.from(e.querySelectorAll("ol, ul")))
            }

            function Eo(t) {
                let {
                    src: e,
                    dst: n
                } = t;
                const o = e.list.closest("task-lists");
                if (!o) return;
                const r = bo.get(o);
                r && (bo.delete(o), o.dispatchEvent(new CustomEvent("task-lists-move", {
                    bubbles: !0,
                    detail: {
                        src: [r.indexOf(e.list), e.index],
                        dst: [r.indexOf(n.list), n.index]
                    }
                })))
            }

            function _o(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest(".task-list-item");
                if (!n) return;
                const o = n.closest("task-lists");
                o instanceof TaskListsElement && o.sortable && !o.disabled && n.setAttribute("draggable", "true")
            }

            function To(t) {
                if (Zn) return;
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest(".task-list-item");
                n && n.setAttribute("draggable", "false")
            }

            function xo(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function ko(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function Lo(t, e, n) {
                return e && ko(t.prototype, e), n && ko(t, n), t
            }

            function Ao(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            window.customElements.get("task-lists") || (window.TaskListsElement = TaskListsElement, window.customElements.define("task-lists", TaskListsElement));
            var So = function() {
                function t(e) {
                    xo(this, t), Ao(this, "parent", void 0), Ao(this, "children", []), this.parent = e
                }
                return Lo(t, [{
                    key: "delete",
                    value: function(t) {
                        var e = this.children.indexOf(t);
                        return -1 !== e && (this.children = this.children.slice(0, e).concat(this.children.slice(e + 1)), 0 === this.children.length && this.parent.delete(this), !0)
                    }
                }, {
                    key: "add",
                    value: function(t) {
                        return this.children.push(t), this
                    }
                }]), t
            }();

            function Co(t) {
                if (!(t instanceof HTMLElement)) return !1;
                var e = t.nodeName.toLowerCase(),
                    n = (t.getAttribute("type") || "").toLowerCase();
                return "select" === e || "textarea" === e || "input" === e && "submit" !== n && "reset" !== n && "checkbox" !== n && "radio" !== n || t.isContentEditable
            }

            function jo(t) {
                Co(t) ? t.focus() : (t instanceof HTMLAnchorElement && t.href || "BUTTON" === t.tagName || "SUMMARY" === t.tagName || function(t) {
                    if (!(t instanceof HTMLElement)) return !1;
                    var e = t.nodeName.toLowerCase(),
                        n = (t.getAttribute("type") || "").toLowerCase();
                    return "input" === e && ("checkbox" === n || "radio" === n)
                }(t)) && t.click()
            }

            function Mo(t) {
                return "".concat(t.ctrlKey ? "Control+" : "").concat(t.altKey ? "Alt+" : "").concat(t.metaKey ? "Meta+" : "").concat(t.key)
            }
            var Do = new(function() {
                    function t(e) {
                        xo(this, t), Ao(this, "parent", null), Ao(this, "children", {}), this.parent = e || null
                    }
                    return Lo(t, [{
                        key: "get",
                        value: function(t) {
                            return this.children[t]
                        }
                    }, {
                        key: "insert",
                        value: function(e) {
                            for (var n = this, o = 0; o < e.length; o += 1) {
                                var r = e[o],
                                    i = n.get(r);
                                if (o === e.length - 1) return i instanceof t && (n.delete(i), i = null), i || (i = new So(n), n.children[r] = i), i;
                                i instanceof So && (i = null), i || (i = new t(n), n.children[r] = i), n = i
                            }
                            return n
                        }
                    }, {
                        key: "delete",
                        value: function(t) {
                            for (var e in this.children) {
                                if (this.children[e] === t) {
                                    var n = delete this.children[e];
                                    return 0 === Object.keys(this.children).length && this.parent && this.parent.delete(this), n
                                }
                            }
                            return !1
                        }
                    }]), t
                }()),
                Io = new WeakMap,
                Po = Do,
                Oo = null;

            function No() {
                Oo = null, Po = Do
            }

            function Ro(t) {
                if (!(t.target instanceof Node && Co(t.target))) {
                    null != Oo && clearTimeout(Oo), Oo = setTimeout(No, 1500);
                    var e = Po.get(Mo(t));
                    if (e) return Po = e, e instanceof So ? (jo(e.children[e.children.length - 1]), t.preventDefault(), void No()) : void 0;
                    No()
                }
            }

            function Ho() {
                const t = document.getElementById("ajax-error-message");
                t && t.classList.add("visible")
            }

            function qo() {
                const t = document.getElementById("ajax-error-message");
                t && t.classList.remove("visible")
            }

            function Fo() {}
            pt("deprecatedAjaxError", "[data-remote]", function(t) {
                if (!(t instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/behaviors/ajax-error.js:26");
                const e = t.detail,
                    {
                        error: n,
                        text: o
                    } = e;
                t.currentTarget === t.target && "abort" !== n && "canceled" !== n && (/<html/.test(o) ? (Ho(), t.stopImmediatePropagation()) : setTimeout(function() {
                    t.defaultPrevented || Ho()
                }, 0))
            }), pt("deprecatedAjaxSend", "[data-remote]", function() {
                qo()
            }), pt("click", ".js-ajax-error-dismiss", function() {
                qo()
            });
            class Uo {
                constructor() {
                    this.previousReceiver = {
                        resolve: Fo,
                        reject: Fo
                    }
                }
                push(t) {
                    return this.previousReceiver.resolve = this.previousReceiver.reject = Fo, new Promise((e, n) => {
                        const o = {
                            resolve: e,
                            reject: n
                        };
                        this.previousReceiver = o, t.then(function() {
                            o.resolve.apply(this, arguments)
                        }, function() {
                            o.reject.apply(this, arguments)
                        })
                    })
                }
            }
            t("U", Uo);
            class Vo {
                constructor(t) {
                    this.closed = !1, this.unsubscribe = (() => {
                        t(), this.closed = !0
                    })
                }
            }

            function Wo(t, e, n, o = !1) {
                return t.addEventListener(e, n, o), new Vo(() => {
                    t.removeEventListener(e, n, o)
                })
            }

            function Bo(...t) {
                return new Vo(() => {
                    for (const e of t) e.unsubscribe()
                })
            }

            function Xo(t, e = !1) {
                return $o(t) || function(t, e) {
                    const n = function(t) {
                        if (Ko instanceof Element) return Ko;
                        if (t && t.ownerDocument && t.ownerDocument.activeElement) return t.ownerDocument.activeElement;
                        return null
                    }(t);
                    return null != n && !(e && n === t) && (me(n) && n === t || t.contains(n) && ! function(t) {
                        if (!(Yo instanceof Element)) return !1;
                        const e = t.closest(zo);
                        if (!e) return !1;
                        const n = Yo.closest(zo);
                        return e === n
                    }(n))
                }(t, e) || function(t) {
                    return t.matches(":active")
                }(t) || function(t) {
                    return !(!t.closest(".is-dirty") && !t.querySelector(".is-dirty"))
                }(t)
            }

            function $o(t) {
                for (const e of t.querySelectorAll("input, textarea"))
                    if ((e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) && Go(e)) return !0;
                return !1
            }

            function Go(t) {
                if (t instanceof HTMLInputElement && ("checkbox" === t.type || "radio" === t.type)) {
                    if (t.checked !== t.defaultChecked) return !0
                } else if (t.value !== t.defaultValue) return !0;
                return !1
            }
            let Ko, Yo;
            document.addEventListener("mouseup", function(t) {
                Yo = t.target
            });
            const zo = "a[href], button, details:not([open]) summary";

            function Jo(t, e) {
                return Qo(function(t) {
                    if (t.activeElement !== t.body) return t.activeElement;
                    var e = t.querySelectorAll(":hover"),
                        n = e.length;
                    if (n) return e[n - 1]
                }(t), e)
            }

            function Qo(t, e) {
                var n = t;
                if (!n) return Promise.resolve(e());
                var o = n.ownerDocument.documentElement;
                var r = function(t) {
                    for (var e = []; t;) {
                        var n = t.getBoundingClientRect(),
                            o = n.top,
                            r = n.left;
                        e.push({
                            element: t,
                            top: o,
                            left: r
                        }), t = t.parentElement
                    }
                    return e
                }(n);
                return Promise.resolve(e()).then(function(t) {
                    var e = function(t) {
                        for (var e = 0; e < t.length; e++) {
                            var n = t[e];
                            if (o.contains(n.element)) return n
                        }
                    }(r);
                    if (e) {
                        n = e.element;
                        var i = e.top,
                            s = e.left,
                            a = n.getBoundingClientRect(),
                            c = a.top,
                            l = a.left;
                        ! function(t, e, n) {
                            var o = t.ownerDocument,
                                r = o.defaultView;

                            function i(t) {
                                return t.offsetParent ? {
                                    top: t.scrollTop,
                                    left: t.scrollLeft
                                } : {
                                    top: r.pageYOffset,
                                    left: r.pageXOffset
                                }
                            }

                            function s(t, e, n) {
                                if (0 === e && 0 === n) return [0, 0];
                                var s = i(t),
                                    a = s.top + n,
                                    c = s.left + e;
                                t === o || t === r || t === o.documentElement || t === o.body ? o.defaultView.scrollTo(c, a) : (t.scrollTop = a, t.scrollLeft = c);
                                var l = i(t);
                                return [l.left - s.left, l.top - s.top]
                            }

                            function a(t) {
                                var e = t;
                                if (e.offsetParent && e !== o.body) {
                                    for (; e !== o.body;) {
                                        if (!e.parentElement) return;
                                        e = e.parentElement;
                                        var n = r.getComputedStyle(e),
                                            i = n.position,
                                            s = n.overflowY,
                                            a = n.overflowX;
                                        if ("fixed" === i || "auto" === s || "auto" === a || "scroll" === s || "scroll" === a) break
                                    }
                                    return e
                                }
                            }
                            var c = a(t),
                                l = 0,
                                u = 0;
                            for (; c;) {
                                var d = s(c, e - l, n - u);
                                if (l += d[0], u += d[1], l === e && u === n) break;
                                c = a(c)
                            }
                        }(n, l - s, c - i)
                    }
                    return t
                })
            }
            const Zo = new WeakMap;

            function tr(t, e, n = !1) {
                return Jo(document, () => {
                    const o = vt(document, e.trim()),
                        r = n && t === t.ownerDocument.activeElement ? o.querySelector("*") : null;
                    for (const e of t.querySelectorAll(".js-updatable-content-preserve-scroll-position")) {
                        const t = d(e, "data-updatable-content-scroll-position-id");
                        er.set(t, e.scrollTop)
                    }
                    t.replaceWith(o), r && r.focus()
                })
            }
            const er = new Map;

            function nr(t) {
                const e = document.querySelector(".sso-modal");
                e && (e.classList.remove("success", "error"), t ? e.classList.add("success") : e.classList.add("error"))
            }
            te(".js-updatable-content-preserve-scroll-position", {
                constructor: HTMLElement,
                add(t) {
                    const e = t.getAttribute("data-updatable-content-scroll-position-id");
                    if (!e) return;
                    const n = er.get(e);
                    null != n && (t.scrollTop = n)
                }
            }), te(".js-sso-modal-complete", function(t) {
                if (window.opener && window.opener.external.ssoComplete) {
                    const e = t.getAttribute("data-error"),
                        n = t.getAttribute("data-expires-around");
                    window.opener.external.ssoComplete({
                        error: e,
                        expiresAround: n
                    }), window.close()
                } else {
                    const e = t.getAttribute("data-fallback-url");
                    window.location = e
                }
            });
            let or = null;

            function rr() {
                or = null
            }

            function ir(t, e = location.hash) {
                return sr(t, ar(e))
            }

            function sr(t, e) {
                return "" === e ? null : t.getElementById(e) || t.getElementsByName(e)[0]
            }

            function ar(t) {
                try {
                    return decodeURIComponent(t.slice(1))
                } catch (e) {
                    return ""
                }
            }

            function cr(t) {
                if (t === window) return "window";
                const e = [t.nodeName.toLowerCase()],
                    n = t.id;
                if (n && e.push(`#${n}`), "function" == typeof t.getAttribute && t.getAttribute("class")) {
                    const n = (t.getAttribute("class") || "").trim().split(/\s+/).join(".");
                    n && e.push(`.${n}`)
                }
                return e.join("")
            }
            const lr = new WeakMap;

            function ur(t, e) {
                const n = function(t, e) {
                    const n = u(t, "link[rel=pjax-prefetch]", HTMLLinkElement);
                    for (const o of n)
                        if (o.href === e) return o
                }(t, e);
                if (n) {
                    const t = lr.get(n);
                    return n.remove(), lr.delete(n), t
                }
            }
            const dr = {
                    container: null,
                    push: !0,
                    replace: !1,
                    type: "GET",
                    dataType: "html",
                    scrollTo: 0
                },
                fr = 20;
            let hr;
            const pr = new Uo;

            function mr(t, e, n) {
                return t.dispatchEvent(new CustomEvent(e, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: n
                }))
            }

            function gr(t) {
                vr({
                    url: t.url,
                    container: t.container,
                    replace: t.replace
                })
            }

            function vr(t) {
                const e = {
                    url: "",
                    container: null
                };
                if (Object.assign(e, dr, t), "string" != typeof e.url) throw new Error("invariant: app/assets/modules/github/pjax.js:132");
                e.requestUrl = e.url;
                const n = xr(e.url),
                    o = n.hash,
                    r = e.container;
                if (!r) throw new Error("invariant: app/assets/modules/github/pjax.js:137");
                const i = Lr(r);
                if ("GET" === e.type && (n.search += `${n.search?"&":""}_pjax=${encodeURIComponent(i)}`, e.url = n.toString()), hr || Me(hr = {
                        id: _r(),
                        url: window.location.href,
                        title: document.title,
                        container: i,
                        fragment: e.fragment
                    }, hr.title, hr.url), gr.options = e, "string" != typeof e.requestUrl) throw new Error("invariant: app/assets/modules/github/pjax.js:273");
                let s = ur(r, e.requestUrl);
                if (!s) {
                    if (!e.url) throw new Error("invariant: app/assets/modules/github/pjax.js:277");
                    s = Tt(e.url, {
                        method: e.type,
                        body: e.data,
                        headers: {
                            Accept: "text/html",
                            "X-PJAX": "true",
                            "X-PJAX-Container": i
                        }
                    })
                }
                if (!0 === e.push && !0 !== e.replace) {
                    if (a = hr.id, c = Tr(r), jr[a] = c, Dr.push(a), Ir(Mr, 0), Ir(Dr, fr), "string" != typeof e.requestUrl) throw new Error("invariant: app/assets/modules/github/pjax.js:292");
                    je(null, "", e.requestUrl)
                }
                var a, c;
                mr(r, "pjax:start", {
                    url: e.url
                }), mr(r, "pjax:send"), pr.push(s).then(async function(t) {
                    const n = hr,
                        s = function() {
                            for (const t of document.getElementsByTagName("meta")) {
                                const e = t.getAttribute("http-equiv");
                                if (e && "X-PJAX-VERSION" === e.toUpperCase()) return t.content
                            }
                        }(),
                        a = t.headers.get("X-PJAX-Version"),
                        c = function(t, e, n) {
                            if ("string" != typeof n.requestUrl) throw new Error("invariant: app/assets/modules/github/pjax.js:540");
                            const o = {
                                    url: Cr(e, n.requestUrl),
                                    title: ""
                                },
                                r = /<html/i.test(t);
                            if ("text/html" !== (e.headers.get("Content-Type") || "").split(";", 1)[0].trim()) return o;
                            let i, s;
                            if (r) {
                                const e = t.match(/<head[^>]*>([\s\S.]*)<\/head>/i),
                                    n = t.match(/<body[^>]*>([\s\S.]*)<\/body>/i);
                                i = e ? Array.from(vt(document, e[0]).childNodes) : [], s = n ? Array.from(vt(document, n[0]).childNodes) : []
                            } else i = s = Array.from(vt(document, t).childNodes);
                            if (0 === s.length) return o;
                            const a = Ar(i, "title", HTMLTitleElement);
                            let c;
                            if (o.title = a.length > 0 ? a[a.length - 1].textContent : "", n.fragment) {
                                if ("body" === n.fragment) c = s;
                                else {
                                    const t = Ar(s, n.fragment, Element);
                                    c = t.length > 0 ? [t[0]] : []
                                }
                                if (c.length && ("body" === n.fragment ? o.contents = c : o.contents = c.flatMap(t => Array.from(t.childNodes)), !o.title)) {
                                    const t = c[0];
                                    t instanceof Element && (o.title = t.getAttribute("title") || t.getAttribute("data-title") || "")
                                }
                            } else r || (o.contents = s);
                            if (o.contents) {
                                o.contents = o.contents.filter(function(t) {
                                    return !(t instanceof Element && t.matches("title"))
                                });
                                for (const e of o.contents)
                                    if (e instanceof Element)
                                        for (const t of e.querySelectorAll("title")) t.remove();
                                const t = Ar(o.contents, "script[src]", HTMLScriptElement);
                                for (const e of t) e.remove();
                                if (o.scripts = t, !o.contents) throw new Error("invariant: app/assets/modules/github/pjax.js:632");
                                o.contents = o.contents.filter(e => -1 === t.indexOf(e))
                            }
                            return o.title && (o.title = o.title.trim()), o
                        }(await t.text(), t, e),
                        {
                            contents: l
                        } = c,
                        d = xr(c.url);
                    if (o && (d.hash = o, c.url = d.href), s && a && s !== a) return void wr(c.url);
                    if (!l) return void wr(c.url);
                    hr = {
                        id: null != e.id ? e.id : _r(),
                        url: c.url,
                        title: c.title,
                        container: i,
                        fragment: e.fragment
                    }, !0 !== e.push && !0 !== e.replace || Me(hr, c.title, c.url);
                    const f = document.activeElement,
                        h = null != e.container && e.container.contains(f);
                    if (f && h) try {
                        f.blur()
                    } catch (sn) {}
                    c.title && (document.title = c.title), mr(r, "pjax:beforeReplace", {
                        contents: l,
                        state: hr,
                        previousState: n
                    }), Sr(r, l);
                    const p = u(r, "input[autofocus], textarea[autofocus]").pop();
                    p && document.activeElement !== p && p.focus(),
                        function(t) {
                            if (!t) return;
                            const e = u(document, "script[src]", HTMLScriptElement);
                            for (const n of t) {
                                const {
                                    src: t
                                } = n;
                                if (e.some(e => e.src === t)) return;
                                const o = document.createElement("script"),
                                    r = n.getAttribute("type");
                                r && (o.type = r), o.src = t, document.head && document.head.appendChild(o)
                            }
                        }(c.scripts);
                    let m = e.scrollTo;
                    if (o) {
                        const t = ir(document, o);
                        t && (m = t.getBoundingClientRect().top + window.pageYOffset)
                    }
                    "number" == typeof m && window.scrollTo(window.pageXOffset, m), mr(r, "pjax:success"), mr(r, "pjax:complete"), mr(r, "pjax:end")
                }, function(t) {
                    let n = e.requestUrl;
                    if ("string" != typeof n) throw new Error("invariant: app/assets/modules/github/pjax.js:150");
                    t.response && (n = Cr(t.response, n));
                    const o = mr(r, "pjax:error");
                    "GET" === e.type && o && wr(n), mr(r, "pjax:complete"), mr(r, "pjax:end")
                })
            }

            function wr(t) {
                hr && Me(null, "", hr.url), window.location.replace(t)
            }
            let br = !0;
            const yr = window.location.href,
                Er = window.history.state;

            function _r() {
                return (new Date).getTime()
            }

            function Tr(t) {
                const e = t.cloneNode(!0);
                return [Lr(t), Array.from(e.childNodes), Date.now()]
            }

            function xr(t) {
                const e = document.createElement("a");
                return e.href = t, e
            }

            function kr(t) {
                return t.href.replace(/#.*/, "")
            }

            function Lr(t) {
                if (t.id) return `#${t.id}`;
                throw new Error("pjax container has no id")
            }

            function Ar(t, e, n) {
                let o = [];
                for (const r of t) r instanceof Element && (r instanceof n && r.matches(e) && o.push(r), o = o.concat(u(r, e, n)));
                return o
            }

            function Sr(t, e) {
                t.innerHTML = "";
                for (const n of e) null != n && t.appendChild(n)
            }

            function Cr(t, e) {
                const n = t.headers.get("X-PJAX-URL");
                return n ? ((o = xr(n)).search = o.search.replace(/([?&])(_pjax|_)=[^&]*/g, ""), o.href.replace(/\?($|#)/, "$1")) : e;
                var o
            }
            Er && Er.container && (hr = Er), "state" in window.history && (br = !1);
            const jr = {},
                Mr = [],
                Dr = [];

            function Ir(t, e) {
                for (; t.length > e;) delete jr[t.shift()]
            }

            function Pr(t) {
                return new Promise(function(e) {
                    function n() {
                        t.hasFocus() && (e(), t.removeEventListener("visibilitychange", n), window.removeEventListener("focus", n), window.removeEventListener("blur", n))
                    }
                    t.addEventListener("visibilitychange", n), window.addEventListener("focus", n), window.addEventListener("blur", n), n()
                })
            }
            window.addEventListener("popstate", function(t) {
                br || pr.push(Promise.resolve(new Response));
                const e = hr,
                    n = t.state;
                let o;
                if (n && n.container) {
                    if (br && yr === n.url) return;
                    if (e) {
                        if (e.id === n.id) return;
                        o = e.id < n.id ? "forward" : "back"
                    }
                    const [t, r, i] = jr[n.id] || [], s = document.querySelector(t || n.container);
                    if (s) {
                        e && function(t, e, n) {
                            let o, r;
                            jr[e] = n, "forward" === t ? (o = Dr, r = Mr) : (o = Mr, r = Dr), o.push(e);
                            const i = r.pop();
                            i && delete jr[i], Ir(o, fr)
                        }(o, e.id, Tr(s)), mr(s, "pjax:popstate", {
                            state: n,
                            direction: o,
                            cachedAt: i
                        });
                        const t = {
                            id: n.id,
                            url: n.url,
                            container: s,
                            push: !1,
                            fragment: n.fragment || "",
                            scrollTo: !1
                        };
                        r ? (mr(s, "pjax:start"), hr = n, n.title && (document.title = n.title), mr(s, "pjax:beforeReplace", {
                            contents: r,
                            state: n,
                            previousState: e
                        }), Sr(s, r), mr(s, "pjax:end")) : vr(t), s.offsetHeight
                    } else wr(location.href)
                }
                br = !1
            });
            let Or = 0,
                Nr = -1;

            function Rr(t) {
                const e = t.getBoundingClientRect(),
                    n = window.innerHeight,
                    o = window.innerWidth;
                if (0 === e.height) return !1;
                if (e.height < n) return e.top >= 0 && e.left >= 0 && e.bottom <= n && e.right <= o; {
                    const t = Math.ceil(n / 2);
                    return e.top >= 0 && e.top + t < n
                }
            }

            function Hr(t) {
                for (const e of t.elements) Rr(e) ? t.in.call(e, e, t) : t.out && t.out.call(e, e, t)
            }

            function qr(t) {
                return ! function(t) {
                    return t.offsetWidth <= 0 && t.offsetHeight <= 0
                }(t)
            }
            const Fr = [];
            let Ur = 0;

            function Vr(t) {
                !async function() {
                    Fr.push(t), await oe,
                        function() {
                            const t = Ur;
                            Ur = Fr.length, Wr(Fr.slice(t), null, window.location.href)
                        }()
                }()
            }

            function Wr(t, e, n) {
                const o = window.location.hash.slice(1),
                    r = {
                        oldURL: e,
                        newURL: n,
                        target: o ? document.getElementById(o) : null
                    };
                for (const i of t) i.call(null, r)
            }
            Vr.clear = (() => {
                Fr.length = Ur = 0
            });
            let Br = window.location.href;
            window.addEventListener("popstate", function() {
                Br = window.location.href
            }), window.addEventListener("hashchange", function(t) {
                const e = window.location.href;
                try {
                    Wr(Fr, t.oldURL || Br, e)
                } finally {
                    Br = e
                }
            });
            let Xr = null;
            document.addEventListener("pjax:start", function() {
                    Xr = window.location.href
                }), document.addEventListener("pjax:end", function() {
                    Wr(Fr, Xr, window.location.href)
                }),
                function() {
                    var t = function(t) {
                        this.w = t || []
                    };
                    t.prototype.set = function(t) {
                        this.w[t] = !0
                    }, t.prototype.encode = function() {
                        for (var t = [], e = 0; e < this.w.length; e++) this.w[e] && (t[Math.floor(e / 6)] ^= 1 << e % 6);
                        for (e = 0; e < t.length; e++) t[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[e] || 0);
                        return t.join("") + "~"
                    };
                    var e = new t;

                    function n(t) {
                        e.set(t)
                    }
                    var o = function(e, n) {
                            var o = new t(i(e));
                            o.set(n), e.set(se, o.w)
                        },
                        r = function(n) {
                            n = i(n), n = new t(n);
                            for (var o = e.w.slice(), r = 0; r < n.w.length; r++) o[r] = o[r] || n.w[r];
                            return new t(o).encode()
                        },
                        i = function(t) {
                            return t = t.get(se), a(t) || (t = []), t
                        },
                        s = function(t) {
                            return "function" == typeof t
                        },
                        a = function(t) {
                            return "[object Array]" == Object.prototype.toString.call(Object(t))
                        },
                        c = function(t) {
                            return null != t && -1 < (t.constructor + "").indexOf("String")
                        },
                        l = function(t, e) {
                            return 0 == t.indexOf(e)
                        },
                        u = function(t) {
                            return t ? t.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
                        },
                        d = function(t) {
                            var e = T.createElement("img");
                            return e.width = 1, e.height = 1, e.src = t, e
                        },
                        f = function() {},
                        h = function(t) {
                            return encodeURIComponent instanceof Function ? encodeURIComponent(t) : (n(28), t)
                        },
                        p = function(t, e, o, r) {
                            try {
                                t.addEventListener ? t.addEventListener(e, o, !!r) : t.attachEvent && t.attachEvent("on" + e, o)
                            } catch (sn) {
                                n(27)
                            }
                        },
                        m = /^[\w\-:\/.?=&%!]+$/,
                        g = function(t, e, n, o) {
                            t && (n ? (o = "", e && m.test(e) && (o = ' id="' + e + '"'), m.test(t) && T.write("<script" + o + ' src="' + t + '"><\/script>')) : ((n = T.createElement("script")).type = "text/javascript", n.async = !0, n.src = t, o && (n.onload = o), e && (n.id = e), (t = T.getElementsByTagName("script")[0]).parentNode.insertBefore(n, t)))
                        },
                        v = function() {
                            return "https:" == T.location.protocol
                        },
                        w = function(t, e) {
                            return (t = t.match("(?:&|#|\\?)" + h(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == t.length ? t[1] : ""
                        },
                        b = function() {
                            var t = "" + T.location.hostname;
                            return 0 == t.indexOf("www.") ? t.substring(4) : t
                        },
                        y = function(t, e) {
                            if (1 == e.length && null != e[0] && "object" == typeof e[0]) return e[0];
                            for (var n = {}, o = Math.min(t.length + 1, e.length), r = 0; r < o; r++) {
                                if ("object" == typeof e[r]) {
                                    for (var i in e[r]) e[r].hasOwnProperty(i) && (n[i] = e[r][i]);
                                    break
                                }
                                r < t.length && (n[t[r]] = e[r])
                            }
                            return n
                        },
                        E = function() {
                            this.keys = [], this.values = {}, this.m = {}
                        };
                    E.prototype.set = function(t, e, n) {
                        this.keys.push(t), n ? this.m[":" + t] = e : this.values[":" + t] = e
                    }, E.prototype.get = function(t) {
                        return this.m.hasOwnProperty(":" + t) ? this.m[":" + t] : this.values[":" + t]
                    }, E.prototype.map = function(t) {
                        for (var e = 0; e < this.keys.length; e++) {
                            var n = this.keys[e],
                                o = this.get(n);
                            o && t(n, o)
                        }
                    };
                    var _ = window,
                        T = document,
                        x = window,
                        k = function(t) {
                            var e = x._gaUserPrefs;
                            if (e && e.ioo && e.ioo() || t && !0 === x["ga-disable-" + t]) return !0;
                            try {
                                var n = x.external;
                                if (n && n._gaUserPrefs && "oo" == n._gaUserPrefs) return !0
                            } catch (vn) {}
                            return !1
                        },
                        L = function(t) {
                            var e = [],
                                n = T.cookie.split(";");
                            t = new RegExp("^\\s*" + t + "=\\s*(.*?)\\s*$");
                            for (var o = 0; o < n.length; o++) {
                                var r = n[o].match(t);
                                r && e.push(r[1])
                            }
                            return e
                        },
                        A = function(t, e, o, r, i, s) {
                            if (!(i = !k(i) && !(j.test(T.location.hostname) || "/" == o && C.test(r)))) return !1;
                            if (e && 1200 < e.length && (e = e.substring(0, 1200), n(24)), o = t + "=" + e + "; path=" + o + "; ", s && (o += "expires=" + new Date((new Date).getTime() + s).toGMTString() + "; "), r && "none" != r && (o += "domain=" + r + ";"), r = T.cookie, T.cookie = o, !(r = r != T.cookie)) t: {
                                for (t = L(t), r = 0; r < t.length; r++)
                                    if (e == t[r]) {
                                        r = !0;
                                        break t
                                    }
                                r = !1
                            }
                            return r
                        },
                        S = function(t) {
                            return h(t).replace(/\(/g, "%28").replace(/\)/g, "%29")
                        },
                        C = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
                        j = /(^|\.)doubleclick\.net$/i,
                        M = function() {
                            return (dt || v() ? "https:" : "http:") + "//www.google-analytics.com"
                        },
                        D = function(t) {
                            this.name = "len", this.message = t + "-8192"
                        },
                        I = function(t, e, n) {
                            if (n = n || f, 2036 >= e.length) P(t, e, n);
                            else {
                                if (!(8192 >= e.length)) throw R("len", e.length), new D(e.length);
                                N(t, e, n) || O(t, e, n) || P(t, e, n)
                            }
                        },
                        P = function(t, e, n) {
                            var o = d(t + "?" + e);
                            o.onload = o.onerror = function() {
                                o.onload = null, o.onerror = null, n()
                            }
                        },
                        O = function(t, e, n) {
                            var o = _.XMLHttpRequest;
                            if (!o) return !1;
                            var r = new o;
                            return "withCredentials" in r && (r.open("POST", t, !0), r.withCredentials = !0, r.setRequestHeader("Content-Type", "text/plain"), r.onreadystatechange = function() {
                                4 == r.readyState && (n(), r = null)
                            }, r.send(e), !0)
                        },
                        N = function(t, e, n) {
                            return !!_.navigator.sendBeacon && (!!_.navigator.sendBeacon(t, e) && (n(), !0))
                        },
                        R = function(t, e, n) {
                            1 <= 100 * Math.random() || k("?") || (t = ["t=error", "_e=" + t, "_v=j48", "sr=1"], e && t.push("_f=" + e), n && t.push("_m=" + h(n.substring(0, 100))), t.push("aip=1"), t.push("z=" + Y()), P(M() + "/collect", t.join("&"), f))
                        },
                        H = function(t) {
                            var e = _.gaData = _.gaData || {};
                            return e[t] = e[t] || {}
                        },
                        q = function() {
                            this.M = []
                        };

                    function F(t) {
                        if (100 != t.get(Ne) && to(et(t, Te)) % 1e4 >= 100 * nt(t, Ne)) throw "abort"
                    }

                    function U(t) {
                        if (k(et(t, Le))) throw "abort"
                    }

                    function V() {
                        var t = T.location.protocol;
                        if ("http:" != t && "https:" != t) throw "abort"
                    }

                    function W(t) {
                        try {
                            _.navigator.sendBeacon ? n(42) : _.XMLHttpRequest && "withCredentials" in new _.XMLHttpRequest && n(40)
                        } catch (hn) {}
                        t.set(ie, r(t), !0), t.set(yt, nt(t, yt) + 1);
                        var e = [];
                        Z.map(function(n, o) {
                            o.F && (null != (n = t.get(n)) && n != o.defaultValue && ("boolean" == typeof n && (n *= 1), e.push(o.F + "=" + h("" + n))))
                        }), e.push("z=" + z()), t.set(vt, e.join("&"), !0)
                    }

                    function B(t) {
                        var e = et(t, qe) || M() + "/collect",
                            n = et(t, bt);
                        if (!n && t.get(wt) && (n = "beacon"), n) {
                            var o = et(t, vt),
                                r = (r = t.get(gt)) || f;
                            "image" == n ? P(e, o, r) : "xhr" == n && O(e, o, r) || "beacon" == n && N(e, o, r) || I(e, o, r)
                        } else I(e, et(t, vt), t.get(gt));
                        e = t.get(Le), n = (e = H(e)).hitcount, e.hitcount = n ? n + 1 : 1, e = t.get(Le), delete H(e).pending_experiments, t.set(gt, f, !0)
                    }

                    function X(t) {
                        var e;
                        (_.gaData = _.gaData || {}).expId && t.set(zt, (_.gaData = _.gaData || {}).expId), (_.gaData = _.gaData || {}).expVar && t.set(Jt, (_.gaData = _.gaData || {}).expVar);
                        var n = t.get(Le);
                        if (n = H(n).pending_experiments) {
                            var o = [];
                            for (e in n) n.hasOwnProperty(e) && n[e] && o.push(encodeURIComponent(e) + "." + encodeURIComponent(n[e]));
                            e = o.join("!")
                        } else e = void 0;
                        e && t.set(Qt, e, !0)
                    }

                    function $() {
                        if (_.navigator && "preview" == _.navigator.loadPurpose) throw "abort"
                    }

                    function G(t) {
                        var e = _.gaDevIds;
                        a(e) && 0 != e.length && t.set("&did", e.join(","), !0)
                    }

                    function K(t) {
                        if (!t.get(Le)) throw "abort"
                    }
                    q.prototype.add = function(t) {
                        this.M.push(t)
                    }, q.prototype.D = function(t) {
                        try {
                            for (var e = 0; e < this.M.length; e++) {
                                var n = t.get(this.M[e]);
                                n && s(n) && n.call(_, t)
                            }
                        } catch (vn) {}(e = t.get(gt)) != f && s(e) && (t.set(gt, f, !0), setTimeout(e, 10))
                    };
                    var Y = function() {
                            return Math.round(2147483647 * Math.random())
                        },
                        z = function() {
                            try {
                                var t = new Uint32Array(1);
                                return _.crypto.getRandomValues(t), 2147483647 & t[0]
                            } catch (e) {
                                return Y()
                            }
                        };

                    function J(t) {
                        var e = nt(t, ne);
                        if (500 <= e && n(15), "transaction" != (o = et(t, mt)) && "item" != o) {
                            var o = nt(t, re),
                                r = (new Date).getTime(),
                                i = nt(t, oe);
                            if (0 == i && t.set(oe, r), 0 < (i = Math.round(2 * (r - i) / 1e3)) && (o = Math.min(o + i, 20), t.set(oe, r)), 0 >= o) throw "abort";
                            t.set(re, --o)
                        }
                        t.set(ne, ++e)
                    }
                    var Q = function() {
                            this.data = new E
                        },
                        Z = new E,
                        tt = [];
                    Q.prototype.get = function(t) {
                        var e = it(t),
                            n = this.data.get(t);
                        return e && null == n && (n = s(e.defaultValue) ? e.defaultValue() : e.defaultValue), e && e.Z ? e.Z(this, t, n) : n
                    };
                    var et = function(t, e) {
                            return null == (t = t.get(e)) ? "" : "" + t
                        },
                        nt = function(t, e) {
                            return null == (t = t.get(e)) || "" === t ? 0 : 1 * t
                        };
                    Q.prototype.set = function(t, e, n) {
                        if (t)
                            if ("object" == typeof t)
                                for (var o in t) t.hasOwnProperty(o) && ot(this, o, t[o], n);
                            else ot(this, t, e, n)
                    };
                    var ot = function(t, e, n, o) {
                            if (null != n) switch (e) {
                                case Le:
                                    Cn.test(n)
                            }
                            var r = it(e);
                            r && r.o ? r.o(t, e, n, o) : t.data.set(e, n, o)
                        },
                        rt = function(t, e, n, o, r) {
                            this.name = t, this.F = e, this.Z = o, this.o = r, this.defaultValue = n
                        },
                        it = function(t) {
                            var e = Z.get(t);
                            if (!e)
                                for (var n = 0; n < tt.length; n++) {
                                    var o = tt[n],
                                        r = o[0].exec(t);
                                    if (r) {
                                        e = o[1](r), Z.set(e.name, e);
                                        break
                                    }
                                }
                            return e
                        },
                        st = function(t, e, n, o, r) {
                            return t = new rt(t, e, n, o, r), Z.set(t.name, t), t.name
                        },
                        at = function(t, e) {
                            tt.push([new RegExp("^" + t + "$"), e])
                        },
                        ct = function(t, e, n) {
                            return st(t, e, n, void 0, lt)
                        },
                        lt = function() {},
                        ut = c(window.GoogleAnalyticsObject) && u(window.GoogleAnalyticsObject) || "ga",
                        dt = !1,
                        ft = ct("apiVersion", "v"),
                        ht = ct("clientVersion", "_v");
                    st("anonymizeIp", "aip");
                    var pt = st("adSenseId", "a"),
                        mt = st("hitType", "t"),
                        gt = st("hitCallback"),
                        vt = st("hitPayload");
                    st("nonInteraction", "ni"), st("currencyCode", "cu"), st("dataSource", "ds");
                    var wt = st("useBeacon", void 0, !1),
                        bt = st("transport");
                    st("sessionControl", "sc", ""), st("sessionGroup", "sg"), st("queueTime", "qt");
                    var yt = st("_s", "_s");
                    st("screenName", "cd");
                    var Et = st("location", "dl", ""),
                        _t = st("referrer", "dr"),
                        Tt = st("page", "dp", "");
                    st("hostname", "dh");
                    var xt = st("language", "ul"),
                        kt = st("encoding", "de");
                    st("title", "dt", function() {
                        return T.title || void 0
                    }), at("contentGroup([0-9]+)", function(t) {
                        return new rt(t[0], "cg" + t[1])
                    });
                    var Lt = st("screenColors", "sd"),
                        At = st("screenResolution", "sr"),
                        St = st("viewportSize", "vp"),
                        Ct = st("javaEnabled", "je"),
                        jt = st("flashVersion", "fl");
                    st("campaignId", "ci"), st("campaignName", "cn"), st("campaignSource", "cs"), st("campaignMedium", "cm"), st("campaignKeyword", "ck"), st("campaignContent", "cc");
                    var Mt = st("eventCategory", "ec"),
                        Dt = st("eventAction", "ea"),
                        It = st("eventLabel", "el"),
                        Pt = st("eventValue", "ev"),
                        Ot = st("socialNetwork", "sn"),
                        Nt = st("socialAction", "sa"),
                        Rt = st("socialTarget", "st"),
                        Ht = st("l1", "plt"),
                        qt = st("l2", "pdt"),
                        Ft = st("l3", "dns"),
                        Ut = st("l4", "rrt"),
                        Vt = st("l5", "srt"),
                        Wt = st("l6", "tcp"),
                        Bt = st("l7", "dit"),
                        Xt = st("l8", "clt"),
                        $t = st("timingCategory", "utc"),
                        Gt = st("timingVar", "utv"),
                        Kt = st("timingLabel", "utl"),
                        Yt = st("timingValue", "utt");
                    st("appName", "an"), st("appVersion", "av", ""), st("appId", "aid", ""), st("appInstallerId", "aiid", ""), st("exDescription", "exd"), st("exFatal", "exf");
                    var zt = st("expId", "xid"),
                        Jt = st("expVar", "xvar"),
                        Qt = st("exp", "exp"),
                        Zt = st("_utma", "_utma"),
                        te = st("_utmz", "_utmz"),
                        ee = st("_utmht", "_utmht"),
                        ne = st("_hc", void 0, 0),
                        oe = st("_ti", void 0, 0),
                        re = st("_to", void 0, 20);
                    at("dimension([0-9]+)", function(t) {
                        return new rt(t[0], "cd" + t[1])
                    }), at("metric([0-9]+)", function(t) {
                        return new rt(t[0], "cm" + t[1])
                    }), st("linkerParam", void 0, void 0, function(t) {
                        var e = un(t = t.get(Te), 0);
                        return "_ga=1." + h(e + "." + t)
                    }, lt);
                    var ie = st("usage", "_u"),
                        se = st("_um");
                    st("forceSSL", void 0, void 0, function() {
                        return dt
                    }, function(t, e, o) {
                        n(34), dt = !!o
                    });
                    var ae = st("_j1", "jid");
                    at("\\&(.*)", function(t) {
                        var e = new rt(t[0], t[1]),
                            n = function(t) {
                                var e;
                                return Z.map(function(n, o) {
                                    o.F == t && (e = o)
                                }), e && e.name
                            }(t[0].substring(1));
                        return n && (e.Z = function(t) {
                            return t.get(n)
                        }, e.o = function(t, e, o, r) {
                            t.set(n, o, r)
                        }, e.F = void 0), e
                    });
                    var ce = ct("_oot"),
                        le = st("previewTask"),
                        ue = st("checkProtocolTask"),
                        de = st("validationTask"),
                        fe = st("checkStorageTask"),
                        he = st("historyImportTask"),
                        pe = st("samplerTask"),
                        me = st("_rlt"),
                        ge = st("buildHitTask"),
                        ve = st("sendHitTask"),
                        we = st("ceTask"),
                        be = st("devIdTask"),
                        ye = st("timingTask"),
                        Ee = st("displayFeaturesTask"),
                        _e = ct("name"),
                        Te = ct("clientId", "cid"),
                        xe = ct("clientIdTime"),
                        ke = st("userId", "uid"),
                        Le = ct("trackingId", "tid"),
                        Ae = ct("cookieName", void 0, "_ga"),
                        Se = ct("cookieDomain"),
                        Ce = ct("cookiePath", void 0, "/"),
                        je = ct("cookieExpires", void 0, 63072e3),
                        Me = ct("legacyCookieDomain"),
                        De = ct("legacyHistoryImport", void 0, !0),
                        Ie = ct("storage", void 0, "cookie"),
                        Pe = ct("allowLinker", void 0, !1),
                        Oe = ct("allowAnchor", void 0, !0),
                        Ne = ct("sampleRate", "sf", 100),
                        Re = ct("siteSpeedSampleRate", void 0, 1),
                        He = ct("alwaysSendReferrer", void 0, !1),
                        qe = st("transportUrl"),
                        Fe = st("_r", "_r");

                    function Ue(t, e, o, r) {
                        e[t] = function() {
                            try {
                                return r && n(r), o.apply(this, arguments)
                            } catch (sn) {
                                throw R("exc", t, sn && sn.name), sn
                            }
                        }
                    }
                    var Ve = function(t, e, n) {
                            this.V = t, this.fa = e, this.$ = !1, this.oa = n, this.ea = 1
                        },
                        We = function(t, e) {
                            var n;
                            if (t.fa && t.$) return 0;
                            if (t.$ = !0, e) {
                                if (t.oa && nt(e, t.oa)) return nt(e, t.oa);
                                if (0 == e.get(Re)) return 0
                            }
                            return 0 == t.V ? 0 : (void 0 === n && (n = z()), 0 == n % t.V ? Math.floor(n / t.V) % t.ea + 1 : 0)
                        };
                    var Be = function(t) {
                            var e = {};
                            if (Xe(e) || $e(e)) {
                                var n = e[Ht];
                                null == n || 1 / 0 == n || isNaN(n) || (0 < n ? (Ge(e, Ft), Ge(e, Wt), Ge(e, Vt), Ge(e, qt), Ge(e, Ut), Ge(e, Bt), Ge(e, Xt), t(e)) : p(_, "load", function() {
                                    Be(t)
                                }, !1))
                            }
                        },
                        Xe = function(t) {
                            var e;
                            if (!(e = (e = _.performance || _.webkitPerformance) && e.timing)) return !1;
                            var n = e.navigationStart;
                            return 0 != n && (t[Ht] = e.loadEventStart - n, t[Ft] = e.domainLookupEnd - e.domainLookupStart, t[Wt] = e.connectEnd - e.connectStart, t[Vt] = e.responseStart - e.requestStart, t[qt] = e.responseEnd - e.responseStart, t[Ut] = e.fetchStart - n, t[Bt] = e.domInteractive - n, t[Xt] = e.domContentLoadedEventStart - n, !0)
                        },
                        $e = function(t) {
                            if (_.top != _) return !1;
                            var e = _.external,
                                n = e && e.onloadT;
                            return e && !e.isValidLoadTime && (n = void 0), 2147483648 < n && (n = void 0), 0 < n && e.setPageReadyTime(), null != n && (t[Ht] = n, !0)
                        },
                        Ge = function(t, e) {
                            var n = t[e];
                            (isNaN(n) || 1 / 0 == n || 0 > n) && (t[e] = void 0)
                        },
                        Ke = function(t) {
                            return function(e) {
                                if ("pageview" == e.get(mt) && !t.I) {
                                    t.I = !0;
                                    var n = function(t) {
                                        var e = Math.min(nt(t, Re), 100);
                                        return !(to(et(t, Te)) % 100 >= e)
                                    }(e);
                                    e = 0 < w(e.get(Et), "gclid").length, (n || e) && Be(function(e) {
                                        t.send(n ? "timing" : "adtiming", e)
                                    })
                                }
                            }
                        },
                        Ye = !1,
                        ze = function(t) {
                            if ("cookie" == et(t, Ie)) {
                                var e = et(t, Ae),
                                    o = Ze(t),
                                    r = nn(et(t, Ce)),
                                    i = en(et(t, Se)),
                                    s = 1e3 * nt(t, je),
                                    a = et(t, Le);
                                if ("auto" != i) A(e, o, r, i, a, s) && (Ye = !0);
                                else {
                                    var c;
                                    if (n(32), o = [], 4 != (i = b().split(".")).length || (c = i[i.length - 1], parseInt(c, 10) != c)) {
                                        for (c = i.length - 2; 0 <= c; c--) o.push(i.slice(c).join("."));
                                        o.push("none"), c = o
                                    } else c = ["none"];
                                    for (var l = 0; l < c.length; l++)
                                        if (i = c[l], t.data.set(Se, i), o = Ze(t), A(e, o, r, i, a, s)) return void(Ye = !0);
                                    t.data.set(Se, "auto")
                                }
                            }
                        },
                        Je = function(t) {
                            if ("cookie" == et(t, Ie) && !Ye && (ze(t), !Ye)) throw "abort"
                        },
                        Qe = function(t) {
                            if (t.get(De)) {
                                var e = et(t, Se),
                                    o = et(t, Me) || b(),
                                    r = rn("__utma", o, e);
                                r && (n(19), t.set(ee, (new Date).getTime(), !0), t.set(Zt, r.R), (e = rn("__utmz", o, e)) && r.hash == e.hash && t.set(te, e.R))
                            }
                        },
                        Ze = function(t) {
                            var e = S(et(t, Te)),
                                n = en(et(t, Se)).split(".").length;
                            return 1 < (t = on(et(t, Ce))) && (n += "-" + t), ["GA1", n, e].join(".")
                        },
                        tn = function(t, e, n) {
                            for (var o, r = [], i = [], s = 0; s < t.length; s++) {
                                var a = t[s];
                                a.H[n] == e ? r.push(a) : null == o || a.H[n] < o ? (i = [a], o = a.H[n]) : a.H[n] == o && i.push(a)
                            }
                            return 0 < r.length ? r : i
                        },
                        en = function(t) {
                            return 0 == t.indexOf(".") ? t.substr(1) : t
                        },
                        nn = function(t) {
                            return t ? (1 < t.length && t.lastIndexOf("/") == t.length - 1 && (t = t.substr(0, t.length - 1)), 0 != t.indexOf("/") && (t = "/" + t), t) : "/"
                        },
                        on = function(t) {
                            return "/" == (t = nn(t)) ? 1 : t.split("/").length
                        };

                    function rn(t, e, n) {
                        "none" == e && (e = "");
                        var o = [],
                            r = L(t);
                        t = "__utma" == t ? 6 : 2;
                        for (var i = 0; i < r.length; i++) {
                            var s = ("" + r[i]).split(".");
                            s.length >= t && o.push({
                                hash: s[0],
                                R: r[i],
                                O: s
                            })
                        }
                        if (0 != o.length) return 1 == o.length ? o[0] : an(e, o) || an(n, o) || an(null, o) || o[0]
                    }

                    function an(t, e) {
                        var n;
                        null == t ? n = t = 1 : (n = to(t), t = to(l(t, ".") ? t.substring(1) : "." + t));
                        for (var o = 0; o < e.length; o++)
                            if (e[o].hash == n || e[o].hash == t) return e[o]
                    }
                    var cn = new RegExp(/^https?:\/\/([^\/:]+)/),
                        ln = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;

                    function un(t, e) {
                        var n = new Date,
                            o = _.navigator,
                            r = o.plugins || [];
                        for (t = [t, o.userAgent, n.getTimezoneOffset(), n.getYear(), n.getDate(), n.getHours(), n.getMinutes() + e], e = 0; e < r.length; ++e) t.push(r[e].description);
                        return to(t.join("."))
                    }
                    var dn = function(t) {
                        n(48), this.target = t, this.T = !1
                    };
                    dn.prototype.ca = function(t, e) {
                        if (t.tagName) {
                            if ("a" == t.tagName.toLowerCase()) return void(t.href && (t.href = fn(this, t.href, e)));
                            if ("form" == t.tagName.toLowerCase()) return pn(this, t)
                        }
                        if ("string" == typeof t) return fn(this, t, e)
                    };
                    var fn = function(t, e, n) {
                            (r = ln.exec(e)) && 3 <= r.length && (e = r[1] + (r[3] ? r[2] + r[3] : "")), t = t.target.get("linkerParam");
                            var o = e.indexOf("?"),
                                r = e.indexOf("#");
                            return n ? e += (-1 == r ? "#" : "&") + t : (n = -1 == o ? "?" : "&", e = -1 == r ? e + (n + t) : e.substring(0, r) + n + t + e.substring(r)), e.replace(/&+_ga=/, "&_ga=")
                        },
                        pn = function(t, e) {
                            if (e && e.action) {
                                var n = t.target.get("linkerParam").split("=")[1];
                                if ("get" == e.method.toLowerCase()) {
                                    t = e.childNodes || [];
                                    for (var o = 0; o < t.length; o++)
                                        if ("_ga" == t[o].name) return void t[o].setAttribute("value", n);
                                    (t = T.createElement("input")).setAttribute("type", "hidden"), t.setAttribute("name", "_ga"), t.setAttribute("value", n), e.appendChild(t)
                                } else "post" == e.method.toLowerCase() && (e.action = fn(t, e.action))
                            }
                        };

                    function mn(t, e) {
                        if (e == T.location.hostname) return !1;
                        for (var n = 0; n < t.length; n++)
                            if (t[n] instanceof RegExp) {
                                if (t[n].test(e)) return !0
                            } else if (0 <= e.indexOf(t[n])) return !0;
                        return !1
                    }
                    dn.prototype.S = function(t, e, o) {
                        function r(o) {
                            try {
                                var r;
                                o = o || _.event;
                                t: {
                                    var s = o.target || o.srcElement;
                                    for (o = 100; s && 0 < o;) {
                                        if (s.href && s.nodeName.match(/^a(?:rea)?$/i)) {
                                            r = s;
                                            break t
                                        }
                                        s = s.parentNode, o--
                                    }
                                    r = {}
                                }("http:" == r.protocol || "https:" == r.protocol) && mn(t, r.hostname || "") && r.href && (r.href = fn(i, r.href, e))
                            } catch (a) {
                                n(26)
                            }
                        }
                        var i = this;
                        this.T || (this.T = !0, p(T, "mousedown", r, !1), p(T, "keyup", r, !1)), o && p(T, "submit", function(e) {
                            if ((e = (e = e || _.event).target || e.srcElement) && e.action) {
                                var n = e.action.match(cn);
                                n && mn(t, n[1]) && pn(i, e)
                            }
                        })
                    };
                    var gn, wn = /^(GTM|OPT)-[A-Z0-9]+$/,
                        bn = /;_gaexp=[^;]*/g,
                        yn = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,
                        En = function(t, e, o) {
                            this.U = ae, this.aa = e, (e = o) || (e = (e = et(t, _e)) && "t0" != e ? kn.test(e) ? "_gat_" + S(et(t, Le)) : "_gat_" + S(e) : "_gat"), this.Y = e, We(new Ve(10), t) && (n(30), this.pa = !0)
                        },
                        _n = function(t, e) {
                            e.get(t.U) || ("1" == L(t.Y)[0] ? e.set(t.U, "", !0) : e.set(t.U, "" + Y(), !0))
                        },
                        Tn = function(t, e) {
                            if (e.get(t.U)) {
                                var n = 6e5;
                                t.pa && (n /= 10), A(t.Y, "1", e.get(Ce), e.get(Se), e.get(Le), n)
                            }
                        },
                        xn = function(t, e) {
                            if (e.get(t.U)) {
                                var n = new E,
                                    o = function(t) {
                                        it(t).F && n.set(it(t).F, e.get(t))
                                    };
                                o(ft), o(ht), o(Le), o(Te), o(ke), o(t.U), n.set(it(ie).F, r(e));
                                var i = t.aa;
                                n.map(function(t, e) {
                                    i += h(t) + "=", i += h("" + e) + "&"
                                }), i += "z=" + Y(), d(i), e.set(t.U, "", !0)
                            }
                        },
                        kn = /^gtm\d+$/,
                        Ln = function(t, e) {
                            var n;
                            (t = t.b).get("dcLoaded") || (o(t, 29), (e = e || {})[Ae] && (n = S(e[Ae])), function(t, e) {
                                var n = e.get(ge);
                                e.set(ge, function(e) {
                                    _n(t, e);
                                    var o = n(e);
                                    return Tn(t, e), o
                                });
                                var o = e.get(ve);
                                e.set(ve, function(e) {
                                    var n = o(e);
                                    return xn(t, e), n
                                })
                            }(e = new En(t, "https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&", n), t), t.set("dcLoaded", !0))
                        },
                        An = function(t) {
                            if (!t.get("dcLoaded") && "cookie" == t.get(Ie)) {
                                o(t, 51);
                                var e = new En(t);
                                _n(e, t), Tn(e, t), t.get(e.U) && (t.set(Fe, 1, !0), t.set(qe, M() + "/r/collect", !0))
                            }
                        },
                        Sn = function(t) {
                            return t ? (1 * t).toFixed(3) : "0"
                        },
                        Cn = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
                        jn = function(t) {
                            function e(t, e) {
                                i.b.data.set(t, e)
                            }

                            function o(t, n) {
                                e(t, n), i.filters.add(t)
                            }

                            function r(t, e, o) {
                                We(new Ve(1e4, !0, e), i.b) && (t = L(t)) && 0 < t.length && n(o)
                            }
                            var i = this;
                            this.b = new Q, this.filters = new q, e(_e, t[_e]), e(Le, u(t[Le])), e(Ae, t[Ae]), e(Se, t[Se] || b()), e(Ce, t[Ce]), e(je, t[je]), e(Me, t[Me]), e(De, t[De]), e(Pe, t[Pe]), e(Oe, t[Oe]), e(Ne, t[Ne]), e(Re, t[Re]), e(He, t[He]), e(Ie, t[Ie]), e(ke, t[ke]), e(xe, t[xe]), e(ft, 1), e(ht, "j48"), o(ce, U), o(le, $), o(ue, V), o(de, K), o(fe, Je), o(he, Qe), o(pe, F), o(me, J), o(we, X), o(be, G), o(Ee, An), o(ge, W), o(ve, B), o(ye, Ke(this)), Mn(this.b, t[Te]), Dn(this.b), this.b.set(pt, function() {
                                    var t = _.gaGlobal = _.gaGlobal || {};
                                    return t.hid = t.hid || Y()
                                }()),
                                function(t, e, n) {
                                    if (!gn) {
                                        var o;
                                        o = T.location.hash;
                                        var r = _.name,
                                            i = /^#?gaso=([^&]*)/;
                                        (r = (o = (o = o && o.match(i) || r && r.match(i)) ? o[1] : L("GASO")[0] || "") && o.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) && (A("GASO", "" + o, n, e, t, 0), window._udo || (window._udo = e), window._utcp || (window._utcp = n), t = r[1], g("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (t ? "prefix=" + t + "&" : "") + Y(), "_gasojs")), gn = !0
                                    }
                                }(this.b.get(Le), this.b.get(Se), this.b.get(Ce)), this.ra = new Ve(1e4, !0, "gaexp10"), r("_gid", "gacookie11", 41), r("_gaid", "gacookie12", 44)
                        },
                        Mn = function(t, e) {
                            if ("cookie" == et(t, Ie)) {
                                var o;
                                Ye = !1;
                                t: {
                                    var r = L(et(t, Ae));
                                    if (r && !(1 > r.length)) {
                                        o = [];
                                        for (var i = 0; i < r.length; i++) {
                                            var s, a = (s = r[i].split(".")).shift();
                                            ("GA1" == a || "1" == a) && 1 < s.length ? (1 == (a = s.shift().split("-")).length && (a[1] = "1"), a[0] *= 1, a[1] *= 1, s = {
                                                H: a,
                                                s: s.join(".")
                                            }) : s = void 0, s && o.push(s)
                                        }
                                        if (1 == o.length) {
                                            n(13), o = o[0].s;
                                            break t
                                        }
                                        if (0 != o.length) {
                                            if (n(14), r = en(et(t, Se)).split(".").length, 1 == (o = tn(o, r, 0)).length) {
                                                o = o[0].s;
                                                break t
                                            }
                                            r = on(et(t, Ce)), o = (o = tn(o, r, 1))[0] && o[0].s;
                                            break t
                                        }
                                        n(12)
                                    }
                                    o = void 0
                                }
                                o || (o = et(t, Se), null != (o = rn("__utma", r = et(t, Me) || b(), o)) ? (n(10), o = o.O[1] + "." + o.O[2]) : o = void 0), o && (t.data.set(Te, o), Ye = !0)
                            }
                            if (o = t.get(Oe), (i = w(T.location[o ? "href" : "search"], "_ga")) && (t.get(Pe) ? -1 == (o = i.indexOf(".")) ? n(22) : (r = i.substring(o + 1), "1" != i.substring(0, o) ? n(22) : -1 == (o = r.indexOf(".")) ? n(22) : (i = r.substring(0, o)) != un(o = r.substring(o + 1), 0) && i != un(o, -1) && i != un(o, -2) ? n(23) : (n(11), t.data.set(Te, o))) : n(21)), e && (n(9), t.data.set(Te, h(e))), !t.get(Te))
                                if (e = (e = _.gaGlobal && _.gaGlobal.vid) && -1 != e.search(/^(?:utma\.)?\d+\.\d+$/) ? e : void 0) n(17), t.data.set(Te, e);
                                else {
                                    for (n(8), o = (e = _.navigator.userAgent + (T.cookie ? T.cookie : "") + (T.referrer ? T.referrer : "")).length, r = _.history.length; 0 < r;) e += r-- ^ o++;
                                    t.data.set(Te, [Y() ^ 2147483647 & to(e), Math.round((new Date).getTime() / 1e3)].join("."))
                                }
                            ze(t)
                        },
                        Dn = function(t) {
                            var e = _.navigator,
                                o = _.screen,
                                r = T.location;
                            if (t.set(_t, function(t) {
                                    var e = T.referrer;
                                    if (/^https?:\/\//i.test(e)) {
                                        if (t) return e;
                                        t = "//" + T.location.hostname;
                                        var n = e.indexOf(t);
                                        if (!(5 != n && 6 != n || "/" != (t = e.charAt(n + t.length)) && "?" != t && "" != t && ":" != t)) return;
                                        return e
                                    }
                                }(t.get(He))), r) {
                                var i = r.pathname || "";
                                "/" != i.charAt(0) && (n(31), i = "/" + i), t.set(Et, r.protocol + "//" + r.hostname + i + r.search)
                            }
                            o && t.set(At, o.width + "x" + o.height), o && t.set(Lt, o.colorDepth + "-bit");
                            o = T.documentElement;
                            var s = (i = T.body) && i.clientWidth && i.clientHeight,
                                a = [];
                            if (o && o.clientWidth && o.clientHeight && ("CSS1Compat" === T.compatMode || !s) ? a = [o.clientWidth, o.clientHeight] : s && (a = [i.clientWidth, i.clientHeight]), o = 0 >= a[0] || 0 >= a[1] ? "" : a.join("x"), t.set(St, o), t.set(jt, function() {
                                    var t, e, n;
                                    if ((n = (n = _.navigator) ? n.plugins : null) && n.length)
                                        for (var o = 0; o < n.length && !e; o++) {
                                            var r = n[o]; - 1 < r.name.indexOf("Shockwave Flash") && (e = r.description)
                                        }
                                    if (!e) try {
                                        e = (t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")).GetVariable("$version")
                                    } catch (s) {}
                                    if (!e) try {
                                        t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), e = "WIN 6,0,21,0", t.AllowScriptAccess = "always", e = t.GetVariable("$version")
                                    } catch (s) {}
                                    if (!e) try {
                                        e = (t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
                                    } catch (s) {}
                                    return e && (t = e.match(/[\d]+/g)) && 3 <= t.length && (e = t[0] + "." + t[1] + " r" + t[2]), e || void 0
                                }()), t.set(kt, T.characterSet || T.charset), t.set(Ct, e && "function" == typeof e.javaEnabled && e.javaEnabled() || !1), t.set(xt, (e && (e.language || e.browserLanguage) || "").toLowerCase()), r && t.get(Oe) && (e = T.location.hash)) {
                                for (e = e.split(/[?&#]+/), r = [], o = 0; o < e.length; ++o)(l(e[o], "utm_id") || l(e[o], "utm_campaign") || l(e[o], "utm_source") || l(e[o], "utm_medium") || l(e[o], "utm_term") || l(e[o], "utm_content") || l(e[o], "gclid") || l(e[o], "dclid") || l(e[o], "gclsrc")) && r.push(e[o]);
                                0 < r.length && (e = "#" + r.join("&"), t.set(Et, t.get(Et) + e))
                            }
                        };
                    jn.prototype.get = function(t) {
                        return this.b.get(t)
                    }, jn.prototype.set = function(t, e) {
                        this.b.set(t, e)
                    };
                    var In = {
                        pageview: [Tt],
                        event: [Mt, Dt, It, Pt],
                        social: [Ot, Nt, Rt],
                        timing: [$t, Gt, Yt, Kt]
                    };
                    jn.prototype.send = function(t) {
                        var e, o;
                        1 > arguments.length || ("string" == typeof arguments[0] ? (e = arguments[0], o = [].slice.call(arguments, 1)) : (e = arguments[0] && arguments[0][mt], o = arguments), e && ((o = y(In[e] || [], o))[mt] = e, this.b.set(o, void 0, !0), this.filters.D(this.b), this.b.data.m = {}, We(this.ra, this.b) && function(t) {
                            var e = _.performance;
                            if (e && e.getEntriesByName) {
                                n(35);
                                var o = "https://www.google-analytics.com/analytics.js?wpid=" + t;
                                g(o, void 0, void 0, function() {
                                    try {
                                        var r = 1,
                                            i = e.getEntriesByName("https://www.google-analytics.com/analytics.js");
                                        i && 0 != i.length || (i = e.getEntriesByName("http://www.google-analytics.com/analytics.js"), r = 0);
                                        var s = e.getEntriesByName(o);
                                        if (i && 1 == i.length && s && 1 == s.length) {
                                            n(37);
                                            var a = i[0],
                                                c = s[0],
                                                l = {
                                                    tid: t,
                                                    ad: Sn(a.duration),
                                                    bd: Sn(c.duration),
                                                    ar: Sn(a.responseEnd - a.requestStart),
                                                    br: Sn(c.responseEnd - c.requestStart),
                                                    an: Sn(a.domainLookupEnd - a.domainLookupStart),
                                                    bn: Sn(c.domainLookupEnd - c.domainLookupStart),
                                                    ac: Sn(a.connectEnd - a.connectStart),
                                                    bc: Sn(c.connectEnd - c.connectStart),
                                                    as: r
                                                };
                                            for (var u in (r = []).push("_v=j48"), r.push("id=10"), l) l.hasOwnProperty(u) && r.push(u + "=" + h(l[u]));
                                            r.push("z=" + Y()), P("https://www.google-analytics.com/u/d", r.join("&"), f)
                                        }
                                    } catch (d) {}
                                })
                            }
                        }(this.b.get(Le))))
                    }, jn.prototype.ma = function(t, e) {
                        var n = this;
                        Wn(t, n, e) || (Xn(t, function() {
                            Wn(t, n, e)
                        }), Bn(String(n.get(_e)), t, void 0, e, !0))
                    };
                    var Pn, On, Nn, Rn, Hn = function(t) {
                            return "prerender" != T.visibilityState && (t(), !0)
                        },
                        qn = function(t) {
                            if (!Hn(t)) {
                                n(16);
                                var e = !1,
                                    o = function() {
                                        if (!e && Hn(t)) {
                                            e = !0;
                                            var n = o,
                                                r = T;
                                            r.removeEventListener ? r.removeEventListener("visibilitychange", n, !1) : r.detachEvent && r.detachEvent("onvisibilitychange", n)
                                        }
                                    };
                                p(T, "visibilitychange", o)
                            }
                        },
                        Fn = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
                        Un = function(t) {
                            if (s(t[0])) this.u = t[0];
                            else {
                                var e = Fn.exec(t[0]);
                                if (null != e && 4 == e.length && (this.c = e[1] || "t0", this.K = e[2] || "", this.C = e[3], this.a = [].slice.call(t, 1), this.K || (this.A = "create" == this.C, this.i = "require" == this.C, this.g = "provide" == this.C, this.ba = "remove" == this.C), this.i && (3 <= this.a.length ? (this.X = this.a[1], this.W = this.a[2]) : this.a[1] && (c(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1]))), e = t[1], t = t[2], !this.C) throw "abort";
                                if (this.i && (!c(e) || "" == e)) throw "abort";
                                if (this.g && (!c(e) || "" == e || !s(t))) throw "abort";
                                if (Vn(this.c) || Vn(this.K)) throw "abort";
                                if (this.g && "t0" != this.c) throw "abort"
                            }
                        };

                    function Vn(t) {
                        return 0 <= t.indexOf(".") || 0 <= t.indexOf(":")
                    }
                    Pn = new E, Nn = new E, Rn = new E, On = {
                        ec: 45,
                        ecommerce: 46,
                        linkid: 47
                    };
                    var Wn = function(t, e, n) {
                            e == zn || e.get(_e);
                            var o = Pn.get(t);
                            return !!s(o) && (e.plugins_ = e.plugins_ || new E, !!e.plugins_.get(t) || (e.plugins_.set(t, new o(e, n || {})), !0))
                        },
                        Bn = function(t, e, o, r, i) {
                            if (!s(Pn.get(e)) && !Nn.get(e)) {
                                if (On.hasOwnProperty(e) && n(On[e]), wn.test(e)) {
                                    if (n(52), !(t = zn.j(t))) return !0;
                                    r = {
                                        id: e,
                                        B: (o = r || {}).dataLayer || "dataLayer",
                                        ia: !!t.get("anonymizeIp"),
                                        na: i,
                                        G: !1
                                    }, t.get("&gtm") == e && (r.G = !0);
                                    var a = String(t.get("name"));
                                    "t0" != a && (r.target = a), k(String(t.get("trackingId"))) || (r.ja = String(t.get(Te)), r.ka = Number(t.get(xe)), o = o.palindrome ? yn : bn, o = (o = T.cookie.replace(/^|(; +)/g, ";").match(o)) ? o.sort().join("").substring(1) : void 0, r.la = o, r.qa = w(t.b.get(Et) || "", "gclid")), t = r.B, o = (new Date).getTime(), _[t] = _[t] || [], o = {
                                        "gtm.start": o
                                    }, i || (o.event = "gtm.js"), _[t].push(o), o = function(t) {
                                        function e(t, e) {
                                            e && (n += "&" + t + "=" + h(e))
                                        }
                                        var n = "https://www.google-analytics.com/gtm/js?id=" + h(t.id);
                                        return "dataLayer" != t.B && e("l", t.B), e("t", t.target), e("cid", t.ja), e("cidt", t.ka), e("gac", t.la), e("aip", t.ia), t.na && e("m", "sync"), e("cycle", t.G), t.qa && e("gclid", t.qa), n
                                    }(r)
                                }!o && On.hasOwnProperty(e) ? (n(39), o = e + ".js") : n(43), o && (o && 0 <= o.indexOf("/") || (o = (dt || v() ? "https:" : "http:") + "//www.google-analytics.com/plugins/ua/" + o), t = (r = Kn(o)).protocol, o = T.location.protocol, ("https:" == t || t == o || "http:" == t && "http:" == o) && Gn(r) && (g(r.url, void 0, i), Nn.set(e, !0)))
                            }
                        },
                        Xn = function(t, e) {
                            var n = Rn.get(t) || [];
                            n.push(e), Rn.set(t, n)
                        },
                        $n = function(t, e) {
                            Pn.set(t, e), e = Rn.get(t) || [];
                            for (var n = 0; n < e.length; n++) e[n]();
                            Rn.set(t, [])
                        },
                        Gn = function(t) {
                            var e = Kn(T.location.href);
                            return !!l(t.url, "https://www.google-analytics.com/gtm/js?id=") || !(t.query || 0 <= t.url.indexOf("?") || 0 <= t.path.indexOf("://")) && (t.host == e.host && t.port == e.port || (e = "http:" == t.protocol ? 80 : 443, !("www.google-analytics.com" != t.host || (t.port || e) != e || !l(t.path, "/plugins/"))))
                        },
                        Kn = function(t) {
                            function e(t) {
                                var e = (t.hostname || "").split(":")[0].toLowerCase(),
                                    n = (t.protocol || "").toLowerCase();
                                n = 1 * t.port || ("http:" == n ? 80 : "https:" == n ? 443 : "");
                                return t = t.pathname || "", l(t, "/") || (t = "/" + t), [e, "" + n, t]
                            }
                            var n = T.createElement("a");
                            n.href = T.location.href;
                            var o = (n.protocol || "").toLowerCase(),
                                r = e(n),
                                i = n.search || "",
                                s = o + "//" + r[0] + (r[1] ? ":" + r[1] : "");
                            return l(t, "//") ? t = o + t : l(t, "/") ? t = s + t : !t || l(t, "?") ? t = s + r[2] + (t || i) : 0 > t.split("/")[0].indexOf(":") && (t = s + r[2].substring(0, r[2].lastIndexOf("/")) + "/" + t), n.href = t, o = e(n), {
                                protocol: (n.protocol || "").toLowerCase(),
                                host: o[0],
                                port: o[1],
                                path: o[2],
                                query: n.search || "",
                                url: t || ""
                            }
                        },
                        Yn = {
                            ga: function() {
                                Yn.f = []
                            }
                        };
                    Yn.ga(), Yn.D = function(t) {
                        var e = Yn.J.apply(Yn, arguments);
                        e = Yn.f.concat(e);
                        for (Yn.f = []; 0 < e.length && !Yn.v(e[0]) && (e.shift(), !(0 < Yn.f.length)););
                        Yn.f = Yn.f.concat(e)
                    }, Yn.J = function(t) {
                        for (var e = [], n = 0; n < arguments.length; n++) try {
                            var o = new Un(arguments[n]);
                            o.g ? $n(o.a[0], o.a[1]) : (o.i && (o.ha = Bn(o.c, o.a[0], o.X, o.W)), e.push(o))
                        } catch (sn) {}
                        return e
                    }, Yn.v = function(t) {
                        try {
                            if (t.u) t.u.call(_, zn.j("t0"));
                            else {
                                var e = t.c == ut ? zn : zn.j(t.c);
                                if (t.A) "t0" != t.c || zn.create.apply(zn, t.a);
                                else if (t.ba) zn.remove(t.c);
                                else if (e)
                                    if (t.i) {
                                        if (t.ha && (t.ha = Bn(t.c, t.a[0], t.X, t.W)), !Wn(t.a[0], e, t.W)) return !0
                                    } else if (t.K) {
                                    var n = t.C,
                                        o = t.a,
                                        r = e.plugins_.get(t.K);
                                    r[n].apply(r, o)
                                } else e[t.C].apply(e, t.a)
                            }
                        } catch (i) {}
                    };
                    var zn = function(t) {
                        n(1), Yn.D.apply(Yn, [arguments])
                    };
                    zn.h = {}, zn.P = [], zn.L = 0, zn.answer = 42;
                    var Jn = [Le, Se, _e];
                    zn.create = function(t) {
                        var e = y(Jn, [].slice.call(arguments));
                        e[_e] || (e[_e] = "t0");
                        var n = "" + e[_e];
                        return zn.h[n] ? zn.h[n] : (e = new jn(e), zn.h[n] = e, zn.P.push(e), e)
                    }, zn.remove = function(t) {
                        for (var e = 0; e < zn.P.length; e++)
                            if (zn.P[e].get(_e) == t) {
                                zn.P.splice(e, 1), zn.h[t] = null;
                                break
                            }
                    }, zn.j = function(t) {
                        return zn.h[t]
                    }, zn.getAll = function() {
                        return zn.P.slice(0)
                    }, zn.N = function() {
                        "ga" != ut && n(49);
                        var t = _[ut];
                        if (!t || 42 != t.answer) {
                            if (zn.L = t && t.l, zn.loaded = !0, Ue("create", e = _[ut] = zn, e.create), Ue("remove", e, e.remove), Ue("getByName", e, e.j, 5), Ue("getAll", e, e.getAll, 6), Ue("get", e = jn.prototype, e.get, 7), Ue("set", e, e.set, 4), Ue("send", e, e.send), Ue("requireSync", e, e.ma), Ue("get", e = Q.prototype, e.get), Ue("set", e, e.set), !v() && !dt) {
                                t: {
                                    for (var e = T.getElementsByTagName("script"), o = 0; o < e.length && 100 > o; o++) {
                                        var r = e[o].src;
                                        if (r && 0 == r.indexOf("https://www.google-analytics.com/analytics")) {
                                            n(33), e = !0;
                                            break t
                                        }
                                    }
                                    e = !1
                                }
                                e && (dt = !0)
                            }
                            v() || dt || !We(new Ve(1e4)) || (n(36), dt = !0), (_.gaplugins = _.gaplugins || {}).Linker = dn, e = dn.prototype, $n("linker", dn), Ue("decorate", e, e.ca, 20), Ue("autoLink", e, e.S, 25), $n("displayfeatures", Ln), $n("adfeatures", Ln), t = t && t.q, a(t) ? Yn.D.apply(zn, t) : n(50)
                        }
                    }, zn.da = function() {
                        for (var t = zn.getAll(), e = 0; e < t.length; e++) t[e].get(_e)
                    };
                    var Qn = zn.N,
                        Zn = _[ut];

                    function to(t) {
                        var e, n, o = 1;
                        if (t)
                            for (o = 0, n = t.length - 1; 0 <= n; n--) o = 0 != (e = 266338304 & (o = (o << 6 & 268435455) + (e = t.charCodeAt(n)) + (e << 14))) ? o ^ e >> 21 : o;
                        return o
                    }
                    Zn && Zn.r ? Qn() : qn(Qn), qn(function() {
                        Yn.D(["provide", "render", f])
                    })
                }(window),
                function() {
                    var t = window,
                        e = "push",
                        n = "length",
                        o = "prototype",
                        r = function(t) {
                            if (t.get && t.set) {
                                this.clear();
                                var e = t.get("buildHitTask");
                                t.set("buildHitTask", d(this, e)), t.set("_rlt", f(this, t.get("_rlt")))
                            }
                        },
                        i = {
                            action: "pa",
                            promoAction: "promoa",
                            id: "ti",
                            affiliation: "ta",
                            revenue: "tr",
                            tax: "tt",
                            shipping: "ts",
                            coupon: "tcc",
                            step: "cos",
                            label: "col",
                            option: "col",
                            options: "col",
                            list: "pal",
                            listSource: "pls"
                        },
                        s = {
                            id: "id",
                            name: "nm",
                            brand: "br",
                            category: "ca",
                            variant: "va",
                            position: "ps",
                            price: "pr",
                            quantity: "qt",
                            coupon: "cc",
                            "dimension(\\d+)": "cd",
                            "metric(\\d+)": "cm"
                        },
                        a = {
                            id: "id",
                            name: "nm",
                            creative: "cr",
                            position: "ps"
                        },
                        c = function(t, e) {
                            this.name = t, this.source = e, this.e = []
                        },
                        l = "detail checkout checkout_option click add remove purchase refund".split(" ");
                    r[o].clear = function() {
                        this.b = void 0, this.f = [], this.a = [], this.g = [], this.d = void 0
                    }, r[o].h = function(t, e) {
                        var n = e || {};
                        "promo_click" == t ? n.promoAction = "click" : n.action = t, this.b = h(n)
                    }, r[o].j = function(t) {
                        (t = h(t)) && this.f[e](t)
                    }, r[o].i = function(t) {
                        var o = h(t);
                        if (o) {
                            var r, i = t.list || "";
                            t = t.listSource || "";
                            for (var s = 0; s < this.a[n]; s++)
                                if (this.a[s].name == i) {
                                    r = this.a[s];
                                    break
                                }
                            r || (r = new c(i, t), this.a[e](r)), r.e[e](o)
                        }
                    }, r[o].c = function(t) {
                        (t = h(t)) && this.g[e](t)
                    };
                    var u = function(t, e, r) {
                        if ("[object Array]" == Object[o].toString.call(Object(t)))
                            for (var i = 0; i < t[n]; i++) e.call(r, t[i])
                    };
                    r[o].data = function(t) {
                        if (t && t.ecommerce) {
                            (t = t.ecommerce).promoView && u(t.promoView.promotions, this.c, this), t.promoClick && (this.h("promo_click", t.promoClick.actionField), u(t.promoClick.promotions, this.c, this));
                            for (var e = 0; e < l[n]; e++) {
                                var o = t[l[e]];
                                if (o) {
                                    this.h(l[e], o.actionField), u(o.products, this.j, this);
                                    break
                                }
                            }
                            u(t.impressions, this.i, this), t.currencyCode && (this.d = t.currencyCode)
                        }
                    };
                    var d = function(t, e) {
                            return function(o) {
                                var r, c, l;
                                for (t.b && p(i, t.b, o, "&"), r = 0; r < t.f[n]; r++) c = "&pr" + (r + 1), p(s, t.f[r], o, c);
                                for (r = 0; r < t.a[n]; r++) {
                                    c = "&il" + (r + 1), (l = t.a[r]).name && o.set(c + "nm", l.name, !0), l.source && o.set(c + "ls", l.source, !0);
                                    for (var u = 0; u < l.e[n]; u++) p(s, l.e[u], o, c + "pi" + (u + 1))
                                }
                                for (r = 0; r < t.g[n]; r++) c = "&promo" + (r + 1), p(a, t.g[r], o, c);
                                return t.d && o.set("&cu", t.d, !0), t.clear(), e(o)
                            }
                        },
                        f = function(t, e) {
                            return function(n) {
                                var o = t.b && t.b.action;
                                if ("purchase" != o && "refund" != o) return e(n)
                            }
                        },
                        h = function(t) {
                            var e = 0,
                                n = {};
                            if (t && "object" == typeof t)
                                for (var o in t) t.hasOwnProperty(o) && (n[o] = t[o], e++);
                            return e ? n : void 0
                        },
                        p = function(t, e, n, o) {
                            for (var r in e)
                                if (e.hasOwnProperty(r))
                                    for (var i in t)
                                        if (t.hasOwnProperty(i)) {
                                            var s = r.match("^" + i + "$");
                                            s && n.set(o + t[i] + s.slice(1).join(""), e[r], !0)
                                        }
                        };
                    ! function() {
                        t.gaplugins = t.gaplugins || {}, t.gaplugins.EC = r, r[o].setAction = r[o].h, r[o].addProduct = r[o].j, r[o].addImpression = r[o].i, r[o].addPromo = r[o].c, r[o].clear = r[o].clear, r[o].data = r[o].data;
                        var n = t.GoogleAnalyticsObject || "ga";
                        t[n] = t[n] || function() {
                            (t[n].q = t[n].q || [])[e](arguments)
                        }, t[n]("provide", "ec", r)
                    }()
                }(), window.ga || (window.ga = function() {
                    window.ga.q.push(arguments)
                }, window.ga.q = []);
            const $r = "ontransitionend" in window;

            function Gr(t) {
                return "height" === getComputedStyle(t).transitionProperty
            }

            function Kr(t, e) {
                t.style.transition = "none", e(), t.offsetHeight, t.style.transition = ""
            }

            function Yr(t, e) {
                const n = t.getAttribute("data-details-container") || ".js-details-container",
                    o = c(t, n);
                ! function(t, e) {
                    if (!$r) return void e();
                    const n = Array.from(t.querySelectorAll(".js-transitionable"));
                    t.classList.contains("js-transitionable") && n.push(t);
                    for (const o of n) {
                        const t = Gr(o);
                        o instanceof HTMLElement && (o.addEventListener("transitionend", () => {
                            o.style.display = "", o.style.visibility = "", t && Kr(o, function() {
                                o.style.height = ""
                            })
                        }, {
                            once: !0
                        }), o.style.boxSizing = "content-box", o.style.display = "block", o.style.visibility = "visible", t && Kr(o, function() {
                            o.style.height = getComputedStyle(o).height
                        }), o.offsetHeight)
                    }
                    e();
                    for (const o of n)
                        if (o instanceof HTMLElement && Gr(o)) {
                            const t = getComputedStyle(o).height;
                            o.style.boxSizing = "", o.style.height = "0px" === t ? `${o.scrollHeight}px` : "0px"
                        }
                }(o, () => {
                    const n = null != e ? e : !o.classList.contains("open");
                    o.classList.toggle("open", n), o.classList.toggle("Details--on", n), t.setAttribute("aria-expanded", n.toString()), Promise.resolve().then(() => {
                        ! function(t) {
                            const e = t.querySelectorAll("input[autofocus], textarea[autofocus]"),
                                n = e[e.length - 1];
                            n instanceof HTMLElement && document.activeElement !== n && n.focus()
                        }(o),
                        function(t) {
                            t.classList.contains("tooltipped") && (t.classList.remove("tooltipped"), t.addEventListener("mouseleave", () => {
                                t.classList.add("tooltipped"), t instanceof HTMLElement && t.blur()
                            }, {
                                once: !0
                            }))
                        }(t),
                        function(t) {
                            const e = t.closest(".js-edit-repository-meta");
                            e instanceof HTMLFormElement && e.reset()
                        }(t);
                        const e = new CustomEvent("details:toggled", {
                            bubbles: !0,
                            cancelable: !1,
                            detail: {
                                open: o.classList.contains("Details--on")
                            }
                        });
                        o.dispatchEvent(e)
                    })
                })
            }

            function zr(t) {
                let e = !1,
                    n = t.parentElement;
                for (; n;) n.classList.contains("Details-content--shown") && (e = !0), n.classList.contains("js-details-container") && (n.classList.toggle("open", !e), n.classList.toggle("Details--on", !e), e = !1), n = n.parentElement
            }

            function Jr(t) {
                let e = t;
                const n = e.ownerDocument;
                if (!n) return;
                if (!e.offsetParent) return;
                const o = n.defaultView.HTMLElement;
                if (e !== n.body) {
                    for (; e !== n.body;) {
                        if (!(e.parentElement instanceof o)) return;
                        e = e.parentElement;
                        const {
                            position: t,
                            overflowY: n,
                            overflowX: r
                        } = getComputedStyle(e);
                        if ("fixed" === t || "auto" === n || "auto" === r || "scroll" === n || "scroll" === r) break
                    }
                    return e instanceof Document ? null : e
                }
            }

            function Qr(t, e) {
                let n = e;
                const o = t.ownerDocument;
                if (!o) return;
                if (!o.body) return;
                const r = o.documentElement;
                if (!r) return;
                if (t === r) return;
                const i = Zr(t, n);
                if (!i) return;
                const s = (n = i._container) === o.documentElement ? {
                        top: o.defaultView.pageYOffset,
                        left: o.defaultView.pageXOffset
                    } : {
                        top: n.scrollTop,
                        left: n.scrollLeft
                    },
                    a = i.top - s.top,
                    c = i.left - s.left,
                    l = n.clientHeight,
                    u = n.clientWidth;
                return {
                    top: a,
                    left: c,
                    bottom: l - (a + t.offsetHeight),
                    right: u - (c + t.offsetWidth),
                    height: l,
                    width: u
                }
            }

            function Zr(t, e) {
                let n = t;
                const o = n.ownerDocument;
                if (!o) return;
                const r = o.documentElement;
                if (!r) return;
                const i = o.body;
                if (!i) return;
                const s = o.defaultView.HTMLElement;
                let a = 0,
                    c = 0;
                const l = n.offsetHeight,
                    u = n.offsetWidth;
                for (; n !== o.body && n !== e;) {
                    if (a += n.offsetTop || 0, c += n.offsetLeft || 0, !(n.offsetParent instanceof s)) return;
                    n = n.offsetParent
                }
                let d, f, h;
                if (e && e !== o && e !== o.defaultView && e !== o.documentElement && e !== o.body) {
                    if (!(e instanceof s)) return;
                    h = e, d = e.scrollHeight, f = e.scrollWidth
                } else h = r, d = function(t, e) {
                    return Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, e.clientHeight)
                }(i, r), f = function(t, e) {
                    return Math.max(t.scrollWidth, e.scrollWidth, t.offsetWidth, e.offsetWidth, e.clientWidth)
                }(i, r);
                return {
                    top: a,
                    left: c,
                    bottom: d - (a + l),
                    right: f - (c + u),
                    _container: h
                }
            }

            function ti(t, e) {
                let n = t;
                const o = t.ownerDocument;
                n !== o && n !== o.defaultView && n !== o.documentElement && n !== o.body || (n = o);
                const r = o.defaultView.Document,
                    i = o.defaultView.HTMLElement;
                if (n instanceof r) {
                    const t = null != e.top ? e.top : o.defaultView.pageYOffset,
                        n = null != e.left ? e.left : o.defaultView.pageXOffset;
                    o.defaultView.scrollTo(n, t)
                } else {
                    if (!(n instanceof i)) throw new Error("container is not HTMLElement");
                    n.scrollTop = e.top, null != e.left && (n.scrollLeft = e.left)
                }
            }
            pt("click", ".js-details-target", function(t) {
                const {
                    currentTarget: e
                } = t;
                e instanceof HTMLElement && (Yr(e), t.preventDefault())
            }), Vr(function({
                target: t
            }) {
                t && zr(t)
            });
            const ei = navigator.userAgent.match(/Macintosh/),
                ni = ei ? "metaKey" : "ctrlKey",
                oi = ei ? "Meta" : "Control";
            let ri = !1,
                ii = {
                    x: 0,
                    y: 0
                };

            function si(t) {
                t instanceof MouseEvent && (ii.x === t.clientX && ii.y === t.clientY || (ri = !1), ii = {
                    x: t.clientX,
                    y: t.clientY
                })
            }

            function ai(t) {
                if (ri) return;
                const e = t.currentTarget,
                    {
                        target: n
                    } = t;
                if (!(n instanceof Element && e instanceof HTMLElement && e.closest(".js-active-navigation-container"))) return;
                const o = n.closest(".js-navigation-item");
                o && wi(o, e)
            }
            te(".js-navigation-container:not(.js-navigation-container-no-mouse)", {
                subscribe: t => Bo(Wo(t, "mouseover", si), Wo(t, "mouseover", ai))
            });
            let ci = 0;

            function li(t) {
                if (t.target !== document.body && t.target instanceof HTMLElement && !t.target.classList.contains("js-navigation-enable")) return;
                ri = !0;
                const e = bi();
                let n = !1;
                if (e) {
                    n = mt(e.querySelector('.js-navigation-item[aria-selected="true"]') || e, "navigation:keydown", {
                        hotkey: Mo(t),
                        originalEvent: t,
                        originalTarget: t.target
                    })
                }
                n || t.preventDefault()
            }

            function ui(t) {
                mt(t.currentTarget, "navigation:open", {
                    modifierKey: t.modifierKey || t.altKey || t.ctrlKey || t.metaKey,
                    shiftKey: t.shiftKey
                }) || t.preventDefault()
            }

            function di(t) {
                const e = bi();
                t !== e && (e && fi(e), t.classList.add("js-active-navigation-container"))
            }

            function fi(t) {
                t.classList.remove("js-active-navigation-container")
            }

            function hi(t, e) {
                e || (e = t);
                const n = yi(t)[0],
                    o = e.closest(".js-navigation-item") || n;
                if (di(t), o instanceof HTMLElement) {
                    if (wi(o, t)) return;
                    const e = Jr(o);
                    if (!e) throw new Error("invariant: app/assets/modules/github/navigation.js:481");
                    Ti(e, o)
                }
            }

            function pi(t) {
                const e = t.querySelectorAll(".js-navigation-item[aria-selected]");
                for (const n of e) n.classList.remove("navigation-focus"), n.setAttribute("aria-selected", "false")
            }

            function mi(t, e) {
                const n = yi(e),
                    o = n.indexOf(t),
                    r = n[o - 1];
                if (r) {
                    if (wi(r, e)) return;
                    const t = Jr(r);
                    if (!t) throw new Error("invariant: app/assets/modules/github/navigation.js:529");
                    "page" === Ei(e) ? _i(t, r) : Ti(t, r)
                }
            }

            function gi(t, e) {
                const n = yi(e),
                    o = n.indexOf(t),
                    r = n[o + 1];
                if (r) {
                    if (wi(r, e)) return;
                    const t = Jr(r);
                    if (!t) throw new Error("invariant: app/assets/modules/github/navigation.js:558");
                    "page" === Ei(e) ? _i(t, r) : Ti(t, r)
                }
            }

            function vi(t, e = !1) {
                mt(t, "navigation:keyopen", {
                    modifierKey: e
                })
            }

            function wi(t, e) {
                return !mt(t, "navigation:focus") || (pi(e), t.classList.add("navigation-focus"), t.setAttribute("aria-selected", "true"), !1)
            }

            function bi() {
                return document.querySelector(".js-active-navigation-container")
            }

            function yi(t) {
                return Array.from(t.querySelectorAll(".js-navigation-item")).filter(qr)
            }

            function Ei(t) {
                return t.getAttribute("data-navigation-scroll") || "item"
            }

            function _i(t, e, n = "smooth") {
                const o = Qr(e, t);
                o && (o.bottom <= 0 ? e.scrollIntoView({
                    behavior: n,
                    block: "start"
                }) : o.top <= 0 && e.scrollIntoView({
                    behavior: n,
                    block: "end"
                }))
            }

            function Ti(t, e) {
                const n = Zr(e, t),
                    o = Qr(e, t);
                if (null != n && null != o)
                    if (o.bottom <= 0 && document.body) {
                        ti(t, {
                            top: (null != t.offsetParent ? t.scrollHeight : document.body.scrollHeight) - (n.bottom + o.height)
                        })
                    } else o.top <= 0 && ti(t, {
                        top: n.top
                    })
            }
            te(".js-active-navigation-container", {
                add() {
                    1 === ++ci && document.addEventListener("keydown", li)
                },
                remove() {
                    0 === --ci && document.removeEventListener("keydown", li)
                }
            }), pt("navigation:keydown", ".js-active-navigation-container", function(t) {
                if (!(t instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/navigation.js:208");
                const e = t.currentTarget,
                    n = t.detail.originalTarget.matches("input, textarea"),
                    o = t.target;
                if (o.classList.contains("js-navigation-item"))
                    if (n) {
                        if (ei) switch (Mo(t.detail.originalEvent)) {
                            case "Control+n":
                                gi(o, e);
                                break;
                            case "Control+p":
                                mi(o, e)
                        }
                        switch (Mo(t.detail.originalEvent)) {
                            case "ArrowUp":
                                mi(o, e);
                                break;
                            case "ArrowDown":
                                gi(o, e);
                                break;
                            case "Enter":
                            case `${oi}+Enter`:
                                vi(o, t.detail.originalEvent[ni])
                        }
                    } else {
                        if (ei) switch (Mo(t.detail.originalEvent)) {
                            case "Control+n":
                                gi(o, e);
                                break;
                            case "Control+p":
                                mi(o, e);
                                break;
                            case "Alt+v":
                                ! function(t, e) {
                                    const n = yi(e);
                                    let o = n.indexOf(t);
                                    const r = Jr(t);
                                    if (null == r) return;
                                    let i, s;
                                    for (;
                                        (i = n[o - 1]) && (s = Qr(i, r)) && s.top >= 0;) o--;
                                    if (i) {
                                        const t = wi(i, e);
                                        if (t) return;
                                        _i(r, i)
                                    }
                                }(o, e);
                                break;
                            case "Control+v":
                                ! function(t, e) {
                                    const n = yi(e);
                                    let o = n.indexOf(t);
                                    const r = Jr(t);
                                    if (null == r) return;
                                    let i, s;
                                    for (;
                                        (i = n[o + 1]) && (s = Qr(i, r)) && s.bottom >= 0;) o++;
                                    if (i) {
                                        const t = wi(i, e);
                                        if (t) return;
                                        _i(r, i)
                                    }
                                }(o, e)
                        }
                        switch (Mo(t.detail.originalEvent)) {
                            case "j":
                            case "J":
                                gi(o, e);
                                break;
                            case "k":
                            case "K":
                                mi(o, e);
                                break;
                            case "o":
                            case "Enter":
                            case `${oi}+Enter`:
                                vi(o, t.detail[ni])
                        }
                    }
                else {
                    const o = yi(e)[0];
                    if (o)
                        if (n) {
                            if (ei) switch (Mo(t.detail.originalEvent)) {
                                case "Control+n":
                                    wi(o, e)
                            }
                            switch (Mo(t.detail.originalEvent)) {
                                case "ArrowDown":
                                    wi(o, e)
                            }
                        } else {
                            if (ei) switch (Mo(t.detail.originalEvent)) {
                                case "Control+n":
                                case "Control+v":
                                    wi(o, e)
                            }
                            switch (Mo(t.detail.originalEvent)) {
                                case "j":
                                    wi(o, e)
                            }
                        }
                }
                if (n) {
                    if (ei) switch (Mo(t.detail.originalEvent)) {
                        case "Control+n":
                        case "Control+p":
                            t.preventDefault()
                    }
                    switch (Mo(t.detail.originalEvent)) {
                        case "ArrowUp":
                        case "ArrowDown":
                            t.preventDefault();
                            break;
                        case "Enter":
                            t.preventDefault()
                    }
                } else {
                    if (ei) switch (Mo(t.detail.originalEvent)) {
                        case "Control+n":
                        case "Control+p":
                        case "Control+v":
                        case "Alt+v":
                            t.preventDefault()
                    }
                    switch (Mo(t.detail.originalEvent)) {
                        case "j":
                        case "k":
                            t.preventDefault();
                            break;
                        case "o":
                        case "Enter":
                        case `${ni}+Enter`:
                            t.preventDefault()
                    }
                }
            }), pt("click", ".js-active-navigation-container .js-navigation-item", function(t) {
                if (!(t instanceof MouseEvent)) throw new Error("invariant: app/assets/modules/github/navigation.js:379");
                ui(t)
            }), pt("navigation:keyopen", ".js-active-navigation-container .js-navigation-item", function(t) {
                if (!(t instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/navigation.js:384");
                const e = t.currentTarget.classList.contains("js-navigation-open") ? t.currentTarget : t.currentTarget.querySelector(".js-navigation-open");
                if (e) {
                    if (t.detail.modifierKey) window.open(e.href, "_blank"), window.focus();
                    else {
                        e.dispatchEvent(new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0
                        })) && e.click()
                    }
                    t.preventDefault()
                } else ui(t)
            });
            var xi = Dn(function(t) {
                var e;
                e = function() {
                    if ("undefined" == typeof window || !window.document) return function() {
                        throw new Error("Sortable.js requires a window with a document")
                    };
                    var t, e, n, o, r, i, s, a, c, l, u, d, f, h, p, m, g, v, w, b, y, E, _ = {},
                        T = /\s+/g,
                        x = /left|right|inline/,
                        k = "Sortable" + (new Date).getTime(),
                        L = window,
                        A = L.document,
                        S = L.parseInt,
                        C = L.setTimeout,
                        j = L.jQuery || L.Zepto,
                        M = L.Polymer,
                        D = !1,
                        I = "draggable" in A.createElement("div"),
                        P = !navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i) && ((E = A.createElement("x")).style.cssText = "pointer-events:auto", "auto" === E.style.pointerEvents),
                        O = !1,
                        N = Math.abs,
                        R = Math.min,
                        H = [],
                        q = [],
                        F = function() {
                            return !1
                        },
                        U = it(function(t, e, n) {
                            if (n && e.scroll) {
                                var o, r, i, s, a, d, f = n[k],
                                    h = e.scrollSensitivity,
                                    p = e.scrollSpeed,
                                    m = t.clientX,
                                    g = t.clientY,
                                    v = window.innerWidth,
                                    w = window.innerHeight;
                                if (l !== n && (c = e.scroll, l = n, u = e.scrollFn, !0 === c)) {
                                    c = n;
                                    do {
                                        if (c.offsetWidth < c.scrollWidth || c.offsetHeight < c.scrollHeight) break
                                    } while (c = c.parentNode)
                                }
                                c && (o = c, r = c.getBoundingClientRect(), i = (N(r.right - m) <= h) - (N(r.left - m) <= h), s = (N(r.bottom - g) <= h) - (N(r.top - g) <= h)), i || s || (s = (w - g <= h) - (g <= h), ((i = (v - m <= h) - (m <= h)) || s) && (o = L)), _.vx === i && _.vy === s && _.el === o || (_.el = o, _.vx = i, _.vy = s, clearInterval(_.pid), o && (_.pid = setInterval(function() {
                                    if (d = s ? s * p : 0, a = i ? i * p : 0, "function" == typeof u) return u.call(f, a, d, t);
                                    o === L ? L.scrollTo(L.pageXOffset + a, L.pageYOffset + d) : (o.scrollTop += d, o.scrollLeft += a)
                                }, 24)))
                            }
                        }, 30),
                        V = function(t) {
                            function e(t, e) {
                                return null != t && !0 !== t || null != (t = n.name) ? "function" == typeof t ? t : function(n, o) {
                                    var r = o.options.group.name;
                                    return e ? t : t && (t.join ? t.indexOf(r) > -1 : r == t)
                                } : F
                            }
                            var n = {},
                                o = t.group;
                            o && "object" == typeof o || (o = {
                                name: o
                            }), n.name = o.name, n.checkPull = e(o.pull, !0), n.checkPut = e(o.put), n.revertClone = o.revertClone, t.group = n
                        };
                    try {
                        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                            get: function() {
                                D = {
                                    capture: !1,
                                    passive: !1
                                }
                            }
                        }))
                    } catch (lt) {}

                    function W(t, e) {
                        if (!t || !t.nodeType || 1 !== t.nodeType) throw "Sortable: `el` must be HTMLElement, and not " + {}.toString.call(t);
                        this.el = t, this.options = e = st({}, e), t[k] = this;
                        var n = {
                            group: null,
                            sort: !0,
                            disabled: !1,
                            store: null,
                            handle: null,
                            scroll: !0,
                            scrollSensitivity: 30,
                            scrollSpeed: 10,
                            draggable: /[uo]l/i.test(t.nodeName) ? "li" : ">*",
                            ghostClass: "sortable-ghost",
                            chosenClass: "sortable-chosen",
                            dragClass: "sortable-drag",
                            ignore: "a, img",
                            filter: null,
                            preventOnFilter: !0,
                            animation: 0,
                            setData: function(t, e) {
                                t.setData("Text", e.textContent)
                            },
                            dropBubble: !1,
                            dragoverBubble: !1,
                            dataIdAttr: "data-id",
                            delay: 0,
                            forceFallback: !1,
                            fallbackClass: "sortable-fallback",
                            fallbackOnBody: !1,
                            fallbackTolerance: 0,
                            fallbackOffset: {
                                x: 0,
                                y: 0
                            },
                            supportPointer: !1 !== W.supportPointer
                        };
                        for (var o in n) !(o in e) && (e[o] = n[o]);
                        for (var r in V(e), this) "_" === r.charAt(0) && "function" == typeof this[r] && (this[r] = this[r].bind(this));
                        this.nativeDraggable = !e.forceFallback && I, G(t, "mousedown", this._onTapStart), G(t, "touchstart", this._onTapStart), e.supportPointer && G(t, "pointerdown", this._onTapStart), this.nativeDraggable && (G(t, "dragover", this), G(t, "dragenter", this)), q.push(this._onDragOver), e.store && this.sort(e.store.get(this))
                    }

                    function B(e, n) {
                        "clone" !== e.lastPullMode && (n = !0), r && r.state !== n && (z(r, "display", n ? "none" : ""), n || r.state && (e.options.group.revertClone ? (i.insertBefore(r, s), e._animate(t, r)) : i.insertBefore(r, t)), r.state = n)
                    }

                    function X(t, e, n) {
                        if (t) {
                            n = n || A;
                            do {
                                if (">*" === e && t.parentNode === n || rt(t, e)) return t
                            } while (t = $(t))
                        }
                        return null
                    }

                    function $(t) {
                        var e = t.host;
                        return e && e.nodeType ? e : t.parentNode
                    }

                    function G(t, e, n) {
                        t.addEventListener(e, n, D)
                    }

                    function K(t, e, n) {
                        t.removeEventListener(e, n, D)
                    }

                    function Y(t, e, n) {
                        if (t)
                            if (t.classList) t.classList[n ? "add" : "remove"](e);
                            else {
                                var o = (" " + t.className + " ").replace(T, " ").replace(" " + e + " ", " ");
                                t.className = (o + (n ? " " + e : "")).replace(T, " ")
                            }
                    }

                    function z(t, e, n) {
                        var o = t && t.style;
                        if (o) {
                            if (void 0 === n) return A.defaultView && A.defaultView.getComputedStyle ? n = A.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), void 0 === e ? n : n[e];
                            e in o || (e = "-webkit-" + e), o[e] = n + ("string" == typeof n ? "" : "px")
                        }
                    }

                    function J(t, e, n) {
                        if (t) {
                            var o = t.getElementsByTagName(e),
                                r = 0,
                                i = o.length;
                            if (n)
                                for (; r < i; r++) n(o[r], r);
                            return o
                        }
                        return []
                    }

                    function Q(t, e, n, o, i, s, a, c) {
                        t = t || e[k];
                        var l = A.createEvent("Event"),
                            u = t.options,
                            d = "on" + n.charAt(0).toUpperCase() + n.substr(1);
                        l.initEvent(n, !0, !0), l.to = i || e, l.from = s || e, l.item = o || e, l.clone = r, l.oldIndex = a, l.newIndex = c, e.dispatchEvent(l), u[d] && u[d].call(t, l)
                    }

                    function Z(t, e, n, o, r, i, s, a) {
                        var c, l, u = t[k],
                            d = u.options.onMove;
                        return (c = A.createEvent("Event")).initEvent("move", !0, !0), c.to = e, c.from = t, c.dragged = n, c.draggedRect = o, c.related = r || e, c.relatedRect = i || e.getBoundingClientRect(), c.willInsertAfter = a, t.dispatchEvent(c), d && (l = d.call(u, c, s)), l
                    }

                    function tt(t) {
                        t.draggable = !1
                    }

                    function et() {
                        O = !1
                    }

                    function nt(t) {
                        for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, o = 0; n--;) o += e.charCodeAt(n);
                        return o.toString(36)
                    }

                    function ot(t, e) {
                        var n = 0;
                        if (!t || !t.parentNode) return -1;
                        for (; t && (t = t.previousElementSibling);) "TEMPLATE" === t.nodeName.toUpperCase() || ">*" !== e && !rt(t, e) || n++;
                        return n
                    }

                    function rt(t, e) {
                        if (t) {
                            var n = (e = e.split(".")).shift().toUpperCase(),
                                o = new RegExp("\\s(" + e.join("|") + ")(?=\\s)", "g");
                            return !("" !== n && t.nodeName.toUpperCase() != n || e.length && ((" " + t.className + " ").match(o) || []).length != e.length)
                        }
                        return !1
                    }

                    function it(t, e) {
                        var n, o;
                        return function() {
                            void 0 === n && (n = arguments, o = this, C(function() {
                                1 === n.length ? t.call(o, n[0]) : t.apply(o, n), n = void 0
                            }, e))
                        }
                    }

                    function st(t, e) {
                        if (t && e)
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                        return t
                    }

                    function at(t) {
                        return C(t, 0)
                    }

                    function ct(t) {
                        return clearTimeout(t)
                    }
                    return W.prototype = {
                        constructor: W,
                        _onTapStart: function(e) {
                            var n, o = this,
                                r = this.el,
                                i = this.options,
                                s = i.preventOnFilter,
                                c = e.type,
                                l = e.touches && e.touches[0],
                                u = (l || e).target,
                                d = e.target.shadowRoot && e.path && e.path[0] || u,
                                f = i.filter;
                            if (function(t) {
                                    H.length = 0;
                                    var e = t.getElementsByTagName("input"),
                                        n = e.length;
                                    for (; n--;) {
                                        var o = e[n];
                                        o.checked && H.push(o)
                                    }
                                }(r), !t && !(/mousedown|pointerdown/.test(c) && 0 !== e.button || i.disabled) && !d.isContentEditable && (u = X(u, i.draggable, r)) && a !== u) {
                                if (n = ot(u, i.draggable), "function" == typeof f) {
                                    if (f.call(this, e, u, this)) return Q(o, d, "filter", u, r, r, n), void(s && e.preventDefault())
                                } else if (f && (f = f.split(",").some(function(t) {
                                        if (t = X(d, t.trim(), r)) return Q(o, t, "filter", u, r, r, n), !0
                                    }))) return void(s && e.preventDefault());
                                i.handle && !X(d, i.handle, r) || this._prepareDragStart(e, l, u, n)
                            }
                        },
                        _prepareDragStart: function(o, r, c, l) {
                            var u, d = this,
                                f = d.el,
                                h = d.options,
                                m = f.ownerDocument;
                            c && !t && c.parentNode === f && (w = o, i = f, t = c, h.handleReplacedDragElement && (e = c.getAttribute("id")), n = t.parentNode, s = t.nextSibling, a = c, g = h.group, p = l, this._lastX = (r || o).clientX, this._lastY = (r || o).clientY, t.style["will-change"] = "all", u = function() {
                                d._disableDelayedDrag(), t.draggable = d.nativeDraggable, Y(t, h.chosenClass, !0), d._triggerDragStart(o, r), Q(d, i, "choose", t, i, i, p)
                            }, h.ignore.split(",").forEach(function(e) {
                                J(t, e.trim(), tt)
                            }), G(m, "mouseup", d._onDrop), G(m, "touchend", d._onDrop), G(m, "touchcancel", d._onDrop), G(m, "selectstart", d), h.supportPointer && G(m, "pointercancel", d._onDrop), h.delay ? (G(m, "mouseup", d._disableDelayedDrag), G(m, "touchend", d._disableDelayedDrag), G(m, "touchcancel", d._disableDelayedDrag), G(m, "mousemove", d._disableDelayedDrag), G(m, "touchmove", d._disableDelayedDrag), h.supportPointer && G(m, "pointermove", d._disableDelayedDrag), d._dragStartTimer = C(u, h.delay)) : u())
                        },
                        _disableDelayedDrag: function() {
                            var t = this.el.ownerDocument;
                            clearTimeout(this._dragStartTimer), K(t, "mouseup", this._disableDelayedDrag), K(t, "touchend", this._disableDelayedDrag), K(t, "touchcancel", this._disableDelayedDrag), K(t, "mousemove", this._disableDelayedDrag), K(t, "touchmove", this._disableDelayedDrag), K(t, "pointermove", this._disableDelayedDrag)
                        },
                        _triggerDragStart: function(e, n) {
                            (n = n || ("touch" == e.pointerType ? e : null)) ? (w = {
                                target: t,
                                clientX: n.clientX,
                                clientY: n.clientY
                            }, this._onDragStart(w, "touch")) : this.nativeDraggable ? (G(t, "dragend", this), G(i, "dragstart", this._onDragStart)) : this._onDragStart(w, !0);
                            try {
                                A.selection ? at(function() {
                                    A.selection.empty()
                                }) : window.getSelection().removeAllRanges()
                            } catch (lt) {}
                        },
                        _dragStarted: function() {
                            if (i && t) {
                                var e = this.options;
                                Y(t, e.ghostClass, !0), Y(t, e.dragClass, !1), W.active = this, Q(this, i, "start", t, i, i, p)
                            } else this._nulling()
                        },
                        _emulateDragOver: function() {
                            if (b) {
                                if (this._lastX === b.clientX && this._lastY === b.clientY) return;
                                this._lastX = b.clientX, this._lastY = b.clientY, P || z(o, "display", "none");
                                var t = A.elementFromPoint(b.clientX, b.clientY),
                                    e = t,
                                    n = q.length;
                                if (t && t.shadowRoot && (e = t = t.shadowRoot.elementFromPoint(b.clientX, b.clientY)), e)
                                    do {
                                        if (e[k]) {
                                            for (; n--;) q[n]({
                                                clientX: b.clientX,
                                                clientY: b.clientY,
                                                target: t,
                                                rootEl: e
                                            });
                                            break
                                        }
                                        t = e
                                    } while (e = e.parentNode);
                                P || z(o, "display", "")
                            }
                        },
                        _onTouchMove: function(t) {
                            if (w) {
                                var e = this.options,
                                    n = e.fallbackTolerance,
                                    r = e.fallbackOffset,
                                    i = t.touches ? t.touches[0] : t,
                                    s = i.clientX - w.clientX + r.x,
                                    a = i.clientY - w.clientY + r.y,
                                    c = t.touches ? "translate3d(" + s + "px," + a + "px,0)" : "translate(" + s + "px," + a + "px)";
                                if (!W.active) {
                                    if (n && R(N(i.clientX - this._lastX), N(i.clientY - this._lastY)) < n) return;
                                    this._dragStarted()
                                }
                                this._appendGhost(), y = !0, b = i, z(o, "webkitTransform", c), z(o, "mozTransform", c), z(o, "msTransform", c), z(o, "transform", c), t.preventDefault()
                            }
                        },
                        _appendGhost: function() {
                            if (!o) {
                                var e, n = t.getBoundingClientRect(),
                                    r = z(t),
                                    s = this.options;
                                Y(o = t.cloneNode(!0), s.ghostClass, !1), Y(o, s.fallbackClass, !0), Y(o, s.dragClass, !0), z(o, "top", n.top - S(r.marginTop, 10)), z(o, "left", n.left - S(r.marginLeft, 10)), z(o, "width", n.width), z(o, "height", n.height), z(o, "opacity", "0.8"), z(o, "position", "fixed"), z(o, "zIndex", "100000"), z(o, "pointerEvents", "none"), s.fallbackOnBody && A.body.appendChild(o) || i.appendChild(o), e = o.getBoundingClientRect(), z(o, "width", 2 * n.width - e.width), z(o, "height", 2 * n.height - e.height)
                            }
                        },
                        _onDragStart: function(e, n) {
                            var o = e.dataTransfer,
                                r = this.options;
                            this._offUpEvents(), g.checkPull(this, this, t, e), Y(t, r.dragClass, !0), n ? ("touch" === n ? (G(A, "touchmove", this._onTouchMove), G(A, "touchend", this._onDrop), G(A, "touchcancel", this._onDrop), r.supportPointer && (G(A, "pointermove", this._onTouchMove), G(A, "pointerup", this._onDrop))) : (G(A, "mousemove", this._onTouchMove), G(A, "mouseup", this._onDrop)), this._loopId = setInterval(this._emulateDragOver, 50)) : (o && (o.effectAllowed = "move", r.setData && r.setData.call(this, o, t)), G(A, "drop", this), this._dragStartId = at(this._dragStarted))
                        },
                        _onDragOver: function(a) {
                            var c, l, u, p, m = this.el,
                                w = this.options,
                                b = w.group,
                                E = W.active,
                                _ = g === b,
                                T = !1,
                                L = w.sort;
                            if (void 0 !== a.preventDefault && (a.preventDefault(), !w.dragoverBubble && a.stopPropagation()), !t.animated && (y = !0, w.handleReplacedDragElement && !t.parentNode && e && Y(t = A.getElementById(e) || t, this.options.ghostClass, !0), E && !w.disabled && (_ ? L || (p = !i.contains(t)) : v === this || (E.lastPullMode = g.checkPull(this, E, t, a)) && b.checkPut(this, E, t, a)) && (void 0 === a.rootEl || a.rootEl === this.el))) {
                                if (U(a, w, this.el), O) return;
                                if (c = X(a.target, w.draggable, m), l = t.getBoundingClientRect(), v !== this && (v = this, T = !0), p) return B(E, !0), n = i, void(r || s ? i.insertBefore(t, r || s) : L || i.appendChild(t));
                                if (0 === m.children.length || m.children[0] === o || m === a.target && function(t, e) {
                                        var n = t.lastElementChild.getBoundingClientRect();
                                        return e.clientY - (n.top + n.height) > 5 || e.clientX - (n.left + n.width) > 5
                                    }(m, a)) {
                                    if (0 !== m.children.length && m.children[0] !== o && m === a.target && (c = m.lastElementChild), c) {
                                        if (c.animated) return;
                                        u = c.getBoundingClientRect()
                                    }
                                    B(E, _), !1 !== Z(i, m, t, l, c, u, a) && (t.contains(m) || (m.appendChild(t), n = m), this._animate(l, t), c && this._animate(u, c))
                                } else if (c && !c.animated && c !== t && void 0 !== c.parentNode[k]) {
                                    d !== c && (d = c, f = z(c), h = z(c.parentNode));
                                    var S = (u = c.getBoundingClientRect()).right - u.left,
                                        j = u.bottom - u.top,
                                        M = x.test(f.cssFloat + f.display) || "flex" == h.display && 0 === h["flex-direction"].indexOf("row"),
                                        D = c.offsetWidth > t.offsetWidth,
                                        I = c.offsetHeight > t.offsetHeight,
                                        P = (M ? (a.clientX - u.left) / S : (a.clientY - u.top) / j) > .5,
                                        N = c.nextElementSibling,
                                        R = !1;
                                    if (M) {
                                        var H = t.offsetTop,
                                            q = c.offsetTop;
                                        R = H === q ? c.previousElementSibling === t && !D || P && D : c.previousElementSibling === t || t.previousElementSibling === c ? (a.clientY - u.top) / j > .5 : q > H
                                    } else T || (R = N !== t && !I || P && I);
                                    var F = Z(i, m, t, l, c, u, a, R);
                                    !1 !== F && (1 !== F && -1 !== F || (R = 1 === F), O = !0, C(et, 30), B(E, _), t.contains(m) || (R && !N ? m.appendChild(t) : c.parentNode.insertBefore(t, R ? N : c)), n = t.parentNode, this._animate(l, t), this._animate(u, c))
                                }
                            }
                        },
                        _animate: function(t, e) {
                            var n = this.options.animation;
                            if (n) {
                                var o = e.getBoundingClientRect();
                                1 === t.nodeType && (t = t.getBoundingClientRect()), z(e, "transition", "none"), z(e, "transform", "translate3d(" + (t.left - o.left) + "px," + (t.top - o.top) + "px,0)"), e.offsetWidth, z(e, "transition", "all " + n + "ms"), z(e, "transform", "translate3d(0,0,0)"), clearTimeout(e.animated), e.animated = C(function() {
                                    z(e, "transition", ""), z(e, "transform", ""), e.animated = !1
                                }, n)
                            }
                        },
                        _offUpEvents: function() {
                            var t = this.el.ownerDocument;
                            K(A, "touchmove", this._onTouchMove), K(A, "pointermove", this._onTouchMove), K(t, "mouseup", this._onDrop), K(t, "touchend", this._onDrop), K(t, "pointerup", this._onDrop), K(t, "touchcancel", this._onDrop), K(t, "pointercancel", this._onDrop), K(t, "selectstart", this)
                        },
                        _onDrop: function(e) {
                            var a = this.el,
                                c = this.options;
                            clearInterval(this._loopId), clearInterval(_.pid), clearTimeout(this._dragStartTimer), ct(this._cloneId), ct(this._dragStartId), K(A, "mouseover", this), K(A, "mousemove", this._onTouchMove), this.nativeDraggable && (K(A, "drop", this), K(a, "dragstart", this._onDragStart)), this._offUpEvents(), e && (y && (e.preventDefault(), !c.dropBubble && e.stopPropagation()), o && o.parentNode && o.parentNode.removeChild(o), i !== n && "clone" === W.active.lastPullMode || r && r.parentNode && r.parentNode.removeChild(r), t && (this.nativeDraggable && K(t, "dragend", this), tt(t), t.style["will-change"] = "", Y(t, this.options.ghostClass, !1), Y(t, this.options.chosenClass, !1), Q(this, i, "unchoose", t, n, i, p), i !== n ? (m = ot(t, c.draggable)) >= 0 && (Q(null, n, "add", t, n, i, p, m), Q(this, i, "remove", t, n, i, p, m), Q(null, n, "sort", t, n, i, p, m), Q(this, i, "sort", t, n, i, p, m)) : t.nextSibling !== s && (m = ot(t, c.draggable)) >= 0 && (Q(this, i, "update", t, n, i, p, m), Q(this, i, "sort", t, n, i, p, m)), W.active && (null != m && -1 !== m || (m = p), Q(this, i, "end", t, n, i, p, m), this.save()))), this._nulling()
                        },
                        _nulling: function() {
                            i = t = n = o = s = r = a = c = l = w = b = y = m = d = f = v = g = W.active = null, H.forEach(function(t) {
                                t.checked = !0
                            }), H.length = 0
                        },
                        handleEvent: function(e) {
                            switch (e.type) {
                                case "drop":
                                case "dragend":
                                    this._onDrop(e);
                                    break;
                                case "dragover":
                                case "dragenter":
                                    t && (this._onDragOver(e), function(t) {
                                        t.dataTransfer && (t.dataTransfer.dropEffect = "move");
                                        t.preventDefault()
                                    }(e));
                                    break;
                                case "mouseover":
                                    this._onDrop(e);
                                    break;
                                case "selectstart":
                                    e.preventDefault()
                            }
                        },
                        toArray: function() {
                            for (var t, e = [], n = this.el.children, o = 0, r = n.length, i = this.options; o < r; o++) X(t = n[o], i.draggable, this.el) && e.push(t.getAttribute(i.dataIdAttr) || nt(t));
                            return e
                        },
                        sort: function(t) {
                            var e = {},
                                n = this.el;
                            this.toArray().forEach(function(t, o) {
                                var r = n.children[o];
                                X(r, this.options.draggable, n) && (e[t] = r)
                            }, this), t.forEach(function(t) {
                                e[t] && (n.removeChild(e[t]), n.appendChild(e[t]))
                            })
                        },
                        save: function() {
                            var t = this.options.store;
                            t && t.set(this)
                        },
                        closest: function(t, e) {
                            return X(t, e || this.options.draggable, this.el)
                        },
                        option: function(t, e) {
                            var n = this.options;
                            if (void 0 === e) return n[t];
                            n[t] = e, "group" === t && V(n)
                        },
                        destroy: function() {
                            var t = this.el;
                            t[k] = null, K(t, "mousedown", this._onTapStart), K(t, "touchstart", this._onTapStart), K(t, "pointerdown", this._onTapStart), this.nativeDraggable && (K(t, "dragover", this), K(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(t) {
                                t.removeAttribute("draggable")
                            }), q.splice(q.indexOf(this._onDragOver), 1), this._onDrop(), this.el = t = null
                        }
                    }, G(A, "touchmove", function(t) {
                        W.active && t.preventDefault()
                    }), W.utils = {
                        on: G,
                        off: K,
                        css: z,
                        find: J,
                        is: function(t, e) {
                            return !!X(t, e, t)
                        },
                        extend: st,
                        throttle: it,
                        closest: X,
                        toggleClass: Y,
                        clone: function(t) {
                            return M && M.dom ? M.dom(t).cloneNode(!0) : j ? j(t).clone(!0)[0] : t.cloneNode(!0)
                        },
                        index: ot,
                        nextTick: at,
                        cancelNextTick: ct
                    }, W.create = function(t, e) {
                        return new W(t, e)
                    }, W.version = "1.7.0", W
                }, t.exports = e()
            });
            t("aF", xi);
            const ki = new WeakMap;

            function Li(t) {
                if (!(t instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/code-editor.js:12");
                const e = t.detail.editor;
                return ki.set(t.target, e), e
            }

            function Ai(t) {
                if (t.querySelector(".js-task-list-field"))
                    for (const e of u(t, "task-lists", TaskListsElement)) e.disabled = !1
            }

            function Si(t, e, n) {
                const o = l(t, ".js-comment-update", HTMLFormElement);
                ! function(t) {
                    for (const e of u(t, "task-lists", TaskListsElement)) e.disabled = !0
                }(t);
                const r = o.elements.namedItem("task_list_track");
                r && r.remove();
                const i = o.elements.namedItem("task_list_operation");
                i && i.remove();
                const s = document.createElement("input");
                s.setAttribute("type", "hidden"), s.setAttribute("name", "task_list_track"), s.setAttribute("value", e), o.appendChild(s);
                const a = document.createElement("input");
                if (a.setAttribute("type", "hidden"), a.setAttribute("name", "task_list_operation"), a.setAttribute("value", JSON.stringify(n)), o.appendChild(a), !o.elements.namedItem("task_list_key")) {
                    const t = d(l(o, ".js-task-list-field"), "name").split("[")[0],
                        e = document.createElement("input");
                    e.setAttribute("type", "hidden"), e.setAttribute("name", "task_list_key"), e.setAttribute("value", t), o.appendChild(e)
                }
                t.classList.remove("is-comment-stale"), pe(o)
            }
            pt("codeEditor:ready", ".js-code-editor", Li), te(".js-task-list-container .js-task-list-field", function(t) {
                Ai(c(t, ".js-task-list-container"))
            }), pt("task-lists-move", "task-lists", function(t) {
                if (!(t instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/task-list.js:49");
                const {
                    src: e,
                    dst: n
                } = t.detail;
                Si(c(t.currentTarget, ".js-task-list-container"), "reordered", {
                    operation: "move",
                    src: e,
                    dst: n
                })
            }), pt("task-lists-check", "task-lists", function(t) {
                if (!(t instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/task-list.js:62");
                const {
                    position: e,
                    checked: n
                } = t.detail;
                Si(c(t.currentTarget, ".js-task-list-container"), `checked:${n?1:0}`, {
                    operation: "check",
                    position: e,
                    checked: n
                })
            }), Re(".js-task-list-container .js-comment-update", async function(t, e) {
                const n = c(t, ".js-task-list-container"),
                    o = t.elements.namedItem("task_list_track");
                o && o.remove();
                const r = t.elements.namedItem("task_list_operation");
                let i;
                r && r.remove();
                try {
                    i = await e.json()
                } catch (s) {
                    let t;
                    try {
                        t = JSON.parse(s.response.text)
                    } catch (sn) {}
                    if (t && t.stale) {
                        const e = t.updated_markdown,
                            o = t.updated_html,
                            r = t.version;
                        if (e && o && r) {
                            const t = l(n, ".js-comment-body"),
                                i = l(n, ".js-body-version"),
                                s = l(n, ".js-task-list-field", HTMLTextAreaElement);
                            t.innerHTML = o, s.value = e, n.setAttribute("data-body-version", r), i instanceof HTMLInputElement && (i.value = r)
                        }
                    } else window.location.reload()
                }
                i && (r && i.json.source && (l(n, ".js-task-list-field", HTMLTextAreaElement).value = i.json.source), Ai(n))
            })
        }
    }
});
//# sourceMappingURL=frameworks-9ac93ea6.js.map