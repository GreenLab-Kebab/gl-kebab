(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        368: function(t, e, n) {
            var i, o;
            void 0 === (o = function() {
                "use strict";
                i = [n(15), n(385), n(386), n(387), n(374)], void 0 === (o = function(t, e, n, i, o) {
                    var r = function(t, e) {
                        for (var n = 0; n < t.length; ++n) e.unshift(t[n])
                    };
                    return function() {
                        this.navigationItems = [],
                            function() {
                                this.navigationItems = [], r(n.findAll(), this.navigationItems), r(o.findAll(), this.navigationItems), r(i.findAll(), this.navigationItems), r(e.findAll(), this.navigationItems)
                            }.call(this)
                    }
                }.apply(e, i)) || (t.exports = o)
            }.apply(e, i = [])) || (t.exports = o)
        },
        371: function(t, e, n) {
            var i, o;
            i = [n(10)], void 0 === (o = function() {
                "use strict";
                i = [n(127), n(372), n(374), n(57), n(184), n(0), n(92)], void 0 === (o = function(t, e, n, i, o, r) {
                    var s = function(t) {
                        e.call(this, t)
                    };
                    return s.prototype = Object.create(e.prototype), s.constructor = s, s.prototype.focus = function() {
                        r(".hover").each(function() {
                            var t = r(this);
                            t.removeClass(e.HOVER_CLASS), t.find("[role='menu']").attr("aria-expanded", !1)
                        }), e.prototype.focus.call(this)
                    }, s.prototype[i.RIGHT_ARROW] = function() {
                        o.isRtl() ? this.leftArrowHandler() : this.rightArrowHandler()
                    }, s.prototype[i.LEFT_ARROW] = function() {
                        o.isRtl() ? this.rightArrowHandler() : this.leftArrowHandler()
                    }, s.prototype.rightArrowHandler = function() {
                        var t = this.getNextVisibleTopLevelNavigationLink();
                        t && !t.isVisible() && (t = this.getNextVisibleTopLevelNavigationLink()), t && t.focus()
                    }, s.prototype.leftArrowHandler = function() {
                        var t = this.getPreviousVisibleTopLevelNavigationLink();
                        t && !t.isVisible() && (t = this.getPreviousVisibleTopLevelNavigationLink()), t && t.focus()
                    }, s
                }.apply(e, i)) || (t.exports = o)
            }.apply(e, i)) || (t.exports = o)
        },
        372: function(t, e, n) {
            var i, o;
            i = [n(10)], void 0 === (o = function() {
                "use strict";
                i = [n(57), n(36), n(0), n(127), n(22), n(132), n(2), n(42)], void 0 === (o = function(t, e, n, i, o, r, s, a) {
                    var l = function(t) {
                        this.jQElement = n(t)
                    };
                    l.prototype.attachNavigationLinkEventHandlers = function() {
                        var t = this;
                        t.jQElement.off("keydown.keyboardNavigation").on("keydown.keyboardNavigation", function(e) {
                            t.getKeycodeEventHandlerAndInvoke(e)
                        }), t.jQElement.off("click").on("click", function(e) {
                            if (e.stopImmediatePropagation(), t.click) return t.click(e)
                        }), this.jQElement.hasClass("activeStatus") && this.jQElement.find("a").off("focus").on("focus", function() {
                            t.jQElement.hasClass("hover") || (i.removeHover(), t.jQElement.addClass("hover"))
                        }), this.jQElement.hasClass("signInDropdownWrapper") && this.jQElement.find(".usernameBtn").attr("tabindex", "0")
                    }, l.prototype.getKeycodeEventHandler = function(e) {
                        var n = e.which;
                        return function(e) {
                            return e === t.ENTER
                        }(n) || (e.stopImmediatePropagation(), n === t.TAB && e.shiftKey && (n = t.SHIFT_TAB)), this[n]
                    }, l.prototype.getKeycodeEventHandlerAndInvoke = function(t) {
                        var e, n = this.getKeycodeEventHandler(t);
                        return n && (e = n.call(this, t)), e
                    }, l.prototype.focus = function() {
                        i.removeHover();
                        var t = n(".skype-recents");
                        if (c(this.jQElement)) {
                            var e = this.jQElement.parents(".mainMenuItem");
                            e.addClass("hover"), e.find("[role='menu']").attr("aria-expanded", !0), "visible" === t.attr("data-status") && (t.attr("data-status", "invisible"), n(".skypeChat").attr("data-bi-scn", "open"))
                        } else this.jQElement.find("[role='menu']").attr("aria-expanded", !0);
                        this.jQElement.addClass("hover").find("a:visible").first().focus()
                    }, l.prototype.hasSubMenu = function() {
                        return p(this.jQElement)
                    }, l.prototype.isParent = function() {
                        return u(this.jQElement)
                    }, l.prototype[t.ENTER] = function(t) {
                        p(t.target) && (t.preventDefault(), this.getNext().focus(), n(".usernameBtn").attr("data-expanded", "true"))
                    }, l.prototype[t.TAB] = function(t) {
                        if (t.preventDefault(), this.jQElement.hasClass("openMenu")) i.transferFocusToContentAfterNavigation();
                        else {
                            var e = this.getNextVisible();
                            e ? (e.hasSubMenu() && (e = e.getNext()), e.focus()) : i.transferFocusToContentAfterNavigation()
                        }
                    }, l.prototype[t.SHIFT_TAB] = function(t) {
                        var e = this.getPreviousVisible();
                        e ? (t.preventDefault(), e.hasSubMenu() && (e = new l(e.jQElement.find("li:last"))), e.focus()) : s.isNullOrUndefinedOrEmpty(i.transferFocusToContentBeforeNavigation()) || t.preventDefault()
                    }, l.prototype.getNext = function(t) {
                        var e = this.jQElement;
                        t = t || 1;
                        for (var n = 0; n < t; ++n)
                            if (p(e)) e = e.find(".subMenu li:first");
                            else {
                                var i = e.next("li");
                                if (i.length && !this.isVisible(i) && (i = i.next("li"), n += 1), i.length) e = i;
                                else {
                                    if (t > 1) break;
                                    if (!c(e)) {
                                        e = void 0;
                                        break
                                    }
                                    if (!(i = e.parents(".mainMenuItem").next("li")).length) {
                                        e = void 0;
                                        break
                                    }
                                    e = i
                                }
                            }
                        return e ? new l(e) : void 0
                    }, l.prototype.getPrevious = function(t) {
                        var e = this.jQElement;
                        t = t || 1;
                        for (var n = 0; n < t; ++n) {
                            var i = e.prev("li");
                            if (i.length && !this.isVisible(i) && (i = i.prev("li"), n += 1), i.length) e = p(i) ? i.find(".subMenu li:last") : i;
                            else {
                                if (t > 1) break;
                                if (!c(e)) {
                                    e = void 0;
                                    break
                                }
                                var o = e.parents(".mainMenuItem").prev("li");
                                if (!o.length) {
                                    e = void 0;
                                    break
                                }
                                e = p(o) ? o.find(".subMenu li:last") : o
                            }
                        }
                        return e ? new l(e) : void 0
                    }, l.prototype.focusNext = function(t) {
                        var e = this.getNext(t);
                        e && e.focus()
                    }, l.prototype.focusPrevious = function(t) {
                        var e = this.getPrevious(t);
                        e && e.focus()
                    }, l.prototype.getNextTopLevelNavigationLink = function() {
                        var t = this.jQElement;
                        return c(t) && (t = t.parents(".mainMenuItem")), (t = t.next("li")).length ? new l(t) : void 0
                    }, l.prototype.getNextVisibleTopLevelNavigationLink = function() {
                        for (var t = this.getNextTopLevelNavigationLink(); t && !t.isVisibleInCurrentResponsiveState();) t = t.getNextTopLevelNavigationLink();
                        return t
                    }, l.prototype.getPreviousTopLevelNavigationLink = function() {
                        var t = this.jQElement;
                        return (t = c(t) ? t.parents(".mainMenuItem") : t.prev("li")).length ? new l(t) : void 0
                    }, l.prototype.getTopLevelNavigationLink = function() {
                        var t = this.jQElement;
                        return (t = c(t) ? t.parents(".mainMenuItem") : t.closest("li")).length ? new l(t) : void 0
                    }, l.prototype.getPreviousVisibleTopLevelNavigationLink = function() {
                        for (var t = this.getPreviousTopLevelNavigationLink(); t && !t.isVisibleInCurrentResponsiveState();) t = t.getPreviousTopLevelNavigationLink();
                        return t
                    }, l.prototype.getPreviousVisible = function() {
                        for (var t = this.getPrevious(); t && !t.isVisibleInCurrentResponsiveState();) t = t.getPrevious();
                        return t
                    }, l.prototype.getNextVisible = function() {
                        var t = void 0;
                        for (this.jQElement.hasClass("signInDropdownWrapper") || (t = this.getNext()); t && !t.isVisibleInCurrentResponsiveState();) t = t.getNext();
                        return t
                    }, l.prototype.isVisibleInCurrentResponsiveState = function() {
                        var t = e.isVisible(this.jQElement);
                        return t && v(this.jQElement) && (t = this.jQElement.is(":visible")), t
                    }, l.prototype.isVisible = function(t) {
                        var e = t || this.jQElement;
                        return !!e.length && e.is(":visible")
                    }, l.onHashChangeEventHandler = function(t) {
                        if ("endNavigation" === t) {
                            o.clearHash();
                            var e = i.transferFocusToContentAfterNavigation();
                            e && function(t) {
                                var e = t.offset().top,
                                    n = document.getElementById("s4lHeader");
                                i.isSticky() && (e -= i.height()), a.scrollTo(0, e), null !== n && (n.style.position = "static")
                            }(e)
                        }
                    };
                    var u = function(t) {
                            return p(t)
                        },
                        p = function(t) {
                            return n(t).is("[data-expanded ='false']") || n(t).is("[aria-haspopup='true']")
                        },
                        c = function(t) {
                            return !!n(t).parents(".mainMenuItem").length
                        },
                        v = function(t) {
                            var e = n(t);
                            return e.hasClass("account") || e.hasClass("mainMenuButton")
                        };
                    return r.on("change init", l.onHashChangeEventHandler), l.OPEN_MENU_CLASS = "openMenu", l.CLOSE_MENU_CLASS = "closeMenu", l.HOVER_CLASS = "hover", l
                }.apply(e, i)) || (t.exports = o)
            }.apply(e, i)) || (t.exports = o)
        },
        374: function(t, e, n) {
            var i, o;
            i = [n(10)], void 0 === (o = function() {
                "use strict";
                i = [n(127), n(372), n(57), n(184), n(36), n(22), n(0), n(92)], void 0 === (o = function(t, e, n, i, o, r, s) {
                    var a = function(t) {
                            e.call(this, t), this.attachNavigationLinkEventHandlers()
                        },
                        l = function() {
                            var e = this.getParent().getPreviousTopLevelNavigationLink();
                            e && ((e = e.hasSubMenu() ? e.getNext() : this.getTopLevelNavigationLink()).focus(), t.removeHover())
                        };
                    return a.prototype = Object.create(e.prototype), a.constructor = a, a.prototype.click = function(t) {
                        t.preventDefault(), this.redirect()
                    }, a.prototype.redirect = function() {
                        var t = this.jQElement.find("a").attr("href");
                        t && r.redirect(t)
                    }, a.prototype.focus = function() {
                        s(".hover").removeClass(e.HOVER_CLASS);
                        var t = this.getParent();
                        t.jQElement.addClass(e.HOVER_CLASS), t.jQElement.find("[role='menu']").attr("aria-expanded", !0), e.prototype.focus.call(this)
                    }, a.prototype.getParent = function() {
                        return this.getPreviousTopLevelNavigationLink()
                    }, a.prototype[n.ESCAPE] = function() {
                        l.call(this)
                    }, a.prototype[n.LEFT_ARROW] = function() {
                        i.isRtl() ? this.rightArrowHandler() : this.leftArrowHandler()
                    }, a.prototype[n.RIGHT_ARROW] = function() {
                        i.isRtl() ? this.leftArrowHandler() : this.rightArrowHandler()
                    }, a.prototype[n.UP_ARROW] = function(t) {
                        if (t.preventDefault(), this.isFirst()) {
                            var e = this.jQElement.nextAll().length;
                            this.focusNext(e)
                        } else this.focusPrevious()
                    }, a.prototype[n.DOWN_ARROW] = function(t) {
                        if (t.preventDefault(), this.isLast()) {
                            var e = this.jQElement.prevAll().length;
                            this.focusPrevious(e)
                        } else this.focusNext()
                    }, a.prototype.leftArrowHandler = function() {
                        l.call(this)
                    }, a.prototype.rightArrowHandler = function() {
                        var t = this.getNextVisibleTopLevelNavigationLink();
                        t ? (t.hasSubMenu() && (t = t.getNext()), t.focus()) : this.hasSubMenu() || l.call(this)
                    }, a.prototype.isLast = function() {
                        var t = this.jQElement.next("li");
                        return 0 === t.length || (t.is(":hidden") && (t = t.next("li")), !t.length)
                    }, a.prototype.isFirst = function() {
                        var t = this.jQElement.prev("li");
                        return 0 === t.length || (t.is(":hidden") && (t = t.prev("li")), !t.length)
                    }, a.findAll = function() {
                        return t.jQElement.find(".mainMenuItem .subMenu > li").map(function(t, e) {
                            return new a(e)
                        })
                    }, a
                }.apply(e, i)) || (t.exports = o)
            }.apply(e, i)) || (t.exports = o)
        },
        385: function(t, e, n) {
            var i, o;
            i = [n(10)], void 0 === (o = function() {
                "use strict";
                i = [n(127), n(371), n(92)], void 0 === (o = function(t, e) {
                    var n = function(t) {
                        e.call(this, t), this.attachNavigationLinkEventHandlers()
                    };
                    return n.prototype = Object.create(e.prototype), n.constructor = n, n.findAll = function() {
                        return t.jQElement.find(".singleItem, .home").map(function(t, e) {
                            return new n(e)
                        })
                    }, n
                }.apply(e, i)) || (t.exports = o)
            }.apply(e, i)) || (t.exports = o)
        },
        386: function(t, e, n) {
            var i, o;
            i = [n(10)], void 0 === (o = function() {
                "use strict";
                i = [n(127), n(372), n(371), n(36), n(7), n(0), n(15), n(92)], void 0 === (o = function(t, e, n, i, o, r) {
                    var s = r(".openMenu, .closeMenu"),
                        a = function(t, e) {
                            s.trigger(t, e)
                        },
                        l = function() {
                            if (!p()) {
                                var e = r(document).height(),
                                    n = r(window).height(),
                                    i = e > n ? e : n;
                                t.jQElement.height(i)
                            }
                        },
                        u = function(e) {
                            r("body").removeClass(t.GLOBAL_NAV_OPEN_CLASS), t.getNavigationContainer().removeClass(t.NAV_OPEN_CLASS);
                            var n = t.jQElement[0];
                            void 0 !== n && (n.style.height = "", a("close", e))
                        },
                        p = function() {
                            return t.jQElement.attr("data-nav-short")
                        },
                        c = function(t) {
                            n.call(this, t), this.attachNavigationLinkEventHandlers()
                        };
                    return c.OPEN = "open", c.CLOSE = "close", c.prototype = Object.create(n.prototype), c.constructor = c, c.prototype.click = function(e) {
                        var n;
                        e.preventDefault(), this.isOpener() ? (! function(e) {
                            r("body").addClass(t.GLOBAL_NAV_OPEN_CLASS), t.getNavigationContainer().addClass(t.NAV_OPEN_CLASS), l(), a("open", e)
                        }(e), n = this.getNextVisible()) : this.isCloser() && (u(e), n = this.getPreviousVisible()), n && n.focus()
                    }, c.prototype.isOpener = function() {
                        return this.jQElement.hasClass(e.OPEN_MENU_CLASS)
                    }, c.prototype.isCloser = function() {
                        return this.jQElement.hasClass(e.CLOSE_MENU_CLASS)
                    }, c.onResponsiveChangeCallback = function(e) {
                        e.current !== i.MOBILE && (t.removeHover(), u())
                    }, c.onResponsiveResizeCallback = function() {
                        t.isMobileMenuOpen() && l()
                    }, c.findAll = function() {
                        return t.jQElement.find(".openMenu, .closeMenu").map(function(t, e) {
                            return new c(e)
                        })
                    }, i.on(i.CHANGE, c.onResponsiveChangeCallback), i.on(i.RESIZE, c.onResponsiveResizeCallback), c.jQElement = s, o.create(c), c
                }.apply(e, i)) || (t.exports = o)
            }.apply(e, i)) || (t.exports = o)
        },
        387: function(t, e, n) {
            var i, o;
            i = [n(10)], void 0 === (o = function() {
                "use strict";
                i = [n(127), n(371), n(57), n(92)], void 0 === (o = function(t, e, n) {
                    var i = function(t) {
                        e.call(this, t), this.attachNavigationLinkEventHandlers()
                    };
                    return i.prototype = Object.create(e.prototype), i.constructor = i, i.prototype.click = function(t) {
                        return t.preventDefault(), !1
                    }, i.prototype.getChildCount = function() {
                        return this.jQElement.find("li").length
                    }, i.prototype[n.DOWN_ARROW] = function(t) {
                        t && t.preventDefault(), this.focusNext()
                    }, i.findAll = function() {
                        return t.jQElement.find(".mainMenuItem:not(.singleItem)").map(function(t, e) {
                            return new i(e)
                        })
                    }, i
                }.apply(e, i)) || (t.exports = o)
            }.apply(e, i)) || (t.exports = o)
        }
    }
]);