login_js = """
var xe, Ce, _e, Ae = 16, ke = Ae, Se = 65536, Ee = Se >>> 1, Oe = Se * Se, Me = Se - 1;
var Ke = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
var Xe = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535);

function Ze(t, e, n, i, r) {
    for (var o = Math.min(e + r, t.length), a = e, s = i; a < o; ++a,
        ++s)
        n[s] = t[a]
}
function Je(t, e) {
    var n = Math.floor(e / ke)
        , i = new je;
    Ze(t.digits, 0, i.digits, n, i.digits.length - n);
    for (var r = e % ke, o = ke - r, a = i.digits.length - 1, s = a - 1; a > 0; --a,
        --s)
        i.digits[a] = i.digits[a] << r & Me | (i.digits[s] & Xe[r]) >>> o;
    return i.digits[0] = i.digits[a] << r & Me,
        i.isNeg = t.isNeg,
        i
}
function je(t) {
    this.digits = "boolean" == typeof t && 1 == t ? null : xe.slice(0),
        this.isNeg = !1
}

function Te(t) {
    xe = new Array(t);
    for (var e = 0; e < xe.length; e++)
        xe[e] = 0;
    Ce = new je,
        (_e = new je).digits[0] = 1
}

function ye() {
    var t = String(Date.parse(new Date)).substring(0, 10)
        , e = String(Math.random());
    return t + String(e + t + t + e).substring(0, 32)
}
function we(t, e) {
    for (var n = new Array, i = e.length, r = 0; r < i;)
        n[r] = e.charCodeAt(r),
            r++;
    for (; n.length % t.chunkSize != 0;)
        n[r++] = 0;
    var o, a, s, c = n.length, l = "";
    for (r = 0; r < c; r += t.chunkSize) {
        for (s = new je,
            o = 0,
            a = r; a < r + t.chunkSize; ++o)
            s.digits[o] = n[a++],
                s.digits[o] += n[a++] << 8;
        var u = t.barrett.powMod(s, t.e);
        l += (16 == t.radix ? ze(u) : Ne(u, t.radix)) + " "
    }
    return l.substring(0, l.length - 1)
}
function Fe(t) {
    var e = 48
        , n = 97
        , a = 65;
    return t >= e && t <= e + 9 ? t - e : t >= a && t <= 90 ? 10 + t - a : t >= n && t <= n + 25 ? 10 + t - n : 0
}
function Ve(t) {
    for (var e = 0, n = Math.min(t.length, 4), i = 0; i < n; ++i)
        e <<= 4,
            e |= Fe(t.charCodeAt(i));
    return e
}
function Ue(t) {
    for (var e = new je, i = t.length, n = 0; i > 0; i -= 4,
        ++n)
        e.digits[n] = Ve(t.substr(Math.max(i - 4, 0), Math.min(i, 4)));
    return e
}
function be(t, e, n) {
    this.e = Ue(t),
        this.d = Ue(e),
        this.m = Ue(n),
        this.chunkSize = 2 * We(this.m),
        this.radix = 16,
        this.barrett = new sn(this.m)
}
function We(t) {
    for (var e = t.digits.length - 1; e > 0 && 0 == t.digits[e];)
        --e;
    return e
}
function Ie(t) {
    var e = new je(!0);
    return e.digits = t.digits.slice(0),
        e.isNeg = t.isNeg,
        e
}
function sn(t) {
    this.modulus = Ie(t),
        this.k = We(this.modulus) + 1;
    var e = new je;
    e.digits[2 * this.k] = 1,
        this.mu = an(e, this.modulus),
        this.bkplus1 = new je,
        this.bkplus1.digits[this.k + 1] = 1,
        this.modulo = cn,
        this.multiplyMod = un,
        this.powMod = ln
}
function un(t, e) {
    var n = Qe(t, e);
    return this.modulo(n)
}
function Qe(t, e) {
    for (var n, i, r, o = new je, a = We(t), s = We(e), c = 0; c <= s; ++c) {
        n = 0,
            r = c;
        for (var l = 0; l <= a; ++l,
            ++r)
            i = o.digits[r] + t.digits[l] * e.digits[c] + n,
                o.digits[r] = i & Me,
                n = i >>> Ae;
        o.digits[c + a + 1] = n
    }
    return o.isNeg = t.isNeg != e.isNeg,
        o
}
function ln(t, e) {
    var n = new je;
    n.digits[0] = 1;
    for (var i = t, r = e; 0 != (1 & r.digits[0]) && (n = this.multiplyMod(n, i)),
        0 != (r = $e(r, 1)).digits[0] || 0 != We(r);)
        i = this.multiplyMod(i, i);
    return n
}
function en(t, e) {
    var n = new je;
    return Ze(t.digits, e, n.digits, 0, n.digits.length - e),
        n
}
function ze(t) {
    for (var e = "", n = (We(t),
        We(t)); n > -1; --n)
        e += De(t.digits[n]);
    return e
}
function Pe(t) {
    for (var e = "", n = t.length - 1; n > -1; --n)
        e += t.charAt(n);
    return e
}
var Re = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
function De(t) {
    for (var e = 15, n = "", i = 0; i < 4; ++i)
        n += Re[t & e],
            t >>>= 4;
    return Pe(n)
}

function cn(t) {
    var e = en(t, this.k - 1)
        , i = en(Qe(e, this.mu), this.k + 1)
        , s = Ge(nn(t, this.k + 1), nn(Qe(i, this.modulus), this.k + 1));
    s.isNeg && (s = He(s, this.bkplus1));
    for (var n = rn(s, this.modulus) >= 0; n;)
        n = rn(s = Ge(s, this.modulus), this.modulus) >= 0;
    return s
}
function nn(t, e) {
    var n = new je;
    return Ze(t.digits, 0, n.digits, 0, e),
        n
}

function Ge(t, e) {
    var n;
    if (t.isNeg != e.isNeg)
        e.isNeg = !e.isNeg,
            n = He(t, e),
            e.isNeg = !e.isNeg;
    else {
        var i, r;
        n = new je,
            r = 0;
        for (var o = 0; o < t.digits.length; ++o)
            i = t.digits[o] - e.digits[o] + r,
                n.digits[o] = i % Se,
                n.digits[o] < 0 && (n.digits[o] += Se),
                r = 0 - Number(i < 0);
        if (-1 == r) {
            for (r = 0,
                o = 0; o < t.digits.length; ++o)
                i = 0 - n.digits[o] + r,
                    n.digits[o] = i % Se,
                    n.digits[o] < 0 && (n.digits[o] += Se),
                    r = 0 - Number(i < 0);
            n.isNeg = !t.isNeg
        } else
            n.isNeg = t.isNeg
    }
    return n
}
function rn(t, e) {
    if (t.isNeg != e.isNeg)
        return 1 - 2 * Number(t.isNeg);
    for (var n = t.digits.length - 1; n >= 0; --n)
        if (t.digits[n] != e.digits[n])
            return t.isNeg ? 1 - 2 * Number(t.digits[n] > e.digits[n]) : 1 - 2 * Number(t.digits[n] < e.digits[n]);
    return 0
}
function tn(t, e) {
    var n = new je;
    return Ze(t.digits, 0, n.digits, e, n.digits.length - e),
        n
}
function on(t, e) {
    var n, i, r = qe(t), o = qe(e), a = e.isNeg;
    if (r < o)
        return t.isNeg ? ((n = Ie(_e)).isNeg = !e.isNeg,
            t.isNeg = !1,
            e.isNeg = !1,
            i = Ge(e, t),
            t.isNeg = !0,
            e.isNeg = a) : (n = new je,
                i = Ie(t)),
            new Array(n, i);
    n = new je,
        i = t;
    for (var s = Math.ceil(o / ke) - 1, c = 0; e.digits[s] < Ee;)
        e = Je(e, 1),
            ++c,
            ++o,
            s = Math.ceil(o / ke) - 1;
    i = Je(i, c),
        r += c;
    for (var l = Math.ceil(r / ke) - 1, u = tn(e, l - s); -1 != rn(i, u);)
        ++n.digits[l - s],
            i = Ge(i, u);
    for (var f = l; f > s; --f) {
        var d = f >= i.digits.length ? 0 : i.digits[f]
            , h = f - 1 >= i.digits.length ? 0 : i.digits[f - 1]
            , p = f - 2 >= i.digits.length ? 0 : i.digits[f - 2]
            , g = s >= e.digits.length ? 0 : e.digits[s]
            , v = s - 1 >= e.digits.length ? 0 : e.digits[s - 1];
        n.digits[f - s - 1] = d == g ? Me : Math.floor((d * Se + h) / g);
        for (var m = n.digits[f - s - 1] * (g * Se + v), b = d * Oe + (h * Se + p); m > b;)
            --n.digits[f - s - 1],
                m = n.digits[f - s - 1] * (g * Se | v),
                b = d * Se * Se + (h * Se + p);
        (i = Ge(i, Ye(u = tn(e, f - s - 1), n.digits[f - s - 1]))).isNeg && (i = He(i, u),
            --n.digits[f - s - 1])
    }
    return i = $e(i, c),
        n.isNeg = t.isNeg != a,
        t.isNeg && (n = a ? He(n, _e) : Ge(n, _e),
            i = Ge(e = $e(e, c), i)),
        0 == i.digits[0] && 0 == We(i) && (i.isNeg = !1),
        new Array(n, i)
}
function $e(t, e) {
    var n = Math.floor(e / ke)
        , i = new je;
    Ze(t.digits, n, i.digits, 0, t.digits.length - n);
    for (var r = e % ke, o = ke - r, a = 0, s = a + 1; a < i.digits.length - 1; ++a,
        ++s)
        i.digits[a] = i.digits[a] >>> r | (i.digits[s] & Ke[r]) << o;
    return i.digits[i.digits.length - 1] >>>= r,
        i.isNeg = t.isNeg,
        i
}
function Ye(t, e) {
    var n, i, r, o = new je;
    n = We(t),
        i = 0;
    for (var a = 0; a <= n; ++a)
        r = o.digits[a] + t.digits[a] * e + i,
            o.digits[a] = r & Me,
            i = r >>> Ae;
    return o.digits[1 + n] = i,
        o
}
function qe(t) {
    var e, n = We(t), i = t.digits[n], r = (n + 1) * ke;
    for (e = r; e > r - ke && 0 == (32768 & i); --e)
        i <<= 1;
    return e
}
function an(t, e) {
    return on(t, e)[0]
}
function me(t) {
    var e = "A5245A4630DD7CE9D8A967E33A50EB52C2634FD042C4BFBCF5A5C1317A234FD0D1D2C75D083946AF70CE480C399FAD8EEBE9F5A904F30E4D3C91CDD7C27C4D07E27015D46B29A003E9D49834E19041A7BA45A95E6161697975721E88949E8023DA682895086223683593F054E7AAE0E07C40DB33BD80EE5909CE48D17C07D097";
    return Te(131),
        t = ye() + t,
        we(new be("10001", "", e), t)
}
function Te(t) {
    xe = new Array(t);
    for (var e = 0; e < xe.length; e++)
        xe[e] = 0;
    Ce = new je,
        (_e = new je).digits[0] = 1
}

ttt = {
    _append: function(t) {
        "string" == typeof t && (t = p.parse(t)),
        this._data.concat(t),
        this._nDataBytes += t.sigBytes
    },
    init: function(t) {
        this._data =new function (){
            this.words = [],
            this.sigBytes =0
        }()
        this._nDataBytes = 0


    },

}

//webpack打包部分
var sss;
!(function (e) {
    n = {}
    function h(t) {
        if (n[t])
            return n[t].exports;
        var d = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(d.exports, d, d.exports, h),
            d.l = !0,
            d.exports
    };
    h.n = function(t) {
        let e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return h.d(e, "a", e),
        e
    }
    h.d = function(t, e, i) {
        h.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }
    h.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    sss = h
})({
    "21bf": function(t, e, n) {
        (function(e) {
            !function(e, n) {
                t.exports = n()
            }(0, (function() {
                var t = t || function(t, i) {
                    var r;
                    if ("undefined" != typeof window && window.crypto && (r = window.crypto),
                    "undefined" != typeof self && self.crypto && (r = self.crypto),
                    "undefined" != typeof globalThis && globalThis.crypto && (r = globalThis.crypto),
                    !r && "undefined" != typeof window && window.msCrypto && (r = window.msCrypto),
                    !r && void 0 !== e && e.crypto && (r = e.crypto),
                    !r)
                        try {
                            r = n(0)
                        } catch (t) {}
                    var o = function() {
                        if (r) {
                            if ("function" == typeof r.getRandomValues)
                                try {
                                    return r.getRandomValues(new Uint32Array(1))[0]
                                } catch (t) {}
                            if ("function" == typeof r.randomBytes)
                                try {
                                    return r.randomBytes(4).readInt32LE()
                                } catch (t) {}
                        }
                        throw new Error("Native crypto module could not be used to get secure random number.")
                    }
                      , a = Object.create || function() {
                        function t() {}
                        return function(e) {
                            var n;
                            return t.prototype = e,
                            n = new t,
                            t.prototype = null,
                            n
                        }
                    }()
                      , s = {}
                      , c = s.lib = {}
                      , l = c.Base = {
                        extend: function(t) {
                            var e = a(this);
                            return t && e.mixIn(t),
                            e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
                                e.$super.init.apply(this, arguments)
                            }
                            ),
                            e.init.prototype = e,
                            e.$super = this,
                            e
                        },
                        create: function() {
                            var t = this.extend();
                            return t.init.apply(t, arguments),
                            t
                        },
                        init: function() {},
                        mixIn: function(t) {
                            for (var e in t)
                                t.hasOwnProperty(e) && (this[e] = t[e]);
                            t.hasOwnProperty("toString") && (this.toString = t.toString)
                        },
                        clone: function() {
                            return this.init.prototype.extend(this)
                        }
                    }
                      , u = c.WordArray = l.extend({
                        init: function(t, e) {
                            t = this.words = t || [],
                            this.sigBytes = e != i ? e : 4 * t.length
                        },
                        toString: function(t) {
                            return (t || d).stringify(this)
                        },
                        concat: function(t) {
                            var e = this.words
                              , n = t.words
                              , i = this.sigBytes
                              , r = t.sigBytes;
                            if (this.clamp(),
                            i % 4)
                                for (var o = 0; o < r; o++) {
                                    var a = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                    e[i + o >>> 2] |= a << 24 - (i + o) % 4 * 8
                                }
                            else
                                for (var s = 0; s < r; s += 4)
                                    e[i + s >>> 2] = n[s >>> 2];
                            return this.sigBytes += r,
                            this
                        },
                        clamp: function() {
                            var e = this.words
                              , n = this.sigBytes;
                            e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                            e.length = t.ceil(n / 4)
                        },
                        clone: function() {
                            var t = l.clone.call(this);
                            return t.words = this.words.slice(0),
                            t
                        },
                        random: function(t) {
                            for (var e = [], n = 0; n < t; n += 4)
                                e.push(o());
                            return new u.init(e,t)
                        }
                    })
                      , f = s.enc = {}
                      , d = f.Hex = {
                        stringify: function(t) {
                            for (var e = t.words, n = t.sigBytes, i = [], r = 0; r < n; r++) {
                                var o = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                i.push((o >>> 4).toString(16)),
                                i.push((15 & o).toString(16))
                            }
                            return i.join("")
                        },
                        parse: function(t) {
                            for (var e = t.length, n = [], i = 0; i < e; i += 2)
                                n[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
                            return new u.init(n,e / 2)
                        }
                    }
                      , h = f.Latin1 = {
                        stringify: function(t) {
                            for (var e = t.words, n = t.sigBytes, i = [], r = 0; r < n; r++) {
                                var o = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                i.push(String.fromCharCode(o))
                            }
                            return i.join("")
                        },
                        parse: function(t) {
                            for (var e = t.length, n = [], i = 0; i < e; i++)
                                n[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
                            return new u.init(n,e)
                        }
                    }
                      , p = f.Utf8 = {
                        stringify: function(t) {
                            try {
                                return decodeURIComponent(escape(h.stringify(t)))
                            } catch (t) {
                                throw new Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function(t) {
                            return h.parse(unescape(encodeURIComponent(t)))
                        }
                    }
                      , g = c.BufferedBlockAlgorithm = l.extend({
                        reset: function() {
                            this._data = new u.init,
                            this._nDataBytes = 0
                        },
                        _append: function(t) {
                            "string" == typeof t && (t = p.parse(t)),
                            this._data.concat(t),
                            this._nDataBytes += t.sigBytes
                        },
                        _process: function(e) {
                            var n, i = this._data, r = i.words, o = i.sigBytes, a = this.blockSize, c = o / (4 * a), l = (c = e ? t.ceil(c) : t.max((0 | c) - this._minBufferSize, 0)) * a, f = t.min(4 * l, o);
                            if (l) {
                                for (var d = 0; d < l; d += a)
                                    this._doProcessBlock(r, d);
                                n = r.splice(0, l),
                                i.sigBytes -= f
                            }
                            return new u.init(n,f)
                        },
                        clone: function() {
                            var t = l.clone.call(this);
                            return t._data = this._data.clone(),
                            t
                        },
                        _minBufferSize: 0
                    })
                      , v = (c.Hasher = g.extend({
                        cfg: l.extend(),
                        init: function(t) {
                            this.cfg = this.cfg.extend(t),
                            this.reset()
                        },
                        reset: function() {
                            g.reset.call(this),
                            this._doReset()
                        },
                        update: function(t) {
                            return this._append(t),
                            this._process(),
                            this
                        },
                        finalize: function(t) {
                            return t && this._append(t),
                            this._doFinalize()
                        },
                        blockSize: 16,
                        _createHelper: function(t) {
                            return function(e, n) {
                                return new t.init(n).finalize(e)
                            }
                        },
                        _createHmacHelper: function(t) {
                            return function(e, n) {
                                return new v.HMAC.init(t,n).finalize(e)
                            }
                        }
                    }),
                    s.algo = {});
                    return s
                }(Math);
                return t
            }
            ))
        }
        ).call(this, n("c8ba"))
    },
    c8ba: function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    },
    "72fe": function(t, e, n) {
        var i;
        i = function(t) {
            return function(e) {
                var n = t
                  , i = n.lib
                  , r = i.WordArray
                  , o = i.Hasher
                  , a = n.algo
                  , s = [];
                !function() {
                    for (var t = 0; t < 64; t++)
                        s[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0
                }();
                var c = a.MD5 = o.extend({
                    _doReset: function() {
                        this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878])
                    },
                    _doProcessBlock: function(t, e) {
                        for (var n = 0; n < 16; n++) {
                            var i = e + n
                              , r = t[i];
                            t[i] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8)
                        }
                        var o = this._hash.words
                          , a = t[e + 0]
                          , c = t[e + 1]
                          , h = t[e + 2]
                          , p = t[e + 3]
                          , g = t[e + 4]
                          , v = t[e + 5]
                          , m = t[e + 6]
                          , b = t[e + 7]
                          , y = t[e + 8]
                          , w = t[e + 9]
                          , x = t[e + 10]
                          , C = t[e + 11]
                          , _ = t[e + 12]
                          , A = t[e + 13]
                          , k = t[e + 14]
                          , S = t[e + 15]
                          , E = o[0]
                          , O = o[1]
                          , M = o[2]
                          , T = o[3];
                        E = l(E, O, M, T, a, 7, s[0]),
                        T = l(T, E, O, M, c, 12, s[1]),
                        M = l(M, T, E, O, h, 17, s[2]),
                        O = l(O, M, T, E, p, 22, s[3]),
                        E = l(E, O, M, T, g, 7, s[4]),
                        T = l(T, E, O, M, v, 12, s[5]),
                        M = l(M, T, E, O, m, 17, s[6]),
                        O = l(O, M, T, E, b, 22, s[7]),
                        E = l(E, O, M, T, y, 7, s[8]),
                        T = l(T, E, O, M, w, 12, s[9]),
                        M = l(M, T, E, O, x, 17, s[10]),
                        O = l(O, M, T, E, C, 22, s[11]),
                        E = l(E, O, M, T, _, 7, s[12]),
                        T = l(T, E, O, M, A, 12, s[13]),
                        M = l(M, T, E, O, k, 17, s[14]),
                        E = u(E, O = l(O, M, T, E, S, 22, s[15]), M, T, c, 5, s[16]),
                        T = u(T, E, O, M, m, 9, s[17]),
                        M = u(M, T, E, O, C, 14, s[18]),
                        O = u(O, M, T, E, a, 20, s[19]),
                        E = u(E, O, M, T, v, 5, s[20]),
                        T = u(T, E, O, M, x, 9, s[21]),
                        M = u(M, T, E, O, S, 14, s[22]),
                        O = u(O, M, T, E, g, 20, s[23]),
                        E = u(E, O, M, T, w, 5, s[24]),
                        T = u(T, E, O, M, k, 9, s[25]),
                        M = u(M, T, E, O, p, 14, s[26]),
                        O = u(O, M, T, E, y, 20, s[27]),
                        E = u(E, O, M, T, A, 5, s[28]),
                        T = u(T, E, O, M, h, 9, s[29]),
                        M = u(M, T, E, O, b, 14, s[30]),
                        E = f(E, O = u(O, M, T, E, _, 20, s[31]), M, T, v, 4, s[32]),
                        T = f(T, E, O, M, y, 11, s[33]),
                        M = f(M, T, E, O, C, 16, s[34]),
                        O = f(O, M, T, E, k, 23, s[35]),
                        E = f(E, O, M, T, c, 4, s[36]),
                        T = f(T, E, O, M, g, 11, s[37]),
                        M = f(M, T, E, O, b, 16, s[38]),
                        O = f(O, M, T, E, x, 23, s[39]),
                        E = f(E, O, M, T, A, 4, s[40]),
                        T = f(T, E, O, M, a, 11, s[41]),
                        M = f(M, T, E, O, p, 16, s[42]),
                        O = f(O, M, T, E, m, 23, s[43]),
                        E = f(E, O, M, T, w, 4, s[44]),
                        T = f(T, E, O, M, _, 11, s[45]),
                        M = f(M, T, E, O, S, 16, s[46]),
                        E = d(E, O = f(O, M, T, E, h, 23, s[47]), M, T, a, 6, s[48]),
                        T = d(T, E, O, M, b, 10, s[49]),
                        M = d(M, T, E, O, k, 15, s[50]),
                        O = d(O, M, T, E, v, 21, s[51]),
                        E = d(E, O, M, T, _, 6, s[52]),
                        T = d(T, E, O, M, p, 10, s[53]),
                        M = d(M, T, E, O, x, 15, s[54]),
                        O = d(O, M, T, E, c, 21, s[55]),
                        E = d(E, O, M, T, y, 6, s[56]),
                        T = d(T, E, O, M, S, 10, s[57]),
                        M = d(M, T, E, O, m, 15, s[58]),
                        O = d(O, M, T, E, A, 21, s[59]),
                        E = d(E, O, M, T, g, 6, s[60]),
                        T = d(T, E, O, M, C, 10, s[61]),
                        M = d(M, T, E, O, h, 15, s[62]),
                        O = d(O, M, T, E, w, 21, s[63]),
                        o[0] = o[0] + E | 0,
                        o[1] = o[1] + O | 0,
                        o[2] = o[2] + M | 0,
                        o[3] = o[3] + T | 0
                    },
                    _doFinalize: function() {
                        var t = this._data
                          , n = t.words
                          , i = 8 * this._nDataBytes
                          , r = 8 * t.sigBytes;
                        n[r >>> 5] |= 128 << 24 - r % 32;
                        var o = e.floor(i / 4294967296)
                          , a = i;
                        n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                        n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
                        t.sigBytes = 4 * (n.length + 1),
                        this._process();
                        for (var s = this._hash, c = s.words, l = 0; l < 4; l++) {
                            var u = c[l];
                            c[l] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8)
                        }
                        return s
                    },
                    clone: function() {
                        var t = o.clone.call(this);
                        return t._hash = this._hash.clone(),
                        t
                    }
                });
                function l(t, e, n, i, r, o, a) {
                    var s = t + (e & n | ~e & i) + r + a;
                    return (s << o | s >>> 32 - o) + e
                }
                function u(t, e, n, i, r, o, a) {
                    var s = t + (e & i | n & ~i) + r + a;
                    return (s << o | s >>> 32 - o) + e
                }
                function f(t, e, n, i, r, o, a) {
                    var s = t + (e ^ n ^ i) + r + a;
                    return (s << o | s >>> 32 - o) + e
                }
                function d(t, e, n, i, r, o, a) {
                    var s = t + (n ^ (e | ~i)) + r + a;
                    return (s << o | s >>> 32 - o) + e
                }
                n.MD5 = o._createHelper(c),
                n.HmacMD5 = o._createHmacHelper(c)
            }(Math),
            t.MD5
        }
        ,
        t.exports = i(n("21bf"))
    },
})


function get_sign(t) {
    let e = Object.keys(t).sort().map((function (e) {
        return "".concat(e, "=").concat(t[e])
    }
    )).join("&") + "&secret_key=yyy89ddfdf915y";
    e = e.toLowerCase()
    let fn = sss("72fe")
    let dn = sss.n(fn)

    sign = dn()(e).toString().toLowerCase()
    return sign
}

function get_login_data(user, passwd) {
    let password = me(passwd)
    let sign = get_sign({
        "invoker": "pcweb",
        "password": password,
        "username": user
    })
    return {
        "_support": "10000000",
        "deviceid": "db4e714f-8aee-4853-b4ac-54c57d748613",
        "appVersion": "pcweb_umd-6.3.0",
        "dname":"", 
        "src": "mgtv",
        "invoker": "pcweb",
        "noBinding": "0",
        "username": user,
        "password": password,
        "smscode": "86",
        "captcha": "",
        "sign": sign,
        "pwdType": "1",
        }
}
"""

import execjs
import requests

def get_cookie(ueer, passwd):
    url = "https://nuc.api.mgtv.com/v3/Login"
    headers = {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",   
    }
    my_js = execjs.compile(login_js)
    data = my_js.call("get_login_data", ueer, passwd)
    res = requests.post(url, data=data, headers=headers)
    cookie = res.cookies
    cookie = ";".join([f"{i.name}={i.value}" for i in cookie])
    print(res.text)
    return cookie


print(requests.get("https://i.mgtv.com/my/setting", headers={"cookie": cookie}).text)