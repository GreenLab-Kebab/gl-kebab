jQuery(document).ready(function(e) {
    function t(e) {
        for (var t = /\s+/, a = Math.floor(e.length / 2), n = 0; n < a; n++) {
            var i = a - n,
                o = a + n;
            if (-1 !== e[i].search(t)) return i;
            if (-1 !== e[o].search(t)) return o
        }
        return e.length
    }

    function a(t) {
        e(".masthead").on("onscreen", function(a, n) {
            n.percentInviewVertical < t ? e(".sticky-header").addClass("visible") : e(".sticky-header").removeClass("visible")
        })
    }

    function n(t, a, n) {
        e(t).on("onscreen", function(t, i) {
            i.percentInview > a ? e(n || this).addClass("ready-to-animate") : e(n || this).removeClass("ready-to-animate")
        })
    }

    function i() {
        var e = new Date((new Date).getFullYear() + 10, 0, 1);
        document.cookie = d + "=speedbump; expires=" + e.toUTCString()
    }

    function o() {
        for (var e = document.cookie.split("; "), t = 0; t < e.length; t++) {
            if (e[t].split("=")[0] == d) return !1
        }
        return !0
    }

    function s() {
        e("#mobile-speedbump").addClass("launched"), e("#mobile-speedbump").attr("aria-hidden", "false"), e.each(m, function(t, a) {
            e(a).attr("tabindex", "-1")
        }), e("#mobile-speedbump [tabindex]").attr("tabindex", "0"), e("#mobile-speedbump .secondary a").focus(), e("body").addClass("locked"), e(u).ontouchend = function(e) {
            e.preventDefault()
        }
    }

    function r() {
        e("[tabindex]").attr("tabindex", "0"), e("#mobile-speedbump [tabindex]").attr("tabindex", "-1"), e("#mobile-speedbump").removeClass("launched"), e("#mobile-speedbump").attr("aria-hidden", "true"), e("body").removeClass("locked")
    }
    e("body").removeClass("preload"), vhCheck(), e("a:not(.internal)").each(function() {
        e(this).attr("target", "_blank")
    });
    var l = getOS();
    e("body").attr("data-likely-os", getOS()), "iOS" == l || "Android" == l ? e("body").attr("data-is-probably-mobile-os", "true") : e("body").attr("data-is-probably-mobile-os", "false"), e(".user-agent-test li i").html(l), e(".premium-appeal p a").each(function(t, a) {
        e(a).html(e(a).html().replace(/([^\s]+)$/, function(e, t) {
            return '<i class="final-phrase">' + t + "</i>"
        }))
    }), e(".halve-me").each(function(a, n) {
        var i = e(n).html(),
            o = t(i),
            s = i.slice(0, o).trim(),
            r = i.slice(o, i.length).trim();
        e(n).html(s + "</span><span>" + r)
    });
    var c;
    e("[name='a-simple-experience']").find(".buttons-captions").attr("data-current", "1"), e("[name='a-simple-experience']").find(".buttons-track li:nth-of-type(1)").addClass("current"), e("[name='a-simple-experience'] .buttons-track li").on("focus mouseover", function() {
        c = e(this).index(), c += 1, e("[name='a-simple-experience'] .buttons-track li").attr("class", ""), e(this).addClass("current"), e("[name='a-simple-experience'] .buttons-captions").attr("data-current", c), e(".monitor .scenario").removeClass("active"), e(".monitor .scenario[data-scenario='" + c + "']").addClass("active")
    }), a("iOS" == l | "Android" == l ? 55 : 90), e('[name="productivity-apps"] header span').on("onscreen", function(t, a) {
        a.percentInview > 90 ? e(this).addClass("visible") : e(this).removeClass("visible")
    }), n(".masthead", 0, ".masthead .primary-content"), n(".productivity-row", 1), n(".premium-appeal .plate", 1, ".premium-appeal .plate"), n('[name="accessibility-addendum"]', 1), n('[name="productivity-apps"] .visualization', 1), n(".links-graveyard .bound", 1, ".links-graveyard"), n(".welcome-to-outlook .text", 1, ".welcome-to-outlook"), n(".welcome-to-outlook .icons-row", 1, ".welcome-to-outlook .icons-row"), n('[name="security"]', 1), n(".features .icon", 99), n('[name="time-management"] .family-photograph', 1), n('[name="time-management"] .scenario', 1), n('[name="a-simple-experience"] header', 1), n(".hotmail-explanation", 1);
    var d = (new LazyLoad({
            elements_selector: ".lazy",
            threshold: 800
        }), "X-OPS"),
        m = e("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]"),
        u = e("#mobile-speedbump")[0],
        p = e("#mobile-speedbump .secondary a")[0],
        b = e(".mobile-speedbump-close")[0],
        l = getOS();
    "iOS" !== l && "Android" !== l || e("[data-task='signin']").click(function() {
        o() && (event.preventDefault(), i(), s())
    }), e(u).on("keydown", function(e) {
        "Tab" === e.key ? e.shiftKey && document.activeElement === b ? (e.preventDefault(), p.focus()) : e.shiftKey || document.activeElement !== p || (e.preventDefault(), b.focus()) : "Escape" == e.key && r()
    }), e("#mobile-speedbump .mobile-speedbump-close").click(function() {
        r()
    })
});