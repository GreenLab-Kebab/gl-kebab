! function($, document, window) {
    function $tag(tag, id, css) {
        var element = document.createElement(tag);
        return id && (element.id = prefix + id), css && (element.style.cssText = css), $(element)
    }

    function winheight() {
        return window.innerHeight ? window.innerHeight : $(window).height()
    }

    function Settings(element, options) {
        options !== Object(options) && (options = {}), this.cache = {}, this.el = element, this.value = function(key) {
            var dataAttr;
            return void 0 === this.cache[key] && (dataAttr = $(this.el).attr("data-cbox-" + key), void 0 !== dataAttr ? this.cache[key] = dataAttr : void 0 !== options[key] ? this.cache[key] = options[key] : void 0 !== defaults[key] && (this.cache[key] = defaults[key])), this.cache[key]
        }, this.get = function(key) {
            var value = this.value(key);
            return $.isFunction(value) ? value.call(this.el, this) : value
        }
    }

    function getIndex(increment) {
        var max = $related.length,
            newIndex = (index + increment) % max;
        return newIndex < 0 ? max + newIndex : newIndex
    }

    function setSize(size, dimension) {
        return Math.round((/%/.test(size) ? ("x" === dimension ? $window.width() : winheight()) / 100 : 1) * parseInt(size, 10))
    }

    function isImage(settings, url) {
        return settings.get("photo") || settings.get("photoRegex").test(url)
    }

    function retinaUrl(settings, url) {
        return settings.get("retinaUrl") && window.devicePixelRatio > 1 ? url.replace(settings.get("photoRegex"), settings.get("retinaSuffix")) : url
    }

    function trapFocus(e) {
        "contains" in $box[0] && !$box[0].contains(e.target) && e.target !== $overlay[0] && (e.stopPropagation(), $box.focus())
    }

    function setClass(str) {
        setClass.str !== str && ($box.add($overlay).removeClass(setClass.str).addClass(str), setClass.str = str)
    }

    function getRelated(rel) {
        index = 0, rel && rel !== !1 && "nofollow" !== rel ? ($related = $("." + boxElement).filter(function() {
            var options = $.data(this, colorbox),
                settings = new Settings(this, options);
            return settings.get("rel") === rel
        }), index = $related.index(settings.el), index === -1 && ($related = $related.add(settings.el), index = $related.length - 1)) : $related = $(settings.el)
    }

    function trigger(event) {
        $(document).trigger(event), $events.triggerHandler(event)
    }

    function launch(element) {
        var options;
        if (!closing) {
            if (options = $(element).data(colorbox), settings = new Settings(element, options), getRelated(settings.get("rel")), !open) {
                open = active = !0, setClass(settings.get("className")), $box.css({
                    visibility: "hidden",
                    display: "block",
                    opacity: ""
                }), $loaded = $tag(div, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), $content.css({
                    width: "",
                    height: ""
                }).append($loaded), interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(!0) - $content.height(), interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(!0) - $content.width(), loadedHeight = $loaded.outerHeight(!0), loadedWidth = $loaded.outerWidth(!0);
                var initialWidth = setSize(settings.get("initialWidth"), "x"),
                    initialHeight = setSize(settings.get("initialHeight"), "y"),
                    maxWidth = settings.get("maxWidth"),
                    maxHeight = settings.get("maxHeight");
                settings.w = (maxWidth !== !1 ? Math.min(initialWidth, setSize(maxWidth, "x")) : initialWidth) - loadedWidth - interfaceWidth, settings.h = (maxHeight !== !1 ? Math.min(initialHeight, setSize(maxHeight, "y")) : initialHeight) - loadedHeight - interfaceHeight, $loaded.css({
                    width: "",
                    height: settings.h
                }), publicMethod.position(), trigger(event_open), settings.get("onOpen"), $groupControls.add($title).hide(), $box.focus(), settings.get("trapFocus") && document.addEventListener && (document.addEventListener("focus", trapFocus, !0), $events.one(event_closed, function() {
                    document.removeEventListener("focus", trapFocus, !0)
                })), settings.get("returnFocus") && $events.one(event_closed, function() {
                    $(settings.el).focus()
                })
            }
            var opacity = parseFloat(settings.get("opacity"));
            $overlay.css({
                opacity: opacity === opacity ? opacity : "",
                cursor: settings.get("overlayClose") ? "pointer" : "",
                visibility: "visible"
            }).show(), settings.get("closeButton") ? $close.html(settings.get("close")).appendTo($content) : $close.appendTo("<div/>"), load()
        }
    }

    function appendHTML() {
        $box || (init = !1, $window = $(window), $box = $tag(div).attr({
            id: colorbox,
            "class": $.support.opacity === !1 ? prefix + "IE" : "",
            role: "dialog",
            tabindex: "-1"
        }).hide(), $overlay = $tag(div, "Overlay").hide(), $loadingOverlay = $([$tag(div, "LoadingOverlay")[0], $tag(div, "LoadingGraphic")[0]]), $wrap = $tag(div, "Wrapper"), $content = $tag(div, "Content").append($title = $tag(div, "Title"), $current = $tag(div, "Current"), $prev = $('<button type="button"/>').attr({
            id: prefix + "Previous"
        }), $next = $('<button type="button"/>').attr({
            id: prefix + "Next"
        }), $slideshow = $tag("button", "Slideshow"), $loadingOverlay), $close = $('<button type="button"/>').attr({
            id: prefix + "Close"
        }), $wrap.append($tag(div).append($tag(div, "TopLeft"), $topBorder = $tag(div, "TopCenter"), $tag(div, "TopRight")), $tag(div, !1, "clear:left").append($leftBorder = $tag(div, "MiddleLeft"), $content, $rightBorder = $tag(div, "MiddleRight")), $tag(div, !1, "clear:left").append($tag(div, "BottomLeft"), $bottomBorder = $tag(div, "BottomCenter"), $tag(div, "BottomRight"))).find("div div").css({
            "float": "left"
        }), $loadingBay = $tag(div, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), $groupControls = $next.add($prev).add($current).add($slideshow)), document.body && !$box.parent().length && $(document.body).append($overlay, $box.append($wrap, $loadingBay))
    }

    function addBindings() {
        function clickHandler(e) {
            e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey || (e.preventDefault(), launch(this))
        }
        return !!$box && (init || (init = !0, $next.click(function() {
            publicMethod.next()
        }), $prev.click(function() {
            publicMethod.prev()
        }), $close.click(function() {
            publicMethod.close()
        }), $overlay.click(function() {
            settings.get("overlayClose") && publicMethod.close()
        }), $(document).bind("keydown." + prefix, function(e) {
            var key = e.keyCode;
            open && settings.get("escKey") && 27 === key && (e.preventDefault(), publicMethod.close()), open && settings.get("arrowKey") && $related[1] && !e.altKey && (37 === key ? (e.preventDefault(), $prev.click()) : 39 === key && (e.preventDefault(), $next.click()))
        }), $.isFunction($.fn.on) ? $(document).on("click." + prefix, "." + boxElement, clickHandler) : $("." + boxElement).live("click." + prefix, clickHandler)), !0)
    }

    function load() {
        var href, setResize, $inline, prep = publicMethod.prep,
            request = ++requests;
        if (active = !0, photo = !1, trigger(event_purge), trigger(event_load), settings.get("onLoad"), settings.h = settings.get("height") ? setSize(settings.get("height"), "y") - loadedHeight - interfaceHeight : settings.get("innerHeight") && setSize(settings.get("innerHeight"), "y"), settings.w = settings.get("width") ? setSize(settings.get("width"), "x") - loadedWidth - interfaceWidth : settings.get("innerWidth") && setSize(settings.get("innerWidth"), "x"), settings.mw = settings.w, settings.mh = settings.h, settings.get("maxWidth") && (settings.mw = setSize(settings.get("maxWidth"), "x") - loadedWidth - interfaceWidth, settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw), settings.get("maxHeight") && (settings.mh = setSize(settings.get("maxHeight"), "y") - loadedHeight - interfaceHeight, settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh), href = settings.get("href"), loadingTimer = setTimeout(function() {
                $loadingOverlay.show()
            }, 100), settings.get("inline")) {
            var $target = $(href);
            $inline = $("<div>").hide().insertBefore($target), $events.one(event_purge, function() {
                $inline.replaceWith($target)
            }), prep($target)
        } else settings.get("iframe") ? prep(" ") : settings.get("html") ? prep(settings.get("html")) : isImage(settings, href) ? (href = retinaUrl(settings, href), photo = new Image, $(photo).addClass(prefix + "Photo").bind("error", function() {
            prep($tag(div, "Error").html(settings.get("imgError")))
        }).one("load", function() {
            request === requests && setTimeout(function() {
                var percent;
                $.each(["alt", "longdesc", "aria-describedby"], function(i, val) {
                    var attr = $(settings.el).attr(val) || $(settings.el).attr("data-" + val);
                    attr && photo.setAttribute(val, attr)
                }), settings.get("retinaImage") && window.devicePixelRatio > 1 && (photo.height = photo.height / window.devicePixelRatio, photo.width = photo.width / window.devicePixelRatio), settings.get("scalePhotos") && (setResize = function() {
                    photo.height -= photo.height * percent, photo.width -= photo.width * percent
                }, settings.mw && photo.width > settings.mw && (percent = (photo.width - settings.mw) / photo.width, setResize()), settings.mh && photo.height > settings.mh && (percent = (photo.height - settings.mh) / photo.height, setResize())), settings.h && (photo.style.marginTop = Math.max(settings.mh - photo.height, 0) / 2 + "px"), $related[1] && (settings.get("loop") || $related[index + 1]) && (photo.style.cursor = "pointer", photo.onclick = function() {
                    publicMethod.next()
                }), photo.style.width = photo.width + "px", photo.style.height = photo.height + "px", prep(photo)
            }, 1)
        }), photo.src = href) : href && $loadingBay.load(href, settings.get("data"), function(data, status) {
            request === requests && prep("error" === status ? $tag(div, "Error").html(settings.get("xhrError")) : $(this).contents())
        })
    }
    var $overlay, $box, $wrap, $content, $topBorder, $leftBorder, $rightBorder, $bottomBorder, $related, $window, $loaded, $loadingBay, $loadingOverlay, $title, $current, $slideshow, $next, $prev, $close, $groupControls, settings, interfaceHeight, interfaceWidth, loadedHeight, loadedWidth, index, photo, open, active, closing, loadingTimer, publicMethod, init, defaults = {
            html: !1,
            photo: !1,
            iframe: !1,
            inline: !1,
            transition: "elastic",
            speed: 300,
            fadeOut: 300,
            width: !1,
            initialWidth: "600",
            innerWidth: !1,
            maxWidth: !1,
            height: !1,
            initialHeight: "450",
            innerHeight: !1,
            maxHeight: !1,
            scalePhotos: !0,
            scrolling: !0,
            opacity: .9,
            preloading: !0,
            className: !1,
            overlayClose: !0,
            escKey: !0,
            arrowKey: !0,
            top: !1,
            bottom: !1,
            left: !1,
            right: !1,
            fixed: !1,
            data: void 0,
            closeButton: !0,
            fastIframe: !0,
            open: !1,
            reposition: !0,
            loop: !0,
            slideshow: !1,
            slideshowAuto: !0,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
            retinaImage: !1,
            retinaUrl: !1,
            retinaSuffix: "@2x.$1",
            current: "image {current} of {total}",
            previous: "previous",
            next: "next",
            close: "close",
            xhrError: "This content failed to load.",
            imgError: "This image failed to load.",
            returnFocus: !0,
            trapFocus: !0,
            onOpen: !1,
            onLoad: !1,
            onComplete: !1,
            onCleanup: !1,
            onClosed: !1,
            rel: function() {
                return this.rel
            },
            href: function() {
                return $(this).attr("href")
            },
            title: function() {
                return this.title
            }
        },
        colorbox = "colorbox",
        prefix = "cbox",
        boxElement = prefix + "Element",
        event_open = prefix + "_open",
        event_load = prefix + "_load",
        event_complete = prefix + "_complete",
        event_cleanup = prefix + "_cleanup",
        event_closed = prefix + "_closed",
        event_purge = prefix + "_purge",
        $events = $("<a/>"),
        div = "div",
        requests = 0,
        previousCSS = {},
        slideshow = function() {
            function clear() {
                clearTimeout(timeOut)
            }

            function set() {
                (settings.get("loop") || $related[index + 1]) && (clear(), timeOut = setTimeout(publicMethod.next, settings.get("slideshowSpeed")))
            }

            function start() {
                $slideshow.html(settings.get("slideshowStop")).unbind(click).one(click, stop), $events.bind(event_complete, set).bind(event_load, clear), $box.removeClass(className + "off").addClass(className + "on")
            }

            function stop() {
                clear(), $events.unbind(event_complete, set).unbind(event_load, clear), $slideshow.html(settings.get("slideshowStart")).unbind(click).one(click, function() {
                    publicMethod.next(), start()
                }), $box.removeClass(className + "on").addClass(className + "off")
            }

            function reset() {
                active = !1, $slideshow.hide(), clear(), $events.unbind(event_complete, set).unbind(event_load, clear), $box.removeClass(className + "off " + className + "on")
            }
            var active, timeOut, className = prefix + "Slideshow_",
                click = "click." + prefix;
            return function() {
                active ? settings.get("slideshow") || ($events.unbind(event_cleanup, reset), reset()) : settings.get("slideshow") && $related[1] && (active = !0, $events.one(event_cleanup, reset), settings.get("slideshowAuto") ? start() : stop(), $slideshow.show())
            }
        }();
    $[colorbox] || ($(appendHTML), publicMethod = $.fn[colorbox] = $[colorbox] = function(options, callback) {
        var settings, $obj = this;
        return options = options || {}, $.isFunction($obj) && ($obj = $("<a/>"), options.open = !0), $obj[0] ? (appendHTML(), addBindings() && (callback && (options.onComplete = callback), $obj.each(function() {
            var old = $.data(this, colorbox) || {};
            $.data(this, colorbox, $.extend(old, options))
        }).addClass(boxElement), settings = new Settings($obj[0], options), settings.get("open") && launch($obj[0])), $obj) : $obj
    }, publicMethod.position = function(speed, loadedCallback) {
        function modalDimensions() {
            $topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = parseInt($box[0].style.width, 10) - interfaceWidth + "px", $content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = parseInt($box[0].style.height, 10) - interfaceHeight + "px"
        }
        var css, scrollTop, scrollLeft, top = 0,
            left = 0,
            offset = $box.offset();
        if ($window.unbind("resize." + prefix), $box.css({
                top: -9e4,
                left: -9e4
            }), scrollTop = $window.scrollTop(), scrollLeft = $window.scrollLeft(), settings.get("fixed") ? (offset.top -= scrollTop, offset.left -= scrollLeft, $box.css({
                position: "fixed"
            })) : (top = scrollTop, left = scrollLeft, $box.css({
                position: "absolute"
            })), left += settings.get("right") !== !1 ? Math.max($window.width() - settings.w - loadedWidth - interfaceWidth - setSize(settings.get("right"), "x"), 0) : settings.get("left") !== !1 ? setSize(settings.get("left"), "x") : Math.round(Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2), top += settings.get("bottom") !== !1 ? Math.max(winheight() - settings.h - loadedHeight - interfaceHeight - setSize(settings.get("bottom"), "y"), 0) : settings.get("top") !== !1 ? setSize(settings.get("top"), "y") : Math.round(Math.max(winheight() - settings.h - loadedHeight - interfaceHeight, 0) / 2), $box.css({
                top: offset.top,
                left: offset.left,
                visibility: "visible"
            }), $wrap[0].style.width = $wrap[0].style.height = "9999px", css = {
                width: settings.w + loadedWidth + interfaceWidth,
                height: settings.h + loadedHeight + interfaceHeight,
                top: top,
                left: left
            }, speed) {
            var tempSpeed = 0;
            $.each(css, function(i) {
                if (css[i] !== previousCSS[i]) return void(tempSpeed = speed)
            }), speed = tempSpeed
        }
        previousCSS = css, speed || $box.css(css), $box.dequeue().animate(css, {
            duration: speed || 0,
            complete: function() {
                modalDimensions(), active = !1, $wrap[0].style.width = settings.w + loadedWidth + interfaceWidth + "px", $wrap[0].style.height = settings.h + loadedHeight + interfaceHeight + "px", settings.get("reposition") && setTimeout(function() {
                    $window.bind("resize." + prefix, publicMethod.position)
                }, 1), $.isFunction(loadedCallback) && loadedCallback()
            },
            step: modalDimensions
        })
    }, publicMethod.resize = function(options) {
        var scrolltop;
        open && (options = options || {}, options.width && (settings.w = setSize(options.width, "x") - loadedWidth - interfaceWidth), options.innerWidth && (settings.w = setSize(options.innerWidth, "x")), $loaded.css({
            width: settings.w
        }), options.height && (settings.h = setSize(options.height, "y") - loadedHeight - interfaceHeight), options.innerHeight && (settings.h = setSize(options.innerHeight, "y")), options.innerHeight || options.height || (scrolltop = $loaded.scrollTop(), $loaded.css({
            height: "auto"
        }), settings.h = $loaded.height()), $loaded.css({
            height: settings.h
        }), scrolltop && $loaded.scrollTop(scrolltop), publicMethod.position("none" === settings.get("transition") ? 0 : settings.get("speed")))
    }, publicMethod.prep = function(object) {
        function getWidth() {
            return settings.w = settings.w || $loaded.width(), settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w, settings.w
        }

        function getHeight() {
            return settings.h = settings.h || $loaded.height(), settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h, settings.h
        }
        if (open) {
            var callback, speed = "none" === settings.get("transition") ? 0 : settings.get("speed");
            $loaded.remove(), $loaded = $tag(div, "LoadedContent").append(object), $loaded.hide().appendTo($loadingBay.show()).css({
                width: getWidth(),
                overflow: settings.get("scrolling") ? "auto" : "hidden"
            }).css({
                height: getHeight()
            }).prependTo($content), $loadingBay.hide(), $(photo).css({
                "float": "none"
            }), setClass(settings.get("className")), callback = function() {
                function removeFilter() {
                    $.support.opacity === !1 && $box[0].style.removeAttribute("filter")
                }
                var iframe, complete, total = $related.length;
                open && (complete = function() {
                    clearTimeout(loadingTimer), $loadingOverlay.hide(), trigger(event_complete), settings.get("onComplete")
                }, $title.html(settings.get("title")).show(), $loaded.show(), total > 1 ? ("string" == typeof settings.get("current") && $current.html(settings.get("current").replace("{current}", index + 1).replace("{total}", total)).show(), $next[settings.get("loop") || index < total - 1 ? "show" : "hide"]().html(settings.get("next")), $prev[settings.get("loop") || index ? "show" : "hide"]().html(settings.get("previous")), slideshow(), settings.get("preloading") && $.each([getIndex(-1), getIndex(1)], function() {
                    var img, i = $related[this],
                        settings = new Settings(i, $.data(i, colorbox)),
                        src = settings.get("href");
                    src && isImage(settings, src) && (src = retinaUrl(settings, src), img = document.createElement("img"), img.src = src)
                })) : $groupControls.hide(), settings.get("iframe") ? (iframe = document.createElement("iframe"), "frameBorder" in iframe && (iframe.frameBorder = 0), "allowTransparency" in iframe && (iframe.allowTransparency = "true"), settings.get("scrolling") || (iframe.scrolling = "no"), $(iframe).attr({
                    src: settings.get("href"),
                    name: (new Date).getTime(),
                    "class": prefix + "Iframe",
                    allowFullScreen: !0
                }).one("load", complete).appendTo($loaded), $events.one(event_purge, function() {
                    iframe.src = "//about:blank"
                }), settings.get("fastIframe") && $(iframe).trigger("load")) : complete(), "fade" === settings.get("transition") ? $box.fadeTo(speed, 1, removeFilter) : removeFilter())
            }, "fade" === settings.get("transition") ? $box.fadeTo(speed, 0, function() {
                publicMethod.position(0, callback)
            }) : publicMethod.position(speed, callback)
        }
    }, publicMethod.next = function() {
        !active && $related[1] && (settings.get("loop") || $related[index + 1]) && (index = getIndex(1), launch($related[index]))
    }, publicMethod.prev = function() {
        !active && $related[1] && (settings.get("loop") || index) && (index = getIndex(-1), launch($related[index]))
    }, publicMethod.close = function() {
        open && !closing && (closing = !0, open = !1, trigger(event_cleanup), settings.get("onCleanup"), $window.unbind("." + prefix), $overlay.fadeTo(settings.get("fadeOut") || 0, 0), $box.stop().fadeTo(settings.get("fadeOut") || 0, 0, function() {
            $box.hide(), $overlay.hide(), trigger(event_purge), $loaded.remove(), setTimeout(function() {
                closing = !1, trigger(event_closed), settings.get("onClosed")
            }, 1)
        }))
    }, publicMethod.remove = function() {
        $box && ($box.stop(), $[colorbox].close(), $box.stop(!1, !0).remove(), $overlay.remove(), closing = !1, $box = null, $("." + boxElement).removeData(colorbox).removeClass(boxElement), $(document).unbind("click." + prefix).unbind("keydown." + prefix))
    }, publicMethod.element = function() {
        return $(settings.el)
    }, publicMethod.settings = defaults)
}(jQuery, document, window),
function($, window) {
    "use strict";
    var espn = window.espn || {},
        paywall = paywall || {};
    paywall.launchedOverlay = !1, paywall.purchaseDomain = "https://r.espn.com", paywall.protocol = "https:", paywall.env = espn && espn.i18n && espn.i18n.environment || "prod", paywall.isMobile = !1, paywall.did = null, paywall.isDidInit = !1, paywall.btn_pressed = null, paywall.dataOptions = null, espn.core.loggedIn && $("#ins_signin").hide();
    var getAdditionalQueryVariables = function() {
            for (var ids = ["tr_type", "addata", "ex_cid", "couponCode", "tr_id"], params = "", query = window.location.search.substring(1), vars = query.split("&"), p = 0; p < ids.length; p++)
                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split("=");
                    pair[0] === ids[p] && (p > 0 && "" !== params && (params += "&"), params += ids[p] + "=" + pair[1])
                }
            return (window.location.href.search("[.-]qa") > -1 || window.location.href.search("test") > -1 || window.location.host.indexOf("local") > -1) && (paywall.env = "qa"), params
        },
        getPurchaseUrl = function(subscribeButton, sanitizeUrl) {
            var additionalVars, params = "",
                purchaseUrl = "",
                deleteOptions = ["affiliatename", "regformid", "css", "forwardUrl", "height", "width", "page", "pricingPlanMonthly", "pricingPlan1yr", "appRedirect"],
                dataOpts = paywall.dataOptions || {},
                appRedirect = dataOpts.appRedirect;
            if (dataOpts.pricingPlanId || (dataOpts.pricingPlanId = [], dataOpts.pricingPlan1yr && dataOpts.pricingPlanId.push(dataOpts.pricingPlan1yr), dataOpts.pricingPlanMonthly && dataOpts.pricingPlanId.push(dataOpts.pricingPlanMonthly), dataOpts.pricingPlanId = dataOpts.pricingPlanId.join(","), dataOpts.pricingPlanId || deleteOptions.push("pricingPlanId")), "" !== appRedirect && "undefined" != typeof appRedirect || (appRedirect = window.location.href), $.cookie) {
                var domain = "prod" === paywall.env ? "espn.com" : "espnqa.com";
                $.cookie("paywallRedirect", appRedirect, {
                    domain: domain
                })
            }
            if (sanitizeUrl !== !1)
                for (var p = 0; p <= deleteOptions.length; p++) delete dataOpts[deleteOptions[p]];
            return $.param(dataOpts) && (params = "?" + $.param(dataOpts)), additionalVars = getAdditionalQueryVariables(), paywall.purchaseDomain = "prod" == paywall.env ? "https://r.espn.com" : "https://r.espnqa.com", "" !== additionalVars && (params += "?" !== params ? "&" + additionalVars : additionalVars), purchaseUrl = paywall.purchaseDomain + "/members/commerce/insider/purchase" + params
        },
        getDataOptions = function(subscribeButton) {
            var jsonObj = JSON.parse(subscribeButton.attr("data-options")) || {};
            return jsonObj.appRedirect = window.location.href, jsonObj
        },
        attachDidListeners = function() {
            paywall.did.on("login", handleLoggedInState), paywall.did.on("create", handleLoggedInState), paywall.did.on("reauth", handleLoggedInState)
        },
        checkEntitlement = function(cb) {
            var j, i, entitlements, hasInsider;
            hasInsider = !1, paywall.did.getGuest(!1).then(function(data) {
                if ("undefined" != typeof data) {
                    var guest = data || data.guest;
                    if (hasInsider = !1, entitlements = guest.entitlements, i = null !== entitlements ? entitlements.length : 0, entitlements) {
                        for (j = 0; j < i; j++)
                            if ("InsiderDirect" === entitlements[j].digitalAssetSourceName || "SZPREM" === entitlements[j].digitalAssetSourceName) {
                                hasInsider = !0;
                                break
                            }
                    } else hasInsider = !1
                }
                "undefined" !== paywall.dataOptions.page && "Payments" == paywall.dataOptions.page ? cb() : hasInsider ? window.location.reload() : cb()
            })
        },
        runPurchaseHandler = function() {
            paywall.did.getLoggedInStatus().then(function(logged_in) {
                logged_in ? handleLoggedInState() : paywall.did.launchLogin()
            })
        },
        handleLoggedInState = function() {
            null !== paywall.btn_pressed && (paywall.dataOptions = getDataOptions($(paywall.btn_pressed)), checkEntitlement(function() {
                paywall.did.getTrustStateStatus().then(function(high_trust) {
                    high_trust ? paywall.launchedOverlay ? paywall.launchedOverlay = !1 : "#ins_signin" === paywall.btn_pressed ? window.location.reload() : window.location.href = getPurchaseUrl() || paywall.purchaseDomain + "/members/commerce/insider/purchase" : paywall.did.launchReauth()
                })
            }))
        },
        initDisneyId = function() {
            paywall.isDidInit || (paywall.did = DisneyID.get(), paywall.isDidInit = !0, attachDidListeners(), $("#purchase").removeClass("cbOverlay"), $("#ins_signin").removeClass("cbOverlay"), $("#membership_month").removeClass("cbOverlay"), $("#membership_one").removeClass("cbOverlay"), $("#membership_two").removeClass("cbOverlay"))
        },
        initDid = function() {
            espn.memberservices.DisneyID && initDisneyId()
        },
        executeLaunch = function() {
            runPurchaseHandler()
        },
        registerInsiderInitEvent = function() {
            $(document).on("user.parsed", function() {
                "function" == typeof espn.memberservices.ready && espn.memberservices.ready(initDid)
            })
        };
    $("body").on("click", "a.btn-subscribe", function(e) {
        paywall.btn_pressed = ".btn-subscribe", e.preventDefault(), executeLaunch()
    }), $("body").on("click", "#purchase", function(e) {
        paywall.btn_pressed = "#purchase", e.preventDefault(), executeLaunch()
    }), $("body").on("click", "#membership_month", function(e) {
        paywall.btn_pressed = "#membership_month", e.preventDefault(), executeLaunch()
    }), $("body").on("click", "#membership_one", function(e) {
        paywall.btn_pressed = "#membership_one", e.preventDefault(), executeLaunch()
    }), $("body").on("click", "#membership_two", function(e) {
        paywall.btn_pressed = "#membership_two", e.preventDefault(), executeLaunch()
    }), $("body").on("click", "#ins_signin", function(e) {
        paywall.btn_pressed = "#ins_signin", e.preventDefault(), executeLaunch()
    }), $.receiveMessage(function(e) {
        if (e.data)
            if ("reload=true" === e.data) window.location.reload(!0);
            else if ("string" == typeof e.data && e.data.match(/width/g)) {
            var h = parseInt(e.data.replace(/.*height=(\d+)(?:&|$)/, "$1"), 10),
                w = parseInt(e.data.replace(/.*width=(\d+)(?:&|$)/, "$1"), 10);
            w > 0 && $.colorbox.resize({
                height: h + 27,
                width: w + 25
            })
        }
    }), registerInsiderInitEvent()
}(jQuery, window),
function(global, factory) {
    "function" == typeof define && define.amd ? define(["jquery"], function(jQuery) {
        return factory(global, jQuery)
    }) : "object" == typeof exports ? factory(global, require("jquery")) : factory(global, global.jQuery)
}("undefined" != typeof window ? window : this, function(window, $) {
    "use strict";

    function matrixEquals(first, second) {
        for (var i = first.length; --i;)
            if (+first[i] !== +second[i]) return !1;
        return !0
    }

    function createResetOptions(opts) {
        var options = {
            range: !0,
            animate: !0
        };
        return "boolean" == typeof opts ? options.animate = opts : $.extend(options, opts), options
    }

    function Matrix(a, b, c, d, e, f, g, h, i) {
        "array" === $.type(a) ? this.elements = [+a[0], +a[2], +a[4], +a[1], +a[3], +a[5], 0, 0, 1] : this.elements = [a, b, c, d, e, f, g || 0, h || 0, i || 1]
    }

    function Vector(x, y, z) {
        this.elements = [x, y, z]
    }

    function Panzoom(elem, options) {
        if (!(this instanceof Panzoom)) return new Panzoom(elem, options);
        1 !== elem.nodeType && $.error("Panzoom called on non-Element node"), $.contains(document, elem) || $.error("Panzoom element must be attached to the document");
        var d = $.data(elem, datakey);
        if (d) return d;
        this.options = options = $.extend({}, Panzoom.defaults, options), this.elem = elem;
        var $elem = this.$elem = $(elem);
        this.$set = options.$set && options.$set.length ? options.$set : $elem, this.$doc = $(elem.ownerDocument || document), this.$parent = $elem.parent(), this.isSVG = rsvg.test(elem.namespaceURI) && "svg" !== elem.nodeName.toLowerCase(), this.panning = !1, this._buildTransform(), this._transform = !this.isSVG && $.cssProps.transform.replace(rupper, "-$1").toLowerCase(), this._buildTransition(), this.resetDimensions();
        var $empty = $(),
            self = this;
        $.each(["$zoomIn", "$zoomOut", "$zoomRange", "$reset"], function(i, name) {
            self[name] = options[name] || $empty
        }), this.enable(), $.data(elem, datakey, this)
    }
    var list = "over out down up move enter leave cancel".split(" "),
        hook = $.extend({}, $.event.mouseHooks),
        events = {};
    if (window.PointerEvent) $.each(list, function(i, name) {
        $.event.fixHooks[events[name] = "pointer" + name] = hook
    });
    else {
        var mouseProps = hook.props;
        hook.props = mouseProps.concat(["touches", "changedTouches", "targetTouches", "altKey", "ctrlKey", "metaKey", "shiftKey"]), hook.filter = function(event, originalEvent) {
            var touch, i = mouseProps.length;
            if (!originalEvent.pageX && originalEvent.touches && (touch = originalEvent.touches[0]))
                for (; i--;) event[mouseProps[i]] = touch[mouseProps[i]];
            return event
        }, $.each(list, function(i, name) {
            if (i < 2) events[name] = "mouse" + name;
            else {
                var touch = "touch" + ("down" === name ? "start" : "up" === name ? "end" : name);
                $.event.fixHooks[touch] = hook, events[name] = touch + " mouse" + name
            }
        })
    }
    $.pointertouch = events;
    var datakey = "__pz__",
        slice = Array.prototype.slice,
        pointerEvents = !!window.PointerEvent,
        rupper = /([A-Z])/g,
        rsvg = /^http:[\w\.\/]+svg$/,
        rinline = /^inline/,
        floating = "(\\-?[\\d\\.e]+)",
        commaSpace = "\\,?\\s*",
        rmatrix = new RegExp("^matrix\\(" + floating + commaSpace + floating + commaSpace + floating + commaSpace + floating + commaSpace + floating + commaSpace + floating + "\\)$");
    return Matrix.prototype = {
        x: function(matrix) {
            var isVector = matrix instanceof Vector,
                a = this.elements,
                b = matrix.elements;
            return isVector && 3 === b.length ? new Vector(a[0] * b[0] + a[1] * b[1] + a[2] * b[2], a[3] * b[0] + a[4] * b[1] + a[5] * b[2], a[6] * b[0] + a[7] * b[1] + a[8] * b[2]) : b.length === a.length && new Matrix(a[0] * b[0] + a[1] * b[3] + a[2] * b[6], a[0] * b[1] + a[1] * b[4] + a[2] * b[7], a[0] * b[2] + a[1] * b[5] + a[2] * b[8], a[3] * b[0] + a[4] * b[3] + a[5] * b[6], a[3] * b[1] + a[4] * b[4] + a[5] * b[7], a[3] * b[2] + a[4] * b[5] + a[5] * b[8], a[6] * b[0] + a[7] * b[3] + a[8] * b[6], a[6] * b[1] + a[7] * b[4] + a[8] * b[7], a[6] * b[2] + a[7] * b[5] + a[8] * b[8])
        },
        inverse: function() {
            var d = 1 / this.determinant(),
                a = this.elements;
            return new Matrix(d * (a[8] * a[4] - a[7] * a[5]), d * -(a[8] * a[1] - a[7] * a[2]), d * (a[5] * a[1] - a[4] * a[2]), d * -(a[8] * a[3] - a[6] * a[5]), d * (a[8] * a[0] - a[6] * a[2]), d * -(a[5] * a[0] - a[3] * a[2]), d * (a[7] * a[3] - a[6] * a[4]), d * -(a[7] * a[0] - a[6] * a[1]), d * (a[4] * a[0] - a[3] * a[1]))
        },
        determinant: function() {
            var a = this.elements;
            return a[0] * (a[8] * a[4] - a[7] * a[5]) - a[3] * (a[8] * a[1] - a[7] * a[2]) + a[6] * (a[5] * a[1] - a[4] * a[2])
        }
    }, Vector.prototype.e = Matrix.prototype.e = function(i) {
        return this.elements[i]
    }, Panzoom.rmatrix = rmatrix, Panzoom.events = $.pointertouch, Panzoom.defaults = {
        eventNamespace: ".panzoom",
        transition: !0,
        cursor: "move",
        disablePan: !1,
        disableZoom: !1,
        increment: .3,
        minScale: .4,
        maxScale: 5,
        rangeStep: .05,
        duration: 200,
        easing: "ease-in-out",
        contain: !1
    }, Panzoom.prototype = {
        constructor: Panzoom,
        instance: function() {
            return this
        },
        enable: function() {
            this._initStyle(), this._bind(), this.disabled = !1
        },
        disable: function() {
            this.disabled = !0, this._resetStyle(), this._unbind()
        },
        isDisabled: function() {
            return this.disabled
        },
        destroy: function() {
            this.disable(), $.removeData(this.elem, datakey)
        },
        resetDimensions: function() {
            var $parent = this.$parent;
            this.container = {
                width: $parent.innerWidth(),
                height: $parent.innerHeight()
            };
            var dims, po = $parent.offset(),
                elem = this.elem,
                $elem = this.$elem;
            this.isSVG ? (dims = elem.getBoundingClientRect(), dims = {
                left: dims.left - po.left,
                top: dims.top - po.top,
                width: dims.width,
                height: dims.height,
                margin: {
                    left: 0,
                    top: 0
                }
            }) : dims = {
                left: $.css(elem, "left", !0) || 0,
                top: $.css(elem, "top", !0) || 0,
                width: $elem.innerWidth(),
                height: $elem.innerHeight(),
                margin: {
                    top: $.css(elem, "marginTop", !0) || 0,
                    left: $.css(elem, "marginLeft", !0) || 0
                }
            }, dims.widthBorder = $.css(elem, "borderLeftWidth", !0) + $.css(elem, "borderRightWidth", !0) || 0, dims.heightBorder = $.css(elem, "borderTopWidth", !0) + $.css(elem, "borderBottomWidth", !0) || 0, this.dimensions = dims
        },
        reset: function(options) {
            options = createResetOptions(options);
            var matrix = this.setMatrix(this._origTransform, options);
            options.silent || this._trigger("reset", matrix)
        },
        resetZoom: function(options) {
            options = createResetOptions(options);
            var origMatrix = this.getMatrix(this._origTransform);
            options.dValue = origMatrix[3], this.zoom(origMatrix[0], options)
        },
        resetPan: function(options) {
            var origMatrix = this.getMatrix(this._origTransform);
            this.pan(origMatrix[4], origMatrix[5], createResetOptions(options))
        },
        setTransform: function(transform) {
            for (var method = this.isSVG ? "attr" : "style", $set = this.$set, i = $set.length; i--;) $[method]($set[i], "transform", transform)
        },
        getTransform: function(transform) {
            var $set = this.$set,
                transformElem = $set[0];
            return transform ? this.setTransform(transform) : transform = $[this.isSVG ? "attr" : "style"](transformElem, "transform"), "none" === transform || rmatrix.test(transform) || this.setTransform(transform = $.css(transformElem, "transform")), transform || "none"
        },
        getMatrix: function(transform) {
            var matrix = rmatrix.exec(transform || this.getTransform());
            return matrix && matrix.shift(), matrix || [1, 0, 0, 1, 0, 0]
        },
        setMatrix: function(matrix, options) {
            if (!this.disabled) {
                options || (options = {}), "string" == typeof matrix && (matrix = this.getMatrix(matrix));
                var dims, container, marginW, marginH, diffW, diffH, left, top, width, height, scale = +matrix[0],
                    $parent = this.$parent,
                    contain = "undefined" != typeof options.contain ? options.contain : this.options.contain;
                return contain && (dims = this._checkDims(), container = this.container, width = dims.width + dims.widthBorder, height = dims.height + dims.heightBorder, marginW = (width * Math.abs(scale) - container.width) / 2, marginH = (height * Math.abs(scale) - container.height) / 2, left = dims.left + dims.margin.left, top = dims.top + dims.margin.top, "invert" === contain ? (diffW = width > container.width ? width - container.width : 0, diffH = height > container.height ? height - container.height : 0, marginW += (container.width - width) / 2, marginH += (container.height - height) / 2, matrix[4] = Math.max(Math.min(matrix[4], marginW - left), -marginW - left - diffW), matrix[5] = Math.max(Math.min(matrix[5], marginH - top), -marginH - top - diffH + dims.heightBorder)) : (marginH += dims.heightBorder / 2, diffW = container.width > width ? container.width - width : 0, diffH = container.height > height ? container.height - height : 0, "center" === $parent.css("textAlign") && rinline.test($.css(this.elem, "display")) ? diffW = 0 : marginW = marginH = 0, matrix[4] = Math.min(Math.max(matrix[4], marginW - left), -marginW - left + diffW), matrix[5] = Math.min(Math.max(matrix[5], marginH - top), -marginH - top + diffH))), "skip" !== options.animate && this.transition(!options.animate), options.range && this.$zoomRange.val(scale), this.setTransform("matrix(" + matrix.join(",") + ")"), options.silent || this._trigger("change", matrix), matrix
            }
        },
        isPanning: function() {
            return this.panning
        },
        transition: function(off) {
            if (this._transition)
                for (var transition = off || !this.options.transition ? "none" : this._transition, $set = this.$set, i = $set.length; i--;) $.style($set[i], "transition") !== transition && $.style($set[i], "transition", transition)
        },
        pan: function(x, y, options) {
            if (!this.options.disablePan) {
                options || (options = {});
                var matrix = options.matrix;
                matrix || (matrix = this.getMatrix()), options.relative && (x += +matrix[4], y += +matrix[5]), matrix[4] = x, matrix[5] = y, this.setMatrix(matrix, options), options.silent || this._trigger("pan", matrix[4], matrix[5])
            }
        },
        zoom: function(scale, opts) {
            "object" == typeof scale ? (opts = scale, scale = null) : opts || (opts = {});
            var options = $.extend({}, this.options, opts);
            if (!options.disableZoom) {
                var animate = !1,
                    matrix = options.matrix || this.getMatrix();
                "number" != typeof scale && (scale = +matrix[0] + options.increment * (scale ? -1 : 1), animate = !0), scale > options.maxScale ? scale = options.maxScale : scale < options.minScale && (scale = options.minScale);
                var focal = options.focal;
                if (focal && !options.disablePan) {
                    var dims = this._checkDims(),
                        clientX = focal.clientX,
                        clientY = focal.clientY;
                    this.isSVG || (clientX -= (dims.width + dims.widthBorder) / 2, clientY -= (dims.height + dims.heightBorder) / 2);
                    var clientV = new Vector(clientX, clientY, 1),
                        surfaceM = new Matrix(matrix),
                        o = this.parentOffset || this.$parent.offset(),
                        offsetM = new Matrix(1, 0, o.left - this.$doc.scrollLeft(), 0, 1, o.top - this.$doc.scrollTop()),
                        surfaceV = surfaceM.inverse().x(offsetM.inverse().x(clientV)),
                        scaleBy = scale / matrix[0];
                    surfaceM = surfaceM.x(new Matrix([scaleBy, 0, 0, scaleBy, 0, 0])), clientV = offsetM.x(surfaceM.x(surfaceV)), matrix[4] = +matrix[4] + (clientX - clientV.e(0)), matrix[5] = +matrix[5] + (clientY - clientV.e(1))
                }
                matrix[0] = scale, matrix[3] = "number" == typeof options.dValue ? options.dValue : scale, this.setMatrix(matrix, {
                    animate: "boolean" == typeof options.animate ? options.animate : animate,
                    range: !options.noSetRange
                }), options.silent || this._trigger("zoom", matrix[0], options)
            }
        },
        option: function(key, value) {
            var options;
            if (!key) return $.extend({}, this.options);
            if ("string" == typeof key) {
                if (1 === arguments.length) return void 0 !== this.options[key] ? this.options[key] : null;
                options = {}, options[key] = value
            } else options = key;
            this._setOptions(options)
        },
        _setOptions: function(options) {
            $.each(options, $.proxy(function(key, value) {
                switch (key) {
                    case "disablePan":
                        this._resetStyle();
                    case "$zoomIn":
                    case "$zoomOut":
                    case "$zoomRange":
                    case "$reset":
                    case "disableZoom":
                    case "onStart":
                    case "onChange":
                    case "onZoom":
                    case "onPan":
                    case "onEnd":
                    case "onReset":
                    case "eventNamespace":
                        this._unbind()
                }
                switch (this.options[key] = value, key) {
                    case "disablePan":
                        this._initStyle();
                    case "$zoomIn":
                    case "$zoomOut":
                    case "$zoomRange":
                    case "$reset":
                        this[key] = value;
                    case "disableZoom":
                    case "onStart":
                    case "onChange":
                    case "onZoom":
                    case "onPan":
                    case "onEnd":
                    case "onReset":
                    case "eventNamespace":
                        this._bind();
                        break;
                    case "cursor":
                        $.style(this.elem, "cursor", value);
                        break;
                    case "minScale":
                        this.$zoomRange.attr("min", value);
                        break;
                    case "maxScale":
                        this.$zoomRange.attr("max", value);
                        break;
                    case "rangeStep":
                        this.$zoomRange.attr("step", value);
                        break;
                    case "startTransform":
                        this._buildTransform();
                        break;
                    case "duration":
                    case "easing":
                        this._buildTransition();
                    case "transition":
                        this.transition();
                        break;
                    case "$set":
                        value instanceof $ && value.length && (this.$set = value, this._initStyle(), this._buildTransform())
                }
            }, this))
        },
        _initStyle: function() {
            var styles = {
                "backface-visibility": "hidden",
                "transform-origin": this.isSVG ? "0 0" : "50% 50%"
            };
            this.options.disablePan || (styles.cursor = this.options.cursor), this.$set.css(styles);
            var $parent = this.$parent;
            $parent.length && !$.nodeName($parent[0], "body") && (styles = {
                overflow: "hidden"
            }, "static" === $parent.css("position") && (styles.position = "relative"), $parent.css(styles))
        },
        _resetStyle: function() {
            this.$elem.css({
                cursor: "",
                transition: ""
            }), this.$parent.css({
                overflow: "",
                position: ""
            })
        },
        _bind: function() {
            var self = this,
                options = this.options,
                ns = options.eventNamespace,
                str_start = pointerEvents ? "pointerdown" + ns : "touchstart" + ns + " mousedown" + ns,
                str_click = pointerEvents ? "pointerup" + ns : "touchend" + ns + " click" + ns,
                events = {},
                $reset = this.$reset,
                $zoomRange = this.$zoomRange;
            if ($.each(["Start", "Change", "Zoom", "Pan", "End", "Reset"], function() {
                    var m = options["on" + this];
                    $.isFunction(m) && (events["panzoom" + this.toLowerCase() + ns] = m)
                }), options.disablePan && options.disableZoom || (events[str_start] = function(e) {
                    var touches;
                    ("touchstart" === e.type ? !(touches = e.touches) || (1 !== touches.length || options.disablePan) && 2 !== touches.length : options.disablePan || 1 !== e.which) || (e.preventDefault(), e.stopPropagation(), self._startMove(e, touches))
                }), this.$elem.on(events), $reset.length && $reset.on(str_click, function(e) {
                    e.preventDefault(), self.reset()
                }), $zoomRange.length && $zoomRange.attr({
                    step: options.rangeStep === Panzoom.defaults.rangeStep && $zoomRange.attr("step") || options.rangeStep,
                    min: options.minScale,
                    max: options.maxScale
                }).prop({
                    value: this.getMatrix()[0]
                }), !options.disableZoom) {
                var $zoomIn = this.$zoomIn,
                    $zoomOut = this.$zoomOut;
                $zoomIn.length && $zoomOut.length && ($zoomIn.on(str_click, function(e) {
                    e.preventDefault(), self.zoom()
                }), $zoomOut.on(str_click, function(e) {
                    e.preventDefault(), self.zoom(!0)
                })), $zoomRange.length && (events = {}, events[(pointerEvents ? "pointerdown" : "mousedown") + ns] = function() {
                    self.transition(!0)
                }, events["change" + ns] = function() {
                    self.zoom(+this.value, {
                        noSetRange: !0
                    })
                }, $zoomRange.on(events))
            }
        },
        _unbind: function() {
            this.$elem.add(this.$zoomIn).add(this.$zoomOut).add(this.$reset).off(this.options.eventNamespace)
        },
        _buildTransform: function() {
            return this._origTransform = this.getTransform(this.options.startTransform)
        },
        _buildTransition: function() {
            if (this._transform) {
                var options = this.options;
                this._transition = this._transform + " " + options.duration + "ms " + options.easing
            }
        },
        _checkDims: function() {
            var dims = this.dimensions;
            return dims.width && dims.height || this.resetDimensions(), this.dimensions
        },
        _getDistance: function(touches) {
            var touch1 = touches[0],
                touch2 = touches[1];
            return Math.sqrt(Math.pow(Math.abs(touch2.clientX - touch1.clientX), 2) + Math.pow(Math.abs(touch2.clientY - touch1.clientY), 2))
        },
        _getMiddle: function(touches) {
            var touch1 = touches[0],
                touch2 = touches[1];
            return {
                clientX: (touch2.clientX - touch1.clientX) / 2 + touch1.clientX,
                clientY: (touch2.clientY - touch1.clientY) / 2 + touch1.clientY
            }
        },
        _trigger: function(event) {
            "string" == typeof event && (event = "panzoom" + event), this.$elem.triggerHandler(event, [this].concat(slice.call(arguments, 1)))
        },
        _startMove: function(event, touches) {
            var move, moveEvent, endEvent, startDistance, startScale, startMiddle, startPageX, startPageY, self = this,
                options = this.options,
                ns = options.eventNamespace,
                matrix = this.getMatrix(),
                original = matrix.slice(0),
                origPageX = +original[4],
                origPageY = +original[5],
                panOptions = {
                    matrix: matrix,
                    animate: "skip"
                };
            pointerEvents ? (moveEvent = "pointermove", endEvent = "pointerup") : "touchstart" === event.type ? (moveEvent = "touchmove", endEvent = "touchend") : (moveEvent = "mousemove", endEvent = "mouseup"), moveEvent += ns, endEvent += ns, this.transition(!0), this.panning = !0, this._trigger("start", event, touches), touches && 2 === touches.length ? (startDistance = this._getDistance(touches), startScale = +matrix[0], startMiddle = this._getMiddle(touches), move = function(e) {
                e.preventDefault();
                var middle = self._getMiddle(touches = e.touches),
                    diff = self._getDistance(touches) - startDistance;
                self.zoom(diff * (options.increment / 100) + startScale, {
                    focal: middle,
                    matrix: matrix,
                    animate: !1
                }), self.pan(+matrix[4] + middle.clientX - startMiddle.clientX, +matrix[5] + middle.clientY - startMiddle.clientY, panOptions), startMiddle = middle
            }) : (startPageX = event.pageX, startPageY = event.pageY, move = function(e) {
                e.preventDefault(), self.pan(origPageX + e.pageX - startPageX, origPageY + e.pageY - startPageY, panOptions)
            }), $(document).off(ns).on(moveEvent, move).on(endEvent, function(e) {
                e.preventDefault(), $(this).off(ns), self.panning = !1, e.type = "panzoomend", self._trigger(e, matrix, !matrixEquals(matrix, original))
            })
        }
    }, $.Panzoom = Panzoom, $.fn.panzoom = function(options) {
        var instance, args, m, ret;
        return "string" == typeof options ? (ret = [], args = slice.call(arguments, 1), this.each(function() {
            instance = $.data(this, datakey), instance ? "_" !== options.charAt(0) && "function" == typeof(m = instance[options]) && void 0 !== (m = m.apply(instance, args)) && ret.push(m) : ret.push(void 0)
        }), ret.length ? 1 === ret.length ? ret[0] : ret : this) : this.each(function() {
            new Panzoom(this, options)
        })
    }, Panzoom
}),
function($) {
    $("body").on("click", ".backtotop", function() {
        $("body, html").animate({
            scrollTop: "0"
        })
    })
}(jQuery), window.espn_ui.Helpers.cookie_monster = function(window, document, $) {
        function recycleCookies() {
            for (var deleteCookie, cookies = document.cookie.split(";"), i = 0; i < cookies.length; i++) {
                var index = cookies[i].indexOf("="),
                    cookieName = index > -1 ? cookies[i].substr(0, index) : cookies[i];
                cookieName = cookieName.trim(), deleteCookie = !0;
                for (var j = 0; j < safeFindList.length; j++)
                    if (safeFindList[j].test(cookieName)) {
                        deleteCookie = !1;
                        break
                    }
                deleteCookie && $.inArray(cookieName, safeList) === -1 && ($.cookie(cookieName, "1", {
                    expires: -1,
                    domain: "." + window.location.hostname
                }), $.cookie(cookieName, "1", {
                    expires: -1,
                    domain: window.location.hostname
                }), $.cookie(cookieName, "1", {
                    expires: -1,
                    domain: "." + window.espn_ui.Helpers.util.getCookieDomain()
                }), $.cookie(cookieName, "1", {
                    expires: -1,
                    domain: window.espn_ui.Helpers.util.getCookieDomain()
                }), $.cookie(cookieName, "1", {
                    expires: -1
                }), eraseCookie(cookieName))
            }
        }

        function createCookie(name, value, days) {
            var expires;
            if (days) {
                var date = new Date;
                date.setTime(date.getTime() + 24 * days * 60 * 60 * 1e3), expires = "; expires=" + date.toGMTString()
            } else expires = "";
            document.cookie = name + "=" + value + expires + "; path=/"
        }

        function readCookie(name) {
            for (var nameEQ = name + "=", ca = document.cookie.split(";"), i = 0; i < ca.length; i++) {
                for (var c = ca[i];
                    " " === c.charAt(0);) c = c.substring(1, c.length);
                if (0 === c.indexOf(nameEQ)) return c.substring(nameEQ.length, c.length)
            }
            return null
        }

        function eraseCookie(name) {
            createCookie(name, "", -1)
        }
        var recyclerCookie = "cookieMonster",
            today = new Date,
            safeList = ["device", "country", "edition", "edition-view", "userab", "espncloud", "GONE", "SWID", "BLUE", "RED", "DE2", "DS", "UNID", "VAS", "espnuk-cookie-consent", "CRBLM", "CRBLM_LAST_UPDATE", "espnAuth", "oidNAVY", "tveAuth", "dtcAuth", recyclerCookie],
            safeFindList = [/s_/, /_s2/, /\.ts$/, /\.auth$/, /-ac$/, /^AMCVS?_/];
        if (!$.cookie(recyclerCookie)) {
            var recyclerExpiration = new Date;
            recyclerExpiration.setDate(today.getDate() + 30), $.cookie(recyclerCookie, "1", {
                expires: recyclerExpiration,
                domain: window.location.hostname
            }), recycleCookies()
        }
        return {
            recycleCookies: recycleCookies,
            createCookie: createCookie,
            readCookie: readCookie,
            eraseCookie: eraseCookie
        }
    }(this, this.document, jQuery),
    function($) {
        window.espn_ui.Helpers.lightbox = function(window) {
            function pinchZoomImage() {
                "mobile" === espn_ui.media_query_in_use && ($(".lightbox").addClass("pinch-to-zoom"), $zoomElem = $(".module_bloom figure img"), $zoomElem.panzoom({
                    minScale: 1,
                    contain: "invert",
                    increment: 1,
                    focal: {
                        clientX: 0,
                        clientY: 1
                    },
                    animate: !0
                }).panzoom("zoom", "none"))
            }

            function destroyPinchZoom() {
                "mobile" === espn_ui.media_query_in_use && ($(".lightbox").removeClass("pinch-to-zoom"), "undefined" != typeof $zoomElem && $zoomElem.panzoom("destroy"))
            }

            function positionPinchZoomImage() {
                var topPadding, height, $image = $(".module_bloom figure img"),
                    device = espn_ui.Helpers.get_media_query_in_use();
                window.innerWidth < window.innerHeight && "mobile" === device ? ! function centerImage() {
                    height = $image.height(), height > 0 ? (topPadding = ($(window).height() - $image.height()) / 3, topPadding < 70 && (topPadding -= 24), $image.parent().css({
                        height: "100%",
                        padding: topPadding + "px 0 0 0",
                        opacity: "0"
                    }), $image.parent().animate({
                        opacity: "1"
                    }, 800)) : setTimeout(centerImage, 50)
                }() : (window.innerWidth > window.innerHeight || window.innerWidth === window.innerHeight || window.innerWidth < window.innerHeight && "mobile" !== device) && ($image.parent().css({
                    height: "",
                    padding: "0 0 0 0",
                    opacity: "0"
                }), $image.parent().animate({
                    opacity: "1"
                }, 800))
            }

            function closeLightbox() {
                $(document).trigger("lightbox.beforeClose");
                var $mask = $(".js-feed-item-mask");
                $lightbox.removeClass("js-bloomed"), destroyPinchZoom(), $mask.removeClass("active").off("click"), $("body").removeClass("inactive"), $("body").removeClass("scroll-locked"), $("body").removeClass("touch-device"), pageOffset && window.scroll(0, pageOffset), $("#global-viewport").removeClass("inactive"), setTimeout(function() {
                    $mask.remove(), $lightbox.remove(), $(".lightbox-container").not(".ReactModal__Overlay").remove(), blooming = !1, "function" == typeof onClosedCallback && onClosedCallback(), $lightbox = null, $lightbox_content = null, $mask = null
                }, 250), $(window).off("windowresize.debounce.module_bloom"), $(window).off("keyup.module_bloom"), $(window).off("close_module_bloom"), $(window).off("lightbox.close"), $(window).off("lightbox.resize"), $(window).off("lightbox.show")
            }

            function calcPosition() {
                var topPosition;
                return topPosition = Math.round(($(window).innerHeight() - $lightbox.outerHeight()) / 2), topPosition < 0 && (topPosition = 0), {
                    top: topPosition
                }
            }
            var $lightbox, $lightbox_content, $mask, onClosedCallback, $zoomElem, pageOffset, espn_ui = window.espn_ui,
                blooming = !1;
            return {
                show: function(options) {
                    onClosedCallback = options.onClosed, blooming = !0, $mask = $('<div class="js-feed-item-mask"></div>'), $lightbox = $(window.JST["lightbox/lightbox"]()), $lightbox_content = "", options.template && ($lightbox_content = $(window.JST["lightbox/" + options.template](options.content_obj).trim()));
                    var $lightbox_images = $($lightbox_content).find("img"),
                        imageLoadCount = 0;
                    if ($lightbox_images.length > 0) {
                        $lightbox.hide(), $lightbox.css({
                            "transition-property": "none",
                            "-webkit-transition-property": "none",
                            "-moz-transition-property": "none",
                            "o-transition-property": "none"
                        });
                        var imagesReady = function() {
                                $lightbox.show(), $lightbox.css({
                                    "transition-property": "all",
                                    "-webkit-transition-property": "all",
                                    "-moz-transition-property": "all",
                                    "o-transition-property": "all"
                                })
                            },
                            imageLoad = function() {
                                $(window).trigger("lightbox.resize"), imageLoadCount++, imageLoadCount === $lightbox_images.length && imagesReady()
                            };
                        $lightbox_images.each(function(i, imageEl) {
                            imageEl.onload = imageLoad, imageEl.error = imageLoad
                        })
                    }
                    $lightbox.addClass(options.className).append($lightbox_content), $("body").addClass("inactive"), $("body").append($mask).append($lightbox), $(".lightbox").wrap("<div class='lightbox-container'></div>");
                    var centered = ($(window).outerHeight() - $lightbox.outerHeight()) / 2;
                    centered < 0 && (centered = 10);
                    var thisOffset = "object" == typeof options.position ? options.position : {
                        top: centered
                    };
                    $lightbox.css(thisOffset), options.scrollTo === !0 && $("html, body").animate({
                        scrollTop: thisOffset.top - 50
                    }), $(".lightbox").hasClass("social") || $(".img-container").addClass("no-thumb"), pageOffset = window.pageYOffset, $("#global-viewport").addClass("inactive"), $("body").addClass("scroll-locked"), window.Modernizr.touch && $("body").addClass("touch-device"), $(".module_bloom").find("img").useCombinerWidth(640), $(".lightbox-container").on("click", function(event) {
                        event && !event.target.href && event.target.className && !event.target.className.match(/button/) && closeLightbox()
                    }), $(".lightbox").on("click", function(event) {
                        event && !event.target.href && event.target.className && !event.target.className.match(/button/) && (event.stopPropagation ? event.stopPropagation() : window.event && (window.event.cancelBubble = !0))
                    }), $(".btn-close", $lightbox).on("click", function() {
                        closeLightbox()
                    }), $(window).on("keyup.module_bloom", function(event) {
                        blooming && 27 === event.keyCode && closeLightbox()
                    }), $(window).on("windowresize.debounce.module_bloom", function() {
                        if (blooming) {
                            "module_bloom" === options.template && ("undefined" != typeof $zoomElem && $zoomElem.panzoom("resetDimensions"), positionPinchZoomImage(), pinchZoomImage());
                            var thisOffset = calcPosition();
                            $lightbox.css({
                                top: thisOffset.top
                            })
                        }
                    }), $(window).on("lightbox.resize", function() {
                        var thisOffset = calcPosition();
                        $lightbox.css({
                            top: thisOffset.top
                        })
                    }), $(window).on("lightbox.close", function() {
                        closeLightbox()
                    }), "module_bloom" === options.template && (pinchZoomImage(), $(".module_bloom figure img").on("load", function() {
                        positionPinchZoomImage()
                    })), $(window).on("close_module_bloom", function() {
                        blooming && closeLightbox()
                    }), espn_ui.LoadBehavior($(".lightbox")), $(document).trigger("lightbox.show"), $mask.addClass("active"), $lightbox.addClass("js-bloomed"), "function" == typeof options.callback && options.callback($lightbox)
                },
                hide: function() {
                    closeLightbox()
                }
            }
        }(this), $(document).on("history.change", function() {
            $(".lightbox").length > 0 && window.espn_ui.Helpers.lightbox.hide()
        })
    }(jQuery),
    function($) {
        function findAndLoadOutbrain($container, options) {
            if ($container && $container.length > 0) {
                var outbrainWidgetId, $outbrainWidget = $container.find(".outbrain-container"),
                    existingId = $outbrainWidget.attr("data-widget-id"),
                    mbCompliantId = espn.i18n.outbrain.mobile.compliantId,
                    mbNonCompliantId = espn.i18n.outbrain.mobile.nonCompliantId,
                    desktopCompliantId = espn.i18n.outbrain.desktop.compliantId,
                    desktopNonCompliantId = espn.i18n.outbrain.desktop.nonCompliantId,
                    mbVideoCompliantId = espn.i18n.outbrain.video.mobile.compliantId,
                    videoCompliantId = espn.i18n.outbrain.video.desktop.compliantId,
                    mbRecapCompliantId = espn.i18n.outbrain.recap.mobile.compliantId,
                    mbRecapNonCompliantId = espn.i18n.outbrain.recap.mobile.nonCompliantId,
                    recapCompliantId = espn.i18n.outbrain.recap.desktop.compliantId,
                    recapNonCompliantId = espn.i18n.outbrain.recap.desktop.nonCompliantId,
                    isApp = "true" === $outbrainWidget.attr("data-app"),
                    isMobile = window.espn_ui && window.espn_ui.device && window.espn_ui.device.isMobile === !0,
                    isRecap = ($container.attr("data-src") || "").indexOf("/recap") > -1 || ($container.attr("data-src") || "").indexOf("/cronica") > -1,
                    isPremium = ($container.attr("data-src") || "").indexOf("/insider/") > -1,
                    isPaywalled = window.espn && window.espn.memberservices && window.espn.memberservices.isInsider() === !1 && isPremium,
                    isNonCompliant = null !== existingId && "undefined" != typeof existingId && "noncompliant" === existingId,
                    type = options.type,
                    referrer = options.referrer,
                    advertisingId = options.advertisingId,
                    compliantId = options.compliantId,
                    nonCompliantId = options.nonCompliantId;
                isApp !== !1 && "app" !== referrer || (compliantId && nonCompliantId || (isMobile ? (outbrainWidgetId = isNonCompliant ? isRecap ? mbRecapNonCompliantId : mbNonCompliantId : mbCompliantId, "video" === type && null != mbVideoCompliantId && "undefined" != typeof mbVideoCompliantId ? outbrainWidgetId = mbVideoCompliantId : isRecap && null != mbRecapCompliantId && "undefined" != typeof mbRecapCompliantId && (outbrainWidgetId = mbRecapCompliantId), isPaywalled && (outbrainWidgetId = mbNonCompliantId)) : (outbrainWidgetId = isNonCompliant ? isRecap ? recapNonCompliantId : desktopNonCompliantId : desktopCompliantId, "video" === type && null != videoCompliantId && "undefined" != typeof videoCompliantId ? outbrainWidgetId = videoCompliantId : isRecap && null != recapCompliantId && "undefined" != typeof recapCompliantId && (outbrainWidgetId = recapCompliantId), isPaywalled && (outbrainWidgetId = desktopNonCompliantId))), isApp && null !== existingId && "undefined" != typeof existingId && (outbrainWidgetId = existingId), compliantId && nonCompliantId && (outbrainWidgetId = isNonCompliant ? nonCompliantId : compliantId), null !== advertisingId && "undefined" != typeof advertisingId && $outbrainWidget.attr("data-ob-user-id", advertisingId), appVersionNumber && $outbrainWidget.attr("data-ob-app-ver", appVersionNumber), $outbrainWidget.attr("data-widget-id", outbrainWidgetId).addClass("OUTBRAIN").removeClass("outbrain-container"), window.espn.plugins && window.espn.plugins.getOutbrain(function() {
                    window.OBR.extern.researchWidget()
                }))
            }
        }

        function findAndLoadTaboola($container, options) {
            var $placeholders, length;
            $container = $container || $("body"), $placeholders = $container.find(selector), length = $placeholders.length, length && (_loaded && options && options.dynamicPageLoad && !options.isEverscroll && _taboola.push({
                notify: "newPageLoad"
            }), $placeholders.each(function(idx) {
                var $taboola = $(this),
                    taboolaLoaded = $taboola.is("[id]");
                if (!taboolaLoaded) {
                    var placementConfig, data = $taboola.data(),
                        canonical = data.src,
                        placement = data.placement,
                        mode = data.mode || "thumbnails-3x2-a",
                        targetType = data.targetType || "mix",
                        type = data.type || "other",
                        network = data.network,
                        containerId = "taboola-container-" + Math.floor(999999 * Math.random()),
                        typeConfig = {
                            url: canonical
                        },
                        isLastPlacement = idx === length - 1;
                    typeConfig[type] = "auto", placementConfig = {
                        mode: mode,
                        container: containerId,
                        placement: placement,
                        target_type: targetType
                    }, $taboola.attr("id", containerId), getTaboola({
                        network: network
                    }).then(function() {
                        _taboola.push(typeConfig), _taboola.push(placementConfig), isLastPlacement && _taboola.push({
                            flush: !0
                        })
                    })
                }
            }))
        }

        function findAndLoadSponsoredLinks($container, options) {
            return adlite || admgr.hasEPlus() ? void $(".sponsored-links").remove() : void(taboolaEnabled ? findAndLoadTaboola($container, options) : outbrainEnabled && findAndLoadOutbrain($container, options))
        }

        function getTaboola(options) {
            return new Promise(function(resolve) {
                var network;
                return _loaded === !0 ? resolve() : (_queue.push(resolve), void(_loading === !1 && (_loading = !0, network = options && options.network || "espn-network", $.getScriptCache("//cdn.taboola.com/libtrc/" + network + "/loader.js", function() {
                    for (_loaded = !0, _loading = !1; _queue.length;) _queue.shift()()
                }))))
            })
        }

        function userParsed() {
            return new Promise(function(resolve) {
                return espn_ui.userParsed || !espn.memberservices ? resolve() : void $.subscribe("user.parsed", function() {
                    resolve()
                })
            })
        }

        function deferReady() {
            return new Promise(function(resolve) {
                return espn_ui.deferReady ? resolve() : void $.subscribe("espn.defer.end", function() {
                    resolve()
                })
            })
        }

        function init($container, options) {
            Promise.all([deferReady(), userParsed()]).then(function() {
                findAndLoadSponsoredLinks($container, options)
            })
        }

        function dynamicPageLoad($container, everscroll) {
            init($container, {
                dynamicPageLoad: !0,
                isEverscroll: everscroll
            })
        }
        var appVersionNumber, espn_ui = window.espn_ui,
            espn = window.espn || {},
            adlite = espn.ads && espn.ads.adlite,
            i18n = espn.i18n,
            taboola = i18n && i18n.taboola || {},
            outbrain = i18n && i18n.outbrain || {},
            taboolaCMSEnabled = taboola.cmsEnabled,
            taboolaEditionEnabled = taboola.editionEnabled,
            outbrainCMSEnabled = outbrain.cmsEnabled,
            outbrainEditionEnabled = outbrain.editionEnabled,
            taboolaEnabled = taboolaCMSEnabled && taboolaEditionEnabled,
            outbrainEnabled = outbrainCMSEnabled && outbrainEditionEnabled,
            sponsorEnabled = taboolaEnabled || outbrainEnabled,
            isArticleWebview = "article" === espn_ui.webviewType,
            selector = ("story" === $("body").attr("data-pageType"), ".taboola-container"),
            _taboola = window._taboola = window._taboola || [],
            _loaded = !1,
            _loading = !1,
            _queue = [];
        espn_ui.Helpers.sponsored_links = {}, espn_ui.Helpers.sponsored_links.initOutbrainExternal = function(advertisingId, appVersion, compliantId, nonCompliantId) {
            appVersion && "string" == typeof appVersion && !appVersionNumber && (appVersionNumber = appVersion), init(null, {
                referrer: "app",
                advertisingId: advertisingId,
                type: null,
                compliantId: compliantId,
                nonCompliantId: nonCompliantId,
                dynamicPageLoad: _loaded
            })
        }, sponsorEnabled && !isArticleWebview && ($(document).on("page.scroll", function(e, story) {
            var storyId = story.uid || story.id,
                $article = $('article.article[data-id="' + storyId + '"]');
            dynamicPageLoad($article, !0)
        }), $(document).on("page.load", function() {
            dynamicPageLoad(null, !1)
        }), init())
    }(window.jQuery),
    function() {
        window.espn_ui.Helpers.detect_wake_from_sleep = function() {
            function detectWakeFromSleep() {
                var now = (new Date).getTime();
                if (now - _initialLoadTime > 12e4) {
                    if (window.navigator.onLine === !1) return !1;
                    location.reload()
                }
                return _initialLoadTime = now, !0
            }
            var _initialLoadTime = (new Date).getTime();
            window.setInterval(detectWakeFromSleep, 2e3)
        }, window.espn_ui.Helpers.detect_wake_from_sleep()
    }(),
    function($) {
        function isMobile() {
            var u = navigator.userAgent;
            return u.match(/Mobile/i) || u.match(/Android/i) || u.match(/iPad/i) || u.match(/Mini/i) || u.match(/Silk/i)
        }

        function openSocialWindow(event, href, width, height) {
            var opener = window.open(href, "_blank", "noresizable,noscrollbars,width=" + width + ",height=" + height),
                windowBlocked = "undefined" == typeof opener && isMobile();
            windowBlocked || (event.returnValue = !1, event.preventDefault && (event.preventDefault(), event.stopPropagation()))
        }
        var $body = $("body"),
            isDataLite = window.espn && "data-lite" === window.espn.siteType;
        espn_ui.deferReady ? window.espn.plugins.getTwitter(function() {
            window.twttr.widgets.load(document.getElementById("now-feed"))
        }) : $.subscribe("espn.defer.ready", function() {
            window.espn.plugins.getTwitter(function() {
                window.twttr.widgets.load(document.getElementById("now-feed"))
            })
        }), $body.on("click", ".btn-social.icon-twitter-solid-before, .twitter-controls a, .social-clicks-twitter", function(event) {
            event.preventDefault(), isDataLite && openSocialWindow(event, $(this).attr("href"), 550, 420), $.publish("espn.social-clicks.share", [event, "Twitter", null])
        }), $body.on("click", ".btn-social.icon-facebook-solid-before, .social-clicks-facebook", function(event) {
            var href = $(this).attr("href");
            openSocialWindow(event, href, 550, 420), $.publish("espn.social-clicks.share", [event, "Facebook", null])
        }), $body.on("click", ".btn-social.icon-pinterest-solid-before", function(event) {
            var href = $(this).attr("href");
            openSocialWindow(event, href, 750, 500), $.publish("espn.social-clicks.share", [event, "Pinterest", null])
        }), $body.on("click", ".btn-social.icon-whatsapp-solid-before", function(event) {
            var cb = function() {
                window.location = $(event.target).attr("href")
            };
            $.publish("espn.social-clicks.share", [event, "Whatsapp", cb])
        }), $body.on("click", ".btn-social.icon-facebook-messenger-solid-before", function(event) {
            var href = $(this).attr("href"),
                articleUrl = $(this).parents(".article-social").attr("data-src");
            if (isMobile()) {
                event.preventDefault(), event.stopPropagation();
                var fbAppId = espn && espn.i18n && espn.i18n.facebook && espn.i18n.facebook.appId || 0x6a1921145b75;
                href = "fb-messenger://share?link=" + articleUrl + "&app_id=" + fbAppId, window.location = href, $(this).attr("href", href)
            } else openSocialWindow(event, href, 1e3, 700);
            $.publish("espn.social-clicks.share", [event, "Facebook Messenger", null])
        }), $body.on("click", ".page-action.icon-print-solid-before", function(event) {
            event.preventDefault();
            var href = $(this).attr("href"),
                opener = window.open(href, "_blank"),
                windowBlocked = "undefined" == typeof opener && isMobile();
            windowBlocked || (event.returnValue = !1, event.preventDefault && event.preventDefault()), $.publish("espn.social-clicks.share", [event, "Print", null])
        }), $body.on("click", ".btn-social.icon-email-solid-before, .social-clicks-email", function(event) {
            if (event.preventDefault(), event.stopPropagation(), isDataLite) window.location = $(event.target).attr("href");
            else {
                var cb = function() {
                    window.location = $(event.target).attr("href")
                };
                $.publish("espn.social-clicks.share", [event, "Email", cb])
            }
        }), $body.on("click", ".page-action.icon-comment-solid-before", function(event) {
            event.preventDefault(), $.publish("espn.social-clicks.share", [event, "Comment", null])
        })
    }(jQuery), window.espn_ui.Helpers.geo = function(window, document, $) {
        var countryMap = {
            FSM: "FM",
            JAM: "JM",
            SHN: "SH",
            CXR: "CX",
            TLS: "TL",
            ROU: "RO",
            BTN: "BT",
            DJI: "DJ",
            KGZ: "KG",
            MOZ: "MZ",
            NOR: "NO",
            SYR: "SY",
            JPN: "JP",
            UZB: "UZ",
            FRO: "FO",
            IND: "IN",
            ARE: "AE",
            SYC: "SC",
            MNP: "MP",
            ARG: "AR",
            MNG: "MN",
            ARM: "AM",
            MNE: "ME",
            GEO: "GE",
            IMN: "IM",
            TJK: "TJ",
            KEN: "KE",
            GUY: "GY",
            ASM: "AS",
            SJM: "SJ",
            LIE: "LI",
            BDI: "BI",
            PYF: "PF",
            DMA: "DM",
            SAU: "SA",
            MMR: "MM",
            ATG: "AG",
            TKM: "TM",
            TKL: "TK",
            MLI: "ML",
            ABW: "AW",
            ATF: "TF",
            NPL: "NP",
            GTM: "GT",
            BFA: "BF",
            CUB: "CU",
            GUF: "GF",
            GUM: "GU",
            KWT: "KW",
            IOT: "IO",
            JOR: "JO",
            GGY: "GG",
            PHL: "PH",
            MLT: "MT",
            ZMB: "ZM",
            ATA: "AQ",
            BEN: "BJ",
            UKR: "UA",
            BEL: "BE",
            NAM: "NA",
            SUR: "SR",
            AUS: "AU",
            TZA: "TZ",
            BGD: "BD",
            MKD: "MK",
            SDN: "SD",
            GHA: "GH",
            THA: "TH",
            LKA: "LK",
            HMD: "HM",
            MYT: "YT",
            GIN: "GN",
            SEN: "SN",
            GIB: "GI",
            MYS: "MY",
            BWA: "BW",
            BGR: "BG",
            AUT: "AT",
            BVT: "BV",
            UMI: "UM",
            STP: "ST",
            HND: "HN",
            SWZ: "SZ",
            ZAF: "ZA",
            DZA: "DZ",
            KIR: "KI",
            VNM: "VN",
            TWN: "TW",
            CHE: "CH",
            BHR: "BH",
            BHS: "BS",
            AGO: "AO",
            SWE: "SE",
            CHL: "CL",
            CZE: "CZ",
            CHN: "CN",
            HKG: "HK",
            TGO: "TG",
            CYM: "KY",
            CIV: "CI",
            SGS: "GS",
            NLD: "NL",
            SGP: "SG",
            CYP: "CY",
            KHM: "KH",
            MHL: "MH",
            AFG: "AF",
            SVK: "SK",
            SVN: "SI",
            PLW: "PW",
            BIH: "BA",
            NFK: "NF",
            UGA: "UG",
            TTO: "TT",
            KOR: "KR",
            COK: "CK",
            YEM: "YE",
            COG: "CG",
            COD: "CD",
            PNG: "PG",
            HTI: "HT",
            RWA: "RW",
            TCA: "TC",
            FIN: "FI",
            MEX: "MX",
            TCD: "TD",
            SPM: "PM",
            IDN: "ID",
            REU: "RE",
            HRV: "HR",
            MWI: "MW",
            COM: "KM",
            VUT: "VU",
            TUN: "TN",
            COL: "CO",
            AZE: "AZ",
            TUR: "TR",
            POL: "PL",
            TUV: "TV",
            FJI: "FJ",
            GNQ: "GQ",
            NGA: "NG",
            VAT: "VA",
            AIA: "AI",
            PAN: "PA",
            GNB: "GW",
            BLM: "BL",
            MDV: "MV",
            PAK: "PK",
            SRB: "RS",
            MDG: "MG",
            VEN: "VE",
            WSM: "WS",
            URY: "UY",
            HUN: "HU",
            EGY: "EG",
            BLR: "BY",
            MDA: "MD",
            ALA: "AX",
            MUS: "MU",
            ALB: "AL",
            BLZ: "BZ",
            KNA: "KN",
            CMR: "CM",
            OMN: "OM",
            GMB: "GM",
            SSD: "SS",
            NIU: "NU",
            BMU: "BM",
            VCT: "VC",
            FLK: "FK",
            USA: "US",
            NZL: "NZ",
            GLP: "GP",
            LAO: "LA",
            MTQ: "MQ",
            NIC: "NI",
            PRY: "PY",
            ESH: "EH",
            PRT: "PT",
            CAF: "CF",
            ISR: "IL",
            KAZ: "KZ",
            VGB: "VG",
            SLE: "SL",
            PCN: "PN",
            ISL: "IS",
            SLB: "SB",
            LSO: "LS",
            PRI: "PR",
            DNK: "DK",
            BOL: "BO",
            DEU: "DE",
            AND: "AD",
            LBN: "LB",
            ITA: "IT",
            SLV: "SV",
            LBR: "LR",
            CAN: "CA",
            PRK: "KP",
            MSR: "MS",
            LBY: "LY",
            QAT: "QA",
            WLF: "WF",
            IRQ: "IQ",
            ETH: "ET",
            LCA: "LC",
            IRN: "IR",
            NCL: "NC",
            NRU: "NR",
            MCO: "MC",
            IRL: "IE",
            DOM: "DO",
            GRL: "GL",
            JEY: "JE",
            PSE: "PS",
            GAB: "GA",
            EST: "EE",
            SMR: "SM",
            MRT: "MR",
            ESP: "ES",
            VIR: "VI",
            CCK: "CC",
            ECU: "EC",
            PER: "PE",
            GRC: "GR",
            GRD: "GD",
            FRA: "FR",
            CPV: "CV",
            LUX: "LU",
            ZWE: "ZW",
            GBR: "GB",
            LVA: "LV",
            MAF: "MF",
            ERI: "ER",
            NER: "NE",
            MAR: "MA",
            LTU: "LT",
            ANT: "AN",
            SOM: "SO",
            BRN: "BN",
            RUS: "RU",
            CRI: "CR",
            MAC: "MO",
            BRA: "BR",
            TON: "TO",
            BRB: "BB"
        };
        return null === $.cookie("country") && espn.geo.getLocation().done(function(geo) {
            if (geo && geo.country) {
                var isoCode = geo.country.isoCode.toUpperCase(),
                    twoLetterIsoCode = countryMap[isoCode];
                void 0 !== twoLetterIsoCode && espn_ui.Helpers.cookie_monster.createCookie("country", twoLetterIsoCode.toLowerCase(), 7)
            }
        }), {
            countryMap: countryMap
        }
    }(this, this.document, jQuery),
    function(espn) {
        window.espn = espn || {}, espn.bandwidth = {
            test: function(callback, options) {
                function _done() {
                    var bandwidth = Math.max.apply(Math, files.map(function(file) {
                        return file.bandwidth || -(1 / 0)
                    }));
                    callback(bandwidth, {
                        downloads: count
                    })
                }

                function _calculateBandwidthForFile(file) {
                    var seconds = (file.endTime - file.startTime) / 1e3,
                        kb = 8 * file.bytes / 1e3;
                    if (seconds > 0) return kb / seconds
                }

                function _download(file) {
                    var xhr = new XMLHttpRequest;
                    xhr.onloadstart = function() {
                        file.startTime = +new Date
                    }, xhr.onreadystatechange = function() {
                        4 === xhr.readyState && 200 === xhr.status && (file.endTime = +new Date, file.bandwidth = _calculateBandwidthForFile(file), ++count === files.length ? _done() : options && options.max && file.bandwidth >= options.max ? _done() : options && options.min && file.bandwidth < options.min ? _done() : _download(files[count]))
                    }, xhr.open("GET", file.url + "?rand=" + Math.floor(1e8 * Math.random())), file.startTime = +new Date, xhr.send()
                }
                var count = 0,
                    files = [{
                        url: "https://a.espncdn.com/i/data-lite/32k.jpg",
                        bytes: 32768
                    }];
                callback = callback || function() {}, options = options || {}, _download(files[0])
            }
        }, $ && espn.i18n && "espncricinfo" === espn.i18n.site && $.subscribe("espn.defer.ready", function() {
            if (window.espn && espn.geo && espn.bandwidth && espn.isOneSite && $.cookie("connectionspeed")) {
                var cookieName = "_bandwidth",
                    forceBandwidthTest = /[?&]forceBandwidthTest=true(?:$|&)/.test(window.location.search);
                (!$.cookie(cookieName) && !espn.core.loggedIn || forceBandwidthTest) && espn.geo.getLocation().done(function(geo) {
                    ("mobile" === geo.connection || forceBandwidthTest) && espn.bandwidth.test(function(bandwidth) {
                        bandwidth = Math.round(bandwidth);
                        var THRESHOLD = 550;
                        bandwidth <= THRESHOLD ? "data-lite" == espn.siteType || (espn.setSiteType("data-lite", 1, !1), $.ajaxSetup({
                            beforeSend: function() {
                                return !1
                            }
                        })) : "data-lite" == espn.siteType && (espn.setSiteType("full", 14, !1), $.ajaxSetup({
                            beforeSend: function() {
                                return !1
                            }
                        })), $.cookie(cookieName, bandwidth)
                    })
                })
            }
        })
    }(window.espn),
    function($) {
        $.publish("espn.defer-low.end", []), $(document).ready(function() {
            $.publish("espn.defer-low.ready", [])
        })
    }(window.jQuery);