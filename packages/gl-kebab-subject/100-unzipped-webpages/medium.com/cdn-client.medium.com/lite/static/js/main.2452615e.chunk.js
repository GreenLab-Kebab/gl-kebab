(window.webpackJsonp = window.webpackJsonp || []).push([
    [9], {
        "./config/polyfills.js": function(e, t, n) {
            "use strict";
            "undefined" == typeof Promise && (n("./node_modules/promise/lib/rejection-tracking.js").enable(), window.Promise = n("./node_modules/promise/lib/es6-extensions.js")), n("./node_modules/whatwg-fetch/fetch.js"), Object.assign = n("./node_modules/object-assign/index.js"), Object.entries || n("./node_modules/object.entries/index.js").shim(), n("./node_modules/raf/polyfill.js"), n("./node_modules/core-js/fn/array/from.js"), n("./node_modules/core-js/fn/array/find.js"), n("./node_modules/core-js/fn/object/values.js"), n("./node_modules/core-js/fn/string/starts-with.js"), n("./node_modules/core-js/fn/promise/finally.js"), n("./node_modules/core-js/es6/map.js"), n("./node_modules/core-js/es6/set.js"), n("./node_modules/core-js/es6/symbol.js"), n("./node_modules/core-js/fn/array/find-index.js"), n("./node_modules/core-js/fn/array/includes.js"), n("./node_modules/core-js/fn/symbol/iterator.js"), n("./node_modules/url-polyfill/url-polyfill.js"), "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype || n("./node_modules/intersection-observer/intersection-observer.js")
        },
        "./src/components/branch-banner/helpers/index.ts": function(e, t, n) {
            "use strict";
            n.d(t, "d", function() {
                return p
            }), n.d(t, "c", function() {
                return g
            }), n.d(t, "b", function() {
                return b
            }), n.d(t, "a", function() {
                return h
            }), n.d(t, "f", function() {
                return y
            }), n.d(t, "e", function() {
                return x
            });
            var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                a = n.n(i),
                c = n("./node_modules/graphql-tag/src/index.js"),
                s = n.n(c),
                l = n("./src/framework/source/SourceContext.tsx"),
                u = n("./src/util/referrers.ts");

            function d() {
                var e = a()(["\n  fragment buildBranchViewData_meteringInfo on MeteringInfo {\n    postIds\n  }\n"]);
                return d = function() {
                    return e
                }, e
            }

            function m() {
                var e = a()(["\n  fragment buildBranchViewData_post on Post {\n    creator {\n      name\n      id\n      isFollowing\n    }\n    collection {\n      name\n      id\n      viewerIsFollowing\n    }\n    layerCake\n    primaryTopic {\n      slug\n      name\n      isFollowing\n    }\n    content(postMeteringOptions: $postMeteringOptions) {\n      isLockedPreviewOnly\n    }\n  }\n"]);
                return m = function() {
                    return e
                }, e
            }
            var f = function() {
                    var e = window.branch && window.branch.closeJourney && window.branch.setBranchViewData && window.branch.track && window.branch.link;
                    return e
                },
                p = function(e) {
                    f() && window.branch.closeJourney(function() {
                        e && e()
                    })
                },
                g = s()(m()),
                b = s()(d()),
                h = function(e) {
                    var t = e.post,
                        n = e.meteringInfo,
                        r = e.referrer,
                        o = e.referrerSource,
                        i = e.viewer,
                        a = i && i.mediumMemberAt ? i.mediumMemberAt : null,
                        c = t.creator,
                        s = t.layerCake,
                        l = t.primaryTopic,
                        u = t.collection,
                        d = t.content,
                        m = s && (1 === s || 2 === s || 3 === s),
                        f = m && l ? l.name : null,
                        p = m && l ? l.slug : null,
                        g = v(r, o),
                        b = {
                            data: {
                                is_logged_in: !!i,
                                is_member: !!a && a > 0,
                                user_created_at: i ? i.createdAt : null,
                                medium_member_at: a,
                                post_topic_name: f,
                                post_topic_slug: p,
                                post_publication_name: u ? u.name : null,
                                post_publication_id: u ? u.id : null,
                                layer_cake: s,
                                post_creator_name: c ? c.name : null,
                                post_creator_id: c ? c.id : null,
                                source: g,
                                following_author: !(!c || !c.isFollowing),
                                following_pub: !(!u || !u.viewerIsFollowing),
                                following_topic: !!(m && l && l.isFollowing)
                            }
                        };
                    return d.isLockedPreviewOnly ? b.data.meter_state = "paywalled" : b.data.is_member ? b.data.meter_state = "member" : n && n.postIds && n.postIds.length > 0 ? b.data.meter_state = "metered" : b.data.meter_state = "not_metered", b
                },
                v = function(e, t) {
                    if (Object(u.c)(e)) return "Twitter";
                    if (Object(u.a)(e)) return "Facebook";
                    if (t) {
                        var n = Object(l.c)(t),
                            r = n.name,
                            i = n.dimension;
                        if ("email" === r && i) {
                            var a = i.split("."),
                                c = o()(a, 2),
                                s = c[0],
                                d = c[1];
                            if ("newsletter" === s) return "Pub Digest";
                            if ("member" === s) return "Marketing Email";
                            if ("digest" === s) {
                                if ("reader" === d) return "Daily Digest";
                                if ("weekly" === d) return "Weekly Digest"
                            }
                        }
                    }
                    return Object(u.b)(e, t) ? "Search" : "Other"
                },
                y = function(e) {
                    f() && window.branch.setBranchViewData(e)
                },
                x = function(e) {
                    f() && window.branch.track("pageview", {}, function() {
                        e && e()
                    })
                }
        },
        "./src/components/collection/CollectionAvatar.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return h
            }), n.d(t, "a", function() {
                return v
            });
            var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./node_modules/graphql-tag/src/index.js"),
                c = n.n(a),
                s = n("./node_modules/react-redux/es/index.js"),
                l = n("./src/framework/design-system/components/index.ts"),
                u = n("./src/framework/design-system/util/style/converters.ts"),
                d = n("./src/components/ui/image/index.ts"),
                m = n("./src/util/miroImage.ts"),
                f = n("./src/util/routes.ts");

            function p() {
                var e = o()(["\n  fragment CollectionAvatar_collection on Collection {\n    name\n    avatar {\n      id\n    }\n    ...collectionUrl_collection\n  }\n  ", "\n"]);
                return p = function() {
                    return e
                }, e
            }
            var g = 60,
                b = function(e) {
                    return function(t) {
                        return {
                            borderRadius: Object(u.b)(t.borderRadius.regular),
                            width: Object(u.b)(e),
                            height: Object(u.b)(e)
                        }
                    }
                };
            var h = c()(p(), f.z),
                v = Object(s.c)(function(e) {
                    return {
                        currentLocation: e.navigation.currentLocation
                    }
                })(function(e) {
                    var t = e.collection,
                        n = e.currentLocation,
                        r = e.size,
                        o = void 0 === r ? g : r,
                        a = e.link;
                    if (!t || !t.avatar || !t.avatar.id) return null;
                    var c = t.avatar,
                        s = t.name,
                        u = Object(f.y)(t, n),
                        p = i.createElement(d.b, {
                            rules: [b(o)],
                            miroId: c.id,
                            alt: s || "Publication avatar",
                            width: o,
                            height: o,
                            strategy: m.a.Crop
                        });
                    return a ? i.createElement(l.f, {
                        href: u
                    }, p) : p
                })
        },
        "./src/components/debug/GoogleAnalytics.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return c
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./node_modules/react-helmet-async/lib/index.module.js"),
                i = n("./src/components/session/WithFlag.tsx"),
                a = n("./node_modules/react-redux/es/index.js");
            t.a = Object(a.c)(function(e) {
                return {
                    googleAnalyticsCode: e.config.googleAnalyticsCode,
                    isBot: e.client.isBot,
                    isAmp: e.config.isAmp
                }
            })(function(e) {
                var t = e.googleAnalyticsCode,
                    n = e.isBot,
                    a = e.isAmp;
                return n || a ? null : r.createElement(i.a, {
                    name: "dont_track_user"
                }, function(e) {
                    return e ? null : r.createElement(o.a, null, r.createElement("script", null, "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\nga('create', '".concat(t, "', 'auto');\nga('send', 'pageview');")))
                })
            });
            var c = function(e, t, n) {
                r.useEffect(function() {
                    var r = window ? window.ga : null;
                    !t && !n && e && r && e.forEach(function(e, t) {
                        var n = "tracker".concat(t);
                        r("create", e, "auto", n), r("".concat(n, ".send"), "pageview")
                    })
                }, [e, t, n])
            }
        },
        "./src/components/format/Date.tsx": function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", function() {
                    return o
                });
                var r = n("./node_modules/date-fns/index.js");

                function o(t) {
                    var n = t.timestamp;
                    return Object(r.getYear)(n) === Object(r.getYear)(e.Date.now()) ? Object(r.format)(n, "MMM D") : Object(r.format)(n, "MMM D, YYYY")
                }
            }).call(this, n("./node_modules/webpack/buildin/global.js"))
        },
        "./src/components/format/TimeAgo.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("./node_modules/date-fns/index.js");

            function o(e) {
                var t = e.timestamp;
                return Object(r.distanceInWords)(Date.now(), t, {
                    addSuffix: !0
                })
            }
        },
        "./src/components/metabar/Logo.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/react/index.js"),
                o = n.n(r),
                i = n("./node_modules/react-loadable/lib/index.js"),
                a = n.n(i),
                c = n("./node_modules/react-redux/es/index.js"),
                s = n("./src/framework/style/index.ts"),
                l = n("./src/styles/colors.ts");

            function u() {
                return (u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var d = o.a.createElement("path", {
                    d: "M5 40V5h35v35H5zm8.56-12.63c0 .56-.03.69-.32 1.03L10.8 31.4v.4h6.97v-.4L15.3 28.4c-.29-.34-.34-.5-.34-1.03v-8.95l6.13 13.36h.71l5.26-13.36v10.64c0 .3 0 .35-.19.53l-1.85 1.8v.4h9.2v-.4l-1.83-1.8c-.18-.18-.2-.24-.2-.53V15.94c0-.3.02-.35.2-.53l1.82-1.8v-.4h-6.47l-4.62 11.55-5.2-11.54h-6.8v.4l2.15 2.63c.24.3.29.37.29.77v10.35z"
                }),
                m = function(e) {
                    return o.a.createElement("svg", u({
                        width: 45,
                        height: 45,
                        viewBox: "0 0 45 45"
                    }, e), d)
                };

            function f() {
                return (f = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var p = o.a.createElement("path", {
                    d: "M56.3 19.5c0 .4 0 .5.3.7l1.5 1.4v.1h-6.5V19c-.7 1.8-2.4 3-4.3 3-3.3 0-5.8-2.6-5.8-7.5 0-4.5 2.6-7.6 6.3-7.6 1.6-.1 3.1.8 3.8 2.4V3.2c0-.3-.1-.6-.3-.7l-1.4-1.4V1l6.5-.8v19.3zm-4.8-.8V9.5c-.5-.6-1.2-.9-1.9-.9-1.6 0-3.1 1.4-3.1 5.7 0 4 1.3 5.4 3 5.4.8.1 1.6-.3 2-1zm9.1 3.1V9.4c0-.3-.1-.6-.3-.7l-1.4-1.5v-.1h6.5v12.5c0 .4 0 .5.3.7l1.4 1.4v.1h-6.5zm-.2-19.2C60.4 1.2 61.5 0 63 0c1.4 0 2.6 1.2 2.6 2.6S64.4 5.3 63 5.3a2.6 2.6 0 0 1-2.6-2.7zm22.5 16.9c0 .4 0 .5.3.7l1.5 1.4v.1h-6.5v-3.2c-.6 2-2.4 3.4-4.5 3.4-2.9 0-4.4-2.1-4.4-6.2 0-1.9 0-4.1.1-6.5 0-.3-.1-.5-.3-.7L67.7 7v.1H74v8c0 2.6.4 4.4 2 4.4.9-.1 1.7-.6 2.1-1.3V9.5c0-.3-.1-.6-.3-.7l-1.4-1.5v-.2h6.5v12.4zm22 2.3c0-.5.1-6.5.1-7.9 0-2.6-.4-4.5-2.2-4.5-.9 0-1.8.5-2.3 1.3.2.8.3 1.7.3 2.5 0 1.8-.1 4.2-.1 6.5 0 .3.1.5.3.7l1.5 1.4v.1H96c0-.4.1-6.5.1-7.9 0-2.7-.4-4.5-2.2-4.5-.9 0-1.7.5-2.2 1.3v9c0 .4 0 .5.3.7l1.4 1.4v.1h-6.5V9.5c0-.3-.1-.6-.3-.7l-1.4-1.5v-.2h6.5v3.1a4.6 4.6 0 0 1 4.6-3.4c2.2 0 3.6 1.2 4.2 3.5.7-2.1 2.7-3.6 4.9-3.5 2.9 0 4.5 2.2 4.5 6.2 0 1.9-.1 4.2-.1 6.5-.1.3.1.6.3.7l1.4 1.4v.1h-6.6zm-81.4-2l1.9 1.9v.1h-9.8v-.1l2-1.9c.2-.2.3-.4.3-.7V7.3c0-.5 0-1.2.1-1.8L11.4 22h-.1L4.5 6.8c-.1-.4-.2-.4-.3-.6v10c-.1.7 0 1.3.3 1.9l2.7 3.6v.1H0v-.1L2.7 18c.3-.6.4-1.3.3-1.9v-11c0-.5-.1-1.1-.5-1.5L.7 1.1V1h7l5.8 12.9L18.6 1h6.8v.1l-1.9 2.2c-.2.2-.3.5-.3.7v15.2c0 .2.1.5.3.6zm7.6-5.9c0 3.8 1.9 5.3 4.2 5.3 1.9.1 3.6-1 4.4-2.7h.1c-.8 3.7-3.1 5.5-6.5 5.5-3.7 0-7.2-2.2-7.2-7.4 0-5.5 3.5-7.6 7.3-7.6 3.1 0 6.4 1.5 6.4 6.2v.8h-8.7zm0-.8h4.3v-.8c0-3.9-.8-4.9-2-4.9-1.4.1-2.3 1.6-2.3 5.7z"
                }),
                g = function(e) {
                    return o.a.createElement("svg", f({
                        height: 22,
                        width: 112,
                        viewBox: "0 0 111.5 22"
                    }, e), p)
                };
            n("./src/svg/logo-wordmark-138x27px.svg");

            function b() {
                return (b = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var h = o.a.createElement("path", {
                    d: "M1 29V1",
                    stroke: "#D5D5D5",
                    strokeWidth: .5,
                    fill: "none",
                    strokeLinecap: "round"
                }),
                v = function(e) {
                    return o.a.createElement("svg", b({
                        width: 2,
                        height: 29
                    }, e), h)
                };
            n.d(t, "a", function() {
                return k
            }), n.d(t, "c", function() {
                return S
            }), n.d(t, "b", function() {
                return C
            });
            var y = a()({
                    loading: function() {
                        return null
                    },
                    loader: function() {
                        return n.e(8).then(n.bind(null, "./src/svg/hatch-monogram-45px.svg"))
                    },
                    modules: ["src/svg/hatch-monogram-45px.svg"],
                    webpack: function() {
                        return ["./src/svg/hatch-monogram-45px.svg"]
                    }
                }),
                x = a()({
                    loading: function() {
                        return null
                    },
                    loader: function() {
                        return n.e(8).then(n.bind(null, "./src/svg/hatch-79x22px.svg"))
                    },
                    modules: ["src/svg/hatch-79x22px.svg"],
                    webpack: function() {
                        return ["./src/svg/hatch-79x22px.svg"]
                    }
                }),
                E = function(e) {
                    return function(t) {
                        return {
                            fill: e ? t.baseColor.fill.dark : t.baseColor.fill.normal
                        }
                    }
                },
                w = function(e) {
                    return {
                        fill: l.x
                    }
                },
                O = function(e) {
                    return {
                        fill: e.baseColor.fill.normal
                    }
                },
                j = function(e) {
                    return {
                        fill: l.x
                    }
                },
                _ = function(e) {
                    return {
                        isHatch: "Hatch" === e.config.productName
                    }
                },
                k = Object(c.c)(_)(function(e) {
                    var t = e.isHatch,
                        n = e.dark,
                        o = Object(s.useCx)();
                    return t ? r.createElement(y, {
                        className: o(w)
                    }) : r.createElement(m, {
                        className: o(E(n))
                    })
                }),
                S = Object(c.c)(_)(function(e) {
                    var t = e.isHatch,
                        n = Object(s.useCx)();
                    return t ? r.createElement(x, {
                        className: n(j)
                    }) : r.createElement(g, {
                        className: n(O)
                    })
                }),
                C = function() {
                    return r.createElement(v, null)
                }
        },
        "./src/components/metabar/Metabar.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                a = n.n(i),
                c = n("./node_modules/react/index.js"),
                s = n("./node_modules/react-redux/es/index.js"),
                l = n("./node_modules/graphql-tag/src/index.js"),
                u = n.n(l),
                d = n("./src/components/metabar/constants.ts"),
                m = n("./src/components/metabar/MetabarActions.tsx"),
                f = n("./src/components/metabar/MetabarActionsLO.tsx"),
                p = n("./src/components/metabar/Logo.tsx"),
                g = n("./src/components/navigation/Anchor.tsx"),
                b = n("./src/framework/style/index.ts"),
                h = n("./src/styles/flex.ts"),
                v = n("./src/styles/position.ts"),
                y = n("./src/styles/zIndex.ts"),
                x = function() {
                    return {
                        zIndex: y.a.metabarCenter,
                        pointerEvents: "none"
                    }
                },
                E = function() {
                    return {
                        pointerEvents: "auto"
                    }
                },
                w = function() {
                    var e = Object(b.useCx)();
                    return c.createElement("div", {
                        className: e([v.a, Object(h.a)({
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: ""
                        }), x])
                    }, c.createElement(g.a, {
                        href: "/",
                        "aria-label": "Homepage",
                        className: e(E)
                    }, c.createElement(p.c, null)))
                },
                O = n("./src/components/metabar/MetabarLayout.tsx"),
                j = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                _ = n.n(j),
                k = n("./src/components/session/WithViewer.tsx"),
                S = n("./src/framework/design-system/components/index.ts"),
                C = n("./src/framework/design-system/type/index.ts"),
                P = n("./src/util/routes.ts"),
                I = n("./src/styles/breakpoints.ts");

            function L() {
                var e = o()(["\n  fragment MetabarLeft_post on Post {\n    creator {\n      id\n    }\n    isPublished\n    pendingCollection {\n      creator {\n        id\n      }\n      name\n      viewerIsEditor\n    }\n    statusForCollection\n  }\n"]);
                return L = function() {
                    return e
                }, e
            }

            function T() {
                var e = o()(["\n  fragment MetabarLeft_collection on Collection {\n    name\n  }\n"]);
                return T = function() {
                    return e
                }, e
            }
            var A = function(e) {
                return _()({
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: "20px",
                    color: e.baseColor.text.normal,
                    marginTop: "7px",
                    marginLeft: "10px",
                    display: "-webkit-box",
                    WebkitLineClamp: "1",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                }, I.sm(e), {
                    fontSize: "14px",
                    marginTop: "0px",
                    marginLeft: "4px",
                    WebkitLineClamp: "2"
                })
            };
            var N = function(e) {
                    var t = e.authDomain,
                        n = e.isMonogramOnly,
                        r = void 0 !== n && n,
                        o = e.post,
                        i = e.topic,
                        a = Object(b.useCx)();
                    return c.createElement(k.a, null, function(e) {
                        var n = function(e, t) {
                            if (!e) return "";
                            var n = e.pendingCollection,
                                r = e.creator && e.creator.id,
                                o = !!t && !!n && !!n.creator && n.creator.id === t.id,
                                i = !!n && n.viewerIsEditor,
                                a = o || i,
                                c = a || !!t && t.id === r,
                                s = c && n && n.name || "";
                            return e.isPublished ? s ? "Submitted to ".concat(s) : c && "PENDING" === e.statusForCollection ? "Submitted story" : "" : c && "PENDING" === e.statusForCollection ? s ? a && t && t.id === r ? "Draft in ".concat(s) : "Draft submitted to ".concat(s) : "Submitted draft" : "NOT_YET_SUBMITTED" === e.statusForCollection ? "Unsubmitted draft" : "Draft"
                        }(o, e);
                        return c.createElement(S.b, {
                            display: "flex",
                            alignItems: "center"
                        }, c.createElement(g.a, {
                            href: "/",
                            "aria-label": "Homepage"
                        }, c.createElement(S.b, {
                            display: r || n ? "none" : "block",
                            sm: {
                                display: "none"
                            }
                        }, c.createElement(p.c, null)), c.createElement(S.b, {
                            display: r || n ? "block" : "none",
                            sm: {
                                display: "block",
                                marginLeft: "-5px"
                            }
                        }, c.createElement(p.a, null))), n ? c.createElement(S.b, {
                            marginLeft: "10px",
                            paddingTop: "2px"
                        }, c.createElement(C.a, {
                            color: "DARKER",
                            scale: "M",
                            tag: "div"
                        }, n)) : null, !n && i && i.slug && i.name && c.createElement(c.Fragment, null, c.createElement(S.b, {
                            marginTop: "1px",
                            marginLeft: "10px",
                            sm: {
                                display: "none"
                            }
                        }, c.createElement(p.b, null)), c.createElement(g.a, {
                            href: Object(P.zb)(t, i.slug || "")
                        }, c.createElement("div", {
                            className: a(A)
                        }, i.name))))
                    })
                },
                R = u()(T()),
                D = u()(L());

            function U() {
                var e = o()(["\n  fragment Metabar_post on Post {\n    id\n    creator {\n      id\n    }\n    primaryTopic {\n      name\n      slug\n    }\n    ...MetabarActions_post\n    ...MetabarActionsLO_post\n    ...MetabarLeft_post\n  }\n  ", "\n  ", "\n  ", "\n"]);
                return U = function() {
                    return e
                }, e
            }

            function M() {
                var e = o()(["\n  fragment Metabar_collection on Collection {\n    ...MetabarLeft_collection\n  }\n  ", "\n"]);
                return M = function() {
                    return e
                }, e
            }
            n.d(t, "b", function() {
                return B
            }), n.d(t, "c", function() {
                return H
            }), n.d(t, "a", function() {
                return F
            });
            var B = u()(M(), R),
                H = u()(U(), m.b, f.a, D),
                F = Object(s.c)(function(e) {
                    return {
                        authDomain: e.config.authDomain,
                        isNativeMedium: e.client.isNativeMedium
                    }
                })(function(e) {
                    var t = e.authDomain,
                        n = e.behavior,
                        r = e.post,
                        o = e.topic,
                        i = e.isAmp,
                        s = e.isFixed,
                        l = e.isLogoOnly,
                        u = e.isLogoCentered,
                        p = e.isMonogramOnly,
                        g = e.isTransparent,
                        b = e.isNativeMedium,
                        h = e.marginBottom,
                        v = e.marginBottomSm,
                        x = c.useState(!1),
                        E = a()(x, 2),
                        j = E[0],
                        _ = E[1];
                    if (b) return null;
                    var k = !l && !u;
                    return c.createElement(O.a, {
                        behavior: n,
                        height: d.a,
                        heightSm: d.c,
                        isFixed: s,
                        isLocked: j,
                        isTransparent: g,
                        marginBottom: h,
                        marginBottomSm: v
                    }, c.createElement(S.w, null, c.createElement(S.b, {
                        display: "flex",
                        alignItems: "center",
                        height: "".concat(d.a, "px"),
                        sm: {
                            display: "flex",
                            height: "".concat(d.c, "px")
                        }
                    }, u ? c.createElement(w, null) : c.createElement(S.b, {
                        flexGrow: "1",
                        zIndex: y.a.metabar
                    }, c.createElement(N, {
                        authDomain: t,
                        post: r,
                        isMonogramOnly: p,
                        topic: o
                    })), k && c.createElement(S.b, {
                        flexGrow: "0",
                        zIndex: y.a.metabar
                    }, i ? c.createElement(f.b, {
                        post: r
                    }) : c.createElement(m.c, {
                        post: r,
                        setIsMetabarLocked: _
                    })))))
                })
        },
        "./src/components/metabar/MetabarActions.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n.n(i),
                c = n("./node_modules/graphql-tag/src/index.js"),
                s = n.n(c),
                l = n("./node_modules/react-redux/es/index.js"),
                u = n("./src/components/collection/CollectionAvatar.tsx"),
                d = n("./src/framework/design-system/components/index.ts"),
                m = n("./src/components/ui/PopoverMenu.tsx"),
                f = n("./src/util/routes.ts"),
                p = n("./src/components/style/BaseThemeProvider.tsx");

            function g() {
                var e = o()(["\n  fragment CollectionMetabarActionsPopover_collection on Collection {\n    id\n    slug\n    isEnrolledInHightower\n    ...collectionUrl_collection\n  }\n  ", "\n"]);
                return g = function() {
                    return e
                }, e
            }
            var b = s()(g(), f.z),
                h = Object(l.c)(function(e) {
                    return {
                        authDomain: e.config.authDomain,
                        currentLocation: e.navigation.currentLocation
                    }
                })(function(e) {
                    var t = e.authDomain,
                        n = e.children,
                        r = e.collection,
                        o = e.currentLocation,
                        a = r.isEnrolledInHightower,
                        c = i.createElement(m.a, null, i.createElement(m.b, null, i.createElement(d.u, {
                            href: Object(f.o)(r, t)
                        }, "New story")), i.createElement(m.c, null), i.createElement(m.b, null, i.createElement(d.u, {
                            href: Object(f.x)(r, t)
                        }, "Stories")), i.createElement(m.b, null, i.createElement(d.u, {
                            href: Object(f.w)(r, o)
                        }, "Stats")), i.createElement(m.b, null, i.createElement(d.u, {
                            href: Object(f.t)(r, t)
                        }, "Letters")), i.createElement(m.b, null, i.createElement(d.u, {
                            href: Object(f.s)(r, t)
                        }, "Followers")), a ? i.createElement(i.Fragment, null, i.createElement(m.c, null), i.createElement(m.b, null, i.createElement(d.u, {
                            href: Object(f.q)(r, t)
                        }, "Medium Partner Program"))) : null, i.createElement(m.c, null), i.createElement(m.b, null, i.createElement(d.u, {
                            href: Object(f.u)(r, t)
                        }, "Navigation")), i.createElement(m.b, null, i.createElement(d.u, {
                            href: Object(f.r)(r, t)
                        }, "Feature pages")), i.createElement(m.b, null, i.createElement(d.u, {
                            href: Object(f.v)(r, t)
                        }, "Homepage and settings")));
                    return i.createElement(d.K, null, function(e) {
                        var t = e.isVisible,
                            r = e.toggle,
                            o = e.hide;
                        return i.createElement(p.a, null, i.createElement(d.x, {
                            isVisible: t,
                            hide: o,
                            popoverRenderFn: function() {
                                return c
                            },
                            display: "flex"
                        }, i.createElement(d.b, {
                            display: "flex",
                            alignItems: "center",
                            paddingTop: "10px",
                            paddingBottom: "10px"
                        }, i.createElement(d.u, {
                            onClick: r
                        }, n))))
                    })
                }),
                v = n("./src/components/user/UserAvatar.tsx"),
                y = n("./src/framework/reporter/index.ts"),
                x = n("./src/log/index.ts");
            var E = Object(l.c)(function(e) {
                    return {
                        authDomain: e.config.authDomain,
                        xsrf: e.session.xsrf
                    }
                })(function(e) {
                    var t, n, r = e.authDomain,
                        o = e.children,
                        a = e.viewer,
                        c = e.xsrf,
                        s = e.setIsMetabarLocked,
                        l = a.username,
                        u = a.mediumMemberAt,
                        g = a.isPartnerProgramEnrolled,
                        b = Object(y.c)();
                    if (!a || !l) return null;
                    c || x.a.error("No xsrf token found."), n = i.createElement("div", null, i.createElement(d.b, {
                        display: "flex",
                        alignItems: "center",
                        marginTop: "12px",
                        marginBottom: "20px"
                    }, i.createElement(v.d, {
                        user: a,
                        scale: "S",
                        link: !0
                    }), i.createElement(d.b, {
                        marginLeft: "16px"
                    }, u > 0 && i.createElement(d.u, {
                        href: Object(f.V)(r),
                        linkStyle: "OBVIOUS"
                    }, "Member"), i.createElement(d.u, {
                        href: Object(f.U)(r, l),
                        linkStyle: "OBVIOUS"
                    }, i.createElement(d.d, {
                        strong: !0
                    }, a.name)), i.createElement(d.u, {
                        href: Object(f.U)(r, l),
                        linkStyle: "SUBTLE",
                        inline: !0
                    }, i.createElement(d.d, null, "@", a.username)))), u ? i.createElement(d.u, {
                        href: Object(f.K)(r)
                    }, "Gift membership") : i.createElement(d.u, {
                        href: Object(f.Db)(r),
                        linkStyle: "OBVIOUS"
                    }, "Become a member")), t = u ? i.createElement(d.u, {
                        href: Object(f.Sb)(r)
                    }, "Reading list") : i.createElement(d.u, {
                        href: Object(f.l)(r)
                    }, "Bookmarks");
                    var h = i.createElement(d.b, {
                        maxWidth: "220px"
                    }, i.createElement(m.a, null, i.createElement(m.b, null, n), i.createElement(m.c, null), i.createElement(m.b, null, i.createElement(d.u, {
                        href: Object(f.W)(r)
                    }, "New story")), i.createElement(m.b, null, i.createElement(d.u, {
                        href: Object(f.bc)(r)
                    }, "Stories")), i.createElement(m.b, null, i.createElement(d.u, {
                        href: Object(f.Tb)(r)
                    }, "Series")), i.createElement(m.b, null, i.createElement(d.u, {
                        href: Object(f.Xb)(r)
                    }, "Stats")), i.createElement(m.c, null), i.createElement(m.b, null, i.createElement(d.u, {
                        href: g ? Object(f.Qb)(r) : Object(f.Y)(r)
                    }, "Medium Partner Program")), i.createElement(m.c, null), i.createElement(m.b, null, t), i.createElement(m.b, null, i.createElement(d.u, {
                        href: Object(f.Rb)(r)
                    }, "Publications")), i.createElement(m.b, null, i.createElement(d.u, {
                        href: Object(f.Pb)(r)
                    }, "Customize your interests")), i.createElement(m.c, null), i.createElement(m.b, null, i.createElement(d.u, {
                        href: Object(f.U)(r, l)
                    }, "Profile")), i.createElement(m.b, null, i.createElement(d.u, {
                        href: Object(f.Vb)(r)
                    }, "Settings")), i.createElement(m.b, null, i.createElement(d.u, {
                        href: Object(f.M)()
                    }, "Help")), c ? i.createElement(m.b, null, i.createElement(d.u, {
                        href: Object(f.mb)(c)
                    }, "Sign out")) : null));
                    return i.createElement(d.K, null, function(e) {
                        var t = e.isVisible,
                            n = e.toggle,
                            r = e.hide;
                        return i.createElement(p.a, null, i.createElement(d.x, {
                            isVisible: t,
                            hide: function() {
                                r(), s(!1)
                            },
                            popoverRenderFn: function() {
                                return h
                            },
                            display: "flex",
                            flip: !1,
                            setMaxHeight: !0
                        }, i.createElement(d.b, {
                            display: "flex",
                            alignItems: "center",
                            paddingTop: "10px",
                            paddingBottom: "10px"
                        }, i.createElement(d.u, {
                            onClick: function() {
                                b.event("nav.clicked", {
                                    element: "userActions"
                                }), n(), s(!t)
                            }
                        }, o))))
                    })
                }),
                w = n("./src/components/upsell/UpsellClickable.tsx"),
                O = n("./src/components/session/WithViewer.tsx"),
                j = n("./src/framework/source/index.ts"),
                _ = n("./src/framework/track/UpsellPresentationTracker.tsx");

            function k() {
                var e = o()(["\n  fragment MetabarButtonConversionLI_post on Post {\n    ...UpsellClickable_post\n  }\n  ", "\n"]);
                return k = function() {
                    return e
                }, e
            }
            var S = s()(k(), w.b),
                C = function(e) {
                    var t = e.post;
                    return i.createElement(j.b, {
                        source: {
                            name: "upgrade_membership",
                            dimension: "nav_full"
                        }
                    }, i.createElement(_.a, null, i.createElement(w.a, {
                        isButton: !0,
                        buttonStyle: "SUBTLE",
                        buttonSize: "SMALL",
                        post: t
                    }, i.createElement(O.a, null, function(e) {
                        return e && e.hasPastMemberships ? "Resume membership" : "Upgrade"
                    }))))
                },
                P = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                I = n.n(P),
                L = n("./src/util/hooks/useUserAgentMobileOrTablet.tsx");

            function T() {
                var e = o()(["\n  fragment MetabarPostMenuList_post on Post {\n    id\n    shareKey\n    mediumUrl\n  }\n"]);
                return T = function() {
                    return e
                }, e
            }
            var A = s()(T()),
                N = Object(l.c)(function(e) {
                    return {
                        authDomain: e.config.authDomain
                    }
                })(function(e) {
                    var t = e.authDomain,
                        n = e.openFriendLinkPopover,
                        r = e.post,
                        o = r && r.shareKey,
                        a = r && r.mediumUrl,
                        c = !Object(L.a)(),
                        s = o && a ? i.createElement(m.b, null, i.createElement(d.u, {
                            onClick: n
                        }, "Share Friend Link")) : null;
                    return i.createElement(m.a, null, c ? i.createElement(m.b, null, i.createElement(d.u, {
                        href: Object(f.bb)(t, r.id)
                    }, "Edit story")) : null, i.createElement(m.b, null, i.createElement(d.u, {
                        href: Object(f.Wb)(t, r.id)
                    }, "View stats")), s)
                }),
                R = n("./src/components/social/ShareFriendLink.tsx"),
                D = n("./src/framework/design-system/type/Detail.tsx");

            function U() {
                return (U = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var M = a.a.createElement("path", {
                    d: "M2.26 10.19a5.97 5.97 0 0 0-.01.31l.01.32a1.7 1.7 0 0 1-.18.88l-1 1.96a.74.74 0 0 0 .03.73l1.03 1.67c.16.25.45.42.78.44l2.32.17c.28.02.55.11.8.26l.63.34c.27.13.49.3.66.54l1.32 1.8c.18.24.49.39.82.39h2.06c.33 0 .64-.15.82-.4l1.32-1.8c.17-.22.4-.4.65-.53.25-.12.45-.23.64-.34a1.81 1.81 0 0 1 .8-.26l2.32-.17a.98.98 0 0 0 .77-.44l1.04-1.67a.74.74 0 0 0 .03-.73l-1-1.96a1.7 1.7 0 0 1-.18-.89l.01-.31a6.16 6.16 0 0 0-.01-.32 1.7 1.7 0 0 1 .18-.88l1-1.96a.74.74 0 0 0-.03-.73l-1.03-1.67a.98.98 0 0 0-.78-.44l-2.32-.17a1.81 1.81 0 0 1-.8-.26 8.68 8.68 0 0 0-.63-.34 1.76 1.76 0 0 1-.66-.54l-1.32-1.8a1.02 1.02 0 0 0-.82-.39H9.47c-.33 0-.64.15-.82.4L7.33 3.2a1.76 1.76 0 0 1-.66.53 8.6 8.6 0 0 0-.63.34 1.81 1.81 0 0 1-.8.26l-2.33.17a.98.98 0 0 0-.77.44L1.11 6.61a.74.74 0 0 0-.03.73l1 1.96c.14.27.2.58.18.88zm-1.07-.43L.2 7.8a1.74 1.74 0 0 1 .07-1.72L1.3 4.42c.32-.53.9-.87 1.55-.92l2.32-.17a.83.83 0 0 0 .36-.12c.22-.13.45-.26.7-.38a.78.78 0 0 0 .3-.23L7.85.8C8.2.3 8.82 0 9.47 0h2.06c.65 0 1.26.3 1.62.8l1.32 1.8a.76.76 0 0 0 .3.23c.25.12.48.25.7.38a.82.82 0 0 0 .36.12l2.33.17a1.98 1.98 0 0 1 1.54.92l1.04 1.66c.32.53.35 1.17.07 1.72l-1 1.96a.71.71 0 0 0-.07.36 6.95 6.95 0 0 1 0 .75.72.72 0 0 0 .07.37l1 1.96c.28.55.25 1.2-.07 1.72l-1.04 1.66c-.32.53-.9.87-1.55.92l-2.32.17a.83.83 0 0 0-.36.12 9.79 9.79 0 0 1-.7.38.79.79 0 0 0-.3.23l-1.32 1.8c-.37.5-.97.8-1.62.8H9.47c-.65 0-1.26-.3-1.62-.8l-1.32-1.8a.79.79 0 0 0-.3-.23 9.66 9.66 0 0 1-.7-.38.82.82 0 0 0-.36-.12l-2.33-.17a1.98 1.98 0 0 1-1.55-.92L.26 14.92A1.74 1.74 0 0 1 .2 13.2l1-1.96a.71.71 0 0 0 .07-.36 6.95 6.95 0 0 1 0-.75.72.72 0 0 0-.07-.37zm9.12-1.95a2.75 2.75 0 0 0-2.75 2.75 2.75 2.75 0 0 0 2.75 2.75 2.75 2.75 0 0 0 2.75-2.75 2.75 2.75 0 0 0-2.75-2.75zm0-1a3.75 3.75 0 0 1 3.75 3.75 3.75 3.75 0 0 1-3.75 3.75 3.75 3.75 0 0 1-3.75-3.75 3.75 3.75 0 0 1 3.75-3.75z"
                }),
                B = function(e) {
                    return a.a.createElement("svg", U({
                        width: 21,
                        height: 21
                    }, e), M)
                };

            function H() {
                var e = o()(["\n  fragment MetabarPostMenuButton_post on Post {\n    id\n    ...ShareFriendLink_post\n    ...MetabarPostMenuList_post\n  }\n  ", "\n  ", "\n"]);
                return H = function() {
                    return e
                }, e
            }
            var F = {
                    border: 0,
                    clip: "rect(1px, 1px, 1px, 1px)",
                    clipPath: "inset(50%)",
                    height: "1px",
                    margin: "-1px",
                    overflow: "hidden",
                    padding: 0,
                    position: "absolute",
                    width: "1px",
                    wordWrap: "normal !important"
                },
                z = s()(H(), R.b, A),
                q = function(e) {
                    var t = e.post,
                        n = Object(y.c)(),
                        r = i.useCallback(function() {
                            n.event("editor.writerControlsOpen", {
                                postId: t.id
                            })
                        }),
                        o = i.useCallback(function() {
                            n.event("editor.shareMeterBypassUrlOpen", {
                                postId: t.id
                            })
                        }),
                        a = i.useState(!1),
                        c = I()(a, 2),
                        s = c[0],
                        l = c[1],
                        u = function() {
                            l(!0), o()
                        };
                    return i.createElement(d.K, null, function(e) {
                        var n = e.isVisible,
                            o = e.toggle,
                            a = e.hide,
                            c = function() {
                                l(!1), a()
                            };
                        return i.createElement(j.b, {
                            source: {
                                name: "post_page",
                                dimension: "writer_controls",
                                postId: t.id
                            }
                        }, i.createElement(p.a, null, i.createElement(d.x, {
                            isVisible: n,
                            hide: c,
                            popoverRenderFn: function(e) {
                                return s ? (e(), i.createElement(d.b, {
                                    width: "330px",
                                    padding: "15px"
                                }, i.createElement(R.a, {
                                    post: t
                                }), i.createElement(d.b, {
                                    marginTop: "20px"
                                }, i.createElement(D.a, {
                                    scale: "M"
                                }, i.createElement(d.u, {
                                    onClick: c
                                }, "Cancel"))))) : (e(), i.createElement(N, {
                                    openFriendLinkPopover: u,
                                    post: t
                                }))
                            }
                        }, i.createElement(d.b, {
                            display: "flex",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            marginLeft: "16px",
                            marginRight: "16px",
                            sm: {
                                display: "flex",
                                marginLeft: "10px",
                                marginRight: "10px"
                            }
                        }, i.createElement(d.u, {
                            onClick: function() {
                                r(), o()
                            }
                        }, i.createElement(d.b, {
                            tag: B
                        }), i.createElement("span", {
                            style: F
                        }, "Post management tools menu"))))))
                    })
                },
                W = n("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),
                V = n.n(W),
                G = n("./node_modules/lodash/cloneDeep.js"),
                K = n.n(G),
                X = n("./node_modules/react-apollo/react-apollo.esm.js");

            function Y() {
                return (Y = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var Q = a.a.createElement("path", {
                    d: "M-273.33 423.67l-1.67-1.52v-3.65a5.5 5.5 0 0 0-6.04-5.47 5.66 5.66 0 0 0-4.96 5.71v3.41l-1.68 1.55a1 1 0 0 0-.32.74V427a1 1 0 0 0 1 1h3.49a3.08 3.08 0 0 0 3.01 2.45 3.08 3.08 0 0 0 3.01-2.45h3.49a1 1 0 0 0 1-1v-2.59a1 1 0 0 0-.33-.74zm-7.17 5.63c-.84 0-1.55-.55-1.81-1.3h3.62a1.92 1.92 0 0 1-1.81 1.3zm6.35-2.45h-12.7v-2.35l1.63-1.5c.24-.22.37-.53.37-.85v-3.41a4.51 4.51 0 0 1 3.92-4.57 4.35 4.35 0 0 1 4.78 4.33v3.65c0 .32.14.63.38.85l1.62 1.48v2.37z"
                }),
                $ = function(e) {
                    return a.a.createElement("svg", Y({
                        width: 25,
                        height: 25,
                        viewBox: "-293 409 25 25"
                    }, e), Q)
                },
                J = n("./src/framework/design-system/components/Button.tsx"),
                Z = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                ee = n.n(Z);

            function te(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ne() {
                var e = o()(["\n  query NotificationCountMutation_notificationsWidgetQuery {\n    notificationStatus {\n      unreadNotificationCount\n    }\n  }\n"]);
                return ne = function() {
                    return e
                }, e
            }

            function re() {
                var e = o()(["\n  mutation NotificationCountMutation {\n    updateActivityLastViewed\n  }\n"]);
                return re = function() {
                    return e
                }, e
            }
            var oe = s()(re()),
                ie = s()(ne()),
                ae = function(e) {
                    var t = e.children;
                    return i.createElement(X.b, {
                        mutation: oe,
                        optimisticResponse: {
                            updateActivityLastViewed: !0
                        },
                        update: function(e) {
                            var t = {
                                    query: ie
                                },
                                n = e.readQuery(t);
                            n.notificationStatus.unreadNotificationCount = 0, e.writeQuery(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? te(n, !0).forEach(function(t) {
                                        ee()(e, t, n[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(n).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    })
                                }
                                return e
                            }({
                                data: n
                            }, t))
                        }
                    }, function(e) {
                        return t({
                            mutate: e
                        })
                    })
                };

            function ce() {
                var e = o()(["\n  fragment NotificationsBadge_notificationStatus on NotificationStatus {\n    unreadNotificationCount\n  }\n"]);
                return ce = function() {
                    return e
                }, e
            }

            function se(e) {
                var t = e.notificationStatus.unreadNotificationCount,
                    n = e.toggle;
                return t > 0 ? i.createElement(ae, null, function(e) {
                    var r = e.mutate;
                    return i.createElement(J.a, {
                        buttonStyle: "STRONG",
                        size: "BADGE",
                        shape: "CIRCLE",
                        onClick: function() {
                            n(), r()
                        },
                        width: "30px"
                    }, t)
                }) : i.createElement(d.u, {
                    onClick: n,
                    display: "block"
                }, i.createElement(d.b, {
                    tag: $,
                    margin: "15px 0"
                }))
            }
            var le = s()(ce()),
                ue = n("./src/components/notifications/notification-types/util/NotificationLayout.tsx");

            function de(e) {
                var t = e.post,
                    n = e.isYours,
                    r = e.isFirst;
                return t && t.title ? t.title : n ? r ? "Your story" : "your story" : r ? "A story" : "a story"
            }
            var me = n("./src/components/notifications/notification-types/util/NotificationStyles.tsx");

            function fe() {
                var e = o()(["\n  fragment NotificationQuote_notification on Notification {\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    actor {\n      id\n      name\n    }\n    quote {\n      startOffset\n      endOffset\n      quoteParagraphPreview {\n        text\n      }\n      paragraphs {\n        type\n      }\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return fe = function() {
                    return e
                }, e
            }

            function pe(e) {
                var t = e.notification,
                    n = function(e, t) {
                        if (e.quote && e.quote.paragraphs.length > 1) return i.createElement(i.Fragment, null, "left " + e.quote.paragraphs.length + " highlights in ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post,
                            isYours: !0
                        })));
                        if (t) return i.createElement(i.Fragment, null, "highlighted ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post,
                            isYours: !0
                        })));
                        if (e.quote && e.quote.quoteParagraphPreview && e.quote.quoteParagraphPreview.text && e.quote.endOffset) {
                            var n = e.quote.quoteParagraphPreview.text.slice(e.quote.startOffset || 0, e.quote.endOffset);
                            return i.createElement(i.Fragment, null, "highlighted ", i.createElement(me.c, {
                                text: n
                            }))
                        }
                        return i.createElement(i.Fragment, null, "highlighted ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post
                        })))
                    }(t, e.isRollup),
                    r = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: t.actor,
                    url: t.post ? Object(f.cb)(t.post) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, n)
            }
            var ge = s()(fe(), ue.a);

            function be() {
                var e = o()(["\n  fragment NotificationResponseCreated_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    responsePost {\n      id\n      mediumUrl\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return be = function() {
                    return e
                }, e
            }

            function he(e) {
                var t = e.notification,
                    n = e.isRollup,
                    r = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: t.actor,
                    url: n && t.post ? Object(f.cb)(t.post) : t.responsePost ? Object(f.cb)(t.responsePost) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, i.createElement(i.Fragment, null, "responded to ", i.createElement(me.a, null, i.createElement(de, {
                    post: t.post,
                    isYours: !0
                }))))
            }
            var ve = s()(be(), ue.a);

            function ye() {
                var e = o()(["\n  fragment NotificationPostRecommended_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return ye = function() {
                    return e
                }, e
            }

            function xe(e) {
                var t = e.notification,
                    n = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: n,
                    user: t.actor,
                    url: t.post ? Object(f.cb)(t.post) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, i.createElement(i.Fragment, null, "clapped for ", i.createElement(me.a, null, i.createElement(de, {
                    post: t.post
                }))))
            }
            var Ee = s()(ye(), ue.a);

            function we(e) {
                var t = e.collection,
                    n = e.isYours,
                    r = e.isFirst;
                return t && t.name ? t.name : n ? r ? "Your publication" : "your publication" : r ? "A publication" : "a publication"
            }

            function Oe() {
                var e = o()(["\n  fragment NotificationCollectionPostSubmitted_notification on Notification {\n    collection {\n      name\n      slug\n      id\n      ...collectionUrl_collection\n    }\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n  ", "\n"]);
                return Oe = function() {
                    return e
                }, e
            }
            var je = s()(Oe(), ue.a, f.z),
                _e = Object(l.c)(function(e) {
                    return {
                        currentLocation: e.navigation.currentLocation
                    }
                })(function(e) {
                    var t = e.currentLocation,
                        n = e.notification,
                        r = {
                            actorName: n.actor ? n.actor.name : null,
                            rollupItems: n.rollupItems
                        };
                    return i.createElement(ue.b, {
                        actors: r,
                        user: n.actor,
                        url: n.collection ? Object(f.y)(n.collection, t) : "",
                        occurredAt: n.occurredAt,
                        isUnread: n.isUnread
                    }, i.createElement(i.Fragment, null, "submitted ", i.createElement(me.a, null, i.createElement(de, {
                        post: n.post
                    })), " to ", i.createElement(me.a, null, i.createElement(we, {
                        collection: n.collection
                    }))))
                });

            function ke() {
                var e = o()(["\n  fragment NotificationCollectionDraftSubmitted_notification on Notification {\n    collection {\n      name\n      slug\n      id\n      ...collectionUrl_collection\n    }\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n  ", "\n"]);
                return ke = function() {
                    return e
                }, e
            }
            var Se = s()(ke(), ue.a, f.z),
                Ce = Object(l.c)(function(e) {
                    return {
                        currentLocation: e.navigation.currentLocation
                    }
                })(function(e) {
                    var t = e.currentLocation,
                        n = e.notification,
                        r = {
                            actorName: n.actor ? n.actor.name : null,
                            rollupItems: n.rollupItems
                        },
                        o = function(e) {
                            return e.post && e.post.title ? i.createElement(i.Fragment, null, "submitted a draft ", i.createElement(me.a, null, e.post.title), " to ", i.createElement(me.a, null, i.createElement(we, {
                                collection: e.collection,
                                isYours: !0
                            }))) : i.createElement(i.Fragment, null, "submitted a draft to ", i.createElement(me.a, null, i.createElement(we, {
                                collection: e.collection,
                                isYours: !0
                            })))
                        }(n);
                    return i.createElement(ue.b, {
                        actors: r,
                        user: n.actor,
                        url: n.collection ? Object(f.y)(n.collection, t) : "",
                        occurredAt: n.occurredAt,
                        isUnread: n.isUnread
                    }, o)
                });

            function Pe() {
                var e = o()(["\n  fragment NotificationCollectionPostApproved_notification on Notification {\n    collection {\n      name\n      slug\n      id\n      ...collectionUrl_collection\n    }\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n  ", "\n"]);
                return Pe = function() {
                    return e
                }, e
            }
            var Ie = s()(Pe(), ue.a, f.z),
                Le = Object(l.c)(function(e) {
                    return {
                        currentLocation: e.navigation.currentLocation
                    }
                })(function(e) {
                    var t = e.currentLocation,
                        n = e.notification,
                        r = {
                            actorName: n.actor ? n.actor.name : null,
                            rollupItems: n.rollupItems
                        };
                    return i.createElement(ue.b, {
                        actors: r,
                        user: n.actor,
                        url: n.collection ? Object(f.y)(n.collection, t) : "",
                        occurredAt: n.occurredAt,
                        isUnread: n.isUnread
                    }, i.createElement(i.Fragment, null, "approved ", i.createElement(me.a, null, i.createElement(de, {
                        post: n.post,
                        isYours: !0
                    })), " to be added to ", i.createElement(me.a, null, i.createElement(we, {
                        collection: n.collection
                    }))))
                });

            function Te() {
                var e = o()(["\n  fragment NotificationCollectionPostPublished_notification on Notification {\n    collection {\n      name\n      slug\n      id\n      ...collectionUrl_collection\n    }\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n  ", "\n"]);
                return Te = function() {
                    return e
                }, e
            }
            var Ae = s()(Te(), ue.a, f.z),
                Ne = Object(l.c)(function(e) {
                    return {
                        currentLocation: e.navigation.currentLocation
                    }
                })(function(e) {
                    var t = e.currentLocation,
                        n = e.notification,
                        r = {
                            actorName: n.actor ? n.actor.name : null,
                            rollupItems: n.rollupItems
                        };
                    return i.createElement(ue.b, {
                        actors: r,
                        user: n.actor,
                        url: n.post ? Object(f.cb)(n.post) : n.collection ? Object(f.y)(n.collection, t) : "",
                        occurredAt: n.occurredAt,
                        isUnread: n.isUnread
                    }, i.createElement(i.Fragment, null, "published ", i.createElement(me.a, null, i.createElement(de, {
                        post: n.post,
                        isYours: !0
                    })), " in ", i.createElement(me.a, null, i.createElement(we, {
                        collection: n.collection
                    }))))
                });

            function Re() {
                var e = o()(["\n  fragment NotificationCollectionEditorAdded_notification on Notification {\n    collection {\n      name\n      slug\n      id\n      ...collectionUrl_collection\n    }\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n  ", "\n"]);
                return Re = function() {
                    return e
                }, e
            }
            var De = s()(Re(), ue.a, f.z),
                Ue = Object(l.c)(function(e) {
                    return {
                        currentLocation: e.navigation.currentLocation
                    }
                })(function(e) {
                    var t = e.currentLocation,
                        n = e.notification,
                        r = {
                            actorName: n.actor ? n.actor.name : null,
                            rollupItems: n.rollupItems
                        };
                    return i.createElement(ue.b, {
                        actors: r,
                        user: n.actor,
                        url: n.collection ? Object(f.y)(n.collection, t) : "",
                        occurredAt: n.occurredAt,
                        isUnread: n.isUnread
                    }, i.createElement(i.Fragment, null, "added you as an editor of ", i.createElement(me.a, null, i.createElement(we, {
                        collection: n.collection
                    }))))
                });

            function Me() {
                var e = o()(["\n  fragment NotificationPostCollaboratedPublished_notification on Notification {\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    actor {\n      id\n      name\n    }\n    quote {\n      quoteParagraphPreview {\n        text\n      }\n      paragraphs {\n        type\n      }\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return Me = function() {
                    return e
                }, e
            }

            function Be(e) {
                var t = e.notification,
                    n = function(e) {
                        return e.post && e.post.title ? i.createElement(i.Fragment, null, "published a story ", i.createElement(me.a, null, e.post.title), " that you collaborated on together") : i.createElement(i.Fragment, null, "published a story that you collaborated on together")
                    }(t),
                    r = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: t.actor,
                    url: t.post ? Object(f.cb)(t.post) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, n)
            }
            var He = s()(Me(), ue.a);

            function Fe() {
                var e = o()(["\n  fragment NotificationPostNoted_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    note {\n      id\n      content\n    }\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return Fe = function() {
                    return e
                }, e
            }

            function ze(e) {
                var t = e.notification,
                    n = function(e) {
                        return e.note && e.note.content ? i.createElement(i.Fragment, null, "left a note ", i.createElement(me.d, {
                            text: e.note.content
                        })) : i.createElement(i.Fragment, null, "left a note on ", i.createElement(me.a, null, i.createElement(de, {
                            post: e.post
                        })))
                    }(t),
                    r = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: t.actor,
                    url: t.post ? Object(f.cb)(t.post) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, n)
            }
            var qe = s()(Fe(), ue.a);

            function We() {
                var e = o()(["\n  fragment NotificationNoteReplied_notification on Notification {\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    noteReply {\n      content\n      id\n    }\n    actor {\n      id\n      name\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return We = function() {
                    return e
                }, e
            }

            function Ve(e) {
                var t = e.notification,
                    n = function(e) {
                        return e.noteReply && e.noteReply.content ? i.createElement(i.Fragment, null, "replied to your private note ", i.createElement(me.d, {
                            text: e.noteReply.content
                        })) : i.createElement(i.Fragment, null, "replied to your private note on ", i.createElement(me.a, null, i.createElement(de, {
                            post: e.post
                        })))
                    }(t),
                    r = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: t.actor,
                    url: t.post ? Object(f.cb)(t.post) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, n)
            }
            var Ge = s()(We(), ue.a);

            function Ke() {
                var e = o()(["\n  fragment NotificationPostNoteReplied_notification on Notification {\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    noteReply {\n      content\n    }\n    actor {\n      id\n      name\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return Ke = function() {
                    return e
                }, e
            }

            function Xe(e) {
                var t = e.notification,
                    n = function(e) {
                        return e.noteReply && e.noteReply.content ? i.createElement(i.Fragment, null, "replied to a private note ", i.createElement(me.d, {
                            text: e.noteReply.content
                        })) : i.createElement(i.Fragment, null, "replied to a private note on ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post
                        })))
                    }(t),
                    r = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: t.actor,
                    url: t.post ? Object(f.cb)(t.post) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, n)
            }
            var Ye = s()(Ke(), ue.a);

            function Qe() {
                var e = o()(["\n  fragment NotificationMentionInNote_notification on Notification {\n    note {\n      content\n    }\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return Qe = function() {
                    return e
                }, e
            }

            function $e(e) {
                var t = e.notification,
                    n = function(e) {
                        return e.note && e.note.content ? i.createElement(i.Fragment, null, "mentioned you in a note ", i.createElement(me.d, {
                            text: e.note.content
                        })) : i.createElement(i.Fragment, null, "mentioned you in a note on ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post
                        })))
                    }(t),
                    r = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: t.actor,
                    url: t.post ? Object(f.cb)(t.post) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, n)
            }
            var Je = s()(Qe(), ue.a);

            function Ze() {
                var e = o()(["\n  fragment NotificationMentionInNoteUpdate_notification on Notification {\n    note {\n      content\n    }\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return Ze = function() {
                    return e
                }, e
            }

            function et(e) {
                var t = e.notification,
                    n = function(e) {
                        return e.note && e.note.content ? i.createElement(i.Fragment, null, "updated a note mentioning you ", i.createElement(me.d, {
                            text: e.note.content
                        })) : i.createElement(i.Fragment, null, "updated a note mentioning you on ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post
                        })))
                    }(t),
                    r = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: t.actor,
                    url: t.post ? Object(f.cb)(t.post) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, n)
            }
            var tt = s()(Ze(), ue.a);

            function nt() {
                var e = o()(["\n  fragment NotificationMentionInNoteReply_notification on Notification {\n    noteReply {\n      content\n    }\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return nt = function() {
                    return e
                }, e
            }

            function rt(e) {
                var t = e.notification,
                    n = function(e) {
                        return e.noteReply && e.noteReply.content ? i.createElement(i.Fragment, null, "mentioned you in a note reply ", i.createElement(me.d, {
                            text: e.noteReply.content
                        })) : i.createElement(i.Fragment, null, "mentioned you in a note reply on ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post
                        })))
                    }(t),
                    r = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: t.actor,
                    url: t.post ? Object(f.cb)(t.post) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, n)
            }
            var ot = s()(nt(), ue.a);

            function it() {
                var e = o()(["\n  fragment NotificationMentionInNoteReplyUpdate_notification on Notification {\n    noteReply {\n      content\n    }\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return it = function() {
                    return e
                }, e
            }

            function at(e) {
                var t = e.notification,
                    n = function(e) {
                        return e.noteReply && e.noteReply.content ? i.createElement(i.Fragment, null, "updated a reply mentioning you ", i.createElement(me.d, {
                            text: e.noteReply.content
                        })) : i.createElement(i.Fragment, null, "updated a reply mentioning you on ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post
                        })))
                    }(t),
                    r = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: t.actor,
                    url: t.post ? Object(f.cb)(t.post) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, n)
            }
            var ct = s()(it(), ue.a);

            function st() {
                var e = o()(["\n  fragment NotificationCollectionFollowedMilestone_notification on Notification {\n    milestoneArg\n    collection {\n      name\n      slug\n      id\n      ...collectionUrl_collection\n    }\n    occurredAt\n    isUnread\n    rollupItems {\n      actor {\n        id\n      }\n    }\n  }\n  ", "\n"]);
                return st = function() {
                    return e
                }, e
            }
            var lt = s()(st(), f.z),
                ut = Object(l.c)(function(e) {
                    return {
                        currentLocation: e.navigation.currentLocation
                    }
                })(function(e) {
                    var t = e.currentLocation,
                        n = e.notification,
                        r = function(e) {
                            return 1 === e.milestoneArg ? i.createElement(i.Fragment, null, i.createElement(me.a, null, i.createElement(we, {
                                collection: e.collection,
                                isYours: !0,
                                isFirst: !0
                            })), " has a follower") : e.milestoneArg ? i.createElement(i.Fragment, null, i.createElement(me.a, null, i.createElement(we, {
                                collection: e.collection
                            })), " has " + e.milestoneArg + " followers") : null
                        }(n);
                    return i.createElement(O.a, null, function(e) {
                        return i.createElement(ue.b, {
                            user: e,
                            url: n.collection ? Object(f.y)(n.collection, t) : "",
                            occurredAt: n.occurredAt,
                            isUnread: n.isUnread
                        }, r)
                    })
                });

            function dt() {
                var e = o()(["\n  fragment NotificationPostAddedToEditorsPicks_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return dt = function() {
                    return e
                }, e
            }

            function mt(e) {
                var t = e.notification;
                return i.createElement(ue.b, {
                    user: t.actor,
                    url: t.post ? Object(f.cb)(t.post) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, i.createElement(i.Fragment, null, i.createElement(me.a, null, i.createElement(de, {
                    post: t.post,
                    isYours: !0,
                    isFirst: !0
                })), " has been selected by our editors as a Featured Story on the top of our homepage. Congratulations!"))
            }
            var ft = s()(dt(), ue.a);

            function pt() {
                var e = o()(["\n  fragment NotificationPostRecommendedMilestone_notification on Notification {\n    milestoneArg\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    occurredAt\n    isUnread\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return pt = function() {
                    return e
                }, e
            }

            function gt(e) {
                var t = e.notification,
                    n = function(e) {
                        return 1 === e.milestoneArg ? i.createElement(i.Fragment, null, i.createElement(me.a, null, i.createElement(de, {
                            post: e.post,
                            isYours: !0,
                            isFirst: !0
                        })), " has a fan") : e.milestoneArg ? i.createElement(i.Fragment, null, i.createElement(me.a, null, i.createElement(de, {
                            post: e.post,
                            isYours: !0,
                            isFirst: !0
                        })), " has " + e.milestoneArg + " fans") : null
                    }(t);
                return i.createElement(O.a, null, function(e) {
                    return i.createElement(ue.b, {
                        user: e,
                        url: t.post ? Object(f.cb)(t.post) : "",
                        occurredAt: t.occurredAt,
                        isUnread: t.isUnread
                    }, n)
                })
            }
            var bt = s()(pt(), ue.a);

            function ht() {
                var e = o()(["\n  fragment NotificationPostClappedMilestone_notification on Notification {\n    milestoneArg\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    occurredAt\n    isUnread\n    rollupItems {\n      actor {\n        id\n      }\n    }\n  }\n"]);
                return ht = function() {
                    return e
                }, e
            }

            function vt(e) {
                var t = e.notification,
                    n = function(e) {
                        return e.milestoneArg ? i.createElement(i.Fragment, null, i.createElement(me.a, null, i.createElement(de, {
                            post: e.post,
                            isYours: !0,
                            isFirst: !0
                        })), " got " + e.milestoneArg + " claps") : null
                    }(t);
                return i.createElement(O.a, null, function(e) {
                    return i.createElement(ue.b, {
                        user: e,
                        url: t.post ? Object(f.cb)(t.post) : "",
                        occurredAt: t.occurredAt,
                        isUnread: t.isUnread
                    }, n)
                })
            }
            var yt = s()(ht());

            function xt() {
                var e = o()(["\n  fragment NotificationPostPublishedBySomeoneYouFollow_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return xt = function() {
                    return e
                }, e
            }

            function Et(e) {
                var t = e.notification,
                    n = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: n,
                    user: t.actor,
                    url: t.post ? Object(f.cb)(t.post) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, i.createElement(i.Fragment, null, "published a new story ", i.createElement(me.b, null, t.post ? t.post.title : "")))
            }
            var wt = s()(xt(), ue.a);

            function Ot() {
                var e = o()(["\n  fragment NotificationSeriesPublishedBySomeoneYouFollow_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return Ot = function() {
                    return e
                }, e
            }

            function jt(e) {
                var t = e.notification,
                    n = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: n,
                    user: t.actor,
                    url: t.post ? Object(f.cb)(t.post) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, i.createElement(i.Fragment, null, "started a series ", i.createElement(me.b, null, t.post && t.post.title)))
            }
            var _t = s()(Ot(), ue.a);

            function kt() {
                var e = o()(["\n  fragment NotificationSeriesYouFollowUpdated_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return kt = function() {
                    return e
                }, e
            }

            function St(e) {
                var t = e.notification,
                    n = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: n,
                    user: t.actor,
                    url: t.post ? Object(f.cb)(t.post) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, i.createElement(i.Fragment, null, "updated their series ", i.createElement(me.b, null, t.post ? t.post.title : "")))
            }
            var Ct = s()(kt(), ue.a);

            function Pt() {
                var e = o()(["\n  fragment NotificationSeriesSubscribed_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return Pt = function() {
                    return e
                }, e
            }

            function It(e) {
                var t = e.notification,
                    n = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: n,
                    user: t.actor,
                    url: t.post ? Object(f.cb)(t.post) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, i.createElement(i.Fragment, null, "subscribed to updates from your series ", i.createElement(me.a, null, t.post ? t.post.title : "")))
            }
            var Lt = s()(Pt(), ue.a),
                Tt = n("./src/framework/design-system/type/index.ts"),
                At = n("./src/components/user/UserFollowButton.tsx");

            function Nt() {
                var e = o()(["\n  fragment NotificationsFollowersDialog_user on User {\n    username\n    name\n    imageId\n    bio\n    isFollowing\n    mediumMemberAt\n  }\n"]);
                return Nt = function() {
                    return e
                }, e
            }

            function Rt(e) {
                var t = e.actors,
                    n = e.isVisible,
                    r = e.hide;
                return i.createElement(d.j, {
                    isVisible: n,
                    hide: r,
                    withAnimation: !0
                }, i.createElement(d.b, {
                    maxWidth: "550px",
                    sm: {
                        paddingTop: "0"
                    }
                }, i.createElement(d.b, {
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center"
                }, i.createElement(Tt.b, {
                    scale: "S"
                }, "Follows")), t && t.map(function(e) {
                    var t = e.actor;
                    return t && i.createElement(Dt, {
                        hide: r,
                        actor: t,
                        key: t.id
                    })
                })))
            }
            var Dt = function(e) {
                    var t = e.actor,
                        n = e.hide,
                        r = t.username,
                        o = t.name,
                        a = t.bio,
                        c = void 0 === a ? "" : a;
                    return o && r ? i.createElement(d.b, {
                        padding: "12px 0"
                    }, i.createElement(d.b, {
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between"
                    }, i.createElement(d.b, {
                        display: "flex",
                        alignItems: "flex-start"
                    }, i.createElement(d.b, {
                        marginRight: "20px"
                    }, i.createElement(v.d, {
                        user: t,
                        scale: "S"
                    })), i.createElement(d.b, {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start"
                    }, i.createElement(Tt.b, {
                        scale: "XS"
                    }, i.createElement(d.u, {
                        href: Object(f.Mb)(r),
                        onClick: n
                    }, o)), i.createElement(Tt.a, {
                        scale: "S"
                    }, c))), i.createElement(d.b, {
                        marginLeft: "48px"
                    }, i.createElement(At.c, {
                        buttonSize: "SMALL",
                        user: t
                    })))) : null
                },
                Ut = s()(Nt());

            function Mt() {
                var e = o()(["\n  fragment NotificationUsersFollowingYou_notification on Notification {\n    actor {\n      id\n      name\n      username\n    }\n    occurredAt\n    isUnread\n    rollupItems {\n      actor {\n        id\n        ...NotificationsFollowersDialog_user\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n  ", "\n"]);
                return Mt = function() {
                    return e
                }, e
            }

            function Bt(e) {
                var t = e.notification,
                    n = e.isRollup,
                    r = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return n ? i.createElement(d.K, null, function(e) {
                    var n = e.isVisible,
                        o = e.show,
                        a = e.hide;
                    return i.createElement(i.Fragment, null, i.createElement(ue.b, {
                        actors: r,
                        user: t.actor,
                        onClick: o,
                        url: "",
                        occurredAt: t.occurredAt,
                        isUnread: t.isUnread
                    }, i.createElement(i.Fragment, null, "started following you")), i.createElement(Rt, {
                        actors: r.rollupItems,
                        isVisible: n,
                        hide: a
                    }))
                }) : i.createElement(ue.b, {
                    actors: r,
                    user: t.actor,
                    url: t.actor && t.actor.username ? Object(f.Mb)(t.actor.username) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, i.createElement(i.Fragment, null, "started following you"))
            }
            var Ht = s()(Mt(), ue.a, Ut);

            function Ft() {
                var e = o()(["\n  fragment NotificationMentionInPost_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return Ft = function() {
                    return e
                }, e
            }

            function zt(e) {
                var t = e.notification,
                    n = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: n,
                    user: t.actor,
                    url: t.post ? Object(f.cb)(t.post) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, i.createElement(i.Fragment, null, "mentioned you in a story ", i.createElement(me.b, null, t.post && t.post.title)))
            }
            var qt = s()(Ft(), ue.a);

            function Wt() {
                var e = o()(["\n  fragment NotificationMentionInSeries_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return Wt = function() {
                    return e
                }, e
            }

            function Vt(e) {
                var t = e.notification,
                    n = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: n,
                    user: t.actor,
                    url: t.post ? Object(f.cb)(t.post) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, i.createElement(i.Fragment, null, "mentioned you in a series ", i.createElement(me.b, null, t.post && t.post.title)))
            }
            var Gt = s()(Wt(), ue.a);

            function Kt() {
                var e = o()(["\n  fragment NotificationPostAddedToHomepageCatalog_notification on Notification {\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return Kt = function() {
                    return e
                }, e
            }

            function Xt(e) {
                var t = e.notification,
                    n = {
                        actorName: null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(O.a, null, function(e) {
                    return i.createElement(ue.b, {
                        actors: n,
                        user: e,
                        url: t.post ? Object(f.cb)(t.post) : "",
                        occurredAt: t.occurredAt,
                        isUnread: t.isUnread
                    }, i.createElement(i.Fragment, null, i.createElement(me.a, null, i.createElement(de, {
                        post: t.post,
                        isYours: !0,
                        isFirst: !0
                    })), " was featured on the Medium homepage"))
                })
            }
            var Yt = s()(Kt(), ue.a);

            function Qt() {
                var e = o()(["\n  fragment NotificationFastrakPostAccepted_notification on Notification {\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n  }\n"]);
                return Qt = function() {
                    return e
                }, e
            }
            var $t = s()(Qt()),
                Jt = Object(l.c)(function(e) {
                    return {
                        productName: e.config.productName
                    }
                })(function(e) {
                    var t = e.productName,
                        n = e.notification;
                    return i.createElement(O.a, null, function(e) {
                        return i.createElement(ue.b, {
                            user: e,
                            url: n.post ? Object(f.cb)(n.post) : "",
                            occurredAt: n.occurredAt,
                            isUnread: n.isUnread
                        }, i.createElement(i.Fragment, null, i.createElement(i.Fragment, null, " ", t, " curators selected "), i.createElement(me.b, null, i.createElement(de, {
                            post: n.post,
                            isYours: !0
                        }))))
                    })
                });

            function Zt() {
                var e = o()(["\n  fragment NotificationHighlightWasPiledOnto_notification on Notification {\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    actor {\n      id\n      name\n    }\n    quote {\n      quoteParagraphPreview {\n        text\n      }\n      paragraphs {\n        type\n      }\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return Zt = function() {
                    return e
                }, e
            }

            function en(e) {
                var t = e.notification,
                    n = function(e) {
                        return e.quote && e.quote.quoteParagraphPreview && e.quote.quoteParagraphPreview.text ? i.createElement(i.Fragment, null, "also highlighted ", i.createElement(me.c, {
                            text: e.quote.quoteParagraphPreview.text
                        })) : i.createElement(i.Fragment, null, "also highlighted ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post,
                            isYours: !0
                        })))
                    }(t),
                    r = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: t.actor,
                    url: t.post && t.post.id ? Object(f.cb)(t.post) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, n)
            }
            var tn = s()(Zt(), ue.a);

            function nn() {
                var e = o()(["\n  fragment NotificationPostMongerRequestSent_notification on Notification {\n    actor {\n      id\n      name\n      username\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return nn = function() {
                    return e
                }, e
            }
            var rn = s()(nn(), ue.a),
                on = Object(l.c)(function(e) {
                    return {
                        productName: e.config.productName
                    }
                })(function(e) {
                    var t = e.productName,
                        n = e.notification;
                    return i.createElement(ue.b, {
                        user: n.actor,
                        url: n.post ? Object(f.cb)(n.post) : "",
                        occurredAt: n.occurredAt,
                        isUnread: n.isUnread
                    }, i.createElement(i.Fragment, null, "Our curators would love to feature your story on ", t, ". We just emailed you with the details – check your inbox."))
                });

            function an() {
                var e = o()(["\n  fragment NotificationTaxes_notification on Notification {\n    actor {\n      name\n    }\n    notificationType\n    occurredAt\n    isUnread\n    rollupItems {\n      actor {\n        id\n      }\n    }\n  }\n"]);
                return an = function() {
                    return e
                }, e
            }
            var cn = function(e, t) {
                return "tax_not_submitted_day_one" === e || "tax_not_submitted_post_earning_limit" === e || "tax_not_submitted_pre_earning_limit" === e ? "In order to receive payments through the ".concat(t, " Partner Program,\n    please take a moment to add your taxpayer information.") : "tax_not_submitted_final" === e ? "This is the final week to add your tax information to receive your withheld\n    ".concat(t, " payments.") : "tax_not_submitted_last_day" === e ? "Your ".concat(t, " Partner Program withholdings have been forfeited,\n    but you can begin earning again once you submit verified tax information.") : "tax_failed_tin_day_one" === e ? "We were not able to verify your taxpayer information.\n    In order to be paid, please take a moment to revisit your information." : "tax_failed_tin_post_earning_limit" === e || "tax_failed_tin_pre_earning_limit" === e ? "We were not able to verify your taxpayer information. In order to receive payments through\n    ".concat(t, " Partner Program, please revisit your information.") : "tax_failed_tin_final" === e ? "This is the final week to add your tax information to receive your withheld\n    ".concat(t, " Partner Program payments.") : "tax_failed_tin_last_day" === e ? "Your ".concat(t, " withholdings have been forfeited,\n    but you can begin earning again once you submit verified tax information.") : void 0
            };
            var sn = s()(an()),
                ln = Object(l.c)(function(e) {
                    return {
                        productName: e.config.productName
                    }
                })(function(e) {
                    var t = e.productName,
                        n = e.notification,
                        r = n.notificationType;
                    return i.createElement(O.a, null, function(e) {
                        return i.createElement(ue.b, {
                            user: e,
                            url: Object(f.Z)(),
                            occurredAt: n.occurredAt,
                            isUnread: n.isUnread
                        }, i.createElement(i.Fragment, null, cn(r, t)))
                    })
                });

            function un() {
                var e = o()(["\n  fragment NotificationPostShared_notification on Notification {\n    actor {\n      id\n      name\n    }\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    occurredAt\n    isUnread\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return un = function() {
                    return e
                }, e
            }

            function dn(e) {
                var t = e.notification,
                    n = function(e) {
                        return e.post ? i.createElement(i.Fragment, null, " shared a post with you ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post
                        }))) : i.createElement(i.Fragment, null, " shared a post with you")
                    }(t),
                    r = {
                        actorName: t.actor ? t.actor.name : null,
                        rollupItems: t.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: t.actor,
                    url: t.post ? Object(f.cb)(t.post) : "",
                    occurredAt: t.occurredAt,
                    isUnread: t.isUnread
                }, n)
            }
            var mn = s()(un(), ue.a);

            function fn() {
                var e = o()(["\n  fragment Notification_notification on Notification {\n    notificationType\n    ...NotificationQuote_notification\n    ...NotificationResponseCreated_notification\n    ...NotificationPostRecommended_notification\n    ...NotificationCollectionPostSubmitted_notification\n    ...NotificationCollectionDraftSubmitted_notification\n    ...NotificationCollectionPostApproved_notification\n    ...NotificationCollectionPostPublished_notification\n    ...NotificationCollectionEditorAdded_notification\n    ...NotificationPostCollaboratedPublished_notification\n    ...NotificationPostNoted_notification\n    ...NotificationNoteReplied_notification\n    ...NotificationPostNoteReplied_notification\n    ...NotificationMentionInNote_notification\n    ...NotificationMentionInNoteUpdate_notification\n    ...NotificationMentionInNoteReply_notification\n    ...NotificationMentionInNoteReplyUpdate_notification\n    ...NotificationCollectionFollowedMilestone_notification\n    ...NotificationPostAddedToEditorsPicks_notification\n    ...NotificationPostRecommendedMilestone_notification\n    ...NotificationPostClappedMilestone_notification\n    ...NotificationPostPublishedBySomeoneYouFollow_notification\n    ...NotificationSeriesPublishedBySomeoneYouFollow_notification\n    ...NotificationSeriesYouFollowUpdated_notification\n    ...NotificationSeriesSubscribed_notification\n    ...NotificationUsersFollowingYou_notification\n    ...NotificationMentionInPost_notification\n    ...NotificationMentionInSeries_notification\n    ...NotificationPostAddedToHomepageCatalog_notification\n    ...NotificationFastrakPostAccepted_notification\n    ...NotificationHighlightWasPiledOnto_notification\n    ...NotificationPostMongerRequestSent_notification\n    ...NotificationTaxes_notification\n    ...NotificationPostShared_notification\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
                return fn = function() {
                    return e
                }, e
            }

            function pn(e) {
                var t = e.notification,
                    n = t.notificationType.includes("_rollup");
                switch (n ? t.notificationType.replace("_rollup", "") : t.notificationType) {
                    case "quote":
                        return i.createElement(pe, {
                            notification: t,
                            isRollup: n
                        });
                    case "response_created":
                        return i.createElement(he, {
                            notification: t,
                            isRollup: n
                        });
                    case "post_recommended":
                        return i.createElement(xe, {
                            notification: t
                        });
                    case "collection_post_submitted":
                        return i.createElement(_e, {
                            notification: t
                        });
                    case "collection_draft_submitted":
                        return i.createElement(Ce, {
                            notification: t
                        });
                    case "collection_post_approved":
                        return i.createElement(Le, {
                            notification: t
                        });
                    case "collection_post_published":
                        return i.createElement(Ne, {
                            notification: t
                        });
                    case "collection_editor_added":
                        return i.createElement(Ue, {
                            notification: t
                        });
                    case "post_collaborated_published":
                        return i.createElement(Be, {
                            notification: t
                        });
                    case "post_noted":
                        return i.createElement(ze, {
                            notification: t
                        });
                    case "note_replied":
                        return i.createElement(Ve, {
                            notification: t
                        });
                    case "post_note_replied":
                        return i.createElement(Xe, {
                            notification: t
                        });
                    case "mention_in_note":
                        return i.createElement($e, {
                            notification: t
                        });
                    case "mention_in_note_update":
                        return i.createElement(et, {
                            notification: t
                        });
                    case "mention_in_note_reply":
                        return i.createElement(rt, {
                            notification: t
                        });
                    case "mention_in_note_reply_update":
                        return i.createElement(at, {
                            notification: t
                        });
                    case "collection_followed_milestone":
                        return i.createElement(ut, {
                            notification: t
                        });
                    case "post_added_to_editors_picks":
                        return i.createElement(mt, {
                            notification: t
                        });
                    case "post_recommended_milestone":
                        return i.createElement(gt, {
                            notification: t
                        });
                    case "post_clapped_milestone":
                        return i.createElement(vt, {
                            notification: t
                        });
                    case "post_published_by_someone_you_follow":
                        return i.createElement(Et, {
                            notification: t
                        });
                    case "series_published_by_someone_you_follow":
                        return i.createElement(jt, {
                            notification: t
                        });
                    case "series_you_follow_updated":
                        return i.createElement(St, {
                            notification: t
                        });
                    case "series_subscribed":
                        return i.createElement(It, {
                            notification: t
                        });
                    case "users_following_you":
                        return i.createElement(Bt, {
                            notification: t,
                            isRollup: n
                        });
                    case "mention_in_post":
                        return i.createElement(zt, {
                            notification: t
                        });
                    case "mention_in_series":
                        return i.createElement(Vt, {
                            notification: t
                        });
                    case "post_added_to_homepage_catalog":
                        return i.createElement(Xt, {
                            notification: t
                        });
                    case "fastrak_post_accepted":
                        return i.createElement(Jt, {
                            notification: t
                        });
                    case "highlight_was_piled_onto":
                        return i.createElement(en, {
                            notification: t
                        });
                    case "post_monger_request_sent":
                        return i.createElement(on, {
                            notification: t
                        });
                    case "post_shared":
                        return i.createElement(dn, {
                            notification: t
                        });
                    case "tax_not_submitted_day_one":
                    case "tax_not_submitted_pre_earning_limit":
                    case "tax_not_submitted_post_earning_limit":
                    case "tax_not_submitted_final":
                    case "tax_not_submitted_last_day":
                    case "tax_failed_tin_day_one":
                    case "tax_failed_tin_post_earning_limit":
                    case "tax_failed_tin_pre_earning_limit":
                    case "tax_failed_tin_final":
                    case "tax_failed_tin_last_day":
                        return i.createElement(ln, {
                            notification: t
                        });
                    default:
                        return null
                }
            }
            var gn = s()(fn(), ge, ve, Ee, je, Se, Ie, Ae, De, He, qe, Ge, Ye, Je, tt, ot, ct, lt, ft, bt, yt, wt, _t, Ct, Lt, Ht, qt, Gt, Yt, $t, tn, rn, sn, mn);

            function bn(e) {
                var t = e.fetchMore;
                return t ? i.createElement(d.u, {
                    linkStyle: "OBVIOUS",
                    onClick: t
                }, "Older notifications") : i.createElement(i.Fragment, null, "You're all caught up.")
            }
            var hn = Object(l.c)(function(e) {
                return {
                    authDomain: e.config.authDomain
                }
            })(function(e) {
                var t = e.authDomain,
                    n = e.fetchMore;
                return i.createElement(d.b, {
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    marginBottom: "10px",
                    padding: "10px 20px"
                }, i.createElement(Tt.a, {
                    scale: "M"
                }, i.createElement(bn, {
                    fetchMore: n
                })), i.createElement(Tt.a, {
                    scale: "M"
                }, i.createElement(d.u, {
                    linkStyle: "OBVIOUS",
                    href: Object(f.Xb)(t)
                }, "Your stats")))
            });

            function vn() {
                var e = o()(["\n  query NotificationsWidgetQuery($pagingOptions: PagingOptions) {\n    notificationsConnection(paging: $pagingOptions) {\n      notifications {\n        ...Notification_notification\n      }\n      pagingInfo {\n        next {\n          limit\n          page\n          source\n          to\n        }\n      }\n    }\n    notificationStatus {\n      ...NotificationsBadge_notificationStatus\n    }\n  }\n  ", "\n  ", "\n"]);
                return vn = function() {
                    return e
                }, e
            }

            function yn(e) {
                var t = e.setIsMetabarLocked;
                return i.createElement(X.c, {
                    query: xn
                }, function(e) {
                    e.loading, e.error;
                    var n = e.fetchMore,
                        r = e.data,
                        o = r.notificationsConnection,
                        a = r.notificationStatus;
                    if (!a || !o) return null;
                    var c, s = o.notifications;
                    s || (s = []);
                    var l = o.pagingInfo && o.pagingInfo.next;
                    if (l) {
                        var u = {
                            limit: l.limit,
                            page: l.page,
                            source: l.source,
                            to: l.to
                        };
                        c = function() {
                            return n({
                                variables: {
                                    pagingOptions: u
                                },
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult,
                                        r = K()(n);
                                    return r.notificationsConnection.notifications = [].concat(V()(e.notificationsConnection.notifications), V()(n.notificationsConnection.notifications)), r
                                }
                            })
                        }
                    }
                    return i.createElement(d.K, null, function(e) {
                        var n = e.isVisible,
                            r = e.hide,
                            o = e.toggle;
                        return i.createElement(d.x, {
                            flip: !1,
                            hide: function() {
                                r(), t(!1)
                            },
                            isVisible: n,
                            popoverRenderFn: function() {
                                return i.createElement(m.a, {
                                    padding: "0"
                                }, i.createElement(i.Fragment, null, s.map(function(e, t) {
                                    return i.createElement(i.Fragment, {
                                        key: t
                                    }, i.createElement(m.b, {
                                        paddingTopBottom: "0",
                                        paddingLeftRight: "0"
                                    }, i.createElement(pn, {
                                        notification: e
                                    })), i.createElement(m.c, {
                                        paddingTopBottom: "0",
                                        width: "360px"
                                    }))
                                }), i.createElement(hn, {
                                    fetchMore: c
                                })))
                            },
                            setMaxHeight: !0,
                            width: "360px"
                        }, i.createElement(se, {
                            notificationStatus: a,
                            toggle: function() {
                                t(!n), o()
                            }
                        }))
                    })
                })
            }
            var xn = s()(vn(), gn, le),
                En = n("./node_modules/@babel/runtime/regenerator/index.js"),
                wn = n.n(En),
                On = n("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),
                jn = n.n(On),
                _n = 3,
                kn = "/1/indexes/*/queries",
                Sn = "tag",
                Cn = "post",
                Pn = ["user", "collection", Sn],
                In = "numericFilters",
                Ln = "results";
            var Tn = {
                collection: null,
                query: "",
                collections: [],
                posts: [],
                users: [],
                tags: []
            };

            function An(e, t, n) {
                var r = e[Ln],
                    o = {
                        collection: null,
                        query: "",
                        collections: [],
                        posts: [],
                        users: [],
                        tags: []
                    };
                return o.query = t, n ? (o.collection = n, o.posts = r[0].hits.filter(function(e) {
                    return !!e.latestPublishedAt
                })) : (o.users = r[0].hits, o.collections = r[1].hits, o.tags = r[2].hits), o
            }

            function Nn(e, t, n) {
                return Rn.apply(this, arguments)
            }

            function Rn() {
                return (Rn = jn()(wn.a.mark(function e(t, n, r) {
                    var o, i, a, c, s, l, u;
                    return wn.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return o = r && r.id ? r.id : null, i = "https://" + t.appId + t.host, a = i + kn, c = {
                                    query: n,
                                    hitsPerPage: _n,
                                    numericFilters: ""
                                }, o && (c.facetFilters = "collectionId:".concat(o), c.attributesToRetrieve = "title,postId,latestPublishedAt"), s = (o ? [Cn] : Pn).map(function(e) {
                                    return e === Sn && (c[In] = "postCount>=1,followerCount>=1"), {
                                        indexName: t.indexPrefix + e,
                                        params: Object.keys(c).map(function(e) {
                                            return e + "=" + c[e]
                                        }).join("&").toString()
                                    }
                                }), l = {
                                    requests: s
                                }, e.next = 10, fetch(a, {
                                    method: "POST",
                                    headers: {
                                        "X-Algolia-API-Key": t.apiKeySearch,
                                        "X-Algolia-Application-Id": t.appId
                                    },
                                    body: JSON.stringify(l)
                                }).then(function(e) {
                                    return e.json()
                                });
                            case 10:
                                return u = e.sent, e.abrupt("return", An(u, n, r));
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }
            var Dn = n("./src/components/format/Date.tsx"),
                Un = n("./src/components/navigation/Redirect.tsx"),
                Mn = n("./src/components/session/WithFlag.tsx"),
                Bn = n("./src/components/ui/Byline.tsx"),
                Hn = n("./src/framework/style/index.ts");

            function Fn() {
                return (Fn = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var zn = a.a.createElement("path", {
                    d: "M20.07 18.93l-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"
                }),
                qn = function(e) {
                    return a.a.createElement("svg", Fn({
                        width: 25,
                        height: 25,
                        viewBox: "0 0 25 25"
                    }, e), zn)
                };

            function Wn() {
                return (Wn = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var Vn = a.a.createElement("path", {
                    d: "M4.66 8.72L3.43 9.95a1.75 1.75 0 0 0 0 2.48l5.14 5.13c.7.7 1.8.69 2.48 0l1.23-1.22 5.35-5.35a2 2 0 0 0 .51-1.36l-.32-4.29a2.42 2.42 0 0 0-2.15-2.14l-4.3-.33c-.43-.03-1.05.2-1.36.51l-.79.8-2.27 2.28-2.28 2.27zm9.83-.98a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z",
                    fillRule: "evenodd"
                }),
                Gn = function(e) {
                    return a.a.createElement("svg", Wn({
                        width: 21,
                        height: 21
                    }, e), Vn)
                },
                Kn = n("./src/components/ui/image/index.ts"),
                Xn = n("./src/util/miroImage.ts");

            function Yn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var Qn = "16px",
                $n = "10px",
                Jn = "1*dmbNkD5D-u45r44go_cf0g.png";

            function Zn(e) {
                var t = e.type,
                    n = e.name,
                    r = e.url,
                    o = e.imageId,
                    a = e.query,
                    c = Object(y.c)(),
                    s = i.createElement(i.Fragment, null),
                    l = Object(Hn.useCx)();
                if ("TAG" === t) {
                    s = i.createElement("div", {
                        className: l({
                            fill: "rgba(0, 0, 0, 0.54)",
                            display: "block",
                            marginLeft: "5px",
                            marginRight: "6px"
                        })
                    }, i.createElement(Gn, null))
                }
                if ("COLLECTION" === t) {
                    var u = {
                        borderRadius: "3px"
                    };
                    s = i.createElement(Kn.b, {
                        rules: u,
                        miroId: o || "",
                        freezeGifs: !1,
                        alt: n || "Publication avatar",
                        width: 32,
                        height: 32,
                        strategy: Xn.a.Crop
                    })
                }
                "USER" === t && (s = i.createElement(Kn.a, {
                    miroId: o || Jn,
                    alt: n || "",
                    diameter: 32,
                    freezeGifs: !1
                }));
                var m = i.createElement(Tt.a, {
                    color: "DARKER",
                    scale: "M"
                }, i.createElement("div", {
                    className: l({
                        width: "170px",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap"
                    })
                }, n));
                return i.createElement(d.b, {
                    display: "flex",
                    width: "250px",
                    tag: "li",
                    paddingLeft: "20px",
                    paddingRight: "20px"
                }, i.createElement(d.b, {
                    marginBottom: "16px"
                }, i.createElement(d.u, {
                    linkStyle: "SUBTLE",
                    href: r,
                    onClick: function(e) {
                        c.event("search.predictiveResultClicked", {
                            type: t.toLowerCase(),
                            query: a,
                            path: e.currentTarget.href,
                            rank: 0,
                            total: 0
                        })
                    }
                }, i.createElement(Bn.a, {
                    scale: "XS",
                    avatar: s,
                    title: m,
                    description: null
                }))))
            }

            function er(e) {
                var t = e.collectionOrProductName,
                    n = e.slug,
                    r = e.onQueryChange,
                    o = Object(Hn.useCx)(),
                    a = {
                        border: "none",
                        outline: "none",
                        font: "inherit",
                        fontSize: "16px",
                        lineHeight: "20px",
                        opacity: 0
                    },
                    c = function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Yn(n, !0).forEach(function(t) {
                                    ee()(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yn(n).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({
                            position: "relative"
                        }, e ? {
                            width: "182px",
                            marginRight: "28px",
                            opacity: 100
                        } : {
                            width: "0px",
                            opacity: 0
                        }, {
                            transition: "width 140ms ease-in"
                        })
                    },
                    s = i.useState(""),
                    l = I()(s, 2),
                    u = l[0],
                    m = l[1],
                    p = i.useState(!1),
                    g = I()(p, 2),
                    b = g[0],
                    h = g[1],
                    v = function(e) {
                        m(e.target.value), r(e.target.value)
                    };
                return b ? i.createElement(Un.a, {
                    to: Object(f.ib)(u, n)
                }) : i.createElement(d.K, null, function(e) {
                    var n = e.isVisible,
                        r = (e.hide, e.toggle);
                    return i.createElement(d.b, {
                        display: "flex"
                    }, i.createElement(d.u, {
                        onClick: r
                    }, i.createElement(d.b, {
                        tag: qn,
                        marginLeft: Qn,
                        marginRight: $n,
                        sm: {
                            marginLeft: $n,
                            marginRight: $n
                        }
                    })), i.createElement("input", {
                        className: o([a, c(n)]),
                        placeholder: "Search ".concat(t),
                        ref: function(e) {
                            return e && n && e.focus()
                        },
                        value: u,
                        onChange: v,
                        onKeyDown: function(e) {
                            13 === e.keyCode && h(!0)
                        }
                    }))
                })
            }

            function tr(e) {
                var t = e.title,
                    n = e.url;
                return i.createElement(d.b, {
                    width: "250px",
                    padding: "0 20px"
                }, i.createElement(d.b, {
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px"
                }, i.createElement(Tt.d, {
                    scale: "M"
                }, t), n && i.createElement(Tt.a, {
                    scale: "S"
                }, i.createElement(d.u, {
                    linkStyle: "SUBTLE",
                    href: n
                }, "More"))), i.createElement(m.c, {
                    width: "100%",
                    paddingTopBottom: "0"
                }))
            }

            function nr(e) {
                var t = e.data,
                    n = e.moreUrl,
                    r = t.collections;
                return 0 !== r.length ? i.createElement(i.Fragment, null, i.createElement(tr, {
                    title: "Publications",
                    url: n
                }), i.createElement(d.b, {
                    marginTop: "20px",
                    marginBottom: "8px"
                }, r.map(function(e, n) {
                    var r = Object(f.p)(e.collectionId);
                    return i.createElement(Zn, {
                        key: n,
                        type: "COLLECTION",
                        name: e.name,
                        imageId: e.imageId,
                        url: r,
                        query: t.query
                    })
                }))) : null
            }

            function rr(e) {
                var t = e.data,
                    n = e.moreUrl,
                    r = t.tags;
                return 0 !== r.length ? i.createElement(i.Fragment, null, i.createElement(tr, {
                    title: "Tags",
                    url: n
                }), i.createElement(d.b, {
                    marginTop: "20px",
                    marginBottom: "8px"
                }, r.map(function(e, n) {
                    var r = Object(f.xb)(e.tagSlug);
                    return i.createElement(Zn, {
                        key: n,
                        type: "TAG",
                        name: e.displayText,
                        url: r,
                        query: t.query
                    })
                }))) : null
            }

            function or(e) {
                var t = e.data,
                    n = e.moreUrl,
                    r = t.users;
                return 0 !== r.length ? i.createElement(i.Fragment, null, i.createElement(tr, {
                    title: "People",
                    url: n
                }), i.createElement(d.b, {
                    marginTop: "20px",
                    marginBottom: "8px"
                }, r.map(function(e, n) {
                    var r = Object(f.Mb)(e.username);
                    return i.createElement(Zn, {
                        key: n,
                        type: "USER",
                        imageId: e.imageId,
                        name: e.name,
                        url: r,
                        query: t.query
                    })
                }))) : null
            }

            function ir(e) {
                var t = e.query,
                    n = e.url,
                    r = e.productName;
                return i.createElement(d.b, {
                    display: "flex",
                    alignContent: "center",
                    backgroundColor: "BASE_LIGHT",
                    width: "250px",
                    overflow: "hidden",
                    whiteSpace: "pre-line",
                    padding: "10px 20px"
                }, i.createElement(Tt.a, {
                    scale: "S",
                    color: "DARKER"
                }, i.createElement(d.u, {
                    href: n
                }, "Search for '".concat(t, "' on ").concat(r))))
            }

            function ar(e) {
                var t = e.data,
                    n = Object(Hn.useCx)(),
                    r = Object(y.c)(),
                    o = {
                        width: "210px",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap"
                    },
                    a = t.posts,
                    c = i.useCallback(function(e) {
                        r.event("search.predictiveResultClicked", {
                            type: "post",
                            query: t.query,
                            path: e.currentTarget.href,
                            rank: 0,
                            total: 0
                        })
                    });
                return 0 !== a.length ? i.createElement(i.Fragment, null, i.createElement(tr, {
                    title: "Stories"
                }), i.createElement(d.b, {
                    marginTop: "20px",
                    marginBottom: "8px"
                }, a.map(function(e, t) {
                    var r = Object(f.cb)({
                        id: e.postId
                    }, !0);
                    return i.createElement(d.b, {
                        key: t,
                        display: "flex",
                        width: "250px",
                        tag: "li",
                        paddingLeft: "20px",
                        paddingRight: "20px"
                    }, i.createElement(d.b, {
                        marginBottom: "16px"
                    }, i.createElement(d.u, {
                        linkStyle: "SUBTLE",
                        href: r,
                        onClick: c
                    }, i.createElement(Tt.a, {
                        scale: "S",
                        color: "DARKER"
                    }, i.createElement("div", {
                        className: n(o)
                    }, e.title)), i.createElement(Tt.a, {
                        scale: "S"
                    }, i.createElement(Dn.a, {
                        timestamp: e.latestPublishedAt
                    })))))
                }))) : null
            }
            var cr = Object(l.c)(function(e) {
                    return {
                        productName: e.config.productName,
                        algolia: e.config.algolia
                    }
                })(function(e) {
                    var t = e.collection,
                        n = e.productName,
                        r = e.algolia,
                        o = e.setIsMetabarLocked,
                        a = Object(Hn.useCx)(),
                        c = Object(y.c)(),
                        s = i.useState(Tn),
                        l = I()(s, 2),
                        u = l[0],
                        p = l[1],
                        g = i.useState(""),
                        b = I()(g, 2),
                        h = b[0],
                        v = b[1],
                        x = i.useState(!1),
                        E = I()(x, 2),
                        w = E[0],
                        O = E[1],
                        j = t && !t.domain ? t.slug : null,
                        _ = t && t.name ? t.name : n,
                        k = function(e) {
                            v(e)
                        },
                        S = function() {
                            O(!1), o(!1)
                        },
                        C = i.useCallback(function() {
                            c.event("search.predictiveOpened")
                        });
                    i.useEffect(function() {
                        var e;
                        h ? (w || (O(!0), o(!0), C()), (e = jn()(wn.a.mark(function e() {
                            return wn.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.t0 = p, e.next = 3, Nn(r, h, t || null);
                                    case 3:
                                        e.t1 = e.sent, (0, e.t0)(e.t1);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function() {
                            return e.apply(this, arguments)
                        })()) : S()
                    }, [h]);
                    var P = {
                            marginTop: Qn,
                            marginBottom: Qn,
                            display: "inherit",
                            alignItems: "center",
                            maxWidth: "210px",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap"
                        },
                        L = i.createElement(m.a, {
                            padding: "0"
                        }, i.createElement(i.Fragment, null, i.createElement(d.b, {
                            display: "flex",
                            width: "250px",
                            tag: "li",
                            paddingLeft: "20px",
                            paddingRight: "20px"
                        }, i.createElement(d.d, null, i.createElement("div", {
                            className: a(P)
                        }, i.createElement(d.b, {
                            display: "inline",
                            tag: qn,
                            marginRight: $n,
                            sm: {
                                marginRight: $n
                            }
                        }), i.createElement(d.u, {
                            href: Object(f.ib)(h, j)
                        }, t ? "Search ".concat(_) : "Search for '".concat(u.query, "'"))))), u && !t && u.users && i.createElement(or, {
                            data: u,
                            moreUrl: Object(f.ib)(h, j, "users")
                        }), u && !t && u.collections && i.createElement(nr, {
                            data: u,
                            moreUrl: Object(f.ib)(h, j, "publications")
                        }), u && !t && u.tags && i.createElement(rr, {
                            data: u,
                            moreUrl: Object(f.ib)(h, j, "tags")
                        }), u && t && u.posts && i.createElement(i.Fragment, null, i.createElement(ar, {
                            data: u
                        }), i.createElement(ir, {
                            url: Object(f.ib)(h, null),
                            query: h,
                            productName: n
                        }))));
                    return i.createElement(Mn.a, {
                        name: "enable_inline_search_popover_lite"
                    }, function(e) {
                        return e ? i.createElement(d.K, null, function(e) {
                            e.isVisible;
                            var t = e.hide;
                            return e.toggle, i.createElement(d.x, {
                                flip: !1,
                                isVisible: w,
                                hide: function() {
                                    S(), t()
                                },
                                popoverRenderFn: function() {
                                    return L
                                },
                                setMaxHeight: !0
                            }, i.createElement(er, {
                                collectionOrProductName: _,
                                slug: j,
                                onQueryChange: k
                            }))
                        }) : i.createElement(er, {
                            collectionOrProductName: _,
                            slug: j,
                            onQueryChange: k
                        })
                    })
                }),
                sr = n("./src/components/session/RequireFlag.tsx");

            function lr() {
                return (lr = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var ur = a.a.createElement("path", {
                    d: "M16 6a2 2 0 0 1 2 2v13.66h-.01a.5.5 0 0 1-.12.29.5.5 0 0 1-.7.03l-5.67-4.13-5.66 4.13a.5.5 0 0 1-.7-.03.48.48 0 0 1-.13-.29H5V8c0-1.1.9-2 2-2h9zM6 8v12.64l5.16-3.67a.49.49 0 0 1 .68 0L17 20.64V8a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"
                }),
                dr = a.a.createElement("path", {
                    d: "M21 5v13.66h-.01a.5.5 0 0 1-.12.29.5.5 0 0 1-.7.03l-.17-.12V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1H8c0-1.1.9-2 2-2h9a2 2 0 0 1 2 2z"
                }),
                mr = function(e) {
                    return a.a.createElement("svg", lr({
                        width: 25,
                        height: 25,
                        viewBox: "0 0 25 25"
                    }, e), ur, dr)
                };

            function fr() {
                var e = o()(["\n  fragment MetabarActionsLI_post on Post {\n    ...MetabarButtonConversionLI_post\n    isLocked\n    pendingCollection {\n      ...MetabarActionsLI_collection_common\n    }\n    ...MetabarPostMenuButton_post\n  }\n  ", "\n  ", "\n  ", "\n"]);
                return fr = function() {
                    return e
                }, e
            }

            function pr() {
                var e = o()(["\n  fragment MetabarActionsLI_collection on Collection {\n    ...CollectionAvatar_collection\n    ...CollectionMetabarActionsPopover_collection\n    ...MetabarActionsLI_collection_common\n  }\n  ", "\n  ", "\n  ", "\n"]);
                return pr = function() {
                    return e
                }, e
            }

            function gr() {
                var e = o()(["\n  fragment MetabarActionsLI_collection_common on Collection {\n    creator {\n      id\n    }\n    viewerIsEditor\n  }\n"]);
                return gr = function() {
                    return e
                }, e
            }
            var br = "16px",
                hr = "10px";
            var vr = s()(gr()),
                yr = s()(pr(), u.b, b, vr),
                xr = s()(fr(), S, vr, z),
                Er = Object(l.c)(function(e) {
                    return {
                        authDomain: e.config.authDomain
                    }
                })(function(e) {
                    var t = e.authDomain,
                        n = e.collection,
                        r = e.post,
                        o = e.viewer,
                        a = e.setIsMetabarLocked,
                        c = !!o.mediumMemberAt,
                        s = n || r && r.pendingCollection,
                        l = s && s.creator && s.creator.id === o.id,
                        m = s && s.viewerIsEditor,
                        g = l || m,
                        b = r && r.creator && r.creator.id === o.id,
                        y = r && (g || b);
                    return i.createElement(Mn.a, {
                        name: "can_edit_members_only_posts"
                    }, function(e) {
                        var s = e && r && r.isLocked,
                            l = y || s;
                        return i.createElement(d.d, null, i.createElement(d.b, {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end"
                        }, l && r && i.createElement(q, {
                            post: r
                        }), !l && i.createElement(Mn.a, {
                            name: "enable_inline_search_lite"
                        }, function(e) {
                            return e ? i.createElement(j.b, {
                                source: {
                                    name: "search-popover"
                                }
                            }, i.createElement(cr, {
                                collection: n,
                                setIsMetabarLocked: a
                            })) : i.createElement(d.u, {
                                href: Object(f.hb)()
                            }, i.createElement(d.b, {
                                tag: qn,
                                marginLeft: br,
                                marginRight: br,
                                sm: {
                                    marginLeft: hr,
                                    marginRight: hr
                                }
                            }))
                        }), !l && c && i.createElement(d.u, {
                            href: Object(f.Sb)(t)
                        }, i.createElement(d.b, {
                            tag: mr,
                            marginRight: br,
                            sm: {
                                display: "none"
                            }
                        })), i.createElement(d.b, {
                            marginRight: br,
                            display: "flex",
                            sm: {
                                marginRight: hr
                            }
                        }, i.createElement(p.a, null, i.createElement(yn, {
                            setIsMetabarLocked: a
                        }))), !c && i.createElement(d.b, {
                            marginRight: br,
                            sm: {
                                display: "none"
                            }
                        }, i.createElement(C, {
                            post: r
                        })), i.createElement(E, {
                            viewer: o,
                            setIsMetabarLocked: a
                        }, i.createElement(v.d, {
                            user: o,
                            scale: "XS"
                        })), n && g && i.createElement(sr.a, {
                            name: "enable_lite_pub_header_menu"
                        }, i.createElement(d.b, {
                            marginLeft: br,
                            sm: {
                                marginLeft: hr
                            }
                        }, i.createElement(h, {
                            collection: n
                        }, i.createElement(u.a, {
                            collection: n,
                            size: 32
                        }))))))
                    })
                }),
                wr = n("./src/components/metabar/MetabarActionsLO.tsx");

            function Or() {
                var e = o()(["\n  fragment MetabarActions_post on Post {\n    ...MetabarActionsLI_post\n  }\n  ", "\n"]);
                return Or = function() {
                    return e
                }, e
            }

            function jr() {
                var e = o()(["\n  fragment MetabarActions_collection on Collection {\n    ...MetabarActionsLI_collection\n  }\n  ", "\n"]);
                return jr = function() {
                    return e
                }, e
            }

            function _r(e) {
                var t = e.post,
                    n = e.collection,
                    r = e.withoutConversionButton,
                    o = void 0 !== r && r,
                    a = e.setIsMetabarLocked;
                return i.createElement(O.a, null, function(e) {
                    return e ? i.createElement(Er, {
                        viewer: e,
                        post: t,
                        collection: n,
                        setIsMetabarLocked: a
                    }) : i.createElement(wr.b, {
                        withoutConversionButton: o,
                        post: t
                    })
                })
            }
            n.d(t, "c", function() {
                return _r
            }), n.d(t, "a", function() {
                return kr
            }), n.d(t, "b", function() {
                return Sr
            });
            var kr = s()(jr(), yr),
                Sr = s()(Or(), xr)
        },
        "./src/components/metabar/MetabarActionsLO.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./node_modules/graphql-tag/src/index.js"),
                c = n.n(a),
                s = n("./node_modules/react-redux/es/index.js"),
                l = n("./src/framework/design-system/components/index.ts"),
                u = n("./src/components/susi/SusiClickable.tsx"),
                d = n("./src/framework/source/index.ts"),
                m = n("./src/components/upsell/UpsellClickable.tsx"),
                f = n("./src/framework/track/UpsellPresentationTracker.tsx");

            function p() {
                var e = o()(["\n  fragment MetabarButtonConversionLO_post on Post {\n    ...UpsellClickable_post\n  }\n  ", "\n"]);
                return p = function() {
                    return e
                }, e
            }
            var g = c()(p(), m.b),
                b = function(e) {
                    var t = e.post;
                    return i.createElement(d.b, {
                        source: {
                            name: "upgrade_membership",
                            dimension: "nav_full"
                        }
                    }, i.createElement(f.a, null, i.createElement(m.a, {
                        linkStyle: "SUBTLE",
                        post: t
                    }, i.createElement(l.d, null, "Become a member"))))
                };

            function h() {
                var e = o()(["\n  fragment MetabarActionsLO_post on Post {\n    ...MetabarButtonConversionLO_post\n    ...SusiClickable_post\n  }\n  ", "\n  ", "\n"]);
                return h = function() {
                    return e
                }, e
            }
            n.d(t, "a", function() {
                return v
            });
            t.b = Object(s.c)(function(e) {
                return {
                    isAmp: e.config.isAmp
                }
            })(function(e) {
                var t = e.withoutConversionButton,
                    n = void 0 !== t && t,
                    r = e.post,
                    o = e.isAmp;
                return i.createElement(l.b, {
                    display: "flex",
                    alignItems: "center"
                }, !o && i.createElement(l.b, {
                    display: "flex",
                    sm: {
                        display: "none"
                    }
                }, !n && i.createElement(b, {
                    post: r
                }), i.createElement(l.b, {
                    marginLeft: "16px"
                }, i.createElement(l.d, null, i.createElement(u.a, {
                    linkStyle: "OBVIOUS",
                    operation: "login",
                    susiEntry: "nav_reg"
                }, "Sign in")))), i.createElement(l.b, {
                    marginLeft: "16px"
                }, i.createElement(u.a, {
                    isButton: !0,
                    buttonStyle: "OBVIOUS",
                    operation: "register",
                    post: r,
                    susiEntry: "nav_reg"
                }, "Get started")))
            });
            var v = c()(h(), g, u.c)
        },
        "./src/components/metabar/MetabarLayout.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return v
            });
            var r = n("./node_modules/@babel/runtime/helpers/extends.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                a = n.n(i),
                c = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                s = n.n(c),
                l = n("./node_modules/react/index.js"),
                u = n("./src/framework/track/DomMonitorContext.tsx"),
                d = n("./src/framework/design-system/components/index.ts"),
                m = n("./src/framework/style/index.ts"),
                f = n("./src/styles/mediaTypes.ts"),
                p = n("./src/styles/zIndex.ts"),
                g = 25,
                b = 25,
                h = function(e, t) {
                    return function(n) {
                        var r;
                        return r = {
                            display: "block",
                            position: e ? "fixed" : "absolute",
                            top: "0",
                            left: "0",
                            right: "0",
                            backgroundColor: t ? "transparent" : n.backgroundColor,
                            zIndex: p.a.metabar,
                            boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.05)"
                        }, s()(r, Object(f.a)("no-preference"), {
                            transition: e ? "transform 300ms ease" : null,
                            willChange: e ? "transform" : null
                        }), s()(r, Object(f.b)(n), {
                            display: "none"
                        }), r
                    }
                },
                v = function(e) {
                    var t = e.behavior,
                        n = void 0 === t ? "none" : t,
                        r = e.children,
                        i = e.height,
                        c = e.heightSm,
                        f = e.isFixed,
                        p = e.isLocked,
                        v = e.isTransparent,
                        y = e.marginBottom,
                        x = void 0 === y ? 64 : y,
                        E = e.marginBottomSm,
                        w = void 0 === E ? 24 : E,
                        O = e.breakpoint,
                        j = void 0 === O ? "sm" : O,
                        _ = Object(m.useCx)(),
                        k = Object(u.b)(),
                        S = l.useState(!0),
                        C = a()(S, 2),
                        P = C[0],
                        I = C[1],
                        L = l.useState(0),
                        T = a()(L, 2),
                        A = T[0],
                        N = T[1];
                    return l.useEffect(function() {
                        if ("none" !== n && f) return k.on("scroll_down", t), k.on("scroll_up", e),
                            function() {
                                k.off("scroll_down", t), k.off("scroll_up", e)
                            };

                        function e() {
                            window.pageYOffset <= b && I(!0), "aggressive" === n && A - window.pageYOffset >= g && I(!0)
                        }

                        function t() {
                            window.pageYOffset > b && !p && I(!1), N(window.pageYOffset)
                        }
                    }), l.createElement(l.Fragment, null, l.createElement("nav", {
                        className: _(h(f, v)),
                        style: {
                            transform: P ? null : "translatey(-100%)"
                        }
                    }, l.createElement("div", {
                        className: "branch-journeys-top"
                    }, r)), l.createElement(d.b, o()({
                        height: "".concat(i, "px"),
                        marginBottom: "".concat(x, "px")
                    }, s()({}, j, {
                        height: "".concat(c, "px"),
                        marginBottom: "".concat(w, "px")
                    }))))
                }
        },
        "./src/components/metabar/constants.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "b", function() {
                return i
            });
            var r = 65,
                o = 56,
                i = 54
        },
        "./src/components/navigation/Anchor.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/extends.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
                c = n("./node_modules/react-redux/es/index.js"),
                s = n("./src/components/session/WithFlag.tsx"),
                l = n("./src/framework/source/index.ts"),
                u = n("./src/routes/getLiteRouteForPath.ts"),
                d = n("./src/util/navigation.ts");
            t.a = Object(c.c)(function(e) {
                return {
                    currentHostname: e.navigation.hostname,
                    isCustomDomain: e.client.isCustomDomain
                }
            })(function(e) {
                var t = e.href,
                    n = e.children,
                    r = e.currentHostname,
                    c = e.isCustomDomain,
                    m = e.disableSourceParam,
                    f = void 0 !== m && m,
                    p = e["aria-label"],
                    g = e.className,
                    b = e.onClick,
                    h = e.target,
                    v = Object(l.d)(),
                    y = !Object(d.e)(t, r),
                    x = "#" === t[0];
                v && !f && (t = Object(d.a)(t, {
                    source: v
                }));
                var E = {
                        "aria-label": p,
                        className: g,
                        onClick: b,
                        target: x ? void 0 : h,
                        rel: "noopener"
                    },
                    w = i.createElement("a", o()({
                        href: t
                    }, E), n);
                if (y || x || b) return w;
                var O = Object(d.c)(t),
                    j = Object(u.a)(O, {
                        isCustomDomain: c
                    });
                if (!j) return w;
                var _ = i.createElement(a.b, o()({
                    to: O
                }, E), n);
                return j.flagName ? i.createElement(s.a, {
                    name: j.flagName
                }, function(e) {
                    return !0 === e ? _ : w
                }) : _
            })
        },
        "./src/components/navigation/Redirect.tsx": function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", function() {
                    return a
                });
                var r = n("./node_modules/react/index.js"),
                    o = n("./node_modules/react-router/esm/react-router.js"),
                    i = n("./src/screens/LoadingScreen.tsx");

                function a(t) {
                    var n = t.to;
                    return e.window ? (e.window.location = n, r.createElement(i.a, null)) : r.createElement(o.a, {
                        to: n
                    })
                }
            }).call(this, n("./node_modules/webpack/buildin/global.js"))
        },
        "./src/components/notifications/notification-types/util/NotificationLayout.tsx": function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "b", function() {
                    return w
                }), n.d(t, "a", function() {
                    return O
                });
                var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                    o = n.n(r),
                    i = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                    a = n.n(i),
                    c = n("./node_modules/react/index.js"),
                    s = n("./node_modules/graphql-tag/src/index.js"),
                    l = n.n(s),
                    u = n("./node_modules/date-fns/index.js"),
                    d = n("./src/components/format/Date.tsx"),
                    m = n("./src/components/format/TimeAgo.tsx"),
                    f = n("./src/components/notifications/notification-types/util/NotificationStyles.tsx"),
                    p = n("./src/components/user/UserAvatar.tsx"),
                    g = n("./src/framework/design-system/components/index.ts");

                function b() {
                    var e = o()(["\n  fragment NotificationLayout_notification on Notification {\n    actor {\n      ...UserAvatar_user\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n  }\n  ", "\n"]);
                    return b = function() {
                        return e
                    }, e
                }

                function h(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })), n.push.apply(n, r)
                    }
                    return n
                }

                function v(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? h(n, !0).forEach(function(t) {
                            a()(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }

                function y(e) {
                    if (!e) return null;
                    var t, n = e.actorName ? e.actorName : "Unknown user";
                    if (e.rollupItems) {
                        var r = (t = e.rollupItems) ? new Set(t.map(function(e) {
                            return e.actor
                        })).size : 0;
                        if (r > 1) return r > 2 ? n + " + " + (r - 1) + " others " : n + " + 1 other "
                    }
                    return n + " "
                }

                function x(t) {
                    var n = t.timestamp;
                    return Object(u.differenceInDays)(e.Date.now(), n) >= 5 ? c.createElement(d.a, {
                        timestamp: n
                    }) : c.createElement(m.a, {
                        timestamp: n
                    })
                }

                function E(e) {
                    var t = e.onClick,
                        n = e.url,
                        r = e.children;
                    return t ? c.createElement(g.u, {
                        style: {
                            border: "none"
                        },
                        onClick: t
                    }, r) : n ? c.createElement(g.u, {
                        inheritBorder: !1,
                        href: n
                    }, r) : c.createElement(g.b, {
                        border: "NONE"
                    }, r)
                }

                function w(e) {
                    var t = e.url,
                        n = e.onClick,
                        r = e.user,
                        o = e.actors,
                        i = e.children,
                        a = e.occurredAt,
                        s = e.isUnread;
                    return c.createElement(g.N, null, function(e) {
                        return c.createElement("div", {
                            style: v({
                                display: "flex",
                                flexDirection: "row",
                                padding: "20px",
                                width: "360px",
                                lineHeight: 1.4
                            }, s ? {
                                borderLeftColor: "".concat(e.accentColor.border.normal),
                                borderLeftStyle: "".concat(e.borderStyle),
                                borderLeftWidth: "3px"
                            } : {
                                border: "none"
                            })
                        }, c.createElement(g.b, {
                            marginRight: "16px",
                            marginTop: "auto",
                            marginBottom: "auto"
                        }, r ? c.createElement(p.d, {
                            scale: "XS",
                            user: r,
                            link: !0
                        }) : c.createElement(p.a, {
                            scale: "XS"
                        })), c.createElement(E, {
                            url: t,
                            onClick: n
                        }, c.createElement(g.b, {
                            textAlign: "left",
                            display: "flex",
                            flexDirection: "column"
                        }, c.createElement(g.b, null, o ? c.createElement(f.a, null, y(o)) : null, i), a && c.createElement(g.b, null, c.createElement(x, {
                            timestamp: a
                        })))))
                    })
                }
                var O = l()(b(), p.b)
            }).call(this, n("./node_modules/webpack/buildin/global.js"))
        },
        "./src/components/notifications/notification-types/util/NotificationStyles.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "c", function() {
                return u
            }), n.d(t, "d", function() {
                return d
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./src/framework/style/index.ts"),
                i = n("./src/framework/design-system/components/index.ts");

            function a(e) {
                var t = e.children,
                    n = Object(o.useCx)();
                return r.createElement(o.WithTheme, null, function(e) {
                    var o = {
                        color: e.baseColor.text.dark
                    };
                    return r.createElement("span", {
                        className: n(o)
                    }, t, " ")
                })
            }

            function c(e) {
                var t = e.children,
                    n = Object(o.useCx)();
                return r.createElement(o.WithTheme, null, function(e) {
                    var o = {
                        color: e.baseColor.text.dark
                    };
                    return r.createElement("span", {
                        className: n(o)
                    }, r.createElement(i.b, null, t))
                })
            }

            function s(e) {
                var t = e.children,
                    n = Object(o.useCx)();
                return r.createElement(o.WithTheme, null, function(e) {
                    var o = {
                        color: e.baseColor.text.dark,
                        textOverflow: "ellipsis"
                    };
                    return r.createElement("span", {
                        className: n(o)
                    }, r.createElement(i.b, null, t))
                })
            }

            function l(e) {
                var t = e.children,
                    n = Object(o.useCx)();
                return r.createElement(o.WithTheme, null, function(e) {
                    var o = {
                        color: e.baseColor.text.dark,
                        backgroundColor: "rgba(12,242,143,.2)",
                        display: "block",
                        width: "fit-content",
                        maxWidth: "250px",
                        padding: "2px 2px 1px",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap"
                    };
                    return r.createElement("span", {
                        className: n(o)
                    }, t, " ")
                })
            }

            function u(e) {
                var t = e.text;
                return r.createElement(l, null, t.substring(0, 50))
            }

            function d(e) {
                var t = e.text;
                return r.createElement(s, null, "“" + t.substring(0, 50) + "”")
            }
        },
        "./src/components/optimizely/OptimizelyWrapper.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./node_modules/react-redux/es/index.js"),
                i = n("./src/framework/style/index.ts"),
                a = Object(o.c)(function(e) {
                    return {
                        optimizelyLoadedOrSkipped: e.navigation.optimizelyLoadedOrSkipped
                    }
                })(function(e) {
                    var t = e.children,
                        n = e.featureString,
                        o = e.optimizelyLoadedOrSkipped,
                        a = e.target,
                        c = Object(i.useCx)();
                    return r.createElement("div", {
                        className: c({
                            visibility: o ? "visible" : "hidden"
                        }),
                        id: "".concat(n, "-").concat(a)
                    }, t)
                })
        },
        "./src/components/post-listing/PostListingItemBylineWithAvatar.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return v
            });
            var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./node_modules/graphql-tag/src/index.js"),
                c = n.n(a),
                s = n("./node_modules/react-redux/es/index.js"),
                l = n("./src/framework/design-system/components/index.ts"),
                u = n("./src/components/format/Date.tsx"),
                d = n("./src/components/ui/MiddotContainer.tsx"),
                m = n("./src/util/routes.ts"),
                f = n("./src/util/numbers.ts"),
                p = n("./src/components/user/UserAvatar.tsx"),
                g = n("./src/svg/star-15px.svg"),
                b = n("./src/components/session/WithFlag.tsx");

            function h() {
                var e = o()(["\n  fragment PostListingItemBylineWithAvatar_post on Post {\n    creator {\n      username\n      name\n      id\n      imageId\n      mediumMemberAt\n    }\n    isLocked\n    readingTime\n    updatedAt\n    statusForCollection\n    collection {\n      id\n      name\n      ...collectionUrl_collection\n    }\n  }\n  ", "\n"]);
                return h = function() {
                    return e
                }, e
            }
            var v = c()(h(), m.z);
            t.b = Object(s.c)(function(e) {
                return {
                    currentLocation: e.navigation.currentLocation
                }
            })(function(e) {
                var t = e.currentLocation,
                    n = e.post,
                    r = n.creator,
                    o = n.readingTime;
                return r ? i.createElement(l.b, {
                    display: "flex",
                    alignItems: "center"
                }, i.createElement(p.d, {
                    user: r,
                    scale: "S",
                    link: !0
                }), i.createElement(l.b, {
                    marginLeft: "16px"
                }, i.createElement(l.d, {
                    strong: !0,
                    clamp: 2
                }, i.createElement(l.f, {
                    href: Object(m.Mb)(r.username || "")
                }, r.name), "APPROVED" === n.statusForCollection && n.collection && n.collection.name && i.createElement(l.f, {
                    href: Object(m.y)(n.collection, t)
                }, " in ", n.collection && n.collection.name)), i.createElement(l.d, null, i.createElement(l.b, {
                    display: "flex",
                    alignItems: "center"
                }, i.createElement(d.a, {
                    middotPadding: "4px",
                    marginTop: "3px",
                    display: "flex",
                    flexWrap: "wrap"
                }, n && n.updatedAt && i.createElement(u.a, {
                    timestamp: n.updatedAt
                }), "".concat(Object(f.e)(o || 0), " min read")), i.createElement(b.a, {
                    name: "remove_stars_ui"
                }, function(e) {
                    return !n.isLocked || e ? null : i.createElement(l.b, {
                        marginLeft: "4px",
                        alignSelf: "center",
                        marginTop: "1px"
                    }, i.createElement(g.a, null))
                }))))) : null
            })
        },
        "./src/components/post-listing/PostListingItemImage.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return y
            });
            var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/typeof.js"),
                a = n.n(i),
                c = n("./node_modules/lodash/isPlainObject.js"),
                s = n.n(c),
                l = n("./node_modules/react/index.js"),
                u = n("./node_modules/graphql-tag/src/index.js"),
                d = n.n(u),
                m = n("./src/framework/design-system/components/index.ts"),
                f = n("./src/framework/style/index.ts"),
                p = n("./src/styles/breakpoints.ts"),
                g = n("./src/util/miroImage.ts"),
                b = n("./src/util/routes.ts");

            function h() {
                var e = o()(["\n  fragment PostListingItemImage_post on Post {\n    id\n    mediumUrl\n    previewImage {\n      id\n      focusPercentX\n      focusPercentY\n    }\n  }\n"]);
                return h = function() {
                    return e
                }, e
            }
            var v = {
                display: "block",
                backgroundOrigin: "border-box",
                backgroundSize: "cover"
            };
            t.b = function(e) {
                var t = e.post,
                    n = e.width,
                    r = e.height,
                    o = e.miroWidth,
                    i = e.miroHeight,
                    c = Object(f.useCx)(),
                    u = n || o,
                    d = r || i,
                    h = t.previewImage;
                if (!h) return null;
                var y = Object(g.d)({
                        miroId: h ? h.id : "",
                        width: o,
                        height: i,
                        strategy: g.a.Resample
                    }),
                    x = h.focusPercentX || 50,
                    E = h.focusPercentY || 50,
                    w = u.base || u,
                    O = d.base || d;
                return l.createElement(m.f, {
                    href: Object(b.cb)(t),
                    className: c([v, function(e) {
                        var t = {
                            backgroundPosition: "".concat(x, "% ").concat(E, "%"),
                            backgroundImage: "url(".concat(y, ")"),
                            height: "number" == typeof O ? "".concat(O, "px") : O,
                            width: "number" == typeof w ? "".concat(w, "px") : w
                        };
                        return "object" === a()(u) && s()(u) && Object.keys(u).forEach(function(n) {
                            if ("base" !== n) {
                                var r = p[n](e);
                                if (u[n]) {
                                    t[r] = t[r] || {};
                                    var o = u[n];
                                    t[r].width = "number" == typeof o ? "".concat(o, "px") : o
                                }
                            }
                        }), "object" === a()(d) && s()(d) && Object.keys(d).forEach(function(n) {
                            if ("base" !== n) {
                                var r = p[n](e);
                                if (d[n]) {
                                    t[r] = t[r] || {};
                                    var o = d[n];
                                    t[r].height = "number" == typeof o ? "".concat(o, "px") : o
                                }
                            }
                        }), t
                    }])
                })
            };
            var y = d()(h())
        },
        "./src/components/post/helpers/loggedOutHistory.ts": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return g
            }), n.d(t, "a", function() {
                return b
            }), n.d(t, "c", function() {
                return h
            });
            var r, o, i = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                a = n.n(i),
                c = n("./src/util/LocalStorage.ts"),
                s = "post-view",
                l = "post-read",
                u = "topic-view",
                d = "medium-search",
                m = "external-search",
                f = (r = {}, a()(r, s, 200), a()(r, l, 200), a()(r, u, 200), a()(r, d, 200), a()(r, m, 200), r),
                p = (o = {}, a()(o, s, new c.a("pv")), a()(o, l, new c.a("pr")), a()(o, u, new c.a("tv")), a()(o, d, new c.a("ms")), a()(o, m, new c.a("es")), o),
                g = function(e) {
                    v(s, e, Date.now())
                },
                b = function(e) {
                    v(l, e, Date.now())
                },
                h = function(e) {
                    v(u, e, Date.now())
                },
                v = function(e, t, n) {
                    var r = p[e];
                    r.getCount() === f[e] && r.clean();
                    try {
                        r.set(t, n)
                    } catch (e) {
                        r.clean()
                    }
                }
        },
        "./src/components/privacy/EuPrivacyBannerLoader.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return c
            }), n.d(t, "a", function() {
                return s
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./node_modules/react-redux/es/index.js"),
                i = n("./src/store/actions/navigation.ts"),
                a = n("./src/util/LocalStorage.ts"),
                c = "accepted",
                s = new a.a("201805-policy");
            t.b = Object(o.c)(function(e) {
                return {
                    isEu: e.client.isEu
                }
            })(function(e) {
                var t = e.dispatch,
                    n = e.isEu,
                    o = e.loggedIn,
                    a = n && !s.get(c) && !o;
                return r.useEffect(function() {
                    a && t(Object(i.j)({
                        duration: "FOREVER",
                        message: "",
                        toastStyle: "EU_PRIVACY_BANNER"
                    }))
                }, []), null
            })
        },
        "./src/components/session/RequireFlag.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./src/components/session/WithFlag.tsx");

            function i(e) {
                var t = e.name,
                    n = e.children,
                    i = e.requiredValue,
                    a = void 0 === i || i;
                return r.createElement(o.a, {
                    name: t
                }, function(e) {
                    return e === a ? n : null
                })
            }
        },
        "./src/components/session/WithFlag.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./node_modules/react-apollo/react-apollo.esm.js"),
                c = n("./node_modules/graphql-tag/src/index.js");

            function s() {
                var e = o()(["\n  query WithFlagQuery {\n    variantFlags {\n      name\n      valueType {\n        __typename\n        ... on VariantFlagBoolean {\n          booleanValue: value\n        }\n        ... on VariantFlagString {\n          stringValue: value\n        }\n      }\n    }\n  }\n"]);
                return s = function() {
                    return e
                }, e
            }
            var l = n.n(c)()(s());

            function u(e) {
                var t = e.name,
                    n = e.children,
                    r = e.nonBlocking,
                    o = void 0 !== r && r;
                return i.createElement(a.c, {
                    query: l
                }, function(e) {
                    var r = e.data,
                        i = (r = void 0 === r ? {} : r).variantFlags,
                        a = void 0 === i ? [] : i,
                        c = e.loading,
                        s = e.error;
                    if (c || s) return o ? n(null) : null;
                    var l = a.find(function(e) {
                            return e.name === t
                        }),
                        u = null;
                    return l && "VariantFlagBoolean" === l.valueType.__typename && void 0 !== l.valueType.booleanValue ? u = l.valueType.booleanValue : l && "VariantFlagString" === l.valueType.__typename && void 0 !== l.valueType.stringValue && (u = l.valueType.stringValue), n(u)
                })
            }
        },
        "./src/components/session/WithViewer.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./node_modules/react-apollo/react-apollo.esm.js"),
                c = n("./node_modules/graphql-tag/src/index.js");

            function s() {
                var e = o()(["\n  query WithViewerQuery {\n    viewer {\n      id\n      username\n      name\n      imageId\n      mediumMemberAt\n      hasPastMemberships\n      isPartnerProgramEnrolled\n      email\n      unverifiedEmail\n      createdAt\n    }\n  }\n"]);
                return s = function() {
                    return e
                }, e
            }
            var l = n.n(c)()(s());

            function u(e) {
                var t = e.children,
                    n = e.nonBlocking;
                return i.createElement(a.c, {
                    query: l
                }, function(e) {
                    var r = e.loading,
                        o = e.error,
                        i = e.data;
                    if (n && (o || r)) return t(null);
                    if (r) return null;
                    if (i) return t(i.viewer);
                    throw new Error(o)
                })
            }
        },
        "./src/components/social/ShareFriendLink.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return g
            }), n.d(t, "a", function() {
                return v
            });
            var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./node_modules/graphql-tag/src/index.js"),
                c = n.n(a),
                s = n("./src/framework/design-system/components/index.ts"),
                l = n("./src/framework/design-system/type/Detail.tsx"),
                u = n("./src/framework/reporter/index.ts"),
                d = n("./src/framework/style/index.ts"),
                m = n("./src/util/CopyUrl.tsx"),
                f = n("./src/util/routes.ts");

            function p() {
                var e = o()(["\n  fragment ShareFriendLink_post on Post {\n    id\n    shareKey\n    mediumUrl\n  }\n"]);
                return p = function() {
                    return e
                }, e
            }
            var g = c()(p()),
                b = function(e) {
                    return {
                        background: "linear-gradient(to right, ".concat(e.baseColor.text.normal, ", 90%, white 100%)"),
                        "-webkit-background-clip": "text",
                        "-webkit-text-fill-color": "transparent",
                        color: "transparent",
                        fontSize: "15px",
                        lineHeight: "21px",
                        fontFamily: e.font.uiRegular.family,
                        marginRight: "20px",
                        borderColor: e.baseColor.border.lighter,
                        borderStyle: "solid",
                        borderBottomWidth: "2px",
                        borderTopWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        whiteSpace: "nowrap",
                        overflow: "hidden"
                    }
                },
                h = function(e) {
                    return {
                        position: "relative",
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "20px",
                        paddingBottom: "5px",
                        fontFamily: e.font.uiRegular.family
                    }
                },
                v = function(e) {
                    var t = e.post,
                        n = Object(d.useCx)(),
                        r = t && t.shareKey,
                        o = t && t.mediumUrl,
                        a = "".concat(o, "?source=friends_link&sk=").concat(r),
                        c = Object(u.c)(),
                        p = i.useCallback(function() {
                            c.event("post.copyFriendLink", {
                                postId: t.id
                            })
                        }, [t]);
                    return i.createElement(s.b, null, i.createElement(l.a, {
                        scale: "M"
                    }, "This link guarantees anyone free access to your story, even if they’ve read all of their complimentary stories for this month.", i.createElement("br", null), i.createElement(s.u, {
                        linkStyle: "OBVIOUS",
                        inline: !0,
                        href: Object(f.J)()
                    }, "Learn more")), i.createElement("div", {
                        className: n(h)
                    }, i.createElement("p", {
                        className: n(b)
                    }, a), i.createElement(m.a, {
                        url: a,
                        onCopy: p
                    }, function(e) {
                        return e ? "Copied" : "Copy"
                    })))
                }
        },
        "./src/components/style/BaseThemeProvider.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return m
            });
            var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./src/styles/theme.ts"),
                c = n("./src/framework/design-system/components/index.ts"),
                s = n("./src/components/session/WithFlag.tsx");

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(n, !0).forEach(function(t) {
                        o()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var d = u({}, a.a, {
                    grid: u({}, a.a.grid, {
                        gutterSteps: {
                            xs: 6,
                            sm: 6,
                            md: 7,
                            lg: 8,
                            xl: 8
                        },
                        marginSteps: {
                            xs: 6,
                            sm: 6,
                            md: 12,
                            lg: 16,
                            xl: 16
                        },
                        xlMaxContentWidth: 1320
                    }),
                    maxWidths: {
                        inset: 680,
                        outset: 1192
                    }
                }),
                m = function(e) {
                    var t = e.children;
                    return i.createElement(s.a, {
                        name: "enable_different_grid",
                        nonBlocking: !0
                    }, function(e) {
                        var n = e ? d : a.a;
                        return i.createElement(c.H, {
                            theme: n
                        }, t)
                    })
                }
        },
        "./src/components/style/RendererContext.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("./node_modules/react/index.js"),
                o = r.createContext()
        },
        "./src/components/style/useRenderer.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./src/components/style/RendererContext.tsx"),
                i = function() {
                    return r.useContext(o.a)
                }
        },
        "./src/components/susi/SusiClickable.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return j
            }), n.d(t, "b", function() {
                return _
            }), n.d(t, "c", function() {
                return k
            }), n.d(t, "d", function() {
                return S
            }), n.d(t, "e", function() {
                return C
            });
            var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/extends.js"),
                a = n.n(i),
                c = n("./node_modules/react/index.js"),
                s = n("./node_modules/react-redux/es/index.js"),
                l = n("./node_modules/graphql-tag/src/index.js"),
                u = n.n(l),
                d = n("./node_modules/react-apollo/react-apollo.esm.js"),
                m = n("./src/components/susi/susi-modal/SusiContainer.tsx"),
                f = n("./src/framework/design-system/components/index.ts"),
                p = n("./src/framework/source/index.ts"),
                g = n("./src/util/navigation.ts"),
                b = n("./src/util/routes.ts");

            function h() {
                var e = o()(["\n  query SusiClickableAccountTokenQuery {\n    ...SusiContainer_query\n  }\n  ", "\n"]);
                return h = function() {
                    return e
                }, e
            }

            function v() {
                var e = o()(["\n  query SusiClickableAccountTokenInlineQuery {\n    accountToken\n  }\n"]);
                return v = function() {
                    return e
                }, e
            }

            function y() {
                var e = o()(["\n  fragment SusiClickable_user on User {\n    ...SusiContainer_user\n  }\n  ", "\n"]);
                return y = function() {
                    return e
                }, e
            }

            function x() {
                var e = o()(["\n  fragment SusiClickable_topic on Topic {\n    ...SusiContainer_topic\n  }\n  ", "\n"]);
                return x = function() {
                    return e
                }, e
            }

            function E() {
                var e = o()(["\n  fragment SusiClickable_post on Post {\n    id\n    mediumUrl\n    ...SusiContainer_post\n  }\n  ", "\n"]);
                return E = function() {
                    return e
                }, e
            }

            function w() {
                var e = o()(["\n  fragment SusiClickable_collection on Collection {\n    ...SusiContainer_collection\n  }\n  ", "\n"]);
                return w = function() {
                    return e
                }, e
            }
            var O = function(e) {
                    e.actionUrl;
                    var t = e.authDomain,
                        n = e.buttonSize,
                        r = e.buttonStyle,
                        o = e.children,
                        i = e.currentLocation,
                        a = e.linkStyle,
                        s = e.isAmp,
                        l = e.post,
                        u = e.isButton,
                        d = e.operation,
                        m = e.show,
                        p = "http[s]?://[^/]*" + t,
                        h = null == i.match(p),
                        v = s || h,
                        y = r || a || "SUBTLE",
                        x = s && l ? l.mediumUrl || Object(b.db)(t, l.id) : i,
                        E = "login" === d ? Object(g.a)(Object(b.lb)(t), {
                            redirect: x
                        }) : Object(g.a)(Object(b.nb)(t), {
                            redirect: x
                        }),
                        w = function(e) {
                            e.preventDefault(), m()
                        };
                    return v ? u ? c.createElement(f.c, {
                        href: E,
                        buttonStyle: y,
                        size: n
                    }, o) : c.createElement(f.u, {
                        href: E,
                        linkStyle: y,
                        inline: !1
                    }, o) : u ? c.createElement(f.c, {
                        onClick: w,
                        buttonStyle: y,
                        size: n
                    }, o) : c.createElement(f.u, {
                        href: E,
                        onClick: function(e) {
                            e.metaKey || e.ctrlKey || w(e)
                        },
                        linkStyle: y,
                        inline: !1
                    }, o)
                },
                j = Object(s.c)(function(e) {
                    return {
                        authDomain: e.config.authDomain,
                        currentLocation: e.navigation.currentLocation,
                        isAmp: e.config.isAmp
                    }
                })(function(e) {
                    var t = e.actionUrl,
                        n = e.authDomain,
                        r = e.buttonSize,
                        o = e.buttonStyle,
                        i = e.children,
                        s = e.collection,
                        l = e.currentLocation,
                        u = e.isAmp,
                        g = e.isButton,
                        b = e.linkStyle,
                        h = e.operation,
                        v = e.post,
                        y = e.susiEntry,
                        x = e.topic,
                        E = e.user,
                        w = Object(p.g)();
                    void 0 === y && (y = w || void 0);
                    var j = {
                        actionUrl: t,
                        authDomain: n,
                        buttonSize: r,
                        buttonStyle: o,
                        children: i,
                        post: v,
                        isAmp: u,
                        currentLocation: l,
                        isButton: g,
                        linkStyle: b,
                        operation: h
                    };
                    return c.createElement(p.b, {
                        source: {
                            susiEntry: y
                        },
                        extendSource: !0
                    }, c.createElement(f.K, null, function(e) {
                        var n = e.isVisible,
                            r = (e.toggle, e.hide),
                            o = e.show;
                        return c.createElement(c.Fragment, null, c.createElement(d.c, {
                            query: P,
                            skip: !t || !n,
                            fetchPolicy: "no-cache"
                        }, function(e) {
                            e.loading, e.error;
                            var o = e.data,
                                i = o && o.accountToken;
                            return c.createElement(m.a, {
                                actionUrl: t,
                                collection: s,
                                hide: r,
                                initOperation: h,
                                isVisible: n,
                                post: v,
                                topic: x,
                                user: E,
                                token: i
                            })
                        }), c.createElement(O, a()({
                            show: o
                        }, j)))
                    }))
                }),
                _ = u()(w(), m.b),
                k = u()(E(), m.c),
                S = u()(x(), m.e),
                C = u()(y(), m.f),
                P = u()(v());
            u()(h(), m.d)
        },
        "./src/components/susi/helpers/index.ts": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return s
            }), n.d(t, "b", function() {
                return d
            }), n.d(t, "a", function() {
                return f
            });
            var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                o = n.n(r),
                i = n("./src/util/navigation.ts"),
                a = n("./src/screens/helpers/visits.ts");

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var s = function(e, t) {
                    switch (e) {
                        case "check_your_inbox":
                            return "check_your_inbox";
                        case "bookmark_footer":
                        case "bookmark_preview":
                        case "bookmark_sidebar":
                            return "bookmark";
                        case "clap_footer":
                        case "clap_preview":
                        case "clap_sidebar":
                            return "clap";
                        case "email_homepage":
                            return "direct_email_signup";
                        case "follow_custom_page":
                        case "follow_pub":
                        case "follow_sidebar":
                        case "follow_header":
                            return "follow_co_brand";
                        case "follow_byline":
                        case "follow_profile":
                        case "follow_list":
                        case "follow_topicgrid":
                        case "follow_topicpage":
                        case "follow_tag":
                            return "follow";
                        case "follow_card":
                        case "follow_footer":
                        case "follow_search":
                        case "follow_topicfeatured":
                            return t && t.collection ? "follow_co_brand" : "follow";
                        case "highlight_sidebar":
                        case "highlight_text":
                            return "highlight";
                        case "landing_benefits":
                            return "subscribe";
                        case "landing_creater":
                            return "writer";
                        case "landing_gift":
                            return "gift";
                        case "metered_view_2":
                            return "smart_meter_2";
                        case "metered_view_3":
                            return "smart_meter_3";
                        case "post_custom_domain":
                        case "post_free":
                            return "post_prompt";
                        case "post_paywall":
                        case "post_regwall":
                            return "read_exclusive";
                        case "privatenote_text":
                        case "respond_text":
                        case "respond_box":
                            return "respond";
                        case "homepage_banner":
                        case "nav_reg":
                        case "report_footer":
                        case "smart_meter":
                        default:
                            return "general"
                    }
                },
                l = function(e) {
                    switch (e) {
                        case "bookmark":
                            return function() {
                                return {
                                    subheader: "Sign in to save stories to your personalized bookmarks and access them anytime, anywhere."
                                }
                            };
                        case "clap":
                            return function(e) {
                                var t = e.user,
                                    n = void 0 === t ? "" : t;
                                return {
                                    subheader: n ? "Sign in to clap for this story and show ".concat(n, " how much you appreciated it.") : "Sign in to clap for this story"
                                }
                            };
                        case "follow":
                            return function(e) {
                                var t = e.user,
                                    n = void 0 === t ? "" : t,
                                    r = e.topic,
                                    o = void 0 === r ? "" : r;
                                return {
                                    subheader: "Sign in to follow" + (n ? " ".concat(n) : o ? " ".concat(o) : "") + "."
                                }
                            };
                        case "follow_co_brand":
                            return function(e) {
                                var t = e.collection,
                                    n = void 0 === t ? "" : t,
                                    r = e.productName;
                                return {
                                    subheader: "Sign in to follow ".concat(n, "."),
                                    poweredBy: "".concat(n, " is powered by ").concat(r, ".")
                                }
                            };
                        case "highlight":
                            return function() {
                                return {
                                    subheader: "Sign in to highlight this passage and show the author it resonates with you."
                                }
                            };
                        case "read_exclusive":
                            return function(e) {
                                var t = e.productName;
                                return {
                                    subheader: "Sign in to read this story and get personalized recommendations from ".concat(t, ".")
                                }
                            };
                        case "respond":
                            return function() {
                                return {
                                    subheader: "Sign in to keep the conversation moving with a response."
                                }
                            };
                        case "check_your_inbox":
                            return function(e) {
                                var t = e.email,
                                    n = void 0 === t ? "" : t;
                                return {
                                    title: "Check your inbox",
                                    subheader: n ? "We just emailed a magic link to ".concat(n, ". Click the link to sign in.") : "We just emailed a magic link. Click the link to sign in."
                                }
                            };
                        case "post_prompt":
                        case "smart_meter_2":
                        case "smart_meter_3":
                        default:
                            return function() {
                                return {
                                    subheader: "Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories."
                                }
                            }
                    }
                },
                u = function(e) {
                    switch (e) {
                        case "bookmark":
                            return function() {
                                return {
                                    title: "Create an account to bookmark this story.",
                                    subheader: "Save stories to your personalized bookmarks and access them anytime, anywhere."
                                }
                            };
                        case "clap":
                            return function(e) {
                                var t = e.user,
                                    n = void 0 === t ? "" : t;
                                return {
                                    title: "Create an account to clap for this story.",
                                    subheader: "Applause shows ".concat(n ? n + " " : "", "how much you appreciated this story.")
                                }
                            };
                        case "follow":
                            return function(e) {
                                var t = e.user,
                                    n = void 0 === t ? "" : t,
                                    r = e.productName,
                                    o = e.topic,
                                    i = void 0 === o ? "" : o;
                                return {
                                    title: "Never miss a story" + (n ? " from ".concat(n) : i ? " about ".concat(i) : "") + ".",
                                    subheader: "Create a ".concat(r, " account to follow your favorite authors, publications, and topics.")
                                }
                            };
                        case "follow_co_brand":
                            return function(e) {
                                var t = e.user,
                                    n = void 0 === t ? "" : t,
                                    r = e.collection,
                                    o = void 0 === r ? "" : r,
                                    i = e.productName,
                                    a = e.topic,
                                    c = void 0 === a ? "" : a;
                                return {
                                    title: "Never miss a story" + (n ? " from ".concat(n) : c ? " about ".concat(c) : "") + ".",
                                    subheader: "Create an account to follow your favorite authors, publications, and topics.",
                                    poweredBy: "".concat(o, " is powered by ").concat(i, ".")
                                }
                            };
                        case "highlight":
                            return function(e) {
                                var t = e.productName;
                                return {
                                    title: "Create an account to highlight this passage.",
                                    subheader: "Highlighting on ".concat(t, " shows the author and readers which ideas resonate with you.")
                                }
                            };
                        case "read_exclusive":
                            return function(e) {
                                var t = e.productName;
                                return {
                                    title: "Create an account to read this story.",
                                    subheader: "Signing up for ".concat(t, " is quick, easy, and free.")
                                }
                            };
                        case "respond":
                            return function() {
                                return {
                                    title: "Create an account to write a response.",
                                    subheader: "Build on this story’s ideas with your own – responses keep the conversation moving."
                                }
                            };
                        case "post_prompt":
                            return function(e) {
                                var t = e.productName,
                                    n = e.readCount,
                                    r = void 0 === n ? Object(a.d)() || 0 : n;
                                return {
                                    title: "Pardon the interruption.",
                                    subheader: r < 3 ? "We see you’ve read on ".concat(t, " before - there’s a personalized experience waiting just a few clicks away. Ready to make ").concat(t, " yours?") : "You’ve read ".concat(r, " stories this month. There’s a lot more where that came from. Ready to make ").concat(t, " yours?")
                                }
                            };
                        case "smart_meter_2":
                            return function(e) {
                                var t = e.productName;
                                return {
                                    title: "Extend your stay.",
                                    subheader: "Sign up for a free ".concat(t, " account, and you’ll get one more story in your member preview this month.")
                                }
                            };
                        case "smart_meter_3":
                            return function(e) {
                                var t = e.productName;
                                return {
                                    title: "Read to your mind’s desire.",
                                    subheader: "Sign up for a free ".concat(t, " account, and you’ll get one more story in your member preview this month.")
                                }
                            };
                        default:
                            return function(e) {
                                var t = e.productName;
                                return {
                                    title: "Join ".concat(void 0 === t ? "" : t, "."),
                                    subheader: "Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love."
                                }
                            }
                    }
                },
                d = function(e, t, n, r) {
                    var o = s(t, n);
                    return ("login" === e ? l : u)(o)(n, r)
                },
                m = ["clap_footer", "clap_preview", "clap_sidebar", "landing_benefits", "landing_gifts", "highlight_sidebar", "highlight_text", "landing_home_hero", "post_free", "post_custom_domain", "post_paywall", "post_regwall", "privatenote_text", "respond_box", "report_footer", "report_profile", "respond_text"],
                f = function(e, t, n, r, a) {
                    var s = n && m.includes(n),
                        l = Object(i.a)(e, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? c(n, !0).forEach(function(t) {
                                    o()(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(n).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({
                            source: t
                        }, s && {
                            skipOnboarding: "1"
                        })),
                        u = r && a ? Object(i.a)(r, {
                            token: a,
                            source: t
                        }) : "";
                    return u ? Object(i.a)(u, {
                        redirectUrl: l
                    }) : l
                }
        },
        "./src/components/susi/oauth-buttons/FacebookSusiButton.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/extends.js"),
                a = n.n(i),
                c = n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),
                s = n.n(c),
                l = n("./node_modules/react/index.js"),
                u = n.n(l),
                d = n("./node_modules/graphql-tag/src/index.js"),
                m = n.n(d),
                f = n("./node_modules/react-redux/es/index.js"),
                p = n("./src/components/susi/oauth-buttons/OAuthButton.tsx");

            function g() {
                return (g = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var b = u.a.createElement("path", {
                    d: "M20.3 4H4.7a.7.7 0 0 0-.7.7v15.6c0 .38.32.7.7.7h8.33v-6.38h-2.12v-2.65h2.12V9.84c0-2.2 1.4-3.27 3.35-3.27.94 0 1.75.07 1.98.1v2.3H17c-1.06 0-1.31.5-1.31 1.24v1.76h2.65l-.53 2.65H15.7l.04 6.38h4.56a.7.7 0 0 0 .71-.7V4.7a.7.7 0 0 0-.7-.7",
                    fillRule: "evenodd"
                }),
                h = function(e) {
                    return u.a.createElement("svg", g({
                        width: 25,
                        height: 25,
                        fill: "#3B5998"
                    }, e), b)
                },
                v = n("./src/util/routes.ts");

            function y() {
                var e = o()(["\n  fragment FacebookSusiButton_query on Query {\n    ...OAuthButton_query\n  }\n  ", "\n"]);
                return y = function() {
                    return e
                }, e
            }
            n.d(t, "b", function() {
                return x
            }), n.d(t, "a", function() {
                return E
            });
            var x = m()(y(), p.b),
                E = Object(f.c)(function(e) {
                    return {
                        authDomain: e.config.authDomain
                    }
                })(function(e) {
                    var t = e.authDomain,
                        n = s()(e, ["authDomain"]);
                    return l.createElement(p.a, a()({}, n, {
                        icon: h,
                        service: "Facebook",
                        urlFragment: Object(v.pb)(t)
                    }))
                })
        },
        "./src/components/susi/oauth-buttons/GoogleSusiButton.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/extends.js"),
                a = n.n(i),
                c = n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),
                s = n.n(c),
                l = n("./node_modules/react/index.js"),
                u = n.n(l),
                d = n("./node_modules/graphql-tag/src/index.js"),
                m = n.n(d),
                f = n("./node_modules/react-redux/es/index.js"),
                p = n("./src/components/susi/oauth-buttons/OAuthButton.tsx");

            function g() {
                return (g = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var b = u.a.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, u.a.createElement("path", {
                    d: "M20.66 12.7c0-.61-.05-1.19-.15-1.74H12.5v3.28h4.58a3.91 3.91 0 0 1-1.7 2.57v2.13h2.74a8.27 8.27 0 0 0 2.54-6.24z",
                    fill: "#4285F4"
                }), u.a.createElement("path", {
                    d: "M12.5 21a8.1 8.1 0 0 0 5.63-2.06l-2.75-2.13a5.1 5.1 0 0 1-2.88.8 5.06 5.06 0 0 1-4.76-3.5H4.9v2.2A8.5 8.5 0 0 0 12.5 21z",
                    fill: "#34A853"
                }), u.a.createElement("path", {
                    d: "M7.74 14.12a5.11 5.11 0 0 1 0-3.23v-2.2H4.9A8.49 8.49 0 0 0 4 12.5c0 1.37.33 2.67.9 3.82l2.84-2.2z",
                    fill: "#FBBC05"
                }), u.a.createElement("path", {
                    d: "M12.5 7.38a4.6 4.6 0 0 1 3.25 1.27l2.44-2.44A8.17 8.17 0 0 0 12.5 4a8.5 8.5 0 0 0-7.6 4.68l2.84 2.2a5.06 5.06 0 0 1 4.76-3.5z",
                    fill: "#EA4335"
                })),
                h = function(e) {
                    return u.a.createElement("svg", g({
                        width: 25,
                        height: 25
                    }, e), b)
                },
                v = n("./src/util/routes.ts");

            function y() {
                var e = o()(["\n  fragment GoogleSusiButton_query on Query {\n    ...OAuthButton_query\n  }\n  ", "\n"]);
                return y = function() {
                    return e
                }, e
            }
            n.d(t, "b", function() {
                return x
            }), n.d(t, "a", function() {
                return E
            });
            var x = m()(y(), p.b),
                E = Object(f.c)(function(e) {
                    return {
                        authDomain: e.config.authDomain
                    }
                })(function(e) {
                    var t = e.authDomain,
                        n = s()(e, ["authDomain"]);
                    return l.createElement(p.a, a()({}, n, {
                        icon: h,
                        service: "Google",
                        urlFragment: Object(v.qb)(t)
                    }))
                })
        },
        "./src/components/susi/oauth-buttons/OAuthButton.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return g
            }), n.d(t, "b", function() {
                return b
            });
            var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./node_modules/react-redux/es/index.js"),
                c = n("./node_modules/graphql-tag/src/index.js"),
                s = n.n(c),
                l = n("./src/framework/design-system/components/index.ts"),
                u = n("./src/framework/source/index.ts"),
                d = n("./src/framework/reporter/index.ts"),
                m = n("./src/util/navigation.ts"),
                f = n("./src/components/susi/helpers/index.ts");

            function p() {
                var e = o()(["\n  fragment OAuthButton_query on Query {\n    accountToken\n  }\n"]);
                return p = function() {
                    return e
                }, e
            }
            var g = Object(a.c)(function(e) {
                    return {
                        currentLocation: e.navigation.currentLocation
                    }
                })(function(e) {
                    var t = e.actionUrl,
                        n = e.currentLocation,
                        r = e.icon,
                        o = e.redirectTo,
                        a = e.operation,
                        c = e.token,
                        s = e.service,
                        p = e.urlFragment,
                        g = e.width,
                        b = void 0 === g ? "212px" : g,
                        h = Object(d.c)(),
                        v = Object(u.g)(),
                        y = o || n,
                        x = {
                            state: ["", Object(f.a)(y, Object(u.d)(), v, t, c), a].join("|")
                        },
                        E = Object(m.a)(p, x),
                        w = r;
                    return i.createElement(l.c, {
                        buttonStyle: "SOCIAL",
                        href: E,
                        onClick: function() {
                            h.event("susi.methodClicked", {
                                entryPoint: v,
                                operation: a,
                                susiMethod: s.toLowerCase()
                            })
                        },
                        shape: "RECTANGLE",
                        size: "REGULAR",
                        width: b
                    }, i.createElement(l.b, {
                        display: "flex",
                        alignItems: "center"
                    }, i.createElement(l.b, {
                        marginRight: "8px",
                        marginTop: "-2px",
                        tag: w
                    }), "Sign ", "login" === a ? "in" : "up", " with ", s))
                }),
                b = s()(p())
        },
        "./src/components/susi/susi-modal/SusiContainer.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                a = n.n(i),
                c = n("./node_modules/react/index.js"),
                s = n.n(c),
                l = n("./node_modules/react-redux/es/index.js"),
                u = n("./node_modules/graphql-tag/src/index.js"),
                d = n.n(u),
                m = n("./src/framework/design-system/components/index.ts"),
                f = n("./src/components/style/BaseThemeProvider.tsx"),
                p = n("./src/framework/reporter/index.ts"),
                g = n("./src/styles/colors.ts"),
                b = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                h = n.n(b),
                v = n("./src/components/susi/helpers/index.ts"),
                y = n("./src/components/susi/susi-modal/SusiPanel.tsx");

            function x(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var E = {
                bottomImageId: "1*yL5Sos_AmbQS9uHTd8PJVA.png",
                ctaText: "Sign Up",
                generator: function() {
                    return {
                        title: "Create an account to bookmark this story.",
                        subheader: "Save stories to your personalized bookmarks and access them anytime, anywhere."
                    }
                },
                hideDisclaimer: !0,
                isSubHeaderResponsive: !1
            };

            function w(e) {
                var t = e.hide,
                    n = e.email,
                    r = Object(v.b)("login", "check_your_inbox", {
                        email: n
                    }, {}),
                    o = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? x(n, !0).forEach(function(t) {
                                h()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, E, {}, r);
                return c.createElement(y.a, o, c.createElement(m.b, {
                    marginTop: "12px",
                    marginBottom: "28px"
                }, c.createElement(m.c, {
                    buttonStyle: "BRAND",
                    onClick: t
                }, "OK")))
            }
            var O = n("./src/components/optimizely/OptimizelyWrapper.tsx"),
                j = n("./src/components/susi/oauth-buttons/FacebookSusiButton.tsx"),
                _ = n("./src/components/susi/oauth-buttons/GoogleSusiButton.tsx"),
                k = n("./node_modules/@babel/runtime/helpers/extends.js"),
                S = n.n(k),
                C = n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),
                P = n.n(C),
                I = n("./src/framework/style/index.ts"),
                L = n("./src/components/susi/oauth-buttons/OAuthButton.tsx"),
                T = n("./src/svg/twitter-filled-25px.svg"),
                A = n("./src/util/routes.ts");

            function N() {
                var e = o()(["\n  fragment TwitterSusiButton_query on Query {\n    ...OAuthButton_query\n  }\n  ", "\n"]);
                return N = function() {
                    return e
                }, e
            }
            var R = {
                    fill: "#55ACEE"
                },
                D = function(e) {
                    var t = e.className,
                        n = Object(I.useCx)();
                    return c.createElement(T.a, {
                        className: n(R) + (t ? " " + t : "")
                    })
                },
                U = d()(N(), L.b),
                M = Object(l.c)(function(e) {
                    return {
                        authDomain: e.config.authDomain
                    }
                })(function(e) {
                    var t = e.authDomain,
                        n = P()(e, ["authDomain"]);
                    return c.createElement(L.a, S()({}, n, {
                        icon: D,
                        service: "Twitter",
                        urlFragment: Object(A.rb)(t)
                    }))
                }),
                B = n("./src/framework/source/index.ts"),
                H = n("./src/framework/design-system/type/index.ts");

            function F() {
                return (F = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var z = s.a.createElement("path", {
                    d: "M4 6v13h17V6H4zm5.9 7.97l2.6 2.12 2.6-2.12 4.14 4.02H5.76l4.15-4.02zm-4.88 3.32V9.97l4.1 3.35-4.1 3.97zm10.87-3.97l4.1-3.35v7.32l-4.1-3.97zm4.1-6.3v1.64l-7.49 6.12-7.48-6.13V7.01h14.96z"
                }),
                q = function(e) {
                    return s.a.createElement("svg", F({
                        width: 25,
                        height: 25
                    }, e), z)
                };

            function W() {
                var e = o()(["\n  fragment SignInOptions_query on Query {\n    ...FacebookSusiButton_query\n    ...GoogleSusiButton_query\n    ...TwitterSusiButton_query\n    ...EmailSusiButton_query\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
                return W = function() {
                    return e
                }, e
            }

            function V() {
                var e = o()(["\n  fragment EmailSusiButton_query on Query {\n    accountToken\n  }\n"]);
                return V = function() {
                    return e
                }, e
            }

            function G() {
                var e = o()(["\n  fragment SignInOptions_user on User {\n    id\n    name\n  }\n"]);
                return G = function() {
                    return e
                }, e
            }

            function K() {
                var e = o()(["\n  fragment SignInOptions_topic on Topic {\n    id\n    name\n  }\n"]);
                return K = function() {
                    return e
                }, e
            }

            function X() {
                var e = o()(["\n  fragment SignInOptions_collection on Collection {\n    id\n    name\n  }\n"]);
                return X = function() {
                    return e
                }, e
            }
            var Y = function(e) {
                    var t = e.signInWithEmail,
                        n = Object(p.c)(),
                        r = Object(B.g)();
                    return c.createElement(m.c, {
                        buttonStyle: "SOCIAL",
                        href: "",
                        onClick: function() {
                            n.event("susi.methodClicked", {
                                entryPoint: r,
                                operation: "login",
                                susiMethod: "medium"
                            }), t()
                        },
                        size: "REGULAR",
                        shape: "RECTANGLE",
                        width: "212px"
                    }, c.createElement(m.b, {
                        display: "flex",
                        alignItems: "center"
                    }, c.createElement(m.b, {
                        marginRight: "8px",
                        marginTop: "-2px",
                        tag: q
                    }), "Sign in with email"))
                },
                Q = Object(l.c)(function(e) {
                    return {
                        productName: e.config.productName
                    }
                })(function(e) {
                    var t = e.actionUrl,
                        n = e.collection,
                        r = e.productName,
                        o = e.signInWithEmail,
                        i = e.toggleOperation,
                        a = e.token,
                        s = e.topic,
                        l = e.user,
                        u = {
                            actionUrl: t,
                            operation: "login",
                            token: a
                        },
                        d = n && n.name || "",
                        f = s && s.name || "",
                        p = l && l.name || "",
                        g = Object(B.g)(),
                        b = {
                            collection: d,
                            productName: r,
                            topic: f,
                            user: p
                        },
                        h = J(g, b, {});
                    return c.createElement(O.a, {
                        featureString: "susi-entry-point",
                        target: Object(v.c)(g, b)
                    }, c.createElement(O.a, {
                        featureString: "susi-sign-in",
                        target: "modal"
                    }, c.createElement(y.a, h, c.createElement(O.a, {
                        featureString: "susi-modal",
                        target: "google-button"
                    }, c.createElement(_.a, u)), c.createElement(O.a, {
                        featureString: "susi-modal",
                        target: "fb-button"
                    }, c.createElement(m.b, {
                        marginTop: "12px",
                        marginBottom: "12px"
                    }, c.createElement(j.a, u))), c.createElement(O.a, {
                        featureString: "susi-modal",
                        target: "twitter-button"
                    }, c.createElement(m.b, {
                        marginTop: "12px",
                        marginBottom: "12px"
                    }, c.createElement(M, u))), c.createElement(O.a, {
                        featureString: "susi-modal",
                        target: "email-button"
                    }, c.createElement(m.b, {
                        marginBottom: "12px"
                    }, c.createElement(Y, {
                        signInWithEmail: o
                    }))), c.createElement(O.a, {
                        featureString: "susi-modal",
                        target: "sign-in-link"
                    }, c.createElement(m.b, {
                        marginBottom: "28px"
                    }, c.createElement(H.a, {
                        color: "LIGHTER",
                        scale: {
                            xs: "M",
                            sm: "M",
                            md: "M",
                            lg: "L",
                            xl: "L"
                        }
                    }, "No account?", " ", c.createElement(m.u, {
                        onClick: i,
                        linkStyle: "OBVIOUS"
                    }, "Create one")))))))
                }),
                $ = {
                    ctaText: "Sign In",
                    leftImageId: "1*4A5l12K8ize1400kV83dPw.png",
                    rightImageId: "1*XVLaTKHOGlnXqvnPe2Ahaw.png",
                    title: "Welcome back."
                },
                J = function(e, t, n) {
                    var r = Object(v.b)("login", e, t, n);
                    return Object.assign({}, $, r)
                },
                Z = d()(X()),
                ee = d()(K()),
                te = d()(G()),
                ne = d()(V()),
                re = d()(W(), j.b, _.b, U, ne),
                oe = n("./node_modules/react-apollo/react-apollo.esm.js"),
                ie = n("./src/components/session/WithFlag.tsx"),
                ae = n("./src/util/hooks/useScript.tsx"),
                ce = "https://www.google.com/recaptcha/api.js";
            var se = Object(l.c)(function(e) {
                return {
                    recaptchaKey: e.config.recaptchaKey
                }
            })(function(e) {
                var t = e.callback,
                    n = e.enable,
                    r = e.recaptchaKey,
                    o = e.shouldExecuteRecaptcha;
                return Object(ae.a)(ce), c.useEffect(function() {
                    o && (n ? window && window.grecaptcha && (window.grecaptcha.render("g-recaptcha", {
                        sitekey: r,
                        callback: t,
                        size: "invisible"
                    }), window.grecaptcha.execute()) : t())
                }, [o]), c.createElement("div", {
                    id: "g-recaptcha"
                })
            });
            var le = function(e) {
                return c.createElement(ie.a, {
                    name: "enable_email_sign_in_captcha"
                }, function(t) {
                    return c.createElement(se, S()({
                        enable: !!t
                    }, e))
                })
            };

            function ue() {
                return (ue = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var de = s.a.createElement("path", {
                    d: "M13.3 13.9l.14-7.08h-1.78l.15 7.08h1.48zm-.74 1.43c-.68 0-1.13.44-1.13 1.12 0 .67.45 1.12 1.13 1.12.68 0 1.13-.45 1.13-1.12 0-.68-.44-1.12-1.12-1.12"
                }),
                me = s.a.createElement("path", {
                    d: "M12.5 21a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zm0 1a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19z"
                }),
                fe = function(e) {
                    return s.a.createElement("svg", ue({
                        width: 25,
                        height: 25,
                        viewBox: "0 0 25 25"
                    }, e), de, me)
                },
                pe = function(e) {
                    return {
                        color: e.errorColor
                    }
                },
                ge = {
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    width: "270px",
                    font: "inherit",
                    paddingLeft: "5px",
                    paddingRight: "5px"
                },
                be = function(e) {
                    return {
                        position: "absolute",
                        right: "0px",
                        top: "7px",
                        width: "16px",
                        height: "16px",
                        fill: e.errorColor
                    }
                },
                he = function() {
                    return {
                        "0%": {
                            transform: "translateX(-1%)"
                        },
                        "20%": {
                            transform: "translateX(1%)"
                        },
                        "40%": {
                            transform: "translateX(-1%)"
                        },
                        "60%": {
                            transform: "translateX(1%)"
                        },
                        "80%": {
                            transform: "translateX(-1%)"
                        },
                        "100%": {
                            transform: "translateX(1%)"
                        }
                    }
                },
                ve = Object(l.c)()(function(e) {
                    var t, n = e.email,
                        r = e.errorMessage,
                        o = e.handleEmailChange,
                        i = e.handleSubmit,
                        s = e.isAnimating,
                        l = Object(I.useCx)(),
                        u = c.useState(!1),
                        d = a()(u, 2),
                        f = d[0],
                        p = d[1],
                        g = c.useState(!1),
                        b = a()(g, 2),
                        h = b[0],
                        v = b[1];
                    return t = r ? "ERROR" : f ? "BASE_DARKER" : h ? "BASE_DARK" : "BASE_NORMAL", c.createElement("div", {
                        className: r && l(pe)
                    }, c.createElement(m.b, {
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        paddingBottom: "1px",
                        width: "270px",
                        textAlign: "center"
                    }, c.createElement(m.b, {
                        marginBottom: "12px"
                    }, c.createElement(H.a, {
                        color: "DARKER",
                        scale: "S"
                    }, c.createElement("div", {
                        className: r && l(pe)
                    }, "Your email"))), c.createElement(m.M, {
                        keyframes: {
                            errorKeyName: he
                        }
                    }, function(e) {
                        var a, u = e.errorKeyName;
                        return c.createElement("div", {
                            className: l([{
                                position: "relative"
                            }, s ? (a = u, {
                                animation: "".concat(a, " ").concat(400, "ms")
                            }) : {}])
                        }, c.createElement(m.b, {
                            borderBottom: t
                        }, c.createElement(H.a, {
                            scale: "L"
                        }, c.createElement("input", {
                            autoFocus: !0,
                            className: l([ge]),
                            type: "text",
                            onBlur: function() {
                                return p(!1)
                            },
                            onFocus: function() {
                                return p(!0)
                            },
                            onMouseOver: function() {
                                return v(!0)
                            },
                            onMouseLeave: function() {
                                return v(!1)
                            },
                            onChange: o,
                            onKeyDown: function(e) {
                                13 === e.keyCode && i()
                            },
                            value: n
                        }), r && c.createElement(fe, {
                            className: l(be)
                        }))))
                    })), r && c.createElement(m.b, {
                        marginTop: "8px"
                    }, c.createElement(H.a, {
                        scale: "S"
                    }, c.createElement("div", {
                        className: l(pe)
                    }, r))))
                }),
                ye = n("./src/svg/arrow-left-19px.svg"),
                xe = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

            function Ee() {
                var e = o()(["\n  mutation SendAcctAuthEmail(\n    $email: String!\n    $redirect: String\n    $fullName: String\n    $captchaValue: String\n  ) {\n    sendAcctAuthEmail(\n      email: $email\n      redirect: $redirect\n      fullName: $fullName\n      captchaValue: $captchaValue\n    )\n  }\n"]);
                return Ee = function() {
                    return e
                }, e
            }
            var we = d()(Ee()),
                Oe = {
                    height: "25px",
                    width: "25px",
                    marginBottom: "2px"
                },
                je = /@gm/,
                _e = Object(l.c)(function(e) {
                    return {
                        currentLocation: e.navigation.currentLocation
                    }
                })(function(e) {
                    var t = e.actionUrl,
                        n = e.currentLocation,
                        r = e.handleBack,
                        o = e.handleNext,
                        i = e.token,
                        s = Object(I.useCx)(),
                        l = c.useState(""),
                        u = a()(l, 2),
                        d = u[0],
                        f = u[1],
                        g = c.useState(""),
                        b = a()(g, 2),
                        h = b[0],
                        x = b[1],
                        E = c.useState(!1),
                        w = a()(E, 2),
                        O = w[0],
                        j = w[1],
                        k = c.useState(!1),
                        S = a()(k, 2),
                        C = S[0],
                        P = S[1],
                        L = c.useState(!1),
                        T = a()(L, 2),
                        A = T[0],
                        N = T[1],
                        R = Object(p.c)(),
                        D = function(e) {
                            f(e.target.value), j(je.test(e.target.value))
                        },
                        U = function(e) {
                            x(e), P(!0), setTimeout(function() {
                                return P(!1)
                            }, 400), N(!1)
                        },
                        M = function() {
                            d.trim() && function(e) {
                                return !!e.match(xe)
                            }(d) ? N(!0) : U("Please enter a valid email address.")
                        },
                        F = Object(B.d)(),
                        z = Object(B.g)(),
                        q = t && i ? Object(v.a)(n, F, z, t, i) : Object(v.a)(n, F, z);
                    return c.createElement(oe.b, {
                        mutation: we,
                        onCompleted: function(e) {
                            var t = e.sendAcctAuthEmail;
                            "login" === t || "register" === t ? o(t, d) : U(t)
                        },
                        onError: function(e) {
                            R.event("site.loginlinkSent", {
                                error: e
                            }), U("Please try again.")
                        }
                    }, function(e) {
                        return c.createElement(y.a, {
                            hideDisclaimer: !0,
                            title: "Sign in with email",
                            subheader: "Enter the email address associated with your account, and we’ll send a magic link to your inbox."
                        }, c.createElement(le, {
                            callback: function(t) {
                                R.event("site.loginlinkSent"), e({
                                    variables: {
                                        email: d,
                                        redirect: q,
                                        captchaValue: t
                                    }
                                })
                            },
                            shouldExecuteRecaptcha: A
                        }), c.createElement(m.b, {
                            marginTop: "12px",
                            marginBottom: "28px"
                        }, c.createElement(ve, {
                            email: d,
                            errorMessage: h,
                            isAnimating: C,
                            handleEmailChange: D,
                            handleSubmit: M
                        })), c.createElement(m.b, {
                            marginTop: "12px",
                            marginBottom: "15px"
                        }, c.createElement(m.c, {
                            buttonStyle: "BRAND",
                            onClick: M
                        }, "Continue")), O && c.createElement(_.a, {
                            operation: "login"
                        }), c.createElement(m.b, {
                            marginTop: "12px",
                            marginBottom: "28px",
                            paddingRight: "21px"
                        }, c.createElement(H.a, {
                            scale: "M"
                        }, c.createElement(m.u, {
                            linkStyle: "OBVIOUS",
                            onClick: r
                        }, c.createElement(ye.a, {
                            className: s(Oe)
                        }), "All sign in options"))))
                    })
                });

            function ke() {
                var e = o()(["\n  fragment SignInContainer_query on Query {\n    ...SignInOptions_query\n  }\n  ", "\n"]);
                return ke = function() {
                    return e
                }, e
            }

            function Se() {
                var e = o()(["\n  fragment SignInContainer_user on User {\n    ...SignInOptions_user\n  }\n  ", "\n"]);
                return Se = function() {
                    return e
                }, e
            }

            function Ce() {
                var e = o()(["\n  fragment SignInContainer_topic on Topic {\n    ...SignInOptions_topic\n  }\n  ", "\n"]);
                return Ce = function() {
                    return e
                }, e
            }

            function Pe() {
                var e = o()(["\n  fragment SignInContainer_collection on Collection {\n    ...SignInOptions_collection\n  }\n  ", "\n"]);
                return Pe = function() {
                    return e
                }, e
            }
            var Ie = function(e) {
                    var t = e.actionUrl,
                        n = e.collection,
                        r = e.hide,
                        o = e.initStep,
                        i = e.toggleOperation,
                        s = e.token,
                        l = e.topic,
                        u = e.user,
                        d = c.useState(o || "SIGNIN_OPTIONS"),
                        m = a()(d, 2),
                        f = m[0],
                        p = m[1],
                        g = c.useState(""),
                        b = a()(g, 2),
                        h = b[0],
                        v = b[1];
                    switch (f) {
                        case "ENTER_EMAIL":
                            return c.createElement(_e, {
                                actionUrl: t,
                                handleBack: function() {
                                    p("SIGNIN_OPTIONS")
                                },
                                handleNext: function(e, t) {
                                    p("CHECK_YOUR_INBOX"), v(t)
                                },
                                token: s
                            });
                        case "CHECK_YOUR_INBOX":
                            return c.createElement(w, {
                                hide: r,
                                email: h
                            });
                        case "SIGNIN_OPTIONS":
                        default:
                            return c.createElement(Q, {
                                actionUrl: t,
                                collection: n,
                                toggleOperation: i,
                                signInWithEmail: function() {
                                    return p("ENTER_EMAIL")
                                },
                                token: s,
                                topic: l,
                                user: u
                            })
                    }
                },
                Le = d()(Pe(), Z),
                Te = d()(Ce(), ee),
                Ae = d()(Se(), te),
                Ne = d()(ke(), re);

            function Re() {
                var e = o()(["\n  fragment SignUpOptions_query on Query {\n    ...FacebookSusiButton_query\n    ...GoogleSusiButton_query\n  }\n  ", "\n  ", "\n"]);
                return Re = function() {
                    return e
                }, e
            }

            function De() {
                var e = o()(["\n  fragment SignUpOptions_user on User {\n    id\n    name\n  }\n"]);
                return De = function() {
                    return e
                }, e
            }

            function Ue() {
                var e = o()(["\n  fragment SignUpOptions_collection on Collection {\n    id\n    name\n  }\n"]);
                return Ue = function() {
                    return e
                }, e
            }

            function Me() {
                var e = o()(["\n  fragment SignUpOptions_topic on Topic {\n    id\n    name\n  }\n"]);
                return Me = function() {
                    return e
                }, e
            }

            function Be(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var He = {
                    leftImageId: "1*MQH4A5bsyRz4AWh5V4IfvQ.png",
                    rightImageId: "1*lhbp8cxKdkDB-MgmwIPE5w.png",
                    ctaText: "Sign Up"
                },
                Fe = function(e, t, n) {
                    var r = Object(v.b)("register", e, t, n);
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Be(n, !0).forEach(function(t) {
                                h()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Be(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, He, {}, r)
                },
                ze = Object(l.c)(function(e) {
                    return {
                        productName: e.config.productName
                    }
                })(function(e) {
                    var t = e.actionUrl,
                        n = e.collection,
                        r = e.productName,
                        o = e.toggleOperation,
                        i = e.token,
                        a = e.topic,
                        s = e.user,
                        l = {
                            actionUrl: t,
                            operation: "register",
                            token: i
                        },
                        u = n && n.name || "",
                        d = a && a.name || "",
                        f = s && s.name || "",
                        p = Object(B.g)(),
                        g = {
                            collection: u,
                            productName: r,
                            topic: d,
                            user: f
                        },
                        b = Fe(p, g, {});
                    return c.createElement(O.a, {
                        featureString: "susi-entry-point",
                        target: Object(v.c)(p, g)
                    }, c.createElement(O.a, {
                        featureString: "susi-sign-up",
                        target: "modal"
                    }, c.createElement(y.a, b, c.createElement(O.a, {
                        featureString: "susi-modal",
                        target: "google-button"
                    }, c.createElement(_.a, l)), c.createElement(O.a, {
                        featureString: "susi-modal",
                        target: "fb-button"
                    }, c.createElement(m.b, {
                        marginTop: "12px",
                        marginBottom: "28px"
                    }, c.createElement(j.a, l))), c.createElement(O.a, {
                        featureString: "susi-modal",
                        target: "sign-up-link"
                    }, c.createElement(m.b, {
                        marginBottom: "56px"
                    }, c.createElement(H.a, {
                        color: "LIGHTER",
                        scale: {
                            xs: "M",
                            sm: "M",
                            md: "M",
                            lg: "L",
                            xl: "L"
                        }
                    }, "Already have an account?", " ", c.createElement(m.u, {
                        onClick: o,
                        linkStyle: "OBVIOUS"
                    }, "Sign in")))))))
                }),
                qe = d()(Me()),
                We = d()(Ue()),
                Ve = d()(De()),
                Ge = d()(Re(), j.b, _.b),
                Ke = n("./src/store/actions/branch.ts"),
                Xe = n("./src/store/actions/googleOneTap.ts");

            function Ye() {
                var e = o()(["\n  fragment SusiContainer_query on Query {\n    ...SignInContainer_query\n    ...SignUpOptions_query\n  }\n  ", "\n  ", "\n"]);
                return Ye = function() {
                    return e
                }, e
            }

            function Qe() {
                var e = o()(["\n  fragment SusiContainer_user on User {\n    ...SignInContainer_user\n    ...SignUpOptions_user\n  }\n  ", "\n  ", "\n"]);
                return Qe = function() {
                    return e
                }, e
            }

            function $e() {
                var e = o()(["\n  fragment SusiContainer_topic on Topic {\n    ...SignInContainer_topic\n    ...SignUpOptions_topic\n  }\n  ", "\n  ", "\n"]);
                return $e = function() {
                    return e
                }, e
            }

            function Je() {
                var e = o()(["\n  fragment SusiContainer_post on Post {\n    id\n  }\n"]);
                return Je = function() {
                    return e
                }, e
            }

            function Ze() {
                var e = o()(["\n  fragment SusiContainer_collection on Collection {\n    ...SignInContainer_collection\n    ...SignUpOptions_collection\n  }\n  ", "\n  ", "\n"]);
                return Ze = function() {
                    return e
                }, e
            }
            n.d(t, "a", function() {
                return tt
            }), n.d(t, "b", function() {
                return nt
            }), n.d(t, "c", function() {
                return rt
            }), n.d(t, "e", function() {
                return ot
            }), n.d(t, "f", function() {
                return it
            }), n.d(t, "d", function() {
                return at
            });
            var et = {
                    hideBranchBanner: Ke.e,
                    hideGoogleOneTap: Xe.b,
                    resetShowBranchBanner: Ke.f
                },
                tt = Object(l.c)(null, et)(function(e) {
                    var t = e.actionUrl,
                        n = e.collection,
                        r = e.hide,
                        o = e.initOperation,
                        i = e.initStep,
                        s = e.isVisible,
                        l = e.post,
                        u = e.token,
                        d = e.topic,
                        b = e.user,
                        h = e.hideBranchBanner,
                        v = e.hideGoogleOneTap,
                        y = e.resetShowBranchBanner,
                        x = Object(p.c)(),
                        E = Object(B.g)();
                    c.useEffect(function() {
                        s && (v(), h(), x.event("susi.viewed", {
                            postId: l && l.id,
                            entryPoint: E,
                            operation: o
                        }), "post_free" === E && x.event("signInWall.dialogViewed", {}))
                    }, [s]);
                    var w = c.useState(o),
                        O = a()(w, 2),
                        j = O[0],
                        _ = O[1],
                        k = function() {
                            _(o), r(), y()
                        },
                        S = "login" === j ? Ie : ze,
                        C = {
                            actionUrl: t,
                            collection: n,
                            toggleOperation: function() {
                                return _("login" === j ? "register" : "login")
                            },
                            hide: r,
                            token: u,
                            topic: d,
                            user: b,
                            initStep: i
                        };
                    return c.createElement(f.a, null, c.createElement(m.j, {
                        isVisible: s,
                        hide: k,
                        withAnimation: !0,
                        withCloseButton: !1
                    }, c.createElement(m.b, {
                        background: g.y,
                        borderRadius: "4px",
                        boxShadow: "0 2px 10px ".concat(Object(g.t)(.15)),
                        md: {
                            width: "600px",
                            height: "auto"
                        },
                        sm: {
                            width: "95vw !important"
                        },
                        position: "relative",
                        width: "900px"
                    }, c.createElement(m.g, {
                        onClick: k,
                        size: "LARGE"
                    }), c.createElement(S, C))))
                }),
                nt = d()(Ze(), Le, We),
                rt = d()(Je()),
                ot = d()($e(), Te, qe),
                it = d()(Qe(), Ae, Ve),
                at = d()(Ye(), Ne, Ge)
        },
        "./src/components/susi/susi-modal/SusiModal.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return g
            }), n.d(t, "b", function() {
                return b
            });
            var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./node_modules/graphql-tag/src/index.js"),
                c = n.n(a),
                s = n("./src/components/susi/susi-modal/SusiContainer.tsx"),
                l = n("./src/framework/design-system/components/index.ts"),
                u = n("./src/framework/source/index.ts");

            function d() {
                var e = o()(["\n  fragment SusiModal_user on User {\n    ...SusiContainer_user\n  }\n  ", "\n"]);
                return d = function() {
                    return e
                }, e
            }

            function m() {
                var e = o()(["\n  fragment SusiModal_topic on Topic {\n    ...SusiContainer_topic\n  }\n  ", "\n"]);
                return m = function() {
                    return e
                }, e
            }

            function f() {
                var e = o()(["\n  fragment SusiModal_post on Post {\n    ...SusiContainer_post\n  }\n  ", "\n"]);
                return f = function() {
                    return e
                }, e
            }

            function p() {
                var e = o()(["\n  fragment SusiModal_collection on Collection {\n    ...SusiContainer_collection\n  }\n  ", "\n"]);
                return p = function() {
                    return e
                }, e
            }
            var g = function(e) {
                    var t = e.collection,
                        n = e.initialVisibility,
                        r = e.operation,
                        o = e.post,
                        a = e.susiEntry,
                        c = e.topic,
                        d = e.user;
                    return i.createElement(u.b, {
                        source: {
                            susiEntry: a
                        },
                        extendSource: !0
                    }, i.createElement(l.K, {
                        initialVisibility: n
                    }, function(e) {
                        var n = e.isVisible,
                            a = (e.toggle, e.hide);
                        return i.createElement(s.a, {
                            collection: t,
                            hide: a,
                            initOperation: r,
                            isVisible: n,
                            post: o,
                            topic: c,
                            user: d
                        })
                    }))
                },
                b = (c()(p(), s.b), c()(f(), s.c));
            c()(m(), s.e), c()(d(), s.f)
        },
        "./src/components/susi/susi-modal/SusiPanel.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return m
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./node_modules/react-redux/es/index.js"),
                i = n("./src/components/optimizely/OptimizelyWrapper.tsx"),
                a = n("./src/components/ui/image/index.ts"),
                c = n("./src/framework/design-system/components/index.ts"),
                s = n("./src/framework/design-system/type/index.ts"),
                l = n("./src/util/routes.ts"),
                u = n("./src/util/miroImage.ts"),
                d = function(e, t) {
                    return e && r.createElement(i.a, {
                        featureString: "susi-modal",
                        target: "".concat(t, "-image")
                    }, r.createElement(c.b, {
                        md: {
                            display: "none"
                        },
                        paddingBottom: "16px"
                    }, r.createElement(a.b, {
                        alt: "",
                        height: 550,
                        miroId: e,
                        strategy: u.a.Resample,
                        width: 214
                    })))
                },
                m = function(e, t) {
                    return r.createElement(r.Fragment, null, r.createElement(s.a, {
                        scale: "M"
                    }, "To make ", t, " work, we log user data and share it with service providers. Click “", e, "” above to accept ", t, "’s", " ", r.createElement(c.u, {
                        href: Object(l.yb)(),
                        linkStyle: "OBVIOUS",
                        inline: !0,
                        target: "blank"
                    }, "Terms of Service"), " & ", r.createElement(c.u, {
                        href: Object(l.eb)(),
                        linkStyle: "OBVIOUS",
                        inline: !0,
                        target: "blank"
                    }, "Privacy Policy"), "."))
                };
            t.a = Object(o.c)(function(e) {
                return {
                    productName: e.config.productName
                }
            })(function(e) {
                var t = e.children,
                    n = e.ctaText,
                    o = e.hideDisclaimer,
                    a = void 0 !== o && o,
                    l = e.leftImageId,
                    f = e.poweredBy,
                    p = e.productName,
                    g = e.rightImageId,
                    b = e.subheader,
                    h = e.title,
                    v = e.bottomImageId,
                    y = e.isSubHeaderResponsive,
                    x = void 0 === y || y;
                return r.createElement(i.a, {
                    featureString: "susi-modal",
                    target: "background"
                }, r.createElement(c.b, {
                    borderRadius: "4px",
                    display: "flex",
                    flexDirection: v ? "column" : "row",
                    background: "white",
                    height: "100%",
                    minHeight: "550px",
                    justifyContent: "space-between",
                    md: {
                        display: "flex",
                        justifyContent: "center"
                    },
                    width: "100%"
                }, d(l, "left"), r.createElement(c.b, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: "1",
                    justifyContent: "center",
                    padding: "44px 56px",
                    textAlign: "center",
                    width: v ? "100%" : "360px",
                    md: {
                        display: "flex",
                        width: "100%"
                    }
                }, r.createElement(i.a, {
                    featureString: "susi-modal",
                    target: "header"
                }, r.createElement(s.c, {
                    scale: {
                        xs: "M",
                        sm: "M",
                        md: "L",
                        lg: "L",
                        xl: "L"
                    }
                }, h)), !!f && r.createElement(c.b, {
                    sm: {
                        display: "none"
                    }
                }, r.createElement(i.a, {
                    featureString: "susi-modal",
                    target: "powered-by-line"
                }, r.createElement(s.a, {
                    scale: "M",
                    color: "LIGHTER"
                }, f))), r.createElement(i.a, {
                    featureString: "susi-modal",
                    target: "subheader"
                }, r.createElement(c.b, {
                    maxWidth: "360px",
                    marginTop: f ? "20px" : "8px",
                    sm: x ? {
                        display: "none"
                    } : {}
                }, r.createElement(s.a, {
                    scale: "L",
                    color: "LIGHTER"
                }, b))), r.createElement(c.b, {
                    marginTop: "28px"
                }, t), !a && m(n, p)), d(g, "right"), function(e) {
                    if (!e) return null;
                    var t = Object(u.d)({
                            width: 1800,
                            height: 212,
                            miroId: e,
                            strategy: u.a.Resample
                        }),
                        n = "url(".concat(t, ")");
                    return e && r.createElement(i.a, {
                        featureString: "susi-modal",
                        target: "bottom-image"
                    }, r.createElement(c.b, {
                        height: "212px",
                        maxWidth: "900px",
                        backgroundImage: n,
                        backgroundPositionX: "center",
                        backgroundPositionY: "center",
                        backgroundSize: "cover"
                    }))
                }(v)))
            })
        },
        "./src/components/ui/AspectRatioPlaceholder.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./src/framework/design-system/components/index.ts");

            function i(e) {
                var t = e.height,
                    n = e.width,
                    i = e.backgroundColor,
                    a = void 0 === i ? "BASE_NORMAL" : i,
                    c = e.children,
                    s = n / t;
                return r.createElement(o.b, {
                    position: "relative",
                    margin: "auto",
                    backgroundColor: a
                }, r.createElement(o.b, {
                    paddingBottom: "".concat(100 / s, "%")
                }, c))
            }
        },
        "./src/components/ui/Byline.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r = n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./src/framework/style/index.ts"),
                c = n("./src/framework/design-system/components/index.ts"),
                s = function() {
                    return {
                        alignItems: "center",
                        display: "flex"
                    }
                },
                l = function(e) {
                    var t = e.avatar,
                        n = e.button,
                        r = e.description,
                        l = e.title,
                        u = (o()(e, ["avatar", "button", "description", "title"]), Object(a.useCx)());
                    return i.createElement("div", {
                        className: u(s)
                    }, i.createElement("div", null, t), i.createElement(c.b, {
                        marginLeft: "12px",
                        width: "100%"
                    }, i.createElement(c.b, {
                        display: "flex"
                    }, i.createElement("div", {
                        style: {
                            flex: 1
                        }
                    }, i.createElement(c.d, {
                        strong: !0
                    }, l)), n && i.createElement("span", null, n)), i.createElement(c.d, null, r)))
                }
        },
        "./src/components/ui/MiddotContainer.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),
                o = n.n(r),
                i = n("./node_modules/lodash/isArray.js"),
                a = n.n(i),
                c = n("./node_modules/react/index.js"),
                s = n("./src/framework/design-system/components/index.ts");

            function l() {
                return c.createElement(s.b, {
                    tag: "span"
                }, c.createElement(s.d, null, "·"))
            }

            function u(e) {
                var t = e.children,
                    n = e.middotPadding,
                    r = o()(e, ["children", "middotPadding"]),
                    i = (a()(t) ? t : [t]).filter(function(e) {
                        return !!e
                    }).reduce(function(e, t, r) {
                        return 0 !== r && e.push(c.createElement(s.b, {
                            paddingLeft: n,
                            paddingRight: n,
                            key: "middot-".concat(r)
                        }, c.createElement(l, null))), e.push(t), e
                    }, []);
                return c.createElement(s.b, r, i)
            }
            n.d(t, "a", function() {
                return u
            })
        },
        "./src/components/ui/PopoverMenu.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "a", function() {
                return s
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./src/framework/style/index.ts"),
                i = n("./src/framework/design-system/components/index.ts");

            function a(e) {
                var t = e.paddingTopBottom,
                    n = void 0 === t ? "8px" : t,
                    o = e.paddingLeftRight,
                    a = void 0 === o ? "20px" : o;
                return r.createElement(i.b, {
                    padding: "".concat(n, " ").concat(a),
                    tag: "li"
                }, r.createElement(i.d, null, e.children))
            }

            function c(e) {
                var t = Object(o.useCx)(),
                    n = e.width,
                    a = void 0 === n ? "220px" : n,
                    c = e.paddingTopBottom,
                    s = void 0 === c ? "8px" : c;
                return r.createElement(i.b, {
                    paddingTop: s,
                    paddingBottom: s,
                    tag: "li"
                }, r.createElement("div", {
                    className: t([function(e) {
                        return {
                            borderTop: "1px solid ".concat(e.baseColor.border.lighter)
                        }
                    }, function() {
                        return {
                            width: a
                        }
                    }])
                }))
            }

            function s(e) {
                var t = e.padding,
                    n = e.children;
                return r.createElement(i.A, {
                    ui: "SMALL"
                }, r.createElement(i.b, {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingTop: t || "8px",
                    paddingBottom: t || "8px",
                    tag: "ul"
                }, n))
            }
        },
        "./src/components/ui/image/Image.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/extends.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./node_modules/react-redux/es/index.js"),
                c = n("./src/framework/style/index.ts");
            t.a = Object(a.c)(function(e) {
                return {
                    isAmp: e.config.isAmp
                }
            })(function(e) {
                var t = e.alt,
                    n = e.src,
                    r = e.height,
                    a = e.width,
                    s = e.isAmp,
                    l = e.rules,
                    u = e.imgRef,
                    d = Object(c.useCx)(),
                    m = r ? Math.round(r) : null,
                    f = Math.round(a),
                    p = null === a,
                    g = {
                        src: n,
                        width: p ? null : f,
                        height: p ? null : m
                    };
                return t || (g.role = "presentation"), s ? i.createElement("amp-img", o()({
                    alt: t || "",
                    class: d(l),
                    layout: "responsive"
                }, g)) : i.createElement("img", o()({
                    alt: t || "",
                    className: d(l),
                    ref: u
                }, g))
            })
        },
        "./src/components/ui/image/MiroImage.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./src/components/ui/image/Image.tsx"),
                c = n("./src/util/miroImage.ts");

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(n, !0).forEach(function(t) {
                        o()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function u(e) {
                var t, n = e.alt,
                    r = e.rules,
                    o = e.miroId,
                    s = e.width,
                    u = e.height,
                    d = e.strategy,
                    m = {
                        miroId: o,
                        width: s,
                        darken: e.darken,
                        freezeGifs: e.freezeGifs,
                        focusPercentX: e.focusPercentX,
                        focusPercentY: e.focusPercentY
                    };
                return t = u ? Object(c.d)(l({}, m, {
                    height: u,
                    strategy: d
                })) : Object(c.d)(l({}, m, {
                    strategy: c.a.Resample
                })), i.createElement(a.a, {
                    src: t,
                    alt: n,
                    rules: r,
                    height: u,
                    width: s
                })
            }
        },
        "./src/components/ui/image/index.ts": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/react/index.js"),
                o = n("./src/components/ui/image/MiroImage.tsx"),
                i = n("./src/framework/design-system/util/style/converters.ts"),
                a = n("./src/util/miroImage.ts"),
                c = function(e) {
                    return {
                        display: "block",
                        borderRadius: "50%",
                        height: Object(i.b)(e),
                        width: Object(i.b)(e)
                    }
                };

            function s(e) {
                var t = e.alt,
                    n = e.diameter,
                    i = e.miroId,
                    s = e.freezeGifs,
                    l = e.rules,
                    u = [
                        [c(n)], l
                    ];
                return r.createElement(o.a, {
                    rules: u,
                    alt: t,
                    miroId: i,
                    width: n,
                    height: n,
                    strategy: a.a.Crop,
                    freezeGifs: s
                })
            }
            var l = n("./src/components/ui/image/Image.tsx"),
                u = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                d = n.n(u),
                m = n("./node_modules/react-redux/es/index.js"),
                f = n("./src/framework/track/index.ts"),
                p = n("./src/components/ui/AspectRatioPlaceholder.tsx"),
                g = n("./src/framework/style/index.ts"),
                b = n("./src/styles/colors.ts"),
                h = n("./src/styles/position.ts"),
                v = function(e) {
                    return e ? {
                        opacity: 1,
                        transition: "opacity ".concat(400, "ms 0ms")
                    } : {
                        opacity: 0,
                        transition: "opacity 100ms ".concat(400, "ms")
                    }
                },
                y = {
                    overflow: "hidden",
                    willChange: "transform",
                    transform: "translateZ(0)"
                },
                x = Object(m.c)(function(e) {
                    return {
                        isAmp: e.config.isAmp
                    }
                })(function(e) {
                    var t = e.isAmp,
                        n = e.alt,
                        o = e.rules,
                        i = e.miroId,
                        c = e.width,
                        s = e.maxWidth,
                        u = e.height,
                        m = e.strategy,
                        x = e.darken,
                        E = e.freezeGifs,
                        w = e.focusPercentX,
                        O = e.focusPercentY,
                        j = Object(g.useCx)(),
                        _ = u ? Object(a.e)({
                            miroId: i,
                            height: u,
                            width: c
                        }) : null,
                        k = Object(a.d)({
                            miroId: i,
                            width: c,
                            height: u,
                            strategy: m,
                            darken: x,
                            freezeGifs: E,
                            focusPercentX: w,
                            focusPercentY: O
                        }),
                        S = r.createElement(l.a, {
                            src: k,
                            alt: n,
                            rules: o,
                            height: u,
                            width: c
                        }),
                        C = function(e) {
                            var t = !1,
                                n = r.useState(!1),
                                o = d()(n, 2),
                                i = o[0],
                                a = o[1],
                                c = r.useRef(null),
                                s = r.useCallback(function(n) {
                                    if (e && n.isIntersecting && !t) {
                                        t = !0;
                                        var r = new Image;
                                        r.src = e;
                                        var o = function() {
                                            a(!0), t = !1
                                        };
                                        r.decode ? r.decode().then(function() {
                                            return o()
                                        }).catch(function() {}) : r.onload = function() {
                                            return o()
                                        }, r.onerror = function() {}
                                    }
                                }, [e]);
                            return Object(f.g)({
                                onIntersect: s,
                                disconnect: function() {
                                    return !e || i
                                },
                                target: c,
                                threshold: .1,
                                rootMargin: "500px 0px 1000px 0px"
                            }, [i, s]), [i, c]
                        }(t ? null : k),
                        P = d()(C, 2),
                        I = P[0],
                        L = P[1],
                        T = r.useState(!1),
                        A = d()(T, 2),
                        N = A[0],
                        R = A[1],
                        D = r.useRef(null);
                    r.useEffect(function() {
                        var e = D.current;
                        if (e) {
                            var t = function() {
                                return R(!0)
                            };
                            return e.complete ? t() : e.addEventListener("load", t),
                                function() {
                                    e.removeEventListener("load", t)
                                }
                        }
                    }, []);
                    var U = N && !I,
                        M = [v(I)];
                    if (o && (M = M.concat(o).concat({
                            background: b.y
                        })), u) return t ? r.createElement(p.a, {
                        height: u,
                        width: c
                    }, S) : r.createElement(p.a, {
                        height: u,
                        width: c
                    }, r.createElement("div", {
                        className: j([v(U), h.a, y])
                    }, r.createElement(l.a, {
                        src: _,
                        alt: n,
                        rules: [h.a, (B = !I, {
                            filter: "blur(20px)",
                            transform: "scale(1.1)",
                            visibility: B ? "visible" : "hidden",
                            transition: B ? null : "visibility 0ms ".concat(400, "ms")
                        })],
                        height: u,
                        width: c,
                        imgRef: D
                    })), r.createElement(l.a, {
                        src: I ? k : null,
                        alt: n,
                        rules: M,
                        height: u,
                        width: c,
                        imgRef: L
                    }), r.createElement("noscript", null, S));
                    var B, H = {};
                    return s && (H.maxWidth = s), r.createElement(l.a, {
                        src: k,
                        alt: n,
                        rules: H,
                        height: u,
                        width: c
                    })
                });
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return o.a
            }), n.d(t, "c", function() {
                return x
            })
        },
        "./src/components/upsell/UpsellClickable.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return p
            }), n.d(t, "a", function() {
                return g
            });
            var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./node_modules/graphql-tag/src/index.js"),
                c = n.n(a),
                s = n("./node_modules/react-redux/es/index.js"),
                l = n("./src/framework/design-system/components/index.ts"),
                u = n("./src/util/routes.ts"),
                d = n("./src/framework/reporter/index.ts"),
                m = n("./src/framework/source/index.ts");

            function f() {
                var e = o()(["\n  fragment UpsellClickable_post on Post {\n    id\n    collection {\n      id\n    }\n    sequence {\n      sequenceId\n    }\n    creator {\n      id\n    }\n  }\n"]);
                return f = function() {
                    return e
                }, e
            }
            var p = c()(f()),
                g = Object(s.c)(function(e) {
                    return {
                        authDomain: e.config.authDomain
                    }
                })(function(e) {
                    var t = e.authDomain,
                        n = e.buttonSize,
                        r = e.buttonStyle,
                        o = e.children,
                        a = (e.customTheme, e.inline),
                        c = void 0 !== a && a,
                        s = e.isButton,
                        f = void 0 !== s && s,
                        p = e.linkStyle,
                        g = void 0 === p ? "SUBTLE" : p,
                        b = e.post,
                        h = e.redirectUrl,
                        v = e.width,
                        y = h || Object(u.V)(t),
                        x = Object(d.c)(),
                        E = Object(m.e)(),
                        w = function() {
                            x.event("upsell.clicked", {
                                dimension: E && E.dimension,
                                locationId: E && E.dimension,
                                postId: b && b.id,
                                authorId: b && b.creator ? b.creator.id : "",
                                sequenceId: b && b.sequence ? b.sequence.sequenceId : ""
                            })
                        };
                    return f ? i.createElement(l.c, {
                        buttonStyle: r,
                        href: y,
                        onClick: w,
                        size: n,
                        width: v
                    }, o) : i.createElement(l.u, {
                        onClick: w,
                        href: y,
                        linkStyle: g,
                        inline: c
                    }, o)
                })
        },
        "./src/components/user/UserAvatar.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n.n(i),
                c = n("./node_modules/graphql-tag/src/index.js"),
                s = n.n(c),
                l = n("./src/components/ui/image/index.ts"),
                u = n("./src/framework/design-system/components/index.ts"),
                d = n("./src/framework/design-system/type/Detail.tsx"),
                m = n("./src/framework/design-system/components/Popover.tsx"),
                f = n("./src/framework/design-system/util/style/converters.ts"),
                p = n("./src/framework/style/index.ts"),
                g = n("./src/util/routes.ts"),
                b = n("./src/framework/design-system/components/util/VisibilityController.tsx");

            function h() {
                return (h = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var v = a.a.createElement("path", {
                    d: "M1.36 13.17C4.63 6.17 11.31 1.4 19 1.4V.6C10.96.6 4.02 5.59.64 12.83l.72.34zM19 1.4c7.69 0 14.37 4.77 17.64 11.77l.72-.34C33.98 5.6 27.04.6 19 .6v.8zm17.64 25.43c-3.27 7-9.95 11.77-17.64 11.77v.8c8.04 0 14.98-4.99 18.36-12.23l-.72-.34zM19 38.6c-7.69 0-14.37-4.77-17.64-11.77l-.72.34C4.02 34.4 10.96 39.4 19 39.4v-.8z"
                }),
                y = function(e) {
                    return a.a.createElement("svg", h({
                        width: 38,
                        height: 40,
                        viewBox: "0 0 38 40"
                    }, e), v)
                };

            function x() {
                return (x = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var E = a.a.createElement("path", {
                    d: "M1.45 15.22C5.43 7.07 13.59 1.5 23 1.5v-1C13.18.5 4.69 6.32.55 14.78l.9.44zM23 1.5c9.4 0 17.57 5.57 21.55 13.72l.9-.44C41.3 6.32 32.82.5 23 .5v1zm21.55 33.28C40.57 42.93 32.41 48.5 23 48.5v1c9.82 0 18.31-5.82 22.45-14.28l-.9-.44zM23 48.5c-9.4 0-17.57-5.57-21.55-13.72l-.9.44C4.7 43.68 13.18 49.5 23 49.5v-1z"
                }),
                w = function(e) {
                    return a.a.createElement("svg", x({
                        width: 46,
                        height: 50,
                        viewBox: "0 0 46 50"
                    }, e), E)
                };

            function O() {
                return (O = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var j = a.a.createElement("path", {
                    d: "M1.49 16.25A27.53 27.53 0 0 1 26 1.55V.45A28.63 28.63 0 0 0 .51 15.75l.98.5zM26 1.55a27.53 27.53 0 0 1 24.51 14.7l.98-.5A28.63 28.63 0 0 0 26 .45v1.1zm24.51 40.2A27.53 27.53 0 0 1 26 56.45v1.1a28.63 28.63 0 0 0 25.49-15.3l-.98-.5zM26 56.45a27.53 27.53 0 0 1-24.51-14.7l-.98.5A28.63 28.63 0 0 0 26 57.55v-1.1z"
                }),
                _ = function(e) {
                    return a.a.createElement("svg", O({
                        width: 52,
                        height: 58,
                        viewBox: "0 0 52 58"
                    }, e), j)
                };

            function k() {
                return (k = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var S = a.a.createElement("path", {
                    d: "M1.53 20.28C7.33 9.2 19.24 1.6 33 1.6V.4C18.8.4 6.48 8.25.47 19.72l1.06.56zM33 1.6c13.76 0 25.66 7.6 31.47 18.68l1.06-.56C59.52 8.25 47.2.4 33 .4v1.2zm31.47 52.12C58.67 64.8 46.76 72.4 33 72.4v1.2c14.2 0 26.52-7.85 32.53-19.32l-1.06-.56zM33 72.4c-13.76 0-25.66-7.6-31.47-18.68l-1.06.56C6.47 65.75 18.8 73.6 33 73.6v-1.2z"
                }),
                C = function(e) {
                    return a.a.createElement("svg", k({
                        width: 66,
                        height: 74,
                        viewBox: "0 0 66 74"
                    }, e), S)
                };

            function P() {
                return (P = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var I = a.a.createElement("path", {
                    d: "M1.58 26.29C8.86 11.67 23.78 1.65 41 1.65V.35C23.26.35 7.9 10.67.42 25.71l1.16.58zM41 1.65c17.22 0 32.14 10.02 39.42 24.64l1.16-.58C74.1 10.67 58.74.35 41 .35v1.3zm39.42 64.06C73.14 80.33 58.22 90.35 41 90.35v1.3c17.74 0 33.1-10.32 40.58-25.36l-1.16-.58zM41 90.35c-17.22 0-32.14-10.02-39.42-24.64l-1.16.58C7.9 81.33 23.26 91.65 41 91.65v-1.3z"
                }),
                L = function(e) {
                    return a.a.createElement("svg", P({
                        width: 82,
                        height: 92,
                        viewBox: "0 0 82 92"
                    }, e), I)
                };

            function T() {
                return (T = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var A = a.a.createElement("path", {
                    d: "M1.67 41.33C13.2 17.83 36.78 1.75 64 1.75V.25C36.17.25 12.07 16.7.33 40.67l1.34.66zM64 1.75c27.22 0 50.81 16.09 62.33 39.58l1.34-.66C115.93 16.7 91.83.25 64 .25v1.5zm62.33 100.92c-11.52 23.5-35.11 39.58-62.33 39.58v1.5c27.83 0 51.93-16.45 63.67-40.42l-1.34-.66zM64 142.25c-27.22 0-50.81-16.09-62.33-39.58l-1.34.66C12.07 127.3 36.17 143.75 64 143.75v-1.5z"
                }),
                N = function(e) {
                    return a.a.createElement("svg", T({
                        width: 128,
                        height: 144,
                        viewBox: "0 0 128 144"
                    }, e), A)
                },
                R = n("./src/components/style/BaseThemeProvider.tsx"),
                D = function(e) {
                    return function(t) {
                        return {
                            fill: t.accentColor.fill.normal,
                            position: "absolute",
                            width: "calc(100% + ".concat(e, "px)"),
                            height: "calc(100% + ".concat(e, "px)"),
                            top: "-".concat(e / 2, "px"),
                            left: "-".concat(e / 2, "px"),
                            pointerEvents: "none"
                        }
                    }
                },
                U = {
                    XS: 38,
                    S: 48,
                    M: 56,
                    L: 72,
                    XL: 90,
                    XXL: 142
                },
                M = {
                    XS: y,
                    S: w,
                    M: _,
                    L: C,
                    XL: L,
                    XXL: N
                };

            function B(e) {
                var t = e.scale,
                    n = z[t],
                    r = Math.round(U[t] - n),
                    o = M[t];
                return i.createElement(R.a, null, i.createElement(u.L, null, function(e) {
                    return i.createElement(o, {
                        className: e(D(r))
                    })
                }))
            }

            function H() {
                var e = o()(["\n  fragment UserAvatar_user on User {\n    username\n    id\n    name\n    imageId\n    mediumMemberAt\n  }\n"]);
                return H = function() {
                    return e
                }, e
            }
            n.d(t, "c", function() {
                return z
            }), n.d(t, "a", function() {
                return G
            }), n.d(t, "b", function() {
                return K
            });
            var F = "1*dmbNkD5D-u45r44go_cf0g.png",
                z = {
                    XS: 32,
                    S: 40,
                    M: 48,
                    L: 64,
                    XL: 80,
                    XXL: 128
                },
                q = function(e) {
                    return {
                        color: e.backgroundColor,
                        display: "inline-block",
                        padding: "12px 16px",
                        whiteSpace: "nowrap"
                    }
                },
                W = function(e) {
                    var t = e.children,
                        n = e.href;
                    return e.link ? i.createElement(u.f, {
                        href: n
                    }, t) : t
                },
                V = function(e) {
                    var t = e.children,
                        n = e.hasPopover,
                        r = e.name,
                        o = Object(p.useCx)();
                    return n && r ? i.createElement(b.a, null, function(e) {
                        var n, a = e.isVisible,
                            c = e.show,
                            s = e.hide,
                            l = function() {
                                n && clearTimeout(n), c()
                            },
                            u = function() {
                                n = setTimeout(s, 100)
                            };
                        return i.createElement("span", {
                            onMouseOver: l,
                            onMouseOut: u
                        }, a && i.createElement(m.a, {
                            darkTheme: !0,
                            disablePortalOverlay: !0,
                            display: "block",
                            placement: "top",
                            hide: u,
                            isVisible: !0,
                            shouldAnimateOpen: !0,
                            popoverRenderFn: function() {
                                return i.createElement("div", {
                                    onMouseOver: l
                                }, i.createElement(d.a, {
                                    scale: "S"
                                }, i.createElement("span", {
                                    className: o(q)
                                }, r)))
                            }
                        }, i.createElement(i.Fragment, null)), t)
                    }) : t
                };

            function G(e) {
                var t = e.scale;
                return i.createElement(l.a, {
                    miroId: F,
                    alt: "Unknown user",
                    diameter: z[t],
                    freezeGifs: !1
                })
            }
            t.d = function(e) {
                var t = e.hasPopover,
                    n = void 0 !== t && t,
                    r = e.link,
                    o = void 0 !== r && r,
                    a = e.scale,
                    c = e.user,
                    s = c.username,
                    u = c.imageId,
                    d = c.name,
                    m = c.mediumMemberAt,
                    b = e.withHalo,
                    h = void 0 === b || b,
                    v = Object(p.useCx)();
                if (!s) return null;
                var y, x = Object(g.Mb)(s),
                    E = !!m && h,
                    w = i.createElement(l.a, {
                        miroId: u || F,
                        alt: d || "",
                        diameter: z[a],
                        freezeGifs: !1
                    }),
                    O = w;
                return E && (O = i.createElement("div", {
                    className: v((y = z[a], {
                        position: "relative",
                        width: Object(f.b)(y),
                        height: Object(f.b)(y)
                    }))
                }, i.createElement(B, {
                    scale: a
                }), w)), i.createElement(V, {
                    hasPopover: n,
                    name: d
                }, i.createElement(W, {
                    href: x,
                    link: o
                }, O))
            };
            var K = s()(H())
        },
        "./src/components/user/UserFollowButton.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./node_modules/graphql-tag/src/index.js"),
                c = n.n(a),
                s = n("./node_modules/react-redux/es/index.js"),
                l = n("./src/components/session/WithViewer.tsx"),
                u = n("./src/framework/design-system/components/index.ts"),
                d = n("./node_modules/react-apollo/react-apollo.esm.js"),
                m = n("./src/framework/source/index.ts"),
                f = n("./src/framework/reporter/index.ts");

            function p() {
                var e = o()(["\n  fragment UserFollowButtonSignedIn_user on User {\n    id\n    isFollowing\n  }\n"]);
                return p = function() {
                    return e
                }, e
            }

            function g() {
                var e = o()(["\n  mutation unfollowUser($targetUserId: ID!) {\n    unfollowUser(targetUserId: $targetUserId) {\n      id\n      isFollowing\n    }\n  }\n"]);
                return g = function() {
                    return e
                }, e
            }

            function b() {
                var e = o()(["\n  mutation followUser($targetUserId: ID!) {\n    followUser(targetUserId: $targetUserId) {\n      id\n      isFollowing\n    }\n  }\n"]);
                return b = function() {
                    return e
                }, e
            }
            var h = c()(b()),
                v = c()(g()),
                y = c()(p()),
                x = Object(d.d)(Object(d.f)(h, {
                    name: "followUser",
                    props: function(e) {
                        var t = e.ownProps,
                            n = e.followUser;
                        return {
                            followUser: function() {
                                return n({
                                    variables: {
                                        targetUserId: t.user.id
                                    },
                                    optimisticResponse: {
                                        __typename: "Mutation",
                                        followUser: {
                                            __typename: "User",
                                            id: t.user.id,
                                            isFollowing: !0
                                        }
                                    }
                                })
                            }
                        }
                    }
                }), Object(d.f)(v, {
                    name: "unfollowUser",
                    props: function(e) {
                        var t = e.ownProps,
                            n = e.unfollowUser;
                        return {
                            unfollowUser: function() {
                                return n({
                                    variables: {
                                        targetUserId: t.user.id
                                    },
                                    optimisticResponse: {
                                        __typename: "Mutation",
                                        unfollowUser: {
                                            __typename: "User",
                                            id: t.user.id,
                                            isFollowing: !1
                                        }
                                    }
                                })
                            }
                        }
                    }
                }))(function(e) {
                    var t = e.user,
                        n = e.followUser,
                        r = e.unfollowUser,
                        o = e.buttonSize,
                        a = void 0 === o ? "REGULAR" : o,
                        c = e.buttonStyleFn,
                        s = void 0 === c ? function(e) {
                            return e ? "STRONG" : "OBVIOUS"
                        } : c,
                        l = Object(f.c)(),
                        d = Object(m.f)(),
                        p = t.isFollowing,
                        g = s(!!p),
                        b = i.useCallback(function() {
                            return l.event("user.followed", {
                                targetUserId: t.id,
                                followSource: d
                            }), n()
                        }),
                        h = i.useCallback(function() {
                            return l.event("user.unfollowed", {
                                targetUserId: t.id,
                                followSource: d
                            }), r()
                        });
                    return i.createElement(u.c, {
                        onClick: p ? h : b,
                        buttonStyle: g,
                        size: a
                    }, p ? "Following" : "Follow")
                }),
                E = n("./src/components/susi/SusiClickable.tsx"),
                w = n("./src/util/routes.ts");

            function O() {
                var e = o()(["\n  fragment UserFollowButtonSignedOut_post on Post {\n    ...SusiClickable_post\n  }\n  ", "\n"]);
                return O = function() {
                    return e
                }, e
            }

            function j() {
                var e = o()(["\n  fragment UserFollowButtonSignedOut_user on User {\n    id\n    ...SusiClickable_user\n  }\n  ", "\n"]);
                return j = function() {
                    return e
                }, e
            }
            var _ = function(e) {
                    var t = e.buttonSize,
                        n = void 0 === t ? "REGULAR" : t,
                        r = e.isObvious,
                        o = void 0 !== r && r,
                        a = e.user,
                        c = e.post;
                    return i.createElement(m.b, {
                        source: {
                            userId: a.id
                        },
                        extendSource: !0
                    }, i.createElement(E.a, {
                        buttonSize: n,
                        buttonStyle: o ? "OBVIOUS" : "SUBTLE",
                        isButton: !0,
                        operation: "register",
                        post: c,
                        user: a,
                        actionUrl: c ? Object(w.wb)(a.id, c.id) : Object(w.vb)(a.id)
                    }, "Follow"))
                },
                k = c()(j(), E.e),
                S = c()(O(), E.c);

            function C() {
                var e = o()(["\n  fragment UserFollowButton_post on Post {\n    collection {\n      id\n    }\n    ...UserFollowButtonSignedOut_post\n  }\n  ", "\n"]);
                return C = function() {
                    return e
                }, e
            }

            function P() {
                var e = o()(["\n  fragment UserFollowButton_user on User {\n    ...UserFollowButtonSignedIn_user\n    ...UserFollowButtonSignedOut_user\n  }\n  ", "\n  ", "\n"]);
                return P = function() {
                    return e
                }, e
            }
            n.d(t, "b", function() {
                return I
            }), n.d(t, "a", function() {
                return L
            });
            t.c = Object(s.c)(function(e) {
                return {
                    isAmp: e.config.isAmp
                }
            })(function(e) {
                var t = e.user,
                    n = e.buttonSize,
                    r = void 0 === n ? "REGULAR" : n,
                    o = e.buttonStyleFn,
                    a = void 0 === o ? function(e) {
                        return e ? "STRONG" : "OBVIOUS"
                    } : o,
                    c = e.post;
                if (e.isAmp) return null;
                var s = !(!c || !c.collection);
                return i.createElement(l.a, null, function(e) {
                    return e ? e.id !== t.id && i.createElement(x, {
                        user: t,
                        buttonSize: r,
                        buttonStyleFn: a
                    }) : i.createElement(_, {
                        isObvious: s,
                        post: c,
                        user: t,
                        buttonSize: r
                    })
                })
            });
            var I = c()(P(), y, k),
                L = c()(C(), S)
        },
        "./src/fragmentTypes.json": function(e) {
            e.exports = {
                __schema: {
                    types: [{
                        kind: "UNION",
                        name: "UserResult",
                        possibleTypes: [{
                            name: "User"
                        }, {
                            name: "GraphqlEmptyId"
                        }, {
                            name: "NotFound"
                        }, {
                            name: "Suspended"
                        }, {
                            name: "Blocked"
                        }, {
                            name: "AccountSuspended"
                        }]
                    }, {
                        kind: "UNION",
                        name: "UserSuggestionReasonType",
                        possibleTypes: [{
                            name: "FolloweesWhoFollow"
                        }, {
                            name: "Topic"
                        }]
                    }, {
                        kind: "UNION",
                        name: "PostResult",
                        possibleTypes: [{
                            name: "Post"
                        }, {
                            name: "GraphqlEmptyId"
                        }, {
                            name: "NotFound"
                        }, {
                            name: "WithheldInCountry"
                        }, {
                            name: "RemovedByUser"
                        }, {
                            name: "UnavailableForLegalReasons"
                        }, {
                            name: "PostSuspended"
                        }, {
                            name: "AccountSuspended"
                        }, {
                            name: "AccountDeleted"
                        }]
                    }, {
                        kind: "UNION",
                        name: "MilestoneType",
                        possibleTypes: [{
                            name: "PostMilestoneDistributionUserDisabled"
                        }, {
                            name: "PostMilestoneDistributionUserEnabled"
                        }]
                    }, {
                        kind: "UNION",
                        name: "RecircItem",
                        possibleTypes: [{
                            name: "Post"
                        }, {
                            name: "SuggestedPost"
                        }]
                    }, {
                        kind: "UNION",
                        name: "UserNavItemType",
                        possibleTypes: [{
                            name: "UserNavItemTypeSystemItem"
                        }]
                    }, {
                        kind: "UNION",
                        name: "StreamItemType",
                        possibleTypes: [{
                            name: "StreamItemCompressedPostList"
                        }, {
                            name: "StreamItemHeading"
                        }, {
                            name: "StreamItemPostPreview"
                        }, {
                            name: "StreamItemQuoteList"
                        }, {
                            name: "StreamItemQuotePreview"
                        }, {
                            name: "StreamItemSeriesGridCard"
                        }, {
                            name: "StreamItemSeriesHeroCarousel"
                        }, {
                            name: "StreamItemSequence"
                        }]
                    }, {
                        kind: "UNION",
                        name: "HeadingType",
                        possibleTypes: [{
                            name: "HeadingBasic"
                        }, {
                            name: "HeadingWithLink"
                        }, {
                            name: "HeadingDismissible"
                        }]
                    }, {
                        kind: "UNION",
                        name: "VariantFlagValueType",
                        possibleTypes: [{
                            name: "VariantFlagBoolean"
                        }, {
                            name: "VariantFlagString"
                        }]
                    }]
                }
            }
        },
        "./src/framework/design-system/components/Body.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return s
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./src/framework/style/index.ts"),
                i = n("./src/framework/design-system/util/type/toRule.ts"),
                a = function(e) {
                    var t = e.grid.yStep,
                        n = e.scale.ui,
                        r = 6 * t;
                    switch (n) {
                        case "SMALL":
                            return r - t;
                        case "REGULAR":
                            return r;
                        case "LARGE":
                            return r + t;
                        default:
                            throw new Error("Unknown value for UI scale: ".concat(n))
                    }
                },
                c = [function(e) {
                    return {
                        color: e.baseColor.text.light,
                        fill: e.baseColor.fill.light
                    }
                }, Object(i.a)(function(e) {
                    return {
                        font: e.font.uiRegular,
                        lineHeight: a(e),
                        display: "block"
                    }
                })];

            function s(e) {
                var t = e.children,
                    n = e.tag,
                    i = void 0 === n ? "p" : n,
                    a = Object(o.useCx)(),
                    s = i;
                return r.createElement(s, {
                    className: a(c)
                }, t)
            }
        },
        "./src/framework/design-system/components/Box.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                a = n.n(i),
                c = n("./node_modules/react/index.js"),
                s = n("./src/framework/style/index.ts"),
                l = n("./src/log/index.ts"),
                u = function(e, t, n) {
                    t.forEach(function(t) {
                        null != e[t] && n(t, e[t])
                    })
                },
                d = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(e) {
                            return e
                        },
                        r = {};
                    return u(e, t, function(e, t) {
                        return r[e] = n(t)
                    }), r
                },
                m = function(e) {
                    return ["".concat(e, "Bottom"), "".concat(e, "Left"), "".concat(e, "Top"), "".concat(e, "Right")]
                },
                f = n("./src/styles/breakpoints.ts"),
                p = n("./src/styles/mediaTypes.ts");

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(n, !0).forEach(function(t) {
                        a()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            n.d(t, "a", function() {
                return U
            });
            var h = function(e) {
                    var t = m("padding");
                    return t.push("padding"), d(e, t)
                },
                v = function(e) {
                    return function(t) {
                        var n = m("border");
                        n.push("border");
                        var r = {
                            ACCENT_LIGHT: t.accentColor.border.light,
                            ACCENT_NORMAL: t.accentColor.border.normal,
                            ACCENT_DARK: t.accentColor.border.dark,
                            BASE_LIGHTER: t.baseColor.border.lighter,
                            BASE_LIGHT: t.baseColor.border.light,
                            BASE_NORMAL: t.baseColor.border.normal,
                            BASE_DARK: t.baseColor.border.dark,
                            BASE_DARKER: t.baseColor.border.darker,
                            BACKGROUND: t.backgroundColor,
                            ERROR: t.errorColor,
                            NONE: "none"
                        };
                        return d(e, n, function(e) {
                            var n = e && r[e];
                            return n === r.NONE ? r.NONE : n && "".concat(t.borderWidth, "px ").concat(t.borderStyle, " ").concat(n)
                        })
                    }
                },
                y = function(e) {
                    return d(e, ["borderRadius"])
                },
                x = function(e) {
                    return d(e, ["boxShadow"])
                },
                E = function(e) {
                    var t = m("margin");
                    return t.push("margin"), d(e, t)
                },
                w = function(e) {
                    return d(e, ["height", "width", "maxHeight", "maxWidth", "minHeight", "minWidth", "boxSizing"])
                },
                O = function(e) {
                    return d(e, ["overflow"])
                },
                j = function(e) {
                    return d(e, ["position", "top", "right", "bottom", "left"])
                },
                _ = function(e) {
                    return d(e, ["zIndex"])
                },
                k = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.allowFlexProps,
                        r = t.noDefault,
                        o = e.display,
                        i = void 0 === o ? r ? void 0 : "block" : o,
                        a = {
                            display: i,
                            float: e.float
                        },
                        c = ["alignItems", "flexDirection", "justifyContent", "flexWrap"];
                    return "flex" === i || "inline-flex" === i || n ? a = b({}, a, {}, d(e, c)) : function(e, t, n) {
                        u(e, t, function(e, t) {
                            return l.a.warn(n(e))
                        })
                    }(e, c, function(e) {
                        return "Cannot set ".concat(e, ' without setting `display="flex"`.')
                    }), a
                },
                S = function(e) {
                    if (void 0 === e.alignSelf && void 0 === e.flexGrow && void 0 === e.flexShrink && void 0 === e.flexBasis) return {};
                    var t = e.alignSelf,
                        n = e.flexGrow,
                        r = void 0 === n ? 0 : n,
                        o = e.flexShrink,
                        i = void 0 === o ? 0 : o,
                        a = e.flexBasis,
                        c = void 0 === a ? "auto" : a;
                    return {
                        alignSelf: t,
                        flex: "".concat(r, " ").concat(i, " ").concat(c)
                    }
                },
                C = function(e) {
                    var t = e.backgroundColor,
                        n = o()(e, ["backgroundColor"]);
                    return function(e) {
                        return b({}, d(n, ["background", "backgroundImage", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"]), {}, function(e) {
                            return function(t) {
                                var n = {
                                    ACCENT_LIGHT: t.accentColor.fill.light,
                                    ACCENT_NORMAL: t.accentColor.fill.normal,
                                    ACCENT_DARK: t.accentColor.fill.dark,
                                    BASE_LIGHT: t.baseColor.background.light,
                                    BASE_NORMAL: t.baseColor.background.normal,
                                    BASE_DARK: t.baseColor.background.dark,
                                    SAGE_LIGHT: t.brandColor.sage.light,
                                    SAGE_NORMAL: t.brandColor.sage.normal,
                                    SAGE_DARK: t.brandColor.sage.dark,
                                    ROSE_LIGHT: t.brandColor.rose.light,
                                    ROSE_NORMAL: t.brandColor.rose.normal,
                                    ROSE_DARK: t.brandColor.rose.dark,
                                    BACKGROUND: t.backgroundColor,
                                    NONE: void 0
                                };
                                return d(e, ["backgroundColor"], function(e) {
                                    return e && n[e]
                                })
                            }
                        }({
                            backgroundColor: t
                        })(e))
                    }
                },
                P = function(e) {
                    return d(e, ["textAlign"])
                },
                I = function(e) {
                    return d(e, ["whiteSpace"])
                },
                L = function(e) {
                    var t = e.xs;
                    return t ? function(e) {
                        return a()({}, f.xs(e), b({}, h(t), {}, v(t)(e), {}, E(t), {}, w(t), {}, O(t), {}, k(t, {
                            allowFlexProps: !0,
                            noDefault: !0
                        }), {}, S(t), {}, j(t), {}, _(t), {}, P(t), {}, C(t)(e), {}, I(t)))
                    } : {}
                },
                T = function(e) {
                    var t = e.sm;
                    return t ? function(e) {
                        return a()({}, f.sm(e), b({}, h(t), {}, v(t)(e), {}, y(t), {}, E(t), {}, w(t), {}, O(t), {}, k(t, {
                            allowFlexProps: !0,
                            noDefault: !0
                        }), {}, S(t), {}, j(t), {}, _(t), {}, P(t), {}, C(t)(e), {}, I(t)))
                    } : {}
                },
                A = function(e) {
                    var t = e.md;
                    return t ? function(e) {
                        return a()({}, f.md(e), b({}, h(t), {}, v(t)(e), {}, y(t), {}, E(t), {}, w(t), {}, O(t), {}, k(t, {
                            allowFlexProps: !0,
                            noDefault: !0
                        }), {}, S(t), {}, j(t), {}, _(t), {}, P(t), {}, C(t)(e), {}, I(t)))
                    } : {}
                },
                N = function(e) {
                    var t = e.lg;
                    return t ? function(e) {
                        return a()({}, f.lg(e), b({}, h(t), {}, v(t)(e), {}, y(t), {}, E(t), {}, w(t), {}, O(t), {}, k(t, {
                            allowFlexProps: !0,
                            noDefault: !0
                        }), {}, S(t), {}, j(t), {}, _(t), {}, P(t), {}, C(t)(e), {}, I(t)))
                    } : {}
                },
                R = function(e) {
                    var t = e.xl;
                    return t ? function(e) {
                        return a()({}, f.xl(e), b({}, h(t), {}, v(t)(e), {}, y(t), {}, E(t), {}, w(t), {}, O(t), {}, k(t, {
                            allowFlexProps: !0,
                            noDefault: !0
                        }), {}, S(t), {}, j(t), {}, _(t), {}, P(t), {}, C(t)(e), {}, I(t)))
                    } : {}
                },
                D = function(e) {
                    var t = e.print;
                    return t ? function(e) {
                        return a()({}, p.b(e), b({}, k(t, {
                            allowFlexProps: !0,
                            noDefault: !0
                        })))
                    } : {}
                };

            function U(e) {
                var t = e.children,
                    n = e.tag,
                    r = void 0 === n ? "div" : n,
                    i = o()(e, ["children", "tag"]),
                    a = Object(s.useCx)(),
                    l = r,
                    u = [h(i), v(i), y(i), x(i), E(i), w(i), O(i), k(i), S(i), j(i), _(i), C(i), P(i), I(i), L(i), T(i), A(i), N(i), R(i), D(i)];
                return c.createElement(l, {
                    className: a(u)
                }, t)
            }
        },
        "./src/framework/design-system/components/Button.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/extends.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),
                a = n.n(i),
                c = n("./node_modules/react/index.js"),
                s = n("./src/framework/design-system/components/Clickable.tsx"),
                l = n("./src/framework/style/index.ts"),
                u = n("./src/framework/design-system/util/type/toRule.ts"),
                d = n("./src/styles/colors.ts"),
                m = function() {
                    return {
                        borderWidth: "1px",
                        borderStyle: "solid",
                        boxSizing: "border-box",
                        display: "inline-block",
                        textDecoration: "none",
                        ":hover": {
                            cursor: "pointer"
                        },
                        ":focus": {
                            outline: "none"
                        }
                    }
                },
                f = function(e) {
                    return function() {
                        return e ? {
                            width: e
                        } : {}
                    }
                },
                p = {
                    SUBTLE: function(e) {
                        return {
                            color: e.baseColor.text.normal,
                            fill: e.baseColor.fill.normal,
                            background: 0,
                            borderColor: e.baseColor.border.dark,
                            ":hover": {
                                color: e.baseColor.text.darker,
                                fill: e.baseColor.fill.darker,
                                borderColor: e.baseColor.border.darker
                            },
                            ":disabled": {
                                color: e.baseColor.text.lighter,
                                fill: e.baseColor.fill.light,
                                borderColor: e.baseColor.border.light,
                                cursor: "inherit",
                                ":hover": {
                                    color: e.baseColor.text.lighter,
                                    fill: e.baseColor.fill.light,
                                    borderColor: e.baseColor.border.light
                                }
                            }
                        }
                    },
                    OBVIOUS: function(e) {
                        return {
                            background: 0,
                            color: e.accentColor.text.normal,
                            fill: e.accentColor.fill.normal,
                            borderColor: e.accentColor.border.normal,
                            ":hover": {
                                color: e.accentColor.text.dark,
                                fill: e.accentColor.fill.dark,
                                borderColor: e.accentColor.border.dark
                            }
                        }
                    },
                    STRONG: function(e) {
                        return {
                            color: e.backgroundColor,
                            fill: e.backgroundColor,
                            background: e.accentColor.fill.normal,
                            borderColor: e.accentColor.fill.normal,
                            ":hover": {
                                background: e.accentColor.fill.dark,
                                borderColor: e.accentColor.fill.dark
                            },
                            ":disabled": {
                                cursor: "inherit",
                                opacity: .3,
                                ":hover": {
                                    background: e.accentColor.fill.normal,
                                    borderColor: e.accentColor.fill.normal
                                }
                            }
                        }
                    },
                    BRAND: function(e) {
                        return {
                            color: e.backgroundColor,
                            fill: e.backgroundColor,
                            background: e.baseColor.fill.dark,
                            borderColor: e.baseColor.fill.dark
                        }
                    },
                    ERROR: function(e) {
                        return {
                            color: e.backgroundColor,
                            fill: e.backgroundColor,
                            background: e.errorColor,
                            borderColor: e.errorColor
                        }
                    },
                    WARN: function(e) {
                        return {
                            color: e.baseColor.text.lighter,
                            fill: e.baseColor.fill.lighter,
                            background: 0,
                            borderColor: e.baseColor.border.normal,
                            ":hover": {
                                borderColor: e.warnColor,
                                color: e.warnColor
                            }
                        }
                    },
                    FACEBOOK: function(e) {
                        return {
                            color: e.backgroundColor,
                            fill: e.backgroundColor,
                            background: d.k,
                            borderColor: d.k,
                            ":hover": {
                                background: d.l,
                                borderColor: d.l
                            }
                        }
                    },
                    SOCIAL: function(e) {
                        return {
                            color: e.baseColor.text.normal,
                            background: 0,
                            textAlign: "left",
                            borderColor: e.baseColor.border.normal,
                            ":hover": {
                                color: e.baseColor.text.normal,
                                borderColor: e.baseColor.border.dark
                            }
                        }
                    }
                },
                g = {
                    COMPACT: function() {
                        return {
                            padding: "0px 8px"
                        }
                    },
                    SMALL: function() {
                        return {
                            padding: "4px 12px"
                        }
                    },
                    REGULAR: function() {
                        return {
                            padding: "8px 16px"
                        }
                    },
                    LARGE: function() {
                        return {
                            padding: "8px 20px"
                        }
                    },
                    FULL: function() {
                        return {
                            padding: "12px"
                        }
                    },
                    BADGE: function() {
                        return {
                            padding: "4px 0px",
                            margin: "auto"
                        }
                    }
                },
                b = {
                    RECTANGLE: function() {
                        return {
                            borderRadius: "4px"
                        }
                    },
                    CIRCLE: function() {
                        return {
                            borderRadius: "99em"
                        }
                    }
                };

            function h(e) {
                return {
                    font: e.font.uiRegular,
                    lineHeight: 20
                }
            }
            var v = {
                COMPACT: Object(u.a)(function(e) {
                    return {
                        font: e.font.uiRegular,
                        fontSize: 15,
                        lineHeight: 18
                    }
                }),
                BADGE: Object(u.a)(function(e) {
                    return h(e)
                }),
                SMALL: Object(u.a)(function(e) {
                    return h(e)
                }),
                REGULAR: Object(u.a)(function(e) {
                    return {
                        font: e.font.uiRegular,
                        lineHeight: 20
                    }
                }),
                LARGE: Object(u.a)(function(e) {
                    return {
                        font: e.font.uiRegular,
                        lineHeight: 24
                    }
                })
            };
            t.a = function(e) {
                var t = Object(l.useCx)(),
                    n = e.buttonStyle,
                    r = void 0 === n ? "SUBTLE" : n,
                    i = e.size,
                    u = void 0 === i ? "REGULAR" : i,
                    d = e.shape,
                    h = void 0 === d ? "RECTANGLE" : d,
                    y = e.width,
                    x = a()(e, ["buttonStyle", "size", "shape", "width"]),
                    E = [g[u], p[r], b[h], v[u], f(y), m];
                return c.createElement(s.a, o()({
                    className: t(E)
                }, x))
            }
        },
        "./src/framework/design-system/components/Clickable.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./src/components/navigation/Anchor.tsx"),
                i = function(e) {
                    return r.createElement("button", e)
                },
                a = function(e) {
                    return r.createElement(o.a, e, e.children)
                };

            function c(e) {
                return e.href ? r.createElement(a, e) : e.onClick ? r.createElement(i, e) : null
            }
        },
        "./src/framework/design-system/components/Popover.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return j
            });
            var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./src/styles/zIndex.ts"),
                c = n("./node_modules/react-popper/lib/esm/index.js"),
                s = n("./src/framework/design-system/components/index.ts"),
                l = n("./src/framework/design-system/components/portal/PopoverPortal.tsx"),
                u = n("./src/framework/design-system/util/events.ts"),
                d = n("./src/framework/style/index.ts"),
                m = n("./src/util/dom.ts"),
                f = n("./src/styles/mediaTypes.ts");

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var g = {
                    bottom: "top center",
                    top: "bottom center"
                },
                b = function() {
                    return {
                        "0%": {
                            transform: "matrix(0.97, 0, 0, 1, 0, 12)",
                            opacity: 0
                        },
                        "20%": {
                            transform: "matrix(0.99, 0, 0, 1, 0, 2)",
                            opacity: .7
                        },
                        "40%": {
                            transform: "matrix(1, 0, 0, 1, 0, -1)",
                            opacity: 1
                        },
                        "70%": {
                            transform: "matrix(1, 0, 0, 1, 0, 0)",
                            opacity: 1
                        },
                        "100%": {
                            transform: "matrix(1, 0, 0, 1, 0, 0)",
                            opacity: 1
                        }
                    }
                },
                h = function(e, t, n, r) {
                    return function(o) {
                        return {
                            boxSizing: "border-box",
                            border: t ? void 0 : "".concat(o.borderWidth, "px solid ").concat(o.baseColor.border.lighter),
                            borderRadius: "".concat(o.borderRadius.regular, "px"),
                            boxShadow: "0 1px 4px ".concat(o.baseColor.border.lighter),
                            color: t ? "#fff" : void 0,
                            marginBottom: "top" === e ? "".concat(n, "px") : "inherit",
                            marginLeft: "right" === e ? "".concat(n, "px") : "inherit",
                            marginRight: "left" === e ? "".concat(n, "px") : "inherit",
                            marginTop: "bottom" === e ? "".concat(n, "px") : "inherit",
                            zIndex: r || a.a.popover
                        }
                    }
                },
                v = function(e, t) {
                    return function(n) {
                        return o()({}, Object(f.a)("no-preference"), function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? p(n, !0).forEach(function(t) {
                                    o()(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(n).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({
                            animation: "".concat(e, " 100ms forwards linear"),
                            transformOrigin: g[t],
                            willChange: "transform"
                        }, x(n)))
                    }
                },
                y = function(e) {
                    return function(t) {
                        return {
                            background: e ? t.baseColor.fill.normal : t.backgroundColor,
                            borderRadius: "".concat(t.borderRadius.regular, "px")
                        }
                    }
                },
                x = function(e) {
                    return {
                        background: e.backgroundColor,
                        borderRadius: "".concat(e.borderRadius.regular, "px")
                    }
                },
                E = function(e, t) {
                    return function(n) {
                        return {
                            position: "absolute",
                            pointerEvents: "none",
                            top: "bottom" === e ? "-14px" : "top" === e ? void 0 : "50%",
                            right: "left" === e ? "-14px" : void 0,
                            bottom: "top" === e ? "-14px" : void 0,
                            left: "right" === e ? "-14px" : "left" === e ? void 0 : "50%",
                            clip: {
                                top: "rect(0px 18px 18px -4px)",
                                right: "rect(-4px 14px 18px 0px)",
                                bottom: "rect(0px 18px 14px -4px)",
                                left: "rect(-4px 14px 18px 0px)"
                            }[e],
                            ":after": {
                                content: "''",
                                display: "block",
                                width: "14px",
                                height: "14px",
                                background: t ? n.baseColor.fill.normal : n.backgroundColor,
                                transform: {
                                    top: "rotate(45deg) translate(-6px, -6px)",
                                    right: "rotate(45deg) translate(6px, -6px)",
                                    bottom: "rotate(45deg) translate(6px, 6px)",
                                    left: "rotate(45deg) translate(-6px, 6px)"
                                }[e],
                                boxShadow: {
                                    top: "1px 1px 1px -1px ".concat(n.baseColor.border.dark),
                                    right: "-1px 1px 1px -1px ".concat(n.baseColor.border.dark),
                                    bottom: "-1px -1px 1px -1px ".concat(n.baseColor.border.dark),
                                    left: "1px -1px 1px -1px ".concat(n.baseColor.border.dark)
                                }[e]
                            }
                        }
                    }
                };

            function w(e) {
                var t = e.children,
                    n = e.shouldAnimateOpen,
                    r = e.placement,
                    o = Object(d.useCx)();
                return n ? i.createElement(s.M, {
                    keyframes: {
                        scaleUpKeyframes: b
                    }
                }, function(e) {
                    var n = e.scaleUpKeyframes;
                    return i.createElement("div", {
                        className: o(v(n, r))
                    }, t)
                }) : i.createElement("div", {
                    className: o(x)
                }, t)
            }
            var O = function(e) {
                var t = e.instance.popper;
                if (t) {
                    var n = parseInt(t.style.top);
                    if (0 === n) return t.style.top = "".concat(n - parseInt(window.getComputedStyle(document.body).getPropertyValue("margin-top")), "px"), e
                }
            };

            function j(e) {
                var t = e.children,
                    n = e.darkTheme,
                    r = void 0 !== n && n,
                    o = e.disablePortalOverlay,
                    a = void 0 !== o && o,
                    s = e.display,
                    f = e.flip,
                    p = void 0 === f || f,
                    g = e.hide,
                    b = e.isVisible,
                    v = e.noArrow,
                    x = void 0 !== v && v,
                    j = e.noPortal,
                    _ = void 0 !== j && j,
                    k = e.overflowPadding,
                    S = void 0 === k ? 5 : k,
                    C = e.placement,
                    P = void 0 === C ? "bottom" : C,
                    I = e.popoverRenderFn,
                    L = e.referenceHeight,
                    T = e.refTag,
                    A = void 0 === T ? "div" : T,
                    N = e.setMaxHeight,
                    R = void 0 !== N && N,
                    D = e.shouldAnimateOpen,
                    U = void 0 !== D && D,
                    M = e.targetDistance,
                    B = void 0 === M ? 5 : M,
                    H = e.customZIndex,
                    F = Object(d.useCx)(),
                    z = {
                        display: s || "inline-block",
                        height: L
                    },
                    q = A,
                    W = Object(d.useTheme)().borderWidth,
                    V = i.useCallback(function(e) {
                        var t = e.instance.popper.children[0];
                        if (t && "bottom" === P && !p) {
                            var n = window.innerHeight - (e.offsets.reference.top + e.offsets.reference.height - Object(m.c)().top) - B - 2 * W - S;
                            return t.style.overflowY = "auto", t.style.maxHeight = "".concat(n, "px"), e
                        }
                    }, [W, p, m.c, P, S, B]),
                    G = i.createElement(c.b, {
                        modifiers: {
                            flip: {
                                enabled: p
                            },
                            preventOverflow: {
                                enabled: !0,
                                padding: S
                            },
                            setMaxHeight: {
                                enabled: R,
                                fn: V,
                                order: 1e3
                            },
                            accountForBodyMargin: {
                                enabled: !0,
                                fn: O,
                                order: 1050
                            }
                        },
                        placement: P
                    }, function(e) {
                        var t = e.placement,
                            n = e.ref,
                            o = e.style,
                            a = e.arrowProps,
                            c = e.scheduleUpdate;
                        return i.createElement("div", {
                            ref: n,
                            style: o,
                            className: F(h(t, r, B, H))
                        }, i.createElement(w, {
                            placement: t,
                            shouldAnimateOpen: U
                        }, i.createElement("div", {
                            className: F(y(r))
                        }, I(c)), !x && i.createElement("div", {
                            className: F(E(t, r)),
                            ref: a.ref,
                            style: a.style
                        })))
                    });
                return _ || (G = i.createElement(l.a, {
                    disableOverlay: a,
                    onClick: function(e) {
                        return Object(u.a)(g, e)
                    },
                    onKeyDown: function(e) {
                        return Object(u.b)(g, e)
                    },
                    customZIndex: H
                }, G)), i.createElement(c.a, null, i.createElement(c.c, null, function(e) {
                    var n = e.ref;
                    return i.createElement(q, {
                        ref: n,
                        className: F(z)
                    }, t)
                }), b ? G : null)
            }
        },
        "./src/framework/design-system/components/SvgButton.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            });
            var r = n("./node_modules/@babel/runtime/helpers/extends.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                a = n.n(i),
                c = n("./node_modules/react/index.js"),
                s = n("./src/framework/style/index.ts");

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var u = function(e) {
                return function(t) {
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? l(n, !0).forEach(function(t) {
                                a()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({
                        color: "inherit",
                        fill: t.baseColor.fill.lighter,
                        fontSize: "inherit",
                        border: "inherit",
                        fontFamily: "inherit",
                        letterSpacing: "inherit",
                        fontWeight: "inherit",
                        padding: 0,
                        margin: 0,
                        outline: "none",
                        ":hover": {
                            cursor: "pointer"
                        }
                    }, e)
                }
            };

            function d(e) {
                var t = e.ariaLabel,
                    n = void 0 === t ? "" : t,
                    r = e.children,
                    i = e.onClick,
                    a = e.onTouchStart,
                    l = e.onTouchEnd,
                    d = e.rules,
                    m = void 0 === d ? {} : d,
                    f = Object(s.useCx)(),
                    p = {
                        onClick: i,
                        onTouchEnd: l,
                        onTouchStart: a
                    };
                return n && (p["aria-label"] = n), c.createElement("button", o()({}, p, {
                    className: f(u(m))
                }), r)
            }
        },
        "./src/framework/design-system/components/buttons/CloseButton.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/react/index.js"),
                o = n.n(r),
                i = n("./src/framework/design-system/components/index.ts");

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var c = o.a.createElement("path", {
                    d: "M13.8 4.6L9.5 8.89 5.21 4.6l-.61.61 4.29 4.3-4.29 4.28.61.62 4.3-4.3 4.28 4.3.62-.62-4.3-4.29 4.3-4.29",
                    fillRule: "evenodd"
                }),
                s = function(e) {
                    return o.a.createElement("svg", a({
                        width: 19,
                        height: 19,
                        viewBox: "0 0 19 19"
                    }, e), c)
                },
                l = n("./src/svg/x-25px.svg");

            function u() {
                return (u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var d = o.a.createElement("path", {
                    d: "M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62",
                    fillRule: "evenodd"
                }),
                m = function(e) {
                    return o.a.createElement("svg", u({
                        className: "x-29px_svg__svgIcon-use",
                        width: 29,
                        height: 29
                    }, e), d)
                };
            n.d(t, "a", function() {
                return p
            });
            var f = {
                SMALL: s,
                REGULAR: l.a,
                LARGE: m
            };

            function p(e) {
                var t = e.onClick,
                    n = e.size,
                    o = void 0 === n ? "SMALL" : n,
                    a = e.isPositionAbsolute,
                    c = void 0 === a || a,
                    s = f[o];
                return r.createElement(i.b, {
                    position: !0 === c ? "absolute" : "relative",
                    right: "0",
                    margin: !0 === c ? "12px" : "0"
                }, r.createElement(i.d, null, r.createElement(i.u, {
                    onClick: t
                }, r.createElement(s, null))))
            }
        },
        "./src/framework/design-system/components/form/TextField.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return g
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./src/framework/design-system/components/index.ts"),
                i = n("./src/framework/design-system/type/index.ts"),
                a = n("./src/framework/style/index.ts"),
                c = function(e) {
                    var t = e.value,
                        n = e.uneditablePrefix,
                        o = void 0 === n ? "" : n,
                        i = Object(a.useCx)();
                    return r.createElement("p", {
                        className: i([u, f])
                    }, o, t)
                },
                s = function(e) {
                    var t = e.value,
                        n = e.onChange,
                        i = e.placeholder,
                        c = e.uneditablePrefix,
                        s = Object(a.useCx)();
                    return r.createElement(o.b, {
                        display: "flex",
                        width: "100%"
                    }, !!c && r.createElement("p", {
                        className: s([u, p])
                    }, c), r.createElement("input", {
                        className: s([u, m]),
                        type: "text",
                        placeholder: i,
                        value: t,
                        onChange: n
                    }))
                },
                l = function(e) {
                    var t = e.value,
                        n = e.onChange,
                        o = e.placeholder,
                        i = e.rows,
                        c = Object(a.useCx)();
                    return r.createElement("textarea", {
                        className: c([u, d]),
                        placeholder: o,
                        onChange: n,
                        rows: i
                    }, t)
                },
                u = function(e) {
                    return {
                        padding: "4px 0",
                        fontFamily: "inherit",
                        fontSize: "inherit",
                        lineHeight: "inherit",
                        outline: "0",
                        borderStyle: "solid",
                        borderWidth: "0px 0px 1px 0px",
                        borderColor: "".concat(e.baseColor.border.light),
                        ":focus": {
                            borderColor: e.baseColor.border.dark
                        }
                    }
                },
                d = {
                    borderWidth: "1px",
                    padding: "4px"
                },
                m = {
                    borderWidth: "0px 0px 1px 0px",
                    flexGrow: "1"
                },
                f = function(e) {
                    return {
                        borderWidth: "0px 0px 1px 0px",
                        background: "linear-gradient(to right, ".concat(e.baseColor.text.normal, ", 90%, white 100%)"),
                        "-webkit-background-clip": "text",
                        "-webkit-text-fill-color": "transparent",
                        color: "transparent",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        width: "100%"
                    }
                },
                p = {
                    opacity: "0.6"
                };

            function g(e) {
                var t = e.rows,
                    n = e.isEditable,
                    o = void 0 === n || n;
                return r.createElement(i.a, {
                    scale: "M"
                }, o ? t && t > 1 ? r.createElement(l, e) : r.createElement(s, e) : r.createElement(c, e))
            }
        },
        "./src/framework/design-system/components/grid-system/index.ts": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./src/framework/design-system/util/style/responsiveStyles.ts"),
                c = n("./src/framework/style/index.ts"),
                s = {
                    display: "flex",
                    justifyContent: "center"
                },
                l = function(e) {
                    return function(t) {
                        return Object(a.a)(t, {
                            margin: Object(a.c)([e, t.grid.marginSteps], function(e) {
                                var n = o()(e, 2),
                                    r = n[0],
                                    i = n[1];
                                return "full" === r ? "0" : "0 ".concat(i * t.grid.xStep, "px")
                            }),
                            maxWidth: Object(a.b)(e, function(e) {
                                return "full" === e ? "100%" : "".concat(t.maxWidths[e], "px")
                            }),
                            width: "100%"
                        })
                    }
                },
                u = function(e) {
                    var t = e.children,
                        n = e.size,
                        r = void 0 === n ? "outset" : n,
                        o = Object(c.useCx)();
                    return i.createElement("div", {
                        className: o(s)
                    }, i.createElement("div", {
                        className: o(l(r))
                    }, t))
                },
                d = i.createContext({
                    gutters: !0
                }),
                m = function(e) {
                    var t = e.alignItems,
                        n = void 0 === t ? "center" : t,
                        r = e.children,
                        o = e.direction,
                        s = void 0 === o ? "row" : o,
                        l = e.gutters,
                        u = void 0 === l || l,
                        m = e.tag,
                        f = void 0 === m ? "div" : m,
                        p = Object(c.useCx)(),
                        g = function(e) {
                            var t = e.alignItems,
                                n = e.direction,
                                r = e.gutters;
                            return function(e) {
                                var o = {
                                        xs: e.grid.gutterSteps.xs * e.grid.xStep,
                                        sm: e.grid.gutterSteps.sm * e.grid.xStep,
                                        md: e.grid.gutterSteps.md * e.grid.xStep,
                                        lg: e.grid.gutterSteps.lg * e.grid.xStep,
                                        xl: e.grid.gutterSteps.xl * e.grid.xStep
                                    },
                                    i = r ? Object(a.b)(o, function(e) {
                                        return "-".concat(e / 2, "px")
                                    }) : 0;
                                return Object(a.a)(e, {
                                    alignItems: t && Object(a.b)(t, function(e) {
                                        return e
                                    }),
                                    display: "flex",
                                    flexDirection: n && Object(a.b)(n, function(e) {
                                        return e
                                    }),
                                    flexWrap: "wrap",
                                    width: r ? Object(a.b)(o, function(e) {
                                        return "calc(100% + ".concat(e, "px)")
                                    }) : "100%",
                                    marginLeft: i,
                                    marginRight: i
                                })
                            }
                        }({
                            alignItems: n,
                            direction: s,
                            gutters: u
                        });
                    return i.createElement(d.Provider, {
                        value: {
                            gutters: u
                        }
                    }, i.createElement(f, {
                        className: p(g)
                    }, r))
                },
                f = function(e) {
                    return "".concat(Math.round(e / 12 * 1e8) / 1e6, "%")
                },
                p = function(e) {
                    return function(t) {
                        var n = Object(a.b)(e, function(e) {
                                return f(e)
                            }),
                            r = Object(a.b)(e, function(e) {
                                return f(e)
                            });
                        return Object(a.a)(t, {
                            flexBasis: n,
                            flexGrow: 0,
                            maxWidth: r
                        })
                    }
                },
                g = function(e) {
                    return function(t) {
                        var n = {
                                xs: t.grid.gutterSteps.xs * t.grid.xStep,
                                sm: t.grid.gutterSteps.sm * t.grid.xStep,
                                md: t.grid.gutterSteps.md * t.grid.xStep,
                                lg: t.grid.gutterSteps.lg * t.grid.xStep,
                                xl: t.grid.gutterSteps.xl * t.grid.xStep
                            },
                            r = e ? Object(a.b)(n, function(e) {
                                return "".concat(e / 2, "px")
                            }) : "0px";
                        return Object(a.a)(t, {
                            paddingLeft: r,
                            paddingRight: r
                        })
                    }
                },
                b = function(e) {
                    var t = e.children,
                        n = e.size,
                        r = e.tag,
                        o = void 0 === r ? "div" : r,
                        a = i.useContext(d).gutters,
                        s = Object(c.useCx)(),
                        l = [g(a), p(n)];
                    return i.createElement(o, {
                        className: s(l)
                    }, t)
                };
            n.d(t, "c", function() {
                return u
            }), n.d(t, "a", function() {
                return m
            }), n.d(t, "b", function() {
                return b
            })
        },
        "./src/framework/design-system/components/index.ts": function(e, t, n) {
            "use strict";
            var r = n("./src/framework/style/index.ts"),
                o = n("./src/framework/design-system/components/Body.tsx"),
                i = n("./src/framework/design-system/components/Box.tsx"),
                a = n("./src/framework/design-system/components/Button.tsx"),
                c = n("./src/framework/design-system/components/buttons/CloseButton.tsx"),
                s = n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                l = n.n(s),
                u = n("./node_modules/@babel/runtime/helpers/createClass.js"),
                d = n.n(u),
                m = n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),
                f = n.n(m),
                p = n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
                g = n.n(p),
                b = n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),
                h = n.n(b),
                v = n("./node_modules/@babel/runtime/helpers/inherits.js"),
                y = n.n(v),
                x = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                E = n.n(x),
                w = n("./node_modules/react/index.js"),
                O = n.n(w),
                j = n("./src/styles/font.ts"),
                _ = function() {
                    return {
                        padding: "8px 12px",
                        textAlign: "center"
                    }
                },
                k = (w.Component, n("./src/framework/design-system/util/type/toRule.ts")),
                S = function(e) {
                    return Object(k.a)(function(t) {
                        return {
                            font: t.font.uiRegular,
                            lineHeight: 20,
                            display: "block",
                            clamp: e
                        }
                    })
                },
                C = function(e) {
                    return function(t) {
                        return {
                            color: e ? t.baseColor.text.normal : t.baseColor.text.lighter,
                            fill: e ? t.baseColor.fill.normal : t.baseColor.fill.lighter
                        }
                    }
                };

            function P(e) {
                var t = e.children,
                    n = e.tag,
                    o = void 0 === n ? "span" : n,
                    i = e.strong,
                    a = void 0 !== i && i,
                    c = e.clamp,
                    s = Object(r.useCx)(),
                    l = [S(c), C(a)],
                    u = o;
                return w.createElement(u, {
                    className: s(l)
                }, t)
            }
            var I = n("./src/framework/design-system/components/Clickable.tsx"),
                L = function(e) {
                    var t = e.containerWidth;
                    return {
                        position: "relative",
                        width: "".concat(t, "px"),
                        height: "".concat(t, "px")
                    }
                },
                T = function(e) {
                    var t = e.radius;
                    return {
                        "100%": {
                            strokeDashoffset: "".concat(6.28 * t, "px")
                        }
                    }
                },
                A = function(e) {
                    var t = e.animationDelay,
                        n = e.animationDuration,
                        r = e.animationName,
                        o = e.radius,
                        i = e.strokeWidth;
                    return function(e) {
                        return {
                            r: o,
                            cx: "50%",
                            cy: "50%",
                            fill: "none",
                            stroke: e.baseColor.border.light,
                            strokeWidth: i,
                            strokeDasharray: "".concat(6.28 * o, "px ").concat(6.28 * o, "px"),
                            strokeDashoffset: "0",
                            transformOrigin: "50% 50%",
                            transform: "rotate(-90deg)",
                            animation: "".concat(r, " ").concat(n, "ms linear forwards"),
                            animationDelay: "".concat(t, "ms")
                        }
                    }
                };

            function N(e) {
                var t = e.delay,
                    n = e.duration,
                    o = e.radius,
                    i = void 0 === o ? 8 : o,
                    a = e.strokeWidth,
                    c = void 0 === a ? 4 : a,
                    s = Object(r.useCx)(),
                    l = 2 * (i + c);
                return w.createElement(r.WithKeyframes, {
                    keyframes: {
                        countdownCircleKeyframe: T({
                            radius: i
                        })
                    }
                }, function(e) {
                    var r = e.countdownCircleKeyframe;
                    return w.createElement("figure", {
                        className: s(L({
                            containerWidth: l
                        }))
                    }, w.createElement("svg", {
                        role: "img",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        height: "100%"
                    }, w.createElement("circle", {
                        className: s(A({
                            animationDelay: t,
                            animationDuration: n,
                            animationName: r,
                            radius: i,
                            strokeWidth: c
                        })),
                        cx: "50%",
                        cy: "50%",
                        r: "8px"
                    })))
                })
            }
            var R = n("./node_modules/@babel/runtime/helpers/extends.js"),
                D = n.n(R),
                U = n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),
                M = n.n(U);

            function B(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function H(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? B(n, !0).forEach(function(t) {
                        E()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var F = new Map([
                    [6, "xs"],
                    [8, "sm"],
                    [10, "md"],
                    [12, "lg"]
                ]),
                z = function(e) {
                    var t, n = e.centered,
                        r = e.columns,
                        o = e.gutter,
                        i = e.theme,
                        a = r ? F.get(r) : null,
                        c = {
                            xs: "".concat(i.breakpoints.sm, "px"),
                            sm: "".concat(i.breakpoints.md, "px"),
                            md: "".concat(i.breakpoints.lg, "px"),
                            lg: "".concat(i.breakpoints.xl, "px"),
                            xl: "".concat(i.grid.xlMaxContentWidth, "px")
                        },
                        s = {
                            xs: "".concat(i.grid.marginSteps.xs * i.grid.xStep, "px"),
                            sm: "".concat(i.grid.marginSteps.sm * i.grid.xStep, "px"),
                            md: "".concat(i.grid.marginSteps.md * i.grid.xStep, "px"),
                            lg: "".concat(i.grid.marginSteps.lg * i.grid.xStep, "px"),
                            xl: "".concat(i.grid.marginSteps.xl * i.grid.xStep, "px")
                        };
                    return t = a ? H({
                        maxWidth: c[a]
                    }, o ? {
                        paddingLeft: s[a],
                        paddingRight: s[a]
                    } : {}) : {
                        xs: H({
                            maxWidth: c.xs
                        }, o ? {
                            paddingLeft: s.xs,
                            paddingRight: s.xs
                        } : {}),
                        sm: H({
                            maxWidth: c.sm
                        }, o ? {
                            paddingLeft: s.sm,
                            paddingRight: s.sm
                        } : {}),
                        md: H({
                            maxWidth: c.md
                        }, o ? {
                            paddingLeft: s.md,
                            paddingRight: s.md
                        } : {}),
                        lg: H({
                            maxWidth: c.lg
                        }, o ? {
                            paddingLeft: s.lg,
                            paddingRight: s.lg
                        } : {}),
                        xl: H({
                            maxWidth: c.xl
                        }, o ? {
                            paddingLeft: s.xl,
                            paddingRight: s.xl
                        } : {})
                    }, H({
                        boxSizing: "border-box"
                    }, n ? {
                        marginLeft: "auto",
                        marginRight: "auto"
                    } : {}, {}, t, {
                        width: "100%"
                    })
                };

            function q(e) {
                var t = e.tag,
                    n = void 0 === t ? "section" : t,
                    o = e.columns,
                    a = e.gutter,
                    c = void 0 === a || a,
                    s = e.centered,
                    l = void 0 === s || s,
                    u = M()(e, ["tag", "columns", "gutter", "centered"]),
                    d = Object(r.useTheme)(),
                    m = z({
                        centered: l,
                        columns: o,
                        gutter: c,
                        theme: d
                    });
                return w.createElement(i.a, D()({
                    tag: n
                }, H({}, m, {}, u)))
            }
            var W = n("./src/framework/design-system/components/grid-system/index.ts"),
                V = function(e, t, n) {
                    return Object(k.a)(function(r) {
                        return {
                            font: e ? r.font.uiHeavy : r.font.uiRegular,
                            lineHeight: 18,
                            letterSpacing: n,
                            display: "block",
                            clamp: t
                        }
                    })
                },
                G = function(e, t, n) {
                    return function(r) {
                        var o = "light";
                        return n && (o = "normal"), t && (o = "lighter"), e && !t && (o = "light"), {
                            color: r.baseColor.text[o],
                            fill: r.baseColor.fill[o]
                        }
                    }
                },
                K = {
                    textTransform: "uppercase"
                };

            function X(e) {
                var t = e.children,
                    n = e.tag,
                    o = void 0 === n ? "span" : n,
                    i = e.strong,
                    a = void 0 !== i && i,
                    c = e.lighter,
                    s = void 0 !== c && c,
                    l = e.darker,
                    u = void 0 !== l && l,
                    d = e.clamp,
                    m = e.letterSpacing,
                    f = Object(r.useCx)(),
                    p = [V(a, d, m), G(a, s, u), K],
                    g = o;
                return w.createElement(g, {
                    className: f(p)
                }, t)
            }
            var Y = Object(k.a)(function(e) {
                    return {
                        font: e.font.uiHeavy,
                        fontSize: 15,
                        lineHeight: 16
                    }
                }),
                Q = function(e) {
                    return {
                        color: e.baseColor.text.normal,
                        fill: e.baseColor.fill.normal,
                        borderBottom: "1px solid ".concat(e.baseColor.border.light),
                        paddingBottom: "8px",
                        textTransform: "uppercase"
                    }
                },
                $ = function(e) {
                    var t = e.tag,
                        n = void 0 === t ? "h1" : t,
                        o = e.children,
                        i = Object(r.useCx)(),
                        a = n,
                        c = [Y, Q];
                    return w.createElement(a, {
                        className: i(c)
                    }, o)
                },
                J = n("./src/framework/design-system/util/type/headingSizeRule.ts"),
                Z = n("./src/styles/breakpoints.ts"),
                ee = function(e) {
                    return {
                        color: e.baseColor.text.normal,
                        fill: e.baseColor.fill.normal
                    }
                },
                te = function(e, t, n) {
                    if (!t) return {};
                    var r = {};
                    return r[e(n)] = Object(J.a)(t), r
                },
                ne = function(e) {
                    var t = e.children,
                        n = e.size,
                        o = e.lgSize,
                        i = e.mdSize,
                        a = e.smSize,
                        c = e.tag,
                        s = void 0 === c ? n : c,
                        l = Object(r.useCx)(),
                        u = s;
                    return w.createElement(r.WithTheme, null, function(e) {
                        return w.createElement(u, {
                            className: l([ee, Object(J.a)(n), te(Z.lg, o, e), te(Z.md, i, e), te(Z.sm, a, e)])
                        }, t)
                    })
                },
                re = function(e) {
                    return function(t) {
                        return e ? {
                            color: t.baseColor.text.dark,
                            fill: t.baseColor.fill.dark
                        } : {
                            color: t.baseColor.text.normal,
                            fill: t.baseColor.fill.normal
                        }
                    }
                },
                oe = function(e) {
                    var t = e.children,
                        n = e.size,
                        o = e.tag,
                        i = void 0 === o ? n : o,
                        a = e.textAlign,
                        c = e.clamp,
                        s = e.dark,
                        l = Object(r.useCx)(),
                        u = i,
                        d = {
                            textAlign: a || "inherit"
                        };
                    return w.createElement(u, {
                        className: l([re(s), d, Object(J.c)(n, function(e) {
                            return e.font.uiHeavy
                        }, c)])
                    }, t)
                };

            function ie(e) {
                var t = e.tag,
                    n = e.children,
                    r = e.textAlign,
                    o = e.clamp;
                return w.createElement(oe, {
                    tag: t,
                    size: "h1",
                    textAlign: r,
                    clamp: o
                }, n)
            }

            function ae(e) {
                var t = e.tag,
                    n = e.children,
                    r = e.textAlign,
                    o = e.clamp;
                return w.createElement(oe, {
                    tag: t,
                    size: "h2",
                    textAlign: r,
                    clamp: o
                }, n)
            }

            function ce(e) {
                var t = e.tag,
                    n = e.children,
                    r = e.textAlign,
                    o = e.clamp;
                return w.createElement(oe, {
                    tag: t,
                    size: "h3",
                    textAlign: r,
                    clamp: o
                }, n)
            }

            function se(e) {
                var t = e.tag,
                    n = e.children,
                    r = e.textAlign,
                    o = e.clamp,
                    i = e.dark;
                return w.createElement(oe, {
                    tag: t,
                    size: "h4",
                    textAlign: r,
                    clamp: o,
                    dark: i
                }, n)
            }
            var le = function(e) {
                function t(e) {
                    var n;
                    return l()(this, t), n = f()(this, g()(t).call(this, e)), E()(h()(n), "timeout", void 0), E()(h()(n), "mouseEnter", function(e) {
                        n.timeout && clearTimeout(n.timeout), n.props.onMouseEnter(e)
                    }), E()(h()(n), "mouseLeave", function(e) {
                        n.timeout = setTimeout(function() {
                            return n.props.onMouseLeave(e)
                        }, n.props.mouseLeaveDelay)
                    }), n.mouseEnter = n.mouseEnter.bind(h()(n)), n.mouseLeave = n.mouseLeave.bind(h()(n)), n
                }
                return y()(t, e), d()(t, [{
                    key: "render",
                    value: function() {
                        return w.createElement("div", {
                            onMouseEnter: this.mouseEnter,
                            onMouseLeave: this.mouseLeave
                        }, this.props.children)
                    }
                }]), t
            }(w.Component);

            function ue(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            E()(le, "defaultProps", {
                mouseLeaveDelay: 0
            });
            var de = function(e) {
                    return function(t) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? ue(n, !0).forEach(function(t) {
                                    E()(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ue(n).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({
                            color: "inherit",
                            fill: "inherit",
                            fontSize: "inherit"
                        }, e ? {
                            border: "inherit"
                        } : {}, {
                            fontFamily: "inherit",
                            letterSpacing: "inherit",
                            fontWeight: "inherit",
                            padding: 0,
                            margin: 0,
                            ":hover": {
                                cursor: "pointer"
                            },
                            ":focus": {
                                outline: "none"
                            },
                            ":disabled": {
                                cursor: "default",
                                color: t.baseColor.text.lighter,
                                fill: t.baseColor.fill.lighter
                            }
                        })
                    }
                },
                me = function(e) {
                    return e ? {
                        display: e
                    } : {}
                },
                fe = {
                    INLINE: {
                        SUBTLE: function(e) {
                            return {
                                ":hover": {
                                    textDecoration: "underline"
                                }
                            }
                        },
                        OBVIOUS: function(e) {
                            return {
                                textDecoration: "underline"
                            }
                        }
                    },
                    STANDALONE: {
                        SUBTLE: function(e) {
                            return {
                                ":hover": {
                                    color: e.baseColor.text.dark,
                                    fill: e.baseColor.fill.dark
                                }
                            }
                        },
                        OBVIOUS: function(e) {
                            return {
                                color: e.accentColor.text.normal,
                                fill: e.accentColor.fill.normal,
                                ":hover": {
                                    color: e.accentColor.text.dark,
                                    fill: e.accentColor.fill.dark
                                },
                                ":disabled": {
                                    color: e.accentColor.fillTransparent.light,
                                    fill: e.accentColor.fillTransparent.light
                                }
                            }
                        }
                    }
                },
                pe = function(e) {
                    var t = Object(r.useCx)(),
                        n = e.display,
                        o = e.inline,
                        i = void 0 !== o && o,
                        a = e.linkStyle,
                        c = void 0 === a ? "SUBTLE" : a,
                        s = e.inheritBorder,
                        l = void 0 === s || s,
                        u = M()(e, ["display", "inline", "linkStyle", "inheritBorder"]),
                        d = i ? "INLINE" : "STANDALONE",
                        m = [de(l), fe[d][c], me(n)];
                    return w.createElement(I.a, D()({
                        className: t(m)
                    }, u))
                },
                ge = n("./src/framework/design-system/components/Popover.tsx"),
                be = function(e) {
                    function t(e) {
                        var n;
                        return l()(this, t), n = f()(this, g()(t).call(this, e)), E()(h()(n), "onMouseEnter", function(e) {
                            n.props.onMouseEnter && n.props.onMouseEnter(e), n.setState({
                                isHovered: !0
                            })
                        }), E()(h()(n), "onMouseLeave", function(e) {
                            n.props.onMouseLeave && n.props.onMouseLeave(e), n.setState({
                                isHovered: !1
                            })
                        }), n.onMouseEnter = n.onMouseEnter.bind(h()(n)), n.onMouseLeave = n.onMouseLeave.bind(h()(n)), n.state = {
                            isHovered: !1
                        }, n
                    }
                    return y()(t, e), d()(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.isVisible,
                                n = e.darkTheme,
                                r = e.hide,
                                o = e.noArrow,
                                i = e.placement,
                                a = e.targetDistance,
                                c = e.popoverRenderFn,
                                s = e.mouseLeaveDelay,
                                l = e.children,
                                u = this.state.isHovered;
                            return w.createElement(le, {
                                onMouseEnter: this.onMouseEnter,
                                onMouseLeave: this.onMouseLeave,
                                mouseLeaveDelay: s
                            }, w.createElement(ge.a, {
                                isVisible: t && u,
                                darkTheme: n,
                                hide: r,
                                noArrow: o,
                                noPortal: !0,
                                placement: i,
                                popoverRenderFn: c,
                                targetDistance: a
                            }, l))
                        }
                    }]), t
                }(w.Component);
            E()(be, "defaultProps", {
                isVisible: !0,
                hide: function() {},
                noArrow: !1,
                onMouseEnter: function() {},
                onMouseLeave: function() {},
                mouseLeaveDelay: 1e3
            });
            var he = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                ve = n.n(he),
                ye = n("./node_modules/@babel/runtime/helpers/typeof.js"),
                xe = n.n(ye),
                Ee = n("./src/framework/design-system/util/events.ts"),
                we = n("./src/framework/design-system/components/portal/Portal.tsx"),
                Oe = function(e) {
                    return ! function(e) {
                        return (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && document.activeElement === e || e.contains(document.activeElement)
                    }(e, !0) && (e.focus(), !0)
                },
                je = n("./src/styles/mediaTypes.ts"),
                _e = n("./src/styles/zIndex.ts"),
                ke = function(e) {
                    return {
                        position: "fixed",
                        top: "0",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        zIndex: _e.a.modal
                    }
                },
                Se = {
                    "0%": {
                        opacity: 1
                    },
                    "100%": {
                        opacity: 0
                    }
                },
                Ce = {
                    "0%": {
                        opacity: 0
                    },
                    "100%": {
                        opacity: 1
                    }
                },
                Pe = function(e) {
                    function t() {
                        var e, n;
                        l()(this, t);
                        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                        return n = f()(this, (e = g()(t)).call.apply(e, [this].concat(o))), E()(h()(n), "ref", void 0), n
                    }
                    return y()(t, e), d()(t, [{
                        key: "componentDidUpdate",
                        value: function() {
                            this.focusRef()
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.focusRef()
                        }
                    }, {
                        key: "focusRef",
                        value: function() {
                            this.ref && Oe(this.ref)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.children,
                                o = t.container,
                                i = t.isVisible,
                                a = t.onClick,
                                c = t.onKeyDown,
                                s = t.rules,
                                l = t.withAnimation;
                            return w.createElement(we.a, {
                                container: o
                            }, w.createElement(r.WithCx, null, function(t) {
                                return w.createElement(r.WithKeyframes, {
                                    keyframes: {
                                        animation: i ? Ce : Se
                                    }
                                }, function(r) {
                                    var o, i = r.animation;
                                    return w.createElement("div", {
                                        className: t(l ? [s, ke, (o = i, E()({}, Object(je.a)("no-preference"), {
                                            animation: "".concat(o, " 300ms forwards cubic-bezier(.25, .1, .25, 1)")
                                        }))] : [s, ke]),
                                        onClick: a,
                                        onKeyDown: c,
                                        tabIndex: "-1",
                                        ref: function(t) {
                                            return e.ref = t
                                        },
                                        "aria-modal": "true"
                                    }, n)
                                })
                            }))
                        }
                    }]), t
                }(w.Component);
            E()(Pe, "defaultProps", {
                onClick: function() {
                    return null
                },
                onKeyDown: function() {
                    return null
                }
            });
            var Ie = function(e) {
                    return function(t) {
                        return E()({
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: e ? "transparent" : t.baseColor.overlay.dark,
                            overflowX: "hidden",
                            overflowY: "auto"
                        }, Object(je.a)("no-preference"), {
                            "-webkit-overflow-scrolling": "touch",
                            scrollBehavior: "smooth"
                        })
                    }
                },
                Le = function(e) {
                    return function(t) {
                        return {
                            padding: "".concat(void 0 !== e ? e : t.grid.columnWidth, "px"),
                            marginTop: "auto",
                            marginBottom: "auto"
                        }
                    }
                },
                Te = {
                    "0%": {
                        opacity: 0
                    },
                    "25%": {
                        transform: "scale(.9)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "scale(1)"
                    }
                },
                Ae = {
                    "0%": {
                        opacity: 1,
                        transform: "scale(1)"
                    },
                    "25%": {
                        opacity: 0
                    },
                    "100%": {
                        opacity: 0,
                        transform: "scale(.9)"
                    }
                };

            function Ne(e) {
                "undefined" !== !("undefined" == typeof document || xe()(document)) && (document.documentElement && document.documentElement.style && (document.documentElement.style.overflowY = e ? "hidden" : ""))
            }
            var Re = function(e) {
                    var t = e.padding,
                        n = e.children,
                        o = e.hide,
                        a = e.isVisible,
                        s = e.withCloseButton,
                        l = void 0 === s || s,
                        u = e.withAnimation,
                        d = void 0 !== u && u,
                        m = e.withPageScroll,
                        f = void 0 !== m && m,
                        p = e.withTransparentOverlay,
                        g = void 0 !== p && p,
                        b = Object(r.useCx)(),
                        h = w.useState(!1),
                        v = ve()(h, 2),
                        y = v[0],
                        x = v[1];
                    return w.useEffect(function() {
                        a && d && x(!0)
                    }, [a, d]), w.useEffect(function() {
                        return Ne(a && !f),
                            function() {
                                Ne(!1)
                            }
                    }, [a]), a || y ? w.createElement(Pe, {
                        rules: Ie(g),
                        isVisible: a,
                        onClick: function(e) {
                            return Object(Ee.a)(o, e)
                        },
                        onKeyDown: function(e) {
                            return Object(Ee.b)(o, e)
                        },
                        withAnimation: d
                    }, d ? w.createElement(r.WithKeyframes, {
                        keyframes: {
                            animation: a ? Te : Ae
                        }
                    }, function(e) {
                        var r, o = e.animation;
                        return w.createElement("div", {
                            className: b([Le(t), (r = o, function(e) {
                                return E()({
                                    animation: "".concat(r, " 300ms forwards cubic-bezier(.25, .1, .25, 1)"),
                                    transformOrigin: "bottom center"
                                }, Object(je.a)("reduce"), {
                                    animationDuration: "0.1ms"
                                })
                            })]),
                            onAnimationEnd: function() {
                                a || x(!1)
                            }
                        }, n)
                    }) : w.createElement("div", {
                        className: b(Le(t))
                    }, n), l && w.createElement(i.a, {
                        display: "flex",
                        alignSelf: "flex-start"
                    }, w.createElement(i.a, {
                        position: "absolute",
                        top: "100px",
                        right: "200px",
                        sm: {
                            top: "0px",
                            right: "0px"
                        },
                        md: {
                            top: "100px",
                            right: "40px"
                        },
                        lg: {
                            right: "100px"
                        }
                    }, w.createElement(c.a, {
                        onClick: o,
                        size: "LARGE"
                    })))) : null
                },
                De = n("./src/framework/design-system/components/SvgButton.tsx"),
                Ue = n("./src/svg/question-mark-15px.svg"),
                Me = n("./src/svg/x-25px.svg"),
                Be = function(e) {
                    function t(e) {
                        var n;
                        return l()(this, t), n = f()(this, g()(t).call(this, e)), E()(h()(n), "onTouchStart", function(e) {
                            n.setState({
                                isClicked: !0
                            })
                        }), E()(h()(n), "hideDialog", function() {
                            n.setState({
                                isClicked: !1
                            })
                        }), n.onTouchStart = n.onTouchStart.bind(h()(n)), n.hideDialog = n.hideDialog.bind(h()(n)), n.state = {
                            isClicked: !1
                        }, n
                    }
                    return y()(t, e), d()(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.mouseLeaveDelay,
                                n = e.placement,
                                r = e.tooltipContents;
                            return w.createElement(i.a, {
                                display: "inline"
                            }, w.createElement(be, {
                                mouseLeaveDelay: t,
                                placement: n,
                                popoverRenderFn: function() {
                                    return w.createElement(i.a, {
                                        maxWidth: "250px",
                                        padding: "18px"
                                    }, r())
                                },
                                noArrow: !0
                            }, w.createElement(De.a, {
                                onTouchStart: this.onTouchStart
                            }, w.createElement(Ue.a, null))), w.createElement(Re, {
                                isVisible: this.state.isClicked,
                                hide: this.hideDialog
                            }, w.createElement(i.a, {
                                height: "100vh",
                                padding: "102px 82px",
                                sm: {
                                    padding: "64px 0",
                                    margin: "0 -32px"
                                }
                            }, w.createElement(i.a, {
                                position: "absolute",
                                top: "18px",
                                right: "18px"
                            }, w.createElement(De.a, {
                                onClick: this.hideDialog
                            }, w.createElement(Me.a, null))), r())))
                        }
                    }]), t
                }(w.Component);

            function He(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Fe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? He(n, !0).forEach(function(t) {
                        E()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : He(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            E()(Be, "defaultProps", {
                mouseLeaveDelay: 250
            });
            var ze = function(e, t) {
                return Fe({}, e, {
                    scale: Fe({}, e.scale, {}, t)
                })
            };

            function qe(e) {
                var t = e.children,
                    n = M()(e, ["children"]);
                return w.createElement(r.WithTheme, null, function(e) {
                    return w.createElement(r.ThemeProvider, {
                        theme: ze(e, n)
                    }, t)
                })
            }
            var We = function(e) {
                    return {
                        color: e.baseColor.text.lighter,
                        fill: e.baseColor.fill.lighter
                    }
                },
                Ve = function(e, t, n) {
                    return Object(k.a)(function(r) {
                        return {
                            font: t ? r.font.uiHeavy : r.font.uiRegular,
                            lineHeight: Object(o.a)(r),
                            clamp: e,
                            breakWord: n,
                            display: "block"
                        }
                    })
                };

            function Ge(e) {
                var t = e.children,
                    n = e.tag,
                    o = void 0 === n ? "p" : n,
                    i = e.clamp,
                    a = e.bold,
                    c = e.breakWord,
                    s = void 0 === c || c,
                    l = Object(r.useCx)(),
                    u = o,
                    d = [We, Ve(i, a, s)];
                return w.createElement(u, {
                    className: l(d)
                }, t)
            }

            function Ke(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Xe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ke(n, !0).forEach(function(t) {
                        E()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ke(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var Ye = function(e) {
                    var t = e.columns,
                        n = e.spacing,
                        o = e.bordered,
                        i = Object(r.useCx)(),
                        a = [et[n]];
                    return o && a.push(tt), w.createElement("thead", {
                        className: i(Je)
                    }, w.createElement("tr", null, t.map(function(e, t) {
                        return w.createElement("th", {
                            key: t,
                            className: i(a)
                        }, e.name)
                    })))
                },
                Qe = function(e) {
                    var t = e.columns,
                        n = e.data,
                        o = e.spacing,
                        i = e.bordered,
                        a = e.striped,
                        c = e.hoverable,
                        s = Object(r.useCx)(),
                        l = [Ze];
                    c && l.push(rt), a && l.push(nt);
                    var u = [et[o]];
                    return i && u.push(tt), w.createElement("tr", {
                        className: s(l)
                    }, t && t.length ? t.map(function(e, t) {
                        return w.createElement("td", {
                            key: t,
                            className: s(u)
                        }, n[e.accessor])
                    }) : Object.keys(n).map(function(e, t) {
                        return w.createElement("td", {
                            key: t,
                            className: s(u)
                        }, n[e])
                    }))
                },
                $e = function(e) {
                    return Xe({}, Object(k.a)(function(e) {
                        return {
                            font: e.font.uiRegular,
                            fontSize: 20,
                            lineHeight: 22
                        }
                    })(e), {
                        color: e.baseColor.text.lighter,
                        display: "table",
                        width: "100%",
                        borderCollapse: "collapse"
                    })
                },
                Je = function(e) {
                    return Xe({}, Object(k.a)(function(e) {
                        return {
                            font: e.font.uiHeavy,
                            fontSize: 20,
                            lineHeight: 22
                        }
                    })(e), {
                        color: e.baseColor.text.normal,
                        display: "table-header-group",
                        textAlign: "left",
                        borderBottom: "2px ".concat(e.borderStyle, " ").concat(e.baseColor.border.light)
                    })
                },
                Ze = function(e) {
                    return {
                        borderBottom: "".concat(e.borderWidth, "px ").concat(e.borderStyle, " ").concat(e.baseColor.border.light)
                    }
                },
                et = {
                    DEFAULT: function(e) {
                        return {
                            padding: "10px"
                        }
                    },
                    COMPACT: function(e) {
                        return {
                            padding: "4px"
                        }
                    },
                    COMFORTABLE: function(e) {
                        return {
                            padding: "16px"
                        }
                    }
                },
                tt = function(e) {
                    return {
                        border: "".concat(e.borderWidth, "px ").concat(e.borderStyle, " ").concat(e.baseColor.border.light)
                    }
                },
                nt = function(e) {
                    return {
                        ":nth-child(odd)": {
                            backgroundColor: e.baseColor.background.light
                        }
                    }
                },
                rt = function(e) {
                    return {
                        ":hover": {
                            backgroundColor: e.baseColor.background.normal
                        },
                        ":nth-child(odd):hover": {
                            backgroundColor: e.baseColor.background.normal
                        }
                    }
                },
                ot = function(e) {
                    var t = e.data,
                        n = e.columns,
                        o = e.spacing,
                        i = void 0 === o ? "DEFAULT" : o,
                        a = e.bordered,
                        c = void 0 !== a && a,
                        s = e.striped,
                        l = void 0 !== s && s,
                        u = e.hoverable,
                        d = void 0 !== u && u,
                        m = Object(r.useCx)(),
                        f = [$e];
                    return c && f.push(tt), w.createElement("table", {
                        className: m(f)
                    }, n && n.length && w.createElement(Ye, {
                        spacing: i,
                        columns: n,
                        bordered: c
                    }), w.createElement("tbody", null, t.map(function(e, t) {
                        return w.createElement(Qe, {
                            key: t,
                            columns: n,
                            data: e,
                            spacing: i,
                            bordered: c,
                            striped: l,
                            hoverable: d
                        })
                    })))
                },
                it = n("./node_modules/react-redux/es/index.js"),
                at = n("./node_modules/react-router/esm/react-router.js"),
                ct = n("./src/util/navigation.ts"),
                st = Object(at.h)(Object(it.c)(function(e) {
                    return {
                        currentHostname: e.navigation.hostname
                    }
                })(function(e) {
                    var t = e.href,
                        n = e.children,
                        r = e.location,
                        o = e.currentHostname;
                    return n(Object(ct.d)(t, o, r))
                })),
                lt = function(e) {
                    return {
                        borderBottom: "1px solid ".concat(e.baseColor.border.lighter)
                    }
                },
                ut = {
                    listStyleType: "none",
                    margin: 0,
                    whiteSpace: "nowrap",
                    overflowX: "auto",
                    marginBottom: "-1px"
                },
                dt = function(e) {
                    return function(t) {
                        return {
                            display: "inline-block",
                            lineHeight: "40px",
                            marginRight: "20px",
                            paddingBottom: "8px",
                            borderBottom: e ? "1px solid ".concat(t.baseColor.border.dark) : "none"
                        }
                    }
                },
                mt = function(e) {
                    var t = e.items,
                        n = Object(r.useCx)();
                    return w.createElement("nav", {
                        className: n(lt)
                    }, w.createElement("ul", {
                        className: n(ut)
                    }, t.map(function(e, t) {
                        var r = e.title,
                            o = e.href;
                        return w.createElement(st, {
                            key: t,
                            href: o
                        }, function(e) {
                            return w.createElement("li", {
                                className: n(dt(e))
                            }, w.createElement(P, {
                                strong: e
                            }, w.createElement(pe, {
                                href: o
                            }, r)))
                        })
                    })))
                },
                ft = n("./src/framework/design-system/type/index.ts");

            function pt() {
                return (pt = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var gt = O.a.createElement("path", {
                    d: "M1.64 6.81l-.34.36.34.35 3.8 3.83.36.36.36-.36L14.36 3l.34-.35-.34-.35-.62-.65-.36-.37-.36.37L5.8 9.02 3 6.17l-.36-.36-.36.36-.64.64z",
                    fill: "#fff",
                    stroke: "#fff"
                }),
                bt = function(e) {
                    return O.a.createElement("svg", pt({
                        width: 19,
                        height: 19,
                        fill: "none",
                        viewBox: "0 0 16 13"
                    }, e), gt)
                },
                ht = function(e) {
                    return function(t) {
                        return {
                            background: e ? t.accentColor.fill.normal : t.backgroundColor,
                            border: "1px solid ".concat(e ? t.accentColor.fill.normal : t.baseColor.border.light),
                            borderRadius: "2px",
                            boxSizing: "border-box",
                            color: t.backgroundColor,
                            cursor: "pointer",
                            fill: t.backgroundColor
                        }
                    }
                },
                vt = {
                    "-webkit-appearance": "none",
                    "-moz-appearance": "none",
                    appearance: "none"
                },
                yt = function(e) {
                    var t = e.children,
                        n = e.checked,
                        o = e.onChange,
                        a = e.textColor,
                        c = void 0 === a ? "LIGHTER" : a,
                        s = e.textScale,
                        l = void 0 === s ? "M" : s,
                        u = Object(r.useCx)(),
                        d = w.useState(!!n),
                        m = ve()(d, 2),
                        f = m[0],
                        p = m[1],
                        g = w.useCallback(function(e) {
                            p(!f), o && o(e)
                        }, [o, f]);
                    return w.createElement(i.a, {
                        tag: "label",
                        display: "flex",
                        alignItems: "center"
                    }, w.createElement(i.a, {
                        marginRight: "10px",
                        height: "19px",
                        width: "19px",
                        display: "flex",
                        alignItems: "center"
                    }, w.createElement(bt, {
                        className: u(ht(f))
                    }), w.createElement("input", {
                        className: u(vt),
                        type: "checkbox",
                        checked: n,
                        onChange: g
                    })), w.createElement(ft.a, {
                        color: c,
                        scale: l
                    }, t))
                },
                xt = {
                    "-webkit-appearance": "none",
                    "-moz-appearance": "none",
                    appearance: "none"
                },
                Et = function(e) {
                    var t, n = e.checked,
                        o = e.name,
                        a = e.onChange,
                        c = e.value,
                        s = e.content,
                        l = Object(r.useCx)();
                    return w.createElement(i.a, {
                        tag: "label",
                        display: "flex",
                        paddingBottom: "10px",
                        alignItems: "center"
                    }, w.createElement("input", {
                        type: "radio",
                        className: l(xt),
                        checked: n,
                        onChange: a,
                        name: o,
                        value: c
                    }), w.createElement("span", {
                        className: l((t = n, function(e) {
                            return {
                                border: "solid 1px ".concat(e.baseColor.border.light),
                                borderRadius: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "17px",
                                height: "17px",
                                boxSizing: "border-box",
                                marginRight: "10px",
                                ":after": {
                                    content: "''",
                                    height: "11px",
                                    width: "11px",
                                    background: e.accentColor.fill.normal,
                                    borderRadius: "100%",
                                    display: t ? "block" : "none"
                                }
                            }
                        }))
                    }), w.createElement(i.a, {
                        paddingTop: "2px"
                    }, s || w.createElement(ft.a, {
                        scale: "M"
                    }, c)))
                },
                wt = function(e) {
                    var t = e.options,
                        n = e.onChange,
                        r = e.value,
                        o = t.find(function(e) {
                            return e.value === r
                        }),
                        i = o ? t.indexOf(o) : 0,
                        a = w.useState(i),
                        c = ve()(a, 2),
                        s = c[0],
                        l = c[1],
                        u = function(e, t, r) {
                            return function() {
                                l(r), n && n(e, t)
                            }
                        };
                    return w.createElement("div", null, t.map(function(e, t) {
                        return w.createElement(Et, {
                            checked: s === t,
                            onChange: u(e.name, e.value, t),
                            name: e.name,
                            value: e.value,
                            content: e.content,
                            key: t
                        })
                    }))
                },
                Ot = n("./src/framework/design-system/components/form/TextField.tsx"),
                jt = function(e) {
                    function t() {
                        var e, n;
                        l()(this, t);
                        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                        return n = f()(this, (e = g()(t)).call.apply(e, [this].concat(o))), E()(h()(n), "handleConfirm", function() {
                            n.props.onConfirm(), n.props.hide()
                        }), n
                    }
                    return y()(t, e), d()(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.buttonStyle,
                                n = e.children,
                                r = e.isVisible,
                                o = e.hide,
                                c = e.titleText,
                                s = e.cancelText,
                                l = e.confirmText,
                                u = e.footer;
                            return w.createElement(Re, {
                                isVisible: r,
                                hide: o
                            }, w.createElement(i.a, {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }, w.createElement(ie, null, c), w.createElement(i.a, {
                                paddingTop: "8px",
                                paddingBottom: "24px"
                            }, w.createElement(ft.f, {
                                scale: "M"
                            }, n)), w.createElement(i.a, null, w.createElement(a.a, {
                                buttonStyle: t,
                                onClick: this.handleConfirm
                            }, l), w.createElement(i.a, {
                                paddingLeft: "8px",
                                display: "inline-block"
                            }, w.createElement(a.a, {
                                buttonStyle: "SUBTLE",
                                onClick: o
                            }, s))), u ? w.createElement(i.a, {
                                paddingTop: "48px"
                            }, w.createElement(P, null, u)) : null))
                        }
                    }]), t
                }(w.Component);
            E()(jt, "defaultProps", {
                footer: null,
                buttonStyle: "OBVIOUS"
            });
            var _t = n("./src/framework/design-system/components/portal/FloatingPortal.tsx"),
                kt = function() {
                    return {
                        "0%": {
                            transform: "translateX(-100%)"
                        },
                        "40%": {
                            transform: "translateX(0%)"
                        },
                        "60%": {
                            transform: "translateX(0%)"
                        },
                        "100%": {
                            transform: "translateX(100%)"
                        }
                    }
                },
                St = function(e) {
                    function t() {
                        return l()(this, t), f()(this, g()(t).apply(this, arguments))
                    }
                    return y()(t, e), d()(t, [{
                        key: "render",
                        value: function() {
                            return w.createElement(r.WithKeyframes, {
                                keyframes: {
                                    translateRight: kt
                                }
                            }, function(e) {
                                var t, n = e.translateRight;
                                return w.createElement(_t.a, {
                                    rules: (t = n, function(e) {
                                        return {
                                            position: "fixed",
                                            top: "0",
                                            left: "0",
                                            right: "0",
                                            height: "2px",
                                            backgroundColor: e.accentColor.border.light,
                                            transform: "translateX(100%)",
                                            animation: "".concat(t, " 1s ease-in-out infinite"),
                                            animationDelay: ".8s"
                                        }
                                    }),
                                    zIndex: _e.a.loading
                                })
                            })
                        }
                    }]), t
                }(w.Component),
                Ct = n("./src/framework/design-system/components/portal/ui/Toast.tsx"),
                Pt = n("./src/framework/design-system/components/util/VisibilityController.tsx");
            n.d(t, "H", function() {
                return r.ThemeProvider
            }), n.d(t, "L", function() {
                return r.WithCx
            }), n.d(t, "M", function() {
                return r.WithKeyframes
            }), n.d(t, "N", function() {
                return r.WithTheme
            }), n.d(t, "a", function() {
                return o.b
            }), n.d(t, "b", function() {
                return i.a
            }), n.d(t, "c", function() {
                return a.a
            }), n.d(t, "g", function() {
                return c.a
            }), n.d(t, "d", function() {
                return P
            }), n.d(t, "f", function() {
                return I.a
            }), n.d(t, "i", function() {
                return N
            }), n.d(t, "B", function() {
                return q
            }), n.d(t, "k", function() {
                return W.a
            }), n.d(t, "l", function() {
                return W.b
            }), n.d(t, "w", function() {
                return W.c
            }), n.d(t, "q", function() {
                return X
            }), n.d(t, "r", function() {
                return $
            }), n.d(t, "s", function() {
                return ne
            }), n.d(t, "m", function() {
                return ie
            }), n.d(t, "n", function() {
                return ae
            }), n.d(t, "o", function() {
                return ce
            }), n.d(t, "p", function() {
                return se
            }), n.d(t, "t", function() {
                return le
            }), n.d(t, "u", function() {
                return pe
            }), n.d(t, "x", function() {
                return ge.a
            }), n.d(t, "J", function() {
                return be
            }), n.d(t, "y", function() {
                return Be
            }), n.d(t, "A", function() {
                return qe
            }), n.d(t, "C", function() {
                return Ge
            }), n.d(t, "D", function() {
                return De.a
            }), n.d(t, "F", function() {
                return ot
            }), n.d(t, "E", function() {
                return mt
            }), n.d(t, "e", function() {
                return yt
            }), n.d(t, "z", function() {
                return wt
            }), n.d(t, "G", function() {
                return Ot.a
            }), n.d(t, "h", function() {
                return jt
            }), n.d(t, "j", function() {
                return Re
            }), n.d(t, "v", function() {
                return St
            }), n.d(t, "I", function() {
                return Ct.a
            }), n.d(t, "K", function() {
                return Pt.a
            })
        },
        "./src/framework/design-system/components/portal/FloatingPortal.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/createClass.js"),
                a = n.n(i),
                c = n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),
                s = n.n(c),
                l = n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
                u = n.n(l),
                d = n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),
                m = n.n(d),
                f = n("./node_modules/@babel/runtime/helpers/inherits.js"),
                p = n.n(f),
                g = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                b = n.n(g),
                h = n("./node_modules/react/index.js"),
                v = n("./src/framework/design-system/components/index.ts"),
                y = n("./src/framework/design-system/components/portal/Portal.tsx"),
                x = function e(t, n) {
                    var r = this;
                    o()(this, e), b()(this, "timeoutId", void 0), b()(this, "resumedAt", void 0), b()(this, "duration", void 0), b()(this, "elapsed", void 0), b()(this, "completed", void 0), b()(this, "onComplete", void 0), b()(this, "complete", function() {
                        r.pause(), r.completed = !0, r.onComplete()
                    }), b()(this, "resume", function() {
                        if (!(r.resumedAt || r.timeoutId || r.completed)) {
                            var e = r.duration - r.elapsed;
                            e <= 0 ? r.complete() : (r.resumedAt = Date.now(), r.timeoutId = setTimeout(r.complete, e))
                        }
                    }), b()(this, "pause", function() {
                        r.timeoutId && !r.completed && (r.elapsed += Date.now() - r.resumedAt, clearTimeout(r.timeoutId), r.resumedAt = 0, delete r.timeoutId)
                    }), b()(this, "setDuration", function(e) {
                        e !== r.duration && (r.duration = e, r.timeoutId && (r.pause(), r.resume()))
                    }), this.resumedAt = 0, this.elapsed = 0, this.duration = t, this.completed = !1, this.onComplete = n
                },
                E = function(e) {
                    function t(e) {
                        var n;
                        return o()(this, t), n = s()(this, u()(t).call(this, e)), b()(m()(n), "timer", void 0), b()(m()(n), "onComplete", function() {
                            n.props.onComplete()
                        }), n.timer = new x(e.duration, n.onComplete), n
                    }
                    return p()(t, e), a()(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.timer.resume()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.timer.pause()
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            e.duration !== this.props.duration && this.timer.setDuration(e.duration)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.timer,
                                t = this.props.children,
                                n = t && t(e);
                            return n || null
                        }
                    }]), t
                }(h.Component),
                w = n("./src/styles/zIndex.ts");
            n.d(t, "a", function() {
                return O
            });
            var O = function(e) {
                function t() {
                    var e, n;
                    o()(this, t);
                    for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                    return n = s()(this, (e = u()(t)).call.apply(e, [this].concat(i))), b()(m()(n), "ref", void 0), b()(m()(n), "timer", void 0), b()(m()(n), "onMouseEnter", function() {
                        n.timer && n.timer.pause()
                    }), b()(m()(n), "onMouseLeave", function() {
                        n.timer && n.timer.resume()
                    }), n
                }
                return p()(t, e), a()(t, [{
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.children,
                            r = t.container,
                            o = t.duration,
                            i = t.onComplete,
                            a = t.rules,
                            c = t.zIndex,
                            s = h.createElement(y.a, {
                                container: r
                            }, h.createElement(v.L, null, function(t) {
                                return h.createElement("div", {
                                    className: t([a, {
                                        zIndex: c
                                    }]),
                                    ref: function(t) {
                                        return e.ref = t
                                    },
                                    onMouseEnter: e.onMouseEnter,
                                    onMouseLeave: e.onMouseLeave
                                }, n)
                            }));
                        return o && i ? h.createElement(E, {
                            duration: o,
                            onComplete: i
                        }, function(t) {
                            return e.timer = t, s
                        }) : s
                    }
                }]), t
            }(h.Component);
            b()(O, "defaultProps", {
                zIndex: w.a.floating
            })
        },
        "./src/framework/design-system/components/portal/PopoverPortal.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return w
            });
            var r = n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/createClass.js"),
                a = n.n(i),
                c = n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),
                s = n.n(c),
                l = n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
                u = n.n(l),
                d = n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),
                m = n.n(d),
                f = n("./node_modules/@babel/runtime/helpers/inherits.js"),
                p = n.n(f),
                g = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                b = n.n(g),
                h = n("./node_modules/react/index.js"),
                v = n("./src/framework/design-system/components/index.ts"),
                y = n("./src/framework/design-system/components/portal/Portal.tsx"),
                x = n("./src/styles/zIndex.ts"),
                E = function(e, t) {
                    return function(n) {
                        return {
                            position: "absolute",
                            top: "0",
                            bottom: e ? "unset" : "0",
                            left: "0",
                            right: e ? "unset" : "0",
                            zIndex: t || x.a.metabar,
                            ":focus": {
                                outline: "none"
                            }
                        }
                    }
                },
                w = function(e) {
                    function t() {
                        var e, n;
                        o()(this, t);
                        for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                        return n = s()(this, (e = u()(t)).call.apply(e, [this].concat(i))), b()(m()(n), "ref", void 0), n
                    }
                    return p()(t, e), a()(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.children,
                                n = e.customZIndex,
                                r = e.disableOverlay,
                                o = e.onClick,
                                i = e.onKeyDown;
                            return h.createElement(y.a, null, h.createElement(v.L, null, function(e) {
                                return h.createElement("div", {
                                    className: e(E(r, n)),
                                    onClick: o,
                                    onKeyDown: i,
                                    tabIndex: "-1"
                                }, t)
                            }))
                        }
                    }]), t
                }(h.Component);
            b()(w, "defaultProps", {
                onClick: function() {
                    return null
                },
                onKeyDown: function() {
                    return null
                }
            })
        },
        "./src/framework/design-system/components/portal/Portal.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return x
            });
            var r = n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/createClass.js"),
                a = n.n(i),
                c = n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),
                s = n.n(c),
                l = n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
                u = n.n(l),
                d = n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),
                m = n.n(d),
                f = n("./node_modules/@babel/runtime/helpers/inherits.js"),
                p = n.n(f),
                g = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                b = n.n(g),
                h = n("./node_modules/react/index.js"),
                v = n("./node_modules/@hot-loader/react-dom/index.js"),
                y = n.n(v),
                x = (n("./src/log/index.ts"), function(e) {
                    function t(e) {
                        var n;
                        return o()(this, t), n = s()(this, u()(t).call(this, e)), b()(m()(n), "portalEl", void 0), n.portalEl = document.createElement("div"), n
                    }
                    return p()(t, e), a()(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.container;
                            e && e.appendChild(this.portalEl)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.props.container;
                            e && e.removeChild(this.portalEl)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            0
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return y.a.createPortal(this.props.children, this.portalEl)
                        }
                    }]), t
                }(h.Component));
            b()(x, "defaultProps", {
                container: "undefined" == typeof document ? null : document.body
            })
        },
        "./src/framework/design-system/components/portal/ui/Toast.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/createClass.js"),
                a = n.n(i),
                c = n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),
                s = n.n(c),
                l = n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
                u = n.n(l),
                d = n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),
                m = n.n(d),
                f = n("./node_modules/@babel/runtime/helpers/inherits.js"),
                p = n.n(f),
                g = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                b = n.n(g),
                h = n("./node_modules/react/index.js"),
                v = n("./src/framework/design-system/components/index.ts"),
                y = n("./src/framework/design-system/components/portal/FloatingPortal.tsx"),
                x = n("./src/svg/x-25px.svg");

            function E(e) {
                var t = e.children,
                    n = e.hide;
                return h.createElement(v.b, {
                    display: "flex",
                    alignItems: "center"
                }, h.createElement(v.b, {
                    flexGrow: "1",
                    flexBasis: "0",
                    paddingLeft: "4px",
                    paddingRight: "4px"
                }, t), h.createElement(v.b, {
                    paddingLeft: "16px"
                }, h.createElement(v.d, null, h.createElement(v.u, {
                    onClick: n,
                    display: "block"
                }, h.createElement(v.b, {
                    tag: x.a
                })))))
            }
            var w = n("./src/components/privacy/EuPrivacyBannerLoader.tsx"),
                O = n("./node_modules/react-redux/es/index.js"),
                j = n("./src/framework/design-system/util/style/responsiveStyles.ts"),
                _ = n("./src/framework/reporter/index.ts"),
                k = n("./src/util/routes.ts"),
                S = function(e) {
                    return Object(j.a)(e, {
                        maxWidth: "none",
                        width: {
                            xs: "auto",
                            sm: "auto",
                            md: "640px",
                            lg: "640px",
                            xl: "640px"
                        },
                        left: {
                            xs: "initial",
                            sm: "initial",
                            md: "50%",
                            lg: "50%",
                            xl: "50%"
                        },
                        transform: {
                            xs: "none",
                            sm: "none",
                            md: "translateX(-50%)",
                            lg: "translateX(-50%)",
                            xl: "translateX(-50%)"
                        },
                        margin: {
                            xs: "0 8px",
                            sm: "0 8px",
                            md: "0",
                            lg: "0",
                            xl: "0"
                        },
                        backgroundColor: e.baseColor.overlay.dark,
                        padding: {
                            xs: "8px 0 8px 12px",
                            sm: "8px 0 8px 12px",
                            md: "12px 0 12px 24px",
                            lg: "12px 0 12px 24px",
                            xl: "12px 0 12px 24px"
                        }
                    })
                },
                C = Object(O.c)(function(e) {
                    return {
                        productName: e.config.productName
                    }
                })(function(e) {
                    e.children;
                    var t = e.hide,
                        n = e.productName,
                        r = Object(_.c)();
                    return h.useEffect(function() {
                        r.event("privacyBanner.shown", {})
                    }, []), h.createElement(v.b, {
                        display: "flex",
                        justifyContent: "space-between"
                    }, h.createElement(v.A, {
                        ui: "SMALL"
                    }, h.createElement(v.a, null, "To make ", n, " work, we log user data. By using ", n, ", you agree to our", " ", h.createElement(v.u, {
                        href: Object(k.eb)(),
                        inline: !0,
                        linkStyle: "OBVIOUS",
                        target: "_blank"
                    }, "Privacy Policy"), ", including cookie policy.")), h.createElement(v.b, {
                        padding: "0 12px 12px",
                        sm: {
                            padding: "0 8px 8px"
                        }
                    }, h.createElement(v.g, {
                        onClick: function() {
                            t(), w.a.set(w.c, 1), r.event("privacyBanner.accepted", {})
                        },
                        isPositionAbsolute: !1,
                        size: "SMALL"
                    })))
                }),
                P = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                I = n.n(P),
                L = n("./node_modules/react-apollo/react-apollo.esm.js"),
                T = n("./node_modules/graphql-tag/src/index.js"),
                A = n.n(T),
                N = n("./src/store/actions/navigation.ts"),
                R = n("./src/components/session/WithViewer.tsx");

            function D() {
                var e = I()(["\n  mutation SendVerificationEmailMutation {\n    sendVerificationEmail\n  }\n"]);
                return D = function() {
                    return e
                }, e
            }
            var U = A()(D()),
                M = Object(O.c)()(function(e) {
                    var t = e.children,
                        n = e.dispatch;
                    return h.createElement(R.a, null, function(e) {
                        return h.createElement(L.b, {
                            mutation: U,
                            onCompleted: function(e) {
                                n(Object(N.j)({
                                    duration: "FOREVER",
                                    message: "",
                                    toastStyle: "SENT_VERIFICATION_EMAIL"
                                }))
                            }
                        }, function(e) {
                            return t({
                                mutate: e
                            })
                        })
                    })
                }),
                B = n("./src/framework/design-system/type/Detail.tsx"),
                H = function(e) {
                    return Object(j.a)(e, {
                        margin: {
                            xs: "0",
                            sm: "0",
                            md: "0",
                            lg: "0",
                            xl: "0"
                        },
                        left: {
                            xs: "50%",
                            sm: "50%",
                            md: "50%",
                            lg: "50%",
                            xl: "50%"
                        },
                        maxWidth: "none",
                        minWidth: "300px",
                        padding: "12px 20px",
                        transform: {
                            xs: "translateX(-50%)",
                            sm: "translateX(-50%)",
                            md: "translateX(-50%)",
                            lg: "translateX(-50%)",
                            xl: "translateX(-50%)"
                        },
                        width: {
                            xs: "auto",
                            sm: "420px",
                            md: "420px",
                            lg: "420px",
                            xl: "420px"
                        }
                    })
                },
                F = function() {
                    var e = Object(_.c)();
                    return h.useEffect(function() {
                        e.event("user.sendVerificationEmailButterShown", {})
                    }, []), h.createElement(v.b, {
                        display: "flex",
                        alignItems: "center",
                        xs: {
                            flexDirection: "column"
                        }
                    }, h.createElement(v.b, {
                        marginRight: "5px",
                        xs: {
                            marginRight: "0"
                        }
                    }, h.createElement(B.a, {
                        scale: "M"
                    }, "Complete your account registration.")), h.createElement(B.a, {
                        scale: "M"
                    }, h.createElement(M, null, function(t) {
                        var n = t.mutate;
                        return h.createElement(v.u, {
                            onClick: function() {
                                e.event("user.sendVerificationEmailButterClicked", {}), n()
                            },
                            linkStyle: "OBVIOUS"
                        }, "Send verification email")
                    })))
                },
                z = {
                    whiteSpace: "nowrap",
                    minWidth: "93px"
                },
                q = function(e) {
                    return Object(j.a)(e, {
                        width: {
                            xs: "auto",
                            sm: "auto",
                            md: "auto",
                            lg: "auto",
                            xl: "auto"
                        }
                    })
                },
                W = function() {
                    return h.createElement(R.a, null, function(e) {
                        return h.createElement(v.b, {
                            textAlign: "center"
                        }, h.createElement(v.b, {
                            marginRight: "5px",
                            xs: {
                                marginRight: "0"
                            },
                            display: "inline-block"
                        }, h.createElement(B.a, {
                            scale: "M"
                        }, "Verification email sent to ", e && e.unverifiedEmail, ".")), h.createElement(v.b, {
                            display: "inline-block"
                        }, h.createElement(B.a, {
                            scale: "M"
                        }, h.createElement(v.u, {
                            href: Object(k.Ub)(),
                            linkStyle: "OBVIOUS",
                            target: "_blank"
                        }, h.createElement("span", {
                            style: z
                        }, "Change email")))))
                    })
                },
                V = function(e) {
                    return Object(j.a)(e, {
                        maxWidth: "none",
                        width: {
                            xs: "auto",
                            sm: "auto",
                            md: "640px",
                            lg: "640px",
                            xl: "640px"
                        },
                        left: {
                            xs: "initial",
                            sm: "initial",
                            md: "50%",
                            lg: "50%",
                            xl: "50%"
                        },
                        transform: {
                            xs: "none",
                            sm: "none",
                            md: "translateX(-50%)",
                            lg: "translateX(-50%)",
                            xl: "translateX(-50%)"
                        },
                        margin: {
                            xs: "0 8px",
                            sm: "0 8px",
                            md: "0",
                            lg: "0",
                            xl: "0"
                        },
                        backgroundColor: e.baseColor.overlay.dark,
                        padding: {
                            xs: "8px 0 8px 12px",
                            sm: "8px 0 8px 12px",
                            md: "12px 0 12px 24px",
                            lg: "12px 0 12px 24px",
                            xl: "12px 0 12px 24px"
                        }
                    })
                },
                G = Object(O.c)()(function() {
                    return h.createElement(v.b, {
                        display: "flex",
                        justifyContent: "space-between"
                    }, h.createElement(v.A, {
                        ui: "SMALL"
                    }, h.createElement(v.a, null, "The following content is under review as a potential violation of our", " ", h.createElement(v.u, {
                        href: "https://medium.com/policy/medium-rules-30e5502c4eb4",
                        inline: !0,
                        linkStyle: "OBVIOUS",
                        target: "_blank"
                    }, "rules."))))
                }),
                K = n("./src/framework/design-system/util/style/converters.ts"),
                X = n("./src/styles/zIndex.ts"),
                Y = n("./src/util/theme.ts");
            n.d(t, "a", function() {
                return Z
            });
            var Q = function(e) {
                    return {
                        position: "fixed",
                        top: "0",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100%",
                        maxWidth: "".concat(Object(K.a)(e, 8), "px"),
                        padding: "12px 24px",
                        borderRadius: "0 0 ".concat(e.borderRadius.regular, "px ").concat(e.borderRadius.regular, "px"),
                        backgroundColor: e.backgroundColor,
                        boxShadow: "0 0 2px ".concat(e.baseColor.border.light)
                    }
                },
                $ = function(e, t) {
                    switch (t) {
                        case "ERROR":
                            return Object(Y.f)(e);
                        case "MESSAGE":
                        case "EU_PRIVACY_BANNER":
                        default:
                            return e
                    }
                },
                J = function(e) {
                    switch (e) {
                        case "EU_PRIVACY_BANNER":
                            return [Q, S];
                        case "VERIFY_EMAIL":
                            return [Q, H];
                        case "SENT_VERIFICATION_EMAIL":
                            return [Q, H, q];
                        case "LIMITED_STATE_BANNER":
                            return [Q, V];
                        default:
                            return [Q]
                    }
                },
                Z = function(e) {
                    function t() {
                        var e, n;
                        o()(this, t);
                        for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                        return n = s()(this, (e = u()(t)).call.apply(e, [this].concat(i))), b()(m()(n), "ref", void 0), n
                    }
                    return p()(t, e), a()(t, [{
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                n = t.children,
                                r = t.duration,
                                o = t.hide,
                                i = t.isVisible,
                                a = t.toastStyle;
                            if (!i) return null;
                            switch (a) {
                                case "EU_PRIVACY_BANNER":
                                    e = C;
                                    break;
                                case "VERIFY_EMAIL":
                                    e = F;
                                    break;
                                case "SENT_VERIFICATION_EMAIL":
                                    e = W;
                                    break;
                                case "LIMITED_STATE_BANNER":
                                    e = G;
                                    break;
                                case "ERROR":
                                case "MESSAGE":
                                default:
                                    e = E
                            }
                            return h.createElement(v.N, null, function(t) {
                                return h.createElement(v.H, {
                                    theme: $(t, a)
                                }, h.createElement(y.a, {
                                    duration: r,
                                    onComplete: o,
                                    rules: J(a),
                                    zIndex: X.a.toast
                                }, h.createElement("div", null, h.createElement("div", {
                                    className: "branch-journeys-top"
                                }, h.createElement(e, {
                                    hide: o
                                }, n || null)))))
                            })
                        }
                    }]), t
                }(h.Component);
            b()(Z, "defaultProps", {
                toastStyle: "MESSAGE"
            })
        },
        "./src/framework/design-system/components/util/VisibilityController.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return v
            });
            var r = n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/createClass.js"),
                a = n.n(i),
                c = n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),
                s = n.n(c),
                l = n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
                u = n.n(l),
                d = n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),
                m = n.n(d),
                f = n("./node_modules/@babel/runtime/helpers/inherits.js"),
                p = n.n(f),
                g = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                b = n.n(g),
                h = n("./node_modules/react/index.js"),
                v = function(e) {
                    function t(e) {
                        var n;
                        return o()(this, t), n = s()(this, u()(t).call(this, e)), b()(m()(n), "show", function() {
                            n.setState({
                                isVisible: !0
                            })
                        }), b()(m()(n), "hide", function() {
                            n.setState({
                                isVisible: !1
                            })
                        }), b()(m()(n), "toggle", function() {
                            return n.state.isVisible ? n.hide() : n.show()
                        }), n.state = {
                            isVisible: e.initialVisibility || !1
                        }, n
                    }
                    return p()(t, e), a()(t, [{
                        key: "render",
                        value: function() {
                            var e = this.show,
                                t = this.hide,
                                n = this.toggle,
                                r = this.state.isVisible;
                            return this.props.children({
                                isVisible: r,
                                show: e,
                                hide: t,
                                toggle: n
                            })
                        }
                    }]), t
                }(h.Component)
        },
        "./src/framework/design-system/type/Detail.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./src/framework/design-system/type/Type.tsx"),
                i = n("./src/framework/style/index.ts"),
                a = function(e) {
                    return function(t) {
                        return {
                            color: {
                                DARKER: t.baseColor.text.normal,
                                LIGHTER: t.baseColor.text.lighter,
                                ACCENT: t.accentColor.text.normal,
                                ERROR: t.errorColor
                            }[e]
                        }
                    }
                },
                c = function(e) {
                    var t = e.scale,
                        n = e.color,
                        c = void 0 === n ? "LIGHTER" : n,
                        s = e.children,
                        l = e.tag,
                        u = e.clamp,
                        d = Object(i.useTheme)().newFonts.detail;
                    return l || (l = "h4"), r.createElement(o.a, {
                        fontConfig: d,
                        scale: t,
                        tag: l,
                        additionalRules: a(c),
                        clamp: u
                    }, s)
                }
        },
        "./src/framework/design-system/type/Heading.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./src/framework/design-system/type/Type.tsx"),
                i = n("./src/framework/style/index.ts"),
                a = function(e) {
                    return {
                        color: e.baseColor.text.normal
                    }
                },
                c = function(e) {
                    var t = e.scale,
                        n = e.children,
                        c = e.tag,
                        s = Object(i.useTheme)().newFonts.heading;
                    return c || (c = "h2"), r.createElement(o.a, {
                        fontConfig: s,
                        scale: t,
                        tag: c,
                        additionalRules: a
                    }, n)
                }
        },
        "./src/framework/design-system/type/Overline.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./src/framework/design-system/type/Type.tsx"),
                i = n("./src/framework/style/index.ts"),
                a = function(e) {
                    return function(t) {
                        return {
                            color: {
                                LIGHTER: t.baseColor.text.lighter,
                                ACCENT: t.accentColor.text.normal
                            }[e],
                            textTransform: "uppercase",
                            letterSpacing: "0.05em"
                        }
                    }
                },
                c = function(e) {
                    var t = e.children,
                        n = e.color,
                        c = void 0 === n ? "LIGHTER" : n,
                        s = e.tag,
                        l = Object(i.useTheme)().newFonts.overline;
                    return s || (s = "p"), r.createElement(o.a, {
                        fontConfig: l,
                        scale: "M",
                        tag: s,
                        additionalRules: a(c)
                    }, t)
                }
        },
        "./src/framework/design-system/type/Title.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./src/framework/design-system/type/Type.tsx"),
                i = n("./src/framework/style/index.ts"),
                a = function(e) {
                    return {
                        color: e.baseColor.text.normal
                    }
                },
                c = function(e) {
                    var t = e.scale,
                        n = e.children,
                        c = e.tag,
                        s = Object(i.useTheme)().newFonts.title;
                    return c || (c = "h2"), r.createElement(o.a, {
                        fontConfig: s,
                        scale: t,
                        tag: c,
                        additionalRules: a
                    }, n)
                }
        },
        "./src/framework/design-system/type/Type.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./src/framework/style/index.ts"),
                i = n("./src/framework/design-system/util/style/responsiveStyles.ts"),
                a = n("./src/framework/design-system/util/type/createClampRule.ts"),
                c = function(e) {
                    var t = e.fontConfig,
                        n = e.scale,
                        c = e.tag,
                        s = e.children,
                        l = e.additionalRules,
                        u = e.clamp,
                        d = Object(o.useCx)(),
                        m = c,
                        f = {
                            fontFamily: t.family,
                            fontWeight: t.weight
                        },
                        p = function(e) {
                            var t = e.scale,
                                n = e.fontConfig;
                            return function(e) {
                                return Object(i.a)(e, {
                                    fontSize: Object(i.b)(t, function(e) {
                                        return "".concat(n.fontSize[e], "px")
                                    }),
                                    lineHeight: Object(i.b)(t, function(e) {
                                        return "".concat(n.lineHeight[e], "px")
                                    })
                                })
                            }
                        }({
                            fontConfig: t,
                            scale: n
                        }),
                        g = Object(i.d)(n, function(e) {
                            return t.lineHeight[e]
                        }),
                        b = u ? Object(a.a)({
                            clamp: u,
                            lineHeight: g
                        }) : void 0;
                    return r.createElement(m, {
                        className: d([f, p, b, l])
                    }, s)
                }
        },
        "./src/framework/design-system/type/index.ts": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/react/index.js"),
                o = n("./src/framework/design-system/type/Type.tsx"),
                i = n("./src/framework/style/index.ts"),
                a = n("./src/framework/design-system/type/Detail.tsx"),
                c = n("./src/framework/design-system/type/Heading.tsx"),
                s = function(e) {
                    return {
                        color: e.baseColor.text.normal
                    }
                },
                l = function(e) {
                    var t = e.scale,
                        n = e.children,
                        a = e.tag,
                        c = Object(i.useTheme)().newFonts.marketing;
                    return a || (a = "h2"), r.createElement(o.a, {
                        fontConfig: c,
                        scale: t,
                        tag: a,
                        additionalRules: s
                    }, n)
                },
                u = n("./src/framework/design-system/type/Overline.tsx"),
                d = function(e) {
                    return {
                        color: e.baseColor.text.lighter
                    }
                },
                m = function(e) {
                    var t = e.scale,
                        n = e.children,
                        a = e.tag,
                        c = Object(i.useTheme)().newFonts.pullQuote;
                    return a || (a = "blockquote"), r.createElement(o.a, {
                        fontConfig: c,
                        scale: t,
                        tag: a,
                        additionalRules: d
                    }, n)
                },
                f = function(e) {
                    return {
                        color: e.baseColor.text.lighter
                    }
                },
                p = function(e) {
                    var t = e.scale,
                        n = e.children,
                        a = e.tag,
                        c = e.clamp,
                        s = Object(i.useTheme)().newFonts.subtitle;
                    return a || (a = "h3"), r.createElement(o.a, {
                        fontConfig: s,
                        scale: t,
                        tag: a,
                        additionalRules: f,
                        clamp: c
                    }, n)
                },
                g = n("./src/framework/design-system/type/Title.tsx");
            n.d(t, "a", function() {
                return a.a
            }), n.d(t, "b", function() {
                return c.a
            }), n.d(t, "c", function() {
                return l
            }), n.d(t, "d", function() {
                return u.a
            }), n.d(t, "e", function() {
                return m
            }), n.d(t, "f", function() {
                return p
            }), n.d(t, "g", function() {
                return g.a
            })
        },
        "./src/framework/design-system/util/events.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            });
            var r = function(e, t) {
                    t.target === t.currentTarget && e(t)
                },
                o = function(e, t) {
                    27 === t.keyCode && e(t)
                }
        },
        "./src/framework/design-system/util/fonts.ts": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/createClass.js"),
                a = n.n(i),
                c = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                s = n.n(c),
                l = function() {
                    function e(t) {
                        var n = this,
                            r = t.family,
                            i = t.style,
                            a = t.weight,
                            c = t.metrics,
                            l = t.lineHeightToFontSize,
                            u = t.fontSizeToLetterSpacing,
                            d = void 0 === u ? function() {
                                return 0
                            } : u;
                        o()(this, e), s()(this, "family", void 0), s()(this, "style", void 0), s()(this, "weight", void 0), s()(this, "metrics", void 0), s()(this, "lineHeightToFontSize", void 0), s()(this, "fontSizeToLetterSpacing", void 0), this.family = r, this.style = i, this.weight = a, this.metrics = c, this.lineHeightToFontSize = l || function(e) {
                            return e / (n.ascender() - n.descender())
                        }, this.fontSizeToLetterSpacing = d
                    }
                    return a()(e, [{
                        key: "xHeight",
                        value: function() {
                            var e = this.metrics,
                                t = e.xHeight;
                            return t / e.unitsPerEm
                        }
                    }, {
                        key: "capHeight",
                        value: function() {
                            var e = this.metrics,
                                t = e.capHeight;
                            return t / e.unitsPerEm
                        }
                    }, {
                        key: "ascender",
                        value: function() {
                            var e = this.metrics,
                                t = e.ascender;
                            return t / e.unitsPerEm
                        }
                    }, {
                        key: "descender",
                        value: function() {
                            var e = this.metrics,
                                t = e.descender;
                            return t / e.unitsPerEm
                        }
                    }]), e
                }();

            function u(e) {
                var t = e.initialRatio,
                    n = e.finalRatio,
                    r = e.lowerBound,
                    o = e.upperBound,
                    i = e.easing,
                    a = void 0 === i ? function(e) {
                        return e
                    } : i;
                return function(e) {
                    var i = a(Math.min(1, Math.max(0, e - r) / (o - r)));
                    return e * (t + (n - t) * i)
                }
            }
            var d = n("./src/styles/font.ts");
            n.d(t, "a", function() {
                return m
            }), n.d(t, "b", function() {
                return f
            }), n.d(t, "c", function() {
                return p
            }), n.d(t, "d", function() {
                return g
            });
            var m = new l({
                    family: d.p,
                    weight: 500,
                    style: "normal",
                    metrics: {
                        unitsPerEm: 1e3,
                        xHeight: 453,
                        capHeight: 625,
                        ascender: 900,
                        descender: -300
                    }
                }),
                f = new l({
                    family: d.e,
                    weight: 600,
                    style: "normal",
                    metrics: {
                        unitsPerEm: 1e3,
                        xHeight: 453,
                        capHeight: 625,
                        ascender: 900,
                        descender: -300
                    },
                    lineHeightToFontSize: u({
                        initialRatio: .9,
                        finalRatio: 1,
                        lowerBound: 32,
                        upperBound: 128
                    }),
                    fontSizeToLetterSpacing: function(e) {
                        return Math.min(-1 * (e - 14) / 24, 0)
                    }
                }),
                p = new l({
                    family: d.e,
                    weight: 400,
                    style: "normal",
                    metrics: {
                        unitsPerEm: 1e3,
                        xHeight: 453,
                        capHeight: 625,
                        ascender: 900,
                        descender: -300
                    },
                    lineHeightToFontSize: u({
                        initialRatio: .79,
                        finalRatio: .85,
                        lowerBound: 28,
                        upperBound: 96
                    })
                }),
                g = new l({
                    family: d.q,
                    weight: 500,
                    style: "normal",
                    metrics: {
                        unitsPerEm: 1e3,
                        xHeight: 453,
                        capHeight: 625,
                        ascender: 900,
                        descender: -300
                    }
                })
        },
        "./src/framework/design-system/util/style/converters.ts": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return a
            });
            var r = n("./node_modules/lodash/round.js"),
                o = n.n(r),
                i = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return "".concat(o()(e, t), "px")
                },
                a = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = (e.grid.columnWidth + e.grid.gutterWidth) * t - e.grid.gutterWidth;
                    return n && (r += 2 * e.grid.gutterWidth), r
                }
        },
        "./src/framework/design-system/util/style/responsiveStyles.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return m
            }), n.d(t, "d", function() {
                return f
            }), n.d(t, "b", function() {
                return p
            }), n.d(t, "c", function() {
                return g
            });
            var r = n("./node_modules/@babel/runtime/helpers/typeof.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                a = n.n(i),
                c = n("./node_modules/lodash/isPlainObject.js"),
                s = n.n(c),
                l = n("./src/styles/newBreakpoints.ts"),
                u = new Set(["xs", "sm", "md", "lg", "xl"]),
                d = function(e) {
                    if (!s()(e)) return !1;
                    var t = Object.keys(e);
                    return t.length === u.size && t.every(function(e) {
                        return u.has(e)
                    })
                },
                m = function(e, t) {
                    for (var n = {}, r = 0, i = Object.entries(t); r < i.length; r++) {
                        var c = a()(i[r], 2),
                            s = c[0],
                            u = c[1];
                        if (d(u))
                            for (var m = 0, f = Object.entries(u); m < f.length; m++) {
                                var p = a()(f[m], 2),
                                    g = p[0],
                                    b = p[1],
                                    h = l[g](e);
                                if (n[h] = n[h] || {}, "object" === o()(n[h]) && n[h]) n[h][s] = b
                            } else n[s] = u
                    }
                    return n
                },
                f = function(e, t) {
                    if (!d(e)) return t(e);
                    for (var n = {}, r = 0, o = Object.entries(e); r < o.length; r++) {
                        var i = a()(o[r], 2),
                            c = i[0],
                            s = i[1];
                        n[c] = t(s)
                    }
                    return n
                },
                p = function(e, t) {
                    return f(e, t)
                };

            function g(e, t) {
                if (e.some(d)) {
                    var n = {};
                    return u.forEach(function(r) {
                        var o = e.map(function(e) {
                            return d(e) ? e[r] : e
                        });
                        n[r] = t(o)
                    }), n
                }
                return t(e)
            }
        },
        "./src/framework/design-system/util/type/createClampRule.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                o = n.n(r),
                i = n("./src/framework/design-system/util/style/responsiveStyles.ts"),
                a = function(e) {
                    var t = e.clamp,
                        n = e.lineHeight;
                    return function(e) {
                        return Object(i.a)(e, {
                            overflow: "hidden",
                            maxHeight: Object(i.c)([t, n], function(e) {
                                var t = o()(e, 2),
                                    n = t[0],
                                    r = t[1];
                                return "".concat(r * n, "px")
                            }),
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: Object(i.b)(t, function(e) {
                                return e
                            }),
                            WebkitBoxOrient: "vertical"
                        })
                    }
                }
        },
        "./src/framework/design-system/util/type/headingSizeRule.ts": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "a", function() {
                return u
            });
            var r = n("./node_modules/lodash/assign.js"),
                o = n.n(r),
                i = n("./src/framework/design-system/util/type/toRule.ts"),
                a = n("./src/framework/design-system/components/Body.tsx"),
                c = n("./src/framework/design-system/util/fonts.ts"),
                s = function(e, t, n) {
                    return Object(i.a)(function(r) {
                        return {
                            font: t(r),
                            lineHeight: "h1" === e ? Object(a.a)(r) + r.grid.yStep * ("LARGE" === r.scale.ui ? 5 : 4) : "h2" === e ? Object(a.a)(r) + 2 * r.grid.yStep : "h3" === e ? Object(a.a)(r) + r.grid.yStep : Object(a.a)(r),
                            clamp: n,
                            display: "block"
                        }
                    })
                },
                l = function(e) {
                    var t = c.d,
                        n = {
                            fontFamily: t.family,
                            fontWeight: t.weight,
                            fontStyle: t.style
                        };
                    return o()(n, function(e) {
                        switch (e) {
                            case "h1":
                                return {
                                    fontSize: "52px",
                                    lineHeight: "60px",
                                    letterSpacing: "0em"
                                };
                            case "h2":
                                return {
                                    fontSize: "42px",
                                    lineHeight: "48px",
                                    letterSpacing: "0em"
                                };
                            case "h3":
                                return {
                                    fontSize: "32px",
                                    lineHeight: "36px",
                                    letterSpacing: "0em"
                                };
                            case "h4":
                            default:
                                return {
                                    fontSize: "24px",
                                    lineHeight: "28px",
                                    letterSpacing: "0em"
                                }
                        }
                    }(e))
                },
                u = function(e) {
                    var t = c.a,
                        n = {
                            fontFamily: t.family,
                            fontWeight: t.weight,
                            fontStyle: t.style
                        };
                    return o()(n, function(e) {
                        switch (e) {
                            case "h1":
                                return {
                                    fontSize: "56px",
                                    lineHeight: "64px",
                                    letterSpacing: "0em"
                                };
                            case "h2":
                                return {
                                    fontSize: "44px",
                                    lineHeight: "49px",
                                    letterSpacing: "0em"
                                };
                            case "h3":
                                return {
                                    fontSize: "32px",
                                    lineHeight: "36px",
                                    letterSpacing: "0em"
                                };
                            case "h4":
                            default:
                                return {
                                    fontSize: "24px",
                                    lineHeight: "32px",
                                    letterSpacing: "0em"
                                }
                        }
                    }(e))
                }
        },
        "./src/framework/design-system/util/type/toRule.ts": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                o = n.n(r),
                i = n("./node_modules/lodash/round.js"),
                a = n.n(i),
                c = n("./src/framework/design-system/util/type/createClampRule.ts");

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                return function(t) {
                    var n = e(t),
                        r = n.clamp,
                        i = n.breakWord,
                        l = n.font,
                        u = n.display,
                        d = function(e, t) {
                            var n = t.lineHeight,
                                r = t.fontSize,
                                o = t.letterSpacing;
                            return {
                                lineHeight: n,
                                fontSize: r = void 0 === r ? e.lineHeightToFontSize(n) : r,
                                letterSpacing: o = void 0 === o ? e.fontSizeToLetterSpacing(r) : o
                            }
                        }(l, n),
                        m = d.lineHeight,
                        f = d.fontSize,
                        p = d.letterSpacing,
                        g = r ? Object(c.a)({
                            clamp: r,
                            lineHeight: m
                        })(t) : {},
                        b = {};
                    return i && (b = {
                            wordBreak: "break-word",
                            overflowWrap: "break-word"
                        }),
                        function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? s(n, !0).forEach(function(t) {
                                    o()(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(n).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({
                            fontFamily: l.family,
                            fontWeight: l.weight,
                            fontStyle: l.style,
                            lineHeight: "".concat(a()(m, 2), "px"),
                            fontSize: "".concat(a()(f, 2), "px"),
                            letterSpacing: "".concat(a()(p, 2), "px")
                        }, u && {
                            display: u
                        }, {}, g, {}, b)
                }
            }
            n.d(t, "a", function() {
                return l
            })
        },
        "./src/framework/reporter/ReporterContext.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "c", function() {
                return l
            }), n.d(t, "b", function() {
                return u
            });
            var r = n("./node_modules/@babel/runtime/helpers/extends.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./src/util/invariant.ts"),
                c = i.createContext(null),
                s = function(e) {
                    return i.createElement(c.Provider, {
                        value: e.reporter
                    }, e.children)
                },
                l = function(e) {
                    return function(t) {
                        return i.createElement(c.Consumer, null, function(n) {
                            return i.createElement(e, o()({}, t, {
                                reporter: n
                            }), t.children)
                        })
                    }
                },
                u = function() {
                    var e = i.useContext(c);
                    return Object(a.a)(!!e, "Expected reporter not to be null"), e
                }
        },
        "./src/framework/reporter/index.ts": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/createClass.js"),
                a = n.n(i),
                c = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                s = n.n(c),
                l = n("./node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
                u = n.n(l),
                d = n("./src/util/routes.ts"),
                m = function() {
                    return Date.now().toString(36) + Math.round(1e16 * Math.random()).toString(36)
                };
            var f = n("./node_modules/@babel/runtime/regenerator/index.js"),
                p = n.n(f),
                g = n("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),
                b = n.n(g),
                h = n("./src/util/LocalStorage.ts");

            function v(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(n, !0).forEach(function(t) {
                        s()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var x = "Lite_BatchReporter",
                E = function() {
                    function e(t) {
                        var n = this,
                            r = t.userId,
                            i = t.authDomain,
                            a = t.reduxStore;
                        o()(this, e), s()(this, "_localStorage", void 0), s()(this, "_fetchPromise", void 0), s()(this, "_sending", void 0), s()(this, "_userId", void 0), s()(this, "_authDomain", void 0), s()(this, "_reduxStore", void 0), this._localStorage = new h.a(x), this._userId = r, this._authDomain = i, this._reduxStore = a, window.addEventListener("beforeunload", function() {
                            n.flush()
                        })
                    }
                    return a()(e, [{
                        key: "event",
                        value: function(e, t) {
                            return this._send({
                                key: e,
                                data: t,
                                type: "e"
                            })
                        }
                    }, {
                        key: "flush",
                        value: function() {
                            return this._sendNow({
                                beforeUnload: !0
                            })
                        }
                    }, {
                        key: "_send",
                        value: function() {
                            var e = b()(p.a.mark(function e(t) {
                                var n, r, o = this;
                                return p.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (n = this._getCommonData(), t.data = y({}, t.data || {}, {}, n), r = m(), this._localStorage.set(r, y({}, t, {
                                                    timestamp: Date.now(),
                                                    eventId: r,
                                                    userId: this._userId
                                                })), !this._sending) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.next = 7, this._fetchPromise;
                                        case 7:
                                            return void 0 === this._fetchPromise && (this._fetchPromise = new Promise(function(e) {
                                                return setTimeout(function() {
                                                    return o._sendNow().then(e)
                                                }, 5e3)
                                            })), e.abrupt("return", this._fetchPromise);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "_sendNow",
                        value: function() {
                            var e = this,
                                t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                    beforeUnload: !1
                                }).beforeUnload,
                                n = this._localStorage.getItems(),
                                r = Object.values(n);
                            if (!r) return Promise.resolve();
                            var o = "".concat(this._authDomain || "").concat(Object(d.j)());
                            return this._sending = !0, u()(o, y({
                                credentials: "same-origin",
                                method: "POST",
                                headers: {
                                    "x-xsrf-token": "1",
                                    "content-type": "application/json"
                                },
                                body: JSON.stringify(r)
                            }, t ? {
                                mode: "same-origin",
                                keepalive: !0
                            } : {})).then(function(t) {
                                t.ok && Object.keys(n).forEach(function(t) {
                                    return e._localStorage.remove(t)
                                }), delete e._fetchPromise, e._sending = !1
                            })
                        }
                    }, {
                        key: "_getCommonData",
                        value: function() {
                            var e = this._reduxStore.getState().navigation,
                                t = e.referrer,
                                n = e.referrerSource,
                                r = window ? window.location.href : void 0,
                                o = window ? window.innerWidth : void 0;
                            return {
                                userId: this._userId,
                                service: "lite",
                                location: r,
                                browserWidth: o,
                                referrer: t && encodeURI(t),
                                referrerSource: n
                            }
                        }
                    }]), e
                }(),
                w = n("./src/framework/reporter/ReporterContext.tsx");
            n("./src/framework/reporter/performance.tsx");
            n.d(t, "b", function() {
                return w.a
            }), n.d(t, "d", function() {
                return w.c
            }), n.d(t, "c", function() {
                return w.b
            }), n.d(t, "a", function() {
                return E
            })
        },
        "./src/framework/reporter/performance.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return E
            }), n.d(t, "a", function() {
                return w
            }), n.d(t, "c", function() {
                return O
            });
            var r = n("./node_modules/@babel/runtime/helpers/extends.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                a = n.n(i),
                c = n("./node_modules/@babel/runtime/helpers/createClass.js"),
                s = n.n(c),
                l = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                u = n.n(l),
                d = n("./node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
                m = n.n(d),
                f = n("./node_modules/opentracing/lib/index.js"),
                p = n("./node_modules/react/index.js"),
                g = n("./src/log/index.ts"),
                b = n("./src/util/routes.ts");

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(n, !0).forEach(function(t) {
                        u()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var y = p.createContext(null),
                x = function(e) {
                    for (var t = {}, n = 0, r = Object.keys(e); n < r.length; n++) {
                        var o = r[n],
                            i = e[o];
                        null != i && (t[o] = i.duration)
                    }
                    return t
                },
                E = function() {
                    function e(t) {
                        var n = t.host,
                            r = t.version;
                        a()(this, e), u()(this, "baseURL", void 0), u()(this, "version", void 0), u()(this, "parentSpan", void 0), this.baseURL = n ? "".concat(window.location.protocol, "//").concat(n) : "", this.version = r, this.parentSpan = null
                    }
                    return s()(e, [{
                        key: "reportRender",
                        value: function(e, t) {
                            this._send("render", v({}, e, {
                                version: this.version,
                                service: "lite",
                                metrics: x(t)
                            }))
                        }
                    }, {
                        key: "reportInput",
                        value: function(e, t) {
                            this._send("input", v({}, e, {
                                version: this.version,
                                service: "lite",
                                metrics: x(t)
                            }))
                        }
                    }, {
                        key: "reportClientReady",
                        value: function(e, t) {
                            this._send("client-ready", v({}, e, {
                                version: this.version,
                                service: "lite",
                                metrics: x(t)
                            }))
                        }
                    }, {
                        key: "setParentSpan",
                        value: function(e) {
                            this.parentSpan = e
                        }
                    }, {
                        key: "_send",
                        value: function(e, t) {
                            var n = {
                                tags: u()({
                                    report: e,
                                    "component.version": t.version,
                                    "req.route_name": t.route
                                }, f.Tags.SPAN_KIND, f.Tags.SPAN_KIND_RPC_CLIENT)
                            };
                            null != this.parentSpan && (n.childOf = this.parentSpan);
                            var r = Object(f.globalTracer)().startSpan("client.performance.report", n),
                                o = "".concat(this.baseURL).concat(Object(b.ab)(e));
                            m()(o, {
                                credentials: "same-origin",
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(t)
                            }).then(function(e) {
                                r.setTag(f.Tags.HTTP_STATUS_CODE, e.status), 200 !== e.status && r.setTag(f.Tags.ERROR, "true"), r.finish()
                            }).catch(function(e) {
                                g.a.warn({
                                    err: e
                                }, "Error submitting performance report"), r.setTag(f.Tags.ERROR, "true"), r.log({
                                    error: String(e)
                                }), r.finish()
                            })
                        }
                    }]), e
                }(),
                w = function(e) {
                    return p.createElement(y.Provider, {
                        value: e.reporter
                    }, e.children)
                },
                O = function(e) {
                    return function(t) {
                        return p.createElement(y.Consumer, null, function(n) {
                            return p.createElement(e, o()({}, t, {
                                perf: n
                            }), t.children)
                        })
                    }
                }
        },
        "./src/framework/source/SourceContext.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            }), n.d(t, "d", function() {
                return f
            }), n.d(t, "c", function() {
                return p
            }), n.d(t, "b", function() {
                return b
            }), n.d(t, "f", function() {
                return h
            }), n.d(t, "e", function() {
                return v
            }), n.d(t, "g", function() {
                return y
            }), n.d(t, "h", function() {
                return x
            });
            n("./node_modules/@babel/runtime/helpers/extends.js");
            var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                a = n.n(i),
                c = n("./node_modules/lodash/forIn.js"),
                s = n.n(c),
                l = n("./node_modules/react/index.js");

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var d = {
                    NONE: 1,
                    FEATURED_STORIES: 20,
                    FEATURED_WRITER: 21,
                    MOST_POPULAR_STORIES_IN_TOPIC: 23,
                    READ_NEXT_SIDEBAR: 25,
                    READ_NEXT_HEADER: 26
                },
                m = {
                    name: 1,
                    userId: 2,
                    dimension: 4,
                    postId: 6,
                    index: 10,
                    postFeedReason: 11,
                    topicId: 21,
                    susiEntry: 27,
                    sectionType: 28
                };

            function f(e) {
                var t = [];
                return s()(m, function(n, r) {
                    var o = e[r];
                    null != o && (o = o.toString().replace(/-/g, "_")), t[n - 1] = o
                }), t.join("-")
            }

            function p(e) {
                var t = e.split("-");
                return Object.entries(m).reduce(function(e, n) {
                    var r = a()(n, 2),
                        o = r[0],
                        i = r[1],
                        c = t[Number(i) - 1];
                    return c && (e[o] = function(e, t) {
                        switch (t) {
                            case "index":
                            case "sectionType":
                                return Number(e);
                            default:
                                return e
                        }
                    }(c, o)), e
                }, {})
            }
            var g = l.createContext(null),
                b = function(e) {
                    var t = e.source,
                        n = e.extendSource,
                        r = void 0 !== n && n,
                        i = e.children,
                        a = h();
                    return r && a && (t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? u(n, !0).forEach(function(t) {
                                o()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, a, {}, t)), l.createElement(g.Provider, {
                        value: t
                    }, i)
                },
                h = function() {
                    return l.useContext(g)
                },
                v = function() {
                    var e = l.useContext(g);
                    return e ? f(e) : ""
                },
                y = function() {
                    var e = l.useContext(g);
                    return e && e.name ? e.name : ""
                },
                x = function() {
                    var e = l.useContext(g);
                    return e && e.susiEntry
                }
        },
        "./src/framework/source/index.ts": function(e, t, n) {
            "use strict";
            var r = n("./src/framework/source/SourceContext.tsx");
            n.d(t, "a", function() {
                return r.a
            }), n.d(t, "b", function() {
                return r.b
            }), n.d(t, "e", function() {
                return r.f
            }), n.d(t, "d", function() {
                return r.e
            }), n.d(t, "f", function() {
                return r.g
            }), n.d(t, "g", function() {
                return r.h
            }), n.d(t, "c", function() {
                return r.d
            })
        },
        "./src/framework/style/components/ThemeContext.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./src/styles/theme.ts"),
                i = r.createContext(o.a)
        },
        "./src/framework/style/components/ThemeProvider.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/react/index.js"),
                o = n("./src/framework/style/components/ThemeContext.tsx");
            t.a = function(e) {
                var t = e.theme,
                    n = e.children;
                return r.createElement(o.a.Provider, {
                    value: t
                }, n)
            }
        },
        "./src/framework/style/components/WithCx.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("./src/framework/style/index.ts");

            function o(e) {
                return (0, e.children)(Object(r.useCx)())
            }
        },
        "./src/framework/style/components/WithKeyframes.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("./src/framework/style/index.ts");

            function o(e) {
                var t = e.children,
                    n = e.keyframes;
                return t(Object(r.useKeyframes)(n))
            }
        },
        "./src/framework/style/components/WithTheme.ts": function(e, t, n) {
            "use strict";
            var r = n("./src/framework/style/components/ThemeContext.tsx").a.Consumer;
            t.a = r
        },
        "./src/framework/style/flow/index.ts": function(e, t) {},
        "./src/framework/style/index.ts": function(e, t, n) {
            "use strict";
            var r = n("./src/framework/style/useCx.ts");
            n.d(t, "useCx", function() {
                return r.a
            });
            var o = n("./src/framework/style/useKeyframes.ts");
            n.d(t, "useKeyframes", function() {
                return o.a
            });
            var i = n("./src/framework/style/useTheme.tsx");
            n.d(t, "useTheme", function() {
                return i.a
            });
            n("./src/framework/style/components/ThemeContext.tsx");
            var a = n("./src/framework/style/components/ThemeProvider.tsx");
            n.d(t, "ThemeProvider", function() {
                return a.a
            });
            var c = n("./src/framework/style/components/WithCx.tsx");
            n.d(t, "WithCx", function() {
                return c.a
            });
            var s = n("./src/framework/style/components/WithKeyframes.tsx");
            n.d(t, "WithKeyframes", function() {
                return s.a
            });
            var l = n("./src/framework/style/components/WithTheme.ts");
            n.d(t, "WithTheme", function() {
                return l.a
            });
            n("./src/framework/style/flow/index.ts")
        },
        "./src/framework/style/useCx.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var r = n("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),
                o = n.n(r),
                i = n("./node_modules/lodash/flattenDeep.js"),
                a = n.n(i),
                c = n("./node_modules/fela/es/index.js"),
                s = n("./src/components/style/useRenderer.tsx"),
                l = n("./src/framework/style/index.ts"),
                u = function() {
                    var e = Object(l.useTheme)(),
                        t = Object(s.a)();
                    return function(n) {
                        var r = a()([n]).filter(Boolean).map(function(e) {
                                return "function" == typeof e ? e : function() {
                                    return e
                                }
                            }),
                            i = c.a.apply(void 0, o()(r));
                        return t.renderRule(i, e)
                    }
                }
        },
        "./src/framework/style/useKeyframes.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("./node_modules/lodash/mapValues.js"),
                o = n.n(r),
                i = n("./src/components/style/useRenderer.tsx"),
                a = n("./src/framework/style/index.ts");

            function c(e) {
                var t = Object(a.useTheme)(),
                    n = Object(i.a)();
                return o()(e, function(e) {
                    var r = "function" == typeof e ? e : function() {
                        return e
                    };
                    return n.renderKeyframe(r, t)
                })
            }
        },
        "./src/framework/style/useTheme.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./src/framework/style/components/ThemeContext.tsx"),
                i = function() {
                    return r.useContext(o.a)
                }
        },
        "./src/framework/track/DomMonitorContext.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return u
            });
            var r = n("./node_modules/@babel/runtime/helpers/extends.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./src/util/invariant.ts"),
                c = i.createContext(null),
                s = function(e) {
                    return i.createElement(c.Provider, {
                        value: e.domMonitor
                    }, e.children)
                },
                l = function() {
                    var e = i.useContext(c);
                    return Object(a.a)(!!e, "Expected DomMonitor not to be null"), e
                },
                u = function(e) {
                    return function(t) {
                        return i.createElement(c.Consumer, null, function(n) {
                            return i.createElement(e, o()({}, t, {
                                domMonitor: n
                            }), t.children)
                        })
                    }
                }
        },
        "./src/framework/track/IntersectionObserver.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = function(e, t) {
                    var n = e.onIntersect,
                        r = e.root,
                        a = e.disconnect,
                        c = e.target,
                        s = e.threshold,
                        l = e.rootMargin;
                    i.useEffect(function() {
                        if ((!a || !a()) && c.current) {
                            var e = {
                                    root: r ? r.current : null,
                                    rootMargin: l,
                                    threshold: s
                                },
                                t = new IntersectionObserver(function(e) {
                                    n(e[0])
                                }, e);
                            return t.observe(c.current),
                                function() {
                                    t.unobserve(c.current)
                                }
                        }
                    }, [].concat(o()(t), [r, s, l]))
                }
        },
        "./src/framework/track/PresentationTracker.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./src/framework/track/IntersectionObserver.tsx"),
                c = function(e) {
                    var t = e.onPresentedFn,
                        n = i.useState(!1),
                        r = o()(n, 2),
                        c = r[0],
                        s = r[1],
                        l = i.useRef(null),
                        u = i.useCallback(function(e) {
                            !c && e.isIntersecting && (s(!0), t())
                        }, [t, c]);
                    return Object(a.a)({
                        onIntersect: u,
                        target: l,
                        disconnect: function() {
                            return c
                        },
                        threshold: .25
                    }, [c, u]), l
                }
        },
        "./src/framework/track/UpsellPresentationTracker.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./src/framework/source/index.ts"),
                i = n("./src/framework/reporter/ReporterContext.tsx"),
                a = n("./src/framework/track/PresentationTracker.tsx");

            function c(e) {
                if (! function(e) {
                        if (!e) return !1;
                        if (e.name && "upgrade_membership" !== e.name) throw new Error("Unstandardized upsell source, source_name: ".concat(e.name));
                        if (!e.dimension) throw new Error("Upsell source without source location.");
                        return !0
                    }(e)) return {};
                var t = {};
                return e && (t.dimension = e.dimension, t.locationId = e.dimension), t
            }

            function s(e) {
                var t = e.children,
                    n = Object(i.b)(),
                    s = c(Object(o.e)()),
                    l = Object(a.a)({
                        onPresentedFn: function() {
                            n.event("upsell.viewed", s)
                        }
                    });
                return r.createElement("div", {
                    ref: l
                }, t)
            }
        },
        "./src/framework/track/index.ts": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                a = n.n(i),
                c = n("./node_modules/@babel/runtime/helpers/createClass.js"),
                s = n.n(c),
                l = n("./node_modules/lodash/throttle.js"),
                u = n.n(l),
                d = n("./node_modules/lodash/debounce.js"),
                m = n.n(d),
                f = n("./node_modules/mitt/dist/mitt.es.js"),
                p = 100,
                g = function() {
                    function e() {
                        var t = this;
                        a()(this, e), o()(this, "_emitter", void 0), o()(this, "_onScrollEnd", void 0), o()(this, "_onScrollThrottled", void 0), o()(this, "_onResizeThrottled", void 0), o()(this, "_lastKnownPageYOffset", void 0), this._emitter = Object(f.a)(), this._onScrollEnd = m()(function() {
                            t._emitter.emit("scroll_end")
                        }, p), this._onScrollThrottled = u()(function() {
                            t._emitter.emit("scroll_throttled")
                        }, p), this._onResizeThrottled = u()(function() {
                            t._emitter.emit("resize_throttled")
                        }, p), window.addEventListener("scroll", this._onScroll.bind(this)), window.addEventListener("resize", this._onResize.bind(this), {
                            passive: !0
                        })
                    }
                    return s()(e, [{
                        key: "on",
                        value: function(e, t) {
                            this._emitter.on(e, t)
                        }
                    }, {
                        key: "off",
                        value: function(e, t) {
                            this._emitter.off(e, t)
                        }
                    }, {
                        key: "_onScroll",
                        value: function() {
                            this._emitter.emit("scroll"), this._onScrollThrottled(), this._onScrollEnd(), "number" == typeof this._lastKnownPageYOffset && (this._lastKnownPageYOffset > window.pageYOffset ? this._emitter.emit("scroll_up") : this._emitter.emit("scroll_down")), this._lastKnownPageYOffset = window.pageYOffset
                        }
                    }, {
                        key: "_onResize",
                        value: function() {
                            this._emitter.emit("resize"), this._onResizeThrottled()
                        }
                    }]), e
                }(),
                b = n("./src/framework/track/DomMonitorContext.tsx"),
                h = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                v = n.n(h),
                y = n("./node_modules/react/index.js"),
                x = n("./node_modules/graphql-tag/src/index.js"),
                E = n.n(x),
                w = n("./src/framework/reporter/ReporterContext.tsx"),
                O = n("./src/framework/source/index.ts"),
                j = n("./src/util/dom.ts");

            function _() {
                var e = v()(["\n  fragment PostScrollTracker_post on Post {\n    id\n    collection {\n      id\n    }\n    sequence {\n      sequenceId\n    }\n  }\n"]);
                return _ = function() {
                    return e
                }, e
            }
            var k = 1e3;

            function S(e, t) {
                var n = Object(w.b)(),
                    r = Object(b.b)(),
                    o = Object(O.f)(),
                    i = null,
                    a = null,
                    c = y.useCallback(u()(function() {
                        if (e.current) {
                            var r = Object(j.a)(e.current);
                            if (Object(j.g)(r)) {
                                var c = Date.now(),
                                    s = Object(j.d)(r),
                                    l = Object(j.c)(),
                                    u = Object(j.e)(),
                                    d = Math.round(s.top),
                                    m = Math.round(s.top + s.height),
                                    f = l.top,
                                    p = l.top + u.height,
                                    g = l.height;
                                n.event("post.streamScrolled", {
                                    postIds: [t.id],
                                    collectionIds: [t.collection ? t.collection.id : ""],
                                    sequenceIds: [t.sequence ? t.sequence.sequenceId : ""],
                                    sources: [o],
                                    tops: [d],
                                    bottoms: [m],
                                    areFullPosts: [!0],
                                    loggedAt: c,
                                    timeDiff: null !== a ? Math.round(c - a) : 0,
                                    scrollTop: f,
                                    scrollBottom: p,
                                    scrollableHeight: g,
                                    viewStartedAt: i
                                }), a = c
                            }
                        }
                    }, k), [t]);
                y.useEffect(function() {
                    return i = Date.now(), c(), r.on("scroll_end", c),
                        function() {
                            r.off("scroll_end", c)
                        }
                }, [c])
            }
            var C = E()(_()),
                P = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                I = n.n(P),
                L = n("./src/components/post/helpers/loggedOutHistory.ts"),
                T = n("./src/framework/reporter/index.ts");

            function A() {
                var e = v()(["\n  fragment PostReadTracker_post on Post {\n    id\n    collection {\n      slug\n    }\n    sequence {\n      sequenceId\n    }\n  }\n"]);
                return A = function() {
                    return e
                }, e
            }
            var N = 100;

            function R(e, t, n) {
                var r = Object(T.c)(),
                    o = Object(b.b)(),
                    i = y.useState(!1),
                    a = I()(i, 2),
                    c = a[0],
                    s = a[1];
                y.useEffect(function() {
                    if (!c) {
                        var i = function() {
                            if (t.current && !c) {
                                var o = Object(j.a)(t.current),
                                    i = Object(j.d)(o),
                                    a = i.top + i.height,
                                    l = Object(j.d)(Object(j.e)());
                                l.top + l.height >= a - N && (s(!0), r.event("post.clientRead", {
                                    postId: n.id,
                                    collectionSlug: n.collection ? n.collection.slug : "",
                                    sequenceId: n.sequence ? n.sequence.sequenceId : ""
                                }), e || Object(L.a)(n.id))
                            }
                        };
                        return o.on("scroll_end", i),
                            function() {
                                o.off("scroll_end", i)
                            }
                    }
                }, [c, n])
            }
            var D = E()(A()),
                U = n("./src/framework/track/IntersectionObserver.tsx"),
                M = n("./src/framework/style/index.ts"),
                B = n("./src/framework/track/PresentationTracker.tsx");

            function H() {
                var e = v()(["\n  fragment PostPresentationTracker_post on Post {\n    id\n    visibility\n    previewContent {\n      isFullContent\n    }\n    collection {\n      id\n    }\n  }\n"]);
                return H = function() {
                    return e
                }, e
            }
            var F = {
                    width: "100%",
                    height: "100%"
                },
                z = 0,
                q = 1,
                W = 2;

            function V(e) {
                var t = e.post,
                    n = e.presentationContext,
                    r = e.suppressEvents,
                    o = e.children,
                    i = Object(M.useCx)(),
                    a = Object(w.b)(),
                    c = Object(O.d)(),
                    s = y.useCallback(function() {
                        if (t && !r) {
                            var e, o = t.visibility,
                                i = t.previewContent,
                                s = t.collection,
                                l = i && i.isFullContent;
                            switch (o) {
                                case "PUBLIC":
                                    e = z;
                                    break;
                                case "UNLISTED":
                                    e = q;
                                    break;
                                case "LOCKED":
                                    e = W
                            }
                            a.event("post.clientPresented", {
                                postId: t.id,
                                source: c,
                                collectionId: s ? s.id : null,
                                isFullPost: l,
                                postVisibility: e,
                                context: "POST_PREVIEW" !== n ? n.toLowerCase() : null
                            })
                        }
                    }, [t, r, n]),
                    l = Object(B.a)({
                        onPresentedFn: s
                    });
                return y.createElement("div", {
                    className: i(F),
                    ref: l
                }, o)
            }
            var G = E()(H());
            n.d(t, "f", function() {
                return g
            }), n.d(t, "a", function() {
                return b.a
            }), n.d(t, "j", function() {
                return b.c
            }), n.d(t, "i", function() {
                return S
            }), n.d(t, "e", function() {
                return C
            }), n.d(t, "h", function() {
                return R
            }), n.d(t, "d", function() {
                return D
            }), n.d(t, "g", function() {
                return U.a
            }), n.d(t, "b", function() {
                return V
            }), n.d(t, "c", function() {
                return G
            })
        },
        "./src/index.tsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("./node_modules/react/index.js"),
                o = n("./node_modules/react-apollo/react-apollo.esm.js"),
                i = n("./node_modules/@hot-loader/react-dom/index.js"),
                a = n.n(i),
                c = n("./node_modules/react-helmet-async/lib/index.module.js"),
                s = n("./node_modules/react-loadable/lib/index.js"),
                l = n.n(s),
                u = n("./node_modules/react-redux/es/index.js"),
                d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
                m = n("./node_modules/@sentry/browser/dist/index.js"),
                f = n("./node_modules/@babel/runtime/regenerator/index.js"),
                p = n.n(f),
                g = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                b = n.n(g),
                h = n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                v = n.n(h),
                y = n("./node_modules/@babel/runtime/helpers/createClass.js"),
                x = n.n(y),
                E = n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),
                w = n.n(E),
                O = n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
                j = n.n(O),
                _ = n("./node_modules/@babel/runtime/helpers/inherits.js"),
                k = n.n(_),
                S = n("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),
                C = n.n(S),
                P = n("./node_modules/react-router/esm/react-router.js"),
                I = n("./node_modules/react-hot-loader/root.js"),
                L = n("./src/components/debug/GoogleAnalytics.tsx"),
                T = n("./src/components/session/RequireFlag.tsx"),
                A = l()({
                    loader: function() {
                        return n.e(7).then(n.bind(null, "./src/components/debug/DebugInfo.tsx"))
                    },
                    modules: ["src/components/debug/DebugInfo"],
                    webpack: function() {
                        return ["./src/components/debug/DebugInfo.tsx"]
                    },
                    loading: function() {
                        return null
                    }
                });

            function N() {
                return r.createElement(T.a, {
                    name: "trace_ui"
                }, r.createElement(A, null))
            }
            var R = n("./src/components/session/WithFlag.tsx"),
                D = n("./src/components/session/WithViewer.tsx"),
                U = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                M = n.n(U),
                B = n("./src/framework/style/index.ts"),
                H = n("./src/styles/breakpoints.ts"),
                F = n("./src/styles/newBreakpoints.ts"),
                z = function(e) {
                    var t;
                    return t = {}, M()(t, H.xl(e), {
                        display: "none"
                    }), M()(t, H.lg(e), {
                        display: "none"
                    }), M()(t, H.md(e), {
                        display: "none"
                    }), M()(t, H.sm(e), {
                        display: "none"
                    }), M()(t, H.xs(e), {
                        display: "none"
                    }), M()(t, F.xl(e), {
                        display: "none"
                    }), M()(t, F.lg(e), {
                        display: "none"
                    }), M()(t, F.md(e), {
                        display: "none"
                    }), M()(t, F.sm(e), {
                        display: "none"
                    }), M()(t, F.xs(e), {
                        display: "none"
                    }), t
                };

            function q() {
                var e = Object(B.useCx)();
                return r.createElement("div", {
                    className: e(z)
                })
            }
            var W = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                V = n.n(W),
                G = n("./node_modules/graphql-tag/src/index.js"),
                K = n.n(G),
                X = n("./src/components/navigation/Redirect.tsx"),
                Y = n("./src/components/susi/susi-modal/SusiPanel.tsx"),
                Q = n("./src/components/susi/helpers/index.ts"),
                $ = n("./src/framework/design-system/components/index.ts"),
                J = n("./src/framework/design-system/type/index.ts"),
                Z = n("./src/framework/source/index.ts"),
                ee = n("./src/styles/zIndex.ts"),
                te = n("./src/util/navigation.ts"),
                ne = n("./src/util/routes.ts"),
                re = Object(u.c)(function(e) {
                    return {
                        authDomain: e.config.authDomain,
                        currentLocation: e.navigation.currentLocation,
                        isCustomDomain: e.client.isCustomDomain,
                        productName: e.config.productName
                    }
                })(function(e) {
                    var t = e.authDomain,
                        n = e.currentLocation,
                        o = e.idToken,
                        i = e.isCustomDomain,
                        a = e.onClose,
                        c = void 0 === a ? function() {} : a,
                        s = e.openSignIn,
                        l = e.productName,
                        u = e.signInHref,
                        d = {
                            state: ["", Object(Q.a)(n, Object(Z.d)(), i ? "google_one_tap_cd" : "google_one_tap"), "register"].join("|")
                        },
                        m = Object(ne.L)(t),
                        f = Object(te.a)(m, d);
                    return f = "".concat(f, "#id_token=").concat(o), r.createElement($.b, {
                        border: "BASE_LIGHT",
                        backgroundColor: "BACKGROUND",
                        borderRadius: "4px",
                        height: "183px",
                        padding: "12px 26px 12px 16px",
                        position: "fixed",
                        top: "34px",
                        right: "22px",
                        width: "378px",
                        zIndex: ee.a.floating,
                        sm: {
                            top: "initial",
                            bottom: "0px",
                            right: "initial",
                            left: "0px",
                            width: "100%"
                        }
                    }, r.createElement($.b, {
                        display: "flex",
                        justifyContent: "space-between",
                        marginRight: "-16px"
                    }, r.createElement(J.b, {
                        scale: "S"
                    }, "Continue to ", l), r.createElement($.g, {
                        isPositionAbsolute: !1,
                        onClick: c,
                        size: "LARGE"
                    })), r.createElement($.b, {
                        marginTop: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start"
                    }, r.createElement($.b, {
                        marginRight: "12px"
                    }, r.createElement($.c, {
                        buttonStyle: "STRONG",
                        href: f
                    }, "Sign up")), r.createElement(J.a, {
                        scale: "M"
                    }, "Already have an account?", " ", r.createElement($.b, {
                        display: "inline",
                        marginLeft: "6px"
                    }, r.createElement($.u, {
                        href: u,
                        linkStyle: "OBVIOUS",
                        onClick: function(e) {
                            e.preventDefault(), s()
                        }
                    }, "Sign in")))), r.createElement($.b, {
                        marginTop: "16px"
                    }, Object(Y.b)("Sign Up", l)))
                }),
                oe = n("./src/components/susi/susi-modal/SusiModal.tsx"),
                ie = n("./src/framework/reporter/index.ts"),
                ae = n("./src/routes/getLiteRouteForPath.ts"),
                ce = n("./src/screens/ErrorScreen.tsx"),
                se = n("./src/screens/helpers/visits.ts"),
                le = n("./src/util/referrers.ts"),
                ue = n("./src/util/hooks/useScript.tsx"),
                de = n("./src/util/constants.ts");

            function me() {
                var e = V()(["\n  query EmailAvailability($email: String) {\n    emailAvailability(email: $email)\n  }\n"]);
                return me = function() {
                    return e
                }, e
            }
            var fe = "https://smartlock.google.com/client",
                pe = function(e) {
                    return {
                        supportedAuthMethods: ["https://accounts.google.com"],
                        supportedIdTokenProviders: [{
                            uri: "https://accounts.google.com",
                            clientId: e
                        }]
                    }
                },
                ge = new Set(["lo-homepage", "post", "profile", "sequence-library", "sequence-post"]);

            function be(e) {
                var t = e.authGoogleClientId,
                    n = e.setCredential,
                    r = e.verifyEmail;
                return window.onGoogleYoloLoad = function(e) {
                    return window.onGoogleYoloHide = e.cancelLastOperation, e.hint(pe(t)).then(function(e) {
                        n(e), r()
                    }).catch(function(e) {
                        switch (e.type) {
                            case "userCanceled":
                                Object(se.g)();
                                break;
                            case "noCredentialsAvailable":
                            case "unsupportedBrowser":
                            case "requestFailed":
                            case "operationCanceled":
                                break;
                            default:
                                throw new Error("Google One-tap hint error: ".concat(e.type))
                        }
                    })
                }, Object(ue.a)(fe), null
            }
            var he = K()(me()),
                ve = Object(u.c)(function(e) {
                    var t = e.client.isCustomDomain,
                        n = e.config,
                        r = n.authDomain,
                        o = n.authGoogleClientId,
                        i = e.navigation,
                        a = i.currentLocation,
                        c = i.hideGoogleOneTap;
                    return {
                        authDomain: r,
                        authGoogleClientId: o,
                        currentLocation: a,
                        referrer: i.referrer,
                        hideGoogleOneTap: c,
                        isCustomDomain: t
                    }
                })(function(e) {
                    var t = e.authDomain,
                        n = e.authGoogleClientId,
                        i = e.currentLocation,
                        a = e.initialPageLoaded,
                        c = e.isLoggedIn,
                        s = e.hideGoogleOneTap,
                        l = e.referrer,
                        u = e.isCustomDomain,
                        d = Object(ie.c)(),
                        m = r.useState(!1),
                        f = b()(m, 2),
                        p = f[0],
                        g = f[1],
                        h = r.useState("SHOW_GOOGLE_ONE_TAP"),
                        v = b()(h, 2),
                        y = v[0],
                        x = v[1],
                        E = r.useState({
                            id: "",
                            idToken: ""
                        }),
                        w = b()(E, 2),
                        O = w[0],
                        j = w[1],
                        _ = Object(B.useTheme)();
                    if (r.useEffect(function() {
                            var e, t;
                            c || (t = Object(se.b)()) && t > Date.now() - de.c || u || Object(le.c)(l) && window.innerWidth < _.breakpoints.md || !(e = Object(ae.a)(window.location.pathname)) || !ge.has(e.name) || g(!0)
                        }, []), r.useEffect(function() {
                            s && p && a && window && window.onGoogleYoloHide && window.onGoogleYoloHide()
                        }, [s, p, a]), r.useEffect(function() {
                            p && !s && "SHOW_GOOGLE_ONE_TAP" === y && d.event("susi.viewed", {
                                entryPoint: "google_one_tap",
                                operation: "connect"
                            })
                        }, [y, p, s]), !p || s && "SHOW_SIGN_IN" !== y) return null;
                    switch (y) {
                        case "SHOW_GOOGLE_ONE_TAP":
                            return r.createElement(T.a, {
                                name: "enable_google_one_tap"
                            }, r.createElement(be, {
                                authGoogleClientId: n,
                                setCredential: j,
                                verifyEmail: function() {
                                    return x("VERIFY_EMAIL")
                                }
                            }));
                        case "VERIFY_EMAIL":
                            return r.createElement(o.c, {
                                query: he,
                                variables: {
                                    email: O.id
                                }
                            }, function(e) {
                                var t = e.loading,
                                    n = e.error,
                                    o = e.data,
                                    i = (o = void 0 === o ? {} : o).emailAvailability;
                                return t ? null : n ? r.createElement(ce.a, {
                                    error: n
                                }) : (x(i ? "CONFIRM_SIGNUP" : "SUCCESSFUL_SIGNIN"), null)
                            });
                        case "CONFIRM_SIGNUP":
                            return r.createElement(Z.b, {
                                source: {
                                    susiEntry: "google_one_tap"
                                }
                            }, r.createElement(re, {
                                idToken: O.idToken,
                                onClose: function() {
                                    return x("")
                                },
                                openSignIn: function() {
                                    x("SHOW_SIGN_IN")
                                },
                                signInHref: Object(ne.lb)(t, i)
                            }));
                        case "SUCCESSFUL_SIGNIN":
                            var k = "".concat(Object(ne.L)(t), "?state=|").concat(i, "|#id_token=").concat(O.idToken);
                            return r.createElement(X.a, {
                                to: k
                            });
                        case "SHOW_SIGN_IN":
                            return r.createElement(oe.a, {
                                initialVisibility: !0,
                                operation: "login",
                                susiEntry: "google_one_tap"
                            });
                        default:
                            return null
                    }
                }),
                ye = n("./src/components/branch-banner/helpers/index.ts"),
                xe = Object(u.c)(function(e) {
                    var t = e.config,
                        n = t.branchKey,
                        r = t.isAmp,
                        o = e.navigation,
                        i = o.showBranchBanner;
                    return {
                        branchKey: n,
                        branchData: o.branchData,
                        isAmp: r,
                        isBot: e.client.isBot,
                        showBranchBanner: i
                    }
                })(function(e) {
                    var t = e.branchKey,
                        n = e.branchData,
                        o = e.initialPageLoaded,
                        i = e.isAmp,
                        a = e.isBot,
                        s = e.showBranchBanner,
                        l = r.useState(!1),
                        u = b()(l, 2),
                        d = u[0],
                        m = u[1],
                        f = r.useState(!1),
                        p = b()(f, 2),
                        g = p[0],
                        h = p[1];
                    return r.useEffect(function() {
                        s && !d ? Object(ye.d)(function() {
                            m(!0)
                        }) : Object(ye.d)()
                    }, [s]), r.useEffect(function() {
                        return d && s && Object(ye.e)(function() {}),
                            function() {
                                m(!1)
                            }
                    }, [d]), r.useEffect(function() {
                        o && !g && n.loaded && h(!0)
                    }), a || i ? null : o && !g && n.loaded && r.createElement(T.a, {
                        name: "enable_branch_io"
                    }, r.createElement(R.a, {
                        name: "dont_track_user"
                    }, function(e) {
                        return r.createElement(c.a, null, r.createElement("script", {
                            type: "text/javascript"
                        }, function(e) {
                            var t = e.branchKey,
                                n = e.dontTrackUser,
                                r = e.branchData,
                                o = String(n);
                            return '\n(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent".split(" "), 0);\nbranch.init(\''.concat(t, "', {metadata: ").concat(JSON.stringify(r), ", 'no_journeys': true, 'disable_exit_animation': true, 'disable_entry_animation': true, 'tracking_disabled': ").concat(o, "}, function(err, data) {});\n").trim()
                        }({
                            branchKey: t,
                            dontTrackUser: e,
                            branchData: n
                        })))
                    }))
                }),
                Ee = "OPTIMIZELY_LOADED_OR_SKIPPED";
            var we = function(e) {
                    var t = e.dispatchCallback,
                        n = Object(ue.a)("https://cdn.optimizely.com/js/16180790160.js");
                    return b()(n, 1)[0] && t(), null
                },
                Oe = Object(u.c)(function(e) {
                    return {
                        isAmp: e.config.isAmp,
                        isBot: e.client.isBot
                    }
                })(function(e) {
                    var t = e.dispatch,
                        n = e.isAmp,
                        o = e.isBot,
                        i = r.useCallback(function() {
                            t({
                                type: Ee,
                                optimizelyLoadedOrSkipped: !0
                            })
                        }, []);
                    return r.createElement(R.a, {
                        name: "enable_optimizely"
                    }, function(e) {
                        return o || n || !e ? (i(), null) : r.createElement(we, {
                            dispatchCallback: i
                        })
                    })
                }),
                je = n("./src/framework/design-system/components/util/VisibilityController.tsx"),
                _e = n("./src/store/actions/navigation.ts"),
                ke = function(e) {
                    function t(e) {
                        var n;
                        v()(this, t), n = w()(this, j()(t).call(this, e));
                        var r = e.enqueuedToast;
                        return r && n.props.dispatch(Object(_e.i)()), n.state = {
                            currentToast: r || void 0,
                            toastCount: 1
                        }, n
                    }
                    return k()(t, e), x()(t, [{
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            var t = e.enqueuedToast;
                            t && (this.props.dispatch(Object(_e.i)()), this.setState(function(e) {
                                return {
                                    currentToast: t || void 0,
                                    toastCount: e.toastCount + 1
                                }
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.currentToast,
                                n = e.toastCount;
                            return t ? [r.createElement(je.a, {
                                key: n,
                                initialVisibility: !0
                            }, function(e) {
                                var n = e.isVisible,
                                    o = (e.show, e.hide);
                                return r.createElement($.I, {
                                    isVisible: n,
                                    hide: o,
                                    duration: "FOREVER" === t.duration ? void 0 : t.duration,
                                    toastStyle: t.toastStyle
                                }, r.createElement($.d, {
                                    strong: !0
                                }, t.message))
                            })] : null
                        }
                    }]), t
                }(r.Component),
                Se = Object(u.c)(function(e) {
                    return {
                        enqueuedToast: e.navigation.enqueuedToast
                    }
                })(ke),
                Ce = n("./src/framework/reporter/performance.tsx"),
                Pe = Object(u.c)(function(e) {
                    return {
                        favicon: e.config.favicon
                    }
                })(function(e) {
                    var t;
                    switch (e.favicon) {
                        case "development":
                            t = "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-dev.54LRTCXUTDayvTFg89Y4Jg.ico";
                            break;
                        case "staging":
                            t = "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-hatch.32p0KZZCd4GflMcncXTXGA.ico";
                            break;
                        case "production":
                        default:
                            t = "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
                    }
                    return r.createElement(c.a, null, r.createElement("link", {
                        rel: "icon",
                        href: t
                    }))
                }),
                Ie = n("./src/util/miroImage.ts"),
                Le = Object(u.c)(function(e) {
                    return {
                        faviconImageId: e.metadata.faviconImageId
                    }
                })(function(e) {
                    var t = e.faviconImageId;
                    if (!t) return r.createElement(Pe, null);
                    var n = Object(Ie.d)({
                        miroId: t,
                        width: 128,
                        height: 128,
                        strategy: Ie.a.Crop
                    });
                    return t ? r.createElement(c.a, null, r.createElement("link", {
                        rel: "icon",
                        href: n
                    })) : r.createElement(Pe, null)
                }),
                Te = function(e) {
                    var t = e.productName;
                    return r.createElement(r.Fragment, null, r.createElement(c.a, {
                        htmlAttributes: {
                            lang: "en"
                        }
                    }, r.createElement("meta", {
                        charset: "utf-8"
                    }), r.createElement("meta", {
                        name: "viewport",
                        content: "width=device-width,minimum-scale=1,initial-scale=1"
                    }), r.createElement("title", null, t), r.createElement("meta", {
                        name: "theme-color",
                        content: "#000000"
                    }), r.createElement("meta", {
                        name: "twitter:app:name:iphone",
                        content: "Medium"
                    }), r.createElement("meta", {
                        name: "twitter:app:id:iphone",
                        content: "828256236"
                    }), r.createElement("meta", {
                        property: "al:ios:app_name",
                        content: "Medium"
                    }), r.createElement("meta", {
                        property: "al:ios:app_store_id",
                        content: "828256236"
                    }), r.createElement("meta", {
                        property: "al:android:package",
                        content: "com.medium.reader"
                    }), r.createElement("meta", {
                        property: "al:android:app_name",
                        content: "Medium"
                    }), r.createElement("meta", {
                        property: "fb:app_id",
                        content: "542599432471018"
                    }), r.createElement("meta", {
                        property: "og:site_name",
                        content: "Medium"
                    }), r.createElement("link", {
                        rel: "publisher",
                        href: "https://plus.google.com/103654360130207659246"
                    }), r.createElement("link", {
                        rel: "search",
                        type: "application/opensearchdescription+xml",
                        title: "Medium",
                        href: "/osd.xml"
                    }), '\x3c!--[if lt IE 9]><script charset="UTF-8" src="https://cdn-static-1.medium.com/_/fp/js/shiv.RI2ePTZ5gFmMgLzG5bEVAA.js"><\/script><![endif]--\x3e', r.createElement("link", {
                        rel: "apple-touch-icon",
                        sizes: "152x152",
                        href: "https://cdn-images-1.medium.com/fit/c/152/152/1*8I-HPL0bfoIzGied-dzOvA.png"
                    }), r.createElement("link", {
                        rel: "apple-touch-icon",
                        sizes: "120x120",
                        href: "https://cdn-images-1.medium.com/fit/c/120/120/1*8I-HPL0bfoIzGied-dzOvA.png"
                    }), r.createElement("link", {
                        rel: "apple-touch-icon",
                        sizes: "76x76",
                        href: "https://cdn-images-1.medium.com/fit/c/76/76/1*8I-HPL0bfoIzGied-dzOvA.png"
                    }), r.createElement("link", {
                        rel: "apple-touch-icon",
                        sizes: "60x60",
                        href: "https://cdn-images-1.medium.com/fit/c/60/60/1*8I-HPL0bfoIzGied-dzOvA.png"
                    }), r.createElement("link", {
                        rel: "mask-icon",
                        href: "https://cdn-static-1.medium.com/_/fp/icons/monogram-mask.KPLCSFEZviQN0jQ7veN2RQ.svg",
                        color: "#171717"
                    })), r.createElement(Le, null))
                },
                Ae = n("./src/util/glyph.ts"),
                Ne = function(e) {
                    function t() {
                        return v()(this, t), w()(this, j()(t).apply(this, arguments))
                    }
                    return k()(t, e), x()(t, [{
                        key: "render",
                        value: function() {
                            var e = this;
                            return r.createElement(R.a, {
                                name: "glyph_font_set"
                            }, function(t) {
                                return r.createElement(c.a, null, r.createElement("link", {
                                    id: "glyph_link",
                                    rel: "stylesheet",
                                    type: "text/css",
                                    href: Object(Ae.a)({
                                        glyphFontSet: String(t),
                                        glyphUrl: e.props.glyphUrl,
                                        isAmp: e.props.isAmp
                                    })
                                }))
                            })
                        }
                    }]), t
                }(r.Component),
                Re = Object(u.c)(function(e) {
                    return {
                        isAmp: e.config.isAmp
                    }
                })(Ne),
                De = n("./node_modules/lodash/entries.js"),
                Ue = n.n(De),
                Me = n("./src/routes/index.ts"),
                Be = n("./node_modules/@babel/runtime/helpers/extends.js"),
                He = n.n(Be),
                Fe = n("./src/screens/LoadingScreen.tsx");

            function ze(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function qe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ze(n, !0).forEach(function(t) {
                        M()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ze(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var We = {
                    delay: 300,
                    timeout: 2e4,
                    loading: function(e) {
                        return e.error ? r.createElement(ce.a, {
                            error: e.error
                        }) : e.timedOut ? r.createElement(ce.a, {
                            error: {}
                        }) : e.pastDelay ? r.createElement(Fe.a, null) : null
                    }
                },
                Ve = function(e) {
                    return function(t, n) {
                        var o = t[e];
                        return r.createElement(o, n)
                    }
                },
                Ge = l()(qe({}, We, {
                    loader: function() {
                        return Promise.all([n.e(2), n.e(0), n.e(1), n.e(3), n.e(16)]).then(n.bind(null, "./src/handlers/AMPPostHandler.tsx"))
                    },
                    modules: ["src/handlers/AMPPostHandler"],
                    webpack: function() {
                        return ["./src/handlers/AMPPostHandler.tsx"]
                    }
                })),
                Ke = l()(qe({}, We, {
                    loader: function() {
                        return n.e(22).then(n.bind(null, "./src/handlers/BillingHistoryHandler.tsx"))
                    },
                    modules: ["src/handlers/BillingHistoryHandler"],
                    webpack: function() {
                        return ["./src/handlers/BillingHistoryHandler.tsx"]
                    }
                })),
                Xe = l()(qe({}, We, {
                    loader: function() {
                        return n.e(14).then(n.bind(null, "./src/handlers/NotAvailableHandler.tsx"))
                    },
                    modules: ["src/handlers/NotAvailableHandler"],
                    webpack: function() {
                        return ["./src/handlers/NotAvailableHandler.tsx"]
                    }
                })),
                Ye = l()(qe({}, We, {
                    loader: function() {
                        return Promise.all([n.e(2), n.e(0), n.e(1), n.e(3), n.e(15)]).then(n.bind(null, "./src/handlers/PostHandler.tsx"))
                    },
                    modules: ["src/handlers/PostHandler"],
                    webpack: function() {
                        return ["./src/handlers/PostHandler.tsx"]
                    },
                    render: Ve("PostHandler")
                })),
                Qe = l()(qe({}, We, {
                    loader: function() {
                        return n.e(18).then(n.bind(null, "./src/handlers/PostSettingsHandler.tsx"))
                    },
                    modules: ["src/handlers/PostSettingsHandler"],
                    webpack: function() {
                        return ["./src/handlers/PostSettingsHandler.tsx"]
                    },
                    render: Ve("PostSettingsHandler")
                })),
                $e = l()(qe({}, We, {
                    loader: function() {
                        return Promise.all([n.e(2), n.e(0), n.e(1), n.e(5), n.e(20)]).then(n.bind(null, "./src/handlers/SequenceLibraryHandler.tsx"))
                    },
                    modules: ["src/handlers/SequenceLibraryHandler"],
                    webpack: function() {
                        return ["./src/handlers/SequenceLibraryHandler.tsx"]
                    }
                })),
                Je = l()(qe({}, We, {
                    loader: function() {
                        return Promise.all([n.e(2), n.e(0), n.e(1), n.e(3), n.e(21)]).then(n.bind(null, "./src/handlers/SequencePostHandler.tsx"))
                    },
                    modules: ["src/handlers/SequencePostHandler"],
                    webpack: function() {
                        return ["./src/handlers/SequencePostHandler.tsx"]
                    },
                    render: Ve("SequencePostHandler")
                })),
                Ze = l()(qe({}, We, {
                    loader: function() {
                        return Promise.all([n.e(2), n.e(28), n.e(0), n.e(1), n.e(17)]).then(n.bind(null, "./src/handlers/SeriesHandler.tsx"))
                    },
                    modules: ["src/handlers/SeriesHandler"],
                    webpack: function() {
                        return ["./src/handlers/SeriesHandler.tsx"]
                    }
                })),
                et = l()(qe({}, We, {
                    loader: function() {
                        return Promise.all([n.e(29), n.e(23)]).then(n.bind(null, "./src/handlers/StatsPostHandler.tsx"))
                    },
                    modules: ["src/handlers/StatsPostHandler"],
                    webpack: function() {
                        return ["./src/handlers/StatsPostHandler.tsx"]
                    }
                })),
                tt = l()(qe({}, We, {
                    loader: function() {
                        return Promise.all([n.e(0), n.e(6), n.e(24)]).then(n.bind(null, "./src/handlers/YourStoriesHandler.tsx"))
                    },
                    modules: ["src/handlers/YourStoriesHandler"],
                    webpack: function() {
                        return ["./src/handlers/YourStoriesHandler.tsx"]
                    },
                    render: function(e, t) {
                        var n = e.default;
                        return r.createElement(n, He()({
                            tab: "DRAFT"
                        }, t))
                    }
                })),
                nt = l()(qe({}, We, {
                    loader: function() {
                        return Promise.all([n.e(0), n.e(6), n.e(24)]).then(n.bind(null, "./src/handlers/YourStoriesHandler.tsx"))
                    },
                    modules: ["src/handlers/YourStoriesHandler"],
                    webpack: function() {
                        return ["./src/handlers/YourStoriesHandler.tsx"]
                    },
                    render: function(e, t) {
                        var n = e.default;
                        return r.createElement(n, He()({
                            tab: "PUBLIC"
                        }, t))
                    }
                })),
                rt = l()(qe({}, We, {
                    loader: function() {
                        return Promise.all([n.e(0), n.e(6), n.e(24)]).then(n.bind(null, "./src/handlers/YourStoriesHandler.tsx"))
                    },
                    modules: ["src/handlers/YourStoriesHandler"],
                    webpack: function() {
                        return ["./src/handlers/YourStoriesHandler.tsx"]
                    },
                    render: function(e, t) {
                        var n = e.default;
                        return r.createElement(n, He()({
                            tab: "UNLISTED"
                        }, t))
                    }
                })),
                ot = l()(qe({}, We, {
                    loader: function() {
                        return Promise.all([n.e(0), n.e(6), n.e(25)]).then(n.bind(null, "./src/handlers/TopicHandler.tsx"))
                    },
                    modules: ["src/handlers/TopicHandler"],
                    webpack: function() {
                        return ["./src/handlers/TopicHandler.tsx"]
                    }
                })),
                it = l()(qe({}, We, {
                    loader: function() {
                        return n.e(31).then(n.bind(null, "./src/handlers/LOHomepageHandler.tsx"))
                    },
                    modules: ["src/handlers/LOHomepageHandler"],
                    webpack: function() {
                        return ["./src/handlers/LOHomepageHandler.tsx"]
                    }
                })),
                at = l()(qe({}, We, {
                    loader: function() {
                        return Promise.all([n.e(4), n.e(13)]).then(n.bind(null, "./src/landing-pages/ticks/TickLandingPageHandler.tsx"))
                    },
                    modules: ["src/landing-pages/ticks/TickLandingPageHandler"],
                    webpack: function() {
                        return ["./src/landing-pages/ticks/TickLandingPageHandler.tsx"]
                    }
                })),
                ct = l()(qe({}, We, {
                    loader: function() {
                        return n.e(11).then(n.bind(null, "./src/components/collection/package/builder/PackageBuilderHandler.tsx"))
                    },
                    modules: ["src/components/collection/package/builder/PackageBuilderHandler"],
                    webpack: function() {
                        return ["./src/components/collection/package/builder/PackageBuilderHandler.tsx"]
                    }
                })),
                st = l()(qe({}, We, {
                    loader: function() {
                        return n.e(11).then(n.bind(null, "./src/components/collection/package/builder/PackageBuilderPubHandler.tsx"))
                    },
                    modules: ["src/components/collection/package/builder/PackageBuilderPubHandler"],
                    webpack: function() {
                        return ["./src/components/collection/package/builder/PackageBuilderPubHandler.tsx"]
                    }
                })),
                lt = l()(qe({}, We, {
                    loader: function() {
                        return n.e(11).then(n.bind(null, "./src/components/collection/CollectionHomepageHandler.tsx"))
                    },
                    modules: ["src/components/collection/CollectionHomepageHandler"],
                    webpack: function() {
                        return ["./src/components/collection/CollectionHomepageHandler.tsx"]
                    }
                })),
                ut = l()(qe({}, We, {
                    loader: function() {
                        return Promise.all([n.e(2), n.e(1), n.e(4), n.e(12)]).then(n.bind(null, "./src/landing-pages/trumpland/TrumplandLandingPageHandler.tsx"))
                    },
                    modules: ["src/landing-pages/trumpland/TrumplandLandingPageHandler"],
                    webpack: function() {
                        return ["./src/landing-pages/trumpland/TrumplandLandingPageHandler.tsx"]
                    }
                })),
                dt = l()(qe({}, We, {
                    loader: function() {
                        return Promise.all([n.e(2), n.e(0), n.e(1), n.e(5), n.e(19)]).then(n.bind(null, "./src/handlers/userProfileHandlers.tsx"))
                    },
                    modules: ["src/handlers/userProfileHandlers"],
                    webpack: function() {
                        return ["./src/handlers/userProfileHandlers.tsx"]
                    },
                    render: Ve("UserProfileOverviewHandler")
                })),
                mt = l()(qe({}, We, {
                    loader: function() {
                        return Promise.all([n.e(2), n.e(0), n.e(1), n.e(5), n.e(19)]).then(n.bind(null, "./src/handlers/userProfileHandlers.tsx"))
                    },
                    modules: ["src/handlers/userProfileHandlers"],
                    webpack: function() {
                        return ["./src/handlers/userProfileHandlers.tsx"]
                    },
                    render: Ve("UserProfileLatestHandler")
                })),
                ft = l()(qe({}, We, {
                    loader: function() {
                        return Promise.all([n.e(2), n.e(0), n.e(1), n.e(5), n.e(19)]).then(n.bind(null, "./src/handlers/userProfileHandlers.tsx"))
                    },
                    modules: ["src/handlers/userProfileHandlers"],
                    webpack: function() {
                        return ["./src/handlers/userProfileHandlers.tsx"]
                    },
                    render: Ve("UserProfileSeriesHandler")
                })),
                pt = {
                    "amp-post": Ge,
                    "amp-post/custom-domain": Ge,
                    "billing-history": Ke,
                    "logged-out-homepage": it,
                    "not-available": Xe,
                    "post-by-id": Ye,
                    "post-by-slug": Ye,
                    "post-by-id/custom-domain": Ye,
                    "post-by-slug/custom-domain": Ye,
                    "post-by-id-under-collection": Ye,
                    "post-by-id-under-user": Ye,
                    "post-by-slug-under-collection": Ye,
                    "post-by-slug-under-user": Ye,
                    "post-settings": Qe,
                    profile: dt,
                    "profile/claps": l()(qe({}, We, {
                        loader: function() {
                            return Promise.all([n.e(2), n.e(0), n.e(1), n.e(5), n.e(19)]).then(n.bind(null, "./src/handlers/userProfileHandlers.tsx"))
                        },
                        modules: ["src/handlers/userProfileHandlers"],
                        webpack: function() {
                            return ["./src/handlers/userProfileHandlers.tsx"]
                        },
                        render: Ve("UserProfileClapsHandler")
                    })),
                    "profile/highlights": l()(qe({}, We, {
                        loader: function() {
                            return Promise.all([n.e(2), n.e(0), n.e(1), n.e(5), n.e(19)]).then(n.bind(null, "./src/handlers/userProfileHandlers.tsx"))
                        },
                        modules: ["src/handlers/userProfileHandlers"],
                        webpack: function() {
                            return ["./src/handlers/userProfileHandlers.tsx"]
                        },
                        render: Ve("UserProfileHighlightsHandler")
                    })),
                    "profile/latest": mt,
                    "profile/responses": l()(qe({}, We, {
                        loader: function() {
                            return Promise.all([n.e(2), n.e(0), n.e(1), n.e(5), n.e(19)]).then(n.bind(null, "./src/handlers/userProfileHandlers.tsx"))
                        },
                        modules: ["src/handlers/userProfileHandlers"],
                        webpack: function() {
                            return ["./src/handlers/userProfileHandlers.tsx"]
                        },
                        render: Ve("UserProfileResponsesHandler")
                    })),
                    "profile/series": ft,
                    "sequence-library": $e,
                    "sequence-post": Je,
                    series: Ze,
                    "stats-post": et,
                    stories: tt,
                    "stories/drafts": tt,
                    "stories/public": nt,
                    "stories/unlisted": rt,
                    "landing-pages/ticks": at,
                    "landing-pages/trumpland": ut,
                    "package-builder": ct,
                    "package-builder-pub": st,
                    "package-preview": lt,
                    topic: ot
                },
                gt = n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),
                bt = n.n(gt),
                ht = n("./node_modules/lodash/isEqual.js"),
                vt = n.n(ht),
                yt = n("./node_modules/querystring-es3/index.js");

            function xt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var Et = Object(u.c)()(function(e) {
                    var t = e.dispatch;
                    return (0, e.children)(t)
                }),
                wt = function(e) {
                    var t = e.name,
                        n = e.component,
                        o = e.render,
                        i = bt()(e, ["name", "component", "render"]);
                    return r.createElement(Et, null, function(e) {
                        return r.createElement(P.b, He()({}, i, {
                            render: function(i) {
                                var a;
                                if (i.location) {
                                    if (a = function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {};
                                                t % 2 ? xt(n, !0).forEach(function(t) {
                                                    M()(e, t, n[t])
                                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xt(n).forEach(function(t) {
                                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                                })
                                            }
                                            return e
                                        }({}, i.location), e(Object(_e.k)(i.location.hash)), a.search) {
                                        var c = Object(yt.parse)(a.search.slice(1));
                                        c.source && e(Object(_e.m)(c.source)), c.redirectUrl && e(Object(_e.n)(c.redirectUrl)), delete a.search
                                    }
                                    a.pathname.match(/.+\/$/) && (a.pathname = a.pathname.replace(/\/$/, ""))
                                }
                                if (i.staticContext) i.staticContext.route = {
                                    name: t
                                }, a && e(Object(_e.l)(a.pathname));
                                else {
                                    if (a && !vt()(i.location, a)) return r.createElement(P.a, {
                                        to: a
                                    });
                                    e(Object(_e.l)(i.location.pathname))
                                }
                                return n ? r.createElement(n, i) : o ? o(i) : null
                            }
                        }))
                    })
                },
                Ot = n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),
                jt = n.n(Ot),
                _t = n("./node_modules/@babel/runtime/helpers/typeof.js"),
                kt = n.n(_t),
                St = n("./node_modules/prop-types/index.js"),
                Ct = n.n(St),
                Pt = n("./node_modules/fela-dom/es/index.js"),
                It = n("./src/components/style/RendererContext.tsx"),
                Lt = function(e) {
                    function t() {
                        return v()(this, t), w()(this, j()(t).apply(this, arguments))
                    }
                    return k()(t, e), x()(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.ssrMode,
                                n = e.renderer;
                            t || Object(Pt.b)(n)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return r.createElement(It.a.Provider, {
                                value: this.props.renderer
                            }, r.Children.only(this.props.children))
                        }
                    }]), t
                }(r.Component),
                Tt = n("./src/framework/track/index.ts"),
                At = n("./src/components/style/BaseThemeProvider.tsx"),
                Nt = n("./node_modules/redux/es/redux.js"),
                Rt = n("./src/store/actions/config.ts");

            function Dt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var Ut = {
                    nodeEnv: "production",
                    version: "",
                    productName: "",
                    authDomain: "",
                    authGoogleClientId: "",
                    branchKey: "",
                    favicon: "production",
                    glyphUrl: "",
                    lightStep: {
                        name: "",
                        host: "",
                        token: "",
                        appVersion: ""
                    },
                    algolia: {
                        appId: "",
                        apiKeySearch: "",
                        indexPrefix: "",
                        host: ""
                    },
                    isAmp: !1,
                    publicUrl: "",
                    googleAnalyticsCode: "",
                    recaptchaKey: "",
                    signInWallCustomDomainCollectionIds: [],
                    mediumOwnedAndOperatedCollectionIds: [],
                    sentry: {
                        dsn: "",
                        environment: "production"
                    }
                },
                Mt = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ut,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case Rt.a:
                            return function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? Dt(n, !0).forEach(function(t) {
                                        M()(e, t, n[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dt(n).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    })
                                }
                                return e
                            }({}, e, {
                                isAmp: t.isAmp
                            });
                        default:
                            return e
                    }
                },
                Bt = n("./src/store/actions/debug.ts");

            function Ht(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Ft(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ht(n, !0).forEach(function(t) {
                        M()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ht(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function zt() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Bt.b:
                        return Ft({}, e, {
                            performanceTraceUrl: t.performanceTraceUrl
                        });
                    case Bt.a:
                        return Ft({}, e, {
                            originalSpanCarrier: t.originalSpanCarrier
                        });
                    default:
                        return e
                }
            }
            var qt = "POPULATE_SESSION";

            function Wt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var Vt = {
                user: {
                    id: ""
                },
                xsrf: ""
            };

            function Gt() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vt,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case qt:
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Wt(n, !0).forEach(function(t) {
                                    M()(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wt(n).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, e, {
                            user: {
                                id: t.userId
                            },
                            xsrf: t.xsrf
                        });
                    default:
                        return e
                }
            }
            var Kt = "INC_ITEM_COUNT",
                Xt = "DEC_ITEM_COUNT",
                Yt = "SET_ITEM_COUNT",
                Qt = "SET_SENDING",
                $t = "ADD_TO_BACKUP",
                Jt = "CLEAR_BACKUP",
                Zt = "SET_TIMEOUT_ID";

            function en(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function tn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? en(n, !0).forEach(function(t) {
                        M()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : en(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function nn() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        itemCount: 0,
                        sending: !1,
                        timeout: null,
                        backup: {}
                    },
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Kt:
                        return tn({}, e, {
                            itemCount: e.itemCount + 1
                        });
                    case Xt:
                        return tn({}, e, {
                            itemCount: e.itemCount - 1
                        });
                    case Yt:
                        return tn({}, e, {
                            itemCount: t.itemCount
                        });
                    case Qt:
                        return tn({}, e, {
                            sending: t.sending
                        });
                    case $t:
                        var n = tn({}, e.backup);
                        return n[t.key] = t.value, tn({}, e, {
                            backup: n
                        });
                    case Jt:
                        return tn({}, e, {
                            backup: {}
                        });
                    case Zt:
                        return tn({}, e, {
                            timeout: t.timeout
                        });
                    default:
                        return e
                }
            }
            var rn = n("./src/store/actions/branch.ts"),
                on = n("./src/store/actions/googleOneTap.ts");

            function an(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function cn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? an(n, !0).forEach(function(t) {
                        M()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : an(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var sn = {
                host: "",
                hostname: "",
                currentLocation: ""
            };

            function ln() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sn,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case _e.d:
                        return cn({}, e, {
                            currentHash: t.hash
                        });
                    case _e.e:
                        var n = Object(te.b)(e.host, t.path),
                            r = e.currentLocation !== n;
                        return cn({}, e, {
                            currentLocation: r ? n : e.currentLocation,
                            referrer: r ? e.currentLocation : e.referrer
                        });
                    case _e.f:
                        return cn({}, e, {
                            referrerSource: t.referrerSource
                        });
                    case _e.g:
                        return cn({}, e, {
                            unsafeRedirectUrl: t.unsafeRedirectUrl
                        });
                    case _e.c:
                        return cn({}, e, {
                            enqueuedToast: {
                                duration: t.duration,
                                message: t.message,
                                toastStyle: t.toastStyle
                            }
                        });
                    case _e.b:
                        return cn({}, e, {
                            enqueuedToast: null
                        });
                    case rn.c:
                        return cn({}, e, {
                            branchData: t.data
                        });
                    case rn.d:
                        return cn({}, e, {
                            showBranchBanner: !0
                        });
                    case rn.a:
                        return cn({}, e, {
                            showBranchBanner: !1
                        });
                    case rn.b:
                        return cn({}, e, {
                            showBranchBanner: null
                        });
                    case on.a:
                        return cn({}, e, {
                            hideGoogleOneTap: t.hideGoogleOneTap
                        });
                    case _e.a:
                        return cn({}, e, {
                            postPublishedType: null
                        });
                    case Ee:
                        return cn({}, e, {
                            optimizelyLoadedOrSkipped: t.optimizelyLoadedOrSkipped
                        });
                    default:
                        return e
                }
            }
            var un = {
                    isBot: !1,
                    isEu: !1,
                    isNativeMedium: !1,
                    isCustomDomain: !1
                },
                dn = function() {
                    return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : un
                },
                mn = n("./src/store/actions/multiVote.ts");

            function fn(e) {
                var t = function(e, t) {
                    if ("object" !== kt()(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== kt()(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === kt()(t) ? t : String(t)
            }

            function pn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function gn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? pn(n, !0).forEach(function(t) {
                        M()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pn(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var bn = {
                clapsPerPost: {}
            };

            function hn() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bn,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case mn.b:
                        return gn({}, e, {
                            clapsPerPost: gn({}, e.clapsPerPost, M()({}, t.postId, {
                                clapCount: t.clapCount,
                                viewerClapCount: t.viewerClapCount,
                                viewerHasClappedSinceFetch: t.viewerHasClappedSinceFetch
                            }))
                        });
                    case mn.a:
                        var n = e.clapsPerPost,
                            r = t.postId;
                        n[r];
                        return {
                            clapsPerPost: bt()(n, [r].map(fn))
                        };
                    default:
                        return e
                }
            }
            var vn = n("./src/store/actions/metadata.ts");

            function yn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var xn = {
                faviconImageId: null
            };

            function En() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xn,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case vn.a:
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? yn(n, !0).forEach(function(t) {
                                    M()(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yn(n).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, e, {
                            faviconImageId: t.faviconImageId
                        });
                    default:
                        return e
                }
            }
            var wn = function(e) {
                var t = Nt.b({
                        config: Mt,
                        debug: zt,
                        session: Gt,
                        stats: nn,
                        navigation: ln,
                        client: dn,
                        multiVote: hn,
                        metadata: En
                    }),
                    n = Nt.c("undefined" != typeof window && void 0 !== window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function(e) {
                        return e
                    });
                return Nt.d(t, e, n)
            };

            function On() {
                void 0 !== ("undefined" == typeof window ? "undefined" : kt()(window)) && window.scrollTo(0, 0)
            }
            var jn = c.b,
                _n = function(e) {
                    function t(e) {
                        var n;
                        return v()(this, t), n = w()(this, j()(t).call(this, e)), M()(jt()(n), "_loadedPathnames", void 0), n.state = {
                            loadedLocation: e.location
                        }, n._loadedPathnames = new Set([e.location.pathname]), n
                    }
                    return k()(t, e), x()(t, [{
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            var t = this;
                            if (e.location !== this.props.location) {
                                if (this._loadedPathnames.has(e.location.pathname)) return On(), void this.setState({
                                    loadedLocation: e.location
                                });
                                jn.canUseDOM = !1, Object(o.e)(r.createElement(P.d, {
                                    location: e.location,
                                    context: {}
                                }, r.createElement(o.a, {
                                    client: e.client
                                }, r.createElement(u.a, {
                                    store: wn(e.store.getState())
                                }, r.createElement(jn, null, r.createElement(Lt, {
                                    renderer: e.renderer
                                }, r.createElement(Tt.a, {
                                    domMonitor: e.domMonitor
                                }, r.createElement(ie.b, {
                                    reporter: e.reporter
                                }, r.createElement(At.a, null, r.createElement(P.e, null, e.children)))))))))).then(function() {
                                    jn.canUseDOM = !0, t._loadedPathnames.add(e.location.pathname), t.setState(function(t, n) {
                                        if (n.location === e.location) return On(), {
                                            loadedLocation: n.location
                                        }
                                    })
                                })
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.location,
                                n = e.loading,
                                o = this.state.loadedLocation;
                            return r.createElement(r.Fragment, null, n && t.pathname !== o.pathname ? r.createElement(n, null) : null, r.createElement(P.e, {
                                location: o
                            }, this.props.children))
                        }
                    }]), t
                }(r.Component);
            M()(_n, "contextTypes", {
                store: Ct.a.object
            });
            var kn = Object(P.h)(Object(Tt.j)(Object(o.g)(Object(ie.d)(_n)))),
                Sn = n("./src/screens/NotFoundScreen.tsx");

            function Cn(e) {
                var t = e.customDomain,
                    n = void 0 !== t && t,
                    o = Object(Me.a)(n),
                    i = r.useContext(It.a),
                    a = r.useContext(u.b).store;
                return r.createElement(kn, {
                    loading: $.v,
                    renderer: i,
                    store: a
                }, Ue()(o).map(function(e) {
                    var t = b()(e, 2),
                        n = t[0],
                        o = t[1],
                        i = o.name,
                        a = o.path,
                        c = pt[n];
                    return c ? r.createElement(wt, {
                        key: n,
                        name: i,
                        exact: !0,
                        path: a,
                        component: c
                    }) : null
                }), r.createElement(wt, {
                    name: "unknown",
                    render: function(e) {
                        return r.createElement(Sn.a, {
                            loggingData: {
                                reason: 3,
                                props: e
                            }
                        })
                    }
                }))
            }
            var Pn = n("./src/store/selectors/session.ts"),
                In = n("./src/styles/font.ts"),
                Ln = n("./src/util/performance.ts"),
                Tn = function() {
                    return r.createElement("script", null, "document.domain = document.domain;")
                };

            function An() {
                var e = Object(u.d)(function(e) {
                        return {
                            currentLocation: e.navigation.currentLocation,
                            referrer: e.navigation.referrer,
                            referrerSource: e.navigation.referrerSource
                        }
                    }),
                    t = e.currentLocation,
                    n = e.referrer,
                    o = e.referrerSource,
                    i = Object(ie.c)();
                return r.useEffect(function() {
                    i.event("client.navigate", {
                        metadata: {},
                        newPath: t || "",
                        oldPath: n || "",
                        source: o || ""
                    })
                }, [t]), null
            }
            var Nn = n("./src/components/privacy/EuPrivacyBannerLoader.tsx");
            var Rn = Object(u.c)()(function(e) {
                var t = e.email,
                    n = e.dispatch,
                    o = e.isLoggedin && !t;
                return r.useEffect(function() {
                    o && n(Object(_e.j)({
                        duration: "FOREVER",
                        message: "",
                        toastStyle: "VERIFY_EMAIL"
                    }))
                }, []), null
            });

            function Dn() {
                return (Dn = C()(p.a.mark(function e(t, r, o, i, a, c) {
                    var s, l, u;
                    return p.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Promise.all([n.e(30), n.e(26)]).then(n.bind(null, "./src/util/tracing.ts"));
                            case 2:
                                s = e.sent, l = s.init(t), u = s.extractSpan(l, r), s.instrumentAppPerformance(l, u, o, i, a, c);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }
            var Un = function(e) {
                    return {
                        backgroundColor: e.backgroundColor
                    }
                },
                Mn = function(e) {
                    function t() {
                        return v()(this, t), w()(this, j()(t).apply(this, arguments))
                    }
                    return k()(t, e), x()(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.instrumentApp()
                        }
                    }, {
                        key: "instrumentApp",
                        value: function() {
                            if (this.props.perf && !this.props.isBot) {
                                var e = Object(ae.a)(window.location.pathname, {
                                        isCustomDomain: this.props.isCustomDomain
                                    }),
                                    t = {
                                        route: e ? e.name : "unidentified",
                                        loggedIn: Object(Pn.a)(this.props.userId)
                                    },
                                    n = window.performance && window.performance.timing ? {
                                        duration: new Ln.a(window.performance.timing.navigationStart, Date.now())
                                    } : {};
                                this.props.perf.reportClientReady(t, n),
                                    function(e, t, n, r, o, i) {
                                        Dn.apply(this, arguments)
                                    }(this.props.lightStepConfig, this.props.originalSpanCarrier, this.props.dispatch, this.props.perf, this.props.userId, e)
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return r.createElement(Bn, this.props)
                        }
                    }]), t
                }(r.Component),
                Bn = function(e) {
                    var t = r.useState(!1),
                        n = b()(t, 2),
                        o = n[0],
                        i = n[1];
                    return r.useEffect(function() {
                        i(!0)
                    }, []), r.createElement(At.a, null, r.createElement($.L, null, function(t) {
                        return r.createElement("div", {
                            className: t([Object(In.t)(), Un])
                        }, r.createElement(Te, {
                            productName: e.productName
                        }), r.createElement(Se, null), r.createElement(Re, {
                            glyphUrl: e.glyphUrl
                        }), r.createElement(q, null), !e.isAmp && r.createElement(Tn, null), r.createElement(D.a, null, function() {
                            return null
                        }), r.createElement(R.a, {
                            name: ""
                        }, function() {
                            return null
                        }), r.createElement(D.a, null, function(e) {
                            var t = !!e;
                            return r.createElement(r.Fragment, null, r.createElement(Nn.b, {
                                loggedIn: t
                            }), r.createElement(ve, {
                                initialPageLoaded: o,
                                isLoggedIn: t
                            }), r.createElement(Rn, {
                                email: e && e.email,
                                isLoggedin: t
                            }))
                        }), r.createElement(An, null), r.createElement(Cn, {
                            customDomain: e.isCustomDomain
                        }), r.createElement(N, null), r.createElement(L.a, null), r.createElement(xe, {
                            initialPageLoaded: o
                        }), r.createElement(Oe, null))
                    }))
                },
                Hn = Object(I.hot)(Object(P.h)(Object(Ce.c)(Object(u.c)(function(e) {
                    return {
                        nodeEnv: e.config.nodeEnv,
                        productName: e.config.productName,
                        glyphUrl: e.config.glyphUrl,
                        isBot: e.client.isBot,
                        lightStepConfig: e.config.lightStep,
                        isAmp: e.config.isAmp,
                        originalSpanCarrier: e.debug.originalSpanCarrier,
                        stats: e.stats,
                        userId: e.session.user.id,
                        isCustomDomain: e.client.isCustomDomain
                    }
                })(Mn)))),
                Fn = n("./node_modules/apollo-client/bundle.esm.js"),
                zn = n("./node_modules/apollo-link-http/lib/index.js"),
                qn = n("./node_modules/apollo-cache-inmemory/lib/fragmentMatcher.js"),
                Wn = n("./node_modules/apollo-cache-inmemory/lib/inMemoryCache.js"),
                Vn = n("./src/fragmentTypes.json"),
                Gn = n("./node_modules/apollo-link/lib/bundle.esm.js");

            function Kn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Xn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Kn(n, !0).forEach(function(t) {
                        M()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kn(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function Yn() {
                var e = V()(["\n  query userResultByUsernameNormalizingQuery($username: ID!) {\n    userResult(username: $username) {\n      ... on User {\n        id\n      }\n    }\n  }\n"]);
                return Yn = function() {
                    return e
                }, e
            }

            function Qn() {
                var e = V()(["\n  query userResultByUserIdNormalizingQuery($userId: ID!) {\n    userResult(id: $userId) {\n      ... on User {\n        id\n      }\n    }\n  }\n"]);
                return Qn = function() {
                    return e
                }, e
            }

            function $n() {
                var e = V()(["\n  query userByUsernameNormalizingQuery($username: ID!) {\n    user(username: $username) {\n      id\n    }\n  }\n"]);
                return $n = function() {
                    return e
                }, e
            }

            function Jn() {
                var e = V()(["\n  query userByUserIdNormalizingQuery($userId: ID!) {\n    user(id: $userId) {\n      id\n    }\n  }\n"]);
                return Jn = function() {
                    return e
                }, e
            }
            var Zn = K()(Jn()),
                er = K()($n()),
                tr = K()(Qn()),
                nr = K()(Yn());
            var rr = function(e) {
                var t = e.uri,
                    n = e.state,
                    r = e.ssrMode,
                    o = e.transformLink,
                    i = e.version,
                    a = Object(zn.a)({
                        uri: t,
                        credentials: "same-origin"
                    });
                a = new Gn.a(function(e, t) {
                    var n = e.operationName;
                    return n && e.setContext(function(e) {
                        return {
                            headers: Xn({}, e.headers || {}, {
                                "Graphql-Operation": n
                            })
                        }
                    }), t(e)
                }).concat(a), o && (a = o(a));
                var c = new qn.b({
                        introspectionQueryResultData: Vn
                    }),
                    s = new Wn.a({
                        addTypename: !0,
                        fragmentMatcher: c,
                        dataIdFromObject: function(e) {
                            switch (e.__typename) {
                                case "Topic":
                                    return e.topicId || e.slug;
                                case "MeteringInfo":
                                    return "MeteringInfo:singleton";
                                case "PostPreview":
                                    var t = e.postId || e.post && e.post.id;
                                    if (t) return "".concat(e.__typename, ":").concat(t);
                                    break;
                                default:
                                    return Object(Wn.b)(e)
                            }
                        }
                    });
                return a = function(e) {
                    return new Gn.a(function(t, n) {
                        return n(t).map(function(n) {
                            if (t.query.definitions.find(function(e) {
                                    return "query" === e.operation && e.selectionSet.selections && ("user" === e.selectionSet.selections[0].name.value || "userResult" === e.selectionSet.selections[0].name.value) && ("username" === e.selectionSet.selections[0].arguments[0].name.value || "id" === e.selectionSet.selections[0].arguments[0].name.value)
                                })) {
                                var r = n.data.user || n.data.userResult;
                                if (r) {
                                    var o = {
                                            user: r
                                        },
                                        i = {
                                            userResult: r
                                        };
                                    r.id && (e.writeQuery({
                                        query: Zn,
                                        data: o,
                                        variables: {
                                            userId: r.id
                                        }
                                    }), e.writeQuery({
                                        query: tr,
                                        data: i,
                                        variables: {
                                            userId: r.id
                                        }
                                    })), r.username && (e.writeQuery({
                                        query: er,
                                        data: o,
                                        variables: {
                                            username: r.username
                                        }
                                    }), e.writeQuery({
                                        query: nr,
                                        data: i,
                                        variables: {
                                            username: r.username
                                        }
                                    }))
                                }
                            }
                            return n
                        })
                    })
                }(s).concat(a), {
                    cache: s,
                    client: new Fn.a({
                        link: a,
                        cache: !r && n ? s.restore(n) : s,
                        ssrMode: r,
                        connectToDevTools: !0,
                        name: "lite",
                        version: i,
                        defaultOptions: {
                            watchQuery: {
                                errorPolicy: "all"
                            },
                            query: {
                                errorPolicy: "all"
                            },
                            mutate: {
                                errorPolicy: "all"
                            }
                        }
                    })
                }
            };

            function or(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ir(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? or(n, !0).forEach(function(t) {
                        M()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : or(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ar = "Medium-Frontend-App",
                cr = "Medium-Frontend-Route";
            var sr = function(e) {
                    return "lite/".concat(e)
                },
                lr = n("./node_modules/fela/es/index.js"),
                ur = {
                    html: {
                        boxSizing: "border-box"
                    },
                    "*, *:before, *:after": {
                        boxSizing: "inherit"
                    },
                    body: {
                        margin: 0,
                        padding: 0,
                        textRendering: "optimizeLegibility",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgba(0,0,0,0.8)",
                        position: "relative",
                        minHeight: "100vh"
                    },
                    "h1, h2, h3, h4, h5, h6, dl, dd, ol, ul, menu, figure, blockquote, p, pre, form": {
                        margin: 0
                    },
                    "menu, ol, ul": {
                        padding: 0,
                        listStyle: "none",
                        listStyleImage: "none"
                    },
                    main: {
                        display: "block"
                    },
                    a: {
                        color: "inherit",
                        textDecoration: "none"
                    },
                    "a, button, input": {
                        WebkitTapHighlightColor: "transparent"
                    },
                    "img, svg": {
                        verticalAlign: "middle"
                    },
                    button: {
                        background: "transparent",
                        overflow: "visible"
                    },
                    "button, input, optgroup, select, textarea": {
                        margin: 0
                    }
                },
                dr = n("./node_modules/fela-plugin-fallback-value/es/index.js");
            var mr = function(e) {
                function t(e) {
                    var n;
                    return v()(this, t), (n = w()(this, j()(t).call(this, e))).state = {
                        caughtError: !1
                    }, n
                }
                return k()(t, e), x()(t, [{
                    key: "componentDidCatch",
                    value: function(e, t) {
                        var n = t.componentStack,
                            r = this.props.reporter;
                        this.setState({
                            caughtError: !0
                        }), r.report(e, {
                            via: "componentDidCatch",
                            componentStack: n
                        }), m.withScope(function(t) {
                            t.setExtra("componentStack", n), t.setLevel("error"), m.captureException(e)
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.children,
                            n = e.whenError;
                        return this.state.caughtError ? n : t
                    }
                }]), t
            }(r.Component);

            function fr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function pr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? fr(n, !0).forEach(function(t) {
                        M()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fr(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var gr = 50,
                br = 10,
                hr = function() {
                    function e(t) {
                        var n = t.userId,
                            r = t.authDomain;
                        v()(this, e), M()(this, "userId", void 0), M()(this, "authDomain", void 0), M()(this, "_queue", void 0), M()(this, "_reported", void 0), M()(this, "_timeout", void 0), this.userId = n, this.authDomain = r, this._queue = [], this._reported = 0
                    }
                    return x()(e, [{
                        key: "report",
                        value: function(e, t) {
                            var n = this;
                            this._queue.length >= br || this._reported >= gr || (this._queue.push({
                                name: e.name,
                                message: e.message,
                                stack: e.stack,
                                timestamp: Date.now(),
                                fileName: e.fileName,
                                lineNumber: e.lineNumber,
                                extra: pr({
                                    client: "lite",
                                    build: window.__BUILD_ID__,
                                    userId: this.userId,
                                    userAgent: navigator.userAgent,
                                    location: window.location.href
                                }, t)
                            }), void 0 === this._timeout && (this._timeout = setTimeout(function() {
                                return n._send()
                            }, 5e3)))
                        }
                    }, {
                        key: "_send",
                        value: function() {
                            delete this._timeout;
                            var e = "".concat(this.authDomain || "").concat(Object(ne.F)());
                            fetch(e, {
                                credentials: "same-origin",
                                method: "POST",
                                headers: {
                                    "content-type": "application/json",
                                    "x-xsrf-token": "1"
                                },
                                body: JSON.stringify(this._queue)
                            }), this._reported += this._queue.length, this._queue = []
                        }
                    }]), e
                }(),
                vr = n("./src/svg/logo-wordmark-138x27px.svg"),
                yr = ["medium-content-sans-serif-font", '"Lucida Grande"', '"Lucida Sans Unicode"', '"Lucida Sans"', "Geneva", "Arial", "sans-serif"].join(", "),
                xr = {
                    layout: {
                        display: "flex",
                        flexDirection: "column",
                        height: "100vh"
                    },
                    header: {
                        paddingTop: "20px"
                    },
                    logo: {
                        display: "block",
                        width: "138px",
                        height: "27px",
                        margin: "auto"
                    },
                    container: {
                        display: "flex",
                        flex: "1",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    main: {
                        boxSizing: "border-box",
                        paddingBottom: "20px",
                        paddingLeft: "24px",
                        paddingRight: "24px"
                    },
                    heading: {
                        fontFamily: yr,
                        fontSize: "44px",
                        lineHeight: 1.1,
                        marginBottom: "0.3em"
                    },
                    paragraph: {
                        fontFamily: yr,
                        fontSize: "22px",
                        lineHeight: 1.25,
                        marginBottom: "0.3em"
                    }
                },
                Er = function(e) {
                    var t = e.children;
                    return r.createElement("div", {
                        style: xr.layout
                    }, t)
                },
                wr = function(e) {
                    var t = e.children;
                    return r.createElement("header", {
                        style: xr.header
                    }, t)
                },
                Or = function() {
                    return r.createElement("a", {
                        href: "/"
                    }, r.createElement(vr.a, {
                        style: xr.logo
                    }))
                },
                jr = function(e) {
                    var t = e.children;
                    return r.createElement("div", {
                        style: xr.container
                    }, t)
                },
                _r = function(e) {
                    var t = e.children;
                    return r.createElement("main", {
                        style: xr.main
                    }, t)
                },
                kr = function(e) {
                    var t = e.children;
                    return r.createElement("h1", {
                        style: xr.heading
                    }, t)
                },
                Sr = function(e) {
                    var t = e.children;
                    return r.createElement("p", {
                        style: xr.paragraph
                    }, t)
                };

            function Cr() {
                return r.createElement(Er, null, r.createElement(wr, null, r.createElement(Or, null)), r.createElement(jr, null, r.createElement(_r, null, r.createElement(kr, null, "Error"), r.createElement(Sr, null, "We’re sorry, but there was a problem displaying this page."), r.createElement(Sr, null, "Please reload and try again."))))
            }
            var Pr = function() {
                console.log("-+++++=        .+++++=\n.+@@@@@+       #@@@@*:\n  .@@@@@=     *@@@@@  \n   @+@@@@-   =#@@@@@  \n   @ +@@@@: :% @@@@@  \n   @  *@@@@-%: @@@@@  \n   @   *@@@@-  @@@@@  \n  -@-   #@@+  :@@@@@: \n-#@@@#-  ##  =@@@@@@@=\n.......      .........\n"), console.log("We're hiring! https://medium.com/jobs-at-medium/work-at-medium-959d1a85284e");
                var e = window.__PRELOADED_STATE__;
                if (!e) throw new Error("Expected window.__PRELOADED_STATE__ to exist.");
                var t = wn(e),
                    n = t.getState(),
                    i = n.config.version,
                    s = n.client.isCustomDomain,
                    l = n.navigation.host,
                    f = window.__GRAPHQL_URI__;
                if (!f) throw new Error("Expected window.__GRAPHQL_URI__ to exist.");
                var p = window.__APOLLO_STATE__;
                if (!p) throw new Error("Expected window.__APOLLO_STATE__ to exist.");
                var g, b = rr({
                        uri: f,
                        ssrMode: !1,
                        state: p,
                        transformLink: function(e) {
                            return function(e, t) {
                                var n = sr(e);
                                return new Gn.a(function(e, r) {
                                    var o = Object(ae.a)(window.location.pathname, {
                                        isCustomDomain: t
                                    });
                                    return e.setContext(function(e) {
                                        var t;
                                        return {
                                            headers: ir({}, e.headers || {}, (t = {}, M()(t, ar, n), M()(t, cr, o ? o.name : "unidentified"), t))
                                        }
                                    }), r(e)
                                })
                            }(i, s).concat(e)
                        },
                        version: i
                    }).client,
                    h = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.noGlobals,
                            n = e.ssrMode,
                            r = Object(lr.b)({
                                plugins: [Object(dr.a)()],
                                mediaQueryOrder: ["all and (min-width: 1080px)", "all and (max-width: 1079.98px)", "all and (max-width: 903.98px)", "all and (max-width: 727.98px)", "all and (max-width: 551.98px)", "all and (min-width: 904px) and (max-width: 1079.98px)", "all and (min-width: 728px) and (max-width: 903.98px)", "all and (min-width: 552px) and (max-width: 727.98px)", "print"]
                            });
                        return n || Object(Pt.a)(r), t || Object.keys(ur).forEach(function(e) {
                            return r.renderStatic(ur[e], e)
                        }), r
                    }(),
                    v = n.session.user.id,
                    y = new ie.a({
                        userId: v,
                        reduxStore: t
                    }),
                    x = new hr({
                        userId: v
                    }),
                    E = new Ce.b({
                        host: l,
                        version: i
                    });
                window.onerror = (g = x, function(e, t, n, r, o) {
                    if (null != o) g.report(o, {
                        via: "window.onerror"
                    });
                    else {
                        var i = String(t).split(/[\/\\]/).pop();
                        g.report({
                            message: "string" == typeof e ? e : e.type,
                            fileName: i,
                            lineNumber: n
                        })
                    }
                }), m.init({
                    beforeSend: function(e, t) {
                        var n = Object(ae.a)(window.location.pathname, {
                            isCustomDomain: s
                        });
                        return e.tags && (e.tags.route = n ? n.name : "unidentified"), e
                    },
                    dsn: n.config.sentry.dsn,
                    environment: "".concat(n.config.sentry.environment, "-client"),
                    release: n.config.version
                }), m.configureScope(function(e) {
                    e.setUser({
                        id: n.session.user.id
                    }).setTag("version", i)
                });
                var w, O = new Tt.f;
                (w = a.a.hydrate, function(e) {
                    var n = document.getElementById("root");
                    n && w(r.createElement(mr, {
                        reporter: x,
                        whenError: r.createElement(Cr, {
                            error: {}
                        })
                    }, r.createElement(Tt.a, {
                        domMonitor: O
                    }, r.createElement(ie.b, {
                        reporter: y
                    }, r.createElement(Ce.a, {
                        reporter: E
                    }, r.createElement(Lt, {
                        renderer: h
                    }, r.createElement(o.a, {
                        client: b
                    }, r.createElement(u.a, {
                        store: t
                    }, r.createElement(c.b, null, r.createElement(d.a, null, r.createElement(e, null)))))))))), n)
                })(Hn)
            };
            window.main = function() {
                Object(Ln.c)(), l.a.preloadReady().then(Pr)
            }
        },
        "./src/log/index.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                o = n.n(r);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var a = function(e, t) {
                    return "string" == typeof e ? {
                        msg: e
                    } : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? i(n, !0).forEach(function(t) {
                                o()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({
                        msg: t
                    }, e)
                },
                c = {
                    debug: function(e, t) {
                        console.debug(a(e, t))
                    },
                    info: function(e, t) {
                        console.log(a(e, t))
                    },
                    warn: function(e, t) {
                        console.warn(a(e, t))
                    },
                    error: function(e, t) {
                        console.error(a(e, t))
                    }
                }
        },
        "./src/routes/getLiteRouteForPath.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("./src/routes/index.ts");

            function o(e) {
                var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).isCustomDomain,
                    n = void 0 !== t && t,
                    o = e.replace(/\?.*$/, ""),
                    i = Object(r.a)(n);
                for (var a in i) {
                    var c = i[a];
                    if (c.pattern.test(o)) return c
                }
            }
        },
        "./src/routes/index.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("./node_modules/path-to-regexp/index.js"),
                o = n.n(r);

            function i(e, t, n) {
                return {
                    name: e,
                    path: t,
                    flagName: n,
                    pattern: o()(t)
                }
            }
            var a = {
                    "amp-post": i("amp-post", "/amp/p/:postId"),
                    "billing-history": i("billing-history", "/me/billing-history"),
                    "not-available": i("not-available", "/not-available"),
                    "logged-out-homepage": i("lo-homepage", "/", "enable_lo_homepage"),
                    "post-by-id": i("post", "/p/:postId([0-9a-f]+)", "enable_lite_post"),
                    "post-by-slug": i("post", "/p/:postSlug([^\\/]+-[0-9a-f]+)", "enable_lite_post"),
                    profile: i("profile", "/@:username"),
                    "profile/claps": i("profile", "/@:username/has-recommended"),
                    "profile/highlights": i("profile", "/@:username/highlights"),
                    "profile/latest": i("profile", "/@:username/latest"),
                    "profile/responses": i("profile", "/@:username/responses"),
                    "profile/series": i("profile", "/@:username/series"),
                    "sequence-library": i("sequence-library", "/collections"),
                    series: i("series", "/series/:postSlug"),
                    "stats-post": i("stats-post", "/me/stats/post/:postId"),
                    stories: i("stories", "/me/stories", "enable_lite_stories"),
                    "stories/drafts": i("stories", "/me/stories/drafts", "enable_lite_stories"),
                    "stories/public": i("stories", "/me/stories/public", "enable_lite_stories"),
                    "stories/unlisted": i("stories", "/me/stories/unlisted", "enable_lite_stories"),
                    topic: i("topic", "/topic/:topicSlug"),
                    "landing-pages/ticks": i("landing-pages/ticks", "/l/ticks", "enable_tick_landing_page"),
                    "sequence-post": i("sequence-post", "/s/:sequenceSlug/:postIdOrSlug", "enable_lite_post"),
                    "landing-pages/trumpland": i("landing-pages/trumpland", "/l/the-trump-45", "enable_trumpland_landing_page"),
                    "package-builder": i("LoadablePackageBuilderHandler", "/l/package-builder", "enable_package_builder"),
                    "package-builder-pub": i("LoadablePackageBuilderPubHandler", "/l/package-builder/:collectionId([0-9a-f]+)", "enable_package_builder"),
                    "package-preview": i("LoadablePackagePreviewHandler", "/l/package-preview/:collectionId([0-9a-f]+)", "enable_new_pub_modules"),
                    "post-by-id-under-user": i("post", "/@:username/:postId([0-9a-f]+)", "enable_lite_post"),
                    "post-by-slug-under-user": i("post", "/@:username/:postSlug([^\\/]+-[0-9a-f]+)", "enable_lite_post"),
                    "post-by-id-under-collection": i("post", "/:collectionSlug([^\\/]{3,})/:postId([0-9a-f]+)", "enable_lite_post"),
                    "post-by-slug-under-collection": i("post", "/:collectionSlug([^\\/]{3,})/:postSlug([^\\/]+-[0-9a-f]+)", "enable_lite_post"),
                    "post-settings": i("post-settings", "/p/:postId([0-9a-f]+)/settings", "enable_post_settings_screen")
                },
                c = {
                    "amp-post/custom-domain": i("amp-post", "/amp/p/:postId"),
                    "post-by-slug/custom-domain": i("post", "/:postSlug([^\\/]+-[0-9a-f]+)", "enable_lite_post_cd"),
                    "post-by-id/custom-domain": i("post", "/:postId([0-9a-f]+)", "enable_lite_post_cd")
                };

            function s() {
                return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? c : a
            }
        },
        "./src/screens/ErrorScreen.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./node_modules/react-router/esm/react-router.js"),
                c = n("./src/components/metabar/Metabar.tsx"),
                s = n("./src/framework/design-system/components/index.ts"),
                l = n("./src/framework/design-system/util/type/toRule.ts"),
                u = n("./src/framework/style/index.ts"),
                d = n("./src/styles/font.ts"),
                m = n("./src/util/routes.ts"),
                f = function(e) {
                    e.error;
                    return !1
                },
                p = i.createContext(null),
                g = function(e) {
                    var t = i.useContext(p);
                    e && t && t.report(e)
                };

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            n.d(t, "a", function() {
                return x
            });
            var h = {
                    fontSize: "20px",
                    textTransform: "uppercase"
                },
                v = function(e) {
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? b(n, !0).forEach(function(t) {
                                o()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, Object(l.a)(function(e) {
                        return {
                            font: e.font.elevate,
                            fontSize: 192,
                            lineHeight: 200,
                            display: "block"
                        }
                    })(e))
                },
                y = {
                    fontSize: "24px"
                };

            function x(e) {
                var t = Object(u.useCx)();
                return g(e.error), i.createElement(a.b, {
                    render: function(n) {
                        var r = n.staticContext;
                        return r && (r.status = 500), i.createElement("div", null, i.createElement(c.a, null), i.createElement(s.b, {
                            tag: "section",
                            paddingTop: "60px",
                            paddingBottom: "60px"
                        }, i.createElement(s.B, {
                            columns: 8
                        }, i.createElement(s.b, {
                            display: "flex",
                            alignItems: "flex-start",
                            flexWrap: "wrap"
                        }, i.createElement(s.b, {
                            display: "flex",
                            flexDirection: "column"
                        }, i.createElement("div", {
                            className: t(h)
                        }, "Error"), i.createElement("div", {
                            className: t(v)
                        }, "500")), i.createElement("div", {
                            className: t(Object(d.l)())
                        }, i.createElement(s.b, {
                            marginBottom: "28px"
                        }, i.createElement("div", {
                            className: t(y)
                        }, "Our nimblest minds and quickest coders are scrambling to bring Medium back — so hold tight.")), i.createElement("div", {
                            className: t(y)
                        }, "What can you do? Try refreshing this page or check", " ", i.createElement(s.u, {
                            href: Object(m.sb)(),
                            display: "inline-block",
                            inline: !0,
                            target: "_blank",
                            linkStyle: "OBVIOUS"
                        }, "Medium's status"), "."))))), f(e))
                    }
                })
            }
        },
        "./src/screens/LoadingScreen.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("./node_modules/react/index.js"),
                o = n("./src/framework/design-system/components/index.ts"),
                i = n("./src/components/metabar/Logo.tsx");

            function a() {
                return r.createElement(o.b, {
                    height: "100vh",
                    width: "100vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }, r.createElement(i.a, null))
            }
        },
        "./src/screens/NotFoundScreen.tsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./node_modules/react-router/esm/react-router.js"),
                c = n("./src/framework/design-system/components/index.ts"),
                s = n("./src/components/metabar/Metabar.tsx"),
                l = n("./src/util/routes.ts"),
                u = n("./src/components/post-listing/PostListingItemImage.tsx"),
                d = n("./src/components/post-listing/PostListingItemBylineWithAvatar.tsx"),
                m = n("./src/framework/design-system/util/type/toRule.ts"),
                f = n("./src/framework/style/index.ts"),
                p = n("./src/styles/breakpoints.ts");

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var b = {
                    fontSize: "20px",
                    textTransform: "uppercase"
                },
                h = function(e) {
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? g(n, !0).forEach(function(t) {
                                o()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, Object(m.a)(function(e) {
                        return {
                            font: e.font.marketing,
                            lineHeight: 200,
                            display: "block"
                        }
                    })(e), o()({
                        fontSize: "192px"
                    }, p.sm(e), {
                        fontSize: "150px"
                    }))
                },
                v = function(e) {
                    var t = Object(f.useCx)();
                    return i.createElement(c.b, {
                        display: "flex",
                        flexDirection: "column"
                    }, i.createElement("div", {
                        className: t(b)
                    }, "Error"), i.createElement("div", {
                        className: t(h)
                    }, e))
                },
                y = n("./src/styles/font.ts");

            function x(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(n, !0).forEach(function(t) {
                        o()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            n.d(t, "a", function() {
                return P
            });
            var w = function(e) {
                    return {
                        marginTop: "-20px",
                        fontSize: "48px",
                        color: "#aaa",
                        letterSpacing: "normal",
                        lineHeight: "48px"
                    }
                },
                O = {
                    display: "flex",
                    flexDirection: "row",
                    "@media (max-width: 767px)": {
                        flexDirection: "column"
                    }
                },
                j = function(e, t) {
                    return function(n) {
                        var r = {
                            border: "1px solid ".concat(n.baseColor.border.lighter),
                            borderRadius: "5px",
                            boxShadow: "0 1px 4px ".concat(n.baseColor.border.lighter),
                            margin: "8px",
                            width: "calc(calc(100% / 3) - 8px)",
                            overflow: "hidden",
                            "@media (max-width: 767px)": {
                                width: "100%",
                                marginLeft: "0",
                                marginRight: "0"
                            }
                        };
                        return 0 === e ? E({}, r, {
                            marginLeft: "0px"
                        }) : e === t ? E({}, r, {
                            marginRight: "0px"
                        }) : r
                    }
                },
                _ = [{
                    id: "52e72e10614",
                    previewImage: {
                        id: "1*6XM15VaWbf7HK1HmiRkv1Q.png",
                        focusPercentX: 0,
                        focusPercentY: 20
                    },
                    title: "All the Mugs I’ve Loved and Lost",
                    creator: {
                        id: "6a0cce7d484d",
                        imageId: "1*ErUzRtpA1KJr93I-T5kCpQ@2x.jpeg",
                        name: "Danielle Morgan",
                        username: "danielleaamorgan",
                        mediumMemberAt: 0
                    },
                    statusForCollection: "APPROVED",
                    collection: {
                        id: "544c7006046e",
                        domain: "humanparts.medium.com",
                        name: "Human Parts",
                        slug: "human-parts"
                    },
                    readingTime: 6.69559748427673,
                    isLocked: !0,
                    updatedAt: 1556564895449
                }, {
                    id: "596d1a826429",
                    previewImage: {
                        id: "1*WPMRCdxJhe4cvefeJ5FbmQ.jpeg",
                        focusPercentX: 45,
                        focusPercentY: 50
                    },
                    title: "Lost in Conversation",
                    creator: {
                        id: "f65f67f321fe",
                        imageId: "1*HJS2Dolxg5B0n7u1oJ213w.jpeg",
                        name: "Omar Merza",
                        username: "MerzaOmar",
                        mediumMemberAt: 0
                    },
                    statusForCollection: "APPROVED",
                    collection: {
                        id: "d415956deb14",
                        domain: void 0,
                        name: "The Coffeelicious",
                        slug: "the-coffeelicious"
                    },
                    readingTime: 5,
                    isLocked: !1,
                    updatedAt: 1505826905e3
                }, {
                    id: "3f942a018492",
                    previewImage: {
                        id: "1*tKP4kGZhSa-H0wroJxY3fQ.jpeg",
                        focusPercentX: 50,
                        focusPercentY: 50
                    },
                    title: "The Lost Photographs of Penang",
                    creator: {
                        id: "f867736dc389",
                        imageId: "1*AuwihOv-G6udHbXes_-rhA.jpeg",
                        name: "Ted Anthony",
                        username: "anthonyted",
                        mediumMemberAt: 1490944652e3
                    },
                    statusForCollection: "APPROVED",
                    collection: {
                        id: "2293067a9eb2",
                        domain: "stuff.life",
                        name: "Stuff Dot Life",
                        slug: "stuff-dot-life"
                    },
                    readingTime: 10,
                    isLocked: !0,
                    updatedAt: 1505826905e3
                }],
                k = function(e) {
                    return i.createElement(i.Fragment, null, i.createElement(u.b, {
                        post: e,
                        miroWidth: 767,
                        miroHeight: 271
                    }), i.createElement(c.b, {
                        marginTop: "16px",
                        marginLeft: "16px"
                    }, function(e) {
                        return i.createElement(c.f, {
                            href: Object(l.cb)(e)
                        }, i.createElement(c.p, {
                            clamp: 2
                        }, e.title))
                    }(e)), i.createElement(c.b, {
                        marginTop: "20px",
                        marginBottom: "20px",
                        paddingLeft: "29px",
                        paddingRight: "20px"
                    }, i.createElement(d.b, {
                        post: e
                    })))
                },
                S = function() {
                    return i.createElement(c.L, null, function(e) {
                        return i.createElement(i.Fragment, null, i.createElement("div", null, i.createElement(c.m, null, "Feeling lost? You’re not alone."), i.createElement(c.b, {
                            marginTop: "16px",
                            marginBottom: "16px"
                        }, i.createElement(c.a, null, "Enjoy these stories about getting lost, losing things, and finding what you never knew you were looking for"))), i.createElement("div", {
                            className: e(O)
                        }, i.createElement(c.L, null, function(e) {
                            return _.map(function(t, n) {
                                return i.createElement("div", {
                                    key: n,
                                    className: e(j(n, _.length - 1))
                                }, k(t))
                            })
                        })))
                    })
                },
                C = function() {
                    return i.createElement(c.L, null, function(e) {
                        return i.createElement(i.Fragment, null, v(404), i.createElement("div", {
                            className: e(Object(y.l)())
                        }, i.createElement("h2", {
                            className: e(w)
                        }, "We couldn’t find this page.")))
                    })
                };

            function P(e) {
                return i.createElement(a.b, {
                    render: function(t) {
                        var n = t.staticContext;
                        return n && (n.loggingData = e.loggingData, n.status = 404), i.createElement(i.Fragment, null, i.createElement(s.a, null), i.createElement(c.B, null, C()), i.createElement(c.b, {
                            tag: "section",
                            marginTop: "100px",
                            paddingTop: "20px",
                            paddingLeft: "50px",
                            paddingRight: "50px",
                            paddingBottom: "120px",
                            backgroundColor: "BASE_LIGHT"
                        }, i.createElement(c.B, null, i.createElement(c.A, {
                            ui: "REGULAR"
                        }, S()))))
                    }
                })
            }
        },
        "./src/screens/helpers/visits.ts": function(e, t, n) {
            "use strict";
            n.d(t, "h", function() {
                return s
            }), n.d(t, "d", function() {
                return l
            }), n.d(t, "j", function() {
                return u
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "g", function() {
                return f
            }), n.d(t, "b", function() {
                return p
            }), n.d(t, "a", function() {
                return b
            }), n.d(t, "f", function() {
                return h
            }), n.d(t, "e", function() {
                return v
            }), n.d(t, "i", function() {
                return y
            });
            var r = n("./src/util/LocalStorage.ts"),
                o = n("./src/util/constants.ts"),
                i = new r.a("post-article"),
                a = function(e) {
                    return new Date(e).setUTCHours(0, 0, 0, 0) - new Date(e).getDay() * o.a
                },
                c = function(e) {
                    var t = new Date(e);
                    return Date.UTC(t.getFullYear(), t.getMonth(), 1)
                };

            function s() {
                var e, t, n = Date.now();
                Number(i.get("first-post-viewed-timestamp", "0")) < a(n) ? (e = 1, i.set("first-post-viewed-timestamp", n)) : e = i.get("posts-viewed-count", "0") + 1, i.set("posts-viewed-count", e), Number(i.get("first-post-viewed-month-timestamp", "0")) < c(n) ? (t = 1, i.set("first-post-viewed-month-timestamp", n)) : t = i.get("posts-viewed-month-count", "0") + 1, i.set("posts-viewed-month-count", t)
            }

            function l() {
                var e = parseInt(i.get("posts-viewed-month-count", "0"), 10);
                return isNaN(e) && (e = 0), e
            }

            function u() {
                i.set("last-seen-prompt-timestamp", Date.now())
            }

            function d() {
                return Number(i.get("last-seen-prompt-timestamp", "0"))
            }
            var m = new r.a("google-one-tap");

            function f() {
                m.set("hide-at", Date.now())
            }

            function p() {
                return Number(m.get("hide-at", "0"))
            }
            var g = new r.a("read-next");

            function b() {
                g.set("dismiss", Date.now())
            }

            function h() {
                return Number(g.get("dismiss", "0")) + o.a > Date.now()
            }

            function v() {
                g.set("hide-meter", Date.now())
            }

            function y() {
                return !(Number(g.get("hide-meter", "0")) + o.a > Date.now())
            }
        },
        "./src/store/actions/branch.ts": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return a
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "h", function() {
                return u
            }), n.d(t, "g", function() {
                return d
            }), n.d(t, "e", function() {
                return m
            }), n.d(t, "f", function() {
                return f
            });
            var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                o = n.n(r);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var a = "SET_BRANCH_DATA",
                c = "SHOW_BRANCH_BANNER",
                s = "HIDE_BRANCH_BANNER",
                l = "RESET_SHOW_BRANCH_BANNER";

            function u() {
                return {
                    type: c
                }
            }

            function d(e) {
                return e.data.loaded = !0,
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? i(n, !0).forEach(function(t) {
                                o()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({
                        type: a
                    }, e)
            }

            function m() {
                return {
                    type: s
                }
            }

            function f() {
                return {
                    type: l
                }
            }
        },
        "./src/store/actions/config.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            });
            var r = "SET_IS_AMP";

            function o(e) {
                return {
                    type: r,
                    isAmp: e
                }
            }
        },
        "./src/store/actions/debug.ts": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, "c", function() {
                return i
            });
            var r = "SET_TRACE_URL",
                o = "SET_ORIGINAL_SPAN_CARRIER";

            function i(e) {
                return {
                    type: r,
                    performanceTraceUrl: e
                }
            }
        },
        "./src/store/actions/googleOneTap.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            });
            var r = "HIDE_GOOGLE_ONE_TAP";

            function o() {
                return {
                    type: r,
                    hideGoogleOneTap: !0
                }
            }
        },
        "./src/store/actions/metadata.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            });
            var r = "SET_FAVICON_IMAGE_ID";

            function o(e) {
                return {
                    type: r,
                    faviconImageId: e
                }
            }
        },
        "./src/store/actions/multiVote.ts": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, "d", function() {
                return i
            }), n.d(t, "c", function() {
                return a
            });
            var r = "SET_CLAP_COUNTS_FOR_POST",
                o = "CLEAR_CLAP_COUNTS_FOR_POST";

            function i(e) {
                var t = e.postId,
                    n = e.clapCount,
                    o = e.viewerClapCount,
                    i = e.viewerHasClappedSinceFetch;
                return {
                    type: r,
                    postId: t,
                    clapCount: n,
                    viewerClapCount: o,
                    viewerHasClappedSinceFetch: i
                }
            }

            function a(e) {
                var t = e.postId;
                return {
                    type: o,
                    postId: t
                }
            }
        },
        "./src/store/actions/navigation.ts": function(e, t, n) {
            "use strict";
            n.d(t, "e", function() {
                return r
            }), n.d(t, "l", function() {
                return o
            }), n.d(t, "d", function() {
                return i
            }), n.d(t, "k", function() {
                return a
            }), n.d(t, "f", function() {
                return c
            }), n.d(t, "m", function() {
                return s
            }), n.d(t, "g", function() {
                return l
            }), n.d(t, "n", function() {
                return u
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "j", function() {
                return m
            }), n.d(t, "b", function() {
                return f
            }), n.d(t, "i", function() {
                return p
            }), n.d(t, "a", function() {
                return g
            }), n.d(t, "h", function() {
                return b
            });
            var r = "SET_CURRENT_PATH";

            function o(e) {
                return {
                    type: r,
                    path: e
                }
            }
            var i = "SET_CURRENT_HASH";

            function a(e) {
                return {
                    type: i,
                    hash: e.length > 1 ? e.substring(1) : e
                }
            }
            var c = "SET_REFERRER_SOURCE";

            function s(e) {
                return {
                    type: c,
                    referrerSource: e
                }
            }
            var l = "SET_UNSAFE_REDIRECT_URL";

            function u(e) {
                return {
                    type: l,
                    unsafeRedirectUrl: e
                }
            }
            var d = "ENQUEUE_TOAST";

            function m(e) {
                var t = e.duration,
                    n = e.message,
                    r = e.toastStyle,
                    o = t;
                return t || 0 === t || (o = 5e3), {
                    type: d,
                    duration: o,
                    message: n,
                    toastStyle: void 0 === r ? "MESSAGE" : r
                }
            }
            var f = "CLEAR_TOASTS";

            function p() {
                return {
                    type: f
                }
            }
            var g = "CLEAR_POST_PUBLISHED_TYPE";

            function b() {
                return {
                    type: g
                }
            }
        },
        "./src/store/selectors/session.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var r = function(e) {
                return !e.match(/^lo_/)
            }
        },
        "./src/styles/breakpoints.ts": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "xs", function() {
                return r
            }), n.d(t, "sm", function() {
                return o
            }), n.d(t, "md", function() {
                return i
            }), n.d(t, "lg", function() {
                return a
            }), n.d(t, "xl", function() {
                return c
            });
            var r = function(e) {
                    return "@media all and (max-width: ".concat(e.breakpoints.sm - .02, "px)")
                },
                o = function(e) {
                    return "@media all and (max-width: ".concat(e.breakpoints.md - .02, "px)")
                },
                i = function(e) {
                    return "@media all and (max-width: ".concat(e.breakpoints.lg - .02, "px)")
                },
                a = function(e) {
                    return "@media all and (max-width: ".concat(e.breakpoints.xl - .02, "px)")
                },
                c = function(e) {
                    return "@media all and (min-width: ".concat(e.breakpoints.xl, "px)")
                }
        },
        "./src/styles/colors.ts": function(e, t, n) {
            "use strict";
            n.d(t, "u", function() {
                return r
            }), n.d(t, "v", function() {
                return o
            }), n.d(t, "m", function() {
                return i
            }), n.d(t, "n", function() {
                return a
            }), n.d(t, "o", function() {
                return c
            }), n.d(t, "p", function() {
                return s
            }), n.d(t, "t", function() {
                return l
            }), n.d(t, "w", function() {
                return u
            }), n.d(t, "y", function() {
                return d
            }), n.d(t, "r", function() {
                return m
            }), n.d(t, "s", function() {
                return f
            }), n.d(t, "q", function() {
                return p
            }), n.d(t, "a", function() {
                return g
            }), n.d(t, "b", function() {
                return b
            }), n.d(t, "f", function() {
                return h
            }), n.d(t, "h", function() {
                return v
            }), n.d(t, "g", function() {
                return y
            }), n.d(t, "i", function() {
                return x
            }), n.d(t, "e", function() {
                return E
            }), n.d(t, "c", function() {
                return w
            }), n.d(t, "d", function() {
                return O
            }), n.d(t, "j", function() {
                return j
            }), n.d(t, "x", function() {
                return _
            }), n.d(t, "k", function() {
                return k
            }), n.d(t, "l", function() {
                return S
            });
            var r = function(e) {
                    return "rgba(3, 168, 124, ".concat(e, ")")
                },
                o = function(e) {
                    return "rgba(1, 143, 105, ".concat(e, ")")
                },
                i = "rgba(52, 231, 154, ".concat(1, ")"),
                a = r(1),
                c = function(e) {
                    return "rgba(2, 158, 116, ".concat(e, ")")
                }(1),
                s = o(1),
                l = function(e) {
                    return "rgba(0, 0, 0, ".concat(e, ")")
                },
                u = function(e) {
                    return "rgba(255, 255, 255, ".concat(e, ")")
                },
                d = (l(1), u(1)),
                m = "rgba(12, 242, 143, .2)",
                f = "rgba(12, 242, 150, .5)",
                p = "rgba(12, 235, 160, .9)",
                g = "rgba(158, 213, 237, 0.5)",
                b = "#54AFCC",
                h = "#D3E9DA",
                v = "#E8F3EC",
                y = "#01B595",
                x = "#218799",
                E = "#FEF2ED",
                w = "#FCE7DD",
                O = "#EE6F70",
                j = "rgb(204, 84, 84)",
                _ = "rgb(204, 84, 84)",
                k = "rgb(59, 89, 152)",
                S = "rgb(29, 49, 91)"
        },
        "./src/styles/flex.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var r = function(e) {
                return {
                    display: "flex",
                    flexDirection: e.flexDirection,
                    justifyContent: e.justifyContent,
                    alignItems: e.alignItems
                }
            }
        },
        "./src/styles/font.ts": function(e, t, n) {
            "use strict";
            n.d(t, "m", function() {
                return i
            }), n.d(t, "e", function() {
                return a
            }), n.d(t, "j", function() {
                return c
            }), n.d(t, "p", function() {
                return l
            }), n.d(t, "q", function() {
                return u
            }), n.d(t, "o", function() {
                return p
            }), n.d(t, "f", function() {
                return g
            }), n.d(t, "d", function() {
                return b
            }), n.d(t, "g", function() {
                return h
            }), n.d(t, "l", function() {
                return v
            }), n.d(t, "i", function() {
                return y
            }), n.d(t, "c", function() {
                return x
            }), n.d(t, "b", function() {
                return E
            }), n.d(t, "s", function() {
                return w
            }), n.d(t, "t", function() {
                return O
            }), n.d(t, "h", function() {
                return j
            }), n.d(t, "k", function() {
                return _
            }), n.d(t, "a", function() {
                return k
            }), n.d(t, "r", function() {
                return S
            }), n.d(t, "n", function() {
                return C
            });
            var r = n("./src/framework/design-system/util/style/responsiveStyles.ts"),
                o = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.map(function(e) {
                        return -1 === e.indexOf(" ") ? e : '"'.concat(e, '"')
                    }).join(", ")
                },
                i = o("medium-content-title-font", "Georgia", "Cambria", "Times New Roman", "Times", "serif"),
                a = o("medium-content-sans-serif-font", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "Geneva", "Arial", "sans-serif"),
                c = o("medium-content-serif-font", "Georgia", "Cambria", "Times New Roman", "Times", "serif"),
                s = o("medium-content-slab-serif-font", "Georgia", "Cambria", "Times New Roman", "Times", "serif"),
                l = o("medium-content-title-font", "Georgia", "Cambria", "Times New Roman", "Times", "serif"),
                u = o("medium-marketing-display-font", "Georgia", "Cambria", "Times New Roman", "Times", "serif"),
                d = o("Menlo", "Monaco", "Courier New", "Courier", "monospace"),
                m = o("medium-content-sans-serif-font", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "sans-serif"),
                f = function(e, t) {
                    return function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return function(o) {
                            var i = (n || {}).fontSize,
                                a = {
                                    fontFamily: e,
                                    fontWeight: t
                                };
                            if (i && o) {
                                var c = Object(r.b)(i, function(e) {
                                        return "".concat(e, "px")
                                    }),
                                    s = Object(r.a)(o, {
                                        fontSize: c
                                    });
                                Object.assign(a, s)
                            }
                            return a
                        }
                    }
                },
                p = f(i, 400),
                g = f(a, 600),
                b = f(a, 700),
                h = f(a, 300),
                v = f(c, 400),
                y = f(c, 700),
                x = f(d, 700),
                E = f(s, 300),
                w = f(d, 400),
                O = f(m, 400),
                j = (f(l, 500), f(u, 500), {
                    xHeight: .342,
                    baseline: .22
                }),
                _ = {
                    xHeight: .375,
                    baseline: .17
                },
                k = {
                    xHeight: .342,
                    baseline: .22
                },
                S = {
                    xHeight: 0,
                    baseline: 0
                },
                C = {
                    xHeight: .5,
                    baseline: .16
                }
        },
        "./src/styles/mediaTypes.ts": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return o
            });
            var r = function(e) {
                    return "@media print"
                },
                o = function(e) {
                    return "@media (prefers-reduced-motion: ".concat(e, ")")
                }
        },
        "./src/styles/newBreakpoints.ts": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "xs", function() {
                return r
            }), n.d(t, "sm", function() {
                return o
            }), n.d(t, "md", function() {
                return i
            }), n.d(t, "lg", function() {
                return a
            }), n.d(t, "xl", function() {
                return c
            });
            var r = function(e) {
                    return "@media all and (max-width: ".concat(e.breakpoints.sm - .02, "px)")
                },
                o = function(e) {
                    return "@media all and " + "(min-width: ".concat(e.breakpoints.sm, "px) and ") + "(max-width: ".concat(e.breakpoints.md - .02, "px)")
                },
                i = function(e) {
                    return "@media all and " + "(min-width: ".concat(e.breakpoints.md, "px) and ") + "(max-width: ".concat(e.breakpoints.lg - .02, "px)")
                },
                a = function(e) {
                    return "@media all and " + "(min-width: ".concat(e.breakpoints.lg, "px) and ") + "(max-width: ".concat(e.breakpoints.xl - .02, "px)")
                },
                c = function(e) {
                    return "@media all and (min-width: ".concat(e.breakpoints.xl, "px)")
                }
        },
        "./src/styles/position.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var r = function() {
                return {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%"
                }
            }
        },
        "./src/styles/theme.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("./src/framework/design-system/util/fonts.ts"),
                o = n("./src/styles/font.ts"),
                i = n("./src/styles/colors.ts"),
                a = {
                    newFonts: {
                        body: {
                            family: o.j,
                            weight: 400,
                            fontSize: {
                                S: 18,
                                M: 21
                            },
                            lineHeight: {
                                S: 28,
                                M: 32
                            }
                        },
                        detail: {
                            family: o.e,
                            weight: 300,
                            fontSize: {
                                XS: 13,
                                S: 15,
                                M: 16,
                                L: 18
                            },
                            lineHeight: {
                                XS: 16,
                                S: 20,
                                M: 20,
                                L: 24
                            }
                        },
                        heading: {
                            family: o.e,
                            weight: 600,
                            fontSize: {
                                XS: 18,
                                S: 22,
                                M: 28,
                                L: 36,
                                XL: 48
                            },
                            lineHeight: {
                                XS: 20,
                                S: 28,
                                M: 36,
                                L: 40,
                                XL: 56
                            }
                        },
                        marketing: {
                            family: o.q,
                            weight: 500,
                            fontSize: {
                                XS: 18,
                                S: 24,
                                M: 28,
                                L: 32,
                                XXL: 70,
                                XXXL: 85
                            },
                            lineHeight: {
                                XS: 24,
                                S: 28,
                                M: 32,
                                L: 36,
                                XXL: 80,
                                XXXL: 85
                            }
                        },
                        overline: {
                            family: o.e,
                            weight: 300,
                            fontSize: {
                                M: 15
                            },
                            lineHeight: {
                                M: 20
                            }
                        },
                        pullQuote: {
                            family: o.m,
                            weight: 400,
                            fontSize: {
                                S: 24,
                                M: 30
                            },
                            lineHeight: {
                                S: 32,
                                M: 44
                            }
                        },
                        subtitle: {
                            family: o.e,
                            weight: 300,
                            fontSize: {
                                S: 16,
                                M: 18,
                                L: 24
                            },
                            lineHeight: {
                                S: 20,
                                M: 24,
                                L: 32
                            }
                        },
                        title: {
                            family: o.m,
                            weight: 400,
                            fontSize: {
                                XS: 24,
                                S: 30,
                                M: 40,
                                L: 48,
                                XL: 66
                            },
                            lineHeight: {
                                XS: 32,
                                S: 40,
                                M: 48,
                                L: 60,
                                XL: 72
                            }
                        }
                    },
                    scale: {
                        ui: "REGULAR"
                    },
                    breakpoints: {
                        xs: 0,
                        sm: 552,
                        md: 728,
                        lg: 904,
                        xl: 1080
                    },
                    maxWidths: {
                        inset: 680,
                        outset: 1032
                    },
                    grid: {
                        xStep: 4,
                        yStep: 4,
                        gutterSteps: {
                            xs: 6,
                            sm: 6,
                            md: 6,
                            lg: 6,
                            xl: 6
                        },
                        marginSteps: {
                            xs: 6,
                            sm: 6,
                            md: 6,
                            lg: 6,
                            xl: 6
                        },
                        xlMaxContentWidth: 1080,
                        columnWidth: 64,
                        gutterWidth: 24
                    },
                    font: {
                        elevate: r.a,
                        marketing: r.d,
                        uiHeavy: r.b,
                        uiRegular: r.c
                    },
                    borderRadius: {
                        regular: 4
                    },
                    borderWidth: 1,
                    borderWidthThick: 2,
                    borderStyle: "solid",
                    backgroundColor: i.y,
                    accentColor: {
                        border: {
                            light: i.m,
                            normal: i.n,
                            dark: i.o,
                            darker: i.p
                        },
                        fill: {
                            light: i.m,
                            normal: i.n,
                            dark: i.o
                        },
                        fillTransparent: {
                            light: i.u(.5),
                            normal: i.u(.75),
                            dark: i.v(.75)
                        },
                        text: {
                            light: i.n,
                            normal: i.o,
                            dark: i.p
                        }
                    },
                    baseColor: {
                        background: {
                            light: i.t(.02),
                            normal: i.t(.05),
                            dark: i.t(.07)
                        },
                        border: {
                            lighter: i.t(.1),
                            light: i.t(.2),
                            normal: i.t(.34),
                            dark: i.t(.54),
                            darker: i.t(.84)
                        },
                        text: {
                            lighter: i.t(.54),
                            light: i.t(.76),
                            normal: i.t(.84),
                            dark: i.t(.9),
                            darker: i.t(.97)
                        },
                        fill: {
                            lighter: i.t(.54),
                            light: i.t(.76),
                            normal: i.t(.84),
                            dark: i.t(.9),
                            darker: i.t(.97)
                        },
                        overlay: {
                            lighter: i.w(.2),
                            light: i.w(.4),
                            normal: i.w(.5),
                            dark: i.w(.95)
                        }
                    },
                    brandColor: {
                        sage: {
                            light: i.h,
                            normal: i.f,
                            dark: i.g
                        },
                        rose: {
                            light: i.e,
                            normal: i.c,
                            dark: i.d
                        }
                    },
                    errorColor: i.j,
                    warnColor: i.x,
                    highlightColor: {
                        light: i.r,
                        normal: i.s,
                        dark: i.q
                    }
                }
        },
        "./src/styles/zIndex.ts": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            });
            var r = {
                cardTop1: 11,
                cardTop2: 8,
                cardTop3: 7,
                cardCur: 10,
                cardBottom1: 9,
                cardBottom2: 8,
                cardBottom3: 7,
                foreground: 1,
                cardContainer: 2,
                authorLockup: 3,
                cursor: 1e3
            };
            t.a = {
                metabar: 500,
                metabarProgress: 510,
                metabarCenter: 600,
                popover: 700,
                modal: 800,
                floating: 900,
                toast: 900,
                loading: 1e3,
                debug: 1100,
                selectionMenu: 400
            }
        },
        "./src/svg/arrow-left-19px.svg": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/react/index.js"),
                o = n.n(r);

            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = o.a.createElement("path", {
                d: "M11.47 13.97L6.99 9.48 11.47 5l.55.5-3.99 3.98 4 4z",
                fillRule: "evenodd"
            });
            t.a = function(e) {
                return o.a.createElement("svg", i({
                    className: "arrow-left-19px_svg__svgIcon-use",
                    width: 19,
                    height: 19,
                    viewBox: "0 0 19 19"
                }, e), a)
            }
        },
        "./src/svg/logo-wordmark-138x27px.svg": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/react/index.js"),
                o = n.n(r);

            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = o.a.createElement("path", {
                d: "M130 27V16.96c0-3.26-.15-5.47-2.44-5.47-1.16 0-2.13.57-2.86 1.51.22.9.3 1.97.3 3.13 0 2.24.04 5.1 0 7.97 0 .47-.05.58.24.87L127 27h-8V16.96c0-3.3-.46-5.47-2.7-5.47-1.17 0-1.65.65-2.3 1.6V24.1c0 .47-.03.58.3.87L116 27h-8V11.56c0-.47-.07-.58-.36-.9L106 9h8v3.61c.9-2.53 2.44-4.11 5.37-4.11 2.68 0 4.5 1.47 5.26 4.26.83-2.4 3-4.26 6.05-4.26 3.59 0 5.32 2.63 5.32 7.63 0 2.39.04 5.1 0 7.97 0 .47 0 .65.25.87L138 27h-8zm-27-3.04c0 .47-.15.61.18.9L105 27h-8v-4c-.9 2.46-2.96 4-5.64 4-3.58 0-5.36-2.61-5.36-7.54 0-2.39-.04-5 0-7.94 0-.47-.11-.58-.4-.87L84 9h8v9.63c0 3.22.27 5.4 2.3 5.4 1.16 0 2.08-.73 2.7-1.63V11.56c0-.47-.13-.58-.42-.9L95 9h8v14.96zM78 .24a3.25 3.25 0 0 1 3.25 3.25A3.25 3.25 0 1 1 78 .25zM75 27V11.56c0-.47.17-.58-.12-.9L73 9h8v15.1c0 .47-.01.68.24.9L83 27h-8zM64 11.7a3.1 3.1 0 0 0-2.4-1.12c-1.95 0-3.84 1.78-3.84 7.03 0 4.93 1.63 6.67 3.66 6.67.9 0 1.85-.43 2.58-1.38V11.7zM70 24c0 .46-.03.57.3.86L72 27h-8v-3.7c-1.09 2.5-3.05 3.7-5.37 3.7-4.13 0-7.13-3.26-7.13-9.2 0-5.59 3.25-9.32 7.78-9.32 2.36 0 3.92 1.12 4.72 2.9v-7.5c0-.47-.08-.62-.4-.9L62 1.3 70 .3v23.7zm-26.1-8c.04-.47.04-.67.04-.81 0-4.75-.94-5.44-2.44-5.44s-2.85 1-2.93 6.25h5.33zm-5.33 1c0 4.71 2.4 6.63 5.19 6.63 2.17 0 4.3-.94 5.5-3.33h.08c-.95 4.56-3.77 6.7-8.01 6.7-4.57 0-8.88-2.75-8.88-9.13 0-6.7 4.28-9.39 9.1-9.39 3.84 0 7.93 1.81 7.93 7.65 0 .1 0 .44-.03.87H38.57zM31.5 27h-12l2.39-2.65c.08-.08.11-.4.11-.87V7l-7.87 20L5.58 8.37c-.22-.47-.4-1.08-.58-1.6v13.85c0 .58-.04.65.36 1.2L9 27H0l3.64-5.18c.4-.55.36-.62.36-1.2V6.27c0-.62.1-.69-.2-1.05L1 1h8.5l7.35 16.3L23.24 1h8.26l-2.2 2.75c-.33.33-.3.6-.3 1.1V23.5c0 .47 0 .75.14.87L31.5 27z"
            });
            t.a = function(e) {
                return o.a.createElement("svg", i({
                    width: 138,
                    height: 27,
                    viewBox: "0 0 138 27"
                }, e), a)
            }
        },
        "./src/svg/question-mark-15px.svg": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/react/index.js"),
                o = n.n(r);

            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = o.a.createElement("g", {
                fillRule: "evenodd"
            }, o.a.createElement("path", {
                d: "M13 7.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0zm-12 0a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"
            }), o.a.createElement("path", {
                d: "M4.81 5.74h1.6c.03-.65.47-1.07 1.15-1.07.66 0 1.11.4 1.11.94s-.23.82-.98 1.27c-.81.48-1.14 1-1.06 1.94l.01.33H8.2v-.31c0-.57.22-.85 1-1.3.83-.5 1.26-1.1 1.26-1.99 0-1.35-1.11-2.28-2.79-2.28-1.8 0-2.82 1-2.85 2.47zm2.67 6.24c.66 0 1.06-.39 1.06-1 0-.62-.4-1-1.06-1s-1.07.38-1.07 1c0 .61.41 1 1.07 1z"
            }));
            t.a = function(e) {
                return o.a.createElement("svg", i({
                    width: 15,
                    height: 15,
                    viewBox: "0 0 15 15"
                }, e), a)
            }
        },
        "./src/svg/star-15px.svg": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/react/index.js"),
                o = n.n(r);

            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = o.a.createElement("path", {
                d: "M7.44 2.32c.03-.1.09-.1.12 0l1.2 3.53a.29.29 0 0 0 .26.2h3.88c.11 0 .13.04.04.1L9.8 8.33a.27.27 0 0 0-.1.29l1.2 3.53c.03.1-.01.13-.1.07l-3.14-2.18a.3.3 0 0 0-.32 0L4.2 12.22c-.1.06-.14.03-.1-.07l1.2-3.53a.27.27 0 0 0-.1-.3L2.06 6.16c-.1-.06-.07-.12.03-.12h3.89a.29.29 0 0 0 .26-.19l1.2-3.52z"
            });
            t.a = function(e) {
                return o.a.createElement("svg", i({
                    className: "star-15px_svg__svgIcon-use",
                    width: 15,
                    height: 15,
                    viewBox: "0 0 15 15"
                }, e), a)
            }
        },
        "./src/svg/twitter-filled-25px.svg": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/react/index.js"),
                o = n.n(r);

            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = o.a.createElement("path", {
                d: "M20.5 6.25c-.67.41-1.4.7-2.18.87a3.45 3.45 0 0 0-5.02-.1 3.49 3.49 0 0 0-1.02 2.47c0 .27.03.54.07.8a9.91 9.91 0 0 1-7.17-3.67 3.9 3.9 0 0 0-.5 1.74 3.6 3.6 0 0 0 1.56 2.92 3.36 3.36 0 0 1-1.55-.44v.06c0 1.67 1.2 3.08 2.8 3.42-.3.06-.6.1-.94.12l-.62-.06a3.5 3.5 0 0 0 3.24 2.43 7.34 7.34 0 0 1-4.36 1.5L4 18.24a9.96 9.96 0 0 0 5.36 1.56c6.4 0 9.91-5.32 9.9-9.9v-.5c.69-.48 1.28-1.1 1.74-1.8-.63.29-1.3.48-2 .55a3.33 3.33 0 0 0 1.5-1.93"
            });
            t.a = function(e) {
                return o.a.createElement("svg", i({
                    width: 25,
                    height: 25,
                    viewBox: "0 0 25 25"
                }, e), a)
            }
        },
        "./src/svg/x-25px.svg": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/react/index.js"),
                o = n.n(r);

            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = o.a.createElement("path", {
                d: "M18.13 6.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"
            });
            t.a = function(e) {
                return o.a.createElement("svg", i({
                    width: 25,
                    height: 25,
                    viewBox: "0 0 25 25"
                }, e), a)
            }
        },
        "./src/util/CopyUrl.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./src/framework/design-system/components/index.ts"),
                c = function(e) {
                    var t = e.url,
                        n = e.onCopy,
                        r = e.children,
                        c = i.useState(!1),
                        s = o()(c, 2),
                        l = s[0],
                        u = s[1],
                        d = i.useState(null),
                        m = o()(d, 2),
                        f = m[0],
                        p = m[1],
                        g = i.useRef(null);
                    i.useEffect(function() {
                        return function() {
                            clearTimeout(f)
                        }
                    }, []);
                    var b = i.useCallback(function() {
                        n && n();
                        var e = g.current;
                        if (e) {
                            if (e.disabled = !1, e.select(), e) {
                                var t = document.createRange();
                                t.selectNode(e), window.getSelection().addRange(t), e.setSelectionRange(0, e.value.length), document.execCommand("copy"), window.getSelection().removeAllRanges()
                            }
                            e.disabled = !0, u(!0), clearTimeout(f), p(setTimeout(function() {
                                return u(!1)
                            }, 2e3))
                        }
                    });
                    return i.createElement(a.b, {
                        display: "flex",
                        alignItems: "flex-start"
                    }, i.createElement("form", null, i.createElement("input", {
                        disabled: !0,
                        readOnly: !0,
                        type: "text",
                        ref: g,
                        value: t,
                        style: {
                            position: "fixed",
                            top: "-100vh"
                        }
                    }), i.createElement(a.u, {
                        onClick: function(e) {
                            e.preventDefault(), b()
                        },
                        linkStyle: "OBVIOUS"
                    }, r(l))))
                }
        },
        "./src/util/LocalStorage.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return m
            });
            var r = n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/createClass.js"),
                a = n.n(i),
                c = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                s = n.n(c),
                l = n("./src/log/index.ts"),
                u = function() {
                    var e = !1;
                    try {
                        window.localStorage || (e = !1), window.localStorage.setItem("storage-test", "1"), e = !!window.localStorage.getItem("storage-test")
                    } catch (t) {
                        e = !1
                    } finally {
                        return e && window.localStorage.removeItem("storage-test"), e
                    }
                }(),
                d = function() {
                    function e() {
                        o()(this, e), s()(this, "data", void 0), this.data = {}
                    }
                    return a()(e, [{
                        key: "setItem",
                        value: function(e, t) {
                            this.data[e] = t
                        }
                    }, {
                        key: "getItem",
                        value: function(e) {
                            return this.data[e]
                        }
                    }, {
                        key: "removeItem",
                        value: function(e) {
                            delete this.data[e]
                        }
                    }]), e
                }(),
                m = function() {
                    function e(t) {
                        o()(this, e), s()(this, "prefix", void 0), s()(this, "storage", void 0), this.prefix = t, this.storage = u ? window.localStorage : e.fallbackStorage
                    }
                    return a()(e, [{
                        key: "withPrefix",
                        value: function(e) {
                            return "".concat(this.prefix, "|").concat(e)
                        }
                    }, {
                        key: "set",
                        value: function(e, t) {
                            this.storage.setItem(this.withPrefix(e), JSON.stringify(t))
                        }
                    }, {
                        key: "get",
                        value: function(e, t) {
                            var n = this.storage.getItem(this.withPrefix(e));
                            if (n) try {
                                return JSON.parse(n)
                            } catch (t) {
                                l.a.warn({
                                    msg: "Error parsing JSON from LocalStorage",
                                    err: t,
                                    key: e
                                })
                            }
                            return t
                        }
                    }, {
                        key: "getItems",
                        value: function(e) {
                            var t = this,
                                n = this.storage instanceof d ? this.storage.data : this.storage,
                                r = Object.keys(n);
                            return r.sort(), r.reduce(function(n, r) {
                                return void 0 !== e && Object.keys(n).length >= e ? n : r.startsWith(t.prefix) && (r = r.split("|")[1]) ? (n[r] = t.get(r), n) : n
                            }, {})
                        }
                    }, {
                        key: "remove",
                        value: function(e) {
                            this.storage.removeItem(this.withPrefix(e))
                        }
                    }, {
                        key: "getKeys",
                        value: function() {
                            var e = [],
                                t = this.withPrefix(""),
                                n = this.storage;
                            for (var r in n) 0 === r.indexOf(t) && e.push(r.slice(t.length));
                            return e.sort(), e
                        }
                    }, {
                        key: "getCount",
                        value: function() {
                            return this.getKeys().length
                        }
                    }, {
                        key: "clean",
                        value: function() {
                            var e = this;
                            this.getKeys().forEach(function(t) {
                                return e.remove(t)
                            })
                        }
                    }]), e
                }();
            s()(m, "fallbackStorage", new d)
        },
        "./src/util/constants.ts": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, "c", function() {
                return i
            });
            var r = 36e5,
                o = 24 * r,
                i = 7 * o
        },
        "./src/util/dom.ts": function(e, t, n) {
            "use strict";

            function r(e) {
                return e.getBoundingClientRect()
            }

            function o(e) {
                var t = c();
                return {
                    left: e.left + t.left,
                    top: e.top + t.top,
                    width: e.width,
                    height: e.height
                }
            }

            function i(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.left || 0,
                    r = t.top || 0,
                    o = t.right || 0,
                    i = t.bottom || 0;
                return {
                    left: e.left + n,
                    top: e.top + r,
                    width: e.width - n + o,
                    height: e.height - r + i
                }
            }

            function a() {
                return {
                    left: 0,
                    top: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            }

            function c() {
                var e = document.documentElement || {},
                    t = document.body || {};
                return {
                    left: e.scrollLeft || t.scrollLeft || 0,
                    top: e.scrollTop || t.scrollTop || 0,
                    width: e.scrollWidth || t.scrollWidth || 0,
                    height: e.scrollHeight || t.scrollHeight || 0
                }
            }

            function s(e) {
                return l(a(), e)
            }

            function l(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    r = Math.max(e.left, t.left),
                    o = Math.max(e.top, t.top),
                    i = Math.min(e.left + e.width, t.left + t.width);
                return Math.min(e.top + e.height, t.top + t.height) - o >= -n && i - r >= -n
            }

            function u() {
                return "undefined" != typeof window && window.devicePixelRatio || 2
            }
            n.d(t, "a", function() {
                return r
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "h", function() {
                return i
            }), n.d(t, "e", function() {
                return a
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "g", function() {
                return s
            }), n.d(t, "f", function() {
                return l
            }), n.d(t, "b", function() {
                return u
            })
        },
        "./src/util/glyph.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var r = function(e) {
                var t = e.fontFamilyPath,
                    n = void 0 === t ? "/e/sr/latin/e/ssr/latin/e/ssb/latin" : t,
                    r = e.glyphFontSet,
                    o = e.glyphUrl,
                    i = e.isAmp,
                    a = "".concat(o, "/css");
                return "".concat(a).concat(i ? "" : n, "/").concat(r, ".css")
            }
        },
        "./src/util/hooks/useScript.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = new Set,
                c = function(e, t) {
                    var n = i.useState({
                            loaded: !1,
                            error: !1
                        }),
                        r = o()(n, 2),
                        c = r[0],
                        s = r[1];
                    return i.useEffect(function() {
                        if (!a.has(e)) {
                            a.add(e);
                            var n = document.createElement("script");
                            n.src = e, n.async = !0, t && (n = Object.assign(n, t));
                            var r = function() {
                                    s({
                                        loaded: !0,
                                        error: !1
                                    })
                                },
                                o = function() {
                                    a.has(e) && a.delete(e), n.remove(), s({
                                        loaded: !0,
                                        error: !0
                                    })
                                };
                            return n.addEventListener("load", r), n.addEventListener("error", o), document.body.appendChild(n),
                                function() {
                                    n.removeEventListener("load", r), n.removeEventListener("error", o)
                                }
                        }
                        s({
                            loaded: !0,
                            error: !1
                        })
                    }, [e]), [c.loaded, c.error]
                }
        },
        "./src/util/hooks/useUserAgentMobileOrTablet.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                o = n.n(r),
                i = n("./node_modules/react/index.js"),
                a = n("./src/util/useragent.ts"),
                c = function() {
                    var e = i.useState(!1),
                        t = o()(e, 2),
                        n = t[0],
                        r = t[1];
                    return i.useEffect(function() {
                        r(Object(a.b)(navigator.userAgent))
                    }, []), n
                }
        },
        "./src/util/invariant.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var r = function(e, t) {
                var n;
                if (!e) throw void 0 === t ? n = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.") : (n = new Error(t)).name = "Invariant Violation", n.framesToPop = 1, n
            }
        },
        "./src/util/miroImage.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "d", function() {
                return a
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "c", function() {
                return l
            });
            var r, o = n("./src/util/dom.ts");
            ! function(e) {
                e.Resample = "RESAMPLE", e.Crop = "CROP", e.Letterbox = "LETTERBOX", e.Proxy = "PROXY"
            }(r || (r = {}));
            var i = /@2x\.\w+$/,
                a = function(e) {
                    var t = e.miroId,
                        n = e.width,
                        i = e.height,
                        a = e.strategy,
                        c = e.cropType,
                        s = void 0 === c ? "c" : c,
                        l = e.blur,
                        u = e.verticalGradient,
                        d = e.darken,
                        m = e.lighten,
                        f = e.freezeGifs,
                        p = void 0 === f || f,
                        g = e.focusPercentX,
                        b = e.focusPercentY,
                        h = e.ignorePixelRatio,
                        v = void 0 !== h && h,
                        y = e.leftPosition,
                        x = void 0 === y ? 0 : y,
                        E = e.topPosition,
                        w = void 0 === E ? 0 : E,
                        O = e.quality,
                        j = [r.Resample, r.Proxy];
                    if (void 0 === i && a && !j.includes(a)) throw new Error("MiroUrl: Expected a height param when using ".concat(a, " but none given."));
                    i = Math.round(i || 0), n = Math.round(n);
                    var _ = [],
                        k = [];
                    _.push("https://miro.medium.com");
                    var S = g && g >= 0 && b && b >= 0;
                    /\.gif$/.test(t) && p && _.push("freeze");
                    var C = v ? 1 : Object(o.b)(),
                        P = Math.round(n * C),
                        I = Math.round(i * C);
                    switch (a) {
                        case "CROP":
                            S ? (g = Math.round(g || 0), b = Math.round(b || 0), _.push("focal", P, I, g, b)) : _.push("fit", s, P, I);
                            break;
                        case "LETTERBOX":
                            _.push("letterbox", P, I, x, w);
                            break;
                        case "RESAMPLE":
                            _.push("max", P);
                            break;
                        case "PROXY":
                        default:
                            _.push("proxy")
                    }
                    if (u) {
                        var L = u.start,
                            T = u.end,
                            A = u.opacity;
                        _.push("gradv", L, T, A)
                    }
                    d && _.push("darken", d), m && _.push("lighten", m), l && _.push("blur", l), O && k.push("q=".concat(O)), _.push(t);
                    var N = k.join("&");
                    return _.join("/") + (N ? "?".concat(N) : "")
                },
                c = function(e) {
                    var t = e.miroId,
                        n = e.aspectRatio,
                        o = e.croppedWidth,
                        i = e.originalWidth,
                        c = e.originalHeight,
                        s = e.focusPercentX,
                        l = e.focusPercentY;
                    return a(s && l && (i && c && c * n > o) ? {
                        focusPercentX: s,
                        focusPercentY: l,
                        height: Math.round(o / n),
                        ignorePixelRatio: !0,
                        miroId: t,
                        strategy: r.Crop,
                        width: o
                    } : {
                        miroId: t,
                        strategy: r.Resample,
                        width: o,
                        ignorePixelRatio: !0
                    })
                },
                s = function(e) {
                    var t = e.miroId,
                        n = e.width,
                        o = e.height;
                    return a({
                        miroId: t,
                        width: n * (n / o > 1 ? 30 / n : 30 / o),
                        freezeGifs: !0,
                        strategy: r.Resample,
                        quality: 20
                    })
                },
                l = function(e) {
                    return i.test(e)
                }
        },
        "./src/util/navigation.ts": function(e, t, n) {
            "use strict";
            n.d(t, "e", function() {
                return l
            }), n.d(t, "c", function() {
                return u
            }), n.d(t, "d", function() {
                return d
            }), n.d(t, "a", function() {
                return m
            }), n.d(t, "b", function() {
                return f
            });
            var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                o = n.n(r),
                i = n("./node_modules/url/url.js"),
                a = n.n(i),
                c = n("./node_modules/querystring-es3/index.js");

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function l(e, t) {
                var n = a.a.parse(e, !1, !0);
                return !!n && (!n.hostname || n.hostname === t)
            }

            function u(e) {
                var t = a.a.parse(e, !1, !0);
                return t && t.path ? t.path : ""
            }

            function d(e, t, n) {
                var r = a.a.parse(e, !1, !0);
                return n.pathname + (n.search || "") === r.path && (!r.hostname || r.hostname === t)
            }

            function m(e, t) {
                var n = Object(i.parse)(e),
                    r = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? s(n, !0).forEach(function(t) {
                                o()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, Object(c.parse)(n.query || ""), {}, t);
                return n.search = "?".concat(Object(c.stringify)(r)), Object(i.format)(n)
            }

            function f(e, t) {
                return "https://".concat(e).concat(t)
            }
        },
        "./src/util/numbers.ts": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return c
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return u
            }), n.d(t, "f", function() {
                return d
            }), n.d(t, "d", function() {
                return m
            });
            var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),
                a = n.n(i);

            function c(e) {
                if (isNaN(e)) return String(e);
                for (var t = ["", "K", "M"], n = e = e ? Math.round(e) : 0, r = e % 1e3 / 1e3, o = 0; e > 999 && o < t.length; o++) r = e % 1e3, n = e, e = Math.floor(e / 1e3);
                if (o >= t.length) return n + t[t.length - 1];
                for (var i = e + 1, a = 0; i % 10 == 0 && a < 9; a++) i /= 10;
                var c = -1 !== [1, 2, 5, null].indexOf(i),
                    s = e < 100 && c,
                    l = e < 20 || c && !s;
                return e + (s && r >= 990 ? ".99" : s && r >= 980 ? ".98" : s && r >= 970 ? ".97" : s && r >= 960 ? ".96" : s && r >= 950 ? ".95" : s && r >= 940 ? ".94" : s && r >= 930 ? ".93" : s && r >= 920 ? ".92" : s && r >= 910 ? ".91" : (s || l) && r >= 900 ? ".9" : l && r >= 800 ? ".8" : l && r >= 700 ? ".7" : l && r >= 600 ? ".6" : l && r >= 500 ? ".5" : l && r >= 400 ? ".4" : l && r >= 300 ? ".3" : l && r >= 200 ? ".2" : l && r >= 100 ? ".1" : "") + t[o]
            }

            function s(e) {
                return Math.max(1, Math.ceil(e))
            }

            function l(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "USD",
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if ("USD" === t) {
                    var r = parseFloat(e / 100);
                    return r = n || e % 100 ? r.toFixed(2) : parseInt(r, 10), "$".concat(r)
                }
                throw new Error("Unsupported currency: ".concat(t))
            }

            function u(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "USD";
                if ("USD" === t) return "$".concat(e.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
                throw new Error("Unsupported currency: ".concat(t))
            }

            function d(e) {
                return e.toLocaleString()
            }

            function m(e) {
                var t, n = function(e) {
                        return Number(e) || 0
                    },
                    r = function(e) {
                        return 0 === e.length
                    },
                    i = function(e) {
                        return function(t) {
                            return t.slice(0, e)
                        }
                    },
                    c = function(e) {
                        return function(t) {
                            return function(n) {
                                return e(t(n))
                            }
                        }
                    },
                    s = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
                    l = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
                    u = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion"],
                    d = String(e);
                return "0" === d ? "zero" : c(function e(t) {
                    return function(n) {
                        return r(n) ? [] : [i(t)(n)].concat(a()(e(t)(function(e) {
                            return function(t) {
                                return t.slice(e)
                            }
                        }(t)(n))))
                    }
                }(3))(function(e) {
                    return e.slice(0).reverse()
                })((t = d, t.split(""))).map(function(e) {
                    var t = o()(e, 3),
                        r = t[0],
                        i = t[1],
                        a = t[2];
                    return [0 === n(a) ? "" : s[a] + " hundred ", 0 === n(r) ? l[i] : l[i] && l[i] + "-" || "", s[i + r] || s[r]].join("")
                }).map(function(e, t) {
                    return "" === e ? e : "".concat(e, " ").concat(u[t])
                }).filter(c(function(e) {
                    return !e
                })(r)).reverse().join(" ").trim()
            }
        },
        "./src/util/performance.ts": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "d", function() {
                return d
            }), n.d(t, "b", function() {
                return m
            }), n.d(t, "c", function() {
                return p
            });
            var r = n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/createClass.js"),
                a = n.n(i),
                c = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                s = n.n(c),
                l = function() {
                    function e(t, n) {
                        o()(this, e), s()(this, "start", void 0), s()(this, "end", void 0), this.start = t, this.end = n
                    }
                    return a()(e, null, [{
                        key: "fromTiming",
                        value: function(t, n) {
                            var r = window.performance.timing;
                            return new e(r[t], r[n])
                        }
                    }, {
                        key: "fromEntry",
                        value: function(t, n) {
                            var r = window.performance.timing,
                                o = r.navigationStart + n.startTime + n.duration;
                            return new e(r[t], o)
                        }
                    }]), a()(e, [{
                        key: "duration",
                        get: function() {
                            return this.end - this.start
                        }
                    }]), e
                }(),
                u = function() {
                    function e() {
                        o()(this, e), s()(this, "result", void 0), s()(this, "observers", void 0), this.result = null, this.observers = []
                    }
                    return a()(e, [{
                        key: "observe",
                        value: function(e) {
                            null != this.result ? e(this.result) : this.observers.push(e)
                        }
                    }, {
                        key: "set",
                        value: function(e) {
                            this.result = e;
                            var t = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var o, i = this.observers[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                                    (0, o.value)(e)
                                }
                            } catch (e) {
                                n = !0, r = e
                            } finally {
                                try {
                                    t || null == i.return || i.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                        }
                    }]), e
                }(),
                d = new u,
                m = new u,
                f = function() {
                    if (!window.performance || !window.performance.timing) return null;
                    var e = null;
                    if (window.performance.getEntriesByName) {
                        var t = window.performance.getEntriesByName("first-contentful-paint", "paint");
                        t.length > 0 && (e = t[0])
                    }
                    var n = {
                        beforeDomainLookup: l.fromTiming("navigationStart", "domainLookupStart"),
                        domainLookup: l.fromTiming("domainLookupStart", "domainLookupEnd"),
                        connect: l.fromTiming("connectStart", "connectEnd"),
                        request: l.fromTiming("requestStart", "responseStart"),
                        response: l.fromTiming("responseStart", "responseEnd"),
                        load: l.fromTiming("navigationStart", "loadEventStart"),
                        processing: l.fromTiming("domLoading", "loadEventStart")
                    };
                    return null != e && Object.assign(n, {
                        overallFCP: l.fromEntry("navigationStart", e),
                        client: l.fromEntry("responseStart", e),
                        render: l.fromEntry("responseEnd", e)
                    }), n
                };
            var p = function() {
                new Promise(function(e) {
                    document && "complete" !== document.readyState ? document.addEventListener("readystatechange", function t() {
                        "complete" === document.readyState && (document.removeEventListener("readystatechange", t), e())
                    }) : e()
                }).then(function() {
                    setTimeout(function() {
                        return null != (e = f()) && d.set(e), void(window.perfMetrics && window.perfMetrics.onFirstInputDelay(function(e, t) {
                            var n = window.performance.timing,
                                r = t.timeStamp > 1e12 ? t.timeStamp : n.navigationStart + t.timeStamp,
                                o = r + e;
                            m.set({
                                first: new l(r, o)
                            })
                        }));
                        var e
                    }, 0)
                })
            }
        },
        "./src/util/referrers.ts": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return m
            }), n.d(t, "a", function() {
                return f
            }), n.d(t, "b", function() {
                return p
            });
            var r = n("./node_modules/url/url.js"),
                o = n.n(r),
                i = /(https?|android-app):\/\/(m\.|www\.|l\.|lm\.|search\.|)(bing|duckduckgo|yahoo|yandex)(\.com|\.ru|\.co\.jp)/,
                a = /(https?|android-app):\/\/(www\.|)google(\.co[m]?|)(\.[a-z]*|)/,
                c = /android-app:\/\/com\.google\.android\.(googlequicksearchbox|gm)/,
                s = ["twitter.com", "t.co", "twitterrific.com"],
                l = ["www.facebook.com", "facebook.com"],
                u = ["news.google.com", "news.url.google.com"],
                d = function(e) {
                    return o.a.parse(e).hostname
                },
                m = function(e) {
                    return !!e && s.includes(d(e) || "")
                },
                f = function(e) {
                    return !!e && l.includes(d(e) || "")
                },
                p = function(e, t) {
                    if (!e) return !1;
                    var n = d(e) || "";
                    return !!(u.includes(n) || i.test(e) || t && t.includes("acceleratedMobilePages") || a.test(e) || c.test(e))
                }
        },
        "./src/util/routes.ts": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return u
            }), n.d(t, "e", function() {
                return d
            }), n.d(t, "b", function() {
                return m
            }), n.d(t, "d", function() {
                return f
            }), n.d(t, "l", function() {
                return p
            }), n.d(t, "k", function() {
                return g
            }), n.d(t, "F", function() {
                return b
            }), n.d(t, "G", function() {
                return h
            }), n.d(t, "H", function() {
                return v
            }), n.d(t, "n", function() {
                return y
            }), n.d(t, "N", function() {
                return x
            }), n.d(t, "S", function() {
                return E
            }), n.d(t, "a", function() {
                return w
            }), n.d(t, "W", function() {
                return O
            }), n.d(t, "O", function() {
                return j
            }), n.d(t, "V", function() {
                return _
            }), n.d(t, "K", function() {
                return k
            }), n.d(t, "Y", function() {
                return S
            }), n.d(t, "cb", function() {
                return C
            }), n.d(t, "bb", function() {
                return P
            }), n.d(t, "db", function() {
                return I
            }), n.d(t, "gb", function() {
                return L
            }), n.d(t, "hb", function() {
                return T
            }), n.d(t, "ib", function() {
                return A
            }), n.d(t, "jb", function() {
                return N
            }), n.d(t, "kb", function() {
                return R
            }), n.d(t, "mb", function() {
                return D
            }), n.d(t, "lb", function() {
                return U
            }), n.d(t, "nb", function() {
                return M
            }), n.d(t, "ob", function() {
                return B
            }), n.d(t, "tb", function() {
                return H
            }), n.d(t, "ub", function() {
                return F
            }), n.d(t, "vb", function() {
                return z
            }), n.d(t, "wb", function() {
                return q
            }), n.d(t, "xb", function() {
                return W
            }), n.d(t, "Ab", function() {
                return V
            }), n.d(t, "zb", function() {
                return G
            }), n.d(t, "Bb", function() {
                return K
            }), n.d(t, "Eb", function() {
                return X
            }), n.d(t, "Fb", function() {
                return Y
            }), n.d(t, "Mb", function() {
                return Q
            }), n.d(t, "Hb", function() {
                return $
            }), n.d(t, "Lb", function() {
                return J
            }), n.d(t, "Ob", function() {
                return Z
            }), n.d(t, "Gb", function() {
                return ee
            }), n.d(t, "Kb", function() {
                return te
            }), n.d(t, "Nb", function() {
                return ne
            }), n.d(t, "Jb", function() {
                return re
            }), n.d(t, "Ib", function() {
                return oe
            }), n.d(t, "Db", function() {
                return ie
            }), n.d(t, "U", function() {
                return ae
            }), n.d(t, "T", function() {
                return ce
            }), n.d(t, "Yb", function() {
                return se
            }), n.d(t, "Zb", function() {
                return le
            }), n.d(t, "ac", function() {
                return ue
            }), n.d(t, "Ub", function() {
                return de
            }), n.d(t, "Pb", function() {
                return me
            }), n.d(t, "Sb", function() {
                return fe
            }), n.d(t, "Qb", function() {
                return pe
            }), n.d(t, "Rb", function() {
                return ge
            }), n.d(t, "Tb", function() {
                return be
            }), n.d(t, "Vb", function() {
                return he
            }), n.d(t, "Xb", function() {
                return ve
            }), n.d(t, "Wb", function() {
                return ye
            }), n.d(t, "bc", function() {
                return xe
            }), n.d(t, "p", function() {
                return we
            }), n.d(t, "y", function() {
                return Oe
            }), n.d(t, "o", function() {
                return je
            }), n.d(t, "x", function() {
                return _e
            }), n.d(t, "w", function() {
                return ke
            }), n.d(t, "q", function() {
                return Se
            }), n.d(t, "t", function() {
                return Ce
            }), n.d(t, "s", function() {
                return Pe
            }), n.d(t, "u", function() {
                return Ie
            }), n.d(t, "r", function() {
                return Le
            }), n.d(t, "v", function() {
                return Te
            }), n.d(t, "z", function() {
                return Ae
            }), n.d(t, "M", function() {
                return Ne
            }), n.d(t, "R", function() {
                return Re
            }), n.d(t, "I", function() {
                return De
            }), n.d(t, "J", function() {
                return Ue
            }), n.d(t, "A", function() {
                return Me
            }), n.d(t, "B", function() {
                return Be
            }), n.d(t, "C", function() {
                return He
            }), n.d(t, "D", function() {
                return Fe
            }), n.d(t, "fb", function() {
                return ze
            }), n.d(t, "E", function() {
                return qe
            }), n.d(t, "yb", function() {
                return We
            }), n.d(t, "eb", function() {
                return Ve
            }), n.d(t, "Q", function() {
                return Ge
            }), n.d(t, "Cb", function() {
                return Ke
            }), n.d(t, "sb", function() {
                return Xe
            }), n.d(t, "i", function() {
                return Ye
            }), n.d(t, "P", function() {
                return Qe
            }), n.d(t, "g", function() {
                return $e
            }), n.d(t, "m", function() {
                return Je
            }), n.d(t, "pb", function() {
                return Ze
            }), n.d(t, "qb", function() {
                return et
            }), n.d(t, "rb", function() {
                return tt
            }), n.d(t, "j", function() {
                return nt
            }), n.d(t, "ab", function() {
                return rt
            }), n.d(t, "h", function() {
                return ot
            }), n.d(t, "f", function() {
                return it
            }), n.d(t, "L", function() {
                return at
            }), n.d(t, "Z", function() {
                return ct
            }), n.d(t, "X", function() {
                return st
            });
            var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = n.n(r),
                i = n("./node_modules/graphql-tag/src/index.js"),
                a = n.n(i),
                c = n("./node_modules/url/url.js"),
                s = n.n(c);

            function l() {
                var e = o()(["\n  fragment collectionUrl_collection on Collection {\n    id\n    domain\n    slug\n  }\n"]);
                return l = function() {
                    return e
                }, e
            }
            var u = function(e) {
                    return "/amp/p/".concat(e)
                },
                d = function(e) {
                    return "//".concat(e, "/_/stat?referrerSource=acceleratedMobilePages")
                },
                m = function(e) {
                    return "${base}&postId=${postId}&event=post.clientViewed&pageViewId=${pageViewId}&requestCount=${requestCount}&timestamp=${timestamp}"
                },
                f = function(e) {
                    return "${base}&postId=${postId}&event=amp.scrollPing&collectionId=${collectionId}&scrollTop=${scrollTop}&scrollableHeight=${scrollableHeight}&totalEngagedTime=${totalEngagedTime}&verticalScrollBoundary=${verticalScrollBoundary}&location=${canonicalUrl}&scrollWidth=${scrollWidth}&pageViewId=${pageViewId}&requestCount=${requestCount}&timestamp=${timestamp}"
                },
                p = function(e) {
                    return "https://".concat(e, "/browse/bookmarks")
                },
                g = function(e) {
                    return "/_/bookmark/p/".concat(e)
                },
                b = function() {
                    return "/_/oh-noes"
                },
                h = function(e, t) {
                    return "//".concat(e, "/p/").concat(t, "/share/facebook")
                },
                v = function(e) {
                    return "/_/subscriptions/topic/".concat(e, "/")
                },
                y = function() {
                    return "/_/subscriptions/bulk"
                },
                x = function() {
                    return "/"
                },
                E = function(e, t) {
                    return "https://".concat(e, "/media/").concat(t)
                },
                w = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.authDomain,
                        n = e.autoplay,
                        r = void 0 === n || n;
                    return "https://".concat(t, "/about").concat(r ? "?autoplay=1" : "")
                },
                O = function(e, t) {
                    return "https://".concat(e, "/new-story") + (t && t.inResponseToQuoteId ? "?inResponseToQuoteId=".concat(t.inResponseToQuoteId) : "")
                },
                j = function() {
                    return "/p/import"
                },
                _ = function(e) {
                    return "https://".concat(e, "/membership")
                },
                k = function(e) {
                    return "https://".concat(e, "/gift-checkout")
                },
                S = function(e) {
                    return "https://".concat(e, "/creators")
                },
                C = function(e, t) {
                    return e ? e.mediumUrl || (t ? "/".concat(e.id) : "/p/".concat(e.id)) : ""
                },
                P = function(e, t) {
                    return "https://".concat(e, "/p/").concat(t, "/edit")
                },
                I = function(e, t) {
                    return "https://".concat(e, "/p/").concat(t)
                },
                L = function(e) {
                    return "/_/p/".concat(e, "/quotes/create")
                },
                T = function() {
                    return "/search"
                },
                A = function(e, t, n) {
                    var r = n ? "".concat(T(), "/").concat(n) : "".concat(T());
                    return t ? "/".concat(t).concat(r, "?q=").concat(e) : "".concat(r, "?q=").concat(e)
                },
                N = function(e) {
                    return "/s/".concat(e)
                },
                R = function(e) {
                    return "/series/".concat(e)
                },
                D = function(e) {
                    return "/m/signout/".concat(e)
                },
                U = function(e, t) {
                    return "https://".concat(e, "/m/signin?operation=login").concat(t ? "&redirect=".concat(encodeURIComponent(t)) : "")
                },
                M = function(e, t) {
                    return "https://".concat(e, "/m/signin?operation=register").concat(t ? "&redirect=".concat(encodeURIComponent(t)) : "")
                },
                B = function(e, t) {
                    return "https://".concat(e, "/p/").concat(t, "/responses/show")
                },
                H = function(e) {
                    return "/_/subscribe/collection/".concat(e)
                },
                F = function(e, t) {
                    return "/_/subscribe/collection/".concat(e, "/").concat(t)
                },
                z = function(e) {
                    return "/_/subscribe/user/".concat(e)
                },
                q = function(e, t) {
                    return "/_/subscribe/user/".concat(e, "/").concat(t)
                },
                W = function(e) {
                    return "/tag/".concat(e)
                },
                V = function(e) {
                    return "https://".concat(e, "/topics")
                },
                G = function(e, t) {
                    return "https://".concat(e, "/topic/").concat(t)
                },
                K = function(e, t) {
                    return "//".concat(e, "/p/").concat(t, "/share/twitter")
                },
                X = function(e) {
                    return "/_/vote/p/".concat(e)
                },
                Y = function(e, t) {
                    return "/_/vote/".concat(e, "/").concat(t)
                },
                Q = function(e) {
                    return "/@".concat(e)
                },
                $ = function(e) {
                    return "/@".concat(e, "/edit")
                },
                J = function(e) {
                    return "/@".concat(e, "/latest")
                },
                Z = function(e) {
                    return "/@".concat(e, "/series")
                },
                ee = function(e) {
                    return "/@".concat(e, "/has-recommended")
                },
                te = function(e) {
                    return "/@".concat(e, "/highlights")
                },
                ne = function(e) {
                    return "/@".concat(e, "/responses")
                },
                re = function(e) {
                    return "/@".concat(e, "/following")
                },
                oe = function(e) {
                    return "/@".concat(e, "/followers")
                },
                ie = function(e) {
                    return "https://".concat(e, "/upgrade")
                },
                ae = function(e, t) {
                    return "https://".concat(e).concat(Q(t))
                },
                ce = function(e, t) {
                    return "https://".concat(e).concat(function(e) {
                        return "/u/".concat(e)
                    }(t))
                },
                se = function() {
                    return "/me/stories/drafts"
                },
                le = function() {
                    return "/me/stories/public"
                },
                ue = function() {
                    return "/me/stories/unlisted"
                },
                de = function() {
                    return "/me/settings#account"
                },
                me = function(e) {
                    return "https://".concat(e, "/me/following/suggestions")
                },
                fe = function(e) {
                    return "https://".concat(e, "/me/list/queue")
                },
                pe = function(e) {
                    return "https://".concat(e, "/me/partner/dashboard")
                },
                ge = function(e) {
                    return "https://".concat(e, "/me/publications")
                },
                be = function(e) {
                    return "https://".concat(e, "/me/series/drafts")
                },
                he = function(e) {
                    return "https://".concat(e, "/me/settings")
                },
                ve = function(e) {
                    return "https://".concat(e, "/me/stats")
                },
                ye = function(e, t) {
                    return "https://".concat(e, "/me/stats/post/").concat(t)
                },
                xe = function(e) {
                    return "https://".concat(e, "/me/stories")
                },
                Ee = function(e) {
                    return e.slug ? "/".concat(e.slug) : "/c/".concat(e.id)
                },
                we = function(e) {
                    return "/c/".concat(e)
                },
                Oe = function(e, t) {
                    var n = s.a.parse(t).port;
                    return e.domain ? "https://".concat(e.domain).concat(n ? ":".concat(n) : "") : Ee(e)
                },
                je = function(e, t) {
                    return "https://".concat(t).concat(Ee(e), "/new-story")
                },
                _e = function(e, t) {
                    return "https://".concat(t).concat(Ee(e), "/stories/submissions")
                },
                ke = function(e, t) {
                    return "".concat(Oe(e, t), "/stats/overview")
                },
                Se = function(e, t) {
                    return "https://".concat(t).concat(Ee(e), "/settings/dashboard")
                },
                Ce = function(e, t) {
                    return "https://".concat(t).concat(Ee(e), "/settings/letters")
                },
                Pe = function(e, t) {
                    return "https://".concat(t).concat(Ee(e), "/settings/followers")
                },
                Ie = function(e, t) {
                    return "https://".concat(t).concat(Ee(e), "/settings/navigation")
                },
                Le = function(e, t) {
                    return "https://".concat(t).concat(Ee(e), "/settings/feature-pages")
                },
                Te = function(e, t) {
                    return "https://".concat(t).concat(Ee(e), "/settings")
                },
                Ae = a()(l()),
                Ne = function() {
                    return "https://help.medium.com"
                },
                Re = function() {
                    return "https://medium.com/policy/9db0094a1e0f"
                },
                De = function() {
                    return "https://help.medium.com/hc/en-us/articles/360006543813"
                },
                Ue = function() {
                    return "https://help.medium.com/hc/en-us/articles/360006543813-Friend-Links"
                },
                Me = function() {
                    return "https://help.medium.com/hc/en-us/articles/360006362473"
                },
                Be = function() {
                    return "https://help.medium.com/hc/en-us/articles/360009297694-Frequently-asked-questions-about-distribution-on-Medium"
                },
                He = function() {
                    return "https://help.medium.com/hc/en-us/articles/360018834314"
                },
                Fe = function() {
                    return "https://help.medium.com/hc/en-us/articles/360018834334"
                },
                ze = function() {
                    return "https://help.medium.com/hc/en-us/articles/214035868-Leave-a-note"
                },
                qe = function() {
                    return "https://help.medium.com/hc/en-us/articles/360036691193"
                },
                We = function() {
                    return "https://medium.com/policy/9db0094a1e0f"
                },
                Ve = function() {
                    return "https://medium.com/policy/f03bf92035c9"
                },
                Ge = function() {
                    return "https://medium.com/jobs-at-medium/work-at-medium-959d1a85284e"
                },
                Ke = function(e) {
                    return "https://twitter.com/".concat(e)
                },
                Xe = function() {
                    return "https://medium.statuspage.io"
                },
                Ye = function() {
                    return "/m/app"
                },
                Qe = function() {
                    return "https://itunes.apple.com/app/medium-everyones-stories/id828256236?pt=698524&mt=8"
                },
                $e = function() {
                    return "https://play.google.com/store/apps/details?id=com.medium.reader"
                },
                Je = function(e) {
                    return "https://cdn-videos-1.medium.com/".concat(e[0], "/").concat(e[1], "/").concat(e[2], "/").concat(e, "/dash/manifest.mpd")
                },
                Ze = function(e) {
                    return "//".concat(e, "/m/connect/facebook")
                },
                et = function(e) {
                    return "//".concat(e, "/m/connect/google")
                },
                tt = function(e) {
                    return "//".concat(e, "/m/account/authenticate-twitter")
                },
                nt = function() {
                    return "/_/batch"
                },
                rt = function(e) {
                    return "/_/lite/performance/".concat(e)
                },
                ot = function(e) {
                    return "medium://p/".concat(e)
                },
                it = function(e) {
                    return "android-app://com.medium.reader/".concat(e.replace("https://", "https/"))
                },
                at = function(e) {
                    return "//".concat(e, "/m/callback/google")
                },
                ct = function() {
                    return "/me/partner/taxes"
                },
                st = function() {
                    return "/me/partner/enroll"
                }
        },
        "./src/util/theme.ts": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                o = n.n(r),
                i = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                a = n.n(i),
                c = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                s = n.n(c),
                l = n("./node_modules/graphql-tag/src/index.js"),
                u = n.n(l),
                d = n("./node_modules/lodash/round.js"),
                m = n.n(d),
                f = n("./node_modules/lodash/clamp.js"),
                p = n.n(f),
                g = /^#([a-fA-F0-9]{2})([a-fA-F0-9]{6})$/,
                b = function(e) {
                    if (! function(e) {
                            return g.test(e)
                        }(e)) throw new Error("Invalid color string");
                    return [parseInt(e.slice(3, 5), 16), parseInt(e.slice(5, 7), 16), parseInt(e.slice(7, 9), 16), parseInt(e.slice(1, 3), 16) / 255]
                },
                h = function(e) {
                    return "rgba(".concat(function(e) {
                        var t = a()(e, 4),
                            n = t[0],
                            r = t[1],
                            o = t[2],
                            i = t[3];
                        return [m()(n), m()(r), m()(o), m()(i, 3)]
                    }(e).join(", "), ")")
                },
                v = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5;
                    return e * (n = p()(n, 0, 1)) + t * (1 - n)
                },
                y = n("./src/styles/colors.ts");

            function x(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(n, !0).forEach(function(t) {
                        o()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function w() {
                var e = s()(["\n  fragment ThemeUtilTintBackground_collection on Collection {\n    colorPalette {\n      tintBackgroundSpectrum {\n        ...ThemeUtil_colorSpectrum\n      }\n    }\n  }\n  ", "\n"]);
                return w = function() {
                    return e
                }, e
            }

            function O() {
                var e = s()(["\n  fragment ThemeUtilAccent_collection on Collection {\n    colorPalette {\n      defaultBackgroundSpectrum {\n        ...ThemeUtil_colorSpectrum\n      }\n      highlightSpectrum {\n        ...ThemeUtil_colorSpectrum\n      }\n    }\n  }\n  ", "\n"]);
                return O = function() {
                    return e
                }, e
            }

            function j() {
                var e = s()(["\n  fragment ThemeUtil_colorSpectrum on ColorSpectrum {\n    backgroundColor\n    ...ThemeUtilInterpolateHelpers_colorSpectrum\n  }\n  ", "\n"]);
                return j = function() {
                    return e
                }, e
            }

            function _() {
                var e = s()(["\n  fragment ThemeUtilInterpolateHelpers_colorSpectrum on ColorSpectrum {\n    colorPoints {\n      ...ThemeUtil_colorPoint\n    }\n  }\n  ", "\n"]);
                return _ = function() {
                    return e
                }, e
            }

            function k() {
                var e = s()(["\n  fragment ThemeUtil_colorPoint on ColorPoint {\n    color\n    point\n  }\n"]);
                return k = function() {
                    return e
                }, e
            }
            n.d(t, "a", function() {
                return I
            }), n.d(t, "b", function() {
                return L
            }), n.d(t, "c", function() {
                return N
            }), n.d(t, "i", function() {
                return R
            }), n.d(t, "g", function() {
                return D
            }), n.d(t, "f", function() {
                return U
            }), n.d(t, "h", function() {
                return M
            }), n.d(t, "e", function() {
                return B
            }), n.d(t, "d", function() {
                return H
            });
            var S = u()(k()),
                C = u()(_(), S),
                P = u()(j(), C),
                I = u()(O(), P),
                L = u()(w(), P),
                T = function(e, t) {
                    var n = e.colorPoints;
                    if (!n.length) return [255, 255, 255, 0];
                    for (var r = n.slice().sort(function(e, t) {
                            return e.point === t.point ? 0 : e.point < t.point ? -1 : 1
                        }), o = 0; r[o + 1] && Math.abs(t - r[o + 1].point) < Math.abs(t - r[o].point);) o += 1;
                    var i = r[o];
                    if (t === i.point) return b(i.color);
                    var c = t > i.point ? [r[o], r[o + 1]] : [r[o - 1], r[o]],
                        s = a()(c, 2),
                        l = s[0],
                        u = s[1];
                    if (null == l || null == u || l.point === u.point) return b(i.color);
                    var d = (t - l.point) / (u.point - l.point);
                    return function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5,
                            r = a()(e, 4),
                            o = r[0],
                            i = r[1],
                            c = r[2],
                            s = r[3],
                            l = a()(t, 4),
                            u = l[0],
                            d = l[1],
                            m = l[2],
                            f = l[3];
                        return [v(o, u, n), v(i, d, n), v(c, m, n), v(s, f, n)]
                    }(b(l.color), b(u.color), d)
                },
                A = function(e, t) {
                    return h(T(e, t))
                },
                N = function(e, t, n) {
                    return e && t ? E({}, n, {
                        accentColor: E({}, n.accentColor, {
                            text: {
                                light: A(e, .2),
                                normal: A(e, .2),
                                dark: A(e, .3)
                            },
                            border: {
                                light: A(e, 0),
                                normal: A(e, 0),
                                dark: A(e, .2),
                                darker: A(e, .2)
                            },
                            fill: {
                                light: A(e, 0),
                                normal: A(e, 0),
                                dark: A(e, .2)
                            }
                        }),
                        highlightColor: {
                            light: A(t, .1),
                            normal: A(t, .6),
                            dark: A(t, 1)
                        }
                    }) : n
                },
                R = function(e, t) {
                    return e ? E({}, t, {
                        backgroundColor: (n = e.backgroundColor, h(b(n))),
                        accentColor: E({}, t.accentColor, {
                            text: {
                                light: A(e, .5),
                                normal: A(e, .7),
                                dark: A(e, 1)
                            },
                            border: {
                                light: A(e, .5),
                                normal: A(e, .7),
                                dark: A(e, .9),
                                darker: A(e, 1)
                            },
                            fill: {
                                light: A(e, .5),
                                normal: A(e, .7),
                                dark: A(e, .9)
                            }
                        }),
                        baseColor: E({}, t.baseColor, {
                            background: {
                                light: A(e, .5),
                                normal: A(e, .7),
                                dark: A(e, .9)
                            },
                            border: {
                                lighter: A(e, .5),
                                light: A(e, .5),
                                normal: A(e, .7),
                                dark: A(e, .9),
                                darker: A(e, 1)
                            },
                            text: {
                                lighter: A(e, .45),
                                light: A(e, .6),
                                normal: A(e, .7),
                                dark: A(e, 1),
                                darker: A(e, .9)
                            },
                            fill: {
                                lighter: A(e, .45),
                                light: A(e, .6),
                                normal: A(e, .7),
                                dark: A(e, .9),
                                darker: A(e, 1)
                            }
                        })
                    }) : t;
                    var n
                },
                D = function(e) {
                    return E({}, e, {
                        backgroundColor: Object(y.w)(1),
                        accentColor: E({}, e.accentColor, {
                            text: {
                                light: Object(y.w)(.8),
                                normal: Object(y.w)(.95),
                                dark: Object(y.w)(1)
                            },
                            border: {
                                light: Object(y.w)(.65),
                                normal: Object(y.w)(.8),
                                dark: Object(y.w)(.9),
                                darker: Object(y.w)(1)
                            },
                            fill: {
                                light: Object(y.w)(.6),
                                normal: Object(y.w)(.7),
                                dark: Object(y.w)(.9)
                            }
                        }),
                        baseColor: E({}, e.baseColor, {
                            background: {
                                light: Object(y.w)(.9),
                                normal: Object(y.w)(.95),
                                dark: Object(y.w)(1)
                            },
                            border: {
                                lighter: Object(y.w)(.4),
                                light: Object(y.w)(.65),
                                normal: Object(y.w)(.8),
                                dark: Object(y.w)(.9),
                                darker: Object(y.w)(1)
                            },
                            text: {
                                lighter: Object(y.w)(.6),
                                light: Object(y.w)(.8),
                                normal: Object(y.w)(.95),
                                dark: Object(y.w)(1),
                                darker: Object(y.w)(1)
                            },
                            fill: {
                                lighter: Object(y.w)(.45),
                                light: Object(y.w)(.6),
                                normal: Object(y.w)(.7),
                                dark: Object(y.w)(.9),
                                darker: Object(y.w)(1)
                            }
                        })
                    })
                },
                U = function(e) {
                    return E({}, D(e), {
                        backgroundColor: e.errorColor
                    })
                },
                M = function(e) {
                    return E({}, e, {
                        backgroundColor: Object(y.w)(.2),
                        accentColor: E({}, e.accentColor, {
                            text: {
                                light: Object(y.w)(.8),
                                normal: Object(y.w)(.95),
                                dark: Object(y.w)(1)
                            },
                            border: {
                                light: Object(y.w)(.65),
                                normal: Object(y.w)(.8),
                                dark: Object(y.w)(.9),
                                darker: Object(y.w)(1)
                            },
                            fill: {
                                light: Object(y.w)(.6),
                                normal: Object(y.w)(.7),
                                dark: Object(y.w)(.9)
                            }
                        }),
                        baseColor: E({}, e.baseColor, {
                            background: {
                                light: Object(y.w)(.9),
                                normal: Object(y.w)(.95),
                                dark: Object(y.w)(1)
                            },
                            border: {
                                lighter: Object(y.w)(.2),
                                light: Object(y.w)(.65),
                                normal: Object(y.w)(.8),
                                dark: Object(y.w)(.9),
                                darker: Object(y.w)(1)
                            },
                            text: {
                                lighter: Object(y.w)(.8),
                                light: Object(y.w)(.9),
                                normal: Object(y.w)(.95),
                                dark: Object(y.w)(1),
                                darker: Object(y.w)(1)
                            },
                            fill: {
                                lighter: Object(y.w)(.45),
                                light: Object(y.w)(.6),
                                normal: Object(y.w)(.7),
                                dark: Object(y.w)(.9),
                                darker: Object(y.w)(1)
                            }
                        })
                    })
                },
                B = function(e) {
                    return E({}, e, {
                        backgroundColor: Object(y.t)(1),
                        baseColor: E({}, e.baseColor, {
                            background: {
                                light: Object(y.w)(.9),
                                normal: Object(y.w)(.95),
                                dark: Object(y.w)(1)
                            },
                            border: {
                                lighter: Object(y.w)(.4),
                                light: Object(y.w)(.65),
                                normal: Object(y.w)(.8),
                                dark: Object(y.w)(.9),
                                darker: Object(y.w)(1)
                            },
                            text: {
                                lighter: Object(y.w)(.6),
                                light: Object(y.w)(.8),
                                normal: Object(y.w)(.95),
                                dark: Object(y.w)(1),
                                darker: Object(y.w)(1)
                            },
                            fill: {
                                lighter: Object(y.w)(.45),
                                light: Object(y.w)(.6),
                                normal: Object(y.w)(.7),
                                dark: Object(y.w)(.9),
                                darker: Object(y.w)(1)
                            }
                        })
                    })
                },
                H = function(e, t) {
                    return e ? E({}, t, {
                        newFonts: E({}, t.newFonts, {}, e)
                    }) : t
                }
        },
        "./src/util/useragent.ts": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return c
            });
            var r = "donkey",
                o = "hangtag";

            function i(e, t) {
                return t.some(function(t) {
                    return -1 !== e.indexOf(t)
                })
            }

            function a(e) {
                if (!e) return !1;
                if (function(e) {
                        return !!e && (function(e) {
                            return !!e && -1 !== e.indexOf(r)
                        }(e) || function(e) {
                            return !!e && -1 !== e.indexOf(o)
                        }(e))
                    }(e)) return !0;
                var t = i(e, ["iPad", "Nexus 10"]),
                    n = !t && i(e, ["iPhone", "iphone", "Android", "BlackBerry"]);
                return t || n
            }

            function c(e) {
                return !!e && -1 !== e.indexOf("Macintosh")
            }
        },
        0: function(e, t, n) {
            n("./config/polyfills.js"), e.exports = n("./src/index.tsx")
        }
    },
    [
        [0, 10, 27]
    ]
]);
//# sourceMappingURL=main.2452615e.chunk.js.map