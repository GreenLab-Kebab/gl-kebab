//tealium universal tag - utag.1462 ut4.0.201907291519, Copyright 2019 Tealium.com Inc. All Rights Reserved.
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
                u.data = {
                    "base_url": "//insight.adsrvr.org/track/conv/?",
                    "conv_static_params": "adv=si8op5m&ct=0:7o77vxb&fmt=3",
                    "ret_static_params": "adv=si8op5m&ct=0:eql5syl&fmt=3"
                };
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.data[e[f]] = b[d];
                        }
                    }
                }
                u.loader({
                    "type": "img",
                    "src": u.data.base_url + u.data.ret_static_params
                });
                if (b.conversion_event === 'true') {
                    var dynamic_params = ['v=' + b.order_total_usd, 'vf=USD', 'orderid=' + b.order_id, 'td1=' + b.package_category, 'td2=' + b.oc_customer_type, 'td3=' + b['cp.market']];
                    u.loader({
                        "type": "img",
                        "src": u.data.base_url + u.data.conv_static_params + '&' + dynamic_params.join('&')
                    });
                }
            }
        };
        utag.o[loader].loader.LOAD(id);
    })("1462", "godaddy.godaddy");
} catch (error) {
    utag.DB(error);
}