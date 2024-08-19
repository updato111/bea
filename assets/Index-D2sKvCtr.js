import {o as a, a as c, b as s, i as B, d as t, t as l, j, k as w, n as D, r as x, l as O, f as F, w as P, T as S, F as C, s as T, q as N, e as E, c as A, _ as I, P as M, v as V, m as W} from "./main-CVe_aZ1q.js";
import {s as z, i as R} from "./isColorDark-pkByQ7JI.js";
const U = {
    class: D(["flex justify-between items-center gap-x-2.5 w-full"])
}
  , q = {
    class: "flex items-center gap-x-4"
}
  , H = {
    class: "flex flex-col text-sm font-medium"
}
  , L = {
    class: "line-clamp-1"
}
  , G = {
    class: "font-medium"
}
  , J = {
    class: "font-medium uppercase text-nowrap"
}
  , K = {
    __name: "User",
    props: {
        user: Object
    },
    setup(g) {
        var m, _, u;
        const n = g
          , e = ((m = window.Telegram.WebApp.initDataUnsafe.user) == null ? void 0 : m.id) === n.user.whom.chat_id ? n.user.who : n.user.whom
          , d = z(((_ = e == null ? void 0 : e.username) == null ? void 0 : _.slice(0, 2)) || ((u = e == null ? void 0 : e.name) == null ? void 0 : u.slice(0, 2)) || "")
          , h = R(d) ? "#FFFFFF" : "#000000";
        return (r,o)=>{
            var f, p, y, b, k, $;
            return a(),
            c("div", U, [s("div", q, [s("span", {
                style: B({
                    backgroundColor: t(d),
                    color: t(h)
                }),
                class: "w-8 h-8 shrink-0 rounded-full flex justify-center items-center uppercase text-sm font-semibold"
            }, l(((p = (f = t(e)) == null ? void 0 : f.username) == null ? void 0 : p.slice(0, 2)) || ((b = (y = t(e)) == null ? void 0 : y.name) == null ? void 0 : b.slice(0, 2))), 5), s("div", H, [s("span", L, l(((k = t(e)) == null ? void 0 : k.username) || (($ = t(e)) == null ? void 0 : $.name)), 1)])]), s("span", G, [s("span", J, "+" + l(t(j)(n.user.cost)) + " " + l(t(w).AMOUNT), 1)])])
        }
    }
}
  , Q = {
    key: 0,
    class: "flex flex-col justify-center items-center p-4 gap-y-6"
}
  , X = {
    class: "font-semibold text-3xl text-center pt-2"
}
  , Y = s("br", null, null, -1)
  , Z = ["src"]
  , ee = {
    key: 0,
    class: "opacity-75 text-lg"
}
  , se = {
    key: 1,
    class: "w-full flex flex-col gap-y-8"
}
  , te = {
    class: "font-medium"
}
  , ae = {
    class: "flex flex-col gap-y-4"
}
  , ne = s("span", {
    class: "flex h-14"
}, null, -1)
  , re = {
    __name: "Index",
    setup(g) {
        var u;
        const n = x(!0)
          , v = window.Telegram.WebApp
          , i = x(null)
          , e = x(null)
          , d = async()=>{
            let {data: r, error: o} = await T.from("invites").select(`
                cost,
                whom (
                    chat_id,
                    name,
                    username
                ),
                who (
                    chat_id,
                    name,
                    username
                )
                `).order("created_at", {
                ascending: !1
            }).range(0, 100);
            o ? console.log(o) : i.value = r
        }
          , h = async()=>{
            let {data: r, error: o} = await T.rpc("count_my_invites");
            o ? console.error(o) : e.value = r
        }
        ;
        O(async()=>{
            await h(),
            await d(),
            n.value = !1
        }
        );
        let m = `t.me/${w.SHARE_APP}?startapp=${(u = v.initDataUnsafe.user) == null ? void 0 : u.id}`;
        const _ = ()=>{
            window.open(`https://t.me/share/url?url=${m}&text=Who let the Beavers out?`)
        }
        ;
        return (r,o)=>(a(),
        c(C, null, [F(S, {
            name: "fade",
            mode: "out-in",
            appear: ""
        }, {
            default: P(()=>[n.value ? (a(),
            A(W, {
                key: 1
            })) : (a(),
            c("div", Q, [s("h4", X, [N("Invite friends"), Y, N("and get more " + l(t(w).AMOUNT), 1)]), s("img", {
                src: t(M),
                class: "w-40"
            }, null, 8, Z), i.value && i.value.length < 1 ? (a(),
            c("span", ee, "Tap on the button to invite your friends")) : (a(),
            c("div", se, [s("span", te, l(t(j)(e.value)) + " " + l(t(V)(e.value, ["friend", "friends", "friends"])), 1), s("div", ae, [(a(!0),
            c(C, null, E(i.value, (f,p)=>(a(),
            A(K, {
                key: p,
                user: f
            }, null, 8, ["user"]))), 128))])])), ne, s("div", {
                class: "flex p-4 w-full bg-bg_color fixed bottom-[72px] left-0 right-0"
            }, [s("button", {
                onClick: _,
                class: "bg-white text-black w-full font-medium h-14 rounded-xl shadow-sm active:opacity-75 transition-all"
            }, "Invite friends")])]))]),
            _: 1
        }), F(I, {
            page: "FRENDS"
        })], 64))
    }
};
export {re as default};
