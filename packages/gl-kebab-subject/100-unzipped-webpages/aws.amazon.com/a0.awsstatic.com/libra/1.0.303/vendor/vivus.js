/**
 * vivus - JavaScript library to make drawing animation on SVG
 * @version v0.4.1
 * @link https://github.com/maxwellito/vivus
 * @license MIT
 */
"use strict";
(function() {
    "use strict";

    function Pathformer(element) {
        if (typeof element === "undefined") {
            throw new Error('Pathformer [constructor]: "element" parameter is required')
        }
        if (element.constructor === String) {
            element = document.getElementById(element);
            if (!element) {
                throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID')
            }
        }
        if (element instanceof window.SVGElement || element instanceof window.SVGGElement || /^svg$/i.test(element.nodeName)) {
            this.el = element
        } else {
            throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement')
        }
        this.scan(element)
    }
    Pathformer.prototype.TYPES = ["line", "ellipse", "circle", "polygon", "polyline", "rect"];
    Pathformer.prototype.ATTR_WATCH = ["cx", "cy", "points", "r", "rx", "ry", "x", "x1", "x2", "y", "y1", "y2"];
    Pathformer.prototype.scan = function(svg) {
        var fn, element, pathData, pathDom, elements = svg.querySelectorAll(this.TYPES.join(","));
        for (var i = 0; i < elements.length; i++) {
            element = elements[i];
            fn = this[element.tagName.toLowerCase() + "ToPath"];
            pathData = fn(this.parseAttr(element.attributes));
            pathDom = this.pathMaker(element, pathData);
            element.parentNode.replaceChild(pathDom, element)
        }
    };
    Pathformer.prototype.lineToPath = function(element) {
        var newElement = {},
            x1 = element.x1 || 0,
            y1 = element.y1 || 0,
            x2 = element.x2 || 0,
            y2 = element.y2 || 0;
        newElement.d = "M" + x1 + "," + y1 + "L" + x2 + "," + y2;
        return newElement
    };
    Pathformer.prototype.rectToPath = function(element) {
        var newElement = {},
            x = parseFloat(element.x) || 0,
            y = parseFloat(element.y) || 0,
            width = parseFloat(element.width) || 0,
            height = parseFloat(element.height) || 0;
        newElement.d = "M" + x + " " + y + " ";
        newElement.d += "L" + (x + width) + " " + y + " ";
        newElement.d += "L" + (x + width) + " " + (y + height) + " ";
        newElement.d += "L" + x + " " + (y + height) + " Z";
        return newElement
    };
    Pathformer.prototype.polylineToPath = function(element) {
        var newElement = {},
            points = element.points.trim().split(" "),
            i, path;
        if (element.points.indexOf(",") === -1) {
            var formattedPoints = [];
            for (i = 0; i < points.length; i += 2) {
                formattedPoints.push(points[i] + "," + points[i + 1])
            }
            points = formattedPoints
        }
        path = "M" + points[0];
        for (i = 1; i < points.length; i++) {
            if (points[i].indexOf(",") !== -1) {
                path += "L" + points[i]
            }
        }
        newElement.d = path;
        return newElement
    };
    Pathformer.prototype.polygonToPath = function(element) {
        var newElement = Pathformer.prototype.polylineToPath(element);
        newElement.d += "Z";
        return newElement
    };
    Pathformer.prototype.ellipseToPath = function(element) {
        var newElement = {},
            rx = parseFloat(element.rx) || 0,
            ry = parseFloat(element.ry) || 0,
            cx = parseFloat(element.cx) || 0,
            cy = parseFloat(element.cy) || 0,
            startX = cx - rx,
            startY = cy,
            endX = parseFloat(cx) + parseFloat(rx),
            endY = cy;
        newElement.d = "M" + startX + "," + startY + "A" + rx + "," + ry + " 0,1,1 " + endX + "," + endY + "A" + rx + "," + ry + " 0,1,1 " + startX + "," + endY;
        return newElement
    };
    Pathformer.prototype.circleToPath = function(element) {
        var newElement = {},
            r = parseFloat(element.r) || 0,
            cx = parseFloat(element.cx) || 0,
            cy = parseFloat(element.cy) || 0,
            startX = cx - r,
            startY = cy,
            endX = parseFloat(cx) + parseFloat(r),
            endY = cy;
        newElement.d = "M" + startX + "," + startY + "A" + r + "," + r + " 0,1,1 " + endX + "," + endY + "A" + r + "," + r + " 0,1,1 " + startX + "," + endY;
        return newElement
    };
    Pathformer.prototype.pathMaker = function(element, pathData) {
        var i, attr, pathTag = document.createElementNS("http://www.w3.org/2000/svg", "path");
        for (i = 0; i < element.attributes.length; i++) {
            attr = element.attributes[i];
            if (this.ATTR_WATCH.indexOf(attr.name) === -1) {
                pathTag.setAttribute(attr.name, attr.value)
            }
        }
        for (i in pathData) {
            pathTag.setAttribute(i, pathData[i])
        }
        return pathTag
    };
    Pathformer.prototype.parseAttr = function(element) {
        var attr, output = {};
        for (var i = 0; i < element.length; i++) {
            attr = element[i];
            if (this.ATTR_WATCH.indexOf(attr.name) !== -1 && attr.value.indexOf("%") !== -1) {
                throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.")
            }
            output[attr.name] = attr.value
        }
        return output
    };
    "use strict";
    var setupEnv, requestAnimFrame, cancelAnimFrame, parsePositiveInt;

    function Vivus(element, options, callback) {
        setupEnv();
        this.isReady = false;
        this.setElement(element, options);
        this.setOptions(options);
        this.setCallback(callback);
        if (this.isReady) {
            this.init()
        }
    }
    Vivus.LINEAR = function(x) {
        return x
    };
    Vivus.EASE = function(x) {
        return -Math.cos(x * Math.PI) / 2 + .5
    };
    Vivus.EASE_OUT = function(x) {
        return 1 - Math.pow(1 - x, 3)
    };
    Vivus.EASE_IN = function(x) {
        return Math.pow(x, 3)
    };
    Vivus.EASE_OUT_BOUNCE = function(x) {
        var base = -Math.cos(x * (.5 * Math.PI)) + 1,
            rate = Math.pow(base, 1.5),
            rateR = Math.pow(1 - x, 2),
            progress = -Math.abs(Math.cos(rate * (2.5 * Math.PI))) + 1;
        return 1 - rateR + progress * rateR
    };
    Vivus.prototype.setElement = function(element, options) {
        if (typeof element === "undefined") {
            throw new Error('Vivus [constructor]: "element" parameter is required')
        }
        if (element.constructor === String) {
            element = document.getElementById(element);
            if (!element) {
                throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID')
            }
        }
        this.parentEl = element;
        if (options && options.file) {
            var objElm = document.createElement("object");
            objElm.setAttribute("type", "image/svg+xml");
            objElm.setAttribute("data", options.file);
            objElm.setAttribute("built-by-vivus", "true");
            element.appendChild(objElm);
            element = objElm
        }
        switch (element.constructor) {
            case window.SVGSVGElement:
            case window.SVGElement:
            case window.SVGGElement:
                this.el = element;
                this.isReady = true;
                break;
            case window.HTMLObjectElement:
                var onLoad, self;
                self = this;
                onLoad = function(e) {
                    if (self.isReady) {
                        return
                    }
                    self.el = element.contentDocument && element.contentDocument.querySelector("svg");
                    if (!self.el && e) {
                        throw new Error("Vivus [constructor]: object loaded does not contain any SVG")
                    } else if (self.el) {
                        if (element.getAttribute("built-by-vivus")) {
                            self.parentEl.insertBefore(self.el, element);
                            self.parentEl.removeChild(element);
                            self.el.setAttribute("width", "100%");
                            self.el.setAttribute("height", "100%")
                        }
                        self.isReady = true;
                        self.init();
                        return true
                    }
                };
                if (!onLoad()) {
                    element.addEventListener("load", onLoad)
                }
                break;
            default:
                throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')
        }
    };
    Vivus.prototype.setOptions = function(options) {
        var allowedTypes = ["delayed", "sync", "async", "nsync", "oneByOne", "scenario", "scenario-sync"];
        var allowedStarts = ["inViewport", "manual", "autostart"];
        if (options !== undefined && options.constructor !== Object) {
            throw new Error('Vivus [constructor]: "options" parameter must be an object')
        } else {
            options = options || {}
        }
        if (options.type && allowedTypes.indexOf(options.type) === -1) {
            throw new Error("Vivus [constructor]: " + options.type + " is not an existing animation `type`")
        } else {
            this.type = options.type || allowedTypes[0]
        }
        if (options.start && allowedStarts.indexOf(options.start) === -1) {
            throw new Error("Vivus [constructor]: " + options.start + " is not an existing `start` option")
        } else {
            this.start = options.start || allowedStarts[0]
        }
        this.isIE = window.navigator.userAgent.indexOf("MSIE") !== -1 || window.navigator.userAgent.indexOf("Trident/") !== -1 || window.navigator.userAgent.indexOf("Edge/") !== -1;
        this.duration = parsePositiveInt(options.duration, 120);
        this.delay = parsePositiveInt(options.delay, null);
        this.dashGap = parsePositiveInt(options.dashGap, 1);
        this.forceRender = options.hasOwnProperty("forceRender") ? !!options.forceRender : this.isIE;
        this.reverseStack = !!options.reverseStack;
        this.selfDestroy = !!options.selfDestroy;
        this.onReady = options.onReady;
        this.map = [];
        this.frameLength = this.currentFrame = this.delayUnit = this.speed = this.handle = null;
        this.ignoreInvisible = options.hasOwnProperty("ignoreInvisible") ? !!options.ignoreInvisible : false;
        this.animTimingFunction = options.animTimingFunction || Vivus.LINEAR;
        this.pathTimingFunction = options.pathTimingFunction || Vivus.LINEAR;
        if (this.delay >= this.duration) {
            throw new Error("Vivus [constructor]: delay must be shorter than duration")
        }
    };
    Vivus.prototype.setCallback = function(callback) {
        if (!!callback && callback.constructor !== Function) {
            throw new Error('Vivus [constructor]: "callback" parameter must be a function')
        }
        this.callback = callback || function() {}
    };
    Vivus.prototype.mapping = function() {
        var i, paths, path, pAttrs, pathObj, totalLength, lengthMeter, timePoint;
        timePoint = totalLength = lengthMeter = 0;
        paths = this.el.querySelectorAll("path");
        for (i = 0; i < paths.length; i++) {
            path = paths[i];
            if (this.isInvisible(path)) {
                continue
            }
            pathObj = {
                el: path,
                length: Math.ceil(path.getTotalLength())
            };
            if (isNaN(pathObj.length)) {
                if (window.console && console.warn) {
                    console.warn("Vivus [mapping]: cannot retrieve a path element length", path)
                }
                continue
            }
            this.map.push(pathObj);
            path.style.strokeDasharray = pathObj.length + " " + (pathObj.length + this.dashGap * 2);
            path.style.strokeDashoffset = pathObj.length + this.dashGap;
            pathObj.length += this.dashGap;
            totalLength += pathObj.length;
            this.renderPath(i)
        }
        totalLength = totalLength === 0 ? 1 : totalLength;
        this.delay = this.delay === null ? this.duration / 3 : this.delay;
        this.delayUnit = this.delay / (paths.length > 1 ? paths.length - 1 : 1);
        if (this.reverseStack) {
            this.map.reverse()
        }
        for (i = 0; i < this.map.length; i++) {
            pathObj = this.map[i];
            switch (this.type) {
                case "delayed":
                    pathObj.startAt = this.delayUnit * i;
                    pathObj.duration = this.duration - this.delay;
                    break;
                case "oneByOne":
                    pathObj.startAt = lengthMeter / totalLength * this.duration;
                    pathObj.duration = pathObj.length / totalLength * this.duration;
                    break;
                case "sync":
                case "async":
                case "nsync":
                    pathObj.startAt = 0;
                    pathObj.duration = this.duration;
                    break;
                case "scenario-sync":
                    path = pathObj.el;
                    pAttrs = this.parseAttr(path);
                    pathObj.startAt = timePoint + (parsePositiveInt(pAttrs["data-delay"], this.delayUnit) || 0);
                    pathObj.duration = parsePositiveInt(pAttrs["data-duration"], this.duration);
                    timePoint = pAttrs["data-async"] !== undefined ? pathObj.startAt : pathObj.startAt + pathObj.duration;
                    this.frameLength = Math.max(this.frameLength, pathObj.startAt + pathObj.duration);
                    break;
                case "scenario":
                    path = pathObj.el;
                    pAttrs = this.parseAttr(path);
                    pathObj.startAt = parsePositiveInt(pAttrs["data-start"], this.delayUnit) || 0;
                    pathObj.duration = parsePositiveInt(pAttrs["data-duration"], this.duration);
                    this.frameLength = Math.max(this.frameLength, pathObj.startAt + pathObj.duration);
                    break
            }
            lengthMeter += pathObj.length;
            this.frameLength = this.frameLength || this.duration
        }
    };
    Vivus.prototype.drawer = function() {
        var self = this;
        this.currentFrame += this.speed;
        if (this.currentFrame <= 0) {
            this.stop();
            this.reset()
        } else if (this.currentFrame >= this.frameLength) {
            this.stop();
            this.currentFrame = this.frameLength;
            this.trace();
            if (this.selfDestroy) {
                this.destroy()
            }
        } else {
            this.trace();
            this.handle = requestAnimFrame(function() {
                self.drawer()
            });
            return
        }
        this.callback(this);
        if (this.instanceCallback) {
            this.instanceCallback(this);
            this.instanceCallback = null
        }
    };
    Vivus.prototype.trace = function() {
        var i, progress, path, currentFrame;
        currentFrame = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength;
        for (i = 0; i < this.map.length; i++) {
            path = this.map[i];
            progress = (currentFrame - path.startAt) / path.duration;
            progress = this.pathTimingFunction(Math.max(0, Math.min(1, progress)));
            if (path.progress !== progress) {
                path.progress = progress;
                path.el.style.strokeDashoffset = Math.floor(path.length * (1 - progress));
                this.renderPath(i)
            }
        }
    };
    Vivus.prototype.renderPath = function(index) {
        if (this.forceRender && this.map && this.map[index]) {
            var pathObj = this.map[index],
                newPath = pathObj.el.cloneNode(true);
            pathObj.el.parentNode.replaceChild(newPath, pathObj.el);
            pathObj.el = newPath
        }
    };
    Vivus.prototype.init = function() {
        this.frameLength = 0;
        this.currentFrame = 0;
        this.map = [];
        new Pathformer(this.el);
        this.mapping();
        this.starter();
        if (this.onReady) {
            this.onReady(this)
        }
    };
    Vivus.prototype.starter = function() {
        switch (this.start) {
            case "manual":
                return;
            case "autostart":
                this.play();
                break;
            case "inViewport":
                var self = this,
                    listener = function() {
                        if (self.isInViewport(self.parentEl, 1)) {
                            self.play();
                            window.removeEventListener("scroll", listener)
                        }
                    };
                window.addEventListener("scroll", listener);
                listener();
                break
        }
    };
    Vivus.prototype.getStatus = function() {
        return this.currentFrame === 0 ? "start" : this.currentFrame === this.frameLength ? "end" : "progress"
    };
    Vivus.prototype.reset = function() {
        return this.setFrameProgress(0)
    };
    Vivus.prototype.finish = function() {
        return this.setFrameProgress(1)
    };
    Vivus.prototype.setFrameProgress = function(progress) {
        progress = Math.min(1, Math.max(0, progress));
        this.currentFrame = Math.round(this.frameLength * progress);
        this.trace();
        return this
    };
    Vivus.prototype.play = function(speed, callback) {
        this.instanceCallback = null;
        if (speed && typeof speed === "function") {
            this.instanceCallback = speed;
            speed = null
        } else if (speed && typeof speed !== "number") {
            throw new Error("Vivus [play]: invalid speed")
        }
        if (callback && typeof callback === "function" && !this.instanceCallback) {
            this.instanceCallback = callback
        }
        this.speed = speed || 1;
        if (!this.handle) {
            this.drawer()
        }
        return this
    };
    Vivus.prototype.stop = function() {
        if (this.handle) {
            cancelAnimFrame(this.handle);
            this.handle = null
        }
        return this
    };
    Vivus.prototype.destroy = function() {
        this.stop();
        var i, path;
        for (i = 0; i < this.map.length; i++) {
            path = this.map[i];
            path.el.style.strokeDashoffset = null;
            path.el.style.strokeDasharray = null;
            this.renderPath(i)
        }
    };
    Vivus.prototype.isInvisible = function(el) {
        var rect, ignoreAttr = el.getAttribute("data-ignore");
        if (ignoreAttr !== null) {
            return ignoreAttr !== "false"
        }
        if (this.ignoreInvisible) {
            rect = el.getBoundingClientRect();
            return !rect.width && !rect.height
        } else {
            return false
        }
    };
    Vivus.prototype.parseAttr = function(element) {
        var attr, output = {};
        if (element && element.attributes) {
            for (var i = 0; i < element.attributes.length; i++) {
                attr = element.attributes[i];
                output[attr.name] = attr.value
            }
        }
        return output
    };
    Vivus.prototype.isInViewport = function(el, h) {
        var scrolled = this.scrollY(),
            viewed = scrolled + this.getViewportH(),
            elBCR = el.getBoundingClientRect(),
            elHeight = elBCR.height,
            elTop = scrolled + elBCR.top,
            elBottom = elTop + elHeight;
        h = h || 0;
        return elTop + elHeight * h <= viewed && elBottom >= scrolled
    };
    Vivus.prototype.getViewportH = function() {
        var client = this.docElem.clientHeight,
            inner = window.innerHeight;
        if (client < inner) {
            return inner
        } else {
            return client
        }
    };
    Vivus.prototype.scrollY = function() {
        return window.pageYOffset || this.docElem.scrollTop
    };
    setupEnv = function() {
        if (Vivus.prototype.docElem) {
            return
        }
        Vivus.prototype.docElem = window.document.documentElement;
        requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
                return window.setTimeout(callback, 1e3 / 60)
            }
        }();
        cancelAnimFrame = function() {
            return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(id) {
                return window.clearTimeout(id)
            }
        }()
    };
    parsePositiveInt = function(value, defaultValue) {
        var output = parseInt(value, 10);
        return output >= 0 ? output : defaultValue
    };
    if (typeof define === "function" && define.amd) {
        define([], function() {
            return Vivus
        })
    } else if (typeof exports === "object") {
        module.exports = Vivus
    } else {
        window.Vivus = Vivus
    }
})();