function getOS() {
    var t = window.navigator.userAgent;
    return /(iPhone|iPad|iPod)/.test(t) ? "iOS" : /Android/.test(t) ? "Android" : "Desktop"
}