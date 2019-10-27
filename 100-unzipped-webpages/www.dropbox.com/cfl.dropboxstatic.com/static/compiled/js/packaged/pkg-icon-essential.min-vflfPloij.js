define("modules/clean/react/icon/extension_map", ["require", "exports"], function(e, i) {
    "use strict";

    function _(e) {
        return t[e] || "page_white"
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var t = {
        _other: "page_white",
        log: "page_white",
        msg: "page_white",
        sln: "page_white",
        vcproj: "page_white",
        txt: "page_white_text",
        wps: "page_white_text",
        doc: "page_white_word",
        docx: "page_white_word",
        docm: "page_white_word",
        rtf: "page_white_word",
        pages: "page_white_word",
        wpd: "page_white_word",
        odt: "page_white_word",
        pdf: "page_white_acrobat",
        eps: "page_white_acrobat",
        xls: "page_white_excel",
        xlsm: "page_white_excel",
        xlsx: "page_white_excel",
        xlsb: "page_white_excel",
        ods: "page_white_excel",
        csv: "page_white_excel",
        ppt: "page_white_powerpoint",
        pptx: "page_white_powerpoint",
        pptm: "page_white_powerpoint",
        pps: "page_white_powerpoint",
        ppsx: "page_white_powerpoint",
        ppsm: "page_white_powerpoint",
        odp: "page_white_powerpoint",
        key: "page_white_keynote",
        css: "page_white_code",
        html: "page_white_code",
        htm: "page_white_code",
        xml: "page_white_code",
        php: "page_white_code",
        c: "page_white_code",
        h: "page_white_code",
        rb: "page_white_code",
        cpp: "page_white_code",
        java: "page_white_code",
        js: "page_white_code",
        json: "page_white_code",
        cs: "page_white_code",
        py: "page_white_code",
        pl: "page_white_code",
        exe: "page_white_gear",
        dll: "page_white_gear",
        app: "page_white_gear",
        mp3: "page_white_sound",
        m3u: "page_white_sound",
        wav: "page_white_sound",
        m4a: "page_white_sound",
        wma: "page_white_sound",
        aif: "page_white_sound",
        iff: "page_white_sound",
        mid: "page_white_sound",
        mpa: "page_white_sound",
        ra: "page_white_sound",
        aiff: "page_white_sound",
        amr: "page_white_sound",
        ogg: "page_white_sound",
        "3ga": "page_white_sound",
        aac: "page_white_sound",
        oga: "page_white_sound",
        gif: "page_white_picture",
        png: "page_white_picture",
        jpg: "page_white_picture",
        jpeg: "page_white_picture",
        tiff: "page_white_picture",
        tif: "page_white_picture",
        bmp: "page_white_picture",
        odg: "page_white_picture",
        "3fr": "page_white_picture",
        ari: "page_white_picture",
        arw: "page_white_picture",
        srf: "page_white_picture",
        sr2: "page_white_picture",
        bay: "page_white_picture",
        crw: "page_white_picture",
        cr2: "page_white_picture",
        cap: "page_white_picture",
        eip: "page_white_picture",
        dcs: "page_white_picture",
        dcr: "page_white_picture",
        drf: "page_white_picture",
        k25: "page_white_picture",
        kdc: "page_white_picture",
        dng: "page_white_picture",
        erf: "page_white_picture",
        fff: "page_white_picture",
        iiq: "page_white_picture",
        mef: "page_white_picture",
        mos: "page_white_picture",
        mrw: "page_white_picture",
        nef: "page_white_picture",
        nrw: "page_white_picture",
        orf: "page_white_picture",
        pef: "page_white_picture",
        ptx: "page_white_picture",
        pxn: "page_white_picture",
        r3d: "page_white_picture",
        raf: "page_white_picture",
        rw2: "page_white_picture",
        raw: "page_white_picture",
        rwl: "page_white_picture",
        rwz: "page_white_picture",
        obm: "page_white_picture",
        srw: "page_white_picture",
        x3f: "page_white_picture",
        svg: "page_white_picture",
        asf: "page_white_film",
        avi: "page_white_film",
        flv: "page_white_film",
        mov: "page_white_film",
        mp4: "page_white_film",
        mkv: "page_white_film",
        wmv: "page_white_film",
        mpg: "page_white_film",
        "3gp": "page_white_film",
        "3gpp": "page_white_film",
        m4v: "page_white_film",
        vob: "page_white_film",
        ogv: "page_white_film",
        gz: "page_white_compressed",
        tar: "page_white_compressed",
        rar: "page_white_compressed",
        zip: "page_white_compressed",
        tgz: "page_white_compressed",
        bz2: "page_white_compressed",
        iso: "page_white_dvd",
        dmg: "page_white_dvd",
        ai: "page_white_vector",
        psd: "page_white_paint",
        au: "page_white_sound",
        fla: "page_white_flash",
        swf: "page_white_flash",
        url: "page_white_linkfile",
        webloc: "page_white_linkfile",
        website: "page_white_linkfile"
    };
    i.getIconNameForExtension = _
}), define("modules/clean/react/icon/icon_helper", ["require", "exports", "modules/clean/filetypes", "modules/clean/filepath", "modules/clean/react/icon/extension_map"], function(e, i, _, t, p) {
    "use strict";

    function a(e, _) {
        switch (void 0 === _ && (_ = i.ICON_SIZES.SMALL), _) {
            case i.ICON_SIZES.LARGE:
                return e + "_32";
            case i.ICON_SIZES.XLARGE:
                return e + "_64";
            default:
                return e
        }
    }

    function r(e) {
        return e === i.ICON_SIZES.XLARGE ? c.Large : c.Small
    }

    function w(e, i) {
        var _ = (void 0 === i ? {} : i).size;
        return a(p.getIconNameForExtension(e), _)
    }

    function g(e, i) {
        var _ = (void 0 === i ? {} : i).size;
        return w(t.file_extension(e).toLowerCase(), {
            size: _
        })
    }

    function o(e) {
        var i = void 0 === e ? {} : e,
            t = i.fileType,
            p = void 0 === t ? _.FileTypes.FOLDER : t,
            a = i.isInTeamFolderTree,
            r = void 0 !== a && a,
            w = i.isCameraUploads,
            g = void 0 !== w && w,
            o = i.isViewOnly,
            h = void 0 !== o && o,
            s = i.isConfidential,
            d = void 0 !== s && s,
            n = i.size,
            u = void 0 === n ? c.Small : n,
            l = i.iconPostfix,
            f = void 0 === l ? "" : l,
            m = "";
        if (d) return "folder_confidential" + f + "-" + u;
        if (r) m = "_team";
        else switch (p) {
            case _.FileTypes.TEAM_MEMBER_FOLDER:
                return "folder_team_member" + f + "-" + u;
            case _.FileTypes.SANDBOX:
                return "folder_app" + f + "-" + u;
            case _.FileTypes.PACKAGE:
            case _.FileTypes.FOLDER:
            case _.FileTypes.FILE:
                if (g) return "folder_camera_upload" + f + "-" + u;
                break;
            case _.FileTypes.SHARED_FOLDER:
                m = "_shared";
                break;
            case _.FileTypes.TEAM_SHARED_FOLDER:
                m = "_team"
        }
        var v = "";
        return h && "" !== m && (v = "_read_only"), "folder" + m + v + f + "-" + u
    }

    function h(e) {
        var _ = void 0 === e ? {} : e,
            t = _.isShared,
            p = void 0 !== t && t,
            r = _.isDeleted,
            w = void 0 !== r && r,
            g = _.isTeamFolder,
            o = void 0 !== g && g,
            h = _.isInTeamFolderTree,
            c = void 0 !== h && h,
            s = _.isViewOnly,
            d = void 0 !== s && s,
            n = _.size,
            u = void 0 === n ? i.ICON_SIZES.LARGE : n,
            l = "";
        o ? l = "_team" : (p || c) && (l = "_user");
        var f = "";
        d && "" !== l && (f = "_locked");
        var m = "";
        return w && (m = "_gray"), a("folder" + l + f + m, u)
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var c;
    (function(e) {
        e.Small = "small", e.Large = "large"
    })(c = i.SpectrumIconSize || (i.SpectrumIconSize = {})), i.ICON_SIZES = {
        SMALL: "SMALL",
        LARGE: "LARGE",
        XLARGE: "XLARGE"
    }, i.toSpectrumIconSize = r, i.extension_icon = w, i.file_icon = g, i.spectrumFolderIcon = o, i.folder_icon = h
});
//# sourceMappingURL=pkg-icon-essential.min.js-vfllxz8ie.map