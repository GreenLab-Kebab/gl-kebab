(function(w) {
    var lyticsId = "107d418c4b7bb3debf57a3af0ce16190",
        widgetConfig;
    w.pathfora.enableGA = true;
    widgetConfig = w.pathfora.utils.initWidgetScaffold();
    var pfaVariations = [];
    var acctConfig = {};
    if (pfaVariations.length) {
        w.pathfora.initializeABTesting(pfaVariations);
    }
    w.pathfora.initializeWidgets(widgetConfig, acctConfig);
}(window));