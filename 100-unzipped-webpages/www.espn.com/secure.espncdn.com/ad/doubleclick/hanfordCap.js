function checkSetCapping(e, t, n) {
    if (t = "espnCreative" + t, "get" == e && navigator.cookieEnabled && document.cookie.indexOf(t) > -1) return !0;
    if ("set" == e && navigator.cookieEnabled) {
        var a = new Date;
        if (n) a = new Date(a.getFullYear(), a.getMonth(), a.getDate(), n + a.getHours(), a.getMinutes(), a.getSeconds(), 0);
        else {
            var n = 24;
            a = new Date(a.getFullYear(), a.getMonth(), a.getDate(), n, 0, 0, 0)
        }
        return document.cookie = t + "=true;path=/;expires=" + a.toGMTString(), !0
    }
    return !1
}

function clearCapping(e) {
    return checkSetCapping("set", e, -24)
}