if (self.CavalryLogger) {
    CavalryLogger.start_js(["3ChAt"]);
}

__d("CookieConsentBlacklistedHrefs", [], (function(a, b, c, d, e, f) {
    e.exports = {
        hrefs: ["/about/basics", "/privacy/explanation", "/ads/settings", "/help/111814505650678", "/help/1561485474074139", "/help/568137493302217", "/help/769828729705201", "/help/cookies", "/policies/cookies", "/policy/cookies"]
    }
}), null);
__d("XConsentCookieController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/cookie/consent/", {})
}), null);
__d("DeferredCookie", ["requireCond", "Cookie", "CookieConsent", "cr:1109759", "SubscriptionList", "cr:1083116", "XConsentCookieController", "cr:1069930", "promiseDone", "cr:1083117"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g, h = new Map();
    a = {
        shouldAddDefaultListener: !0,
        defaultHandler: null,
        sentConsentToServer: !1,
        callbacks: new(b("SubscriptionList"))(),
        addToQueue: function(a, c, d, e, f, i, j) {
            if (!(g || (g = b("CookieConsent"))).isDeferCookies()) {
                f ? b("Cookie").setWithoutChecksIfFirstPartyContext(a, c, d, e, j) : b("Cookie").setWithoutChecks(a, c, d, e, j);
                return
            }
            if (h.has(a)) return;
            h.set(a, {
                name: a,
                value: c,
                nMilliSecs: d,
                path: e,
                firstPartyOnly: f,
                secure: j
            });
            i && this.addDefaultInteractionListener()
        },
        flushAllCookiesWithoutRequestingConsentSeePrivacyXFNBeforeUsing: function() {
            h.forEach(function(a, c) {
                a.firstPartyOnly ? b("Cookie").setWithoutChecksIfFirstPartyContext(a.name, a.value, a.nMilliSecs, a.path, a.secure) : b("Cookie").setWithoutChecks(a.name, a.value, a.nMilliSecs, a.path, a.secure)
            }), (g || (g = b("CookieConsent"))).setConsented(), this.callbacks.fireCallbacks(), h = new Map(), this.removeDefaultInteractionListener()
        },
        flushAllCookies: function() {
            this.flushAllCookiesWithoutRequestingConsentSeePrivacyXFNBeforeUsing();
            if (!this.sentConsentToServer) {
                var a = b("XConsentCookieController").getURIBuilder().getURI();
                this.sentConsentToServer = !0;
                b("cr:1069930") != null ? b("promiseDone")(b("cr:1069930")(a.toString(), {
                    data: {},
                    method: "POST"
                }), null, function(a) {
                    b("cr:1083117") && b("cr:1083117")("Cookie consent has not been set successfully: " + a.errorMsg, "comet_infra")
                }) : b("cr:1083116") != null && new(b("cr:1083116"))(a).send()
            }
        },
        removeDefaultInteractionListener: function() {
            this.shouldAddDefaultListener = !1, this.defaultHandler && (window.removeEventListener ? window.removeEventListener("click", this.defaultHandler, !0) : document.detachEvent && document.detachEvent("onclick", this.defaultHandler), this.defaultHandler = null)
        },
        addDefaultInteractionListener: function(a) {
            this.shouldAddDefaultListener && (this.shouldAddDefaultListener = !1, this.defaultHandler = a != null ? a : this.baseInteractionHandler.bind(this), window.addEventListener ? window.addEventListener("click", this.defaultHandler, !0) : document.attachEvent && document.attachEvent("onclick", this.defaultHandler))
        },
        registerCallbackOnCookieFlush: function(a) {
            !(g || (g = b("CookieConsent"))).isDeferCookies() ? a() : this.callbacks.add(a)
        },
        baseInteractionHandler: function(a) {
            var c = a.target;
            if (!(c instanceof HTMLElement)) return;
            if (a instanceof MouseEvent && !this.isValidClick(a)) return;
            b("cr:1109759") != null && !b("cr:1109759").isBlacklisted(c) && this.flushAllCookies()
        },
        isValidClick: function(a) {
            return a.which === void 0 ? !0 : a.which == 1
        },
        canEmbedThirdPartyPixel: function() {
            return (g || (g = b("CookieConsent"))).isCookiesBlocked() || (g || (g = b("CookieConsent"))).isDeferCookies() ? !1 : h.size === 0
        }
    };
    e.exports = a
}), null);
__d("XRefererFrameController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/common/referer_frame.php", {})
}), null);
__d("ControlledReferer", ["Bootloader", "DeferredCookie", "URI", "XRefererFrameController", "isMessengerDotComURI", "isOculusDotComURI", "isWorkplaceDotComURI", "lowerFacebookDomain"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g, h = {
        useFacebookReferer: function(a, c, d) {
            __p && __p();
            if (!b("DeferredCookie").canEmbedThirdPartyPixel()) {
                b("Bootloader").loadModules(["BanzaiODS"], function(a) {
                    a.bumpEntityKey(2966, "defer_cookies", "block_controlled_referer_iframe")
                }, "ControlledReferer");
                return
            }
            var e = !1;

            function f() {
                if (e) return;
                var b = a.contentWindow.location.pathname;
                if (b !== "/intern/common/referer_frame.php" && b !== "/common/referer_frame.php") return;
                e = !0;
                a.contentWindow.document.body.style.margin = 0;
                c()
            }
            var h;
            b("isMessengerDotComURI")((g || (g = b("URI"))).getRequestURI()) ? h = b("XRefererFrameController").getURIBuilder().getURI().toString() : b("isOculusDotComURI")((g || (g = b("URI"))).getRequestURI()) ? h = "/common/referer_frame.php" : !b("lowerFacebookDomain").isValidDocumentDomain() ? h = "/intern/common/referer_frame.php" : h = b("XRefererFrameController").getURIBuilder().getURI().toString();
            d == null && b("isWorkplaceDotComURI")((g || (g = b("URI"))).getRequestURI()) && (d = "workplace");
            d && (h += "?fb_source=" + d);
            a.onload = f;
            a.src = h
        },
        useFacebookRefererHtml: function(a, b, c) {
            h.useFacebookReferer(a, function() {
                a.contentWindow.document.body.innerHTML = b
            }, c)
        }
    };
    e.exports = h
}), null);
__d("TrackingPixel", ["Arbiter", "ControlledReferer", "DeferredCookie", "FBLogger"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        _iframe: void 0,
        loadWithNoReferrer: function(a) {
            __p && __p();
            if (!b("DeferredCookie").canEmbedThirdPartyPixel()) {
                b("FBLogger")("tracking_pixel").mustfix("Attempting to load a TrackingPixel (%s) while cookies are deferred. This is not allowed because tracking pixels sometimes set cookies.", a);
                return
            }
            if (!g._iframe) {
                var c = document.createElement("iframe");
                c.frameborder = 0;
                c.width = c.height = 1;
                c.style.position = "absolute";
                c.style.top = "-10px";
                b("ControlledReferer").useFacebookReferer(c, function() {
                    b("Arbiter").inform("TrackingPixel/iframeIsLoaded", null, "persistent")
                }, null);
                document.body.appendChild(c);
                g._iframe = c
            }
            b("Arbiter").subscribe("TrackingPixel/iframeIsLoaded", function() {
                var b = g._iframe.contentWindow;
                b = new b.Image();
                b.src = a
            })
        }
    };
    e.exports = g
}), null);
__d("HelpLiteFlyoutBootloader", ["regeneratorRuntime", "Deferred", "JSResource"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = !1,
        h = null,
        i = null,
        j = {
            loadFlyout: function() {
                return b("regeneratorRuntime").async(function(a) {
                    while (1) switch (a.prev = a.next) {
                        case 0:
                            j.loadFlyoutWithHelpType(null);
                        case 1:
                        case "end":
                            return a.stop()
                    }
                }, null, this)
            },
            loadFlyoutWithHelpType: function(a) {
                __p && __p();
                var c, d, e, f;
                return b("regeneratorRuntime").async(function(h) {
                    __p && __p();
                    while (1) switch (h.prev = h.next) {
                        case 0:
                            h.next = 2;
                            return b("regeneratorRuntime").awrap(b("JSResource")("HelpLiteFlyout").__setRef("HelpLiteFlyoutBootloader").load());
                        case 2:
                            c = h.sent;
                            if (!g) {
                                h.next = 6;
                                break
                            }
                            c.refreshHelp();
                            return h.abrupt("return");
                        case 6:
                            g = !0;
                            a && j.setHelpType(a);
                            h.next = 10;
                            return b("regeneratorRuntime").awrap(this._getDeferredFlyoutElements().getPromise());
                        case 10:
                            d = h.sent, e = d.flyout, f = d.flyoutRoot, c.registerFlyoutToggler(e, f), c.loadBody();
                        case 15:
                        case "end":
                            return h.stop()
                    }
                }, null, this)
            },
            setHelpType: function(a) {
                i = a
            },
            getHelpType: function() {
                return i
            },
            _getDeferredFlyoutElements: function() {
                h == null && (h = new(b("Deferred"))());
                return h
            },
            registerFlyoutElements: function(a, b) {
                this._getDeferredFlyoutElements().resolve({
                    flyout: a,
                    flyoutRoot: b
                })
            }
        };
    e.exports = j
}), null);
__d("LocaleSwitchingReferrers", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        CALIBRA_GLOBAL_SITE_FOOTER: "calibra-global-site-footer",
        CARRY_LOGOUT_LOGIN: "carry_logout_login",
        COMMUNITY_SITE_TRANSLATION_TOGGLE: "community_site_translation_toggle",
        FB4B_GLOBAL_SITES_DIALOG: "fb4b_global_sites_dialog",
        FB4B_GLOBAL_SITES_FOOTER: "fb4b_global_sites_footer",
        FB4C_GLOBAL_SITE_FOOTER: "fb4c_global_site_footer",
        IGB_GLOBAL_SITES_FOOTER: "igb_global_sites_footer",
        WORKPLACE_MARKETING_FOOTER: "workplace_marketing_footer",
        WORKPLACE_GALAHAD_CHANNEL: "workplace_galahad_channel",
        IG_HC_FOOTER: "ig_hc_footer",
        LOCALE_SWITCH_SCRIPT: "locale_switch_script",
        SPANISH_LOCALE_MIGRATION_SCRIPT: "spanish_locale_migration_script",
        M_TOUCH_LOCALE_SELECTOR: "m_touch_locale_selector",
        M_BASIC_LOCALE_FOOTER: "m_basic_locale_footer",
        MEDIA_PORTAL_V3_DIALOG: "media_portal_v3_dialog",
        MOBILE_ACCOUNT_SETTINGS: "mobile_account_settings",
        MOBILE_CHROME_JP_FOOTER: "mobile_chrome_jp_footer",
        MOBILE_FB4B_GLOBAL_SITES_FOOTER: "mobile_fb4b_global_sites_footer",
        MOBILE_FB4B_GLOBAL_SITES_PAGE_VIEW: "mobile_fb4b_global_sites_page_view",
        MOBILE_HELP_CENTER_SEARCH: "mobile_help_center_search",
        MOBILE_LOCALE_CHANGED_NOTICE: "mobile_locale_changed_notice",
        MOBILE_LOCALE_LINKS: "mobile_locale_links",
        MOBILE_SUGGESTED_LOCALE_SELECTOR: "mobile_suggested_locale_selector",
        MOBILE_SWITCH_LANGUAGE_HEADER: "mobile_switch_language_header",
        SAFETY_CENTER_GLOBAL_SITES_FOOTER: "fbsc_global_sites_footer",
        SITEMAP: "sitemap",
        QP_PROMO: "qp_promo",
        RLX_QP_FORCE_SWITCH: "rlx_qp_force_switch",
        RLX_QP_PROMPT_SWITCH: "rlx_qp_prompt_switch",
        RLX_PROMPTED_SWITCH_FOLLOWUP_NOTICE: "rlx_prompted_switch_followup_notice",
        RLX_QP_MULTI_LANGUAGE: "rlx_qp_multi_language",
        WWW_ACCOUNT_SETTINGS: "www_account_settings",
        WWW_CARD_SELECTOR: "www_card_selector",
        WWW_CARD_SELECTOR_MORE: "www_card_selector_more",
        WWW_DEV_SITE: "www_dev_site",
        WWW_HELP_INLINE_SELECTOR: "www_help_inline_selector",
        WWW_I18N_NUB: "www_i18n_nub",
        WWW_LANGUAGE_PAGE: "www_language_page",
        WWW_LINK_DIALOG_SELECTOR: "www_link_dialog_selector",
        WWW_LIST_SELECTOR: "www_list_selector",
        WWW_LIST_SELECTOR_MORE: "www_list_selector_more",
        WWW_MANDATORY_LOCALE_SELECTION_POST: "www_mandatory_locale_selection_post",
        WWW_TRANS_APP_INCONSISTENT: "www_trans_app_inconsistent",
        FBCOLUMN_FOOTER: "fbcolumn_footer",
        WWW_LOGIN_BLUE_BAR: "www_login_blue_bar_nub",
        UNIT_TEST: "unit_test",
        ACCOUNT_CREATOR: "account_creator",
        AT_WORK_ACCOUNT: "at_work_account_creator",
        ADMIN_TOOL: "admin_tool",
        TRANSLATION_APP_UNINSTALL: "translation_app_uninstall",
        CHECKPOINT: "checkpoint",
        LEGACY_CONTROLLER: "legacy_controller",
        AYMT: "aymt",
        UNKNOWN: "unknown"
    })
}), null);
__d("LoggedOutSwitchingLocaleTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function() {
            b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig", this.$1, b("Banzai").BASIC)
        };
        c.logVital = function() {
            b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig", this.$1, b("Banzai").VITAL)
        };
        c.logImmediately = function() {
            b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig", this.$1, {
                signal: !0
            })
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setIndex = function(a) {
            this.$1.index = a;
            return this
        };
        c.setNewLocale = function(a) {
            this.$1.new_locale = a;
            return this
        };
        c.setOldLocale = function(a) {
            this.$1.old_locale = a;
            return this
        };
        c.setReferrer = function(a) {
            this.$1.referrer = a;
            return this
        };
        c.setTime = function(a) {
            this.$1.time = a;
            return this
        };
        c.setWeight = function(a) {
            this.$1.weight = a;
            return this
        };
        return a
    }();
    c = {
        index: !0,
        new_locale: !0,
        old_locale: !0,
        referrer: !0,
        time: !0,
        weight: !0
    };
    e.exports = a
}), null);
__d("XIntlAccountSetLocaleAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/intl/ajax/save_locale/", {
        loc: {
            type: "String"
        },
        href: {
            type: "String"
        },
        index: {
            type: "Int"
        },
        ref: {
            type: "String"
        },
        ls_ref: {
            type: "Enum",
            defaultValue: "unknown",
            enumType: 1
        },
        should_redirect: {
            type: "Bool",
            defaultValue: !0
        }
    })
}), null);
__d("IntlUtils", ["AsyncRequest", "Cookie", "LocaleSwitchingReferrers", "LoggedOutSwitchingLocaleTypedLogger", "ReloadPage", "XIntlAccountSetLocaleAsyncController", "goURI"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = {
        setXmode: function(a) {
            new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({
                xmode: a
            }).setHandler(function() {
                b("ReloadPage").now()
            }).send()
        },
        encodeSpecialCharsForXController: function(a) {
            return a.replace(new RegExp("\xa0", "g"), "&nbsp;")
        },
        decodeSpecialCharsFromXController: function(a) {
            return a.replace(new RegExp("&nbsp;", "g"), "\xa0")
        },
        setAmode: function(a) {
            new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({
                amode: a,
                app: !1
            }).setHandler(function() {
                b("ReloadPage").now()
            }).send()
        },
        setRmode: function(a) {
            new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({
                rmode: a
            }).setHandler(function() {
                b("ReloadPage").now()
            }).send()
        },
        setLocale: function(a, c, d, e) {
            d || (d = a.options[a.selectedIndex].value);
            e = b("XIntlAccountSetLocaleAsyncController").getURIBuilder().getURI();
            new(b("AsyncRequest"))().setURI(e).setData({
                loc: d,
                ref: c,
                should_redirect: !1
            }).setHandler(function(a) {
                b("ReloadPage").now()
            }).send()
        },
        appendCookieLocaleHistory: function(a) {
            __p && __p();
            var c = "lh",
                d = b("Cookie").get(c),
                e = [],
                f = 5;
            if (d !== null && d !== void 0 && d != "") {
                e = d.split(",");
                e.push(a);
                for (var d = 0; d < e.length - 1; d++) e[d] == e[d + 1] && e.splice(d, 1);
                e.length >= f && e.slice(1, f)
            } else e.push(a);
            b("Cookie").set(c, e.toString())
        },
        setCookieLocale: function(a, c, d, e, f) {
            e === void 0 && (e = b("LocaleSwitchingReferrers").OTHER), f === void 0 && (f = null), b("Cookie").setWithoutCheckingUserConsent_DANGEROUS("locale", a), this.appendCookieLocaleHistory(a), new(b("LoggedOutSwitchingLocaleTypedLogger"))().setNewLocale(a).setOldLocale(c).setIndex(f).setReferrer(e).log(), b("goURI")(d)
        }
    };
    e.exports = a
}), null);
__d("legacy:intl-base", ["IntlUtils"], (function(a, b, c, d, e, f) {
    a.intl_set_xmode = (c = b("IntlUtils")).setXmode;
    a.intl_set_amode = c.setAmode;
    a.intl_set_rmode = c.setRmode;
    a.intl_set_locale = c.setLocale
}), 3);
__d("FBEngagementWhiteopsFraudSensorTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function() {
            b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig", this.$1, b("Banzai").BASIC)
        };
        c.logVital = function() {
            b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig", this.$1, b("Banzai").VITAL)
        };
        c.logImmediately = function() {
            b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig", this.$1, {
                signal: !0
            })
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setInstanceID = function(a) {
            this.$1.instance_id = a;
            return this
        };
        c.setPageID = function(a) {
            this.$1.page_id = a;
            return this
        };
        c.setPostID = function(a) {
            this.$1.post_id = a;
            return this
        };
        c.setTime = function(a) {
            this.$1.time = a;
            return this
        };
        c.setTqBotDetectionProductEnum = function(a) {
            this.$1.tq_bot_detection_product_enum = a;
            return this
        };
        c.setVC = function(a) {
            this.$1.vc = a;
            return this
        };
        c.setWeight = function(a) {
            this.$1.weight = a;
            return this
        };
        return a
    }();
    c = {
        instance_id: !0,
        page_id: !0,
        post_id: !0,
        time: !0,
        tq_bot_detection_product_enum: !0,
        vc: !0,
        weight: !0
    };
    e.exports = a
}), null);
__d("OnVisible", ["Arbiter", "DOM", "Event", "Parent", "Run", "SubscriptionsHandler", "Vector", "ViewportBounds", "coalesce", "killswitch", "queryThenMutateDOM"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [],
        h = 0,
        i = [],
        j, k = null,
        l, m;

    function n() {
        g.forEach(function(a) {
            a.remove()
        }), k && (k.release(), k = null), h = 0, g.length = 0
    }

    function o() {
        __p && __p();
        if (!g.length) {
            n();
            return
        }
        i.length = 0;
        j = b("Vector").getScrollPosition().y;
        l = b("Vector").getViewportDimensions().y;
        m = b("ViewportBounds").getTop();
        var a = g.length;
        for (var c = 0; c < a; ++c) {
            var d = g[c];
            isNaN(d.elementHeight) && i.push(c);
            d.elementHeight = b("Vector").getElementDimensions(d.element).y;
            d.elementPos = b("Vector").getElementPosition(d.element);
            d.hidden = b("Parent").byClass(d.element, "hidden_elem");
            d.scrollArea && (d.scrollAreaHeight = b("Vector").getElementDimensions(d.scrollArea).y, d.scrollAreaY = b("Vector").getElementPosition(d.scrollArea).y)
        }
        h = a
    }

    function p() {
        __p && __p();
        for (var a = Math.min(g.length, h) - 1; a >= 0; --a) {
            var b = g[a];
            if (!b.elementPos || b.removed) {
                g.splice(a, 1);
                continue
            }
            if (b.hidden) continue;
            var c = b.buffer,
                d = !1,
                e = j + l + c,
                f = b.elementPos.y;
            if (e > f) {
                var k = j + m - c,
                    n = f + b.elementHeight;
                d = !b.strict || k < f && e > n;
                if (d && b.scrollArea) {
                    k = b.scrollAreaY + b.scrollAreaHeight + c;
                    d = f >= b.scrollAreaY - c && f < k
                }
            }(b.inverse ? !d : d) && (b.remove(), b.handler(i.indexOf(a) !== -1))
        }
    }

    function q() {
        r();
        if (g.length) return;
        k == null && (k = new(b("SubscriptionsHandler"))(), k.addSubscriptions(b("Event").listen(window, "scroll", r), b("Event").listen(window, "resize", r), b("Arbiter").subscribe("dom-scroll", r)))
    }

    function r() {
        b("queryThenMutateDOM")(o, p, "OnVisible/positionCheck")
    }
    a = function() {
        __p && __p();

        function a(a, c, d, e, f, h) {
            this.element = a, this.handler = c, this.strict = d, this.buffer = b("coalesce")(e, 300), this.inverse = b("coalesce")(f, !1), this.scrollArea = h || null, this.scrollArea && (this.scrollAreaListener = this.$1()), g.length === 0 && (b("killswitch")("ON_VISIBLE_COMPONENT_CLEANUP") ? b("Run").onLeave(n) : b("Run").onCleanupOrLeave(a, n)), q(), g.push(this)
        }
        var c = a.prototype;
        c.remove = function() {
            if (this.removed) return;
            this.removed = !0;
            this.scrollAreaListener && this.scrollAreaListener.remove()
        };
        c.reset = function() {
            this.elementHeight = null, this.removed = !1, this.scrollArea && (this.scrollAreaListener = this.$1()), g.indexOf(this) === -1 && g.push(this), q()
        };
        c.setBuffer = function(a) {
            this.buffer = a, r()
        };
        c.checkBuffer = function() {
            r()
        };
        c.getElement = function() {
            return this.element
        };
        c.$1 = function() {
            return b("Event").listen(b("DOM").find(this.scrollArea, ".uiScrollableAreaWrap"), "scroll", this.checkBuffer)
        };
        return a
    }();
    Object.assign(a, {
        checkBuffer: r
    });
    e.exports = a
}), null);
__d("TidyArbiterMixin", ["Arbiter", "ArbiterMixin", "Run"], (function(a, b, c, d, e, f) {
    a = {};
    Object.assign(a, b("ArbiterMixin"), {
        _getArbiterInstance: function() {
            this._arbiter || (this._arbiter = new(b("Arbiter"))(), b("Run").onLeave(function() {
                delete this._arbiter
            }.bind(this)));
            return this._arbiter
        }
    });
    e.exports = a
}), null);
__d("getEarlyResources", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a() {
        return Array.from(document.querySelectorAll("head script[data-bootloader-hash]"))
    }
    e.exports = a
}), null);
__d("WebDevicePerfInfoLogging", ["Banzai", "JSScheduler", "VisibilityListener", "WebDevicePerfInfoData", "getEarlyResources"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function g(a) {
        __p && __p();
        var b = document.createElement("canvas");
        b = b.getContext("webgl") || b.getContext("experimental-webgl");
        if (!b) return;
        var c = b.getExtension("WEBGL_debug_renderer_info");
        if (!c) return;
        var d = b.getParameter(c.UNMASKED_RENDERER_WEBGL);
        b = b.getParameter(c.UNMASKED_VENDOR_WEBGL);
        a.gpu_vendor = b;
        a.gpu_renderer = d
    }

    function h(a) {
        __p && __p();
        var c = window.performance.getEntriesByType("resource"),
            d = b("getEarlyResources")(),
            e = {};
        d.forEach(function(a) {
            a = a.getAttribute("src");
            a !== null && a !== void 0 && (e[a] = !0)
        });
        var f = 0,
            g = 0,
            h = 0,
            i = 0;
        c.forEach(function(a) {
            if (e[a.name] === !0) {
                var c = b("VisibilityListener").getHiddenTime(a.startTime, a.responseEnd);
                c = c != null && c > 0;
                if (!c) {
                    c = a.transferSize === 0;
                    var d = a.transferSize < a.encodedBodySize,
                        j = a.responseEnd - a.responseStart;
                    c ? (f += a.encodedBodySize / j, g++) : d || (h += a.transferSize / j, i++)
                }
            }
        });
        g > 0 && (a.cached_speed_sample = f / g, a.cached_file_count = g);
        i > 0 && (a.remote_speed_sample = h / i, a.remote_file_count = i)
    }

    function i() {
        var a = {};
        navigator && navigator.hardwareConcurrency !== void 0 && (a.cpu_cores = navigator.hardwareConcurrency);
        navigator && navigator.deviceMemory !== void 0 && (a.ram = navigator.deviceMemory);
        b("WebDevicePerfInfoData").needsFullUpdate && g(a);
        b("WebDevicePerfInfoData").shouldLogResourcePerf && h(a);
        b("Banzai").post("web_device_perf_info_log", a)
    }
    a = {
        doLog: function() {
            (b("WebDevicePerfInfoData").needsFullUpdate || b("WebDevicePerfInfoData").needsPartialUpdate || b("WebDevicePerfInfoData").shouldLogResourcePerf) && b("JSScheduler").scheduleSpeculativeCallback(i)
        }
    };
    e.exports = a
}), null);
__d("FBSiteWhiteOps", ["ControlledReferer", "FBEngagementWhiteopsFraudSensorTypedLogger", "Style", "URI", "UserAgent"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g;
    a = {
        appendToWindow: function(a, c, d, e, f) {
            __p && __p();
            e === void 0 && (e = null);
            f === void 0 && (f = null);
            var h = window.document.body;
            try {
                var i = "fbsbx-sig-iframe-detection";
                if (h.getElementsByClassName(i).length !== 0) return;
                var j = window.document.createElement("iframe");
                b("Style").apply(j, {
                    height: "1px",
                    width: "1px",
                    opacity: "0",
                    position: "relative",
                    zIndex: "-9999999"
                });
                j.id = "fbsbx-sig-iframe-" + a;
                j.className = i;
                j.referrerPolicy = "no-referrer";
                b("ControlledReferer").useFacebookReferer(j, function() {
                    __p && __p();
                    j.sandbox = "allow-scripts allow-same-origin";
                    var h = "https://s.update.fbsbx.com/2/843748/utils.html?ti=" + a + "&di=facebook.com&bt=" + c + "&dt=8437481520966594402012";
                    d && (h += "&sn=" + d);
                    e != null && e !== "" && (h += "&c1=" + e);
                    f != null && f !== "" && (h += "&c3=" + f);
                    h = new(g || (g = b("URI")))(h);
                    var i = j.contentWindow.document,
                        k = "fbsbx-sig-iframe-form-" + a,
                        l = h.toString();
                    h = h.getQueryData();
                    if (b("UserAgent").isBrowser("IE") || b("UserAgent").isBrowser("Edge") || b("UserAgent").isBrowser("IE Mobile")) {
                        var m = "";
                        for (var n in h) Object.prototype.hasOwnProperty.call(h, n) && (m += "<input " + ('name="' + n + '" ') + 'type="hidden" autocomplete="off" ' + ('value="' + h[n] + '" />'));
                        i.body.innerHTML = '<form method="GET" id=' + k + ">" + m + "</form>";
                        m = i.getElementById(k);
                        m.action = l
                    } else {
                        i.body.innerHTML = '<form method="GET" id=' + k + "></form>";
                        m = i.getElementById(k);
                        m.action = l;
                        for (var o in h)
                            if (Object.prototype.hasOwnProperty.call(h, o)) {
                                l = i.createElement("input");
                                l.name = o;
                                l.value = h[o];
                                l.autocomplete = "off";
                                l.type = "hidden";
                                m.appendChild(l)
                            }
                    }
                    i.body.innerHTML += '<iframe height="100%" width="100%" onload=\'document.getElementById("' + k + "\").submit()'/>;"
                });
                h.appendChild(j)
            } catch (a) {}
        },
        log: function(a, c, d) {
            new(b("FBEngagementWhiteopsFraudSensorTypedLogger"))().setInstanceID(a).setTqBotDetectionProductEnum(c).log()
        }
    };
    e.exports = a
}), null);
__d("BanzaiNectar", ["Banzai"], (function(a, b, c, d, e, f) {
    function a(a) {
        return {
            log: function(c, d, e) {
                d = {
                    e: d,
                    a: e
                };
                b("Banzai").post("nectar:" + c, d, a)
            }
        }
    }
    c = a();
    c.create = a;
    e.exports = c
}), null);
__d("CookieConsentBlacklist", ["CookieConsentBlacklistedHrefs", "Parent"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = {
        isBlacklisted: function(a) {
            __p && __p();
            a = a;
            if (!this.hasCookieBanner()) return !0;
            var c = b("Parent").byAttribute(a, "data-cookiebanner");
            if (c) {
                c = c.getAttribute("data-cookiebanner");
                switch (c) {
                    case "close_button":
                        return !1;
                    case "banner":
                        return !0
                }
            }
            c = b("Parent").byAttribute(a, "data-nocookies");
            if (c) return !0;
            a.tagName.toLowerCase() !== "a" && (a = b("Parent").byTag(a, "a"));
            if (a instanceof HTMLAnchorElement && typeof a.href === "string") {
                c = a.href;
                for (var a = 0; a < this.blacklistedHrefs.length; a++)
                    if (c.indexOf(this.blacklistedHrefs[a]) > -1) return !0
            }
            return !1
        },
        blacklistedHrefs: b("CookieConsentBlacklistedHrefs").hrefs,
        hasCookieBanner: function() {
            var a = document.querySelectorAll('[data-cookiebanner="banner"]');
            return a.length > 0
        }
    };
    e.exports = a
}), null);
__d("QuicklingRefreshOverheadUtil", ["QuicklingConfig", "WebStorage", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g, h, i = null,
        j = 1e4;
    a = {
        onQuicklingStart: function() {
            i = (g || (g = b("performanceAbsoluteNow")))()
        },
        onQuicklingVersionMatch: function() {
            i = null
        },
        onQuicklingRefreshStart: function() {
            if (!b("QuicklingConfig").logRefreshOverhead || i === null) return;
            var a = (h || (h = b("WebStorage"))).getSessionStorage();
            if (!a) return;
            a.setItem("quickling_refresh_overhead", ((g || (g = b("performanceAbsoluteNow")))() - i).toString());
            a.setItem("quickling_refresh_start", Date.now().toString())
        },
        getOverhead: function(a) {
            __p && __p();
            if (!b("QuicklingConfig").logRefreshOverhead) return null;
            var c = (h || (h = b("WebStorage"))).getSessionStorageForRead();
            if (!c) return null;
            var d = c.getItem("quickling_refresh_start");
            if (d == null) return null;
            if (a - parseInt(d, 10) > j) return null;
            a = c.getItem("quickling_refresh_overhead");
            return a != null ? parseFloat(a) : null
        }
    };
    e.exports = a
}), null);
__d("ClientServiceWorkerMessage", [], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a, b, c) {
            this.$1 = a, this.$2 = b, this.$3 = c
        }
        var b = a.prototype;
        b.sendViaController = function() {
            if (!navigator.serviceWorker || !navigator.serviceWorker.controller) return;
            var a = new self.MessageChannel();
            this.$3 && (a.port1.onmessage = this.$3);
            navigator.serviceWorker.controller.postMessage({
                command: this.$1,
                data: this.$2
            }, [a.port2])
        };
        return a
    }();
    e.exports = a
}), null);
__d("ServiceWorkerRegistration", ["Promise", "BrowserPaymentHandlerConfig", "ClientServiceWorkerMessage", "EventListener", "Run", "promiseDone"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = !!navigator.serviceWorker,
        h = {},
        i = Object.freeze({
            name: "Facebook Payments",
            method: "basic-card",
            capabilities: {
                supportedNetworks: ["discover"],
                supportedTypes: ["credit", "debit"]
            }
        }),
        j = Object.freeze({
            name: "Facebook Payments",
            method: self.location.origin,
            capabilities: {
                supportedNetworks: ["discover"],
                supportedTypes: ["credit", "debit"]
            }
        });

    function k() {
        var a = navigator.serviceWorker;
        if (!g || !a) throw new Error("serviceWorker is not supported in this browser");
        return a
    }
    var l = {
        isSupported: function() {
            return g
        },
        registerWorkerIfUnregisteredAfterDD: function(a) {
            b("Run").onAfterLoad(function() {
                l.registerWorkerIfUnregistered(a)
            })
        },
        registerWorkerIfUnregistered: function(a) {
            __p && __p();
            var c = this;
            if (h[a]) return h[a];
            var d = k();
            h[a] = new(b("Promise"))(function(e, f) {
                c.getWorkerRegistration(a).done(function(c) {
                    if (!c) {
                        var g = b("EventListener").listen(window, "message", function(a) {
                            a.data && a.data.command && a.data.command === "ServiceWorkerInstallError" && f()
                        });
                        b("promiseDone")(b("Promise").resolve(d.register(a, {
                            updateViaCache: "all"
                        })), function() {
                            g.remove(), b("promiseDone")(b("Promise").resolve(d.ready), e)
                        })
                    } else e(c), b("BrowserPaymentHandlerConfig").enabled && c.paymentManager && c.paymentManager.instruments && (c.paymentManager.instruments.set("Facebook", j), c.paymentManager.instruments.set("FacebookBasicCard", i))
                })
            });
            h[a].done(function() {
                h[a] = null
            });
            return h[a]
        },
        unregisterControllingWorker: function() {
            return new(b("Promise"))(function(a, c) {
                c = new(b("ClientServiceWorkerMessage"))("unregister", {}, function() {
                    a(!0)
                });
                c.sendViaController()
            })
        },
        getWorkerRegistration: function(a) {
            var c = k();
            return b("Promise").resolve(c.getRegistration(a))
        },
        isAWorkerActivated: function() {
            return !navigator.serviceWorker || !navigator.serviceWorker.getRegistration ? b("Promise").resolve(!1) : navigator.serviceWorker.getRegistration().then(function(a) {
                return !!(a && a.active)
            })
        }
    };
    e.exports = l
}), null);
__d("filterNulls", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function a(a) {
        __p && __p();
        var b = [];
        for (var a = a, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var e;
            if (c) {
                if (d >= a.length) break;
                e = a[d++]
            } else {
                d = a.next();
                if (d.done) break;
                e = d.value
            }
            e = e;
            e != null && b.push(e)
        }
        return b
    }
    e.exports = a
}), null);
__d("XPushRegisterServiceWorkerController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/push/register/service_worker/", {})
}), null);