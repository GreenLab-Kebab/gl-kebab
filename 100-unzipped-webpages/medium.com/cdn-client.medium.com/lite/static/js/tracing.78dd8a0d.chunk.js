(window.webpackJsonp = window.webpackJsonp || []).push([
    [26], {
        "./src/util/tracing.ts": function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, "init", function() {
                return a
            }), t.d(e, "extractSpan", function() {
                return u
            }), t.d(e, "instrumentAppPerformance", function() {
                return l
            });
            var r = t("./node_modules/opentracing/lib/index.js"),
                o = t("./node_modules/lightstep-tracer/browser.js"),
                s = t("./src/store/actions/debug.ts"),
                i = t("./src/store/selectors/session.ts"),
                c = t("./src/util/performance.ts"),
                a = function(n) {
                    var e = n.name,
                        t = n.host,
                        s = n.token,
                        i = n.appVersion,
                        c = new o.Tracer({
                            component_name: e,
                            xhr_instrumentation: !1,
                            access_token: s,
                            collector_host: t,
                            default_span_tags: {
                                "component.version": i
                            }
                        });
                    return Object(r.initGlobalTracer)(c), c
                },
                u = function(n, e) {
                    if (e) return n.extract(r.FORMAT_TEXT_MAP, e)
                },
                l = function(n, e, t, o, a, u) {
                    var l = {
                            "user.logged_in": Object(i.a)(a),
                            "req.route_name": u ? u.name : "unknown"
                        },
                        d = {
                            loggedIn: Object(i.a)(a),
                            route: u ? u.name : "unidentified"
                        },
                        f = function(n) {
                            return Math.round(1e3 * n)
                        },
                        p = function(e, t, r, o) {
                            var s = r.start,
                                i = r.end,
                                c = n.startSpan("timing.".concat(t), {
                                    childOf: e,
                                    tags: l
                                }).setBeginMicros(f(s)).setEndMicros(f(i));
                            return null != o && o(c), c.finish(), c
                        };
                    c.d.observe(function(i) {
                        o.reportRender(d, i);
                        var c = n.startSpan("timing.navigation", {
                            references: [Object(r.followsFrom)(e)],
                            tags: l
                        }).setBeginMicros(f(i.load.start)).setEndMicros(f(i.load.end));
                        p(c, "beforeDomainLookup", i.beforeDomainLookup), p(c, "domainLookup", i.domainLookup), p(c, "connect", i.connect), p(c, "request", i.request), p(c, "response", i.response), p(c, "processing", i.processing);
                        var a = i.overallFCP,
                            u = i.client,
                            g = i.render;
                        null != a && p(c, "firstContentfulPaint", a), null != u && p(c, "client", u, function(n) {
                            null != g && p(n, "render", g)
                        }), c.finish(), t(Object(s.c)(c.generateTraceURL()))
                    }), c.b.observe(function(t) {
                        o.reportInput(d, t), n.startSpan("timing.input.first.delay", {
                            references: [Object(r.followsFrom)(e)],
                            tags: l
                        }).setBeginMicros(f(t.first.start)).setEndMicros(f(t.first.end)).finish()
                    })
                }
        }
    }
]);
//# sourceMappingURL=tracing.78dd8a0d.chunk.js.map