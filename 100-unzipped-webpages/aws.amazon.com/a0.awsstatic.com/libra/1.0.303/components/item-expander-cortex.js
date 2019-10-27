define(function() {
    "use strict";
    var defaults = {
        itemWrapperSelector: ".lb-item-wrapper",
        itemWrapperIdPrefix: "lb-item-expander-wrapper-",
        itemWrapperIdSelectorPrefix: "#lb-item-expander-wrapper-",
        accordionSelector: ".lb-item-expander-accordion",
        accordionClass: "lb-item-expander-accordion",
        accordionIdPrefix: "lb-item-expander-accordion-",
        accordionIdSelectorPrefix: "#lb-item-expander-accordion-",
        contentSelector: ".lb-item-expander-content",
        contentIdPrefix: "lb-item-expander-content-",
        contentIdSelectorPrefix: "#lb-item-expander-content-",
        iconHeightBuffer: 80,
        itemExpanderRowClass: "lb-item-expander-row",
        itemExpanderRowIdPrefix: "lb-item-expander-row-",
        itemExpanderRowIdSelectorPrefix: "#lb-item-expander-row-",
        triggerSelector: ".lb-trigger",
        triangleSelector: ".lb-triangle",
        triangleGridSizeSelector: "> .lb-triangle",
        triangleOffset: 8,
        activeClass: "lb-active"
    };
    var instantiationCount = 0;

    function ItemExpander(elem) {
        this.$elem = $(elem);
        this.options = $.extend({}, defaults, this.$elem.data());
        this.containersToAccordions = {};
        this.activeAccordions = {};
        this.openedOnce = false;
        this.$itemWrappers = this.$elem.find(this.options.itemWrapperSelector);
        this.options.accordionIdPrefix += instantiationCount;
        this.options.accordionIdSelectorPrefix += instantiationCount;
        this.options.contentIdPrefix += instantiationCount;
        this.options.contentIdSelectorPrefix += instantiationCount;
        this.options.itemExpanderRowIdPrefix += instantiationCount;
        this.options.itemExpanderRowIdSelectorPrefix += instantiationCount;
        this.options.itemWrapperIdPrefix += instantiationCount;
        this.options.itemWrapperIdSelectorPrefix += instantiationCount;
        instantiationCount++;
        this.checkExpanderLayoutType();
        this.bindResizeHandler();
        this.closeAllContent();
        this.createContentAccordions();
        this.moveContentContainers();
        this.createAccordionTriggerArrows();
        this.scrollHandler = this.bindScrollHandler();
        this.bindClickHandler();
        var that = this;
        var FIRST_OPEN_TIMEOUT = 500;
        setTimeout(function() {
            that.openFirstItemOnce()
        }, FIRST_OPEN_TIMEOUT)
    }
    ItemExpander.prototype = {
        checkExpanderLayoutType: function() {
            var $firstTrigger = $(this.$itemWrappers[0]).find(this.options.triggerSelector);
            if ($firstTrigger.outerWidth() !== this.$elem.width()) {
                this.isAccordion = false;
                this.isInOrFromGrid = true;
                return
            }
            this.isAccordion = true
        },
        moveContentContainers: function() {
            var lastMoveIdx = 0;
            var len = this.$itemWrappers.length;
            var columnCount = 0;
            var rowColumNumber = Math.round(this.$elem.width() / $(this.$itemWrappers[0]).find(this.options.triggerSelector)[0].offsetWidth);
            for (var i = 0; i < len; i++) {
                if (columnCount === rowColumNumber) {
                    for (var j = lastMoveIdx; j < i; j++) {
                        $(this.options.accordionIdSelectorPrefix + (i - 1)).append($(this.options.contentIdSelectorPrefix + j));
                        $(this.options.itemExpanderRowIdSelectorPrefix + (i - 1)).append($(this.options.itemWrapperIdSelectorPrefix + j));
                        $(this.options.itemExpanderRowIdSelectorPrefix + (i - 1)).append($(this.options.accordionIdSelectorPrefix + j));
                        this.containersToAccordions[j] = i - 1
                    }
                    this.iconEqualHeights($(this.options.itemExpanderRowIdSelectorPrefix + (i - 1)));
                    lastMoveIdx = i;
                    columnCount = 1
                } else {
                    columnCount++
                }
            }
            for (var k = lastMoveIdx; k < len; k++) {
                $(this.options.accordionIdSelectorPrefix + (len - 1)).append($(this.options.contentIdSelectorPrefix + k));
                $(this.options.itemExpanderRowIdSelectorPrefix + (len - 1)).append($(this.options.itemWrapperIdSelectorPrefix + k));
                $(this.options.itemExpanderRowIdSelectorPrefix + (len - 1)).append($(this.options.accordionIdSelectorPrefix + k));
                this.containersToAccordions[k] = len - 1;
                this.iconEqualHeights($(this.options.itemExpanderRowIdSelectorPrefix + (len - 1)))
            }
        },
        createContentAccordions: function() {
            for (var i = 0, len = this.$itemWrappers.length; i < len; i++) {
                var $itemWrapper = $(this.$itemWrappers[i]);
                $itemWrapper.attr("data-id", i);
                $itemWrapper.attr("id", this.options.itemWrapperIdPrefix + i);
                $itemWrapper.find(this.options.contentSelector).attr("id", this.options.contentIdPrefix + i);
                $('<div class="' + this.options.accordionClass + '" id="' + this.options.accordionIdPrefix + i + '" />').insertAfter($itemWrapper);
                $('<div class="' + this.options.itemExpanderRowClass + '" id="' + this.options.itemExpanderRowIdPrefix + i + '" />').insertAfter($itemWrapper)
            }
        },
        openItem: function($target) {
            this.openedOnce = true;
            $(window).off("scroll.aws_item-expander_open", this.scrollHandler);
            var $trigger = $target.closest(this.options.triggerSelector);
            var $wrapper = $target.closest(this.options.itemWrapperSelector);
            var idx = $wrapper.attr("data-id");
            var accordionIdx = this.containersToAccordions[idx];
            var $content = $(this.options.contentIdSelectorPrefix + idx);
            var $accordion = $(this.options.accordionIdSelectorPrefix + accordionIdx);
            if (!this.isAccordion && this.activeAccordions.hasOwnProperty(accordionIdx)) {
                this.$elem.find(this.options.contentSelector).removeClass(this.options.activeClass);
                this.$elem.find(this.options.triggerSelector).removeClass(this.options.activeClass);
                $content.addClass(this.options.activeClass);
                $accordion.outerHeight($content.outerHeight())
            } else if (this.isAccordion && this.activeAccordions.hasOwnProperty(accordionIdx)) {
                $trigger.removeClass(this.options.activeClass);
                this.$elem.find(this.options.contentSelector).removeClass(this.options.activeClass);
                this.closeAllContent()
            } else {
                this.closeAllContent();
                if (this.isAccordion) {
                    $trigger.addClass(this.options.activeClass)
                }
                $content.addClass(this.options.activeClass);
                $accordion.show().outerHeight($content.outerHeight());
                this.activeAccordions = {};
                this.activeAccordions[accordionIdx] = true
            }
            if (!this.isAccordion) {
                this.setTriggerArrow($trigger, $accordion)
            }
        },
        setTriggerArrow: function($trigger, $accordion) {
            var triggerLeft = $trigger.position().left;
            var triggerWidth = $trigger.outerWidth();
            var targetLeft = triggerLeft + triggerWidth / 2 - this.options.triangleOffset;
            var expanderTop = $accordion.position().top;
            var targetTop = expanderTop - this.options.triangleOffset;
            this.$elem.find(this.options.triangleGridSizeSelector).css({
                top: targetTop,
                left: targetLeft
            }).show()
        },
        createAccordionTriggerArrows: function() {
            var $triangle = this.$elem.find(this.options.triangleSelector);
            this.$elem.find(this.options.triggerSelector).each(function() {
                $triangle.clone().appendTo(this)
            })
        },
        closeAllContent: function() {
            this.activeAccordions = {};
            this.$elem.find(this.options.accordionSelector).hide().css("height", 0);
            this.$elem.find(this.options.contentSelector).removeClass(this.options.activeClass);
            this.$elem.find(this.options.triggerSelector).removeClass(this.options.activeClass);
            if (!this.isAccordion) {
                this.$elem.find(this.options.triangleSelector).hide()
            }
        },
        openFirstItemOnce: function() {
            if (!this.openedOnce && !this.isAccordion && this.isInViewport(this.$elem)) {
                var $trigger = this.$elem.find(this.options.triggerSelector).first();
                this.openItem($trigger);
                this.setActiveTrigger($trigger)
            }
        },
        setActiveTrigger: function($target) {
            var $trigger = $target.closest(this.options.triggerSelector);
            if (!this.isAccordion && !$trigger.hasClass(this.options.activeClass)) {
                $trigger.addClass(this.options.activeClass)
            }
        },
        bindClickHandler: function() {
            var that = this;
            this.$elem.on("click.aws_item-expander_open", this.options.triggerSelector + ":not([href])", function(e) {
                that.openItem($(e.target));
                that.setActiveTrigger($(e.target));
                if (that.isAccordion) {
                    $("html, body").animate({
                        scrollTop: $(this).offset().top
                    }, 200)
                }
            })
        },
        bindResizeHandler: function() {
            var TIMEOUT = 40;
            var that = this;
            var count = 0;
            $(window).on("resize.aws_item-expander_close-all", function() {
                var id = ++count;
                setTimeout(function() {
                    if (id === count) {
                        that.checkExpanderLayoutType();
                        if (that.isInOrFromGrid) {
                            that.closeAllContent()
                        }
                        if (that.isAccordion) {
                            that.isInOrFromGrid = false
                        }
                        that.moveContentContainers()
                    }
                }, TIMEOUT)
            })
        },
        bindScrollHandler: function() {
            var TIMEOUT = 40;
            var that = this;
            var count = 0;
            var handler = function() {
                var id = ++count;
                setTimeout(function() {
                    if (id === count) {
                        that.openFirstItemOnce()
                    }
                }, TIMEOUT)
            };
            $(window).on("scroll.aws_item-expander_open", handler);
            return handler
        },
        iconEqualHeights: function($row) {
            var that = this;
            var tallestContent = 0;
            $row.find(that.options.triggerSelector).each(function() {
                var spanHeight = $(this).find("span").outerHeight();
                var height = that.options.iconHeightBuffer + spanHeight;
                tallestContent = Math.max(tallestContent, height);
                $(this).css("height", tallestContent)
            })
        },
        isInViewport: function($elem) {
            var $window = $(window);
            var top = $elem.offset().top;
            var height = $elem.outerHeight();
            var bottom = top + height;
            var viewportTop = $window.scrollTop();
            var viewportHeight = $window.height();
            var viewportBottom = viewportTop + viewportHeight;
            var viewPercentage = 80;
            var middleTop = top + height * viewPercentage / 100;
            var middleBottom = bottom - height * viewPercentage / 100;
            if (viewportTop <= middleTop && middleTop <= viewportBottom && (viewportTop <= top && top <= viewportBottom) || viewportTop <= middleBottom && middleBottom <= viewportBottom && (viewportTop <= bottom && bottom <= viewportBottom) || top <= viewportTop && viewportBottom <= bottom) {
                return true
            }
            return false
        }
    };
    Libra.Comp.register({
        name: "item-expander-cortex",
        initFct: function(elem) {
            new ItemExpander(elem)
        },
        initTime: "documentReady"
    });
    return ItemExpander
});