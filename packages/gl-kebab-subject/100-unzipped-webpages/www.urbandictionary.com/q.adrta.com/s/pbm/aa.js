! function() {
    var t, c, n, r, s, a, o, p = /(http)?(s)?(:)?\/\/(cdn|js|q).(adrta|rta247).com\/(s\/[a-zA-Z]*\/)?(aa|ap|aanf|at|ca|p|r).js(\?|#).*/,
        f = document,
        d = window,
        _ = Math,
        h = "[CACHEBUSTER]",
        l = "__adrta_cb__",
        u = l + "s",
        E = d[u] || {
            c: [],
            f: 0
        };

    function b(t, c) {
        return (e = f.createElement("script")).src = t, e.async = c, e.type = "text/javascript", e
    }
    if (t = f.currentScript) c = t.src;
    else
        for (i = (scripts = f.scripts).length; 0 < i;) t = p.test(c = (script = scripts[--i]).src) && (i = 0, script);
    "https:" != (r = d.location.protocol) && (r = "http:"), s = r + "//cdn.adrta.com/r.js?rcb=" + Date.now() + "_" + _.floor(999999 * _.random()) + "&cb=" + h, a = b(s += (n = c.indexOf("#")) + 1 ? c.substring(n) : ""), t.parentNode.insertBefore(a, t), d[u] = E, d[l] = function(t) {
        if ("function" == typeof t)
            for (E.f = t; E.c.length;) t(E.c.pop());
        else {
            var c = t.split("&");
            E.f ? E.f(c) : (o = b(r + "//pix.adrta.com/cdnf.js?v=" + c[5]), f.head.appendChild(o), E.cdn = o, E.c.push(c))
        }
    }
}();