define(function() {
    function a(a) {
        var k = sSession.invokeApps || null,
            h = b.indexOf(a);
        if (k && k.control && k.control[h]) {
            var _ = "1" === k.rule[h],
                v = k.control[h],
                g = c(a, v);
            return {
                show: _,
                control: v,
                invokeConfig: g
            }
        }
        return {
            show: !1,
            control: null,
            invokeConfig: null
        }
    }

    function c(a, c) {
        var b = {};
        switch (c.app) {
            case "1":
                b.app = "zbios", b.noLite = !0;
                break;
            case "2":
                b.app = "secr";
                break;
            case "3":
                b.app = "zbios", b.noLite = !1;
                break;
            default:
                b.app = "zbios", b.noLite = !1
        }
        switch (c.mode) {
            case "1":
                b.action = "open_home";
                break;
            case "3":
                b.action = "open_url";
                break;
            case "4":
                b.action = "jump_url";
                break;
            case "5":
                b.action = "open_camera";
                break;
            default:
                b.action = "open_home"
        }
        return ("zbios" === b.app || "secr" === b.app) && (b.channel = c.channel || "", b.from = c.from || ""), "open_url" === b.action && (b.url = c.invoke_url || ""), c.default_url && (b.failUrl = c.default_url), "background" === a && (b.failUrl = "https://m.baidu.com", b.failCallback = function() {}), "jump_url" === b.action && (b.url = c.invoke_url || ""), b
    }
    var b = ["background", "", "dialog", "advertisement", "", "floatAd", "", "textLink", "fixedButton", "banner", "", "", "", "", "his", "sug", "input", "doodle", "fullscreenDisable", "fullscreenContinue", "thirdCard", "cameraLayer"];
    return a
});