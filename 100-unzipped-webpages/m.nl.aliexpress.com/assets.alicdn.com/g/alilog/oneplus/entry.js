/* 2018-10-09 14:12:23 */ ! function(e, n) {
    function i(e) {
        var i = n.createElement("iframe");
        return i.style.cssText = "width:0;height:0;display:none", i.src = e, i.id = d, n.body.appendChild(i), i
    }

    function t(e) {
        var i = new RegExp("(^| )" + e + "=([^;]*)(;|$)"),
            t = n.cookie.match(i);
        return t ? t[2] || "" : ""
    }

    function o() {
        return navigator.userAgent.indexOf("Windows NT 5.1") >= 0 && (navigator.userAgent.indexOf("MSIE 6") >= 0 || navigator.userAgent.indexOf("MSIE 7") >= 0 || navigator.userAgent.indexOf("MSIE 8") >= 0) && "https:" === location.protocol
    }

    function a() {
        var e = navigator.userAgent.toLowerCase();
        return e.indexOf("android") >= 0 || e.indexOf("iphone") >= 0 || e.indexOf("ipad") >= 0 || e.indexOf("ipod") >= 0 || e.indexOf("mobile") >= 0
    }

    function r() {
        var n = (new Date).getTime();
        if (8e3 > n - c) {
            var o = t("cna"),
                a = t("nickname");
            if (o || a) {
                i("//g.alicdn.com/alilog/oneplus/blk.html#coid=" + encodeURIComponent(o) + "&noid=" + encodeURIComponent(a))
            } else e.setTimeout(function() {
                r()
            }, 300)
        }
    }
    try {
        var d = "_oid_ifr_",
            c = (new Date).getTime();
        o() || a() || r()
    } catch (f) {}
}(window, document);