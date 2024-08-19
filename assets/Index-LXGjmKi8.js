import {o as s, a as u, b as a, i as F, d as t, t as o, j as w, k as C, c as i, I as x, n as $, r as g, l as B, f as _, w as j, T as A, F as v, s as N, e as T, _ as D, m as E} from "./main-CVe_aZ1q.js";
import {s as I, i as L} from "./isColorDark-pkByQ7JI.js";
const O = {
    class: "flex items-center gap-x-4"
}
  , z = {
    class: "flex flex-col text-sm font-medium gap-y-0.5"
}
  , M = {
    class: "line-clamp-1"
}
  , R = {
    class: "text-hint_color font-semibold uppercase line-clamp-1"
}
  , S = {
    class: "text-sm font-medium text-nowrap"
}
  , U = {
    key: 3,
    class: "text-sm font-medium"
}
  , b = {
    __name: "User",
    props: {
        user: Object,
        my_data: Boolean
    },
    setup(e) {
        var c, l, m, d;
        const r = e
          , n = I(((l = (c = r.user) == null ? void 0 : c.username) == null ? void 0 : l.slice(0, 2)) || ((d = (m = r.user) == null ? void 0 : m.name) == null ? void 0 : d.slice(0, 2)) || "AN")
          , f = L(n) ? "#FFFFFF" : "#000000";
        return (H,J)=>{
            var y, p, h, k;
            return s(),
            u("div", {
                class: $(["flex justify-between items-center gap-x-2.5 w-full", e.my_data && "bg-secondary_bg_color rounded-xl p-4"])
            }, [a("div", O, [a("span", {
                style: F({
                    backgroundColor: t(n),
                    color: t(f)
                }),
                class: "w-8 h-8 shrink-0 rounded-full flex justify-center items-center uppercase text-sm font-semibold"
            }, o(((y = e.user) == null ? void 0 : y.username) && e.user.username.slice(0, 2) || ((p = e.user) == null ? void 0 : p.name) && e.user.name.slice(0, 2)), 5), a("div", z, [a("span", M, o(((h = e.user) == null ? void 0 : h.username) || ((k = e.user) == null ? void 0 : k.name) || "Anon"), 1), a("span", R, o(t(w)(e.user.coins)) + " " + o(t(C).AMOUNT), 1)])]), a("span", S, [e.user.rank === 1 ? (s(),
            i(t(x), {
                key: 0,
                class: "text-2xl",
                icon: "noto:1st-place-medal"
            })) : e.user.rank === 2 ? (s(),
            i(t(x), {
                key: 1,
                class: "text-2xl",
                icon: "noto:2nd-place-medal"
            })) : e.user.rank === 3 ? (s(),
            i(t(x), {
                key: 2,
                class: "text-2xl",
                icon: "noto:3rd-place-medal"
            })) : (s(),
            u("span", U, "#" + o(e.user.rank), 1))])], 2)
        }
    }
}
  , V = {
    key: 0,
    class: "flex flex-col justify-center items-center p-4 gap-y-6"
}
  , W = a("h4", {
    class: "font-medium text-3xl pt-2"
}, "Telegram Wall of Fame", -1)
  , q = {
    class: "flex w-full flex-col gap-y-4"
}
  , G = {
    class: "font-medium"
}
  , Q = {
    __name: "Index",
    setup(e) {
        const r = g(!0)
          , n = g(!1)
          , f = async()=>{
            let {data: c, error: l} = await N.rpc("get_top_users_and_my_position");
            l ? console.error(l) : n.value = c
        }
        ;
        return B(async()=>{
            await f(),
            r.value = !1
        }
        ),
        (c,l)=>(s(),
        u(v, null, [_(A, {
            name: "fade",
            mode: "out-in",
            appear: ""
        }, {
            default: j(()=>[r.value ? (s(),
            i(E, {
                key: 1
            })) : (s(),
            u("div", V, [W, _(b, {
                my_data: !0,
                user: n.value.my_data
            }, null, 8, ["user"]), a("div", q, [a("span", G, o(t(w)(n.value.total_users)) + " holders", 1), (s(!0),
            u(v, null, T(n.value.top_users, (m,d)=>(s(),
            i(b, {
                key: d,
                user: m
            }, null, 8, ["user"]))), 128))])]))]),
            _: 1
        }), _(D, {
            page: "LEADERBOARD"
        })], 64))
    }
};
export {Q as default};
