(function() {
    define("librastandardlib/obj-utils/mixin", [], function() {
        "use strict";
        return function mixin(target, source) {
            if (typeof target !== "object" || typeof source !== "object") {
                return target
            }
            Object.keys(source).forEach(function(key) {
                if (!target.hasOwnProperty(key)) {
                    target[key] = source[key]
                }
            });
            return target
        }
    });
    define("librastandardlib/obj-utils/assign", [], function() {
        return function assign(target, args) {
            "use strict";
            if (target === null) {
                throw new TypeError("Cannot convert undefined or null to object")
            }
            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                if (source !== null) {
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            to[key] = source[key]
                        }
                    }
                }
            }
            return to
        }
    });
    define("librastandardlib/aws/page-settings", ["librastandardlib/obj-utils/assign"], function(_assign) {
        "use strict";
        var defaults = {
            staticAssetPath: "https://a0.awsstatic.com",
            jsAssetPath: "https://a0.awsstatic.com/libra/1",
            isLoggingEnabled: true
        };
        var PageSettings = {};
        if (typeof AWS === "object" && typeof AWS.PageSettings === "object") {
            _assign(PageSettings, AWS.PageSettings)
        }
        var tagSettings = document.getElementsByTagName("html").dataset;
        if (tagSettings) {
            PageSettings.staticAssetPath = tagSettings.staticAssets;
            PageSettings.jsAssetPath = PageSettings.staticAssetPath + "/libra/" + tagSettings.jsVersion
        }
        PageSettings = _assign({}, defaults, PageSettings);
        if (typeof AWS === "object" && typeof AWS.PageSettings === "object") {
            AWS.PageSettings = PageSettings
        }
        return PageSettings
    });
    define("libra/components/gi-map-area", ["directories/directories-bundle", "librastandardlib/obj-utils/mixin", "librastandardlib/aws/page-settings"], function(DirectoriesBundle, mixin, PageSettings) {
        var options = {
            componentName: "GIMapArea",
            itemsConfig: {
                selector: ".m-gi-map-area",
                containerClass: ".m-gi-map-area-details-container"
            }
        };
        var defaults = {
            mapSelector: ".m-gi-map",
            mapAssetContainerSelector: ".m-gi-map-container",
            mapAreaSelector: ".m-gi-map-area",
            mapBGSelector: "rect",
            activeClass: "m-active",
            areaDetailsBoxSelector: ".m-gi-area-detail-box",
            areaDetailBoxCloseButtonSelector: ".m-gi-area-detail-box .icon-close",
            mapAssetPath: "/gi-map/AWS_Global-Infrastructure-Map.svg"
        };

        function MapArea(elem) {
            this.$elem = $(elem);
            this.$map = $(defaults.mapSelector);
            this.mapElem = this.$map.get(0);
            this.mapAssetContainer = this.$map.find(defaults.mapAssetContainerSelector);
            this.loadMapAsset()
        }
        MapArea.prototype = {
            processData: function(data, replaceContent) {
                this.displayItems(data, replaceContent);
                this.attachClickEvents()
            },
            attachClickEvents: function() {
                this.$areaDetailBoxes = this.$container.find(defaults.areaDetailsBoxSelector);
                var that = this;
                this.$mapAreas.click(function() {
                    that.$selectedArea = $(this);
                    that.$selectedAreaDetailBox = that.$container.find('[data-id="' + that.$selectedArea.data("id") + '"]');
                    if (that.$areaDetailBoxes.hasClass(defaults.activeClass)) {
                        that.$areaDetailBoxes.removeClass(defaults.activeClass);
                        that.$mapAreas.removeClass(defaults.activeClass)
                    } else {
                        var centerX = that.mapElem.offsetLeft + that.mapElem.offsetWidth / 2;
                        var centerY = that.mapElem.offsetTop + that.mapElem.offsetHeight / 2;
                        that.$selectedArea.addClass(defaults.activeClass);
                        that.$selectedAreaDetailBox.css({
                            left: centerX,
                            top: centerY
                        });
                        that.$selectedAreaDetailBox.addClass(defaults.activeClass)
                    }
                });
                this.$mapBG.add(defaults.areaDetailBoxCloseButtonSelector).click(function() {
                    if (that.$selectedArea !== undefined) {
                        that.$selectedArea.removeClass(defaults.activeClass);
                        that.$selectedAreaDetailBox.removeClass(defaults.activeClass)
                    }
                })
            },
            loadMapAsset: function() {
                var mapAssetPath = PageSettings.libraCSSImagePath + defaults.mapAssetPath;
                var that = this;
                this.mapAssetContainer.load(mapAssetPath, function(response, status) {
                    if (status === "success") {
                        that.$mapAreas = that.$map.find(defaults.mapAreaSelector);
                        that.$mapBG = that.$map.find(defaults.mapBGSelector);
                        that.$map.css("visibility", "visible");
                        that.init(options);
                        that.template = that.getTemplate();
                        if (that.template) {
                            that.loadData()
                        }
                    }
                })
            }
        };
        mixin(MapArea.prototype, DirectoriesBundle.DirectoriesMixin);
        return MapArea
    });
    define("libra/components/gi-map-pin", ["directories/directories-bundle", "librastandardlib/obj-utils/mixin"], function(DirectoriesBundle, mixin) {
        var options = {
            componentName: "GIMapPin",
            itemsConfig: {
                selector: ".m-gi-map-pin",
                containerClass: ".m-gi-map-pin-details-container"
            },
            APIs: {
                getItems: {
                    defaultParams: {
                        limit: 250
                    }
                }
            }
        };
        var defaults = {
            newContentEvent: "custom_libra_require_new-content",
            pinWrapperSelector: ".m-gi-pin-wrapper",
            pinClassPrefix: "m-gi-pin-",
            pinPopoverClassPrefix: "m-gi-pin-popover-"
        };

        function MapPin(elem) {
            this.$elem = $(elem);
            this.init(options);
            this.template = this.getTemplate();
            if (this.template) {
                this.loadData()
            }
        }
        MapPin.prototype = {
            processData: function(data, replaceContent) {
                this.displayItems(data, replaceContent);
                this.pinData = data.items;
                this.plotPins()
            },
            plotPins: function() {
                var leftCord, bottomCord, cordSet;
                for (var i = 0; i < this.pinData.length; i++) {
                    leftCord = this.pinData[i].additionalFields.x + "%";
                    bottomCord = this.pinData[i].additionalFields.y + "%";
                    cordSet = {
                        left: leftCord,
                        bottom: bottomCord
                    };
                    $("<div/>").appendTo(defaults.pinWrapperSelector).addClass(defaults.pinClassPrefix + i).attr({
                        "data-is-soon": this.pinData[i].additionalFields.isSoon,
                        "data-lb-popover-trigger": defaults.pinPopoverClassPrefix + [i]
                    }).css(cordSet).show()
                }
                $(document).trigger(defaults.newContentEvent)
            }
        };
        mixin(MapPin.prototype, DirectoriesBundle.DirectoriesMixin);
        return MapPin
    });
    define("libra/components/gi-map", ["libra/components/gi-map-area", "libra/components/gi-map-pin"], function(MapArea, MapPin) {
        function GIMap(elem) {
            this.$elem = $(elem);
            new MapArea(this.$elem.find(".m-gi-map-area-details").first());
            new MapPin(this.$elem.find(".m-gi-map-pin").first())
        }
        Libra.Comp.register({
            name: "gi-map",
            initFct: function(elem) {
                new GIMap(elem)
            },
            initTime: "immediate"
        });
        return GIMap
    })
})();