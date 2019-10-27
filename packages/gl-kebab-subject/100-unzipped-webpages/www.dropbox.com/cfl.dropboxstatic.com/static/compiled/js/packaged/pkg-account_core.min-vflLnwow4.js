define("modules/clean/account/email_verify_reasons", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SHARE_FOLDER = "share_folder", t.CREATE_API_APP = "create_api_app", t.PUBLIC_FOLDER = "public_folder", t.GENERIC = "generic", t.SHMODAL = "shmodal", t.SHARE_FILEVIEWER = "share_fileviewer", t.MOBILE_SHARE_FOLDER = "mobile_share_folder", t.EMAIL_ALIAS = "email_alias", t.CHANGE_EMAIL = "change_email", t.PROMPT_CAMPAIGN = "prompt_campaign", t.ADD_COMMENT = "add_comment", t.SUBSCRIBE_TO_COMMENTS = "subscribe_to_comments", t.CREATE_FILE_COLLECTOR = "create_file_collector", t.JOIN_DISCOVERED_TEAM = "join_discovery", t.CREATE_TEAM = "create_team", t.NEW_DFB_TEAM_TRY = "new_dfb_team_try", t.NEW_DFB_TEAM_BUY = "new_dfb_team_buy", t.GIFT_BUY = "gift_buy", t.REFER_FRIENDS = "refer_friends", t.UJ_VERIFY_EMAIL = "uj_verify_email", t.SHOWCASE_USER = "showcase_user", t.CLOUD_DOCS = "cloud_docs", t.REVERIFICATION_CAMPAIGN = "reverification_campaign", t.CHANGE_EMAIL_FOR_APPLE_SIGNUP = "change_email_for_apple_signup"
}), define("modules/clean/account_page/components/account_table", ["require", "exports", "tslib", "react", "external/classnames"], function(e, t, o, n, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), a = o.__importDefault(a), t.BodyCell = function(e) {
        var t = e.className,
            s = o.__rest(e, ["className"]),
            r = a.default("account-maestro-table__body-cell", t);
        return n.default.createElement("td", o.__assign({
            className: r
        }, s))
    }, t.HeaderCell = function(e) {
        var t = e.className,
            s = o.__rest(e, ["className"]),
            r = a.default("account-maestro-table__header-cell", t);
        return n.default.createElement("th", o.__assign({
            className: r
        }, s))
    }, t.BodyRow = function(e) {
        var t = e.className,
            s = o.__rest(e, ["className"]),
            r = a.default("account-maestro-table__body-row", t);
        return n.default.createElement("tr", o.__assign({
            className: r
        }, s))
    }, t.HeaderRow = function(e) {
        var t = e.className,
            s = o.__rest(e, ["className"]),
            r = a.default("account-maestro-table__header-row", t);
        return n.default.createElement("tr", o.__assign({
            className: r
        }, s))
    }, t.TableHead = function(e) {
        return n.default.createElement("thead", o.__assign({}, e))
    }, t.TableBody = function(e) {
        return n.default.createElement("tbody", o.__assign({}, e))
    }, t.TableFooter = function(e) {
        return n.default.createElement("tfoot", o.__assign({}, e))
    }, t.Table = function(e) {
        var t = e.className,
            s = o.__rest(e, ["className"]),
            r = a.default("account-maestro-table", t);
        return n.default.createElement("div", {
            className: "account-maestro-table-container"
        }, n.default.createElement("table", o.__assign({
            className: r
        }, s)))
    }
}), define("modules/clean/account_page/components/action_table", ["require", "exports", "tslib", "react", "external/classnames", "spectrum/icon_form", "spectrum/tertiary_link", "modules/clean/account_page/components/account_table"], function(e, t, o, n, a, s, r, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), a = o.__importDefault(a);
    var i = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.onClose = function(e) {
                return function() {
                    t.props.onClosePressed(e)
                }
            }, t
        }
        return o.__extends(t, e), t.prototype.renderBodyRows = function() {
            var e = this;
            return (this.props.sortFunction ? this.props.data.sort(this.props.sortFunction) : this.props.data).map(function(t, o) {
                var a = null != e.props.hideClose && e.props.hideClose(t);
                return n.default.createElement(l.BodyRow, {
                    key: o
                }, e.props.keys.map(function(a, s) {
                    return n.default.createElement(l.BodyCell, {
                        key: o + "-" + s
                    }, e.props.renderRowDetail(t, a))
                }), n.default.createElement(l.BodyCell, {
                    className: "action-table__close",
                    key: o + "--1"
                }, !a && n.default.createElement(r.TertiaryLink, {
                    "aria-label": e.props.dismissAriaLabel(t),
                    onClick: e.onClose(t),
                    className: "action-table__button"
                }, n.default.createElement(s.IconForm, {
                    name: "cancel"
                }))))
            })
        }, t.prototype.renderHeaderCells = function() {
            var e = this;
            return this.props.keys.map(function(t, o) {
                return n.default.createElement(l.HeaderCell, {
                    key: o
                }, e.props.headers[t])
            })
        }, t.prototype.render = function() {
            var e = a.default("action-table", this.props.tableClass);
            return n.default.createElement(l.Table, {
                className: e
            }, n.default.createElement(l.TableHead, null, n.default.createElement(l.HeaderRow, null, this.renderHeaderCells(), n.default.createElement(l.HeaderCell, {
                "aria-label": this.props.dismissHeaderAriaLabel
            }))), n.default.createElement(l.TableBody, null, this.renderBodyRows()))
        }, t
    })(n.default.Component);
    t.ActionTable = i
}), define("modules/clean/account_page/components/button_block", ["require", "exports", "tslib", "external/classnames", "react", "spectrum/button", "modules/clean/account_page/components/info_tooltip", "spectrum/tertiary_link", "modules/clean/react/css", "modules/clean/react/tooltip"], function(e, t, o, n, a, s, r, l, i, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), a = o.__importDefault(a), c = o.__importStar(c);
    var u = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o.__extends(t, e), t.prototype.render = function() {
            var e, t = "link" === this.props.buttonAction.kind ? this.props.buttonAction.href : void 0,
                i = {
                    className: "account-button-block__button",
                    onClick: "function" === this.props.buttonAction.kind ? this.props.buttonAction.handler : void 0,
                    disabled: this.props.disabled
                },
                u = "secondary" === this.props.kind ? a.default.createElement(s.Button, o.__assign({
                    href: t
                }, i, {
                    variant: "secondary"
                }), this.props.buttonText) : a.default.createElement("a", {
                    href: t
                }, a.default.createElement(l.TertiaryLink, o.__assign({}, i), this.props.buttonText)),
                p = n.default("account-page-module ", "account-button-block", this.props.className);
            return e = this.props.tooltipText ? a.default.createElement("div", {
                className: "account-toggle-block__tooltip-label"
            }, a.default.createElement("div", null, this.props.label), this.props.tooltipText && a.default.createElement(r.InfoTooltip, {
                content: this.props.tooltipText,
                position: c.TooltipPosition.BOTTOM
            })) : a.default.createElement("div", {
                className: "account-toggle-block__label"
            }, this.props.label), this.props.hideClickOption ? a.default.createElement("div", {
                className: p
            }, a.default.createElement("div", {
                className: "account-button-block__label"
            }, a.default.createElement("span", {
                className: "account-page-block__heading"
            }, this.props.label), this.props.subtext && a.default.createElement("div", {
                className: "account-page-block__subtext"
            }, this.props.subtext, this.props.italicizedSubtext && a.default.createElement("br", null), this.props.italicizedSubtext && a.default.createElement("i", null, this.props.italicizedSubtext))), a.default.createElement("span", {
                className: "account-page-block__heading"
            }, this.props.hideClickText)) : a.default.createElement("div", {
                className: p
            }, a.default.createElement("div", {
                className: "account-button-block__label"
            }, a.default.createElement("span", {
                className: "account-page-block__heading"
            }, e), this.props.subtext && a.default.createElement("div", {
                className: "account-page-block__subtext"
            }, this.props.subtext, this.props.italicizedSubtext && a.default.createElement("br", null), this.props.italicizedSubtext && a.default.createElement("i", null, this.props.italicizedSubtext))), u)
        }, t
    })(a.default.Component);
    t.ButtonBlock = i.requireCssWithComponent(u, ["/static/css/account/pagelet/index-vflZpLjyL.css", "/static/css/spectrum/index.web-vflagwTbb.css"])
}), define("modules/clean/account_page/components/info_tooltip", ["require", "exports", "tslib", "react", "external/classnames", "modules/core/i18n", "modules/clean/react/tooltip", "modules/clean/react/sprite"], function(e, t, o, n, a, s, r, l) {
    "use strict";

    function i(e) {
        var t = a.default("info-tooltip", e.className),
            o = e.position || r.TooltipPosition.RIGHT;
        return n.default.createElement("span", {
            className: t
        }, e.prompt && n.default.createElement("span", {
            className: "info-tooltip__prompt"
        }, e.prompt), n.default.createElement(r.Tooltip, {
            position: o,
            tooltip_contents: e.content
        }, n.default.createElement(l.Sprite, {
            className: "info-tooltip__icon",
            group: "web",
            name: "info",
            alt: s._("More information"),
            tabIndex: 0
        })))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), a = o.__importDefault(a), r = o.__importStar(r), t.InfoTooltip = i
}), define("modules/clean/account_page/components/key_value_block", ["require", "exports", "tslib", "react", "external/classnames", "modules/clean/react/css", "spectrum/tertiary_link"], function(e, t, o, n, a, s, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), a = o.__importDefault(a);
    var l = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o.__extends(t, e), t.prototype.render = function() {
            var e = a.default("account-page-module ", "account-key-value-block", this.props.className);
            return n.default.createElement("div", {
                className: e
            }, n.default.createElement("span", {
                className: "account-key-value-block__key"
            }, this.props.keyText, this.props.subtext && n.default.createElement("div", {
                className: "account-key-value-block__subtext"
            }, this.props.subtext)), n.default.createElement("span", {
                className: "account-key-value-block__value"
            }, this.props.valueText), n.default.createElement("div", {
                className: "account-key-value-block__links"
            }, this.props.linkText && n.default.createElement(r.TertiaryLink, {
                className: "account-key-value-block__link",
                onClick: this.props.onLinkClick,
                disabled: this.props.disabled
            }, this.props.linkText), this.props.secondLink && n.default.createElement(r.TertiaryLink, {
                className: "account-key-value-block__link",
                onClick: this.props.onSecondLinkClick,
                disabled: this.props.disabled
            }, this.props.secondValueText)))
        }, t
    })(n.default.Component);
    t.KeyValueBlock = s.requireCssWithComponent(l, ["/static/css/account/pagelet/index-vflZpLjyL.css"])
}), define("modules/clean/account_page/components/loading", ["require", "exports", "tslib", "react", "modules/core/i18n", "modules/clean/static_urls"], function(e, t, o, n, a, s) {
    "use strict";

    function r() {
        return n.default.createElement("div", {
            className: "account-loading-indicator"
        }, n.default.createElement("img", {
            src: s.static_url("/static/images/icons/ajax-loading-small-blue-vflVk_QNP.gif"),
            alt: a._("Loading")
        }))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), t.Loading = r
}), define("modules/clean/account_page/components/mcl_toggle", ["require", "exports", "tslib", "react", "external/classnames", "modules/clean/react/css", "modules/core/i18n", "modules/clean/keycode"], function(e, t, o, n, a, s, r, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), a = o.__importDefault(a);
    var i = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.onClick = function() {
                t.props.isDisabled || t.props.onToggle(!t.props.isOn)
            }, t.onKeyPress = function(e) {
                var o = e.charCode;
                o !== l.KeyCode.ENTER && o !== l.KeyCode.SPACE || t.onClick()
            }, t
        }
        return o.__extends(t, e), t.prototype.render = function() {
            var e, t = this.props.isOn,
                o = this.props.customStatusDescription;
            e = o ? t ? o.onText : o.offText : t ? r._("On") : r._("Off");
            var s = t ? "on" : "off",
                l = a.default("toggle", this.props.className);
            return n.default.createElement("div", {
                className: l,
                role: "button",
                "aria-pressed": t,
                tabIndex: 0,
                onKeyPress: this.onKeyPress,
                onClick: this.onClick
            }, n.default.createElement("div", {
                className: "toggle__status toggle__status--" + s
            }, e), n.default.createElement("div", {
                className: "toggle__toggle-container toggle__toggle-container--" + s
            }, n.default.createElement("div", {
                className: "toggle__toggle toggle__toggle--" + s
            })))
        }, t
    })(n.default.Component);
    t.Toggle = s.requireCssWithComponent(i, ["/static/css/account/pagelet/index-vflZpLjyL.css"])
}), define("modules/clean/account_page/components/toggle_block", ["require", "exports", "tslib", "react", "external/classnames", "modules/clean/account_page/components/info_tooltip", "modules/clean/account_page/components/mcl_toggle", "modules/clean/react/css", "modules/clean/react/tooltip"], function(e, t, o, n, a, s, r, l, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), a = o.__importDefault(a), i = o.__importStar(i);
    var c = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o.__extends(t, e), t.prototype.render = function() {
            var e, t = a.default("account-page-module", "account-toggle-block", this.props.className);
            return e = this.props.subLabel ? n.default.createElement("div", {
                className: "account-toggle-block__label"
            }, n.default.createElement("span", {
                className: "account-toggle-block__heading"
            }, this.props.label), n.default.createElement("span", {
                className: "account-toggle-block__subtext"
            }, this.props.subLabel)) : this.props.tooltipText ? n.default.createElement("div", {
                className: "account-toggle-block__tooltip-label"
            }, n.default.createElement("div", null, this.props.label), this.props.tooltipText && n.default.createElement(s.InfoTooltip, {
                content: this.props.tooltipText,
                position: i.TooltipPosition.BOTTOM
            })) : n.default.createElement("div", {
                className: "account-toggle-block__label"
            }, this.props.label), n.default.createElement("div", {
                className: t
            }, e, this.props.detail && n.default.createElement("div", {
                className: "account-toggle-block__detail"
            }, this.props.detail), n.default.createElement(r.Toggle, {
                className: this.props.toggleClass,
                isOn: this.props.isOn,
                onToggle: this.props.onToggle,
                customStatusDescription: this.props.customStatusDescription,
                isDisabled: this.props.isDisabled
            }))
        }, t
    })(n.default.Component);
    t.ToggleBlock = l.requireCssWithComponent(c, ["/static/css/account/pagelet/index-vflZpLjyL.css", "/static/css/spectrum/index.web-vflagwTbb.css"])
}), define("modules/clean/account_page/util", ["require", "exports", "modules/clean/viewer"], function(e, t, o) {
    "use strict";

    function n() {
        return o.Viewer.get_viewer().get_user_by_id(window.ensemble.viewer.getActiveUser().userId)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getCurrentUser = n
}), define("modules/clean/legacy_pyxl_controllers/phone_number", ["require", "exports", "tslib", "jquery", "modules/clean/web_timing_logger", "modules/core/controller_helpers", "modules/core/i18n"], function(e, t, o, n, a, s, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), a = o.__importStar(a), s = o.__importStar(s);
    var l = (function() {
        function t(t, n) {
            var s = this;
            this.set = this.set.bind(this), this._setup_valhooks = this._setup_valhooks.bind(this), this.$phone_input = t, this.$error_span = null, this.id = this.$phone_input.attr("id"), this.$country_select = this.$phone_input.find(".phone-country"), this.$phone_text = this.$phone_input.find(".phone-text"), this._setup_valhooks(), this._listen(), this._phone_numbers = void 0, n ? a.waitForTTI().then(function() {
                return new Promise(function(t, o) {
                    e(["external/phone_helpers"], t, o)
                }).then(o.__importStar).then(function(e) {
                    var t = e.default;
                    return s._phone_numbers = t
                })
            }) : new Promise(function(t, o) {
                e(["external/phone_helpers"], t, o)
            }).then(o.__importStar).then(function(e) {
                var t = e.default;
                return s._phone_numbers = t
            })
        }
        return t.prototype._listen = function() {
            var e = this;
            return this._reformat(), this.$phone_text.on("blur", function() {
                return e._reformat(), e.validate_on_blur()
            }), this.$country_select.on("change", function() {
                return e._reformat(), e.validate_on_blur()
            }), this.$phone_text.on("focus", function() {
                return e.hide_error()
            })
        }, t.prototype._get_example_number = function() {
            return this._phone_numbers ? this._phone_numbers.get_example_mobile_number(this.get_country_code()) : "(201) 555-0123"
        }, t.prototype._get_country_code = function() {
            return this._phone_numbers ? this._phone_numbers.iso_to_dialing(this.$country_select.val() || "US") : "1"
        }, t.prototype._split_number = function(e) {
            return this._phone_numbers ? this._phone_numbers.split_number(e) : e
        }, t.prototype._is_valid = function(e) {
            return !this._phone_numbers || this._phone_numbers.is_valid(e)
        }, t.prototype._full_number = function() {
            var e = this.$country_select.val(),
                t = this.$phone_text.val();
            return this._phone_numbers ? this._phone_numbers.full_number(e, t) : t
        }, t.prototype._format = function(e, t) {
            return this._phone_numbers ? this._phone_numbers.format(e, t) : e + " " + t
        }, t.prototype._reformat = function() {
            this.hide_error();
            var e = this.$phone_text.val();
            if (!e) {
                var t = this._get_example_number();
                return void n.default("label", this.$phone_text).text(r._("Example: ") + t)
            }
            var o = this._format(this.get_country_code(), e);
            if (o) return this.$phone_text.val(o)
        }, t.prototype.get_country_code = function() {
            return this._get_country_code()
        }, t.prototype.get_local_number = function() {
            var e = this.$phone_input.val();
            return this._split_number(e).phone_number
        }, t.prototype.is_empty = function() {
            return !this.$phone_text.val()
        }, t.prototype.show_error = function(e) {
            var t = this.$phone_input.find(".phone-number-error");
            return t.css("display", "block"), t.text(e)
        }, t.prototype.hide_error = function() {
            return this.$phone_input.find(".phone-number-error").html("&nbsp;")
        }, t.prototype.is_valid_french_polynesian_number = function(e) {
            return "+689" === e.slice(0, 4) && (e = e.slice(4), e = e.replace(/[^\d]/g, ""), 6 === e.length || 8 === e.length)
        }, t.prototype.validate_on_blur = function() {
            if (this.is_empty()) return this.hide_error(), !0;
            var e = this.$phone_input.val();
            return this.is_valid_french_polynesian_number(e) ? (this.hide_error, !0) : this._is_valid(e) ? (this.hide_error(), !0) : (this.show_error(r._("Invalid phone number")), !1)
        }, t.prototype.validate_on_submit = function() {
            return !!this.validate_on_blur() && (!this.is_empty() || (this.show_error(r._("Please enter a phone number")), !1))
        }, t.prototype.focus = function() {
            return this.$phone_text.focus()
        }, t.prototype.get = function() {
            if (this.is_empty()) return null;
            try {
                return this._full_number(this.$country_select.val(), this.$phone_text.val())
            } catch (e) {
                return null
            }
        }, t.prototype.set = function(e) {
            if (!e) return this.$phone_text.val(""), void this._reformat();
            try {
                var t = this._split_number(e);
                return t.iso_code ? (this.$country_select.val(t.iso_code), this.$phone_text.val(this._format(t.dialing_code, t.phone_number)), void this._reformat()) : void this.$phone_text.val(e)
            } catch (t) {
                return this.$phone_text.val(e), this.show_error(r._("Invalid phone number"))
            }
        }, t.prototype._setup_valhooks = function() {
            return this.$phone_input.each(function() {
                return this.type = "phoneinput"
            }), n.default.valHooks.phoneinput = {
                get: function(e) {
                    return s.get_controller(n.default(e)).get()
                },
                set: function(e, t) {
                    return s.get_controller(n.default(e)).set(t)
                }
            }
        }, t.prototype._validate_phone_number = function(e, t) {
            return t = t.replace(/\D/g, ""), this._format(e, t)
        }, t
    })();
    t.default = l
});
//# sourceMappingURL=pkg-account_core.min.js-vflJtUJ7v.map