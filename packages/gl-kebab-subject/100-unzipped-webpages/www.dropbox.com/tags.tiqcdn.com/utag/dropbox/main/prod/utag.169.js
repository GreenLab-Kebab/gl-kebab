//tealium universal tag - utag.169 ut4.0.201905232037, Copyright 2019 Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader) {
        var u = {
            "id": id
        };
        utag.o[loader].sender[id] = u;
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
        if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) {
            u.loader = function(o, a, b, c, l, m) {
                utag.DB(o);
                a = document;
                if (o.type == "iframe") {
                    m = a.getElementById(o.id);
                    if (m && m.tagName == "IFRAME") {
                        b = m;
                    } else {
                        b = a.createElement("iframe");
                    }
                    o.attrs = o.attrs || {};
                    utag.ut.merge(o.attrs, {
                        "height": "1",
                        "width": "1",
                        "style": "display:none"
                    }, 0);
                } else if (o.type == "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                }
                if (o.id) {
                    b.id = o.id;
                }
                for (l in utag.loader.GV(o.attrs)) {
                    b.setAttribute(l, o.attrs[l]);
                }
                b.setAttribute("src", o.src);
                if (typeof o.cb == "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb();
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == "complete" || this.readyState == "loaded") {
                                this.onreadystatechange = null;
                                o.cb();
                            }
                        };
                    }
                }
                if (o.type != "img" && !m) {
                    l = o.loc || "head";
                    c = a.getElementsByTagName(l)[0];
                    if (c) {
                        utag.DB("Attach to " + l + ": " + o.src);
                        if (l == "script") {
                            c.parentNode.insertBefore(b, c);
                        } else {
                            c.appendChild(b);
                        }
                    }
                }
            };
        } else {
            u.loader = utag.ut.loader;
        }
        if (utag.ut.typeOf === undefined) {
            u.typeOf = function(e) {
                return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            };
        } else {
            u.typeOf = utag.ut.typeOf;
        }
        if (utag.ut.merge === undefined) {
            u.merge = function(a, b, c, d) {
                if (c) {
                    for (d in utag.loader.GV(b)) {
                        a[d] = b[d];
                    }
                } else {
                    for (d in utag.loader.GV(b)) {
                        if (typeof a[d] == "undefined") {
                            a[d] = b[d];
                        }
                    }
                }
            };
        } else {
            u.merge = utag.ut.merge;
        }
        u.ev = {
            "view": 1,
            "link": 1
        };
        u.initialized = false;
        u.scriptrequested = false;
        u.queue = [];
        u.event_lookup = {
            "AddPaymentInfo": {
                obj: "payment",
                "map": ["value", "currency", "content_category", "content_ids"]
            },
            "AddToCart": {
                obj: "cart",
                "map": ["value", "currency", "content_name", "content_ids"]
            },
            "AddToWishlist": {
                obj: "wish",
                "map": ["value", "currency", "content_name", "content_ids"]
            },
            "CompleteRegistration": {
                obj: "reg",
                "map": ["value", "currency", "content_name"]
            },
            "Contact": {
                obj: "contact",
                "map": []
            },
            "CustomizeProduct": {
                obj: "customizeproduct",
                "map": []
            },
            "Donate": {
                obj: "donate",
                "map": []
            },
            "FindLocation": {
                obj: "findlocation",
                "map": []
            },
            "InitiateCheckout": {
                obj: "cout",
                "map": ["value", "currency", "content_name", "content_ids", "num_items"]
            },
            "Lead": {
                obj: "lead",
                "map": ["value", "currency", "content_name", "content_category"]
            },
            "PageView": {
                obj: "page",
                "map": []
            },
            "Purchase": {
                obj: "purch",
                "map": ["value", "currency", "content_name", "content_ids", "num_items"]
            },
            "Schedule": {
                obj: "schedule",
                "map": []
            },
            "Search": {
                obj: "search",
                "map": ["value", "currency", "content_category", "content_ids"]
            },
            "StartTrial": {
                obj: "starttrial",
                "map": ["value", "currency"]
            },
            "SubmitApplication": {
                obj: "submitapplication",
                "map": []
            },
            "Subscribe": {
                obj: "subscribe",
                "map": ["value", "currency"]
            },
            "ViewContent": {
                obj: "vc",
                "map": ["value", "currency", "content_name", "content_ids", "content_category"]
            },
            "Custom": {
                obj: "cust",
                "map": []
            },
            "Conversion": {
                obj: "cnv",
                "map": ["value", "currency"]
            }
        };
        u.std_params = {
            "value": function(g, event) {
                if (g.value === undefined || g.value === "") {
                    if (event === "ViewContent" || event === "AddToCart") {
                        g.value = u.data.ecom.product_unit_price;
                    } else {
                        g.value = u.data.ecom.order_subtotal;
                    }
                }
                g.value = u.val(g.value);
            },
            "currency": function(g) {
                if (!g.currency) {
                    g.currency = u.data.ecom.order_currency;
                }
            },
            "content_name": function(g) {
                if (!g.content_name) {
                    g.content_name = u.data.ecom.product_name;
                }
                if (u.typeOf(g.content_name) !== "array") {
                    g.content_name = g.content_name.split(/\s*,\s*/);
                }
            },
            "content_ids": function(g) {
                if (!g.content_ids) {
                    g.content_ids = u.data.ecom.product_id;
                }
                if (u.typeOf(g.content_ids) !== "array") {
                    g.content_ids = g.content_ids.split(/\s*,\s*/);
                }
            },
            "content_category": function(g) {
                if (!g.content_category) {
                    g.content_category = u.data.ecom.product_category;
                }
                g.content_category = u.val(g.content_category);
            },
            "num_items": function(g) {
                if (!g.num_items && u.data.calc_items === "true") {
                    g.num_items = u.calc_items(u.data.ecom.product_quantity);
                }
            }
        };
        u.map_func = function(arr, obj, item) {
            var i = arr.shift();
            obj[i] = obj[i] || {};
            if (arr.length > 0) {
                u.map_func(arr, obj[i], item);
            } else {
                obj[i] = item;
            }
        };
        u.val = function(value) {
            return u.typeOf(value) === "array" ? value[0] : value;
        };
        u.remove_empty = function(a) {
            var b, t;
            for (b in utag.loader.GV(a)) {
                t = u.typeOf(a[b]);
                if (t === "object") {
                    u.remove_empty(a[b]);
                    if (u.isEmptyObject(a[b])) {
                        try {
                            delete a[b];
                        } catch (e) {
                            a[b] = undefined;
                        }
                    }
                } else if (!((a[b] === 0 || a[b] === false) ? !0 : (t === "array" && a[b].length === 0) ? !1 : !!a[b])) {
                    try {
                        delete a[b];
                    } catch (e) {
                        a[b] = undefined;
                    }
                }
            }
            return a;
        };
        u.calc_items = function(quan) {
            var q, i = 0;
            for (q = 0; q < quan.length; q++) {
                i += parseInt(quan[q]);
            }
            return i;
        };
        u.hasOwn = function(o, a) {
            return o != null && Object.prototype.hasOwnProperty.call(o, a);
        };
        u.isEmptyObject = function(o, a) {
            for (a in o) {
                if (u.hasOwn(o, a)) {
                    return false;
                }
            }
            return true;
        };
        u.process_AM_data = function(_data) {
            var am_data = {},
                item, val;
            for (item in utag.loader.GV(_data)) {
                val = _data[item];
                if (item === "ph" || item === "ge" || item === "db" || item === "zp") {
                    val = val.replace(/\s/g, "").toLowerCase();
                }
                if (item === "ph") {
                    val = val.replace(/[^\d]/g, "");
                } else if (item === "ge") {
                    if (val !== "m" && val !== "f") {
                        utag.DB("[" + u.id + "] ge in wrong format. Removed from init call");
                        continue;
                    }
                } else if (item === "db") {
                    if (val.length !== 8) {
                        utag.DB("[" + u.id + "] db is not the correct length. Please check format. Removed from init call");
                        continue;
                    }
                } else if (item === "zp") {
                    val = val.replace(/[^\d]/g, "");
                    if (val.length > 5) {
                        utag.DB("[" + u.id + "] zp is too long. Removed from init call");
                        continue;
                    }
                }
                am_data[item] = val;
            }
            return u.isEmptyObject(am_data) ? undefined : am_data;
        };
        u.map = {
            "fb_event:CompleteRegistration": "CompleteRegistration",
            "fb_event:ViewContent": "ViewContent",
            "fb_event:AddToCart": "AddToCart",
            "page_type:CompleteRegistration": "CompleteRegistration",
            "page_type:ViewContent": "ViewContent",
            "page_type:AddToCart": "AddToCart",
            "fb_value": "vc.value,reg.value",
            "tealium_event:addBillingSuccess": "AddPaymentInfo"
        };
        u.extend = [function(a, b) {
            try {
                if (/\/verify$/i.test(b['dom.pathname']) || /^\/third_party_signup/i.test(b['dom.pathname'])) {
                    b['fb_event'] = 'ViewContent';
                    b['fb_value'] = '1'
                }
            } catch (e) {
                utag.DB(e)
            }
        }];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                utag.DB("send:169");
                utag.DB(b);
                var c, d, e, f, g, h, i, amObj, evt = [];
                u.data = {
                    "qsp_delim": "&",
                    "kvp_delim": "=",
                    "base_url": "https://connect.facebook.net/en_US/fbevents.js",
                    "cust_pixel": "505351543331318",
                    "conv_pixel": "",
                    "page_view": "true",
                    "calc_items": "true",
                    "default_event": "None",
                    "adv_match": "false",
                    "track_single": "true",
                    "disablePushState": "",
                    "custom_data": {},
                    "custom_event": "",
                    "product_id": [],
                    "product_name": [],
                    "product_category": [],
                    "product_unit_price": [],
                    "product_quantity": [],
                    "evt_list": [],
                    "ecom": {}
                };
                for (c = 0; c < u.extend.length; c++) {
                    try {
                        d = u.extend[c](a, b);
                        if (d == false) return
                    } catch (e) {}
                };
                utag.DB("send:169:EXTENSIONS");
                utag.DB(b);
                c = [];
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.map_func(e[f].split("."), u.data, b[d]);
                        }
                    } else {
                        h = d.split(":");
                        if (h.length === 2 && b[h[0]] === h[1]) {
                            if (u.map[d]) {
                                evt = evt.concat(u.map[d].split(","));
                            }
                        }
                    }
                }
                if (u.data.evt_list && u.typeOf(u.data.evt_list) !== "array") {
                    u.data.evt_list = u.data.evt_list.split(/\s*,\s*/);
                }
                if (u.data.default_event !== "None" && u.data.default_event !== "") {
                    u.data.evt_list.push(u.data.default_event);
                }
                u.data.evt_list = u.data.evt_list.concat(evt);
                g = u.data.ecom;
                g.order_id = u.data.order_id || b._corder || "";
                g.order_subtotal = u.data.order_subtotal || b._csubtotal || "";
                g.order_currency = u.data.order_currency || b._ccurrency || "";
                if (u.data.product_name.length === 0 && b._cprodname !== undefined) {
                    g.product_name = b._cprodname.slice(0);
                } else {
                    g.product_name = u.data.product_name;
                }
                if (u.data.product_id.length === 0 && b._cprod !== undefined) {
                    g.product_id = b._cprod.slice(0);
                } else {
                    g.product_id = u.data.product_id;
                }
                if (u.data.product_category.length === 0 && b._ccat !== undefined) {
                    g.product_category = b._ccat.slice(0);
                } else {
                    g.product_category = u.data.product_category;
                }
                if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) {
                    g.product_unit_price = b._cprice.slice(0);
                } else {
                    g.product_unit_price = u.data.product_unit_price;
                }
                if (u.data.product_quantity.length === 0 && b._cquan !== undefined) {
                    g.product_quantity = b._cquan.slice(0);
                } else {
                    g.product_quantity = u.data.product_quantity;
                }
                u.loader_cb = function() {
                    utag.DB("send:169:CALLBACK");
                    var g = {},
                        i, j, k, _event, _track = "track",
                        p, cb_amObj;
                    if (u.typeOf(u.data.cust_pixel) !== "array") {
                        u.data.cust_pixel = u.data.cust_pixel.split(/\s*,\s*/);
                    }
                    if (a === "view" && (u.data.adv_match === true || u.data.adv_match === "true")) {
                        cb_amObj = u.process_AM_data(u.remove_empty(u.data.am));
                        for (k = 0; k < u.data.cust_pixel.length; k++) {
                            fbq("init", u.data.cust_pixel[k], cb_amObj);
                        }
                    }
                    if (u.data.track_single === true || u.data.track_single === "true") {
                        _track += "Single";
                    }
                    if (u.data.evt_list.toString().indexOf("Purchase") === -1 && u.data.ecom.order_id) {
                        u.data.evt_list.push("Purchase");
                    }
                    if (u.data.ecom.order_id) {
                        for (i = 0; i < u.data.evt_list.length; i++) {
                            if (u.data.evt_list[i] === "Purchase") {
                                p = true;
                            }
                        }
                        if (!p) {
                            u.data.evt_list.push("Purchase");
                        }
                    }
                    for (i = 0; i < u.data.evt_list.length; i++) {
                        _event = u.data.evt_list[i];
                        f = u.event_lookup[_event];
                        c = f ? f.map : [];
                        f = f ? f.obj : _event;
                        g = u.data[f] = u.data[f] || {};
                        for (j = 0; j < c.length; j++) {
                            u.std_params[c[j]](g, _event);
                        }
                        if (_event === "Search") {
                            if (!g.content_category) {
                                g.content_category = "Product Search";
                            }
                        } else if (_event === "Conversion" && u.data.conv_pixel) {
                            _event = u.data.conv_pixel;
                        } else if (_event && !u.event_lookup[_event]) {
                            _track += "Custom";
                            g = u.data[_event];
                        }
                        if (g.value !== undefined) {
                            if (u.typeOf(g.value) === "array") {
                                for (j = 0; j < g.value.length; j++) {
                                    g.value[j] = parseFloat(g.value[j]) || 0.00;
                                }
                            } else {
                                g.value = parseFloat(g.value) || 0.00;
                            }
                        }
                        if (_event) {
                            if (u.data.track_single === true || u.data.track_single === "true") {
                                for (k = 0; k < u.data.cust_pixel.length; k++) {
                                    fbq(_track, u.data.cust_pixel[k], _event, u.remove_empty(g));
                                }
                            } else {
                                fbq(_track, _event, u.remove_empty(g));
                            }
                        }
                    }
                    utag.DB("send:169:CALLBACK:COMPLETE");
                };
                u.callBack = function() {
                    var data = {};
                    u.initialized = true;
                    while (data = u.queue.shift()) {
                        u.data = data.data;
                        u.loader_cb();
                    }
                };
                if (u.initialized) {
                    u.loader_cb();
                } else if (!u.initialized && window.fbq) {
                    u.initialized = true;
                    if (u.data.cust_pixel) {
                        u.data.cust_pixel = u.data.cust_pixel.split(/\s*,\s*/);
                        for (i = 0; i < u.data.cust_pixel.length; i++) {
                            u.data.cust_pixel[i] = u.data.cust_pixel[i].replace(/^\s*/, "").replace(/\s*$/, "");
                            if (u.data.adv_match === true || u.data.adv_match === "true") {
                                amObj = u.process_AM_data(u.remove_empty(u.data.am));
                            }
                            if (u.data.disablePushState === true || u.data.disablePushState === "true") {
                                fbq.disablePushState = true;
                            }
                            fbq("init", u.data.cust_pixel[i], amObj);
                        }
                        if (u.data.page_view === "true") {
                            fbq("track", "PageView", u.data.page);
                        }
                    }
                    u.loader_cb();
                } else {
                    u.queue.push({
                        "data": u.data
                    });
                    if (!u.scriptrequested) {
                        u.scriptrequested = true;
                        u.loader_config = {
                            "type": "script",
                            "src": u.data.base_url,
                            "cb": u.callBack,
                            "loc": "script",
                            "id": "utag_169"
                        };
                        ! function(f, b, self, config, e) {
                            if (f.fbq) return;
                            self.loader(config);
                            e = f.fbq = function() {
                                e.callMethod ? e.callMethod.apply(e, arguments) : e.queue.push(arguments);
                            };
                            if (!f._fbq) f._fbq = e;
                            e.push = e;
                            e.loaded = !0;
                            e.version = "2.0";
                            e.queue = [];
                            e.agent = "tmtealium";
                        }(window, document, this, u.loader_config);
                        if (u.data.disablePushState === true || u.data.disablePushState === "true") {
                            fbq.disablePushState = true;
                        }
                        if (u.data.cust_pixel) {
                            u.data.cust_pixel = u.data.cust_pixel.split(/\s*,\s*/);
                            for (i = 0; i < u.data.cust_pixel.length; i++) {
                                u.data.cust_pixel[i] = u.data.cust_pixel[i].replace(/^\s*/, "").replace(/\s*$/, "");
                                if (u.data.adv_match === true || u.data.adv_match === "true") {
                                    amObj = u.process_AM_data(u.remove_empty(u.data.am));
                                }
                                fbq("init", u.data.cust_pixel[i], amObj);
                            }
                            if (u.data.page_view === "true") {
                                fbq("track", "PageView", u.data.page);
                            }
                        }
                    }
                }
                utag.DB("send:169:COMPLETE");
            }
        };
        utag.o[loader].loader.LOAD(id);
    }("169", "dropbox.main"));
} catch (error) {
    utag.DB(error);
}