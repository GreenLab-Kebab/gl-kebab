(function() {
    "use strict";
    var e = !("undefined" == typeof window || !window.document || !window.document.createElement),
        l = {
            canUseDOM: e,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners: e && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: e && !!window.screen
        };
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define("exenv", function() {
        return l
    }) : "undefined" != typeof module && module.exports ? module.exports = l : window.ExecutionEnvironment = l
})(), define("spectrum/file_icon/extension_icons", ["require", "exports"], function(e, l) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), l.EXTENSION_ICONS = {
        _unknown: "unknown",
        log: "unknown",
        msg: "unknown",
        sln: "unknown",
        vcproj: "unknown",
        txt: "txt",
        wps: "txt",
        doc: "docx",
        docx: "docx",
        docm: "docx",
        rtf: "docx",
        pages: "docx",
        wpd: "docx",
        odt: "docx",
        pdf: "pdf",
        eps: "pdf",
        xls: "xls",
        xlsm: "xls",
        xlsx: "xls",
        xlsb: "xls",
        ods: "xls",
        csv: "xls",
        ppt: "ppt",
        pptx: "ppt",
        pptm: "ppt",
        pps: "ppt",
        ppsx: "ppt",
        ppsm: "ppt",
        odp: "ppt",
        key: "keynote",
        css: "code",
        html: "code",
        htm: "code",
        xml: "code",
        as: "code",
        as3: "code",
        asm: "code",
        aspx: "code",
        bat: "code",
        c: "code",
        cc: "code",
        cmake: "code",
        coffee: "code",
        cpp: "code",
        cs: "code",
        cxx: "code",
        diff: "code",
        erb: "code",
        erl: "code",
        groovy: "code",
        gry: "code",
        h: "code",
        haml: "code",
        hh: "code",
        hpp: "code",
        hxx: "code",
        java: "code",
        js: "code",
        json: "code",
        jsx: "code",
        less: "code",
        lst: "code",
        m: "code",
        make: "code",
        ml: "code",
        mm: "code",
        out: "code",
        patch: "code",
        php: "code",
        pl: "code",
        plist: "code",
        properties: "code",
        py: "code",
        rb: "code",
        sass: "code",
        scala: "code",
        scm: "code",
        script: "code",
        scss: "code",
        sh: "code",
        sml: "code",
        sql: "code",
        ts: "code",
        tsx: "code",
        vb: "code",
        vi: "code",
        vim: "code",
        xsd: "code",
        xsl: "code",
        yaml: "code",
        yml: "code",
        exe: "exe",
        dll: "exe",
        app: "exe",
        mp3: "audio",
        m3u: "audio",
        wav: "audio",
        m4a: "audio",
        m4b: "audio",
        m4r: "audio",
        wma: "audio",
        aif: "audio",
        iff: "audio",
        mid: "audio",
        mpa: "audio",
        ra: "audio",
        aiff: "audio",
        amr: "audio",
        ogg: "audio",
        "3ga": "audio",
        aac: "audio",
        oga: "audio",
        abf: "font",
        acm: "font",
        afm: "font",
        amfm: "font",
        bdf: "font",
        cha: "font",
        chr: "font",
        compositefont: "font",
        dfont: "font",
        eot: "font",
        etx: "font",
        euf: "font",
        f3f: "font",
        ffil: "font",
        fnt: "font",
        fon: "font",
        fot: "font",
        gdr: "font",
        gf: "font",
        gxf: "font",
        lwfn: "font",
        mcf: "font",
        mf: "font",
        mxf: "font",
        odttf: "font",
        otf: "font",
        pcf: "font",
        pfa: "font",
        pfb: "font",
        pfm: "font",
        pfr: "font",
        pk: "font",
        suit: "font",
        t65: "font",
        tfm: "font",
        ttc: "font",
        tte: "font",
        ttf: "font",
        txf: "font",
        vbf: "font",
        vlw: "font",
        vnf: "font",
        woff: "font",
        woff2: "font",
        xfn: "font",
        xft: "font",
        ytf: "font",
        gif: "image",
        png: "image",
        jpg: "image",
        jpeg: "image",
        tiff: "image",
        tif: "image",
        bmp: "image",
        odg: "image",
        "3fr": "image",
        ari: "image",
        arw: "image",
        srf: "image",
        sr2: "image",
        bay: "image",
        crw: "image",
        cr2: "image",
        cap: "image",
        eip: "image",
        dcs: "image",
        dcr: "image",
        drf: "image",
        k25: "image",
        kdc: "image",
        dng: "image",
        erf: "image",
        fff: "image",
        iiq: "image",
        mef: "image",
        mos: "image",
        mrw: "image",
        nef: "image",
        nrw: "image",
        orf: "image",
        pef: "image",
        pxn: "image",
        r3d: "image",
        raf: "image",
        rw2: "image",
        raw: "image",
        rwl: "image",
        rwz: "image",
        obm: "image",
        srw: "image",
        x3f: "image",
        svg: "image",
        heic: "image",
        heif: "image",
        sketch: "sketch",
        "3dm": "3d",
        "3ds": "3d",
        c4d: "3d",
        blend: "3d",
        dae: "3d",
        dwg: "3d",
        dxf: "3d",
        fbx: "3d",
        ma: "3d",
        max: "3d",
        mb: "3d",
        obj: "3d",
        off: "3d",
        ply: "3d",
        pts: "3d",
        ptx: "3d",
        rvt: "3d",
        avi: "video",
        mov: "video",
        mp4: "video",
        mkv: "video",
        wmv: "video",
        mpg: "video",
        "3gp": "video",
        "3gpp": "video",
        m4v: "video",
        vob: "video",
        ogv: "video",
        gz: "zip",
        tar: "zip",
        rar: "zip",
        zip: "zip",
        tgz: "zip",
        bz2: "zip",
        "7z": "zip",
        bz: "zip",
        cpio: "zip",
        lha: "zip",
        lz: "zip",
        lzh: "zip",
        lzma: "zip",
        taz: "zip",
        tbz: "zip",
        tbz2: "zip",
        tlz: "zip",
        txz: "zip",
        tz: "zip",
        xar: "zip",
        xz: "zip",
        z: "zip",
        band: "pkg",
        bundle: "pkg",
        curio: "pkg",
        dtbase: "pkg",
        framework: "pkg",
        graffle: "pkg",
        kext: "pkg",
        keynote: "pkg",
        mapset: "pkg",
        mjdoc: "pkg",
        mpkg: "pkg",
        numbers: "pkg",
        omniplan: "pkg",
        oo3: "pkg",
        pkg: "pkg",
        plugin: "pkg",
        qdfm: "pkg",
        rtfd: "pkg",
        rwsw: "pkg",
        rwtheme: "pkg",
        scriv: "pkg",
        ufo: "pkg",
        vpdoc: "pkg",
        xcodeproj: "pkg",
        iso: "unknown",
        dmg: "unknown",
        framerx: "framerx",
        ai: "ai",
        psd: "psd",
        au: "au",
        fla: "fl",
        swf: "fl",
        url: "link",
        webloc: "link",
        website: "link",
        paper: "paper",
        papert: "papert",
        binder: "binder",
        gdoc: "gdoc",
        gsheet: "gsheet",
        gslides: "gslides",
        dlink: "dlink",
        web: "shortcut"
    }
}), define("spectrum/file_icon/file_icon", ["require", "exports", "tslib", "tslib", "react", "spectrum/file_icon/extension_icons", "spectrum/icon_content", "spectrum/file_icon/get_extension"], function(e, l, t, a, i, n, r, h) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), a = t.__importStar(a), i = t.__importStar(i), l.FileIcon = function(e) {
        var l = e.path,
            t = e.variant,
            o = void 0 === t ? "small" : t,
            d = (e.name, e.disabled),
            c = a.__rest(e, ["path", "variant", "name", "disabled"]),
            f = n.EXTENSION_ICONS._unknown,
            s = h.getExtension(l) || f,
            v = (n.EXTENSION_ICONS[s] || f) + "-" + o;
        return i.createElement(r.IconContent, a.__assign({
            name: v,
            disabled: d
        }, c))
    }, l.FileIcon.displayName = "FileIcon"
}), define("spectrum/file_icon/get_extension", ["require", "exports"], function(e, l) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), l.getExtension = function(e) {
        var l = e.split(".").pop();
        return l && l.toLowerCase()
    }
}), define("spectrum/file_icon", ["require", "exports", "tslib", "spectrum/file_icon/file_icon"], function(e, l, t, a) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), t.__exportStar(a, l)
}), define("spectrum/icon_action/bundle", ["require", "exports"], function(e, l) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), l.ICONS = {
        "add-comment": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.446 20H21v-9H11v11l2.446-2zM14 22h7.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 21.5 9h-11A1.5 1.5 0 0 0 9 10.5V23c0 1.166 1 1.851 2 1.251L14 22z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19 14h-6v1h6v-1zm-3 2h-3v1h3v-1z" class="mc-icon--af"></path>'
        },
        "add-to-collection": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.505 8A1.5 1.5 0 0 0 8 9.505V17h2v-7h12v12h-7v2h7.495A1.5 1.5 0 0 0 24 22.495V9.505A1.5 1.5 0 0 0 22.495 8H9.505zm0 16A1.5 1.5 0 0 1 8 22.495v.005A1.5 1.5 0 0 0 9.5 24h.005z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 20h-2v2h2v-2zm-4-2v6h6v-6H8z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12h-8v3h8v-3zm0 5h-3v3h3v-3z" class="mc-icon--af"></path>'
        },
        archive: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 9A1.5 1.5 0 0 0 8 10.5v.5h16v-.5A1.5 1.5 0 0 0 22.5 9h-13zM8 12h16v10.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 8 22.5V12zm2 2h12v8H10v-8z" class="mc-icon--mf"></path><path class="mc-icon--af" d="M13 16h6v2h-6z"></path>'
        },
        brainstorm: {
            attrs: {
                width: "33",
                height: "33",
                viewBox: "0 0 33 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.43 14.06l-9.668 9.654 3.816-7.635H11.5L15.375 8H21.5l-4.442 6.06h4.373z" class="mc-icon--mf"></path>'
        },
        calculate: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M19 11.5h-6v2h6v-2zM14 15h-1v1h1v-1zm0 2h-1v1h1v-1zm-1 2h1v1h-1v-1zm3.5-4h-1v1h1v-1zm-1 2h1v1h-1v-1zm1 2h-1v1h1v-1zm1.5-4h1v1h-1v-1zm1 2h-1v1h1v-1zm-1 2h1v1h-1v-1z" class="mc-icon--af"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 8A1.5 1.5 0 0 1 23 9.5v13a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 9 22.5v-13A1.5 1.5 0 0 1 10.5 8h11zM11 10h10v12H11V10z" class="mc-icon--mf"></path>'
        },
        copy: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M11 24H9.5A1.5 1.5 0 0 1 8 22.5V19h2v3h1v2zm-1-11v-3h1V8H9.5A1.5 1.5 0 0 0 8 9.5V13h2z" class="mc-icon--af"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24 9.5A1.5 1.5 0 0 0 22.5 8h-9A1.5 1.5 0 0 0 12 9.5V11h2v-1h8v12h-8v-1h-2v1.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-13z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14 12h-2v3H9v2h3v3h2v-3h3v-2h-3v-3z" class="mc-icon--mf"></path>'
        },
        create: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M23 5h-2v3h-3v2h3v3h2v-3h3V8h-3V5zm0 10v7a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h5v2h-5v12h10v-7h2z" class="mc-icon--mf"></path>'
        },
        delete: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M15 7a1 1 0 0 0-1 1v1H9v1.5a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V9h-5V8a1 1 0 0 0-1-1h-3zm-3 6h-2l.457 10.045a1 1 0 0 0 .999.955h10.088a1 1 0 0 0 1-.955L23 13h-2v8a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-8z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14 13h1v7h-1v-7zm2 0h1v7h-1v-7zm3 0h-1v7h1v-7z" class="mc-icon--af"></path>'
        },
        download: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path class="mc-icon--af" d="M10 22h12v2H10z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8a.5.5 0 0 0-.5.5V14h-1.985a.5.5 0 0 0-.396.805l3.588 4.665a1 1 0 0 0 1.586 0l3.588-4.665a.5.5 0 0 0-.396-.805H18V8.5a.5.5 0 0 0-.5-.5h-3z" class="mc-icon--mf"></path>'
        },
        "download-file": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path d="M17.39 19.509l-.214.212a.96.96 0 0 1-1.352 0l-.22-.219h-.063v-.062L12 15.918l1.352-1.345 2.198 2.187.036-9.76 1.912.007-.035 9.74 2.185-2.174L21 15.918l-3.547 3.528v.063h-.063zM8 23h16v2H8z" class="mc-icon--mf"></path>'
        },
        edit: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path d="M20.434 7.316a.8.8 0 0 1 1.132 0l3.111 3.111a.8.8 0 0 1 0 1.131l-1.556 1.556-4.242-4.243 1.555-1.555zM18.879 11.7l-1.415-1.415-9.738 9.738-.606 4.849 4.85-.606 9.737-9.738-1.414-1.414-9.192 9.192-1.415-1.414 9.193-9.193z" class="mc-icon--mf"></path>'
        },
        events: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 9A1.5 1.5 0 0 0 8 10.5v12A1.5 1.5 0 0 0 9.5 24h13a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 22.5 9h-13zM22 13H10v9h12v-9z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14 15h-2v2h2v-2zm3 0h-2v2h2v-2zm1 0h2v2h-2v-2zm-4 3h-2v2h2v-2zm1 0h2v2h-2v-2zm5 0h-2v2h2v-2z" class="mc-icon--af"></path>'
        },
        "flag-for-copyright": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M10 8s1.407-.01 2 0c4.049.067 4.383.383 5 1 .287.287.491.491.731.637C18.33 10 19.147 10 22 10v10c-.762 0-1.423-.009-2-.028-2.453-.08-3.38-.352-4-.972-.841-.841-1.002-.979-4-1v6h-2V8zm2 2v6h.014c1.424.01 2.5.038 3.322.263 1.043.285 1.617.86 2.036 1.28l.042.043a.315.315 0 0 0 .11.072c.083.037.257.1.6.158.435.074 1.03.126 1.876.155v-5.979c-.84-.014-1.499-.052-2.017-.156a3.85 3.85 0 0 1-1.48-.614c-.357-.246-.662-.552-.873-.764l-.044-.044a4.89 4.89 0 0 0-.143-.138 1.204 1.204 0 0 0-.135-.04c-.418-.104-1.295-.202-3.308-.236z" class="mc-icon--mf"></path>'
        },
        hide: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" class="mc-icon--af"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.971 8.915a.498.498 0 0 0-.172-.165l-.866-.5a.5.5 0 0 0-.683.183l-1.352 2.343C17.878 10.304 16.74 10 15.5 10c-4.544 0-7.716 4.083-8.687 5.513a.857.857 0 0 0 0 .974c.76 1.115 2.863 3.847 5.904 4.993l-.967 1.675a.5.5 0 0 0 .183.683l.866.5a.498.498 0 0 0 .23.067l8.942-15.49zm-5.18 12.974c3.843-.662 6.517-4.113 7.395-5.402a.857.857 0 0 0 0-.974 16.139 16.139 0 0 0-2.212-2.601l-.96 1.663c.678.776 1 1.425 1 1.425s-1.251 2.362-3.819 3.456l-1.404 2.433zM15.514 12c.913 0 1.722.163 2.432.424L13.71 19.76C10.55 18.9 9.014 16 9.014 16s1.98-4 6.5-4z" class="mc-icon--mf"></path>'
        },
        link: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.007 12A4.003 4.003 0 0 0 6 16c0 2.205 1.794 4 4.007 4H13v-2h-2.995a2 2 0 1 1-.008-4h5.006c1.103 0 1.997.9 1.997 2.001V17h2v-1c0-2.205-1.794-4-4.007-4h-4.986zm11.987 8A4.003 4.003 0 0 0 26 16c0-2.205-1.794-4-4.006-4H19v2h2.995a2 2 0 1 1 .008 4h-5.006C15.894 18 15 17.1 15 15.999V15h-2v1c0 2.205 1.794 4 4.006 4h4.988z" class="mc-icon--mf"></path>'
        },
        mention: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.15 11.5h1.35v7.21c0 .02.016.035.035.035h.824c1.025 0 1.856-.83 1.856-1.856h1.754a3.61 3.61 0 0 1-3.611 3.611H19.41a.26.26 0 0 1-.26-.26V11.5z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 16a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0zm7.2 0a2.7 2.7 0 1 1-5.4 0 2.7 2.7 0 0 1 5.4 0z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7 16a9 9 0 0 0 14.74 6.933l.005.005c.117-.101.233-.205.347-.313a9.03 9.03 0 0 0 2.2-3.121A9 9 0 1 0 7 16zm17.292 3.504c.328-.776.561-1.643.661-2.612H23.2V16a7.2 7.2 0 1 0-2.67 5.596c.273.297.45.495.632.697l.578.64a9.307 9.307 0 0 0 2.494-3.293c.02-.045.04-.09.058-.136z" class="mc-icon--mf"></path>'
        },
        monitor: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.505 8C8.667 8 8 8.668 8 9.491V19.51C8 20.337 8.674 21 9.505 21h12.99c.838 0 1.505-.668 1.505-1.491V9.49C24 8.663 23.326 8 22.495 8H9.505zM10 19v-9h12v9H10z" class="mc-icon--mf"></path><path d="M11 22.505c0-.279.228-.505.51-.505h8.98a.5.5 0 0 1 .51.505v.99a.507.507 0 0 1-.51.505h-8.98a.5.5 0 0 1-.51-.505v-.99z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12h-5v2h5v-2zm0 3h-5v2h5v-2zm-8 0h2v2h-2v-2zm2-3h-2v2h2v-2z" class="mc-icon--af"></path>'
        },
        move: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M11 24H9.5A1.5 1.5 0 0 1 8 22.5V20h2v2h1v2zm-1-11v-3h1V8H9.5A1.5 1.5 0 0 0 8 9.5V13h2z" class="mc-icon--af"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24 9.5A1.5 1.5 0 0 0 22.5 8h-9A1.5 1.5 0 0 0 12 9.5V13h2v-3h8v12h-8v-2h-2v2.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-13z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.148 16.853a.5.5 0 0 0 0-.706l-3.711-3.72a.25.25 0 0 0-.427.178V15H10v3h6.01v2.395c0 .223.27.335.427.177l3.71-3.719z" class="mc-icon--mf"></path>'
        },
        "new-collection": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.505 8A1.5 1.5 0 0 0 8 9.505v12.99A1.5 1.5 0 0 0 9.505 24h12.99A1.5 1.5 0 0 0 24 22.495V9.505A1.5 1.5 0 0 0 22.495 8H9.505zM22 22H10V10h12v12z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12h-8v3h8v-3zm-8 5h3v3h-3v-3zm5 0h3v3h-3v-3z" class="mc-icon--af"></path>'
        },
        "new-file-request": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 10A1.5 1.5 0 0 0 9 11.5v10a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5v-10a1.5 1.5 0 0 0-1.5-1.5h-11zM21 12H11v6h3v2h4v-2h3v-6z" class="mc-icon--mf"></path>'
        },
        "new-folder": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 10a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 8 21.5v-12A1.5 1.5 0 0 1 9.5 8H14l2 2h6.5zM10 12v9h12v-9H10z" class="mc-icon--mf"></path>'
        },
        "new-image": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.505 8A1.5 1.5 0 0 0 8 9.505v12.99A1.5 1.5 0 0 0 9.505 24h12.99A1.5 1.5 0 0 0 24 22.495V9.505A1.5 1.5 0 0 0 22.495 8H9.505zM22 22H10V10h12v12z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.75 15L17 18.5l1.1-1.5 1.9 3h-8l2.75-5zM18.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" class="mc-icon--af"></path>'
        },
        "new-meeting-note": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 9A1.5 1.5 0 0 0 8 10.5v12A1.5 1.5 0 0 0 9.5 24h13a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 22.5 9h-13zM22 13H10v9h12v-9z" class="mc-icon--mf"></path>'
        },
        "new-paper-doc": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M13 13h6v1h-6v-1zm0 2h6v1h-6v-1zm3 2h-3v1h3v-1z" class="mc-icon--af"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 8A1.5 1.5 0 0 1 23 9.5v13a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 9 22.5v-13A1.5 1.5 0 0 1 10.5 8h11zM11 10h10v12H11V10z" class="mc-icon--mf"></path>'
        },
        "new-project": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.003 8.246c-.544-.325-1.452-.33-2.006 0l-4.994 2.98C9.459 11.55 9 12.358 9 13.02v5.96c0 .674.449 1.464 1.003 1.795l4.994 2.98c.544.324 1.452.33 2.006 0l4.994-2.98C22.541 20.45 23 19.64 23 18.98v-5.96c0-.674-.449-1.464-1.003-1.795l-4.994-2.98zM11 13.373c0-.204.202-.574.364-.673l4.28-2.627c.16-.098.554-.097.712 0l4.28 2.627c.171.105.364.457.364.674v5.252c0 .205-.202.575-.363.674l-4.281 2.627c-.16.098-.554.097-.712 0l-4.28-2.627c-.171-.105-.364-.457-.364-.674v-5.253z" class="mc-icon--mf"></path>'
        },
        "new-shared-folder": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 11.5a1.5 1.5 0 0 0-1.5-1.5H16l-2-2H9.5A1.5 1.5 0 0 0 8 9.5v12A1.5 1.5 0 0 0 9.5 23H11v-2h-1v-9h12v9h-1v2h1.5a1.5 1.5 0 0 0 1.5-1.5v-10z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 23h-3.334c-.55 0-.815-.41-.58-.916l.337-.724c.35-.753 1.311-1.36 2.149-1.36h2.856c.838 0 1.8.607 2.15 1.36l.336.724c.235.506-.03.916-.58.916H16zm0-4a2.008 2.008 0 0 1-2.015-2c0-1.105.902-2 2.015-2s2.015.895 2.015 2-.902 2-2.015 2z" class="mc-icon--mf"></path>'
        },
        "new-team-folder": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path d="M24 11.491c0-.823-.668-1.491-1.505-1.491H16l-2-2H9.499C8.67 8 8 8.664 8 9.493v12.5C8 22.549 8.445 23 9 23h14a1 1 0 0 0 1-.998v-10.51zM22 21H10v-9h12v9zm-10.5 0h9v2h-9v-2z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 14h6v9h-6v-9zm2 2v1h2v-1h-2zm0 2v1h2v-1h-2zm0 2v1h2v-1h-2z" class="mc-icon--mf"></path>'
        },
        open: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.414 9L16 17.414 14.586 16 23 7.586 24.414 9z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 8h-6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6h-2v5.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H16V8zM23 13h2V7h-6v2h4v4z" class="mc-icon--mf"></path>'
        },
        "open-in-app": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M23 21.5V17h-2v4H11V11h4V9h-4.5A1.5 1.5 0 0 0 9 10.5v11a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.604 9a.25.25 0 0 0-.177.427l1.755 1.755-4.682 4.682 1.615 1.615 4.682-4.682 1.776 1.776a.25.25 0 0 0 .427-.177V9.5a.5.5 0 0 0-.5-.5h-4.896z" class="mc-icon--mf"></path>'
        },
        "open-with": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M20 22.5V21h-2v1h-8v-8h1v-2H9.5A1.5 1.5 0 0 0 8 13.5v9A1.5 1.5 0 0 0 9.5 24h9a1.5 1.5 0 0 0 1.5-1.5z" class="mc-icon--af"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24 18.5V16h-2v2h-8v-8h2V8h-2.5A1.5 1.5 0 0 0 12 9.5v9a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.604 8a.25.25 0 0 0-.177.427l1.755 1.755-4.107 4.107 1.615 1.615 4.107-4.107 1.776 1.776a.25.25 0 0 0 .427-.177V8.5a.5.5 0 0 0-.5-.5h-4.896z" class="mc-icon--mf"></path>'
        },
        "permanently-delete": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 17.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-1z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 20h-1v5h1v-5zm3 0h-1v5h1v-5zm2 0h1v5h-1v-5zm4 0h-1v5h1v-5zM18 12h-4v1h4v-1zm0 2h-4v1h4v-1z" class="mc-icon--af"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 9.5A1.5 1.5 0 0 0 20.5 8h-9A1.5 1.5 0 0 0 10 9.5V15h2v-5h8v5h2V9.5z" class="mc-icon--mf"></path>'
        },
        permissions: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 12A1.5 1.5 0 0 0 9 13.5v9a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-11zM21 14H11v8h10v-8z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 6a4 4 0 0 0-4 4v4h8v-4a4 4 0 0 0-4-4zm0 2a2 2 0 0 0-2 2v2h4v-2a2 2 0 0 0-2-2z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" class="mc-icon--af"></path>'
        },
        pin: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<path class="pin-handle mc-icon--mf" d="M14.354 6.06a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 0 1-.707 0l-.354-.353-2.12 2.121.353.354a1.5 1.5 0 0 1 0 2.121L14 16.313l-5.658-5.656 1.06-1.06a1.5 1.5 0 0 1 2.122 0l.354.353L14 7.828l-.353-.353a.5.5 0 0 1 0-.707l.707-.707z"></path><path d="M9.58 13.309l-3.358 5.126 5.126-3.359-1.767-1.768z" class="mc-icon--mf"></path>'
        },
        rename: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path d="M20 8h-2.5c-.828 0-1.5.716-1.5 1.6v12.8c0 .884.672 1.6 1.5 1.6H20v-1.069c-3 0-3-1.064-3-1.064V10.133s.001-1.066 3-1.066V8zM12 24h2.5c.828 0 1.5-.716 1.5-1.6V9.6c0-.884-.672-1.6-1.5-1.6H12v1.067c3 0 3 1.066 3 1.066v11.734s-.03 1.071-3 1.071V24z" class="mc-icon--mf"></path><path class="mc-icon--mf" d="M13 15.5h6v1h-6z"></path>'
        },
        restore: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 9.2a7.256 7.256 0 0 0-7.25 7.25A7.256 7.256 0 0 0 16 23.7a7.256 7.256 0 0 0 7.25-7.25A7.256 7.256 0 0 0 16 9.2zm-8.75 7.25c0-4.833 3.927-8.75 8.75-8.75 4.833 0 8.75 3.927 8.75 8.75 0 4.833-3.927 8.75-8.75 8.75-4.833 0-8.75-3.927-8.75-8.75zm4 0A4.753 4.753 0 0 1 16 11.7a4.753 4.753 0 0 1 4.75 4.75A4.753 4.753 0 0 1 16 21.2a4.753 4.753 0 0 1-4.75-4.75zM16 13.2a3.253 3.253 0 0 0-3.25 3.25A3.253 3.253 0 0 0 16 19.7a3.253 3.253 0 0 0 3.25-3.25A3.253 3.253 0 0 0 16 13.2z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 24.45v-4c2.205 0 4-1.791 4-4h4c0 4.418-3.59 8-8 8zM16 8.45c-4.41 0-8 3.581-8 8h4c0-2.21 1.795-4 4-4v-4z" class="mc-icon--mf"></path>'
        },
        "restore-file": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path d="M14.471 12h2v6h-2v-6z" class="mc-icon--mf"></path><path class="mc-icon--mf" d="M14.471 16h5v2h-5z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.214 14.666L3.8 16.08l2.828 2.829 1.415 1.414 1.414-1.415 2.828-2.828-1.414-1.414-2.828 2.828-2.829-2.828z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24.971 16c0 4.633-3.5 8.448-8.002 8.945-.549.06-.998-.393-.998-.945 0-.552.45-.992.997-1.07A7.002 7.002 0 0 0 15.971 9a7 7 0 0 0-6.904 8.162c.11.66-.355 1.338-1.025 1.338-.426 0-.806-.28-.89-.698A9 9 0 1 1 24.971 16z" class="mc-icon--mf"></path>'
        },
        "revert-folder": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 11a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 8 22.5v-12A1.5 1.5 0 0 1 9.5 9H14l2 2h6.5zM10 13v9h12v-9H10z" fill="#0070E0"></path><path fill="#fff" d="M6 14h12v10H6z"></path><path fill="#fff" d="M15 20.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" stroke="#0070E0" stroke-width="2"></path><path fill="#fff" d="M7 20h5v6H7z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.536 20L8.4 23.856 12.267 20H4.536z" fill="#0070E0"></path>'
        },
        "save-to-device": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.129 7C10.5 7 10 7.758 10 8.693v14.614c0 .943.505 1.693 1.129 1.693h9.742C21.5 25 22 24.242 22 23.307V8.693C22 7.751 21.495 7 20.871 7H11.13zM20 23h-8V9h8v14z" class="mc-icon--mf"></path><path class="mc-icon--af" d="M12 11h8v1h-8zM12 20h8v1h-8z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17 13h-2v3h-1.5l2.5 3 2.5-3H17v-3z" class="mc-icon--mf"></path>'
        },
        "scan-document": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9 18v4.5a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V18h-2v4H11v-4H9zM23 9.5A1.5 1.5 0 0 0 21.5 8h-11A1.5 1.5 0 0 0 9 9.5V15h2v-5h10v5h2V9.5z" class="mc-icon--mf"></path><path class="mc-icon--mf" d="M7 15h18v2H7z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19 13h-6v1h6v-1zm-3 5h-3v1h3v-1z" class="mc-icon--af"></path>'
        },
        select: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.505 8A1.5 1.5 0 0 0 8 9.505v12.99A1.5 1.5 0 0 0 9.505 24h12.99A1.5 1.5 0 0 0 24 22.495V9.505A1.5 1.5 0 0 0 22.495 8H9.505zM22 22H10V10h12v12z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.45 13.086l-1.415-1.414-4.95 4.95-2.12-2.122-1.415 1.414 2.121 2.122 1.415 1.414 1.414-1.414 4.95-4.95z" class="mc-icon--af"></path>'
        },
        "settings-gear": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.175 22.768L15.5 21.51a5.219 5.219 0 0 0 .973 0l1.318 1.25a6.965 6.965 0 0 0 2.14-.988l-.142-1.89c.225-.239.428-.498.607-.776l1.988-.302a6.955 6.955 0 0 0 .555-2.16l-1.724-1.195a5.436 5.436 0 0 0-.216-.97l1.079-1.899a7.031 7.031 0 0 0-1.318-1.683l-2.056.65a5.208 5.208 0 0 0-.878-.432l-.779-2.032a7.054 7.054 0 0 0-2.118-.006l-.782 2.038c-.307.117-.6.262-.877.432l-2.084-.659a7.031 7.031 0 0 0-1.308 1.66l1.097 1.932c-.1.311-.173.635-.216.968L9 16.668c.071.75.26 1.467.55 2.13l2.028.309c.179.277.382.536.607.775l-.144 1.913a6.967 6.967 0 0 0 2.134.973zM18.987 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" class="mc-icon--mf"></path>'
        },
        "sign-in": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<g clip-path="url(#mc-action-sign-in-a)"><g clip-path="url(#mc-action-sign-in-b)"><circle cx="16" cy="11.25" r="3" class="mc-icon--mf"></circle><path d="M10 22.25a6 6 0 0 1 12 0v.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-.25z" class="mc-icon--mf"></path></g></g><defs><clipPath id="mc-action-sign-in-a"><path fill="#fff" d="M0 0h32v32H0z"></path></clipPath><clipPath id="mc-action-sign-in-b"><path fill="#fff" transform="translate(0 -.5)" d="M0 0h32v32H0z"></path></clipPath></defs>'
        },
        "sign-in-outline": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 9.75a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM19.97 22.25a4 4 0 0 0-7.94 0h7.94zM16 16.75a6 6 0 0 0-6 6V23c0 .69.56 1.25 1.25 1.25h9.5c.69 0 1.25-.56 1.25-1.25v-.25a6 6 0 0 0-6-6z" class="mc-icon--mf"></path>'
        },
        share: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path d="M10 7.75v6m-3-3h6" stroke-width="2" class="mc-icon--ms"></path><circle cx="19" cy="11.75" r="3" class="mc-icon--mf"></circle><path d="M13 22.75a6 6 0 0 1 12 0V23c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-.25z" class="mc-icon--mf"></path>'
        },
        "share-outline": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9 9.75v-2h2v2h2v2h-2v2H9v-2H7v-2h2zM19 9.75a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM22.97 22.25a4 4 0 0 0-7.94 0h7.94zM19 16.75a6 6 0 0 0-6 6V23c0 .69.56 1.25 1.25 1.25h9.5c.69 0 1.25-.56 1.25-1.25v-.25a6 6 0 0 0-6-6z" class="mc-icon--mf"></path>'
        },
        "share-as-collection": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 9.505A1.5 1.5 0 0 1 9.505 8h12.99A1.5 1.5 0 0 1 24 9.505v12.99A1.5 1.5 0 0 1 22.495 24H21v-2h1V10H10v12h1v2H9.505A1.5 1.5 0 0 1 8 22.495V9.505z" class="mc-icon--mf"></path><path class="mc-icon--af" d="M12 12h8v3h-8z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 24h-3.334c-.55 0-.815-.41-.58-.916l.337-.724c.35-.753 1.311-1.36 2.149-1.36h2.856c.838 0 1.8.607 2.15 1.36l.336.724c.235.506-.03.916-.58.916H16zm0-4a2.008 2.008 0 0 1-2.015-2c0-1.105.902-2 2.015-2s2.015.895 2.015 2-.902 2-2.015 2z" class="mc-icon--mf"></path>'
        },
        "show-deleted-files": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" class="mc-icon--af"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.945 16.534C22.842 18.004 19.48 22 15.5 22s-7.342-3.996-8.445-5.466a.884.884 0 0 1 0-1.068C8.158 13.996 11.52 10 15.5 10s7.342 3.996 8.445 5.466c.24.32.24.749 0 1.068zM22.014 16s-2.91 4-6.5 4-6.5-4-6.5-4 2.91-4 6.5-4 6.5 4 6.5 4z" class="mc-icon--mf"></path>'
        },
        "show-in-finder": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 8A1.5 1.5 0 0 1 24 9.5v12a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 8 21.5v-12A1.5 1.5 0 0 1 9.5 8h13zM10 10h12v11H10V10z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12H10v1h3v8h1v-8h8v-1z" class="mc-icon--af"></path>'
        },
        sort: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-1zM16 19.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM8 11.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-1z" class="mc-icon--mf"></path>'
        },
        star: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 18.657l2.138 1.197-.478-2.403 1.799-1.663-2.433-.289L16 13.275l-1.026 2.224-2.433.289 1.799 1.663-.478 2.403L16 18.657zm-4.944 5.06l1.104-5.558L8 14.312l5.627-.667L16 8.5l2.373 5.145 5.627.667-4.16 3.847 1.104 5.558L16 20.949l-4.944 2.768z" class="mc-icon--mf"></path>'
        },
        "sync-settings": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.002 21.284l-.003-.001H10A8 8 0 0 0 24.007 16v-.004h2.401a.25.25 0 0 0 .176-.427l-3.219-3.21a.5.5 0 0 0-.706 0l-3.219 3.21a.25.25 0 0 0 .177.427h2.39V16a6 6 0 0 1-10.59 3.865l-.003.002-1.412 1.416zM20.62 12.133l1.412-1.416A8 8 0 0 0 8.025 16v.004H5.623a.25.25 0 0 0-.177.427l3.22 3.21a.5.5 0 0 0 .706 0l3.218-3.21a.25.25 0 0 0-.176-.427h-2.39V16a6 6 0 0 1 10.59-3.864l.005-.003z" class="mc-icon--mf"></path>'
        },
        unstar: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 20.95l-4.944 2.767 1.104-5.558L8 14.312l5.627-.667L16 8.5l2.373 5.145 5.627.667-4.16 3.847 1.104 5.558L16 20.949z" class="mc-icon--mf"></path>'
        },
        "upload-file": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M23 9.5A1.5 1.5 0 0 0 21.5 8h-11A1.5 1.5 0 0 0 9 9.5V13h2v-3h10v12h-8v2h8.5a1.5 1.5 0 0 0 1.5-1.5v-13z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 13h6v1h-6v-1zm0 2h6v1h-6v-1zm6 2h-3v1h3v-1z" class="mc-icon--af"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.91 15.557a.5.5 0 0 0-.82 0l-2.815 4.021a.25.25 0 0 0 .205.393H8V25h3v-5.029h1.52a.25.25 0 0 0 .205-.393L9.91 15.557z" class="mc-icon--mf"></path>'
        },
        "upload-folder": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M25 11.5a1.5 1.5 0 0 0-1.5-1.5H17l-2-2h-4.5A1.5 1.5 0 0 0 9 9.5V12h14v9H13v2h10.5a1.5 1.5 0 0 0 1.5-1.5v-10z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.91 14.557a.5.5 0 0 0-.82 0l-2.815 4.021a.25.25 0 0 0 .205.393H8V24h3v-5.029h1.52a.25.25 0 0 0 .205-.393L9.91 14.557z" class="mc-icon--mf"></path>'
        },
        upload: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 20a.5.5 0 0 1-.5-.5V14h-1.985a.5.5 0 0 1-.396-.805l3.588-4.665a1 1 0 0 1 1.586 0l3.588 4.665a.5.5 0 0 1-.396.805H18v5.5a.5.5 0 0 1-.5.5h-3z" class="mc-icon--mf"></path><path class="mc-icon--af" d="M10 22h12v2H10z"></path>'
        },
        "view-folder-history": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 11.5a1.5 1.5 0 0 0-1.5-1.5H16l-2-2H9.5A1.5 1.5 0 0 0 8 9.5V13h2v-1h12v9h-4v2h4.5a1.5 1.5 0 0 0 1.5-1.5v-10z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 24a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm.5-5h2v1h-3v-3h1v2z" class="mc-icon--mf"></path>'
        },
        "view-version-history": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 16a8 8 0 0 1-9 7.938v-2.021A6 6 0 1 0 10 16v.005h2.39a.25.25 0 0 1 .177.427l-3.219 3.21a.5.5 0 0 1-.706 0l-3.219-3.21a.25.25 0 0 1 .177-.427H8V16a8 8 0 1 1 16 0z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 12h-1v5h5v-1h-4v-4z" class="mc-icon--af"></path>'
        }
    }
}), define("spectrum/icon_action", ["require", "exports", "tslib", "tslib", "react", "spectrum/icon_templates/actionable", "spectrum/svg_icon_bundle", "spectrum/icon_action/bundle"], function(e, l, t, a, i, n, r, h) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), a = t.__importStar(a), i = t.__importStar(i), l.ICONS = h.ICONS, l.IconAction = function(e) {
        var l = e.name,
            t = i.createElement(r.SvgIconBundle, {
                focusable: "false",
                icon: h.ICONS[l]
            });
        return i.createElement(n.Component, a.__assign({
            icon: t
        }, e))
    }, l.IconAction.displayName = "IconAction"
}), define("spectrum/icon_arrow/bundle", ["require", "exports"], function(e, l) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), l.ICONS = {
        "right-small": {
            attrs: {
                width: "12",
                height: "12",
                viewBox: "0 0 12 12"
            },
            dangerouslySetInnerIconHtml: '<path d="M6.243 5.998L4.12 3.878l.707-.708 2.829 2.828-.354.354-2.475 2.475-.707-.707 2.122-2.122z" fill="#637282" fill-rule="evenodd"></path>'
        },
        right: {
            attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<path d="M10.414 7.05l4.95 4.95-4.95 4.95L9 15.534 12.536 12 9 8.464z" fill="#637282" fill-rule="evenodd"></path>'
        }
    }
}), define("spectrum/icon_arrow", ["require", "exports", "tslib", "tslib", "react", "spectrum/icon_templates/stateless", "spectrum/svg_icon_bundle", "spectrum/icon_arrow/bundle"], function(e, l, t, a, i, n, r, h) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), a = t.__importStar(a), i = t.__importStar(i), l.ICONS = h.ICONS, l.IconArrow = function(e) {
        var l = e.name,
            t = i.createElement(r.SvgIconBundle, {
                focusable: "false",
                icon: h.ICONS[l]
            });
        return i.createElement(n.Component, a.__assign({
            icon: t
        }, e))
    }, l.IconArrow.displayName = "IconArrow"
}), define("spectrum/icon_content/bundle", ["require", "exports"], function(e, l) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), l.ICONS = {
        "3d-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="31" width="74" height="100" rx="4"></rect><rect fill="#F7F9FA" x="43" y="30" width="74" height="100" rx="4"></rect></g><path d="M96.035 69.526c.475.274.861.941.861 1.491v17.521c0 .55-.385 1.217-.861 1.492L80.86 98.79c-.475.275-1.246.276-1.722 0l-15.174-8.76c-.475-.275-.861-.941-.861-1.492v-17.52c0-.55.385-1.217.861-1.492l15.174-8.76c.475-.275 1.246-.276 1.722 0l15.174 8.76zm-30.07 17.7c0 .273.194.605.434.743l12.167 7.021c.24.138.434.033.434-.242V81.903c0-.272-.194-.605-.434-.743L66.4 74.14c-.24-.14-.434-.034-.434.241v12.846z" fill="#637282" fill-rule="nonzero"></path></g>'
        },
        "3d-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-3d-small-b" x="8" y="5" width="24" height="30" rx="1.5"></rect><filter x="-2.1%" y="-1.7%" width="104.2%" height="106.7%" filterUnits="objectBoundingBox" id="mc-content-3d-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-3d-small-a)" xlink:href="#mc-content-3d-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-3d-small-b"></use></g><path d="M24.401 16.964a.954.954 0 0 1 .43.742v4.588a.954.954 0 0 1-.43.742L20.43 25.33a.954.954 0 0 1-.858 0L15.6 23.036a.954.954 0 0 1-.43-.742v-4.588c0-.273.196-.607.43-.742l3.972-2.294a.954.954 0 0 1 .858 0l3.972 2.294zM16.25 21.88L20 24.046V20.13l-3.75-2.165v3.916z" fill="#637282" fill-rule="nonzero"></path></g>'
        },
        "ai-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="31" width="74" height="100" rx="4"></rect><rect fill="#F7F9FA" x="43" y="30" width="74" height="100" rx="4"></rect></g><path d="M76.376 74.616c-.024.096-.264 1.2-.72 2.544l-1.92 5.76h5.304l-1.92-5.76c-.48-1.416-.696-2.544-.696-2.544h-.048zM81.416 90l-1.536-4.56h-6.984L71.36 90h-3.216L74.6 71.64h3.792L84.92 90h-3.504zm5.952-15.24h3.288v-3.048h-3.288v3.048zM87.392 90h3.24V77.208h-3.24V90z" fill="#FF8E21"></path></g>'
        },
        "ai-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-ai-small-b" x="8" y="5" width="24" height="30" rx="1.5"></rect><filter x="-2.1%" y="-1.7%" width="104.2%" height="106.7%" filterUnits="objectBoundingBox" id="mc-content-ai-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-ai-small-a)" xlink:href="#mc-content-ai-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-ai-small-b"></use></g><path d="M17.95 17.76c-.01.04-.1.49-.3 1.11l-.71 2.23h2.02l-.7-2.22c-.21-.67-.29-1.12-.29-1.12h-.02zM19.92 24l-.56-1.7h-2.81l-.56 1.7h-1.57l2.67-7.65h1.84L21.64 24h-1.72zm2.58-6.29h1.61v-1.44H22.5v1.44zm.01 6.29h1.59v-5.36h-1.59V24z" fill="#FF8E21"></path></g>'
        },
        "au-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="31" width="74" height="100" rx="4"></rect><rect fill="#F7F9FA" x="43" y="30" width="74" height="100" rx="4"></rect></g><path d="M72.452 74.616c-.024.096-.264 1.2-.72 2.544l-1.92 5.76h5.304l-1.92-5.76c-.48-1.416-.696-2.544-.696-2.544h-.048zM77.492 90l-1.536-4.56h-6.984L67.436 90H64.22l6.456-18.36h3.792L80.996 90h-3.504zm8.856-12.792h-3.192v8.664c0 3 1.416 4.392 4.272 4.392 2.064 0 3.384-1.08 4.008-2.376h.048V90h3.096V77.208h-3.216v6.984c0 2.376-.936 3.672-2.856 3.672-.768 0-1.368-.24-1.728-.768-.384-.528-.432-1.368-.432-2.28v-7.608z" fill="#3DCC5E"></path></g>'
        },
        "au-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-au-small-b" x="8" y="5" width="24" height="30" rx="1.5"></rect><filter x="-2.1%" y="-1.7%" width="104.2%" height="106.7%" filterUnits="objectBoundingBox" id="mc-content-au-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-au-small-a)" xlink:href="#mc-content-au-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-au-small-b"></use></g><path d="M17.24 17.76c-.01.04-.1.49-.3 1.11l-.71 2.23h2.02l-.7-2.22c-.21-.67-.29-1.12-.29-1.12h-.02zM19.21 24l-.56-1.7h-2.81l-.56 1.7h-1.57l2.67-7.65h1.84L20.93 24h-1.72zm4.13-5.36h-1.59v3.57c0 1.26.55 1.89 1.84 1.89.88 0 1.4-.43 1.68-.97h.02V24h1.53v-5.36h-1.59v2.93c0 .91-.35 1.39-1.05 1.39-.31 0-.54-.1-.68-.31-.13-.2-.16-.5-.16-.88v-3.13z" fill="#3DCC5E"></path></g>'
        },
        "audio-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="30" y="44" width="100" height="74" rx="4"></rect><rect fill="#F7F9FA" x="30" y="43" width="100" height="74" rx="4"></rect></g><path d="M67 60c0-1.657 1.347-3 3-3 1.657 0 3 1.352 3 3v40c0 1.657-1.347 3-3 3-1.657 0-3-1.352-3-3V60zM57 78c0-1.657 1.347-3 3-3 1.657 0 3 1.349 3 3v4c0 1.657-1.347 3-3 3-1.657 0-3-1.349-3-3v-4zm40 0c0-1.657 1.347-3 3-3 1.657 0 3 1.349 3 3v4c0 1.657-1.347 3-3 3-1.657 0-3-1.349-3-3v-4zm-20-5.006A3 3 0 0 1 80 70c1.657 0 3 1.343 3 2.994v14.012A3 3 0 0 1 80 90c-1.657 0-3-1.343-3-2.994V72.994zM87 68c0-1.657 1.347-3 3-3 1.657 0 3 1.347 3 3v24c0 1.657-1.347 3-3 3-1.657 0-3-1.347-3-3V68z" fill="#637282"></path></g>'
        },
        "audio-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-audio-small-b" width="30" height="24" rx="1.5"></rect><filter x="-1.7%" y="-2.1%" width="103.3%" height="108.3%" filterUnits="objectBoundingBox" id="mc-content-audio-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 8)"><use fill="#000" filter="url(#mc-content-audio-small-a)" xlink:href="#mc-content-audio-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-audio-small-b"></use></g><path d="M13 19.01a1 1 0 1 1 2 0v1.98a1 1 0 1 1-2 0v-1.98zm12 0a1 1 0 1 1 2 0v1.98a1 1 0 1 1-2 0v-1.98zm-9-5.003c0-.556.444-1.007 1-1.007.552 0 1 .45 1 1.007v11.986C18 26.55 17.556 27 17 27c-.552 0-1-.45-1-1.007V14.007zm6 2.99c0-.55.444-.997 1-.997.552 0 1 .453 1 .997v6.006c0 .55-.444.997-1 .997-.552 0-1-.453-1-.997v-6.006zm-3 .994c0-.547.444-.991 1-.991a1 1 0 0 1 1 .99v4.02c0 .546-.444.99-1 .99a1 1 0 0 1-1-.99v-4.02z" fill="#637282"></path></g>'
        },
        "autodesk-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="31" width="74" height="100" rx="4"></rect><rect fill="#F7F9FA" x="43" y="30" width="74" height="100" rx="4"></rect></g><path d="M72.655 94.09l7.27-5.424A1.48 1.48 0 0 0 79.041 86h-3.389a.75.75 0 0 1-.705-1.006l3.477-9.563a.75.75 0 0 1 1.41 0l6.757 18.582A1.5 1.5 0 0 0 88 95h5.807a1.5 1.5 0 0 0 1.41-2.013l-10.909-30a1.5 1.5 0 0 0-1.41-.987h-7.54a1.5 1.5 0 0 0-1.41.986l-8.136 22.316a1.5 1.5 0 0 0 .146 1.324l4.536 7.07a1.5 1.5 0 0 0 2.16.393z" fill="#3BA0F3"></path><path d="M72.654 94.096l7.276-5.39A1.5 1.5 0 0 0 79.037 86h-12.93a.3.3 0 0 0-.252.462l4.643 7.24a1.5 1.5 0 0 0 2.156.394z" fill="#00D6B6"></path></g>'
        },
        "autodesk-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-autodesk-small-b" x="8" y="5" width="24" height="30" rx="1.5"></rect><filter x="-2.1%" y="-1.7%" width="104.2%" height="106.7%" filterUnits="objectBoundingBox" id="mc-content-autodesk-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-autodesk-small-a)" xlink:href="#mc-content-autodesk-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-autodesk-small-b"></use></g><path d="M17.885 25.696l2.423-1.807a.493.493 0 0 0-.294-.889h-1.13a.25.25 0 0 1-.235-.335l1.16-3.188a.25.25 0 0 1 .469 0l2.252 6.194A.5.5 0 0 0 23 26h1.936a.5.5 0 0 0 .47-.67l-3.636-10a.5.5 0 0 0-.47-.33h-2.514a.5.5 0 0 0-.47.329l-2.712 7.438a.5.5 0 0 0 .05.442l1.511 2.357a.5.5 0 0 0 .72.13z" fill="#3BA0F3"></path><path d="M17.885 25.699l2.425-1.797a.5.5 0 0 0-.298-.902h-4.31a.1.1 0 0 0-.084.154l1.548 2.413a.5.5 0 0 0 .719.132z" fill="#00D6B6"></path></g>'
        },
        "blank-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="31" width="74" height="100" rx="4"></rect><rect fill="#F7F9FA" x="43" y="30" width="74" height="100" rx="4"></rect></g></g>'
        },
        "blank-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-blank-small-b" x="8" y="5" width="24" height="30" rx="1.5"></rect><filter x="-2.1%" y="-1.7%" width="104.2%" height="106.7%" filterUnits="objectBoundingBox" id="mc-content-blank-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-blank-small-a)" xlink:href="#mc-content-blank-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-blank-small-b"></use></g></g>'
        },
        "code-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="31" width="74" height="100" rx="4"></rect><rect fill="#F7F9FA" x="43" y="30" width="74" height="100" rx="4"></rect></g><path d="M73.87 99.695a1.062 1.062 0 0 1-1.17.857l-.283-.037-.412-.082-.412-.083-.371-.082-.33-.124-.37-.082-.33-.124-.29-.082-.452-.206-.413-.165-.37-.206-.371-.248-.33-.206-.289-.247-.288-.247-.33-.33-.288-.288-.248-.371-.206-.33-.165-.37-.164-.372-.124-.412-.124-.412-.04-.412-.083-.454-.042-.412v-.865l.042-.412.04-.412.042-.413.083-.412.123-.412.124-.412.082-.37.124-.413.082-.412.042-.412.04-.412.042-.413v-.865l-.041-.412-.083-.412-.123-.371-.124-.371-.165-.33-.206-.288-.247-.289-.247-.206-.33-.247-.33-.165-.37-.165-.454-.082-.453-.083-.904-.04a1.045 1.045 0 0 1-.992-1.038v-1.388c0-.55.44-1.015.992-1.039l.904-.04.453-.082.453-.123.371-.124.33-.206.33-.206.247-.247.247-.289.206-.288.165-.33.124-.37.123-.372.083-.412.04-.412v-.866l-.04-.412-.041-.412-.042-.412-.082-.37-.124-.413-.082-.412-.124-.412-.123-.412-.083-.371-.041-.413-.041-.412-.042-.412v-.865l.042-.454.082-.412.041-.412.124-.412.124-.412.164-.371.165-.371.206-.33.248-.37.288-.29.33-.329.288-.247.289-.247.33-.206.37-.248.371-.206.413-.165.453-.206.288-.082.33-.124.371-.082.33-.124.37-.082.413-.083.707-.103c.542-.08 1.062.3 1.158.841l.185 1.038a1.005 1.005 0 0 1-.816 1.166l-.822.15-.371.123-.37.165-.29.123-.288.165-.288.206-.206.165-.289.289-.206.288-.206.33-.124.37-.123.372-.083.412-.082.453V71.624l.041.371.041.371.083.371.082.454.124.453.123.453.083.495.123.453.124.454.041.37.041.33.042.412v.825l-.042.412-.082.453-.124.371-.123.412-.165.371-.206.33-.206.37-.248.29-.288.288-.247.247-.289.247-.33.206-.33.206-.37.165-.371.165-.371.165-.412.124-.453.082.453.082.412.124.37.165.372.124.37.206.33.164.33.248.289.206.247.247.288.289.248.33.206.329.206.37.165.372.123.37.124.413.082.412.042.453V88.068l-.042.372-.04.37-.042.33-.124.454-.123.453-.083.453-.123.495-.124.453-.082.454-.083.37-.041.371-.041.413V93.88l.082.453.083.412.123.371.124.33.206.33.206.288.289.289.206.206.288.165.289.164.288.165.371.165.37.124.413.082.413.073c.546.096.91.618.813 1.16l-.185 1.038zm11.427-1.038a1.005 1.005 0 0 1 .816-1.166l.822-.15.371-.123.37-.165.29-.165.288-.164.288-.165.248-.206.247-.289.206-.288.206-.33.124-.33.123-.37.083-.413.082-.453V93.056l-.041-.413-.041-.37-.041-.371-.124-.454-.124-.453-.082-.495-.124-.453-.123-.453-.083-.454-.082-.33-.041-.37-.042-.371v-.825l.042-.453.082-.412.124-.412.123-.371.165-.371.206-.371.206-.33.289-.33.247-.288.247-.247.289-.206.33-.248.33-.164.37-.206.371-.124.371-.165.412-.124.453-.082-.453-.082-.412-.124-.37-.165-.372-.165-.37-.165-.33-.206-.33-.206-.289-.247-.247-.247-.247-.289-.289-.288-.206-.371-.206-.33-.165-.37-.123-.413-.124-.37-.082-.454-.042-.412V76.612l.042-.413.04-.33.083-.37.083-.454.123-.453.124-.495.082-.453.124-.453.124-.454.04-.37.042-.372.041-.37V70.8l-.082-.453-.083-.412-.123-.371-.124-.371-.206-.33-.206-.288-.247-.289-.248-.165-.288-.206-.289-.165-.288-.123-.371-.165-.37-.124-.823-.15a1.01 1.01 0 0 1-.816-1.165l.185-1.038c.097-.544.62-.92 1.158-.841l.707.103.412.083.371.082.33.124.37.082.33.124.33.082.412.206.413.165.37.206.371.248.33.206.289.247.288.247.289.33.288.288.247.371.206.33.207.37.164.372.124.412.082.412.083.412.082.412.042.454v.865l-.042.412-.04.412-.042.413-.083.37-.123.413-.083.412-.123.412-.124.412-.082.371-.042.412-.04.412-.042.412v.866l.082.412.042.412.123.371.124.371.206.33.165.288.247.289.247.247.33.206.33.206.412.124.412.123.453.083.904.04c.548.023.992.484.992 1.038v1.388c0 .55-.44 1.015-.992 1.039l-.904.04-.453.082-.412.082-.412.165-.33.165-.33.247-.247.206-.247.289-.165.288-.206.33-.124.37-.123.372-.042.412-.082.412v.865l.041.413.041.412.042.412.082.412.124.412.123.371.083.412.123.412.083.412.041.413.041.412.042.412v.865l-.042.412-.082.454-.083.412-.082.412-.124.412-.164.371-.207.371-.206.33-.247.37-.288.29-.289.329-.288.247-.289.247-.33.206-.37.248-.371.206-.413.165-.412.206-.33.082-.33.124-.37.082-.33.124-.37.082-.413.083-.707.103c-.542.08-1.062-.3-1.158-.841l-.185-1.038z" fill="#637282"></path></g>'
        },
        "code-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-code-small-b" x="8" y="5" width="24" height="30" rx="1.5"></rect><filter x="-2.1%" y="-1.7%" width="104.2%" height="106.7%" filterUnits="objectBoundingBox" id="mc-content-code-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-code-small-a)" xlink:href="#mc-content-code-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-code-small-b"></use></g><path d="M17.717 18.126a8.637 8.637 0 0 0-.068-.586c-.054-.387-.066-.49-.066-.608 0-.446.401-.727 1.084-.727v-1.5c-1.42 0-2.584.816-2.584 2.227 0 .218.015.342.08.816.032.224.048.355.058.49.06.796-.112 1.012-1.221 1.012v1.5c1.109 0 1.28.216 1.221 1.012-.01.135-.026.266-.057.49-.066.474-.08.598-.08.816 0 1.41 1.162 2.227 2.583 2.227v-1.5c-.683 0-1.084-.281-1.084-.727 0-.117.012-.22.066-.608.036-.254.055-.41.068-.586.059-.783-.099-1.422-.507-1.874.408-.452.566-1.091.507-1.874zM22.283 21.874c.013.175.032.332.068.586.054.387.066.49.066.608 0 .446-.401.727-1.084.727v1.5c1.42 0 2.584-.816 2.584-2.227 0-.218-.015-.342-.08-.816a7.383 7.383 0 0 1-.058-.49c-.06-.796.112-1.012 1.221-1.012v-1.5c-1.109 0-1.28-.216-1.221-1.012.01-.135.026-.266.057-.49.066-.474.08-.598.08-.816 0-1.41-1.162-2.227-2.583-2.227v1.5c.683 0 1.084.281 1.084.727 0 .117-.012.22-.066.608a8.637 8.637 0 0 0-.068.586c-.059.783.099 1.422.507 1.874-.408.452-.566 1.091-.507 1.874z" fill="#637282" fill-rule="nonzero"></path></g>'
        },
        "dlink-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<rect x="43" y="30" width="74" height="100" rx="4" fill="#F7F9FA" filter="url(#mc-content-dlink-large-a)"></rect><g clip-path="url(#mc-content-dlink-large-b)" fill="#637282"><path d="M67.469 82.216a7.25 7.25 0 0 0 10.253 10.253l3.987-3.988-2.279-2.278-3.987 3.987a4.028 4.028 0 0 1-5.696-5.696l5.696-5.696a4.028 4.028 0 0 1 5.696 0l1.709 1.709 2.278-2.279-1.708-1.708a7.25 7.25 0 0 0-10.253 0l-5.696 5.696z"></path><path d="M92.531 77.659a7.25 7.25 0 0 0-10.253-10.253l-3.987 3.987 2.279 2.279 3.987-3.988a4.028 4.028 0 0 1 5.696 5.696l-5.696 5.697a4.028 4.028 0 0 1-5.696 0l-1.71-1.71-2.277 2.28 1.708 1.708a7.25 7.25 0 0 0 10.253 0l5.696-5.696z"></path></g><defs><filter id="mc-content-dlink-large-a" x="43" y="30" width="74" height="101" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858824 0 0 0 0 0.870588 0 0 0 0 0.886275 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><clipPath id="mc-content-dlink-large-b"><path fill="#fff" transform="translate(65 65)" d="M0 0h30v30H0z"></path></clipPath></defs>'
        },
        "dlink-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6.5A1.5 1.5 0 0 1 9.5 5h21A1.5 1.5 0 0 1 32 6.5v27a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 8 33.5v-27z" fill="#F7F9FA" filter="url(#mc-content-dlink-small-a)"></path><g clip-path="url(#mc-content-dlink-small-b)" fill="#637282"><path d="M14.988 20.886a2.9 2.9 0 1 0 4.1 4.101l1.596-1.595-.912-.91-1.595 1.594a1.611 1.611 0 0 1-2.278-2.278l2.278-2.279c.63-.629 1.65-.629 2.279 0l.683.684.912-.912-.684-.683a2.9 2.9 0 0 0-4.101 0l-2.278 2.278z"></path><path d="M25.013 19.064a2.9 2.9 0 1 0-4.102-4.102l-1.594 1.595.91.912 1.596-1.595a1.611 1.611 0 1 1 2.278 2.278l-2.278 2.279c-.63.629-1.65.629-2.279 0l-.683-.684-.912.911.684.684a2.9 2.9 0 0 0 4.101 0l2.279-2.278z"></path></g><defs><filter id="mc-content-dlink-small-a" x="8" y="5" width="24" height="31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858859 0 0 0 0 0.871766 0 0 0 0 0.884673 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><clipPath id="mc-content-dlink-small-b"><path fill="#fff" transform="translate(14 14)" d="M0 0h12v12H0z"></path></clipPath></defs>'
        },
        "docx-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<rect x="43" y="30" width="74" height="100" rx="4" fill="#F7F9FA" filter="url(#mc-content-docx-large-a)"></rect><path d="M62 65l21-3v34l-21-3V65z" fill="#2B579A"></path><path d="M81 65h16a1 1 0 0 1 1 1v26a1 1 0 0 1-1 1H81V65z" fill="#2B579A"></path><path fill="#fff" d="M83 67h13v24H83z"></path><path fill="#2B579A" d="M82 70h11v2H82zM82 76h11v-2H82zM81 80h12v-2H81zM81 84h12v-2H81zM82 88h11v-2H82z"></path><path d="M80 73l-2.812 12h-2.655l-1.766-7.699a7.189 7.189 0 0 1-.17-1.347h-.03a9.149 9.149 0 0 1-.193 1.347L70.564 85h-2.767L65 73h2.619l1.498 7.992c.064.34.111.797.141 1.372h.045c.02-.43.091-.898.215-1.406L71.447 73h2.566l1.744 8.059c.064.295.12.725.17 1.288h.03c.02-.44.072-.887.156-1.339L77.582 73H80z" fill="#fff"></path><defs><filter id="mc-content-docx-large-a" x="43" y="30" width="74" height="101" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858824 0 0 0 0 0.870588 0 0 0 0 0.886275 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>'
        },
        "docx-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6.5A1.5 1.5 0 0 1 9.5 5h21A1.5 1.5 0 0 1 32 6.5v27a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 8 33.5v-27z" fill="#F7F9FA" filter="url(#mc-content-docx-small-a)"></path><path d="M13 14l8-1v14l-8-1V14z" fill="#2B579A"></path><path d="M20 14h6a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6V14z" fill="#2B579A"></path><path fill="#fff" d="M21 15h5v9h-5z"></path><path fill="#2B579A" d="M20 23h5v-1h-5zM20 17h5v-1h-5zM20 19h5v-1h-5zM20 21h5v-1h-5z"></path><path d="M14 17l1 5h1l1-3.5 1 3.5h1l1-5h-1l-.5 3.5-1-3.5h-1l-1 3.5L15 17h-1z" fill="#fff"></path><defs><filter id="mc-content-docx-small-a" x="8" y="5" width="24" height="31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858859 0 0 0 0 0.871766 0 0 0 0 0.884673 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>'
        },
        "exe-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="44" width="74" height="74" rx="4"></rect><rect fill="#F7F9FA" x="43" y="43" width="74" height="74" rx="4"></rect></g><path d="M70.552 87.868l-3.559-.532c-.544-.08-1.086-.588-1.21-1.13l-.56-2.462c-.123-.543.155-1.24.6-1.543l2.974-2.021c.092-.701.249-1.382.463-2.036l-1.802-3.11c-.275-.477-.217-1.216.13-1.65l1.576-1.974c.347-.436 1.065-.653 1.58-.493l3.433 1.064a11.252 11.252 0 0 1 1.881-.907l1.309-3.348c.2-.512.814-.928 1.37-.928h2.526c.557 0 1.174.426 1.37.928l1.309 3.348c.658.245 1.287.55 1.88.907l3.434-1.064c.525-.163 1.233.058 1.58.493l1.576 1.974c.347.435.4 1.183.13 1.65l-1.802 3.11c.214.654.37 1.335.463 2.036l2.973 2.02c.455.31.724 1.002.6 1.544l-.56 2.462c-.123.543-.675 1.05-1.21 1.13l-3.558.532c-.383.583-.819 1.128-1.3 1.629l.273 3.587c.042.548-.33 1.19-.832 1.431l-2.274 1.097c-.502.242-1.243.127-1.638-.241l-2.634-2.451a11.442 11.442 0 0 1-2.086 0l-2.634 2.45c-.403.376-1.137.484-1.638.242l-2.274-1.097c-.502-.242-.873-.894-.832-1.431l.274-3.587a11.352 11.352 0 0 1-1.301-1.63zM80 86.68a5.013 5.013 0 1 0 0-10.026 5.013 5.013 0 0 0 0 10.026z" fill="#637282"></path></g>'
        },
        "exe-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-exe-small-b" x="8" y="8" width="24" height="24" rx="1.5"></rect><filter x="-2.1%" y="-2.1%" width="104.2%" height="108.3%" filterUnits="objectBoundingBox" id="mc-content-exe-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-exe-small-a)" xlink:href="#mc-content-exe-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-exe-small-b"></use></g><path d="M16.85 21.956l-1.018-.152a.787.787 0 0 1-.606-.558l-.116-.509a.788.788 0 0 1 .304-.765l.852-.579c.03-.233.083-.46.154-.678l-.516-.891a.787.787 0 0 1 .058-.821l.326-.408a.788.788 0 0 1 .788-.24l.983.305c.198-.119.408-.22.627-.302l.375-.959a.788.788 0 0 1 .678-.466h.522c.274 0 .578.21.678.466l.375.959c.22.082.43.183.627.302l.983-.304a.788.788 0 0 1 .788.239l.326.408c.17.214.196.583.058.821l-.516.89c.071.219.124.446.154.68l.852.578c.228.156.364.5.304.765l-.116.51a.787.787 0 0 1-.606.557l-1.019.152a3.784 3.784 0 0 1-.433.543l.078 1.027a.788.788 0 0 1-.408.715l-.47.227a.787.787 0 0 1-.814-.126l-.754-.702a3.814 3.814 0 0 1-.696 0l-.754.702a.787.787 0 0 1-.813.126l-.471-.227a.788.788 0 0 1-.408-.715l.078-1.027a3.784 3.784 0 0 1-.433-.543zM20 21.56a1.671 1.671 0 1 0 0-3.342 1.671 1.671 0 0 0 0 3.342z" fill="#637282"></path></g>'
        },
        "fl-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="31" width="74" height="100" rx="4"></rect><rect fill="#F7F9FA" x="43" y="30" width="74" height="100" rx="4"></rect></g><path d="M74.744 82.656h7.464v-2.592h-7.464V74.28h7.992v-2.64H71.384V90h3.36v-7.344zM85.616 90h3.24V71.088h-3.24V90z" fill="#F25123"></path></g>'
        },
        "fl-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-fl-small-b" x="8" y="5" width="24" height="30" rx="1.5"></rect><filter x="-2.1%" y="-1.7%" width="104.2%" height="106.7%" filterUnits="objectBoundingBox" id="mc-content-fl-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-fl-small-a)" xlink:href="#mc-content-fl-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-fl-small-b"></use></g><path d="M18.42 21.05h2.99v-1.23h-2.99V17.6h3.17v-1.25h-4.81V24h1.64v-2.95zm4.3 2.95h1.59v-7.88h-1.59V24z" fill="#F25123"></path></g>'
        },
        "folder_app-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M74.955 53h50.04A3.002 3.002 0 0 1 128 56.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 114.995V45.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#71B9F4"></path><path d="M74.955 52h50.04A3.002 3.002 0 0 1 128 55.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 113.995V44.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#92CEFF"></path><path d="M88.898 77.44s-5.414.263-7.328.349c-1.184.057-1.834-.957-.782-2.006.804-.8 1.096-1.028.957-2.527-.16-1.713-1.878-2.27-3.288-2.256-1.476.015-3.09.8-3.566 2.213-.314.928-.306 1.863.505 2.456.438.328 1.417.806.321 1.684-.592.472-6.546-.085-6.546-.085s-.264 5.11-.074 6.56c.11.835 1.14 1.228 1.82.321 1.045-1.392 3.945-.485 4.091 2.249.154 2.87-2.908 3.312-3.565 2.191-.614-1.05-2.353-1.306-2.433.029-.117 2.077.855 8.687.855 8.687s3.916.921 5.677.643c.818-.136 1.198-1.55.438-2.213-.701-.607-.847-3.87 2.799-3.491 2.85.293 2.374 2.777 1.65 3.234-.693.435-.664 1.791.79 2.177 1.987.528 8.008-.778 8.008-.778S88.43 92 88.7 90.417c.285-1.692 2.228-.671 2.47-.35 1.57 2.091 4.829.95 4.829-2.563 0-5.11-4.654-4.247-5.093-3.012-.482 1.349-2.082 1.006-2.257.171-.41-1.927.248-7.224.248-7.224z" fill="#3BA0F3"></path></g>'
        },
        "folder_app-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M18.422 11h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 32 5 31.331 5 30.507V9.493C5 8.663 5.671 8 6.5 8h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#71B9F4"></path><path d="M18.422 10h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 31 5 30.331 5 29.507V8.493C5 7.663 5.671 7 6.5 7h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#92CEFF"></path><path d="M22.37 17.385s-2.006.098-2.715.13c-.438.02-.679-.355-.29-.744.299-.296.407-.38.355-.935-.06-.635-.695-.841-1.217-.836-.547.005-1.145.296-1.321.82-.116.343-.114.69.187.91.162.12.525.298.119.623-.22.175-2.425-.032-2.425-.032s-.097 1.893-.027 2.43c.04.31.422.455.674.119.387-.516 1.461-.18 1.515.833.057 1.063-1.077 1.227-1.32.812-.228-.39-.872-.484-.901.01-.044.77.316 3.218.316 3.218s1.45.34 2.103.238c.303-.05.444-.574.162-.82-.26-.225-.314-1.433 1.037-1.293 1.055.109.88 1.029.611 1.198-.257.161-.246.663.293.806.736.196 2.965-.288 2.965-.288s-.295-1.806-.194-2.393c.105-.626.825-.248.914-.13.582.775 1.789.352 1.789-.948 0-1.893-1.724-1.573-1.886-1.116-.179.5-.771.373-.836.063-.152-.713.092-2.675.092-2.675z" fill="#3BA0F3"></path></g>'
        },
        "folder_camera_upload-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M74.955 52h50.04A3.002 3.002 0 0 1 128 55.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 113.995V44.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#C996FF"></path><path d="M74.955 51h50.04A3.002 3.002 0 0 1 128 54.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 112.995V43.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#D6B9F6"></path><g transform="translate(62 71)"><rect fill="#BA83F5" width="36" height="25" rx="2"></rect><rect fill="#D6B9F6" x="3" y="3" width="7" height="3" rx="1.5"></rect><circle fill="#D6B9F6" cx="19" cy="13" r="8"></circle></g></g>'
        },
        "folder_camera_upload-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M18.422 11h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 32 5 31.331 5 30.507V9.493C5 8.663 5.671 8 6.5 8h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#C996FF"></path><path d="M18.422 10h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 31 5 30.331 5 29.507V8.493C5 7.663 5.671 7 6.5 7h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#D7B9F6"></path><g transform="translate(14 16)"><rect fill="#BA83F5" width="12" height="9" rx="1"></rect><rect fill="#D6B9F6" x="1" y="1" width="2" height="1" rx=".5"></rect><circle fill="#D6B9F6" cx="6.5" cy="4.5" r="2.5"></circle></g></g>'
        },
        "folder_confidential_admin_view-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M74.955 53h50.04A3.002 3.002 0 0 1 128 56.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 114.995V45.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#71B9F4"></path><path d="M74.955 52h50.04A3.002 3.002 0 0 1 128 55.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 113.995V44.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#92CEFF"></path><g fill="#3BA0F3"><path d="M80 103c-9.941 0-18-8.059-18-18s8.059-18 18-18 18 8.059 18 18-8.059 18-18 18zm0-4.2c7.622 0 13.8-6.178 13.8-13.8 0-7.622-6.178-13.8-13.8-13.8-7.622 0-13.8 6.178-13.8 13.8 0 7.622 6.178 13.8 13.8 13.8z"></path><path d="M70 82h20v6H70z"></path></g></g>'
        },
        "folder_confidential_admin_view-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M18.422 11h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 32 5 31.331 5 30.507V9.493C5 8.663 5.671 8 6.5 8h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#71B9F4"></path><path d="M18.422 10h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 31 5 30.331 5 29.507V8.493C5 7.663 5.671 7 6.5 7h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#92CEFF"></path><g fill="#3BA0F3"><path d="M20 27a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-1.4a4.6 4.6 0 1 0 0-9.2 4.6 4.6 0 0 0 0 9.2z"></path><path d="M17 20h6v2h-6z"></path></g></g>'
        },
        "folder_confidential-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M74.955 53h50.04A3.002 3.002 0 0 1 128 56.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 114.995V45.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#71B9F4"></path><path d="M74.955 52h50.04A3.002 3.002 0 0 1 128 55.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 113.995V44.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#92CEFF"></path><path d="M80 103c-9.941 0-18-8.059-18-18s8.059-18 18-18 18 8.059 18 18-8.059 18-18 18zM69 82v6h22v-6H69z" fill="#3BA0F3"></path></g>'
        },
        "folder_confidential-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M18.422 11h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 32 5 31.331 5 30.507V9.493C5 8.663 5.671 8 6.5 8h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#71B9F4"></path><path d="M18.422 10h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 31 5 30.331 5 29.507V8.493C5 7.663 5.671 7 6.5 7h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#92CEFF"></path><path d="M20 27a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-3-7v2h6v-2h-6z" fill="#3BA0F3"></path></g>'
        },
        "folder_dropbox-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M74.955 53h50.04A3.002 3.002 0 0 1 128 56.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 114.995V45.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#71B9F4"></path><path d="M74.955 52h50.04A3.002 3.002 0 0 1 128 55.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 113.995V44.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#92CEFF"></path><path d="M90.066 82.743l9.934 6.35-10.004 6.394L80 89.097l-9.996 6.39L60 89.093l9.934-6.35L60 76.394 70.004 70 80 76.39 89.996 70 100 76.394l-9.934 6.35zm-.14 0L80 76.4l-9.926 6.344L80 89.088l9.926-6.345zM70.068 97.606l10.004-6.394 10.004 6.394L80.072 104l-10.004-6.394z" fill="#3BA0F3"></path></g>'
        },
        "folder_dropbox-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M18.422 11h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 32 5 31.331 5 30.507V9.493C5 8.663 5.671 8 6.5 8h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#71B9F4"></path><path d="M18.422 10h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 31 5 30.331 5 29.507V8.493C5 7.663 5.671 7 6.5 7h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#92CEFF"></path><path d="M23.02 20.123L26 22.177l-3.001 2.069L20 22.179l-2.999 2.067L14 22.177l2.98-2.054L14 18.069 17.001 16 20 18.067 22.999 16 26 18.069l-2.98 2.054zm-.042 0L20 18.07l-2.978 2.053L20 22.175l2.978-2.052zM17.02 24.93l3.002-2.068 3 2.068-3 2.069-3.002-2.069z" fill="#3BA0F3"></path></g>'
        },
        "folder_dropdown-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M74.955 53h50.04A3.002 3.002 0 0 1 128 56.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 114.995V45.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#71B9F4"></path><path d="M74.955 52h50.04A3.002 3.002 0 0 1 128 55.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 113.995V44.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#92CEFF"></path><path fill="#3BA0F3" d="M70 80h20L80 92.5z"></path></g>'
        },
        "folder_dropdown-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M18.422 11h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 32 5 31.331 5 30.507V9.493C5 8.663 5.671 8 6.5 8h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#71B9F4"></path><path d="M18.422 10h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 31 5 30.331 5 29.507V8.493C5 7.663 5.671 7 6.5 7h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#92CEFF"></path><path fill="#3BA0F3" d="M16 19h8l-4 5z"></path></g>'
        },
        "folder_project-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M74.955 53h50.04A3.002 3.002 0 0 1 128 56.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 114.995V45.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#71B9F4"></path><path d="M74.955 52h50.04A3.002 3.002 0 0 1 128 55.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 113.995V44.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#92CEFF"></path><path d="M70.065 77.987c-.347.21-.78.996-.78 1.432V90.58c0 .46.414 1.21.78 1.432l9.173 5.581c.339.207 1.182.209 1.524 0l9.173-5.58c.347-.212.78-.997.78-1.433V79.42c0-.46-.414-1.21-.78-1.432l-9.173-5.581c-.339-.207-1.182-.209-1.524 0l-9.173 5.58zm7.786-9.465c1.187-.702 3.133-.69 4.298 0l10.702 6.332c1.187.702 2.149 2.381 2.149 3.814v12.664c0 1.404-.984 3.125-2.15 3.814l-10.7 6.332c-1.188.702-3.134.69-4.3 0l-10.7-6.332c-1.188-.702-2.15-2.381-2.15-3.814V78.668c0-1.404.984-3.125 2.15-3.814l10.7-6.332z" fill="#3BA0F3" fill-rule="nonzero"></path></g>'
        },
        "folder_project-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M18.422 11h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 32 5 31.331 5 30.507V9.493C5 8.663 5.671 8 6.5 8h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#71B9F4"></path><path d="M18.422 10h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 31 5 30.331 5 29.507V8.493C5 7.663 5.671 7 6.5 7h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#92CEFF"></path><path d="M16.688 18.231c-.115.068-.26.322-.26.463v3.612c0 .148.138.39.26.463l3.058 1.806c.113.066.394.067.508 0l3.058-1.806c.115-.068.26-.322.26-.463v-3.612c0-.148-.138-.39-.26-.463l-3.058-1.806c-.113-.066-.394-.067-.508 0l-3.058 1.806zm2.596-3.062c.395-.227 1.044-.223 1.432 0l3.568 2.048c.395.228.716.77.716 1.234v4.098c0 .454-.328 1.01-.716 1.234l-3.568 2.048c-.395.227-1.044.223-1.432 0l-3.568-2.048c-.395-.228-.716-.77-.716-1.234V18.45c0-.454.328-1.01.716-1.234l3.568-2.048z" fill="#3BA0F3" fill-rule="nonzero"></path></g>'
        },
        "folder_shared_read_only-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M74.955 53h50.04A3.002 3.002 0 0 1 128 56.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 114.995V45.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#71B9F4"></path><path d="M74.955 52h50.04A3.002 3.002 0 0 1 128 55.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 113.995V44.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#92CEFF"></path><path d="M79.5 95.134l1.517-3.944c.9-2.343 3.658-4.241 6.184-4.241h2.088c2.514 0 5.286 1.906 6.184 4.24l1.15 2.992c.396 1.029-.185 1.862-1.282 1.862H63.66c-1.104 0-1.676-.839-1.283-1.862l1.15-2.991c.902-2.343 3.66-4.241 6.185-4.241h2.088c2.514 0 5.286 1.906 6.184 4.24l1.517 3.945zm-8.503-11.177a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm17 0a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" fill="#3BA0F3"></path><g><path fill="#3BA0F3" d="M106 66h11v6h-11z"></path><path d="M108.833 67.286h5.334v-4.572c0-1.502-1.197-2.714-2.667-2.714-1.47 0-2.667 1.212-2.667 2.714v4.572z" stroke="#3BA0F3" stroke-width="2"></path></g></g>'
        },
        "folder_shared_read_only-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M18.422 11h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 32 5 31.331 5 30.507V9.493C5 8.663 5.671 8 6.5 8h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#71B9F4"></path><path d="M18.422 10h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 31 5 30.331 5 29.507V8.493C5 7.663 5.671 7 6.5 7h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#92CEFF"></path><path fill="#3BA0F3" d="M28 15h5v3h-5z"></path><path d="M31.492 15.5h-2.159v-1.9c0-.609.485-1.1 1.08-1.1.595 0 1.08.491 1.08 1.1v1.9z" stroke="#3BA0F3"></path><path d="M20.013 25.14l-.5-1.302C19.12 22.82 17.918 22 16.824 22h-.907c-1.087 0-2.297.823-2.687 1.838l-.454 1.18c-.197.514.088.937.642.937h13.189c.554 0 .84-.42.641-.937l-.453-1.18C26.404 22.82 25.202 22 24.109 22H23.2c-1.087 0-2.297.823-2.687 1.838l-.5 1.303zM16.5 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#3BA0F3"></path></g>'
        },
        "folder_shared-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M74.955 53h50.04A3.002 3.002 0 0 1 128 56.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 114.995V45.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#71B9F4"></path><path d="M74.955 52h50.04A3.002 3.002 0 0 1 128 55.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 113.995V44.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#92CEFF"></path><path d="M79.5 95.134l1.517-3.944c.9-2.343 3.658-4.241 6.184-4.241h2.088c2.514 0 5.286 1.906 6.184 4.24l1.15 2.992c.396 1.029-.185 1.862-1.282 1.862H63.66c-1.104 0-1.676-.839-1.283-1.862l1.15-2.991c.902-2.343 3.66-4.241 6.185-4.241h2.088c2.514 0 5.286 1.906 6.184 4.24l1.517 3.945zm-8.503-11.177a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm17 0a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" fill="#3BA0F3"></path></g>'
        },
        "folder_shared-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M18.422 11h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 32 5 31.331 5 30.507V9.493C5 8.663 5.671 8 6.5 8h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#71B9F4"></path><path d="M18.422 10h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 31 5 30.331 5 29.507V8.493C5 7.663 5.671 7 6.5 7h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#92CEFF"></path><path d="M20.013 25.14l-.5-1.302C19.12 22.82 17.918 22 16.824 22h-.907c-1.087 0-2.297.823-2.687 1.838l-.454 1.18c-.197.514.088.937.642.937h13.189c.554 0 .84-.42.641-.937l-.453-1.18C26.404 22.82 25.202 22 24.109 22H23.2c-1.087 0-2.297.823-2.687 1.838l-.5 1.303zM16.5 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#3BA0F3"></path></g>'
        },
        "folder_space-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M77.955 53h50.04A3.002 3.002 0 0 1 131 56.007v58.988a4.008 4.008 0 0 1-4.003 4.005H39.003a3.99 3.99 0 0 1-2.831-1.173A4 4 0 0 1 35 114.995V45.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#71B9F4"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M77.955 52h50.04A3.002 3.002 0 0 1 131 55.007v58.988a4.008 4.008 0 0 1-4.003 4.005H39.003a3.99 3.99 0 0 1-2.831-1.173A4 4 0 0 1 35 113.995V44.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#92CEFF"></path><path d="M83 100.739l13-6.867-13-7.325-13 7.325 13 6.867z" fill="#3BA0F3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M96 91.556l-13-7.374-13 7.374V76.807l13-7.374 13 7.374v14.749z" fill="#3BA0F3"></path>'
        },
        "folder_space-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M18.422 11h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 32 5 31.331 5 30.507V9.493C5 8.663 5.671 8 6.5 8h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#71B9F4"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.422 10h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 31 5 30.331 5 29.507V8.493C5 7.663 5.671 7 6.5 7h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#92CEFF"></path><path d="M20 27l5-2.632-5-2.808-5 2.808L20 27z" fill="#3BA0F3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25 23.48l-5-2.827-5 2.827v-5.653L20 15l5 2.827v5.653z" fill="#3BA0F3"></path>'
        },
        "folder_team_member_child-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M74.955 52h50.04A3.002 3.002 0 0 1 128 55.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 113.995V44.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#C996FF"></path><path d="M74.955 51h50.04A3.002 3.002 0 0 1 128 54.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 112.995V43.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#D6B9F6"></path></g>'
        },
        "folder_team_member_child-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M18.422 11h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 32 5 31.331 5 30.507V9.493C5 8.663 5.671 8 6.5 8h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#C996FF"></path><path d="M18.422 10h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 31 5 30.331 5 29.507V8.493C5 7.663 5.671 7 6.5 7h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#D6B9F6"></path></g>'
        },
        "folder_team_member-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M74.955 52h50.04A3.002 3.002 0 0 1 128 55.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 113.995V44.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#C996FF"></path><path d="M74.955 51h50.04A3.002 3.002 0 0 1 128 54.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 112.995V43.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#D6B9F6"></path><path d="M80 81a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm-7.92 7.131C73.057 85.85 75.852 84 78.343 84h3.316c2.483 0 5.288 1.854 6.261 4.131l1.293 3.026c.435 1.018-.11 1.843-1.203 1.843H71.991c-1.1 0-1.636-.83-1.203-1.843l1.293-3.026z" fill="#BA83F5"></path></g>'
        },
        "folder_team_member-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M18.422 11h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 32 5 31.331 5 30.507V9.493C5 8.663 5.671 8 6.5 8h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#C996FF"></path><path d="M18.422 10h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 31 5 30.331 5 29.507V8.493C5 7.663 5.671 7 6.5 7h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#D7B9F6"></path><path d="M20 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-3.177 3.838C17.218 22.823 18.42 22 19.513 22h.975c1.09 0 2.292.82 2.689 1.838l.458 1.18c.202.517-.088.937-.632.937h-6.006c-.55 0-.832-.423-.632-.937l.458-1.18z" fill="#BA83F5"></path></g>'
        },
        "folder_team_read_only-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M74.955 53h50.04A3.002 3.002 0 0 1 128 56.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 114.995V45.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#71B9F4"></path><path d="M74.955 52h50.04A3.002 3.002 0 0 1 128 55.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 113.995V44.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#92CEFF"></path><path d="M82 92h2V80h11v18H66V72h16v20zM70 82v2h3v-2h-3zm0 4v2h3v-2h-3zm0 4v2h3v-2h-3zm5-8v2h3v-2h-3zm-5-4v2h3v-2h-3zm5 0v2h3v-2h-3zm0 8v2h3v-2h-3zm13 0v2h3v-2h-3zm-13 4v2h3v-2h-3zm13 0v2h3v-2h-3z" fill="#3BA0F3"></path><g><path fill="#3BA0F3" d="M107 67h11v6h-11z"></path><path d="M109.833 68.286h5.334v-4.572c0-1.502-1.197-2.714-2.667-2.714-1.47 0-2.667 1.212-2.667 2.714v4.572z" stroke="#3BA0F3" stroke-width="2"></path></g></g>'
        },
        "folder_team_read_only-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M18.422 11h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 32 5 31.331 5 30.507V9.493C5 8.663 5.671 8 6.5 8h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#71B9F4"></path><path d="M18.422 10h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 31 5 30.331 5 29.507V8.493C5 7.663 5.671 7 6.5 7h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#92CEFF"></path><path d="M22 24v-5h5v7H13V15h7v9h2zm-7-7v1h1v-1h-1zm2 0v1h1v-1h-1zm-2 2v1h1v-1h-1zm2 0v1h1v-1h-1zm-2 2v1h1v-1h-1zm2 0v1h1v-1h-1zm-2 2v1h1v-1h-1zm2 0v1h1v-1h-1zm7-2v1h1v-1h-1zm0 2v1h1v-1h-1zM28 15h5v3h-5z" fill="#3BA0F3"></path><path d="M31.492 15.5h-2.159v-1.9c0-.609.485-1.1 1.08-1.1.595 0 1.08.491 1.08 1.1v1.9z" stroke="#3BA0F3"></path></g>'
        },
        "folder_team-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M74.955 53h50.04A3.002 3.002 0 0 1 128 56.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 114.995V45.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#71B9F4"></path><path d="M74.955 52h50.04A3.002 3.002 0 0 1 128 55.007v58.988a4.008 4.008 0 0 1-4.003 4.005H36.003A4.002 4.002 0 0 1 32 113.995V44.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#92CEFF"></path><g fill="#3BA0F3"><path d="M82 92h2V80h11v18H66V72h16v20zM70 82v2h3v-2h-3zm0 4v2h3v-2h-3zm0 4v2h3v-2h-3zm5-8v2h3v-2h-3zm-5-4v2h3v-2h-3zm5 0v2h3v-2h-3zm0 8v2h3v-2h-3zm13 0v2h3v-2h-3zm-13 4v2h3v-2h-3zm13 0v2h3v-2h-3z"></path></g></g>'
        },
        "folder_team-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M18.422 11h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 32 5 31.331 5 30.507V9.493C5 8.663 5.671 8 6.5 8h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#71B9F4"></path><path d="M18.422 10h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 31 5 30.331 5 29.507V8.493C5 7.663 5.671 7 6.5 7h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#92CEFF"></path><path d="M22 24v-5h5v7H13V15h7v9h2zm-7-7v1h1v-1h-1zm2 0v1h1v-1h-1zm-2 2v1h1v-1h-1zm2 0v1h1v-1h-1zm-2 2v1h1v-1h-1zm2 0v1h1v-1h-1zm-2 2v1h1v-1h-1zm2 0v1h1v-1h-1zm7-2v1h1v-1h-1zm0 2v1h1v-1h-1z" fill="#3BA0F3"></path></g>'
        },
        "folder-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M77.955 53h50.04A3.002 3.002 0 0 1 131 56.007v58.988a4.008 4.008 0 0 1-4.003 4.005H39.003A4.002 4.002 0 0 1 35 114.995V45.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#71B9F4"></path><path d="M77.955 52h50.04A3.002 3.002 0 0 1 131 55.007v58.988a4.008 4.008 0 0 1-4.003 4.005H39.003A4.002 4.002 0 0 1 35 113.995V44.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z" fill="#92CEFF"></path></g>'
        },
        "folder-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M18.422 11h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 32 5 31.331 5 30.507V9.493C5 8.663 5.671 8 6.5 8h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#71B9F4"></path><path d="M18.422 10h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 31 5 30.331 5 29.507V8.493C5 7.663 5.671 7 6.5 7h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#92CEFF"></path></g>'
        },
        "font-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="31" width="74" height="100" rx="4"></rect><rect fill="#F7F9FA" x="43" y="30" width="74" height="100" rx="4"></rect></g><path d="M71 90V69a1 1 0 0 0-1-1h-3v-3h25l.863 6H90l-1.703-2.555a1 1 0 0 0-.832-.445H79a1 1 0 0 0-1 1v9h10v3H78v9a1 1 0 0 0 1 1h3v3H67v-3h3a1 1 0 0 0 1-1z" fill="#637282"></path></g>'
        },
        "font-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-font-small-b" x="8" y="5" width="24" height="30" rx="1.5"></rect><filter x="-2.1%" y="-1.7%" width="104.2%" height="106.7%" filterUnits="objectBoundingBox" id="mc-content-font-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-font-small-a)" xlink:href="#mc-content-font-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-font-small-b"></use></g><path d="M20 20h3v1h-3v4h-3v-9h3v4zm3-5h1.623L25 18h-1.252l-.874-1.5-.291-.5H16v-1h7zm-7 10h5v1h-5v-1z" fill="#637282"></path></g>'
        },
        "framerx-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="31" width="74" height="100" rx="4"></rect><rect fill="#F7F9FA" x="43" y="30" width="74" height="100" rx="4"></rect></g><g fill="#3BA0F3" fill-rule="nonzero"><path d="M67 61h26v13H80zM67 74h13l13 13H67zM67 87h13v13z"></path></g></g>'
        },
        "framerx-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-framerx-small-b" x="8" y="5" width="24" height="30" rx="1.5"></rect><filter x="-2.1%" y="-1.7%" width="104.2%" height="106.7%" filterUnits="objectBoundingBox" id="mc-content-framerx-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-framerx-small-a)" xlink:href="#mc-content-framerx-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-framerx-small-b"></use></g><g fill="#3BA0F3" fill-rule="nonzero"><path d="M16 15h8v4h-4zM16 19h4l4 4h-8zM16 23h4v4z"></path></g></g>'
        },
        "gdoc-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<rect x="43" y="30" width="74" height="100" rx="4" fill="#F7F9FA" filter="url(#mc-content-gdoc-large-a)"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M67.5 64a3.5 3.5 0 0 0-3.5 3.5v25a3.5 3.5 0 0 0 3.5 3.5h25a3.5 3.5 0 0 0 3.5-3.5v-25a3.5 3.5 0 0 0-3.5-3.5h-25zM89 71H71v4h18v-4zm-18 7h18v4H71v-4zm13 7H71v4h13v-4z" fill="#4285F4"></path><defs><filter id="mc-content-gdoc-large-a" x="43" y="30" width="74" height="101" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858824 0 0 0 0 0.870588 0 0 0 0 0.886275 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>'
        },
        "gdoc-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6.5A1.5 1.5 0 0 1 9.5 5h21A1.5 1.5 0 0 1 32 6.5v27a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 8 33.5v-27z" fill="#F7F9FA" filter="url(#mc-content-gdoc-small-a)"></path><rect x="13" y="13" width="14" height="14" rx="1.5" fill="#4285F4"></rect><path d="M24 17h-8v1h8v-1zM24 19h-8v1h8v-1zM21 21h-5v1h5v-1z" fill="#fff"></path><defs><filter id="mc-content-gdoc-small-a" x="8" y="5" width="24" height="31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858859 0 0 0 0 0.871766 0 0 0 0 0.884673 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>'
        },
        "gsheet-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<rect x="43" y="30" width="74" height="100" rx="4" fill="#F7F9FA" filter="url(#mc-content-gsheet-large-a)"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M64 67.5a3.5 3.5 0 0 1 3.5-3.5h25a3.5 3.5 0 0 1 3.5 3.5v25a3.5 3.5 0 0 1-3.5 3.5h-25a3.5 3.5 0 0 1-3.5-3.5v-25zm11 .5h3v7h14v3H78v14h-3V78h-7v-3h7v-7z" fill="#0F9D58"></path><defs><filter id="mc-content-gsheet-large-a" x="43" y="30" width="74" height="101" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858824 0 0 0 0 0.870588 0 0 0 0 0.886275 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>'
        },
        "gsheet-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6.5A1.5 1.5 0 0 1 9.5 5h21A1.5 1.5 0 0 1 32 6.5v27a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 8 33.5v-27z" fill="#F7F9FA" filter="url(#mc-content-gsheet-small-a)"></path><rect x="13" y="13" width="14" height="14" rx="1.5" fill="#0F9D58"></rect><path d="M19 15h-1v10h1V15z" fill="#fff"></path><path d="M25 18H15v1h10v-1z" fill="#fff"></path><defs><filter id="mc-content-gsheet-small-a" x="8" y="5" width="24" height="31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858859 0 0 0 0 0.871766 0 0 0 0 0.884673 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>'
        },
        "gslides-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<rect x="30" y="43" width="100" height="74" rx="4" fill="#F7F9FA" filter="url(#mc-content-gslides-large-a)"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M67.5 64a3.5 3.5 0 0 0-3.5 3.5v25a3.5 3.5 0 0 0 3.5 3.5h25a3.5 3.5 0 0 0 3.5-3.5v-25a3.5 3.5 0 0 0-3.5-3.5h-25zM92 87V73H68v14h24z" fill="#F4B400"></path><path fill="#fff" d="M68 73h24v14H68z"></path><defs><filter id="mc-content-gslides-large-a" x="30" y="43" width="100" height="75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858824 0 0 0 0 0.870588 0 0 0 0 0.886275 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>'
        },
        "gslides-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5A1.5 1.5 0 0 1 6.5 8h27A1.5 1.5 0 0 1 35 9.5v21a1.5 1.5 0 0 1-1.5 1.5h-27A1.5 1.5 0 0 1 5 30.5v-21z" fill="#F7F9FA" filter="url(#mc-content-gslides-small-a)"></path><rect x="13" y="13" width="14" height="14" rx="1.5" fill="#F4B400"></rect><path d="M25 17H15v6h10v-6z" fill="#fff"></path><defs><filter id="mc-content-gslides-small-a" x="5" y="8" width="30" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858859 0 0 0 0 0.871766 0 0 0 0 0.884673 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>'
        },
        "image-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g transform="translate(0 -1)"><rect fill="#DBDEE2" x="43" y="44" width="74" height="74" rx="4"></rect><rect fill="#F7F9FA" x="43" y="43" width="74" height="74" rx="4"></rect></g><path d="M73.51 80.3c.351-.423.917-.42 1.27.015l9.633 11.877c.35.43.927.444 1.294.025l5.312-6.082c.365-.418.932-.394 1.263.047l7.561 10.082c.333.444.157.803-.388.803H60.527c-.547 0-.7-.35-.354-.764l13.336-16.004zM92 78a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" fill="#637282"></path></g>'
        },
        "image-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-image-small-b" x="8" y="8" width="24" height="24" rx="1.5"></rect><filter x="-2.1%" y="-2.1%" width="104.2%" height="108.3%" filterUnits="objectBoundingBox" id="mc-content-image-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-image-small-a)" xlink:href="#mc-content-image-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-image-small-b"></use></g><path d="M17.399 19.386c.174-.213.457-.207.622 0l3.65 4.593c.17.213.446.223.635.002l1.937-2.264c.181-.212.459-.206.62.014l2.845 3.871c.161.22.066.398-.204.398H12.496c-.274 0-.355-.173-.18-.386l5.083-6.228zM23.5 18a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="#637282"></path></g>'
        },
        "keynote-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="30" y="44" width="100" height="74" rx="4"></rect><rect fill="#F7F9FA" x="30" y="43" width="100" height="74" rx="4"></rect></g><path d="M80 65a.966.966 0 0 0-.997-.97C70.631 64.546 64 71.499 64 80c0 8.837 7.163 16 16 16 8.497 0 15.447-6.623 15.969-14.988V81a.962.962 0 0 0-.97-1H81.001C80.448 80 80 79.555 80 79V65z" fill="#3BA0F3"></path><path d="M84 75c0 .552.445 1 1 1h14a.963.963 0 0 0 .97-.991s.02.328 0 0c-.492-8.038-6.916-14.472-14.95-14.977l-.016-.001a.964.964 0 0 0-1.004.97v13.998z" fill="#3BA0F3"></path></g>'
        },
        "keynote-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-keynote-small-b" width="30" height="24" rx="1.5"></rect><filter x="-1.7%" y="-2.1%" width="103.3%" height="108.3%" filterUnits="objectBoundingBox" id="mc-content-keynote-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 8)"><use fill="#000" filter="url(#mc-content-keynote-small-a)" xlink:href="#mc-content-keynote-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-keynote-small-b"></use></g><path d="M20 15.491a.463.463 0 0 0-.496-.462s-.174-.001-.497.053A6.002 6.002 0 0 0 20 27a6.002 6.002 0 0 0 5.917-4.999c.055-.325.053-.501.053-.501a.466.466 0 0 0-.461-.5h-5.018a.496.496 0 0 1-.491-.491v-5.018z" fill="#3BA0F3"></path><path d="M22 18.509c0 .271.228.491.491.491h5.018c.271 0 .476-.22.456-.499 0 0-.031-.446-.036-.478-.495-3.09-3.11-4.69-4.909-4.926-.096-.013-.523-.051-.523-.051a.447.447 0 0 0-.497.445v5.018z" fill="#3BA0F3"></path></g>'
        },
        "link-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="31" width="74" height="100" rx="4"></rect><rect fill="#F7F9FA" x="43" y="30" width="74" height="100" rx="4"></rect></g><g fill="#637282"><path d="M97 80.5c0 3.59-2.96 6.5-6.61 6.5h-8.23c-3.65 0-6.61-2.917-6.61-6.5V74h14.84c3.65 0 6.61 2.917 6.61 6.5zm-3.3 0c0-1.807-1.481-3.25-3.308-3.25H85.45V74h-9.9v4.875h3.3v1.623c0 1.79 1.476 3.252 3.296 3.252h8.258c1.818 0 3.296-1.455 3.296-3.25z"></path><path d="M64 80.5c0-3.59 2.96-6.5 6.61-6.5h8.23c3.65 0 6.61 2.917 6.61 6.5V87H70.61C66.96 87 64 84.083 64 80.5zm3.3 0c0 1.807 1.481 3.25 3.308 3.25h4.942V87h9.9v-4.875h-3.3v-1.623c0-1.79-1.476-3.252-3.296-3.252h-8.258c-1.818 0-3.296 1.455-3.296 3.25z"></path></g></g>'
        },
        "link-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-link-small-b" x="8" y="5" width="24" height="30" rx="1.5"></rect><filter x="-2.1%" y="-1.7%" width="104.2%" height="106.7%" filterUnits="objectBoundingBox" id="mc-content-link-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-link-small-a)" xlink:href="#mc-content-link-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-link-small-b"></use></g><path d="M13 20c0-1.657 1.347-3 2.997-3h3.006A3 3 0 0 1 22 20v3h-6.003A3 3 0 0 1 13 20zm1.5 0c0 .834.672 1.5 1.5 1.5h1.5V23H22v-2.5h-1.5v-.505c0-.818-.67-1.495-1.499-1.495H16c-.834 0-1.499.672-1.499 1.5z" fill="#637282"></path><path d="M27 20c0 1.657-1.347 3-2.997 3h-3.006A3 3 0 0 1 18 20v-3h6.003A3 3 0 0 1 27 20zm-1.5 0c0-.834-.672-1.5-1.5-1.5h-1.5V17H18v2.5h1.5v.505c0 .818.67 1.495 1.499 1.495H24c.834 0 1.499-.672 1.499-1.5z" fill="#637282"></path></g>'
        },
        "markup-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="31" width="74" height="100" rx="4"></rect><rect fill="#F7F9FA" x="43" y="30" width="74" height="100" rx="4"></rect></g><path d="M97.022 80.835l-11.197-6.82a.937.937 0 0 0-1.326.36l-1.02 1.866a1.058 1.058 0 0 0 .38 1.399l9.208 5.61-9.209 5.61c-.474.29-.646.91-.38 1.399l1.02 1.865a.946.946 0 0 0 1.327.36l11.197-6.819L99 84.477V82.023l-1.978-1.188zM69.817 92.562a1.02 1.02 0 0 0 1.351-.452l11.38-22.412a.976.976 0 0 0-.448-1.327l-1.917-.933a1.02 1.02 0 0 0-1.351.452l-11.38 22.412a.976.976 0 0 0 .448 1.327l1.917.933z" fill="#637282"></path></g>'
        },
        "markup-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-markup-small-b" x="8" y="5" width="24" height="30" rx="1.5"></rect><filter x="-2.1%" y="-1.7%" width="104.2%" height="106.7%" filterUnits="objectBoundingBox" id="mc-content-markup-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-markup-small-a)" xlink:href="#mc-content-markup-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-markup-small-b"></use></g><path d="M15.402 24.282a.503.503 0 0 0 .671-.237l3.713-7.956a.5.5 0 0 0-.25-.666l-.438-.205a.503.503 0 0 0-.671.237l-3.713 7.956a.5.5 0 0 0 .25.666l.438.205zM20.32 22.59a.496.496 0 0 0-.051.704l.31.372c.18.216.498.246.704.075l3.51-2.925a.398.398 0 0 0 0-.632l-3.51-2.925a.497.497 0 0 0-.704.075l-.31.372a.502.502 0 0 0 .052.704l2.507 2.09-2.507 2.09z" fill="#637282" fill-rule="nonzero"></path></g>'
        },
        "numbers-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="31" width="74" height="100" rx="4"></rect><rect fill="#F7F9FA" x="43" y="30" width="74" height="100" rx="4"></rect></g><path d="M56 63.995A1 1 0 0 1 57.007 63h11.986c.556 0 1.007.456 1.007.995v8.01a1 1 0 0 1-1.007.995H57.007A1.008 1.008 0 0 1 56 72.005v-8.01zm17 0A1 1 0 0 1 74.007 63h11.986c.556 0 1.007.456 1.007.995v8.01a1 1 0 0 1-1.007.995H74.007A1.008 1.008 0 0 1 73 72.005v-8.01zm17 0A1 1 0 0 1 91.007 63h11.986c.556 0 1.007.456 1.007.995v8.01a1 1 0 0 1-1.007.995H91.007A1.008 1.008 0 0 1 90 72.005v-8.01zm-34 13A1 1 0 0 1 57.007 76h11.986c.556 0 1.007.456 1.007.995v8.01a1 1 0 0 1-1.007.995H57.007A1.008 1.008 0 0 1 56 85.005v-8.01zm17 0A1 1 0 0 1 74.007 76h11.986c.556 0 1.007.456 1.007.995v8.01a1 1 0 0 1-1.007.995H74.007A1.008 1.008 0 0 1 73 85.005v-8.01zm17 0A1 1 0 0 1 91.007 76h11.986c.556 0 1.007.456 1.007.995v8.01a1 1 0 0 1-1.007.995H91.007A1.008 1.008 0 0 1 90 85.005v-8.01zm-34 13A1 1 0 0 1 57.007 89h11.986c.556 0 1.007.456 1.007.995v8.01a1 1 0 0 1-1.007.995H57.007A1.008 1.008 0 0 1 56 98.005v-8.01zm17 0A1 1 0 0 1 74.007 89h11.986c.556 0 1.007.456 1.007.995v8.01a1 1 0 0 1-1.007.995H74.007A1.008 1.008 0 0 1 73 98.005v-8.01zm17 0A1 1 0 0 1 91.007 89h11.986c.556 0 1.007.456 1.007.995v8.01a1 1 0 0 1-1.007.995H91.007A1.008 1.008 0 0 1 90 98.005v-8.01z" fill="#3BA0F3"></path></g>'
        },
        "numbers-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-numbers-small-b" x="8" y="5" width="24" height="30" rx="1.5"></rect><filter x="-2.1%" y="-1.7%" width="104.2%" height="106.7%" filterUnits="objectBoundingBox" id="mc-content-numbers-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-numbers-small-a)" xlink:href="#mc-content-numbers-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-numbers-small-b"></use></g><path d="M13 23.495a.49.49 0 0 1 .49-.495h3.02c.27 0 .49.216.49.495v2.01a.49.49 0 0 1-.49.495h-3.02a.49.49 0 0 1-.49-.495v-2.01zm0-4a.49.49 0 0 1 .49-.495h3.02c.27 0 .49.216.49.495v2.01a.49.49 0 0 1-.49.495h-3.02a.49.49 0 0 1-.49-.495v-2.01zm0-4a.49.49 0 0 1 .49-.495h3.02c.27 0 .49.216.49.495v2.01a.49.49 0 0 1-.49.495h-3.02a.49.49 0 0 1-.49-.495v-2.01zm5 8a.49.49 0 0 1 .49-.495h3.02c.27 0 .49.216.49.495v2.01a.49.49 0 0 1-.49.495h-3.02a.49.49 0 0 1-.49-.495v-2.01zm5 0a.49.49 0 0 1 .49-.495h3.02c.27 0 .49.216.49.495v2.01a.49.49 0 0 1-.49.495h-3.02a.49.49 0 0 1-.49-.495v-2.01zm-5-4a.49.49 0 0 1 .49-.495h3.02c.27 0 .49.216.49.495v2.01a.49.49 0 0 1-.49.495h-3.02a.49.49 0 0 1-.49-.495v-2.01zm5 0a.49.49 0 0 1 .49-.495h3.02c.27 0 .49.216.49.495v2.01a.49.49 0 0 1-.49.495h-3.02a.49.49 0 0 1-.49-.495v-2.01zm-5-4a.49.49 0 0 1 .49-.495h3.02c.27 0 .49.216.49.495v2.01a.49.49 0 0 1-.49.495h-3.02a.49.49 0 0 1-.49-.495v-2.01zm5 0a.49.49 0 0 1 .49-.495h3.02c.27 0 .49.216.49.495v2.01a.49.49 0 0 1-.49.495h-3.02a.49.49 0 0 1-.49-.495v-2.01z" fill="#3BA0F3"></path></g>'
        },
        "pages-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g transform="translate(3)"><rect fill="#DBDEE2" x="43" y="31" width="74" height="100" rx="4"></rect><rect fill="#F7F9FA" x="43" y="30" width="74" height="100" rx="4"></rect></g><path d="M60 63.99c0-.546.455-.99 1.004-.99h43.992c.555 0 1.004.451 1.004.99v4.02c0 .546-.455.99-1.004.99H61.004A1.002 1.002 0 0 1 60 68.01v-4.02zm0 14c0-.546.455-.99 1.004-.99h43.992c.555 0 1.004.451 1.004.99v4.02c0 .546-.455.99-1.004.99H61.004A1.002 1.002 0 0 1 60 82.01v-4.02zm0 14c0-.546.447-.99.998-.99h28.004a1 1 0 0 1 .998.99v4.02c0 .546-.447.99-.998.99H60.998a1 1 0 0 1-.998-.99v-4.02z" fill="#F25123"></path></g>'
        },
        "pages-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-pages-small-b" x="8" y="5" width="24" height="30" rx="1.5"></rect><filter x="-2.1%" y="-1.7%" width="104.2%" height="106.7%" filterUnits="objectBoundingBox" id="mc-content-pages-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-pages-small-a)" xlink:href="#mc-content-pages-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-pages-small-b"></use></g><path d="M13 15.505a.5.5 0 0 1 .498-.505h13.004c.275 0 .498.214.498.505v.99a.5.5 0 0 1-.498.505H13.498a.494.494 0 0 1-.498-.505v-.99zm0 4a.5.5 0 0 1 .498-.505h13.004c.275 0 .498.214.498.505v.99a.5.5 0 0 1-.498.505H13.498a.494.494 0 0 1-.498-.505v-.99zm0 4c0-.279.228-.505.51-.505h8.98a.5.5 0 0 1 .51.505v.99a.507.507 0 0 1-.51.505h-8.98a.5.5 0 0 1-.51-.505v-.99z" fill="#FF8E21"></path></g>'
        },
        "paper-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<rect x="43" y="30" width="74" height="100" rx="4" fill="#F7F9FA" filter="url(#mc-content-paper-large-a)"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M79.404 75.017a1 1 0 0 1 1.197 0l14.17 10.59a1 1 0 0 1 0 1.602L80.596 97.806a1 1 0 0 1-1.197 0l-14.17-10.59a1 1 0 0 1 0-1.602l14.175-10.597z" fill="#B3D8F6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M79.404 64.613a1 1 0 0 1 1.197 0l14.17 10.59a1 1 0 0 1 0 1.602L80.596 87.4a1 1 0 0 1-1.197 0l-14.17-10.59a1 1 0 0 1 0-1.602l14.175-10.596z" fill="#0070E0"></path><defs><filter id="mc-content-paper-large-a" x="43" y="30" width="74" height="101" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858824 0 0 0 0 0.870588 0 0 0 0 0.886275 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>'
        },
        "paper-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6.5A1.5 1.5 0 0 1 9.5 5h21A1.5 1.5 0 0 1 32 6.5v27a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 8 33.5v-27z" fill="#F7F9FA" filter="url(#mc-content-paper-small-a)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.009 19.195a.5.5 0 0 1 .562 0l5.078 3.453a.5.5 0 0 1 0 .826l-5.08 3.455a.5.5 0 0 1-.562 0l-5.079-3.452a.5.5 0 0 1 0-.827l5.08-3.455z" fill="#B3D8F6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.009 15.629a.5.5 0 0 1 .562 0l5.078 3.453a.5.5 0 0 1 0 .826l-5.08 3.455a.5.5 0 0 1-.562 0l-5.079-3.452a.5.5 0 0 1 0-.827l5.08-3.455z" fill="#0070E0"></path><defs><filter id="mc-content-paper-small-a" x="8" y="5" width="24" height="31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858859 0 0 0 0 0.871766 0 0 0 0 0.884673 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>'
        },
        "papert-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<rect x="43" y="30" width="74" height="100" rx="4" fill="#F7F9FA" filter="url(#mc-content-papert-large-a)"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M79.404 75.017a1 1 0 0 1 1.197 0l14.17 10.59a1 1 0 0 1 0 1.602L80.596 97.806a1 1 0 0 1-1.197 0l-14.17-10.59a1 1 0 0 1 0-1.602l14.175-10.597z" fill="#6A7C8F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M79.404 64.613a1 1 0 0 1 1.197 0l14.17 10.59a1 1 0 0 1 0 1.602L80.596 87.4a1 1 0 0 1-1.197 0l-14.17-10.59a1 1 0 0 1 0-1.602l14.175-10.596z" fill="#1B2733"></path><defs><filter id="mc-content-papert-large-a" x="43" y="30" width="74" height="101" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858824 0 0 0 0 0.870588 0 0 0 0 0.886275 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>'
        },
        "papert-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6.5A1.5 1.5 0 0 1 9.5 5h21A1.5 1.5 0 0 1 32 6.5v27a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 8 33.5v-27z" fill="#F7F9FA" filter="url(#mc-content-papert-small-a)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.009 19.195a.5.5 0 0 1 .562 0l5.078 3.453a.5.5 0 0 1 0 .826l-5.08 3.455a.5.5 0 0 1-.562 0l-5.079-3.452a.5.5 0 0 1 0-.827l5.08-3.455z" fill="#6A7C8F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.009 15.629a.5.5 0 0 1 .562 0l5.078 3.453a.5.5 0 0 1 0 .826l-5.08 3.455a.5.5 0 0 1-.562 0l-5.079-3.452a.5.5 0 0 1 0-.827l5.08-3.455z" fill="#1B2733"></path><defs><filter id="mc-content-papert-small-a" x="8" y="5" width="24" height="31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858859 0 0 0 0 0.871766 0 0 0 0 0.884673 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>'
        },
        "binder-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<rect x="43" y="30" width="74" height="100" rx="4" fill="#F7F9FA" filter="url(#mc-content-binder-large-a)"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M80 93.45l-11.182-7.134-1.985 1.266L80 95.97l13.167-8.39-1.974-1.265L80 93.451z" fill="#0061FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M80 88.39l-11.182-7.124-1.985 1.265L80 90.92l13.167-8.39-1.974-1.264L80 88.389z" fill="#0061FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M80 83.338l-11.182-7.134-1.985 1.265L80 85.86l13.167-8.39-1.974-1.265L80 83.338z" fill="#0061FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M66.833 72.418L80 80.808l13.167-8.39L80 64.03l-13.167 8.39z" fill="#0061FF"></path><defs><filter id="mc-content-binder-large-a" x="43" y="30" width="74" height="101" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858824 0 0 0 0 0.870588 0 0 0 0 0.886275 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>'
        },
        "binder-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6.5A1.5 1.5 0 0 1 9.5 5h21A1.5 1.5 0 0 1 32 6.5v27a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 8 33.5v-27z" fill="#F7F9FA" filter="url(#mc-content-binder-small-a)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 25.38l-4.473-2.853-.794.506L20 26.388l5.267-3.355-.79-.506L20 25.38z" fill="#0061FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 23.356l-4.473-2.85-.794.506L20 24.368l5.267-3.356-.79-.506L20 23.356z" fill="#0061FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 21.335l-4.473-2.854-.794.507L20 22.343l5.267-3.355-.79-.506L20 21.335z" fill="#0061FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.733 16.967L20 20.323l5.267-3.356L20 13.612l-5.267 3.355z" fill="#0061FF"></path><defs><filter id="mc-content-binder-small-a" x="8" y="5" width="24" height="31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858859 0 0 0 0 0.871766 0 0 0 0 0.884673 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>'
        },
        "pdf-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="31" width="74" height="100" rx="4"></rect><rect fill="#F7F9FA" x="43" y="30" width="74" height="100" rx="4"></rect></g><path d="M66.107 82.78h-1.783V88H61V72h5.391c3.364 0 5.505 1.506 5.505 5.208 0 3.89-2.323 5.572-5.789 5.572zm-1.783-2.631h2.006c1.723 0 2.716-1.08 2.716-2.941 0-1.966-.993-2.319-2.675-2.319h-2.047v5.26zM74.679 88V72h5.29c4.58 0 6.525 3.283 6.525 7.966S84.59 88 80.05 88h-5.371zm3.153-2.957h2.078c2.675 0 3.226-2.136 3.226-5.077 0-2.94-.673-5.077-3.226-5.077h-2.18l.102 10.154zm14.861-3.018V88h-3.17V72H99v2.889h-6.307v4.563h5.942v2.573h-5.942z" fill="#F25123"></path></g>'
        },
        "pdf-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-pdf-small-b" x="8" y="5" width="24" height="30" rx="1.5"></rect><filter x="-2.1%" y="-1.7%" width="104.2%" height="106.7%" filterUnits="objectBoundingBox" id="mc-content-pdf-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-pdf-small-a)" xlink:href="#mc-content-pdf-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-pdf-small-b"></use></g><path d="M14.768 22.003h-.704V24h-1.312v-6.12h2.128c1.328 0 2.173.576 2.173 1.992 0 1.488-.917 2.131-2.285 2.131zm-.704-1.006h.792c.68 0 1.072-.413 1.072-1.125 0-.752-.392-.887-1.056-.887h-.808v2.012zM18.011 24v-6.12H20.1c1.808 0 2.576 1.256 2.576 3.047 0 1.791-.752 3.073-2.544 3.073h-2.12zm1.244-1.131h.82c1.056 0 1.274-.817 1.274-1.942s-.266-1.942-1.274-1.942h-.86l.04 3.884zm6.019-1.155V24h-1.252v-6.12h3.741v1.105h-2.49v1.745h2.346v.984h-2.345z" fill="#F25123"></path></g>'
        },
        "pkg-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="44" width="74" height="74" rx="4"></rect><rect fill="#F7F9FA" x="43" y="43" width="74" height="74" rx="4"></rect></g><path d="M96.035 69.526c.475.274.861.941.861 1.491v17.521c0 .55-.385 1.217-.861 1.492L80.86 98.79c-.475.275-1.246.276-1.722 0l-15.174-8.76c-.475-.275-.861-.941-.861-1.492v-17.52c0-.55.385-1.217.861-1.492l15.174-8.76c.475-.275 1.246-.276 1.722 0l15.174 8.76zm-16.469-5.908L67.4 70.638c-.24.139-.24.363 0 .501l12.167 7.021a.96.96 0 0 0 .868 0L92.6 71.14c.24-.139.24-.363 0-.501l-12.167-7.021a.96.96 0 0 0-.868 0z" fill="#637282" fill-rule="nonzero"></path></g>'
        },
        "pkg-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-pkg-small-b" x="8" y="8" width="24" height="24" rx="1.5"></rect><filter x="-2.1%" y="-2.1%" width="104.2%" height="108.3%" filterUnits="objectBoundingBox" id="mc-content-pkg-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-pkg-small-a)" xlink:href="#mc-content-pkg-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-pkg-small-b"></use></g><path d="M24.401 16.964a.954.954 0 0 1 .43.742v4.588a.954.954 0 0 1-.43.742L20.43 25.33a.954.954 0 0 1-.858 0L15.6 23.036a.954.954 0 0 1-.43-.742v-4.588c0-.273.196-.607.43-.742l3.972-2.294a.954.954 0 0 1 .858 0l3.972 2.294zM20 15.8l-3.75 2.165L20 20.13l3.75-2.165L20 15.8z" fill="#637282" fill-rule="nonzero"></path></g>'
        },
        "ppt-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<rect x="30" y="43" width="100" height="74" rx="4" fill="#F7F9FA" filter="url(#mc-content-ppt-large-a)"></rect><path d="M62 65l21-3v34l-21-3V65z" fill="#D24726"></path><path d="M71.333 81v5H68V71h4.828C76.276 71 78 72.593 78 75.78c0 1.507-.496 2.727-1.489 3.661-.986.928-2.305 1.559-3.96 1.559h-1.218zm0-7.406v4.676h.96c1.642 0 2.463-.788 2.463-2.364 0-1.541-.82-2.312-2.462-2.312h-.96z" fill="#fff"></path><path d="M81 65h16a1 1 0 0 1 1 1v26a1 1 0 0 1-1 1H81V65z" fill="#D24726"></path><path fill="#fff" d="M83 67h13v24H83z"></path><path fill="#D24726" d="M83 85h10v-2H83zM83 89h10v-2H83z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M86 81a5 5 0 0 0 5-5h-5v-5a5 5 0 0 0 0 10z" fill="#D24726"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M93 74a5 5 0 0 0-5-5v5h5z" fill="#D24726"></path><defs><filter id="mc-content-ppt-large-a" x="30" y="43" width="100" height="75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858824 0 0 0 0 0.870588 0 0 0 0 0.886275 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>'
        },
        "ppt-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5A1.5 1.5 0 0 1 6.5 8h27A1.5 1.5 0 0 1 35 9.5v21a1.5 1.5 0 0 1-1.5 1.5h-27A1.5 1.5 0 0 1 5 30.5v-21z" fill="#F7F9FA" filter="url(#mc-content-ppt-small-a)"></path><path d="M13 14l8-1v14l-8-1V14z" fill="#D24726"></path><path d="M16.5 21v2H15v-6h2c1.38 0 2 .725 2 2 0 .602-.198 1.003-.595 1.377-.395.37-.743.623-1.405.623h-.5zm0-3v2h.218c.656 0 .984-.407.984-1.038 0-.616-.328-.962-.984-.962H16.5z" fill="#fff"></path><path d="M20 14h6a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6V14z" fill="#D24726"></path><path fill="#fff" d="M21 15h5v9h-5z"></path><path fill="#D24726" d="M21 23h4v-1h-4z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 17a2 2 0 1 0 2 2h-2v-2z" fill="#D24726"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25 18a1.5 1.5 0 0 0-1.5-1.5V18H25z" fill="#D24726"></path><defs><filter id="mc-content-ppt-small-a" x="5" y="8" width="30" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858859 0 0 0 0 0.871766 0 0 0 0 0.884673 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>'
        },
        "pr-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="31" width="74" height="100" rx="4"></rect><rect fill="#F7F9FA" x="43" y="30" width="74" height="100" rx="4"></rect></g><path d="M75.308 83.448H72.86V90H69.5V71.64h6.096c3.816 0 6.768 1.68 6.768 5.832 0 4.248-3.072 5.976-7.056 5.976zm-2.448-2.496h2.616c2.256 0 3.552-1.152 3.552-3.456 0-2.424-1.296-3.384-3.504-3.384H72.86v6.84zM84.452 90h3.216v-6.552c0-2.472 1.392-3.432 3.672-3.432h.6v-3.024h-.216c-1.776 0-3.504 1.08-4.176 2.808H87.5v-2.592h-3.048V90z" fill="#9B49F2"></path></g>'
        },
        "pr-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-pr-small-b" x="8" y="5" width="24" height="30" rx="1.5"></rect><filter x="-2.1%" y="-1.7%" width="104.2%" height="106.7%" filterUnits="objectBoundingBox" id="mc-content-pr-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-pr-small-a)" xlink:href="#mc-content-pr-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-pr-small-b"></use></g><path d="M18.315 21.38h-.88V24h-1.64v-7.65h2.66c1.66 0 2.92.7 2.92 2.47 0 1.86-1.35 2.56-3.06 2.56zm-.88-1.21h.99c.85 0 1.34-.44 1.34-1.33 0-.94-.49-1.31-1.32-1.31h-1.01v2.64zm4.95 3.83h1.58v-2.65c0-1.03.55-1.36 1.52-1.36h.28v-1.44h-.09c-.72 0-1.47.41-1.77 1.22h-.02v-1.13h-1.5V24z" fill="#9658E5"></path></g>'
        },
        "psd-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g transform="translate(3)"><rect fill="#DBDEE2" x="43" y="31" width="74" height="100" rx="4"></rect><rect fill="#F7F9FA" x="43" y="30" width="74" height="100" rx="4"></rect></g><path d="M76.88 83.448h-2.448V90h-3.36V71.64h6.096c3.816 0 6.768 1.68 6.768 5.832 0 4.248-3.072 5.976-7.056 5.976zm-2.448-2.496h2.616c2.256 0 3.552-1.152 3.552-3.456 0-2.424-1.296-3.384-3.504-3.384h-2.664v6.84zm21.24-.312c-.192-2.256-1.776-3.744-4.968-3.744-3.36 0-5.064 1.872-5.064 4.104 0 2.28 1.32 3.408 3.672 3.72l2.016.264c1.368.168 1.704.648 1.704 1.512 0 1.056-.912 1.68-2.328 1.68-1.776 0-2.328-.936-2.424-1.848h-3c.168 2.568 2.04 4.008 5.4 4.008 3.12 0 5.352-1.464 5.352-4.224 0-2.28-1.2-3.408-3.672-3.744l-2.088-.288c-1.152-.168-1.632-.6-1.632-1.44 0-.912.744-1.584 2.016-1.584 1.296 0 2.016.672 2.088 1.584h2.928z" fill="#0070E0"></path></g>'
        },
        "psd-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-psd-small-b" x="8" y="5" width="24" height="30" rx="1.5"></rect><filter x="-2.1%" y="-1.7%" width="104.2%" height="106.7%" filterUnits="objectBoundingBox" id="mc-content-psd-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-psd-small-a)" xlink:href="#mc-content-psd-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-psd-small-b"></use></g><path d="M17.29 21.38h-.88V24h-1.64v-7.65h2.66c1.66 0 2.92.7 2.92 2.47 0 1.86-1.35 2.56-3.06 2.56zm-.88-1.21h.99c.85 0 1.34-.44 1.34-1.33 0-.94-.49-1.31-1.32-1.31h-1.01v2.64zm9.11-.04c-.07-.94-.76-1.62-2.16-1.62-1.52 0-2.22.83-2.22 1.76 0 .97.57 1.46 1.57 1.6l.86.12c.5.07.64.23.64.55 0 .39-.34.59-.85.59-.63 0-.88-.31-.9-.69H21c.07.96.75 1.71 2.35 1.71 1.36 0 2.33-.64 2.33-1.83 0-.97-.57-1.45-1.55-1.58l-.91-.12c-.46-.06-.62-.24-.62-.54 0-.32.26-.56.75-.56s.74.27.77.61h1.4z" fill="#0070E0"></path></g>'
        },
        "shortcut-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<rect x="43" y="30" width="74" height="100" rx="4" fill="#F7F9FA" filter="url(#mc-content-shortcut-large-a)"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M96 80c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16zM83 92.652c-.963.228-1.968.348-3 .348-7.18 0-13-5.82-13-13 0-1.775.356-3.467 1-5.009V75h1.438a2 2 0 0 1 1.94 1.515l.399 1.593a2 2 0 0 0 1.046 1.303l.354.178a2 2 0 0 1 1.046 1.303l.209.836A3 3 0 0 0 77.342 84H79.5a1.5 1.5 0 0 1 1.5 1.5v2a2 2 0 0 0 .8 1.6l.4.3A2 2 0 0 1 83 91v1.652zM92.373 84h-1.637a2 2 0 0 1-1.789-1.106l-.118-.236A3 3 0 0 0 86.146 81H80a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h1a4 4 0 0 0 4-4v-3.536c4.16 2.168 7 6.52 7 11.536 0 1.396-.22 2.74-.627 4z" fill="#0061FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M48.111 112h-11.11l4 4c-6.223 6.222-5.186 13.049-4.418 15.776.08.286.554.239.627-.049.497-1.965 2.168-6.105 7.79-11.727l4 4v-11.111a.889.889 0 0 0-.889-.889z" fill="#717781"></path><defs><filter id="mc-content-shortcut-large-a" x="43" y="30" width="74" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="-1"></feOffset><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix><feBlend in2="shape" result="effect1_innerShadow"></feBlend></filter></defs>'
        },
        "shortcut-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6.5A1.5 1.5 0 0 1 9.5 5h21A1.5 1.5 0 0 1 32 6.5v27a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 8 33.5v-27z" fill="#F7F9FA" filter="url(#mc-content-shortcut-small-a)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.556 27H5l2 2c-3.07 3.07-2.606 6.434-2.224 7.833.043.156.303.129.344-.028C5.387 35.801 6.244 33.756 9 31l2 2v-5.556a.444.444 0 0 0-.444-.444z" fill="#717781"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 24.5v-1.782a.718.718 0 0 0-.718-.718c-.513 0-.954-.362-1.055-.865l-.165-.824a.648.648 0 0 0-.346-.453l-.312-.156a.731.731 0 0 1-.404-.654.548.548 0 0 0-.548-.548h-.696a4.5 4.5 0 0 0 4.244 6zm1-8.889a4.502 4.502 0 0 1 2.767 6.851A1.997 1.997 0 0 0 21.84 21H20.4a.4.4 0 0 1-.4-.4v-1.28c0-.196.11-.375.286-.463.437-.219.714-.666.714-1.155v-2.09zM26 20a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" fill="#0061FF"></path><defs><filter id="mc-content-shortcut-small-a" x="8" y="5" width="24" height="31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858859 0 0 0 0 0.871766 0 0 0 0 0.884673 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>'
        },
        "sketch-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="31" width="74" height="100" rx="4"></rect><rect fill="#F7F9FA" x="43" y="30" width="74" height="100" rx="4"></rect></g><path d="M65.205 78.162a.998.998 0 0 1-.002-1.408l6.676-6.676c.389-.388 1.153-.703 1.702-.703H87.75c.551 0 1.315.317 1.702.703l6.676 6.676c.388.389.38 1.026-.002 1.408L81.37 92.918c-.39.389-1.028.382-1.41 0L65.205 78.162z" fill="#FF8E21"></path></g>'
        },
        "sketch-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-sketch-small-b" x="8" y="5" width="24" height="30" rx="1.5"></rect><filter x="-2.1%" y="-1.7%" width="104.2%" height="106.7%" filterUnits="objectBoundingBox" id="mc-content-sketch-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-sketch-small-a)" xlink:href="#mc-content-sketch-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-sketch-small-b"></use></g><path d="M14.357 19.357a.506.506 0 0 1-.001-.713l2.288-2.288c.197-.197.584-.356.847-.356h5.018c.271 0 .652.161.847.356l2.288 2.288a.505.505 0 0 1-.001.713l-5.286 5.286a.506.506 0 0 1-.714 0l-5.286-5.286z" fill="#FF8E21"></path></g>'
        },
        "symlink-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="44" width="74" height="74" rx="4"></rect><rect fill="#F7F9FA" x="43" y="43" width="74" height="74" rx="4"></rect></g><path d="M78.262 74.434l-4.94-4.865A1.5 1.5 0 0 1 74.373 67H90.5a1.5 1.5 0 0 1 1.5 1.5v15.88a1.5 1.5 0 0 1-2.552 1.069l-5.064-4.986c-1.05 1.036-2.565 2.538-4.548 4.504-7.542 7.48-.84 13.865-4.562 14.973-3.723 1.108-8.922-13.454-1.52-20.962a766.054 766.054 0 0 1 4.508-4.544z" fill="#637282"></path></g>'
        },
        "symlink-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-symlink-small-b" x="8" y="8" width="24" height="24" rx="1.5"></rect><filter x="-2.1%" y="-2.1%" width="104.2%" height="108.3%" filterUnits="objectBoundingBox" id="mc-content-symlink-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-symlink-small-a)" xlink:href="#mc-content-symlink-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-symlink-small-b"></use></g><path d="M19.483 18.483l-1.63-1.63a.5.5 0 0 1 .354-.853H23.5a.5.5 0 0 1 .5.5v5.293a.5.5 0 0 1-.854.353l-1.65-1.65c-.345.346-.844.847-1.496 1.504-2.48 2.498-.276 4.63-1.5 5-1.224.37-2.934-4.493-.5-7 .646-.665 1.14-1.17 1.483-1.517z" fill="#637282"></path></g>'
        },
        "txt-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="31" width="74" height="100" rx="4"></rect><rect fill="#F7F9FA" x="43" y="30" width="74" height="100" rx="4"></rect></g><path d="M57 63.99c0-.546.455-.99 1.004-.99h43.992c.555 0 1.004.451 1.004.99v4.02c0 .546-.455.99-1.004.99H58.004A1.002 1.002 0 0 1 57 68.01v-4.02zm0 14c0-.546.455-.99 1.004-.99h43.992c.555 0 1.004.451 1.004.99v4.02c0 .546-.455.99-1.004.99H58.004A1.002 1.002 0 0 1 57 82.01v-4.02zm0 14c0-.546.447-.99.998-.99h28.004a1 1 0 0 1 .998.99v4.02c0 .546-.447.99-.998.99H57.998a1 1 0 0 1-.998-.99v-4.02z" fill="#637282"></path></g>'
        },
        "txt-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-txt-small-b" x="8" y="5" width="24" height="30" rx="1.5"></rect><filter x="-2.1%" y="-1.7%" width="104.2%" height="106.7%" filterUnits="objectBoundingBox" id="mc-content-txt-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-txt-small-a)" xlink:href="#mc-content-txt-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-txt-small-b"></use></g><path d="M13 15.505a.5.5 0 0 1 .498-.505h13.004c.275 0 .498.214.498.505v.99a.5.5 0 0 1-.498.505H13.498a.494.494 0 0 1-.498-.505v-.99zm0 4a.5.5 0 0 1 .498-.505h13.004c.275 0 .498.214.498.505v.99a.5.5 0 0 1-.498.505H13.498a.494.494 0 0 1-.498-.505v-.99zm0 4c0-.279.233-.505.503-.505h5.994c.278 0 .503.214.503.505v.99a.509.509 0 0 1-.503.505h-5.994a.497.497 0 0 1-.503-.505v-.99z" fill="#637282"></path></g>'
        },
        "unknown-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="31" width="74" height="100" rx="4"></rect><rect fill="#F7F9FA" x="43" y="30" width="74" height="100" rx="4"></rect><rect fill="#D8D8D8" x="67.643" y="94.143" width="25.714" height="3.214" rx="1.607"></rect><path d="M69.357 82.786V71.643c0-6.154 4.989-11.143 11.143-11.143 6.154 0 11.143 4.989 11.143 11.143v11.143H69.357zm3-3h16.286v-8.143a8.143 8.143 0 1 0-16.286 0v8.143z" fill="#637282" fill-rule="nonzero"></path><path d="M66.23 73.055c.78-.78 2.316-1.412 3.42-1.412h21.71c1.103 0 2.63.633 3.41 1.412l6.818 6.818c.78.78.53 1.539-.565 1.695l-14.404 2.058c-3.38.483-8.855.483-12.238 0l-14.404-2.058c-1.092-.156-1.344-.915-.565-1.695l6.818-6.818z" fill="#637282"></path></g></g>'
        },
        "unknown-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-unknown-small-b" x="8" y="5" width="24" height="30" rx="1.5"></rect><filter x="-2.1%" y="-1.7%" width="104.2%" height="106.7%" filterUnits="objectBoundingBox" id="mc-content-unknown-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-unknown-small-a)" xlink:href="#mc-content-unknown-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-unknown-small-b"></use><rect fill="#D8D8D8" x="16" y="26" width="8" height="1" rx=".5"></rect><g><path d="M17 22h6v-3a3 3 0 1 0-6 0v3z" stroke="#637282"></path><path d="M14.64 20.36c.751-.751 2.227-1.36 3.275-1.36h4.176c1.054 0 2.516.607 3.269 1.36l.929.929c.393.393.273.774-.277.852l-4.118.588c-1.046.15-2.752.148-3.788 0l-4.118-.588c-.546-.078-.667-.462-.277-.852l.93-.93z" fill="#637282"></path></g></g></g>'
        },
        "video-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="30" y="44" width="100" height="74" rx="4"></rect><rect fill="#F7F9FA" x="30" y="43" width="100" height="74" rx="4"></rect></g><path d="M69 67.991c0-1.1.808-1.587 1.794-1.094l24.412 12.206c.99.495.986 1.3 0 1.794L70.794 93.103c-.99.495-1.794-.003-1.794-1.094V67.99z" fill="#637282"></path></g>'
        },
        "video-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-video-small-b" width="30" height="24" rx="1.5"></rect><filter x="-1.7%" y="-2.1%" width="103.3%" height="108.3%" filterUnits="objectBoundingBox" id="mc-content-video-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 8)"><use fill="#000" filter="url(#mc-content-video-small-a)" xlink:href="#mc-content-video-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-video-small-b"></use></g><path d="M16 15.51c0-.282.209-.406.456-.282l9.088 4.544c.252.126.247.332 0 .456l-9.088 4.544c-.252.126-.456 0-.456-.282v-8.98z" fill="#637282"></path></g>'
        },
        "xls-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<rect x="43" y="30" width="74" height="100" rx="4" fill="#F7F9FA" filter="url(#mc-content-xls-large-a)"></rect><path d="M62 65l21-3v34l-21-3V65z" fill="#217346"></path><path d="M81 65h16a1 1 0 0 1 1 1v26a1 1 0 0 1-1 1H81V65z" fill="#217346"></path><path fill="#fff" d="M83 67h13v24H83z"></path><path fill="#217346" d="M82 84h4v-2h-4zM82 88h4v-2h-4zM82 76h4v-2h-4zM82 80h4v-2h-4zM82 72h4v-2h-4zM88 84h5v-2h-5zM88 88h5v-2h-5zM88 76h5v-2h-5zM88 80h5v-2h-5zM88 72h5v-2h-5z"></path><path d="M70.333 71H67l3.333 7.5L67 86h3.333L72 81l1.667 5H77l-3.333-7.5L77 71h-3.333L72 76l-1.667-5z" fill="#fff"></path><defs><filter id="mc-content-xls-large-a" x="43" y="30" width="74" height="101" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858824 0 0 0 0 0.870588 0 0 0 0 0.886275 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>'
        },
        "xls-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6.5A1.5 1.5 0 0 1 9.5 5h21A1.5 1.5 0 0 1 32 6.5v27a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 8 33.5v-27z" fill="#F7F9FA" filter="url(#mc-content-xls-small-a)"></path><path d="M13 14l8-1v14l-8-1V14z" fill="#217346"></path><path d="M20 14h6a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6V14z" fill="#217346"></path><path fill="#fff" d="M21 15h5v9h-5z"></path><path fill="#217346" d="M21 21h1v-1h-1zM21 23h1v-1h-1zM21 19h1v-1h-1zM20 17h2v-1h-2zM23 21h2v-1h-2zM23 23h2v-1h-2zM23 19h2v-1h-2zM23 17h2v-1h-2z"></path><path d="M16.333 17H15l1.333 3L15 23h1.333L17 21l.667 2H19l-1.333-3L19 17h-1.333L17 19l-.667-2z" fill="#fff"></path><defs><filter id="mc-content-xls-small-a" x="8" y="5" width="24" height="31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0.858859 0 0 0 0 0.871766 0 0 0 0 0.884673 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>'
        },
        "zip-large": {
            attrs: {
                width: "160",
                height: "160",
                viewBox: "0 0 160 160"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g><rect fill="#DBDEE2" x="43" y="44" width="74" height="74" rx="4"></rect><rect fill="#F7F9FA" x="43" y="43" width="74" height="74" rx="4"></rect></g><path d="M80 72h6v13.008c0 1.1-.902 1.992-2.009 1.992H76.01A2.001 2.001 0 0 1 74 85.008V68h6v4zm-6-28h6v4h-6v-4zm6 4h6v4h-6v-4zm-6 4h6v4h-6v-4zm6 4h6v4h-6v-4zm-6 4h6v4h-6v-4zm6 4h6v4h-6v-4zm-3 16v4h6v-4h-6z" fill="#637282"></path></g>'
        },
        "zip-small": {
            attrs: {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            },
            dangerouslySetInnerIconHtml: '<defs><rect id="mc-content-zip-small-b" x="8" y="8" width="24" height="24" rx="1.5"></rect><filter x="-2.1%" y="-2.1%" width="104.2%" height="108.3%" filterUnits="objectBoundingBox" id="mc-content-zip-small-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feColorMatrix values="0 0 0 0 0.858859196 0 0 0 0 0.871765907 0 0 0 0 0.884672619 0 0 0 1 0" in="shadowOffsetOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#mc-content-zip-small-a)" xlink:href="#mc-content-zip-small-b"></use><use fill="#F7F9FA" xlink:href="#mc-content-zip-small-b"></use></g><path d="M18 8h2v1h-2V8zm2 1h2v1h-2V9zm-2 1h2v1h-2v-1zm2 1h2v1h-2v-1zm-2 1h2v1h-2v-1zm2 1h2v1h-2v-1zm-2 1h2v1h-2v-1zm2 1h2v1h-2v-1zm-2 1h2v1h-2v-1zm2 1h2v1h-2v-1zm-2 1h2v1h-2v-1zm0 1h4v4.502a.491.491 0 0 1-.49.498h-3.02a.49.49 0 0 1-.49-.498V19zm1 3v1h2v-1h-2z" fill="#637282"></path></g>'
        }
    }
}), define("spectrum/icon_content", ["require", "exports", "tslib", "tslib", "react", "spectrum/icon_templates/content", "spectrum/svg_icon_bundle", "spectrum/icon_content/bundle"], function(e, l, t, a, i, n, r, h) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), a = t.__importStar(a), i = t.__importStar(i), l.ICONS = h.ICONS, l.IconContent = function(e) {
        var l = e.name,
            t = i.createElement(r.SvgIconBundle, {
                focusable: "false",
                icon: h.ICONS[l]
            });
        return i.createElement(n.Component, a.__assign({
            icon: t
        }, e))
    }, l.IconContent.displayName = "IconContent"
}), define("spectrum/icon_global/bundle", ["require", "exports"], function(e, l) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), l.ICONS = {
        about: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 25a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-2a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" class="mc-icon--mf"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 3a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1z" class="mc-icon--mf"></path>'
        },
        "add-small": {
            attrs: {
                width: "23",
                height: "23",
                viewBox: "0 0 23 24"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M13 11V7h-2v4H7v2h4v4h2v-4h4v-2h-4z" fill="#637282"></path></g>'
        },
        add: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M17 8h-2v7H8v2h7v7h2v-7h7v-2h-7z" fill="#637282"></path></g>'
        },
        calendar: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<g fill-rule="nonzero" fill="none"><path d="M7 8.504C7 7.674 7.662 7 8.504 7h14.992C24.326 7 25 7.662 25 8.504v14.992c0 .83-.662 1.504-1.504 1.504H8.504C7.674 25 7 24.338 7 23.496V8.504zM9 11v12h14V11H9z" fill="#637282"></path><path d="M11 14h2v2h-2v-2zm0 4h2v2h-2v-2zm8-4h2v2h-2v-2zm0 4h2v2h-2v-2zm-4-4h2v2h-2v-2zm0 4h2v2h-2v-2z" fill="#C1C7CD"></path></g>'
        },
        "collapse-arrow": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M10 16a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1z" fill="#637282"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.707 10.293a1 1 0 0 1 0 1.414L12.414 16l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0z" fill="#637282"></path>'
        },
        "collapse-line": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 22a1 1 0 0 1-1-1V11a1 1 0 1 1 2 0v10a1 1 0 0 1-1 1z" fill="#637282"></path>'
        },
        collapse: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<g fill-rule="nonzero" fill="#637282"><path d="M12 15h10v2H12zM7 8h2v16H7z"></path><path d="M19.414 11l4.95 4.95-4.95 4.95L18 19.484l3.536-3.535L18 12.414z"></path></g>'
        },
        comment: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 18.032h5v-2.006h-5v2.006zm0-4.012h8v-2.007h-8v2.007zM22.435 8H9.565C8.7 8 8 8.702 8 9.57v10.905c0 .868.7 1.57 1.565 1.57H12l3.886 2.913A.174.174 0 0 0 16 25a.17.17 0 0 0 .113-.043L20 22.045h2.435c.865 0 1.565-.702 1.565-1.57V9.57C24 8.702 23.3 8 22.435 8zM20 20.039c-.43 0-.85.14-1.197.398L16 22.537l-2.803-2.097A1.993 1.993 0 0 0 12 20.04h-1c-.552 0-1-.458-1-.998v-8.036c0-.552.456-.998 1.002-.998h9.996c.552 0 1.002.457 1.002.998v8.036a.996.996 0 0 1-1 .998h-1z" fill="#637282"></path>'
        },
        "comment-default": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M22.429 21.5H18.31L16 24.273 13.689 21.5H9.571a.643.643 0 0 1-.642-.643V10.571c0-.355.287-.642.642-.642H22.43c.355 0 .642.287.642.642v10.286a.643.643 0 0 1-.642.643zm-9.643 1.929L16 27.286l3.214-3.857h3.215A2.571 2.571 0 0 0 25 20.857V10.571A2.571 2.571 0 0 0 22.429 8H9.57A2.571 2.571 0 0 0 7 10.571v10.286a2.571 2.571 0 0 0 2.571 2.572h3.215zM10.857 12.5h10.286v1.929H10.857V12.5zm0 3.857h7.714v1.928h-7.714v-1.928z" class="mc-icon--mf"></path>'
        },
        "comment-empty": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M18.311 21.5h4.118a.643.643 0 0 0 .642-.643V10.571a.643.643 0 0 0-.642-.642H9.57a.643.643 0 0 0-.642.642v10.286c0 .355.287.643.642.643h4.118L16 24.273l2.311-2.773zM16 27.286l-3.214-3.857H9.57A2.571 2.571 0 0 1 7 20.857V10.571A2.571 2.571 0 0 1 9.571 8H22.43A2.571 2.571 0 0 1 25 10.571v10.286a2.571 2.571 0 0 1-2.571 2.572h-3.215L16 27.286z" class="mc-icon--mf"></path>'
        },
        "comment-empty-overflow": {
            attrs: {
                width: "34",
                height: "34",
                viewBox: "0 0 34 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.311 21.5h5.118a.643.643 0 0 0 .642-.643V10.571a.643.643 0 0 0-.642-.642H9.57a.643.643 0 0 0-.642.642v10.286c0 .355.287.643.642.643h5.118L17 24.273l2.311-2.773zM17 27.286l-3.214-3.857H9.57A2.571 2.571 0 0 1 7 20.857V10.571A2.571 2.571 0 0 1 9.571 8H24.43A2.571 2.571 0 0 1 27 10.571v10.286a2.571 2.571 0 0 1-2.571 2.572h-4.215L17 27.286z" class="mc-icon--mf"></path><path class="mc-icon--mf" d="M30 8h2v6h-2z"></path><path class="mc-icon--mf" d="M28 10h6v2h-6z"></path>'
        },
        "comment-empty-wide": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M18.311 21.5h5.118a.643.643 0 0 0 .642-.643V10.571a.643.643 0 0 0-.642-.642H8.57a.643.643 0 0 0-.642.642v10.286c0 .355.287.643.642.643h5.118L16 24.273l2.311-2.773zM16 27.286l-3.214-3.857H8.57A2.571 2.571 0 0 1 6 20.857V10.571A2.571 2.571 0 0 1 8.571 8H23.43A2.571 2.571 0 0 1 26 10.571v10.286a2.571 2.571 0 0 1-2.571 2.572h-4.215L16 27.286z" class="mc-icon--mf"></path>'
        },
        help: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<g fill-rule="nonzero" fill="#637282"><path d="M16 24a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2c-5.523 0-10-4.477-10-10S10.477 6 16 6s10 4.477 10 10-4.477 10-10 10z"></path><path d="M13.115 14.051h1.466c.05-.76.568-1.247 1.372-1.247.786 0 1.31.468 1.31 1.116 0 .618-.262.948-1.035 1.416-.861.506-1.223 1.067-1.167 2.003l.006.424h1.448v-.356c0-.617.23-.935 1.048-1.416.848-.505 1.322-1.172 1.322-2.127 0-1.378-1.142-2.364-2.85-2.364-1.853 0-2.87 1.073-2.92 2.551zm2.745 6.687c.636 0 1.035-.393 1.035-.992 0-.605-.4-.998-1.035-.998-.624 0-1.036.393-1.036.998 0 .6.412.992 1.036.992z"></path></g>'
        },
        notifications: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<g fill-rule="nonzero" fill="#637282"><path d="M7 21c0-.557.195-.778.816-1.312.106-.091.595-.5.49-.412.208-.174.366-.311.518-.45C9.607 18.107 10 17.506 10 17v-4.123l.03-.12c.154-.618.515-1.484 1.17-2.357C12.316 8.913 13.913 8 16 8c2.087 0 3.684.913 4.8 2.4.655.873 1.016 1.74 1.17 2.357l.03.12V17c0 .469.338.938 1.14 1.607.127.105.694.563.54.439.231.187.39.322.538.461.498.471.782.91.782 1.493 0 1.552-.448 2-2 2H9c-.767 0-1.354-.229-1.707-.758C7.037 21.858 7 21.581 7 21zm16.031.166A.347.347 0 0 1 23 21v.124a.49.49 0 0 1 .031.042zm-.186-.205a7.537 7.537 0 0 0-.424-.362c.168.137-.42-.339-.561-.456C20.637 19.124 20 18.24 20 17v-3.86a5.4 5.4 0 0 0-.8-1.54c-.76-1.013-1.787-1.6-3.2-1.6-1.413 0-2.44.587-3.2 1.6a5.4 5.4 0 0 0-.8 1.54V17c0 1.222-.664 2.236-1.824 3.3-.178.162-.356.317-.584.508l-.23.192h13.523a2.894 2.894 0 0 0-.04-.039zM13 23c0 .391.086.908.356 1.447C13.832 25.4 14.732 26 16 26c1.268 0 2.168-.6 2.644-1.553.27-.539.356-1.056.356-1.447h-2c0 .109-.039.342-.144.553-.15.297-.374.447-.856.447s-.707-.15-.856-.447A1.403 1.403 0 0 1 15 23h-2z"></path><path d="M17 9V7a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"></path></g>'
        },
        "search-small": {
            attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g fill="#637282"><path d="M13.293 14.707a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1-1.414 1.414l-3-3z" fill-rule="nonzero"></path><path d="M11 16a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></g></g>'
        },
        search: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g fill="#637282" fill-rule="nonzero"><path d="M17.793 21.207l4.167 4.167a1 1 0 1 0 1.414-1.414l-4.167-4.167a1 1 0 0 0-1.414 1.414z"></path><path d="M14.5 21a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 2a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"></path></g></g>'
        },
        watermark: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 19a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-15zm1.089 2a.2.2 0 0 0-.2.2v1.6c0 .11.09.2.2.2H22.41a.2.2 0 0 0 .2-.2v-1.6a.2.2 0 0 0-.2-.2H9.59z" class="mc-icon--mf"></path><path d="M16 9c-1.105 0-2 .5-2 2 0 .968.447 1.855.797 2.549.192.382.355.705.398.951L16 21h-2l-.857-6.5c-.029-.195-.158-.42-.319-.702C12.484 13.204 12 12.356 12 11c0-2 1.79-4 4-4s4 2 4 4c0 1.356-.485 2.204-.824 2.798-.161.282-.29.507-.319.702L18 21h-2l.805-6.5c.043-.246.206-.57.398-.951.35-.694.797-1.581.797-2.549 0-1.5-.895-2-2-2z" class="mc-icon--mf"></path>'
        }
    }
}), define("spectrum/icon_global", ["require", "exports", "tslib", "tslib", "react", "spectrum/icon_templates/selectable", "spectrum/svg_icon_bundle", "spectrum/icon_global/bundle"], function(e, l, t, a, i, n, r, h) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), a = t.__importStar(a), i = t.__importStar(i), l.ICONS = h.ICONS, l.IconGlobal = function(e) {
        var l = e.name,
            t = i.createElement(r.SvgIconBundle, {
                focusable: "false",
                icon: h.ICONS[l]
            });
        return i.createElement(n.Component, a.__assign({
            icon: t
        }, e))
    }, l.IconGlobal.displayName = "IconGlobal"
}), define("spectrum/icon_table/bundle", ["require", "exports"], function(e, l) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), l.ICONS = {
        "overflow-small": {
            attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g fill="#637282"><circle cx="7.5" cy="12.5" r="1.5"></circle><circle cx="12.5" cy="12.5" r="1.5"></circle><circle cx="17.5" cy="12.5" r="1.5"></circle></g></g>'
        },
        overflow: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g fill="#637282"><circle cx="10.5" cy="16.5" r="1.5"></circle><circle cx="15.5" cy="16.5" r="1.5"></circle><circle cx="20.5" cy="16.5" r="1.5"></circle></g></g>'
        },
        "rowexpander-macos": {
            attrs: {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16"
            },
            dangerouslySetInnerIconHtml: '<path d="M10.764 8.193l-5.008 3.23a.483.483 0 0 1-.682-.17A.539.539 0 0 1 5 10.98V4.52c0-.287.222-.52.496-.52a.48.48 0 0 1 .26.077l5.008 3.23a.535.535 0 0 1 0 .886z" fill="#000"></path>'
        },
        "rowexpander-windows": {
            attrs: {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16"
            },
            dangerouslySetInnerIconHtml: '<path d="M12 7.75l-6.375 4.114V3.636L12 7.75z" fill="#000"></path>'
        },
        "view-small": {
            attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M9.018 10.018a4.27 4.27 0 0 1 6.035 0l1.603 1.602c.782.782.78 2.05 0 2.83l-1.603 1.603a4.27 4.27 0 0 1-6.035 0l-1.603-1.602a2.002 2.002 0 0 1 0-2.83l1.603-1.603zm2.946 5.196a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z" fill="#637282"></path></g>'
        },
        view: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M11.942 12.679a5.742 5.742 0 0 1 8.116 0l2.643 2.644c.781.78.777 2.05 0 2.827l-2.643 2.644a5.742 5.742 0 0 1-8.116 0L9.3 18.15a2.003 2.003 0 0 1 0-2.827l2.643-2.644zm3.962 6.987a3.025 3.025 0 1 0 0-6.05 3.025 3.025 0 0 0 0 6.05z" fill="#637282"></path></g>'
        }
    }
}), define("spectrum/icon_table", ["require", "exports", "tslib", "tslib", "react", "spectrum/icon_templates/actionable", "spectrum/svg_icon_bundle", "spectrum/icon_table/bundle"], function(e, l, t, a, i, n, r, h) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), a = t.__importStar(a), i = t.__importStar(i), l.ICONS = h.ICONS, l.IconTable = function(e) {
        var l = e.name,
            t = i.createElement(r.SvgIconBundle, {
                focusable: "false",
                icon: h.ICONS[l]
            });
        return i.createElement(n.Component, a.__assign({
            icon: t
        }, e))
    }, l.IconTable.displayName = "IconTable"
}), define("spectrum/icon_templates/actionable", ["require", "exports", "tslib", "tslib", "react", "classnames", "spectrum/icon_templates/css_utils"], function(e, l, t, a, i, n, r) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
            value: !0
        }),
        a = t.__importStar(a), i = t.__importStar(i), n = t.__importDefault(n), l.Component = function(e) {
            var l = e.className,
                t = e.icon,
                h = e.name,
                o = e.disabled,
                d = void 0 !== o && o,
                c = e.role,
                f = void 0 === c ? "img" : c,
                s = a.__rest(e, ["className", "icon", "name", "disabled", "role"]),
                v = n.default(r.getClassNamesForName("actionable", h), {
                    "mc-icon-template-actionable-disabled": d
                }, l);
            return i.cloneElement(t, a.__assign({
                className: v,
                role: f
            }, s))
        }, l.Component.displayName = "IconTemplateActionable"
}), define("spectrum/icon_templates/content", ["require", "exports", "tslib", "tslib", "react", "classnames", "spectrum/icon_templates/css_utils"], function(e, l, t, a, i, n, r) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), a = t.__importStar(a), i = t.__importStar(i), n = t.__importDefault(n), l.Component = function(e) {
        var l = e.className,
            t = e.icon,
            h = e.name,
            o = e.disabled,
            d = void 0 !== o && o,
            c = e.role,
            f = void 0 === c ? "img" : c,
            s = a.__rest(e, ["className", "icon", "name", "disabled", "role"]),
            v = n.default(r.getClassNamesForName("content", h), {
                "mc-icon-template-content-disabled": d
            }, l);
        return i.cloneElement(t, a.__assign({
            className: v,
            role: f
        }, s))
    }, l.Component.displayName = "IconTemplateContent"
}), define("spectrum/icon_templates/selectable", ["require", "exports", "tslib", "tslib", "react", "classnames", "spectrum/icon_templates/css_utils"], function(e, l, t, a, i, n, r) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), a = t.__importStar(a), i = t.__importStar(i), n = t.__importDefault(n), l.Component = function(e) {
        var l = e.className,
            t = e.icon,
            h = e.name,
            o = e.state,
            d = e.role,
            c = void 0 === d ? "img" : d,
            f = e.selected,
            s = void 0 !== f && f,
            v = a.__rest(e, ["className", "icon", "name", "state", "role", "selected"]),
            p = n.default(r.getClassNamesForName("selectable", h), {
                "mc-icon-template-selectable-selected": "disabled" !== o && s,
                "mc-icon-template-selectable-state-managed": !!o,
                "mc-icon-template-selectable-hovered": "hovered" === o,
                "mc-icon-template-selectable-active": "active" === o,
                "mc-icon-template-selectable-disabled": "disabled" === o
            }, l);
        return i.cloneElement(t, a.__assign({
            className: p,
            role: c
        }, v))
    }, l.Component.displayName = "IconTemplateSelectable"
}), define("spectrum/match", ["require", "exports", "tslib", "spectrum/match/match"], function(e, l, t, a) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), t.__exportStar(a, l)
}), define("spectrum/match/match", ["require", "exports", "tslib", "tslib", "react"], function(e, l, t, a, i) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), a = t.__importStar(a), i = t.__importStar(i);
    var n = (function(e) {
        function l() {
            var l = null !== e && e.apply(this, arguments) || this;
            return l.state = {
                isMediaMatched: !1
            }, l.handleMediaQueryListChange = function() {
                l.mediaQueryList && (l.mediaQueryList.matches ? l.handleMatch() : l.handleUnmatch())
            }, l.handleMatch = function() {
                var e = l.props.onMatch;
                e && e(), l.setState({
                    isMediaMatched: !0
                })
            }, l.handleUnmatch = function() {
                var e = l.props.onUnmatch;
                e && e(), l.setState({
                    isMediaMatched: !1
                })
            }, l
        }
        return a.__extends(l, e), l.prototype.componentDidMount = function() {
            this.registerMediaQuery(this.props)
        }, l.prototype.componentWillReceiveProps = function(e) {
            e.media !== this.props.media && (this.unregisterMediaQuery(), this.registerMediaQuery(e))
        }, l.prototype.componentWillUnmount = function() {
            this.unregisterMediaQuery()
        }, l.prototype.render = function() {
            var e = this.props.children,
                l = this.state.isMediaMatched;
            return e ? "function" == typeof e ? e({
                media: l
            }) : l ? e : null : null
        }, l.prototype.registerMediaQuery = function(e) {
            this.unregisterMediaQuery();
            var l = e.media,
                t = e.onSetup;
            this.mediaQueryList = window.matchMedia(l), this.mediaQueryList.addListener(this.handleMediaQueryListChange), t && t(), this.mediaQueryList.matches ? this.handleMatch() : this.handleUnmatch()
        }, l.prototype.unregisterMediaQuery = function() {
            this.mediaQueryList && this.mediaQueryList.removeListener(this.handleMediaQueryListChange), this.mediaQueryList = void 0
        }, l
    })(i.PureComponent);
    l.Match = n
}), define("spectrum/overflow_button", ["require", "exports", "tslib", "spectrum/overflow_button/overflow_button"], function(e, l, t, a) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), t.__exportStar(a, l)
}), define("spectrum/overflow_button/overflow_button", ["require", "exports", "tslib", "tslib", "classnames", "react", "spectrum/icon_table", "spectrum/button"], function(e, l, t, a, i, n, r, h) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), a = t.__importStar(a), i = t.__importDefault(i), n = t.__importStar(n), l.OverflowButton = function(e) {
        var l = e.className,
            t = e.size,
            o = e.variant,
            d = a.__rest(e, ["className", "size", "variant"]),
            c = "borderless" === o ? o : "secondary",
            f = i.default(l, "mc-overflow-button"),
            s = "small" === t ? "overflow-small" : "overflow";
        return n.createElement(h.Button, a.__assign({
            variant: c,
            className: f,
            size: t
        }, d), n.createElement(r.IconTable, {
            className: "mc-overflow-button-icon",
            name: s,
            disabled: d.disabled
        }))
    }, l.OverflowButton.displayName = "OverflowButton"
}), define("spectrum/tertiary_link", ["require", "exports", "tslib", "spectrum/tertiary_link/tertiary_link", "spectrum/tertiary_link/tertiary_list"], function(e, l, t, a, i) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), t.__exportStar(a, l), t.__exportStar(i, l)
}), define("spectrum/tertiary_link/tertiary_link", ["require", "exports", "tslib", "tslib", "classnames", "react", "spectrum/icon_action"], function(e, l, t, a, i, n, r) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), a = t.__importStar(a), i = t.__importDefault(i), n = t.__importStar(n), l.TertiaryLink = n.forwardRef(function(e, l) {
        var t = e.children,
            h = e.className,
            o = e.disabled,
            d = e.href,
            c = e.icon,
            f = e.type,
            s = a.__rest(e, ["children", "className", "disabled", "href", "icon", "type"]),
            v = s.tagName,
            p = void 0 === v ? "button" : v,
            u = a.__rest(s, ["tagName"]),
            m = i.default("mc-tertiary-link-button", h),
            g = a.__assign({}, u, {
                className: m
            });
        return d && (p = "a"), "button" === p ? (g.disabled = o, g.type = f) : ("a" === p && (g.href = d), o && (g.tabIndex = -1)), n.createElement(p, a.__assign({}, g), n.createElement("span", {
            className: "mc-tertiary-link-button-content"
        }, c && n.createElement("span", {
            className: "mc-tertiary-icon-wrapper"
        }, n.createElement(r.IconAction, {
            name: c
        })), n.createElement("span", {
            className: "mc-tertiary-icon-text"
        }, t)))
    }), l.TertiaryLink.displayName = "TertiaryLink"
}), define("spectrum/tertiary_link/tertiary_list", ["require", "exports", "tslib", "tslib", "classnames", "react"], function(e, l, t, a, i, n) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), a = t.__importStar(a), i = t.__importDefault(i), n = t.__importStar(n), l.TertiaryList = function(e) {
        var l = e.children,
            t = e.className,
            r = a.__rest(e, ["children", "className"]),
            h = i.default("mc-tertiary-list", t);
        return n.createElement("ul", a.__assign({
            className: h
        }, r), l && n.Children.map(l, function(e) {
            return n.createElement("li", {
                className: "mc-tertiary-list-element",
                key: e.key || void 0
            }, n.cloneElement(e))
        }))
    }, l.TertiaryList.displayName = "TertiaryList"
}), define("spectrum/util/raf_throttle", ["require", "exports"], function(e, l) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    });
    var t = (function() {
        function e(e, l) {
            var t = this;
            this.request = function() {
                t.ticking || (t.ticking = !0, t.currentRequestId = t.window.requestAnimationFrame(function() {
                    t.thunk(), t.ticking = !1
                }))
            }, this.cancelPending = function() {
                t.window.cancelAnimationFrame(t.currentRequestId)
            }, this.thunk = e, this.window = l || window
        }
        return e
    })();
    l.RafThrottle = t
}), define("spectrum/vertically_fixed", ["require", "exports", "tslib", "spectrum/vertically_fixed/vertically_fixed"], function(e, l, t, a) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), t.__exportStar(a, l)
}), define("spectrum/vertically_fixed/vertically_fixed", ["require", "exports", "tslib", "tslib", "classnames", "exenv", "react", "spectrum/util/raf_throttle"], function(e, l, t, a, i, n, r, h) {
    "use strict";

    function o(e) {
        return "function" == typeof e
    }
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), a = t.__importStar(a), i = t.__importDefault(i), r = t.__importStar(r);
    var d = (function(e) {
        function l(l) {
            var t = e.call(this, l) || this;
            return t.state = {
                xOffset: 0
            }, t.handleChange = function() {
                var e = t.state.xOffset,
                    l = t.getWindow().pageXOffset;
                e !== l && t.setState({
                    xOffset: l
                })
            }, t.throttle = new h.RafThrottle(t.handleChange, t.getWindow()), t
        }
        return a.__extends(l, e), l.prototype.componentWillMount = function() {
            n.canUseViewport && this.handleChange()
        }, l.prototype.componentDidMount = function() {
            this.getWindow().addEventListener("scroll", this.throttle.request)
        }, l.prototype.componentWillUnmount = function() {
            this.getWindow().removeEventListener("scroll", this.throttle.request), this.throttle.cancelPending()
        }, l.prototype.render = function() {
            var e = this.props,
                l = e.style,
                t = e.tag,
                n = void 0 === t ? "div" : t,
                h = (e.window, e.className),
                d = a.__rest(e, ["style", "tag", "window", "className"]),
                c = this.state.xOffset,
                f = i.default("mc-vertically-fixed", h),
                s = n,
                v = a.__assign({}, d, {
                    className: f,
                    style: a.__assign({}, l, {
                        marginLeft: -c
                    })
                });
            return o(s) ? s(v) : r.createElement(s, a.__assign({}, v))
        }, l.prototype.getWindow = function() {
            return this.props.window || window
        }, l.displayName = "VerticallyFixed", l.defaultProps = {
            tag: "div"
        }, l
    })(r.Component);
    l.VerticallyFixed = d
});
//# sourceMappingURL=pkg-mcl-icons.min.js-vflmYPyRT.map