if (self.CavalryLogger) {
    CavalryLogger.start_js(["7Og4B"]);
}

__d("ChatOpenTab", ["csx", "Bootloader", "ContextualThing", "CurrentUser", "Event", "MercuryIDs", "Parent", "WorkGalahadSettings", "requireWeak"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = null;
    b("requireWeak")("FantaTabsReactApp", function(a) {
        return h = a
    });
    b("requireWeak")("FantaTabsSlimApp", function(a) {
        return h = a
    });

    function i(a, c, d, e) {
        b("Event").listen(a, "click", function(f) {
            (b("WorkGalahadSettings").isGalahadEnabled || l.canOpenTab()) && (e(c, d), a.removeAttribute("ajaxify"), a.removeAttribute("rel"), f.preventDefault())
        })
    }

    function j(a, c, d, e) {
        b("Event").listen(a, "click", function(a) {
            l.canOpenTab() && e(c, d)
        })
    }

    function k(a) {
        a = b("ContextualThing").getContext(a);
        return a && b("Parent").bySelector(a, "._3qw") !== null
    }
    var l = {
        canOpenTab: function() {
            return h && !h.isHidden()
        },
        listenOpenEmptyTabDEPRECATED: function(a, b) {
            i(a, null, b, this._loadAndOpenEmptyFantaTab)
        },
        listenOpenThreadDEPRECATED: function(a, b, c) {
            var d = this;
            i(a, b, c, function(a, b) {
                return d.loadAndOpenFantaTab(a, b, c)
            })
        },
        listenOpenUserTabDEPRECATED: function(a, b, c) {
            var d = this;
            k(a) || i(a, b, c, function(a) {
                return d.loadAndOpenFantaTab(a, "user", c)
            })
        },
        listenOpenUserTabPersistentEventDEPRECATED: function(a, b, c) {
            var d = this;
            k(a) || j(a, b, c, function(a) {
                return d.loadAndOpenFantaTab(a, "user", c)
            })
        },
        listenOpenPageTabDEPRECATED: function(a, b, c, d) {
            var e = this;
            k(a) || i(a, b, d, function(a) {
                return e.loadAndOpenFantaTab(a, "page", d)
            })
        },
        listenOpenPageTabPersistentEventDEPRECATED: function(a, b, c, d) {
            var e = this;
            k(a) || j(a, b, d, function(a) {
                return e.loadAndOpenFantaTab(a, "page", d)
            })
        },
        loadAndOpenFantaTab: function(a, c, d) {
            b("Bootloader").loadModules(["ChatOpenTabEventLogger", "FantaTabActions"], function(e, f) {
                if (c === "user" || c === "page") {
                    var g = b("MercuryIDs").getThreadIDFromUserID(a);
                    f.openTab(g, [d]);
                    e.logUserClickOpen(d, a)
                } else f.openTab(a, [d]), e.logClickOpen(d, a)
            }, "ChatOpenTab")
        },
        _loadAndOpenEmptyFantaTab: function() {
            b("Bootloader").loadModules(["ChatOpenTabEventLogger", "FantaTabActions", "MessengerState.bs"], function(a, c, d) {
                d = d.createNewLocalThreadGenerateID(b("CurrentUser").getID());
                c.openNewMessageTab(d, "jewel_new_message");
                a.logClickOpen("EmptyTab")
            }, "ChatOpenTab")
        }
    };
    e.exports = l
}), null);
__d("CenteredContainer.react", ["cx", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    a = b("React").PropTypes;
    c = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = (this.props.vertical ? "_3bwv" : "") + (this.props.horizontal ? " _3bww" : ""),
                c = b("React").Children.map(this.props.children, function(a) {
                    return b("React").jsx("div", {
                        className: "_3bwx",
                        children: a
                    })
                }),
                d = b("joinClasses")(this.props.className, this.props.fullHeight ? "_5bpf" : "");
            return b("React").jsx("div", babelHelpers["extends"]({}, this.props, {
                className: d,
                children: b("React").jsx("div", {
                    className: a,
                    children: b("React").jsx("div", {
                        className: "_3bwy",
                        children: c
                    })
                })
            }))
        };
        return c
    }(b("React").Component);
    c.propTypes = {
        fullHeight: a.bool,
        vertical: a.bool,
        horizontal: a.bool
    };
    c.defaultProps = {
        fullHeight: !1,
        vertical: !1,
        horizontal: !0
    };
    e.exports = c
}), null);
__d("HovercardLink", ["URI"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g, h = {
        getBaseURI: function() {
            return new(g || (g = b("URI")))("/ajax/hovercard/hovercard.php")
        },
        constructEndpoint: function(a, b) {
            return h.constructEndpointWithGroupAndLocation(a, b, null)
        },
        constructEndpointWithLocation: function(a, b) {
            return h.constructEndpointWithGroupAndLocation(a, null, b)
        },
        constructEndpointWithGroupAndLocation: function(a, b, c, d) {
            return h.constructEndpointWithGroupLocationAndExtraParams(a, b, c, d)
        },
        constructEndpointWithGroupLocationAndExtraParams: function(a, c, d, e, f) {
            __p && __p();
            f === void 0 && (f = null);
            var i = new(g || (g = b("URI")))(h.getBaseURI()).setQueryData({
                    id: a.id
                }),
                j = {};
            if (f !== null)
                for (var k in f) j[k] = f[k];
            (a.weakreference || e) && c && (j.group_id = c);
            d && (j.hc_location = d);
            c && (j.directed_target_id = c);
            i.addQueryData({
                extragetparams: JSON.stringify(j)
            });
            return i
        }
    };
    e.exports = h
}), null);
__d("ClickableArea.react", ["Focus", "React", "ReactDOM"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            if (this.props.buttonRef) {
                var a = this.props.buttonRef();
                b("Focus").relocate(b("ReactDOM").findDOMNode(a), b("ReactDOM").findDOMNode(this))
            }
        };
        d.render = function() {
            var a = this.props,
                c = a.children,
                d = a.onClick;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "onClick"]);
            return b("React").cloneElement(b("React").Children.only(c), babelHelpers["extends"]({}, a, {
                onClick: d
            }))
        };
        return c
    }(b("React").Component);
    e.exports = a
}), null);
__d("ContextualLayer.react", ["ContextualLayer", "React", "ReactBrowserEventEmitter_DO_NOT_USE", "ReactDOM", "ReactLayer", "Style", "warning"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = b("React").PropTypes;
    c = b("ReactLayer").createClass({
        propTypes: {
            contextRef: a.func,
            context: function(a, c, d) {
                if (a.context == null == (a.contextRef == null)) return new Error("Exactly one of `context` or `contextRef` must be set on `" + (d + "`."));
                a = a[c];
                if (a != null) {
                    if (typeof a !== "object") return new Error("Invalid `" + c + "` supplied to `" + d + "`, expected a React component.");
                    if (b("React").isValidElement(a)) return new Error("Invalid `" + c + "` supplied to `" + d + "`, expected a React component instance. You're passing a React descriptor.")
                }
            }
        },
        immutableProps: {
            modal: null
        },
        createLayer: function(a) {
            __p && __p();
            var c = this,
                d = this._getContextNode(),
                e = {
                    context: d,
                    contextBounds: this.props.contextBounds,
                    "data-testid": this.props["data-testid"],
                    position: this.props.position,
                    alignment: this.props.alignment,
                    offsetX: this.props.offsetX,
                    offsetY: this.props.offsetY,
                    addedBehaviors: this.enumerateBehaviors(this.props.behaviors),
                    shouldSetARIAProperties: this.props.shouldSetARIAProperties,
                    isStrictlyControlled: this.props.isStrictlyControlled
                };
            e = new(b("ContextualLayer"))(e, a);
            this._node = a;
            this._matchContextSize(this.props);
            this.props.contextBounds && e.setContextWithBounds(d, this.props.contextBounds);
            this._resizeSubscription = e.subscribe("resize", function(a, d) {
                a = b("ReactBrowserEventEmitter_DO_NOT_USE").isEnabled();
                a && (c.props.onResize && c.props.onResize(d))
            });
            e.conditionShow(this.props.shown);
            return e
        },
        componentWillUnmount: function() {
            this._resizeSubscription && (this._resizeSubscription.unsubscribe(), this._resizeSubscription = null)
        },
        receiveProps: function(a, b) {
            this.updateBehaviors(b.behaviors, a.behaviors);
            b = this._getContextNode();
            a.contextBounds ? this.layer.setContextWithBounds(b, a.contextBounds) : this.layer.setContext(b);
            this._matchContextSize(a);
            this.layer.setPosition(a.position);
            this.layer.setAlignment(a.alignment);
            this.layer.setOffsetX(a.offsetX);
            this.layer.setOffsetY(a.offsetY);
            this.layer.conditionShow(a.shown)
        },
        getDefaultEnabledBehaviors: function() {
            return b("ContextualLayer").getDefaultBehaviorsAsObject()
        },
        _getContextNode: function() {
            var a;
            this.props.context ? a = b("ReactDOM").findDOMNode(this.props.context) : this.props.contextRef && (a = b("ReactDOM").findDOMNode(this.props.contextRef()));
            return a
        },
        _matchContextSize: function(a) {
            var c = this._node,
                d = this._getContextNode();
            a.containerWidthMatchContext && b("Style").set(c, "width", d.offsetWidth + "px");
            a.containerHeightMatchContext && b("Style").set(c, "height", d.offsetHeight + "px")
        }
    });
    e.exports = c
}), null);
__d("VerseSidebarUtil", ["Bootloader", "CSS", "DOM", "ge"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function g() {
        var a = document.documentElement || "";
        b("CSS").addClass(a, "buddylistOff")
    }
    var h = {
        show: function() {
            g();
            if (b("ge")("pagelet_verse_sidebar")) return;
            b("Bootloader").loadModules(["UIPagelet"], function(a) {
                var c = b("DOM").create("div", {
                    id: "pagelet_verse_sidebar"
                });
                b("DOM").appendContent(document.body, c);
                a.loadFromEndpoint("VerseSidebarPagelet", "pagelet_verse_sidebar", {
                    path: ""
                })
            }, "VerseSidebarUtil")
        },
        remove: function() {
            var a = b("ge")("pagelet_verse_sidebar");
            a && b("DOM").remove(a)
        },
        removeAndHideMessenger: function() {
            g(), h.remove()
        }
    };
    e.exports = h
}), null);
__d("PrivacyLiteFlyoutBootloader", ["regeneratorRuntime", "Promise", "Deferred", "JSResource"], (function(a, b, c, d, e, f) {
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
                            a.next = 2;
                            return b("regeneratorRuntime").awrap(j._loadFlyout(!1));
                        case 2:
                        case "end":
                            return a.stop()
                    }
                }, null, this)
            },
            loadFlyoutAsChild: function() {
                return b("regeneratorRuntime").async(function(a) {
                    while (1) switch (a.prev = a.next) {
                        case 0:
                            a.next = 2;
                            return b("regeneratorRuntime").awrap(j._loadFlyout(!0));
                        case 2:
                        case "end":
                            return a.stop()
                    }
                }, null, this)
            },
            _loadFlyout: function(a) {
                __p && __p();
                var c, d, e, f, h, i, j, k, l, m;
                return b("regeneratorRuntime").async(function(n) {
                    __p && __p();
                    while (1) switch (n.prev = n.next) {
                        case 0:
                            if (!g) {
                                n.next = 2;
                                break
                            }
                            return n.abrupt("return");
                        case 2:
                            g = !0;
                            n.next = 5;
                            return b("regeneratorRuntime").awrap(b("Promise").all([b("JSResource")("PrivacyLiteFlyout").__setRef("PrivacyLiteFlyoutBootloader").load(), this._getDeferredFlyoutElements().getPromise(), this._getDeferredFooterElements().getPromise()]));
                        case 5:
                            c = n.sent, d = c[0], e = c[1], f = e.flyout, h = e.flyoutRoot, i = c[2], j = i.footer, k = i.event, l = i.settingsExitPoint, m = i.basicsExitPoint, d.setIsChild(!!a), d.registerFlyoutToggler(f, h), d.registerSettingsAndBasicsLinkLogging(j, k, l, m), d.loadBody();
                        case 19:
                        case "end":
                            return n.stop()
                    }
                }, null, this)
            },
            setChildFlyoutVisible: function(a) {
                __p && __p();
                var c, d, e, f;
                return b("regeneratorRuntime").async(function(h) {
                    __p && __p();
                    while (1) switch (h.prev = h.next) {
                        case 0:
                            if (!(!g && !a)) {
                                h.next = 2;
                                break
                            }
                            return h.abrupt("return");
                        case 2:
                            h.next = 4;
                            return b("regeneratorRuntime").awrap(b("Promise").all([b("JSResource")("PrivacyLiteFlyout").__setRef("PrivacyLiteFlyoutBootloader").load(), this._getDeferredFlyoutElements().getPromise()]));
                        case 4:
                            c = h.sent;
                            d = c[0];
                            e = c[1];
                            f = e.flyout;
                            e._flyoutRoot;
                            if (!(a === d.isFlyoutVisible())) {
                                h.next = 11;
                                break
                            }
                            return h.abrupt("return");
                        case 11:
                            d.setChildFlyoutVisible(a), d.onToggle(f, a ? "show" : "hide");
                        case 13:
                        case "end":
                            return h.stop()
                    }
                }, null, this)
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
            },
            _getDeferredFooterElements: function() {
                i == null && (i = new(b("Deferred"))());
                return i
            },
            registerFooterElements: function(a, b, c, d) {
                this._getDeferredFooterElements().resolve({
                    footer: a,
                    event: b,
                    settingsExitPoint: c,
                    basicsExitPoint: d
                })
            }
        };
    e.exports = j
}), null);
__d("HelpLiteFlyout", ["Arbiter", "AsyncRequest", "CSS", "DOM", "Event", "HelpLiteFlyoutBootloader", "PrivacyLiteFlyoutBootloader", "Toggler", "ge", "ifRequired"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = null,
        h = {
            loadBody: function() {
                b("ge")("fbHelpLiteFlyoutLoading") && new(b("AsyncRequest"))("/help/ajax/contextual/").setData({
                    page_type: b("HelpLiteFlyoutBootloader").getHelpType()
                }).send()
            },
            refreshHelp: function() {
                b("ge")("fbHelpLiteFlyoutLoading") && new(b("AsyncRequest"))("/help/ajax/contextual/").setData({
                    page_type: b("HelpLiteFlyoutBootloader").getHelpType(),
                    is_refresh: !0
                }).send()
            },
            resetHelp: function(a) {
                var c = b("ge")("fbContextualHelpContent");
                c && b("DOM").replace(c, a);
                h.isFlyoutVisible() ? h.refreshHelp() : b("ifRequired")("WorkGalahadQuickHelpNub.react", function() {
                    h.refreshHelp()
                })
            },
            showHelp: function() {
                b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!1), b("CSS").show(b("ge")("fbHelpLiteFlyout"))
            },
            openPrivacy: function() {
                b("CSS").hide(b("ge")("fbHelpLiteFlyout")), b("PrivacyLiteFlyoutBootloader").loadFlyoutAsChild(), b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!0)
            },
            registerPrivacyBackLink: function(a) {
                b("Event").listen(a, "click", h.showHelp)
            },
            registerFlyoutToggler: function(a, c) {
                g = c;
                a = b("Toggler").createInstance(a);
                a.setSticky(!1);
                b("Toggler").listen("hide", c, function(a) {
                    b("Arbiter").inform("layer_hidden", {
                        type: "HELP_LITE"
                    }), b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!1)
                });
                b("Toggler").listen("show", c, function(a) {
                    b("Arbiter").inform("layer_shown", {
                        type: "HELP_LITE"
                    }), h.showHelp()
                })
            },
            isFlyoutVisible: function() {
                return g && b("Toggler").getActive() === g
            },
            setFlyoutVisible: function(a) {
                a && b("HelpLiteFlyoutBootloader").loadFlyout(), a ? b("Toggler").show(g) : b("Toggler").hide(g)
            }
        };
    e.exports = h
}), null);
__d("DOMClone", ["DataStoreConfig"], (function(a, b, c, d, e, f) {
    a = {
        shallowClone: function(a) {
            return g(a, !1)
        },
        deepClone: function(a) {
            return g(a, !0)
        }
    };

    function g(a, c) {
        a = a.cloneNode(c);
        typeof a.__FB_TOKEN !== "undefined" && delete a.__FB_TOKEN;
        typeof a[b("DataStoreConfig").expandoKey] !== "undefined" && delete a[b("DataStoreConfig").expandoKey];
        return a
    }
    e.exports = a
}), null);
__d("FileInput", ["cx", "ArbiterMixin", "DOM", "DOMClone", "Event", "Focus", "Keys", "UserAgent_DEPRECATED", "mixin"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = b("UserAgent_DEPRECATED").ie();
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c(c, d, e) {
            __p && __p();
            var f;
            f = a.call(this) || this;
            f.container = c;
            f.control = d;
            c = b("DOM").scry(f.container, "a")[0];
            c && c.removeAttribute("href");
            d = b("DOM").create("div", {
                className: "_3jk"
            }, e);
            b("DOM").appendContent(f.control, d);
            f._boundHandleChange = f._handleChange.bind(babelHelpers.assertThisInitialized(f));
            h && (f._boundHandleIEKeyDown = f._handleIEKeyDown.bind(babelHelpers.assertThisInitialized(f)));
            f._setInputElement(e);
            return f
        }
        var d = c.prototype;
        d.getValue = function() {
            return this.input.value
        };
        d.getInput = function() {
            return this.input
        };
        d.getContainer = function() {
            return this.container
        };
        d.getControl = function() {
            return this.control
        };
        d.clear = function() {
            this.input.value = "";
            if (this.input.value !== "") {
                var a = b("DOMClone").deepClone(this.input);
                b("DOM").replace(this.input, a);
                this._setInputElement(a)
            }
        };
        d.destroy = function() {
            this._focus.remove(), this._focus = null, this._listener.remove(), this._listener = null, h && (this._IEKeyDownListener.remove(), this._IEKeyDownListener = null), this.container = null, this.control = null, this.input = null
        };
        d._setInputElement = function(a) {
            this.input = a, this._focus && this._focus.remove(), this._focus = b("Focus").relocate(a, this.control), this._listener && this._listener.remove(), this._listener = b("Event").listen(a, "change", this._boundHandleChange), h && (this._IEKeyDownListener && this._IEKeyDownListener.remove(), this._IEKeyDownListener = b("Event").listen(a, "keydown", this._boundHandleIEKeyDown))
        };
        d._handleChange = function(a) {
            this.inform("change", a);
            if (this.input) {
                var c = this.input.form;
                c && h < 9 && b("Event").fire(c, "change", a)
            }
        };
        d._handleIEKeyDown = function(a) {
            if (a.keyCode === b("Keys").RETURN) {
                a.preventDefault();
                a = document.createEvent("MouseEvents");
                a.initEvent("click", !0, !0);
                this.input.dispatchEvent(a)
            }
        };
        return c
    }(b("mixin")(b("ArbiterMixin")));
    e.exports = a
}), null);
__d("ViewportTrackingHelper", ["DOMDimensions", "ge", "getElementPosition", "getElementRect", "getViewportDimensions"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = {
        isDescendantOf: function(a, b) {
            if (a === b) return !0;
            while (a && a.parentElement) {
                if (a.parentElement === b) return !0;
                a = a.parentElement
            }
            return !1
        },
        isVisible: function(a, c) {
            return g.isVisibleInDimension(b("getViewportDimensions")(), a, c)
        },
        isVisibleUnderBluebar: function(a, c) {
            var d = b("ge")("pagelet_bluebar");
            return d == null ? g.isVisible(a, c) : g.isVisibleInDimension(b("getViewportDimensions")(), a, c, d.clientHeight)
        },
        isFullyVisibleInContainer: function(a, c) {
            a = b("getElementRect")(a);
            c = b("getElementRect")(c);
            return c.top >= a.top && c.bottom <= a.bottom && c.left >= a.left && c.right <= a.right
        },
        isVisibleInDimension: function(a, c, d, e) {
            e === void 0 && (e = 0);
            var f = b("getElementPosition")(c);
            c = b("DOMDimensions").getElementDimensions(c);
            if (!f.x && !f.y && !c.height && !c.width) return !1;
            e = Math.max(f.y, e);
            f = Math.min(f.y + c.height, a.height);
            a = Math.min(c.height, d);
            return f - e >= a
        },
        getHeightIfVisible: function(a, c) {
            var d = this.getHeightInViewport(a);
            a = b("DOMDimensions").getElementDimensions(a);
            a = Math.min(a.height, c);
            return d >= a ? d : 0
        },
        getHeightInViewport: function(a) {
            var c = b("getElementPosition")(a);
            a = b("DOMDimensions").getElementDimensions(a);
            if (!c.x && !c.y && !a.x && !a.y) return 0;
            var d = b("getViewportDimensions")().height,
                e = Math.max(c.y, 0);
            c = Math.min(c.y + a.height, d);
            return c - e
        },
        getElementsInViewIgnoreHeight: function(a) {
            var b = !1,
                c = [];
            for (var d = 0; d < a.length; d++) {
                var e = a[d];
                if (this.isVisible(e, 0, null)) c.push(e), b = !0;
                else if (b) break
            }
            return c
        }
    };
    e.exports = g
}), null);
__d("getFullScreenElement", [], (function(a, b, c, d, e, f) {
    function a() {
        return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
    }
    e.exports = a
}), null);
__d("VideoPlayerVolumeSettings", ["WebStorage"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g;
    a = function() {
        "use strict";
        __p && __p();

        function a() {
            this.$1 = 1, this.$2 = 1
        }
        var c = a.prototype;
        c.getVolume = function() {
            var a = (g || (g = b("WebStorage"))).getLocalStorage();
            if (a) {
                a = a.getItem("videoPlayerControllerVolume");
                return a === null || isNaN(+a) ? 1 : +a
            }
            return this.$1
        };
        c.getSessionVolume = function() {
            return this.$1
        };
        c.setSessionVolume = function(a) {
            this.$1 = a
        };
        c.saveVolume = function(a) {
            var c = (g || (g = b("WebStorage"))).getLocalStorage();
            c && c.setItem("videoPlayerControllerVolume", a);
            this.$1 = a
        };
        c.getLastVolumeBeforeMute = function() {
            var a = (g || (g = b("WebStorage"))).getLocalStorage();
            if (a) {
                a = a.getItem("videoPlayerControllerLastVolumeBeforeMute");
                return a === null || isNaN(+a) ? 1 : +a
            }
            return this.$2
        };
        c.saveLastVolumeBeforeMute = function(a) {
            var c = (g || (g = b("WebStorage"))).getLocalStorage();
            c && c.setItem("videoPlayerControllerLastVolumeBeforeMute", a);
            this.$2 = a
        };
        return a
    }();
    c = new a();
    e.exports = c
}), null);
__d("HTMLMediaElementReadyStates", [], (function(a, b, c, d, e, f) {
    a = {
        HAVE_NOTHING: 0,
        HAVE_METADATA: 1,
        HAVE_CURRENT_DATA: 2,
        HAVE_FUTURE_DATA: 3,
        HAVE_ENOUGH_DATA: 4
    };
    e.exports = a
}), null);
__d("VideoFrameBuffer", ["HTMLMediaElementReadyStates"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a, b, c, d, e, f, g) {
            d === void 0 && (d = null), e === void 0 && (e = null), f === void 0 && (f = null), g === void 0 && (g = null), this.$2 = b, this.$1 = a, this.$3 = c || "contain", this.$6 = d, this.$7 = e, this.$8 = f, this.$9 = g
        }
        var c = a.prototype;
        c.updateFrameBuffer = function() {
            __p && __p();
            this.$4 && (this.$1.width = this.$4, this.$4 = null);
            this.$5 && (this.$1.height = this.$5, this.$5 = null);
            if (this.$2.readyState < b("HTMLMediaElementReadyStates").HAVE_CURRENT_DATA) return;
            var a = this.$1.clientWidth || this.$1.width,
                c = this.$1.clientHeight || this.$1.height,
                d = a,
                e = c,
                f = this.$2.videoWidth / this.$2.videoHeight,
                g = d / e;
            this.$3 === "cover" && (g *= -1, f *= -1);
            g > f ? d = e * f : g < f && (e = d / f);
            g = this.$1.getContext("2d");
            if (!(g instanceof window.CanvasRenderingContext2D)) return;
            try {
                if (this.$6 || this.$7) {
                    g.drawImage(this.$2, (f = this.$8) != null ? f : 0, (f = this.$9) != null ? f : 0, (f = this.$6) != null ? f : a, (f = this.$7) != null ? f : c, 0, 0, a, c)
                } else g.drawImage(this.$2, (a - d) / 2, (c - e) / 2, d, e)
            } catch (a) {
                if (a.name !== "NS_ERROR_NOT_AVAILABLE") throw a
            }
        };
        c.getDOMNode = function() {
            return this.$1
        };
        c.updateDimensions = function(a, b) {
            this.$4 = a, this.$5 = b
        };
        return a
    }();
    e.exports = a
}), null);
__d("Network", ["mixInEventEmitter"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = !0,
        h = a.navigator.connection,
        i = {
            0: "unknown",
            1: "ethernet",
            2: "wifi",
            3: "2g",
            4: "3g"
        };

    function c() {
        return g
    }

    function d(a) {
        if (a == g) return;
        g = a;
        l.emit(a ? "online" : "offline")
    }

    function f() {
        return h ? h.bandwidth : g ? Infinity : 0
    }

    function j() {
        return h ? h.metered : !1
    }

    function k() {
        var a = h ? String(h.type) : "0";
        return i[a] || a
    }
    var l = {
        getBandwidth: f,
        getType: k,
        isMetered: j,
        isOnline: c,
        setOnline: d
    };
    b("mixInEventEmitter")(l, {
        online: !0,
        offline: !0
    });
    l = l;
    a.addEventListener ? (a.addEventListener("online", d.bind(null, !0)), a.addEventListener("offline", d.bind(null, !1))) : a.attachEvent && (a.attachEvent("online", d.bind(null, !0)), a.attachEvent("offline", d.bind(null, !1)));
    e.exports = l
}), null);
__d("enumerate", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(b) {
        return b.FB_enumerate
    }(a)
}), null);
__d("shallowArrayEqual", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a, b) {
        if (a === b) return !0;
        if (a.length !== b.length) return !1;
        for (var c = 0, d = a.length; c < d; c++)
            if (a[c] !== b[c]) return !1;
        return !0
    }
    e.exports = a
}), null);
__d("FluxContainerInstrumentation", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = null;

    function i(a, b, c) {
        c = c || b;
        var d = !1;
        if (typeof b.getDependencyStores === "function") {
            var e = b.getDependencyStores();
            for (var f = 0; f < e.length; f++) e[f].hasChanged() && (d = d || i(a, e[f], c))
        }
        d || (a.push(b.__moduleID || "unnamed_store"), d = !0);
        return d
    }
    var j = {
        updateTracking: null,
        inject: function(a) {
            h == null || g(0, 1394), h = a, a.updateTracking && (j.updateTracking = a.updateTracking)
        },
        hasInstrumentation: function() {
            return Boolean(h)
        },
        onInit: function(a) {
            h && h.init(a)
        },
        onCalculateStateStart: function(a) {
            return h ? h.calculateStateStart(a) : null
        },
        onDidUpdate: function(a, b, c, d, e, f) {
            h && h.didUpdate(a, b, c, d, e, f)
        },
        addStoreDependencies: i
    };
    e.exports = j
}), null);
__d("FluxContainerNameUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        if (a && b) try {
            Object.defineProperty(a, "name", {
                value: b
            })
        } catch (a) {}
        return a
    }
    e.exports = {
        nameContainer: a
    }
}), null);
__d("getUniformDispatcher", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        a && a.length || g(0, 18238);
        a = a[0].getDispatcher();
        return a
    }
    e.exports = a
}), null);
__d("FluxContainerSubscriptions", ["expectationViolation", "getUniformDispatcher", "gkx", "nullthrows", "shallowArrayEqual"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a(a, b) {
            this.$1 = [], this.$4 = a != null ? a : this.constructor.name, this.$5 = b
        }
        var c = a.prototype;
        c.setStores = function(a) {
            __p && __p();
            var c = this;
            if (this.$3 && b("shallowArrayEqual")(this.$3, a)) return;
            this.$3 = a;
            this.$8();
            this.$9();
            if (a.length === 0) {
                b("expectationViolation")("there should be at least 1 store in a flux subscription");
                return
            }
            var d = !1,
                e = [],
                f = !1,
                g = function() {
                    f = !1, d && (c.$1.forEach(function(a) {
                        return a()
                    }), d = !1)
                },
                h = b("getUniformDispatcher")(a),
                i = function() {
                    if (h.registerContainer != null) c.$7 = h.registerContainer(function(a) {
                        g()
                    }, c.$4);
                    else {
                        var b = a.map(function(a) {
                            return a.getDispatchToken()
                        });
                        c.$7 = h.register(function(a) {
                            h.waitFor(b), g()
                        }, c.$4, null, c.$4)
                    }
                    h.explicitlyRegisterStore && h.explicitlyRegisterStore(c)
                };
            this.$2 = a.map(function(a) {
                return a.addListener(function() {
                    d = !0, c.$5 != null && c.$5(a), b("gkx")("1091481") && (f || (f = !0, i()))
                })
            });
            b("gkx")("1091481") || i();
            this.$6 = h
        };
        c.addListener = function(a) {
            this.$1.push(a)
        };
        c.reset = function() {
            this.$8(), this.$9(), this.$10(), this.$11()
        };
        c.$8 = function() {
            this.$2 && (this.$2.forEach(function(a) {
                return a.remove()
            }), this.$2 = null)
        };
        c.$9 = function() {
            this.$6 && this.$7 != null && this.$6.unregister(this.$7), this.$6 = null, this.$7 = null
        };
        c.$11 = function() {
            this.$3 = null
        };
        c.$10 = function() {
            this.$1 = []
        };
        c.getDispatchToken = function() {
            return b("nullthrows")(this.$7, "dispatchToken must be set")
        };
        return a
    }();
    e.exports = a
}), null);
__d("getModuleNameFromFluxContainer", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function a(a) {
        if (a == null) return null;
        var b = a.match(/.* \[from (.*?)\]/);
        if (!b) return a;
        a = b[1];
        b = a.indexOf(".");
        return b > 0 ? a.substr(0, b) : a
    }
    e.exports = a
}), null);
__d("FluxContainer", ["FluxContainerInstrumentation", "FluxContainerNameUtils", "FluxContainerSubscriptions", "React", "getModuleNameFromFluxContainer", "gkx", "memoize", "shallowEqual", "warning"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = b("React").Component,
        h = b("React").PureComponent,
        i = b("gkx")("938344"),
        j = {
            pure: !0,
            pureProps: !1,
            withProps: !1,
            withContext: !1
        };

    function k(a, c) {
        __p && __p();
        var d = babelHelpers["extends"]({}, j, c || {}),
            e, f = d.name,
            g = function() {
                f = f || b("getModuleNameFromFluxContainer")(e ? e.displayName || e.name : null) || "FluxContainer(unknown)";
                return f
            },
            k = function(c, e, f) {
                e = d.withProps ? e : void 0;
                f = d.withContext ? f : void 0;
                var h = b("FluxContainerInstrumentation").onCalculateStateStart(g());
                c = a.calculateState(c, e, f);
                h && h();
                return c
            },
            m = null,
            n = function(c, e) {
                c = d.withProps ? c : void 0;
                e = d.withContext ? e : void 0;
                if (b("gkx")("1150097")) {
                    m === null && (m = a.getStores && a.getStores.length === 0 ? b("memoize")(a.getStores.bind(a)) : !1);
                    if (m) return m()
                }
                return a.getStores(c, e)
            };
        c = function(a) {
            __p && __p();
            babelHelpers.inheritsLoose(c, a);

            function c(c, d) {
                __p && __p();
                var f;
                f = a.call(this, c, d) || this;
                f.$BasicContainer2 = null;
                e || (e = f.constructor);
                f.$BasicContainer1 = new(b("FluxContainerSubscriptions"))(e.displayName || e.name, b("FluxContainerInstrumentation").hasInstrumentation() ? function(a) {
                    b("FluxContainerInstrumentation").updateTracking && b("FluxContainerInstrumentation").updateTracking.shouldRecord() && (f.$BasicContainer2 = f.$BasicContainer2 || [], b("FluxContainerInstrumentation").addStoreDependencies(f.$BasicContainer2, a))
                } : null);
                i || f.$BasicContainer3(c, d);
                c = k(void 0, c, d);
                b("FluxContainerInstrumentation").updateTracking && b("FluxContainerInstrumentation").updateTracking.initialState(babelHelpers.assertThisInitialized(f), g());
                f.state = babelHelpers["extends"]({}, f.state || {}, c);
                return f
            }
            var f = c.prototype;
            f.UNSAFE_componentWillReceiveProps = function(c, e) {
                __p && __p();
                var f = this;
                a.prototype.UNSAFE_componentWillReceiveProps && a.prototype.UNSAFE_componentWillReceiveProps.call(this, c, e);
                var h = !d.withProps || d.pureProps && b("shallowEqual")(c, this.props),
                    i = !d.withContext || d.pureProps && b("shallowEqual")(e, this.context);
                if (i && h) return;
                this.$BasicContainer1.setStores(n(c, e));
                var j = b("FluxContainerInstrumentation").updateTracking && b("FluxContainerInstrumentation").updateTracking.getCurrentDispatch();
                this.setState(function(a) {
                    b("FluxContainerInstrumentation").updateTracking && b("FluxContainerInstrumentation").updateTracking.receiveProps(f, g(), j);
                    return k(a, c, e)
                })
            };
            f.componentDidMount = function() {
                a.prototype.componentDidMount && a.prototype.componentDidMount.call(this), i && this.$BasicContainer3(this.props, this.context)
            };
            f.componentWillUnmount = function() {
                a.prototype.componentWillUnmount && a.prototype.componentWillUnmount.call(this), this.$BasicContainer1.reset()
            };
            f.$BasicContainer3 = function(a, c) {
                var d = this;
                this.$BasicContainer1.setStores(n(a, c));
                this.$BasicContainer1.addListener(function() {
                    var a = d.$BasicContainer2;
                    d.$BasicContainer2 = null;
                    var e = b("FluxContainerInstrumentation").updateTracking && b("FluxContainerInstrumentation").updateTracking.getCurrentDispatch();
                    d.setState(function(f, h) {
                        b("FluxContainerInstrumentation").updateTracking && b("FluxContainerInstrumentation").updateTracking.storeEmitChange(d, g(), a || [], e);
                        return k(f, h, c)
                    })
                })
            };
            return c
        }(a);
        c = d.pure && !(a.prototype instanceof h) ? l(c) : c;
        if (b("FluxContainerInstrumentation").hasInstrumentation()) {
            var o = !1;
            c = function(a) {
                babelHelpers.inheritsLoose(c, a);

                function c(c, d) {
                    c = a.call(this, c, d) || this;
                    o || (b("FluxContainerInstrumentation").onInit(c.constructor), o = !0);
                    return c
                }
                var d = c.prototype;
                d.componentDidUpdate = function(c, d) {
                    a.prototype.componentDidUpdate && a.prototype.componentDidUpdate.call(this, c, d), b("FluxContainerInstrumentation").onDidUpdate(this, g(), c, this.props, d, this.state)
                };
                return c
            }(c)
        }
        b("FluxContainerNameUtils").nameContainer(c, d.name || a.displayName || a.name);
        return c
    }

    function l(a) {
        __p && __p();
        a = function(c) {
            __p && __p();
            babelHelpers.inheritsLoose(a, c);

            function a() {
                var a, b;
                for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
                return (a = b = c.call.apply(c, [this].concat(e)) || this, b.isPureFluxContainer = !0, a) || babelHelpers.assertThisInitialized(b)
            }
            var d = a.prototype;
            d.shouldComponentUpdate = function(a, c) {
                return !b("shallowEqual")(this.props, a) || !b("shallowEqual")(this.state, c)
            };
            return a
        }(a);
        return a
    }

    function a(a, b, c, d) {
        __p && __p();
        var e = function(e) {
            __p && __p();
            babelHelpers.inheritsLoose(d, e);

            function d() {
                return e.apply(this, arguments) || this
            }
            d.getStores = function(b) {
                function a(a, c) {
                    return b.apply(this, arguments)
                }
                a.toString = function() {
                    return b.toString()
                };
                return a
            }(function(a, c) {
                return b(a, c)
            });
            d.calculateState = function(b) {
                function a(a, c, d) {
                    return b.apply(this, arguments)
                }
                a.toString = function() {
                    return b.toString()
                };
                return a
            }(function(a, b, d) {
                return c(a, b, d)
            });
            var f = d.prototype;
            f.render = function() {
                return a(this.state)
            };
            return d
        }(g);
        return k(e, d)
    }
    e.exports = {
        create: k,
        createFunctional: a
    }
}), null);
__d("ImmutableValue", ["invariant", "isNode"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = "_DONT_EVER_TYPE_THIS_SECRET_KEY";
    a = function() {
        __p && __p();

        function a(b) {
            b === a[h] || g(0, 5608)
        }
        a.mergeAllPropertiesInto = function(a, b) {
            var c = b.length;
            for (var d = 0; d < c; d++) Object.assign(a, b[d])
        };
        a.deepFreezeRootNode = function(c) {
            if (b("isNode")(c)) return;
            Object.freeze(c);
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && a.recurseDeepFreeze(c[d]);
            Object.seal(c)
        };
        a.recurseDeepFreeze = function(c) {
            if (b("isNode")(c) || !a.shouldRecurseFreeze(c)) return;
            Object.freeze(c);
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && a.recurseDeepFreeze(c[d]);
            Object.seal(c)
        };
        a.shouldRecurseFreeze = function(b) {
            return typeof b === "object" && !(b instanceof a) && b !== null
        };
        return a
    }();
    a._DONT_EVER_TYPE_THIS_SECRET_KEY = Math.random();
    e.exports = a
}), null);
__d("mergeHelpers", ["invariant", "FbtResultBase"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = 36,
        i = function(a) {
            return typeof a !== "object" || a instanceof Date || a === null || a instanceof b("FbtResultBase")
        },
        j = {
            MAX_MERGE_DEPTH: h,
            isTerminal: i,
            normalizeMergeArg: function(a) {
                return a == null ? {} : a
            },
            checkMergeArrayArgs: function(a, b) {
                Array.isArray(a) && Array.isArray(b) || g(0, 3714, a, b)
            },
            checkMergeObjectArgs: function(a, b) {
                j.checkMergeObjectArg(a), j.checkMergeObjectArg(b)
            },
            checkMergeObjectArg: function(a) {
                !i(a) && !Array.isArray(a) || g(0, 3715, a)
            },
            checkMergeIntoObjectArg: function(a) {
                (!i(a) || typeof a === "function") && !Array.isArray(a) || g(0, 3716, a)
            },
            checkMergeLevel: function(a) {
                a < h || g(0, 3717)
            },
            checkArrayStrategy: function(a) {
                a == null || a in j.ArrayStrategies || g(0, 3718)
            },
            ArrayStrategies: {
                Clobber: "Clobber",
                Concat: "Concat",
                IndexByIndex: "IndexByIndex"
            }
        };
    e.exports = j
}), null);
__d("ImmutableObject", ["invariant", "ImmutableValue", "mergeHelpers"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = b("mergeHelpers").checkMergeObjectArgs,
        i = b("mergeHelpers").isTerminal,
        j = "_DONT_EVER_TYPE_THIS_SECRET_KEY";

    function k(a) {
        a instanceof b("ImmutableValue") || g(0, 3884)
    }
    var l = function(c) {
        __p && __p();
        babelHelpers.inheritsLoose(a, c);

        function a() {
            var a;
            a = c.call(this, b("ImmutableValue")[j]) || this;
            b("ImmutableValue").mergeAllPropertiesInto(babelHelpers.assertThisInitialized(a), arguments);
            return a
        }
        a.create = function() {
            var b = Object.create(a.prototype);
            a.apply(b, arguments);
            return b
        };
        a.set = function(b, c) {
            k(b);
            typeof c === "object" && c !== void 0 && !Array.isArray(c) || g(0, 3885);
            return new a(b, c)
        };
        a.setProperty = function(b, c, d) {
            var e = {};
            e[c] = d;
            return a.set(b, e)
        };
        a.deleteProperty = function(b, c) {
            var d = {};
            for (var e in b) e !== c && Object.prototype.hasOwnProperty.call(b, e) && (d[e] = b[e]);
            return new a(d)
        };
        a.setDeep = function(a, b) {
            k(a);
            return m(a, b)
        };
        a.values = function(a) {
            return Object.keys(a).map(function(b) {
                return a[b]
            })
        };
        return a
    }(b("ImmutableValue"));

    function m(a, c) {
        __p && __p();
        h(a, c);
        var d = {},
            e = Object.keys(a);
        for (var f = 0; f < e.length; f++) {
            var g = e[f];
            !Object.prototype.hasOwnProperty.call(c, g) ? d[g] = a[g] : i(a[g]) || i(c[g]) ? d[g] = c[g] : d[g] = m(a[g], c[g])
        }
        g = Object.keys(c);
        for (f = 0; f < g.length; f++) {
            e = g[f];
            if (Object.prototype.hasOwnProperty.call(a, e)) continue;
            d[e] = c[e]
        }
        return a instanceof b("ImmutableValue") ? new l(d) : c instanceof b("ImmutableValue") ? new l(d) : d
    }
    e.exports = l
}), null);
__d("ServerHTML.react", ["React"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props,
                c = a.blob;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["blob"]);
            return typeof c === "string" ? b("React").jsx("div", babelHelpers["extends"]({}, a, {
                children: c
            })) : b("React").jsx("div", babelHelpers["extends"]({}, a, {
                dangerouslySetInnerHTML: c
            }))
        };
        return c
    }(b("React").Component);
    e.exports = a
}), null);
__d("ScrollBoundaryContain", ["Event", "Scroll", "UserAgent"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = function(a, c) {
            c.deliberateSync = !0;
            if (c.axis !== void 0 && c.axis === c.HORIZONTAL_AXIS || c.wheelDeltaX && !c.wheelDeltaY || c.deltaX && !c.deltaY) return;
            var d = c.wheelDelta || -c.deltaY || -c.detail,
                e = a.scrollHeight,
                f = a.clientHeight;
            if (e > f) {
                c.stopPropagation();
                a = b("Scroll").getTop(a);
                (d > 0 && a === 0 || d < 0 && a >= e - f - 1) && c.preventDefault()
            }
        },
        h = void 0,
        i = function() {
            if (h) return h;
            h = b("UserAgent").isBrowser("Firefox") ? "WheelEvent" in window ? "wheel" : "DOMMouseScroll" : "mousewheel";
            return h
        },
        j = function(a) {
            __p && __p();
            var c = g.bind(null, a),
                d = i(),
                e, f = b("Event").listen(a, "mouseenter", function() {
                    e == null && (e = b("Event").listen(a, d, c))
                }),
                h = b("Event").listen(a, "mouseleave", function() {
                    e && (e.remove(), e = null)
                }),
                j = !1;
            return {
                remove: function() {
                    if (j) return;
                    e && (e.remove(), e = null);
                    f.remove();
                    h.remove();
                    j = !0
                }
            }
        },
        k = function(a) {
            a.deliberateSync = !0, this.scrollHeight > this.clientHeight && a.stopPropagation()
        },
        l = function(a) {
            var c = b("Event").listen(a, i(), k, null, {
                    passive: !0
                }),
                d = !1;
            return {
                remove: function() {
                    if (d) return;
                    c.remove();
                    d = !0
                }
            }
        };
    a = {
        applyToElem: function(a) {
            if ("overscrollBehavior" in a.style) {
                a.style.overscrollBehavior = "contain";
                return l(a)
            } else {
                a.style.msScrollChaining !== void 0 && (a.style.msScrollChaining = "none");
                return j(a)
            }
        }
    };
    e.exports = a
}), null);
__d("getByPath", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function a(a, b, c) {
        a = a;
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            if (a && typeof a !== "string" && typeof a !== "number" && e in a) a = a[e];
            else return c
        }
        return a
    }
    e.exports = a
}), null);
__d("immutable", [], (function(a, b, c, d, e, f) {
    (function(b, c) {
        typeof f === "object" && typeof e !== "undefined" ? e.exports = c() : typeof define === "function" && define.amd ? define(c) : b.Immutable = c()
    })(this, function() {
        "use strict";
        var a = Array.prototype.slice;

        function b(a, b) {
            b && (a.prototype = Object.create(b.prototype)), a.prototype.constructor = a
        }
        var c = "delete",
            d = 5,
            e = 1 << d,
            f = e - 1,
            g = {},
            h = {
                value: !1
            },
            i = {
                value: !1
            };

        function j(a) {
            a.value = !1;
            return a
        }

        function k(a) {
            a && (a.value = !0)
        }

        function l() {}

        function m(a, b) {
            b = b || 0;
            var c = Math.max(0, a.length - b),
                d = new Array(c);
            for (var e = 0; e < c; e++) d[e] = a[e + b];
            return d
        }

        function n(a) {
            a.size === void 0 && (a.size = a.__iterate(p));
            return a.size
        }

        function o(a, b) {
            return b >= 0 ? +b : n(a) + +b
        }

        function p() {
            return !0
        }

        function q(a, b, c) {
            return (a === 0 || c !== void 0 && a <= -c) && (b === void 0 || c !== void 0 && b >= c)
        }

        function r(a, b) {
            return aa(a, b, 0)
        }

        function s(a, b) {
            return aa(a, b, b)
        }

        function aa(a, b, c) {
            return a === void 0 ? c : a < 0 ? Math.max(0, b + a) : b === void 0 ? a : Math.min(b, a)
        }

        function t(a) {
            return x(a) ? a : F(a)
        }
        b(u, t);

        function u(a) {
            return y(a) ? a : G(a)
        }
        b(v, t);

        function v(a) {
            return z(a) ? a : H(a)
        }
        b(w, t);

        function w(a) {
            return x(a) && !ba(a) ? a : I(a)
        }

        function x(a) {
            return !!(a && a[da])
        }

        function y(a) {
            return !!(a && a[ea])
        }

        function z(a) {
            return !!(a && a[fa])
        }

        function ba(a) {
            return y(a) || z(a)
        }

        function ca(a) {
            return !!(a && a[ga])
        }
        t.isIterable = x;
        t.isKeyed = y;
        t.isIndexed = z;
        t.isAssociative = ba;
        t.isOrdered = ca;
        t.Keyed = u;
        t.Indexed = v;
        t.Set = w;
        var da = "@@__IMMUTABLE_ITERABLE__@@",
            ea = "@@__IMMUTABLE_KEYED__@@",
            fa = "@@__IMMUTABLE_INDEXED__@@",
            ga = "@@__IMMUTABLE_ORDERED__@@",
            ha = 0,
            A = 1,
            B = 2,
            ia = typeof Symbol === "function" && Symbol.iterator,
            ja = "@@iterator",
            ka = ia || ja;

        function C(a) {
            this.next = a
        }
        C.prototype.toString = function() {
            return "[Iterator]"
        };
        C.KEYS = ha;
        C.VALUES = A;
        C.ENTRIES = B;
        C.prototype.inspect = C.prototype.toSource = function() {
            return this.toString()
        };
        C.prototype[ka] = function() {
            return this
        };

        function D(a, b, c, d) {
            a = a === 0 ? b : a === 1 ? c : [b, c];
            d ? d.value = a : d = {
                value: a,
                done: !1
            };
            return d
        }

        function E() {
            return {
                value: void 0,
                done: !0
            }
        }

        function la(a) {
            return !!oa(a)
        }

        function ma(a) {
            return a && typeof a.next === "function"
        }

        function na(a) {
            var b = oa(a);
            return b && b.call(a)
        }

        function oa(a) {
            a = a && (ia && a[ia] || a[ja]);
            if (typeof a === "function") return a
        }

        function pa(a) {
            return a && typeof a.length === "number"
        }
        b(F, t);

        function F(a) {
            return a === null || a === void 0 ? xa() : x(a) ? a.toSeq() : Aa(a)
        }
        F.of = function() {
            return F(arguments)
        };
        F.prototype.toSeq = function() {
            return this
        };
        F.prototype.toString = function() {
            return this.__toString("Seq {", "}")
        };
        F.prototype.cacheResult = function() {
            !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), this.size = this._cache.length);
            return this
        };
        F.prototype.__iterate = function(a, b) {
            return Ca(this, a, b, !0)
        };
        F.prototype.__iterator = function(a, b) {
            return Da(this, a, b, !0)
        };
        b(G, F);

        function G(a) {
            return a === null || a === void 0 ? xa().toKeyedSeq() : x(a) ? y(a) ? a.toSeq() : a.fromEntrySeq() : ya(a)
        }
        G.prototype.toKeyedSeq = function() {
            return this
        };
        b(H, F);

        function H(a) {
            return a === null || a === void 0 ? xa() : x(a) ? y(a) ? a.entrySeq() : a.toIndexedSeq() : za(a)
        }
        H.of = function() {
            return H(arguments)
        };
        H.prototype.toIndexedSeq = function() {
            return this
        };
        H.prototype.toString = function() {
            return this.__toString("Seq [", "]")
        };
        H.prototype.__iterate = function(a, b) {
            return Ca(this, a, b, !1)
        };
        H.prototype.__iterator = function(a, b) {
            return Da(this, a, b, !1)
        };
        b(I, F);

        function I(a) {
            return (a === null || a === void 0 ? xa() : x(a) ? y(a) ? a.entrySeq() : a : za(a)).toSetSeq()
        }
        I.of = function() {
            return I(arguments)
        };
        I.prototype.toSetSeq = function() {
            return this
        };
        F.isSeq = va;
        F.Keyed = G;
        F.Set = I;
        F.Indexed = H;
        var qa = "@@__IMMUTABLE_SEQ__@@";
        F.prototype[qa] = !0;
        b(ra, H);

        function ra(a) {
            this._array = a, this.size = a.length
        }
        ra.prototype.get = function(a, b) {
            return this.has(a) ? this._array[o(this, a)] : b
        };
        ra.prototype.__iterate = function(a, b) {
            var c = this._array,
                d = c.length - 1;
            for (var e = 0; e <= d; e++)
                if (a(c[b ? d - e : e], e, this) === !1) return e + 1;
            return e
        };
        ra.prototype.__iterator = function(a, b) {
            var c = this._array,
                d = c.length - 1,
                e = 0;
            return new C(function() {
                return e > d ? E() : D(a, e, c[b ? d - e++ : e++])
            })
        };
        b(sa, G);

        function sa(a) {
            var b = Object.keys(a);
            this._object = a;
            this._keys = b;
            this.size = b.length
        }
        sa.prototype.get = function(a, b) {
            return b !== void 0 && !this.has(a) ? b : this._object[a]
        };
        sa.prototype.has = function(a) {
            return this._object.hasOwnProperty(a)
        };
        sa.prototype.__iterate = function(a, b) {
            var c = this._object,
                d = this._keys,
                e = d.length - 1;
            for (var f = 0; f <= e; f++) {
                var g = d[b ? e - f : f];
                if (a(c[g], g, this) === !1) return f + 1
            }
            return f
        };
        sa.prototype.__iterator = function(a, b) {
            var c = this._object,
                d = this._keys,
                e = d.length - 1,
                f = 0;
            return new C(function() {
                var g = d[b ? e - f : f];
                return f++ > e ? E() : D(a, g, c[g])
            })
        };
        sa.prototype[ga] = !0;
        b(ta, H);

        function ta(a) {
            this._iterable = a, this.size = a.length || a.size
        }
        ta.prototype.__iterateUncached = function(a, b) {
            if (b) return this.cacheResult().__iterate(a, b);
            b = this._iterable;
            b = na(b);
            var c = 0;
            if (ma(b)) {
                var d;
                while (!(d = b.next()).done)
                    if (a(d.value, c++, this) === !1) break
            }
            return c
        };
        ta.prototype.__iteratorUncached = function(a, b) {
            if (b) return this.cacheResult().__iterator(a, b);
            b = this._iterable;
            var c = na(b);
            if (!ma(c)) return new C(E);
            var d = 0;
            return new C(function() {
                var b = c.next();
                return b.done ? b : D(a, d++, b.value)
            })
        };
        b(ua, H);

        function ua(a) {
            this._iterator = a, this._iteratorCache = []
        }
        ua.prototype.__iterateUncached = function(a, b) {
            if (b) return this.cacheResult().__iterate(a, b);
            b = this._iterator;
            var c = this._iteratorCache,
                d = 0;
            while (d < c.length)
                if (a(c[d], d++, this) === !1) return d;
            var e;
            while (!(e = b.next()).done) {
                e = e.value;
                c[d] = e;
                if (a(e, d++, this) === !1) break
            }
            return d
        };
        ua.prototype.__iteratorUncached = function(a, b) {
            if (b) return this.cacheResult().__iterator(a, b);
            var c = this._iterator,
                d = this._iteratorCache,
                e = 0;
            return new C(function() {
                if (e >= d.length) {
                    var b = c.next();
                    if (b.done) return b;
                    d[e] = b.value
                }
                return D(a, e, d[e++])
            })
        };

        function va(a) {
            return !!(a && a[qa])
        }
        var wa;

        function xa() {
            return wa || (wa = new ra([]))
        }

        function ya(a) {
            var b = Array.isArray(a) ? new ra(a).fromEntrySeq() : ma(a) ? new ua(a).fromEntrySeq() : la(a) ? new ta(a).fromEntrySeq() : typeof a === "object" ? new sa(a) : void 0;
            if (!b) throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + a);
            return b
        }

        function za(a) {
            var b = Ba(a);
            if (!b) throw new TypeError("Expected Array or iterable object of values: " + a);
            return b
        }

        function Aa(a) {
            var b = Ba(a) || typeof a === "object" && new sa(a);
            if (!b) throw new TypeError("Expected Array or iterable object of values, or keyed object: " + a);
            return b
        }

        function Ba(a) {
            return pa(a) ? new ra(a) : ma(a) ? new ua(a) : la(a) ? new ta(a) : void 0
        }

        function Ca(a, b, c, d) {
            var e = a._cache;
            if (e) {
                var f = e.length - 1;
                for (var g = 0; g <= f; g++) {
                    var h = e[c ? f - g : g];
                    if (b(h[1], d ? h[0] : g, a) === !1) return g + 1
                }
                return g
            }
            return a.__iterateUncached(b, c)
        }

        function Da(a, b, c, d) {
            var e = a._cache;
            if (e) {
                var f = e.length - 1,
                    g = 0;
                return new C(function() {
                    var a = e[c ? f - g : g];
                    return g++ > f ? E() : D(b, d ? a[0] : g - 1, a[1])
                })
            }
            return a.__iteratorUncached(b, c)
        }
        b(Ea, t);

        function Ea() {
            throw TypeError("Abstract")
        }
        b(Fa, Ea);

        function Fa() {}
        b(Ga, Ea);

        function Ga() {}
        b(Ha, Ea);

        function Ha() {}
        Ea.Keyed = Fa;
        Ea.Indexed = Ga;
        Ea.Set = Ha;

        function J(a, b) {
            if (a === b || a !== a && b !== b) return !0;
            if (!a || !b) return !1;
            if (typeof a.valueOf === "function" && typeof b.valueOf === "function") {
                a = a.valueOf();
                b = b.valueOf();
                if (a === b || a !== a && b !== b) return !0;
                if (!a || !b) return !1
            }
            return typeof a.equals === "function" && typeof b.equals === "function" && a.equals(b) ? !0 : !1
        }

        function Ia(a, b) {
            return b ? Ja(b, a, "", {
                "": a
            }) : Ka(a)
        }

        function Ja(a, b, c, d) {
            if (Array.isArray(b)) return a.call(d, c, H(b).map(function(c, d) {
                return Ja(a, c, d, b)
            }));
            return La(b) ? a.call(d, c, G(b).map(function(c, d) {
                return Ja(a, c, d, b)
            })) : b
        }

        function Ka(a) {
            if (Array.isArray(a)) return H(a).map(Ka).toList();
            return La(a) ? G(a).map(Ka).toMap() : a
        }

        function La(a) {
            return a && (a.constructor === Object || a.constructor === void 0)
        }
        var Ma = typeof Math.imul === "function" && Math.imul(4294967295, 2) === -2 ? Math.imul : function(a, b) {
            a = a | 0;
            b = b | 0;
            var c = a & 65535,
                d = b & 65535;
            return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16 >>> 0) | 0
        };

        function Na(a) {
            return a >>> 1 & 1073741824 | a & 3221225471
        }

        function K(a) {
            if (a === !1 || a === null || a === void 0) return 0;
            if (typeof a.valueOf === "function") {
                a = a.valueOf();
                if (a === !1 || a === null || a === void 0) return 0
            }
            if (a === !0) return 1;
            var b = typeof a;
            if (b === "number") {
                var c = a | 0;
                c !== a && (c ^= a * 4294967295);
                while (a > 4294967295) a /= 4294967295, c ^= a;
                return Na(c)
            }
            if (b === "string") return a.length > Ya ? Oa(a) : Pa(a);
            return typeof a.hashCode === "function" ? a.hashCode() : Qa(a)
        }

        function Oa(b) {
            var a = ab[b];
            a === void 0 && (a = Pa(b), $a === Za && ($a = 0, ab = {}), $a++, ab[b] = a);
            return a
        }

        function Pa(b) {
            var a = 0;
            for (var c = 0; c < b.length; c++) a = 31 * a + b.charCodeAt(c) | 0;
            return Na(a)
        }

        function Qa(b) {
            var a;
            if (Ua) {
                a = Va.get(b);
                if (a !== void 0) return a
            }
            a = b[Xa];
            if (a !== void 0) return a;
            if (!Sa) {
                a = b.propertyIsEnumerable && b.propertyIsEnumerable[Xa];
                if (a !== void 0) return a;
                a = Ta(b);
                if (a !== void 0) return a
            }
            a = ++Wa;
            Wa & 1073741824 && (Wa = 0);
            if (Ua) Va.set(b, a);
            else if (Ra !== void 0 && Ra(b) === !1) throw new Error("Non-extensible objects are not allowed as keys.");
            else if (Sa) Object.defineProperty(b, Xa, {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: a
            });
            else if (b.propertyIsEnumerable !== void 0 && b.propertyIsEnumerable === b.constructor.prototype.propertyIsEnumerable) b.propertyIsEnumerable = function() {
                return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments)
            }, b.propertyIsEnumerable[Xa] = a;
            else if (b.nodeType !== void 0) b[Xa] = a;
            else throw new Error("Unable to set a non-enumerable property on object.");
            return a
        }
        var Ra = Object.isExtensible,
            Sa = function() {
                try {
                    Object.defineProperty({}, "@", {});
                    return !0
                } catch (a) {
                    return !1
                }
            }();

        function Ta(a) {
            if (a && a.nodeType > 0) switch (a.nodeType) {
                case 1:
                    return a.uniqueID;
                case 9:
                    return a.documentElement && a.documentElement.uniqueID
            }
        }
        var Ua = typeof WeakMap === "function",
            Va;
        Ua && (Va = new WeakMap());
        var Wa = 0,
            Xa = "__immutablehash__";
        typeof Symbol === "function" && (Xa = Symbol(Xa));
        var Ya = 16,
            Za = 255,
            $a = 0,
            ab = {};

        function bb(a, b) {
            if (!a) throw new Error(b)
        }

        function L(a) {
            bb(a !== Infinity, "Cannot perform this action with an infinite size.")
        }
        b(M, G);

        function M(a, b) {
            this._iter = a, this._useKeys = b, this.size = a.size
        }
        M.prototype.get = function(a, b) {
            return this._iter.get(a, b)
        };
        M.prototype.has = function(a) {
            return this._iter.has(a)
        };
        M.prototype.valueSeq = function() {
            return this._iter.valueSeq()
        };
        M.prototype.reverse = function() {
            var a = this,
                b = hb(this, !0);
            this._useKeys || (b.valueSeq = function() {
                return a._iter.toSeq().reverse()
            });
            return b
        };
        M.prototype.map = function(a, b) {
            var c = this,
                d = gb(this, a, b);
            this._useKeys || (d.valueSeq = function() {
                return c._iter.toSeq().map(a, b)
            });
            return d
        };
        M.prototype.__iterate = function(a, b) {
            var c = this,
                d;
            return this._iter.__iterate(this._useKeys ? function(b, d) {
                return a(b, d, c)
            } : (d = b ? xb(this) : 0, function(e) {
                return a(e, b ? --d : d++, c)
            }), b)
        };
        M.prototype.__iterator = function(a, b) {
            if (this._useKeys) return this._iter.__iterator(a, b);
            var c = this._iter.__iterator(A, b),
                d = b ? xb(this) : 0;
            return new C(function() {
                var e = c.next();
                return e.done ? e : D(a, b ? --d : d++, e.value, e)
            })
        };
        M.prototype[ga] = !0;
        b(cb, H);

        function cb(a) {
            this._iter = a, this.size = a.size
        }
        cb.prototype.includes = function(a) {
            return this._iter.includes(a)
        };
        cb.prototype.__iterate = function(a, b) {
            var c = this,
                d = 0;
            return this._iter.__iterate(function(b) {
                return a(b, d++, c)
            }, b)
        };
        cb.prototype.__iterator = function(a, b) {
            var c = this._iter.__iterator(A, b),
                d = 0;
            return new C(function() {
                var b = c.next();
                return b.done ? b : D(a, d++, b.value, b)
            })
        };
        b(db, I);

        function db(a) {
            this._iter = a, this.size = a.size
        }
        db.prototype.has = function(a) {
            return this._iter.includes(a)
        };
        db.prototype.__iterate = function(a, b) {
            var c = this;
            return this._iter.__iterate(function(b) {
                return a(b, b, c)
            }, b)
        };
        db.prototype.__iterator = function(a, b) {
            var c = this._iter.__iterator(A, b);
            return new C(function() {
                var b = c.next();
                return b.done ? b : D(a, b.value, b.value, b)
            })
        };
        b(eb, G);

        function eb(a) {
            this._iter = a, this.size = a.size
        }
        eb.prototype.entrySeq = function() {
            return this._iter.toSeq()
        };
        eb.prototype.__iterate = function(a, b) {
            var c = this;
            return this._iter.__iterate(function(b) {
                if (b) {
                    wb(b);
                    var d = x(b);
                    return a(d ? b.get(1) : b[1], d ? b.get(0) : b[0], c)
                }
            }, b)
        };
        eb.prototype.__iterator = function(a, b) {
            var c = this._iter.__iterator(A, b);
            return new C(function() {
                while (!0) {
                    var b = c.next();
                    if (b.done) return b;
                    var d = b.value;
                    if (d) {
                        wb(d);
                        var e = x(d);
                        return D(a, e ? d.get(0) : d[0], e ? d.get(1) : d[1], b)
                    }
                }
            })
        };
        cb.prototype.cacheResult = M.prototype.cacheResult = db.prototype.cacheResult = eb.prototype.cacheResult = Ab;

        function fb(a) {
            var b = zb(a);
            b._iter = a;
            b.size = a.size;
            b.flip = function() {
                return a
            };
            b.reverse = function() {
                var b = a.reverse.apply(this);
                b.flip = function() {
                    return a.reverse()
                };
                return b
            };
            b.has = function(b) {
                return a.includes(b)
            };
            b.includes = function(b) {
                return a.has(b)
            };
            b.cacheResult = Ab;
            b.__iterateUncached = function(b, c) {
                var d = this;
                return a.__iterate(function(a, c) {
                    return b(c, a, d) !== !1
                }, c)
            };
            b.__iteratorUncached = function(b, c) {
                if (b === B) {
                    var d = a.__iterator(b, c);
                    return new C(function() {
                        var a = d.next();
                        if (!a.done) {
                            var b = a.value[0];
                            a.value[0] = a.value[1];
                            a.value[1] = b
                        }
                        return a
                    })
                }
                return a.__iterator(b === A ? ha : A, c)
            };
            return b
        }

        function gb(a, b, c) {
            var d = zb(a);
            d.size = a.size;
            d.has = function(b) {
                return a.has(b)
            };
            d.get = function(d, e) {
                var f = a.get(d, g);
                return f === g ? e : b.call(c, f, d, a)
            };
            d.__iterateUncached = function(d, e) {
                var f = this;
                return a.__iterate(function(a, e, g) {
                    return d(b.call(c, a, e, g), e, f) !== !1
                }, e)
            };
            d.__iteratorUncached = function(d, e) {
                var f = a.__iterator(B, e);
                return new C(function() {
                    var e = f.next();
                    if (e.done) return e;
                    var g = e.value,
                        h = g[0];
                    return D(d, h, b.call(c, g[1], h, a), e)
                })
            };
            return d
        }

        function hb(a, b) {
            var c = zb(a);
            c._iter = a;
            c.size = a.size;
            c.reverse = function() {
                return a
            };
            a.flip && (c.flip = function() {
                var b = fb(a);
                b.reverse = function() {
                    return a.flip()
                };
                return b
            });
            c.get = function(c, d) {
                return a.get(b ? c : -1 - c, d)
            };
            c.has = function(c) {
                return a.has(b ? c : -1 - c)
            };
            c.includes = function(b) {
                return a.includes(b)
            };
            c.cacheResult = Ab;
            c.__iterate = function(b, c) {
                var d = this;
                return a.__iterate(function(a, c) {
                    return b(a, c, d)
                }, !c)
            };
            c.__iterator = function(b, c) {
                return a.__iterator(b, !c)
            };
            return c
        }

        function ib(a, b, c, d) {
            var e = zb(a);
            d && (e.has = function(d) {
                var e = a.get(d, g);
                return e !== g && !!b.call(c, e, d, a)
            }, e.get = function(d, e) {
                var f = a.get(d, g);
                return f !== g && b.call(c, f, d, a) ? f : e
            });
            e.__iterateUncached = function(e, f) {
                var g = this,
                    h = 0;
                a.__iterate(function(a, f, i) {
                    if (b.call(c, a, f, i)) {
                        h++;
                        return e(a, d ? f : h - 1, g)
                    }
                }, f);
                return h
            };
            e.__iteratorUncached = function(e, f) {
                var g = a.__iterator(B, f),
                    h = 0;
                return new C(function() {
                    while (!0) {
                        var f = g.next();
                        if (f.done) return f;
                        var i = f.value,
                            j = i[0];
                        i = i[1];
                        if (b.call(c, i, j, a)) return D(e, d ? j : h++, i, f)
                    }
                })
            };
            return e
        }

        function jb(a, b, c) {
            var d = O().asMutable();
            a.__iterate(function(e, f) {
                d.update(b.call(c, e, f, a), 0, function(a) {
                    return a + 1
                })
            });
            return d.asImmutable()
        }

        function kb(a, b, c) {
            var d = y(a),
                e = (ca(a) ? S() : O()).asMutable();
            a.__iterate(function(f, g) {
                e.update(b.call(c, f, g, a), function(a) {
                    return a = a || [], a.push(d ? [g, f] : f), a
                })
            });
            var f = yb(a);
            return e.map(function(b) {
                return N(a, f(b))
            })
        }

        function lb(a, b, c, d) {
            var e = a.size;
            if (q(b, c, e)) return a;
            var f = r(b, e);
            e = s(c, e);
            if (f !== f || e !== e) return lb(a.toSeq().cacheResult(), b, c, d);
            b = e - f;
            var g;
            b === b && (g = b < 0 ? 0 : b);
            c = zb(a);
            c.size = g;
            !d && va(a) && g >= 0 && (c.get = function(b, c) {
                b = o(this, b);
                return b >= 0 && b < g ? a.get(b + f, c) : c
            });
            c.__iterateUncached = function(b, c) {
                var e = this;
                if (g === 0) return 0;
                if (c) return this.cacheResult().__iterate(b, c);
                var h = 0,
                    i = !0,
                    j = 0;
                a.__iterate(function(a, c) {
                    if (!(i && (i = h++ < f))) {
                        j++;
                        return b(a, d ? c : j - 1, e) !== !1 && j !== g
                    }
                });
                return j
            };
            c.__iteratorUncached = function(b, c) {
                if (g !== 0 && c) return this.cacheResult().__iterator(b, c);
                var e = g !== 0 && a.__iterator(b, c),
                    h = 0,
                    i = 0;
                return new C(function() {
                    while (h++ < f) e.next();
                    if (++i > g) return E();
                    var a = e.next();
                    if (d || b === A) return a;
                    else if (b === ha) return D(b, i - 1, void 0, a);
                    else return D(b, i - 1, a.value[1], a)
                })
            };
            return c
        }

        function mb(a, b, c) {
            var d = zb(a);
            d.__iterateUncached = function(d, e) {
                var f = this;
                if (e) return this.cacheResult().__iterate(d, e);
                var g = 0;
                a.__iterate(function(a, e, h) {
                    return b.call(c, a, e, h) && ++g && d(a, e, f)
                });
                return g
            };
            d.__iteratorUncached = function(d, e) {
                var f = this;
                if (e) return this.cacheResult().__iterator(d, e);
                var g = a.__iterator(B, e),
                    h = !0;
                return new C(function() {
                    if (!h) return E();
                    var a = g.next();
                    if (a.done) return a;
                    var e = a.value,
                        i = e[0];
                    e = e[1];
                    if (!b.call(c, e, i, f)) {
                        h = !1;
                        return E()
                    }
                    return d === B ? a : D(d, i, e, a)
                })
            };
            return d
        }

        function nb(a, b, c, d) {
            var e = zb(a);
            e.__iterateUncached = function(e, f) {
                var g = this;
                if (f) return this.cacheResult().__iterate(e, f);
                var h = !0,
                    i = 0;
                a.__iterate(function(a, f, j) {
                    if (!(h && (h = b.call(c, a, f, j)))) {
                        i++;
                        return e(a, d ? f : i - 1, g)
                    }
                });
                return i
            };
            e.__iteratorUncached = function(e, f) {
                var g = this;
                if (f) return this.cacheResult().__iterator(e, f);
                var h = a.__iterator(B, f),
                    i = !0,
                    j = 0;
                return new C(function() {
                    var a, f;
                    do {
                        a = h.next();
                        if (a.done)
                            if (d || e === A) return a;
                            else if (e === ha) return D(e, j++, void 0, a);
                        else return D(e, j++, a.value[1], a);
                        var k = a.value;
                        f = k[0];
                        k = k[1];
                        i && (i = b.call(c, k, f, g))
                    } while (i);
                    return e === B ? a : D(e, f, k, a)
                })
            };
            return e
        }

        function ob(a, b) {
            var c = y(a);
            b = [a].concat(b).map(function(a) {
                !x(a) ? a = c ? ya(a) : za(Array.isArray(a) ? a : [a]) : c && (a = u(a));
                return a
            }).filter(function(a) {
                return a.size !== 0
            });
            if (b.length === 0) return a;
            if (b.length === 1) {
                var d = b[0];
                if (d === a || c && y(d) || z(a) && z(d)) return d
            }
            d = new ra(b);
            c ? d = d.toKeyedSeq() : z(a) || (d = d.toSetSeq());
            d = d.flatten(!0);
            d.size = b.reduce(function(a, b) {
                if (a !== void 0) {
                    b = b.size;
                    if (b !== void 0) return a + b
                }
            }, 0);
            return d
        }

        function pb(a, b, c) {
            var d = zb(a);
            d.__iterateUncached = function(d, e) {
                var f = 0,
                    g = !1;

                function h(a, i) {
                    var j = this;
                    a.__iterate(function(a, e) {
                        (!b || i < b) && x(a) ? h(a, i + 1) : d(a, c ? e : f++, j) === !1 && (g = !0);
                        return !g
                    }, e)
                }
                h(a, 0);
                return f
            };
            d.__iteratorUncached = function(d, e) {
                var f = a.__iterator(d, e),
                    g = [],
                    h = 0;
                return new C(function() {
                    while (f) {
                        var a = f.next();
                        if (a.done !== !1) {
                            f = g.pop();
                            continue
                        }
                        var i = a.value;
                        d === B && (i = i[1]);
                        if ((!b || g.length < b) && x(i)) g.push(f), f = i.__iterator(d, e);
                        else return c ? a : D(d, h++, i, a)
                    }
                    return E()
                })
            };
            return d
        }

        function qb(a, b, c) {
            var d = yb(a);
            return a.toSeq().map(function(e, f) {
                return d(b.call(c, e, f, a))
            }).flatten(!0)
        }

        function rb(a, b) {
            var c = zb(a);
            c.size = a.size && a.size * 2 - 1;
            c.__iterateUncached = function(c, d) {
                var e = this,
                    f = 0;
                a.__iterate(function(a, d) {
                    return (!f || c(b, f++, e) !== !1) && c(a, f++, e) !== !1
                }, d);
                return f
            };
            c.__iteratorUncached = function(c, d) {
                var e = a.__iterator(A, d),
                    f = 0,
                    g;
                return new C(function() {
                    if (!g || f % 2) {
                        g = e.next();
                        if (g.done) return g
                    }
                    return f % 2 ? D(c, f++, b) : D(c, f++, g.value, g)
                })
            };
            return c
        }

        function sb(a, b, c) {
            b || (b = Bb);
            var d = y(a),
                e = 0,
                f = a.toSeq().map(function(b, d) {
                    return [d, b, e++, c ? c(b, d, a) : b]
                }).toArray();
            f.sort(function(a, c) {
                return b(a[3], c[3]) || a[2] - c[2]
            }).forEach(d ? function(a, b) {
                f[b].length = 2
            } : function(a, b) {
                f[b] = a[1]
            });
            return d ? G(f) : z(a) ? H(f) : I(f)
        }

        function tb(a, b, c) {
            b || (b = Bb);
            if (c) {
                var d = a.toSeq().map(function(b, d) {
                    return [b, c(b, d, a)]
                }).reduce(function(a, c) {
                    return ub(b, a[1], c[1]) ? c : a
                });
                return d && d[0]
            } else return a.reduce(function(a, c) {
                return ub(b, a, c) ? c : a
            })
        }

        function ub(a, b, c) {
            a = a(c, b);
            return a === 0 && c !== b && (c === void 0 || c === null || c !== c) || a > 0
        }

        function vb(a, b, c) {
            a = zb(a);
            a.size = new ra(c).map(function(a) {
                return a.size
            }).min();
            a.__iterate = function(a, b) {
                b = this.__iterator(A, b);
                var c, d = 0;
                while (!(c = b.next()).done)
                    if (a(c.value, d++, this) === !1) break;
                return d
            };
            a.__iteratorUncached = function(a, d) {
                var e = c.map(function(a) {
                        return a = t(a), na(d ? a.reverse() : a)
                    }),
                    f = 0,
                    g = !1;
                return new C(function() {
                    var c;
                    g || (c = e.map(function(a) {
                        return a.next()
                    }), g = c.some(function(a) {
                        return a.done
                    }));
                    return g ? E() : D(a, f++, b.apply(null, c.map(function(a) {
                        return a.value
                    })))
                })
            };
            return a
        }

        function N(a, b) {
            return va(a) ? b : a.constructor(b)
        }

        function wb(a) {
            if (a !== Object(a)) throw new TypeError("Expected [K, V] tuple: " + a)
        }

        function xb(a) {
            L(a.size);
            return n(a)
        }

        function yb(a) {
            return y(a) ? u : z(a) ? v : w
        }

        function zb(a) {
            return Object.create((y(a) ? G : z(a) ? H : I).prototype)
        }

        function Ab() {
            if (this._iter.cacheResult) {
                this._iter.cacheResult();
                this.size = this._iter.size;
                return this
            } else return F.prototype.cacheResult.call(this)
        }

        function Bb(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        }

        function Cb(a) {
            var b = na(a);
            if (!b) {
                if (!pa(a)) throw new TypeError("Expected iterable or array-like: " + a);
                b = na(t(a))
            }
            return b
        }
        b(O, Fa);

        function O(a) {
            return a === null || a === void 0 ? Pb() : Db(a) ? a : Pb().withMutations(function(b) {
                var c = u(a);
                L(c.size);
                c.forEach(function(a, c) {
                    return b.set(c, a)
                })
            })
        }
        O.prototype.toString = function() {
            return this.__toString("Map {", "}")
        };
        O.prototype.get = function(a, b) {
            return this._root ? this._root.get(0, void 0, a, b) : b
        };
        O.prototype.set = function(a, b) {
            return Qb(this, a, b)
        };
        O.prototype.setIn = function(a, b) {
            return this.updateIn(a, g, function() {
                return b
            })
        };
        O.prototype.remove = function(a) {
            return Qb(this, a, g)
        };
        O.prototype.deleteIn = function(a) {
            return this.updateIn(a, function() {
                return g
            })
        };
        O.prototype.update = function(a, b, c) {
            return arguments.length === 1 ? a(this) : this.updateIn([a], b, c)
        };
        O.prototype.updateIn = function(a, b, c) {
            c || (c = b, b = void 0);
            a = $b(this, Cb(a), b, c);
            return a === g ? void 0 : a
        };
        O.prototype.clear = function() {
            if (this.size === 0) return this;
            if (this.__ownerID) {
                this.size = 0;
                this._root = null;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Pb()
        };
        O.prototype.merge = function() {
            return Xb(this, void 0, arguments)
        };
        O.prototype.mergeWith = function(b) {
            var c = a.call(arguments, 1);
            return Xb(this, b, c)
        };
        O.prototype.mergeIn = function(b) {
            var c = a.call(arguments, 1);
            return this.updateIn(b, Pb(), function(a) {
                return typeof a.merge === "function" ? a.merge.apply(a, c) : c[c.length - 1]
            })
        };
        O.prototype.mergeDeep = function() {
            return Xb(this, Yb(void 0), arguments)
        };
        O.prototype.mergeDeepWith = function(b) {
            var c = a.call(arguments, 1);
            return Xb(this, Yb(b), c)
        };
        O.prototype.mergeDeepIn = function(b) {
            var c = a.call(arguments, 1);
            return this.updateIn(b, Pb(), function(a) {
                return typeof a.mergeDeep === "function" ? a.mergeDeep.apply(a, c) : c[c.length - 1]
            })
        };
        O.prototype.sort = function(a) {
            return S(sb(this, a))
        };
        O.prototype.sortBy = function(a, b) {
            return S(sb(this, b, a))
        };
        O.prototype.withMutations = function(a) {
            var b = this.asMutable();
            a(b);
            return b.wasAltered() ? b.__ensureOwner(this.__ownerID) : this
        };
        O.prototype.asMutable = function() {
            return this.__ownerID ? this : this.__ensureOwner(new l())
        };
        O.prototype.asImmutable = function() {
            return this.__ensureOwner()
        };
        O.prototype.wasAltered = function() {
            return this.__altered
        };
        O.prototype.__iterator = function(a, b) {
            return new Kb(this, a, b)
        };
        O.prototype.__iterate = function(a, b) {
            var c = this,
                d = 0;
            this._root && this._root.iterate(function(b) {
                d++;
                return a(b[1], b[0], c)
            }, b);
            return d
        };
        O.prototype.__ensureOwner = function(a) {
            if (a === this.__ownerID) return this;
            if (!a) {
                this.__ownerID = a;
                this.__altered = !1;
                return this
            }
            return Nb(this.size, this._root, a, this.__hash)
        };

        function Db(a) {
            return !!(a && a[Eb])
        }
        O.isMap = Db;
        var Eb = "@@__IMMUTABLE_MAP__@@",
            P = O.prototype;
        P[Eb] = !0;
        P[c] = P.remove;
        P.removeIn = P.deleteIn;

        function Fb(a, b) {
            this.ownerID = a, this.entries = b
        }
        Fb.prototype.get = function(a, b, c, d) {
            a = this.entries;
            for (var b = 0, e = a.length; b < e; b++)
                if (J(c, a[b][0])) return a[b][1];
            return d
        };
        Fb.prototype.update = function(a, b, c, d, e, f, h) {
            b = e === g;
            c = this.entries;
            var i = 0;
            for (var j = c.length; i < j; i++)
                if (J(d, c[i][0])) break;
            var l = i < j;
            if (l ? c[i][1] === e : b) return this;
            k(h);
            (b || !l) && k(f);
            if (b && c.length === 1) return;
            if (!l && !b && c.length >= ec) return Ub(a, c, d, e);
            h = a && a === this.ownerID;
            f = h ? c : m(c);
            l ? b ? i === j - 1 ? f.pop() : f[i] = f.pop() : f[i] = [d, e] : f.push([d, e]);
            if (h) {
                this.entries = f;
                return this
            }
            return new Fb(a, f)
        };

        function Gb(a, b, c) {
            this.ownerID = a, this.bitmap = b, this.nodes = c
        }
        Gb.prototype.get = function(a, b, c, e) {
            b === void 0 && (b = K(c));
            var g = 1 << ((a === 0 ? b : b >>> a) & f),
                h = this.bitmap;
            return (h & g) === 0 ? e : this.nodes[ac(h & g - 1)].get(a + d, b, c, e)
        };
        Gb.prototype.update = function(a, b, c, e, h, i, j) {
            c === void 0 && (c = K(e));
            var k = (b === 0 ? c : c >>> b) & f,
                l = 1 << k,
                m = this.bitmap,
                n = (m & l) !== 0;
            if (!n && h === g) return this;
            var o = ac(m & l - 1),
                p = this.nodes,
                q = n ? p[o] : void 0;
            b = Rb(q, a, b + d, c, e, h, i, j);
            if (b === q) return this;
            if (!n && b && p.length >= fc) return Wb(a, p, m, k, b);
            if (n && !b && p.length === 2 && Sb(p[o ^ 1])) return p[o ^ 1];
            if (n && b && p.length === 1 && Sb(b)) return b;
            c = a && a === this.ownerID;
            e = n ? b ? m : m ^ l : m | l;
            h = n ? b ? bc(p, o, b, c) : dc(p, o, c) : cc(p, o, b, c);
            if (c) {
                this.bitmap = e;
                this.nodes = h;
                return this
            }
            return new Gb(a, e, h)
        };

        function Hb(a, b, c) {
            this.ownerID = a, this.count = b, this.nodes = c
        }
        Hb.prototype.get = function(a, b, c, e) {
            b === void 0 && (b = K(c));
            var g = (a === 0 ? b : b >>> a) & f;
            g = this.nodes[g];
            return g ? g.get(a + d, b, c, e) : e
        };
        Hb.prototype.update = function(a, b, c, e, h, i, j) {
            c === void 0 && (c = K(e));
            var k = (b === 0 ? c : c >>> b) & f,
                l = h === g,
                m = this.nodes,
                n = m[k];
            if (l && !n) return this;
            l = Rb(n, a, b + d, c, e, h, i, j);
            if (l === n) return this;
            b = this.count;
            if (!n) b++;
            else if (!l) {
                b--;
                if (b < gc) return Vb(a, m, b, k)
            }
            c = a && a === this.ownerID;
            e = bc(m, k, l, c);
            if (c) {
                this.count = b;
                this.nodes = e;
                return this
            }
            return new Hb(a, b, e)
        };

        function Ib(a, b, c) {
            this.ownerID = a, this.keyHash = b, this.entries = c
        }
        Ib.prototype.get = function(a, b, c, d) {
            a = this.entries;
            for (var b = 0, e = a.length; b < e; b++)
                if (J(c, a[b][0])) return a[b][1];
            return d
        };
        Ib.prototype.update = function(a, b, c, d, e, f, h) {
            c === void 0 && (c = K(d));
            var i = e === g;
            if (c !== this.keyHash) {
                if (i) return this;
                k(h);
                k(f);
                return Tb(this, a, b, c, [d, e])
            }
            b = this.entries;
            c = 0;
            for (var j = b.length; c < j; c++)
                if (J(d, b[c][0])) break;
            var l = c < j;
            if (l ? b[c][1] === e : i) return this;
            k(h);
            (i || !l) && k(f);
            if (i && j === 2) return new Jb(a, this.keyHash, b[c ^ 1]);
            h = a && a === this.ownerID;
            f = h ? b : m(b);
            l ? i ? c === j - 1 ? f.pop() : f[c] = f.pop() : f[c] = [d, e] : f.push([d, e]);
            if (h) {
                this.entries = f;
                return this
            }
            return new Ib(a, this.keyHash, f)
        };

        function Jb(a, b, c) {
            this.ownerID = a, this.keyHash = b, this.entry = c
        }
        Jb.prototype.get = function(a, b, c, d) {
            return J(c, this.entry[0]) ? this.entry[1] : d
        };
        Jb.prototype.update = function(a, b, c, d, e, f, h) {
            c = e === g;
            var i = J(d, this.entry[0]);
            if (i ? e === this.entry[1] : c) return this;
            k(h);
            if (c) {
                k(f);
                return
            }
            if (i) {
                if (a && a === this.ownerID) {
                    this.entry[1] = e;
                    return this
                }
                return new Jb(a, this.keyHash, [d, e])
            }
            k(f);
            return Tb(this, a, b, K(d), [d, e])
        };
        Fb.prototype.iterate = Ib.prototype.iterate = function(a, b) {
            var c = this.entries;
            for (var d = 0, e = c.length - 1; d <= e; d++)
                if (a(c[b ? e - d : d]) === !1) return !1
        };
        Gb.prototype.iterate = Hb.prototype.iterate = function(a, b) {
            var c = this.nodes;
            for (var d = 0, e = c.length - 1; d <= e; d++) {
                var f = c[b ? e - d : d];
                if (f && f.iterate(a, b) === !1) return !1
            }
        };
        Jb.prototype.iterate = function(a, b) {
            return a(this.entry)
        };
        b(Kb, C);

        function Kb(a, b, c) {
            this._type = b, this._reverse = c, this._stack = a._root && Mb(a._root)
        }
        Kb.prototype.next = function() {
            var a = this._type,
                b = this._stack;
            while (b) {
                var c = b.node,
                    d = b.index++,
                    e;
                if (c.entry) {
                    if (d === 0) return Lb(a, c.entry)
                } else if (c.entries) {
                    e = c.entries.length - 1;
                    if (d <= e) return Lb(a, c.entries[this._reverse ? e - d : d])
                } else {
                    e = c.nodes.length - 1;
                    if (d <= e) {
                        c = c.nodes[this._reverse ? e - d : d];
                        if (c) {
                            if (c.entry) return Lb(a, c.entry);
                            b = this._stack = Mb(c, b)
                        }
                        continue
                    }
                }
                b = this._stack = this._stack.__prev
            }
            return E()
        };

        function Lb(a, b) {
            return D(a, b[0], b[1])
        }

        function Mb(a, b) {
            return {
                node: a,
                index: 0,
                __prev: b
            }
        }

        function Nb(b, c, d, a) {
            var e = Object.create(P);
            e.size = b;
            e._root = c;
            e.__ownerID = d;
            e.__hash = a;
            e.__altered = !1;
            return e
        }
        var Ob;

        function Pb() {
            return Ob || (Ob = Nb(0))
        }

        function Qb(a, b, c) {
            var d, e;
            if (!a._root) {
                if (c === g) return a;
                e = 1;
                d = new Fb(a.__ownerID, [
                    [b, c]
                ])
            } else {
                var f = j(h),
                    k = j(i);
                d = Rb(a._root, a.__ownerID, 0, void 0, b, c, f, k);
                if (!k.value) return a;
                e = a.size + (f.value ? c === g ? -1 : 1 : 0)
            }
            if (a.__ownerID) {
                a.size = e;
                a._root = d;
                a.__hash = void 0;
                a.__altered = !0;
                return a
            }
            return d ? Nb(e, d) : Pb()
        }

        function Rb(a, b, c, d, e, f, h, i) {
            if (!a) {
                if (f === g) return a;
                k(i);
                k(h);
                return new Jb(b, d, [e, f])
            }
            return a.update(b, c, d, e, f, h, i)
        }

        function Sb(a) {
            return a.constructor === Jb || a.constructor === Ib
        }

        function Tb(a, b, c, e, g) {
            if (a.keyHash === e) return new Ib(b, e, [a.entry, g]);
            var h = (c === 0 ? a.keyHash : a.keyHash >>> c) & f,
                i = (c === 0 ? e : e >>> c) & f;
            e = h === i ? [Tb(a, b, c + d, e, g)] : (c = new Jb(b, e, g), h < i ? [a, c] : [c, a]);
            return new Gb(b, 1 << h | 1 << i, e)
        }

        function Ub(a, b, c, d) {
            a || (a = new l());
            c = new Jb(a, K(c), [c, d]);
            for (var d = 0; d < b.length; d++) {
                var e = b[d];
                c = c.update(a, 0, void 0, e[0], e[1])
            }
            return c
        }

        function Vb(a, b, c, d) {
            var e = 0,
                f = 0;
            c = new Array(c);
            for (var g = 0, h = 1, i = b.length; g < i; g++, h <<= 1) {
                var j = b[g];
                j !== void 0 && g !== d && (e |= h, c[f++] = j)
            }
            return new Gb(a, e, c)
        }

        function Wb(a, b, c, d, f) {
            var g = 0,
                h = new Array(e);
            for (var i = 0; c !== 0; i++, c >>>= 1) h[i] = c & 1 ? b[g++] : void 0;
            h[d] = f;
            return new Hb(a, g + 1, h)
        }

        function Xb(a, b, c) {
            var d = [];
            for (var e = 0; e < c.length; e++) {
                var f = c[e],
                    g = u(f);
                x(f) || (g = g.map(function(a) {
                    return Ia(a)
                }));
                d.push(g)
            }
            return Zb(a, b, d)
        }

        function Yb(a) {
            return function(b, c, d) {
                return b && b.mergeDeepWith && x(c) ? b.mergeDeepWith(a, c) : a ? a(b, c, d) : c
            }
        }

        function Zb(a, b, c) {
            c = c.filter(function(a) {
                return a.size !== 0
            });
            if (c.length === 0) return a;
            return a.size === 0 && !a.__ownerID && c.length === 1 ? a.constructor(c[0]) : a.withMutations(function(a) {
                var d = b ? function(c, d) {
                    a.update(d, g, function(a) {
                        return a === g ? c : b(a, c, d)
                    })
                } : function(b, c) {
                    a.set(c, b)
                };
                for (var e = 0; e < c.length; e++) c[e].forEach(d)
            })
        }

        function $b(a, b, c, d) {
            var e = a === g,
                f = b.next();
            if (f.done) {
                var h = e ? c : a,
                    i = d(h);
                return i === h ? a : i
            }
            bb(e || a && a.set, "invalid keyPath");
            h = f.value;
            i = e ? g : a.get(h, g);
            f = $b(i, b, c, d);
            return f === i ? a : f === g ? a.remove(h) : (e ? Pb() : a).set(h, f)
        }

        function ac(a) {
            a = a - (a >> 1 & 1431655765);
            a = (a & 858993459) + (a >> 2 & 858993459);
            a = a + (a >> 4) & 252645135;
            a = a + (a >> 8);
            a = a + (a >> 16);
            return a & 127
        }

        function bc(a, b, c, d) {
            d = d ? a : m(a);
            d[b] = c;
            return d
        }

        function cc(a, b, c, d) {
            var e = a.length + 1;
            if (d && b + 1 === e) {
                a[b] = c;
                return a
            }
            d = new Array(e);
            var f = 0;
            for (var g = 0; g < e; g++) g === b ? (d[g] = c, f = -1) : d[g] = a[g + f];
            return d
        }

        function dc(a, b, c) {
            var d = a.length - 1;
            if (c && b === d) {
                a.pop();
                return a
            }
            c = new Array(d);
            var e = 0;
            for (var f = 0; f < d; f++) f === b && (e = 1), c[f] = a[f + e];
            return c
        }
        var ec = e / 4,
            fc = e / 2,
            gc = e / 4;
        b(Q, Ga);

        function Q(a) {
            var b = oc();
            if (a === null || a === void 0) return b;
            if (hc(a)) return a;
            var c = v(a),
                f = c.size;
            if (f === 0) return b;
            L(f);
            return f > 0 && f < e ? mc(0, f, d, null, new jc(c.toArray())) : b.withMutations(function(a) {
                a.setSize(f), c.forEach(function(b, c) {
                    return a.set(c, b)
                })
            })
        }
        Q.of = function() {
            return this(arguments)
        };
        Q.prototype.toString = function() {
            return this.__toString("List [", "]")
        };
        Q.prototype.get = function(a, b) {
            a = o(this, a);
            if (a < 0 || a >= this.size) return b;
            a += this._origin;
            b = sc(this, a);
            return b && b.array[a & f]
        };
        Q.prototype.set = function(a, b) {
            return pc(this, a, b)
        };
        Q.prototype.remove = function(a) {
            return this.has(a) ? a === 0 ? this.shift() : a === this.size - 1 ? this.pop() : this.splice(a, 1) : this
        };
        Q.prototype.clear = function() {
            if (this.size === 0) return this;
            if (this.__ownerID) {
                this.size = this._origin = this._capacity = 0;
                this._level = d;
                this._root = this._tail = null;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return oc()
        };
        Q.prototype.push = function() {
            var a = arguments,
                b = this.size;
            return this.withMutations(function(c) {
                tc(c, 0, b + a.length);
                for (var d = 0; d < a.length; d++) c.set(b + d, a[d])
            })
        };
        Q.prototype.pop = function() {
            return tc(this, 0, -1)
        };
        Q.prototype.unshift = function() {
            var a = arguments;
            return this.withMutations(function(b) {
                tc(b, -a.length);
                for (var c = 0; c < a.length; c++) b.set(c, a[c])
            })
        };
        Q.prototype.shift = function() {
            return tc(this, 1)
        };
        Q.prototype.merge = function() {
            return uc(this, void 0, arguments)
        };
        Q.prototype.mergeWith = function(b) {
            var c = a.call(arguments, 1);
            return uc(this, b, c)
        };
        Q.prototype.mergeDeep = function() {
            return uc(this, Yb(void 0), arguments)
        };
        Q.prototype.mergeDeepWith = function(b) {
            var c = a.call(arguments, 1);
            return uc(this, Yb(b), c)
        };
        Q.prototype.setSize = function(a) {
            return tc(this, 0, a)
        };
        Q.prototype.slice = function(a, b) {
            var c = this.size;
            return q(a, b, c) ? this : tc(this, r(a, c), s(b, c))
        };
        Q.prototype.__iterator = function(a, b) {
            var c = 0,
                d = lc(this, b);
            return new C(function() {
                var b = d();
                return b === kc ? E() : D(a, c++, b)
            })
        };
        Q.prototype.__iterate = function(a, b) {
            var c = 0;
            b = lc(this, b);
            var d;
            while ((d = b()) !== kc)
                if (a(d, c++, this) === !1) break;
            return c
        };
        Q.prototype.__ensureOwner = function(a) {
            if (a === this.__ownerID) return this;
            if (!a) {
                this.__ownerID = a;
                return this
            }
            return mc(this._origin, this._capacity, this._level, this._root, this._tail, a, this.__hash)
        };

        function hc(a) {
            return !!(a && a[ic])
        }
        Q.isList = hc;
        var ic = "@@__IMMUTABLE_LIST__@@",
            R = Q.prototype;
        R[ic] = !0;
        R[c] = R.remove;
        R.setIn = P.setIn;
        R.deleteIn = R.removeIn = P.removeIn;
        R.update = P.update;
        R.updateIn = P.updateIn;
        R.mergeIn = P.mergeIn;
        R.mergeDeepIn = P.mergeDeepIn;
        R.withMutations = P.withMutations;
        R.asMutable = P.asMutable;
        R.asImmutable = P.asImmutable;
        R.wasAltered = P.wasAltered;

        function jc(a, b) {
            this.array = a, this.ownerID = b
        }
        jc.prototype.removeBefore = function(a, b, c) {
            if (c === b ? 1 << b : this.array.length === 0) return this;
            var e = c >>> b & f;
            if (e >= this.array.length) return new jc([], a);
            var g = e === 0,
                h;
            if (b > 0) {
                var i = this.array[e];
                h = i && i.removeBefore(a, b - d, c);
                if (h === i && g) return this
            }
            if (g && !h) return this;
            b = rc(this, a);
            if (!g)
                for (var c = 0; c < e; c++) b.array[c] = void 0;
            h && (b.array[e] = h);
            return b
        };
        jc.prototype.removeAfter = function(a, b, c) {
            if (c === b ? 1 << b : this.array.length === 0) return this;
            var e = c - 1 >>> b & f;
            if (e >= this.array.length) return this;
            var g = e === this.array.length - 1,
                h;
            if (b > 0) {
                var i = this.array[e];
                h = i && i.removeAfter(a, b - d, c);
                if (h === i && g) return this
            }
            if (g && !h) return this;
            b = rc(this, a);
            g || b.array.pop();
            h && (b.array[e] = h);
            return b
        };
        var kc = {};

        function lc(a, b) {
            var c = a._origin,
                f = a._capacity,
                g = vc(f),
                h = a._tail;
            return i(a._root, a._level, 0);

            function i(a, b, c) {
                return b === 0 ? j(a, c) : k(a, b, c)
            }

            function j(a, d) {
                var i = d === g ? h && h.array : a && a.array,
                    j = d > c ? 0 : c - d,
                    k = f - d;
                k > e && (k = e);
                return function() {
                    if (j === k) return kc;
                    var a = b ? --k : j++;
                    return i && i[a]
                }
            }

            function k(a, g, h) {
                var j, k = a && a.array,
                    l = h > c ? 0 : c - h >> g,
                    m = (f - h >> g) + 1;
                m > e && (m = e);
                return function() {
                    do {
                        if (j) {
                            var a = j();
                            if (a !== kc) return a;
                            j = null
                        }
                        if (l === m) return kc;
                        a = b ? --m : l++;
                        j = i(k && k[a], g - d, h + (a << g))
                    } while (!0)
                }
            }
        }

        function mc(b, c, d, e, f, g, a) {
            var h = Object.create(R);
            h.size = c - b;
            h._origin = b;
            h._capacity = c;
            h._level = d;
            h._root = e;
            h._tail = f;
            h.__ownerID = g;
            h.__hash = a;
            h.__altered = !1;
            return h
        }
        var nc;

        function oc() {
            return nc || (nc = mc(0, 0, d))
        }

        function pc(a, b, c) {
            b = o(a, b);
            if (b >= a.size || b < 0) return a.withMutations(function(a) {
                b < 0 ? tc(a, b).set(0, c) : tc(a, 0, b + 1).set(b, c)
            });
            b += a._origin;
            var d = a._tail,
                e = a._root,
                f = j(i);
            b >= vc(a._capacity) ? d = qc(d, a.__ownerID, 0, b, c, f) : e = qc(e, a.__ownerID, a._level, b, c, f);
            if (!f.value) return a;
            if (a.__ownerID) {
                a._root = e;
                a._tail = d;
                a.__hash = void 0;
                a.__altered = !0;
                return a
            }
            return mc(a._origin, a._capacity, a._level, e, d)
        }

        function qc(a, b, c, e, g, h) {
            var i = e >>> c & f,
                j = a && i < a.array.length;
            if (!j && g === void 0) return a;
            if (c > 0) {
                var l = a && a.array[i];
                c = qc(l, b, c - d, e, g, h);
                if (c === l) return a;
                e = rc(a, b);
                e.array[i] = c;
                return e
            }
            if (j && a.array[i] === g) return a;
            k(h);
            e = rc(a, b);
            g === void 0 && i === e.array.length - 1 ? e.array.pop() : e.array[i] = g;
            return e
        }

        function rc(a, b) {
            return b && a && b === a.ownerID ? a : new jc(a ? a.array.slice() : [], b)
        }

        function sc(a, b) {
            if (b >= vc(a._capacity)) return a._tail;
            if (b < 1 << a._level + d) {
                var c = a._root;
                a = a._level;
                while (c && a > 0) c = c.array[b >>> a & f], a -= d;
                return c
            }
        }

        function tc(a, b, c) {
            var e = a.__ownerID || new l(),
                g = a._origin,
                h = a._capacity;
            b = g + b;
            c = c === void 0 ? h : c < 0 ? h + c : g + c;
            if (b === g && c === h) return a;
            if (b >= c) return a.clear();
            var i = a._level,
                j = a._root,
                k = 0;
            while (b + k < 0) j = new jc(j && j.array.length ? [void 0, j] : [], e), i += d, k += 1 << i;
            k && (b += k, g += k, c += k, h += k);
            var m = vc(h),
                n = vc(c);
            while (n >= 1 << i + d) j = new jc(j && j.array.length ? [j] : [], e), i += d;
            var o = a._tail,
                p = n < m ? sc(a, c - 1) : n > m ? new jc([], e) : o;
            if (o && n > m && b < h && o.array.length) {
                j = rc(j, e);
                var q = j;
                for (var r = i; r > d; r -= d) {
                    var s = m >>> r & f;
                    q = q.array[s] = rc(q.array[s], e)
                }
                q.array[m >>> d & f] = o
            }
            c < h && (p = p && p.removeAfter(e, 0, c));
            if (b >= n) b -= n, c -= n, i = d, j = null, p = p && p.removeBefore(e, 0, b);
            else if (b > g || n < m) {
                k = 0;
                while (j) {
                    s = b >>> i & f;
                    if (s !== n >>> i & f) break;
                    s && (k += (1 << i) * s);
                    i -= d;
                    j = j.array[s]
                }
                j && b > g && (j = j.removeBefore(e, i, b - k));
                j && n < m && (j = j.removeAfter(e, i, n - k));
                k && (b -= k, c -= k)
            }
            if (a.__ownerID) {
                a.size = c - b;
                a._origin = b;
                a._capacity = c;
                a._level = i;
                a._root = j;
                a._tail = p;
                a.__hash = void 0;
                a.__altered = !0;
                return a
            }
            return mc(b, c, i, j, p)
        }

        function uc(a, b, c) {
            var d = [],
                e = 0;
            for (var f = 0; f < c.length; f++) {
                var g = c[f],
                    h = v(g);
                h.size > e && (e = h.size);
                x(g) || (h = h.map(function(a) {
                    return Ia(a)
                }));
                d.push(h)
            }
            e > a.size && (a = a.setSize(e));
            return Zb(a, b, d)
        }

        function vc(a) {
            return a < e ? 0 : a - 1 >>> d << d
        }
        b(S, O);

        function S(a) {
            return a === null || a === void 0 ? zc() : wc(a) ? a : zc().withMutations(function(b) {
                var c = u(a);
                L(c.size);
                c.forEach(function(a, c) {
                    return b.set(c, a)
                })
            })
        }
        S.of = function() {
            return this(arguments)
        };
        S.prototype.toString = function() {
            return this.__toString("OrderedMap {", "}")
        };
        S.prototype.get = function(a, b) {
            a = this._map.get(a);
            return a !== void 0 ? this._list.get(a)[1] : b
        };
        S.prototype.clear = function() {
            if (this.size === 0) return this;
            if (this.__ownerID) {
                this.size = 0;
                this._map.clear();
                this._list.clear();
                return this
            }
            return zc()
        };
        S.prototype.set = function(a, b) {
            return Ac(this, a, b)
        };
        S.prototype.remove = function(a) {
            return Ac(this, a, g)
        };
        S.prototype.wasAltered = function() {
            return this._map.wasAltered() || this._list.wasAltered()
        };
        S.prototype.__iterate = function(a, b) {
            var c = this;
            return this._list.__iterate(function(b) {
                return b && a(b[1], b[0], c)
            }, b)
        };
        S.prototype.__iterator = function(a, b) {
            return this._list.fromEntrySeq().__iterator(a, b)
        };
        S.prototype.__ensureOwner = function(a) {
            if (a === this.__ownerID) return this;
            var b = this._map.__ensureOwner(a),
                c = this._list.__ensureOwner(a);
            if (!a) {
                this.__ownerID = a;
                this._map = b;
                this._list = c;
                return this
            }
            return xc(b, c, a, this.__hash)
        };

        function wc(a) {
            return Db(a) && ca(a)
        }
        S.isOrderedMap = wc;
        S.prototype[ga] = !0;
        S.prototype[c] = S.prototype.remove;

        function xc(b, c, d, a) {
            var e = Object.create(S.prototype);
            e.size = b ? b.size : 0;
            e._map = b;
            e._list = c;
            e.__ownerID = d;
            e.__hash = a;
            return e
        }
        var yc;

        function zc() {
            return yc || (yc = xc(Pb(), oc()))
        }

        function Ac(a, b, c) {
            var d = a._map,
                f = a._list,
                h = d.get(b),
                i = h !== void 0,
                j, k;
            if (c === g) {
                if (!i) return a;
                f.size >= e && f.size >= d.size * 2 ? (k = f.filter(function(a, b) {
                    return a !== void 0 && h !== b
                }), j = k.toKeyedSeq().map(function(a) {
                    return a[0]
                }).flip().toMap(), a.__ownerID && (j.__ownerID = k.__ownerID = a.__ownerID)) : (j = d.remove(b), k = h === f.size - 1 ? f.pop() : f.set(h, void 0))
            } else if (i) {
                if (c === f.get(h)[1]) return a;
                j = d;
                k = f.set(h, [b, c])
            } else j = d.set(b, f.size), k = f.set(f.size, [b, c]);
            if (a.__ownerID) {
                a.size = j.size;
                a._map = j;
                a._list = k;
                a.__hash = void 0;
                return a
            }
            return xc(j, k)
        }
        b(T, Ga);

        function T(a) {
            return a === null || a === void 0 ? Gc() : Bc(a) ? a : Gc().unshiftAll(a)
        }
        T.of = function() {
            return this(arguments)
        };
        T.prototype.toString = function() {
            return this.__toString("Stack [", "]")
        };
        T.prototype.get = function(a, b) {
            var c = this._head;
            a = o(this, a);
            while (c && a--) c = c.next;
            return c ? c.value : b
        };
        T.prototype.peek = function() {
            return this._head && this._head.value
        };
        T.prototype.push = function() {
            if (arguments.length === 0) return this;
            var a = this.size + arguments.length,
                b = this._head;
            for (var c = arguments.length - 1; c >= 0; c--) b = {
                value: arguments[c],
                next: b
            };
            if (this.__ownerID) {
                this.size = a;
                this._head = b;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Ec(a, b)
        };
        T.prototype.pushAll = function(a) {
            a = v(a);
            if (a.size === 0) return this;
            L(a.size);
            var b = this.size,
                c = this._head;
            a.reverse().forEach(function(a) {
                b++, c = {
                    value: a,
                    next: c
                }
            });
            if (this.__ownerID) {
                this.size = b;
                this._head = c;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Ec(b, c)
        };
        T.prototype.pop = function() {
            return this.slice(1)
        };
        T.prototype.unshift = function() {
            return this.push.apply(this, arguments)
        };
        T.prototype.unshiftAll = function(a) {
            return this.pushAll(a)
        };
        T.prototype.shift = function() {
            return this.pop.apply(this, arguments)
        };
        T.prototype.clear = function() {
            if (this.size === 0) return this;
            if (this.__ownerID) {
                this.size = 0;
                this._head = void 0;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Gc()
        };
        T.prototype.slice = function(a, b) {
            if (q(a, b, this.size)) return this;
            var c = r(a, this.size),
                d = s(b, this.size);
            if (d !== this.size) return Ga.prototype.slice.call(this, a, b);
            d = this.size - c;
            a = this._head;
            while (c--) a = a.next;
            if (this.__ownerID) {
                this.size = d;
                this._head = a;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Ec(d, a)
        };
        T.prototype.__ensureOwner = function(a) {
            if (a === this.__ownerID) return this;
            if (!a) {
                this.__ownerID = a;
                this.__altered = !1;
                return this
            }
            return Ec(this.size, this._head, a, this.__hash)
        };
        T.prototype.__iterate = function(a, b) {
            if (b) return this.reverse().__iterate(a);
            b = 0;
            var c = this._head;
            while (c) {
                if (a(c.value, b++, this) === !1) break;
                c = c.next
            }
            return b
        };
        T.prototype.__iterator = function(a, b) {
            if (b) return this.reverse().__iterator(a);
            var c = 0,
                d = this._head;
            return new C(function() {
                if (d) {
                    var b = d.value;
                    d = d.next;
                    return D(a, c++, b)
                }
                return E()
            })
        };

        function Bc(a) {
            return !!(a && a[Cc])
        }
        T.isStack = Bc;
        var Cc = "@@__IMMUTABLE_STACK__@@",
            Dc = T.prototype;
        Dc[Cc] = !0;
        Dc.withMutations = P.withMutations;
        Dc.asMutable = P.asMutable;
        Dc.asImmutable = P.asImmutable;
        Dc.wasAltered = P.wasAltered;

        function Ec(b, c, d, a) {
            var e = Object.create(Dc);
            e.size = b;
            e._head = c;
            e.__ownerID = d;
            e.__hash = a;
            e.__altered = !1;
            return e
        }
        var Fc;

        function Gc() {
            return Fc || (Fc = Ec(0))
        }
        b(U, Ha);

        function U(a) {
            return a === null || a === void 0 ? Mc() : Hc(a) ? a : Mc().withMutations(function(b) {
                var c = w(a);
                L(c.size);
                c.forEach(function(a) {
                    return b.add(a)
                })
            })
        }
        U.of = function() {
            return this(arguments)
        };
        U.fromKeys = function(a) {
            return this(u(a).keySeq())
        };
        U.prototype.toString = function() {
            return this.__toString("Set {", "}")
        };
        U.prototype.has = function(a) {
            return this._map.has(a)
        };
        U.prototype.add = function(a) {
            return Jc(this, this._map.set(a, !0))
        };
        U.prototype.remove = function(a) {
            return Jc(this, this._map.remove(a))
        };
        U.prototype.clear = function() {
            return Jc(this, this._map.clear())
        };
        U.prototype.union = function() {
            var b = a.call(arguments, 0);
            b = b.filter(function(a) {
                return a.size !== 0
            });
            if (b.length === 0) return this;
            return this.size === 0 && !this.__ownerID && b.length === 1 ? this.constructor(b[0]) : this.withMutations(function(a) {
                for (var c = 0; c < b.length; c++) w(b[c]).forEach(function(b) {
                    return a.add(b)
                })
            })
        };
        U.prototype.intersect = function() {
            var b = a.call(arguments, 0);
            if (b.length === 0) return this;
            b = b.map(function(a) {
                return w(a)
            });
            var c = this;
            return this.withMutations(function(a) {
                c.forEach(function(c) {
                    b.every(function(a) {
                        return a.includes(c)
                    }) || a.remove(c)
                })
            })
        };
        U.prototype.subtract = function() {
            var b = a.call(arguments, 0);
            if (b.length === 0) return this;
            b = b.map(function(a) {
                return w(a)
            });
            var c = this;
            return this.withMutations(function(a) {
                c.forEach(function(c) {
                    b.some(function(a) {
                        return a.includes(c)
                    }) && a.remove(c)
                })
            })
        };
        U.prototype.merge = function() {
            return this.union.apply(this, arguments)
        };
        U.prototype.mergeWith = function(b) {
            var c = a.call(arguments, 1);
            return this.union.apply(this, c)
        };
        U.prototype.sort = function(a) {
            return Nc(sb(this, a))
        };
        U.prototype.sortBy = function(a, b) {
            return Nc(sb(this, b, a))
        };
        U.prototype.wasAltered = function() {
            return this._map.wasAltered()
        };
        U.prototype.__iterate = function(a, b) {
            var c = this;
            return this._map.__iterate(function(b, d) {
                return a(d, d, c)
            }, b)
        };
        U.prototype.__iterator = function(a, b) {
            return this._map.map(function(a, b) {
                return b
            }).__iterator(a, b)
        };
        U.prototype.__ensureOwner = function(a) {
            if (a === this.__ownerID) return this;
            var b = this._map.__ensureOwner(a);
            if (!a) {
                this.__ownerID = a;
                this._map = b;
                return this
            }
            return this.__make(b, a)
        };

        function Hc(a) {
            return !!(a && a[Ic])
        }
        U.isSet = Hc;
        var Ic = "@@__IMMUTABLE_SET__@@",
            V = U.prototype;
        V[Ic] = !0;
        V[c] = V.remove;
        V.mergeDeep = V.merge;
        V.mergeDeepWith = V.mergeWith;
        V.withMutations = P.withMutations;
        V.asMutable = P.asMutable;
        V.asImmutable = P.asImmutable;
        V.__empty = Mc;
        V.__make = Kc;

        function Jc(a, b) {
            if (a.__ownerID) {
                a.size = b.size;
                a._map = b;
                return a
            }
            return b === a._map ? a : b.size === 0 ? a.__empty() : a.__make(b)
        }

        function Kc(a, b) {
            var c = Object.create(V);
            c.size = a ? a.size : 0;
            c._map = a;
            c.__ownerID = b;
            return c
        }
        var Lc;

        function Mc() {
            return Lc || (Lc = Kc(Pb()))
        }
        b(Nc, U);

        function Nc(a) {
            return a === null || a === void 0 ? Sc() : Oc(a) ? a : Sc().withMutations(function(b) {
                var c = w(a);
                L(c.size);
                c.forEach(function(a) {
                    return b.add(a)
                })
            })
        }
        Nc.of = function() {
            return this(arguments)
        };
        Nc.fromKeys = function(a) {
            return this(u(a).keySeq())
        };
        Nc.prototype.toString = function() {
            return this.__toString("OrderedSet {", "}")
        };

        function Oc(a) {
            return Hc(a) && ca(a)
        }
        Nc.isOrderedSet = Oc;
        var Pc = Nc.prototype;
        Pc[ga] = !0;
        Pc.__empty = Sc;
        Pc.__make = Qc;

        function Qc(a, b) {
            var c = Object.create(Pc);
            c.size = a ? a.size : 0;
            c._map = a;
            c.__ownerID = b;
            return c
        }
        var Rc;

        function Sc() {
            return Rc || (Rc = Qc(zc()))
        }
        b(W, Fa);

        function W(a, b) {
            var c, d = function(f) {
                    if (f instanceof d) return f;
                    if (!(this instanceof d)) return new d(f);
                    if (!c) {
                        c = !0;
                        var g = Object.keys(a);
                        Vc(e, g);
                        e.size = g.length;
                        e._name = b;
                        e._keys = g;
                        e._defaultValues = a
                    }
                    this._map = O(f)
                },
                e = d.prototype = Object.create(X);
            e.constructor = d;
            return d
        }
        W.prototype.toString = function() {
            return this.__toString(Uc(this) + " {", "}")
        };
        W.prototype.has = function(a) {
            return this._defaultValues.hasOwnProperty(a)
        };
        W.prototype.get = function(a, b) {
            if (!this.has(a)) return b;
            b = this._defaultValues[a];
            return this._map ? this._map.get(a, b) : b
        };
        W.prototype.clear = function() {
            if (this.__ownerID) {
                this._map && this._map.clear();
                return this
            }
            var a = this.constructor;
            return a._empty || (a._empty = Tc(this, Pb()))
        };
        W.prototype.set = function(a, b) {
            if (!this.has(a)) throw new Error('Cannot set unknown key "' + a + '" on ' + Uc(this));
            a = this._map && this._map.set(a, b);
            return this.__ownerID || a === this._map ? this : Tc(this, a)
        };
        W.prototype.remove = function(a) {
            if (!this.has(a)) return this;
            a = this._map && this._map.remove(a);
            return this.__ownerID || a === this._map ? this : Tc(this, a)
        };
        W.prototype.wasAltered = function() {
            return this._map.wasAltered()
        };
        W.prototype.__iterator = function(a, b) {
            var c = this;
            return u(this._defaultValues).map(function(a, b) {
                return c.get(b)
            }).__iterator(a, b)
        };
        W.prototype.__iterate = function(a, b) {
            var c = this;
            return u(this._defaultValues).map(function(a, b) {
                return c.get(b)
            }).__iterate(a, b)
        };
        W.prototype.__ensureOwner = function(a) {
            if (a === this.__ownerID) return this;
            var b = this._map && this._map.__ensureOwner(a);
            if (!a) {
                this.__ownerID = a;
                this._map = b;
                return this
            }
            return Tc(this, b, a)
        };
        var X = W.prototype;
        X[c] = X.remove;
        X.deleteIn = X.removeIn = P.removeIn;
        X.merge = P.merge;
        X.mergeWith = P.mergeWith;
        X.mergeIn = P.mergeIn;
        X.mergeDeep = P.mergeDeep;
        X.mergeDeepWith = P.mergeDeepWith;
        X.mergeDeepIn = P.mergeDeepIn;
        X.setIn = P.setIn;
        X.update = P.update;
        X.updateIn = P.updateIn;
        X.withMutations = P.withMutations;
        X.asMutable = P.asMutable;
        X.asImmutable = P.asImmutable;

        function Tc(a, b, c) {
            a = Object.create(Object.getPrototypeOf(a));
            a._map = b;
            a.__ownerID = c;
            return a
        }

        function Uc(a) {
            return a._name || a.constructor.name || "Record"
        }

        function Vc(a, b) {
            try {
                b.forEach(Wc.bind(void 0, a))
            } catch (a) {}
        }

        function Wc(a, b) {
            Object.defineProperty(a, b, {
                get: function() {
                    return this.get(b)
                },
                set: function(a) {
                    bb(this.__ownerID, "Cannot set on an immutable record."), this.set(b, a)
                }
            })
        }

        function Xc(a, b) {
            if (a === b) return !0;
            if (!x(b) || a.size !== void 0 && b.size !== void 0 && a.size !== b.size || a.__hash !== void 0 && b.__hash !== void 0 && a.__hash !== b.__hash || y(a) !== y(b) || z(a) !== z(b) || ca(a) !== ca(b)) return !1;
            if (a.size === 0 && b.size === 0) return !0;
            var c = !ba(a);
            if (ca(a)) {
                var d = a.entries();
                return b.every(function(a, b) {
                    var e = d.next().value;
                    return e && J(e[1], a) && (c || J(e[0], b))
                }) && d.next().done
            }
            var e = !1;
            if (a.size === void 0)
                if (b.size === void 0) typeof a.cacheResult === "function" && a.cacheResult();
                else {
                    e = !0;
                    var f = a;
                    a = b;
                    b = f
                }
            f = !0;
            b = b.__iterate(function(b, d) {
                if (c ? !a.has(b) : e ? !J(b, a.get(d, g)) : !J(a.get(d, g), b)) {
                    f = !1;
                    return !1
                }
            });
            return f && a.size === b
        }
        b(Y, H);

        function Y(a, b, c) {
            if (!(this instanceof Y)) return new Y(a, b, c);
            bb(c !== 0, "Cannot step a Range by 0");
            a = a || 0;
            b === void 0 && (b = Infinity);
            c = c === void 0 ? 1 : Math.abs(c);
            b < a && (c = -c);
            this._start = a;
            this._end = b;
            this._step = c;
            this.size = Math.max(0, Math.ceil((b - a) / c - 1) + 1);
            if (this.size === 0) {
                if (Yc) return Yc;
                Yc = this
            }
        }
        Y.prototype.toString = function() {
            return this.size === 0 ? "Range []" : "Range [ " + this._start + "..." + this._end + (this._step > 1 ? " by " + this._step : "") + " ]"
        };
        Y.prototype.get = function(a, b) {
            return this.has(a) ? this._start + o(this, a) * this._step : b
        };
        Y.prototype.includes = function(a) {
            a = (a - this._start) / this._step;
            return a >= 0 && a < this.size && a === Math.floor(a)
        };
        Y.prototype.slice = function(a, b) {
            if (q(a, b, this.size)) return this;
            a = r(a, this.size);
            b = s(b, this.size);
            return b <= a ? new Y(0, 0) : new Y(this.get(a, this._end), this.get(b, this._end), this._step)
        };
        Y.prototype.indexOf = function(a) {
            a = a - this._start;
            if (a % this._step === 0) {
                a = a / this._step;
                if (a >= 0 && a < this.size) return a
            }
            return -1
        };
        Y.prototype.lastIndexOf = function(a) {
            return this.indexOf(a)
        };
        Y.prototype.__iterate = function(a, b) {
            var c = this.size - 1,
                d = this._step,
                e = b ? this._start + c * d : this._start;
            for (var f = 0; f <= c; f++) {
                if (a(e, f, this) === !1) return f + 1;
                e += b ? -d : d
            }
            return f
        };
        Y.prototype.__iterator = function(a, b) {
            var c = this.size - 1,
                d = this._step,
                e = b ? this._start + c * d : this._start,
                f = 0;
            return new C(function() {
                var g = e;
                e += b ? -d : d;
                return f > c ? E() : D(a, f++, g)
            })
        };
        Y.prototype.equals = function(a) {
            return a instanceof Y ? this._start === a._start && this._end === a._end && this._step === a._step : Xc(this, a)
        };
        var Yc;
        b(Z, H);

        function Z(a, b) {
            if (!(this instanceof Z)) return new Z(a, b);
            this._value = a;
            this.size = b === void 0 ? Infinity : Math.max(0, b);
            if (this.size === 0) {
                if (Zc) return Zc;
                Zc = this
            }
        }
        Z.prototype.toString = function() {
            return this.size === 0 ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]"
        };
        Z.prototype.get = function(a, b) {
            return this.has(a) ? this._value : b
        };
        Z.prototype.includes = function(a) {
            return J(this._value, a)
        };
        Z.prototype.slice = function(a, b) {
            var c = this.size;
            return q(a, b, c) ? this : new Z(this._value, s(b, c) - r(a, c))
        };
        Z.prototype.reverse = function() {
            return this
        };
        Z.prototype.indexOf = function(a) {
            return J(this._value, a) ? 0 : -1
        };
        Z.prototype.lastIndexOf = function(a) {
            return J(this._value, a) ? this.size : -1
        };
        Z.prototype.__iterate = function(a, b) {
            for (var b = 0; b < this.size; b++)
                if (a(this._value, b, this) === !1) return b + 1;
            return b
        };
        Z.prototype.__iterator = function(a, b) {
            var c = this,
                d = 0;
            return new C(function() {
                return d < c.size ? D(a, d++, c._value) : E()
            })
        };
        Z.prototype.equals = function(a) {
            return a instanceof Z ? J(this._value, a._value) : Xc(a)
        };
        var Zc;

        function $c(a, b) {
            var c = function(c) {
                a.prototype[c] = b[c]
            };
            Object.keys(b).forEach(c);
            Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(b).forEach(c);
            return a
        }
        t.Iterator = C;
        $c(t, {
            toArray: function() {
                L(this.size);
                var a = new Array(this.size || 0);
                this.valueSeq().__iterate(function(b, c) {
                    a[c] = b
                });
                return a
            },
            toIndexedSeq: function() {
                return new cb(this)
            },
            toJS: function() {
                return this.toSeq().map(function(a) {
                    return a && typeof a.toJS === "function" ? a.toJS() : a
                }).__toJS()
            },
            toJSON: function() {
                return this.toSeq().map(function(a) {
                    return a && typeof a.toJSON === "function" ? a.toJSON() : a
                }).__toJS()
            },
            toKeyedSeq: function() {
                return new M(this, !0)
            },
            toMap: function() {
                return O(this.toKeyedSeq())
            },
            toObject: function() {
                L(this.size);
                var a = {};
                this.__iterate(function(b, c) {
                    a[c] = b
                });
                return a
            },
            toOrderedMap: function() {
                return S(this.toKeyedSeq())
            },
            toOrderedSet: function() {
                return Nc(y(this) ? this.valueSeq() : this)
            },
            toSet: function() {
                return U(y(this) ? this.valueSeq() : this)
            },
            toSetSeq: function() {
                return new db(this)
            },
            toSeq: function() {
                return z(this) ? this.toIndexedSeq() : y(this) ? this.toKeyedSeq() : this.toSetSeq()
            },
            toStack: function() {
                return T(y(this) ? this.valueSeq() : this)
            },
            toList: function() {
                return Q(y(this) ? this.valueSeq() : this)
            },
            toString: function() {
                return "[Iterable]"
            },
            __toString: function(a, b) {
                return this.size === 0 ? a + b : a + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + b
            },
            concat: function() {
                var b = a.call(arguments, 0);
                return N(this, ob(this, b))
            },
            contains: function(a) {
                return this.includes(a)
            },
            includes: function(a) {
                return this.some(function(b) {
                    return J(b, a)
                })
            },
            entries: function() {
                return this.__iterator(B)
            },
            every: function(a, b) {
                L(this.size);
                var c = !0;
                this.__iterate(function(d, e, f) {
                    if (!a.call(b, d, e, f)) {
                        c = !1;
                        return !1
                    }
                });
                return c
            },
            filter: function(a, b) {
                return N(this, ib(this, a, b, !0))
            },
            find: function(a, b, c) {
                a = this.findEntry(a, b);
                return a ? a[1] : c
            },
            findEntry: function(a, b) {
                var c;
                this.__iterate(function(d, e, f) {
                    if (a.call(b, d, e, f)) {
                        c = [e, d];
                        return !1
                    }
                });
                return c
            },
            findLastEntry: function(a, b) {
                return this.toSeq().reverse().findEntry(a, b)
            },
            forEach: function(a, b) {
                L(this.size);
                return this.__iterate(b ? a.bind(b) : a)
            },
            join: function(a) {
                L(this.size);
                a = a !== void 0 ? "" + a : ",";
                var b = "",
                    c = !0;
                this.__iterate(function(d) {
                    c ? c = !1 : b += a, b += d !== null && d !== void 0 ? d.toString() : ""
                });
                return b
            },
            keys: function() {
                return this.__iterator(ha)
            },
            map: function(a, b) {
                return N(this, gb(this, a, b))
            },
            reduce: function(a, b, c) {
                L(this.size);
                var d, e;
                arguments.length < 2 ? e = !0 : d = b;
                this.__iterate(function(b, f, g) {
                    e ? (e = !1, d = b) : d = a.call(c, d, b, f, g)
                });
                return d
            },
            reduceRight: function(a, b, c) {
                var d = this.toKeyedSeq().reverse();
                return d.reduce.apply(d, arguments)
            },
            reverse: function() {
                return N(this, hb(this, !0))
            },
            slice: function(a, b) {
                return N(this, lb(this, a, b, !0))
            },
            some: function(a, b) {
                return !this.every(cd(a), b)
            },
            sort: function(a) {
                return N(this, sb(this, a))
            },
            values: function() {
                return this.__iterator(A)
            },
            butLast: function() {
                return this.slice(0, -1)
            },
            isEmpty: function() {
                return this.size !== void 0 ? this.size === 0 : !this.some(function() {
                    return !0
                })
            },
            count: function(a, b) {
                return n(a ? this.toSeq().filter(a, b) : this)
            },
            countBy: function(a, b) {
                return jb(this, a, b)
            },
            equals: function(a) {
                return Xc(this, a)
            },
            entrySeq: function() {
                var a = this;
                if (a._cache) return new ra(a._cache);
                var b = a.toSeq().map(bd).toIndexedSeq();
                b.fromEntrySeq = function() {
                    return a.toSeq()
                };
                return b
            },
            filterNot: function(a, b) {
                return this.filter(cd(a), b)
            },
            findLast: function(a, b, c) {
                return this.toKeyedSeq().reverse().find(a, b, c)
            },
            first: function() {
                return this.find(p)
            },
            flatMap: function(a, b) {
                return N(this, qb(this, a, b))
            },
            flatten: function(a) {
                return N(this, pb(this, a, !0))
            },
            fromEntrySeq: function() {
                return new eb(this)
            },
            get: function(a, b) {
                return this.find(function(b, c) {
                    return J(c, a)
                }, void 0, b)
            },
            getIn: function(a, b) {
                var c = this;
                a = Cb(a);
                var d;
                while (!(d = a.next()).done) {
                    d = d.value;
                    c = c && c.get ? c.get(d, g) : g;
                    if (c === g) return b
                }
                return c
            },
            groupBy: function(a, b) {
                return kb(this, a, b)
            },
            has: function(a) {
                return this.get(a, g) !== g
            },
            hasIn: function(a) {
                return this.getIn(a, g) !== g
            },
            isSubset: function(a) {
                a = typeof a.includes === "function" ? a : t(a);
                return this.every(function(b) {
                    return a.includes(b)
                })
            },
            isSuperset: function(a) {
                return a.isSubset(this)
            },
            keySeq: function() {
                return this.toSeq().map(ad).toIndexedSeq()
            },
            last: function() {
                return this.toSeq().reverse().first()
            },
            max: function(a) {
                return tb(this, a)
            },
            maxBy: function(a, b) {
                return tb(this, b, a)
            },
            min: function(a) {
                return tb(this, a ? dd(a) : gd)
            },
            minBy: function(a, b) {
                return tb(this, b ? dd(b) : gd, a)
            },
            rest: function() {
                return this.slice(1)
            },
            skip: function(a) {
                return this.slice(Math.max(0, a))
            },
            skipLast: function(a) {
                return N(this, this.toSeq().reverse().skip(a).reverse())
            },
            skipWhile: function(a, b) {
                return N(this, nb(this, a, b, !0))
            },
            skipUntil: function(a, b) {
                return this.skipWhile(cd(a), b)
            },
            sortBy: function(a, b) {
                return N(this, sb(this, b, a))
            },
            take: function(a) {
                return this.slice(0, Math.max(0, a))
            },
            takeLast: function(a) {
                return N(this, this.toSeq().reverse().take(a).reverse())
            },
            takeWhile: function(a, b) {
                return N(this, mb(this, a, b))
            },
            takeUntil: function(a, b) {
                return this.takeWhile(cd(a), b)
            },
            valueSeq: function() {
                return this.toIndexedSeq()
            },
            hashCode: function() {
                return this.__hash || (this.__hash = hd(this))
            }
        });
        var $ = t.prototype;
        $[da] = !0;
        $[ka] = $.values;
        $.__toJS = $.toArray;
        $.__toStringMapper = ed;
        $.inspect = $.toSource = function() {
            return this.toString()
        };
        $.chain = $.flatMap;
        (function() {
            try {
                Object.defineProperty($, "length", {
                    get: function() {
                        if (!t.noLengthWarning) {
                            var a;
                            try {
                                throw new Error()
                            } catch (b) {
                                a = b.stack
                            }
                            if (a.indexOf("_wrapObject") === -1) {
                                console && emptyFunction && !1;
                                return this.size
                            }
                        }
                    }
                })
            } catch (a) {}
        })();
        $c(u, {
            flip: function() {
                return N(this, fb(this))
            },
            findKey: function(a, b) {
                a = this.findEntry(a, b);
                return a && a[0]
            },
            findLastKey: function(a, b) {
                return this.toSeq().reverse().findKey(a, b)
            },
            keyOf: function(a) {
                return this.findKey(function(b) {
                    return J(b, a)
                })
            },
            lastKeyOf: function(a) {
                return this.findLastKey(function(b) {
                    return J(b, a)
                })
            },
            mapEntries: function(a, b) {
                var c = this,
                    d = 0;
                return N(this, this.toSeq().map(function(e, f) {
                    return a.call(b, [f, e], d++, c)
                }).fromEntrySeq())
            },
            mapKeys: function(a, b) {
                var c = this;
                return N(this, this.toSeq().flip().map(function(d, e) {
                    return a.call(b, d, e, c)
                }).flip())
            }
        });
        c = u.prototype;
        c[ea] = !0;
        c[ka] = $.entries;
        c.__toJS = $.toObject;
        c.__toStringMapper = function(a, b) {
            return JSON.stringify(b) + ": " + ed(a)
        };
        $c(v, {
            toKeyedSeq: function() {
                return new M(this, !1)
            },
            filter: function(a, b) {
                return N(this, ib(this, a, b, !1))
            },
            findIndex: function(a, b) {
                a = this.findEntry(a, b);
                return a ? a[0] : -1
            },
            indexOf: function(a) {
                a = this.toKeyedSeq().keyOf(a);
                return a === void 0 ? -1 : a
            },
            lastIndexOf: function(a) {
                return this.toSeq().reverse().indexOf(a)
            },
            reverse: function() {
                return N(this, hb(this, !1))
            },
            slice: function(a, b) {
                return N(this, lb(this, a, b, !1))
            },
            splice: function(a, b) {
                var c = arguments.length;
                b = Math.max(b | 0, 0);
                if (c === 0 || c === 2 && !b) return this;
                a = r(a, this.size);
                var d = this.slice(0, a);
                return N(this, c === 1 ? d : d.concat(m(arguments, 2), this.slice(a + b)))
            },
            findLastIndex: function(a, b) {
                a = this.toKeyedSeq().findLastKey(a, b);
                return a === void 0 ? -1 : a
            },
            first: function() {
                return this.get(0)
            },
            flatten: function(a) {
                return N(this, pb(this, a, !1))
            },
            get: function(a, b) {
                a = o(this, a);
                return a < 0 || this.size === Infinity || this.size !== void 0 && a > this.size ? b : this.find(function(b, c) {
                    return c === a
                }, void 0, b)
            },
            has: function(a) {
                a = o(this, a);
                return a >= 0 && (this.size !== void 0 ? this.size === Infinity || a < this.size : this.indexOf(a) !== -1)
            },
            interpose: function(a) {
                return N(this, rb(this, a))
            },
            interleave: function() {
                var a = [this].concat(m(arguments)),
                    b = vb(this.toSeq(), H.of, a),
                    c = b.flatten(!0);
                b.size && (c.size = b.size * a.length);
                return N(this, c)
            },
            last: function() {
                return this.get(-1)
            },
            skipWhile: function(a, b) {
                return N(this, nb(this, a, b, !1))
            },
            zip: function() {
                var a = [this].concat(m(arguments));
                return N(this, vb(this, fd, a))
            },
            zipWith: function(a) {
                var b = m(arguments);
                b[0] = this;
                return N(this, vb(this, a, b))
            }
        });
        v.prototype[fa] = !0;
        v.prototype[ga] = !0;
        $c(w, {
            get: function(a, b) {
                return this.has(a) ? a : b
            },
            includes: function(a) {
                return this.has(a)
            },
            keySeq: function() {
                return this.valueSeq()
            }
        });
        w.prototype.has = $.includes;
        $c(G, u.prototype);
        $c(H, v.prototype);
        $c(I, w.prototype);
        $c(Fa, u.prototype);
        $c(Ga, v.prototype);
        $c(Ha, w.prototype);

        function ad(a, b) {
            return b
        }

        function bd(a, b) {
            return [b, a]
        }

        function cd(a) {
            return function() {
                return !a.apply(this, arguments)
            }
        }

        function dd(a) {
            return function() {
                return -a.apply(this, arguments)
            }
        }

        function ed(a) {
            return typeof a === "string" ? JSON.stringify(a) : a
        }

        function fd() {
            return m(arguments)
        }

        function gd(a, b) {
            return a < b ? 1 : a > b ? -1 : 0
        }

        function hd(a) {
            if (a.size === Infinity) return 0;
            var b = ca(a),
                c = y(a),
                d = b ? 1 : 0;
            a = a.__iterate(c ? b ? function(a, b) {
                d = 31 * d + jd(K(a), K(b)) | 0
            } : function(a, b) {
                d = d + jd(K(a), K(b)) | 0
            } : b ? function(a) {
                d = 31 * d + K(a) | 0
            } : function(a) {
                d = d + K(a) | 0
            });
            return id(a, d)
        }

        function id(a, b) {
            b = Ma(b, 3432918353);
            b = Ma(b << 15 | b >>> -15, 461845907);
            b = Ma(b << 13 | b >>> -13, 5);
            b = (b + 3864292196 | 0) ^ a;
            b = Ma(b ^ b >>> 16, 2246822507);
            b = Ma(b ^ b >>> 13, 3266489909);
            b = Na(b ^ b >>> 16);
            return b
        }

        function jd(a, b) {
            return a ^ b + 2654435769 + (a << 6) + (a >> 2) | 0
        }
        b = {
            Iterable: t,
            Seq: F,
            Collection: Ea,
            Map: O,
            OrderedMap: S,
            List: Q,
            Stack: T,
            Set: U,
            OrderedSet: Nc,
            Record: W,
            Range: Y,
            Repeat: Z,
            is: J,
            fromJS: Ia
        };
        return b
    })
}), null);