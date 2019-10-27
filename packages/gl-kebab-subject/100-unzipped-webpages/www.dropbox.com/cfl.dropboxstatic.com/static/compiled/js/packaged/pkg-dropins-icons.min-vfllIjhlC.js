define("spectrum/colorized_icon/colorized_icon", ["require", "exports", "tslib", "tslib", "react", "classnames"], function(e, t, o, r, n, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = o.__importStar(r), n = o.__importStar(n), l = o.__importDefault(l), t.ColorizedIcon = function(e) {
        var t = e.color,
            o = e.children,
            i = (r.__rest(e, ["color", "children"]), n.Children.only(o)),
            c = l.default("mc-colorized-icon--colorized", i.props.className);
        return n.cloneElement(i, {
            color: t,
            className: c
        })
    }, t.ColorizedIcon.displayName = "ColorizedIcon"
}), define("spectrum/colorized_icon", ["require", "exports", "tslib", "spectrum/colorized_icon/colorized_icon"], function(e, t, o, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o.__exportStar(r, t)
}), define("spectrum/icon_chooser/bundle", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ICONS = {
        "file-confirm": {
            attrs: {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16"
            },
            dangerouslySetInnerIconHtml: '<path d="M7.159 9.444l-1.81-1.81-1.341 1.341 3.017 3.017 6.034-6.034-1.207-1.207-4.693 4.693zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fill="#19BE10" fill-rule="evenodd"></path>'
        },
        "file-error": {
            attrs: {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM4 7v2h8V7H4z" fill="#F22322" fill-rule="nonzero"></path></g>'
        },
        "file-sync": {
            attrs: {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16"
            },
            dangerouslySetInnerIconHtml: '<path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-3a5 5 0 0 0 3.467-8.602l-.57.844A4 4 0 0 1 8 12l.001-1.5-2.5 2 2.5 2V13zM8 3a5 5 0 0 0-3.667 8.399l.578-.858A4 4 0 0 1 8 4v1.5l2.5-2-2.5-2V3z" fill="#0070E0" fill-rule="nonzero"></path>'
        },
        "file-warning": {
            attrs: {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16"
            },
            dangerouslySetInnerIconHtml: '<path d="M13.155 15.02c2.534 0 3.583-1.793 2.349-3.994L10.25 1.653c-1.236-2.206-3.243-2.202-4.477 0L.52 11.026C-.717 13.232.327 15.02 2.868 15.02h10.287zm-3.999-2.315h-2.29V10.39h2.29v2.315zm0-3.472h-2.29v-4.63h2.29v4.63z" fill="#FF8E21" fill-rule="evenodd"></path>'
        },
        "search-cancel": {
            attrs: {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14"
            },
            dangerouslySetInnerIconHtml: '<path d="M7 14c-3.5 0-7-3.134-7-7a7 7 0 1 1 14 0c0 3.866-3.5 7-7 7zm.943-7l1.884-1.884a.666.666 0 1 0-.943-.943L7 6.057 5.116 4.173a.666.666 0 1 0-.943.943L6.057 7 4.173 8.884a.666.666 0 1 0 .943.943L7 7.943l1.884 1.884a.666.666 0 1 0 .943-.943L7.943 7z" fill="#6A7C8F" fill-rule="nonzero"></path>'
        },
        "selected-check": {
            attrs: {
                width: "11",
                height: "11",
                viewBox: "0 0 11 8"
            },
            dangerouslySetInnerIconHtml: '<path d="M4.243 5.485L1.414 2.657 0 4.07l4.243 4.243 7.07-7.071L9.9-.172z" fill="#0070E0" fill-rule="evenodd"></path>'
        }
    }
}), define("spectrum/icon_chooser", ["require", "exports", "tslib", "tslib", "react", "spectrum/icon_templates/stateless", "spectrum/svg_icon_bundle", "spectrum/icon_chooser/bundle"], function(e, t, o, r, n, l, i, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = o.__importStar(r), n = o.__importStar(n), t.ICONS = c.ICONS, t.IconChooser = function(e) {
        var t = e.name,
            o = n.createElement(i.SvgIconBundle, {
                focusable: "false",
                icon: c.ICONS[t]
            });
        return n.createElement(l.Component, r.__assign({
            icon: o
        }, e))
    }, t.IconChooser.displayName = "IconChooser"
}), define("spectrum/icon_saver/bundle", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ICONS = {
        "selected-download": {
            attrs: {
                width: "17",
                height: "17",
                viewBox: "0 0 17 23"
            },
            dangerouslySetInnerIconHtml: '<g fill-rule="nonzero" fill="#6A7C8F"><path d="M11 8h4c-.01-.024.114.212 0 1l-6 7c-.134.152-.872.143-1 0L2 9c-.117-.793.012-1.024 0-1h4V0h5v8z"></path><path opacity=".5" d="M0 20h17v3H0z"></path></g>'
        }
    }
}), define("spectrum/icon_saver", ["require", "exports", "tslib", "tslib", "react", "spectrum/icon_templates/stateless", "spectrum/svg_icon_bundle", "spectrum/icon_saver/bundle"], function(e, t, o, r, n, l, i, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = o.__importStar(r), n = o.__importStar(n), t.ICONS = c.ICONS, t.IconSaver = function(e) {
        var t = e.name,
            o = n.createElement(i.SvgIconBundle, {
                focusable: "false",
                icon: c.ICONS[t]
            });
        return n.createElement(l.Component, r.__assign({
            icon: o
        }, e))
    }, t.IconSaver.displayName = "IconSaver"
});
//# sourceMappingURL=pkg-dropins-icons.min.js-vfltQSyiA.map