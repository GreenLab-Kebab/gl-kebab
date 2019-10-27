(function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("external/react-addons-pure-render-mixin", [], t) : "object" == typeof exports ? exports.PureRenderMixin = t() : (e.React ? e.React.addons = e.React.addons || {} : (function() {
        throw new Error("react-addons-pure-render-mixin could not find the React object. If you are using script tags, make sure that React is being loaded before react-addons-pure-render-mixin.")
    })()).PureRenderMixin = t()
})(this, function() {
    return (function(e) {
        function t(r) {
            if (o[r]) return o[r].exports;
            var n = o[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(n.exports, n, n.exports, t), n.l = !0, n.exports
        }
        var o = {};
        return t.m = e, t.c = o, t.i = function(e) {
            return e
        }, t.d = function(e, o, r) {
            t.o(e, o) || Object.defineProperty(e, o, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function(e) {
            var o = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(o, "a", o), o
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 1)
    })([function(e, t, o) {
        "use strict";

        function r(e, t) {
            return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t
        }

        function n(e, t) {
            if (r(e, t)) return !0;
            if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
            var o = Object.keys(e),
                n = Object.keys(t);
            if (o.length !== n.length) return !1;
            for (var a = 0; a < o.length; a++)
                if (!s.call(t, o[a]) || !r(e[o[a]], t[o[a]])) return !1;
            return !0
        }
        var s = Object.prototype.hasOwnProperty;
        e.exports = n
    }, function(e, t, o) {
        "use strict";
        var r = o(0);
        e.exports = {
            shouldComponentUpdate: function(e, t) {
                return !r(this.props, e) || !r(this.state, t)
            }
        }
    }])
}), define("modules/clean/flux/store_mixin", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return {
            getInitialState: function() {
                return this._get_state_from_stores(this.props)
            },
            componentDidMount: function() {
                for (var t = 0, o = Array.from(e); t < o.length; t++) {
                    o[t].add_change_listener(this._handle_store_changed)
                }
                return this.setState(this._get_state_from_stores(this.props))
            },
            componentWillUnmount: function() {
                var t = this;
                return Array.from(e).map(function(e) {
                    return e.remove_change_listener(t._handle_store_changed)
                })
            },
            _handle_store_changed: function() {
                if (this.isMounted()) {
                    var e = this._get_state_from_stores(this.props);
                    if (null != e) return this.setState(e)
                }
            }
        }
    };
    t.default = o
}), define("modules/clean/loggers/growth_features_events_logger", ["require", "exports", "tslib", "modules/clean/ajax"], function(e, t, o, r) {
    "use strict";

    function n(e, t) {
        i({
            feature: "ransomware_recovery",
            event: e,
            extra: t
        })
    }

    function s(e, t) {
        i({
            feature: "project_magnet",
            event: e,
            extra: t
        })
    }

    function a(e, t) {
        i({
            feature: "project_lasso",
            event: e,
            extra: t
        })
    }

    function i(e) {
        r.SilentBackgroundRequest({
            url: "/log/growth_feature",
            data: {
                event_params: JSON.stringify(e)
            }
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = o.__importStar(r), t.EXP_UJ_MAGNET2018_ON_VARIANTS = ["V1", "V2", "V3"], t.EXP_UJ_MAGNET2018_LOGGED_VARIANTS = t.EXP_UJ_MAGNET2018_ON_VARIANTS.concat("CONTROL"), t.logRansomwareEvent = n, t.logMagnetEvent = s, t.logLassoEvent = a
}), define("modules/clean/react/bubble_dropdown", ["require", "exports", "tslib", "external/classnames", "external/keymaster", "react", "external/react-dom", "external/react-dom-factories", "external/prop-types", "external/lodash", "jquery", "modules/clean/keycode", "modules/core/dom"], function(e, t, o, r, n, s, a, i, l, d, u, p, c) {
    "use strict";

    function f(e, t) {
        return void 0 !== e && null !== e ? t(e) : void 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = o.__importDefault(r), n = o.__importDefault(n), s = o.__importDefault(s), a = o.__importStar(a), i = o.__importStar(i), l = o.__importStar(l), d = o.__importStar(d), u = o.__importDefault(u);
    var b = "react-bubble-dropdown-root",
        h = function() {
            var e = u.default("#" + b);
            return e.length || (e = u.default('<div tabindex="-1"/>').attr({
                id: b
            }).prependTo("body")), e[0]
        },
        _ = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    dropdown_style: {}
                }, t._arrow_direction = function() {
                    var e;
                    return "top" === t.props.arrow_position.substring(0, 3) ? e = "top" : "bottom" === t.props.arrow_position.substring(0, 6) ? e = "bottom" : "left" === t.props.arrow_position.substring(0, 4) ? e = "left" : "right" === t.props.arrow_position.substring(0, 5) && (e = "right"), e
                }, t
            }
            return o.__extends(t, e), t.prototype.componentDidMount = function() {
                var e, t;
                if (null != this.refs.dropdown) {
                    var o = this._arrow_direction();
                    this.target_position = {
                        top: "bottom",
                        left: "right",
                        bottom: "top",
                        right: "left"
                    }[o];
                    var r = u.default(this.props.target_node),
                        n = u.default(a.findDOMNode(this.refs.dropdown)),
                        s = u.default(a.findDOMNode(this.refs.arrow)),
                        i = this.props.horizontal_displacement || 0,
                        l = this.props.vertical_displacement || 0;
                    switch (this._arrow_direction()) {
                        case "left":
                            e = r.outerWidth() + s.outerWidth(), t = r.outerHeight() / 2 - s.position().top;
                            break;
                        case "right":
                            e = -1 * (n.outerWidth() + s.outerWidth()), t = r.outerHeight() / 2 - s.position().top;
                            break;
                        case "top":
                            e = r.outerWidth() / 2 - s.position().left - i, t = r.outerHeight() + s.outerHeight() - l;
                            break;
                        case "bottom":
                            e = r.outerWidth() / 2 - s.position().left - i, t = -1 * (n.outerHeight() + s.outerHeight()) + l
                    }
                    c.clone_position(n, r, {
                        setHeight: !1,
                        setWidth: !1,
                        offsetLeft: e,
                        offsetTop: t
                    });
                    var d = n.position();
                    if (this.props.anchor_bottom) {
                        var p = void 0;
                        p = this.props.targetFixed ? document.documentElement.clientHeight - r[0].getBoundingClientRect().top - l : document.documentElement.clientHeight - r.offset().top - l, this.setState({
                            dropdown_style: {
                                bottom: p,
                                left: d.left
                            }
                        })
                    } else this.setState({
                        dropdown_style: {
                            top: d.top,
                            left: d.left
                        }
                    });
                    return u.default("#" + b).attr("aria-labelledby", this.props.label_id), this.props.show_arrow ? void 0 : (s.css("visibility", "hidden"), u.default(".bubble-arrow-border").css("visibility", "hidden"))
                }
            }, t.prototype.render = function() {
                return i.div({
                    className: r.default("bubble-dropdown", this.props.extra_css_class, this.props.className, this.props.arrow_position, {
                        justify: this.props.justify
                    }),
                    style: this.state.dropdown_style,
                    ref: "dropdown"
                }, this.props.children, i.div({
                    className: "bubble-arrow-border"
                }), i.div({
                    className: "bubble-arrow",
                    ref: "arrow"
                }))
            }, t.displayName = "BubbleDropdownContents", t.propTypes = {
                target_node: l.instanceOf(HTMLElement).isRequired,
                targetFixed: l.bool.isRequired,
                label_id: l.string,
                arrow_position: l.oneOf(["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "right", "right-top", "right-bottom", "left", "left-top", "left-bottom"]).isRequired,
                vertical_displacement: l.number,
                horizontal_displacement: l.number,
                anchor_bottom: l.bool,
                show_arrow: l.bool,
                className: l.string,
                extra_css_class: l.string,
                justify: l.bool
            }, t
        })(s.default.Component),
        m = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.render_tooltip = function() {
                    var e = h();
                    if (t.shown) {
                        u.default("#" + b).css("position", t.props.position), t.props.anchor_bottom ? (u.default("#" + b).css("bottom", "0"), u.default("#" + b).css("top", "auto")) : (u.default("#" + b).css("top", "0"), u.default("#" + b).css("bottom", "auto"));
                        var o = s.default.createElement(_, {
                            target_node: t.getTargetButton(),
                            targetFixed: t.props.targetFixed,
                            label_id: t.containerId,
                            arrow_position: t.props.arrow_position,
                            vertical_displacement: t.props.vertical_displacement,
                            horizontal_displacement: t.props.horizontal_displacement,
                            anchor_bottom: t.props.anchor_bottom,
                            show_arrow: t.props.show_arrow,
                            extra_css_class: t.props.extra_css_class,
                            className: t.props.className,
                            justify: t.props.justify
                        }, t.props.children);
                        return a.render(o, e)
                    }
                    return a.unmountComponentAtNode(e)
                }, t.preventSelection = function(e) {
                    return e.preventDefault()
                }, t.targetKeyUp = function(e) {
                    return e.preventDefault()
                }, t.bindDocHandlers = function() {
                    if (!t.hasBindedDocHandlers) return n.default("esc", t.hideIfShown), t.props.bubbleDropdownScrollable ? u.default("*").not("#" + b + " *").on("scroll." + t.eventId, t.hideIfShown) : u.default("*").on("scroll." + t.eventId, t.hideIfShown), t.props.closeBubbleDropdownOnWindowScroll && u.default(window).on("scroll." + t.eventId, t.hideIfShown), t.props.shouldDisableBubbleDropdownHideOnResize || u.default(window).on("resize." + t.eventId, t.hideIfShown), u.default("#" + b).on("keydown", t.dropdownKeyDown), t.hasBindedDocHandlers = !0
                }, t.unbindDocHandlers = function() {
                    if (t.hasBindedDocHandlers) return u.default("body").off("mouseup." + t.eventId), u.default("*").off("scroll." + t.eventId), u.default(window).off("scroll." + t.eventId), t.props.shouldDisableBubbleDropdownHideOnResize || u.default(window).off("resize." + t.eventId), u.default("#" + b).off("keydown", t.dropdownKeyDown), t.hideIfShown()
                }, t.targetKeyDown = function(e) {
                    [p.KeyCode.ENTER, p.KeyCode.SPACE].includes(e.keyCode) && (t.toggle(), e.preventDefault()), e.keyCode === p.KeyCode.TAB && (e.shiftKey ? t.hide() : t.shown && (t.focusInDropdown(), e.preventDefault()))
                }, t.dropdownKeyDown = function(e) {
                    if (e.keyCode === p.KeyCode.TAB) {
                        var o = u.default("#" + b)[0],
                            r = t.getFocusableDropdownElements();
                        if (e.shiftKey) {
                            if ([o, r[0]].includes(e.target)) return t.getTargetButton().focus(), e.preventDefault()
                        } else if (e.target === r[r.length - 1] || e.target === o && 0 === r.length) return t.hide(), t.getTargetButton().focus()
                    } else if (e.keyCode === p.KeyCode.ESC) return t.hide(), t.getTargetButton().focus(), e.stopPropagation()
                }, t.focusInDropdown = function() {
                    var e;
                    return t.props.autofocus && (e = t.getFocusableDropdownElements()[0]), e || (e = u.default("#" + b)[0]), e.focus()
                }, t.getTargetButton = function() {
                    return f(a.findDOMNode(t.refs.target), function(e) {
                        return e.firstChild
                    })
                }, t.getFocusableDropdownElements = function() {
                    return c.getFocusableElementsIn("#" + b + " .bubble-dropdown")
                }, t.hideIfShown = function() {
                    if (t.shown) return t.hide()
                }, t.toggle = function() {
                    t.shown ? t.hide() : t.show()
                }, t.show = function() {
                    if (!t.props.disabled) return t.shown = !0, u.default(t.getTargetButton()).addClass("bubble-dropdown-target--active").attr("aria-expanded", !0), t.render_tooltip(), t.focusInDropdown(), "function" == typeof t.props.bubbleDropdownShown && t.props.bubbleDropdownShown(), t.bindDocHandlers()
                }, t.hide = function() {
                    return t.shown = !1, u.default(t.getTargetButton()).removeClass("bubble-dropdown-target--active").attr("aria-expanded", !1), t.render_tooltip(), "function" == typeof t.props.bubbleDropdownHidden ? t.props.bubbleDropdownHidden() : void 0
                }, t.isShown = function() {
                    return t.shown
                }, t
            }
            return o.__extends(t, e), t.prototype.render = function() {
                return i.div({
                    className: r.default("bubble-dropdown-container", this.props.container_css_class),
                    onMouseDown: this.preventSelection,
                    onMouseUp: this.toggle,
                    onKeyDown: this.targetKeyDown,
                    ref: "target",
                    id: this.containerId
                }, this.props.targetButton)
            }, t.prototype.componentWillMount = function() {
                return this.eventId = d.uniqueId(), this.containerId = "bubbleDropdownTarget" + this.eventId
            }, t.prototype.componentDidMount = function() {
                var e = this;
                return this.shown = !1, this.$target = u.default(a.findDOMNode(this.refs.target)), u.default(this.getTargetButton()).addClass("bubble-dropdown-target").attr("aria-expanded", this.shown), this.props.disabled && (u.default(this.getTargetButton()).addClass("disabled"), this.$target.addClass("disabled")), this.bodyClickHandler = function(t) {
                    if (e.shown) {
                        var o = u.default(t.target);
                        if (o.is("select")) return !0;
                        return o.closest(e.$target).length || o.closest(u.default("#" + b)).length || e.hide(), !0
                    }
                }, u.default("body").on("mouseup." + this.eventId, this.bodyClickHandler)
            }, t.prototype.componentDidUpdate = function() {
                if (u.default(this.getTargetButton()).addClass("bubble-dropdown-target").attr("aria-expanded", this.shown), this.shown) return this.render_tooltip()
            }, t.prototype.componentWillUnmount = function() {
                return this.unbindDocHandlers(), u.default("body").off("mouseup." + this.eventId, this.bodyClickHandler)
            }, t.displayName = "BubbleDropdown", t.DROPDOWN_ROOT_ID = b, t.propTypes = {
                targetButton: function(e, t, o) {
                    if (null == e.targetButton || "button" !== e.targetButton.type) return new Error("BubbleDropdown's targetButton must be a `<button>`")
                },
                targetFixed: l.bool,
                arrow_position: l.oneOf(["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "right", "right-top", "right-bottom", "left", "left-top", "left-bottom"]).isRequired,
                vertical_displacement: l.number,
                horizontal_displacement: l.number,
                show_arrow: l.bool,
                anchor_bottom: l.bool,
                className: l.string,
                extra_css_class: l.string,
                container_css_class: l.string,
                bubbleDropdownShown: l.func,
                bubbleDropdownHidden: l.func,
                autofocus: l.bool,
                position: l.oneOf(["static", "relative", "fixed", "absolute"]),
                bubbleDropdownScrollable: l.bool,
                closeBubbleDropdownOnWindowScroll: l.bool,
                shouldDisableBubbleDropdownHideOnResize: l.bool,
                justify: l.bool,
                disabled: l.bool
            }, t.defaultProps = {
                vertical_displacement: 0,
                horizontal_displacement: 0,
                anchor_bottom: !1,
                show_arrow: !0,
                className: null,
                extra_css_class: "",
                container_css_class: "",
                position: "fixed",
                autofocus: !1,
                targetFixed: !1,
                bubbleDropdownScrollable: !1,
                closeBubbleDropdownOnWindowScroll: !0,
                justify: !1,
                disabled: !1
            }, t
        })(s.default.Component);
    t.default = m
}), define("modules/clean/react/tabs/tab_bar", ["require", "exports", "tslib", "external/classnames", "react", "external/react-dom", "external/prop-types", "modules/clean/keycode", "modules/clean/react/tabs/tab_util"], function(e, t, o, r, n, s, a, i, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = o.__importDefault(r), n = o.__importDefault(n), s = o.__importStar(s), a = o.__importStar(a), l = o.__importStar(l);
    var d = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._normalizedTabs = function() {
                return t.props.tabs.map(function(e) {
                    return "string" != typeof e && "number" != typeof e || (e = {
                        value: e,
                        label: e
                    }), e
                })
            }, t._onKeydown = function(e) {
                var o = t._normalizedTabs(),
                    r = null;
                if ([i.KeyCode.LEFT, i.KeyCode.UP].includes(e.keyCode) ? r = 0 === t.props.selectedIndex ? o.length - 1 : t.props.selectedIndex - 1 : [i.KeyCode.RIGHT, i.KeyCode.DOWN].includes(e.keyCode) && (r = t.props.selectedIndex === o.length - 1 ? 0 : t.props.selectedIndex + 1), null != r) return e.preventDefault(), t._selectTab(r, {
                    focusOnTab: !0
                })
            }, t._selectTab = function(e, o) {
                void 0 === o && (o = {});
                var r = t._normalizedTabs()[e];
                if (t.props.onChange(r.value, e), o.focusOnTab === !0) return s.findDOMNode(t.refs[e]).focus()
            }, t._onClick = function(e, o) {
                if (o.preventDefault(), e !== t.props.selectedIndex) return t._selectTab(e, {
                    focusOnTab: !0
                })
            }, t._renderTab = function(e, o, s) {
                var a, i = r.default({
                        "c-tabs__tab": !0,
                        "c-tabs__tab--selected": o === t.props.selectedIndex,
                        "c-tabs__tab--fr": e.rightAlign,
                        "c-tabs__tab--rightmost": s
                    }),
                    d = o === t.props.selectedIndex;
                a = e.contentId ? e.contentId : d ? l.getTabContentId(t.props.idPrefix) : "";
                var u = d ? 0 : -1,
                    p = n.default.createElement("a", {
                        href: "#",
                        ref: o,
                        id: l.getTabId(t.props.idPrefix, o),
                        onClick: t._onClick.bind(t, o),
                        onKeyDown: t._onKeydown,
                        role: "tab",
                        "aria-selected": d,
                        "aria-controls": a,
                        tabIndex: u,
                        className: "c-tabs__label",
                        title: e.label
                    }, e.label);
                return n.default.createElement("li", {
                    key: o,
                    className: i,
                    role: "presentation",
                    "data-value": e.value
                }, p)
            }, t
        }
        return o.__extends(t, e), t.prototype.render = function() {
            var e = this,
                t = this._normalizedTabs(),
                o = Array.from(t).map(function(o, r) {
                    return e._renderTab(o, r, r === t.length - 1)
                });
            return n.default.createElement("ul", {
                className: "c-tabs__bar",
                role: "tablist",
                ref: "tablist"
            }, o)
        }, t.displayName = "TabBar", t.propTypes = {
            tabs: a.arrayOf(a.oneOfType([a.string, a.number, a.shape({
                value: a.oneOfType([a.string, a.number]),
                label: a.string,
                rightAlign: a.bool
            })])).isRequired,
            selectedIndex: a.number,
            onChange: a.func,
            idPrefix: a.string
        }, t.defaultProps = {
            selectedIndex: 0,
            onChange: function() {}
        }, t
    })(n.default.Component);
    t.default = d
}), define("modules/clean/react/tabs/tab_util", ["require", "exports"], function(e, t) {
    "use strict";

    function o(e, t) {
        return e + "_tab" + (null != t ? t : "")
    }

    function r(e, t) {
        return e + "_tabcontent" + (null != t ? t : "")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.DEFAULT = "c-tabs", e.CENTER = "c-tabs c-tabs--center", e.MINIMAL = "c-tabs c-tabs--minimal", e.UNDERLINE = "c-tabs--underline", e.OVERLINE = "c-tabs--overline"
    })(t.TabVariant || (t.TabVariant = {})), t.getTabId = o, t.getTabContentId = r
}), define("modules/clean/react/tabs/tabs", ["require", "exports", "tslib", "external/classnames", "react", "external/react-dom-factories", "external/prop-types", "external/lodash", "jquery", "modules/clean/react/tabs/tab_bar", "modules/clean/react/tabs/tab_util", "modules/core/browser"], function(e, t, o, r, n, s, a, i, l, d, u, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = o.__importDefault(r), n = o.__importDefault(n), s = o.__importStar(s), a = o.__importStar(a), i = o.__importStar(i), l = o.__importDefault(l), d = o.__importDefault(d), u = o.__importStar(u), p = o.__importStar(p);
    var c = (function(e) {
        function t(t) {
            var o = e.call(this, t) || this;
            o._onChange = function(e, t) {
                o.setState({
                    selectedIndex: t
                });
                var r = o.state.tabs[t];
                return r.hashURL && p.set_hash(r.hashURL), o.props.onChange(e, t)
            }, o._selectTabFromHash = function() {
                var e = p.get_hash();
                if (null != e) {
                    var t = o.state.tabs;
                    return (function() {
                        for (var r = [], n = 0; n < t.length; n++) {
                            var s = t[n],
                                a = s.hashPrefix,
                                i = s.hashURL;
                            if (null != a && 0 === (null != e ? e.indexOf(a) : void 0) || e === i) {
                                o.setState({
                                    selectedIndex: n
                                });
                                break
                            }
                            r.push(void 0)
                        }
                        return r
                    })()
                }
            };
            var r = t.idPrefix ? t.idPrefix : "tabset" + i.uniqueId();
            return o.state = {
                selectedIndex: 0,
                idPrefix: r
            }, o
        }
        return o.__extends(t, e), t.prototype.componentWillMount = function() {
            var e = [],
                t = this.state.selectedIndex,
                o = this.state.idPrefix;
            return n.default.Children.forEach(this.props.children, function(r, n) {
                var s = u.getTabContentId(o, n);
                if (e.push({
                        label: r.props.title,
                        contentId: s,
                        hashPrefix: r.props.hashPrefix,
                        hashURL: r.props.hashURL,
                        rightAlign: r.props.rightAlign
                    }), r.props.isSelected) return t = n
            }), this.setState({
                tabs: e,
                selectedIndex: t
            }), l.default(window).on("hashchange", this._selectTabFromHash)
        }, t.prototype.componentWillReceiveProps = function(e) {
            if (void 0 !== e.selectedIndex && e.selectedIndex !== this.state.selectedIndex) return this.setState({
                selectedIndex: e.selectedIndex
            })
        }, t.prototype.componentWillUnmount = function() {
            return l.default(window).off("hashchange", this._selectTabFromHash)
        }, t.prototype.componentDidMount = function() {
            return this._selectTabFromHash()
        }, t.prototype.render = function() {
            var e = this,
                t = this.props.renderTabBar(n.default.createElement(d.default, {
                    tabs: this.state.tabs,
                    onChange: this._onChange,
                    idPrefix: this.state.idPrefix,
                    selectedIndex: this.state.selectedIndex
                }));
            return s.div({
                className: r.default(this.props.variant, this.props.className)
            }, t, n.default.Children.map(this.props.children, function(t, o) {
                return n.default.cloneElement(t, {
                    isSelected: o === e.state.selectedIndex,
                    id: u.getTabContentId(e.state.idPrefix, o),
                    tabId: u.getTabId(e.state.idPrefix, o)
                })
            }))
        }, t.displayName = "Tabs", t.propTypes = {
            idPrefix: a.string,
            variant: a.string,
            selectedIndex: a.number,
            onChange: a.func,
            className: a.string,
            renderTabBar: a.func
        }, t.defaultProps = {
            variant: u.TabVariant.DEFAULT,
            renderTabBar: function(e) {
                return e
            },
            onChange: function() {}
        }, t
    })(n.default.Component);
    t.Tabs = c;
    var f = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o.__extends(t, e), t.prototype.render = function() {
            var e = {
                "c-tabs__content": !0,
                "c-tabs__content--selected": this.props.isSelected
            };
            return s.div({
                id: this.props.id,
                className: r.default(e),
                role: "tabpanel",
                "aria-labelledby": this.props.tabId
            }, this.props.children)
        }, t.displayName = "TabContent", t.propTypes = {
            id: a.string,
            isSelected: a.bool,
            tabId: a.string,
            hashPrefix: a.string,
            hashURL: a.string,
            title: a.string
        }, t
    })(n.default.Component);
    t.TabContent = f
});
//# sourceMappingURL=pkg-coreui-with-i18n-for-sharing.min.js-vflyOi3bK.map