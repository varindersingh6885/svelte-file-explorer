function H() {
}
function ge(t) {
  return t();
}
function ye() {
  return /* @__PURE__ */ Object.create(null);
}
function B(t) {
  t.forEach(ge);
}
function de(t) {
  return typeof t == "function";
}
function X(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Be(t) {
  return Object.keys(t).length === 0;
}
function u(t, e) {
  t.appendChild(e);
}
function C(t, e, n) {
  t.insertBefore(e, n || null);
}
function j(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function oe(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function m(t) {
  return document.createElement(t);
}
function R(t) {
  return document.createTextNode(t);
}
function x() {
  return R(" ");
}
function Ve() {
  return R("");
}
function I(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function b(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Je(t) {
  return Array.from(t.childNodes);
}
function _e(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
function w(t, e, n, l) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, l ? "important" : "");
}
function $e(t, e, n) {
  for (let l = 0; l < t.options.length; l += 1) {
    const r = t.options[l];
    if (r.__value === e) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function Ze(t, e, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(t, n, l, e), r;
}
function se(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
let Q;
function G(t) {
  Q = t;
}
function qe() {
  if (!Q)
    throw new Error("Function called outside component initialization");
  return Q;
}
function Ue() {
  const t = qe();
  return (e, n, { cancelable: l = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const o = Ze(e, n, { cancelable: l });
      return r.slice().forEach((i) => {
        i.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const U = [], xe = [];
let W = [];
const De = [], We = /* @__PURE__ */ Promise.resolve();
let he = !1;
function Ge() {
  he || (he = !0, We.then(K));
}
function pe(t) {
  W.push(t);
}
const fe = /* @__PURE__ */ new Set();
let Z = 0;
function K() {
  if (Z !== 0)
    return;
  const t = Q;
  do {
    try {
      for (; Z < U.length; ) {
        const e = U[Z];
        Z++, G(e), Ke(e.$$);
      }
    } catch (e) {
      throw U.length = 0, Z = 0, e;
    }
    for (G(null), U.length = 0, Z = 0; xe.length; )
      xe.pop()();
    for (let e = 0; e < W.length; e += 1) {
      const n = W[e];
      fe.has(n) || (fe.add(n), n());
    }
    W.length = 0;
  } while (U.length);
  for (; De.length; )
    De.pop()();
  he = !1, fe.clear(), G(t);
}
function Ke(t) {
  if (t.fragment !== null) {
    t.update(), B(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(pe);
  }
}
function Qe(t) {
  const e = [], n = [];
  W.forEach((l) => t.indexOf(l) === -1 ? e.push(l) : n.push(l)), n.forEach((l) => l()), W = e;
}
const le = /* @__PURE__ */ new Set();
let V;
function re() {
  V = {
    r: 0,
    c: [],
    p: V
    // parent group
  };
}
function ie() {
  V.r || B(V.c), V = V.p;
}
function z(t, e) {
  t && t.i && (le.delete(t), t.i(e));
}
function O(t, e, n, l) {
  if (t && t.o) {
    if (le.has(t))
      return;
    le.add(t), V.c.push(() => {
      le.delete(t), l && (n && t.d(1), l());
    }), t.o(e);
  } else
    l && l();
}
function ce(t) {
  t && t.c();
}
function Y(t, e, n, l) {
  const { fragment: r, after_update: o } = t.$$;
  r && r.m(e, n), l || pe(() => {
    const i = t.$$.on_mount.map(ge).filter(de);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : B(i), t.$$.on_mount = [];
  }), o.forEach(pe);
}
function ee(t, e) {
  const n = t.$$;
  n.fragment !== null && (Qe(n.after_update), B(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Xe(t, e) {
  t.$$.dirty[0] === -1 && (U.push(t), Ge(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ae(t, e, n, l, r, o, i, c = [-1]) {
  const a = Q;
  G(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: H,
    not_equal: r,
    bound: ye(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: ye(),
    dirty: c,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  i && i(s.root);
  let y = !1;
  if (s.ctx = n ? n(t, e.props || {}, (h, M, ...v) => {
    const _ = v.length ? v[0] : M;
    return s.ctx && r(s.ctx[h], s.ctx[h] = _) && (!s.skip_bound && s.bound[h] && s.bound[h](_), y && Xe(t, h)), M;
  }) : [], s.update(), y = !0, B(s.before_update), s.fragment = l ? l(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = Je(e.target);
      s.fragment && s.fragment.l(h), h.forEach(j);
    } else
      s.fragment && s.fragment.c();
    e.intro && z(t.$$.fragment), Y(t, e.target, e.anchor, e.customElement), K();
  }
  G(a);
}
let te;
typeof HTMLElement == "function" && (te = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(ge).filter(de);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    B(this.$$.on_disconnect);
  }
  $destroy() {
    ee(this, 1), this.$destroy = H;
  }
  $on(t, e) {
    if (!de(e))
      return H;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const l = n.indexOf(e);
      l !== -1 && n.splice(l, 1);
    };
  }
  $set(t) {
    this.$$set && !Be(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
function Ce(t, e, n) {
  const l = t.slice();
  return l[2] = e[n], l[4] = n, l;
}
function Le(t, e, n) {
  const l = t.slice();
  return l[5] = e[n], l;
}
function Ee(t) {
  let e;
  return {
    c() {
      e = m("span"), e.textContent = "     ", b(e, "class", "mr-1");
    },
    m(n, l) {
      C(n, e, l);
    },
    p: H,
    d(n) {
      n && j(e);
    }
  };
}
function Ye(t) {
  let e, n, l = `  ${/*data*/
  t[2].name}`, r;
  return {
    c() {
      e = m("div"), e.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="18px" height="18px"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z"></path></svg>', n = x(), r = R(l), b(e, "class", "inline-block w-18 h-18");
    },
    m(o, i) {
      C(o, e, i), C(o, n, i), C(o, r, i);
    },
    p(o, i) {
      i & /*allDirectoryData*/
      1 && l !== (l = `  ${/*data*/
      o[2].name}`) && _e(r, l);
    },
    d(o) {
      o && j(e), o && j(n), o && j(r);
    }
  };
}
function et(t) {
  let e, n, l, r = `  ${/*data*/
  t[2].name}`, o;
  return {
    c() {
      e = m("div"), e.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="18" viewBox="0 0 256 256" xml:space="preserve" style="height: 100%"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"><path d="M 73.538 35.162 l -52.548 1.952 c -1.739 0 -2.753 0.651 -3.232 2.323 L 6.85 76.754 c -0.451 1.586 -2.613 2.328 -4.117 2.328 h 0 C 1.23 79.082 0 77.852 0 76.349 l 0 -10.458 V 23.046 v -2.047 v -6.273 c 0 -2.103 1.705 -3.808 3.808 -3.808 h 27.056 c 1.01 0 1.978 0.401 2.692 1.115 l 7.85 7.85 c 0.714 0.714 1.683 1.115 2.692 1.115 H 69.73 c 2.103 0 3.808 1.705 3.808 3.808 v 1.301 C 73.538 26.106 73.538 35.162 73.538 35.162 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(224,173,49); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 2.733 79.082 L 2.733 79.082 c 1.503 0 2.282 -1.147 2.733 -2.733 l 10.996 -38.362 c 0.479 -1.672 2.008 -2.824 3.748 -2.824 h 67.379 c 1.609 0 2.765 1.546 2.311 3.09 L 79.004 75.279 c -0.492 1.751 -1.571 3.818 -3.803 3.803 C 75.201 79.082 2.733 79.082 2.733 79.082 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,200,67); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path></g></svg>', n = x(), l = m("span"), o = R(r), b(e, "class", "h-18 mr-1");
    },
    m(i, c) {
      C(i, e, c), C(i, n, c), C(i, l, c), u(l, o);
    },
    p(i, c) {
      c & /*allDirectoryData*/
      1 && r !== (r = `  ${/*data*/
      i[2].name}`) && _e(o, r);
    },
    d(i) {
      i && j(e), i && j(n), i && j(l);
    }
  };
}
function Se(t) {
  let e, n;
  return e = new be({
    props: {
      allDirectoryData: [.../*data*/
      t[2].children],
      level: (
        /*level*/
        t[1] + 1
      )
    }
  }), {
    c() {
      ce(e.$$.fragment);
    },
    m(l, r) {
      Y(e, l, r), n = !0;
    },
    p(l, r) {
      const o = {};
      r & /*allDirectoryData*/
      1 && (o.allDirectoryData = [.../*data*/
      l[2].children]), r & /*level*/
      2 && (o.level = /*level*/
      l[1] + 1), e.$set(o);
    },
    i(l) {
      n || (z(e.$$.fragment, l), n = !0);
    },
    o(l) {
      O(e.$$.fragment, l), n = !1;
    },
    d(l) {
      ee(e, l);
    }
  };
}
function Me(t) {
  let e, n, l, r, o, i, c, a, s, y = (
    /*data*/
    t[2].path
  ), h = [];
  for (let p = 0; p < y.length; p += 1)
    h[p] = Ee(Le(t, y, p));
  function M(p, g) {
    return (
      /*data*/
      p[2].type === "folder" ? et : Ye
    );
  }
  let v = M(t), _ = v(t), f = (
    /*data*/
    t[2].type === "folder" && /*data*/
    t[2].children.length && Se(t)
  );
  return {
    c() {
      e = m("div"), n = m("div");
      for (let p = 0; p < h.length; p += 1)
        h[p].c();
      l = x(), r = m("span"), r.textContent = "|--", o = x(), _.c(), c = x(), f && f.c(), a = x(), b(r, "class", "mr-1"), b(n, "class", i = `level-${/*level*/
      t[1]}-margin flex align-center`), w(n, "margin-bottom", "0.5rem");
    },
    m(p, g) {
      C(p, e, g), u(e, n);
      for (let d = 0; d < h.length; d += 1)
        h[d] && h[d].m(n, null);
      u(n, l), u(n, r), u(n, o), _.m(n, null), u(e, c), f && f.m(e, null), u(e, a), s = !0;
    },
    p(p, g) {
      if (g & /*allDirectoryData*/
      1) {
        y = /*data*/
        p[2].path;
        let d;
        for (d = 0; d < y.length; d += 1) {
          const P = Le(p, y, d);
          h[d] ? h[d].p(P, g) : (h[d] = Ee(), h[d].c(), h[d].m(n, l));
        }
        for (; d < h.length; d += 1)
          h[d].d(1);
        h.length = y.length;
      }
      v === (v = M(p)) && _ ? _.p(p, g) : (_.d(1), _ = v(p), _ && (_.c(), _.m(n, null))), (!s || g & /*level*/
      2 && i !== (i = `level-${/*level*/
      p[1]}-margin flex align-center`)) && b(n, "class", i), /*data*/
      p[2].type === "folder" && /*data*/
      p[2].children.length ? f ? (f.p(p, g), g & /*allDirectoryData*/
      1 && z(f, 1)) : (f = Se(p), f.c(), z(f, 1), f.m(e, a)) : f && (re(), O(f, 1, 1, () => {
        f = null;
      }), ie());
    },
    i(p) {
      s || (z(f), s = !0);
    },
    o(p) {
      O(f), s = !1;
    },
    d(p) {
      p && j(e), oe(h, p), _.d(), f && f.d();
    }
  };
}
function tt(t) {
  let e, n, l = (
    /*allDirectoryData*/
    t[0]
  ), r = [];
  for (let i = 0; i < l.length; i += 1)
    r[i] = Me(Ce(t, l, i));
  const o = (i) => O(r[i], 1, 1, () => {
    r[i] = null;
  });
  return {
    c() {
      e = m("div");
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      this.c = H, b(e, "class", "text-left");
    },
    m(i, c) {
      C(i, e, c);
      for (let a = 0; a < r.length; a += 1)
        r[a] && r[a].m(e, null);
      n = !0;
    },
    p(i, [c]) {
      if (c & /*allDirectoryData, level*/
      3) {
        l = /*allDirectoryData*/
        i[0];
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = Ce(i, l, a);
          r[a] ? (r[a].p(s, c), z(r[a], 1)) : (r[a] = Me(s), r[a].c(), z(r[a], 1), r[a].m(e, null));
        }
        for (re(), a = l.length; a < r.length; a += 1)
          o(a);
        ie();
      }
    },
    i(i) {
      if (!n) {
        for (let c = 0; c < l.length; c += 1)
          z(r[c]);
        n = !0;
      }
    },
    o(i) {
      r = r.filter(Boolean);
      for (let c = 0; c < r.length; c += 1)
        O(r[c]);
      n = !1;
    },
    d(i) {
      i && j(e), oe(r, i);
    }
  };
}
function nt(t, e, n) {
  let { allDirectoryData: l = [] } = e, { level: r = 0 } = e;
  return t.$$set = (o) => {
    "allDirectoryData" in o && n(0, l = o.allDirectoryData), "level" in o && n(1, r = o.level);
  }, [l, r];
}
class be extends te {
  constructor(e) {
    super(), ae(
      this,
      {
        target: this.shadowRoot,
        props: se(this.attributes),
        customElement: !0
      },
      nt,
      tt,
      X,
      { allDirectoryData: 0, level: 1 },
      null
    ), e && (e.target && C(e.target, this, e.anchor), e.props && (this.$set(e.props), K()));
  }
  static get observedAttributes() {
    return ["allDirectoryData", "level"];
  }
  get allDirectoryData() {
    return this.$$.ctx[0];
  }
  set allDirectoryData(e) {
    this.$$set({ allDirectoryData: e }), K();
  }
  get level() {
    return this.$$.ctx[1];
  }
  set level(e) {
    this.$$set({ level: e }), K();
  }
}
customElements.define("directory-tree-view", be);
const q = [];
function Pe(t, e = H) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function r(c) {
    if (X(t, c) && (t = c, n)) {
      const a = !q.length;
      for (const s of l)
        s[1](), q.push(s, t);
      if (a) {
        for (let s = 0; s < q.length; s += 2)
          q[s][0](q[s + 1]);
        q.length = 0;
      }
    }
  }
  function o(c) {
    r(c(t));
  }
  function i(c, a = H) {
    const s = [c, a];
    return l.add(s), l.size === 1 && (n = e(r) || H), c(t), () => {
      l.delete(s), l.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: o, subscribe: i };
}
const lt = () => {
  const t = {
    type: "folder",
    name: "Root",
    path: [0],
    children: []
  };
  return localStorage.setItem("file-folder-collection", JSON.stringify([t])), [t];
}, Te = () => {
  let t = localStorage.getItem("file-folder-collection");
  return t ? JSON.parse(t) : lt();
}, rt = (t) => {
  localStorage.setItem(
    "file-folder-collection",
    JSON.stringify(t)
  );
}, Ae = (t, e) => {
  let n = [];
  return e >= 2 || t.forEach((l) => {
    l.type === "folder" && (n.push(l), l.children.length && (n = [...n, ...Ae(l.children, e + 1)]));
  }), n;
}, J = Pe([]), me = Pe(Te());
function ze(t, e, n) {
  const l = t.slice();
  return l[6] = e[n], l[8] = n, l;
}
function je(t, e, n) {
  const l = t.slice();
  return l[9] = e[n], l;
}
function He(t) {
  let e;
  return {
    c() {
      e = m("span"), e.textContent = "     ", b(e, "class", "mr-1");
    },
    m(n, l) {
      C(n, e, l);
    },
    p: H,
    d(n) {
      n && j(e);
    }
  };
}
function it(t) {
  let e, n, l;
  function r() {
    return (
      /*click_handler_1*/
      t[5](
        /*folder*/
        t[6]
      )
    );
  }
  return {
    c() {
      e = m("button"), b(e, "class", "white-dot"), w(e, "width", "18px"), w(e, "height", "18px"), w(e, "background", "gray"), w(e, "border", "white 1px solid"), w(e, "border-radius", "50%"), w(e, "cursor", "pointer"), w(e, "display", "inline-block");
    },
    m(o, i) {
      C(o, e, i), n || (l = I(e, "click", r), n = !0);
    },
    p(o, i) {
      t = o;
    },
    d(o) {
      o && j(e), n = !1, l();
    }
  };
}
function ot(t) {
  let e, n, l;
  function r() {
    return (
      /*click_handler*/
      t[4](
        /*folder*/
        t[6]
      )
    );
  }
  return {
    c() {
      e = m("button"), b(e, "class", "blue-dot"), w(e, "width", "18px"), w(e, "height", "18px"), w(e, "background", "blue"), w(e, "border-radius", "50%"), w(e, "border", "white 1px solid"), w(e, "cursor", "pointer"), w(e, "display", "inline-block");
    },
    m(o, i) {
      C(o, e, i), n || (l = I(e, "click", r), n = !0);
    },
    p(o, i) {
      t = o;
    },
    d(o) {
      o && j(e), n = !1, l();
    }
  };
}
function Ne(t) {
  let e, n, l, r, o, i, c, a, s, y, h = `  ${/*folder*/
  t[6].name}`, M, v, _, f, p, g = (
    /*folder*/
    t[6].path
  ), d = [];
  for (let k = 0; k < g.length; k += 1)
    d[k] = He(je(t, g, k));
  function P(k, L) {
    return L & /*selectedPath, directoriesTillLevel2*/
    3 && (f = null), f == null && (f = !!/*isSelected*/
    k[3](
      /*selectedPath*/
      k[0],
      /*folder*/
      k[6].path
    )), f ? ot : it;
  }
  let T = P(t, -1), N = T(t);
  return {
    c() {
      e = m("div"), n = m("div"), l = m("div"), r = m("div");
      for (let k = 0; k < d.length; k += 1)
        d[k].c();
      o = x(), i = m("span"), i.textContent = "|--", c = x(), a = m("div"), a.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="18" height="18" viewBox="0 0 256 256" xml:space="preserve"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"><path d="M 73.538 35.162 l -52.548 1.952 c -1.739 0 -2.753 0.651 -3.232 2.323 L 6.85 76.754 c -0.451 1.586 -2.613 2.328 -4.117 2.328 h 0 C 1.23 79.082 0 77.852 0 76.349 l 0 -10.458 V 23.046 v -2.047 v -6.273 c 0 -2.103 1.705 -3.808 3.808 -3.808 h 27.056 c 1.01 0 1.978 0.401 2.692 1.115 l 7.85 7.85 c 0.714 0.714 1.683 1.115 2.692 1.115 H 69.73 c 2.103 0 3.808 1.705 3.808 3.808 v 1.301 C 73.538 26.106 73.538 35.162 73.538 35.162 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(224,173,49); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 2.733 79.082 L 2.733 79.082 c 1.503 0 2.282 -1.147 2.733 -2.733 l 10.996 -38.362 c 0.479 -1.672 2.008 -2.824 3.748 -2.824 h 67.379 c 1.609 0 2.765 1.546 2.311 3.09 L 79.004 75.279 c -0.492 1.751 -1.571 3.818 -3.803 3.803 C 75.201 79.082 2.733 79.082 2.733 79.082 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,200,67); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path></g></svg>', s = x(), y = m("span"), M = R(h), _ = x(), N.c(), p = x(), b(i, "class", "mr-1"), b(a, "class", "h-18 mr-1"), b(r, "class", v = `level-${/*folder*/
      t[6].path.length - 1}-margin flex align-center`), b(n, "class", "flex space-between"), w(n, "margin-bottom", "0.5rem"), b(e, "class", "m-auto w-60");
    },
    m(k, L) {
      C(k, e, L), u(e, n), u(n, l), u(l, r);
      for (let $ = 0; $ < d.length; $ += 1)
        d[$] && d[$].m(r, null);
      u(r, o), u(r, i), u(r, c), u(r, a), u(r, s), u(r, y), u(y, M), u(n, _), N.m(n, null), u(e, p);
    },
    p(k, L) {
      if (L & /*directoriesTillLevel2*/
      2) {
        g = /*folder*/
        k[6].path;
        let $;
        for ($ = 0; $ < g.length; $ += 1) {
          const ne = je(k, g, $);
          d[$] ? d[$].p(ne, L) : (d[$] = He(), d[$].c(), d[$].m(r, o));
        }
        for (; $ < d.length; $ += 1)
          d[$].d(1);
        d.length = g.length;
      }
      L & /*directoriesTillLevel2*/
      2 && h !== (h = `  ${/*folder*/
      k[6].name}`) && _e(M, h), L & /*directoriesTillLevel2*/
      2 && v !== (v = `level-${/*folder*/
      k[6].path.length - 1}-margin flex align-center`) && b(r, "class", v), T === (T = P(k, L)) && N ? N.p(k, L) : (N.d(1), N = T(k), N && (N.c(), N.m(n, null)));
    },
    d(k) {
      k && j(e), oe(d, k), N.d();
    }
  };
}
function st(t) {
  let e, n = (
    /*directoriesTillLevel2*/
    t[1]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Ne(ze(t, n, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      e = Ve(), this.c = H;
    },
    m(r, o) {
      for (let i = 0; i < l.length; i += 1)
        l[i] && l[i].m(r, o);
      C(r, e, o);
    },
    p(r, [o]) {
      if (o & /*selectFolder, directoriesTillLevel2, isSelected, selectedPath*/
      15) {
        n = /*directoriesTillLevel2*/
        r[1];
        let i;
        for (i = 0; i < n.length; i += 1) {
          const c = ze(r, n, i);
          l[i] ? l[i].p(c, o) : (l[i] = Ne(c), l[i].c(), l[i].m(e.parentNode, e));
        }
        for (; i < l.length; i += 1)
          l[i].d(1);
        l.length = n.length;
      }
    },
    i: H,
    o: H,
    d(r) {
      oe(l, r), r && j(e);
    }
  };
}
function ct(t, e, n) {
  let l = [], r = [];
  me.subscribe((s) => {
    n(1, r = Ae(s, 0));
  }), J.subscribe((s) => {
    n(0, l = s);
  });
  const o = (s) => {
    J.set(s);
  };
  return [
    l,
    r,
    o,
    (s, y) => {
      if (s.length !== y.length)
        return !1;
      for (let h = 0; h < s.length; h++)
        if (s[h] !== y[h])
          return !1;
      return !0;
    },
    (s) => o(s.path),
    (s) => o(s.path)
  ];
}
class Ie extends te {
  constructor(e) {
    super(), ae(
      this,
      {
        target: this.shadowRoot,
        props: se(this.attributes),
        customElement: !0
      },
      ct,
      st,
      X,
      {},
      null
    ), e && e.target && C(e.target, this, e.anchor);
  }
}
customElements.define("select-directory", Ie);
function at(t) {
  let e, n, l, r, o, i, c, a, s, y, h, M, v, _, f, p;
  return i = new Ie({}), {
    c() {
      e = m("div"), n = m("div"), l = m("div"), l.innerHTML = '<h2 style="text-align: center; width: 100%">Select Directory</h2>', r = x(), o = m("div"), ce(i.$$.fragment), c = x(), a = m("div"), s = m("button"), y = R("Select"), M = x(), v = m("button"), v.textContent = "Cancel", this.c = H, b(l, "class", "flex space-between align-center"), w(o, "padding", "1rem"), w(s, "padding", "10px 20px"), w(s, "margin", "0.5rem"), s.disabled = h = !/*selectedPath*/
      t[0].length, w(v, "padding", "10px 20px"), w(v, "margin", "0.5rem"), b(a, "class", "mt-2 mb-2 m-auto w-60 flex space-between"), b(n, "id", "modal"), b(n, "class", "modal text-left"), b(n, "style", "width: 60%; height: 50%; padding: 1rem 2rem; border-radius: 15px; /* border: 1px solid white; background-color: black; */ background-color: white; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);"), b(e, "class", "modal-container"), b(e, "style", "margin: 0; display: flex; justify-content: center; /* align-items: center; */ padding: 3rem 5rem; min-width: 320px; min-height: 100vh; width: 100%; position: absolute; top: 0; left: 0; z-index: 10; box-sizing: border-box; background: rgb(0, 0, 0, 0.55);");
    },
    m(g, d) {
      C(g, e, d), u(e, n), u(n, l), u(n, r), u(n, o), Y(i, o, null), u(n, c), u(n, a), u(a, s), u(s, y), u(a, M), u(a, v), _ = !0, f || (p = [
        I(
          s,
          "click",
          /*click_handler*/
          t[2]
        ),
        I(
          v,
          "click",
          /*click_handler_1*/
          t[3]
        )
      ], f = !0);
    },
    p(g, [d]) {
      (!_ || d & /*selectedPath*/
      1 && h !== (h = !/*selectedPath*/
      g[0].length)) && (s.disabled = h);
    },
    i(g) {
      _ || (z(i.$$.fragment, g), _ = !0);
    },
    o(g) {
      O(i.$$.fragment, g), _ = !1;
    },
    d(g) {
      g && j(e), ee(i), f = !1, B(p);
    }
  };
}
function ut(t, e, n) {
  let l = [];
  J.subscribe((c) => {
    n(0, l = c);
  });
  const r = Ue();
  return [l, r, () => r("modalClose"), () => {
    r("resetDropdown"), r("modalClose"), J.set([]);
  }];
}
class Re extends te {
  constructor(e) {
    super(), ae(
      this,
      {
        target: this.shadowRoot,
        props: se(this.attributes),
        customElement: !0
      },
      ut,
      at,
      X,
      {},
      null
    ), e && e.target && C(e.target, this, e.anchor);
  }
}
customElements.define("select-directory-modal", Re);
function Oe(t) {
  let e, n;
  return e = new Re({}), e.$on(
    "modalClose",
    /*toggleSelectDirectoryModalOpen*/
    t[5]
  ), e.$on(
    "resetDropdown",
    /*resetDropdown*/
    t[7]
  ), {
    c() {
      ce(e.$$.fragment);
    },
    m(l, r) {
      Y(e, l, r), n = !0;
    },
    p: H,
    i(l) {
      n || (z(e.$$.fragment, l), n = !0);
    },
    o(l) {
      O(e.$$.fragment, l), n = !1;
    },
    d(l) {
      ee(e, l);
    }
  };
}
function Fe(t) {
  let e, n;
  return e = new be({
    props: {
      level: dt,
      allDirectoryData: (
        /*allDirectoryData*/
        t[3]
      )
    }
  }), {
    c() {
      ce(e.$$.fragment);
    },
    m(l, r) {
      Y(e, l, r), n = !0;
    },
    p(l, r) {
      const o = {};
      r & /*allDirectoryData*/
      8 && (o.allDirectoryData = /*allDirectoryData*/
      l[3]), e.$set(o);
    },
    i(l) {
      n || (z(e.$$.fragment, l), n = !0);
    },
    o(l) {
      O(e.$$.fragment, l), n = !1;
    },
    d(l) {
      ee(e, l);
    }
  };
}
function ft(t) {
  var we;
  let e, n, l, r, o, i, c, a, s, y, h, M, v, _, f, p, g, d, P, T, N, k, L, $, ne, A, ue, ve, E = (
    /*isSelectDirectoryModalOpen*/
    t[2] && /*input*/
    t[0] && Oe(t)
  ), S = (
    /*allDirectoryData*/
    ((we = t[3]) == null ? void 0 : we.length) && Fe(t)
  );
  return {
    c() {
      e = m("div"), n = m("h2"), n.textContent = "Directory Manager", l = x(), r = m("div"), o = m("input"), i = x(), c = m("select"), a = m("option"), a.textContent = "Select Type", s = m("option"), s.textContent = "File", y = m("option"), y.textContent = "Folder", M = x(), v = m("div"), _ = m("button"), f = R("Save"), g = x(), d = m("button"), P = R("Cancel"), N = x(), E && E.c(), k = x(), L = m("div"), $ = m("h3"), $.textContent = "Data Heirarchy", ne = x(), S && S.c(), this.c = H, w(n, "text-align", "center"), b(o, "id", "input"), b(o, "type", "text"), o.value = /*input*/
      t[0], b(o, "class", "input"), b(o, "placeholder", "Write Folder or File Name to add"), a.__value = "", a.value = a.__value, s.__value = "file", s.value = s.__value, y.__value = "folder", y.value = y.__value, b(c, "name", "input_type"), b(c, "id", "input_type"), b(c, "class", "input-dropdown"), c.disabled = h = !/*input*/
      t[0], b(r, "class", "flex space-between"), w(_, "padding", "10px 20px"), w(_, "margin", "0.5rem"), _.disabled = p = !/*input*/
      t[0] || !/*selectedPath*/
      t[4].length, w(d, "padding", "10px 20px"), w(d, "margin", "0.5rem"), d.disabled = T = !/*input*/
      t[0], w(v, "display", "flex"), w(v, "width", "100%"), w(v, "justify-content", "center"), w($, "text-align", "center"), b(L, "class", "w-60 m-auto p-30"), b(e, "class", "w-100");
    },
    m(D, F) {
      C(D, e, F), u(e, n), u(e, l), u(e, r), u(r, o), u(r, i), u(r, c), u(c, a), u(c, s), u(c, y), $e(
        c,
        /*inputType*/
        t[1]
      ), u(e, M), u(e, v), u(v, _), u(_, f), u(v, g), u(v, d), u(d, P), u(e, N), E && E.m(e, null), u(e, k), u(e, L), u(L, $), u(L, ne), S && S.m(L, null), A = !0, ue || (ve = [
        I(
          o,
          "change",
          /*handleInputChange*/
          t[8]
        ),
        I(
          o,
          "keyup",
          /*handleInputChange*/
          t[8]
        ),
        I(
          c,
          "change",
          /*handleDropdownValueChange*/
          t[9]
        ),
        I(
          _,
          "click",
          /*handleSubmit*/
          t[10]
        ),
        I(
          d,
          "click",
          /*resetForm*/
          t[6]
        )
      ], ue = !0);
    },
    p(D, [F]) {
      var ke;
      (!A || F & /*input*/
      1 && o.value !== /*input*/
      D[0]) && (o.value = /*input*/
      D[0]), (!A || F & /*inputType*/
      2) && $e(
        c,
        /*inputType*/
        D[1]
      ), (!A || F & /*input*/
      1 && h !== (h = !/*input*/
      D[0])) && (c.disabled = h), (!A || F & /*input, selectedPath*/
      17 && p !== (p = !/*input*/
      D[0] || !/*selectedPath*/
      D[4].length)) && (_.disabled = p), (!A || F & /*input*/
      1 && T !== (T = !/*input*/
      D[0])) && (d.disabled = T), /*isSelectDirectoryModalOpen*/
      D[2] && /*input*/
      D[0] ? E ? (E.p(D, F), F & /*isSelectDirectoryModalOpen, input*/
      5 && z(E, 1)) : (E = Oe(D), E.c(), z(E, 1), E.m(e, k)) : E && (re(), O(E, 1, 1, () => {
        E = null;
      }), ie()), /*allDirectoryData*/
      (ke = D[3]) != null && ke.length ? S ? (S.p(D, F), F & /*allDirectoryData*/
      8 && z(S, 1)) : (S = Fe(D), S.c(), z(S, 1), S.m(L, null)) : S && (re(), O(S, 1, 1, () => {
        S = null;
      }), ie());
    },
    i(D) {
      A || (z(E), z(S), A = !0);
    },
    o(D) {
      O(E), O(S), A = !1;
    },
    d(D) {
      D && j(e), E && E.d(), S && S.d(), ue = !1, B(ve);
    }
  };
}
const dt = 0;
function ht(t, e, n) {
  let l = "", r = "", o = !1, i = [];
  me.subscribe((f) => {
    n(3, i = f);
  });
  let c = [];
  J.subscribe((f) => {
    n(4, c = f);
  });
  const a = () => {
    n(2, o = !o);
  }, s = () => {
    n(0, l = ""), n(1, r = ""), J.set([]);
  }, y = () => {
    n(1, r = "");
  }, h = (f) => {
    n(0, l = f.target.value.trim());
  }, M = (f) => {
    f.target.value !== "" && (n(1, r = f.target.value), J.set([]), a());
  }, v = () => {
    let f = i[0];
    c.length > 1 && (f = f.children[c[1]]), _(f, l, r), rt(i), me.set(Te()), s();
  }, _ = (f, p, g) => {
    for (let P of f.children)
      if (P.type === g && P.name === p) {
        alert(`${g.toUpperCase()} named "${p}" already exists 
 In the selected directory!`), console.warn("duplicate " + g);
        return;
      }
    const d = {
      type: g,
      name: p,
      path: [...f.path, f.children.length],
      ...g === "folder" && { children: [] }
    };
    f.children.push(d);
  };
  return [
    l,
    r,
    o,
    i,
    c,
    a,
    s,
    y,
    h,
    M,
    v
  ];
}
class pt extends te {
  constructor(e) {
    super();
    const n = document.createElement("style");
    n.textContent = ".input{padding:0.7rem;width:80%;margin:10px}.input-dropdown{width:20%;margin:10px;text-align:center}.input-dropdown option{width:20%;margin:10px;text-align:center}.flex{display:flex}.space-between{justify-content:space-between}.w-100{width:100%}.w-60{width:60%}.p-30{padding:30px}.w-60{width:60%}.m-auto{margin:auto}.input{padding:0.7rem;width:80%;margin:10px}.input-dropdown{width:20%;margin:10px;text-align:center}.input-dropdown option{width:20%;margin:10px;text-align:center}", this.shadowRoot.appendChild(n), ae(
      this,
      {
        target: this.shadowRoot,
        props: se(this.attributes),
        customElement: !0
      },
      ht,
      ft,
      X,
      {},
      null
    ), e && e.target && C(e.target, this, e.anchor);
  }
}
customElements.define("input-form", pt);
