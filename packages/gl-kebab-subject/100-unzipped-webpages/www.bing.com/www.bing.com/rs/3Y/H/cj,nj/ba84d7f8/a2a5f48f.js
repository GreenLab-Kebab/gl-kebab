(function() {
    function n(i) {
        var u, f;
        (i = i || window.event, u = i.target || i.srcElement, !i.isTrusted || t("b_notificationContainer", u) || t("b_notificationContainer_bop", u) || t("thp_notf_div", u) || t("bnp_ttc_div", u)) || (f = _w.consentcookiename, sj_cook.setNoCrumbs(f, "1", !0, "/", 561600), window.Log && Log.Log && Log.Log("ClientCookieConsent", "CI", "compliance", !0, "successful consent"), r("b_notificationContainer_bop"), sj_ue(_d, "click", n, !0), sj_ue(_d, "keypress", n, !0))
    }

    function r(n) {
        var t = document.getElementById(n);
        t && (t.style.display = "none")
    }

    function t(n, t) {
        var i = document.getElementById(n);
        return i && i.contains(t) ? !0 : !1
    }

    function i() {
        var t = _w.consentcookiename;
        sj_cook.get(t) == null && sb_st(function() {
            sj_be(_d, "click", n, !0);
            sj_be(_d, "keypress", n, !0)
        }, 0)
    }
    sj_evt.bind("onP1", function() {
        sj_evt.bind("bnp.notif.shown", i, !0);
        sj_evt.bind("bnp.embed.ready", i, !0)
    }, !0)
})()