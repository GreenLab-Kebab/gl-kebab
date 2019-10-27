define(function(require) {
    function a(a) {
        var c = window.sSession.from,
            w = a.from || "",
            v = a.channel || "",
            b = c && "0" !== c ? c : "",
            h = window.sSession.mobileBrowserId,
            g = $("#commonBase").attr("data-lid"),
            C = (new Date).getTime();
        return {
            tc: {
                origin: w,
                from: b,
                channel: v,
                browserid: h,
                qid: g,
                timestamp: C
            },
            tcbox: {
                from: b,
                browserid: h,
                qid: g,
                timestamp: C
            }
        }
    }

    function c(c, w, v) {
        var b = D[w].invokeConfig;
        v = v || {}, B.log.send({
            ct: 10,
            cst: c,
            ref: "index_iphone",
            logFrom: w,
            logInfo: $.extend(a(b).tc, v)
        })
    }

    function w(a) {
        if (!a) return "";
        var c = /#\S*/g,
            w = a.match(c);
        return w = w ? w[0] : "", a = a.replace(c, ""), a += (-1 === a.indexOf("?") ? "?" : "&") + "sa=cw19_d&rqid=" + $("#commonBase").attr("data-lid"), a + w
    }

    function v(c) {
        var v = D[c].invokeConfig,
            b = g(v),
            h = w(v.url),
            C = h ? {
                iosScheme: "baiduboxapp://browse?url=" + encodeURIComponent(h) + "&opennewwindow=1&minver=3.8.0.0",
                androidCommand: {
                    mode: "2",
                    url: h,
                    min_v: "25165824"
                }
            } : {
                iosScheme: "baiduboxapp://apppage?action=openPage&params=%7B%22pageid%22%3A%22homepage%22%7D",
                androidCommand: {
                    mode: "0",
                    intent: "intent:#Intent;action=com.baidu.searchbox.action.HOME;category=android.intent.category.DEFAULT;B.key_switch_to_home=true;end",
                    min_v: "25165824"
                }
            },
            k = a(v).tcbox,
            _ = k.from,
            S = v.from,
            I = v.channel,
            y = {
                url: "wise_" + I + "_" + _ + "_" + S,
                activity_id: 168
            },
            B = "https://boxer.baidu.com/scheme?source=" + S + "&channel=" + I + "&p1=" + I + "&p2=" + _ + "&p3=" + S + "&tokenData=" + encodeURIComponent(JSON.stringify(y));
        $.extend(C, {
            url: h,
            failUrl: B,
            notUseIdm: !0,
            failCallback: function() {
                location.href = B
            },
            copyTokenData: y,
            extLog: {
                ext_content: k
            }
        }), b.ready(function() {
            b.open(C)
        })
    }

    function b() {
        D.a1.show ? (B.log.send({
            ct: 10,
            cst: 1,
            ref: "index_iphone",
            logFrom: "index"
        }), c(y.SHOW, "a1")) : D.a2.show && c(y.SHOW, "a2"), C.shMonitor([19]);
        var a = $("." + window.sSession.fullscreenMainClass);
        a.on("click", function() {
            D.a1.show ? (c(y.CLICK, "a1"), v("a1")) : D.a2.show && (c(y.CLICK, "a2"), v("a2"))
        }), $("." + window.sSession.fullscreenBackClass).on("click", function(e) {
            e.stopPropagation(), c(y.CLICK, "a2", {
                eventtype: "continue"
            }), k(19), document.cookie = "rsv_i=" + window.sSession.rsvToken + ";domain=.baidu.com", window.location.reload()
        })
    }
    var h = require("wiseindex/lib/invoke/serverDataFactory"),
        g = require("wiseindex/lib/invoke/fnProvider"),
        C = require("wiseindex/lib/invoke/log"),
        k = require("wiseindex/lib/invoke/setFullScreenIvkCK");
    const _ = {
            a1: "fullscreenDisable",
            a2: "fullscreenContinue"
        },
        S = _.a1,
        I = _.a2,
        y = {
            SHOW: 1,
            CLICK: 2
        };
    var D = {
        a1: h(S),
        a2: h(I)
    };
    return b
});