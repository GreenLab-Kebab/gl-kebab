if (typeof AWS.DA !== "object") {
  AWS.DA = {}
}
AWS.DA.Logic = {
  ruleSets: {
    sitewide_page_load: {
      callType: "setVars",
      setters: [{
        eVar12: "{{aws-target-visitor-id}}"
      }, {
        prop12: "{{eVar12}}"
      }]
    },
    house_ad_impression: {
      callType: "tl",
      linkName: "House Ad Impressions",
      setters: [{
        eVar17: "{{this.attr(data-da-channel)}}|{{this.attr(data-da-language)}}|{{this.attr(data-da-campaign)}}|{{this.attr(data-da-placement)}}|{{this.attr(data-da-content)}}"
      }, {
        prop17: "{{eVar17}}"
      }, {
        events: "event10"
      }, {
        eVar12: "{{aws-target-visitor-id}}"
      }, {
        prop12: "{{eVar12}}"
      }, {
        eVar5: "{{this.attr(data-da-trk)}}"
      }, {
        prop30: "{{eVar5}}"
      }]
    },
    house_ad_click: {
      callType: "tl",
      linkName: "House Ad Clicks",
      setters: [{
        eVar18: "{{this.attr(data-da-channel)}}|{{this.attr(data-da-language)}}|{{this.attr(data-da-campaign)}}|{{this.attr(data-da-placement)}}|{{this.attr(data-da-content)}}"
      }, {
        prop18: "{{eVar18}}"
      }, {
        eVar60: "{{eVar18}}"
      }, {
        prop60: "{{eVar18}}"
      }, {
        events: "event12"
      }, {
        eVar24: "{{this.attr(data-da-channel)}}"
      }, {
        prop24: "{{eVar24}}"
      }, {
        eVar56: "{{this.attr(data-da-campaign)}}"
      }, {
        prop56: "{{eVar56}}"
      }, {
        eVar58: "{{this.attr(data-da-placement)}}"
      }, {
        prop58: "{{eVar58}}"
      }, {
        eVar57: "{{this.attr(data-da-content)}}"
      }, {
        prop57: "{{eVar57}}"
      }, {
        eVar15: "{{this.attr(data-da-language)}}"
      }, {
        prop15: "{{eVar15}}"
      }, {
        eVar12: "{{aws-target-visitor-id}}"
      }, {
        prop12: "{{eVar12}}"
      }, {
        eVar5: "{{this.attr(data-da-trk)}}"
      }, {
        prop30: "{{eVar5}}"
      }]
    },
    psf_search: {
      callType: "tl",
      linkName: "PSF Search",
      setters: [{
        eVar4: "{{this.attr(data-da-search-term)}}|{{this.attr(data-da-shortLanguage)}}|{{this.attr(data-da-result-count)}}"
      }, {
        prop4: "{{eVar4}}"
      }, {
        events: "event16"
      }]
    },
    psf_search_no_results: {
      callType: "tl",
      linkName: "PSF Search No Results",
      setters: [{
        eVar4: "{{this.attr(data-da-search-term)}}|{{this.attr(data-da-shortLanguage)}}|{{this.attr(data-da-result-count)}}"
      }, {
        prop4: "{{eVar4}}"
      }, {
        events: "event17"
      }]
    },
    site_optimization_impression: {
      callType: "tl",
      linkName: "Site Optimization Impressions",
      setters: [{
        eVar6: "{{this.attr(data-da-type)}}|{{this.attr(data-da-so-category)}}|{{this.attr(data-da-so-language)}}|{{this.attr(data-da-so-name)}}|{{this.attr(data-da-so-type)}}|{{this.attr(data-da-so-version)}}|{{this.attr(data-da-so-url)}}"
      }, {
        prop64: "{{eVar6}}"
      }, {
        events: "event14"
      }, {
        eVar12: "{{aws-target-visitor-id}}"
      }, {
        prop12: "{{eVar12}}"
      }, {
        eVar5: "{{this.attr(data-da-so-trk)}}"
      }, {
        prop30: "{{eVar5}}"
      }]
    },
    site_optimization_click: {
      callType: "tl",
      linkName: "Site Optimization Clicks",
      setters: [{
        eVar7: "{{this.attr(data-da-type)}}|{{this.attr(data-da-so-category)}}|{{this.attr(data-da-so-language)}}|{{this.attr(data-da-so-name)}}|{{this.attr(data-da-so-type)}}|{{this.attr(data-da-so-version)}}|{{this.attr(data-da-so-url)}}"
      }, {
        prop35: "{{eVar7}}"
      }, {
        events: "event15"
      }, {
        eVar24: "{{this.attr(data-da-type)}}"
      }, {
        prop24: "{{eVar24}}"
      }, {
        eVar15: "{{this.attr(data-da-so-language)}}"
      }, {
        prop15: "{{eVar15}}"
      }, {
        eVar56: "{{this.attr(data-da-so-name)}}"
      }, {
        prop56: "{{eVar56}}"
      }, {
        eVar58: "{{this.attr(data-da-so-category)}}_{{this.attr(data-da-so-type)}}"
      }, {
        prop58: "{{eVar58}}"
      }, {
        eVar57: "{{this.attr(data-da-so-version)}}"
      }, {
        prop57: "{{eVar57}}"
      }, {
        eVar14: "{{this.attr(data-da-so-url)}}"
      }, {
        prop14: "{{eVar14}}"
      }, {
        eVar12: "{{aws-target-visitor-id}}"
      }, {
        prop12: "{{eVar12}}"
      }, {
        eVar5: "{{this.attr(data-da-so-trk)}}"
      }, {
        prop30: "{{eVar5}}"
      }]
    }
  },
  events: [{
    trigger: "viewport",
    selector: '.data-attr-wrapper[data-da-type="ha"]:not(div[data-da*="ignore-standard-impression"] .data-attr-wrapper)',
    ruleSet: "house_ad_impression",
    optionSet: "IAB_standard_impression"
  }, {
    trigger: "click",
    selector: '.data-attr-wrapper[data-da-type="ha"]',
    notSelector: 'a[data-da="carousel-cta-box-cta-button"],a[data-da="vertical-buybox-cta-button"]',
    explicitUrlAttr: "data-wrapper-url",
    ruleSet: "house_ad_click"
  }, {
    trigger: "viewport",
    selector: '.data-attr-wrapper[data-da-type="so"]:not(div[data-da*="ignore-standard-impression"] .data-attr-wrapper)',
    ruleSet: "site_optimization_impression",
    optionSet: "immediate_impression"
  }, {
    trigger: "click",
    selector: '.data-attr-wrapper[data-da-type="so"]',
    ruleSet: "site_optimization_click"
  }, {
    trigger: "custom",
    customEventName: "custom_awspsf_search",
    selector: '.data-attr-wrapper[data-da-type="psf"]',
    ruleSet: "psf_search"
  }, {
    trigger: "custom",
    customEventName: "custom_awspsf_search_no_results",
    selector: '.data-attr-wrapper[data-da-type="psf-no-results"]',
    ruleSet: "psf_search_no_results"
  }, {
    trigger: "pageBottom",
    ruleSet: "sitewide_page_load"
  }],
  viewportTriggerEvents: ["custom_lb-comp-content-container_reveal"],
  optionSets: {
    immediate_impression: {
      viewTime: 0,
      viewPercentage: 0
    },
    IAB_standard_impression: {
      viewTime: 1e3,
      viewPercentage: 50
    }
  },
  aspects: {
    "aws-target-visitor-id": {
      type: "cookie",
      name: "aws-target-visitor-id",
      defaultValue: "",
      resolveTime: "pageBottom"
    }
  }
};
(function() {
  "use strict";
  if (typeof window === "object" && typeof window.document === "object") {
    if (!window.console) {
      console = {
        log: null
      }
    }
  }
  var Logger = function() {
    var LOG_LEVELS = {
      info: {
        warn: true,
        error: true
      },
      warn: {
        error: true
      },
      error: {},
      debug: {
        info: true,
        warn: true,
        error: true
      }
    };

    function Logger(namespace, logLevel) {
      this.namespace = namespace;
      this.logLevel = logLevel || this.getLogLevelByQueryString();
      this.validateLogLevel()
    }

    function getQueryStringParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var re = new RegExp("[\\?&]" + name + "=([^&#]*)");
      var res = re.exec(window.location.search);
      if (res === null) {
        return ""
      } else {
        return decodeURIComponent(res[1].replace(/\+/g, " "))
      }
    }
    Logger.prototype = {
      getLogLevelByQueryString: function() {
        var level = getQueryStringParameterByName("debug" + this.namespace);
        if (level === "") {
          return null
        } else {
          return level
        }
      },
      validateLogLevel: function() {
        if (this.logLevel === null) {
          return
        }
        var found = false;
        for (var key in LOG_LEVELS) {
          if (LOG_LEVELS.hasOwnProperty(key)) {
            if (this.logLevel === key) {
              found = true;
              break
            }
          }
        }
        if (found) {
          return true
        } else {
          throw new Error("DA: Invalid log level")
        }
      }
    };
    for (var level in LOG_LEVELS) {
      if (LOG_LEVELS.hasOwnProperty(level)) {
        (function(level) {
          Logger.prototype[level] = function() {
            if (this.logLevel !== null) {
              if (level === this.logLevel || LOG_LEVELS[this.logLevel].hasOwnProperty(level)) {
                var args = Array.prototype.slice.call(arguments);
                var msg = "[" + level + "] AWS." + this.namespace + ": " + args[0];
                console.log.apply(console, [msg].concat(args.slice(1)))
              }
            }
          }
        })(level)
      }
    }
    return Logger
  }();
  AWS.DA.Logger = Logger
})();
(function() {
  "use strict";
  var DA = {};
  DA._DA = {
    debounceWindowEvent: function(func, eventName, timeout, context) {
      var that = context || this;
      var count = 0;
      $(window).on(eventName, null)
    },
    flattenArrayOfObjects: function(arr) {
      var flattened = {};
      for (var i = 0, len = arr.length; i < len; i++) {
        var obj = arr[i];
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            flattened[key] = obj[key]
          }
        }
      }
      return flattened
    },
    getRandomKey: function() {
      return (new Date).getTime() + Math.floor(Math.random() * 999999)
    },
    generateUUID: function() {
      var d = (new Date).getTime();
      var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : r & 3 | 8).toString(16)
      });
      return uuid
    }
  };
  AWS.DA._DA = DA._DA
})();
(function() {
  "use strict";
  var DA = {};
  DA.ElementUtils = {
    isInViewport: function($elem, top, left, width, height, viewPercentage, logger, $window) {
      if (0 > viewPercentage || viewPercentage > 100) {
        logger.error("Invalid range for 'viewPercentage'")
      }
      if ($elem.css("visibility") === "hidden") {
        return false
      }
      $window = $window || $(window);
      var viewportTop = $window.scrollTop();
      var viewportHeight = $window.height();
      var viewportBottom = viewportTop + viewportHeight;
      var viewportLeft = 0;
      var viewportWidth = $window.width();
      var viewportRight = viewportLeft + viewportWidth;
      var bottom = top + height;
      var right = left + width;
      var middleTop = top + height * viewPercentage / 100;
      var middleBottom = top + height - height * viewPercentage / 100;
      var horizViewPercentage = 80;
      var middleLeft = left + width * horizViewPercentage / 100;
      var middleRight = left + width - width * horizViewPercentage / 100;
      if (viewportTop <= middleTop && middleTop <= viewportBottom && (viewportTop <= top && top <= viewportBottom) || viewportTop <= middleBottom && middleBottom <= viewportBottom && (viewportTop <= bottom && bottom <= viewportBottom) || top <= viewportTop && viewportBottom <= bottom) {
        if (viewportLeft <= middleLeft && middleLeft <= viewportRight && (viewportLeft <= left && left <= viewportRight) || viewportLeft <= middleRight && middleRight <= viewportRight && (viewportLeft <= right && right <= viewportRight) || left <= viewportLeft && viewportRight <= right) {
          return true
        }
      }
      return false
    },
    isReportableLink: null,
    findSignificantInnerHeight: function($elem, level) {
      var i, len;
      if (typeof level === "undefined") {
        level = 0
      }
      var height = $elem.outerHeight();
      var maxLevels = 5;
      if (level >= maxLevels) {
        return height
      }
      if (height === 0) {
        var children = $elem.children();
        var heights = [];
        for (i = 0, len = children.length; i < len; i++) {
          heights[heights.length] = this.findSignificantInnerHeight.call(this, $(children[i]), level + 1)
        }
        var largestHeight = 0;
        for (i = 0, len = heights.length; i < len; i++) {
          largestHeight = largestHeight > heights[i] ? largestHeight : heights[i]
        }
        return largestHeight
      } else {
        return height
      }
    },
    isElemVisible: function(elem) {
      var elemBounding = elem.getBoundingClientRect();
      var elemStyle = window.getComputedStyle(elem);
      if (elemBounding.width === 0 || elemBounding.height === 0 && elem.firstElementChild || elemStyle.visibility === "hidden") {
        return false
      }
      var parent = elem;
      while (parent && parent.tagName !== "BODY") {
        var parentStyle = window.getComputedStyle(parent);
        var isHiddenByHeightOrMaxHeight = parentStyle.overflow === "hidden" && (parentStyle.maxHeight === "0px" || parentStyle.height === "0px");
        var isHiddenByWidthOrMaxWidth = parentStyle.overflow === "hidden" && (parentStyle.maxWidth === "0px" || parentStyle.width === "0px");
        if (parentStyle.display === "none" || parentStyle.opacity === "0" || isHiddenByHeightOrMaxHeight || isHiddenByWidthOrMaxWidth) {
          return false
        }
        parent = parent.parentNode
      }
      return true
    }
  };
  AWS.DA.ElementUtils = DA.ElementUtils
})();
(function() {
  "use strict";
  var DA = {};
  DA.EventUtils = {
    elementEventStore: {},
    nonElementEventRegistry: {},
    setElementEventRelationship: function($elem, event) {
      var id = this.setElementId($elem);
      if (this.hasElementEventRelationship(id, event)) {
        return true
      } else {
        this.saveElementEventRelationship(id, event);
        return false
      }
    },
    setElementId: function($elem) {
      var id = $elem.data("daElemId");
      if (typeof id === "undefined") {
        id = AWS.DA._DA.generateUUID();
        $elem.attr("data-da-elem-id", id)
      }
      return id
    },
    saveElementEventRelationship: function(elemId, event) {
      if (!(elemId in this.elementEventStore)) {
        this.elementEventStore[elemId] = {}
      }
      this.elementEventStore[elemId][event._id] = event
    },
    hasElementEventRelationship: function(elemId, event) {
      return elemId in this.elementEventStore && event._id in this.elementEventStore[elemId]
    },
    registerNonElementEvent: function(event) {
      this.nonElementEventRegistry[event._id] = event
    },
    isNonElementEventRegistered: function(event) {
      return event._id in this.nonElementEventRegistry
    },
    getElementEventMessage: function($elem, event) {
      return JSON.stringify({
        trigger: event.trigger,
        ruleSetKey: event.ruleSet.key,
        eventId: event._id,
        className: $elem[0].className,
        elemData: $elem.data()
      })
    },
    isRightClick: null
  };
  AWS.DA.EventUtils = DA.EventUtils
})();
(function() {
  "use strict";
  var DA = {};
  DA.Decorators = {};
  (function() {
    var signatureRegistry = {};
    DA.Decorators.noRepeatData = null
  })();
  DA.Decorators.inViewport = null;
  AWS.DA.Decorators = DA.Decorators
})();
(function() {
  "use strict";
  var DA = {};
  DA.Validator = {
    validSetterKeyRegexp: new RegExp("^(eVar[0-9]{1,2}|prop[0-9]{1,2}|event[0-9]{1,2}|events)$"),
    validSVarRegexp: new RegExp("^(eVar[0-9]{1,2}|prop[0-9]{1,2}|event[0-9]{1,2}|events)$"),
    validLinkTrackVarListItemRegexp: new RegExp("^(eVar[0-9]{1,2}|prop[0-9]{1,2})$"),
    isValidSetterKey: null,
    isValidSVar: function(str) {
      return this.validSVarRegexp.test(str)
    },
    isValidLinkTrackVarListItem: function(str) {
      return this.validLinkTrackVarListItemRegexp.test(str)
    },
    validateSetters: null,
    validateSetter: null
  };
  AWS.DA.Validator = DA.Validator
})();
/*!
 * aws-da-controller.js
 *
 * Copyright 2015, Amazon.com, Inc. or its affiliates. All rights reserved.
 */
