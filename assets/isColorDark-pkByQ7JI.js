function a(o) {
    let t = 0
      , e = 0
      , r = 0;
    for (let l = 0; l < o.length; l++)
        t = o.charCodeAt(l) + ((t << 5) - t),
        e = o.charCodeAt(l) + ((e << 7) - e),
        r = o.charCodeAt(l) + ((r << 3) - r);
    let n = t & 255
      , c = e & 255
      , s = r & 255;
    return `#${("00" + n.toString(16)).slice(-2)}${("00" + c.toString(16)).slice(-2)}${("00" + s.toString(16)).slice(-2)}`
}
function h(o) {
    const t = parseInt(o.slice(1), 16)
      , e = t >> 16 & 255
      , r = t >> 8 & 255
      , n = t >> 0 & 255;
    return .299 * e + .587 * r + .114 * n < 128
}
export {h as i, a as s};
