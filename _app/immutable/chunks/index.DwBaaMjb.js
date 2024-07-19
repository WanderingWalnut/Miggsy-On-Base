var C = Object.defineProperty;
var j = (e, t, n) => t in e ? C(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var p = (e, t, n) => j(e, typeof t != "symbol" ? t + "" : t, n);
import {
    r as h,
    n as y,
    j as w,
    k as B,
    l as S,
    m as I,
    p as b,
    q as P,
    v as T,
    w as N,
    x as q,
    y as z,
    z as H
} from "./scheduler.Cy4mH-aC.js";
let $ = !1;

function L() {
    $ = !0
}

function M() {
    $ = !1
}

function O(e, t, n, s) {
    for (; e < t;) {
        const l = e + (t - e >> 1);
        n(l) <= s ? e = l + 1 : t = l
    }
    return e
}

function D(e) {
    if (e.hydrate_init) return;
    e.hydrate_init = !0;
    let t = e.childNodes;
    if (e.nodeName === "HEAD") {
        const i = [];
        for (let r = 0; r < t.length; r++) {
            const o = t[r];
            o.claim_order !== void 0 && i.push(o)
        }
        t = i
    }
    const n = new Int32Array(t.length + 1),
        s = new Int32Array(t.length);
    n[0] = -1;
    let l = 0;
    for (let i = 0; i < t.length; i++) {
        const r = t[i].claim_order,
            o = (l > 0 && t[n[l]].claim_order <= r ? l + 1 : O(1, l, d => t[n[d]].claim_order, r)) - 1;
        s[i] = n[o] + 1;
        const u = o + 1;
        n[u] = i, l = Math.max(u, l)
    }
    const f = [],
        a = [];
    let c = t.length - 1;
    for (let i = n[l] + 1; i != 0; i = s[i - 1]) {
        for (f.push(t[i - 1]); c >= i; c--) a.push(t[c]);
        c--
    }
    for (; c >= 0; c--) a.push(t[c]);
    f.reverse(), a.sort((i, r) => i.claim_order - r.claim_order);
    for (let i = 0, r = 0; i < a.length; i++) {
        for (; r < f.length && a[i].claim_order >= f[r].claim_order;) r++;
        const o = r < f.length ? f[r] : null;
        e.insertBefore(a[i], o)
    }
}

function R(e, t) {
    if ($) {
        for (D(e), (e.actual_end_child === void 0 || e.actual_end_child !== null && e.actual_end_child.parentNode !== e) && (e.actual_end_child = e.firstChild); e.actual_end_child !== null && e.actual_end_child.claim_order === void 0;) e.actual_end_child = e.actual_end_child.nextSibling;
        t !== e.actual_end_child ? (t.claim_order !== void 0 || t.parentNode !== e) && e.insertBefore(t, e.actual_end_child) : e.actual_end_child = t.nextSibling
    } else(t.parentNode !== e || t.nextSibling !== null) && e.appendChild(t)
}

function ne(e, t, n) {
    $ && !n ? R(e, t) : (t.parentNode !== e || t.nextSibling != n) && e.insertBefore(t, n || null)
}

function U(e) {
    e.parentNode && e.parentNode.removeChild(e)
}

function V(e) {
    return document.createElement(e)
}

function W(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e)
}

function x(e) {
    return document.createTextNode(e)
}

function ie() {
    return x(" ")
}

function re() {
    return x("")
}

function F(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
}

function se(e, t) {
    for (const n in t) F(e, n, t[n])
}

function ae(e) {
    return e.dataset.svelteH
}

function G(e) {
    return Array.from(e.childNodes)
}

function J(e) {
    e.claim_info === void 0 && (e.claim_info = {
        last_index: 0,
        total_claimed: 0
    })
}

function A(e, t, n, s, l = !1) {
    J(e);
    const f = (() => {
        for (let a = e.claim_info.last_index; a < e.length; a++) {
            const c = e[a];
            if (t(c)) {
                const i = n(c);
                return i === void 0 ? e.splice(a, 1) : e[a] = i, l || (e.claim_info.last_index = a), c
            }
        }
        for (let a = e.claim_info.last_index - 1; a >= 0; a--) {
            const c = e[a];
            if (t(c)) {
                const i = n(c);
                return i === void 0 ? e.splice(a, 1) : e[a] = i, l ? i === void 0 && e.claim_info.last_index-- : e.claim_info.last_index = a, c
            }
        }
        return s()
    })();
    return f.claim_order = e.claim_info.total_claimed, e.claim_info.total_claimed += 1, f
}

