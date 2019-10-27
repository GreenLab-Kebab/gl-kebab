! function(e) {
    var c = document.createElement("div"),
        t = ".lg-cc{position:fixed;z-index:20000;overflow:hidden;box-sizing:border-box;padding:20px 15px 0;border-radius:8px;background:#fff;box-shadow:0 1px 5px 0 rgba(0,0,0,.3);transition:transform .15s ease;transition:transform .15s ease,-webkit-transform .15s ease;-webkit-transform:translateY(120%);transform:translateY(120%);-webkit-backface-visibility:hidden;will-change:transform}.lg-cc_visible{-webkit-transform:translateY(0);transform:translateY(0)}.lg-cc{right:8px;bottom:8px;left:8px;width:auto;max-width:440px}@media screen and (min-width:440px){.lg-cc{left:auto}}@supports (-webkit-overflow-scrolling:touch){@media screen and (min-width:440px) and (max-width:1000px) and (orientation:landscape){.lg-cc{top:50%;bottom:auto}.lg-cc_visible{-webkit-transform:translateY(-50%);transform:translateY(-50%)}}}.lg-cc__title{font:700 20px/1.3 Helvetica,Arial,sans-serif;color:#000!important}.lg-cc__message{padding-bottom:15px;font:14px/18px \'Helvetica Neue\',Helvetica,Arial,sans-serif;color:#000!important}.lg-cc__message a{text-decoration:none;border:2px solid transparent;outline:0;color:#00c}.lg-cc__message a:visited{color:#00c}.lg-cc__message a:focus{border:2px solid #ffdb4d;background-color:transparent}.lg-cc__message a:active{border:2px solid transparent;outline:0}.lg-cc__close{position:absolute;z-index:2;top:0;right:0;width:44px;height:44px;cursor:pointer;opacity:.2}.lg-cc__close i{position:absolute;display:block;width:44px;height:44px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAArklEQVR4AX3RhVEDURAA0IfXgpUWG0uKwLUXrIhIH9jo+d2fW5wv677iHDq39N7cpTMH4sCOG4VKXLkr26H2pPrlPvYmty2rDEVwLlPuQisYGod6bKg1ye1zLglnSCZTwviElfDDpLlMQrbgTRV3RvKO+8qrYE1/GLx8TzE2/p7i7EeRiUqNHnMg/6fNPbj6c1DnwLYH1S/33ha9yaX827LOhRrYd2LhrbkLxyk31MIoq49A+HSJAAAAAElFTkSuQmCC);background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 16 16%22%3E%3Cpath d%3D%22M8 0a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zM4.995 3.934L8 6.94l3.005-3.005 1.06 1.061L9.06 8l3.006 3.005-1.061 1.06L8 9.062l-3.005 3.005-1.06-1.061L6.938 8 3.934 4.995l1.06-1.06z%22%2F%3E%3C%2Fsvg%3E\");background-repeat:no-repeat;background-position:center center;background-size:20px 20px}.lg-cc__controls{margin:0 -15px;text-align:right;white-space:nowrap;font-size:0}.lg-cc__button{display:inline-block;overflow:hidden;width:50%;margin:0;cursor:pointer;text-align:center;vertical-align:bottom;text-overflow:ellipsis;font:14px/35px Helvetica,Arial,sans-serif;color:#000;border:0;outline:0}.lg-cc__button_type_action,.lg-cc__button_type_clear{border:2px solid transparent}.lg-cc__button_type_action{border-top-left-radius:8px;background:#ffcd00}.lg-cc__button_type_clear{opacity:.3;border-top-right-radius:8px;background:0 0}.lg-cc__button_type_action:focus,.lg-cc__button_type_clear:focus{border:2px solid rgba(0,0,0,.3)}.lg-cc__button{touch-action:manipulation}",
        n = document.createElement("style");
    n.setAttribute("type", "text/css"), n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t)), c.innerHTML = "<div class=\"lg-cc\"><div class=\"lg-cc__title\">Cookie files</div><div class=\"lg-cc__message\">Yandex uses cookies to personalize its services. By continuing to use this site, you agree to this cookie usage. You can learn more about cookies and how your data is processed in the <a target=\"_blank\" href=\"https://yandex.com/legal/privacy/\">Privacy Policy</a>.</div><div class=\"lg-cc__controls\"><button class=\"lg-cc__button lg-cc__button_type_clear\">Skip</button><button class=\"lg-cc__button lg-cc__button_type_action\">Got it</button></div></div>", c.appendChild(n), document.body.appendChild(c);
    var o = c.querySelector(".lg-cc");
    if (o) {
        setTimeout(function() {
            o.className += " lg-cc_visible"
        }, 50);
        var i = o.querySelector(".lg-cc__button_type_action"),
            a = o.querySelector(".lg-cc__button_type_clear"),
            r = o.querySelector(".lg-cc__close"),
            d = function(e) {
                var t;
                t = e, void 0 !== window.Ya && window.Ya._metrika && window.Ya._metrika.dataLayer.push({
                    ymetrikaEvent: {
                        type: t
                    }
                }), o.className = o.className.replace("lg-cc_visible", ""), setTimeout(function() {
                    c.parentNode.removeChild(c)
                }, 250)
            },
            l = window.attachEvent && !window.addEventListener;
        l && (o.style.border = "1px solid #ccc"), i && (l ? i.attachEvent("onclick", function() {
            d("GDPR-ok")
        }) : i.addEventListener("click", function() {
            d("GDPR-ok")
        })), a && (l ? a.attachEvent("onclick", function() {
            d("GDPR-cancel")
        }) : a.addEventListener("click", function() {
            d("GDPR-cancel")
        })), r && (l ? r.attachEvent("onclick", function() {
            d("GDPR-cross")
        }) : r.addEventListener("click", function() {
            d("GDPR-cross")
        }))
    }
}(window);