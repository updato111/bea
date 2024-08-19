import {u as w, r as f, o as s, c as x, w as _, a as u, b as e, d as p, P as k, F as I, e as C, t as S, f as m, I as T, n as h, T as g, g as A, p as B, h as O} from "./main-CVe_aZ1q.js";
const V = (t,n)=>{
    const o = t.__vccOpts || t;
    for (const [a,c] of n)
        o[a] = c;
    return o
}
  , v = t=>(B("data-v-cd106081"),
t = t(),
O(),
t)
  , N = {
    key: 0,
    class: "flex h-full flex-col justify-center items-center gap-y-4 p-4"
}
  , P = ["src"]
  , j = v(()=>e("div", {
    class: "flex flex-col gap-y-0.5 font-medium text-center items-center text-hint_color"
}, [e("span", null, "👋 Hey!"), e("span", null, "You've been in Telegram for a while,"), e("span", null, "it's time to get rewarded!")], -1))
  , z = {
    key: 1,
    class: "flex h-full flex-col items-center gap-y-12 p-4"
}
  , E = v(()=>e("h2", {
    class: "text-3xl font-semibold"
}, "Checking your account", -1))
  , F = {
    class: "w-full flex flex-col gap-y-6"
}
  , H = {
    class: "flex justify-between items-center"
}
  , L = {
    class: "flex w-full bg-hint_color h-2 rounded-md overflow-hidden"
}
  , D = {
    key: 0,
    class: "flex px-4 pt-2 pb-6 w-full fixed bottom-0 left-0 right-0 bg-bg_color"
}
  , G = {
    __name: "Index",
    setup(t) {
        const n = w()
          , o = f(0)
          , a = r=>{
            r < d.length && setTimeout(()=>{
                l.value.push(r),
                a(r + 1)
            }
            , 1500)
        }
          , c = ()=>{
            o.value === 0 ? (o.value++,
            a(0)) : b()
        }
          , d = ["Account Age Verified", "Activity Level Analyzed", "Telegram Premium Checked", "OG Status Confirmed"]
          , l = f([])
          , b = ()=>{
            localStorage.setItem("onboardingShown", "true"),
            n.push({
                name: "HOME"
            })
        }
        ;
        return (r,R)=>(s(),
        x(g, {
            name: "fade",
            mode: "out-in"
        }, {
            default: _(()=>[o.value === 0 ? (s(),
            u("div", N, [e("img", {
                src: p(k),
                class: "w-64"
            }, null, 8, P), j, e("div", {
                class: "flex px-4 pt-2 pb-6 w-full fixed bottom-0 left-0 right-0 bg-bg_color"
            }, [e("button", {
                onClick: c,
                class: "bg-button_color w-full font-medium h-12 rounded-xl shadow-sm active:opacity-75 transition-all"
            }, "Wow, let's go!")])])) : (s(),
            u("div", z, [E, e("div", F, [(s(),
            u(I, null, C(d, (y,i)=>e("div", {
                key: i,
                class: "flex flex-col gap-y-1.5"
            }, [e("div", H, [e("span", null, S(y), 1), m(p(T), {
                icon: l.value.includes(i) ? "icon-park-outline:check-one" : "icon-park-outline:loading-one",
                class: h({
                    "text-button_color": l.value.includes(i),
                    "text-xl": !0
                })
            }, null, 8, ["icon", "class"])]), e("span", L, [e("span", {
                class: h(["progress-bar", {
                    loaded: l.value.includes(i)
                }])
            }, null, 2)])])), 64))]), m(g, {
                name: "fade"
            }, {
                default: _(()=>[l.value.length === d.length ? (s(),
                u("div", D, [e("button", {
                    onClick: c,
                    class: "bg-button_color w-full font-medium h-12 rounded-xl shadow-sm active:opacity-75 transition-all"
                }, "Continue")])) : A("", !0)]),
                _: 1
            })]))]),
            _: 1
        }))
    }
}
  , M = V(G, [["__scopeId", "data-v-cd106081"]])
  , Y = {
    __name: "Index",
    setup(t) {
        return (n,o)=>(s(),
        x(M))
    }
};
export {Y as default};
