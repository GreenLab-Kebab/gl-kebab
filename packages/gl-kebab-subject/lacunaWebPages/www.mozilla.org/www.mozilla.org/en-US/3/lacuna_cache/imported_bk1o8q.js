! function() {
  "use strict";
  var e = document.getElementsByTagName("html")[0].getAttribute("data-gtm-container-id");
  "function" == typeof Mozilla.dntEnabled && !Mozilla.dntEnabled() && e && function(e, t, n, a, o, g, m, r, i, l) {
    for (e[a] = e[a] || [], e[a].push({
        "gtm.start": (new Date).getTime(),
        event: "gtm.js"
      }), m = t.getElementsByTagName(n)[0], i = o.length, l = "//www.googletagmanager.com/gtm.js?id=@&l=" + a; i--;)(g = t.createElement(n)).async = !0, g.src = l.replace("@", o[i]), m.parentNode.insertBefore(g, m)
  }(window, document, "script", "dataLayer", [e])
}();