//tealium universal tag - utag.123 ut4.0.201902230003, Copyright 2019 Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader) {
        var u = {};
        utag.o[loader].sender[id] = u;
        if (utag === undefined) {
            utag = {};
        }
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        if (utag.ut.loader === undefined) {
            u.loader = function(o) {
                var a, b, c, l;
                a = document;
                if (o.type === "iframe") {
                    b = a.createElement("iframe");
                    b.setAttribute("height", "1");
                    b.setAttribute("width", "1");
                    b.setAttribute("style", "display:none");
                    b.setAttribute("src", o.src);
                } else if (o.type === "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                    b.src = o.src;
                    return;
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                    b.src = o.src;
                }
                if (o.id) {
                    b.id = o.id;
                }
                if (typeof o.cb === "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb();
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState === "complete" || this.readyState === "loaded") {
                                this.onreadystatechange = null;
                                o.cb();
                            }
                        };
                    }
                }
                l = o.loc || "head";
                c = a.getElementsByTagName(l)[0];
                if (c) {
                    utag.DB("Attach to " + l + ": " + o.src);
                    if (l === "script") {
                        c.parentNode.insertBefore(b, c);
                    } else {
                        c.appendChild(b);
                    }
                }
            };
        } else {
            u.loader = utag.ut.loader;
        }
        u.ev = {
            'view': 1
        };
        u.initialized = false;
        u.map = {};
        u.extend = [];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                var c, d, e, f, i;
                u.data = {};
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.data[e[f]] = b[d];
                        }
                    }
                }
                window.Krux || ((Krux = function() {
                    Krux.q.push(arguments)
                }).q = []);
                (function(a, b, c, d) {
                    a = '//cdn.krxd.net/controltag/tpxf4nq03.js';
                    b = document;
                    c = 'script';
                    d = b.createElement(c);
                    d.src = a;
                    d.setAttribute('class', 'kxct');
                    d.setAttribute('data-id', 'tpxf4nq03');
                    d.setAttribute('data-timing', 'async');
                    d.setAttribute('data-version', '3.0');
                    d.type = 'text/java' + c;
                    d.async = true;
                    a = b.getElementsByTagName(c)[0];
                    a.parentNode.insertBefore(d, a);
                })();
            }
        };
        utag.o[loader].loader.LOAD(id);
    })("123", "dropbox.main");
} catch (error) {
    utag.DB(error);
}