(function() {
  "use strict";
  var DA = {};
  var LinkType = {
    customLink: "o",
    exitLink: "e",
    documentLink: "d"
  };
  DA.Controller = {
    logic: {},
    viewportQueue: {},
    trackerVarName: "s",
    isScrollWatchInitialized: false,
    resolvedAspects: {},
    validator: null,
    logger: null,
    loadEventRegistry: {
      documentReady: false,
      pageBottom: false,
      layoutReadyForViewportEvents: false
    },
    resolvedEvents: [],
    init: function(validator, logger) {
      this.validator = validator;
      this.logger = logger;
      this.listenForLoadEvents();
      this.readExistingLogic();
      this.listenForNewContent();
      this.listenToViewportTriggerEvents();
      this.processLogic();
      this.loadEventRegistry.pageBottom = true
    },
    listenForLoadEvents: function() {
      var that = this;
      $(document).ready(function() {
        that.loadEventRegistry.documentReady = true;
        that.logger.info("Saw document ready")
      })
    },
    readExistingLogic: function() {
      if (typeof AWS.DA.Logic === "object") {
        this.logic = $.extend(true, {}, AWS.DA.Logic);
        this.logger.debug("Logic: " + JSON.stringify(this.logic))
      } else {
        this.logger.error("No logic to read")
      }
    },
    updateLogic: null,
    listenForNewContent: function() {
      var TIMEOUT = 200;
      var that = this;
      var count = 0;
      $(document).on("custom_aws_da_new-content", function() {
        var id = ++count;
        setTimeout(function() {
          if (id === count) {
            that.logger.info("Saw new content event");
            that.processAspects();
            that.processEvents()
          }
        }, TIMEOUT)
      })
    },
    listenToViewportTriggerEvents: function() {
      if (!this.logic.viewportTriggerEvents) {
        return
      }
      var that = this;
      this.logic.viewportTriggerEvents.forEach(function(eventName) {
        $(document).on(eventName, null)
      })
    },
    processLogic: function() {
      this.processAspects();
      this.processEvents();
      this.processFunctions()
    },
    processAspects: function() {
      if (!this.logic.hasOwnProperty("aspects")) {
        return
      }
      for (var key in this.logic.aspects) {
        if (this.logic.aspects.hasOwnProperty(key)) {
          this.resolveAspect(key, this.logic.aspects[key])
        }
      }
    },
    resolveAspect: function(key, aspect) {
      var that = this;
      var resolve = function() {
        var fctMap = {
          cookie: "resolveCookie",
          css: "resolveCSSAspect"
        };
        that.resolvedAspects[key] = that[fctMap[aspect.type]](aspect)
      };
      switch (aspect.resolveTime) {
        case "dynamic":
          resolve();
          break;
        case "pageBottom":
          if (this.loadEventRegistry.pageBottom === false) {
            resolve()
          }
          break
      }
    },
    resolveCookie: function(aspect) {
      var val = $.cookie(aspect.name);
      if (typeof val === "undefined" || val === "") {
        val = aspect.defaultValue
      }
      return val
    },
    resolveCSSAspect: null,
    buildEvents: function() {
      var resolvedEvents = [];
      for (var i = 0, len = this.logic.events.length; i < len; i++) {
        var event = $.extend(true, {}, this.logic.events[i]);
        var ruleSetKey = event.ruleSet;
        event.ruleSet = $.extend(true, {}, this.logic.ruleSets[ruleSetKey]);
        event.ruleSet.key = ruleSetKey;
        if (event.hasOwnProperty("optionSet")) {
          var optionSetKey = event.optionSet;
          var optionSet = $.extend(true, {}, this.logic.optionSets[optionSetKey]);
          if (event.hasOwnProperty("options")) {
            event.options = $.extend({}, optionSet, event.options)
          } else {
            event.options = optionSet
          }
        }
        event._id = AWS.DA._DA.generateUUID();
        resolvedEvents.push(event)
      }
      return resolvedEvents
    },
    processEvents: function() {
      if (!this.logic.hasOwnProperty("events")) {
        return
      }
      if (this.logic.events.length !== this.resolvedEvents.length) {
        this.resolvedEvents = this.buildEvents()
      }
      for (var i = 0, len = this.resolvedEvents.length; i < len; i++) {
        var event = this.resolvedEvents[i];
        this.setupEvent(event)
      }
    },
    processFunctions: function() {
      if (!this.logic.hasOwnProperty("functions")) {
        return
      }
      for (var i = 0, len = this.logic.functions.length; i < len; i++) {
        var fct = this.logic.functions[i];
        var ruleSetKey = this.logic.functions[i].ruleSet;
        fct.ruleSet = $.extend(true, {}, this.logic.ruleSets[ruleSetKey]);
        fct.ruleSet.key = ruleSetKey;
        this.createCustomFunction(fct)
      }
    },
    setupEvent: function(event) {
      var that = this;
      switch (event.trigger) {
        case "click":
          that.setupSelectorBoundEvent(event);
          break;
        case "viewport":
          that.setupViewportEvent(event);
          break;
        case "pageBottom":
          this.setupImmediateEvent(event);
          break;
        case "custom":
          that.setupCustomEvent(event);
          break
      }
    },
    setupImmediateEvent: function(event) {
      if (!AWS.DA.EventUtils.isNonElementEventRegistered(event)) {
        AWS.DA.EventUtils.registerNonElementEvent(event);
        this.logger.info("Preprocess event: " + JSON.stringify({
          trigger: event.trigger,
          ruleSetKey: event.ruleSet.key,
          eventId: event._id
        }));
        var ruleSet = $.extend(true, {}, event.ruleSet);
        ruleSet.setters = this.preprocessSetters(ruleSet.setters);
        this.processRuleSet(ruleSet)
      } else {
        this.logger.info("Did not re-execute event: " + JSON.stringify({
          trigger: event.trigger,
          ruleSetKey: event.ruleSet.key,
          eventId: event._id
        }))
      }
    },
    setupSelectorBoundEvent: function(event) {
      var that = this;
      var elems = $(event.selector);
      for (var i = 0, len = elems.length; i < len; i++) {
        (function(i) {
          var $elem = $(elems[i]);
          if (!AWS.DA.EventUtils.setElementEventRelationship($elem, event)) {
            this.logger.info("Preprocess event: " + AWS.DA.EventUtils.getElementEventMessage($elem, event));
            var ruleSet = $.extend(true, {}, event.ruleSet);
            ruleSet.setters = this.preprocessSetters(ruleSet.setters, $elem);
            var cb = null;
            if (event.trigger === "click") {
              this.setClickHandler($elem, event.notSelector, event.explicitUrlAttr, cb)
            }
          } else {
            that.logger.info("Did not rebind event: " + AWS.DA.EventUtils.getElementEventMessage($elem, event))
          }
        }).call(this, i)
      }
    },
    setupViewportEvent: function(event) {
      var that = this;
      var elems = $(event.selector);
      for (var i = 0, len = elems.length; i < len; i++) {
        (function(i) {
          var $elem = $(elems[i]);
          if (!AWS.DA.EventUtils.setElementEventRelationship($elem, event)) {
            that.logger.info("Preprocess event: " + AWS.DA.EventUtils.getElementEventMessage($elem, event));
            var ruleSet = $.extend(true, {}, event.ruleSet);
            ruleSet.setters = this.preprocessSetters(ruleSet.setters, $elem);
            var cb = function() {
              that.processRuleSet(ruleSet)
            };
            this.viewportQueue[AWS.DA._DA.getRandomKey()] = {
              $elem: $elem,
              locked: false,
              viewTime: event.options.viewTime,
              viewPercentage: event.options.viewPercentage,
              fct: cb
            }
          } else {
            that.logger.info("Did not rebind event: " + AWS.DA.EventUtils.getElementEventMessage($elem, event))
          }
        }).call(this, i)
      }
      if (!this.isScrollWatchInitialized) {
        this.watchScroll()
      }
      $(document).ready(function() {
        setTimeout(function() {
          that.loadEventRegistry.layoutReadyForViewportEvents = true;
          that.processViewportQueue()
        }, 800)
      })
    },
    setupCustomEvent: function(event) {
      var that = this;
      if (!AWS.DA.EventUtils.setElementEventRelationship($("body"), event)) {
        $(document).on(event.customEventName, null)
      }
    },
    runConditionChain: null,
    createCustomFunction: null,
    setClickHandler: function($elem, notSelector, explicitUrlAttr, cb) {
      var that = this;
      var isClickHandled = false;
      var processClick = null;
      $elem.on("click.aws-da, mouseup.aws-da", null)
    },
    preprocessSetters: function(setters, $elem) {
      setters = this.resolveSetterLogic(setters, $elem);
      setters = this.syncSetters(setters);
      return setters
    },
    processRuleSet: function(ruleSet) {
      this.logger.info("Process ruleSet: " + ruleSet.key);
      ruleSet.setters = this.processSetters(ruleSet.setters);
      if (ruleSet.callType === "tl") {
        this.callLinkTrack(ruleSet.setters, ruleSet.callType, ruleSet.linkName)
      } else if (ruleSet.callType === "setVars") {
        this.setSVars(ruleSet.setters)
      }
    },
    resolveSetterLogic: function(setters, $elem) {
      this.logger.info("Resolve setter logic");
      setters = $.extend(true, [], setters);
      var resolvedValueRegistry = {};
      for (var i = 0, len = setters.length; i < len; i++) {
        var setter = setters[i];
        var key;
        for (key in setter) {
          if (setter.hasOwnProperty(key)) {
            break
          }
        }
        var val = setter[key];
        var idxStack = this.findDynamicBlocksInSetter(val);
        var item, replacement;
        item = idxStack.pop();
        while (item) {
          if (resolvedValueRegistry.hasOwnProperty(item[2])) {
            val = val.substr(0, item[0]) + resolvedValueRegistry[item[2]] + val.substr(item[1] + 1)
          } else {
            var match = item[2].match(/^this.attr\((.*?)\)$/);
            if (match !== null && match.length > 1 && typeof $elem !== "undefined") {
              var lastMatch = match[match.length - 1];
              replacement = $elem.attr(lastMatch);
              if (typeof replacement === "undefined") {
                replacement = ""
              }
              resolvedValueRegistry[item[2]] = replacement;
              val = val.substr(0, item[0]) + replacement + val.substr(item[1] + 1)
            } else {
              if (this.resolvedAspects.hasOwnProperty(item[2])) {
                replacement = this.resolvedAspects[item[2]];
                if (typeof replacement === "undefined") {
                  replacement = ""
                }
                resolvedValueRegistry[item[2]] = replacement;
                val = val.substr(0, item[0]) + replacement + val.substr(item[1] + 1)
              }
            }
          }
          item = idxStack.pop()
        }
        setter[key] = val;
        this.logger.debug("'" + key + "' after replacement: " + val)
      }
      this.logger.debug("Logic-resolved setters: " + JSON.stringify(setters));
      return setters
    },
    syncSetters: function(setters, resolvedValueRegistry, level) {
      setters = $.extend(true, [], setters);
      if (typeof level === "undefined") {
        level = 0
      }
      if (typeof resolvedValueRegistry === "undefined") {
        resolvedValueRegistry = {}
      }
      this.logger.debug("Sync setters at level: " + level);
      var hasNewlyResolved = false;
      var foundNonEmptyIdxStack = false;
      for (var i = 0, len = setters.length; i < len; i++) {
        var setter = setters[i];
        var key;
        for (key in setter) {
          if (setter.hasOwnProperty(key)) {
            break
          }
        }
        var val = setter[key];
        var idxStack = this.findDynamicBlocksInSetter(val);
        if (idxStack.length === 0) {
          if (!resolvedValueRegistry.hasOwnProperty(key)) {
            resolvedValueRegistry[key] = val;
            hasNewlyResolved = true;
            this.logger.debug("'" + key + "' resolved to: " + val)
          }
        } else {
          foundNonEmptyIdxStack = true;
          var item = idxStack.pop();
          while (item) {
            if (this.validator.isValidSVar(item[2])) {
              if (resolvedValueRegistry.hasOwnProperty(item[2])) {
                var replacement = resolvedValueRegistry[item[2]];
                val = val.substr(0, item[0]) + replacement + val.substr(item[1] + 1);
                hasNewlyResolved = true;
                this.logger.debug("'" + key + "' after replacement: " + val)
              }
            }
            item = idxStack.pop()
          }
        }
        setter[key] = val
      }
      if (hasNewlyResolved && foundNonEmptyIdxStack) {
        return this.syncSetters.call(this, setters, resolvedValueRegistry, level + 1)
      } else {
        this.logger.info("Synced setters: " + JSON.stringify(setters));
        return setters
      }
    },
    processSetters: function(setters) {
      setters = $.extend(true, [], setters);
      var resolvedValueRegistry = {};
      for (var i = 0, len = setters.length; i < len; i++) {
        var setter = setters[i];
        var key;
        for (key in setter) {
          if (setter.hasOwnProperty(key)) {
            break
          }
        }
        var val = setter[key];
        var idxStack = this.findDynamicBlocksInSetter(val);
        var item = idxStack.pop();
        while (item) {
          if (this.validator.isValidSVar(item[2])) {
            var replacement = "";
            if (resolvedValueRegistry.hasOwnProperty(item[2])) {
              replacement = resolvedValueRegistry[item[2]]
            } else if (window[this.trackerVarName].hasOwnProperty(item[2])) {
              replacement = window[this.trackerVarName][item[2]];
              resolvedValueRegistry[item[2]] = replacement
            } else {
              replacement = "";
              resolvedValueRegistry[item[2]] = replacement;
              this.logger.warn("Could not resolve dynamic value: " + item[2])
            }
            val = val.substr(0, item[0]) + replacement + val.substr(item[1] + 1)
          }
          item = idxStack.pop()
        }
        resolvedValueRegistry[key] = val;
        setter[key] = val;
        this.logger.debug("'" + key + "' after replacement: " + val)
      }
      setters = AWS.DA._DA.flattenArrayOfObjects(setters);
      this.logger.info("Fully-processed setters: " + JSON.stringify(setters));
      return setters
    },
    findDynamicBlocksInSetter: function(val) {
      var idxStack = [];
      var currentVal = "";
      var inside = false;
      var lastCh = "";
      var startIdx = 0;
      for (var i = 0, len = val.length; i < len; i++) {
        var ch = val.charAt(i);
        if (ch === lastCh) {
          if (ch === "{") {
            inside = true;
            startIdx = i - 1
          } else if (ch === "}") {
            inside = false;
            idxStack[idxStack.length] = [startIdx, i, currentVal.substring(1, currentVal.length - 1)];
            currentVal = ""
          }
        }
        if (inside) {
          currentVal += ch
        }
        lastCh = ch
      }
      return idxStack
    },
    setSVars: function(obj) {
      this.logger.info("Set s-vars: " + JSON.stringify(obj));
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (this.validator.isValidSVar(key)) {
            window[this.trackerVarName][key] = obj[key]
          }
        }
      }
    },
    callLinkTrack: function(obj, callType, linkName) {
      this.logger.debug("Call linkTrack");
      this.setSVars(obj);
      var linkTrackVars = "";
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (this.validator.isValidLinkTrackVarListItem(key)) {
            linkTrackVars += key + ","
          }
        }
      }
      // Remove trailing delimiter
      linkTrackVars = linkTrackVars.replace(/,$/, "");
      window[this.trackerVarName].linkTrackVars = linkTrackVars;
      this.logger.info("linkTrackVars: " + window[this.trackerVarName].linkTrackVars);
      if (window[this.trackerVarName].events) {
        window[this.trackerVarName].linkTrackEvents = window[this.trackerVarName].events
      }
      this.logger.info("linkTrackEvents: " + window[this.trackerVarName].linkTrackEvents);
      window[this.trackerVarName][callType](window[this.trackerVarName], LinkType.customLink, linkName);
      this.logger.info("Called linkTrack");
      window[this.trackerVarName].linkTrackVars = "None";
      window[this.trackerVarName].linkTrackEvents = "None"
    },
    watchScroll: function() {
      this.isScrollWatchInitialized = true;
      AWS.DA._DA.debounceWindowEvent(null, "scroll", 40, this)
    },
    processViewportQueue: function() {
      if (!this.loadEventRegistry.layoutReadyForViewportEvents) {
        return
      }
      this.logger.info("Process viewport queue");
      var $window = $(window);
      for (var key in this.viewportQueue) {
        if (this.viewportQueue.hasOwnProperty(key)) {
          (function(key) {
            var item = this.viewportQueue[key];
            if (!item.$elem.closest("body").length) {
              delete this.viewportQueue[key];
              return
            }
            if (!item.locked && AWS.DA.ElementUtils.isElemVisible(item.$elem[0])) {
              item.top = item.$elem.offset().top;
              item.left = item.$elem.offset().left;
              item.width = item.$elem.outerWidth();
              item.height = AWS.DA.ElementUtils.findSignificantInnerHeight(item.$elem);
              if (AWS.DA.ElementUtils.isInViewport(item.$elem, item.top, item.left, item.width, item.height, item.viewPercentage, this.logger, $window)) {
                this.viewportQueue[key].locked = true;
                this.logger.info("Elem in viewport");
                var that = this;
                setTimeout(function() {
                  if (that.viewportQueue.hasOwnProperty(key)) {
                    item.top = item.$elem.offset().top;
                    item.left = item.$elem.offset().left;
                    if (AWS.DA.ElementUtils.isInViewport(item.$elem, item.top, item.left, item.width, item.height, item.viewPercentage, that.logger)) {
                      that.logger.info("Elem reached view time");
                      item.fct();
                      delete that.viewportQueue[key]
                    } else {
                      that.viewportQueue[key].locked = false;
                      that.logger.info("Elem left viewport")
                    }
                  }
                }, item.viewTime)
              }
            }
          }).call(this, key)
        }
      }
    }
  };
  DA.Controller.init(AWS.DA.Validator, new AWS.DA.Logger("DA"));
  AWS.DA.Controller = DA.Controller
})();