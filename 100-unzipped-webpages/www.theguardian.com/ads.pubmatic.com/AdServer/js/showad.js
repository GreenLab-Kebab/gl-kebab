<!--/*--><html><body><script type="text/javascript"><!--//*/
if (window.pubId && window.kadasync != false) {
    (function() {
        var a = (function() {
                var c = navigator.userAgent.toLowerCase();
                if (c.indexOf("safari") != -1) {
                    return c.indexOf("chrome") > -1 ? false : true
                }
                return false
            })(),
            b = {
                319: "",
                33496: "",
                155957: "",
                145058: "",
                57248: "",
                83446: "",
                117297: "",
                55601: "",
                115938: "",
                148804: "",
                150561: "",
                79505: "",
                32223: "",
                100253: "",
                132591: "",
                133710: "",
                118184: "",
                110741: "",
                116319: "",
                132110: "",
                150560: "",
                112961: "",
                89413: "",
                155497: "",
                69972: "",
                117497: "",
                96387: "",
                119281: "",
                128495: "",
                107134: "",
                110791: "",
                114634: "",
                45156: "",
                36365: "",
                145160: "",
                120747: "",
                148805: "",
                89376: "",
                113148: "",
                107246: "",
                93639: "",
                120496: "",
                47683: "",
                73102: "",
                156010: "",
                156193: "",
                156167: "",
                156180: "",
                156851: "",
                156585: ""
            };
        window.pmAsyncEnabled = a && window.pubId && !b.hasOwnProperty(window.pubId) && !window.kadmultisize
    })()
}
if (window.pmAsyncEnabled) {
    (function() {
        window.pmDspId = {
            uids: []
        };
        if (1) {
            (function() {
                window.pmCriteoHandleData = function(c) {
                    if (c.status == "OK" && c.userid) {
                        window.pmDspId.uids.push({
                            px: 116,
                            uid: c.userid
                        })
                    }
                };
                var b = document.createElement("script");
                b.type = "text/javascript";
                b.async = 1;
                b.src = "https://gum.criteo.com/sync?c=31&r=2&j=pmCriteoHandleData";
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(b, a)
            })()
        }
    })()
}(function() {
    function aj(bA) {
        var bF = "",
            bE, x, bB, bz, bD, bC = (location.protocol === "http:" ? "http" : "https") + "://haso.pubmatic.com/jsError/logger.js?";
        for (x in bA) {
            if (x != "message" && x != "name") {
                bE = bA[x];
                if (typeof bE === "string" || typeof bE === "number") {
                    bF += "[" + x + ":" + bE + "]"
                }
            }
        }
        bB = "pubId=" + window.pubId + (window.kadId ? "&adId=" + window.kadId : "") + "&cb=" + Math.random() + "&SAVersion=2&msg=" + encodeURIComponent(bA.message) + "&name=" + encodeURIComponent(bA.name) + "&desc=" + encodeURIComponent(bF) + "&url=" + encodeURIComponent(window.location.href);
        if (typeof window.Image == "function") {
            (new Image()).src = bC + bB
        } else {
            bz = document.createElement("img");
            bz.src = bC + bB;
            bD = document.body || document.getElementsByTagName("body")[0] || false;
            bD && bD.appendChild(bz)
        }
    }
    try {
        var aL = window,
            q = navigator,
            a2 = aL.top || aL,
            V = encodeURIComponent,
            aE = decodeURIComponent,
            br = aL.parseInt,
            C, u = 512,
            bt = 512,
            an = 50,
            aT = "height:0px;width:0px;display:none;",
            a6 = '<script type="text/javascript" src="',
            ap = aL.PubMatic || (aL.PubMatic = {}),
            ag = ap.pmAdInfo || (ap.pmAdInfo = {}),
            a9 = 0,
            k = aL.location,
            a5 = (function() {
                var x = navigator.userAgent.toLowerCase();
                if (x.indexOf("safari") != -1) {
                    return x.indexOf("chrome") > -1 ? false : true
                }
                return false
            })(),
            X = function(x) {
                if (a5) {
                    return x
                }
                try {
                    if (x.parent && x.parent.document && x.location && x.parent.document != x.document) {
                        return X(x.parent)
                    }
                } catch (bz) {}
                return x
            },
            ar = (function() {
                if (aL.kadsec == 1) {
                    a9 = 1;
                    return "https://"
                }
                var x = X(aL);
                return (x.location.protocol !== "http:" ? (a9 = 1, "https") : "http") + "://"
            })(),
            j = "AdServer",
            bf = "pubmatic.com",
            aA = "ads." + bf,
            aZ = "/" + j + "/" + j + "Servlet",
            bk = aA + "/" + j + "/",
            bo = ar + bk + "js",
            bv = ar + (a9 ? "s" : "") + "showads." + bf + aZ,
            ao = aL.location.href,
            a4 = ao.indexOf("#") > -1 ? ao.substr(ao.indexOf("#") + 1) : "",
            am = bo + "/showad.js",
            M = "/" + j + "/js/showad.js",
            aS, a1, a7, y, aB = {},
            bc = function(x) {
                return typeof x === "function"
            },
            bl = console.log.bind(console, "PubMatic:"),
            l = function() {
                return aL.location.protocol == "http:" ? "http:" : "https:"
            },
            o = function(x, bB) {
                var bA = document.createElement("script");
                bA.type = "text/javascript";
                bA.src = x;
                if (bc(bB)) {
                    bA.onload = bA.onreadystatechange = bB
                }
                var bz = document.getElementsByTagName("script")[0];
                bz && bz.parentNode && bc(bz.parentNode.appendChild) && bz.parentNode.appendChild(bA)
            },
            bp = (function() {
                try {
                    return aL.localStorage && bc(aL.localStorage.getItem) && bc(aL.localStorage.setItem)
                } catch (x) {
                    return false
                }
            })(),
            h = "PubMatic",
            a = (aL.__cmp ? 1 : (aL.kadGdpr ? aL.kadGdpr : 0)),
            bi = function(bC, bB) {
                var bz = 0,
                    x = bC.length,
                    bA = false;
                for (; bz < x; bz++) {
                    if (bC[bz] === bB) {
                        bA = true;
                        break
                    }
                }
                return bA
            },
            L = function(x, bz, bC) {
                function bD() {
                    var bL = {};

                    function bM() {
                        if (bL.getConsentData && bL.getVendorConsents) {
                            x(bL, bC)
                        }
                    }
                    return {
                        consentDataCallback: function(bN) {
                            bL.getConsentData = bN;
                            bM()
                        },
                        vendorConsentsCallback: function(bN) {
                            bL.getVendorConsents = bN;
                            bM()
                        }
                    }
                }

                function bK() {
                    window.__cmp("getConsentData", null, bA.consentDataCallback);
                    window.__cmp("getVendorConsents", null, bA.vendorConsentsCallback)
                }
                var bA = bD();
                var bI = {};
                if (window.__cmp) {
                    if (typeof window.__cmp === "function") {
                        bK()
                    } else {
                        setTimeout(function() {
                            if (typeof window.__cmp === "function") {
                                bK()
                            }
                        }, 500)
                    }
                } else {
                    if (window !== a2) {
                        if (bE() && typeof window.$sf.ext.cmp === "function") {
                            bJ("getConsentData", bA.consentDataCallback);
                            bJ("getVendorConsents", bA.vendorConsentsCallback)
                        } else {
                            var bG = window;
                            var bF;
                            while (!bF) {
                                try {
                                    if (bG.frames.__cmpLocator) {
                                        bF = bG
                                    }
                                } catch (bH) {}
                                if (bG === window.top) {
                                    break
                                }
                                bG = bG.parent
                            }
                            bB("getConsentData", bF, bA.consentDataCallback);
                            bB("getVendorConsents", bF, bA.vendorConsentsCallback)
                        }
                    } else {
                        setTimeout(function() {
                            if (typeof window.__cmp === "function") {
                                bK()
                            }
                        }, 500)
                    }
                }

                function bE() {
                    return !!(window.$sf && window.$sf.ext)
                }

                function bJ(bM, bN) {
                    function bL(bQ, bP) {
                        if (bQ === "cmpReturn") {
                            var bO = (bM === "getConsentData") ? bP.vendorConsentData : bP.vendorConsents;
                            bN(bO)
                        }
                    }
                    window.$sf.ext.register(1, 1, bL);
                    window.$sf.ext.cmp(bM)
                }

                function bB(bN, bQ, bP) {
                    window.__cmp = function(bT, bR, bW) {
                        if (!bQ) {
                            bO();
                            var bV = "CMP not found";
                            return bz(bV, bC)
                        }
                        var bS = Math.random() + "";
                        var bU = {
                            __cmpCall: {
                                command: bT,
                                parameter: bR,
                                callId: bS
                            }
                        };
                        bI[bS] = bW;
                        bQ.postMessage(bU, "*")
                    };
                    window.addEventListener("message", bM, false);
                    window.__cmp(bN, null, bL);

                    function bM(bT) {
                        var bS = (typeof bT.data === "string" && bi(bT.data, "cmpReturn")) ? JSON.parse(bT.data) : bT.data;
                        if (bS.__cmpReturn && bS.__cmpReturn.callId) {
                            var bR = bS.__cmpReturn;
                            if (typeof bI[bR.callId] !== "undefined") {
                                bI[bR.callId](bR.returnValue, bR.success);
                                delete bI[bR.callId]
                            }
                        }
                    }

                    function bO() {
                        window.removeEventListener("message", bM, false)
                    }

                    function bL(bR) {
                        bO();
                        bP(bR)
                    }
                }
            },
            aV = function(bz) {
                function bA(bB) {
                    if (bB) {
                        if (bB.getConsentData && bB.getConsentData.consentData) {
                            Q(bz, "c", bB.getConsentData.consentData)
                        } else {
                            if (bB.getVendorConsents && bB.getVendorConsents.metadata) {
                                Q(bz, "c", bB.getVendorConsents.metadata)
                            }
                        }
                    }
                }

                function x() {}
                L(bA, x)
            },
            Q = function(bB, x, bA) {
                var bz;
                if (!bp) {
                    return
                }
                try {
                    bz = aL.localStorage.getItem(h)
                } catch (bC) {}
                if (bz && typeof bz === "string") {
                    try {
                        bz = JSON.parse(bz)
                    } catch (bC) {
                        bz = {}
                    }
                } else {
                    bz = {}
                }
                if (bz) {
                    if (!bz.hasOwnProperty(bB)) {
                        bz[bB] = {}
                    }
                    bz[bB].t = (new Date()).getTime();
                    bz[bB][x] = bA;
                    if (x == "c") {
                        bz[bB]["g"] = 1
                    }
                }
                try {
                    aL.localStorage.setItem(h, JSON.stringify(bz))
                } catch (bC) {}
            },
            W = function(bB) {
                var bA = {
                    c: ""
                };
                if (!bp) {
                    return bA
                }
                var bz;
                try {
                    bz = aL.localStorage.getItem(h)
                } catch (bC) {}
                if (bz && typeof bz === "string") {
                    try {
                        bz = JSON.parse(bz)
                    } catch (bC) {
                        bz = {}
                    }
                    if (bz.hasOwnProperty(bB)) {
                        var x = bz[bB];
                        if (x && x.c && x.t) {
                            if (x.t && br(x.t) > ((new Date()).getTime() - (24 * 60 * 60 * 1000))) {
                                bA.c = x.c
                            } else {}
                        }
                    }
                }
                return bA
            },
            ax = "nFIn8aLzbd",
            be = function(x) {
                if (typeof x !== "function") {
                    return
                }
                var bz = false;
                o("https://cdn.digitru.st/prod/1/digitrust.min.js", function() {
                    if (!bz && (!this.readyState || this.readyState == "complete")) {
                        bz = true;
                        DigiTrust && bc(DigiTrust.initialize) && DigiTrust.initialize({
                            member: ax
                        }, x)
                    }
                })
            },
            D = function(bB, bD) {
                if (!bc(bB)) {
                    return
                }

                function bz() {
                    var bE = window.DigiTrust && bc(window.DigiTrust.getUser) && window.DigiTrust.getUser({
                        member: ax
                    });
                    return (bE && bE.success && bE.identity) || null
                }

                function x(bF, bE) {
                    if (!bF || (bF.privacy && bF.privacy.optout)) {
                        bE(null)
                    } else {
                        bE({
                            source: "digitru.st",
                            uids: [{
                                id: bF.id || "",
                                atype: 1,
                                ext: {
                                    keyv: br(bF.keyv) || 0
                                }
                            }]
                        })
                    }
                }
                if (bD !== true) {
                    var bC = bz();
                    x(bC, bB)
                } else {
                    function bA(bI) {
                        function bH() {
                            var bK = window;
                            var bJ = null;
                            while (!bJ) {
                                try {
                                    if (bK.frames.__dtLocator) {
                                        bJ = bK
                                    }
                                } catch (bL) {}
                                if (bK === window.top) {
                                    break
                                }
                                bK = bK.parent
                            }
                            return bJ
                        }

                        function bE(bJ) {
                            if (bJ.data.type === "Digitrust.shareIdToIframe.response") {
                                delete bJ.data.type;
                                window.removeEventListener("message", bE, false);
                                bI(bJ.data)
                            }
                        }
                        var bG = bH();
                        var bF = {
                            type: "Digitrust.shareIdToIframe.request"
                        };
                        window.addEventListener("message", bE, false);
                        if (bG && bc(bG.postMessage)) {
                            bG.postMessage(bF, "*")
                        }
                    }
                    bA(function(bE) {
                        x(bE.identity || {}, bB)
                    })
                }
            },
            aq = function(x) {
                var bz = [];
                D(function(bA) {
                    if (bA !== null) {
                        bz.push(bA)
                    }
                });
                if (bz.length > 0) {
                    x.eids = JSON.stringify(bz)
                }
            },
            bd = (function() {
                var bB = "PM-UL-Sync",
                    bA = 2,
                    bz = [],
                    bE = function(bK) {
                        var bN = "",
                            bM, bH, bJ = 0,
                            bI;
                        try {
                            bN = document.cookie
                        } catch (bL) {}
                        bM = bN.split("; ");
                        bH = bM.length;
                        for (; bJ < bH; bJ++) {
                            bI = bM[bJ].split("=");
                            if (bI[0] === bK) {
                                return bI[1]
                            }
                        }
                        return ""
                    },
                    bG = function(bI, bO, bP, bQ, bK, bH) {
                        var bJ, bN, bL = function() {
                            var bS = "Chrome/",
                                bR = bS.length;
                            ua = navigator.userAgent, chromePatternIndex = ua.indexOf(bS), chromeVersion = 0;
                            if (chromePatternIndex > -1) {
                                chromeVersion = br(ua.substr(chromePatternIndex + bR, 3));
                                if (chromeVersion >= 67) {
                                    return true
                                }
                            }
                            return false
                        };
                        bJ = new Date(new Date().getTime() + bP * 86400000);
                        bN = bI + "=" + bO + ";expires=" + bJ.toGMTString() + ";path=" + bQ + ";domain=" + bK;
                        if (bH) {
                            bN += ";secure"
                        }
                        if (bL()) {
                            bN += ";SameSite=None"
                        }
                        try {
                            document.cookie = bN
                        } catch (bM) {}
                    },
                    bC = function() {
                        var bH = {};
                        try {
                            bH = JSON.parse(bE(bB))
                        } catch (bI) {}
                        return bH
                    },
                    bF = function(bH, bI) {
                        if (bH.pubs.hasOwnProperty(bI)) {
                            if (bH.pubs[bI] == 1) {
                                return true
                            } else {
                                if (bH.pubs[bI] == 0) {
                                    return false
                                }
                            }
                        } else {
                            if (bH.pubs.hasOwnProperty("*")) {
                                if (bH.pubs["*"] == 1) {
                                    return true
                                } else {
                                    if (bH.pubs["*"] == 0) {
                                        return false
                                    }
                                }
                            } else {
                                return false
                            }
                        }
                    },
                    x = function(bH) {
                        return function() {
                            var bI = bC(),
                                bJ = (new Date()).getTime(),
                                bK = bH.fH || 24;
                            bI[bH.id] = bJ + bH.fH * 60 * 60 * 1000;
                            bG(bB, JSON.stringify(bI), 30, "/", "")
                        }
                    },
                    bD = function(bO, bH) {
                        if (navigator.cookieEnabled === false) {
                            return
                        }
                        var bJ = bC(),
                            bM = (new Date()).getTime();
                        for (var bK = 0, bI = bz.length; bK < bI; bK++) {
                            var bL = bz[bK];
                            if (bc(bL.name)) {
                                if (bL.fileList && bL.fileList[bH] !== 1) {
                                    continue
                                }
                                if (bc(bL.prefilter)) {
                                    if (bL.prefilter(bO) === false) {
                                        continue
                                    }
                                }
                                var bN = false;
                                bN = bF(bL, bO.p);
                                if (!bN) {
                                    continue
                                }
                                if (!bJ.hasOwnProperty(bL.id) || (bJ.hasOwnProperty(bL.id) && bJ[bL.id] < bM)) {
                                    setTimeout((function(bP) {
                                        return function() {
                                            bP.name(bO, x(bP))
                                        }
                                    })(bL), bL.iDM || 0);
                                    bA--;
                                    if (bA == 0) {
                                        break
                                    }
                                } else {}
                            }
                        }
                    };
                bz.push({
                    name: function(bO, bP) {
                        var bH = "content.uplynk.com",
                            bQ = "ad.vcid",
                            bJ = 1000,
                            bI = 30,
                            bM = 1,
                            bR = function(bU, bS) {
                                var bT = "//image4.pubmatic.com/AdServer/SPug?partnerID=" + bU.p;
                                bT += "&partnerUID=" + encodeURIComponent(bS);
                                bT += "&gdpr=" + (bU.gdpr || 0);
                                bT += "gdpr_consent=" + (bU.gdpr_consent || "");
                                (new Image()).src = bT
                            },
                            bL = function() {
                                var bT = [];
                                try {
                                    bT = window.performance.getEntriesByType("resource")
                                } catch (bS) {
                                    bT = []
                                }
                                return bT
                            },
                            bK = function(bW, bX, bT) {
                                for (var bV = 0, bS = bW.length; bV < bS; bV++) {
                                    if (bW[bV] && typeof bW[bV].name === "string" && typeof bW[bV].name.indexOf === "function" && bW[bV].name.indexOf(bH) > 0) {
                                        var bU = getQueryParamsFromURL(bW[bV].name);
                                        if (bU[bQ]) {
                                            bR(bX, bU[bQ]);
                                            (new Image()).src = "//pixeljs-ads.pubmatic.com/AdServer/js/pixel.js?jst=UPLYNK&try=" + bM + "&p=" + bX.p;
                                            bT();
                                            return true
                                        }
                                    }
                                }
                                return false
                            },
                            bN = function(bT, bS) {
                                if (!bK(bL(), bT, bS)) {
                                    if (bM < bI) {
                                        bM++;
                                        setTimeout(function() {
                                            bN(bT, bS)
                                        }, bJ)
                                    } else {
                                        (new Image()).src = "//pixeljs-ads.pubmatic.com/AdServer/js/pixel.js?jst=UPLYNK&try=MAX_TRY&p=" + bT.p
                                    }
                                }
                            };
                        bN(bO, bP)
                    },
                    id: 1,
                    fH: 24,
                    iDM: 1000,
                    pubs: {
                        "51217": 1
                    },
                    fileList: {
                        "userSync.js": 1
                    },
                    prefilter: function(bH) {
                        return window === a2
                    }
                }, {
                    name: function(bL, bH) {
                        var bK = false;
                        var bJ;
                        var bI = 3;
                        var bM = function(bO) {
                            if (bK) {
                                return
                            }
                            var bQ = [];
                            if (bO !== null) {
                                bQ.push(bO);
                                try {
                                    var bN = l() + "//image2.pubmatic.com/AdServer/Pug?vcode=bz0yJnR5cGU9MSZqcz0xJmNvZGU9MzQwMCZ0bD00MzIwMA==";
                                    bN += bL.hasOwnProperty("p") ? ("&p=" + bL.p) : "";
                                    bN += "&eids=" + encodeURIComponent(JSON.stringify(bQ));
                                    bN += "&gdpr=" + (bL.hasOwnProperty("gdpr") ? bL.gdpr || "0" : "0");
                                    bN += "&gdpr_consent=" + (bL.hasOwnProperty("gdpr_consent") ? encodeURIComponent(bL.gdpr_consent || "") : "");
                                    o(bN);
                                    bH();
                                    bK = true;
                                    clearInterval(bJ)
                                } catch (bP) {}
                            } else {}
                            if (--bI === 0) {
                                clearInterval(bJ)
                            }
                        };
                        if (window.DigiTrust && bc(window.DigiTrust.getUser)) {
                            bJ = setInterval(function() {
                                D(bM)
                            }, 300)
                        } else {
                            if (window === a2) {
                                be(function() {
                                    bJ = setInterval(function() {
                                        D(bM)
                                    }, 300)
                                })
                            } else {
                                if (window !== a2) {
                                    bJ = setInterval(function() {
                                        D(bM, true)
                                    }, 300)
                                }
                            }
                        }
                    },
                    id: 2,
                    fH: 24,
                    iDM: 0,
                    pubs: {
                        "*": 1,
                        157741: 0
                    },
                    fileList: {
                        "userSync.js": 1,
                        "user_sync.html": 1,
                        "showad.js": 1,
                        "mshowad.js": 1
                    },
                    prefilter: function(bH) {
                        return true
                    }
                });
                return bD
            })(),
            aY = (function() {
                var x = {
                    319: ""
                };
                return a != 1 && aL.pubId && !x.hasOwnProperty(aL.pubId)
            })(),
            z = function(x) {
                document.write(x)
            },
            ba = function(bz, bC) {
                var x = document.body || document.getElementsByTagName("body")[0] || false,
                    bB;
                try {
                    if (x) {
                        if (document.createEvent) {
                            bB = document.createEvent("HTMLEvents");
                            bB.info = bC;
                            bB.initEvent(bz, true, true);
                            x.dispatchEvent(bB)
                        } else {
                            if (document.createEventObject) {
                                bB = document.createEventObject();
                                bB.info = bC;
                                x.fireEvent(bz, bB)
                            }
                        }
                    }
                } catch (bA) {}
            },
            bj = function(bz, x) {
                if (x) {
                    if (bs.IE) {
                        z(a6 + bz + '" onReadyStateChange="PubMatic.tags[' + x + '].jsl(this);"><\/script>')
                    } else {
                        z(a6 + bz + '" onload="PubMatic.tags[' + x + '].jsl();"><\/script>')
                    }
                } else {
                    z(a6 + bz + '"><\/script>')
                }
            },
            P = function(x, bL, bD, bA, bB, bC, bG, bz, bE) {
                var bI, bK, bF, bJ, bH = false;
                if ((bE && document.body) || (!bz && document.readyState !== "loading" && document.body)) {
                    bI = document.createElement("iframe");
                    bI.src = x;
                    bI.height = bL;
                    bI.width = bD;
                    bB ? bI.name = bB : null;
                    bC ? bI.id = bC : null;
                    bA ? bI.style.cssText = bA : null;
                    bG ? bI.onload = bG : null;
                    bI.marginHeight = "0";
                    bI.marginWidth = "0";
                    bI.scrolling = "no";
                    bI.frameBorder = "0";
                    bI.allowtransparency = "true";
                    bI.hspace = "0";
                    bI.vspace = "0";
                    bF = document.body;
                    if (aL.PubMaticAI) {
                        bJ = bF.firstChild;
                        if (bJ && bJ.nodeType === 1 && bJ.className === "PubAdAI") {
                            bJ.style.display = "";
                            d(bJ);
                            bF = bJ;
                            bH = true
                        }
                    }
                    if (document.readyState === "complete" || (bs.IE && document.readyState === "interactive")) {
                        bH ? bF.insertBefore(bI, bF.lastChild) : bF.appendChild(bI)
                    } else {
                        if (bs.IE) {
                            document.onreadystatechange = function() {
                                if (document.readyState === "complete") {
                                    document.onreadystatechange = null;
                                    bH ? bF.insertBefore(bI, bF.lastChild) : bF.appendChild(bI)
                                }
                            }
                        } else {
                            bK = function() {
                                if (document.removeEventListener) {
                                    document.removeEventListener("DOMContentLoaded", bK, false)
                                }
                                aL.onload = function() {};
                                bH ? bF.insertBefore(bI, bF.lastChild) : bF.appendChild(bI)
                            };
                            if (document.addEventListener) {
                                document.addEventListener("DOMContentLoaded", bK, false)
                            }
                            aL.onload = bK
                        }
                    }
                } else {
                    z("<iframe" + (bC ? ' id="' + bC + '"' : "") + (bB ? ' name="' + bB + '"' : "") + ' frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" scrolling="no" width="' + bD + '" hspace="0" vspace="0" height="' + bL + '"' + (bA ? ' style="' + bA + '"' : "") + ' src="' + x + '"' + (bG ? ' onload="' + bG + '"' : "") + "></iframe>")
                }
            },
            aW = function() {
                var x = {};
                x.pubId = br(aL.pubId);
                x.siteId = br(aL.siteId);
                x.adId = br(aL.kadId);
                x.kadwidth = br(aL.kadwidth);
                x.kadheight = br(aL.kadheight);
                if (aL.kadtype) {
                    x.kadtype = br(aL.kadtype);
                    aL.kadtype = C
                }
                if (aL.kadNetwork) {
                    x.kadNetwork = aL.kadNetwork;
                    aL.kadNetwork = C
                }
                return x
            },
            H = function(bB) {
                var x = [],
                    bz, bA;
                for (bz in bB) {
                    bA = bB[bz];
                    if (bB.hasOwnProperty(bz) && bA != C && bA !== "") {
                        x.push(bz + "=" + V(bA))
                    }
                }
                return x.join("&").replace(/#/g, "%23")
            },
            m = function(bB) {
                var x = [],
                    bz, bA;
                for (bz in bB) {
                    bA = bB[bz];
                    if (bB.hasOwnProperty(bz) && bA != C && bA !== "") {
                        if (bz !== "defcmpgIDs") {
                            bA = g(bA)
                        }
                        x.push(bz + "=" + bA)
                    }
                }
                return x.join("&").replace(/#/g, "%23")
            },
            I = function(bz) {
                var x = new Date();
                bz.kltstamp = x.getFullYear() + "-" + (x.getMonth() + 1) + "-" + x.getDate() + " " + x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
                bz.timezone = x.getTimezoneOffset() / 60 * -1
            },
            g = function(bz) {
                try {
                    bz = typeof bz === "string" ? bz : "" + bz;
                    bz = aE(bz) === bz ? V(bz) : bz;
                    if (bz.indexOf("&") >= 0 || bz.indexOf("=") >= 0 || bz.indexOf("?") >= 0) {
                        bz = V(bz)
                    }
                    return bz
                } catch (x) {
                    return ""
                }
            },
            ak = function() {
                var bC = {},
                    bD, bA, x, bz = function(bF) {
                        var bE = bF,
                            bG;
                        if (bF.indexOf("show" + aA) > 0 || bF.indexOf("showadsak." + bf) > 0) {
                            bG = bF.match(/pageURL=(.*?&)/);
                            if (bG && bG[1]) {
                                bE = bG[1];
                                bE = bE.substr(0, bE.length - 1);
                                try {
                                    bE = aE(bE)
                                } catch (bH) {}
                            }
                        }
                        return bE
                    };
                bC.u = "";
                bC.r = "";
                try {
                    if (aL.kadpageurl == "INSERT_ENCODED_PAGEURL_HERE") {
                        aL.kadpageurl = ""
                    }
                    bD = X(aL);
                    bC.r = bz(bD.refurl || bD.document.referrer || "").substr(0, bt);
                    bC.u = bz(bD !== a2 && bD.document.referrer != "" ? bD.document.referrer : bD.location.href).substr(0, bt);
                    if (bC.u === bC.r) {
                        bC.r = ""
                    }
                    bC.u = g(bC.u);
                    bC.r = g(bC.r)
                } catch (bB) {}
                if (!bC.u) {
                    try {
                        ao = (ao == aE(ao)) ? ao : aE(ao)
                    } catch (bB) {}
                    ao = bz(ao);
                    bC.u = V(ao.substr(0, bt))
                }
                if (bC.u === bC.r) {
                    bC.r = ""
                }
                bA = q.userAgent;
                x = bA.indexOf("MSIE");
                bC.IE = q.appName == "Microsoft Internet Explorer";
                if (bC.IE && x > 0) {
                    bC.IEV = br(bA.substr(x + 5, 3));
                    bC.IE6 = bC.IEV < 7
                }
                bC.it = aL.kadinventorytype ? aL.kadinventorytype : 0;
                return bC
            },
            bs = ap.m || (ap.m = ak()),
            a3 = function(x) {
                try {
                    if (q.cookieEnabled === false) {
                        x.fpcd = "1"
                    }
                } catch (bz) {}
                x.pageURL = bs.u;
                x.refurl = bs.r;
                bs.IE6 && (x.avoidFrameDefault = 1);
                x.inIframe = aL != a2 ? "1" : "0";
                if ("isSingleFrame" in aL) {
                    x.inMultipleNestedIframes = aL.isSingleFrame == "true" ? "0" : "1"
                }
            },
            aQ = function(bA) {
                var bz = am + "#" + m(bA.c),
                    bB = 0,
                    bC = bA.nis,
                    x = bC.length;
                for (; bB < x; bB++) {
                    bz += "&ni=" + V(bC[bB])
                }
                if (bA.pbv) {
                    bz += "&" + H(bA.pbv)
                }
                return bz
            },
            aF = (ag.setNetworkId || function(bA, bD, bz, bE, bH, bI, bJ, bB, bK) {
                var bG, bF, bC, x;
                bG = ap.tag || ap.tags[bA];
                bG.c.defdcpm = bJ;
                bG.c.oid = bB;
                if (!bK) {
                    bG.nis.push([bD, bz, bE, bH])
                }
                if (bG.fc) {
                    bC = bG.fr;
                    if (bC) {
                        bF = bC.contentWindow;
                        x = aQ(bG);
                        if (bF) {
                            bF.location.replace(x)
                        } else {
                            bC.src = x
                        }
                    } else {
                        setTimeout(function() {
                            aF.call(aL, bA, bD, bz, bE, bH, bI, bJ, bB, true)
                        }, 20)
                    }
                }
                if (ap.AHT == 0 && !bK) {
                    ba("onPubMaticAdInfoUpdated", bG.c)
                }
            }),
            aO = function() {
                var bA = this.plt,
                    bz = 0,
                    x;
                if (bA) {
                    x = bA.length;
                    for (; bz < x; bz++) {
                        bA[bz].apply(this)
                    }
                }
            },
            bm = function(x) {
                if (x && x.readyState != "complete") {
                    return
                }
                aO.call(this);
                ba("onPubMaticAdLoaded", this.c)
            },
            Z = ap.AdTag || (ap.AdTag = function(bC, bz, bF) {
                var bE = this,
                    bA, bD, x, bB;
                bE.fr = null;
                bE.fc = false;
                bE.c = bC;
                bE.df = O;
                bE.nis = [];
                bE.lastdefadnwkID = 0;
                bE.jsl = bm;
                if (!bz) {
                    bB = ap.tags;
                    bC.operId = bC.kadtype === 1 || bC.kadtype === 12 ? 3 : 1;
                    if (bC.kadtype === 12) {
                        bC.adtype = 12
                    }
                    bC.kadtype = C;
                    a9 && (bC.sec = 1);
                    I(bC);
                    bC.screenResolution = screen.width + "x" + screen.height;
                    bC.ranreq = Math.random();
                    x = bB.length;
                    bC.pmUniAdId = "" + x;
                    if (bB.length > 0) {
                        bA = [];
                        for (bD = 0; bD < x; bD++) {
                            bA.push(bB[bD].c.adId)
                        }
                        bC.prevkadIds = bA.slice(0, 10).join("_")
                    }
                    if (!bF) {
                        J(bC)
                    }
                    B(bC);
                    if (bC.operId === 3) {
                        bu(bE, bC, x)
                    }
                }
            }),
            aX = function() {
                var bO = aL.location.search.substr(1).split("&"),
                    bK = bO.length,
                    bF = {},
                    bL = {},
                    x = new Z(bF, true),
                    bA = 0,
                    bQ, bH, bC, bB, bD = [],
                    bP, bE, bN = 0,
                    bI = 0,
                    bJ, bz, bG;
                try {
                    document.domain = bf
                } catch (bM) {}
                for (; bA < bK; bA++) {
                    bC = bO[bA].split("=");
                    bQ = bC[0];
                    bH = bC[1];
                    if (!aB[bQ]) {
                        bF[bQ] = bH
                    } else {
                        if (bQ === "kadNetwork") {
                            bB = br(bH)
                        } else {
                            if (bQ === "defcmpgIDs") {
                                bD = bH ? bH.split(",") : []
                            } else {
                                if (bQ === "defecpm") {
                                    bP = parseFloat(bH)
                                } else {
                                    if (bQ === "defactecpm") {
                                        bE = parseFloat(bH)
                                    } else {
                                        if (bQ === "lastdefadnwkID") {
                                            bN = br(bH)
                                        } else {
                                            if (bQ === "defcount") {
                                                bI = br(bH)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (a4 && a4.length > 0) {
                    bO = a4.split("&");
                    bK = bO.length;
                    for (bA = 0; bA < bK; bA++) {
                        bC = bO[bA].split("=");
                        bL[bC[0]] = aE(bC[1])
                    }
                    x.pbv = bL
                }
                x.lastdefadnwkID = bN;
                bz = x.nis;
                for (bA = 0; bA < bI; bA++) {
                    bz.push([0, 0, 0, 0])
                }
                if (bI > 0) {
                    bK = bD.length;
                    if (bB === 243) {
                        bK -= 1
                    }
                    for (bA = 0; bA < bK; bA++) {
                        bz[bA][0] = 243;
                        bz[bA][1] = bD[bA]
                    }
                    bG = bz[bI - 1];
                    bG[0] = bB;
                    if (bB === 243 && bD.length > 0) {
                        bG[1] = br(bD[bD.length - 1]);
                        bG[2] = bP;
                        bG[3] = bE
                    }
                }
                x.c.operId = 3;
                ap.tag = x
            },
            aI = function(bE) {
                var bC, bF, x, bz, bD = true,
                    bB;
                if (bE != a2) {
                    bC = bE.parent;
                    bB = bx(bE) && bE.location.pathname === aZ && bE.PubMatic !== C ? bE : null;
                    if (!bB) {
                        try {
                            x = bC.length;
                            bz = x;
                            while (--bz >= 0) {
                                if (bD) {
                                    bD = bC[bz] != bE
                                } else {
                                    bF = bC[bz];
                                    if (bx(bF) && bF.location.pathname === M && bF.PubMatic && bF.PubMatic.AdInfo) {
                                        bB = bF;
                                        break
                                    }
                                }
                            }
                        } catch (bA) {
                            return
                        }
                    }
                    return bB || aI(bC)
                }
            },
            d = function(bC) {
                var bA = bC.childNodes,
                    x = bA.length,
                    bz = 0,
                    bB;
                for (; bz < x; bz++) {
                    bB = bA[bz];
                    if (bB.nodeType === 1 && bB.className != "PubAdAI") {
                        bB.style.display = "none"
                    }
                }
            },
            O = function(bM, bD) {
                var bI = this,
                    bJ = bI.c,
                    bH = {},
                    bG, bC = bI.nis,
                    bA = bC.length,
                    bz = bC[bA - 1],
                    bF = [],
                    bE, x, bN, bB, bL;
                bD = bD || 1;
                if (bJ.kadNetwork) {
                    delete bJ.kadNetwork
                }
                bH.kadNetwork = bz[0];
                if (bH.kadNetwork === 243) {
                    bH.defecpm = bz[2];
                    bH.defactecpm = bz[3]
                }
                bE = bI.lastdefadnwkID;
                for (bG = 0; bG < bA; bG++) {
                    bz = bC[bG];
                    if (bz[0] === 243) {
                        bF.push(bz[1])
                    } else {
                        bE = bz[0]
                    }
                }
                bH.lastdefadnwkID = bE || "0";
                bH.defcmpgIDs = bF.join();
                bH.defcount = bA;
                bJ.operId = bD >= 2 ? 1 : 3;
                bJ.SAVersion = "2";
                bJ.js = "1";
                bJ.kdntuid = "1";
                bJ.ranreq = Math.random();
                bJ.inIframe = aL != a2 ? "1" : "0";
                try {
                    if (bD == 1 && bM && document.body) {
                        d(document.body);
                        if (!bs.IE || (bs.IE && document.readyState == "loading")) {
                            bB = "PubMatic_" + Math.random();
                            z("<div id='" + bB + "' style='" + aT + "'></div>");
                            bN = document.getElementById(bB);
                            if (bN) {
                                bL = bN;
                                while (bL.parentNode && bL != document.body) {
                                    d(bL.parentNode);
                                    bL.style.display = "";
                                    bL = bL.parentNode
                                }
                                bN.parentNode.removeChild(bN)
                            }
                        }
                    }
                } catch (bK) {}
                x = bv + "?" + m(bH) + "&" + m(bJ);
                if (bI.pbv && bD > 1) {
                    x += "#" + H(bI.pbv)
                }
                if (bD === 2) {
                    P(x, "100%", "100%", "position:absolute;left:0px;top:0px;height:100%;width:100%;")
                } else {
                    if (bD === 3) {
                        k.replace(x)
                    } else {
                        bj(x)
                    }
                }
            },
            ae = function(bz) {
                var bB, bA, bC, bF, x, bE = false,
                    bG;
                if (ap.tags || ap.tag) {
                    x = ap.tags ? (bG = ap.tags, bG[bG.length - 1]) : ap.tag;
                    x.df(!bG);
                    bE = true
                } else {
                    if (!bs.IE6) {
                        bB = document.domain;
                        if (bB === aA) {
                            try {
                                document.domain = bf
                            } catch (bD) {}
                            bA = aI(aL);
                            if (bA) {
                                bC = bA.PubMatic;
                                if (bC.AdInfo) {
                                    bF = bC.r();
                                    if (bF) {
                                        O.call(bF, true, 3);
                                        bE = true
                                    }
                                } else {
                                    if (bC.tag) {
                                        bC.tag.df(true, 2);
                                        bE = true
                                    }
                                }
                            }
                        }
                        if (!bE && aL !== a2) {
                            P(am + "#LA" + (bz ? "&" + m(bz) : ""), "100%", "100%", "position:absolute;left:0px;top:0px;height:100%;width:100%;");
                            bE = true
                        }
                    }
                }
                return bE
            },
            v = {
                kadgender: "gender",
                kadage: "kadage",
                kadhints: "kadhints",
                kadkw: "keywords",
                kadupostalcode: "kadupcode",
                kadufirstname: "kadufname",
                kadcity: "city",
                kadfloor: "kadfloor",
                kadgcid: "kadgcid",
                kadgecpm: "kadgecpm",
                kadgid: "kadgid",
                kadgsiteid: "kadgsiteid",
                kadgsectionid: "kadgsectionid",
                kadgadid: "kadgadid",
                kadpubclkurl: "kadpubclkurl",
                kfnetworkid: "pmForceAdNetwork",
                kmaldebug: "md",
                kadcoppa: "coppa",
                kadtpcid: "kadtpcid",
                kGeoLatitude: {
                    n: "loc",
                    m: function(x, bz) {
                        var bA = bz.kGeoLongitude || aL.kGeoLongitude;
                        if (bz.kGeoLongitude) {
                            delete bz.kGeoLongitude
                        }
                        if (bz.kGeoLatitude) {
                            delete bz.kGeoLatitude
                        }
                        return bA != C ? x + "," + bA : false
                    }
                },
                kadloc: {
                    n: "loc",
                    m: g
                },
                pmzoneid: {
                    n: "pmZoneId",
                    m: function(x) {
                        var bz = typeof x;
                        aL.pmzoneid = C;
                        return bz === "number" ? x : bz === "string" ? x.split(",").slice(0, an).join() : x instanceof Array ? x.slice(0, an).join() : false
                    }
                },
                PubMaticAI: {
                    n: "noEnc",
                    m: function() {
                        return 1
                    }
                },
                kadbeacon: {
                    n: "kadbeacon",
                    m: g
                },
                kasdbeacon: {
                    n: "kadbeacon",
                    m: g
                },
                kadpageurl: {
                    n: "kadpageurl",
                    m: g
                },
                kaddefurl: {
                    n: "kaddefurl",
                    m: g
                },
                kadstate: {
                    n: "state",
                    m: g
                },
                kaddma: {
                    n: "dma",
                    m: g
                },
                kadzip: {
                    n: "zip",
                    m: g
                },
                kadyob: {
                    n: "yob",
                    m: g
                },
                kadnettype: {
                    n: "nettype",
                    m: g
                },
                kadcarrier: {
                    n: "carrier",
                    m: g
                },
                kadethnicity: {
                    n: "ethn",
                    m: g
                },
                kadincome: {
                    n: "inc",
                    m: g
                },
                kadcountry: {
                    n: "country",
                    m: g
                },
                kadudid: {
                    n: "udid",
                    m: g
                },
                kadudidtype: {
                    n: "udidtype",
                    m: g
                },
                kadappname: {
                    n: "name",
                    m: g
                },
                kadappstoreurl: {
                    n: "storeurl",
                    m: g
                },
                kadappapi: {
                    n: "api",
                    m: g
                },
                kadappbundle: {
                    n: "bundle",
                    m: g
                },
                kadapppaid: {
                    n: "paid",
                    m: g
                },
                kadappversion: {
                    n: "ver",
                    m: g
                },
                kadappid: {
                    n: "aid",
                    m: g
                },
                kadsitecode: {
                    n: "sitecode",
                    m: g
                },
                kadcat: {
                    n: "cat",
                    m: g
                },
                kadudidhash: {
                    n: "udidhash",
                    m: g
                },
                kadlocsource: {
                    n: "loc_source",
                    m: g
                },
                kadiabcat: {
                    n: "iabcat",
                    m: g
                },
                kadexpdir: {
                    n: "expdir",
                    m: g
                },
                kadbattr: {
                    n: "battr",
                    m: g
                },
                kadifb: {
                    n: "ifb",
                    m: g
                },
                kadblockdomainids: {
                    n: "blkdmns",
                    m: g
                },
                kadblockiabcats: {
                    n: "blkiabcats",
                    m: g
                },
                kadblockadvertiserids: {
                    n: "blkadvtids",
                    m: g
                },
                kadloccat: {
                    n: "loccat",
                    m: g
                },
                kadlocbrand: {
                    n: "locbrand",
                    m: g
                },
                kadblkadvdmns: {
                    n: "blkadvdmns",
                    m: g
                },
                kadpublisheruid: {
                    n: "pubUID",
                    m: g
                },
                kadfpvisitorseg: {
                    n: "fpVisSeg",
                    m: V
                },
                kadfpinvetoryseg: {
                    n: "fpInvSeg",
                    m: V
                },
                kadfpcookieseg: {
                    n: "fpCkSeg",
                    m: g
                },
                kadsh: {
                    n: "sh",
                    m: g
                },
                kaddctr: {
                    n: "dctr",
                    m: g
                },
                kadinstl: {
                    n: "instl",
                    m: g
                },
                kadpubuid: {
                    n: "puid",
                    m: g
                },
                kadmultisize: {
                    n: "multisize",
                    m: g
                },
                kadGdprConsent: {
                    n: "gdpr_consent",
                    m: function(bz, x) {
                        if (bz.indexOf("INSERT_USER_GDPR_CONSENT_STRING_DATA_FROM_CMP_HERE") !== -1) {
                            bz = ""
                        }
                        return g(bz)
                    }
                },
                kadeids: "eids"
            },
            G = function(x) {
                var bD = v,
                    bz, bC, bB, bA = {
                        kadgsiteid: "",
                        kadgsectionid: "",
                        kadgid: "",
                        kadgecpm: "",
                        kadgcid: "",
                        kadgadid: "",
                        kadfloor: ""
                    };
                for (bz in bD) {
                    if (bD.hasOwnProperty(bz)) {
                        bC = aL[bz];
                        if (bC) {
                            bB = bD[bz];
                            if (typeof bB === "object") {
                                bC = bB.m(bC, x);
                                bz = bB.n
                            } else {
                                bz = bD[bz]
                            }
                            if (bC) {
                                if (bz == "gender") {
                                    x.kadgender = bC;
                                    x.kadgdr = bC
                                }
                                x[bz] = bC
                            }
                            if (bA.hasOwnProperty(bz)) {
                                aL[bz] = null
                            }
                        }
                    }
                }
            },
            af, aU, K, bx = function(x) {
                var bz = false;
                try {
                    bz = x && !!x.document
                } catch (bA) {}
                return bz
            },
            e = function(x) {
                return {
                    w: x.innerWidth || x.document.documentElement.clientWidth || x.document.body.clientWidth,
                    h: x.innerHeight || x.document.documentElement.clientHeight || x.document.body.clientHeight,
                    st: x.document.body.scrollTop,
                    sl: x.document.body.scrollLeft
                }
            },
            N = function(x, bA) {
                var bG, bD, bF, bE, bH, bz, bC, bB;
                if (x && x.frameElement) {
                    if (!bA) {
                        bA = e(x)
                    }
                    bG = f(x.frameElement);
                    if (bG) {
                        bC = bG.x;
                        bB = bG.y;
                        bD = x.parent;
                        bE = e(bD);
                        if (x !== bD && bD !== a2) {
                            if (bx(bD)) {
                                bF = N(bD, bE);
                                if (bF != null) {
                                    bG.x += bF.x;
                                    bG.y += bF.y;
                                    bA.h = bF.h;
                                    bA.w = bF.w
                                } else {
                                    bG = null
                                }
                            } else {
                                bG = null
                            }
                        }
                        if (bE.st > bB) {
                            bH = bA.h + bB - bE.st
                        } else {
                            bH = bA.h
                        }
                        if ((bE.st + bE.h) < (bB + bA.h)) {
                            bH -= (bB + bA.h) - (bE.st + bE.h)
                        }
                        if (bE.sl > bC) {
                            bz = bA.w + bC - bE.sl
                        } else {
                            bz = bA.w
                        }
                        if ((bE.sl + bE.w) < (bC + bA.w)) {
                            bz -= (bC + bA.w) - (bE.sl + bE.w)
                        }
                        bG.h = bH;
                        bG.w = bz
                    }
                }
                return bG
            },
            f = function(bA) {
                var bD, bB, bz = 0,
                    bC = 0;
                if (typeof bA.getBoundingClientRect === "function") {
                    bB = bA.getBoundingClientRect();
                    bz = Math.floor(bB.left);
                    bC = Math.floor(bB.top)
                } else {
                    while (bA) {
                        bz += bA.offsetLeft;
                        bC += bA.offsetTop;
                        bA = bA.offsetParent
                    }
                }
                bD = {
                    x: bz,
                    y: bC
                };
                return bD
            },
            U = function(bB, bL, bG) {
                var bK = f(bB),
                    bA = e(aL),
                    bC = bK.y,
                    bF = bK.x,
                    x = null,
                    bM, bI;
                if (aL != a2) {
                    bM = aL.parent;
                    if (bx(bM)) {
                        bI = N(aL, bA);
                        if (bI != null) {
                            bK.x += bI.x;
                            bK.y += bI.y;
                            bA.h = bI.h;
                            bA.w = bI.w
                        } else {
                            x = -1
                        }
                    } else {
                        x = -1
                    }
                }
                if (x === null) {
                    var bz = bA.st,
                        bE = bA.sl,
                        bD = bA.h,
                        bH = bA.w;
                    bK.v = (((bC + bL) <= bz) || ((bF + bG) <= bE) || (bC >= (bz + bD)) || (bF >= (bE + bH))) ? "2" : ((bC >= bz) && (bF >= bE) && ((bF + bG) <= (bE + bH)) && ((bC + bL) <= (bz + bD))) ? "1" : "3"
                } else {
                    bK = null
                }
                try {
                    if (typeof $sf != "undefined" && typeof $sf.ext != "undefined") {
                        bK = {
                            x: "-1",
                            y: "-1",
                            v: "0"
                        };
                        bI = $sf.ext.inViewPercentage();
                        if (bI) {
                            bK.v = bI >= 50 ? "1" : "2"
                        }
                        bI = $sf.ext.geom();
                        if (bI && bI.self) {
                            bK.y = bI.self.t;
                            bK.x = bI.self.l
                        }
                    }
                } catch (bJ) {}
                if (window.pubId == 84047 || window.pubId == 83902 || window.pubId == 83894) {
                    bK = {
                        x: "-1",
                        y: "-1",
                        v: "0"
                    };
                    if (bL == 90 && bG == 728) {
                        bK.v = "1";
                        bK.y = "752.543";
                        bK.x = "524.334"
                    } else {
                        if (bL == 250 && bG == 300) {
                            bK.v = "1";
                            bK.y = "253.543";
                            bK.x = "604.457"
                        }
                    }
                }
                return bK
            },
            J = function(x) {
                var bA = "PubMatic_" + Math.random(),
                    bz, bC;
                try {
                    z('<span  id="' + bA + '"></span>');
                    bz = document.getElementById(bA);
                    bC = U(bz, x.kadheight, x.kadwidth);
                    x.adVisibility = bC ? bC.v : "0";
                    x.adPosition = bC ? bC.y + "x" + bC.x : "-1x-1"
                } catch (bB) {}
                if (bz && bz.parentNode) {
                    bz.parentNode.removeChild(bz)
                }
            },
            B = function(x) {
                x.rmp = "";
                if (aL["$sf"] !== C && aL["$sf"] != null) {
                    x.rmp += "safeframe;"
                }
            },
            bu = function(bz, x, bC) {
                var bB, bA = aL.kAdTimeout;
                if (bA) {
                    bA = br(bA);
                    bz.to = bB = {
                        t: aL.kAdTimeoutId || bC,
                        l: false,
                        s: aL.kSuccessCallBack || null,
                        f: aL.kFailCallBack || null,
                        o: false,
                        i: setTimeout(function() {
                            bB.o = true
                        }, bA)
                    };
                    if (!ap.checkTimeout) {
                        ap.checkTimeout = function(bF, bD) {
                            var bE = ap.tags[bF].to;
                            if (bE) {
                                bE.l = true;
                                clearTimeout(bE.i);
                                if (bE.o || !bD) {
                                    bE.f && bE.f.call(aL, bE.t)
                                } else {
                                    bE.s && bE.s.call(aL, bE.t)
                                }
                            }
                            return bD
                        }
                    }
                    x.tOut = 1;
                    x.adIndx = "" + bC;
                    bz.plt = [function() {
                        if (!bz.to.l) {
                            ap.checkTimeout(bC, false)
                        }
                    }];
                    aL.kAdTimeout = null;
                    aL.kFailCallBack = null;
                    aL.kSuccessCallBack = null;
                    aL.kAdTimeoutId = null
                }
            },
            aG, az, aK = escape,
            ad = unescape,
            p = null,
            ai = 0,
            aM = 0,
            c = 0,
            aD = function() {
                if (p == null) {
                    var bB = a4.split("&"),
                        x = bB.length,
                        bz = 0,
                        bA;
                    p = {};
                    for (; bz < x; bz++) {
                        bA = bB[bz].split("=");
                        p[bA[0]] = bA[1]
                    }
                }
            },
            aC = function() {
                var bB, bA, bD = {},
                    bz = false,
                    bC, bE = [],
                    x;
                if (aL.kpassbackpars) {
                    bC = aL.kpassbackpars;
                    x = bC.length;
                    for (bA = 0; bA < x && bC[bA]; bA++) {
                        bB = bC[bA];
                        if (aL[bB] && aL[bB] != C) {
                            bz = true;
                            bE.push(bB);
                            bD[bB] = aL[bB]
                        }
                    }
                    bD.kpassbackpars = bE.join(",")
                }
                return bz ? bD : null
            },
            w = function(bM, bA) {
                var bH = e(aL),
                    bG = aL,
                    bK, bz, bJ, bF, bE = false,
                    bD = 0,
                    bL, x, bN, bC, bB;
                bM.winW = (bH.w < screen.width) ? bH.w : screen.width;
                bM.winH = (bH.h < screen.height) ? bH.h : screen.height;
                while (bG != a2) {
                    bK = bG.parent;
                    bJ = false;
                    try {
                        bL = bK.location.href;
                        bJ = true;
                        if (!bE) {
                            bF = bK
                        }
                        bM.depth = 0
                    } catch (bI) {}
                    if (!bJ) {
                        bD++;
                        bE = true;
                        bz = bG
                    }
                    if (bD >= 2) {
                        bM.depth = 2;
                        break
                    }
                    bG = bK
                }
                if (!bF) {
                    bF = aL
                }
                bN = (bD == 1) ? bz : (bD == 0) ? a2 : bF;
                bM.winURL = (bM.pageURL) ? bM.pageURL : encodeURI(bN.location.href);
                bM.refURL = (bM.refurl) ? bM.refurl : encodeURI(bN.document.referrer);
                if (bD == 1) {
                    try {
                        x = e(bN);
                        bM.winW = (br(bH.w) > br(x.w)) ? x.w : bH.w;
                        bM.winH = (br(bH.h) > br(x.h)) ? x.h : bH.h
                    } catch (bI) {}
                    bM.depth = 1
                } else {
                    if (bD == 0) {
                        bM.depth = 0
                    }
                }
                if (bA) {
                    bC = document.getElementById(bA);
                    bM.plyW = bC.offsetWidth || -1;
                    bM.plyH = bC.offsetHeight || -1;
                    if (bM.plyH != -1 && bM.plyW != -1) {
                        try {
                            bB = f(bC);
                            bM.plocx = bB.x;
                            bM.plocy = bB.y;
                            bM.pos = U(bC, bM.plyH, bM.plyW).v
                        } catch (bI) {}
                    }
                }
                return bM
            };
        ap._uidCB = function(x) {
            ap.pm_uid_bc = x.u;
            if (aL.location.href.indexOf("#PIX") > 0) {
                a0()
            }
        };
        ap.getPBValue = function(bz) {
            var x, bB = "";
            try {
                x = ap.tag || ap.tags[ap.tags.length - 1];
                if (x.pbv && x.pbv.hasOwnProperty(bz)) {
                    bB = x.pbv[bz]
                }
            } catch (bA) {}
            return bB
        };
        ap.SAVersion = "2";
        if (!ag.setNetworkId) {
            ag.setNetworkId = aF
        }
        aB.ranreq = aB.ranreq1 = aB.kadNetwork = aB.operId = aB.defcmpgIDs = aB.defecpm = aB.defactecpm = aB.lastdefadnwkID = aB.defcount = true;
        ap.AHT = aL.PubMatic_AHT || 0;
        aL.PubMatic_AHT = C;
        ap.ifl = ap.ifl || (ap.ifl = function(bz, x) {
            ap.tags[x].fr = bz
        });
        ap.Native = ap.Native || {
            info: {},
            setInfo: function(bz, x) {
                if (ap.Native.info) {
                    ap.Native.info[bz] = x
                }
            },
            execCTR: function(bC) {
                var x, bB = [],
                    bA = 0,
                    bz = 0;
                if (ap.Native.info && ap.Native.info.hasOwnProperty(bC)) {
                    x = ap.Native.info[bC];
                    if (x.hasOwnProperty("ctrs")) {
                        bB = ap.Native.info[bC]["ctrs"];
                        bA = bB.length;
                        for (bz = 0; bz < bA; bz++) {
                            (new Image()).src = bB[bz]
                        }
                        if (x.hasOwnProperty("ectr") && x.ectr == false) {
                            x.ctrs = []
                        }
                    }
                }
            }
        };
        ap.sendParamToVPAID = ap.sendParamToVPAID || function(bA) {
            var bB = {};
            a3(bB);
            G(bB);
            if (bB.pageURL) {
                bB.pageURL = encodeURI(bB.pageURL)
            }
            if (bB.refurl) {
                bB.refURL = encodeURI(bB.refurl)
            }
            I(bB);
            bB.screenResolution = screen.width + "x" + screen.height;
            bB.ranreq = Math.random();
            bB.sec = a9;
            bB.protocol = ar;
            bB = w(bB, bA.playerDomId);
            aV(bA.pubId);
            var bz = W(bA.pubId);
            bB.gdpr_consent = bz && bz.c ? bz.c : "";
            bB.gdpr = bB.gdpr_consent ? 1 : (a || 0);
            aq(bB);
            try {
                if (bA.playerDomId) {
                    document.getElementById(bA.playerDomId).getDataFromJS(m(bB))
                }
            } catch (x) {}
            return bB
        };
        ap.showAd = ap.showAd || function(bC, x, bE) {
            var bD, bB, bA = 1500,
                bz;
            if (bC.siteId == 72184) {
                bC.kadpageurl = ""
            }
            if (ap.tag) {
                delete ap.tag
            }
            bz = ap.tags || (ap.tags = []);
            bD = new Z(bC, false, bE);
            bD.pbv = aC();
            bz.push(bD);
            bC.pm_uid_bc = ap.pm_uid_bc;
            bC.gdpr = "" + a;
            var bF = W(bC.pubId);
            bC.gdpr_consent = bF && bF.c ? bF.c : bC.gdpr_consent;
            if (bC.gdpr_consent) {
                bC.gdpr = 1
            }
            aq(bC);
            (function() {
                try {
                    bC.dspids = JSON.stringify(aL.parent.pmDspId || {})
                } catch (bG) {}
            })();
            a7 = bv + "?" + m(bC);
            if (bs.IE && a7.length > bA) {
                if (bC.refurl) {
                    bB = bC.refurl;
                    bC.refurl = bB.substr(0, (bB.length - (a7.length - bA)));
                    a7 = bv + "?" + m(bC)
                }
                if (a7.length > bA) {
                    bB = bC.pageURL;
                    bC.pageURL = bB.substr(0, (bB.length - (a7.length - bA)));
                    a7 = bv + "?" + m(bC)
                }
            }
            x && (a7 += "&oldDefTag=1&noInfo=1");
            if (!bE) {
                if (bz.length === 1 && !x) {
                    bB = am + "#PIX&p=" + bC.pubId + "&s=" + bC.siteId + "&a=" + bC.adId + "&it=" + bs.it;
                    if (bC.kdntuid) {
                        bB += "&kdntuid=" + bC.kdntuid
                    }
                    if (bC.coppa) {
                        bB += "&coppa=1"
                    }
                    if (aY) {
                        bB += "&bce=1"
                    }
                    bB += "&gdpr=" + bC.gdpr;
                    bB += "&gdpr_consent=" + (bC.gdpr_consent || "");
                    P(bB, 0, 0, aT, null, null, null, true, !!bE)
                }
                if (bC.operId === 3) {
                    if (!bs.IE6) {
                        P(am, 0, 0, aT, null, null, "PubMatic.ifl(this," + bC.pmUniAdId + ")", true);
                        bD.fc = true
                    }
                    bj(a7, bC.pmUniAdId)
                } else {
                    if (bD.pbv) {
                        a7 += "#" + H(bD.pbv)
                    }
                    P(a7, bC.kadheight, bC.kadwidth, "height:" + bC.kadheight + "px;width:" + bC.kadwidth + "px;", null, null, null, true)
                }
                bd({
                    p: bC.pubId,
                    s: bC.siteId,
                    gdpr: bC.gdpr,
                    gdpr_consent: bC.gdpr_consent
                }, "showad.js")
            }
        };
        if (k.host === aA && k.pathname === M) {
            if (a4.indexOf("PMFRAME=1") === 0) {
                aD();
                delete p.PMFRAME;
                a7 = am + "#PIX&p=" + p.pubId + "&s=" + p.siteId + "&a=" + p.adId + "&it=" + p.it;
                if (p.kdntuid) {
                    a7 += "&kdntuid=" + p.kdntuid
                }
                if (p.coppa) {
                    a7 += "&coppa=1"
                }
                if (p.bce == 1) {
                    a7 += "&bce=1"
                }
                a7 += "&gdpr=" + (p.gdpr || "0");
                a7 += "&gdpr_consent=" + (p.gdpr_consent || "");
                P(a7, 0, 0, aT);
                p.operId = 1;
                a7 = bv + "?" + m(p);
                P(a7, p.kadheight, p.kadwidth, "height:" + p.kadheight + "px;width:" + p.kadwidth + "px;")
            } else {
                if (a4.indexOf("LA") === 0) {
                    try {
                        document.domain = bf
                    } catch (bw) {}
                    af = aI(aL.parent);
                    if (af) {
                        aU = af.PubMatic;
                        if (aU.AdInfo) {
                            K = function() {
                                var x;
                                x = aU.r();
                                if (x) {
                                    x.c.operId = 1;
                                    O.call(x, true, 3)
                                } else {
                                    setTimeout(K, 10)
                                }
                            };
                            K()
                        } else {
                            aU.tag.df(true, 2)
                        }
                    } else {
                        aD();
                        delete p.LA;
                        if (p.pubId && p.siteId && p.adId && p.kadheight && p.kadwidth) {
                            ap.showAd(p, true)
                        }
                    }
                } else {
                    if (a4.indexOf("PIX") === 0) {
                        var al = false,
                            ab = "ALL",
                            bn = "KTPCACOOKIE",
                            by = "KADUSERCOOKIE",
                            aw = "KCCH",
                            aH = "DPSync2",
                            ac = "PUBMDCID",
                            T = "USCC",
                            i = "SyncRTB2",
                            av = "PMFREQ_ON",
                            aP = "pmoo",
                            aN = "optout",
                            bh = "pi",
                            ay = "repi",
                            aJ = "pubsyncexp",
                            aa = function() {
                                var bD = "",
                                    bC, x, bA = 0,
                                    bz;
                                try {
                                    bD = document.cookie
                                } catch (bB) {}
                                if (aG != bD) {
                                    bC = bD.split("; ");
                                    x = bC.length;
                                    az = [];
                                    for (; bA < x; bA++) {
                                        bz = bC[bA].split("=");
                                        az[bz[0]] = bz[1]
                                    }
                                    aG = bD
                                }
                            },
                            s = function(x) {
                                aa();
                                return az[x]
                            },
                            F = function(bz, bB) {
                                var bA, bC, x;
                                aa();
                                !bB && (x = []);
                                for (bA in az) {
                                    if (az.hasOwnProperty(bA)) {
                                        if (bA.indexOf(bz) >= 0) {
                                            bC = {
                                                n: bA,
                                                v: (az[bA] || "")
                                            };
                                            if (bB) {
                                                x = bC;
                                                break
                                            } else {
                                                x.push(bC)
                                            }
                                        }
                                    }
                                }
                                return x
                            },
                            bb = function(bz, bF, bG, bH, bB, x) {
                                var bA, bE, bC = function() {
                                    var bJ = "Chrome/",
                                        bI = bJ.length;
                                    ua = navigator.userAgent, chromePatternIndex = ua.indexOf(bJ), chromeVersion = 0;
                                    if (chromePatternIndex > -1) {
                                        chromeVersion = br(ua.substr(chromePatternIndex + bI, 3));
                                        if (chromeVersion >= 67) {
                                            return true
                                        }
                                    }
                                    return false
                                };
                                bA = new Date(new Date().getTime() + bG * 86400000);
                                bE = bz + "=" + bF + ";expires=" + bA.toGMTString() + ";path=" + bH + ";domain=" + bB;
                                if (x) {
                                    bE += ";secure"
                                }
                                if (bC()) {
                                    bE += ";SameSite=None"
                                }
                                try {
                                    document.cookie = bE
                                } catch (bD) {}
                            },
                            bg = function(x, bB, bA) {
                                try {
                                    document.cookie = x + "=;expires=Thu, 01-Jan-1970 00:00:01 GMT;path=" + bB + ";domain=" + bA
                                } catch (bz) {}
                            },
                            Y = function(bz, x, bA) {
                                if (bz.addEventListener) {
                                    bz.addEventListener(x, bA)
                                } else {
                                    if (bz.attachEvent) {
                                        bz.attachEvent("on" + x, bA)
                                    } else {
                                        bz["on" + x] = bA
                                    }
                                }
                            },
                            S = function() {
                                var bz, x = ah();
                                if (x == true) {
                                    bg(by, "/", bf);
                                    bg(aw, "/", aA);
                                    bg(aH, "/", aA);
                                    bg(i, "/", aA);
                                    bg(ac, "/", bf);
                                    bg(T, "/", bf);
                                    bg(bh, "/", bf);
                                    bg(ay, "/", aA)
                                }
                                if (!al) {
                                    al = true;
                                    bg(aw, "/", aA);
                                    bg(bh, "/", bf);
                                    if (ab === "ALL") {
                                        bz = s(av);
                                        if (!(bz && bz != "") && x == false) {
                                            bb(av, "YES", 1, "/", aA);
                                            bq();
                                            bg(av, "/", aA);
                                            au()
                                        }
                                    }
                                }
                            },
                            r = function() {
                                var bA = br(p.p || 0),
                                    bz = ad(s(i) || ""),
                                    x = 1;
                                x = s(ay) == 1 ? 4 : bz == "" ? p.fp != 1 ? 2 : 5 : p.fp != 1 ? 3 : 6;
                                bb(bh, (bA == 0 ? 2 : bA) + ":" + x, 1, "/", bf);
                                bg(ay, "/", aA)
                            },
                            E = function(bA) {
                                var x = "image4.pubmatic.com/AdServer/SPug?partnerID=",
                                    bz;
                                if (s(bn) === "YES") {
                                    bz = ar + (a9 ? "s" : "") + x + bA;
                                    bz = bz + "&gdpr=" + p.gdpr;
                                    bz = bz + "&gdpr_consent=" + p.gdpr_consent;
                                    setTimeout(function() {
                                        var bC = s(by),
                                            bB;
                                        if (bC && bC != "") {
                                            bB = document.createElement("script");
                                            bB.src = bz;
                                            document.getElementsByTagName("script")[0].parentNode.appendChild(bB)
                                        }
                                        au()
                                    }, 2000)
                                }
                            },
                            bq = function() {
                                var bI = 0,
                                    bM, bF = [],
                                    bz = [],
                                    bH, bG, bB, bA, bK, x, bJ, bE, bL, bD = function(bN, bZ) {
                                        var bX, bU, bR, bW, bV, bS, bQ, b0, bY, bO, bP, bT;
                                        bN = bN.substr(bN.indexOf("camfreq") + 7);
                                        bX = bN.indexOf("_") < 0;
                                        bU = bZ.split(":");
                                        bR = bU.length;
                                        bQ = [];
                                        b0 = 0;
                                        for (bW = 0; bW < bR; bW++) {
                                            bV = bU[bW].split("-");
                                            if (bV.length === 2) {
                                                bS = bV[1].split("_");
                                                if (bS.length === 2) {
                                                    if (bX && bI > 0) {
                                                        if (bI <= br(bS[1])) {
                                                            bQ[b0++] = [br(bV[0]), br(bS[0]), br(bS[1])]
                                                        }
                                                    } else {
                                                        bQ[b0++] = [br(bV[0]), br(bS[0]), br(bS[1])]
                                                    }
                                                } else {
                                                    bQ[b0++] = [br(bV[0]), br(bV[1]), 0]
                                                }
                                            }
                                        }
                                        if (b0 > 0) {
                                            for (bW = 0; bW < b0; bW++) {
                                                bO = bQ[bW];
                                                bY = bO[2];
                                                bR = bF.length;
                                                bP = false;
                                                for (bT = 0; bT < bR; bT++) {
                                                    if (bF[bT][0] === bO[0]) {
                                                        bP = true;
                                                        bF[bT][1] = bF[bT][1] + bO[1];
                                                        if (bY > bF[bT][2]) {
                                                            bF[bT][2] = bY
                                                        }
                                                    }
                                                }
                                                if (!bP) {
                                                    bF[bR] = bO
                                                }
                                            }
                                        }
                                    },
                                    bC = function(bN, b0) {
                                        var bV, bQ, bX, bW, bR, b1, bO, bP, bU, bZ, bT = -1,
                                            bS, bY;
                                        bZ = bN = bN.substr(bN.indexOf("pubfreq_") + 8);
                                        bX = bN.indexOf("_");
                                        if (bX >= 0) {
                                            bZ = bN.substring(0, bX)
                                        }
                                        bZ = br(bZ);
                                        bV = b0.split(":");
                                        bQ = bV.length;
                                        bR = [];
                                        for (bX = 0; bX < bQ; bX++) {
                                            bW = bV[bX].split("-");
                                            if (bW.length === 2) {
                                                bR[bX] = [br(bW[0]), br(bW[1])]
                                            } else {
                                                break
                                            }
                                        }
                                        bS = bz.length;
                                        for (bX = 0; bX < bS; bX++) {
                                            if (bz[bX][0] === bZ) {
                                                bT = bX;
                                                break
                                            }
                                        }
                                        b1 = bR.length;
                                        if (b1 > 0) {
                                            if (bT < 0) {
                                                bz[bS] = [bZ, bR]
                                            } else {
                                                bY = bz[bT][1];
                                                for (bX = 0; bX < b1; bX++) {
                                                    bO = bR[bX];
                                                    bQ = bY.length;
                                                    bP = false;
                                                    for (bU = 0; bU < bQ; bU++) {
                                                        if (bY[bU][0] === bO[0]) {
                                                            bY[bU][1] = bY[bU][1] + bO[1];
                                                            bP = true;
                                                            break
                                                        }
                                                    }
                                                    if (!bP) {
                                                        bY[bQ] = bO
                                                    }
                                                }
                                            }
                                        }
                                    };
                                aa();
                                bB = F("_curtime", true);
                                bB && (bI = br(bB.v));
                                bM = F("camfreq");
                                bH = bM.length;
                                for (bG = 0; bG < bH; bG++) {
                                    bB = bM[bG];
                                    bD(bB.n, bB.v);
                                    bg(bB.n, "/", bf)
                                }
                                bH = bF.length;
                                bA = [];
                                for (bG = 0; bG < bH; bG++) {
                                    bK = bF[bG];
                                    bA.push(bK[0] + "-" + bK[1] + "_" + bK[2])
                                }
                                if (bA.length > 0) {
                                    bb("camfreq", bA.join(":"), 4, "/", bf)
                                }
                                bM = F("pubfreq_");
                                bH = bM.length;
                                for (bG = 0; bG < bH; bG++) {
                                    bB = bM[bG];
                                    bC(bB.n, bB.v);
                                    bg(bB.n, "/", bf)
                                }
                                bH = bz.length;
                                for (bG = 0; bG < bH; bG++) {
                                    bK = bz[bG];
                                    x = bK[1];
                                    bJ = bK[0];
                                    bA = [];
                                    bL = x.length;
                                    for (bE = 0; bE < bL; bE++) {
                                        bK = x[bE];
                                        bA.push(bK[0] + "-" + bK[1])
                                    }
                                    if (bA.length > 0) {
                                        bb("pubfreq_" + bJ, bA.join(":"), 4, "/", bf)
                                    }
                                }
                            },
                            au = function() {
                                var bB = function() {
                                    var bE = "Chrome/",
                                        bD = bE.length;
                                    ua = navigator.userAgent, chromePatternIndex = ua.indexOf(bE), chromeVersion = 0;
                                    if (chromePatternIndex > -1) {
                                        chromeVersion = br(ua.substr(chromePatternIndex + bD, 3));
                                        if (chromeVersion >= 67) {
                                            return true
                                        }
                                    }
                                    return false
                                };
                                if (bB() == false) {
                                    return
                                }
                                aa();
                                var bC = F("KRTBC");
                                var bA;
                                for (var bz = 0, x = bC.length; bz < x; bz++) {
                                    bA = bC[bz];
                                    bb(bA.n, bA.v, 30, "/", bf)
                                }
                            },
                            a0 = function(bD) {
                                var x = p.predirect,
                                    bA = p.userIdMacro,
                                    bC, bz = ar + (a9 ? "s" : "") + "image4.pubmatic.com/AdServer/SPug?o=1";
                                if (s(bn) === "YES") {
                                    if (x) {
                                        try {
                                            x = aE(x)
                                        } catch (bB) {}
                                        bC = s(by);
                                        if (bC) {
                                            if (bA && x.indexOf(bA)) {
                                                x = x.replace(bA, bC)
                                            } else {
                                                x = x + bC
                                            }
                                            if (bD == true) {
                                                P(x, 0, 0, aT, null, null, null, false, true)
                                            } else {
                                                P(x, 0, 0, aT)
                                            }
                                        } else {
                                            setTimeout(function() {
                                                a0()
                                            }, 1500)
                                        }
                                    }
                                } else {
                                    if (p.p && p.fp && p.rs && p.u) {
                                        bz += "&" + a4;
                                        P(bz, 0, 0, "height:0px;width:0px;display:none;")
                                    } else {
                                        if (aY && ap.pm_uid_bc) {
                                            P(bz + (p.p ? "&p=" + p.p : "") + (p.s ? "&s=" + p.s : "") + (p.coppa ? "&cp=" + p.coppa : "") + (a9 ? "&sc=1" : "") + (x ? "&pr=" + x : "") + (bA ? "&umc=" + bA : "") + "&u=" + ap.pm_uid_bc + "&rs=3&gdpr=" + p.gdpr + "&gdpr_consent=" + p.gdpr_consent, 0, 0, "height:0px;width:0px;display:none;")
                                        }
                                    }
                                }
                            },
                            a8 = function() {
                                if (!bs.IE && q.userAgent.indexOf("rv:11") == -1 && q.userAgent.indexOf("Edge") == -1) {
                                    bb(ay, 1, 1, "/", aA);
                                    k.reload()
                                }
                            },
                            ah = function() {
                                var bz, x;
                                bz = s(aP);
                                x = s(aN);
                                if (bz !== "true" && bz !== "TRUE" && x !== "true" && x !== "TRUE") {
                                    return false
                                }
                                return true
                            },
                            aR = true;
                        aD();
                        ai = br(p.p || 0);
                        aM = br(p.s || 0);
                        c = br(p.a || 0);
                        aY = br(p.bce || 0);
                        aV(ai);
                        var at = W(ai);
                        p.gdpr_consent = at && at.c ? at.c : (p.gdpr_consent || "");
                        p.gdpr = p.gdpr_consent ? 1 : (p.gdpr || "0");
                        if (p.gdpr == 1) {
                            aY = false
                        }
                        if (ai == 0) {
                            ai = br(s("pp")) || 0
                        }
                        ab = p.ptask || "ALL";
                        bb(bn, "YES", 90, "/", bf);
                        if (s(bn) === "YES" && ah() == false) {
                            if (aR) {
                                ap.PugMasterCallback = function(bz, x, bA) {
                                    setTimeout(function() {
                                        bg(aw, "/", aA)
                                    }, 2000);
                                    if (bz || (!p.SPug && Math.floor(Math.random() * 100) <= 10)) {
                                        E(ai)
                                    }
                                    if (x) {
                                        setTimeout(function() {
                                            a8()
                                        }, 30000)
                                    }
                                    if (bA) {
                                        bb(aJ, (new Date()).getTime() + (60 * 60 * 6 * 1000), 1, "/", aA)
                                    }
                                    a0()
                                };
                                (function() {
                                    var x = "image6.pubmatic.com/AdServer/PugMaster?kdntuid=1&rnd=" + Math.floor(Math.random() * 100000001);
                                    x += "&p=" + ai + "&s=" + aM + "&a=" + c + "&ptask=" + ab + "&np=" + (p.np || "0") + "&fp=" + (p.fp || "0") + "&mpc=" + (p.mpc || "0") + "&spug=1&coppa=" + (p.coppa || "0") + "&gdpr=" + p.gdpr + "&gdpr_consent=" + p.gdpr_consent;
                                    if (a9) {
                                        x += "&sec=1"
                                    }
                                    if ((s(aJ) || 0) <= (new Date()).getTime()) {
                                        if (!s(aw)) {
                                            bb(aw, "YES", 1, "/", aA);
                                            setTimeout(function() {
                                                bg(aw, "/", aA)
                                            }, 3000);
                                            r();
                                            z(a6 + ar + x + '"><\/script>')
                                        } else {
                                            setTimeout(function() {
                                                a8()
                                            }, 3000)
                                        }
                                    } else {
                                        a0()
                                    }
                                })()
                            }
                        } else {
                            if (aY) {
                                (function() {
                                    var bz = document.createElement("script"),
                                        x = document.getElementsByTagName("script")[0];
                                    bz.type = "text/javascript";
                                    bz.async = true;
                                    bz.src = ar + "image6.pubmatic.com/AdServer/UCookieSetPug?oid=2&cb=PubMatic._uidCB";
                                    x.parentNode.insertBefore(bz, x)
                                })()
                            } else {
                                a0()
                            }
                        }
                        Y(aL, "unload", S);
                        Y(aL, "beforeunload", S)
                    } else {
                        try {
                            document.domain = bf
                        } catch (bw) {}
                        aS = {};
                        ap.r = function() {
                            var x = aL.location.href,
                                bF = x.indexOf("#") > -1 ? x.substr(x.indexOf("#") + 1) : "",
                                bB = bF.split("&"),
                                bJ = bB.length,
                                bG, bI = 0,
                                bz, bL, bD, bE = {},
                                bA = {},
                                bC = [],
                                bK = null,
                                bH = aS;
                            for (; bI < bJ; bI++) {
                                bD = bB[bI].split("=");
                                bz = bD[0];
                                bL = aE(bD[1]) || "";
                                if (bz === "ni") {
                                    bL = bL.split(",");
                                    bC.push([br(bL[0]), br(bL[1]), parseFloat(bL[2]), parseFloat(bL[3])])
                                } else {
                                    bE[bz] = bL
                                }
                            }
                            if (bE.kpassbackpars) {
                                bG = bE.kpassbackpars.split(",");
                                delete bE.kpassbackpars;
                                bJ = bG.length;
                                for (bI = 0; bI < bJ; bI++) {
                                    bz = bG[bI];
                                    if (bE.hasOwnProperty(bz)) {
                                        bA[bz] = bE[bz];
                                        delete bE[bz]
                                    }
                                }
                                bA.kpassbackpars = bG.join(",");
                                bH.pbv = bA
                            }
                            bH.c = bE;
                            bH.nis = bC;
                            if (bC.length > 0) {
                                bK = bH
                            }
                            return bK
                        };
                        ap.AdInfo = aS
                    }
                }
            }
        } else {
            if (ap.AHT === 2) {
                ae()
            } else {
                if (ap.AHT === 1) {
                    aX()
                } else {
                    if (window.pubId && aY && !ap.hasOwnProperty("pm_uid_bc")) {
                        ap.pm_uid_bc = "";
                        bj(ar + "image6.pubmatic.com/AdServer/UCookieSetPug?oid=2&cb=PubMatic._uidCB");
                        bj(ar + "ads.pubmatic.com/AdServer/js/showad.js")
                    } else {
                        a1 = aW();
                        if (a1.pubId && a1.siteId && a1.adId && a1.kadheight && a1.kadwidth) {
                            aV(a1.pubId);
                            a1.SAVersion = "2";
                            a1.js = "1";
                            a1.kdntuid = "1";
                            a3(a1);
                            G(a1);
                            if (aL.pmAsyncEnabled && aL.kadasync != false) {
                                (function() {
                                    var x = "PubMatic_Async_" + Math.random(),
                                        bA = false,
                                        bz = function() {
                                            if (bA) {
                                                return
                                            }
                                            bA = true;
                                            var bE = document.getElementById(x),
                                                bC, bB;
                                            if (bE) {
                                                bC = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head>';
                                                bC += "<body>";
                                                bC += "<script>";
                                                bC += "var pubId = " + a1.pubId + ";";
                                                bC += "var siteId = " + a1.siteId + ";";
                                                bC += "var kadId = " + a1.adId + ";";
                                                bC += "var kadwidth = " + a1.kadwidth + ";";
                                                bC += "var kadheight = " + a1.kadheight + ";";
                                                bC += "var kadtype = " + a1.kadtype + ";";
                                                bC += "var kadasync = false;";
                                                bC += "var kadGdpr = " + a1.gdpr + ";";
                                                for (bB in v) {
                                                    if (v.hasOwnProperty(bB) && a1.hasOwnProperty(v[bB].n)) {
                                                        bC += "var " + bB + ' = "' + aE(a1[v[bB].n]) + '";'
                                                    }
                                                }
                                                bC += "<\/script>";
                                                bC += '<script src="' + am + '"><\/script>';
                                                bC += "</body></html>";
                                                var bD = bE.contentWindow.document;
                                                bD.write(bC);
                                                bD.close()
                                            }
                                        };
                                    z('<iframe id="' + x + '" frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" scrolling="no" width="' + a1.kadwidth + '" hspace="0" vspace="0" height="' + a1.kadheight + '"></iframe>');
                                    setTimeout(function() {
                                        bz()
                                    }, 15)
                                })()
                            } else {
                                y = false;
                                if (a1.kadNetwork) {
                                    y = ae(a1)
                                }
                                if (!y) {
                                    var n = false,
                                        b = 50,
                                        t = {
                                            31420: "",
                                            42657: "",
                                            79534: "",
                                            73587: "",
                                            46076: ""
                                        },
                                        A = {
                                            90627: "",
                                            90632: ""
                                        };
                                    if (bs.IE && aL != a2) {
                                        try {
                                            if (aL.frameElement && aL.frameElement.src.indexOf("javascript:") === 0) {
                                                n = true;
                                                if (!document.body) {
                                                    z('<span style="' + aT + '"/>');
                                                    b = 500
                                                }
                                                if (t.hasOwnProperty(a1.pubId) || A.hasOwnProperty(a1.siteId)) {
                                                    n = false
                                                }
                                            }
                                        } catch (R) {}
                                    }
                                    if (n) {
                                        ap.showAd(a1, !!a1.kadNetwork, true);
                                        setTimeout(function() {
                                            P(am + "#PMFRAME=1&" + m(a1) + "&it=" + bs.it + "&bce=" + (aY ? 1 : 0), a1.kadheight, a1.kadwidth, "height:" + a1.kadheight + "px;width:" + a1.kadwidth + "px;position:absolute;left:0px;top:0px;z-index:100", null, null, null, false, true)
                                        }, b)
                                    } else {
                                        ap.showAd(a1, !!a1.kadNetwork)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } catch (bw) {
        aj(bw)
    }
})();
//--></script></body></html>