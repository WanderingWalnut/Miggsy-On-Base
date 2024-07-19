import {
    s as ae,
    d as se,
    u as le,
    g as re,
    e as ne
} from "../chunks/scheduler.Cy4mH-aC.js";
import {
    S as oe,
    i as ce,
    e as c,
    t as b,
    s as V,
    c as i,
    a as u,
    b as x,
    d as a,
    f as D,
    y as ie,
    o as s,
    g as K,
    h as e,
    n as de,
    l as fe
} from "../chunks/index.DwBaaMjb.js";
new TextEncoder;
const ue = !1;
async function pe({
    fetch: l
}) {
    return {
        price: await (async () => ({
            item: await (await l("https://api.dexscreener.com/latest/dex/pairs/base/0x8e8285a78c480c4a4263511e80fc116a30aac793")).json()
        }))()
    }
}
const ge = Object.freeze(Object.defineProperty({
    __proto__: null,
    load: pe,
    prerender: ue
}, Symbol.toStringTag, {
    value: "Module"
}));

function _e(l) {
    let r, p, d, f, o, _, m, h, Q = l[0].priceChange.h24 >= 0 ? "+" : "",
        N, U = l[0].priceChange.h24 + "",
        $, A, M, E, O, W = new Intl.NumberFormat().format(l[0].fdv) + "",
        F, L, g, w, X = "Volume",
        q, y, z, Y = new Intl.NumberFormat().format(l[0].volume.h24) + "",
        R, P, C, I;
    const B = l[3].default,
        n = se(B, l, l[2], null);
    return {
        c() {
            r = c("div"), p = c("section"), d = c("a"), f = c("article"), o = c("div"), _ = c("p"), m = b("Market Cap "), h = c("span"), N = b(Q), $ = b(U), A = b("%"), M = V(), E = c("p"), O = b("$"), F = b(W), L = V(), g = c("div"), w = c("p"), w.textContent = X, q = V(), y = c("p"), z = b("$"), R = b(Y), P = V(), C = c("div"), n && n.c(), this.h()
        },
        l(t) {
            r = i(t, "DIV", {
                class: !0
            });
            var v = u(r);
            p = i(v, "SECTION", {
                class: !0
            });
            var Z = u(p);
            d = i(Z, "A", {
                href: !0,
                target: !0,
                rel: !0
            });
            var ee = u(d);
            f = i(ee, "ARTICLE", {
                class: !0
            });
            var S = u(f);
            o = i(S, "DIV", {
                class: !0
            });
            var j = u(o);
            _ = i(j, "P", {
                class: !0
            });
            var G = u(_);
            m = x(G, "Market Cap "), h = i(G, "SPAN", {
                class: !0
            });
            var k = u(h);
            N = x(k, Q), $ = x(k, U), A = x(k, "%"), k.forEach(a), G.forEach(a), M = D(j), E = i(j, "P", {
                class: !0
            });
            var H = u(E);
            O = x(H, "$"), F = x(H, W), H.forEach(a), j.forEach(a), L = D(S), g = i(S, "DIV", {
                class: !0
            });
            var T = u(g);
            w = i(T, "P", {
                class: !0,
                "data-svelte-h": !0
            }), ie(w) !== "svelte-8m81e4" && (w.textContent = X), q = D(T), y = i(T, "P", {
                class: !0
            });
            var J = u(y);
            z = x(J, "$"), R = x(J, Y), J.forEach(a), T.forEach(a), S.forEach(a), ee.forEach(a), Z.forEach(a), v.forEach(a), P = D(t), C = i(t, "DIV", {
                class: !0
            });
            var te = u(C);
            n && n.l(te), te.forEach(a), this.h()
        },
        h() {
            s(h, "class", "font-black " + (l[0].priceChange.h24 >= 0 ? "text-green-500" : "text-red-500")), s(_, "class", "text-xs"), s(E, "class", "lg:text-2xl font-bold"), s(o, "class", "grid"), s(w, "class", "text-xs"), s(y, "class", "lg:text-2xl font-bold"), s(g, "class", "grid"), s(f, "class", "grid px-4 gap-6 lg:gap-40 grid-cols-2"), s(d, "href", "https://dexscreener.com/base/0x8e8285a78c480c4a4263511e80fc116a30aac793"), s(d, "target", "_blank"), s(d, "rel", "noopener noreferrer"), s(p, "class", "w-[90vw] flex items-center justify-between text-white lg:w-[70vw]"), s(r, "class", "bg-black flex font-CoinbaseText justify-center py-5 w-full"), s(C, "class", "flex flex-col bg-gradient-to-br from-base-100 to-primary relative")
        },
        m(t, v) {
            K(t, r, v), e(r, p), e(p, d), e(d, f), e(f, o), e(o, _), e(_, m), e(_, h), e(h, N), e(h, $), e(h, A), e(o, M), e(o, E), e(E, O), e(E, F), e(f, L), e(f, g), e(g, w), e(g, q), e(g, y), e(y, z), e(y, R), K(t, P, v), K(t, C, v), n && n.m(C, null), I = !0
        },
        p(t, [v]) {
            n && n.p && (!I || v & 4) && le(n, B, t, t[2], I ? ne(B, t[2], v, null) : re(t[2]), null)
        },
        i(t) {
            I || (de(n, t), I = !0)
        },
        o(t) {
            fe(n, t), I = !1
        },
        d(t) {
            t && (a(r), a(P), a(C)), n && n.d(t)
        }
    }
}

function ve(l, r, p) {
    let {
        $$slots: d = {},
        $$scope: f
    } = r, {
        data: o
    } = r, {
        price: {
            item: {
                pair: _
            }
        }
    } = o;
    return l.$$set = m => {
        "data" in m && p(1, o = m.data), "$$scope" in m && p(2, f = m.$$scope)
    }, [_, o, f, d]
}
class be extends oe {
    constructor(r) {
        super(), ce(this, r, ve, _e, ae, {
            data: 1
        })
    }
}
export {
    be as component, ge as universal
};