! function(n) {
    ! function() {
        try {
            new window.CustomEvent("test")
        } catch (n) {
            function t(n, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var e = document.createEvent("CustomEvent");
                return e.initCustomEvent(n, t.bubbles, t.cancelable, t.detail), e
            }
            t.prototype = window.Event.prototype, window.CustomEvent = t
        }
    }();
    var e = {
        unid: void 0,
        reason: "denied"
    };
    window.unid = {
        version: "4.0.133",
        get: function(n) {
            n && n()
        },
        getData: function(n) {
            return n && n(e), e
        },
        vconsent: function(n, t) {
            t(e)
        }
    }, n.dispatchEvent(new CustomEvent("unid.ready")), n.dispatchEvent(new CustomEvent("unid.value", {
        detail: e
    }))
}(document);