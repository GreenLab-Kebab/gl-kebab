(window.webpackJsonpBoomer = window.webpackJsonpBoomer || []).push([
    ["commons.dom-helpers"], {
        "./node_modules/IMDbWebpackConfigs/node_modules/IMDbWebpackCommons/node_modules/dom-helpers/esm/addClass.js": function(s, e, a) {
            "use strict";

            function c(s, e) {
                s.classList ? s.classList.add(e) : function(s, e) {
                    return s.classList ? !!e && s.classList.contains(e) : -1 !== (" " + (s.className.baseVal || s.className) + " ").indexOf(" " + e + " ")
                }(s, e) || ("string" == typeof s.className ? s.className = s.className + " " + e : s.setAttribute("class", (s.className && s.className.baseVal || "") + " " + e))
            }
            a.d(e, "a", function() {
                return c
            })
        },
        "uyFzyncmc+": function(s, e, a) {
            "use strict";

            function c(s, e) {
                return s.replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
            }

            function n(s, e) {
                s.classList ? s.classList.remove(e) : "string" == typeof s.className ? s.className = c(s.className, e) : s.setAttribute("class", c(s.className && s.className.baseVal || "", e))
            }
            a.d(e, "a", function() {
                return n
            })
        }
    }
]);