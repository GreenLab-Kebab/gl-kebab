//tealium universal tag - utag.30 ut4.0.201905171811, Copyright 2019 Tealium.com Inc. All Rights Reserved.
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
        u.ev = {
            "view": 1,
            "link": 1
        };
        u.hasgtagjs = function() {
            window.gtagRename = window.gtagRename || "" || "gtag";
            if (utag.ut.gtagScriptRequested) {
                return true;
            }
            var i, s = document.getElementsByTagName("script");
            for (i = 0; i < s.length; i++) {
                if (s[i].src && s[i].src.indexOf("gtag/js") >= 0) {
                    return true;
                }
            }
            window.dataLayer = window.dataLayer || [];
            if (typeof window[window.gtagRename] !== "function") {
                window[window.gtagRename] = function() {
                    dataLayer.push(arguments);
                };
                window[window.gtagRename]("js", new Date());
            }
            return false;
        };
        u.scriptrequested = u.hasgtagjs();
        u.o = window[window.gtagRename];
        u.map_func = function(arr, obj, item) {
            var i = arr.shift();
            obj[i] = obj[i] || {};
            if (arr.length > 0) {
                u.map_func(arr, obj[i], item);
            } else {
                obj[i] = item;
            }
        };
        u.isEmptyObject = function(o, a) {
            for (a in o) {
                if (utag.ut.hasOwn(o, a)) return false;
            }
            return true;
        };
        u.toBoolean = function(val) {
            val = val || "";
            return val === true || val.toLowerCase() === "true" || val.toLowerCase() === "on";
        };
        u.setGlobalProperties = function(data, reset, custom_property) {
            var map = {
                    "user_id": {
                        "name": "user_id",
                        "type": "exists",
                        "reset": true
                    },
                    "page_path": {
                        "name": "page_path",
                        "type": "exists",
                        "reset": true
                    },
                    "page_title": {
                        "name": "page_title",
                        "type": "exists",
                        "reset": true
                    },
                    "page_location": {
                        "name": "page_location",
                        "type": "exists",
                        "reset": false
                    }
                },
                prop, g = {};
            if (custom_property && reset) {
                g[custom_property] = "";
            }
            for (prop in utag.loader.GV(map)) {
                if (reset && map[prop].reset) {
                    g[map[prop].name] = "";
                } else {
                    if (map[prop].type === "bool") {
                        if (data[prop] == true || data[prop] === "true") {
                            g[map[prop].name] = true;
                        }
                    } else if (map[prop].type === "exists") {
                        if (data[prop]) {
                            g[map[prop].name] = data[prop];
                        }
                    }
                }
            }
            if (!u.isEmptyObject(g)) {
                u.o("set", g);
            }
        };
        u.item = function(imp, len) {
            var g = {},
                i, j, items = [];
            if (imp === true) {
                len = len || u.data.impression_id.length || u.data.impression_name.length;
                for (i = 0; i < len; i++) {
                    g = {};
                    g.id = (u.data.impression_id[i] ? u.data.impression_id[i] : "");
                    g.name = (u.data.impression_name[i] ? u.data.impression_name[i] : "");
                    g.brand = (u.data.impression_brand[i] ? u.data.impression_brand[i] : "");
                    g.variant = (u.data.impression_variant[i] ? u.data.impression_variant[i] : "");
                    g.category = (u.data.impression_category[i] ? u.data.impression_category[i] : "");
                    g.price = (u.data.impression_price[i] ? u.data.impression_price[i] : "");
                    g.list_name = (u.data.impression_list_name ? u.data.impression_list_name : "");
                    g.list_position = (u.data.impression_list_position[i] ? u.data.impression_list_position[i] : "");
                    items.push(g);
                }
            } else {
                len = len || u.data.product_id.length || u.data.product_name.length;
                for (i = 0; i < len; i++) {
                    g = {};
                    if (u.data.autofill_params === "true") {
                        for (j = 0; j < u.data.product_id.length; j++) {
                            u.data.product_name[j] = u.data.product_name[j] || u.data.product_id[j];
                            u.data.product_unit_price[j] = u.data.product_unit_price[j] || "1.00";
                            u.data.product_quantity[j] = u.data.product_quantity[j] || "1";
                        }
                    }
                    g.id = u.data.product_id[i];
                    g.name = (u.data.product_name[i] ? u.data.product_name[i] : "");
                    g.brand = (u.data.product_brand[i] ? u.data.product_brand[i] : "");
                    g.category = (u.data.product_category[i] ? u.data.product_category[i] : "");
                    g.coupon = (u.data.product_promo_code[i] ? u.data.product_promo_code[i] : "");
                    g.price = (u.data.product_unit_price[i] ? u.data.product_unit_price[i] : "");
                    g.quantity = (u.data.product_quantity[i] ? u.data.product_quantity[i] : "");
                    g.variant = (u.data.product_variant[i] ? u.data.product_variant[i] : "");
                    g.list_position = (u.data.product_list_position[i] ? u.data.product_list_position[i] : "");
                    g.list_name = (u.data.product_list_name ? u.data.product_list_name : "");
                    items.push(g);
                }
            }
            return items;
        };
        u.promotion = function(len) {
            var f, g, promo = [];
            len = len || u.data.promo_id.length;
            for (f = 0; f < len; f++) {
                g = {};
                g.id = u.data.promo_id[f];
                g.name = (u.data.promo_name[f] ? u.data.promo_name[f] : u.data.promo_id[f]);
                g.creative_name = (u.data.promo_creative_name[f] ? u.data.promo_creative_name[f] : "");
                g.creative_slot = (u.data.promo_creative_slot[f] ? u.data.promo_creative_slot[f] : "");
                promo.push(g);
            }
            return promo;
        };
        u.event_map = {
            "add_to_cart": [{
                "name": "value"
            }, {
                "name": "currency"
            }, {
                "name": "items"
            }],
            "add_to_wishlist": [{
                "name": "value"
            }, {
                "name": "currency"
            }, {
                "name": "items"
            }],
            "begin_checkout": [{
                "name": "value"
            }, {
                "name": "currency"
            }, {
                "name": "items"
            }, {
                "name": "coupon"
            }],
            "checkout_progress": [{
                "name": "value"
            }, {
                "name": "currency"
            }, {
                "name": "items"
            }, {
                "name": "coupon"
            }],
            "exception": [{
                "name": "description"
            }, {
                "name": "fatal"
            }],
            "generate_lead": [{
                "name": "value"
            }, {
                "name": "currency"
            }, {
                "name": "transaction_id"
            }],
            "login": [{
                "name": "method"
            }],
            "purchase": [{
                "name": "transaction_id",
                "required": true
            }, {
                "name": "value"
            }, {
                "name": "currency"
            }, {
                "name": "tax"
            }, {
                "name": "shipping"
            }, {
                "name": "affiliation"
            }, {
                "name": "coupon"
            }, {
                "name": "items"
            }],
            "refund": [{
                "name": "transaction_id",
                "required": true
            }, {
                "name": "value"
            }, {
                "name": "currency"
            }, {
                "name": "tax"
            }, {
                "name": "shipping"
            }, {
                "name": "affiliation"
            }, {
                "name": "coupon"
            }, {
                "name": "items"
            }],
            "remove_from_cart": [{
                "name": "value"
            }, {
                "name": "currency"
            }, {
                "name": "items"
            }],
            "screen_view": [{
                "name": "screen_name"
            }],
            "search": [{
                "name": "search_term"
            }],
            "select_content": [{
                "name": "content_type"
            }, {
                "name": "items"
            }, {
                "name": "promotions"
            }],
            "set_checkout_option": [{
                "name": "checkout_step"
            }, {
                "name": "checkout_option"
            }],
            "share": [{
                "name": "method"
            }, {
                "name": "content_type"
            }, {
                "name": "content_id"
            }],
            "sign_up": [{
                "name": "method"
            }],
            "timing_complete": [{
                "name": "name",
                "required": true
            }, {
                "name": "value",
                "required": true
            }, {
                "name": "event_category"
            }, {
                "name": "event_label"
            }],
            "view_item": [{
                "name": "items"
            }],
            "view_item_list": [{
                "name": "items"
            }],
            "view_promotion": [{
                "name": "promotions"
            }],
            "view_search_results": [{
                "name": "search_term"
            }]
        };
        u.std_params = {
            "transaction_id": function() {
                return u.data.order_id;
            },
            "affiliation": function() {
                return u.data.order_store;
            },
            "value": function(event) {
                if (event === "timing_complete") {
                    return u.data.event.value;
                }
                return u.data.order_total;
            },
            "currency": function() {
                return u.data.order_currency;
            },
            "tax": function() {
                return u.data.order_tax;
            },
            "shipping": function() {
                return u.data.order_shipping;
            },
            "coupon": function() {
                return u.data.order_coupon_code;
            },
            "description": function() {
                return u.data.event.description;
            },
            "fatal": function() {
                return u.toBoolean(u.data.event.fatal);
            },
            "screen_name": function() {
                return u.data.event.screen_name;
            },
            "method": function() {
                return u.data.event.method;
            },
            "search_term": function() {
                return u.data.event.search_term;
            },
            "content_type": function() {
                return u.data.event.content_type;
            },
            "content_id": function() {
                return u.data.event.content_id;
            },
            "promotions": function(event) {
                if (event === "select_content" && u.data.event.content_type !== "product") {
                    return u.promotion(1);
                } else if (event !== "select_content") {
                    return u.promotion();
                }
            },
            "name": function() {
                return u.data.event.name;
            },
            "event_category": function() {
                return u.data.event.event_category;
            },
            "event_label": function() {
                return u.data.event.event_label;
            },
            "checkout_step": function() {
                return u.data.checkout_step;
            },
            "checkout_option": function() {
                return u.data.checkout_option;
            },
            "items": function(event) {
                if (event === "view_item" || event === "add_to_cart" || event === "remove_from_cart") {
                    return u.item(false, 1);
                }
                if (event === "view_item_list") {
                    return u.item(true);
                }
                if (event === "select_content" && u.data.event.content_type) {
                    return u.item(false, 1);
                }
                return u.item();
            }
        };
        u.map = {
            "ga_tracking_id": "tracking_id",
            "ga_eventaction": "event_name",
            "ga_eventCategory": "event.event_category",
            "ga_eventLabel": "event.event_label",
            "ga_eventValue": "event.value"
        };
        u.extend = [function(a, b) {
            try {
                if (b['tealium_environment'] != 'prod') {
                    b['ga_tracking_id'] = 'UA-279179-30'
                }
            } catch (e) {
                utag.DB(e)
            }
        }];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                utag.DB("send:30");
                utag.DB(b);
                var d, e, f, h, i, cdm, cdm_event_flag, event_param, prop;
                u.data = {
                    "qsp_delim": "&",
                    "kvp_delim": "=",
                    "base_url": "https://www.googletagmanager.com/gtag/js?id=##utag_tracking_id##",
                    "tracking_id": "UA-279179-2",
                    "cross_track": "false",
                    "cross_track_domains": "",
                    "allow_display_features": "false",
                    "screen_view": "false",
                    "anonymize_ip": "false",
                    "clear_global_vars": "false",
                    "optimize_id": "",
                    "checkout_step": "",
                    "checkout_option": "",
                    "product_action_list": "",
                    "product_list_position": "",
                    "product_variant": [],
                    "impression_id": [],
                    "impression_name": [],
                    "impression_price": [],
                    "impression_category": [],
                    "impression_brand": [],
                    "impression_variant": [],
                    "impression_list_name": [],
                    "impression_list_position": [],
                    "promo_id": [],
                    "promo_name": [],
                    "promo_creative_name": [],
                    "promo_creative_slot": [],
                    "product_id": [],
                    "product_name": [],
                    "product_sku": [],
                    "product_brand": [],
                    "product_category": [],
                    "product_subcategory": [],
                    "product_quantity": [],
                    "product_unit_price": [],
                    "product_discount": [],
                    "product_promo_code": [],
                    "set": {},
                    "config": {
                        "custom_map": {}
                    },
                    "event": {},
                    "items": []
                };
                for (c = 0; c < u.extend.length; c++) {
                    try {
                        d = u.extend[c](a, b);
                        if (d == false) return
                    } catch (e) {}
                };
                utag.DB("send:30:EXTENSIONS");
                utag.DB(b);
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
                                u.data.event_name = u.map[d];
                            }
                        }
                    }
                }
                utag.DB("send:30:MAPPINGS");
                utag.DB(u.data);
                u.data.order_id = u.data.order_id || b._corder || "";
                u.data.order_total = u.data.order_total || b._ctotal || "";
                u.data.order_subtotal = u.data.order_subtotal || b._csubtotal || "";
                u.data.order_shipping = u.data.order_shipping || b._cship || "";
                u.data.order_tax = u.data.order_tax || b._ctax || "";
                u.data.order_store = u.data.order_store || b._cstore || "";
                u.data.order_currency = u.data.order_currency || b._ccurrency || "";
                u.data.order_coupon_code = u.data.order_coupon_code || b._cpromo || "";
                u.data.customer_id = u.data.customer_id || b._ccustid || "";
                if (u.data.product_id.length === 0 && b._cprod !== undefined) {
                    u.data.product_id = b._cprod.slice(0);
                }
                if (u.data.product_name.length === 0 && b._cprodname !== undefined) {
                    u.data.product_name = b._cprodname.slice(0);
                }
                if (u.data.product_sku.length === 0 && b._csku !== undefined) {
                    u.data.product_sku = b._csku.slice(0);
                }
                if (u.data.product_brand.length === 0 && b._cbrand !== undefined) {
                    u.data.product_brand = b._cbrand.slice(0);
                }
                if (u.data.product_category.length === 0 && b._ccat !== undefined) {
                    u.data.product_category = b._ccat.slice(0);
                }
                if (u.data.product_subcategory.length === 0 && b._ccat2 !== undefined) {
                    u.data.product_subcategory = b._ccat2.slice(0);
                }
                if (u.data.product_quantity.length === 0 && b._cquan !== undefined) {
                    u.data.product_quantity = b._cquan.slice(0);
                }
                if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) {
                    u.data.product_unit_price = b._cprice.slice(0);
                }
                if (!u.data.tracking_id) {
                    utag.DB(u.id + ": Tag not fired: Required attribute not populated");
                    return;
                }
                u.data.base_url = u.data.base_url.replace("##utag_tracking_id##", u.data.tracking_id);
                if (u.data.customer_id) {
                    u.data.config.user_id = u.data.customer_id;
                }
                if (u.toBoolean(u.data.clear_global_vars)) {
                    u.setGlobalProperties(u.data.config, true);
                    for (prop in utag.loader.GV(u.data.set)) {
                        u.setGlobalProperties(u.data.set, true, prop);
                    }
                }
                u.setGlobalProperties(u.data.config, false);
                u.setGlobalProperties(u.data.set, false);
                if (!u.data.event_name && u.data.order_id) {
                    u.data.event_name = "purchase";
                }
                cdm = [];
                for (d in u.data.cdm) {
                    cdm_event_flag = false;
                    cdm = d.split("-");
                    u.data.config.custom_map[cdm[0]] = cdm[1];
                    if (cdm[2] === "all") {
                        u.data.config[cdm[1]] = u.data.cdm[d];
                    } else if (cdm[2] === "link" && a === "link") {
                        cdm_event_flag = true;
                    } else if (cdm[2] === "ecom" && u.data.event_name && u.data.event_name.match(/add_payment_info|add_to_cart|add_to_wishlist|begin_checkout|checkout_progress|purchase|refund|remove_from_cart|product_click|promotion_click|set_checkout_option|view_item|view_item_list|view_promotion/)) {
                        cdm_event_flag = true;
                    } else if (u.data.event_name === cdm[2]) {
                        cdm_event_flag = true;
                    }
                    if (cdm_event_flag) {
                        u.data.event[cdm[1]] = u.data.cdm[d];
                    }
                }
                if (u.toBoolean(u.data.anonymize_ip) && u.data.config.anonymize_ip === undefined) {
                    u.data.config.anonymize_ip = true;
                }
                if (u.toBoolean(u.data.cross_track) && u.data.config.linker === undefined) {
                    u.data.config.linker = {
                        "accept_incoming": u.toBoolean(u.data.cross_track),
                        "domains": u.data.cross_track_domains
                    };
                }
                if (u.data.allow_display_features === "false" && u.data.config.allow_display_features === undefined) {
                    u.data.config.allow_display_features = false;
                }
                if (u.toBoolean(u.data.enhanced_link_attribution) && !u.data.config.link_attribution) {
                    u.data.config.link_attribution = true;
                }
                if (u.data.optimize_id && u.data.config.optimize_id === undefined) {
                    u.data.config.optimize_id = u.data.optimize_id;
                }
                if (a === "view") {
                    if (u.toBoolean(u.data.screen_view)) {
                        u.data.config.send_page_view = false;
                        u.o("config", u.data.tracking_id, u.data.config);
                        u.o("event", "screen_view", u.data.event);
                    } else {
                        u.o("config", u.data.tracking_id, u.data.config);
                    }
                }
                if (u.data.event_name) {
                    if (u.data.event_name === "product_click" && a === "link") {
                        u.data.event.content_type = "product";
                        u.data.event_name = "select_content";
                    } else if (u.data.event_name === "promotion_click" && a === "link") {
                        u.data.event_name = "select_content";
                    }
                    if (u.data.event.non_interaction) {
                        u.data.event.non_interaction = true;
                    }
                    if (u.event_map[u.data.event_name]) {
                        for (i = 0; i < u.event_map[u.data.event_name].length; i++) {
                            event_param = u.event_map[u.data.event_name][i];
                            u.data.event[event_param.name] = u.std_params[event_param.name](u.data.event_name);
                            if (u.data.event[event_param.name] === undefined && event_param.required) {
                                utag.DB(u.id + ": Event: " + u.data.event_name + ": Required attribute not populated");
                            }
                        }
                    }
                    if (u.data.event_name !== "product_click" && u.data.event_name !== "promotion_click") {
                        u.o("event", u.data.event_name, u.data.event);
                    }
                }
                if (!u.hasgtagjs()) {
                    u.scriptrequested = true;
                    utag.ut.gtagScriptRequested = true;
                    u.loader({
                        "type": "script",
                        "src": u.data.base_url,
                        "cb": null,
                        "loc": "script",
                        "id": "utag_30",
                        "attrs": {}
                    });
                }
                utag.DB("send:30:COMPLETE");
            }
        };
        utag.o[loader].loader.LOAD(id);
    }("30", "dropbox.main"));
} catch (error) {
    utag.DB(error);
}