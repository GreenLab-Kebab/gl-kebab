define("modules/clean/profile_services/auth_callback_handler", ["require", "exports", "tslib", "modules/core/browser", "modules/core/notify", "modules/core/uri", "modules/clean/ajax", "modules/core/i18n"], function(e, t, r, i, n, o, s, a) {
    "use strict";

    function c(e, t, r, i) {
        e.success && e.user_id ? l(t.loginCont || "/") : e.success ? (i && i(), u({
            emailSig: e.email_sig,
            refreshToken: e.refresh_token,
            profile: e.profile
        }, t, r)) : g({
            errMsg: e.err_msg,
            rememberMe: e.remember_me,
            pairUser: e.pair_user,
            profile: e.profile,
            emailSig: e.email_sig,
            refreshToken: e.refresh_token
        }, t.loginCont || "/", r)
    }

    function _(e, t) {
        if (e.success) n.Notify.success(a._("Log in successful!")), s.SilentBackgroundRequest({
            url: "/profile_services/log",
            data: {
                event_name: "login_callback_success",
                value: "success"
            }
        }), t.onSuccess(), t.redirectOnSuccess && i.redirect(t.cont);
        else if (s.SilentBackgroundRequest({
                url: "/profile_services/log",
                data: {
                    event_name: "login_callback_error",
                    value: e.err_msg
                }
            }), "access_denied" === e.err_msg) n.Notify.error(a._("You need to accept Google’s request in order to log in."));
        else if ("emails_do_not_match" === e.err_msg) n.Notify.error(a._("We couldn’t find a Dropbox account matching that email."));
        else if ("google_login_not_allowed" === e.err_msg) n.Notify.error(a._("Google sign in is disabled. Sign in with your Dropbox password or ask your                      Dropbox admin for help."));
        else if ("sso_required" === e.err_msg) n.Notify.error(a._("Your team has single sign-on. Sign in with your Dropbox password or ask your                      Dropbox admin for help."));
        else if ("tfa_required" === e.err_msg) {
            var r = new o.URI({
                path: "/verify_code",
                query: {
                    cont: t.cont,
                    remember_me: String(e.remember_me),
                    pair_user: String(e.pair_user)
                }
            }).toString();
            i.redirect(r)
        } else if ("disabled_account" === e.err_msg) n.Notify.error(a._("This account is disabled."));
        else if ("invalid_pair_target" === e.err_msg) n.Notify.error(a._("That account can’t be paired. Paired account must be a personal account."));
        else if ("already_paired" === e.err_msg) n.Notify.error(a._("That account is already paired to another account."));
        else if ("error_pairing" === e.err_msg) n.Notify.error(a._("There was an error pairing."));
        else if ("not_verified" === e.err_msg) {
            var r = new o.URI({
                path: "/show_password_form",
                query: {
                    cont: t.cont,
                    remember_me: String(e.remember_me),
                    pair_user: String(e.pair_user)
                }
            }).toString();
            i.redirect(r)
        } else "emails_do_not_match_redirect" === e.err_msg ? i.redirect(new o.URI({
            path: "/third_party_signup",
            query: {
                email_sig: e.email_sig,
                email: e.profile.email,
                fname: e.profile.given_name,
                lname: e.profile.family_name,
                refresh_token: e.refresh_token,
                cont: t.cont
            }
        })) : n.Notify.error(a._("We couldn’t log you in with Google.  Try again?"))
    }

    function l(e) {
        i.redirect(e)
    }

    function u(e, t, r) {
        var n = e.profile,
            s = e.emailSig,
            a = e.refreshToken,
            c = n.given_name,
            _ = n.family_name,
            l = n.email,
            u = n.picture_url,
            d = t.registerCont,
            g = t.signupTag,
            m = t.k,
            f = t.eh,
            h = t.showMarketingOptIn,
            v = t.signupEndpoint,
            y = t.signupReferrer,
            O = t.signupUrl,
            S = t.trackingParams,
            k = {
                cont: d,
                eh: f,
                email: l,
                email_sig: s,
                fname: c,
                k: m,
                lname: _,
                picture_url: u,
                refresh_token: a,
                show_marketing_opt_in: h,
                signup_endpoint: v,
                signup_referrer: y,
                signup_tag: g,
                signup_url: O,
                tracking_params: S
            },
            w = Object.keys(k).reduce(function(e, t) {
                var r = k[t];
                return void 0 !== r && (e[t] = String(r)), e
            }, {});
        r && p(r.form, r.newAccount, w), t.canRedirect && i.redirect(new o.URI({
            path: "/third_party_signup",
            query: w
        }).toString())
    }

    function d(e, t) {
        e.success ? (n.Notify.success(a._("Successfully connected your Google Calendar")), t.onSuccess()) : n.Notify.error(a._("Couldn’t connect your Google Calendar"))
    }

    function p(e, t, r) {
        e.trigger(t, r)
    }

    function g(e, t, r) {
        if ("tfa_required" === e.errMsg) {
            var s = {
                cont: t
            };
            null != e.pairUser && (s.pair_user = e.pairUser.toString()), null != e.rememberMe && (s.remember_me = e.rememberMe.toString()), i.redirect(new o.URI({
                path: "/verify_code",
                query: s
            }).toString())
        } else if ("sso_required" === e.errMsg) {
            var s = {
                email: e.profile.email,
                cont: t
            };
            i.redirect(new o.URI({
                path: "/login",
                query: s
            }).toString())
        } else "user_exists" === e.errMsg ? (r && p(r.form, r.userExists, {
            focus: "input[name=login_password]",
            prefill: {
                ".login-email": e.profile.email,
                "input[type='hidden'][name=refresh_token]": e.refreshToken,
                "input[type='hidden'][name=email_sig]": e.emailSig
            }
        }), n.Notify.error(a._("This email address is already taken. Please sign in."))) : "user_already_invited_to_team" === e.errMsg ? n.Notify.error(a._("Contact your admin to resend your invite.")) : n.Notify.error(a._("Unable to link to Google. Please refresh the page to try again."))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = r.__importStar(i), s = r.__importStar(s), t.handleRegisterResponse = c, t.handleLoginResponse = _, t.handleCalendarLinkResponse = d
}), define("modules/clean/profile_services/popup_handler", ["require", "exports", "tslib", "external/lodash"], function(e, t, r, i) {
    "use strict";

    function n(e) {
        var t = i.uniqueId(),
            r = function(t) {
                var r;
                try {
                    r = JSON.parse(t.data)
                } catch (e) {
                    return
                }
                r && "db:profile_service:auth_complete" === r.type && e(r.payload)
            };
        return window.addEventListener("message", r), s[t] = r, t
    }

    function o(e) {
        var t = s[e];
        t && (delete s[e], window.removeEventListener("message", t))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = r.__importStar(i);
    var s = {};
    t.addAuthCompleteListener = n, t.removeAuthCompleteListener = o
}), define("modules/clean/profile_services/profile_services_constants", ["require", "exports", "modules/core/exception", "modules/core/i18n"], function(e, t, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.APPLE = "APPLE", e.GOOGLE = "GOOGLE"
    })(t.ServiceResponseType || (t.ServiceResponseType = {}));
    (function(e) {
        e[e.CONTACTS = 0] = "CONTACTS", e[e.PROFILE = 1] = "PROFILE", e[e.PHOTO = 2] = "PHOTO", e[e.EMAIL = 3] = "EMAIL", e[e.CALENDAR = 4] = "CALENDAR", e[e.DOCUMENTS = 5] = "DOCUMENTS", e[e.CHAT = 6] = "CHAT"
    })(t.ServiceRequestType || (t.ServiceRequestType = {})), (function(e) {
        function t(t) {
            switch (t) {
                case e.CONTACTS:
                    return {
                        ".tag": "contacts"
                    };
                case e.PROFILE:
                    return {
                        ".tag": "profile"
                    };
                case e.PHOTO:
                    return {
                        ".tag": "photo"
                    };
                case e.EMAIL:
                    return {
                        ".tag": "email"
                    };
                case e.CALENDAR:
                    return {
                        ".tag": "calendar"
                    };
                case e.DOCUMENTS:
                    return {
                        ".tag": "documents"
                    };
                case e.CHAT:
                    return {
                        ".tag": "chat"
                    };
                default:
                    return r.assert(!1, "Should never get ServiceRequestType.to_api_v2 with request type: " + e[t])
            }
        }
        e.to_api_v2 = t
    })(t.ServiceRequestType || (t.ServiceRequestType = {}));
    var n = {
        GOOGLE: "1",
        YAHOO: "2",
        FACEBOOK: "3",
        TWITTER: "4",
        YAHOO_LEGACY: "5",
        MOBILE: "6",
        OUTLOOK: "7",
        SLACK: "8",
        DOCUSIGN: "9",
        ZOOM: "10",
        SLACK_DROPBOX: "11",
        TRELLO: "12",
        APPLE: "13",
        NEVER_CONNECTED: 0,
        WAS_CONNECTED: 1,
        IS_CONNECTED: 2,
        VARIOUS: "-1",
        NONE: "-2",
        services: function() {
            return [this.GOOGLE, this.YAHOO, this.FACEBOOK, this.TWITTER, this.YAHOO_LEGACY, this.OUTLOOK, this.SLACK, this.DOCUSIGN, this.ZOOM, this.SLACK_DROPBOX, this.TRELLO, this.APPLE]
        },
        service_data: {
            apple: {
                action: null,
                permissions: i._(""),
                landing_page_id: null,
                learn_more_page: null,
                img: "/static/images/index/apple-logo-color.svg",
                friendly_name: "Apple",
                order: 1
            },
            google: {
                action: "link_contacts",
                permissions: i._("Contacts"),
                landing_page_id: null,
                learn_more_page: null,
                img: "/static/images/index/google-logo-color-vflpJqkMT.svg",
                friendly_name: "Google",
                order: 3
            },
            outlook: {
                action: "link_contacts",
                permissions: i._("Calendar and Contacts"),
                landing_page_id: null,
                learn_more_page: null,
                img: "/static/images/thirdparty/outlook_icon-vflzzt-G0.svg",
                friendly_name: "Outlook",
                order: 4
            },
            slack: {
                action: "link_contacts",
                permissions: i._("Communication"),
                landing_page_id: null,
                learn_more_page: null,
                img: "/static/images/thirdparty/slack_icon_transparent-vfljNpDIm.svg",
                friendly_name: "Slack",
                order: Number.MAX_VALUE
            },
            slack_dropbox: {
                action: "link_contacts",
                permissions: i._("Communication"),
                landing_page_id: "dropbox_slack",
                learn_more_page: "https://www.dropbox.com/help/desktop-web/slack",
                img: "/static/images/thirdparty/slack_icon_transparent-vfljNpDIm.svg",
                friendly_name: "Slack",
                order: 5
            },
            zoom: {
                action: "link_contacts",
                permissions: i._("Communication"),
                landing_page_id: "zoom",
                learn_more_page: "https://www.dropbox.com/help/desktop-web/zoom",
                img: "/static/images/thirdparty/zoom_icon_squircle-vfl-znF5M.svg",
                friendly_name: "Zoom",
                order: 8
            },
            trello: {
                action: "link_contacts",
                permissions: i._("Project management"),
                landing_page_id: null,
                learn_more_page: null,
                img: "/static/images/thirdparty/trello_icon-vfl-FetdA.svg",
                friendly_name: "Trello",
                order: 6
            },
            yahoo: {
                action: "link_contacts",
                permissions: i._("Contacts"),
                landing_page_id: null,
                learn_more_page: null,
                img: "/static/images/thirdparty/yahoo_icon-vflqXkWjv.svg",
                friendly_name: "Yahoo! Mail",
                order: 7
            },
            yahoo_legacy: {
                action: null,
                permissions: i._("Contacts"),
                landing_page_id: null,
                learn_more_page: null,
                img: "/static/images/thirdparty/yahoo_icon-vflqXkWjv.svg",
                friendly_name: "Yahoo! Mail",
                order: Number.MAX_VALUE
            },
            facebook: {
                action: null,
                permissions: i._("Contacts"),
                landing_page_id: null,
                learn_more_page: null,
                img: "/static/images/thirdparty/facebook_icon-vflbyEm0k.svg",
                friendly_name: "Facebook",
                order: 2
            }
        },
        gated_service_data: {
            profile_card_v2: {
                google: {
                    action: "link_calendar",
                    permissions: i._("Calendar and Contacts"),
                    landing_page_id: null,
                    learn_more_page: null,
                    img: "/static/images/index/google-logo-color-vflpJqkMT.svg",
                    friendly_name: "Google",
                    order: 1
                }
            }
        },
        get_service_data: function(e, t) {
            void 0 === t && (t = null);
            var i = e[".tag"];
            if (t && t in this.gated_service_data) {
                var n = this.gated_service_data[t];
                if (i in n) return n[i]
            }
            return i in this.service_data ? this.service_data[i] : r.assert(!1, "Should never get ProfileServicesConstants.get_service_data with service: " + i)
        },
        importable_contact_services: function() {
            return [this.GOOGLE]
        },
        to_img_legacy: function(e) {
            switch (e) {
                case this.GOOGLE:
                    return ["/static/images/contacts/import_icon_gmail-vflFQwVYO.png", "/static/images/contacts/import_icon_gmail@2x-vflO2fTFE.png"];
                case this.YAHOO:
                case this.YAHOO_LEGACY:
                    return ["/static/images/contacts/import_icon_yahoo-vfl5E728M.png", "/static/images/contacts/import_icon_yahoo@2x-vflnVdi5R.png"];
                case this.FACEBOOK:
                    return ["/static/images/contacts/import_icon_facebook-vfluFbt1j.png", "/static/images/contacts/import_icon_facebook@2x-vfl7Zk5rR.png"];
                case this.OUTLOOK:
                    return ["/static/images/contacts/import_icon_outlook-vflF1_UKs.png", "/static/images/contacts/import_icon_outlook@2x-vflVjRgD3.png"];
                case this.SLACK:
                case this.SLACK_DROPBOX:
                    return ["/static/images/thirdparty/slack_icon-vflKvKltK.svg", "/static/images/thirdparty/slack_icon-vflKvKltK.svg"];
                case this.ZOOM:
                    return ["/static/images/thirdparty/zoom_icon-vflft17yG.svg", "/static/images/thirdparty/zoom_icon-vflft17yG.svg"];
                case this.TRELLO:
                    return ["/static/images/thirdparty/trello_icon-vfl-FetdA.svg", "/static/images/thirdparty/trello_icon-vfl-FetdA.svg"];
                default:
                    return r.assert(!1, "Should never get ProfileServicesConstants.to_img_legacy with service: " + e)
            }
        },
        to_name: function(e) {
            if (e === this.VARIOUS) return i._("Email");
            var t = this.to_api_service_type(e);
            return this.get_service_data(t).friendly_name
        },
        logging_identifiers: function(e) {
            switch (e) {
                case this.GOOGLE:
                    return "google";
                case this.YAHOO:
                    return "yahoo";
                case this.FACEBOOK:
                    return "facebook";
                case this.VARIOUS:
                    return "email";
                case this.YAHOO_LEGACY:
                    return "yahoo_legacy";
                case this.OUTLOOK:
                    return i._("outlook");
                case this.SLACK:
                    return i._("slack");
                case this.DOCUSIGN:
                    return "docusign";
                case this.ZOOM:
                    return "zoom";
                case this.SLACK_DROPBOX:
                    return "slack_dropbox";
                case this.TRELLO:
                    return "trello";
                case this.APPLE:
                    return "apple";
                default:
                    return r.assert(!1, "Should never get ProfileServicesConstants.logging_identifiers with service: " + e)
            }
        },
        to_api_service_type: function(e) {
            switch (e) {
                case this.GOOGLE:
                    return {
                        ".tag": "google"
                    };
                case this.YAHOO:
                    return {
                        ".tag": "yahoo"
                    };
                case this.FACEBOOK:
                    return {
                        ".tag": "facebook"
                    };
                case this.OUTLOOK:
                    return {
                        ".tag": "outlook"
                    };
                case this.SLACK:
                    return {
                        ".tag": "slack"
                    };
                case this.ZOOM:
                    return {
                        ".tag": "zoom"
                    };
                case this.SLACK_DROPBOX:
                    return {
                        ".tag": "slack_dropbox"
                    };
                case this.TRELLO:
                    return {
                        ".tag": "trello"
                    };
                case this.APPLE:
                    return {
                        ".tag": "apple"
                    };
                default:
                    return r.assert(!1, "Should never get ProfileServicesConstants.to_api_service_type with service: " + e), {
                        ".tag": "other"
                    }
            }
        },
        from_api_service_type: function(e) {
            switch (e[".tag"]) {
                case "google":
                    return this.GOOGLE;
                case "yahoo":
                    return this.YAHOO;
                case "facebook":
                    return this.FACEBOOK;
                case "outlook":
                    return this.OUTLOOK;
                case "slack":
                    return this.SLACK;
                case "zoom":
                    return this.ZOOM;
                case "slack_dropbox":
                    return this.SLACK_DROPBOX;
                case "trello":
                    return this.TRELLO;
                case "apple":
                    return this.APPLE
            }
            return r.assert(!1, "Should never get ProfileServicesConstants.from_api_service_type with service: " + e), this.VARIOUS
        },
        from_api_to_name: function(e) {
            return this.to_name(this.from_api_service_type(e))
        },
        from_api_to_img: function(e) {
            return this.get_service_data(e).img
        },
        oauth_window_dimensions: function(e) {
            var t = 600;
            return e === this.ZOOM ? t = 770 : e === this.APPLE && (t = 700), {
                width: t,
                height: 600
            }
        }
    };
    t.default = n
}), define("modules/clean/profile_services/profile_services_link", ["require", "exports", "tslib", "jquery", "modules/core/browser", "modules/core/exception", "modules/core/i18n", "modules/core/uri", "modules/clean/ajax", "modules/clean/analytics", "modules/clean/profile_services/popup_handler", "modules/clean/profile_services/profile_services_constants", "modules/clean/viewer", "modules/constants/login_and_register", "modules/clean/react/snackbar", "modules/core/browser"], function(e, t, r, i, n, o, s, a, c, _, l, u, d, p, g, m) {
    "use strict";

    function f(e) {
        o.assert(null !== e, "No user_id provided to auth_service_with_user");
        var t = d.Viewer.get_viewer().get_user_by_id(e);
        o.assert(null !== t, "No user for user_id " + e)
    }

    function h(e) {
        var t = {};
        return Object.keys(e).forEach(function(r) {
            var i = e[r];
            null !== i && void 0 !== i && (t[r] = i)
        }), t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = r.__importDefault(i), n = r.__importStar(n), c = r.__importStar(c), u = r.__importDefault(u), p = r.__importStar(p);
    var v = (function() {
        function e(e, t) {
            var r = this;
            void 0 === t && (t = null), this._update_on_auth_event = function(e) {
                if (e.user_id === r.user_id) {
                    r.is_updated = !1, r.get_or_update_connected_state(!0);
                    for (var t in r.serviceChangeCallbacks) r.serviceChangeCallbacks.hasOwnProperty(t) && r.serviceChangeCallbacks[t](r)
                }
            }, o.assert(null !== e, "No user id provided"), this.user_id = e, this.connectedServices = {}, this.is_updated = !1, this.get_or_update_connected_state(!0, t), this.serviceChangeCallbacks = {}, l.addAuthCompleteListener(this._update_on_auth_event), i.default(document).on("db:profile_service:deauth_complete", this._update_on_auth_event)
        }
        return e.get_linked_profile_services_for_user = function(t, r) {
            void 0 === r && (r = null), o.assert(null !== t, "No user_id: LinkedProfileServices.get_linked_profile_services_for_user()");
            var i = this._LINKED_PROFILE_SERVICES[t];
            return void 0 !== i ? i.get_or_update_connected_state(!1, r) : (i = new e(t, r), this._LINKED_PROFILE_SERVICES[t] = i), i
        }, e.prototype.get_or_update_connected_state = function(e, t) {
            var r = this;
            void 0 === e && (e = !1), void 0 === t && (t = null), this.is_updated && !e ? null !== t && t(this) : c.BackgroundRequest({
                url: "/profile_services/connected_services",
                subject_user: this.user_id,
                dataType: "json",
                success: function(e, i, n) {
                    r.connectedServices = e, r.is_updated = !0, null !== t && t(r)
                }
            })
        }, e.prototype.connected_accounts_for_service = function(e) {
            return this.connectedServices[e] ? i.default.map(this.connectedServices[e], function(e) {
                return e.source_id
            }) : []
        }, e.prototype.has_connected_services = function() {
            for (var e = 0, t = u.default.services(); e < t.length; e++) {
                var r = t[e];
                if (this.service_is_connected(r)) return !0
            }
            return !1
        }, e.prototype.has_unconnected_services = function(e) {
            void 0 === e && (e = !1);
            for (var t = e ? u.default.importable_contact_services() : u.default.services(), r = 0, i = t; r < i.length; r++) {
                var n = i[r];
                if (n !== u.default.YAHOO_LEGACY && !this.service_is_connected(n)) return !0
            }
            return !1
        }, e.prototype.service_is_connected = function(e) {
            if (o.assert(u.default.services().indexOf(e) !== -1, "Not a valid profile service"), null == this.connectedServices[e]) return !1;
            for (var t = 0, r = this.connectedServices[e]; t < r.length; t++) {
                if (r[t].connection_state === u.default.IS_CONNECTED) return !0
            }
            return !1
        }, e.prototype.service_was_connected = function(e) {
            if (o.assert(u.default.services().indexOf(e) !== -1, "Not a valid profile service"), null == this.connectedServices[e]) return !1;
            for (var t = 0, r = this.connectedServices[e]; t < r.length; t++) {
                if (r[t].connection_state === u.default.WAS_CONNECTED) return !0
            }
            return !1
        }, e.prototype.register_for_service_changes = function(e, t) {
            return this.serviceChangeCallbacks[e] = t
        }, e._LINKED_PROFILE_SERVICES = {}, e
    })();
    t.LinkedProfileServices = v;
    var y = (function() {
        function e() {
            this._popup_window = null
        }
        return e.show_import_notifications = function(e) {
            e.success ? (_.TeamsWebActionsLogger.log("import_contacts_complete", {
                provider: u.default.logging_identifiers(e.provider),
                path: n.get_uri().getPath()
            }), g.Snackbar.complete(s._("Successfully connected %(service_name)s").format({
                service_name: u.default.to_name(e.provider)
            }), "profile-services-link")) : null !== e.err_msg ? g.Snackbar.fail(e.err_msg, "profile-services-link") : g.Snackbar.fail(s._("Could not complete connection, try again later"), "profile-services-link")
        }, e.prototype._close_popup_window = function() {
            null != this._popup_window && (this._popup_window.close(), this._popup_window = null)
        }, e.prototype._wait_for_auth_complete = function(e) {
            var t = this;
            return new Promise(function(r, i) {
                var n = null;
                t._close_popup_window();
                var o = l.addAuthCompleteListener(function(e) {
                        return l.removeAuthCompleteListener(o), null != n && clearInterval(n), t._close_popup_window(), r(e)
                    }),
                    s = e();
                if (null == s) return i("window_not_created");
                t._popup_window = s, n = setInterval(function() {
                    if (s.closed === !0) return i("window_closed"), l.removeAuthCompleteListener(o), void clearInterval(n)
                }, 1e3)
            })
        }, e.prototype._window_open_features = function(e) {
            var t = u.default.oauth_window_dimensions(e),
                r = t.width,
                i = t.height,
                n = {
                    width: r,
                    height: i,
                    resizable: 1,
                    scrollbars: 1
                };
            return Object.keys(n).map(function(e) {
                return e + "=" + n[e]
            }).join(",")
        }, e.prototype._post_redirect_to_url = function(e, t, r, i) {
            var o = this,
                s = i ? "/profile_services/redirect_to_identity_provider" : "/profile_services/start_auth_flow",
                c = new a.URI({
                    path: s,
                    query: t
                }).toString();
            return r ? this._wait_for_auth_complete(function() {
                var t = u.default.to_name(e),
                    r = o._window_open_features(e);
                return window.open(c, t, r)
            }) : (n.redirect(c), Promise.reject("redirected"))
        }, e.prototype._redirect_to_identity_provider = function(e, t, r, i, n, s, a) {
            void 0 === i && (i = null), void 0 === n && (n = !0), void 0 === s && (s = null), o.assert(null !== e, "No service provided to auth_service_with_user");
            var c = {
                service: e,
                is_popup: n.toString(),
                action: t,
                prompt_select: "true",
                token: p.REDIRECT_WINDOW_TOKEN,
                extra_state_parameters: a
            };
            null !== r && (c.user_id = r.toString()), c.referrer = i, null == s ? c.is_desktop = "false" : "desktop" === s.kind ? (c.is_desktop = "true", c.host_nonce = s.host_nonce, c.login_hint = s.login_hint) : (c.is_desktop = "false", c.remember_me = s.remember_me.toString(), c.cont = s.cont, c.pair_user = s.pair_user.toString());
            var _ = h(c);
            return this._post_redirect_to_url(e, _, n, !1)
        }, e.prototype.auth_service_with_user_with_landing_page = function(e, t) {
            void 0 === t && (t = void 0);
            var r = u.default.get_service_data(e).landing_page_id;
            return null != r ? this._wait_for_auth_complete(function() {
                return m.open_tab("/landing/" + r + "?return_to_opener=true", !0)
            }) : null != t ? t() : Promise.reject("no_landing_page")
        }, e.prototype.auth_service_with_user = function(e, t, r, i, n) {
            void 0 === r && (r = null), void 0 === i && (i = null), void 0 === n && (n = "link_contacts"), this.auth_service_with_user_promise(e, t, i, n).then(r)
        }, e.prototype.auth_service_with_user_promise = function(e, t, r, i, n) {
            return void 0 === r && (r = null), void 0 === i && (i = "link_contacts"), f(t), this._redirect_to_identity_provider(e, i, t, r, !0, null, n)
        }, e.prototype.auth_service_with_specified_user = function(e, t, r, i) {
            this.auth_service_with_user_promise(e, t, i, "link_target_user").then(r)
        }, e.prototype.auth_service_create_user_if_needed = function(e, t, r, i) {
            void 0 === t && (t = null), void 0 === r && (r = null), void 0 === i && (i = !0), this._redirect_to_identity_provider(e, "create_user", null, r, i).then(t)
        }, e.prototype.auth_service_login_desktop = function(e, t, r, i) {
            void 0 === i && (i = null);
            var n = {
                kind: "desktop",
                host_nonce: r,
                login_hint: i
            };
            this._redirect_to_identity_provider(e, "login_user", null, null, !0, n).then(t)
        }, e.prototype.auth_service_login_web = function(e, t, r, i, n, o, s) {
            var a = {
                kind: "web",
                remember_me: n,
                cont: o,
                pair_user: s
            };
            this._redirect_to_identity_provider(e, "login_user", null, r, i, a).then(t)
        }, e.prototype.auth_service_link_calendar = function(e, t, r, i) {
            return f(t), this._redirect_to_identity_provider(e, "link_calendar", t, i, !0).then(r)
        }, e.prototype.continue_auth_flow = function(e) {
            var t = e.user_id,
                r = e.service,
                i = e.action,
                n = e.referrer,
                o = e.cont,
                s = e.is_popup,
                a = e.pair_user,
                c = e.is_desktop,
                _ = e.is_android,
                l = e.remember_me,
                u = e.host_nonce,
                d = e.login_hint,
                g = e.prompt_select,
                m = e.pkce_challenge,
                f = e.extra_state_parameters,
                v = {
                    service: r,
                    action: "link_contacts",
                    prompt_select: "true",
                    token: p.REDIRECT_WINDOW_TOKEN
                };
            v.action = i, null != t && (v.user_id = t.toString()), v.cont = o, v.referrer = n, null != s && (v.is_popup = s.toString()), null != a && (v.pair_user = a.toString()), null != c && (v.is_desktop = c.toString()), null != _ && (v.is_android = _.toString()), null != l && (v.remember_me = l.toString()), v.host_nonce = u, v.login_hint = d, null != g && (v.prompt_select = g.toString()), null != m && (v.pkce_challenge = m), v.extra_state_parameters = f;
            var y = h(v);
            return this._post_redirect_to_url(r, y, !1, !0)
        }, e.prototype.deauth_service = function(e, t, r, n) {
            void 0 === r && (r = null), void 0 === n && (n = null);
            var s = parseInt(t, 10),
                a = function(t) {
                    if (!t.service_is_connected(e) && null !== n) return void n(!0);
                    null !== r && o.assert(t.connected_accounts_for_service(e).indexOf(r) !== -1, "Service is not currently connected"), c.WebRequest({
                        url: "/profile_services/unlink",
                        subject_user: s,
                        data: {
                            service: e,
                            source_id: r
                        },
                        success: function(e, t, r) {
                            return i.default(document).trigger(i.default.Event("db:profile_service:deauth_complete", {
                                user_id: s
                            })), "function" == typeof n ? n(!0) : void 0
                        },
                        error: function(e, t, r) {
                            return "function" == typeof n ? n(!1) : void 0
                        }
                    })
                };
            o.assert(u.default.services().indexOf(e) !== -1, "Not a valid profile service"), o.assert(null !== s, "No user_id provided"), v.get_linked_profile_services_for_user(s, a)
        }, e
    })();
    t.ProfileServicesLinkingHandler = y
}), define("modules/clean/react/paging_list", ["require", "exports", "tslib", "external/classnames", "react", "external/react-dom", "external/react-dom-factories", "external/lodash"], function(e, t, r, i, n, o, s, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = r.__importDefault(i), n = r.__importDefault(n), o = r.__importStar(o), s = r.__importStar(s), a = r.__importStar(a);
    var c = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._getScroll = function() {
                var e = o.findDOMNode(t.refs.scroller).getBoundingClientRect().top;
                return o.findDOMNode(t.refs.container).getBoundingClientRect().top - e
            }, t._setScroll = function(e) {
                return o.findDOMNode(t.refs.container).scrollTop += e - t._getScroll()
            }, t._getViewportSize = function() {
                return o.findDOMNode(t.refs.container).clientHeight
            }, t._getStartAndEnd = function() {
                var e = Math.max(0, t._getScroll() - t.props.threshold);
                return {
                    start: e,
                    end: e + t._getViewportSize() + 2 * t.props.threshold
                }
            }, t.updateFrame = function() {
                var e = t._getStartAndEnd(),
                    r = e.start,
                    i = e.end,
                    n = t.props.itemSize,
                    o = t._constrainFrom(Math.floor(r / n), t.props.children.length),
                    s = t._constrainSize(Math.ceil((i - r) / n) + 1, t.props.children, o);
                return t.setState({
                    from: o,
                    size: s
                })
            }, t._getSpaceBefore = function(e) {
                return e * t.props.itemSize
            }, t._constrainFrom = function(e, t) {
                return e ? Math.max(Math.min(e, t - 1), 0) : 0
            }, t._constrainSize = function(e, r, i) {
                var n = r.length,
                    o = t.props.pageSize;
                return Math.min(Math.max(e, o), n - i)
            }, t.scrollTo = function(e) {
                return t._setScroll(t._getSpaceBefore(e))
            }, t.scrollAround = function(e) {
                var r = t._getScroll(),
                    i = t._getSpaceBefore(e);
                if (r > i) return t._setScroll(i);
                var n = i - t._getViewportSize() + t.props.itemSize;
                return r < n ? t._setScroll(n) : void 0
            }, t._renderItems = function() {
                var e = t.state.from + t.state.size - 1;
                return t.props.children.slice(t.state.from, +e + 1 || void 0)
            }, t.state = {
                from: 0,
                size: t._constrainSize(t.props.pageSize, t.props.children, 0)
            }, t
        }
        return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
            var t = this._constrainFrom(this.state.from, e.children.length),
                r = this._constrainSize(this.state.size, e.children, t);
            return this.setState({
                from: t,
                size: r
            })
        }, t.prototype.componentDidMount = function() {
            return window.addEventListener("resize", this.updateFrame), o.findDOMNode(this).addEventListener("scroll", this.updateFrame), this.updateFrame()
        }, t.prototype.shouldComponentUpdate = function(e, t) {
            return !a.isEqual(e, this.props) || !a.isEqual(t, this.state)
        }, t.prototype.componentDidUpdate = function() {
            return this.updateFrame()
        }, t.prototype.componentWillUnmount = function() {
            window.removeEventListener("resize", this.updateFrame), o.findDOMNode(this).removeEventListener("scroll", this.updateFrame)
        }, t.prototype.render = function() {
            var e = {
                    position: "relative",
                    height: this._getSpaceBefore(this.props.children.length)
                },
                t = this._getSpaceBefore(this.state.from),
                r = this.props.useTranslate3d ? "translate3d(0px, " + t + "px, 0)" : "translate(0px, " + t + "px)",
                n = {
                    MsTransform: r,
                    WebkitTransform: r,
                    transform: r
                };
            return s.div({
                className: i.default("paging-list", this.props.customClass),
                ref: "container"
            }, s.div({
                style: e,
                ref: "scroller"
            }, s.ul({
                style: n
            }, this._renderItems())))
        }, t.displayName = "PagingList", t.defaultProps = {
            threshold: 100,
            useTranslate3d: !1
        }, t
    })(n.default.Component);
    t.default = c
});
//# sourceMappingURL=pkg-profile_services.min.js-vflRS9c9S.map