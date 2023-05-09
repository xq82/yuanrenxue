var RSA;
navigator = {}
navigator.appName = 'Netscape'

function get_sessionid() {
    r = (e, t) => {
        return e = Math.ceil(e),
            t = Math.floor(t),
            Math.floor(Math.random() * (t - e + 1)) + e
    }

    let e = function () {
        let e = "";
        for (let t = 0; t < 24; t++)
            e += (0,
                r)(0, 35).toString(36);
        return e
    }()
    return e
}

!(function () {
    "use strict";
    var o;
    function i(t, r, e) {
        null != t && ("number" == typeof t ? this.fromNumber(t, r, e) : null == r && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, r))
    }
    function s() {
        return new i(null)
    }
    "Microsoft Internet Explorer" == navigator.appName ? (i.prototype.am = function (t, r, e, o, i, s) {
        for (var n = 32767 & r, h = r >> 15; --s >= 0;) {
            var c = 32767 & this[t]
                , a = this[t++] >> 15
                , u = h * c + a * n;
            i = ((c = n * c + ((32767 & u) << 15) + e[o] + (1073741823 & i)) >>> 30) + (u >>> 15) + h * a + (i >>> 30),
                e[o++] = 1073741823 & c
        }
        return i
    }
        ,
        o = 30) : "Netscape" != navigator.appName ? (i.prototype.am = function (t, r, e, o, i, s) {
            for (; --s >= 0;) {
                var n = r * this[t++] + e[o] + i;
                i = Math.floor(n / 67108864),
                    e[o++] = 67108863 & n
            }
            return i
        }
            ,
            o = 26) : (i.prototype.am = function (t, r, e, o, i, s) {
                for (var n = 16383 & r, h = r >> 14; --s >= 0;) {
                    var c = 16383 & this[t]
                        , a = this[t++] >> 14
                        , u = h * c + a * n;
                    i = ((c = n * c + ((16383 & u) << 14) + e[o] + i) >> 28) + (u >> 14) + h * a,
                        e[o++] = 268435455 & c
                }
                return i
            }
                ,
                o = 28),
        i.prototype.DB = o,
        i.prototype.DM = (1 << o) - 1,
        i.prototype.DV = 1 << o;
    i.prototype.FV = Math.pow(2, 52),
        i.prototype.F1 = 52 - o,
        i.prototype.F2 = 2 * o - 52;
    var n, h, c = "0123456789abcdefghijklmnopqrstuvwxyz", a = new Array;
    for (n = "0".charCodeAt(0),
        h = 0; h <= 9; ++h)
        a[n++] = h;
    for (n = "a".charCodeAt(0),
        h = 10; h < 36; ++h)
        a[n++] = h;
    for (n = "A".charCodeAt(0),
        h = 10; h < 36; ++h)
        a[n++] = h;
    function u(t) {
        return c.charAt(t)
    }
    function f(t, r) {
        var e = a[t.charCodeAt(r)];
        return null == e ? -1 : e
    }
    function l(t) {
        var r = s();
        return r.fromInt(t),
            r
    }
    function p(t) {
        var r, e = 1;
        return 0 != (r = t >>> 16) && (t = r,
            e += 16),
            0 != (r = t >> 8) && (t = r,
                e += 8),
            0 != (r = t >> 4) && (t = r,
                e += 4),
            0 != (r = t >> 2) && (t = r,
                e += 2),
            0 != (r = t >> 1) && (t = r,
                e += 1),
            e
    }
    function b(t) {
        this.m = t
    }
    function m(t) {
        this.m = t,
            this.mp = t.invDigit(),
            this.mpl = 32767 & this.mp,
            this.mph = this.mp >> 15,
            this.um = (1 << t.DB - 15) - 1,
            this.mt2 = 2 * t.t
    }
    function d(t, r) {
        return t & r
    }
    function T(t, r) {
        return t | r
    }
    function v(t, r) {
        return t ^ r
    }
    function y(t, r) {
        return t & ~r
    }
    function g(t) {
        if (0 == t)
            return -1;
        var r = 0;
        return 0 == (65535 & t) && (t >>= 16,
            r += 16),
            0 == (255 & t) && (t >>= 8,
                r += 8),
            0 == (15 & t) && (t >>= 4,
                r += 4),
            0 == (3 & t) && (t >>= 2,
                r += 2),
            0 == (1 & t) && ++r,
            r
    }
    function _(t) {
        for (var r = 0; 0 != t;)
            t &= t - 1,
                ++r;
        return r
    }
    function k() { }
    function S(t) {
        return t
    }
    function M(t) {
        this.r2 = s(),
            this.q3 = s(),
            i.ONE.dlShiftTo(2 * t.t, this.r2),
            this.mu = this.r2.divide(t),
            this.m = t
    }
    b.prototype.convert = function (t) {
        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
    }
        ,
        b.prototype.revert = function (t) {
            return t
        }
        ,
        b.prototype.reduce = function (t) {
            t.divRemTo(this.m, null, t)
        }
        ,
        b.prototype.mulTo = function (t, r, e) {
            t.multiplyTo(r, e),
                this.reduce(e)
        }
        ,
        b.prototype.sqrTo = function (t, r) {
            t.squareTo(r),
                this.reduce(r)
        }
        ,
        m.prototype.convert = function (t) {
            var r = s();
            return t.abs().dlShiftTo(this.m.t, r),
                r.divRemTo(this.m, null, r),
                t.s < 0 && r.compareTo(i.ZERO) > 0 && this.m.subTo(r, r),
                r
        }
        ,
        m.prototype.revert = function (t) {
            var r = s();
            return t.copyTo(r),
                this.reduce(r),
                r
        }
        ,
        m.prototype.reduce = function (t) {
            for (; t.t <= this.mt2;)
                t[t.t++] = 0;
            for (var r = 0; r < this.m.t; ++r) {
                var e = 32767 & t[r]
                    , o = e * this.mpl + ((e * this.mph + (t[r] >> 15) * this.mpl & this.um) << 15) & t.DM;
                for (t[e = r + this.m.t] += this.m.am(0, o, t, r, 0, this.m.t); t[e] >= t.DV;)
                    t[e] -= t.DV,
                        t[++e]++
            }
            t.clamp(),
                t.drShiftTo(this.m.t, t),
                t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
        }
        ,
        m.prototype.mulTo = function (t, r, e) {
            t.multiplyTo(r, e),
                this.reduce(e)
        }
        ,
        m.prototype.sqrTo = function (t, r) {
            t.squareTo(r),
                this.reduce(r)
        }
        ,
        i.prototype.copyTo = function (t) {
            for (var r = this.t - 1; r >= 0; --r)
                t[r] = this[r];
            t.t = this.t,
                t.s = this.s
        }
        ,
        i.prototype.fromInt = function (t) {
            this.t = 1,
                this.s = t < 0 ? -1 : 0,
                t > 0 ? this[0] = t : t < -1 ? this[0] = t + DV : this.t = 0
        }
        ,
        i.prototype.fromString = function (t, r) {
            var e;
            if (16 == r)
                e = 4;
            else if (8 == r)
                e = 3;
            else if (256 == r)
                e = 8;
            else if (2 == r)
                e = 1;
            else if (32 == r)
                e = 5;
            else {
                if (4 != r)
                    return void this.fromRadix(t, r);
                e = 2
            }
            this.t = 0,
                this.s = 0;
            for (var o = t.length, s = !1, n = 0; --o >= 0;) {
                var h = 8 == e ? 255 & t[o] : f(t, o);
                h < 0 ? "-" == t.charAt(o) && (s = !0) : (s = !1,
                    0 == n ? this[this.t++] = h : n + e > this.DB ? (this[this.t - 1] |= (h & (1 << this.DB - n) - 1) << n,
                        this[this.t++] = h >> this.DB - n) : this[this.t - 1] |= h << n,
                    (n += e) >= this.DB && (n -= this.DB))
            }
            8 == e && 0 != (128 & t[0]) && (this.s = -1,
                n > 0 && (this[this.t - 1] |= (1 << this.DB - n) - 1 << n)),
                this.clamp(),
                s && i.ZERO.subTo(this, this)
        }
        ,
        i.prototype.clamp = function () {
            for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;)
                --this.t
        }
        ,
        i.prototype.dlShiftTo = function (t, r) {
            var e;
            for (e = this.t - 1; e >= 0; --e)
                r[e + t] = this[e];
            for (e = t - 1; e >= 0; --e)
                r[e] = 0;
            r.t = this.t + t,
                r.s = this.s
        }
        ,
        i.prototype.drShiftTo = function (t, r) {
            for (var e = t; e < this.t; ++e)
                r[e - t] = this[e];
            r.t = Math.max(this.t - t, 0),
                r.s = this.s
        }
        ,
        i.prototype.lShiftTo = function (t, r) {
            var e, o = t % this.DB, i = this.DB - o, s = (1 << i) - 1, n = Math.floor(t / this.DB), h = this.s << o & this.DM;
            for (e = this.t - 1; e >= 0; --e)
                r[e + n + 1] = this[e] >> i | h,
                    h = (this[e] & s) << o;
            for (e = n - 1; e >= 0; --e)
                r[e] = 0;
            r[n] = h,
                r.t = this.t + n + 1,
                r.s = this.s,
                r.clamp()
        }
        ,
        i.prototype.rShiftTo = function (t, r) {
            r.s = this.s;
            var e = Math.floor(t / this.DB);
            if (e >= this.t)
                r.t = 0;
            else {
                var o = t % this.DB
                    , i = this.DB - o
                    , s = (1 << o) - 1;
                r[0] = this[e] >> o;
                for (var n = e + 1; n < this.t; ++n)
                    r[n - e - 1] |= (this[n] & s) << i,
                        r[n - e] = this[n] >> o;
                o > 0 && (r[this.t - e - 1] |= (this.s & s) << i),
                    r.t = this.t - e,
                    r.clamp()
            }
        }
        ,
        i.prototype.subTo = function (t, r) {
            for (var e = 0, o = 0, i = Math.min(t.t, this.t); e < i;)
                o += this[e] - t[e],
                    r[e++] = o & this.DM,
                    o >>= this.DB;
            if (t.t < this.t) {
                for (o -= t.s; e < this.t;)
                    o += this[e],
                        r[e++] = o & this.DM,
                        o >>= this.DB;
                o += this.s
            } else {
                for (o += this.s; e < t.t;)
                    o -= t[e],
                        r[e++] = o & this.DM,
                        o >>= this.DB;
                o -= t.s
            }
            r.s = o < 0 ? -1 : 0,
                o < -1 ? r[e++] = this.DV + o : o > 0 && (r[e++] = o),
                r.t = e,
                r.clamp()
        }
        ,
        i.prototype.multiplyTo = function (t, r) {
            var e = this.abs()
                , o = t.abs()
                , s = e.t;
            for (r.t = s + o.t; --s >= 0;)
                r[s] = 0;
            for (s = 0; s < o.t; ++s)
                r[s + e.t] = e.am(0, o[s], r, s, 0, e.t);
            r.s = 0,
                r.clamp(),
                this.s != t.s && i.ZERO.subTo(r, r)
        }
        ,
        i.prototype.squareTo = function (t) {
            for (var r = this.abs(), e = t.t = 2 * r.t; --e >= 0;)
                t[e] = 0;
            for (e = 0; e < r.t - 1; ++e) {
                var o = r.am(e, r[e], t, 2 * e, 0, 1);
                (t[e + r.t] += r.am(e + 1, 2 * r[e], t, 2 * e + 1, o, r.t - e - 1)) >= r.DV && (t[e + r.t] -= r.DV,
                    t[e + r.t + 1] = 1)
            }
            t.t > 0 && (t[t.t - 1] += r.am(e, r[e], t, 2 * e, 0, 1)),
                t.s = 0,
                t.clamp()
        }
        ,
        i.prototype.divRemTo = function (t, r, e) {
            var o = t.abs();
            if (!(o.t <= 0)) {
                var n = this.abs();
                if (n.t < o.t)
                    return null != r && r.fromInt(0),
                        void (null != e && this.copyTo(e));
                null == e && (e = s());
                var h = s()
                    , c = this.s
                    , a = t.s
                    , u = this.DB - p(o[o.t - 1]);
                u > 0 ? (o.lShiftTo(u, h),
                    n.lShiftTo(u, e)) : (o.copyTo(h),
                        n.copyTo(e));
                var f = h.t
                    , l = h[f - 1];
                if (0 != l) {
                    var b = l * (1 << this.F1) + (f > 1 ? h[f - 2] >> this.F2 : 0)
                        , m = this.FV / b
                        , d = (1 << this.F1) / b
                        , T = 1 << this.F2
                        , v = e.t
                        , y = v - f
                        , g = null == r ? s() : r;
                    for (h.dlShiftTo(y, g),
                        e.compareTo(g) >= 0 && (e[e.t++] = 1,
                            e.subTo(g, e)),
                        i.ONE.dlShiftTo(f, g),
                        g.subTo(h, h); h.t < f;)
                        h[h.t++] = 0;
                    for (; --y >= 0;) {
                        var _ = e[--v] == l ? this.DM : Math.floor(e[v] * m + (e[v - 1] + T) * d);
                        if ((e[v] += h.am(0, _, e, y, 0, f)) < _)
                            for (h.dlShiftTo(y, g),
                                e.subTo(g, e); e[v] < --_;)
                                e.subTo(g, e)
                    }
                    null != r && (e.drShiftTo(f, r),
                        c != a && i.ZERO.subTo(r, r)),
                        e.t = f,
                        e.clamp(),
                        u > 0 && e.rShiftTo(u, e),
                        c < 0 && i.ZERO.subTo(e, e)
                }
            }
        }
        ,
        i.prototype.invDigit = function () {
            if (this.t < 1)
                return 0;
            var t = this[0];
            if (0 == (1 & t))
                return 0;
            var r = 3 & t;
            return (r = (r = (r = (r = r * (2 - (15 & t) * r) & 15) * (2 - (255 & t) * r) & 255) * (2 - ((65535 & t) * r & 65535)) & 65535) * (2 - t * r % this.DV) % this.DV) > 0 ? this.DV - r : -r
        }
        ,
        i.prototype.isEven = function () {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s)
        }
        ,
        i.prototype.exp = function (t, r) {
            if (t > 4294967295 || t < 1)
                return i.ONE;
            var e = s()
                , o = s()
                , n = r.convert(this)
                , h = p(t) - 1;
            for (n.copyTo(e); --h >= 0;)
                if (r.sqrTo(e, o),
                    (t & 1 << h) > 0)
                    r.mulTo(o, n, e);
                else {
                    var c = e;
                    e = o,
                        o = c
                }
            return r.revert(e)
        }
        ,
        i.prototype.toString = function (t) {
            if (this.s < 0)
                return "-" + this.negate().toString(t);
            var r;
            if (16 == t)
                r = 4;
            else if (8 == t)
                r = 3;
            else if (2 == t)
                r = 1;
            else if (32 == t)
                r = 5;
            else {
                if (4 != t)
                    return this.toRadix(t);
                r = 2
            }
            var e, o = (1 << r) - 1, i = !1, s = "", n = this.t, h = this.DB - n * this.DB % r;
            if (n-- > 0)
                for (h < this.DB && (e = this[n] >> h) > 0 && (i = !0,
                    s = u(e)); n >= 0;)
                    h < r ? (e = (this[n] & (1 << h) - 1) << r - h,
                        e |= this[--n] >> (h += this.DB - r)) : (e = this[n] >> (h -= r) & o,
                            h <= 0 && (h += this.DB,
                                --n)),
                        e > 0 && (i = !0),
                        i && (s += u(e));
            return i ? s : "0"
        }
        ,
        i.prototype.negate = function () {
            var t = s();
            return i.ZERO.subTo(this, t),
                t
        }
        ,
        i.prototype.abs = function () {
            return this.s < 0 ? this.negate() : this
        }
        ,
        i.prototype.compareTo = function (t) {
            var r = this.s - t.s;
            if (0 != r)
                return r;
            var e = this.t;
            if (0 != (r = e - t.t))
                return r;
            for (; --e >= 0;)
                if (0 != (r = this[e] - t[e]))
                    return r;
            return 0
        }
        ,
        i.prototype.bitLength = function () {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + p(this[this.t - 1] ^ this.s & this.DM)
        }
        ,
        i.prototype.mod = function (t) {
            var r = s();
            return this.abs().divRemTo(t, null, r),
                this.s < 0 && r.compareTo(i.ZERO) > 0 && t.subTo(r, r),
                r
        }
        ,
        i.prototype.modPowInt = function (t, r) {
            var e;
            return e = t < 256 || r.isEven() ? new b(r) : new m(r),
                this.exp(t, e)
        }
        ,
        i.ZERO = l(0),
        i.ONE = l(1),
        k.prototype.convert = S,
        k.prototype.revert = S,
        k.prototype.mulTo = function (t, r, e) {
            t.multiplyTo(r, e)
        }
        ,
        k.prototype.sqrTo = function (t, r) {
            t.squareTo(r)
        }
        ,
        M.prototype.convert = function (t) {
            if (t.s < 0 || t.t > 2 * this.m.t)
                return t.mod(this.m);
            if (t.compareTo(this.m) < 0)
                return t;
            var r = s();
            return t.copyTo(r),
                this.reduce(r),
                r
        }
        ,
        M.prototype.revert = function (t) {
            return t
        }
        ,
        M.prototype.reduce = function (t) {
            for (t.drShiftTo(this.m.t - 1, this.r2),
                t.t > this.m.t + 1 && (t.t = this.m.t + 1,
                    t.clamp()),
                this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;)
                t.dAddOffset(1, this.m.t + 1);
            for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;)
                t.subTo(this.m, t)
        }
        ,
        M.prototype.mulTo = function (t, r, e) {
            t.multiplyTo(r, e),
                this.reduce(e)
        }
        ,
        M.prototype.sqrTo = function (t, r) {
            t.squareTo(r),
                this.reduce(r)
        }
        ;
    var D = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509]
        , E = (1 << 26) / D[D.length - 1];
    i.prototype.chunkSize = function (t) {
        return Math.floor(Math.LN2 * this.DB / Math.log(t))
    }
        ,
        i.prototype.toRadix = function (t) {
            if (null == t && (t = 10),
                0 == this.signum() || t < 2 || t > 36)
                return "0";
            var r = this.chunkSize(t)
                , e = Math.pow(t, r)
                , o = l(e)
                , i = s()
                , n = s()
                , h = "";
            for (this.divRemTo(o, i, n); i.signum() > 0;)
                h = (e + n.intValue()).toString(t).substr(1) + h,
                    i.divRemTo(o, i, n);
            return n.intValue().toString(t) + h
        }
        ,
        i.prototype.fromRadix = function (t, r) {
            this.fromInt(0),
                null == r && (r = 10);
            for (var e = this.chunkSize(r), o = Math.pow(r, e), s = !1, n = 0, h = 0, c = 0; c < t.length; ++c) {
                var a = f(t, c);
                a < 0 ? "-" == t.charAt(c) && 0 == this.signum() && (s = !0) : (h = r * h + a,
                    ++n >= e && (this.dMultiply(o),
                        this.dAddOffset(h, 0),
                        n = 0,
                        h = 0))
            }
            n > 0 && (this.dMultiply(Math.pow(r, n)),
                this.dAddOffset(h, 0)),
                s && i.ZERO.subTo(this, this)
        }
        ,
        i.prototype.fromNumber = function (t, r, e) {
            if ("number" == typeof r)
                if (t < 2)
                    this.fromInt(1);
                else
                    for (this.fromNumber(t, e),
                        this.testBit(t - 1) || this.bitwiseTo(i.ONE.shiftLeft(t - 1), T, this),
                        this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(r);)
                        this.dAddOffset(2, 0),
                            this.bitLength() > t && this.subTo(i.ONE.shiftLeft(t - 1), this);
            else {
                var o = new Array
                    , s = 7 & t;
                o.length = 1 + (t >> 3),
                    r.nextBytes(o),
                    s > 0 ? o[0] &= (1 << s) - 1 : o[0] = 0,
                    this.fromString(o, 256)
            }
        }
        ,
        i.prototype.bitwiseTo = function (t, r, e) {
            var o, i, s = Math.min(t.t, this.t);
            for (o = 0; o < s; ++o)
                e[o] = r(this[o], t[o]);
            if (t.t < this.t) {
                for (i = t.s & this.DM,
                    o = s; o < this.t; ++o)
                    e[o] = r(this[o], i);
                e.t = this.t
            } else {
                for (i = this.s & this.DM,
                    o = s; o < t.t; ++o)
                    e[o] = r(i, t[o]);
                e.t = t.t
            }
            e.s = r(this.s, t.s),
                e.clamp()
        }
        ,
        i.prototype.changeBit = function (t, r) {
            var e = i.ONE.shiftLeft(t);
            return this.bitwiseTo(e, r, e),
                e
        }
        ,
        i.prototype.addTo = function (t, r) {
            for (var e = 0, o = 0, i = Math.min(t.t, this.t); e < i;)
                o += this[e] + t[e],
                    r[e++] = o & this.DM,
                    o >>= this.DB;
            if (t.t < this.t) {
                for (o += t.s; e < this.t;)
                    o += this[e],
                        r[e++] = o & this.DM,
                        o >>= this.DB;
                o += this.s
            } else {
                for (o += this.s; e < t.t;)
                    o += t[e],
                        r[e++] = o & this.DM,
                        o >>= this.DB;
                o += t.s
            }
            r.s = o < 0 ? -1 : 0,
                o > 0 ? r[e++] = o : o < -1 && (r[e++] = this.DV + o),
                r.t = e,
                r.clamp()
        }
        ,
        i.prototype.dMultiply = function (t) {
            this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
                ++this.t,
                this.clamp()
        }
        ,
        i.prototype.dAddOffset = function (t, r) {
            for (; this.t <= r;)
                this[this.t++] = 0;
            for (this[r] += t; this[r] >= this.DV;)
                this[r] -= this.DV,
                    ++r >= this.t && (this[this.t++] = 0),
                    ++this[r]
        }
        ,
        i.prototype.multiplyLowerTo = function (t, r, e) {
            var o, i = Math.min(this.t + t.t, r);
            for (e.s = 0,
                e.t = i; i > 0;)
                e[--i] = 0;
            for (o = e.t - this.t; i < o; ++i)
                e[i + this.t] = this.am(0, t[i], e, i, 0, this.t);
            for (o = Math.min(t.t, r); i < o; ++i)
                this.am(0, t[i], e, i, 0, r - i);
            e.clamp()
        }
        ,
        i.prototype.multiplyUpperTo = function (t, r, e) {
            --r;
            var o = e.t = this.t + t.t - r;
            for (e.s = 0; --o >= 0;)
                e[o] = 0;
            for (o = Math.max(r - this.t, 0); o < t.t; ++o)
                e[this.t + o - r] = this.am(r - o, t[o], e, 0, 0, this.t + o - r);
            e.clamp(),
                e.drShiftTo(1, e)
        }
        ,
        i.prototype.modInt = function (t) {
            if (t <= 0)
                return 0;
            var r = this.DV % t
                , e = this.s < 0 ? t - 1 : 0;
            if (this.t > 0)
                if (0 == r)
                    e = this[0] % t;
                else
                    for (var o = this.t - 1; o >= 0; --o)
                        e = (r * e + this[o]) % t;
            return e
        }
        ,
        i.prototype.millerRabin = function (t) {
            var r = this.subtract(i.ONE)
                , e = r.getLowestSetBit();
            if (e <= 0)
                return !1;
            var o = r.shiftRight(e);
            (t = t + 1 >> 1) > D.length && (t = D.length);
            for (var n = s(), h = 0; h < t; ++h) {
                n.fromInt(D[h]);
                var c = n.modPow(o, this);
                if (0 != c.compareTo(i.ONE) && 0 != c.compareTo(r)) {
                    for (var a = 1; a++ < e && 0 != c.compareTo(r);)
                        if (0 == (c = c.modPowInt(2, this)).compareTo(i.ONE))
                            return !1;
                    if (0 != c.compareTo(r))
                        return !1
                }
            }
            return !0
        }
        ,
        i.prototype.clone = function () {
            var t = s();
            return this.copyTo(t),
                t
        }
        ,
        i.prototype.intValue = function () {
            if (this.s < 0) {
                if (1 == this.t)
                    return this[0] - this.DV;
                if (0 == this.t)
                    return -1
            } else {
                if (1 == this.t)
                    return this[0];
                if (0 == this.t)
                    return 0
            }
            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
        }
        ,
        i.prototype.byteValue = function () {
            return 0 == this.t ? this.s : this[0] << 24 >> 24
        }
        ,
        i.prototype.shortValue = function () {
            return 0 == this.t ? this.s : this[0] << 16 >> 16
        }
        ,
        i.prototype.signum = function () {
            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
        }
        ,
        i.prototype.toByteArray = function () {
            var t = this.t
                , r = new Array;
            r[0] = this.s;
            var e, o = this.DB - t * this.DB % 8, i = 0;
            if (t-- > 0)
                for (o < this.DB && (e = this[t] >> o) != (this.s & this.DM) >> o && (r[i++] = e | this.s << this.DB - o); t >= 0;)
                    o < 8 ? (e = (this[t] & (1 << o) - 1) << 8 - o,
                        e |= this[--t] >> (o += this.DB - 8)) : (e = this[t] >> (o -= 8) & 255,
                            o <= 0 && (o += this.DB,
                                --t)),
                        0 != (128 & e) && (e |= -256),
                        0 == i && (128 & this.s) != (128 & e) && ++i,
                        (i > 0 || e != this.s) && (r[i++] = e);
            return r
        }
        ,
        i.prototype.equals = function (t) {
            return 0 == this.compareTo(t)
        }
        ,
        i.prototype.min = function (t) {
            return this.compareTo(t) < 0 ? this : t
        }
        ,
        i.prototype.max = function (t) {
            return this.compareTo(t) > 0 ? this : t
        }
        ,
        i.prototype.and = function (t) {
            var r = s();
            return this.bitwiseTo(t, d, r),
                r
        }
        ,
        i.prototype.or = function (t) {
            var r = s();
            return this.bitwiseTo(t, T, r),
                r
        }
        ,
        i.prototype.xor = function (t) {
            var r = s();
            return this.bitwiseTo(t, v, r),
                r
        }
        ,
        i.prototype.andNot = function (t) {
            var r = s();
            return this.bitwiseTo(t, y, r),
                r
        }
        ,
        i.prototype.not = function () {
            for (var t = s(), r = 0; r < this.t; ++r)
                t[r] = this.DM & ~this[r];
            return t.t = this.t,
                t.s = ~this.s,
                t
        }
        ,
        i.prototype.shiftLeft = function (t) {
            var r = s();
            return t < 0 ? this.rShiftTo(-t, r) : this.lShiftTo(t, r),
                r
        }
        ,
        i.prototype.shiftRight = function (t) {
            var r = s();
            return t < 0 ? this.lShiftTo(-t, r) : this.rShiftTo(t, r),
                r
        }
        ,
        i.prototype.getLowestSetBit = function () {
            for (var t = 0; t < this.t; ++t)
                if (0 != this[t])
                    return t * this.DB + g(this[t]);
            return this.s < 0 ? this.t * this.DB : -1
        }
        ,
        i.prototype.bitCount = function () {
            for (var t = 0, r = this.s & this.DM, e = 0; e < this.t; ++e)
                t += _(this[e] ^ r);
            return t
        }
        ,
        i.prototype.testBit = function (t) {
            var r = Math.floor(t / this.DB);
            return r >= this.t ? 0 != this.s : 0 != (this[r] & 1 << t % this.DB)
        }
        ,
        i.prototype.setBit = function (t) {
            return this.changeBit(t, T)
        }
        ,
        i.prototype.clearBit = function (t) {
            return this.changeBit(t, y)
        }
        ,
        i.prototype.flipBit = function (t) {
            return this.changeBit(t, v)
        }
        ,
        i.prototype.add = function (t) {
            var r = s();
            return this.addTo(t, r),
                r
        }
        ,
        i.prototype.subtract = function (t) {
            var r = s();
            return this.subTo(t, r),
                r
        }
        ,
        i.prototype.multiply = function (t) {
            var r = s();
            return this.multiplyTo(t, r),
                r
        }
        ,
        i.prototype.divide = function (t) {
            var r = s();
            return this.divRemTo(t, r, null),
                r
        }
        ,
        i.prototype.remainder = function (t) {
            var r = s();
            return this.divRemTo(t, null, r),
                r
        }
        ,
        i.prototype.divideAndRemainder = function (t) {
            var r = s()
                , e = s();
            return this.divRemTo(t, r, e),
                new Array(r, e)
        }
        ,
        i.prototype.modPow = function (t, r) {
            var e, o, i = t.bitLength(), n = l(1);
            if (i <= 0)
                return n;
            e = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6,
                o = i < 8 ? new b(r) : r.isEven() ? new M(r) : new m(r);
            var h = new Array
                , c = 3
                , a = e - 1
                , u = (1 << e) - 1;
            if (h[1] = o.convert(this),
                e > 1) {
                var f = s();
                for (o.sqrTo(h[1], f); c <= u;)
                    h[c] = s(),
                        o.mulTo(f, h[c - 2], h[c]),
                        c += 2
            }
            var d, T, v = t.t - 1, y = !0, g = s();
            for (i = p(t[v]) - 1; v >= 0;) {
                for (i >= a ? d = t[v] >> i - a & u : (d = (t[v] & (1 << i + 1) - 1) << a - i,
                    v > 0 && (d |= t[v - 1] >> this.DB + i - a)),
                    c = e; 0 == (1 & d);)
                    d >>= 1,
                        --c;
                if ((i -= c) < 0 && (i += this.DB,
                    --v),
                    y)
                    h[d].copyTo(n),
                        y = !1;
                else {
                    for (; c > 1;)
                        o.sqrTo(n, g),
                            o.sqrTo(g, n),
                            c -= 2;
                    c > 0 ? o.sqrTo(n, g) : (T = n,
                        n = g,
                        g = T),
                        o.mulTo(g, h[d], n)
                }
                for (; v >= 0 && 0 == (t[v] & 1 << i);)
                    o.sqrTo(n, g),
                        T = n,
                        n = g,
                        g = T,
                        --i < 0 && (i = this.DB - 1,
                            --v)
            }
            return o.revert(n)
        }
        ,
        i.prototype.modInverse = function (t) {
            var r = t.isEven();
            if (this.isEven() && r || 0 == t.signum())
                return i.ZERO;
            for (var e = t.clone(), o = this.clone(), s = l(1), n = l(0), h = l(0), c = l(1); 0 != e.signum();) {
                for (; e.isEven();)
                    e.rShiftTo(1, e),
                        r ? (s.isEven() && n.isEven() || (s.addTo(this, s),
                            n.subTo(t, n)),
                            s.rShiftTo(1, s)) : n.isEven() || n.subTo(t, n),
                        n.rShiftTo(1, n);
                for (; o.isEven();)
                    o.rShiftTo(1, o),
                        r ? (h.isEven() && c.isEven() || (h.addTo(this, h),
                            c.subTo(t, c)),
                            h.rShiftTo(1, h)) : c.isEven() || c.subTo(t, c),
                        c.rShiftTo(1, c);
                e.compareTo(o) >= 0 ? (e.subTo(o, e),
                    r && s.subTo(h, s),
                    n.subTo(c, n)) : (o.subTo(e, o),
                        r && h.subTo(s, h),
                        c.subTo(n, c))
            }
            return 0 != o.compareTo(i.ONE) ? i.ZERO : c.compareTo(t) >= 0 ? c.subtract(t) : c.signum() < 0 ? (c.addTo(t, c),
                c.signum() < 0 ? c.add(t) : c) : c
        }
        ,
        i.prototype.pow = function (t) {
            return this.exp(t, new k)
        }
        ,
        i.prototype.gcd = function (t) {
            var r = this.s < 0 ? this.negate() : this.clone()
                , e = t.s < 0 ? t.negate() : t.clone();
            if (r.compareTo(e) < 0) {
                var o = r;
                r = e,
                    e = o
            }
            var i = r.getLowestSetBit()
                , s = e.getLowestSetBit();
            if (s < 0)
                return r;
            for (i < s && (s = i),
                s > 0 && (r.rShiftTo(s, r),
                    e.rShiftTo(s, e)); r.signum() > 0;)
                (i = r.getLowestSetBit()) > 0 && r.rShiftTo(i, r),
                    (i = e.getLowestSetBit()) > 0 && e.rShiftTo(i, e),
                    r.compareTo(e) >= 0 ? (r.subTo(e, r),
                        r.rShiftTo(1, r)) : (e.subTo(r, e),
                            e.rShiftTo(1, e));
            return s > 0 && e.lShiftTo(s, e),
                e
        }
        ,
        i.prototype.isProbablePrime = function (t) {
            var r, e = this.abs();
            if (1 == e.t && e[0] <= D[D.length - 1]) {
                for (r = 0; r < D.length; ++r)
                    if (e[0] == D[r])
                        return !0;
                return !1
            }
            if (e.isEven())
                return !1;
            for (r = 1; r < D.length;) {
                for (var o = D[r], i = r + 1; i < D.length && o < E;)
                    o *= D[i++];
                for (o = e.modInt(o); r < i;)
                    if (o % D[r++] == 0)
                        return !1
            }
            return e.millerRabin(t)
        }
        ;
    const w = i;
    var L = function (t, r) {
        this.modulus = new w(t, 16),
            this.encryptionExponent = new w(r, 16)
    }
        , B = {
            base64: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function (t) {
                if (!t)
                    return !1;
                var r, e, o, i, s, n, h, c = "", a = 0;
                do {
                    i = (r = t.charCodeAt(a++)) >> 2,
                        s = (3 & r) << 4 | (e = t.charCodeAt(a++)) >> 4,
                        n = (15 & e) << 2 | (o = t.charCodeAt(a++)) >> 6,
                        h = 63 & o,
                        isNaN(e) ? n = h = 64 : isNaN(o) && (h = 64),
                        c += this.base64.charAt(i) + this.base64.charAt(s) + this.base64.charAt(n) + this.base64.charAt(h)
                } while (a < t.length);
                return c
            },
            decode: function (t) {
                if (!t)
                    return !1;
                t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                var r, e, o, i, s = "", n = 0;
                do {
                    r = this.base64.indexOf(t.charAt(n++)),
                        e = this.base64.indexOf(t.charAt(n++)),
                        o = this.base64.indexOf(t.charAt(n++)),
                        i = this.base64.indexOf(t.charAt(n++)),
                        s += String.fromCharCode(r << 2 | e >> 4),
                        64 != o && (s += String.fromCharCode((15 & e) << 4 | o >> 2)),
                        64 != i && (s += String.fromCharCode((3 & o) << 6 | i))
                } while (n < t.length);
                return s
            }
        }
        , N = {
            hex: "0123456789abcdef",
            encode: function (t) {
                if (!t)
                    return !1;
                var r, e = "", o = 0;
                do {
                    r = t.charCodeAt(o++),
                        e += this.hex.charAt(r >> 4 & 15) + this.hex.charAt(15 & r)
                } while (o < t.length);
                return e
            },
            decode: function (t) {
                if (!t)
                    return !1;
                t = t.replace(/[^0-9abcdef]/g, "");
                var r = ""
                    , e = 0;
                do {
                    r += String.fromCharCode(this.hex.indexOf(t.charAt(e++)) << 4 & 240 | 15 & this.hex.indexOf(t.charAt(e++)))
                } while (e < t.length);
                return r
            }
        };
    const x = {
        getPublicKey: function (t, r) {
            return new L(t, r)
        },
        encrypt: function (t, r) {
            return !!r && (!!(t = this.pkcs1pad2(t, r.modulus.bitLength() + 7 >> 3)) && (!!(t = t.modPowInt(r.encryptionExponent, r.modulus)) && (1 == (1 & (t = t.toString(16)).length) && (t = "0" + t),
                B.encode(N.decode(t)))))
        },
        pkcs1pad2: function (t, r) {
            if (r < t.length + 11)
                return null;
            for (var e = [], o = t.length - 1; o >= 0 && r > 0;)
                e[--r] = t.charCodeAt(o--);
            for (e[--r] = 0; r > 2;)
                e[--r] = Math.floor(254 * Math.random()) + 1;
            return e[--r] = 2,
                e[--r] = 0,
                new w(e)
        }
    }
    RSA = x;
})()

var _45878 = {};
!(function (exports) {
    var $jscomp = $jscomp || {};
    $jscomp.scope = {},
        $jscomp.findInternal = function (e, t, r) {
            e instanceof String && (e = String(e));
            for (var n = e.length, o = 0; o < n; o++) {
                var i = e[o];
                if (t.call(r, i, o, e))
                    return {
                        i: o,
                        v: i
                    }
            }
            return {
                i: -1,
                v: void 0
            }
        }
        ,
        $jscomp.ASSUME_ES5 = !1,
        $jscomp.ASSUME_NO_NATIVE_MAP = !1,
        $jscomp.ASSUME_NO_NATIVE_SET = !1,
        $jscomp.SIMPLE_FROUND_POLYFILL = !1,
        $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (e, t, r) {
            e != Array.prototype && e != Object.prototype && (e[t] = r.value)
        }
        ,
        $jscomp.getGlobal = function (e) {
            return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e
        }
        ,
        $jscomp.global = $jscomp.getGlobal(this),
        $jscomp.polyfill = function (e, t, r, n) {
            if (t) {
                for (r = $jscomp.global,
                    e = e.split("."),
                    n = 0; n < e.length - 1; n++) {
                    var o = e[n];
                    o in r || (r[o] = {}),
                        r = r[o]
                }
                (t = t(n = r[e = e[e.length - 1]])) != n && null != t && $jscomp.defineProperty(r, e, {
                    configurable: !0,
                    writable: !0,
                    value: t
                })
            }
        }
        ,
        $jscomp.polyfill("Array.prototype.findIndex", (function (e) {
            return e || function (e, t) {
                return $jscomp.findInternal(this, e, t).i
            }
        }
        ), "es6", "es3"),
        $jscomp.checkStringArgs = function (e, t, r) {
            if (null == e)
                throw new TypeError("The 'this' value for String.prototype." + r + " must not be null or undefined");
            if (t instanceof RegExp)
                throw new TypeError("First argument to String.prototype." + r + " must not be a regular expression");
            return e + ""
        }
        ,
        $jscomp.polyfill("String.prototype.endsWith", (function (e) {
            return e || function (e, t) {
                var r = $jscomp.checkStringArgs(this, e, "endsWith");
                e += "",
                    void 0 === t && (t = r.length),
                    t = Math.max(0, Math.min(0 | t, r.length));
                for (var n = e.length; 0 < n && 0 < t;)
                    if (r[--t] != e[--n])
                        return !1;
                return 0 >= n
            }
        }
        ), "es6", "es3"),
        $jscomp.polyfill("Array.prototype.find", (function (e) {
            return e || function (e, t) {
                return $jscomp.findInternal(this, e, t).v
            }
        }
        ), "es6", "es3"),
        $jscomp.polyfill("String.prototype.startsWith", (function (e) {
            return e || function (e, t) {
                var r = $jscomp.checkStringArgs(this, e, "startsWith");
                e += "";
                var n = r.length
                    , o = e.length;
                t = Math.max(0, Math.min(0 | t, r.length));
                for (var i = 0; i < o && t < n;)
                    if (r[t++] != e[i++])
                        return !1;
                return i >= o
            }
        }
        ), "es6", "es3"),
        $jscomp.polyfill("String.prototype.repeat", (function (e) {
            return e || function (e) {
                var t = $jscomp.checkStringArgs(this, null, "repeat");
                if (0 > e || 1342177279 < e)
                    throw new RangeError("Invalid count value");
                e |= 0;
                for (var r = ""; e;)
                    1 & e && (r += t),
                        (e >>>= 1) && (t += t);
                return r
            }
        }
        ), "es6", "es3");
    var COMPILED = !0
        , goog = goog || {};
    goog.global = this || self,
        goog.exportPath_ = function (e, t, r) {
            e = e.split("."),
                r = r || goog.global,
                e[0] in r || void 0 === r.execScript || r.execScript("var " + e[0]);
            for (var n; e.length && (n = e.shift());)
                e.length || void 0 === t ? r = r[n] && r[n] !== Object.prototype[n] ? r[n] : r[n] = {} : r[n] = t
        }
        ,
        goog.define = function (e, t) {
            if (!COMPILED) {
                var r = goog.global.CLOSURE_UNCOMPILED_DEFINES
                    , n = goog.global.CLOSURE_DEFINES;
                r && void 0 === r.nodeType && Object.prototype.hasOwnProperty.call(r, e) ? t = r[e] : n && void 0 === n.nodeType && Object.prototype.hasOwnProperty.call(n, e) && (t = n[e])
            }
            return t
        }
        ,
        goog.FEATURESET_YEAR = 2012,
        goog.DEBUG = !0,
        goog.LOCALE = "en",
        goog.TRUSTED_SITE = !0,
        goog.STRICT_MODE_COMPATIBLE = !1,
        goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG,
        goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1,
        goog.provide = function (e) {
            if (goog.isInModuleLoader_())
                throw Error("goog.provide cannot be used within a module.");
            if (!COMPILED && goog.isProvided_(e))
                throw Error('Namespace "' + e + '" already declared.');
            goog.constructNamespace_(e)
        }
        ,
        goog.constructNamespace_ = function (e, t) {
            if (!COMPILED) {
                delete goog.implicitNamespaces_[e];
                for (var r = e; (r = r.substring(0, r.lastIndexOf("."))) && !goog.getObjectByName(r);)
                    goog.implicitNamespaces_[r] = !0
            }
            goog.exportPath_(e, t)
        }
        ,
        goog.getScriptNonce = function (e) {
            return e && e != goog.global ? goog.getScriptNonce_(e.document) : (null === goog.cspNonce_ && (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document)),
                goog.cspNonce_)
        }
        ,
        goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/,
        goog.cspNonce_ = null,
        goog.getScriptNonce_ = function (e) {
            return (e = e.querySelector && e.querySelector("script[nonce]")) && (e = e.nonce || e.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(e) ? e : ""
        }
        ,
        goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/,
        goog.module = function (e) {
            if ("string" != typeof e || !e || -1 == e.search(goog.VALID_MODULE_RE_))
                throw Error("Invalid module identifier");
            if (!goog.isInGoogModuleLoader_())
                throw Error("Module " + e + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
            if (goog.moduleLoaderState_.moduleName)
                throw Error("goog.module may only be called once per module.");
            if (goog.moduleLoaderState_.moduleName = e,
                !COMPILED) {
                if (goog.isProvided_(e))
                    throw Error('Namespace "' + e + '" already declared.');
                delete goog.implicitNamespaces_[e]
            }
        }
        ,
        goog.module.get = function (e) {
            return goog.module.getInternal_(e)
        }
        ,
        goog.module.getInternal_ = function (e) {
            if (!COMPILED) {
                if (e in goog.loadedModules_)
                    return goog.loadedModules_[e].exports;
                if (!goog.implicitNamespaces_[e])
                    return null != (e = goog.getObjectByName(e)) ? e : null
            }
            return null
        }
        ,
        goog.ModuleType = {
            ES6: "es6",
            GOOG: "goog"
        },
        goog.moduleLoaderState_ = null,
        goog.isInModuleLoader_ = function () {
            return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_()
        }
        ,
        goog.isInGoogModuleLoader_ = function () {
            return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG
        }
        ,
        goog.isInEs6ModuleLoader_ = function () {
            if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6)
                return !0;
            var e = goog.global.$jscomp;
            return !!e && ("function" == typeof e.getCurrentModulePath && !!e.getCurrentModulePath())
        }
        ,
        goog.module.declareLegacyNamespace = function () {
            if (!COMPILED && !goog.isInGoogModuleLoader_())
                throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
            if (!COMPILED && !goog.moduleLoaderState_.moduleName)
                throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
            goog.moduleLoaderState_.declareLegacyNamespace = !0
        }
        ,
        goog.declareModuleId = function (e) {
            if (!COMPILED) {
                if (!goog.isInEs6ModuleLoader_())
                    throw Error("goog.declareModuleId may only be called from within an ES6 module");
                if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName)
                    throw Error("goog.declareModuleId may only be called once per module.");
                if (e in goog.loadedModules_)
                    throw Error('Module with namespace "' + e + '" already exists.')
            }
            if (goog.moduleLoaderState_)
                goog.moduleLoaderState_.moduleName = e;
            else {
                var t = goog.global.$jscomp;
                if (!t || "function" != typeof t.getCurrentModulePath)
                    throw Error('Module with namespace "' + e + '" has been loaded incorrectly.');
                t = t.require(t.getCurrentModulePath()),
                    goog.loadedModules_[e] = {
                        exports: t,
                        type: goog.ModuleType.ES6,
                        moduleId: e
                    }
            }
        }
        ,
        goog.setTestOnly = function (e) {
            if (goog.DISALLOW_TEST_ONLY_CODE)
                throw e = e || "",
                Error("Importing test-only code into non-debug environment" + (e ? ": " + e : "."))
        }
        ,
        goog.forwardDeclare = function (e) { }
        ,
        COMPILED || (goog.isProvided_ = function (e) {
            return e in goog.loadedModules_ || !goog.implicitNamespaces_[e] && null != goog.getObjectByName(e)
        }
            ,
            goog.implicitNamespaces_ = {
                "goog.module": !0
            }),
        goog.getObjectByName = function (e, t) {
            e = e.split("."),
                t = t || goog.global;
            for (var r = 0; r < e.length; r++)
                if (null == (t = t[e[r]]))
                    return null;
            return t
        }
        ,
        goog.globalize = function (e, t) {
            for (var r in t = t || goog.global,
                e)
                t[r] = e[r]
        }
        ,
        goog.addDependency = function (e, t, r, n) {
            !COMPILED && goog.DEPENDENCIES_ENABLED && goog.debugLoader_.addDependency(e, t, r, n)
        }
        ,
        goog.ENABLE_DEBUG_LOADER = !0,
        goog.logToConsole_ = function (e) {
            goog.global.console && goog.global.console.error(e)
        }
        ,
        goog.require = function (e) {
            if (!COMPILED) {
                if (goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(e),
                    goog.isProvided_(e)) {
                    if (goog.isInModuleLoader_())
                        return goog.module.getInternal_(e)
                } else if (goog.ENABLE_DEBUG_LOADER) {
                    var t = goog.moduleLoaderState_;
                    goog.moduleLoaderState_ = null;
                    try {
                        goog.debugLoader_.load_(e)
                    } finally {
                        goog.moduleLoaderState_ = t
                    }
                }
                return null
            }
        }
        ,
        goog.requireType = function (e) {
            return {}
        }
        ,
        goog.basePath = "",
        goog.nullFunction = function () { }
        ,
        goog.abstractMethod = function () {
            throw Error("unimplemented abstract method")
        }
        ,
        goog.addSingletonGetter = function (e) {
            e.instance_ = void 0,
                e.getInstance = function () {
                    return e.instance_ ? e.instance_ : (goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = e),
                        e.instance_ = new e)
                }
        }
        ,
        goog.instantiatedSingletons_ = [],
        goog.LOAD_MODULE_USING_EVAL = !0,
        goog.SEAL_MODULE_EXPORTS = goog.DEBUG,
        goog.loadedModules_ = {},
        goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER,
        goog.TRANSPILE = "detect",
        goog.ASSUME_ES_MODULES_TRANSPILED = !1,
        goog.TRANSPILE_TO_LANGUAGE = "",
        goog.TRANSPILER = "transpile.js",
        goog.hasBadLetScoping = null,
        goog.useSafari10Workaround = function () {
            if (null == goog.hasBadLetScoping) {
                try {
                    var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";')
                } catch (e) {
                    a = !1
                }
                goog.hasBadLetScoping = a
            }
            return goog.hasBadLetScoping
        }
        ,
        goog.workaroundSafari10EvalBug = function (e) {
            return "(function(){" + e + "\n;})();\n"
        }
        ,
        goog.loadModule = function (e) {
            var t = goog.moduleLoaderState_;
            try {
                if (goog.moduleLoaderState_ = {
                    moduleName: "",
                    declareLegacyNamespace: !1,
                    type: goog.ModuleType.GOOG
                },
                    goog.isFunction(e))
                    var r = e.call(void 0, {});
                else {
                    if ("string" != typeof e)
                        throw Error("Invalid module definition");
                    goog.useSafari10Workaround() && (e = goog.workaroundSafari10EvalBug(e)),
                        r = goog.loadModuleFromSource_.call(void 0, e)
                }
                var n = goog.moduleLoaderState_.moduleName;
                if ("string" != typeof n || !n)
                    throw Error('Invalid module name "' + n + '"');
                goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(n, r) : goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof r && null != r && Object.seal(r),
                    goog.loadedModules_[n] = {
                        exports: r,
                        type: goog.ModuleType.GOOG,
                        moduleId: goog.moduleLoaderState_.moduleName
                    }
            } finally {
                goog.moduleLoaderState_ = t
            }
        }
        ,
        goog.loadModuleFromSource_ = function (a) {
            return eval(a),
                {}
        }
        ,
        goog.normalizePath_ = function (e) {
            e = e.split("/");
            for (var t = 0; t < e.length;)
                "." == e[t] ? e.splice(t, 1) : t && ".." == e[t] && e[t - 1] && ".." != e[t - 1] ? e.splice(--t, 2) : t++;
            return e.join("/")
        }
        ,
        goog.loadFileSync_ = function (e) {
            if (goog.global.CLOSURE_LOAD_FILE_SYNC)
                return goog.global.CLOSURE_LOAD_FILE_SYNC(e);
            try {
                var t = new goog.global.XMLHttpRequest;
                return t.open("get", e, !1),
                    t.send(),
                    0 == t.status || 200 == t.status ? t.responseText : null
            } catch (e) {
                return null
            }
        }
        ,
        goog.transpile_ = function (e, t, r) {
            var n = goog.global.$jscomp;
            n || (goog.global.$jscomp = n = {});
            var o = n.transpile;
            if (!o) {
                var i = goog.basePath + goog.TRANSPILER
                    , a = goog.loadFileSync_(i);
                if (a) {
                    if (function () {
                        (0,
                            eval)(a + "\n//# sourceURL=" + i)
                    }
                        .call(goog.global),
                        goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile)
                        throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
                    goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile,
                        o = (n = goog.global.$jscomp).transpile
                }
            }
            return o || (o = n.transpile = function (e, t) {
                return goog.logToConsole_(t + " requires transpilation but no transpiler was found."),
                    e
            }
            ),
                o(e, t, r)
        }
        ,
        goog.typeOf = function (e) {
            var t = typeof e;
            if ("object" == t) {
                if (!e)
                    return "null";
                if (e instanceof Array)
                    return "array";
                if (e instanceof Object)
                    return t;
                var r = Object.prototype.toString.call(e);
                if ("[object Window]" == r)
                    return "object";
                if ("[object Array]" == r || "number" == typeof e.length && void 0 !== e.splice && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == r || void 0 !== e.call && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("call"))
                    return "function"
            } else if ("function" == t && void 0 === e.call)
                return "object";
            return t
        }
        ,
        goog.isArray = function (e) {
            return "array" == goog.typeOf(e)
        }
        ,
        goog.isArrayLike = function (e) {
            var t = goog.typeOf(e);
            return "array" == t || "object" == t && "number" == typeof e.length
        }
        ,
        goog.isDateLike = function (e) {
            return goog.isObject(e) && "function" == typeof e.getFullYear
        }
        ,
        goog.isFunction = function (e) {
            return "function" == goog.typeOf(e)
        }
        ,
        goog.isObject = function (e) {
            var t = typeof e;
            return "object" == t && null != e || "function" == t
        }
        ,
        goog.getUid = function (e) {
            return Object.prototype.hasOwnProperty.call(e, goog.UID_PROPERTY_) && e[goog.UID_PROPERTY_] || (e[goog.UID_PROPERTY_] = ++goog.uidCounter_)
        }
        ,
        goog.hasUid = function (e) {
            return !!e[goog.UID_PROPERTY_]
        }
        ,
        goog.removeUid = function (e) {
            null !== e && "removeAttribute" in e && e.removeAttribute(goog.UID_PROPERTY_);
            try {
                delete e[goog.UID_PROPERTY_]
            } catch (e) { }
        }
        ,
        goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0),
        goog.uidCounter_ = 0,
        goog.getHashCode = goog.getUid,
        goog.removeHashCode = goog.removeUid,
        goog.cloneObject = function (e) {
            var t = goog.typeOf(e);
            if ("object" == t || "array" == t) {
                if ("function" == typeof e.clone)
                    return e.clone();
                for (var r in t = "array" == t ? [] : {},
                    e)
                    t[r] = goog.cloneObject(e[r]);
                return t
            }
            return e
        }
        ,
        goog.bindNative_ = function (e, t, r) {
            return e.call.apply(e.bind, arguments)
        }
        ,
        goog.bindJs_ = function (e, t, r) {
            if (!e)
                throw Error();
            if (2 < arguments.length) {
                var n = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var r = Array.prototype.slice.call(arguments);
                    return Array.prototype.unshift.apply(r, n),
                        e.apply(t, r)
                }
            }
            return function () {
                return e.apply(t, arguments)
            }
        }
        ,
        goog.bind = function (e, t, r) {
            return Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_,
                goog.bind.apply(null, arguments)
        }
        ,
        goog.partial = function (e, t) {
            var r = Array.prototype.slice.call(arguments, 1);
            return function () {
                var t = r.slice();
                return t.push.apply(t, arguments),
                    e.apply(this, t)
            }
        }
        ,
        goog.mixin = function (e, t) {
            for (var r in t)
                e[r] = t[r]
        }
        ,
        goog.now = goog.TRUSTED_SITE && Date.now || function () {
            return +new Date
        }
        ,
        goog.globalEval = function (e) {
            if (goog.global.execScript)
                goog.global.execScript(e, "JavaScript");
            else {
                if (!goog.global.eval)
                    throw Error("goog.globalEval not available");
                if (null == goog.evalWorksForGlobals_) {
                    try {
                        goog.global.eval("var _evalTest_ = 1;")
                    } catch (e) { }
                    if (void 0 !== goog.global._evalTest_) {
                        try {
                            delete goog.global._evalTest_
                        } catch (e) { }
                        goog.evalWorksForGlobals_ = !0
                    } else
                        goog.evalWorksForGlobals_ = !1
                }
                if (goog.evalWorksForGlobals_)
                    goog.global.eval(e);
                else {
                    var t = goog.global.document
                        , r = t.createElement("script");
                    r.type = "text/javascript",
                        r.defer = !1,
                        r.appendChild(t.createTextNode(e)),
                        t.head.appendChild(r),
                        t.head.removeChild(r)
                }
            }
        }
        ,
        goog.evalWorksForGlobals_ = null,
        goog.getCssName = function (e, t) {
            if ("." == String(e).charAt(0))
                throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + e);
            var r = function (e) {
                return goog.cssNameMapping_[e] || e
            }
                , n = function (e) {
                    e = e.split("-");
                    for (var t = [], n = 0; n < e.length; n++)
                        t.push(r(e[n]));
                    return t.join("-")
                };
            return n = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? r : n : function (e) {
                return e
            }
                ,
                e = t ? e + "-" + n(t) : n(e),
                goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(e) : e
        }
        ,
        goog.setCssNameMapping = function (e, t) {
            goog.cssNameMapping_ = e,
                goog.cssNameMappingStyle_ = t
        }
        ,
        !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING),
        goog.getMsg = function (e, t, r) {
            return r && r.html && (e = e.replace(/</g, "&lt;")),
                t && (e = e.replace(/\{\$([^}]+)}/g, (function (e, r) {
                    return null != t && r in t ? t[r] : e
                }
                ))),
                e
        }
        ,
        goog.getMsgWithFallback = function (e, t) {
            return e
        }
        ,
        goog.exportSymbol = function (e, t, r) {
            goog.exportPath_(e, t, r)
        }
        ,
        goog.exportProperty = function (e, t, r) {
            e[t] = r
        }
        ,
        goog.inherits = function (e, t) {
            function r() { }
            r.prototype = t.prototype,
                e.superClass_ = t.prototype,
                e.prototype = new r,
                e.prototype.constructor = e,
                e.base = function (e, r, n) {
                    for (var o = Array(arguments.length - 2), i = 2; i < arguments.length; i++)
                        o[i - 2] = arguments[i];
                    return t.prototype[r].apply(e, o)
                }
        }
        ,
        goog.scope = function (e) {
            if (goog.isInModuleLoader_())
                throw Error("goog.scope is not supported within a module.");
            e.call(goog.global)
        }
        ,
        COMPILED || (goog.global.COMPILED = COMPILED),
        goog.defineClass = function (e, t) {
            var r = t.constructor
                , n = t.statics;
            return r && r != Object.prototype.constructor || (r = function () {
                throw Error("cannot instantiate an interface (no constructor defined).")
            }
            ),
                r = goog.defineClass.createSealingConstructor_(r, e),
                e && goog.inherits(r, e),
                delete t.constructor,
                delete t.statics,
                goog.defineClass.applyProperties_(r.prototype, t),
                null != n && (n instanceof Function ? n(r) : goog.defineClass.applyProperties_(r, n)),
                r
        }
        ,
        goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG,
        goog.defineClass.createSealingConstructor_ = function (e, t) {
            if (!goog.defineClass.SEAL_CLASS_INSTANCES)
                return e;
            var r = !goog.defineClass.isUnsealable_(t)
                , n = function () {
                    var t = e.apply(this, arguments) || this;
                    return t[goog.UID_PROPERTY_] = t[goog.UID_PROPERTY_],
                        this.constructor === n && r && Object.seal instanceof Function && Object.seal(t),
                        t
                };
            return n
        }
        ,
        goog.defineClass.isUnsealable_ = function (e) {
            return e && e.prototype && e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
        }
        ,
        goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        goog.defineClass.applyProperties_ = function (e, t) {
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            for (var n = 0; n < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; n++)
                r = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[n],
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }
        ,
        goog.tagUnsealableClass = function (e) {
            !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0)
        }
        ,
        goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable",
        !COMPILED && goog.DEPENDENCIES_ENABLED && (goog.inHtmlDocument_ = function () {
            var e = goog.global.document;
            return null != e && "write" in e
        }
            ,
            goog.isDocumentLoading_ = function () {
                var e = goog.global.document;
                return e.attachEvent ? "complete" != e.readyState : "loading" == e.readyState
            }
            ,
            goog.findBasePath_ = function () {
                if (null != goog.global.CLOSURE_BASE_PATH && "string" == typeof goog.global.CLOSURE_BASE_PATH)
                    goog.basePath = goog.global.CLOSURE_BASE_PATH;
                else if (goog.inHtmlDocument_()) {
                    var e = goog.global.document
                        , t = e.currentScript;
                    for (t = (e = t ? [t] : e.getElementsByTagName("SCRIPT")).length - 1; 0 <= t; --t) {
                        var r = e[t].src
                            , n = r.lastIndexOf("?");
                        if (n = -1 == n ? r.length : n,
                            "base.js" == r.substr(n - 7, 7)) {
                            goog.basePath = r.substr(0, n - 7);
                            break
                        }
                    }
                }
            }
            ,
            goog.findBasePath_(),
            goog.Transpiler = function () {
                this.requiresTranspilation_ = null,
                    this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE
            }
            ,
            goog.Transpiler.prototype.createRequiresTranspilation_ = function () {
                function a(t, r) {
                    e ? d[t] = !0 : r() ? (c = t,
                        d[t] = !1) : e = d[t] = !0
                }
                function b(a) {
                    try {
                        return !!eval(a)
                    } catch (e) {
                        return !1
                    }
                }
                var c = "es3"
                    , d = {
                        es3: !1
                    }
                    , e = !1
                    , f = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
                return a("es5", (function () {
                    return b("[1,].length==1")
                }
                )),
                    a("es6", (function () {
                        return !f.match(/Edge\/(\d+)(\.\d)*/i) && b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()')
                    }
                    )),
                    a("es7", (function () {
                        return b("2 ** 2 == 4")
                    }
                    )),
                    a("es8", (function () {
                        return b("async () => 1, true")
                    }
                    )),
                    a("es9", (function () {
                        return b("({...rest} = {}), true")
                    }
                    )),
                    a("es_next", (function () {
                        return !1
                    }
                    )),
                {
                    target: c,
                    map: d
                }
            }
            ,
            goog.Transpiler.prototype.needsTranspile = function (e, t) {
                if ("always" == goog.TRANSPILE)
                    return !0;
                if ("never" == goog.TRANSPILE)
                    return !1;
                if (!this.requiresTranspilation_) {
                    var r = this.createRequiresTranspilation_();
                    this.requiresTranspilation_ = r.map,
                        this.transpilationTarget_ = this.transpilationTarget_ || r.target
                }
                if (e in this.requiresTranspilation_)
                    return !!this.requiresTranspilation_[e] || !(!goog.inHtmlDocument_() || "es6" != t || "noModule" in goog.global.document.createElement("script"));
                throw Error("Unknown language mode: " + e)
            }
            ,
            goog.Transpiler.prototype.transpile = function (e, t) {
                return goog.transpile_(e, t, this.transpilationTarget_)
            }
            ,
            goog.transpiler_ = new goog.Transpiler,
            goog.protectScriptTag_ = function (e) {
                return e.replace(/<\/(SCRIPT)/gi, "\\x3c/$1")
            }
            ,
            goog.DebugLoader_ = function () {
                this.dependencies_ = {},
                    this.idToPath_ = {},
                    this.written_ = {},
                    this.loadingDeps_ = [],
                    this.depsToLoad_ = [],
                    this.paused_ = !1,
                    this.factory_ = new goog.DependencyFactory(goog.transpiler_),
                    this.deferredCallbacks_ = {},
                    this.deferredQueue_ = []
            }
            ,
            goog.DebugLoader_.prototype.bootstrap = function (e, t) {
                function r() {
                    n && (goog.global.setTimeout(n, 0),
                        n = null)
                }
                var n = t;
                if (e.length) {
                    t = [];
                    for (var o = 0; o < e.length; o++) {
                        var i = this.getPathFromDeps_(e[o]);
                        if (!i)
                            throw Error("Unregonized namespace: " + e[o]);
                        t.push(this.dependencies_[i])
                    }
                    i = goog.require;
                    var a = 0;
                    for (o = 0; o < e.length; o++)
                        i(e[o]),
                            t[o].onLoad((function () {
                                ++a == e.length && r()
                            }
                            ))
                } else
                    r()
            }
            ,
            goog.DebugLoader_.prototype.loadClosureDeps = function () {
                this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}, !1)),
                    this.loadDeps_()
            }
            ,
            goog.DebugLoader_.prototype.requested = function (e, t) {
                (e = this.getPathFromDeps_(e)) && (t || this.areDepsLoaded_(this.dependencies_[e].requires)) && (t = this.deferredCallbacks_[e]) && (delete this.deferredCallbacks_[e],
                    t())
            }
            ,
            goog.DebugLoader_.prototype.setDependencyFactory = function (e) {
                this.factory_ = e
            }
            ,
            goog.DebugLoader_.prototype.load_ = function (e) {
                if (!this.getPathFromDeps_(e))
                    throw e = "goog.require could not find: " + e,
                    goog.logToConsole_(e),
                    Error(e);
                var t = this
                    , r = []
                    , n = function (e) {
                        var o = t.getPathFromDeps_(e);
                        if (!o)
                            throw Error("Bad dependency path or symbol: " + e);
                        if (!t.written_[o]) {
                            for (t.written_[o] = !0,
                                e = t.dependencies_[o],
                                o = 0; o < e.requires.length; o++)
                                goog.isProvided_(e.requires[o]) || n(e.requires[o]);
                            r.push(e)
                        }
                    };
                n(e),
                    e = !!this.depsToLoad_.length,
                    this.depsToLoad_ = this.depsToLoad_.concat(r),
                    this.paused_ || e || this.loadDeps_()
            }
            ,
            goog.DebugLoader_.prototype.loadDeps_ = function () {
                for (var e = this, t = this.paused_; this.depsToLoad_.length && !t;)
                    !function () {
                        var r = !1
                            , n = e.depsToLoad_.shift()
                            , o = !1;
                        e.loading_(n);
                        var i = {
                            pause: function () {
                                if (r)
                                    throw Error("Cannot call pause after the call to load.");
                                t = !0
                            },
                            resume: function () {
                                r ? e.resume_() : t = !1
                            },
                            loaded: function () {
                                if (o)
                                    throw Error("Double call to loaded.");
                                o = !0,
                                    e.loaded_(n)
                            },
                            pending: function () {
                                for (var t = [], r = 0; r < e.loadingDeps_.length; r++)
                                    t.push(e.loadingDeps_[r]);
                                return t
                            },
                            setModuleState: function (e) {
                                goog.moduleLoaderState_ = {
                                    type: e,
                                    moduleName: "",
                                    declareLegacyNamespace: !1
                                }
                            },
                            registerEs6ModuleExports: function (e, t, r) {
                                r && (goog.loadedModules_[r] = {
                                    exports: t,
                                    type: goog.ModuleType.ES6,
                                    moduleId: r || ""
                                })
                            },
                            registerGoogModuleExports: function (e, t) {
                                goog.loadedModules_[e] = {
                                    exports: t,
                                    type: goog.ModuleType.GOOG,
                                    moduleId: e
                                }
                            },
                            clearModuleState: function () {
                                goog.moduleLoaderState_ = null
                            },
                            defer: function (t) {
                                if (r)
                                    throw Error("Cannot register with defer after the call to load.");
                                e.defer_(n, t)
                            },
                            areDepsLoaded: function () {
                                return e.areDepsLoaded_(n.requires)
                            }
                        };
                        try {
                            n.load(i)
                        } finally {
                            r = !0
                        }
                    }();
                t && this.pause_()
            }
            ,
            goog.DebugLoader_.prototype.pause_ = function () {
                this.paused_ = !0
            }
            ,
            goog.DebugLoader_.prototype.resume_ = function () {
                this.paused_ && (this.paused_ = !1,
                    this.loadDeps_())
            }
            ,
            goog.DebugLoader_.prototype.loading_ = function (e) {
                this.loadingDeps_.push(e)
            }
            ,
            goog.DebugLoader_.prototype.loaded_ = function (e) {
                for (var t = 0; t < this.loadingDeps_.length; t++)
                    if (this.loadingDeps_[t] == e) {
                        this.loadingDeps_.splice(t, 1);
                        break
                    }
                for (t = 0; t < this.deferredQueue_.length; t++)
                    if (this.deferredQueue_[t] == e.path) {
                        this.deferredQueue_.splice(t, 1);
                        break
                    }
                if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length)
                    for (; this.deferredQueue_.length;)
                        this.requested(this.deferredQueue_.shift(), !0);
                e.loaded()
            }
            ,
            goog.DebugLoader_.prototype.areDepsLoaded_ = function (e) {
                for (var t = 0; t < e.length; t++) {
                    var r = this.getPathFromDeps_(e[t]);
                    if (!r || !(r in this.deferredCallbacks_) && !goog.isProvided_(e[t]))
                        return !1
                }
                return !0
            }
            ,
            goog.DebugLoader_.prototype.getPathFromDeps_ = function (e) {
                return e in this.idToPath_ ? this.idToPath_[e] : e in this.dependencies_ ? e : null
            }
            ,
            goog.DebugLoader_.prototype.defer_ = function (e, t) {
                this.deferredCallbacks_[e.path] = t,
                    this.deferredQueue_.push(e.path)
            }
            ,
            goog.LoadController = function () { }
            ,
            goog.LoadController.prototype.pause = function () { }
            ,
            goog.LoadController.prototype.resume = function () { }
            ,
            goog.LoadController.prototype.loaded = function () { }
            ,
            goog.LoadController.prototype.pending = function () { }
            ,
            goog.LoadController.prototype.registerEs6ModuleExports = function (e, t, r) { }
            ,
            goog.LoadController.prototype.setModuleState = function (e) { }
            ,
            goog.LoadController.prototype.clearModuleState = function () { }
            ,
            goog.LoadController.prototype.defer = function (e) { }
            ,
            goog.LoadController.prototype.areDepsLoaded = function () { }
            ,
            goog.Dependency = function (e, t, r, n, o) {
                this.path = e,
                    this.relativePath = t,
                    this.provides = r,
                    this.requires = n,
                    this.loadFlags = o,
                    this.loaded_ = !1,
                    this.loadCallbacks_ = []
            }
            ,
            goog.Dependency.prototype.getPathName = function () {
                var e = this.path
                    , t = e.indexOf("://");
                return 0 <= t && (0 <= (t = (e = e.substring(t + 3)).indexOf("/")) && (e = e.substring(t + 1))),
                    e
            }
            ,
            goog.Dependency.prototype.onLoad = function (e) {
                this.loaded_ ? e() : this.loadCallbacks_.push(e)
            }
            ,
            goog.Dependency.prototype.loaded = function () {
                this.loaded_ = !0;
                var e = this.loadCallbacks_;
                this.loadCallbacks_ = [];
                for (var t = 0; t < e.length; t++)
                    e[t]()
            }
            ,
            goog.Dependency.defer_ = !1,
            goog.Dependency.callbackMap_ = {},
            goog.Dependency.registerCallback_ = function (e) {
                var t = Math.random().toString(32);
                return goog.Dependency.callbackMap_[t] = e,
                    t
            }
            ,
            goog.Dependency.unregisterCallback_ = function (e) {
                delete goog.Dependency.callbackMap_[e]
            }
            ,
            goog.Dependency.callback_ = function (e, t) {
                if (!(e in goog.Dependency.callbackMap_))
                    throw Error("Callback key " + e + " does not exist (was base.js loaded more than once?).");
                for (var r = goog.Dependency.callbackMap_[e], n = [], o = 1; o < arguments.length; o++)
                    n.push(arguments[o]);
                r.apply(void 0, n)
            }
            ,
            goog.Dependency.prototype.load = function (e) {
                if (goog.global.CLOSURE_IMPORT_SCRIPT)
                    goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? e.loaded() : e.pause();
                else if (goog.inHtmlDocument_()) {
                    var t = goog.global.document;
                    if ("complete" == t.readyState && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
                        if (/\bdeps.js$/.test(this.path))
                            return void e.loaded();
                        throw Error('Cannot write "' + this.path + '" after document load')
                    }
                    if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
                        var r = goog.Dependency.registerCallback_((function (t) {
                            goog.DebugLoader_.IS_OLD_IE_ && "complete" != t.readyState || (goog.Dependency.unregisterCallback_(r),
                                e.loaded())
                        }
                        ))
                            , n = !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce() ? ' nonce="' + goog.getScriptNonce() + '"' : "";
                        n = '<script src="' + this.path + '" ' + (goog.DebugLoader_.IS_OLD_IE_ ? "onreadystatechange" : "onload") + "=\"goog.Dependency.callback_('" + r + '\', this)" type="text/javascript" ' + (goog.Dependency.defer_ ? "defer" : "") + n + "><\/script>",
                            t.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(n) : n)
                    } else {
                        var o = t.createElement("script");
                        o.defer = goog.Dependency.defer_,
                            o.async = !1,
                            o.type = "text/javascript",
                            (n = goog.getScriptNonce()) && o.setAttribute("nonce", n),
                            goog.DebugLoader_.IS_OLD_IE_ ? (e.pause(),
                                o.onreadystatechange = function () {
                                    "loaded" != o.readyState && "complete" != o.readyState || (e.loaded(),
                                        e.resume())
                                }
                            ) : o.onload = function () {
                                o.onload = null,
                                    e.loaded()
                            }
                            ,
                            o.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path,
                            t.head.appendChild(o)
                    }
                } else
                    goog.logToConsole_("Cannot use default debug loader outside of HTML documents."),
                        "deps.js" == this.relativePath ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."),
                            e.loaded()) : e.pause()
            }
            ,
            goog.Es6ModuleDependency = function (e, t, r, n, o) {
                goog.Dependency.call(this, e, t, r, n, o)
            }
            ,
            goog.inherits(goog.Es6ModuleDependency, goog.Dependency),
            goog.Es6ModuleDependency.prototype.load = function (e) {
                if (goog.global.CLOSURE_IMPORT_SCRIPT)
                    goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? e.loaded() : e.pause();
                else if (goog.inHtmlDocument_()) {
                    var t = goog.global.document
                        , r = this;
                    if (goog.isDocumentLoading_()) {
                        var n = function (e, r) {
                            e = r ? '<script type="module" crossorigin>' + r + "<\/script>" : '<script type="module" crossorigin src="' + e + '"><\/script>',
                                t.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(e) : e)
                        };
                        goog.Dependency.defer_ = !0
                    } else
                        n = function (e, r) {
                            var n = t.createElement("script");
                            n.defer = !0,
                                n.async = !1,
                                n.type = "module",
                                n.setAttribute("crossorigin", !0);
                            var o = goog.getScriptNonce();
                            o && n.setAttribute("nonce", o),
                                r ? n.textContent = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(r) : r : n.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(e) : e,
                                t.head.appendChild(n)
                        }
                            ;
                    var o = goog.Dependency.registerCallback_((function () {
                        goog.Dependency.unregisterCallback_(o),
                            e.setModuleState(goog.ModuleType.ES6)
                    }
                    ));
                    n(void 0, 'goog.Dependency.callback_("' + o + '")'),
                        n(this.path, void 0);
                    var i = goog.Dependency.registerCallback_((function (t) {
                        goog.Dependency.unregisterCallback_(i),
                            e.registerEs6ModuleExports(r.path, t, goog.moduleLoaderState_.moduleName)
                    }
                    ));
                    n(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + i + '", m)');
                    var a = goog.Dependency.registerCallback_((function () {
                        goog.Dependency.unregisterCallback_(a),
                            e.clearModuleState(),
                            e.loaded()
                    }
                    ));
                    n(void 0, 'goog.Dependency.callback_("' + a + '")')
                } else
                    goog.logToConsole_("Cannot use default debug loader outside of HTML documents."),
                        e.pause()
            }
            ,
            goog.TransformedDependency = function (e, t, r, n, o) {
                goog.Dependency.call(this, e, t, r, n, o),
                    this.contents_ = null,
                    this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"))
            }
            ,
            goog.inherits(goog.TransformedDependency, goog.Dependency),
            goog.TransformedDependency.prototype.load = function (e) {
                function t() {
                    n.contents_ = goog.loadFileSync_(n.path),
                        n.contents_ && (n.contents_ = n.transform(n.contents_),
                            n.contents_ && (n.contents_ += "\n//# sourceURL=" + n.path))
                }
                function r() {
                    if (n.lazyFetch_ && t(),
                        n.contents_) {
                        o && e.setModuleState(goog.ModuleType.ES6);
                        try {
                            var r = n.contents_;
                            if (n.contents_ = null,
                                goog.globalEval(r),
                                o)
                                var i = goog.moduleLoaderState_.moduleName
                        } finally {
                            o && e.clearModuleState()
                        }
                        o && goog.global.$jscomp.require.ensure([n.getPathName()], (function () {
                            e.registerEs6ModuleExports(n.path, goog.global.$jscomp.require(n.getPathName()), i)
                        }
                        )),
                            e.loaded()
                    }
                }
                var n = this;
                if (goog.global.CLOSURE_IMPORT_SCRIPT)
                    t(),
                        this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null,
                            e.loaded()) : e.pause();
                else {
                    var o = this.loadFlags.module == goog.ModuleType.ES6;
                    this.lazyFetch_ || t();
                    var i = 1 < e.pending().length
                        , a = i && goog.DebugLoader_.IS_OLD_IE_;
                    if (i = goog.Dependency.defer_ && (i || goog.isDocumentLoading_()),
                        a || i)
                        e.defer((function () {
                            r()
                        }
                        ));
                    else {
                        var s = goog.global.document;
                        if (a = goog.inHtmlDocument_() && "ActiveXObject" in goog.global,
                            o && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !a) {
                            goog.Dependency.defer_ = !0,
                                e.pause();
                            var u = s.onreadystatechange;
                            s.onreadystatechange = function () {
                                "interactive" == s.readyState && (s.onreadystatechange = u,
                                    r(),
                                    e.resume()),
                                    goog.isFunction(u) && u.apply(void 0, arguments)
                            }
                        } else
                            !goog.DebugLoader_.IS_OLD_IE_ && goog.inHtmlDocument_() && goog.isDocumentLoading_() ? function () {
                                var e = goog.global.document
                                    , t = goog.Dependency.registerCallback_((function () {
                                        goog.Dependency.unregisterCallback_(t),
                                            r()
                                    }
                                    ))
                                    , n = '<script type="text/javascript">' + goog.protectScriptTag_('goog.Dependency.callback_("' + t + '");') + "<\/script>";
                                e.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(n) : n)
                            }() : r()
                    }
                }
            }
            ,
            goog.TransformedDependency.prototype.transform = function (e) { }
            ,
            goog.TranspiledDependency = function (e, t, r, n, o, i) {
                goog.TransformedDependency.call(this, e, t, r, n, o),
                    this.transpiler = i
            }
            ,
            goog.inherits(goog.TranspiledDependency, goog.TransformedDependency),
            goog.TranspiledDependency.prototype.transform = function (e) {
                return this.transpiler.transpile(e, this.getPathName())
            }
            ,
            goog.PreTranspiledEs6ModuleDependency = function (e, t, r, n, o) {
                goog.TransformedDependency.call(this, e, t, r, n, o)
            }
            ,
            goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency),
            goog.PreTranspiledEs6ModuleDependency.prototype.transform = function (e) {
                return e
            }
            ,
            goog.GoogModuleDependency = function (e, t, r, n, o, i, a) {
                goog.TransformedDependency.call(this, e, t, r, n, o),
                    this.needsTranspile_ = i,
                    this.transpiler_ = a
            }
            ,
            goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency),
            goog.GoogModuleDependency.prototype.transform = function (e) {
                return this.needsTranspile_ && (e = this.transpiler_.transpile(e, this.getPathName())),
                    goog.LOAD_MODULE_USING_EVAL && void 0 !== goog.global.JSON ? "goog.loadModule(" + goog.global.JSON.stringify(e + "\n//# sourceURL=" + this.path + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + e + "\n;return exports});\n//# sourceURL=" + this.path + "\n"
            }
            ,
            goog.DebugLoader_.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all),
            goog.DebugLoader_.prototype.addDependency = function (e, t, r, n) {
                t = t || [],
                    e = e.replace(/\\/g, "/");
                var o = goog.normalizePath_(goog.basePath + e);
                for (n && "boolean" != typeof n || (n = n ? {
                    module: goog.ModuleType.GOOG
                } : {}),
                    r = this.factory_.createDependency(o, e, t, r, n, goog.transpiler_.needsTranspile(n.lang || "es3", n.module)),
                    this.dependencies_[o] = r,
                    r = 0; r < t.length; r++)
                    this.idToPath_[t[r]] = o;
                this.idToPath_[e] = o
            }
            ,
            goog.DependencyFactory = function (e) {
                this.transpiler = e
            }
            ,
            goog.DependencyFactory.prototype.createDependency = function (e, t, r, n, o, i) {
                return o.module == goog.ModuleType.GOOG ? new goog.GoogModuleDependency(e, t, r, n, o, i, this.transpiler) : i ? new goog.TranspiledDependency(e, t, r, n, o, this.transpiler) : o.module == goog.ModuleType.ES6 ? "never" == goog.TRANSPILE && goog.ASSUME_ES_MODULES_TRANSPILED ? new goog.PreTranspiledEs6ModuleDependency(e, t, r, n, o) : new goog.Es6ModuleDependency(e, t, r, n, o) : new goog.Dependency(e, t, r, n, o)
            }
            ,
            goog.debugLoader_ = new goog.DebugLoader_,
            goog.loadClosureDeps = function () {
                goog.debugLoader_.loadClosureDeps()
            }
            ,
            goog.setDependencyFactory = function (e) {
                goog.debugLoader_.setDependencyFactory(e)
            }
            ,
            goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(),
            goog.bootstrap = function (e, t) {
                goog.debugLoader_.bootstrap(e, t)
            }
        ),
        goog.TRUSTED_TYPES_POLICY_NAME = "",
        goog.identity_ = function (e) {
            return e
        }
        ,
        goog.createTrustedTypesPolicy = function (e) {
            var t = null
                , r = goog.global.trustedTypes || goog.global.TrustedTypes;
            if (!r || !r.createPolicy)
                return t;
            try {
                t = r.createPolicy(e, {
                    createHTML: goog.identity_,
                    createScript: goog.identity_,
                    createScriptURL: goog.identity_,
                    createURL: goog.identity_
                })
            } catch (e) {
                goog.logToConsole_(e.message)
            }
            return t
        }
        ,
        goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null,
        goog.object = {},
        goog.object.is = function (e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
        }
        ,
        goog.object.forEach = function (e, t, r) {
            for (var n in e)
                t.call(r, e[n], n, e)
        }
        ,
        goog.object.filter = function (e, t, r) {
            var n, o = {};
            for (n in e)
                t.call(r, e[n], n, e) && (o[n] = e[n]);
            return o
        }
        ,
        goog.object.map = function (e, t, r) {
            var n, o = {};
            for (n in e)
                o[n] = t.call(r, e[n], n, e);
            return o
        }
        ,
        goog.object.some = function (e, t, r) {
            for (var n in e)
                if (t.call(r, e[n], n, e))
                    return !0;
            return !1
        }
        ,
        goog.object.every = function (e, t, r) {
            for (var n in e)
                if (!t.call(r, e[n], n, e))
                    return !1;
            return !0
        }
        ,
        goog.object.getCount = function (e) {
            var t, r = 0;
            for (t in e)
                r++;
            return r
        }
        ,
        goog.object.getAnyKey = function (e) {
            for (var t in e)
                return t
        }
        ,
        goog.object.getAnyValue = function (e) {
            for (var t in e)
                return e[t]
        }
        ,
        goog.object.contains = function (e, t) {
            return goog.object.containsValue(e, t)
        }
        ,
        goog.object.getValues = function (e) {
            var t, r = [], n = 0;
            for (t in e)
                r[n++] = e[t];
            return r
        }
        ,
        goog.object.getKeys = function (e) {
            var t, r = [], n = 0;
            for (t in e)
                r[n++] = t;
            return r
        }
        ,
        goog.object.getValueByKeys = function (e, t) {
            var r = goog.isArrayLike(t)
                , n = r ? t : arguments;
            for (r = r ? 0 : 1; r < n.length; r++) {
                if (null == e)
                    return;
                e = e[n[r]]
            }
            return e
        }
        ,
        goog.object.containsKey = function (e, t) {
            return null !== e && t in e
        }
        ,
        goog.object.containsValue = function (e, t) {
            for (var r in e)
                if (e[r] == t)
                    return !0;
            return !1
        }
        ,
        goog.object.findKey = function (e, t, r) {
            for (var n in e)
                if (t.call(r, e[n], n, e))
                    return n
        }
        ,
        goog.object.findValue = function (e, t, r) {
            return (t = goog.object.findKey(e, t, r)) && e[t]
        }
        ,
        goog.object.isEmpty = function (e) {
            for (var t in e)
                return !1;
            return !0
        }
        ,
        goog.object.clear = function (e) {
            for (var t in e)
                delete e[t]
        }
        ,
        goog.object.remove = function (e, t) {
            var r;
            return (r = t in e) && delete e[t],
                r
        }
        ,
        goog.object.add = function (e, t, r) {
            if (null !== e && t in e)
                throw Error('The object already contains the key "' + t + '"');
            goog.object.set(e, t, r)
        }
        ,
        goog.object.get = function (e, t, r) {
            return null !== e && t in e ? e[t] : r
        }
        ,
        goog.object.set = function (e, t, r) {
            e[t] = r
        }
        ,
        goog.object.setIfUndefined = function (e, t, r) {
            return t in e ? e[t] : e[t] = r
        }
        ,
        goog.object.setWithReturnValueIfNotSet = function (e, t, r) {
            return t in e ? e[t] : (r = r(),
                e[t] = r)
        }
        ,
        goog.object.equals = function (e, t) {
            for (var r in e)
                if (!(r in t) || e[r] !== t[r])
                    return !1;
            for (var n in t)
                if (!(n in e))
                    return !1;
            return !0
        }
        ,
        goog.object.clone = function (e) {
            var t, r = {};
            for (t in e)
                r[t] = e[t];
            return r
        }
        ,
        goog.object.unsafeClone = function (e) {
            var t = goog.typeOf(e);
            if ("object" == t || "array" == t) {
                if (goog.isFunction(e.clone))
                    return e.clone();
                for (var r in t = "array" == t ? [] : {},
                    e)
                    t[r] = goog.object.unsafeClone(e[r]);
                return t
            }
            return e
        }
        ,
        goog.object.transpose = function (e) {
            var t, r = {};
            for (t in e)
                r[e[t]] = t;
            return r
        }
        ,
        goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        goog.object.extend = function (e, t) {
            for (var r, n, o = 1; o < arguments.length; o++) {
                for (r in n = arguments[o])
                    e[r] = n[r];
                for (var i = 0; i < goog.object.PROTOTYPE_FIELDS_.length; i++)
                    r = goog.object.PROTOTYPE_FIELDS_[i],
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
        }
        ,
        goog.object.create = function (e) {
            var t = arguments.length;
            if (1 == t && Array.isArray(arguments[0]))
                return goog.object.create.apply(null, arguments[0]);
            if (t % 2)
                throw Error("Uneven number of arguments");
            for (var r = {}, n = 0; n < t; n += 2)
                r[arguments[n]] = arguments[n + 1];
            return r
        }
        ,
        goog.object.createSet = function (e) {
            var t = arguments.length;
            if (1 == t && Array.isArray(arguments[0]))
                return goog.object.createSet.apply(null, arguments[0]);
            for (var r = {}, n = 0; n < t; n++)
                r[arguments[n]] = !0;
            return r
        }
        ,
        goog.object.createImmutableView = function (e) {
            var t = e;
            return Object.isFrozen && !Object.isFrozen(e) && (t = Object.create(e),
                Object.freeze(t)),
                t
        }
        ,
        goog.object.isImmutableView = function (e) {
            return !!Object.isFrozen && Object.isFrozen(e)
        }
        ,
        goog.object.getAllPropertyNames = function (e, t, r) {
            if (!e)
                return [];
            if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
                return goog.object.getKeys(e);
            for (var n = {}; e && (e !== Object.prototype || t) && (e !== Function.prototype || r);) {
                for (var o = Object.getOwnPropertyNames(e), i = 0; i < o.length; i++)
                    n[o[i]] = !0;
                e = Object.getPrototypeOf(e)
            }
            return goog.object.getKeys(n)
        }
        ,
        goog.object.getSuperClass = function (e) {
            return (e = Object.getPrototypeOf(e.prototype)) && e.constructor
        }
        ;
    var jspb = {
        asserts: {}
    };
    jspb.asserts.doAssertFailure = function (e, t, r, n) {
        var o = "Assertion failed";
        if (r) {
            o += ": " + r;
            var i = n
        } else
            e && (o += ": " + e,
                i = t);
        // console.log(t)
        throw Error("" + o, i || [])
    }
        ,
        jspb.asserts.assert = function (e, t, r) {
            for (var n = [], o = 2; o < arguments.length; ++o)
                n[o - 2] = arguments[o];
            return e || jspb.asserts.doAssertFailure("", null, t, n),
                e
        }
        ,
        jspb.asserts.assertString = function (e, t, r) {
            for (var n = [], o = 2; o < arguments.length; ++o)
                n[o - 2] = arguments[o];
            return "string" != typeof e && jspb.asserts.doAssertFailure("Expected string but got %s: %s.", [goog.typeOf(e), e], t, n),
                e
        }
        ,
        jspb.asserts.assertArray = function (e, t, r) {
            for (var n = [], o = 2; o < arguments.length; ++o)
                n[o - 2] = arguments[o];
            return Array.isArray(e) || jspb.asserts.doAssertFailure("Expected array but got %s: %s.", [goog.typeOf(e), e], t, n),
                e
        }
        ,
        jspb.asserts.fail = function (e, t) {
            for (var r = [], n = 1; n < arguments.length; ++n)
                r[n - 1] = arguments[n];
            throw Error("Failure" + (e ? ": " + e : ""), r)
        }
        ,
        jspb.asserts.assertInstanceof = function (e, t, r, n) {
            for (var o = [], i = 3; i < arguments.length; ++i)
                o[i - 3] = arguments[i];
            return e instanceof t || jspb.asserts.doAssertFailure("Expected instanceof %s but got %s.", [jspb.asserts.getType(t), jspb.asserts.getType(e)], r, o),
                e
        }
        ,
        jspb.asserts.getType = function (e) {
            return e instanceof Function ? e.displayName || e.name || "unknown type name" : e instanceof Object ? e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e) : null === e ? "null" : typeof e
        }
        ,
        jspb.BinaryConstants = {},
        jspb.ConstBinaryMessage = function () { }
        ,
        jspb.BinaryMessage = function () { }
        ,
        jspb.BinaryConstants.FieldType = {
            INVALID: -1,
            DOUBLE: 1,
            FLOAT: 2,
            INT64: 3,
            UINT64: 4,
            INT32: 5,
            FIXED64: 6,
            FIXED32: 7,
            BOOL: 8,
            STRING: 9,
            GROUP: 10,
            MESSAGE: 11,
            BYTES: 12,
            UINT32: 13,
            ENUM: 14,
            SFIXED32: 15,
            SFIXED64: 16,
            SINT32: 17,
            SINT64: 18,
            FHASH64: 30,
            VHASH64: 31
        },
        jspb.BinaryConstants.WireType = {
            INVALID: -1,
            VARINT: 0,
            FIXED64: 1,
            DELIMITED: 2,
            START_GROUP: 3,
            END_GROUP: 4,
            FIXED32: 5
        },
        jspb.BinaryConstants.FieldTypeToWireType = function (e) {
            var t = jspb.BinaryConstants.FieldType
                , r = jspb.BinaryConstants.WireType;
            switch (e) {
                case t.INT32:
                case t.INT64:
                case t.UINT32:
                case t.UINT64:
                case t.SINT32:
                case t.SINT64:
                case t.BOOL:
                case t.ENUM:
                case t.VHASH64:
                    return r.VARINT;
                case t.DOUBLE:
                case t.FIXED64:
                case t.SFIXED64:
                case t.FHASH64:
                    return r.FIXED64;
                case t.STRING:
                case t.MESSAGE:
                case t.BYTES:
                    return r.DELIMITED;
                case t.FLOAT:
                case t.FIXED32:
                case t.SFIXED32:
                    return r.FIXED32;
                default:
                    return r.INVALID
            }
        }
        ,
        jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1,
        jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60,
        jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54,
        jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22,
        jspb.BinaryConstants.FLOAT64_EPS = 5e-324,
        jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324,
        jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292,
        jspb.BinaryConstants.TWO_TO_20 = 1048576,
        jspb.BinaryConstants.TWO_TO_23 = 8388608,
        jspb.BinaryConstants.TWO_TO_31 = 2147483648,
        jspb.BinaryConstants.TWO_TO_32 = 4294967296,
        jspb.BinaryConstants.TWO_TO_52 = 4503599627370496,
        jspb.BinaryConstants.TWO_TO_63 = 0x8000000000000000,
        jspb.BinaryConstants.TWO_TO_64 = 0x10000000000000000,
        jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0",
        goog.debug = {},
        goog.debug.Error = function (e) {
            if (Error.captureStackTrace)
                Error.captureStackTrace(this, goog.debug.Error);
            else {
                var t = Error().stack;
                t && (this.stack = t)
            }
            e && (this.message = String(e)),
                this.reportErrorToServer = !0
        }
        ,
        goog.inherits(goog.debug.Error, Error),
        goog.debug.Error.prototype.name = "CustomError",
        goog.dom = {},
        goog.dom.NodeType = {
            ELEMENT: 1,
            ATTRIBUTE: 2,
            TEXT: 3,
            CDATA_SECTION: 4,
            ENTITY_REFERENCE: 5,
            ENTITY: 6,
            PROCESSING_INSTRUCTION: 7,
            COMMENT: 8,
            DOCUMENT: 9,
            DOCUMENT_TYPE: 10,
            DOCUMENT_FRAGMENT: 11,
            NOTATION: 12
        },
        goog.asserts = {},
        goog.asserts.ENABLE_ASSERTS = goog.DEBUG,
        goog.asserts.AssertionError = function (e, t) {
            goog.debug.Error.call(this, goog.asserts.subs_(e, t)),
                this.messagePattern = e
        }
        ,
        goog.inherits(goog.asserts.AssertionError, goog.debug.Error),
        goog.asserts.AssertionError.prototype.name = "AssertionError",
        goog.asserts.DEFAULT_ERROR_HANDLER = function (e) {
            throw e
        }
        ,
        goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER,
        goog.asserts.subs_ = function (e, t) {
            for (var r = "", n = (e = e.split("%s")).length - 1, o = 0; o < n; o++)
                r += e[o] + (o < t.length ? t[o] : "%s");
            return r + e[n]
        }
        ,
        goog.asserts.doAssertFailure_ = function (e, t, r, n) {
            var o = "Assertion failed";
            if (r) {
                o += ": " + r;
                var i = n
            } else
                e && (o += ": " + e,
                    i = t);
            e = new goog.asserts.AssertionError("" + o, i || []),
                goog.asserts.errorHandler_(e)
        }
        ,
        goog.asserts.setErrorHandler = function (e) {
            goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = e)
        }
        ,
        goog.asserts.assert = function (e, t, r) {
            return goog.asserts.ENABLE_ASSERTS && !e && goog.asserts.doAssertFailure_("", null, t, Array.prototype.slice.call(arguments, 2)),
                e
        }
        ,
        goog.asserts.assertExists = function (e, t, r) {
            return goog.asserts.ENABLE_ASSERTS && null == e && goog.asserts.doAssertFailure_("Expected to exist: %s.", [e], t, Array.prototype.slice.call(arguments, 2)),
                e
        }
        ,
        goog.asserts.fail = function (e, t) {
            goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (e ? ": " + e : ""), Array.prototype.slice.call(arguments, 1)))
        }
        ,
        goog.asserts.assertNumber = function (e, t, r) {
            return goog.asserts.ENABLE_ASSERTS && "number" != typeof e && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
                e
        }
        ,
        goog.asserts.assertString = function (e, t, r) {
            return goog.asserts.ENABLE_ASSERTS && "string" != typeof e && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
                e
        }
        ,
        goog.asserts.assertFunction = function (e, t, r) {
            return goog.asserts.ENABLE_ASSERTS && !goog.isFunction(e) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
                e
        }
        ,
        goog.asserts.assertObject = function (e, t, r) {
            return goog.asserts.ENABLE_ASSERTS && !goog.isObject(e) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
                e
        }
        ,
        goog.asserts.assertArray = function (e, t, r) {
            return goog.asserts.ENABLE_ASSERTS && !Array.isArray(e) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
                e
        }
        ,
        goog.asserts.assertBoolean = function (e, t, r) {
            return goog.asserts.ENABLE_ASSERTS && "boolean" != typeof e && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
                e
        }
        ,
        goog.asserts.assertElement = function (e, t, r) {
            return !goog.asserts.ENABLE_ASSERTS || goog.isObject(e) && e.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
                e
        }
        ,
        goog.asserts.assertInstanceof = function (e, t, r, n) {
            return !goog.asserts.ENABLE_ASSERTS || e instanceof t || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(t), goog.asserts.getType_(e)], r, Array.prototype.slice.call(arguments, 3)),
                e
        }
        ,
        goog.asserts.assertFinite = function (e, t, r) {
            return !goog.asserts.ENABLE_ASSERTS || "number" == typeof e && isFinite(e) || goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [e], t, Array.prototype.slice.call(arguments, 2)),
                e
        }
        ,
        goog.asserts.assertObjectPrototypeIsIntact = function () {
            for (var e in Object.prototype)
                goog.asserts.fail(e + " should not be enumerable in Object.prototype.")
        }
        ,
        goog.asserts.getType_ = function (e) {
            return e instanceof Function ? e.displayName || e.name || "unknown type name" : e instanceof Object ? e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e) : null === e ? "null" : typeof e
        }
        ,
        goog.array = {},
        goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE,
        goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR,
        goog.array.peek = function (e) {
            return e[e.length - 1]
        }
        ,
        goog.array.last = goog.array.peek,
        goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function (e, t, r) {
            return goog.asserts.assert(null != e.length),
                Array.prototype.indexOf.call(e, t, r)
        }
            : function (e, t, r) {
                if (r = null == r ? 0 : 0 > r ? Math.max(0, e.length + r) : r,
                    "string" == typeof e)
                    return "string" != typeof t || 1 != t.length ? -1 : e.indexOf(t, r);
                for (; r < e.length; r++)
                    if (r in e && e[r] === t)
                        return r;
                return -1
            }
        ,
        goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function (e, t, r) {
            return goog.asserts.assert(null != e.length),
                Array.prototype.lastIndexOf.call(e, t, null == r ? e.length - 1 : r)
        }
            : function (e, t, r) {
                if (0 > (r = null == r ? e.length - 1 : r) && (r = Math.max(0, e.length + r)),
                    "string" == typeof e)
                    return "string" != typeof t || 1 != t.length ? -1 : e.lastIndexOf(t, r);
                for (; 0 <= r; r--)
                    if (r in e && e[r] === t)
                        return r;
                return -1
            }
        ,
        goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function (e, t, r) {
            goog.asserts.assert(null != e.length),
                Array.prototype.forEach.call(e, t, r)
        }
            : function (e, t, r) {
                for (var n = e.length, o = "string" == typeof e ? e.split("") : e, i = 0; i < n; i++)
                    i in o && t.call(r, o[i], i, e)
            }
        ,
        goog.array.forEachRight = function (e, t, r) {
            var n = e.length
                , o = "string" == typeof e ? e.split("") : e;
            for (--n; 0 <= n; --n)
                n in o && t.call(r, o[n], n, e)
        }
        ,
        goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function (e, t, r) {
            return goog.asserts.assert(null != e.length),
                Array.prototype.filter.call(e, t, r)
        }
            : function (e, t, r) {
                for (var n = e.length, o = [], i = 0, a = "string" == typeof e ? e.split("") : e, s = 0; s < n; s++)
                    if (s in a) {
                        var u = a[s];
                        t.call(r, u, s, e) && (o[i++] = u)
                    }
                return o
            }
        ,
        goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function (e, t, r) {
            return goog.asserts.assert(null != e.length),
                Array.prototype.map.call(e, t, r)
        }
            : function (e, t, r) {
                for (var n = e.length, o = Array(n), i = "string" == typeof e ? e.split("") : e, a = 0; a < n; a++)
                    a in i && (o[a] = t.call(r, i[a], a, e));
                return o
            }
        ,
        goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function (e, t, r, n) {
            return goog.asserts.assert(null != e.length),
                n && (t = goog.bind(t, n)),
                Array.prototype.reduce.call(e, t, r)
        }
            : function (e, t, r, n) {
                var o = r;
                return goog.array.forEach(e, (function (r, i) {
                    o = t.call(n, o, r, i, e)
                }
                )),
                    o
            }
        ,
        goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function (e, t, r, n) {
            return goog.asserts.assert(null != e.length),
                goog.asserts.assert(null != t),
                n && (t = goog.bind(t, n)),
                Array.prototype.reduceRight.call(e, t, r)
        }
            : function (e, t, r, n) {
                var o = r;
                return goog.array.forEachRight(e, (function (r, i) {
                    o = t.call(n, o, r, i, e)
                }
                )),
                    o
            }
        ,
        goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function (e, t, r) {
            return goog.asserts.assert(null != e.length),
                Array.prototype.some.call(e, t, r)
        }
            : function (e, t, r) {
                for (var n = e.length, o = "string" == typeof e ? e.split("") : e, i = 0; i < n; i++)
                    if (i in o && t.call(r, o[i], i, e))
                        return !0;
                return !1
            }
        ,
        goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function (e, t, r) {
            return goog.asserts.assert(null != e.length),
                Array.prototype.every.call(e, t, r)
        }
            : function (e, t, r) {
                for (var n = e.length, o = "string" == typeof e ? e.split("") : e, i = 0; i < n; i++)
                    if (i in o && !t.call(r, o[i], i, e))
                        return !1;
                return !0
            }
        ,
        goog.array.count = function (e, t, r) {
            var n = 0;
            return goog.array.forEach(e, (function (e, o, i) {
                t.call(r, e, o, i) && ++n
            }
            ), r),
                n
        }
        ,
        goog.array.find = function (e, t, r) {
            return 0 > (t = goog.array.findIndex(e, t, r)) ? null : "string" == typeof e ? e.charAt(t) : e[t]
        }
        ,
        goog.array.findIndex = function (e, t, r) {
            for (var n = e.length, o = "string" == typeof e ? e.split("") : e, i = 0; i < n; i++)
                if (i in o && t.call(r, o[i], i, e))
                    return i;
            return -1
        }
        ,
        goog.array.findRight = function (e, t, r) {
            return 0 > (t = goog.array.findIndexRight(e, t, r)) ? null : "string" == typeof e ? e.charAt(t) : e[t]
        }
        ,
        goog.array.findIndexRight = function (e, t, r) {
            var n = e.length
                , o = "string" == typeof e ? e.split("") : e;
            for (--n; 0 <= n; n--)
                if (n in o && t.call(r, o[n], n, e))
                    return n;
            return -1
        }
        ,
        goog.array.contains = function (e, t) {
            return 0 <= goog.array.indexOf(e, t)
        }
        ,
        goog.array.isEmpty = function (e) {
            return 0 == e.length
        }
        ,
        goog.array.clear = function (e) {
            if (!Array.isArray(e))
                for (var t = e.length - 1; 0 <= t; t--)
                    delete e[t];
            e.length = 0
        }
        ,
        goog.array.insert = function (e, t) {
            goog.array.contains(e, t) || e.push(t)
        }
        ,
        goog.array.insertAt = function (e, t, r) {
            goog.array.splice(e, r, 0, t)
        }
        ,
        goog.array.insertArrayAt = function (e, t, r) {
            goog.partial(goog.array.splice, e, r, 0).apply(null, t)
        }
        ,
        goog.array.insertBefore = function (e, t, r) {
            var n;
            2 == arguments.length || 0 > (n = goog.array.indexOf(e, r)) ? e.push(t) : goog.array.insertAt(e, t, n)
        }
        ,
        goog.array.remove = function (e, t) {
            var r;
            return (r = 0 <= (t = goog.array.indexOf(e, t))) && goog.array.removeAt(e, t),
                r
        }
        ,
        goog.array.removeLast = function (e, t) {
            return 0 <= (t = goog.array.lastIndexOf(e, t)) && (goog.array.removeAt(e, t),
                !0)
        }
        ,
        goog.array.removeAt = function (e, t) {
            return goog.asserts.assert(null != e.length),
                1 == Array.prototype.splice.call(e, t, 1).length
        }
        ,
        goog.array.removeIf = function (e, t, r) {
            return 0 <= (t = goog.array.findIndex(e, t, r)) && (goog.array.removeAt(e, t),
                !0)
        }
        ,
        goog.array.removeAllIf = function (e, t, r) {
            var n = 0;
            return goog.array.forEachRight(e, (function (o, i) {
                t.call(r, o, i, e) && goog.array.removeAt(e, i) && n++
            }
            )),
                n
        }
        ,
        goog.array.concat = function (e) {
            return Array.prototype.concat.apply([], arguments)
        }
        ,
        goog.array.join = function (e) {
            return Array.prototype.concat.apply([], arguments)
        }
        ,
        goog.array.toArray = function (e) {
            var t = e.length;
            if (0 < t) {
                for (var r = Array(t), n = 0; n < t; n++)
                    r[n] = e[n];
                return r
            }
            return []
        }
        ,
        goog.array.clone = goog.array.toArray,
        goog.array.extend = function (e, t) {
            for (var r = 1; r < arguments.length; r++) {
                var n = arguments[r];
                if (goog.isArrayLike(n)) {
                    var o = e.length || 0
                        , i = n.length || 0;
                    e.length = o + i;
                    for (var a = 0; a < i; a++)
                        e[o + a] = n[a]
                } else
                    e.push(n)
            }
        }
        ,
        goog.array.splice = function (e, t, r, n) {
            return goog.asserts.assert(null != e.length),
                Array.prototype.splice.apply(e, goog.array.slice(arguments, 1))
        }
        ,
        goog.array.slice = function (e, t, r) {
            return goog.asserts.assert(null != e.length),
                2 >= arguments.length ? Array.prototype.slice.call(e, t) : Array.prototype.slice.call(e, t, r)
        }
        ,
        goog.array.removeDuplicates = function (e, t, r) {
            t = t || e;
            var n = function (e) {
                return goog.isObject(e) ? "o" + goog.getUid(e) : (typeof e).charAt(0) + e
            };
            r = r || n,
                n = {};
            for (var o = 0, i = 0; i < e.length;) {
                var a = e[i++]
                    , s = r(a);
                Object.prototype.hasOwnProperty.call(n, s) || (n[s] = !0,
                    t[o++] = a)
            }
            t.length = o
        }
        ,
        goog.array.binarySearch = function (e, t, r) {
            return goog.array.binarySearch_(e, r || goog.array.defaultCompare, !1, t)
        }
        ,
        goog.array.binarySelect = function (e, t, r) {
            return goog.array.binarySearch_(e, t, !0, void 0, r)
        }
        ,
        goog.array.binarySearch_ = function (e, t, r, n, o) {
            for (var i, a = 0, s = e.length; a < s;) {
                var u = a + (s - a >>> 1)
                    , l = r ? t.call(o, e[u], u, e) : t(n, e[u]);
                0 < l ? a = u + 1 : (s = u,
                    i = !l)
            }
            return i ? a : -a - 1
        }
        ,
        goog.array.sort = function (e, t) {
            e.sort(t || goog.array.defaultCompare)
        }
        ,
        goog.array.stableSort = function (e, t) {
            for (var r = Array(e.length), n = 0; n < e.length; n++)
                r[n] = {
                    index: n,
                    value: e[n]
                };
            var o = t || goog.array.defaultCompare;
            for (goog.array.sort(r, (function (e, t) {
                return o(e.value, t.value) || e.index - t.index
            }
            )),
                n = 0; n < e.length; n++)
                e[n] = r[n].value
        }
        ,
        goog.array.sortByKey = function (e, t, r) {
            var n = r || goog.array.defaultCompare;
            goog.array.sort(e, (function (e, r) {
                return n(t(e), t(r))
            }
            ))
        }
        ,
        goog.array.sortObjectsByKey = function (e, t, r) {
            goog.array.sortByKey(e, (function (e) {
                return e[t]
            }
            ), r)
        }
        ,
        goog.array.isSorted = function (e, t, r) {
            t = t || goog.array.defaultCompare;
            for (var n = 1; n < e.length; n++) {
                var o = t(e[n - 1], e[n]);
                if (0 < o || 0 == o && r)
                    return !1
            }
            return !0
        }
        ,
        goog.array.equals = function (e, t, r) {
            if (!goog.isArrayLike(e) || !goog.isArrayLike(t) || e.length != t.length)
                return !1;
            var n = e.length;
            r = r || goog.array.defaultCompareEquality;
            for (var o = 0; o < n; o++)
                if (!r(e[o], t[o]))
                    return !1;
            return !0
        }
        ,
        goog.array.compare3 = function (e, t, r) {
            r = r || goog.array.defaultCompare;
            for (var n = Math.min(e.length, t.length), o = 0; o < n; o++) {
                var i = r(e[o], t[o]);
                if (0 != i)
                    return i
            }
            return goog.array.defaultCompare(e.length, t.length)
        }
        ,
        goog.array.defaultCompare = function (e, t) {
            return e > t ? 1 : e < t ? -1 : 0
        }
        ,
        goog.array.inverseDefaultCompare = function (e, t) {
            return -goog.array.defaultCompare(e, t)
        }
        ,
        goog.array.defaultCompareEquality = function (e, t) {
            return e === t
        }
        ,
        goog.array.binaryInsert = function (e, t, r) {
            return 0 > (r = goog.array.binarySearch(e, t, r)) && (goog.array.insertAt(e, t, -(r + 1)),
                !0)
        }
        ,
        goog.array.binaryRemove = function (e, t, r) {
            return 0 <= (t = goog.array.binarySearch(e, t, r)) && goog.array.removeAt(e, t)
        }
        ,
        goog.array.bucket = function (e, t, r) {
            for (var n = {}, o = 0; o < e.length; o++) {
                var i = e[o]
                    , a = t.call(r, i, o, e);
                void 0 !== a && (n[a] || (n[a] = [])).push(i)
            }
            return n
        }
        ,
        goog.array.toObject = function (e, t, r) {
            var n = {};
            return goog.array.forEach(e, (function (o, i) {
                n[t.call(r, o, i, e)] = o
            }
            )),
                n
        }
        ,
        goog.array.range = function (e, t, r) {
            var n = []
                , o = 0
                , i = e;
            if (void 0 !== t && (o = e,
                i = t),
                0 > (r = r || 1) * (i - o))
                return [];
            if (0 < r)
                for (e = o; e < i; e += r)
                    n.push(e);
            else
                for (e = o; e > i; e += r)
                    n.push(e);
            return n
        }
        ,
        goog.array.repeat = function (e, t) {
            for (var r = [], n = 0; n < t; n++)
                r[n] = e;
            return r
        }
        ,
        goog.array.flatten = function (e) {
            for (var t = [], r = 0; r < arguments.length; r++) {
                var n = arguments[r];
                if (Array.isArray(n))
                    for (var o = 0; o < n.length; o += 8192) {
                        var i = goog.array.slice(n, o, o + 8192);
                        i = goog.array.flatten.apply(null, i);
                        for (var a = 0; a < i.length; a++)
                            t.push(i[a])
                    }
                else
                    t.push(n)
            }
            return t
        }
        ,
        goog.array.rotate = function (e, t) {
            return goog.asserts.assert(null != e.length),
                e.length && (0 < (t %= e.length) ? Array.prototype.unshift.apply(e, e.splice(-t, t)) : 0 > t && Array.prototype.push.apply(e, e.splice(0, -t))),
                e
        }
        ,
        goog.array.moveItem = function (e, t, r) {
            goog.asserts.assert(0 <= t && t < e.length),
                goog.asserts.assert(0 <= r && r < e.length),
                t = Array.prototype.splice.call(e, t, 1),
                Array.prototype.splice.call(e, r, 0, t[0])
        }
        ,
        goog.array.zip = function (e) {
            if (!arguments.length)
                return [];
            for (var t = [], r = arguments[0].length, n = 1; n < arguments.length; n++)
                arguments[n].length < r && (r = arguments[n].length);
            for (n = 0; n < r; n++) {
                for (var o = [], i = 0; i < arguments.length; i++)
                    o.push(arguments[i][n]);
                t.push(o)
            }
            return t
        }
        ,
        goog.array.shuffle = function (e, t) {
            t = t || Math.random;
            for (var r = e.length - 1; 0 < r; r--) {
                var n = Math.floor(t() * (r + 1))
                    , o = e[r];
                e[r] = e[n],
                    e[n] = o
            }
        }
        ,
        goog.array.copyByIndex = function (e, t) {
            var r = [];
            return goog.array.forEach(t, (function (t) {
                r.push(e[t])
            }
            )),
                r
        }
        ,
        goog.array.concatMap = function (e, t, r) {
            return goog.array.concat.apply([], goog.array.map(e, t, r))
        }
        ,
        goog.crypt = {},
        goog.crypt.stringToByteArray = function (e) {
            for (var t = [], r = 0, n = 0; n < e.length; n++) {
                var o = e.charCodeAt(n);
                255 < o && (t[r++] = 255 & o,
                    o >>= 8),
                    t[r++] = o
            }
            return t
        }
        ,
        goog.crypt.byteArrayToString = function (e) {
            if (8192 >= e.length)
                return String.fromCharCode.apply(null, e);
            for (var t = "", r = 0; r < e.length; r += 8192) {
                var n = goog.array.slice(e, r, r + 8192);
                t += String.fromCharCode.apply(null, n)
            }
            return t
        }
        ,
        goog.crypt.byteArrayToHex = function (e, t) {
            return goog.array.map(e, (function (e) {
                return 1 < (e = e.toString(16)).length ? e : "0" + e
            }
            )).join(t || "")
        }
        ,
        goog.crypt.hexToByteArray = function (e) {
            goog.asserts.assert(0 == e.length % 2, "Key string length must be multiple of 2");
            for (var t = [], r = 0; r < e.length; r += 2)
                t.push(parseInt(e.substring(r, r + 2), 16));
            return t
        }
        ,
        goog.crypt.stringToUtf8ByteArray = function (e) {
            for (var t = [], r = 0, n = 0; n < e.length; n++) {
                var o = e.charCodeAt(n);
                128 > o ? t[r++] = o : (2048 > o ? t[r++] = o >> 6 | 192 : (55296 == (64512 & o) && n + 1 < e.length && 56320 == (64512 & e.charCodeAt(n + 1)) ? (o = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++n)),
                    t[r++] = o >> 18 | 240,
                    t[r++] = o >> 12 & 63 | 128) : t[r++] = o >> 12 | 224,
                    t[r++] = o >> 6 & 63 | 128),
                    t[r++] = 63 & o | 128)
            }
            return t
        }
        ,
        goog.crypt.utf8ByteArrayToString = function (e) {
            for (var t = [], r = 0, n = 0; r < e.length;) {
                var o = e[r++];
                if (128 > o)
                    t[n++] = String.fromCharCode(o);
                else if (191 < o && 224 > o) {
                    var i = e[r++];
                    t[n++] = String.fromCharCode((31 & o) << 6 | 63 & i)
                } else if (239 < o && 365 > o) {
                    i = e[r++];
                    var a = e[r++];
                    o = ((7 & o) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & e[r++]) - 65536,
                        t[n++] = String.fromCharCode(55296 + (o >> 10)),
                        t[n++] = String.fromCharCode(56320 + (1023 & o))
                } else
                    i = e[r++],
                        a = e[r++],
                        t[n++] = String.fromCharCode((15 & o) << 12 | (63 & i) << 6 | 63 & a)
            }
            return t.join("")
        }
        ,
        goog.crypt.xorByteArray = function (e, t) {
            goog.asserts.assert(e.length == t.length, "XOR array lengths must match");
            for (var r = [], n = 0; n < e.length; n++)
                r.push(e[n] ^ t[n]);
            return r
        }
        ,
        goog.dom.asserts = {},
        goog.dom.asserts.assertIsLocation = function (e) {
            if (goog.asserts.ENABLE_ASSERTS) {
                var t = goog.dom.asserts.getWindow_(e);
                t && (!e || !(e instanceof t.Location) && e instanceof t.Element) && goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(e))
            }
            return e
        }
        ,
        goog.dom.asserts.assertIsElementType_ = function (e, t) {
            if (goog.asserts.ENABLE_ASSERTS) {
                var r = goog.dom.asserts.getWindow_(e);
                r && void 0 !== r[t] && (e && (e instanceof r[t] || !(e instanceof r.Location || e instanceof r.Element)) || goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s", t, goog.dom.asserts.debugStringForType_(e)))
            }
            return e
        }
        ,
        goog.dom.asserts.assertIsHTMLAnchorElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLAnchorElement")
        }
        ,
        goog.dom.asserts.assertIsHTMLButtonElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLButtonElement")
        }
        ,
        goog.dom.asserts.assertIsHTMLLinkElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLLinkElement")
        }
        ,
        goog.dom.asserts.assertIsHTMLImageElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLImageElement")
        }
        ,
        goog.dom.asserts.assertIsHTMLAudioElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLAudioElement")
        }
        ,
        goog.dom.asserts.assertIsHTMLVideoElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLVideoElement")
        }
        ,
        goog.dom.asserts.assertIsHTMLInputElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLInputElement")
        }
        ,
        goog.dom.asserts.assertIsHTMLTextAreaElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLTextAreaElement")
        }
        ,
        goog.dom.asserts.assertIsHTMLCanvasElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLCanvasElement")
        }
        ,
        goog.dom.asserts.assertIsHTMLEmbedElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLEmbedElement")
        }
        ,
        goog.dom.asserts.assertIsHTMLFormElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLFormElement")
        }
        ,
        goog.dom.asserts.assertIsHTMLFrameElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLFrameElement")
        }
        ,
        goog.dom.asserts.assertIsHTMLIFrameElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLIFrameElement")
        }
        ,
        goog.dom.asserts.assertIsHTMLObjectElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLObjectElement")
        }
        ,
        goog.dom.asserts.assertIsHTMLScriptElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLScriptElement")
        }
        ,
        goog.dom.asserts.debugStringForType_ = function (e) {
            if (!goog.isObject(e))
                return void 0 === e ? "undefined" : null === e ? "null" : typeof e;
            try {
                return e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e)
            } catch (e) {
                return "<object could not be stringified>"
            }
        }
        ,
        goog.dom.asserts.getWindow_ = function (e) {
            try {
                var t = e && e.ownerDocument
                    , r = t && (t.defaultView || t.parentWindow);
                if ((r = r || goog.global).Element && r.Location)
                    return r
            } catch (e) { }
            return null
        }
        ,
        goog.functions = {},
        goog.functions.constant = function (e) {
            return function () {
                return e
            }
        }
        ,
        goog.functions.FALSE = function () {
            return !1
        }
        ,
        goog.functions.TRUE = function () {
            return !0
        }
        ,
        goog.functions.NULL = function () {
            return null
        }
        ,
        goog.functions.identity = function (e, t) {
            return e
        }
        ,
        goog.functions.error = function (e) {
            return function () {
                throw Error(e)
            }
        }
        ,
        goog.functions.fail = function (e) {
            return function () {
                throw e
            }
        }
        ,
        goog.functions.lock = function (e, t) {
            return t = t || 0,
                function () {
                    return e.apply(this, Array.prototype.slice.call(arguments, 0, t))
                }
        }
        ,
        goog.functions.nth = function (e) {
            return function () {
                return arguments[e]
            }
        }
        ,
        goog.functions.partialRight = function (e, t) {
            var r = Array.prototype.slice.call(arguments, 1);
            return function () {
                var t = Array.prototype.slice.call(arguments);
                return t.push.apply(t, r),
                    e.apply(this, t)
            }
        }
        ,
        goog.functions.withReturnValue = function (e, t) {
            return goog.functions.sequence(e, goog.functions.constant(t))
        }
        ,
        goog.functions.equalTo = function (e, t) {
            return function (r) {
                return t ? e == r : e === r
            }
        }
        ,
        goog.functions.compose = function (e, t) {
            var r = arguments
                , n = r.length;
            return function () {
                var e;
                n && (e = r[n - 1].apply(this, arguments));
                for (var t = n - 2; 0 <= t; t--)
                    e = r[t].call(this, e);
                return e
            }
        }
        ,
        goog.functions.sequence = function (e) {
            var t = arguments
                , r = t.length;
            return function () {
                for (var e, n = 0; n < r; n++)
                    e = t[n].apply(this, arguments);
                return e
            }
        }
        ,
        goog.functions.and = function (e) {
            var t = arguments
                , r = t.length;
            return function () {
                for (var e = 0; e < r; e++)
                    if (!t[e].apply(this, arguments))
                        return !1;
                return !0
            }
        }
        ,
        goog.functions.or = function (e) {
            var t = arguments
                , r = t.length;
            return function () {
                for (var e = 0; e < r; e++)
                    if (t[e].apply(this, arguments))
                        return !0;
                return !1
            }
        }
        ,
        goog.functions.not = function (e) {
            return function () {
                return !e.apply(this, arguments)
            }
        }
        ,
        goog.functions.create = function (e, t) {
            var r = function () { };
            return r.prototype = e.prototype,
                r = new r,
                e.apply(r, Array.prototype.slice.call(arguments, 1)),
                r
        }
        ,
        goog.functions.CACHE_RETURN_VALUE = !0,
        goog.functions.cacheReturnValue = function (e) {
            var t, r = !1;
            return function () {
                return goog.functions.CACHE_RETURN_VALUE ? (r || (t = e(),
                    r = !0),
                    t) : e()
            }
        }
        ,
        goog.functions.once = function (e) {
            var t = e;
            return function () {
                if (t) {
                    var e = t;
                    t = null,
                        e()
                }
            }
        }
        ,
        goog.functions.debounce = function (e, t, r) {
            var n = 0;
            return function (o) {
                goog.global.clearTimeout(n);
                var i = arguments;
                n = goog.global.setTimeout((function () {
                    e.apply(r, i)
                }
                ), t)
            }
        }
        ,
        goog.functions.throttle = function (e, t, r) {
            var n = 0
                , o = !1
                , i = []
                , a = function () {
                    n = 0,
                        o && (o = !1,
                            s())
                }
                , s = function () {
                    n = goog.global.setTimeout(a, t),
                        e.apply(r, i)
                };
            return function (e) {
                i = arguments,
                    n ? o = !0 : s()
            }
        }
        ,
        goog.functions.rateLimit = function (e, t, r) {
            var n = 0
                , o = function () {
                    n = 0
                };
            return function (i) {
                n || (n = goog.global.setTimeout(o, t),
                    e.apply(r, arguments))
            }
        }
        ,
        goog.dom.HtmlElement = function () { }
        ,
        goog.dom.TagName = function (e) {
            this.tagName_ = e
        }
        ,
        goog.dom.TagName.prototype.toString = function () {
            return this.tagName_
        }
        ,
        goog.dom.TagName.A = new goog.dom.TagName("A"),
        goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR"),
        goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM"),
        goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS"),
        goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET"),
        goog.dom.TagName.AREA = new goog.dom.TagName("AREA"),
        goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE"),
        goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE"),
        goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO"),
        goog.dom.TagName.B = new goog.dom.TagName("B"),
        goog.dom.TagName.BASE = new goog.dom.TagName("BASE"),
        goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT"),
        goog.dom.TagName.BDI = new goog.dom.TagName("BDI"),
        goog.dom.TagName.BDO = new goog.dom.TagName("BDO"),
        goog.dom.TagName.BIG = new goog.dom.TagName("BIG"),
        goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE"),
        goog.dom.TagName.BODY = new goog.dom.TagName("BODY"),
        goog.dom.TagName.BR = new goog.dom.TagName("BR"),
        goog.dom.TagName.BUTTON = new goog.dom.TagName("BUTTON"),
        goog.dom.TagName.CANVAS = new goog.dom.TagName("CANVAS"),
        goog.dom.TagName.CAPTION = new goog.dom.TagName("CAPTION"),
        goog.dom.TagName.CENTER = new goog.dom.TagName("CENTER"),
        goog.dom.TagName.CITE = new goog.dom.TagName("CITE"),
        goog.dom.TagName.CODE = new goog.dom.TagName("CODE"),
        goog.dom.TagName.COL = new goog.dom.TagName("COL"),
        goog.dom.TagName.COLGROUP = new goog.dom.TagName("COLGROUP"),
        goog.dom.TagName.COMMAND = new goog.dom.TagName("COMMAND"),
        goog.dom.TagName.DATA = new goog.dom.TagName("DATA"),
        goog.dom.TagName.DATALIST = new goog.dom.TagName("DATALIST"),
        goog.dom.TagName.DD = new goog.dom.TagName("DD"),
        goog.dom.TagName.DEL = new goog.dom.TagName("DEL"),
        goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS"),
        goog.dom.TagName.DFN = new goog.dom.TagName("DFN"),
        goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG"),
        goog.dom.TagName.DIR = new goog.dom.TagName("DIR"),
        goog.dom.TagName.DIV = new goog.dom.TagName("DIV"),
        goog.dom.TagName.DL = new goog.dom.TagName("DL"),
        goog.dom.TagName.DT = new goog.dom.TagName("DT"),
        goog.dom.TagName.EM = new goog.dom.TagName("EM"),
        goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED"),
        goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET"),
        goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION"),
        goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE"),
        goog.dom.TagName.FONT = new goog.dom.TagName("FONT"),
        goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER"),
        goog.dom.TagName.FORM = new goog.dom.TagName("FORM"),
        goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME"),
        goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET"),
        goog.dom.TagName.H1 = new goog.dom.TagName("H1"),
        goog.dom.TagName.H2 = new goog.dom.TagName("H2"),
        goog.dom.TagName.H3 = new goog.dom.TagName("H3"),
        goog.dom.TagName.H4 = new goog.dom.TagName("H4"),
        goog.dom.TagName.H5 = new goog.dom.TagName("H5"),
        goog.dom.TagName.H6 = new goog.dom.TagName("H6"),
        goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD"),
        goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER"),
        goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP"),
        goog.dom.TagName.HR = new goog.dom.TagName("HR"),
        goog.dom.TagName.HTML = new goog.dom.TagName("HTML"),
        goog.dom.TagName.I = new goog.dom.TagName("I"),
        goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME"),
        goog.dom.TagName.IMG = new goog.dom.TagName("IMG"),
        goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT"),
        goog.dom.TagName.INS = new goog.dom.TagName("INS"),
        goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX"),
        goog.dom.TagName.KBD = new goog.dom.TagName("KBD"),
        goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN"),
        goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL"),
        goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND"),
        goog.dom.TagName.LI = new goog.dom.TagName("LI"),
        goog.dom.TagName.LINK = new goog.dom.TagName("LINK"),
        goog.dom.TagName.MAIN = new goog.dom.TagName("MAIN"),
        goog.dom.TagName.MAP = new goog.dom.TagName("MAP"),
        goog.dom.TagName.MARK = new goog.dom.TagName("MARK"),
        goog.dom.TagName.MATH = new goog.dom.TagName("MATH"),
        goog.dom.TagName.MENU = new goog.dom.TagName("MENU"),
        goog.dom.TagName.MENUITEM = new goog.dom.TagName("MENUITEM"),
        goog.dom.TagName.META = new goog.dom.TagName("META"),
        goog.dom.TagName.METER = new goog.dom.TagName("METER"),
        goog.dom.TagName.NAV = new goog.dom.TagName("NAV"),
        goog.dom.TagName.NOFRAMES = new goog.dom.TagName("NOFRAMES"),
        goog.dom.TagName.NOSCRIPT = new goog.dom.TagName("NOSCRIPT"),
        goog.dom.TagName.OBJECT = new goog.dom.TagName("OBJECT"),
        goog.dom.TagName.OL = new goog.dom.TagName("OL"),
        goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP"),
        goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION"),
        goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT"),
        goog.dom.TagName.P = new goog.dom.TagName("P"),
        goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM"),
        goog.dom.TagName.PICTURE = new goog.dom.TagName("PICTURE"),
        goog.dom.TagName.PRE = new goog.dom.TagName("PRE"),
        goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS"),
        goog.dom.TagName.Q = new goog.dom.TagName("Q"),
        goog.dom.TagName.RP = new goog.dom.TagName("RP"),
        goog.dom.TagName.RT = new goog.dom.TagName("RT"),
        goog.dom.TagName.RTC = new goog.dom.TagName("RTC"),
        goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY"),
        goog.dom.TagName.S = new goog.dom.TagName("S"),
        goog.dom.TagName.SAMP = new goog.dom.TagName("SAMP"),
        goog.dom.TagName.SCRIPT = new goog.dom.TagName("SCRIPT"),
        goog.dom.TagName.SECTION = new goog.dom.TagName("SECTION"),
        goog.dom.TagName.SELECT = new goog.dom.TagName("SELECT"),
        goog.dom.TagName.SMALL = new goog.dom.TagName("SMALL"),
        goog.dom.TagName.SOURCE = new goog.dom.TagName("SOURCE"),
        goog.dom.TagName.SPAN = new goog.dom.TagName("SPAN"),
        goog.dom.TagName.STRIKE = new goog.dom.TagName("STRIKE"),
        goog.dom.TagName.STRONG = new goog.dom.TagName("STRONG"),
        goog.dom.TagName.STYLE = new goog.dom.TagName("STYLE"),
        goog.dom.TagName.SUB = new goog.dom.TagName("SUB"),
        goog.dom.TagName.SUMMARY = new goog.dom.TagName("SUMMARY"),
        goog.dom.TagName.SUP = new goog.dom.TagName("SUP"),
        goog.dom.TagName.SVG = new goog.dom.TagName("SVG"),
        goog.dom.TagName.TABLE = new goog.dom.TagName("TABLE"),
        goog.dom.TagName.TBODY = new goog.dom.TagName("TBODY"),
        goog.dom.TagName.TD = new goog.dom.TagName("TD"),
        goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE"),
        goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA"),
        goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT"),
        goog.dom.TagName.TH = new goog.dom.TagName("TH"),
        goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD"),
        goog.dom.TagName.TIME = new goog.dom.TagName("TIME"),
        goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE"),
        goog.dom.TagName.TR = new goog.dom.TagName("TR"),
        goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK"),
        goog.dom.TagName.TT = new goog.dom.TagName("TT"),
        goog.dom.TagName.U = new goog.dom.TagName("U"),
        goog.dom.TagName.UL = new goog.dom.TagName("UL"),
        goog.dom.TagName.VAR = new goog.dom.TagName("VAR"),
        goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO"),
        goog.dom.TagName.WBR = new goog.dom.TagName("WBR"),
        goog.dom.tags = {},
        goog.dom.tags.VOID_TAGS_ = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            command: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        },
        goog.dom.tags.isVoidTag = function (e) {
            return !0 === goog.dom.tags.VOID_TAGS_[e]
        }
        ,
        goog.html = {},
        goog.html.trustedtypes = {},
        goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html") : null,
        goog.string = {},
        goog.string.TypedString = function () { }
        ,
        goog.string.Const = function (e, t) {
            this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = e === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && t || "",
                this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_
        }
        ,
        goog.string.Const.prototype.implementsGoogStringTypedString = !0,
        goog.string.Const.prototype.getTypedStringValue = function () {
            return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_
        }
        ,
        goog.DEBUG && (goog.string.Const.prototype.toString = function () {
            return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}"
        }
        ),
        goog.string.Const.unwrap = function (e) {
            return e instanceof goog.string.Const && e.constructor === goog.string.Const && e.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_ ? e.stringConstValueWithSecurityContract__googStringSecurityPrivate_ : (goog.asserts.fail("expected object of type Const, got '" + e + "'"),
                "type_error:Const")
        }
        ,
        goog.string.Const.from = function (e) {
            return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, e)
        }
        ,
        goog.string.Const.TYPE_MARKER_ = {},
        goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {},
        goog.string.Const.EMPTY = goog.string.Const.from(""),
        goog.html.SafeScript = function () {
            this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "",
                this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        }
        ,
        goog.html.SafeScript.prototype.implementsGoogStringTypedString = !0,
        goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},
        goog.html.SafeScript.fromConstant = function (e) {
            return 0 === (e = goog.string.Const.unwrap(e)).length ? goog.html.SafeScript.EMPTY : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(e)
        }
        ,
        goog.html.SafeScript.fromConstantAndArgs = function (e, t) {
            for (var r = [], n = 1; n < arguments.length; n++)
                r.push(goog.html.SafeScript.stringify_(arguments[n]));
            return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("(" + goog.string.Const.unwrap(e) + ")(" + r.join(", ") + ");")
        }
        ,
        goog.html.SafeScript.fromJson = function (e) {
            return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(e))
        }
        ,
        goog.html.SafeScript.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString()
        }
        ,
        goog.DEBUG && (goog.html.SafeScript.prototype.toString = function () {
            return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}"
        }
        ),
        goog.html.SafeScript.unwrap = function (e) {
            return goog.html.SafeScript.unwrapTrustedScript(e).toString()
        }
        ,
        goog.html.SafeScript.unwrapTrustedScript = function (e) {
            return e instanceof goog.html.SafeScript && e.constructor === goog.html.SafeScript && e.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeScriptWrappedValue_ : (goog.asserts.fail("expected object of type SafeScript, got '" + e + "' of type " + goog.typeOf(e)),
                "type_error:SafeScript")
        }
        ,
        goog.html.SafeScript.stringify_ = function (e) {
            return JSON.stringify(e).replace(/</g, "\\x3c")
        }
        ,
        goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function (e) {
            return (new goog.html.SafeScript).initSecurityPrivateDoNotAccessOrElse_(e)
        }
        ,
        goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (e) {
            return this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(e) : e,
                this
        }
        ,
        goog.html.SafeScript.EMPTY = goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(""),
        goog.fs = {},
        goog.fs.url = {},
        goog.fs.url.createObjectUrl = function (e) {
            return goog.fs.url.getUrlObject_().createObjectURL(e)
        }
        ,
        goog.fs.url.revokeObjectUrl = function (e) {
            goog.fs.url.getUrlObject_().revokeObjectURL(e)
        }
        ,
        goog.fs.url.UrlObject_ = function () { }
        ,
        goog.fs.url.UrlObject_.prototype.createObjectURL = function (e) { }
        ,
        goog.fs.url.UrlObject_.prototype.revokeObjectURL = function (e) { }
        ,
        goog.fs.url.getUrlObject_ = function () {
            var e = goog.fs.url.findUrlObject_();
            if (null != e)
                return e;
            throw Error("This browser doesn't seem to support blob URLs")
        }
        ,
        goog.fs.url.findUrlObject_ = function () {
            return void 0 !== goog.global.URL && void 0 !== goog.global.URL.createObjectURL ? goog.global.URL : void 0 !== goog.global.webkitURL && void 0 !== goog.global.webkitURL.createObjectURL ? goog.global.webkitURL : void 0 !== goog.global.createObjectURL ? goog.global : null
        }
        ,
        goog.fs.url.browserSupportsObjectUrls = function () {
            return null != goog.fs.url.findUrlObject_()
        }
        ,
        goog.fs.blob = {},
        goog.fs.blob.getBlob = function (e) {
            var t = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
            if (void 0 !== t) {
                t = new t;
                for (var r = 0; r < arguments.length; r++)
                    t.append(arguments[r]);
                return t.getBlob()
            }
            return goog.fs.blob.getBlobWithProperties(goog.array.toArray(arguments))
        }
        ,
        goog.fs.blob.getBlobWithProperties = function (e, t, r) {
            var n = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
            if (void 0 !== n) {
                n = new n;
                for (var o = 0; o < e.length; o++)
                    n.append(e[o], r);
                return n.getBlob(t)
            }
            if (void 0 !== goog.global.Blob)
                return n = {},
                    t && (n.type = t),
                    r && (n.endings = r),
                    new Blob(e, n);
            throw Error("This browser doesn't seem to support creating Blobs")
        }
        ,
        goog.i18n = {},
        goog.i18n.bidi = {},
        goog.i18n.bidi.FORCE_RTL = !1,
        goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || ("ar" == goog.LOCALE.substring(0, 2).toLowerCase() || "fa" == goog.LOCALE.substring(0, 2).toLowerCase() || "he" == goog.LOCALE.substring(0, 2).toLowerCase() || "iw" == goog.LOCALE.substring(0, 2).toLowerCase() || "ps" == goog.LOCALE.substring(0, 2).toLowerCase() || "sd" == goog.LOCALE.substring(0, 2).toLowerCase() || "ug" == goog.LOCALE.substring(0, 2).toLowerCase() || "ur" == goog.LOCALE.substring(0, 2).toLowerCase() || "yi" == goog.LOCALE.substring(0, 2).toLowerCase()) && (2 == goog.LOCALE.length || "-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) || 3 <= goog.LOCALE.length && "ckb" == goog.LOCALE.substring(0, 3).toLowerCase() && (3 == goog.LOCALE.length || "-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) || 7 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) && ("adlm" == goog.LOCALE.substring(3, 7).toLowerCase() || "arab" == goog.LOCALE.substring(3, 7).toLowerCase() || "hebr" == goog.LOCALE.substring(3, 7).toLowerCase() || "nkoo" == goog.LOCALE.substring(3, 7).toLowerCase() || "rohg" == goog.LOCALE.substring(3, 7).toLowerCase() || "thaa" == goog.LOCALE.substring(3, 7).toLowerCase()) || 8 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) && ("adlm" == goog.LOCALE.substring(4, 8).toLowerCase() || "arab" == goog.LOCALE.substring(4, 8).toLowerCase() || "hebr" == goog.LOCALE.substring(4, 8).toLowerCase() || "nkoo" == goog.LOCALE.substring(4, 8).toLowerCase() || "rohg" == goog.LOCALE.substring(4, 8).toLowerCase() || "thaa" == goog.LOCALE.substring(4, 8).toLowerCase()),
        goog.i18n.bidi.Format = {
            LRE: "‪",
            RLE: "‫",
            PDF: "‬",
            LRM: "‎",
            RLM: "‏"
        },
        goog.i18n.bidi.Dir = {
            LTR: 1,
            RTL: -1,
            NEUTRAL: 0
        },
        goog.i18n.bidi.RIGHT = "right",
        goog.i18n.bidi.LEFT = "left",
        goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT,
        goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT,
        goog.i18n.bidi.toDir = function (e, t) {
            return "number" == typeof e ? 0 < e ? goog.i18n.bidi.Dir.LTR : 0 > e ? goog.i18n.bidi.Dir.RTL : t ? null : goog.i18n.bidi.Dir.NEUTRAL : null == e ? null : e ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR
        }
        ,
        goog.i18n.bidi.ltrChars_ = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ऀ-῿‎Ⰰ-\ud801\ud804-\ud839\ud83c-\udbff豈-﬜︀-﹯﻽-￿",
        goog.i18n.bidi.rtlChars_ = "֑-ۯۺ-ࣿ‏\ud802-\ud803\ud83a-\ud83bיִ-﷿ﹰ-ﻼ",
        goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g,
        goog.i18n.bidi.stripHtmlIfNeeded_ = function (e, t) {
            return t ? e.replace(goog.i18n.bidi.htmlSkipReg_, "") : e
        }
        ,
        goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]"),
        goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]"),
        goog.i18n.bidi.hasAnyRtl = function (e, t) {
            return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
        }
        ,
        goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl,
        goog.i18n.bidi.hasAnyLtr = function (e, t) {
            return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
        }
        ,
        goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]"),
        goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]"),
        goog.i18n.bidi.isRtlChar = function (e) {
            return goog.i18n.bidi.rtlRe_.test(e)
        }
        ,
        goog.i18n.bidi.isLtrChar = function (e) {
            return goog.i18n.bidi.ltrRe_.test(e)
        }
        ,
        goog.i18n.bidi.isNeutralChar = function (e) {
            return !goog.i18n.bidi.isLtrChar(e) && !goog.i18n.bidi.isRtlChar(e)
        }
        ,
        goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]"),
        goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]"),
        goog.i18n.bidi.startsWithRtl = function (e, t) {
            return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
        }
        ,
        goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl,
        goog.i18n.bidi.startsWithLtr = function (e, t) {
            return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
        }
        ,
        goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr,
        goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/,
        goog.i18n.bidi.isNeutralText = function (e, t) {
            return e = goog.i18n.bidi.stripHtmlIfNeeded_(e, t),
                goog.i18n.bidi.isRequiredLtrRe_.test(e) || !goog.i18n.bidi.hasAnyLtr(e) && !goog.i18n.bidi.hasAnyRtl(e)
        }
        ,
        goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$"),
        goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$"),
        goog.i18n.bidi.endsWithLtr = function (e, t) {
            return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
        }
        ,
        goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr,
        goog.i18n.bidi.endsWithRtl = function (e, t) {
            return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
        }
        ,
        goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl,
        goog.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i,
        goog.i18n.bidi.isRtlLanguage = function (e) {
            return goog.i18n.bidi.rtlLocalesRe_.test(e)
        }
        ,
        goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g,
        goog.i18n.bidi.guardBracketInText = function (e, t) {
            return t = (void 0 === t ? goog.i18n.bidi.hasAnyRtl(e) : t) ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM,
                e.replace(goog.i18n.bidi.bracketGuardTextRe_, t + "$&" + t)
        }
        ,
        goog.i18n.bidi.enforceRtlInHtml = function (e) {
            return "<" == e.charAt(0) ? e.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + e + "</span>"
        }
        ,
        goog.i18n.bidi.enforceRtlInText = function (e) {
            return goog.i18n.bidi.Format.RLE + e + goog.i18n.bidi.Format.PDF
        }
        ,
        goog.i18n.bidi.enforceLtrInHtml = function (e) {
            return "<" == e.charAt(0) ? e.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + e + "</span>"
        }
        ,
        goog.i18n.bidi.enforceLtrInText = function (e) {
            return goog.i18n.bidi.Format.LRE + e + goog.i18n.bidi.Format.PDF
        }
        ,
        goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g,
        goog.i18n.bidi.leftRe_ = /left/gi,
        goog.i18n.bidi.rightRe_ = /right/gi,
        goog.i18n.bidi.tempRe_ = /%%%%/g,
        goog.i18n.bidi.mirrorCSS = function (e) {
            return e.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT)
        }
        ,
        goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g,
        goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g,
        goog.i18n.bidi.normalizeHebrewQuote = function (e) {
            return e.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1״").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1׳")
        }
        ,
        goog.i18n.bidi.wordSeparatorRe_ = /\s+/,
        goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/,
        goog.i18n.bidi.rtlDetectionThreshold_ = .4,
        goog.i18n.bidi.estimateDirection = function (e, t) {
            var r = 0
                , n = 0
                , o = !1;
            for (e = goog.i18n.bidi.stripHtmlIfNeeded_(e, t).split(goog.i18n.bidi.wordSeparatorRe_),
                t = 0; t < e.length; t++) {
                var i = e[t];
                goog.i18n.bidi.startsWithRtl(i) ? (r++,
                    n++) : goog.i18n.bidi.isRequiredLtrRe_.test(i) ? o = !0 : goog.i18n.bidi.hasAnyLtr(i) ? n++ : goog.i18n.bidi.hasNumeralsRe_.test(i) && (o = !0)
            }
            return 0 == n ? o ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : r / n > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR
        }
        ,
        goog.i18n.bidi.detectRtlDirectionality = function (e, t) {
            return goog.i18n.bidi.estimateDirection(e, t) == goog.i18n.bidi.Dir.RTL
        }
        ,
        goog.i18n.bidi.setElementDirAndAlign = function (e, t) {
            e && (t = goog.i18n.bidi.toDir(t)) && (e.style.textAlign = t == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT,
                e.dir = t == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr")
        }
        ,
        goog.i18n.bidi.setElementDirByTextDirectionality = function (e, t) {
            switch (goog.i18n.bidi.estimateDirection(t)) {
                case goog.i18n.bidi.Dir.LTR:
                    e.dir = "ltr";
                    break;
                case goog.i18n.bidi.Dir.RTL:
                    e.dir = "rtl";
                    break;
                default:
                    e.removeAttribute("dir")
            }
        }
        ,
        goog.i18n.bidi.DirectionalString = function () { }
        ,
        goog.html.TrustedResourceUrl = function (e, t) {
            this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = e === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && t || "",
                this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        }
        ,
        goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = !0,
        goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString()
        }
        ,
        goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = !0,
        goog.html.TrustedResourceUrl.prototype.getDirection = function () {
            return goog.i18n.bidi.Dir.LTR
        }
        ,
        goog.html.TrustedResourceUrl.prototype.cloneWithParams = function (e, t) {
            var r = goog.html.TrustedResourceUrl.unwrap(this)
                , n = (r = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(r))[3] || "";
            return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(r[1] + goog.html.TrustedResourceUrl.stringifyParams_("?", r[2] || "", e) + goog.html.TrustedResourceUrl.stringifyParams_("#", n, t))
        }
        ,
        goog.DEBUG && (goog.html.TrustedResourceUrl.prototype.toString = function () {
            return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}"
        }
        ),
        goog.html.TrustedResourceUrl.unwrap = function (e) {
            return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(e).toString()
        }
        ,
        goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function (e) {
            return e instanceof goog.html.TrustedResourceUrl && e.constructor === goog.html.TrustedResourceUrl && e.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ : (goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + e + "' of type " + goog.typeOf(e)),
                "type_error:TrustedResourceUrl")
        }
        ,
        goog.html.TrustedResourceUrl.format = function (e, t) {
            var r = goog.string.Const.unwrap(e);
            if (!goog.html.TrustedResourceUrl.BASE_URL_.test(r))
                throw Error("Invalid TrustedResourceUrl format: " + r);
            return e = r.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, (function (e, n) {
                if (!Object.prototype.hasOwnProperty.call(t, n))
                    throw Error('Found marker, "' + n + '", in format string, "' + r + '", but no valid label mapping found in args: ' + JSON.stringify(t));
                return (e = t[n]) instanceof goog.string.Const ? goog.string.Const.unwrap(e) : encodeURIComponent(String(e))
            }
            )),
                goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(e)
        }
        ,
        goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g,
        goog.html.TrustedResourceUrl.BASE_URL_ = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        goog.html.TrustedResourceUrl.formatWithParams = function (e, t, r, n) {
            return goog.html.TrustedResourceUrl.format(e, t).cloneWithParams(r, n)
        }
        ,
        goog.html.TrustedResourceUrl.fromConstant = function (e) {
            return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(e))
        }
        ,
        goog.html.TrustedResourceUrl.fromConstants = function (e) {
            for (var t = "", r = 0; r < e.length; r++)
                t += goog.string.Const.unwrap(e[r]);
            return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(t)
        }
        ,
        goog.html.TrustedResourceUrl.fromSafeScript = function (e) {
            return e = goog.fs.blob.getBlobWithProperties([goog.html.SafeScript.unwrap(e)], "text/javascript"),
                e = goog.fs.url.createObjectUrl(e),
                goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(e)
        }
        ,
        goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},
        goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function (e) {
            return e = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(e) : e,
                new goog.html.TrustedResourceUrl(goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_, e)
        }
        ,
        goog.html.TrustedResourceUrl.stringifyParams_ = function (e, t, r) {
            if (null == r)
                return t;
            if ("string" == typeof r)
                return r ? e + encodeURIComponent(r) : "";
            for (var n in r) {
                var o = r[n];
                o = Array.isArray(o) ? o : [o];
                for (var i = 0; i < o.length; i++) {
                    var a = o[i];
                    null != a && (t || (t = e),
                        t += (t.length > e.length ? "&" : "") + encodeURIComponent(n) + "=" + encodeURIComponent(String(a)))
                }
            }
            return t
        }
        ,
        goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {},
        goog.string.internal = {},
        goog.string.internal.startsWith = function (e, t) {
            return 0 == e.lastIndexOf(t, 0)
        }
        ,
        goog.string.internal.endsWith = function (e, t) {
            var r = e.length - t.length;
            return 0 <= r && e.indexOf(t, r) == r
        }
        ,
        goog.string.internal.caseInsensitiveStartsWith = function (e, t) {
            return 0 == goog.string.internal.caseInsensitiveCompare(t, e.substr(0, t.length))
        }
        ,
        goog.string.internal.caseInsensitiveEndsWith = function (e, t) {
            return 0 == goog.string.internal.caseInsensitiveCompare(t, e.substr(e.length - t.length, t.length))
        }
        ,
        goog.string.internal.caseInsensitiveEquals = function (e, t) {
            return e.toLowerCase() == t.toLowerCase()
        }
        ,
        goog.string.internal.isEmptyOrWhitespace = function (e) {
            return /^[\s\xa0]*$/.test(e)
        }
        ,
        goog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function (e) {
            return e.trim()
        }
            : function (e) {
                return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]
            }
        ,
        goog.string.internal.caseInsensitiveCompare = function (e, t) {
            return (e = String(e).toLowerCase()) < (t = String(t).toLowerCase()) ? -1 : e == t ? 0 : 1
        }
        ,
        goog.string.internal.newLineToBr = function (e, t) {
            return e.replace(/(\r\n|\r|\n)/g, t ? "<br />" : "<br>")
        }
        ,
        goog.string.internal.htmlEscape = function (e, t) {
            if (t)
                e = e.replace(goog.string.internal.AMP_RE_, "&amp;").replace(goog.string.internal.LT_RE_, "&lt;").replace(goog.string.internal.GT_RE_, "&gt;").replace(goog.string.internal.QUOT_RE_, "&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.internal.NULL_RE_, "&#0;");
            else {
                if (!goog.string.internal.ALL_RE_.test(e))
                    return e;
                -1 != e.indexOf("&") && (e = e.replace(goog.string.internal.AMP_RE_, "&amp;")),
                    -1 != e.indexOf("<") && (e = e.replace(goog.string.internal.LT_RE_, "&lt;")),
                    -1 != e.indexOf(">") && (e = e.replace(goog.string.internal.GT_RE_, "&gt;")),
                    -1 != e.indexOf('"') && (e = e.replace(goog.string.internal.QUOT_RE_, "&quot;")),
                    -1 != e.indexOf("'") && (e = e.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;")),
                    -1 != e.indexOf("\0") && (e = e.replace(goog.string.internal.NULL_RE_, "&#0;"))
            }
            return e
        }
        ,
        goog.string.internal.AMP_RE_ = /&/g,
        goog.string.internal.LT_RE_ = /</g,
        goog.string.internal.GT_RE_ = />/g,
        goog.string.internal.QUOT_RE_ = /"/g,
        goog.string.internal.SINGLE_QUOTE_RE_ = /'/g,
        goog.string.internal.NULL_RE_ = /\x00/g,
        goog.string.internal.ALL_RE_ = /[\x00&<>"']/,
        goog.string.internal.whitespaceEscape = function (e, t) {
            return goog.string.internal.newLineToBr(e.replace(/  /g, " &#160;"), t)
        }
        ,
        goog.string.internal.contains = function (e, t) {
            return -1 != e.indexOf(t)
        }
        ,
        goog.string.internal.caseInsensitiveContains = function (e, t) {
            return goog.string.internal.contains(e.toLowerCase(), t.toLowerCase())
        }
        ,
        goog.string.internal.compareVersions = function (e, t) {
            var r = 0;
            e = goog.string.internal.trim(String(e)).split("."),
                t = goog.string.internal.trim(String(t)).split(".");
            for (var n = Math.max(e.length, t.length), o = 0; 0 == r && o < n; o++) {
                var i = e[o] || ""
                    , a = t[o] || "";
                do {
                    if (i = /(\d*)(\D*)(.*)/.exec(i) || ["", "", "", ""],
                        a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""],
                        0 == i[0].length && 0 == a[0].length)
                        break;
                    r = 0 == i[1].length ? 0 : parseInt(i[1], 10);
                    var s = 0 == a[1].length ? 0 : parseInt(a[1], 10);
                    r = goog.string.internal.compareElements_(r, s) || goog.string.internal.compareElements_(0 == i[2].length, 0 == a[2].length) || goog.string.internal.compareElements_(i[2], a[2]),
                        i = i[3],
                        a = a[3]
                } while (0 == r)
            }
            return r
        }
        ,
        goog.string.internal.compareElements_ = function (e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        }
        ,
        goog.html.SafeUrl = function (e, t) {
            this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = e === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && t || "",
                this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        }
        ,
        goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez",
        goog.html.SafeUrl.prototype.implementsGoogStringTypedString = !0,
        goog.html.SafeUrl.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString()
        }
        ,
        goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = !0,
        goog.html.SafeUrl.prototype.getDirection = function () {
            return goog.i18n.bidi.Dir.LTR
        }
        ,
        goog.DEBUG && (goog.html.SafeUrl.prototype.toString = function () {
            return "SafeUrl{" + this.privateDoNotAccessOrElseSafeUrlWrappedValue_ + "}"
        }
        ),
        goog.html.SafeUrl.unwrap = function (e) {
            return e instanceof goog.html.SafeUrl && e.constructor === goog.html.SafeUrl && e.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeUrlWrappedValue_ : (goog.asserts.fail("expected object of type SafeUrl, got '" + e + "' of type " + goog.typeOf(e)),
                "type_error:SafeUrl")
        }
        ,
        goog.html.SafeUrl.fromConstant = function (e) {
            return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(e))
        }
        ,
        goog.html.SAFE_MIME_TYPE_PATTERN_ = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
        goog.html.SafeUrl.isSafeMimeType = function (e) {
            return goog.html.SAFE_MIME_TYPE_PATTERN_.test(e)
        }
        ,
        goog.html.SafeUrl.fromBlob = function (e) {
            return e = goog.html.SafeUrl.isSafeMimeType(e.type) ? goog.fs.url.createObjectUrl(e) : goog.html.SafeUrl.INNOCUOUS_STRING,
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        }
        ,
        goog.html.SafeUrl.fromMediaSource = function (e) {
            return goog.asserts.assert("MediaSource" in goog.global, "No support for MediaSource"),
                e = e instanceof MediaSource ? goog.fs.url.createObjectUrl(e) : goog.html.SafeUrl.INNOCUOUS_STRING,
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        }
        ,
        goog.html.DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        goog.html.SafeUrl.fromDataUrl = function (e) {
            var t = (e = e.replace(/(%0A|%0D)/g, "")).match(goog.html.DATA_URL_PATTERN_);
            return t = t && goog.html.SafeUrl.isSafeMimeType(t[1]),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t ? e : goog.html.SafeUrl.INNOCUOUS_STRING)
        }
        ,
        goog.html.SafeUrl.fromTelUrl = function (e) {
            return goog.string.internal.caseInsensitiveStartsWith(e, "tel:") || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        }
        ,
        goog.html.SIP_URL_PATTERN_ = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i,
        goog.html.SafeUrl.fromSipUrl = function (e) {
            return goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(e)) || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        }
        ,
        goog.html.SafeUrl.fromFacebookMessengerUrl = function (e) {
            return goog.string.internal.caseInsensitiveStartsWith(e, "fb-messenger://share") || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        }
        ,
        goog.html.SafeUrl.fromWhatsAppUrl = function (e) {
            return goog.string.internal.caseInsensitiveStartsWith(e, "whatsapp://send") || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        }
        ,
        goog.html.SafeUrl.fromSmsUrl = function (e) {
            return goog.string.internal.caseInsensitiveStartsWith(e, "sms:") && goog.html.SafeUrl.isSmsUrlBodyValid_(e) || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        }
        ,
        goog.html.SafeUrl.isSmsUrlBodyValid_ = function (e) {
            var t = e.indexOf("#");
            if (0 < t && (e = e.substring(0, t)),
                !(t = e.match(/[?&]body=/gi)))
                return !0;
            if (1 < t.length)
                return !1;
            if (!(e = e.match(/[?&]body=([^&]*)/)[1]))
                return !0;
            try {
                decodeURIComponent(e)
            } catch (e) {
                return !1
            }
            return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(e)
        }
        ,
        goog.html.SafeUrl.fromSshUrl = function (e) {
            return goog.string.internal.caseInsensitiveStartsWith(e, "ssh://") || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        }
        ,
        goog.html.SafeUrl.sanitizeChromeExtensionUrl = function (e, t) {
            return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, e, t)
        }
        ,
        goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function (e, t) {
            return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, e, t)
        }
        ,
        goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function (e, t) {
            return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, e, t)
        }
        ,
        goog.html.SafeUrl.sanitizeExtensionUrl_ = function (e, t, r) {
            return (e = e.exec(t)) ? (e = e[1],
                -1 == (r instanceof goog.string.Const ? [goog.string.Const.unwrap(r)] : r.map((function (e) {
                    return goog.string.Const.unwrap(e)
                }
                ))).indexOf(e) && (t = goog.html.SafeUrl.INNOCUOUS_STRING)) : t = goog.html.SafeUrl.INNOCUOUS_STRING,
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
        }
        ,
        goog.html.SafeUrl.fromTrustedResourceUrl = function (e) {
            return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(e))
        }
        ,
        goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_,
        goog.html.SafeUrl.sanitize = function (e) {
            return e instanceof goog.html.SafeUrl ? e : (e = "object" == typeof e && e.implementsGoogStringTypedString ? e.getTypedStringValue() : String(e),
                goog.html.SAFE_URL_PATTERN_.test(e) || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e))
        }
        ,
        goog.html.SafeUrl.sanitizeAssertUnchanged = function (e, t) {
            return e instanceof goog.html.SafeUrl ? e : (e = "object" == typeof e && e.implementsGoogStringTypedString ? e.getTypedStringValue() : String(e),
                t && /^data:/i.test(e) && (t = goog.html.SafeUrl.fromDataUrl(e)).getTypedStringValue() == e ? t : (goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(e), "%s does not match the safe URL pattern", e) || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
                    goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)))
        }
        ,
        goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function (e) {
            return new goog.html.SafeUrl(goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_, e)
        }
        ,
        goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank"),
        goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {},
        goog.html.SafeStyle = function () {
            this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "",
                this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        }
        ,
        goog.html.SafeStyle.prototype.implementsGoogStringTypedString = !0,
        goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},
        goog.html.SafeStyle.fromConstant = function (e) {
            return 0 === (e = goog.string.Const.unwrap(e)).length ? goog.html.SafeStyle.EMPTY : (goog.asserts.assert(goog.string.internal.endsWith(e, ";"), "Last character of style string is not ';': " + e),
                goog.asserts.assert(goog.string.internal.contains(e, ":"), "Style string must contain at least one ':', to specify a \"name: value\" pair: " + e),
                goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(e))
        }
        ,
        goog.html.SafeStyle.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseSafeStyleWrappedValue_
        }
        ,
        goog.DEBUG && (goog.html.SafeStyle.prototype.toString = function () {
            return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}"
        }
        ),
        goog.html.SafeStyle.unwrap = function (e) {
            return e instanceof goog.html.SafeStyle && e.constructor === goog.html.SafeStyle && e.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeStyleWrappedValue_ : (goog.asserts.fail("expected object of type SafeStyle, got '" + e + "' of type " + goog.typeOf(e)),
                "type_error:SafeStyle")
        }
        ,
        goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function (e) {
            return (new goog.html.SafeStyle).initSecurityPrivateDoNotAccessOrElse_(e)
        }
        ,
        goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (e) {
            return this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = e,
                this
        }
        ,
        goog.html.SafeStyle.EMPTY = goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(""),
        goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez",
        goog.html.SafeStyle.create = function (e) {
            var t, r = "";
            for (t in e) {
                if (!/^[-_a-zA-Z0-9]+$/.test(t))
                    throw Error("Name allows only [-_a-zA-Z0-9], got: " + t);
                var n = e[t];
                null != n && (r += t + ":" + (n = Array.isArray(n) ? goog.array.map(n, goog.html.SafeStyle.sanitizePropertyValue_).join(" ") : goog.html.SafeStyle.sanitizePropertyValue_(n)) + ";")
            }
            return r ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(r) : goog.html.SafeStyle.EMPTY
        }
        ,
        goog.html.SafeStyle.sanitizePropertyValue_ = function (e) {
            if (e instanceof goog.html.SafeUrl)
                return 'url("' + goog.html.SafeUrl.unwrap(e).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
            if (e = e instanceof goog.string.Const ? goog.string.Const.unwrap(e) : goog.html.SafeStyle.sanitizePropertyValueString_(String(e)),
                /[{;}]/.test(e))
                throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.", [e]);
            return e
        }
        ,
        goog.html.SafeStyle.sanitizePropertyValueString_ = function (e) {
            var t = e.replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.URL_RE_, "url");
            return goog.html.SafeStyle.VALUE_RE_.test(t) ? goog.html.SafeStyle.COMMENT_RE_.test(e) ? (goog.asserts.fail("String value disallows comments, got: " + e),
                goog.html.SafeStyle.INNOCUOUS_STRING) : goog.html.SafeStyle.hasBalancedQuotes_(e) ? goog.html.SafeStyle.hasBalancedSquareBrackets_(e) ? goog.html.SafeStyle.sanitizeUrl_(e) : (goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: " + e),
                    goog.html.SafeStyle.INNOCUOUS_STRING) : (goog.asserts.fail("String value requires balanced quotes, got: " + e),
                        goog.html.SafeStyle.INNOCUOUS_STRING) : (goog.asserts.fail("String value allows only " + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + " and simple functions, got: " + e),
                            goog.html.SafeStyle.INNOCUOUS_STRING)
        }
        ,
        goog.html.SafeStyle.hasBalancedQuotes_ = function (e) {
            for (var t = !0, r = !0, n = 0; n < e.length; n++) {
                var o = e.charAt(n);
                "'" == o && r ? t = !t : '"' == o && t && (r = !r)
            }
            return t && r
        }
        ,
        goog.html.SafeStyle.hasBalancedSquareBrackets_ = function (e) {
            for (var t = !0, r = /^[-_a-zA-Z0-9]$/, n = 0; n < e.length; n++) {
                var o = e.charAt(n);
                if ("]" == o) {
                    if (t)
                        return !1;
                    t = !0
                } else if ("[" == o) {
                    if (!t)
                        return !1;
                    t = !1
                } else if (!t && !r.test(o))
                    return !1
            }
            return t
        }
        ,
        goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ = "[-,.\"'%_!# a-zA-Z0-9\\[\\]]",
        goog.html.SafeStyle.VALUE_RE_ = new RegExp("^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$"),
        goog.html.SafeStyle.URL_RE_ = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        goog.html.SafeStyle.ALLOWED_FUNCTIONS_ = "calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?".split(" "),
        goog.html.SafeStyle.FUNCTIONS_RE_ = new RegExp("\\b(" + goog.html.SafeStyle.ALLOWED_FUNCTIONS_.join("|") + ")\\([-+*/0-9a-z.%\\[\\], ]+\\)", "g"),
        goog.html.SafeStyle.COMMENT_RE_ = /\/\*/,
        goog.html.SafeStyle.sanitizeUrl_ = function (e) {
            return e.replace(goog.html.SafeStyle.URL_RE_, (function (e, t, r, n) {
                var o = "";
                return r = r.replace(/^(['"])(.*)\1$/, (function (e, t, r) {
                    return o = t,
                        r
                }
                )),
                    e = goog.html.SafeUrl.sanitize(r).getTypedStringValue(),
                    t + o + e + o + n
            }
            ))
        }
        ,
        goog.html.SafeStyle.concat = function (e) {
            var t = ""
                , r = function (e) {
                    Array.isArray(e) ? goog.array.forEach(e, r) : t += goog.html.SafeStyle.unwrap(e)
                };
            return goog.array.forEach(arguments, r),
                t ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(t) : goog.html.SafeStyle.EMPTY
        }
        ,
        goog.html.SafeStyleSheet = function () {
            this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "",
                this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        }
        ,
        goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = !0,
        goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},
        goog.html.SafeStyleSheet.createRule = function (e, t) {
            if (goog.string.internal.contains(e, "<"))
                throw Error("Selector does not allow '<', got: " + e);
            var r = e.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
            if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(r))
                throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + e);
            if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(r))
                throw Error("() and [] in selector must be balanced, got: " + e);
            return t instanceof goog.html.SafeStyle || (t = goog.html.SafeStyle.create(t)),
                e = e + "{" + goog.html.SafeStyle.unwrap(t).replace(/</g, "\\3C ") + "}",
                goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(e)
        }
        ,
        goog.html.SafeStyleSheet.hasBalancedBrackets_ = function (e) {
            for (var t = {
                "(": ")",
                "[": "]"
            }, r = [], n = 0; n < e.length; n++) {
                var o = e[n];
                if (t[o])
                    r.push(t[o]);
                else if (goog.object.contains(t, o) && r.pop() != o)
                    return !1
            }
            return 0 == r.length
        }
        ,
        goog.html.SafeStyleSheet.concat = function (e) {
            var t = ""
                , r = function (e) {
                    Array.isArray(e) ? goog.array.forEach(e, r) : t += goog.html.SafeStyleSheet.unwrap(e)
                };
            return goog.array.forEach(arguments, r),
                goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(t)
        }
        ,
        goog.html.SafeStyleSheet.fromConstant = function (e) {
            return 0 === (e = goog.string.Const.unwrap(e)).length ? goog.html.SafeStyleSheet.EMPTY : (goog.asserts.assert(!goog.string.internal.contains(e, "<"), "Forbidden '<' character in style sheet string: " + e),
                goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(e))
        }
        ,
        goog.html.SafeStyleSheet.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_
        }
        ,
        goog.DEBUG && (goog.html.SafeStyleSheet.prototype.toString = function () {
            return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}"
        }
        ),
        goog.html.SafeStyleSheet.unwrap = function (e) {
            return e instanceof goog.html.SafeStyleSheet && e.constructor === goog.html.SafeStyleSheet && e.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ : (goog.asserts.fail("expected object of type SafeStyleSheet, got '" + e + "' of type " + goog.typeOf(e)),
                "type_error:SafeStyleSheet")
        }
        ,
        goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function (e) {
            return (new goog.html.SafeStyleSheet).initSecurityPrivateDoNotAccessOrElse_(e)
        }
        ,
        goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (e) {
            return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = e,
                this
        }
        ,
        goog.html.SafeStyleSheet.EMPTY = goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(""),
        goog.labs = {},
        goog.labs.userAgent = {},
        goog.labs.userAgent.util = {},
        goog.labs.userAgent.util.getNativeUserAgentString_ = function () {
            var e = goog.labs.userAgent.util.getNavigator_();
            return e && (e = e.userAgent) ? e : ""
        }
        ,
        goog.labs.userAgent.util.getNavigator_ = function () {
            return goog.global.navigator
        }
        ,
        goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_(),
        goog.labs.userAgent.util.setUserAgent = function (e) {
            goog.labs.userAgent.util.userAgent_ = e || goog.labs.userAgent.util.getNativeUserAgentString_()
        }
        ,
        goog.labs.userAgent.util.getUserAgent = function () {
            return goog.labs.userAgent.util.userAgent_
        }
        ,
        goog.labs.userAgent.util.matchUserAgent = function (e) {
            var t = goog.labs.userAgent.util.getUserAgent();
            return goog.string.internal.contains(t, e)
        }
        ,
        goog.labs.userAgent.util.matchUserAgentIgnoreCase = function (e) {
            var t = goog.labs.userAgent.util.getUserAgent();
            return goog.string.internal.caseInsensitiveContains(t, e)
        }
        ,
        goog.labs.userAgent.util.extractVersionTuples = function (e) {
            for (var t, r = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, n = []; t = r.exec(e);)
                n.push([t[1], t[2], t[3] || void 0]);
            return n
        }
        ,
        goog.labs.userAgent.browser = {},
        goog.labs.userAgent.browser.matchOpera_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Opera")
        }
        ,
        goog.labs.userAgent.browser.matchIE_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
        }
        ,
        goog.labs.userAgent.browser.matchEdgeHtml_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Edge")
        }
        ,
        goog.labs.userAgent.browser.matchEdgeChromium_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Edg/")
        }
        ,
        goog.labs.userAgent.browser.matchOperaChromium_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("OPR")
        }
        ,
        goog.labs.userAgent.browser.matchFirefox_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Firefox") || goog.labs.userAgent.util.matchUserAgent("FxiOS")
        }
        ,
        goog.labs.userAgent.browser.matchSafari_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdgeHtml_() || goog.labs.userAgent.browser.matchEdgeChromium_() || goog.labs.userAgent.browser.matchOperaChromium_() || goog.labs.userAgent.browser.matchFirefox_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"))
        }
        ,
        goog.labs.userAgent.browser.matchCoast_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Coast")
        }
        ,
        goog.labs.userAgent.browser.matchIosWebview_ = function () {
            return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && !goog.labs.userAgent.browser.matchFirefox_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit")
        }
        ,
        goog.labs.userAgent.browser.matchChrome_ = function () {
            return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchEdgeHtml_()
        }
        ,
        goog.labs.userAgent.browser.matchAndroidBrowser_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk())
        }
        ,
        goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_,
        goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_,
        goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdgeHtml_,
        goog.labs.userAgent.browser.isEdgeChromium = goog.labs.userAgent.browser.matchEdgeChromium_,
        goog.labs.userAgent.browser.isOperaChromium = goog.labs.userAgent.browser.matchOperaChromium_,
        goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_,
        goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_,
        goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_,
        goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_,
        goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_,
        goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_,
        goog.labs.userAgent.browser.isSilk = function () {
            return goog.labs.userAgent.util.matchUserAgent("Silk")
        }
        ,
        goog.labs.userAgent.browser.getVersion = function () {
            function e(e) {
                return e = goog.array.find(e, n),
                    r[e] || ""
            }
            var t = goog.labs.userAgent.util.getUserAgent();
            if (goog.labs.userAgent.browser.isIE())
                return goog.labs.userAgent.browser.getIEVersion_(t);
            t = goog.labs.userAgent.util.extractVersionTuples(t);
            var r = {};
            goog.array.forEach(t, (function (e) {
                r[e[0]] = e[1]
            }
            ));
            var n = goog.partial(goog.object.containsKey, r);
            return goog.labs.userAgent.browser.isOpera() ? e(["Version", "Opera"]) : goog.labs.userAgent.browser.isEdge() ? e(["Edge"]) : goog.labs.userAgent.browser.isEdgeChromium() ? e(["Edg"]) : goog.labs.userAgent.browser.isChrome() ? e(["Chrome", "CriOS", "HeadlessChrome"]) : (t = t[2]) && t[1] || ""
        }
        ,
        goog.labs.userAgent.browser.isVersionOrHigher = function (e) {
            return 0 <= goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(), e)
        }
        ,
        goog.labs.userAgent.browser.getIEVersion_ = function (e) {
            var t = /rv: *([\d\.]*)/.exec(e);
            if (t && t[1])
                return t[1];
            t = "";
            var r = /MSIE +([\d\.]+)/.exec(e);
            if (r && r[1])
                if (e = /Trident\/(\d.\d)/.exec(e),
                    "7.0" == r[1])
                    if (e && e[1])
                        switch (e[1]) {
                            case "4.0":
                                t = "8.0";
                                break;
                            case "5.0":
                                t = "9.0";
                                break;
                            case "6.0":
                                t = "10.0";
                                break;
                            case "7.0":
                                t = "11.0"
                        }
                    else
                        t = "7.0";
                else
                    t = r[1];
            return t
        }
        ,
        goog.html.SafeHtml = function () {
            this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "",
                this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_,
                this.dir_ = null
        }
        ,
        goog.html.SafeHtml.ENABLE_ERROR_MESSAGES = goog.DEBUG,
        goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE = !0,
        goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = !0,
        goog.html.SafeHtml.prototype.getDirection = function () {
            return this.dir_
        }
        ,
        goog.html.SafeHtml.prototype.implementsGoogStringTypedString = !0,
        goog.html.SafeHtml.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString()
        }
        ,
        goog.DEBUG && (goog.html.SafeHtml.prototype.toString = function () {
            return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
        }
        ),
        goog.html.SafeHtml.unwrap = function (e) {
            return goog.html.SafeHtml.unwrapTrustedHTML(e).toString()
        }
        ,
        goog.html.SafeHtml.unwrapTrustedHTML = function (e) {
            return e instanceof goog.html.SafeHtml && e.constructor === goog.html.SafeHtml && e.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeHtmlWrappedValue_ : (goog.asserts.fail("expected object of type SafeHtml, got '" + e + "' of type " + goog.typeOf(e)),
                "type_error:SafeHtml")
        }
        ,
        goog.html.SafeHtml.htmlEscape = function (e) {
            if (e instanceof goog.html.SafeHtml)
                return e;
            var t = "object" == typeof e
                , r = null;
            return t && e.implementsGoogI18nBidiDirectionalString && (r = e.getDirection()),
                e = t && e.implementsGoogStringTypedString ? e.getTypedStringValue() : String(e),
                goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(e), r)
        }
        ,
        goog.html.SafeHtml.htmlEscapePreservingNewlines = function (e) {
            return e instanceof goog.html.SafeHtml ? e : (e = goog.html.SafeHtml.htmlEscape(e),
                goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(e)), e.getDirection()))
        }
        ,
        goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function (e) {
            return e instanceof goog.html.SafeHtml ? e : (e = goog.html.SafeHtml.htmlEscape(e),
                goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(e)), e.getDirection()))
        }
        ,
        goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape,
        goog.html.SafeHtml.comment = function (e) {
            return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("\x3c!--" + goog.string.internal.htmlEscape(e) + "--\x3e", null)
        }
        ,
        goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/,
        goog.html.SafeHtml.URL_ATTRIBUTES_ = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        goog.html.SafeHtml.create = function (e, t, r) {
            return goog.html.SafeHtml.verifyTagName(String(e)),
                goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(e), t, r)
        }
        ,
        goog.html.SafeHtml.verifyTagName = function (e) {
            if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(e))
                throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "Invalid tag name <" + e + ">." : "");
            if (e.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)
                throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "Tag name <" + e + "> is not allowed for SafeHtml." : "")
        }
        ,
        goog.html.SafeHtml.createIframe = function (e, t, r, n) {
            e && goog.html.TrustedResourceUrl.unwrap(e);
            var o = {};
            return o.src = e || null,
                o.srcdoc = t && goog.html.SafeHtml.unwrap(t),
                e = goog.html.SafeHtml.combineAttributes(o, {
                    sandbox: ""
                }, r),
                goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", e, n)
        }
        ,
        goog.html.SafeHtml.createSandboxIframe = function (e, t, r, n) {
            if (!goog.html.SafeHtml.canUseSandboxIframe())
                throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "The browser does not support sandboxed iframes." : "");
            var o = {};
            return o.src = e ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(e)) : null,
                o.srcdoc = t || null,
                o.sandbox = "",
                e = goog.html.SafeHtml.combineAttributes(o, {}, r),
                goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", e, n)
        }
        ,
        goog.html.SafeHtml.canUseSandboxIframe = function () {
            return goog.global.HTMLIFrameElement && "sandbox" in goog.global.HTMLIFrameElement.prototype
        }
        ,
        goog.html.SafeHtml.createScriptSrc = function (e, t) {
            return goog.html.TrustedResourceUrl.unwrap(e),
                e = goog.html.SafeHtml.combineAttributes({
                    src: e
                }, {}, t),
                goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", e)
        }
        ,
        goog.html.SafeHtml.createScript = function (e, t) {
            for (var r in t) {
                var n = r.toLowerCase();
                if ("language" == n || "src" == n || "text" == n || "type" == n)
                    throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot set "' + n + '" attribute' : "")
            }
            for (r = "",
                e = goog.array.concat(e),
                n = 0; n < e.length; n++)
                r += goog.html.SafeScript.unwrap(e[n]);
            return e = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(r, goog.i18n.bidi.Dir.NEUTRAL),
                goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", t, e)
        }
        ,
        goog.html.SafeHtml.createStyle = function (e, t) {
            t = goog.html.SafeHtml.combineAttributes({
                type: "text/css"
            }, {}, t);
            var r = "";
            e = goog.array.concat(e);
            for (var n = 0; n < e.length; n++)
                r += goog.html.SafeStyleSheet.unwrap(e[n]);
            return e = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(r, goog.i18n.bidi.Dir.NEUTRAL),
                goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", t, e)
        }
        ,
        goog.html.SafeHtml.createMetaRefresh = function (e, t) {
            return e = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(e)),
                (goog.labs.userAgent.browser.isIE() || goog.labs.userAgent.browser.isEdge()) && goog.string.internal.contains(e, ";") && (e = "'" + e.replace(/'/g, "%27") + "'"),
                goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", {
                    "http-equiv": "refresh",
                    content: (t || 0) + "; url=" + e
                })
        }
        ,
        goog.html.SafeHtml.getAttrNameAndValue_ = function (e, t, r) {
            if (r instanceof goog.string.Const)
                r = goog.string.Const.unwrap(r);
            else if ("style" == t.toLowerCase()) {
                if (!goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE)
                    throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "style" not supported.' : "");
                r = goog.html.SafeHtml.getStyleValue_(r)
            } else {
                if (/^on/i.test(t))
                    throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + t + '" requires goog.string.Const value, "' + r + '" given.' : "");
                if (t.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_)
                    if (r instanceof goog.html.TrustedResourceUrl)
                        r = goog.html.TrustedResourceUrl.unwrap(r);
                    else if (r instanceof goog.html.SafeUrl)
                        r = goog.html.SafeUrl.unwrap(r);
                    else {
                        if ("string" != typeof r)
                            throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + t + '" on tag "' + e + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + r + '" given.' : "");
                        r = goog.html.SafeUrl.sanitize(r).getTypedStringValue()
                    }
            }
            return r.implementsGoogStringTypedString && (r = r.getTypedStringValue()),
                goog.asserts.assert("string" == typeof r || "number" == typeof r, "String or number value expected, got " + typeof r + " with value: " + r),
                t + '="' + goog.string.internal.htmlEscape(String(r)) + '"'
        }
        ,
        goog.html.SafeHtml.getStyleValue_ = function (e) {
            if (!goog.isObject(e))
                throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof e + " given: " + e : "");
            return e instanceof goog.html.SafeStyle || (e = goog.html.SafeStyle.create(e)),
                goog.html.SafeStyle.unwrap(e)
        }
        ,
        goog.html.SafeHtml.createWithDir = function (e, t, r, n) {
            return (t = goog.html.SafeHtml.create(t, r, n)).dir_ = e,
                t
        }
        ,
        goog.html.SafeHtml.join = function (e, t) {
            var r = (e = goog.html.SafeHtml.htmlEscape(e)).getDirection()
                , n = []
                , o = function (e) {
                    Array.isArray(e) ? goog.array.forEach(e, o) : (e = goog.html.SafeHtml.htmlEscape(e),
                        n.push(goog.html.SafeHtml.unwrap(e)),
                        e = e.getDirection(),
                        r == goog.i18n.bidi.Dir.NEUTRAL ? r = e : e != goog.i18n.bidi.Dir.NEUTRAL && r != e && (r = null))
                };
            return goog.array.forEach(t, o),
                goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(n.join(goog.html.SafeHtml.unwrap(e)), r)
        }
        ,
        goog.html.SafeHtml.concat = function (e) {
            return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY, Array.prototype.slice.call(arguments))
        }
        ,
        goog.html.SafeHtml.concatWithDir = function (e, t) {
            var r = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
            return r.dir_ = e,
                r
        }
        ,
        goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function (e, t) {
            return (new goog.html.SafeHtml).initSecurityPrivateDoNotAccessOrElse_(e, t)
        }
        ,
        goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (e, t) {
            return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(e) : e,
                this.dir_ = t,
                this
        }
        ,
        goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function (e, t, r) {
            var n = null
                , o = "<" + e + goog.html.SafeHtml.stringifyAttributes(e, t);
            return null == r ? r = [] : Array.isArray(r) || (r = [r]),
                goog.dom.tags.isVoidTag(e.toLowerCase()) ? (goog.asserts.assert(!r.length, "Void tag <" + e + "> does not allow content."),
                    o += ">") : (n = goog.html.SafeHtml.concat(r),
                        o += ">" + goog.html.SafeHtml.unwrap(n) + "</" + e + ">",
                        n = n.getDirection()),
                (e = t && t.dir) && (n = /^(ltr|rtl|auto)$/i.test(e) ? goog.i18n.bidi.Dir.NEUTRAL : null),
                goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(o, n)
        }
        ,
        goog.html.SafeHtml.stringifyAttributes = function (e, t) {
            var r = "";
            if (t)
                for (var n in t) {
                    if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(n))
                        throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Invalid attribute name "' + n + '".' : "");
                    var o = t[n];
                    null != o && (r += " " + goog.html.SafeHtml.getAttrNameAndValue_(e, n, o))
                }
            return r
        }
        ,
        goog.html.SafeHtml.combineAttributes = function (e, t, r) {
            var n, o = {};
            for (n in e)
                goog.asserts.assert(n.toLowerCase() == n, "Must be lower case"),
                    o[n] = e[n];
            for (n in t)
                goog.asserts.assert(n.toLowerCase() == n, "Must be lower case"),
                    o[n] = t[n];
            if (r)
                for (n in r) {
                    var i = n.toLowerCase();
                    if (i in e)
                        throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot override "' + i + '" attribute, got "' + n + '" with value "' + r[n] + '"' : "");
                    i in t && delete o[i],
                        o[n] = r[n]
                }
            return o
        }
        ,
        goog.html.SafeHtml.DOCTYPE_HTML = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", goog.i18n.bidi.Dir.NEUTRAL),
        goog.html.SafeHtml.EMPTY = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", goog.i18n.bidi.Dir.NEUTRAL),
        goog.html.SafeHtml.BR = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", goog.i18n.bidi.Dir.NEUTRAL),
        goog.html.uncheckedconversions = {},
        goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function (e, t, r) {
            return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"),
                goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"),
                goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(t, r || null)
        }
        ,
        goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function (e, t) {
            return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"),
                goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"),
                goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(t)
        }
        ,
        goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function (e, t) {
            return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"),
                goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"),
                goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(t)
        }
        ,
        goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function (e, t) {
            return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"),
                goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"),
                goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(t)
        }
        ,
        goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function (e, t) {
            return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"),
                goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
        }
        ,
        goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function (e, t) {
            return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"),
                goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"),
                goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(t)
        }
        ,
        goog.dom.safe = {},
        goog.dom.safe.InsertAdjacentHtmlPosition = {
            AFTERBEGIN: "afterbegin",
            AFTEREND: "afterend",
            BEFOREBEGIN: "beforebegin",
            BEFOREEND: "beforeend"
        },
        goog.dom.safe.insertAdjacentHtml = function (e, t, r) {
            e.insertAdjacentHTML(t, goog.html.SafeHtml.unwrapTrustedHTML(r))
        }
        ,
        goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = {
            MATH: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue((function () {
            if (goog.DEBUG && "undefined" == typeof document)
                return !1;
            var e = document.createElement("div")
                , t = document.createElement("div");
            return t.appendChild(document.createElement("div")),
                e.appendChild(t),
                !(goog.DEBUG && !e.firstChild) && (t = e.firstChild.firstChild,
                    e.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY),
                    !t.parentElement)
        }
        )),
        goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function (e, t) {
            if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
                for (; e.lastChild;)
                    e.removeChild(e.lastChild);
            e.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(t)
        }
        ,
        goog.dom.safe.setInnerHtml = function (e, t) {
            if (goog.asserts.ENABLE_ASSERTS) {
                var r = e.tagName.toUpperCase();
                if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[r])
                    throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + e.tagName + ".")
            }
            goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(e, t)
        }
        ,
        goog.dom.safe.setOuterHtml = function (e, t) {
            e.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(t)
        }
        ,
        goog.dom.safe.setFormElementAction = function (e, t) {
            t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t),
                goog.dom.asserts.assertIsHTMLFormElement(e).action = goog.html.SafeUrl.unwrap(t)
        }
        ,
        goog.dom.safe.setButtonFormAction = function (e, t) {
            t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t),
                goog.dom.asserts.assertIsHTMLButtonElement(e).formAction = goog.html.SafeUrl.unwrap(t)
        }
        ,
        goog.dom.safe.setInputFormAction = function (e, t) {
            t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t),
                goog.dom.asserts.assertIsHTMLInputElement(e).formAction = goog.html.SafeUrl.unwrap(t)
        }
        ,
        goog.dom.safe.setStyle = function (e, t) {
            e.style.cssText = goog.html.SafeStyle.unwrap(t)
        }
        ,
        goog.dom.safe.documentWrite = function (e, t) {
            e.write(goog.html.SafeHtml.unwrapTrustedHTML(t))
        }
        ,
        goog.dom.safe.setAnchorHref = function (e, t) {
            goog.dom.asserts.assertIsHTMLAnchorElement(e),
                t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t),
                e.href = goog.html.SafeUrl.unwrap(t)
        }
        ,
        goog.dom.safe.setImageSrc = function (e, t) {
            if (goog.dom.asserts.assertIsHTMLImageElement(e),
                !(t instanceof goog.html.SafeUrl)) {
                var r = /^data:image\//i.test(t);
                t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, r)
            }
            e.src = goog.html.SafeUrl.unwrap(t)
        }
        ,
        goog.dom.safe.setAudioSrc = function (e, t) {
            if (goog.dom.asserts.assertIsHTMLAudioElement(e),
                !(t instanceof goog.html.SafeUrl)) {
                var r = /^data:audio\//i.test(t);
                t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, r)
            }
            e.src = goog.html.SafeUrl.unwrap(t)
        }
        ,
        goog.dom.safe.setVideoSrc = function (e, t) {
            if (goog.dom.asserts.assertIsHTMLVideoElement(e),
                !(t instanceof goog.html.SafeUrl)) {
                var r = /^data:video\//i.test(t);
                t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, r)
            }
            e.src = goog.html.SafeUrl.unwrap(t)
        }
        ,
        goog.dom.safe.setEmbedSrc = function (e, t) {
            goog.dom.asserts.assertIsHTMLEmbedElement(e),
                e.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t)
        }
        ,
        goog.dom.safe.setFrameSrc = function (e, t) {
            goog.dom.asserts.assertIsHTMLFrameElement(e),
                e.src = goog.html.TrustedResourceUrl.unwrap(t)
        }
        ,
        goog.dom.safe.setIframeSrc = function (e, t) {
            goog.dom.asserts.assertIsHTMLIFrameElement(e),
                e.src = goog.html.TrustedResourceUrl.unwrap(t)
        }
        ,
        goog.dom.safe.setIframeSrcdoc = function (e, t) {
            goog.dom.asserts.assertIsHTMLIFrameElement(e),
                e.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(t)
        }
        ,
        goog.dom.safe.setLinkHrefAndRel = function (e, t, r) {
            goog.dom.asserts.assertIsHTMLLinkElement(e),
                e.rel = r,
                goog.string.internal.caseInsensitiveContains(r, "stylesheet") ? (goog.asserts.assert(t instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'),
                    e.href = goog.html.TrustedResourceUrl.unwrap(t)) : e.href = t instanceof goog.html.TrustedResourceUrl ? goog.html.TrustedResourceUrl.unwrap(t) : t instanceof goog.html.SafeUrl ? goog.html.SafeUrl.unwrap(t) : goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitizeAssertUnchanged(t))
        }
        ,
        goog.dom.safe.setObjectData = function (e, t) {
            goog.dom.asserts.assertIsHTMLObjectElement(e),
                e.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t)
        }
        ,
        goog.dom.safe.setScriptSrc = function (e, t) {
            goog.dom.asserts.assertIsHTMLScriptElement(e),
                e.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t),
                (t = goog.getScriptNonce()) && e.setAttribute("nonce", t)
        }
        ,
        goog.dom.safe.setScriptContent = function (e, t) {
            goog.dom.asserts.assertIsHTMLScriptElement(e),
                e.text = goog.html.SafeScript.unwrapTrustedScript(t),
                (t = goog.getScriptNonce()) && e.setAttribute("nonce", t)
        }
        ,
        goog.dom.safe.setLocationHref = function (e, t) {
            goog.dom.asserts.assertIsLocation(e),
                t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t),
                e.href = goog.html.SafeUrl.unwrap(t)
        }
        ,
        goog.dom.safe.assignLocation = function (e, t) {
            goog.dom.asserts.assertIsLocation(e),
                t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t),
                e.assign(goog.html.SafeUrl.unwrap(t))
        }
        ,
        goog.dom.safe.replaceLocation = function (e, t) {
            t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t),
                e.replace(goog.html.SafeUrl.unwrap(t))
        }
        ,
        goog.dom.safe.openInWindow = function (e, t, r, n, o) {
            return e = e instanceof goog.html.SafeUrl ? e : goog.html.SafeUrl.sanitizeAssertUnchanged(e),
                t = t || goog.global,
                r = r instanceof goog.string.Const ? goog.string.Const.unwrap(r) : r || "",
                t.open(goog.html.SafeUrl.unwrap(e), r, n, o)
        }
        ,
        goog.dom.safe.parseFromStringHtml = function (e, t) {
            return goog.dom.safe.parseFromString(e, t, "text/html")
        }
        ,
        goog.dom.safe.parseFromString = function (e, t, r) {
            return e.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(t), r)
        }
        ,
        goog.dom.safe.createImageFromBlob = function (e) {
            if (!/^image\/.*/g.test(e.type))
                throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
            var t = goog.global.URL.createObjectURL(e);
            return (e = new goog.global.Image).onload = function () {
                goog.global.URL.revokeObjectURL(t)
            }
                ,
                goog.dom.safe.setImageSrc(e, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."), t)),
                e
        }
        ,
        goog.string.DETECT_DOUBLE_ESCAPING = !1,
        goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1,
        goog.string.Unicode = {
            NBSP: " "
        },
        goog.string.startsWith = goog.string.internal.startsWith,
        goog.string.endsWith = goog.string.internal.endsWith,
        goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith,
        goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith,
        goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals,
        goog.string.subs = function (e, t) {
            for (var r = e.split("%s"), n = "", o = Array.prototype.slice.call(arguments, 1); o.length && 1 < r.length;)
                n += r.shift() + o.shift();
            return n + r.join("%s")
        }
        ,
        goog.string.collapseWhitespace = function (e) {
            return e.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
        }
        ,
        goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace,
        goog.string.isEmptyString = function (e) {
            return 0 == e.length
        }
        ,
        goog.string.isEmpty = goog.string.isEmptyOrWhitespace,
        goog.string.isEmptyOrWhitespaceSafe = function (e) {
            return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(e))
        }
        ,
        goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe,
        goog.string.isBreakingWhitespace = function (e) {
            return !/[^\t\n\r ]/.test(e)
        }
        ,
        goog.string.isAlpha = function (e) {
            return !/[^a-zA-Z]/.test(e)
        }
        ,
        goog.string.isNumeric = function (e) {
            return !/[^0-9]/.test(e)
        }
        ,
        goog.string.isAlphaNumeric = function (e) {
            return !/[^a-zA-Z0-9]/.test(e)
        }
        ,
        goog.string.isSpace = function (e) {
            return " " == e
        }
        ,
        goog.string.isUnicodeChar = function (e) {
            return 1 == e.length && " " <= e && "~" >= e || "" <= e && "�" >= e
        }
        ,
        goog.string.stripNewlines = function (e) {
            return e.replace(/(\r\n|\r|\n)+/g, " ")
        }
        ,
        goog.string.canonicalizeNewlines = function (e) {
            return e.replace(/(\r\n|\r|\n)/g, "\n")
        }
        ,
        goog.string.normalizeWhitespace = function (e) {
            return e.replace(/\xa0|\s/g, " ")
        }
        ,
        goog.string.normalizeSpaces = function (e) {
            return e.replace(/\xa0|[ \t]+/g, " ")
        }
        ,
        goog.string.collapseBreakingSpaces = function (e) {
            return e.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
        }
        ,
        goog.string.trim = goog.string.internal.trim,
        goog.string.trimLeft = function (e) {
            return e.replace(/^[\s\xa0]+/, "")
        }
        ,
        goog.string.trimRight = function (e) {
            return e.replace(/[\s\xa0]+$/, "")
        }
        ,
        goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare,
        goog.string.numberAwareCompare_ = function (e, t, r) {
            if (e == t)
                return 0;
            if (!e)
                return -1;
            if (!t)
                return 1;
            for (var n = e.toLowerCase().match(r), o = t.toLowerCase().match(r), i = Math.min(n.length, o.length), a = 0; a < i; a++) {
                r = n[a];
                var s = o[a];
                if (r != s)
                    return e = parseInt(r, 10),
                        !isNaN(e) && (t = parseInt(s, 10),
                            !isNaN(t) && e - t) ? e - t : r < s ? -1 : 1
            }
            return n.length != o.length ? n.length - o.length : e < t ? -1 : 1
        }
        ,
        goog.string.intAwareCompare = function (e, t) {
            return goog.string.numberAwareCompare_(e, t, /\d+|\D+/g)
        }
        ,
        goog.string.floatAwareCompare = function (e, t) {
            return goog.string.numberAwareCompare_(e, t, /\d+|\.\d+|\D+/g)
        }
        ,
        goog.string.numerateCompare = goog.string.floatAwareCompare,
        goog.string.urlEncode = function (e) {
            return encodeURIComponent(String(e))
        }
        ,
        goog.string.urlDecode = function (e) {
            return decodeURIComponent(e.replace(/\+/g, " "))
        }
        ,
        goog.string.newLineToBr = goog.string.internal.newLineToBr,
        goog.string.htmlEscape = function (e, t) {
            return e = goog.string.internal.htmlEscape(e, t),
                goog.string.DETECT_DOUBLE_ESCAPING && (e = e.replace(goog.string.E_RE_, "&#101;")),
                e
        }
        ,
        goog.string.E_RE_ = /e/g,
        goog.string.unescapeEntities = function (e) {
            return goog.string.contains(e, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(e) : goog.string.unescapePureXmlEntities_(e) : e
        }
        ,
        goog.string.unescapeEntitiesWithDocument = function (e, t) {
            return goog.string.contains(e, "&") ? goog.string.unescapeEntitiesUsingDom_(e, t) : e
        }
        ,
        goog.string.unescapeEntitiesUsingDom_ = function (e, t) {
            var r = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"'
            }
                , n = t ? t.createElement("div") : goog.global.document.createElement("div");
            return e.replace(goog.string.HTML_ENTITY_PATTERN_, (function (e, t) {
                var o = r[e];
                return o || ("#" == t.charAt(0) && (t = Number("0" + t.substr(1)),
                    isNaN(t) || (o = String.fromCharCode(t))),
                    o || (goog.dom.safe.setInnerHtml(n, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."), e + " ")),
                        o = n.firstChild.nodeValue.slice(0, -1)),
                    r[e] = o)
            }
            ))
        }
        ,
        goog.string.unescapePureXmlEntities_ = function (e) {
            return e.replace(/&([^;]+);/g, (function (e, t) {
                switch (t) {
                    case "amp":
                        return "&";
                    case "lt":
                        return "<";
                    case "gt":
                        return ">";
                    case "quot":
                        return '"';
                    default:
                        return "#" != t.charAt(0) || (t = Number("0" + t.substr(1)),
                            isNaN(t)) ? e : String.fromCharCode(t)
                }
            }
            ))
        }
        ,
        goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g,
        goog.string.whitespaceEscape = function (e, t) {
            return goog.string.newLineToBr(e.replace(/  /g, " &#160;"), t)
        }
        ,
        goog.string.preserveSpaces = function (e) {
            return e.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP)
        }
        ,
        goog.string.stripQuotes = function (e, t) {
            for (var r = t.length, n = 0; n < r; n++) {
                var o = 1 == r ? t : t.charAt(n);
                if (e.charAt(0) == o && e.charAt(e.length - 1) == o)
                    return e.substring(1, e.length - 1)
            }
            return e
        }
        ,
        goog.string.truncate = function (e, t, r) {
            return r && (e = goog.string.unescapeEntities(e)),
                e.length > t && (e = e.substring(0, t - 3) + "..."),
                r && (e = goog.string.htmlEscape(e)),
                e
        }
        ,
        goog.string.truncateMiddle = function (e, t, r, n) {
            if (r && (e = goog.string.unescapeEntities(e)),
                n && e.length > t) {
                n > t && (n = t);
                var o = e.length - n;
                e = e.substring(0, t - n) + "..." + e.substring(o)
            } else
                e.length > t && (n = Math.floor(t / 2),
                    o = e.length - n,
                    e = e.substring(0, n + t % 2) + "..." + e.substring(o));
            return r && (e = goog.string.htmlEscape(e)),
                e
        }
        ,
        goog.string.specialEscapeChars_ = {
            "\0": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        goog.string.jsEscapeCache_ = {
            "'": "\\'"
        },
        goog.string.quote = function (e) {
            e = String(e);
            for (var t = ['"'], r = 0; r < e.length; r++) {
                var n = e.charAt(r)
                    , o = n.charCodeAt(0);
                t[r + 1] = goog.string.specialEscapeChars_[n] || (31 < o && 127 > o ? n : goog.string.escapeChar(n))
            }
            return t.push('"'),
                t.join("")
        }
        ,
        goog.string.escapeString = function (e) {
            for (var t = [], r = 0; r < e.length; r++)
                t[r] = goog.string.escapeChar(e.charAt(r));
            return t.join("")
        }
        ,
        goog.string.escapeChar = function (e) {
            if (e in goog.string.jsEscapeCache_)
                return goog.string.jsEscapeCache_[e];
            if (e in goog.string.specialEscapeChars_)
                return goog.string.jsEscapeCache_[e] = goog.string.specialEscapeChars_[e];
            var t = e.charCodeAt(0);
            if (31 < t && 127 > t)
                var r = e;
            else
                256 > t ? (r = "\\x",
                    (16 > t || 256 < t) && (r += "0")) : (r = "\\u",
                        4096 > t && (r += "0")),
                    r += t.toString(16).toUpperCase();
            return goog.string.jsEscapeCache_[e] = r
        }
        ,
        goog.string.contains = goog.string.internal.contains,
        goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains,
        goog.string.countOf = function (e, t) {
            return e && t ? e.split(t).length - 1 : 0
        }
        ,
        goog.string.removeAt = function (e, t, r) {
            var n = e;
            return 0 <= t && t < e.length && 0 < r && (n = e.substr(0, t) + e.substr(t + r, e.length - t - r)),
                n
        }
        ,
        goog.string.remove = function (e, t) {
            return e.replace(t, "")
        }
        ,
        goog.string.removeAll = function (e, t) {
            return t = new RegExp(goog.string.regExpEscape(t), "g"),
                e.replace(t, "")
        }
        ,
        goog.string.replaceAll = function (e, t, r) {
            return t = new RegExp(goog.string.regExpEscape(t), "g"),
                e.replace(t, r.replace(/\$/g, "$$$$"))
        }
        ,
        goog.string.regExpEscape = function (e) {
            return String(e).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        }
        ,
        goog.string.repeat = String.prototype.repeat ? function (e, t) {
            return e.repeat(t)
        }
            : function (e, t) {
                return Array(t + 1).join(e)
            }
        ,
        goog.string.padNumber = function (e, t, r) {
            return -1 == (r = (e = void 0 !== r ? e.toFixed(r) : String(e)).indexOf(".")) && (r = e.length),
                goog.string.repeat("0", Math.max(0, t - r)) + e
        }
        ,
        goog.string.makeSafe = function (e) {
            return null == e ? "" : String(e)
        }
        ,
        goog.string.buildString = function (e) {
            return Array.prototype.join.call(arguments, "")
        }
        ,
        goog.string.getRandomString = function () {
            return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
        }
        ,
        goog.string.compareVersions = goog.string.internal.compareVersions,
        goog.string.hashCode = function (e) {
            for (var t = 0, r = 0; r < e.length; ++r)
                t = 31 * t + e.charCodeAt(r) >>> 0;
            return t
        }
        ,
        goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0,
        goog.string.createUniqueString = function () {
            return "goog_" + goog.string.uniqueStringCounter_++
        }
        ,
        goog.string.toNumber = function (e) {
            var t = Number(e);
            return 0 == t && goog.string.isEmptyOrWhitespace(e) ? NaN : t
        }
        ,
        goog.string.isLowerCamelCase = function (e) {
            return /^[a-z]+([A-Z][a-z]*)*$/.test(e)
        }
        ,
        goog.string.isUpperCamelCase = function (e) {
            return /^([A-Z][a-z]*)+$/.test(e)
        }
        ,
        goog.string.toCamelCase = function (e) {
            return String(e).replace(/\-([a-z])/g, (function (e, t) {
                return t.toUpperCase()
            }
            ))
        }
        ,
        goog.string.toSelectorCase = function (e) {
            return String(e).replace(/([A-Z])/g, "-$1").toLowerCase()
        }
        ,
        goog.string.toTitleCase = function (e, t) {
            return t = "string" == typeof t ? goog.string.regExpEscape(t) : "\\s",
                e.replace(new RegExp("(^" + (t ? "|[" + t + "]+" : "") + ")([a-z])", "g"), (function (e, t, r) {
                    return t + r.toUpperCase()
                }
                ))
        }
        ,
        goog.string.capitalize = function (e) {
            return String(e.charAt(0)).toUpperCase() + String(e.substr(1)).toLowerCase()
        }
        ,
        goog.string.parseInt = function (e) {
            return isFinite(e) && (e = String(e)),
                "string" == typeof e ? /^\s*-?0x/i.test(e) ? parseInt(e, 16) : parseInt(e, 10) : NaN
        }
        ,
        goog.string.splitLimit = function (e, t, r) {
            e = e.split(t);
            for (var n = []; 0 < r && e.length;)
                n.push(e.shift()),
                    r--;
            return e.length && n.push(e.join(t)),
                n
        }
        ,
        goog.string.lastComponent = function (e, t) {
            if (!t)
                return e;
            "string" == typeof t && (t = [t]);
            for (var r = -1, n = 0; n < t.length; n++)
                if ("" != t[n]) {
                    var o = e.lastIndexOf(t[n]);
                    o > r && (r = o)
                }
            return -1 == r ? e : e.slice(r + 1)
        }
        ,
        goog.string.editDistance = function (e, t) {
            var r = []
                , n = [];
            if (e == t)
                return 0;
            if (!e.length || !t.length)
                return Math.max(e.length, t.length);
            for (var o = 0; o < t.length + 1; o++)
                r[o] = o;
            for (o = 0; o < e.length; o++) {
                n[0] = o + 1;
                for (var i = 0; i < t.length; i++)
                    n[i + 1] = Math.min(n[i] + 1, r[i + 1] + 1, r[i] + Number(e[o] != t[i]));
                for (i = 0; i < r.length; i++)
                    r[i] = n[i]
            }
            return n[t.length]
        }
        ,
        goog.labs.userAgent.engine = {},
        goog.labs.userAgent.engine.isPresto = function () {
            return goog.labs.userAgent.util.matchUserAgent("Presto")
        }
        ,
        goog.labs.userAgent.engine.isTrident = function () {
            return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
        }
        ,
        goog.labs.userAgent.engine.isEdge = function () {
            return goog.labs.userAgent.util.matchUserAgent("Edge")
        }
        ,
        goog.labs.userAgent.engine.isWebKit = function () {
            return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge()
        }
        ,
        goog.labs.userAgent.engine.isGecko = function () {
            return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge()
        }
        ,
        goog.labs.userAgent.engine.getVersion = function () {
            var e = goog.labs.userAgent.util.getUserAgent();
            if (e) {
                e = goog.labs.userAgent.util.extractVersionTuples(e);
                var t, r = goog.labs.userAgent.engine.getEngineTuple_(e);
                if (r)
                    return "Gecko" == r[0] ? goog.labs.userAgent.engine.getVersionForKey_(e, "Firefox") : r[1];
                if ((e = e[0]) && (t = e[2]) && (t = /Trident\/([^\s;]+)/.exec(t)))
                    return t[1]
            }
            return ""
        }
        ,
        goog.labs.userAgent.engine.getEngineTuple_ = function (e) {
            if (!goog.labs.userAgent.engine.isEdge())
                return e[1];
            for (var t = 0; t < e.length; t++) {
                var r = e[t];
                if ("Edge" == r[0])
                    return r
            }
        }
        ,
        goog.labs.userAgent.engine.isVersionOrHigher = function (e) {
            return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), e)
        }
        ,
        goog.labs.userAgent.engine.getVersionForKey_ = function (e, t) {
            return (e = goog.array.find(e, (function (e) {
                return t == e[0]
            }
            ))) && e[1] || ""
        }
        ,
        goog.labs.userAgent.platform = {},
        goog.labs.userAgent.platform.isAndroid = function () {
            return goog.labs.userAgent.util.matchUserAgent("Android")
        }
        ,
        goog.labs.userAgent.platform.isIpod = function () {
            return goog.labs.userAgent.util.matchUserAgent("iPod")
        }
        ,
        goog.labs.userAgent.platform.isIphone = function () {
            return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad")
        }
        ,
        goog.labs.userAgent.platform.isIpad = function () {
            return goog.labs.userAgent.util.matchUserAgent("iPad")
        }
        ,
        goog.labs.userAgent.platform.isIos = function () {
            return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod()
        }
        ,
        goog.labs.userAgent.platform.isMacintosh = function () {
            return goog.labs.userAgent.util.matchUserAgent("Macintosh")
        }
        ,
        goog.labs.userAgent.platform.isLinux = function () {
            return goog.labs.userAgent.util.matchUserAgent("Linux")
        }
        ,
        goog.labs.userAgent.platform.isWindows = function () {
            return goog.labs.userAgent.util.matchUserAgent("Windows")
        }
        ,
        goog.labs.userAgent.platform.isChromeOS = function () {
            return goog.labs.userAgent.util.matchUserAgent("CrOS")
        }
        ,
        goog.labs.userAgent.platform.isChromecast = function () {
            return goog.labs.userAgent.util.matchUserAgent("CrKey")
        }
        ,
        goog.labs.userAgent.platform.isKaiOS = function () {
            return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS")
        }
        ,
        goog.labs.userAgent.platform.getVersion = function () {
            var e = goog.labs.userAgent.util.getUserAgent()
                , t = "";
            return goog.labs.userAgent.platform.isWindows() ? t = (e = (t = /Windows (?:NT|Phone) ([0-9.]+)/).exec(e)) ? e[1] : "0.0" : goog.labs.userAgent.platform.isIos() ? t = (e = (t = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/).exec(e)) && e[1].replace(/_/g, ".") : goog.labs.userAgent.platform.isMacintosh() ? t = (e = (t = /Mac OS X ([0-9_.]+)/).exec(e)) ? e[1].replace(/_/g, ".") : "10" : goog.labs.userAgent.platform.isKaiOS() ? t = (e = (t = /(?:KaiOS)\/(\S+)/i).exec(e)) && e[1] : goog.labs.userAgent.platform.isAndroid() ? t = (e = (t = /Android\s+([^\);]+)(\)|;)/).exec(e)) && e[1] : goog.labs.userAgent.platform.isChromeOS() && (t = (e = (t = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/).exec(e)) && e[1]),
                t || ""
        }
        ,
        goog.labs.userAgent.platform.isVersionOrHigher = function (e) {
            return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), e)
        }
        ,
        goog.reflect = {},
        goog.reflect.object = function (e, t) {
            return t
        }
        ,
        goog.reflect.objectProperty = function (e, t) {
            return e
        }
        ,
        goog.reflect.sinkValue = function (e) {
            return goog.reflect.sinkValue[" "](e),
                e
        }
        ,
        goog.reflect.sinkValue[" "] = goog.nullFunction,
        goog.reflect.canAccessProperty = function (e, t) {
            try {
                return goog.reflect.sinkValue(e[t]),
                    !0
            } catch (e) { }
            return !1
        }
        ,
        goog.reflect.cache = function (e, t, r, n) {
            return n = n ? n(t) : t,
                Object.prototype.hasOwnProperty.call(e, n) ? e[n] : e[n] = r(t)
        }
        ,
        goog.userAgent = {},
        goog.userAgent.ASSUME_IE = !1,
        goog.userAgent.ASSUME_EDGE = !1,
        goog.userAgent.ASSUME_GECKO = !1,
        goog.userAgent.ASSUME_WEBKIT = !1,
        goog.userAgent.ASSUME_MOBILE_WEBKIT = !1,
        goog.userAgent.ASSUME_OPERA = !1,
        goog.userAgent.ASSUME_ANY_VERSION = !1,
        goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA,
        goog.userAgent.getUserAgentString = function () {
            return goog.labs.userAgent.util.getUserAgent()
        }
        ,
        goog.userAgent.getNavigatorTyped = function () {
            return goog.global.navigator || null
        }
        ,
        goog.userAgent.getNavigator = function () {
            return goog.userAgent.getNavigatorTyped()
        }
        ,
        goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera(),
        goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE(),
        goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge(),
        goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE,
        goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko(),
        goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit(),
        goog.userAgent.isMobile_ = function () {
            return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile")
        }
        ,
        goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_(),
        goog.userAgent.SAFARI = goog.userAgent.WEBKIT,
        goog.userAgent.determinePlatform_ = function () {
            var e = goog.userAgent.getNavigatorTyped();
            return e && e.platform || ""
        }
        ,
        goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_(),
        goog.userAgent.ASSUME_MAC = !1,
        goog.userAgent.ASSUME_WINDOWS = !1,
        goog.userAgent.ASSUME_LINUX = !1,
        goog.userAgent.ASSUME_X11 = !1,
        goog.userAgent.ASSUME_ANDROID = !1,
        goog.userAgent.ASSUME_IPHONE = !1,
        goog.userAgent.ASSUME_IPAD = !1,
        goog.userAgent.ASSUME_IPOD = !1,
        goog.userAgent.ASSUME_KAIOS = !1,
        goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD,
        goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh();
    goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows(),
        goog.userAgent.isLegacyLinux_ = function () {
            return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS()
        }
        ,
        goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_(),
        goog.userAgent.isX11_ = function () {
            var e = goog.userAgent.getNavigatorTyped();
            return !!e && goog.string.contains(e.appVersion || "", "X11")
        }
        ,
        goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_(),
        goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid(),
        goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone(),
        goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad(),
        goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod(),
        goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos(),
        goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_KAIOS : goog.labs.userAgent.platform.isKaiOS(),
        goog.userAgent.determineVersion_ = function () {
            var e = ""
                , t = goog.userAgent.getVersionRegexResult_();
            return t && (e = t ? t[1] : ""),
                goog.userAgent.IE && (null != (t = goog.userAgent.getDocumentMode_()) && t > parseFloat(e)) ? String(t) : e
        }
        ,
        goog.userAgent.getVersionRegexResult_ = function () {
            var e = goog.userAgent.getUserAgentString();
            return goog.userAgent.GECKO ? /rv:([^\);]+)(\)|;)/.exec(e) : goog.userAgent.EDGE ? /Edge\/([\d\.]+)/.exec(e) : goog.userAgent.IE ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e) : goog.userAgent.WEBKIT ? /WebKit\/(\S+)/.exec(e) : goog.userAgent.OPERA ? /(?:Version)[ \/]?(\S+)/.exec(e) : void 0
        }
        ,
        goog.userAgent.getDocumentMode_ = function () {
            var e = goog.global.document;
            return e ? e.documentMode : void 0
        }
        ,
        goog.userAgent.VERSION = goog.userAgent.determineVersion_(),
        goog.userAgent.compare = function (e, t) {
            return goog.string.compareVersions(e, t)
        }
        ,
        goog.userAgent.isVersionOrHigherCache_ = {},
        goog.userAgent.isVersionOrHigher = function (e) {
            return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, e, (function () {
                return 0 <= goog.string.compareVersions(goog.userAgent.VERSION, e)
            }
            ))
        }
        ,
        goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher,
        goog.userAgent.isDocumentModeOrHigher = function (e) {
            return Number(goog.userAgent.DOCUMENT_MODE) >= e
        }
        ,
        goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher,
        goog.userAgent.DOCUMENT_MODE = function () {
            if (goog.global.document && goog.userAgent.IE) {
                var e = goog.userAgent.getDocumentMode_();
                return e || (parseInt(goog.userAgent.VERSION, 10) || void 0)
            }
        }(),
        goog.userAgent.product = {},
        goog.userAgent.product.ASSUME_FIREFOX = !1,
        goog.userAgent.product.ASSUME_IPHONE = !1,
        goog.userAgent.product.ASSUME_IPAD = !1,
        goog.userAgent.product.ASSUME_ANDROID = !1,
        goog.userAgent.product.ASSUME_CHROME = !1,
        goog.userAgent.product.ASSUME_SAFARI = !1,
        goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI,
        goog.userAgent.product.OPERA = goog.userAgent.OPERA,
        goog.userAgent.product.IE = goog.userAgent.IE,
        goog.userAgent.product.EDGE = goog.userAgent.EDGE,
        goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox(),
        goog.userAgent.product.isIphoneOrIpod_ = function () {
            return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod()
        }
        ,
        goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_(),
        goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad(),
        goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser(),
        goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome(),
        goog.userAgent.product.isSafariDesktop_ = function () {
            return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos()
        }
        ,
        goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_(),
        goog.crypt.base64 = {},
        goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/=",
        goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_.",
        goog.crypt.base64.Alphabet = {
            DEFAULT: 0,
            NO_PADDING: 1,
            WEBSAFE: 2,
            WEBSAFE_DOT_PADDING: 3,
            WEBSAFE_NO_PADDING: 4
        },
        goog.crypt.base64.paddingChars_ = "=.",
        goog.crypt.base64.isPadding_ = function (e) {
            return goog.string.contains(goog.crypt.base64.paddingChars_, e)
        }
        ,
        goog.crypt.base64.byteToCharMaps_ = {},
        goog.crypt.base64.charToByteMap_ = null,
        goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI || goog.userAgent.OPERA,
        goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || "function" == typeof goog.global.btoa,
        goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && "function" == typeof goog.global.atob,
        goog.crypt.base64.encodeByteArray = function (e, t) {
            goog.asserts.assert(goog.isArrayLike(e), "encodeByteArray takes an array as a parameter"),
                void 0 === t && (t = goog.crypt.base64.Alphabet.DEFAULT),
                goog.crypt.base64.init_(),
                t = goog.crypt.base64.byteToCharMaps_[t];
            for (var r = [], n = 0; n < e.length; n += 3) {
                var o = e[n]
                    , i = n + 1 < e.length
                    , a = i ? e[n + 1] : 0
                    , s = n + 2 < e.length
                    , u = s ? e[n + 2] : 0
                    , l = o >> 2;
                o = (3 & o) << 4 | a >> 4,
                    a = (15 & a) << 2 | u >> 6,
                    u &= 63,
                    s || (u = 64,
                        i || (a = 64)),
                    r.push(t[l], t[o], t[a] || "", t[u] || "")
            }
            return r.join("")
        }
        ,
        goog.crypt.base64.encodeString = function (e, t) {
            return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !t ? goog.global.btoa(e) : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(e), t)
        }
        ,
        goog.crypt.base64.decodeString = function (e, t) {
            if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !t)
                return goog.global.atob(e);
            var r = "";
            return goog.crypt.base64.decodeStringInternal_(e, (function (e) {
                r += String.fromCharCode(e)
            }
            )),
                r
        }
        ,
        goog.crypt.base64.decodeStringToByteArray = function (e, t) {
            var r = [];
            return goog.crypt.base64.decodeStringInternal_(e, (function (e) {
                r.push(e)
            }
            )),
                r
        }
        ,
        goog.crypt.base64.decodeStringToUint8Array = function (e) {
            goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
            var t = e.length
                , r = 3 * t / 4;
            r % 3 ? r = Math.floor(r) : goog.crypt.base64.isPadding_(e[t - 1]) && (r = goog.crypt.base64.isPadding_(e[t - 2]) ? r - 2 : r - 1);
            var n = new Uint8Array(r)
                , o = 0;
            return goog.crypt.base64.decodeStringInternal_(e, (function (e) {
                n[o++] = e
            }
            )),
                n.subarray(0, o)
        }
        ,
        goog.crypt.base64.decodeStringInternal_ = function (e, t) {
            function r(t) {
                for (; n < e.length;) {
                    var r = e.charAt(n++)
                        , o = goog.crypt.base64.charToByteMap_[r];
                    if (null != o)
                        return o;
                    if (!goog.string.isEmptyOrWhitespace(r))
                        throw Error("Unknown base64 encoding at char: " + r)
                }
                return t
            }
            goog.crypt.base64.init_();
            for (var n = 0; ;) {
                var o = r(-1)
                    , i = r(0)
                    , a = r(64)
                    , s = r(64);
                if (64 === s && -1 === o)
                    break;
                t(o << 2 | i >> 4),
                    64 != a && (t(i << 4 & 240 | a >> 2),
                        64 != s && t(a << 6 & 192 | s))
            }
        }
        ,
        goog.crypt.base64.init_ = function () {
            if (!goog.crypt.base64.charToByteMap_) {
                goog.crypt.base64.charToByteMap_ = {};
                for (var e = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""), t = ["+/=", "+/", "-_=", "-_.", "-_"], r = 0; 5 > r; r++) {
                    var n = e.concat(t[r].split(""));
                    goog.crypt.base64.byteToCharMaps_[r] = n;
                    for (var o = 0; o < n.length; o++) {
                        var i = n[o]
                            , a = goog.crypt.base64.charToByteMap_[i];
                        void 0 === a ? goog.crypt.base64.charToByteMap_[i] = o : goog.asserts.assert(a === o)
                    }
                }
            }
        }
        ,
        jspb.utils = {},
        jspb.utils.split64Low = 0,
        jspb.utils.split64High = 0,
        jspb.utils.splitUint64 = function (e) {
            var t = e >>> 0;
            e = Math.floor((e - t) / jspb.BinaryConstants.TWO_TO_32) >>> 0,
                jspb.utils.split64Low = t,
                jspb.utils.split64High = e
        }
        ,
        jspb.utils.splitInt64 = function (e) {
            var t = 0 > e
                , r = (e = Math.abs(e)) >>> 0;
            e = Math.floor((e - r) / jspb.BinaryConstants.TWO_TO_32),
                e >>>= 0,
                t && (e = ~e >>> 0,
                    4294967295 < (r = 1 + (~r >>> 0)) && (r = 0,
                        4294967295 < ++e && (e = 0))),
                jspb.utils.split64Low = r,
                jspb.utils.split64High = e
        }
        ,
        jspb.utils.splitZigzag64 = function (e) {
            var t = 0 > e;
            e = 2 * Math.abs(e),
                jspb.utils.splitUint64(e),
                e = jspb.utils.split64Low;
            var r = jspb.utils.split64High;
            t && (0 == e ? 0 == r ? r = e = 4294967295 : (r--,
                e = 4294967295) : e--),
                jspb.utils.split64Low = e,
                jspb.utils.split64High = r
        }
        ,
        jspb.utils.splitFloat32 = function (e) {
            var t = 0 > e ? 1 : 0;
            if (0 === (e = t ? -e : e))
                0 < 1 / e ? (jspb.utils.split64High = 0,
                    jspb.utils.split64Low = 0) : (jspb.utils.split64High = 0,
                        jspb.utils.split64Low = 2147483648);
            else if (isNaN(e))
                jspb.utils.split64High = 0,
                    jspb.utils.split64Low = 2147483647;
            else if (e > jspb.BinaryConstants.FLOAT32_MAX)
                jspb.utils.split64High = 0,
                    jspb.utils.split64Low = (t << 31 | 2139095040) >>> 0;
            else if (e < jspb.BinaryConstants.FLOAT32_MIN)
                e = Math.round(e / Math.pow(2, -149)),
                    jspb.utils.split64High = 0,
                    jspb.utils.split64Low = (t << 31 | e) >>> 0;
            else {
                var r = Math.floor(Math.log(e) / Math.LN2);
                e *= Math.pow(2, -r),
                    16777216 <= (e = Math.round(e * jspb.BinaryConstants.TWO_TO_23)) && ++r,
                    jspb.utils.split64High = 0,
                    jspb.utils.split64Low = (t << 31 | r + 127 << 23 | 8388607 & e) >>> 0
            }
        }
        ,
        jspb.utils.splitFloat64 = function (e) {
            var t = 0 > e ? 1 : 0;
            if (0 === (e = t ? -e : e))
                jspb.utils.split64High = 0 < 1 / e ? 0 : 2147483648,
                    jspb.utils.split64Low = 0;
            else if (isNaN(e))
                jspb.utils.split64High = 2147483647,
                    jspb.utils.split64Low = 4294967295;
            else if (e > jspb.BinaryConstants.FLOAT64_MAX)
                jspb.utils.split64High = (t << 31 | 2146435072) >>> 0,
                    jspb.utils.split64Low = 0;
            else if (e < jspb.BinaryConstants.FLOAT64_MIN) {
                var r = e / Math.pow(2, -1074);
                e = r / jspb.BinaryConstants.TWO_TO_32,
                    jspb.utils.split64High = (t << 31 | e) >>> 0,
                    jspb.utils.split64Low = r >>> 0
            } else {
                var n = 0;
                if (2 <= (r = e))
                    for (; 2 <= r && 1023 > n;)
                        n++,
                            r /= 2;
                else
                    for (; 1 > r && -1022 < n;)
                        r *= 2,
                            n--;
                e = (r = e * Math.pow(2, -n)) * jspb.BinaryConstants.TWO_TO_20 & 1048575,
                    r = r * jspb.BinaryConstants.TWO_TO_52 >>> 0,
                    jspb.utils.split64High = (t << 31 | n + 1023 << 20 | e) >>> 0,
                    jspb.utils.split64Low = r
            }
        }
        ,
        jspb.utils.splitHash64 = function (e) {
            var t = e.charCodeAt(0)
                , r = e.charCodeAt(1)
                , n = e.charCodeAt(2)
                , o = e.charCodeAt(3)
                , i = e.charCodeAt(4)
                , a = e.charCodeAt(5)
                , s = e.charCodeAt(6);
            e = e.charCodeAt(7),
                jspb.utils.split64Low = t + (r << 8) + (n << 16) + (o << 24) >>> 0,
                jspb.utils.split64High = i + (a << 8) + (s << 16) + (e << 24) >>> 0
        }
        ,
        jspb.utils.joinUint64 = function (e, t) {
            return t * jspb.BinaryConstants.TWO_TO_32 + (e >>> 0)
        }
        ,
        jspb.utils.joinInt64 = function (e, t) {
            var r = 2147483648 & t;
            return r && (t = ~t >>> 0,
                0 == (e = 1 + ~e >>> 0) && (t = t + 1 >>> 0)),
                e = jspb.utils.joinUint64(e, t),
                r ? -e : e
        }
        ,
        jspb.utils.toZigzag64 = function (e, t, r) {
            var n = t >> 31;
            return r(e << 1 ^ n, (t << 1 | e >>> 31) ^ n)
        }
        ,
        jspb.utils.joinZigzag64 = function (e, t) {
            return jspb.utils.fromZigzag64(e, t, jspb.utils.joinInt64)
        }
        ,
        jspb.utils.fromZigzag64 = function (e, t, r) {
            var n = -(1 & e);
            return r((e >>> 1 | t << 31) ^ n, t >>> 1 ^ n)
        }
        ,
        jspb.utils.joinFloat32 = function (e, t) {
            t = 2 * (e >> 31) + 1;
            var r = e >>> 23 & 255;
            return e &= 8388607,
                255 == r ? e ? NaN : 1 / 0 * t : 0 == r ? t * Math.pow(2, -149) * e : t * Math.pow(2, r - 150) * (e + Math.pow(2, 23))
        }
        ,
        jspb.utils.joinFloat64 = function (e, t) {
            var r = 2 * (t >> 31) + 1
                , n = t >>> 20 & 2047;
            return e = jspb.BinaryConstants.TWO_TO_32 * (1048575 & t) + e,
                2047 == n ? e ? NaN : 1 / 0 * r : 0 == n ? r * Math.pow(2, -1074) * e : r * Math.pow(2, n - 1075) * (e + jspb.BinaryConstants.TWO_TO_52)
        }
        ,
        jspb.utils.joinHash64 = function (e, t) {
            return String.fromCharCode(e >>> 0 & 255, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255, t >>> 0 & 255, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255)
        }
        ,
        jspb.utils.DIGITS = "0123456789abcdef".split(""),
        jspb.utils.ZERO_CHAR_CODE_ = 48,
        jspb.utils.A_CHAR_CODE_ = 97,
        jspb.utils.joinUnsignedDecimalString = function (e, t) {
            function r(e, t) {
                return e = e ? String(e) : "",
                    t ? "0000000".slice(e.length) + e : e
            }
            if (2097151 >= t)
                return "" + jspb.utils.joinUint64(e, t);
            var n = (e >>> 24 | t << 8) >>> 0 & 16777215;
            return e = (16777215 & e) + 6777216 * n + 6710656 * (t = t >> 16 & 65535),
                n += 8147497 * t,
                t *= 2,
                1e7 <= e && (n += Math.floor(e / 1e7),
                    e %= 1e7),
                1e7 <= n && (t += Math.floor(n / 1e7),
                    n %= 1e7),
                r(t, 0) + r(n, t) + r(e, 1)
        }
        ,
        jspb.utils.joinSignedDecimalString = function (e, t) {
            var r = 2147483648 & t;
            return r && (t = ~t + (0 == (e = 1 + ~e >>> 0) ? 1 : 0) >>> 0),
                e = jspb.utils.joinUnsignedDecimalString(e, t),
                r ? "-" + e : e
        }
        ,
        jspb.utils.hash64ToDecimalString = function (e, t) {
            jspb.utils.splitHash64(e),
                e = jspb.utils.split64Low;
            var r = jspb.utils.split64High;
            return t ? jspb.utils.joinSignedDecimalString(e, r) : jspb.utils.joinUnsignedDecimalString(e, r)
        }
        ,
        jspb.utils.hash64ArrayToDecimalStrings = function (e, t) {
            for (var r = Array(e.length), n = 0; n < e.length; n++)
                r[n] = jspb.utils.hash64ToDecimalString(e[n], t);
            return r
        }
        ,
        jspb.utils.decimalStringToHash64 = function (e) {
            function t(e, t) {
                for (var r = 0; 8 > r && (1 !== e || 0 < t); r++)
                    t = e * n[r] + t,
                        n[r] = 255 & t,
                        t >>>= 8
            }
            jspb.asserts.assert(0 < e.length);
            var r = !1;
            "-" === e[0] && (r = !0,
                e = e.slice(1));
            for (var n = [0, 0, 0, 0, 0, 0, 0, 0], o = 0; o < e.length; o++)
                t(10, e.charCodeAt(o) - jspb.utils.ZERO_CHAR_CODE_);
            return r && (function () {
                for (var e = 0; 8 > e; e++)
                    n[e] = 255 & ~n[e]
            }(),
                t(1, 1)),
                goog.crypt.byteArrayToString(n)
        }
        ,
        jspb.utils.splitDecimalString = function (e) {
            jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e))
        }
        ,
        jspb.utils.toHexDigit_ = function (e) {
            return String.fromCharCode(10 > e ? jspb.utils.ZERO_CHAR_CODE_ + e : jspb.utils.A_CHAR_CODE_ - 10 + e)
        }
        ,
        jspb.utils.fromHexCharCode_ = function (e) {
            return e >= jspb.utils.A_CHAR_CODE_ ? e - jspb.utils.A_CHAR_CODE_ + 10 : e - jspb.utils.ZERO_CHAR_CODE_
        }
        ,
        jspb.utils.hash64ToHexString = function (e) {
            var t = Array(18);
            t[0] = "0",
                t[1] = "x";
            for (var r = 0; 8 > r; r++) {
                var n = e.charCodeAt(7 - r);
                t[2 * r + 2] = jspb.utils.toHexDigit_(n >> 4),
                    t[2 * r + 3] = jspb.utils.toHexDigit_(15 & n)
            }
            return t.join("")
        }
        ,
        jspb.utils.hexStringToHash64 = function (e) {
            e = e.toLowerCase(),
                jspb.asserts.assert(18 == e.length),
                jspb.asserts.assert("0" == e[0]),
                jspb.asserts.assert("x" == e[1]);
            for (var t = "", r = 0; 8 > r; r++) {
                var n = jspb.utils.fromHexCharCode_(e.charCodeAt(2 * r + 2))
                    , o = jspb.utils.fromHexCharCode_(e.charCodeAt(2 * r + 3));
                t = String.fromCharCode(16 * n + o) + t
            }
            return t
        }
        ,
        jspb.utils.hash64ToNumber = function (e, t) {
            jspb.utils.splitHash64(e),
                e = jspb.utils.split64Low;
            var r = jspb.utils.split64High;
            return t ? jspb.utils.joinInt64(e, r) : jspb.utils.joinUint64(e, r)
        }
        ,
        jspb.utils.numberToHash64 = function (e) {
            return jspb.utils.splitInt64(e),
                jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High)
        }
        ,
        jspb.utils.countVarints = function (e, t, r) {
            for (var n = 0, o = t; o < r; o++)
                n += e[o] >> 7;
            return r - t - n
        }
        ,
        jspb.utils.countVarintFields = function (e, t, r, n) {
            var o = 0;
            if (128 > (n = 8 * n + jspb.BinaryConstants.WireType.VARINT))
                for (; t < r && e[t++] == n;)
                    for (o++; ;) {
                        var i = e[t++];
                        if (0 == (128 & i))
                            break
                    }
            else
                for (; t < r;) {
                    for (i = n; 128 < i;) {
                        if (e[t] != (127 & i | 128))
                            return o;
                        t++,
                            i >>= 7
                    }
                    if (e[t++] != i)
                        break;
                    for (o++; 0 != (128 & (i = e[t++]));)
                        ;
                }
            return o
        }
        ,
        jspb.utils.countFixedFields_ = function (e, t, r, n, o) {
            var i = 0;
            if (128 > n)
                for (; t < r && e[t++] == n;)
                    i++,
                        t += o;
            else
                for (; t < r;) {
                    for (var a = n; 128 < a;) {
                        if (e[t++] != (127 & a | 128))
                            return i;
                        a >>= 7
                    }
                    if (e[t++] != a)
                        break;
                    i++,
                        t += o
                }
            return i
        }
        ,
        jspb.utils.countFixed32Fields = function (e, t, r, n) {
            return jspb.utils.countFixedFields_(e, t, r, 8 * n + jspb.BinaryConstants.WireType.FIXED32, 4)
        }
        ,
        jspb.utils.countFixed64Fields = function (e, t, r, n) {
            return jspb.utils.countFixedFields_(e, t, r, 8 * n + jspb.BinaryConstants.WireType.FIXED64, 8)
        }
        ,
        jspb.utils.countDelimitedFields = function (e, t, r, n) {
            var o = 0;
            for (n = 8 * n + jspb.BinaryConstants.WireType.DELIMITED; t < r;) {
                for (var i = n; 128 < i;) {
                    if (e[t++] != (127 & i | 128))
                        return o;
                    i >>= 7
                }
                if (e[t++] != i)
                    break;
                o++;
                for (var a = 0, s = 1; a += (127 & (i = e[t++])) * s,
                    s *= 128,
                    0 != (128 & i);)
                    ;
                t += a
            }
            return o
        }
        ,
        jspb.utils.debugBytesToTextFormat = function (e) {
            var t = '"';
            if (e) {
                e = jspb.utils.byteSourceToUint8Array(e);
                for (var r = 0; r < e.length; r++)
                    t += "\\x",
                        16 > e[r] && (t += "0"),
                        t += e[r].toString(16)
            }
            return t + '"'
        }
        ,
        jspb.utils.debugScalarToTextFormat = function (e) {
            return "string" == typeof e ? goog.string.quote(e) : e.toString()
        }
        ,
        jspb.utils.stringToByteArray = function (e) {
            for (var t = new Uint8Array(e.length), r = 0; r < e.length; r++) {
                var n = e.charCodeAt(r);
                if (255 < n)
                    throw Error("Conversion error: string contains codepoint outside of byte range");
                t[r] = n
            }
            return t
        }
        ,
        jspb.utils.byteSourceToUint8Array = function (e) {
            return e.constructor === Uint8Array ? e : e.constructor === ArrayBuffer || e.constructor === Array ? new Uint8Array(e) : e.constructor === String ? goog.crypt.base64.decodeStringToUint8Array(e) : e instanceof Uint8Array ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : (jspb.asserts.fail("Type not convertible to Uint8Array."),
                new Uint8Array(0))
        }
        ,
        jspb.BinaryDecoder = function (e, t, r) {
            this.bytes_ = null,
                this.cursor_ = this.end_ = this.start_ = 0,
                this.error_ = !1,
                e && this.setBlock(e, t, r)
        }
        ,
        jspb.BinaryDecoder.instanceCache_ = [],
        jspb.BinaryDecoder.alloc = function (e, t, r) {
            if (jspb.BinaryDecoder.instanceCache_.length) {
                var n = jspb.BinaryDecoder.instanceCache_.pop();
                return e && n.setBlock(e, t, r),
                    n
            }
            return new jspb.BinaryDecoder(e, t, r)
        }
        ,
        jspb.BinaryDecoder.prototype.free = function () {
            this.clear(),
                100 > jspb.BinaryDecoder.instanceCache_.length && jspb.BinaryDecoder.instanceCache_.push(this)
        }
        ,
        jspb.BinaryDecoder.prototype.clone = function () {
            return jspb.BinaryDecoder.alloc(this.bytes_, this.start_, this.end_ - this.start_)
        }
        ,
        jspb.BinaryDecoder.prototype.clear = function () {
            this.bytes_ = null,
                this.cursor_ = this.end_ = this.start_ = 0,
                this.error_ = !1
        }
        ,
        jspb.BinaryDecoder.prototype.getBuffer = function () {
            return this.bytes_
        }
        ,
        jspb.BinaryDecoder.prototype.setBlock = function (e, t, r) {
            this.bytes_ = jspb.utils.byteSourceToUint8Array(e),
                this.start_ = void 0 !== t ? t : 0,
                this.end_ = void 0 !== r ? this.start_ + r : this.bytes_.length,
                this.cursor_ = this.start_
        }
        ,
        jspb.BinaryDecoder.prototype.getEnd = function () {
            return this.end_
        }
        ,
        jspb.BinaryDecoder.prototype.setEnd = function (e) {
            this.end_ = e
        }
        ,
        jspb.BinaryDecoder.prototype.reset = function () {
            this.cursor_ = this.start_
        }
        ,
        jspb.BinaryDecoder.prototype.getCursor = function () {
            return this.cursor_
        }
        ,
        jspb.BinaryDecoder.prototype.setCursor = function (e) {
            this.cursor_ = e
        }
        ,
        jspb.BinaryDecoder.prototype.advance = function (e) {
            this.cursor_ += e,
                jspb.asserts.assert(this.cursor_ <= this.end_)
        }
        ,
        jspb.BinaryDecoder.prototype.atEnd = function () {
            return this.cursor_ == this.end_
        }
        ,
        jspb.BinaryDecoder.prototype.pastEnd = function () {
            return this.cursor_ > this.end_
        }
        ,
        jspb.BinaryDecoder.prototype.getError = function () {
            return this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_
        }
        ,
        jspb.BinaryDecoder.prototype.readSplitVarint64 = function (e) {
            for (var t = 128, r = 0, n = 0, o = 0; 4 > o && 128 <= t; o++)
                r |= (127 & (t = this.bytes_[this.cursor_++])) << 7 * o;
            if (128 <= t && (r |= (127 & (t = this.bytes_[this.cursor_++])) << 28,
                n |= (127 & t) >> 4),
                128 <= t)
                for (o = 0; 5 > o && 128 <= t; o++)
                    n |= (127 & (t = this.bytes_[this.cursor_++])) << 7 * o + 3;
            if (128 > t)
                return e(r >>> 0, n >>> 0);
            jspb.asserts.fail("Failed to read varint, encoding is invalid."),
                this.error_ = !0
        }
        ,
        jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function (e) {
            return this.readSplitVarint64((function (t, r) {
                return jspb.utils.fromZigzag64(t, r, e)
            }
            ))
        }
        ,
        jspb.BinaryDecoder.prototype.readSplitFixed64 = function (e) {
            var t = this.bytes_
                , r = this.cursor_;
            this.cursor_ += 8;
            for (var n = 0, o = 0, i = r + 7; i >= r; i--)
                n = n << 8 | t[i],
                    o = o << 8 | t[i + 4];
            return e(n, o)
        }
        ,
        jspb.BinaryDecoder.prototype.skipVarint = function () {
            for (; 128 & this.bytes_[this.cursor_];)
                this.cursor_++;
            this.cursor_++
        }
        ,
        jspb.BinaryDecoder.prototype.unskipVarint = function (e) {
            for (; 128 < e;)
                this.cursor_--,
                    e >>>= 7;
            this.cursor_--
        }
        ,
        jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function () {
            var e = this.bytes_
                , t = e[this.cursor_ + 0]
                , r = 127 & t;
            return 128 > t ? (this.cursor_ += 1,
                jspb.asserts.assert(this.cursor_ <= this.end_),
                r) : (r |= (127 & (t = e[this.cursor_ + 1])) << 7,
                    128 > t ? (this.cursor_ += 2,
                        jspb.asserts.assert(this.cursor_ <= this.end_),
                        r) : (r |= (127 & (t = e[this.cursor_ + 2])) << 14,
                            128 > t ? (this.cursor_ += 3,
                                jspb.asserts.assert(this.cursor_ <= this.end_),
                                r) : (r |= (127 & (t = e[this.cursor_ + 3])) << 21,
                                    128 > t ? (this.cursor_ += 4,
                                        jspb.asserts.assert(this.cursor_ <= this.end_),
                                        r) : (r |= (15 & (t = e[this.cursor_ + 4])) << 28,
                                            128 > t ? (this.cursor_ += 5,
                                                jspb.asserts.assert(this.cursor_ <= this.end_),
                                                r >>> 0) : (this.cursor_ += 5,
                                                    128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && jspb.asserts.assert(!1),
                                                    jspb.asserts.assert(this.cursor_ <= this.end_),
                                                    r)))))
        }
        ,
        jspb.BinaryDecoder.prototype.readSignedVarint32 = function () {
            return ~~this.readUnsignedVarint32()
        }
        ,
        jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function () {
            return this.readUnsignedVarint32().toString()
        }
        ,
        jspb.BinaryDecoder.prototype.readSignedVarint32String = function () {
            return this.readSignedVarint32().toString()
        }
        ,
        jspb.BinaryDecoder.prototype.readZigzagVarint32 = function () {
            var e = this.readUnsignedVarint32();
            return e >>> 1 ^ -(1 & e)
        }
        ,
        jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function () {
            return this.readSplitVarint64(jspb.utils.joinUint64)
        }
        ,
        jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function () {
            return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString)
        }
        ,
        jspb.BinaryDecoder.prototype.readSignedVarint64 = function () {
            return this.readSplitVarint64(jspb.utils.joinInt64)
        }
        ,
        jspb.BinaryDecoder.prototype.readSignedVarint64String = function () {
            return this.readSplitVarint64(jspb.utils.joinSignedDecimalString)
        }
        ,
        jspb.BinaryDecoder.prototype.readZigzagVarint64 = function () {
            return this.readSplitVarint64(jspb.utils.joinZigzag64)
        }
        ,
        jspb.BinaryDecoder.prototype.readZigzagVarintHash64 = function () {
            return this.readSplitZigzagVarint64(jspb.utils.joinHash64)
        }
        ,
        jspb.BinaryDecoder.prototype.readZigzagVarint64String = function () {
            return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString)
        }
        ,
        jspb.BinaryDecoder.prototype.readUint8 = function () {
            var e = this.bytes_[this.cursor_ + 0];
            return this.cursor_ += 1,
                jspb.asserts.assert(this.cursor_ <= this.end_),
                e
        }
        ,
        jspb.BinaryDecoder.prototype.readUint16 = function () {
            var e = this.bytes_[this.cursor_ + 0]
                , t = this.bytes_[this.cursor_ + 1];
            return this.cursor_ += 2,
                jspb.asserts.assert(this.cursor_ <= this.end_),
                e << 0 | t << 8
        }
        ,
        jspb.BinaryDecoder.prototype.readUint32 = function () {
            var e = this.bytes_[this.cursor_ + 0]
                , t = this.bytes_[this.cursor_ + 1]
                , r = this.bytes_[this.cursor_ + 2]
                , n = this.bytes_[this.cursor_ + 3];
            return this.cursor_ += 4,
                jspb.asserts.assert(this.cursor_ <= this.end_),
                (e << 0 | t << 8 | r << 16 | n << 24) >>> 0
        }
        ,
        jspb.BinaryDecoder.prototype.readUint64 = function () {
            var e = this.readUint32()
                , t = this.readUint32();
            return jspb.utils.joinUint64(e, t)
        }
        ,
        jspb.BinaryDecoder.prototype.readUint64String = function () {
            var e = this.readUint32()
                , t = this.readUint32();
            return jspb.utils.joinUnsignedDecimalString(e, t)
        }
        ,
        jspb.BinaryDecoder.prototype.readInt8 = function () {
            var e = this.bytes_[this.cursor_ + 0];
            return this.cursor_ += 1,
                jspb.asserts.assert(this.cursor_ <= this.end_),
                e << 24 >> 24
        }
        ,
        jspb.BinaryDecoder.prototype.readInt16 = function () {
            var e = this.bytes_[this.cursor_ + 0]
                , t = this.bytes_[this.cursor_ + 1];
            return this.cursor_ += 2,
                jspb.asserts.assert(this.cursor_ <= this.end_),
                (e << 0 | t << 8) << 16 >> 16
        }
        ,
        jspb.BinaryDecoder.prototype.readInt32 = function () {
            var e = this.bytes_[this.cursor_ + 0]
                , t = this.bytes_[this.cursor_ + 1]
                , r = this.bytes_[this.cursor_ + 2]
                , n = this.bytes_[this.cursor_ + 3];
            return this.cursor_ += 4,
                jspb.asserts.assert(this.cursor_ <= this.end_),
                e << 0 | t << 8 | r << 16 | n << 24
        }
        ,
        jspb.BinaryDecoder.prototype.readInt64 = function () {
            var e = this.readUint32()
                , t = this.readUint32();
            return jspb.utils.joinInt64(e, t)
        }
        ,
        jspb.BinaryDecoder.prototype.readInt64String = function () {
            var e = this.readUint32()
                , t = this.readUint32();
            return jspb.utils.joinSignedDecimalString(e, t)
        }
        ,
        jspb.BinaryDecoder.prototype.readFloat = function () {
            var e = this.readUint32();
            return jspb.utils.joinFloat32(e, 0)
        }
        ,
        jspb.BinaryDecoder.prototype.readDouble = function () {
            var e = this.readUint32()
                , t = this.readUint32();
            return jspb.utils.joinFloat64(e, t)
        }
        ,
        jspb.BinaryDecoder.prototype.readBool = function () {
            return !!this.bytes_[this.cursor_++]
        }
        ,
        jspb.BinaryDecoder.prototype.readEnum = function () {
            return this.readSignedVarint32()
        }
        ,
        jspb.BinaryDecoder.prototype.readString = function (e) {
            var t = this.bytes_
                , r = this.cursor_;
            e = r + e;
            for (var n = [], o = ""; r < e;) {
                var i = t[r++];
                if (128 > i)
                    n.push(i);
                else {
                    if (192 > i)
                        continue;
                    if (224 > i) {
                        var a = t[r++];
                        n.push((31 & i) << 6 | 63 & a)
                    } else if (240 > i) {
                        a = t[r++];
                        var s = t[r++];
                        n.push((15 & i) << 12 | (63 & a) << 6 | 63 & s)
                    } else if (248 > i) {
                        i = (7 & i) << 18 | (63 & (a = t[r++])) << 12 | (63 & (s = t[r++])) << 6 | 63 & t[r++],
                            i -= 65536,
                            n.push(55296 + (i >> 10 & 1023), 56320 + (1023 & i))
                    }
                }
                8192 <= n.length && (o += String.fromCharCode.apply(null, n),
                    n.length = 0)
            }
            return o += goog.crypt.byteArrayToString(n),
                this.cursor_ = r,
                o
        }
        ,
        jspb.BinaryDecoder.prototype.readStringWithLength = function () {
            var e = this.readUnsignedVarint32();
            return this.readString(e)
        }
        ,
        jspb.BinaryDecoder.prototype.readBytes = function (e) {
            if (0 > e || this.cursor_ + e > this.bytes_.length)
                return this.error_ = !0,
                    jspb.asserts.fail("Invalid byte length!"),
                    new Uint8Array(0);
            var t = this.bytes_.subarray(this.cursor_, this.cursor_ + e);
            return this.cursor_ += e,
                jspb.asserts.assert(this.cursor_ <= this.end_),
                t
        }
        ,
        jspb.BinaryDecoder.prototype.readVarintHash64 = function () {
            return this.readSplitVarint64(jspb.utils.joinHash64)
        }
        ,
        jspb.BinaryDecoder.prototype.readFixedHash64 = function () {
            var e = this.bytes_
                , t = this.cursor_
                , r = e[t + 0]
                , n = e[t + 1]
                , o = e[t + 2]
                , i = e[t + 3]
                , a = e[t + 4]
                , s = e[t + 5]
                , u = e[t + 6];
            return e = e[t + 7],
                this.cursor_ += 8,
                String.fromCharCode(r, n, o, i, a, s, u, e)
        }
        ,
        jspb.BinaryReader = function (e, t, r) {
            this.decoder_ = jspb.BinaryDecoder.alloc(e, t, r),
                this.fieldCursor_ = this.decoder_.getCursor(),
                this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER,
                this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID,
                this.error_ = !1,
                this.readCallbacks_ = null
        }
        ,
        jspb.BinaryReader.instanceCache_ = [],
        jspb.BinaryReader.alloc = function (e, t, r) {
            if (jspb.BinaryReader.instanceCache_.length) {
                var n = jspb.BinaryReader.instanceCache_.pop();
                return e && n.decoder_.setBlock(e, t, r),
                    n
            }
            return new jspb.BinaryReader(e, t, r)
        }
        ,
        jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc,
        jspb.BinaryReader.prototype.free = function () {
            this.decoder_.clear(),
                this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER,
                this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID,
                this.error_ = !1,
                this.readCallbacks_ = null,
                100 > jspb.BinaryReader.instanceCache_.length && jspb.BinaryReader.instanceCache_.push(this)
        }
        ,
        jspb.BinaryReader.prototype.getFieldCursor = function () {
            return this.fieldCursor_
        }
        ,
        jspb.BinaryReader.prototype.getCursor = function () {
            return this.decoder_.getCursor()
        }
        ,
        jspb.BinaryReader.prototype.getBuffer = function () {
            return this.decoder_.getBuffer()
        }
        ,
        jspb.BinaryReader.prototype.getFieldNumber = function () {
            return this.nextField_
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "getFieldNumber", jspb.BinaryReader.prototype.getFieldNumber),
        jspb.BinaryReader.prototype.getWireType = function () {
            return this.nextWireType_
        }
        ,
        jspb.BinaryReader.prototype.isDelimited = function () {
            return this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "isDelimited", jspb.BinaryReader.prototype.isDelimited),
        jspb.BinaryReader.prototype.isEndGroup = function () {
            return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "isEndGroup", jspb.BinaryReader.prototype.isEndGroup),
        jspb.BinaryReader.prototype.getError = function () {
            return this.error_ || this.decoder_.getError()
        }
        ,
        jspb.BinaryReader.prototype.setBlock = function (e, t, r) {
            this.decoder_.setBlock(e, t, r),
                this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER,
                this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID
        }
        ,
        jspb.BinaryReader.prototype.reset = function () {
            this.decoder_.reset(),
                this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER,
                this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID
        }
        ,
        jspb.BinaryReader.prototype.advance = function (e) {
            this.decoder_.advance(e)
        }
        ,
        jspb.BinaryReader.prototype.nextField = function () {
            if (this.decoder_.atEnd())
                return !1;
            if (this.getError())
                return jspb.asserts.fail("Decoder hit an error"),
                    !1;
            this.fieldCursor_ = this.decoder_.getCursor();
            var e = this.decoder_.readUnsignedVarint32()
                , t = e >>> 3;
            return (e &= 7) != jspb.BinaryConstants.WireType.VARINT && e != jspb.BinaryConstants.WireType.FIXED32 && e != jspb.BinaryConstants.WireType.FIXED64 && e != jspb.BinaryConstants.WireType.DELIMITED && e != jspb.BinaryConstants.WireType.START_GROUP && e != jspb.BinaryConstants.WireType.END_GROUP ? (jspb.asserts.fail("Invalid wire type: %s (at position %s)", e, this.fieldCursor_),
                this.error_ = !0,
                !1) : (this.nextField_ = t,
                    this.nextWireType_ = e,
                    !0)
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "nextField", jspb.BinaryReader.prototype.nextField),
        jspb.BinaryReader.prototype.unskipHeader = function () {
            this.decoder_.unskipVarint(this.nextField_ << 3 | this.nextWireType_)
        }
        ,
        jspb.BinaryReader.prototype.skipMatchingFields = function () {
            var e = this.nextField_;
            for (this.unskipHeader(); this.nextField() && this.getFieldNumber() == e;)
                this.skipField();
            this.decoder_.atEnd() || this.unskipHeader()
        }
        ,
        jspb.BinaryReader.prototype.skipVarintField = function () {
            this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT ? (jspb.asserts.fail("Invalid wire type for skipVarintField"),
                this.skipField()) : this.decoder_.skipVarint()
        }
        ,
        jspb.BinaryReader.prototype.skipDelimitedField = function () {
            if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED)
                jspb.asserts.fail("Invalid wire type for skipDelimitedField"),
                    this.skipField();
            else {
                var e = this.decoder_.readUnsignedVarint32();
                this.decoder_.advance(e)
            }
        }
        ,
        jspb.BinaryReader.prototype.skipFixed32Field = function () {
            this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32 ? (jspb.asserts.fail("Invalid wire type for skipFixed32Field"),
                this.skipField()) : this.decoder_.advance(4)
        }
        ,
        jspb.BinaryReader.prototype.skipFixed64Field = function () {
            this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64 ? (jspb.asserts.fail("Invalid wire type for skipFixed64Field"),
                this.skipField()) : this.decoder_.advance(8)
        }
        ,
        jspb.BinaryReader.prototype.skipGroup = function () {
            for (var e = this.nextField_; ;) {
                if (!this.nextField()) {
                    jspb.asserts.fail("Unmatched start-group tag: stream EOF"),
                        this.error_ = !0;
                    break
                }
                if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
                    this.nextField_ != e && (jspb.asserts.fail("Unmatched end-group tag"),
                        this.error_ = !0);
                    break
                }
                this.skipField()
            }
        }
        ,
        jspb.BinaryReader.prototype.skipField = function () {
            switch (this.nextWireType_) {
                case jspb.BinaryConstants.WireType.VARINT:
                    this.skipVarintField();
                    break;
                case jspb.BinaryConstants.WireType.FIXED64:
                    this.skipFixed64Field();
                    break;
                case jspb.BinaryConstants.WireType.DELIMITED:
                    this.skipDelimitedField();
                    break;
                case jspb.BinaryConstants.WireType.FIXED32:
                    this.skipFixed32Field();
                    break;
                case jspb.BinaryConstants.WireType.START_GROUP:
                    this.skipGroup();
                    break;
                default:
                    jspb.asserts.fail("Invalid wire encoding for field.")
            }
        }
        ,
        jspb.BinaryReader.prototype.registerReadCallback = function (e, t) {
            null === this.readCallbacks_ && (this.readCallbacks_ = {}),
                jspb.asserts.assert(!this.readCallbacks_[e]),
                this.readCallbacks_[e] = t
        }
        ,
        jspb.BinaryReader.prototype.runReadCallback = function (e) {
            return jspb.asserts.assert(null !== this.readCallbacks_),
                e = this.readCallbacks_[e],
                jspb.asserts.assert(e),
                e(this)
        }
        ,
        jspb.BinaryReader.prototype.readAny = function (e) {
            this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(e);
            var t = jspb.BinaryConstants.FieldType;
            switch (e) {
                case t.DOUBLE:
                    return this.readDouble();
                case t.FLOAT:
                    return this.readFloat();
                case t.INT64:
                    return this.readInt64();
                case t.UINT64:
                    return this.readUint64();
                case t.INT32:
                    return this.readInt32();
                case t.FIXED64:
                    return this.readFixed64();
                case t.FIXED32:
                    return this.readFixed32();
                case t.BOOL:
                    return this.readBool();
                case t.STRING:
                    return this.readString();
                case t.GROUP:
                    jspb.asserts.fail("Group field type not supported in readAny()");
                case t.MESSAGE:
                    jspb.asserts.fail("Message field type not supported in readAny()");
                case t.BYTES:
                    return this.readBytes();
                case t.UINT32:
                    return this.readUint32();
                case t.ENUM:
                    return this.readEnum();
                case t.SFIXED32:
                    return this.readSfixed32();
                case t.SFIXED64:
                    return this.readSfixed64();
                case t.SINT32:
                    return this.readSint32();
                case t.SINT64:
                    return this.readSint64();
                case t.FHASH64:
                    return this.readFixedHash64();
                case t.VHASH64:
                    return this.readVarintHash64();
                default:
                    jspb.asserts.fail("Invalid field type in readAny()")
            }
            return 0
        }
        ,
        jspb.BinaryReader.prototype.readMessage = function (e, t) {
            jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
            var r = this.decoder_.getEnd()
                , n = this.decoder_.readUnsignedVarint32();
            n = this.decoder_.getCursor() + n,
                this.decoder_.setEnd(n),
                t(e, this),
                this.decoder_.setCursor(n),
                this.decoder_.setEnd(r)
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readMessage", jspb.BinaryReader.prototype.readMessage),
        jspb.BinaryReader.prototype.readGroup = function (e, t, r) {
            jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP),
                jspb.asserts.assert(this.nextField_ == e),
                r(t, this),
                this.error_ || this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP || (jspb.asserts.fail("Group submessage did not end with an END_GROUP tag"),
                    this.error_ = !0)
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readGroup", jspb.BinaryReader.prototype.readGroup),
        jspb.BinaryReader.prototype.getFieldDecoder = function () {
            jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
            var e = this.decoder_.readUnsignedVarint32()
                , t = this.decoder_.getCursor()
                , r = t + e;
            return e = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), t, e),
                this.decoder_.setCursor(r),
                e
        }
        ,
        jspb.BinaryReader.prototype.readInt32 = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
                this.decoder_.readSignedVarint32()
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readInt32", jspb.BinaryReader.prototype.readInt32),
        jspb.BinaryReader.prototype.readInt32String = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
                this.decoder_.readSignedVarint32String()
        }
        ,
        jspb.BinaryReader.prototype.readInt64 = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
                this.decoder_.readSignedVarint64()
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readInt64", jspb.BinaryReader.prototype.readInt64),
        jspb.BinaryReader.prototype.readInt64String = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
                this.decoder_.readSignedVarint64String()
        }
        ,
        jspb.BinaryReader.prototype.readUint32 = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
                this.decoder_.readUnsignedVarint32()
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readUint32", jspb.BinaryReader.prototype.readUint32),
        jspb.BinaryReader.prototype.readUint32String = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
                this.decoder_.readUnsignedVarint32String()
        }
        ,
        jspb.BinaryReader.prototype.readUint64 = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
                this.decoder_.readUnsignedVarint64()
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readUint64", jspb.BinaryReader.prototype.readUint64),
        jspb.BinaryReader.prototype.readUint64String = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
                this.decoder_.readUnsignedVarint64String()
        }
        ,
        jspb.BinaryReader.prototype.readSint32 = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
                this.decoder_.readZigzagVarint32()
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readSint32", jspb.BinaryReader.prototype.readSint32),
        jspb.BinaryReader.prototype.readSint64 = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
                this.decoder_.readZigzagVarint64()
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readSint64", jspb.BinaryReader.prototype.readSint64),
        jspb.BinaryReader.prototype.readSint64String = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
                this.decoder_.readZigzagVarint64String()
        }
        ,
        jspb.BinaryReader.prototype.readFixed32 = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32),
                this.decoder_.readUint32()
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readFixed32", jspb.BinaryReader.prototype.readFixed32),
        jspb.BinaryReader.prototype.readFixed64 = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
                this.decoder_.readUint64()
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readFixed64", jspb.BinaryReader.prototype.readFixed64),
        jspb.BinaryReader.prototype.readFixed64String = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
                this.decoder_.readUint64String()
        }
        ,
        jspb.BinaryReader.prototype.readSfixed32 = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32),
                this.decoder_.readInt32()
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readSfixed32", jspb.BinaryReader.prototype.readSfixed32),
        jspb.BinaryReader.prototype.readSfixed32String = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32),
                this.decoder_.readInt32().toString()
        }
        ,
        jspb.BinaryReader.prototype.readSfixed64 = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
                this.decoder_.readInt64()
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readSfixed64", jspb.BinaryReader.prototype.readSfixed64),
        jspb.BinaryReader.prototype.readSfixed64String = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
                this.decoder_.readInt64String()
        }
        ,
        jspb.BinaryReader.prototype.readFloat = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32),
                this.decoder_.readFloat()
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readFloat", jspb.BinaryReader.prototype.readFloat),
        jspb.BinaryReader.prototype.readDouble = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
                this.decoder_.readDouble()
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readDouble", jspb.BinaryReader.prototype.readDouble),
        jspb.BinaryReader.prototype.readBool = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
                !!this.decoder_.readUnsignedVarint32()
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readBool", jspb.BinaryReader.prototype.readBool),
        jspb.BinaryReader.prototype.readEnum = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
                this.decoder_.readSignedVarint64()
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readEnum", jspb.BinaryReader.prototype.readEnum),
        jspb.BinaryReader.prototype.readString = function () {
            console.log(this.nextWireType_ , "  ", jspb.BinaryConstants.WireType.DELIMITED)
            // console.log( )
            jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
            var e = this.decoder_.readUnsignedVarint32();
            // console.log(e)
            return this.decoder_.readString(e)
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readString", jspb.BinaryReader.prototype.readString),
        jspb.BinaryReader.prototype.readBytes = function () {
            jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
            var e = this.decoder_.readUnsignedVarint32();
            return this.decoder_.readBytes(e)
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readBytes", jspb.BinaryReader.prototype.readBytes),
        jspb.BinaryReader.prototype.readVarintHash64 = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
                this.decoder_.readVarintHash64()
        }
        ,
        jspb.BinaryReader.prototype.readSintHash64 = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
                this.decoder_.readZigzagVarintHash64()
        }
        ,
        jspb.BinaryReader.prototype.readSplitVarint64 = function (e) {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
                this.decoder_.readSplitVarint64(e)
        }
        ,
        jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function (e) {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
                this.decoder_.readSplitVarint64((function (t, r) {
                    return jspb.utils.fromZigzag64(t, r, e)
                }
                ))
        }
        ,
        jspb.BinaryReader.prototype.readFixedHash64 = function () {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
                this.decoder_.readFixedHash64()
        }
        ,
        jspb.BinaryReader.prototype.readSplitFixed64 = function (e) {
            return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
                this.decoder_.readSplitFixed64(e)
        }
        ,
        jspb.BinaryReader.prototype.readPackedField_ = function (e) {
            jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
            var t = this.decoder_.readUnsignedVarint32();
            t = this.decoder_.getCursor() + t;
            for (var r = []; this.decoder_.getCursor() < t;)
                r.push(e.call(this.decoder_));
            return r
        }
        ,
        jspb.BinaryReader.prototype.readPackedInt32 = function () {
            return this.readPackedField_(this.decoder_.readSignedVarint32)
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readPackedInt32", jspb.BinaryReader.prototype.readPackedInt32),
        jspb.BinaryReader.prototype.readPackedInt32String = function () {
            return this.readPackedField_(this.decoder_.readSignedVarint32String)
        }
        ,
        jspb.BinaryReader.prototype.readPackedInt64 = function () {
            return this.readPackedField_(this.decoder_.readSignedVarint64)
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readPackedInt64", jspb.BinaryReader.prototype.readPackedInt64),
        jspb.BinaryReader.prototype.readPackedInt64String = function () {
            return this.readPackedField_(this.decoder_.readSignedVarint64String)
        }
        ,
        jspb.BinaryReader.prototype.readPackedUint32 = function () {
            return this.readPackedField_(this.decoder_.readUnsignedVarint32)
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readPackedUint32", jspb.BinaryReader.prototype.readPackedUint32),
        jspb.BinaryReader.prototype.readPackedUint32String = function () {
            return this.readPackedField_(this.decoder_.readUnsignedVarint32String)
        }
        ,
        jspb.BinaryReader.prototype.readPackedUint64 = function () {
            return this.readPackedField_(this.decoder_.readUnsignedVarint64)
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readPackedUint64", jspb.BinaryReader.prototype.readPackedUint64),
        jspb.BinaryReader.prototype.readPackedUint64String = function () {
            return this.readPackedField_(this.decoder_.readUnsignedVarint64String)
        }
        ,
        jspb.BinaryReader.prototype.readPackedSint32 = function () {
            return this.readPackedField_(this.decoder_.readZigzagVarint32)
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSint32", jspb.BinaryReader.prototype.readPackedSint32),
        jspb.BinaryReader.prototype.readPackedSint64 = function () {
            return this.readPackedField_(this.decoder_.readZigzagVarint64)
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSint64", jspb.BinaryReader.prototype.readPackedSint64),
        jspb.BinaryReader.prototype.readPackedSint64String = function () {
            return this.readPackedField_(this.decoder_.readZigzagVarint64String)
        }
        ,
        jspb.BinaryReader.prototype.readPackedFixed32 = function () {
            return this.readPackedField_(this.decoder_.readUint32)
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readPackedFixed32", jspb.BinaryReader.prototype.readPackedFixed32),
        jspb.BinaryReader.prototype.readPackedFixed64 = function () {
            return this.readPackedField_(this.decoder_.readUint64)
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readPackedFixed64", jspb.BinaryReader.prototype.readPackedFixed64),
        jspb.BinaryReader.prototype.readPackedFixed64String = function () {
            return this.readPackedField_(this.decoder_.readUint64String)
        }
        ,
        jspb.BinaryReader.prototype.readPackedSfixed32 = function () {
            return this.readPackedField_(this.decoder_.readInt32)
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSfixed32", jspb.BinaryReader.prototype.readPackedSfixed32),
        jspb.BinaryReader.prototype.readPackedSfixed64 = function () {
            return this.readPackedField_(this.decoder_.readInt64)
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSfixed64", jspb.BinaryReader.prototype.readPackedSfixed64),
        jspb.BinaryReader.prototype.readPackedSfixed64String = function () {
            return this.readPackedField_(this.decoder_.readInt64String)
        }
        ,
        jspb.BinaryReader.prototype.readPackedFloat = function () {
            return this.readPackedField_(this.decoder_.readFloat)
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readPackedFloat", jspb.BinaryReader.prototype.readPackedFloat),
        jspb.BinaryReader.prototype.readPackedDouble = function () {
            return this.readPackedField_(this.decoder_.readDouble)
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readPackedDouble", jspb.BinaryReader.prototype.readPackedDouble),
        jspb.BinaryReader.prototype.readPackedBool = function () {
            return this.readPackedField_(this.decoder_.readBool)
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readPackedBool", jspb.BinaryReader.prototype.readPackedBool),
        jspb.BinaryReader.prototype.readPackedEnum = function () {
            return this.readPackedField_(this.decoder_.readEnum)
        }
        ,
        goog.exportProperty(jspb.BinaryReader.prototype, "readPackedEnum", jspb.BinaryReader.prototype.readPackedEnum),
        jspb.BinaryReader.prototype.readPackedVarintHash64 = function () {
            return this.readPackedField_(this.decoder_.readVarintHash64)
        }
        ,
        jspb.BinaryReader.prototype.readPackedFixedHash64 = function () {
            return this.readPackedField_(this.decoder_.readFixedHash64)
        }
        ,
        jspb.BinaryEncoder = function () {
            this.buffer_ = []
        }
        ,
        jspb.BinaryEncoder.prototype.length = function () {
            return this.buffer_.length
        }
        ,
        jspb.BinaryEncoder.prototype.end = function () {
            var e = this.buffer_;
            return this.buffer_ = [],
                e
        }
        ,
        jspb.BinaryEncoder.prototype.writeSplitVarint64 = function (e, t) {
            for (jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(t == Math.floor(t)),
                jspb.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
                jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32); 0 < t || 127 < e;)
                this.buffer_.push(127 & e | 128),
                    e = (e >>> 7 | t << 25) >>> 0,
                    t >>>= 7;
            this.buffer_.push(e)
        }
        ,
        jspb.BinaryEncoder.prototype.writeSplitFixed64 = function (e, t) {
            jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(t == Math.floor(t)),
                jspb.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
                jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
                this.writeUint32(e),
                this.writeUint32(t)
        }
        ,
        jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function (e) {
            for (jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32); 127 < e;)
                this.buffer_.push(127 & e | 128),
                    e >>>= 7;
            this.buffer_.push(e)
        }
        ,
        jspb.BinaryEncoder.prototype.writeSignedVarint32 = function (e) {
            if (jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31),
                0 <= e)
                this.writeUnsignedVarint32(e);
            else {
                for (var t = 0; 9 > t; t++)
                    this.buffer_.push(127 & e | 128),
                        e >>= 7;
                this.buffer_.push(1)
            }
        }
        ,
        jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function (e) {
            jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64),
                jspb.utils.splitInt64(e),
                this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
        }
        ,
        jspb.BinaryEncoder.prototype.writeSignedVarint64 = function (e) {
            jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63),
                jspb.utils.splitInt64(e),
                this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
        }
        ,
        jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function (e) {
            jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31),
                this.writeUnsignedVarint32((e << 1 ^ e >> 31) >>> 0)
        }
        ,
        jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function (e) {
            jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63),
                jspb.utils.splitZigzag64(e),
                this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
        }
        ,
        jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function (e) {
            this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(e))
        }
        ,
        jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function (e) {
            var t = this;
            jspb.utils.splitHash64(e),
                jspb.utils.toZigzag64(jspb.utils.split64Low, jspb.utils.split64High, (function (e, r) {
                    t.writeSplitVarint64(e >>> 0, r >>> 0)
                }
                ))
        }
        ,
        jspb.BinaryEncoder.prototype.writeUint8 = function (e) {
            jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(0 <= e && 256 > e),
                this.buffer_.push(e >>> 0 & 255)
        }
        ,
        jspb.BinaryEncoder.prototype.writeUint16 = function (e) {
            jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(0 <= e && 65536 > e),
                this.buffer_.push(e >>> 0 & 255),
                this.buffer_.push(e >>> 8 & 255)
        }
        ,
        jspb.BinaryEncoder.prototype.writeUint32 = function (e) {
            jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
                this.buffer_.push(e >>> 0 & 255),
                this.buffer_.push(e >>> 8 & 255),
                this.buffer_.push(e >>> 16 & 255),
                this.buffer_.push(e >>> 24 & 255)
        }
        ,
        jspb.BinaryEncoder.prototype.writeUint64 = function (e) {
            jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64),
                jspb.utils.splitUint64(e),
                this.writeUint32(jspb.utils.split64Low),
                this.writeUint32(jspb.utils.split64High)
        }
        ,
        jspb.BinaryEncoder.prototype.writeInt8 = function (e) {
            jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(-128 <= e && 128 > e),
                this.buffer_.push(e >>> 0 & 255)
        }
        ,
        jspb.BinaryEncoder.prototype.writeInt16 = function (e) {
            jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(-32768 <= e && 32768 > e),
                this.buffer_.push(e >>> 0 & 255),
                this.buffer_.push(e >>> 8 & 255)
        }
        ,
        jspb.BinaryEncoder.prototype.writeInt32 = function (e) {
            jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31),
                this.buffer_.push(e >>> 0 & 255),
                this.buffer_.push(e >>> 8 & 255),
                this.buffer_.push(e >>> 16 & 255),
                this.buffer_.push(e >>> 24 & 255)
        }
        ,
        jspb.BinaryEncoder.prototype.writeInt64 = function (e) {
            jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63),
                jspb.utils.splitInt64(e),
                this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High)
        }
        ,
        jspb.BinaryEncoder.prototype.writeInt64String = function (e) {
            jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(+e >= -jspb.BinaryConstants.TWO_TO_63 && +e < jspb.BinaryConstants.TWO_TO_63),
                jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e)),
                this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High)
        }
        ,
        jspb.BinaryEncoder.prototype.writeFloat = function (e) {
            jspb.asserts.assert(1 / 0 === e || -1 / 0 === e || isNaN(e) || e >= -jspb.BinaryConstants.FLOAT32_MAX && e <= jspb.BinaryConstants.FLOAT32_MAX),
                jspb.utils.splitFloat32(e),
                this.writeUint32(jspb.utils.split64Low)
        }
        ,
        jspb.BinaryEncoder.prototype.writeDouble = function (e) {
            jspb.asserts.assert(1 / 0 === e || -1 / 0 === e || isNaN(e) || e >= -jspb.BinaryConstants.FLOAT64_MAX && e <= jspb.BinaryConstants.FLOAT64_MAX),
                jspb.utils.splitFloat64(e),
                this.writeUint32(jspb.utils.split64Low),
                this.writeUint32(jspb.utils.split64High)
        }
        ,
        jspb.BinaryEncoder.prototype.writeBool = function (e) {
            jspb.asserts.assert("boolean" == typeof e || "number" == typeof e),
                this.buffer_.push(e ? 1 : 0)
        }
        ,
        jspb.BinaryEncoder.prototype.writeEnum = function (e) {
            jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31),
                this.writeSignedVarint32(e)
        }
        ,
        jspb.BinaryEncoder.prototype.writeBytes = function (e) {
            this.buffer_.push.apply(this.buffer_, e)
        }
        ,
        jspb.BinaryEncoder.prototype.writeVarintHash64 = function (e) {
            jspb.utils.splitHash64(e),
                this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
        }
        ,
        jspb.BinaryEncoder.prototype.writeFixedHash64 = function (e) {
            jspb.utils.splitHash64(e),
                this.writeUint32(jspb.utils.split64Low),
                this.writeUint32(jspb.utils.split64High)
        }
        ,
        jspb.BinaryEncoder.prototype.writeString = function (e) {
            var t = this.buffer_.length;
            jspb.asserts.assertString(e);
            for (var r = 0; r < e.length; r++) {
                var n = e.charCodeAt(r);
                if (128 > n)
                    this.buffer_.push(n);
                else if (2048 > n)
                    this.buffer_.push(n >> 6 | 192),
                        this.buffer_.push(63 & n | 128);
                else if (65536 > n)
                    if (55296 <= n && 56319 >= n && r + 1 < e.length) {
                        var o = e.charCodeAt(r + 1);
                        56320 <= o && 57343 >= o && (n = 1024 * (n - 55296) + o - 56320 + 65536,
                            this.buffer_.push(n >> 18 | 240),
                            this.buffer_.push(n >> 12 & 63 | 128),
                            this.buffer_.push(n >> 6 & 63 | 128),
                            this.buffer_.push(63 & n | 128),
                            r++)
                    } else
                        this.buffer_.push(n >> 12 | 224),
                            this.buffer_.push(n >> 6 & 63 | 128),
                            this.buffer_.push(63 & n | 128)
            }
            return this.buffer_.length - t
        }
        ,
        jspb.arith = {},
        jspb.arith.UInt64 = function (e, t) {
            this.lo = e,
                this.hi = t
        }
        ,
        jspb.arith.UInt64.prototype.cmp = function (e) {
            return this.hi < e.hi || this.hi == e.hi && this.lo < e.lo ? -1 : this.hi == e.hi && this.lo == e.lo ? 0 : 1
        }
        ,
        jspb.arith.UInt64.prototype.rightShift = function () {
            return new jspb.arith.UInt64((this.lo >>> 1 | (1 & this.hi) << 31) >>> 0, this.hi >>> 1 >>> 0)
        }
        ,
        jspb.arith.UInt64.prototype.leftShift = function () {
            return new jspb.arith.UInt64(this.lo << 1 >>> 0, (this.hi << 1 | this.lo >>> 31) >>> 0)
        }
        ,
        jspb.arith.UInt64.prototype.msb = function () {
            return !!(2147483648 & this.hi)
        }
        ,
        jspb.arith.UInt64.prototype.lsb = function () {
            return !!(1 & this.lo)
        }
        ,
        jspb.arith.UInt64.prototype.zero = function () {
            return 0 == this.lo && 0 == this.hi
        }
        ,
        jspb.arith.UInt64.prototype.add = function (e) {
            return new jspb.arith.UInt64((this.lo + e.lo & 4294967295) >>> 0 >>> 0, ((this.hi + e.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + e.lo ? 1 : 0) >>> 0)
        }
        ,
        jspb.arith.UInt64.prototype.sub = function (e) {
            return new jspb.arith.UInt64((this.lo - e.lo & 4294967295) >>> 0 >>> 0, ((this.hi - e.hi & 4294967295) >>> 0) - (0 > this.lo - e.lo ? 1 : 0) >>> 0)
        }
        ,
        jspb.arith.UInt64.mul32x32 = function (e, t) {
            var r = 65535 & e
                , n = 65535 & t
                , o = t >>> 16;
            for (t = r * n + 65536 * (r * o & 65535) + 65536 * ((e >>>= 16) * n & 65535),
                r = e * o + (r * o >>> 16) + (e * n >>> 16); 4294967296 <= t;)
                t -= 4294967296,
                    r += 1;
            return new jspb.arith.UInt64(t >>> 0, r >>> 0)
        }
        ,
        jspb.arith.UInt64.prototype.mul = function (e) {
            var t = jspb.arith.UInt64.mul32x32(this.lo, e);
            return (e = jspb.arith.UInt64.mul32x32(this.hi, e)).hi = e.lo,
                e.lo = 0,
                t.add(e)
        }
        ,
        jspb.arith.UInt64.prototype.div = function (e) {
            if (0 == e)
                return [];
            var t = new jspb.arith.UInt64(0, 0)
                , r = new jspb.arith.UInt64(this.lo, this.hi);
            e = new jspb.arith.UInt64(e, 0);
            for (var n = new jspb.arith.UInt64(1, 0); !e.msb();)
                e = e.leftShift(),
                    n = n.leftShift();
            for (; !n.zero();)
                0 >= e.cmp(r) && (t = t.add(n),
                    r = r.sub(e)),
                    e = e.rightShift(),
                    n = n.rightShift();
            return [t, r]
        }
        ,
        jspb.arith.UInt64.prototype.toString = function () {
            for (var e = "", t = this; !t.zero();) {
                var r = (t = t.div(10))[0];
                e = t[1].lo + e,
                    t = r
            }
            return "" == e && (e = "0"),
                e
        }
        ,
        jspb.arith.UInt64.fromString = function (e) {
            for (var t = new jspb.arith.UInt64(0, 0), r = new jspb.arith.UInt64(0, 0), n = 0; n < e.length; n++) {
                if ("0" > e[n] || "9" < e[n])
                    return null;
                var o = parseInt(e[n], 10);
                r.lo = o,
                    t = t.mul(10).add(r)
            }
            return t
        }
        ,
        jspb.arith.UInt64.prototype.clone = function () {
            return new jspb.arith.UInt64(this.lo, this.hi)
        }
        ,
        jspb.arith.Int64 = function (e, t) {
            this.lo = e,
                this.hi = t
        }
        ,
        jspb.arith.Int64.prototype.add = function (e) {
            return new jspb.arith.Int64((this.lo + e.lo & 4294967295) >>> 0 >>> 0, ((this.hi + e.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + e.lo ? 1 : 0) >>> 0)
        }
        ,
        jspb.arith.Int64.prototype.sub = function (e) {
            return new jspb.arith.Int64((this.lo - e.lo & 4294967295) >>> 0 >>> 0, ((this.hi - e.hi & 4294967295) >>> 0) - (0 > this.lo - e.lo ? 1 : 0) >>> 0)
        }
        ,
        jspb.arith.Int64.prototype.clone = function () {
            return new jspb.arith.Int64(this.lo, this.hi)
        }
        ,
        jspb.arith.Int64.prototype.toString = function () {
            var e = 0 != (2147483648 & this.hi)
                , t = new jspb.arith.UInt64(this.lo, this.hi);
            return e && (t = new jspb.arith.UInt64(0, 0).sub(t)),
                (e ? "-" : "") + t.toString()
        }
        ,
        jspb.arith.Int64.fromString = function (e) {
            var t = 0 < e.length && "-" == e[0];
            return t && (e = e.substring(1)),
                null === (e = jspb.arith.UInt64.fromString(e)) ? null : (t && (e = new jspb.arith.UInt64(0, 0).sub(e)),
                    new jspb.arith.Int64(e.lo, e.hi))
        }
        ,
        jspb.BinaryWriter = function () {
            this.blocks_ = [],
                this.totalLength_ = 0,
                this.encoder_ = new jspb.BinaryEncoder,
                this.bookmarks_ = []
        }
        ,
        jspb.BinaryWriter.prototype.appendUint8Array_ = function (e) {
            var t = this.encoder_.end();
            this.blocks_.push(t),
                this.blocks_.push(e),
                this.totalLength_ += t.length + e.length
        }
        ,
        jspb.BinaryWriter.prototype.beginDelimited_ = function (e) {
            return this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
                e = this.encoder_.end(),
                this.blocks_.push(e),
                this.totalLength_ += e.length,
                e.push(this.totalLength_),
                e
        }
        ,
        jspb.BinaryWriter.prototype.endDelimited_ = function (e) {
            var t = e.pop();
            for (t = this.totalLength_ + this.encoder_.length() - t,
                jspb.asserts.assert(0 <= t); 127 < t;)
                e.push(127 & t | 128),
                    t >>>= 7,
                    this.totalLength_++;
            e.push(t),
                this.totalLength_++
        }
        ,
        jspb.BinaryWriter.prototype.writeSerializedMessage = function (e, t, r) {
            this.appendUint8Array_(e.subarray(t, r))
        }
        ,
        jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function (e, t, r) {
            null != e && null != t && null != r && this.writeSerializedMessage(e, t, r)
        }
        ,
        jspb.BinaryWriter.prototype.reset = function () {
            this.blocks_ = [],
                this.encoder_.end(),
                this.totalLength_ = 0,
                this.bookmarks_ = []
        }
        ,
        jspb.BinaryWriter.prototype.getResultBuffer = function () {
            jspb.asserts.assert(0 == this.bookmarks_.length);
            for (var e = new Uint8Array(this.totalLength_ + this.encoder_.length()), t = this.blocks_, r = t.length, n = 0, o = 0; o < r; o++) {
                var i = t[o];
                e.set(i, n),
                    n += i.length
            }
            return t = this.encoder_.end(),
                e.set(t, n),
                n += t.length,
                jspb.asserts.assert(n == e.length),
                this.blocks_ = [e],
                e
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "getResultBuffer", jspb.BinaryWriter.prototype.getResultBuffer),
        jspb.BinaryWriter.prototype.getResultBase64String = function (e) {
            return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), e)
        }
        ,
        jspb.BinaryWriter.prototype.beginSubMessage = function (e) {
            this.bookmarks_.push(this.beginDelimited_(e))
        }
        ,
        jspb.BinaryWriter.prototype.endSubMessage = function () {
            jspb.asserts.assert(0 <= this.bookmarks_.length),
                this.endDelimited_(this.bookmarks_.pop())
        }
        ,
        jspb.BinaryWriter.prototype.writeFieldHeader_ = function (e, t) {
            jspb.asserts.assert(1 <= e && e == Math.floor(e)),
                this.encoder_.writeUnsignedVarint32(8 * e + t)
        }
        ,
        jspb.BinaryWriter.prototype.writeAny = function (e, t, r) {
            var n = jspb.BinaryConstants.FieldType;
            switch (e) {
                case n.DOUBLE:
                    this.writeDouble(t, r);
                    break;
                case n.FLOAT:
                    this.writeFloat(t, r);
                    break;
                case n.INT64:
                    this.writeInt64(t, r);
                    break;
                case n.UINT64:
                    this.writeUint64(t, r);
                    break;
                case n.INT32:
                    this.writeInt32(t, r);
                    break;
                case n.FIXED64:
                    this.writeFixed64(t, r);
                    break;
                case n.FIXED32:
                    this.writeFixed32(t, r);
                    break;
                case n.BOOL:
                    this.writeBool(t, r);
                    break;
                case n.STRING:
                    this.writeString(t, r);
                    break;
                case n.GROUP:
                    jspb.asserts.fail("Group field type not supported in writeAny()");
                    break;
                case n.MESSAGE:
                    jspb.asserts.fail("Message field type not supported in writeAny()");
                    break;
                case n.BYTES:
                    this.writeBytes(t, r);
                    break;
                case n.UINT32:
                    this.writeUint32(t, r);
                    break;
                case n.ENUM:
                    this.writeEnum(t, r);
                    break;
                case n.SFIXED32:
                    this.writeSfixed32(t, r);
                    break;
                case n.SFIXED64:
                    this.writeSfixed64(t, r);
                    break;
                case n.SINT32:
                    this.writeSint32(t, r);
                    break;
                case n.SINT64:
                    this.writeSint64(t, r);
                    break;
                case n.FHASH64:
                    this.writeFixedHash64(t, r);
                    break;
                case n.VHASH64:
                    this.writeVarintHash64(t, r);
                    break;
                default:
                    jspb.asserts.fail("Invalid field type in writeAny()")
            }
        }
        ,
        jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function (e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeUnsignedVarint32(t))
        }
        ,
        jspb.BinaryWriter.prototype.writeSignedVarint32_ = function (e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeSignedVarint32(t))
        }
        ,
        jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function (e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeUnsignedVarint64(t))
        }
        ,
        jspb.BinaryWriter.prototype.writeSignedVarint64_ = function (e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeSignedVarint64(t))
        }
        ,
        jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function (e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeZigzagVarint32(t))
        }
        ,
        jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function (e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeZigzagVarint64(t))
        }
        ,
        jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function (e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeZigzagVarint64String(t))
        }
        ,
        jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function (e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeZigzagVarintHash64(t))
        }
        ,
        jspb.BinaryWriter.prototype.writeInt32 = function (e, t) {
            null != t && (jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31),
                this.writeSignedVarint32_(e, t))
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeInt32", jspb.BinaryWriter.prototype.writeInt32),
        jspb.BinaryWriter.prototype.writeInt32String = function (e, t) {
            null != t && (t = parseInt(t, 10),
                jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31),
                this.writeSignedVarint32_(e, t))
        }
        ,
        jspb.BinaryWriter.prototype.writeInt64 = function (e, t) {
            null != t && (jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63),
                this.writeSignedVarint64_(e, t))
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeInt64", jspb.BinaryWriter.prototype.writeInt64),
        jspb.BinaryWriter.prototype.writeInt64String = function (e, t) {
            null != t && (t = jspb.arith.Int64.fromString(t),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeSplitVarint64(t.lo, t.hi))
        }
        ,
        jspb.BinaryWriter.prototype.writeUint32 = function (e, t) {
            null != t && (jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
                this.writeUnsignedVarint32_(e, t))
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeUint32", jspb.BinaryWriter.prototype.writeUint32),
        jspb.BinaryWriter.prototype.writeUint32String = function (e, t) {
            null != t && (t = parseInt(t, 10),
                jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
                this.writeUnsignedVarint32_(e, t))
        }
        ,
        jspb.BinaryWriter.prototype.writeUint64 = function (e, t) {
            null != t && (jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64),
                this.writeUnsignedVarint64_(e, t))
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeUint64", jspb.BinaryWriter.prototype.writeUint64),
        jspb.BinaryWriter.prototype.writeUint64String = function (e, t) {
            null != t && (t = jspb.arith.UInt64.fromString(t),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeSplitVarint64(t.lo, t.hi))
        }
        ,
        jspb.BinaryWriter.prototype.writeSint32 = function (e, t) {
            null != t && (jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31),
                this.writeZigzagVarint32_(e, t))
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeSint32", jspb.BinaryWriter.prototype.writeSint32),
        jspb.BinaryWriter.prototype.writeSint64 = function (e, t) {
            null != t && (jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63),
                this.writeZigzagVarint64_(e, t))
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeSint64", jspb.BinaryWriter.prototype.writeSint64),
        jspb.BinaryWriter.prototype.writeSintHash64 = function (e, t) {
            null != t && this.writeZigzagVarintHash64_(e, t)
        }
        ,
        jspb.BinaryWriter.prototype.writeSint64String = function (e, t) {
            null != t && this.writeZigzagVarint64String_(e, t)
        }
        ,
        jspb.BinaryWriter.prototype.writeFixed32 = function (e, t) {
            null != t && (jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
                this.encoder_.writeUint32(t))
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeFixed32", jspb.BinaryWriter.prototype.writeFixed32),
        jspb.BinaryWriter.prototype.writeFixed64 = function (e, t) {
            null != t && (jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
                this.encoder_.writeUint64(t))
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeFixed64", jspb.BinaryWriter.prototype.writeFixed64),
        jspb.BinaryWriter.prototype.writeFixed64String = function (e, t) {
            null != t && (t = jspb.arith.UInt64.fromString(t),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
                this.encoder_.writeSplitFixed64(t.lo, t.hi))
        }
        ,
        jspb.BinaryWriter.prototype.writeSfixed32 = function (e, t) {
            null != t && (jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
                this.encoder_.writeInt32(t))
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeSfixed32", jspb.BinaryWriter.prototype.writeSfixed32),
        jspb.BinaryWriter.prototype.writeSfixed64 = function (e, t) {
            null != t && (jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
                this.encoder_.writeInt64(t))
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeSfixed64", jspb.BinaryWriter.prototype.writeSfixed64),
        jspb.BinaryWriter.prototype.writeSfixed64String = function (e, t) {
            null != t && (t = jspb.arith.Int64.fromString(t),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
                this.encoder_.writeSplitFixed64(t.lo, t.hi))
        }
        ,
        jspb.BinaryWriter.prototype.writeFloat = function (e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
                this.encoder_.writeFloat(t))
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeFloat", jspb.BinaryWriter.prototype.writeFloat),
        jspb.BinaryWriter.prototype.writeDouble = function (e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
                this.encoder_.writeDouble(t))
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeDouble", jspb.BinaryWriter.prototype.writeDouble),
        jspb.BinaryWriter.prototype.writeBool = function (e, t) {
            null != t && (jspb.asserts.assert("boolean" == typeof t || "number" == typeof t),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeBool(t))
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeBool", jspb.BinaryWriter.prototype.writeBool),
        jspb.BinaryWriter.prototype.writeEnum = function (e, t) {
            null != t && (jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeSignedVarint32(t))
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeEnum", jspb.BinaryWriter.prototype.writeEnum),
        jspb.BinaryWriter.prototype.writeString = function (e, t) {
            null != t && (e = this.beginDelimited_(e),
                this.encoder_.writeString(t),
                this.endDelimited_(e))
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeString", jspb.BinaryWriter.prototype.writeString),
        jspb.BinaryWriter.prototype.writeBytes = function (e, t) {
            null != t && (t = jspb.utils.byteSourceToUint8Array(t),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
                this.encoder_.writeUnsignedVarint32(t.length),
                this.appendUint8Array_(t))
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeBytes", jspb.BinaryWriter.prototype.writeBytes),
        jspb.BinaryWriter.prototype.writeMessage = function (e, t, r) {
            null != t && (e = this.beginDelimited_(e),
                r(t, this),
                this.endDelimited_(e))
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeMessage", jspb.BinaryWriter.prototype.writeMessage),
        jspb.BinaryWriter.prototype.writeMessageSet = function (e, t, r) {
            null != t && (this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.START_GROUP),
                this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeSignedVarint32(e),
                e = this.beginDelimited_(3),
                r(t, this),
                this.endDelimited_(e),
                this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP))
        }
        ,
        jspb.BinaryWriter.prototype.writeGroup = function (e, t, r) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.START_GROUP),
                r(t, this),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.END_GROUP))
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeGroup", jspb.BinaryWriter.prototype.writeGroup),
        jspb.BinaryWriter.prototype.writeFixedHash64 = function (e, t) {
            null != t && (jspb.asserts.assert(8 == t.length),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
                this.encoder_.writeFixedHash64(t))
        }
        ,
        jspb.BinaryWriter.prototype.writeVarintHash64 = function (e, t) {
            null != t && (jspb.asserts.assert(8 == t.length),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeVarintHash64(t))
        }
        ,
        jspb.BinaryWriter.prototype.writeSplitFixed64 = function (e, t, r) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
                this.encoder_.writeSplitFixed64(t, r)
        }
        ,
        jspb.BinaryWriter.prototype.writeSplitVarint64 = function (e, t, r) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeSplitVarint64(t, r)
        }
        ,
        jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function (e, t, r) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT);
            var n = this.encoder_;
            jspb.utils.toZigzag64(t, r, (function (e, t) {
                n.writeSplitVarint64(e >>> 0, t >>> 0)
            }
            ))
        }
        ,
        jspb.BinaryWriter.prototype.writeRepeatedInt32 = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeSignedVarint32_(e, t[r])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedInt32", jspb.BinaryWriter.prototype.writeRepeatedInt32),
        jspb.BinaryWriter.prototype.writeRepeatedInt32String = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeInt32String(e, t[r])
        }
        ,
        jspb.BinaryWriter.prototype.writeRepeatedInt64 = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeSignedVarint64_(e, t[r])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedInt64", jspb.BinaryWriter.prototype.writeRepeatedInt64),
        jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function (e, t, r, n) {
            if (null != t)
                for (var o = 0; o < t.length; o++)
                    this.writeSplitFixed64(e, r(t[o]), n(t[o]))
        }
        ,
        jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function (e, t, r, n) {
            if (null != t)
                for (var o = 0; o < t.length; o++)
                    this.writeSplitVarint64(e, r(t[o]), n(t[o]))
        }
        ,
        jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 = function (e, t, r, n) {
            if (null != t)
                for (var o = 0; o < t.length; o++)
                    this.writeSplitZigzagVarint64(e, r(t[o]), n(t[o]))
        }
        ,
        jspb.BinaryWriter.prototype.writeRepeatedInt64String = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeInt64String(e, t[r])
        }
        ,
        jspb.BinaryWriter.prototype.writeRepeatedUint32 = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeUnsignedVarint32_(e, t[r])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedUint32", jspb.BinaryWriter.prototype.writeRepeatedUint32),
        jspb.BinaryWriter.prototype.writeRepeatedUint32String = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeUint32String(e, t[r])
        }
        ,
        jspb.BinaryWriter.prototype.writeRepeatedUint64 = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeUnsignedVarint64_(e, t[r])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedUint64", jspb.BinaryWriter.prototype.writeRepeatedUint64),
        jspb.BinaryWriter.prototype.writeRepeatedUint64String = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeUint64String(e, t[r])
        }
        ,
        jspb.BinaryWriter.prototype.writeRepeatedSint32 = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeZigzagVarint32_(e, t[r])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSint32", jspb.BinaryWriter.prototype.writeRepeatedSint32),
        jspb.BinaryWriter.prototype.writeRepeatedSint64 = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeZigzagVarint64_(e, t[r])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSint64", jspb.BinaryWriter.prototype.writeRepeatedSint64),
        jspb.BinaryWriter.prototype.writeRepeatedSint64String = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeZigzagVarint64String_(e, t[r])
        }
        ,
        jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeZigzagVarintHash64_(e, t[r])
        }
        ,
        jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeFixed32(e, t[r])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFixed32", jspb.BinaryWriter.prototype.writeRepeatedFixed32),
        jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeFixed64(e, t[r])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFixed64", jspb.BinaryWriter.prototype.writeRepeatedFixed64),
        jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeFixed64String(e, t[r])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFixed64String", jspb.BinaryWriter.prototype.writeRepeatedFixed64String),
        jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeSfixed32(e, t[r])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSfixed32", jspb.BinaryWriter.prototype.writeRepeatedSfixed32),
        jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeSfixed64(e, t[r])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSfixed64", jspb.BinaryWriter.prototype.writeRepeatedSfixed64),
        jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeSfixed64String(e, t[r])
        }
        ,
        jspb.BinaryWriter.prototype.writeRepeatedFloat = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeFloat(e, t[r])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFloat", jspb.BinaryWriter.prototype.writeRepeatedFloat),
        jspb.BinaryWriter.prototype.writeRepeatedDouble = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeDouble(e, t[r])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedDouble", jspb.BinaryWriter.prototype.writeRepeatedDouble),
        jspb.BinaryWriter.prototype.writeRepeatedBool = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeBool(e, t[r])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedBool", jspb.BinaryWriter.prototype.writeRepeatedBool),
        jspb.BinaryWriter.prototype.writeRepeatedEnum = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeEnum(e, t[r])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedEnum", jspb.BinaryWriter.prototype.writeRepeatedEnum),
        jspb.BinaryWriter.prototype.writeRepeatedString = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeString(e, t[r])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedString", jspb.BinaryWriter.prototype.writeRepeatedString),
        jspb.BinaryWriter.prototype.writeRepeatedBytes = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeBytes(e, t[r])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedBytes", jspb.BinaryWriter.prototype.writeRepeatedBytes),
        jspb.BinaryWriter.prototype.writeRepeatedMessage = function (e, t, r) {
            if (null != t)
                for (var n = 0; n < t.length; n++) {
                    var o = this.beginDelimited_(e);
                    r(t[n], this),
                        this.endDelimited_(o)
                }
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedMessage", jspb.BinaryWriter.prototype.writeRepeatedMessage),
        jspb.BinaryWriter.prototype.writeRepeatedGroup = function (e, t, r) {
            if (null != t)
                for (var n = 0; n < t.length; n++)
                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.START_GROUP),
                        r(t[n], this),
                        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.END_GROUP)
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedGroup", jspb.BinaryWriter.prototype.writeRepeatedGroup),
        jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeFixedHash64(e, t[r])
        }
        ,
        jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function (e, t) {
            if (null != t)
                for (var r = 0; r < t.length; r++)
                    this.writeVarintHash64(e, t[r])
        }
        ,
        jspb.BinaryWriter.prototype.writePackedInt32 = function (e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var r = 0; r < t.length; r++)
                    this.encoder_.writeSignedVarint32(t[r]);
                this.endDelimited_(e)
            }
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedInt32", jspb.BinaryWriter.prototype.writePackedInt32),
        jspb.BinaryWriter.prototype.writePackedInt32String = function (e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var r = 0; r < t.length; r++)
                    this.encoder_.writeSignedVarint32(parseInt(t[r], 10));
                this.endDelimited_(e)
            }
        }
        ,
        jspb.BinaryWriter.prototype.writePackedInt64 = function (e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var r = 0; r < t.length; r++)
                    this.encoder_.writeSignedVarint64(t[r]);
                this.endDelimited_(e)
            }
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedInt64", jspb.BinaryWriter.prototype.writePackedInt64),
        jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function (e, t, r, n) {
            if (null != t) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++)
                    this.encoder_.writeSplitFixed64(r(t[o]), n(t[o]));
                this.endDelimited_(e)
            }
        }
        ,
        jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function (e, t, r, n) {
            if (null != t) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++)
                    this.encoder_.writeSplitVarint64(r(t[o]), n(t[o]));
                this.endDelimited_(e)
            }
        }
        ,
        jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function (e, t, r, n) {
            if (null != t) {
                e = this.beginDelimited_(e);
                for (var o = this.encoder_, i = 0; i < t.length; i++)
                    jspb.utils.toZigzag64(r(t[i]), n(t[i]), (function (e, t) {
                        o.writeSplitVarint64(e >>> 0, t >>> 0)
                    }
                    ));
                this.endDelimited_(e)
            }
        }
        ,
        jspb.BinaryWriter.prototype.writePackedInt64String = function (e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var r = 0; r < t.length; r++) {
                    var n = jspb.arith.Int64.fromString(t[r]);
                    this.encoder_.writeSplitVarint64(n.lo, n.hi)
                }
                this.endDelimited_(e)
            }
        }
        ,
        jspb.BinaryWriter.prototype.writePackedUint32 = function (e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var r = 0; r < t.length; r++)
                    this.encoder_.writeUnsignedVarint32(t[r]);
                this.endDelimited_(e)
            }
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedUint32", jspb.BinaryWriter.prototype.writePackedUint32),
        jspb.BinaryWriter.prototype.writePackedUint32String = function (e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var r = 0; r < t.length; r++)
                    this.encoder_.writeUnsignedVarint32(parseInt(t[r], 10));
                this.endDelimited_(e)
            }
        }
        ,
        jspb.BinaryWriter.prototype.writePackedUint64 = function (e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var r = 0; r < t.length; r++)
                    this.encoder_.writeUnsignedVarint64(t[r]);
                this.endDelimited_(e)
            }
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedUint64", jspb.BinaryWriter.prototype.writePackedUint64),
        jspb.BinaryWriter.prototype.writePackedUint64String = function (e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var r = 0; r < t.length; r++) {
                    var n = jspb.arith.UInt64.fromString(t[r]);
                    this.encoder_.writeSplitVarint64(n.lo, n.hi)
                }
                this.endDelimited_(e)
            }
        }
        ,
        jspb.BinaryWriter.prototype.writePackedSint32 = function (e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var r = 0; r < t.length; r++)
                    this.encoder_.writeZigzagVarint32(t[r]);
                this.endDelimited_(e)
            }
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSint32", jspb.BinaryWriter.prototype.writePackedSint32),
        jspb.BinaryWriter.prototype.writePackedSint64 = function (e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var r = 0; r < t.length; r++)
                    this.encoder_.writeZigzagVarint64(t[r]);
                this.endDelimited_(e)
            }
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSint64", jspb.BinaryWriter.prototype.writePackedSint64),
        jspb.BinaryWriter.prototype.writePackedSint64String = function (e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var r = 0; r < t.length; r++)
                    this.encoder_.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(t[r]));
                this.endDelimited_(e)
            }
        }
        ,
        jspb.BinaryWriter.prototype.writePackedSintHash64 = function (e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var r = 0; r < t.length; r++)
                    this.encoder_.writeZigzagVarintHash64(t[r]);
                this.endDelimited_(e)
            }
        }
        ,
        jspb.BinaryWriter.prototype.writePackedFixed32 = function (e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
                    this.encoder_.writeUnsignedVarint32(4 * t.length),
                    e = 0; e < t.length; e++)
                    this.encoder_.writeUint32(t[e])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedFixed32", jspb.BinaryWriter.prototype.writePackedFixed32),
        jspb.BinaryWriter.prototype.writePackedFixed64 = function (e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
                    this.encoder_.writeUnsignedVarint32(8 * t.length),
                    e = 0; e < t.length; e++)
                    this.encoder_.writeUint64(t[e])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedFixed64", jspb.BinaryWriter.prototype.writePackedFixed64),
        jspb.BinaryWriter.prototype.writePackedFixed64String = function (e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
                    this.encoder_.writeUnsignedVarint32(8 * t.length),
                    e = 0; e < t.length; e++) {
                    var r = jspb.arith.UInt64.fromString(t[e]);
                    this.encoder_.writeSplitFixed64(r.lo, r.hi)
                }
        }
        ,
        jspb.BinaryWriter.prototype.writePackedSfixed32 = function (e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
                    this.encoder_.writeUnsignedVarint32(4 * t.length),
                    e = 0; e < t.length; e++)
                    this.encoder_.writeInt32(t[e])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSfixed32", jspb.BinaryWriter.prototype.writePackedSfixed32),
        jspb.BinaryWriter.prototype.writePackedSfixed64 = function (e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
                    this.encoder_.writeUnsignedVarint32(8 * t.length),
                    e = 0; e < t.length; e++)
                    this.encoder_.writeInt64(t[e])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSfixed64", jspb.BinaryWriter.prototype.writePackedSfixed64),
        jspb.BinaryWriter.prototype.writePackedSfixed64String = function (e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
                    this.encoder_.writeUnsignedVarint32(8 * t.length),
                    e = 0; e < t.length; e++)
                    this.encoder_.writeInt64String(t[e])
        }
        ,
        jspb.BinaryWriter.prototype.writePackedFloat = function (e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
                    this.encoder_.writeUnsignedVarint32(4 * t.length),
                    e = 0; e < t.length; e++)
                    this.encoder_.writeFloat(t[e])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedFloat", jspb.BinaryWriter.prototype.writePackedFloat),
        jspb.BinaryWriter.prototype.writePackedDouble = function (e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
                    this.encoder_.writeUnsignedVarint32(8 * t.length),
                    e = 0; e < t.length; e++)
                    this.encoder_.writeDouble(t[e])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedDouble", jspb.BinaryWriter.prototype.writePackedDouble),
        jspb.BinaryWriter.prototype.writePackedBool = function (e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
                    this.encoder_.writeUnsignedVarint32(t.length),
                    e = 0; e < t.length; e++)
                    this.encoder_.writeBool(t[e])
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedBool", jspb.BinaryWriter.prototype.writePackedBool),
        jspb.BinaryWriter.prototype.writePackedEnum = function (e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var r = 0; r < t.length; r++)
                    this.encoder_.writeEnum(t[r]);
                this.endDelimited_(e)
            }
        }
        ,
        goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedEnum", jspb.BinaryWriter.prototype.writePackedEnum),
        jspb.BinaryWriter.prototype.writePackedFixedHash64 = function (e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
                    this.encoder_.writeUnsignedVarint32(8 * t.length),
                    e = 0; e < t.length; e++)
                    this.encoder_.writeFixedHash64(t[e])
        }
        ,
        jspb.BinaryWriter.prototype.writePackedVarintHash64 = function (e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var r = 0; r < t.length; r++)
                    this.encoder_.writeVarintHash64(t[r]);
                this.endDelimited_(e)
            }
        }
        ,
        jspb.Map = function (e, t) {
            this.arr_ = e,
                this.valueCtor_ = t,
                this.map_ = {},
                this.arrClean = !0,
                0 < this.arr_.length && this.loadFromArray_()
        }
        ,
        goog.exportSymbol("jspb.Map", jspb.Map),
        jspb.Map.prototype.loadFromArray_ = function () {
            for (var e = 0; e < this.arr_.length; e++) {
                var t = this.arr_[e]
                    , r = t[0];
                this.map_[r.toString()] = new jspb.Map.Entry_(r, t[1])
            }
            this.arrClean = !0
        }
        ,
        jspb.Map.prototype.toArray = function () {
            if (this.arrClean) {
                if (this.valueCtor_) {
                    var e, t = this.map_;
                    for (e in t)
                        if (Object.prototype.hasOwnProperty.call(t, e)) {
                            var r = t[e].valueWrapper;
                            r && r.toArray()
                        }
                }
            } else {
                for (this.arr_.length = 0,
                    (t = this.stringKeys_()).sort(),
                    e = 0; e < t.length; e++) {
                    var n = this.map_[t[e]];
                    (r = n.valueWrapper) && r.toArray(),
                        this.arr_.push([n.key, n.value])
                }
                this.arrClean = !0
            }
            return this.arr_
        }
        ,
        goog.exportProperty(jspb.Map.prototype, "toArray", jspb.Map.prototype.toArray),
        jspb.Map.prototype.toObject = function (e, t) {
            for (var r = this.toArray(), n = [], o = 0; o < r.length; o++) {
                var i = this.map_[r[o][0].toString()];
                this.wrapEntry_(i);
                var a = i.valueWrapper;
                a ? (jspb.asserts.assert(t),
                    n.push([i.key, t(e, a)])) : n.push([i.key, i.value])
            }
            return n
        }
        ,
        goog.exportProperty(jspb.Map.prototype, "toObject", jspb.Map.prototype.toObject),
        jspb.Map.fromObject = function (e, t, r) {
            t = new jspb.Map([], t);
            for (var n = 0; n < e.length; n++) {
                var o = e[n][0]
                    , i = r(e[n][1]);
                t.set(o, i)
            }
            return t
        }
        ,
        goog.exportProperty(jspb.Map, "fromObject", jspb.Map.fromObject),
        jspb.Map.ArrayIteratorIterable_ = function (e) {
            this.idx_ = 0,
                this.arr_ = e
        }
        ,
        jspb.Map.ArrayIteratorIterable_.prototype.next = function () {
            return this.idx_ < this.arr_.length ? {
                done: !1,
                value: this.arr_[this.idx_++]
            } : {
                done: !0,
                value: void 0
            }
        }
        ,
        "undefined" != typeof Symbol && (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] = function () {
            return this
        }
        ),
        jspb.Map.prototype.getLength = function () {
            return this.stringKeys_().length
        }
        ,
        goog.exportProperty(jspb.Map.prototype, "getLength", jspb.Map.prototype.getLength),
        jspb.Map.prototype.clear = function () {
            this.map_ = {},
                this.arrClean = !1
        }
        ,
        goog.exportProperty(jspb.Map.prototype, "clear", jspb.Map.prototype.clear),
        jspb.Map.prototype.del = function (e) {
            e = e.toString();
            var t = this.map_.hasOwnProperty(e);
            return delete this.map_[e],
                this.arrClean = !1,
                t
        }
        ,
        goog.exportProperty(jspb.Map.prototype, "del", jspb.Map.prototype.del),
        jspb.Map.prototype.getEntryList = function () {
            var e = []
                , t = this.stringKeys_();
            t.sort();
            for (var r = 0; r < t.length; r++) {
                var n = this.map_[t[r]];
                e.push([n.key, n.value])
            }
            return e
        }
        ,
        goog.exportProperty(jspb.Map.prototype, "getEntryList", jspb.Map.prototype.getEntryList),
        jspb.Map.prototype.entries = function () {
            var e = []
                , t = this.stringKeys_();
            t.sort();
            for (var r = 0; r < t.length; r++) {
                var n = this.map_[t[r]];
                e.push([n.key, this.wrapEntry_(n)])
            }
            return new jspb.Map.ArrayIteratorIterable_(e)
        }
        ,
        goog.exportProperty(jspb.Map.prototype, "entries", jspb.Map.prototype.entries),
        jspb.Map.prototype.keys = function () {
            var e = []
                , t = this.stringKeys_();
            t.sort();
            for (var r = 0; r < t.length; r++)
                e.push(this.map_[t[r]].key);
            return new jspb.Map.ArrayIteratorIterable_(e)
        }
        ,
        goog.exportProperty(jspb.Map.prototype, "keys", jspb.Map.prototype.keys),
        jspb.Map.prototype.values = function () {
            var e = []
                , t = this.stringKeys_();
            t.sort();
            for (var r = 0; r < t.length; r++)
                e.push(this.wrapEntry_(this.map_[t[r]]));
            return new jspb.Map.ArrayIteratorIterable_(e)
        }
        ,
        goog.exportProperty(jspb.Map.prototype, "values", jspb.Map.prototype.values),
        jspb.Map.prototype.forEach = function (e, t) {
            var r = this.stringKeys_();
            r.sort();
            for (var n = 0; n < r.length; n++) {
                var o = this.map_[r[n]];
                e.call(t, this.wrapEntry_(o), o.key, this)
            }
        }
        ,
        goog.exportProperty(jspb.Map.prototype, "forEach", jspb.Map.prototype.forEach),
        jspb.Map.prototype.set = function (e, t) {
            var r = new jspb.Map.Entry_(e);
            return this.valueCtor_ ? (r.valueWrapper = t,
                r.value = t.toArray()) : r.value = t,
                this.map_[e.toString()] = r,
                this.arrClean = !1,
                this
        }
        ,
        goog.exportProperty(jspb.Map.prototype, "set", jspb.Map.prototype.set),
        jspb.Map.prototype.wrapEntry_ = function (e) {
            return this.valueCtor_ ? (e.valueWrapper || (e.valueWrapper = new this.valueCtor_(e.value)),
                e.valueWrapper) : e.value
        }
        ,
        jspb.Map.prototype.get = function (e) {
            if (e = this.map_[e.toString()])
                return this.wrapEntry_(e)
        }
        ,
        goog.exportProperty(jspb.Map.prototype, "get", jspb.Map.prototype.get),
        jspb.Map.prototype.has = function (e) {
            return e.toString() in this.map_
        }
        ,
        goog.exportProperty(jspb.Map.prototype, "has", jspb.Map.prototype.has),
        jspb.Map.prototype.serializeBinary = function (e, t, r, n, o) {
            var i = this.stringKeys_();
            i.sort();
            for (var a = 0; a < i.length; a++) {
                var s = this.map_[i[a]];
                t.beginSubMessage(e),
                    r.call(t, 1, s.key),
                    this.valueCtor_ ? n.call(t, 2, this.wrapEntry_(s), o) : n.call(t, 2, s.value),
                    t.endSubMessage()
            }
        }
        ,
        goog.exportProperty(jspb.Map.prototype, "serializeBinary", jspb.Map.prototype.serializeBinary),
        jspb.Map.deserializeBinary = function (e, t, r, n, o, i, a) {
            for (; t.nextField() && !t.isEndGroup();) {
                var s = t.getFieldNumber();
                1 == s ? i = r.call(t) : 2 == s && (e.valueCtor_ ? (jspb.asserts.assert(o),
                    a || (a = new e.valueCtor_),
                    n.call(t, a, o)) : a = n.call(t))
            }
            jspb.asserts.assert(null != i),
                jspb.asserts.assert(null != a),
                e.set(i, a)
        }
        ,
        goog.exportProperty(jspb.Map, "deserializeBinary", jspb.Map.deserializeBinary),
        jspb.Map.prototype.stringKeys_ = function () {
            var e, t = this.map_, r = [];
            for (e in t)
                Object.prototype.hasOwnProperty.call(t, e) && r.push(e);
            return r
        }
        ,
        jspb.Map.Entry_ = function (e, t) {
            this.key = e,
                this.value = t,
                this.valueWrapper = void 0
        }
        ,
        jspb.ExtensionFieldInfo = function (e, t, r, n, o) {
            this.fieldIndex = e,
                this.fieldName = t,
                this.ctor = r,
                this.toObjectFn = n,
                this.isRepeated = o
        }
        ,
        goog.exportSymbol("jspb.ExtensionFieldInfo", jspb.ExtensionFieldInfo),
        jspb.ExtensionFieldBinaryInfo = function (e, t, r, n, o, i) {
            this.fieldInfo = e,
                this.binaryReaderFn = t,
                this.binaryWriterFn = r,
                this.binaryMessageSerializeFn = n,
                this.binaryMessageDeserializeFn = o,
                this.isPacked = i
        }
        ,
        goog.exportSymbol("jspb.ExtensionFieldBinaryInfo", jspb.ExtensionFieldBinaryInfo),
        jspb.ExtensionFieldInfo.prototype.isMessageType = function () {
            return !!this.ctor
        }
        ,
        goog.exportProperty(jspb.ExtensionFieldInfo.prototype, "isMessageType", jspb.ExtensionFieldInfo.prototype.isMessageType),
        jspb.Message = function () { }
        ,
        goog.exportSymbol("jspb.Message", jspb.Message),
        jspb.Message.GENERATE_TO_OBJECT = !0,
        goog.exportProperty(jspb.Message, "GENERATE_TO_OBJECT", jspb.Message.GENERATE_TO_OBJECT),
        jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE,
        goog.exportProperty(jspb.Message, "GENERATE_FROM_OBJECT", jspb.Message.GENERATE_FROM_OBJECT),
        jspb.Message.GENERATE_TO_STRING = !0,
        jspb.Message.ASSUME_LOCAL_ARRAYS = !1,
        jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = !0,
        jspb.Message.SUPPORTS_UINT8ARRAY_ = "function" == typeof Uint8Array,
        jspb.Message.prototype.getJsPbMessageId = function () {
            return this.messageId_
        }
        ,
        goog.exportProperty(jspb.Message.prototype, "getJsPbMessageId", jspb.Message.prototype.getJsPbMessageId),
        jspb.Message.getIndex_ = function (e, t) {
            return t + e.arrayIndexOffset_
        }
        ,
        jspb.Message.hiddenES6Property_ = function () { }
        ,
        jspb.Message.getFieldNumber_ = function (e, t) {
            return t - e.arrayIndexOffset_
        }
        ,
        jspb.Message.initialize = function (e, t, r, n, o, i) {
            if (e.wrappers_ = null,
                t || (t = r ? [r] : []),
                e.messageId_ = r ? String(r) : void 0,
                e.arrayIndexOffset_ = 0 === r ? -1 : 0,
                e.array = t,
                jspb.Message.initPivotAndExtensionObject_(e, n),
                e.convertedPrimitiveFields_ = {},
                jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS || (e.repeatedFields = o),
                o)
                for (t = 0; t < o.length; t++)
                    (r = o[t]) < e.pivot_ ? (r = jspb.Message.getIndex_(e, r),
                        e.array[r] = e.array[r] || jspb.Message.EMPTY_LIST_SENTINEL_) : (jspb.Message.maybeInitEmptyExtensionObject_(e),
                            e.extensionObject_[r] = e.extensionObject_[r] || jspb.Message.EMPTY_LIST_SENTINEL_);
            if (i && i.length)
                for (t = 0; t < i.length; t++)
                    jspb.Message.computeOneofCase(e, i[t])
        }
        ,
        goog.exportProperty(jspb.Message, "initialize", jspb.Message.initialize),
        jspb.Message.EMPTY_LIST_SENTINEL_ = goog.DEBUG && Object.freeze ? Object.freeze([]) : [],
        jspb.Message.isArray_ = function (e) {
            return jspb.Message.ASSUME_LOCAL_ARRAYS ? e instanceof Array : Array.isArray(e)
        }
        ,
        jspb.Message.isExtensionObject_ = function (e) {
            return !(null === e || "object" != typeof e || jspb.Message.isArray_(e) || jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array)
        }
        ,
        jspb.Message.initPivotAndExtensionObject_ = function (e, t) {
            var r = e.array.length
                , n = -1;
            if (r && (n = r - 1,
                r = e.array[n],
                jspb.Message.isExtensionObject_(r)))
                return e.pivot_ = jspb.Message.getFieldNumber_(e, n),
                    void (e.extensionObject_ = r);
            -1 < t ? (e.pivot_ = Math.max(t, jspb.Message.getFieldNumber_(e, n + 1)),
                e.extensionObject_ = null) : e.pivot_ = Number.MAX_VALUE
        }
        ,
        jspb.Message.maybeInitEmptyExtensionObject_ = function (e) {
            var t = jspb.Message.getIndex_(e, e.pivot_);
            e.array[t] || (e.extensionObject_ = e.array[t] = {})
        }
        ,
        jspb.Message.toObjectList = function (e, t, r) {
            for (var n = [], o = 0; o < e.length; o++)
                n[o] = t.call(e[o], r, e[o]);
            return n
        }
        ,
        goog.exportProperty(jspb.Message, "toObjectList", jspb.Message.toObjectList),
        jspb.Message.toObjectExtension = function (e, t, r, n, o) {
            for (var i in r) {
                var a = r[i]
                    , s = n.call(e, a);
                if (null != s) {
                    for (var u in a.fieldName)
                        if (a.fieldName.hasOwnProperty(u))
                            break;
                    t[u] = a.toObjectFn ? a.isRepeated ? jspb.Message.toObjectList(s, a.toObjectFn, o) : a.toObjectFn(o, s) : s
                }
            }
        }
        ,
        goog.exportProperty(jspb.Message, "toObjectExtension", jspb.Message.toObjectExtension),
        jspb.Message.serializeBinaryExtensions = function (e, t, r, n) {
            for (var o in r) {
                var i = r[o]
                    , a = i.fieldInfo;
                if (!i.binaryWriterFn)
                    throw Error("Message extension present that was generated without binary serialization support");
                var s = n.call(e, a);
                if (null != s)
                    if (a.isMessageType()) {
                        if (!i.binaryMessageSerializeFn)
                            throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
                        i.binaryWriterFn.call(t, a.fieldIndex, s, i.binaryMessageSerializeFn)
                    } else
                        i.binaryWriterFn.call(t, a.fieldIndex, s)
            }
        }
        ,
        goog.exportProperty(jspb.Message, "serializeBinaryExtensions", jspb.Message.serializeBinaryExtensions),
        jspb.Message.readBinaryExtension = function (e, t, r, n, o) {
            var i = r[t.getFieldNumber()];
            if (i) {
                if (r = i.fieldInfo,
                    !i.binaryReaderFn)
                    throw Error("Deserializing extension whose generated code does not support binary format");
                if (r.isMessageType()) {
                    var a = new r.ctor;
                    i.binaryReaderFn.call(t, a, i.binaryMessageDeserializeFn)
                } else
                    a = i.binaryReaderFn.call(t);
                r.isRepeated && !i.isPacked ? (t = n.call(e, r)) ? t.push(a) : o.call(e, r, [a]) : o.call(e, r, a)
            } else
                t.skipField()
        }
        ,
        goog.exportProperty(jspb.Message, "readBinaryExtension", jspb.Message.readBinaryExtension),
        jspb.Message.getField = function (e, t) {
            if (t < e.pivot_) {
                t = jspb.Message.getIndex_(e, t);
                var r = e.array[t];
                return r === jspb.Message.EMPTY_LIST_SENTINEL_ ? e.array[t] = [] : r
            }
            if (e.extensionObject_)
                return (r = e.extensionObject_[t]) === jspb.Message.EMPTY_LIST_SENTINEL_ ? e.extensionObject_[t] = [] : r
        }
        ,
        goog.exportProperty(jspb.Message, "getField", jspb.Message.getField),
        jspb.Message.getRepeatedField = function (e, t) {
            return jspb.Message.getField(e, t)
        }
        ,
        goog.exportProperty(jspb.Message, "getRepeatedField", jspb.Message.getRepeatedField),
        jspb.Message.getOptionalFloatingPointField = function (e, t) {
            return null == (e = jspb.Message.getField(e, t)) ? e : +e
        }
        ,
        goog.exportProperty(jspb.Message, "getOptionalFloatingPointField", jspb.Message.getOptionalFloatingPointField),
        jspb.Message.getBooleanField = function (e, t) {
            return null == (e = jspb.Message.getField(e, t)) ? e : !!e
        }
        ,
        goog.exportProperty(jspb.Message, "getBooleanField", jspb.Message.getBooleanField),
        jspb.Message.getRepeatedFloatingPointField = function (e, t) {
            var r = jspb.Message.getRepeatedField(e, t);
            if (e.convertedPrimitiveFields_ || (e.convertedPrimitiveFields_ = {}),
                !e.convertedPrimitiveFields_[t]) {
                for (var n = 0; n < r.length; n++)
                    r[n] = +r[n];
                e.convertedPrimitiveFields_[t] = !0
            }
            return r
        }
        ,
        goog.exportProperty(jspb.Message, "getRepeatedFloatingPointField", jspb.Message.getRepeatedFloatingPointField),
        jspb.Message.getRepeatedBooleanField = function (e, t) {
            var r = jspb.Message.getRepeatedField(e, t);
            if (e.convertedPrimitiveFields_ || (e.convertedPrimitiveFields_ = {}),
                !e.convertedPrimitiveFields_[t]) {
                for (var n = 0; n < r.length; n++)
                    r[n] = !!r[n];
                e.convertedPrimitiveFields_[t] = !0
            }
            return r
        }
        ,
        goog.exportProperty(jspb.Message, "getRepeatedBooleanField", jspb.Message.getRepeatedBooleanField),
        jspb.Message.bytesAsB64 = function (e) {
            return null == e || "string" == typeof e ? e : jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array ? goog.crypt.base64.encodeByteArray(e) : (jspb.asserts.fail("Cannot coerce to b64 string: " + goog.typeOf(e)),
                null)
        }
        ,
        goog.exportProperty(jspb.Message, "bytesAsB64", jspb.Message.bytesAsB64),
        jspb.Message.bytesAsU8 = function (e) {
            return null == e || e instanceof Uint8Array ? e : "string" == typeof e ? goog.crypt.base64.decodeStringToUint8Array(e) : (jspb.asserts.fail("Cannot coerce to Uint8Array: " + goog.typeOf(e)),
                null)
        }
        ,
        goog.exportProperty(jspb.Message, "bytesAsU8", jspb.Message.bytesAsU8),
        jspb.Message.bytesListAsB64 = function (e) {
            return jspb.Message.assertConsistentTypes_(e),
                e.length && "string" != typeof e[0] ? goog.array.map(e, jspb.Message.bytesAsB64) : e
        }
        ,
        goog.exportProperty(jspb.Message, "bytesListAsB64", jspb.Message.bytesListAsB64),
        jspb.Message.bytesListAsU8 = function (e) {
            return jspb.Message.assertConsistentTypes_(e),
                !e.length || e[0] instanceof Uint8Array ? e : goog.array.map(e, jspb.Message.bytesAsU8)
        }
        ,
        goog.exportProperty(jspb.Message, "bytesListAsU8", jspb.Message.bytesListAsU8),
        jspb.Message.assertConsistentTypes_ = function (e) {
            if (goog.DEBUG && e && 1 < e.length) {
                var t = goog.typeOf(e[0]);
                goog.array.forEach(e, (function (e) {
                    goog.typeOf(e) != t && jspb.asserts.fail("Inconsistent type in JSPB repeated field array. Got " + goog.typeOf(e) + " expected " + t)
                }
                ))
            }
        }
        ,
        jspb.Message.getFieldWithDefault = function (e, t, r) {
            return null == (e = jspb.Message.getField(e, t)) ? r : e
        }
        ,
        goog.exportProperty(jspb.Message, "getFieldWithDefault", jspb.Message.getFieldWithDefault),
        jspb.Message.getBooleanFieldWithDefault = function (e, t, r) {
            return null == (e = jspb.Message.getBooleanField(e, t)) ? r : e
        }
        ,
        goog.exportProperty(jspb.Message, "getBooleanFieldWithDefault", jspb.Message.getBooleanFieldWithDefault),
        jspb.Message.getFloatingPointFieldWithDefault = function (e, t, r) {
            return null == (e = jspb.Message.getOptionalFloatingPointField(e, t)) ? r : e
        }
        ,
        goog.exportProperty(jspb.Message, "getFloatingPointFieldWithDefault", jspb.Message.getFloatingPointFieldWithDefault),
        jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault,
        goog.exportProperty(jspb.Message, "getFieldProto3", jspb.Message.getFieldProto3),
        jspb.Message.getMapField = function (e, t, r, n) {
            if (e.wrappers_ || (e.wrappers_ = {}),
                t in e.wrappers_)
                return e.wrappers_[t];
            var o = jspb.Message.getField(e, t);
            if (!o) {
                if (r)
                    return;
                o = [],
                    jspb.Message.setField(e, t, o)
            }
            return e.wrappers_[t] = new jspb.Map(o, n)
        }
        ,
        goog.exportProperty(jspb.Message, "getMapField", jspb.Message.getMapField),
        jspb.Message.setField = function (e, t, r) {
            return jspb.asserts.assertInstanceof(e, jspb.Message),
                t < e.pivot_ ? e.array[jspb.Message.getIndex_(e, t)] = r : (jspb.Message.maybeInitEmptyExtensionObject_(e),
                    e.extensionObject_[t] = r),
                e
        }
        ,
        goog.exportProperty(jspb.Message, "setField", jspb.Message.setField),
        jspb.Message.setProto3IntField = function (e, t, r) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, r, 0)
        }
        ,
        goog.exportProperty(jspb.Message, "setProto3IntField", jspb.Message.setProto3IntField),
        jspb.Message.setProto3FloatField = function (e, t, r) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, r, 0)
        }
        ,
        goog.exportProperty(jspb.Message, "setProto3FloatField", jspb.Message.setProto3FloatField),
        jspb.Message.setProto3BooleanField = function (e, t, r) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, r, !1)
        }
        ,
        goog.exportProperty(jspb.Message, "setProto3BooleanField", jspb.Message.setProto3BooleanField),
        jspb.Message.setProto3StringField = function (e, t, r) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, r, "")
        }
        ,
        goog.exportProperty(jspb.Message, "setProto3StringField", jspb.Message.setProto3StringField),
        jspb.Message.setProto3BytesField = function (e, t, r) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, r, "")
        }
        ,
        goog.exportProperty(jspb.Message, "setProto3BytesField", jspb.Message.setProto3BytesField),
        jspb.Message.setProto3EnumField = function (e, t, r) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, r, 0)
        }
        ,
        goog.exportProperty(jspb.Message, "setProto3EnumField", jspb.Message.setProto3EnumField),
        jspb.Message.setProto3StringIntField = function (e, t, r) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, r, "0")
        }
        ,
        goog.exportProperty(jspb.Message, "setProto3StringIntField", jspb.Message.setProto3StringIntField),
        jspb.Message.setFieldIgnoringDefault_ = function (e, t, r, n) {
            return jspb.asserts.assertInstanceof(e, jspb.Message),
                r !== n ? jspb.Message.setField(e, t, r) : t < e.pivot_ ? e.array[jspb.Message.getIndex_(e, t)] = null : (jspb.Message.maybeInitEmptyExtensionObject_(e),
                    delete e.extensionObject_[t]),
                e
        }
        ,
        jspb.Message.addToRepeatedField = function (e, t, r, n) {
            return jspb.asserts.assertInstanceof(e, jspb.Message),
                t = jspb.Message.getRepeatedField(e, t),
                null != n ? t.splice(n, 0, r) : t.push(r),
                e
        }
        ,
        goog.exportProperty(jspb.Message, "addToRepeatedField", jspb.Message.addToRepeatedField),
        jspb.Message.setOneofField = function (e, t, r, n) {
            return jspb.asserts.assertInstanceof(e, jspb.Message),
                (r = jspb.Message.computeOneofCase(e, r)) && r !== t && void 0 !== n && (e.wrappers_ && r in e.wrappers_ && (e.wrappers_[r] = void 0),
                    jspb.Message.setField(e, r, void 0)),
                jspb.Message.setField(e, t, n)
        }
        ,
        goog.exportProperty(jspb.Message, "setOneofField", jspb.Message.setOneofField),
        jspb.Message.computeOneofCase = function (e, t) {
            for (var r, n, o = 0; o < t.length; o++) {
                var i = t[o]
                    , a = jspb.Message.getField(e, i);
                null != a && (r = i,
                    n = a,
                    jspb.Message.setField(e, i, void 0))
            }
            return r ? (jspb.Message.setField(e, r, n),
                r) : 0
        }
        ,
        goog.exportProperty(jspb.Message, "computeOneofCase", jspb.Message.computeOneofCase),
        jspb.Message.getWrapperField = function (e, t, r, n) {
            if (e.wrappers_ || (e.wrappers_ = {}),
                !e.wrappers_[r]) {
                var o = jspb.Message.getField(e, r);
                (n || o) && (e.wrappers_[r] = new t(o))
            }
            return e.wrappers_[r]
        }
        ,
        goog.exportProperty(jspb.Message, "getWrapperField", jspb.Message.getWrapperField),
        jspb.Message.getRepeatedWrapperField = function (e, t, r) {
            return jspb.Message.wrapRepeatedField_(e, t, r),
                (t = e.wrappers_[r]) == jspb.Message.EMPTY_LIST_SENTINEL_ && (t = e.wrappers_[r] = []),
                t
        }
        ,
        goog.exportProperty(jspb.Message, "getRepeatedWrapperField", jspb.Message.getRepeatedWrapperField),
        jspb.Message.wrapRepeatedField_ = function (e, t, r) {
            if (e.wrappers_ || (e.wrappers_ = {}),
                !e.wrappers_[r]) {
                for (var n = jspb.Message.getRepeatedField(e, r), o = [], i = 0; i < n.length; i++)
                    o[i] = new t(n[i]);
                e.wrappers_[r] = o
            }
        }
        ,
        jspb.Message.setWrapperField = function (e, t, r) {
            jspb.asserts.assertInstanceof(e, jspb.Message),
                e.wrappers_ || (e.wrappers_ = {});
            var n = r ? r.toArray() : r;
            return e.wrappers_[t] = r,
                jspb.Message.setField(e, t, n)
        }
        ,
        goog.exportProperty(jspb.Message, "setWrapperField", jspb.Message.setWrapperField),
        jspb.Message.setOneofWrapperField = function (e, t, r, n) {
            jspb.asserts.assertInstanceof(e, jspb.Message),
                e.wrappers_ || (e.wrappers_ = {});
            var o = n ? n.toArray() : n;
            return e.wrappers_[t] = n,
                jspb.Message.setOneofField(e, t, r, o)
        }
        ,
        goog.exportProperty(jspb.Message, "setOneofWrapperField", jspb.Message.setOneofWrapperField),
        jspb.Message.setRepeatedWrapperField = function (e, t, r) {
            jspb.asserts.assertInstanceof(e, jspb.Message),
                e.wrappers_ || (e.wrappers_ = {}),
                r = r || [];
            for (var n = [], o = 0; o < r.length; o++)
                n[o] = r[o].toArray();
            return e.wrappers_[t] = r,
                jspb.Message.setField(e, t, n)
        }
        ,
        goog.exportProperty(jspb.Message, "setRepeatedWrapperField", jspb.Message.setRepeatedWrapperField),
        jspb.Message.addToRepeatedWrapperField = function (e, t, r, n, o) {
            jspb.Message.wrapRepeatedField_(e, n, t);
            var i = e.wrappers_[t];
            return i || (i = e.wrappers_[t] = []),
                r = r || new n,
                e = jspb.Message.getRepeatedField(e, t),
                null != o ? (i.splice(o, 0, r),
                    e.splice(o, 0, r.toArray())) : (i.push(r),
                        e.push(r.toArray())),
                r
        }
        ,
        goog.exportProperty(jspb.Message, "addToRepeatedWrapperField", jspb.Message.addToRepeatedWrapperField),
        jspb.Message.toMap = function (e, t, r, n) {
            for (var o = {}, i = 0; i < e.length; i++)
                o[t.call(e[i])] = r ? r.call(e[i], n, e[i]) : e[i];
            return o
        }
        ,
        goog.exportProperty(jspb.Message, "toMap", jspb.Message.toMap),
        jspb.Message.prototype.syncMapFields_ = function () {
            if (this.wrappers_)
                for (var e in this.wrappers_) {
                    var t = this.wrappers_[e];
                    if (Array.isArray(t))
                        for (var r = 0; r < t.length; r++)
                            t[r] && t[r].toArray();
                    else
                        t && t.toArray()
                }
        }
        ,
        jspb.Message.prototype.toArray = function () {
            return this.syncMapFields_(),
                this.array
        }
        ,
        goog.exportProperty(jspb.Message.prototype, "toArray", jspb.Message.prototype.toArray),
        jspb.Message.GENERATE_TO_STRING && (jspb.Message.prototype.toString = function () {
            return this.syncMapFields_(),
                this.array.toString()
        }
        ),
        jspb.Message.prototype.getExtension = function (e) {
            if (this.extensionObject_) {
                this.wrappers_ || (this.wrappers_ = {});
                var t = e.fieldIndex;
                if (e.isRepeated) {
                    if (e.isMessageType())
                        return this.wrappers_[t] || (this.wrappers_[t] = goog.array.map(this.extensionObject_[t] || [], (function (t) {
                            return new e.ctor(t)
                        }
                        ))),
                            this.wrappers_[t]
                } else if (e.isMessageType())
                    return !this.wrappers_[t] && this.extensionObject_[t] && (this.wrappers_[t] = new e.ctor(this.extensionObject_[t])),
                        this.wrappers_[t];
                return this.extensionObject_[t]
            }
        }
        ,
        goog.exportProperty(jspb.Message.prototype, "getExtension", jspb.Message.prototype.getExtension),
        jspb.Message.prototype.setExtension = function (e, t) {
            this.wrappers_ || (this.wrappers_ = {}),
                jspb.Message.maybeInitEmptyExtensionObject_(this);
            var r = e.fieldIndex;
            return e.isRepeated ? (t = t || [],
                e.isMessageType() ? (this.wrappers_[r] = t,
                    this.extensionObject_[r] = goog.array.map(t, (function (e) {
                        return e.toArray()
                    }
                    ))) : this.extensionObject_[r] = t) : e.isMessageType() ? (this.wrappers_[r] = t,
                        this.extensionObject_[r] = t ? t.toArray() : t) : this.extensionObject_[r] = t,
                this
        }
        ,
        goog.exportProperty(jspb.Message.prototype, "setExtension", jspb.Message.prototype.setExtension),
        jspb.Message.difference = function (e, t) {
            if (!(e instanceof t.constructor))
                throw Error("Messages have different types.");
            var r = e.toArray();
            t = t.toArray();
            var n = []
                , o = 0
                , i = r.length > t.length ? r.length : t.length;
            for (e.getJsPbMessageId() && (n[0] = e.getJsPbMessageId(),
                o = 1); o < i; o++)
                jspb.Message.compareFields(r[o], t[o]) || (n[o] = t[o]);
            return new e.constructor(n)
        }
        ,
        goog.exportProperty(jspb.Message, "difference", jspb.Message.difference),
        jspb.Message.equals = function (e, t) {
            return e == t || !(!e || !t) && e instanceof t.constructor && jspb.Message.compareFields(e.toArray(), t.toArray())
        }
        ,
        goog.exportProperty(jspb.Message, "equals", jspb.Message.equals),
        jspb.Message.compareExtensions = function (e, t) {
            e = e || {},
                t = t || {};
            var r, n = {};
            for (r in e)
                n[r] = 0;
            for (r in t)
                n[r] = 0;
            for (r in n)
                if (!jspb.Message.compareFields(e[r], t[r]))
                    return !1;
            return !0
        }
        ,
        goog.exportProperty(jspb.Message, "compareExtensions", jspb.Message.compareExtensions),
        jspb.Message.compareFields = function (e, t) {
            if (e == t)
                return !0;
            if (!goog.isObject(e) || !goog.isObject(t))
                return !!("number" == typeof e && isNaN(e) || "number" == typeof t && isNaN(t)) && String(e) == String(t);
            if (e.constructor != t.constructor)
                return !1;
            if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e.constructor === Uint8Array) {
                if (e.length != t.length)
                    return !1;
                for (var r = 0; r < e.length; r++)
                    if (e[r] != t[r])
                        return !1;
                return !0
            }
            if (e.constructor === Array) {
                var n = void 0
                    , o = void 0
                    , i = Math.max(e.length, t.length);
                for (r = 0; r < i; r++) {
                    var a = e[r]
                        , s = t[r];
                    if (a && a.constructor == Object && (jspb.asserts.assert(void 0 === n),
                        jspb.asserts.assert(r === e.length - 1),
                        n = a,
                        a = void 0),
                        s && s.constructor == Object && (jspb.asserts.assert(void 0 === o),
                            jspb.asserts.assert(r === t.length - 1),
                            o = s,
                            s = void 0),
                        !jspb.Message.compareFields(a, s))
                        return !1
                }
                return !n && !o || (n = n || {},
                    o = o || {},
                    jspb.Message.compareExtensions(n, o))
            }
            if (e.constructor === Object)
                return jspb.Message.compareExtensions(e, t);
            throw Error("Invalid type in JSPB array")
        }
        ,
        goog.exportProperty(jspb.Message, "compareFields", jspb.Message.compareFields),
        jspb.Message.prototype.cloneMessage = function () {
            return jspb.Message.cloneMessage(this)
        }
        ,
        goog.exportProperty(jspb.Message.prototype, "cloneMessage", jspb.Message.prototype.cloneMessage),
        jspb.Message.prototype.clone = function () {
            return jspb.Message.cloneMessage(this)
        }
        ,
        goog.exportProperty(jspb.Message.prototype, "clone", jspb.Message.prototype.clone),
        jspb.Message.clone = function (e) {
            return jspb.Message.cloneMessage(e)
        }
        ,
        goog.exportProperty(jspb.Message, "clone", jspb.Message.clone),
        jspb.Message.cloneMessage = function (e) {
            return new e.constructor(jspb.Message.clone_(e.toArray()))
        }
        ,
        jspb.Message.copyInto = function (e, t) {
            jspb.asserts.assertInstanceof(e, jspb.Message),
                jspb.asserts.assertInstanceof(t, jspb.Message),
                jspb.asserts.assert(e.constructor == t.constructor, "Copy source and target message should have the same type."),
                e = jspb.Message.clone(e);
            for (var r = t.toArray(), n = e.toArray(), o = r.length = 0; o < n.length; o++)
                r[o] = n[o];
            t.wrappers_ = e.wrappers_,
                t.extensionObject_ = e.extensionObject_
        }
        ,
        goog.exportProperty(jspb.Message, "copyInto", jspb.Message.copyInto),
        jspb.Message.clone_ = function (e) {
            if (Array.isArray(e)) {
                for (var t = Array(e.length), r = 0; r < e.length; r++) {
                    var n = e[r];
                    null != n && (t[r] = "object" == typeof n ? jspb.Message.clone_(jspb.asserts.assert(n)) : n)
                }
                return t
            }
            if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array)
                return new Uint8Array(e);
            for (r in t = {},
                e)
                null != (n = e[r]) && (t[r] = "object" == typeof n ? jspb.Message.clone_(jspb.asserts.assert(n)) : n);
            return t
        }
        ,
        jspb.Message.registerMessageType = function (e, t) {
            t.messageId = e
        }
        ,
        goog.exportProperty(jspb.Message, "registerMessageType", jspb.Message.registerMessageType),
        jspb.Message.messageSetExtensions = {},
        jspb.Message.messageSetExtensionsBinary = {},
        jspb.Export = {},
        "object" == typeof exports && (exports.Map = jspb.Map,
            exports.Message = jspb.Message,
            exports.BinaryReader = jspb.BinaryReader,
            exports.BinaryWriter = jspb.BinaryWriter,
            exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo,
            exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo,
            exports.exportSymbol = goog.exportSymbol,
            exports.inherits = goog.inherits,
            exports.object = {
                extend: goog.object.extend
            },
            exports.typeOf = goog.typeOf)
})(_45878)

var _43057 = {};
!(() => {
    class r {
        constructor(e, t = 0, n) {
            this.m_nOffset = t || 0,
                e instanceof Uint8Array || e instanceof DataView ? (this.m_nLength = n || e.byteLength - this.m_nOffset,
                    this.m_nOffset += e.byteOffset,
                    this.m_viewPacket = new DataView(e.buffer, this.m_nOffset, this.m_nLength)) : (this.m_nLength = n || e.byteLength - this.m_nOffset,
                        this.m_viewPacket = new DataView(e, this.m_nOffset, this.m_nLength)),
                this.m_rgubPacket = new Uint8Array(this.m_viewPacket.buffer, this.m_viewPacket.byteOffset, this.m_viewPacket.byteLength),
                this.m_iGet = 0,
                this.m_iPut = 0
        }
        TellGet() {
            return this.m_iGet + this.m_viewPacket.byteOffset
        }
        GetPacket() {
            return this.m_viewPacket.buffer
        }
        GetUint8() {
            return this.m_viewPacket.getUint8(this.m_iGet++)
        }
        GetUint32(e = !0) {
            let t = this.m_viewPacket.getUint32(this.m_iGet, e);
            return this.m_iGet += 4,
                t
        }
        SeekGetHead(e = 0) {
            this.m_iGet = e || 0
        }
        SeekGetCurrent(e) {
            this.m_iGet += e
        }
        TellPut() {
            return this.m_iPut + this.m_viewPacket.byteOffset
        }
        TellMaxPut() {
            return this.m_viewPacket.byteLength
        }
        PutUint8(e) {
            this.m_viewPacket.setUint8(this.m_iPut++, e)
        }
        PutUint32(e, t = !0) {
            this.m_viewPacket.setUint32(this.m_iPut, e, t),
                this.m_iPut += 4
        }
        PutBytes(e) {
            this.m_rgubPacket.set(e, this.m_iPut),
                this.m_iPut += e.length
        }
        SeekPut(e) {
            this.m_iPut += e
        }
        GetCountBytesRemaining() {
            return this.m_viewPacket.byteLength - this.m_iGet
        }
    }
    _43057.At = r
})()

var _19320 = {}
!(() => {

    var r = _45878;
    const i = r.BinaryReader.prototype
        , o = r.BinaryWriter.prototype;
    function s(e) {
        let t = {};
        const { fields: n } = e;
        for (let e in n) {
            const r = n[e];
            t[r.n] = r
        }
        return t
    }
    function a(e, t) {
        const { proto: n, fields: i } = e
            , o = new n;
        for (let e in i) {
            const { n, c: s, r: a, d: l, q: c } = i[e];
            if (!t.hasOwnProperty(e))
                continue;
            const u = t[e];
            s ? a ? r.Message.setRepeatedWrapperField(o, n, Array.isArray(u) ? u.map((e => s.fromObject(e))) : []) : r.Message.setWrapperField(o, n, s.fromObject(u)) : r.Message.setField(o, n, u)
        }
        return o
    }
    function l(e, t, n) {
        const { proto: i, fields: o } = e;
        let s = {};
        for (let e in o) {
            const { n: i, c: a, r: l, d: c, q: u } = o[e];
            if (a)
                if (l)
                    s[e] = r.Message.toObjectList(r.Message.getRepeatedWrapperField(n, a, i), a.toObject, t);
                else {
                    const o = r.Message.getWrapperField(n, a, i, u ? 1 : 0);
                    o && (s[e] = a.toObject(t, o))
                }
            else {
                const t = r.Message.getFieldWithDefault(n, i, void 0 !== c ? c : null);
                (null !== t || u) && (s[e] = t)
            }
        }
        return t && (s.$jspbMessageInstance = n),
            s
    }
    function c(e, t, n) {
        ssssss = 0;
        for (; n.nextField() && !n.isEndGroup();) {
            console.log(ssssss)
            // if (ssssss == 2) {
            //     ssssss += 1
            //     continue
            // }
            // if (ssssss == 3) {
            //     ssssss += 1
            //     continue
            // }
            aaaaaa = n.getFieldNumber()
            // console.log(r)
            const i = e[aaaaaa];
            
            if (i) {
                const { n: e, c: o, r: s, d: a, q: l, br: c } = i;
                if (o) {
                    const i = new o;
                    n.readMessage(i, o.deserializeBinaryFromReader),
                        s ? r.Message.addToRepeatedWrapperField(t, e, i, o) : r.Message.setWrapperField(t, e, i)
                } else if (c) {

                    const i = c.call(n);
                    // console.log(i.toString())
                    s ? r.Message.addToRepeatedField(t, e, i) : r.Message.setField(t, e, i)
                } else
                    console.assert(c, `Reader func not set for field number ${e} in class ${o}`),
                        n.skipField()
            } else
                n.skipField()
            ssssss += 1

        }
        return t
    }
    function u(e, t, n) {
        const { fields: i } = e;
        for (let e in i) {
            const { n: o, c: s, r: a, d: l, q: c, bw: u } = i[e];
            if (s)
                if (a) {
                    const e = r.Message.getRepeatedWrapperField(t, s, o);
                    (e && e.length || c) && n.writeRepeatedMessage(o, e, s.serializeBinaryToWriter)
                } else {
                    const e = r.Message.getWrapperField(t, s, o, c ? 1 : 0);
                    e && n.writeMessage(o, e, s.serializeBinaryToWriter)
                }
            else if (u) {
                const e = r.Message.getField(t, o);
                void 0 !== e && u.call(n, o, e)
            } else
                console.assert(u, `Writer func not set for field number ${o} in class ${s}`)
        }
    }
    function d(e) {
        const t = e.proto;
        for (const n in e.fields) {
            const i = e.fields[n]
                , { n: o, c: s, r: a, d: l, q: c } = i;
            i.hasOwnProperty("d") ? t.prototype[n] = m(r.Message.getFieldWithDefault, o, l) : t.prototype[n] = s ? a ? m(r.Message.getRepeatedWrapperField, s, o) : h(s, o) : m(r.Message.getField, o),
                t.prototype[`set_${n}`] = p(s ? a ? r.Message.setRepeatedWrapperField : r.Message.setWrapperField : r.Message.setField, o),
                a && (t.prototype[`add_${n}`] = _(o, s))
        }
    }
    function m(e, ...t) {
        return function () {
            return e(this, ...t)
        }
    }
    function h(e, t) {
        return function (n = !0) {
            return r.Message.getWrapperField(this, e, t, n ? 1 : 0)
        }
    }
    function p(e, t) {
        return function (n) {
            return e(this, t, n)
        }
    }
    function _(e, t) {
        return t ? function (n, i) {
            return r.Message.addToRepeatedWrapperField(this, e, n, t, i)
        }
            : function (t, n) {
                r.Message.addToRepeatedField(this, e, t, n)
            }
    }

    _19320.Bh = s,
        _19320.F = c,
        _19320.FE = i,
        _19320.TA = l,
        _19320.Xc = o,
        _19320.aD = a,
        _19320.aR = d,
        _19320.l2 = u

})()

var _67737 = {};
!(() => {
    var r = _45878
        , i = _19320;
    const o = r.Message;
    class s extends o {
        constructor(e = null) {
            super(),
                s.prototype.v4 || i.aR(s.M()),
                o.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return s.sm_m || (s.sm_m = {
                proto: s,
                fields: {
                    v4: {
                        n: 1,
                        br: i.FE.readFixed32,
                        bw: i.Xc.writeFixed32
                    },
                    v6: {
                        n: 2,
                        br: i.FE.readBytes,
                        bw: i.Xc.writeBytes
                    }
                }
            }),
                s.sm_m
        }
        static MBF() {
            return s.sm_mbf || (s.sm_mbf = i.Bh(s.M())),
                s.sm_mbf
        }
        toObject(e = !1) {
            return s.toObject(e, this)
        }
        static toObject(e, t) {
            return i.TA(s.M(), e, t)
        }
        static fromObject(e) {
            return i.aD(s.M(), e)
        }
        static deserializeBinary(e) {
            let t = new r.BinaryReader(e)
                , n = new s;
            return s.deserializeBinaryFromReader(n, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return i.F(s.MBF(), e, t)
        }
        serializeBinary() {
            var e = new r.BinaryWriter;
            return s.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            i.l2(s.M(), e, t)
        }
        serializeBase64String() {
            var e = new r.BinaryWriter;
            return s.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CMsgIPAddress"
        }
    }
    class a extends o {
        constructor(e = null) {
            super(),
                a.prototype.dst_gcid_queue || i.aR(a.M()),
                o.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return a.sm_m || (a.sm_m = {
                proto: a,
                fields: {
                    dst_gcid_queue: {
                        n: 1,
                        br: i.FE.readUint64String,
                        bw: i.Xc.writeUint64String
                    },
                    dst_gc_dir_index: {
                        n: 2,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    }
                }
            }),
                a.sm_m
        }
        static MBF() {
            return a.sm_mbf || (a.sm_mbf = i.Bh(a.M())),
                a.sm_mbf
        }
        toObject(e = !1) {
            return a.toObject(e, this)
        }
        static toObject(e, t) {
            return i.TA(a.M(), e, t)
        }
        static fromObject(e) {
            return i.aD(a.M(), e)
        }
        static deserializeBinary(e) {
            let t = new r.BinaryReader(e)
                , n = new a;
            return a.deserializeBinaryFromReader(n, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return i.F(a.MBF(), e, t)
        }
        serializeBinary() {
            var e = new r.BinaryWriter;
            return a.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            i.l2(a.M(), e, t)
        }
        serializeBase64String() {
            var e = new r.BinaryWriter;
            return a.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CMsgGCRoutingProtoBufHeader"
        }
    }
    class l extends o {
        constructor(e = null) {
            super(),
                l.prototype.steamid || i.aR(l.M()),
                o.initialize(this, e, 0, -1, [27], null)
        }
        static M() {
            return l.sm_m || (l.sm_m = {
                proto: l,
                fields: {
                    steamid: {
                        n: 1,
                        br: i.FE.readFixed64String,
                        bw: i.Xc.writeFixed64String
                    },
                    client_sessionid: {
                        n: 2,
                        br: i.FE.readInt32,
                        bw: i.Xc.writeInt32
                    },
                    routing_appid: {
                        n: 3,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    jobid_source: {
                        n: 10,
                        d: "18446744073709551615",
                        br: i.FE.readFixed64String,
                        bw: i.Xc.writeFixed64String
                    },
                    jobid_target: {
                        n: 11,
                        d: "18446744073709551615",
                        br: i.FE.readFixed64String,
                        bw: i.Xc.writeFixed64String
                    },
                    target_job_name: {
                        n: 12,
                        br: i.FE.readString,
                        bw: i.Xc.writeString
                    },
                    seq_num: {
                        n: 24,
                        br: i.FE.readInt32,
                        bw: i.Xc.writeInt32
                    },
                    eresult: {
                        n: 13,
                        d: 2,
                        br: i.FE.readInt32,
                        bw: i.Xc.writeInt32
                    },
                    error_message: {
                        n: 14,
                        br: i.FE.readString,
                        bw: i.Xc.writeString
                    },
                    ip: {
                        n: 15,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    ip_v6: {
                        n: 29,
                        br: i.FE.readBytes,
                        bw: i.Xc.writeBytes
                    },
                    auth_account_flags: {
                        n: 16,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    token_source: {
                        n: 22,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    admin_spoofing_user: {
                        n: 23,
                        br: i.FE.readBool,
                        bw: i.Xc.writeBool
                    },
                    transport_error: {
                        n: 17,
                        d: 1,
                        br: i.FE.readInt32,
                        bw: i.Xc.writeInt32
                    },
                    messageid: {
                        n: 18,
                        d: "18446744073709551615",
                        br: i.FE.readUint64String,
                        bw: i.Xc.writeUint64String
                    },
                    publisher_group_id: {
                        n: 19,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    sysid: {
                        n: 20,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    trace_tag: {
                        n: 21,
                        br: i.FE.readUint64String,
                        bw: i.Xc.writeUint64String
                    },
                    webapi_key_id: {
                        n: 25,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    is_from_external_source: {
                        n: 26,
                        br: i.FE.readBool,
                        bw: i.Xc.writeBool
                    },
                    forward_to_sysid: {
                        n: 27,
                        r: !0,
                        q: !0,
                        br: i.FE.readUint32,
                        pbr: i.FE.readPackedUint32,
                        bw: i.Xc.writeRepeatedUint32
                    },
                    cm_sysid: {
                        n: 28,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    launcher_type: {
                        n: 31,
                        d: 0,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    realm: {
                        n: 32,
                        d: 0,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    timeout_ms: {
                        n: 33,
                        d: -1,
                        br: i.FE.readInt32,
                        bw: i.Xc.writeInt32
                    },
                    debug_source: {
                        n: 34,
                        br: i.FE.readString,
                        bw: i.Xc.writeString
                    },
                    debug_source_string_index: {
                        n: 35,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    token_id: {
                        n: 36,
                        br: i.FE.readUint64String,
                        bw: i.Xc.writeUint64String
                    },
                    routing_gc: {
                        n: 37,
                        c: a
                    }
                }
            }),
                l.sm_m
        }
        static MBF() {
            return l.sm_mbf || (l.sm_mbf = i.Bh(l.M())),
                l.sm_mbf
        }
        toObject(e = !1) {
            return l.toObject(e, this)
        }
        static toObject(e, t) {
            return i.TA(l.M(), e, t)
        }
        static fromObject(e) {
            return i.aD(l.M(), e)
        }
        static deserializeBinary(e) {
            let t = new r.BinaryReader(e)
                , n = new l;
            return l.deserializeBinaryFromReader(n, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return i.F(l.MBF(), e, t)
        }
        serializeBinary() {
            var e = new r.BinaryWriter;
            return l.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            i.l2(l.M(), e, t)
        }
        serializeBase64String() {
            var e = new r.BinaryWriter;
            return l.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CMsgProtoBufHeader"
        }
    }
    class c extends o {
        constructor(e = null) {
            super(),
                c.prototype.size_unzipped || i.aR(c.M()),
                o.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return c.sm_m || (c.sm_m = {
                proto: c,
                fields: {
                    size_unzipped: {
                        n: 1,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    message_body: {
                        n: 2,
                        br: i.FE.readBytes,
                        bw: i.Xc.writeBytes
                    }
                }
            }),
                c.sm_m
        }
        static MBF() {
            return c.sm_mbf || (c.sm_mbf = i.Bh(c.M())),
                c.sm_mbf
        }
        toObject(e = !1) {
            return c.toObject(e, this)
        }
        static toObject(e, t) {
            return i.TA(c.M(), e, t)
        }
        static fromObject(e) {
            return i.aD(c.M(), e)
        }
        static deserializeBinary(e) {
            let t = new r.BinaryReader(e)
                , n = new c;
            return c.deserializeBinaryFromReader(n, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return i.F(c.MBF(), e, t)
        }
        serializeBinary() {
            var e = new r.BinaryWriter;
            return c.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            i.l2(c.M(), e, t)
        }
        serializeBase64String() {
            var e = new r.BinaryWriter;
            return c.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CMsgMulti"
        }
    }
    class u extends o {
        constructor(e = null) {
            super(),
                u.prototype.appid || i.aR(u.M()),
                o.initialize(this, e, 0, -1, [17], null)
        }
        static M() {
            return u.sm_m || (u.sm_m = {
                proto: u,
                fields: {
                    appid: {
                        n: 1,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    name: {
                        n: 2,
                        br: i.FE.readString,
                        bw: i.Xc.writeString
                    },
                    icon: {
                        n: 3,
                        br: i.FE.readString,
                        bw: i.Xc.writeString
                    },
                    tool: {
                        n: 6,
                        br: i.FE.readBool,
                        bw: i.Xc.writeBool
                    },
                    demo: {
                        n: 7,
                        br: i.FE.readBool,
                        bw: i.Xc.writeBool
                    },
                    media: {
                        n: 8,
                        br: i.FE.readBool,
                        bw: i.Xc.writeBool
                    },
                    community_visible_stats: {
                        n: 9,
                        br: i.FE.readBool,
                        bw: i.Xc.writeBool
                    },
                    friendly_name: {
                        n: 10,
                        br: i.FE.readString,
                        bw: i.Xc.writeString
                    },
                    propagation: {
                        n: 11,
                        br: i.FE.readString,
                        bw: i.Xc.writeString
                    },
                    has_adult_content: {
                        n: 12,
                        br: i.FE.readBool,
                        bw: i.Xc.writeBool
                    },
                    is_visible_in_steam_china: {
                        n: 13,
                        br: i.FE.readBool,
                        bw: i.Xc.writeBool
                    },
                    app_type: {
                        n: 14,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    has_adult_content_sex: {
                        n: 15,
                        br: i.FE.readBool,
                        bw: i.Xc.writeBool
                    },
                    has_adult_content_violence: {
                        n: 16,
                        br: i.FE.readBool,
                        bw: i.Xc.writeBool
                    },
                    content_descriptorids: {
                        n: 17,
                        r: !0,
                        q: !0,
                        br: i.FE.readUint32,
                        pbr: i.FE.readPackedUint32,
                        bw: i.Xc.writeRepeatedUint32
                    }
                }
            }),
                u.sm_m
        }
        static MBF() {
            return u.sm_mbf || (u.sm_mbf = i.Bh(u.M())),
                u.sm_mbf
        }
        toObject(e = !1) {
            return u.toObject(e, this)
        }
        static toObject(e, t) {
            return i.TA(u.M(), e, t)
        }
        static fromObject(e) {
            return i.aD(u.M(), e)
        }
        static deserializeBinary(e) {
            let t = new r.BinaryReader(e)
                , n = new u;
            return u.deserializeBinaryFromReader(n, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return i.F(u.MBF(), e, t)
        }
        serializeBinary() {
            var e = new r.BinaryWriter;
            return u.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            i.l2(u.M(), e, t)
        }
        serializeBase64String() {
            var e = new r.BinaryWriter;
            return u.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CCDDBAppDetailCommon"
        }
    }
    class d extends o {
        constructor(e = null) {
            super(),
                d.prototype.clanid || i.aR(d.M()),
                o.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return d.sm_m || (d.sm_m = {
                proto: d,
                fields: {
                    clanid: {
                        n: 1,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    event_gid: {
                        n: 2,
                        br: i.FE.readFixed64String,
                        bw: i.Xc.writeFixed64String
                    },
                    announcement_gid: {
                        n: 3,
                        br: i.FE.readFixed64String,
                        bw: i.Xc.writeFixed64String
                    },
                    rtime_start: {
                        n: 4,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    rtime_end: {
                        n: 5,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    priority_score: {
                        n: 6,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    type: {
                        n: 7,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    clamp_range_slot: {
                        n: 8,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    appid: {
                        n: 9,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    rtime32_last_modified: {
                        n: 10,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    }
                }
            }),
                d.sm_m
        }
        static MBF() {
            return d.sm_mbf || (d.sm_mbf = i.Bh(d.M())),
                d.sm_mbf
        }
        toObject(e = !1) {
            return d.toObject(e, this)
        }
        static toObject(e, t) {
            return i.TA(d.M(), e, t)
        }
        static fromObject(e) {
            return i.aD(d.M(), e)
        }
        static deserializeBinary(e) {
            let t = new r.BinaryReader(e)
                , n = new d;
            return d.deserializeBinaryFromReader(n, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return i.F(d.MBF(), e, t)
        }
        serializeBinary() {
            var e = new r.BinaryWriter;
            return d.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            i.l2(d.M(), e, t)
        }
        serializeBase64String() {
            var e = new r.BinaryWriter;
            return d.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CClanEventUserNewsTuple"
        }
    }
    class m extends o {
        constructor(e = null) {
            super(),
                m.prototype.rtime_before || i.aR(m.M()),
                o.initialize(this, e, 0, -1, [4], null)
        }
        static M() {
            return m.sm_m || (m.sm_m = {
                proto: m,
                fields: {
                    rtime_before: {
                        n: 1,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    rtime_after: {
                        n: 2,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    qualified: {
                        n: 3,
                        br: i.FE.readUint32,
                        bw: i.Xc.writeUint32
                    },
                    events: {
                        n: 4,
                        c: d,
                        r: !0,
                        q: !0
                    }
                }
            }),
                m.sm_m
        }
        static MBF() {
            return m.sm_mbf || (m.sm_mbf = i.Bh(m.M())),
                m.sm_mbf
        }
        toObject(e = !1) {
            return m.toObject(e, this)
        }
        static toObject(e, t) {
            return i.TA(m.M(), e, t)
        }
        static fromObject(e) {
            return i.aD(m.M(), e)
        }
        static deserializeBinary(e) {
            let t = new r.BinaryReader(e)
                , n = new m;
            return m.deserializeBinaryFromReader(n, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return i.F(m.MBF(), e, t)
        }
        serializeBinary() {
            var e = new r.BinaryWriter;
            return m.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            i.l2(m.M(), e, t)
        }
        serializeBase64String() {
            var e = new r.BinaryWriter;
            return m.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CClanMatchEventByRange"
        }
    }
    _67737.Cu = l,
        _67737.VJ = u,
        _67737.j7 = s,
        _67737.ne = c,
        _67737.uV = m

})()


var _17922 = {};
!(() => {
    var r = _45878
    o = _43057;
    class s {
        constructor(e, t, n, o, s) {
            if (o)
                this.m_eMsg = o.m_eMsg,
                    this.m_bValid = o.m_bValid,
                    this.m_bValid && (this.m_netPacket = o.m_netPacket,
                        this.m_cubHeader = o.m_cubHeader,
                        this.m_header = o.m_header,
                        this.InitForType(n));
            else {
                if (this.m_header = new _67737.Cu(null),
                    this.m_bValid = !0,
                    t)
                    if (this.m_netPacket = t,
                        this.m_netPacket.SeekGetHead(),
                        this.m_eMsg = this.m_netPacket.GetUint32(),
                        2147483648 & this.m_eMsg) {
                        this.m_eMsg = 2147483647 & this.m_eMsg,
                            this.m_cubHeader = this.m_netPacket.GetUint32();
                        try {
                            i.Cu.deserializeBinaryFromReader(this.m_header, new r.BinaryReader(this.m_netPacket.GetPacket(), this.m_netPacket.TellGet(), this.m_cubHeader)),
                                this.m_netPacket.SeekGetCurrent(this.m_cubHeader),
                                n && this.InitForType(n)
                        } catch (e) {
                            console.error("Exception deserializing protobuf", e),
                                this.m_bValid = !1
                        }
                    } else
                        this.m_bValid = !1;
                else
                    e && (this.m_eMsg = e),
                        n && (this.m_body = new n);
                s && this.m_header.set_jobid_target(s.Hdr().jobid_target())
            }
        }
        static InstallErrorReportingStore(e) {
            this.sm_ErrorReportingStore = e
        }
        static InitHeaderFromPacket(e) {
            return new s(void 0, e)
        }
        InitForType(e) {
            if (this.m_body = new e,
                this.m_netPacket) {
                this.m_netPacket.SeekGetHead(8 + this.m_cubHeader);
                try {
                    e.deserializeBinaryFromReader(this.m_body, new r.BinaryReader(this.m_netPacket.GetPacket(), this.m_netPacket.TellGet(), this.m_netPacket.GetCountBytesRemaining()))
                } catch (e) {
                    this.m_bValid = !1;
                    const t = s.sm_ErrorReportingStore
                        , n = `Exception parsing protobuf message body of type ${this.m_eMsg}.  Definitions may be out of sync with server version.`;
                    t && t.ReportError(new Error(n), {
                        bIncludeMessageInIdentifier: !0
                    }),
                        console.warn(n),
                        console.log(e.stack || e)
                }
            }
        }
        BIsValid() {
            return this.m_bValid
        }
        Body() {
            return this.m_body
        }
        SetBodyJSON(e) {
            e.toObject = () => e,
                this.m_body = e
        }
        Hdr() {
            return this.m_header
        }
        GetEMsg() {
            return this.m_eMsg
        }
        SetEMsg(e) {
            this.m_eMsg = e
        }
        GetEResult() {
            return this.Hdr().eresult()
        }
        BSuccess() {
            return 1 == this.Hdr().eresult()
        }
        GetErrorMessage() {
            return this.Hdr().error_message() ? this.Hdr().error_message() : `eresult ${this.Hdr().eresult()}`
        }
        Serialize() {
            let e = this.m_header.serializeBinary()
                , t = this.m_body.serializeBinary()
                , n = 2147483648 | this.m_eMsg
                , r = new Uint8Array(8 + e.length + t.length)
                , i = new o.At(r);
            return i.PutUint32(n),
                i.PutUint32(e.length),
                i.PutBytes(e),
                i.PutBytes(t),
                r
        }
        SerializeBody() {
            let e = this.m_body.serializeBinary()
                , t = new Uint8Array(e.length);
            return new o.At(t).PutBytes(e),
                t
        }
        DEBUG_ToObject() {
            return {}
        }
        DEBUG_LogToConsole() {
            0
        }
    }
    class a extends s {
        constructor(e, t = 0, n, r) {
            super(t, n, e, r)
        }
        static InitFromPacket(e, t) {
            return new a(e, 0, t)
        }
        static InitFromMsg(e, t) {
            return new a(e, void 0, void 0, t)
        }
        static Init(e, t) {
            return new a(e, t)
        }
        Body() {
            return super.Body()
        }
        SetBodyFields(e) {
            for (let t in e)
                Array.isArray(e[t]) ? this.Body()[`add_${t}`] && e[t].forEach((e => {
                    this.Body()[`add_${t}`](e)
                }
                )) : this.Body()[`set_${t}`] && this.Body()[`set_${t}`](e[t])
        }
    }

    _17922.gA = a,
        _17922.lq = s

})()


var _5155 = {};
!((t) => {
    "use strict";
    t.b$ = function (e) {
        for (var t, r = u(e), i = r[0], a = r[1], s = new o(function (e, t, r) {
            return 3 * (t + r) / 4 - r
        }(0, i, a)), l = 0, c = a > 0 ? i - 4 : i, g = 0; g < c; g += 4)
            t = n[e.charCodeAt(g)] << 18 | n[e.charCodeAt(g + 1)] << 12 | n[e.charCodeAt(g + 2)] << 6 | n[e.charCodeAt(g + 3)],
                s[l++] = t >> 16 & 255,
                s[l++] = t >> 8 & 255,
                s[l++] = 255 & t;
        2 === a && (t = n[e.charCodeAt(g)] << 2 | n[e.charCodeAt(g + 1)] >> 4,
            s[l++] = 255 & t);
        1 === a && (t = n[e.charCodeAt(g)] << 10 | n[e.charCodeAt(g + 1)] << 4 | n[e.charCodeAt(g + 2)] >> 2,
            s[l++] = t >> 8 & 255,
            s[l++] = 255 & t);
        return s
    }
        ,
        t.JQ = function (e) {
            for (var t, n = e.length, o = n % 3, i = [], a = 16383, s = 0, u = n - o; s < u; s += a)
                i.push(l(e, s, s + a > u ? u : s + a));
            1 === o ? (t = e[n - 1],
                i.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === o && (t = (e[n - 2] << 8) + e[n - 1],
                    i.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
            return i.join("")
        }
        ;
    for (var r = [], n = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = i.length; a < s; ++a)
        r[a] = i[a],
            n[i.charCodeAt(a)] = a;
    function u(e) {
        var t = e.length;
        if (t % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t),
            [r, r === t ? 0 : 4 - r % 4]
    }
    function l(e, t, n) {
        for (var o, i, a = [], s = t; s < n; s += 3)
            o = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]),
                a.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
        return a.join("")
    }
    n["-".charCodeAt(0)] = 62,
        n["_".charCodeAt(0)] = 63
})(_5155)



_59669 = {};
!(() => {
    var i = _45878
        , n = _19320,
        a = _67737;

    const s = _45878.Message;
    class o extends s {
        constructor(e = null) {
            super(),
                o.prototype.account_name || n.aR(o.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return o.sm_m || (o.sm_m = {
                proto: o,
                fields: {
                    account_name: {
                        n: 1,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    }
                }
            }),
                o.sm_m
        }
        static MBF() {
            return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())),
                o.sm_mbf
        }
        toObject(e = !1) {
            return o.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(o.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(o.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new o;
            return o.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(o.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return o.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(o.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return o.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_GetPasswordRSAPublicKey_Request"
        }
    }
    class l extends s {
        constructor(e = null) {
            super(),
                l.prototype.publickey_mod || n.aR(l.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return l.sm_m || (l.sm_m = {
                proto: l,
                fields: {
                    publickey_mod: {
                        n: 1,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    publickey_exp: {
                        n: 2,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    timestamp: {
                        n: 3,
                        br: n.FE.readUint64String,
                        bw: n.Xc.writeUint64String
                    }
                }
            }),
                l.sm_m
        }
        static MBF() {
            return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())),
                l.sm_mbf
        }
        toObject(e = !1) {
            return l.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(l.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(l.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new l;
            return l.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(l.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return l.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(l.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return l.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_GetPasswordRSAPublicKey_Response"
        }
    }
    class c extends s {
        constructor(e = null) {
            super(),
                c.prototype.device_friendly_name || n.aR(c.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return c.sm_m || (c.sm_m = {
                proto: c,
                fields: {
                    device_friendly_name: {
                        n: 1,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    platform_type: {
                        n: 2,
                        br: n.FE.readEnum,
                        bw: n.Xc.writeEnum
                    },
                    os_type: {
                        n: 3,
                        br: n.FE.readInt32,
                        bw: n.Xc.writeInt32
                    },
                    gaming_device_type: {
                        n: 4,
                        br: n.FE.readUint32,
                        bw: n.Xc.writeUint32
                    }
                }
            }),
                c.sm_m
        }
        static MBF() {
            return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())),
                c.sm_mbf
        }
        toObject(e = !1) {
            return c.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(c.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(c.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new c;
            return c.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(c.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return c.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(c.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return c.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_DeviceDetails"
        }
    }
    class u extends s {
        constructor(e = null) {
            super(),
                u.prototype.confirmation_type || n.aR(u.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return u.sm_m || (u.sm_m = {
                proto: u,
                fields: {
                    confirmation_type: {
                        n: 1,
                        br: n.FE.readEnum,
                        bw: n.Xc.writeEnum
                    },
                    associated_message: {
                        n: 2,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    }
                }
            }),
                u.sm_m
        }
        static MBF() {
            return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())),
                u.sm_mbf
        }
        toObject(e = !1) {
            return u.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(u.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(u.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new u;
            return u.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(u.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return u.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(u.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return u.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_AllowedConfirmation"
        }
    }
    class m extends s {
        constructor(e = null) {
            super(),
                m.prototype.device_friendly_name || n.aR(m.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return m.sm_m || (m.sm_m = {
                proto: m,
                fields: {
                    device_friendly_name: {
                        n: 1,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    platform_type: {
                        n: 2,
                        br: n.FE.readEnum,
                        bw: n.Xc.writeEnum
                    },
                    device_details: {
                        n: 3,
                        c
                    },
                    website_id: {
                        n: 4,
                        d: "Unknown",
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    }
                }
            }),
                m.sm_m
        }
        static MBF() {
            return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())),
                m.sm_mbf
        }
        toObject(e = !1) {
            return m.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(m.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(m.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new m;
            return m.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(m.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return m.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(m.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return m.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_BeginAuthSessionViaQR_Request"
        }
    }
    class d extends s {
        constructor(e = null) {
            super(),
                d.prototype.client_id || n.aR(d.M()),
                s.initialize(this, e, 0, -1, [5], null)
        }
        static M() {
            return d.sm_m || (d.sm_m = {
                proto: d,
                fields: {
                    client_id: {
                        n: 1,
                        br: n.FE.readUint64String,
                        bw: n.Xc.writeUint64String
                    },
                    challenge_url: {
                        n: 2,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    request_id: {
                        n: 3,
                        br: n.FE.readBytes,
                        bw: n.Xc.writeBytes
                    },
                    interval: {
                        n: 4,
                        br: n.FE.readFloat,
                        bw: n.Xc.writeFloat
                    },
                    allowed_confirmations: {
                        n: 5,
                        c: u,
                        r: !0,
                        q: !0
                    },
                    version: {
                        n: 6,
                        br: n.FE.readInt32,
                        bw: n.Xc.writeInt32
                    }
                }
            }),
                d.sm_m
        }
        static MBF() {
            return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())),
                d.sm_mbf
        }
        toObject(e = !1) {
            return d.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(d.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(d.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new d;
            return d.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(d.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return d.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(d.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return d.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_BeginAuthSessionViaQR_Response"
        }
    }
    class h extends s {
        constructor(e = null) {
            super(),
                h.prototype.device_friendly_name || n.aR(h.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return h.sm_m || (h.sm_m = {
                proto: h,
                fields: {
                    device_friendly_name: {
                        n: 1,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    account_name: {
                        n: 2,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    encrypted_password: {
                        n: 3,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    encryption_timestamp: {
                        n: 4,
                        br: n.FE.readUint64String,
                        bw: n.Xc.writeUint64String
                    },
                    remember_login: {
                        n: 5,
                        br: n.FE.readBool,
                        bw: n.Xc.writeBool
                    },
                    platform_type: {
                        n: 6,
                        br: n.FE.readEnum,
                        bw: n.Xc.writeEnum
                    },
                    persistence: {
                        n: 7,
                        d: 1,
                        br: n.FE.readEnum,
                        bw: n.Xc.writeEnum
                    },
                    website_id: {
                        n: 8,
                        d: "Unknown",
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    device_details: {
                        n: 9,
                        c
                    },
                    guard_data: {
                        n: 10,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    language: {
                        n: 11,
                        br: n.FE.readUint32,
                        bw: n.Xc.writeUint32
                    }
                }
            }),
                h.sm_m
        }
        static MBF() {
            return h.sm_mbf || (h.sm_mbf = n.Bh(h.M())),
                h.sm_mbf
        }
        toObject(e = !1) {
            return h.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(h.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(h.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new h;
            return h.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(h.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return h.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(h.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return h.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_BeginAuthSessionViaCredentials_Request"
        }
    }
    class g extends s {
        constructor(e = null) {
            super(),
                g.prototype.client_id || n.aR(g.M()),
                s.initialize(this, e, 0, -1, [4], null)
        }
        static M() {
            return g.sm_m || (g.sm_m = {
                proto: g,
                fields: {
                    client_id: {
                        n: 1,
                        br: n.FE.readUint64String,
                        bw: n.Xc.writeUint64String
                    },
                    request_id: {
                        n: 2,
                        br: n.FE.readBytes,
                        bw: n.Xc.writeBytes
                    },
                    interval: {
                        n: 3,
                        br: n.FE.readFloat,
                        bw: n.Xc.writeFloat
                    },
                    allowed_confirmations: {
                        n: 4,
                        c: u,
                        r: !0,
                        q: !0
                    },
                    steamid: {
                        n: 5,
                        br: n.FE.readUint64String,
                        bw: n.Xc.writeUint64String
                    },
                    weak_token: {
                        n: 6,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    agreement_session_url: {
                        n: 7,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    extended_error_message: {
                        n: 8,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    }
                }
            }),
                g.sm_m
        }
        static MBF() {
            return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())),
                g.sm_mbf
        }
        toObject(e = !1) {
            return g.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(g.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(g.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new g;
            return g.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(g.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return g.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(g.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return g.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_BeginAuthSessionViaCredentials_Response"
        }
    }
    class f extends s {
        constructor(e = null) {
            super(),
                f.prototype.client_id || n.aR(f.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return f.sm_m || (f.sm_m = {
                proto: f,
                fields: {
                    client_id: {
                        n: 1,
                        br: n.FE.readUint64String,
                        bw: n.Xc.writeUint64String
                    },
                    request_id: {
                        n: 2,
                        br: n.FE.readBytes,
                        bw: n.Xc.writeBytes
                    },
                    token_to_revoke: {
                        n: 3,
                        br: n.FE.readFixed64String,
                        bw: n.Xc.writeFixed64String
                    }
                }
            }),
                f.sm_m
        }
        static MBF() {
            return f.sm_mbf || (f.sm_mbf = n.Bh(f.M())),
                f.sm_mbf
        }
        toObject(e = !1) {
            return f.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(f.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(f.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new f;
            return f.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(f.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return f.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(f.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return f.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_PollAuthSessionStatus_Request"
        }
    }
    class _ extends s {
        constructor(e = null) {
            super(),
                _.prototype.new_client_id || n.aR(_.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return _.sm_m || (_.sm_m = {
                proto: _,
                fields: {
                    new_client_id: {
                        n: 1,
                        br: n.FE.readUint64String,
                        bw: n.Xc.writeUint64String
                    },
                    new_challenge_url: {
                        n: 2,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    refresh_token: {
                        n: 3,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    access_token: {
                        n: 4,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    had_remote_interaction: {
                        n: 5,
                        br: n.FE.readBool,
                        bw: n.Xc.writeBool
                    },
                    account_name: {
                        n: 6,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    new_guard_data: {
                        n: 7,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    agreement_session_url: {
                        n: 8,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    }
                }
            }),
                _.sm_m
        }
        static MBF() {
            return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())),
                _.sm_mbf
        }
        toObject(e = !1) {
            return _.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(_.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(_.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new _;
            return _.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            // console.log(t)
            return n.F(_.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return _.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(_.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return _.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_PollAuthSessionStatus_Response"
        }
    }
    class b extends s {
        constructor(e = null) {
            super(),
                b.prototype.ip || n.aR(b.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return b.sm_m || (b.sm_m = {
                proto: b,
                fields: {
                    ip: {
                        n: 1,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    geoloc: {
                        n: 2,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    city: {
                        n: 3,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    state: {
                        n: 4,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    country: {
                        n: 5,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    platform_type: {
                        n: 6,
                        br: n.FE.readEnum,
                        bw: n.Xc.writeEnum
                    },
                    device_friendly_name: {
                        n: 7,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    version: {
                        n: 8,
                        br: n.FE.readInt32,
                        bw: n.Xc.writeInt32
                    },
                    login_history: {
                        n: 9,
                        br: n.FE.readEnum,
                        bw: n.Xc.writeEnum
                    },
                    requestor_location_mismatch: {
                        n: 10,
                        br: n.FE.readBool,
                        bw: n.Xc.writeBool
                    },
                    high_usage_login: {
                        n: 11,
                        br: n.FE.readBool,
                        bw: n.Xc.writeBool
                    },
                    requested_persistence: {
                        n: 12,
                        br: n.FE.readEnum,
                        bw: n.Xc.writeEnum
                    }
                }
            }),
                b.sm_m
        }
        static MBF() {
            return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())),
                b.sm_mbf
        }
        toObject(e = !1) {
            return b.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(b.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(b.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new b;
            return b.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(b.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return b.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(b.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return b.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_GetAuthSessionInfo_Response"
        }
    }
    class p extends s {
        constructor(e = null) {
            super(),
                p.prototype.client_ids || n.aR(p.M()),
                s.initialize(this, e, 0, -1, [1], null)
        }
        static M() {
            return p.sm_m || (p.sm_m = {
                proto: p,
                fields: {
                    client_ids: {
                        n: 1,
                        r: !0,
                        q: !0,
                        br: n.FE.readUint64String,
                        pbr: n.FE.readPackedUint64String,
                        bw: n.Xc.writeRepeatedUint64String
                    }
                }
            }),
                p.sm_m
        }
        static MBF() {
            return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())),
                p.sm_mbf
        }
        toObject(e = !1) {
            return p.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(p.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(p.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new p;
            return p.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(p.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return p.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(p.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return p.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_GetAuthSessionsForAccount_Response"
        }
    }
    class y extends s {
        constructor(e = null) {
            super(),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        toObject(e = !1) {
            return y.toObject(e, this)
        }
        static toObject(e, t) {
            return e ? {
                $jspbMessageInstance: t
            } : {}
        }
        static fromObject(e) {
            return new y
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new y;
            return y.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return e
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return y.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) { }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return y.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response"
        }
    }
    class B extends s {
        constructor(e = null) {
            super(),
                B.prototype.client_id || n.aR(B.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return B.sm_m || (B.sm_m = {
                proto: B,
                fields: {
                    client_id: {
                        n: 1,
                        br: n.FE.readUint64String,
                        bw: n.Xc.writeUint64String
                    },
                    steamid: {
                        n: 2,
                        br: n.FE.readFixed64String,
                        bw: n.Xc.writeFixed64String
                    },
                    code: {
                        n: 3,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    code_type: {
                        n: 4,
                        br: n.FE.readEnum,
                        bw: n.Xc.writeEnum
                    }
                }
            }),
                B.sm_m
        }
        static MBF() {
            return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())),
                B.sm_mbf
        }
        toObject(e = !1) {
            return B.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(B.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(B.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new B;
            return B.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(B.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return B.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(B.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return B.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request"
        }
    }
    class w extends s {
        constructor(e = null) {
            super(),
                w.prototype.agreement_session_url || n.aR(w.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return w.sm_m || (w.sm_m = {
                proto: w,
                fields: {
                    agreement_session_url: {
                        n: 7,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    }
                }
            }),
                w.sm_m
        }
        static MBF() {
            return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())),
                w.sm_mbf
        }
        toObject(e = !1) {
            return w.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(w.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(w.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new w;
            return w.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(w.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return w.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(w.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return w.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response"
        }
    }
    class S extends s {
        constructor(e = null) {
            super(),
                S.prototype.access_token || n.aR(S.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return S.sm_m || (S.sm_m = {
                proto: S,
                fields: {
                    access_token: {
                        n: 1,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    }
                }
            }),
                S.sm_m
        }
        static MBF() {
            return S.sm_mbf || (S.sm_mbf = n.Bh(S.M())),
                S.sm_mbf
        }
        toObject(e = !1) {
            return S.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(S.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(S.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new S;
            return S.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(S.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return S.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(S.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return S.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_AccessToken_GenerateForApp_Response"
        }
    }
    class E extends s {
        constructor(e = null) {
            super(),
                E.prototype.refresh_tokens || n.aR(E.M()),
                s.initialize(this, e, 0, -1, [1], null)
        }
        static M() {
            return E.sm_m || (E.sm_m = {
                proto: E,
                fields: {
                    refresh_tokens: {
                        n: 1,
                        c: C,
                        r: !0,
                        q: !0
                    },
                    requesting_token: {
                        n: 2,
                        br: n.FE.readFixed64String,
                        bw: n.Xc.writeFixed64String
                    }
                }
            }),
                E.sm_m
        }
        static MBF() {
            return E.sm_mbf || (E.sm_mbf = n.Bh(E.M())),
                E.sm_mbf
        }
        toObject(e = !1) {
            return E.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(E.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(E.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new E;
            return E.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(E.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return E.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(E.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return E.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response"
        }
    }
    class v extends s {
        constructor(e = null) {
            super(),
                v.prototype.time || n.aR(v.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return v.sm_m || (v.sm_m = {
                proto: v,
                fields: {
                    time: {
                        n: 1,
                        br: n.FE.readUint32,
                        bw: n.Xc.writeUint32
                    },
                    ip: {
                        n: 2,
                        c: a.j7
                    },
                    locale: {
                        n: 3,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    country: {
                        n: 4,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    state: {
                        n: 5,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    city: {
                        n: 6,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    }
                }
            }),
                v.sm_m
        }
        static MBF() {
            return v.sm_mbf || (v.sm_mbf = n.Bh(v.M())),
                v.sm_mbf
        }
        toObject(e = !1) {
            return v.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(v.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(v.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new v;
            return v.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(v.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return v.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(v.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return v.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent"
        }
    }
    class C extends s {
        constructor(e = null) {
            super(),
                C.prototype.token_id || n.aR(C.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return C.sm_m || (C.sm_m = {
                proto: C,
                fields: {
                    token_id: {
                        n: 1,
                        br: n.FE.readFixed64String,
                        bw: n.Xc.writeFixed64String
                    },
                    token_description: {
                        n: 2,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    time_updated: {
                        n: 3,
                        br: n.FE.readUint32,
                        bw: n.Xc.writeUint32
                    },
                    platform_type: {
                        n: 4,
                        br: n.FE.readEnum,
                        bw: n.Xc.writeEnum
                    },
                    logged_in: {
                        n: 5,
                        br: n.FE.readBool,
                        bw: n.Xc.writeBool
                    },
                    os_platform: {
                        n: 6,
                        br: n.FE.readUint32,
                        bw: n.Xc.writeUint32
                    },
                    auth_type: {
                        n: 7,
                        br: n.FE.readUint32,
                        bw: n.Xc.writeUint32
                    },
                    gaming_device_type: {
                        n: 8,
                        br: n.FE.readUint32,
                        bw: n.Xc.writeUint32
                    },
                    first_seen: {
                        n: 9,
                        c: v
                    },
                    last_seen: {
                        n: 10,
                        c: v
                    },
                    os_type: {
                        n: 11,
                        br: n.FE.readInt32,
                        bw: n.Xc.writeInt32
                    }
                }
            }),
                C.sm_m
        }
        static MBF() {
            return C.sm_mbf || (C.sm_mbf = n.Bh(C.M())),
                C.sm_mbf
        }
        toObject(e = !1) {
            return C.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(C.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(C.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new C;
            return C.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(C.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return C.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(C.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return C.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription"
        }
    }
    class R extends s {
        constructor(e = null) {
            super(),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        toObject(e = !1) {
            return R.toObject(e, this)
        }
        static toObject(e, t) {
            return e ? {
                $jspbMessageInstance: t
            } : {}
        }
        static fromObject(e) {
            return new R
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new R;
            return R.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return e
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return R.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) { }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return R.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_RefreshToken_Revoke_Response"
        }
    }
    class M extends s {
        constructor(e = null) {
            super(),
                M.prototype.refresh_token || n.aR(M.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return M.sm_m || (M.sm_m = {
                proto: M,
                fields: {
                    refresh_token: {
                        n: 1,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    access_token: {
                        n: 2,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    }
                }
            }),
                M.sm_m
        }
        static MBF() {
            return M.sm_mbf || (M.sm_mbf = n.Bh(M.M())),
                M.sm_mbf
        }
        toObject(e = !1) {
            return M.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(M.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(M.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new M;
            return M.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(M.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return M.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(M.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return M.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthentication_MigrateMobileSession_Response"
        }
    }
    class T extends s {
        constructor(e = null) {
            super(),
                T.prototype.token_id || n.aR(T.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return T.sm_m || (T.sm_m = {
                proto: T,
                fields: {
                    token_id: {
                        n: 1,
                        br: n.FE.readFixed64String,
                        bw: n.Xc.writeFixed64String
                    },
                    token_description: {
                        n: 2,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    time_updated: {
                        n: 3,
                        br: n.FE.readUint32,
                        bw: n.Xc.writeUint32
                    },
                    platform_type: {
                        n: 4,
                        br: n.FE.readEnum,
                        bw: n.Xc.writeEnum
                    },
                    token_state: {
                        n: 5,
                        br: n.FE.readEnum,
                        bw: n.Xc.writeEnum
                    },
                    owner_steamid: {
                        n: 6,
                        br: n.FE.readFixed64String,
                        bw: n.Xc.writeFixed64String
                    },
                    os_platform: {
                        n: 7,
                        br: n.FE.readUint32,
                        bw: n.Xc.writeUint32
                    },
                    os_type: {
                        n: 8,
                        br: n.FE.readInt32,
                        bw: n.Xc.writeInt32
                    },
                    auth_type: {
                        n: 9,
                        br: n.FE.readUint32,
                        bw: n.Xc.writeUint32
                    },
                    gaming_device_type: {
                        n: 10,
                        br: n.FE.readUint32,
                        bw: n.Xc.writeUint32
                    },
                    first_seen: {
                        n: 11,
                        c: F
                    },
                    last_seen: {
                        n: 12,
                        c: F
                    }
                }
            }),
                T.sm_m
        }
        static MBF() {
            return T.sm_mbf || (T.sm_mbf = n.Bh(T.M())),
                T.sm_mbf
        }
        toObject(e = !1) {
            return T.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(T.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(T.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new T;
            return T.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(T.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return T.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(T.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return T.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CSupportRefreshTokenDescription"
        }
    }
    class F extends s {
        constructor(e = null) {
            super(),
                F.prototype.time || n.aR(F.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return F.sm_m || (F.sm_m = {
                proto: F,
                fields: {
                    time: {
                        n: 1,
                        br: n.FE.readUint32,
                        bw: n.Xc.writeUint32
                    },
                    ip: {
                        n: 2,
                        c: a.j7
                    },
                    country: {
                        n: 3,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    state: {
                        n: 4,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    city: {
                        n: 5,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    }
                }
            }),
                F.sm_m
        }
        static MBF() {
            return F.sm_mbf || (F.sm_mbf = n.Bh(F.M())),
                F.sm_mbf
        }
        toObject(e = !1) {
            return F.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(F.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(F.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new F;
            return F.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(F.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return F.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(F.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return F.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CSupportRefreshTokenDescription_TokenUsageEvent"
        }
    }
    class z extends s {
        constructor(e = null) {
            super(),
                z.prototype.action || n.aR(z.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return z.sm_m || (z.sm_m = {
                proto: z,
                fields: {
                    action: {
                        n: 1,
                        br: n.FE.readInt32,
                        bw: n.Xc.writeInt32
                    },
                    time: {
                        n: 2,
                        br: n.FE.readUint32,
                        bw: n.Xc.writeUint32
                    },
                    ip: {
                        n: 3,
                        c: a.j7
                    },
                    actor: {
                        n: 4,
                        br: n.FE.readFixed64String,
                        bw: n.Xc.writeFixed64String
                    }
                }
            }),
                z.sm_m
        }
        static MBF() {
            return z.sm_mbf || (z.sm_mbf = n.Bh(z.M())),
                z.sm_mbf
        }
        toObject(e = !1) {
            return z.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(z.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(z.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new z;
            return z.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(z.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return z.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(z.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return z.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CSupportRefreshTokenAudit"
        }
    }
    class k extends s {
        constructor(e = null) {
            super(),
                k.prototype.refresh_tokens || n.aR(k.M()),
                s.initialize(this, e, 0, -1, [1], null)
        }
        static M() {
            return k.sm_m || (k.sm_m = {
                proto: k,
                fields: {
                    refresh_tokens: {
                        n: 1,
                        c: T,
                        r: !0,
                        q: !0
                    },
                    last_token_reset: {
                        n: 2,
                        br: n.FE.readInt32,
                        bw: n.Xc.writeInt32
                    }
                }
            }),
                k.sm_m
        }
        static MBF() {
            return k.sm_mbf || (k.sm_mbf = n.Bh(k.M())),
                k.sm_mbf
        }
        toObject(e = !1) {
            return k.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(k.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(k.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new k;
            return k.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(k.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return k.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(k.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return k.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokensByAccount_Response"
        }
    }
    class A extends s {
        constructor(e = null) {
            super(),
                A.prototype.refresh_tokens || n.aR(A.M()),
                s.initialize(this, e, 0, -1, [1], null)
        }
        static M() {
            return A.sm_m || (A.sm_m = {
                proto: A,
                fields: {
                    refresh_tokens: {
                        n: 1,
                        c: T,
                        r: !0,
                        q: !0
                    }
                }
            }),
                A.sm_m
        }
        static MBF() {
            return A.sm_mbf || (A.sm_mbf = n.Bh(A.M())),
                A.sm_mbf
        }
        toObject(e = !1) {
            return A.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(A.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(A.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new A;
            return A.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(A.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return A.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(A.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return A.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokenByID_Response"
        }
    }
    class L extends s {
        constructor(e = null) {
            super(),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        toObject(e = !1) {
            return L.toObject(e, this)
        }
        static toObject(e, t) {
            return e ? {
                $jspbMessageInstance: t
            } : {}
        }
        static fromObject(e) {
            return new L
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new L;
            return L.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return e
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return L.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) { }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return L.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthenticationSupport_RevokeToken_Response"
        }
    }
    class N extends s {
        constructor(e = null) {
            super(),
                N.prototype.history || n.aR(N.M()),
                s.initialize(this, e, 0, -1, [1], null)
        }
        static M() {
            return N.sm_m || (N.sm_m = {
                proto: N,
                fields: {
                    history: {
                        n: 1,
                        c: z,
                        r: !0,
                        q: !0
                    }
                }
            }),
                N.sm_m
        }
        static MBF() {
            return N.sm_mbf || (N.sm_mbf = n.Bh(N.M())),
                N.sm_mbf
        }
        toObject(e = !1) {
            return N.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(N.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(N.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new N;
            return N.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(N.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return N.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(N.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return N.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CAuthenticationSupport_GetTokenHistory_Response"
        }
    }
    class O extends s {
        constructor(e = null) {
            super(),
                O.prototype.nonce || n.aR(O.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return O.sm_m || (O.sm_m = {
                proto: O,
                fields: {
                    nonce: {
                        n: 1,
                        br: n.FE.readString,
                        bw: n.Xc.writeString
                    },
                    expiry: {
                        n: 2,
                        br: n.FE.readUint32,
                        bw: n.Xc.writeUint32
                    }
                }
            }),
                O.sm_m
        }
        static MBF() {
            return O.sm_mbf || (O.sm_mbf = n.Bh(O.M())),
                O.sm_mbf
        }
        toObject(e = !1) {
            return O.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(O.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(O.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new O;
            return O.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(O.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return O.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(O.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return O.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CCloudGaming_CreateNonce_Response"
        }
    }
    class x extends s {
        constructor(e = null) {
            super(),
                x.prototype.appid || n.aR(x.M()),
                s.initialize(this, e, 0, -1, void 0, null)
        }
        static M() {
            return x.sm_m || (x.sm_m = {
                proto: x,
                fields: {
                    appid: {
                        n: 1,
                        br: n.FE.readUint32,
                        bw: n.Xc.writeUint32
                    },
                    minutes_remaining: {
                        n: 2,
                        br: n.FE.readUint32,
                        bw: n.Xc.writeUint32
                    }
                }
            }),
                x.sm_m
        }
        static MBF() {
            return x.sm_mbf || (x.sm_mbf = n.Bh(x.M())),
                x.sm_mbf
        }
        toObject(e = !1) {
            return x.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(x.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(x.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new x;
            return x.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(x.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return x.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(x.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return x.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CCloudGaming_TimeRemaining"
        }
    }
    class W extends s {
        constructor(e = null) {
            super(),
                W.prototype.entries || n.aR(W.M()),
                s.initialize(this, e, 0, -1, [2], null)
        }
        static M() {
            return W.sm_m || (W.sm_m = {
                proto: W,
                fields: {
                    entries: {
                        n: 2,
                        c: x,
                        r: !0,
                        q: !0
                    }
                }
            }),
                W.sm_m
        }
        static MBF() {
            return W.sm_mbf || (W.sm_mbf = n.Bh(W.M())),
                W.sm_mbf
        }
        toObject(e = !1) {
            return W.toObject(e, this)
        }
        static toObject(e, t) {
            return n.TA(W.M(), e, t)
        }
        static fromObject(e) {
            return n.aD(W.M(), e)
        }
        static deserializeBinary(e) {
            let t = new i.BinaryReader(e)
                , r = new W;
            return W.deserializeBinaryFromReader(r, t)
        }
        static deserializeBinaryFromReader(e, t) {
            return n.F(W.MBF(), e, t)
        }
        serializeBinary() {
            var e = new i.BinaryWriter;
            return W.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        static serializeBinaryToWriter(e, t) {
            n.l2(W.M(), e, t)
        }
        serializeBase64String() {
            var e = new i.BinaryWriter;
            return W.serializeBinaryToWriter(this, e),
                e.getResultBase64String()
        }
        getClassName() {
            return "CCloudGaming_GetTimeRemaining_Response"
        }
    }
    var D, I, j;
    !function (e) {
        e.GetPasswordRSAPublicKey = function (e, t) {
            return e.SendMsg("Authentication.GetPasswordRSAPublicKey#1", t, l, {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1
            })
        }
            ,
            e.BeginAuthSessionViaQR = function (e, t) {
                return e.SendMsg("Authentication.BeginAuthSessionViaQR#1", t, d, {
                    ePrivilege: 0,
                    eWebAPIKeyRequirement: 1
                })
            }
            ,
            e.BeginAuthSessionViaCredentials = function (e, t) {
                return e.SendMsg("Authentication.BeginAuthSessionViaCredentials#1", t, g, {
                    ePrivilege: 0,
                    eWebAPIKeyRequirement: 1
                })
            }
            ,
            e.PollAuthSessionStatus = function (e, t) {
                return e.SendMsg("Authentication.PollAuthSessionStatus#1", t, _, {
                    ePrivilege: 0,
                    eWebAPIKeyRequirement: 1
                })
            }
            ,
            e.GetAuthSessionInfo = function (e, t) {
                return e.SendMsg("Authentication.GetAuthSessionInfo#1", t, b, {
                    ePrivilege: 1
                })
            }
            ,
            e.UpdateAuthSessionWithMobileConfirmation = function (e, t) {
                return e.SendMsg("Authentication.UpdateAuthSessionWithMobileConfirmation#1", t, y, {
                    ePrivilege: 1
                })
            }
            ,
            e.UpdateAuthSessionWithSteamGuardCode = function (e, t) {
                return e.SendMsg("Authentication.UpdateAuthSessionWithSteamGuardCode#1", t, w, {
                    ePrivilege: 0,
                    eWebAPIKeyRequirement: 1
                })
            }
            ,
            e.GenerateAccessTokenForApp = function (e, t) {
                return e.SendMsg("Authentication.GenerateAccessTokenForApp#1", t, S, {
                    ePrivilege: 0,
                    eWebAPIKeyRequirement: 1
                })
            }
            ,
            e.EnumerateTokens = function (e, t) {
                return e.SendMsg("Authentication.EnumerateTokens#1", t, E, {
                    ePrivilege: 1
                })
            }
            ,
            e.GetAuthSessionsForAccount = function (e, t) {
                return e.SendMsg("Authentication.GetAuthSessionsForAccount#1", t, p, {
                    bConstMethod: !0,
                    ePrivilege: 1
                })
            }
            ,
            e.MigrateMobileSession = function (e, t) {
                return e.SendMsg("Authentication.MigrateMobileSession#1", t, M, {
                    ePrivilege: 0,
                    eWebAPIKeyRequirement: 1
                })
            }
            ,
            e.RevokeRefreshToken = function (e, t) {
                return e.SendMsg("Authentication.RevokeRefreshToken#1", t, R, {
                    ePrivilege: 2,
                    eWebAPIKeyRequirement: 1
                })
            }
    }(D || (D = {})),
        function (e) {
            e.QueryRefreshTokensByAccount = function (e, t) {
                return e.SendMsg("AuthenticationSupport.QueryRefreshTokensByAccount#1", t, k, {
                    bConstMethod: !0,
                    ePrivilege: 5
                })
            }
                ,
                e.QueryRefreshTokenByID = function (e, t) {
                    return e.SendMsg("AuthenticationSupport.QueryRefreshTokenByID#1", t, A, {
                        bConstMethod: !0,
                        ePrivilege: 5
                    })
                }
                ,
                e.RevokeToken = function (e, t) {
                    return e.SendMsg("AuthenticationSupport.RevokeToken#1", t, L, {
                        ePrivilege: 5
                    })
                }
                ,
                e.GetTokenHistory = function (e, t) {
                    return e.SendMsg("AuthenticationSupport.GetTokenHistory#1", t, N, {
                        bConstMethod: !0,
                        ePrivilege: 5
                    })
                }
        }(I || (I = {})),
        function (e) {
            e.CreateNonce = function (e, t) {
                return e.SendMsg("CloudGaming.CreateNonce#1", t, O, {
                    bConstMethod: !0,
                    ePrivilege: 1
                })
            }
                ,
                e.GetTimeRemaining = function (e, t) {
                    return e.SendMsg("CloudGaming.GetTimeRemaining#1", t, W, {
                        bConstMethod: !0,
                        ePrivilege: 1
                    })
                }
        }(j || (j = {}))
    _59669.$h = D,
        _59669.Am = B,
        _59669.Uy = f,
        _59669._u = h,
        _59669.kp = o,
        _59669.oZ = m,
        _59669.up = c,
        _59669.l = l
    _59669._ = _
    _59669.b = b
    _59669.d = d

})()

myUint8ArrayToString = function (fileData) {
    let dataString = "";
    for (let i = 0; i < fileData.length; i++) {
        dataString += String.fromCharCode(fileData[i]);
    }

    return dataString
}


function my_stringToUint8Array(str) {
    let arr = [];
    for (let i = 0, j = str.length; i < j; ++i) {
        arr.push(str.charCodeAt(i));
    }

    let tmpUint8Array = new Uint8Array(arr);
    return tmpUint8Array
}

function get_passwd_rsa(passwd, r) {
    /*RSA 加密   */
    guess = RSA.getPublicKey(r.publickey_mod, r.publickey_exp)
    guess = RSA.encrypt(passwd, guess)
    return guess
}


function get_iv(array_data) {
    let r = _17922.gA.Init(_59669.l, 147)
    r.Hdr().set_eresult(1)
    r.Hdr().set_error_message(undefined)
    let e = new _43057.At(new Uint8Array(array_data)),
        t = new _45878.BinaryReader(e.GetPacket(), e.TellGet(), e.GetCountBytesRemaining())
    guess = _59669.l.deserializeBinaryFromReader(r.Body(), t).array
    console.log(guess)
    return guess
}


function set_mail_verification_code(steam_id, client_id, code, code_type) {
    let _r = _17922.gA.Init(_59669.Am);
    _r.SetEMsg(9804)
    _r.Body().set_client_id(client_id),
    _r.Body().set_steamid(steam_id),
    _r.Body().set_code(code)
    _r.Body().set_code_type(code_type)
    return _5155.JQ(_r.SerializeBody())
}

function set_request_id(client_id, m_rgRequestID) {
    let _r = _17922.gA.Init(_59669.Uy);
    _r.SetEMsg(9804)
    _r.Body().set_client_id(client_id),
    _r.Body().set_request_id(m_rgRequestID)
    return _5155.JQ(_r.SerializeBody())
}

function get_username(user) {
    // 用户名转化
    let r = _17922.gA.Init(_59669.kp)
    r.Body().set_account_name(user)
    return _5155.JQ(r.SerializeBody())
}

function get_passwd(user, password, iv) {
    passwd = get_passwd_rsa(password, iv)
    let _r = _17922.gA.Init(_59669._u);
    _r.SetEMsg(9804)
    _r.Body().set_account_name(user)
    _r.Body().set_encrypted_password(passwd)
    _r.Body().set_encryption_timestamp(iv.timestamp)
    _r.Body().set_remember_login(true)
    _r.Body().set_persistence(1)
    _r.Body().set_website_id("Store")
    _r.Body().set_device_details(_59669.up.fromObject(["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", 2]))
    _r.Body().set_language(6)
    return _5155.JQ(_r.SerializeBody())
}


function get_cliendid(array_data) {
    // 函数没有用啊
    let r = _17922.gA.Init(_59669._, 147)
    r.Hdr().set_eresult(1)
    r.Hdr().set_error_message(undefined)
    console.log(new Uint8Array(array_data))
    let e = new _43057.At(new Uint8Array(array_data))
    t = new _45878.BinaryReader(e.GetPacket(), e.TellGet(), e.GetCountBytesRemaining())
    guess = _59669._.deserializeBinaryFromReader(r.Body(), t).array
    console.log(my_stringToUint8Array(guess[1]))
    console.log(guess[1])
    return guess
}