function E(e, t, n, s) {
    return A(e, l => l.nodeName === t, l => {
        const f = [];
        for (let a = 0; a < l.attributes.length; a++) {
            const c = l.attributes[a];
            n[c.name] || f.push(c.name)
        }
        f.forEach(a => l.removeAttribute(a))
    }, () => s(t))
}

function le(e, t, n) {
    return E(e, t, n, V)
}

function ce(e, t, n) {
    return E(e, t, n, W)
}

function K(e, t) {
    return A(e, n => n.nodeType === 3, n => {
        const s = "" + t;
        if (n.data.startsWith(s)) {
            if (n.data.length !== s.length) return n.splitText(s.length)
        } else n.data = s
    }, () => x(t), !0)
}

function fe(e) {
    return K(e, " ")
}

function ue(e, t) {
    t = "" + t, e.data !== t && (e.data = t)
}

function oe(e, t, n, s) {
    n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, "")
}

function _e(e, t, n) {
    e.classList.toggle(t, !!n)
}

function de(e, t) {
    return new e(t)
}
const m = new Set;
let _;

function me() {
    _ = {
        r: 0,
        c: [],
        p: _
    }
}

function he() {
    _.r || h(_.c), _ = _.p
}

function Q(e, t) {
    e && e.i && (m.delete(e), e.i(t))
}

function $e(e, t, n, s) {
    if (e && e.o) {
        if (m.has(e)) return;
        m.add(e), _.c.push(() => {
            m.delete(e), s && (n && e.d(1), s())
        }), e.o(t)
    } else s && s()
}

function pe(e) {
    e && e.c()
}

function ye(e, t) {
    e && e.l(t)
}

function X(e, t, n) {
    const {
        fragment: s,
        after_update: l
    } = e.$$;
    s && s.m(t, n), b(() => {
        const f = e.$$.on_mount.map(q).filter(S);
        e.$$.on_destroy ? e.$$.on_destroy.push(...f) : h(f), e.$$.on_mount = []
    }), l.forEach(b)
}

function Y(e, t) {
    const n = e.$$;
    n.fragment !== null && (P(n.after_update), h(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
}

function Z(e, t) {
    e.$$.dirty[0] === -1 && (z.push(e), H(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}

function xe(e, t, n, s, l, f, a = null, c = [-1]) {
    const i = T;
    N(e);
    const r = e.$$ = {
        fragment: null,
        ctx: [],
        props: f,
        update: y,
        not_equal: l,
        bound: w(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(t.context || (i ? i.$$.context : [])),
        callbacks: w(),
        dirty: c,
        skip_bound: !1,
        root: t.target || i.$$.root
    };
    a && a(r.root);
    let o = !1;
    if (r.ctx = n ? n(e, t.props || {}, (u, d, ...g) => {
            const v = g.length ? g[0] : d;
            return r.ctx && l(r.ctx[u], r.ctx[u] = v) && (!r.skip_bound && r.bound[u] && r.bound[u](v), o && Z(e, u)), d
        }) : [], r.update(), o = !0, h(r.before_update), r.fragment = s ? s(r.ctx) : !1, t.target) {
        if (t.hydrate) {
            L();
            const u = G(t.target);
            r.fragment && r.fragment.l(u), u.forEach(U)
        } else r.fragment && r.fragment.c();
        t.intro && Q(e.$$.fragment), X(e, t.target, t.anchor), M(), B()
    }
    N(i)
}
class ge {
    constructor() {
        p(this, "$$");
        p(this, "$$set")
    }
    $destroy() {
        Y(this, 1), this.$destroy = y
    }
    $on(t, n) {
        if (!S(n)) return y;
        const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return s.push(n), () => {
            const l = s.indexOf(n);
            l !== -1 && s.splice(l, 1)
        }
    }
    $set(t) {
        this.$$set && !I(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
    }
}
const k = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(k);
export {
    ce as A, se as B, _e as C, ge as S, G as a, K as b, le as c, U as d, V as e, fe as f, ne as g, R as h, xe as i, ue as j, re as k, $e as l, he as m, Q as n, F as o, oe as p, me as q, de as r, ie as s, x as t, pe as u, ye as v, X as w, Y as x, ae as y, W as z
};